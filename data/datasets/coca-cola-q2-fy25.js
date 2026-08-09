/* Coca-Cola — Q2 FY25 income statement ($B).
 * Reconstructed from input/processed/coca-cola-q2-fy25.png as a measured,
 * fixed-layout d3-sankey. Financial SSOT: data/income-statements/coca-cola.js. */
(function () {
  const BLACK = '#000000';
  const BLACK_LABEL = '#111111';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const OTHER_GREEN_LABEL = '#008e00';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2518;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, color });
  const block = (x, top, lines, lineGap = 8, anchor = 'middle') => ({
    x,
    top,
    anchor,
    lineGap,
    lines,
  });

  const labels = (zh) => {
    const t = zh
      ? {
          emea: 'EMEA', latam: '拉美', ucan: 'UCAN', apac: '亚太',
          bottling: '装瓶投资业务', other: '其他', revenue: '收入', eliminations: '抵销',
          grossProfit: '毛利润', costOfRevenue: ['收入', '成本'], operatingProfit: '营业利润',
          operatingExpenses: ['营业', '费用'], netProfit: '净利润', tax: '税费', interest: '利息',
          sga: '销售及管理费用', yoy5: '同比 +5%', yoyNeg4: '同比 (4%)', yoy3: '同比 +3%',
          yoyNeg8: '同比 (8%)', yoy1: '同比 +1%', margin62: '利润率 62%',
          pp1: '同比 +1 个百分点', margin34: '利润率 34%', pp13: '同比 +13 个百分点',
          margin30: '利润率 30%', pp11: '同比 +11 个百分点', revenueShare28: '占收入 28%',
          ppNeg1: '同比 (1 个百分点)', revenueShare1: '占收入 1%', ppNeg11: '同比 (11 个百分点)',
        }
      : {
          emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC',
          bottling: 'Bottling investments', other: 'Other', revenue: 'Revenue',
          eliminations: 'Eliminations', grossProfit: 'Gross profit',
          costOfRevenue: ['Cost of', 'revenue'], operatingProfit: 'Operating profit',
          operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax',
          interest: 'Interest', sga: 'SG&A', yoy5: '+5% Y/Y', yoyNeg4: '(4%) Y/Y',
          yoy3: '+3% Y/Y', yoyNeg8: '(8%) Y/Y', yoy1: '+1% Y/Y', margin62: '62% margin',
          pp1: '+1pp Y/Y', margin34: '34% margin', pp13: '+13pp Y/Y', margin30: '30% margin',
          pp11: '+11pp Y/Y', revenueShare28: '28% of revenue', ppNeg1: '(1pp) Y/Y',
          revenueShare1: '1% of revenue', ppNeg11: '(11pp) Y/Y',
        };

    const source = (valueTop, nameTop, name, yoy, options = {}) => ({
      blocks: [
        block(486, valueTop, [line('$value', 40), line(yoy, 29, 400, NOTE)], options.valueGap || 13),
        block(options.nameX || 424, nameTop, [line(name, options.nameSize || 36, 700)], 8, 'end'),
      ],
    });

    return {
      gross_revenue: { blocks: [] },
      emea: source(267, 387, t.emea, t.yoy5, { nameSize: 36, nameX: 424 }),
      latam: source(470, 567, t.latam, t.yoyNeg4, { nameX: 424 }),
      ucan: source(635, 776, t.ucan, t.yoy3, { nameSize: 36, nameX: 424 }),
      apac: source(899, 1000, t.apac, t.yoy3, { nameX: 424 }),
      bottling_investments: source(1069, zh ? 1152 : 1151, t.bottling, t.yoyNeg8, { nameSize: zh ? 34 : 39, nameX: 424, valueGap: 6 }),
      other_revenue: {
        blocks: [
          block(486, 1248, [line('$value', 40)]),
          block(398, 1288, [line(t.other, 36, 700)], 8, 'end'),
        ],
      },
      revenue: {
        blocks: [block(1233, 560, [
          line(t.revenue, 40, 700), line('$value', 40), line(t.yoy1, 29, 400, NOTE),
        ], 6)],
      },
      eliminations: {
        blocks: [block(1233, 1126, [
          line(t.eliminations, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      gross_profit: {
        blocks: [block(1607, 405, [
          line(t.grossProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin62, 29, 400, NOTE), line(t.pp1, 29, 400, NOTE),
        ], 12)],
      },
      cost_of_revenue: {
        blocks: [block(1607, 1109, [
          ...t.costOfRevenue.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      operating_profit: {
        blocks: [block(1981, 305, [
          line(t.operatingProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin34, 29, 400, NOTE), line(t.pp13, 29, 400, NOTE),
        ], 12)],
      },
      operating_expenses: {
        blocks: [block(1981, 908, [
          ...t.operatingExpenses.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      net_profit: {
        blocks: [block(2509, 356, [
          line(t.netProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin30, 29, 400, NOTE), line(t.pp11, 29, 400, NOTE),
        ], 12)],
      },
      other_income: {
        blocks: [block(2241, 543, [
          line(t.other, 34, 700, OTHER_GREEN_LABEL), line('$value', 34, 400, OTHER_GREEN_LABEL),
        ])],
      },
      tax: {
        blocks: [block(RIGHT_LABEL_X, 666, [
          line(t.tax, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      interest: {
        blocks: [block(RIGHT_LABEL_X, 774, [
          line(t.interest, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      sga: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 12 : 0), 938, [
          line(t.sga, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare28, 29, 400, NOTE), line(t.ppNeg1, 29, 400, NOTE),
        ])],
      },
      other_opex: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 12 : 0), 1141, [
          line(t.other, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare1, 29, 400, NOTE), line(t.ppNeg11, 29, 400, NOTE),
        ])],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q2-fy25',
    name: 'Coca-Cola · Q2 FY25',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola',
      title: 'Coca-Cola Q2 FY25 Income Statement',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 210,
      titleSize: 150,
      titleWeight: 800,
      titleTextLength: 2326,
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
        source: { node: BLACK, label: BLACK_LABEL },
        hub: { node: BLACK, label: BLACK_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/coca-cola/company-wordmark.png', x: 736, y: 247, width: 594, height: 200 },
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 361, width: 96, height: 92, pairedNode: 'emea' },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 545, width: 98, height: 92, pairedNode: 'latam' },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 746, width: 96, height: 98, pairedNode: 'ucan' },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 976, width: 92, height: 90, pairedNode: 'apac' },
    ],
    layout: {
      scale: 23.5,
      nodes: {
        emea: { x: 450, y: 372, width: 72, height: 74 },
        latam: { x: 450, y: 573, width: 72, height: 36 },
        ucan: { x: 450, y: 738, width: 72, height: 119 },
        apac: { x: 450, y: 1005, width: 72, height: 35 },
        bottling_investments: { x: 450, y: 1157, width: 72, height: 32 },
        other_revenue: { x: 450, y: 1309, width: 72, height: 3 },
        gross_revenue: { x: 824, y: 597, width: 72, height: 306 },
        revenue: { x: 1197, y: 694, width: 72, height: 301 },
        eliminations: { x: 1197, y: 1101, width: 72, height: 5 },
        gross_profit: { x: 1571, y: 594, width: 72, height: 187 },
        cost_of_revenue: { x: 1571, y: 987, width: 72, height: 112 },
        operating_profit: { x: 1950, y: 492, width: 72, height: 101 },
        operating_expenses: { x: 1945, y: 810, width: 72, height: 83 },
        other_income: { x: 2201, y: 517, width: 72, height: 16 },
        net_profit: { x: 2318, y: 387, width: 72, height: 90 },
        tax: { x: 2318, y: 702, width: 72, height: 23 },
        interest: { x: 2318, y: 816, width: 72, height: 4 },
        sga: { x: 2318, y: 936, width: 72, height: 81 },
        other_opex: { x: 2318, y: 1182, width: 72, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 3.2, notes: ['+5% Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.6, notes: ['(4%) Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 5.0, valueText: '$5.0B', notes: ['+3% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.6, notes: ['+3% Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 4, type: 'source', label: 'Bottling investments', value: 1.4, notes: ['(8%) Y/Y'] },
      { id: 'other_revenue', col: 0, order: 5, type: 'source', label: 'Other', value: 0.039, valueText: '$39M', color: GRAY_LINK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 12.8 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 12.5, notes: ['+1% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.3, valueText: '($0.3B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.8, notes: ['62% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.7, valueText: '($4.7B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.3, notes: ['34% margin', '+13pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.5 },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.8, labelColor: OTHER_GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.8, notes: ['30% margin', '+11pp Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 1.0, valueText: '($1.0B)' },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.3 },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.5, notes: ['28% of revenue', '(1pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue', '(11pp) Y/Y'] },
    ],
    links: [
      { source: 'emea', target: 'gross_revenue', value: 3.2, sourceWidth: 74, targetWidth: 75, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.6, sourceWidth: 36, targetWidth: 38, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 5.0, sourceWidth: 119, targetWidth: 119, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.6, sourceWidth: 35, targetWidth: 38, sourceOrder: 0, targetOrder: 3 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 1.4, sourceWidth: 32, targetWidth: 35, sourceOrder: 0, targetOrder: 4 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.039, sourceWidth: 3, targetWidth: 1, sourceOrder: 0, targetOrder: 5 },
      { source: 'gross_revenue', target: 'revenue', value: 12.5, sourceWidth: 301, targetWidth: 301, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.3, sourceWidth: 5, targetWidth: 5, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 7.8, sourceWidth: 189, targetWidth: 187, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.7, sourceWidth: 112, targetWidth: 112, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.3, sourceWidth: 104, targetWidth: 101, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.5, sourceWidth: 83, targetWidth: 83, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.0, sourceWidth: 71, targetWidth: 71, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.0, sourceWidth: 23, targetWidth: 23, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 7, targetWidth: 4, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.8, sourceWidth: 16, targetWidth: 17, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 3.5, sourceWidth: 81, targetWidth: 81, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 2, targetWidth: 3, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Coca-Cola · 2025 财年第二季度',
        meta: {
          title: '可口可乐 2025 财年第二季度利润表',
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          titleTextLength: 2100,
        },
        nodes: {
          emea: { label: 'EMEA', notes: ['同比 +5%'] }, latam: { label: 'LATAM', notes: ['同比 (4%)'] },
          ucan: { label: 'UCAN', notes: ['同比 +3%'] }, apac: { label: 'APAC', notes: ['同比 +3%'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 (8%)'] }, other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +1%'] }, eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 62%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 34%', '同比 +13 个百分点'] },
          operating_expenses: { label: '营业费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 +11 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' },
          sga: { label: '销售及管理费用', notes: ['占收入 28%', '同比 (1 个百分点)'] },
          other_opex: { label: '其他', notes: ['占收入 1%', '同比 (11 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
