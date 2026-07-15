/* ====================================================================
 * Applied Materials - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/applied-materials-q4-fy25.png as a
 * fixed d3-sankey layout with a pure SVG company-logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#347da2';
  const BLUE_LABEL = '#2f80a8';
  const BLUE_LINK = '#9cbccc';
  const LOGO_BLUE = '#569bbe';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const appliedMaterialsLogo = `
    <g transform="translate(-11 -6) scale(1 1.17)" fill="none" stroke="${LOGO_BLUE}" stroke-width="16" stroke-linejoin="round" stroke-linecap="butt">
      <path d="M38 36H135C188 36 229 79 229 133V219"/>
      <path d="M24 68H132C169 68 198 99 198 136V219"/>
      <path d="M15 100H128C148 100 166 117 166 138V188"/>
      <path d="M48 104V150C48 184 75 211 110 211H154"/>
      <path d="M82 104V144C82 164 98 180 119 180H154"/>
      <path d="M116 104V148H154V104Z"/>
    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const label = (...blocks) => ({ blocks });

  const enLabels = {
    foundry_logic_other: label(
      block(403, 350, 'middle', [line('$value', 39), line('(18%) Y/Y', 29, 400, NOTE)], 10),
      block(349, 438, 'end', [line('Foundry,', 40, 800), line('logic', 40, 800), line('and other', 40, 800)], 13)
    ),
    dram: label(
      block(393, 659, 'middle', [line('$value', 39), line('+16% Y/Y', 29, 400, NOTE)], 10),
      block(341, 754, 'end', [line('DRAM', 40, 800)])
    ),
    flash_memory: label(
      block(393, 857, 'middle', [line('$value', 39), line('+38% Y/Y', 29, 400, NOTE)], 10),
      block(347, 932, 'end', [line('Flash memory', 40, 800)])
    ),
    semiconductor_systems: label(block(777, 381, 'middle', [line('Semiconductor', 40, 800), line('Systems', 40, 800), line('$value', 39), line('(8%) Y/Y', 29, 400, NOTE)], 10)),
    applied_global_services: label(
      block(777, 933, 'middle', [line('$value', 39), line('(1%) Y/Y', 29, 400, NOTE)], 10),
      block(720, 1053, 'end', [line('Applied Global Services', 40, 800)])
    ),
    display_adjacent_markets: label(
      block(777, 1142, 'middle', [line('$value', 39), line('+68% Y/Y', 29, 400, NOTE)], 10),
      block(717, 1211, 'end', [line('Display and Adjacent Markets', 40, 800)])
    ),
    corporate: label(
      block(777, 1303, 'middle', [line('$value', 39)]),
      block(730, 1331, 'end', [line('Corporate', 40, 800)])
    ),
    revenue: label(block(1151, 536, 'middle', [line('Revenue', 40, 800), line('$value', 39), line('(3%) Y/Y', 29, 400, NOTE)], 10)),
    gross_profit: label(block(1525, 396, 'middle', [line('Gross profit', 40, 800), line('$value', 39), line('48% margin', 29, 400, NOTE), line('+3pp Y/Y', 29, 400, NOTE)], 10)),
    cost_of_revenue: label(block(1525, 1181, 'middle', [line('Cost of', 38, 800), line('revenue', 38, 800), line('$value', 37)], 9)),
    operating_profit: label(block(1898, 300, 'middle', [line('Operating profit', 40, 800), line('$value', 39), line('25% margin', 29, 400, NOTE), line('+4pp Y/Y', 29, 400, NOTE)], 10)),
    operating_expenses: label(block(1898, 895, 'middle', [line('Operating', 38, 800), line('Expenses', 38, 800), line('$value', 37)], 9)),
    other: label(block(2160, 541, 'middle', [line('Other', 31, 800), line('$value', 31)], 8)),
    net_profit: label(block(2382, 382, 'start', [line('Net profit', 40, 800), line('$value', 39), line('28% margin', 29, 400, NOTE), line('+3pp Y/Y', 29, 400, NOTE)], 10)),
    tax: label(block(2471, 650, 'middle', [line('Tax', 31, 800), line('$value', 31)], 8)),
    rnd: label(block(2379, 795, 'start', [line('R&D ($0.9B)', 31, 800), line('13% of revenue', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)], 8)),
    ga: label(block(2390, 939, 'start', [line('G&A ($0.2B)', 31, 800), line('4% of revenue', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)], 8)),
    marketing_selling: label(block(2323, 1079, 'start', [line('Marketing & selling', 31, 800), line('($0.2B)', 31), line('3% of revenue', 29, 400, NOTE), line('+0pp Y/Y', 29, 400, NOTE)], 8)),
    restructuring: label(block(2367, 1249, 'start', [line('Restructuring', 31, 800), line('($0.2B)', 31), line('New', 29, 400, NOTE)], 8)),
  };

  const zhLabels = {
    foundry_logic_other: label(
      block(403, 350, 'middle', [line('$value', 39), line('同比 (18%)', 29, 400, NOTE)], 10),
      block(349, 438, 'end', [line('代工、', 40, 800), line('逻辑', 40, 800), line('及其他', 40, 800)], 13)
    ),
    dram: label(block(393, 659, 'middle', [line('$value', 39), line('同比 +16%', 29, 400, NOTE)], 10), block(341, 754, 'end', [line('DRAM', 40, 800)])),
    flash_memory: label(block(393, 857, 'middle', [line('$value', 39), line('同比 +38%', 29, 400, NOTE)], 10), block(347, 932, 'end', [line('闪存', 40, 800)])),
    semiconductor_systems: label(block(777, 381, 'middle', [line('半导体系统', 40, 800), line('$value', 39), line('同比 (8%)', 29, 400, NOTE)], 10)),
    applied_global_services: label(block(777, 933, 'middle', [line('$value', 39), line('同比 (1%)', 29, 400, NOTE)], 10), block(720, 1053, 'end', [line('应用全球服务', 40, 800)])),
    display_adjacent_markets: label(block(777, 1142, 'middle', [line('$value', 39), line('同比 +68%', 29, 400, NOTE)], 10), block(717, 1211, 'end', [line('显示及相邻市场', 38, 800)])),
    corporate: label(block(777, 1303, 'middle', [line('$value', 39)]), block(730, 1331, 'end', [line('公司部门', 40, 800)])),
    revenue: label(block(1151, 536, 'middle', [line('收入', 40, 800), line('$value', 39), line('同比 (3%)', 29, 400, NOTE)], 10)),
    gross_profit: label(block(1525, 396, 'middle', [line('毛利润', 40, 800), line('$value', 39), line('利润率 48%', 29, 400, NOTE), line('同比 +3 个百分点', 29, 400, NOTE)], 10)),
    cost_of_revenue: label(block(1525, 1181, 'middle', [line('收入', 38, 800), line('成本', 38, 800), line('$value', 37)], 9)),
    operating_profit: label(block(1898, 300, 'middle', [line('营业利润', 40, 800), line('$value', 39), line('利润率 25%', 29, 400, NOTE), line('同比 +4 个百分点', 29, 400, NOTE)], 10)),
    operating_expenses: label(block(1898, 895, 'middle', [line('运营', 38, 800), line('费用', 38, 800), line('$value', 37)], 9)),
    other: label(block(2160, 541, 'middle', [line('其他', 31, 800), line('$value', 31)], 8)),
    net_profit: label(block(2382, 382, 'start', [line('净利润', 40, 800), line('$value', 39), line('利润率 28%', 29, 400, NOTE), line('同比 +3 个百分点', 29, 400, NOTE)], 10)),
    tax: label(block(2471, 650, 'middle', [line('税费', 31, 800), line('$value', 31)], 8)),
    rnd: label(block(2379, 795, 'start', [line('研发 ($0.9B)', 31, 800), line('占收入 13%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)], 8)),
    ga: label(block(2390, 939, 'start', [line('管理费用 ($0.2B)', 31, 800), line('占收入 4%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)], 8)),
    marketing_selling: label(block(2323, 1079, 'start', [line('营销与销售', 31, 800), line('($0.2B)', 31), line('占收入 3%', 29, 400, NOTE), line('同比 +0 个百分点', 29, 400, NOTE)], 8)),
    restructuring: label(block(2367, 1249, 'start', [line('重组费用', 31, 800), line('($0.2B)', 31), line('新增', 29, 400, NOTE)], 8)),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'applied-materials-q4-fy25',
    name: 'Applied Materials · Q4 FY25',
    company: 'Applied Materials',
    meta: {
      company: 'Applied Materials',
      title: 'Applied Materials Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/applied-materials-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 194,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2520,
      periodX: 2356,
      periodY: 267,
      periodNoteY: 311,
      logoWidth: 265,
      logoHeight: 270,
      logoY: 219,
      logoViewBox: '0 0 260 230',
      logoSvg: appliedMaterialsLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: {
        mode: 'error',
        // These minimum source nodes are intentional full visual terminals.
        // Do not inherit the reference raster's partial socket occupancy.
        fullFaceIds: ['flash_memory:right', 'corporate:right'],
      },
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 55.1,
      nodes: {
        foundry_logic_other: { x: 367, y: 439, width: 72, height: 175 },
        dram: { x: 367, y: 750, width: 72, height: 77 },
        flash_memory: { x: 367, y: 947, width: 72, height: 19 },
        semiconductor_systems: { x: 741, y: 577, width: 72, height: 271 },
        applied_global_services: { x: 741, y: 1024, width: 72, height: 91 },
        display_adjacent_markets: { x: 741, y: 1231, width: 72, height: 22 },
        corporate: { x: 741, y: 1358, width: 72, height: 6 },
        revenue: { x: 1115, y: 678, width: 72, height: 373 },
        gross_profit: { x: 1489, y: 574, width: 72, height: 187 },
        cost_of_revenue: { x: 1489, y: 964, width: 72, height: 202 },
        operating_profit: { x: 1862, y: 484, width: 72, height: 98 },
        operating_expenses: { x: 1862, y: 789, width: 72, height: 90 },
        other: { x: 2125, y: 493, width: 72, height: 33 },
        net_profit: { x: 2236, y: 368, width: 72, height: 113 },
        tax: { x: 2236, y: 673, width: 72, height: 22 },
        rnd: { x: 2236, y: 800, width: 72, height: 50 },
        ga: { x: 2236, y: 971, width: 72, height: 11 },
        marketing_selling: { x: 2236, y: 1118, width: 72, height: 11 },
        restructuring: { x: 2236, y: 1272, width: 72, height: 11 },
      },
      labels: enLabels,
    },
    nodes: [
      { id: 'foundry_logic_other', col: 0, order: 0, type: 'source', label: ['Foundry,', 'logic', 'and other'], value: 3.1, notes: ['(18%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'dram', col: 0, order: 1, type: 'source', label: 'DRAM', value: 1.4, notes: ['+16% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'flash_memory', col: 0, order: 2, type: 'source', label: 'Flash memory', value: 0.3, notes: ['+38% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'semiconductor_systems', col: 1, order: 0, type: 'source', label: ['Semiconductor', 'Systems'], value: 4.8, notes: ['(8%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'applied_global_services', col: 1, order: 1, type: 'source', label: 'Applied Global Services', value: 1.6, notes: ['(1%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'display_adjacent_markets', col: 1, order: 2, type: 'source', label: 'Display and Adjacent Markets', value: 0.4, notes: ['+68% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'corporate', col: 1, order: 3, type: 'source', label: 'Corporate', value: 0.1, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 6.8, notes: ['(3%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.3, notes: ['48% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.7, notes: ['25% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 1.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.9, notes: ['28% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 0.9, valueText: '($0.9B)', notes: ['13% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 3, type: 'cost', label: 'G&A', value: 0.2, valueText: '($0.2B)', notes: ['4% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_selling', col: 6, order: 4, type: 'cost', label: 'Marketing & selling', value: 0.2, valueText: '($0.2B)', notes: ['3% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 6, order: 5, type: 'cost', label: 'Restructuring', value: 0.2, valueText: '($0.2B)', notes: ['New'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'foundry_logic_other', target: 'semiconductor_systems', value: 3.1, width: 175, sourceOrder: 0, targetOrder: 0 },
      { source: 'dram', target: 'semiconductor_systems', value: 1.4, width: 77, sourceOrder: 0, targetOrder: 1 },
      { source: 'flash_memory', target: 'semiconductor_systems', value: 0.3, width: 19, sourceWidth: 19, targetWidth: 19, y0: 956.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'semiconductor_systems', target: 'revenue', value: 4.8, width: 238, sourceWidth: 270, targetWidth: 254, sourceOrder: 0, targetOrder: 0 },
      { source: 'applied_global_services', target: 'revenue', value: 1.6, width: 91, sourceOrder: 0, targetOrder: 1 },
      { source: 'display_adjacent_markets', target: 'revenue', value: 0.4, width: 22, sourceWidth: 20, targetWidth: 22, sourceOrder: 0, targetOrder: 2 },
      { source: 'corporate', target: 'revenue', value: 0.1, width: 6, sourceWidth: 6, targetWidth: 6, y0: 1361, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 3.3, width: 181, sourceWidth: 181, targetWidth: 186, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.5, width: 192, sourceWidth: 192, targetWidth: 202, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.7, width: 97, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.6, width: 90, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, width: 85, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, width: 22, sourceWidth: 13, targetWidth: 22, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.6, width: 33, sourceWidth: 31, targetWidth: 28, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, width: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.2, width: 11, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_selling', value: 0.2, width: 11, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.2, width: 11, sourceWidth: 17, targetWidth: 11, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Applied Materials · 2025 财年第四季度',
        meta: { title: 'Applied Materials 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 10 月', titleTextLength: 2260 },
        nodes: {
          foundry_logic_other: { label: ['代工、', '逻辑', '及其他'], notes: ['同比 (18%)'] },
          dram: { label: 'DRAM', notes: ['同比 +16%'] },
          flash_memory: { label: '闪存', notes: ['同比 +38%'] },
          semiconductor_systems: { label: '半导体系统', notes: ['同比 (8%)'] },
          applied_global_services: { label: '应用全球服务', notes: ['同比 (1%)'] },
          display_adjacent_markets: { label: '显示及相邻市场', notes: ['同比 +68%'] },
          corporate: { label: '公司部门' },
          revenue: { label: '收入', notes: ['同比 (3%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 48%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 25%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 28%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 13%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 4%', '同比 +1 个百分点'] },
          marketing_selling: { label: '营销与销售', notes: ['占收入 3%', '同比 +0 个百分点'] },
          restructuring: { label: '重组费用', notes: ['新增'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
