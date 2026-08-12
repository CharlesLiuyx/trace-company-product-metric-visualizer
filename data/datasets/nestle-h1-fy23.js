/* Nestlé H1 FY23 income statement (CHF B), measured from the 2667x1500
 * Source. Brand clusters are validated runtime raster annotations; all
 * financial nodes, ribbons, labels, and the unit note remain renderer-owned. */
(function () {
  const TITLE = '#155077';
  const BROWN = '#63503a';
  const BROWN_LABEL = '#63513d';
  const BROWN_LINK = '#b2a99f';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const OTHER_GREEN_LABEL = '#008e00';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const BG = '#f2f2f2';
  const SOURCE_LABEL_RIGHT = 444;
  const RIGHT_LABEL_X = 2537;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight == null ? 400 : options.weight,
    color: options.color,
    ...(options.textLength ? { textLength: options.textLength } : {}),
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}),
    lines,
  });
  const sideName = (top, parts, size = 40) => block(
    SOURCE_LABEL_RIGHT,
    top,
    parts.map((part) => line(part, size, { weight: 800, color: BROWN_LABEL })),
    { anchor: 'end', lineGap: 7, semanticRole: 'centered-side-label' },
  );

  const annotations = (zh) => `
    <g data-typography-role="view">
      <text x="275" y="272" text-anchor="start" font-family="Noto Sans,Arial,sans-serif"
        font-size="${zh ? 34 : 40}" font-weight="800" fill="${TITLE}">${zh ? '单位：CHF' : 'in CHF'}</text>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      powdered: ['粉末及', '液体饮料'], water: ['水业务'], milk: ['乳制品及', '冰淇淋'],
      nutrition: ['营养与', '健康科学'], prepared: ['预制食品及', '烹饪辅料'],
      confectionery: ['糖果业务'], petcare: ['宠物护理'], sales: '销售额',
      gross: '毛利润', cost: '销售成本', otherRevenue: '其他收入', operating: '营业利润',
      operatingExpenses: ['营业', '费用'], otherIncome: '其他', net: '净利润', tax: '税费',
      financial: '财务费用', marketing: ['营销及', '管理费用'], distribution: '分销费用',
      rnd: '研发费用', otherExpense: '其他',
      yoy0: '同比 +0%', yoyNeg5: '同比 (5%)', yoy2: '同比 +2%', yoyNeg3: '同比 (3%)',
      yoy3: '同比 +3%', yoy9: '同比 +9%', margin46: '利润率 46%', pp0: '同比 +0 个百分点',
      margin16: '利润率 16%', pp1: '同比 +1 个百分点', margin12: '利润率 12%', yoy1: '同比 +1%',
    } : {
      powdered: ['Powdered &', 'Liquid Beverages'], water: ['Water'], milk: ['Milk products', '& Ice cream'],
      nutrition: ['Nutrition &', 'Health Science'], prepared: ['Prepared dishes', '& Cooking aid'],
      confectionery: ['Confectionery'], petcare: ['PetCare'], sales: 'Sales', gross: 'Gross profit',
      cost: 'Cost of sales', otherRevenue: 'Other revenue', operating: 'Operating profit',
      operatingExpenses: ['Operating', 'expenses'], otherIncome: 'Other', net: 'Net profit', tax: 'Tax',
      financial: 'Financial', marketing: ['Marketing &', 'Administration'], distribution: 'Distribution',
      rnd: 'R&D', otherExpense: 'Other',
      yoy0: '+0% Y/Y', yoyNeg5: '(5%) Y/Y', yoy2: '+2% Y/Y', yoyNeg3: '(3%) Y/Y',
      yoy3: '+3% Y/Y', yoy9: '+9% Y/Y', margin46: '46% margin', pp0: '+0pp Y/Y',
      margin16: '16% margin', pp1: '+1pp Y/Y', margin12: '12% margin', yoy1: '+1% Y/Y',
    };
    const name = (text, size = 40, color = BROWN_LABEL) => line(text, size, { weight: 800, color });
    const value = (size = 40, color = BROWN_LABEL) => line('$value', size, { color });
    const note = (text, size = 29) => line(text, size, { color: NOTE });

    return {
      powdered_liquid_beverages: { blocks: [
        block(503, 238, [value(), note(t.yoy0)], { lineGap: 9 }),
        sideName(326, t.powdered, zh ? 37 : 40),
      ] },
      water: { blocks: [
        block(503, 437, [value(), note(t.yoyNeg5)], { lineGap: 9 }),
        block(SOURCE_LABEL_RIGHT, 520, [line(t.water[0], 40, { weight: 800, color: BROWN_LABEL, textLength: 149 })],
          { anchor: 'end', lineGap: 7, semanticRole: 'centered-side-label' }),
      ] },
      milk_ice_cream: { blocks: [
        block(503, 578, [value(), note(t.yoy0)], { lineGap: 9 }),
        sideName(642, t.milk, zh ? 37 : 40),
      ] },
      nutrition_health_science: { blocks: [
        block(503, 737, [value(), note(t.yoy2)], { lineGap: 9 }),
        sideName(810, t.nutrition, zh ? 37 : 40),
      ] },
      prepared_dishes_cooking_aids: { blocks: [
        block(503, 916, [value(), note(t.yoyNeg3)], { lineGap: 9 }),
        sideName(985, t.prepared, zh ? 36 : 40),
      ] },
      confectionery: { blocks: [
        block(499, 1078, [value(), note(t.yoy3)], { lineGap: 9 }),
        sideName(1163, t.confectionery, zh ? 38 : 40),
      ] },
      petcare: { blocks: [
        block(499, 1212, [value(), note(t.yoy9)], { lineGap: 9 }),
        sideName(1326, t.petcare, zh ? 38 : 40),
      ] },
      revenue: { blocks: [
        block(969, 548, [name(t.sales), value(), note(t.yoy2)], { lineGap: 9 }),
      ] },
      gross_profit: { blocks: [
        block(1436.5, 418, [name(t.gross, 40, GREEN_LABEL), value(40, GREEN_LABEL), note(t.margin46), note(t.pp0)], { lineGap: 8 }),
      ] },
      cost_of_sales: { blocks: [
        block(1441.5, 1158, [name(t.cost, 40, RED_LABEL), value(40, RED_LABEL)], { lineGap: 8 }),
      ] },
      other_revenue: { blocks: [
        block(1325, 836, [name(t.otherRevenue, zh ? 31 : 32, BROWN_LABEL), value(31, BROWN_LABEL)], { lineGap: 8 }),
      ] },
      operating_profit: { blocks: [
        block(1890, 279, [name(t.operating, 40, GREEN_LABEL), value(40, GREEN_LABEL), note(t.margin16), note(t.pp1)], { lineGap: 8 }),
      ] },
      operating_expenses: { blocks: [
        block(1895, 900, [...t.operatingExpenses.map((part) => name(part, 40, RED_LABEL)), value(40, RED_LABEL)], { lineGap: 7 }),
      ] },
      other_income: { blocks: [
        block(2227, 457, [name(t.otherIncome, 31, OTHER_GREEN_LABEL), value(31, OTHER_GREEN_LABEL)], { lineGap: 8 }),
      ] },
      net_profit: { blocks: [
        block(2538, 298, [name(t.net, 40, GREEN_LABEL), value(40, GREEN_LABEL), note(t.margin12), note(t.yoy1)], { lineGap: 8 }),
      ] },
      tax: { blocks: [block(RIGHT_LABEL_X, 544, [name(t.tax, 31, RED_LABEL), value(31, RED_LABEL)], { lineGap: 8 })] },
      financial: { blocks: [block(RIGHT_LABEL_X, 684, [name(t.financial, 31, RED_LABEL), value(31, RED_LABEL)], { lineGap: 8 })] },
      marketing_administration: { blocks: [
        block(RIGHT_LABEL_X, 848, [...t.marketing.map((part) => name(part, 31, RED_LABEL)), value(31, RED_LABEL)], { lineGap: 7 }),
      ] },
      distribution: { blocks: [block(RIGHT_LABEL_X, 1022, [name(t.distribution, 31, RED_LABEL), value(31, RED_LABEL)], { lineGap: 8 })] },
      rnd: { blocks: [block(RIGHT_LABEL_X, 1146, [name(t.rnd, 31, RED_LABEL), value(31, RED_LABEL)], { lineGap: 8 })] },
      other_operating_expenses: { blocks: [block(RIGHT_LABEL_X, 1275, [name(t.otherExpense, 31, RED_LABEL), value(31, RED_LABEL)], { lineGap: 8 })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nestle-h1-fy23',
    name: 'Nestlé · H1 FY23',
    company: 'Nestlé',
    meta: {
      company: 'Nestlé',
      title: 'Nestlé H1 FY23 Income Statement',
      period: 'H1 FY23',
      periodNote: 'Six months ended June 30, 2023',
      currency: 'CHF',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nestle-h1-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2112,
      hidePeriodStamp: true,
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
        source: { node: BROWN, label: BROWN_LABEL },
        hub: { node: BROWN, label: BROWN_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BROWN_LINK, hub: BROWN_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'nestle-company-wordmark-h1-fy23', href: 'data/assets/raster-annotations/nestle/company-wordmark-h1-fy23.png', x: 850, y: 260, width: 240, height: 240 },
      { key: 'nestle-powdered-liquid-beverages-brands-h1-fy23', href: 'data/assets/raster-annotations/nestle/powdered-liquid-beverages-brands-h1-fy23.png', x: 0, y: 255, width: 200, height: 120 },
      { key: 'nestle-water-brands-h1-fy23', href: 'data/assets/raster-annotations/nestle/water-brands-h1-fy23.png', x: 18, y: 460, width: 170, height: 150 },
      { key: 'nestle-milk-ice-cream-brand-h1-fy23', href: 'data/assets/raster-annotations/nestle/milk-ice-cream-brand-h1-fy23.png', x: 8, y: 668, width: 172, height: 96 },
      { key: 'nestle-nutrition-health-science-brand-h1-fy23', href: 'data/assets/raster-annotations/nestle/nutrition-health-science-brand-h1-fy23.png', x: 0, y: 810, width: 160, height: 70 },
      { key: 'nestle-prepared-dishes-brand-h1-fy23', href: 'data/assets/raster-annotations/nestle/prepared-dishes-brand-h1-fy23.png', x: 10, y: 1033, width: 145, height: 84 },
      { key: 'nestle-confectionery-brand-h1-fy23', href: 'data/assets/raster-annotations/nestle/confectionery-brand-h1-fy23.png', x: 20, y: 1135, width: 135, height: 90 },
      { key: 'nestle-petcare-brand-h1-fy23', href: 'data/assets/raster-annotations/nestle/petcare-brand-h1-fy23.png', x: 5, y: 1320, width: 180, height: 65 },
    ],
    layout: {
      scale: 7.257,
      nodes: {
        powdered_liquid_beverages: { x: 467, y: 328, width: 71, height: 87 },
        water: { x: 467, y: 539, width: 71, height: 10 },
        milk_ice_cream: { x: 467, y: 671, width: 71, height: 37 },
        nutrition_health_science: { x: 467, y: 831, width: 71, height: 55 },
        prepared_dishes_cooking_aids: { x: 467, y: 1012, width: 71, height: 41 },
        confectionery: { x: 467, y: 1172, width: 71, height: 24 },
        petcare: { x: 467, y: 1317, width: 71, height: 67 },
        revenue: { x: 934, y: 694, width: 70, height: 336 },
        other_revenue: { x: 1290, y: 821, width: 71, height: 3 },
        gross_profit: { x: 1401, y: 604, width: 71, height: 154 },
        cost_of_sales: { x: 1406, y: 957, width: 71, height: 181 },
        operating_profit: { x: 1859, y: 467, width: 70, height: 51 },
        operating_expenses: { x: 1856, y: 771, width: 70, height: 100 },
        other_income: { x: 2194, y: 438, width: 70, height: 2 },
        net_profit: { x: 2335, y: 322, width: 71, height: 38 },
        tax: { x: 2335, y: 584, width: 71, height: 9 },
        financial: { x: 2335, y: 712, width: 71, height: 4 },
        marketing_administration: { x: 2335, y: 859, width: 71, height: 62 },
        distribution: { x: 2335, y: 1047, width: 71, height: 26 },
        rnd: { x: 2335, y: 1181, width: 71, height: 4 },
        other_operating_expenses: { x: 2335, y: 1317, width: 71, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'powdered_liquid_beverages', col: 0, order: 0, type: 'source', label: ['Powdered &', 'Liquid Beverages'], value: 12.3, valueText: '12.3B', notes: ['+0% Y/Y'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'water', col: 0, order: 1, type: 'source', label: 'Water', value: 1.7, valueText: '1.7B', notes: ['(5%) Y/Y'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'milk_ice_cream', col: 0, order: 2, type: 'source', label: ['Milk products', '& Ice cream'], value: 5.4, valueText: '5.4B', notes: ['+0% Y/Y'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'nutrition_health_science', col: 0, order: 3, type: 'source', label: ['Nutrition &', 'Health Science'], value: 7.8, valueText: '7.8B', notes: ['+2% Y/Y'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'prepared_dishes_cooking_aids', col: 0, order: 4, type: 'source', label: ['Prepared dishes', '& Cooking aid'], value: 5.9, valueText: '5.9B', notes: ['(3%) Y/Y'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'confectionery', col: 0, order: 5, type: 'source', label: 'Confectionery', value: 3.7, valueText: '3.7B', notes: ['+3% Y/Y'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'petcare', col: 0, order: 6, type: 'source', label: 'PetCare', value: 9.4, valueText: '9.4B', notes: ['+9% Y/Y'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Sales', value: 46.3, valueText: '46.3B', notes: ['+2% Y/Y'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'other_revenue', col: 2, order: 0, type: 'source', label: 'Other revenue', value: 0.2, valueText: '0.2B', color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 21.3, valueText: '21.3B', notes: ['46% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 25.2, valueText: '(25.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 7.3, valueText: '7.3B', notes: ['16% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 14.0, valueText: '(14.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.7, valueText: '0.7B', color: GREEN, labelColor: OTHER_GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 5.8, valueText: '5.8B', notes: ['12% margin', '+1% Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 1.5, valueText: '(1.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'financial', col: 6, order: 2, type: 'cost', label: 'Financial', value: 0.7, valueText: '(0.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_administration', col: 6, order: 3, type: 'cost', label: ['Marketing &', 'Administration'], value: 8.6, valueText: '(8.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'distribution', col: 6, order: 4, type: 'cost', label: 'Distribution', value: 4.0, valueText: '(4.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 5, type: 'cost', label: 'R&D', value: 0.8, valueText: '(0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_expenses', col: 6, order: 6, type: 'cost', label: 'Other', value: 0.6, valueText: '(0.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'powdered_liquid_beverages', target: 'revenue', value: 12.3, sourceWidth: 87, targetWidth: 89, y0: 371.5, y1: 738.5, sourceOrder: 0, targetOrder: 0, linkTint: BROWN_LINK },
      { source: 'water', target: 'revenue', value: 1.7, sourceWidth: 10, targetWidth: 12, y0: 544, y1: 789, sourceOrder: 0, targetOrder: 1, linkTint: BROWN_LINK },
      { source: 'milk_ice_cream', target: 'revenue', value: 5.4, sourceWidth: 37, targetWidth: 39, y0: 689.5, y1: 814.5, sourceOrder: 0, targetOrder: 2, linkTint: BROWN_LINK },
      { source: 'nutrition_health_science', target: 'revenue', value: 7.8, sourceWidth: 55, targetWidth: 57, y0: 858.5, y1: 862.5, sourceOrder: 0, targetOrder: 3, linkTint: BROWN_LINK },
      { source: 'prepared_dishes_cooking_aids', target: 'revenue', value: 5.9, sourceWidth: 41, targetWidth: 43, y0: 1032.5, y1: 912.5, sourceOrder: 0, targetOrder: 4, linkTint: BROWN_LINK },
      { source: 'confectionery', target: 'revenue', value: 3.7, sourceWidth: 24, targetWidth: 27, y0: 1184, y1: 947.5, sourceOrder: 0, targetOrder: 5, linkTint: BROWN_LINK },
      { source: 'petcare', target: 'revenue', value: 9.4, sourceWidth: 67, targetWidth: 69, y0: 1350.5, y1: 995.5, sourceOrder: 0, targetOrder: 6, linkTint: BROWN_LINK },
      { source: 'revenue', target: 'gross_profit', value: 21.1, sourceWidth: 153, targetWidth: 151, y0: 770.5, y1: 679.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 25.2, sourceWidth: 183, targetWidth: 181, y0: 938.5, y1: 1047.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_revenue', target: 'gross_profit', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 822.5, y1: 756.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 7.3, sourceWidth: 52, targetWidth: 51, y0: 630, y1: 492.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 14.0, sourceWidth: 102, targetWidth: 100, y0: 707, y1: 821, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 5.1, sourceWidth: 36, targetWidth: 34, y0: 485, y1: 339, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.5, sourceWidth: 11, targetWidth: 9, y0: 508.5, y1: 588.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'financial', value: 0.7, sourceWidth: 4, targetWidth: 4, y0: 516, y1: 714, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.7, sourceWidth: 2, targetWidth: 4, y0: 439, y1: 358, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'marketing_administration', value: 8.6, sourceWidth: 61, targetWidth: 62, y0: 801.5, y1: 890, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'distribution', value: 4.0, sourceWidth: 29, targetWidth: 26, y0: 846.5, y1: 1060, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 6, targetWidth: 4, y0: 864, y1: 1183, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating_expenses', value: 0.6, sourceWidth: 4, targetWidth: 3, y0: 869, y1: 1318.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '雀巢 · 2023 财年上半年',
        meta: {
          title: '雀巢 2023 财年上半年利润表',
          period: '2023 财年上半年',
          periodNote: '截至 2023 年 6 月 30 日的六个月',
          titleSize: 112,
          titleTextLength: 1640,
        },
        annotationsSvg: annotations(true),
        nodes: {
          powdered_liquid_beverages: { label: ['粉末及', '液体饮料'], notes: ['同比 +0%'] },
          water: { label: '水业务', notes: ['同比 (5%)'] },
          milk_ice_cream: { label: ['乳制品及', '冰淇淋'], notes: ['同比 +0%'] },
          nutrition_health_science: { label: ['营养与', '健康科学'], notes: ['同比 +2%'] },
          prepared_dishes_cooking_aids: { label: ['预制食品及', '烹饪辅料'], notes: ['同比 (3%)'] },
          confectionery: { label: '糖果业务', notes: ['同比 +3%'] },
          petcare: { label: '宠物护理', notes: ['同比 +9%'] },
          revenue: { label: '销售额', notes: ['同比 +2%'] },
          other_revenue: { label: '其他收入' }, gross_profit: { label: '毛利润', notes: ['利润率 46%', '同比 +0 个百分点'] },
          cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 +1 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +1%'] }, tax: { label: '税费' },
          financial: { label: '财务费用' }, marketing_administration: { label: ['营销及', '管理费用'] },
          distribution: { label: '分销费用' }, rnd: { label: '研发费用' }, other_operating_expenses: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
