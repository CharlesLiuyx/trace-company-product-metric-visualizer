/* ====================================================================
 * Qualcomm - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/qualcomm-q3-fy26.png as a fixed
 * d3-sankey layout with reusable SVG Qualcomm annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#2f4fd1';
  const BLUE_LINK = '#9aa9e2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible" data-typography-role="brand">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${svgIcon('qualcommHandsetsPhone', 174, 531, 50, 91, '0 0 67 90')}
      ${svgIcon('qualcommAutomotiveCar', 148, 763, 103, 85, '0 0 124 102')}
      ${svgIcon('qualcommIotCluster', 153, 923, 98, 96, '0 0 114 112')}

      <g transform="translate(149 1238)">
        <rect x="0" y="0" width="467" height="113" rx="24" fill="${BLUE}"/>
        <text x="40" y="44" font-size="31" font-weight="800" fill="#ffffff">QCT: CDMA Technologies</text>
        <text x="40" y="86" font-size="31" font-weight="800" fill="#ffffff">QTL: Technology Licensing</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'qualcomm-q3-fy26',
    name: 'Qualcomm · Q3 FY26',
    company: 'Qualcomm',
    meta: {
      company: 'Qualcomm',
      title: 'Qualcomm Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending June 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/qualcomm-q3-fy26.png', width: 2667, height: 1500 },
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
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 30,
      nodes: {
        handsets: { x: 363, y: 560, width: 72, height: 153 },
        automotive: { x: 363, y: 849, width: 72, height: 46 },
        iot: { x: 363, y: 1010, width: 72, height: 54 },
        qct: { x: 737, y: 656, width: 72, height: 258 },
        qtl: { x: 737, y: 1124, width: 72, height: 38 },
        other_revenue: { x: 737, y: 1349, width: 72, height: 3 },
        revenue: { x: 1111, y: 744, width: 73, height: 301 },
        gross_profit: { x: 1484, y: 660, width: 73, height: 159 },
        cost_of_revenue: { x: 1484, y: 986, width: 73, height: 142 },
        operating_profit: { x: 1858, y: 545, width: 73, height: 47 },
        operating_expenses: { x: 1858, y: 790, width: 73, height: 110 },
        other_income: { x: 2119, y: 526, width: 73, height: 23 },
        net_profit: { x: 2231, y: 440, width: 73, height: 59 },
        tax: { x: 2231, y: 718, width: 73, height: 12 },
        rnd: { x: 2231, y: 890, width: 73, height: 78 },
        sga: { x: 2231, y: 1104, width: 73, height: 28 },
        other_opex: { x: 2231, y: 1266, width: 73, height: 4 },
      },
      labels: {
        handsets: {
          blocks: [
            {
              x: 406, top: 468, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(20%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 199, top: 654, anchor: 'middle', semanticRole: 'source-offset-label', lines: [{ text: 'Handsets', size: 40, weight: 800 }] },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 405, top: 752, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+61% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 198, top: 845, anchor: 'middle', semanticRole: 'source-offset-label', lines: [{ text: 'Automotive', size: 40, weight: 800 }] },
          ],
        },
        iot: {
          blocks: [
            {
              x: 406, top: 916, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 200, top: 1018, anchor: 'middle', semanticRole: 'source-offset-label', lines: [{ text: 'IoT', size: 40, weight: 800 }] },
          ],
        },
        qct: {
          blocks: [{
            x: 773, top: 474, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'QCT', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(5%) Y/Y', size: 28, weight: 400, color: NOTE },
              { text: '26% EBIT margin', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        qtl: {
          blocks: [{
            x: 773, top: 947, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'QTL', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(3%) Y/Y', size: 28, weight: 400, color: NOTE },
              { text: '69% EBIT margin', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_revenue: {
          blocks: [{
            x: 773, top: 1245, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Other', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
            ],
          }],
        },
        revenue: {
          blocks: [{
            x: 1147, top: 602, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Revenue', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1525, top: 430, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Gross', size: 40, weight: 800, color: GREEN_LABEL },
              { text: 'profit', size: 40, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
              { text: '53% margin', size: 28, weight: 400, color: NOTE },
              { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1520, top: 1150, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Cost of', size: 38, weight: 800 },
              { text: 'revenue', size: 38, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1895, top: 311, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating', size: 40, weight: 800 },
              { text: 'profit', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '16% margin', size: 28, weight: 400, color: NOTE },
              { text: '(10pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1895, top: 918, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Operating', size: 38, weight: 800 },
              { text: 'Expenses', size: 38, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
            ],
          }],
        },
        other_income: {
          blocks: [{
            x: 2153, top: 566, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Other', size: 31, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2427, top: 414, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Net profit', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '20% margin', size: 28, weight: 400, color: NOTE },
              { text: '(6pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: 2450, top: 687, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Tax', size: 31, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: 2450, top: 886, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'R&D', size: 31, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
              { text: '26% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        sga: {
          blocks: [{
            x: 2450, top: 1067, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'SG&A', size: 31, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
              { text: '10% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_opex: {
          blocks: [{
            x: 2450, top: 1246, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Other', size: 31, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
              { text: '1% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
      },
    },

    nodes: [
      { id: 'handsets', col: 0, order: 0, type: 'source', label: 'Handsets', value: 5.1, notes: ['(20%) Y/Y'] },
      { id: 'automotive', col: 0, order: 1, type: 'source', label: 'Automotive', value: 1.6, notes: ['+61% Y/Y'] },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'IoT', value: 1.8, notes: ['+9% Y/Y'] },
      { id: 'qct', col: 1, order: 0, type: 'source', label: 'QCT', value: 8.5, notes: ['(5%) Y/Y', '26% EBIT margin'] },
      { id: 'qtl', col: 1, order: 1, type: 'source', label: 'QTL', value: 1.3, notes: ['(3%) Y/Y', '69% EBIT margin'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0.2 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 9.9, notes: ['(4%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.3, notes: ['53% margin', '(3pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.7 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.6, notes: ['16% margin', '(10pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 3.7 },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.8 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.0, notes: ['20% margin', '(6pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 2.6, notes: ['26% of revenue', '+5pp Y/Y'] },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 1.0, notes: ['10% of revenue', '+2pp Y/Y'] },
      { id: 'other_opex', col: 6, order: 4, type: 'cost', label: 'Other', value: 0.1, notes: ['1% of revenue', '+1pp Y/Y'] },
    ],

    links: [
      { source: 'handsets', target: 'qct', value: 5.1, sourceWidth: 153, targetWidth: 155, targetOrder: 0 },
      { source: 'automotive', target: 'qct', value: 1.6, sourceWidth: 46, targetWidth: 47, targetOrder: 1 },
      { source: 'iot', target: 'qct', value: 1.8, sourceWidth: 54, targetWidth: 56, targetOrder: 2 },
      { source: 'qct', target: 'revenue', value: 8.5, sourceWidth: 258, targetWidth: 259, targetOrder: 0 },
      { source: 'qtl', target: 'revenue', value: 1.3, sourceWidth: 38, targetWidth: 39, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 3, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.3, sourceWidth: 159, targetWidth: 159, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.7, sourceWidth: 142, targetWidth: 142, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.6, sourceWidth: 48, targetWidth: 47, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.7, sourceWidth: 111, targetWidth: 110, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 1.1, sourceWidth: 34, targetWidth: 35, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 13, targetWidth: 12, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.8, sourceWidth: 23, targetWidth: 24, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 2.6, sourceWidth: 78, targetWidth: 78, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.0, sourceWidth: 28, targetWidth: 28, targetOrder: 1 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 4, targetWidth: 4, targetOrder: 2 },
    ],

    i18n: {
      zh: {
        name: 'Qualcomm · 2026 财年第三季度',
        meta: {
          title: 'Qualcomm 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 6 月',
        },
        nodes: {
          handsets: { label: '手机', notes: ['同比 (20%)'] },
          automotive: { label: '汽车', notes: ['同比 +61%'] },
          iot: { label: '物联网', notes: ['同比 +9%'] },
          qct: { label: 'QCT', notes: ['同比 (5%)', 'EBIT 利润率 26%'] },
          qtl: { label: 'QTL', notes: ['同比 (3%)', 'EBIT 利润率 69%'] },
          other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 (4%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 53%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 (10 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 20%', '同比 (6 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 26%', '同比 +5 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 10%', '同比 +2 个百分点'] },
          other_opex: { label: '其他', notes: ['占收入 1%', '同比 +1 个百分点'] },
        },
      },
    },
  });
})();
