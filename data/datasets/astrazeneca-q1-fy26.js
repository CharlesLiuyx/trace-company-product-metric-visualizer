/* AstraZeneca Q1 FY26 income statement ($B), measured from the Build-bound Source. */
(function () {
  const BACKGROUND = '#f2f2f2';
  const PURPLE = '#8d044c';
  const LOGO_PURPLE = '#870047';
  const PURPLE_LINK = '#c487a6';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_X = 2398;

  const azLogo = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="0" y="116" fill="${LOGO_PURPLE}" font-size="104" font-weight="500" textLength="582" lengthAdjust="spacingAndGlyphs">AstraZeneca</text>
      <path d="M626 13 C662 0 668 23 666 63 L704 85 L667 110 L675 144 C680 166 655 172 640 153 L593 98 L630 69 L601 47 C583 32 601 16 626 13 Z M628 40 L618 50 L650 74 L676 86 L646 61 Z M620 96 L655 131 L649 102 L674 88 Z" fill="#f4ac0a"/>
    </g>`;

  const brandAnnotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="187" y="539" font-size="23" font-weight="700" fill="#333">TAGRISSO</text><text x="187" y="557" font-size="12" fill="#555">osimertinib</text>
      <text x="216" y="801" font-size="24" font-weight="700" fill="#f05a3c">forxiga</text>
      <text x="200" y="974" font-size="20" font-weight="700" fill="#e54d42">Symbicort</text>
      <text x="198" y="1122" font-size="22" font-weight="700" fill="#1d5d8e">SYNAGIS</text><text x="198" y="1138" font-size="11" fill="#777">PALIVIZUMAB</text>
    </g>`;

  const zhLayout = {
    oncology: { blocks: [
      { x: 479.5, top: 311, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +20%', size: 28, color: NOTE }] },
      { x: 343, top: 455, anchor: 'end', lines: [{ text: '肿瘤', size: 39, weight: 800 }] },
    ] },
    cvrm: { blocks: [
      { x: 479.5, top: 582, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比持平', size: 28, color: NOTE }] },
      { x: 358, top: 663, anchor: 'end', lineGap: 4, lines: [{ text: '心血管、肾脏', size: 33, weight: 800 }, { text: '与代谢', size: 33, weight: 800 }] },
    ] },
    respiratory_immunology: { blocks: [
      { x: 479.5, top: 764, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +11%', size: 28, color: NOTE }] },
      { x: 316, top: 838, anchor: 'end', lineGap: 4, lines: [{ text: '呼吸与', size: 33, weight: 800 }, { text: '免疫', size: 33, weight: 800 }] },
    ] },
    vaccines_immuno_oncology: { blocks: [
      { x: 479.5, top: 937, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 (19%)', size: 28, color: NOTE }] },
      { x: 336, top: 988, anchor: 'end', lineGap: 4, lines: [{ text: '疫苗与', size: 32, weight: 800 }, { text: '免疫肿瘤', size: 32, weight: 800 }] },
    ] },
    rare_disease: { blocks: [
      { x: 479.5, top: 1051, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +19%', size: 28, color: NOTE }] },
      { x: 352, top: 1144, anchor: 'end', lines: [{ text: '罕见病', size: 39, weight: 800 }] },
    ] },
    other_medicines: { blocks: [
      { x: 479.5, top: 1207, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +19%', size: 28, color: NOTE }] },
      { x: 353, top: 1278, anchor: 'end', lines: [{ text: '其他药品', size: 34, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 947, top: 483, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 +13%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1408, top: 345, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 82%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 27, color: NOTE }] }] },
    cost_of_sales: { blocks: [{ x: 1414, top: 1085, anchor: 'middle', lineGap: 8, lines: [{ text: '销售成本', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    operating_profit: { blocks: [{ x: 1880, top: 214, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 28%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 27, color: NOTE }] }] },
    operating_other_income: { blocks: [{ x: 1746.5, top: 580, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    operating_expenses: { blocks: [{ x: 1880, top: 953, anchor: 'middle', lineGap: 8, lines: [{ text: '营业费用', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    net_profit: { blocks: [{ x: 2407, top: 265, anchor: 'start', lineGap: 9, lines: [{ text: '净利润', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 20%', size: 28, color: NOTE }, { text: '同比 (1%)', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2450, top: 509, anchor: 'start', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    other_expenses: { blocks: [{ x: 2450, top: 629, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 878, anchor: 'start', lineGap: 8, lines: [{ text: '销售、一般及', size: 32, weight: 800 }, { text: '行政费用', size: 32, weight: 800 }, { text: '$value', size: 32 }, { text: '占收入 32%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 27, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2408, top: 1106, anchor: 'start', lineGap: 8, lines: [{ text: '研发', size: 32, weight: 800 }, { text: '$value', size: 32 }, { text: '占收入 23%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 27, color: NOTE }] }] },
    opex_other: { blocks: [{ x: 2405, top: 1296, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 1%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 27, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'astrazeneca-q1-fy26', name: 'AstraZeneca · Q1 FY26', company: 'AstraZeneca',
    meta: {
      company: 'AstraZeneca', title: 'AstraZeneca Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 2026', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/astrazeneca-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2475, hidePeriodStamp: true,
      logoWidth: 730, logoHeight: 170, logoY: 238, logoViewBox: '0 0 730 170', logoSvg: azLogo,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: PURPLE, label: PURPLE }, hub: { node: PURPLE, label: PURPLE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: brandAnnotations,
    i18n: {
      preservedAnnotationText: ['TAGRISSO', 'osimertinib', 'forxiga', 'Symbicort', 'SYNAGIS', 'PALIVIZUMAB'],
      zh: {
        name: '阿斯利康 · 2026 财年第一季度', meta: { title: '阿斯利康 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 2240 },
        nodes: {
          oncology: { label: '肿瘤', notes: ['同比 +20%'] }, cvrm: { label: ['心血管、肾脏', '与代谢'], notes: ['同比持平'] }, respiratory_immunology: { label: ['呼吸与', '免疫'], notes: ['同比 +11%'] }, vaccines_immuno_oncology: { label: ['疫苗与', '免疫肿瘤'], notes: ['同比 (19%)'] }, rare_disease: { label: '罕见病', notes: ['同比 +19%'] }, other_medicines: { label: '其他药品', notes: ['同比 +19%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] }, gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 (1 个百分点)'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 28%', '同比 +1 个百分点'] }, operating_other_income: { label: '其他' }, operating_expenses: { label: '营业费用' }, net_profit: { label: '净利润', notes: ['利润率 20%', '同比 (1%)'] }, tax: { label: '税费' }, other_expenses: { label: '其他' }, sga: { label: '销售、一般及行政费用', notes: ['占收入 32%', '同比 (1 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 23%', '同比 (0 个百分点)'] }, opex_other: { label: '其他', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLayout },
      },
    },
    layout: {
      scale: 1,
      nodes: {
        oncology: { x: 443, y: 402, width: 73, height: 152 }, cvrm: { x: 443, y: 668, width: 73, height: 72 }, respiratory_immunology: { x: 443, y: 851, width: 73, height: 51 }, vaccines_immuno_oncology: { x: 443, y: 1023, width: 73, height: 4 }, rare_disease: { x: 443, y: 1140, width: 73, height: 54 }, other_medicines: { x: 443, y: 1295, width: 73, height: 7 },
        revenue: { x: 911, y: 624, width: 73, height: 343 }, gross_profit: { x: 1378, y: 528, width: 72, height: 281 }, cost_of_sales: { x: 1378, y: 1016, width: 72, height: 58 }, operating_profit: { x: 1844, y: 393, width: 72, height: 95 }, operating_other_income: { x: 1710, y: 557, width: 73, height: 4 }, operating_expenses: { x: 1844, y: 744, width: 72, height: 190 },
        net_profit: { x: 2312, y: 284, width: 72, height: 67 }, tax: { x: 2312, y: 533, width: 72, height: 17 }, other_expenses: { x: 2312, y: 659, width: 72, height: 5 }, sga: { x: 2312, y: 875, width: 72, height: 109 }, rnd: { x: 2312, y: 1108, width: 72, height: 78 }, opex_other: { x: 2312, y: 1310, width: 72, height: 3 },
      },
      labels: {
        oncology: { blocks: [{ x: 479.5, top: 311, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+20% Y/Y', size: 28, color: NOTE }] }, { x: 343, top: 455, anchor: 'end', lines: [{ text: 'Oncology', size: 39, weight: 800 }] }] },
        cvrm: { blocks: [{ x: 479.5, top: 582, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: 'Flat Y/Y', size: 28, color: NOTE }] }, { x: 358, top: 663, anchor: 'end', lineGap: 4, lines: [{ text: 'Cardiovascular,', size: 33, weight: 800 }, { text: 'Renal & Metabolism', size: 33, weight: 800 }] }] },
        respiratory_immunology: { blocks: [{ x: 479.5, top: 764, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+11% Y/Y', size: 28, color: NOTE }] }, { x: 316, top: 838, anchor: 'end', lineGap: 4, lines: [{ text: 'Respiratory &', size: 33, weight: 800 }, { text: 'Immunology', size: 33, weight: 800 }] }] },
        vaccines_immuno_oncology: { blocks: [{ x: 479.5, top: 937, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(19%) Y/Y', size: 28, color: NOTE }] }, { x: 336, top: 988, anchor: 'end', lineGap: 4, lines: [{ text: 'Vaccines &', size: 32, weight: 800 }, { text: 'Immuno-Oncology', size: 32, weight: 800 }] }] },
        rare_disease: { blocks: [{ x: 479.5, top: 1051, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+19% Y/Y', size: 28, color: NOTE }] }, { x: 352, top: 1144, anchor: 'end', lines: [{ text: 'Rare Disease', size: 39, weight: 800 }] }] },
        other_medicines: { blocks: [{ x: 479.5, top: 1207, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+19% Y/Y', size: 28, color: NOTE }] }, { x: 353, top: 1278, anchor: 'end', lines: [{ text: 'Other medicines', size: 34, weight: 800 }] }] },
        revenue: { blocks: [{ x: 947, top: 483, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+13% Y/Y', size: 28, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1408, top: 345, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '82% margin', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1414, top: 1085, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of sales', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
        operating_profit: { blocks: [{ x: 1880, top: 214, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '28% margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] }] },
        operating_other_income: { blocks: [{ x: 1746.5, top: 580, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        operating_expenses: { blocks: [{ x: 1880, top: 953, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
        net_profit: { blocks: [{ x: 2407, top: 265, anchor: 'start', lineGap: 9, lines: [{ text: 'Net profit', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '20% margin', size: 28, color: NOTE }, { text: '(1%) Y/Y', size: 28, color: NOTE }] }] },
        tax: { blocks: [{ x: 2450, top: 509, anchor: 'start', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        other_expenses: { blocks: [{ x: 2450, top: 629, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        sga: { blocks: [{ x: RIGHT_X, top: 878, anchor: 'start', lines: [{ text: 'SG&A', size: 32, weight: 800 }] }, { x: 2495, top: 878, anchor: 'start', lines: [{ text: '$value', size: 32 }] }, { x: RIGHT_X, top: 919, anchor: 'start', lineGap: 8, lines: [{ text: '32% of revenue', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
        rnd: { blocks: [{ x: 2408, top: 1106, anchor: 'start', lines: [{ text: 'R&D', size: 32, weight: 800 }] }, { x: 2480, top: 1106, anchor: 'start', lines: [{ text: '$value', size: 32 }] }, { x: 2408, top: 1147, anchor: 'start', lineGap: 8, lines: [{ text: '23% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
        opex_other: { blocks: [{ x: 2393, top: 1296, anchor: 'start', lines: [{ text: 'Other', size: 31, weight: 800 }] }, { x: 2490, top: 1296, anchor: 'start', lines: [{ text: '$value', size: 31 }] }, { x: 2393, top: 1338, anchor: 'start', lineGap: 8, lines: [{ text: '1% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'oncology', col: 0, order: 0, type: 'source', label: 'Oncology', value: 6.8, notes: ['+20% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'cvrm', col: 0, order: 1, type: 'source', label: ['Cardiovascular,', 'Renal & Metabolism'], value: 3.3, notes: ['Flat Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'respiratory_immunology', col: 0, order: 2, type: 'source', label: ['Respiratory &', 'Immunology'], value: 2.3, notes: ['+11% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'vaccines_immuno_oncology', col: 0, order: 3, type: 'source', label: ['Vaccines &', 'Immuno-Oncology'], value: 0.2, notes: ['(19%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'rare_disease', col: 0, order: 4, type: 'source', label: 'Rare Disease', value: 2.4, notes: ['+19% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'other_medicines', col: 0, order: 5, type: 'source', label: 'Other medicines', value: 0.3, notes: ['+19% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.3, notes: ['+13% Y/Y'], color: PURPLE, labelColor: PURPLE }, { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 12.6, notes: ['82% margin', '(1pp) Y/Y'] }, { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 2.7 }, { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4.2, notes: ['28% margin', '+1pp Y/Y'] }, { id: 'operating_other_income', col: 3, order: 1, type: 'profit', label: 'Other', value: 0.2 }, { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: 'Operating expenses', value: 8.6 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 3.1, notes: ['20% margin', '(1%) Y/Y'] }, { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.8 }, { id: 'other_expenses', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.3 }, { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 4.9, notes: ['32% of revenue', '(1pp) Y/Y'] }, { id: 'rnd', col: 4, order: 4, type: 'cost', label: 'R&D', value: 3.5, notes: ['23% of revenue', '(0pp) Y/Y'] }, { id: 'opex_other', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.1, notes: ['1% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'oncology', target: 'revenue', value: 6.8, sourceWidth: 152, targetWidth: 152, y0: 478, y1: 700, sourceOrder: 0, targetOrder: 0, linkTint: PURPLE_LINK }, { source: 'cvrm', target: 'revenue', value: 3.3, sourceWidth: 72, targetWidth: 74, y0: 704, y1: 813, sourceOrder: 0, targetOrder: 1, linkTint: PURPLE_LINK }, { source: 'respiratory_immunology', target: 'revenue', value: 2.3, sourceWidth: 51, targetWidth: 52, y0: 876.5, y1: 876, sourceOrder: 0, targetOrder: 2, linkTint: PURPLE_LINK }, { source: 'vaccines_immuno_oncology', target: 'revenue', value: 0.2, sourceWidth: 4, targetWidth: 4, y0: 1025, y1: 904, sourceOrder: 0, targetOrder: 3, linkTint: PURPLE_LINK }, { source: 'rare_disease', target: 'revenue', value: 2.4, sourceWidth: 54, targetWidth: 54, y0: 1167, y1: 933, sourceOrder: 0, targetOrder: 4, linkTint: PURPLE_LINK }, { source: 'other_medicines', target: 'revenue', value: 0.3, sourceWidth: 7, targetWidth: 7, y0: 1298.5, y1: 963.5, sourceOrder: 0, targetOrder: 5, linkTint: PURPLE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.6, sourceWidth: 283, targetWidth: 281, y0: 765.5, y1: 668.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'revenue', target: 'cost_of_sales', value: 2.7, sourceWidth: 60, targetWidth: 58, y0: 937, y1: 1045, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 4.0, sourceWidth: 89, targetWidth: 90, y0: 572.5, y1: 438, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 8.6, sourceWidth: 192, targetWidth: 190, y0: 713, y1: 839, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_other_income', target: 'operating_profit', value: 0.2, sourceWidth: 4, targetWidth: 4, y0: 559, y1: 486, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { x0: 1783, x1: 1844, c1x: 1810, c1y: 559, c2x: 1823, c2y: 486 } },
      { source: 'operating_profit', target: 'net_profit', value: 3.1, sourceWidth: 70, targetWidth: 67, y0: 428, y1: 317.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'operating_profit', target: 'tax', value: 0.8, sourceWidth: 18, targetWidth: 17, y0: 472, y1: 541.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK }, { source: 'operating_profit', target: 'other_expenses', value: 0.3, sourceWidth: 7, targetWidth: 5, y0: 484.5, y1: 661.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 4.9, sourceWidth: 109, targetWidth: 109, y0: 798.5, y1: 929.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'rnd', value: 3.5, sourceWidth: 78, targetWidth: 78, y0: 892, y1: 1147, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'opex_other', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 932.5, y1: 1311.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
  });
})();
