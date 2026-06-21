/* ====================================================================
 *  Robinhood - Q1 FY26 income statement ($M)
 *  Reconstructed from input/processed/robinhood-q1-fy26.png as a fixed
 *  d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const GREEN = '#00c805';
  const GREEN_DARK = '#00964b';
  const GREEN_NODE = '#24a428';
  const GREEN_LINK = '#84dc81';
  const PROFIT_LINK = '#98c996';
  const RED = '#d30000';
  const RED_LABEL = '#8e1708';
  const RED_LINK = '#e27f80';
  const NOTE = '#6b6b6b';
  const TITLE = '#145378';

  const statCard = (x, width, title, value, note) => `
    <g>
      <rect x="${x}" y="1159" width="${width}" height="149" rx="28" fill="${GREEN}"/>
      <text x="${x + width / 2}" y="1206" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1242" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1280" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${statCard(41, 345, 'Net deposits', '$17.7B', '+11% Q/Q')}
      ${statCard(397, 345, 'MAU', '13.5M', '+0.9M Y/Y &amp; +0.5M Q/Q')}
      <text x="391" y="1351" font-size="29" font-weight="500" fill="${NOTE}">MAU = Monthly Active Users</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'robinhood-q1-fy26',
    name: 'Robinhood - Q1 FY26',
    company: 'Robinhood',
    meta: {
      company: 'Robinhood',
      title: 'Robinhood Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/robinhood-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1140,
      titleY: 172,
      titleSize: 112,
      titleWeight: 800,
      titleTextLength: 2020,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 220,
      logoHeight: 250,
      logoY: 280,
      logoViewBox: '0 0 220 250',
      logoSvg: BUSINESS_ICONS.robinhoodFeather || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      noteColor: NOTE,
      palette: {
        source: { node: GREEN, label: GREEN },
        hub: { node: GREEN, label: GREEN },
        profit: { node: GREEN_NODE, label: GREEN_DARK },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GREEN_LINK,
        hub: null,
        profit: PROFIT_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 28, lineGap: 7 },
    },
    annotationsSvg: annotations,

    nodes: [
      { id: 'options', label: 'Options', value: 260, notes: ['+8% Y/Y'], type: 'source', col: 0, order: 0 },
      { id: 'crypto', label: 'Crypto', value: 134, valueText: '$134M', notes: ['(47%) Y/Y'], type: 'source', col: 0, order: 1 },
      { id: 'equities', label: 'Equities', value: 82, notes: ['+46% Y/Y'], type: 'source', col: 0, order: 2 },
      { id: 'other_transactions', label: ['Other', 'transactions'], value: 147, notes: ['+320% Y/Y'], type: 'source', col: 0, order: 3 },
      { id: 'transaction_based', label: 'Transaction-based', value: 623, notes: ['+7% Y/Y'], type: 'source', col: 1, order: 0 },
      { id: 'net_interest', label: 'Net interest', value: 359, notes: ['+24% Y/Y'], type: 'source', col: 1, order: 1 },
      { id: 'other_revenue', label: 'Other revenue', value: 85, notes: ['+57% Y/Y'], type: 'source', col: 1, order: 2 },
      { id: 'revenue', label: 'Revenue', value: 1067, notes: ['+15% Y/Y'], type: 'hub', col: 2, order: 0 },
      { id: 'pretax_income', label: 'Pretax income', value: 411, type: 'profit', col: 3, order: 0 },
      { id: 'operating_expenses', label: ['Operating', 'expenses'], value: 656, type: 'cost', col: 3, order: 1 },
      { id: 'net_profit', label: 'Net income', value: 346, type: 'profit', col: 4, order: 0 },
      { id: 'tax', label: 'Tax', value: 65, type: 'cost', col: 4, order: 1 },
      { id: 'technology_development', label: ['Technology &', 'development'], value: 241, type: 'cost', col: 4, order: 2 },
      { id: 'ga', label: 'G&A', value: 174, type: 'cost', col: 4, order: 3 },
      { id: 'marketing', label: 'Marketing', value: 107, type: 'cost', col: 4, order: 4 },
      { id: 'operations', label: 'Operations', value: 74, type: 'cost', col: 4, order: 5 },
      { id: 'brokerage_transaction', label: ['Brokerage &', 'transaction'], value: 60, type: 'cost', col: 4, order: 6 },
    ],
    links: [
      { source: 'options', target: 'transaction_based', value: 260, targetOrder: 0 },
      { source: 'crypto', target: 'transaction_based', value: 134, targetOrder: 1 },
      { source: 'equities', target: 'transaction_based', value: 82, targetOrder: 2 },
      { source: 'other_transactions', target: 'transaction_based', value: 147, targetOrder: 3 },
      { source: 'transaction_based', target: 'revenue', value: 623, targetOrder: 0 },
      { source: 'net_interest', target: 'revenue', value: 359, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 85, targetOrder: 2 },
      { source: 'revenue', target: 'pretax_income', value: 411, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 656, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_profit', value: 346, sourceOrder: 0, targetOrder: 0 },
      { source: 'pretax_income', target: 'tax', value: 65, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_development', value: 241, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 174, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 107, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations', value: 74, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'brokerage_transaction', value: 60, sourceOrder: 4, targetOrder: 0 },
    ],
    layout: {
      scale: 0.269,
      nodes: {
        options: { x: 338, y: 405, width: 73, height: 70 },
        crypto: { x: 338, y: 616, width: 73, height: 36 },
        equities: { x: 338, y: 792, width: 73, height: 22 },
        other_transactions: { x: 338, y: 953, width: 73, height: 40 },
        transaction_based: { x: 806, y: 572, width: 73, height: 168 },
        net_interest: { x: 806, y: 908, width: 73, height: 96 },
        other_revenue: { x: 806, y: 1154, width: 73, height: 23 },
        revenue: { x: 1272, y: 680, width: 73, height: 287 },
        pretax_income: { x: 1740, y: 572, width: 71, height: 110 },
        operating_expenses: { x: 1740, y: 883, width: 72, height: 175 },
        net_profit: { x: 2207, y: 397, width: 72, height: 92 },
        tax: { x: 2207, y: 576, width: 72, height: 17 },
        technology_development: { x: 2207, y: 726, width: 72, height: 65 },
        ga: { x: 2207, y: 900, width: 72, height: 47 },
        marketing: { x: 2207, y: 1058, width: 72, height: 29 },
        operations: { x: 2207, y: 1186, width: 72, height: 20 },
        brokerage_transaction: { x: 2207, y: 1303, width: 72, height: 16 },
      },
      labels: {
        options: {
          blocks: [
            {
              x: 374, top: 303, anchor: 'middle', lineGap: 7,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 301, top: 408, anchor: 'end',
              lines: [{ text: 'Options', size: 40, weight: 800 }],
            },
          ],
        },
        crypto: {
          blocks: [
            {
              x: 374, top: 514, anchor: 'middle', lineGap: 7,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(47%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 301, top: 614, anchor: 'end',
              lines: [{ text: 'Crypto', size: 40, weight: 800 }],
            },
          ],
        },
        equities: {
          blocks: [
            {
              x: 374, top: 688, anchor: 'middle', lineGap: 7,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+46% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 301, top: 783, anchor: 'end',
              lines: [{ text: 'Equities', size: 40, weight: 800 }],
            },
          ],
        },
        other_transactions: {
          blocks: [
            {
              x: 374, top: 854, anchor: 'middle', lineGap: 7,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+320% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 299, top: 930, anchor: 'end', lineGap: 6,
              lines: [
                { text: 'Other', size: 40, weight: 800 },
                { text: 'transactions', size: 40, weight: 800 },
              ],
            },
          ],
        },
        transaction_based: {
          blocks: [
            {
              x: 879, top: 397, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Transaction-based', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        net_interest: {
          blocks: [
            {
              x: 878, top: 766, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Net interest', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+24% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 878, top: 1019, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+57% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1309, top: 536, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Revenue', size: 42, weight: 800 },
                { text: '$value', size: 42, weight: 400 },
                { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        pretax_income: {
          blocks: [
            {
              x: 1777, top: 465, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Pretax income', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1777, top: 1066, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '($656M)', size: 38, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2332, top: 387, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net income', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2359, top: 576, anchor: 'start',
              lines: [{ text: 'Tax ($65M)', size: 30, weight: 800 }],
            },
          ],
        },
        technology_development: {
          blocks: [
            {
              x: 2343, top: 727, anchor: 'start', lineGap: 4,
              lines: [
                { text: 'Technology &', size: 31, weight: 800 },
                { text: 'development', size: 31, weight: 800 },
                { text: '($241M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2408, top: 900, anchor: 'start', lineGap: 6,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '($174M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        marketing: {
          blocks: [
            {
              x: 2364, top: 1058, anchor: 'start', lineGap: 6,
              lines: [
                { text: 'Marketing', size: 31, weight: 800 },
                { text: '($107M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        operations: {
          blocks: [
            {
              x: 2350, top: 1185, anchor: 'start', lineGap: 6,
              lines: [
                { text: 'Operations', size: 31, weight: 800 },
                { text: '($74M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        brokerage_transaction: {
          blocks: [
            {
              x: 2348, top: 1296, anchor: 'start', lineGap: 4,
              lines: [
                { text: 'Brokerage &', size: 31, weight: 800 },
                { text: 'transaction', size: 31, weight: 800 },
                { text: '($60M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
      },
    },
  });
})();
