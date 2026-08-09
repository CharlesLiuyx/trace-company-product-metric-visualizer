/* LVMH H1 FY26 income statement (EUR B), measured from the processed reference. */
(function () {
  const TITLE = '#155077';
  const GOLD = '#b39769';
  const GOLD_LINK = '#d6c9b4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const OTHER_FACE = '#d29191';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const BG = '#f2f2f2';
  const LEFT_CATEGORY_LABEL_RIGHT = 450;
  const RIGHT_LABEL_X = 2538;

  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    semanticRole: options.semanticRole || '',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    lines,
  });
  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight == null ? 400 : options.weight,
    color: options.color,
  });
  const centeredSideName = (centerY, text, size) => block(
    LEFT_CATEGORY_LABEL_RIGHT,
    centerY - (text.length * size + Math.max(0, text.length - 1) * 7) / 2,
    text.map((part) => line(part, size, { weight: 800, color: GOLD })),
    { anchor: 'end', lineGap: 7, semanticRole: 'centered-side-label' },
  );

  const annotations = (zh) => `
    <g data-typography-role="view">
      <text x="303" y="251" text-anchor="start" font-size="31" font-weight="800" fill="${TITLE}">${zh ? '单位：欧元' : 'in euros'}</text>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      wines: ['葡萄酒', '与烈酒'],
      fashion: ['时装与', '皮具'],
      perfumes: ['香水与', '美妆'],
      watches: ['腕表与', '珠宝'],
      selective: ['精选', '零售'],
      otherActivities: '其他',
      revenue: '收入',
      gross: '毛利润',
      cost: '销售成本',
      operating: '营业利润',
      expenses: ['营业', '费用'],
      net: '净利润',
      tax: '税费',
      other: '其他',
      sales: ['销售与', '市场费用'],
      general: ['一般及', '行政费用'],
      yoy5: '同比 (5%)',
      yoy4: '同比 (4%)',
      yoy3: '同比 (3%)',
      yoy2: '同比 (2%)',
      yoy0: '同比 +0%',
      yoyPlus3: '同比 +3%',
      ppPlus0: '同比 +0 个百分点',
      ppParen0: '同比 0 个百分点',
      pp1: '同比 +1 个百分点',
      rev67: '占收入 67%',
      rev23: '占收入 23%',
      rev16: '占收入 16%',
      rev37: '占收入 37%',
      rev7: '占收入 7%',
    } : {
      wines: ['Wines', '& Spirits'],
      fashion: ['Fashion &', 'Leather Goods'],
      perfumes: ['Perfumes', '& Cosmetics'],
      watches: ['Watches', '& Jewelry'],
      selective: ['Selective', 'retailers'],
      otherActivities: 'Other',
      revenue: 'Revenue',
      gross: 'Gross profit',
      cost: 'Cost of sales',
      operating: 'Operating profit',
      expenses: ['Operating', 'expenses'],
      net: 'Net profit',
      tax: 'Tax',
      other: 'Other',
      sales: ['Sales &', 'Marketing'],
      general: ['General &', 'Administrative'],
      yoy5: '(5%) Y/Y',
      yoy4: '(4%) Y/Y',
      yoy3: '(3%) Y/Y',
      yoy2: '(2%) Y/Y',
      yoy0: '+0% Y/Y',
      yoyPlus3: '+3% Y/Y',
      ppPlus0: '+0pp Y/Y',
      ppParen0: '(0pp) Y/Y',
      pp1: '+1pp Y/Y',
      rev67: '67% of revenue',
      rev23: '23% of revenue',
      rev16: '16% of revenue',
      rev37: '37% of revenue',
      rev7: '7% of revenue',
    };
    const name = (text, size = 40, color) => line(text, size, { weight: 800, color });
    const value = (size = 40, color) => line('$value', size, { color });
    const note = (text, size = 29) => line(text, size, { color: NOTE });

    return {
      wines_spirits: { blocks: [
        block(512, 258, [value(40, GOLD), note(t.yoy0)], { lineGap: 8 }),
        block(344, 306, t.wines.map((part) => name(part, 40, GOLD)), { lineGap: 7, semanticRole: 'reference-offset-side-label' }),
      ] },
      fashion_leather_goods: { blocks: [
        block(512, 420, [value(40, GOLD), note(t.yoy5)], { lineGap: 8 }),
        centeredSideName(585, t.fashion, zh ? 37 : 39),
      ] },
      perfumes_cosmetics: { blocks: [
        block(512, 730, [value(40, GOLD), note(t.yoy4)], { lineGap: 0 }),
        centeredSideName(824.5, t.perfumes, 37),
      ] },
      watches_jewelry: { blocks: [
        block(512, 894, [value(40, GOLD), note(t.yoyPlus3)], { lineGap: 0 }),
        centeredSideName(998, t.watches, 37),
      ] },
      selective_retailing: { blocks: [
        block(512, 1052, [value(40, GOLD), note(t.yoy2)], { lineGap: 0 }),
        centeredSideName(1168.5, t.selective, 39),
      ] },
      other_activities_eliminations: { blocks: [
        block(512, 1287, [value(40, GOLD)]),
        block(344, 1306, [name(t.otherActivities, 39, GOLD)], { semanticRole: 'reference-offset-side-label' }),
      ] },
      revenue: { blocks: [
        block(978, 489, [name(t.revenue, 40, GOLD), value(40, GOLD), note(t.yoy3)], { lineGap: 8 }),
      ] },
      gross_profit: { blocks: [
        block(1445, 351, [name(t.gross, 40, GREEN_LABEL), value(40, GREEN_LABEL), note(t.rev67), note(t.ppPlus0)], { lineGap: 8 }),
      ] },
      cost_of_sales: { blocks: [
        block(1445, 1047, [name(t.cost, 40, RED_LABEL), value(40, RED_LABEL)], { lineGap: 8 }),
      ] },
      operating_profit: { blocks: [
        block(1914, 231, [name(t.operating, 40, GREEN_LABEL), value(40, GREEN_LABEL), note(t.rev23), note(t.ppParen0)], { lineGap: 8 }),
      ] },
      operating_expenses: { blocks: [
        block(1914, 862, [...t.expenses.map((part) => name(part, 40, RED_LABEL)), value(40, RED_LABEL)], { lineGap: 8 }),
      ] },
      net_profit: { blocks: [
        block(2531.5, 268, [name(t.net, 40, GREEN_LABEL), value(40, GREEN_LABEL), note(t.rev16), note(t.pp1)], { lineGap: 8 }),
      ] },
      tax: { blocks: [
        block(2531, 547, [name(t.tax, 36, RED_LABEL), value(36, RED_LABEL)], { lineGap: 8 }),
      ] },
      other: { blocks: [
        block(RIGHT_LABEL_X, 668, [name(t.other, 34, RED_LABEL), value(34, RED_LABEL)], { lineGap: 8 }),
      ] },
      sales_marketing: { blocks: [
        block(RIGHT_LABEL_X, 854, [...t.sales.map((part) => name(part, 37, RED_LABEL)), value(37, RED_LABEL), note(t.rev37)], { lineGap: 8 }),
      ] },
      general_administrative: { blocks: [
        block(RIGHT_LABEL_X, 1094, [...t.general.map((part) => name(part, 32, RED_LABEL)), value(32, RED_LABEL), note(t.rev7)], { lineGap: 8 }),
      ] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lvmh-h1-fy26',
    name: 'LVMH · H1 FY26',
    company: 'LVMH',
    meta: {
      company: 'LVMH',
      title: 'LVMH H1 FY26 Income Statement',
      period: '',
      periodNote: '',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/lvmh-h1-fy26.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 200,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2072,
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
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'lvmh-company-wordmark', href: 'data/assets/raster-annotations/lvmh/company-wordmark.png', x: 723, y: 254, width: 479, height: 148 },
      { key: 'lvmh-business-wines-spirits-cluster', href: 'data/assets/raster-annotations/lvmh/business-wines-spirits-cluster.png', x: 6, y: 249, width: 177, height: 192 },
      { key: 'lvmh-business-fashion-leather-goods-cluster', href: 'data/assets/raster-annotations/lvmh/business-fashion-leather-goods-cluster.png', x: 7, y: 492, width: 158, height: 167 },
      { key: 'lvmh-business-perfumes-cosmetics-cluster-h1-fy26', href: 'data/assets/raster-annotations/lvmh/business-perfumes-cosmetics-cluster-h1-fy26.png', x: 9, y: 753, width: 167, height: 120 },
      { key: 'lvmh-business-watches-jewelry-cluster', href: 'data/assets/raster-annotations/lvmh/business-watches-jewelry-cluster.png', x: 10, y: 941, width: 176, height: 107 },
      { key: 'lvmh-business-selective-retailing-cluster-h1-fy26', href: 'data/assets/raster-annotations/lvmh/business-selective-retailing-cluster-h1-fy26.png', x: 17, y: 1058, width: 162, height: 167 },
      { key: 'lvmh-business-other-cluster', href: 'data/assets/raster-annotations/lvmh/business-other-cluster.png', x: 30, y: 1272, width: 137, height: 94 },
    ],
    layout: {
      scale: 1,
      nodes: {
        wines_spirits: { x: 477, y: 354, width: 71, height: 18 },
        fashion_leather_goods: { x: 477, y: 515, width: 71, height: 140 },
        perfumes_cosmetics: { x: 477, y: 810, width: 71, height: 29 },
        watches_jewelry: { x: 477, y: 979, width: 71, height: 38 },
        selective_retailing: { x: 477, y: 1137, width: 71, height: 63 },
        other_activities_eliminations: { x: 477, y: 1343, width: 71, height: 1 },
        revenue: { x: 944, y: 630, width: 71, height: 299 },
        gross_profit: { x: 1411, y: 528, width: 71, height: 202 },
        cost_of_sales: { x: 1411, y: 934, width: 71, height: 97 },
        operating_profit: { x: 1879, y: 408, width: 70, height: 67 },
        operating_expenses: { x: 1879, y: 713, width: 70, height: 133 },
        net_profit: { x: 2345, y: 296, width: 71, height: 45 },
        tax: { x: 2345, y: 577, width: 71, height: 18 },
        other: { x: 2345, y: 704, width: 71, height: 3 },
        sales_marketing: { x: 2345, y: 862, width: 71, height: 112 },
        general_administrative: { x: 2345, y: 1139, width: 71, height: 20 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'wines_spirits', col: 0, order: 0, type: 'source', label: ['Wines', '& Spirits'], value: 2.6, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'fashion_leather_goods', col: 0, order: 1, type: 'source', label: ['Fashion &', 'Leather Goods'], value: 18.1, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'perfumes_cosmetics', col: 0, order: 2, type: 'source', label: ['Perfumes', '& Cosmetics'], value: 3.9, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'watches_jewelry', col: 0, order: 3, type: 'source', label: ['Watches', '& Jewelry'], value: 5.2, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'selective_retailing', col: 0, order: 4, type: 'source', label: ['Selective', 'retailers'], value: 8.4, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'other_activities_eliminations', col: 0, order: 5, type: 'source', label: 'Other', value: 0.4, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 38.6, color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 25.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 12.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 8.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 17.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 6.0, valueText: '€6.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 2.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.1, valueText: '(€0.1B)', color: OTHER_FACE, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 3, type: 'cost', label: ['Sales &', 'Marketing'], value: 14.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_administrative', col: 4, order: 4, type: 'cost', label: ['General &', 'Administrative'], value: 2.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'wines_spirits', target: 'revenue', value: 2.6, sourceWidth: 18, targetWidth: 20, y0: 363, y1: 640, sourceOrder: 0, targetOrder: 0, linkTint: GOLD_LINK },
      { source: 'fashion_leather_goods', target: 'revenue', value: 18.1, sourceWidth: 140, targetWidth: 140, y0: 585, y1: 720, sourceOrder: 0, targetOrder: 1, linkTint: GOLD_LINK },
      { source: 'perfumes_cosmetics', target: 'revenue', value: 3.9, sourceWidth: 29, targetWidth: 30, y0: 824.5, y1: 805, sourceOrder: 0, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'watches_jewelry', target: 'revenue', value: 5.2, sourceWidth: 38, targetWidth: 40, y0: 998, y1: 840, sourceOrder: 0, targetOrder: 3, linkTint: GOLD_LINK },
      { source: 'selective_retailing', target: 'revenue', value: 8.4, sourceWidth: 63, targetWidth: 65, y0: 1168.5, y1: 892.5, sourceOrder: 0, targetOrder: 4, linkTint: GOLD_LINK },
      { source: 'other_activities_eliminations', target: 'revenue', value: 0.4, sourceWidth: 1, targetWidth: 3, y0: 1343.5, y1: 927.5, sourceOrder: 0, targetOrder: 5, linkTint: GOLD_LINK },
      { source: 'revenue', target: 'gross_profit', value: 25.9, sourceWidth: 202, targetWidth: 202, y0: 731, y1: 629, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 12.7, sourceWidth: 97, targetWidth: 97, y0: 880.5, y1: 982.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 8.7, sourceWidth: 67, targetWidth: 67, y0: 561.5, y1: 441.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 17.3, sourceWidth: 134, targetWidth: 133, y0: 663, y1: 779.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 6.0, sourceWidth: 45, targetWidth: 45, y0: 430.5, y1: 318.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 2.6, sourceWidth: 19, targetWidth: 18, y0: 462.5, y1: 586, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 473.5, y1: 705.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 14.4, sourceWidth: 112, targetWidth: 112, y0: 769, y1: 918, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'general_administrative', value: 2.9, sourceWidth: 21, targetWidth: 20, y0: 835.5, y1: 1149, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '路威酩轩 · 2026 财年上半年',
        meta: { title: '路威酩轩 2026 财年上半年利润表', titleTextLength: 1830 },
        annotationsSvg: annotations(true),
        nodes: {
          wines_spirits: { label: ['葡萄酒', '与烈酒'] },
          fashion_leather_goods: { label: ['时装与', '皮具'] },
          perfumes_cosmetics: { label: ['香水与', '美妆'] },
          watches_jewelry: { label: ['腕表与', '珠宝'] },
          selective_retailing: { label: ['精选', '零售'] },
          other_activities_eliminations: { label: '其他' },
          revenue: { label: '收入' },
          gross_profit: { label: '毛利润' },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润' },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          other: { label: '其他' },
          sales_marketing: { label: ['销售与', '市场费用'] },
          general_administrative: { label: ['一般及', '行政费用'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
