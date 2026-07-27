import { assert } from './project.mjs';

// Browser-side acceptance oracle for the Comparison Visual Scale. It reads
// canonical Adapter/Metric SSOT objects and the painted DOM independently; it
// deliberately does not call TraceDomain or the production scale planner.
export async function selectAllIncomeStatementPeriods(page, company) {
  return page.evaluate((companyName) => {
    const group = metricGroupForCompany(companyName, 'incomeStatement');
    if (!group) return 0;
    selectCompanyGroup(group);
    state.multiPeriodMode = true;
    setSelectedPeriods(group.records.map((record) => record.index));
    finishPeriodScopeChange();
    return group.records.length;
  }, company);
}

export async function waitForCalibratedComparison(page, expectedCount, timeout = 20_000) {
  await page.waitForFunction((count) => (
    document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
    && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
  ), expectedCount, { timeout });
}

export async function comparisonMoneyScaleSnapshot(page) {
  return page.evaluate(() => {
    const moneyUnits = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 };
    // Independent dated test fixture: reporting-currency units per USD. Keep
    // this literal separate from TraceDomain so an FX wiring error cannot
    // validate itself.
    const unitsPerUsd = {
      USD: 1,
      CHF: 0.80853,
      EUR: 0.87712,
      CNY: 6.7982,
      CNH: 6.7982,
      JPY: 161.65,
      KRW: 1536.47,
      HKD: 7.8421,
      GBP: 0.75654,
      DKK: 6.5372,
      BRL: 5.1689,
      SAR: 3.75,
    };
    const currencyCodes = {
      '$': 'USD', USD: 'USD', 'US$': 'USD',
      CHF: 'CHF', '₣': 'CHF',
      '€': 'EUR', EUR: 'EUR',
      RMB: 'CNY', CNY: 'CNY', CNH: 'CNH',
      '¥': 'JPY', JPY: 'JPY',
      '₩': 'KRW', KRW: 'KRW',
      'HK$': 'HKD', HKD: 'HKD',
      '£': 'GBP', GBP: 'GBP',
      DKK: 'DKK', BRL: 'BRL', 'R$': 'BRL',
      SAR: 'SAR', 'ر.س': 'SAR',
    };
    const expectedRecords = isMultiPeriodScope()
      ? selectedPeriodRecords()
      : scopeCompanies()
        .map((company) => defaultRecordForCompanyMetric(company, 'incomeStatement'))
        .filter(Boolean);
    const expectedByKey = new Map(expectedRecords.map((record) => [record.dataset.key, record]));
    const flow = document.querySelector('#sankeyComparison .comparison-flow');
    const cards = [...document.querySelectorAll('#sankeyComparison .comparison-chart-host')];
    const revenueLineageEntry = (revenue, id) => {
      if (id === 'revenue') {
        return {
          value: revenue?.total,
          occurrences: 1,
          invalidId: false,
        };
      }
      let found;
      let occurrences = 0;
      let invalidId = false;
      let cyclic = false;
      const active = new Set();
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
          } else if (value.id === id) {
            occurrences += 1;
            if (found === undefined) found = value.value;
          }
        }
        ['items', 'children', 'breakdowns', 'grossItems'].forEach((key) => visit(value[key]));
        visit(value.paymentNetwork);
        active.delete(value);
      };
      visit(revenue);
      return { value: found, occurrences, invalidId, cyclic };
    };
    return {
      status: document.getElementById('sankeyComparison')?.dataset.scaleStatus || '',
      language: document.documentElement.lang,
      zoom: state.comparisonZoom,
      expectedKeys: expectedRecords.map((record) => record.dataset.key),
      declaredCommonViewUnitsPerUsd: Number(flow?.dataset.commonViewUnitsPerUsd),
      declaredFitFactor: Number(flow?.dataset.fitFactor),
      declaredBaseContentWidth: Number(flow?.dataset.baseContentWidth),
      flowVisible: flow
        ? getComputedStyle(flow).visibility !== 'hidden' && getComputedStyle(flow).display !== 'none'
        : false,
      previewing: document.getElementById('sankeyComparison')?.classList.contains('zoom-previewing') || false,
      cards: cards.map((host) => {
        const key = host.dataset.datasetKey;
        const record = expectedByKey.get(key);
        const dataset = record?.dataset;
        const anchor = String(dataset?.comparisonScale?.anchorNodeId || 'revenue');
        const renderedNodes = (dataset?.nodes || []).filter((node) => !node?.routeOnly);
        const renderedNodeIds = renderedNodes.map((node) => node?.id);
        const canonicalNodeIds = renderedNodeIds.every((id) => (
          typeof id === 'string' && Boolean(id) && id.trim() === id
        )) && new Set(renderedNodeIds).size === renderedNodeIds.length;
        const anchorNodes = renderedNodes.filter((node) => (
          !node?.routeOnly && String(node.id) === anchor
        ));
        const anchorNode = anchorNodes.length === 1 ? anchorNodes[0] : null;
        const financial = financialRecordByKey.get(key);
        const unitMultiplier = moneyUnits[financial?.unit];
        const currencyUnitsPerUsd = unitsPerUsd[currencyCodes[financial?.currency]];
        const usdPerValue = unitMultiplier / currencyUnitsPerUsd;
        const authoredValue = anchorNode?.value;
        const ssotAnchor = revenueLineageEntry(financial?.revenue, anchor);
        const ssotAnchorValue = ssotAnchor.value;
        // The painted face encodes the Adapter's authored/display value.
        // Metric SSOT independently proves its identity and rounding-bound
        // match below, while currency and unit define that visible value's
        // money dimension.
        const amountUsd = Math.abs(authoredValue) * usdPerValue;
        const anchorRects = [...host.querySelectorAll('rect.sankey-node[data-node]')]
          .filter((candidate) => candidate.getAttribute('data-node') === anchor);
        const rect = anchorRects.length === 1 ? anchorRects[0] : null;
        const svg = host.querySelector(':scope > svg');
        const viewBoxWidth = Number(svg?.viewBox?.baseVal?.width);
        const viewBoxHeight = Number(svg?.viewBox?.baseVal?.height);
        const viewFaceHeight = Number(rect?.getAttribute('height'));
        const nativeViewUnitsPerUsd = viewFaceHeight / amountUsd;
        const hostBounds = host.getBoundingClientRect();
        const rectBounds = rect?.getBoundingClientRect();
        return {
          key,
          anchor,
          canonicalNodeIds,
          canonicalAnchorNodes: anchorNodes.length,
          anchorRole: anchorNode?.type,
          authoredValue,
          ssotAnchorValue,
          ssotAnchorOccurrences: ssotAnchor.occurrences,
          ssotLineageHasInvalidId: ssotAnchor.invalidId,
          ssotLineageIsCyclic: ssotAnchor.cyclic,
          renderedAnchorFaces: anchorRects.length,
          decimals: financial?.decimals,
          currency: financial?.currency || '',
          unit: financial?.unit || '',
          adapterCurrency: dataset?.meta?.currency,
          adapterUnit: dataset?.meta?.unit,
          adapterCurrencyCode: dataset?.meta?.currency
            ? currencyCodes[dataset.meta.currency] || ''
            : '',
          financialCurrencyCode: currencyCodes[financial?.currency] || '',
          usdPerValue,
          amountUsd,
          viewBoxWidth,
          viewBoxHeight,
          viewFaceHeight,
          nativeViewUnitsPerUsd,
          styleWidth: Number.parseFloat(host.style.width),
          hostWidth: hostBounds.width,
          baseWidth: Number(host.dataset.baseWidth),
          renderedHeight: rectBounds?.height || 0,
          cssPxPerUsd: rectBounds ? rectBounds.height / amountUsd : 0,
          declaredAnchor: host.dataset.scaleAnchor,
          declaredAnchorRole: host.dataset.scaleAnchorRole,
          declaredProvenance: host.dataset.valueScaleProvenance,
          declaredAuthoredValue: Number(host.dataset.anchorAuthoredValue),
          declaredUsdPerValue: Number(host.dataset.usdPerValue),
          declaredViewUnitsPerValue: Number(host.dataset.viewUnitsPerValue),
          declaredViewUnitsPerUsd: Number(host.dataset.viewUnitsPerUsd),
          declaredCanvasWidth: Number(host.dataset.canvasWidth),
          declaredCanvasHeight: Number(host.dataset.canvasHeight),
          declaredNormalizationFactor: Number(host.dataset.normalizationFactor),
          declaredCombinedScale: Number(host.dataset.scaleFactor),
        };
      }),
    };
  });
}

