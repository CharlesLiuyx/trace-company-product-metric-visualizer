/* ====================================================================
 * Cadence - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/cadence-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const CORE_BLUE = '#17649f';
  const CORE_LINK = '#8fb4d1';
  const IP_BLUE = '#2183cf';
  const IP_LINK = '#9bc6e7';
  const SYSTEM_CYAN = '#35c8cc';
  const SYSTEM_LINK = '#9ee3e6';
  const GREEN = '#2ca52c';
  const GREEN_LABEL = '#00934f';
  const GREEN_LINK = '#9bcf99';
  const RED = '#d30000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e48686';
  const BLACK = '#000000';
  const DARK = '#231f20';

  const cadenceLogo = `
    <g>
      <rect x="99" y="6" width="45" height="12" fill="#d91b2b"/>
      <text x="0" y="122" font-family="Arial,Helvetica,sans-serif" font-size="139" font-weight="700"
        letter-spacing="18" fill="${DARK}" textLength="560" lengthAdjust="spacingAndGlyphs">cadence</text>
      <text x="582" y="52" font-family="Arial,Helvetica,sans-serif" font-size="25" font-weight="700" fill="${DARK}">&#174;</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'cadence-q4-fy25',
    name: 'Cadence · Q4 FY25',
    company: 'Cadence',
    meta: {
      company: 'Cadence',
      title: 'Cadence Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/cadence-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2258,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 615,
      logoHeight: 150,
      logoY: 252,
      logoViewBox: '0 0 615 150',
      logoSvg: cadenceLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: CORE_BLUE, label: CORE_BLUE },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: CORE_LINK,
        hub: CORE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },

    layout: {
      scale: 0.184,
      nodes: {
        core_eda: { x: 349, y: 533, width: 73, height: 184 },
        ip: { x: 349, y: 870, width: 73, height: 39 },
        system_design_analysis: { x: 349, y: 1048, width: 73, height: 42 },
        revenue: { x: 817, y: 675, width: 71, height: 265 },
        gross_profit: { x: 1283, y: 538, width: 73, height: 231 },
        cost_of_revenue: { x: 1283, y: 1034, width: 73, height: 35 },
        products_cor: { x: 1465, y: 1064, width: 72, height: 22 },
        services_cor: { x: 1465, y: 1181, width: 72, height: 12 },
        operating_profit: { x: 1753, y: 426, width: 72, height: 86 },
        operating_expenses: { x: 1750, y: 776, width: 73, height: 146 },
        other_income: { x: 2104, y: 448, width: 71, height: 4 },
        net_profit: { x: 2218, y: 321, width: 72, height: 71 },
        tax: { x: 2217, y: 626, width: 73, height: 19 },
        rnd: { x: 2217, y: 830, width: 73, height: 86 },
        sm: { x: 2217, y: 1037, width: 73, height: 38 },
        ga: { x: 2217, y: 1183, width: 73, height: 19 },
        other_opex: { x: 2217, y: 1330, width: 73, height: 3 },
      },
      labels: {
        core_eda: {
          blocks: [
            {
              x: 385, top: 443, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 158, top: 557, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Core Electronic', size: 40, weight: 800 },
                { text: 'Design', size: 40, weight: 800 },
                { text: 'Automation', size: 40, weight: 800 },
              ],
            },
          ],
        },
        ip: {
          blocks: [
            {
              x: 385, top: 778, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 307, top: 871, anchor: 'end',
              lines: [{ text: 'IP', size: 40, weight: 800 }],
            },
          ],
        },
        system_design_analysis: {
          blocks: [
            {
              x: 385, top: 958, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(16%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 158, top: 1030, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'System Design', size: 40, weight: 800 },
                { text: '& Analysis', size: 40, weight: 800 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 852, top: 530, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1319, top: 355, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '87% margin', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1319, top: 1094, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        products_cor: {
          blocks: [
            {
              x: 1562, top: 1054, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Products', size: 31, weight: 800 },
                { text: '($144M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        services_cor: {
          blocks: [
            {
              x: 1562, top: 1162, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Services', size: 31, weight: 800 },
                { text: '($45M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1789, top: 247, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '32% margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1787, top: 946, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'Expenses', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2095, top: 474, anchor: 'start', lineGap: 8,
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
              x: 2320, top: 317, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '27% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2417, top: 606, anchor: 'middle', lineGap: 8,
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
              x: 2323, top: 827, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D ($465M)', size: 31, weight: 800 },
                { text: '32% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2323, top: 1026, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M ($207M)', size: 31, weight: 800 },
                { text: '14% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2323, top: 1183, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($103M)', size: 31, weight: 800 },
                { text: '7% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2323, top: 1319, anchor: 'start',
              lines: [{ text: 'Other ($14M)', size: 31, weight: 800 }],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'core_eda', col: 0, order: 0, type: 'source', label: ['Core Electronic', 'Design', 'Automation'], value: 994, notes: ['+8% Y/Y'], color: CORE_BLUE, labelColor: CORE_BLUE, linkTint: CORE_LINK },
      { id: 'ip', col: 0, order: 1, type: 'source', label: 'IP', value: 216, notes: ['+15% Y/Y'], color: IP_BLUE, labelColor: IP_BLUE, linkTint: IP_LINK },
      { id: 'system_design_analysis', col: 0, order: 2, type: 'source', label: ['System Design', '& Analysis'], value: 230, notes: ['(16%) Y/Y'], color: SYSTEM_CYAN, labelColor: SYSTEM_CYAN, linkTint: SYSTEM_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1440, notes: ['+6% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: CORE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1251, notes: ['87% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 189, valueText: '($189M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'products_cor', col: 3, order: 2, type: 'cost', label: 'Products', value: 144, valueText: '($144M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'services_cor', col: 3, order: 3, type: 'cost', label: 'Services', value: 45, valueText: '($45M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 463, notes: ['32% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 788, valueText: '($788M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 1, type: 'profit', label: 'Other', value: 30, valueText: '$30M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 388, notes: ['27% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 105, valueText: '($105M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 465, valueText: '($465M)', notes: ['32% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 207, valueText: '($207M)', notes: ['14% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 103, valueText: '($103M)', notes: ['7% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 14, valueText: '($14M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'core_eda', target: 'revenue', value: 994, width: 184, sourceOrder: 0, targetOrder: 0 },
      { source: 'ip', target: 'revenue', value: 216, width: 39, sourceOrder: 0, targetOrder: 1 },
      { source: 'system_design_analysis', target: 'revenue', value: 230, width: 42, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 1251, width: 231, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 189, width: 34, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'cost_of_revenue',
        target: 'products_cor',
        value: 144,
        width: 22,
        sourceOrder: 0,
        targetOrder: 0,
        curve: { c1x: 1384, c1y: 1045, c2x: 1428, c2y: 1075 },
      },
      {
        source: 'cost_of_revenue',
        target: 'services_cor',
        value: 45,
        width: 12,
        sourceOrder: 1,
        targetOrder: 0,
        y0: 1063,
        curve: { c1x: 1382, c1y: 1063, c2x: 1426, c2y: 1187 },
      },

      { source: 'gross_profit', target: 'operating_profit', value: 463, width: 86, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 788, width: 145, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'operating_profit',
        target: 'net_profit', value: 358,
        width: 67,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: GREEN_LINK,
        curve: { c1x: 1990, c1y: 459.5, c2x: 2078, c2y: 354.5 },
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 105,
        width: 19,
        sourceOrder: 1,
        targetOrder: 0,
        curve: { c1x: 1935, c1y: 502.5, c2x: 2072, c2y: 635.5 },
      },
      {
        source: 'other_income',
        target: 'net_profit', value: 30,
        width: 4,
        sourceOrder: 0,
        targetOrder: 1,
        linkTint: GREEN_LINK,
        curve: { c1x: 2194, c1y: 450, c2x: 2202, c2y: 390 },
      },

      { source: 'operating_expenses', target: 'rnd', value: 465, width: 86, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 207, width: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 103, width: 19, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 14, width: 3, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Cadence · 2025 财年第四季度',
        meta: {
          title: 'Cadence 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
        },
        nodes: {
          core_eda: { label: ['核心电子', '设计自动化'], notes: ['同比 +8%'] },
          ip: { label: 'IP', notes: ['同比 +15%'] },
          system_design_analysis: { label: ['系统设计', '与分析'], notes: ['同比 (16%)'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 87%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          products_cor: { label: '产品' },
          services_cor: { label: '服务' },
          operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 27%', '同比 +2 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 32%', '同比 +3 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 14%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 7%', '同比 +2 个百分点'] },
          other_opex: { label: '其他' },
        },
        layout: {
          labels: {
            core_eda: {
              blocks: [
                {
                  x: 385, top: 443, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +8%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 158, top: 557, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '核心电子', size: 40, weight: 800 },
                    { text: '设计自动化', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            system_design_analysis: {
              blocks: [
                {
                  x: 385, top: 958, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (16%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 158, top: 1030, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '系统设计', size: 40, weight: 800 },
                    { text: '与分析', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 852, top: 530, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +6%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1319, top: 355, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 87%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1319, top: 1094, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 38, weight: 800 },
                    { text: '成本', size: 38, weight: 800 },
                    { text: '$value', size: 37, weight: 400 },
                  ],
                },
              ],
            },
            products_cor: {
              blocks: [
                {
                  x: 1562, top: 1054, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '产品', size: 31, weight: 800 },
                    { text: '($144M)', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            services_cor: {
              blocks: [
                {
                  x: 1562, top: 1162, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '服务', size: 31, weight: 800 },
                    { text: '($45M)', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1789, top: 247, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 32%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1787, top: 946, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '运营', size: 38, weight: 800 },
                    { text: '费用', size: 38, weight: 800 },
                    { text: '$value', size: 37, weight: 400 },
                  ],
                },
              ],
            },
            other_income: {
              blocks: [
                {
                  x: 2100, top: 474, anchor: 'start', lineGap: 8,
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
                  x: 2320, top: 317, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 27%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2417, top: 606, anchor: 'middle', lineGap: 8,
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
                  x: 2323, top: 827, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发 ($465M)', size: 31, weight: 800 },
                    { text: '占收入 32%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2323, top: 1026, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场 ($207M)', size: 31, weight: 800 },
                    { text: '占收入 14%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2323, top: 1183, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用 ($103M)', size: 31, weight: 800 },
                    { text: '占收入 7%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_opex: {
              blocks: [
                {
                  x: 2323, top: 1319, anchor: 'start',
                  lines: [{ text: '其他 ($14M)', size: 31, weight: 800 }],
                },
              ],
            },
          },
        },
      },
    },
  });
})();
