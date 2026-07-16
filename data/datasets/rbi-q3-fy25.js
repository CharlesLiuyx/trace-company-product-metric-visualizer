/* Restaurant Brands International Q3 FY25 income statement ($B), measured
 * object-by-object from input/processed/rbi-q3-fy25.png. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#777777';
  const BLACK = '#060606';
  const GRAY_LINK = '#8f8f8f';
  const TH_RED = '#d6001c';
  const TH_LINK = '#e48592';
  const BK_PURPLE = '#5e2751';
  const BK_LINK = '#af97a9';
  const POP_ORANGE = '#ff7c00';
  const POP_LINK = '#f7bc85';
  const FH_GOLD = '#ffa300';
  const FH_LINK = '#f7ce85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';
  const RA = 'data/assets/raster-annotations/rbi';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'rbi-q3-fy25',
    name: 'RBI · Q3 FY25',
    company: 'Restaurant Brands International',
    meta: {
      company: 'Restaurant Brands International',
      title: 'RBI Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/rbi-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 186,
      titleSize: 104,
      titleWeight: 800,
      titleTextLength: 1918,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: TH_RED, label: TH_RED },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: TH_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 46, value: 38, note: 30, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'rbi-logo', href: `${RA}/rbi-logo.png`, x: 704, y: 226, width: 234, height: 288 },
      { key: 'tim-hortons-logo', href: `${RA}/tim-hortons-logo.png`, x: 123, y: 387, width: 218, height: 137 },
      { key: 'burger-king-logo', href: `${RA}/burger-king-logo.png`, x: 134, y: 531, width: 202, height: 213 },
      { key: 'popeyes-logo', href: `${RA}/popeyes-logo.png`, x: 122, y: 744, width: 225, height: 186 },
      { key: 'firehouse-subs-logo', href: `${RA}/firehouse-subs-logo.png`, x: 79, y: 950, width: 300, height: 118 },
    ],
    layout: {
      scale: 100,
      nodes: {
        tim_hortons: { x: 406, y: 402, width: 73, height: 112 },
        burger_king: { x: 406, y: 648, width: 73, height: 39 },
        popeyes: { x: 406, y: 816, width: 73, height: 22 },
        firehouse_subs: { x: 406, y: 967, width: 73, height: 8 },
        international: { x: 406, y: 1095, width: 73, height: 25 },
        restaurant_holdings: { x: 406, y: 1247, width: 73, height: 39 },
        revenue: { x: 779, y: 671, width: 74, height: 239 },
        supply_chain_sales: { x: 1153, y: 412, width: 73, height: 75 },
        company_restaurant: { x: 1153, y: 691, width: 73, height: 57 },
        franchise_property_rev: { x: 1153, y: 967, width: 73, height: 75 },
        advertising: { x: 1153, y: 1251, width: 73, height: 31 },
        reported_revenue: { x: 1527, y: 671, width: 73, height: 239 },
        operating_profit: { x: 1898, y: 490, width: 74, height: 66 },
        operating_expenses: { x: 1898, y: 909, width: 74, height: 177 },
        net_profit: { x: 2274, y: 326, width: 73, height: 44 },
        other: { x: 2274, y: 505, width: 73, height: 14 },
        tax: { x: 2274, y: 620, width: 73, height: 11 },
        supply_chain_costs: { x: 2274, y: 730, width: 73, height: 62 },
        company_restaurants: { x: 2274, y: 890, width: 73, height: 50 },
        franchise_expenses: { x: 2274, y: 1059, width: 73, height: 49 },
        ga: { x: 2274, y: 1232, width: 73, height: 18 },
        cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
      },
      labels: {
        tim_hortons: { blocks: [{ x: 442, top: 314, anchor: 'middle', parts: ['value', 'notes'], valueSize: 38, noteSize: 30, valueColor: TH_RED, noteColor: NOTE }] },
        burger_king: { blocks: [{ x: 442, top: 561, anchor: 'middle', parts: ['value', 'notes'], valueSize: 38, noteSize: 30, valueColor: BK_PURPLE, noteColor: NOTE }] },
        popeyes: { blocks: [{ x: 449, top: 727, anchor: 'middle', parts: ['value', 'notes'], valueSize: 38, noteSize: 30, valueColor: POP_ORANGE, noteColor: NOTE }] },
        firehouse_subs: { blocks: [{ x: 442, top: 875, anchor: 'middle', parts: ['value', 'notes'], valueSize: 38, noteSize: 30, valueColor: FH_GOLD, noteColor: NOTE }] },
        international: {
          blocks: [
            { x: 442, top: 1002, anchor: 'middle', parts: ['value', 'notes'], valueSize: 38, noteSize: 30, valueColor: BLACK, noteColor: NOTE },
            { x: 240, top: 1081, anchor: 'middle', parts: ['name'], nameSize: 40, nameWeight: 700, nameColor: BLACK },
          ],
        },
        restaurant_holdings: {
          blocks: [
            { x: 442, top: 1154, anchor: 'middle', parts: ['value', 'notes'], valueSize: 38, noteSize: 30, valueColor: BLACK, noteColor: NOTE },
            { x: 247, top: 1204, anchor: 'middle', parts: ['name'], nameSize: 38, nameWeight: 700, nameColor: BLACK },
          ],
        },
        revenue: { blocks: [{ x: 816, top: 529, anchor: 'middle', parts: ['name', 'value', 'notes'], nameSize: 40, valueSize: 36, noteSize: 28, nameWeight: 800, noteColor: NOTE }] },
        supply_chain_sales: { blocks: [{ x: 1190, top: 271, anchor: 'middle', parts: ['name', 'value', 'notes'], nameSize: 40, valueSize: 36, noteSize: 28, nameWeight: 800, noteColor: NOTE }] },
        company_restaurant: { blocks: [{ x: 1190, top: 507, anchor: 'middle', parts: ['name', 'value', 'notes'], nameSize: 40, valueSize: 36, noteSize: 28, nameWeight: 800, noteColor: NOTE }] },
        franchise_property_rev: { blocks: [{ x: 1190, top: 778, anchor: 'middle', parts: ['name', 'value', 'notes'], nameSize: 36, valueSize: 34, noteSize: 26, nameWeight: 800, noteColor: NOTE }] },
        advertising: { blocks: [{ x: 1190, top: 1058, anchor: 'middle', parts: ['name', 'value', 'notes'], nameSize: 40, valueSize: 36, noteSize: 28, nameWeight: 800, noteColor: NOTE }] },
        reported_revenue: { blocks: [{ x: 1563, top: 527, anchor: 'middle', parts: ['name', 'value', 'notes'], nameSize: 40, valueSize: 36, noteSize: 28, nameWeight: 800, noteColor: NOTE }] },
        operating_profit: { blocks: [{ x: 1935, top: 307, anchor: 'middle', parts: ['name', 'value', 'notes'], nameSize: 40, valueSize: 36, noteSize: 28, nameWeight: 800, nameColor: GREEN_LABEL, valueColor: GREEN_LABEL, noteColor: NOTE }] },
        operating_expenses: { blocks: [{ x: 1935, top: 1099, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 38, nameWeight: 800, nameColor: RED_LABEL, valueColor: RED_LABEL }] },
        net_profit: { blocks: [{ x: 2477, top: 287, anchor: 'middle', parts: ['name', 'value', 'notes'], nameSize: 40, valueSize: 36, noteSize: 28, nameWeight: 800, nameColor: GREEN_LABEL, valueColor: GREEN_LABEL, noteColor: NOTE }] },
        other: { blocks: [{ x: 2477, top: 476, anchor: 'middle', parts: ['name', 'value'], nameSize: 34, valueSize: 30, nameWeight: 800, nameColor: RED_LABEL, valueColor: RED_LABEL }] },
        tax: { blocks: [{ x: 2477, top: 589, anchor: 'middle', parts: ['name', 'value'], nameSize: 34, valueSize: 30, nameWeight: 800, nameColor: RED_LABEL, valueColor: RED_LABEL }] },
        supply_chain_costs: { blocks: [{ x: 2481, top: 726, anchor: 'middle', parts: ['name', 'value'], nameSize: 34, valueSize: 30, nameWeight: 800, nameColor: RED_LABEL, valueColor: RED_LABEL }] },
        company_restaurants: { blocks: [{ x: 2477, top: 882, anchor: 'middle', parts: ['name', 'value'], nameSize: 34, valueSize: 30, nameWeight: 800, nameColor: RED_LABEL, valueColor: RED_LABEL }] },
        franchise_expenses: { blocks: [{ x: 2477, top: 1050, anchor: 'middle', parts: ['name', 'value'], nameSize: 34, valueSize: 30, nameWeight: 800, nameColor: RED_LABEL, valueColor: RED_LABEL }] },
        ga: { blocks: [{ x: 2477, top: 1207, anchor: 'middle', parts: ['name', 'value'], nameSize: 34, valueSize: 30, nameWeight: 800, nameColor: RED_LABEL, valueColor: RED_LABEL }] },
        cost_of_revenue: { blocks: [] },
        gross_profit: { blocks: [] },
      },
    },
    nodes: [
      { id: 'tim_hortons', col: 0, order: 0, type: 'source', label: 'Tim Hortons', value: 1.1, color: TH_RED, labelColor: TH_RED, linkTint: TH_LINK, notes: ['+8% Y/Y'] },
      { id: 'burger_king', col: 0, order: 1, type: 'source', label: 'Burger King', value: 0.4, color: BK_PURPLE, labelColor: BK_PURPLE, linkTint: BK_LINK, notes: ['+7% Y/Y'] },
      { id: 'popeyes', col: 0, order: 2, type: 'source', label: 'Popeyes', value: 0.2, color: POP_ORANGE, labelColor: POP_ORANGE, linkTint: POP_LINK, notes: ['+3% Y/Y'] },
      { id: 'firehouse_subs', col: 0, order: 3, type: 'source', label: 'Firehouse Subs', value: 0.1, color: FH_GOLD, labelColor: FH_GOLD, linkTint: FH_LINK, notes: ['+13% Y/Y'] },
      { id: 'international', col: 0, order: 4, type: 'source', label: 'International', value: 0.3, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK, notes: ['+10% Y/Y'] },
      { id: 'restaurant_holdings', col: 0, order: 5, type: 'source', label: ['Restaurant', 'Holdings'], value: 0.5, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK, notes: ['+4% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.4, notes: ['+7% Y/Y'] },
      { id: 'supply_chain_sales', col: 2, order: 0, type: 'hub', label: 'Supply chain sales', value: 0.8, notes: ['+10% Y/Y'] },
      { id: 'company_restaurant', col: 2, order: 1, type: 'hub', label: ['Company', 'restaurant'], value: 0.6, notes: ['+4% Y/Y'] },
      { id: 'franchise_property_rev', col: 2, order: 2, type: 'hub', label: ['Franchise', '& property'], value: 0.8, notes: ['+6% Y/Y'] },
      { id: 'advertising', col: 2, order: 3, type: 'hub', label: ['Advertising', 'revenue'], value: 0.3, notes: ['+8% Y/Y'] },
      { id: 'reported_revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 2.4, notes: ['+7% Y/Y'] },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.7, notes: ['27% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.8, valueText: '($1.8B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.4, notes: ['18% margin', '+2pp Y/Y'] },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.1, valueText: '($0.1B)' },
      { id: 'supply_chain_costs', col: 5, order: 3, type: 'cost', label: ['Supply chain', 'costs'], value: 0.6, valueText: '($0.6B)' },
      { id: 'company_restaurants', col: 5, order: 4, type: 'cost', label: ['Company', 'restaurants'], value: 0.5, valueText: '($0.5B)' },
      { id: 'franchise_expenses', col: 5, order: 5, type: 'cost', label: ['Franchise', 'expenses'], value: 0.5, valueText: '($0.5B)' },
      { id: 'ga', col: 5, order: 6, type: 'cost', label: 'G&A', value: 0.2, valueText: '($0.2B)' },
      { id: 'cost_of_revenue', col: 6, order: 0, type: 'cost', label: 'Cost of revenue', value: 0, valueText: '($0.0B)', color: BG, labelColor: BG },
      { id: 'gross_profit', col: 6, order: 1, type: 'profit', label: 'Gross profit', value: 2.4, color: BG, labelColor: BG },
    ],
    links: [
      { source: 'tim_hortons', target: 'revenue', value: 1.1, width: 112, targetWidth: 109, targetOrder: 0, linkTint: { left: TH_LINK, right: TH_LINK } },
      { source: 'burger_king', target: 'revenue', value: 0.4, width: 39, targetWidth: 38, targetOrder: 1, linkTint: { left: BK_LINK, right: BK_LINK } },
      { source: 'popeyes', target: 'revenue', value: 0.2, width: 22, targetWidth: 21, targetOrder: 2, linkTint: { left: POP_LINK, right: POP_LINK } },
      { source: 'firehouse_subs', target: 'revenue', value: 0.1, width: 8, targetWidth: 8, targetOrder: 3, linkTint: { left: FH_LINK, right: FH_LINK } },
      { source: 'international', target: 'revenue', value: 0.3, width: 25, targetWidth: 25, targetOrder: 4, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'restaurant_holdings', target: 'revenue', value: 0.5, width: 39, targetWidth: 38, targetOrder: 5, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'revenue', target: 'supply_chain_sales', value: 0.8, sourceWidth: 75, targetWidth: 75, sourceOrder: 0, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'revenue', target: 'company_restaurant', value: 0.6, sourceWidth: 57, targetWidth: 57, sourceOrder: 1, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'revenue', target: 'franchise_property_rev', value: 0.8, sourceWidth: 75, targetWidth: 75, sourceOrder: 2, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'revenue', target: 'advertising', value: 0.3, sourceWidth: 31, targetWidth: 31, sourceOrder: 3, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'supply_chain_sales', target: 'reported_revenue', value: 0.8, sourceWidth: 75, targetWidth: 75, sourceOrder: 0, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'company_restaurant', target: 'reported_revenue', value: 0.6, sourceWidth: 57, targetWidth: 57, sourceOrder: 0, targetOrder: 1, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'franchise_property_rev', target: 'reported_revenue', value: 0.8, sourceWidth: 75, targetWidth: 75, sourceOrder: 0, targetOrder: 2, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'advertising', target: 'reported_revenue', value: 0.3, sourceWidth: 31, targetWidth: 31, sourceOrder: 0, targetOrder: 3, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'reported_revenue', target: 'operating_profit', value: 0.7, sourceWidth: 64, targetWidth: 66, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'reported_revenue', target: 'operating_expenses', value: 1.8, sourceWidth: 175, targetWidth: 177, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, sourceWidth: 44, targetWidth: 44, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'other', value: 0.1, sourceWidth: 12, targetWidth: 14, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 10, targetWidth: 11, sourceOrder: 2, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'supply_chain_costs', value: 0.6, sourceWidth: 61, targetWidth: 62, sourceOrder: 0, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'company_restaurants', value: 0.5, sourceWidth: 49, targetWidth: 50, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'franchise_expenses', value: 0.5, sourceWidth: 48, targetWidth: 49, sourceOrder: 2, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'ga', value: 0.2, sourceWidth: 17, targetWidth: 18, sourceOrder: 3, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
    ],
    i18n: {
      zh: {
        name: 'RBI · 2025 财年第三季度',
        meta: {
          title: 'RBI 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 1520,
        },
        nodes: {
          tim_hortons: { label: 'Tim Hortons', notes: ['同比 +8%'] },
          burger_king: { label: '汉堡王', notes: ['同比 +7%'] },
          popeyes: { label: 'Popeyes', notes: ['同比 +3%'] },
          firehouse_subs: { label: 'Firehouse Subs', notes: ['同比 +13%'] },
          international: { label: '国际', notes: ['同比 +10%'] },
          restaurant_holdings: { label: '餐厅控股', notes: ['同比 +4%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          supply_chain_sales: { label: '供应链销售', notes: ['同比 +10%'] },
          company_restaurant: { label: '自营餐厅', notes: ['同比 +4%'] },
          franchise_property_rev: { label: '特许经营及物业', notes: ['同比 +6%'] },
          advertising: { label: '广告收入', notes: ['同比 +8%'] },
          reported_revenue: { label: '收入', notes: ['同比 +7%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 18%', '同比 +2 个百分点'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          supply_chain_costs: { label: '供应链成本' },
          company_restaurants: { label: '公司自营餐厅' },
          franchise_expenses: { label: '特许经营费用' },
          ga: { label: '管理费用' },
          cost_of_revenue: { label: '收入成本' },
          gross_profit: { label: '毛利润' },
        },
      },
    },
  });
})();
