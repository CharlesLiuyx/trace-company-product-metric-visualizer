/* Oxy Q3 FY25 income statement ($B), measured against the local reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#00539b';
  const HUB_BLUE = '#0b5da5';
  const BLUE_LINK = '#85aaca';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const labels = (zh = false) => {
    const copy = zh
      ? {
        oil: '原油',
        ngl: '天然气液',
        nglNote: '天然气液体',
        gas: '天然气',
        otherRevenue: '其他',
        oilGas: '油气业务',
        chemical: '化工',
        midstream: '中游与营销',
        revenue: '收入',
        pretax: '税前利润',
        otherIncome: '其他收入',
        otherDeduction: '其他扣减',
        costs: ['成本及', '其他扣减'],
        net: '净利润',
        yoyOil: '同比 (10%)',
        yoyNgl: '同比 (6%)',
        yoyGas: '同比 +119%',
        yoyOilGas: '同比 (5%)',
        yoyChemical: '同比 (6%)',
        yoyMidstream: '同比 (30%)',
        yoyRevenue: '同比 (6%)',
        marginPretax: '利润率 17%',
        yoyPretax: '同比 (5 个百分点)',
        marginNet: '利润率 13%',
        yoyNet: '同比 (3 个百分点)',
        tax: '所得税（$0.3B）',
        da: '折旧及摊销（$2.1B）',
        oilGasOpex: ['油气运营费用', '（$1.2B）'],
        chemicalMidstream: ['化工与中游', '（$0.8B）'],
        otherCost: '其他（$0.5B）',
        transportation: ['运输与集输', '（$0.4B）'],
        interest: '利息（$0.3B）',
        sga: ['销售、一般及', '行政费用（$0.3B）'],
        taxesNonIncome: ['税费（不含所得税）', '（$0.2B）'],
      }
      : {
        oil: 'Oil',
        ngl: 'NGL',
        nglNote: 'Natural Gas Liquid',
        gas: 'Gas',
        otherRevenue: 'Other',
        oilGas: 'Oil & Gas',
        chemical: 'Chemical',
        midstream: 'Midstream & Marketing',
        revenue: 'Revenue',
        pretax: 'Pretax income',
        otherIncome: 'Other',
        otherDeduction: 'Other',
        costs: ['Costs and', 'other deductions'],
        net: 'Net income',
        yoyOil: '(10%) Y/Y',
        yoyNgl: '(6%) Y/Y',
        yoyGas: '+119% Y/Y',
        yoyOilGas: '(5%) Y/Y',
        yoyChemical: '(6%) Y/Y',
        yoyMidstream: '(30%) Y/Y',
        yoyRevenue: '(6%) Y/Y',
        marginPretax: '17% margin',
        yoyPretax: '(5pp) Y/Y',
        marginNet: '13% margin',
        yoyNet: '(3pp) Y/Y',
        tax: 'Tax ($0.3B)',
        da: 'D&A ($2.1B)',
        oilGasOpex: ['Oil & Gas opex', '($1.2B)'],
        chemicalMidstream: ['Chemical &', 'Midstream ($0.8B)'],
        otherCost: 'Other ($0.5B)',
        transportation: ['Transportation &', 'gathering ($0.4B)'],
        interest: 'Interest ($0.3B)',
        sga: 'SG&A ($0.3B)',
        taxesNonIncome: ['Taxes (non income)', '($0.2B)'],
      };

    const heading = (text, size = 39) => (
      (Array.isArray(text) ? text : [text]).map((line) => ({ text: line, size, weight: 800 }))
    );
    const rightBlock = (lines, top, size = 31, x = 2378, anchor = 'start') => ({
      blocks: [{
        x,
        top,
        anchor,
        lineGap: 6,
        lines: (Array.isArray(lines) ? lines : [lines]).map((text) => ({ text, size, weight: 800 })),
      }],
    });

    return {
      oil: {
        blocks: [
          { x: 397, top: 301, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: copy.yoyOil, size: 28, weight: 400, color: NOTE }] },
          { x: 293, top: 485, anchor: 'end', lines: heading(copy.oil) },
        ],
      },
      ngl: {
        blocks: [
          { x: 390, top: 641, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: copy.yoyNgl, size: 28, weight: 400, color: NOTE }] },
          { x: 286, top: zh ? 708.5 : 706.5, anchor: 'end', lineGap: 7, lines: [{ text: copy.ngl, size: 39, weight: 800 }, { text: copy.nglNote, size: zh ? 25 : 28, weight: 400, color: NOTE }] },
        ],
      },
      gas: {
        blocks: [
          { x: 395, top: 762, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: copy.yoyGas, size: 28, weight: 400, color: NOTE }] },
          { x: 291, top: 846, anchor: 'end', lines: heading(copy.gas) },
        ],
      },
      other_revenue: {
        blocks: [
          { x: 404, top: 906, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400 }] },
          { x: 261, top: 948, anchor: 'end', lines: heading(copy.otherRevenue) },
        ],
      },
      oil_gas: {
        blocks: [{ x: 870, top: 441, anchor: 'middle', lineGap: 8, lines: [...heading(copy.oilGas), { text: '$value', size: 39, weight: 400 }, { text: copy.yoyOilGas, size: 28, weight: 400, color: NOTE }] }],
      },
      chemical: {
        blocks: [
          { x: 870, top: 905, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: copy.yoyChemical, size: 28, weight: 400, color: NOTE }] },
          { x: 779, top: 1006, anchor: 'end', lines: heading(copy.chemical) },
        ],
      },
      midstream_marketing: {
        blocks: [
          { x: 870, top: 1095, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: copy.yoyMidstream, size: 28, weight: 400, color: NOTE }] },
          { x: 756, top: zh ? 1169.5 : 1168.5, anchor: 'end', lines: heading(copy.midstream, zh ? 36 : 39) },
        ],
      },
      revenue: {
        blocks: [{ x: 1337, top: 572, anchor: 'middle', lineGap: 8, lines: [...heading(copy.revenue), { text: '$value', size: 39, weight: 400 }, { text: copy.yoyRevenue, size: 28, weight: 400, color: NOTE }] }],
      },
      pretax_income: {
        blocks: [{ x: 1805, top: 401, anchor: 'middle', lineGap: 8, lines: [...heading(copy.pretax), { text: '$value', size: 39, weight: 400 }, { text: copy.marginPretax, size: 28, weight: 400, color: NOTE }, { text: copy.yoyPretax, size: 28, weight: 400, color: NOTE }] }],
      },
      other_income: {
        blocks: [{ x: zh ? 1630.5 : 1649, top: 723, anchor: 'start', lineGap: 7, lines: [...heading(copy.otherIncome, 31), { text: '$value', size: 31, weight: 400 }] }],
      },
      other_deduction: {
        blocks: [{ x: 1497, top: 1197, anchor: 'middle', lineGap: 7, lines: [...heading(copy.otherDeduction, 31), { text: '$value', size: 31, weight: 400 }] }],
      },
      operating_expenses: {
        blocks: [{ x: 1805, top: 1199, anchor: 'middle', lineGap: 6, lines: [...heading(copy.costs, zh ? 34 : 36), { text: '$value', size: 34, weight: 400 }] }],
      },
      net_income: {
        blocks: [{ x: 2453, top: 296, anchor: 'middle', lineGap: 8, lines: [...heading(copy.net), { text: '$value', size: 39, weight: 400 }, { text: copy.marginNet, size: 28, weight: 400, color: NOTE }, { text: copy.yoyNet, size: 28, weight: 400, color: NOTE }] }],
      },
      tax: rightBlock(copy.tax, 496),
      da: rightBlock(copy.da, 599, 31, zh ? 2367 : 2378),
      oil_gas_opex: rightBlock(copy.oilGasOpex, 719, 31, 2472, 'middle'),
      chemical_midstream: rightBlock(copy.chemicalMidstream, 834, zh ? 29 : 31, 2472, 'middle'),
      other_cost: rightBlock(copy.otherCost, 961, 31, 2371),
      transportation_gathering: rightBlock(copy.transportation, 1049, zh ? 29 : 31, 2472, 'middle'),
      interest: rightBlock(copy.interest, 1162, 31, 2355),
      sga: rightBlock(copy.sga, zh ? 1238 : 1248, zh ? 27 : 31, zh ? 2472 : 2364, zh ? 'middle' : 'start'),
      taxes_non_income: rightBlock(copy.taxesNonIncome, 1317, zh ? 28 : 31, 2472, 'middle'),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oxy-q3-fy25',
    name: 'Oxy · Q3 FY25',
    company: 'Oxy',
    meta: {
      company: 'Oxy',
      title: 'Oxy Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/oxy-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 1960,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: HUB_BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 39, value: 39, note: 28, lineGap: 8 },
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
    },
    rasterAnnotations: [
      { key: 'oxy-company-logo', href: 'data/assets/raster-annotations/oxy/company-logo-q3-fy25.png', x: 1192, y: 239, width: 291, height: 299 },
      { key: 'oxy-oil-icon', href: 'data/assets/raster-annotations/oxy/oil-icon-q3-fy25.png', x: 88, y: 430, width: 96, height: 118 },
      { key: 'oxy-ngl-icon', href: 'data/assets/raster-annotations/oxy/ngl-icon-q3-fy25.png', x: 103, y: 652, width: 72, height: 109 },
      { key: 'oxy-gas-icon', href: 'data/assets/raster-annotations/oxy/gas-icon-q3-fy25.png', x: 108, y: 824, width: 60, height: 77 },
      { key: 'oxy-chemical-icon', href: 'data/assets/raster-annotations/oxy/chemical-icon-q3-fy25.png', x: 508, y: 967, width: 66, height: 121 },
      { key: 'oxy-midstream-icon', href: 'data/assets/raster-annotations/oxy/midstream-icon-q3-fy25.png', x: 138, y: 1104, width: 137, height: 139 },
    ],
    nodes: [
      { id: 'oil', label: 'Oil', value: 4.5, notes: ['(10%) Y/Y'], type: 'source', col: 0, order: 0, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ngl', label: 'NGL', value: 0.6, notes: ['(6%) Y/Y', 'Natural Gas Liquid'], type: 'source', col: 0, order: 1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gas', label: 'Gas', value: 0.3, notes: ['+119% Y/Y'], type: 'source', col: 0, order: 2, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', label: 'Other', value: 0.1, type: 'source', col: 0, order: 3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'oil_gas', label: 'Oil & Gas', value: 5.4, notes: ['(5%) Y/Y'], type: 'hub', col: 1, order: 0, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'chemical', label: 'Chemical', value: 1.2, notes: ['(6%) Y/Y'], type: 'source', col: 1, order: 1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'midstream_marketing', label: 'Midstream & Marketing', value: 0.3, notes: ['(30%) Y/Y'], type: 'source', col: 1, order: 2, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', label: 'Revenue', value: 6.7, notes: ['(6%) Y/Y'], type: 'hub', col: 2, order: 0, color: HUB_BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_deduction', label: 'Other', value: 0.2, type: 'cost', col: 3, order: 2 },
      { id: 'other_income', label: 'Other', value: 0.1, type: 'profit', col: 3, order: 0 },
      { id: 'pretax_income', label: 'Pretax income', value: 1.2, notes: ['17% margin', '(5pp) Y/Y'], type: 'profit', col: 4, order: 0 },
      { id: 'operating_expenses', label: ['Costs and', 'other deductions'], value: 5.7, type: 'cost', col: 4, order: 1 },
      { id: 'net_income', label: 'Net income', value: 0.8, notes: ['13% margin', '(3pp) Y/Y'], type: 'profit', col: 5, order: 0 },
      { id: 'tax', label: 'Tax', value: 0.3, type: 'cost', col: 5, order: 1 },
      { id: 'da', label: 'D&A', value: 2.1, type: 'cost', col: 5, order: 2 },
      { id: 'oil_gas_opex', label: 'Oil & Gas opex', value: 1.2, type: 'cost', col: 5, order: 3 },
      { id: 'chemical_midstream', label: 'Chemical & Midstream', value: 0.8, type: 'cost', col: 5, order: 4 },
      { id: 'other_cost', label: 'Other', value: 0.5, type: 'cost', col: 5, order: 5 },
      { id: 'transportation_gathering', label: 'Transportation & gathering', value: 0.4, type: 'cost', col: 5, order: 6 },
      { id: 'interest', label: 'Interest', value: 0.3, type: 'cost', col: 5, order: 7 },
      { id: 'sga', label: 'SG&A', value: 0.3, type: 'cost', col: 5, order: 8 },
      { id: 'taxes_non_income', label: 'Taxes (non income)', value: 0.2, type: 'cost', col: 5, order: 9 },
    ],
    links: [
      { source: 'oil', target: 'oil_gas', value: 4.5, sourceWidth: 216, targetWidth: 216, y0: 509, y1: 692, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'ngl', target: 'oil_gas', value: 0.6, sourceWidth: 25, targetWidth: 25, y0: 745.5, y1: 812.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'gas', target: 'oil_gas', value: 0.3, sourceWidth: 14, targetWidth: 14, y0: 869, y1: 832, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'oil_gas', value: 0.1, sourceWidth: 1, targetWidth: 7, y0: 969.5, y1: 842.5, sourceOrder: 0, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'oil_gas', target: 'revenue', value: 5.4, sourceWidth: 262, targetWidth: 262, y0: 715, y1: 844, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'chemical', target: 'revenue', value: 1.2, sourceWidth: 55, targetWidth: 58, y0: 1031.5, y1: 1004, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'midstream_marketing', target: 'revenue', value: 0.3, sourceWidth: 12, targetWidth: 14, y0: 1192, y1: 1040, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'pretax_income', value: 1.1, sourceWidth: 46, targetWidth: 47, y0: 736, y1: 603.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'pretax_income', value: 0.1, sourceWidth: 7, targetWidth: 7, y0: 698.5, y1: 630.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 5.7, sourceWidth: 282, targetWidth: 278, y0: 900, y1: 1037, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'other_deduction', value: 0.2, sourceWidth: 6, targetWidth: 6, y0: 1044, y1: 1172, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_income', value: 0.8, sourceWidth: 39, targetWidth: 39, y0: 599.5, y1: 355.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 0.3, sourceWidth: 14, targetWidth: 14, y0: 627, y1: 507, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 2.1, sourceWidth: 104, targetWidth: 97, y0: 950, y1: 611.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'oil_gas_opex', value: 1.2, sourceWidth: 59, targetWidth: 55, y0: 1031.5, y1: 749.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'chemical_midstream', value: 0.8, sourceWidth: 41, targetWidth: 38, y0: 1081.5, y1: 867, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_cost', value: 0.5, sourceWidth: 21, targetWidth: 20, y0: 1112.5, y1: 973, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'transportation_gathering', value: 0.4, sourceWidth: 19, targetWidth: 18, y0: 1132.5, y1: 1080, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'interest', value: 0.3, sourceWidth: 11, targetWidth: 10, y0: 1147.5, y1: 1173, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 12, targetWidth: 11, y0: 1159, y1: 1260.5, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'taxes_non_income', value: 0.2, sourceWidth: 11, targetWidth: 10, y0: 1170.5, y1: 1347, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK },
    ],
    layout: {
      scale: 48,
      nodes: {
        oil: { x: 368, y: 401, width: 71, height: 216 },
        ngl: { x: 368, y: 733, width: 71, height: 25 },
        gas: { x: 368, y: 862, width: 71, height: 14 },
        other_revenue: { x: 368, y: 969, width: 71, height: 1 },
        oil_gas: { x: 835, y: 584, width: 70, height: 262 },
        chemical: { x: 835, y: 1004, width: 70, height: 55 },
        midstream_marketing: { x: 835, y: 1186, width: 70, height: 12 },
        revenue: { x: 1302, y: 713, width: 71, height: 334 },
        other_deduction: { x: 1462, y: 1169, width: 70, height: 6 },
        other_income: { x: 1657, y: 695, width: 71, height: 7 },
        pretax_income: { x: 1770, y: 580, width: 70, height: 54 },
        operating_expenses: { x: 1770, y: 898, width: 70, height: 278 },
        net_income: { x: 2236, y: 336, width: 71, height: 39 },
        tax: { x: 2236, y: 500, width: 71, height: 14 },
        da: { x: 2236, y: 563, width: 71, height: 97 },
        oil_gas_opex: { x: 2236, y: 722, width: 71, height: 55 },
        chemical_midstream: { x: 2236, y: 848, width: 71, height: 38 },
        other_cost: { x: 2236, y: 963, width: 71, height: 20 },
        transportation_gathering: { x: 2236, y: 1071, width: 71, height: 18 },
        interest: { x: 2236, y: 1168, width: 71, height: 10 },
        sga: { x: 2236, y: 1255, width: 71, height: 11 },
        taxes_non_income: { x: 2236, y: 1342, width: 71, height: 10 },
      },
      labels: labels(),
    },
    i18n: {
      zh: {
        name: '西方石油 · 2025 财年第三季度',
        meta: {
          title: '西方石油 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          titleSize: 105,
          titleTextLength: 1670,
        },
        nodes: {
          oil: { label: '原油', notes: ['同比 (10%)'] },
          ngl: { label: '天然气液', notes: ['同比 (6%)', '天然气液体'] },
          gas: { label: '天然气', notes: ['同比 +119%'] },
          other_revenue: { label: '其他' },
          oil_gas: { label: '油气业务', notes: ['同比 (5%)'] },
          chemical: { label: '化工', notes: ['同比 (6%)'] },
          midstream_marketing: { label: '中游与营销', notes: ['同比 (30%)'] },
          revenue: { label: '收入', notes: ['同比 (6%)'] },
          other_deduction: { label: '其他扣减' },
          other_income: { label: '其他收入' },
          pretax_income: { label: '税前利润', notes: ['利润率 17%', '同比 (5 个百分点)'] },
          operating_expenses: { label: ['成本及', '其他扣减'] },
          net_income: { label: '净利润', notes: ['利润率 13%', '同比 (3 个百分点)'] },
          tax: { label: '所得税' },
          da: { label: '折旧及摊销' },
          oil_gas_opex: { label: '油气运营费用' },
          chemical_midstream: { label: '化工与中游' },
          other_cost: { label: '其他' },
          transportation_gathering: { label: '运输与集输' },
          interest: { label: '利息' },
          sga: { label: '销售、一般及行政费用' },
          taxes_non_income: { label: '税费（不含所得税）' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
