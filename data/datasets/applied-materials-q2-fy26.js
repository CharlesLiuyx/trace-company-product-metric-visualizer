/* ====================================================================
 * Applied Materials - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/applied-materials-q2-fy26.png as a
 * fixed d3-sankey layout with pure SVG logo annotation.
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

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'applied-materials-q2-fy26',
    name: 'Applied Materials · Q2 FY26',
    company: 'Applied Materials',
    meta: {
      company: 'Applied Materials',
      title: 'Applied Materials Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/applied-materials-q2-fy26.png', width: 2667, height: 1500 },
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
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },

    layout: {
      scale: 40.5,
      nodes: {
        foundry_logic_other: { x: 367, y: 437, width: 72, height: 160 },
        dram: { x: 367, y: 744, width: 72, height: 69 },
        flash_memory: { x: 367, y: 958, width: 72, height: 9 },
        semiconductor_systems: { x: 741, y: 582, width: 72, height: 241 },
        applied_global_services: { x: 741, y: 1016, width: 72, height: 65 },
        other_revenue: { x: 741, y: 1231, width: 72, height: 10 },
        revenue: { x: 1115, y: 696, width: 72, height: 320 },
        gross_profit: { x: 1487, y: 585, width: 72, height: 160 },
        cost_of_revenue: { x: 1487, y: 954, width: 72, height: 160 },
        operating_profit: { x: 1862, y: 497, width: 72, height: 102 },
        operating_expenses: { x: 1862, y: 814, width: 72, height: 56 },
        other_income: { x: 2125, y: 508, width: 72, height: 27 },
        net_profit: { x: 2236, y: 373, width: 72, height: 113 },
        tax: { x: 2236, y: 714, width: 72, height: 16 },
        rnd: { x: 2236, y: 885, width: 72, height: 39 },
        marketing_selling: { x: 2236, y: 1076, width: 72, height: 8 },
        ga: { x: 2236, y: 1245, width: 72, height: 6 },
      },
      labels: {
        foundry_logic_other: {
          blocks: [
            { x: 403, top: 346, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 322, top: 449, anchor: 'end', lineGap: 13, lines: [
              { text: 'Foundry,', size: 40, weight: 800 },
              { text: 'logic', size: 40, weight: 800 },
              { text: 'and other', size: 40, weight: 800 },
            ] },
          ],
        },
        dram: {
          blocks: [
            { x: 403, top: 655, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 324, top: 765, anchor: 'end', lines: [{ text: 'DRAM', size: 40, weight: 800 }] },
          ],
        },
        flash_memory: {
          blocks: [
            { x: 403, top: 868, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '(37%) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 322, top: 948, anchor: 'end', lines: [{ text: 'Flash memory', size: 40, weight: 800 }] },
          ],
        },
        semiconductor_systems: {
          blocks: [{ x: 777, top: 386, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Semiconductor', size: 40, weight: 800 },
            { text: 'Systems', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        applied_global_services: {
          blocks: [
            { x: 777, top: 925, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 720, top: 1036, anchor: 'end', lines: [{ text: 'Applied Global Services', size: 40, weight: 800 }] },
          ],
        },
        other_revenue: {
          blocks: [
            { x: 777, top: 1141, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+0% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 700, top: 1221, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [{ x: 1151, top: 555, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Revenue', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        gross_profit: {
          blocks: [{ x: 1523, top: 405, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Gross profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '50% margin', size: 29, weight: 400, color: NOTE },
            { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        cost_of_revenue: {
          blocks: [{ x: 1523, top: 1135, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Cost of', size: 38, weight: 800 },
            { text: 'revenue', size: 38, weight: 800 },
            { text: '$value', size: 37, weight: 400 },
          ] }],
        },
        operating_profit: {
          blocks: [{ x: 1898, top: 316, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Operating profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '32% margin', size: 29, weight: 400, color: NOTE },
            { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        operating_expenses: {
          blocks: [{ x: 1898, top: 894, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Operating', size: 38, weight: 800 },
            { text: 'Expenses', size: 38, weight: 800 },
            { text: '$value', size: 37, weight: 400 },
          ] }],
        },
        other_income: {
          blocks: [{ x: 2160, top: 558, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Other', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ] }],
        },
        net_profit: {
          blocks: [{ x: 2382, top: 361, anchor: 'start', lineGap: 10, lines: [
            { text: 'Net profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '35% margin', size: 29, weight: 400, color: NOTE },
            { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        tax: {
          blocks: [{ x: 2445, top: 691, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Tax', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ] }],
        },
        rnd: {
          blocks: [{ x: 2390, top: 882, anchor: 'start', lineGap: 8, lines: [
            { text: 'R&D ($1.0B)', size: 31, weight: 800 },
            { text: '13% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        marketing_selling: {
          blocks: [{ x: 2323, top: 1038, anchor: 'start', lineGap: 8, lines: [
            { text: 'Marketing & selling', size: 31, weight: 800 },
            { text: '($0.2B)', size: 31, weight: 400 },
            { text: '3% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        ga: {
          blocks: [{ x: 2390, top: 1235, anchor: 'start', lineGap: 8, lines: [
            { text: 'G&A ($0.2B)', size: 31, weight: 800 },
            { text: '2% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
      },
    },

    nodes: [
      { id: 'foundry_logic_other', col: 0, order: 0, type: 'source', label: ['Foundry,', 'logic', 'and other'], value: 4.0, notes: ['+12% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'dram', col: 0, order: 1, type: 'source', label: 'DRAM', value: 1.7, notes: ['+19% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'flash_memory', col: 0, order: 2, type: 'source', label: 'Flash memory', value: 0.2, notes: ['(37%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'semiconductor_systems', col: 1, order: 0, type: 'source', label: ['Semiconductor', 'Systems'], value: 6.0, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'applied_global_services', col: 1, order: 1, type: 'source', label: 'Applied Global Services', value: 1.7, notes: ['+17% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0.3, notes: ['+0% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 7.9, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.9, notes: ['50% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.5, notes: ['32% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.8, notes: ['35% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 1.0, notes: ['13% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_selling', col: 6, order: 3, type: 'cost', label: 'Marketing & selling', value: 0.2, notes: ['3% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.2, notes: ['2% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'foundry_logic_other', target: 'semiconductor_systems', value: 4.0, sourceWidth: 160, targetWidth: 162, sourceOrder: 0, targetOrder: 0 },
      { source: 'dram', target: 'semiconductor_systems', value: 1.7, sourceWidth: 69, targetWidth: 70, sourceOrder: 0, targetOrder: 1 },
      { source: 'flash_memory', target: 'semiconductor_systems', value: 0.2, sourceWidth: 8, targetWidth: 9, sourceOrder: 0, targetOrder: 2 },
      { source: 'semiconductor_systems', target: 'revenue', value: 6.0, sourceWidth: 241, targetWidth: 243, sourceOrder: 0, targetOrder: 0 },
      { source: 'applied_global_services', target: 'revenue', value: 1.7, sourceWidth: 65, targetWidth: 65, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.3, sourceWidth: 10, targetWidth: 12, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.9, sourceWidth: 160, targetWidth: 160, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.0, sourceWidth: 160, targetWidth: 160, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.5, sourceWidth: 101, targetWidth: 102, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.4, sourceWidth: 59, targetWidth: 56, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.1, width: 86, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, width: 15, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.7, width: 26, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, sourceWidth: 43, targetWidth: 39, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_selling', value: 0.2, sourceWidth: 7, targetWidth: 8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.2, sourceWidth: 6, targetWidth: 6, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Applied Materials · 2026 财年第二季度',
        meta: {
          title: 'Applied Materials 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 2260,
        },
        nodes: {
          foundry_logic_other: { label: ['代工、', '逻辑', '及其他'], notes: ['同比 +12%'] },
          dram: { label: 'DRAM', notes: ['同比 +19%'] },
          flash_memory: { label: '闪存', notes: ['同比 (37%)'] },
          semiconductor_systems: { label: '半导体系统', notes: ['同比 +10%'] },
          applied_global_services: { label: '应用全球服务', notes: ['同比 +17%'] },
          other_revenue: { label: '其他', notes: ['同比 +0%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 35%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 13%', '同比 +0 个百分点'] },
          marketing_selling: { label: '营销与销售', notes: ['占收入 3%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            foundry_logic_other: { blocks: [
              { x: 403, top: 346, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +12%', size: 29, weight: 400, color: NOTE }] },
              { x: 322, top: 449, anchor: 'end', lineGap: 13, lines: [{ text: '代工、', size: 40, weight: 800 }, { text: '逻辑', size: 40, weight: 800 }, { text: '及其他', size: 40, weight: 800 }] },
            ] },
            dram: { blocks: [
              { x: 403, top: 655, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +19%', size: 29, weight: 400, color: NOTE }] },
              { x: 324, top: 765, anchor: 'end', lines: [{ text: 'DRAM', size: 40, weight: 800 }] },
            ] },
            flash_memory: { blocks: [
              { x: 403, top: 868, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (37%)', size: 29, weight: 400, color: NOTE }] },
              { x: 322, top: 948, anchor: 'end', lines: [{ text: '闪存', size: 40, weight: 800 }] },
            ] },
            semiconductor_systems: { blocks: [{ x: 777, top: 442, anchor: 'middle', lineGap: 10, lines: [{ text: '半导体系统', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +10%', size: 29, weight: 400, color: NOTE }] }] },
            applied_global_services: { blocks: [
              { x: 777, top: 925, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +17%', size: 29, weight: 400, color: NOTE }] },
              { x: 720, top: 1036, anchor: 'end', lines: [{ text: '应用全球服务', size: 40, weight: 800 }] },
            ] },
            other_revenue: { blocks: [
              { x: 777, top: 1141, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +0%', size: 29, weight: 400, color: NOTE }] },
              { x: 700, top: 1221, anchor: 'end', lines: [{ text: '其他', size: 40, weight: 800 }] },
            ] },
            revenue: { blocks: [{ x: 1151, top: 555, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +11%', size: 29, weight: 400, color: NOTE }] }] },
            gross_profit: { blocks: [{ x: 1523, top: 405, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 50%', size: 29, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            cost_of_revenue: { blocks: [{ x: 1523, top: 1135, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 38, weight: 800 }, { text: '成本', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
            operating_profit: { blocks: [{ x: 1898, top: 316, anchor: 'middle', lineGap: 10, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 32%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1898, top: 894, anchor: 'middle', lineGap: 9, lines: [{ text: '运营费用', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
            other_income: { blocks: [{ x: 2160, top: 558, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
            net_profit: { blocks: [{ x: 2382, top: 361, anchor: 'start', lineGap: 10, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 35%', size: 29, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            tax: { blocks: [{ x: 2445, top: 691, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
            rnd: { blocks: [{ x: 2390, top: 882, anchor: 'start', lineGap: 8, lines: [{ text: '研发 ($1.0B)', size: 31, weight: 800 }, { text: '占收入 13%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            marketing_selling: { blocks: [{ x: 2323, top: 1038, anchor: 'start', lineGap: 8, lines: [{ text: '营销与销售', size: 31, weight: 800 }, { text: '($0.2B)', size: 31, weight: 400 }, { text: '占收入 3%', size: 29, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            ga: { blocks: [{ x: 2390, top: 1235, anchor: 'start', lineGap: 8, lines: [{ text: '管理费用 ($0.2B)', size: 31, weight: 800 }, { text: '占收入 2%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
          },
        },
      },
    },
  });
})();
