/* Intel Q1 FY24 income statement ($B), measured from the 2667×1500 Source. */
(function () {
  'use strict';

  const TITLE = '#155077';
  const BLUE = '#127cc1';
  const BLUE_LABEL = '#006abb';
  const BLUE_LINK = '#8dbcdB';
  const CYAN = '#00c7fd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2463;

  const intelLogo = `
    <g fill="none" stroke="#0068b5" stroke-width="40" stroke-linecap="round" stroke-linejoin="round">
      <path d="M40 92 L40 150"/>
      <path d="M96 150 L96 112 C96 90 114 78 134 78 C154 78 172 90 172 112 L172 150"/>
      <path d="M198 92 L270 92"/>
      <path d="M234 56 L234 138 C234 149 242 151 254 149"/>
      <path d="M368 134 A40 40 0 1 1 372 98 L300 98"/>
      <path d="M430 56 L430 138 C430 149 438 151 450 149"/>
    </g>
    <rect x="18" y="18" width="44" height="44" rx="13" fill="${CYAN}"/>`;

  const mobileyeMark = `
    <g data-typography-role="brand" aria-label="Mobileye brand mark" fill="#1f2eb8">
      <path d="M77 1000 h17 v13 l12-13 h20 v42 h-17 v-22 l-15 17 h-17z"/>
      <path d="M130 1000 h17 v42 h-17z"/>
    </g>`;

  const line = (text, size, weight, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });

  const block = (x, top, lines, lineGap = 5) => ({
    blocks: [{ x, top, anchor: 'middle', lineGap, lines }],
  });

  const labels = (zh) => ({
    client_computing: {
      blocks: [
        {
          x: 433, top: 341, anchor: 'middle', lineGap: 5,
          lines: [line('$value', 39, 400), line(zh ? '同比 +31%' : '+31% Y/Y', 29, 400, NOTE)],
        },
        {
          x: 229, top: 476, anchor: 'middle', lineGap: 5,
          lines: [
            line(zh ? '客户端计算' : 'Client', 30, 800),
            ...(zh ? [] : [line('Computing', 30, 800)]),
            line(zh ? '营业利润率 35%' : '35% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    datacenter_ai: {
      blocks: [
        {
          x: 433, top: 607, anchor: 'middle', lineGap: 5,
          lines: [line('$value', 39, 400), line(zh ? '同比 +5%' : '+5% Y/Y', 29, 400, NOTE)],
        },
        {
          x: 224, top: 730, anchor: 'middle', lineGap: 5,
          lines: [
            line(zh ? '数据中心与 AI' : 'Datacenter & AI', 30, 800),
            line(zh ? '营业利润率 16%' : '16% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    network_edge: {
      blocks: [
        {
          x: 433, top: 783, anchor: 'middle', lineGap: 5,
          lines: [line('$value', 39, 400), line(zh ? '同比 (8%)' : '(8%) Y/Y', 29, 400, NOTE)],
        },
        {
          x: 215, top: 865, anchor: 'middle', lineGap: 5,
          lines: [
            line(zh ? '网络与边缘' : 'Network & Edge', 30, 800),
            line(zh ? '营业利润率 13%' : '13% operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    mobileye: {
      blocks: [
        {
          x: 433, top: 930, anchor: 'middle', lineGap: 5,
          lines: [line('$value', 39, 400), line(zh ? '同比 (48%)' : '(48%) Y/Y', 29, 400, NOTE)],
        },
        {
          x: 214, top: 1018, anchor: 'middle', lineGap: 5,
          lines: [
            line(zh ? 'Mobileye' : 'mobileye™', 31, 600, '#1f2eb8'),
            line(zh ? '营业利润率 (28%)' : '(28%) operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    intel_foundry: {
      blocks: [
        {
          x: 433, top: 1067, anchor: 'middle', lineGap: 5,
          lines: [line('$value', 39, 400), line(zh ? '同比 (10%)' : '(10%) Y/Y', 29, 400, NOTE)],
        },
        {
          x: 226, top: 1173, anchor: 'middle', lineGap: 5,
          lines: [
            line(zh ? '英特尔代工' : 'Intel Foundry', 30, 800),
            line(zh ? '营业利润率 (57%)' : '(57%) operating margin', 29, 400, NOTE),
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 433, top: 1261, anchor: 'middle', lineGap: 5,
          lines: [line('$value', 39, 400), line(zh ? '同比 (45%)' : '(45%) Y/Y', 29, 400, NOTE)],
        },
        {
          x: 251, top: 1336, anchor: 'middle', lineGap: 5,
          lines: [line(zh ? '其他' : 'Other', 30, 800)],
        },
      ],
    },
    revenue: block(1172, 599, [
      line(zh ? '收入' : 'Revenue', 30, 800),
      line('$value', 39, 400),
      line(zh ? '同比 +9%' : '+9% Y/Y', 29, 400, NOTE),
    ]),
    eliminations: block(1164, 1149, [
      line(zh ? '内部抵销' : 'Eliminations', 30, 800),
      line('$value', 39, 400),
    ]),
    gross_profit: block(1538, 473, [
      line(zh ? '毛利润' : 'Gross profit', 30, 800),
      line('$value', 39, 400),
      line(zh ? '利润率 41%' : '41% margin', 29, 400, NOTE),
      line(zh ? '同比 +7 个百分点' : '+7pp Y/Y', 29, 400, NOTE),
    ]),
    cost_of_sales: block(1558, 1080, [
      line(zh ? '销售' : 'Cost', 30, 800),
      line(zh ? '成本' : 'of sales', 30, 800),
      line('$value', 39, 400),
    ]),
    operating_expenses: block(1930, 591, [
      line(zh ? '营业' : 'Operating', 30, 800),
      line(zh ? '费用' : 'expenses', 30, 800),
      line('$value', 39, 400),
    ]),
    operating_loss: block(1767, 983, [
      line(zh ? '营业' : 'Operating', 30, 800),
      line(zh ? '亏损' : 'loss', 30, 800),
      line('$value', 39, 400),
      line(zh ? '利润率 (8%)' : '(8%) margin', 29, 400, NOTE),
      line(zh ? '同比 +4 个百分点' : '+4pp Y/Y', 29, 400, NOTE),
    ]),
    rnd: block(RIGHT_LABEL_X, 539, [
      line(zh ? '研究与' : 'Research &', 31, 800),
      line(zh ? '开发' : 'Development', 31, 800),
      line('$value', 31, 400),
      line(zh ? '占收入 34%' : '34% of revenue', 29, 400, NOTE),
      line(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 29, 400, NOTE),
    ], 8),
    marketing_ga: block(RIGHT_LABEL_X, 768, [
      line(zh ? '营销及' : 'Marketing,', 31, 800),
      line(zh ? '一般行政' : 'G&A', 31, 800),
      line('$value', 31, 400),
      line(zh ? '占收入 12%' : '12% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +1 个百分点' : '+1pp Y/Y', 29, 400, NOTE),
    ], 8),
    restructuring: block(RIGHT_LABEL_X, 982, [
      line(zh ? '重组' : 'Restructuring', 31, 800),
      line('$value', 31, 400),
      line(zh ? '占收入 3%' : '3% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +2 个百分点' : '+2pp Y/Y', 29, 400, NOTE),
    ], 8),
    seg_hub: { blocks: [] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q1-fy24',
    name: 'Intel · Q1 FY24',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q1 FY24 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intel-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1336,
      titleY: 200,
      titleSize: 112,
      titleWeight: 800,
      titleTextLength: 2001,
      logoWidth: 430,
      logoHeight: 165,
      logoY: 270,
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
    annotationsSvg: mobileyeMark,
    layout: {
      nodes: {
        client_computing: { x: 396, y: 438, width: 71, height: 124, color: '#003870' },
        datacenter_ai: { x: 396, y: 699, width: 71, height: 49, color: '#775bbe' },
        network_edge: { x: 396, y: 876, width: 71, height: 21, color: '#66a61e' },
        mobileye: { x: 396, y: 1024, width: 71, height: 7, color: '#1f2eb8' },
        intel_foundry: { x: 396, y: 1158, width: 71, height: 72, color: '#169bd7' },
        other: { x: 396, y: 1355, width: 71, height: 7 },
        seg_hub: { x: 770, y: 700, width: 70, height: 284 },
        revenue: { x: 1136, y: 743, width: 70, height: 210 },
        eliminations: { x: 1139, y: 1057, width: 70, height: 70 },
        gross_profit: { x: 1518, y: 643, width: 70, height: 85 },
        cost_of_sales: { x: 1523, y: 932, width: 70, height: 122 },
        operating_loss: { x: 1728, y: 931, width: 70, height: 15 },
        operating_expenses: { x: 1889, y: 733, width: 70, height: 103 },
        rnd: { x: 2264, y: 558, width: 71, height: 71 },
        marketing_ga: { x: 2264, y: 809, width: 71, height: 24 },
        restructuring: { x: 2264, y: 1018, width: 71, height: 4 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 7.5, notes: ['+31% Y/Y', '35% operating margin'], color: '#003870', labelColor: '#003870', linkTint: '#859db7' },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 3.0, valueText: '$3.0B', notes: ['+5% Y/Y', '16% operating margin'], color: '#775bbe', labelColor: '#775bbe', linkTint: '#bbaeDB' },
      { id: 'network_edge', col: 0, order: 2, type: 'source', label: 'Network & Edge', value: 1.4, notes: ['(8%) Y/Y', '13% operating margin'], color: '#66a61e', labelColor: '#66a61e', linkTint: '#b3cf93' },
      { id: 'mobileye', col: 0, order: 3, type: 'source', label: 'mobileye™', value: 0.2, notes: ['(48%) Y/Y', '(28%) operating margin'], color: '#1f2eb8', labelColor: '#1f2eb8', linkTint: '#8d9abd' },
      { id: 'intel_foundry', col: 0, order: 4, type: 'source', label: 'Intel Foundry', value: 4.4, notes: ['(10%) Y/Y', '(57%) operating margin'], color: '#169bd7', labelColor: '#169bd7', linkTint: '#8fcae5' },
      { id: 'other', col: 0, order: 5, type: 'source', label: 'Other', value: 0.5, notes: ['(45%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'seg_hub', col: 1, order: 0, type: 'hub', label: '', value: 17.0, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'source', label: 'Revenue', value: 12.7, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -4.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.2, notes: ['41% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 7.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 4, order: 0, type: 'cost', label: 'Operating loss', value: -1.1, notes: ['(8%) margin', '+4pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: 'Operating expenses', value: 6.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 0, type: 'cost', label: 'Research & Development', value: 4.4, notes: ['34% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 6, order: 1, type: 'cost', label: 'Marketing, G&A', value: 1.6, notes: ['12% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 6, order: 2, type: 'cost', label: 'Restructuring', value: 0.3, notes: ['3% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'seg_hub', value: 7.5, sourceWidth: 124, targetWidth: 125, targetOrder: 0 },
      { source: 'datacenter_ai', target: 'seg_hub', value: 3.0, sourceWidth: 49, targetWidth: 51, targetOrder: 1 },
      { source: 'network_edge', target: 'seg_hub', value: 1.4, sourceWidth: 21, targetWidth: 24, targetOrder: 2 },
      { source: 'mobileye', target: 'seg_hub', value: 0.2, sourceWidth: 7, targetWidth: 4, targetOrder: 3 },
      { source: 'intel_foundry', target: 'seg_hub', value: 4.4, sourceWidth: 72, targetWidth: 72, targetOrder: 4 },
      { source: 'other', target: 'seg_hub', value: 0.5, sourceWidth: 7, targetWidth: 8, targetOrder: 5 },
      { source: 'seg_hub', target: 'revenue', value: 12.7, sourceWidth: 212, targetWidth: 210, sourceOrder: 0 },
      { source: 'seg_hub', target: 'eliminations', value: 4.4, sourceWidth: 72, targetWidth: 70, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 5.2, sourceWidth: 85, targetWidth: 85, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 7.5, sourceWidth: 125, targetWidth: 122, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.2, sourceWidth: 85, targetWidth: 88, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 1.1, sourceWidth: 15, targetWidth: 15, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 4.4, sourceWidth: 71, targetWidth: 71, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.6, sourceWidth: 24, targetWidth: 24, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.3, sourceWidth: 8, targetWidth: 4, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Intel · 2024 财年第一季度',
        meta: {
          title: '英特尔 2024 财年第一季度利润表',
          titleSize: 116,
          titleTextLength: 1720,
        },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 +31%', '营业利润率 35%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 +5%', '营业利润率 16%'] },
          network_edge: { label: '网络与边缘', notes: ['同比 (8%)', '营业利润率 13%'] },
          mobileye: { label: 'Mobileye', notes: ['同比 (48%)', '营业利润率 (28%)'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 (10%)', '营业利润率 (57%)'] },
          other: { label: '其他', notes: ['同比 (45%)'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          eliminations: { label: '内部抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 41%', '同比 +7 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (8%)', '同比 +4 个百分点'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 34%', '同比 (1 个百分点)'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 12%', '同比 +1 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 3%', '同比 +2 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
