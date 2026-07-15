/* ====================================================================
 * Robinhood - Q3 FY25 income statement ($M)
 * Reconstructed from input/processed/robinhood-q3-fy25.png as a fixed
 * d3-sankey layout with SVG text and vector logo only.
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

  const statCard = (x, title, value, note) => `
    <g>
      <rect x="${x}" y="1159" width="345" height="149" rx="28" fill="${GREEN}"/>
      <text x="${x + 172.5}" y="1206" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + 172.5}" y="1242" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + 172.5}" y="1280" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${statCard(41, 'Net deposits', '$20.4B', '+29% Q/Q')}
      ${statCard(397, 'MAU', '13.8M', '+1M Y/Y &amp; (2.8M) Q/Q')}
      <text x="389" y="1351" font-size="29" font-weight="500" fill="${NOTE}">MAU = Monthly Active Users</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'robinhood-q3-fy25',
    name: 'Robinhood · Q3 FY25',
    company: 'Robinhood',
    meta: {
      company: 'Robinhood',
      title: 'Robinhood Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/robinhood-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2400,
      hidePeriodStamp: true,
      logoWidth: 220,
      logoHeight: 250,
      logoY: 275,
      logoViewBox: '0 0 220 250',
      logoSvg: BUSINESS_ICONS.robinhoodFeather || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
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
      { id: 'options', label: 'Options', value: 304, notes: ['+50% Y/Y'], type: 'source', col: 0, order: 0 },
      { id: 'crypto', label: 'Crypto', value: 268, notes: ['+624% Y/Y'], type: 'source', col: 0, order: 1 },
      { id: 'equities', label: 'Equities', value: 86, notes: ['+41% Y/Y'], type: 'source', col: 0, order: 2 },
      { id: 'other_transactions', label: ['Other', 'transactions'], value: 72, notes: ['+279% Y/Y'], type: 'source', col: 0, order: 3 },
      { id: 'transaction_based', label: 'Transaction-based', value: 730, notes: ['+129% Y/Y'], type: 'source', col: 1, order: 0 },
      { id: 'net_interest', label: 'Net interest', value: 456, notes: ['+66% Y/Y'], type: 'source', col: 1, order: 1 },
      { id: 'other_revenue', label: 'Other revenue', value: 88, notes: ['+100% Y/Y'], type: 'source', col: 1, order: 2 },
      { id: 'revenue', label: 'Revenue', value: 1274, notes: ['+100% Y/Y'], type: 'hub', col: 2, order: 0 },
      { id: 'pretax_income', label: 'Pretax income', value: 634, type: 'profit', col: 3, order: 0 },
      { id: 'operating_expenses', label: ['Operating', 'expenses'], value: 639, type: 'cost', col: 3, order: 1 },
      { id: 'net_profit', label: 'Net income', value: 556, type: 'profit', col: 4, order: 0 },
      { id: 'tax', label: 'Tax', value: 78, type: 'cost', col: 4, order: 1 },
      { id: 'technology_development', label: ['Technology &', 'development'], value: 237, type: 'cost', col: 4, order: 2 },
      { id: 'ga', label: 'G&A', value: 185, type: 'cost', col: 4, order: 3 },
      { id: 'marketing', label: 'Marketing', value: 102, type: 'cost', col: 4, order: 4 },
      { id: 'operations', label: 'Operations', value: 59, type: 'cost', col: 4, order: 5 },
      { id: 'brokerage_transaction', label: ['Brokerage &', 'transaction'], value: 56, type: 'cost', col: 4, order: 6 },
      { id: 'other_opex', label: 'Other', value: 1, valueText: '$1M', type: 'cost', col: 4, order: 7 },
    ],
    links: [
      { source: 'options', target: 'transaction_based', value: 304, width: 61, targetOrder: 0 },
      { source: 'crypto', target: 'transaction_based', value: 268, width: 54, targetOrder: 1 },
      { source: 'equities', target: 'transaction_based', value: 86, width: 17, targetOrder: 2 },
      { source: 'other_transactions', target: 'transaction_based', value: 72, width: 15, targetOrder: 3 },
      { source: 'transaction_based', target: 'revenue', value: 730, width: 147, targetOrder: 0 },
      { source: 'net_interest', target: 'revenue', value: 456, width: 92, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 88, width: 18, targetOrder: 2 },
      { source: 'revenue', target: 'pretax_income', value: 634, width: 127, sourceOrder: 0, targetOrder: 0, y0: 759.5, y1: 634.5 },
      { source: 'revenue', target: 'operating_expenses', value: 639, width: 128, sourceOrder: 1, targetOrder: 0, y0: 887, y1: 982 },
      { source: 'pretax_income', target: 'net_profit', value: 556, width: 112, sourceOrder: 0, targetOrder: 0 },
      { source: 'pretax_income', target: 'tax', value: 78, width: 16, sourceWidth: 15, targetWidth: 16, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_development', value: 237, width: 48, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 185, width: 37, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 102, width: 20, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations', value: 59, width: 12, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'brokerage_transaction', value: 56, width: 11, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 1, width: 0.2, sourceWidth: 0.2, targetWidth: 1, sourceOrder: 5, targetOrder: 0 },
    ],
    layout: {
      scale: 0.201,
      nodes: {
        options: { x: 337, y: 418, width: 73, height: 61 },
        crypto: { x: 337, y: 607, width: 73, height: 54 },
        equities: { x: 337, y: 790, width: 73, height: 17 },
        other_transactions: { x: 337, y: 920, width: 73, height: 15 },
        transaction_based: { x: 805, y: 571, width: 73, height: 147 },
        net_interest: { x: 805, y: 907, width: 73, height: 92 },
        other_revenue: { x: 805, y: 1154, width: 73, height: 18 },
        revenue: { x: 1272, y: 696, width: 73, height: 257 },
        pretax_income: { x: 1740, y: 571, width: 72, height: 127 },
        operating_expenses: { x: 1740, y: 918, width: 72, height: 128 },
        net_profit: { x: 2207, y: 348, width: 72, height: 112 },
        tax: { x: 2207, y: 551, width: 72, height: 16 },
        technology_development: { x: 2207, y: 651, width: 72, height: 48 },
        ga: { x: 2207, y: 793, width: 72, height: 37 },
        marketing: { x: 2207, y: 939, width: 72, height: 20 },
        operations: { x: 2207, y: 1061, width: 72, height: 12 },
        brokerage_transaction: { x: 2207, y: 1180, width: 72, height: 11 },
        other_opex: { x: 2207, y: 1317, width: 72, height: 3 },
      },
      labels: {
        options: { blocks: [{ x: 374, top: 331, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+50% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 301, top: 432, anchor: 'end', lines: [{ text: 'Options', size: 40, weight: 800 }] }] },
        crypto: { blocks: [{ x: 374, top: 519, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+624% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 301, top: 616, anchor: 'end', lines: [{ text: 'Crypto', size: 40, weight: 800 }] }] },
        equities: { blocks: [{ x: 374, top: 696, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+41% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 301, top: 783, anchor: 'end', lines: [{ text: 'Equities', size: 40, weight: 800 }] }] },
        other_transactions: { blocks: [{ x: 374, top: 831, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+279% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 299, top: 888, anchor: 'end', lineGap: 6, lines: [{ text: 'Other', size: 40, weight: 800 }, { text: 'transactions', size: 40, weight: 800 }] }] },
        transaction_based: { blocks: [{ x: 841, top: 430, anchor: 'middle', lineGap: 7, lines: [{ text: 'Transaction-based', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+129% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        net_interest: { blocks: [{ x: 841, top: 767, anchor: 'middle', lineGap: 7, lines: [{ text: 'Net interest', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+66% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        other_revenue: { blocks: [{ x: 841, top: 1014, anchor: 'middle', lineGap: 7, lines: [{ text: 'Other revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+100% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        revenue: { blocks: [{ x: 1308, top: 554, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 42, weight: 800 }, { text: '$value', size: 42, weight: 400 }, { text: '+100% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        pretax_income: { blocks: [{ x: 1776, top: 465, anchor: 'middle', lineGap: 9, lines: [{ text: 'Pretax income', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }] }] },
        operating_expenses: { blocks: [{ x: 1776, top: 1070, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 38, weight: 800 }, { text: 'expenses', size: 38, weight: 800 }, { text: '($639M)', size: 38, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2331, top: 366, anchor: 'start', lineGap: 9, lines: [{ text: 'Net income', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }] }] },
        tax: { blocks: [{ x: 2365, top: 546, anchor: 'start', lines: [{ text: 'Tax ($78M)', size: 30, weight: 800 }] }] },
        technology_development: { blocks: [{ x: 2343, top: 640, anchor: 'start', lineGap: 4, lines: [{ text: 'Technology &', size: 31, weight: 800 }, { text: 'development', size: 31, weight: 800 }, { text: '($237M)', size: 31, weight: 400 }] }] },
        ga: { blocks: [{ x: 2405, top: 782, anchor: 'start', lineGap: 6, lines: [{ text: 'G&A', size: 31, weight: 800 }, { text: '($185M)', size: 31, weight: 400 }] }] },
        marketing: { blocks: [{ x: 2362, top: 928, anchor: 'start', lineGap: 6, lines: [{ text: 'Marketing', size: 31, weight: 800 }, { text: '($102M)', size: 31, weight: 400 }] }] },
        operations: { blocks: [{ x: 2368, top: 1050, anchor: 'start', lineGap: 6, lines: [{ text: 'Operations', size: 31, weight: 800 }, { text: '($59M)', size: 31, weight: 400 }] }] },
        brokerage_transaction: { blocks: [{ x: 2352, top: 1170, anchor: 'start', lineGap: 4, lines: [{ text: 'Brokerage &', size: 31, weight: 800 }, { text: 'transaction', size: 31, weight: 800 }, { text: '($56M)', size: 31, weight: 400 }] }] },
        other_opex: { blocks: [{ x: 2401, top: 1287, anchor: 'start', lineGap: 6, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '($1M)', size: 31, weight: 400 }] }] },
      },
    },
    i18n: {
      zh: {
        name: 'Robinhood · 2025 财年第三季度',
        meta: { title: 'Robinhood 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月' },
        nodes: {
          options: { label: '期权', notes: ['同比 +50%'] }, crypto: { label: '加密资产', notes: ['同比 +624%'] }, equities: { label: '股票', notes: ['同比 +41%'] }, other_transactions: { label: '其他交易', notes: ['同比 +279%'] },
          transaction_based: { label: '交易收入', notes: ['同比 +129%'] }, net_interest: { label: '净利息', notes: ['同比 +66%'] }, other_revenue: { label: '其他收入', notes: ['同比 +100%'] }, revenue: { label: '收入', notes: ['同比 +100%'] },
          pretax_income: { label: '税前利润' }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润' }, tax: { label: '税费' }, technology_development: { label: '技术与开发' }, ga: { label: '管理费用' }, marketing: { label: '市场营销' }, operations: { label: '运营' }, brokerage_transaction: { label: '经纪与交易' }, other_opex: { label: '其他' },
        },
      },
    },
  });
})();
