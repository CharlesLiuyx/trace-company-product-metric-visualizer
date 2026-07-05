/* ====================================================================
 * C3.ai - Q4 FY26 income statement ($M)
 * Reconstructed from input/processed/c3-ai-q4-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const DARK = '#000000';
  const DARK_LABEL = '#000000';
  const DARK_LINK = '#848484';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#96cc96';
  const RED = '#cc0000';
  const RED_LABEL = '#981100';
  const RED_LINK = '#e08585';
  const NOTE = '#707070';
  const SCALE = 3.674;
  const RIGHT_LABEL_X = 2436;

  const h = (value) => Math.round(value * SCALE);

  // C3.ai square maze mark (traced from the source tile, 243x242).
  const c3Logo = `
    <g>
      <rect width="243" height="242" fill="${DARK}"/>
      <g fill="#f2f2f2">
        <rect x="0" y="27" width="216" height="27"/>
        <rect x="27" y="81" width="189" height="27"/>
        <rect x="27" y="135" width="189" height="27"/>
        <rect x="0" y="189" width="216" height="27"/>
        <rect x="189" y="27" width="27" height="81"/>
        <rect x="27" y="81" width="27" height="81"/>
        <rect x="189" y="135" width="27" height="81"/>
      </g>
    </g>`;

  const zhLayoutLabels = {
    subscription: {
      blocks: [
        {
          x: 405, top: 424, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +25%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 213, top: 563, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '订阅', size: 40, weight: 800 },
            { text: '毛利率 25%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    services: {
      blocks: [
        {
          x: 404, top: 904, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 (85%)', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 213, top: 966, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '服务', size: 40, weight: 800 },
            { text: '毛利率 65%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 877, top: 518, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '收入', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 (53%)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1338, top: 335, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '毛利润', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 22%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (40 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1338, top: 1031, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '收入', size: 36, weight: 800 },
            { text: '成本', size: 36, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1802, top: 496, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '运营', size: 40, weight: 800 },
            { text: '费用', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    operating_loss: {
      blocks: [
        {
          x: 1574, top: 1160, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '营业亏损', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 (235%)', size: 29, weight: 400, color: NOTE },
            { text: '同比 (153 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 428, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '销售与', size: 31, weight: 800 },
            { text: '市场', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 96%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +31 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 716, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '研发', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 92%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +38 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 996, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '一般及', size: 31, weight: 800 },
            { text: '行政', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 49%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +23 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    restructuring: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1208, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '重组', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '新增', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'c3-ai-q4-fy26',
    name: 'C3.ai · Q4 FY26',
    company: 'C3.ai',
    meta: {
      company: 'C3.ai',
      title: 'C3.ai Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/c3-ai-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 176,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2015,
      periodX: 2436,
      periodY: 305,
      periodNoteY: 346,
      logoWidth: 243,
      logoHeight: 242,
      logoY: 249,
      logoViewBox: '0 0 243 242',
      logoSvg: c3Logo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK_LABEL },
        hub: { node: DARK, label: DARK_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: DARK_LINK,
        hub: DARK_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },

    layout: {
      scale: SCALE,
      nodes: {
        subscription: { x: 368, y: 518, width: 72, height: h(48) },
        services: { x: 368, y: 1001, width: 72, height: h(3) },
        revenue: { x: 836, y: 670, width: 71, height: 187 },
        gross_profit: { x: 1302, y: 522, width: 72, height: h(11) },
        cost_of_revenue: { x: 1302, y: 870, width: 73, height: h(40) },
        operating_loss: { x: 1538, y: 706, width: 72, height: h(121) },
        operating_expenses: { x: 1766, y: 661, width: 73, height: h(132) },
        sm: { x: 2236, y: 420, width: 73, height: h(49) },
        rnd: { x: 2236, y: 705, width: 73, height: h(47) },
        ga: { x: 2236, y: 1013, width: 73, height: h(25) },
        restructuring: { x: 2236, y: 1225, width: 73, height: h(11) },
      },
      labels: {
        subscription: {
          blocks: [
            {
              x: 405, top: 424, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+25% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 213, top: 563, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Subscription', size: 40, weight: 800 },
                { text: '25% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        services: {
          blocks: [
            {
              x: 404, top: 904, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(85%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 213, top: 966, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Services', size: 40, weight: 800 },
                { text: '65% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 877, top: 518, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(53)% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1338, top: 335, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '22% margin', size: 29, weight: 400, color: NOTE },
                { text: '(40pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1338, top: 1031, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1802, top: 496, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1574, top: 1160, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'loss', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(235%) margin', size: 29, weight: 400, color: NOTE },
                { text: '(153pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 428, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '96% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+31pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 716, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '92% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+38pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 996, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '49% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+23pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1208, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Restructuring', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: 'New', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'subscription', col: 0, order: 0, type: 'source',
        label: 'Subscription', value: 48, notes: ['+25% Y/Y', '25% gross margin'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'services', col: 0, order: 1, type: 'source',
        label: 'Services', value: 3, notes: ['(85%) Y/Y', '65% gross margin'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 52, notes: ['(53)% Y/Y'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 11, notes: ['22% margin', '(40pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: 'Cost of revenue', value: 40,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 3, order: 0, type: 'cost',
        label: 'Operating loss', value: -121, notes: ['(235%) margin', '(153pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 0, type: 'cost',
        label: 'Operating expenses', value: 132,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 0, type: 'cost',
        label: 'S&M', value: 49, notes: ['96% of revenue', '+31pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 1, type: 'cost',
        label: 'R&D', value: 47, notes: ['92% of revenue', '+38pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 2, type: 'cost',
        label: 'G&A', value: 25, notes: ['49% of revenue', '+23pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'restructuring', col: 5, order: 3, type: 'cost',
        label: 'Restructuring', value: 11, notes: ['New'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 48, width: h(48), sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 3, width: h(3), sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 11, width: h(11), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 40, width: h(40), sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 11, width: h(11), sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 121, width: h(121), sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 49, width: h(49), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 47, width: h(47), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 25, width: h(25), sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 11, width: h(11), sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'C3.ai · 2026 财年第四季度',
        meta: {
          title: 'C3.ai 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 4 月',
          titleSize: 96,
          titleTextLength: 1900,
        },
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +25%', '毛利率 25%'] },
          services: { label: '服务', notes: ['同比 (85%)', '毛利率 65%'] },
          revenue: { label: '收入', notes: ['同比 (53%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 22%', '同比 (40 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (235%)', '同比 (153 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          sm: { label: '销售与市场', notes: ['占收入 96%', '同比 +31 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 92%', '同比 +38 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 49%', '同比 +23 个百分点'] },
          restructuring: { label: '重组', notes: ['新增'] },
        },
        layout: {
          labels: zhLayoutLabels,
        },
      },
    },
  });
})();
