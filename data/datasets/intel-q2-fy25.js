/* Intel Q2 FY25 income statement ($B), reconstructed from the Source as a
 * fixed d3-sankey layout. Financial values live in the Intel Metric SSOT. */
(function () {
  const TITLE = '#155077';
  const BLUE = '#0068b5';
  const BLUE_LINK = '#85b4d6';
  const CYAN = '#00c7fd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2460;

  const intelLogo = `
    <g transform="translate(170 0)">
    <g fill="none" stroke="${BLUE}" stroke-width="40" stroke-linecap="round" stroke-linejoin="round">
      <path d="M40 92 L40 150"/>
      <path d="M96 150 L96 112 C96 90 114 78 134 78 C154 78 172 90 172 112 L172 150"/>
      <path d="M198 92 L270 92"/>
      <path d="M234 56 L234 138 C234 149 242 151 254 149"/>
      <path d="M368 134 A40 40 0 1 1 372 98 L300 98"/>
      <path d="M430 56 L430 138 C430 149 438 151 450 149"/>
    </g>
    <rect x="18" y="18" width="44" height="44" rx="13" fill="${CYAN}"/>
    </g>`;

  const zhLayoutLabels = {
    client_computing: { blocks: [
      { x: 400, top: 385, anchor: 'middle', lineGap: 5, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '同比 (3%)', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 197, top: 513, anchor: 'middle', lineGap: 5, lines: [
        { text: '客户端', size: 30, weight: 800 },
        { text: '计算', size: 30, weight: 800 },
        { text: '营业利润率 26%', size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    datacenter_ai: { blocks: [
      { x: 400, top: 710, anchor: 'middle', lineGap: 5, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '同比 +4%', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 197, top: 807, anchor: 'middle', lineGap: 5, lines: [
        { text: '数据中心与 AI', size: 30, weight: 800 },
        { text: '营业利润率 16%', size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    intel_products: { blocks: [{ x: 710, top: 413, anchor: 'middle', lineGap: 5, lines: [
      { text: '英特尔产品', size: 30, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '同比 (1%)', size: 29, weight: 400, color: NOTE },
    ] }] },
    intel_foundry: { blocks: [
      { x: 710, top: 885, anchor: 'middle', lineGap: 5, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '同比 +3%', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 490, top: 986, anchor: 'middle', lineGap: 5, lines: [
        { text: '英特尔代工', size: 30, weight: 800 },
        { text: '营业利润率 (72%)', size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    other: { blocks: [
      { x: 710, top: 1128, anchor: 'middle', lineGap: 5, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '同比 +20%', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 500, top: 1212, anchor: 'middle', lineGap: 5, lines: [
        { text: '其他', size: 30, weight: 800 },
        { text: '营业利润率 7%', size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    revenue: { blocks: [{ x: 1334, top: 551, anchor: 'middle', lineGap: 5, lines: [
      { text: '收入', size: 30, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '同比 +0%', size: 29, weight: 400, color: NOTE },
    ] }] },
    eliminations: { blocks: [{ x: 1334, top: 1159, anchor: 'middle', lineGap: 5, lines: [
      { text: '内部抵销', size: 30, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
    ] }] },
    gross_profit: { blocks: [{ x: 1645, top: 440, anchor: 'middle', lineGap: 5, lines: [
      { text: '毛利润', size: 30, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '利润率 28%', size: 29, weight: 400, color: NOTE },
      { text: '同比 (8 个百分点)', size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_sales: { blocks: [{ x: 1645, top: 1061, anchor: 'middle', lineGap: 5, lines: [
      { text: '销售', size: 30, weight: 800 },
      { text: '成本', size: 30, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
    ] }] },
    operating_loss: { blocks: [{ x: 1825, top: 875, anchor: 'middle', lineGap: 5, lines: [
      { text: '营业', size: 30, weight: 800 },
      { text: '亏损', size: 30, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '利润率 (25%)', size: 29, weight: 400, color: NOTE },
      { text: '同比 (9 个百分点)', size: 29, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1973, top: 539, anchor: 'middle', lineGap: 5, lines: [
      { text: '营业', size: 30, weight: 800 },
      { text: '费用', size: 30, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
    ] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 576, anchor: 'middle', lineGap: 8, lines: [
      { text: '研究与', size: 31, weight: 800 },
      { text: '开发', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
      { text: '占收入 29%', size: 29, weight: 400, color: NOTE },
      { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
    ] }] },
    restructuring: { blocks: [{ x: RIGHT_LABEL_X, top: 839, anchor: 'middle', lineGap: 8, lines: [
      { text: '重组', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
      { text: '占收入 15%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +7 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
    marketing_ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1064, anchor: 'middle', lineGap: 8, lines: [
      { text: '营销及', size: 31, weight: 800 },
      { text: '一般行政', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
      { text: '占收入 9%', size: 29, weight: 400, color: NOTE },
      { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
    ] }] },
    seg_hub: { blocks: [] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q2-fy25',
    name: 'Intel · Q2 FY25',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q2 FY25 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intel-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1336,
      titleY: 200,
      titleSize: 112,
      titleWeight: 800,
      titleTextLength: 2001,
      logoWidth: 500,
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
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 30, value: 39, note: 29, lineGap: 5 },
    },
    layout: {
      nodes: {
        client_computing: { x: 364, y: 473, width: 71, height: 159 },
        datacenter_ai: { x: 364, y: 797, width: 71, height: 79 },
        intel_products: { x: 675, y: 546, width: 71, height: 240 },
        intel_foundry: { x: 675, y: 970, width: 71, height: 88 },
        other: { x: 675, y: 1214, width: 71, height: 20 },
        seg_hub: { x: 986, y: 616, width: 72, height: 352 },
        revenue: { x: 1298, y: 686, width: 71, height: 261 },
        eliminations: { x: 1298, y: 1051, width: 71, height: 89 },
        gross_profit: { x: 1609, y: 608, width: 72, height: 71 },
        cost_of_sales: { x: 1609, y: 843, width: 72, height: 189 },
        operating_loss: { x: 1789, y: 787, width: 72, height: 63 },
        operating_expenses: { x: 1937, y: 678, width: 71, height: 135 },
        rnd: { x: 2232, y: 593, width: 71, height: 74 },
        restructuring: { x: 2232, y: 871, width: 71, height: 36 },
        marketing_ga: { x: 2232, y: 1098, width: 71, height: 22 },
      },
      labels: {
        client_computing: { blocks: [
          { x: 400, top: 385, anchor: 'middle', lineGap: 5, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '(3%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 197, top: 513, anchor: 'middle', lineGap: 5, lines: [
            { text: 'Client', size: 30, weight: 800 }, { text: 'Computing', size: 30, weight: 800 },
            { text: '26% operating margin', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        datacenter_ai: { blocks: [
          { x: 400, top: 710, anchor: 'middle', lineGap: 5, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 197, top: 807, anchor: 'middle', lineGap: 5, lines: [
            { text: 'Datacenter & AI', size: 30, weight: 800 },
            { text: '16% operating margin', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        intel_products: { blocks: [{ x: 710, top: 413, anchor: 'middle', lineGap: 5, lines: [
          { text: 'Intel Products', size: 30, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '(1%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        intel_foundry: { blocks: [
          { x: 710, top: 885, anchor: 'middle', lineGap: 5, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+3% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 490, top: 986, anchor: 'middle', lineGap: 5, lines: [
            { text: 'Intel Foundry', size: 30, weight: 800 },
            { text: '(72%) operating margin', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        other: { blocks: [
          { x: 710, top: 1128, anchor: 'middle', lineGap: 5, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 500, top: 1212, anchor: 'middle', lineGap: 5, lines: [
            { text: 'Other', size: 30, weight: 800 }, { text: '7% operating margin', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [{ x: 1334, top: 551, anchor: 'middle', lineGap: 5, lines: [
          { text: 'Revenue', size: 30, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '+0% Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        eliminations: { blocks: [{ x: 1334, top: 1159, anchor: 'middle', lineGap: 5, lines: [
          { text: 'Eliminations', size: 30, weight: 800 }, { text: '$value', size: 39, weight: 400 },
        ] }] },
        gross_profit: { blocks: [{ x: 1645, top: 440, anchor: 'middle', lineGap: 5, lines: [
          { text: 'Gross profit', size: 30, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '28% margin', size: 29, weight: 400, color: NOTE },
          { text: '(8pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        cost_of_sales: { blocks: [{ x: 1645, top: 1061, anchor: 'middle', lineGap: 5, lines: [
          { text: 'Cost', size: 30, weight: 800 }, { text: 'of sales', size: 30, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
        ] }] },
        operating_loss: { blocks: [{ x: 1825, top: 875, anchor: 'middle', lineGap: 5, lines: [
          { text: 'Operating', size: 30, weight: 800 }, { text: 'loss', size: 30, weight: 800 },
          { text: '$value', size: 39, weight: 400 }, { text: '(25%) margin', size: 29, weight: 400, color: NOTE },
          { text: '(9pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1973, top: 539, anchor: 'middle', lineGap: 5, lines: [
          { text: 'Operating', size: 30, weight: 800 }, { text: 'expenses', size: 30, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 576, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Research &', size: 31, weight: 800 }, { text: 'Development', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 }, { text: '29% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        restructuring: { blocks: [{ x: RIGHT_LABEL_X, top: 839, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Restructuring', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '15% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        marketing_ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1064, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Marketing,', size: 31, weight: 800 }, { text: 'G&A', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 }, { text: '9% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        seg_hub: { blocks: [] },
      },
    },
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 7.9, notes: ['(3%) Y/Y', '26% operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 3.9, notes: ['+4% Y/Y', '16% operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'intel_products', col: 1, order: 0, type: 'source', label: 'Intel Products', value: 11.8, notes: ['(1%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'intel_foundry', col: 1, order: 1, type: 'source', label: 'Intel Foundry', value: 4.4, notes: ['+3% Y/Y', '(72%) operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other', col: 1, order: 2, type: 'source', label: 'Other', value: 1.1, notes: ['+20% Y/Y', '7% operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'seg_hub', col: 2, order: 0, type: 'hub', label: '', value: 17.3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'source', label: 'Revenue', value: 12.9, notes: ['+0% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 3, order: 1, type: 'cost', label: 'Eliminations', value: -4.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 3.5, notes: ['28% margin', '(8pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Cost of sales', value: 9.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 5, order: 0, type: 'cost', label: 'Operating loss', value: -3.2, notes: ['(25%) margin', '(9pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 6, order: 0, type: 'cost', label: 'Operating expenses', value: 6.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 0, type: 'cost', label: 'Research & Development', value: 3.7, notes: ['29% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 7, order: 1, type: 'cost', label: 'Restructuring', value: 1.9, notes: ['15% of revenue', '+7pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 7, order: 2, type: 'cost', label: 'Marketing, G&A', value: 1.1, notes: ['9% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'intel_products', value: 7.9, sourceWidth: 159, targetWidth: 159, y0: 552.5, y1: 625.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'intel_products', value: 3.9, sourceWidth: 79, targetWidth: 81, y0: 836.5, y1: 745.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'intel_products', target: 'seg_hub', value: 11.8, sourceWidth: 240, targetWidth: 240, y0: 666, y1: 736, sourceOrder: 0, targetOrder: 0 },
      { source: 'intel_foundry', target: 'seg_hub', value: 4.4, sourceWidth: 88, targetWidth: 88, y0: 1014, y1: 900, sourceOrder: 0, targetOrder: 1 },
      { source: 'other', target: 'seg_hub', value: 1.1, sourceWidth: 20, targetWidth: 24, y0: 1224, y1: 956, sourceOrder: 0, targetOrder: 2 },
      { source: 'seg_hub', target: 'revenue', value: 12.9, sourceWidth: 264, targetWidth: 261, y0: 748, y1: 816.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'seg_hub', target: 'eliminations', value: 4.4, sourceWidth: 88, targetWidth: 89, y0: 924, y1: 1095.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 3.5, sourceWidth: 72, targetWidth: 71, y0: 722, y1: 643.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 9.3, sourceWidth: 189, targetWidth: 189, y0: 852.5, y1: 937.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.5, sourceWidth: 71, targetWidth: 71, y0: 643.5, y1: 713.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 3.2, sourceWidth: 63, targetWidth: 63, y0: 818.5, y1: 781.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 3.7, sourceWidth: 74, targetWidth: 74, y0: 715, y1: 630, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 1.9, sourceWidth: 39, targetWidth: 36, y0: 771.5, y1: 889, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.1, sourceWidth: 22, targetWidth: 22, y0: 802, y1: 1109, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Intel · 2025 财年第二季度',
        meta: { title: '英特尔 2025 财年第二季度利润表', titleSize: 116, titleTextLength: 1720 },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 (3%)', '营业利润率 26%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 +4%', '营业利润率 16%'] },
          intel_products: { label: '英特尔产品', notes: ['同比 (1%)'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 +3%', '营业利润率 (72%)'] },
          other: { label: '其他', notes: ['同比 +20%', '营业利润率 7%'] },
          revenue: { label: '收入', notes: ['同比 +0%'] },
          eliminations: { label: '内部抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 28%', '同比 (8 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (25%)', '同比 (9 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 29%', '同比 (4 个百分点)'] },
          restructuring: { label: '重组', notes: ['占收入 15%', '同比 +7 个百分点'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 9%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
