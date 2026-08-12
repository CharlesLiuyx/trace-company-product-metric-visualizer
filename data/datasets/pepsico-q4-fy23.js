/* PepsiCo Q4 FY23 fixed-layout income statement. Geometry, labels, and flow
 * order are measured from input/processed/pepsico-q4-fy23.png. */
(function () {
  'use strict';

  const NAVY = '#2a4790';
  const NAVY_LINK = '#98a5c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2482;

  const line = (text, size, options = {}) => ({
    text, size, weight: options.weight ?? 400, color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap ?? 8, lines,
  });

  const labels = (zh) => {
    const t = zh ? {
      frito: '菲多利', quaker: ['桂格', '食品'], beverages: ['百事', '饮料'], northAmerica: '北美',
      latam: '拉丁美洲', europe: '欧洲', amesa: '非洲、中东及南亚', apac: '亚太', revenue: '收入',
      gross: '毛利润', cost: ['收入', '成本'], operatingProfit: '营业利润', operatingExpenses: ['营业', '费用'],
      net: '净利润', tax: '税费', interest: '利息', sga: ['销售、一般及', '行政费用'], other: '其他',
      y3n: '同比 (3%)', y16n: '同比 (16%)', y2n: '同比 (2%)', y4n: '同比 (4%)', y1n: '同比 (1%)',
      y18: '同比 +18%', y1: '同比 +1%', margin53: '利润率 53%', pp1: '同比 +1 个百分点',
      margin6: '利润率 6%', pp3: '同比 +3 个百分点', margin5: '利润率 5%', share44: '占收入 44%',
    } : {
      frito: 'Frito-Lay', quaker: ['Quaker', 'Foods'], beverages: ['PepsiCo', 'Beverages'], northAmerica: 'North America',
      latam: 'LATAM', europe: 'Europe', amesa: 'Africa, Middle East & South Asia', apac: 'APAC', revenue: 'Revenue',
      gross: 'Gross profit', cost: ['Cost of', 'revenue'], operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
      net: 'Net profit', tax: 'Tax', interest: 'Interest', sga: 'SG&A', other: 'Other',
      y3n: '(3%) Y/Y', y16n: '(16%) Y/Y', y2n: '(2%) Y/Y', y4n: '(4%) Y/Y', y1n: '(1%) Y/Y',
      y18: '+18% Y/Y', y1: '+1% Y/Y', margin53: '53% margin', pp1: '+1pp Y/Y',
      margin6: '6% margin', pp3: '+3pp Y/Y', margin5: '5% margin', share44: '44% of revenue',
    };
    const amount = (x, top, yoy) => block(x, top, [line('$value', 40), line(yoy, 29, { color: NOTE })], { lineGap: 12 });
    const side = (x, top, names, size = 40, lineGap = 8) => block(x, top, [].concat(names).map((text) => line(text, size, { weight: 800 })), { lineGap });
    const right = (top, name, extra = []) => block(RIGHT_LABEL_X, top, [
      ...[].concat(name).map((text) => line(text, 34, { weight: 800, color: RED_LABEL })),
      line('$value', 34, { color: RED_LABEL }),
      ...extra.map((text) => line(text, 29, { color: NOTE })),
    ], { lineGap: 8 });

    return {
      frito_lay: { blocks: [amount(457, 309, t.y3n), side(308, 432, t.frito)] },
      quaker_foods: { blocks: [amount(464, 553, t.y16n), side(300, 602, t.quaker, 40, 16)] },
      pepsico_beverages: { blocks: [amount(454, 697, t.y2n), side(292, 797, t.beverages)] },
      north_america: { blocks: [block(837, 380, [line(t.northAmerica, 40, { weight: 800 }), line('$value', 40), line(t.y4n, 29, { color: NOTE })], { lineGap: 12 })] },
      latam: { blocks: [amount(837, 801, t.y18), side(zh ? 710 : 697, 907, t.latam)] },
      europe: { blocks: [amount(837, 925, t.y1n), side(700, 1064, t.europe)] },
      amesa: { blocks: [amount(837, 1086, t.y4n), side(420, 1204, t.amesa, zh ? 32 : 37)] },
      apac: { blocks: [amount(835, 1220, t.y2n), side(707, 1321, t.apac)] },
      revenue: { blocks: [block(1211, 577, [line(t.revenue, 40, { weight: 800 }), line('$value', 40), line(t.y1, 29, { color: NOTE })], { lineGap: 12 })] },
      gross_profit: { blocks: [block(1587, 403, [line(t.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line(t.margin53, 29, { color: NOTE }), line(t.pp1, 29, { color: NOTE })], { lineGap: 12 })] },
      cost_of_revenue: { blocks: [block(1585, 1189, [...t.cost.map((text) => line(text, 40, { weight: 800, color: RED_LABEL })), line('$value', 40, { color: RED_LABEL })], { lineGap: 10 })] },
      operating_profit: { blocks: [block(1953, 319, [line(t.operatingProfit, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line(t.margin6, 29, { color: NOTE }), line(t.pp3, 29, { color: NOTE })], { lineGap: 12 })] },
      operating_expenses: { blocks: [block(1953, 878, [...t.operatingExpenses.map((text) => line(text, 37, { weight: 800, color: RED_LABEL })), line('$value', 37, { color: RED_LABEL })], { lineGap: 10 })] },
      net_profit: { blocks: [block(RIGHT_LABEL_X, 366, [line(t.net, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line(t.margin5, 29, { color: NOTE }), line(t.pp3, 29, { color: NOTE })], { lineGap: 12 })] },
      tax: { blocks: [block(RIGHT_LABEL_X + 10, 556, [line(t.tax, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
      interest: { blocks: [right(647, t.interest)] },
      sga: { blocks: [right(820, t.sga, [t.share44])] },
      other_expense: { blocks: [block(RIGHT_LABEL_X + 10, 1090, [line(t.other, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
      other_income: { blocks: [] },
    };
  };

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g class="sankey-interactive-annotation" data-node="other_income"
        data-link-numerator="other_income" data-link-denominator="net_profit"
        data-link-anchor-x="2218" data-link-anchor-y="477">
        <path d="M2174 477H2245C2270 477 2264 416 2296 416" fill="none"
          stroke="${GREEN_LINK}" stroke-width="2"/>
        <text x="2205" y="515" text-anchor="middle" font-size="31" font-weight="800"
          fill="${GREEN_LABEL}">${zh ? '其他收入' : 'Other'}</text>
        <text x="2205" y="555" text-anchor="middle" font-size="30"
          fill="${GREEN_LABEL}">$0.1B</text>
        <rect x="2145" y="405" width="180" height="160" fill="transparent" pointer-events="all"/>
      </g>
    </g>`;

  const data = {
    key: 'pepsico-q4-fy23',
    name: 'PepsiCo · Q4 FY23',
    company: 'PepsiCo',
    meta: {
      company: 'PepsiCo', title: 'PepsiCo Q4 FY23 Income Statement', period: 'Q4 FY23', periodNote: 'Ending Dec. 2023',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 207, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: BG, allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'pepsico-company-logo', href: 'data/assets/raster-annotations/pepsico/company-logo.png', x: 975, y: 267, width: 475, height: 76 },
      { key: 'pepsico-frito-lay-q4-fy23', href: 'data/assets/raster-annotations/pepsico/frito-lay-q4-fy23.png', x: 12, y: 377, width: 148, height: 139, pairedNode: 'frito_lay', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'pepsico-quaker-q4-fy23', href: 'data/assets/raster-annotations/pepsico/quaker-q4-fy23.png', x: 11, y: 578, width: 139, height: 124, pairedNode: 'quaker_foods' },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 7, y: 765, width: 142, height: 143, pairedNode: 'pepsico_beverages', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'pepsico-globe-north-america', href: 'data/assets/raster-annotations/pepsico/globe-north-america.png', x: 779, y: 269, width: 98, height: 98 },
      { key: 'pepsico-revenue-globe', href: 'data/assets/raster-annotations/pepsico/revenue-globe.png', x: 1146, y: 363, width: 116, height: 117 },
      { key: 'pepsico-globe-latam', href: 'data/assets/raster-annotations/pepsico/globe-latam.png', x: 515, y: 862, width: 110, height: 113, pairedNode: 'latam' },
      { key: 'pepsico-globe-europe-q4-fy23', href: 'data/assets/raster-annotations/pepsico/globe-europe-q4-fy23.png', x: 525, y: 1024.5, width: 93, height: 93, pairedNode: 'europe' },
      { key: 'pepsico-globe-amesa-q4-fy23', href: 'data/assets/raster-annotations/pepsico/globe-amesa-q4-fy23.png', x: 50, y: 1169, width: 83, height: 82, pairedNode: 'amesa' },
      { key: 'pepsico-globe-apac', href: 'data/assets/raster-annotations/pepsico/globe-apac.png', x: 547, y: 1288, width: 91, height: 91, pairedNode: 'apac', pairedTarget: 'label', pairedSide: 'left' },
    ],
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.1, valueText: '$0.1B', type: 'profit', labelColor: GREEN_LABEL },
    ],
    layout: {
      scale: 12.35,
      routes: { other_income: { x: 2174, y: 477, width: 0, height: 1 } },
      nodes: {
        frito_lay: { x: 428, y: 400, width: 71, height: 90 }, quaker_foods: { x: 428, y: 636, width: 71, height: 9 },
        pepsico_beverages: { x: 428, y: 783, width: 71, height: 97 }, north_america: { x: 802, y: 541, width: 70, height: 200 },
        latam: { x: 802, y: 895, width: 70, height: 47 }, europe: { x: 804, y: 1050, width: 70, height: 50 },
        amesa: { x: 799, y: 1202, width: 70, height: 21 }, apac: { x: 799, y: 1332, width: 70, height: 15 },
        revenue: { x: 1176, y: 719, width: 70, height: 345 }, gross_profit: { x: 1552, y: 596, width: 70, height: 182 },
        cost_of_revenue: { x: 1550, y: 1003, width: 70, height: 161 }, operating_profit: { x: 1918, y: 499, width: 70, height: 19 },
        operating_expenses: { x: 1918, y: 686, width: 71, height: 161 }, net_profit: { x: 2296, y: 401, width: 71, height: 15 },
        tax: { x: 2296, y: 592, width: 71, height: 1 }, interest: { x: 2296, y: 676, width: 71, height: 2 },
        sga: { x: 2296, y: 800, width: 71, height: 149 }, other_expense: { x: 2296, y: 1109, width: 71, height: 10 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'frito_lay', col: 0, order: 0, type: 'source', label: 'Frito-Lay', value: 7.5, notes: ['(3%) Y/Y'] },
      { id: 'quaker_foods', col: 0, order: 1, type: 'source', label: ['Quaker', 'Foods'], value: 0.9, notes: ['(16%) Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 2, type: 'source', label: ['PepsiCo', 'Beverages'], value: 7.9, notes: ['(2%) Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 16.3, notes: ['(4%) Y/Y'] },
      { id: 'latam', col: 1, order: 1, type: 'source', label: 'LATAM', value: 4.0, valueText: '$4.0B', notes: ['+18% Y/Y'] },
      { id: 'europe', col: 1, order: 2, type: 'source', label: 'Europe', value: 4.2, notes: ['(1%) Y/Y'] },
      { id: 'amesa', col: 1, order: 3, type: 'source', label: 'Africa, Middle East & South Asia', value: 1.9, notes: ['(4%) Y/Y'] },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.5, notes: ['(2%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 27.9, notes: ['+1% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 14.8, notes: ['53% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 13.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.7, notes: ['6% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 13.1 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.3, notes: ['5% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.2 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 12.1, notes: ['44% of revenue'] },
      { id: 'other_expense', col: 5, order: 4, type: 'cost', label: 'Other', value: 0.9 },
    ],
    links: [
      { source: 'frito_lay', target: 'north_america', value: 7.5, sourceWidth: 90, targetWidth: 92, sourceOrder: 0, targetOrder: 0 },
      { source: 'quaker_foods', target: 'north_america', value: 0.9, sourceWidth: 9, targetWidth: 10, sourceOrder: 0, targetOrder: 1 },
      { source: 'pepsico_beverages', target: 'north_america', value: 7.9, sourceWidth: 97, targetWidth: 98, sourceOrder: 0, targetOrder: 2 },
      { source: 'north_america', target: 'revenue', value: 16.3, sourceWidth: 200, targetWidth: 202, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'revenue', value: 4.0, sourceWidth: 47, targetWidth: 49, sourceOrder: 0, targetOrder: 1 },
      { source: 'europe', target: 'revenue', value: 4.2, sourceWidth: 50, targetWidth: 52, sourceOrder: 0, targetOrder: 2 },
      { source: 'amesa', target: 'revenue', value: 1.9, sourceWidth: 21, targetWidth: 24, sourceOrder: 0, targetOrder: 3 },
      { source: 'apac', target: 'revenue', value: 1.5, sourceWidth: 15, targetWidth: 18, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 14.8, sourceWidth: 183, targetWidth: 182, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 13.1, sourceWidth: 161, targetWidth: 161, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.7, sourceWidth: 19, targetWidth: 19, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 13.1, sourceWidth: 163, targetWidth: 161, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 13, targetWidth: 14, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 477, y1: 415.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK, curve: { x0: 2174, c1x: 2245, c1y: 477, c2x: 2264, c2y: 416 } },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 3, targetWidth: 1, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 3, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 12.1, sourceWidth: 151, targetWidth: 149, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_expense', value: 0.9, sourceWidth: 10, targetWidth: 10, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '百事公司 · 2023 财年第四季度',
        meta: { title: '百事公司 2023 财年第四季度利润表', period: '2023 财年第四季度', periodNote: '截至 2023 年 12 月', titleTextLength: 2000 },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { other_income: { label: '其他收入' } },
        nodes: {
          frito_lay: { label: '菲多利', notes: ['同比 (3%)'] }, quaker_foods: { label: ['桂格', '食品'], notes: ['同比 (16%)'] },
          pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 (2%)'] }, north_america: { label: '北美', notes: ['同比 (4%)'] },
          latam: { label: '拉丁美洲', notes: ['同比 +18%'] }, europe: { label: '欧洲', notes: ['同比 (1%)'] },
          amesa: { label: '非洲、中东及南亚', notes: ['同比 (4%)'] }, apac: { label: '亚太', notes: ['同比 (2%)'] },
          revenue: { label: '收入', notes: ['同比 +1%'] }, gross_profit: { label: '毛利润', notes: ['利润率 53%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 +3 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +3 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售、一般及行政费用', notes: ['占收入 44%'] }, other_expense: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  };

  for (const labelSet of [data.layout.labels, data.i18n.zh.layout.labels]) {
    for (const label of Object.values(labelSet)) {
      for (const labelBlock of label.blocks) labelBlock.top -= 10;
    }
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(data);
})();
