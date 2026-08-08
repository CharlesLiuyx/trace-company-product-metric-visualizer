/* ====================================================================
 *  BlackRock - Q2 FY26 income statement ($B)
 *  Reconstructed from input/processed/blackrock-q2-fy26.png as a fixed
 *  d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#737373';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#990e00';
  const RED_LINK = '#e08585';

  const annotations = `
    <g
      class="sankey-interactive-annotation"
      data-node="other"
      data-link-numerator="other"
      data-link-denominator="net_profit"
      data-link-anchor-x="2238"
      data-link-anchor-y="460"
      font-family="Montserrat,Arial,sans-serif">
      <text x="2127" y="557" font-size="32" font-weight="800" fill="${GREEN_LABEL}">Other</text>
      <text x="2127" y="594" font-size="29" font-weight="500" fill="${GREEN_LABEL}">$0.3B</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'blackrock-q2-fy26',
    name: 'BlackRock - Q2 FY26',
    company: 'BlackRock',
    meta: {
      company: 'BlackRock',
      title: 'BlackRock Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/blackrock-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2360,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 720,
      logoHeight: 134,
      logoY: 310,
      logoViewBox: '0 0 720 134',
      logoSvg: `
        <text x="350" y="125" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="137" font-weight="900" textLength="710" lengthAdjust="spacingAndGlyphs" fill="#000000">BlackRock</text>
        <text x="714" y="121" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="700" fill="#000000">&#174;</text>
      `,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 44.2,
      nodes: {
        investment_advisory_fees: { x: 408, y: 457, width: 72, height: 254 },
        performance_fees: { x: 408, y: 837, width: 72, height: 11 },
        technology_services: { x: 408, y: 982, width: 72, height: 24 },
        distribution_fees: { x: 408, y: 1137, width: 72, height: 15 },
        advisory_other: { x: 408, y: 1279, width: 72, height: 2 },
        revenue: { x: 1030, y: 671, width: 72, height: 314 },
        operating_profit: { x: 1653, y: 517, width: 72, height: 109 },
        operating_expenses: { x: 1653, y: 907, width: 72, height: 205 },
        other: { x: 2129, y: 494, width: 72, height: 9 },
        net_profit: { x: 2276, y: 342, width: 72, height: 90 },
        tax: { x: 2276, y: 647, width: 72, height: 28 },
        compensation_benefits: { x: 2276, y: 783, width: 72, height: 100 },
        sales_asset_account_expenses: { x: 2276, y: 1000, width: 72, height: 57 },
        ga: { x: 2276, y: 1179, width: 72, height: 30 },
        amortization_other: { x: 2276, y: 1328, width: 72, height: 10 },
      },
      labels: {
        other: { blocks: [] },
        investment_advisory_fees: {
          blocks: [
            {
              x: 444, top: 367, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+29% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 519, anchor: 'end', lineGap: 11, semanticRole: 'source-group',
              lines: [
                { text: 'Investment', size: 39, weight: 800, color: BLACK },
                { text: 'advisory, fees &', size: 39, weight: 800, color: BLACK },
                { text: 'securities lending', size: 39, weight: 800, color: BLACK },
              ],
            },
          ],
        },
        performance_fees: {
          blocks: [
            {
              x: 444, top: 747, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+224% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 756, anchor: 'end', lineGap: 11, semanticRole: 'source-group',
              lines: [
                { text: 'Investment', size: 38, weight: 800, color: BLACK },
                { text: 'advisory', size: 38, weight: 800, color: BLACK },
                { text: 'performance fees', size: 38, weight: 800, color: BLACK },
              ],
            },
          ],
        },
        technology_services: {
          blocks: [
            {
              x: 444, top: 891, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 944, anchor: 'end', lineGap: 11, semanticRole: 'source-group',
              lines: [
                { text: 'Technology', size: 38, weight: 800, color: BLACK },
                { text: 'services', size: 38, weight: 800, color: BLACK },
              ],
            },
          ],
        },
        distribution_fees: {
          blocks: [
            {
              x: 444, top: 1038, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 1118, anchor: 'end', semanticRole: 'source-group',
              lines: [{ text: 'Distribution fees', size: 38, weight: 800, color: BLACK }],
            },
          ],
        },
        advisory_other: {
          blocks: [
            {
              x: 444, top: 1187, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+64% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 1258, anchor: 'end', semanticRole: 'source-group',
              lines: [{ text: 'Advisory & other', size: 41, weight: 800, color: BLACK }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1066, top: 526, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: BLACK },
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+31% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1689, top: 335, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '29% margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1689, top: 1128, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 33, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 33, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2505, top: 333, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net income', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '29% margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2505, top: 623, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Tax', size: 33, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        compensation_benefits: {
          blocks: [
            {
              x: 2506, top: 771, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Compensation &', size: 33, weight: 800, color: RED_LABEL },
                { text: 'benefits', size: 33, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sales_asset_account_expenses: {
          blocks: [
            {
              x: 2506, top: 967, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Sales, asset &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'Account expenses', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        amortization_other: {
          blocks: [
            {
              x: 2506, top: 1277, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Amortization &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2506, top: 1150, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'G&A', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nonNodeMetrics: [
      { id: 'cost_of_revenue', representation: 'data-only' },
      { id: 'gross_profit', representation: 'data-only' },
    ],

    nodes: [
      {
        id: 'investment_advisory_fees', col: 0, order: 0, type: 'source',
        label: ['Investment advisory,', 'fees & securities lending'],
        value: 5.7, notes: ['+29% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'performance_fees', col: 0, order: 1, type: 'source',
        label: ['Investment advisory', 'performance fees'],
        value: 0.3, notes: ['+224% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'technology_services', col: 0, order: 2, type: 'source',
        label: 'Technology services',
        value: 0.6, notes: ['+13% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'distribution_fees', col: 0, order: 3, type: 'source',
        label: 'Distribution fees',
        value: 0.4, notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'advisory_other', col: 0, order: 4, type: 'source',
        label: 'Advisory & other',
        value: 0.1, notes: ['+64% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 7.1, notes: ['+31% Y/Y'], color: BLACK, labelColor: BLACK,
      },
      {
        id: 'operating_profit', col: 2, order: 0, type: 'profit',
        label: 'Operating profit', value: 2.5, notes: ['29% margin', '(2pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 2, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 4.6,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other', col: 3, order: 0, type: 'profit',
        label: 'Other', value: 0.3,
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 4, order: 0, type: 'profit',
        label: 'Net income', value: 2.1, notes: ['29% margin', '(2pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 4, order: 1, type: 'cost',
        label: 'Tax', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'compensation_benefits', col: 4, order: 2, type: 'cost',
        label: ['Compensation &', 'benefits'], value: 2.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sales_asset_account_expenses', col: 4, order: 3, type: 'cost',
        label: ['Sales, asset &', 'Account expenses'], value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'amortization_other', col: 4, order: 4, type: 'cost',
        label: ['Amortization &', 'other'], value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 4, order: 5, type: 'cost',
        label: 'G&A', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'investment_advisory_fees', target: 'revenue', value: 5.7, sourceOrder: 0, targetOrder: 0, sourceWidth: 254 },
      { source: 'performance_fees', target: 'revenue', value: 0.3, sourceOrder: 0, targetOrder: 1, sourceWidth: 11 },
      { source: 'technology_services', target: 'revenue', value: 0.6, sourceOrder: 0, targetOrder: 2, sourceWidth: 24 },
      { source: 'distribution_fees', target: 'revenue', value: 0.4, sourceOrder: 0, targetOrder: 3, sourceWidth: 15 },
      { source: 'advisory_other', target: 'revenue', value: 0.1, sourceOrder: 0, targetOrder: 4, sourceWidth: 2 },

      { source: 'revenue', target: 'operating_profit', value: 2.5, sourceOrder: 0, targetOrder: 0, sourceWidth: 109, targetWidth: 109 },
      { source: 'revenue', target: 'operating_expenses', value: 4.6, sourceOrder: 1, targetOrder: 0, sourceWidth: 205, targetWidth: 205 },

      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceOrder: 0, targetOrder: 0, sourceWidth: 80, targetWidth: 80 },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceOrder: 1, targetOrder: 0, sourceWidth: 29, targetWidth: 28 },
      { source: 'other', target: 'net_profit', value: 0.3, sourceOrder: 0, targetOrder: 1, sourceWidth: 9, targetWidth: 10, y0: 498.5, y1: 427, linkTint: GREEN_LINK },

      { source: 'operating_expenses', target: 'compensation_benefits', value: 2.3, sourceOrder: 0, targetOrder: 0, sourceWidth: 100, targetWidth: 100 },
      { source: 'operating_expenses', target: 'sales_asset_account_expenses', value: 1.3, sourceOrder: 1, targetOrder: 0, sourceWidth: 60, targetWidth: 57 },
      { source: 'operating_expenses', target: 'ga', value: 0.7, sourceOrder: 2, targetOrder: 0, sourceWidth: 35, targetWidth: 30 },
      { source: 'operating_expenses', target: 'amortization_other', value: 0.3, sourceOrder: 3, targetOrder: 0, sourceWidth: 10, targetWidth: 10 },
    ],

    i18n: {
      zh: {
        name: 'BlackRock · 2026 财年第二季度',
        meta: {
          title: 'BlackRock 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
        },
        nodes: {
          investment_advisory_fees: { label: '投资顾问、费用及证券借贷', notes: ['同比 +29%'] },
          performance_fees: { label: '投资顾问绩效费', notes: ['同比 +224%'] },
          technology_services: { label: '技术服务', notes: ['同比 +13%'] },
          distribution_fees: { label: '分销费用', notes: ['同比 +23%'] },
          advisory_other: { label: '顾问及其他', notes: ['同比 +64%'] },
          revenue: { label: '收入', notes: ['同比 +31%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 29%', '同比 -2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 29%', '同比 -2 个百分点'] },
          tax: { label: '税费' },
          compensation_benefits: { label: '薪酬与福利' },
          sales_asset_account_expenses: { label: '销售、资产及账户费用' },
          amortization_other: { label: '摊销及其他' },
          ga: { label: '管理费用' },
        },
      },
    },
  });
})();
