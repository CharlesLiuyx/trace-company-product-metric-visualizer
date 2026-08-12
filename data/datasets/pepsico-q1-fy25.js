/* PepsiCo · Q1 FY25 income statement ($B), reconstructed from the fixed
 * Source layout at input/processed/pepsico-q1-fy25.png. */
(function () {
  const NAVY = '#2a4790';
  const NAVY_LINK = '#98a5c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const PALE_GREEN = '#cadaCa';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2514;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, lineGap = 12) => ({ x, top, anchor: 'middle', lineGap, lines });

  function labels(zh) {
    return {
      foods: { blocks: [
        block(491, 335, [line('$value', 40), line(zh ? '同比 (1%)' : '(1%) Y/Y', 29, 400, NOTE)], 13),
        block(365, 456, [line(zh ? '食品' : 'Foods', 40, 800)]),
      ] },
      pepsico_beverages: { blocks: [
        block(491, 611.5, [line('$value', 40), line(zh ? '同比 +0%' : '+0% Y/Y', 29, 400, NOTE)], 13),
        block(316, 737.5, [line(zh ? '百事' : 'PepsiCo', 40, 800), line(zh ? '饮料' : 'Beverages', 40, 800)], 8),
      ] },
      north_america: { blocks: [block(866, 373, [
        line(zh ? '北美' : 'North America', 40, 800), line('$value', 40),
        line(zh ? '同比 (0%)' : '(0%) Y/Y', 29, 400, NOTE),
      ])] },
      ib_franchise: { blocks: [
        block(866, 791, [line('$value', 40), line(zh ? '同比 +3%' : '+3% Y/Y', 29, 400, NOTE)], 13),
        block(699, zh ? 863.5 : 881, zh
          ? [line('国际饮料', 34, 800), line('特许经营', 34, 800)]
          : [line('IB franchise', 40, 800)], 8),
      ] },
      latam: { blocks: [
        block(866, 952, [line('$value', 40), line(zh ? '同比 (12%)' : '(12%) Y/Y', 29, 400, NOTE)], 13),
        block(732, 1048, [line(zh ? '拉丁美洲' : 'LATAM', zh ? 36 : 40, 800)]),
      ] },
      emea: { blocks: [
        block(866, 1133, [line('$value', 40), line(zh ? '同比 (2%)' : '(2%) Y/Y', 29, 400, NOTE)], 13),
        block(730, zh ? 1212 : 1223, zh
          ? [line('欧洲中东', 32, 800), line('非洲', 32, 800)]
          : [line('EMEA', 40, 800)], 6),
      ] },
      apac: { blocks: [
        block(866, 1278, [line('$value', 40), line(zh ? '同比 (2%)' : '(2%) Y/Y', 29, 400, NOTE)], 13),
        block(733, 1341, [line(zh ? '亚太' : 'APAC', 40, 800)]),
      ] },
      revenue: { blocks: [block(1240, 492.5, [
        line(zh ? '收入' : 'Revenue', 40, 800), line('$value', 40),
        line(zh ? '同比 (2%)' : '(2%) Y/Y', 29, 400, NOTE),
      ])] },
      gross_profit: { blocks: [block(1613, 352, [
        line(zh ? '毛利润' : 'Gross profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(zh ? '利润率 56%' : '56% margin', 29, 400, NOTE),
        line(zh ? '同比 +1 个百分点' : '+1pp Y/Y', 29, 400, NOTE),
      ])] },
      cost_of_revenue: { blocks: [block(1613, 1110, [
        line(zh ? '收入' : 'Cost of', 40, 800, RED_LABEL),
        line(zh ? '成本' : 'revenue', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL),
      ])] },
      operating_profit: { blocks: [block(1987, 252, [
        line(zh ? '营业利润' : 'Operating profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(zh ? '利润率 14%' : '14% margin', 29, 400, NOTE),
        line(zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', 29, 400, NOTE),
      ])] },
      operating_expenses: { blocks: [block(1987, 837, [
        line(zh ? '运营费用' : 'Operating', 36, 800, RED_LABEL),
        ...(zh ? [] : [line('expenses', 36, 800, RED_LABEL)]),
        line('$value', 36, 400, RED_LABEL),
      ])] },
      other_income: { blocks: [block(2250, 449.5, [
        line(zh ? '其他' : 'Other', 34, 800, GREEN_LABEL), line('$value', 34, 400, GREEN_LABEL),
      ], 8)] },
      net_profit: { blocks: [block(RIGHT_LABEL_X, 297, [
        line(zh ? '净利润' : 'Net profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(zh ? '利润率 10%' : '10% margin', 29, 400, NOTE),
        line(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 29, 400, NOTE),
      ])] },
      tax: { blocks: [block(RIGHT_LABEL_X, 572, [
        line(zh ? '税费' : 'Tax', 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL),
      ], 8)] },
      interest: { blocks: [block(RIGHT_LABEL_X, 712, [
        line(zh ? '利息' : 'Interest', 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL),
      ], 8)] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'pepsico-q1-fy25',
    name: 'PepsiCo · Q1 FY25',
    company: 'PepsiCo',
    meta: {
      company: 'PepsiCo', title: 'PepsiCo Q1 FY25 Income Statement', period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 207, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'pepsico-company-logo', href: 'data/assets/raster-annotations/pepsico/company-logo.png', x: 1000, y: 267, width: 475, height: 76 },
      { key: 'pepsico-foods-lays-quaker', href: 'data/assets/raster-annotations/pepsico/foods-lays-quaker.png', x: 27, y: 426, width: 244, height: 117 },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 51, y: 703, width: 136, height: 137 },
      { key: 'pepsico-ib-sodastream-q2-fy26', href: 'data/assets/raster-annotations/pepsico/ib-sodastream-q2-fy26.png', x: 486, y: 859, width: 78, height: 168 },
      { key: 'pepsico-revenue-globe', href: 'data/assets/raster-annotations/pepsico/revenue-globe.png', x: 1176, y: 356, width: 116, height: 117 },
      { key: 'pepsico-globe-north-america', href: 'data/assets/raster-annotations/pepsico/globe-north-america.png', x: 806, y: 267, width: 98, height: 98 },
      { key: 'pepsico-globe-latam', href: 'data/assets/raster-annotations/pepsico/globe-latam.png', x: 556, y: 1030, width: 92, height: 92 },
      { key: 'pepsico-globe-emea', href: 'data/assets/raster-annotations/pepsico/globe-emea.png', x: 481, y: 1174, width: 191, height: 99 },
      { key: 'pepsico-globe-apac', href: 'data/assets/raster-annotations/pepsico/globe-apac.png', x: 572, y: 1318, width: 91, height: 91 },
    ],
    layout: {
      scale: 15.5,
      nodes: {
        foods: { x: 457, y: 428, width: 71, height: 112 },
        pepsico_beverages: { x: 457, y: 733, width: 71, height: 106 },
        north_america: { x: 831, y: 531, width: 70, height: 222 },
        ib_franchise: { x: 831, y: 899, width: 70, height: 13 },
        latam: { x: 831, y: 1058, width: 70, height: 29 },
        emea: { x: 831, y: 1227, width: 70, height: 41 },
        apac: { x: 831, y: 1393, width: 70, height: 16 },
        revenue: { x: 1205, y: 666, width: 70, height: 331 },
        gross_profit: { x: 1578, y: 538, width: 71, height: 182 },
        cost_of_revenue: { x: 1578, y: 958, width: 71, height: 144 },
        operating_profit: { x: 1950, y: 438, width: 70, height: 46 },
        operating_expenses: { x: 1952, y: 688, width: 71, height: 135 },
        other_income: { x: 2215, y: 438, width: 70, height: 2 },
        net_profit: { x: 2325, y: 349, width: 71, height: 32 },
        tax: { x: 2325, y: 603, width: 71, height: 7 },
        interest: { x: 2325, y: 749, width: 71, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'foods', col: 0, order: 0, type: 'source', label: 'Foods', value: 6.2, notes: ['(1%) Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 1, type: 'source', label: ['PepsiCo', 'Beverages'], value: 5.9, notes: ['+0% Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 12.1, notes: ['(0%) Y/Y'] },
      { id: 'ib_franchise', col: 1, order: 1, type: 'source', label: 'IB franchise', value: 0.8, notes: ['+3% Y/Y'] },
      { id: 'latam', col: 1, order: 2, type: 'source', label: 'LATAM', value: 1.7, notes: ['(12%) Y/Y'] },
      { id: 'emea', col: 1, order: 3, type: 'source', label: 'EMEA', value: 2.4, notes: ['(2%) Y/Y'] },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.0, valueText: '$1.0B', notes: ['(2%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 17.9, notes: ['(2%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 10.0, valueText: '$10.0B', notes: ['56% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.9 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.6, notes: ['14% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 7.4 },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.023, valueText: '$23M', color: PALE_GREEN, labelColor: GREEN_LABEL, linkTint: PALE_GREEN },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.8, notes: ['10% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', col: 6, order: 2, type: 'cost', label: 'Interest', value: 0.3 },
    ],
    links: [
      { source: 'foods', target: 'north_america', value: 6.2, sourceWidth: 112, targetWidth: 112, targetOrder: 0 },
      { source: 'pepsico_beverages', target: 'north_america', value: 5.9, sourceWidth: 106, targetWidth: 110, targetOrder: 1 },
      { source: 'north_america', target: 'revenue', value: 12.1, sourceWidth: 222, targetWidth: 232, targetOrder: 0 },
      { source: 'ib_franchise', target: 'revenue', value: 0.8, sourceWidth: 13, targetWidth: 13, targetOrder: 1 },
      { source: 'latam', target: 'revenue', value: 1.7, sourceWidth: 29, targetWidth: 29, targetOrder: 2 },
      { source: 'emea', target: 'revenue', value: 2.4, sourceWidth: 41, targetWidth: 41, targetOrder: 3 },
      { source: 'apac', target: 'revenue', value: 1.0, sourceWidth: 16, targetWidth: 16, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 10.0, sourceWidth: 183, targetWidth: 182, y0: 757.5, y1: 629, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.9, sourceWidth: 148, targetWidth: 144, y0: 923, y1: 1030, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.6, sourceWidth: 46, targetWidth: 46, y0: 561, y1: 461, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.4, sourceWidth: 136, targetWidth: 135, y0: 652, y1: 755.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 31, targetWidth: 30, y0: 453.5, y1: 364, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 9, targetWidth: 7, y0: 473.5, y1: 606.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 6, targetWidth: 3, y0: 481, y1: 750.5, sourceOrder: 2 },
      { source: 'other_income', target: 'net_profit', value: 0.023, sourceWidth: 2, targetWidth: 2, y0: 439, y1: 380, sourceOrder: 0, targetOrder: 1, linkTint: PALE_GREEN },
    ],
    i18n: {
      zh: {
        name: 'PepsiCo · 2025 财年第一季度',
        meta: { title: '百事公司 2025 财年第一季度利润表', period: '2025 财年第一季度', periodNote: '截至 2025 年 3 月', titleTextLength: 2000 },
        nodes: {
          foods: { label: '食品', notes: ['同比 (1%)'] }, pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 +0%'] },
          north_america: { label: '北美', notes: ['同比 (0%)'] }, ib_franchise: { label: '国际饮料特许经营', notes: ['同比 +3%'] },
          latam: { label: '拉丁美洲', notes: ['同比 (12%)'] }, emea: { label: '欧洲中东非洲', notes: ['同比 (2%)'] },
          apac: { label: '亚太', notes: ['同比 (2%)'] }, revenue: { label: '收入', notes: ['同比 (2%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 +1 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 (0 个百分点)'] }, operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (1 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
