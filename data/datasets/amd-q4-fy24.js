/* AMD Q4 FY24 income statement ($B), reconstructed from
 * input/processed/amd-q4-fy24.png as a fixed d3-sankey layout. */
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
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${svgIcon('amdDataCenterCluster', 58, 334, 188, 306, '0 0 197 325')}
      ${svgIcon('amdRyzenWordmark', 45, 716, 215, 129, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 63, 966, 170, 139, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 55, 1190, 205, 69, '0 0 226 76')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q4-fy24',
    name: 'AMD · Q4 FY24',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q4-fy24.png', width: 2667, height: 1500 },
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
      scale: 41.5,
      nodes: {
        data_center: { x: 565, y: 437, width: 67, height: 160 },
        client: { x: 565, y: 753, width: 67, height: 95 },
        gaming: { x: 565, y: 1022, width: 67, height: 21 },
        embedded: { x: 565, y: 1211, width: 67, height: 38 },
        revenue: { x: 1004, y: 662, width: 66, height: 320 },
        gross_profit: { x: 1440, y: 541, width: 67, height: 161 },
        cost_of_revenue: { x: 1442, y: 959, width: 67, height: 157 },
        operating_profit: { x: 1881, y: 436, width: 66, height: 35 },
        operating_expenses: { x: 1884, y: 652, width: 65, height: 125 },
        other: { x: 2220, y: 390, width: 68, height: 4 },
        net_profit: { x: 2319, y: 316, width: 67, height: 18 },
        tax: { x: 2319, y: 549, width: 67, height: 16 },
        rnd: { x: 2319, y: 710, width: 67, height: 70 },
        sga: { x: 2319, y: 934, width: 67, height: 32 },
        amortization: { x: 2319, y: 1143, width: 67, height: 12 },
        restructuring: { x: 2319, y: 1319, width: 67, height: 5 },
      },
      labels: {
        data_center: {
          blocks: [
            { x: 599, top: 346, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+69% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 535, top: 462, anchor: 'end', lineGap: 9, lines: [
              { text: 'Data Center', size: 40, weight: 800 },
              { text: '30% operating margin', size: 30, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 30, weight: 400, color: NOTE },
            ] },
          ],
        },
        client: {
          blocks: [
            { x: 599, top: 660, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+58% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 535, top: 759, anchor: 'end', lineGap: 8, lines: [
              { text: 'Client', size: 40, weight: 800 },
              { text: '19% operating margin', size: 30, weight: 400, color: NOTE },
              { text: '+16pp Y/Y', size: 30, weight: 400, color: NOTE },
            ] },
          ],
        },
        gaming: {
          blocks: [
            { x: 599, top: 929, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '(59%) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 535, top: 1014, anchor: 'end', lineGap: 8, lines: [
              { text: 'Gaming', size: 40, weight: 800 },
              { text: '9% operating margin', size: 30, weight: 400, color: NOTE },
              { text: '(7pp) Y/Y', size: 30, weight: 400, color: NOTE },
            ] },
          ],
        },
        embedded: {
          blocks: [
            { x: 599, top: 1117, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '(13%) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 535, top: 1208, anchor: 'end', lineGap: 8, lines: [
              { text: 'Embedded', size: 40, weight: 800 },
              { text: '39% operating margin', size: 30, weight: 400, color: NOTE },
              { text: '(4pp) Y/Y', size: 30, weight: 400, color: NOTE },
            ] },
          ],
        },
        revenue: { blocks: [{ x: 1037, top: 515, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Revenue', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '+24% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1474, top: 359, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '51% margin', size: 28, weight: 400, color: NOTE },
          { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1476, top: 1134, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 36, weight: 800 },
          { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1914, top: 254, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '11% margin', size: 28, weight: 400, color: NOTE },
          { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1916, top: 800, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 38, weight: 800 },
          { text: 'expenses', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
        ] }] },
        other: { blocks: [{ x: 2254, top: 410, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2404, top: 273, anchor: 'start', lineGap: 9, lines: [
          { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '6% margin', size: 28, weight: 400, color: NOTE },
          { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2498, top: 532, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: 2408, top: 694, anchor: 'start', lineGap: 8, lines: [
          { text: 'Research &', size: 31, weight: 800 },
          { text: 'Development', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '22% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        sga: { blocks: [{ x: 2408, top: 903, anchor: 'start', lineGap: 8, lines: [
          { text: 'Sales, General', size: 31, weight: 800 },
          { text: '& Admin', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '10% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        amortization: { blocks: [{ x: 2408, top: 1101, anchor: 'start', lineGap: 8, lines: [
          { text: 'Amortization', size: 31, weight: 800 },
          { text: 'of intangibles', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '4% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        restructuring: { blocks: [{ x: 2408, top: 1306, anchor: 'start', lineGap: 8, lines: [
          { text: 'Restructuring', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
      },
    },

    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 3.859, notes: ['+69% Y/Y', '30% operating margin', '+1pp Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 2.313, notes: ['+58% Y/Y', '19% operating margin', '+16pp Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 0.563, notes: ['(59%) Y/Y', '9% operating margin', '(7pp) Y/Y'], color: MAGENTA, labelColor: MAGENTA_LABEL, linkTint: MAGENTA_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 0.923, notes: ['(13%) Y/Y', '39% operating margin', '(4pp) Y/Y'], color: TEAL, labelColor: TEAL_LABEL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 7.658, notes: ['+24% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.882, notes: ['51% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.776 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.871, notes: ['11% margin', '+6pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.022 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.03, valueText: '$30M', color: GREEN, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.482, notes: ['6% margin', '(5pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.419 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'Development'], value: 1.712, notes: ['22% of revenue', '(2pp) Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.792, notes: ['10% of revenue', '(0pp) Y/Y'] },
      { id: 'amortization', col: 5, order: 4, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.332, notes: ['4% of revenue', '(2pp) Y/Y'] },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 0.186 },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 3.859, sourceWidth: 160, targetWidth: 160, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 2.313, sourceWidth: 95, targetWidth: 96, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 0.563, sourceWidth: 21, targetWidth: 23, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 0.923, sourceWidth: 38, targetWidth: 41, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 3.882, sourceWidth: 162, targetWidth: 161, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.776, sourceWidth: 158, targetWidth: 157, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.871, sourceWidth: 36, targetWidth: 35, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.011, sourceWidth: 125, targetWidth: 125, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.452, sourceWidth: 19, targetWidth: 17, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.419, sourceWidth: 16, targetWidth: 16, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.03, sourceWidth: 4, targetWidth: 1, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LABEL, right: GREEN_LINK } },
      { source: 'operating_expenses', target: 'rnd', value: 1.712, sourceWidth: 70, targetWidth: 70, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.792, sourceWidth: 33, targetWidth: 32, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.332, sourceWidth: 13, targetWidth: 12, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.186, sourceWidth: 9, targetWidth: 5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'AMD · 2024 财年第四季度',
        meta: { title: 'AMD 2024 财年第四季度利润表', period: '2024 财年第四季度', periodNote: '截至 2024 年 12 月' },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +69%', '营业利润率 30%', '同比 +1 个百分点'] },
          client: { label: '客户端', notes: ['同比 +58%', '营业利润率 19%', '同比 +16 个百分点'] },
          gaming: { label: '游戏', notes: ['同比 (59%)', '营业利润率 9%', '同比 (7 个百分点)'] },
          embedded: { label: '嵌入式', notes: ['同比 (13%)', '营业利润率 39%', '同比 (4 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +24%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (5 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 22%', '同比 (2 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 10%', '同比 (0 个百分点)'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 4%', '同比 (2 个百分点)'] },
          restructuring: { label: '重组费用' },
        },
      },
    },
  });
})();
