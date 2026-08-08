/* Morgan Stanley Q2 FY26 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const annotations = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="89" y="279" font-size="30" font-weight="800" fill="${TITLE}">By Business Segment</text>
      <text x="606" y="397" font-family="Arial,Helvetica,sans-serif" font-size="126" font-weight="400" textLength="760" lengthAdjust="spacingAndGlyphs" fill="${BLACK}" data-typography-role="brand">Morgan Stanley</text>
      <g fill="${BLACK}">
        <rect x="123" y="1122" width="242" height="149" rx="30"/>
        <rect x="373" y="1122" width="272" height="149" rx="30"/>
      </g>
      <g fill="#ffffff" text-anchor="middle">
        <text x="244" y="1174" font-size="29" font-weight="800">CET1 ratio</text>
        <text x="244" y="1213" font-size="28">14.8%</text>
        <text x="244" y="1245" font-size="24">(0.2pp) Y/Y</text>
        <text x="509" y="1174" font-size="29" font-weight="800">ROTCE</text>
        <text x="509" y="1213" font-size="28">26.4%</text>
        <text x="509" y="1245" font-size="24">(8.4pp) Y/Y</text>
      </g>
      <g fill="${NOTE}" font-size="28">
        <text x="232" y="1310">CET1 = Common Equity Tier 1</text>
        <text x="78" y="1357">ROTCE = Return on average tangible common equity</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  const dataset = {
    key: 'morgan-stanley-q2-fy26',
    name: 'Morgan Stanley · Q2 FY26',
    company: 'Morgan Stanley',
    meta: {
      company: 'Morgan Stanley',
      title: 'Morgan Stanley Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/morgan-stanley-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 196, titleSize: 115, titleWeight: 800, titleTextLength: 2492,
      periodX: -1000, periodY: -1000, periodNoteY: -950, hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 18.56,
      nodes: {
        institutional_securities: { x: 375, y: 400, width: 73, height: 204 },
        wealth_management: { x: 375, y: 743, width: 73, height: 165 },
        investment_management: { x: 375, y: 1033, width: 73, height: 30 },
        segment_revenue: { x: 842, y: 541, width: 73, height: 399 },
        eliminations: { x: 1309, y: 1169, width: 73, height: 1 },
        revenue: { x: 1309, y: 647, width: 73, height: 396 },
        pretax_income: { x: 1776, y: 533, width: 73, height: 136 },
        operating_expenses: { x: 1776, y: 1308, width: 73, height: 1 },
        non_interest_expenses: { x: 1776, y: 885, width: 73, height: 258 },
        net_income: { x: 2244, y: 287, width: 73, height: 106 },
        tax: { x: 2244, y: 471, width: 73, height: 32 },
        compensation_benefits: { x: 2244, y: 615, width: 73, height: 152 },
        brokerage_clearing_exchange: { x: 2244, y: 842, width: 73, height: 28 },
        information_communications: { x: 2244, y: 962, width: 73, height: 22 },
        professional_services: { x: 2244, y: 1071, width: 73, height: 13 },
        occupancy: { x: 2244, y: 1176, width: 73, height: 9 },
        marketing_business_development: { x: 2244, y: 1280, width: 73, height: 7 },
        other_expenses: { x: 2244, y: 1362, width: 73, height: 28 },
      },
      labels: {
        segment_revenue: { blocks: [] },
        institutional_securities: { blocks: [
          { x: 317.8, top: 442, anchor: 'end', lineGap: 8, lines: [
            { text: 'Institutional', size: 40, weight: 800 }, { text: 'Securities', size: 40, weight: 800 },
            { text: '29% net margin', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 407.3, top: 310, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+44% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        wealth_management: { blocks: [
          { x: 322.5, top: 762, anchor: 'end', lineGap: 8, lines: [
            { text: 'Wealth', size: 40, weight: 800 }, { text: 'Management', size: 40, weight: 800 },
            { text: '24% net margin', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 411.5, top: 653, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        investment_management: { blocks: [
          { x: 325.5, top: 974, anchor: 'end', lineGap: 8, lines: [
            { text: 'Investment', size: 40, weight: 800 }, { text: 'Management', size: 40, weight: 800 },
            { text: '18% net margin', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 411.2, top: 944, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [{ x: 1348, top: 507, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Revenue', size: 41, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        eliminations: { blocks: [{ x: 1347, top: 1193, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Eliminations', size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 31, weight: 400, color: RED_LABEL },
        ] }] },
        pretax_income: { blocks: [{ x: 1813, top: 422.5, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Pretax income', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        ] }] },
        net_income: { blocks: [{ x: 2350, top: 279, anchor: 'start', lineGap: 10, lines: [
          { text: 'Net income', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '+58% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2460.5, top: 457, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ] }] },
        non_interest_expenses: { blocks: [{ x: 1813, top: 1165, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Non interest', size: 35, weight: 800, color: RED_LABEL },
          { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
          { text: '$value', size: 33, weight: 400, color: RED_LABEL },
        ] }] },
        operating_expenses: { blocks: [{ x: 1813, top: 1329, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Provision', size: 34, weight: 800, color: RED_LABEL },
          { text: 'for credit loss', size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 31, weight: 400, color: RED_LABEL },
        ] }] },
        compensation_benefits: { blocks: [{ x: 2471, top: 642, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Compensation', size: 31, weight: 800, color: RED_LABEL },
          { text: '& benefits', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ] }] },
        brokerage_clearing_exchange: { blocks: [{ x: 2472.5, top: 796, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Brokerage, clearing', size: 30, weight: 800, color: RED_LABEL },
          { text: '& exchange fees', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 29, weight: 400, color: RED_LABEL },
        ] }] },
        information_communications: { blocks: [{ x: 2470, top: 920, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Information &', size: 30, weight: 800, color: RED_LABEL },
          { text: 'communications', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 29, weight: 400, color: RED_LABEL },
        ] }] },
        professional_services: { blocks: [{ x: 2470, top: 1046, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Professional', size: 30, weight: 800, color: RED_LABEL },
          { text: 'services', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 29, weight: 400, color: RED_LABEL },
        ] }] },
        occupancy: { blocks: [{ x: 2470.5, top: 1147, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Occupancy', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 29, weight: 400, color: RED_LABEL },
        ] }] },
        marketing_business_development: { blocks: [{ x: 2471.5, top: 1213, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Marketing &', size: 30, weight: 800, color: RED_LABEL },
          { text: 'business dev.', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 29, weight: 400, color: RED_LABEL },
        ] }] },
        other_expenses: { blocks: [{ x: 2470, top: 1343, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other ($1.5B)', size: 30, weight: 800, color: RED_LABEL },
        ] }] },
      },
    },
    nodes: [
      { id: 'institutional_securities', col: 0, order: 0, type: 'source', label: ['Institutional', 'Securities'], value: 11.0, valueText: '$11.0B', notes: ['+44% Y/Y', '29% net margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'wealth_management', col: 0, order: 1, type: 'source', label: ['Wealth', 'Management'], value: 8.9, notes: ['+14% Y/Y', '24% net margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'investment_management', col: 0, order: 2, type: 'source', label: ['Investment', 'Management'], value: 1.6, notes: ['+6% Y/Y', '18% net margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'segment_revenue', col: 1, order: 0, type: 'hub', label: '', value: 21.5, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 21.3, notes: ['+27% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 7.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Provision', 'for credit loss'], value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'non_interest_expenses', col: 3, order: 1, type: 'cost', label: ['Non interest', 'expenses'], value: 13.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 5.7, notes: ['+58% Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 1.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'compensation_benefits', col: 4, order: 2, type: 'cost', label: ['Compensation', '& benefits'], value: 8.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'brokerage_clearing_exchange', col: 4, order: 3, type: 'cost', label: ['Brokerage, clearing', '& exchange fees'], value: 1.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'information_communications', col: 4, order: 4, type: 'cost', label: ['Information &', 'communications'], value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'professional_services', col: 4, order: 5, type: 'cost', label: ['Professional', 'services'], value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'occupancy', col: 4, order: 6, type: 'cost', label: 'Occupancy', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_business_development', col: 4, order: 7, type: 'cost', label: ['Marketing &', 'business dev.'], value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 4, order: 8, type: 'cost', label: 'Other', value: 1.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'institutional_securities', target: 'segment_revenue', value: 11.0, width: 204, sourceOrder: 0, targetOrder: 0 },
      { source: 'wealth_management', target: 'segment_revenue', value: 8.9, width: 165, sourceOrder: 0, targetOrder: 1 },
      { source: 'investment_management', target: 'segment_revenue', value: 1.6, width: 30, sourceOrder: 0, targetOrder: 2 },
      { source: 'segment_revenue', target: 'revenue', value: 21.3, sourceWidth: 395, targetWidth: 396, sourceOrder: 0, targetOrder: 0 },
      { source: 'segment_revenue', target: 'eliminations', value: 0.2, sourceWidth: 4, targetWidth: 1, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1043, c1y: 938, c2x: 1186, c2y: 1169 } },
      { source: 'revenue', target: 'pretax_income', value: 7.3, width: 136, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'non_interest_expenses', value: 13.9, width: 258, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 0.1, sourceWidth: 2, targetWidth: 1, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1493, c1y: 1042, c2x: 1633, c2y: 1308 } },
      { source: 'pretax_income', target: 'net_income', value: 5.7, sourceWidth: 104, targetWidth: 106, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 1.7, sourceWidth: 32, targetWidth: 32, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1986, c1y: 653, c2x: 2108, c2y: 487 } },
      { source: 'non_interest_expenses', target: 'compensation_benefits', value: 8.2, width: 152, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'non_interest_expenses', target: 'brokerage_clearing_exchange', value: 1.5, width: 28, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1964, c1y: 1051, c2x: 2086, c2y: 856 } },
      { source: 'non_interest_expenses', target: 'information_communications', value: 1.2, width: 22, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1964, c1y: 1076, c2x: 2098, c2y: 973 } },
      { source: 'non_interest_expenses', target: 'professional_services', value: 0.7, width: 13, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'non_interest_expenses', target: 'occupancy', value: 0.5, width: 9, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1976, c1y: 1104.5, c2x: 2103, c2y: 1181 } },
      { source: 'non_interest_expenses', target: 'marketing_business_development', value: 0.4, width: 7, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1978, c1y: 1112.5, c2x: 2108, c2y: 1284 } },
      { source: 'non_interest_expenses', target: 'other_expenses', value: 1.5, sourceWidth: 27, targetWidth: 28, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1983, c1y: 1129.5, c2x: 2116, c2y: 1376 } },
    ],
    i18n: { zh: {
      name: '摩根士丹利 · 2026 财年第二季度',
      meta: { title: '摩根士丹利 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月', titleTextLength: 2280 },
      nodes: {
        institutional_securities: { label: '机构证券', notes: ['同比 +44%', '净利率 29%'] },
        wealth_management: { label: '财富管理', notes: ['同比 +14%', '净利率 24%'] },
        investment_management: { label: '投资管理', notes: ['同比 +6%', '净利率 18%'] },
        eliminations: { label: '抵销' }, revenue: { label: '收入', notes: ['同比 +27%'] },
        pretax_income: { label: '税前利润' }, operating_expenses: { label: '信用损失拨备' },
        non_interest_expenses: { label: ['非利息', '费用'] }, net_income: { label: '净利润', notes: ['同比 +58%'] },
        tax: { label: '税费' }, compensation_benefits: { label: '薪酬与福利' },
        brokerage_clearing_exchange: { label: '经纪、清算与交易所费用' }, information_communications: { label: '信息与通信' },
        professional_services: { label: '专业服务' }, occupancy: { label: '场地占用' },
        marketing_business_development: { label: '市场与业务开发' }, other_expenses: { label: '其他' },
      },
    } },
  };

  const zhLabels = JSON.parse(JSON.stringify(dataset.layout.labels));
  zhLabels.institutional_securities.blocks[0].lines = [
    { text: '机构证券', size: 40, weight: 800 },
    { text: '净利率 29%', size: 28, weight: 400, color: NOTE },
  ];
  zhLabels.institutional_securities.blocks[1].lines = [
    { text: '$value', size: 39, weight: 400 }, { text: '同比 +44%', size: 28, weight: 400, color: NOTE },
  ];
  zhLabels.wealth_management.blocks[0].lines = [
    { text: '财富管理', size: 40, weight: 800 },
    { text: '净利率 24%', size: 28, weight: 400, color: NOTE },
  ];
  zhLabels.wealth_management.blocks[1].lines = [
    { text: '$value', size: 39, weight: 400 }, { text: '同比 +14%', size: 28, weight: 400, color: NOTE },
  ];
  zhLabels.investment_management.blocks[0].lines = [
    { text: '投资管理', size: 40, weight: 800 },
    { text: '净利率 18%', size: 28, weight: 400, color: NOTE },
  ];
  zhLabels.investment_management.blocks[1].lines = [
    { text: '$value', size: 39, weight: 400 }, { text: '同比 +6%', size: 28, weight: 400, color: NOTE },
  ];
  zhLabels.revenue.blocks[0].lines = [
    { text: '收入', size: 41, weight: 800 }, { text: '$value', size: 39, weight: 400 },
    { text: '同比 +27%', size: 28, weight: 400, color: NOTE },
  ];
  zhLabels.eliminations.blocks[0].lines = [
    { text: '抵销', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL },
  ];
  zhLabels.pretax_income.blocks[0].lines = [
    { text: '税前利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
  ];
  zhLabels.net_income.blocks[0].lines = [
    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
    { text: '同比 +58%', size: 28, weight: 400, color: NOTE },
  ];
  zhLabels.tax.blocks[0].lines = [
    { text: '税费', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL },
  ];
  zhLabels.non_interest_expenses.blocks[0].lines = [
    { text: '非利息', size: 35, weight: 800, color: RED_LABEL }, { text: '费用', size: 35, weight: 800, color: RED_LABEL },
    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
  ];
  zhLabels.operating_expenses.blocks[0].lines = [
    { text: '信用损失拨备', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL },
  ];
  zhLabels.compensation_benefits.blocks[0].lines = [
    { text: '薪酬与福利', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL },
  ];
  zhLabels.brokerage_clearing_exchange.blocks[0].lines = [
    { text: '经纪、清算与', size: 30, weight: 800, color: RED_LABEL }, { text: '交易所费用', size: 30, weight: 800, color: RED_LABEL },
    { text: '$value', size: 29, weight: 400, color: RED_LABEL },
  ];
  zhLabels.information_communications.blocks[0].lines = [
    { text: '信息与通信', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 29, weight: 400, color: RED_LABEL },
  ];
  zhLabels.professional_services.blocks[0].lines = [
    { text: '专业服务', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 29, weight: 400, color: RED_LABEL },
  ];
  zhLabels.occupancy.blocks[0].lines = [
    { text: '场地占用', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 29, weight: 400, color: RED_LABEL },
  ];
  zhLabels.marketing_business_development.blocks[0].lines = [
    { text: '市场与', size: 30, weight: 800, color: RED_LABEL }, { text: '业务开发', size: 30, weight: 800, color: RED_LABEL },
    { text: '$value', size: 29, weight: 400, color: RED_LABEL },
  ];
  zhLabels.other_expenses.blocks[0].lines = [{ text: '其他（$1.5B）', size: 30, weight: 800, color: RED_LABEL }];

  dataset.i18n.zh.layout = { labels: zhLabels };
  dataset.i18n.zh.annotationsSvg = annotations
    .replace('By Business Segment', '按业务分部')
    .replace('CET1 ratio', 'CET1 比率')
    .replace('(0.2pp) Y/Y', '同比 (0.2 个百分点)')
    .replace('(8.4pp) Y/Y', '同比 (8.4 个百分点)')
    .replace('CET1 = Common Equity Tier 1', 'CET1 = 普通股一级资本充足率')
    .replace('ROTCE = Return on average tangible common equity', 'ROTCE = 平均有形普通股权益回报率');

  window.DATASETS.push(dataset);
})();
