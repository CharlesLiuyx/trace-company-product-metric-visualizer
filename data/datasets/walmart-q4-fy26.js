/* ====================================================================
 * Walmart - Q4 FY26 income statement ($B)
 * Reconstructed from input/processed/walmart-q4-fy26.png as a fixed
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
      ${icon('samsClubWordmark', 95, 1248, 1)}
      ${kpiCard(1866, 310, ['US comp sales', '+4.6% Y/Y'])}
      ${kpiCard(2187, 355, ['E-commerce +24% Y/Y', 'Advertising +37% Y/Y'])}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,'Microsoft YaHei',sans-serif">
      ${icon('walmartCompanyWordmark', 602, 276, 1)}
      ${icon('samsClubWordmark', 95, 1248, 1)}
      ${kpiCard(1866, 310, ['美国可比销售额', '同比 +4.6%'])}
      ${kpiCard(2187, 355, ['电商同比 +24%', '广告同比 +37%'])}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'walmart-q4-fy26',
    name: 'Walmart - Q4 FY26',
    company: 'Walmart',
    meta: {
      company: 'Walmart',
      title: 'Walmart Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/walmart-q4-fy26.png', width: 2667, height: 1500 },
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
      scale: 2.58,
      nodes: {
        walmart_us: { x: 396, y: 503, width: 72, height: 333.3 },
        walmart_international: { x: 396, y: 981, width: 72, height: 92.6 },
        sams_club: { x: 396, y: 1222, width: 72, height: 61.4 },
        net_sales: { x: 770, y: 606, width: 72, height: 487.4 },
        membership_other: { x: 770, y: 1404, width: 72, height: 4.4 },
        revenue: { x: 1144, y: 683, width: 72, height: 492.0 },
        gross_profit: { x: 1518, y: 603, width: 72, height: 121.3 },
        cost_of_sales: { x: 1518, y: 886, width: 72, height: 370.5 },
        operating_profit: { x: 1891, y: 512, width: 72, height: 22.4 },
        operating_expenses: { x: 1891, y: 712, width: 72, height: 98.8 },
        net_profit: { x: 2265, y: 420, width: 72, height: 11.4 },
        other: { x: 2265, y: 648, width: 72, height: 5.4 },
        tax: { x: 2265, y: 766, width: 72, height: 4.1 },
        interest: { x: 2265, y: 881, width: 72, height: 1.5 },
      },
      labels: {
        walmart_us: {
          blocks: [
            {
              x: 432, top: 394, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: WALMART_BLUE },
                { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
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
              x: 432, top: 882, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 208, top: 959, anchor: 'middle', lineGap: 10,
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
              x: 432, top: 1135, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: WALMART_BLUE },
                { text: '+3% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 96, top: 1301, anchor: 'start',
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
                { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        membership_other: {
          blocks: [
            {
              x: 805, top: 1210, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Membership', size: 38, weight: 800, color: NOTE },
                { text: 'and other', size: 38, weight: 800, color: NOTE },
                { text: '$value', size: 38, weight: 400, color: ORANGE },
                { text: '+1% Y/Y', size: 27, weight: 400, color: NOTE },
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
                { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
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
              x: 1554, top: 1264, anchor: 'middle', lineGap: 8,
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
              x: 1926, top: 326, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '5% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1926, top: 835, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 35, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2467, top: 349, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '2% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2467, top: 591, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2467, top: 707, anchor: 'middle', lineGap: 8,
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
              x: 2467, top: 822, anchor: 'middle', lineGap: 8,
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
      { id: 'walmart_us', col: 0, order: 0, type: 'source', label: 'Walmart US', value: 129.2, notes: ['+5% Y/Y', '5% operating margin'], color: WALMART_BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'walmart_international', col: 0, order: 1, type: 'source', label: 'Walmart International', value: 35.9, notes: ['+11% Y/Y', '5% operating margin'], color: YELLOW, labelColor: NOTE, linkTint: YELLOW_LINK },
      { id: 'sams_club', col: 0, order: 2, type: 'source', label: "Sam's Club", value: 23.8, notes: ['+3% Y/Y', '3% operating margin'], color: SAMS_BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'net_sales', col: 1, order: 0, type: 'hub', label: 'Net Sales', value: 188.9, notes: ['+6% Y/Y'], color: WALMART_BLUE, labelColor: WALMART_BLUE, linkTint: BLUE_LINK },
      { id: 'membership_other', col: 1, order: 1, type: 'source', label: 'Membership and other', value: 1.7, notes: ['+1% Y/Y'], color: ORANGE, labelColor: NOTE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 190.7, notes: ['+6% Y/Y'], color: WALMART_BLUE, labelColor: WALMART_BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 47.0, valueText: '$47.0B', notes: ['25% margin', '+0pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 143.6 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 8.7, notes: ['5% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 38.3 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 4.4, notes: ['2% margin', '(1pp) Y/Y'] },
      { id: 'other', col: 6, order: 1, type: 'cost', label: 'Other', value: 2.1 },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 1.6 },
      { id: 'interest', col: 6, order: 3, type: 'cost', label: 'Interest', value: 0.6 },
    ],

    links: [
      { source: 'walmart_us', target: 'net_sales', value: 129.2, targetOrder: 0 },
      { source: 'walmart_international', target: 'net_sales', value: 35.9, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'sams_club', target: 'net_sales', value: 23.8, targetOrder: 2 },
      { source: 'net_sales', target: 'revenue', value: 188.9, sourceOrder: 0, targetOrder: 0 },
      { source: 'membership_other', target: 'revenue', value: 1.7, sourceOrder: 0, targetOrder: 1, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 47.0, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 143.6, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 8.7, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 38.3, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 4.4, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 2.1, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.6, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.6, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ["Sam's Club"],
      zh: {
        name: '沃尔玛 · 2026 财年第四季度',
        meta: {
          title: '沃尔玛 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1770,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          walmart_us: { label: '沃尔玛美国', notes: ['同比 +5%', '营业利润率 5%'] },
          walmart_international: { label: '沃尔玛国际', notes: ['同比 +11%', '营业利润率 5%'] },
          sams_club: { label: '山姆会员店', notes: ['同比 +3%', '营业利润率 3%'] },
          net_sales: { label: '净销售额', notes: ['同比 +6%'] },
          membership_other: { label: '会员及其他', notes: ['同比 +1%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 25%', '同比 +0 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 (1 个百分点)'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          interest: { label: '利息' },
        },
        layout: {
          labels: {
            membership_other: {
              blocks: [
                {
                  x: 805, top: 1210, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '会员', size: 38, weight: 800, color: NOTE },
                    { text: '及其他', size: 38, weight: 800, color: NOTE },
                    { text: '$value', size: 38, weight: 400, color: ORANGE },
                    { text: '同比 +1%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();
