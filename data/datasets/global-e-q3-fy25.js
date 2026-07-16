/* ====================================================================
 * Global-e - Q3 FY25 income statement ($M)
 * Reconstructed from input/processed/global-e-q3-fy25.png as a fixed
 * d3-sankey layout with source-measured SVG geometry and vector branding.
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

  const globalELogoSvg = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="15" y="150" font-size="180" font-weight="500" fill="#333333"
        textLength="527" lengthAdjust="spacingAndGlyphs">Global</text>
      <circle cx="567" cy="88" r="64" fill="${ORANGE}"/>
      <circle cx="567" cy="88" r="43" fill="#f2f2f2"/>
      <path d="M521 105 L611 62" fill="none" stroke="${ORANGE}" stroke-width="18" stroke-linecap="butt"/>
      <rect x="610" y="75" width="24" height="24" fill="#f2f2f2"/>
    </g>`;

  const kpiCard = (growth) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="217" y="1143" width="148" height="161" rx="33" fill="${ORANGE}"/>
      <text x="291" y="1191" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">GMV</text>
      <text x="291" y="1233" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">$1.5B</text>
      <text x="291" y="1274" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${growth}</text>
    </g>`;

  const annotationsEn = `
    ${kpiCard('+33% Y/Y')}
    <text x="91" y="1340" font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">GMV = Gross Merchandise Value</text>`;

  const annotationsZh = `
    ${kpiCard('同比 +33%')}
    <text x="91" y="1340" font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">GMV = 商品交易总额</text>`;

  const zhLayoutLabels = {
    service_fees: { blocks: [
      { x: 425.5, top: 458, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: '同比 +25%', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 343, top: 607, anchor: 'end', lines: [{ text: '服务费', size: 40, weight: 800 }] },
    ] },
    fulfillment: { blocks: [
      { x: 425.5, top: 813, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: '同比 +26%', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 335, top: 970, anchor: 'end', lines: [{ text: '履约服务', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 892, top: 515, anchor: 'middle', lineGap: 9, lines: [
      { text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '同比 +25%', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1359.5, top: 371, anchor: 'middle', lineGap: 9, lines: [
      { text: '毛利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 45%', size: 28, weight: 400, color: NOTE },
      { text: '同比 0 个百分点', size: 27, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1359.5, top: 1119, anchor: 'middle', lineGap: 8, lines: [
      { text: '收入', size: 35, weight: 800 }, { text: '成本', size: 35, weight: 800 },
      { text: '$value', size: 35, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1827, top: 301, anchor: 'middle', lineGap: 9, lines: [
      { text: '营业利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 8%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +20 个百分点', size: 27, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1827, top: 830, anchor: 'middle', lineGap: 8, lines: [
      { text: '运营费用', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: 2453, top: 349, anchor: 'middle', lineGap: 9, lines: [
      { text: '净利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 6%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +19 个百分点', size: 27, weight: 400, color: NOTE },
    ] }] },
    other: { blocks: [{ x: 2453, top: 540, anchor: 'middle', lineGap: 8, lines: [
      { text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    tax: { blocks: [{ x: 2453, top: 646, anchor: 'middle', lineGap: 8, lines: [
      { text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    sm: { blocks: [{ x: 2453, top: 787, anchor: 'middle', lineGap: 8, lines: [
      { text: '销售与营销', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 17%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (18 个百分点)', size: 27, weight: 400, color: NOTE },
    ] }] },
    rnd: { blocks: [{ x: 2453, top: 986, anchor: 'middle', lineGap: 8, lines: [
      { text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 14%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (1 个百分点)', size: 27, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: 2453, top: 1190, anchor: 'middle', lineGap: 8, lines: [
      { text: '一般及行政', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 6%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (0 个百分点)', size: 27, weight: 400, color: NOTE },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'global-e-q3-fy25',
    name: 'Global-e · Q3 FY25',
    company: 'Global-e',
    meta: {
      company: 'Global-e',
      title: 'Global-e Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/global-e-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2248,
      hidePeriodStamp: true,
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
        service_fees: { x: 390, y: 557, width: 71, height: 165 },
        fulfillment: { x: 390, y: 911, width: 71, height: 187 },
        revenue: { x: 857, y: 656, width: 70, height: 355 },
        gross_profit: { x: 1324, y: 555, width: 71, height: 159 },
        cost_of_revenue: { x: 1324, y: 903, width: 71, height: 194 },
        operating_profit: { x: 1792, y: 483, width: 70, height: 26 },
        operating_expenses: { x: 1792, y: 673, width: 70, height: 131 },
        net_profit: { x: 2258, y: 407, width: 71, height: 18 },
        other: { x: 2258, y: 572, width: 71, height: 3 },
        tax: { x: 2258, y: 680, width: 71, height: 1 },
        sm: { x: 2258, y: 793, width: 71, height: 60 },
        rnd: { x: 2258, y: 1002, width: 71, height: 48 },
        ga: { x: 2258, y: 1217, width: 71, height: 19 },
      },
      labels: {
        service_fees: { blocks: [
          { x: 425.5, top: 458, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+25% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 343, top: 607, anchor: 'end', lines: [{ text: 'Service fees', size: 40, weight: 800 }] },
        ] },
        fulfillment: { blocks: [
          { x: 425.5, top: 813, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+26% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 335, top: 970, anchor: 'end', lines: [{ text: 'Fulfillment', size: 40, weight: 800 }] },
        ] },
        revenue: { blocks: [{ x: 892, top: 515, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '+25% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1359.5, top: 371, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '45% margin', size: 28, weight: 400, color: NOTE },
          { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1359.5, top: 1119, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 35, weight: 800 }, { text: 'revenue', size: 35, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1827, top: 301, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '8% margin', size: 28, weight: 400, color: NOTE },
          { text: '+20pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1827, top: 830, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2453, top: 349, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Net profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '6% margin', size: 28, weight: 400, color: NOTE },
          { text: '+19pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        other: { blocks: [{ x: 2453, top: 540, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
        ] }] },
        tax: { blocks: [{ x: 2453, top: 646, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
        ] }] },
        sm: { blocks: [{ x: 2453, top: 787, anchor: 'middle', lineGap: 8, lines: [
          { text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '17% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(18pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        rnd: { blocks: [{ x: 2453, top: 986, anchor: 'middle', lineGap: 8, lines: [
          { text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        ga: { blocks: [{ x: 2453, top: 1190, anchor: 'middle', lineGap: 8, lines: [
          { text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '6% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
      },
    },
    nodes: [
      { id: 'service_fees', col: 0, order: 0, type: 'source', label: 'Service fees', value: 103, notes: ['+25% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'fulfillment', col: 0, order: 1, type: 'source', label: 'Fulfillment', value: 117, notes: ['+26% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 221, notes: ['+25% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 100, notes: ['45% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 121 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 17, notes: ['8% margin', '+20pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 83 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 13, notes: ['6% margin', '+19pp Y/Y'] },
      { id: 'other', col: 4, order: 1, type: 'cost', label: 'Other', value: 3 },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 1 },
      { id: 'sm', col: 4, order: 3, type: 'cost', label: 'Sales & marketing', value: 38, notes: ['17% of revenue', '(18pp) Y/Y'] },
      { id: 'rnd', col: 4, order: 4, type: 'cost', label: 'Research & development', value: 31, notes: ['14% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 4, order: 5, type: 'cost', label: 'General & administrative', value: 13, notes: ['6% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'service_fees', target: 'revenue', value: 103, sourceWidth: 165, targetWidth: 166, y0: 639.5, y1: 739, linkTint: SOURCE_LINK },
      { source: 'fulfillment', target: 'revenue', value: 117, sourceWidth: 187, targetWidth: 189, y0: 1004.5, y1: 916.5, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 100, sourceWidth: 161, targetWidth: 159, y0: 736.5, y1: 634.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 121, sourceWidth: 194, targetWidth: 194, y0: 914, y1: 1000, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 17, sourceWidth: 27, targetWidth: 26, y0: 568.5, y1: 496, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 83, sourceWidth: 131, targetWidth: 131, y0: 648.5, y1: 738.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 13, sourceWidth: 20, targetWidth: 18, y0: 493, y1: 416, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 3, sourceWidth: 4, targetWidth: 3, y0: 505, y1: 573.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 1, sourceWidth: 2, targetWidth: 1, y0: 508, y1: 680.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 38, sourceWidth: 61, targetWidth: 60, y0: 703.5, y1: 823, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 31, sourceWidth: 49, targetWidth: 48, y0: 758.5, y1: 1026, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 13, sourceWidth: 21, targetWidth: 19, y0: 793.5, y1: 1226.5, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Global-e · 2025 财年第三季度',
        meta: {
          title: 'Global-e 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 2248,
        },
        nodes: {
          service_fees: { label: '服务费', notes: ['同比 +25%'] },
          fulfillment: { label: '履约服务', notes: ['同比 +26%'] },
          revenue: { label: '收入', notes: ['同比 +25%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 +20 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +19 个百分点'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 17%', '同比 (18 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 6%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();
