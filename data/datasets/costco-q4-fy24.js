/* Costco Q4 FY24 fixed d3-sankey adapter ($B). */
(function () {
  const COSTCO_BLUE = '#005daa';
  const BLUE_LINK = '#85afd2';
  const KPI_BLUE = '#005daa';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scaleX = 1, scaleY = scaleX) => `
    <g transform="translate(${x} ${y}) scale(${scaleX} ${scaleY})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const kpiCard = (x, width, lines, fontFamily = 'Montserrat,Arial,sans-serif') => `
    <g>
      <rect x="${x}" y="1250" width="${width}" height="141" rx="24" fill="${KPI_BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1307 + index * 47}" text-anchor="middle"
          font-family="${fontFamily}" font-size="${index === 0 ? 29 : 28}"
          font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const membershipCardsZh = (x, y) => `
    <g transform="translate(${x} ${y}) scale(1 1)" data-typography-role="brand">${(BUSINESS_ICONS.costcoMembershipCards || '')
      .replace('GOLD STAR MEMBER', '金星会员')
      .replace('EXECUTIVE MEMBER', '行政会员')}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('costcoCompanyWordmark', 575, 264, 0.955, 0.883)}
      ${icon('costcoMembershipCards', 45, 1102, 1)}
      ${kpiCard(36, 274, ['US Comp sales', '+6.3% Y/Y'])}
      ${kpiCard(320, 328, ['Company Comp sales', '+6.9% Y/Y'])}
      ${kpiCard(660, 213, ['E-commerce', '+19.5% Y/Y'])}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('costcoCompanyWordmark', 575, 264, 0.955, 0.883)}
      ${membershipCardsZh(45, 1102)}
      ${kpiCard(36, 274, ['美国可比销售额', '同比 +6.3%'], "Montserrat,Arial,'Microsoft YaHei',sans-serif")}
      ${kpiCard(320, 328, ['公司可比销售额', '同比 +6.9%'], "Montserrat,Arial,'Microsoft YaHei',sans-serif")}
      ${kpiCard(660, 213, ['电子商务', '同比 +19.5%'], "Montserrat,Arial,'Microsoft YaHei',sans-serif")}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'costco-q4-fy24',
    name: 'Costco · Q4 FY24',
    company: 'Costco',
    meta: {
      company: 'Costco',
      title: 'Costco Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Aug. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/costco-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 189,
      titleSize: 76,
      titleWeight: 800,
      titleTextLength: 2165,
      periodX: 2268,
      periodY: 1265,
      periodNoteY: 1313,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: COSTCO_BLUE, label: COSTCO_BLUE },
        hub: { node: COSTCO_BLUE, label: COSTCO_BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 5.5,
      nodes: {
        net_sales: { x: 411, y: 491, width: 71, height: 431 },
        membership_fee: { x: 411, y: 1181, width: 71, height: 7 },
        revenue: { x: 878, y: 627, width: 70, height: 439 },
        gross_profit: { x: 1342, y: 493, width: 72, height: 54 },
        merchandise_costs: { x: 1345, y: 795, width: 71, height: 384 },
        operating_profit: { x: 1813, y: 401, width: 70, height: 15 },
        operating_expenses: { x: 1810, y: 626, width: 70, height: 38 },
        interest: { x: 2149, y: 394, width: 71, height: 2 },
        net_profit: { x: 2279, y: 306, width: 71, height: 11 },
        tax: { x: 2279, y: 561, width: 71, height: 2 },
      },
      labels: {
        net_sales: { blocks: [
          { x: 443, top: 394, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
            { text: '+1% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 207, top: 669, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [
            { text: 'Net Sales', size: 40, weight: 800, color: COSTCO_BLUE },
          ] },
        ] },
        membership_fee: { blocks: [
          { x: 207, top: 1041, anchor: 'middle', lines: [
            { text: 'Membership Fee', size: 38, weight: 800, color: COSTCO_BLUE },
          ] },
          { x: 444, top: 1083, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
            { text: '+0% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [{ x: 910, top: 485, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 40, weight: 800, color: COSTCO_BLUE },
          { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
          { text: '+1% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1376, top: 313, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '12.7% margin', size: 28, weight: 400, color: NOTE },
          { text: '+0.4pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        merchandise_costs: { blocks: [{ x: 1378, top: 1202, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Merchandise', size: 35, weight: 800, color: RED_LABEL },
          { text: 'costs', size: 35, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ] }] },
        operating_profit: { blocks: [{ x: 1846, top: 222, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '3.8% margin', size: 28, weight: 400, color: NOTE },
          { text: '+0.3pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1840, top: 689, anchor: 'middle', lineGap: 8, lines: [
          { text: 'SG&A', size: 35, weight: 800, color: RED_LABEL },
          { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ] }] },
        interest: { blocks: [{ x: 2188, top: 410, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Interest', size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2463, top: 248, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '3.0% margin', size: 28, weight: 400, color: NOTE },
          { text: '+0.2pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2462, top: 531, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 31, weight: 400, color: RED_LABEL },
        ] }] },
      },
    },

    nodes: [
      { id: 'net_sales', col: 0, order: 0, type: 'source', label: 'Net Sales', value: 78.2, notes: ['+1% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'membership_fee', col: 0, order: 1, type: 'source', label: 'Membership Fee', value: 1.5, notes: ['+0% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 79.7, notes: ['+1% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.1, notes: ['12.7% margin', '+0.4pp Y/Y'] },
      { id: 'merchandise_costs', col: 2, order: 1, type: 'cost', label: 'Merchandise costs', value: 69.6 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.0, valueText: '$3.0B', notes: ['3.8% margin', '+0.3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'SG&A expenses', value: 7.1 },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.1 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.4, notes: ['3.0% margin', '+0.2pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.8 },
    ],

    links: [
      { source: 'net_sales', target: 'revenue', value: 78.2, sourceWidth: 431, targetWidth: 432, y0: 706.5, y1: 843, targetOrder: 0 },
      { source: 'membership_fee', target: 'revenue', value: 1.5, sourceWidth: 7, targetWidth: 7, y0: 1184.5, y1: 1062.5, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 10.1, sourceWidth: 54, targetWidth: 54, y0: 654, y1: 520, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'merchandise_costs', value: 69.6, sourceWidth: 384, targetWidth: 384, y0: 874, y1: 987, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'gross_profit', target: 'operating_profit', value: 3.0, sourceWidth: 15, targetWidth: 15, y0: 500.5, y1: 408.5, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.1, sourceWidth: 39, targetWidth: 38, y0: 527.5, y1: 645, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'net_profit', value: 2.2, sourceWidth: 11, targetWidth: 9, y0: 406.5, y1: 310.5, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'tax', value: 0.8, sourceWidth: 4, targetWidth: 2, y0: 414, y1: 562, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'interest', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 395, y1: 316, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
    ],

    i18n: {
      zh: {
        name: 'Costco · 2024 财年第四季度',
        meta: {
          title: 'Costco 2024 财年第四季度利润表',
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 8 月',
          titleTextLength: 1770,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          net_sales: { label: '净销售额', notes: ['同比 +1%'] },
          membership_fee: { label: '会员费', notes: ['同比 +0%'] },
          revenue: { label: '收入', notes: ['同比 +1%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 12.7%', '同比 +0.4 个百分点'] },
          merchandise_costs: { label: '商品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3.8%', '同比 +0.3 个百分点'] },
          operating_expenses: { label: '销售、一般及行政费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 3.0%', '同比 +0.2 个百分点'] },
          tax: { label: '税费' },
        },
        layout: {
          labels: {
            net_profit: { blocks: [{ x: 2469, top: 248, anchor: 'middle', lineGap: 8, lines: [
              { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
              { text: '利润率 3.0%', size: 28, weight: 400, color: NOTE },
              { text: '同比 +0.2 个百分点', size: 28, weight: 400, color: NOTE },
            ] }] },
          },
        },
      },
    },
  });
})();
