/* ====================================================================
 *  BlackRock - Q4 FY25 income statement ($B)
 *  Reconstructed from input/processed/blackrock-q4-fy25.png as a fixed
 *  d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#737373';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const block = (x, top, anchor, lineGap, lines) => ({
    x,
    top,
    anchor,
    lineGap,
    lines: lines.map(([text, size, weight, color]) => ({
      text,
      size,
      weight,
      ...(color ? { color } : {}),
    })),
  });
  const labels = (...blocks) => ({ blocks });
  const zhLabels = {
    investment_advisory_fees: labels(
      block(444, 366, 'middle', 9, [['$value', 38, 400, BLACK], ['同比 +19%', 29, 400, NOTE]]),
      block(370, 489, 'end', 11, [['投资顾问、费用及', 38, 800, BLACK], ['证券借贷', 38, 800, BLACK]])
    ),
    performance_fees: labels(
      block(444, 711, 'middle', 9, [['$value', 38, 400, BLACK], ['同比 +67%', 29, 400, NOTE]]),
      block(370, 745, 'end', 11, [['投资顾问', 38, 800, BLACK], ['绩效费', 38, 800, BLACK]])
    ),
    technology_services: labels(
      block(444, 875, 'middle', 9, [['$value', 38, 400, BLACK], ['同比 +24%', 29, 400, NOTE]]),
      block(370, 941, 'end', 11, [['技术服务', 38, 800, BLACK]])
    ),
    distribution_fees: labels(
      block(444, 1016, 'middle', 9, [['$value', 38, 400, BLACK], ['同比 +11%', 29, 400, NOTE]]),
      block(370, 1110, 'end', 11, [['分销费用', 38, 800, BLACK]])
    ),
    advisory_other: labels(
      block(444, 1157, 'middle', 9, [['$value', 38, 400, BLACK], ['同比 +46%', 29, 400, NOTE]]),
      block(370, 1237, 'end', 11, [['顾问及其他', 38, 800, BLACK]])
    ),
    revenue: labels(
      block(1066, 510, 'middle', 10, [['收入', 40, 800, BLACK], ['$value', 38, 400, BLACK], ['同比 +23%', 29, 400, NOTE]])
    ),
    operating_profit: labels(
      block(1689, 275, 'middle', 8, [['营业利润', 40, 800, GREEN_LABEL], ['$value', 38, 400, GREEN_LABEL], ['利润率 24%', 29, 400, NOTE], ['同比 -13 个百分点', 29, 400, NOTE]])
    ),
    operating_expenses: labels(
      block(1689, 1084, 'middle', 11, [['运营费用', 38, 800, RED_LABEL], ['$value', 38, 400, RED_LABEL]])
    ),
    net_profit: labels(
      block(2505, 282, 'middle', 9, [['净利润', 40, 800, GREEN_LABEL], ['$value', 38, 400, GREEN_LABEL], ['利润率 18%', 29, 400, NOTE], ['同比 -12 个百分点', 29, 400, NOTE]])
    ),
    tax: labels(
      block(2505, 531, 'middle', 10, [['税费', 33, 800, RED_LABEL], ['$value', 31, 400, RED_LABEL]])
    ),
    other: labels(
      block(2505, 633, 'middle', 10, [['其他', 33, 800, RED_LABEL], ['$value', 31, 400, RED_LABEL]])
    ),
    compensation_benefits: labels(
      block(2506, 805, 'middle', 10, [['薪酬与', 31, 800, RED_LABEL], ['福利', 31, 800, RED_LABEL], ['$value', 31, 400, RED_LABEL]])
    ),
    sales_asset_account_expenses: labels(
      block(2506, 1000, 'middle', 10, [['销售、资产及', 30, 800, RED_LABEL], ['账户费用', 30, 800, RED_LABEL], ['$value', 30, 400, RED_LABEL]])
    ),
    ga: labels(
      block(2506, 1166, 'middle', 10, [['管理费用', 31, 800, RED_LABEL], ['$value', 30, 400, RED_LABEL]])
    ),
    amortization_other: labels(
      block(2506, 1272, 'middle', 10, [['摊销及', 30, 800, RED_LABEL], ['其他', 30, 800, RED_LABEL], ['$value', 30, 400, RED_LABEL]])
    ),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'blackrock-q4-fy25',
    name: 'BlackRock - Q4 FY25',
    company: 'BlackRock',
    meta: {
      company: 'BlackRock',
      title: 'BlackRock Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/blackrock-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2360,
      hidePeriodStamp: true,
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
      titleColor: TITLE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
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

    layout: {
      scale: 41.2,
      nodes: {
        investment_advisory_fees: { x: 408, y: 463, width: 72, height: 217 },
        performance_fees: { x: 408, y: 810, width: 72, height: 29 },
        technology_services: { x: 408, y: 972, width: 72, height: 20 },
        distribution_fees: { x: 408, y: 1115, width: 72, height: 13 },
        advisory_other: { x: 408, y: 1256, width: 72, height: 2 },
        revenue: { x: 1030, y: 662, width: 72, height: 288 },
        cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
        operating_profit: { x: 1653, y: 463, width: 72, height: 68 },
        operating_expenses: { x: 1653, y: 851, width: 72, height: 219 },
        net_profit: { x: 2276, y: 311, width: 72, height: 46 },
        tax: { x: 2276, y: 565, width: 72, height: 12 },
        other: { x: 2276, y: 669, width: 72, height: 3 },
        compensation_benefits: { x: 2276, y: 814, width: 72, height: 105 },
        sales_asset_account_expenses: { x: 2276, y: 1037, width: 72, height: 49 },
        ga: { x: 2276, y: 1184, width: 72, height: 50 },
        amortization_other: { x: 2276, y: 1328, width: 72, height: 8 },
      },
      labels: {
        cost_of_revenue: { blocks: [] },
        gross_profit: { blocks: [] },
        investment_advisory_fees: {
          blocks: [
            {
              x: 444, top: 366, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 489, anchor: 'end', lineGap: 11,
              lines: [
                { text: 'Investment', size: 38, weight: 800, color: BLACK },
                { text: 'advisory, fees &', size: 38, weight: 800, color: BLACK },
                { text: 'securities lending', size: 38, weight: 800, color: BLACK },
              ],
            },
          ],
        },
        performance_fees: {
          blocks: [
            {
              x: 444, top: 711, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+67% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 745, anchor: 'end', lineGap: 11,
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
              x: 444, top: 875, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+24% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 941, anchor: 'end', lineGap: 11,
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
              x: 444, top: 1016, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 1110, anchor: 'end',
              lines: [{ text: 'Distribution fees', size: 38, weight: 800, color: BLACK }],
            },
          ],
        },
        advisory_other: {
          blocks: [
            {
              x: 444, top: 1157, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+46% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 1237, anchor: 'end',
              lines: [{ text: 'Advisory & other', size: 38, weight: 800, color: BLACK }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1066, top: 510, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: BLACK },
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1689, top: 275, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '24% margin', size: 29, weight: 400, color: NOTE },
                { text: '(13pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1689, top: 1084, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Operating', size: 38, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 38, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2505, top: 282, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net income', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '18% margin', size: 29, weight: 400, color: NOTE },
                { text: '(12pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2505, top: 531, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Tax', size: 33, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2505, top: 633, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Other', size: 33, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        compensation_benefits: {
          blocks: [
            {
              x: 2506, top: 805, anchor: 'middle', lineGap: 10,
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
              x: 2506, top: 1000, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Sales, asset &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'Account expenses', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2506, top: 1166, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'G&A', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        amortization_other: {
          blocks: [
            {
              x: 2506, top: 1272, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Amortization &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'investment_advisory_fees', col: 0, order: 0, type: 'source', label: ['Investment advisory,', 'fees & securities lending'], value: 5.3, notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'performance_fees', col: 0, order: 1, type: 'source', label: ['Investment advisory', 'performance fees'], value: 0.8, notes: ['+67% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'technology_services', col: 0, order: 2, type: 'source', label: 'Technology services', value: 0.5, notes: ['+24% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'distribution_fees', col: 0, order: 3, type: 'source', label: 'Distribution fees', value: 0.4, notes: ['+11% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'advisory_other', col: 0, order: 4, type: 'source', label: 'Advisory & other', value: 0.1, notes: ['+46% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 7.0, notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'cost_of_revenue', col: 4, order: 98, type: 'cost', label: '', value: 0, color: 'transparent', labelColor: 'transparent', linkTint: 'transparent' },
      { id: 'gross_profit', col: 4, order: 99, type: 'profit', label: '', value: 7.0, color: 'transparent', labelColor: 'transparent', linkTint: 'transparent' },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 1.7, notes: ['24% margin', '(13pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 3, order: 0, type: 'profit', label: 'Net income', value: 1.2, notes: ['18% margin', '(12pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 3, order: 1, type: 'cost', label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 3, order: 2, type: 'cost', label: 'Other', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'compensation_benefits', col: 3, order: 3, type: 'cost', label: ['Compensation &', 'benefits'], value: 2.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_asset_account_expenses', col: 3, order: 4, type: 'cost', label: ['Sales, asset &', 'Account expenses'], value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 3, order: 5, type: 'cost', label: 'G&A', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization_other', col: 3, order: 6, type: 'cost', label: ['Amortization &', 'other'], value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'investment_advisory_fees', target: 'revenue', value: 5.3, sourceWidth: 217, targetWidth: 217, sourceOrder: 0, targetOrder: 0 },
      { source: 'performance_fees', target: 'revenue', value: 0.8, sourceWidth: 29, targetWidth: 29, sourceOrder: 0, targetOrder: 1 },
      { source: 'technology_services', target: 'revenue', value: 0.5, sourceWidth: 20, targetWidth: 20, sourceOrder: 0, targetOrder: 2 },
      { source: 'distribution_fees', target: 'revenue', value: 0.4, sourceWidth: 13, targetWidth: 14, sourceOrder: 0, targetOrder: 3 },
      { source: 'advisory_other', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 8, sourceOrder: 0, targetOrder: 4 },

      { source: 'revenue', target: 'operating_profit', value: 1.7, sourceWidth: 68, targetWidth: 68, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 5.3, sourceWidth: 219, targetWidth: 219, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 1.2, sourceWidth: 48, targetWidth: 46, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 15, targetWidth: 12, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.1, sourceWidth: 5, targetWidth: 3, sourceOrder: 2, targetOrder: 0 },

      { source: 'operating_expenses', target: 'compensation_benefits', value: 2.6, sourceWidth: 105, targetWidth: 105, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_asset_account_expenses', value: 1.2, sourceWidth: 49, targetWidth: 49, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 1.3, sourceWidth: 50, targetWidth: 50, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization_other', value: 0.3, sourceWidth: 15, targetWidth: 8, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'BlackRock · 2025 财年第四季度',
        meta: {
          title: 'BlackRock 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
        },
        nodes: {
          investment_advisory_fees: { label: '投资顾问、费用及证券借贷', notes: ['同比 +19%'] },
          performance_fees: { label: '投资顾问绩效费', notes: ['同比 +67%'] },
          technology_services: { label: '技术服务', notes: ['同比 +24%'] },
          distribution_fees: { label: '分销费用', notes: ['同比 +11%'] },
          advisory_other: { label: '顾问及其他', notes: ['同比 +46%'] },
          revenue: { label: '收入', notes: ['同比 +23%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 24%', '同比 -13 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 18%', '同比 -12 个百分点'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          compensation_benefits: { label: '薪酬与福利' },
          sales_asset_account_expenses: { label: '销售、资产及账户费用' },
          ga: { label: '管理费用' },
          amortization_other: { label: '摊销及其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
