/* AMD Q3 FY23 income statement ($B), measured from the native 2667x1500 source. */
(function () {
  const TITLE = '#15527a';
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
  const ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 8) => ({
    x,
    top,
    anchor,
    lineGap,
    lines,
  });
  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${ICONS[name] || ''}
    </svg>`;

  const epycIcon = `
    <g transform="translate(48 392)">
      <defs>
        <linearGradient id="amd-q3-fy23-epyc-ring" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#80c8dc"/>
          <stop offset="1" stop-color="#006278"/>
        </linearGradient>
      </defs>
      <circle cx="84" cy="70" r="57" fill="none" stroke="url(#amd-q3-fy23-epyc-ring)" stroke-width="17"/>
      <path d="M43 27L57 42M115 27L102 42M42 113L58 99M126 111L111 98"
        stroke="#f2f2f2" stroke-width="11" stroke-linecap="square"/>
      <path d="M18 70H0M151 70H169" stroke="#050505" stroke-width="8"/>
      <text x="84" y="84" text-anchor="middle" font-family="Arial Black,Arial,Helvetica,sans-serif"
        font-size="49" font-weight="900" fill="#050505" textLength="135"
        lengthAdjust="spacingAndGlyphs">EPYC</text>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${epycIcon}
      ${svgIcon('amdRyzenWordmark', 30, 641, 205, 123, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 54, 912, 166, 139, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 38, 1184, 205, 69, '0 0 226 76')}
    </g>`;

  const labels = {
    data_center: {
      blocks: [
        block(568, 316, 'middle', [line('$value', 39, 400), line('(1%) Y/Y', 28, 400, NOTE)], 9),
        block(513, 419, 'end', [line('Data Center', 40, 800), line('19% operating margin', 28, 400, NOTE)], 9),
      ],
    },
    client: {
      blocks: [
        block(562, 590, 'middle', [line('$value', 39, 400), line('+42% Y/Y', 28, 400, NOTE)], 9),
        block(498, 683, 'end', [line('Client', 40, 800), line('10% operating margin', 28, 400, NOTE)], 9),
      ],
    },
    gaming: {
      blocks: [
        block(562, 844, 'middle', [line('$value', 39, 400), line('(8%) Y/Y', 28, 400, NOTE)], 9),
        block(520, 930, 'end', [line('Gaming', 40, 800), line('14% operating margin', 28, 400, NOTE)], 9),
      ],
    },
    embedded: {
      blocks: [
        block(575, 1115, 'middle', [line('$value', 39, 400), line('(5%) Y/Y', 28, 400, NOTE)], 9),
        block(520, 1200, 'end', [line('Embedded', 40, 800), line('49% operating margin', 28, 400, NOTE)], 9),
      ],
    },
    revenue: {
      blocks: [block(1008, 542, 'middle', [
        line('Revenue', 40, 800),
        line('$value', 39),
        line('+4% Y/Y', 28, 400, NOTE),
      ], 9)],
    },
    gross_profit: {
      blocks: [block(1437, 406, 'middle', [
        line('Gross profit', 40, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line('47% margin', 28, 400, NOTE),
        line('+5pp Y/Y', 28, 400, NOTE),
      ], 9)],
    },
    cost_of_revenue: {
      blocks: [block(1442, 1127, 'middle', [
        line('Cost of', 36, 800),
        line('revenue', 36, 800),
        line('$value', 35),
      ], 8)],
    },
    operating_profit: {
      blocks: [block(1877, 340, 'middle', [
        line('Operating profit', 40, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line('4% margin', 28, 400, NOTE),
        line('+5pp Y/Y', 28, 400, NOTE),
      ], 9)],
    },
    operating_expenses: {
      blocks: [block(1868, 899, 'middle', [
        line('Operating', 38, 800),
        line('expenses', 38, 800),
        line('$value', 37),
      ], 8)],
    },
    other: {
      blocks: [block(2118, 541, 'middle', [
        line('Other', 31, 800, GREEN_LABEL),
        line('$value', 30, 400, GREEN_LABEL),
      ], 7)],
    },
    tax_benefit: {
      blocks: [block(2183, 672, 'middle', [
        line('Tax benefit', 31, 800, GREEN_LABEL),
        line('$value', 30, 400, GREEN_LABEL),
      ], 7)],
    },
    net_profit: {
      blocks: [block(2376, 395, 'start', [
        line('Net profit', 40, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line('5% margin', 28, 400, NOTE),
        line('+4pp Y/Y', 28, 400, NOTE),
      ], 9)],
    },
    rnd: {
      blocks: [block(2378, 763, 'start', [
        line('Research &', 31, 800),
        line('Development', 31, 800),
        line('$value', 30),
        line('26% of revenue', 28, 400, NOTE),
        line('+3pp Y/Y', 28, 400, NOTE),
      ], 8)],
    },
    sga: {
      blocks: [block(2372, 981, 'start', [
        line('Sales, General', 31, 800),
        line('& Admin', 31, 800),
        line('$value', 30),
        line('10% of revenue', 28, 400, NOTE),
        line('(0pp) Y/Y', 28, 400, NOTE),
      ], 8)],
    },
    amortization: {
      blocks: [block(2376, 1193, 'start', [
        line('Amortization', 31, 800),
        line('of intangibles', 31, 800),
        line('$value', 30),
        line('8% of revenue', 28, 400, NOTE),
        line('(3pp) Y/Y', 28, 400, NOTE),
      ], 8)],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q3-fy23',
    name: 'AMD · Q3 FY23',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q3 FY23 Income Statement',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q3-fy23.png', width: 2667, height: 1500 },
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
      logoY: 305,
      logoViewBox: '0 0 468 138',
      logoSvg: ICONS.amdCompanyWordmark || '',
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
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 56.8,
      nodes: {
        data_center: { x: 542, y: 410, width: 67, height: 89 },
        client: { x: 542, y: 682, width: 67, height: 81 },
        gaming: { x: 542, y: 932, width: 67, height: 85 },
        embedded: { x: 542, y: 1202, width: 67, height: 70 },
        revenue: { x: 976, y: 691, width: 65, height: 330 },
        gross_profit: { x: 1404, y: 591, width: 66, height: 157 },
        cost_of_revenue: { x: 1409, y: 930, width: 66, height: 174 },
        operating_profit: { x: 1845, y: 513, width: 65, height: 11 },
        operating_expenses: { x: 1836, y: 733, width: 65, height: 143 },
        other: { x: 2081, y: 522, width: 66, height: 1 },
        tax_benefit: { x: 2146, y: 648, width: 66, height: 2 },
        net_profit: { x: 2275, y: 405, width: 67, height: 16 },
        rnd: { x: 2275, y: 799, width: 67, height: 84 },
        sga: { x: 2275, y: 1049, width: 67, height: 32 },
        amortization: { x: 2275, y: 1275, width: 67, height: 24 },
      },
      labels,
    },
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 1.598, notes: ['(1%) Y/Y', '19% operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 1.453, notes: ['+42% Y/Y', '10% operating margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 1.506, notes: ['(8%) Y/Y', '14% operating margin'], color: MAGENTA, labelColor: MAGENTA, linkTint: MAGENTA_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 1.243, notes: ['(5%) Y/Y', '49% operating margin'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.8, notes: ['+4% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.747, notes: ['47% margin', '+5pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.053 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.224, notes: ['4% margin', '+5pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.533 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.036, valueText: '$36M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_benefit', col: 4, order: 1, type: 'profit', label: 'Tax benefit', value: 0.039, valueText: '$39M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.299, notes: ['5% margin', '+4pp Y/Y'] },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: ['Research &', 'Development'], value: 1.507, notes: ['26% of revenue', '+3pp Y/Y'] },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.576, notes: ['10% of revenue', '(0pp) Y/Y'] },
      { id: 'amortization', col: 5, order: 3, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.45, notes: ['8% of revenue', '(3pp) Y/Y'] },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 1.598, sourceWidth: 89, targetWidth: 89, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 1.453, sourceWidth: 81, targetWidth: 82, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 1.506, sourceWidth: 85, targetWidth: 85, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 1.243, sourceWidth: 70, targetWidth: 74, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.747, sourceWidth: 157, targetWidth: 157, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.053, sourceWidth: 173, targetWidth: 174, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.224, sourceWidth: 12, targetWidth: 11, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.533, sourceWidth: 145, targetWidth: 143, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.224, sourceWidth: 11, targetWidth: 16, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      {
        source: 'other', target: 'net_profit', value: 0.036,
        sourceWidth: 1, targetWidth: 2, y0: 522.5, y1: 418, sourceOrder: 0, targetOrder: 1,
        curve: { c1x: 2170, c1y: 522, c2x: 2215, c2y: 418 },
        linkTint: GREEN_LINK,
      },
      {
        source: 'tax_benefit', target: 'net_profit', value: 0.039,
        sourceWidth: 1, targetWidth: 2, y0: 649, y1: 420, sourceOrder: 0, targetOrder: 2,
        curve: { c1x: 2255, c1y: 649, c2x: 2265, c2y: 420 },
        linkTint: GREEN_LINK,
      },
      { source: 'operating_expenses', target: 'rnd', value: 1.507, sourceWidth: 84, targetWidth: 84, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.576, sourceWidth: 33, targetWidth: 32, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.45, sourceWidth: 26, targetWidth: 24, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'AMD · 2023 财年第三季度',
        meta: {
          title: 'AMD 2023 财年第三季度利润表',
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 (1%)', '营业利润率 19%'] },
          client: { label: '客户端', notes: ['同比 +42%', '营业利润率 10%'] },
          gaming: { label: '游戏', notes: ['同比 (8%)', '营业利润率 14%'] },
          embedded: { label: '嵌入式', notes: ['同比 (5%)', '营业利润率 49%'] },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 47%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 +5 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +4 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 26%', '同比 +3 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 10%', '同比 (0 个百分点)'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 8%', '同比 (3 个百分点)'] },
        },
      },
    },
  });
})();
