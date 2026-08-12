/* Nike Q4 FY25 income statement ($B), reconstructed from the native
 * 2667×1500 Source. The approved Nike raster assets are reused because the
 * wordmark and four product photographs are materially identical to the
 * validated Q4 FY26 crop set. */
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
    <path d="M847 1108 L877 1161 L817 1161 Z" fill="#f2f2f2" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="727" y="1161" width="241" height="109" rx="18" fill="#f2f2f2" stroke="#1a1a1a" stroke-width="4"/>`;

  const annotationsEn = `
    <g>
      <g data-annotation-clearance="nike-geography-callout">
        ${calloutBox}
        <text x="847" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">China<tspan fill="${RED_LABEL}" font-weight="700"> (21%) Y/Y</tspan></text>
        <text x="847" y="1244" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${RED_LABEL}" font-weight="700"> (10%) Y/Y</tspan></text>
      </g>
      <text x="847" y="1305" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = Rest of World</text>
    </g>`;

  const annotationsZh = `
    <g>
      <g data-annotation-clearance="nike-geography-callout">
        ${calloutBox}
        <text x="847" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">中国<tspan fill="${RED_LABEL}" font-weight="700"> 同比 (21%)</tspan></text>
        <text x="847" y="1244" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${RED_LABEL}" font-weight="700"> 同比 (10%)</tspan></text>
      </g>
      <text x="847" y="1305" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = 中国以外地区</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q4-fy25',
    name: 'Nike · Q4 FY25',
    company: 'Nike',
    meta: {
      company: 'Nike',
      title: 'Nike Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending May 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nike-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1338,
      titleY: 189,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2004,
      periodX: 2407,
      periodY: 264,
      periodNoteY: 313,
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
      { key: 'nike-business-footwear', href: 'data/assets/raster-annotations/nike/business-footwear.png', x: 114, y: 500, width: 207, height: 140 },
      { key: 'nike-business-apparel', href: 'data/assets/raster-annotations/nike/business-apparel.png', x: 140, y: 735, width: 200, height: 164 },
      { key: 'nike-business-equipment', href: 'data/assets/raster-annotations/nike/business-equipment.png', x: 150, y: 962, width: 190, height: 152 },
      { key: 'nike-business-converse-q2-fy26', href: 'data/assets/raster-annotations/nike/business-converse-q2-fy26.png', x: 125, y: 1155, width: 205, height: 132 },
    ],

    layout: {
      scale: 33.6,
      nodes: {
        footwear: { x: 356, y: 483, width: 71, height: 242 },
        apparel: { x: 356, y: 874, width: 71, height: 98 },
        equipment: { x: 356, y: 1122, width: 71, height: 17 },
        converse: { x: 356, y: 1298, width: 71, height: 8 },
        revenue: { x: 823, y: 723, width: 70, height: 373 },
        gross_profit: { x: 1290, y: 587, width: 71, height: 149 },
        cost_of_sales: { x: 1290, y: 972, width: 71, height: 223 },
        operating_profit: { x: 1758, y: 501, width: 70, height: 9 },
        operating_expenses: { x: 1758, y: 725, width: 70, height: 137 },
        interest: { x: 2099, y: 468, width: 75, height: 1 },
        net_profit: { x: 2224, y: 407, width: 71, height: 5 },
        tax: { x: 2224, y: 590, width: 71, height: 1 },
        other_expense: { x: 2224, y: 697, width: 71, height: 1 },
        overhead: { x: 2224, y: 894, width: 71, height: 95 },
        demand_creation: { x: 2224, y: 1239, width: 71, height: 40 },
      },
      labels: {
        footwear: { blocks: [
          { x: 392, top: 397, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(13%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 224, top: 624, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: 'Footwear', size: 40, weight: 800, color: BLACK }] },
        ] },
        apparel: { blocks: [
          { x: 391, top: 776, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(10%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 228, top: 896, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: 'Apparel', size: 40, weight: 800, color: BLACK }] },
        ] },
        equipment: { blocks: [
          { x: 400, top: 1026, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(2%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 223, top: 1103, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: 'Equipment', size: 40, weight: 800, color: BLACK }] },
        ] },
        converse: { blocks: [
          { x: 391, top: 1196, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(26%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 231, top: 1269, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: 'Converse', size: 40, weight: 800, color: BLACK }] },
        ] },
        revenue: { blocks: [{ x: 858, top: 577, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 40, weight: 800, color: BLACK },
          { text: '$value', size: 38, weight: 400, color: BLACK },
          { text: '(12%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1326, top: 399, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          { text: '40% margin', size: 29, weight: 400, color: NOTE },
          { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        cost_of_sales: { blocks: [{ x: 1326, top: 1210, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of sales', size: 38, weight: 800, color: RED_LABEL },
          { text: '$value', size: 38, weight: 400, color: RED_LABEL },
        ] }] },
        operating_profit: { blocks: [{ x: 1793, top: 319, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          { text: '3% margin', size: 29, weight: 400, color: NOTE },
          { text: '(9pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1793, top: 886, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
          { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ] }] },
        interest: { blocks: [{ x: 2138, top: 481, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Interest', size: 32, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 32, weight: 400, color: GREEN_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2416, top: 326, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          { text: '2% margin', size: 29, weight: 400, color: NOTE },
          { text: '(10pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2416, top: 541, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 32, weight: 800, color: RED_LABEL },
          { text: '$value', size: 32, weight: 400, color: RED_LABEL },
        ] }] },
        other_expense: { blocks: [{ x: 2416, top: 651, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 32, weight: 800, color: RED_LABEL },
          { text: '$value', size: 32, weight: 400, color: RED_LABEL },
        ] }] },
        overhead: { blocks: [{ x: 2428, top: 897, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Overhead', size: 32, weight: 800, color: RED_LABEL },
          { text: '$value', size: 32, weight: 400, color: RED_LABEL },
          { text: '26% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        demand_creation: { blocks: [{ x: 2429, top: 1186, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Demand', size: 32, weight: 800, color: RED_LABEL },
          { text: 'Creation', size: 32, weight: 800, color: RED_LABEL },
          { text: '$value', size: 32, weight: 400, color: RED_LABEL },
          { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
      },
    },

    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 7.2, valueText: '$7.2B', notes: ['(13%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.0, valueText: '$3.0B', notes: ['(10%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.6, valueText: '$0.6B', notes: ['(2%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.3, valueText: '$0.3B', notes: ['(26%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 11.1, valueText: '$11.1B', notes: ['(12%) Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.5, valueText: '$4.5B', notes: ['40% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 6.6, valueText: '($6.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.3, valueText: '$0.3B', notes: ['3% margin', '(9pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.1, valueText: '($4.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.022, valueText: '$22M', color: '#75ad75', labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.2, valueText: '$0.2B', notes: ['2% margin', '(10pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.025, valueText: '($25M)', color: '#e18a8a', labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'overhead', col: 5, order: 3, type: 'cost', label: 'Overhead', value: 2.9, valueText: '($2.9B)', notes: ['26% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'demand_creation', col: 5, order: 4, type: 'cost', label: ['Demand', 'Creation'], value: 1.3, valueText: '($1.3B)', notes: ['11% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'footwear', target: 'revenue', value: 7.2, sourceWidth: 242, targetWidth: 250, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.0, sourceWidth: 98, targetWidth: 98, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.6, sourceWidth: 17, targetWidth: 17, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.3, sourceWidth: 8, targetWidth: 8, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 4.5, sourceWidth: 150, targetWidth: 149, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 6.6, sourceWidth: 223, targetWidth: 223, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.3, sourceWidth: 10, targetWidth: 9, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.1, sourceWidth: 139, targetWidth: 137, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, sourceWidth: 5, targetWidth: 4, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 2, targetWidth: 1, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 0.025, sourceWidth: 2, targetWidth: 1, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'interest', target: 'net_profit', value: 0.022, sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'overhead', value: 2.9, sourceWidth: 97, targetWidth: 95, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.3, sourceWidth: 40, targetWidth: 40, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['RoW'],
      zh: {
        name: 'Nike · 2025 财年第四季度',
        meta: {
          title: 'Nike 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 5 月',
          titleTextLength: 1900,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 (13%)'] },
          apparel: { label: '服装', notes: ['同比 (10%)'] },
          equipment: { label: '装备', notes: ['同比 (2%)'] },
          converse: { notes: ['同比 (26%)'] },
          revenue: { label: '收入', notes: ['同比 (12%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 (4 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 (9 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          interest: { label: '利息收入' },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 (10 个百分点)'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          overhead: { label: '管理费用', notes: ['占收入 26%', '同比 +2 个百分点'] },
          demand_creation: { label: ['需求', '创造费用'], notes: ['占收入 11%', '同比 +3 个百分点'] },
        },
        layout: {
          labels: {
            footwear: { blocks: [
              { x: 392, top: 397, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 (13%)', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 224, top: 624, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: '鞋类', size: 40, weight: 800, color: BLACK }] },
            ] },
            apparel: { blocks: [
              { x: 391, top: 776, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 (10%)', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 228, top: 896, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: '服装', size: 40, weight: 800, color: BLACK }] },
            ] },
            equipment: { blocks: [
              { x: 400, top: 1026, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 (2%)', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 223, top: 1103, anchor: 'middle', semanticRole: 'asset-label', lines: [{ text: '装备', size: 40, weight: 800, color: BLACK }] },
            ] },
            overhead: { blocks: [{ x: 2428, top: 897, anchor: 'middle', lineGap: 8, lines: [
              { text: '管理费用', size: 32, weight: 800, color: RED_LABEL },
              { text: '$value', size: 32, weight: 400, color: RED_LABEL },
              { text: '占收入 26%', size: 29, weight: 400, color: NOTE },
              { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
            ] }] },
            demand_creation: { blocks: [{ x: 2429, top: 1186, anchor: 'middle', lineGap: 8, lines: [
              { text: '需求', size: 32, weight: 800, color: RED_LABEL },
              { text: '创造费用', size: 32, weight: 800, color: RED_LABEL },
              { text: '$value', size: 32, weight: 400, color: RED_LABEL },
              { text: '占收入 11%', size: 29, weight: 400, color: NOTE },
              { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
            ] }] },
          },
        },
      },
    },
  });
})();
