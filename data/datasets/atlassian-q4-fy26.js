(function () {
  const BLUE = '#0052cc';
  const BLUE_LIGHT = '#2681ff';
  const TITLE = '#155077';
  const BLUE_LINK = '#85aae1';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, centerY, lines, lineGap = 9) => {
    const totalHeight = lines.reduce((sum, item) => sum + item.size, 0) + lineGap * (lines.length - 1);
    return { x, top: centerY - totalHeight / 2, anchor: 'middle', lineGap, lines };
  };
  const one = (x, y, text, size, color, weight = 700) => ({ blocks: [block(x, y, [line(text, size, weight, color)])] });
  const labelSet = (zh) => ({
    cloud: { blocks: [
      block(418, 392, [line('$value', 39, 700, BLUE), line(zh ? '同比 +31%' : '+31% Y/Y', 29, 300, NOTE)], 9),
      block(220, 562, [line(zh ? '云' : 'Cloud', 40, 700, BLUE)])
    ]},
    data_center: { blocks: [
      block(421, 802, [line('$value', 39, 700, BLUE), line(zh ? '同比 +21%' : '+21% Y/Y', 29, 300, NOTE)], 13),
      block(222, 900, [line(zh ? '数据中心' : 'Data Center', 40, 700, BLUE)])
    ]},
    marketplace_services: { blocks: [
      block(422.5, 1047.5, [line('$value', 39, 700, BLUE)]),
      block(422.5, 1095, [line(zh ? '同比 +20%' : '+20% Y/Y', 29, 300, NOTE)]),
      ...(zh
        ? [block(222, 1131, [line('市场与服务', 32, 700, BLUE)])]
        : [
            block(222, 1075, [line('Marketplace', 40, 700, BLUE)]),
            block(222, 1131, [line('& Services', 40, 700, BLUE)])
          ])
    ]},
    revenue: { blocks: [block(885, 571, [
      line(zh ? '收入' : 'Revenue', 40, 700, BLUE), line('$value', 39, 400, BLUE),
      line(zh ? '同比 +28%' : '+28% Y/Y', 29, 300, NOTE)
    ])]},
    gross_profit: { blocks: [block(1350.5, 470, [
      line(zh ? '毛利润' : 'Gross profit', 40, 700, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line(zh ? '利润率 87%' : '87% margin', 29, 300, NOTE),
      line(zh ? '同比 +3 个百分点' : '+3pp Y/Y', 29, 300, NOTE)
    ])]},
    cost_of_revenue: { blocks: [block(1350, 1169, [
      line(zh ? '收入' : 'Cost of', 36, 700, RED_LABEL), line(zh ? '成本' : 'revenue', 36, 700, RED_LABEL),
      line('$value', 32, 400, RED_LABEL)
    ], 7)]},
    operating_profit: { blocks: [block(1815, 403, [
      line(zh ? '营业利润' : 'Operating profit', 40, 700, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line(zh ? '利润率 12%' : '12% margin', 29, 300, NOTE),
      line(zh ? '同比 +14 个百分点' : '+14pp Y/Y', 29, 300, NOTE)
    ])]},
    operating_expenses: { blocks: [block(1830, 1061, [
      line(zh ? '运营费用' : 'Operating', 40, 700, RED_LABEL),
      ...(!zh ? [line('expenses', 40, 700, RED_LABEL)] : []),
      line('$value', 36, 400, RED_LABEL)
    ], 8)]},
    net_profit: { blocks: [block(2439, 466, [
      line(zh ? '净利润' : 'Net profit', 40, 700, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line(zh ? '利润率 8%' : '8% margin', 29, 300, NOTE),
      line(zh ? '同比 +23 个百分点' : '+23pp Y/Y', 29, 300, NOTE)
    ])]},
    tax: { blocks: [block(2439, 621, [line(zh ? '税费' : 'Tax', 31, 700, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 8)]},
    other_expense: { blocks: [block(2439, 728, [line(zh ? '其他' : 'Other', 31, 700, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 8)]},
    rnd: { blocks: [block(2439, 883, [
      line(zh ? '研发' : 'R&D', 31, 700, RED_LABEL), line('$value', 29, 400, RED_LABEL),
      line(zh ? '占收入 43%' : '43% of revenue', 27, 300, NOTE),
      line(zh ? '同比 (8 个百分点)' : '(8pp) Y/Y', 27, 300, NOTE)
    ], 7)]},
    sm: { blocks: [block(2439, 1100, [
      line(zh ? '销售与市场' : 'S&M', 31, 700, RED_LABEL), line('$value', 29, 400, RED_LABEL),
      line(zh ? '占收入 22%' : '22% of revenue', 27, 300, NOTE),
      line(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 27, 300, NOTE)
    ], 7)]},
    ga: { blocks: [block(2439, 1307, [
      line(zh ? '管理费用' : 'G&A', 31, 700, RED_LABEL), line('$value', 29, 400, RED_LABEL),
      line(zh ? '占收入 10%' : '10% of revenue', 27, 300, NOTE),
      line(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 27, 300, NOTE)
    ], 7)]}
  });
  const arrCard = (zh) => '<g data-annotation="subscription-arr">' +
    '<rect x="112" y="1194" width="380" height="162" rx="32" fill="#0052cc"/>' +
    '<text x="302" y="1239" text-anchor="middle" font-size="27" font-weight="800" fill="#ffffff">' +
      (zh ? '订阅 ARR' : 'Subscription ARR') + '</text>' +
    '<text data-operating-metric="subscription_arr" x="302" y="1290" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">$6.6B</text>' +
    '<text x="302" y="1330" text-anchor="middle" font-size="25" fill="#ffffff">' +
      (zh ? '同比 +23%' : '+23% Y/Y') + '</text></g>';

  const nodes = [
    { id: 'cloud', col: 0, order: 0, type: 'source', label: 'Cloud', value: 1214, valueText: '$1,214M', notes: ['+31% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
    { id: 'data_center', col: 0, order: 1, type: 'source', label: 'Data Center', value: 462, valueText: '$462M', notes: ['+21% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
    { id: 'marketplace_services', col: 0, order: 2, type: 'source', label: ['Marketplace', '& Services'], value: 91, valueText: '$91M', notes: ['+20% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
    { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1767, valueText: '$1,767M', notes: ['+28% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
    { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1528, valueText: '$1,528M', notes: ['87% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
    { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 238, valueText: '($238M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 211, valueText: '$211M', notes: ['12% margin', '+14pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
    { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 1317, valueText: '($1,317M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 139, valueText: '$139M', notes: ['8% margin', '+23pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
    { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 58, valueText: '($58M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    { id: 'other_expense', col: 4, order: 2, type: 'cost', label: 'Other', value: 14, valueText: '($14M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 760, valueText: '($760M)', notes: ['43% of revenue', '(8pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    { id: 'sm', col: 4, order: 4, type: 'cost', label: 'S&M', value: 389, valueText: '($389M)', notes: ['22% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    { id: 'ga', col: 4, order: 5, type: 'cost', label: 'G&A', value: 168, valueText: '($168M)', notes: ['10% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK }
  ];
  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'atlassian-q4-fy26',
    name: 'Atlassian · Q4 FY26',
    company: 'Atlassian',
    meta: {
      company: 'Atlassian', title: 'Atlassian Q4 FY26 Income Statement', period: 'Q4 FY26', periodNote: 'Ending June 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processing/atlassian-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 204, titleSize: 128, titleWeight: 800, titleTextLength: 2120,
      periodX: 2437, periodY: 282, periodNoteY: 325,
      logoX: 777, logoY: 248, logoWidth: 201, logoHeight: 223, logoViewBox: '20 10 233 229',
      logoSvg: '<g><path fill="#2681ff" d="M149 10c5-10 20-10 25 0l79 160c4 8-2 17-11 17h-74c-6 0-11-3-14-8l-43-88c-3-6-3-13 0-19z"/><path fill="#0052cc" d="M91 78c6-10 20-10 25 0l38 91c4 9-2 18-12 18H31c-10 0-16-11-11-19z"/><text x="136" y="230" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="31" font-weight="800" fill="#0052cc">ATLASSIAN</text></g>'
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL }
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 29, lineGap: 9 }
    },
    annotationsSvg: arrCard(false),
    nodes,
    layout: {
      scale: 0.2,
      nodes: {
        cloud: { x: 378, y: 442, width: 72, height: 243 },
        data_center: { x: 378, y: 856, width: 72, height: 92 },
        marketplace_services: { x: 378, y: 1129, width: 72, height: 16 },
        revenue: { x: 845, y: 645, width: 72, height: 354 },
        gross_profit: { x: 1314, y: 564, width: 73, height: 307 },
        cost_of_revenue: { x: 1312, y: 1037, width: 72, height: 47 },
        operating_profit: { x: 1779, y: 497, width: 72, height: 43 },
        operating_expenses: { x: 1779, y: 718, width: 72, height: 265 },
        net_profit: { x: 2246, y: 421, width: 73, height: 27 },
        tax: { x: 2246, y: 610, width: 73, height: 10 },
        other_expense: { x: 2246, y: 728, width: 73, height: 2 },
        rnd: { x: 2246, y: 794, width: 73, height: 152 },
        sm: { x: 2246, y: 1054, width: 73, height: 78 },
        ga: { x: 2246, y: 1250, width: 73, height: 33 }
      },
      labels: labelSet(false)
    },
    links: [
      { source: 'cloud', target: 'revenue', value: 1214, width: 243, sourceWidth: 243, targetWidth: 243, y0: 563.5, y1: 766.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'data_center', target: 'revenue', value: 462, width: 92, sourceWidth: 92, targetWidth: 93, y0: 902, y1: 934.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'marketplace_services', target: 'revenue', value: 91, width: 16, sourceWidth: 16, targetWidth: 18, y0: 1137, y1: 990, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1528, width: 306, sourceWidth: 306, targetWidth: 307, y0: 798, y1: 717.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 238, width: 48, sourceWidth: 48, targetWidth: 47, y0: 975, y1: 1060.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 211, width: 43, sourceWidth: 43, targetWidth: 43, y0: 585.5, y1: 518.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1317, width: 264, sourceWidth: 264, targetWidth: 265, y0: 739, y1: 850.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 760, width: 153, sourceWidth: 153, targetWidth: 152, y0: 794.5, y1: 870, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 389, width: 78, sourceWidth: 78, targetWidth: 78, y0: 910, y1: 1093, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 168, width: 34, sourceWidth: 34, targetWidth: 33, y0: 966, y1: 1266.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 139, width: 28, sourceWidth: 28, targetWidth: 27, y0: 511, y1: 434.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 58, width: 12, sourceWidth: 12, targetWidth: 10, y0: 531, y1: 615, sourceOrder: 1, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 14, width: 3, sourceWidth: 3, targetWidth: 2, y0: 538.5, y1: 729, sourceOrder: 2, targetOrder: 2, linkTint: RED_LINK }
    ],
    operatingMetrics: [{ id: 'subscription_arr', value: '6.6', unit: 'B', currency: 'USD', comparison: 'eq', literal: '$6.6B' }],
    i18n: {
      zh: {
        name: 'Atlassian · 2026 财年第四季度',
        meta: { title: 'Atlassian 2026 财年第四季度利润表', period: '2026 财年第四季度', periodNote: '截至 2026 年 6 月' },
        nodes: {
          cloud: { label: '云', notes: ['同比 +31%'] },
          data_center: { label: '数据中心', notes: ['同比 +21%'] },
          marketplace_services: { label: '市场与服务', notes: ['同比 +20%'] },
          revenue: { label: '收入', notes: ['同比 +28%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 87%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +14 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 +23 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 43%', '同比 (8 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 22%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] }
        },
        layout: { labels: labelSet(true) },
        annotationsSvg: arrCard(true)
      }
    }
  });
})();
