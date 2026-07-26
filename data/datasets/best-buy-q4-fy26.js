/* ====================================================================
 * Best Buy — Q4 FY26 income statement ($B)
 * Reconstructed from input/processed/best-buy-q4-fy26.png as a fixed,
 * high-fidelity d3-sankey layout. Financial SSOT: best-buy.js.
 * ==================================================================== */
(function () {
  const BLUE = '#0046be';
  const BLUE_LINK = '#85a5db';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const BACKGROUND = '#f2f2f2';

  const bestBuyLogo = `
    <rect x="0" y="0" width="355" height="325" fill="#0046be"/>
    <text x="177.5" y="122" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="76" font-weight="900" letter-spacing="-4" fill="#ffffff">BEST</text>
    <text x="165" y="208" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="76" font-weight="900" letter-spacing="-4" fill="#ffffff">BUY</text>
    <path d="M279 165h50v43h-50l-19-21.5z" fill="#ffed31"/>
    <circle cx="267" cy="186.5" r="4" fill="#0046be"/>
  `;

  const gainsCallout = (zh) => `
    <g class="sankey-interactive-annotation" data-node="gains"
      data-link-numerator="gains" data-link-denominator="operating_profit"
      data-link-anchor-x="1851" data-link-anchor-y="611">
      <path d="M1797 634H1867 C1891 634 1880 587 1906 587" fill="none"
        stroke="${GREEN_LINK}" stroke-width="2" stroke-linecap="butt"/>
      <rect x="1778" y="646" width="108" height="88" fill="transparent" pointer-events="all"/>
      <text x="1832" y="680" text-anchor="middle" font-size="35" font-weight="800"
        fill="${GREEN_LABEL}">${zh ? '收益' : 'Gains'}</text>
      <text x="1832" y="721" text-anchor="middle" font-size="34" font-weight="400"
        fill="${GREEN_LABEL}">$28M</text>
    </g>
  `;

  const labels = {
    computing_mobile_phones: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 431, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 370, top: 556, anchor: 'end', nameSize: 38, lineGap: 9 },
    ] },
    consumer_electronics: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 705, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 327, top: 800, anchor: 'end', nameSize: 38, lineGap: 9 },
    ] },
    appliances: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 925, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 320, top: 1007, anchor: 'end', nameSize: 37 },
    ] },
    entertainment: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 1048, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 358, top: 1146, anchor: 'end', nameSize: 37 },
    ] },
    services: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 1183, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 306, top: 1276, anchor: 'end', nameSize: 37 },
    ] },
    domestic: { blocks: [
      { parts: ['name', 'value', 'notes'], x: 820, top: 506, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 },
    ] },
    international: { blocks: [
      { parts: ['name', 'value', 'notes'], x: 820, top: 1234, anchor: 'middle', nameSize: 39, valueSize: 38, noteSize: 28, lineGap: 8 },
    ] },
    revenue: { blocks: [
      { parts: ['name', 'value', 'notes'], x: 1194, top: 587, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 },
    ] },
    gross_profit: { blocks: [
      { parts: ['name', 'value', 'notes'], x: 1565, top: 467, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 },
    ] },
    cost_of_sales: { blocks: [
      { parts: ['name', 'value'], x: 1563, top: 1201, anchor: 'middle', nameSize: 35, valueSize: 35, lineGap: 8 },
    ] },
    operating_profit: { blocks: [
      { parts: ['name', 'value', 'notes'], x: 1949, top: 388, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 },
    ] },
    operating_expenses: { blocks: [
      { parts: ['name', 'value'], x: 1941, top: 842, anchor: 'middle', nameSize: 35, valueSize: 35, lineGap: 8 },
    ] },
    net_profit: { blocks: [
      { parts: ['name', 'value', 'notes'], x: 2475, top: 422, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 },
    ] },
    tax: { blocks: [
      { parts: ['name', 'value'], x: 2475, top: 653, anchor: 'middle', nameSize: 31, valueSize: 31, lineGap: 8 },
    ] },
    gains: { blocks: [] },
  };

  const zhLabels = {
    ...labels,
    computing_mobile_phones: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 431, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 370, top: 556, anchor: 'end', nameSize: 38 },
    ] },
    consumer_electronics: { blocks: [
      { parts: ['value', 'notes'], x: 446, top: 705, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
      { parts: ['name'], x: 327, top: 800, anchor: 'end', nameSize: 38 },
    ] },
    operating_expenses: { blocks: [
      { parts: ['name', 'value'], x: 1941, top: 842, anchor: 'middle', nameSize: 32, valueSize: 35, lineGap: 8 },
    ] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'best-buy-q4-fy26',
    name: 'Best Buy · Q4 FY26',
    company: 'Best Buy',
    meta: {
      company: 'Best Buy',
      title: 'Best Buy Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/best-buy-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2260,
      periodX: 2464,
      periodY: 290,
      periodNoteY: 331,
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
    annotationsSvg: gainsCallout(false),
    layout: {
      scale: 26.45,
      routes: { gains: { x: 1797, y: 634, width: 0, height: 1 } },
      nodes: {
        computing_mobile_phones: { x: 411, y: 522, width: 71, height: 154 },
        consumer_electronics: { x: 411, y: 796, width: 71, height: 95 },
        appliances: { x: 411, y: 1016, width: 71, height: 28 },
        entertainment: { x: 411, y: 1152, width: 71, height: 28 },
        services: { x: 411, y: 1288, width: 71, height: 17 },
        domestic: { x: 785, y: 647, width: 70, height: 332 },
        international: { x: 785, y: 1179, width: 70, height: 31 },
        revenue: { x: 1159, y: 727, width: 70, height: 365 },
        gross_profit: { x: 1530, y: 652, width: 70, height: 74 },
        cost_of_sales: { x: 1527, y: 886, width: 71, height: 289 },
        operating_profit: { x: 1906, y: 571, width: 71, height: 16 },
        operating_expenses: { x: 1906, y: 763, width: 71, height: 55 },
        net_profit: { x: 2279, y: 478, width: 71, height: 11 },
        tax: { x: 2279, y: 683, width: 71, height: 3 },
      },
      labels,
    },
    nonNodeMetrics: [
      {
        id: 'gains',
        representation: 'flow',
        label: 'Gains',
        value: 0.028,
        valueText: '$28M',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
    ],
    nodes: [
      { id: 'computing_mobile_phones', col: 0, order: 0, type: 'source', labelSide: 'left', label: ['Computing and', 'Mobile Phones'], value: 5.9, notes: ['+6% Y/Y'] },
      { id: 'consumer_electronics', col: 0, order: 1, type: 'source', labelSide: 'left', label: ['Consumer', 'Electronics'], value: 3.6, notes: ['(7%) Y/Y'] },
      { id: 'appliances', col: 0, order: 2, type: 'source', labelSide: 'left', label: 'Appliances', value: 1.1, notes: ['(11%) Y/Y'] },
      { id: 'entertainment', col: 0, order: 3, type: 'source', labelSide: 'left', label: 'Entertainment', value: 1.1, notes: ['(1%) Y/Y'] },
      { id: 'services', col: 0, order: 4, type: 'source', labelSide: 'left', label: 'Services', value: 0.8, notes: ['+19% Y/Y'] },
      { id: 'domestic', col: 1, order: 0, type: 'source', labelSide: 'above', label: 'Domestic', value: 12.6, notes: ['(1%) Y/Y'] },
      { id: 'international', col: 1, order: 1, type: 'source', labelSide: 'below', label: 'International', value: 1.2, notes: ['+0% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', labelSide: 'above', label: 'Revenue', value: 13.8, notes: ['(1%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', labelSide: 'above', label: 'Gross profit', value: 2.9, notes: ['21% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', labelSide: 'below', label: 'Cost of sales', value: 10.9 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', labelSide: 'above', label: 'Operating profit', value: 0.7, notes: ['5% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', labelSide: 'below', label: ['Operating', 'expenses', 'SG&A'], value: 2.2 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', labelSide: 'right', label: 'Net profit', value: 0.5, notes: ['4% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', labelSide: 'right', label: 'Tax', value: 0.2 },
    ],
    links: [
      { source: 'computing_mobile_phones', target: 'domestic', value: 5.9, sourceWidth: 154, targetWidth: 157, sourceOrder: 0, targetOrder: 0 },
      { source: 'consumer_electronics', target: 'domestic', value: 3.6, sourceWidth: 95, targetWidth: 96, sourceOrder: 0, targetOrder: 1 },
      { source: 'appliances', target: 'domestic', value: 1.1, sourceWidth: 28, targetWidth: 29, sourceOrder: 0, targetOrder: 2 },
      { source: 'entertainment', target: 'domestic', value: 1.1, sourceWidth: 28, targetWidth: 29, sourceOrder: 0, targetOrder: 3 },
      { source: 'services', target: 'domestic', value: 0.8, sourceWidth: 17, targetWidth: 21, sourceOrder: 0, targetOrder: 4 },
      { source: 'domestic', target: 'revenue', value: 12.6, sourceWidth: 332, targetWidth: 333, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 1.2, sourceWidth: 31, targetWidth: 32, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 2.9, sourceWidth: 76, targetWidth: 74, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 10.9, sourceWidth: 289, targetWidth: 289, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.7, sourceWidth: 19, targetWidth: 16, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.2, sourceWidth: 55, targetWidth: 55, sourceOrder: 1, targetOrder: 0 },
      {
        sourceRoute: 'gains',
        target: 'operating_profit',
        value: 0.028,
        sourceWidth: 0,
        targetWidth: 0,
        y0: 634,
        y1: 587,
        sourceOrder: 0,
        targetOrder: 1,
        interactionOnly: true,
        linkTint: GREEN_LINK,
      },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, sourceWidth: 13, targetWidth: 11, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 3, targetWidth: 3, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '百思买 · 2026 财年第四季度',
        meta: {
          title: '百思买 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1740,
        },
        annotationsSvg: gainsCallout(true),
        nonNodeMetrics: { gains: { label: '收益' } },
        nodes: {
          computing_mobile_phones: { label: ['计算与', '手机'], notes: ['同比 +6%'] },
          consumer_electronics: { label: ['消费', '电子'], notes: ['同比 (7%)'] },
          appliances: { label: '家用电器', notes: ['同比 (11%)'] },
          entertainment: { label: '娱乐', notes: ['同比 (1%)'] },
          services: { label: '服务', notes: ['同比 +19%'] },
          domestic: { label: '国内', notes: ['同比 (1%)'] },
          international: { label: '国际', notes: ['同比 +0%'] },
          revenue: { label: '收入', notes: ['同比 (1%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 21%', '同比 (0 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +4 个百分点'] },
          operating_expenses: { label: ['运营费用', '销售、一般及行政费用'] },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
