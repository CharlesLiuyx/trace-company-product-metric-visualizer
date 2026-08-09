/* Coca-Cola — Q1 FY24 income statement ($B).
 * Reconstructed from input/processed/coca-cola-q1-fy24.png as a measured,
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
  const RIGHT_LABEL_X = 2509;

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
          emea: '欧洲、中东和非洲', latam: '拉美', ucan: '美国和加拿大', apac: '亚太',
          globalVentures: '全球创新业务', bottling: '装瓶投资业务', other: '其他',
          revenue: '收入', eliminations: '抵销', grossProfit: '毛利润',
          costOfRevenue: ['收入', '成本'], operatingProfit: '营业利润',
          operatingExpenses: ['营业', '费用'], netProfit: '净利润', tax: '税费',
          interest: '利息', sga: '销售及管理费用', yoyNeg3: '同比 (3%)', yoy10: '同比 +10%',
          yoy7: '同比 +7%', yoy3: '同比 +3%', yoyNeg7: '同比 (7%)', margin63: '利润率 63%',
          pp2: '同比 +2 个百分点', margin19: '利润率 19%', ppNeg12: '同比 (12 个百分点)',
          margin28: '利润率 28%', pp0: '同比 (0 个百分点)', revenueShare30: '占收入 30%',
          revenueShare14: '占收入 14%', pp13: '同比 +13 个百分点',
        }
      : {
          emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC',
          globalVentures: 'Global ventures', bottling: 'Bottling investments', other: 'Other',
          revenue: 'Revenue', eliminations: 'Eliminations', grossProfit: 'Gross profit',
          costOfRevenue: ['Cost of', 'revenue'], operatingProfit: 'Operating profit',
          operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax',
          interest: 'Interest', sga: 'SG&A', yoyNeg3: '(3%) Y/Y', yoy10: '+10% Y/Y',
          yoy7: '+7% Y/Y', yoy3: '+3% Y/Y', yoyNeg7: '(7%) Y/Y', margin63: '63% margin',
          pp2: '+2pp Y/Y', margin19: '19% margin', ppNeg12: '(12pp) Y/Y',
          margin28: '28% margin', pp0: '(0pp) Y/Y', revenueShare30: '30% of revenue',
          revenueShare14: '14% of revenue', pp13: '+13pp Y/Y',
        };

    const source = (valueTop, nameTop, name, yoy, options = {}) => ({
      blocks: [
        block(485, valueTop, [line('$value', 40), line(yoy, 29, 400, NOTE)], options.valueGap || 13),
        block(options.nameX || 423, nameTop, [line(name, options.nameSize || 36, 700)], 8, 'end'),
      ],
    });

    return {
      gross_revenue: { blocks: [] },
      emea: source(205, zh ? 314 : 310, t.emea, t.yoyNeg3, { nameSize: zh ? 27 : 36, nameX: 411 }),
      latam: source(399, 502, t.latam, t.yoy10, { nameX: 398 }),
      ucan: source(576, 717, t.ucan, t.yoy7, { nameSize: zh ? 30 : 36 }),
      apac: source(816, 911, t.apac, t.yoy7, { nameX: 411 }),
      global_ventures: source(970, zh ? 1066 : 1059, t.globalVentures, t.yoy3, {
        nameSize: zh ? 32 : 36, nameX: 390,
      }),
      bottling_investments: source(1119, 1225, t.bottling, t.yoyNeg7, {
        nameSize: zh ? 34 : 36, nameX: 396,
      }),
      other_revenue: {
        blocks: [
          block(485, 1324, [line('$value', 40)]),
          { ...block(395, 1353, [line(t.other, 36, 400)], 8, 'end'), semanticRole: 'top-aligned-side-label' },
        ],
      },
      revenue: {
        blocks: [block(1229, 550, [
          line(t.revenue, 40, 700), line('$value', 40), line(t.yoy3, 29, 400, NOTE),
        ], 6)],
      },
      eliminations: {
        blocks: [block(1229, 1164, [
          line(t.eliminations, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      gross_profit: {
        blocks: [block(1607, 385, [
          line(t.grossProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin63, 29, 400, NOTE), line(t.pp2, 29, 400, NOTE),
        ], 12)],
      },
      cost_of_revenue: {
        blocks: [block(1607, 1123, [
          ...t.costOfRevenue.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      operating_profit: {
        blocks: [block(1980, 277, [
          line(t.operatingProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin19, 29, 400, NOTE), line(t.ppNeg12, 29, 400, NOTE),
        ], 12)],
      },
      operating_expenses: {
        blocks: [block(1972, 904, [
          ...t.operatingExpenses.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      net_profit: {
        blocks: [block(RIGHT_LABEL_X, 368, [
          line(t.netProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin28, 29, 400, NOTE), line(t.pp0, 29, 400, NOTE),
        ], 12)],
      },
      other_income: {
        blocks: [block(2233, 516, [
          line(t.other, 34, 700, OTHER_GREEN_LABEL), line('$value', 34, 400, OTHER_GREEN_LABEL),
        ])],
      },
      tax: {
        blocks: [block(2500, 627, [
          line(t.tax, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      interest: {
        blocks: [block(RIGHT_LABEL_X, 743, [
          line(t.interest, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      sga: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 8 : 0), 916, [
          line(t.sga, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare30, 29, 400, NOTE),
        ])],
      },
      other_opex: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 8 : 0), 1216, [
          line(t.other, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare14, 29, 400, NOTE), line(t.pp13, 29, 400, NOTE),
        ])],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q1-fy24',
    name: 'Coca-Cola · Q1 FY24',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola',
      title: 'Coca-Cola Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q1-fy24.png', width: 2667, height: 1500 },
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
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/coca-cola/company-wordmark.png', x: 736, y: 264, width: 594, height: 200 },
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 289, width: 96, height: 92, pairedNode: 'emea' },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 476, width: 98, height: 92, pairedNode: 'latam' },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 690, width: 96, height: 98, pairedNode: 'ucan' },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 892, width: 92, height: 90, pairedNode: 'apac' },
    ],
    layout: {
      scale: 28.5,
      nodes: {
        emea: { x: 448, y: 304, width: 72, height: 54 },
        latam: { x: 448, y: 500, width: 72, height: 41 },
        ucan: { x: 448, y: 677, width: 72, height: 118 },
        apac: { x: 448, y: 917, width: 72, height: 40 },
        global_ventures: { x: 448, y: 1076, width: 72, height: 19 },
        bottling_investments: { x: 448, y: 1221, width: 72, height: 50 },
        other_revenue: { x: 448, y: 1387, width: 72, height: 4 },
        gross_revenue: { x: 822, y: 641, width: 72, height: 334 },
        revenue: { x: 1193, y: 691, width: 72, height: 323 },
        eliminations: { x: 1191, y: 1135, width: 72, height: 10 },
        gross_profit: { x: 1570, y: 570, width: 72, height: 201 },
        cost_of_revenue: { x: 1572, y: 994, width: 72, height: 120 },
        operating_profit: { x: 1943, y: 463, width: 72, height: 60 },
        operating_expenses: { x: 1943, y: 750, width: 72, height: 139 },
        other_income: { x: 2201, y: 455, width: 72, height: 51 },
        net_profit: { x: 2316, y: 370, width: 72, height: 90 },
        tax: { x: 2316, y: 663, width: 72, height: 19 },
        interest: { x: 2316, y: 787, width: 72, height: 2 },
        sga: { x: 2316, y: 921, width: 72, height: 94 },
        other_opex: { x: 2316, y: 1230, width: 72, height: 44 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 2.0, valueText: '$2.0B', notes: ['(3%) Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.5, notes: ['+10% Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 4.2, notes: ['+7% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.5, notes: ['+7% Y/Y'] },
      { id: 'global_ventures', col: 0, order: 4, type: 'source', label: 'Global ventures', value: 0.7, notes: ['+3% Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 5, type: 'source', label: 'Bottling investments', value: 1.8, notes: ['(7%) Y/Y'] },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 0.027, valueText: '$27M', color: GRAY_LINK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 11.7 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 11.3, notes: ['+3% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.4, valueText: '($0.4B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.1, notes: ['63% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.1, notes: ['19% margin', '(12pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.9 },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 1.9, labelColor: OTHER_GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.2, notes: ['28% margin', '(0pp) Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.7 },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.1 },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.4, notes: ['30% of revenue'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 1.6, notes: ['14% of revenue', '+13pp Y/Y'] },
    ],
    links: [
      { source: 'emea', target: 'gross_revenue', value: 2.0, sourceWidth: 54, targetWidth: 57, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.5, sourceWidth: 41, targetWidth: 43, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 4.2, sourceWidth: 118, targetWidth: 120, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.5, sourceWidth: 40, targetWidth: 43, sourceOrder: 0, targetOrder: 3 },
      { source: 'global_ventures', target: 'gross_revenue', value: 0.7, sourceWidth: 19, targetWidth: 20, sourceOrder: 0, targetOrder: 4 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 1.8, sourceWidth: 50, targetWidth: 50, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.027, sourceWidth: 4, targetWidth: 1, sourceOrder: 0, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 11.3, sourceWidth: 323, targetWidth: 323, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.4, sourceWidth: 10, targetWidth: 10, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 7.1, sourceWidth: 201, targetWidth: 201, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.2, sourceWidth: 122, targetWidth: 120, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.1, sourceWidth: 60, targetWidth: 60, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.9, sourceWidth: 141, targetWidth: 139, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 39, targetWidth: 36, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 19, targetWidth: 19, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 1.9, sourceWidth: 51, targetWidth: 54, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 3.4, sourceWidth: 94, targetWidth: 94, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 1.6, sourceWidth: 44, targetWidth: 44, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Coca-Cola · 2024 财年第一季度',
        meta: {
          title: '可口可乐 2024 财年第一季度利润表',
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          titleTextLength: 2100,
        },
        nodes: {
          emea: { label: 'EMEA', notes: ['同比 (3%)'] }, latam: { label: 'LATAM', notes: ['同比 +10%'] },
          ucan: { label: 'UCAN', notes: ['同比 +7%'] }, apac: { label: 'APAC', notes: ['同比 +7%'] },
          global_ventures: { label: '全球创新业务', notes: ['同比 +3%'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 (7%)'] }, other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +3%'] }, eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 63%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 (12 个百分点)'] },
          operating_expenses: { label: '营业费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 28%', '同比 (0 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' },
          sga: { label: '销售及管理费用', notes: ['占收入 30%'] },
          other_opex: { label: '其他', notes: ['占收入 14%', '同比 +13 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
