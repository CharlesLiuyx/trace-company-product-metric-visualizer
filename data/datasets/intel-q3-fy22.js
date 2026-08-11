/* Intel Q3 FY22 income statement ($B), measured from the 2667×1500 Source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#127cc1';
  const CLIENT = '#003870';
  const CLIENT_LINK = '#859db7';
  const DCAI = '#775bbe';
  const DCAI_LINK = '#bbaedb';
  const NETWORK = '#66a61e';
  const NETWORK_LINK = '#b3cf93';
  const MOBILEYE = '#05267e';
  const MOBILEYE_LINK = '#8796bd';
  const FOUNDRY = '#169bd7';
  const FOUNDRY_LINK = '#63badf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const line = (text, size, weight = 400, color) => ({
    text, size, weight, ...(color ? { color } : {}),
  });
  const block = (x, top, lines, anchor = 'middle', lineGap = 5) => ({
    x, top, anchor, lines, lineGap,
  });

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

  const mobileyeWordmark = `
    <g data-typography-role="brand" fill="#1f2eb8">
      <path d="M79 1000h20v13l16-13h21v39h-20v-22l-17 14v8H79z"/>
      <text x="145" y="1038" font-family="Arial,sans-serif" font-size="55" font-weight="400">mobileye</text>
      <text x="359" y="1007" font-family="Arial,sans-serif" font-size="14" font-weight="700">™</text>
    </g>`;

  const operatingLossAnnotation = (zh) => `
    <g class="sankey-interactive-annotation" data-node="operating_loss"
      data-link-numerator="operating_loss" data-link-denominator="operating_expenses"
      data-link-anchor-x="1780" data-link-anchor-y="970">
      <path d="M1721 970H1791" fill="none" stroke="${RED}" stroke-width="2"/>
      <text x="1744" y="1017" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif"
        font-size="31" font-weight="800" fill="${RED_LABEL}">${zh ? '营业亏损' : 'Operating loss'}</text>
      <text x="1744" y="1061" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif"
        font-size="31" font-weight="400" fill="${RED_LABEL}">($0.2B)</text>
      <text x="1744" y="1105" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif"
        font-size="29" font-weight="400" fill="${NOTE}">${zh ? '利润率 (1%)' : '(1%) margin'}</text>
      <text x="1744" y="1145" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif"
        font-size="29" font-weight="400" fill="${NOTE}">${zh ? '同比 (28 个百分点)' : '(28pp) Y/Y'}</text>
    </g>`;

  const annotations = (zh) => `<g>${mobileyeWordmark}${operatingLossAnnotation(zh)}</g>`;

  const labels = (zh) => ({
    client_computing: { blocks: [
      block(442, 280, [line('$value', 39, 400, CLIENT), line(zh ? '同比 (17%)' : '(17%) Y/Y', 29, 400, NOTE)]),
      block(231, 403, [line(zh ? '客户端' : 'Client', 30, 800, CLIENT), line(zh ? '计算' : 'Computing', 30, 800, CLIENT), line(zh ? '营业利润率 20%' : '20% operating margin', 29, 400, NOTE)]),
    ] },
    datacenter_ai: { blocks: [
      block(442, 586, [line('$value', 39, 400, DCAI), line(zh ? '同比 (27%)' : '(27%) Y/Y', 29, 400, NOTE)]),
      block(231, 653, [line(zh ? '数据中心' : 'Datacenter', 30, 800, DCAI), line(zh ? '与 AI' : '& AI', 30, 800, DCAI), line(zh ? '营业利润率 0%' : '0% operating margin', 29, 400, NOTE)]),
    ] },
    network_edge: { blocks: [
      block(417, 792, [line('$value', 39, 400, NETWORK), line(zh ? '同比 +14%' : '+14% Y/Y', 29, 400, NOTE)]),
      block(231, 861, [line(zh ? '网络与边缘' : 'Network & Edge', 30, 800, NETWORK), line(zh ? '营业利润率 3%' : '3% operating margin', 29, 400, NOTE)]),
    ] },
    mobileye: { blocks: [
      block(442, 950, [line('$value', 39, 400, CLIENT), line(zh ? '同比 +38%' : '+38% Y/Y', 29, 400, NOTE)]),
      block(218, 1060, [line(zh ? '营业利润率 32%' : '32% operating margin', 29, 400, NOTE)]),
    ] },
    intel_foundry: { blocks: [
      block(442, 1102, [line('$value', 39, 400, FOUNDRY), line(zh ? '同比 (2%)' : '(2%) Y/Y', 29, 400, NOTE)]),
      block(224, 1166, [line(zh ? '英特尔代工' : 'Intel Foundry', 30, 800, FOUNDRY), line(zh ? '营业利润率 (60%)' : '(60%) operating margin', 29, 400, NOTE)]),
    ] },
    other: { blocks: [
      block(442, 1240, [line('$value', 39, 400, BLUE), line(zh ? '同比 (90%)' : '(90%) Y/Y', 29, 400, NOTE)]),
      block(235, 1316, [line(zh ? '其他' : 'Other', 30, 800, BLUE)]),
    ] },
    revenue: { blocks: [block(1004, 544, [
      line(zh ? '收入' : 'Revenue', 40, 800, BLUE), line('$value', 39, 400, BLUE),
      line(zh ? '同比 (20%)' : '(20%) Y/Y', 29, 400, NOTE),
    ])] },
    gross_profit: { blocks: [block(1467, 361, [
      line(zh ? '毛利润' : 'Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line(zh ? '利润率 43%' : '43% margin', 29, 400, NOTE), line(zh ? '同比 (12 个百分点)' : '(12pp) Y/Y', 29, 400, NOTE),
    ])] },
    cost_of_sales: { blocks: [block(1467, 1181, [
      line(zh ? '销售成本' : 'Cost of sales', 35, 800, RED_LABEL), line('$value', 35, 400, RED_LABEL),
    ])] },
    operating_expenses: { blocks: [block(1932, 545, [
      line(zh ? '营业' : 'Operating', 35, 800, RED_LABEL),
      line(zh ? '费用' : 'expenses', 35, 800, RED_LABEL),
      line('$value', 35, 400, RED_LABEL),
    ])] },
    operating_loss: { blocks: [] },
    rnd: { blocks: [block(2468, 783, [
      line(zh ? '研究与' : 'Research &', 31, 800, RED_LABEL),
      line(zh ? '开发' : 'Development', 31, 800, RED_LABEL),
      line('$value', 31, 400, RED_LABEL), line(zh ? '占收入 28%' : '28% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +8 个百分点' : '+8pp Y/Y', 29, 400, NOTE),
    ], 'middle', 8)] },
    marketing_ga: { blocks: [block(2468, 1016, [
      line(zh ? '营销及' : 'Marketing,', 31, 800, RED_LABEL), line(zh ? '一般行政' : 'G&A', 31, 800, RED_LABEL),
      line('$value', 31, 400, RED_LABEL), line(zh ? '占收入 11%' : '11% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +3 个百分点' : '+3pp Y/Y', 29, 400, NOTE),
    ], 'middle', 8)] },
    restructuring: { blocks: [block(2452, 1253, [
      line(zh ? '重组' : 'Restructuring', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL),
      line(zh ? '占收入 4%' : '4% of revenue', 29, 400, NOTE), line(zh ? '同比 +4 个百分点' : '+4pp Y/Y', 29, 400, NOTE),
    ], 'middle', 8)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intel-q3-fy22',
    name: 'Intel · Q3 FY22',
    company: 'Intel',
    meta: {
      company: 'Intel',
      title: 'Intel Q3 FY22 Income Statement',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/intel-q3-fy22.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 200, titleSize: 112, titleWeight: 800, titleTextLength: 2010,
      logoWidth: 430, logoHeight: 165, logoY: 282, logoViewBox: '0 0 490 175', logoSvg: intelLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: CLIENT_LINK, hub: CLIENT_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 30, value: 39, note: 29, lineGap: 5 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 23.86,
      routes: { operating_loss: { x: 1721, y: 969, width: 70, height: 2, type: 'cost' } },
      nodes: {
        client_computing: { x: 407, y: 364, width: 71, height: 192 },
        datacenter_ai: { x: 407, y: 670, width: 71, height: 97 },
        network_edge: { x: 407, y: 876, width: 71, height: 51 },
        mobileye: { x: 407, y: 1047, width: 71, height: 9 },
        intel_foundry: { x: 407, y: 1193, width: 71, height: 3 },
        other: { x: 407, y: 1333, width: 71, height: 1 },
        revenue: { x: 969, y: 680, width: 70, height: 365 },
        gross_profit: { x: 1431, y: 538, width: 72, height: 154 },
        cost_of_sales: { x: 1431, y: 955, width: 72, height: 209 },
        operating_expenses: { x: 1930, y: 683, width: 71, height: 159 },
        rnd: { x: 2261, y: 790, width: 71, height: 101 },
        marketing_ga: { x: 2261, y: 1047, width: 71, height: 40 },
        restructuring: { x: 2261, y: 1257, width: 71, height: 14 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'operating_loss', representation: 'flow', label: 'Operating loss', value: -0.2, valueText: '($0.2B)', type: 'cost', labelColor: RED_LABEL },
    ],
    nodes: [
      { id: 'client_computing', col: 0, order: 0, type: 'source', label: 'Client Computing', value: 8.1, notes: ['(17%) Y/Y', '20% operating margin'], color: CLIENT, labelColor: CLIENT, linkTint: CLIENT_LINK },
      { id: 'datacenter_ai', col: 0, order: 1, type: 'source', label: 'Datacenter & AI', value: 4.1, notes: ['(27%) Y/Y', '0% operating margin'], color: DCAI, labelColor: DCAI, linkTint: DCAI_LINK },
      { id: 'network_edge', col: 0, order: 2, type: 'source', label: 'Network & Edge', value: 2.3, notes: ['+14% Y/Y', '3% operating margin'], color: NETWORK, labelColor: NETWORK, linkTint: NETWORK_LINK },
      { id: 'mobileye', col: 0, order: 3, type: 'source', label: 'Mobileye', value: 0.5, notes: ['+38% Y/Y', '32% operating margin'], color: MOBILEYE, labelColor: MOBILEYE, linkTint: MOBILEYE_LINK },
      { id: 'intel_foundry', col: 0, order: 4, type: 'source', label: 'Intel Foundry', value: 0.2, notes: ['(2%) Y/Y', '(60%) operating margin'], color: FOUNDRY, labelColor: FOUNDRY, linkTint: FOUNDRY_LINK },
      { id: 'other', col: 0, order: 5, type: 'source', label: 'Other', value: 0.1, notes: ['(90%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: FOUNDRY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.3, notes: ['(20%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: CLIENT_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.5, notes: ['43% margin', '(12pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 8.8, valueText: '($8.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 3, order: 0, type: 'cost', label: 'Operating expenses', value: 6.7, valueText: '($6.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 0, type: 'cost', label: 'Research & Development', value: 4.3, valueText: '($4.3B)', notes: ['28% of revenue', '+8pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_ga', col: 4, order: 1, type: 'cost', label: 'Marketing, G&A', value: 1.7, valueText: '($1.7B)', notes: ['11% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 4, order: 2, type: 'cost', label: 'Restructuring', value: 0.7, valueText: '($0.7B)', notes: ['4% of revenue', '+4pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'client_computing', target: 'revenue', value: 8.1, sourceWidth: 192, targetWidth: 193, targetOrder: 0, linkTint: CLIENT_LINK },
      { source: 'datacenter_ai', target: 'revenue', value: 4.1, sourceWidth: 97, targetWidth: 98, targetOrder: 1, linkTint: DCAI_LINK },
      { source: 'network_edge', target: 'revenue', value: 2.3, sourceWidth: 51, targetWidth: 55, targetOrder: 2, linkTint: NETWORK_LINK },
      { source: 'mobileye', target: 'revenue', value: 0.5, sourceWidth: 9, targetWidth: 12, targetOrder: 3, linkTint: MOBILEYE_LINK },
      { source: 'intel_foundry', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 5, targetOrder: 4, linkTint: FOUNDRY_LINK },
      { source: 'other', target: 'revenue', value: 0.1, sourceWidth: 1, targetWidth: 2, targetOrder: 5, linkTint: FOUNDRY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 6.5, sourceWidth: 155, targetWidth: 154, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 8.8, sourceWidth: 210, targetWidth: 209, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.5, sourceWidth: 154, targetWidth: 159, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'operating_loss', target: 'operating_expenses', value: 0.2, sourceWidth: 2, targetWidth: 5, y0: 970, y1: 839.5, targetOrder: 1, linkTint: RED_LINK, curve: { c1x: 1850, c1y: 970, c2x: 1865, c2y: 839.5 } },
      { source: 'operating_expenses', target: 'rnd', value: 4.3, sourceWidth: 102, targetWidth: 101, sourceOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing_ga', value: 1.7, sourceWidth: 40, targetWidth: 40, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 0.7, sourceWidth: 17, targetWidth: 14, sourceOrder: 2, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['mobileye'],
      zh: {
        name: 'Intel · 2022 财年第三季度',
        meta: { title: '英特尔 2022 财年第三季度利润表', titleTextLength: 1720 },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { operating_loss: { label: '营业亏损' } },
        nodes: {
          client_computing: { label: '客户端计算', notes: ['同比 (17%)', '营业利润率 20%'] },
          datacenter_ai: { label: '数据中心与 AI', notes: ['同比 (27%)', '营业利润率 0%'] },
          network_edge: { label: '网络与边缘', notes: ['同比 +14%', '营业利润率 3%'] },
          mobileye: { label: 'Mobileye', notes: ['同比 +38%', '营业利润率 32%'] },
          intel_foundry: { label: '英特尔代工', notes: ['同比 (2%)', '营业利润率 (60%)'] },
          other: { label: '其他', notes: ['同比 (90%)'] },
          revenue: { label: '收入', notes: ['同比 (20%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 43%', '同比 (12 个百分点)'] },
          cost_of_sales: { label: '销售成本' }, operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 28%', '同比 +8 个百分点'] },
          marketing_ga: { label: '营销及一般行政', notes: ['占收入 11%', '同比 +3 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 4%', '同比 +4 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
