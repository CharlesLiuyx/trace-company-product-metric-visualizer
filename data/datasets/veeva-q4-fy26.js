/* ====================================================================
 * Veeva Systems - Q4 FY26 income statement ($M)
 * Reconstructed from input/processed/veeva-q4-fy26.png as a fixed
 * d3-sankey layout with pure SVG annotations. Source: App Economy
 * Insights "How They Make Money".
 *
 * Two revenue families feed Subscription: Commercial solutions (Veeva
 * CRM) and R&D solutions (Veeva Vault); Subscription + Services -> Revenue.
 * Right side is the standard waterfall: Operating profit + Other income,
 * less Tax, to Net profit.
 * ==================================================================== */
(function () {
  const ORANGE = '#f89a21';
  const ORANGE_LINK = '#f4ca94';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY = '#898b8d';
  const NOTE = '#898b8d';
  const TITLE = '#155077';
  const RIGHT_LABEL_X = 2434;

  // Reusable "Veeva <sub>" wordmark: orange "Veeva" + gray triangle accent
  // over the first letter, plus a gray sub-brand word (CRM / Vault).
  const veevaMark = (x, baseline, veevaLen, sub, subX, subLen, subWeight) => `
    <g font-family="Montserrat,Arial,sans-serif" font-weight="700" data-typography-role="brand">
      <polygon points="${x + 3},${baseline - 33} ${x + 22},${baseline - 33} ${x + 12.5},${baseline - 16}" fill="${GRAY}"/>
      <text x="${x}" y="${baseline}" font-size="46" textLength="${veevaLen}" lengthAdjust="spacingAndGlyphs" fill="${ORANGE}">Veeva</text>
      <text x="${subX}" y="${baseline}" font-size="46" font-weight="${subWeight}" textLength="${subLen}" lengthAdjust="spacingAndGlyphs" fill="${GRAY}">${sub}</text>
    </g>`;

  // Extents measured from source (kept clear of the orange col-0 node at x=373):
  // CRM   "Veeva" x81-233 + "CRM"   x244-328, baseline 660
  // Vault "Veeva" x72-232 + "Vault" x237-336, baseline 1008
  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${veevaMark(81, 660, 152, 'CRM', 244, 84, 600)}
      ${veevaMark(72, 1008, 160, 'Vault', 237, 99, 500)}
    </g>`;

  const enLabels = {
    commercial: {
      blocks: [
        {
          x: 409, top: 447, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '$value', size: 35, weight: 400 },
            { text: '+11% Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
        {
          x: 224, top: 527, anchor: 'middle', lineGap: 18,
          lines: [
            { text: 'Commercial', size: 35, weight: 800 },
            { text: 'solutions', size: 35, weight: 800 },
          ],
        },
      ],
    },
    rnd_solutions: {
      blocks: [
        {
          x: 409, top: 787, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '$value', size: 35, weight: 400 },
            { text: '+21% Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
        {
          x: 224, top: 857, anchor: 'middle', lineGap: 15,
          lines: [
            { text: 'R&D', size: 35, weight: 800 },
            { text: 'solutions', size: 35, weight: 800 },
          ],
        },
      ],
    },
    subscription: {
      blocks: [
        {
          x: 782, top: 505, anchor: 'middle', lineGap: 15,
          lines: [
            { text: 'Subscription', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '+16% Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    services: {
      blocks: [
        {
          x: 782, top: 1221, anchor: 'middle', lineGap: 15,
          lines: [
            { text: 'Services', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '+14% Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 1156, top: 587, anchor: 'middle', lineGap: 15,
          lines: [
            { text: 'Revenue', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '+16% Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1530, top: 467, anchor: 'middle', lineGap: 14,
          lines: [
            { text: 'Gross profit', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '74% margin', size: 26, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1530, top: 1225, anchor: 'middle', lineGap: 12,
          lines: [
            { text: 'Cost of', size: 30, weight: 800 },
            { text: 'revenue', size: 30, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1904, top: 360, anchor: 'middle', lineGap: 14,
          lines: [
            { text: 'Operating profit', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '29% margin', size: 26, weight: 400, color: NOTE },
            { text: '+3pp Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1904, top: 1019, anchor: 'middle', lineGap: 12,
          lines: [
            { text: 'Operating', size: 30, weight: 800 },
            { text: 'expenses', size: 30, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 2164, top: 623, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Other', size: 27, weight: 800 },
            { text: '$value', size: 27, weight: 400 },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 441, anchor: 'middle', lineGap: 14,
          lines: [
            { text: 'Net profit', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '29% margin', size: 26, weight: 400, color: NOTE },
            { text: '+2pp Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 742, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Tax', size: 28, weight: 800 },
            { text: '$value', size: 28, weight: 400 },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 887, anchor: 'middle', lineGap: 13,
          lines: [
            { text: 'R&D', size: 28, weight: 800 },
            { text: '$value', size: 28, weight: 400 },
            { text: '24% of revenue', size: 26, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1059, anchor: 'middle', lineGap: 13,
          lines: [
            { text: 'S&M', size: 28, weight: 800 },
            { text: '$value', size: 28, weight: 400 },
            { text: '13% of revenue', size: 26, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1231, anchor: 'middle', lineGap: 13,
          lines: [
            { text: 'G&A', size: 28, weight: 800 },
            { text: '$value', size: 28, weight: 400 },
            { text: '8% of revenue', size: 26, weight: 400, color: NOTE },
            { text: '(2pp) Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  const zhLabels = {
    commercial: {
      blocks: [
        {
          x: 409, top: 447, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '$value', size: 35, weight: 400 },
            { text: '同比 +11%', size: 26, weight: 400, color: NOTE },
          ],
        },
        {
          x: 224, top: 527, anchor: 'middle', lineGap: 18,
          lines: [
            { text: '商业化', size: 35, weight: 800 },
            { text: '解决方案', size: 35, weight: 800 },
          ],
        },
      ],
    },
    rnd_solutions: {
      blocks: [
        {
          x: 409, top: 787, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '$value', size: 35, weight: 400 },
            { text: '同比 +21%', size: 26, weight: 400, color: NOTE },
          ],
        },
        {
          x: 224, top: 857, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '研发', size: 35, weight: 800 },
            { text: '解决方案', size: 35, weight: 800 },
          ],
        },
      ],
    },
    subscription: {
      blocks: [
        {
          x: 782, top: 505, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '订阅', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '同比 +16%', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    services: {
      blocks: [
        {
          x: 782, top: 1221, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '服务', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '同比 +14%', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 1156, top: 587, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '收入', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '同比 +16%', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1530, top: 467, anchor: 'middle', lineGap: 14,
          lines: [
            { text: '毛利润', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '利润率 74%', size: 26, weight: 400, color: NOTE },
            { text: '同比 (0 个百分点)', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1530, top: 1225, anchor: 'middle', lineGap: 12,
          lines: [
            { text: '收入', size: 30, weight: 800 },
            { text: '成本', size: 30, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1904, top: 360, anchor: 'middle', lineGap: 14,
          lines: [
            { text: '营业利润', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '利润率 29%', size: 26, weight: 400, color: NOTE },
            { text: '同比 +3 个百分点', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1904, top: 1019, anchor: 'middle', lineGap: 12,
          lines: [
            { text: '运营', size: 30, weight: 800 },
            { text: '费用', size: 30, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 2164, top: 623, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '其他', size: 27, weight: 800 },
            { text: '$value', size: 27, weight: 400 },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 441, anchor: 'middle', lineGap: 14,
          lines: [
            { text: '净利润', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '利润率 29%', size: 26, weight: 400, color: NOTE },
            { text: '同比 +2 个百分点', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 742, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '税费', size: 28, weight: 800 },
            { text: '$value', size: 28, weight: 400 },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 887, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '研发', size: 28, weight: 800 },
            { text: '$value', size: 28, weight: 400 },
            { text: '占收入 24%', size: 26, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1059, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '销售与市场', size: 28, weight: 800 },
            { text: '$value', size: 28, weight: 400 },
            { text: '占收入 13%', size: 26, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1231, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '管理费用', size: 28, weight: 800 },
            { text: '$value', size: 28, weight: 400 },
            { text: '占收入 8%', size: 26, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'veeva-q4-fy26',
    name: 'Veeva Systems · Q4 FY26',
    company: 'Veeva Systems',
    meta: {
      company: 'Veeva Systems',
      title: 'Veeva Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/veeva-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2099,
      periodX: 2426,
      periodY: 288,
      periodNoteY: 328,
      logoWidth: 494,
      logoHeight: 140,
      logoY: 268,
      logoViewBox: '0 0 494 140',
      logoSvg: `
        <polygon points="18,12 74,12 46,58" fill="#8a8d8f"/>
        <text x="247" y="120" font-family="Montserrat,Arial,sans-serif"
          font-size="150" font-weight="700" textLength="470" lengthAdjust="spacingAndGlyphs"
          fill="#f89a21">Veeva</text>
      `,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: '#59595b',
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: GRAY },
        hub: { node: ORANGE, label: GRAY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: ORANGE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 35, value: 35, note: 26, lineGap: 14 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 0.4486,
      nodes: {
        commercial: { x: 373, y: 534, width: 72, height: 147 },
        rnd_solutions: { x: 373, y: 886, width: 72, height: 171 },
        subscription: { x: 746, y: 642, width: 72, height: 318 },
        services: { x: 746, y: 1157, width: 72, height: 57 },
        revenue: { x: 1120, y: 730, width: 72, height: 375 },
        gross_profit: { x: 1494, y: 643, width: 72, height: 279 },
        cost_of_revenue: { x: 1494, y: 1113, width: 72, height: 96 },
        operating_profit: { x: 1868, y: 544, width: 72, height: 110 },
        operating_expenses: { x: 1868, y: 838, width: 72, height: 169 },
        other: { x: 2128, y: 574, width: 72, height: 32 },
        net_profit: { x: 2241, y: 447, width: 72, height: 109 },
        tax: { x: 2241, y: 727, width: 72, height: 33 },
        rnd: { x: 2241, y: 878, width: 72, height: 89 },
        sm: { x: 2241, y: 1100, width: 72, height: 49 },
        ga: { x: 2241, y: 1287, width: 72, height: 31 },
      },
      labels: enLabels,
    },

    nodes: [
      { id: 'commercial', col: 0, order: 0, type: 'source', label: ['Commercial', 'solutions'], value: 327, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'rnd_solutions', col: 0, order: 1, type: 'source', label: ['R&D', 'solutions'], value: 381, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 1, order: 0, type: 'source', label: 'Subscription', value: 708, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 128, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 836, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 622, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 213, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 246, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 377, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 5, type: 'profit', label: 'Other', value: 72, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 244, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 73, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 199, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 110, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 68, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'commercial', target: 'subscription', value: 327, width: 147, sourceOrder: 0, targetOrder: 0 },
      { source: 'rnd_solutions', target: 'subscription', value: 381, width: 171, sourceOrder: 0, targetOrder: 1 },
      { source: 'subscription', target: 'revenue', value: 708, width: 318, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 128, width: 57, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 622, width: 279, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 213, width: 96, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 246, width: 110, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 377, width: 169, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 173, width: 77, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 73, width: 33, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 72, width: 32, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 199, width: 89, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 110, width: 49, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 68, width: 31, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['Veeva', 'CRM', 'Vault'],
      zh: {
        name: 'Veeva Systems · 2026 财年第四季度',
        meta: {
          title: 'Veeva 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1640,
        },
        nodes: {
          commercial: { label: ['商业化', '解决方案'], notes: ['同比 +11%'] },
          rnd_solutions: { label: ['研发', '解决方案'], notes: ['同比 +21%'] },
          subscription: { label: '订阅', notes: ['同比 +16%'] },
          services: { label: '服务', notes: ['同比 +14%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 29%', '同比 +3 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 29%', '同比 +2 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 13%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 (2 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
