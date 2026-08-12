/* PepsiCo Q4 FY24 fixed-layout income statement. Geometry and label groups
 * are measured from input/processed/pepsico-q4-fy24.png. Reusable PepsiCo
 * assets are combined with four Source-specific, validated icon crops. */
(function () {
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
  const RIGHT_LABEL_X = 2545;

  function measuredLabels(zh) {
    const note = (en, localized) => (zh ? localized : en);
    const name = (en, localized) => (zh ? localized : en);
    return {
      frito_lay: { blocks: [{ x: 452, top: 312, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: note('(2%) Y/Y', '同比 (2%)'), size: 29, weight: 400, color: NOTE }] }, { x: 300, top: 431, anchor: 'middle', lines: [{ text: name('Frito-Lay', '菲多利'), size: 40, weight: 800 }] }] },
      quaker_foods: { blocks: [{ x: 452, top: 549, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: note('(2%) Y/Y', '同比 (2%)'), size: 29, weight: 400, color: NOTE }] }, { x: 301, top: 596, anchor: 'middle', lineGap: 8, lines: [{ text: name('Quaker', '桂格'), size: 40, weight: 800 }, { text: name('Foods', '食品'), size: 40, weight: 800 }] }] },
      pepsico_beverages: { blocks: [{ x: 452, top: 668, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: note('(0%) Y/Y', '同比 (0%)'), size: 29, weight: 400, color: NOTE }] }, { x: 291, top: 783, anchor: 'middle', lineGap: 8, lines: [{ text: name('PepsiCo', '百事'), size: 40, weight: 800 }, { text: name('Beverages', '饮料'), size: 40, weight: 800 }] }] },
      north_america: { blocks: [{ x: 838, top: 418, anchor: 'middle', lineGap: 12, lines: [{ text: name('North America', '北美'), size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: note('(1%) Y/Y', '同比 (1%)'), size: 29, weight: 400, color: NOTE }] }] },
      latam: { blocks: [{ x: 838, top: 830, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: note('(7%) Y/Y', '同比 (7%)'), size: 29, weight: 400, color: NOTE }] }, { x: 700, top: zh ? 924 : 920, anchor: 'middle', lines: [{ text: name('LATAM', '拉丁美洲'), size: zh ? 34 : 40, weight: 800 }] }] },
      europe: { blocks: [{ x: 838, top: 975, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: note('+6% Y/Y', '同比 +6%'), size: 29, weight: 400, color: NOTE }] }, { x: 703, top: 1079, anchor: 'middle', lines: [{ text: name('Europe', '欧洲'), size: 40, weight: 800 }] }] },
      amesa: { blocks: [{ x: 838, top: 1134, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: note('+5% Y/Y', '同比 +5%'), size: 29, weight: 400, color: NOTE }] }, { x: 473, top: zh ? 1232 : 1227, anchor: 'middle', lines: [{ text: name('Africa, Middle East & South Asia', '非洲、中东及南亚'), size: zh ? 32 : 40, weight: 800 }] }] },
      apac: { blocks: [{ x: 838, top: 1281, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: note('+2% Y/Y', '同比 +2%'), size: 29, weight: 400, color: NOTE }] }, { x: 724, top: 1364, anchor: 'middle', lines: [{ text: name('APAC', '亚太'), size: 40, weight: 800 }] }] },
      revenue: { blocks: [{ x: 1233, top: 529, anchor: 'middle', lineGap: 12, lines: [{ text: name('Revenue', '收入'), size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: note('(0%) Y/Y', '同比 (0%)'), size: 29, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1622, top: 384, anchor: 'middle', lineGap: 12, lines: [{ text: name('Gross profit', '毛利润'), size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: name('53% margin', '利润率 53%'), size: 29, weight: 400, color: NOTE }, { text: note('(0pp) Y/Y', '同比 (0 个百分点)'), size: 29, weight: 400, color: NOTE }] }] },
      cost_of_revenue: { blocks: [{ x: 1623, top: 1193, anchor: 'middle', lineGap: 12, lines: [{ text: name('Cost of', '收入'), size: 40, weight: 800, color: RED_LABEL }, { text: name('revenue', '成本'), size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
      operating_profit: { blocks: [{ x: 2007, top: 271, anchor: 'middle', lineGap: 12, lines: [{ text: name('Operating profit', '营业利润'), size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: name('8% margin', '利润率 8%'), size: 29, weight: 400, color: NOTE }, { text: note('+2pp Y/Y', '同比 +2 个百分点'), size: 29, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 2012, top: 871, anchor: 'middle', lineGap: 12, lines: [{ text: name('Operating', '运营'), size: 36, weight: 800, color: RED_LABEL }, { text: name('expenses', '费用'), size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, weight: 400, color: RED_LABEL }] }] },
      net_profit: { blocks: [{ x: zh ? RIGHT_LABEL_X + 5 : RIGHT_LABEL_X, top: 327, anchor: 'middle', lineGap: 12, lines: [{ text: name('Net profit', '净利润'), size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: name('6% margin', '利润率 6%'), size: 29, weight: 400, color: NOTE }, { text: note('+1pp Y/Y', '同比 +1 个百分点'), size: 29, weight: 400, color: NOTE }] }] },
      tax: { blocks: [{ x: RIGHT_LABEL_X, top: 521, anchor: 'middle', lineGap: 8, lines: [{ text: name('Tax', '税费'), size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
      interest: { blocks: [{ x: RIGHT_LABEL_X, top: 639, anchor: 'middle', lineGap: 8, lines: [{ text: name('Interest', '利息'), size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
      other: { blocks: [{ x: RIGHT_LABEL_X, top: 756, anchor: 'middle', lineGap: 8, lines: [{ text: name('Other', '其他'), size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  const data = {
    key: 'pepsico-q4-fy24',
    name: 'PepsiCo · Q4 FY24',
    company: 'PepsiCo',
    meta: {
      company: 'PepsiCo', title: 'PepsiCo Q4 FY24 Income Statement', period: 'Q4 FY24', periodNote: 'Ending Dec. 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 207, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'pepsico-company-logo', href: 'data/assets/raster-annotations/pepsico/company-logo.png', x: 1000, y: 267, width: 475, height: 76 },
      { key: 'pepsico-lays-q4-fy24', href: 'data/assets/raster-annotations/pepsico/lays-q4-fy24.png', x: 6, y: 394, width: 154, height: 145 },
      { key: 'pepsico-quaker-q4-fy24', href: 'data/assets/raster-annotations/pepsico/quaker-q4-fy24.png', x: 11, y: 584, width: 144, height: 129 },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 9, y: 748, width: 146, height: 147 },
      { key: 'pepsico-revenue-globe', href: 'data/assets/raster-annotations/pepsico/revenue-globe.png', x: 1174, y: 347, width: 118, height: 119 },
      { key: 'pepsico-globe-north-america', href: 'data/assets/raster-annotations/pepsico/globe-north-america.png', x: 795, y: 302, width: 92, height: 92 },
      { key: 'pepsico-globe-latam', href: 'data/assets/raster-annotations/pepsico/globe-latam.png', x: 528, y: 906, width: 79, height: 79 },
      { key: 'pepsico-globe-europe-q4-fy24', href: 'data/assets/raster-annotations/pepsico/globe-europe-q4-fy24.png', x: 525, y: 1043, width: 99, height: 99 },
      { key: 'pepsico-globe-amesa-q4-fy24', href: 'data/assets/raster-annotations/pepsico/globe-amesa-q4-fy24.png', x: 53, y: 1202, width: 88, height: 88 },
      { key: 'pepsico-globe-apac', href: 'data/assets/raster-annotations/pepsico/globe-apac.png', x: 558, y: 1340, width: 83, height: 83 },
    ],
    layout: {
      scale: 13.5,
      nodes: {
        frito_lay: { x: 415, y: 406, width: 74, height: 104 }, quaker_foods: { x: 415, y: 643, width: 74, height: 11 }, pepsico_beverages: { x: 415, y: 779, width: 74, height: 112 },
        north_america: { x: 802, y: 569, width: 73, height: 231 }, latam: { x: 799, y: 923, width: 73, height: 51 }, europe: { x: 799, y: 1076, width: 73, height: 62 }, amesa: { x: 802, y: 1241, width: 73, height: 28 }, apac: { x: 802, y: 1375, width: 73, height: 20 },
        revenue: { x: 1196, y: 676, width: 74, height: 400 }, gross_profit: { x: 1586, y: 569, width: 73, height: 210 }, cost_of_revenue: { x: 1586, y: 991, width: 73, height: 188 },
        operating_profit: { x: 1970, y: 457, width: 73, height: 30 }, operating_expenses: { x: 1975, y: 677, width: 73, height: 177 },
        net_profit: { x: 2361, y: 388, width: 74, height: 19 }, tax: { x: 2361, y: 549, width: 74, height: 2 }, interest: { x: 2361, y: 683, width: 74, height: 2 }, other: { x: 2361, y: 802, width: 74, height: 1 },
      },
      labels: measuredLabels(false),
    },
    nodes: [
      { id: 'frito_lay', col: 0, order: 0, type: 'source', label: 'Frito-Lay', value: 7.3, notes: ['(2%) Y/Y'] },
      { id: 'quaker_foods', col: 0, order: 1, type: 'source', label: ['Quaker', 'Foods'], value: 0.9, notes: ['(2%) Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 2, type: 'source', label: ['PepsiCo', 'Beverages'], value: 7.9, notes: ['(0%) Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 16.1, notes: ['(1%) Y/Y'] },
      { id: 'latam', col: 1, order: 1, type: 'source', label: 'LATAM', value: 3.7, notes: ['(7%) Y/Y'] },
      { id: 'europe', col: 1, order: 2, type: 'source', label: 'Europe', value: 4.5, notes: ['+6% Y/Y'] },
      { id: 'amesa', col: 1, order: 3, type: 'source', label: 'Africa, Middle East & South Asia', value: 2.0, valueText: '$2.0B', notes: ['+5% Y/Y'] },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.5, notes: ['+2% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 27.8, notes: ['(0%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 14.6, notes: ['53% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 13.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.2, notes: ['8% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 12.3 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.5, notes: ['6% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.3 },
      { id: 'other', col: 5, order: 3, type: 'cost', label: 'Other', value: 0.2, valueText: '$0.2B' },
    ],
    links: [
      { source: 'frito_lay', target: 'north_america', value: 7.3, sourceWidth: 104, targetWidth: 105, sourceOrder: 0, targetOrder: 0 },
      { source: 'quaker_foods', target: 'north_america', value: 0.9, width: 11, sourceOrder: 0, targetOrder: 1 },
      { source: 'pepsico_beverages', target: 'north_america', value: 7.9, sourceWidth: 112, targetWidth: 115, sourceOrder: 0, targetOrder: 2 },
      { source: 'north_america', target: 'revenue', value: 16.1, sourceWidth: 231, targetWidth: 232, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'latam', target: 'revenue', value: 3.7, sourceWidth: 51, targetWidth: 53, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'europe', target: 'revenue', value: 4.5, sourceWidth: 62, targetWidth: 64, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'amesa', target: 'revenue', value: 2.0, sourceWidth: 28, targetWidth: 29, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'apac', target: 'revenue', value: 1.5, sourceWidth: 20, targetWidth: 22, sourceOrder: 0, targetOrder: 4, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 14.6, sourceWidth: 212, targetWidth: 210, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 13.2, width: 188, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.2, width: 30, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 12.3, sourceWidth: 179, targetWidth: 177, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, sourceWidth: 24, targetWidth: 19, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, width: 2, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.3, width: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.2, width: 1, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '百事公司 · 2024 财年第四季度',
        meta: { title: '百事公司 2024 财年第四季度利润表', period: '2024 财年第四季度', periodNote: '截至 2024 年 12 月', titleTextLength: 2000 },
        nodes: {
          frito_lay: { label: '菲多利', notes: ['同比 (2%)'] }, quaker_foods: { label: ['桂格', '食品'], notes: ['同比 (2%)'] }, pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 (0%)'] },
          north_america: { label: '北美', notes: ['同比 (1%)'] }, latam: { label: '拉丁美洲', notes: ['同比 (7%)'] }, europe: { label: '欧洲', notes: ['同比 +6%'] }, amesa: { label: '非洲、中东及南亚', notes: ['同比 +5%'] }, apac: { label: '亚太', notes: ['同比 +2%'] },
          revenue: { label: '收入', notes: ['同比 (0%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 53%', '同比 (0 个百分点)'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 +2 个百分点'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +1 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' }, other: { label: '其他' },
        },
        layout: { labels: measuredLabels(true) },
      },
    },
  };

  window.DATASETS.push(data);
})();
