/* Oxy FY25 income statement ($B), measured against the local reference. */
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
        midstream: '中游与营销',
        revenue: '收入',
        pretax: '税前利润',
        otherDeduction: '其他扣减',
        costs: ['成本及', '其他扣减'],
        net: '净利润',
        yoyOil: '同比 (7%)',
        yoyNgl: '同比 (0%)',
        yoyGas: '同比 +56%',
        yoyOilGas: '同比 (4%)',
        yoyMidstream: '同比 +44%',
        yoyRevenue: '同比 (1%)',
        marginPretax: '利润率 14%',
        yoyPretax: '同比 (4 个百分点)',
        marginNet: '利润率 10%',
        yoyNet: '同比 (3 个百分点)',
        tax: '所得税（$1.0B）',
        da: '折旧及摊销（$7.5B）',
        oilGasOpex: ['油气运营费用', '（$4.7B）'],
        interest: '利息（$2.6B）',
        transportation: ['运输与集输', '（$1.7B）'],
        taxesNonIncome: ['税费（不含所得税）', '（$1.0B）'],
        sga: ['销售、一般及', '行政费用（$1.0B）'],
        otherCost: '其他（$0.3B）',
        purchased: ['采购商品', '（$0.2B）'],
      }
      : {
        oil: 'Oil',
        ngl: 'NGL',
        nglNote: 'Natural Gas Liquid',
        gas: 'Gas',
        otherRevenue: 'Other',
        oilGas: 'Oil & Gas',
        midstream: 'Midstream & Marketing',
        revenue: 'Revenue',
        pretax: 'Pretax income',
        otherDeduction: 'Other',
        costs: ['Costs and', 'other deductions'],
        net: 'Net income',
        yoyOil: '(7%) Y/Y',
        yoyNgl: '(0%) Y/Y',
        yoyGas: '+56% Y/Y',
        yoyOilGas: '(4%) Y/Y',
        yoyMidstream: '+44% Y/Y',
        yoyRevenue: '(1%) Y/Y',
        marginPretax: '14% margin',
        yoyPretax: '(4pp) Y/Y',
        marginNet: '10% margin',
        yoyNet: '(3pp) Y/Y',
        tax: 'Tax ($1.0B)',
        da: 'D&A ($7.5B)',
        oilGasOpex: ['Oil & Gas opex', '($4.7B)'],
        interest: 'Interest ($2.6B)',
        transportation: ['Transportation &', 'gathering ($1.7B)'],
        taxesNonIncome: ['Taxes (non income)', '($1.0B)'],
        sga: 'SG&A ($1.0B)',
        otherCost: 'Other ($0.3B)',
        purchased: ['Purchased', 'commodities', '($0.2B)'],
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
          { x: 404, top: 340, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: copy.yoyOil, size: 28, weight: 400, color: NOTE }] },
          { x: 297, top: 516, anchor: 'end', lines: heading(copy.oil) },
        ],
      },
      ngl: {
        blocks: [
          { x: 404, top: 665, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: copy.yoyNgl, size: 28, weight: 400, color: NOTE }] },
          { x: 300, top: 731, anchor: 'end', lineGap: 7, lines: [{ text: copy.ngl, size: 39, weight: 800 }, { text: copy.nglNote, size: zh ? 25 : 28, weight: 400, color: NOTE }] },
        ],
      },
      gas: {
        blocks: [
          { x: 404, top: 787, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: copy.yoyGas, size: 28, weight: 400, color: NOTE }] },
          { x: 293, top: 868, anchor: 'end', lines: heading(copy.gas) },
        ],
      },
      other_revenue: {
        blocks: [
          { x: 404, top: 956, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400 }] },
          { x: 300, top: 994, anchor: 'end', lines: heading(copy.otherRevenue) },
        ],
      },
      oil_gas: {
        blocks: [{ x: 874, top: 456, anchor: 'middle', lineGap: 8, lines: [...heading(copy.oilGas), { text: '$value', size: 39, weight: 400 }, { text: copy.yoyOilGas, size: 28, weight: 400, color: NOTE }] }],
      },
      midstream_marketing: {
        blocks: [
          { x: 874, top: 1048, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: copy.yoyMidstream, size: 28, weight: 400, color: NOTE }] },
          { x: 797, top: 1133, anchor: 'end', lines: heading(copy.midstream, zh ? 36 : 39) },
        ],
      },
      revenue: {
        blocks: [{ x: 1341, top: 568, anchor: 'middle', lineGap: 8, lines: [...heading(copy.revenue), { text: '$value', size: 39, weight: 400 }, { text: copy.yoyRevenue, size: 28, weight: 400, color: NOTE }] }],
      },
      pretax_income: {
        blocks: [{ x: 1809, top: 345, anchor: 'middle', lineGap: 8, lines: [...heading(copy.pretax), { text: '$value', size: 39, weight: 400 }, { text: copy.marginPretax, size: 28, weight: 400, color: NOTE }, { text: copy.yoyPretax, size: 28, weight: 400, color: NOTE }] }],
      },
      other_deduction: {
        blocks: [{ x: 1481, top: 1074, anchor: 'middle', lineGap: 7, lines: [...heading(copy.otherDeduction, 31), { text: '$value', size: 31, weight: 400 }] }],
      },
      operating_expenses: {
        blocks: [{ x: 1809, top: 1126, anchor: 'middle', lineGap: 6, lines: [...heading(copy.costs, zh ? 34 : 36), { text: '$value', size: 34, weight: 400 }] }],
      },
      net_income: {
        blocks: [{ x: 2457, top: 281, anchor: 'middle', lineGap: 8, lines: [...heading(copy.net), { text: '$value', size: 39, weight: 400 }, { text: copy.marginNet, size: 28, weight: 400, color: NOTE }, { text: copy.yoyNet, size: 28, weight: 400, color: NOTE }] }],
      },
      tax: rightBlock(copy.tax, 473, 31, zh ? 2370 : 2378),
      da: rightBlock(copy.da, 613, 31, zh ? 2366 : 2378),
      oil_gas_opex: rightBlock(copy.oilGasOpex, 733, 31, 2465, 'middle'),
      interest: rightBlock(copy.interest, 874, 31, zh ? 2371 : 2357),
      transportation_gathering: rightBlock(copy.transportation, 946, zh ? 29 : 31, 2470, 'middle'),
      taxes_non_income: rightBlock(copy.taxesNonIncome, 1059, zh ? 29 : 31, 2470, 'middle'),
      sga: rightBlock(copy.sga, zh ? 1138 : 1154, zh ? 27 : 31, zh ? 2470 : 2372, zh ? 'middle' : 'start'),
      other_cost: rightBlock(copy.otherCost, 1232, 31, zh ? 2390 : 2361),
      purchased_commodities: rightBlock(copy.purchased, 1288, zh ? 29 : 31, 2459, 'middle'),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oxy-fy25',
    name: 'Oxy · FY25',
    company: 'Oxy',
    meta: {
      company: 'Oxy',
      title: 'Oxy FY25 Income Statement',
      period: 'FY25',
      periodNote: 'Year ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/oxy-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 1762,
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
      { key: 'oxy-company-logo', href: 'data/assets/raster-annotations/oxy/company-logo-q3-fy25.png', x: 1196, y: 239, width: 291, height: 299 },
      { key: 'oxy-oil-icon', href: 'data/assets/raster-annotations/oxy/oil-icon-q3-fy25.png', x: 92, y: 430, width: 96, height: 118 },
      { key: 'oxy-ngl-icon', href: 'data/assets/raster-annotations/oxy/ngl-icon-q3-fy25.png', x: 107, y: 652, width: 72, height: 109 },
      { key: 'oxy-gas-icon', href: 'data/assets/raster-annotations/oxy/gas-icon-q3-fy25.png', x: 112, y: 844, width: 60, height: 77 },
      { key: 'oxy-midstream-icon', href: 'data/assets/raster-annotations/oxy/midstream-icon-q3-fy25.png', x: 142, y: 1069, width: 137, height: 139 },
    ],
    nodes: [
      { id: 'oil', label: 'Oil', value: 17.2, notes: ['(7%) Y/Y'], type: 'source', col: 0, order: 0, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ngl', label: 'NGL', value: 2.2, notes: ['(0%) Y/Y', 'Natural Gas Liquid'], type: 'source', col: 0, order: 1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gas', label: 'Gas', value: 1.4, notes: ['+56% Y/Y'], type: 'source', col: 0, order: 2, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', label: 'Other', value: 0.1, type: 'source', col: 0, order: 3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'oil_gas', label: 'Oil & Gas', value: 20.9, notes: ['(4%) Y/Y'], type: 'hub', col: 1, order: 0, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'midstream_marketing', label: 'Midstream & Marketing', value: 1.3, notes: ['+44% Y/Y'], type: 'source', col: 1, order: 1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', label: 'Revenue', value: 22.1, notes: ['(1%) Y/Y'], type: 'hub', col: 2, order: 0, color: HUB_BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_deduction', label: 'Other', value: 0.1, type: 'cost', col: 3, order: 0 },
      { id: 'pretax_income', label: 'Pretax income', value: 3.1, notes: ['14% margin', '(4pp) Y/Y'], type: 'profit', col: 4, order: 0 },
      { id: 'operating_expenses', label: ['Costs and', 'other deductions'], value: 18.9, type: 'cost', col: 4, order: 1 },
      { id: 'net_income', label: 'Net income', value: 2.1, notes: ['10% margin', '(3pp) Y/Y'], type: 'profit', col: 5, order: 0 },
      { id: 'tax', label: 'Tax', value: 1.0, type: 'cost', col: 5, order: 1 },
      { id: 'da', label: 'D&A', value: 7.5, type: 'cost', col: 5, order: 2 },
      { id: 'oil_gas_opex', label: 'Oil & Gas opex', value: 4.7, type: 'cost', col: 5, order: 3 },
      { id: 'interest', label: 'Interest', value: 2.6, type: 'cost', col: 5, order: 4 },
      { id: 'transportation_gathering', label: 'Transportation & gathering', value: 1.7, type: 'cost', col: 5, order: 5 },
      { id: 'taxes_non_income', label: 'Taxes (non income)', value: 1.0, type: 'cost', col: 5, order: 6 },
      { id: 'sga', label: 'SG&A', value: 1.0, type: 'cost', col: 5, order: 7 },
      { id: 'other_cost', label: 'Other', value: 0.3, type: 'cost', col: 5, order: 8 },
      { id: 'purchased_commodities', label: 'Purchased commodities', value: 0.2, type: 'cost', col: 5, order: 9 },
    ],
    links: [
      { source: 'oil', target: 'oil_gas', value: 17.2, sourceWidth: 205, targetWidth: 205, y0: 539.5, y1: 700.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'ngl', target: 'oil_gas', value: 2.2, sourceWidth: 25, targetWidth: 25, y0: 769.5, y1: 815.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'gas', target: 'oil_gas', value: 1.4, sourceWidth: 15, targetWidth: 15, y0: 895.5, y1: 835.5, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'oil_gas', value: 0.1, sourceWidth: 1, targetWidth: 6, y0: 1017.5, y1: 846, sourceOrder: 0, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'oil_gas', target: 'revenue', value: 20.9, sourceWidth: 251, targetWidth: 251, y0: 723.5, y1: 837.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'midstream_marketing', target: 'revenue', value: 1.3, sourceWidth: 14, targetWidth: 14, y0: 1158, y1: 970, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'pretax_income', value: 3.1, sourceWidth: 37, targetWidth: 37, y0: 730.5, y1: 543.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 18.9, sourceWidth: 227, targetWidth: 228, y0: 862.5, y1: 991, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'other_deduction', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 976.5, y1: 1054.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_income', value: 2.1, sourceWidth: 25, targetWidth: 22, y0: 537.5, y1: 359, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 1.0, sourceWidth: 12, targetWidth: 10, y0: 556, y1: 493, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 7.5, sourceWidth: 90, targetWidth: 89, y0: 922, y1: 633.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'oil_gas_opex', value: 4.7, sourceWidth: 57, targetWidth: 55, y0: 995.5, y1: 778.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'interest', value: 2.6, sourceWidth: 31, targetWidth: 29, y0: 1039.5, y1: 892.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'transportation_gathering', value: 1.7, sourceWidth: 20, targetWidth: 19, y0: 1065, y1: 991.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'taxes_non_income', value: 1.0, sourceWidth: 13, targetWidth: 12, y0: 1081.5, y1: 1084, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 1.0, sourceWidth: 12, targetWidth: 10, y0: 1094, y1: 1176, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_cost', value: 0.3, sourceWidth: 3, targetWidth: 2, y0: 1101.5, y1: 1259, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'purchased_commodities', value: 0.2, sourceWidth: 2, targetWidth: 1, y0: 1104, y1: 1342.5, sourceOrder: 7, targetOrder: 0, linkTint: RED_LINK },
    ],
    layout: {
      scale: 12,
      nodes: {
        oil: { x: 372, y: 437, width: 71, height: 205 },
        ngl: { x: 372, y: 757, width: 71, height: 25 },
        gas: { x: 372, y: 888, width: 71, height: 15 },
        other_revenue: { x: 372, y: 1017, width: 71, height: 1 },
        oil_gas: { x: 839, y: 598, width: 70, height: 251 },
        midstream_marketing: { x: 839, y: 1151, width: 70, height: 14 },
        revenue: { x: 1306, y: 712, width: 71, height: 265 },
        other_deduction: { x: 1446, y: 1054, width: 71, height: 1 },
        pretax_income: { x: 1774, y: 525, width: 70, height: 37 },
        operating_expenses: { x: 1774, y: 877, width: 70, height: 228 },
        net_income: { x: 2240, y: 348, width: 71, height: 22 },
        tax: { x: 2240, y: 488, width: 71, height: 10 },
        da: { x: 2240, y: 589, width: 71, height: 89 },
        oil_gas_opex: { x: 2240, y: 751, width: 71, height: 55 },
        interest: { x: 2240, y: 878, width: 71, height: 29 },
        transportation_gathering: { x: 2240, y: 982, width: 71, height: 19 },
        taxes_non_income: { x: 2240, y: 1078, width: 71, height: 12 },
        sga: { x: 2240, y: 1171, width: 71, height: 10 },
        other_cost: { x: 2240, y: 1258, width: 71, height: 2 },
        purchased_commodities: { x: 2240, y: 1342, width: 71, height: 1 },
      },
      labels: labels(),
    },
    i18n: {
      zh: {
        name: '西方石油 · 2025 财年',
        meta: {
          title: '西方石油 2025 财年利润表',
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月 31 日的财年',
          titleSize: 111,
          titleTextLength: 1450,
        },
        nodes: {
          oil: { label: '原油', notes: ['同比 (7%)'] },
          ngl: { label: '天然气液', notes: ['同比 (0%)', '天然气液体'] },
          gas: { label: '天然气', notes: ['同比 +56%'] },
          other_revenue: { label: '其他' },
          oil_gas: { label: '油气业务', notes: ['同比 (4%)'] },
          midstream_marketing: { label: '中游与营销', notes: ['同比 +44%'] },
          revenue: { label: '收入', notes: ['同比 (1%)'] },
          other_deduction: { label: '其他扣减' },
          pretax_income: { label: '税前利润', notes: ['利润率 14%', '同比 (4 个百分点)'] },
          operating_expenses: { label: ['成本及', '其他扣减'] },
          net_income: { label: '净利润', notes: ['利润率 10%', '同比 (3 个百分点)'] },
          tax: { label: '所得税' },
          da: { label: '折旧及摊销' },
          oil_gas_opex: { label: '油气运营费用' },
          interest: { label: '利息' },
          transportation_gathering: { label: '运输与集输' },
          taxes_non_income: { label: '税费（不含所得税）' },
          sga: { label: '销售、一般及行政费用' },
          other_cost: { label: '其他' },
          purchased_commodities: { label: '采购商品' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
