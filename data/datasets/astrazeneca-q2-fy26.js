/* AstraZeneca Q2 FY26 income statement ($B), measured from the Build-bound Source. */
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
      <text x="187" y="514" font-size="23" font-weight="700" fill="#333">TAGRISSO</text><text x="187" y="532" font-size="12" fill="#555">osimertinib</text>
      <text x="216" y="782" font-size="24" font-weight="700" fill="#f05a3c">forxiga</text>
      <text x="200" y="958" font-size="20" font-weight="700" fill="#e54d42">Symbicort</text>
      <text x="198" y="1106" font-size="22" font-weight="700" fill="#1d5d8e">SYNAGIS</text><text x="198" y="1122" font-size="11" fill="#777">PALIVIZUMAB</text>
    </g>`;

  const zhLayout = {
    oncology: { blocks: [
      { x: 479.5, top: 302, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +16%', size: 28, color: NOTE }] },
      { x: 343, top: 430, anchor: 'end', semanticRole: 'top-aligned-side-label', lines: [{ text: '肿瘤', size: 39, weight: 800 }] },
    ] },
    cvrm: { blocks: [
      { x: 479.5, top: 570, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 (15%)', size: 28, color: NOTE }] },
      { x: 358, top: 644, anchor: 'end', lineGap: 4, lines: [{ text: '心血管、肾脏', size: 33, weight: 800 }, { text: '与代谢', size: 33, weight: 800 }] },
    ] },
    respiratory_immunology: { blocks: [
      { x: 479.5, top: 748, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +13%', size: 28, color: NOTE }] },
      { x: 316, top: 821, anchor: 'end', lineGap: 4, lines: [{ text: '呼吸与', size: 33, weight: 800 }, { text: '免疫', size: 33, weight: 800 }] },
    ] },
    vaccines_immuno_oncology: { blocks: [
      { x: 479.5, top: 920, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 (29%)', size: 28, color: NOTE }] },
      { x: 336, top: 972, anchor: 'end', lineGap: 4, lines: [{ text: '疫苗与', size: 32, weight: 800 }, { text: '免疫肿瘤', size: 32, weight: 800 }] },
    ] },
    rare_disease: { blocks: [
      { x: 479.5, top: 1044, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +9%', size: 28, color: NOTE }] },
      { x: 352, top: 1132, anchor: 'end', lines: [{ text: '罕见病', size: 39, weight: 800 }] },
    ] },
    other_medicines: { blocks: [
      { x: 479.5, top: 1208, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 (7%)', size: 28, color: NOTE }] },
      { x: 353, top: 1279, anchor: 'end', lines: [{ text: '其他药品', size: 34, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 947, top: 486, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 +6%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1414, top: 343, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 84%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 27, color: NOTE }] }] },
    cost_of_sales: { blocks: [{ x: 1414, top: 1070, anchor: 'middle', lineGap: 8, lines: [{ text: '销售成本', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    operating_profit: { blocks: [{ x: 1887, top: 229, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 21%', size: 28, color: NOTE }, { text: '同比 (4 个百分点)', size: 27, color: NOTE }] }] },
    operating_other_income: { blocks: [{ x: 1760.5, top: 561, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    operating_expenses: { blocks: [{ x: 1879, top: 912, anchor: 'middle', lineGap: 8, lines: [{ text: '营业费用', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    net_profit: { blocks: [{ x: 2407, top: 270, anchor: 'start', lineGap: 9, lines: [{ text: '净利润', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 16%', size: 28, color: NOTE }, { text: '同比 (1%)', size: 28, color: NOTE }] }] },
    other_expenses: { blocks: [{ x: 2450, top: 511, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    tax: { blocks: [{ x: 2450, top: 607, anchor: 'start', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 850, anchor: 'start', lineGap: 8, lines: [{ text: '销售、一般及', size: 32, weight: 800 }, { text: '行政费用', size: 32, weight: 800 }, { text: '$value', size: 32 }, { text: '占收入 37%', size: 28, color: NOTE }, { text: '同比 +3 个百分点', size: 27, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2408, top: 1052, anchor: 'start', lineGap: 8, lines: [{ text: '研发', size: 32, weight: 800 }, { text: '$value', size: 32 }, { text: '占收入 26%', size: 28, color: NOTE }, { text: '同比 +2 个百分点', size: 27, color: NOTE }] }] },
    opex_other: { blocks: [{ x: 2405, top: 1245, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 1%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 27, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'astrazeneca-q2-fy26', name: 'AstraZeneca · Q2 FY26', company: 'AstraZeneca',
    meta: {
      company: 'AstraZeneca', title: 'AstraZeneca Q2 FY26 Income Statement', period: 'Q2 FY26', periodNote: 'Ending Jun. 2026', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/astrazeneca-q2-fy26.png', width: 2667, height: 1500 },
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
        name: '阿斯利康 · 2026 财年第二季度', meta: { title: '阿斯利康 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月', titleTextLength: 2240 },
        nodes: {
          oncology: { label: '肿瘤', notes: ['同比 +16%'] }, cvrm: { label: ['心血管、肾脏', '与代谢'], notes: ['同比 (15%)'] }, respiratory_immunology: { label: ['呼吸与', '免疫'], notes: ['同比 +13%'] }, vaccines_immuno_oncology: { label: ['疫苗与', '免疫肿瘤'], notes: ['同比 (29%)'] }, rare_disease: { label: '罕见病', notes: ['同比 +9%'] }, other_medicines: { label: '其他药品', notes: ['同比 (7%)'] },
          revenue: { label: '收入', notes: ['同比 +6%'] }, gross_profit: { label: '毛利润', notes: ['利润率 84%', '同比 +1 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 21%', '同比 (4 个百分点)'] }, operating_other_income: { label: '其他' }, operating_expenses: { label: '营业费用' }, net_profit: { label: '净利润', notes: ['利润率 16%', '同比 (1%)'] }, tax: { label: '税费' }, other_expenses: { label: '其他' }, sga: { label: '销售、一般及行政费用', notes: ['占收入 37%', '同比 +3 个百分点'] }, rnd: { label: '研发', notes: ['占收入 26%', '同比 +2 个百分点'] }, opex_other: { label: '其他', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLayout },
      },
    },
    layout: {
      scale: 1,
      nodes: {
        oncology: { x: 443, y: 393, width: 73, height: 150 }, cvrm: { x: 443, y: 656, width: 73, height: 56 }, respiratory_immunology: { x: 443, y: 836, width: 73, height: 50 }, vaccines_immuno_oncology: { x: 443, y: 1007, width: 73, height: 3 }, rare_disease: { x: 443, y: 1131, width: 73, height: 51 }, other_medicines: { x: 443, y: 1296, width: 73, height: 5 },
        revenue: { x: 911, y: 626, width: 73, height: 318 }, gross_profit: { x: 1378, y: 521, width: 72, height: 266 }, cost_of_sales: { x: 1378, y: 1008, width: 72, height: 53 }, operating_profit: { x: 1844, y: 407, width: 72, height: 64 }, operating_other_income: { x: 1727, y: 538, width: 73, height: 5 }, operating_expenses: { x: 1844, y: 689, width: 72, height: 203 },
        net_profit: { x: 2312, y: 294, width: 72, height: 51 }, other_expenses: { x: 2312, y: 542, width: 72, height: 9 }, tax: { x: 2312, y: 635, width: 72, height: 7 }, sga: { x: 2312, y: 836, width: 72, height: 116 }, rnd: { x: 2312, y: 1056, width: 72, height: 84 }, opex_other: { x: 2312, y: 1255, width: 72, height: 3 },
      },
      labels: {
        oncology: { blocks: [{ x: 479.5, top: 302, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+16% Y/Y', size: 28, color: NOTE }] }, { x: 343, top: 430, anchor: 'end', semanticRole: 'top-aligned-side-label', lines: [{ text: 'Oncology', size: 39, weight: 800 }] }] },
        cvrm: { blocks: [{ x: 479.5, top: 570, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(15%) Y/Y', size: 28, color: NOTE }] }, { x: 358, top: 644, anchor: 'end', lineGap: 4, lines: [{ text: 'Cardiovascular,', size: 33, weight: 800 }, { text: 'Renal & Metabolism', size: 33, weight: 800 }] }] },
        respiratory_immunology: { blocks: [{ x: 479.5, top: 748, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+13% Y/Y', size: 28, color: NOTE }] }, { x: 316, top: 821, anchor: 'end', lineGap: 4, lines: [{ text: 'Respiratory &', size: 33, weight: 800 }, { text: 'Immunology', size: 33, weight: 800 }] }] },
        vaccines_immuno_oncology: { blocks: [{ x: 479.5, top: 920, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(29%) Y/Y', size: 28, color: NOTE }] }, { x: 336, top: 972, anchor: 'end', lineGap: 4, lines: [{ text: 'Vaccines &', size: 32, weight: 800 }, { text: 'Immuno-Oncology', size: 32, weight: 800 }] }] },
        rare_disease: { blocks: [{ x: 479.5, top: 1044, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+9% Y/Y', size: 28, color: NOTE }] }, { x: 352, top: 1132, anchor: 'end', lines: [{ text: 'Rare Disease', size: 39, weight: 800 }] }] },
        other_medicines: { blocks: [{ x: 479.5, top: 1208, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(7%) Y/Y', size: 28, color: NOTE }] }, { x: 353, top: 1279, anchor: 'end', lines: [{ text: 'Other medicines', size: 34, weight: 800 }] }] },
        revenue: { blocks: [{ x: 947, top: 486, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+6% Y/Y', size: 28, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1414, top: 343, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '84% margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1414, top: 1070, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of sales', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
        operating_profit: { blocks: [{ x: 1887, top: 229, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '21% margin', size: 28, color: NOTE }, { text: '(4pp) Y/Y', size: 28, color: NOTE }] }] },
        operating_other_income: { blocks: [{ x: 1760.5, top: 561, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        operating_expenses: { blocks: [{ x: 1879, top: 912, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
        net_profit: { blocks: [{ x: 2407, top: 270, anchor: 'start', lineGap: 9, lines: [{ text: 'Net profit', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '16% margin', size: 28, color: NOTE }, { text: '(1%) Y/Y', size: 28, color: NOTE }] }] },
        other_expenses: { blocks: [{ x: 2450, top: 511, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        tax: { blocks: [{ x: 2450, top: 607, anchor: 'start', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        sga: { blocks: [{ x: RIGHT_X, top: 850, anchor: 'start', lines: [{ text: 'SG&A', size: 32, weight: 800 }] }, { x: 2495, top: 850, anchor: 'start', lines: [{ text: '$value', size: 32 }] }, { x: RIGHT_X, top: 891, anchor: 'start', lineGap: 8, lines: [{ text: '37% of revenue', size: 28, color: NOTE }, { text: '+3pp Y/Y', size: 28, color: NOTE }] }] },
        rnd: { blocks: [{ x: 2408, top: 1052, anchor: 'start', lines: [{ text: 'R&D', size: 32, weight: 800 }] }, { x: 2480, top: 1052, anchor: 'start', lines: [{ text: '$value', size: 32 }] }, { x: 2408, top: 1093, anchor: 'start', lineGap: 8, lines: [{ text: '26% of revenue', size: 28, color: NOTE }, { text: '+2pp Y/Y', size: 28, color: NOTE }] }] },
        opex_other: { blocks: [{ x: 2405, top: 1245, anchor: 'start', lines: [{ text: 'Other', size: 31, weight: 800 }] }, { x: 2502, top: 1245, anchor: 'start', lines: [{ text: '$value', size: 31 }] }, { x: 2405, top: 1287, anchor: 'start', lineGap: 8, lines: [{ text: '1% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'oncology', col: 0, order: 0, type: 'source', label: 'Oncology', value: 7.3, notes: ['+16% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'cvrm', col: 0, order: 1, type: 'source', label: ['Cardiovascular,', 'Renal & Metabolism'], value: 2.8, notes: ['(15%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'respiratory_immunology', col: 0, order: 2, type: 'source', label: ['Respiratory &', 'Immunology'], value: 2.4, notes: ['+13% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'vaccines_immuno_oncology', col: 0, order: 3, type: 'source', label: ['Vaccines &', 'Immuno-Oncology'], value: 0.1, notes: ['(29%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'rare_disease', col: 0, order: 4, type: 'source', label: 'Rare Disease', value: 2.5, notes: ['+9% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'other_medicines', col: 0, order: 5, type: 'source', label: 'Other medicines', value: 0.2, notes: ['(7%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.4, notes: ['+6% Y/Y'], color: PURPLE, labelColor: PURPLE }, { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 12.9, notes: ['84% margin', '+1pp Y/Y'] }, { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 2.5 }, { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.2, notes: ['21% margin', '(4pp) Y/Y'] }, { id: 'operating_other_income', col: 3, order: 1, type: 'profit', label: 'Other', value: 0.2 }, { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: 'Operating expenses', value: 9.8 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 2.5, notes: ['16% margin', '(1%) Y/Y'] }, { id: 'other_expenses', col: 4, order: 1, type: 'cost', label: 'Other', value: 0.4 }, { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.3 }, { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 5.7, notes: ['37% of revenue', '+3pp Y/Y'] }, { id: 'rnd', col: 4, order: 4, type: 'cost', label: 'R&D', value: 4.1, notes: ['26% of revenue', '+2pp Y/Y'] }, { id: 'opex_other', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.1, notes: ['1% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'oncology', target: 'revenue', value: 7.3, sourceWidth: 150, targetWidth: 151, y0: 468, y1: 701.5, sourceOrder: 0, targetOrder: 0, linkTint: PURPLE_LINK }, { source: 'cvrm', target: 'revenue', value: 2.8, sourceWidth: 56, targetWidth: 58, y0: 684, y1: 806, sourceOrder: 0, targetOrder: 1, linkTint: PURPLE_LINK }, { source: 'respiratory_immunology', target: 'revenue', value: 2.4, sourceWidth: 50, targetWidth: 50, y0: 861, y1: 860, sourceOrder: 0, targetOrder: 2, linkTint: PURPLE_LINK }, { source: 'vaccines_immuno_oncology', target: 'revenue', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 1008.5, y1: 886.5, sourceOrder: 0, targetOrder: 3, linkTint: PURPLE_LINK }, { source: 'rare_disease', target: 'revenue', value: 2.5, sourceWidth: 51, targetWidth: 51, y0: 1156.5, y1: 913.5, sourceOrder: 0, targetOrder: 4, linkTint: PURPLE_LINK }, { source: 'other_medicines', target: 'revenue', value: 0.2, sourceWidth: 5, targetWidth: 5, y0: 1298.5, y1: 941.5, sourceOrder: 0, targetOrder: 5, linkTint: PURPLE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.9, sourceWidth: 266, targetWidth: 266, y0: 759, y1: 654, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'revenue', target: 'cost_of_sales', value: 2.5, sourceWidth: 52, targetWidth: 53, y0: 918, y1: 1034.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 3.0, sourceWidth: 62, targetWidth: 59, y0: 552, y1: 436.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 9.8, sourceWidth: 204, targetWidth: 203, y0: 685, y1: 790.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_other_income', target: 'operating_profit', value: 0.2, sourceWidth: 5, targetWidth: 5, y0: 540.5, y1: 468.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { x0: 1800, x1: 1844, c1x: 1816, c1y: 540.5, c2x: 1830, c2y: 468.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 2.5, sourceWidth: 50, targetWidth: 51, y0: 432, y1: 319.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'operating_profit', target: 'other_expenses', value: 0.4, sourceWidth: 8, targetWidth: 9, y0: 461, y1: 546.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK }, { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 6, targetWidth: 7, y0: 468, y1: 638.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 5.7, sourceWidth: 116, targetWidth: 116, y0: 747, y1: 894, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'rnd', value: 4.1, sourceWidth: 84, targetWidth: 84, y0: 847, y1: 1098, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'opex_other', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 890.5, y1: 1256.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
  });
})();
