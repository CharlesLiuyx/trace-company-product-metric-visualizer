/* Coca-Cola — Q2 FY26 income statement ($B).
 * Reconstructed from input/processed/coca-cola-q2-fy26.png as a measured,
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
  const RIGHT_LABEL_X = 2505;

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
          bottling: '装瓶投资业务', other: '其他', revenue: '收入', eliminations: '抵销',
          grossProfit: '毛利润', costOfRevenue: ['收入', '成本'], operatingProfit: '营业利润',
          operatingExpenses: ['营业', '费用'], netProfit: '净利润', tax: '税费', interest: '利息',
          sga: '销售及管理费用', yoy2: '同比 +2%', yoy16: '同比 +16%', yoy8: '同比 +8%',
          yoy1: '同比 +1%', yoy7: '同比 +7%', margin63: '利润率 63%', pp0: '同比 +0 个百分点',
          margin35: '利润率 35%', pp1: '同比 +1 个百分点', margin33: '利润率 33%',
          pp3: '同比 +3 个百分点', revenueShare28: '占收入 28%',
        }
      : {
          emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC',
          bottling: 'Bottling investments', other: 'Other', revenue: 'Revenue',
          eliminations: 'Eliminations', grossProfit: 'Gross profit',
          costOfRevenue: ['Cost of', 'revenue'], operatingProfit: 'Operating profit',
          operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax',
          interest: 'Interest', sga: 'SG&A', yoy2: '+2% Y/Y', yoy16: '+16% Y/Y',
          yoy8: '+8% Y/Y', yoy1: '+1% Y/Y', yoy7: '+7% Y/Y', margin63: '63% margin',
          pp0: '+0pp Y/Y', margin35: '35% margin', pp1: '+1pp Y/Y', margin33: '33% margin',
          pp3: '+3pp Y/Y', revenueShare28: '28% of revenue',
        };

    const source = (valueTop, nameTop, name, yoy, options = {}) => ({
      blocks: [
        block(486, valueTop, [line('$value', 40), line(yoy, 29, 400, NOTE)], options.valueGap || 13),
        block(options.nameX || 424, nameTop, [line(name, options.nameSize || 36, 700)], 8, 'end'),
      ],
    });

    return {
      gross_revenue: { blocks: [] },
      emea: source(227, 342, t.emea, t.yoy2, { nameSize: zh ? 27 : 36, nameX: 411 }),
      latam: source(425, 522, t.latam, t.yoy16, { nameX: 399 }),
      ucan: source(603, 744, t.ucan, t.yoy8, { nameSize: zh ? 30 : 36 }),
      apac: source(864, 960, t.apac, t.yoy1, { nameX: 411 }),
      bottling_investments: source(1053, zh ? 1130 : 1129, t.bottling, t.yoy8, { nameSize: zh ? 34 : 36, nameX: 392, valueGap: 6 }),
      other_revenue: {
        blocks: [
          block(486, 1230, [line('$value', 40)]),
          block(398, 1239, [line(t.other, 36, 700)], 8, 'end'),
        ],
      },
      revenue: {
        blocks: [block(1233, 551, [
          line(t.revenue, 40, 700), line('$value', 40), line(t.yoy7, 29, 400, NOTE),
        ], 6)],
      },
      eliminations: {
        blocks: [block(1233, 1133, [
          line(t.eliminations, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      gross_profit: {
        blocks: [block(1607, 424, [
          line(t.grossProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin63, 29, 400, NOTE), line(t.pp0, 29, 400, NOTE),
        ], 12)],
      },
      cost_of_revenue: {
        blocks: [block(1607, 1107, [
          ...t.costOfRevenue.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      operating_profit: {
        blocks: [block(1981, 325, [
          line(t.operatingProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin35, 29, 400, NOTE), line(t.pp1, 29, 400, NOTE),
        ], 12)],
      },
      operating_expenses: {
        blocks: [block(1981, 925, [
          ...t.operatingExpenses.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      net_profit: {
        blocks: [block(RIGHT_LABEL_X, 392, [
          line(t.netProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin33, 29, 400, NOTE), line(t.pp3, 29, 400, NOTE),
        ], 12)],
      },
      other_income: {
        blocks: [block(2232, 594, [
          line(t.other, 34, 700, OTHER_GREEN_LABEL), line('$value', 34, 400, OTHER_GREEN_LABEL),
        ])],
      },
      tax: {
        blocks: [block(RIGHT_LABEL_X, 703, [
          line(t.tax, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      interest: {
        blocks: [block(RIGHT_LABEL_X, 841, [
          line(t.interest, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      sga: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 12 : 0), 1019, [
          line(t.sga, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare28, 29, 400, NOTE),
        ])],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q2-fy26',
    name: 'Coca-Cola · Q2 FY26',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola',
      title: 'Coca-Cola Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q2-fy26.png', width: 2667, height: 1500 },
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
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 316, width: 96, height: 92, pairedNode: 'emea' },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 499, width: 98, height: 92, pairedNode: 'latam' },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 716, width: 96, height: 98, pairedNode: 'ucan' },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 938, width: 92, height: 90, pairedNode: 'apac' },
    ],
    layout: {
      scale: 23,
      nodes: {
        emea: { x: 450, y: 326, width: 72, height: 73 },
        latam: { x: 450, y: 524, width: 72, height: 42 },
        ucan: { x: 450, y: 703, width: 72, height: 124 },
        apac: { x: 450, y: 965, width: 72, height: 35 },
        bottling_investments: { x: 450, y: 1139, width: 72, height: 32 },
        other_revenue: { x: 450, y: 1290, width: 72, height: 3 },
        gross_revenue: { x: 824, y: 608, width: 72, height: 314 },
        revenue: { x: 1197, y: 688, width: 72, height: 308 },
        eliminations: { x: 1197, y: 1107, width: 72, height: 4 },
        gross_profit: { x: 1571, y: 609, width: 72, height: 194 },
        cost_of_revenue: { x: 1571, y: 982, width: 72, height: 113 },
        operating_profit: { x: 1945, y: 511, width: 72, height: 106 },
        operating_expenses: { x: 1945, y: 823, width: 72, height: 85 },
        other_income: { x: 2196, y: 567, width: 72, height: 21 },
        net_profit: { x: 2318, y: 412, width: 72, height: 100 },
        tax: { x: 2318, y: 733, width: 72, height: 22 },
        interest: { x: 2318, y: 881, width: 72, height: 2 },
        sga: { x: 2318, y: 1032, width: 72, height: 84 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 3.2, notes: ['+2% Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.8, notes: ['+16% Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 5.4, notes: ['+8% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.6, notes: ['+1% Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 4, type: 'source', label: 'Bottling investments', value: 1.5, notes: ['+8% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 5, type: 'source', label: 'Other', value: 0.037, valueText: '$37M', color: GRAY_LINK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 13.7 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 13.4, notes: ['+7% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.3, valueText: '($0.3B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 8.4, notes: ['63% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.0, valueText: '($5.0B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.7, notes: ['35% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.7 },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 1.0, valueText: '$1.0B', labelColor: OTHER_GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 4.4, notes: ['33% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 1.0, valueText: '($1.0B)' },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.2 },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.7, notes: ['28% of revenue'] },
    ],
    links: [
      { source: 'emea', target: 'gross_revenue', value: 3.2, sourceWidth: 73, targetWidth: 74, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.8, sourceWidth: 42, targetWidth: 42, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 5.4, sourceWidth: 124, targetWidth: 125, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.6, sourceWidth: 35, targetWidth: 37, sourceOrder: 0, targetOrder: 3 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 1.5, sourceWidth: 32, targetWidth: 35, sourceOrder: 0, targetOrder: 4 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.037, sourceWidth: 3, targetWidth: 1, sourceOrder: 0, targetOrder: 5 },
      { source: 'gross_revenue', target: 'revenue', value: 13.4, sourceWidth: 307, targetWidth: 308, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.3, sourceWidth: 7, targetWidth: 4, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 8.4, sourceWidth: 193, targetWidth: 194, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.0, sourceWidth: 115, targetWidth: 113, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.7, sourceWidth: 109, targetWidth: 106, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.7, sourceWidth: 85, targetWidth: 85, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.5, sourceWidth: 79, targetWidth: 79, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.0, sourceWidth: 23, targetWidth: 22, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 4, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 1.0, sourceWidth: 21, targetWidth: 21, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 3.7, sourceWidth: 85, targetWidth: 84, sourceOrder: 0, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Coca-Cola · 2026 财年第二季度',
        meta: {
          title: '可口可乐 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleTextLength: 2100,
        },
        nodes: {
          emea: { label: 'EMEA', notes: ['同比 +2%'] }, latam: { label: 'LATAM', notes: ['同比 +16%'] },
          ucan: { label: 'UCAN', notes: ['同比 +8%'] }, apac: { label: 'APAC', notes: ['同比 +1%'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 +8%'] }, other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +7%'] }, eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 63%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
          operating_expenses: { label: '营业费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 33%', '同比 +3 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售及管理费用', notes: ['占收入 28%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
