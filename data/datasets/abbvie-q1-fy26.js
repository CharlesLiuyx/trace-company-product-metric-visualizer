/* AbbVie Q1 FY26 income statement ($B), measured against the local reference. */
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
  const RED_LINK = '#de8585';
  const NOTE = '#666666';

  const layoutLabels = {
    immunology: { blocks: [
      { x: 507.5, top: 304, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+16% Y/Y', size: 28, color: NOTE }] },
      { x: 434, top: 458, anchor: 'end', lines: [{ text: 'Immunology', size: 39, weight: 800 }] },
    ] },
    oncology: { blocks: [
      { x: 507.5, top: 618, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(0%) Y/Y', size: 28, color: NOTE }] },
      { x: 427, top: 706, anchor: 'end', lines: [{ text: 'Oncology', size: 39, weight: 800 }] },
    ] },
    aesthetics: { blocks: [
      { x: 507.5, top: 801, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+8% Y/Y', size: 28, color: NOTE }] },
      { x: 436, top: 881, anchor: 'end', lines: [{ text: 'Aesthetics', size: 40, weight: 800 }] },
    ] },
    neuroscience: { blocks: [
      { x: 507.5, top: 971, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+26% Y/Y', size: 28, color: NOTE }] },
      { x: 440, top: 1073, anchor: 'end', lines: [{ text: 'Neuroscience', size: 40, weight: 800 }] },
    ] },
    other_revenue: { blocks: [
      { x: 507.5, top: 1154, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+30% Y/Y', size: 28, color: NOTE }] },
      { x: 409, top: 1245, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 972, top: 445, anchor: 'middle', lineGap: 8, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+12% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1437, top: 311, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '72% margin', size: 28, color: NOTE }, { text: '+2pp Y/Y', size: 28, color: NOTE }] }] },
    cost_of_products_sold: { blocks: [{ x: 1441.5, top: 1059, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 39, weight: 800 }, { text: 'products sold', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    operating_profit: { blocks: [{ x: 1909, top: 227, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '27% margin', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1902, top: 878, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    net_profit: { blocks: [{ x: 2433, top: 245, anchor: 'start', lineGap: 8, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '5% margin', size: 28, color: NOTE }, { text: '(5%) Y/Y', size: 28, color: NOTE }] }] },
    other_expense: { blocks: [{ x: 2477, top: 454, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    interest: { blocks: [{ x: 2469, top: 586, anchor: 'start', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    tax: { blocks: [{ x: 2479, top: 687, anchor: 'start', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    sga: { blocks: [{ x: 2427, top: 864, anchor: 'start', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '24% of revenue', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2428, top: 1048, anchor: 'start', lineGap: 8, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '16% of revenue', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] }] },
    other_opex: { blocks: [{ x: 2435, top: 1225, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '5% of revenue', size: 28, color: NOTE }, { text: '+3pp Y/Y', size: 28, color: NOTE }] }] },
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
    immunology: [['$value', '同比 +16%'], ['免疫']],
    oncology: [['$value', '同比 (0%)'], ['肿瘤']],
    aesthetics: [['$value', '同比 +8%'], ['美学']],
    neuroscience: [['$value', '同比 +26%'], ['神经科学']],
    other_revenue: [['$value', '同比 +30%'], ['其他']],
    revenue: [['收入', '$value', '同比 +12%']],
    gross_profit: [['毛利润', '$value', '利润率 72%', '同比 +2 个百分点']],
    cost_of_products_sold: [['产品销售', '成本', '$value']],
    operating_profit: [['营业利润', '$value', '利润率 27%', '同比 (1 个百分点)']],
    operating_expenses: [['营业', '费用', '$value']],
    net_profit: [['净利润', '$value', '利润率 5%', '同比 (5%)']],
    other_expense: [['其他', '$value']],
    interest: [['利息', '$value']],
    tax: [['税费', '$value']],
    sga: [['销售、一般及行政费用', '$value', '占收入 24%', '同比 (1 个百分点)']],
    rnd: [['研发', '$value', '占收入 16%', '同比 +1 个百分点']],
    other_opex: [['其他', '$value', '占收入 5%', '同比 +3 个百分点']],
  }, {
    net_profit: { blocks: [{ x: 2418, top: 245, anchor: 'start', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 5%', size: 28, color: NOTE }, { text: '同比 (5%)', size: 28, color: NOTE }] }] },
    sga: { blocks: [{ x: 2418, top: 864, anchor: 'start', lineGap: 8, lines: [{ text: '销售、一般及行政费用', size: 23, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 24%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2418, top: 1048, anchor: 'start', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 16%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    other_opex: { blocks: [{ x: 2418, top: 1225, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 5%', size: 28, color: NOTE }, { text: '同比 +3 个百分点', size: 28, color: NOTE }] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'abbvie-q1-fy26',
    name: 'AbbVie · Q1 FY26',
    company: 'AbbVie',
    meta: {
      company: 'AbbVie',
      title: 'AbbVie Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/abbvie-q1-fy26.png', width: 2667, height: 1500 },
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
      { key: 'immunology-products', href: 'data/assets/raster-annotations/abbvie/immunology-products.png', x: 0, y: 393, width: 175, height: 175 },
      { key: 'oncology-imbruvica', href: 'data/assets/raster-annotations/abbvie/oncology-imbruvica.png', x: 0, y: 686, width: 185, height: 85 },
      { key: 'aesthetics-botox-cosmetic', href: 'data/assets/raster-annotations/abbvie/aesthetics-botox-cosmetic.png', x: 8, y: 867, width: 158, height: 78 },
      { key: 'neuroscience-botox', href: 'data/assets/raster-annotations/abbvie/neuroscience-botox.png', x: 5, y: 1063, width: 170, height: 68 },
    ],
    layout: {
      scale: 1,
      nodes: {
        immunology: { x: 470, y: 394, width: 73, height: 172 },
        oncology: { x: 470, y: 709, width: 73, height: 38 },
        aesthetics: { x: 470, y: 892, width: 73, height: 28 },
        neuroscience: { x: 470, y: 1063, width: 73, height: 68 },
        other_revenue: { x: 470, y: 1246, width: 73, height: 47 },
        revenue: { x: 937, y: 593, width: 73, height: 352 },
        gross_profit: { x: 1404, y: 490, width: 73, height: 256 },
        cost_of_products_sold: { x: 1404, y: 949, width: 73, height: 101 },
        operating_profit: { x: 1873, y: 407, width: 73, height: 96 },
        operating_expenses: { x: 1871, y: 707, width: 73, height: 161 },
        net_profit: { x: 2339, y: 306, width: 73, height: 17 },
        other_expense: { x: 2339, y: 466, width: 73, height: 55 },
        interest: { x: 2339, y: 615, width: 73, height: 15 },
        tax: { x: 2339, y: 720, width: 73, height: 9 },
        sga: { x: 2339, y: 880, width: 73, height: 84 },
        rnd: { x: 2339, y: 1078, width: 73, height: 58 },
        other_opex: { x: 2339, y: 1258, width: 73, height: 17 },
      },
      labels: layoutLabels,
    },
    nodes: [
      { id: 'immunology', col: 0, order: 0, type: 'source', label: 'Immunology', value: 7.3, notes: ['+16% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'oncology', col: 0, order: 1, type: 'source', label: 'Oncology', value: 1.6, notes: ['(0%) Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'aesthetics', col: 0, order: 2, type: 'source', label: 'Aesthetics', value: 1.2, notes: ['+8% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'neuroscience', col: 0, order: 3, type: 'source', label: 'Neuroscience', value: 2.9, notes: ['+26% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 2.0, valueText: '$2.0B', notes: ['+30% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.0, valueText: '$15.0B', notes: ['+12% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.8, notes: ['72% margin', '+2pp Y/Y'] },
      { id: 'cost_of_products_sold', col: 2, order: 1, type: 'cost', label: ['Cost of', 'products sold'], value: 4.2 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4.0, valueText: '$4.0B', notes: ['27% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.8 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.7, notes: ['5% margin', '(5%) Y/Y'] },
      { id: 'other_expense', col: 4, order: 1, type: 'cost', label: 'Other', value: 2.3 },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 0.6 },
      { id: 'tax', col: 4, order: 3, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 3.6, notes: ['24% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 4, order: 5, type: 'cost', label: 'R&D', value: 2.5, notes: ['16% of revenue', '+1pp Y/Y'] },
      { id: 'other_opex', col: 4, order: 6, type: 'cost', label: 'Other', value: 0.7, notes: ['5% of revenue', '+3pp Y/Y'] },
    ],
    links: [
      { source: 'immunology', target: 'revenue', value: 7.3, sourceWidth: 172, targetWidth: 170, sourceOrder: 0, targetOrder: 0, y0: 480, y1: 678, linkTint: NAVY_LINK },
      { source: 'oncology', target: 'revenue', value: 1.6, sourceWidth: 37, targetWidth: 37, sourceOrder: 0, targetOrder: 1, y0: 728.5, y1: 781.5, linkTint: NAVY_LINK },
      { source: 'aesthetics', target: 'revenue', value: 1.2, sourceWidth: 28, targetWidth: 28, sourceOrder: 0, targetOrder: 2, y0: 906, y1: 814, linkTint: NAVY_LINK },
      { source: 'neuroscience', target: 'revenue', value: 2.9, sourceWidth: 66, targetWidth: 68, sourceOrder: 0, targetOrder: 3, y0: 1097, y1: 862, linkTint: NAVY_LINK },
      { source: 'other_revenue', target: 'revenue', value: 2.0, sourceWidth: 46, targetWidth: 49, sourceOrder: 0, targetOrder: 4, y0: 1269, y1: 920.5, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 10.8, sourceWidth: 252, targetWidth: 255, sourceOrder: 0, targetOrder: 0, y0: 719, y1: 618.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_products_sold', value: 4.2, sourceWidth: 100, targetWidth: 101, sourceOrder: 1, targetOrder: 0, y0: 895, y1: 999.5, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 4.0, sourceWidth: 94, targetWidth: 95, sourceOrder: 0, targetOrder: 0, y0: 538, y1: 455.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.8, sourceWidth: 161, targetWidth: 158, sourceOrder: 1, targetOrder: 0, y0: 665.5, y1: 788, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.7, sourceWidth: 17, targetWidth: 15, sourceOrder: 0, targetOrder: 0, y0: 416.5, y1: 314.5, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 2.3, sourceWidth: 54, targetWidth: 53, sourceOrder: 1, targetOrder: 0, y0: 452, y1: 493.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.6, sourceWidth: 15, targetWidth: 13, sourceOrder: 2, targetOrder: 0, y0: 486.5, y1: 622.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 9, targetWidth: 7, sourceOrder: 3, targetOrder: 0, y0: 498.5, y1: 724.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 3.6, sourceWidth: 83, targetWidth: 82, sourceOrder: 0, targetOrder: 0, y0: 750, y1: 922, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.5, sourceWidth: 58, targetWidth: 56, sourceOrder: 1, targetOrder: 0, y0: 820.5, y1: 1107, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.7, sourceWidth: 18, targetWidth: 15, sourceOrder: 2, targetOrder: 0, y0: 859, y1: 1266.5, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '艾伯维 · 2026 财年第一季度',
        meta: { title: '艾伯维 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 31 日的季度', titleSize: 114, titleTextLength: 1800 },
        nodes: {
          immunology: { label: '免疫', notes: ['同比 +16%'] },
          oncology: { label: '肿瘤', notes: ['同比 (0%)'] },
          aesthetics: { label: '美学', notes: ['同比 +8%'] },
          neuroscience: { label: '神经科学', notes: ['同比 +26%'] },
          other_revenue: { label: '其他', notes: ['同比 +30%'] },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 +2 个百分点'] },
          cost_of_products_sold: { label: '产品销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (5%)'] },
          other_expense: { label: '其他' },
          interest: { label: '利息' },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 24%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 16%', '同比 +1 个百分点'] },
          other_opex: { label: '其他', notes: ['占收入 5%', '同比 +3 个百分点'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
