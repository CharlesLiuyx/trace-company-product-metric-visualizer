/* ====================================================================
 * AMD - Q2 FY25 income statement ($B)
 * Reconstructed from input/processed/amd-q2-fy25.png as a fixed
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
    key: 'amd-q2-fy25',
    name: 'AMD · Q2 FY25',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q2 FY25 Income Statement',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q2-fy25.png', width: 2667, height: 1500 },
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
      scale: 47.25,
      nodes: {
        data_center: { x: 564, y: 386, width: 67, height: 151 },
        client: { x: 564, y: 724, width: 67, height: 117 },
        gaming: { x: 564, y: 1039, width: 67, height: 51 },
        embedded: { x: 564, y: 1298, width: 67, height: 36 },
        revenue: { x: 1006, y: 669, width: 66, height: 364 },
        gross_profit: { x: 1447, y: 514, width: 68, height: 143 },
        cost_of_revenue: { x: 1447, y: 932, width: 68, height: 219 },
        operating_loss: { x: 1681, y: 891, width: 68, height: 5 },
        operating_expenses: { x: 1890, y: 666, width: 66, height: 151 },
        rnd: { x: 2331, y: 439, width: 67, height: 89 },
        sga: { x: 2331, y: 764, width: 67, height: 45 },
        amortization: { x: 2331, y: 1081, width: 67, height: 13 },
      },
      labels: {
        data_center: {
          blocks: [
            { x: 590, top: 291, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 529, top: 408, anchor: 'end', lineGap: 9, lines: [
              { text: 'Data Center', size: 40, weight: 800 },
              { text: '(5%) operating margin', size: 28, weight: 400, color: NOTE },
              { text: '(31pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        client: {
          blocks: [
            { x: 589, top: 633, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+67% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 511, top: 762, anchor: 'end', lineGap: 8, lines: [{ text: 'Client', size: 40, weight: 800 }] },
            { x: 511, top: 850, anchor: 'end', lineGap: 8, lines: [
              { text: 'Client and Gaming', size: 28, weight: 400, color: NOTE },
              { text: '21% operating margin', size: 28, weight: 400, color: NOTE },
              { text: '+13pp Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        gaming: {
          blocks: [
            { x: 598, top: 948, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+73% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 528, top: 1040, anchor: 'end', lineGap: 8, lines: [{ text: 'Gaming', size: 40, weight: 800 }] },
          ],
        },
        embedded: {
          blocks: [
            { x: 588, top: 1207, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 528, top: 1247, anchor: 'end', lineGap: 8, lines: [
              { text: 'Embedded', size: 40, weight: 800 },
              { text: '33% operating margin', size: 28, weight: 400, color: NOTE },
              { text: '(7pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        revenue: { blocks: [{ x: 1039, top: 527, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Revenue', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '+32% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1481, top: 331, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '40% margin', size: 28, weight: 400, color: NOTE },
          { text: '(9pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1481, top: 1172, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 36, weight: 800 },
          { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
        ] }] },
        operating_loss: { blocks: [{ x: 1715, top: 917, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
          { text: 'loss', size: 40, weight: 800, color: RED_LABEL },
          { text: '$value', size: 39, weight: 400, color: RED_LABEL },
          { text: '(2%) margin', size: 28, weight: 400, color: NOTE },
          { text: '(6pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1923, top: 517, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 38, weight: 800 },
          { text: 'expenses', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: 2411, top: 430, anchor: 'start', lineGap: 8, lines: [
          { text: 'Research &', size: 31, weight: 800 },
          { text: 'Development', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '25% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        sga: { blocks: [{ x: 2406, top: 733, anchor: 'start', lineGap: 8, lines: [
          { text: 'Sales, General', size: 31, weight: 800 },
          { text: '& Admin', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '13% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        amortization: { blocks: [{ x: 2422, top: 1048, anchor: 'start', lineGap: 8, lines: [
          { text: 'Amortization', size: 31, weight: 800 },
          { text: 'of intangibles', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '4% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
      },
    },

    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 3.24, notes: ['+14% Y/Y', '(5%) operating margin', '(31pp) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 2.499, notes: ['+67% Y/Y', 'Client and Gaming', '21% operating margin', '+13pp Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 1.122, notes: ['+73% Y/Y'], color: MAGENTA, labelColor: MAGENTA_LABEL, linkTint: MAGENTA_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 0.824, notes: ['(4%) Y/Y', '33% operating margin', '(7pp) Y/Y'], color: TEAL, labelColor: TEAL_LABEL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 7.685, notes: ['+32% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.059, notes: ['40% margin', '(9pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.626 },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.134, notes: ['(2%) margin', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 3.193 },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: ['Research &', 'Development'], value: 1.894, notes: ['25% of revenue', '(2pp) Y/Y'] },
      { id: 'sga', col: 5, order: 1, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.991, notes: ['13% of revenue', '+2pp Y/Y'] },
      { id: 'amortization', col: 5, order: 2, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.308, notes: ['4% of revenue', '(2pp) Y/Y'] },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 3.24, sourceWidth: 151, targetWidth: 153, y0: 461.5, y1: 745.5, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 2.499, sourceWidth: 117, targetWidth: 118, y0: 782.5, y1: 881, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 1.122, sourceWidth: 51, targetWidth: 54, y0: 1064.5, y1: 967, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 0.824, sourceWidth: 36, targetWidth: 39, y0: 1316, y1: 1013.5, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 3.059, sourceWidth: 145, targetWidth: 143, y0: 741.5, y1: 585.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.626, sourceWidth: 219, targetWidth: 219, y0: 923.5, y1: 1041.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.059, sourceWidth: 143, targetWidth: 146, y0: 585.5, y1: 739, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.134, sourceWidth: 5, targetWidth: 5, y0: 893.5, y1: 814.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.894, sourceWidth: 90, targetWidth: 89, y0: 711, y1: 483.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.991, sourceWidth: 46, targetWidth: 45, y0: 779, y1: 786.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.308, sourceWidth: 15, targetWidth: 13, y0: 809.5, y1: 1087.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'AMD · 2025 财年第二季度',
        meta: { title: 'AMD 2025 财年第二季度利润表', period: '2025 财年第二季度', periodNote: '截至 2025 年 6 月' },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +14%', '营业利润率 (5%)', '同比 (31 个百分点)'] },
          client: { label: '客户端', notes: ['同比 +67%', '客户端和游戏', '营业利润率 21%', '同比 +13 个百分点'] },
          gaming: { label: '游戏', notes: ['同比 +73%'] },
          embedded: { label: '嵌入式', notes: ['同比 (4%)', '营业利润率 33%', '同比 (7 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +32%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 (9 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (2%)', '同比 (6 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          rnd: { label: '研发', notes: ['占收入 25%', '同比 (2 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 13%', '同比 +2 个百分点'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 4%', '同比 (2 个百分点)'] },
        },
      },
    },
  });
})();
