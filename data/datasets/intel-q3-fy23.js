/* Intel Q3 FY23 income statement ($B), measured from the 2667×1500 Source. */
(function () {
  'use strict';

  const TITLE = '#155077';
  const BLUE = '#127cc1';
  const BLUE_LINK = '#859db7';
  const CLIENT = '#003870';
  const CLIENT_LINK = '#859db7';
  const DATACENTER = '#775bbe';
  const DATACENTER_LINK = '#bbaedb';
  const NETWORK = '#66a61e';
  const NETWORK_LINK = '#b3cf93';
  const MOBILEYE = '#05267e';
  const MOBILEYE_LINK = '#8796bd';
  const FOUNDRY = '#169bd7';
  const FOUNDRY_LINK = '#8fcae5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const intelLogo = `
    <g fill="none" stroke="#0068b5" stroke-width="40" stroke-linecap="round" stroke-linejoin="round">
      <path d="M40 92 L40 150"/>
      <path d="M96 150 L96 112 C96 90 114 78 134 78 C154 78 172 90 172 112 L172 150"/>
      <path d="M198 92 L270 92"/>
      <path d="M234 56 L234 138 C234 149 242 151 254 149"/>
      <path d="M368 134 A40 40 0 1 1 372 98 L300 98"/>
      <path d="M430 56 L430 138 C430 149 438 151 450 149"/>
    </g>
    <rect x="18" y="18" width="44" height="44" rx="13" fill="#00c7fd"/>`;

  const annotations = () => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g class="sankey-interactive-annotation" data-node="mobileye">
        <g data-typography-role="brand" aria-label="Mobileye wordmark">
          <path d="M82 1055v-13h13v13H82zm0 0h13v29H82zm18-13h14v42h-14zm19 13h13v29h-13zm18 0h13v29h-13z" fill="${MOBILEYE}"/>
          <text x="157" y="1081" font-size="38" font-weight="500" fill="${MOBILEYE}">mobileye™</text>
        </g>
        <rect x="72" y="1038" width="290" height="54" fill="transparent" pointer-events="all"/>
      </g>
    </g>`;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 5) => ({
    blocks: [{ x, top, anchor, lineGap, lines }],
  });

  const labels = (zh) => ({
    client_computing: {
      blocks: [
        { x: 436, top: 325, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400), line(zh ? '同比 (3%)' : '(3%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 228, top: 451, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '客户端计算' : 'Client', 30, 800),
          ...(zh ? [] : [line('Computing', 30, 800)]),
          line(zh ? '营业利润率 26%' : '26% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    datacenter_ai: {
      blocks: [
        { x: 436, top: 618, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400), line(zh ? '同比 (10%)' : '(10%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 220, top: 725, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '数据中心与 AI' : 'Datacenter & AI', 30, 800),
          line(zh ? '营业利润率 (10%)' : '(10%) operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    network_edge: {
      blocks: [
        { x: 436, top: 827, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400), line(zh ? '同比 (32%)' : '(32%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 216, top: 909, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '网络与边缘' : 'Network & Edge', 30, 800),
          line(zh ? '营业利润率 1%' : '1% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    mobileye: {
      blocks: [
        { x: 436, top: 990, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400), line(zh ? '同比 +18%' : '+18% Y/Y', 29, 400, NOTE),
        ] },
        { x: 227, top: 1097, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '营业利润率 32%' : '32% operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    intel_foundry: {
      blocks: [
        { x: 436, top: 1136, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400), line(zh ? '同比 +299%' : '+299% Y/Y', 29, 400, NOTE),
        ] },
        { x: 216, top: 1210, anchor: 'middle', lineGap: 5, lines: [
          line(zh ? '英特尔代工' : 'Intel Foundry', 30, 800),
          line(zh ? '营业利润率 (28%)' : '(28%) operating margin', 29, 400, NOTE),
        ] },
      ],
    },
    other: {
      blocks: [
        { x: 436, top: 1260, anchor: 'middle', lineGap: 5, lines: [
          line('$value', 39, 400), line(zh ? '同比 (37%)' : '(37%) Y/Y', 29, 400, NOTE),
        ] },
        { x: 226, top: 1327, anchor: 'middle', lineGap: 5, lines: [line(zh ? '其他' : 'Other', 30, 800)] },
      ],
    },
    revenue: block(904, 520, [
      line(zh ? '收入' : 'Revenue', 30, 800), line('$value', 39, 400),
      line(zh ? '同比 (8%)' : '(8%) Y/Y', 29, 400, NOTE),
    ]),
    gross_profit: block(1373, 389, [
      line(zh ? '毛利润' : 'Gross profit', 30, 800), line('$value', 39, 400),
      line(zh ? '利润率 43%' : '43% margin', 29, 400, NOTE),
      line(zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', 29, 400, NOTE),
    ]),
    cost_of_sales: block(1373, 1109, [
      line(zh ? '销售成本' : 'Cost of sales', 30, 800), line('$value', 39, 400),
    ]),
    operating_loss: block(1634, 1042, [
      line(zh ? '营业亏损' : 'Operating loss', 30, 800), line('$value', 39, 400),
      line(zh ? '利润率 (0%)' : '(0%) margin', 29, 400, NOTE),
      line(zh ? '同比 +1 个百分点' : '+1pp Y/Y', 29, 400, NOTE),
    ]),
    operating_expenses: block(1840, 527, [
      line(zh ? '营业费用' : 'Operating', 30, 800),
      ...(zh ? [] : [line('expenses', 30, 800)]), line('$value', 39, 400),
    ]),
    rnd: block(2470, 496, [
      line(zh ? '研究与' : 'Research &', 31, 800),
      line(zh ? '开发' : 'Development', 31, 800), line('$value', 31, 400),
      line(zh ? '占收入 27%' : '27% of revenue', 29, 400, NOTE),
      line(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 29, 400, NOTE),
    ], 'middle', 8),
    marketing_ga: block(2470, 772, [
      line(zh ? '营销及一般行政' : 'Marketing,', 31, 800),
      ...(zh ? [] : [line('G&A', 31, 800)]), line('$value', 31, 400),
      line(zh ? '占收入 9%' : '9% of revenue', 29, 400, NOTE),
      line(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 29, 400, NOTE),
    ], 'middle', 8),
    restructuring: block(2470, 1057, [
      line(zh ? '重组' : 'Restructuring', 31, 800), line('$value', 31, 400),
      line(zh ? '占收入 6%' : '6% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +1 个百分点' : '+1pp Y/Y', 29, 400, NOTE),
    ], 'middle', 8),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q3-fy23',
    name: 'Intel · Q3 FY23',
    company: 'Intel',
    meta: {
      company: 'Intel', title: 'Intel Q3 FY23 Income Statement', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/intel-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1335, titleY: 200, titleSize: 112, titleWeight: 800, titleTextLength: 2000,
      logoWidth: 430, logoHeight: 165, logoY: 282, logoViewBox: '0 0 490 175', logoSvg: intelLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE,
      noteColor: NOTE, interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 30, value: 39, note: 29, lineGap: 5 },
    },
    layout: {
      nodes: {
        client_computing: { x: 401, y: 414, width: 71, height: 169 },
        datacenter_ai: { x: 401, y: 712, width: 71, height: 80 },
        network_edge: { x: 401, y: 912, width: 71, height: 30 },
        mobileye: { x: 401, y: 1080, width: 71, height: 10 },
        intel_foundry: { x: 401, y: 1221, width: 71, height: 6 },
        other: { x: 401, y: 1347, width: 71, height: 3, color: BLUE },
        revenue: { x: 868, y: 665, width: 70, height: 306 },
        gross_profit: { x: 1337, y: 573, width: 72, height: 127 },
        cost_of_sales: { x: 1337, y: 913, width: 72, height: 175 },
        operating_loss: { x: 1598, y: 1015, width: 71, height: 3, color: '#ce1111' },
        operating_expenses: { x: 1795, y: 675, width: 70, height: 128 },
        rnd: { x: 2269, y: 481, width: 71, height: 83 },
        marketing_ga: { x: 2269, y: 809, width: 71, height: 28 },
        restructuring: { x: 2269, y: 1096, width: 71, height: 15 },
      },
      labels: labels(false),
    },
    annotationsSvg: annotations(),
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 7.9, valueText: '$7.9B', notes: ['(3%) Y/Y', '26% operating margin'], color: CLIENT, labelColor: CLIENT, linkTint: CLIENT_LINK },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 3.8, valueText: '$3.8B', notes: ['(10%) Y/Y', '(10%) operating margin'], color: DATACENTER, labelColor: DATACENTER, linkTint: DATACENTER_LINK },
      { id: 'network_edge', col: 0, order: 2, type: 'source', label: 'Network & Edge', value: 1.5, valueText: '$1.5B', notes: ['(32%) Y/Y', '1% operating margin'], color: NETWORK, labelColor: NETWORK, linkTint: NETWORK_LINK },
      { id: 'mobileye', col: 0, order: 3, type: 'source', label: 'Mobileye', value: 0.5, valueText: '$0.5B', notes: ['+18% Y/Y', '32% operating margin'], color: MOBILEYE, labelColor: MOBILEYE, linkTint: MOBILEYE_LINK },
      { id: 'intel_foundry', col: 0, order: 4, type: 'source', label: 'Intel Foundry', value: 0.3, valueText: '$0.3B', notes: ['+299% Y/Y', '(28%) operating margin'], color: FOUNDRY, labelColor: FOUNDRY, linkTint: FOUNDRY_LINK },
      { id: 'other', col: 0, order: 5, type: 'source', label: 'Other', value: 0.2, valueText: '$0.2B', notes: ['(37%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 14.2, valueText: '$14.2B', notes: ['(8%) Y/Y'], color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.0, valueText: '$6.0B', notes: ['43% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 8.1, valueText: '($8.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: 'Operating loss', value: -0.008, valueText: '($8M)', notes: ['(0%) margin', '+1pp Y/Y'], color: '#ce1111', labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: 'Operating expenses', value: 6.0, valueText: '($6.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'Research & Development', value: 3.9, valueText: '($3.9B)', notes: ['27% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 5, order: 1, type: 'cost', label: 'Marketing, G&A', value: 1.3, valueText: '($1.3B)', notes: ['9% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 2, type: 'cost', label: 'Restructuring', value: 0.8, valueText: '($0.8B)', notes: ['6% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'revenue', value: 7.9, sourceWidth: 169, targetWidth: 169, y0: 498.5, y1: 749.5, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'revenue', value: 3.8, sourceWidth: 80, targetWidth: 82, y0: 752, y1: 876, targetOrder: 1 },
      { source: 'network_edge', target: 'revenue', value: 1.5, sourceWidth: 30, targetWidth: 31, y0: 927, y1: 933.5, targetOrder: 2 },
      { source: 'mobileye', target: 'revenue', value: 0.5, sourceWidth: 10, targetWidth: 10, y0: 1085, y1: 954, targetOrder: 3 },
      { source: 'intel_foundry', target: 'revenue', value: 0.3, sourceWidth: 6, targetWidth: 6, y0: 1224, y1: 962, targetOrder: 4 },
      { source: 'other', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 6, y0: 1348.5, y1: 968, targetOrder: 5 },
      { source: 'revenue', target: 'gross_profit', value: 6.0, sourceWidth: 129, targetWidth: 127, y0: 729.5, y1: 636.5, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 8.1, sourceWidth: 177, targetWidth: 175, y0: 882.5, y1: 1000.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.0, sourceWidth: 127, targetWidth: 127, y0: 636.5, y1: 738.5, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.008, sourceWidth: 3, targetWidth: 1, y0: 1016.5, y1: 802.5, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 3.9, sourceWidth: 83, targetWidth: 83, y0: 716.5, y1: 522.5, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.3, sourceWidth: 28, targetWidth: 28, y0: 772, y1: 823, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.8, sourceWidth: 17, targetWidth: 15, y0: 794.5, y1: 1103.5, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['mobileye™'],
      zh: {
        name: 'Intel · 2023 财年第三季度',
        meta: { title: '英特尔 2023 财年第三季度利润表', titleSize: 116, titleTextLength: 1720 },
        annotationsSvg: annotations(),
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 (3%)', '营业利润率 26%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 (10%)', '营业利润率 (10%)'] },
          network_edge: { label: '网络与边缘', notes: ['同比 (32%)', '营业利润率 1%'] },
          mobileye: { label: 'Mobileye', notes: ['同比 +18%', '营业利润率 32%'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 +299%', '营业利润率 (28%)'] },
          other: { label: '其他', notes: ['同比 (37%)'] },
          revenue: { label: '收入', notes: ['同比 (8%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 43%', '同比 (0 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (0%)', '同比 +1 个百分点'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 27%', '同比 (1 个百分点)'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 9%', '同比 (2 个百分点)'] },
          restructuring: { label: '重组', notes: ['占收入 6%', '同比 +1 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
