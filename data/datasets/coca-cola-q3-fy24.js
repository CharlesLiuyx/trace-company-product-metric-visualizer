/* Coca-Cola — Q3 FY24 income statement ($B).
 * Reconstructed from input/processed/coca-cola-q3-fy24.png as a measured,
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
  const NOTE = '#707070';
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
          globalVentures: '全球投资业务', bottling: '装瓶投资业务', other: '其他',
          revenue: '收入', eliminations: '抵销', grossProfit: '毛利润',
          costOfRevenue: ['收入', '成本'], operatingProfit: '营业利润',
          operatingExpenses: ['营业', '费用'], netProfit: '净利润', tax: '税费', interest: '利息',
          sga: '销售及管理费用', yoyNeg7: '同比 (7%)', yoy4: '同比 +4%', yoy12: '同比 +12%',
          yoyNeg4: '同比 (4%)', yoy0: '同比 +0%', yoyNeg29: '同比 (29%)', yoyNeg1: '同比 (1%)',
          margin61: '利润率 61%', pp0: '同比 (0 个百分点)', margin21: '利润率 21%',
          ppNeg6: '同比 (6 个百分点)', margin24: '利润率 24%', ppNeg2: '同比 (2 个百分点)',
          revenueShare31: '占收入 31%', revenueShare9: '占收入 9%',
        }
      : {
          emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC',
          globalVentures: 'Global ventures', bottling: 'Bottling investments', other: 'Other',
          revenue: 'Revenue', eliminations: 'Eliminations', grossProfit: 'Gross profit',
          costOfRevenue: ['Cost of', 'revenue'], operatingProfit: 'Operating profit',
          operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax',
          interest: 'Interest', sga: 'SG&A', yoyNeg7: '(7%) Y/Y', yoy4: '+4% Y/Y',
          yoy12: '+12% Y/Y', yoyNeg4: '(4%) Y/Y', yoy0: '+0% Y/Y', yoyNeg29: '(29%) Y/Y',
          yoyNeg1: '(1%) Y/Y', margin61: '61% margin', pp0: '(0pp) Y/Y',
          margin21: '21% margin', ppNeg6: '(6pp) Y/Y', margin24: '24% margin',
          ppNeg2: '(2pp) Y/Y', revenueShare31: '31% of revenue', revenueShare9: '9% of revenue',
        };

    const source = (valueTop, nameTop, name, yoy, options = {}) => ({
      blocks: [
        block(486, valueTop, [line('$value', 40), line(yoy, 29, 400, NOTE)], options.valueGap || 13),
        block(options.nameX || 424, nameTop, [line(name, options.nameSize || 36, 700)], 8, 'end'),
      ],
    });

    return {
      gross_revenue: { blocks: [] },
      emea: zh
        ? {
            blocks: [
              block(486, 238, [line('$value', 40), line(t.yoyNeg7, 29, 400, NOTE)], 13),
              block(439, 332, [line('欧洲、中东', 28, 700), line('和非洲', 28, 700)], 6, 'end'),
            ],
          }
        : source(238, 343, t.emea, t.yoyNeg7, { nameX: 411 }),
      latam: source(402, 497, t.latam, t.yoy4, { nameX: 416 }),
      ucan: zh
        ? {
            blocks: [
              block(486, 537, [line('$value', 40), line(t.yoy12, 29, 400, NOTE)], 13),
              block(424, 671, [line('美国和', 32, 700), line('加拿大', 32, 700)], 6, 'end'),
            ],
          }
        : source(537, 688, t.ucan, t.yoy12),
      apac: source(794, 884, t.apac, t.yoyNeg4, { nameX: 411 }),
      global_ventures: source(942, 1029, t.globalVentures, t.yoy0, {
        nameSize: zh ? 31 : 36, nameX: 392, valueGap: 6,
      }),
      bottling_investments: source(1082, 1181, t.bottling, t.yoyNeg29, {
        nameSize: zh ? 34 : 36, nameX: 392, valueGap: 6,
      }),
      other_revenue: {
        blocks: [
          block(486, 1271, [line('$value', 40)]),
          block(398, 1304, [line(t.other, 36, 700)], 8, 'end'),
        ],
      },
      revenue: {
        blocks: [block(1229, 513, [
          line(t.revenue, 40, 700), line('$value', 40), line(t.yoyNeg1, 29, 400, NOTE),
        ], 6)],
      },
      eliminations: {
        blocks: [block(1233, 1096, [
          line(t.eliminations, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      gross_profit: {
        blocks: [block(1603, 387, [
          line(t.grossProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin61, 29, 400, NOTE), line(t.pp0, 29, 400, NOTE),
        ], 12)],
      },
      cost_of_revenue: {
        blocks: [block(1600, 1054, [
          ...t.costOfRevenue.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      operating_profit: {
        blocks: [block(1979, 287, [
          line(t.operatingProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin21, 29, 400, NOTE), line(t.ppNeg6, 29, 400, NOTE),
        ], 12)],
      },
      operating_expenses: {
        blocks: [block(1984, 882, [
          ...t.operatingExpenses.map((text) => line(text, 40, 700, RED_LABEL)),
          line('$value', 40, 400, RED_LABEL),
        ], 12)],
      },
      net_profit: {
        blocks: [block(RIGHT_LABEL_X + (zh ? 2 : 0), 342, [
          line(t.netProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
          line(t.margin24, 29, 400, NOTE), line(t.ppNeg2, 29, 400, NOTE),
        ], 12)],
      },
      other_income: {
        blocks: [block(2242, 505, [
          line(t.other, 34, 700, OTHER_GREEN_LABEL), line('$value', 34, 400, OTHER_GREEN_LABEL),
        ])],
      },
      tax: {
        blocks: [block(RIGHT_LABEL_X, 659, [
          line(t.tax, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      interest: {
        blocks: [block(RIGHT_LABEL_X, 779, [
          line(t.interest, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
        ])],
      },
      sga: {
        blocks: [block(2498 + (zh ? 16 : 0), 910, [
          line(t.sga, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare31, 29, 400, NOTE),
        ])],
      },
      other_opex: {
        blocks: [block(2494 + (zh ? 12 : 0), 1154, [
          line(t.other, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL),
          line(t.revenueShare9, 29, 400, NOTE),
        ])],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q3-fy24',
    name: 'Coca-Cola · Q3 FY24',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola',
      title: 'Coca-Cola Q3 FY24 Income Statement',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q3-fy24.png', width: 2667, height: 1500 },
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
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 322, width: 96, height: 92, pairedNode: 'emea' },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 471, width: 98, height: 92, pairedNode: 'latam' },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 657, width: 96, height: 98, pairedNode: 'ucan' },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 859, width: 92, height: 90, pairedNode: 'apac' },
    ],
    layout: {
      scale: 24.8,
      nodes: {
        emea: { x: 450, y: 342, width: 72, height: 47 },
        latam: { x: 450, y: 499, width: 72, height: 39 },
        ucan: { x: 450, y: 648, width: 72, height: 123 },
        apac: { x: 450, y: 891, width: 72, height: 31 },
        global_ventures: { x: 450, y: 1042, width: 72, height: 18 },
        bottling_investments: { x: 450, y: 1187, width: 72, height: 31 },
        other_revenue: { x: 450, y: 1218, width: 72, height: 1 },
        gross_revenue: { x: 824, y: 572, width: 72, height: 300 },
        revenue: { x: 1199, y: 659, width: 72, height: 294 },
        eliminations: { x: 1199, y: 1078, width: 72, height: 4 },
        gross_profit: { x: 1567, y: 575, width: 72, height: 178 },
        cost_of_revenue: { x: 1572, y: 931, width: 72, height: 114 },
        operating_profit: { x: 1943, y: 477, width: 72, height: 60 },
        operating_expenses: { x: 1948, y: 752, width: 72, height: 114 },
        other_income: { x: 2206, y: 474, width: 72, height: 24 },
        net_profit: { x: 2318, y: 350, width: 72, height: 69 },
        tax: { x: 2318, y: 694, width: 72, height: 12 },
        interest: { x: 2318, y: 814, width: 72, height: 2 },
        sga: { x: 2318, y: 913, width: 72, height: 89 },
        other_opex: { x: 2318, y: 1190, width: 72, height: 25 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 2.0, valueText: '$2.0B', notes: ['(7%) Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.6, notes: ['+4% Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 5.0, valueText: '$5.0B', notes: ['+12% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.3, notes: ['(4%) Y/Y'] },
      { id: 'global_ventures', col: 0, order: 4, type: 'source', label: 'Global ventures', value: 0.8, notes: ['+0% Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 5, type: 'source', label: 'Bottling investments', value: 1.3, notes: ['(29%) Y/Y'] },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 0.018, valueText: '$18M', color: BLACK_LABEL, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 12.2 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 11.9, notes: ['(1%) Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.3, valueText: '($0.3B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.2, notes: ['61% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.7 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.5, notes: ['21% margin', '(6pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.7 },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 1.0, valueText: '$1.0B', labelColor: OTHER_GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.9, notes: ['24% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.2 },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.6, notes: ['31% of revenue'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 1.0, valueText: '($1.0B)', notes: ['9% of revenue'] },
    ],
    links: [
      { source: 'emea', target: 'gross_revenue', value: 2.0, sourceWidth: 47, targetWidth: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.6, sourceWidth: 39, targetWidth: 40, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 5.0, sourceWidth: 123, targetWidth: 125, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.3, sourceWidth: 31, targetWidth: 32, sourceOrder: 0, targetOrder: 3 },
      { source: 'global_ventures', target: 'gross_revenue', value: 0.8, sourceWidth: 18, targetWidth: 20, sourceOrder: 0, targetOrder: 4 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 1.3, sourceWidth: 31, targetWidth: 32, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.018, sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 11.9, sourceWidth: 296, targetWidth: 294, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.3, sourceWidth: 4, targetWidth: 4, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 7.2, sourceWidth: 178, targetWidth: 178, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.7, sourceWidth: 116, targetWidth: 114, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.5, sourceWidth: 64, targetWidth: 60, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.7, sourceWidth: 114, targetWidth: 114, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 46, targetWidth: 45, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 12, targetWidth: 12, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 2, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 1.0, sourceWidth: 24, targetWidth: 24, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 3.6, sourceWidth: 89, targetWidth: 89, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 1.0, sourceWidth: 25, targetWidth: 25, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Coca-Cola · 2024 财年第三季度',
        meta: {
          title: '可口可乐 2024 财年第三季度利润表',
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          titleTextLength: 2100,
        },
        nodes: {
          emea: { label: 'EMEA', notes: ['同比 (7%)'] }, latam: { label: 'LATAM', notes: ['同比 +4%'] },
          ucan: { label: 'UCAN', notes: ['同比 +12%'] }, apac: { label: 'APAC', notes: ['同比 (4%)'] },
          global_ventures: { label: '全球投资业务', notes: ['同比 +0%'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 (29%)'] }, other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 (1%)'] }, eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 61%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 21%', '同比 (6 个百分点)'] },
          operating_expenses: { label: '营业费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 24%', '同比 (2 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' },
          sga: { label: '销售及管理费用', notes: ['占收入 31%'] },
          other_opex: { label: '其他', notes: ['占收入 9%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
