/* ====================================================================
 * Cadence - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/cadence-q2-fy26.png as a fixed
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
    key: 'cadence-q2-fy26',
    name: 'Cadence · Q2 FY26',
    company: 'Cadence',
    meta: {
      company: 'Cadence',
      title: 'Cadence Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/cadence-q2-fy26.png', width: 2667, height: 1500 },
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
      scale: 0.206,
      nodes: {
        core_eda: { x: 357, y: 514, width: 71, height: 223 },
        ip: { x: 357, y: 906, width: 71, height: 47 },
        system_design_analysis: { x: 357, y: 1122, width: 71, height: 54 },
        revenue: { x: 824, y: 666, width: 70, height: 327 },
        gross_profit: { x: 1291, y: 534, width: 71, height: 279 },
        cost_of_revenue: { x: 1291, y: 1064, width: 71, height: 48 },
        products_cor: { x: 1483, y: 1142, width: 71, height: 34 },
        services_cor: { x: 1483, y: 1265, width: 71, height: 11 },
        operating_profit: { x: 1759, y: 431, width: 70, height: 92 },
        operating_expenses: { x: 1759, y: 761, width: 70, height: 185 },
        other_income: { x: 2111, y: 444, width: 70, height: 10 },
        net_profit: { x: 2220, y: 323, width: 71, height: 74 },
        tax: { x: 2225, y: 632, width: 71, height: 27 },
        rnd: { x: 2225, y: 831, width: 71, height: 109 },
        sm: { x: 2225, y: 1035, width: 71, height: 47 },
        ga: { x: 2225, y: 1181, width: 71, height: 16 },
        other_opex: { x: 2225, y: 1309, width: 71, height: 5 },
      },
      labels: {
        core_eda: {
          blocks: [
            {
              x: 392, top: 424, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 166, top: 550, anchor: 'middle', lineGap: 12,
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
              x: 392, top: 817, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+43% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 314, top: 904, anchor: 'end',
              lines: [{ text: 'IP', size: 40, weight: 800 }],
            },
          ],
        },
        system_design_analysis: {
          blocks: [
            {
              x: 392, top: 1016, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+32% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 194, top: 1099, anchor: 'middle', lineGap: 12,
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
              x: 859, top: 520, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+24% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1326, top: 350, anchor: 'middle', lineGap: 10,
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
              x: 1326, top: 1122, anchor: 'middle', lineGap: 9,
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
              x: 1596, top: 1111, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Products', size: 31, weight: 800 },
                { text: '($175M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        services_cor: {
          blocks: [
            {
              x: 1579, top: 1235, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Services', size: 31, weight: 800 },
                { text: '($64M)', size: 31, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1794, top: 247, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '28% margin', size: 29, weight: 400, color: NOTE },
                { text: '+9pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1772, top: 983, anchor: 'middle', lineGap: 9,
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
              x: 2102, top: 466, anchor: 'start', lineGap: 8,
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
              x: 2323, top: 308, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '23% margin', size: 29, weight: 400, color: NOTE },
                { text: '+11pp Y/Y', size: 29, weight: 400, color: NOTE },
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
                { text: 'R&D ($531M)', size: 31, weight: 800 },
                { text: '34% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2323, top: 1004, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M ($241M)', size: 31, weight: 800 },
                { text: '15% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2333, top: 1147, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($89M)', size: 31, weight: 800 },
                { text: '6% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2313, top: 1291, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Other ($34M)', size: 31, weight: 800 },
                { text: '2% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'core_eda', col: 0, order: 0, type: 'source', label: ['Core Electronic', 'Design', 'Automation'], value: 1077, valueText: '$1,077M', notes: ['+19% Y/Y'], color: CORE_BLUE, labelColor: CORE_BLUE, linkTint: CORE_LINK },
      { id: 'ip', col: 0, order: 1, type: 'source', label: 'IP', value: 238, notes: ['+43% Y/Y'], color: IP_BLUE, labelColor: IP_BLUE, linkTint: IP_LINK },
      { id: 'system_design_analysis', col: 0, order: 2, type: 'source', label: ['System Design', '& Analysis'], value: 269, notes: ['+32% Y/Y'], color: SYSTEM_CYAN, labelColor: SYSTEM_CYAN, linkTint: SYSTEM_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1585, valueText: '$1,585M', notes: ['+24% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: CORE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1345, valueText: '$1,345M', notes: ['85% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 239, valueText: '($239M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'products_cor', col: 3, order: 2, type: 'cost', label: 'Products', value: 175, valueText: '($175M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'services_cor', col: 3, order: 3, type: 'cost', label: 'Services', value: 64, valueText: '($64M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 450, notes: ['28% margin', '+9pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 895, valueText: '($895M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 1, type: 'profit', label: 'Other', value: 60, valueText: '$60M', color: GREEN, labelColor: '#008e00', linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 367, notes: ['23% margin', '+11pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 143, valueText: '($143M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 531, valueText: '($531M)', notes: ['34% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 241, valueText: '($241M)', notes: ['15% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 89, valueText: '($89M)', notes: ['6% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 34, valueText: '($34M)', notes: ['2% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'core_eda', target: 'revenue', value: 1077, sourceWidth: 223, targetWidth: 223, sourceOrder: 0, targetOrder: 0 },
      { source: 'ip', target: 'revenue', value: 238, sourceWidth: 47, targetWidth: 47, sourceOrder: 0, targetOrder: 1 },
      { source: 'system_design_analysis', target: 'revenue', value: 269, sourceWidth: 54, targetWidth: 57, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 1345, sourceWidth: 279, targetWidth: 279, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 239, sourceWidth: 48, targetWidth: 48, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'cost_of_revenue',
        target: 'products_cor',
        value: 175,
        sourceWidth: 35,
        targetWidth: 34,
        sourceOrder: 0,
        targetOrder: 0,
        curve: { c1x: 1392, c1y: 1081.5, c2x: 1446, c2y: 1159 },
      },
      {
        source: 'cost_of_revenue',
        target: 'services_cor',
        value: 64,
        sourceWidth: 13,
        targetWidth: 11,
        sourceOrder: 1,
        targetOrder: 0,
        curve: { c1x: 1392, c1y: 1105.5, c2x: 1446, c2y: 1270.5 },
      },

      { source: 'gross_profit', target: 'operating_profit', value: 450, sourceWidth: 92, targetWidth: 92, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 895, sourceWidth: 187, targetWidth: 185, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'operating_profit',
        target: 'net_profit', value: 307,
        sourceWidth: 65,
        targetWidth: 65,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: GREEN_LINK,
        curve: { c1x: 1998, c1y: 463.5, c2x: 2086, c2y: 355.5 },
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 143,
        sourceWidth: 27,
        targetWidth: 27,
        sourceOrder: 1,
        targetOrder: 0,
        curve: { c1x: 1944, c1y: 509.5, c2x: 2079, c2y: 645.5 },
      },
      {
        source: 'other_income',
        target: 'net_profit', value: 60,
        sourceWidth: 10,
        targetWidth: 9,
        sourceOrder: 0,
        targetOrder: 1,
        linkTint: GREEN_LINK,
        curve: { c1x: 2197, c1y: 449, c2x: 2206, c2y: 392.5 },
      },

      { source: 'operating_expenses', target: 'rnd', value: 531, sourceWidth: 110, targetWidth: 109, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 241, sourceWidth: 48, targetWidth: 47, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 89, sourceWidth: 19, targetWidth: 16, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 34, sourceWidth: 8, targetWidth: 5, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Cadence · 2026 财年第二季度',
        meta: {
          title: 'Cadence 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
        },
        nodes: {
          core_eda: { label: ['核心电子', '设计自动化'], notes: ['同比 +19%'] },
          ip: { label: 'IP', notes: ['同比 +43%'] },
          system_design_analysis: { label: ['系统设计', '与分析'], notes: ['同比 +32%'] },
          revenue: { label: '收入', notes: ['同比 +24%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 85%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          products_cor: { label: '产品' },
          services_cor: { label: '服务' },
          operating_profit: { label: '营业利润', notes: ['利润率 28%', '同比 +9 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 23%', '同比 +11 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 34%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 6%', '同比 +0 个百分点'] },
          other_opex: { label: '其他', notes: ['占收入 2%', '同比 +1 个百分点'] },
        },
        layout: {
          labels: {
            core_eda: {
              blocks: [
                {
                  x: 392, top: 424, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +19%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 166, top: 575, anchor: 'middle', lineGap: 12,
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
                  x: 392, top: 1016, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +32%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 194, top: 1099, anchor: 'middle', lineGap: 12,
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
                  x: 859, top: 520, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +24%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1326, top: 350, anchor: 'middle', lineGap: 10,
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
                  x: 1326, top: 1122, anchor: 'middle', lineGap: 9,
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
                  x: 1596, top: 1111, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '产品', size: 31, weight: 800 },
                    { text: '($175M)', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            services_cor: {
              blocks: [
                {
                  x: 1579, top: 1235, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '服务', size: 31, weight: 800 },
                    { text: '($64M)', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1794, top: 247, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 28%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +9 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1772, top: 983, anchor: 'middle', lineGap: 9,
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
                  x: 2102, top: 466, anchor: 'start', lineGap: 8,
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
                  x: 2323, top: 308, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 23%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +11 个百分点', size: 29, weight: 400, color: NOTE },
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
                    { text: '研发 ($531M)', size: 31, weight: 800 },
                    { text: '占收入 34%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2323, top: 1004, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场 ($241M)', size: 31, weight: 800 },
                    { text: '占收入 15%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2333, top: 1147, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用 ($89M)', size: 31, weight: 800 },
                    { text: '占收入 6%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_opex: {
              blocks: [
                {
                  x: 2313, top: 1291, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '其他 ($34M)', size: 31, weight: 800 },
                    { text: '占收入 2%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
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
