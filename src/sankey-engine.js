/* ====================================================================
 *  sankey-engine.js
 *  A reusable income-statement Sankey renderer (D3 + d3-sankey).
 *
 *  Feed it a data object (see data/schema.md) and it draws a polished
 *  flow diagram in the style of the NVIDIA income-statement infographic:
 *  green = value retained, red = costs, teal = revenue collection.
 *
 *  Public API:
 *      SankeyEngine.render(selector, data, overrides?)
 * ==================================================================== */
(function (global) {
  'use strict';
  let renderIdSequence = 0;

  /* ---- default theme / layout tokens (override per-call via 4th arg) ---- */
  const DEFAULTS = {
    width: 2862,
    height: 1462,
    margin: { top: 360, right: 311, bottom: 351, left: 339 },

    nodeWidth: 82,
    nodePadding: 104,
    // Set to 0 for sources whose rectangular terminals meet full-height
    // ribbons without rounded-corner seam pixels.
    nodeRadius: 1.5,

    background: '#efefef',
    // heading font — chart title, node labels, period stamp: everything that
    // is not a number or a number's description
    fontFamily:
      '"Noto Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    // numeric font — value note/description lines (e.g. "+19% Y/Y") and tooltips;
    // the big value figure itself routes to amountFontFamily. null → inherit
    // fontFamily
    valueFontFamily:
      '"Roboto",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif',
    // amount font — the value figure only (e.g. "€6.0B"), keyed off the $value
    // placeholder. Its note lines and tooltips keep valueFontFamily. null →
    // inherit valueFontFamily
    amountFontFamily:
      '"Noto Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    // rendered weight for all numeric text (values + descriptions + tooltip);
    // null → keep each authored weight. 300 = Light.
    valueWeight: 300,
    // rendered weight for node label names only (NOT the chart title, which
    // keeps its authored weight). Overrides per-dataset authored name weights;
    // null → keep each authored weight. Font routing keys off the AUTHORED
    // weight, so this changes how heavy a name renders, never which font.
    labelWeight: 600,

    titleColor: '#123e65',
    subtitleColor: '#535353',
    noteColor: '#535353',

    // solid node colours, keyed by node.type. label = text colour.
    palette: {
      source: { node: '#0e7451', label: '#008966' },
      hub: { node: '#101010', label: '#101010' },
      profit: { node: '#289321', label: '#008f47' },
      cost: { node: '#be0004', label: '#800003' },
    },

    // translucent link tints, keyed by category. hub returns null so a
    // link passing through the hub keeps the colour of its other end.
    linkTint: {
      source: '#88b7a3',
      hub: null,
      profit: '#93c68b',
      cost: '#e99485',
    },
    linkOpacity: 1,

    // typography (px) for the multi-line node labels
    type: { name: 46, value: 43, note: 31, lineGap: 8 },

    interaction: {
      enabled: true,
      dimOpacity: 0.16,
      nodeDimOpacity: 0.22,
      labelDimOpacity: 0.2,
      focusOpacity: 1,
      // 0 = apply hover highlight synchronously; any positive value fades
      // through a d3 transition instead (per-frame style writes on every
      // node/link/label, so sweeps read as lag on dense charts)
      transitionMs: 0,
      tooltip: {
        enabled: true,
        referenceWidth: 4000,
        scaleWithViewBox: true,
        percentDecimals: 1,
        // number font on the hover cards; null → inherit valueFontFamily
        fontFamily:
          '"Roboto",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif',
        fontSize: 40,
        fontWeight: 700,
        textColor: '#35566f',
        background: '#f8fbfc',
        backgroundOpacity: 0.88,
        stroke: '#d9e3e8',
        strokeOpacity: 0.65,
        strokeWidth: 1,
        paddingX: 24,
        paddingY: 13,
        width: 170,
        height: 74,
        minWidth: 150,
        minHeight: 70,
        radius: 7,
      },
    },
  };

  /* ---------------------------- helpers ---------------------------- */
  const isFn = (v) => typeof v === 'function';

  function deepMerge(base, extra) {
    if (!extra) return base;
    const out = Array.isArray(base) ? base.slice() : Object.assign({}, base);
    for (const k of Object.keys(extra)) {
      const a = out[k];
      const b = extra[k];
      out[k] =
        a && b && typeof a === 'object' && typeof b === 'object' && !Array.isArray(b)
          ? deepMerge(a, b)
          : b;
    }
    return out;
  }

  // "$37.9B"  /  cost → "($20.5B)"
  // NB: d3-sankey overwrites node.value with the computed flow sum, so the
  // display number is read from node.dv (the author's original value).
  function formatValue(node, meta) {
    if (node.valueText != null) return node.valueText;
    const cur = meta.currency != null ? meta.currency : '$';
    const unit = meta.unit != null ? meta.unit : '';
    const v = Math.abs(node.dv != null ? node.dv : node.value);
    const num = Number.isInteger(v) ? v : v.toFixed(meta.decimals != null ? meta.decimals : 1);
    const body = `${cur}${num}${unit}`;
    return node.type === 'cost' ? `(${body})` : body;
  }

  // Hover Share is renderer-owned: adapters provide authored amounts and
  // topology, while every interactive surface uses the same endpoint-ratio
  // formula. Keeping the arithmetic behind this small Interface prevents
  // per-dataset flags from changing what "share" means.
  const HoverShare = (() => {
    function trim(value, decimals) {
      return value
        .toFixed(decimals)
        .replace(/\.0+$/, '')
        .replace(/(\.\d*?)0+$/, '$1');
    }

    function format(numeratorValue, denominatorValue, decimals = 1) {
      const numerator = Number(numeratorValue);
      const denominator = Number(denominatorValue);
      if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) {
        return '';
      }
      return `${trim((numerator / denominator) * 100, decimals)}%`;
    }

    function nodeAmount(node) {
      if (!node) return 0;
      const authored = Number(node.dv);
      if (Number.isFinite(authored)) return Math.abs(authored);
      const computed = Number(node.value);
      return Number.isFinite(computed) ? Math.abs(computed) : 0;
    }

    function linkAmount(link) {
      const raw = link && link.raw ? link.raw : {};
      const value = raw.value != null ? raw.value : link && link.value;
      const numeric = Number(value);
      return Number.isFinite(numeric) ? Math.abs(numeric) : 0;
    }

    function forNode({
      link,
      hoveredNode,
      oppositeNode,
      distinctOppositeCount,
      decimals = 1,
    }) {
      const count = Number(distinctOppositeCount);
      if (!link || !hoveredNode || !oppositeNode || !Number.isFinite(count) || count < 1) {
        return '';
      }
      return forLink(link, decimals);
    }

    function forLink(link, decimals = 1) {
      const source = nodeAmount(link && link.source);
      const target = nodeAmount(link && link.target);
      return format(Math.min(source, target), Math.max(source, target), decimals);
    }

    return Object.freeze({ format, nodeAmount, linkAmount, forNode, forLink });
  })();

  function sameNode(left, right) {
    if (left === right) return true;
    if (!left || !right) return false;
    if (left.id != null && right.id != null) return String(left.id) === String(right.id);
    return left.index != null && right.index != null && left.index === right.index;
  }

  function oppositeNode(link, node) {
    if (!link) return null;
    if (sameNode(link.source, node)) return link.target;
    if (sameNode(link.target, node)) return link.source;
    return null;
  }

  function adjacentNodeKey(node) {
    if (node && node.id != null) return `id:${node.id}`;
    if (node && node.index != null) return `index:${node.index}`;
    return node;
  }

  function groupAdjacentLinks(node, links) {
    const groups = new Map();
    (links || []).forEach((link) => {
      const other = oppositeNode(link, node);
      if (!other) return;
      const key = adjacentNodeKey(other);
      if (!groups.has(key)) groups.set(key, { key, node: other, links: [] });
      groups.get(key).links.push(link);
    });
    return Array.from(groups.values());
  }

  function distinctAdjacentNodeCount(node, links) {
    return groupAdjacentLinks(node, links).length;
  }

  // default label side when a node doesn't specify one
  function autoSide(node, nCols) {
    if (node.col === 0) return 'left';
    if (node.col === nCols - 1) return 'right';
    if (node.type === 'cost') return 'below';
    return 'above';
  }

  // Canvas-size defaults derived from the dataset itself: fidelity datasets
  // must render at exactly meta.referenceImage dimensions (hard gate G2), so
  // when a reference image is declared it beats the NVIDIA-sized DEFAULTS
  // canvas. Explicit data.render.width/height still win over both.
  function referenceCanvasDefaults(data) {
    const ref = data?.meta?.referenceImage;
    const width = Number(ref?.width);
    const height = Number(ref?.height);
    return Number.isFinite(width) && width > 0 && Number.isFinite(height) && height > 0
      ? { width, height }
      : {};
  }

  function effectiveRenderConfig(data, overrides) {
    const d = data || {};
    return deepMerge(
      deepMerge(deepMerge(DEFAULTS, referenceCanvasDefaults(d)), d.render || {}),
      overrides
    );
  }

  // Effective canvas size for a dataset, computed through the same config
  // merge render() applies (data.render beats meta.referenceImage beats
  // DEFAULTS). The viewer sizes chart cards with this so card geometry can
  // never drift from the rendered SVG's viewBox.
  function canvasSize(data) {
    const cfg = effectiveRenderConfig(data);
    return { width: cfg.width, height: cfg.height };
  }

  // horizontal padding between a node face and its side label block
  const LABEL_PAD = 16;

  /* ---- pure label layout (pass 1 + pass 2) ----
   * buildLabelSpecs turns graph nodes plus layout.labels into positioned
   * text-block specs; decollideSideLabels resolves same-side overlaps.
   * render() only does the DOM work with the returned specs, so both passes
   * are unit-testable without a browser. */
  function buildLabelSpecs(graph, data, cfg, meta, nCols) {
    const gap = cfg.type.lineGap;
    // weight overrides: cfg.labelWeight (node names) / cfg.valueWeight (numbers)
    // win over a line's authored weight when set (null → keep authored). Font
    // routing is keyed off the authored weight, so these only change how heavy
    // text renders, never which font.
    const labelW = (authored) => (cfg.labelWeight != null ? cfg.labelWeight : authored);
    const numW = (authored) => (cfg.valueWeight != null ? cfg.valueWeight : authored);
    // the value figure ("€6.0B") gets its own family; falls back to the numeric
    // font so a null amountFontFamily preserves the old behaviour
    const amountFont = cfg.amountFontFamily != null ? cfg.amountFontFamily : cfg.valueFontFamily;
    const labelLayout = (data.layout && data.layout.labels) || {};
    const labelColor = (n) => n.labelColor || (cfg.palette[n.type] || cfg.palette.source).label;

    function customLines(n, block) {
      if (block.lines) {
        return block.lines.map((line) => {
          const spec = typeof line === 'string' ? { text: line } : line;
          const text = spec.text === '$value' ? formatValue(n, meta) : spec.text;
          const authoredW = spec.weight || spec.w || 400;
          // authoring convention: headings/names are bold (≥700); the value and
          // its description lines are regular weight → route to the numeric font
          // by AUTHORED weight. spec.font wins if a dataset sets one explicitly.
          const isAmount = spec.text === '$value';
          const numeric = isAmount || authoredW < 700;
          // render weight: numbers honour cfg.valueWeight, names cfg.labelWeight;
          // routing is already fixed above, so re-weighting never flips a line's
          // font family.
          const w = numeric ? numW(authoredW) : labelW(authoredW);
          return {
            t: text,
            size: spec.size || cfg.type.note,
            w,
            c: spec.color || labelColor(n),
            font:
              spec.font != null
                ? spec.font
                : isAmount
                  ? amountFont
                  : numeric
                    ? cfg.valueFontFamily
                    : null,
          };
        });
      }
      const parts = block.parts || ['name', 'value', 'notes'];
      const out = [];
      const nameLines = Array.isArray(n.label) ? n.label : n.label ? [n.label] : [];
      const nameSize = block.nameSize || cfg.type.name;
      const valueSize = block.valueSize || cfg.type.value;
      const noteSize = block.noteSize || cfg.type.note;
      parts.forEach((part) => {
        if (part === 'name') {
          nameLines.forEach((t) =>
            out.push({
              t,
              size: nameSize,
              w: labelW(block.nameWeight != null ? block.nameWeight : 700),
              c: block.nameColor || labelColor(n),
            })
          );
        } else if (part === 'value' && (n.value != null || n.valueText != null)) {
          out.push({
            t: formatValue(n, meta),
            size: valueSize,
            w: numW(block.valueWeight || 400),
            c: block.valueColor || labelColor(n),
            font: block.valueFont || amountFont,
          });
        } else if (part === 'notes') {
          (n.notes || []).forEach((nt) =>
            out.push({
              t: nt,
              size: noteSize,
              w: numW(block.noteWeight || 400),
              c: block.noteColor || cfg.noteColor,
              font: block.noteFont || cfg.valueFontFamily,
            })
          );
        }
      });
      return out;
    }

    const specs = [];
    const iconLayout = [];
    graph.nodes.forEach((n) => {
      const side = n.labelSide || autoSide(n, nCols);
      const cx = (n.x0 + n.x1) / 2;
      const cy = (n.y0 + n.y1) / 2;
      const custom = labelLayout[n.id];
      if (custom && custom.blocks) {
        custom.blocks.forEach((block) => {
          const lines = customLines(n, block);
          if (!lines.length) return;
          const localGap = block.lineGap != null ? block.lineGap : gap;
          const blockTop =
            block.top != null ? block.top + (cfg.labelYOffset || 0) : block.top;
          const blockH =
            lines.reduce((a, l) => a + l.size, 0) + localGap * (lines.length - 1);
          specs.push({
            n,
            side: 'custom',
            cx,
            anchor: block.anchor || 'middle',
            x: block.x,
            lines,
            blockH,
            top: blockTop,
            lineGap: localGap,
            semanticRole: block.semanticRole || '',
            drawIcons: false,
          });
        });
        if (custom.icons) {
          iconLayout.push(Object.assign({ n }, custom.icons));
        }
        return;
      }

      const nameLines = Array.isArray(n.label) ? n.label : n.label ? [n.label] : [];
      const valueLines = [];
      if (n.value != null || n.valueText != null)
        valueLines.push({ t: formatValue(n, meta), size: cfg.type.value, w: numW(400), c: labelColor(n), font: amountFont });
      (n.notes || []).forEach((nt) =>
        valueLines.push({ t: nt, size: cfg.type.note, w: numW(400), c: cfg.noteColor, font: cfg.valueFontFamily })
      );
      if (side === 'split-left') {
        const nameOnly = nameLines.map((t) => ({
          t,
          size: cfg.type.name,
          w: labelW(700),
          c: labelColor(n),
        }));
        const nameH =
          nameOnly.reduce((a, l) => a + l.size, 0) + gap * Math.max(0, nameOnly.length - 1);
        const valueH =
          valueLines.reduce((a, l) => a + l.size, 0) + gap * Math.max(0, valueLines.length - 1);
        specs.push({
          n,
          side: 'split-name',
          cx,
          anchor: 'end',
          x: n.x0 - 42,
          lines: nameOnly,
          blockH: nameH,
          top: cy - nameH / 2,
          drawIcons: false,
        });
        specs.push({
          n,
          side: 'split-value',
          cx,
          anchor: 'middle',
          x: cx,
          lines: valueLines,
          blockH: valueH,
          top: n.y0 - 35 - valueH,
          drawIcons: false,
        });
        return;
      }

      // lines: name (heading weight, may wrap), value (regular), notes (gray)
      const lines = [];
      nameLines.forEach((t) =>
        lines.push({ t, size: cfg.type.name, w: labelW(700), c: labelColor(n) })
      );
      valueLines.forEach((l) => lines.push(l));
      if (!lines.length) return;

      const blockH = lines.reduce((a, l) => a + l.size, 0) + gap * (lines.length - 1);

      let anchor, x, top;
      if (side === 'left') {
        anchor = 'end';
        x = n.x0 - LABEL_PAD;
        top = cy - blockH / 2;
      } else if (side === 'right') {
        anchor = 'start';
        x = n.x1 + LABEL_PAD;
        top = cy - blockH / 2;
      } else if (side === 'below') {
        anchor = 'middle';
        x = cx;
        top = n.y1 + LABEL_PAD + 4;
      } else {
        // above — block sits fully above the node top
        anchor = 'middle';
        x = cx;
        top = n.y0 - LABEL_PAD - blockH;
      }
      specs.push({ n, side, cx, anchor, x, lines, blockH, top, drawIcons: true });
    });

    return { specs, iconLayout };
  }

  // keep side labels from overlapping (push later ones down)
  function decollideSideLabels(specs, minGap = 11) {
    ['left', 'right'].forEach((s) => {
      const grp = specs.filter((sp) => sp.side === s).sort((a, b) => a.top - b.top);
      for (let i = 1; i < grp.length; i++) {
        const need = grp[i - 1].top + grp[i - 1].blockH + minGap;
        if (grp[i].top < need) grp[i].top = need;
      }
    });
    return specs;
  }

  function prepareGraphInput(data) {
    const semanticNodes = (data.nodes || []).map((node) => Object.assign({}, node));
    const semanticIds = new Set();
    semanticNodes.forEach((node) => {
      if (
        typeof node.id !== 'string'
        || !node.id
        || node.id.trim() !== node.id
      ) {
        throw new Error('Sankey nodes require a non-empty canonical string id');
      }
      if (semanticIds.has(node.id)) throw new Error(`Duplicate Sankey node id: ${node.id}`);
      semanticIds.add(node.id);
    });

    const nonNodeMetrics = new Map();
    (data.nonNodeMetrics || []).forEach((metric) => {
      if (
        !metric
        || typeof metric.id !== 'string'
        || !metric.id
        || metric.id.trim() !== metric.id
      ) {
        throw new Error('nonNodeMetrics entries require a non-empty canonical string id');
      }
      if (semanticIds.has(metric.id) || nonNodeMetrics.has(metric.id)) {
        throw new Error(`nonNodeMetrics id collides with another metric: ${metric.id}`);
      }
      nonNodeMetrics.set(metric.id, metric);
    });

    const routes = data.layout?.routes || {};
    const routeIds = new Set();
    (data.links || []).forEach((link, index) => {
      for (const side of ['source', 'target']) {
        const routeField = `${side}Route`;
        const nodeId = link[side];
        const routeId = link[routeField];
        const hasNode = typeof nodeId === 'string' && Boolean(nodeId);
        const hasRoute = typeof routeId === 'string' && Boolean(routeId);
        if (Boolean(hasNode) === Boolean(hasRoute)) {
          throw new Error(`Sankey link ${index} requires exactly one of ${side} or ${routeField}`);
        }
        if (
          (hasNode && nodeId.trim() !== nodeId)
          || (hasRoute && routeId.trim() !== routeId)
        ) {
          throw new Error(`Sankey link ${index} ${side} id must be a canonical string`);
        }
        if (hasNode && !semanticIds.has(link[side])) {
          throw new Error(`Sankey link ${index} references unknown ${side} node: ${link[side]}`);
        }
        if (hasRoute) {
          if (!routes[link[routeField]]) {
            throw new Error(`Sankey link ${index} references unknown ${routeField}: ${link[routeField]}`);
          }
          if (semanticIds.has(link[routeField])) {
            throw new Error(`Sankey route id collides with a semantic node: ${link[routeField]}`);
          }
          routeIds.add(link[routeField]);
        }
      }
    });

    if (routeIds.size && !data.layout?.nodes) {
      throw new Error('layout.routes requires a fixed layout.nodes graph');
    }

    const routeNodes = [...routeIds].sort().map((id) => {
      const metric = nonNodeMetrics.get(id) || {};
      return {
        ...metric,
        id,
        value: metric.value == null ? 0 : metric.value,
        type: metric.type || routes[id].type || 'source',
        routeOnly: true,
      };
    });
    const nodes = semanticNodes.concat(routeNodes).map((node, index) => ({ ...node, index }));
    const nodeById = new Map(nodes.map((node) => [node.id, node]));
    const links = (data.links || []).map((raw) => {
      const sourceId = raw.sourceRoute || raw.source;
      const targetId = raw.targetRoute || raw.target;
      return {
        source: nodeById.get(sourceId).index,
        target: nodeById.get(targetId).index,
        value: raw.value,
        raw,
      };
    });
    return { nodes, links, nonNodeMetrics };
  }

  function buildFixedGraph(nodes, links, data, cfg) {
    const layout = data.layout || {};
    const fixed = layout.nodes || {};
    const routes = layout.routes || {};
    const scale =
      layout.scale ||
      nodes.reduce((best, n) => {
        if (n.routeOnly) return best;
        const spec = fixed[n.id];
        return spec && n.value ? Math.min(best, spec.height / n.value) : best;
      }, Infinity);
    const ky = Number.isFinite(scale) ? scale : 1;

    const graphNodes = nodes.map((n) => {
      const spec = (n.routeOnly ? routes[n.id] : fixed[n.id]) || {};
      const x0 = spec.x != null ? spec.x : cfg.margin.left + (n.col || 0) * 426;
      const y0 = spec.y != null ? spec.y : cfg.margin.top;
      const width = spec.width != null ? spec.width : cfg.nodeWidth;
      const height = spec.height != null ? spec.height : (n.value || 1) * ky;
      return Object.assign({}, n, {
        x0,
        y0,
        x1: x0 + width,
        y1: y0 + height,
        sourceLinks: [],
        targetLinks: [],
      });
    });

    const byId = new Map(graphNodes.map((n) => [n.id, n]));
    const graphLinks = links.map((l, i) => {
      const source = byId.get(l.raw.source);
      const resolvedSource = source || byId.get(l.raw.sourceRoute);
      const target = byId.get(l.raw.target) || byId.get(l.raw.targetRoute);
      if (!resolvedSource || !target) {
        throw new Error(`Sankey link ${i} could not resolve its graph endpoints`);
      }
      const width = l.raw.width != null ? l.raw.width : l.value * ky;
      const sourceWidth = l.raw.sourceWidth != null ? l.raw.sourceWidth : width;
      const targetWidth = l.raw.targetWidth != null ? l.raw.targetWidth : width;
      const link = Object.assign({}, l, {
        index: i,
        source: resolvedSource,
        target,
        width,
        sourceWidth,
        targetWidth,
      });
      resolvedSource.sourceLinks.push(link);
      target.targetLinks.push(link);
      return link;
    });

    const sortLinks = (a, b, key) => {
      const av = a.raw[key] != null ? a.raw[key] : a.index;
      const bv = b.raw[key] != null ? b.raw[key] : b.index;
      return av - bv;
    };
    graphNodes.forEach((n) => {
      n.sourceLinks.sort((a, b) => sortLinks(a, b, 'sourceOrder'));
      n.targetLinks.sort((a, b) => sortLinks(a, b, 'targetOrder'));
      let sy = n.y0;
      n.sourceLinks.forEach((l) => {
        l.y0 = sy + l.sourceWidth / 2;
        sy += l.sourceWidth;
      });
      let ty = n.y0;
      n.targetLinks.forEach((l) => {
        l.y1 = ty + l.targetWidth / 2;
        ty += l.targetWidth;
      });
    });

    graphLinks.forEach((l) => {
      if (l.raw.y0 != null) l.y0 = l.raw.y0;
      if (l.raw.y1 != null) l.y1 = l.raw.y1;
    });

    return { nodes: graphNodes, links: graphLinks };
  }

  // Compile the exact graph geometry consumed by render(). Keeping fixed and
  // dynamic layout behind this private Seam gives tooling one renderer-owned
  // source of truth instead of asking callers to reinterpret Adapter fields.
  function compileGraph(data, cfg) {
    const graphInput = prepareGraphInput(data);
    const nodes = graphInput.nodes;
    const links = graphInput.links;
    const nCols = 1 + nodes
      .filter((node) => !node.routeOnly)
      .reduce((m, n) => Math.max(m, n.col || 0), 0);
    const fixed = Boolean(data?.layout?.nodes);
    let graph;

    if (fixed) {
      graph = buildFixedGraph(nodes, links, data, cfg);
    } else {
      const d3 = global.d3;
      if (!d3 || !d3.sankey) {
        throw new Error('d3 and d3-sankey are required to compile a dynamic Sankey graph');
      }
      const sankey = d3
        .sankey()
        .nodeWidth(cfg.nodeWidth)
        .nodePadding(cfg.nodePadding)
        .nodeAlign((n) => (n.col != null ? n.col : n.depth))
        .nodeSort((a, b) => (a.order || 0) - (b.order || 0))
        .linkSort(
          (a, b) =>
            (a.source.order || 0) - (b.source.order || 0) ||
            (a.target.order || 0) - (b.target.order || 0)
        )
        .extent([
          [cfg.margin.left, cfg.margin.top],
          [cfg.width - cfg.margin.right, cfg.height - cfg.margin.bottom],
        ]);

      graph = sankey({
        nodes: nodes.map((node) => Object.assign({}, node)),
        links: links.map((link) => Object.assign({}, link)),
      });
    }

    graph.links.forEach((link) => {
      const raw = link.raw || {};
      link.sourceWidth = raw.sourceWidth != null ? raw.sourceWidth : link.width;
      link.targetWidth = raw.targetWidth != null ? raw.targetWidth : link.width;
    });

    // d3-sankey overwrites node.value with its computed flow sum. Preserve the
    // authored value once here so rendering and geometry inspection divide by
    // the same semantic amount.
    const authoredValue = new Map(nodes.map((node) => [node.id, node.value]));
    graph.nodes.filter((node) => !node.routeOnly).forEach((node) => {
      node.dv = authoredValue.has(node.id) ? authoredValue.get(node.id) : node.value;
    });

    return {
      graph,
      graphInput,
      nCols,
      layoutMode: fixed ? 'fixed' : 'dynamic',
    };
  }

  function uncalibratedNodeScale(anchorNodeId, reason, message = '') {
    return Object.freeze({
      status: 'uncalibrated',
      anchorNodeId,
      reason,
      message,
    });
  }

  // A semantic node can be authored below one viewBox unit, but render()
  // paints a minimum one-unit face so the object remains visible. Calibration
  // must consume that same final face geometry, not the pre-paint thickness.
  function visibleNodeFaceHeight(node) {
    if (
      typeof node?.y0 !== 'number'
      || !Number.isFinite(node.y0)
      || typeof node?.y1 !== 'number'
      || !Number.isFinite(node.y1)
    ) {
      return NaN;
    }
    return Math.max(1, node.y1 - node.y0);
  }

  // Renderer-owned native value scale. The Interface reports the actual
  // compiled node-face thickness in viewBox units, regardless of whether it
  // came from explicit fixed geometry, renderer ky fallback, or d3 layout.
  // It deliberately knows nothing about currency, Metric SSOT, fit, or zoom.
  function measureNodeValueScale(data, anchorNodeId, overrides) {
    if (
      typeof anchorNodeId !== 'string'
      || !anchorNodeId
      || anchorNodeId.trim() !== anchorNodeId
    ) {
      return uncalibratedNodeScale('', 'invalid-anchor-id');
    }
    const id = anchorNodeId;

    let compiled;
    let cfg;
    try {
      cfg = effectiveRenderConfig(data, overrides);
      if (
        typeof cfg.width !== 'number'
        || !Number.isFinite(cfg.width)
        || cfg.width <= 0
        || typeof cfg.height !== 'number'
        || !Number.isFinite(cfg.height)
        || cfg.height <= 0
      ) {
        return uncalibratedNodeScale(id, 'invalid-canvas-geometry');
      }
      compiled = compileGraph(data || {}, cfg);
    } catch (error) {
      return uncalibratedNodeScale(id, 'layout-error', error?.message || String(error));
    }
    const canvasWidth = cfg.width;
    const canvasHeight = cfg.height;

    const node = compiled.graph.nodes.find((candidate) => (
      !candidate.routeOnly && candidate.id === id
    ));
    if (!node) return uncalibratedNodeScale(id, 'missing-anchor-node');

    const authoredValue = node.dv;
    if (
      typeof authoredValue !== 'number'
      || !Number.isFinite(authoredValue)
      || authoredValue === 0
    ) {
      return uncalibratedNodeScale(id, 'zero-or-invalid-anchor-value');
    }
    const compiledHeight = (
      typeof node.y0 === 'number'
      && typeof node.y1 === 'number'
    ) ? node.y1 - node.y0 : NaN;
    if (!Number.isFinite(compiledHeight) || compiledHeight <= 0) {
      return uncalibratedNodeScale(id, 'non-positive-anchor-geometry');
    }
    const renderedHeight = visibleNodeFaceHeight(node);

    const viewUnitsPerValue = renderedHeight / Math.abs(authoredValue);
    if (!Number.isFinite(viewUnitsPerValue) || viewUnitsPerValue <= 0) {
      return uncalibratedNodeScale(id, 'non-positive-value-scale');
    }

    const fixedHeight = Number(data?.layout?.nodes?.[id]?.height);
    const provenance = compiled.layoutMode === 'dynamic'
      ? 'dynamic-layout'
      : Number.isFinite(fixedHeight) && fixedHeight > 0
        ? 'fixed-node'
        : 'fixed-derived';

    return Object.freeze({
      status: 'calibrated',
      anchorNodeId: id,
      anchorRole: node.type,
      authoredValue,
      renderedHeight,
      viewUnitsPerValue,
      layoutMode: compiled.layoutMode,
      provenance,
      coordinateSpace: 'viewBox',
      canvasWidth,
      canvasHeight,
    });
  }

  // Post-render Geometry Interface for callers that need to bind a compiled
  // plan to one exact SVG instance. Renderer-owned D3 datum details stay
  // private; consumers receive the same typed scale vocabulary as the
  // pre-render measurement Interface.
  function measureRenderedNodeValueScale(target, anchorNodeId) {
    if (
      typeof anchorNodeId !== 'string'
      || !anchorNodeId
      || anchorNodeId.trim() !== anchorNodeId
    ) {
      return uncalibratedNodeScale('', 'invalid-anchor-id');
    }
    const id = anchorNodeId;
    if (!target || typeof target.querySelectorAll !== 'function') {
      return uncalibratedNodeScale(id, 'invalid-render-target');
    }
    const faces = [...target.querySelectorAll('rect.sankey-node[data-node]')]
      .filter((face) => face.getAttribute('data-node') === id);
    if (faces.length !== 1) {
      return uncalibratedNodeScale(
        id,
        'ambiguous-rendered-anchor',
        `Expected one rendered node face, found ${faces.length}`
      );
    }
    const face = faces[0];
    const svg = face.ownerSVGElement;
    const viewBox = svg?.viewBox?.baseVal;
    const canvasWidth = Number(viewBox?.width);
    const canvasHeight = Number(viewBox?.height);
    if (
      !svg
      || Number(viewBox?.x) !== 0
      || Number(viewBox?.y) !== 0
      || !Number.isFinite(canvasWidth)
      || canvasWidth <= 0
      || !Number.isFinite(canvasHeight)
      || canvasHeight <= 0
    ) {
      return uncalibratedNodeScale(id, 'invalid-rendered-canvas-geometry');
    }
    const authoredValue = face.__data__?.dv;
    const anchorRole = face.__data__?.type;
    const renderedHeight = Number(face.getAttribute('height'));
    if (
      typeof authoredValue !== 'number'
      || !Number.isFinite(authoredValue)
      || authoredValue === 0
    ) {
      return uncalibratedNodeScale(id, 'zero-or-invalid-anchor-value');
    }
    if (!Number.isFinite(renderedHeight) || renderedHeight <= 0) {
      return uncalibratedNodeScale(id, 'non-positive-anchor-geometry');
    }
    const viewUnitsPerValue = renderedHeight / Math.abs(authoredValue);
    if (!Number.isFinite(viewUnitsPerValue) || viewUnitsPerValue <= 0) {
      return uncalibratedNodeScale(id, 'non-positive-value-scale');
    }
    return Object.freeze({
      status: 'calibrated',
      anchorNodeId: id,
      anchorRole,
      authoredValue,
      renderedHeight,
      viewUnitsPerValue,
      provenance: 'rendered-dom',
      coordinateSpace: 'viewBox',
      canvasWidth,
      canvasHeight,
    });
  }

  function taperedLinkPath(lk) {
    const curve = lk.raw && lk.raw.curve;
    const x0 = curve && curve.x0 != null ? curve.x0 : lk.source.x1;
    const x1 = curve && curve.x1 != null ? curve.x1 : lk.target.x0;
    const c1x = curve && curve.c1x != null ? curve.c1x : (x0 + x1) / 2;
    const c2x = curve && curve.c2x != null ? curve.c2x : (x0 + x1) / 2;
    const c1y = curve && curve.c1y != null ? curve.c1y : lk.y0;
    const c2y = curve && curve.c2y != null ? curve.c2y : lk.y1;
    const sourceHalf = Math.max(1, lk.sourceWidth) / 2;
    const targetHalf = Math.max(1, lk.targetWidth) / 2;

    return [
      `M${x0},${lk.y0 - sourceHalf}`,
      `C${c1x},${c1y - sourceHalf},${c2x},${c2y - targetHalf},${x1},${lk.y1 - targetHalf}`,
      `L${x1},${lk.y1 + targetHalf}`,
      `C${c2x},${c2y + targetHalf},${c1x},${c1y + sourceHalf},${x0},${lk.y0 + sourceHalf}`,
      'Z',
    ].join('');
  }

  function cubicPointAt(p0, p1, p2, p3, t) {
    const mt = 1 - t;
    return (
      mt * mt * mt * p0 +
      3 * mt * mt * t * p1 +
      3 * mt * t * t * p2 +
      t * t * t * p3
    );
  }

  function linkCenterlinePoint(lk, fraction = 0.5) {
    const curve = lk.raw && lk.raw.curve;
    const x0 = curve && curve.x0 != null ? curve.x0 : lk.source.x1;
    const x1 = curve && curve.x1 != null ? curve.x1 : lk.target.x0;
    const c1x = curve && curve.c1x != null ? curve.c1x : (x0 + x1) / 2;
    const c2x = curve && curve.c2x != null ? curve.c2x : (x0 + x1) / 2;
    const c1y = curve && curve.c1y != null ? curve.c1y : lk.y0;
    const c2y = curve && curve.c2y != null ? curve.c2y : lk.y1;
    const numericFraction = Number(fraction);
    const t = Number.isFinite(numericFraction)
      ? Math.max(0, Math.min(1, numericFraction))
      : 0.5;

    return [
      cubicPointAt(x0, c1x, c2x, x1, t),
      cubicPointAt(lk.y0, c1y, c2y, lk.y1, t),
    ];
  }

  const SAFE_SVG_FRAGMENT_TAGS = new Set([
    'circle', 'clippath', 'defs', 'ellipse', 'g', 'line', 'lineargradient',
    'path', 'polygon', 'radialgradient', 'rect', 'stop', 'svg', 'text', 'tspan',
  ]);

  function decodeSvgMarkupEntities(value) {
    return String(value || '').replace(
      /&(#x?[0-9a-f]+|amp|lt|gt|quot|apos);/gi,
      (entity, body) => {
        const key = body.toLowerCase();
        if (key === 'amp') return '&';
        if (key === 'lt') return '<';
        if (key === 'gt') return '>';
        if (key === 'quot') return '"';
        if (key === 'apos') return "'";
        const codePoint = key.startsWith('#x')
          ? parseInt(key.slice(2), 16)
          : parseInt(key.slice(1), 10);
        return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : entity;
      }
    );
  }

  function assertSafeSvgFragments(fragments) {
    const list = Array.isArray(fragments) ? fragments : [fragments];
    for (const fragment of list) {
      if (fragment == null || !String(fragment).trim()) continue;
      let markup = String(fragment);
      for (let pass = 0; pass < 3; pass += 1) {
        const decoded = decodeSvgMarkupEntities(markup);
        if (decoded === markup) break;
        markup = decoded;
      }
      const checkedMarkup = markup.replace(/<!--[\s\S]*?-->/g, '');
      if (/<!--|-->/.test(checkedMarkup) || /<\s*[!?]/.test(checkedMarkup)) {
        throw new Error('Sankey SVG annotations contain unsupported markup');
      }
      const tagPattern = /<\s*(\/?)\s*([A-Za-z][\w:.-]*)\b[^>]*>/g;
      let match;
      while ((match = tagPattern.exec(checkedMarkup))) {
        const tagName = match[2].toLowerCase();
        if (!SAFE_SVG_FRAGMENT_TAGS.has(tagName)) {
          throw new Error(`Sankey SVG annotations cannot contain <${match[2]}> elements`);
        }
        const tagMarkup = match[0];
        if (
          /(?:\s|\/)on[a-z][\w:.-]*\s*=/i.test(tagMarkup)
          || /\b(?:href|xlink:href|src)\s*=/i.test(tagMarkup)
          || /\b(?:expression\s*\(|@import\b)/i.test(tagMarkup)
        ) {
          throw new Error('Sankey SVG annotations contain unsafe attributes');
        }
      }
      if (checkedMarkup.replace(tagPattern, '').includes('<')) {
        throw new Error('Sankey SVG annotations contain malformed markup');
      }
      const compactMarkup = checkedMarkup.replace(/[\u0000-\u0020\u007f]+/g, '');
      if (/(?:javascript|vbscript|data:text\/html):/i.test(compactMarkup)) {
        throw new Error('Sankey SVG annotations contain an unsafe URL');
      }
      for (const urlMatch of checkedMarkup.matchAll(/\burl\s*\(\s*([^)]*?)\s*\)/gi)) {
        const target = urlMatch[1].trim().replace(/^(['"])(.*)\1$/, '$2');
        if (!/^#[A-Za-z_][\w:.-]*$/.test(target)) {
          throw new Error('Sankey SVG annotations may only reference local SVG definitions');
        }
      }
    }
  }

  function appendSvgFragments(parent, fragments, className) {
    const list = Array.isArray(fragments) ? fragments : [fragments];
    const html = list
      .filter((fragment) => fragment != null && String(fragment).trim())
      .map(String)
      .join('\n');
    if (!html) return null;
    assertSafeSvgFragments(html);
    return parent.append('g').attr('class', className).html(html);
  }

  function primaryFontFamily(value) {
    return String(value || '')
      .split(',')[0]
      .trim()
      .replace(/^["']|["']$/g, '')
      .toLowerCase();
  }

  // annotationsSvg is a mixed extension seam: product copy is the default,
  // while a dataset opts a smallest complete Logo/wordmark ancestor into the
  // brand role. Concentrating the default here keeps old inherited or inline
  // dataset fonts from leaking through every Adapter and every export surface.
  function normalizeAnnotationTypography(layer, cfg) {
    if (!layer) return;
    const layerNode = layer.node();
    layer.selectAll('text, tspan, textPath').each(function () {
      if (this.closest('[data-typography-role="brand"]')) return;

      let current = this;
      let authoredFamily = '';
      while (current && current !== layerNode) {
        authoredFamily = current.style?.fontFamily || current.getAttribute?.('font-family') || '';
        if (authoredFamily) break;
        current = current.parentElement;
      }

      // Roboto is an intentional numeric-note role only when it is the
      // authored primary family. Do not match the Roboto fallback embedded in
      // the Noto Sans stack.
      const family = primaryFontFamily(authoredFamily) === 'roboto'
        ? cfg.valueFontFamily || cfg.fontFamily
        : cfg.fontFamily;
      this.style?.removeProperty('font-family');
      this.setAttribute('font-family', family);
    });
  }

  function appendRasterAnnotations(parent, annotations) {
    const list = Array.isArray(annotations) ? annotations : [annotations];
    const valid = list.filter(Boolean);
    if (!valid.length) return;

    const layer = parent.append('g').attr('class', 'sankey-raster-annotations');
    valid.forEach((item) => {
      const href = item.href || item.src;
      const x = Number(item.x);
      const y = Number(item.y);
      const width = Number(item.width);
      const height = Number(item.height);
      if (!href || !Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(width) || !Number.isFinite(height)) {
        throw new Error('Raster annotations require href/src, x, y, width, and height');
      }

      const image = layer
        .append('image')
        .attr('href', href)
        .attr('xlink:href', href)
        .attr('x', x)
        .attr('y', y)
        .attr('width', width)
        .attr('height', height)
        .attr('preserveAspectRatio', item.preserveAspectRatio || 'none')
        .style('pointer-events', item.pointerEvents || 'none');

      if (item.key || item.id) image.attr('data-key', item.key || item.id);
      if (item.opacity != null) image.attr('opacity', item.opacity);
    });
  }

  /* ------------------------------ render --------------------------- */
  function render(selector, data, overrides) {
    if (!global.d3 || !global.d3.sankey) {
      throw new Error('d3 and d3-sankey must be loaded before sankey-engine.js');
    }
    const d3 = global.d3;
    const cfg = effectiveRenderConfig(data, overrides);
    const meta = data.meta || {};
    const ICONS = global.SANKEY_ICONS || {};

    const root = d3.select(selector);
    root.selectAll('*').remove();

    const W = cfg.width;
    const H = cfg.height;
    renderIdSequence += 1;
    const idPrefix = `sankey-${renderIdSequence}`;

    const svg = root
      .append('svg')
      .attr('viewBox', `0 0 ${W} ${H}`)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .attr('width', '100%')
      .style('display', 'block')
      .style('font-family', cfg.fontFamily);

    svg
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', W)
      .attr('height', H)
      .attr('fill', cfg.background)
      // Decorative backdrop must never sit on the pointer-event hit path of
      // Sankey nodes, links, or short bars.
      .style('pointer-events', 'none');

    const defs = svg.append('defs');

    /* ---------- build the graph for d3-sankey ---------- */
    const compiled = compileGraph(data, cfg);
    const { graph, graphInput, nCols } = compiled;

    /* ---------- colour resolvers ---------- */
    const nodeColor = (n) =>
      n.color || (cfg.palette[n.type] || cfg.palette.source).node;
    const tintOf = (n) => {
      if (n.linkTint) return n.linkTint;
      const t = cfg.linkTint[n.type];
      return t === undefined ? cfg.linkTint.source : t;
    };
    const keyOf = (n) => String(n.id != null ? n.id : n.index);

    /* ---------- links (drawn first, under the nodes) ---------- */
    const linkLayer = svg.append('g').attr('class', 'links');
    const sankeyLinkPath = d3.sankeyLinkHorizontal();

    function linkPath(lk) {
      const curve = lk.raw && lk.raw.curve;
      if (!curve) return sankeyLinkPath(lk);
      const x0 = curve.x0 != null ? curve.x0 : lk.source.x1;
      const x1 = curve.x1 != null ? curve.x1 : lk.target.x0;
      const c1x = curve.c1x != null ? curve.c1x : (x0 + x1) / 2;
      const c2x = curve.c2x != null ? curve.c2x : (x0 + x1) / 2;
      const c1y = curve.c1y != null ? curve.c1y : lk.y0;
      const c2y = curve.c2y != null ? curve.c2y : lk.y1;
      return `M${x0},${lk.y0}C${c1x},${c1y},${c2x},${c2y},${x1},${lk.y1}`;
    }

    graph.links.forEach((lk, i) => {
      // An annotation-only link participates in hover semantics and node
      // context, while its source-matched vector guide is authored through
      // annotationsSvg instead of a second rendered Sankey path.
      if (lk.raw && lk.raw.interactionOnly) return;
      const sNode = lk.source;
      const tNode = lk.target;
      const customTint = lk.raw && lk.raw.linkTint;
      const customLeftTint = typeof customTint === 'string' ? customTint : customTint && customTint.left;
      const customRightTint = typeof customTint === 'string' ? customTint : customTint && customTint.right;
      // a flow leaving as a cost is solid salmon from the start, so it reads
      // as clearly distinct from the green profit bands at the split point
      const toCost = tNode.type === 'cost';
      const leftTint = customLeftTint || (toCost
        ? cfg.linkTint.cost
        : tintOf(sNode) || tintOf(tNode) || cfg.linkTint.source);
      const rightTint = customRightTint || (toCost
        ? cfg.linkTint.cost
        : tintOf(tNode) || tintOf(sNode) || cfg.linkTint.source);

      const gid = `${idPrefix}-lg-${i}`;
      const grad = defs
        .append('linearGradient')
        .attr('id', gid)
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', sNode.x1)
        .attr('x2', tNode.x0);
      grad.append('stop').attr('offset', '0%').attr('stop-color', leftTint);
      grad.append('stop').attr('offset', '100%').attr('stop-color', rightTint);

      const variableWidth =
        (lk.raw && lk.raw.sourceWidth != null) ||
        (lk.raw && lk.raw.targetWidth != null);
      const path = linkLayer
        .append('path')
        .datum(lk)
        .attr('class', 'sankey-link')
        .attr('data-source', keyOf(sNode))
        .attr('data-target', keyOf(tNode))
        .attr('d', variableWidth ? taperedLinkPath(lk) : linkPath(lk))
        .style('cursor', 'pointer');

      if (variableWidth) {
        path
          .attr('fill', `url(#${gid})`)
          .attr('fill-opacity', cfg.linkOpacity)
          .attr('stroke', 'none')
          .style('pointer-events', 'all');
      } else {
        path
          .attr('fill', 'none')
          .attr('stroke', `url(#${gid})`)
          .attr('stroke-width', Math.max(1, lk.width))
          .attr('stroke-opacity', cfg.linkOpacity)
          .attr('stroke-linecap', 'butt')
          .style('pointer-events', 'stroke');
      }
    });

    /* ---------- nodes ---------- */
    const nodeLayer = svg.append('g').attr('class', 'nodes');

    const configuredNodeHitTarget = cfg.interaction && cfg.interaction.nodeHitTarget;
    const nodeHitTarget = configuredNodeHitTarget == null
      ? 24
      : Math.max(0, Number(configuredNodeHitTarget) || 0);
    graph.nodes.filter((n) => !n.routeOnly).forEach((n) => {
      const nodeHeight = n.y1 - n.y0;
      nodeLayer
        .append('rect')
        .datum(n)
        .attr('class', 'sankey-node')
        .attr('data-node', keyOf(n))
        .attr('x', n.x0)
        .attr('y', n.y0)
        .attr('width', n.x1 - n.x0)
        .attr('height', visibleNodeFaceHeight(n))
        .attr('fill', nodeColor(n))
        .attr('rx', cfg.nodeRadius)
        .style('cursor', 'pointer');

      // Reference-faithful short bars can be only a few viewBox pixels high.
      // Preserve their measured visible geometry, but give the actual bar an
      // accessible transparent hover target rather than requiring users to
      // hunt for a sub-pixel strip after responsive scaling.
      if (nodeHitTarget > nodeHeight) {
        nodeLayer
          .append('rect')
          .datum(n)
          .attr('class', 'sankey-node-hitbox')
          .attr('data-node', keyOf(n))
          .attr('x', n.x0)
          .attr('y', n.y0 + nodeHeight / 2 - nodeHitTarget / 2)
          .attr('width', n.x1 - n.x0)
          .attr('height', nodeHitTarget)
          .attr('fill', '#ffffff')
          .attr('fill-opacity', 0)
          .style('cursor', 'pointer')
          .style('pointer-events', 'all');
      }
    });

    /* ---------- labels ---------- */
    const labelLayer = svg.append('g').attr('class', 'labels');

    const pad = LABEL_PAD;
    const gap = cfg.type.lineGap;

    // each icon is a nested <svg> carrying Lucide's inner markup, drawn
    // stroked (handles multi-element icons, not just single paths); shared by
    // the auto icon row and custom layout icon placement. Returns whether the
    // icon was drawn so custom rows only advance past drawn icons.
    function drawIconSvg(n, name, x, y, sz, opts = {}) {
      const markup = ICONS[name];
      if (!markup) return false;
      labelLayer
        .append('svg')
        .datum(n)
        .attr('class', 'sankey-label sankey-icon')
        .attr('data-node', keyOf(n))
        .attr('x', x)
        .attr('y', y)
        .attr('width', sz)
        .attr('height', sz)
        .attr('viewBox', '0 0 24 24')
        .attr('fill', 'none')
        .attr('stroke', opts.stroke || n.iconColor || '#3a3f45')
        .attr('stroke-width', opts.strokeWidth || 1.85)
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')
        .style('cursor', 'pointer')
        .html(markup);
      return true;
    }

    // ---- pass 1 + 2 (pure): build specs, then de-collide side labels ----
    const { specs, iconLayout } = buildLabelSpecs(graph, data, cfg, meta, nCols);
    decollideSideLabels(specs);

    // ---- pass 3: render text + optional icons ----
    specs.forEach((sp) => {
      const { n, side, cx, anchor, x, lines, blockH, top } = sp;
      n._labelTop = top; // remembered for logo placement
      const g = labelLayer
        .append('g')
        .datum(n)
        .attr('class', 'sankey-label')
        .attr('data-node', keyOf(n))
        .style('cursor', 'pointer');
      if (sp.semanticRole) g.attr('data-label-role', sp.semanticRole);
      let y = top;
      const localGap = sp.lineGap != null ? sp.lineGap : gap;
      lines.forEach((l) => {
        y += l.size; // baseline of this line
        const tx = g.append('text')
          .attr('x', x)
          .attr('y', y)
          .attr('text-anchor', anchor)
          .attr('fill', l.c)
          .attr('font-size', l.size)
          .attr('font-weight', l.w)
          .text(l.t);
        if (l.font) tx.attr('font-family', l.font); // else inherit cfg.fontFamily
        y += localGap;
      });

      if (sp.drawIcons !== false && n.icons && n.icons.length) {
        const sz = n.iconSize || 30;
        const sgap = 10;
        const totalW = n.icons.length * sz + (n.icons.length - 1) * sgap;
        let ix;
        if (side === 'left') ix = n.x0 - pad - totalW;
        else if (side === 'right') ix = n.x1 + pad;
        else ix = cx - totalW / 2;
        const iy = side === 'above' ? top - sz - 12 : y + 10;

        n.icons.forEach((name, k) => {
          drawIconSvg(n, name, ix + k * (sz + sgap), iy, sz);
        });
      }

      // Multi-line labels have visual gaps between text rows; this keeps the
      // whole rendered label box hoverable without changing visible pixels.
      const labelNode = g.node();
      if (labelNode && typeof labelNode.getBBox === 'function') {
        const hit = labelNode.getBBox();
        if (hit && hit.width > 0 && hit.height > 0) {
          g.insert('rect', ':first-child')
            .attr('class', 'sankey-label-hitbox')
            .attr('x', hit.x)
            .attr('y', hit.y)
            .attr('width', hit.width)
            .attr('height', hit.height)
            .attr('fill', '#ffffff')
            .attr('fill-opacity', 0)
            .style('pointer-events', 'all');
        }
      }
    });

    iconLayout.forEach((ic) => {
      const { n } = ic;
      const icons = ic.names || n.icons || [];
      const sizes = ic.sizes || [];
      let x = ic.x;
      icons.forEach((name, k) => {
        const sz = sizes[k] || ic.size || n.iconSize || 30;
        if (drawIconSvg(n, name, x, ic.y, sz, { stroke: ic.color, strokeWidth: ic.strokeWidth })) {
          x += sz + (ic.gap || 10);
        }
      });
    });

    if (data.annotationsSvg) {
      const annotationLayer = appendSvgFragments(svg, data.annotationsSvg, 'sankey-annotations');
      normalizeAnnotationTypography(annotationLayer, cfg);
      // Semantic annotation labels have the same interaction guarantee as
      // renderer-owned labels: a practical transparent target spans their
      // whole measured group, not only individual painted glyphs. Adapters
      // still must opt in with the class + data-node contract; this merely
      // makes that contract reliable at every responsive scale.
      annotationLayer?.selectAll('.sankey-interactive-annotation[data-node]').each(function () {
        if (this.querySelector(':scope > .sankey-annotation-hitbox')) return;
        let hit;
        try {
          hit = this.getBBox();
        } catch {
          return;
        }
        if (!hit || hit.width <= 0 || hit.height <= 0) return;
        d3.select(this)
          .insert('rect', ':first-child')
          .attr('class', 'sankey-annotation-hitbox')
          .attr('x', hit.x)
          .attr('y', hit.y)
          .attr('width', hit.width)
          .attr('height', hit.height)
          .attr('fill', '#ffffff')
          .attr('fill-opacity', 0)
          .style('pointer-events', 'all');
      });
    }

    if (data.rasterAnnotations) {
      if (!cfg.allowRasterAnnotations) {
        throw new Error('Raster annotations require render.allowRasterAnnotations = true');
      }
      appendRasterAnnotations(svg, data.rasterAnnotations);
    }

    /* ---------- hub logo (optional) ---------- *
     * sits in the top headroom, centred over the hub column, above the
     * hub's "above" text label. */
    if (meta.logoSvg) {
      const hub = graph.nodes.find((n) => !n.routeOnly && n.type === 'hub')
        || graph.nodes.find((n) => !n.routeOnly);
      const lw = meta.logoWidth || 150;
      const lh = meta.logoHeight || 86;
      const lx = (hub.x0 + hub.x1) / 2 - lw / 2;
      // sit just above the hub's text label, clamped below the title
      const labelTop = hub._labelTop != null ? hub._labelTop : cfg.margin.top;
      const ly = meta.logoY != null ? meta.logoY : Math.max(86, labelTop - lh - 10);
      const lg = svg
        .append('g')
        .attr('class', 'sankey-logo')
        .attr('data-typography-role', 'brand')
        .attr('transform', `translate(${lx},${ly})`);
      lg.append('svg')
        .attr('width', lw)
        .attr('height', lh)
        .attr('viewBox', meta.logoViewBox || '0 0 150 86')
        .attr('overflow', 'visible')
        .html(meta.logoSvg);
    }

    /* ---------- title block ---------- */
    if (meta.title) {
      const title = svg
        .append('text')
        .attr('class', 'sankey-title')
        .attr('x', meta.titleX != null ? meta.titleX : W / 2)
        .attr('y', meta.titleY || 120)
        .attr('text-anchor', 'middle')
        .attr('font-size', meta.titleSize || 142)
        .attr('font-weight', meta.titleWeight || 800)
        .attr('letter-spacing', '0')
        .attr('fill', cfg.titleColor)
        .text(meta.title);
      if (meta.titleTextLength) {
        title
          .attr('textLength', meta.titleTextLength)
          .attr('lengthAdjust', meta.titleLengthAdjust || 'spacingAndGlyphs');
      }
    }

    /* ---------- period stamp (top-right corner, clear of nodes) ---------- */
    // Fixed-layout source charts sometimes put the reporting period in the
    // title itself and have no separate period stamp. Suppress it explicitly
    // instead of positioning real text outside the SVG viewport.
    if ((meta.period || meta.periodNote) && !meta.hidePeriodStamp) {
      const px = meta.periodX != null ? meta.periodX : W - 210;
      const periodY = meta.periodY != null ? meta.periodY : 222;
      const periodNoteY = meta.periodNoteY != null ? meta.periodNoteY : 276;
      const tg = svg.append('g');
      if (meta.period)
        tg.append('text')
          .attr('x', px)
          .attr('y', periodY)
          .attr('text-anchor', 'middle')
          .attr('font-size', 38)
          .attr('font-weight', 700)
          .attr('fill', cfg.subtitleColor)
          .text(meta.period);
      if (meta.periodNote)
        tg.append('text')
          .attr('x', px)
          .attr('y', periodNoteY)
          .attr('text-anchor', 'middle')
          .attr('font-size', 28)
          .attr('font-weight', 500)
          .attr('fill', cfg.noteColor)
          .text(meta.periodNote);
    }

    const tooltipCfg =
      cfg.interaction && cfg.interaction.tooltip && cfg.interaction.tooltip.enabled
        ? cfg.interaction.tooltip
        : null;
    const linkTooltipLayer = tooltipCfg
      ? svg
          .append('g')
          .attr('class', 'sankey-link-tooltips')
          .attr('aria-hidden', 'true')
          .style('display', 'none')
          .style('pointer-events', 'none')
          .style('filter', 'drop-shadow(0 2px 6px rgba(0,0,0,0.10))')
      : null;
    const tooltipScale =
      tooltipCfg && tooltipCfg.scaleWithViewBox !== false
        ? W / (tooltipCfg.referenceWidth || W || 1)
        : 1;
    const tooltipDim = (key, fallback = 0) => {
      const value = tooltipCfg && tooltipCfg[key] != null ? Number(tooltipCfg[key]) : fallback;
      return (Number.isFinite(value) ? value : fallback) * tooltipScale;
    };

    function hoverShareText(lk, hoveredNode, adjacentNodeCount) {
      if (lk.raw && lk.raw.showTooltip === false) return '';
      const decimals = tooltipCfg && tooltipCfg.percentDecimals != null ? tooltipCfg.percentDecimals : 1;
      return hoveredNode
        ? HoverShare.forNode({
            link: lk,
            hoveredNode,
            oppositeNode: oppositeNode(lk, hoveredNode),
            distinctOppositeCount: adjacentNodeCount,
            decimals,
          })
        : HoverShare.forLink(lk, decimals);
    }

    function linkTooltipAnchor(path, lk) {
      // Variable-width links render as closed ribbon outlines. Measuring half
      // of that outline's perimeter lands on the target-side boundary, not in
      // the visual middle of the flow. Anchor every tag to the actual cubic
      // centerline instead, matching both tapered ribbons and stroke links.
      const centerlinePoint = linkCenterlinePoint(lk);
      if (centerlinePoint.every(Number.isFinite)) return centerlinePoint;

      if (path && isFn(path.getTotalLength) && isFn(path.getPointAtLength)) {
        const length = path.getTotalLength();
        if (Number.isFinite(length) && length > 0) {
          const point = path.getPointAtLength(length / 2);
          return [point.x, point.y];
        }
      }
      return [(lk.source.x1 + lk.target.x0) / 2, (lk.y0 + lk.y1) / 2];
    }

    const linkPathByIndex = new Map();
    // tooltip strings and link geometry are fixed once rendered, so text
    // metrics (keyed by string — the tooltip font never varies within a
    // render) and centerline anchors (keyed by link index) are measured once
    const tooltipTextBoxCache = new Map();
    const tooltipAnchorCache = new Map();

    function tooltipAnchorFor(item) {
      let anchor = tooltipAnchorCache.get(item.lk.index);
      if (!anchor) {
        anchor = linkTooltipAnchor(item.path, item.lk);
        tooltipAnchorCache.set(item.lk.index, anchor);
      }
      return anchor;
    }

    function showLinkTooltips(items) {
      if (!linkTooltipLayer) return;
      const directRows = (items || [])
        .filter((item) => item && !item.lk && item.text && Array.isArray(item.anchor))
        .map((item) => ({ key: item.key || `annotation:${item.text}`, text: item.text, anchor: item.anchor }));
      const linkRows = (items || []).filter((item) => item && item.lk)
        .map((item) =>
          Object.assign({}, item, {
            key: `link:${item.lk.index}`,
            text: hoverShareText(
              item.lk,
              item.hoveredNode,
              item.adjacentNodeCount
            ),
            anchor: tooltipAnchorFor(item),
          })
        )
        .filter((item) => item.text);
      const rows = directRows.concat(linkRows);

      linkTooltipLayer.style('display', rows.length ? null : 'none');
      const tips = linkTooltipLayer
        .selectAll('g.sankey-link-tooltip')
        .data(rows, (item) => item.key);

      tips.exit().remove();

      const entered = tips
        .enter()
        .append('g')
        .attr('class', 'sankey-link-tooltip');
      entered
        .append('rect')
        .attr('fill', tooltipCfg.background)
        .attr('fill-opacity', tooltipCfg.backgroundOpacity)
        .attr('stroke', tooltipCfg.stroke)
        .attr('stroke-opacity', tooltipCfg.strokeOpacity)
        .attr('stroke-width', tooltipDim('strokeWidth', 1))
        .attr('rx', tooltipDim('radius', 7));
      entered
        .append('text')
        .attr('font-family', tooltipCfg.fontFamily || cfg.valueFontFamily) // null → removed → inherit
        .attr('font-size', tooltipDim('fontSize', 40))
        // numW lives inside buildLabelSpecs now; inline its cfg.valueWeight
        // override so the tooltip weight resolves in render scope
        .attr('font-weight', cfg.valueWeight != null ? cfg.valueWeight : tooltipCfg.fontWeight)
        .attr('fill', tooltipCfg.textColor)
        .attr('text-anchor', 'middle')
        .attr('letter-spacing', '0');

      const merged = entered.merge(tips);
      // write → measure → write in separate batch passes: interleaving
      // getBBox() with rect/transform writes forces one reflow per tooltip,
      // which dominated node-hover cost on dense charts
      merged.each(function (item) {
        d3.select(this).select('text').text(item.text).attr('x', 0).attr('y', 0);
      });
      merged.each(function (item) {
        let textBox = tooltipTextBoxCache.get(item.text);
        if (!textBox) {
          const box = d3.select(this).select('text').node().getBBox();
          textBox = { width: box.width, height: box.height, y: box.y };
          tooltipTextBoxCache.set(item.text, textBox);
        }
        item.textBox = textBox;
      });
      merged.each(function (item) {
        const tip = d3.select(this);
        const textBox = item.textBox;
        const paddingX = tooltipDim('paddingX', 24);
        const paddingY = tooltipDim('paddingY', 13);
        const width = Math.max(
          tooltipDim('width', 0),
          tooltipDim('minWidth', 150),
          textBox.width + paddingX * 2
        );
        const height = Math.max(
          tooltipDim('height', 0),
          tooltipDim('minHeight', 70),
          textBox.height + paddingY * 2
        );
        const textY = (height - textBox.height) / 2 - textBox.y;
        const [ax, ay] = item.anchor;
        let x = ax - width / 2;
        let y = ay - height / 2;

        x = Math.max(8, Math.min(W - width - 8, x));
        y = Math.max(8, Math.min(H - height - 8, y));

        tip.select('rect').attr('width', width).attr('height', height);
        tip.select('text').attr('x', width / 2).attr('y', textY);
        tip.attr('transform', `translate(${x},${y})`);
      });
    }

    function showLinkTooltip(path, lk) {
      showLinkTooltips([{ path, lk }]);
    }

    function hideLinkTooltip() {
      if (linkTooltipLayer) {
        linkTooltipLayer.style('display', 'none');
        linkTooltipLayer.selectAll('g.sankey-link-tooltip').remove();
      }
    }

    /* ---------- hover interactions ---------- */
    if (cfg.interaction && cfg.interaction.enabled) {
      const ixn = cfg.interaction;
      const linkPaths = linkLayer.selectAll('path.sankey-link');
      const nodeRects = nodeLayer.selectAll('rect.sankey-node, rect.sankey-node-hitbox');
      const labelItems = labelLayer.selectAll('.sankey-label');
      // Some source charts use a callout-shaped micro-flow: its visible
      // guide line and label are annotations, while the financial node is
      // intentionally too small to be a practical pointer target. A
      // data-node annotated group lets that pure-SVG callout participate in
      // the same hover context without making its visual geometry a node.
      const annotationItems = svg.selectAll('.sankey-interactive-annotation[data-node]');
      const nodeByKey = new Map(graph.nodes.map((node) => [keyOf(node), node]));
      for (const metric of graphInput.nonNodeMetrics.values()) {
        if (nodeByKey.has(metric.id)) continue;
        nodeByKey.set(metric.id, {
          ...metric,
          dv: metric.value,
          sourceLinks: [],
          targetLinks: [],
        });
      }
      linkPaths.each(function (lk) {
        linkPathByIndex.set(lk.index, this);
      });

      function collectNodeContext(start) {
        const activeNodes = new Set([start]);
        const activeLinks = new Set();
        const upstreamSeen = new Set();
        const downstreamSeen = new Set();

        function upstream(node) {
          const id = keyOf(node);
          if (upstreamSeen.has(id)) return;
          upstreamSeen.add(id);
          (node.targetLinks || []).forEach((lk) => {
            activeLinks.add(lk);
            activeNodes.add(lk.source);
            upstream(lk.source);
          });
        }

        function downstream(node) {
          const id = keyOf(node);
          if (downstreamSeen.has(id)) return;
          downstreamSeen.add(id);
          (node.sourceLinks || []).forEach((lk) => {
            activeLinks.add(lk);
            activeNodes.add(lk.target);
            downstream(lk.target);
          });
        }

        upstream(start);
        downstream(start);
        return { activeNodes, activeLinks };
      }

      // transitionMs 0 writes the highlight styles synchronously in one pass;
      // a d3 transition (even at 0ms) only starts on the next timer tick, so
      // it always costs at least a frame before anything lights up
      const styled = ixn.transitionMs > 0
        ? (selection) => selection.interrupt().transition().duration(ixn.transitionMs)
        : (selection) => selection;

      let focusKey = null;
      let pendingReset = 0;

      function applyHighlight(activeNodes, activeLinks) {
        const activeNodeIds = new Set(Array.from(activeNodes, keyOf));
        const activeLinkIndexes = new Set(Array.from(activeLinks, (lk) => lk.index));

        linkPaths.filter((lk) => activeLinkIndexes.has(lk.index)).raise();

        // Links are either stroked centerlines or filled tapered ribbons.
        // stroke-opacity leaves the latter untouched, so dim/focus must use
        // path opacity to give both geometries the same hover behaviour.
        styled(linkPaths)
          .style('opacity', (lk) =>
            activeLinkIndexes.has(lk.index) ? ixn.focusOpacity : ixn.dimOpacity
          )
          .style('filter', (lk) =>
            activeLinkIndexes.has(lk.index) ? 'drop-shadow(0 0 5px rgba(0,0,0,0.22))' : null
          );

        styled(nodeRects).style('opacity', (n) =>
          activeNodeIds.has(keyOf(n)) ? ixn.focusOpacity : ixn.nodeDimOpacity
        );

        styled(labelItems).style('opacity', (n) =>
          activeNodeIds.has(keyOf(n)) ? ixn.focusOpacity : ixn.labelDimOpacity
        );
        styled(annotationItems).style('opacity', function () {
          return activeNodeIds.has(this.getAttribute('data-node'))
            ? ixn.focusOpacity
            : ixn.labelDimOpacity;
        });
      }

      function resetHighlight() {
        focusKey = null;
        hideLinkTooltip();
        styled(linkPaths)
          .style('opacity', null)
          .style('stroke-opacity', null)
          .style('filter', null);
        styled(nodeRects).style('opacity', 1);
        styled(labelItems).style('opacity', 1);
        styled(annotationItems).style('opacity', 1);
      }

      // Crossing from an element to an adjacent one fires leave then enter;
      // resetting on the leave would restyle every element twice per crossing
      // and flash an un-highlighted frame in between. The reset instead waits
      // one frame and the next enter cancels it, so a sweep across a chart
      // pays one style pass per element crossed — and none at all when the
      // pointer moves between a node and its own label (same focus key).
      const scheduleReset = () => {
        if (pendingReset) return;
        pendingReset = global.requestAnimationFrame(() => {
          pendingReset = 0;
          resetHighlight();
        });
      };
      const cancelReset = () => {
        if (!pendingReset) return;
        global.cancelAnimationFrame(pendingReset);
        pendingReset = 0;
      };

      function aggregateGroupLink(group) {
        const links = group.realLinks.length
          ? group.realLinks
          : group.annotations.length
            ? [group.annotations[0].semanticLink]
            : [];
        if (!links.length) return null;
        if (links.length === 1) return links[0];
        const representative = links[0];
        const aggregateValue = links.reduce(
          (sum, lk) => sum + HoverShare.linkAmount(lk),
          0
        );
        return Object.assign({}, representative, {
          value: aggregateValue,
          raw: Object.assign({}, representative.raw, { value: aggregateValue }),
        });
      }

      function nodeSideTooltipItems(hoveredNode, realLinks, annotationLinks, adjacentNodeCount, side) {
        const groups = new Map();
        const ensureGroup = (other) => {
          const key = adjacentNodeKey(other);
          if (!groups.has(key)) {
            groups.set(key, { key, other, realLinks: [], annotations: [] });
          }
          return groups.get(key);
        };

        realLinks.forEach((lk) => {
          const other = oppositeNode(lk, hoveredNode);
          if (other) ensureGroup(other).realLinks.push(lk);
        });
        annotationLinks.forEach((item) => {
          const other = oppositeNode(item.semanticLink, hoveredNode);
          if (other) ensureGroup(other).annotations.push(item);
        });

        const decimals = tooltipCfg && tooltipCfg.percentDecimals != null
          ? tooltipCfg.percentDecimals
          : 1;
        return Array.from(groups.values()).map((group) => {
          const semanticLink = aggregateGroupLink(group);
          // An annotation and a graph link may describe the same semantic
          // relationship. Prefer the annotation's authored anchor, but keep
          // the formula owned by the node-hover surface and de-duplicate the
          // shared endpoint.
          if (group.annotations.length) {
            const annotation = group.annotations[0];
            let anchor = annotation.anchor;
            if (!anchor && group.realLinks.length) {
              const lk = group.realLinks[0];
              anchor = tooltipAnchorFor({ path: linkPathByIndex.get(lk.index), lk });
            }
            return Object.assign({}, annotation, {
              anchor,
              text: HoverShare.forNode({
                link: semanticLink,
                hoveredNode,
                oppositeNode: group.other,
                distinctOppositeCount: adjacentNodeCount,
                decimals,
              }),
            });
          }

          if (group.realLinks.length === 1) {
            const lk = group.realLinks[0];
            return {
              path: linkPathByIndex.get(lk.index),
              lk,
              hoveredNode,
              adjacentNodeCount,
            };
          }

          // Parallel links to one endpoint are one source/destination for the
          // branching rule. Aggregate their values and show a single card.
          const representative = group.realLinks[0];
          return {
            key: `node-link-group:${keyOf(hoveredNode)}:${side}:${group.key}`,
            text: HoverShare.forNode({
              link: semanticLink,
              hoveredNode,
              oppositeNode: group.other,
              distinctOppositeCount: adjacentNodeCount,
              decimals,
            }),
            anchor: tooltipAnchorFor({
              path: linkPathByIndex.get(representative.index),
              lk: representative,
            }),
          };
        });
      }

      const focusNode = (event, n) => {
        cancelReset();
        const key = `n:${keyOf(n)}`;
        if (focusKey === key) return;
        focusKey = key;
        const ctx = collectNodeContext(n);
        const incomingLinks = [...(n.targetLinks || [])];
        const outgoingLinks = [...(n.sourceLinks || [])];
        const annotationTooltipItems = annotationTooltipItemsForNode(n);
        const incomingAnnotations = annotationTooltipItems.filter((item) =>
          sameNode(item.semanticLink.target, n)
        );
        const outgoingAnnotations = annotationTooltipItems.filter((item) =>
          sameNode(item.semanticLink.source, n)
        );
        // Every endpoint-declared relationship participates in the same
        // distinct source/destination count, regardless of whether it is
        // rendered as a Sankey path or an SVG annotation. Matching graph and
        // annotation links de-duplicate naturally by opposite node.
        const incomingNodeCount = distinctAdjacentNodeCount(
          n,
          incomingLinks.concat(incomingAnnotations.map((item) => item.semanticLink))
        );
        const outgoingNodeCount = distinctAdjacentNodeCount(
          n,
          outgoingLinks.concat(outgoingAnnotations.map((item) => item.semanticLink))
        );

        // An annotated micro-flow has no drawable d3 link, but it remains a
        // semantic part of either endpoint's hover context. Keep its label
        // bright and render its real percentage alongside regular links.
        annotationTooltipItems.forEach((item) => {
          ctx.activeNodes.add(item.numerator);
          ctx.activeNodes.add(item.denominator);
        });
        applyHighlight(ctx.activeNodes, ctx.activeLinks);
        showLinkTooltips(
          nodeSideTooltipItems(n, incomingLinks, incomingAnnotations, incomingNodeCount, 'incoming')
            .concat(
              nodeSideTooltipItems(n, outgoingLinks, outgoingAnnotations, outgoingNodeCount, 'outgoing')
            )
        );
      };

      const focusLink = (event, lk) => {
        cancelReset();
        const key = `l:${lk.index}`;
        if (focusKey === key) return;
        focusKey = key;
        applyHighlight(new Set([lk.source, lk.target]), new Set([lk]));
        showLinkTooltip(event.currentTarget, lk);
      };

      function annotationLinkTooltipItem(annotation) {
        const node = nodeByKey.get(annotation.getAttribute('data-node'));
        const numerator = nodeByKey.get(annotation.getAttribute('data-link-numerator'));
        const denominator = nodeByKey.get(annotation.getAttribute('data-link-denominator'));
        if (!node || !numerator || !denominator) return null;

        const anchorXAttr = annotation.getAttribute('data-link-anchor-x');
        const anchorYAttr = annotation.getAttribute('data-link-anchor-y');
        const anchorX = anchorXAttr != null && anchorXAttr.trim() ? Number(anchorXAttr) : NaN;
        const anchorY = anchorYAttr != null && anchorYAttr.trim() ? Number(anchorYAttr) : NaN;
        return {
          key: `annotation-link:${keyOf(numerator)}:${keyOf(denominator)}`,
          anchor: Number.isFinite(anchorX) && Number.isFinite(anchorY) ? [anchorX, anchorY] : null,
          node,
          numerator,
          denominator,
          semanticLink: {
            source: numerator,
            target: denominator,
            value: HoverShare.nodeAmount(numerator),
            raw: { value: HoverShare.nodeAmount(numerator) },
          },
        };
      }

      function annotationTooltipItemsForNode(node) {
        const items = [];
        annotationItems.each(function () {
          const item = annotationLinkTooltipItem(this);
          if (item && (sameNode(item.numerator, node) || sameNode(item.denominator, node))) items.push(item);
        });
        return items;
      }

      // A few source charts express a financially meaningful micro-flow as an
      // SVG guide annotation rather than a drawable d3 link. When the
      // annotation declares its numerator and denominator nodes, give it the
      // same percentage-tooltip treatment as a real link, anchored on the
      // guide itself rather than on the label hitbox.
      const focusAnnotation = (event, annotation) => {
        const item = annotationLinkTooltipItem(annotation);
        const node = item ? item.node : nodeByKey.get(annotation.getAttribute('data-node'));
        if (!item) {
          if (!node) return;
          focusNode(event, node);
          return;
        }

        cancelReset();
        const key = `a:${keyOf(item.numerator)}:${keyOf(item.denominator)}`;
        if (focusKey === key) return;
        focusKey = key;
        // An annotation can sit on a source-matched visible bridge that is
        // represented separately from the annotation's semantic link. Reuse
        // the annotated node's graph context so hover keeps every connected
        // rendered ribbon bright; hiding this annotation's percentage must
        // never make an otherwise visible bridge appear to disappear.
        const ctx = collectNodeContext(node);
        ctx.activeNodes.add(item.numerator);
        ctx.activeNodes.add(item.denominator);
        applyHighlight(ctx.activeNodes, ctx.activeLinks);
        if (!item.anchor) item.anchor = d3.pointer(event, svg.node());
        const decimals = tooltipCfg && tooltipCfg.percentDecimals != null ? tooltipCfg.percentDecimals : 1;
        item.text = HoverShare.forLink(item.semanticLink, decimals);
        showLinkTooltips([item]);
      };

      nodeRects.on('mouseenter', focusNode).on('mouseleave', scheduleReset);
      labelItems.on('mouseenter', focusNode).on('mouseleave', scheduleReset);
      annotationItems
        .on('mouseenter', function (event) {
          focusAnnotation(event, this);
        })
        .on('mouseleave', scheduleReset)
        .style('cursor', 'pointer');
      linkPaths.on('mouseenter', focusLink).on('mouseleave', scheduleReset);
      svg.on('mouseleave', scheduleReset);
    }

    return svg.node();
  }

  global.SankeyEngine = {
    render,
    // Public renderer Geometry Interface. Currency/SSOT/fit stay outside;
    // compileGraph remains private so callers cannot reproduce layout rules.
    measureNodeValueScale,
    measureRenderedNodeValueScale,
    DEFAULTS,
    // Pure helpers exposed for unit tests, tooling, and the viewer's chart
    // sizing (canvasSize); render() behavior is unchanged. buildFixedGraph
    // expects render()'s preprocessed inputs: nodes with an index field and
    // links as { source, target, value, raw }; buildLabelSpecs/
    // decollideSideLabels are render()'s label passes 1 + 2.
    helpers: {
      deepMerge,
      formatValue,
      hoverShare: HoverShare,
      groupAdjacentLinks,
      distinctAdjacentNodeCount,
      autoSide,
      prepareGraphInput,
      buildFixedGraph,
      taperedLinkPath,
      linkCenterlinePoint,
      referenceCanvasDefaults,
      canvasSize,
      assertSafeSvgFragments,
      buildLabelSpecs,
      decollideSideLabels,
    },
  };
})(window);
