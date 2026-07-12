/* LVMH FY25 income statement (EUR B), measured from the processed reference. */
(function () {
  const TITLE = '#155077';
  const GOLD = '#b99e6e';
  const GOLD_LINK = '#dcd2bd';
  const GREEN = '#2aa52a';
  const GREEN_LABEL = '#008f4b';
  const GREEN_LINK = '#9bce9a';
  const RED = '#d90000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e18384';
  const NOTE = '#666666';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2534;

  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    lines,
  });
  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight == null ? 400 : options.weight,
    color: options.color,
  });

  const labels = (zh) => {
    const t = zh ? {
      wines: ['葡萄酒', '与烈酒'], fashion: ['时装与', '皮具'], perfumes: ['香水与', '美妆'], watches: ['腕表与', '珠宝'], selective: ['精选', '零售'], otherActivities: '其他',
      revenue: '收入', gross: '毛利润', cost: '销售成本', operating: '营业利润', expenses: ['营业', '费用'], net: '净利润', tax: '税费', other: '其他', sales: ['销售与', '市场费用'], general: ['一般及', '行政费用'], otherOpex: '其他运营费用',
      yoy9: '同比 (9%)', yoy8: '同比 (8%)', yoy5: '同比 (5%)', yoy3: '同比 (3%)', yoy1: '同比 (1%)', yoy0: '同比 +0%', pp1: '同比 (1 个百分点)', rev66: '占收入 66%', rev22: '占收入 22%', rev14: '占收入 14%', rev37: '占收入 37%', rev7: '占收入 7%',
    } : {
      wines: ['Wines', '& Spirits'], fashion: ['Fashion &', 'Leather Goods'], perfumes: ['Perfumes', '& Cosmetics'], watches: ['Watches', '& Jewelry'], selective: ['Selective', 'retailers'], otherActivities: 'Other',
      revenue: 'Revenue', gross: 'Gross profit', cost: 'Cost of sales', operating: 'Operating profit', expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', other: 'Other', sales: ['Sales &', 'Marketing'], general: ['General &', 'Administrative'], otherOpex: 'Other opex',
      yoy9: '(9%) Y/Y', yoy8: '(8%) Y/Y', yoy5: '(5%) Y/Y', yoy3: '(3%) Y/Y', yoy1: '(1%) Y/Y', yoy0: '+0% Y/Y', pp1: '(1pp) Y/Y', rev66: '66% of revenue', rev22: '22% of revenue', rev14: '14% of revenue', rev37: '37% of revenue', rev7: '7% of revenue',
    };
    const name = (text, size = 40, color) => line(text, size, { weight: 800, color });
    const value = (size = 40, color) => line('$value', size, { color });
    const note = (text, size = 29) => line(text, size, { color: NOTE });

    return {
      wines_spirits: { blocks: [
        block(494, 289, [value(40, GOLD), note(t.yoy9)], { lineGap: 8 }),
        block(302, 350, t.wines.map((part) => name(part, 40, GOLD)), { lineGap: 7 }),
      ] },
      fashion_leather_goods: { blocks: [
        block(494, 449, [value(40, GOLD), note(t.yoy8)], { lineGap: 8 }),
        block(303, 583, t.fashion.map((part) => name(part, zh ? 37 : 39, GOLD)), { lineGap: 7 }),
      ] },
      perfumes_cosmetics: { blocks: [
        block(494, 754, [value(40, GOLD), note(t.yoy3)], { lineGap: 8 }),
        block(303, 805, t.perfumes.map((part) => name(part, 37, GOLD)), { lineGap: 7 }),
      ] },
      watches_jewelry: { blocks: [
        block(494, 908, [value(40, GOLD), note(t.yoy1)], { lineGap: 8 }),
        block(303, 973, t.watches.map((part) => name(part, 37, GOLD)), { lineGap: 7 }),
      ] },
      selective_retailing: { blocks: [
        block(494, 1072, [value(40, GOLD), note(t.yoy0)], { lineGap: 8 }),
        block(303, 1152, t.selective.map((part) => name(part, 39, GOLD)), { lineGap: 7 }),
      ] },
      other_activities_eliminations: { blocks: [
        block(494, 1283, [value(40, GOLD)]),
        // Operator-specified left-side placement: keep the short-node name
        // clear of the €0.7B block while aligning it to the marked label slot.
        block(385, 1325, [name(t.otherActivities, 39, GOLD)]),
      ] },
      revenue: { blocks: [
        block(962, 541, [name(t.revenue, 40, GOLD), value(40, GOLD), note(t.yoy5)], { lineGap: 8 }),
      ] },
      gross_profit: { blocks: [
        block(1430, 412, [name(t.gross, 40, GREEN_LABEL), value(40, GREEN_LABEL), note(t.rev66), note(t.pp1)], { lineGap: 8 }),
      ] },
      cost_of_sales: { blocks: [
        block(1430, 1144, [name(t.cost, 40, RED_LABEL), value(40, RED_LABEL)], { lineGap: 8 }),
      ] },
      operating_profit: { blocks: [
        block(1897, 332, [name(t.operating, 40, GREEN_LABEL), value(40, GREEN_LABEL), note(t.rev22), note(t.pp1)], { lineGap: 8 }),
      ] },
      operating_expenses: { blocks: [
        block(1897, 959, [...t.expenses.map((part) => name(part, 40, RED_LABEL)), value(40, RED_LABEL)], { lineGap: 8 }),
      ] },
      net_profit: { blocks: [
        block(RIGHT_LABEL_X, 373, [name(t.net, 40, GREEN_LABEL), value(40, GREEN_LABEL), note(t.rev14), note(t.pp1)], { lineGap: 8 }),
      ] },
      tax: { blocks: [
        block(RIGHT_LABEL_X, 611, [name(t.tax, 36, RED_LABEL), value(36, RED_LABEL)], { lineGap: 8 }),
      ] },
      other: { blocks: [
        block(RIGHT_LABEL_X, 723, [name(t.other, 34, RED_LABEL), value(34, RED_LABEL)], { lineGap: 8 }),
      ] },
      sales_marketing: { blocks: [
        block(RIGHT_LABEL_X, 850, [...t.sales.map((part) => name(part, 37, RED_LABEL)), value(37, RED_LABEL), note(t.rev37)], { lineGap: 8 }),
      ] },
      general_administrative: { blocks: [
        block(RIGHT_LABEL_X, 1090, [...t.general.map((part) => name(part, 36, RED_LABEL)), value(36, RED_LABEL), note(t.rev7)], { lineGap: 8 }),
      ] },
      other_opex: { blocks: [
        block(RIGHT_LABEL_X, 1282, [name(t.otherOpex, zh ? 32 : 34, RED_LABEL), value(34, RED_LABEL)], { lineGap: 8 }),
      ] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lvmh-fy25',
    name: 'LVMH · FY25',
    company: 'LVMH',
    meta: {
      company: 'LVMH',
      title: 'LVMH FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/lvmh-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 197,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 1930,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: GOLD, label: GOLD },
        hub: { node: GOLD, label: GOLD },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GOLD_LINK, hub: GOLD_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'lvmh-company-wordmark', href: 'data/assets/raster-annotations/lvmh/company-wordmark.png', x: 723, y: 295, width: 479, height: 149 },
      { key: 'lvmh-business-wines-spirits-cluster', href: 'data/assets/raster-annotations/lvmh/business-wines-spirits-cluster.png', x: 6, y: 291, width: 177, height: 192 },
      { key: 'lvmh-business-fashion-leather-goods-cluster', href: 'data/assets/raster-annotations/lvmh/business-fashion-leather-goods-cluster.png', x: 7, y: 534, width: 158, height: 167 },
      { key: 'lvmh-business-perfumes-cosmetics-cluster', href: 'data/assets/raster-annotations/lvmh/business-perfumes-cosmetics-cluster.png', x: 9, y: 783, width: 165, height: 118 },
      { key: 'lvmh-business-watches-jewelry-cluster', href: 'data/assets/raster-annotations/lvmh/business-watches-jewelry-cluster.png', x: 10, y: 969, width: 176, height: 107 },
      { key: 'lvmh-business-selective-retailing-cluster', href: 'data/assets/raster-annotations/lvmh/business-selective-retailing-cluster.png', x: 17, y: 1127, width: 158, height: 123 },
      { key: 'lvmh-business-other-cluster', href: 'data/assets/raster-annotations/lvmh/business-other-cluster.png', x: 30, y: 1278, width: 137, height: 94 },
    ],
    layout: {
      scale: 1,
      nodes: {
        wines_spirits: { x: 458, y: 382, width: 72, height: 25 },
        fashion_leather_goods: { x: 458, y: 538, width: 72, height: 173 },
        perfumes_cosmetics: { x: 458, y: 842, width: 72, height: 38 },
        watches_jewelry: { x: 458, y: 997, width: 72, height: 48 },
        selective_retailing: { x: 458, y: 1160, width: 72, height: 84 },
        other_activities_eliminations: { x: 458, y: 1340, width: 72, height: 3 },
        revenue: { x: 926, y: 686, width: 72, height: 369 },
        gross_profit: { x: 1393, y: 594, width: 72, height: 246 },
        cost_of_sales: { x: 1393, y: 1009, width: 72, height: 125 },
        operating_profit: { x: 1861, y: 516, width: 71, height: 78 },
        operating_expenses: { x: 1861, y: 770, width: 71, height: 167 },
        net_profit: { x: 2328, y: 413, width: 72, height: 51 },
        tax: { x: 2328, y: 642, width: 72, height: 25 },
        other: { x: 2328, y: 759, width: 72, height: 2 },
        sales_marketing: { x: 2328, y: 839, width: 72, height: 137 },
        general_administrative: { x: 2328, y: 1120, width: 72, height: 27 },
        other_opex: { x: 2328, y: 1300, width: 72, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'wines_spirits', col: 0, order: 0, type: 'source', label: ['Wines', '& Spirits'], value: 5.4, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'fashion_leather_goods', col: 0, order: 1, type: 'source', label: ['Fashion &', 'Leather Goods'], value: 37.8, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'perfumes_cosmetics', col: 0, order: 2, type: 'source', label: ['Perfumes', '& Cosmetics'], value: 8.2, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'watches_jewelry', col: 0, order: 3, type: 'source', label: ['Watches', '& Jewelry'], value: 10.5, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'selective_retailing', col: 0, order: 4, type: 'source', label: ['Selective', 'retailers'], value: 18.3, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'other_activities_eliminations', col: 0, order: 5, type: 'source', label: 'Other', value: 0.7, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 80.8, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 53.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 27.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 17.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 36.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 11.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 5.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 3, type: 'cost', label: ['Sales &', 'Marketing'], value: 29.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_administrative', col: 4, order: 4, type: 'cost', label: ['General &', 'Administrative'], value: 5.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 4, order: 5, type: 'cost', label: 'Other opex', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'wines_spirits', target: 'revenue', value: 5.4, sourceWidth: 25, targetWidth: 25, y0: 394.5, y1: 698.5, sourceOrder: 0, targetOrder: 0, linkTint: GOLD_LINK },
      { source: 'fashion_leather_goods', target: 'revenue', value: 37.8, sourceWidth: 173, targetWidth: 173, y0: 624.5, y1: 797.5, sourceOrder: 0, targetOrder: 1, linkTint: GOLD_LINK },
      { source: 'perfumes_cosmetics', target: 'revenue', value: 8.2, sourceWidth: 38, targetWidth: 38, y0: 861, y1: 903, sourceOrder: 0, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'watches_jewelry', target: 'revenue', value: 10.5, sourceWidth: 48, targetWidth: 48, y0: 1021, y1: 946, sourceOrder: 0, targetOrder: 3, linkTint: GOLD_LINK },
      { source: 'selective_retailing', target: 'revenue', value: 18.3, sourceWidth: 84, targetWidth: 84, y0: 1202, y1: 1012, sourceOrder: 0, targetOrder: 4, linkTint: GOLD_LINK },
      { source: 'other_activities_eliminations', target: 'revenue', value: 0.7, sourceWidth: 3, targetWidth: 3, y0: 1341.5, y1: 1053.5, sourceOrder: 0, targetOrder: 5, linkTint: GOLD_LINK },
      { source: 'revenue', target: 'gross_profit', value: 53.5, sourceWidth: 246, targetWidth: 246, y0: 809, y1: 717, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 27.3, sourceWidth: 125, targetWidth: 125, y0: 992.5, y1: 1071.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 17.1, sourceWidth: 78, targetWidth: 78, y0: 633, y1: 555, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 36.4, sourceWidth: 168, targetWidth: 167, y0: 756, y1: 853.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 11.2, sourceWidth: 51, targetWidth: 51, y0: 541.5, y1: 438.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 5.5, sourceWidth: 25, targetWidth: 25, y0: 579.5, y1: 654.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.4, sourceWidth: 2, targetWidth: 2, y0: 593, y1: 760, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 29.9, sourceWidth: 137, targetWidth: 137, y0: 838.5, y1: 907.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'general_administrative', value: 5.9, sourceWidth: 27, targetWidth: 27, y0: 920.5, y1: 1133.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.6, sourceWidth: 3, targetWidth: 3, y0: 935.5, y1: 1301.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '路威酩轩 · 2025 财年',
        meta: { title: '路威酩轩 2025 财年利润表', titleTextLength: 1720 },
        nodes: {
          wines_spirits: { label: ['葡萄酒', '与烈酒'] }, fashion_leather_goods: { label: ['时装与', '皮具'] }, perfumes_cosmetics: { label: ['香水与', '美妆'] }, watches_jewelry: { label: ['腕表与', '珠宝'] }, selective_retailing: { label: ['精选', '零售'] }, other_activities_eliminations: { label: '其他' }, revenue: { label: '收入' }, gross_profit: { label: '毛利润' }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润' }, operating_expenses: { label: ['营业', '费用'] }, net_profit: { label: '净利润' }, tax: { label: '税费' }, other: { label: '其他' }, sales_marketing: { label: ['销售与', '市场费用'] }, general_administrative: { label: ['一般及', '行政费用'] }, other_opex: { label: '其他运营费用' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
