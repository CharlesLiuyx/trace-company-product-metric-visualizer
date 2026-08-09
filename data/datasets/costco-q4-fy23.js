/* Costco Q4 FY23 income statement ($B), measured from the native 2667x1500
 * Source. Financial values live in data/income-statements/costco.js. */
(function () {
  'use strict';

  const BLUE = '#005daa';
  const REVENUE_BLUE = '#0071cd';
  const BLUE_LINK = '#85afd2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;
  const membershipCardsZh = (x, y) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">
      <g>
        <rect x="0" y="5" width="145" height="96" rx="8" fill="#ffffff" stroke="#9ea3a8" stroke-width="1.4"/>
        <text x="15" y="39" font-family="Arial Black, Arial, sans-serif" font-size="29" font-style="italic" font-weight="900" fill="#e31837">COSTCO</text>
        <text x="43" y="58" font-family="Arial Black, Arial, sans-serif" font-size="18" font-style="italic" font-weight="900" fill="#0060a9">WHOLESALE</text>
        <g fill="#0060a9">
          <rect x="6" y="55" width="74" height="4"/><rect x="6" y="62" width="83" height="4"/><rect x="6" y="69" width="91" height="4"/>
        </g>
        <path d="M72 65l6 15h16l-13 9 5 15-14-9-13 9 5-15-13-9h16z" fill="#f8b21a"/>
        <text x="73" y="84" text-anchor="middle" font-family="Arial,'Microsoft YaHei',sans-serif" font-size="13" font-weight="800" fill="#e31837">金星会员</text>
      </g>
      <g transform="translate(168 0)">
        <rect x="0" y="5" width="145" height="96" rx="8" fill="#070707" stroke="#2e2e2e" stroke-width="1.4"/>
        <g fill="none" stroke="#c9a24c" stroke-width="2" opacity="0.92">
          <ellipse cx="72" cy="53" rx="55" ry="27"/><ellipse cx="72" cy="53" rx="31" ry="53" transform="rotate(33 72 53)"/>
          <ellipse cx="72" cy="53" rx="31" ry="53" transform="rotate(-33 72 53)"/><line x1="12" y1="53" x2="132" y2="53"/>
        </g>
        <text x="32" y="40" font-family="Arial Black, Arial, sans-serif" font-size="23" font-style="italic" font-weight="900" fill="#e31837" stroke="#ffffff" stroke-width="2" paint-order="stroke">COSTCO</text>
        <text x="49" y="56" font-family="Arial Black, Arial, sans-serif" font-size="14" font-style="italic" font-weight="900" fill="#0060a9" stroke="#ffffff" stroke-width="1.4" paint-order="stroke">WHOLESALE</text>
        <text x="72" y="82" text-anchor="middle" font-family="Arial,'Microsoft YaHei',sans-serif" font-size="13" font-weight="800" fill="#f6d37a">行政会员</text>
      </g>
    </g>`;
  const kpiCard = (x, width, title, value) => `
    <g>
      <rect x="${x}" y="1251" width="${width}" height="139" rx="23" fill="${BLUE}"/>
      <text x="${x + width / 2}" y="1317" text-anchor="middle" font-size="29" font-weight="800" fill="${BG}">${title}</text>
      <text x="${x + width / 2}" y="1356" text-anchor="middle" font-size="28" font-weight="500" fill="${BG}">${value}</text>
    </g>`;
  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${icon('costcoCompanyWordmark', 560, 275)}
      ${zh ? membershipCardsZh(45, 1104) : icon('costcoMembershipCards', 45, 1104)}
      ${kpiCard(37, 273, zh ? '美国可比销售额' : 'US Comp sales', '+0.2%')}
      ${kpiCard(320, 328, zh ? '公司可比销售额' : 'Company Comp sales', '+1.1%')}
      ${kpiCard(660, 213, zh ? '电子商务' : 'E-commerce', '-0.8%')}
    </g>`;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight ?? 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap ?? 8,
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}),
    lines,
  });

  const labels = (zh) => {
    const t = zh ? {
      netSales: '净销售额', membership: '会员费', revenue: '收入', gross: '毛利润', merchandise: ['商品', '成本'],
      operatingProfit: '营业利润', operatingExpenses: ['销售、一般及', '行政费用'], interest: '利息', net: '净利润', tax: '税费',
      revenueYoy: '同比 +9%', membershipYoy: '同比 +14%', grossMargin: '利润率 12%', grossYoy: '同比 +0.5 个百分点',
      operatingMargin: '利润率 3.5%', operatingYoy: '同比 +0.1 个百分点', netMargin: '利润率 2.7%', netYoy: '同比 +0.4 个百分点',
    } : {
      netSales: 'Net Sales', membership: 'Membership Fee', revenue: 'Revenue', gross: 'Gross profit', merchandise: ['Merchandise', 'costs'],
      operatingProfit: 'Operating profit', operatingExpenses: ['SG&A', 'expenses'], interest: 'Interest', net: 'Net profit', tax: 'Tax',
      revenueYoy: '+9% Y/Y', membershipYoy: '+14% Y/Y', grossMargin: '12% margin', grossYoy: '+0.5pp Y/Y',
      operatingMargin: '3.5% margin', operatingYoy: '+0.1pp Y/Y', netMargin: '2.7% margin', netYoy: '+0.4pp Y/Y',
    };

    return {
      net_sales: {
        blocks: [
          block(440, 430, [line('$value', 39, { color: BLUE }), line(t.revenueYoy, 28, { color: NOTE })], { lineGap: 9 }),
          block(207, 677, [line(t.netSales, 40, { weight: 800, color: BLUE })], { semanticRole: 'reference-offset-side-label' }),
        ],
      },
      membership_fee: {
        blocks: [
          block(207, 1039, [line(t.membership, 38, { weight: 800, color: BLUE })], { semanticRole: 'reference-offset-side-label' }),
          block(446, 1053, [line('$value', 39, { color: BLUE }), line(t.membershipYoy, 28, { color: NOTE })], { lineGap: 9 }),
        ],
      },
      revenue: { blocks: [block(908, 490, [line(t.revenue, 40, { weight: 800, color: REVENUE_BLUE }), line('$value', 39, { color: REVENUE_BLUE }), line(t.revenueYoy, 28, { color: NOTE })], { lineGap: 9 })] },
      gross_profit: { blocks: [block(1376, 377, [line(t.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(t.grossMargin, 28, { color: NOTE }), line(t.grossYoy, 28, { color: NOTE })])] },
      merchandise_costs: { blocks: [block(1376, 1141, [...t.merchandise.map((text) => line(text, 35, { weight: 800, color: RED_LABEL })), line('$value', 35, { color: RED_LABEL })])] },
      operating_profit: { blocks: [block(1844, 256, [line(t.operatingProfit, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(t.operatingMargin, 28, { color: NOTE }), line(t.operatingYoy, 28, { color: NOTE })])] },
      operating_expenses: { blocks: [block(1840, 744, [...t.operatingExpenses.map((text) => line(text, zh ? 31 : 35, { weight: 800, color: RED_LABEL })), line('$value', 35, { color: RED_LABEL })])] },
      interest: { blocks: [block(2193, 421, [line(t.interest, 31, { weight: 800, color: GREEN_LABEL }), line('$value', 31, { color: GREEN_LABEL })])] },
      net_profit: { blocks: [block(2471, 331, [line(t.net, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(t.netMargin, 28, { color: NOTE }), line(t.netYoy, 28, { color: NOTE })])] },
      tax: { blocks: [block(2471, 568, [line(t.tax, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'costco-q4-fy23',
    name: 'Costco · Q4 FY23',
    company: 'Costco',
    meta: {
      company: 'Costco',
      title: 'Costco Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending August 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/costco-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 220,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2131,
      periodX: 2471,
      periodY: 1272,
      periodNoteY: 1318,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: REVENUE_BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 4.97,
      nodes: {
        net_sales: { x: 409, y: 526, width: 71, height: 384 },
        membership_fee: { x: 409, y: 1147, width: 71, height: 6 },
        revenue: { x: 876, y: 642, width: 70, height: 392 },
        gross_profit: { x: 1343, y: 561, width: 71, height: 47 },
        merchandise_costs: { x: 1345, y: 775, width: 72, height: 344 },
        operating_profit: { x: 1808, y: 433, width: 70, height: 12 },
        operating_expenses: { x: 1806, y: 685, width: 70, height: 33 },
        interest: { x: 2158, y: 403, width: 70, height: 5 },
        net_profit: { x: 2277, y: 339, width: 71, height: 9 },
        tax: { x: 2277, y: 603, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'net_sales', col: 0, order: 0, type: 'source', label: 'Net Sales', value: 77.4, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'membership_fee', col: 0, order: 1, type: 'source', label: 'Membership Fee', value: 1.5, notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 78.9, notes: ['+9% Y/Y'], color: BLUE, labelColor: REVENUE_BLUE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 9.7, notes: ['12% margin', '+0.5pp Y/Y'] },
      { id: 'merchandise_costs', col: 2, order: 1, type: 'cost', label: 'Merchandise costs', value: 69.2 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.8, notes: ['3.5% margin', '+0.1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'SG&A expenses', value: 6.9 },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.2, color: '#4bac4b' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.2, notes: ['2.7% margin', '+0.4pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.8 },
    ],
    links: [
      { source: 'net_sales', target: 'revenue', value: 77.4, sourceWidth: 384, targetWidth: 384, y0: 718, y1: 834, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'membership_fee', target: 'revenue', value: 1.5, sourceWidth: 6, targetWidth: 8, y0: 1150, y1: 1030, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 9.7, sourceWidth: 47, targetWidth: 47, y0: 665.5, y1: 584.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'merchandise_costs', value: 69.2, sourceWidth: 344, targetWidth: 344, y0: 862, y1: 947, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.8, sourceWidth: 14, targetWidth: 12, y0: 568, y1: 439, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.9, sourceWidth: 33, targetWidth: 33, y0: 591.5, y1: 701.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 2.0, sourceWidth: 9, targetWidth: 8, y0: 437.5, y1: 343, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.8, sourceWidth: 3, targetWidth: 2, y0: 443.5, y1: 604, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'interest', target: 'net_profit', value: 0.2, sourceWidth: 5, targetWidth: 1, y0: 405.5, y1: 347.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
    ],
    i18n: {
      zh: {
        name: 'Costco · 2023 财年第四季度',
        meta: { title: 'Costco 2023 财年第四季度利润表', period: '2023 财年第四季度', periodNote: '截至 2023 年 8 月', titleTextLength: 1770 },
        annotationsSvg: annotations(true),
        nodes: {
          net_sales: { label: '净销售额', notes: ['同比 +9%'] },
          membership_fee: { label: '会员费', notes: ['同比 +14%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 12%', '同比 +0.5 个百分点'] },
          merchandise_costs: { label: '商品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3.5%', '同比 +0.1 个百分点'] },
          operating_expenses: { label: '销售、一般及行政费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 2.7%', '同比 +0.4 个百分点'] },
          tax: { label: '税费' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
