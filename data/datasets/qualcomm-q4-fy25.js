/* ====================================================================
 * Qualcomm - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/qualcomm-q4-fy25.png as a fixed
 * d3-sankey layout with reusable SVG Qualcomm annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const BLUE = '#3454d6';
  const BLUE_LINK = '#96a7e1';
  const GREEN = '#27a428';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcf99';
  const RED = '#d90000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e38284';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${svgIcon('qualcommHandsetsPhone', 174, 531, 50, 91, '0 0 67 90')}
      ${svgIcon('qualcommAutomotiveCar', 148, 787, 103, 85, '0 0 124 102')}
      ${svgIcon('qualcommIotCluster', 153, 980, 98, 96, '0 0 114 112')}

      <g transform="translate(149 1238)">
        <rect x="0" y="0" width="467" height="113" rx="24" fill="${BLUE}"/>
        <text x="40" y="44" font-size="31" font-weight="800" textLength="383" lengthAdjust="spacingAndGlyphs" fill="#ffffff">QCT: CDMA Technologies</text>
        <text x="40" y="86" font-size="31" font-weight="800" textLength="392" lengthAdjust="spacingAndGlyphs" fill="#ffffff">QTL: Technology Licensing</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'qualcomm-q4-fy25',
    name: 'Qualcomm · Q4 FY25',
    company: 'Qualcomm',
    meta: {
      company: 'Qualcomm',
      title: 'Qualcomm Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/qualcomm-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2360,
      periodX: 2425,
      periodY: 267,
      periodNoteY: 321,
      logoWidth: 540,
      logoHeight: 126,
      logoY: 262,
      logoViewBox: '0 0 540 126',
      logoSvg: BUSINESS_ICONS.qualcommCompanyWordmark || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 27.2,
      nodes: {
        handsets: { x: 363, y: 529, width: 72, height: 189 },
        automotive: { x: 363, y: 894, width: 72, height: 27 },
        iot: { x: 363, y: 1069, width: 72, height: 48 },
        qct: { x: 737, y: 606, width: 72, height: 267 },
        qtl: { x: 737, y: 1106, width: 72, height: 38 },
        other_revenue: { x: 737, y: 1303, width: 72, height: 1 },
        revenue: { x: 1110, y: 708, width: 72, height: 307 },
        gross_profit: { x: 1482, y: 605, width: 72, height: 168 },
        cost_of_revenue: { x: 1479, y: 1007, width: 72, height: 137 },
        operating_profit: { x: 1858, y: 491, width: 72, height: 78 },
        operating_expenses: { x: 1860, y: 789, width: 73, height: 90 },
        net_loss: { x: 2056, y: 591, width: 72, height: 84 },
        other_non_operating: { x: 2232, y: 448, width: 72, height: 164 },
        rnd: { x: 2232, y: 825, width: 72, height: 64 },
        sga: { x: 2232, y: 1092, width: 72, height: 24 },
        other_opex: { x: 2232, y: 1324, width: 72, height: 1 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: {
        handsets: {
          blocks: [
            {
              x: 399, top: 430, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 192, top: 654, anchor: 'middle',
              lines: [{ text: 'Handsets', size: 40, weight: 800 }],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 399, top: 802, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 192, top: 895, anchor: 'middle',
              lines: [{ text: 'Automotive', size: 40, weight: 800 }],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 399, top: 980, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 193, top: 1084, anchor: 'middle',
              lines: [{ text: 'IoT', size: 40, weight: 800 }],
            },
          ],
        },
        qct: {
          blocks: [
            {
              x: 773, top: 424, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'QCT', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+13% Y/Y', size: 28, weight: 400, color: NOTE },
                { text: '30% EBIT margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        qtl: {
          blocks: [
            {
              x: 773, top: 927, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'QTL', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(7%) Y/Y', size: 28, weight: 400, color: NOTE },
                { text: '72% EBIT margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 773, top: 1198, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Other', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1146, top: 565, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1518, top: 423, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '55% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1515, top: 1167, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1894, top: 309, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '27% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1896, top: 900, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'Expenses', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        net_loss: {
          blocks: [
            {
              x: 2092, top: 700, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net loss', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        other_non_operating: {
          blocks: [
            {
              x: 2450, top: 488, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2450, top: 827, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '21% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2450, top: 1069, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '8% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2450, top: 1292, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '($39M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        tax: { blocks: [] },
      },
    },

    nodes: [
      { id: 'handsets', col: 0, order: 0, type: 'source', label: 'Handsets', value: 7.0, valueText: '$7.0B', notes: ['+14% Y/Y'] },
      { id: 'automotive', col: 0, order: 1, type: 'source', label: 'Automotive', value: 1.1, notes: ['+17% Y/Y'] },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'IoT', value: 1.8, notes: ['+7% Y/Y'] },
      { id: 'qct', col: 1, order: 0, type: 'source', label: 'QCT', value: 9.8, notes: ['+13% Y/Y', '30% EBIT margin'] },
      { id: 'qtl', col: 1, order: 1, type: 'source', label: 'QTL', value: 1.4, notes: ['(7%) Y/Y', '72% EBIT margin'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0.04, valueText: '$40M' },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 11.3, notes: ['+10% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 6.2, notes: ['55% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.0, valueText: '($5.0B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.9, notes: ['27% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 3.3 },
      { id: 'net_loss', col: 5, order: 0, type: 'cost', label: 'Net loss', value: -3.1, valueText: '($3.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_non_operating', col: 6, order: 0, type: 'cost', label: 'Other', value: 6.0, valueText: '($6.0B)' },
      { id: 'rnd', col: 6, order: 1, type: 'cost', label: 'R&D', value: 2.4, notes: ['21% of revenue', '(1pp) Y/Y'] },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 0.9, notes: ['8% of revenue', '+1pp Y/Y'] },
      { id: 'other_opex', col: 6, order: 3, type: 'cost', label: 'Other', value: 0.039, valueText: '($39M)' },
      { id: 'tax', col: 6, order: 4, type: 'cost', label: 'Tax', value: 0, valueText: '' },
    ],

    links: [
      { source: 'handsets', target: 'qct', value: 7.0, width: 189, targetOrder: 0 },
      { source: 'automotive', target: 'qct', value: 1.1, width: 27, targetOrder: 1 },
      { source: 'iot', target: 'qct', value: 1.8, width: 48, targetOrder: 2 },
      { source: 'qct', target: 'revenue', value: 9.8, width: 267, targetOrder: 0 },
      { source: 'qtl', target: 'revenue', value: 1.4, width: 38, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.04, width: 1, targetOrder: 2, y0: 1303.5, y1: 1014.5, curve: { c1x: 890, c1y: 1303.5, c2x: 1015, c2y: 1014.5 } },
      { source: 'revenue', target: 'gross_profit', value: 6.2, width: 168, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.0, width: 137, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.9, width: 78, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.3, width: 90, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_non_operating', value: 2.9, width: 78, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'net_loss', target: 'other_non_operating', value: 3.1, width: 84, sourceOrder: 0, targetOrder: 1, y0: 633, y1: 570, linkTint: RED_LINK, curve: { c1x: 2160, c1y: 633, c2x: 2188, c2y: 570 } },
      { source: 'operating_expenses', target: 'rnd', value: 2.4, width: 64, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.9, width: 24, targetOrder: 1 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.039, width: 1, targetOrder: 2, y0: 878.5, y1: 1324.5, curve: { c1x: 1950, c1y: 878.5, c2x: 2130, c2y: 1324.5 } },
    ],

    i18n: {
      zh: {
        name: 'Qualcomm · 2025 财年第四季度',
        meta: {
          title: 'Qualcomm 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 9 月',
        },
        nodes: {
          handsets: { label: '手机', notes: ['同比 +14%'] },
          automotive: { label: '汽车', notes: ['同比 +17%'] },
          iot: { label: '物联网', notes: ['同比 +7%'] },
          qct: { label: 'QCT', notes: ['同比 +13%', 'EBIT 利润率 30%'] },
          qtl: { label: 'QTL', notes: ['同比 (7%)', 'EBIT 利润率 72%'] },
          other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_loss: { label: '净亏损' },
          other_non_operating: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 21%', '同比 (1 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 8%', '同比 +1 个百分点'] },
          other_opex: { label: '其他' },
          tax: { label: '税费' },
        },
        layout: {
          labels: {
            net_loss: {
              blocks: [
                {
                  x: 2092, top: 700, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '净亏损', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
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
