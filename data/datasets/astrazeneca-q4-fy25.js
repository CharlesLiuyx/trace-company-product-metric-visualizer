/* ====================================================================
 * AstraZeneca - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/astrazeneca-q4-fy25.png as a fixed
 * d3-sankey layout with measured SVG geometry and vector annotations.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
  const PURPLE = '#970052';
  const PURPLE_LINK = '#bf86aa';
  const TITLE = '#18547d';
  const NOTE = '#686868';
  const GREEN = '#26a42a';
  const GREEN_LABEL = '#008d49';
  const GREEN_LINK = '#9bcf9a';
  const RED = '#de0500';
  const RED_LABEL = '#a61905';
  const RED_LINK = '#df8585';
  const RIGHT_X = 2398;

  const azLogo = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="0" y="116" fill="${PURPLE}" font-size="104" font-weight="500" textLength="582" lengthAdjust="spacingAndGlyphs">AstraZeneca</text>
      <path d="M626 13 C662 0 668 23 666 63 L704 85 L667 110 L675 144 C680 166 655 172 640 153 L593 98 L630 69 L601 47 C583 32 601 16 626 13 Z M628 40 L618 50 L650 74 L676 86 L646 61 Z M620 96 L655 131 L649 102 L674 88 Z" fill="#f7ad08"/>
    </g>`;

  const brandAnnotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="187" y="543" font-size="23" font-weight="700" fill="#333">TAGRISSO</text><text x="187" y="561" font-size="12" fill="#555">osimertinib</text>
      <text x="216" y="805" font-size="24" font-weight="700" fill="#f05a3c">forxiga</text>
      <text x="200" y="978" font-size="20" font-weight="700" fill="#e54d42">Symbicort</text>
      <text x="198" y="1126" font-size="22" font-weight="700" fill="#1d5d8e">SYNAGIS</text><text x="198" y="1142" font-size="11" fill="#777">PALIVIZUMAB</text>
      <g class="sankey-interactive-annotation" data-node="operating_other_income"><path d="M1718 581 H1790 C1820 581 1820 527 1844 527" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/><rect x="1708" y="590" width="120" height="91" fill="transparent"/><text x="1768" y="630" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">Other</text><text x="1768" y="670" text-anchor="middle" font-size="31" fill="${GREEN_LABEL}">$0.1B</text></g>
    </g>`;

  const brandAnnotationsZh = brandAnnotationsEn.replace('>Other<', '>其他<');

  const zhLayout = {
    oncology: { blocks: [
      { x: 479.5, top: 343, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +22%', size: 28, color: NOTE }] },
      { x: 401, top: 473, anchor: 'end', lines: [{ text: '肿瘤', size: 39, weight: 800 }] },
    ] },
    cvrm: { blocks: [
      { x: 479.5, top: 590, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 (3%)', size: 28, color: NOTE }] },
      { x: 398, top: 666, anchor: 'end', lineGap: 4, lines: [{ text: '心血管、肾脏', size: 33, weight: 800 }, { text: '与代谢', size: 33, weight: 800 }] },
    ] },
    respiratory_immunology: { blocks: [
      { x: 479.5, top: 769, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +12%', size: 28, color: NOTE }] },
      { x: 395, top: 832, anchor: 'end', lineGap: 4, lines: [{ text: '呼吸与', size: 33, weight: 800 }, { text: '免疫', size: 33, weight: 800 }] },
    ] },
    vaccines_immuno_oncology: { blocks: [
      { x: 479.5, top: 940, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 (32%)', size: 28, color: NOTE }] },
      { x: 397, top: 984, anchor: 'end', lineGap: 4, lines: [{ text: '疫苗与', size: 32, weight: 800 }, { text: '免疫肿瘤', size: 32, weight: 800 }] },
    ] },
    rare_disease: { blocks: [
      { x: 479.5, top: 1055, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 (0%)', size: 28, color: NOTE }] },
      { x: 401, top: 1155, anchor: 'end', lines: [{ text: '罕见病', size: 39, weight: 800 }] },
    ] },
    other_medicines: { blocks: [
      { x: 479.5, top: 1214, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 (7%)', size: 28, color: NOTE }] },
      { x: 401, top: 1288, anchor: 'end', lines: [{ text: '其他药品', size: 34, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 947, top: 526, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 +4%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1414, top: 397, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 80%', size: 28, color: NOTE }, { text: '同比 (2 个百分点)', size: 27, color: NOTE }] }] },
    cost_of_sales: { blocks: [{ x: 1414, top: 1098, anchor: 'middle', lineGap: 8, lines: [{ text: '销售成本', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    operating_other_income: { blocks: [] },
    operating_profit: { blocks: [{ x: 1880, top: 289, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 19%', size: 28, color: NOTE }, { text: '同比 +6 个百分点', size: 27, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1880, top: 962, anchor: 'middle', lineGap: 8, lines: [{ text: '营业费用', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    net_profit: { blocks: [{ x: RIGHT_X, top: 347, anchor: 'start', lineGap: 9, lines: [{ text: '净利润', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 15%', size: 28, color: NOTE }, { text: '同比 +5%', size: 28, color: NOTE }] }] },
    other_expenses: { blocks: [{ x: RIGHT_X, top: 580, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    tax: { blocks: [{ x: RIGHT_X, top: 697, anchor: 'start', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 870, anchor: 'start', lineGap: 8, lines: [{ text: '销售、一般及', size: 32, weight: 800 }, { text: '行政费用', size: 32, weight: 800 }, { text: '$value', size: 32 }, { text: '占收入 35%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 27, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 1087, anchor: 'start', lineGap: 8, lines: [{ text: '研发', size: 32, weight: 800 }, { text: '$value', size: 32 }, { text: '占收入 25%', size: 28, color: NOTE }, { text: '同比 (6 个百分点)', size: 27, color: NOTE }] }] },
    opex_other: { blocks: [{ x: RIGHT_X, top: 1282, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 1%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 27, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'astrazeneca-q4-fy25', name: 'AstraZeneca · Q4 FY25', company: 'AstraZeneca',
    meta: {
      company: 'AstraZeneca', title: 'AstraZeneca Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/astrazeneca-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2475, periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 730, logoHeight: 170, logoY: 238, logoViewBox: '0 0 730 170', logoSvg: azLogo,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: PURPLE, label: PURPLE }, hub: { node: PURPLE, label: PURPLE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: brandAnnotationsEn,
    i18n: {
      preservedAnnotationText: ['TAGRISSO', 'osimertinib', 'forxiga', 'Symbicort', 'SYNAGIS', 'PALIVIZUMAB'],
      zh: {
        name: '阿斯利康 · 2025 财年第四季度', meta: { title: '阿斯利康 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2240 },
        nodes: {
          oncology: { label: '肿瘤', notes: ['同比 +22%'] }, cvrm: { label: ['心血管、肾脏', '与代谢'], notes: ['同比 (3%)'] }, respiratory_immunology: { label: ['呼吸与', '免疫'], notes: ['同比 +12%'] }, vaccines_immuno_oncology: { label: ['疫苗与', '免疫肿瘤'], notes: ['同比 (32%)'] }, rare_disease: { label: '罕见病', notes: ['同比 (0%)'] }, other_medicines: { label: '其他药品', notes: ['同比 (7%)'] },
          revenue: { label: '收入', notes: ['同比 +4%'] }, gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 (2 个百分点)'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 +6 个百分点'] }, operating_expenses: { label: '营业费用' }, operating_other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 15%', '同比 +5%'] }, other_expenses: { label: '其他' }, tax: { label: '税费' }, sga: { label: '销售、一般及行政费用', notes: ['占收入 35%', '同比 (1 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 25%', '同比 (6 个百分点)'] }, opex_other: { label: '其他', notes: ['占收入 1%', '同比 +0 个百分点'] },
        }, layout: { labels: zhLayout }, annotationsSvg: brandAnnotationsZh,
      },
    },
    layout: {
      scale: 1,
      nodes: {
        oncology: { x: 443, y: 433, width: 73, height: 133 }, cvrm: { x: 443, y: 677, width: 73, height: 59 }, respiratory_immunology: { x: 443, y: 856, width: 73, height: 45 }, vaccines_immuno_oncology: { x: 443, y: 1027, width: 73, height: 8 }, rare_disease: { x: 443, y: 1142, width: 73, height: 47 }, other_medicines: { x: 443, y: 1301, width: 73, height: 4 },
        revenue: { x: 911, y: 666, width: 73, height: 295 }, gross_profit: { x: 1378, y: 582, width: 72, height: 233 }, cost_of_sales: { x: 1378, y: 1017, width: 72, height: 58 }, operating_profit: { x: 1844, y: 472, width: 72, height: 56 }, operating_other_income: { x: 1717, y: 580, width: 1, height: 2 }, operating_expenses: { x: 1844, y: 760, width: 72, height: 179 }, net_profit: { x: 2312, y: 380, width: 72, height: 44 }, other_expenses: { x: 2312, y: 611, width: 72, height: 5 }, tax: { x: 2312, y: 727, width: 72, height: 5 }, sga: { x: 2312, y: 870, width: 72, height: 102 }, rnd: { x: 2312, y: 1088, width: 72, height: 72 }, opex_other: { x: 2312, y: 1292, width: 72, height: 4 },
      },
      labels: {
        oncology: { blocks: [{ x: 479.5, top: 343, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+22% Y/Y', size: 28, color: NOTE }] }, { x: 401, top: 473, anchor: 'end', lines: [{ text: 'Oncology', size: 39, weight: 800 }] }] },
        cvrm: { blocks: [{ x: 479.5, top: 590, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(3%) Y/Y', size: 28, color: NOTE }] }, { x: 398, top: 666, anchor: 'end', lineGap: 4, lines: [{ text: 'Cardiovascular,', size: 33, weight: 800 }, { text: 'Renal & Metabolism', size: 33, weight: 800 }] }] },
        respiratory_immunology: { blocks: [{ x: 479.5, top: 769, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+12% Y/Y', size: 28, color: NOTE }] }, { x: 395, top: 832, anchor: 'end', lineGap: 4, lines: [{ text: 'Respiratory &', size: 33, weight: 800 }, { text: 'Immunology', size: 33, weight: 800 }] }] },
        vaccines_immuno_oncology: { blocks: [{ x: 479.5, top: 940, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(32%) Y/Y', size: 28, color: NOTE }] }, { x: 397, top: 984, anchor: 'end', lineGap: 4, lines: [{ text: 'Vaccines &', size: 32, weight: 800 }, { text: 'Immuno-Oncology', size: 32, weight: 800 }] }] },
        rare_disease: { blocks: [{ x: 479.5, top: 1055, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(0%) Y/Y', size: 28, color: NOTE }] }, { x: 401, top: 1155, anchor: 'end', lines: [{ text: 'Rare Disease', size: 39, weight: 800 }] }] },
        other_medicines: { blocks: [{ x: 479.5, top: 1214, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(7%) Y/Y', size: 28, color: NOTE }] }, { x: 401, top: 1288, anchor: 'end', lines: [{ text: 'Other medicines', size: 34, weight: 800 }] }] },
        revenue: { blocks: [{ x: 947, top: 526, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+4% Y/Y', size: 28, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1414, top: 397, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '80% margin', size: 28, color: NOTE }, { text: '(2pp) Y/Y', size: 28, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1414, top: 1098, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of sales', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
        operating_profit: { blocks: [{ x: 1880, top: 289, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '19% margin', size: 28, color: NOTE }, { text: '+6pp Y/Y', size: 28, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1880, top: 962, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
        operating_other_income: { blocks: [] },
        net_profit: { blocks: [{ x: RIGHT_X, top: 347, anchor: 'start', lineGap: 9, lines: [{ text: 'Net profit', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '15% margin', size: 28, color: NOTE }, { text: '+5% Y/Y', size: 28, color: NOTE }] }] },
        other_expenses: { blocks: [{ x: RIGHT_X, top: 580, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] }, tax: { blocks: [{ x: RIGHT_X, top: 697, anchor: 'start', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        sga: { blocks: [{ x: RIGHT_X, top: 870, anchor: 'start', lineGap: 8, lines: [{ text: 'SG&A', size: 32, weight: 800 }, { text: '$value', size: 32 }, { text: '35% of revenue', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_X, top: 1087, anchor: 'start', lineGap: 8, lines: [{ text: 'R&D', size: 32, weight: 800 }, { text: '$value', size: 32 }, { text: '25% of revenue', size: 28, color: NOTE }, { text: '(6pp) Y/Y', size: 28, color: NOTE }] }] },
        opex_other: { blocks: [{ x: RIGHT_X, top: 1282, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '1% of revenue', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'oncology', col: 0, order: 0, type: 'source', label: 'Oncology', value: 7.0, notes: ['+22% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'cvrm', col: 0, order: 1, type: 'source', label: ['Cardiovascular,', 'Renal & Metabolism'], value: 3.1, notes: ['(3%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'respiratory_immunology', col: 0, order: 2, type: 'source', label: ['Respiratory &', 'Immunology'], value: 2.4, notes: ['+12% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'vaccines_immuno_oncology', col: 0, order: 3, type: 'source', label: ['Vaccines &', 'Immuno-Oncology'], value: 0.4, notes: ['(32%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'rare_disease', col: 0, order: 4, type: 'source', label: 'Rare Disease', value: 2.4, notes: ['(0%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK }, { id: 'other_medicines', col: 0, order: 5, type: 'source', label: 'Other medicines', value: 0.2, notes: ['(7%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.5, notes: ['+4% Y/Y'], color: PURPLE, labelColor: PURPLE }, { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 12.4, notes: ['80% margin', '(2pp) Y/Y'] }, { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 3.1 }, { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.0, notes: ['19% margin', '+6pp Y/Y'] }, { id: 'operating_other_income', col: 3, order: 1, type: 'profit', label: 'Other', value: 0.1, color: BACKGROUND, labelColor: GREEN_LABEL }, { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: 'Operating expenses', value: 9.5 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 2.3, notes: ['15% margin', '+5% Y/Y'] }, { id: 'other_expenses', col: 4, order: 1, type: 'cost', label: 'Other', value: 0.3 }, { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.3 }, { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 5.5, notes: ['35% of revenue', '(1pp) Y/Y'] }, { id: 'rnd', col: 4, order: 4, type: 'cost', label: 'R&D', value: 3.9, notes: ['25% of revenue', '(6pp) Y/Y'] }, { id: 'opex_other', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.2, notes: ['1% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'oncology', target: 'revenue', value: 7.0, sourceWidth: 133, targetWidth: 131, y0: 499.5, y1: 733.5, linkTint: PURPLE_LINK }, { source: 'cvrm', target: 'revenue', value: 3.1, sourceWidth: 59, targetWidth: 59, y0: 706.5, y1: 828.5, linkTint: PURPLE_LINK }, { source: 'respiratory_immunology', target: 'revenue', value: 2.4, sourceWidth: 45, targetWidth: 45, y0: 878.5, y1: 880.5, linkTint: PURPLE_LINK }, { source: 'vaccines_immuno_oncology', target: 'revenue', value: 0.4, sourceWidth: 8, targetWidth: 8, y0: 1031, y1: 907, linkTint: PURPLE_LINK }, { source: 'rare_disease', target: 'revenue', value: 2.4, sourceWidth: 47, targetWidth: 47, y0: 1165.5, y1: 934.5, linkTint: PURPLE_LINK }, { source: 'other_medicines', target: 'revenue', value: 0.2, sourceWidth: 4, targetWidth: 4, y0: 1303, y1: 959, linkTint: PURPLE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.4, sourceWidth: 237, targetWidth: 233, y0: 786.5, y1: 698.5, linkTint: GREEN_LINK }, { source: 'revenue', target: 'cost_of_sales', value: 3.1, sourceWidth: 58, targetWidth: 58, y0: 932, y1: 1046, linkTint: RED_LINK }, { source: 'gross_profit', target: 'operating_profit', value: 2.9, sourceWidth: 54, targetWidth: 54, y0: 609, y1: 500, linkTint: GREEN_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 9.5, sourceWidth: 179, targetWidth: 179, y0: 725.5, y1: 849.5, linkTint: RED_LINK },
      { source: 'operating_other_income', target: 'operating_profit', value: 0.1, width: 0, sourceWidth: 0, targetWidth: 0, y0: 581, y1: 527, interactionOnly: true, curve: { x0: 1718, x1: 1844, c1x: 1790, c1y: 581, c2x: 1820, c2y: 527 }, },
      { source: 'operating_profit', target: 'net_profit', value: 2.3, sourceWidth: 44, targetWidth: 44, y0: 494, y1: 402, linkTint: GREEN_LINK }, { source: 'operating_profit', target: 'other_expenses', value: 0.3, sourceWidth: 6, targetWidth: 5, y0: 519, y1: 613.5, linkTint: RED_LINK }, { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 6, targetWidth: 5, y0: 525, y1: 729.5, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'sga', value: 5.5, sourceWidth: 103, targetWidth: 102, y0: 811.5, y1: 921, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'rnd', value: 3.9, sourceWidth: 72, targetWidth: 72, y0: 899, y1: 1124, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'opex_other', value: 0.2, sourceWidth: 4, targetWidth: 4, y0: 937, y1: 1294, linkTint: RED_LINK },
    ],
  });
})();
