/* ====================================================================
 * AMD - Q1 FY23 income statement ($B)
 * Reconstructed from input/processed/amd-q1-fy23.png as a fixed
 * d3-sankey layout with reusable SVG AMD annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#4a8397';
  const BLUE_LINK = '#a6c0c9';
  const ORANGE = '#e26301';
  const ORANGE_LINK = '#eab285';
  const MAGENTA = '#b2002a';
  const MAGENTA_LINK = '#d48598';
  const TEAL = '#0b5366';
  const TEAL_LINK = '#8aaab3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox, clearanceId) => `
    <g data-annotation-clearance="${clearanceId}">
      <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}">
        ${BUSINESS_ICONS[name] || ''}
      </svg>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${svgIcon('amdEpycWordmark', 45, 350, 180, 152, '0 0 172 145', 'amd-epyc-wordmark')}
      ${svgIcon('amdRyzenWordmark', 23, 648, 215, 129, '0 0 232 139', 'amd-ryzen-wordmark')}
      ${svgIcon('amdRadeonBadge', 52, 917, 171, 146, '0 0 195 160', 'amd-radeon-badge')}
      ${svgIcon('amdXilinxWordmark', 35, 1235, 205, 69, '0 0 226 76', 'amd-xilinx-wordmark')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q1-fy23',
    name: 'AMD · Q1 FY23',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q1 FY23 Income Statement',
      period: 'Q1 FY23',
      periodNote: 'Ending Apr. 1, 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q1-fy23.png', width: 2667, height: 1500 },
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
      scale: 66.5,
      nodes: {
        data_center: { x: 531, y: 403, width: 66, height: 86 },
        client: { x: 531, y: 693, width: 66, height: 48 },
        gaming: { x: 531, y: 939, width: 66, height: 116 },
        embedded: { x: 531, y: 1245, width: 66, height: 103 },
        revenue: { x: 968, y: 728, width: 66, height: 359 },
        gross_profit: { x: 1404, y: 637, width: 67, height: 157 },
        cost_of_revenue: { x: 1407, y: 958, width: 66, height: 200 },
        operating_loss: { x: 1629, y: 1017, width: 66, height: 10 },
        operating_expenses: { x: 1837, y: 727, width: 65, height: 169 },
        rnd: { x: 2278, y: 575, width: 66, height: 93 },
        sga: { x: 2278, y: 847, width: 66, height: 37 },
        amortization: { x: 2278, y: 1120, width: 66, height: 33 },
      },
      labels: {
        data_center: {
          blocks: [
            { x: 564, top: 309, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+0% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 520, top: 402, anchor: 'end', lineGap: 9, semanticRole: 'top-aligned-side-label', lines: [
              { text: 'Data Center', size: 40, weight: 800 },
              { text: '11% operating margin', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        client: {
          blocks: [
            { x: 564, top: 600, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '(65%) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 520, top: 696, anchor: 'end', lineGap: 9, semanticRole: 'top-aligned-side-label', lines: [
              { text: 'Client', size: 40, weight: 800 },
              { text: '(23%) operating margin', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        gaming: {
          blocks: [
            { x: 555, top: 840, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '(6%) Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 511, top: 954, anchor: 'end', lineGap: 9, semanticRole: 'name', lines: [
              { text: 'Gaming', size: 40, weight: 800 },
              { text: '18% operating margin', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        embedded: {
          blocks: [
            { x: 555, top: 1183, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
            ] },
            { x: 511, top: 1258, anchor: 'end', lineGap: 9, semanticRole: 'name', lines: [
              { text: 'Embedded', size: 40, weight: 800 },
              { text: '51% operating margin', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        revenue: { blocks: [{ x: 1001, top: 588, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Revenue', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '(9%) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1437, top: 455, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '44% margin', size: 28, weight: 400, color: NOTE },
          { text: '(4pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1440, top: 1185, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 36, weight: 800 },
          { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
        ] }] },
        operating_expenses: { blocks: [{ x: 1870, top: 570, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 38, weight: 800 },
          { text: 'expenses', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
        ] }] },
        operating_loss: { blocks: [{ x: 1662, top: 1050, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating', size: 38, weight: 800 },
          { text: 'loss', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
          { text: '(3%) margin', size: 28, weight: 400, color: NOTE },
          { text: '(19pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        rnd: { blocks: [{ x: 2370, top: 579, anchor: 'start', lineGap: 8, lines: [
          { text: 'Research &', size: 31, weight: 800 },
          { text: 'Development', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '26% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+8pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        sga: { blocks: [{ x: 2364, top: 840, anchor: 'start', lineGap: 8, lines: [
          { text: 'Sales, General', size: 31, weight: 800 },
          { text: '& Admin', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '11% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        amortization: { blocks: [{ x: 2370, top: 1100, anchor: 'start', lineGap: 8, lines: [
          { text: 'Amortization', size: 31, weight: 800 },
          { text: 'of intangibles', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '10% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
      },
    },

    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 1.295, notes: ['+0% Y/Y', '11% operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 0.739, notes: ['(65%) Y/Y', '(23%) operating margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 1.757, notes: ['(6%) Y/Y', '18% operating margin'], color: MAGENTA, labelColor: MAGENTA, linkTint: MAGENTA_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 1.562, notes: ['51% operating margin'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.353, notes: ['(9%) Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.359, notes: ['44% margin', '(4pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.994 },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.2, notes: ['(3%) margin', '(19pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 2.514 },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: ['Research &', 'Development'], value: 1.411, notes: ['26% of revenue', '+8pp Y/Y'] },
      { id: 'sga', col: 5, order: 1, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.585, notes: ['11% of revenue', '+1pp Y/Y'] },
      { id: 'amortization', col: 5, order: 2, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.518, notes: ['10% of revenue', '+5pp Y/Y'] },
    ],

    links: [
      { source: 'data_center', target: 'revenue', value: 1.295, sourceWidth: 86, targetWidth: 87, y0: 446, y1: 771.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 0.739, sourceWidth: 48, targetWidth: 50, y0: 717, y1: 840, sourceOrder: 0, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 1.757, sourceWidth: 116, targetWidth: 117, y0: 997, y1: 923.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 1.562, sourceWidth: 103, targetWidth: 105, y0: 1296.5, y1: 1034.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.359, sourceWidth: 158, targetWidth: 157, y0: 807, y1: 715.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.994, sourceWidth: 201, targetWidth: 200, y0: 986.5, y1: 1058, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.359, sourceWidth: 157, targetWidth: 159, y0: 715.5, y1: 806.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 0.2,
        sourceWidth: 10, targetWidth: 10, y0: 1022, y1: 891,
        sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK,
        curve: { x0: 1695, x1: 1837, c1x: 1760, c1y: 1022, c2x: 1775, c2y: 891 },
      },
      { source: 'operating_expenses', target: 'rnd', value: 1.411, sourceWidth: 95, targetWidth: 93, y0: 774.5, y1: 621.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.585, sourceWidth: 39, targetWidth: 37, y0: 841.5, y1: 865.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.518, sourceWidth: 35, targetWidth: 33, y0: 878.5, y1: 1136.5, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'AMD · 2023 财年第一季度',
        meta: {
          title: 'AMD 2023 财年第一季度利润表',
          titleSize: 118,
          titleTextLength: 1840,
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 4 月 1 日',
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +0%', '营业利润率 11%'] },
          client: { label: '客户端', notes: ['同比 (65%)', '营业利润率 (23%)'] },
          gaming: { label: '游戏', notes: ['同比 (6%)', '营业利润率 18%'] },
          embedded: { label: '嵌入式', notes: ['营业利润率 51%'] },
          revenue: { label: '收入', notes: ['同比 (9%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 44%', '同比 (4 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (3%)', '同比 (19 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          rnd: { label: '研发', notes: ['占收入 26%', '同比 +8 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 11%', '同比 +1 个百分点'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 10%', '同比 +5 个百分点'] },
        },
      },
    },
  });
})();
