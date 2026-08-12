/* Nike Q1 FY26 income statement, reconstructed from the 2667x1500 Source. */
(function () {
  const TITLE = '#155077';
  const BLACK = '#000000';
  const GREY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const calloutBox = `
    <path d="M857 1108 L883 1161 L832 1161 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="727" y="1161" width="240" height="109" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>`;

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="847" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">China<tspan fill="${RED_LABEL}" font-weight="700"> (9%) Y/Y</tspan></text>
        <text x="847" y="1244" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${GREEN_LABEL}" font-weight="700"> +3% Y/Y</tspan></text>
      </g>
      <text x="847" y="1305" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = Rest of World</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="847" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">中国<tspan fill="${RED_LABEL}" font-weight="700"> 同比 (9%)</tspan></text>
        <text x="847" y="1244" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${GREEN_LABEL}" font-weight="700"> 同比 +3%</tspan></text>
      </g>
      <text x="847" y="1305" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = 中国以外地区</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q1-fy26',
    name: 'Nike · Q1 FY26',
    company: 'Nike',
    meta: {
      company: 'Nike',
      title: 'Nike Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Aug. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      referenceImage: { src: 'input/processed/nike-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 189,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2002,
      periodX: 2428,
      periodY: 285,
      periodNoteY: 326,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GREY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      { key: 'nike-company-logo', href: 'data/assets/raster-annotations/nike/company-logo.png', x: 627, y: 257, width: 541, height: 301 },
      { key: 'nike-business-footwear', href: 'data/assets/raster-annotations/nike/business-footwear.png', x: 114, y: 468, width: 207, height: 140 },
      { key: 'nike-business-apparel', href: 'data/assets/raster-annotations/nike/business-apparel.png', x: 140, y: 694, width: 200, height: 164 },
      { key: 'nike-business-equipment', href: 'data/assets/raster-annotations/nike/business-equipment.png', x: 150, y: 920, width: 190, height: 152 },
      { key: 'nike-business-converse-q2-fy26', href: 'data/assets/raster-annotations/nike/business-converse-q2-fy26.png', x: 125, y: 1123, width: 205, height: 132 },
    ],

    layout: {
      scale: 30.5,
      nodes: {
        footwear: { x: 356, y: 480, width: 71, height: 225 },
        apparel: { x: 356, y: 846, width: 71, height: 99 },
        equipment: { x: 356, y: 1087, width: 71, height: 18 },
        converse: { x: 356, y: 1259, width: 71, height: 10 },
        revenue: { x: 823, y: 728, width: 70, height: 357 },
        gross_profit: { x: 1290, y: 596, width: 71, height: 149 },
        cost_of_sales: { x: 1290, y: 982, width: 71, height: 206 },
        operating_profit: { x: 1758, y: 506, width: 70, height: 26 },
        operating_expenses: { x: 1758, y: 730, width: 70, height: 120 },
        interest: { x: 2106, y: 488, width: 72, height: 3 },
        net_profit: { x: 2224, y: 423, width: 71, height: 20 },
        tax: { x: 2224, y: 626, width: 71, height: 4 },
        other: { x: 2224, y: 740, width: 72, height: 2 },
        overhead: { x: 2224, y: 886, width: 71, height: 84 },
        demand_creation: { x: 2224, y: 1176, width: 71, height: 34 },
      },
      labels: {
        footwear: { blocks: [
          { x: 400, top: 383, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '(1%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 226, top: 611, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: 'Footwear', size: 40, weight: 800, color: BLACK }] },
        ] },
        apparel: { blocks: [
          { x: 392, top: 748, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 228, top: 872, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: 'Apparel', size: 40, weight: 800, color: BLACK }] },
        ] },
        equipment: { blocks: [
          { x: 392, top: 987, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 230, top: 1076, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: 'Equipment', size: 40, weight: 800, color: BLACK }] },
        ] },
        converse: { blocks: [
          { x: 392, top: 1160, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '(25%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 233, top: 1254, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: 'Converse', size: 40, weight: 800, color: BLACK }] },
        ] },
        revenue: { blocks: [{ x: 858, top: 579, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 40, weight: 800, color: BLACK }, { text: '$value', size: 38, weight: 400, color: BLACK },
          { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1326, top: 413, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          { text: '42% margin', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        cost_of_sales: { blocks: [{ x: 1326, top: 1202, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of sales', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL },
        ] }] },
        operating_profit: { blocks: [{ x: 1793, top: 325, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          { text: '8% margin', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1793, top: 876, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ] }] },
        interest: { blocks: [{ x: 2142, top: 507, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Interest', size: 32, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 32, weight: 400, color: GREEN_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2428, top: 387, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          { text: '6% margin', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2428, top: 574, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL },
        ] }] },
        other: { blocks: [{ x: 2428, top: 710, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL },
        ] }] },
        overhead: { blocks: [{ x: 2428, top: 884, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Overhead', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL },
          { text: '24% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        demand_creation: { blocks: [{ x: 2428, top: 1147, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Demand', size: 32, weight: 800, color: RED_LABEL }, { text: 'Creation', size: 32, weight: 800, color: RED_LABEL },
          { text: '$value', size: 32, weight: 400, color: RED_LABEL }, { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
      },
    },

    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 7.4, valueText: '$7.4B', notes: ['(1%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.3, valueText: '$3.3B', notes: ['+9% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.6, valueText: '$0.6B', notes: ['+4% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.4, valueText: '$0.4B', notes: ['(25%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 11.7, valueText: '$11.7B', notes: ['+1% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.9, valueText: '$4.9B', notes: ['42% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 6.8, valueText: '($6.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.9, valueText: '$0.9B', notes: ['8% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.0, valueText: '($4.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.018, valueText: '$18M', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.7, valueText: '$0.7B', notes: ['6% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.023, valueText: '($23M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'overhead', col: 5, order: 3, type: 'cost', label: 'Overhead', value: 2.8, valueText: '($2.8B)', notes: ['24% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'demand_creation', col: 5, order: 4, type: 'cost', label: ['Demand', 'Creation'], value: 1.2, valueText: '($1.2B)', notes: ['10% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'footwear', target: 'revenue', value: 7.4, sourceWidth: 225, targetWidth: 230, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.3, sourceWidth: 99, targetWidth: 99, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.6, sourceWidth: 18, targetWidth: 18, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.4, sourceWidth: 10, targetWidth: 10, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 4.9, sourceWidth: 149, targetWidth: 149, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 6.8, sourceWidth: 208, targetWidth: 206, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.9, sourceWidth: 26, targetWidth: 26, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.0, sourceWidth: 123, targetWidth: 120, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.7, sourceWidth: 19, targetWidth: 18, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 6, targetWidth: 4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.023, sourceWidth: 1, targetWidth: 2, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'interest', target: 'net_profit', value: 0.018, sourceWidth: 3, targetWidth: 2, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'overhead', value: 2.8, sourceWidth: 86, targetWidth: 84, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.2, sourceWidth: 34, targetWidth: 34, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['RoW'],
      zh: {
        name: 'Nike · 2026 财年第一季度',
        meta: {
          title: 'Nike 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 8 月',
          titleTextLength: 1900,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 (1%)'] },
          apparel: { label: '服装', notes: ['同比 +9%'] },
          equipment: { label: '装备', notes: ['同比 +4%'] },
          converse: { notes: ['同比 (25%)'] },
          revenue: { label: '收入', notes: ['同比 +1%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 42%', '同比 (3 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 (3 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          overhead: { label: '管理费用', notes: ['占收入 24%', '同比 (2 个百分点)'] },
          demand_creation: { label: ['需求', '创造费用'], notes: ['占收入 10%', '同比 +1 个百分点'] },
        },
        layout: {
          labels: {
            footwear: { blocks: [
              { x: 400, top: 383, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 (1%)', size: 29, weight: 400, color: NOTE }] },
              { x: 226, top: 611, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: '鞋类', size: 40, weight: 800, color: BLACK }] },
            ] },
            apparel: { blocks: [
              { x: 392, top: 748, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +9%', size: 29, weight: 400, color: NOTE }] },
              { x: 228, top: 872, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: '服装', size: 40, weight: 800, color: BLACK }] },
            ] },
            equipment: { blocks: [
              { x: 392, top: 987, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +4%', size: 29, weight: 400, color: NOTE }] },
              { x: 230, top: 1076, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: '装备', size: 40, weight: 800, color: BLACK }] },
            ] },
            converse: { blocks: [
              { x: 392, top: 1160, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 (25%)', size: 29, weight: 400, color: NOTE }] },
              { x: 233, top: 1254, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: 'Converse', size: 40, weight: 800, color: BLACK }] },
            ] },
            revenue: { blocks: [{ x: 858, top: 579, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800, color: BLACK }, { text: '$value', size: 38, weight: 400, color: BLACK }, { text: '同比 +1%', size: 29, weight: 400, color: NOTE }] }] },
            gross_profit: { blocks: [{ x: 1326, top: 413, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '利润率 42%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            cost_of_sales: { blocks: [{ x: 1326, top: 1202, anchor: 'middle', lineGap: 8, lines: [{ text: '销售成本', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
            operating_profit: { blocks: [{ x: 1793, top: 325, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '利润率 8%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1793, top: 876, anchor: 'middle', lineGap: 8, lines: [{ text: '运营', size: 36, weight: 800, color: RED_LABEL }, { text: '费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
            interest: { blocks: [{ x: 2142, top: 507, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 32, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 32, weight: 400, color: GREEN_LABEL }] }] },
            net_profit: { blocks: [{ x: 2428, top: 387, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '利润率 6%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            tax: { blocks: [{ x: 2428, top: 574, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            other: { blocks: [{ x: 2428, top: 710, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            overhead: { blocks: [{ x: 2428, top: 884, anchor: 'middle', lineGap: 8, lines: [{ text: '管理费用', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }, { text: '占收入 24%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            demand_creation: { blocks: [{ x: 2428, top: 1147, anchor: 'middle', lineGap: 8, lines: [{ text: '需求', size: 32, weight: 800, color: RED_LABEL }, { text: '创造费用', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }, { text: '占收入 10%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }] }] },
          },
        },
      },
    },
  });
})();
