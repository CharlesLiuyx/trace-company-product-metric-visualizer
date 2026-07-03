/* ====================================================================
 * AppLovin - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/applovin-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#6f7073';
  const TEAL = '#0c9fc3';
  const TEAL_LINK = '#86c8d8';
  const GREEN = '#24a326';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcd99';
  const RED = '#d70000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e38284';
  const RIGHT_LABEL_X = 2406;

  const appLovinLogo = `
    <g fill="none" stroke="${TEAL}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
      <path d="M46 83 C85 62 124 62 163 83"/>
      <path d="M46 83 L98 10 L163 83"/>
      <circle cx="46" cy="83" r="16" fill="#efefef"/>
      <circle cx="98" cy="10" r="16" fill="#efefef"/>
      <circle cx="163" cy="83" r="16" fill="#efefef"/>
    </g>
    <text x="212" y="83" font-family="Montserrat,Arial,sans-serif" font-size="77" letter-spacing="0" fill="${TEAL}">
      <tspan font-weight="800">APP</tspan><tspan dx="20" font-weight="400">LOVIN</tspan>
    </text>`;

  const zhLayoutLabels = {
    united_states: {
      blocks: [
        {
          x: 428, top: 421, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +47%', size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 270, top: 592, anchor: 'middle', lines: [{ text: '美国', size: 40, weight: 800 }] },
      ],
    },
    rest_of_world: {
      blocks: [
        {
          x: 428, top: 844, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +72%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 260, top: 1018, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '世界其他', size: 40, weight: 800 },
            { text: '地区', size: 40, weight: 800 },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 894, top: 508, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '收入', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +59%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1359, top: 330, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '毛利润', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '利润率 89%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1359, top: 1148, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '收入', size: 37, weight: 800 },
            { text: '成本', size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1828, top: 256, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '营业利润', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '利润率 78%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1828, top: 1008, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '运营', size: 37, weight: 800 },
            { text: '费用', size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2360, top: 345, anchor: 'start', lineGap: 10,
          lines: [
            { text: '净利润', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '利润率 65%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 676, anchor: 'start', lineGap: 8,
          lines: [
            { text: '税费', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 802, anchor: 'start', lineGap: 8,
          lines: [
            { text: '其他', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 914, anchor: 'start', lineGap: 8,
          lines: [
            { text: '研发', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '占收入 5%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1092, anchor: 'start', lineGap: 8,
          lines: [
            { text: '销售与市场', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '占收入 3%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1270, anchor: 'start', lineGap: 8,
          lines: [
            { text: '管理费用', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '占收入 2%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'applovin-q1-fy26',
    name: 'AppLovin · Q1 FY26',
    company: 'AppLovin',
    meta: {
      company: 'AppLovin',
      title: 'AppLovin Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/applovin-q1-fy26.png', width: 2667, height: 1500 },
      logoSvg: appLovinLogo,
      logoViewBox: '0 0 760 125',
      logoWidth: 820,
      logoHeight: 135,
      logoY: 260,
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2320,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#efefef',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: TEAL, label: TEAL },
        hub: { node: TEAL, label: TEAL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: TEAL_LINK,
        hub: TEAL_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },

    layout: {
      scale: 0.204,
      nodes: {
        united_states: { x: 392, y: 513, width: 72, height: 185 },
        rest_of_world: { x: 392, y: 935, width: 72, height: 191 },
        revenue: { x: 858, y: 648, width: 72, height: 376 },
        gross_profit: { x: 1323, y: 508, width: 72, height: 334 },
        cost_of_revenue: { x: 1323, y: 1082, width: 72, height: 42 },
        operating_profit: { x: 1792, y: 437, width: 72, height: 294 },
        operating_expenses: { x: 1793, y: 944, width: 72, height: 41 },
        net_profit: { x: 2260, y: 303, width: 72, height: 246 },
        tax: { x: 2260, y: 683, width: 72, height: 46 },
        other: { x: 2260, y: 837, width: 72, height: 2 },
        rnd: { x: 2260, y: 932, width: 72, height: 19 },
        sm: { x: 2260, y: 1118, width: 72, height: 13 },
        ga: { x: 2260, y: 1277, width: 72, height: 9 },
      },
      labels: {
        united_states: {
          blocks: [
            {
              x: 428, top: 421, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+47% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 270, top: 562, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'United', size: 40, weight: 800 },
                { text: 'States', size: 40, weight: 800 },
              ],
            },
          ],
        },
        rest_of_world: {
          blocks: [
            {
              x: 428, top: 844, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+72% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 260, top: 997, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Rest of the', size: 40, weight: 800 },
                { text: 'world', size: 40, weight: 800 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 894, top: 508, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+59% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1359, top: 330, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '89% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1359, top: 1148, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 37, weight: 800 },
                { text: 'revenue', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1828, top: 256, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '78% margin', size: 29, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1828, top: 1008, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 37, weight: 800 },
                { text: 'expenses', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2360, top: 345, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '65% margin', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 676, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 802, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 914, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '5% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1092, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '3% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1270, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '2% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'united_states', col: 0, order: 0, type: 'source',
        label: 'United States', value: 907, notes: ['+47% Y/Y'],
      },
      {
        id: 'rest_of_world', col: 0, order: 1, type: 'source',
        label: 'Rest of the world', value: 935, notes: ['+72% Y/Y'],
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 1842, valueText: '$1,842M', notes: ['+59% Y/Y'],
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 1639, valueText: '$1,639M', notes: ['89% margin', '+2pp Y/Y'],
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: 'Cost of revenue', value: 204,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 1440, valueText: '$1,440M', notes: ['78% margin', '+6pp Y/Y'],
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: 'Operating expenses', value: 199,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 1206, valueText: '$1,206M', notes: ['65% margin', '+3pp Y/Y'],
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 226,
      },
      {
        id: 'other', col: 5, order: 2, type: 'cost',
        label: 'Other', value: 9,
      },
      {
        id: 'rnd', col: 5, order: 3, type: 'cost',
        label: 'R&D', value: 94, notes: ['5% of revenue', '+0pp Y/Y'],
      },
      {
        id: 'sm', col: 5, order: 4, type: 'cost',
        label: 'S&M', value: 61, notes: ['3% of revenue', '(2pp) Y/Y'],
      },
      {
        id: 'ga', col: 5, order: 5, type: 'cost',
        label: 'G&A', value: 44, notes: ['2% of revenue', '(2pp) Y/Y'],
      },
    ],

    links: [
      { source: 'united_states', target: 'revenue', value: 907, width: 185, sourceOrder: 0, targetOrder: 0 },
      { source: 'rest_of_world', target: 'revenue', value: 935, width: 191, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 1639, width: 334, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 204, width: 42, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 1440, width: 294, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 199, width: 41, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 1206, width: 246, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 226, width: 46, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'operating_profit',
        target: 'other',
        value: 9,
        width: 2,
        sourceOrder: 2,
        targetOrder: 0,
        curve: { c1x: 1970, c1y: 730, c2x: 2138, c2y: 838 },
      },

      { source: 'operating_expenses', target: 'rnd', value: 94, width: 19, sourceOrder: 0, targetOrder: 0 },
      {
        source: 'operating_expenses',
        target: 'sm',
        value: 61,
        width: 13,
        sourceOrder: 1,
        targetOrder: 0,
        curve: { c1x: 1950, c1y: 972, c2x: 2110, c2y: 1124 },
      },
      {
        source: 'operating_expenses',
        target: 'ga',
        value: 44,
        width: 9,
        sourceOrder: 2,
        targetOrder: 0,
        curve: { c1x: 1958, c1y: 980, c2x: 2140, c2y: 1282 },
      },
    ],

    i18n: {
      zh: {
        name: 'AppLovin · 2026 财年第一季度',
        meta: {
          title: 'AppLovin 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          united_states: { label: '美国', notes: ['同比 +47%'] },
          rest_of_world: { label: '世界其他地区', notes: ['同比 +72%'] },
          revenue: { label: '收入', notes: ['同比 +59%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 78%', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 65%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 5%', '同比 +0 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 3%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (2 个百分点)'] },
        },
        layout: {
          labels: zhLayoutLabels,
        },
      },
    },
  });
})();
