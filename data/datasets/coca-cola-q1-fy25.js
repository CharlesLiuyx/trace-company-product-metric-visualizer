/* Coca-Cola — Q1 FY25 income statement ($B).
 * Measured against input/processed/coca-cola-q1-fy25.png.
 * Financial SSOT: data/income-statements/coca-cola.js. */
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
  const RIGHT_X = 2518;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, color });
  const block = (x, top, lines, lineGap = 8, anchor = 'middle') => ({ x, top, anchor, lineGap, lines });

  // The Source paints the $26M relationship as a hairline guide whose two
  // endpoints do not produce detectable node-face interfaces. Keep the
  // semantic link interactive, while drawing the Source-faithful guide as an
  // annotation instead of inventing a Sankey ribbon at either face.
  const otherRevenueGuide = `
    <g class="sankey-interactive-annotation"
      data-node="other_revenue"
      data-link-numerator="other_revenue"
      data-link-denominator="gross_revenue"
      data-link-anchor-x="640"
      data-link-anchor-y="1086">
      <path d="M526 1297 H538 C624 1297 625 876 820 876"
        fill="none" stroke="${GRAY_LINK}" stroke-width="2" stroke-linecap="round"/>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      emea: ['欧洲、中东', '和非洲'], latam: '拉美', ucan: ['美国和', '加拿大'], apac: '亚太',
      bottling: '装瓶投资业务', other: '其他', revenue: '收入', eliminations: '抵销',
      grossProfit: '毛利润', costOfRevenue: ['收入', '成本'], operatingProfit: '营业利润',
      operatingExpenses: ['营业', '费用'], netProfit: '净利润', tax: '税费', interest: '利息',
      sga: '销售及管理费用', yoy1: '同比 +1%', yoyM3: '同比 (3%)', yoy3: '同比 +3%',
      yoyM4: '同比 (4%)', yoyM19: '同比 (19%)', yoyM2: '同比 (2%)',
      margin63: '利润率 63%', pp0: '同比 +0 个百分点', margin33: '利润率 33%',
      pp14: '同比 +14 个百分点', margin30: '利润率 30%', pp2: '同比 +2 个百分点',
      share29: '占收入 29%', ppM1: '同比 (1 个百分点)', share1: '占收入 1%',
      ppM13: '同比 (13 个百分点)',
    } : {
      emea: 'EMEA', latam: 'LATAM', ucan: 'UCAN', apac: 'APAC',
      bottling: 'Bottling investments', other: 'Other', revenue: 'Revenue',
      eliminations: 'Eliminations', grossProfit: 'Gross profit', costOfRevenue: ['Cost of', 'revenue'],
      operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
      netProfit: 'Net profit', tax: 'Tax', interest: 'Interest', sga: 'SG&A',
      yoy1: '+1% Y/Y', yoyM3: '(3%) Y/Y', yoy3: '+3% Y/Y', yoyM4: '(4%) Y/Y',
      yoyM19: '(19%) Y/Y', yoyM2: '(2%) Y/Y', margin63: '63% margin', pp0: '+0pp Y/Y',
      margin33: '33% margin', pp14: '+14pp Y/Y', margin30: '30% margin', pp2: '+2pp Y/Y',
      share29: '29% of revenue', ppM1: '(1pp) Y/Y', share1: '1% of revenue', ppM13: '(13pp) Y/Y',
    };
    const source = (valueTop, nameTop, name, yoy, options = {}) => ({ blocks: [
      block(486, valueTop, [line('$value', 40), line(yoy, 29, 400, NOTE)], options.valueGap || 13),
      block(options.nameX || 424, nameTop, (Array.isArray(name) ? name : [name]).map((text) => line(text, options.nameSize || 36, 700)), options.nameGap || 8, 'end'),
    ] });
    return {
      gross_revenue: { blocks: [] },
      emea: source(240, zh ? 342 : 350, t.emea, t.yoy1, { nameSize: zh ? 26 : 36, nameX: zh ? 430 : 411, nameGap: 4 }),
      latam: source(445, 538, t.latam, t.yoyM3, { nameX: 411 }),
      ucan: source(622, zh ? 744 : 755, t.ucan, t.yoy3, { nameSize: zh ? 30 : 36, nameGap: 4 }),
      apac: source(870, 966, t.apac, t.yoyM4, { nameX: 411 }),
      bottling_investments: source(1061, 1144, t.bottling, t.yoyM19, { nameSize: zh ? 34 : 36, nameX: 397, valueGap: 6 }),
      other_revenue: { blocks: [block(486, 1239, [line('$value', 40)]), block(408, 1312, [line(t.other, 36, 700)], 8, 'end')] },
      revenue: { blocks: [block(1233, 535, [line(t.revenue, 40, 700), line('$value', 40), line(t.yoyM2, 29, 400, NOTE)], 6)] },
      eliminations: { blocks: [block(1233, 1114, [line(t.eliminations, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL)])] },
      gross_profit: { blocks: [block(1607, 404, [line(t.grossProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin63, 29, 400, NOTE), line(t.pp0, 29, 400, NOTE)], 12)] },
      cost_of_revenue: { blocks: [block(1607, 1109, [...t.costOfRevenue.map((x) => line(x, 40, 700, RED_LABEL)), line('$value', 40, 400, RED_LABEL)], 12)] },
      operating_profit: { blocks: [block(1981, 305, [line(t.operatingProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin33, 29, 400, NOTE), line(t.pp14, 29, 400, NOTE)], 12)] },
      operating_expenses: { blocks: [block(1981, 914, [...t.operatingExpenses.map((x) => line(x, 40, 700, RED_LABEL)), line('$value', 40, 400, RED_LABEL)], 12)] },
      net_profit: { blocks: [block(RIGHT_X - 9, 332, [line(t.netProfit, 40, 700, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin30, 29, 400, NOTE), line(t.pp2, 29, 400, NOTE)], 12)] },
      other_income: { blocks: [block(2249, 522, [line(t.other, 34, 700, OTHER_GREEN_LABEL), line('$value', 34, 400, OTHER_GREEN_LABEL)])] },
      tax: { blocks: [block(RIGHT_X, 653, [line(t.tax, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL)])] },
      interest: { blocks: [block(RIGHT_X, 765, [line(t.interest, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL)])] },
      sga: { blocks: [block(RIGHT_X + (zh ? 12 : 0), 930, [line(t.sga, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL), line(t.share29, 29, 400, NOTE), line(t.ppM1, 29, 400, NOTE)])] },
      other_opex: { blocks: [block(RIGHT_X - 9 + (zh ? 12 : 0), 1151, [line(t.other, 34, 700, RED_LABEL), line('$value', 34, 400, RED_LABEL), line(t.share1, 29, 400, NOTE), line(t.ppM13, 29, 400, NOTE)])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q1-fy25', name: 'Coca-Cola · Q1 FY25', company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola', title: 'Coca-Cola Q1 FY25 Income Statement', period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025', hidePeriodStamp: true, currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 210, titleSize: 150, titleWeight: 800, titleTextLength: 2326,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: BLACK_LABEL }, hub: { node: BLACK, label: BLACK_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: otherRevenueGuide,
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/coca-cola/company-wordmark.png', x: 736, y: 247, width: 594, height: 200 },
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 330, width: 96, height: 92, pairedNode: 'emea' },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 514, width: 98, height: 92, pairedNode: 'latam' },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 729, width: 96, height: 98, pairedNode: 'ucan' },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 944, width: 92, height: 90, pairedNode: 'apac' },
    ],
    layout: {
      scale: 25,
      nodes: {
        emea: { x: 450, y: 340, width: 72, height: 65 }, latam: { x: 450, y: 546, width: 72, height: 36 },
        ucan: { x: 450, y: 724, width: 72, height: 107 }, apac: { x: 450, y: 974, width: 72, height: 34 },
        bottling_investments: { x: 450, y: 1149, width: 72, height: 35 }, other_revenue: { x: 450, y: 1296, width: 72, height: 2 },
        gross_revenue: { x: 824, y: 590, width: 72, height: 286 }, revenue: { x: 1197, y: 685, width: 72, height: 279 },
        eliminations: { x: 1197, y: 1089, width: 72, height: 4 }, gross_profit: { x: 1571, y: 589, width: 72, height: 174 },
        cost_of_revenue: { x: 1571, y: 996, width: 72, height: 104 }, operating_profit: { x: 1945, y: 490, width: 72, height: 91 },
        operating_expenses: { x: 1945, y: 825, width: 72, height: 81 }, other_income: { x: 2213, y: 501, width: 72, height: 13 },
        net_profit: { x: 2318, y: 372, width: 72, height: 83 }, tax: { x: 2318, y: 687, width: 72, height: 17 },
        interest: { x: 2318, y: 805, width: 72, height: 3 }, sga: { x: 2318, y: 945, width: 72, height: 80 },
        other_opex: { x: 2318, y: 1203, width: 72, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 2.7, notes: ['+1% Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.5, notes: ['(3%) Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 4.4, notes: ['+3% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.4, notes: ['(4%) Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 4, type: 'source', label: 'Bottling investments', value: 1.5, notes: ['(19%) Y/Y'] },
      { id: 'other_revenue', col: 0, order: 5, type: 'source', label: 'Other', value: 0.026, valueText: '$26M', color: GRAY_LINK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 11.526 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 11.1, notes: ['(2%) Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.3, valueText: '($0.3B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.0, valueText: '$7.0B', notes: ['63% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.7, notes: ['33% margin', '+14pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.3 },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.6, labelColor: OTHER_GREEN_LABEL },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.3, notes: ['30% margin', '+2pp Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.7 },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.2 },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.2, notes: ['29% of revenue', '(1pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.1, notes: ['1% of revenue', '(13pp) Y/Y'] },
    ],
    links: [
      { source: 'emea', target: 'gross_revenue', value: 2.7, sourceWidth: 65, targetWidth: 66, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.5, sourceWidth: 36, targetWidth: 37, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 4.4, sourceWidth: 107, targetWidth: 110, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.4, sourceWidth: 34, targetWidth: 36, sourceOrder: 0, targetOrder: 3 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 1.5, sourceWidth: 35, targetWidth: 37, sourceOrder: 0, targetOrder: 4 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.026, sourceWidth: 0, targetWidth: 0, sourceOrder: 0, targetOrder: 5, interactionOnly: true },
      { source: 'gross_revenue', target: 'revenue', value: 11.1, sourceWidth: 279, targetWidth: 279, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.3, sourceWidth: 7, targetWidth: 4, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 7.0, sourceWidth: 174, targetWidth: 174, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.2, sourceWidth: 104, targetWidth: 104, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.7, sourceWidth: 92, targetWidth: 91, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.3, sourceWidth: 82, targetWidth: 81, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.8, sourceWidth: 68, targetWidth: 68, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 19, targetWidth: 17, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 4, targetWidth: 3, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.6, sourceWidth: 13, targetWidth: 14, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 3.2, sourceWidth: 79, targetWidth: 80, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 2, targetWidth: 3, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: { zh: {
      name: 'Coca-Cola · 2025 财年第一季度',
      meta: { title: '可口可乐 2025 财年第一季度利润表', period: '2025 财年第一季度', periodNote: '截至 2025 年 3 月', titleTextLength: 2100 },
      nodes: {
        emea: { label: 'EMEA', notes: ['同比 +1%'] }, latam: { label: 'LATAM', notes: ['同比 (3%)'] },
        ucan: { label: 'UCAN', notes: ['同比 +3%'] }, apac: { label: 'APAC', notes: ['同比 (4%)'] },
        bottling_investments: { label: '装瓶投资业务', notes: ['同比 (19%)'] }, other_revenue: { label: '其他' },
        revenue: { label: '收入', notes: ['同比 (2%)'] }, eliminations: { label: '抵销' },
        gross_profit: { label: '毛利润', notes: ['利润率 63%', '同比 +0 个百分点'] }, cost_of_revenue: { label: '收入成本' },
        operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 +14 个百分点'] }, operating_expenses: { label: '营业费用' },
        other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 30%', '同比 +2 个百分点'] },
        tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售及管理费用', notes: ['占收入 29%', '同比 (1 个百分点)'] },
        other_opex: { label: '其他', notes: ['占收入 1%', '同比 (13 个百分点)'] },
      },
      layout: { labels: labels(true) },
    } },
  });
})();
