/* ====================================================================
 * Cloudflare - Q4 FY25 income statement ($M)
 * Fixed-layout reconstruction of input/processed/cloudflare-q4-fy25.png.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const ORANGE = '#f48120';
  const ORANGE_LINK = '#f2bf93';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const DARK = '#404041';
  const RIGHT_LABEL_X = 2400;

  const cloudflareLogo = `
    <g transform="translate(300 0) scale(0.91)">
      <path d="M43 88C44 58 70 39 100 43C111 15 138 0 171 0C209 0 238 23 244 59C268 59 286 77 286 104C286 127 269 143 246 143H42C19 143 1 126 1 104C1 81 18 65 40 64C40 72 41 80 43 88Z" fill="#f38120"/>
      <path d="M225 58C252 58 273 80 273 107C273 119 269 130 262 138H187C172 138 168 118 184 113L202 108C215 105 218 88 205 81C211 67 218 61 225 58Z" fill="#faad3f"/>
      <path d="M74 92H206C214 92 214 82 205 82H83C75 82 70 92 74 92Z" fill="#ffffff"/>
    </g>
    <text x="20" y="186" font-family="Montserrat,Arial,sans-serif" font-size="63" font-weight="800" letter-spacing="9" fill="${DARK}"
      textLength="550" lengthAdjust="spacingAndGlyphs">CLOUDFLARE</text>
    <text x="570" y="137" font-family="Montserrat,Arial,sans-serif" font-size="15" font-weight="700" fill="${DARK}">R</text>
  `;

  const kpiCard = (x, y, width, height, rx, content) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="#f38120"/>
      ${content}
    </g>`;

  const annotations = ({ dbnrGrowth, customerLineOne, customerLineTwo, footnote }) => `
    ${kpiCard(33, 1155, 164, 164, 35, `
      <text x="115" y="1208" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">DBNR</text>
      <text x="115" y="1252" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">120%</text>
      <text x="115" y="1294" text-anchor="middle" font-size="28" font-weight="400" fill="#ffffff">${dbnrGrowth}</text>
    `)}
    ${kpiCard(204, 1153, 568, 163, 28, `
      <text x="488" y="1228" text-anchor="middle" font-size="30" fill="#ffffff">${customerLineOne}</text>
      <text x="488" y="1267" text-anchor="middle" font-size="30" fill="#ffffff">${customerLineTwo}</text>
    `)}
    <text x="102" y="1359" font-family="Montserrat,Arial,sans-serif" font-size="29" font-weight="500" fill="${NOTE}">${footnote}</text>
  `;

  const annotationsEn = annotations({
    dbnrGrowth: '+9pp Y/Y',
    customerLineOne: '<tspan font-weight="800">Customers 332K</tspan><tspan font-weight="400"> +40% Y/Y</tspan>',
    customerLineTwo: '<tspan font-weight="800">&gt; $100K</tspan><tspan font-weight="400"> 4.3K +23% Y/Y</tspan>',
    footnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = annotations({
    dbnrGrowth: '同比 +9点',
    customerLineOne: '<tspan font-weight="800">客户 332K</tspan><tspan font-weight="400">，同比 +40%</tspan>',
    customerLineTwo: '<tspan font-weight="800">超过 $100K</tspan><tspan font-weight="400"> 4.3K，同比 +23%</tspan>',
    footnote: 'DBNR = 美元净留存率',
  });

  const line = (text, size, extra = {}) => ({ text, size, ...extra });
  const block = (x, top, lines, extra = {}) => ({ x, top, anchor: 'middle', lineGap: 8, lines, ...extra });

  const labelLayout = (copy) => ({
    united_states: {
      blocks: [
        block(438, 247, [line('$value', 39), line(copy.usGrowth, 28, { color: NOTE })], { lineGap: 9 }),
        block(210, 388, copy.us.map((text) => line(text, 40, { weight: 800 })), { anchor: 'start' }),
      ],
    },
    emea: {
      blocks: [
        block(438, 562, [line('$value', 39), line(copy.emeaGrowth, 28, { color: NOTE })], { lineGap: 9 }),
        block(220, 687, copy.emea.map((text) => line(text, 40, { weight: 800 })), { anchor: 'start' }),
      ],
    },
    apac: {
      blocks: [
        block(438, 808, [line('$value', 39), line(copy.apacGrowth, 28, { color: NOTE })], { lineGap: 9 }),
        block(224, 910, copy.apac.map((text) => line(text, 40, { weight: 800 })), { anchor: 'start' }),
      ],
    },
    other: {
      blocks: [
        block(438, 1014, [line('$value', 39), line(copy.otherGrowth, 28, { color: NOTE })], { lineGap: 9 }),
        block(224, 1099, copy.other.map((text) => line(text, 40, { weight: 800 })), { anchor: 'start' }),
      ],
    },
    revenue: {
      blocks: [
        block(904, 454, [line(copy.revenue, 40, { weight: 800 }), line('$value', 39), line(copy.revenueGrowth, 28, { color: NOTE })], { lineGap: 9 }),
      ],
    },
    gross_profit: {
      blocks: [
        block(1371, 296, [
          line(copy.gross, 40, { weight: 800 }), line('$value', 39),
          line(copy.grossMargin, 28, { color: NOTE }), line(copy.grossGrowth, 28, { color: NOTE }),
        ]),
      ],
    },
    cost_of_revenue: {
      blocks: [
        block(1386, 1080, [line(copy.cost[0], 36, { weight: 800 }), line(copy.cost[1], 36, { weight: 800 }), line('$value', 36)]),
      ],
    },
    operating_loss: {
      blocks: [
        block(1676, 979, [
          line(copy.operatingLoss[0], 40, { weight: 800 }), line(copy.operatingLoss[1], 40, { weight: 800 }),
          line('$value', 39), line(copy.lossMargin, 28, { color: NOTE }), line(copy.lossGrowth, 28, { color: NOTE }),
        ]),
      ],
    },
    operating_expenses: {
      blocks: [
        block(1841, 435, [line(copy.operatingExpenses[0], 40, { weight: 800 }), line(copy.operatingExpenses[1], 40, { weight: 800 }), line('$value', 39)], { lineGap: 9 }),
      ],
    },
    sm: {
      blocks: [
        block(RIGHT_LABEL_X, 442, [line(copy.sm, 31, { weight: 800 }), line('$value', 31), line(copy.smShare, 29, { color: NOTE }), line(copy.smGrowth, 29, { color: NOTE })], { anchor: 'start' }),
      ],
    },
    rnd: {
      blocks: [
        block(RIGHT_LABEL_X, 743, [line(copy.rnd, 31, { weight: 800 }), line('$value', 31), line(copy.rndShare, 29, { color: NOTE }), line(copy.rndGrowth, 29, { color: NOTE })], { anchor: 'start' }),
      ],
    },
    ga: {
      blocks: [
        block(RIGHT_LABEL_X, 1015, [line(copy.ga, 31, { weight: 800 }), line('$value', 31), line(copy.gaShare, 29, { color: NOTE }), line(copy.gaGrowth, 29, { color: NOTE })], { anchor: 'start' }),
      ],
    },
  });

  const labelsEn = labelLayout({
    us: ['United', 'States'], usGrowth: '+31% Y/Y', emea: ['EMEA'], emeaGrowth: '+31% Y/Y',
    apac: ['APAC'], apacGrowth: '+50% Y/Y', other: ['Other'], otherGrowth: '+28% Y/Y',
    revenue: 'Revenue', revenueGrowth: '+34% Y/Y', gross: 'Gross profit', grossMargin: '74% margin', grossGrowth: '(3pp) Y/Y',
    cost: ['Cost of', 'revenue'], operatingLoss: ['Operating', 'loss'], lossMargin: '(8%) margin', lossGrowth: '(0pp) Y/Y',
    operatingExpenses: ['Operating', 'expenses'], sm: 'S&M', smShare: '41% of revenue', smGrowth: '(1pp) Y/Y',
    rnd: 'R&D', rndShare: '23% of revenue', rndGrowth: '(3pp) Y/Y', ga: 'G&A', gaShare: '18% of revenue', gaGrowth: '+2pp Y/Y',
  });

  const labelsZh = labelLayout({
    us: ['美国'], usGrowth: '同比 +31%', emea: ['欧洲、中东', '和非洲'], emeaGrowth: '同比 +31%',
    apac: ['亚太'], apacGrowth: '同比 +50%', other: ['其他'], otherGrowth: '同比 +28%',
    revenue: '收入', revenueGrowth: '同比 +34%', gross: '毛利润', grossMargin: '利润率 74%', grossGrowth: '同比 (3 个百分点)',
    cost: ['收入', '成本'], operatingLoss: ['营业', '亏损'], lossMargin: '利润率 (8%)', lossGrowth: '同比 (0 个百分点)',
    operatingExpenses: ['营业', '费用'], sm: '销售与营销', smShare: '占收入 41%', smGrowth: '同比 (1 个百分点)',
    rnd: '研发', rndShare: '占收入 23%', rndGrowth: '同比 (3 个百分点)', ga: '管理费用', gaShare: '占收入 18%', gaGrowth: '同比 +2 个百分点',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'cloudflare-q4-fy25',
    name: 'Cloudflare · Q4 FY25',
    company: 'Cloudflare',
    meta: {
      company: 'Cloudflare',
      title: 'Cloudflare Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/cloudflare-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2365,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 563,
      logoHeight: 205,
      logoY: 216,
      logoViewBox: '0 0 670 205',
      logoSvg: cloudflareLogo,
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
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: ORANGE_LINK, hub: ORANGE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        united_states: { x: 402, y: 337, width: 71, height: 173 },
        emea: { x: 402, y: 649, width: 71, height: 95 },
        apac: { x: 402, y: 896, width: 71, height: 55 },
        other: { x: 402, y: 1100, width: 71, height: 26 },
        revenue: { x: 869, y: 599, width: 70, height: 349 },
        gross_profit: { x: 1336, y: 478, width: 71, height: 258 },
        cost_of_revenue: { x: 1351, y: 966, width: 71, height: 90 },
        operating_loss: { x: 1641, y: 929, width: 71, height: 26 },
        operating_expenses: { x: 1806, y: 592, width: 70, height: 285 },
        sm: { x: 2270, y: 428, width: 71, height: 143 },
        rnd: { x: 2270, y: 737, width: 71, height: 79 },
        ga: { x: 2270, y: 1009, width: 71, height: 60 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 304, notes: ['+31% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'emea', col: 0, order: 1, type: 'source', label: 'EMEA', value: 168, notes: ['+31% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'apac', col: 0, order: 2, type: 'source', label: 'APAC', value: 97, notes: ['+50% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other', col: 0, order: 3, type: 'source', label: 'Other', value: 46, notes: ['+28% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 615, notes: ['+34% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 453, notes: ['74% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 162, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -49, notes: ['(8%) margin', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 502, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 251, notes: ['41% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 142, notes: ['23% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 109, notes: ['18% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 304, width: 173, sourceOrder: 0, targetOrder: 0 },
      { source: 'emea', target: 'revenue', value: 168, width: 95, sourceOrder: 0, targetOrder: 1 },
      { source: 'apac', target: 'revenue', value: 97, width: 55, sourceOrder: 0, targetOrder: 2 },
      { source: 'other', target: 'revenue', value: 46, width: 26, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 453, width: 258, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 162, sourceWidth: 91, targetWidth: 90, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 453, width: 258, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 49, sourceWidth: 26, targetWidth: 27, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 251, sourceWidth: 143, targetWidth: 143, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 142, sourceWidth: 80, targetWidth: 79, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 109, sourceWidth: 62, targetWidth: 60, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Cloudflare · 2025 财年第四季度',
        meta: {
          title: 'Cloudflare 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 2030,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +31%'] },
          emea: { label: '欧洲、中东和非洲', notes: ['同比 +31%'] },
          apac: { label: '亚太', notes: ['同比 +50%'] },
          other: { label: '其他', notes: ['同比 +28%'] },
          revenue: { label: '收入', notes: ['同比 +34%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (8%)', '同比 (0 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与营销', notes: ['占收入 41%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 23%', '同比 (3 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 18%', '同比 +2 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
