/* Costco · Q2 FY23 income statement ($B), reconstructed from the Source PNG. */
(function () {
  const BLUE = '#005daa';
  const BLUE_LINK = '#85afd2';
  const KPI_BLUE = '#0060aa';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const kpiCard = (x, width, title, value) => `
    <g>
      <rect x="${x}" y="1251" width="${width}" height="139" rx="24" fill="${KPI_BLUE}"/>
      <text x="${x + width / 2}" y="1301" text-anchor="middle"
        font-family="Noto Sans,Arial,sans-serif" font-size="29" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1344" text-anchor="middle"
        font-family="Noto Sans,Arial,sans-serif" font-size="28" font-weight="500" fill="#ffffff">${value}</text>
    </g>`;

  const annotations = (localized) => {
    const t = localized ? {
      usComp: '美国可比销售额', companyComp: '公司可比销售额', ecommerce: '电子商务', interest: '利息',
    } : {
      usComp: 'US Comp sales', companyComp: 'Company Comp sales', ecommerce: 'E-commerce', interest: 'Interest',
    };
    return `
      <g>
        ${icon('costcoCompanyWordmark', 560, 285, 1)}
        ${icon('costcoMembershipCards', 45, 1100, 1)}
        ${kpiCard(37, 273, t.usComp, '+5.7%')}
        ${kpiCard(320, 328, t.companyComp, '+5.2%')}
        ${kpiCard(660, 213, t.ecommerce, '-9.6%')}
      </g>
      <g class="sankey-interactive-annotation" data-node="interest">
        <line x1="2146" y1="512" x2="2220" y2="512" stroke="${GREEN}" stroke-width="2"/>
        <text x="2183" y="551" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${t.interest}</text>
        <text x="2183" y="593" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$80M</text>
      </g>`;
  };

  const labels = (localized) => {
    const t = localized ? {
      netSales: '净销售额', membershipFee: '会员费', revenue: '销售额', grossProfit: '毛利润',
      merchandiseCosts: ['商品', '成本'], operatingProfit: '营业利润', operatingExpenses: ['销售、一般及', '行政费用'],
      netProfit: '净利润', tax: '税费', yoy6: '同比 +6%', grossMargin: '利润率 12%', grossPp: '同比 +0.2 个百分点',
      operatingMargin: '利润率 3.4%', unchanged: '同比持平', netMargin: '利润率 2.7%', netPp: '同比 +0.1 个百分点',
    } : {
      netSales: 'Net Sales', membershipFee: 'Membership Fee', revenue: 'Sales', grossProfit: 'Gross profit',
      merchandiseCosts: ['Merchandise', 'costs'], operatingProfit: 'Operating profit', operatingExpenses: ['SG&A', 'expenses'],
      netProfit: 'Net profit', tax: 'Tax', yoy6: '+6% Y/Y', grossMargin: '12% margin', grossPp: '+0.2pp Y/Y',
      operatingMargin: '3.4% margin', unchanged: 'Unchanged', netMargin: '2.7% margin', netPp: '+0.1pp Y/Y',
    };
    return {
      net_sales: { blocks: [
        { x: 444, top: 481, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: BLUE },
          { text: t.yoy6, size: 28, weight: 400, color: NOTE },
        ] },
        { x: 207, top: 742, anchor: 'middle', lines: [{ text: t.netSales, size: 40, weight: 800, color: BLUE }] },
      ] },
      membership_fee: { blocks: [
        { x: 194, top: 1042, anchor: 'middle', lines: [{ text: t.membershipFee, size: 38, weight: 800, color: BLUE }] },
        { x: 444, top: 1071, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: BLUE },
          { text: t.yoy6, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      revenue: { blocks: [{ x: 912, top: 493, anchor: 'middle', lineGap: 9, lines: [
        { text: t.revenue, size: 40, weight: 800, color: BLUE },
        { text: '$value', size: 39, weight: 400, color: BLUE },
        { text: t.yoy6, size: 28, weight: 400, color: NOTE },
      ] }] },
      gross_profit: { blocks: [{ x: 1383, top: 390, anchor: 'middle', lineGap: 8, lines: [
        { text: t.grossProfit, size: 40, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: t.grossMargin, size: 28, weight: 400, color: NOTE },
        { text: t.grossPp, size: 28, weight: 400, color: NOTE },
      ] }] },
      merchandise_costs: { blocks: [{ x: 1383, top: 1115, anchor: 'middle', lineGap: 8, lines: [
        ...t.merchandiseCosts.map((text) => ({ text, size: 35, weight: 800, color: RED_LABEL })),
        { text: '$value', size: 35, weight: 400, color: RED_LABEL },
      ] }] },
      operating_profit: { blocks: [{ x: 1842, top: 303, anchor: 'middle', lineGap: 8, lines: [
        { text: t.operatingProfit, size: 40, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: t.operatingMargin, size: 28, weight: 400, color: NOTE },
        { text: t.unchanged, size: 28, weight: 400, color: NOTE },
      ] }] },
      operating_expenses: { blocks: [{ x: 1848, top: 735, anchor: 'middle', lineGap: 8, lines: [
        ...t.operatingExpenses.map((text) => ({ text, size: 35, weight: 800, color: RED_LABEL })),
        { text: '$value', size: 35, weight: 400, color: RED_LABEL },
      ] }] },
      net_profit: { blocks: [{ x: 2470, top: 380, anchor: 'middle', lineGap: 8, lines: [
        { text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: t.netMargin, size: 28, weight: 400, color: NOTE },
        { text: t.netPp, size: 28, weight: 400, color: NOTE },
      ] }] },
      tax: { blocks: [{ x: 2470, top: 643, anchor: 'middle', lineGap: 8, lines: [
        { text: t.tax, size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }] },
      interest: { blocks: [] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'costco-q2-fy23',
    name: 'Costco · Q2 FY23',
    company: 'Costco',
    meta: {
      company: 'Costco', title: 'Costco Q2 FY23 Income Statement', period: 'Q2 FY23',
      periodNote: 'Ending Jan. 2023', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/costco-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 199, titleSize: 132, titleWeight: 800, titleTextLength: 2165,
      periodX: 2468, periodY: 262, periodNoteY: 306,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 7.1,
      routes: { interest: { x: 2220, y: 512, width: 0, height: 1 } },
      nodes: {
        net_sales: { x: 409, y: 575, width: 71, height: 386 },
        membership_fee: { x: 409, y: 1168, width: 71, height: 6 },
        revenue: { x: 876, y: 640, width: 70, height: 393 },
        gross_profit: { x: 1348, y: 576, width: 71, height: 47 },
        merchandise_costs: { x: 1348, y: 750, width: 71, height: 343 },
        operating_profit: { x: 1806, y: 488, width: 70, height: 11 },
        operating_expenses: { x: 1813, y: 682, width: 70, height: 32 },
        net_profit: { x: 2277, y: 419, width: 71, height: 9 },
        tax: { x: 2277, y: 673, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.08, valueText: '$80M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'net_sales', col: 0, order: 0, type: 'source', label: 'Net Sales', value: 54.2, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'membership_fee', col: 0, order: 1, type: 'source', label: 'Membership Fee', value: 1.0, valueText: '$1.0B', notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Sales', value: 55.3, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.8, notes: ['12% margin', '+0.2pp Y/Y'] },
      { id: 'merchandise_costs', col: 2, order: 1, type: 'cost', label: 'Merchandise costs', value: 48.4 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.9, notes: ['3.4% margin', 'Unchanged'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'SG&A expenses', value: 4.9 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.5, notes: ['2.7% margin', '+0.1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.5 },
    ],
    links: [
      { source: 'net_sales', target: 'revenue', value: 54.2, sourceWidth: 386, targetWidth: 386, y0: 768, y1: 833, targetOrder: 0 },
      { source: 'membership_fee', target: 'revenue', value: 1.0, sourceWidth: 6, targetWidth: 7, y0: 1171, y1: 1029.5, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 6.8, sourceWidth: 50, targetWidth: 47, y0: 665, y1: 599.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'merchandise_costs', value: 48.4, sourceWidth: 343, targetWidth: 343, y0: 861.5, y1: 921.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.9, sourceWidth: 12, targetWidth: 11, y0: 582, y1: 493.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.9, sourceWidth: 35, targetWidth: 32, y0: 605.5, y1: 698, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.4, sourceWidth: 8, targetWidth: 8, y0: 492, y1: 423, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 3, targetWidth: 2, y0: 497.5, y1: 674, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.08, sourceWidth: 1, targetWidth: 1, y0: 512, y1: 427.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['COSTCO', 'WHOLESALE', 'GOLD STAR MEMBER', 'EXECUTIVE MEMBER'],
      zh: {
        name: 'Costco · 2023 财年第二季度',
        meta: {
          title: 'Costco 2023 财年第二季度利润表', period: '2023 财年第二季度',
          periodNote: '截至 2023 年 1 月', titleTextLength: 1770,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { interest: { label: '利息' } },
        nodes: {
          net_sales: { label: '净销售额', notes: ['同比 +6%'] },
          membership_fee: { label: '会员费', notes: ['同比 +6%'] },
          revenue: { label: '销售额', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 12%', '同比 +0.2 个百分点'] },
          merchandise_costs: { label: '商品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3.4%', '同比持平'] },
          operating_expenses: { label: '销售、一般及行政费用' },
          net_profit: { label: '净利润', notes: ['利润率 2.7%', '同比 +0.1 个百分点'] },
          tax: { label: '税费' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
