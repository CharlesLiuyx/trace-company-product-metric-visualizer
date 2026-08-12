/* PepsiCo Q4 FY22 fixed-layout income statement. Geometry is measured from
 * input/processed/pepsico-q4-fy22.png. Dataset-specific Source crops are used
 * for the period's brand and regional-globe annotations. */
(function () {
  const NAVY = '#2a4790';
  const NAVY_LINK = '#98a5c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const line = (text, size, extra = {}) => ({ text, size, weight: 400, ...extra });
  const block = (x, top, lines, extra = {}) => ({ x, top, anchor: 'middle', lineGap: 10, lines, ...extra });
  const valueYoy = (x, top, yoy) => block(x, top, [line('$value', 40), line(yoy, 29, { color: NOTE })], { lineGap: 13 });
  const right = (top, title, size = 34) => ({ blocks: [block(2476, top, [line(title, size, { weight: 800, color: RED_LABEL }), line('$value', size, { color: RED_LABEL })], { lineGap: 8 })] });

  window.DATASETS = window.DATASETS || [];
  const data = {
    key: 'pepsico-q4-fy22',
    name: 'PepsiCo · Q4 FY22',
    company: 'PepsiCo',
    meta: {
      company: 'PepsiCo',
      title: 'PepsiCo Q4 FY22 Income Statement',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q4-fy22.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 207, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: '#155077', subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'pepsico-fy22-lays', href: 'data/assets/raster-annotations/pepsico/fy22-lays.png', x: 9, y: 385, width: 154, height: 145 },
      { key: 'pepsico-fy22-quaker', href: 'data/assets/raster-annotations/pepsico/fy22-quaker.png', x: 8, y: 567, width: 145, height: 130 },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 16, y: 734, width: 139, height: 139 },
      { key: 'pepsico-fy22-company-logo', href: 'data/assets/raster-annotations/pepsico/fy22-company-logo.png', x: 966, y: 455, width: 475, height: 78 },
      { key: 'pepsico-fy22-revenue-globe', href: 'data/assets/raster-annotations/pepsico/fy22-revenue-globe.png', x: 1136, y: 318, width: 117, height: 119 },
      { key: 'pepsico-fy22-globe-north-america', href: 'data/assets/raster-annotations/pepsico/fy22-globe-north-america.png', x: 770, y: 284, width: 99, height: 99 },
      { key: 'pepsico-fy22-globe-latam', href: 'data/assets/raster-annotations/pepsico/fy22-globe-latam.png', x: 523, y: 876, width: 94, height: 90 },
      { key: 'pepsico-fy22-globe-europe', href: 'data/assets/raster-annotations/pepsico/fy22-globe-europe.png', x: 514, y: 1029, width: 99, height: 97 },
      { key: 'pepsico-fy22-globe-amesa', href: 'data/assets/raster-annotations/pepsico/fy22-globe-amesa.png', x: 79, y: 1175, width: 88, height: 86, pairedNode: 'amesa', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'pepsico-fy22-globe-apac', href: 'data/assets/raster-annotations/pepsico/fy22-globe-apac.png', x: 540, y: 1290, width: 92, height: 92 },
    ],
    layout: {
      scale: 11.6,
      nodes: {
        frito_lay: { x: 420, y: 402, width: 71, height: 89 },
        quaker_foods: { x: 420, y: 614, width: 71, height: 11 },
        pepsico_beverages: { x: 420, y: 752, width: 71, height: 96 },
        north_america: { x: 794, y: 544, width: 70, height: 198 },
        latam: { x: 796, y: 910, width: 70, height: 38 },
        europe: { x: 791, y: 1055, width: 70, height: 49 },
        amesa: { x: 789, y: 1208, width: 70, height: 21 },
        apac: { x: 786, y: 1334, width: 70, height: 15 },
        revenue: { x: 1168, y: 732, width: 70, height: 332 },
        gross_profit: { x: 1562, y: 637, width: 70, height: 172 },
        cost_of_revenue: { x: 1569, y: 1018, width: 70, height: 157 },
        operating_profit: { x: 1953, y: 580, width: 70, height: 7 },
        operating_expenses: { x: 1958, y: 742, width: 70, height: 162 },
        tax_other: { x: 2176, y: 554, width: 70, height: 1 },
        net_profit: { x: 2288, y: 462, width: 71, height: 5 },
        interest: { x: 2288, y: 722, width: 71, height: 2 },
        sga: { x: 2288, y: 943, width: 71, height: 142 },
        other: { x: 2288, y: 1319, width: 71, height: 16 },
      },
      labels: {
        frito_lay: { blocks: [valueYoy(456, 301, '+25% Y/Y'), block(300, 431, [line('Frito-Lay', 40, { weight: 800 })], { semanticRole: 'source-positioned-side-label' })] },
        quaker_foods: { blocks: [valueYoy(456, 520, '+16% Y/Y'), block(304, 592, [line('Quaker', 40, { weight: 800 }), line('Foods', 40, { weight: 800 })], { semanticRole: 'source-positioned-side-label' })] },
        pepsico_beverages: { blocks: [valueYoy(456, 651, '+6% Y/Y'), block(294, 750, [line('PepsiCo', 40, { weight: 800 }), line('Beverages', 40, { weight: 800 })])] },
        north_america: { blocks: [block(823, 394, [line('North America', 40, { weight: 800 }), line('$value', 40), line('+15% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
        latam: { blocks: [valueYoy(831, 816, '+21% Y/Y'), block(689, 901, [line('LATAM', 40, { weight: 800 })])] },
        europe: { blocks: [valueYoy(833, 958, '(2%) Y/Y'), block(691, 1043, [line('Europe', 40, { weight: 800 })], { semanticRole: 'source-positioned-side-label' })] },
        amesa: { blocks: [valueYoy(839, 1104, '+4% Y/Y'), block(759, 1196, [line('Africa, Middle East & South Asia', 38, { weight: 800 })], { anchor: 'end', semanticRole: 'centered-side-label' })] },
        apac: { blocks: [valueYoy(821, 1240, '+2% Y/Y'), block(691, 1304, [line('APAC', 40, { weight: 800 })], { semanticRole: 'source-positioned-side-label' })] },
        revenue: { blocks: [block(1199, 584, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+11% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
        gross_profit: { blocks: [block(1597, 451, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('52% margin', 29, { color: NOTE }), line('+0pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
        cost_of_revenue: { blocks: [block(1598, 1186, [line('Cost of', 40, { weight: 800, color: RED_LABEL }), line('revenue', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 12 })] },
        operating_profit: { blocks: [block(1988, 394, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('3% margin', 29, { color: NOTE }), line('(7pp) Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
        operating_expenses: { blocks: [block(1981, 923, [line('Operating', 40, { weight: 800, color: RED_LABEL }), line('expenses', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 12 })] },
        tax_other: { blocks: [block(2210, 568, [line('Tax & Other', 34, { weight: 800, color: '#008e00' }), line('$value', 34, { color: '#008e00' })], { lineGap: 8 })] },
        net_profit: { blocks: [block(2476, 414, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('2% margin', 29, { color: NOTE }), line('(3pp) Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
        interest: right(688, 'Interest'),
        sga: { blocks: [block(2494, 968, [line('SG&A', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL }), line('44% of revenue', 29, { color: NOTE })], { lineGap: 8 })] },
        other: { blocks: [block(2500, 1264, [line('Other', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL }), line('6% of revenue', 29, { color: NOTE })], { lineGap: 8 })] },
      },
    },
    nodes: [
      { id: 'frito_lay', col: 0, order: 0, type: 'source', label: 'Frito-Lay', value: 7.7, notes: ['+25% Y/Y'] },
      { id: 'quaker_foods', col: 0, order: 1, type: 'source', label: ['Quaker', 'Foods'], value: 1.1, notes: ['+16% Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 2, type: 'source', label: ['PepsiCo', 'Beverages'], value: 8.1, notes: ['+6% Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 16.9, notes: ['+15% Y/Y'] },
      { id: 'latam', col: 1, order: 1, type: 'source', label: 'LATAM', value: 3.4, notes: ['+21% Y/Y'] },
      { id: 'europe', col: 1, order: 2, type: 'source', label: 'Europe', value: 4.3, notes: ['(2%) Y/Y'] },
      { id: 'amesa', col: 1, order: 3, type: 'source', label: 'Africa, Middle East & South Asia', value: 2.0, valueText: '$2.0B', notes: ['+4% Y/Y'] },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.5, notes: ['+2% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 28.0, valueText: '$28.0B', notes: ['+11% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 14.6, notes: ['52% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 13.4 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.8, notes: ['3% margin', '(7pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 13.8 },
      { id: 'tax_other', col: 5, order: 0, type: 'profit', label: 'Tax & Other', value: 0.1, color: '#008e00', labelColor: '#008e00', linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 0.5, notes: ['2% margin', '(3pp) Y/Y'] },
      { id: 'interest', col: 6, order: 1, type: 'cost', label: 'Interest', value: 0.3 },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 12.2, notes: ['44% of revenue'] },
      { id: 'other', col: 6, order: 3, type: 'cost', label: 'Other', value: 1.6, notes: ['6% of revenue'] },
    ],
    links: [
      { source: 'frito_lay', target: 'north_america', value: 7.7, sourceWidth: 89, targetWidth: 89, sourceOrder: 0, targetOrder: 0 },
      { source: 'quaker_foods', target: 'north_america', value: 1.1, sourceWidth: 11, targetWidth: 11, sourceOrder: 0, targetOrder: 1 },
      { source: 'pepsico_beverages', target: 'north_america', value: 8.1, sourceWidth: 96, targetWidth: 98, sourceOrder: 0, targetOrder: 2 },
      { source: 'north_america', target: 'revenue', value: 16.9, sourceWidth: 198, targetWidth: 200, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'revenue', value: 3.4, sourceWidth: 38, targetWidth: 40, sourceOrder: 0, targetOrder: 1 },
      { source: 'europe', target: 'revenue', value: 4.3, sourceWidth: 49, targetWidth: 51, sourceOrder: 0, targetOrder: 2 },
      { source: 'amesa', target: 'revenue', value: 2.0, sourceWidth: 21, targetWidth: 24, sourceOrder: 0, targetOrder: 3 },
      { source: 'apac', target: 'revenue', value: 1.5, sourceWidth: 15, targetWidth: 17, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 14.6, sourceWidth: 172, targetWidth: 172, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 13.4, sourceWidth: 160, targetWidth: 157, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.8, sourceWidth: 8, targetWidth: 7, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 13.8, sourceWidth: 164, targetWidth: 162, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, sourceWidth: 5, targetWidth: 4, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 2, targetWidth: 2, sourceOrder: 1, targetOrder: 0 },
      { source: 'tax_other', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 12.2, sourceWidth: 146, targetWidth: 142, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other', value: 1.6, sourceWidth: 16, targetWidth: 16, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '百事公司 · 2022 财年第四季度',
        meta: { title: '百事公司 2022 财年第四季度利润表', period: '2022 财年第四季度', periodNote: '截至 2022 年 12 月', titleTextLength: 2000 },
        nodes: {
          frito_lay: { label: '菲多利', notes: ['同比 +25%'] }, quaker_foods: { label: ['桂格', '食品'], notes: ['同比 +16%'] }, pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 +6%'] },
          north_america: { label: '北美', notes: ['同比 +15%'] }, latam: { label: '拉丁美洲', notes: ['同比 +21%'] }, europe: { label: '欧洲', notes: ['同比 (2%)'] }, amesa: { label: '非洲、中东及南亚', notes: ['同比 +4%'] }, apac: { label: '亚太', notes: ['同比 +2%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] }, gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +0 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 (7 个百分点)'] }, operating_expenses: { label: ['运营', '费用'] }, tax_other: { label: '税费及其他' }, net_profit: { label: '净利润', notes: ['利润率 2%', '同比 (3 个百分点)'] }, interest: { label: '利息' }, sga: { label: '销售管理费用', notes: ['占收入 44%'] }, other: { label: '其他', notes: ['占收入 6%'] },
        },
      },
    },
  };

  const zhText = {
    'Frito-Lay': '菲多利', Quaker: '桂格', Foods: '食品', PepsiCo: '百事', Beverages: '饮料',
    'North America': '北美', LATAM: '拉丁美洲', Europe: '欧洲',
    'Africa, Middle East & South Asia': '非洲、中东及南亚', APAC: '亚太', Revenue: '收入',
    'Gross profit': '毛利润', 'Cost of': '收入', revenue: '成本', 'Operating profit': '营业利润',
    Operating: '运营', expenses: '费用', 'Tax & Other': '税费及其他', 'Net profit': '净利润',
    Interest: '利息', 'SG&A': '销售、一般及行政', Other: '其他',
    '+25% Y/Y': '同比 +25%', '+16% Y/Y': '同比 +16%', '+6% Y/Y': '同比 +6%',
    '+15% Y/Y': '同比 +15%', '+21% Y/Y': '同比 +21%', '(2%) Y/Y': '同比 (2%)',
    '+4% Y/Y': '同比 +4%', '+2% Y/Y': '同比 +2%', '+11% Y/Y': '同比 +11%',
    '52% margin': '利润率 52%', '+0pp Y/Y': '同比 +0 个百分点', '3% margin': '利润率 3%',
    '(7pp) Y/Y': '同比 (7 个百分点)', '2% margin': '利润率 2%', '(3pp) Y/Y': '同比 (3 个百分点)',
    '44% of revenue': '占收入 44%', '6% of revenue': '占收入 6%',
  };
  const zhLabels = JSON.parse(JSON.stringify(data.layout.labels));
  for (const label of Object.values(zhLabels)) {
    for (const labelBlock of label.blocks) {
      for (const labelLine of labelBlock.lines) {
        if (Object.hasOwn(zhText, labelLine.text)) labelLine.text = zhText[labelLine.text];
      }
    }
  }
  zhLabels.sga.blocks[0].x += 8;
  data.i18n.zh.layout = { labels: zhLabels };

  window.DATASETS.push(data);
})();
