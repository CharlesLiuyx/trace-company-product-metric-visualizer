/* ====================================================================
 * Airbnb - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/airbnb-q3-fy25.png as a measured
 * fixed d3-sankey layout with pure SVG/vector annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const PINK = '#ff385c';
  const PINK_LINK = '#f79dae';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2370;

  const airbnbLogo = `
    <rect x="0" y="0" width="244" height="244" rx="38" fill="${PINK}"/>
    <path d="M122 48 C103 80 83 116 68 145 C56 169 73 193 99 183 C113 178 121 162 122 145 C123 162 131 178 145 183 C171 193 188 169 176 145 C161 116 141 80 122 48 Z" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M122 145 C99 126 101 96 122 96 C143 96 145 126 122 145 Z" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>`;

  const strokeIcon = (x, y, body, width = 96, height = 96) => `
    <g transform="translate(${x} ${y})" fill="none" stroke="#000000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
      <svg width="${width}" height="${height}" viewBox="0 0 96 96" overflow="visible">${body}</svg>
    </g>`;

  const northAmericaIcon = strokeIcon(87, 447, `
    <path d="M8 48 L8 26 L28 10 L48 26 L48 48"/>
    <path d="M19 48 L19 32 L37 32 L37 48"/>
    <path d="M50 47 L74 47"/>
    <path d="M66 47 L66 12"/>
    <path d="M53 26 L66 16 L82 26"/>
    <path d="M53 38 L66 29 L82 38"/>
    <path d="M6 64 C18 56 30 72 42 64 C54 56 66 72 84 64"/>
    <path d="M6 82 C18 74 30 90 42 82 C54 74 66 90 84 82"/>
  `);

  const emeaIcon = strokeIcon(90, 738, `
    <path d="M8 75 L82 75"/>
    <path d="M30 75 L30 16"/>
    <path d="M16 32 L30 20 L46 32"/>
    <path d="M16 49 L30 38 L46 49"/>
    <path d="M42 75 L76 30 L92 46"/>
    <path d="M62 48 L76 30"/>
    <path d="M44 88 L78 88"/>
  `);

  const latamIcon = strokeIcon(100, 931, `
    <path d="M12 36 C26 10 70 10 84 36"/>
    <path d="M12 36 C32 41 45 41 84 36"/>
    <path d="M48 19 L48 82"/>
    <path d="M48 38 C41 60 36 72 31 82"/>
    <path d="M25 80 A11 11 0 1 0 25 58 A11 11 0 1 0 25 80"/>
    <path d="M29 36 C32 23 37 16 48 16"/>
    <path d="M64 36 C62 23 56 16 48 16"/>
  `, 82, 96);

  const apacIcon = strokeIcon(94, 1052, `
    <path d="M48 17 C36 10 22 13 15 24"/>
    <path d="M48 17 C60 9 76 12 84 24"/>
    <path d="M48 17 C42 29 39 43 44 57"/>
    <path d="M48 17 C56 31 59 43 54 58"/>
    <path d="M44 57 C30 54 18 61 10 74"/>
    <path d="M54 58 C68 54 80 61 88 74"/>
    <path d="M10 76 C22 68 34 84 46 76 C58 68 70 84 88 76"/>
    <path d="M10 91 C22 83 34 99 46 91 C58 83 70 99 88 91"/>
  `);

  const statsCard = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="148" rx="24" fill="#ff375b"/>
      ${lines.map((line, index) =>
        `<text x="${x + width / 2}" y="${y + 42 + index * 35}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`
      ).join('')}
    </g>`;

  function annotations(zh) {
    return `
      <g font-family="'Noto Sans',Arial,sans-serif">
        ${northAmericaIcon}
        ${emeaIcon}
        ${latamIcon}
        ${apacIcon}
        ${statsCard(102, 1174, 304, [
          { text: zh ? '预订夜晚数' : 'Nights booked', size: 26, weight: 800 },
          { text: zh ? '1.34 亿' : '134M', size: 29, weight: 400 },
          { text: zh ? '同比 +9%' : '+9% Y/Y', size: 21, weight: 400 },
        ])}
        ${statsCard(417, 1174, 157, [
          { text: 'GBV', size: 25, weight: 800 },
          { text: '$22.9B', size: 25, weight: 400 },
          { text: zh ? '同比 +12%' : '+12% Y/Y fxn', size: zh ? 18 : 17, weight: 400 },
        ])}
        <text x="335" y="1374" text-anchor="middle" font-size="30" font-weight="400" fill="${NOTE}">
          ${zh ? 'GBV = 总预订价值' : 'GBV = Gross Booking Value'}
        </text>
      </g>`;
  }

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 10) => ({ x, top, anchor, lineGap, lines });

  function fixedLayout(zh) {
    const strings = zh ? {
      northAmerica: ['北美', '地区'],
      emea: ['欧洲/中东', '和非洲'],
      latam: ['拉美'],
      apac: ['亚太'],
      revenue: '收入',
      grossProfit: '毛利润',
      costOfRevenue: ['收入', '成本'],
      operatingProfit: '营业利润',
      operatingExpenses: ['运营', '费用'],
      other: '其他',
      netProfit: '净利润',
      tax: '税费',
      sm: '销售与市场',
      product: '产品',
      support: '客服支持',
      ga: '管理费用',
      yoy: (value) => `同比 ${value}`,
      margin: (value) => `利润率 ${value}`,
      share: (value) => `占收入 ${value}`,
      pp: (value) => `同比 ${value} 个百分点`,
    } : {
      northAmerica: ['North', 'America'],
      emea: ['EMEA'],
      latam: ['LATAM'],
      apac: ['APAC'],
      revenue: 'Revenue',
      grossProfit: 'Gross profit',
      costOfRevenue: ['Cost of', 'revenue'],
      operatingProfit: 'Operating profit',
      operatingExpenses: ['Operating', 'expenses'],
      other: 'Other',
      netProfit: 'Net profit',
      tax: 'Tax',
      sm: 'S&M',
      product: 'Product',
      support: 'Support',
      ga: 'G&A',
      yoy: (value) => `${value} Y/Y`,
      margin: (value) => `${value} margin`,
      share: (value) => `${value} of revenue`,
      pp: (value) => `${value} Y/Y`,
    };

    const sourceBlocks = (valueTop, nameX, nameTop, names, yoy) => [
      block(434, valueTop, [
        line('$value', 38, 400),
        line(strings.yoy(yoy), 29, 400, NOTE),
      ]),
      block(nameX, nameTop, names.map((name) => line(name, zh && name.length > 5 ? 34 : 40, 800)), 'start', 8),
    ];

    return {
      scale: 117,
      nodes: {
        north_america: { x: 399, y: 425, width: 71, height: 138 },
        emea: { x: 399, y: 705, width: 71, height: 168 },
        latam: { x: 399, y: 997, width: 71, height: 19 },
        apac: { x: 399, y: 1132, width: 71, height: 22 },
        revenue: { x: 866, y: 644, width: 70, height: 352 },
        gross_profit: { x: 1333, y: 554, width: 71, height: 305 },
        cost_of_revenue: { x: 1340, y: 1056, width: 72, height: 46 },
        operating_profit: { x: 1801, y: 434, width: 70, height: 139 },
        operating_expenses: { x: 1801, y: 792, width: 70, height: 164 },
        other_income: { x: 2151, y: 485, width: 70, height: 13 },
        net_profit: { x: 2267, y: 329, width: 71, height: 116 },
        tax: { x: 2267, y: 642, width: 71, height: 33 },
        sm: { x: 2267, y: 810, width: 71, height: 54 },
        product: { x: 2267, y: 972, width: 71, height: 49 },
        support: { x: 2267, y: 1124, width: 71, height: 29 },
        ga: { x: 2267, y: 1266, width: 71, height: 26 },
      },
      labels: {
        north_america: { blocks: sourceBlocks(326, 204, 445, strings.northAmerica, '+3%') },
        emea: { blocks: sourceBlocks(603, 204, zh ? 741 : 764, strings.emea, '+14%') },
        latam: { blocks: sourceBlocks(908, 204, 982, strings.latam, '+18%') },
        apac: { blocks: sourceBlocks(1043, 204, 1118, strings.apac, '+16%') },
        revenue: {
          blocks: [block(901, 491, [
            line(strings.revenue, 40, 800),
            line('$value', 38, 400),
            line(strings.yoy('+10%'), 29, 400, NOTE),
          ])],
        },
        gross_profit: {
          blocks: [block(1369, 370, [
            line(strings.grossProfit, 40, 800),
            line('$value', 38, 400),
            line(strings.margin('87%'), 29, 400, NOTE),
            line(strings.pp(zh ? '(1)' : '(1pp)'), 29, 400, NOTE),
          ])],
        },
        cost_of_revenue: {
          blocks: [block(1369, 1114, [
            ...strings.costOfRevenue.map((name) => line(name, 38, 800)),
            line('$value', 38, 400),
          ], 'middle', 9)],
        },
        operating_profit: {
          blocks: [block(1836, 251, [
            line(strings.operatingProfit, 40, 800),
            line('$value', 38, 400),
            line(strings.margin('40%'), 29, 400, NOTE),
            line(strings.pp(zh ? '(1)' : '(1pp)'), 29, 400, NOTE),
          ])],
        },
        operating_expenses: {
          blocks: [block(1836, 972, [
            ...strings.operatingExpenses.map((name) => line(name, 38, 800)),
            line('$value', 38, 400),
          ], 'middle', 9)],
        },
        other_income: {
          blocks: [block(2186, 516, [
            line(strings.other, 32, 800),
            line('$value', 32, 400),
          ], 'middle', 9)],
        },
        net_profit: {
          blocks: [block(2374, 336, [
            line(strings.netProfit, 40, 800),
            line('$value', 38, 400),
            line(strings.margin('34%'), 29, 400, NOTE),
            line(strings.pp(zh ? '(3)' : '(3pp)'), 29, 400, NOTE),
          ], 'start')],
        },
        tax: {
          blocks: [block(2468, 618, [
            line(strings.tax, 32, 800),
            line('($0.4B)', 32, 400),
          ], 'middle', 9)],
        },
        sm: {
          blocks: [block(RIGHT_LABEL_X, 824, [
            line(`${strings.sm} ($0.6B)`, zh ? 30 : 32, 800),
            line(strings.share('16%'), 29, 400, NOTE),
            line(strings.pp(zh ? '+2' : '+2pp'), 29, 400, NOTE),
          ], 'start')],
        },
        product: {
          blocks: [block(2350, 984, [
            line(`${strings.product} ($0.6B)`, zh ? 30 : 32, 800),
            line(strings.share('14%'), 29, 400, NOTE),
            line(strings.pp(zh ? '+0' : '+0pp'), 29, 400, NOTE),
          ], 'start')],
        },
        support: {
          blocks: [block(2359, 1123, [
            line(`${strings.support} ($0.4B)`, zh ? 30 : 32, 800),
            line(strings.share('9%'), 29, 400, NOTE),
            line(strings.pp(zh ? '(1)' : '(1pp)'), 29, 400, NOTE),
          ], 'start')],
        },
        ga: {
          blocks: [block(2387, 1257, [
            line(`${strings.ga} ($0.3B)`, zh ? 30 : 32, 800),
            line(strings.share('8%'), 29, 400, NOTE),
            line(strings.pp(zh ? '(1)' : '(1pp)'), 29, 400, NOTE),
          ], 'start')],
        },
      },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'airbnb-q3-fy25',
    name: 'Airbnb · Q3 FY25',
    company: 'Airbnb',
    meta: {
      company: 'Airbnb',
      title: 'Airbnb Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/airbnb-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 193,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2147,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 244,
      logoHeight: 244,
      logoY: 235,
      logoViewBox: '0 0 244 244',
      logoSvg: airbnbLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PINK, label: PINK },
        hub: { node: PINK, label: PINK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: PINK_LINK,
        hub: PINK_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: fixedLayout(false),
    nodes: [
      { id: 'north_america', col: 0, order: 0, type: 'source', label: 'North America', value: 1.6, notes: ['+3% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'emea', col: 0, order: 1, type: 'source', label: 'EMEA', value: 2.0, valueText: '$2.0B', notes: ['+14% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'latam', col: 0, order: 2, type: 'source', label: 'LATAM', value: 0.2, notes: ['+18% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 0.3, notes: ['+16% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 4.1, notes: ['+10% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.5, notes: ['87% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.5, valueText: '($0.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.6, notes: ['40% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.9, valueText: '($1.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.4, notes: ['34% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.4, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 0.6, notes: ['16% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 5, order: 3, type: 'cost', label: 'Product', value: 0.6, notes: ['14% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'support', col: 5, order: 4, type: 'cost', label: 'Support', value: 0.4, notes: ['9% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 0.3, notes: ['8% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'north_america', target: 'revenue', value: 1.6, width: 138, sourceWidth: 138, targetWidth: 138, sourceOrder: 0, targetOrder: 0 },
      { source: 'emea', target: 'revenue', value: 2.0, width: 168, sourceWidth: 168, targetWidth: 173, sourceOrder: 0, targetOrder: 1 },
      { source: 'latam', target: 'revenue', value: 0.2, width: 19, sourceWidth: 19, targetWidth: 19, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'revenue', value: 0.3, width: 22, sourceWidth: 22, targetWidth: 22, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 3.5, width: 305, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.5, width: 46, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.6, width: 139, sourceWidth: 139, targetWidth: 139, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.9, width: 164, sourceWidth: 166, targetWidth: 164, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.2, width: 103, sourceWidth: 106, targetWidth: 103, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, width: 33, sourceWidth: 33, targetWidth: 33, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.2, width: 13, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 0.6, width: 54, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'product', value: 0.6, width: 49, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'support', value: 0.4, width: 35, sourceWidth: 35, targetWidth: 29, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.3, width: 26, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Airbnb · 2025 财年第三季度',
        meta: {
          title: 'Airbnb 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 1850,
        },
        annotationsSvg: annotations(true),
        nodes: {
          north_america: { label: '北美', notes: ['同比 +3%'] },
          emea: { label: '欧洲、中东和非洲', notes: ['同比 +14%'] },
          latam: { label: '拉美', notes: ['同比 +18%'] },
          apac: { label: '亚太', notes: ['同比 +16%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 87%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 40%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 34%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 16%', '同比 +2 个百分点'] },
          product: { label: '产品', notes: ['占收入 14%', '同比 +0 个百分点'] },
          support: { label: '客服支持', notes: ['占收入 9%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
        },
        layout: fixedLayout(true),
      },
    },
  });
})();
