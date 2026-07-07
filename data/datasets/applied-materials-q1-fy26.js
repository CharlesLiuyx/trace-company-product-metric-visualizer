/* ====================================================================
 * Applied Materials - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/applied-materials-q1-fy26.png as a
 * fixed d3-sankey layout with pure SVG logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#347da2';
  const BLUE_LABEL = '#2f80a8';
  const BLUE_LINK = '#9cbccc';
  const LOGO_BLUE = '#5a9fc0';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const appliedMaterialsLogo = `
    <g fill="none" stroke="${LOGO_BLUE}" stroke-width="16" stroke-linejoin="round" stroke-linecap="butt">
      <path d="M38 36H135C188 36 229 79 229 133V219"/>
      <path d="M24 68H132C169 68 198 99 198 136V219"/>
      <path d="M15 100H128C148 100 166 117 166 138V188"/>
      <path d="M48 104V150C48 184 75 211 110 211H154"/>
      <path d="M82 104V144C82 164 98 180 119 180H154"/>
      <path d="M116 104V148H154V104Z"/>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'applied-materials-q1-fy26',
    name: 'Applied Materials · Q1 FY26',
    company: 'Applied Materials',
    meta: {
      company: 'Applied Materials',
      title: 'Applied Materials Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/applied-materials-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 194,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2520,
      periodX: 1900,
      periodY: 1180,
      periodNoteY: 1225,
      logoWidth: 260,
      logoHeight: 230,
      logoY: 268,
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
      scale: 55.1,
      nodes: {
        foundry_logic_other: { x: 367, y: 426, width: 72, height: 188 },
        dram: { x: 367, y: 756, width: 72, height: 73 },
        flash_memory: { x: 367, y: 958, width: 72, height: 19 },
        semiconductor_systems: { x: 741, y: 567, width: 72, height: 282 },
        applied_global_services: { x: 741, y: 1029, width: 72, height: 84 },
        corporate: { x: 741, y: 1245, width: 72, height: 16 },
        revenue: { x: 1115, y: 676, width: 71, height: 386 },
        gross_profit: { x: 1489, y: 590, width: 71, height: 188 },
        cost_of_revenue: { x: 1488, y: 979, width: 72, height: 196 },
        operating_profit: { x: 1862, y: 462, width: 72, height: 100 },
        operating_expenses: { x: 1859, y: 780, width: 73, height: 88 },
        other: { x: 2105, y: 501, width: 72, height: 26 },
        net_profit: { x: 2236, y: 338, width: 72, height: 110 },
        tax: { x: 2236, y: 665, width: 72, height: 16 },
        rnd: { x: 2236, y: 812, width: 72, height: 50 },
        ga: { x: 2236, y: 969, width: 72, height: 11 },
        marketing_selling: { x: 2236, y: 1109, width: 72, height: 11 },
        restructuring: { x: 2236, y: 1275, width: 72, height: 16 },
      },
      labels: {
        foundry_logic_other: {
          blocks: [
            {
              x: 403, top: 335, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(9%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 322, top: 454, anchor: 'end', lineGap: 13,
              lines: [
                { text: 'Foundry,', size: 40, weight: 800 },
                { text: 'logic', size: 40, weight: 800 },
                { text: 'and other', size: 40, weight: 800 },
              ],
            },
          ],
        },
        dram: {
          blocks: [
            {
              x: 403, top: 666, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(15%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 324, top: 768, anchor: 'end', lines: [{ text: 'DRAM', size: 40, weight: 800 }] },
          ],
        },
        flash_memory: {
          blocks: [
            {
              x: 403, top: 869, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+61% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 322, top: 943, anchor: 'end', lines: [{ text: 'Flash memory', size: 40, weight: 800 }] },
          ],
        },
        semiconductor_systems: {
          blocks: [
            {
              x: 777, top: 370, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Semiconductor', size: 40, weight: 800 },
                { text: 'Systems', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(8%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        applied_global_services: {
          blocks: [
            {
              x: 777, top: 939, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 720, top: 1046, anchor: 'end', lines: [{ text: 'Applied Global Services', size: 40, weight: 800 }] },
          ],
        },
        corporate: {
          blocks: [
            { x: 777, top: 1191, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400 }] },
            { x: 700, top: 1228, anchor: 'end', lines: [{ text: 'Corporate', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1151, top: 536, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(2%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1525, top: 409, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '49% margin', size: 29, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1524, top: 1197, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1898, top: 278, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '26% margin', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1896, top: 891, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'Expenses', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2140, top: 548, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2382, top: 337, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '29% margin', size: 29, weight: 400, color: NOTE },
                { text: '+12pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2445, top: 642, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2390, top: 793, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D ($0.9B)', size: 31, weight: 800 },
                { text: '13% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2390, top: 933, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($0.2B)', size: 31, weight: 800 },
                { text: '3% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        marketing_selling: {
          blocks: [
            {
              x: 2323, top: 1073, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Marketing & selling', size: 31, weight: 800 },
                { text: '($0.2B)', size: 31, weight: 400 },
                { text: '3% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: 2367, top: 1253, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Restructuring', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'foundry_logic_other', col: 0, order: 0, type: 'source', label: ['Foundry,', 'logic', 'and other'], value: 3.4, notes: ['(9%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'dram', col: 0, order: 1, type: 'source', label: 'DRAM', value: 1.3, notes: ['(15%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'flash_memory', col: 0, order: 2, type: 'source', label: 'Flash memory', value: 0.4, notes: ['+61% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'semiconductor_systems', col: 1, order: 0, type: 'source', label: ['Semiconductor', 'Systems'], value: 5.1, notes: ['(8%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'applied_global_services', col: 1, order: 1, type: 'source', label: 'Applied Global Services', value: 1.6, notes: ['+15% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'corporate', col: 1, order: 2, type: 'source', label: 'Corporate', value: 0.3, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 7.0, valueText: '$7.0B', notes: ['(2%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.4, notes: ['49% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.8, notes: ['26% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 1.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.0, valueText: '$2.0B', notes: ['29% margin', '+12pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 0.9, valueText: '($0.9B)', notes: ['13% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 3, type: 'cost', label: 'G&A', value: 0.2, valueText: '($0.2B)', notes: ['3% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_selling', col: 6, order: 4, type: 'cost', label: 'Marketing & selling', value: 0.2, valueText: '($0.2B)', notes: ['3% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 6, order: 5, type: 'cost', label: 'Restructuring', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'foundry_logic_other', target: 'semiconductor_systems', value: 3.4, width: 188, sourceOrder: 0, targetOrder: 0 },
      { source: 'dram', target: 'semiconductor_systems', value: 1.3, width: 72, sourceOrder: 0, targetOrder: 1 },
      { source: 'flash_memory', target: 'semiconductor_systems', value: 0.4, width: 19, sourceOrder: 0, targetOrder: 2 },
      { source: 'semiconductor_systems', target: 'revenue', value: 5.1, width: 282, sourceOrder: 0, targetOrder: 0 },
      { source: 'applied_global_services', target: 'revenue', value: 1.6, width: 84, sourceOrder: 0, targetOrder: 1 },
      { source: 'corporate', target: 'revenue', value: 0.3, width: 16, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.4, width: 188, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.6, width: 198, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.8, width: 100, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.6, width: 88, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, width: 83, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, width: 16, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.5, width: 27, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, width: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.2, width: 11, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_selling', value: 0.2, width: 11, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.3, width: 16, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Applied Materials · 2026 财年第一季度',
        meta: {
          title: 'Applied Materials 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 2260,
        },
        nodes: {
          foundry_logic_other: { label: ['代工、', '逻辑', '及其他'], notes: ['同比 (9%)'] },
          dram: { label: 'DRAM', notes: ['同比 (15%)'] },
          flash_memory: { label: '闪存', notes: ['同比 +61%'] },
          semiconductor_systems: { label: '半导体系统', notes: ['同比 (8%)'] },
          applied_global_services: { label: '应用全球服务', notes: ['同比 +15%'] },
          corporate: { label: '公司部门' },
          revenue: { label: '收入', notes: ['同比 (2%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 49%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 26%', '同比 (4 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 29%', '同比 +12 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 13%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] },
          marketing_selling: { label: '营销与销售', notes: ['占收入 3%', '同比 +0 个百分点'] },
          restructuring: { label: '重组费用' },
        },
        layout: {
          labels: {
            foundry_logic_other: {
              blocks: [
                {
                  x: 403, top: 335, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (9%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 322, top: 454, anchor: 'end', lineGap: 13,
                  lines: [
                    { text: '代工、', size: 40, weight: 800 },
                    { text: '逻辑', size: 40, weight: 800 },
                    { text: '及其他', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            dram: {
              blocks: [
                {
                  x: 403, top: 666, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (15%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 324, top: 768, anchor: 'end', lines: [{ text: 'DRAM', size: 40, weight: 800 }] },
              ],
            },
            flash_memory: {
              blocks: [
                {
                  x: 403, top: 869, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +61%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 322, top: 943, anchor: 'end', lines: [{ text: '闪存', size: 40, weight: 800 }] },
              ],
            },
            semiconductor_systems: {
              blocks: [
                {
                  x: 777, top: 370, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '半导体系统', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (8%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            applied_global_services: {
              blocks: [
                {
                  x: 777, top: 939, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +15%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 720, top: 1046, anchor: 'end', lines: [{ text: '应用全球服务', size: 40, weight: 800 }] },
              ],
            },
            corporate: {
              blocks: [
                { x: 777, top: 1191, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400 }] },
                { x: 700, top: 1228, anchor: 'end', lines: [{ text: '公司部门', size: 40, weight: 800 }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1151, top: 536, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (2%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1525, top: 409, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 49%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +5 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1524, top: 1197, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 38, weight: 800 },
                    { text: '成本', size: 38, weight: 800 },
                    { text: '$value', size: 37, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1898, top: 278, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 26%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1896, top: 891, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '运营费用', size: 38, weight: 800 },
                    { text: '$value', size: 37, weight: 400 },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2140, top: 548, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2382, top: 337, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 29%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +12 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2445, top: 642, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2390, top: 793, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发 ($0.9B)', size: 31, weight: 800 },
                    { text: '占收入 13%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2390, top: 933, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用 ($0.2B)', size: 31, weight: 800 },
                    { text: '占收入 3%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            marketing_selling: {
              blocks: [
                {
                  x: 2323, top: 1073, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '营销与销售', size: 31, weight: 800 },
                    { text: '($0.2B)', size: 31, weight: 400 },
                    { text: '占收入 3%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            restructuring: {
              blocks: [
                {
                  x: 2367, top: 1253, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '重组费用', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();
