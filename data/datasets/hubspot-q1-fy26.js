/* ====================================================================
 * HubSpot - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/hubspot-q1-fy26.png as a fixed
 * d3-sankey layout with validated runtime raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155277';
  const DARK = '#33495f';
  const NOTE = '#707070';
  const GRAY_LINK = '#9aa5ab';
  const ORANGE = '#ff7759';
  const ORANGE_LINK = '#ffb7a7';
  const GREEN = '#2aa22a';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcd9b';
  const RED = '#d40000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e38284';
  const RIGHT_LABEL_X = 2463;

  const kpiCard = (line1Label, line1Value, line2Label, line2Value) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="148" y="1227" width="568" height="111" rx="29" fill="${DARK}"/>
      <text x="432" y="1281" text-anchor="middle" font-size="30" fill="#ffffff">
        <tspan font-weight="800">${line1Label}</tspan><tspan font-weight="500"> ${line1Value}</tspan>
      </text>
      <text x="432" y="1321" text-anchor="middle" font-size="30" fill="#ffffff">
        <tspan font-weight="800">${line2Label}</tspan><tspan font-weight="500"> ${line2Value}</tspan>
      </text>
    </g>`;

  const annotationsEn = kpiCard('Customers', '299K +16% Y/Y', 'Average Revenue', '$11,722 +6% Y/Y');
  const annotationsZh = kpiCard('客户数', '299K，同比 +16%', '平均收入', '$11,722，同比 +6%');

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hubspot-q1-fy26',
    name: 'HubSpot · Q1 FY26',
    company: 'HubSpot',
    meta: {
      company: 'HubSpot',
      title: 'HubSpot Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/hubspot-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2260,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
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
        source: GRAY_LINK,
        hub: GREEN_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/hubspot/company-wordmark.png',
        x: 580,
        y: 245,
        width: 620,
        height: 180,
      },
    ],

    layout: {
      scale: 1,
      nodes: {
        subscription: { x: 385, y: 526, width: 72, height: 337 },
        professional_services: { x: 385, y: 1056, width: 72, height: 6 },
        revenue: { x: 853, y: 622, width: 71, height: 344 },
        gross_profit: { x: 1319, y: 522, width: 73, height: 288 },
        cost_of_revenue: { x: 1319, y: 1008, width: 73, height: 57 },
        operating_profit: { x: 1787, y: 452, width: 72, height: 10 },
        operating_expenses: { x: 1786, y: 630, width: 74, height: 277 },
        interest: { x: 2135, y: 421, width: 71, height: 3 },
        net_profit: { x: 2254, y: 371, width: 72, height: 11 },
        tax: { x: 2253, y: 558, width: 73, height: 3 },
        sm: { x: 2253, y: 674, width: 73, height: 152 },
        rnd: { x: 2253, y: 910, width: 73, height: 92 },
        ga: { x: 2253, y: 1095, width: 73, height: 33 },
        restructuring: { x: 2253, y: 1270, width: 73, height: 1 },
      },
      labels: {
        subscription: {
          blocks: [
            {
              x: 421, top: 432, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 333, top: 646, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Subscription', size: 40, weight: 800 },
                { text: '85% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        professional_services: {
          blocks: [
            {
              x: 421, top: 964, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400, color: ORANGE },
                { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 295, top: 997, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Professional', size: 40, weight: 800, color: ORANGE },
                { text: 'services', size: 40, weight: 800, color: ORANGE },
                { text: '9% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 889, top: 476, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1356, top: 338, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '83% margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1356, top: 1088, anchor: 'middle', lineGap: 8,
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
              x: 1823, top: 268, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '3% margin', size: 29, weight: 400, color: NOTE },
                { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1824, top: 923, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2171, top: 442, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2370, top: 293, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '4% margin', size: 29, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 528, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 692, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '44% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 884, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '27% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1055, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1230, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Restructuring', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '0% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'subscription', col: 0, order: 0, type: 'source',
        label: 'Subscription', value: 862, notes: ['+23% Y/Y', '85% gross margin'],
        color: DARK, labelColor: DARK, linkTint: GRAY_LINK,
      },
      {
        id: 'professional_services', col: 0, order: 1, type: 'source',
        label: 'Professional services', value: 19, notes: ['+22% Y/Y', '9% gross margin'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 881, notes: ['+23% Y/Y'],
        color: DARK, labelColor: DARK, linkTint: GREEN_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 735, notes: ['83% margin', '(0pp) Y/Y'],
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: 'Cost of revenue', value: 146,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 28, notes: ['3% margin', '+7pp Y/Y'],
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: 'Operating expenses', value: 707,
      },
      {
        id: 'interest', col: 4, order: 0, type: 'profit',
        label: 'Interest', value: 11,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 33, notes: ['4% margin', '+6pp Y/Y'],
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 7,
      },
      {
        id: 'sm', col: 5, order: 2, type: 'cost',
        label: 'S&M', value: 386, notes: ['44% of revenue', '(2pp) Y/Y'],
      },
      {
        id: 'rnd', col: 5, order: 3, type: 'cost',
        label: 'R&D', value: 234, notes: ['27% of revenue', '(4pp) Y/Y'],
      },
      {
        id: 'ga', col: 5, order: 4, type: 'cost',
        label: 'G&A', value: 86, notes: ['10% of revenue', '(1pp) Y/Y'],
      },
      {
        id: 'restructuring', col: 5, order: 5, type: 'cost',
        label: 'Restructuring', value: 1, notes: ['0% of revenue', '(0pp) Y/Y'],
      },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 862, width: 337, sourceOrder: 0, targetOrder: 0 },
      {
        source: 'professional_services', target: 'revenue', value: 19, width: 6,
        sourceOrder: 1, targetOrder: 1, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK },
      },

      { source: 'revenue', target: 'gross_profit', value: 735, width: 288, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 146, width: 57, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 28, width: 10, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 707, width: 277, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 28, width: 10, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 7, width: 3, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 11, width: 3, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 386, width: 152, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 234, width: 92, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 86, width: 33, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 1, width: 1, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'HubSpot · 2026 财年第一季度',
        meta: {
          title: 'HubSpot 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 116,
          titleTextLength: 1880,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +23%', '毛利率 85%'] },
          professional_services: { label: '专业服务', notes: ['同比 +22%', '毛利率 9%'] },
          revenue: { label: '收入', notes: ['同比 +23%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 83%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 +7 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 +6 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 44%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 27%', '同比 (4 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 (1 个百分点)'] },
          restructuring: { label: '重组费用', notes: ['占收入 0%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: {
            subscription: {
              blocks: [
                {
                  x: 421, top: 432, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +23%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 333, top: 646, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '订阅', size: 40, weight: 800 },
                    { text: '毛利率 85%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            professional_services: {
              blocks: [
                {
                  x: 421, top: 964, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400, color: ORANGE },
                    { text: '同比 +22%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 295, top: 1014, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '专业服务', size: 40, weight: 800, color: ORANGE },
                    { text: '毛利率 9%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 889, top: 476, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +23%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1356, top: 338, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 83%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1356, top: 1105, anchor: 'middle', lineGap: 8,
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
                  x: 1823, top: 268, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 3%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +7 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1824, top: 940, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 2171, top: 442, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2370, top: 293, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 4%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 528, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 692, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售与市场', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 44%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 884, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 27%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1055, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 10%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            restructuring: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1230, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '重组费用', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 0%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
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
