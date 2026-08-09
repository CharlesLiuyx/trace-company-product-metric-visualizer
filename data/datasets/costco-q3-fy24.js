/* Costco Q3 FY24 income statement ($B), reconstructed from the Source as a
 * fixed-layout d3 Sankey. Financial values live in the Costco Metric SSOT. */
(function () {
  'use strict';

  const BLUE = '#005daa';
  const BLUE_LINK = '#85afd2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y})${scale === 1 ? '' : ` scale(${scale})`}" data-typography-role="brand">${ICONS[name] || ''}</g>`;
  const membershipCardsZh = (x, y) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">
      <g>
        <rect x="0" y="5" width="145" height="96" rx="8" fill="#ffffff" stroke="#9ea3a8" stroke-width="1.4"/>
        <text x="15" y="39" font-family="Arial Black, Arial, sans-serif" font-size="29" font-style="italic" font-weight="900" fill="#e31837">COSTCO</text>
        <text x="43" y="58" font-family="Arial Black, Arial, sans-serif" font-size="18" font-style="italic" font-weight="900" fill="#0060a9">WHOLESALE</text>
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
        <text x="32" y="40" font-family="Arial Black, Arial, sans-serif" font-size="23" font-style="italic" font-weight="900" fill="#e31837" stroke="#ffffff" stroke-width="2" paint-order="stroke">COSTCO</text>
        <text x="49" y="56" font-family="Arial Black, Arial, sans-serif" font-size="14" font-style="italic" font-weight="900" fill="#0060a9" stroke="#ffffff" stroke-width="1.4" paint-order="stroke">WHOLESALE</text>
        <text x="72" y="82" text-anchor="middle" font-family="Arial,'Microsoft YaHei',sans-serif" font-size="13" font-weight="800" fill="#f6d37a">行政会员</text>
      </g>
    </g>`;
  const kpi = (x, width, lines, font = "Noto Sans,Arial,sans-serif") => `
    <g data-annotation="kpi">
      <rect x="${x}" y="1251" width="${width}" height="139" rx="25" fill="${BLUE}"/>
      ${lines.map((text, index) => `<text x="${x + width / 2}" y="${1295 + index * 37}"
        text-anchor="middle" font-family="${font}" font-size="${index === 1 ? 29 : 28}"
        font-weight="${index === 1 ? 800 : 500}" fill="#fff">${text}</text>`).join('')}
    </g>`;

  const annotations = `
    <g>
      ${icon('costcoCompanyWordmark', 572, 244, 1)}
      ${icon('costcoMembershipCards', 58, 1105, 1)}
      ${kpi(37, 273, ['US Comp sales', '+6.0% Y/Y'])}
      ${kpi(320, 328, ['Company Comp sales', '+6.5% Y/Y'])}
      ${kpi(660, 213, ['E-commerce', '+20.7% Y/Y'])}
    </g>`;
  const annotationsZh = `
    <g>
      ${icon('costcoCompanyWordmark', 572, 244, 1)}
      ${membershipCardsZh(58, 1105)}
      ${kpi(37, 273, ['美国可比销售额', '同比 +6.0%'], "Noto Sans,'Microsoft YaHei',sans-serif")}
      ${kpi(320, 328, ['公司可比销售额', '同比 +6.5%'], "Noto Sans,'Microsoft YaHei',sans-serif")}
      ${kpi(660, 213, ['电子商务', '同比 +20.7%'], "Noto Sans,'Microsoft YaHei',sans-serif")}
    </g>`;

  const line = (text, size, weight, color) => ({ text, size, weight, color });
  const block = (x, top, lines, lineGap = 8) => ({ x, top, anchor: 'middle', lineGap, lines });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'costco-q3-fy24',
    name: 'Costco · Q3 FY24',
    company: 'Costco',
    meta: {
      company: 'Costco',
      title: 'Costco Q3 FY24 Income Statement',
      period: 'Q3 FY24',
      periodNote: 'Ending Apr. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/costco-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 194,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2160,
      periodX: 2270,
      periodY: 1260,
      periodNoteY: 1304,
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
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 7.5,
      nodes: {
        net_sales: { x: 411, y: 516, width: 72, height: 434 },
        membership_fee: { x: 411, y: 1160, width: 72, height: 6 },
        revenue: { x: 878, y: 625, width: 72, height: 443 },
        gross_profit: { x: 1347, y: 490, width: 72, height: 53 },
        merchandise_costs: { x: 1347, y: 779, width: 72, height: 386 },
        operating_profit: { x: 1813, y: 410, width: 72, height: 15 },
        operating_expenses: { x: 1815, y: 592, width: 72, height: 37 },
        interest: { x: 2153, y: 395, width: 70, height: 3 },
        net_profit: { x: 2279, y: 330, width: 72, height: 11 },
        tax: { x: 2279, y: 538, width: 72, height: 3 },
      },
      labels: {
        net_sales: { blocks: [
          block(444, 414, [line('$value', 39, 400, BLUE), line('+9% Y/Y', 28, 400, NOTE)], 9),
          block(208, 705, [line('Net Sales', 40, 800, BLUE)]),
        ] },
        membership_fee: { blocks: [
          block(212, 1051, [line('Membership Fee', 40, 800, BLUE)]),
          block(447, 1070, [line('$value', 30, 400, BLUE), line('+8% Y/Y', 22, 400, NOTE)], 8),
        ] },
        revenue: { blocks: [block(914, 485, [
          line('Revenue', 40, 800, BLUE), line('$value', 39, 400, BLUE), line('+9% Y/Y', 28, 400, NOTE),
        ], 3)] },
        gross_profit: { blocks: [block(1384, 313, [
          line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
          line('12.5% margin', 28, 400, NOTE), line('+0.5pp Y/Y', 28, 400, NOTE),
        ])] },
        merchandise_costs: { blocks: [block(1386, 1191, [
          line('Merchandise', 35, 800, RED_LABEL), line('costs', 35, 800, RED_LABEL),
          line('$value', 35, 400, RED_LABEL),
        ])] },
        operating_profit: { blocks: [block(1847, 231, [
          line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
          line('3.8% margin', 28, 400, NOTE), line('+0.6pp Y/Y', 28, 400, NOTE),
        ])] },
        operating_expenses: { blocks: [block(1847, 657, [
          line('SG&A', 35, 800, RED_LABEL), line('expenses', 35, 800, RED_LABEL),
          line('$value', 35, 400, RED_LABEL),
        ])] },
        interest: { blocks: [block(2188, 419, [
          line('Interest', 26, 800, GREEN_LABEL), line('$value', 26, 400, GREEN_LABEL),
        ], 2)] },
        net_profit: { blocks: [block(2463, 281, [
          line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
          line('2.9% margin', 28, 400, NOTE), line('+0.5pp Y/Y', 28, 400, NOTE),
        ])] },
        tax: { blocks: [block(2461, 517, [
          line('Tax', 26, 800, RED_LABEL), line('$value', 26, 400, RED_LABEL),
        ], 2)] },
      },
    },
    nodes: [
      { id: 'net_sales', col: 0, order: 0, type: 'source', label: 'Net Sales', value: 57.4, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'membership_fee', col: 0, order: 1, type: 'source', label: 'Membership Fee', value: 1.1, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 58.5, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 7.3, notes: ['12.5% margin', '+0.5pp Y/Y'] },
      { id: 'merchandise_costs', col: 2, order: 1, type: 'cost', label: 'Merchandise costs', value: 51.2 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.2, notes: ['3.8% margin', '+0.6pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'SG&A expenses', value: 5.1 },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.1 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.7, notes: ['2.9% margin', '+0.5pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.6 },
    ],
    links: [
      { source: 'net_sales', target: 'revenue', value: 57.4, sourceWidth: 434, targetWidth: 437, y0: 733, y1: 843.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'membership_fee', target: 'revenue', value: 1.1, sourceWidth: 6, targetWidth: 6, y0: 1163, y1: 1065, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 7.3, sourceWidth: 57, targetWidth: 53, y0: 653.5, y1: 516.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'merchandise_costs', value: 51.2, sourceWidth: 386, targetWidth: 386, y0: 875, y1: 972, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.2, sourceWidth: 18, targetWidth: 15, y0: 499, y1: 417.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.1, sourceWidth: 35, targetWidth: 37, y0: 525.5, y1: 610.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.6, sourceWidth: 12, targetWidth: 10, y0: 416, y1: 335, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 3, targetWidth: 3, y0: 423.5, y1: 539.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'interest', target: 'net_profit', value: 0.1, sourceWidth: 3, targetWidth: 1, y0: 396.5, y1: 340.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
    ],
    i18n: {
      zh: {
        name: 'Costco · 2024 财年第三季度',
        meta: {
          title: 'Costco 2024 财年第三季度利润表',
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 4 月',
          titleTextLength: 1800,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          net_sales: { label: '净销售额', notes: ['同比 +9%'] },
          membership_fee: { label: '会员费', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 12.5%', '同比 +0.5 个百分点'] },
          merchandise_costs: { label: '商品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3.8%', '同比 +0.6 个百分点'] },
          operating_expenses: { label: '销售、一般及行政费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 2.9%', '同比 +0.5 个百分点'] },
          tax: { label: '税费' },
        },
        layout: {
          labels: {
            net_profit: { blocks: [block(2480, 281, [
              line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
              line('利润率 2.9%', 28, 400, NOTE), line('同比 +0.5 个百分点', 28, 400, NOTE),
            ])] },
          },
        },
      },
    },
  });
})();
