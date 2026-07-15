/* ====================================================================
 * Best Buy — Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/best-buy-q3-fy26.png as a fixed,
 * high-fidelity d3-sankey layout. Financial SSOT: best-buy.js.
 * ==================================================================== */
(function () {
  const BLUE = '#0d4fc1';
  const BLUE_LINK = '#81a5dc';
  const GREEN = '#27a728';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#9bce9b';
  const RED = '#d90000';
  const RED_LABEL = '#9d1400';
  const RED_LINK = '#df8284';
  const NOTE = '#6d6d6d';
  const TITLE = '#15527a';
  const BACKGROUND = '#f2f2f2';

  const bestBuyLogo = `
    <rect x="0" y="0" width="355" height="325" fill="#0b4cc1"/>
    <text x="177.5" y="122" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="76" font-weight="900" letter-spacing="-4" fill="#ffffff">BEST</text>
    <text x="165" y="208" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="76" font-weight="900" letter-spacing="-4" fill="#ffffff">BUY</text>
    <path d="M279 165h50v43h-50l-19-21.5z" fill="#fff11e"/>
    <circle cx="267" cy="186.5" r="4" fill="#0b4cc1"/>
  `;

  const zhLabels = {
    computing_mobile_phones: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 371, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 370, top: 499, anchor: 'end', nameSize: 38, lineGap: 9 },
    ] },
    consumer_electronics: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 650, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 370, top: 740, anchor: 'end', nameSize: 38, lineGap: 9 },
    ] },
    appliances: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 840, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 370, top: 933, anchor: 'end', nameSize: 37 },
    ] },
    entertainment: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 981, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 370, top: 1064, anchor: 'end', nameSize: 37 },
    ] },
    services: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 1102, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 370, top: 1185, anchor: 'end', nameSize: 37 },
    ] },
    other: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 1230, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 370, top: 1298, anchor: 'end', nameSize: 37 },
    ] },
    domestic: { blocks: [{ parts: ['name', 'value', 'notes'], x: 820, top: 498, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 }] },
    international: { blocks: [{ parts: ['name', 'value', 'notes'], x: 820, top: 1220, anchor: 'middle', nameSize: 39, valueSize: 38, noteSize: 28, lineGap: 8 }] },
    revenue: { blocks: [{ parts: ['name', 'value', 'notes'], x: 1193, top: 587, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 }] },
    gross_profit: { blocks: [{ parts: ['name', 'value', 'notes'], x: 1567, top: 454, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 }] },
    cost_of_sales: { blocks: [{ parts: ['name', 'value'], x: 1567, top: 1217, anchor: 'middle', nameSize: 35, valueSize: 35, lineGap: 8 }] },
    operating_profit: { blocks: [{ parts: ['name', 'value', 'notes'], x: 1941, top: 364, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 }] },
    operating_expenses: { blocks: [{ parts: ['name', 'value'], x: 1941, top: 829, anchor: 'middle', nameSize: 35, valueSize: 35, lineGap: 8 }] },
    net_profit: { blocks: [{ parts: ['name', 'value', 'notes'], x: 2460, top: 413, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 }] },
    tax: { blocks: [{ parts: ['name', 'value'], x: 2460, top: 617, anchor: 'middle', nameSize: 31, valueSize: 31, lineGap: 8 }] },
    sales_general_admin: { blocks: [{ parts: ['name', 'value'], x: 2460, top: 826, anchor: 'middle', nameSize: 31, valueSize: 31, lineGap: 8 }] },
    restructuring: { blocks: [{ parts: ['name', 'value'], x: 2460, top: 1078, anchor: 'middle', nameSize: 31, valueSize: 31, lineGap: 8 }] },
  };

  const zhLayoutLabels = {
    ...zhLabels,
    computing_mobile_phones: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 371, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 370, top: 513, anchor: 'end', nameSize: 38, lineGap: 9 },
    ] },
    sales_general_admin: { blocks: [{ parts: ['name', 'value'], x: 2460, top: 826, anchor: 'middle', nameSize: 31, valueSize: 31, lineGap: 8 }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'best-buy-q3-fy26',
    name: 'Best Buy · Q3 FY26',
    company: 'Best Buy',
    meta: {
      company: 'Best Buy',
      title: 'Best Buy Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/best-buy-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2260,
      periodX: 2350,
      periodY: 258,
      periodNoteY: 298,
      logoWidth: 355,
      logoHeight: 325,
      logoY: 242,
      logoViewBox: '0 0 355 325',
      logoSvg: bestBuyLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 39.8,
      nodes: {
        computing_mobile_phones: { x: 410, y: 459, width: 72, height: 175.1 },
        consumer_electronics: { x: 410, y: 736, width: 72, height: 91.5 },
        appliances: { x: 410, y: 930, width: 72, height: 39.8 },
        entertainment: { x: 410, y: 1071, width: 72, height: 19.9 },
        services: { x: 410, y: 1191, width: 72, height: 23.9 },
        other: { x: 410, y: 1316, width: 72, height: 4 },
        domestic: { x: 784, y: 638, width: 72, height: 354.2 },
        international: { x: 784, y: 1168, width: 72, height: 31.8 },
    revenue: { x: 1157, y: 728, width: 72, height: 387 },
        gross_profit: { x: 1531, y: 639, width: 72, height: 87.6 },
        cost_of_sales: { x: 1531, y: 901, width: 72, height: 294.5 },
        operating_profit: { x: 1905, y: 545, width: 72, height: 8 },
        operating_expenses: { x: 1905, y: 724, width: 72, height: 83.6 },
        net_profit: { x: 2280, y: 470, width: 72, height: 4 },
        tax: { x: 2280, y: 646, width: 72, height: 4 },
        sales_general_admin: { x: 2280, y: 820, width: 72, height: 75.6 },
        restructuring: { x: 2280, y: 1083, width: 72, height: 8 },
      },
      labels: zhLabels,
    },
    nodes: [
      { id: 'computing_mobile_phones', col: 0, order: 0, type: 'source', labelSide: 'left', label: ['Computing and', 'Mobile Phones'], value: 4.4, notes: ['+4% Y/Y'] },
      { id: 'consumer_electronics', col: 0, order: 1, type: 'source', labelSide: 'left', label: ['Consumer', 'Electronics'], value: 2.3, notes: ['(7%) Y/Y'] },
      { id: 'appliances', col: 0, order: 2, type: 'source', labelSide: 'left', label: 'Appliances', value: 1.0, valueText: '$1.0B', notes: ['(8%) Y/Y'] },
      { id: 'entertainment', col: 0, order: 3, type: 'source', labelSide: 'left', label: 'Entertainment', value: 0.5, notes: ['+20% Y/Y'] },
      { id: 'services', col: 0, order: 4, type: 'source', labelSide: 'left', label: 'Services', value: 0.6, notes: ['+0% Y/Y'] },
      { id: 'other', col: 0, order: 5, type: 'source', labelSide: 'left', label: 'Other', value: 0.1, notes: ['+% Y/Y'] },
      { id: 'domestic', col: 1, order: 0, type: 'source', labelSide: 'above', label: 'Domestic', value: 8.9, notes: ['+2% Y/Y'] },
      { id: 'international', col: 1, order: 1, type: 'source', labelSide: 'below', label: 'International', value: 0.8, notes: ['+6% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', labelSide: 'above', label: 'Revenue', value: 9.7, notes: ['+2% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', labelSide: 'above', label: 'Gross profit', value: 2.2, notes: ['23% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', labelSide: 'below', label: 'Cost of sales', value: 7.4 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', labelSide: 'above', label: 'Operating profit', value: 0.2, notes: ['2% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', labelSide: 'below', label: ['Operating', 'expenses'], value: 2.1 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', labelSide: 'right', label: 'Net profit', value: 0.1, notes: ['1% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', labelSide: 'right', label: 'Tax', value: 0.1 },
      { id: 'sales_general_admin', col: 5, order: 2, type: 'cost', labelSide: 'right', label: ['Sales General', '& admin'], value: 1.9 },
      { id: 'restructuring', col: 5, order: 3, type: 'cost', labelSide: 'right', label: 'Restructuring', value: 0.2 },
    ],
    links: [
      { source: 'computing_mobile_phones', target: 'domestic', value: 4.4, sourceWidth: 175.1, targetWidth: 175.1, targetOrder: 0 },
      { source: 'consumer_electronics', target: 'domestic', value: 2.3, sourceWidth: 91.5, targetWidth: 91.5, targetOrder: 1 },
      { source: 'appliances', target: 'domestic', value: 1.0, sourceWidth: 39.8, targetWidth: 39.8, targetOrder: 2 },
      { source: 'entertainment', target: 'domestic', value: 0.5, sourceWidth: 19.9, targetWidth: 19.9, targetOrder: 3 },
      { source: 'services', target: 'domestic', value: 0.6, sourceWidth: 23.9, targetWidth: 23.9, targetOrder: 4 },
      { source: 'other', target: 'domestic', value: 0.1, sourceWidth: 4, targetWidth: 4, targetOrder: 5 },
      { source: 'domestic', target: 'revenue', value: 8.9, sourceWidth: 354.2, targetWidth: 354.2, y1: 905.1, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 0.8, sourceWidth: 31.8, targetWidth: 32.8, y1: 1098.6, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 2.2, sourceWidth: 88, targetWidth: 87.6, y0: 772, y1: 682.8, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 7.4, sourceWidth: 299, targetWidth: 294.5, y0: 965.5, y1: 1048.25, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.2, sourceWidth: 4, targetWidth: 8, y0: 641, y1: 549, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.1, sourceWidth: 83.6, targetWidth: 83.6, y0: 684.8, y1: 765.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.1, sourceWidth: 4, targetWidth: 4, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 4, targetWidth: 4, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_general_admin', value: 1.9, sourceWidth: 75.6, targetWidth: 75.6, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.2, sourceWidth: 8, targetWidth: 8, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '百思买 · 2026 财年第三季度',
        meta: {
          title: '百思买 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 10 月',
          titleTextLength: 1740,
        },
        nodes: {
          computing_mobile_phones: { label: ['计算与', '手机'], notes: ['同比 +4%'] },
          consumer_electronics: { label: ['消费', '电子'], notes: ['同比 (7%)'] },
          appliances: { label: '家用电器', notes: ['同比 (8%)'] },
          entertainment: { label: '娱乐', notes: ['同比 +20%'] },
          services: { label: '服务', notes: ['同比 +0%'] },
          other: { label: '其他', notes: ['同比 +%'] },
          domestic: { label: '国内', notes: ['同比 +2%'] },
          international: { label: '国际', notes: ['同比 +6%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 23%', '同比 (0 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 (2 个百分点)'] },
          operating_expenses: { label: ['运营费用'] },
          net_profit: { label: '净利润', notes: ['利润率 1%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          sales_general_admin: { label: ['销售、一般', '及行政费用'] },
          restructuring: { label: '重组费用' },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
