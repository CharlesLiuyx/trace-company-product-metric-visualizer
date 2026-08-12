/* PepsiCo Q3 FY25 fixed-layout income statement, measured from the native
 * 2667x1500 Source. Validated PepsiCo raster annotations are reused. */
(function () {
  'use strict';

  const NAVY = '#2a4790';
  const NAVY_LINK = '#98a5c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const OTHER_GUIDE = '#5f965f';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2514;

  const line = (text, size, options = {}) => ({ text, size, weight: 400, ...options });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: 'middle', lineGap: 12, lines, ...options });

  function labels(zh = false) {
    const t = zh ? {
      foods: '食品', beverages: ['百事', '饮料'], northAmerica: '北美', ib: ['国际饮料', '特许经营'],
      latam: '拉丁美洲', emea: ['欧洲中东', '非洲'], apac: '亚太', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], operating: '营业利润', operatingExpenses: ['运营', '费用'], net: '净利润',
      tax: '税费', interest: '利息', sga: '销售及行政费用', impairment: '减值',
      yoy: (value) => `同比 ${value}`, margin: (value) => `利润率 ${value}`,
      pp: (value) => `同比 ${value.replace('pp', '')} 个百分点`,
    } : {
      foods: 'Foods', beverages: ['PepsiCo', 'Beverages'], northAmerica: 'North America', ib: ['IB franchise'],
      latam: 'LATAM', emea: ['EMEA'], apac: 'APAC', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
      net: 'Net profit', tax: 'Tax', interest: 'Interest', sga: 'SG&A', impairment: 'Impairment',
      yoy: (value) => `${value} Y/Y`, margin: (value) => `${value} margin`, pp: (value) => `${value} Y/Y`,
    };
    const valueAndYoy = (x, top, yoy) => block(x, top, [
      line('$value', 40), line(t.yoy(yoy), 29, { color: NOTE }),
    ], { lineGap: 13 });
    const nameBlock = (x, top, names, size = 40, lineGap = 8, semanticRole = '') => block(
      x, top, (Array.isArray(names) ? names : [names]).map((name) => line(name, size, { weight: 800 })),
      { lineGap, ...(semanticRole ? { semanticRole } : {}) }
    );
    const profitBlock = (x, top, name, margin, pp) => block(x, top, [
      line(name, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }),
      line(t.margin(margin), 29, { color: NOTE }), line(t.pp(pp), 29, { color: NOTE }),
    ]);
    const rightCost = (top, name, size = 34, xOffset = 0) => ({ blocks: [block(RIGHT_LABEL_X + xOffset, top, [
      line(name, size, { weight: 800, color: RED_LABEL }), line('$value', size, { color: RED_LABEL }),
    ], { lineGap: 8 })] });
    return {
      foods: { blocks: [valueAndYoy(491, 340, '(0%)'), nameBlock(365, 453, t.foods)] },
      pepsico_beverages: { blocks: [
        valueAndYoy(491, 628, '+2%'),
        nameBlock(316, 734, t.beverages, 40, 8, 'reference-offset-side-label'),
      ] },
      north_america: { blocks: [block(866, 390, [
        line(t.northAmerica, 40, { weight: 800 }), line('$value', 40), line(t.yoy('+1%'), 29, { color: NOTE }),
      ])] },
      ib_franchise: { blocks: [valueAndYoy(865, 807, '+0%'), nameBlock(699, zh ? 872 : 889, t.ib, zh ? 34 : 40)] },
      latam: { blocks: [valueAndYoy(865, 951, '+2%'), nameBlock(732, 1042, t.latam, zh ? 36 : 40)] },
      emea: { blocks: [valueAndYoy(865, 1105, '+9%'), nameBlock(730, zh ? 1195 : 1208, t.emea, zh ? 32 : 40, 6)] },
      apac: { blocks: [valueAndYoy(864, 1298, '+2%'), nameBlock(733, 1374, t.apac)] },
      revenue: { blocks: [block(1240, 517, [
        line(t.revenue, 40, { weight: 800 }), line('$value', 40), line(t.yoy('+3%'), 29, { color: NOTE }),
      ])] },
      gross_profit: { blocks: [profitBlock(1613, 344, t.gross, '54%', '(2pp)')] },
      cost_of_revenue: { blocks: [block(1613, 1096, [
        ...t.cost.map((name) => line(name, 40, { weight: 800, color: RED_LABEL })), line('$value', 40, { color: RED_LABEL }),
      ])] },
      operating_profit: { blocks: [profitBlock(1987, 253, t.operating, '15%', '(2pp)')] },
      operating_expenses: { blocks: [block(1987, 834, [
        ...t.operatingExpenses.map((name) => line(name, 36, { weight: 800, color: RED_LABEL })),
        line('$value', 36, { color: RED_LABEL }),
      ])] },
      net_profit: { blocks: [profitBlock(RIGHT_LABEL_X, 297, t.net, '11%', '(2pp)')] },
      tax: rightCost(573, t.tax), interest: rightCost(688, t.interest),
      sga: rightCost(866, t.sga, 34, zh ? 2 : 0),
      impairment: rightCost(1100, t.impairment), other_income: { blocks: [] },
    };
  }

  const otherIncomeAnnotation = (zh) => `
    <g class="sankey-interactive-annotation" data-node="other_income"
      data-link-numerator="other_income" data-link-denominator="net_profit"
      data-link-anchor-x="2245" data-link-anchor-y="456"
      data-user-feedback-clearance="other-income-guide-above-label"
      font-family="Noto Sans,Arial,sans-serif" text-anchor="middle" fill="${GREEN_LABEL}">
      <path d="M2195 456H2285C2310 456 2304 386 2325 386"
        fill="none" stroke="${OTHER_GUIDE}" stroke-width="1"/>
      <rect x="2185" y="466" width="145" height="92" fill="#fff" fill-opacity="0"/>
      <text x="2256" y="498" font-size="34" font-weight="800">${zh ? '其他' : 'Other'}</text>
      <text x="2256" y="540" font-size="34">$26M</text>
    </g>`;

  const data = {
    key: 'pepsico-q3-fy25', name: 'PepsiCo · Q3 FY25', company: 'PepsiCo',
    meta: {
      company: 'PepsiCo', title: 'PepsiCo Q3 FY25 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 3,
      referenceImage: { src: 'input/processed/pepsico-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 207, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: otherIncomeAnnotation(false),
    rasterAnnotations: [
      { key: 'pepsico-company-logo', href: 'data/assets/raster-annotations/pepsico/company-logo.png', x: 1000, y: 267, width: 475, height: 76 },
      { key: 'pepsico-foods-lays-quaker', href: 'data/assets/raster-annotations/pepsico/foods-lays-quaker.png', x: 27, y: 426, width: 244, height: 117 },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 51, y: 703, width: 136, height: 137 },
      { key: 'pepsico-ib-sodastream', href: 'data/assets/raster-annotations/pepsico/ib-sodastream.png', x: 486, y: 859, width: 106, height: 168 },
      { key: 'pepsico-revenue-globe', href: 'data/assets/raster-annotations/pepsico/revenue-globe.png', x: 1176, y: 356, width: 116, height: 117 },
      { key: 'pepsico-globe-north-america', href: 'data/assets/raster-annotations/pepsico/globe-north-america.png', x: 806, y: 302, width: 98, height: 98 },
      { key: 'pepsico-globe-latam', href: 'data/assets/raster-annotations/pepsico/globe-latam.png', x: 556, y: 1030, width: 92, height: 92 },
      { key: 'pepsico-globe-emea', href: 'data/assets/raster-annotations/pepsico/globe-emea.png', x: 481, y: 1174, width: 191, height: 99 },
      { key: 'pepsico-globe-apac', href: 'data/assets/raster-annotations/pepsico/globe-apac.png', x: 572, y: 1318, width: 91, height: 91 },
    ],
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.026, valueText: '$26M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    layout: {
      scale: 13.2,
      routes: { other_income: { x: 2195, y: 456, width: 0, height: 1 } },
      nodes: {
        foods: { x: 457, y: 437, width: 71, height: 85 }, pepsico_beverages: { x: 457, y: 725, width: 71, height: 96 },
        north_america: { x: 831, y: 535, width: 70, height: 182 }, ib_franchise: { x: 831, y: 906, width: 70, height: 15 },
        latam: { x: 831, y: 1049, width: 70, height: 34 }, emea: { x: 831, y: 1199, width: 70, height: 64 },
        apac: { x: 831, y: 1392, width: 70, height: 12 }, revenue: { x: 1205, y: 666, width: 70, height: 317 },
        gross_profit: { x: 1578, y: 534, width: 71, height: 168 }, cost_of_revenue: { x: 1578, y: 935, width: 71, height: 146 },
        operating_profit: { x: 1952, y: 442, width: 71, height: 45 }, operating_expenses: { x: 1952, y: 699, width: 71, height: 121 },
        net_profit: { x: 2325, y: 353, width: 71, height: 33 }, tax: { x: 2325, y: 610, width: 71, height: 7 },
        interest: { x: 2325, y: 727, width: 71, height: 2 }, sga: { x: 2325, y: 845, width: 71, height: 120 },
        impairment: { x: 2325, y: 1142, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'foods', col: 0, order: 0, type: 'source', label: 'Foods', value: 6.5, valueText: '$6.5B', notes: ['(0%) Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 1, type: 'source', label: ['PepsiCo', 'Beverages'], value: 7.3, valueText: '$7.3B', notes: ['+2% Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 13.9, valueText: '$13.9B', notes: ['+1% Y/Y'] },
      { id: 'ib_franchise', col: 1, order: 1, type: 'source', label: 'IB franchise', value: 1.3, valueText: '$1.3B', notes: ['+0% Y/Y'] },
      { id: 'latam', col: 1, order: 2, type: 'source', label: 'LATAM', value: 2.7, valueText: '$2.7B', notes: ['+2% Y/Y'] },
      { id: 'emea', col: 1, order: 3, type: 'source', label: 'EMEA', value: 5.0, valueText: '$5.0B', notes: ['+9% Y/Y'] },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.1, valueText: '$1.1B', notes: ['+2% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 23.9, valueText: '$23.9B', notes: ['+3% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 12.8, valueText: '$12.8B', notes: ['54% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 11.1, valueText: '($11.1B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.6, valueText: '$3.6B', notes: ['15% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 9.3, valueText: '($9.3B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.6, valueText: '$2.6B', notes: ['11% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.7, valueText: '($0.7B)' },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.3, valueText: '($0.3B)' },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 9.1, valueText: '($9.1B)' },
      { id: 'impairment', col: 5, order: 4, type: 'cost', label: 'Impairment', value: 0.1, valueText: '($0.1B)', color: RED_LINK },
    ],
    links: [
      { source: 'foods', target: 'north_america', value: 6.5, sourceWidth: 85, targetWidth: 86, sourceOrder: 0, targetOrder: 0 },
      { source: 'pepsico_beverages', target: 'north_america', value: 7.3, sourceWidth: 96, targetWidth: 96, sourceOrder: 0, targetOrder: 1 },
      { source: 'north_america', target: 'revenue', value: 13.9, sourceWidth: 182, targetWidth: 184, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'ib_franchise', target: 'revenue', value: 1.3, width: 15, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'latam', target: 'revenue', value: 2.7, width: 34, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'emea', target: 'revenue', value: 5.0, sourceWidth: 64, targetWidth: 70, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'apac', target: 'revenue', value: 1.1, sourceWidth: 12, targetWidth: 14, sourceOrder: 0, targetOrder: 4, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.8, sourceWidth: 171, targetWidth: 168, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 11.1, width: 146, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.6, sourceWidth: 46, targetWidth: 45, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 9.3, sourceWidth: 121, targetWidth: 121, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.6, sourceWidth: 35, targetWidth: 32, sourceOrder: 0, targetOrder: 0 },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.026, sourceWidth: 1, targetWidth: 1,
        y0: 456, y1: 385.5, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK,
        curve: { x0: 2195, x1: 2325, c1x: 2285, c1y: 456, c2x: 2304, c2y: 386 } },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 8, targetWidth: 7, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 2, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 9.1, sourceWidth: 119, targetWidth: 120, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'impairment', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: { zh: {
      name: '百事公司 · 2025 财年第三季度',
      meta: { title: '百事公司 2025 财年第三季度利润表', period: '', periodNote: '', titleTextLength: 2000 },
      annotationsSvg: otherIncomeAnnotation(true), nonNodeMetrics: { other_income: { label: '其他' } },
      nodes: {
        foods: { label: '食品', notes: ['同比 (0%)'] }, pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 +2%'] },
        north_america: { label: '北美', notes: ['同比 +1%'] }, ib_franchise: { label: '国际饮料特许经营', notes: ['同比 +0%'] },
        latam: { label: '拉丁美洲', notes: ['同比 +2%'] }, emea: { label: '欧洲中东非洲', notes: ['同比 +9%'] },
        apac: { label: '亚太', notes: ['同比 +2%'] }, revenue: { label: '收入', notes: ['同比 +3%'] },
        gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 (2 个百分点)'] }, cost_of_revenue: { label: ['收入', '成本'] },
        operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 (2 个百分点)'] }, operating_expenses: { label: '运营费用' },
        net_profit: { label: '净利润', notes: ['利润率 11%', '同比 (2 个百分点)'] }, tax: { label: '税费' },
        interest: { label: '利息' }, sga: { label: '销售及行政费用' }, impairment: { label: '减值' },
      },
      layout: { labels: labels(true) },
    } },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(data);
})();
