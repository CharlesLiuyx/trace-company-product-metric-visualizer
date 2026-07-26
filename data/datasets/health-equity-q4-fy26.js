/* HealthEquity — Q4 FY26 income statement ($M), measured against the source. */
(function () {
  const PURPLE = '#5b2e85';
  const PURPLE_LINK = '#ae9ac1';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const RIGHT_X = 2375;

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1195" width="${width}" height="148" rx="32" fill="${PURPLE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1250 + index * 38}" text-anchor="middle"
          font-size="${index === 0 ? 30 : 29}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    <g>
      ${kpiCard(60, 211, ['HSAs', '10.6M', '+7% Y/Y'])}
      ${kpiCard(283, 275, ['HSA Assets', '$36.5B', '+14% Y/Y'])}
      ${kpiCard(571, 332, ['Total Accounts', '17.8M', '+4% Y/Y'])}
    </g>`;

  const annotationsZh = `
    <g>
      ${kpiCard(60, 211, ['HSA 账户', '10.6M', '同比 +7%'])}
      ${kpiCard(283, 275, ['HSA 资产', '$36.5B', '同比 +14%'])}
      ${kpiCard(571, 332, ['总账户数', '17.8M', '同比 +4%'])}
    </g>`;

  const labelsEn = {
    service: {
      blocks: [
        { x: 414, top: 393, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: PURPLE },
          { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 329, top: 522, anchor: 'end', lineGap: 7, lines: [
          { text: 'Service', size: 40, weight: 800, color: PURPLE },
          { text: '36% gross margin', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    custodial: {
      blocks: [
        { x: 414, top: 683, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: PURPLE },
          { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 325, top: 840, anchor: 'end', lineGap: 7, lines: [
          { text: 'Custodial', size: 40, weight: 800, color: PURPLE },
          { text: '93% gross margin', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    interchange: {
      blocks: [
        { x: 421, top: 1019, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: PURPLE },
          { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 338, top: 1083, anchor: 'end', lineGap: 7, lines: [
          { text: 'Interchange', size: 40, weight: 800, color: PURPLE },
          { text: '85% gross margin', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    revenue: {
      blocks: [{ x: 882, top: 493, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Revenue', size: 40, weight: 800, color: PURPLE },
        { text: '$value', size: 39, weight: 400, color: PURPLE },
        { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1355, top: 347, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Gross profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '68% margin', size: 29, weight: 400, color: NOTE },
        { text: '+8pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1349, top: 1134, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Cost of', size: 34, weight: 800, color: RED_LABEL },
        { text: 'revenue', size: 34, weight: 800, color: RED_LABEL },
        { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1817, top: 239, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Operating profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '21% margin', size: 29, weight: 400, color: NOTE },
        { text: '+8pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1817, top: 883, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Operating', size: 38, weight: 800, color: RED_LABEL },
        { text: 'expenses', size: 38, weight: 800, color: RED_LABEL },
        { text: '$value', size: 36, weight: 400, color: RED_LABEL },
      ] }],
    },
    net_profit: {
      blocks: [{ x: RIGHT_X + 7, top: 289, anchor: 'start', lineGap: 8, lines: [
        { text: 'Net profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '15% margin', size: 29, weight: 400, color: NOTE },
        { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    tax: {
      blocks: [{ x: RIGHT_X + 40, top: 501, anchor: 'start', lineGap: 8, lines: [
        { text: 'Tax', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    interest_other: {
      blocks: [{ x: RIGHT_X - 29, top: 614, anchor: 'start', lineGap: 8, lines: [
        { text: 'Interest & Other', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    technology_development: {
      blocks: [{ x: RIGHT_X - 5, top: 746, anchor: 'start', lineGap: 8, lines: [
        { text: 'Technology &', size: 32, weight: 800, color: RED_LABEL },
        { text: 'development', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    general_admin: {
      blocks: [{ x: RIGHT_X - 38, top: 903, anchor: 'start', lineGap: 8, lines: [
        { text: 'General & admin', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    amortization: {
      blocks: [{ x: RIGHT_X - 4, top: 1015, anchor: 'start', lineGap: 8, lines: [
        { text: 'Amortization', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    sales_marketing: {
      blocks: [{ x: RIGHT_X - 41, top: 1136, anchor: 'start', lineGap: 8, lines: [
        { text: 'Sales & marketing', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    merger_costs: {
      blocks: [{ x: RIGHT_X - 3, top: 1244, anchor: 'start', lineGap: 8, lines: [
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
  setLines('service', ['$value', '同比 +2%', '服务', '毛利率 36%']);
  setLines('custodial', ['$value', '同比 +12%', '托管', '毛利率 93%']);
  setLines('interchange', ['$value', '同比 +6%', '交换费', '毛利率 85%']);
  labelsZh.service.blocks[1].lines[0].text = '服务';
  labelsZh.service.blocks[1].lines[1].text = '毛利率 36%';
  labelsZh.custodial.blocks[1].lines[0].text = '托管';
  labelsZh.custodial.blocks[1].lines[1].text = '毛利率 93%';
  labelsZh.interchange.blocks[1].lines[0].text = '交换费';
  labelsZh.interchange.blocks[1].lines[1].text = '毛利率 85%';
  setLines('revenue', ['收入', '$value', '同比 +7%']);
  setLines('gross_profit', ['毛利润', '$value', '利润率 68%', '同比 +8 个百分点']);
  setLines('cost_of_revenue', ['收入', '成本', '$value']);
  setLines('operating_profit', ['营业利润', '$value', '利润率 21%', '同比 +8 个百分点']);
  setLines('operating_expenses', ['运营', '费用', '$value']);
  setLines('net_profit', ['净利润', '$value', '利润率 15%', '同比 +6 个百分点']);
  setLines('tax', ['税费', '$value']);
  setLines('interest_other', ['利息及其他', '$value']);
  setLines('technology_development', ['技术与', '开发', '$value']);
  setLines('general_admin', ['一般及行政', '$value']);
  setLines('amortization', ['摊销', '$value']);
  setLines('sales_marketing', ['销售与市场', '$value']);
  setLines('merger_costs', ['并购成本', '$value']);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'health-equity-q4-fy26',
    name: 'HealthEquity · Q4 FY26',
    company: 'HealthEquity',
    meta: {
      company: 'HealthEquity',
      title: 'HealthEquity Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/health-equity-q4-fy26.png', width: 2667, height: 1500 },
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
      scale: 1,
      nodes: {
        service: { x: 378, y: 488, width: 73, height: 143 },
        custodial: { x: 378, y: 779, width: 73, height: 182 },
        interchange: { x: 378, y: 1112, width: 73, height: 53 },
        revenue: { x: 845, y: 637, width: 73, height: 376 },
        gross_profit: { x: 1313, y: 532, width: 72, height: 255 },
        cost_of_revenue: { x: 1313, y: 994, width: 72, height: 119 },
        operating_profit: { x: 1780, y: 425, width: 73, height: 79 },
        operating_expenses: { x: 1780, y: 694, width: 73, height: 178 },
        net_profit: { x: 2248, y: 305, width: 73, height: 55 },
        tax: { x: 2248, y: 527, width: 73, height: 12 },
        interest_other: { x: 2248, y: 627, width: 73, height: 12 },
        technology_development: { x: 2248, y: 743, width: 73, height: 79 },
        general_admin: { x: 2248, y: 903, width: 73, height: 38 },
        amortization: { x: 2248, y: 1026, width: 73, height: 31 },
        sales_marketing: { x: 2248, y: 1142, width: 73, height: 29 },
        merger_costs: { x: 2248, y: 1265, width: 73, height: 1 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'service', col: 0, order: 0, type: 'source', label: 'Service', value: 127, valueText: '$127M', notes: ['+2% Y/Y', '36% gross margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'custodial', col: 0, order: 1, type: 'source', label: 'Custodial', value: 161, valueText: '$161M', notes: ['+12% Y/Y', '93% gross margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'interchange', col: 0, order: 2, type: 'source', label: 'Interchange', value: 46, valueText: '$46M', notes: ['+6% Y/Y', '85% gross margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 335, valueText: '$335M', notes: ['+7% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 228, valueText: '$228M', notes: ['68% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 106, valueText: '($106M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 71, valueText: '$71M', notes: ['21% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 157, valueText: '($157M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 50, valueText: '$50M', notes: ['15% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 11, valueText: '($11M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest_other', col: 4, order: 2, type: 'cost', label: 'Interest & Other', value: 10, valueText: '($10M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology_development', col: 4, order: 3, type: 'cost', label: ['Technology &', 'development'], value: 70, valueText: '($70M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 4, order: 4, type: 'cost', label: 'General & admin', value: 34, valueText: '($34M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 27, valueText: '($27M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 6, type: 'cost', label: 'Sales & marketing', value: 25, valueText: '($25M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'merger_costs', col: 4, order: 7, type: 'cost', label: 'Merger costs', value: 1, valueText: '($1M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'service', target: 'revenue', value: 127, width: 143, sourceOrder: 0, targetOrder: 0 },
      { source: 'custodial', target: 'revenue', value: 161, width: 182, sourceOrder: 0, targetOrder: 1 },
      { source: 'interchange', target: 'revenue', value: 46, width: 53, targetWidth: 51, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 228, width: 255, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 106, width: 119, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 71, width: 79, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 157, width: 176, targetWidth: 178, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 50, width: 55, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 11, width: 12, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest_other', value: 10, width: 12, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_development', value: 70, width: 79, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_admin', value: 34, width: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 27, width: 31, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_marketing', value: 25, width: 29, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'merger_costs', value: 1, width: 1, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'HealthEquity · 2026 财年第四季度',
        meta: {
          title: 'HealthEquity 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 2050,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          service: { label: '服务', notes: ['同比 +2%', '毛利率 36%'] },
          custodial: { label: '托管', notes: ['同比 +12%', '毛利率 93%'] },
          interchange: { label: '交换费', notes: ['同比 +6%', '毛利率 85%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 68%', '同比 +8 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 21%', '同比 +8 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 15%', '同比 +6 个百分点'] },
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
