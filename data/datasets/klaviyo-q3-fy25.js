/* ====================================================================
 * Klaviyo - Q3 FY25 income statement ($M)
 * Reconstructed from input/processed/klaviyo-q3-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const DARK = '#222425';
  const DARK_LINK = '#989898';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9cce9d';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2450;
  const SCALE = 1.17;
  const h = (value) => Math.round(value * SCALE * 10) / 10;

  const kpiCard = (x, y, width, height, rx, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${DARK}"/>
      ${lines.map((line) => `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle"
        font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const usFlag = (x, y, width = 49, height = 32) => {
    const stripe = height / 13;
    return `
      <g transform="translate(${x} ${y})">
        <rect x="0" y="0" width="${width}" height="${height}" fill="#ffffff"/>
        ${Array.from({ length: 7 }, (_item, index) =>
          `<rect x="0" y="${index * stripe * 2}" width="${width}" height="${stripe}" fill="#e53b4d"/>`
        ).join('')}
        <rect x="0" y="0" width="${width * 0.43}" height="${stripe * 7}" fill="#2b5aa8"/>
        <g fill="#ffffff" opacity="0.92">
          ${Array.from({ length: 18 }, (_item, index) => {
            const col = index % 6;
            const row = Math.floor(index / 6);
            return `<circle cx="${4 + col * 3.2}" cy="${4 + row * 4.2}" r="0.8"/>`;
          }).join('')}
        </g>
      </g>`;
  };

  const globe = (x, y, size, region) => {
    const land =
      region === 'americas'
        ? `<path d="M26 20C35 12 50 13 59 23C50 27 49 35 40 38C35 42 35 49 44 55C40 64 32 68 27 60C25 53 20 50 22 43C13 39 13 27 26 20Z"/>
           <path d="M45 58C53 58 61 67 57 77C49 78 44 71 45 58Z"/>`
        : region === 'apac'
          ? `<path d="M26 18C39 9 58 13 70 25C62 25 55 29 49 34C42 29 33 33 29 40C23 35 18 26 26 18Z"/>
             <path d="M52 45C62 47 71 53 74 62C66 68 51 69 43 61C43 53 46 48 52 45Z"/>
             <path d="M71 25C80 29 86 36 88 45C80 45 74 39 71 25Z" fill="#6ed441"/>`
          : `<path d="M32 31C43 23 58 24 69 34C64 42 56 39 52 47C44 48 36 43 32 31Z"/>
             <path d="M54 48C65 46 77 52 82 63C72 74 57 72 49 62C49 56 51 52 54 48Z"/>
             <path d="M27 55C36 52 43 56 47 65C41 72 28 67 27 55Z"/>`;
    return `
      <g transform="translate(${x} ${y}) scale(${size / 100})">
        <circle cx="50" cy="50" r="43" fill="#ffffff" stroke="#c9c9c9" stroke-width="2"/>
        <ellipse cx="50" cy="50" rx="24" ry="43" fill="none" stroke="#e1e1e1" stroke-width="1.5"/>
        <ellipse cx="50" cy="50" rx="43" ry="15" fill="none" stroke="#e1e1e1" stroke-width="1.5"/>
        <path d="M8 50H92M50 8V92" stroke="#e6e6e6" stroke-width="1.2"/>
        <g fill="#2d7f39">${land}</g>
        <path d="M17 74C29 86 59 91 81 77" fill="none" stroke="#a9a9a9" stroke-width="5" opacity="0.65"/>
        <path d="M82 19C90 29 94 43 92 58" fill="none" stroke="#a9a9a9" stroke-width="8" opacity="0.7"/>
      </g>`;
  };

  const annotations = (labels) => `
    <g font-family="'Noto Sans',Arial,sans-serif">
      ${usFlag(116, 624)}
      ${globe(684, 456, 76, 'americas')}
      ${globe(606, 1010, 72, 'apac')}
      ${globe(606, 1200, 72, 'emea')}
      ${kpiCard(72, 1150, 165, 164, 33, [
        { text: labels.dbnr, y: 52, size: 29, weight: 800 },
        { text: '109%', y: 96, size: 31 },
        { text: labels.dbnrGrowth, y: 138, size: 28 },
      ])}
      ${kpiCard(246, 1150, 321, 164, 33, [
        { text: labels.customers, y: 55, size: 28, weight: 800 },
        { text: labels.customerCount, y: 99, size: 30 },
      ])}
      <text x="98" y="1360" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    dbnr: 'DBNR',
    dbnrGrowth: '+1pp Q/Q',
    customers: 'Customers &gt; $50K',
    customerCount: '3,563 (+36% Y/Y)',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });
  const annotationsZh = annotations({
    dbnr: 'DBNR',
    dbnrGrowth: '环比 +1点',
    customers: '客户 &gt; $50K',
    customerCount: '3,563（同比 +36%）',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const klaviyoLogo = `
    <text x="0" y="124" font-family="Georgia,'Times New Roman',serif" font-size="142" font-weight="600"
      fill="${DARK}" textLength="494" lengthAdjust="spacingAndGlyphs">klaviyo</text>
    <path d="M507 42H552L540 60L552 78H507Z" fill="${DARK}"/>
    <text x="555" y="78" font-family="Montserrat,Arial,sans-serif" font-size="10" font-weight="600" fill="${DARK}">TM</text>
  `;

  const labels = {
    united_states: { blocks: [
      { x: 496, top: 421, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 180, top: 613, anchor: 'start', lines: [{ text: 'United States', size: 40, weight: 800 }] },
    ] },
    other_americas: { blocks: [
      { x: 496, top: 808, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 127, top: 899, anchor: 'start', lines: [{ text: 'Other Americas', size: 40, weight: 800 }] },
    ] },
    americas: { blocks: [{ x: 784, top: 485, anchor: 'start', lineGap: 8, lines: [
      { text: 'Americas', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    apac: { blocks: [
      { x: 870, top: 935, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '+31% Y/Y', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 704, top: 1037, anchor: 'start', lines: [{ text: 'APAC', size: 40, weight: 800 }] },
    ] },
    emea: { blocks: [
      { x: 870, top: 1090, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '+48% Y/Y', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 704, top: 1218, anchor: 'start', lines: [{ text: 'EMEA', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 1244, top: 589, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Revenue', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '+32% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1617, top: 451, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Gross profit', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '76% margin', size: 28, weight: 400, color: NOTE },
      { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1617, top: 1221, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Cost of', size: 36, weight: 800 },
      { text: 'revenue', size: 36, weight: 800 },
      { text: '$value', size: 36, weight: 400 },
    ] }] },
    operating_loss: { blocks: [{ x: 1853, top: 1134, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Operating', size: 40, weight: 800 },
      { text: 'loss', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '(3%) margin', size: 28, weight: 400, color: NOTE },
      { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 2004, top: 586, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Operating', size: 38, weight: 800 },
      { text: 'expenses', size: 38, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 581, anchor: 'start', lineGap: 8, lines: [
      { text: 'S&M', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
      { text: '41% of revenue', size: 26, weight: 400, color: NOTE },
      { text: '(1pp) Y/Y', size: 26, weight: 400, color: NOTE },
    ] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 897, anchor: 'start', lineGap: 8, lines: [
      { text: 'R&D', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
      { text: '23% of revenue', size: 26, weight: 400, color: NOTE },
      { text: '(0pp) Y/Y', size: 26, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1162, anchor: 'start', lineGap: 8, lines: [
      { text: 'G&A', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
      { text: '15% of revenue', size: 26, weight: 400, color: NOTE },
      { text: '(2pp) Y/Y', size: 26, weight: 400, color: NOTE },
    ] }] },
  };

  const zhLabels = {
    united_states: { blocks: [
      { ...labels.united_states.blocks[0], lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '同比 +27%', size: 28, weight: 400, color: NOTE },
      ] },
      { ...labels.united_states.blocks[1], lines: [{ text: '美国', size: 40, weight: 800 }] },
    ] },
    other_americas: { blocks: [
      { ...labels.other_americas.blocks[0], lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '同比 +27%', size: 28, weight: 400, color: NOTE },
      ] },
      { ...labels.other_americas.blocks[1], lines: [{ text: '美洲其他地区', size: 40, weight: 800 }] },
    ] },
    americas: { blocks: [{ ...labels.americas.blocks[0], lines: [
      { text: '美洲', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '同比 +27%', size: 28, weight: 400, color: NOTE },
    ] }] },
    apac: { blocks: [
      { ...labels.apac.blocks[0], lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '同比 +31%', size: 28, weight: 400, color: NOTE },
      ] },
      { ...labels.apac.blocks[1], lines: [{ text: '亚太', size: 40, weight: 800 }] },
    ] },
    emea: { blocks: [
      { ...labels.emea.blocks[0], lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '同比 +48%', size: 28, weight: 400, color: NOTE },
      ] },
      { ...labels.emea.blocks[1], lines: [{ text: 'EMEA', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ ...labels.revenue.blocks[0], lines: [
      { text: '收入', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '同比 +32%', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ ...labels.gross_profit.blocks[0], lines: [
      { text: '毛利润', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '利润率 76%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ ...labels.cost_of_revenue.blocks[0], lines: [
      { text: '收入', size: 36, weight: 800 },
      { text: '成本', size: 36, weight: 800 },
      { text: '$value', size: 36, weight: 400 },
    ] }] },
    operating_loss: { blocks: [{ ...labels.operating_loss.blocks[0], lines: [
      { text: '营业', size: 40, weight: 800 },
      { text: '亏损', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '利润率 (3%)', size: 28, weight: 400, color: NOTE },
      { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ ...labels.operating_expenses.blocks[0], lines: [
      { text: '运营', size: 38, weight: 800 },
      { text: '费用', size: 38, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ] }] },
    sm: { blocks: [{ ...labels.sm.blocks[0], x: 2435, lines: [
      { text: '销售与营销', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
      { text: '占收入 41%', size: 26, weight: 400, color: NOTE },
      { text: '同比 (1 个百分点)', size: 26, weight: 400, color: NOTE },
    ] }] },
    rnd: { blocks: [{ ...labels.rnd.blocks[0], x: 2435, lines: [
      { text: '研发', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
      { text: '占收入 23%', size: 26, weight: 400, color: NOTE },
      { text: '同比 (0 个百分点)', size: 26, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ ...labels.ga.blocks[0], x: 2435, lines: [
      { text: '管理费用', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
      { text: '占收入 15%', size: 26, weight: 400, color: NOTE },
      { text: '同比 (2 个百分点)', size: 26, weight: 400, color: NOTE },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'klaviyo-q3-fy25',
    name: 'Klaviyo · Q3 FY25',
    company: 'Klaviyo',
    meta: {
      company: 'Klaviyo',
      title: 'Klaviyo Q3 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/klaviyo-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2180,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 558,
      logoHeight: 193,
      logoY: 235,
      logoViewBox: '0 0 580 160',
      logoSvg: klaviyoLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: DARK_LINK, hub: DARK_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: SCALE,
      nodes: {
        united_states: { x: 460, y: 529, width: 73, height: h(186) },
        other_americas: { x: 460, y: 915, width: 73, height: h(15) },
        americas: { x: 834, y: 628, width: 73, height: h(201) },
        apac: { x: 834, y: 1044, width: 73, height: h(32) },
        emea: { x: 834, y: 1197, width: 73, height: h(78) },
        revenue: { x: 1208, y: 733, width: 73, height: h(311) },
        gross_profit: { x: 1581, y: 629, width: 73, height: h(235) },
        cost_of_revenue: { x: 1581, y: 1113, width: 73, height: h(76) },
        operating_loss: { x: 1817, y: 1092, width: 73, height: h(11) },
        operating_expenses: { x: 1968, y: 742, width: 73, height: h(246) },
        sm: { x: 2328, y: 568, width: 73, height: h(128) },
        rnd: { x: 2328, y: 892, width: 73, height: h(73) },
        ga: { x: 2328, y: 1166, width: 73, height: h(45) },
      },
      labels,
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 186, notes: ['+27% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'other_americas', col: 0, order: 1, type: 'source', label: 'Other Americas', value: 15, notes: ['+27% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'americas', col: 1, order: 0, type: 'source', label: 'Americas', value: 201, notes: ['+27% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'apac', col: 1, order: 1, type: 'source', label: 'APAC', value: 32, notes: ['+31% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'emea', col: 1, order: 2, type: 'source', label: 'EMEA', value: 78, notes: ['+48% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 311, notes: ['+32% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 235, notes: ['76% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 76, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 4, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -11, notes: ['(3%) margin', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 246, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 0, type: 'cost', label: 'S&M', value: 128, notes: ['41% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 1, type: 'cost', label: 'R&D', value: 73, notes: ['23% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 2, type: 'cost', label: 'G&A', value: 45, notes: ['15% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'americas', value: 186, width: h(186), sourceOrder: 0, targetOrder: 0 },
      { source: 'other_americas', target: 'americas', value: 15, width: h(15), sourceOrder: 0, targetOrder: 1 },
      { source: 'americas', target: 'revenue', value: 201, width: h(201), sourceOrder: 0, targetOrder: 0 },
      { source: 'apac', target: 'revenue', value: 32, width: h(32), sourceOrder: 0, targetOrder: 1 },
      { source: 'emea', target: 'revenue', value: 78, width: h(78), sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 235, width: h(235), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 76, width: h(76), sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 235, width: h(235), sourceOrder: 0, targetOrder: 0 },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 11, width: h(11),
        sourceOrder: 0, targetOrder: 1, y1: 1023.4,
        curve: { c1x: 1915, c1y: 1098.4, c2x: 1940, c2y: 1023.4 },
      },
      { source: 'operating_expenses', target: 'sm', value: 128, width: h(128), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 73, width: h(73), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 45, width: h(45), sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Klaviyo · 2025 财年第三季度',
        meta: {
          title: 'Klaviyo 2025 财年第三季度利润表',
          period: '',
          periodNote: '',
          titleSize: 112,
          titleTextLength: 1740,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +27%'] },
          other_americas: { label: '美洲其他地区', notes: ['同比 +27%'] },
          americas: { label: '美洲', notes: ['同比 +27%'] },
          apac: { label: '亚太', notes: ['同比 +31%'] },
          emea: { label: 'EMEA', notes: ['同比 +48%'] },
          revenue: { label: '收入', notes: ['同比 +32%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (3%)', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          sm: { label: '销售与营销', notes: ['占收入 41%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 23%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 15%', '同比 (2 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
