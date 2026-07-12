/* HealthEquity — Q1 FY27 income statement ($M), measured against the source. */
(function () {
  const PURPLE = '#5b3192';
  const PURPLE_LINK = '#aa9ac4';
  const GREEN = '#2ca32a';
  const GREEN_LABEL = '#008f4b';
  const GREEN_LINK = '#9ccd9c';
  const RED = '#df0000';
  const RED_LABEL = '#9b1e00';
  const RED_LINK = '#e08486';
  const TITLE = '#155077';
  const NOTE = '#6a6a6a';
  const RIGHT_X = 2375;

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1195" width="${width}" height="147" rx="32" fill="${PURPLE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1250 + index * 38}" text-anchor="middle"
          font-size="${index === 0 ? 30 : 29}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    <g>
      ${kpiCard(60, 211, ['HSAs', '10.6M', '+8% Y/Y'])}
      ${kpiCard(283, 275, ['HSA Assets', '$37.1B', '+19% Y/Y'])}
      ${kpiCard(571, 332, ['Total Accounts', '17.8M', '+4% Y/Y'])}
    </g>`;

  const annotationsZh = `
    <g>
      ${kpiCard(60, 211, ['HSA 账户', '10.6M', '同比 +8%'])}
      ${kpiCard(283, 275, ['HSA 资产', '$37.1B', '同比 +19%'])}
      ${kpiCard(571, 332, ['总账户数', '17.8M', '同比 +4%'])}
    </g>`;

  const labelsEn = {
    service: {
      blocks: [
        { x: 414, top: 400, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: PURPLE },
          { text: '+3% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 328, top: 534, anchor: 'end', lines: [{ text: 'Service', size: 40, weight: 800, color: PURPLE }] },
      ],
    },
    custodial: {
      blocks: [
        { x: 414, top: 667, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: PURPLE },
          { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 328, top: 818, anchor: 'end', lines: [{ text: 'Custodial', size: 40, weight: 800, color: PURPLE }] },
      ],
    },
    interchange: {
      blocks: [
        { x: 414, top: 985, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: PURPLE },
          { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 328, top: 1069, anchor: 'end', lines: [{ text: 'Interchange', size: 40, weight: 800, color: PURPLE }] },
      ],
    },
    revenue: {
      blocks: [{ x: 882, top: 478, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Revenue', size: 40, weight: 800, color: PURPLE },
        { text: '$value', size: 39, weight: 400, color: PURPLE },
        { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1349, top: 305, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Gross profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '72% margin', size: 29, weight: 400, color: NOTE },
        { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1349, top: 1166, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Cost of', size: 34, weight: 800, color: RED_LABEL },
        { text: 'revenue', size: 34, weight: 800, color: RED_LABEL },
        { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1817, top: 229, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Operating profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '29% margin', size: 29, weight: 400, color: NOTE },
        { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1817, top: 927, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Operating', size: 38, weight: 800, color: RED_LABEL },
        { text: 'expenses', size: 38, weight: 800, color: RED_LABEL },
        { text: '$value', size: 36, weight: 400, color: RED_LABEL },
      ] }],
    },
    net_profit: {
      blocks: [{ x: RIGHT_X, top: 269, anchor: 'start', lineGap: 8, lines: [
        { text: 'Net profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '20% margin', size: 29, weight: 400, color: NOTE },
        { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    tax: {
      blocks: [{ x: RIGHT_X, top: 560, anchor: 'start', lineGap: 8, lines: [
        { text: 'Tax', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    interest_other: {
      blocks: [{ x: RIGHT_X, top: 684, anchor: 'start', lineGap: 8, lines: [
        { text: 'Interest & Other', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    technology_development: {
      blocks: [{ x: RIGHT_X, top: 805, anchor: 'start', lineGap: 8, lines: [
        { text: 'Technology &', size: 32, weight: 800, color: RED_LABEL },
        { text: 'development', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    general_admin: {
      blocks: [{ x: RIGHT_X, top: 966, anchor: 'start', lineGap: 8, lines: [
        { text: 'General & admin', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    amortization: {
      blocks: [{ x: RIGHT_X, top: 1105, anchor: 'start', lineGap: 8, lines: [
        { text: 'Amortization', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    sales_marketing: {
      blocks: [{ x: RIGHT_X, top: 1225, anchor: 'start', lineGap: 8, lines: [
        { text: 'Sales & marketing', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    merger_costs: {
      blocks: [{ x: RIGHT_X, top: 1320, anchor: 'start', lineGap: 8, lines: [
        { text: 'Merger costs', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, texts) => {
    labelsZh[id].blocks.forEach((block) => {
      block.lines.forEach((line, index) => {
        if (texts[index] != null) line.text = texts[index];
      });
    });
  };
  setLines('service', ['$value', '同比 +3%', '服务']);
  setLines('custodial', ['$value', '同比 +11%', '托管']);
  setLines('interchange', ['$value', '同比 +5%', '交换费']);
  labelsZh.service.blocks[1].lines[0].text = '服务';
  labelsZh.custodial.blocks[1].lines[0].text = '托管';
  labelsZh.interchange.blocks[1].lines[0].text = '交换费';
  setLines('revenue', ['收入', '$value', '同比 +7%']);
  setLines('gross_profit', ['毛利润', '$value', '利润率 72%', '同比 +4 个百分点']);
  setLines('cost_of_revenue', ['收入', '成本', '$value']);
  setLines('operating_profit', ['营业利润', '$value', '利润率 29%', '同比 +4 个百分点']);
  setLines('operating_expenses', ['运营', '费用', '$value']);
  setLines('net_profit', ['净利润', '$value', '利润率 20%', '同比 +3 个百分点']);
  setLines('tax', ['税费', '$value']);
  setLines('interest_other', ['利息及其他', '$value']);
  setLines('technology_development', ['技术与', '开发', '$value']);
  labelsZh.technology_development.blocks[0].lines[0].size = 28;
  labelsZh.technology_development.blocks[0].lines[1].size = 28;
  setLines('general_admin', ['一般及行政', '$value']);
  setLines('amortization', ['摊销', '$value']);
  setLines('sales_marketing', ['销售与市场', '$value']);
  setLines('merger_costs', ['并购成本', '$value']);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'health-equity-q1-fy27',
    name: 'HealthEquity · Q1 FY27',
    company: 'HealthEquity',
    meta: {
      company: 'HealthEquity',
      title: 'HealthEquity Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/health-equity-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 800,
      titleTextLength: 2500,
      periodX: 1817,
      periodY: 1275,
      periodNoteY: 1315,
      logoWidth: 590,
      logoHeight: 115,
      logoY: 316,
      logoViewBox: '0 0 590 115',
      logoSvg: `
        <text x="295" y="86" text-anchor="middle" font-family="Arial,sans-serif"
          font-size="88" font-weight="500" letter-spacing="-5" textLength="556"
          lengthAdjust="spacingAndGlyphs" fill="${PURPLE}">HealthEquity</text>
        <text x="579" y="47" text-anchor="middle" font-family="Arial,sans-serif"
          font-size="15" font-weight="700" fill="${PURPLE}">&#174;</text>
      `,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1.11,
      nodes: {
        service: { x: 378, y: 503, width: 73, height: 136 },
        custodial: { x: 378, y: 769, width: 73, height: 194 },
        interchange: { x: 378, y: 1085, width: 73, height: 63 },
        revenue: { x: 845, y: 632, width: 73, height: 393 },
        gross_profit: { x: 1313, y: 493, width: 72, height: 284 },
        cost_of_revenue: { x: 1313, y: 1031, width: 72, height: 109 },
        operating_profit: { x: 1780, y: 413, width: 73, height: 114 },
        operating_expenses: { x: 1780, y: 739, width: 73, height: 170 },
        net_profit: { x: 2248, y: 295, width: 73, height: 76 },
        tax: { x: 2248, y: 585, width: 73, height: 26 },
        interest_other: { x: 2248, y: 710, width: 73, height: 12 },
        technology_development: { x: 2248, y: 819, width: 73, height: 75 },
        general_admin: { x: 2248, y: 986, width: 73, height: 34 },
        amortization: { x: 2248, y: 1123, width: 73, height: 30 },
        sales_marketing: { x: 2248, y: 1243, width: 73, height: 30 },
        merger_costs: { x: 2248, y: 1352, width: 73, height: 1 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'service', col: 0, order: 0, type: 'source', label: 'Service', value: 123, valueText: '$123M', notes: ['+3% Y/Y', '36% gross margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'custodial', col: 0, order: 1, type: 'source', label: 'Custodial', value: 174, valueText: '$174M', notes: ['+11% Y/Y', '93% gross margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'interchange', col: 0, order: 2, type: 'source', label: 'Interchange', value: 57, valueText: '$57M', notes: ['+5% Y/Y', '85% gross margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 355, valueText: '$355M', notes: ['+7% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 256, valueText: '$256M', notes: ['72% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 98, valueText: '($98M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 103, valueText: '$103M', notes: ['29% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 153, valueText: '($153M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 69, valueText: '$69M', notes: ['20% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 23, valueText: '($23M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest_other', col: 4, order: 2, type: 'cost', label: 'Interest & Other', value: 11, valueText: '($11M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology_development', col: 4, order: 3, type: 'cost', label: ['Technology &', 'development'], value: 68, valueText: '($68M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 4, order: 4, type: 'cost', label: 'General & admin', value: 31, valueText: '($31M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 27, valueText: '($27M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 6, type: 'cost', label: 'Sales & marketing', value: 27, valueText: '($27M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'merger_costs', col: 4, order: 7, type: 'cost', label: 'Merger costs', value: 1, valueText: '($1M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'service', target: 'revenue', value: 123, width: 136, sourceOrder: 0, targetOrder: 0 },
      { source: 'custodial', target: 'revenue', value: 174, width: 194, sourceOrder: 0, targetOrder: 1 },
      { source: 'interchange', target: 'revenue', value: 57, width: 63, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 256, width: 284, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 98, width: 109, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 103, width: 114, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 153, width: 170, targetWidth: 168, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 69, width: 76, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 23, width: 26, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest_other', value: 11, width: 12, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_development', value: 68, width: 75, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_admin', value: 31, width: 34, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 27, width: 30, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_marketing', value: 27, width: 30, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'merger_costs', value: 1, width: 1, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'HealthEquity · 2027 财年第一季度',
        meta: {
          title: 'HealthEquity 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 2050,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          service: { label: '服务', notes: ['同比 +3%', '毛利率 36%'] },
          custodial: { label: '托管', notes: ['同比 +11%', '毛利率 93%'] },
          interchange: { label: '交换费', notes: ['同比 +5%', '毛利率 85%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 29%', '同比 +4 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 20%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          interest_other: { label: '利息及其他' },
          technology_development: { label: '技术与开发' },
          general_admin: { label: '一般及行政' },
          amortization: { label: '摊销' },
          sales_marketing: { label: '销售与市场' },
          merger_costs: { label: '并购成本' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
