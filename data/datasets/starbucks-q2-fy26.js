/* ====================================================================
 * Starbucks - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/starbucks-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG Starbucks business annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#6c6c6c';
  const GREEN = '#00754a';
  const GREEN_LABEL = '#008f47';
  const GREEN_NODE = '#007a49';
  const GREEN_LINK = '#84b9a3';
  const PROFIT_NODE = '#24a226';
  const PROFIT_LINK = '#9fd39f';
  const RED = '#d60000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e88384';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const kpiCard = (x, width, title, value, lines) => `
    <g>
      <rect x="${x}" y="1214" width="${width}" height="149" rx="29" fill="${GREEN}"/>
      <text x="${x + width / 2}" y="1266" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${title}</text>
      ${value ? `<text x="${x + width / 2}" y="1305" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${value}</text>` : ''}
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${(value ? 1338 : 1307) + index * 31}" text-anchor="middle" font-size="24" font-weight="500" fill="#ffffff">${line}</text>`).join('')}
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('starbucksBeverage', 112, 407, 1.1)}
      ${icon('starbucksFoodMuffin', 100, 750, 1.08)}
      ${icon('starbucksPackagedBeverages', 134, 986, 0.86)}
      ${kpiCard(74, 270, 'Store count', '41,129', ['+1% Y/Y'])}
      ${kpiCard(354, 421, 'Same Store Sale +6% Y/Y', '', ['Ticket +2% Y/Y', 'Transactions +4% Y/Y'])}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'starbucks-q2-fy26',
    name: 'Starbucks - Q2 FY26',
    company: 'Starbucks',
    meta: {
      company: 'Starbucks',
      title: 'Starbucks Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/starbucks-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2348,
      periodX: 189,
      periodY: 267,
      periodNoteY: 311,
      logoWidth: 246,
      logoHeight: 246,
      logoY: 272,
      logoViewBox: '0 0 240 240',
      logoSvg: BUSINESS_ICONS.starbucksCompanySiren || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: GREEN_NODE, label: GREEN },
        hub: { node: GREEN_NODE, label: GREEN },
        profit: { node: PROFIT_NODE, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GREEN_LINK,
        hub: null,
        profit: PROFIT_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    nodes: [
      { id: 'beverage', type: 'source', label: 'Beverage', value: 5.7, notes: ['+7% Y/Y'] },
      { id: 'food', type: 'source', label: 'Food', value: 1.8, notes: ['+8% Y/Y'] },
      {
        id: 'other_revenue',
        type: 'source',
        label: 'Other',
        value: 2.0,
        valueText: '$2.0B',
        notes: ['+15% Y/Y', 'Packaged beverages, royalty and', 'licensing revenue, ingredients'],
      },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 9.5, notes: ['+9% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 1.9, notes: ['20% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', type: 'cost', label: '', value: 7.6, color: 'rgba(0,0,0,0)', labelColor: RED_LABEL },
      { id: 'store_opex', type: 'cost', label: 'Store opex', value: 4.4 },
      { id: 'product_distribution', type: 'cost', label: ['Product &', 'distribution'], value: 3.2 },
      { id: 'other_income', type: 'profit', label: 'Other', value: 0.1 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 0.8, notes: ['9% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 1.1 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 0.5, notes: ['5% margin', '+1pp Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'other_expense', type: 'cost', label: 'Other', value: 0.1 },
      { id: 'ga', type: 'cost', label: ['General &', 'administrative'], value: 0.6 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.4 },
      { id: 'other_opex', type: 'cost', label: 'Other opex', value: 0.1 },
      { id: 'restructuring', type: 'cost', label: 'Restructuring', value: 0.025, valueText: '($25M)' },
    ],
    links: [
      { source: 'beverage', target: 'revenue', value: 5.7, targetOrder: 0 },
      { source: 'food', target: 'revenue', value: 1.8, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 2.0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1.9, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.6, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'store_opex', value: 4.4, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_distribution', value: 3.2, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.7, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.1, width: 50.6, sourceOrder: 1, targetOrder: 0, curve: { x0: 1394 } },
      { source: 'other_income', target: 'operating_profit', value: 0.1, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.1, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.6, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.4, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.025, sourceOrder: 3, targetOrder: 0 },
    ],

    layout: {
      scale: 42,
      nodes: {
        beverage: { x: 387, y: 508, width: 73, height: 239 },
        food: { x: 387, y: 878, width: 73, height: 76 },
        other_revenue: { x: 387, y: 1095, width: 73, height: 84 },
        revenue: { x: 853, y: 668, width: 73, height: 399 },
        gross_profit: { x: 1324, y: 555, width: 73, height: 80 },
        cost_of_revenue: { x: 926, y: 748, width: 0, height: 319 },
        store_opex: { x: 1324, y: 864, width: 73, height: 185 },
        product_distribution: { x: 1324, y: 1145, width: 73, height: 134 },
        other_income: { x: 1678, y: 540, width: 73, height: 4 },
        operating_profit: { x: 1786, y: 467, width: 73, height: 34 },
        operating_expenses: { x: 1786, y: 724, width: 73, height: 48 },
        net_profit: { x: 2260, y: 367, width: 73, height: 21 },
        tax: { x: 2260, y: 578, width: 73, height: 8 },
        other_expense: { x: 2260, y: 677, width: 73, height: 4 },
        ga: { x: 2260, y: 794, width: 73, height: 25 },
        depreciation_amortization: { x: 2260, y: 969, width: 73, height: 17 },
        other_opex: { x: 2260, y: 1120, width: 73, height: 4 },
        restructuring: { x: 2260, y: 1277, width: 73, height: 1.2 },
      },
      labels: {
        beverage: {
          blocks: [
            {
              x: 425, top: 413, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: GREEN },
                { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 190, top: 659, anchor: 'middle', lines: [{ text: 'Beverage', size: 40, weight: 800, color: GREEN }] },
          ],
        },
        food: {
          blocks: [
            {
              x: 425, top: 787, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: GREEN },
                { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 187, top: 895, anchor: 'middle', lines: [{ text: 'Food', size: 40, weight: 800, color: GREEN }] },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 425, top: 1010, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: GREEN },
                { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 180, top: 1086, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other', size: 40, weight: 800, color: GREEN },
                { text: 'Packaged beverages, royalty and', size: 20, weight: 400, color: NOTE },
                { text: 'licensing revenue, ingredients', size: 20, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 890, top: 523, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: GREEN },
                { text: '$value', size: 38, weight: 400, color: GREEN },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1362, top: 374, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '20% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: { blocks: [] },
        store_opex: {
          blocks: [
            {
              x: 1524, top: 920, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Store opex', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        product_distribution: {
          blocks: [
            {
              x: 1521, top: 1160, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Product &', size: 35, weight: 800, color: RED_LABEL },
                { text: 'distribution', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 1731, top: 560, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 34, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1823, top: 283, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '9% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1823, top: 766, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2468, top: 310, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '5% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2476, top: 545, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_expense: {
          blocks: [
            {
              x: 2476, top: 644, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2476, top: 770, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'General &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'administrative', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        depreciation_amortization: {
          blocks: [
            {
              x: 2472, top: 929, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'amortization', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2472, top: 1089, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other opex', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: 2472, top: 1235, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Restructuring', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },
  });
})();
