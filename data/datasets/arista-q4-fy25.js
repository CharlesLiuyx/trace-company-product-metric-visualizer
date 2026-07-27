/* ====================================================================
 * Arista - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/arista-q4-fy25.png as a fixed
 * d3-sankey layout with a pure SVG/text Arista wordmark.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const DARK = '#23395d';
  const SOURCE_LINK = '#959faf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const aristaLogo = `
    <g fill="#16325B">
      <path d="M391.027 103.426c36.994 0 55.491-25.688 55.491-51.378 0-25.688-18.498-50.353-57.546-50.353-28.773-1.029-134.617-1.029-134.617-1.029v173.668h32.879V28.413c25.691 0 90.43 0 103.79 0 18.496 0 27.745 6.163 27.745 23.635 0 14.385-9.247 22.606-26.718 22.606h-86.315l102.761 98.648h40.078l-73.991-71.932c7.197 2.056 15.417 2.056 16.444 2.056z"/>
      <path d="M480.429.669h31.856v173.665h-31.856z"/>
      <path d="M916.137 27.387V.669h-167.824l-18.497 26.718h86.641v146.947h31.856V27.387z"/>
      <path d="M678.756 72.6h-81.182c-16.438 0-25.689-7.192-25.689-21.58 0-16.44 11.305-23.633 25.689-23.633h110.98L722.941.669H596.546c-28.775 0-52.407 21.577-52.407 51.382 0 26.715 22.608 48.294 53.434 48.294h81.182c18.5 0 28.775 8.224 28.775 23.637 0 13.357-11.305 22.608-28.775 22.608H566.748l-16.44 27.744h132.558c33.912 0 52.406-24.658 52.406-52.404 0-25.697-21.58-49.33-56.516-49.33z"/>
      <path d="M104.325 11.972C97.133 23.272 1.564 174.334 1.564 174.334h33.91l31.858-51.381h67.822l17.47-27.746H84.8l36.993-59.602 86.321 137.697h33.911S147.483 24.301 139.26 10.943C130.013-2.413 113.574-1.387 104.325 11.972z"/>
      <path d="M1079.523 174.334h33.912s-94.539-149.003-102.764-162.362c-9.244-15.415-25.689-14.385-34.938-1.028-7.195 11.301-102.762 162.359-102.762 162.359h33.91l31.855-51.378h68.852l17.467-27.746h-67.82l36.996-59.603z"/>
    </g>`;

  const zhLayoutLabels = {
    product: {
      blocks: [
        { x: 399.5, top: 456, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '同比 +30%', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 310, top: 615, anchor: 'end', lineGap: 9, lines: [
          { text: '产品', size: 40, weight: 800 },
          { text: '毛利率 59%', size: 28, weight: 400, color: NOTE },
          { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
        ] },
      ],
    },
    service: {
      blocks: [
        { x: 399.5, top: 952, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '同比 +22%', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 310, top: 1050, anchor: 'end', lineGap: 9, lines: [
          { text: '服务', size: 40, weight: 800 },
          { text: '毛利率 82%', size: 28, weight: 400, color: NOTE },
          { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
        ] },
      ],
    },
    revenue: { blocks: [{ x: 866, top: 520, anchor: 'middle', lineGap: 9, lines: [
      { text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '同比 +29%', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1333.5, top: 373, anchor: 'middle', lineGap: 9, lines: [
      { text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '毛利率 63%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1333.5, top: 1108, anchor: 'middle', lineGap: 8, lines: [
      { text: '收入', size: 38, weight: 800 }, { text: '成本', size: 38, weight: 800 },
      { text: '$value', size: 37, weight: 400 },
    ] }] },
    product_cor: { blocks: [{ x: 1718, top: 1032, anchor: 'start', lineGap: 8, lines: [
      { text: '产品', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    service_cor: { blocks: [{ x: 1718, top: 1170, anchor: 'start', lineGap: 8, lines: [
      { text: '服务', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1801, top: 279, anchor: 'middle', lineGap: 9, lines: [
      { text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 42%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1801, top: 845, anchor: 'middle', lineGap: 8, lines: [
      { text: '运营费用', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 },
    ] }] },
    other_income: { blocks: [{ x: 2113, top: 571, anchor: 'middle', lineGap: 8, lines: [
      { text: '其他收入', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: 2420, top: 323, anchor: 'middle', lineGap: 9, lines: [
      { text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 37%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (4 个百分点)', size: 28, weight: 400, color: NOTE },
    ] }] },
    tax: { blocks: [{ x: 2400, top: 672, anchor: 'middle', lineGap: 8, lines: [
      { text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    rnd: { blocks: [{ x: 2390, top: 827, anchor: 'start', lineGap: 8, lines: [
      { text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 14%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
    ] }] },
    sm: { blocks: [{ x: 2390, top: 1034, anchor: 'start', lineGap: 8, lines: [
      { text: '销售与市场', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 6%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: 2390, top: 1209, anchor: 'start', lineGap: 8, lines: [
      { text: '一般及行政', size: 31, weight: 800 }, { text: '($43M)', size: 31, weight: 400 },
      { text: '占收入 2%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arista-q4-fy25',
    name: 'Arista · Q4 FY25',
    company: 'Arista',
    meta: {
      company: 'Arista',
      title: 'Arista Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/arista-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2100,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 560,
      logoHeight: 88,
      logoY: 349,
      logoViewBox: '0 0 1115 175',
      logoSvg: aristaLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: DARK, label: DARK },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 1,
      nodes: {
        product: { x: 364, y: 558, width: 71, height: 245 },
        service: { x: 364, y: 1055, width: 71, height: 46 },
        revenue: { x: 831, y: 670, width: 70, height: 292 },
        gross_profit: { x: 1298, y: 565, width: 71, height: 182 },
        cost_of_revenue: { x: 1298, y: 985, width: 71, height: 107 },
        product_cor: { x: 1606, y: 1023, width: 70, height: 99 },
        service_cor: { x: 1608, y: 1211, width: 70, height: 6 },
        operating_profit: { x: 1766, y: 470, width: 70, height: 120 },
        operating_expenses: { x: 1766, y: 772, width: 70, height: 61 },
        other_income: { x: 2078, y: 551, width: 70, height: 10 },
        net_profit: { x: 2232, y: 385, width: 71, height: 111 },
        tax: { x: 2232, y: 704, width: 71, height: 20 },
        rnd: { x: 2232, y: 857, width: 71, height: 38 },
        sm: { x: 2232, y: 1072, width: 71, height: 14 },
        ga: { x: 2232, y: 1252, width: 71, height: 4 },
      },
      labels: {
        product: { blocks: [
          { x: 399.5, top: 456, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+30% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 310, top: 615, anchor: 'end', lineGap: 9, lines: [
            { text: 'Product', size: 40, weight: 800 }, { text: '59% gross margin', size: 28, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        service: { blocks: [
          { x: 399.5, top: 952, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+22% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 310, top: 1050, anchor: 'end', lineGap: 9, lines: [
            { text: 'Service', size: 40, weight: 800 }, { text: '82% gross margin', size: 28, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [{ x: 866, top: 520, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '+29% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1333.5, top: 373, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '63% margin', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1333.5, top: 1108, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 38, weight: 800 }, { text: 'revenue', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 },
        ] }] },
        product_cor: { blocks: [{ x: 1718, top: 1032, anchor: 'start', lineGap: 8, lines: [
          { text: 'Product', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
        ] }] },
        service_cor: { blocks: [{ x: 1718, top: 1170, anchor: 'start', lineGap: 8, lines: [
          { text: 'Service', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1801, top: 279, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '42% margin', size: 28, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1801, top: 845, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 38, weight: 800 }, { text: 'expenses', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 },
        ] }] },
        other_income: { blocks: [{ x: 2113, top: 571, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2400, top: 323, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '37% margin', size: 28, weight: 400, color: NOTE }, { text: '(4pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2400, top: 672, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: 2390, top: 827, anchor: 'start', lineGap: 8, lines: [
          { text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '14% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        sm: { blocks: [{ x: 2390, top: 1034, anchor: 'start', lineGap: 8, lines: [
          { text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '6% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        ga: { blocks: [{ x: 2390, top: 1209, anchor: 'start', lineGap: 8, lines: [
          { text: 'G&A', size: 31, weight: 800 }, { text: '($43M)', size: 31, weight: 400 },
          { text: '2% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
      },
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 2.0957, notes: ['+30% Y/Y', '59% gross margin', '(1pp) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 0.3921, notes: ['+22% Y/Y', '82% gross margin', '(1pp) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.4878, notes: ['+29% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.5638, notes: ['63% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.924 },
      { id: 'product_cor', col: 3, order: 2, type: 'cost', label: 'Product', value: 0.8532 },
      { id: 'service_cor', col: 3, order: 3, type: 'cost', label: 'Service', value: 0.0708 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.0329, notes: ['42% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.5309 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1045 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.9558, valueText: '$0.9B', notes: ['37% margin', '(4pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.1816 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.3484, notes: ['14% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.1391, notes: ['6% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.0434, valueText: '($43M)', notes: ['2% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 2.0957, sourceWidth: 245, targetWidth: 245, y0: 680.5, y1: 792.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 0.3921, sourceWidth: 46, targetWidth: 46, y0: 1078, y1: 939, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.5638, sourceWidth: 183, targetWidth: 182, y0: 761.5, y1: 656, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.924, sourceWidth: 108, targetWidth: 107, y0: 908, y1: 1038.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.0329, sourceWidth: 119, targetWidth: 120, y0: 624.5, y1: 530, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.5309, sourceWidth: 63, targetWidth: 61, y0: 715.5, y1: 802.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cor', value: 0.8532, sourceWidth: 99, targetWidth: 99, y0: 1034.5, y1: 1072.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cor', value: 0.0708, sourceWidth: 8, targetWidth: 6, y0: 1088, y1: 1214, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.8513, sourceWidth: 99, targetWidth: 101, y0: 519.5, y1: 435.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1816, sourceWidth: 20, targetWidth: 20, y0: 580, y1: 714, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.1045, sourceWidth: 10, targetWidth: 10, y0: 556, y1: 491, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.3484, sourceWidth: 41, targetWidth: 38, y0: 792.5, y1: 876, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.1391, sourceWidth: 15, targetWidth: 14, y0: 820.5, y1: 1079, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.0434, sourceWidth: 5, targetWidth: 4, y0: 830.5, y1: 1254, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '阿里斯塔网络 · 2025 财年第四季度',
        meta: {
          title: '阿里斯塔网络 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 92,
          titleTextLength: 1750,
        },
        nodes: {
          product: { label: '产品', notes: ['同比 +30%', '毛利率 59%', '同比 (1 个百分点)'] },
          service: { label: '服务', notes: ['同比 +22%', '毛利率 82%', '同比 (1 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +29%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 63%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          product_cor: { label: '产品' },
          service_cor: { label: '服务' },
          operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他收入' },
          net_profit: { label: '净利润', notes: ['利润率 37%', '同比 (4 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 6%', '同比 (0 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
