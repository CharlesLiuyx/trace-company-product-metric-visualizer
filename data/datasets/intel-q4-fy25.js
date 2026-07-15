/* ====================================================================
 * Intel - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/intel-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 *
 * Topology: Client Computing + Datacenter & AI -> Intel Products;
 * Intel Products + Intel Foundry + Other -> segment hub -> Net revenue
 * (+ Eliminations); Net revenue -> Gross profit + Cost of sales;
 * Gross profit -> Operating profit + Operating expenses;
 * Operating profit (+ Net loss add-in) -> Tax + Interest & other;
 * Operating expenses -> R&D + Marketing, G&A.
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
          x: 396, top: 522, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 (7%)', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 191, top: 633, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '客户端计算', size: 30, weight: 800 },
            { text: '营业利润率 27%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    datacenter_ai: {
      blocks: [
        {
          x: 396, top: 829, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 191, top: 931, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '数据中心与 AI', size: 30, weight: 800 },
            { text: '营业利润率 26%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    intel_products: {
      blocks: [
        {
          x: 708, top: 560, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '英特尔产品', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 (1%)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    intel_foundry: {
      blocks: [
        {
          x: 708, top: 997, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +4%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 480, top: 1104, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '英特尔代工', size: 30, weight: 800 },
            { text: '营业利润率 (56%)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 710, top: 1232, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 (48%)', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 494, top: 1268, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '其他', size: 30, weight: 800 },
            { text: '营业利润率 1%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 1330, top: 558, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '净收入', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 (4%)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    eliminations: {
      blocks: [
        {
          x: 1330, top: 1200, anchor: 'middle', lineGap: 5,
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
          x: 1642, top: 378, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '毛利润', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 36%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_sales: {
      blocks: [
        {
          x: 1642, top: 1028, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '销售', size: 30, weight: 800 },
            { text: '成本', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1955, top: 318, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '营业', size: 30, weight: 800 },
            { text: '利润', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 4%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1945, top: 822, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '营业', size: 30, weight: 800 },
            { text: '费用', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    net_loss: {
      blocks: [
        {
          x: 2160, top: 255, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '净亏损', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 (2%)', size: 29, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: 2442, top: 448, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '税费', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    interest_other: {
      blocks: [
        {
          x: 2442, top: 600, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '利息', size: 30, weight: 800 },
            { text: '及其他', size: 30, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 865, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '研发', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 24%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    marketing_ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1093, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '营销及', size: 31, weight: 800 },
            { text: '一般行政', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 9%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    seg_hub: { blocks: [] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q4-fy25',
    name: 'Intel · Q4 FY25',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q4 FY25 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intel-q4-fy25.png', width: 2667, height: 1500 },
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
      interfaceAudit: { mode: 'error' },
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
        client_computing: { x: 360, y: 622, width: 72, height: 145 },
        datacenter_ai: { x: 360, y: 930, width: 72, height: 85 },
        intel_products: { x: 672, y: 710, width: 72, height: 230 },
        intel_foundry: { x: 672, y: 1097, width: 72, height: 79 },
        other: { x: 672, y: 1326, width: 72, height: 11 },
        seg_hub: { x: 983, y: 776, width: 72, height: 320 },
        revenue: { x: 1294, y: 709, width: 72, height: 243 },
        eliminations: { x: 1294, y: 1105, width: 72, height: 77 },
        gross_profit: { x: 1606, y: 623, width: 72, height: 88 },
        cost_of_sales: { x: 1606, y: 859, width: 72, height: 155 },
        operating_profit: { x: 1920, y: 556, width: 72, height: 11 },
        operating_expenses: { x: 1920, y: 729, width: 72, height: 77 },
        net_loss: { x: 2125, y: 444, width: 72, height: 5 },
        tax: { x: 2229, y: 482, width: 72, height: 12 },
        interest_other: { x: 2229, y: 637, width: 72, height: 4 },
        rnd: { x: 2229, y: 868, width: 72, height: 56 },
        marketing_ga: { x: 2229, y: 1126, width: 72, height: 21 },
      },
      labels: {
        client_computing: {
          blocks: [
            {
              x: 396, top: 522, anchor: 'middle', lineGap: 5,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(7%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 191, top: 633, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Client', size: 30, weight: 800 },
                { text: 'Computing', size: 30, weight: 800 },
                { text: '27% operating margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        datacenter_ai: {
          blocks: [
            {
              x: 396, top: 829, anchor: 'middle', lineGap: 5,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 191, top: 931, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Datacenter & AI', size: 30, weight: 800 },
                { text: '26% operating margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        intel_products: {
          blocks: [
            {
              x: 708, top: 560, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Intel Products', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(1%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        intel_foundry: {
          blocks: [
            {
              x: 708, top: 997, anchor: 'middle', lineGap: 5,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 480, top: 1104, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Intel Foundry', size: 30, weight: 800 },
                { text: '(56%) operating margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 710, top: 1232, anchor: 'middle', lineGap: 5,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(48%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 494, top: 1268, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Other', size: 30, weight: 800 },
                { text: '1% operating margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1330, top: 558, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Net revenue', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(4%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1330, top: 1200, anchor: 'middle', lineGap: 5,
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
              x: 1642, top: 378, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Gross', size: 30, weight: 800 },
                { text: 'profit', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '36% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1642, top: 1028, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Cost', size: 30, weight: 800 },
                { text: 'of sales', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1955, top: 318, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Operating', size: 30, weight: 800 },
                { text: 'profit', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '4% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1945, top: 822, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Operating', size: 30, weight: 800 },
                { text: 'expenses', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        net_loss: {
          blocks: [
            {
              x: 2160, top: 255, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Net loss', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(2%) margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2442, top: 448, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Tax', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        interest_other: {
          blocks: [
            {
              x: 2442, top: 600, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Interest', size: 30, weight: 800 },
                { text: '& other', size: 30, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 865, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '24% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        marketing_ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1093, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Marketing, G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '9% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
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
        label: 'Client Computing', value: 8.2, notes: ['(7%) Y/Y', '27% operating margin'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'datacenter_ai', col: 0, order: 1, type: 'source',
        label: 'Datacenter & AI', value: 4.7, notes: ['+9% Y/Y', '26% operating margin'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'intel_products', col: 1, order: 0, type: 'source',
        label: 'Intel Products', value: 12.9, notes: ['(1%) Y/Y'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'intel_foundry', col: 1, order: 1, type: 'source',
        label: 'Intel Foundry', value: 4.5, notes: ['+4% Y/Y', '(56%) operating margin'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'other', col: 1, order: 2, type: 'source',
        label: 'Other', value: 0.6, notes: ['(48%) Y/Y', '1% operating margin'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'seg_hub', col: 2, order: 0, type: 'hub',
        label: '', value: 18.0,
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'revenue', col: 3, order: 0, type: 'source',
        label: 'Net revenue', value: 13.7, notes: ['(4%) Y/Y'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'eliminations', col: 3, order: 1, type: 'cost',
        label: 'Eliminations', value: -4.3,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'gross_profit', col: 4, order: 0, type: 'profit',
        label: 'Gross profit', value: 5.0, valueText: '$5.0B', notes: ['36% margin', '(3pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_sales', col: 4, order: 1, type: 'cost',
        label: 'Cost of sales', value: 8.7,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 5, order: 0, type: 'profit',
        label: 'Operating profit', value: 0.6, notes: ['4% margin', '+1pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 5, order: 1, type: 'cost',
        label: 'Operating expenses', value: 4.4,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_loss', col: 6, order: 0, type: 'cost',
        label: 'Net loss', value: -0.3, notes: ['(2%) margin', '(1pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 6, order: 1, type: 'cost',
        label: 'Tax', value: 0.7,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'interest_other', col: 6, order: 2, type: 'cost',
        label: 'Interest & other', value: 0.2,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 6, order: 3, type: 'cost',
        label: 'R&D', value: 3.2, notes: ['24% of revenue', '(4pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'marketing_ga', col: 6, order: 4, type: 'cost',
        label: 'Marketing, G&A', value: 1.2, notes: ['9% of revenue', '(0pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'client_computing', target: 'intel_products', value: 8.2, width: 145, sourceOrder: 0, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'intel_products', value: 4.7, width: 85, sourceOrder: 0, targetOrder: 1 },

      { source: 'intel_products', target: 'seg_hub', value: 12.9, width: 230, sourceOrder: 0, targetOrder: 0 },
      { source: 'intel_foundry', target: 'seg_hub', value: 4.5, width: 79, sourceOrder: 0, targetOrder: 1 },
      { source: 'other', target: 'seg_hub', value: 0.6, width: 11, sourceOrder: 0, targetOrder: 2 },

      { source: 'seg_hub', target: 'revenue', value: 13.7, width: 243, sourceOrder: 0, targetOrder: 0 },
      { source: 'seg_hub', target: 'eliminations', value: 4.3, width: 77, sourceOrder: 1, targetOrder: 0 },

      { source: 'revenue', target: 'gross_profit', value: 5.0, width: 88, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 8.7, width: 155, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 0.6, width: 11, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.4, width: 77, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'tax', value: 0.4, width: 7, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'interest_other', value: 0.2, width: 4, sourceOrder: 1, targetOrder: 0 },

      { source: 'net_loss', target: 'tax', value: 0.3, width: 5, sourceOrder: 0, targetOrder: 0, y0: 446, y1: 484, curve: { c1x: 2214, c1y: 446, c2x: 2216, c2y: 484 } },

      { source: 'operating_expenses', target: 'rnd', value: 3.2, width: 56, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.2, width: 21, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Intel · 2025 财年第四季度',
        meta: {
          title: '英特尔 2025 财年第四季度利润表',
          titleSize: 116,
          titleTextLength: 1720,
        },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 (7%)', '营业利润率 27%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 +9%', '营业利润率 26%'] },
          intel_products: { label: '英特尔产品', notes: ['同比 (1%)'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 +4%', '营业利润率 (56%)'] },
          other: { label: '其他', notes: ['同比 (48%)', '营业利润率 1%'] },
          revenue: { label: '净收入', notes: ['同比 (4%)'] },
          eliminations: { label: '内部抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 36%', '同比 (3 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 +1 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_loss: { label: '净亏损', notes: ['利润率 (2%)', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          interest_other: { label: '利息及其他' },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 (4 个百分点)'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 9%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: zhLayoutLabels,
        },
      },
    },
  });
})();
