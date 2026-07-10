/* ====================================================================
 * Paycom - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/paycom-q4-fy25.png as a fixed
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
  const RIGHT_LABEL_X = 2408;

  const paycomLogo = `
    <defs>
      <linearGradient id="paycom-q4-logo-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#b5d96a"/>
        <stop offset="0.42" stop-color="#35ad4b"/>
        <stop offset="1" stop-color="#008340"/>
      </linearGradient>
    </defs>
    <g>
      <rect x="0" y="10" width="140" height="140" rx="10" fill="url(#paycom-q4-logo-gradient)"/>
      <path d="M3 146 L139 10 L139 45 L36 150 Z" fill="#008d42" opacity="0.16"/>
      <path d="M42 50 Q42 38 54 38 H96 Q108 38 108 50 V88 Q108 100 96 100 H72 Q61 100 61 111 V132 H42 Z" fill="#ffffff"/>
      <path d="M74 100 H112 V125 Q112 138 99 138 H74 Z" fill="#008843"/>
      <text x="178" y="114" font-family="Arial Rounded MT Bold,Arial Black,Arial,sans-serif"
        font-size="98" font-weight="900" fill="#000000" textLength="430" lengthAdjust="spacingAndGlyphs">paycom</text>
      <text x="618" y="65" font-family="Arial,Helvetica,sans-serif" font-size="22" font-weight="700" fill="#000000">®</text>
    </g>`;

  const otherAnnotation = (name) => `
    <g class="sankey-interactive-annotation" data-node="other" data-link-numerator="other" data-link-denominator="net_profit" data-link-anchor-x="2218" data-link-anchor-y="540" font-family="Montserrat,Arial,sans-serif">
      <line x1="2149" y1="540" x2="2218" y2="540" stroke="${GREEN}" stroke-width="2" stroke-linecap="butt"/>
      <rect x="2138" y="548" width="112" height="96" fill="#f2f2f2" fill-opacity="0"/>
      <text x="2147" y="585" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${name}</text>
      <text x="2147" y="625" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$2M</text>
    </g>`;
  const annotationsEn = otherAnnotation('Other');
  const annotationsZh = otherAnnotation('其他');

  const block = (x, top, anchor, lines, lineGap) => ({ x, top, anchor, ...(lineGap ? { lineGap } : {}), lines });
  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });

  const zhLayoutLabels = {
    recurring: { blocks: [
      block(435, 528, 'middle', [line('$value', 40, 400, BLACK), line('同比 +11%', 29, 400, NOTE)], 10),
      block(292, 757, 'end', [line('经常性收入', 40, 800, BLACK)]),
    ] },
    implementation_other: { blocks: [
      block(435, 1038, 'middle', [line('$value', 40, 400, BLACK), line('同比 (6%)', 29, 400, NOTE)], 8),
      block(292, 1098, 'end', [line('实施及', 40, 800, BLACK), line('其他', 40, 800, BLACK)], 8),
    ] },
    revenue: { blocks: [
      block(902, 584, 'middle', [line('收入', 40, 800, BLACK), line('$value', 40, 400, BLACK), line('同比 +10%', 29, 400, NOTE)], 10),
    ] },
    gross_profit: { blocks: [
      block(1370, 435, 'middle', [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 84%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)], 10),
    ] },
    cost_of_revenue: { blocks: [
      block(1370, 1180, 'middle', [line('收入', 35, 800, RED_LABEL), line('成本', 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 8),
    ] },
    operating_profit: { blocks: [
      block(1837, 334, 'middle', [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 29%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)], 10),
    ] },
    operating_expenses: { blocks: [
      block(1834, 1046, 'middle', [line('营业', 38, 800, RED_LABEL), line('费用', 38, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)], 8),
    ] },
    other: { blocks: [] },
    net_profit: { blocks: [
      block(2368, 411, 'start', [line('净利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 21%', 29, 400, NOTE), line('同比 (2 个百分点)', 29, 400, NOTE)], 10),
    ] },
    tax: { blocks: [block(2459, 683, 'middle', [line('税费', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8)] },
    sm: { blocks: [block(RIGHT_LABEL_X, 803, 'start', [line('销售与市场', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 24%', 29, 400, NOTE), line('同比 +2 个百分点', 29, 400, NOTE)], 8)] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 1000, 'start', [line('研发', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 13%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)], 8)] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1150, 'start', [line('一般及行政', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 13%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)], 8)] },
    depreciation: { blocks: [block(2405, 1324, 'start', [line('折旧摊销', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8)] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'paycom-q4-fy25',
    name: 'Paycom · Q4 FY25',
    company: 'Paycom',
    meta: {
      company: 'Paycom',
      title: 'Paycom Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/paycom-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 200,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2220,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
    annotationsSvg: annotationsEn,
    layout: {
      scale: 0.59,
      nodes: {
        recurring: { x: 400, y: 624, width: 71, height: 304 },
        implementation_other: { x: 400, y: 1136, width: 71, height: 14 },
        revenue: { x: 867, y: 736, width: 70, height: 320 },
        gross_profit: { x: 1334, y: 623, width: 71, height: 268 },
        cost_of_revenue: { x: 1334, y: 1098, width: 71, height: 50 },
        operating_profit: { x: 1802, y: 524, width: 70, height: 90 },
        operating_expenses: { x: 1799, y: 851, width: 70, height: 175 },
        other: { x: 2147, y: 539, width: 71, height: 4 },
        net_profit: { x: 2268, y: 419, width: 71, height: 66 },
        tax: { x: 2268, y: 704, width: 71, height: 24 },
        sm: { x: 2268, y: 811, width: 71, height: 75 },
        rnd: { x: 2268, y: 996, width: 71, height: 40 },
        ga: { x: 2268, y: 1145, width: 71, height: 40 },
        depreciation: { x: 2268, y: 1321, width: 71, height: 12 },
      },
      labels: {
        recurring: { blocks: [
          block(435, 528, 'middle', [line('$value', 40, 400), line('+11% Y/Y', 29, 400, NOTE)], 10),
          block(292, 757, 'end', [line('Recurring', 40, 800)]),
        ] },
        implementation_other: { blocks: [
          block(435, 1038, 'middle', [line('$value', 40, 400), line('(6%) Y/Y', 29, 400, NOTE)], 8),
          block(352, 1098, 'end', [line('Implementation', 36, 800)]),
          block(292, 1148, 'end', [line('and other', 38, 800)]),
        ] },
        revenue: { blocks: [
          block(902, 584, 'middle', [line('Revenue', 40, 800), line('$value', 40, 400), line('+10% Y/Y', 29, 400, NOTE)], 10),
        ] },
        gross_profit: { blocks: [
          block(1370, 435, 'middle', [line('Gross profit', 40, 800), line('$value', 40, 400), line('84% margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)], 10),
        ] },
        cost_of_revenue: { blocks: [
          block(1370, 1180, 'middle', [line('Cost of', 35, 800), line('revenue', 35, 800), line('$value', 33, 400)], 8),
        ] },
        operating_profit: { blocks: [
          block(1837, 334, 'middle', [line('Operating profit', 40, 800), line('$value', 40, 400), line('29% margin', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)], 10),
        ] },
        operating_expenses: { blocks: [
          block(1834, 1046, 'middle', [line('Operating', 38, 800), line('expenses', 38, 800), line('$value', 36, 400)], 8),
        ] },
        other: { blocks: [] },
        net_profit: { blocks: [
          block(2368, 411, 'start', [line('Net profit', 40, 800), line('$value', 40, 400), line('21% margin', 29, 400, NOTE), line('(2pp) Y/Y', 29, 400, NOTE)], 10),
        ] },
        tax: { blocks: [block(2459, 683, 'middle', [line('Tax', 32, 800), line('$value', 31, 400)], 8)] },
        sm: { blocks: [block(RIGHT_LABEL_X, 803, 'start', [line('S&M', 32, 800), line('$value', 31, 400), line('24% of revenue', 29, 400, NOTE), line('+2pp Y/Y', 29, 400, NOTE)], 8)] },
        rnd: { blocks: [block(RIGHT_LABEL_X, 1000, 'start', [line('R&D', 32, 800), line('$value', 31, 400), line('13% of revenue', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)], 8)] },
        ga: { blocks: [block(RIGHT_LABEL_X, 1150, 'start', [line('G&A', 32, 800), line('$value', 31, 400), line('13% of revenue', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)], 8)] },
        depreciation: { blocks: [block(2405, 1324, 'start', [line('Depreciation', 32, 800), line('$value', 31, 400)], 8)] },
      },
    },
    nodes: [
      { id: 'recurring', col: 0, order: 0, type: 'source', label: 'Recurring', value: 517.0, notes: ['+11% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'implementation_other', col: 0, order: 1, type: 'source', label: ['Implementation', 'and other'], value: 27.0, notes: ['(6%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 544.0, notes: ['+10% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 457.0, notes: ['84% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 88.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 157.0, notes: ['29% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 299.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 2.0, color: '#f2f2f2', labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 114.0, notes: ['21% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 45.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 130.0, notes: ['24% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 72.0, notes: ['13% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 71.0, notes: ['13% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation', col: 5, order: 5, type: 'cost', label: 'Depreciation', value: 26.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'recurring', target: 'revenue', value: 517.0, width: 304, sourceWidth: 304, targetWidth: 306, sourceOrder: 0, targetOrder: 0 },
      { source: 'implementation_other', target: 'revenue', value: 27.0, width: 14, sourceWidth: 14, targetWidth: 14, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 457.0, width: 268, sourceWidth: 270, targetWidth: 268, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 88.0, width: 50, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 157.0, width: 90, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 299.0, width: 175, sourceWidth: 178, targetWidth: 175, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 112.0, width: 64, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 45.0, width: 26, sourceWidth: 26, targetWidth: 24, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'other', target: 'net_profit', value: 2.0, width: 2,
        sourceWidth: 4, targetWidth: 2, y0: 541, y1: 484,
        sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        curve: { c1x: 2230, c1y: 541, c2x: 2248, c2y: 484 },
      },
      { source: 'operating_expenses', target: 'sm', value: 130.0, width: 76, sourceWidth: 77, targetWidth: 75, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 72.0, width: 41, sourceWidth: 42, targetWidth: 40, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 71.0, width: 41, sourceWidth: 41, targetWidth: 40, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation', value: 26.0, width: 15, sourceWidth: 15, targetWidth: 12, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Paycom · 2025 财年第四季度',
        meta: { title: 'Paycom 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 1780 },
        nodes: {
          recurring: { label: '经常性收入', notes: ['同比 +11%'] },
          implementation_other: { label: ['实施及', '其他'], notes: ['同比 (6%)'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 84%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 29%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 21%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 24%', '同比 +2 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 13%', '同比 (0 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 13%', '同比 (0 个百分点)'] },
          depreciation: { label: '折旧摊销' },
        },
        layout: { labels: zhLayoutLabels },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();
