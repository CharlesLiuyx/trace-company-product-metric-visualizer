/* ====================================================================
 * Costco - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/costco-q3-fy25.png as a fixed
 * d3-sankey layout with reusable SVG Costco logo/member-card annotations.
 * ==================================================================== */
(function () {
  const COSTCO_BLUE = '#005daa';
  const BLUE_LINK = '#85afd2';
  const KPI_BLUE = '#005daa';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const OTHER_FACE = '#c2dcc2';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1215" width="${width}" height="139" rx="24" fill="${KPI_BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1257 + index * 37}" text-anchor="middle"
          font-family="Noto Sans,Arial,sans-serif" font-size="${index === 2 ? 28 : 29}"
          font-weight="${index === 2 ? 500 : 700}" fill="#ffffff">${line}</text>
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
      ${icon('costcoCompanyWordmark', 560, 235, 1)}
      ${icon('costcoMembershipCards', 45, 1095, 1)}
      ${kpiCard(37, 273, ['Adj. US', 'Comp sales', '+7.9% Y/Y'])}
      ${kpiCard(320, 328, ['Adj. Company', 'Comp sales', '+8.0% Y/Y'])}
      ${kpiCard(660, 213, ['Adj.', 'E-commerce', '+15.7% Y/Y'])}
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${icon('costcoCompanyWordmark', 560, 235, 1)}
      ${membershipCardsZh(45, 1095)}
      ${kpiCard(37, 273, ['调整后美国', '可比销售额', '同比 +7.9%'])}
      ${kpiCard(320, 328, ['调整后公司', '可比销售额', '同比 +8.0%'])}
      ${kpiCard(660, 213, ['调整后', '电子商务', '同比 +15.7%'])}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'costco-q3-fy25',
    name: 'Costco · Q3 FY25',
    company: 'Costco',
    meta: {
      company: 'Costco',
      title: 'Costco Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending May 2025',
      currency: '$',
      unit: 'B',
      decimals: 2,
      referenceImage: { src: 'input/processed/costco-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 194,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2133,
      periodX: 1006,
      periodY: 1282,
      periodNoteY: 1325,
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
        hub: { node: COSTCO_BLUE, label: COSTCO_BLUE },
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
      scale: 5.95,
      nodes: {
        net_sales: { x: 404, y: 529, width: 71, height: 369 },
        membership_fee: { x: 404, y: 1102, width: 71, height: 7.1 },
        revenue: { x: 871, y: 644, width: 70, height: 376.1 },
        gross_profit: { x: 1338, y: 532, width: 71, height: 47 },
        merchandise_costs: { x: 1338, y: 776, width: 71, height: 326 },
        operating_profit: { x: 1803, y: 432, width: 70, height: 14 },
        operating_expenses: { x: 1806, y: 662, width: 70, height: 31 },
        other: { x: 2156, y: 389, width: 70, height: 3 },
        net_profit: { x: 2272, y: 329, width: 71, height: 9 },
        tax: { x: 2272, y: 539, width: 71, height: 4.2 },
      },
      labels: {
        net_sales: {
          blocks: [
            {
              x: 434, top: 435, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
                { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 207, top: 694, anchor: 'middle',
              lines: [{ text: 'Net Sales', size: 31, weight: 800, textLength: 177, color: COSTCO_BLUE }],
            },
          ],
        },
        membership_fee: {
          blocks: [
            {
              x: 190, top: 1041, anchor: 'middle',
              lines: [{ text: 'Membership Fee', size: 38, weight: 800, color: COSTCO_BLUE }],
            },
            {
              x: 439, top: 1007, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
                { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 903, top: 501, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: COSTCO_BLUE },
                { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
                { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1374, top: 347, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '13.0% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0.4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        merchandise_costs: {
          blocks: [
            {
              x: 1374, top: 1121, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Merchandise', size: 35, weight: 800, color: RED_LABEL },
                { text: 'costs', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1841, top: 248, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '4.0% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0.3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1835, top: 716, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 35, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2191, top: 405, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2463, top: 289, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '3.0% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0.1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2461, top: 520, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'net_sales', col: 0, order: 0, type: 'source', label: 'Net Sales', value: 62.0, valueText: '$62.0B', notes: ['+8% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'membership_fee', col: 0, order: 1, type: 'source', label: 'Membership Fee', value: 1.2, valueText: '$1.2B', notes: ['+10% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 63.2, valueText: '$63.2B', notes: ['+8% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 8.2, valueText: '$8.2B', notes: ['13.0% margin', '+0.4pp Y/Y'] },
      { id: 'merchandise_costs', col: 2, order: 1, type: 'cost', label: 'Merchandise costs', value: 55.0, valueText: '($55.0B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.5, valueText: '$2.5B', notes: ['4.0% margin', '+0.3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'SG&A expenses', value: 5.7, valueText: '($5.7B)' },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.05, valueText: '$50M', color: OTHER_FACE, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.9, valueText: '$1.9B', notes: ['3.0% margin', '+0.1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.7, valueText: '($0.7B)' },
    ],

    links: [
      { source: 'net_sales', target: 'revenue', value: 62.0, targetOrder: 0 },
      { source: 'membership_fee', target: 'revenue', value: 1.2, sourceWidth: 6, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 8.2, sourceOrder: 0, targetOrder: 0, sourceWidth: 47, targetWidth: 47, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'merchandise_costs', value: 55.0, sourceOrder: 1, targetOrder: 0, sourceWidth: 329, targetWidth: 326, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'gross_profit', target: 'operating_profit', value: 2.5, sourceOrder: 0, targetOrder: 0, sourceWidth: 14, targetWidth: 14, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.7, sourceOrder: 1, targetOrder: 0, sourceWidth: 33, targetWidth: 31, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceOrder: 0, targetOrder: 0, sourceWidth: 10, targetWidth: 8.7, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceOrder: 1, targetOrder: 0, sourceWidth: 4, targetWidth: 4.2, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'other', target: 'net_profit', value: 0.05, sourceOrder: 0, targetOrder: 1, sourceWidth: 3, targetWidth: 0.3, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
    ],

    i18n: {
      zh: {
        name: 'Costco · 2025 财年第三季度',
        meta: {
          title: 'Costco 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 5 月',
          titleTextLength: 1770,
          periodX: 1055,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          net_sales: { label: '净销售额', notes: ['同比 +8%'] },
          membership_fee: { label: '会员费', notes: ['同比 +10%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 13.0%', '同比 +0.4 个百分点'] },
          merchandise_costs: { label: '商品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4.0%', '同比 +0.3 个百分点'] },
          operating_expenses: { label: '销售、一般及行政费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 3.0%', '同比 +0.1 个百分点'] },
          tax: { label: '税费' },
        },
      },
    },
  });
})();
