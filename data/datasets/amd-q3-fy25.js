/* ====================================================================
 * AMD - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/amd-q3-fy25.png as a fixed
 * d3-sankey layout with reusable SVG AMD annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#777777';
  const BLUE = '#4a8397';
  const BLUE_LINK = '#a6c0c9';
  const ORANGE = '#e26301';
  const ORANGE_LABEL = '#ed6a00';
  const ORANGE_LINK = '#efba83';
  const MAGENTA = '#b2002a';
  const MAGENTA_LABEL = '#bd0034';
  const MAGENTA_LINK = '#d78299';
  const TEAL = '#0b5366';
  const TEAL_LABEL = '#075d6d';
  const TEAL_LINK = '#9ab9c2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bce99';
  const RED = '#cc0000';
  const RED_LABEL = '#971100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${svgIcon('amdDataCenterCluster', 58, 334, 188, 306, '0 0 197 325')}
      ${svgIcon('amdRyzenWordmark', 37, 748, 230, 138, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 63, 1002, 170, 139, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 55, 1192, 205, 69, '0 0 226 76')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q3-fy25',
    name: 'AMD · Q3 FY25',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2035,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 430,
      logoHeight: 126,
      logoY: 315,
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
      interfaceAudit: { mode: 'error' },
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
      scale: 35.25,
      nodes: {
        data_center: { x: 565, y: 414, width: 67, height: 151 },
        client: { x: 565, y: 760, width: 67, height: 95 },
        gaming: { x: 565, y: 1049, width: 67, height: 44 },
        embedded: { x: 565, y: 1272, width: 67, height: 28 },
        revenue: { x: 1006, y: 683, width: 66, height: 326 },
        gross_profit: { x: 1446, y: 571, width: 68, height: 166 },
        cost_of_revenue: { x: 1446, y: 963, width: 68, height: 156 },
        operating_profit: { x: 1888, y: 483, width: 66, height: 42 },
        operating_expenses: { x: 1888, y: 713, width: 66, height: 121 },
        other: { x: 2218, y: 483, width: 66, height: 2 },
        net_profit: { x: 2328, y: 402, width: 67, height: 42 },
        tax: { x: 2328, y: 643, width: 67, height: 4 },
        rnd: { x: 2328, y: 773, width: 67, height: 73 },
        sga: { x: 2328, y: 1011, width: 67, height: 36 },
        amortization: { x: 2328, y: 1255, width: 67, height: 9 },
      },
      labels: {
        data_center: {
          blocks: [
            { x: 599, top: 326, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+22% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 535, top: 448, anchor: 'end', lineGap: 9, lines: [
              { text: 'Data Center', size: 40, weight: 800 },
              { text: '25% operating margin', size: 28, weight: 400, color: NOTE },
              { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        client: {
          blocks: [
            { x: 599, top: 671, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+46% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 535, top: 793, anchor: 'end', lineGap: 8, lines: [{ text: 'Client', size: 40, weight: 800 }] },
            { x: 534, top: 878, anchor: 'end', lineGap: 8, lines: [
              { text: 'Client and Gaming', size: 28, weight: 400, color: NOTE },
              { text: '21% operating margin', size: 28, weight: 400, color: NOTE },
              { text: '+9pp Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        gaming: {
          blocks: [
            { x: 599, top: 956, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+181% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 535, top: 1048, anchor: 'end', lineGap: 8, lines: [{ text: 'Gaming', size: 40, weight: 800 }] },
          ],
        },
        embedded: {
          blocks: [
            { x: 599, top: 1178, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '(8%) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 535, top: 1214, anchor: 'end', lineGap: 8, lines: [
              { text: 'Embedded', size: 40, weight: 800 },
              { text: '33% operating margin', size: 28, weight: 400, color: NOTE },
              { text: '(7pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        revenue: { blocks: [{ x: 1039, top: 540, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Revenue', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '+36% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1480, top: 389, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '52% margin', size: 28, weight: 400, color: NOTE },
          { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1480, top: 1143, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 36, weight: 800 },
          { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1921, top: 302, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '14% margin', size: 28, weight: 400, color: NOTE },
          { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1921, top: 859, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 38, weight: 800 },
          { text: 'expenses', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
        ] }] },
        other: { blocks: [{ x: 2251, top: 506, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2419, top: 369, anchor: 'start', lineGap: 9, lines: [
          { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '13% margin', size: 28, weight: 400, color: NOTE },
          { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2501, top: 621, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: 2400, top: 758, anchor: 'start', lineGap: 8, lines: [
          { text: 'Research &', size: 31, weight: 800 },
          { text: 'Development', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '23% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        sga: { blocks: [{ x: 2400, top: 967, anchor: 'start', lineGap: 8, lines: [
          { text: 'Sales, General', size: 31, weight: 800 },
          { text: '& Admin', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '12% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        amortization: { blocks: [{ x: 2400, top: 1203, anchor: 'start', lineGap: 8, lines: [
          { text: 'Amortization', size: 31, weight: 800 },
          { text: 'of intangibles', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
      },
    },

    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 4.341, notes: ['+22% Y/Y', '25% operating margin', '(5pp) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 2.782, notes: ['+46% Y/Y', 'Client and Gaming', '21% operating margin', '+9pp Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 1.266, notes: ['+181% Y/Y'], color: MAGENTA, labelColor: MAGENTA_LABEL, linkTint: MAGENTA_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 0.857, notes: ['(8%) Y/Y', '33% operating margin', '(7pp) Y/Y'], color: TEAL, labelColor: TEAL_LABEL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 9.246, notes: ['+36% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.78, notes: ['52% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.466 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.27, notes: ['14% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.51 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.126, color: GREEN, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.243, notes: ['13% margin', '+2pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.153 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'Development'], value: 2.139, notes: ['23% of revenue', '(1pp) Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: ['Sales, General', '& Admin'], value: 1.069, notes: ['12% of revenue', '+1pp Y/Y'] },
      { id: 'amortization', col: 5, order: 4, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.302, notes: ['3% of revenue', '(2pp) Y/Y'] },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 4.341, sourceWidth: 151, targetWidth: 153, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 2.782, sourceWidth: 95, targetWidth: 98, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 1.266, sourceWidth: 44, targetWidth: 45, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 0.857, sourceWidth: 28, targetWidth: 30, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 4.78, sourceWidth: 166, targetWidth: 166, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.466, sourceWidth: 160, targetWidth: 156, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.27, sourceWidth: 43, targetWidth: 42, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.51, sourceWidth: 123, targetWidth: 121, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.117, sourceWidth: 37, targetWidth: 37, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.153, sourceWidth: 5, targetWidth: 4, y0: 522.5, y1: 645, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.126, sourceWidth: 2, targetWidth: 5, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LABEL, right: GREEN_LINK } },
      { source: 'operating_expenses', target: 'rnd', value: 2.139, sourceWidth: 75, targetWidth: 73, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.069, sourceWidth: 37, targetWidth: 36, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.302, sourceWidth: 9, targetWidth: 9, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'AMD · 2025 财年第三季度',
        meta: { title: 'AMD 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月' },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +22%', '营业利润率 25%', '同比 (5 个百分点)'] },
          client: { label: '客户端', notes: ['同比 +46%', '客户端和游戏', '营业利润率 21%', '同比 +9 个百分点'] },
          gaming: { label: '游戏', notes: ['同比 +181%'] },
          embedded: { label: '嵌入式', notes: ['同比 (8%)', '营业利润率 33%', '同比 (7 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +36%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' }, other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 13%', '同比 +2 个百分点'] }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 23%', '同比 (1 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 12%', '同比 +1 个百分点'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 3%', '同比 (2 个百分点)'] },
        },
      },
    },
  });
})();