export function assertComparisonMoneyScale(snapshot, expectedCount, phase) {
  const browserSubpixel = 1 / 32;
  assert(snapshot.status === 'calibrated', `${phase}: comparison scale status is ${snapshot.status || 'blank'}`);
  assert(snapshot.cards.length === expectedCount, `${phase}: expected ${expectedCount} calibrated cards, got ${snapshot.cards.length}`);
  assert(
    JSON.stringify(snapshot.cards.map((card) => card.key)) === JSON.stringify(snapshot.expectedKeys),
    `${phase}: rendered comparison keys/order differ from the selected canonical records`
  );
  assert(snapshot.flowVisible, `${phase}: comparison flow is not visible`);
  assert(!snapshot.previewing, `${phase}: comparison still shows a bitmap zoom preview`);

  const commonViewUnitsPerUsd = Math.min(...snapshot.cards.map((card) => card.nativeViewUnitsPerUsd));
  assert(
    Number.isFinite(commonViewUnitsPerUsd) && commonViewUnitsPerUsd > 0,
    `${phase}: independently measured common view units/USD is ${commonViewUnitsPerUsd}`
  );
  assert(
    Number.isFinite(snapshot.declaredFitFactor) && snapshot.declaredFitFactor > 0,
    `${phase}: invalid fit factor ${snapshot.declaredFitFactor}`
  );
  assert(
    Math.abs(snapshot.declaredCommonViewUnitsPerUsd / commonViewUnitsPerUsd - 1) < 1e-10,
    `${phase}: declared common scale differs from independently measured renderer geometry`
  );

  const numericUlp = (value) => {
    const magnitude = Math.abs(value);
    if (magnitude === 0 || magnitude < 2 ** -1022) return Number.MIN_VALUE;
    return 2 ** (Math.floor(Math.log2(magnitude)) - 52);
  };
  const idealScreenScales = [];
  snapshot.cards.forEach((card) => {
    assert(card.anchor, `${phase}: ${card.key} has no scale anchor`);
    assert(
      card.canonicalNodeIds && card.canonicalAnchorNodes === 1,
      `${phase}: ${card.key} has non-canonical, duplicate, or ambiguous Adapter node ids`
    );
    assert(card.declaredProvenance, `${phase}: ${card.key} has no geometry provenance`);
    assert(card.declaredAnchor === card.anchor, `${phase}: ${card.key} declared the wrong anchor`);
    assert(
      card.declaredAnchorRole === card.anchorRole
        && ['source', 'hub'].includes(card.declaredAnchorRole),
      `${phase}: ${card.key} rendered anchor role differs from its validated Adapter role`
    );
    assert(
      typeof card.authoredValue === 'number'
        && Number.isFinite(card.authoredValue)
        && card.authoredValue > 0,
      `${phase}: ${card.key} canonical anchor has no non-zero value`
    );
    assert(
      typeof card.decimals === 'number'
        && Number.isInteger(card.decimals)
        && card.decimals >= 0
        && card.decimals <= 12,
      `${phase}: ${card.key} has an invalid authoritative decimals field`
    );
    const displayTolerance = 0.5 * (10 ** -card.decimals);
    assert(
      Number.isFinite(card.ssotAnchorValue)
        && Math.abs(card.authoredValue - card.ssotAnchorValue)
          <= displayTolerance,
      `${phase}: ${card.key} Adapter anchor does not match Metric SSOT revenue lineage`
    );
    assert(
      !card.ssotLineageHasInvalidId
        && !card.ssotLineageIsCyclic
        && card.ssotAnchorOccurrences === 1,
      `${phase}: ${card.key} Metric SSOT anchor lineage is missing or ambiguous`
    );
    assert(
      Math.max(numericUlp(card.authoredValue), numericUlp(card.ssotAnchorValue))
        <= displayTolerance,
      `${phase}: ${card.key} display precision is not representable at its anchor magnitude`
    );
    assert(
      Number.isFinite(card.amountUsd) && card.amountUsd > 0,
      `${phase}: ${card.key} canonical SSOT amount cannot be converted to USD`
    );
    assert(
      card.adapterUnit === card.unit
        && typeof card.adapterCurrency === 'string'
        && (
          !card.adapterCurrency
          || (
            card.adapterCurrencyCode
            && card.adapterCurrencyCode === card.financialCurrencyCode
          )
        ),
      `${phase}: ${card.key} rendered and Metric SSOT money dimensions disagree`
    );
    assert(
      card.renderedAnchorFaces === 1,
      `${phase}: ${card.key} rendered ${card.renderedAnchorFaces} anchor faces`
    );
    assert(
      card.viewBoxWidth > 0 && card.viewBoxHeight > 0 && card.viewFaceHeight > 0,
      `${phase}: ${card.key} has invalid rendered viewBox geometry`
    );
    assert(
      card.declaredCanvasWidth === card.viewBoxWidth
        && card.declaredCanvasHeight === card.viewBoxHeight,
      `${phase}: ${card.key} planned canvas differs from its rendered viewBox`
    );
    assert(card.renderedHeight > 0, `${phase}: ${card.key} anchor is not visibly rendered`);
    assert(
      Math.abs(card.declaredAuthoredValue - card.authoredValue) < 1e-12,
      `${phase}: ${card.key} declared anchor value differs from its canonical Adapter`
    );
    assert(
      Math.abs(card.declaredUsdPerValue / card.usdPerValue - 1) < 1e-12,
      `${phase}: ${card.key} declared USD conversion differs from Metric SSOT`
    );
    assert(
      Math.abs(card.declaredViewUnitsPerValue - card.viewFaceHeight / Math.abs(card.authoredValue)) < 1e-10,
      `${phase}: ${card.key} declared renderer scale differs from the painted node face`
    );
    assert(
      Math.abs(card.declaredViewUnitsPerUsd / card.nativeViewUnitsPerUsd - 1) < 1e-10,
      `${phase}: ${card.key} declared native scale differs from independent DOM geometry`
    );

    const expectedNormalization = commonViewUnitsPerUsd / card.nativeViewUnitsPerUsd;
    assert(
      expectedNormalization > 0 && expectedNormalization <= 1.000001,
      `${phase}: ${card.key} has invalid independent normalization factor`
    );
    assert(
      Math.abs(card.declaredNormalizationFactor / expectedNormalization - 1) < 1e-10,
      `${phase}: ${card.key} normalization differs from independent renderer geometry`
    );
    assert(card.declaredCombinedScale > 0, `${phase}: ${card.key} has invalid combined scale`);
    assert(
      Math.abs(card.declaredCombinedScale / (expectedNormalization * snapshot.declaredFitFactor) - 1) < 1e-10,
      `${phase}: ${card.key} combined scale does not preserve normalization × fit`
    );

    const expectedBaseWidth = card.viewBoxWidth * expectedNormalization * snapshot.declaredFitFactor;
    assert(
      Math.abs(card.baseWidth - expectedBaseWidth) <= Math.max(1e-12, expectedBaseWidth * 1e-10),
      `${phase}: ${card.key} base width was clamped or rounded (${card.baseWidth} vs ${expectedBaseWidth})`
    );
    const expectedStyleWidth = expectedBaseWidth * snapshot.zoom;
    const cssSerializationTolerance = Math.max(1e-6, expectedStyleWidth * 5e-6);
    assert(
      Math.abs(card.styleWidth - expectedStyleWidth) <= cssSerializationTolerance,
      `${phase}: ${card.key} committed width differs from exact base × zoom `
        + `(${card.styleWidth} vs ${expectedStyleWidth})`
    );
    assert(
      Math.abs(card.hostWidth - expectedStyleWidth)
        <= browserSubpixel + 0.001 + cssSerializationTolerance,
      `${phase}: ${card.key} browser layout width ${card.hostWidth} exceeds subpixel tolerance around ${expectedStyleWidth}`
    );

    const idealCssPxPerUsd = card.nativeViewUnitsPerUsd * expectedStyleWidth / card.viewBoxWidth;
    idealScreenScales.push(idealCssPxPerUsd);
    const paintTolerance = (browserSubpixel * 2 + 0.001) / card.amountUsd;
    assert(
      Math.abs(card.cssPxPerUsd - idealCssPxPerUsd) <= paintTolerance,
      `${phase}: ${card.key} painted monetary scale exceeds its browser subpixel bound`
    );
  });

  const minIdeal = Math.min(...idealScreenScales);
  const maxIdeal = Math.max(...idealScreenScales);
  assert(minIdeal > 0, `${phase}: non-positive ideal CSS monetary scale`);
  assert(
    maxIdeal / minIdeal <= 1 + 1e-10,
    `${phase}: exact CSS monetary scale spread ${maxIdeal / minIdeal}x is not one common scale`
  );
}

export function assertComparisonZoomCommitted(before, after, phase) {
  const browserSubpixel = 1 / 32;
  const ratio = after.zoom / before.zoom;
  assert(ratio > 1, `${phase}: zoom did not advance (${before.zoom} → ${after.zoom})`);
  assert(
    JSON.stringify(after.cards.map((card) => card.key))
      === JSON.stringify(before.cards.map((card) => card.key)),
    `${phase}: zoom changed the comparison card set`
  );
  const beforeByKey = new Map(before.cards.map((card) => [card.key, card]));
  after.cards.forEach((card) => {
    const prior = beforeByKey.get(card.key);
    assert(
      Math.abs(card.styleWidth - prior.styleWidth * ratio) <= Math.max(1e-6, card.styleWidth * 5e-6),
      `${phase}: ${card.key} host width did not commit the zoom`
    );
    assert(
      Math.abs(card.renderedHeight - prior.renderedHeight * ratio) <= browserSubpixel * 3 + 0.002,
      `${phase}: ${card.key} real SVG face did not grow with committed zoom`
    );
  });
}
