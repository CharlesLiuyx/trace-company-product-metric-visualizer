/* ====================================================================
 * Costco - Q1 FY23 income statement ($B)
 * Reconstructed from input/processed/costco-q1-fy23.png as a fixed
 * d3-sankey layout with reusable SVG Costco logo/member-card annotations.
 * ==================================================================== */
(function () {
  const COSTCO_BLUE = '#005daa';
  const SALES_BLUE = '#0071cd';
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

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const kpiCard = (x, width, lines, fontFamily = 'Noto Sans,Arial,sans-serif') => `
    <g>
      <rect x="${x}" y="1251" width="${width}" height="139" rx="24" fill="${KPI_BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1293 + index * 37}" text-anchor="middle"
          font-family="${fontFamily}" font-size="${index === 2 ? 28 : 29}"
          font-weight="${index === 2 ? 500 : 800}" fill="#ffffff">${line}</text>
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
        <g fill="#0060a9">
          <rect x="6" y="55" width="74" height="4"/>
          <rect x="6" y="62" width="83" height="4"/>
          <rect x="6" y="69" width="91" height="4"/>
        </g>
        <path d="M72 65l6 15h16l-13 9 5 15-14-9-13 9 5-15-13-9h16z" fill="#f8b21a"/>
        <text x="73" y="84" text-anchor="middle" font-family="Arial,'Microsoft YaHei',sans-serif" font-size="13" font-weight="800" fill="#e31837">金星会员</text>
      </g>
      <g transform="translate(168 0)">
        <rect x="0" y="5" width="145" height="96" rx="8" fill="#070707" stroke="#2e2e2e" stroke-width="1.4"/>
        <g fill="none" stroke="#c9a24c" stroke-width="2" opacity="0.92">
          <ellipse cx="72" cy="53" rx="55" ry="27"/>
          <ellipse cx="72" cy="53" rx="31" ry="53" transform="rotate(33 72 53)"/>
          <ellipse cx="72" cy="53" rx="31" ry="53" transform="rotate(-33 72 53)"/>
          <line x1="12" y1="53" x2="132" y2="53"/>
        </g>
        <text x="32" y="40" font-family="Arial Black, Arial, sans-serif" font-size="23" font-style="italic" font-weight="900"
          fill="#e31837" stroke="#ffffff" stroke-width="2" paint-order="stroke">COSTCO</text>
        <text x="49" y="56" font-family="Arial Black, Arial, sans-serif" font-size="14" font-style="italic" font-weight="900"
          fill="#0060a9" stroke="#ffffff" stroke-width="1.4" paint-order="stroke">WHOLESALE</text>
        <text x="72" y="82" text-anchor="middle" font-family="Arial,'Microsoft YaHei',sans-serif" font-size="13" font-weight="800" fill="#f6d37a">行政会员</text>
      </g>
    </g>`;

  const annotations = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${icon('costcoCompanyWordmark', 585, 272, 1)}
      ${icon('costcoMembershipCards', 58, 1107, 1)}
      ${kpiCard(37, 273, ['US Comp sales', '+9.3%'])}
      ${kpiCard(320, 328, ['Company Comp sales', '+6.6%'])}
      ${kpiCard(660, 213, ['E-commerce', '-3.7%'])}
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${icon('costcoCompanyWordmark', 585, 272, 1)}
      ${membershipCardsZh(58, 1107)}
      ${kpiCard(37, 273, ['美国可比销售额', '+9.3%'], "Noto Sans,Arial,'Microsoft YaHei',sans-serif")}
      ${kpiCard(320, 328, ['公司可比销售额', '+6.6%'], "Noto Sans,Arial,'Microsoft YaHei',sans-serif")}
      ${kpiCard(660, 213, ['电子商务', '-3.7%'], "Noto Sans,Arial,'Microsoft YaHei',sans-serif")}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'costco-q1-fy23',
    name: 'Costco · Q1 FY23',
    company: 'Costco',
    meta: {
      company: 'Costco',
      title: 'Costco Q1 FY23 Income Statement',
      period: 'Q1 FY23',
      periodNote: 'Ending November 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/costco-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 194,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2131,
      periodX: 2249,
      periodY: 254,
      periodNoteY: 302,
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
        source: { node: COSTCO_BLUE, label: COSTCO_BLUE },
        hub: { node: SALES_BLUE, label: SALES_BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 7.34,
      nodes: {
        net_sales: { x: 409, y: 556, width: 72, height: 392 },
        membership_fee: { x: 409, y: 1125, width: 72, height: 6 },
        revenue: { x: 876, y: 637, width: 72, height: 400 },
        gross_profit: { x: 1323, y: 583, width: 72, height: 47 },
        merchandise_costs: { x: 1330, y: 753, width: 72, height: 351 },
        operating_profit: { x: 1806, y: 493, width: 72, height: 11 },
        operating_expenses: { x: 1811, y: 677, width: 72, height: 34 },
        interest: { x: 2152, y: 526, width: 72, height: 1 },
        net_profit: { x: 2277, y: 424, width: 72, height: 9 },
        tax: { x: 2277, y: 677, width: 72, height: 1 },
      },
      labels: {
        net_sales: { blocks: [
          { x: 440, top: 465, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
            { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 207, top: 731, anchor: 'middle', lines: [
            { text: 'Net Sales', size: 40, weight: 800, color: COSTCO_BLUE },
          ] },
        ] },
        membership_fee: { blocks: [
          { x: 207, top: 1047, anchor: 'middle', lines: [
            { text: 'Membership Fee', size: 38, weight: 800, color: COSTCO_BLUE },
          ] },
          { x: 443, top: 1032, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
            { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [
          { x: 908, top: 493, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Sales', size: 40, weight: 800, color: SALES_BLUE },
            { text: '$value', size: 39, weight: 400, color: SALES_BLUE },
            { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        gross_profit: { blocks: [
          { x: 1361, top: 398, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
            { text: '12% margin', size: 28, weight: 400, color: NOTE },
            { text: '(0.5pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        merchandise_costs: { blocks: [
          { x: 1365, top: 1127, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Merchandise', size: 35, weight: 800, color: RED_LABEL },
            { text: 'costs', size: 35, weight: 800, color: RED_LABEL },
            { text: '$value', size: 35, weight: 400, color: RED_LABEL },
          ] },
        ] },
        operating_profit: { blocks: [
          { x: 1842, top: 309, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
            { text: '3.2% margin', size: 28, weight: 400, color: NOTE },
            { text: '(0.2pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        operating_expenses: { blocks: [
          { x: 1847, top: 731, anchor: 'middle', lineGap: 8, lines: [
            { text: 'SG&A', size: 35, weight: 800, color: RED_LABEL },
            { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
            { text: '$value', size: 35, weight: 400, color: RED_LABEL },
          ] },
        ] },
        interest: { blocks: [
          { x: 2187, top: 548, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Interest', size: 31, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
          ] },
        ] },
        net_profit: { blocks: [
          { x: 2472, top: 384, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
            { text: '2.5% margin', size: 28, weight: 400, color: NOTE },
            { text: '(0.1pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        tax: { blocks: [
          { x: 2446, top: 658, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ] },
        ] },
      },
    },

    nodes: [
      { id: 'net_sales', col: 0, order: 0, type: 'source', label: 'Net Sales', value: 53.4, notes: ['+8% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'membership_fee', col: 0, order: 1, type: 'source', label: 'Membership Fee', value: 1.0, valueText: '$1.0B', notes: ['+6% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Sales', value: 54.4, notes: ['+8% Y/Y'], color: SALES_BLUE, labelColor: SALES_BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.7, notes: ['12% margin', '(0.5pp) Y/Y'] },
      { id: 'merchandise_costs', col: 2, order: 1, type: 'cost', label: 'Merchandise costs', value: 47.8 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.8, notes: ['3.2% margin', '(0.2pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'SG&A expenses', value: 4.9 },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.019, valueText: '$19M' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.4, notes: ['2.5% margin', '(0.1pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
    ],

    links: [
      { source: 'net_sales', target: 'revenue', value: 53.4, sourceWidth: 392, targetWidth: 392, y0: 752, y1: 833, targetOrder: 0 },
      { source: 'membership_fee', target: 'revenue', value: 1.0, sourceWidth: 6, targetWidth: 8, y0: 1128, y1: 1033, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 6.7, sourceWidth: 48, targetWidth: 47, y0: 661, y1: 606.5, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'merchandise_costs', value: 47.8, sourceWidth: 352, targetWidth: 351, y0: 861, y1: 928.5, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'gross_profit', target: 'operating_profit', value: 1.8, sourceWidth: 12, targetWidth: 11, y0: 589, y1: 498.5, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.9, sourceWidth: 35, targetWidth: 34, y0: 612.5, y1: 694, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'net_profit', value: 1.4, sourceWidth: 9, targetWidth: 8, y0: 497.5, y1: 428, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 2, targetWidth: 1, y0: 503, y1: 677.5, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'interest', target: 'net_profit', value: 0.019, sourceWidth: 1, targetWidth: 1, y0: 526.5, y1: 432.5, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
    ],

    i18n: {
      zh: {
        name: 'Costco · 2023 财年第一季度',
        meta: {
          title: 'Costco 2023 财年第一季度利润表',
          period: '2023 财年第一季度',
          periodNote: '截至 2022 年 11 月',
          titleTextLength: 1770,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          net_sales: { label: '净销售额', notes: ['同比 +8%'] },
          membership_fee: { label: '会员费', notes: ['同比 +6%'] },
          revenue: { label: '销售额', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 12%', '同比 (0.5 个百分点)'] },
          merchandise_costs: { label: '商品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3.2%', '同比 (0.2 个百分点)'] },
          operating_expenses: { label: '销售、一般及行政费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 2.5%', '同比 (0.1 个百分点)'] },
          tax: { label: '税费' },
        },
      },
    },
  });
})();
