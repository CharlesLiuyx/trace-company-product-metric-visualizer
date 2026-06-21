/* ====================================================================
 *  Goldman Sachs - Q1 FY26 income statement ($B)
 *  Reconstructed from input/processed/goldman-sachs-q1-fy26.png as a
 *  fixed d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#686868';
  const BLUE = '#6f9cc8';
  const BLUE_LABEL = '#6b97c6';
  const BLUE_LINK = '#b4c8da';
  const GREEN = '#27a226';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9ccd99';
  const RED = '#d70000';
  const RED_LABEL = '#8d1200';
  const RED_LINK = '#e68184';
  const RIGHT_LABEL_X = 2360;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const kpiCard = (x, width, title, value, note) => `
    <g>
      <rect x="${x}" y="1134" width="${width}" height="148" rx="29" fill="${BLUE}"/>
      <text x="${x + width / 2}" y="1187" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1225" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1256" text-anchor="middle" font-size="22" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="123" y="256" font-size="39" font-weight="800" fill="${TITLE}">By Business Segment</text>
      ${kpiCard(117, 242, 'CET1 ratio', '12.5%', '(2.3pp) Y/Y')}
      ${kpiCard(367, 352, 'Annualized ROE', '19.8%', '+2.9pp Y/Y')}
      <text x="244" y="1320" font-size="28" font-weight="500" fill="${NOTE}">CET1 = Common Equity Tier 1</text>
      <text x="162" y="1352" font-size="28" font-weight="500" fill="${NOTE}">ROE = Return on average common equity</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'goldman-sachs-q1-fy26',
    name: 'Goldman Sachs - Q1 FY26',
    company: 'Goldman Sachs',
    meta: {
      company: 'Goldman Sachs',
      title: 'Goldman Sachs Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/goldman-sachs-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2508,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 244,
      logoHeight: 242,
      logoY: 241,
      logoViewBox: '0 0 244 242',
      logoSvg: BUSINESS_ICONS.goldmanSachsWordmark || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
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
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    nodes: [
      { id: 'global_banking_markets', label: ['Global Banking &', 'Markets'], value: 12.7, notes: ['+19% Y/Y', '37% net margin'], type: 'source', col: 0, order: 0 },
      { id: 'asset_wealth_management', label: ['Asset & Wealth', 'Management'], value: 4.1, notes: ['+10% Y/Y', '20% net margin'], type: 'source', col: 0, order: 1 },
      { id: 'platform_solutions', label: 'Platform Solutions', value: 0.4, notes: ['(33%) Y/Y', '16% net margin'], type: 'source', col: 0, order: 2 },
      { id: 'revenue', label: 'Revenue', value: 17.2, notes: ['+14% Y/Y'], type: 'hub', col: 1, order: 0 },
      { id: 'gross_profit', label: '', value: 16.9, type: 'profit', col: 1, order: 1, color: BG, labelColor: BG, linkTint: BG },
      { id: 'pretax_income', label: 'Pretax income', value: 6.5, type: 'profit', col: 2, order: 0 },
      { id: 'operating_expenses', label: ['Operating', 'expenses'], value: 10.4, type: 'cost', col: 2, order: 1 },
      { id: 'provision_for_credit_loss', label: ['Provision for', 'credit loss'], value: 0.3, type: 'cost', col: 2, order: 2 },
      { id: 'net_income', label: 'Net income', value: 5.6, notes: ['+19% Y/Y'], type: 'profit', col: 3, order: 0 },
      { id: 'tax', label: 'Tax', value: 0.9, type: 'cost', col: 3, order: 1 },
      { id: 'compensation_benefits', label: ['Compensation', '& benefits'], value: 5.4, type: 'cost', col: 3, order: 2 },
      { id: 'transaction_based', label: 'Transaction based', value: 2.5, type: 'cost', col: 3, order: 3 },
      { id: 'market_development', label: 'Market dev.', value: 0.2, type: 'cost', col: 3, order: 4 },
      { id: 'communication_technology', label: ['Communication,', 'Technology'], value: 0.6, type: 'cost', col: 3, order: 5 },
      { id: 'da', label: 'D&A', value: 0.5, type: 'cost', col: 3, order: 6 },
      { id: 'occupancy', label: 'Occupancy', value: 0.3, type: 'cost', col: 3, order: 7 },
      { id: 'professional_fees', label: 'Professional fees', value: 0.4, type: 'cost', col: 3, order: 8 },
      { id: 'other', label: 'Other', value: 0.6, type: 'cost', col: 3, order: 9 },
    ],
    links: [
      { source: 'global_banking_markets', target: 'revenue', value: 12.7, targetOrder: 0 },
      { source: 'asset_wealth_management', target: 'revenue', value: 4.1, targetOrder: 1 },
      { source: 'platform_solutions', target: 'revenue', value: 0.4, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 16.9, sourceOrder: 0, targetOrder: 0, linkTint: { left: BG, right: BG } },
      { source: 'revenue', target: 'provision_for_credit_loss', value: 0.3, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'pretax_income', value: 6.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 10.4, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 5.6, sourceOrder: 0, targetOrder: 0 },
      { source: 'pretax_income', target: 'tax', value: 0.9, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'compensation_benefits', value: 5.4, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'transaction_based', value: 2.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'market_development', value: 0.2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'communication_technology', value: 0.6, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.5, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'occupancy', value: 0.3, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'professional_fees', value: 0.4, sourceOrder: 6, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other', value: 0.6, sourceOrder: 7, targetOrder: 0 },
    ],
    layout: {
      scale: 16.25,
      nodes: {
        global_banking_markets: { x: 397, y: 483, width: 73, height: 206.375 },
        asset_wealth_management: { x: 397, y: 860, width: 73, height: 66.625 },
        platform_solutions: { x: 397, y: 1068, width: 73, height: 6.5 },
        revenue: { x: 1019, y: 655, width: 74, height: 279.5 },
        gross_profit: { x: 1093, y: 655, width: 0, height: 274.625 },
        pretax_income: { x: 1642, y: 485, width: 73, height: 105.625 },
        operating_expenses: { x: 1642, y: 862, width: 73, height: 169 },
        provision_for_credit_loss: { x: 1642, y: 1204, width: 73, height: 4.875 },
        net_income: { x: 2266, y: 237, width: 74, height: 91 },
        tax: { x: 2266, y: 400, width: 74, height: 14.625 },
        compensation_benefits: { x: 2266, y: 471, width: 74, height: 87.75 },
        transaction_based: { x: 2266, y: 631, width: 74, height: 40.625 },
        market_development: { x: 2266, y: 752, width: 74, height: 3.25 },
        communication_technology: { x: 2266, y: 852, width: 74, height: 9.75 },
        da: { x: 2266, y: 968, width: 74, height: 8.125 },
        occupancy: { x: 2266, y: 1075, width: 74, height: 4.875 },
        professional_fees: { x: 2266, y: 1193, width: 74, height: 6.5 },
        other: { x: 2266, y: 1299, width: 74, height: 9.75 },
      },
      labels: {
        global_banking_markets: {
          blocks: [
            { x: 433, top: 386, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE }] },
            { x: 381, top: 525, anchor: 'end', lineGap: 13, lines: [{ text: 'Global Banking &', size: 38, weight: 800 }, { text: 'Markets', size: 38, weight: 800 }, { text: '37% net margin', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        asset_wealth_management: {
          blocks: [
            { x: 433, top: 765, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE }] },
            { x: 383, top: 831, anchor: 'end', lineGap: 13, lines: [{ text: 'Asset & Wealth', size: 38, weight: 800 }, { text: 'Management', size: 38, weight: 800 }, { text: '20% net margin', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        platform_solutions: {
          blocks: [
            { x: 433, top: 971, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(33%) Y/Y', size: 28, weight: 400, color: NOTE }] },
            { x: 383, top: 1034, anchor: 'end', lineGap: 13, lines: [{ text: 'Platform Solutions', size: 37, weight: 800 }, { text: '16% net margin', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        revenue: {
          blocks: [
            { x: 968, top: 508, anchor: 'start', lineGap: 10, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        gross_profit: { blocks: [] },
        pretax_income: {
          blocks: [
            { x: 1678, top: 374, anchor: 'middle', lineGap: 10, lines: [{ text: 'Pretax income', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }] },
          ],
        },
        operating_expenses: {
          blocks: [
            { x: 1678, top: 1049, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating', size: 38, weight: 800 }, { text: 'expenses', size: 38, weight: 800 }, { text: '$value', size: 36, weight: 400 }] },
          ],
        },
        provision_for_credit_loss: {
          blocks: [
            { x: 1660, top: 1218, anchor: 'middle', lineGap: 10, lines: [{ text: 'Provision for', size: 35, weight: 800 }, { text: 'credit loss', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }] },
          ],
        },
        net_income: {
          blocks: [
            { x: 2379, top: 224, anchor: 'start', lineGap: 10, lines: [{ text: 'Net income', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        tax: {
          blocks: [
            { x: 2440, top: 372, anchor: 'start', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] },
          ],
        },
        compensation_benefits: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 480, anchor: 'start', lineGap: 8, lines: [{ text: 'Compensation', size: 30, weight: 800 }, { text: '& benefits', size: 30, weight: 800 }, { text: '$value', size: 29, weight: 400 }] },
          ],
        },
        transaction_based: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 614, anchor: 'start', lineGap: 8, lines: [{ text: 'Transaction based', size: 30, weight: 800 }, { text: '$value', size: 29, weight: 400 }] },
          ],
        },
        market_development: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 719, anchor: 'start', lineGap: 8, lines: [{ text: 'Market dev.', size: 30, weight: 800 }, { text: '$value', size: 29, weight: 400 }] },
          ],
        },
        communication_technology: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 823, anchor: 'start', lineGap: 8, lines: [{ text: 'Communication,', size: 30, weight: 800 }, { text: 'Technology', size: 30, weight: 800 }, { text: '$value', size: 29, weight: 400 }] },
          ],
        },
        da: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 946, anchor: 'start', lineGap: 8, lines: [{ text: 'D&A', size: 30, weight: 800 }, { text: '$value', size: 29, weight: 400 }] },
          ],
        },
        occupancy: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 1049, anchor: 'start', lineGap: 8, lines: [{ text: 'Occupancy', size: 30, weight: 800 }, { text: '$value', size: 29, weight: 400 }] },
          ],
        },
        professional_fees: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 1161, anchor: 'start', lineGap: 8, lines: [{ text: 'Professional fees', size: 30, weight: 800 }, { text: '$value', size: 29, weight: 400 }] },
          ],
        },
        other: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 1275, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 30, weight: 800 }, { text: '$value', size: 29, weight: 400 }] },
          ],
        },
      },
    },
  });
})();
