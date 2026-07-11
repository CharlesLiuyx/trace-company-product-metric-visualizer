/* ====================================================================
 * Best Buy — Q1 FY27 income statement ($B)
 * Reconstructed from input/processed/best-buy-q1-fy27.png as a fixed,
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

  // The source treats Other as a thin, interactive callout feeding the
  // operating-profit conclusion, not as a visible Sankey bar. The zero-width
  // interaction-only relationship retains its financial semantics while this
  // SVG guide reproduces the measured visual endpoint.
  const otherIncomeCallout = (zh) => `
    <g class="sankey-interactive-annotation" data-node="other_income"
      data-link-numerator="other_income" data-link-denominator="operating_profit"
      data-link-anchor-x="1822" data-link-anchor-y="524">
      <path d="M1748 524H1822 C1866 524 1876 539 1900 539" fill="none"
        stroke="${GREEN_LINK}" stroke-width="2" stroke-linecap="butt"/>
      <rect x="1716" y="432" width="156" height="100" fill="transparent" pointer-events="all"/>
      <text x="1785" y="470" text-anchor="middle" font-size="35" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="1785" y="512" text-anchor="middle" font-size="34" font-weight="400" fill="${GREEN_LABEL}">$9M</text>
    </g>
  `;

  const zhLabels = {
    computing_mobile_phones: {
      blocks: [
        { parts: ['value', 'notes'], x: 446, top: 365, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
        { parts: ['name'], x: 370, top: 517, anchor: 'end', nameSize: 38, lineGap: 9 },
      ],
    },
    consumer_electronics: {
      blocks: [
        { parts: ['value', 'notes'], x: 446, top: 691, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
        { parts: ['name'], x: 370, top: 786, anchor: 'end', nameSize: 38, lineGap: 9 },
      ],
    },
    appliances: {
      blocks: [
        { parts: ['value', 'notes'], x: 446, top: 908, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
        { parts: ['name'], x: 370, top: 1005, anchor: 'end', nameSize: 37 },
      ],
    },
    entertainment: {
      blocks: [
        { parts: ['value', 'notes'], x: 446, top: 1066, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
        { parts: ['name'], x: 370, top: 1161, anchor: 'end', nameSize: 37 },
      ],
    },
    services: {
      blocks: [
        { parts: ['value', 'notes'], x: 446, top: 1210, anchor: 'middle', valueSize: 38, noteSize: 28, lineGap: 8 },
        { parts: ['name'], x: 370, top: 1295, anchor: 'end', nameSize: 37 },
      ],
    },
    domestic: {
      blocks: [{ parts: ['name', 'value', 'notes'], x: 820, top: 486, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 }],
    },
    international: {
      blocks: [{ parts: ['name', 'value', 'notes'], x: 820, top: 1264, anchor: 'middle', nameSize: 39, valueSize: 38, noteSize: 28, lineGap: 8 }],
    },
    revenue: {
      blocks: [{ parts: ['name', 'value', 'notes'], x: 1192, top: 584, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 }],
    },
    gross_profit: {
      blocks: [{ parts: ['name', 'value', 'notes'], x: 1568, top: 453, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 }],
    },
    cost_of_sales: {
      blocks: [{ parts: ['name', 'value'], x: 1568, top: 1247, anchor: 'middle', nameSize: 35, valueSize: 35, lineGap: 8 }],
    },
    operating_profit: {
      blocks: [{ parts: ['name', 'value', 'notes'], x: 1936, top: 361, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 }],
    },
    operating_expenses: {
      blocks: [{ parts: ['name', 'value'], x: 1936, top: 862, anchor: 'middle', nameSize: 35, valueSize: 35, lineGap: 8 }],
    },
    other_income: {
      blocks: [{ parts: ['name', 'value'], x: 2168, top: 423, anchor: 'middle', nameSize: 35, valueSize: 34, lineGap: 8 }],
    },
    net_profit: {
      blocks: [{ parts: ['name', 'value', 'notes'], x: 2460, top: 384, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 }],
    },
    tax: {
      blocks: [{ parts: ['name', 'value'], x: 2460, top: 665, anchor: 'middle', nameSize: 31, valueSize: 31, lineGap: 8 }],
    },
  };

  // Chinese terminal labels need a small rightward nudge to clear the short
  // net-profit bar while preserving the English reference layout unchanged.
  const zhLayoutLabels = {
    ...zhLabels,
    net_profit: {
      blocks: [{ parts: ['name', 'value', 'notes'], x: 2470, top: 384, anchor: 'middle', nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 }],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'best-buy-q1-fy27',
    name: 'Best Buy · Q1 FY27',
    company: 'Best Buy',
    meta: {
      company: 'Best Buy',
      title: 'Best Buy Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/best-buy-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2260,
      periodX: 2184,
      periodY: 1284,
      periodNoteY: 1330,
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
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: otherIncomeCallout(false),
    layout: {
      scale: 47.1,
      nodes: {
        computing_mobile_phones: { x: 410, y: 472, width: 72, height: 181 },
        consumer_electronics: { x: 410, y: 783, width: 72, height: 98.9 },
        appliances: { x: 410, y: 1008, width: 72, height: 37.7 },
        entertainment: { x: 410, y: 1165, width: 72, height: 36 },
        services: { x: 410, y: 1304, width: 72, height: 27 },
        domestic: { x: 784, y: 632, width: 72, height: 383 },
        international: { x: 784, y: 1212, width: 72, height: 31 },
        revenue: { x: 1156, y: 733, width: 72, height: 411 },
        gross_profit: { x: 1532, y: 633, width: 72, height: 98.9 },
        cost_of_sales: { x: 1532, y: 914, width: 72, height: 317 },
        operating_profit: { x: 1900, y: 538, width: 72, height: 18.8 },
        operating_expenses: { x: 1900, y: 758, width: 72, height: 80.1 },
        other_income: { x: 1748, y: 524, width: 0, height: 0 },
        net_profit: { x: 2282, y: 449, width: 72, height: 14.1 },
        tax: { x: 2282, y: 698, width: 72, height: 4.7 },
      },
      labels: zhLabels,
    },
    nodes: [
      { id: 'computing_mobile_phones', col: 0, order: 0, type: 'source', labelSide: 'left', label: ['Computing and', 'Mobile Phones'], value: 3.9, notes: ['+2% Y/Y'] },
      { id: 'consumer_electronics', col: 0, order: 1, type: 'source', labelSide: 'left', label: ['Consumer', 'Electronics'], value: 2.1, notes: ['(4%) Y/Y'] },
      { id: 'appliances', col: 0, order: 2, type: 'source', labelSide: 'left', label: 'Appliances', value: 0.8, notes: ['(17%) Y/Y'] },
      { id: 'entertainment', col: 0, order: 3, type: 'source', labelSide: 'left', label: 'Entertainment', value: 0.8, notes: ['+11% Y/Y'] },
      { id: 'services', col: 0, order: 4, type: 'source', labelSide: 'left', label: 'Services', value: 0.6, notes: ['+40% Y/Y'] },
      { id: 'domestic', col: 1, order: 0, type: 'source', labelSide: 'above', label: 'Domestic', value: 8.2, notes: ['+2% Y/Y'] },
      { id: 'international', col: 1, order: 1, type: 'source', labelSide: 'below', label: 'International', value: 0.7, notes: ['+7% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', labelSide: 'above', label: 'Revenue', value: 8.9, notes: ['+2% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', labelSide: 'above', label: 'Gross profit', value: 2.1, notes: ['24% margin', '+0pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', labelSide: 'below', label: 'Cost of sales', value: 6.8 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', labelSide: 'above', label: 'Operating profit', value: 0.4, notes: ['4% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', labelSide: 'below', label: ['Operating', 'expenses', 'SG&A'], value: 1.7 },
      { id: 'other_income', col: 4, order: -1, type: 'profit', label: '', value: 0.009, valueText: '', color: BACKGROUND, labelColor: 'transparent' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', labelSide: 'right', label: 'Net profit', value: 0.3, notes: ['3% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', labelSide: 'right', label: 'Tax', value: 0.1 },
    ],
    links: [
      { source: 'computing_mobile_phones', target: 'domestic', value: 3.9, sourceWidth: 181, targetWidth: 183.4, targetOrder: 0 },
      { source: 'consumer_electronics', target: 'domestic', value: 2.1, sourceWidth: 98.9, targetWidth: 98.9, targetOrder: 1 },
      { source: 'appliances', target: 'domestic', value: 0.8, sourceWidth: 37.7, targetWidth: 37.7, targetOrder: 2 },
      { source: 'entertainment', target: 'domestic', value: 0.8, sourceWidth: 36, targetWidth: 36, targetOrder: 3 },
      { source: 'services', target: 'domestic', value: 0.6, sourceWidth: 27, targetWidth: 27, targetOrder: 4 },
      { source: 'domestic', target: 'revenue', value: 8.2, sourceWidth: 383, targetWidth: 379.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 0.7, sourceWidth: 31, targetWidth: 31.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 2.1, sourceWidth: 98, targetWidth: 98, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 6.8, sourceWidth: 313, targetWidth: 317, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.4, sourceWidth: 18.8, targetWidth: 18.8, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.7, sourceWidth: 79.2, targetWidth: 80.1, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.3, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'other_income', target: 'operating_profit', value: 0.009,
        width: 0, sourceWidth: 0, targetWidth: 0, y0: 524, y1: 539,
        interactionOnly: true,
        curve: { x0: 1748, x1: 1900, c1x: 1822, c1y: 524, c2x: 1876, c2y: 539 },
      },
    ],
    i18n: {
      zh: {
        name: '百思买 · 2027 财年第一季度',
        meta: {
          title: '百思买 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 1740,
        },
        nodes: {
          computing_mobile_phones: { label: ['计算与', '手机'], notes: ['同比 +2%'] },
          consumer_electronics: { label: ['消费', '电子'], notes: ['同比 (4%)'] },
          appliances: { label: '家用电器', notes: ['同比 (17%)'] },
          entertainment: { label: '娱乐', notes: ['同比 +11%'] },
          services: { label: '服务', notes: ['同比 +40%'] },
          domestic: { label: '国内', notes: ['同比 +2%'] },
          international: { label: '国际', notes: ['同比 +7%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 24%', '同比 +0 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['运营费用', '销售、一般及', '行政费用'] },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
        },
        annotationsSvg: otherIncomeCallout(true),
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
