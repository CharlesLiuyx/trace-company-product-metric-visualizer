/* ====================================================================
 * Sandisk - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/sandisk-q3-fy26.png as a fixed
 * d3-sankey layout with reusable inline SVG Sandisk annotations.
 * Geometry measured from the reference image (2667x1500, ~84.5 px/$B).
 *
 * Source fidelity note: the source infographic draws the Datacenter
 * ($1.5B) segment bar SHORTER than the Consumer ($0.8B) bar (70px vs
 * ~124px) - i.e. the two segment bar heights are visually inconsistent
 * with their labelled values. The whole statement is also implausible
 * for a NAND/storage maker (78% gross, 69% operating, 61% net margins,
 * +252% Y/Y revenue). Per the fidelity rules we reproduce the source as
 * drawn and keep the labelled values; the inconsistency is flagged, not
 * corrected.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const GRAY_LINK = '#d9d9d9';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const SANDISK_RED = '#e10600';
  const BG = '#f2f2f2';

  // ---- inline vector logo + segment icons (drawn over the #f2f2f2 canvas) ----

  // "Sandisk" bold red wordmark (Montserrat approximation of the brand mark).
  const LOGO = `
    <text x="310" y="55" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-weight="800" font-size="60" fill="${SANDISK_RED}" letter-spacing="1"
      textLength="600" lengthAdjust="spacingAndGlyphs">Sandisk</text>`;

  // Datacenter: two stacked enterprise SSDs with a colour label strip.
  const DATACENTER_ICON = `
    <g stroke="#000000" stroke-width="3" stroke-linejoin="round">
      <rect x="10" y="40" width="92" height="30" rx="4" fill="#242424"
        transform="rotate(-7 56 55)"/>
      <rect x="16" y="18" width="86" height="28" rx="4" fill="#333333"
        transform="rotate(-7 59 32)"/>
    </g>
    <g transform="rotate(-7 59 32)">
      <rect x="24" y="21" width="46" height="8" rx="2" fill="#2b7de0"/>
      <rect x="24" y="21" width="16" height="8" rx="2" fill="#e64a2b"/>
    </g>`;

  // Edge: dark iNAND-style memory chip with contact pins and a red accent.
  const EDGE_ICON = `
    <rect x="18" y="20" width="66" height="60" rx="5" fill="#141414" stroke="#000000" stroke-width="3"/>
    <g stroke="#000000" stroke-width="3" stroke-linecap="round">
      <path d="M28 20 V10 M42 20 V10 M56 20 V10 M70 20 V10"/>
      <path d="M28 80 V90 M42 80 V90 M56 80 V90 M70 80 V90"/>
      <path d="M18 34 H8 M18 48 H8 M18 62 H8"/>
      <path d="M84 34 H94 M84 48 H94 M84 62 H94"/>
    </g>
    <rect x="30" y="42" width="42" height="9" rx="2" fill="${SANDISK_RED}"/>
    <rect x="30" y="56" width="30" height="6" rx="2" fill="#555555"/>`;

  // Consumer: two stacked portable SSD drives.
  const CONSUMER_ICON = `
    <g stroke="#000000" stroke-width="3" stroke-linejoin="round">
      <rect x="40" y="14" width="40" height="76" rx="9" fill="#20304a"/>
      <rect x="20" y="24" width="40" height="70" rx="9" fill="#161616"/>
    </g>
    <rect x="27" y="34" width="26" height="34" rx="3" fill="#2b2b2b" stroke="#000000" stroke-width="2"/>
    <circle cx="40" cy="82" r="2.6" fill="#888888"/>`;

  const svgIcon = (markup, x, y, w, h, viewBox) => `
    <svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${viewBox}" overflow="visible">
      ${markup}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${svgIcon(DATACENTER_ICON, 178, 276, 176, 132, '0 0 112 90')}
      ${svgIcon(EDGE_ICON, 182, 726, 148, 120, '0 0 100 100')}
      ${svgIcon(CONSUMER_ICON, 196, 1092, 132, 132, '0 0 100 100')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sandisk-q3-fy26',
    name: 'Sandisk · Q3 FY26',
    company: 'Sandisk',
    meta: {
      company: 'Sandisk',
      title: 'Sandisk Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/sandisk-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 200,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2201,
      // The period stamp sits directly below the Revenue hub, not top-right.
      periodX: 910,
      periodY: 1288,
      periodNoteY: 1330,
      periodAnchor: 'middle',
      logoWidth: 620,
      logoHeight: 72,
      logoY: 268,
      logoViewBox: '0 0 620 72',
      logoSvg: LOGO,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 44, value: 44, note: 30, lineGap: 10 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 84.5,
      nodes: {
        datacenter: { x: 405, y: 431, width: 71, height: 70 },
        edge: { x: 405, y: 685, width: 71, height: 312 },
        consumer: { x: 405, y: 1165, width: 71, height: 122 },
        revenue: { x: 873, y: 636, width: 71, height: 504 },
        gross_profit: { x: 1339, y: 533, width: 72, height: 396 },
        cost_of_revenue: { x: 1339, y: 1124, width: 72, height: 108 },
        operating_profit: { x: 1806, y: 439, width: 72, height: 350 },
        operating_expenses: { x: 1806, y: 996, width: 72, height: 46 },
        net_profit: { x: 2273, y: 316, width: 72, height: 307 },
        tax: { x: 2273, y: 763, width: 72, height: 42 },
        other_non_operating: { x: 2273, y: 902, width: 72, height: 1 },
        rnd: { x: 2273, y: 1064, width: 72, height: 28 },
        sga: { x: 2273, y: 1199, width: 72, height: 14 },
        other_opex: { x: 2273, y: 1316, width: 72, height: 4 },
      },
      labels: {
        datacenter: {
          blocks: [
            {
              x: 438, top: 333, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400, color: BLACK },
                { text: '+645% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 259, top: 439, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Datacenter', size: 38, weight: 800, color: BLACK },
              ],
            },
          ],
        },
        edge: {
          blocks: [
            {
              x: 438, top: 587, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400, color: BLACK },
                { text: '+295% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 263, top: 861, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Edge', size: 38, weight: 800, color: BLACK },
              ],
            },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 438, top: 1068, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400, color: BLACK },
                { text: '+44% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 258, top: 1244, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Consumer', size: 38, weight: 800, color: BLACK },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 910, top: 486, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 44, weight: 800, color: BLACK },
                { text: '$value', size: 40, weight: 400, color: BLACK },
                { text: '+252% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1373, top: 356, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '78% margin', size: 28, weight: 400, color: NOTE },
                { text: '+56pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1376, top: 1248, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 34, weight: 800 },
                { text: 'revenue', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1838, top: 250, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '69% margin', size: 28, weight: 400, color: NOTE },
                { text: '+180pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1838, top: 1056, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 34, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2461, top: 384, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '61% margin', size: 28, weight: 400, color: NOTE },
                { text: '+175pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2461, top: 744, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Tax', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        other_non_operating: {
          blocks: [
            {
              x: 2461, top: 883, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Other', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2461, top: 1038, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'R&D', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2461, top: 1167, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'SG&A', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2458, top: 1282, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Other', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'datacenter', col: 0, order: 0, type: 'source', label: 'Datacenter', value: 1.5, notes: ['+645% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'edge', col: 0, order: 1, type: 'source', label: 'Edge', value: 3.7, notes: ['+295% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'consumer', col: 0, order: 2, type: 'source', label: 'Consumer', value: 0.8, notes: ['+44% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6.0, valueText: '$6.0B', notes: ['+252% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.7, notes: ['78% margin', '+56pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1.3 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4.1, notes: ['69% margin', '+180pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.6 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 3.6, notes: ['61% margin', '+175pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'other_non_operating', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.004, valueText: '($4M)' },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.3 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.2 },
      { id: 'other_opex', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.1 },
    ],

    links: [
      { source: 'datacenter', target: 'revenue', value: 1.5, width: 70, targetOrder: 0 },
      { source: 'edge', target: 'revenue', value: 3.7, width: 312, targetOrder: 1 },
      { source: 'consumer', target: 'revenue', value: 0.8, width: 122, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.7, width: 396, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.3, width: 108, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.1, width: 350, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.6, width: 46, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.6, width: 307, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, width: 42, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_non_operating', value: 0.004, width: 1, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.3, width: 28, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.2, width: 14, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, width: 4, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Sandisk · 2026 财年第三季度',
        meta: {
          title: 'Sandisk 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1560,
        },
        nodes: {
          datacenter: { label: '数据中心', notes: ['同比 +645%'] },
          edge: { label: '边缘', notes: ['同比 +295%'] },
          consumer: { label: '消费级', notes: ['同比 +44%'] },
          revenue: { label: '收入', notes: ['同比 +252%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 78%', '同比 +56 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 69%', '同比 +180 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 61%', '同比 +175 个百分点'] },
          tax: { label: '税费' },
          other_non_operating: { label: '其他' },
          rnd: { label: '研发' },
          sga: { label: '销售及行政' },
          other_opex: { label: '其他' },
        },
        layout: {
          labels: {
            datacenter: {
              blocks: [
                {
                  x: 438, top: 333, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 40, weight: 400, color: BLACK },
                    { text: '同比 +645%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 259, top: 439, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '数据中心', size: 38, weight: 800, color: BLACK },
                  ],
                },
              ],
            },
            edge: {
              blocks: [
                {
                  x: 438, top: 587, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 40, weight: 400, color: BLACK },
                    { text: '同比 +295%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 263, top: 861, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '边缘', size: 38, weight: 800, color: BLACK },
                  ],
                },
              ],
            },
            consumer: {
              blocks: [
                {
                  x: 438, top: 1068, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 40, weight: 400, color: BLACK },
                    { text: '同比 +44%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 258, top: 1244, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '消费级', size: 38, weight: 800, color: BLACK },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 910, top: 486, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '收入', size: 44, weight: 800, color: BLACK },
                    { text: '$value', size: 40, weight: 400, color: BLACK },
                    { text: '同比 +252%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1373, top: 356, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 42, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 78%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +56 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1376, top: 1248, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '收入', size: 34, weight: 800 },
                    { text: '成本', size: 34, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1838, top: 250, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 42, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 69%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +180 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1838, top: 1060, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '营业费用', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  // ZH notes use a smaller size than EN: the localized
                  // "同比 +175 个百分点" line is wider than "+175pp Y/Y" and would
                  // otherwise overlap the net node (right edge x=2345).
                  x: 2461, top: 388, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 42, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 61%', size: 24, weight: 400, color: NOTE },
                    { text: '同比 +175 个百分点', size: 24, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2461, top: 744, anchor: 'middle', lineGap: 5,
                  lines: [
                    { text: '税费', size: 34, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                  ],
                },
              ],
            },
            other_non_operating: {
              blocks: [
                {
                  x: 2461, top: 883, anchor: 'middle', lineGap: 5,
                  lines: [
                    { text: '其他', size: 34, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2461, top: 1038, anchor: 'middle', lineGap: 5,
                  lines: [
                    { text: '研发', size: 34, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2461, top: 1167, anchor: 'middle', lineGap: 5,
                  lines: [
                    { text: '销售及行政', size: 32, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                  ],
                },
              ],
            },
            other_opex: {
              blocks: [
                {
                  x: 2458, top: 1282, anchor: 'middle', lineGap: 5,
                  lines: [
                    { text: '其他', size: 34, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();
