/* ====================================================================
 * AstraZeneca - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/astrazeneca-q3-fy25.png as a fixed
 * d3-sankey layout with measured SVG geometry and vector annotations.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
  const PURPLE = '#8d044c';
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
      <text x="43" y="142" fill="${PURPLE}" font-size="104" font-weight="500" textLength="542" lengthAdjust="spacingAndGlyphs">AstraZeneca</text>
      <path transform="translate(659.5 59.5) scale(1.2385 1.0714) translate(-648.5 -86)" d="M626 13 C662 0 668 23 666 63 L704 85 L667 110 L675 144 C680 166 655 172 640 153 L593 98 L630 69 L601 47 C583 32 601 16 626 13 Z M628 40 L618 50 L650 74 L676 86 L646 61 Z M620 96 L655 131 L649 102 L674 88 Z" fill="#f4ac0a"/>
    </g>`;

  const brandAnnotations = `
    <g data-typography-role="brand" font-family="Montserrat,Arial,sans-serif">
      <g transform="translate(187 527)">
        <path d="M14 4 C8 9 6 17 8 27 C11 24 14 21 17 19 L17 6 Z" fill="#7b2b83"/><path d="M20 6 L20 19 C23 21 26 24 29 27 C31 17 29 9 23 4 Z" fill="#15a5aa"/><path d="M17 18 C13 18 10 21 8 27" fill="none" stroke="#f1a928" stroke-width="3"/><path d="M20 18 C24 18 27 21 29 27" fill="none" stroke="#85ad34" stroke-width="3"/>
        <text x="36" y="18" font-size="23" font-weight="700" fill="#333">TAGRISSO</text><text x="36" y="33" font-size="12" fill="#555">osimertinib</text>
      </g>
      <g transform="translate(214 758)">
        <rect x="28" y="0" width="8" height="8" fill="#ef5d42"/><rect x="37" y="4" width="8" height="8" fill="#4ea8d8"/><rect x="27" y="10" width="8" height="8" fill="#f0a229"/>
        <text x="0" y="31" font-size="24" font-weight="700" fill="#f05a3c">forxiga</text>
      </g>
      <g transform="translate(198 925)">
        <text x="0" y="23" font-size="20" font-weight="700" fill="#e54d42">Symbicort</text><path d="M101 23 C116 13 126 14 131 23 C124 33 112 35 101 29" fill="none" stroke="#348dc4" stroke-width="3"/>
        <text x="10" y="38" font-size="8" fill="#888">budesonide/formoterol</text>
      </g>
      <g transform="translate(197 1078)">
        <text x="0" y="22" font-size="22" font-weight="700" fill="#1d5d8e">SYNAGIS</text><text x="0" y="37" font-size="11" fill="#777">PALIVIZUMAB</text><circle cx="91" cy="30" r="9" fill="#a6a6a6"/><circle cx="91" cy="30" r="3" fill="#f2f2f2"/>
      </g>
    </g>`;

  const zhLayout = {
    oncology: { blocks: [
      { x: 479.5, top: 350, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +19%', size: 28, color: NOTE }] },
      { x: 339, top: 470, anchor: 'end', lines: [{ text: '肿瘤', size: 39, weight: 800 }] },
    ] },
    cvrm: { blocks: [
      { x: 479.5, top: 580, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +2%', size: 28, color: NOTE }] },
      { x: 419, top: 660, anchor: 'end', lineGap: 4, lines: [{ text: '心血管、肾脏', size: 39, weight: 800 }, { text: '与代谢', size: 39, weight: 800 }] },
    ] },
    respiratory_immunology: { blocks: [
      { x: 479.5, top: 763, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +15%', size: 28, color: NOTE }] },
      { x: 363, top: 833, anchor: 'end', lineGap: 4, lines: [{ text: '呼吸与', size: 39, weight: 800 }, { text: '免疫', size: 39, weight: 800 }] },
    ] },
    vaccines_immuno_oncology: { blocks: [
      { x: 479.5, top: 926, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 (10%)', size: 28, color: NOTE }] },
      { x: 398, top: 982, anchor: 'end', lineGap: 4, lines: [{ text: '疫苗与', size: 39, weight: 800 }, { text: '免疫肿瘤', size: 39, weight: 800 }] },
    ] },
    rare_disease: { blocks: [
      { x: 479.5, top: 1054, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +12%', size: 28, color: NOTE }] },
      { x: 354, top: 1141, anchor: 'end', lines: [{ text: '罕见病', size: 39, weight: 800 }] },
    ] },
    other_medicines: { blocks: [
      { x: 479.5, top: 1213, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 (10%)', size: 28, color: NOTE }] },
      { x: 399, top: 1279, anchor: 'end', lines: [{ text: '其他药品', size: 39, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 947, top: 525, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 +12%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1414, top: 379, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 82%', size: 28, color: NOTE }, { text: '同比 +4 个百分点', size: 27, color: NOTE }] }] },
    cost_of_sales: { blocks: [{ x: 1414, top: 1055, anchor: 'middle', lineGap: 8, lines: [{ text: '销售成本', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    operating_other_income: { blocks: [{ x: 1765, top: 573, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    operating_profit: { blocks: [{ x: 1880, top: 255, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 24%', size: 28, color: NOTE }, { text: '同比 +8 个百分点', size: 27, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1880, top: 914, anchor: 'middle', lineGap: 8, lines: [{ text: '营业费用', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    net_profit: { blocks: [{ x: 2406, top: 293, anchor: 'start', lineGap: 9, lines: [{ text: '净利润', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 17%', size: 28, color: NOTE }, { text: '同比 +6%', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2450, top: 529, anchor: 'start', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    other_expenses: { blocks: [{ x: 2450, top: 642, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    sga: { blocks: [
      { x: 2399, top: 850, anchor: 'start', lineGap: 4, lines: [{ text: '销售、一般及', size: 28, weight: 800 }, { text: '行政费用', size: 28, weight: 800 }, { text: '$value', size: 28 }] },
      { x: 2399, top: 963, anchor: 'start', lineGap: 4, lines: [{ text: '占收入 33%', size: 24, color: NOTE }, { text: '同比 (4 个百分点)', size: 23, color: NOTE }] },
    ] },
    rnd: { blocks: [
      { x: 2402, top: 1080, anchor: 'start', lines: [{ text: '研发', size: 32, weight: 800 }] },
      { x: 2466, top: 1080, anchor: 'start', lines: [{ text: '$value', size: 32 }] },
      { x: 2402, top: 1123, anchor: 'start', lineGap: 8, lines: [{ text: '占收入 24%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 27, color: NOTE }] },
    ] },
    opex_other: { blocks: [
      { x: 2402, top: 1273, anchor: 'start', lines: [{ text: '其他', size: 31, weight: 800 }] },
      { x: 2493, top: 1273, anchor: 'start', lines: [{ text: '$value', size: 31 }] },
      { x: 2402, top: 1315, anchor: 'start', lineGap: 8, lines: [{ text: '占收入 1%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 27, color: NOTE }] },
    ] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'astrazeneca-q3-fy25', name: 'AstraZeneca · Q3 FY25', company: 'AstraZeneca',
    meta: {
      company: 'AstraZeneca', title: 'AstraZeneca Q3 FY25 Income Statement', period: 'Q3 FY25', periodNote: 'Ending Sep. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/astrazeneca-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 201, titleSize: 128, titleWeight: 800, titleTextLength: 2504, hidePeriodStamp: true,
      logoWidth: 730, logoHeight: 170, logoY: 238, logoViewBox: '0 0 730 170', logoSvg: azLogo,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: PURPLE, label: PURPLE }, hub: { node: PURPLE, label: PURPLE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: brandAnnotations,
    i18n: {
      preservedAnnotationText: ['TAGRISSO', 'osimertinib', 'forxiga', 'Symbicort', 'budesonide/formoterol', 'SYNAGIS', 'PALIVIZUMAB'],
      zh: {
        name: '阿斯利康 · 2025 财年第三季度', meta: { title: '阿斯利康 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月', titleTextLength: 2240 },
        nodes: {
          oncology: { label: '肿瘤', notes: ['同比 +19%'] }, cvrm: { label: ['心血管、肾脏', '与代谢'], notes: ['同比 +2%'] }, respiratory_immunology: { label: ['呼吸与', '免疫'], notes: ['同比 +15%'] }, vaccines_immuno_oncology: { label: ['疫苗与', '免疫肿瘤'], notes: ['同比 (10%)'] }, rare_disease: { label: '罕见病', notes: ['同比 +12%'] }, other_medicines: { label: '其他药品', notes: ['同比 (10%)'] },
          revenue: { label: '收入', notes: ['同比 +12%'] }, gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +4 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 24%', '同比 +8 个百分点'] }, operating_expenses: { label: '营业费用' }, operating_other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 17%', '同比 +6%'] }, tax: { label: '税费' }, other_expenses: { label: '其他' }, sga: { label: '销售、一般及行政费用', notes: ['占收入 33%', '同比 (4 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 24%', '同比 +1 个百分点'] }, opex_other: { label: '其他', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        }, layout: { labels: zhLayout },
      },
    },
    layout: {
      scale: 1,
      nodes: {
        oncology: { x: 443, y: 438, width: 73, height: 126 }, cvrm: { x: 443, y: 668, width: 73, height: 63 }, respiratory_immunology: { x: 443, y: 851, width: 73, height: 45 }, vaccines_immuno_oncology: { x: 443, y: 1014, width: 73, height: 10 }, rare_disease: { x: 443, y: 1143, width: 73, height: 47 }, other_medicines: { x: 443, y: 1301, width: 73, height: 6 },
        revenue: { x: 911, y: 665, width: 72, height: 287 }, gross_profit: { x: 1375, y: 561, width: 72, height: 236 }, cost_of_sales: { x: 1378, y: 986, width: 71, height: 55 }, operating_profit: { x: 1846, y: 437, width: 70, height: 70 }, operating_other_income: { x: 1725, y: 550, width: 74, height: 3 }, operating_expenses: { x: 1846, y: 731, width: 70, height: 170 },
        net_profit: { x: 2312, y: 322, width: 71, height: 50 }, tax: { x: 2312, y: 554, width: 71, height: 14 }, other_expenses: { x: 2312, y: 670, width: 71, height: 7 }, sga: { x: 2312, y: 850, width: 71, height: 98 }, rnd: { x: 2312, y: 1078, width: 71, height: 70 }, opex_other: { x: 2312, y: 1292, width: 71, height: 4 },
      },
      labels: {
        oncology: { blocks: [{ x: 479.5, top: 350, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+19% Y/Y', size: 28, color: NOTE }] }, { x: 339, top: 470, anchor: 'end', lines: [{ text: 'Oncology', size: 39, weight: 800 }] }] },
        cvrm: { blocks: [{ x: 479.5, top: 580, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+2% Y/Y', size: 28, color: NOTE }] }, { x: 419, top: 660, anchor: 'end', lineGap: 4, lines: [{ text: 'Cardiovascular,', size: 39, weight: 800 }, { text: 'Renal & Metabolism', size: 39, weight: 800 }] }] },
        respiratory_immunology: { blocks: [{ x: 479.5, top: 763, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+15% Y/Y', size: 28, color: NOTE }] }, { x: 363, top: 833, anchor: 'end', lineGap: 4, lines: [{ text: 'Respiratory &', size: 39, weight: 800 }, { text: 'Immunology', size: 39, weight: 800 }] }] },
        vaccines_immuno_oncology: { blocks: [{ x: 479.5, top: 926, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(10%) Y/Y', size: 28, color: NOTE }] }, { x: 398, top: 982, anchor: 'end', lineGap: 4, lines: [{ text: 'Vaccines &', size: 39, weight: 800 }, { text: 'Immuno-Oncology', size: 39, weight: 800 }] }] },
        rare_disease: { blocks: [{ x: 479.5, top: 1054, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+12% Y/Y', size: 28, color: NOTE }] }, { x: 354, top: 1141, anchor: 'end', lines: [{ text: 'Rare Disease', size: 39, weight: 800 }] }] },
        other_medicines: { blocks: [{ x: 479.5, top: 1213, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(10%) Y/Y', size: 28, color: NOTE }] }, { x: 399, top: 1279, anchor: 'end', lines: [{ text: 'Other medicines', size: 39, weight: 800 }] }] },
        revenue: { blocks: [{ x: 947, top: 525, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+12% Y/Y', size: 28, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1414, top: 379, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '82% margin', size: 28, color: NOTE }, { text: '+4pp Y/Y', size: 28, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1414, top: 1055, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of sales', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
        operating_other_income: { blocks: [{ x: 1765, top: 573, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        operating_profit: { blocks: [{ x: 1880, top: 255, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '24% margin', size: 28, color: NOTE }, { text: '+8pp Y/Y', size: 28, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1880, top: 914, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
        net_profit: { blocks: [{ x: 2406, top: 293, anchor: 'start', lineGap: 9, lines: [{ text: 'Net profit', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '17% margin', size: 28, color: NOTE }, { text: '+6% Y/Y', size: 28, color: NOTE }] }] },
        tax: { blocks: [{ x: 2450, top: 529, anchor: 'start', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        other_expenses: { blocks: [{ x: 2450, top: 642, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        sga: { blocks: [
          { x: 2399, top: 856, anchor: 'start', lines: [{ text: 'SG&A', size: 32, weight: 800 }] },
          { x: 2485, top: 856, anchor: 'start', lines: [{ text: '$value', size: 32 }] },
          { x: 2399, top: 899, anchor: 'start', lineGap: 8, lines: [{ text: '33% of revenue', size: 28, color: NOTE }, { text: '(4pp) Y/Y', size: 28, color: NOTE }] },
        ] },
        rnd: { blocks: [
          { x: 2402, top: 1080, anchor: 'start', lines: [{ text: 'R&D', size: 32, weight: 800 }] },
          { x: 2466, top: 1080, anchor: 'start', lines: [{ text: '$value', size: 32 }] },
          { x: 2402, top: 1123, anchor: 'start', lineGap: 8, lines: [{ text: '24% of revenue', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] },
        ] },
        opex_other: { blocks: [
          { x: 2402, top: 1273, anchor: 'start', lines: [{ text: 'Other', size: 31, weight: 800 }] },
          { x: 2493, top: 1273, anchor: 'start', lines: [{ text: '$value', size: 31 }] },
          { x: 2402, top: 1315, anchor: 'start', lineGap: 8, lines: [{ text: '1% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] },
        ] },
      },
    },
    nodes: [
      { id: 'oncology', col: 0, order: 0, type: 'source', label: 'Oncology', value: 6.6, notes: ['+19% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'cvrm', col: 0, order: 1, type: 'source', label: ['Cardiovascular,', 'Renal & Metabolism'], value: 3.2, notes: ['+2% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'respiratory_immunology', col: 0, order: 2, type: 'source', label: ['Respiratory &', 'Immunology'], value: 2.3, notes: ['+15% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'vaccines_immuno_oncology', col: 0, order: 3, type: 'source', label: ['Vaccines &', 'Immuno-Oncology'], value: 0.4, notes: ['(10%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'rare_disease', col: 0, order: 4, type: 'source', label: 'Rare Disease', value: 2.4, notes: ['+12% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'other_medicines', col: 0, order: 5, type: 'source', label: 'Other medicines', value: 0.2, notes: ['(10%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.2, notes: ['+12% Y/Y'], color: PURPLE, labelColor: PURPLE }, { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 12.4, notes: ['82% margin', '+4pp Y/Y'] }, { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 2.8 }, { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.6, notes: ['24% margin', '+8pp Y/Y'] }, { id: 'operating_other_income', col: 3, order: 1, type: 'profit', label: 'Other', value: 0.1, color: GREEN_LINK, labelColor: GREEN_LABEL }, { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: 'Operating expenses', value: 8.9 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 2.5, notes: ['17% margin', '+6% Y/Y'] }, { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.7 }, { id: 'other_expenses', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.3 }, { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 5.1, notes: ['33% of revenue', '(4pp) Y/Y'] }, { id: 'rnd', col: 4, order: 4, type: 'cost', label: 'R&D', value: 3.7, notes: ['24% of revenue', '+1pp Y/Y'] }, { id: 'opex_other', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.1, notes: ['1% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'oncology', target: 'revenue', value: 6.6, sourceWidth: 126, targetWidth: 124, y0: 501, y1: 727, linkTint: PURPLE_LINK }, { source: 'cvrm', target: 'revenue', value: 3.2, sourceWidth: 63, targetWidth: 61, y0: 699.5, y1: 819.5, linkTint: PURPLE_LINK }, { source: 'respiratory_immunology', target: 'revenue', value: 2.3, sourceWidth: 45, targetWidth: 45, y0: 873.5, y1: 872.5, linkTint: PURPLE_LINK }, { source: 'vaccines_immuno_oncology', target: 'revenue', value: 0.4, sourceWidth: 10, targetWidth: 8, y0: 1019, y1: 899, linkTint: PURPLE_LINK }, { source: 'rare_disease', target: 'revenue', value: 2.4, sourceWidth: 47, targetWidth: 47, y0: 1166.5, y1: 926.5, linkTint: PURPLE_LINK }, { source: 'other_medicines', target: 'revenue', value: 0.2, sourceWidth: 6, targetWidth: 4, y0: 1304, y1: 949, linkTint: PURPLE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.4, sourceWidth: 235, targetWidth: 236, y0: 782.5, y1: 679, linkTint: GREEN_LINK }, { source: 'revenue', target: 'cost_of_sales', value: 2.8, sourceWidth: 52, targetWidth: 55, y0: 926, y1: 1013.5, linkTint: RED_LINK }, { source: 'gross_profit', target: 'operating_profit', value: 3.5, sourceWidth: 68, targetWidth: 70, y0: 595, y1: 472, linkTint: GREEN_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 8.9, sourceWidth: 168, targetWidth: 170, y0: 713, y1: 816, linkTint: RED_LINK },
      { source: 'operating_other_income', target: 'operating_profit', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 551.5, y1: 505, linkTint: GREEN_LINK, curve: { x0: 1799, x1: 1846, c1x: 1812, c1y: 551.5, c2x: 1825, c2y: 505 } },
      { source: 'operating_profit', target: 'net_profit', value: 2.5, sourceWidth: 50, targetWidth: 50, y0: 462, y1: 347, linkTint: GREEN_LINK }, { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 14, targetWidth: 14, y0: 494, y1: 561, linkTint: RED_LINK }, { source: 'operating_profit', target: 'other_expenses', value: 0.3, sourceWidth: 6, targetWidth: 7, y0: 504, y1: 673.5, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'sga', value: 5.1, sourceWidth: 97, targetWidth: 98, y0: 779.5, y1: 899, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'rnd', value: 3.7, sourceWidth: 70, targetWidth: 70, y0: 863, y1: 1113, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'opex_other', value: 0.1, sourceWidth: 3, targetWidth: 4, y0: 899.5, y1: 1294, linkTint: RED_LINK },
    ],
  });
})();
