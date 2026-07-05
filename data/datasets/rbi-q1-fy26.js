/* ====================================================================
 * Restaurant Brands International - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/rbi-q1-fy26.png as a fixed
 * d3-sankey layout with validated raster brand-logo annotations.
 * ==================================================================== */
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

  // Other-income callout: solid vivid-green origin segment ("bar") plus a thin
  // light-green S-curve tucking into the operating-expenses node's lower-left,
  // matching the source (measured x1695-1772 @ y1095, curve to ~x1897,y1040).
  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <line x1="1694" y1="1095" x2="1772" y2="1095" stroke="${GREEN}" stroke-width="4" stroke-linecap="round"/>
      <path d="M1772 1095 C1828 1095 1846 1036 1900 1036"
            fill="none" stroke="${GREEN_LINK}" stroke-width="3"/>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'rbi-q1-fy26',
    name: 'RBI · Q1 FY26',
    company: 'Restaurant Brands International',
    meta: {
      company: 'Restaurant Brands International',
      title: 'RBI Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/rbi-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 186,
      titleSize: 104,
      titleWeight: 800,
      titleTextLength: 1918,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      allowRasterAnnotations: true,
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
    annotationsSvg: annotations,
    rasterAnnotations: [
      { key: 'rbi-logo', href: `${RA}/rbi-logo.png`, x: 704, y: 226, width: 234, height: 288 },
      { key: 'tim-hortons-logo', href: `${RA}/tim-hortons-logo.png`, x: 123, y: 387, width: 218, height: 137 },
      { key: 'burger-king-logo', href: `${RA}/burger-king-logo.png`, x: 134, y: 531, width: 202, height: 213 },
      { key: 'popeyes-logo', href: `${RA}/popeyes-logo.png`, x: 122, y: 744, width: 225, height: 186 },
      { key: 'firehouse-subs-logo', href: `${RA}/firehouse-subs-logo.png`, x: 79, y: 950, width: 300, height: 118 },
    ],

    layout: {
      scale: 122,
      nodes: {
        tim_hortons: { x: 406, y: 394, width: 73, height: 120 },
        burger_king: { x: 406, y: 660, width: 73, height: 46 },
        popeyes: { x: 406, y: 844, width: 73, height: 25 },
        firehouse_subs: { x: 406, y: 993, width: 73, height: 10 },
        international: { x: 406, y: 1124, width: 73, height: 33 },
        restaurant_holdings: { x: 406, y: 1267, width: 73, height: 46 },
        revenue: { x: 779, y: 677, width: 74, height: 280 },
        supply_chain_sales: { x: 1153, y: 394, width: 73, height: 85 },
        company_restaurant: { x: 1153, y: 692, width: 73, height: 70 },
        franchise_property_rev: { x: 1153, y: 982, width: 73, height: 89 },
        advertising: { x: 1153, y: 1291, width: 73, height: 36 },
        reported_revenue: { x: 1527, y: 672, width: 73, height: 280 },
        operating_profit: { x: 1898, y: 547, width: 74, height: 75 },
        operating_expenses: { x: 1898, y: 831, width: 74, height: 205 },
        other_income: { x: 1878, y: 1042, width: 6, height: 6, color: BG },
        net_profit: { x: 2274, y: 437, width: 73, height: 55 },
        tax_other: { x: 2274, y: 706, width: 73, height: 20 },
        supply_chain_costs: { x: 2274, y: 885, width: 73, height: 68 },
        company_restaurants: { x: 2274, y: 1030, width: 73, height: 58 },
        franchise_expenses: { x: 2274, y: 1185, width: 73, height: 56 },
        ga: { x: 2274, y: 1340, width: 73, height: 23 },
        cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
      },
      labels: {
        tim_hortons: {
          blocks: [{ x: 442, top: 306, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400, color: TH_RED },
            { text: '+10% Y/Y', size: 30, weight: 400, color: NOTE },
          ] }],
        },
        burger_king: {
          blocks: [{ x: 442, top: 572, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400, color: BK_PURPLE },
            { text: '+3% Y/Y', size: 30, weight: 400, color: NOTE },
          ] }],
        },
        popeyes: {
          blocks: [{ x: 442, top: 756, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400, color: POP_ORANGE },
            { text: '(2%) Y/Y', size: 30, weight: 400, color: NOTE },
          ] }],
        },
        firehouse_subs: {
          blocks: [{ x: 442, top: 905, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400, color: FH_GOLD },
            { text: '+11% Y/Y', size: 30, weight: 400, color: NOTE },
          ] }],
        },
        international: {
          blocks: [
            { x: 442, top: 1036, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 38, weight: 400, color: BLACK },
              { text: '+17% Y/Y', size: 30, weight: 400, color: NOTE },
            ] },
            { x: 240, top: 1120, anchor: 'middle', lineGap: 8, lines: [
              { text: 'International', size: 46, weight: 700, color: BLACK },
            ] },
          ],
        },
        restaurant_holdings: {
          blocks: [
            { x: 442, top: 1179, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 38, weight: 400, color: BLACK },
              { text: '+4% Y/Y', size: 30, weight: 400, color: NOTE },
            ] },
            { x: 247, top: 1250, anchor: 'middle', lineGap: 8, lines: [
              { text: 'Restaurant', size: 46, weight: 700, color: BLACK },
              { text: 'Holdings', size: 46, weight: 700, color: BLACK },
            ] },
          ],
        },
        revenue: {
          blocks: [{ x: 816, top: 532, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Revenue', size: 46, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '+7% Y/Y', size: 30, weight: 400, color: NOTE },
          ] }],
        },
        supply_chain_sales: {
          blocks: [{ x: 1190, top: 249, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Supply chain sales', size: 46, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '+12% Y/Y', size: 30, weight: 400, color: NOTE },
          ] }],
        },
        company_restaurant: {
          blocks: [{ x: 1190, top: 492, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Company', size: 46, weight: 800 },
            { text: 'restaurant', size: 46, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '+0% Y/Y', size: 30, weight: 400, color: NOTE },
          ] }],
        },
        franchise_property_rev: {
          blocks: [{ x: 1190, top: 782, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Franchise', size: 46, weight: 800 },
            { text: '& property', size: 46, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '+9% Y/Y', size: 30, weight: 400, color: NOTE },
          ] }],
        },
        advertising: {
          blocks: [{ x: 1190, top: 1091, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Advertising', size: 46, weight: 800 },
            { text: 'revenue', size: 46, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '+7% Y/Y', size: 30, weight: 400, color: NOTE },
          ] }],
        },
        reported_revenue: {
          blocks: [{ x: 1563, top: 526, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Revenue', size: 46, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '+7% Y/Y', size: 30, weight: 400, color: NOTE },
          ] }],
        },
        operating_profit: {
          blocks: [{ x: 1935, top: 363, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Operating profit', size: 46, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
            { text: '27% margin', size: 30, weight: 400, color: NOTE },
            { text: '+6pp Y/Y', size: 30, weight: 400, color: NOTE },
          ] }],
        },
        operating_expenses: {
          blocks: [{ x: 1935, top: 1045, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Operating', size: 38, weight: 800, color: RED_LABEL },
            { text: 'expenses', size: 38, weight: 800, color: RED_LABEL },
            { text: '$value', size: 38, weight: 400, color: RED_LABEL },
          ] }],
        },
        other_income: {
          blocks: [{ x: 1734, top: 1119, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Other', size: 30, weight: 800, color: GREEN_LABEL },
            { text: 'income', size: 30, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
          ] }],
        },
        net_profit: {
          blocks: [{ x: 2477, top: 412, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Net profit', size: 46, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
            { text: '20% margin', size: 30, weight: 400, color: NOTE },
            { text: '+9pp Y/Y', size: 30, weight: 400, color: NOTE },
          ] }],
        },
        tax_other: {
          blocks: [{ x: 2477, top: 690, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Tax & other', size: 34, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
          ] }],
        },
        supply_chain_costs: {
          blocks: [{ x: 2481, top: 870, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Supply chain', size: 34, weight: 800, color: RED_LABEL },
            { text: 'costs', size: 34, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
          ] }],
        },
        company_restaurants: {
          blocks: [{ x: 2477, top: 1010, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Company', size: 34, weight: 800, color: RED_LABEL },
            { text: 'restaurants', size: 34, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
          ] }],
        },
        franchise_expenses: {
          blocks: [{ x: 2477, top: 1160, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Franchise', size: 34, weight: 800, color: RED_LABEL },
            { text: 'expenses', size: 34, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
          ] }],
        },
        ga: {
          blocks: [{ x: 2440, top: 1318, anchor: 'middle', lineGap: 8, lines: [
            { text: 'G&A', size: 34, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
          ] }],
        },
        cost_of_revenue: { blocks: [] },
        gross_profit: { blocks: [] },
      },
    },

    nodes: [
      { id: 'tim_hortons', col: 0, order: 0, type: 'source', label: 'Tim Hortons', value: 1.0, valueText: '$1.0B', color: TH_RED, labelColor: TH_RED, linkTint: TH_LINK },
      { id: 'burger_king', col: 0, order: 1, type: 'source', label: 'Burger King', value: 0.4, color: BK_PURPLE, labelColor: BK_PURPLE, linkTint: BK_LINK },
      { id: 'popeyes', col: 0, order: 2, type: 'source', label: 'Popeyes', value: 0.2, color: POP_ORANGE, labelColor: POP_ORANGE, linkTint: POP_LINK },
      { id: 'firehouse_subs', col: 0, order: 3, type: 'source', label: 'Firehouse Subs', value: 0.1, color: FH_GOLD, labelColor: FH_GOLD, linkTint: FH_LINK },
      { id: 'international', col: 0, order: 4, type: 'source', label: 'International', value: 0.3, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'restaurant_holdings', col: 0, order: 5, type: 'source', label: 'Restaurant Holdings', value: 0.4, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.3, notes: ['+7% Y/Y'] },
      { id: 'supply_chain_sales', col: 2, order: 0, type: 'hub', label: 'Supply chain sales', value: 0.7, notes: ['+12% Y/Y'] },
      { id: 'company_restaurant', col: 2, order: 1, type: 'hub', label: ['Company', 'restaurant'], value: 0.6, notes: ['+0% Y/Y'] },
      { id: 'franchise_property_rev', col: 2, order: 2, type: 'hub', label: ['Franchise', '& property'], value: 0.7, notes: ['+9% Y/Y'] },
      { id: 'advertising', col: 2, order: 3, type: 'hub', label: ['Advertising', 'revenue'], value: 0.3, notes: ['+7% Y/Y'] },
      { id: 'reported_revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 2.3, notes: ['+7% Y/Y'] },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, notes: ['27% margin', '+6pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.8, valueText: '($1.8B)' },
      { id: 'other_income', col: 4, order: 2, type: 'profit', label: 'Other income', value: 0.023, valueText: '$23M', color: BG, labelColor: GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.4, notes: ['20% margin', '+9pp Y/Y'] },
      { id: 'tax_other', col: 5, order: 1, type: 'cost', label: 'Tax & other', value: 0.2, valueText: '($0.2B)' },
      { id: 'supply_chain_costs', col: 5, order: 2, type: 'cost', label: ['Supply chain', 'costs'], value: 0.6, valueText: '($0.6B)' },
      { id: 'company_restaurants', col: 5, order: 3, type: 'cost', label: ['Company', 'restaurants'], value: 0.5, valueText: '($0.5B)' },
      { id: 'franchise_expenses', col: 5, order: 4, type: 'cost', label: ['Franchise', 'expenses'], value: 0.5, valueText: '($0.5B)' },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 0.2, valueText: '($0.2B)' },
      { id: 'cost_of_revenue', col: 6, order: 0, type: 'cost', label: 'Cost of revenue', value: 0, valueText: '($0.0B)' },
      { id: 'gross_profit', col: 6, order: 1, type: 'profit', label: 'Gross profit', value: 2.3 },
    ],

    links: [
      { source: 'tim_hortons', target: 'revenue', value: 1.0, width: 120, targetOrder: 0, linkTint: { left: TH_LINK, right: TH_LINK } },
      { source: 'burger_king', target: 'revenue', value: 0.4, width: 46, targetOrder: 1, linkTint: { left: BK_LINK, right: BK_LINK } },
      { source: 'popeyes', target: 'revenue', value: 0.2, width: 25, targetOrder: 2, linkTint: { left: POP_LINK, right: POP_LINK } },
      { source: 'firehouse_subs', target: 'revenue', value: 0.1, width: 10, targetOrder: 3, linkTint: { left: FH_LINK, right: FH_LINK } },
      { source: 'international', target: 'revenue', value: 0.3, width: 33, targetOrder: 4, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'restaurant_holdings', target: 'revenue', value: 0.4, width: 46, targetOrder: 5, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'revenue', target: 'supply_chain_sales', value: 0.7, width: 85, sourceOrder: 0, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'revenue', target: 'company_restaurant', value: 0.6, width: 70, sourceOrder: 1, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'revenue', target: 'franchise_property_rev', value: 0.7, width: 89, sourceOrder: 2, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'revenue', target: 'advertising', value: 0.3, width: 36, sourceOrder: 3, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'supply_chain_sales', target: 'reported_revenue', value: 0.7, width: 85, sourceOrder: 0, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'company_restaurant', target: 'reported_revenue', value: 0.6, width: 70, sourceOrder: 0, targetOrder: 1, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'franchise_property_rev', target: 'reported_revenue', value: 0.7, width: 89, sourceOrder: 0, targetOrder: 2, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'advertising', target: 'reported_revenue', value: 0.3, width: 36, sourceOrder: 0, targetOrder: 3, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'reported_revenue', target: 'operating_profit', value: 0.6, width: 75, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'reported_revenue', target: 'operating_expenses', value: 1.8, width: 205, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, width: 55, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'tax_other', value: 0.2, width: 20, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'supply_chain_costs', value: 0.6, width: 68, sourceOrder: 0, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'company_restaurants', value: 0.5, width: 58, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'franchise_expenses', value: 0.5, width: 56, sourceOrder: 2, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'ga', value: 0.2, width: 23, sourceOrder: 3, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
    ],

    i18n: {
      zh: {
        name: 'RBI · 2026 财年第一季度',
        meta: {
          title: 'RBI 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1520,
        },
        nodes: {
          tim_hortons: { label: 'Tim Hortons' },
          burger_king: { label: '汉堡王' },
          popeyes: { label: 'Popeyes' },
          firehouse_subs: { label: 'Firehouse Subs' },
          international: { label: '国际' },
          restaurant_holdings: { label: '餐厅控股' },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          supply_chain_sales: { label: '供应链销售', notes: ['同比 +12%'] },
          company_restaurant: { label: '自营餐厅', notes: ['同比 +0%'] },
          franchise_property_rev: { label: '特许经营及物业', notes: ['同比 +9%'] },
          advertising: { label: '广告收入', notes: ['同比 +7%'] },
          reported_revenue: { label: '收入', notes: ['同比 +7%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他收入' },
          net_profit: { label: '净利润', notes: ['利润率 20%', '同比 +9 个百分点'] },
          tax_other: { label: '税费及其他' },
          supply_chain_costs: { label: '供应链成本' },
          company_restaurants: { label: '公司自营餐厅' },
          franchise_expenses: { label: '特许经营费用' },
          ga: { label: '管理费用' },
          cost_of_revenue: { label: '收入成本' },
          gross_profit: { label: '毛利润' },
        },
        layout: {
          labels: {
            international: {
              blocks: [
                { x: 442, top: 1036, anchor: 'middle', lineGap: 8, lines: [
                  { text: '$value', size: 38, weight: 400, color: BLACK },
                  { text: '同比 +17%', size: 30, weight: 400, color: NOTE },
                ] },
                { x: 388, top: 1120, anchor: 'end', lineGap: 8, lines: [
                  { text: '国际', size: 46, weight: 700, color: BLACK },
                ] },
              ],
            },
            restaurant_holdings: {
              blocks: [
                { x: 442, top: 1179, anchor: 'middle', lineGap: 8, lines: [
                  { text: '$value', size: 38, weight: 400, color: BLACK },
                  { text: '同比 +4%', size: 30, weight: 400, color: NOTE },
                ] },
                { x: 388, top: 1268, anchor: 'end', lineGap: 8, lines: [
                  { text: '餐厅控股', size: 46, weight: 700, color: BLACK },
                ] },
              ],
            },
            tim_hortons: {
              blocks: [{ x: 442, top: 306, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400, color: TH_RED },
                { text: '同比 +10%', size: 30, weight: 400, color: NOTE },
              ] }],
            },
            burger_king: {
              blocks: [{ x: 442, top: 572, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400, color: BK_PURPLE },
                { text: '同比 +3%', size: 30, weight: 400, color: NOTE },
              ] }],
            },
            popeyes: {
              blocks: [{ x: 442, top: 756, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400, color: POP_ORANGE },
                { text: '同比 -2%', size: 30, weight: 400, color: NOTE },
              ] }],
            },
            firehouse_subs: {
              blocks: [{ x: 442, top: 905, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400, color: FH_GOLD },
                { text: '同比 +11%', size: 30, weight: 400, color: NOTE },
              ] }],
            },
            revenue: {
              blocks: [{ x: 816, top: 532, anchor: 'middle', lineGap: 9, lines: [
                { text: '收入', size: 46, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +7%', size: 30, weight: 400, color: NOTE },
              ] }],
            },
            supply_chain_sales: {
              blocks: [{ x: 1190, top: 249, anchor: 'middle', lineGap: 9, lines: [
                { text: '供应链销售', size: 46, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +12%', size: 30, weight: 400, color: NOTE },
              ] }],
            },
            company_restaurant: {
              blocks: [{ x: 1190, top: 547, anchor: 'middle', lineGap: 9, lines: [
                { text: '自营餐厅', size: 46, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +0%', size: 30, weight: 400, color: NOTE },
              ] }],
            },
            franchise_property_rev: {
              blocks: [{ x: 1190, top: 782, anchor: 'middle', lineGap: 9, lines: [
                { text: '特许经营', size: 46, weight: 800 },
                { text: '及物业', size: 46, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +9%', size: 30, weight: 400, color: NOTE },
              ] }],
            },
            advertising: {
              blocks: [{ x: 1190, top: 1146, anchor: 'middle', lineGap: 9, lines: [
                { text: '广告收入', size: 46, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +7%', size: 30, weight: 400, color: NOTE },
              ] }],
            },
            reported_revenue: {
              blocks: [{ x: 1563, top: 526, anchor: 'middle', lineGap: 9, lines: [
                { text: '收入', size: 46, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +7%', size: 30, weight: 400, color: NOTE },
              ] }],
            },
            operating_profit: {
              blocks: [{ x: 1935, top: 363, anchor: 'middle', lineGap: 9, lines: [
                { text: '营业利润', size: 46, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '利润率 27%', size: 30, weight: 400, color: NOTE },
                { text: '同比 +6 个百分点', size: 30, weight: 400, color: NOTE },
              ] }],
            },
            operating_expenses: {
              blocks: [{ x: 1935, top: 1045, anchor: 'middle', lineGap: 9, lines: [
                { text: '运营费用', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 38, weight: 400, color: RED_LABEL },
              ] }],
            },
            other_income: {
              blocks: [{ x: 1734, top: 1119, anchor: 'middle', lineGap: 8, lines: [
                { text: '其他收入', size: 30, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
              ] }],
            },
            net_profit: {
              blocks: [{ x: 2477, top: 412, anchor: 'middle', lineGap: 9, lines: [
                { text: '净利润', size: 46, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '利润率 20%', size: 30, weight: 400, color: NOTE },
                { text: '同比 +9 个百分点', size: 30, weight: 400, color: NOTE },
              ] }],
            },
            tax_other: {
              blocks: [{ x: 2477, top: 690, anchor: 'middle', lineGap: 8, lines: [
                { text: '税费及其他', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ] }],
            },
            supply_chain_costs: {
              blocks: [{ x: 2481, top: 880, anchor: 'middle', lineGap: 8, lines: [
                { text: '供应链成本', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ] }],
            },
            company_restaurants: {
              blocks: [{ x: 2477, top: 1020, anchor: 'middle', lineGap: 8, lines: [
                { text: '公司自营餐厅', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ] }],
            },
            franchise_expenses: {
              blocks: [{ x: 2477, top: 1170, anchor: 'middle', lineGap: 8, lines: [
                { text: '特许经营费用', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ] }],
            },
            ga: {
              blocks: [{ x: 2440, top: 1318, anchor: 'middle', lineGap: 8, lines: [
                { text: '管理费用', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ] }],
            },
          },
        },
      },
    },
  });
})();
