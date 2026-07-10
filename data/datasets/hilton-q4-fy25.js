/* ====================================================================
 * Hilton - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/hilton-q4-fy25.png as a fixed
 * d3-sankey layout with measured SVG geometry and vector annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLUE = '#2945a0';
  const BLUE_LINK = '#94a1c9';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#d90000';
  const RED_LABEL = '#991400';
  const RED_LINK = '#df8585';
  const NOTE = '#666666';

  const hiltonLogoSvg = `
    <g fill="none" stroke="${BLUE}" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="236" cy="87" rx="120" ry="80" stroke-width="8"/>
      <ellipse cx="236" cy="113" rx="62" ry="51" stroke-width="7"/>
      <path d="M118 126 C91 72 132 25 208 17" stroke-width="7"/>
      <path d="M355 124 C381 74 342 24 267 17" stroke-width="7"/>
      <rect x="200" y="35" width="35" height="89" fill="${BLUE}" stroke="none"/>
      <rect x="253" y="35" width="35" height="100" fill="${BLUE}" stroke="none"/>
      <rect x="222" y="76" width="43" height="12" fill="${BLUE}" stroke="none"/>
    </g>
    <text x="236" y="305" text-anchor="middle" font-family="Georgia,Times New Roman,serif" font-size="151" font-weight="700" textLength="430" lengthAdjust="spacingAndGlyphs" fill="${BLUE}">Hilton</text>`;

  const statCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1136" width="${width}" height="150" rx="25" fill="${BLUE}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${1187 + index * 37}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${statCard(96, 305, [
        { text: 'Comparable', size: 27, weight: 800 },
        { text: 'Systemwide RevPAR', size: 24, weight: 800 },
        { text: '+0.5% Y/Y', size: 24, weight: 400 },
      ])}
      ${statCard(412, 332, [
        { text: '9,044 properties', size: 27, weight: 800 },
        { text: '1.31M rooms', size: 27, weight: 800 },
      ])}
      <text x="329" y="1320" text-anchor="middle" font-size="29" fill="${NOTE}">RevPAR = Revenue Per Available Room</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${statCard(96, 305, [
        { text: '可比', size: 27, weight: 800 },
        { text: '全系统 RevPAR', size: 24, weight: 800 },
        { text: '同比 +0.5%', size: 24, weight: 400 },
      ])}
      ${statCard(412, 332, [
        { text: '9,044 处物业', size: 27, weight: 800 },
        { text: '1.31M 间客房', size: 27, weight: 800 },
      ])}
      <text x="329" y="1320" text-anchor="middle" font-size="29" fill="${NOTE}">RevPAR = 每间可售客房收入</text>
    </g>`;

  const zhLabels = {
    franchise_fees: { blocks: [{ x: 447, top: 183, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +5%', size: 29, weight: 400, color: NOTE }] }, { x: 355, top: 290, anchor: 'end', lines: [{ text: '特许经营费', size: 40, weight: 800 }] }] },
    base_management_fees: { blocks: [{ x: 447, top: 355, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +20%', size: 29, weight: 400, color: NOTE }] }, { x: 355, top: 405, anchor: 'end', lineGap: 9, lines: [{ text: '基础', size: 34, weight: 800 }, { text: '管理费', size: 34, weight: 800 }] }] },
    incentive_management_fees: { blocks: [{ x: 447, top: 468, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +17%', size: 29, weight: 400, color: NOTE }] }, { x: 355, top: 520, anchor: 'end', lineGap: 9, lines: [{ text: '激励', size: 34, weight: 800 }, { text: '管理费', size: 34, weight: 800 }] }] },
    owned_leased_and_other: { blocks: [{ x: 447, top: 588, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +4%', size: 29, weight: 400, color: NOTE }] }, { x: 355, top: 642, anchor: 'end', lineGap: 9, lines: [{ text: '自有、租赁', size: 34, weight: 800 }, { text: '及其他', size: 34, weight: 800 }] }] },
    other_revenue: { blocks: [{ x: 447, top: 730, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +23%', size: 29, weight: 400, color: NOTE }] }, { x: 355, top: 813, anchor: 'end', lines: [{ text: '其他', size: 40, weight: 800 }] }] },
    managed_franchised_other_revenue: { blocks: [{ x: 447, top: 854, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +14%', size: 29, weight: 400, color: NOTE }] }, { x: 355, top: 930, anchor: 'end', lineGap: 9, lines: [{ text: '管理和特许', size: 32, weight: 800 }, { text: '经营物业的', size: 32, weight: 800 }, { text: '其他收入', size: 32, weight: 800 }] }] },
    revenue: { blocks: [{ x: 1071, top: 570, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +11%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [] }, cost_of_revenue: { blocks: [] },
    operating_profit: { blocks: [{ x: 1692, top: 372, anchor: 'middle', lineGap: 10, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 20%', size: 29, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1692, top: 1152, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2407, top: 295, anchor: 'start', lineGap: 10, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 10%', size: 29, weight: 400, color: NOTE }, { text: '同比 (8 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    other_nonoperating: { blocks: [{ x: 2445, top: 515, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
    tax: { blocks: [{ x: 2445, top: 610, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
    owned_leased_hotels: { blocks: [{ x: 2475, top: 738, anchor: 'middle', lineGap: 8, lines: [{ text: '自有及租赁', size: 30, weight: 800 }, { text: '酒店', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
    ga: { blocks: [{ x: 2408, top: 882, anchor: 'start', lines: [{ text: '管理费用 ($0.1B)', size: 29, weight: 800 }] }] },
    da: { blocks: [{ x: 2408, top: 984, anchor: 'start', lines: [{ text: '折旧与摊销 ($47M)', size: 29, weight: 800 }] }] },
    other_operating: { blocks: [{ x: 2408, top: 1086, anchor: 'start', lines: [{ text: '其他 ($0.1B)', size: 29, weight: 800 }] }] },
    managed_franchised_other_expenses: { blocks: [{ x: 2480, top: 1187, anchor: 'middle', lineGap: 8, lines: [{ text: '管理和特许经营', size: 30, weight: 800 }, { text: '物业的其他费用', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hilton-q4-fy25', name: 'Hilton · Q4 FY25', company: 'Hilton',
    meta: {
      company: 'Hilton', title: 'Hilton Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/hilton-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 174, titleSize: 130, titleWeight: 800, titleTextLength: 2116, periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 472, logoHeight: 310, logoY: 230, logoViewBox: '0 0 472 310', logoSvg: hiltonLogoSvg,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 90,
      nodes: {
        franchise_fees: { x: 410, y: 273, width: 74, height: 60 }, base_management_fees: { x: 410, y: 446, width: 74, height: 9 }, incentive_management_fees: { x: 410, y: 558, width: 74, height: 9 },
        owned_leased_and_other: { x: 410, y: 678, width: 74, height: 31 }, other_revenue: { x: 410, y: 820, width: 74, height: 6 }, managed_franchised_other_revenue: { x: 410, y: 943, width: 74, height: 163 },
        revenue: { x: 1034, y: 711, width: 72, height: 278 }, gross_profit: { x: -1000, y: -1000, width: 1, height: 1 }, cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
        operating_profit: { x: 1656, y: 558, width: 73, height: 54 }, operating_expenses: { x: 1656, y: 920, width: 73, height: 224 },
        net_profit: { x: 2282, y: 343, width: 71, height: 27 }, other_nonoperating: { x: 2282, y: 540, width: 71, height: 16 }, tax: { x: 2282, y: 633, width: 71, height: 12 },
        owned_leased_hotels: { x: 2282, y: 760, width: 71, height: 26 }, ga: { x: 2282, y: 889, width: 71, height: 9 }, da: { x: 2282, y: 992, width: 71, height: 6 }, other_operating: { x: 2282, y: 1093, width: 71, height: 5 }, managed_franchised_other_expenses: { x: 2282, y: 1192, width: 71, height: 180 },
      },
      labels: {
        franchise_fees: { blocks: [{ x: 447, top: 183, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 355, top: 290, anchor: 'end', lines: [{ text: 'Franchise fees', size: 40, weight: 800 }] }] },
        base_management_fees: { blocks: [{ x: 447, top: 355, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 355, top: 405, anchor: 'end', lineGap: 9, lines: [{ text: 'Base', size: 34, weight: 800 }, { text: 'management fees', size: 34, weight: 800 }] }] },
        incentive_management_fees: { blocks: [{ x: 447, top: 468, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 355, top: 520, anchor: 'end', lineGap: 9, lines: [{ text: 'Incentive', size: 34, weight: 800 }, { text: 'management fees', size: 34, weight: 800 }] }] },
        owned_leased_and_other: { blocks: [{ x: 447, top: 588, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 355, top: 642, anchor: 'end', lineGap: 9, lines: [{ text: 'Owned, leased', size: 34, weight: 800 }, { text: 'and other', size: 34, weight: 800 }] }] },
        other_revenue: { blocks: [{ x: 447, top: 730, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 355, top: 813, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] }] },
        managed_franchised_other_revenue: { blocks: [{ x: 447, top: 854, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 355, top: 930, anchor: 'end', lineGap: 9, lines: [{ text: 'Other revenue', size: 34, weight: 800 }, { text: 'from managed &', size: 34, weight: 800 }, { text: 'franchised', size: 34, weight: 800 }, { text: 'properties', size: 34, weight: 800 }] }] },
        revenue: { blocks: [{ x: 1071, top: 570, anchor: 'middle', lineGap: 10, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE }] }] }, gross_profit: { blocks: [] }, cost_of_revenue: { blocks: [] },
        operating_profit: { blocks: [{ x: 1692, top: 372, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '20% margin', size: 29, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1692, top: 1152, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2407, top: 295, anchor: 'start', lineGap: 10, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '10% margin', size: 29, weight: 400, color: NOTE }, { text: '(8pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        other_nonoperating: { blocks: [{ x: 2445, top: 515, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] }, tax: { blocks: [{ x: 2445, top: 610, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        owned_leased_hotels: { blocks: [{ x: 2475, top: 738, anchor: 'middle', lineGap: 8, lines: [{ text: 'Owned, leased', size: 31, weight: 800 }, { text: 'hotels', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] }, ga: { blocks: [{ x: 2408, top: 882, anchor: 'start', lines: [{ text: 'G&A ($0.1B)', size: 29, weight: 800 }] }] }, da: { blocks: [{ x: 2408, top: 984, anchor: 'start', lines: [{ text: 'D&A ($47M)', size: 29, weight: 800 }] }] }, other_operating: { blocks: [{ x: 2408, top: 1086, anchor: 'start', lines: [{ text: 'Other ($0.1B)', size: 29, weight: 800 }] }] },
        managed_franchised_other_expenses: { blocks: [{ x: 2480, top: 1187, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other expenses', size: 31, weight: 800 }, { text: 'from managed', size: 31, weight: 800 }, { text: '& franchised', size: 31, weight: 800 }, { text: 'properties', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
      },
    },
    nodes: [
      { id: 'franchise_fees', col: 0, order: 0, type: 'source', label: 'Franchise fees', value: 0.671, notes: ['+5% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK }, { id: 'base_management_fees', col: 0, order: 1, type: 'source', label: ['Base', 'management fees'], value: 0.098, notes: ['+20% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK }, { id: 'incentive_management_fees', col: 0, order: 2, type: 'source', label: ['Incentive', 'management fees'], value: 0.101, notes: ['+17% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK }, { id: 'owned_leased_and_other', col: 0, order: 3, type: 'source', label: ['Owned, leased', 'and other'], value: 0.345, notes: ['+4% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK }, { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.065, notes: ['+23% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK }, { id: 'managed_franchised_other_revenue', col: 0, order: 5, type: 'source', label: ['Other revenue', 'from managed &', 'franchised', 'properties'], value: 1.807, notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.087, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK }, { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.087, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK }, { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0, valueText: '($0.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.602, notes: ['20% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK }, { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.485, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.298, notes: ['10% margin', '(8pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK }, { id: 'other_nonoperating', col: 4, order: 1, type: 'cost', label: 'Other', value: 0.173, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK }, { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.131, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK }, { id: 'owned_leased_hotels', col: 4, order: 3, type: 'cost', label: ['Owned, leased', 'hotels'], value: 0.292, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK }, { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 0.095, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK }, { id: 'da', col: 4, order: 5, type: 'cost', label: 'D&A', value: 0.047, valueText: '($47M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK }, { id: 'other_operating', col: 4, order: 6, type: 'cost', label: 'Other', value: 0.057, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK }, { id: 'managed_franchised_other_expenses', col: 4, order: 7, type: 'cost', label: ['Other expenses', 'from managed', '& franchised', 'properties'], value: 1.994, valueText: '($1.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'franchise_fees', target: 'revenue', value: 0.671, width: 60.39, sourceOrder: 0, targetOrder: 0 }, { source: 'base_management_fees', target: 'revenue', value: 0.098, width: 8.82, sourceOrder: 0, targetOrder: 1 }, { source: 'incentive_management_fees', target: 'revenue', value: 0.101, width: 9.09, sourceOrder: 0, targetOrder: 2 }, { source: 'owned_leased_and_other', target: 'revenue', value: 0.345, width: 31.05, sourceOrder: 0, targetOrder: 3 }, { source: 'other_revenue', target: 'revenue', value: 0.065, width: 5.85, sourceOrder: 0, targetOrder: 4 }, { source: 'managed_franchised_other_revenue', target: 'revenue', value: 1.807, width: 162.63, sourceOrder: 0, targetOrder: 5 },
      { source: 'revenue', target: 'operating_profit', value: 0.602, width: 54.18, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'revenue', target: 'operating_expenses', value: 2.485, width: 223.65, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.298, width: 26.82, sourceOrder: 0, targetOrder: 0 }, { source: 'operating_profit', target: 'other_nonoperating', value: 0.173, width: 15.57, sourceOrder: 1, targetOrder: 0 }, { source: 'operating_profit', target: 'tax', value: 0.131, width: 11.79, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'owned_leased_hotels', value: 0.292, width: 26.28, sourceOrder: 0, targetOrder: 0 }, { source: 'operating_expenses', target: 'ga', value: 0.095, width: 8.55, sourceOrder: 1, targetOrder: 0 }, { source: 'operating_expenses', target: 'da', value: 0.047, width: 4.23, sourceOrder: 2, targetOrder: 0 }, { source: 'operating_expenses', target: 'other_operating', value: 0.057, width: 5.13, sourceOrder: 3, targetOrder: 0 }, { source: 'operating_expenses', target: 'managed_franchised_other_expenses', value: 1.994, width: 179.46, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Hilton · 2025 财年第四季度', meta: { title: 'Hilton 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月' }, annotationsSvg: annotationsZh, layout: { labels: zhLabels },
        nodes: {
          franchise_fees: { label: '特许经营费', notes: ['同比 +5%'] }, base_management_fees: { label: '基础管理费', notes: ['同比 +20%'] }, incentive_management_fees: { label: '激励管理费', notes: ['同比 +17%'] }, owned_leased_and_other: { label: '自有、租赁及其他', notes: ['同比 +4%'] }, other_revenue: { label: '其他', notes: ['同比 +23%'] }, managed_franchised_other_revenue: { label: '管理和特许经营物业的其他收入', notes: ['同比 +14%'] }, revenue: { label: '收入', notes: ['同比 +11%'] }, gross_profit: { label: '毛利润' }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 +2 个百分点'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (8 个百分点)'] }, other_nonoperating: { label: '其他' }, tax: { label: '税费' }, owned_leased_hotels: { label: '自有及租赁酒店' }, ga: { label: '管理费用' }, da: { label: '折旧与摊销' }, other_operating: { label: '其他' }, managed_franchised_other_expenses: { label: '管理和特许经营物业的其他费用' },
        },
      },
    },
  });
})();
