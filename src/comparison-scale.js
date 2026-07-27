/* Trace Comparison Visual Scale
 *
 * Deep Module Interface:
 *   TraceComparisonScale.createPlan([{ dataset, financial }])
 *
 * The Implementation joins three authorities without leaking their details
 * back into the viewer:
 *   renderer geometry -> native viewBox units / authored value
 *   Metric SSOT       -> currency + unit
 *   TraceDomain       -> USD conversion
 *
 * Responsive fit and user zoom intentionally stay outside this Module.
 */
(function (global) {
  'use strict';

  const engine = global.SankeyEngine;
  const domain = global.TraceDomain;
  if (
    !engine?.measureNodeValueScale
    || !domain?.strictSankeyMoneyDimension
  ) {
    throw new Error('comparison-scale.js requires SankeyEngine and TraceDomain');
  }

  function finitePositive(value) {
    return typeof value === 'number' && Number.isFinite(value) && value > 0
      ? value
      : null;
  }

  function numericUlp(value) {
    if (typeof value !== 'number' || !Number.isFinite(value)) return Infinity;
    const magnitude = Math.abs(value);
    if (magnitude === 0 || magnitude < 2 ** -1022) return Number.MIN_VALUE;
    return 2 ** (Math.floor(Math.log2(magnitude)) - 52);
  }

  function sameAmount(left, right, displayTolerance) {
    if (
      typeof left !== 'number'
      || typeof right !== 'number'
      || !Number.isFinite(left)
      || !Number.isFinite(right)
    ) {
      return false;
    }
    return Math.abs(left - right) <= displayTolerance;
  }

  function displayRoundingTolerance(financial) {
    const decimals = financial?.decimals;
    if (
      typeof decimals !== 'number'
      || !Number.isInteger(decimals)
      || decimals < 0
      || decimals > 12
    ) {
      return null;
    }
    return 0.5 * (10 ** -decimals);
  }

  function collectRevenueLineage(revenue) {
    const lineage = new Map();
    const seenIds = new Set();
    const duplicateIds = new Set();
    const active = new Set();
    let invalidId = false;
    let cyclic = false;
    const visit = (value) => {
      if (!value || typeof value !== 'object') return;
      if (active.has(value)) {
        cyclic = true;
        return;
      }
      active.add(value);
      if (Array.isArray(value)) {
        value.forEach(visit);
        active.delete(value);
        return;
      }
      if (value.id != null) {
        if (
          typeof value.id !== 'string'
          || !value.id
          || value.id.trim() !== value.id
        ) {
          invalidId = true;
        } else {
          const id = value.id;
          if (seenIds.has(id)) duplicateIds.add(id);
          else seenIds.add(id);
          if (!lineage.has(id) && finitePositive(value.value) != null) {
            lineage.set(id, value.value);
          }
        }
      }
      ['items', 'children', 'breakdowns', 'grossItems'].forEach((key) => visit(value[key]));
      visit(value.paymentNetwork);
      active.delete(value);
    };
    visit(revenue);
    return { lineage, duplicateIds, invalidId, cyclic };
  }

  // Anchor authority is split deliberately:
  //   - the Adapter names the rendered face;
  //   - the Metric SSOT proves that face is revenue lineage and owns its value.
  // A normal revenue face cannot be overridden, so a profit/cost node can
  // never become the calibration authority by configuration alone.
  function resolveRevenueAnchor(dataset, financial) {
    const renderedNodes = (dataset?.nodes || []).filter((node) => !node?.routeOnly);
    const renderedIds = new Set();
    for (const node of renderedNodes) {
      if (
        typeof node?.id !== 'string'
        || !node.id
        || node.id.trim() !== node.id
        || renderedIds.has(node.id)
      ) {
        return {
          status: 'invalid',
          code: 'invalid-or-duplicate-rendered-node-id',
          message: 'Rendered comparison node ids must be unique non-empty canonical strings',
        };
      }
      renderedIds.add(node.id);
    }
    const normalRevenue = renderedNodes.find((node) => String(node.id) === 'revenue') || null;
    const hasDeclaredAnchor = Object.prototype.hasOwnProperty.call(
      dataset?.comparisonScale || {},
      'anchorNodeId'
    );
    const declaredAnchorValue = dataset?.comparisonScale?.anchorNodeId;
    if (
      hasDeclaredAnchor
      && (
        typeof declaredAnchorValue !== 'string'
        || !declaredAnchorValue
        || declaredAnchorValue.trim() !== declaredAnchorValue
      )
    ) {
      return {
        status: 'invalid',
        code: 'invalid-anchor-declaration',
        message: 'comparisonScale.anchorNodeId must be a non-empty canonical string',
      };
    }
    const declaredId = hasDeclaredAnchor ? declaredAnchorValue : '';
    const revenueTotal = finitePositive(financial?.revenue?.total);
    const displayTolerance = displayRoundingTolerance(financial);
    if (revenueTotal == null) {
      return {
        status: 'invalid',
        code: 'missing-revenue-total',
        message: 'Metric SSOT revenue.total must be finite and positive',
      };
    }
    if (displayTolerance == null) {
      return {
        status: 'invalid',
        code: 'invalid-display-decimals',
        message: 'Metric SSOT decimals must be an integer from 0 through 12',
      };
    }

    if (normalRevenue) {
      if (declaredId) {
        return {
          status: 'invalid',
          code: 'redundant-anchor-declaration',
          message: 'Adapters with a rendered "revenue" node cannot override the comparison anchor',
        };
      }
      if (!['source', 'hub'].includes(normalRevenue.type)) {
        return {
          status: 'invalid',
          code: 'invalid-revenue-anchor-role',
          message: 'The rendered revenue anchor must be a source or hub face',
        };
      }
      if (finitePositive(normalRevenue.value) == null) {
        return {
          status: 'invalid',
          code: 'invalid-revenue-anchor-value',
          message: 'The rendered revenue anchor value must be a finite positive number',
        };
      }
      if (
        Math.max(numericUlp(normalRevenue.value), numericUlp(revenueTotal))
          > displayTolerance
      ) {
        return {
          status: 'invalid',
          code: 'unrepresentable-display-precision',
          message: 'Metric SSOT decimals exceed the numeric precision of the revenue anchor',
        };
      }
      if (!sameAmount(normalRevenue.value, revenueTotal, displayTolerance)) {
        return {
          status: 'invalid',
          code: 'revenue-anchor-value-mismatch',
          message: `Adapter revenue ${normalRevenue.value} does not match Metric SSOT revenue.total ${revenueTotal}`,
        };
      }
      return { status: 'valid', node: normalRevenue, authority: 'revenue-total' };
    }

    if (!declaredId) {
      return {
        status: 'invalid',
        code: 'missing-anchor-node',
        message: 'An Adapter without a "revenue" face must declare comparisonScale.anchorNodeId',
      };
    }
    const node = renderedNodes.find((candidate) => String(candidate.id) === declaredId) || null;
    if (!node) {
      return {
        status: 'invalid',
        code: 'missing-anchor-node',
        message: `Declared comparison anchor "${declaredId}" is not a rendered node`,
      };
    }
    if (!['source', 'hub'].includes(node.type)) {
      return {
        status: 'invalid',
        code: 'invalid-revenue-anchor-role',
        message: `Declared comparison anchor "${declaredId}" must be a source or hub face`,
      };
    }
    if (finitePositive(node.value) == null) {
      return {
        status: 'invalid',
        code: 'invalid-revenue-anchor-value',
        message: `Declared comparison anchor "${declaredId}" must have a finite positive numeric value`,
      };
    }
    const revenueLineage = collectRevenueLineage(financial.revenue);
    if (revenueLineage.invalidId) {
      return {
        status: 'invalid',
        code: 'invalid-revenue-lineage-id',
        message: 'Metric SSOT revenue lineage ids must be non-empty canonical strings',
      };
    }
    if (revenueLineage.cyclic) {
      return {
        status: 'invalid',
        code: 'cyclic-revenue-lineage',
        message: 'Metric SSOT revenue lineage must be an acyclic structural tree',
      };
    }
    if (revenueLineage.duplicateIds.has(declaredId)) {
      return {
        status: 'invalid',
        code: 'ambiguous-revenue-lineage-anchor',
        message: `Declared comparison anchor "${declaredId}" occurs more than once in Metric SSOT revenue lineage`,
      };
    }
    const lineageValue = revenueLineage.lineage.get(declaredId);
    if (
      lineageValue != null
      && Math.max(numericUlp(node.value), numericUlp(lineageValue))
        > displayTolerance
    ) {
      return {
        status: 'invalid',
        code: 'unrepresentable-display-precision',
        message: `Metric SSOT decimals exceed the numeric precision of anchor "${declaredId}"`,
      };
    }
    if (
      lineageValue == null
      || !sameAmount(node.value, lineageValue, displayTolerance)
    ) {
      return {
        status: 'invalid',
        code: 'invalid-revenue-lineage-anchor',
        message: `Declared comparison anchor "${declaredId}" is not value-matched Metric SSOT revenue lineage`,
      };
    }
    return { status: 'valid', node, authority: 'revenue-lineage' };
  }

  function diagnostic(key, stage, code, message = '') {
    return Object.freeze({ key, stage, code, message });
  }

  function planResult(status, commonViewUnitsPerUsd, measurements, diagnostics) {
    const byKey = new Map(measurements.map((measurement) => [measurement.key, measurement]));
    return Object.freeze({
      status,
      commonViewUnitsPerUsd,
      measurements: Object.freeze(measurements.slice()),
      diagnostics: Object.freeze(diagnostics.slice()),
      factorFor(key) {
        return byKey.get(String(key || ''))?.normalizationFactor ?? null;
      },
      measurementFor(key) {
        return byKey.get(String(key || '')) || null;
      },
    });
  }

  function createPlan(entries) {
    if (!Array.isArray(entries)) {
      throw new TypeError('Comparison scale entries must be an array');
    }
    if (!entries.length) {
      return planResult(
        'uncalibrated',
        null,
        [],
        [diagnostic('', 'group', 'no-records', 'A comparison scale requires at least one record')]
      );
    }

    const seen = new Set();
    const observations = [];
    const diagnostics = [];

    entries.forEach((entry, index) => {
      const dataset = entry?.dataset;
      const key = String(entry?.key || dataset?.key || '').trim();
      if (!key) throw new TypeError(`Comparison scale entry ${index} requires a dataset key`);
      if (seen.has(key)) throw new TypeError(`Duplicate comparison scale dataset key: ${key}`);
      seen.add(key);
      if (!dataset || dataset.key !== key) {
        throw new TypeError(`Comparison scale entry ${key} requires its loaded View Adapter`);
      }
      if (dataset.__datasetStub) {
        throw new TypeError(`Comparison scale entry ${key} is still a manifest stub`);
      }

      const financial = entry?.financial;
      if (!financial || financial.key !== key) {
        diagnostics.push(diagnostic(
          key,
          'metric-ssot',
          'missing-financial-record',
          'A matching Metric SSOT record is required for currency and unit'
        ));
        return;
      }

      const money = domain.strictSankeyMoneyDimension(dataset.meta, financial);
      if (money.status !== 'valid') {
        const stage = money.code === 'missing-usd-conversion'
          ? 'fx'
          : money.code.startsWith('sankey-') || money.code === 'invalid-sankey-display-currency'
            ? 'metric-contract'
            : 'metric-ssot';
        diagnostics.push(diagnostic(
          key,
          stage,
          money.code,
          `${financial.currency || ''} ${financial.unit || ''}`.trim()
        ));
        return;
      }

      const anchor = resolveRevenueAnchor(dataset, financial);
      if (anchor.status !== 'valid') {
        diagnostics.push(diagnostic(
          key,
          'metric-contract',
          anchor.code,
          anchor.message
        ));
        return;
      }

      const geometry = engine.measureNodeValueScale(dataset, anchor.node.id);
      if (geometry.status !== 'calibrated') {
        diagnostics.push(diagnostic(
          key,
          'geometry',
          geometry.reason || 'uncalibrated-geometry',
          geometry.message || ''
        ));
        return;
      }
      if (
        geometry.authoredValue !== anchor.node.value
        || geometry.anchorRole !== anchor.node.type
      ) {
        diagnostics.push(diagnostic(
          key,
          'geometry',
          'compiled-anchor-drift',
          'The compiled renderer anchor differs from the Adapter node validated against Metric SSOT'
        ));
        return;
      }

      const { currency, unit, usdPerValue } = money;

      const viewUnitsPerUsd = geometry.viewUnitsPerValue / usdPerValue;
      if (!Number.isFinite(viewUnitsPerUsd) || viewUnitsPerUsd <= 0) {
        diagnostics.push(diagnostic(key, 'fx', 'non-positive-view-units-per-usd'));
        return;
      }

      observations.push({
        key,
        anchorNodeId: geometry.anchorNodeId,
        anchorRole: geometry.anchorRole,
        authoredValue: geometry.authoredValue,
        renderedHeight: geometry.renderedHeight,
        viewUnitsPerValue: geometry.viewUnitsPerValue,
        currency,
        unit,
        usdPerValue,
        viewUnitsPerUsd,
        layoutMode: geometry.layoutMode,
        provenance: geometry.provenance,
        coordinateSpace: geometry.coordinateSpace,
        canvasWidth: geometry.canvasWidth,
        canvasHeight: geometry.canvasHeight,
        anchorAuthority: anchor.authority,
      });
    });

    // A partially normalized canvas would mix dimensions while still looking
    // authoritative. The plan therefore fails closed for the whole scope.
    if (diagnostics.length) {
      return planResult('uncalibrated', null, [], diagnostics);
    }

    const commonViewUnitsPerUsd = Math.min(...observations.map((entry) => entry.viewUnitsPerUsd));
    const measurements = observations.map((entry) => Object.freeze({
      ...entry,
      normalizationFactor: commonViewUnitsPerUsd / entry.viewUnitsPerUsd,
    }));
    const invalidNormalization = measurements.find((entry) => (
      !Number.isFinite(entry.normalizationFactor)
      || entry.normalizationFactor <= 0
      || entry.normalizationFactor > 1
    ));
    if (invalidNormalization) {
      return planResult(
        'uncalibrated',
        null,
        [],
        [diagnostic(
          invalidNormalization.key,
          'normalization',
          'invalid-normalization-factor',
          `Normalization factor is ${invalidNormalization.normalizationFactor}`
        )]
      );
    }
    return planResult('calibrated', commonViewUnitsPerUsd, measurements, []);
  }

  global.TraceComparisonScale = Object.freeze({
    createPlan,
  });
})(window);
