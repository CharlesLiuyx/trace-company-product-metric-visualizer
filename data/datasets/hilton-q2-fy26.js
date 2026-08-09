/* ====================================================================
 * Hilton - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/hilton-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLUE = '#213e99';
  const BLUE_LINK = '#94a1c9';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#757575';

  const hiltonLogo = `
    <g data-typography-role="brand">
      <g transform="translate(830 238)" fill="none" stroke="${BLUE}" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="236" cy="87" rx="120" ry="80" stroke-width="8"/>
        <ellipse cx="236" cy="113" rx="62" ry="51" stroke-width="7"/>
        <path d="M118 126 C91 72 132 25 208 17" stroke-width="7"/>
        <path d="M355 124 C381 74 342 24 267 17" stroke-width="7"/>
        <rect x="200" y="35" width="35" height="89" fill="${BLUE}" stroke="none"/>
        <rect x="253" y="35" width="35" height="100" fill="${BLUE}" stroke="none"/>
        <rect x="222" y="76" width="43" height="12" fill="${BLUE}" stroke="none"/>
      </g>
      <text x="1066" y="535" text-anchor="middle" font-family="Georgia,Times New Roman,serif" font-size="151" font-weight="700" textLength="430" lengthAdjust="spacingAndGlyphs" fill="${BLUE}">Hilton</text>
    </g>`;

  const statsCard = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="148" rx="24" fill="${BLUE}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${y + 48 + index * 37}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${hiltonLogo}
      ${statsCard(96, 1156, 305, [
        { text: 'Comparable', size: 27, weight: 800 },
        { text: 'Systemwide RevPAR', size: 24, weight: 800 },
        { text: '+3.9% Y/Y', size: 24, weight: 400 },
      ])}
      ${statsCard(412, 1156, 330, [
        { text: '9,453 properties', size: 27, weight: 800 },
        { text: '1.38M rooms', size: 27, weight: 800 },
      ])}
      <text x="329" y="1344" text-anchor="middle" font-size="29" font-weight="400" fill="${NOTE}">RevPAR = Revenue Per Available Room</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${hiltonLogo}
      ${statsCard(96, 1156, 305, [
        { text: '可比', size: 27, weight: 800 },
        { text: '全系统 RevPAR', size: 24, weight: 800 },
        { text: '同比 +3.9%', size: 24, weight: 400 },
      ])}
      ${statsCard(412, 1156, 330, [
        { text: '9,453 处物业', size: 27, weight: 800 },
        { text: '1.38M 间客房', size: 27, weight: 800 },
      ])}
      <text x="329" y="1344" text-anchor="middle" font-size="29" font-weight="400" fill="${NOTE}">RevPAR = 每间可售客房收入</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hilton-q2-fy26',
    name: 'Hilton · Q2 FY26',
    company: 'Hilton',
    meta: {
      company: 'Hilton',
      title: 'Hilton Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/hilton-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 174,
      titleSize: 130,
      titleWeight: 800,
      titleTextLength: 2116,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 86.5,
      nodes: {
        franchise_fees: { x: 407, y: 290, width: 71, height: 70 },
        base_management_fees: { x: 407, y: 457, width: 71, height: 9 },
        incentive_management_fees: { x: 407, y: 580, width: 71, height: 6 },
        owned_leased_and_other: { x: 407, y: 700, width: 71, height: 26 },
        other_revenue: { x: 407, y: 840, width: 71, height: 6 },
        managed_franchised_other_revenue: { x: 407, y: 963, width: 71, height: 172 },
        revenue: { x: 1029, y: 731, width: 72, height: 289 },
        operating_profit: { x: 1652, y: 556, width: 72, height: 74 },
        operating_expenses: { x: 1652, y: 930, width: 72, height: 215 },
        net_profit: { x: 2275, y: 337, width: 71, height: 42 },
        tax: { x: 2275, y: 565, width: 72, height: 15 },
        other_nonoperating: { x: 2275, y: 681, width: 72, height: 17 },
        owned_leased_hotels: { x: 2275, y: 806, width: 72, height: 24 },
        ga: { x: 2275, y: 939, width: 72, height: 11 },
        da: { x: 2275, y: 1067, width: 71, height: 2 },
        managed_franchised_other_expenses: { x: 2275, y: 1190, width: 72, height: 178 },
      },
      labels: {
        franchise_fees: { blocks: [
          { x: 443, top: 192, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 354, top: 300, anchor: 'end', lines: [{ text: 'Franchise fees', size: 40, weight: 800 }] },
        ] },
        base_management_fees: { blocks: [
          { x: 443, top: 369, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 342, top: 415, anchor: 'end', lineGap: 9, lines: [
            { text: 'Base', size: 34, weight: 800 },
            { text: 'management fees', size: 34, weight: 800 },
          ] },
        ] },
        incentive_management_fees: { blocks: [
          { x: 443, top: 488, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(8%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 354, top: 544, anchor: 'end', lineGap: 9, lines: [
            { text: 'Incentive', size: 34, weight: 800 },
            { text: 'management fees', size: 34, weight: 800 },
          ] },
        ] },
        owned_leased_and_other: { blocks: [
          { x: 443, top: 612, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(6%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 318, top: 670.5, anchor: 'end', lineGap: 16, lines: [
            { text: 'Owned, leased', size: 34, weight: 800 },
            { text: 'and other', size: 34, weight: 800 },
          ] },
        ] },
        other_revenue: { blocks: [
          { x: 443, top: 734, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(6%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 268, top: 822.5, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
        ] },
        managed_franchised_other_revenue: { blocks: [
          { x: 438, top: 875, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 342, top: 962.5, anchor: 'end', lineGap: 9, lines: [
            { text: 'Other revenue', size: 34, weight: 800 },
            { text: 'from managed &', size: 34, weight: 800 },
            { text: 'franchised', size: 34, weight: 800 },
            { text: 'properties', size: 34, weight: 800 },
          ] },
        ] },
        revenue: { blocks: [{ x: 1065, top: 589, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Revenue', size: 40, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        operating_profit: { blocks: [{ x: 1688, top: 372, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Operating profit', size: 40, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '26% margin', size: 29, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1688, top: 1166, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 39, weight: 800 },
          { text: 'expenses', size: 39, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2400, top: 304, anchor: 'start', lineGap: 10, lines: [
          { text: 'Net profit', size: 40, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '14% margin', size: 29, weight: 400, color: NOTE },
          { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2494, top: 537, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
        other_nonoperating: { blocks: [{ x: 2494, top: 652, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
        owned_leased_hotels: { blocks: [{ x: 2502, top: 776, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Owned, leased', size: 31, weight: 800 },
          { text: 'hotels', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
        ga: { blocks: [
          { x: 2410, top: 932, anchor: 'start', lines: [{ text: 'G&A', size: 31, weight: 800 }] },
          { x: 2483, top: 932, anchor: 'start', lines: [{ text: '$value', size: 30, weight: 400 }] },
        ] },
        da: { blocks: [
          { x: 2411, top: 1058, anchor: 'start', lines: [{ text: 'D&A', size: 31, weight: 800 }] },
          { x: 2483, top: 1058, anchor: 'start', lines: [{ text: '$value', size: 30, weight: 400 }] },
        ] },
        managed_franchised_other_expenses: { blocks: [{ x: 2503, top: 1186, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other expenses', size: 31, weight: 800 },
          { text: 'from managed', size: 31, weight: 800 },
          { text: '& franchised', size: 31, weight: 800 },
          { text: 'properties', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
      },
    },

    nodes: [
      { id: 'franchise_fees', col: 0, order: 0, type: 'source', label: 'Franchise fees', value: 0.808, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'base_management_fees', col: 0, order: 1, type: 'source', label: ['Base', 'management fees'], value: 0.099, notes: ['+2% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'incentive_management_fees', col: 0, order: 2, type: 'source', label: ['Incentive', 'management fees'], value: 0.069, notes: ['(8%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'owned_leased_and_other', col: 0, order: 3, type: 'source', label: ['Owned, leased', 'and other'], value: 0.311, notes: ['(6%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.072, notes: ['(6%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'managed_franchised_other_revenue', col: 0, order: 5, type: 'source', label: ['Other revenue', 'from managed &', 'franchised', 'properties'], value: 1.982, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.341, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.858, notes: ['26% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.483, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.482, notes: ['14% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.198, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_nonoperating', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.178, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'owned_leased_hotels', col: 4, order: 3, type: 'cost', label: ['Owned, leased', 'hotels'], value: 0.266, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 0.114, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 4, order: 5, type: 'cost', label: 'D&A', value: 0.049, valueText: '($49M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'managed_franchised_other_expenses', col: 4, order: 6, type: 'cost', label: ['Other expenses', 'from managed', '& franchised', 'properties'], value: 2.054, notes: ['Includes reimbursed expenses and other expenses.'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    nonNodeMetrics: [
      { id: 'gross_profit', representation: 'data-only' },
      { id: 'cost_of_revenue', representation: 'data-only' },
    ],

    links: [
      { source: 'franchise_fees', target: 'revenue', value: 0.808, width: 70, sourceOrder: 0, targetOrder: 0 },
      { source: 'base_management_fees', target: 'revenue', value: 0.099, width: 9, sourceOrder: 0, targetOrder: 1 },
      { source: 'incentive_management_fees', target: 'revenue', value: 0.069, width: 6, sourceOrder: 0, targetOrder: 2 },
      { source: 'owned_leased_and_other', target: 'revenue', value: 0.311, width: 26, sourceOrder: 0, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.072, width: 6, sourceOrder: 0, targetOrder: 4 },
      { source: 'managed_franchised_other_revenue', target: 'revenue', value: 1.982, width: 172, sourceOrder: 0, targetOrder: 5 },
      { source: 'revenue', target: 'operating_profit', value: 0.858, width: 74, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 2.483, width: 215, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.482, width: 42, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.198, width: 15, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.178, width: 17, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'owned_leased_hotels', value: 0.266, width: 24, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.114, width: 11, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.049, width: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'managed_franchised_other_expenses', value: 2.054, width: 178, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Hilton · 2026 财年第二季度',
        meta: {
          title: 'Hilton 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
        },
        annotationsSvg: annotationsZh,
        layout: {
          labels: {
            ga: { blocks: [
              { x: 2390, top: 932, anchor: 'start', lines: [{ text: '管理费用', size: 29, weight: 800, color: RED_LABEL }] },
              { x: 2545, top: 932, anchor: 'start', lines: [{ text: '$value', size: 30, weight: 400, color: RED_LABEL }] },
            ] },
            da: { blocks: [
              { x: 2380, top: 1058, anchor: 'start', lines: [{ text: '折旧与摊销', size: 28, weight: 800, color: RED_LABEL }] },
              { x: 2545, top: 1058, anchor: 'start', lines: [{ text: '$value', size: 30, weight: 400, color: RED_LABEL }] },
            ] },
          },
        },
        nodes: {
          franchise_fees: { label: '特许经营费', notes: ['同比 +8%'] },
          base_management_fees: { label: '基础管理费', notes: ['同比 +2%'] },
          incentive_management_fees: { label: '激励管理费', notes: ['同比 (8%)'] },
          owned_leased_and_other: { label: '自有、租赁及其他', notes: ['同比 (6%)'] },
          other_revenue: { label: '其他', notes: ['同比 (6%)'] },
          managed_franchised_other_revenue: { label: '管理和特许经营物业的其他收入', notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 26%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 14%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          other_nonoperating: { label: '其他' },
          owned_leased_hotels: { label: '自有及租赁酒店' },
          ga: { label: '管理费用' },
          da: { label: '折旧与摊销' },
          managed_franchised_other_expenses: { label: '管理和特许经营物业的其他费用', notes: ['包括报销费用和其他费用。'] },
        },
      },
    },
  });
})();
