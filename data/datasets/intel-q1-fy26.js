/* ====================================================================
 * Intel - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/intel-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 *
 * Topology: Client Computing + Datacenter & AI -> Intel Products;
 * Intel Products + Intel Foundry + Other -> segment hub -> Net revenue
 * (+ Eliminations); Net revenue -> Gross profit + Cost of sales;
 * Gross profit + Operating loss -> Operating expenses -> R&D +
 * Marketing, G&A + Restructuring and other.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLUE = '#0068b5';
  const BLUE_LABEL = '#0068b5';
  const BLUE_LINK = '#85b4d6';
  const CYAN = '#00c7fd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#96cc96';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#707070';
  const RIGHT_LABEL_X = 2436;

  // Modern lowercase "intel" wordmark (traced from the source tile).
  const intelLogo = `
    <g fill="none" stroke="${BLUE}" stroke-width="40" stroke-linecap="round" stroke-linejoin="round">
      <path d="M40 92 L40 150"/>
      <path d="M96 150 L96 112 C96 90 114 78 134 78 C154 78 172 90 172 112 L172 150"/>
      <path d="M198 92 L270 92"/>
      <path d="M234 56 L234 138 C234 149 242 151 254 149"/>
      <path d="M368 134 A40 40 0 1 1 372 98 L300 98"/>
      <path d="M430 56 L430 138 C430 149 438 151 450 149"/>
    </g>
    <rect x="18" y="18" width="44" height="44" rx="13" fill="${CYAN}"/>`;

  const zhLayoutLabels = {
    client_computing: {
      blocks: [
        {
          x: 396, top: 448, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +1%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 197, top: 547, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '客户端计算', size: 30, weight: 800 },
            { text: '营业利润率 31%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    datacenter_ai: {
      blocks: [
        {
          x: 396, top: 771, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +22%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 197, top: 889, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '数据中心与 AI', size: 30, weight: 800 },
            { text: '营业利润率 11%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    intel_products: {
      blocks: [
        {
          x: 708, top: 535, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '英特尔产品', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    intel_foundry: {
      blocks: [
        {
          x: 708, top: 963, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +16%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 486, top: 1077, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '英特尔代工', size: 30, weight: 800 },
            { text: '营业利润率 (43%)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 710, top: 1204, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 (33%)', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 500, top: 1272, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '其他', size: 30, weight: 800 },
            { text: '营业利润率 16%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 1330, top: 533, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '净收入', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +7%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    eliminations: {
      blocks: [
        {
          x: 1330, top: 1169, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '内部抵销', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1642, top: 374, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '毛利润', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 39%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_sales: {
      blocks: [
        {
          x: 1642, top: 979, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '销售', size: 30, weight: 800 },
            { text: '成本', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    operating_loss: {
      blocks: [
        {
          x: 1805, top: 885, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '营业', size: 30, weight: 800 },
            { text: '亏损', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 (23%)', size: 29, weight: 400, color: NOTE },
            { text: '同比 (21 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1953, top: 502, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '营业', size: 30, weight: 800 },
            { text: '费用', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 450, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '研发', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 25%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    marketing_ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 701, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '营销及', size: 31, weight: 800 },
            { text: '一般行政', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 8%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    restructuring: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 953, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '重组', size: 31, weight: 800 },
            { text: '及其他', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 30%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +29 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    seg_hub: { blocks: [] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q1-fy26',
    name: 'Intel · Q1 FY26',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q1 FY26 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intel-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1336,
      titleY: 200,
      titleSize: 112,
      titleWeight: 800,
      titleTextLength: 2001,
      logoWidth: 430,
      logoHeight: 165,
      logoY: 282,
      logoViewBox: '0 0 490 175',
      logoSvg: intelLogo,
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
      type: { name: 30, value: 39, note: 29, lineGap: 5 },
    },

    layout: {
      nodes: {
        client_computing: { x: 360, y: 550, width: 72, height: 141 },
        datacenter_ai: { x: 360, y: 871, width: 72, height: 92 },
        intel_products: { x: 672, y: 654, width: 72, height: 233 },
        intel_foundry: { x: 672, y: 1062, width: 72, height: 99 },
        other: { x: 672, y: 1299, width: 72, height: 11 },
        seg_hub: { x: 983, y: 734, width: 72, height: 343 },
        revenue: { x: 1294, y: 652, width: 72, height: 248 },
        eliminations: { x: 1294, y: 1064, width: 72, height: 95 },
        gross_profit: { x: 1606, y: 569, width: 72, height: 98 },
        cost_of_sales: { x: 1606, y: 812, width: 72, height: 150 },
        operating_loss: { x: 1769, y: 815, width: 72, height: 56 },
        operating_expenses: { x: 1917, y: 652, width: 72, height: 154 },
        rnd: { x: 2229, y: 463, width: 72, height: 60 },
        marketing_ga: { x: 2229, y: 732, width: 72, height: 17 },
        restructuring: { x: 2229, y: 970, width: 72, height: 77 },
      },
      labels: {
        client_computing: {
          blocks: [
            {
              x: 396, top: 448, anchor: 'middle', lineGap: 5,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 197, top: 547, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Client', size: 30, weight: 800 },
                { text: 'Computing', size: 30, weight: 800 },
                { text: '31% operating margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        datacenter_ai: {
          blocks: [
            {
              x: 396, top: 771, anchor: 'middle', lineGap: 5,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 197, top: 889, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Datacenter & AI', size: 30, weight: 800 },
                { text: '11% operating margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        intel_products: {
          blocks: [
            {
              x: 708, top: 535, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Intel Products', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        intel_foundry: {
          blocks: [
            {
              x: 708, top: 963, anchor: 'middle', lineGap: 5,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 486, top: 1077, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Intel Foundry', size: 30, weight: 800 },
                { text: '(43%) operating margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 710, top: 1204, anchor: 'middle', lineGap: 5,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(33%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 500, top: 1272, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Other', size: 30, weight: 800 },
                { text: '16% operating margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1330, top: 533, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Net revenue', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1330, top: 1169, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Eliminations', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1642, top: 374, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Grossprofit', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '39% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1642, top: 979, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Cost', size: 30, weight: 800 },
                { text: 'of sales', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1805, top: 885, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Operating', size: 30, weight: 800 },
                { text: 'loss', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(23%) margin', size: 29, weight: 400, color: NOTE },
                { text: '(21pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1953, top: 502, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Operating', size: 30, weight: 800 },
                { text: 'expenses', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 450, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '25% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        marketing_ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 701, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Marketing, G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 953, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Restructuring', size: 31, weight: 800 },
                { text: 'and other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '30% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+29pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        seg_hub: { blocks: [] },
      },
    },

    nodes: [
      {
        id: 'client_computing', col: 0, order: 0, type: 'source',
        label: 'Client Computing', value: 7.7, notes: ['+1% Y/Y', '31% operating margin'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'datacenter_ai', col: 0, order: 1, type: 'source',
        label: 'Datacenter & AI', value: 5.1, notes: ['+22% Y/Y', '11% operating margin'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'intel_products', col: 1, order: 0, type: 'source',
        label: 'Intel Products', value: 12.8, notes: ['+9% Y/Y'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'intel_foundry', col: 1, order: 1, type: 'source',
        label: 'Intel Foundry', value: 5.4, notes: ['+16% Y/Y', '(43%) operating margin'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'other', col: 1, order: 2, type: 'source',
        label: 'Other', value: 0.6, notes: ['(33%) Y/Y', '16% operating margin'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'seg_hub', col: 2, order: 0, type: 'hub',
        label: '', value: 18.8,
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'revenue', col: 3, order: 0, type: 'source',
        label: 'Net revenue', value: 13.6, notes: ['+7% Y/Y'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'eliminations', col: 3, order: 1, type: 'cost',
        label: 'Eliminations', value: -5.3,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'gross_profit', col: 4, order: 0, type: 'profit',
        label: 'Gross profit', value: 5.3, notes: ['39% margin', '+2pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_sales', col: 4, order: 1, type: 'cost',
        label: 'Cost of sales', value: 8.2,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 5, order: 0, type: 'cost',
        label: 'Operating loss', value: -3.1, notes: ['(23%) margin', '(21pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 6, order: 0, type: 'cost',
        label: 'Operating expenses', value: 8.5,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 7, order: 0, type: 'cost',
        label: 'R&D', value: 3.4, notes: ['25% of revenue', '(4pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'marketing_ga', col: 7, order: 1, type: 'cost',
        label: 'Marketing, G&A', value: 1.0, notes: ['8% of revenue', '(2pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'restructuring', col: 7, order: 2, type: 'cost',
        label: 'Restructuring and other', value: 4.1, notes: ['30% of revenue', '+29pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'client_computing', target: 'intel_products', value: 7.7, width: 141, sourceOrder: 0, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'intel_products', value: 5.1, width: 92, sourceOrder: 0, targetOrder: 1 },

      { source: 'intel_products', target: 'seg_hub', value: 12.8, width: 233, sourceOrder: 0, targetOrder: 0 },
      { source: 'intel_foundry', target: 'seg_hub', value: 5.4, width: 99, sourceOrder: 0, targetOrder: 1 },
      { source: 'other', target: 'seg_hub', value: 0.6, width: 11, sourceOrder: 0, targetOrder: 2 },

      { source: 'seg_hub', target: 'revenue', value: 13.6, width: 248, sourceOrder: 0, targetOrder: 0 },
      { source: 'seg_hub', target: 'eliminations', value: 5.3, width: 95, sourceOrder: 1, targetOrder: 0 },

      { source: 'revenue', target: 'gross_profit', value: 5.3, width: 98, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 8.2, width: 150, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 5.3, width: 98, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 3.1, width: 56, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 3.4, width: 60, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.0, width: 17, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 4.1, width: 77, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Intel · 2026 财年第一季度',
        meta: {
          title: '英特尔 2026 财年第一季度利润表',
          titleSize: 116,
          titleTextLength: 1720,
        },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 +1%', '营业利润率 31%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 +22%', '营业利润率 11%'] },
          intel_products: { label: '英特尔产品', notes: ['同比 +9%'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 +16%', '营业利润率 (43%)'] },
          other: { label: '其他', notes: ['同比 (33%)', '营业利润率 16%'] },
          revenue: { label: '净收入', notes: ['同比 +7%'] },
          eliminations: { label: '内部抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 +2 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (23%)', '同比 (21 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 25%', '同比 (4 个百分点)'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 8%', '同比 (2 个百分点)'] },
          restructuring: { label: '重组及其他', notes: ['占收入 30%', '同比 +29 个百分点'] },
        },
        layout: {
          labels: zhLayoutLabels,
        },
      },
    },
  });
})();
