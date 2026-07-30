/* AMD Q2 FY23 income statement ($B), measured from the active reference. */
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

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });
  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${svgIcon('amdEpycWordmark', 35, 350, 180, 152, '0 0 172 145')}
      ${svgIcon('amdRyzenWordmark', 30, 621, 205, 123, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 54, 920, 170, 139, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 35, 1194, 205, 69, '0 0 226 76')}
    </g>`;

  const labels = {
    data_center: {
      blocks: [
        block(563, 288, [line('$value', 39), line('(11%) Y/Y', 28, { color: NOTE })], { lineGap: 10 }),
        block(509, 397, [
          line('Data Center', 40, { weight: 800 }),
          line('11% operating margin', 28, { color: NOTE }),
        ], { anchor: 'end', lineGap: 9 }),
      ],
    },
    client: {
      blocks: [
        block(563, 577, [line('$value', 39), line('(54%) Y/Y', 28, { color: NOTE })], { lineGap: 10 }),
        block(501, 666, [
          line('Client', 40, { weight: 800 }),
          line('(7%) operating margin', 28, { color: NOTE }),
        ], { anchor: 'end', lineGap: 9 }),
      ],
    },
    gaming: {
      blocks: [
        block(563, 840, [line('$value', 39), line('(4%) Y/Y', 28, { color: NOTE })], { lineGap: 10 }),
        block(518, 948, [
          line('Gaming', 40, { weight: 800 }),
          line('14% operating margin', 28, { color: NOTE }),
        ], { anchor: 'end', lineGap: 9 }),
      ],
    },
    embedded: {
      blocks: [
        block(563, 1128, [line('$value', 39), line('+16% Y/Y', 28, { color: NOTE })], { lineGap: 10 }),
        block(509, 1230, [
          line('Embedded', 40, { weight: 800 }),
          line('52% operating margin', 28, { color: NOTE }),
        ], { anchor: 'end', lineGap: 9 }),
      ],
    },
    revenue: {
      blocks: [block(1003, 540, [
        line('Revenue', 40, { weight: 800 }),
        line('$value', 39),
        line('(18%) Y/Y', 28, { color: NOTE }),
      ], { lineGap: 10 })],
    },
    gross_profit: {
      blocks: [block(1451, 389, [
        line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }),
        line('$value', 39, { color: GREEN_LABEL }),
        line('46% margin', 28, { color: NOTE }),
        line('(1pp) Y/Y', 28, { color: NOTE }),
      ], { lineGap: 9 })],
    },
    cost_of_revenue: {
      blocks: [block(1454, 1176, [
        line('Cost of', 36, { weight: 800 }),
        line('revenue', 36, { weight: 800 }),
        line('$value', 35),
      ], { lineGap: 8 })],
    },
    operating_loss: {
      blocks: [block(1690, 1080, [
        line('Operating', 38, { weight: 800 }),
        line('loss', 38, { weight: 800 }),
        line('$value', 37),
        line('(0%) margin', 28, { color: NOTE }),
        line('(8pp) Y/Y', 28, { color: NOTE }),
      ], { lineGap: 8 })],
    },
    operating_expenses: {
      blocks: [block(1883, 528, [
        line('Operating', 38, { weight: 800 }),
        line('expenses', 38, { weight: 800 }),
        line('$value', 37),
      ], { lineGap: 8 })],
    },
    rnd: {
      blocks: [block(2377, 587, [
        line('Research &', 31, { weight: 800 }),
        line('Development', 31, { weight: 800 }),
        line('$value', 30),
        line('27% of revenue', 28, { color: NOTE }),
        line('+7pp Y/Y', 28, { color: NOTE }),
      ], { anchor: 'start', lineGap: 8 })],
    },
    sga: {
      blocks: [block(2377, 845, [
        line('Sales, General', 31, { weight: 800 }),
        line('& Admin', 31, { weight: 800 }),
        line('$value', 30),
        line('10% of revenue', 28, { color: NOTE }),
        line('+1pp Y/Y', 28, { color: NOTE }),
      ], { anchor: 'start', lineGap: 8 })],
    },
    amortization: {
      blocks: [block(2377, 1069, [
        line('Amortization', 31, { weight: 800 }),
        line('of intangibles', 31, { weight: 800 }),
        line('$value', 30),
        line('9% of revenue', 28, { color: NOTE }),
        line('+9pp Y/Y', 28, { color: NOTE }),
      ], { anchor: 'start', lineGap: 8 })],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q2-fy23',
    name: 'AMD · Q2 FY23',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending Jul. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2035,
      hidePeriodStamp: true,
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
      scale: 1,
      nodes: {
        data_center: { x: 529, y: 386, width: 67, height: 91 },
        client: { x: 529, y: 667, width: 67, height: 68 },
        gaming: { x: 529, y: 931, width: 67, height: 110 },
        embedded: { x: 529, y: 1219, width: 67, height: 102 },
        revenue: { x: 970, y: 685, width: 67, height: 376 },
        gross_profit: { x: 1418, y: 572, width: 67, height: 170 },
        cost_of_revenue: { x: 1420, y: 950, width: 68, height: 204 },
        operating_loss: { x: 1656, y: 1057, width: 68, height: 2 },
        operating_expenses: { x: 1850, y: 681, width: 66, height: 172 },
        rnd: { x: 2293, y: 578, width: 67, height: 101 },
        sga: { x: 2293, y: 871, width: 67, height: 37 },
        amortization: { x: 2293, y: 1092, width: 67, height: 32 },
      },
      labels,
    },
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 1.321, notes: ['(11%) Y/Y', '11% operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 0.998, notes: ['(54%) Y/Y', '(7%) operating margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 1.581, notes: ['(4%) Y/Y', '14% operating margin'], color: MAGENTA, labelColor: MAGENTA, linkTint: MAGENTA_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 1.459, notes: ['+16% Y/Y', '52% operating margin'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.359, notes: ['(18%) Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.443, notes: ['46% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.916 },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.02, valueText: '($20M)', notes: ['(0%) margin', '(8pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 2.471 },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: ['Research &', 'Development'], value: 1.443, notes: ['27% of revenue', '+7pp Y/Y'] },
      { id: 'sga', col: 5, order: 1, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.547, notes: ['10% of revenue', '+1pp Y/Y'] },
      { id: 'amortization', col: 5, order: 2, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.481, notes: ['9% of revenue', '+9pp Y/Y'] },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 1.321, sourceWidth: 91, targetWidth: 92, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 0.998, sourceWidth: 68, targetWidth: 70, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 1.581, sourceWidth: 110, targetWidth: 111, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 1.459, sourceWidth: 102, targetWidth: 103, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.443, sourceWidth: 170, targetWidth: 170, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.916, sourceWidth: 206, targetWidth: 204, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.443, sourceWidth: 170, targetWidth: 170, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss',
        target: 'operating_expenses',
        value: 0.02,
        sourceWidth: 2,
        targetWidth: 2,
        y0: 1058,
        y1: 852,
        sourceOrder: 0,
        targetOrder: 1,
        linkTint: RED_LINK,
        curve: { x0: 1724, x1: 1850, c1x: 1790, c1y: 1058, c2x: 1800, c2y: 852 },
      },
      { source: 'operating_expenses', target: 'rnd', value: 1.443, sourceWidth: 101, targetWidth: 101, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.547, sourceWidth: 37, targetWidth: 37, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.481, sourceWidth: 34, targetWidth: 32, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'AMD · 2023 财年第二季度',
        meta: {
          title: 'AMD 2023 财年第二季度利润表',
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 7 月',
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 (11%)', '营业利润率 11%'] },
          client: { label: '客户端', notes: ['同比 (54%)', '营业利润率 (7%)'] },
          gaming: { label: '游戏', notes: ['同比 (4%)', '营业利润率 14%'] },
          embedded: { label: '嵌入式', notes: ['同比 +16%', '营业利润率 52%'] },
          revenue: { label: '收入', notes: ['同比 (18%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 46%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (0%)', '同比 (8 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          rnd: { label: '研发', notes: ['占收入 27%', '同比 +7 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 10%', '同比 +1 个百分点'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 9%', '同比 +9 个百分点'] },
        },
      },
    },
  });
})();
