/* Coca-Cola — Q2 FY24 income statement ($B).
 * Reconstructed from input/processed/coca-cola-q2-fy24.png as a measured,
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
          emea: '欧洲中东非洲', latam: '拉美', ucan: '美国和加拿大', apac: '亚太',
          globalVentures: '全球创投业务', bottling: '装瓶投资业务', other: '其他',
          revenue: '收入', eliminations: '抵销', grossProfit: '毛利润',
          costOfRevenue: ['收入', '成本'], operatingProfit: '营业利润',
          operatingExpenses: ['营业', '费用'], netProfit: '净利润', tax: '税费',
          interest: '利息', sga: '销售及管理费用', yoy7: '同比 +7%', yoy20: '同比 +20%',
          yoy10: '同比 +10%', yoyNeg4: '同比 (4%)', yoy0: '同比 +0%',
          yoyNeg25: '同比 (25%)', yoy3: '同比 +3%', margin61: '利润率 61%',
          pp2: '同比 +2 个百分点', margin21: '利润率 21%', pp1: '同比 +1 个百分点',
          margin19: '利润率 19%', ppNeg2: '同比 (2 个百分点)',
          revenueShare29: '占收入 29%', revenueShare11: '占收入 11%',
        }
      : {
          emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC',
          globalVentures: 'Global ventures', bottling: 'Bottling investments',
          other: 'Other', revenue: 'Revenue', eliminations: 'Eliminations',
          grossProfit: 'Gross profit', costOfRevenue: ['Cost of', 'revenue'],
          operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
          netProfit: 'Net profit', tax: 'Tax', interest: 'Interest', sga: 'SG&A',
          yoy7: '+7% Y/Y', yoy20: '+20% Y/Y', yoy10: '+10% Y/Y', yoyNeg4: '(4%) Y/Y',
          yoy0: '+0% Y/Y', yoyNeg25: '(25%) Y/Y', yoy3: '+3% Y/Y',
          margin61: '61% margin', pp2: '+2pp Y/Y', margin21: '21% margin',
          pp1: '+1pp Y/Y', margin19: '19% margin', ppNeg2: '(2pp) Y/Y',
          revenueShare29: '29% of revenue', revenueShare11: '11% of revenue',
        };

    const source = (valueTop, nameTop, name, yoy, options = {}) => ({
      blocks: [
        block(options.valueX || 486, valueTop, [line('$value', 40), line(yoy, 29, 400, NOTE)], options.valueGap || 13),
        block(options.nameX || 424, nameTop, [line(name, options.nameSize || 36, 700)], 8, 'end'),
      ],
    });

    return {
      gross_revenue: { blocks: [] },
      emea: source(246, zh ? 368 : 360, t.emea, t.yoy7, { nameSize: zh ? 20 : 36, nameX: zh ? 443 : 411 }),
      latam: source(424, 526, t.latam, t.yoy20, { nameX: 412, valueX: 478 }),
      ucan: source(581, zh ? 732 : 723, t.ucan, t.yoy10, { nameSize: zh ? 23 : 36, nameX: zh ? 443 : 420, valueX: 473 }),
      apac: source(794, 916, t.apac, t.yoyNeg4, { nameX: 411 }),
      global_ventures: source(962, 1048, t.globalVentures, t.yoy0, {
        nameSize: zh ? 31 : 36, nameX: 390, valueX: 481, valueGap: 10,
      }),
      bottling_investments: source(1099, 1182, t.bottling, t.yoyNeg25, {
        nameSize: zh ? 34 : 36, nameX: 396, valueX: 481, valueGap: 6,
      }),
      other_revenue: {
        blocks: [
          block(486, 1260, [line('$value', 40)]),
          block(398, 1298, [line(t.other, 36, 700)], 8, 'end'),
        ],
      },
      revenue: {
        blocks: [block(1226, 546, [
          line(t.revenue, 40, 700), line('$value', 40), line(t.yoy3, 29, 400, NOTE),
        ], 6)],
      },
      eliminations: {
        blocks: [block(1233, 1186, [
          line(t.eliminations, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      gross_profit: {
        blocks: [block(1600, 410, [
          line(t.grossProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin61, 29, 400, NOTE), line(t.pp2, 29, 400, NOTE),
        ], 12)],
      },
      cost_of_revenue: {
        blocks: [block(1607, 1118, [
          ...t.costOfRevenue.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      operating_profit: {
        blocks: [block(1981, 313, [
          line(t.operatingProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin21, 29, 400, NOTE), line(t.pp1, 29, 400, NOTE),
        ], 12)],
      },
      operating_expenses: {
        blocks: [block(1981, 935, [
          ...t.operatingExpenses.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      net_profit: {
        blocks: [block(RIGHT_LABEL_X, 379, [
          line(t.netProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin19, 29, 400, NOTE), line(t.ppNeg2, 29, 400, NOTE),
        ], 12)],
      },
      other_income: {
        blocks: [block(2238, 526, [
          line(t.other, 34, 700, OTHER_GREEN_LABEL), line('$value', 34, 400, OTHER_GREEN_LABEL),
        ])],
      },
      tax: {
        blocks: [block(RIGHT_LABEL_X, 608, [
          line(t.tax, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      interest: {
        blocks: [block(RIGHT_LABEL_X, 732, [
          line(t.interest, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      sga: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 12 : 0), 894, [
          line(t.sga, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare29, 29, 400, NOTE),
        ])],
      },
      other_opex: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 12 : 0), 1192, [
          line(t.other, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare11, 29, 400, NOTE),
        ])],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q2-fy24',
    name: 'Coca-Cola · Q2 FY24',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola',
      title: 'Coca-Cola Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q2-fy24.png', width: 2667, height: 1500 },
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
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 333, width: 96, height: 92, pairedNode: 'emea' },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 499, width: 98, height: 92, pairedNode: 'latam' },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 693, width: 96, height: 98, pairedNode: 'ucan' },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 890, width: 92, height: 90, pairedNode: 'apac' },
    ],
    layout: {
      scale: 23,
      nodes: {
        emea: { x: 448, y: 348, width: 72, height: 62 },
        latam: { x: 448, y: 524, width: 72, height: 43 },
        ucan: { x: 448, y: 681, width: 72, height: 129 },
        apac: { x: 448, y: 918, width: 72, height: 38 },
        global_ventures: { x: 448, y: 1061, width: 72, height: 19 },
        bottling_investments: { x: 448, y: 1185, width: 72, height: 40 },
        other_revenue: { x: 448, y: 1323, width: 72, height: 2 },
        gross_revenue: { x: 822, y: 629, width: 72, height: 341 },
        revenue: { x: 1196, y: 692, width: 72, height: 334 },
        eliminations: { x: 1198, y: 1160, width: 72, height: 5 },
        gross_profit: { x: 1567, y: 597, width: 72, height: 204 },
        cost_of_revenue: { x: 1572, y: 979, width: 72, height: 129 },
        operating_profit: { x: 1948, y: 500, width: 72, height: 69 },
        operating_expenses: { x: 1953, y: 788, width: 72, height: 131 },
        other_income: { x: 2203, y: 506, width: 72, height: 13 },
        net_profit: { x: 2316, y: 400, width: 72, height: 62 },
        tax: { x: 2316, y: 639, width: 72, height: 15 },
        interest: { x: 2316, y: 771, width: 72, height: 3 },
        sga: { x: 2316, y: 896, width: 72, height: 95 },
        other_opex: { x: 2316, y: 1218, width: 72, height: 35 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 2.3, notes: ['+7% Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.7, notes: ['+20% Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 4.8, notes: ['+10% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.5, notes: ['(4%) Y/Y'] },
      { id: 'global_ventures', col: 0, order: 4, type: 'source', label: 'Global ventures', value: 0.8, notes: ['+0% Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 5, type: 'source', label: 'Bottling investments', value: 1.5, notes: ['(25%) Y/Y'] },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 0.03, valueText: '$30M', color: GRAY_LINK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 12.7 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 12.4, notes: ['+3% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.3, valueText: '($0.3B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.6, notes: ['61% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.8 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.6, notes: ['21% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.9 },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.5, labelColor: OTHER_GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.4, notes: ['19% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.6 },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.1 },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.5, notes: ['29% of revenue'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 1.4, notes: ['11% of revenue'] },
    ],
    links: [
      { source: 'emea', target: 'gross_revenue', value: 2.3, sourceWidth: 62, targetWidth: 62, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.7, sourceWidth: 43, targetWidth: 46, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 4.8, sourceWidth: 129, targetWidth: 130, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.5, sourceWidth: 38, targetWidth: 40, sourceOrder: 0, targetOrder: 3 },
      { source: 'global_ventures', target: 'gross_revenue', value: 0.8, sourceWidth: 19, targetWidth: 22, sourceOrder: 0, targetOrder: 4 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 1.5, sourceWidth: 40, targetWidth: 40, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.03, sourceWidth: 2, targetWidth: 1, sourceOrder: 0, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 12.4, sourceWidth: 334, targetWidth: 334, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.3, sourceWidth: 7, targetWidth: 5, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 7.6, sourceWidth: 204, targetWidth: 204, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.8, sourceWidth: 130, targetWidth: 129, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.6, sourceWidth: 71, targetWidth: 69, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.9, sourceWidth: 132, targetWidth: 131, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceWidth: 50, targetWidth: 49, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 16, targetWidth: 15, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 3, targetWidth: 3, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.5, sourceWidth: 13, targetWidth: 13, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 3.5, sourceWidth: 95, targetWidth: 95, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 1.4, sourceWidth: 36, targetWidth: 35, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Coca-Cola · 2024 财年第二季度',
        meta: {
          title: '可口可乐 2024 财年第二季度利润表',
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          titleTextLength: 2100,
        },
        nodes: {
          emea: { label: '欧洲中东非洲', notes: ['同比 +7%'] }, latam: { label: 'LATAM', notes: ['同比 +20%'] },
          ucan: { label: 'UCAN', notes: ['同比 +10%'] }, apac: { label: 'APAC', notes: ['同比 (4%)'] },
          global_ventures: { label: '全球创投业务', notes: ['同比 +0%'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 (25%)'] }, other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +3%'] }, eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 61%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 21%', '同比 +1 个百分点'] },
          operating_expenses: { label: '营业费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 19%', '同比 (2 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' },
          sga: { label: '销售及管理费用', notes: ['占收入 29%'] },
          other_opex: { label: '其他', notes: ['占收入 11%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
