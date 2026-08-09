/* ====================================================================
 * Costco - Q3 FY23 income statement ($B)
 * Reconstructed from input/processed/costco-q3-fy23.png as a fixed
 * d3-sankey layout with reusable SVG Costco logo/member-card annotations.
 * ==================================================================== */
(function () {
  const COSTCO_BLUE = '#005daa';
  const BLUE_LINK = '#85afd2';
  const KPI_BLUE = '#0068b5';
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

  const kpiCard = (x, width, lines, fontFamily = 'Montserrat,Arial,sans-serif') => `
    <g>
      <rect x="${x}" y="1251" width="${width}" height="139" rx="24" fill="${KPI_BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1308 + index * 38}" text-anchor="middle"
          font-family="${fontFamily}" font-size="${index === 1 ? 28 : 29}"
          font-weight="${index === 1 ? 500 : 800}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const membershipCardsZh = (x, y) => `
    <g transform="translate(${x} ${y}) scale(1)" data-typography-role="brand">
      <g>
        <rect x="0" y="5" width="145" height="96" rx="8" fill="#ffffff" stroke="#9ea3a8" stroke-width="1.4"/>
        <text x="15" y="39" font-family="Arial Black, Arial, sans-serif" font-size="29" font-style="italic" font-weight="900"
          fill="#e31837">COSTCO</text>
        <text x="43" y="58" font-family="Arial Black, Arial, sans-serif" font-size="18" font-style="italic" font-weight="900"
          fill="#0060a9">WHOLESALE</text>
        <g fill="#0060a9"><rect x="6" y="55" width="74" height="4"/><rect x="6" y="62" width="83" height="4"/><rect x="6" y="69" width="91" height="4"/></g>
        <path d="M72 65l6 15h16l-13 9 5 15-14-9-13 9 5-15-13-9h16z" fill="#f8b21a"/>
        <text x="73" y="84" text-anchor="middle" font-family="Arial,'Microsoft YaHei',sans-serif" font-size="13" font-weight="800" fill="#e31837">金星会员</text>
      </g>
      <g transform="translate(168 0)">
        <rect x="0" y="5" width="145" height="96" rx="8" fill="#070707" stroke="#2e2e2e" stroke-width="1.4"/>
        <g fill="none" stroke="#c9a24c" stroke-width="2" opacity="0.92">
          <ellipse cx="72" cy="53" rx="55" ry="27"/><ellipse cx="72" cy="53" rx="31" ry="53" transform="rotate(33 72 53)"/>
          <ellipse cx="72" cy="53" rx="31" ry="53" transform="rotate(-33 72 53)"/><line x1="12" y1="53" x2="132" y2="53"/>
        </g>
        <text x="32" y="40" font-family="Arial Black, Arial, sans-serif" font-size="23" font-style="italic" font-weight="900"
          fill="#e31837" stroke="#ffffff" stroke-width="2" paint-order="stroke">COSTCO</text>
        <text x="49" y="56" font-family="Arial Black, Arial, sans-serif" font-size="14" font-style="italic" font-weight="900"
          fill="#0060a9" stroke="#ffffff" stroke-width="1.4" paint-order="stroke">WHOLESALE</text>
        <text x="72" y="82" text-anchor="middle" font-family="Arial,'Microsoft YaHei',sans-serif" font-size="13" font-weight="800" fill="#f6d37a">行政会员</text>
      </g>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('costcoCompanyWordmark', 560, 248, 1)}
      ${icon('costcoMembershipCards', 45, 1101, 1)}
      ${kpiCard(36, 274, ['US Comp sales', '-0.1%'])}
      ${kpiCard(320, 328, ['Company Comp sales', '+0.3%'])}
      ${kpiCard(660, 213, ['E-commerce', '-10.0%'])}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('costcoCompanyWordmark', 560, 248, 1)}
      ${membershipCardsZh(45, 1101)}
      ${kpiCard(36, 274, ['美国可比销售额', '-0.1%'], "Montserrat,Arial,'Microsoft YaHei',sans-serif")}
      ${kpiCard(320, 328, ['公司可比销售额', '+0.3%'], "Montserrat,Arial,'Microsoft YaHei',sans-serif")}
      ${kpiCard(660, 213, ['电子商务', '-10.0%'], "Montserrat,Arial,'Microsoft YaHei',sans-serif")}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'costco-q3-fy23',
    name: 'Costco · Q3 FY23',
    company: 'Costco',
    meta: {
      company: 'Costco',
      title: 'Costco Q3 FY23 Income Statement',
      period: 'Q3 FY23',
      periodNote: 'Ending Apr. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      referenceImage: { src: 'input/processed/costco-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 194,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2131,
      periodX: 2225,
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
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 7.332,
      nodes: {
        net_sales: { x: 409, y: 575, width: 71, height: 386 },
        membership_fee: { x: 409, y: 1168, width: 71, height: 6 },
        revenue: { x: 876, y: 640, width: 70, height: 393 },
        gross_profit: { x: 1348, y: 576, width: 71, height: 47 },
        merchandise_costs: { x: 1348, y: 750, width: 71, height: 343 },
        operating_profit: { x: 1806, y: 488, width: 70, height: 11 },
        operating_expenses: { x: 1813, y: 682, width: 70, height: 32 },
        interest: { x: 2148, y: 513, width: 70, height: 1 },
        net_profit: { x: 2277, y: 419, width: 71, height: 9 },
        tax: { x: 2277, y: 673, width: 71, height: 2 },
      },
      labels: {
        net_sales: { blocks: [
          { x: 440, top: 473, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
            { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 207, top: 744, anchor: 'middle', lines: [{ text: 'Net Sales', size: 40, weight: 800, color: COSTCO_BLUE }] },
        ] },
        membership_fee: { blocks: [
          { x: 207, top: 1048, anchor: 'middle', lines: [{ text: 'Membership Fee', size: 38, weight: 800, color: COSTCO_BLUE }] },
          { x: 446, top: 1074, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
            { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [{ x: 910, top: 493, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Sales', size: 40, weight: 800, color: COSTCO_BLUE },
          { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
          { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1384, top: 393, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '12% margin', size: 28, weight: 400, color: NOTE },
          { text: '+0.2pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        merchandise_costs: { blocks: [{ x: 1374, top: 1120, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Merchandise', size: 35, weight: 800, color: RED_LABEL },
          { text: 'costs', size: 35, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ] }] },
        operating_profit: { blocks: [{ x: 1841, top: 307, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '3.1% margin', size: 28, weight: 400, color: NOTE },
          { text: '(0.3pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1847, top: 740, anchor: 'middle', lineGap: 8, lines: [
          { text: 'SG&A', size: 35, weight: 800, color: RED_LABEL },
          { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ] }] },
        interest: { blocks: [{ x: 2187, top: 523, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Interest', size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2472, top: 385, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '2.4% margin', size: 28, weight: 400, color: NOTE },
          { text: '(0.2pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2471, top: 646, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 31, weight: 400, color: RED_LABEL },
        ] }] },
      },
    },

    nodes: [
      { id: 'net_sales', col: 0, order: 0, type: 'source', label: 'Net Sales', value: 52.6, valueText: '$52.6B', notes: ['+2% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'membership_fee', col: 0, order: 1, type: 'source', label: 'Membership Fee', value: 1.0, valueText: '$1.0B', notes: ['+6% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Sales', value: 53.6, valueText: '$53.6B', notes: ['+2% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.5, valueText: '$6.5B', notes: ['12% margin', '+0.2pp Y/Y'] },
      { id: 'merchandise_costs', col: 2, order: 1, type: 'cost', label: 'Merchandise costs', value: 47.2, valueText: '($47.2B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.7, valueText: '$1.7B', notes: ['3.1% margin', '(0.3pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'SG&A expenses', value: 4.8, valueText: '($4.8B)' },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.092, valueText: '$92M' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.3, valueText: '$1.3B', notes: ['2.4% margin', '(0.2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.5, valueText: '($0.5B)' },
    ],
    links: [
      { source: 'net_sales', target: 'revenue', value: 52.6, sourceWidth: 386, targetWidth: 386, targetOrder: 0 },
      { source: 'membership_fee', target: 'revenue', value: 1.0, sourceWidth: 6, targetWidth: 6, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 6.5, sourceWidth: 47, targetWidth: 47, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'merchandise_costs', value: 47.2, sourceWidth: 346, targetWidth: 343, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'gross_profit', target: 'operating_profit', value: 1.7, sourceWidth: 11, targetWidth: 11, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.8, sourceWidth: 36, targetWidth: 32, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'net_profit', value: 1.2, sourceWidth: 8, targetWidth: 8, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 3, targetWidth: 2, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'interest', target: 'net_profit', value: 0.092, sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
    ],

    i18n: {
      zh: {
        name: 'Costco · 2023 财年第三季度',
        meta: { title: 'Costco 2023 财年第三季度利润表', period: '2023 财年第三季度', periodNote: '截至 2023 年 4 月', titleTextLength: 1770 },
        annotationsSvg: annotationsZh,
        nodes: {
          net_sales: { label: '净销售额', notes: ['同比 +2%'] },
          membership_fee: { label: '会员费', notes: ['同比 +6%'] },
          revenue: { label: '销售额', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 12%', '同比 +0.2 个百分点'] },
          merchandise_costs: { label: '商品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3.1%', '同比 (0.3 个百分点)'] },
          operating_expenses: { label: '销售、一般及行政费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 2.4%', '同比 (0.2 个百分点)'] },
          tax: { label: '税费' },
        },
      },
    },
  });
})();
