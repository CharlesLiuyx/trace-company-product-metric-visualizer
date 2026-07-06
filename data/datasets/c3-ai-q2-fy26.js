/* ====================================================================
 * C3.ai - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/c3-ai-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const DARK = '#000000';
  const DARK_LABEL = '#000000';
  const DARK_LINK = '#8d8d8b';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#9bcf9b';
  const RED = '#d80000';
  const RED_LABEL = '#981100';
  const RED_LINK = '#df8181';
  const NOTE = '#707070';
  const RIGHT_LABEL_X = 2436;

  const H = {
    subscription: 138,
    professionalServices: 14,
    revenue: 153,
    grossProfit: 26,
    costOfRevenue: 127,
    operatingLoss: 404,
    operatingExpenses: 432,
    sm: 193,
    rnd: 170,
    ga: 69,
  };

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
            { text: '同比 (44%)', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 213, top: 544, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '订阅', size: 40, weight: 800 },
            { text: '毛利率 11%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    professional_services: {
      blocks: [
        {
          x: 404, top: 832, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 (61%)', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 213, top: 887, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '专业服务', size: 40, weight: 800 },
            { text: '毛利率 74%', size: 29, weight: 400, color: NOTE },
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
            { text: '同比 (46%)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1338, top: 357, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '毛利润', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 17%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (42 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1338, top: 925, anchor: 'middle', lineGap: 8,
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
          x: 1805, top: 510, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '营业', size: 40, weight: 800 },
            { text: '费用', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    operating_loss: {
      blocks: [
        {
          x: 1516, top: 1163, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '营业亏损', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 (264%)', size: 29, weight: 400, color: NOTE },
            { text: '同比 (175 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 504, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '销售与', size: 31, weight: 800 },
            { text: '市场', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 126%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +64 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 916, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '研发', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 110%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +50 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1240, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '一般及', size: 31, weight: 800 },
            { text: '行政', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 44%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +19 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'c3-ai-q2-fy26',
    name: 'C3.ai · Q2 FY26',
    company: 'C3.ai',
    meta: {
      company: 'C3.ai',
      title: 'C3.ai Q2 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/c3-ai-q2-fy26.png', width: 2667, height: 1500 },
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
      scale: 1,
      nodes: {
        subscription: { x: 368, y: 516, width: 72, height: H.subscription },
        professional_services: { x: 368, y: 924, width: 72, height: H.professionalServices },
        revenue: { x: 836, y: 658, width: 71, height: H.revenue },
        gross_profit: { x: 1303, y: 544, width: 71, height: H.grossProfit },
        cost_of_revenue: { x: 1303, y: 776, width: 71, height: H.costOfRevenue },
        operating_loss: { x: 1480, y: 739, width: 72, height: H.operatingLoss },
        operating_expenses: { x: 1770, y: 670, width: 71, height: H.operatingExpenses },
        sm: { x: 2237, y: 485, width: 72, height: H.sm },
        rnd: { x: 2237, y: 900, width: 72, height: H.rnd },
        ga: { x: 2237, y: 1260, width: 72, height: H.ga },
      },
      labels: {
        subscription: {
          blocks: [
            {
              x: 405, top: 424, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(44%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 213, top: 544, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Subscription', size: 40, weight: 800 },
                { text: '11% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        professional_services: {
          blocks: [
            {
              x: 404, top: 832, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(61%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 213, top: 887, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Professional', size: 40, weight: 800 },
                { text: 'services', size: 40, weight: 800 },
                { text: '74% gross margin', size: 29, weight: 400, color: NOTE },
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
                { text: '(46)% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1338, top: 357, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '17% margin', size: 29, weight: 400, color: NOTE },
                { text: '(42pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1338, top: 925, anchor: 'middle', lineGap: 8,
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
              x: 1805, top: 510, anchor: 'middle', lineGap: 8,
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
              x: 1516, top: 1163, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating loss', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(264%) margin', size: 29, weight: 400, color: NOTE },
                { text: '(175pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 504, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '126% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+64pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 916, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '110% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+50pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1240, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '44% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+19pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'subscription', col: 0, order: 0, type: 'source',
        label: 'Subscription', value: 48, notes: ['(44%) Y/Y', '11% gross margin'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'professional_services', col: 0, order: 1, type: 'source',
        label: ['Professional', 'services'], value: 5, notes: ['(61%) Y/Y', '74% gross margin'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 53, notes: ['(46)% Y/Y'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 9, notes: ['17% margin', '(42pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: 'Cost of revenue', value: 44,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 3, order: 0, type: 'cost',
        label: 'Operating loss', value: -140, notes: ['(264%) margin', '(175pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 0, type: 'cost',
        label: 'Operating expenses', value: 150,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 0, type: 'cost',
        label: 'S&M', value: 67, notes: ['126% of revenue', '+64pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 1, type: 'cost',
        label: 'R&D', value: 59, notes: ['110% of revenue', '+50pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 2, type: 'cost',
        label: 'G&A', value: 24, notes: ['44% of revenue', '+19pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 48, width: H.subscription, sourceOrder: 0, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 5, width: H.revenue - H.subscription, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 9, width: H.grossProfit, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 44, width: H.revenue - H.grossProfit, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 9, width: H.grossProfit, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 140, width: H.operatingExpenses - H.grossProfit, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 67, width: H.sm, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 59, width: H.rnd, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 24, width: H.operatingExpenses - H.sm - H.rnd, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'C3.ai · 2026 财年第二季度',
        meta: {
          title: 'C3.ai 2026 财年第二季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 1 月',
          titleSize: 96,
          titleTextLength: 1900,
        },
        nodes: {
          subscription: { label: '订阅', notes: ['同比 (44%)', '毛利率 11%'] },
          professional_services: { label: '专业服务', notes: ['同比 (61%)', '毛利率 74%'] },
          revenue: { label: '收入', notes: ['同比 (46%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 17%', '同比 (42 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (264%)', '同比 (175 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与市场', notes: ['占收入 126%', '同比 +64 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 110%', '同比 +50 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 44%', '同比 +19 个百分点'] },
        },
        layout: {
          labels: zhLayoutLabels,
        },
      },
    },
  });
})();
