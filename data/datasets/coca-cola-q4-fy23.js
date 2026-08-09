/* Coca-Cola — Q4 FY23 income statement ($B).
 * Reconstructed from input/processed/coca-cola-q4-fy23.png as a measured,
 * fixed-layout d3-sankey. Financial SSOT: data/income-statements/coca-cola.js. */
(function () {
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const OTHER_GREEN_LABEL = '#008e00';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#797979';
  const RIGHT_LABEL_X = 2510;

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
          global: '全球投资业务', bottling: '装瓶投资业务', other: '其他', revenue: '收入', eliminations: '抵销',
          grossProfit: '毛利润', costOfRevenue: ['收入', '成本'], operatingProfit: '营业利润',
          operatingExpenses: ['营业', '费用'], netProfit: '净利润', tax: '税费', interest: '利息',
          sga: '销售及管理费用', yoy11: '同比 +11%', yoy16: '同比 +16%', yoy5: '同比 +5%',
          yoy7: '同比 +7%', yoy10: '同比 +10%', yoy2: '同比 +2%', margin57: '利润率 57%',
          pp2: '同比 +2 个百分点', margin21: '利润率 21%', pp0: '同比 +0 个百分点',
          margin18: '利润率 18%', ppDown2: '同比 (2 个百分点)', revenueShare35: '占收入 35%',
          revenueShare1: '占收入 1%',
        }
      : {
          emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC',
          global: 'Global ventures', bottling: 'Bottling investments', other: 'Other', revenue: 'Revenue',
          eliminations: 'Eliminations', grossProfit: 'Gross profit',
          costOfRevenue: ['Cost of', 'revenue'], operatingProfit: 'Operating profit',
          operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax',
          interest: 'Interest', sga: 'SG&A', yoy11: '+11% Y/Y', yoy16: '+16% Y/Y',
          yoy5: '+5% Y/Y', yoy7: '+7% Y/Y', yoy10: '+10% Y/Y', yoy2: '+2% Y/Y',
          margin57: '57% margin', pp2: '+2pp Y/Y', margin21: '21% margin', pp0: '+0pp Y/Y',
          margin18: '18% margin', ppDown2: '(2pp) Y/Y', revenueShare35: '35% of revenue',
          revenueShare1: '1% of revenue',
        };

    const source = (valueTop, nameTop, name, yoy, options = {}) => ({
      blocks: [
        block(options.valueX || 486, valueTop, [line('$value', 40), line(yoy, 29, 400, NOTE)], 13),
        block(options.nameX || 424, nameTop, [line(name, options.nameSize || 36, 700)], 8, 'end'),
      ],
    });

    return {
      gross_revenue: { blocks: [] },
      emea: zh
        ? {
            blocks: [
              block(486, 219, [line('$value', 40), line(t.yoy11, 29, 400, NOTE)], 13),
              block(439, 306, [line('欧洲、中东', 28, 700), line('和非洲', 28, 700)], 6, 'end'),
            ],
          }
        : source(219, 320, t.emea, t.yoy11, { nameX: 411 }),
      latam: source(404, 501, t.latam, t.yoy16, { nameX: 399 }),
      ucan: zh
        ? {
            blocks: [
              block(478, 562, [line('$value', 40), line(t.yoy5, 29, 400, NOTE)], 13),
              block(424, 681, [line('美国和', 32, 700), line('加拿大', 32, 700)], 6, 'end'),
            ],
          }
        : source(562, 697, t.ucan, t.yoy5, { nameX: 416, valueX: 478 }),
      apac: source(808, 904, t.apac, t.yoy7, { nameX: 411 }),
      global_ventures: source(961, 1042, t.global, t.yoy10, {
        nameSize: zh ? 34 : 36,
        nameX: 386,
      }),
      bottling_investments: source(1094, 1206, t.bottling, t.yoy2, {
        nameSize: zh ? 34 : 36,
        nameX: 406,
        valueX: 468,
      }),
      other_revenue: {
        blocks: [
          block(478, 1291, [line('$value', 40)]),
          block(398, 1329, [line(t.other, 36, 700)], 8, 'end'),
        ],
      },
      revenue: {
        blocks: [block(1227, 539, [
          line(t.revenue, 40, 700), line('$value', 40), line(t.yoy7, 29, 400, NOTE),
        ], 6)],
      },
      eliminations: {
        blocks: [block(1225, 1105, [
          line(t.eliminations, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      gross_profit: {
        blocks: [block(1599, 396, [
          line(t.grossProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin57, 29, 400, NOTE), line(t.pp2, 29, 400, NOTE),
        ], 12)],
      },
      cost_of_revenue: {
        blocks: [block(1595, 1085, [
          ...t.costOfRevenue.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      operating_profit: {
        blocks: [block(1978, 268, [
          line(t.operatingProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin21, 29, 400, NOTE), line(t.pp0, 29, 400, NOTE),
        ], 12)],
      },
      operating_expenses: {
        blocks: [block(1970, 863, [
          ...t.operatingExpenses.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      net_profit: {
        blocks: [block(RIGHT_LABEL_X, 332, [
          line(t.netProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin18, 29, 400, NOTE), line(t.ppDown2, 29, 400, NOTE),
        ], 12)],
      },
      other_income: {
        blocks: [block(2230, 482, [
          line(t.other, 34, 700, OTHER_GREEN_LABEL), line('$value', 34, 400, OTHER_GREEN_LABEL),
        ])],
      },
      tax: {
        blocks: [block(RIGHT_LABEL_X, 585, [
          line(t.tax, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      interest: {
        blocks: [block(RIGHT_LABEL_X, 695, [
          line(t.interest, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      sga: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 10 : 0), 894, [
          line(t.sga, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare35, 29, 400, NOTE),
        ])],
      },
      other_opex: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 10 : 0), 1083, [
          line(t.other, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare1, 29, 400, NOTE),
        ])],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q4-fy23',
    name: 'Coca-Cola · Q4 FY23',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola',
      title: 'Coca-Cola Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q4-fy23.png', width: 2667, height: 1500 },
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
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/coca-cola/company-wordmark.png', x: 736, y: 247, width: 594, height: 200 },
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 297, width: 96, height: 92, pairedNode: 'emea' },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 478, width: 98, height: 92, pairedNode: 'latam' },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 671, width: 96, height: 98, pairedNode: 'ucan' },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 878, width: 92, height: 90, pairedNode: 'apac' },
    ],
    layout: {
      scale: 27.5,
      nodes: {
        emea: { x: 442, y: 320, width: 71, height: 45 },
        latam: { x: 442, y: 504, width: 71, height: 39 },
        ucan: { x: 442, y: 665, width: 71, height: 109 },
        apac: { x: 442, y: 909, width: 71, height: 28 },
        global_ventures: { x: 442, y: 1054, width: 71, height: 20 },
        bottling_investments: { x: 442, y: 1201, width: 71, height: 53 },
        other_revenue: { x: 442, y: 1351, width: 71, height: 1 },
        gross_revenue: { x: 816, y: 639, width: 70, height: 306 },
        revenue: { x: 1192, y: 688, width: 70, height: 297 },
        eliminations: { x: 1190, y: 1077, width: 70, height: 7 },
        gross_profit: { x: 1564, y: 583, width: 70, height: 170 },
        cost_of_revenue: { x: 1566, y: 944, width: 70, height: 127 },
        operating_profit: { x: 1932, y: 456, width: 70, height: 62 },
        operating_expenses: { x: 1935, y: 742, width: 70, height: 106 },
        other_income: { x: 2193, y: 458, width: 70, height: 7 },
        net_profit: { x: 2310, y: 356, width: 71, height: 53 },
        tax: { x: 2310, y: 611, width: 71, height: 13 },
        interest: { x: 2310, y: 709, width: 71, height: 3 },
        sga: { x: 2310, y: 898, width: 71, height: 104 },
        other_opex: { x: 2310, y: 1147, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 1.7, notes: ['+11% Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.5, notes: ['+16% Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 4.0, valueText: '$4.0B', notes: ['+5% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.1, notes: ['+7% Y/Y'] },
      { id: 'global_ventures', col: 0, order: 4, type: 'source', label: 'Global ventures', value: 0.8, notes: ['+10% Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 5, type: 'source', label: 'Bottling investments', value: 2.0, valueText: '$2.0B', notes: ['+2% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 0.031, valueText: '$31M', color: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 11.131 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 10.8, notes: ['+7% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.3, valueText: '($0.3B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 6.2, notes: ['57% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.6, valueText: '($4.6B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.3, notes: ['21% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.9, valueText: '($3.9B)' },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.4, labelColor: OTHER_GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.0, valueText: '$2.0B', notes: ['18% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.5, valueText: '($0.5B)' },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.1, valueText: '($0.1B)' },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.8, valueText: '($3.8B)', notes: ['35% of revenue'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue'] },
    ],
    links: [
      { source: 'emea', target: 'gross_revenue', value: 1.7, sourceWidth: 45, targetWidth: 47, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.5, sourceWidth: 39, targetWidth: 41, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 4.0, sourceWidth: 109, targetWidth: 110, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.1, sourceWidth: 28, targetWidth: 30, sourceOrder: 0, targetOrder: 3 },
      { source: 'global_ventures', target: 'gross_revenue', value: 0.8, sourceWidth: 20, targetWidth: 22, sourceOrder: 0, targetOrder: 4 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 2.0, sourceWidth: 53, targetWidth: 55, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.031, sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 10.8, sourceWidth: 299, targetWidth: 297, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.3, sourceWidth: 7, targetWidth: 7, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 6.2, sourceWidth: 170, targetWidth: 170, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.6, sourceWidth: 127, targetWidth: 127, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.3, sourceWidth: 61, targetWidth: 62, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.9, sourceWidth: 108, targetWidth: 106, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.7, sourceWidth: 46, targetWidth: 44, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 13, targetWidth: 13, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 3, targetWidth: 3, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.4, sourceWidth: 7, targetWidth: 8, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 3.8, sourceWidth: 104, targetWidth: 104, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Coca-Cola · 2023 财年第四季度',
        meta: {
          title: '可口可乐 2023 财年第四季度利润表',
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          titleTextLength: 2100,
        },
        nodes: {
          emea: { label: 'EMEA', notes: ['同比 +11%'] }, latam: { label: 'LATAM', notes: ['同比 +16%'] },
          ucan: { label: 'UCAN', notes: ['同比 +5%'] }, apac: { label: 'APAC', notes: ['同比 +7%'] },
          global_ventures: { label: '全球投资业务', notes: ['同比 +10%'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 +2%'] }, other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +7%'] }, eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 57%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 21%', '同比 +0 个百分点'] },
          operating_expenses: { label: '营业费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 18%', '同比 (2 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' },
          sga: { label: '销售及管理费用', notes: ['占收入 35%'] },
          other_opex: { label: '其他', notes: ['占收入 1%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
