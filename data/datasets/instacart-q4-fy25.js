/* ====================================================================
 * Instacart - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/instacart-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const DARK_GREEN = '#004c37';
  const SOURCE_LINK = '#89a99d';
  const GREEN = '#25a526';
  const GREEN_LABEL = '#00964f';
  const GREEN_LINK = '#9bd29d';
  const RED = '#d80000';
  const RED_LABEL = '#981100';
  const RED_LINK = '#e47f82';
  const NOTE = '#767676';
  const WHITE = '#ffffff';
  const ORANGE = '#ff8700';
  const CARROT_GREEN = '#00b912';

  const instacartLogo = (word) => `
    <g transform="translate(380 286)">
      <path d="M33 18 L33 66" stroke="${CARROT_GREEN}" stroke-width="19" stroke-linecap="round"/>
      <path d="M33 66 C15 49 8 36 7 17 C22 22 31 33 33 50" fill="${CARROT_GREEN}"/>
      <path d="M33 66 C53 51 63 36 63 18 C47 22 37 34 33 50" fill="${CARROT_GREEN}"/>
      <path d="M3 101 C8 69 58 69 64 101 Z" fill="${ORANGE}"/>
      <rect x="3" y="101" width="61" height="8" fill="${ORANGE}"/>
      <text x="94" y="95" font-family="Arial Black,Montserrat,Arial,sans-serif" font-size="126" font-weight="900" fill="${DARK_GREEN}">${word}</text>
    </g>`;

  const kpiCard = (x, width, title, value, note) => `
    <g>
      <rect x="${x}" y="1166" width="${width}" height="148" rx="28" fill="${DARK_GREEN}"/>
      <text x="${x + width / 2}" y="1217" text-anchor="middle" font-size="28" font-weight="800" fill="${WHITE}">${title}</text>
      <text x="${x + width / 2}" y="1260" text-anchor="middle" font-size="30" font-weight="500" fill="${WHITE}">${value}</text>
      <text x="${x + width / 2}" y="1295" text-anchor="middle" font-size="28" font-weight="500" fill="${WHITE}">${note}</text>
    </g>`;

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${instacartLogo('instacart')}
      ${kpiCard(130, 171, L.gtv, '$9.9B', L.gtvYoy)}
      ${kpiCard(315, 156, L.orders, '89.5M', L.ordersYoy)}
      <text x="110" y="1354" font-size="28" font-weight="400" fill="${NOTE}">${L.gtvFootnote}</text>
    </g>`;

  const labelText = {
    en: {
      transactionValue: '$698M',
      transactionYoy: '+13% Y/Y',
      transactionName: 'Transaction',
      retailerFees: 'Retailer Fees',
      customerFees: 'Customer Fees',
      adsValue: '$294M',
      adsYoy: '+10% Y/Y',
      adsName: 'Advertising',
      andOther: '& Other',
      clickFee: 'Per Click & Fixed Fee',
      revenue: 'Revenue',
      revenueValue: '$992M',
      revenueYoy: '+12% Y/Y',
      gross: 'Gross profit',
      grossValue: '$717M',
      grossMargin: '72% margin',
      grossYoy: '(3pp) Y/Y',
      costOf: 'Cost of',
      revenueWord: 'revenue',
      operatingProfit: 'Operating profit',
      operatingProfitValue: '$98M',
      operatingMargin: '10% margin',
      operatingYoy: '(8pp) Y/Y',
      operating: 'Operating',
      expenses: 'expenses',
      operatingExpensesValue: '($619M)',
      interest: 'Interest',
      interestValue: '$12M',
      netProfit: 'Net profit',
      netProfitValue: '$81M',
      netMargin: '8% margin',
      netYoy: '+9pp Y/Y',
      tax: 'Tax',
      sm: 'S&M ($214M)',
      smPct: '22% of revenue',
      smYoy: '(2pp) Y/Y',
      rnd: 'R&D ($170M)',
      rndPct: '17% of revenue',
      rndYoy: '(0pp) Y/Y',
      ga: 'G&A ($163M)',
      gaPct: '16% of revenue',
      gaYoy: '+8pp Y/Y',
      operations: 'Operations ($71M)',
      operationsPct: '7% of revenue',
      operationsYoy: '(1pp) Y/Y',
    },
    zh: {
      transactionValue: '$698M',
      transactionYoy: '同比 +13%',
      transactionName: '交易',
      retailerFees: '零售商费用',
      customerFees: '客户费用',
      adsValue: '$294M',
      adsYoy: '同比 +10%',
      adsName: '广告',
      andOther: '及其他',
      clickFee: '按点击与固定费用',
      revenue: '收入',
      revenueValue: '$992M',
      revenueYoy: '同比 +12%',
      gross: '毛利润',
      grossValue: '$717M',
      grossMargin: '利润率 72%',
      grossYoy: '同比 (3 个百分点)',
      costOf: '收入',
      revenueWord: '成本',
      operatingProfit: '营业利润',
      operatingProfitValue: '$98M',
      operatingMargin: '利润率 10%',
      operatingYoy: '同比 (8 个百分点)',
      operating: '营业',
      expenses: '费用',
      operatingExpensesValue: '($619M)',
      interest: '利息收入',
      interestValue: '$12M',
      netProfit: '净利润',
      netProfitValue: '$81M',
      netMargin: '利润率 8%',
      netYoy: '同比 +9 个百分点',
      tax: '税费',
      sm: '销售与市场 ($214M)',
      smPct: '占收入 22%',
      smYoy: '同比 (2 个百分点)',
      rnd: '研发 ($170M)',
      rndPct: '占收入 17%',
      rndYoy: '同比 (0 个百分点)',
      ga: '管理费用 ($163M)',
      gaPct: '占收入 16%',
      gaYoy: '同比 +8 个百分点',
      operations: '运营 ($71M)',
      operationsPct: '占收入 7%',
      operationsYoy: '同比 (1 个百分点)',
    },
  };

  const makeLabels = (L) => ({
    transaction: {
      blocks: [
        {
          x: 397, top: 435, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.transactionValue, size: 40, weight: 400 },
            { text: L.transactionYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 202, top: 590, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.transactionName, size: 39, weight: 800 },
            { text: L.retailerFees, size: 29, weight: 400, color: NOTE },
            { text: L.customerFees, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    advertising_other: {
      blocks: [
        {
          x: 397, top: 923, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.adsValue, size: 40, weight: 400 },
            { text: L.adsYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 189, top: 1026, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.adsName, size: 39, weight: 800 },
            { text: L.andOther, size: 39, weight: 800 },
            { text: L.clickFee, size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 864, top: 467, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.revenue, size: 40, weight: 800 },
            { text: L.revenueValue, size: 40, weight: 400 },
            { text: L.revenueYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1331, top: 354, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.gross, size: 40, weight: 800 },
            { text: L.grossValue, size: 40, weight: 400 },
            { text: L.grossMargin, size: 29, weight: 400, color: NOTE },
            { text: L.grossYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1332, top: 1154, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.costOf, size: 40, weight: 800 },
            { text: L.revenueWord, size: 40, weight: 800 },
            { text: '$value', size: 40, weight: 400 },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1799, top: 260, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.operatingProfit, size: 40, weight: 800 },
            { text: L.operatingProfitValue, size: 40, weight: 400 },
            { text: L.operatingMargin, size: 29, weight: 400, color: NOTE },
            { text: L.operatingYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1799, top: 936, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.operating, size: 40, weight: 800 },
            { text: L.expenses, size: 40, weight: 800 },
            { text: L.operatingExpensesValue, size: 40, weight: 400 },
          ],
        },
      ],
    },
    interest: {
      blocks: [
        {
          x: 2153, top: 430, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.interest, size: 31, weight: 800 },
            { text: L.interestValue, size: 31, weight: 400 },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2447, top: 293, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.netProfit, size: 40, weight: 800 },
            { text: L.netProfitValue, size: 40, weight: 400 },
            { text: L.netMargin, size: 29, weight: 400, color: NOTE },
            { text: L.netYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: 2447, top: 545, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.tax, size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: 2447, top: 701, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.sm, size: 31, weight: 800 },
            { text: L.smPct, size: 29, weight: 400, color: NOTE },
            { text: L.smYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: 2447, top: 852, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.rnd, size: 31, weight: 800 },
            { text: L.rndPct, size: 29, weight: 400, color: NOTE },
            { text: L.rndYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: 2447, top: 1012, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.ga, size: 31, weight: 800 },
            { text: L.gaPct, size: 29, weight: 400, color: NOTE },
            { text: L.gaYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operations: {
      blocks: [
        {
          x: 2447, top: 1168, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.operations, size: 31, weight: 800 },
            { text: L.operationsPct, size: 29, weight: 400, color: NOTE },
            { text: L.operationsYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  });

  const annotationsEn = annotations({
    gtv: 'GTV',
    gtvYoy: '+11% Y/Y',
    orders: 'Orders',
    ordersYoy: '+16% Y/Y',
    gtvFootnote: 'GTV = Gross Transaction Value',
  });

  const annotationsZh = annotations({
    gtv: 'GTV',
    gtvYoy: '同比 +11%',
    orders: '订单',
    ordersYoy: '同比 +16%',
    gtvFootnote: 'GTV = 交易总额',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'instacart-q4-fy25',
    name: 'Instacart · Q4 FY25',
    company: 'Instacart',
    meta: {
      company: 'Instacart',
      title: 'Instacart Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/instacart-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1360,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2290,
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
        source: { node: DARK_GREEN, label: DARK_GREEN },
        hub: { node: DARK_GREEN, label: DARK_GREEN },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: SOURCE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 0.412,
      nodes: {
        transaction: { x: 361, y: 529, width: 71, height: 285 },
        advertising_other: { x: 361, y: 1018, width: 71, height: 119 },
        revenue: { x: 828, y: 613, width: 71, height: 407 },
        gross_profit: { x: 1294, y: 532, width: 73, height: 295 },
        cost_of_revenue: { x: 1294, y: 1023, width: 73, height: 113 },
        operating_profit: { x: 1762, y: 442, width: 72, height: 38 },
        operating_expenses: { x: 1764, y: 657, width: 73, height: 255 },
        interest: { x: 2117, y: 409, width: 72, height: 4 },
        net_profit: { x: 2229, y: 336, width: 72, height: 32 },
        tax: { x: 2229, y: 565, width: 72, height: 11 },
        sm: { x: 2229, y: 696, width: 72, height: 87 },
        rnd: { x: 2229, y: 873, width: 72, height: 69 },
        ga: { x: 2229, y: 1033, width: 72, height: 67 },
        operations: { x: 2229, y: 1208, width: 72, height: 29 },
      },
      labels: makeLabels(labelText.en),
    },

    nodes: [
      {
        id: 'transaction', col: 0, order: 0, type: 'source',
        label: 'Transaction', value: 698, notes: ['+13% Y/Y', 'Retailer Fees', 'Customer Fees'],
        color: DARK_GREEN, labelColor: DARK_GREEN, linkTint: SOURCE_LINK,
      },
      {
        id: 'advertising_other', col: 0, order: 1, type: 'source',
        label: ['Advertising', '& Other'], value: 294, notes: ['+10% Y/Y', 'Per Click & Fixed Fee'],
        color: DARK_GREEN, labelColor: DARK_GREEN, linkTint: SOURCE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 992, notes: ['+12% Y/Y'],
        color: DARK_GREEN, labelColor: DARK_GREEN,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 717, notes: ['72% margin', '(3pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 275,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 98, notes: ['10% margin', '(8pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 619,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'interest', col: 4, order: 0, type: 'profit',
        label: 'Interest', value: 12,
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 81, notes: ['8% margin', '+9pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 28,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 2, type: 'cost',
        label: 'S&M', value: 214, valueText: '($214M)', notes: ['22% of revenue', '(2pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 3, type: 'cost',
        label: 'R&D', value: 170, valueText: '($170M)', notes: ['17% of revenue', '(0pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 4, type: 'cost',
        label: 'G&A', value: 163, valueText: '($163M)', notes: ['16% of revenue', '+8pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operations', col: 5, order: 5, type: 'cost',
        label: 'Operations', value: 71, valueText: '($71M)', notes: ['7% of revenue', '(1pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'transaction', target: 'revenue', value: 698, width: 285, sourceOrder: 0, targetOrder: 0 },
      { source: 'advertising_other', target: 'revenue', value: 294, width: 119, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 717, width: 295, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 275, width: 113, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 98, width: 40, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 619, width: 255, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'operating_profit', target: 'net_profit', value: 69, width: 28, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 28, width: 11, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, y0: 474.5 },
      {
        source: 'interest', target: 'net_profit', value: 12, width: 4,
        sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        y0: 411, y1: 366,
        curve: { x0: 2189, x1: 2229, c1x: 2203, c2x: 2216, c1y: 411, c2y: 366 },
      },

      { source: 'operating_expenses', target: 'sm', value: 214, width: 88, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 170, width: 70, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 163, width: 67, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations', value: 71, width: 29, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Instacart · 2025 财年第四季度',
        meta: {
          title: 'Instacart 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 2240,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          transaction: { label: '交易', notes: ['同比 +13%', '零售商费用', '客户费用'] },
          advertising_other: { label: ['广告', '及其他'], notes: ['同比 +10%', '按点击与固定费用'] },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 (8 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息收入' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 +9 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 22%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 17%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 16%', '同比 +8 个百分点'] },
          operations: { label: '运营', notes: ['占收入 7%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: makeLabels(labelText.zh),
        },
      },
    },
  });
})();
