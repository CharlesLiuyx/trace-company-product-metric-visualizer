/* ====================================================================
 * Cadence - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/cadence-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const CORE_BLUE = '#0f5c9d';
  const CORE_LINK = '#8caecb';
  const IP_BLUE = '#147bd1';
  const IP_LINK = '#8ebce2';
  const SYSTEM_CYAN = '#2cccd3';
  const SYSTEM_LINK = '#99e0e4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
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
    key: 'cadence-q1-fy26',
    name: 'Cadence · Q1 FY26',
    company: 'Cadence',
    meta: {
      company: 'Cadence',
      title: 'Cadence Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/cadence-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2258,
      hidePeriodStamp: true,
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
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },

    layout: {
      scale: 0.233,
      nodes: {
        core_eda: { x: 350, y: 455, width: 71, height: 243 },
        ip: { x: 350, y: 861, width: 71, height: 46 },
        system_design_analysis: { x: 350, y: 1052, width: 71, height: 49 },
        revenue: { x: 817, y: 617, width: 70, height: 344 },
        gross_profit: { x: 1284, y: 513, width: 71, height: 294 },
        cost_of_revenue: { x: 1284, y: 1025, width: 71, height: 49 },
        products_cor: { x: 1486, y: 1071, width: 71, height: 34 },
        services_cor: { x: 1489, y: 1205, width: 70, height: 11 },
        operating_profit: { x: 1752, y: 427, width: 70, height: 99 },
        operating_expenses: { x: 1752, y: 716, width: 70, height: 193 },
        other_income: { x: 2094, y: 433, width: 70, height: 4 },
        net_profit: { x: 2218, y: 316, width: 71, height: 77 },
        tax: { x: 2218, y: 596, width: 71, height: 19 },
        interest: { x: 2218, y: 709, width: 71, height: 5 },
        rnd: { x: 2218, y: 845, width: 71, height: 117 },
        sm: { x: 2218, y: 1052, width: 71, height: 48 },
        ga: { x: 2218, y: 1208, width: 71, height: 18 },
        other_opex: { x: 2218, y: 1336, width: 71, height: 3 },
      },
      labels: {
        core_eda: {
          blocks: [
            {
              x: 385, top: 365, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 173, top: 496, anchor: 'middle', lineGap: 12,
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
              x: 385, top: 770, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 307, top: 859, anchor: 'end',
              lines: [{ text: 'IP', size: 40, weight: 800 }],
            },
          ],
        },
        system_design_analysis: {
          blocks: [
            {
              x: 385, top: 962, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 177, top: 1026, anchor: 'middle', lineGap: 12,
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
              x: 852, top: 476, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1319, top: 333, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '85% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1319, top: 1090, anchor: 'middle', lineGap: 9,
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
              x: 1589, top: 1056, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Products', size: 31, weight: 800 },
                { text: '($153M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        services_cor: {
          blocks: [
            {
              x: 1587, top: 1182, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Services', size: 31, weight: 800 },
                { text: '($61M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1787, top: 246, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '29% margin', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1787, top: 924, anchor: 'middle', lineGap: 9,
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
              x: 2085, top: 455, anchor: 'start', lineGap: 8,
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
              x: 2323, top: 307, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '23% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2417, top: 572, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2417, top: 678, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2323, top: 851, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D ($508M)', size: 31, weight: 800 },
                { text: '34% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2323, top: 1031, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M ($212M)', size: 31, weight: 800 },
                { text: '14% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2333, top: 1192, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($88M)', size: 31, weight: 800 },
                { text: '6% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2323, top: 1325, anchor: 'start',
              lines: [{ text: 'Other ($20M)', size: 31, weight: 800 }],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'core_eda', col: 0, order: 0, type: 'source', label: ['Core Electronic', 'Design', 'Automation'], value: 1046, notes: ['+18% Y/Y'], color: CORE_BLUE, labelColor: CORE_BLUE, linkTint: CORE_LINK },
      { id: 'ip', col: 0, order: 1, type: 'source', label: 'IP', value: 206, notes: ['+22% Y/Y'], color: IP_BLUE, labelColor: IP_BLUE, linkTint: IP_LINK },
      { id: 'system_design_analysis', col: 0, order: 2, type: 'source', label: ['System Design', '& Analysis'], value: 221, notes: ['+18% Y/Y'], color: SYSTEM_CYAN, labelColor: SYSTEM_CYAN, linkTint: SYSTEM_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1474, notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: CORE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1260, notes: ['85% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 215, valueText: '($215M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'products_cor', col: 3, order: 2, type: 'cost', label: 'Products', value: 153, valueText: '($153M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'services_cor', col: 3, order: 3, type: 'cost', label: 'Services', value: 61, valueText: '($61M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 431, notes: ['29% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 828, valueText: '($828M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 1, type: 'profit', label: 'Other', value: 28, valueText: '$28M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 336, notes: ['23% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 92, valueText: '($92M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 32, valueText: '($32M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 508, valueText: '($508M)', notes: ['34% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 212, valueText: '($212M)', notes: ['14% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 88, valueText: '($88M)', notes: ['6% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other', value: 20, valueText: '($20M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'core_eda', target: 'revenue', value: 1046, sourceWidth: 243, targetWidth: 243, sourceOrder: 0, targetOrder: 0 },
      { source: 'ip', target: 'revenue', value: 206, sourceWidth: 46, targetWidth: 46, sourceOrder: 0, targetOrder: 1 },
      { source: 'system_design_analysis', target: 'revenue', value: 221, sourceWidth: 49, targetWidth: 55, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 1260, sourceWidth: 295, targetWidth: 294, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 215, sourceWidth: 49, targetWidth: 49, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'cost_of_revenue',
        target: 'products_cor',
        value: 153,
        sourceWidth: 35,
        targetWidth: 34,
        sourceOrder: 0,
        targetOrder: 0,
        y0: 1042.5,
        curve: { c1x: 1385, c1y: 1042.5, c2x: 1445, c2y: 1088 },
      },
      {
        source: 'cost_of_revenue',
        target: 'services_cor',
        value: 61,
        sourceWidth: 14,
        targetWidth: 11,
        sourceOrder: 1,
        targetOrder: 0,
        y0: 1067,
        curve: { c1x: 1385, c1y: 1067, c2x: 1448, c2y: 1210.5 },
      },

      { source: 'gross_profit', target: 'operating_profit', value: 431, sourceWidth: 99, targetWidth: 99, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 828, sourceWidth: 195, targetWidth: 193, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'operating_profit',
        target: 'net_profit', value: 307,
        sourceWidth: 73,
        targetWidth: 73,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: GREEN_LINK,
        curve: { c1x: 1990, c1y: 463.5, c2x: 2078, c2y: 352.5 },
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 92,
        sourceWidth: 19,
        targetWidth: 19,
        sourceOrder: 1,
        targetOrder: 0,
        curve: { c1x: 1935, c1y: 509.5, c2x: 2072, c2y: 605.5 },
      },
      {
        source: 'operating_profit',
        target: 'interest',
        value: 32,
        sourceWidth: 7,
        targetWidth: 5,
        sourceOrder: 2,
        targetOrder: 0,
        curve: { c1x: 1935, c1y: 522.5, c2x: 2072, c2y: 711.5 },
      },
      {
        source: 'other_income',
        target: 'net_profit', value: 28,
        width: 4,
        sourceOrder: 0,
        targetOrder: 1,
        linkTint: GREEN_LINK,
        curve: { c1x: 2194, c1y: 435, c2x: 2202, c2y: 391 },
      },

      { source: 'operating_expenses', target: 'rnd', value: 508, sourceWidth: 118, targetWidth: 117, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 212, sourceWidth: 49, targetWidth: 48, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 88, sourceWidth: 21, targetWidth: 18, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 20, sourceWidth: 5, targetWidth: 3, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Cadence · 2026 财年第一季度',
        meta: {
          title: 'Cadence 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
        },
        nodes: {
          core_eda: { label: ['核心电子', '设计自动化'], notes: ['同比 +18%'] },
          ip: { label: 'IP', notes: ['同比 +22%'] },
          system_design_analysis: { label: ['系统设计', '与分析'], notes: ['同比 +18%'] },
          revenue: { label: '收入', notes: ['同比 +19%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 85%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          products_cor: { label: '产品' },
          services_cor: { label: '服务' },
          operating_profit: { label: '营业利润', notes: ['利润率 29%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 23%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          rnd: { label: '研发', notes: ['占收入 34%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 14%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 6%', '同比 +1 个百分点'] },
          other_opex: { label: '其他' },
        },
        layout: {
          labels: {
            core_eda: {
              blocks: [
                {
                  x: 385, top: 365, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +18%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 173, top: 526, anchor: 'middle', lineGap: 12,
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
                  x: 385, top: 962, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +18%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 177, top: 1026, anchor: 'middle', lineGap: 12,
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
                  x: 852, top: 476, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +19%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1319, top: 333, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 85%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1319, top: 1090, anchor: 'middle', lineGap: 9,
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
                  x: 1589, top: 1056, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '产品', size: 31, weight: 800 },
                    { text: '($153M)', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            services_cor: {
              blocks: [
                {
                  x: 1587, top: 1182, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '服务', size: 31, weight: 800 },
                    { text: '($61M)', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1787, top: 246, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 29%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1787, top: 924, anchor: 'middle', lineGap: 9,
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
                  x: 2085, top: 455, anchor: 'start', lineGap: 8,
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
                  x: 2323, top: 307, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 23%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2417, top: 572, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 2417, top: 678, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2323, top: 851, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发 ($508M)', size: 31, weight: 800 },
                    { text: '占收入 34%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2323, top: 1031, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场 ($212M)', size: 31, weight: 800 },
                    { text: '占收入 14%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2333, top: 1192, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用 ($88M)', size: 31, weight: 800 },
                    { text: '占收入 6%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_opex: {
              blocks: [
                {
                  x: 2323, top: 1325, anchor: 'start',
                  lines: [{ text: '其他 ($20M)', size: 31, weight: 800 }],
                },
              ],
            },
          },
        },
      },
    },
  });
})();
