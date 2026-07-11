/* ====================================================================
 * Veeva Systems - Q1 FY27 income statement ($M)
 * Reconstructed from input/processed/veeva-q1-fy27.png as a fixed
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

  // Extents measured from source (kept clear of the orange col-0 node at x=369):
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
          x: 405, top: 449, anchor: 'middle', lineGap: 15,
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
          x: 405, top: 787, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '$value', size: 35, weight: 400 },
            { text: '+19% Y/Y', size: 26, weight: 400, color: NOTE },
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
          x: 778, top: 507, anchor: 'middle', lineGap: 15,
          lines: [
            { text: 'Subscription', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '+15% Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    services: {
      blocks: [
        {
          x: 778, top: 1217, anchor: 'middle', lineGap: 15,
          lines: [
            { text: 'Services', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '+23% Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 1152, top: 587, anchor: 'middle', lineGap: 15,
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
          x: 1526, top: 469, anchor: 'middle', lineGap: 14,
          lines: [
            { text: 'Gross profit', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '75% margin', size: 26, weight: 400, color: NOTE },
            { text: '(2pp) Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1526, top: 1181, anchor: 'middle', lineGap: 12,
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
          x: 1898, top: 387, anchor: 'middle', lineGap: 14,
          lines: [
            { text: 'Operating profit', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '31% margin', size: 26, weight: 400, color: NOTE },
            { text: '+0pp Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1898, top: 1019, anchor: 'middle', lineGap: 12,
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
          x: 2156, top: 645, anchor: 'middle', lineGap: 8,
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
            { text: '30% margin', size: 26, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 757, anchor: 'middle', lineGap: 9,
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
            { text: '(0pp) Y/Y', size: 26, weight: 400, color: NOTE },
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
            { text: '(1pp) Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  const zhLabels = {
    commercial: {
      blocks: [
        {
          x: 405, top: 449, anchor: 'middle', lineGap: 15,
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
          x: 405, top: 787, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '$value', size: 35, weight: 400 },
            { text: '同比 +19%', size: 26, weight: 400, color: NOTE },
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
          x: 778, top: 507, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '订阅', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '同比 +15%', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    services: {
      blocks: [
        {
          x: 778, top: 1217, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '服务', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '同比 +23%', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 1152, top: 587, anchor: 'middle', lineGap: 15,
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
          x: 1526, top: 469, anchor: 'middle', lineGap: 14,
          lines: [
            { text: '毛利润', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '利润率 75%', size: 26, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1526, top: 1181, anchor: 'middle', lineGap: 12,
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
          x: 1898, top: 387, anchor: 'middle', lineGap: 14,
          lines: [
            { text: '营业利润', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '利润率 31%', size: 26, weight: 400, color: NOTE },
            { text: '同比 +0 个百分点', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1898, top: 1019, anchor: 'middle', lineGap: 12,
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
          x: 2156, top: 645, anchor: 'middle', lineGap: 8,
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
            { text: '利润率 30%', size: 26, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 757, anchor: 'middle', lineGap: 9,
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
            { text: '同比 (0 个百分点)', size: 26, weight: 400, color: NOTE },
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
            { text: '同比 (1 个百分点)', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'veeva-q1-fy27',
    name: 'Veeva Systems · Q1 FY27',
    company: 'Veeva Systems',
    meta: {
      company: 'Veeva Systems',
      title: 'Veeva Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/veeva-q1-fy27.png', width: 2667, height: 1500 },
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
      scale: 0.3749,
      nodes: {
        commercial: { x: 369, y: 539, width: 72, height: 127 },
        rnd_solutions: { x: 369, y: 877, width: 72, height: 147 },
        subscription: { x: 742, y: 653, width: 72, height: 274 },
        services: { x: 742, y: 1139, width: 72, height: 57 },
        revenue: { x: 1116, y: 733, width: 72, height: 331 },
        gross_profit: { x: 1490, y: 651, width: 72, height: 249 },
        cost_of_revenue: { x: 1490, y: 1078, width: 72, height: 82 },
        operating_profit: { x: 1862, y: 571, width: 72, height: 103 },
        operating_expenses: { x: 1862, y: 854, width: 72, height: 146 },
        other: { x: 2120, y: 590, width: 72, height: 28 },
        net_profit: { x: 2237, y: 464, width: 72, height: 98 },
        tax: { x: 2237, y: 776, width: 72, height: 33 },
        rnd: { x: 2237, y: 903, width: 72, height: 78 },
        sm: { x: 2237, y: 1088, width: 72, height: 42 },
        ga: { x: 2237, y: 1253, width: 72, height: 26 },
      },
      labels: enLabels,
    },

    nodes: [
      { id: 'commercial', col: 0, order: 0, type: 'source', label: ['Commercial', 'solutions'], value: 338, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'rnd_solutions', col: 0, order: 1, type: 'source', label: ['R&D', 'solutions'], value: 392, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 1, order: 0, type: 'source', label: 'Subscription', value: 730, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 153, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 883, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 662, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 221, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 273, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 389, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 5, type: 'profit', label: 'Other', value: 74, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 261, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 87, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 208, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 111, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 70, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'commercial', target: 'subscription', value: 338, width: 127, sourceOrder: 0, targetOrder: 0 },
      { source: 'rnd_solutions', target: 'subscription', value: 392, width: 147, sourceOrder: 0, targetOrder: 1 },
      { source: 'subscription', target: 'revenue', value: 730, width: 274, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 153, width: 57, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 662, width: 249, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 221, width: 82, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 273, width: 103, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 389, width: 146, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 186, width: 70, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 87, width: 33, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 74, width: 28, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 208, width: 78, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 111, width: 42, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 70, width: 26, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['Veeva', 'CRM', 'Vault'],
      zh: {
        name: 'Veeva Systems · 2027 财年第一季度',
        meta: {
          title: 'Veeva 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 1640,
        },
        nodes: {
          commercial: { label: ['商业化', '解决方案'], notes: ['同比 +11%'] },
          rnd_solutions: { label: ['研发', '解决方案'], notes: ['同比 +19%'] },
          subscription: { label: '订阅', notes: ['同比 +15%'] },
          services: { label: '服务', notes: ['同比 +23%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 75%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +0 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 13%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
