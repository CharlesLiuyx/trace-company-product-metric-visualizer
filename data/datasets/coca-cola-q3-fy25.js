/* Coca-Cola — Q3 FY25 income statement ($B).
 * Reconstructed from input/processed/coca-cola-q3-fy25.png as a measured,
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
  const OTHER_RED_FACE = '#de7878';
  const TITLE = '#155077';
  const NOTE = '#707070';
  const RIGHT_LABEL_X = 2518;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, color });
  const block = (x, top, lines, lineGap = 8, anchor = 'middle') => ({ x, top, anchor, lineGap, lines });

  const labels = (zh) => {
    const t = zh
      ? {
          emea: '欧洲、中东和非洲', latam: '拉美', ucan: '美国和加拿大', apac: '亚太',
          bottling: '装瓶投资业务', other: '其他', revenue: '收入', eliminations: '抵销',
          grossProfit: '毛利润', costOfRevenue: ['收入', '成本'], operatingProfit: '营业利润',
          operatingExpenses: ['营业', '费用'], netProfit: '净利润', tax: '税费', interest: '利息',
          sga: '销售及管理费用', yoy48: '同比 +48%', yoy4Down: '同比 (4%)', yoy5: '同比 +5%',
          yoy12: '同比 +12%', yoy2: '同比 +2%', margin61: '利润率 61%', pp1: '同比 +1 个百分点',
          margin32: '利润率 32%', pp11: '同比 +11 个百分点', margin30: '利润率 30%',
          pp6: '同比 +6 个百分点', revenueShare29: '占收入 29%', pp2Down: '同比 (2 个百分点)',
          revenueShare0: '占收入 0%', pp8Down: '同比 (8 个百分点)',
        }
      : {
          emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC', bottling: 'Bottling investments',
          other: 'Other', revenue: 'Revenue', eliminations: 'Eliminations', grossProfit: 'Gross profit',
          costOfRevenue: ['Cost of', 'revenue'], operatingProfit: 'Operating profit',
          operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax', interest: 'Interest',
          sga: 'SG&A', yoy48: '+48% Y/Y', yoy4Down: '(4%) Y/Y', yoy5: '+5% Y/Y', yoy12: '+12% Y/Y',
          yoy2: '+2% Y/Y', margin61: '61% margin', pp1: '+1pp Y/Y', margin32: '32% margin',
          pp11: '+11pp Y/Y', margin30: '30% margin', pp6: '+6pp Y/Y', revenueShare29: '29% of revenue',
          pp2Down: '(2pp) Y/Y', revenueShare0: '0% of revenue', pp8Down: '(8pp) Y/Y',
        };

    const source = (valueTop, nameTop, name, yoy, options = {}) => ({
      blocks: [
        block(486, valueTop, [line('$value', 40), line(yoy, 29, 400, NOTE)], options.valueGap || 13),
        block(options.nameX || 424, nameTop, [line(name, options.nameSize || 36, 700)], 8, 'end'),
      ],
    });

    return {
      gross_revenue: { blocks: [] },
      emea: zh ? {
        blocks: [
          block(486, 281, [line('$value', 40), line(t.yoy48, 29, 400, NOTE)], 13),
          block(445, 382, [line('欧洲、中东', 28, 700), line('和非洲', 28, 700)], 6, 'end'),
        ],
      } : source(281, 396, t.emea, t.yoy48, { nameX: 411 }),
      latam: source(475, 574, t.latam, t.yoy4Down, { nameX: 416 }),
      ucan: zh ? {
        blocks: [
          block(486, 644, [line('$value', 40), line(t.yoy5, 29, 400, NOTE)], 13),
          block(445, 762, [line('美国和', 32, 700), line('加拿大', 32, 700)], 6, 'end'),
        ],
      } : source(644, 782, t.ucan, t.yoy5),
      apac: source(899, 996, t.apac, t.yoy12, { nameX: 411 }),
      bottling_investments: source(1055, 1151, t.bottling, t.yoy2, { nameSize: zh ? 34 : 36, nameX: 392, valueGap: 6 }),
      other_revenue: { blocks: [block(486, 1252, [line('$value', 40)]), block(398, 1296, [line(t.other, 36, 700)], 8, 'end')] },
      revenue: { blocks: [block(1233, 568, [line(t.revenue, 40, 700), line('$value', 40), line(t.yoy5, 29, 400, NOTE)], 6)] },
      eliminations: { blocks: [block(1233, 1127, [line(t.eliminations, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL)])] },
      gross_profit: { blocks: [block(1607, 421, [
        line(t.grossProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(t.margin61, 29, 400, NOTE), line(t.pp1, 29, 400, NOTE),
      ], 12)] },
      cost_of_revenue: { blocks: [block(1607, 1118, [
        ...t.costOfRevenue.map((text) => line(text, 40, 700, RED_LABEL)), line('$value', 40, 400, RED_LABEL),
      ], 12)] },
      operating_profit: { blocks: [block(1981, 337, [
        line(t.operatingProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(t.margin32, 29, 400, NOTE), line(t.pp11, 29, 400, NOTE),
      ], 12)] },
      operating_expenses: { blocks: [block(1981, 875, [
        ...t.operatingExpenses.map((text) => line(text, 40, 700, RED_LABEL)), line('$value', 40, 400, RED_LABEL),
      ], 12)] },
      net_profit: { blocks: [block(RIGHT_LABEL_X, 391, [
        line(t.netProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(t.margin30, 29, 400, NOTE), line(t.pp6, 29, 400, NOTE),
      ], 12)] },
      other_income: { blocks: [block(2242, 565, [line(t.other, 34, 700, OTHER_GREEN_LABEL), line('$value', 34, 400, OTHER_GREEN_LABEL)])] },
      tax: { blocks: [block(RIGHT_LABEL_X, 664, [line(t.tax, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL)])] },
      interest: { blocks: [block(RIGHT_LABEL_X, 764, [line(t.interest, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL)])] },
      sga: { blocks: [block(RIGHT_LABEL_X + (zh ? 12 : 0), 930, [
        line(t.sga, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        line(t.revenueShare29, 29, 400, NOTE), line(t.pp2Down, 29, 400, NOTE),
      ])] },
      other_opex: { blocks: [block(RIGHT_LABEL_X, 1143, [
        line(t.other, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        line(t.revenueShare0, 29, 400, NOTE), line(t.pp8Down, 29, 400, NOTE),
      ])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q3-fy25',
    name: 'Coca-Cola · Q3 FY25',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola', title: 'Coca-Cola Q3 FY25 Income Statement', period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025', hidePeriodStamp: true, currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 210, titleSize: 150, titleWeight: 800, titleTextLength: 2326,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK_LABEL }, hub: { node: BLACK, label: BLACK_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/coca-cola/company-wordmark.png', x: 736, y: 247, width: 594, height: 200 },
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 368, width: 96, height: 92, pairedNode: 'emea' },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 547, width: 98, height: 92, pairedNode: 'latam' },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 752, width: 96, height: 98, pairedNode: 'ucan' },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 970, width: 92, height: 90, pairedNode: 'apac' },
    ],
    layout: {
      scale: 21.3,
      nodes: {
        emea: { x: 450, y: 383, width: 72, height: 63 }, latam: { x: 450, y: 577, width: 72, height: 32 },
        ucan: { x: 450, y: 745, width: 72, height: 111 }, apac: { x: 450, y: 1000, width: 72, height: 30 },
        bottling_investments: { x: 450, y: 1156, width: 72, height: 28 }, other_revenue: { x: 450, y: 1315, width: 72, height: 2 },
        gross_revenue: { x: 824, y: 611, width: 72, height: 271 }, revenue: { x: 1197, y: 708, width: 72, height: 267 },
        eliminations: { x: 1197, y: 1099, width: 72, height: 2 }, gross_profit: { x: 1571, y: 607, width: 72, height: 163 },
        cost_of_revenue: { x: 1571, y: 1006, width: 72, height: 101 }, operating_profit: { x: 1945, y: 523, width: 72, height: 84 },
        operating_expenses: { x: 1945, y: 787, width: 72, height: 78 }, other_income: { x: 2206, y: 541, width: 72, height: 6 },
        net_profit: { x: 2318, y: 419, width: 72, height: 78 }, tax: { x: 2318, y: 692, width: 72, height: 9 },
        interest: { x: 2318, y: 793, width: 72, height: 3 }, sga: { x: 2318, y: 926, width: 72, height: 76 },
        other_opex: { x: 2318, y: 1182, width: 72, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 3.0, valueText: '$3.0B', notes: ['+48% Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.6, notes: ['(4%) Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 5.3, notes: ['+5% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.5, notes: ['+12% Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 4, type: 'source', label: 'Bottling investments', value: 1.3, notes: ['+2% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 5, type: 'source', label: 'Other', value: 0.034, valueText: '$34M', color: GRAY_LINK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 12.734 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 12.5, notes: ['+5% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.3, valueText: '($0.3B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.7, notes: ['61% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.8, valueText: '($4.8B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.0, valueText: '$4.0B', notes: ['32% margin', '+11pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.7, valueText: '($3.7B)' },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.4, valueText: '$0.4B', labelColor: OTHER_GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.7, valueText: '$3.7B', notes: ['30% margin', '+6pp Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.5, valueText: '($0.5B)' },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.2, valueText: '($0.2B)' },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.6, valueText: '($3.6B)', notes: ['29% of revenue', '(2pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', color: OTHER_RED_FACE, notes: ['0% of revenue', '(8pp) Y/Y'] },
    ],
    links: [
      { source: 'emea', target: 'gross_revenue', value: 3.0, sourceWidth: 63, targetWidth: 63, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.6, sourceWidth: 32, targetWidth: 34, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 5.3, sourceWidth: 111, targetWidth: 113, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.5, sourceWidth: 30, targetWidth: 32, sourceOrder: 0, targetOrder: 3 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 1.3, sourceWidth: 28, targetWidth: 28, sourceOrder: 0, targetOrder: 4 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.034, sourceWidth: 2, targetWidth: 1, sourceOrder: 0, targetOrder: 5 },
      { source: 'gross_revenue', target: 'revenue', value: 12.5, sourceWidth: 267, targetWidth: 267, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.3, sourceWidth: 4, targetWidth: 2, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 7.7, sourceWidth: 163, targetWidth: 163, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.8, sourceWidth: 104, targetWidth: 101, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.0, sourceWidth: 84, targetWidth: 84, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.7, sourceWidth: 79, targetWidth: 78, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.3, sourceWidth: 70, targetWidth: 72, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 11, targetWidth: 9, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 3, targetWidth: 3, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.4, sourceWidth: 6, targetWidth: 6, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 3.6, sourceWidth: 76, targetWidth: 76, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Coca-Cola · 2025 财年第三季度',
        meta: { title: '可口可乐 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月', titleTextLength: 2100 },
        nodes: {
          emea: { label: 'EMEA', notes: ['同比 +48%'] }, latam: { label: 'LATAM', notes: ['同比 (4%)'] },
          ucan: { label: 'UCAN', notes: ['同比 +5%'] }, apac: { label: 'APAC', notes: ['同比 +12%'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 +2%'] }, other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +5%'] }, eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 61%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 +11 个百分点'] },
          operating_expenses: { label: '营业费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 +6 个百分点'] }, tax: { label: '税费' },
          interest: { label: '利息' }, sga: { label: '销售及管理费用', notes: ['占收入 29%', '同比 (2 个百分点)'] },
          other_opex: { label: '其他', notes: ['占收入 0%', '同比 (8 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
