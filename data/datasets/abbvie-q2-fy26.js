/* AbbVie Q2 FY26 income statement ($B), measured against the local reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NAVY = '#071d49';
  const NAVY_LABEL = '#071d48';
  const NAVY_LINK = '#8892a6';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const layoutLabels = {
    immunology: { blocks: [
      { x: 507.5, top: 304, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+15% Y/Y', size: 28, color: NOTE }] },
      { x: 434, top: 458, anchor: 'end', lines: [{ text: 'Immunology', size: 39, weight: 800 }] },
    ] },
    oncology: { blocks: [
      { x: 507.5, top: 621, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(2%) Y/Y', size: 28, color: NOTE }] },
      { x: 427, top: 709, anchor: 'end', lines: [{ text: 'Oncology', size: 39, weight: 800 }] },
    ] },
    aesthetics: { blocks: [
      { x: 507.5, top: 801, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+0% Y/Y', size: 28, color: NOTE }] },
      { x: 436, top: 881, anchor: 'end', lines: [{ text: 'Aesthetics', size: 40, weight: 800 }] },
    ] },
    neuroscience: { blocks: [
      { x: 507.5, top: 971, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+20% Y/Y', size: 28, color: NOTE }] },
      { x: 440, top: 1073, anchor: 'end', lines: [{ text: 'Neuroscience', size: 40, weight: 800 }] },
    ] },
    other_revenue: { blocks: [
      { x: 507.5, top: 1176, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+25% Y/Y', size: 28, color: NOTE }] },
      { x: 409, top: 1269, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 972, top: 435, anchor: 'middle', lineGap: 8, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+10% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1437, top: 311, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '75% margin', size: 28, color: NOTE }, { text: '+3pp Y/Y', size: 28, color: NOTE }] }] },
    cost_of_products_sold: { blocks: [{ x: 1441.5, top: 1026, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 39, weight: 800 }, { text: 'products sold', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    operating_profit: { blocks: [{ x: 1909, top: 224, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '38% margin', size: 28, color: NOTE }, { text: '+6pp Y/Y', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1902, top: 831, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    net_profit: { blocks: [{ x: 2433, top: 261, anchor: 'start', lineGap: 8, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '21% margin', size: 28, color: NOTE }, { text: '+15% Y/Y', size: 28, color: NOTE }] }] },
    other_expense: { blocks: [{ x: 2477, top: 468, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    interest: { blocks: [{ x: 2469, top: 574, anchor: 'start', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    tax: { blocks: [{ x: 2479, top: 683, anchor: 'start', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    sga: { blocks: [{ x: 2427, top: 842, anchor: 'start', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '21% of revenue', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2428, top: 1059, anchor: 'start', lineGap: 8, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '14% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
    other_opex: { blocks: [{ x: 2435, top: 1241, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '2% of revenue', size: 28, color: NOTE }, { text: '(3pp) Y/Y', size: 28, color: NOTE }] }] },
  };

  function localizedLayoutLabels(base, textByNode, overrides = {}) {
    const localized = {};
    Object.entries(base).forEach(([node, spec]) => {
      localized[node] = {
        ...spec,
        blocks: spec.blocks.map((block, blockIndex) => ({
          ...block,
          lines: block.lines.map((line, lineIndex) => ({ ...line, text: textByNode[node][blockIndex][lineIndex] })),
        })),
      };
    });
    return { ...localized, ...overrides };
  }

  const zhLayoutLabels = localizedLayoutLabels(layoutLabels, {
    immunology: [['$value', '同比 +15%'], ['免疫']],
    oncology: [['$value', '同比 (2%)'], ['肿瘤']],
    aesthetics: [['$value', '同比 +0%'], ['美学']],
    neuroscience: [['$value', '同比 +20%'], ['神经科学']],
    other_revenue: [['$value', '同比 +25%'], ['其他']],
    revenue: [['收入', '$value', '同比 +10%']],
    gross_profit: [['毛利润', '$value', '利润率 75%', '同比 +3 个百分点']],
    cost_of_products_sold: [['产品销售', '成本', '$value']],
    operating_profit: [['营业利润', '$value', '利润率 38%', '同比 +6 个百分点']],
    operating_expenses: [['营业', '费用', '$value']],
    net_profit: [['净利润', '$value', '利润率 21%', '同比 +15%']],
    other_expense: [['其他', '$value']],
    interest: [['利息', '$value']],
    tax: [['税费', '$value']],
    sga: [['销售、一般及行政费用', '$value', '占收入 21%', '同比 +0 个百分点']],
    rnd: [['研发', '$value', '占收入 14%', '同比 (0 个百分点)']],
    other_opex: [['其他', '$value', '占收入 2%', '同比 (3 个百分点)']],
  }, {
    net_profit: { blocks: [{ x: 2418, top: 261, anchor: 'start', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 21%', size: 28, color: NOTE }, { text: '同比 +15%', size: 28, color: NOTE }] }] },
    sga: { blocks: [{ x: 2418, top: 842, anchor: 'start', lineGap: 8, lines: [{ text: '销售、一般及行政费用', size: 23, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 21%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2418, top: 1059, anchor: 'start', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 14%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
    other_opex: { blocks: [{ x: 2418, top: 1241, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 2%', size: 28, color: NOTE }, { text: '同比 (3 个百分点)', size: 28, color: NOTE }] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'abbvie-q2-fy26',
    name: 'AbbVie · Q2 FY26',
    company: 'AbbVie',
    meta: {
      company: 'AbbVie',
      title: 'AbbVie Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/abbvie-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334.5,
      titleY: 202,
      titleSize: 125,
      titleWeight: 800,
      titleTextLength: 2165,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      nodeRadius: 0,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY_LABEL },
        hub: { node: NAVY, label: NAVY_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/abbvie/company-wordmark.png', x: 630, y: 235, width: 650, height: 140 },
      { key: 'immunology-products', href: 'data/assets/raster-annotations/abbvie/immunology-products-q2-fy26.png', x: 8, y: 404, width: 148, height: 150 },
      { key: 'oncology-imbruvica', href: 'data/assets/raster-annotations/abbvie/oncology-imbruvica.png', x: 0, y: 686, width: 185, height: 85 },
      { key: 'aesthetics-botox-cosmetic', href: 'data/assets/raster-annotations/abbvie/aesthetics-botox-cosmetic.png', x: 8, y: 867, width: 158, height: 78 },
      { key: 'neuroscience-botox', href: 'data/assets/raster-annotations/abbvie/neuroscience-botox.png', x: 5, y: 1063, width: 170, height: 68 },
    ],
    layout: {
      scale: 1,
      nodes: {
        immunology: { x: 470, y: 396, width: 73, height: 176 },
        oncology: { x: 470, y: 716, width: 73, height: 32 },
        aesthetics: { x: 470, y: 892, width: 73, height: 25 },
        neuroscience: { x: 470, y: 1062, width: 73, height: 64 },
        other_revenue: { x: 470, y: 1270, width: 73, height: 41 },
        revenue: { x: 937, y: 583, width: 73, height: 338 },
        gross_profit: { x: 1404, y: 493, width: 73, height: 254 },
        cost_of_products_sold: { x: 1404, y: 931, width: 73, height: 87 },
        operating_profit: { x: 1872, y: 408, width: 73, height: 129 },
        operating_expenses: { x: 1872, y: 694, width: 73, height: 126 },
        net_profit: { x: 2339, y: 292, width: 73, height: 71 },
        other_expense: { x: 2339, y: 492, width: 73, height: 30 },
        interest: { x: 2339, y: 606, width: 73, height: 13 },
        tax: { x: 2339, y: 713, width: 73, height: 14 },
        sga: { x: 2339, y: 840, width: 73, height: 72 },
        rnd: { x: 2339, y: 1075, width: 73, height: 47 },
        other_opex: { x: 2339, y: 1282, width: 73, height: 6 },
      },
      labels: layoutLabels,
    },
    nodes: [
      { id: 'immunology', col: 0, order: 0, type: 'source', label: 'Immunology', value: 8.8, notes: ['+15% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'oncology', col: 0, order: 1, type: 'source', label: 'Oncology', value: 1.7, notes: ['(2%) Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'aesthetics', col: 0, order: 2, type: 'source', label: 'Aesthetics', value: 1.3, notes: ['+0% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'neuroscience', col: 0, order: 3, type: 'source', label: 'Neuroscience', value: 3.2, notes: ['+20% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 2.0, valueText: '$2.0B', notes: ['+25% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 17.0, valueText: '$17.0B', notes: ['+10% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 12.7, notes: ['75% margin', '+3pp Y/Y'] },
      { id: 'cost_of_products_sold', col: 2, order: 1, type: 'cost', label: ['Cost of', 'products sold'], value: 4.3 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 6.4, notes: ['38% margin', '+6pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.3 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 3.6, notes: ['21% margin', '+15% Y/Y'] },
      { id: 'other_expense', col: 4, order: 1, type: 'cost', label: 'Other', value: 1.5 },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 0.7 },
      { id: 'tax', col: 4, order: 3, type: 'cost', label: 'Tax', value: 0.7 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 3.6, notes: ['21% of revenue', '+0pp Y/Y'] },
      { id: 'rnd', col: 4, order: 5, type: 'cost', label: 'R&D', value: 2.3, notes: ['14% of revenue', '(0pp) Y/Y'] },
      { id: 'other_opex', col: 4, order: 6, type: 'cost', label: 'Other', value: 0.3, notes: ['2% of revenue', '(3pp) Y/Y'] },
    ],
    links: [
      { source: 'immunology', target: 'revenue', value: 8.8, sourceWidth: 176, targetWidth: 174, sourceOrder: 0, targetOrder: 0, y0: 484, y1: 670, linkTint: NAVY_LINK },
      { source: 'oncology', target: 'revenue', value: 1.7, sourceWidth: 32, targetWidth: 34, sourceOrder: 0, targetOrder: 1, y0: 732, y1: 774, linkTint: NAVY_LINK },
      { source: 'aesthetics', target: 'revenue', value: 1.3, sourceWidth: 23, targetWidth: 26, sourceOrder: 0, targetOrder: 2, y0: 904.5, y1: 804, linkTint: NAVY_LINK },
      { source: 'neuroscience', target: 'revenue', value: 3.2, sourceWidth: 62, targetWidth: 64, sourceOrder: 0, targetOrder: 3, y0: 1094, y1: 849, linkTint: NAVY_LINK },
      { source: 'other_revenue', target: 'revenue', value: 2.0, sourceWidth: 41, targetWidth: 40, sourceOrder: 0, targetOrder: 4, y0: 1290.5, y1: 901, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.7, sourceWidth: 253, targetWidth: 254, sourceOrder: 0, targetOrder: 0, y0: 709.5, y1: 620, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_products_sold', value: 4.3, sourceWidth: 85, targetWidth: 86, sourceOrder: 1, targetOrder: 0, y0: 878.5, y1: 975, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 6.4, sourceWidth: 128, targetWidth: 129, sourceOrder: 0, targetOrder: 0, y0: 557, y1: 472.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.3, sourceWidth: 125, targetWidth: 124, sourceOrder: 1, targetOrder: 0, y0: 683.5, y1: 757, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 3.6, sourceWidth: 71, targetWidth: 70, sourceOrder: 0, targetOrder: 0, y0: 443.5, y1: 327, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 1.5, sourceWidth: 30, targetWidth: 30, sourceOrder: 1, targetOrder: 0, y0: 494, y1: 507, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.7, sourceWidth: 14, targetWidth: 12, sourceOrder: 2, targetOrder: 0, y0: 516, y1: 613, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 14, targetWidth: 14, sourceOrder: 3, targetOrder: 0, y0: 530, y1: 720, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 3.6, sourceWidth: 73, targetWidth: 71, sourceOrder: 0, targetOrder: 0, y0: 730.5, y1: 875.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.3, sourceWidth: 47, targetWidth: 47, sourceOrder: 1, targetOrder: 0, y0: 790.5, y1: 1098.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.3, sourceWidth: 6, targetWidth: 4, sourceOrder: 2, targetOrder: 0, y0: 817, y1: 1285, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '艾伯维 · 2026 财年第二季度',
        meta: { title: '艾伯维 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月 30 日的季度', titleSize: 114, titleTextLength: 1800 },
        nodes: {
          immunology: { label: '免疫', notes: ['同比 +15%'] },
          oncology: { label: '肿瘤', notes: ['同比 (2%)'] },
          aesthetics: { label: '美学', notes: ['同比 +0%'] },
          neuroscience: { label: '神经科学', notes: ['同比 +20%'] },
          other_revenue: { label: '其他', notes: ['同比 +25%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 75%', '同比 +3 个百分点'] },
          cost_of_products_sold: { label: '产品销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 38%', '同比 +6 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 21%', '同比 +15%'] },
          other_expense: { label: '其他' },
          interest: { label: '利息' },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 21%', '同比 +0 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 (0 个百分点)'] },
          other_opex: { label: '其他', notes: ['占收入 2%', '同比 (3 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
