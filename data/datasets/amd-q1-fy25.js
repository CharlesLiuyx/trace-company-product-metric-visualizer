/* ====================================================================
 * AMD - Q1 FY25 income statement ($B)
 * Reconstructed from input/processed/amd-q1-fy25.png as a fixed
 * d3-sankey layout, including the complete right-hand profit and
 * operating-expense continuations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const BLUE = '#4a8397';
  const BLUE_LINK = '#a6c0c9';
  const ORANGE = '#e26301';
  const ORANGE_LINK = '#efba83';
  const MAGENTA = '#b2002a';
  const MAGENTA_LINK = '#d78299';
  const TEAL = '#0b5366';
  const TEAL_LINK = '#9ab9c2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="1048" y="460" text-anchor="middle" font-size="56" font-weight="700" fill="#5e5e5e">Q1 FY25</text>
    </g>
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${svgIcon('amdDataCenterCluster', 58, 334, 188, 306, '0 0 197 325')}
      ${svgIcon('amdRyzenWordmark', 37, 748, 230, 138, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 63, 992, 170, 139, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 55, 1192, 205, 69, '0 0 226 76')}
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="1048" y="460" text-anchor="middle" font-size="56" font-weight="700" fill="#5e5e5e">2025 财年第一季度</text>
    </g>
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${svgIcon('amdDataCenterCluster', 58, 334, 188, 306, '0 0 197 325')}
      ${svgIcon('amdRyzenWordmark', 37, 748, 230, 138, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 63, 992, 170, 139, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 55, 1192, 205, 69, '0 0 226 76')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q1-fy25',
    name: 'AMD · Q1 FY25',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q1 FY25 Income Statement',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2035,
      hidePeriodStamp: true,
      logoWidth: 430,
      logoHeight: 126,
      logoY: 266,
      logoViewBox: '0 0 468 138',
      logoSvg: BUSINESS_ICONS.amdCompanyWordmark || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: {
        mode: 'error',
        // User-directed topology restoration: the Source labels and values
        // define these continuations even though the right-hand ribbons and
        // faces are absent from the raster export. Audit their complete
        // candidate occupancy as design-specified interfaces.
        fullFaceIds: [
          'operating_profit:right',
          'other:right',
          'net_profit:left',
          'tax:left',
          'rnd:left',
          'sga:left',
          'amortization:left',
        ],
      },
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 45.6,
      nodes: {
        data_center: { x: 564, y: 420, width: 67, height: 167 },
        client: { x: 564, y: 769, width: 67, height: 103 },
        gaming: { x: 564, y: 1057, width: 67, height: 29 },
        embedded: { x: 564, y: 1273, width: 67, height: 37 },
        revenue: { x: 1005, y: 667, width: 66, height: 339 },
        gross_profit: { x: 1445, y: 576, width: 67, height: 170 },
        cost_of_revenue: { x: 1445, y: 932, width: 67, height: 168 },
        operating_profit: { x: 1886, y: 499, width: 66, height: 36 },
        operating_expenses: { x: 1884, y: 727, width: 66, height: 132 },
        other: { x: 2184, y: 489, width: 68, height: 4 },
        net_profit: { x: 2319, y: 414, width: 67, height: 32 },
        tax: { x: 2319, y: 674, width: 67, height: 6 },
        rnd: { x: 2319, y: 830, width: 67, height: 79 },
        sga: { x: 2319, y: 1025, width: 67, height: 40 },
        amortization: { x: 2319, y: 1227, width: 67, height: 14 },
      },
      labels: {
        data_center: {
          blocks: [
            { x: 598, top: 325, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+57% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 521, top: 457, anchor: 'end', lineGap: 9, lines: [
              { text: 'Data Center', size: 40, weight: 800 },
              { text: '25% operating margin', size: 28, weight: 400, color: NOTE },
              { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        client: {
          blocks: [
            { x: 598, top: 681, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+68% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 518, top: 792, anchor: 'end', lineGap: 8, lines: [
              { text: 'Client', size: 40, weight: 800 },
            ] },
            { x: 506, top: 883, anchor: 'end', lineGap: 8, lines: [
              { text: 'Client and Gaming', size: 28, weight: 400, color: NOTE },
              { text: '17% operating margin', size: 28, weight: 400, color: NOTE },
              { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        gaming: {
          blocks: [
            { x: 598, top: 956, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '(30%) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 527, top: 1047, anchor: 'end', lineGap: 8, lines: [
              { text: 'Gaming', size: 40, weight: 800 },
            ] },
          ],
        },
        embedded: {
          blocks: [
            { x: 598, top: 1172, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '(3%) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 519, top: 1208, anchor: 'end', lineGap: 8, lines: [
              { text: 'Embedded', size: 40, weight: 800 },
              { text: '40% operating margin', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        revenue: { blocks: [{ x: 1038, top: 514, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Revenue', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '+36% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1479, top: 397, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '50% margin', size: 28, weight: 400, color: NOTE },
          { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1479, top: 1124, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 36, weight: 800 },
          { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1919, top: 318, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '11% margin', size: 28, weight: 400, color: NOTE },
          { text: '+10pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1917, top: 877, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 38, weight: 800 },
          { text: 'expenses', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
        ] }] },
        other: { blocks: [{ x: 2218, top: 505, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2420, top: 369, anchor: 'start', lineGap: 9, lines: [
          { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '10% margin', size: 28, weight: 400, color: NOTE },
          { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2514, top: 628, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: 2412, top: 788, anchor: 'start', lineGap: 8, lines: [
          { text: 'Research &', size: 31, weight: 800 },
          { text: 'Development', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '23% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        sga: { blocks: [{ x: 2406, top: 986, anchor: 'start', lineGap: 8, lines: [
          { text: 'Sales, General', size: 31, weight: 800 },
          { text: '& Admin', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '12% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        amortization: { blocks: [{ x: 2409, top: 1185, anchor: 'start', lineGap: 8, lines: [
          { text: 'Amortization', size: 31, weight: 800 },
          { text: 'of intangibles', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '4% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
      },
    },
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 3.674, notes: ['+57% Y/Y', '25% operating margin', '+2pp Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 2.294, notes: ['+68% Y/Y', 'Client and Gaming', '17% operating margin', '+7pp Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 0.647, notes: ['(30%) Y/Y'], color: MAGENTA, labelColor: MAGENTA, linkTint: MAGENTA_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 0.823, notes: ['(3%) Y/Y', '40% operating margin', '(1pp) Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 7.438, notes: ['+36% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.736, notes: ['50% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.702 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.806, notes: ['11% margin', '+10pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.93 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.026, valueText: '$26M', color: GREEN, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.709, notes: ['10% margin', '+7pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.123 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'Development'], value: 1.728, notes: ['23% of revenue', '(5pp) Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.886, notes: ['12% of revenue', '+1pp Y/Y'] },
      { id: 'amortization', col: 5, order: 4, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.316, notes: ['4% of revenue', '(3pp) Y/Y'] },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 3.674, sourceWidth: 167, targetWidth: 166, y0: 503.5, y1: 750, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 2.294, sourceWidth: 103, targetWidth: 104, y0: 820.5, y1: 886, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 0.647, sourceWidth: 29, targetWidth: 29, y0: 1071.5, y1: 953.5, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 0.823, sourceWidth: 37, targetWidth: 37, y0: 1291.5, y1: 987.5, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 3.736, sourceWidth: 169, targetWidth: 170, y0: 751.5, y1: 661, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.702, sourceWidth: 169, targetWidth: 168, y0: 921.5, y1: 1016, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.806, sourceWidth: 35, targetWidth: 36, y0: 593.5, y1: 517, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.93, sourceWidth: 135, targetWidth: 132, y0: 678.5, y1: 793, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.683, sourceWidth: 31, targetWidth: 29, y0: 514.5, y1: 428.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.123, sourceWidth: 5, targetWidth: 6, y0: 532.5, y1: 677, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.026, sourceWidth: 4, targetWidth: 3, y0: 491, y1: 444.5, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LABEL, right: GREEN_LINK } },
      { source: 'operating_expenses', target: 'rnd', value: 1.728, sourceWidth: 78, targetWidth: 79, y0: 766, y1: 869.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.886, sourceWidth: 40, targetWidth: 40, y0: 825, y1: 1045, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.316, sourceWidth: 14, targetWidth: 14, y0: 852, y1: 1234, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'AMD · 2025 财年第一季度',
        meta: {
          title: 'AMD 2025 财年第一季度利润表',
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
        },
        annotationsSvg: annotationsZh,
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +57%', '营业利润率 25%', '同比 +2 个百分点'] },
          client: { label: '客户端', notes: ['同比 +68%', '客户端和游戏', '营业利润率 17%', '同比 +7 个百分点'] },
          gaming: { label: '游戏', notes: ['同比 (30%)'] },
          embedded: { label: '嵌入式', notes: ['同比 (3%)', '营业利润率 40%', '同比 (1 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +36%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +10 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 +7 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研究与开发', notes: ['占收入 23%', '同比 (5 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 12%', '同比 +1 个百分点'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 4%', '同比 (3 个百分点)'] },
        },
      },
    },
  });
})();
