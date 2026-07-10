/* ====================================================================
 * Global-e - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/global-e-q4-fy25.png as a fixed
 * d3-sankey layout with measured SVG geometry and pure vector annotations.
 * ==================================================================== */
(function () {
  const DARK = '#3f4145';
  const SOURCE_LINK = '#a1a2a4';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const ORANGE = '#f05a2b';
  const RIGHT_LABEL_X = 2407;

  const globalELogoSvg = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="15" y="150" font-size="180" font-weight="500" fill="#333333"
        textLength="527" lengthAdjust="spacingAndGlyphs">Global</text>
      <circle cx="567" cy="88" r="64" fill="${ORANGE}"/>
      <circle cx="567" cy="88" r="43" fill="#f2f2f2"/>
      <path d="M521 105 L611 62" fill="none" stroke="${ORANGE}" stroke-width="18" stroke-linecap="butt"/>
      <rect x="610" y="75" width="24" height="24" fill="#f2f2f2"/>
    </g>`;

  const kpiCard = (label3) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="216" y="1147" width="149" height="157" rx="33" fill="${ORANGE}"/>
      <text x="290.5" y="1195" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">GMV</text>
      <text x="290.5" y="1238" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">$2.4B</text>
      <text x="290.5" y="1282" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${label3}</text>
    </g>`;

  const annotationsEn = `
    ${kpiCard('+38% Y/Y')}
    <line x1="2257" y1="578" x2="2328" y2="578" stroke="${RED_LINK}" stroke-width="2"/>
    <text x="91" y="1340" font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">GMV = Gross Merchandise Value</text>`;

  const annotationsZh = `
    ${kpiCard('同比 +38%')}
    <line x1="2257" y1="578" x2="2328" y2="578" stroke="${RED_LINK}" stroke-width="2"/>
    <text x="91" y="1340" font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">GMV = 商品交易总额</text>`;

  const zhLayoutLabels = {
    service_fees: {
      blocks: [
        { x: 424.5, top: 426, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '同比 +37%', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 343, top: 590, anchor: 'end', lines: [{ text: '服务费', size: 40, weight: 800 }] },
      ],
    },
    fulfillment: {
      blocks: [
        { x: 424.5, top: 844, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '同比 +21%', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 335, top: 1012, anchor: 'end', lines: [{ text: '履约服务', size: 40, weight: 800 }] },
      ],
    },
    revenue: { blocks: [{ x: 891, top: 491, anchor: 'middle', lineGap: 9, lines: [
      { text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '同比 +28%', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1358.5, top: 329, anchor: 'middle', lineGap: 9, lines: [
      { text: '毛利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 46%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +1 个百分点', size: 27, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1358.5, top: 1155, anchor: 'middle', lineGap: 8, lines: [
      { text: '收入', size: 35, weight: 800 }, { text: '成本', size: 35, weight: 800 },
      { text: '$value', size: 35, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1826, top: 222, anchor: 'middle', lineGap: 9, lines: [
      { text: '营业利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 19%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +17 个百分点', size: 27, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1826, top: 812, anchor: 'middle', lineGap: 8, lines: [
      { text: '运营费用', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: 2357, top: 283, anchor: 'start', lineGap: 9, lines: [
      { text: '净利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 19%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +18 个百分点', size: 27, weight: 400, color: NOTE },
    ] }] },
    other: { blocks: [{ x: 2408, top: 533, anchor: 'start', lineGap: 8, lines: [
      { text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    sm: { blocks: [{ x: 2403, top: 726, anchor: 'start', lineGap: 8, lines: [
      { text: '销售与营销', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 13%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (14 个百分点)', size: 27, weight: 400, color: NOTE },
    ] }] },
    rnd: { blocks: [{ x: 2403, top: 955, anchor: 'start', lineGap: 8, lines: [
      { text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 10%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (1 个百分点)', size: 27, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: 2403, top: 1185, anchor: 'start', lineGap: 8, lines: [
      { text: '一般及行政', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 4%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (1 个百分点)', size: 27, weight: 400, color: NOTE },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'global-e-q4-fy25',
    name: 'Global-e · Q4 FY25',
    company: 'Global-e',
    meta: {
      company: 'Global-e',
      title: 'Global-e Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/global-e-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2248,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 655,
      logoHeight: 175,
      logoY: 241,
      logoViewBox: '0 0 655 175',
      logoSvg: globalELogoSvg,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: DARK, label: DARK },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        service_fees: { x: 389, y: 520, width: 71, height: 185 },
        fulfillment: { x: 389, y: 938, width: 71, height: 201 },
        revenue: { x: 856, y: 640, width: 70, height: 389 },
        gross_profit: { x: 1323, y: 520, width: 71, height: 177 },
        cost_of_revenue: { x: 1323, y: 929, width: 71, height: 209 },
        operating_profit: { x: 1791, y: 413, width: 70, height: 71 },
        operating_expenses: { x: 1791, y: 688, width: 70, height: 104 },
        net_profit: { x: 2257, y: 304, width: 71, height: 70 },
        other: { x: 2257, y: 577, width: 71, height: 2 },
        sm: { x: 2257, y: 739, width: 71, height: 49 },
        rnd: { x: 2257, y: 981, width: 71, height: 36 },
        ga: { x: 2257, y: 1220, width: 71, height: 15 },
      },
      labels: {
        service_fees: { blocks: [
          { x: 424.5, top: 426, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+37% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 343, top: 590, anchor: 'end', lines: [{ text: 'Service fees', size: 40, weight: 800 }] },
        ] },
        fulfillment: { blocks: [
          { x: 424.5, top: 844, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+21% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 335, top: 1012, anchor: 'end', lines: [{ text: 'Fulfillment', size: 40, weight: 800 }] },
        ] },
        revenue: { blocks: [{ x: 891, top: 491, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '+28% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1358.5, top: 329, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '46% margin', size: 28, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1358.5, top: 1155, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 35, weight: 800 }, { text: 'revenue', size: 35, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1826, top: 222, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '19% margin', size: 28, weight: 400, color: NOTE },
          { text: '+17pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1826, top: 812, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2357, top: 283, anchor: 'start', lineGap: 9, lines: [
          { text: 'Net profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '19% margin', size: 28, weight: 400, color: NOTE },
          { text: '+18pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        other: { blocks: [{ x: 2408, top: 533, anchor: 'start', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
        ] }] },
        sm: { blocks: [{ x: 2403, top: 726, anchor: 'start', lineGap: 8, lines: [
          { text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '13% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(14pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        rnd: { blocks: [{ x: 2403, top: 955, anchor: 'start', lineGap: 8, lines: [
          { text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '10% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        ga: { blocks: [{ x: 2403, top: 1185, anchor: 'start', lineGap: 8, lines: [
          { text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '4% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
      },
    },
    nodes: [
      { id: 'service_fees', col: 0, order: 0, type: 'source', label: 'Service fees', value: 161, notes: ['+37% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'fulfillment', col: 0, order: 1, type: 'source', label: 'Fulfillment', value: 176, notes: ['+21% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 337, notes: ['+28% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 155, notes: ['46% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 182 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 63, notes: ['19% margin', '+17pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 92 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 62, notes: ['19% margin', '+18pp Y/Y'] },
      { id: 'other', col: 4, order: 1, type: 'cost', label: 'Other', value: 3, color: '#f2f2f2' },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: 'Sales & marketing', value: 44, notes: ['13% of revenue', '(14pp) Y/Y'] },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'Research & development', value: 33, notes: ['10% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'General & administrative', value: 15, notes: ['4% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'service_fees', target: 'revenue', value: 161, sourceWidth: 185, targetWidth: 186, y0: 612.5, y1: 733, linkTint: SOURCE_LINK },
      { source: 'fulfillment', target: 'revenue', value: 176, sourceWidth: 201, targetWidth: 203, y0: 1038.5, y1: 927.5, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 155, sourceWidth: 180, targetWidth: 177, y0: 730, y1: 608.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 182, sourceWidth: 209, targetWidth: 209, y0: 924.5, y1: 1033.5, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 63, sourceWidth: 72, targetWidth: 71, y0: 556, y1: 448.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 92, sourceWidth: 105, targetWidth: 104, y0: 644.5, y1: 740, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 62, width: 70, y0: 448, y1: 339, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 3, sourceWidth: 1, targetWidth: 2, y0: 483.5, y1: 578, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 44, sourceWidth: 50, targetWidth: 49, y0: 713, y1: 763.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 33, sourceWidth: 37, targetWidth: 36, y0: 756.5, y1: 999, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 15, sourceWidth: 17, targetWidth: 15, y0: 783.5, y1: 1227.5, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Global-e · 2025 财年第四季度',
        meta: {
          title: 'Global-e 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 2248,
        },
        nodes: {
          service_fees: { label: '服务费', notes: ['同比 +37%'] },
          fulfillment: { label: '履约服务', notes: ['同比 +21%'] },
          revenue: { label: '收入', notes: ['同比 +28%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 +17 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 19%', '同比 +18 个百分点'] },
          other: { label: '其他' },
          sm: { label: '销售与营销', notes: ['占收入 13%', '同比 (14 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 10%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 4%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();
