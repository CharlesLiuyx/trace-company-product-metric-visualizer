/* ====================================================================
 * Paycom - Q3 FY25 income statement ($M)
 * Reconstructed from input/processed/paycom-q3-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2435;

  const paycomLogo = `
    <defs>
      <linearGradient id="paycom-q3-fy25-logo-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#b5d96a"/>
        <stop offset="0.42" stop-color="#35ad4b"/>
        <stop offset="1" stop-color="#008340"/>
      </linearGradient>
    </defs>
    <g>
      <rect x="0" y="10" width="140" height="140" rx="10" fill="url(#paycom-q3-fy25-logo-gradient)"/>
      <path d="M3 146 L139 10 L139 45 L36 150 Z" fill="#008d42" opacity="0.16"/>
      <path d="M42 50 Q42 38 54 38 H96 Q108 38 108 50 V88 Q108 100 96 100 H72 Q61 100 61 111 V132 H42 Z" fill="#ffffff"/>
      <path d="M74 100 H112 V125 Q112 138 99 138 H74 Z" fill="#008843"/>
      <text x="178" y="114" font-family="Arial Rounded MT Bold,Arial Black,Arial,sans-serif"
        font-size="98" font-weight="900" fill="#000000"
        textLength="430" lengthAdjust="spacingAndGlyphs">paycom</text>
      <text x="618" y="65" font-family="Arial,Helvetica,sans-serif"
        font-size="22" font-weight="700" fill="#000000">®</text>
    </g>`;

  const block = (x, top, anchor, lines, lineGap) => ({
    x,
    top,
    anchor,
    ...(lineGap ? { lineGap } : {}),
    lines,
  });
  const line = (text, size, weight, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });

  const labelsEn = {
    recurring: { blocks: [
      block(408, 499, 'middle', [line('$value', 40, 400, BLACK), line('+11% Y/Y', 29, 400, NOTE)], 10),
      block(270, 727, 'end', [line('Recurring', 40, 800, BLACK)]),
    ] },
    implementation_other: { blocks: [
      block(408, 1020, 'middle', [line('$value', 40, 400, BLACK), line('(11%) Y/Y', 29, 400, NOTE)], 8),
      block(174, 1085, 'middle', [line('Implementation', 38, 800, BLACK), line('and other', 40, 800, BLACK)], 8),
    ] },
    revenue: { blocks: [
      block(875, 575, 'middle', [line('Revenue', 40, 800, BLACK), line('$value', 40, 400, BLACK), line('+9% Y/Y', 29, 400, NOTE)], 10),
    ] },
    gross_profit: { blocks: [
      block(1342, 412, 'middle', [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('83% margin', 29, 400, NOTE), line('+2pp Y/Y', 29, 400, NOTE)], 10),
    ] },
    cost_of_revenue: { blocks: [
      block(1342, 1157, 'middle', [line('Cost of', 35, 800, RED_LABEL), line('revenue', 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 8),
    ] },
    operating_profit: { blocks: [
      block(1811, 321, 'middle', [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('23% margin', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)], 10),
    ] },
    operating_expenses: { blocks: [
      block(1811, 993, 'middle', [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)], 8),
    ] },
    other: { blocks: [
      block(2105, 535, 'start', [line('Other', 32, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 8),
    ] },
    net_profit: { blocks: [
      block(2340, 369, 'start', [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('22% margin', 29, 400, NOTE), line('+6pp Y/Y', 29, 400, NOTE)], 10),
    ] },
    tax: { blocks: [
      block(2430, 629, 'middle', [line('Tax', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8),
    ] },
    sm: { blocks: [
      block(RIGHT_LABEL_X, 770, 'middle', [line('S&M', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('25% of revenue', 29, 400, NOTE), line('+2pp Y/Y', 29, 400, NOTE)], 8),
    ] },
    rnd: { blocks: [
      block(RIGHT_LABEL_X, 950, 'middle', [line('R&D', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('15% of revenue', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)], 8),
    ] },
    ga: { blocks: [
      block(RIGHT_LABEL_X, 1123, 'middle', [line('G&A', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('15% of revenue', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)], 8),
    ] },
    depreciation: { blocks: [
      block(2338, 1291, 'start', [line('Depreciation', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8),
    ] },
  };

  const labelsZh = {
    recurring: { blocks: [
      block(408, 499, 'middle', [line('$value', 40, 400, BLACK), line('同比 +11%', 29, 400, NOTE)], 10),
      block(270, 727, 'end', [line('经常性收入', 40, 800, BLACK)]),
    ] },
    implementation_other: { blocks: [
      block(408, 1020, 'middle', [line('$value', 40, 400, BLACK), line('同比 (11%)', 29, 400, NOTE)], 8),
      block(174, 1085, 'middle', [line('实施及', 38, 800, BLACK), line('其他', 40, 800, BLACK)], 8),
    ] },
    revenue: { blocks: [
      block(875, 575, 'middle', [line('收入', 40, 800, BLACK), line('$value', 40, 400, BLACK), line('同比 +9%', 29, 400, NOTE)], 10),
    ] },
    gross_profit: { blocks: [
      block(1342, 412, 'middle', [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 83%', 29, 400, NOTE), line('同比 +2 个百分点', 29, 400, NOTE)], 10),
    ] },
    cost_of_revenue: { blocks: [
      block(1342, 1157, 'middle', [line('收入', 35, 800, RED_LABEL), line('成本', 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 8),
    ] },
    operating_profit: { blocks: [
      block(1811, 321, 'middle', [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 23%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)], 10),
    ] },
    operating_expenses: { blocks: [
      block(1811, 993, 'middle', [line('营业', 38, 800, RED_LABEL), line('费用', 38, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)], 8),
    ] },
    other: { blocks: [
      block(2105, 535, 'start', [line('其他', 32, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 8),
    ] },
    net_profit: { blocks: [
      block(2340, 369, 'start', [line('净利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 22%', 29, 400, NOTE), line('同比 +6 个百分点', 29, 400, NOTE)], 10),
    ] },
    tax: { blocks: [
      block(2430, 629, 'middle', [line('税费', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8),
    ] },
    sm: { blocks: [
      block(RIGHT_LABEL_X, 770, 'middle', [line('销售与市场', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 25%', 29, 400, NOTE), line('同比 +2 个百分点', 29, 400, NOTE)], 8),
    ] },
    rnd: { blocks: [
      block(RIGHT_LABEL_X, 950, 'middle', [line('研发', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 15%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)], 8),
    ] },
    ga: { blocks: [
      block(RIGHT_LABEL_X, 1123, 'middle', [line('一般及行政', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 15%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)], 8),
    ] },
    depreciation: { blocks: [
      block(2338, 1291, 'start', [line('折旧摊销', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8),
    ] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'paycom-q3-fy25',
    name: 'Paycom · Q3 FY25',
    company: 'Paycom',
    meta: {
      company: 'Paycom',
      title: 'Paycom Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/paycom-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 200,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2204,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      hidePeriodStamp: true,
      logoWidth: 710,
      logoHeight: 165,
      logoY: 270,
      logoViewBox: '0 0 710 165',
      logoSvg: paycomLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 0.66,
      nodes: {
        recurring: { x: 372, y: 596, width: 71, height: 311 },
        implementation_other: { x: 372, y: 1121, width: 71, height: 15 },
        revenue: { x: 839, y: 727, width: 70, height: 327 },
        gross_profit: { x: 1306, y: 603, width: 71, height: 270 },
        cost_of_revenue: { x: 1306, y: 1084, width: 71, height: 55 },
        operating_profit: { x: 1774, y: 511, width: 70, height: 73 },
        operating_expenses: { x: 1774, y: 782, width: 70, height: 195 },
        other: { x: 2114, y: 496, width: 70, height: 25 },
        net_profit: { x: 2240, y: 400, width: 71, height: 71 },
        tax: { x: 2240, y: 655, width: 71, height: 27 },
        sm: { x: 2240, y: 763, width: 71, height: 82 },
        rnd: { x: 2240, y: 969, width: 71, height: 46 },
        ga: { x: 2240, y: 1133, width: 71, height: 48 },
        depreciation: { x: 2240, y: 1306, width: 71, height: 13 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'recurring', col: 0, order: 0, type: 'source', label: 'Recurring', value: 466.0, notes: ['+11% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'implementation_other', col: 0, order: 1, type: 'source', label: ['Implementation', 'and other'], value: 27.0, notes: ['(11%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 493.0, notes: ['+9% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 408.0, notes: ['83% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 85.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 113.0, notes: ['23% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 295.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 40.0, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 111.0, notes: ['22% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 42.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 126.0, notes: ['25% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 74.0, notes: ['15% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 72.0, notes: ['15% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation', col: 5, order: 5, type: 'cost', label: 'Depreciation', value: 24.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'recurring', target: 'revenue', value: 466.0, sourceWidth: 311, targetWidth: 312, sourceOrder: 0, targetOrder: 0 },
      { source: 'implementation_other', target: 'revenue', value: 27.0, width: 15, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 408.0, sourceWidth: 271, targetWidth: 270, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 85.0, width: 55, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 113.0, sourceWidth: 72, targetWidth: 73, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 295.0, sourceWidth: 198, targetWidth: 195, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 71.0, sourceWidth: 46, targetWidth: 46, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 42.0, width: 27, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'other', target: 'net_profit', value: 40.0,
        width: 25, sourceOrder: 0, targetOrder: 1,
        curve: { c1x: 2195, c1y: 508.5, c2x: 2215, c2y: 458.5 },
      },
      { source: 'operating_expenses', target: 'sm', value: 126.0, sourceWidth: 83, targetWidth: 82, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 74.0, sourceWidth: 49, targetWidth: 46, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 72.0, sourceWidth: 47, targetWidth: 48, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation', value: 24.0, sourceWidth: 16, targetWidth: 13, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Paycom · 2025 财年第三季度',
        meta: {
          title: 'Paycom 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 1780,
        },
        nodes: {
          recurring: { label: '经常性收入', notes: ['同比 +11%'] },
          implementation_other: { label: ['实施及', '其他'], notes: ['同比 (11%)'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 83%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 23%', '同比 (0 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 22%', '同比 +6 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 25%', '同比 +2 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 15%', '同比 +1 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          depreciation: { label: '折旧摊销' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
