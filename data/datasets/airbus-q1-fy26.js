/* ====================================================================
 * Airbus - Q1 FY26 income statement (EUR B)
 * Reconstructed from input/processed/airbus-q1-fy26.png as a fixed
 * d3-sankey layout.
 *
 * The three segment illustration photos (A380 commercial aircraft, H160
 * helicopter, Defense & Space satellite) and the AIRBUS company wordmark
 * are reproduced as whitelisted runtime raster annotations cropped from
 * the source, each an opaque background-matched patch placed at its exact
 * source coordinates (see input/icon-crop-specs/airbus-q1-fy26.json and
 * data/assets/icon-references/airbus/model-validation.md). The
 * photographic imagery and the custom navy logotype cannot be faithfully
 * reproduced with the Montserrat text/vector stack. The "Deliveries" stat
 * card and the small "Other €37M" leader annotation remain pure SVG/text.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#6b6c6e';
  const NAVY = '#00357a';
  const NAVY_LINK = '#859cbc';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';
  // Terminal (col 5) cost/profit labels sit as a center-aligned column to the
  // right of their nodes in the source (name + value + notes share one axis at
  // ~x2500), not left-aligned against the node edge.
  const RIGHT_LABEL_X = 2506;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g>
        <rect x="71" y="1183" width="448" height="162" rx="30" fill="${NAVY}"/>
        <text x="295" y="1231" text-anchor="middle" fill="#ffffff" font-weight="800" font-size="39">Deliveries</text>
        <text x="295" y="1281" text-anchor="middle" fill="#ffffff" font-weight="500" font-size="35">114 commercial airplanes</text>
        <text x="295" y="1324" text-anchor="middle" fill="#ffffff" font-weight="500" font-size="35">(16%) Y/Y</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'airbus-q1-fy26',
    name: 'Airbus · Q1 FY26',
    company: 'Airbus',
    meta: {
      company: 'Airbus',
      title: 'Airbus Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/airbus-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1331,
      titleY: 198,
      titleSize: 130,
      titleWeight: 800,
      titleTextLength: 2128,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: NAVY_LINK,
        hub: NAVY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 44, value: 42, note: 30, lineGap: 9 },
      allowRasterAnnotations: true,
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      {
        key: 'airbus-a380-tile',
        href: 'data/assets/raster-annotations/airbus/commercial-aircraft-a380.png',
        x: 6, y: 378, width: 402, height: 160,
      },
      {
        key: 'airbus-h160-tile',
        href: 'data/assets/raster-annotations/airbus/helicopters-h160.png',
        x: 28, y: 671, width: 364, height: 134,
      },
      {
        key: 'airbus-satellite-tile',
        href: 'data/assets/raster-annotations/airbus/defense-space-satellite.png',
        x: 180, y: 944, width: 178, height: 95,
      },
      {
        key: 'airbus-wordmark',
        href: 'data/assets/raster-annotations/airbus/company-wordmark.png',
        x: 711, y: 287, width: 560, height: 125,
      },
    ],

    layout: {
      scale: 26.3,
      nodes: {
        airbus_segment: { x: 435, y: 418, width: 72, height: 221 },
        helicopters: { x: 435, y: 820, width: 72, height: 42 },
        defense_space: { x: 435, y: 1045, width: 72, height: 74 },
        revenue_gross: { x: 809, y: 529, width: 72, height: 337 },
        inter_segment: { x: 1180, y: 1213, width: 92, height: 6 },
        revenue: { x: 1183, y: 617, width: 71, height: 332 },
        gross_profit: { x: 1556, y: 525, width: 72, height: 41 },
        cost_of_sales: { x: 1556, y: 744, width: 72, height: 291 },
        operating_profit: { x: 1930, y: 411, width: 72, height: 6 },
        operating_expenses: { x: 1930, y: 642, width: 72, height: 36 },
        other_income: { x: 2200, y: 341, width: 72, height: 13 },
        net_profit: { x: 2304, y: 295, width: 72, height: 16 },
        tax: { x: 2304, y: 496, width: 72, height: 3 },
        rnd: { x: 2304, y: 760, width: 72, height: 20 },
        administrative: { x: 2304, y: 998, width: 72, height: 11 },
        selling: { x: 2304, y: 1225, width: 72, height: 6 },
        // Small 2px terminal bar for the "Other €37M" opex line (€37M ≈ 1px,
        // bumped to 2px so it reads). Centered at x1780 so the label sits
        // directly below it; the leader flow ends at its right edge (x1802).
        opex_other: { x: 1758, y: 705, width: 44, height: 2 },
      },
      labels: {
        airbus_segment: {
          blocks: [
            {
              x: 462, top: 322, anchor: 'middle',
              lines: [{ text: '$value', size: 44, weight: 400 }],
            },
            {
              // Y/Y note left-anchored just right of the A380 raster edge
              // (x408). Raster annotations draw above labels, so the wider zh
              // "同比 (11%)" would otherwise slide its leading glyph under the
              // opaque patch; anchoring 'start' keeps it clear in both
              // languages. Baseline 405 (top 375 + size 30) is unchanged.
              x: 411, top: 375, anchor: 'start',
              lines: [{ text: '(11%) Y/Y', size: 30, weight: 400, color: NOTE }],
            },
            {
              x: 250, top: 562, anchor: 'middle',
              lines: [{ text: 'Airbus', size: 46, weight: 800 }],
            },
            {
              x: 258, top: 618, anchor: 'middle',
              lines: [{ text: '1% segment margin', size: 30, weight: 400, color: NOTE }],
            },
          ],
        },
        helicopters: {
          blocks: [
            {
              x: 462, top: 716, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 44, weight: 400 },
                { text: '+0% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 258, top: 832, anchor: 'middle',
              lines: [{ text: 'Helicopters', size: 46, weight: 800 }],
            },
            {
              x: 258, top: 888, anchor: 'middle',
              lines: [{ text: '4% segment margin', size: 30, weight: 400, color: NOTE }],
            },
          ],
        },
        defense_space: {
          blocks: [
            {
              x: 462, top: 944, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 44, weight: 400 },
                { text: '+7% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 250, top: 1057, anchor: 'middle',
              lines: [{ text: 'Defense & Space', size: 40, weight: 800 }],
            },
            {
              x: 258, top: 1113, anchor: 'middle',
              lines: [{ text: '5% segment margin', size: 30, weight: 400, color: NOTE }],
            },
          ],
        },
        revenue_gross: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1218, top: 463, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 46, weight: 800 },
                { text: '$value', size: 44, weight: 400 },
                { text: '(7%) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        inter_segment: {
          blocks: [
            {
              x: 1226, top: 1240, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Inter-segment', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1592, top: 332, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 44, weight: 800 },
                { text: '$value', size: 42, weight: 400 },
                { text: '12% margin', size: 30, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1592, top: 1055, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of sales', size: 44, weight: 800 },
                { text: '$value', size: 42, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1966, top: 224, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 44, weight: 800 },
                { text: '$value', size: 42, weight: 400 },
                { text: '2% margin', size: 30, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              // Centered directly below the node (source layout), not left of it.
              x: 1962, top: 688, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 44, weight: 800 },
                { text: 'expenses', size: 44, weight: 800 },
                { text: '$value', size: 42, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              // Sits below its node in the source (node flows up into net profit).
              x: 2236, top: 360, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 200, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 44, weight: 800 },
                { text: '$value', size: 42, weight: 400 },
                { text: '4% margin', size: 30, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 456, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 726, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 36, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '6% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        administrative: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 964, anchor: 'middle', lineGap: 8,
              lines: [
                // "Administrative" is the one terminal name Montserrat renders
                // wider than the source font; sized down to 31 so the
                // center-aligned block clears the node (5px+ edge gap).
                { text: 'Administrative', size: 31, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '3% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        selling: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1191, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Selling', size: 36, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '2% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        opex_other: {
          blocks: [
            {
              // Leader-style callout below the flow (matches the source layout);
              // name + €37M value both route to Noto Sans via the engine.
              x: 1780, top: 712, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 36, weight: 800 },
                { text: '$value', size: 33, weight: 500 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'airbus_segment', col: 0, order: 0, type: 'source',
        label: 'Airbus', value: 8.4, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK,
      },
      {
        id: 'helicopters', col: 0, order: 1, type: 'source',
        label: 'Helicopters', value: 1.6, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK,
      },
      {
        id: 'defense_space', col: 0, order: 2, type: 'source',
        label: 'Defense & Space', value: 2.8, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK,
      },
      {
        id: 'revenue_gross', col: 1, order: 0, type: 'hub',
        label: '', value: 12.8, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK,
      },
      {
        id: 'inter_segment', col: 2, order: 1, type: 'cost',
        label: 'Inter-segment', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 12.7, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 1.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_sales', col: 3, order: 1, type: 'cost',
        label: 'Cost of sales', value: 11.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Operating profit', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other_income', col: 5, order: 1, type: 'profit',
        label: 'Other', value: 0.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 0.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 5, order: 2, type: 'cost',
        label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 3, type: 'cost',
        label: 'R&D', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'administrative', col: 5, order: 4, type: 'cost',
        label: 'Administrative', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'selling', col: 5, order: 5, type: 'cost',
        label: 'Selling', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        // 4th operating-expense line, too thin (€37M ≈ 1px) for a normal band;
        // shown as a small green terminal bar with a leader flow into it.
        id: 'opex_other', col: 4, order: 3, type: 'cost',
        label: 'Other', value: 0.037, valueText: '€37M',
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
    ],

    links: [
      { source: 'airbus_segment', target: 'revenue_gross', value: 8.4, width: 221, targetOrder: 0, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'helicopters', target: 'revenue_gross', value: 1.6, width: 42, targetOrder: 1, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'defense_space', target: 'revenue_gross', value: 2.8, width: 74, targetOrder: 2, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'revenue_gross', target: 'revenue', value: 12.7, width: 332, sourceOrder: 0, targetOrder: 0, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'revenue_gross', target: 'inter_segment', value: 0.2, width: 5, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 1.6, width: 41, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_sales', value: 11.1, width: 291, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'gross_profit', target: 'operating_profit', value: 0.2, width: 5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.4, width: 36, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.1, width: 3, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, width: 3, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.5, width: 13, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 0.7, width: 20, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'administrative', value: 0.4, width: 11, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'selling', value: 0.2, width: 5, sourceOrder: 2, targetOrder: 0 },
      // "Other €37M": thin green leader from op-ex bottom-left down to the
      // terminal bar. Custom curve reproduces the source leader; it ends at the
      // bar's right edge (x1=1802) so the bar never overpaints the flow (which
      // caused the visible break); y0/y1 pin the exact endpoints; green tint
      // overrides the default cost salmon.
      {
        source: 'operating_expenses', target: 'opex_other', value: 0.037, width: 2,
        sourceOrder: 3, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK },
        y0: 677, y1: 706,
        curve: { x0: 1930, x1: 1802, c1x: 1890, c1y: 677, c2x: 1844, c2y: 706 },
      },
    ],

    i18n: {
      zh: {
        name: 'Airbus · 2026 财年第一季度',
        meta: {
          title: 'Airbus 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1900,
        },
        nodes: {
          airbus_segment: { label: '空中客车' },
          helicopters: { label: '直升机' },
          defense_space: { label: '防务与航天' },
          revenue_gross: { label: '' },
          inter_segment: { label: '分部间抵销' },
          revenue: { label: '收入' },
          gross_profit: { label: '毛利润' },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润' },
          operating_expenses: { label: ['营业', '费用'] },
          other_income: { label: '其他' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          administrative: { label: '行政' },
          selling: { label: '销售' },
          opex_other: { label: '其他' },
        },
        annotationsSvg: annotations
          .replace('>Deliveries<', '>交付<')
          .replace('114 commercial airplanes', '114 架商用飞机')
          .replace('(16%) Y/Y', '同比 (16%)'),
      },
    },
  });
})();
