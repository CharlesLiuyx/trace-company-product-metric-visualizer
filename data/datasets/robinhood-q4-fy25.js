/* ====================================================================
 *  Robinhood - Q4 FY25 income statement ($M)
 *  Reconstructed from input/processed/robinhood-q4-fy25.png as a fixed
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
      <rect x="${x}" y="1117" width="${width}" height="150" rx="28" fill="${GREEN}"/>
      <text x="${x + width / 2}" y="1165" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1201" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1240" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${statCard(41, 345, 'Net deposits', '$15.9B', '+19% Q/Q')}
      ${statCard(397, 345, 'MAU', '13.0M', '+1.9M Y/Y &amp; (0.8M) Q/Q')}
      <text x="389" y="1321" font-size="29" font-weight="500" fill="${NOTE}">MAU = Monthly Active Users</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'robinhood-q4-fy25',
    name: 'Robinhood - Q4 FY25',
    company: 'Robinhood',
    meta: {
      company: 'Robinhood',
      title: 'Robinhood Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/robinhood-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1138,
      titleY: 166,
      titleSize: 112,
      titleWeight: 800,
      titleTextLength: 2078,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 220,
      logoHeight: 250,
      logoY: 247,
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
      { id: 'options', label: 'Options', value: 314, notes: ['+41% Y/Y'], type: 'source', col: 0, order: 0 },
      { id: 'crypto', label: 'Crypto', value: 221, notes: ['(38%) Y/Y'], type: 'source', col: 0, order: 1 },
      { id: 'equities', label: 'Equities', value: 94, notes: ['+54% Y/Y'], type: 'source', col: 0, order: 2 },
      { id: 'other_transactions', label: ['Other', 'transactions'], value: 147, notes: ['+374% Y/Y'], type: 'source', col: 0, order: 3 },
      { id: 'transaction_based', label: 'Transaction-based', value: 776, notes: ['+15% Y/Y'], type: 'source', col: 1, order: 0 },
      { id: 'net_interest', label: 'Net interest', value: 411, notes: ['+39% Y/Y'], type: 'source', col: 1, order: 1 },
      { id: 'other_revenue', label: 'Other revenue', value: 96, notes: ['+109% Y/Y'], type: 'source', col: 1, order: 2 },
      { id: 'revenue', label: 'Revenue', value: 1283, notes: ['+27% Y/Y'], type: 'hub', col: 2, order: 0 },
      { id: 'pretax_income', label: 'Pretax income', value: 650, type: 'profit', col: 3, order: 0 },
      { id: 'operating_expenses', label: ['Operating', 'expenses'], value: 633, type: 'cost', col: 3, order: 1 },
      { id: 'other_income', label: 'Other', value: 11, valueText: '$11M', type: 'profit', col: 4, order: 0 },
      { id: 'net_profit', label: 'Net income', value: 605, type: 'profit', col: 4, order: 1 },
      { id: 'tax', label: 'Tax', value: 56, type: 'cost', col: 4, order: 2 },
      { id: 'technology_development', label: ['Technology &', 'development'], value: 232, type: 'cost', col: 4, order: 3 },
      { id: 'ga', label: 'G&A', value: 178, type: 'cost', col: 4, order: 4 },
      { id: 'marketing', label: 'Marketing', value: 93, type: 'cost', col: 4, order: 5 },
      { id: 'brokerage_transaction', label: ['Brokerage &', 'transaction'], value: 37, type: 'cost', col: 4, order: 6 },
      { id: 'operations', label: 'Operations', value: 57, type: 'cost', col: 4, order: 7 },
      { id: 'other_opex', label: 'Other', value: 36, type: 'cost', col: 4, order: 8 },
    ],
    links: [
      { source: 'options', target: 'transaction_based', value: 314, width: 71, targetOrder: 0 },
      { source: 'crypto', target: 'transaction_based', value: 221, width: 51, targetOrder: 1 },
      { source: 'equities', target: 'transaction_based', value: 94, width: 21, targetOrder: 2 },
      { source: 'other_transactions', target: 'transaction_based', value: 147, width: 34, targetOrder: 3 },
      { source: 'transaction_based', target: 'revenue', value: 776, width: 177, targetOrder: 0 },
      { source: 'net_interest', target: 'revenue', value: 411, width: 94, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 96, width: 23, targetOrder: 2 },
      { source: 'revenue', target: 'pretax_income', value: 650, width: 147, sourceOrder: 0, targetOrder: 0, y0: 695.5, y1: 577.5 },
      { source: 'revenue', target: 'operating_expenses', value: 633, width: 144, sourceOrder: 1, targetOrder: 0, y0: 844, y1: 958 },
      { source: 'pretax_income', target: 'net_profit', value: 594, width: 135, sourceOrder: 0, targetOrder: 1 },
      { source: 'pretax_income', target: 'tax', value: 56, width: 12, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'other_income',
        target: 'net_profit',
        value: 11,
        width: 3,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: { left: PROFIT_LINK, right: PROFIT_LINK },
        curve: { c1x: 2160, c1y: 345.5, c2x: 2192, c2y: 366.5 },
      },
      { source: 'operating_expenses', target: 'technology_development', value: 232, width: 52, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 178, width: 40, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 93, width: 21, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'brokerage_transaction', value: 37, width: 13, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations', value: 57, width: 9, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 36, width: 9, sourceOrder: 5, targetOrder: 0 },
    ],
    layout: {
      scale: 0.229,
      nodes: {
        options: { x: 337, y: 353, width: 73, height: 71 },
        crypto: { x: 337, y: 533, width: 73, height: 51 },
        equities: { x: 337, y: 698, width: 73, height: 21 },
        other_transactions: { x: 337, y: 841, width: 73, height: 33 },
        transaction_based: { x: 801, y: 508, width: 73, height: 177 },
        net_interest: { x: 805, y: 872, width: 72, height: 94 },
        other_revenue: { x: 805, y: 1131, width: 72, height: 21 },
        revenue: { x: 1271, y: 622, width: 73, height: 294 },
        pretax_income: { x: 1739, y: 504, width: 72, height: 147 },
        operating_expenses: { x: 1739, y: 886, width: 72, height: 144 },
        other_income: { x: 2044, y: 344, width: 73, height: 3 },
        net_profit: { x: 2206, y: 365, width: 72, height: 138 },
        tax: { x: 2206, y: 597, width: 72, height: 12 },
        technology_development: { x: 2206, y: 709, width: 72, height: 52 },
        ga: { x: 2206, y: 869, width: 72, height: 40 },
        marketing: { x: 2206, y: 1013, width: 72, height: 21 },
        brokerage_transaction: { x: 2206, y: 1142, width: 72, height: 13 },
        operations: { x: 2206, y: 1256, width: 72, height: 9 },
        other_opex: { x: 2206, y: 1350, width: 72, height: 9 },
      },
      labels: {
        options: {
          blocks: [
            {
              x: 374, top: 263, anchor: 'middle', lineGap: 7,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+41% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 301, top: 374, anchor: 'end',
              lines: [{ text: 'Options', size: 40, weight: 800 }],
            },
          ],
        },
        crypto: {
          blocks: [
            {
              x: 374, top: 443, anchor: 'middle', lineGap: 7,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(38%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 301, top: 542, anchor: 'end',
              lines: [{ text: 'Crypto', size: 40, weight: 800 }],
            },
          ],
        },
        equities: {
          blocks: [
            {
              x: 374, top: 609, anchor: 'middle', lineGap: 7,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+54% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 301, top: 691, anchor: 'end',
              lines: [{ text: 'Equities', size: 40, weight: 800 }],
            },
          ],
        },
        other_transactions: {
          blocks: [
            {
              x: 374, top: 751, anchor: 'middle', lineGap: 7,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+374% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 299, top: 817, anchor: 'end', lineGap: 6,
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
              x: 837, top: 363, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Transaction-based', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        net_interest: {
          blocks: [
            {
              x: 841, top: 728, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Net interest', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+39% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 841, top: 985, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+109% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1308, top: 480, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Revenue', size: 42, weight: 800 },
                { text: '$value', size: 42, weight: 400 },
                { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        pretax_income: {
          blocks: [
            {
              x: 1775, top: 397, anchor: 'middle', lineGap: 9,
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
              x: 1775, top: 1055, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '($633M)', size: 38, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2037, top: 256, anchor: 'start', lineGap: 9,
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
              x: 2331, top: 392, anchor: 'start', lineGap: 9,
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
              x: 2365, top: 590, anchor: 'start',
              lines: [{ text: 'Tax ($56M)', size: 30, weight: 800 }],
            },
          ],
        },
        technology_development: {
          blocks: [
            {
              x: 2343, top: 697, anchor: 'start', lineGap: 4,
              lines: [
                { text: 'Technology &', size: 31, weight: 800 },
                { text: 'development', size: 31, weight: 800 },
                { text: '($232M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2405, top: 858, anchor: 'start', lineGap: 6,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '($178M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        marketing: {
          blocks: [
            {
              x: 2362, top: 994, anchor: 'start', lineGap: 6,
              lines: [
                { text: 'Marketing', size: 31, weight: 800 },
                { text: '($93M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        brokerage_transaction: {
          blocks: [
            {
              x: 2352, top: 1094, anchor: 'start', lineGap: 4,
              lines: [
                { text: 'Brokerage &', size: 31, weight: 800 },
                { text: 'transaction', size: 31, weight: 800 },
                { text: '($37M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        operations: {
          blocks: [
            {
              x: 2368, top: 1230, anchor: 'start', lineGap: 6,
              lines: [
                { text: 'Operations', size: 31, weight: 800 },
                { text: '($57M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2401, top: 1320, anchor: 'start', lineGap: 6,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '($36M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    i18n: {
      zh: {
        name: 'Robinhood · 2025 财年第四季度',
        meta: {
          title: 'Robinhood 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
        },
        nodes: {
          options: { label: '期权', notes: ['同比 +41%'] },
          crypto: { label: '加密资产', notes: ['同比 (38%)'] },
          equities: { label: '股票', notes: ['同比 +54%'] },
          other_transactions: { label: '其他交易', notes: ['同比 +374%'] },
          transaction_based: { label: '交易收入', notes: ['同比 +15%'] },
          net_interest: { label: '净利息', notes: ['同比 +39%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +109%'] },
          revenue: { label: '收入', notes: ['同比 +27%'] },
          pretax_income: { label: '税前利润' },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          technology_development: { label: '技术与开发' },
          ga: { label: '管理费用' },
          marketing: { label: '市场营销' },
          brokerage_transaction: { label: '经纪与交易' },
          operations: { label: '运营' },
          other_opex: { label: '其他' },
        },
      },
    },
  });
})();
