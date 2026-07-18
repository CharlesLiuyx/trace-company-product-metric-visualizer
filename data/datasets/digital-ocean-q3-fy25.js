/* DigitalOcean Q3 FY25 income statement ($M), measured from the Build Source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const DO_BLUE = '#0080ff';
  const DO_LINK = '#85bff7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, weight, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 8) => ({
    x,
    top,
    anchor,
    lineGap,
    lines: lines.filter(Boolean),
  });

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="32" fill="${DO_BLUE}"/>
      ${lines
        .map(
          (item) =>
            `<text x="${x + width / 2}" y="${y + item.y}" text-anchor="middle" font-size="${item.size}" font-weight="${item.weight || 500}" fill="#ffffff">${item.text}</text>`
        )
        .join('')}
    </g>`;

  const annotations = (copy) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(86, 1116, 166, 166, [
        { text: 'ARR', y: 55, size: 30, weight: 800 },
        { text: '$919M', y: 98, size: 31 },
        { text: copy.arrGrowth, y: 137, size: copy.arrGrowthSize },
      ])}
      ${kpiCard(266, 1116, 166, 166, [
        { text: 'DBNR', y: 55, size: 30, weight: 800 },
        { text: '99%', y: 98, size: 31 },
        { text: copy.dbnrGrowth, y: 137, size: copy.dbnrGrowthSize },
      ])}
      ${kpiCard(445, 1116, 275, 166, [
        { text: copy.customers, y: 55, size: 30, weight: 800 },
        { text: copy.customerThreshold, y: 98, size: 31 },
        { text: copy.customerGrowth, y: 137, size: 28 },
      ])}
      <text x="225" y="1326" font-size="29" font-weight="500" fill="${NOTE}">${copy.arrFootnote}</text>
      <text x="209" y="1362" font-size="29" font-weight="500" fill="${NOTE}">${copy.dbnrFootnote}</text>
    </g>`;

  const makeLabels = (copy) => ({
    north_america: {
      blocks: [
        block(392, 274, 'middle', [line('$value', 40, 400), line(copy.northGrowth, 29, 400, NOTE)]),
        block(298, copy.northNameTop, 'end', [line(copy.northLine1, 40, 800), copy.northLine2 && line(copy.northLine2, 40, 800)], 10),
      ],
    },
    europe: {
      blocks: [
        block(392, 514, 'middle', [line('$value', 40, 400), line(copy.europeGrowth, 29, 400, NOTE)]),
        block(298, 634, 'end', [line(copy.europe, 40, 800)]),
      ],
    },
    asia: {
      blocks: [
        block(392, 714, 'middle', [line('$value', 40, 400), line(copy.asiaGrowth, 29, 400, NOTE)]),
        block(298, 829, 'end', [line(copy.asia, 40, 800)]),
      ],
    },
    other_revenue: {
      blocks: [
        block(392, 921, 'middle', [line('$value', 40, 400), line(copy.otherRevenueGrowth, 29, 400, NOTE)]),
        block(298, 1011, 'end', [line(copy.other, 40, 800)]),
      ],
    },
    revenue: {
      blocks: [
        block(860, 534, 'middle', [
          line(copy.revenue, 40, 800),
          line('$value', 40, 400),
          line(copy.revenueGrowth, 29, 400, NOTE),
        ]),
      ],
    },
    gross_profit: {
      blocks: [
        block(1324, 394, 'middle', [
          line(copy.grossProfit, 40, 800),
          line('$value', 40, 400),
          line(copy.grossMargin, 29, 400, NOTE),
          line(copy.grossGrowth, 29, 400, NOTE),
        ]),
      ],
    },
    cost_of_revenue: {
      blocks: [
        block(1327, 1116, 'middle', [
          line(copy.costLine1, 36, 800),
          line(copy.costLine2, 36, 800),
          line('$value', 36, 400),
        ]),
      ],
    },
    operating_profit: {
      blocks: [
        block(1787, 253, 'middle', [
          line(copy.operatingProfit, 40, 800),
          line('$value', 40, 400),
          line(copy.operatingMargin, 29, 400, NOTE),
          line(copy.operatingGrowth, 29, 400, NOTE),
        ]),
      ],
    },
    operating_expenses: {
      blocks: [
        block(1794, 926, 'middle', [
          line(copy.operatingLine1, 40, 800),
          line(copy.operatingLine2, 40, 800),
          line('$value', 40, 400),
        ]),
      ],
    },
    tax: {
      blocks: [
        block(2059, 268, 'middle', [line(copy.tax, 31, 800), line('$value', 31, 400)]),
      ],
    },
    other_income: {
      blocks: [
        block(2057, 706, 'middle', [line(copy.other, 31, 800), line('$value', 31, 400)]),
      ],
    },
    net_profit: {
      blocks: [
        block(2426, 477, 'middle', [
          line(copy.netProfit, 40, 800),
          line('$value', 40, 400),
          line(copy.netMargin, 29, 400, NOTE),
          line(copy.netGrowth, 29, 400, NOTE),
        ]),
      ],
    },
    rnd: {
      blocks: [
        block(2426, 863, 'middle', [
          line(copy.rnd, 31, 800),
          line('$value', 31, 400),
          line(copy.rndShare, 29, 400, NOTE),
          line(copy.rndGrowth, 29, 400, NOTE),
        ]),
      ],
    },
    ga: {
      blocks: [
        block(2426, 1057, 'middle', [
          line(copy.ga, 31, 800),
          line('$value', 31, 400),
          line(copy.gaShare, 29, 400, NOTE),
          line(copy.gaGrowth, 29, 400, NOTE),
        ]),
      ],
    },
    sm: {
      blocks: [
        block(2425, 1248, 'middle', [
          line(copy.sm, 31, 800),
          line('$value', 31, 400),
          line(copy.smShare, 29, 400, NOTE),
          line(copy.smGrowth, 29, 400, NOTE),
        ]),
      ],
    },
  });

  const en = {
    northLine1: 'North',
    northLine2: 'America',
    northNameTop: 386,
    northGrowth: '+20% Y/Y',
    europe: 'Europe',
    europeGrowth: '+12% Y/Y',
    asia: 'Asia',
    asiaGrowth: '+14% Y/Y',
    other: 'Other',
    otherRevenueGrowth: '+13% Y/Y',
    revenue: 'Revenue',
    revenueGrowth: '+16% Y/Y',
    grossProfit: 'Gross profit',
    grossMargin: '60% margin',
    grossGrowth: '(1pp) Y/Y',
    costLine1: 'Cost of',
    costLine2: 'revenue',
    operatingProfit: 'Operating profit',
    operatingMargin: '20% margin',
    operatingGrowth: '+7pp Y/Y',
    operatingLine1: 'Operating',
    operatingLine2: 'expenses',
    tax: 'Tax',
    netProfit: 'Net profit',
    netMargin: '69% margin',
    netGrowth: '+52pp Y/Y',
    rnd: 'R&D',
    rndShare: '17% of revenue',
    rndGrowth: '(2pp) Y/Y',
    ga: 'G&A',
    gaShare: '14% of revenue',
    gaGrowth: '(6pp) Y/Y',
    sm: 'S&M',
    smShare: '9% of revenue',
    smGrowth: '+2pp Y/Y',
    arrGrowth: '+16% Y/Y',
    arrGrowthSize: 28,
    dbnrGrowth: '+2pp Y/Y',
    dbnrGrowthSize: 28,
    customers: 'Customers',
    customerThreshold: '&gt;$100K ARR',
    customerGrowth: '+41% Y/Y',
    arrFootnote: 'ARR = Annual Run-Rate Revenue',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  };

  const zh = {
    northLine1: '北美',
    northLine2: '',
    northNameTop: 413,
    northGrowth: '同比 +20%',
    europe: '欧洲',
    europeGrowth: '同比 +12%',
    asia: '亚洲',
    asiaGrowth: '同比 +14%',
    other: '其他',
    otherRevenueGrowth: '同比 +13%',
    revenue: '收入',
    revenueGrowth: '同比 +16%',
    grossProfit: '毛利润',
    grossMargin: '利润率 60%',
    grossGrowth: '同比 (1 个百分点)',
    costLine1: '收入',
    costLine2: '成本',
    operatingProfit: '营业利润',
    operatingMargin: '利润率 20%',
    operatingGrowth: '同比 +7 个百分点',
    operatingLine1: '运营',
    operatingLine2: '费用',
    tax: '税项',
    netProfit: '净利润',
    netMargin: '利润率 69%',
    netGrowth: '同比 +52 个百分点',
    rnd: '研发',
    rndShare: '占收入 17%',
    rndGrowth: '同比 (2 个百分点)',
    ga: '管理费用',
    gaShare: '占收入 14%',
    gaGrowth: '同比 (6 个百分点)',
    sm: '销售与营销',
    smShare: '占收入 9%',
    smGrowth: '同比 +2 个百分点',
    arrGrowth: '同比 +16%',
    arrGrowthSize: 22,
    dbnrGrowth: '同比 +2 个百分点',
    dbnrGrowthSize: 18,
    customers: '客户',
    customerThreshold: 'ARR &gt;$100K',
    customerGrowth: '同比 +41%',
    arrFootnote: 'ARR = 年化经常性收入',
    dbnrFootnote: 'DBNR = 美元净留存率',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'digital-ocean-q3-fy25',
    name: 'DigitalOcean · Q3 FY25',
    company: 'DigitalOcean',
    meta: {
      company: 'DigitalOcean',
      title: 'Digital Ocean Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: {
        src: 'input/processed/digital-ocean-q3-fy25.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1334,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2460,
      hidePeriodStamp: true,
      logoWidth: 390,
      logoHeight: 286,
      logoY: 228,
      logoViewBox: '0 0 404 296',
      logoSvg: BUSINESS_ICONS.digitalOceanCompanyLogo || '',
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
        source: { node: DO_BLUE, label: DO_BLUE },
        hub: { node: DO_BLUE, label: DO_BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: DO_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(en),
    layout: {
      scale: 1.4,
      nodes: {
        north_america: { x: 356, y: 374, width: 73, height: 127 },
        europe: { x: 356, y: 614, width: 73, height: 85 },
        asia: { x: 356, y: 814, width: 73, height: 72 },
        other_revenue: { x: 356, y: 1020, width: 73, height: 30 },
        revenue: { x: 824, y: 686, width: 72, height: 324 },
        gross_profit: { x: 1288, y: 579, width: 73, height: 192 },
        cost_of_revenue: { x: 1290, y: 973, width: 73, height: 130 },
        operating_profit: { x: 1759, y: 432, width: 72, height: 62 },
        operating_expenses: { x: 1759, y: 779, width: 72, height: 127 },
        tax: { x: 2024, y: 357, width: 71, height: 95 },
        other_income: { x: 2021, y: 632, width: 71, height: 62 },
        net_profit: { x: 2225, y: 444, width: 72, height: 222 },
        rnd: { x: 2225, y: 865, width: 72, height: 51 },
        ga: { x: 2225, y: 1070, width: 72, height: 44 },
        sm: { x: 2225, y: 1270, width: 72, height: 29 },
      },
      labels: makeLabels(en),
    },
    nodes: [
      { id: 'north_america', col: 0, order: 0, type: 'source', label: ['North', 'America'], value: 92, notes: ['+20% Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'europe', col: 0, order: 1, type: 'source', label: 'Europe', value: 62, notes: ['+12% Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'asia', col: 0, order: 2, type: 'source', label: 'Asia', value: 53, notes: ['+14% Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'other_revenue', col: 0, order: 3, type: 'source', label: 'Other', value: 23, notes: ['+13% Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 230, notes: ['+16% Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 137, notes: ['60% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 93, valueText: '($93M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 45, notes: ['20% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 92, valueText: '($92M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 0, type: 'profit', label: 'Tax', value: 68, color: GREEN, labelColor: '#008e00', linkTint: GREEN_LINK },
      { id: 'other_income', col: 4, order: 1, type: 'profit', label: 'Other', value: 45, color: GREEN, labelColor: '#008e00', linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 158, notes: ['69% margin', '+52pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 38, valueText: '($38M)', notes: ['17% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 33, valueText: '($33M)', notes: ['14% of revenue', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 21, valueText: '($21M)', notes: ['9% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'north_america', target: 'revenue', value: 92, sourceWidth: 127, targetWidth: 129, y0: 437.5, y1: 750.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'europe', target: 'revenue', value: 62, sourceWidth: 85, targetWidth: 87, y0: 656.5, y1: 858.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'asia', target: 'revenue', value: 53, sourceWidth: 72, targetWidth: 74, y0: 850, y1: 939, sourceOrder: 0, targetOrder: 2 },
      { source: 'other_revenue', target: 'revenue', value: 23, sourceWidth: 30, targetWidth: 34, y0: 1035, y1: 993, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 137, sourceWidth: 193, targetWidth: 192, y0: 782.5, y1: 675, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 93, sourceWidth: 131, targetWidth: 130, y0: 944.5, y1: 1038, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 45, sourceWidth: 62, targetWidth: 62, y0: 610, y1: 463, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 92, sourceWidth: 130, targetWidth: 127, y0: 706, y1: 842.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'tax', target: 'net_profit', value: 68, sourceWidth: 95, targetWidth: 95, y0: 404.5, y1: 491.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 45, sourceWidth: 62, targetWidth: 63, y0: 463, y1: 570.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'net_profit', value: 45, sourceWidth: 62, targetWidth: 64, y0: 663, y1: 634, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 38, sourceWidth: 52, targetWidth: 51, y0: 805, y1: 890.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 33, sourceWidth: 46, targetWidth: 44, y0: 854, y1: 1092, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 21, sourceWidth: 29, targetWidth: 29, y0: 891.5, y1: 1284.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'DigitalOcean · 2025 财年第三季度',
        meta: {
          title: 'DigitalOcean 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 112,
          titleTextLength: 1800,
        },
        annotationsSvg: annotations(zh),
        nodes: {
          north_america: { label: '北美', notes: ['同比 +20%'] },
          europe: { label: '欧洲', notes: ['同比 +12%'] },
          asia: { label: '亚洲', notes: ['同比 +14%'] },
          other_revenue: { label: '其他', notes: ['同比 +13%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 60%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 +7 个百分点'] },
          operating_expenses: { label: '运营费用' },
          tax: { label: '税项' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 69%', '同比 +52 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 17%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 14%', '同比 (6 个百分点)'] },
          sm: { label: '销售与营销', notes: ['占收入 9%', '同比 +2 个百分点'] },
        },
        layout: { labels: makeLabels(zh) },
      },
    },
  });
})();
