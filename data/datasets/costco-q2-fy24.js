/* ====================================================================
 * Costco - Q2 FY24 income statement ($B)
 * Reconstructed from input/processed/costco-q2-fy24.png as a fixed
 * d3-sankey layout with reusable SVG Costco logo/member-card annotations.
 * ==================================================================== */
(function () {
  const COSTCO_BLUE = '#0060a9';
  const BLUE_LINK = '#84b1d2';
  const KPI_BLUE = '#0060aa';
  const TITLE = '#15527a';
  const NOTE = '#6b6b6b';
  const GREEN = '#25a126';
  const GREEN_LABEL = '#008c45';
  const GREEN_LINK = '#9ccd9a';
  const RED = '#d60000';
  const RED_LABEL = '#9d1908';
  const RED_LINK = '#e28484';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const kpiCard = (x, width, lines, fontFamily = 'Montserrat,Arial,sans-serif') => `
    <g>
      <rect x="${x}" y="1250" width="${width}" height="141" rx="24" fill="${KPI_BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1301 + index * 42}" text-anchor="middle"
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
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('costcoCompanyWordmark', 560, 235)}
      ${icon('costcoMembershipCards', 58, 1103)}
      ${kpiCard(36, 275, ['US Comp sales', '+4.8% Y/Y'])}
      ${kpiCard(319, 330, ['Company Comp sales', '+5.8% Y/Y'])}
      ${kpiCard(659, 214, ['E-commerce', '+18.2% Y/Y'])}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('costcoCompanyWordmark', 560, 235)}
      ${membershipCardsZh(58, 1103)}
      ${kpiCard(36, 275, ['美国可比销售额', '同比 +4.8%'], "Montserrat,Arial,'Microsoft YaHei',sans-serif")}
      ${kpiCard(319, 330, ['公司可比销售额', '同比 +5.8%'], "Montserrat,Arial,'Microsoft YaHei',sans-serif")}
      ${kpiCard(659, 214, ['电子商务', '同比 +18.2%'], "Montserrat,Arial,'Microsoft YaHei',sans-serif")}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'costco-q2-fy24',
    name: 'Costco · Q2 FY24',
    company: 'Costco',
    meta: {
      company: 'Costco',
      title: 'Costco Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Feb. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/costco-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 194,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2165,
      periodX: 2472,
      periodY: 1272,
      periodNoteY: 1315,
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
      scale: 8.45,
      nodes: {
        net_sales: { x: 406, y: 509, width: 71, height: 486 },
        membership_fee: { x: 406, y: 1170, width: 71, height: 7 },
        revenue: { x: 888, y: 619, width: 70, height: 494 },
        gross_profit: { x: 1367, y: 510, width: 71, height: 60 },
        merchandise_costs: { x: 1367, y: 743, width: 71, height: 432 },
        operating_profit: { x: 1832, y: 425, width: 70, height: 15 },
        operating_expenses: { x: 1837, y: 674, width: 70, height: 43 },
        interest: { x: 2129, y: 384, width: 71, height: 1 },
        net_profit: { x: 2273, y: 308, width: 71, height: 12 },
        tax: { x: 2273, y: 598, width: 71, height: 1 },
      },
      labels: {
        net_sales: { blocks: [
          { x: 443, top: 417, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
            { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 207.5, top: 728, anchor: 'middle', lines: [{ text: 'Net Sales', size: 40, weight: 800, textLength: 175, color: COSTCO_BLUE }] },
        ] },
        membership_fee: { blocks: [
          { x: 179.5, top: 1046, anchor: 'middle', lines: [{ text: 'Membership Fee', size: 38, weight: 800, textLength: 261, color: COSTCO_BLUE }] },
          { x: 438, top: 1075, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
            { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [{ x: 923, top: 474, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 40, weight: 800, color: COSTCO_BLUE },
          { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
          { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1403, top: 325, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '12% margin', size: 28, weight: 400, color: NOTE },
          { text: '+0.1pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        merchandise_costs: { blocks: [{ x: 1403, top: 1197, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Merchandise', size: 35, weight: 800, color: RED_LABEL },
          { text: 'costs', size: 35, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ] }] },
        operating_profit: { blocks: [{ x: 1868, top: 240, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '3.5% margin', size: 28, weight: 400, color: NOTE },
          { text: '+0.1pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1869, top: 741, anchor: 'middle', lineGap: 8, lines: [
          { text: 'SG&A', size: 35, weight: 800, color: RED_LABEL },
          { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ] }] },
        interest: { blocks: [{ x: 2164, top: 405, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Interest', size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2460, top: 261, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '3.0% margin', size: 28, weight: 400, color: NOTE },
          { text: '+0.3pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2461, top: 572, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 31, weight: 400, color: RED_LABEL },
        ] }] },
      },
    },

    nodes: [
      { id: 'net_sales', col: 0, order: 0, type: 'source', label: 'Net Sales', value: 57.3, notes: ['+6% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'membership_fee', col: 0, order: 1, type: 'source', label: 'Membership Fee', value: 1.1, notes: ['+8% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 58.4, notes: ['+6% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 7.3, notes: ['12% margin', '+0.1pp Y/Y'] },
      { id: 'merchandise_costs', col: 2, order: 1, type: 'cost', label: 'Merchandise costs', value: 51.1 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.1, notes: ['3.5% margin', '+0.1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'SG&A expenses', value: 5.2 },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.2 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.7, notes: ['3.0% margin', '+0.3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.5 },
    ],

    links: [
      { source: 'net_sales', target: 'revenue', value: 57.3, targetOrder: 0 },
      { source: 'membership_fee', target: 'revenue', value: 1.1, sourceWidth: 7, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 7.3, targetWidth: 60, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'merchandise_costs', value: 51.1, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'gross_profit', target: 'operating_profit', value: 2.1, sourceWidth: 16, targetWidth: 15, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.2, sourceWidth: 44, targetWidth: 43, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, sourceWidth: 12, targetWidth: 11, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 3, targetWidth: 1, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'interest', target: 'net_profit', value: 0.2, sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
    ],

    i18n: {
      zh: {
        name: 'Costco · 2024 财年第二季度',
        meta: {
          title: 'Costco 2024 财年第二季度利润表',
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 2 月',
          titleTextLength: 1770,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          net_sales: { label: '净销售额', notes: ['同比 +6%'] },
          membership_fee: { label: '会员费', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 12%', '同比 +0.1 个百分点'] },
          merchandise_costs: { label: '商品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3.5%', '同比 +0.1 个百分点'] },
          operating_expenses: { label: '销售、一般及行政费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 3.0%', '同比 +0.3 个百分点'] },
          tax: { label: '税费' },
        },
        layout: {
          labels: {
            net_profit: { blocks: [{ x: 2464, top: 261, anchor: 'middle', lineGap: 8, lines: [
              { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
              { text: '利润率 3.0%', size: 28, weight: 400, color: NOTE },
              { text: '同比 +0.3 个百分点', size: 28, weight: 400, color: NOTE },
            ] }] },
          },
        },
      },
    },
  });
})();
