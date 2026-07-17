/* ====================================================================
 * Veeva Systems - Q3 FY26 income statement ($M)
 * Reconstructed from input/processed/veeva-q3-fy26.png as a fixed
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
  const annotationsFor = (commercialLines, rndLines) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${veevaMark(81, 660, 152, 'CRM', 244, 84, 600)}
      ${veevaMark(72, 1008, 160, 'Vault', 237, 99, 500)}
    </g>
    <g class="sankey-interactive-annotation" data-node="commercial"
      font-family="Noto Sans,Arial,sans-serif" font-size="35" font-weight="800"
      text-anchor="middle" fill="${GRAY}">
      <text x="224" y="560">${commercialLines[0]}</text>
      <text x="224" y="613">${commercialLines[1]}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="rnd_solutions"
      font-family="Noto Sans,Arial,sans-serif" font-size="35" font-weight="800"
      text-anchor="middle" fill="${GRAY}">
      <text x="224" y="905">${rndLines[0]}</text>
      <text x="224" y="958">${rndLines[1]}</text>
    </g>`;
  const annotationsEn = annotationsFor(['Commercial', 'solutions'], ['R&D', 'solutions']);
  const annotationsZh = annotationsFor(['商业化', '解决方案'], ['研发', '解决方案']);

  const enLabels = {
    commercial: {
      blocks: [
        {
          x: 409, top: 438, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '$value', size: 35, weight: 400 },
            { text: '+14% Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd_solutions: {
      blocks: [
        {
          x: 409, top: 776, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '$value', size: 35, weight: 400 },
            { text: '+21% Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    subscription: {
      blocks: [
        {
          x: 782, top: 498, anchor: 'middle', lineGap: 15,
          lines: [
            { text: 'Subscription', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '+17% Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    services: {
      blocks: [
        {
          x: 782, top: 1208, anchor: 'middle', lineGap: 15,
          lines: [
            { text: 'Services', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '+9% Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 1147, top: 587, anchor: 'middle', lineGap: 15,
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
            { text: '75% margin', size: 26, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1530, top: 1215, anchor: 'middle', lineGap: 12,
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
          x: 1904, top: 365, anchor: 'middle', lineGap: 14,
          lines: [
            { text: 'Operating profit', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '30% margin', size: 26, weight: 400, color: NOTE },
            { text: '+4pp Y/Y', size: 26, weight: 400, color: NOTE },
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
          x: RIGHT_LABEL_X, top: 427, anchor: 'middle', lineGap: 14,
          lines: [
            { text: 'Net profit', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '29% margin', size: 26, weight: 400, color: NOTE },
            { text: '+3pp Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 720, anchor: 'middle', lineGap: 9,
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
            { text: '14% of revenue', size: 26, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: 2441, top: 1231, anchor: 'middle', lineGap: 13,
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
          x: 409, top: 438, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '$value', size: 35, weight: 400 },
            { text: '同比 +14%', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd_solutions: {
      blocks: [
        {
          x: 409, top: 776, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '$value', size: 35, weight: 400 },
            { text: '同比 +21%', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    subscription: {
      blocks: [
        {
          x: 782, top: 498, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '订阅', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '同比 +17%', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    services: {
      blocks: [
        {
          x: 782, top: 1208, anchor: 'middle', lineGap: 15,
          lines: [
            { text: '服务', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '同比 +9%', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 1147, top: 587, anchor: 'middle', lineGap: 15,
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
            { text: '利润率 75%', size: 26, weight: 400, color: NOTE },
            { text: '同比 (0 个百分点)', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1530, top: 1215, anchor: 'middle', lineGap: 12,
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
          x: 1904, top: 365, anchor: 'middle', lineGap: 14,
          lines: [
            { text: '营业利润', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '利润率 30%', size: 26, weight: 400, color: NOTE },
            { text: '同比 +4 个百分点', size: 26, weight: 400, color: NOTE },
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
          x: RIGHT_LABEL_X, top: 427, anchor: 'middle', lineGap: 14,
          lines: [
            { text: '净利润', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
            { text: '利润率 29%', size: 26, weight: 400, color: NOTE },
            { text: '同比 +3 个百分点', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 720, anchor: 'middle', lineGap: 9,
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
            { text: '占收入 14%', size: 26, weight: 400, color: NOTE },
            { text: '同比 (0 个百分点)', size: 26, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: 2441, top: 1231, anchor: 'middle', lineGap: 13,
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
    key: 'veeva-q3-fy26',
    name: 'Veeva Systems · Q3 FY26',
    company: 'Veeva Systems',
    meta: {
      company: 'Veeva Systems',
      title: 'Veeva Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/veeva-q3-fy26.png', width: 2667, height: 1500 },
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
        <polygon points="-22,18 30,18 4,70" fill="#8a8d8f"/>
        <text x="-57" y="140" font-family="Montserrat,Arial,sans-serif"
          font-size="174" font-weight="700" textLength="541" lengthAdjust="spacingAndGlyphs"
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
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 0.4070,
      nodes: {
        commercial: { x: 373, y: 533, width: 72, height: 130 },
        rnd_solutions: { x: 373, y: 876, width: 72, height: 149 },
        subscription: { x: 747, y: 646, width: 72, height: 281 },
        services: { x: 747, y: 1140, width: 72, height: 51 },
        revenue: { x: 1121, y: 732, width: 72, height: 335 },
        gross_profit: { x: 1494, y: 648, width: 72, height: 252 },
        cost_of_revenue: { x: 1494, y: 1110, width: 72, height: 81 },
        operating_profit: { x: 1868, y: 549, width: 72, height: 98 },
        operating_expenses: { x: 1868, y: 842, width: 72, height: 153 },
        other: { x: 2134, y: 569, width: 72, height: 28 },
        net_profit: { x: 2241, y: 446, width: 72, height: 95 },
        tax: { x: 2241, y: 741, width: 72, height: 30 },
        rnd: { x: 2241, y: 892, width: 72, height: 78 },
        sm: { x: 2241, y: 1082, width: 72, height: 44 },
        ga: { x: 2241, y: 1244, width: 72, height: 26 },
      },
      labels: enLabels,
    },

    nodes: [
      { id: 'commercial', col: 0, order: 0, type: 'source', label: ['Commercial', 'solutions'], value: 318, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'rnd_solutions', col: 0, order: 1, type: 'source', label: ['R&D', 'solutions'], value: 365, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 1, order: 0, type: 'source', label: 'Subscription', value: 683, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 129, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 811, color: ORANGE, labelColor: GRAY, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 612, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 200, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 241, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 371, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 5, type: 'profit', label: 'Other', value: 72, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 236, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 77, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 192, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 111, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 69, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'commercial', target: 'subscription', value: 318, sourceWidth: 130, targetWidth: 131, y0: 598, y1: 711.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'rnd_solutions', target: 'subscription', value: 365, sourceWidth: 149, targetWidth: 150, y0: 950.5, y1: 852, sourceOrder: 0, targetOrder: 1 },
      { source: 'subscription', target: 'revenue', value: 683, sourceWidth: 281, targetWidth: 283, y0: 786.5, y1: 873.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 129, sourceWidth: 51, targetWidth: 52, y0: 1165.5, y1: 1041, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 612, sourceWidth: 253, targetWidth: 252, y0: 858.5, y1: 774, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 200, sourceWidth: 82, targetWidth: 81, y0: 1026, y1: 1150.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 241, sourceWidth: 99, targetWidth: 98, y0: 697.5, y1: 598, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 371, sourceWidth: 152, targetWidth: 153, y0: 824, y1: 918.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 164, sourceWidth: 67, targetWidth: 66, y0: 582.5, y1: 479, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 77, sourceWidth: 31, targetWidth: 30, y0: 631.5, y1: 756, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 72, width: 28, y0: 583, y1: 527, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 192, sourceWidth: 79, targetWidth: 78, y0: 881.5, y1: 931, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 111, sourceWidth: 45, targetWidth: 44, y0: 943.5, y1: 1104, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 69, sourceWidth: 29, targetWidth: 26, y0: 980.5, y1: 1257, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['Veeva', 'CRM', 'Vault'],
      zh: {
        name: 'Veeva Systems · 2026 财年第三季度',
        annotationsSvg: annotationsZh,
        meta: {
          title: 'Veeva 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 10 月',
          titleTextLength: 1640,
        },
        nodes: {
          commercial: { label: ['商业化', '解决方案'], notes: ['同比 +14%'] },
          rnd_solutions: { label: ['研发', '解决方案'], notes: ['同比 +21%'] },
          subscription: { label: '订阅', notes: ['同比 +17%'] },
          services: { label: '服务', notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 75%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 30%', '同比 +4 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 29%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 14%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 (2 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
