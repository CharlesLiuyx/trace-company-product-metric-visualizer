/* ====================================================================
 * Qualcomm - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/qualcomm-q1-fy26.png as a fixed
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
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible" data-typography-role="brand">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${svgIcon('qualcommHandsetsPhone', 174, 472, 50, 91, '0 0 67 90')}
      ${svgIcon('qualcommAutomotiveCar', 148, 787, 103, 85, '0 0 124 102')}
      ${svgIcon('qualcommIotCluster', 153, 1014, 98, 96, '0 0 114 112')}

      <g transform="translate(149 1238)">
        <rect x="0" y="0" width="467" height="113" rx="24" fill="${BLUE}"/>
        <text x="40" y="44" font-size="31" font-weight="800" fill="#ffffff">QCT: CDMA Technologies</text>
        <text x="40" y="86" font-size="31" font-weight="800" fill="#ffffff">QTL: Technology Licensing</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'qualcomm-q1-fy26',
    name: 'Qualcomm · Q1 FY26',
    company: 'Qualcomm',
    meta: {
      company: 'Qualcomm',
      title: 'Qualcomm Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/qualcomm-q1-fy26.png', width: 2667, height: 1500 },
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
      scale: 28.35,
      nodes: {
        handsets: { x: 364, y: 444, width: 71, height: 222 },
        automotive: { x: 364, y: 879, width: 71, height: 30 },
        iot: { x: 364, y: 1101, width: 71, height: 47 },
        qct: { x: 737, y: 583, width: 71, height: 302 },
        qtl: { x: 737, y: 1170, width: 71, height: 44 },
        other_revenue: { x: 737, y: 1369, width: 71, height: 1 },
        revenue: { x: 1111, y: 693, width: 71, height: 348 },
        gross_profit: { x: 1485, y: 581, width: 71, height: 189 },
        cost_of_revenue: { x: 1484, y: 1014, width: 72, height: 159 },
        operating_profit: { x: 1859, y: 487, width: 71, height: 94 },
        operating_expenses: { x: 1858, y: 759, width: 72, height: 93 },
        other_income: { x: 2122, y: 524, width: 70, height: 4 },
        net_profit: { x: 2232, y: 393, width: 71, height: 84 },
        tax: { x: 2232, y: 678, width: 72, height: 14 },
        rnd: { x: 2232, y: 844, width: 72, height: 69 },
        sga: { x: 2232, y: 1153, width: 72, height: 24 },
      },
      labels: {
        handsets: {
          blocks: [
            {
              x: 399, top: 347, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+3% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 192, top: 601, anchor: 'middle',
              lines: [{ text: 'Handsets', size: 40, weight: 800 }],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 399, top: 778, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 192, top: 865, anchor: 'middle',
              lines: [{ text: 'Automotive', size: 40, weight: 800 }],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 399, top: 1000, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 193, top: 1110, anchor: 'middle',
              lines: [{ text: 'IoT', size: 40, weight: 800 }],
            },
          ],
        },
        qct: {
          blocks: [
            {
              x: 773, top: 357, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'QCT', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
                { text: '31%', size: 28, weight: 400, color: NOTE },
                { text: 'EBIT margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        qtl: {
          blocks: [
            {
              x: 773, top: 948, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'QTL', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+4% Y/Y', size: 28, weight: 400, color: NOTE },
                { text: '74%', size: 28, weight: 400, color: NOTE },
                { text: 'EBIT margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 773, top: 1254, anchor: 'middle', lineGap: 10,
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
              x: 1146, top: 522, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1521, top: 352, anchor: 'middle', lineGap: 10,
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
              x: 1520, top: 1189, anchor: 'middle', lineGap: 9,
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
              x: 1895, top: 305, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '27% margin', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1895, top: 879, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2157, top: 554, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2427, top: 397, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '25% margin', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2450, top: 642, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2450, top: 779, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '20% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2450, top: 1081, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '7% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'handsets', col: 0, order: 0, type: 'source', label: 'Handsets', value: 7.8, notes: ['+3% Y/Y'] },
      { id: 'automotive', col: 0, order: 1, type: 'source', label: 'Automotive', value: 1.1, notes: ['+15% Y/Y'] },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'IoT', value: 1.7, notes: ['+9% Y/Y'] },
      { id: 'qct', col: 1, order: 0, type: 'source', label: 'QCT', value: 10.6, notes: ['+5% Y/Y', '31% EBIT margin'] },
      { id: 'qtl', col: 1, order: 1, type: 'source', label: 'QTL', value: 1.6, notes: ['+4% Y/Y', '74% EBIT margin'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0, valueText: '$0.0B' },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 12.3, notes: ['+5% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 6.7, notes: ['55% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.6 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.4, notes: ['27% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.3 },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.2 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 3.0, valueText: '$3.0B', notes: ['25% margin', '(3pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 2.5, notes: ['20% of revenue', '+1pp Y/Y'] },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 0.9, notes: ['7% of revenue', '+1pp Y/Y'] },
    ],

    links: [
      { source: 'handsets', target: 'qct', value: 7.8, targetOrder: 0 },
      { source: 'automotive', target: 'qct', value: 1.1, targetOrder: 1 },
      { source: 'iot', target: 'qct', value: 1.7, targetOrder: 2 },
      { source: 'qct', target: 'revenue', value: 10.6, targetOrder: 0 },
      { source: 'qtl', target: 'revenue', value: 1.6, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0, width: 1, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 6.7, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.6, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.4, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.3, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 2.9, width: 80, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.2, width: 4, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 2.5, width: 69, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.9, width: 24, targetOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'Qualcomm · 2026 财年第一季度',
        meta: {
          title: 'Qualcomm 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 12 月',
        },
        nodes: {
          handsets: { label: '手机', notes: ['同比 +3%'] },
          automotive: { label: '汽车', notes: ['同比 +15%'] },
          iot: { label: '物联网', notes: ['同比 +9%'] },
          qct: { label: 'QCT', notes: ['同比 +5%', 'EBIT 利润率 31%'] },
          qtl: { label: 'QTL', notes: ['同比 +4%', 'EBIT 利润率 74%'] },
          other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 25%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 20%', '同比 +1 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%', '同比 +1 个百分点'] },
        },
        layout: {
          labels: {
            qct: {
              blocks: [
                {
                  x: 773, top: 357, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: 'QCT', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +5%', size: 28, weight: 400, color: NOTE },
                    { text: '31%', size: 28, weight: 400, color: NOTE },
                    { text: 'EBIT 利润率', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            qtl: {
              blocks: [
                {
                  x: 773, top: 948, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: 'QTL', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +4%', size: 28, weight: 400, color: NOTE },
                    { text: '74%', size: 28, weight: 400, color: NOTE },
                    { text: 'EBIT 利润率', size: 28, weight: 400, color: NOTE },
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
