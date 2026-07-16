/* ====================================================================
 * Duolingo - Q3 FY25 income statement ($M)
 * Reconstructed from input/processed/duolingo-q3-fy25.png as a fixed
 * d3-sankey layout with reused, validated Duolingo raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const DUO = '#58cc02';
  const CARD = '#57cc02';
  const DUO_LINK = '#ade086';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const SCALE = 1.1;

  const h = (value) => Math.round(value * SCALE * 10) / 10;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: 'middle', lineGap: 8, lines, ...options });

  const copyEn = {
    subscription: 'Subscription', other: 'Other', advertising: 'Advertising', englishTest: 'English Test',
    inApp: 'In-app Purchase', revenue: 'Revenue', grossA: 'Gross', grossB: 'profit', costA: 'Cost of',
    costB: 'revenue', operatingA: 'Operating', operatingB: 'profit', expensesA: 'Operating',
    expensesB: 'expenses', taxBenefit: 'Tax benefit', interest: 'Interest', netA: 'Net', netB: 'profit',
    rnd: 'R&D', ga: 'G&A', sm: 'S&M', yoy: 'Y/Y', margin: 'margin', ofRevenue: 'of revenue',
  };
  const copyZh = {
    subscription: '订阅', other: '其他', advertising: '广告', englishTest: '英语测试',
    inApp: '应用内购买', revenue: '收入', grossA: '毛', grossB: '利润', costA: '收入',
    costB: '成本', operatingA: '营业', operatingB: '利润', expensesA: '运营',
    expensesB: '费用', taxBenefit: '税收收益', interest: '利息', netA: '净', netB: '利润',
    rnd: '研发', ga: '管理费用', sm: '销售与营销', yoy: '同比', margin: '利润率', ofRevenue: '占收入',
  };

  function labels(copy, zh = false) {
    const yoy = (value) => (zh ? `${copy.yoy} ${value}` : `${value} ${copy.yoy}`);
    const share = (value) => (zh ? `${copy.ofRevenue} ${value}` : `${value} ${copy.ofRevenue}`);
    return {
      subscription: { blocks: [
        block(463, 561, [line('$value', 40), line(yoy('+46%'), 29, 400, NOTE)]),
        block(277, 838, [line(copy.subscription, 40, 800, DUO)]),
      ] },
      other_revenue: { blocks: [
        block(464, 973, [line('$value', 40), line(yoy('+21%'), 29, 400, NOTE)]),
        block(145, 1038, [line(copy.advertising, 28, 400, NOTE), line(copy.englishTest, 28, 400, NOTE), line(copy.inApp, 28, 400, NOTE)], { lineGap: 10 }),
        block(333, 1075, [line(copy.other, 40, 800)]),
      ] },
      revenue: { blocks: [block(927, 632, [line(copy.revenue, 40, 800), line('$value', 40), line(yoy('+41%'), 29, 400, NOTE)])] },
      gross_profit: { blocks: [block(1399, 450, [
        line(copy.grossA, 40, 800), line(copy.grossB, 40, 800), line('$value', 40),
        line(zh ? `${copy.margin} 72%` : `72% ${copy.margin}`, 29, 400, NOTE), line(yoy('(0pp)'), 29, 400, NOTE),
      ])] },
      cost_of_revenue: { blocks: [
        block(1394, 1141, [line(copy.costA, 34, 800)]),
        block(1394, 1196, [line(copy.costB, 34, 800)]),
        block(1394, 1236, [line('$value', 34)]),
      ] },
      operating_profit: { blocks: [block(1867, 385, [
        line(copy.operatingA, 40, 800), line(copy.operatingB, 40, 800), line('$value', 40),
        line(zh ? `${copy.margin} 13%` : `13% ${copy.margin}`, 29, 400, NOTE), line(yoy('+6pp'), 29, 400, NOTE),
      ])] },
      operating_expenses: { blocks: [block(1864, 1002, [
        line(copy.expensesA, 40, 800), line(copy.expensesB, 40, 800), line('$value', 40),
      ])] },
      tax_benefit: { blocks: [block(2156, 207, [line(copy.taxBenefit, 31, 800), line('$value', 31)])] },
      interest: { blocks: [block(2219, 689, [line(copy.interest, 31, 800), line('$value', 31)])] },
      net_profit: { blocks: [block(2504, 378, [line(copy.netA, 40, 800), line(copy.netB, 40, 800), line('$value', 40)])] },
      rnd: { blocks: [block(2500, 854, [
        line(copy.rnd, 31, 800), line('$value', 31), line(share('30%'), 29, 400, NOTE), line(yoy('(2pp)'), 29, 400, NOTE),
      ])] },
      ga: { blocks: [block(2505, 1032, [
        line(copy.ga, 31, 800), line('$value', 31), line(share('16%'), 29, 400, NOTE), line(yoy('(4pp)'), 29, 400, NOTE),
      ])] },
      sm: { blocks: [block(2499, 1221, [
        line(copy.sm, 31, 800), line('$value', 31), line(share('13%'), 29, 400, NOTE), line(yoy('(0pp)'), 29, 400, NOTE),
      ])] },
    };
  }

  const kpiCard = (x, width, rows) => `<g><rect x="${x}" y="1196" width="${width}" height="148" rx="24" fill="${CARD}"/>${rows.map((row) => `<text x="${x + width / 2}" y="${1196 + row.y}" text-anchor="middle" font-size="${row.size}" font-weight="${row.weight || 500}" fill="#f2f2f2">${row.text}</text>`).join('')}</g>`;
  const annotations = (zh = false) => `<g font-family="Montserrat,Arial,sans-serif">
    ${kpiCard(33, 209, [{ text: 'DAU', y: 51, size: 26, weight: 800 }, { text: zh ? '5100万' : '51M', y: 91, size: 26 }, { text: zh ? '同比 +36%' : '+36% Y/Y', y: 125, size: 20 }])}
    ${kpiCard(256, 208, [{ text: 'MAU', y: 51, size: 26, weight: 800 }, { text: zh ? '1.35亿' : '135M', y: 91, size: 26 }, { text: zh ? '同比 +20%' : '+20% Y/Y', y: 125, size: 20 }])}
    ${kpiCard(479, 352, [{ text: zh ? '付费订阅用户' : 'Paid subscribers', y: 51, size: 26, weight: 800 }, { text: '11.5M', y: 91, size: 26 }, { text: zh ? '同比 +34%' : '+34% Y/Y', y: 125, size: 20 }])}
    ${kpiCard(845, 209, [{ text: zh ? '预订额' : 'Bookings', y: 51, size: 26, weight: 800 }, { text: '$282M', y: 91, size: 26 }, { text: zh ? '同比 +33%' : '+33% Y/Y', y: 125, size: 20 }])}
  </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'duolingo-q3-fy25',
    name: 'Duolingo · Q3 FY25',
    company: 'Duolingo',
    meta: {
      company: 'Duolingo', title: 'Duolingo Q3 FY25 Income Statement', period: 'Q3 FY25', periodNote: 'Ending Sep. 2025',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/duolingo-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1335, titleY: 203, titleSize: 128, titleWeight: 800, titleTextLength: 2272,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/duolingo/company-wordmark.png', x: 629, y: 297, width: 595, height: 158 },
      { key: 'subscription-mascot', href: 'data/assets/raster-annotations/duolingo/subscription-mascot.png', x: 176, y: 664, width: 204, height: 170 },
    ],
    layout: {
      scale: SCALE,
      nodes: {
        subscription: { x: 424, y: 664, width: 72, height: h(230) },
        other_revenue: { x: 424, y: 1069, width: 72, height: h(42) },
        revenue: { x: 891, y: 768, width: 72, height: h(272) },
        gross_profit: { x: 1358, y: 692, width: 72, height: h(197) },
        cost_of_revenue: { x: 1358, y: 1042, width: 72, height: h(75) },
        operating_profit: { x: 1826, y: 626, width: 72, height: h(35) },
        operating_expenses: { x: 1826, y: 811, width: 72, height: h(162) },
        tax_benefit: { x: 2128, y: 294, width: 72, height: h(245) },
        interest: { x: 2176, y: 664, width: 72, height: h(12) },
        net_profit: { x: 2292, y: 309, width: 72, height: h(292) },
        rnd: { x: 2292, y: 845, width: 72, height: h(83) },
        ga: { x: 2292, y: 1061, width: 72, height: h(44) },
        sm: { x: 2292, y: 1233, width: 72, height: h(35) },
      },
      labels: labels(copyEn),
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 230, valueText: '$230M', notes: ['+46% Y/Y'], color: DUO, labelColor: DUO, linkTint: DUO_LINK },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 42, valueText: '$42M', notes: ['+21% Y/Y', 'Advertising', 'English Test', 'In-app Purchase'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 272, valueText: '$272M', notes: ['+41% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 197, valueText: '$197M', notes: ['72% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 75, valueText: '($75M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 35, valueText: '$35M', notes: ['13% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 162, valueText: '($162M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 4, order: 0, type: 'profit', label: 'Tax benefit', value: 245, valueText: '$245M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 1, type: 'profit', label: 'Interest', value: 12, valueText: '$12M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 292, valueText: '$292M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 83, valueText: '($83M)', notes: ['30% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 44, valueText: '($44M)', notes: ['16% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 35, valueText: '($35M)', notes: ['13% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 230, width: h(230), sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'revenue', value: 42, width: h(42), sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 197, width: h(197), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 75, width: h(75), sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 35, width: h(35), sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 162, width: h(162), sourceOrder: 1, targetOrder: 0 },
      { source: 'tax_benefit', target: 'net_profit', value: 245, width: h(245), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 35, width: h(35), sourceOrder: 0, targetOrder: 1 },
      { source: 'interest', target: 'net_profit', value: 12, width: h(12), sourceOrder: 0, targetOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 83, width: h(83), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 44, width: h(44), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 35, width: h(35), sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Duolingo · 2025 财年第三季度',
        meta: { title: 'Duolingo 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月', titleSize: 112, titleTextLength: 1680 },
        annotationsSvg: annotations(true),
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +46%'] }, other_revenue: { label: '其他', notes: ['同比 +21%', '广告', '英语测试', '应用内购买'] },
          revenue: { label: '收入', notes: ['同比 +41%'] }, gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 13%', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' }, tax_benefit: { label: '税收收益' }, interest: { label: '利息' }, net_profit: { label: '净利润' },
          rnd: { label: '研发', notes: ['占收入 30%', '同比 (2 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 16%', '同比 (4 个百分点)'] },
          sm: { label: '销售与营销', notes: ['占收入 13%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labels(copyZh, true) },
      },
    },
  });
})();
