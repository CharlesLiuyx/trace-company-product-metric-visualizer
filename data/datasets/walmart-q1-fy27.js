/* ====================================================================
 * Walmart - Q1 FY27 income statement ($B)
 * Reconstructed from input/processed/walmart-q1-fy27.png as a fixed
 * d3-sankey layout with reusable SVG Walmart/Sam's Club annotations.
 * ==================================================================== */
(function () {
  const WALMART_BLUE = '#0071ce';
  const SAMS_BLUE = '#0067a0';
  const BLUE_LINK = '#82b7dc';
  const YELLOW = '#ffc220';
  const YELLOW_LINK = '#f3d987';
  const ORANGE = '#ff7a2a';
  const ORANGE_LINK = '#ffc397';
  const GREEN = '#25a126';
  const GREEN_LABEL = '#009a4b';
  const GREEN_LINK = '#9bce9b';
  const RED = '#d60000';
  const RED_LABEL = '#981100';
  const RED_LINK = '#df8182';
  const NOTE = '#6a6a6a';
  const TITLE = '#15527a';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1195" width="${width}" height="148" rx="28" fill="${WALMART_BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1261 + index * 40}" text-anchor="middle"
          font-size="${index === 0 ? 28 : 27}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('walmartCompanyWordmark', 602, 276, 1)}
      ${icon('samsClubWordmark', 95, 1149, 1)}
      ${kpiCard(1866, 310, ['US comp sales', '+4.1% Y/Y'])}
      ${kpiCard(2187, 355, ['E-commerce +26% Y/Y', 'Advertising +37% Y/Y'])}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'walmart-q1-fy27',
    name: 'Walmart - Q1 FY27',
    company: 'Walmart',
    meta: {
      company: 'Walmart',
      title: 'Walmart Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/walmart-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2275,
      periodX: 2465,
      periodY: 286,
      periodNoteY: 332,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: WALMART_BLUE, label: NOTE },
        hub: { node: WALMART_BLUE, label: WALMART_BLUE },
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
      type: { name: 38, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 2.49,
      nodes: {
        walmart_us: { x: 396, y: 490, width: 72, height: 291.8 },
        walmart_international: { x: 396, y: 925, width: 72, height: 87.4 },
        sams_club: { x: 396, y: 1121, width: 72, height: 58.3 },
        net_sales: { x: 769, y: 597, width: 72, height: 437.5 },
        membership_other: { x: 769, y: 1302, width: 72, height: 5.2 },
        revenue: { x: 1144, y: 690, width: 72, height: 442.7 },
        gross_profit: { x: 1518, y: 603, width: 72, height: 111.3 },
        cost_of_sales: { x: 1518, y: 893, width: 72, height: 331.4 },
        operating_profit: { x: 1889, y: 536, width: 72, height: 18.7 },
        operating_expenses: { x: 1889, y: 694, width: 72, height: 92.6 },
        other_income: { x: 2135, y: 525, width: 72, height: 1.2 },
        net_profit: { x: 2265, y: 431, width: 72, height: 13.7 },
        tax: { x: 2265, y: 630, width: 72, height: 4.2 },
        interest: { x: 2265, y: 779, width: 72, height: 1.5 },
      },
      labels: {
        walmart_us: {
          blocks: [
            {
              x: 432, top: 394, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: WALMART_BLUE },
                { text: '+4% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 202, top: 608, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Walmart US', size: 36, weight: 800, color: NOTE },
                { text: '5% operating margin', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        walmart_international: {
          blocks: [
            {
              x: 432, top: 832, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+18% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 208, top: 900, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Walmart', size: 35, weight: 800, color: NOTE },
                { text: 'International', size: 35, weight: 800, color: NOTE },
                { text: '5% operating margin', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sams_club: {
          blocks: [
            {
              x: 432, top: 1040, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: WALMART_BLUE },
                { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 96, top: 1201, anchor: 'start',
              lines: [
                { text: '3% operating margin', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        net_sales: {
          blocks: [
            {
              x: 806, top: 432, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net Sales', size: 40, weight: 800, color: WALMART_BLUE },
                { text: '$value', size: 38, weight: 400, color: WALMART_BLUE },
                { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        membership_other: {
          blocks: [
            {
              x: 805, top: 1100, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Membership', size: 38, weight: 800, color: NOTE },
                { text: 'and other', size: 38, weight: 800, color: NOTE },
                { text: '$value', size: 38, weight: 400, color: ORANGE },
                { text: '+27% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1180, top: 537, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: WALMART_BLUE },
                { text: '$value', size: 38, weight: 400, color: WALMART_BLUE },
                { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1555, top: 434, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '25% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1554, top: 1262, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of sales', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1926, top: 375, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '4% margin', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1926, top: 812, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 35, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2178, top: 520, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 35, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 34, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2467, top: 360, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '3% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2467, top: 588, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2467, top: 740, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'walmart_us', col: 0, order: 0, type: 'source', label: 'Walmart US', value: 117.2, notes: ['+4% Y/Y', '5% operating margin'], color: WALMART_BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'walmart_international', col: 0, order: 1, type: 'source', label: 'Walmart International', value: 35.1, notes: ['+18% Y/Y', '5% operating margin'], color: YELLOW, labelColor: NOTE, linkTint: YELLOW_LINK },
      { id: 'sams_club', col: 0, order: 2, type: 'source', label: "Sam's Club", value: 23.4, notes: ['+6% Y/Y', '3% operating margin'], color: SAMS_BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'net_sales', col: 1, order: 0, type: 'hub', label: 'Net Sales', value: 175.7, notes: ['+7% Y/Y'], color: WALMART_BLUE, labelColor: WALMART_BLUE, linkTint: BLUE_LINK },
      { id: 'membership_other', col: 1, order: 1, type: 'source', label: 'Membership and other', value: 2.1, notes: ['+27% Y/Y'], color: ORANGE, labelColor: NOTE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 177.8, notes: ['+7% Y/Y'], color: WALMART_BLUE, labelColor: WALMART_BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 44.7, notes: ['25% margin', '+0pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 133.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 7.5, notes: ['4% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 37.2 },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.3 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 5.5, notes: ['3% margin', '+0pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 1.7 },
      { id: 'interest', col: 6, order: 2, type: 'cost', label: 'Interest', value: 0.6 },
    ],

    links: [
      { source: 'walmart_us', target: 'net_sales', value: 117.2, targetOrder: 0 },
      { source: 'walmart_international', target: 'net_sales', value: 35.1, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'sams_club', target: 'net_sales', value: 23.4, targetOrder: 2 },
      { source: 'net_sales', target: 'revenue', value: 175.7, sourceOrder: 0, targetOrder: 0 },
      { source: 'membership_other', target: 'revenue', value: 2.1, sourceOrder: 0, targetOrder: 1, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 44.7, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 133.1, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 7.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 37.2, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 5.2, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.7, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.6, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.3, sourceOrder: 0, targetOrder: 1 },
    ],

    i18n: {
      zh: {
        name: '沃尔玛 · 2027 财年第一季度',
        meta: {
          title: '沃尔玛 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 1770,
        },
        nodes: {
          walmart_us: { label: '沃尔玛美国', notes: ['同比 +4%', '营业利润率 5%'] },
          walmart_international: { label: '沃尔玛国际', notes: ['同比 +18%', '营业利润率 5%'] },
          sams_club: { label: '山姆会员店', notes: ['同比 +6%', '营业利润率 3%'] },
          net_sales: { label: '净销售额', notes: ['同比 +7%'] },
          membership_other: { label: '会员及其他', notes: ['同比 +27%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 25%', '同比 +0 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
        },
      },
    },
  });
})();
