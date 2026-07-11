/* ====================================================================
 * DoorDash - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/doordash-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/vector annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const DOORDASH_RED = '#ff3008';
  const BLACK = '#000000';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY_LINK = '#858585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2360;

  const doorDashMark = `
    <path d="M19 17 H196 C244 17 282 49 282 84 C282 119 246 144 203 144 H119 C107 144 97 139 89 130 L54 89 C49 83 53 74 64 74 H199 C214 74 224 65 224 53 C224 41 214 33 199 33 H64 C51 33 42 28 35 21 Z" fill="${DOORDASH_RED}"/>
    <path d="M103 74 H199 C214 74 224 65 224 53 C224 41 214 33 199 33 H94 C105 44 110 58 103 74 Z" fill="#f2f2f2"/>
  `;

  const card = (x, width, title, value, note) => `
    <g>
      <rect x="${x}" y="1182" width="${width}" height="148" rx="24" fill="${BLACK}"/>
      <text x="${x + width / 2}" y="1235" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1277" text-anchor="middle" font-size="28" font-weight="400" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1310" text-anchor="middle" font-size="21" font-weight="400" fill="#ffffff">${note}</text>
    </g>`;

  // The source places the central DoorDash mark left of the Revenue hub. It
  // is intentionally an annotation (rather than meta.logoSvg) so the fixed
  // source placement is represented without duplicating the logo.
  const brandAnnotations = `
    <g data-typography-role="brand">
      <g transform="translate(679 302)">${doorDashMark}</g>
      <text x="86" y="558" font-family="Montserrat,Arial,sans-serif" font-size="41" font-weight="800" textLength="250" lengthAdjust="spacingAndGlyphs" fill="${DOORDASH_RED}">DOORDASH</text>
      <g transform="translate(-60 0)">
        <text x="151" y="968" text-anchor="middle" font-family="Arial Rounded MT Bold,Arial,sans-serif" font-size="43" font-weight="800" font-style="italic" fill="#4cb4dc" stroke="#ffffff" stroke-width="6" paint-order="stroke">Wolt</text>
        <g transform="translate(76 977)">
          <path d="M0 38 L42 32 L52 74 L10 80 Z" fill="#45bfc1"/>
          <path d="M24 27 L31 6 L43 31 Z" fill="#45bfc1"/>
          <circle cx="27" cy="58" r="3.5" fill="#ffffff"/>
          <circle cx="43" cy="55" r="3.5" fill="#ffffff"/>
        </g>
        <text x="143" y="1027" font-family="Montserrat,Arial,sans-serif" font-size="43" font-weight="800" fill="#45bfc1">deliveroo</text>
      </g>
    </g>`;

  const makeAnnotations = ({ orders, govNote, ordersNote, govDefinition }) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${brandAnnotations}
      ${card(106, 379, 'Marketplace GOV', '$31.6B', govNote)}
      ${card(497, 157, orders, '933M', ordersNote)}
      <text x="117" y="1364" font-size="31" font-weight="400" fill="${NOTE}">${govDefinition}</text>
    </g>`;

  const en = {
    usGrowth: '+17% Y/Y', usLines: ['United', 'States'], usShare: '77% of revenue',
    internationalGrowth: '+148% Y/Y', international: 'International', internationalShare: '23% of revenue',
    revenue: 'Revenue', revenueGrowth: '+33% Y/Y', gross: 'Gross profit', grossMargin: '51% margin', grossGrowth: '+0pp Y/Y',
    cost: ['Cost of', 'revenue'], operating: 'Operating profit', operatingMargin: '4% margin', operatingGrowth: '(1pp) Y/Y',
    operatingExpenses: ['Operating', 'expenses'], other: 'Other', net: 'Net profit', netMargin: '5% margin', netGrowth: '(2pp) Y/Y', tax: 'Tax',
    sm: 'S&M ($746M)', smNotes: ['18% of revenue', '(1pp) Y/Y'],
    ga: 'G&A ($432M)', gaNotes: ['11% of revenue', '(0pp) Y/Y'],
    rnd: 'R&D ($398M)', rndNotes: ['10% of revenue', '(0pp) Y/Y'],
    da: 'D&A ($269M)', daNotes: ['7% of revenue', '+2pp Y/Y'],
    restructuring: 'Restructuring', restructuringValue: '($48M)',
  };

  const zh = {
    usGrowth: '同比 +17%', usLines: ['美国', '市场'], usShare: '占收入 77%',
    internationalGrowth: '同比 +148%', international: '国际', internationalShare: '占收入 23%',
    revenue: '收入', revenueGrowth: '同比 +33%', gross: '毛利润', grossMargin: '利润率 51%', grossGrowth: '同比 +0 个百分点',
    cost: ['收入', '成本'], operating: '营业利润', operatingMargin: '利润率 4%', operatingGrowth: '同比 (1 个百分点)',
    operatingExpenses: ['营业', '费用'], other: '其他', net: '净利润', netMargin: '利润率 5%', netGrowth: '同比 (2 个百分点)', tax: '税费',
    sm: '销售与市场 ($746M)', smNotes: ['占收入 18%', '同比 (1 个百分点)'],
    ga: '管理费用 ($432M)', gaNotes: ['占收入 11%', '同比 (0 个百分点)'],
    rnd: '研发 ($398M)', rndNotes: ['占收入 10%', '同比 (0 个百分点)'],
    da: '折旧与摊销 ($269M)', daNotes: ['占收入 7%', '同比 +2 个百分点'],
    restructuring: '重组费用', restructuringValue: '($48M)',
  };

  const lines = (texts, size, weight, color) => texts.map((text) => ({ text, size, weight, ...(color ? { color } : {}) }));
  const makeLabels = (copy) => ({
    united_states: {
      blocks: [
        { x: 407, top: 434, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: copy.usGrowth, size: 29, weight: 400, color: NOTE }] },
        { x: 220, top: 636, anchor: 'middle', lineGap: 13, lines: [...lines(copy.usLines, 40, 800), { text: copy.usShare, size: 29, weight: 400, color: NOTE }] },
      ],
    },
    international: {
      blocks: [
        { x: 407, top: 971, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: copy.internationalGrowth, size: 29, weight: 400, color: NOTE }] },
        { x: 185, top: 1072, anchor: 'middle', lineGap: 13, lines: [{ text: copy.international, size: 40, weight: 800 }, { text: copy.internationalShare, size: 29, weight: 400, color: NOTE }] },
      ],
    },
    revenue: { blocks: [{ x: 790, top: 505, anchor: 'start', lineGap: 10, lines: [{ text: copy.revenue, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: copy.revenueGrowth, size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1341, top: 338, anchor: 'middle', lineGap: 10, lines: [{ text: copy.gross, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: copy.grossMargin, size: 29, weight: 400, color: NOTE }, { text: copy.grossGrowth, size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1341, top: 1162, anchor: 'middle', lineGap: 10, lines: [...lines(copy.cost, 34, 800), { text: '$value', size: 34, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1809, top: 254, anchor: 'middle', lineGap: 10, lines: [{ text: copy.operating, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: copy.operatingMargin, size: 29, weight: 400, color: NOTE }, { text: copy.operatingGrowth, size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1809, top: 864, anchor: 'middle', lineGap: 10, lines: [...lines(copy.operatingExpenses, 40, 800), { text: '$value', size: 39, weight: 400 }] }] },
    other_income: { blocks: [{ x: 2164, top: 421, anchor: 'middle', lineGap: 9, lines: [{ text: copy.other, size: 30, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2439, top: 290, anchor: 'middle', lineGap: 10, lines: [{ text: copy.net, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: copy.netMargin, size: 29, weight: 400, color: NOTE }, { text: copy.netGrowth, size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: 2468, top: 529, anchor: 'middle', lineGap: 9, lines: [{ text: copy.tax, size: 30, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 704, anchor: 'start', lineGap: 10, lines: [{ text: copy.sm, size: 30, weight: 800 }, ...lines(copy.smNotes, 29, 400, NOTE)] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 863, anchor: 'start', lineGap: 10, lines: [{ text: copy.ga, size: 30, weight: 800 }, ...lines(copy.gaNotes, 29, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 1026, anchor: 'start', lineGap: 10, lines: [{ text: copy.rnd, size: 30, weight: 800 }, ...lines(copy.rndNotes, 29, 400, NOTE)] }] },
    da: { blocks: [{ x: RIGHT_LABEL_X, top: 1164, anchor: 'start', lineGap: 10, lines: [{ text: copy.da, size: 30, weight: 800 }, ...lines(copy.daNotes, 29, 400, NOTE)] }] },
    restructuring: { blocks: [{ x: 2439, top: 1286, anchor: 'middle', lineGap: 9, lines: [{ text: copy.restructuring, size: 30, weight: 800 }, { text: copy.restructuringValue, size: 31, weight: 400 }] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'doordash-q1-fy26',
    name: 'DoorDash · Q1 FY26',
    company: 'DoorDash',
    meta: {
      company: 'DoorDash',
      title: 'DoorDash Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/doordash-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 130,
      titleWeight: 800,
      titleTextLength: 2338,
      hidePeriodStamp: true,
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
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: makeAnnotations({ orders: 'Orders', govNote: '+37% Y/Y', ordersNote: '+27% Y/Y', govDefinition: 'GOV = Gross Order Volume' }),
    layout: {
      scale: 0.0912,
      nodes: {
        united_states: { x: 371, y: 523, width: 72, height: 283 },
        international: { x: 371, y: 1061, width: 72, height: 85 },
        revenue: { x: 839, y: 648, width: 71, height: 368 },
        gross_profit: { x: 1305, y: 518, width: 73, height: 187 },
        cost_of_revenue: { x: 1306, y: 955, width: 71, height: 182 },
        operating_profit: { x: 1773, y: 436, width: 72, height: 14 },
        operating_expenses: { x: 1773, y: 665, width: 71, height: 173 },
        other_income: { x: 2128, y: 398, width: 72, height: 2 },
        net_profit: { x: 2240, y: 337, width: 72, height: 15 },
        tax: { x: 2240, y: 557, width: 72, height: 1 },
        sm: { x: 2240, y: 702, width: 72, height: 69 },
        ga: { x: 2240, y: 869, width: 72, height: 38 },
        rnd: { x: 2240, y: 1020, width: 72, height: 36 },
        da: { x: 2240, y: 1159, width: 72, height: 24 },
        restructuring: { x: 2240, y: 1313, width: 72, height: 4 },
      },
      labels: makeLabels(en),
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 3104, valueText: '$3,104M', notes: ['+17% Y/Y', '77% of revenue'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 932, valueText: '$932M', notes: ['+148% Y/Y', '23% of revenue'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 4036, valueText: '$4,036M', notes: ['+33% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2044, valueText: '$2,044M', notes: ['51% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1992, valueText: '($1,992M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 151, valueText: '$151M', notes: ['4% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1893, valueText: '($1,893M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 40, valueText: '$40M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 183, valueText: '$183M', notes: ['5% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 8, valueText: '($8M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 746, notes: ['18% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 432, notes: ['11% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 398, notes: ['10% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 5, type: 'cost', label: 'D&A', value: 269, notes: ['7% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 6, type: 'cost', label: 'Restructuring', value: 48, valueText: '($48M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 3104, width: 283, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 932, width: 85, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 2044, width: 187, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1992, width: 181, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 151, width: 14, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1893, width: 173, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 151, sourceWidth: 13, targetWidth: 11, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 8, width: 1, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 40, sourceWidth: 2, targetWidth: 4, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 746, sourceWidth: 69, targetWidth: 69, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 432, sourceWidth: 39, targetWidth: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 398, sourceWidth: 36, targetWidth: 36, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 269, sourceWidth: 25, targetWidth: 24, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 48, sourceWidth: 4, targetWidth: 4, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['DOORDASH', 'Wolt', 'deliveroo', 'Marketplace GOV', 'GOV'],
      zh: {
        name: 'DoorDash · 2026 财年第一季度',
        meta: { title: 'DoorDash 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 1910 },
        annotationsSvg: makeAnnotations({ orders: '订单', govNote: '同比 +37%', ordersNote: '同比 +27%', govDefinition: 'GOV = 总订单金额' }),
        nodes: {
          united_states: { label: '美国', notes: ['同比 +17%', '占收入 77%'] },
          international: { label: '国际', notes: ['同比 +148%', '占收入 23%'] },
          revenue: { label: '收入', notes: ['同比 +33%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 18%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 11%', '同比 (0 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 10%', '同比 (0 个百分点)'] },
          da: { label: '折旧与摊销', notes: ['占收入 7%', '同比 +2 个百分点'] },
          restructuring: { label: '重组费用' },
        },
        layout: { labels: makeLabels(zh) },
      },
    },
  });
})();
