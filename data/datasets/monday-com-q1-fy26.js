/* ====================================================================
 *  Monday.com - Q1 FY26 income statement ($M)
 *  Reconstructed from input/processed/monday-com-q1-fy26.png as a fixed
 *  d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const DARK = '#333333';
  const TITLE = '#155277';
  const NOTE = '#6d6d6d';
  const GREEN = '#29a32a';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9ccd9c';
  const RED = '#d60000';
  const RED_LABEL = '#8e1300';
  const RED_LINK = '#e38082';
  const LOGO_RED = '#ff285f';
  const LOGO_YELLOW = '#ffcc00';
  const LOGO_GREEN = '#00c875';
  const RIGHT_LABEL_X = 2428;

  const mondayLogo = (word = 'monday') => `
    <g transform="translate(30 630)">
      <rect x="52" y="34" width="75" height="166" rx="37.5" transform="rotate(32 89.5 117)" fill="${LOGO_RED}"/>
      <rect x="180" y="34" width="75" height="166" rx="37.5" transform="rotate(32 217.5 117)" fill="${LOGO_YELLOW}"/>
      <circle cx="282" cy="158" r="39" fill="${LOGO_GREEN}"/>
      <text x="24" y="265" font-family="Montserrat,Arial,sans-serif" font-size="53" font-weight="800" fill="${DARK}"
        textLength="230" lengthAdjust="spacingAndGlyphs">${word}</text>
      <text x="263" y="265" font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="700" fill="${DARK}">.com</text>
    </g>`;

  const kpiCard = (x, width, line1, line2) => `
    <g>
      <rect x="${x}" y="1146" width="${width}" height="151" rx="35" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1209" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${line1}</text>
      <text x="${x + width / 2}" y="1253" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${line2}</text>
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${mondayLogo('monday')}
      ${kpiCard(46, 293, 'NDR 110%', '10+ users 114%')}
      ${kpiCard(351, 347, 'Customers&gt; $50K+', '4,457 +32% Y/Y')}
      <text x="197" y="1331" text-anchor="start" font-size="29" font-weight="500" fill="${NOTE}">NDR = Net Dollar Retention</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${mondayLogo('Monday')}
      ${kpiCard(46, 293, 'NDR：110%', '10+ 用户 114%')}
      ${kpiCard(351, 347, 'ARR 超 $50K 客户', '4,457，同比 +32%')}
      <text x="197" y="1331" text-anchor="start" font-size="29" font-weight="500" fill="${NOTE}">NDR = 净美元留存率</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'monday-com-q1-fy26',
    name: 'Monday.com · Q1 FY26',
    company: 'Monday.com',
    meta: {
      company: 'Monday.com',
      title: 'Monday.com Q1 FY26 Income Statement',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/monday-com-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 128,
      titleWeight: 700,
      titleTextLength: 2430,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GREEN_LINK,
        hub: GREEN_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 1,
      nodes: {
        revenue: { x: 414, y: 602, width: 72, height: 382 },
        gross_profit: { x: 1037, y: 528, width: 72, height: 341 },
        cost_of_revenue: { x: 1037, y: 1070, width: 72, height: 40 },
        operating_profit: { x: 1660, y: 438, width: 72, height: 21 },
        operating_expenses: { x: 1660, y: 663, width: 72, height: 320 },
        finance: { x: 2143, y: 395, width: 72, height: 10 },
        net_profit: { x: 2283, y: 326, width: 72, height: 29 },
        tax: { x: 2283, y: 564, width: 72, height: 1 },
        sm: { x: 2283, y: 715, width: 72, height: 180 },
        rnd: { x: 2283, y: 1003, width: 72, height: 99 },
        ga: { x: 2283, y: 1231, width: 72, height: 38 },
      },
      labels: {
        revenue: {
          blocks: [
            {
              x: 450, top: 453, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+24% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1073, top: 334, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '89% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1696, top: 248, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '6% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2380, top: 276, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '8% margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        finance: {
          blocks: [
            {
              x: 2180, top: 424, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Finance', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2470, top: 517, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1073, top: 1129, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 35, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1696, top: 999, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 43, weight: 800 },
                { text: 'expenses', size: 43, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 719, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Sales &', size: 31, weight: 800 },
                { text: 'marketing', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '47% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 958, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Research &', size: 31, weight: 800 },
                { text: 'development', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '26% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1186, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'General &', size: 31, weight: 800 },
                { text: 'admin', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'revenue', col: 0, order: 0, type: 'hub',
        label: 'Revenue', value: 351, notes: ['+24% Y/Y'], color: DARK, labelColor: DARK, linkTint: GREEN_LINK,
      },
      {
        id: 'gross_profit', col: 1, order: 0, type: 'profit',
        label: 'Gross profit', value: 313, notes: ['89% margin', '(1pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 1, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 38, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 2, order: 0, type: 'profit',
        label: 'Operating profit', value: 20, notes: ['6% margin', '+2pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 2, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 293, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'finance', col: 3, order: 0, type: 'profit',
        label: 'Finance', value: 10, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 4, order: 0, type: 'profit',
        label: 'Net profit', value: 28, notes: ['8% margin', '(2pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 4, order: 1, type: 'cost',
        label: 'Tax', value: 2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 4, order: 2, type: 'cost',
        label: 'Sales & marketing', value: 165, notes: ['47% of revenue', '(3pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 4, order: 3, type: 'cost',
        label: 'Research & development', value: 92, notes: ['26% of revenue', '+2pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 4, order: 4, type: 'cost',
        label: 'General & admin', value: 36, notes: ['10% of revenue', '(1pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'revenue', target: 'gross_profit', value: 313, width: 341, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 38, width: 40, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 20, width: 21, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 293, width: 320, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 18, width: 19, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2, width: 1, sourceOrder: 1, targetOrder: 0 },
      { source: 'finance', target: 'net_profit', value: 10, width: 10, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 165, width: 180, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 92, width: 99, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 36, width: 38, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Monday.com · 2026 财年第一季度',
        meta: {
          title: 'Monday.com 2026 财年第一季度利润表',
          titleTextLength: 2140,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          revenue: { label: '收入', notes: ['同比 +24%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 +2 个百分点'] },
          operating_expenses: { label: '营业费用' },
          finance: { label: '财务收入' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 47%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 26%', '同比 +2 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 10%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            revenue: {
              blocks: [
                {
                  x: 450, top: 453, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 39, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +24%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1073, top: 334, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 39, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 89%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1696, top: 248, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 39, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 6%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2380, top: 276, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 39, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 8%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            finance: {
              blocks: [
                {
                  x: 2180, top: 424, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '财务收入', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2470, top: 517, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1073, top: 1129, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '收入', size: 36, weight: 800 },
                    { text: '成本', size: 36, weight: 800 },
                    { text: '$value', size: 35, weight: 400 },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1696, top: 999, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '营业', size: 43, weight: 800 },
                    { text: '费用', size: 43, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 719, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与', size: 31, weight: 800 },
                    { text: '市场', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 47%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 958, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研究与', size: 31, weight: 800 },
                    { text: '开发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 26%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1186, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '一般及', size: 31, weight: 800 },
                    { text: '行政', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 10%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
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
