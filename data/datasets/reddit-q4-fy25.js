/* ====================================================================
 * Reddit - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/reddit-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const BACKGROUND = '#f2f2f2';
  const GRAY = '#666666';
  const TITLE = '#155077';
  const ORANGE = '#ff2400';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY_LINK = '#858585';
  const ART_SCALE = 2667 / 4686;

  const statCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="52" fill="${ORANGE}"/>
      ${lines
        .map(
          (line, index) =>
            `<text x="${x + width / 2}" y="${y + 72 + index * 72}" text-anchor="middle" font-size="${line.size || 54}" font-weight="${line.weight || 700}" fill="#ffffff">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const redditWordmark = `
    <g transform="translate(482 392)">
      <path d="M96 209 C38 199 0 157 0 105 C0 46 49 0 111 0 C174 0 223 46 223 105 C223 159 184 201 126 210 L41 239 Z" fill="${ORANGE}"/>
      <circle cx="111" cy="103" r="78" fill="#ffffff"/>
      <path d="M73 74 C75 36 107 25 135 39" fill="none" stroke="#221822" stroke-width="8" stroke-linecap="round"/>
      <circle cx="151" cy="39" r="18" fill="#ffffff" stroke="#ffffff" stroke-width="4"/>
      <circle cx="72" cy="104" r="17" fill="${ORANGE}"/>
      <circle cx="151" cy="104" r="17" fill="${ORANGE}"/>
      <circle cx="67" cy="99" r="6" fill="#ffffff" opacity="0.8"/>
      <circle cx="146" cy="99" r="6" fill="#ffffff" opacity="0.8"/>
      <path d="M78 139 C96 159 128 159 146 139" fill="none" stroke="#221822" stroke-width="13" stroke-linecap="round"/>
      <text x="288" y="200" font-family="Arial,sans-serif" font-size="226" font-weight="800" fill="${ORANGE}">reddit</text>
    </g>`;

  const flagIcon = `
    <g transform="translate(1762 501)">
      <rect x="0" y="0" width="80" height="56" rx="4" fill="#ffffff"/>
      <path d="M0 0 H80 V4 H0 Z M0 8 H80 V12 H0 Z M0 16 H80 V20 H0 Z M0 24 H80 V28 H0 Z M0 32 H80 V36 H0 Z M0 40 H80 V44 H0 Z M0 48 H80 V52 H0 Z" fill="#d92d35"/>
      <rect x="0" y="0" width="36" height="30" fill="#28549f"/>
      <g fill="#ffffff" opacity="0.9">
        <circle cx="7" cy="6" r="1.5"/><circle cx="16" cy="6" r="1.5"/><circle cx="25" cy="6" r="1.5"/>
        <circle cx="11" cy="13" r="1.5"/><circle cx="20" cy="13" r="1.5"/><circle cx="29" cy="13" r="1.5"/>
        <circle cx="7" cy="20" r="1.5"/><circle cx="16" cy="20" r="1.5"/><circle cx="25" cy="20" r="1.5"/>
      </g>
    </g>`;

  const globeIcon = `
    <g transform="translate(1738 1735)">
      <circle cx="40" cy="40" r="39" fill="#1d57cf"/>
      <path d="M13 40 C18 20 36 9 56 13 C49 25 58 30 67 35 C55 37 48 44 45 58 C33 52 20 58 13 40Z" fill="#e8ef78"/>
      <path d="M40 8 C58 16 71 27 74 46 C64 46 55 39 52 31 C47 20 35 20 40 8Z" fill="#7fc65b"/>
      <path d="M32 52 C42 56 49 64 52 75 C36 80 19 70 11 56 C19 54 24 50 32 52Z" fill="#9bd760"/>
      <path d="M4 33 C11 15 27 3 47 2" fill="none" stroke="#9bdcff" stroke-width="4" opacity="0.45"/>
      <path d="M64 68 C50 80 28 80 12 64" fill="none" stroke="#001d5d" stroke-width="6" opacity="0.38"/>
    </g>`;

  const snooMascot = `
    <g transform="translate(2138 1812)">
      <path d="M254 108 C250 58 279 32 317 43" fill="none" stroke="#4b3142" stroke-width="25" stroke-linecap="round"/>
      <circle cx="343" cy="38" r="55" fill="#d7f8ff"/>
      <ellipse cx="190" cy="260" rx="170" ry="116" transform="rotate(-11 190 260)" fill="#ecfbff"/>
      <circle cx="58" cy="277" r="60" fill="#d8f9ff"/>
      <ellipse cx="285" cy="193" rx="74" ry="56" transform="rotate(25 285 193)" fill="#ecfbff"/>
      <ellipse cx="142" cy="270" rx="34" ry="47" transform="rotate(-8 142 270)" fill="${ORANGE}"/>
      <ellipse cx="260" cy="225" rx="34" ry="47" transform="rotate(-8 260 225)" fill="${ORANGE}"/>
      <circle cx="155" cy="252" r="10" fill="#fff3c0"/>
      <circle cx="270" cy="206" r="10" fill="#fff3c0"/>
      <path d="M185 326 C229 349 292 329 315 283 C268 275 224 287 185 326Z" fill="#241621"/>
      <path d="M131 379 C86 470 83 558 130 599 C181 553 180 454 131 379Z" fill="#ecfbff"/>
      <path d="M282 361 C346 427 350 529 305 600 C245 546 237 446 282 361Z" fill="#ecfbff"/>
      <path d="M350 321 C412 286 445 245 454 206 C478 245 470 313 395 361Z" fill="#ecfbff"/>
      <path d="M111 601 C143 617 183 615 203 594 C175 574 136 575 111 601Z" fill="#ecfbff"/>
      <path d="M267 599 C304 616 350 610 371 585 C338 569 293 573 267 599Z" fill="#ecfbff"/>
      <g opacity="0.24" fill="#8bd8ff">
        <ellipse cx="92" cy="509" rx="19" ry="56" transform="rotate(7 92 509)"/>
        <ellipse cx="324" cy="504" rx="21" ry="62" transform="rotate(-4 324 504)"/>
        <ellipse cx="63" cy="278" rx="60" ry="49"/>
      </g>
    </g>`;

  const annotations = (zh) => `
    <g transform="scale(${ART_SCALE})" font-family="Montserrat,Arial,sans-serif">
      <text x="176" y="1941" font-size="40" font-weight="500" fill="${GRAY}">${zh ? 'DAUq = 日活跃独立用户' : 'DAUq = Daily Active Uniques'}</text>
      <text x="205" y="2023" font-size="40" font-weight="500" fill="${GRAY}">${zh ? 'WAUq = 周活跃独立用户' : 'WAUq = Weekly Active Uniques'}</text>
      <text x="160" y="2101" font-size="40" font-weight="500" fill="${GRAY}">${zh ? 'ARPU = 每独立用户平均收入' : 'ARPU = Average Revenue Per Unique'}</text>
      ${statCard(86, 2127, 993, 263, zh ? [
        { text: '<tspan font-weight="800">平均 DAUq</tspan> 121M，同比 +19%', size: 48 },
        { text: '<tspan font-weight="800">平均 WAUq</tspan> 472M，同比 +24%', size: 48 },
      ] : [
        { text: '<tspan font-weight="800">Average DAUq</tspan> 121M +19% Y/Y' },
        { text: '<tspan font-weight="800">Average WAUq</tspan> 472M +24% Y/Y' },
      ])}
      ${statCard(1090, 2127, 611, 263, zh ? [
        { text: '<tspan font-weight="800">季度 ARPU</tspan>', size: 50 },
        { text: '$5.98', weight: 500 },
        { text: '同比 +42%', size: 43, weight: 500 },
      ] : [
        { text: '<tspan font-weight="800">Quarterly ARPU</tspan>' },
        { text: '$5.98', weight: 500 },
        { text: '+42% Y/Y', size: 43, weight: 500 },
      ])}
    </g>`;

  const labels = {
    advertising: { blocks: [
      { x: 405, top: 407, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+75% Y/Y', size: 29, weight: 400, color: GRAY }] },
      { x: 314, top: 599, anchor: 'end', lines: [{ text: 'Advertising', size: 40, weight: 800 }] },
    ] },
    other_revenue: { blocks: [
      { x: 405, top: 851, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+8% Y/Y', size: 29, weight: 400, color: GRAY }] },
      { x: 257, top: 925, anchor: 'end', lineGap: 10, lines: [{ text: 'Other', size: 40, weight: 800 }, { text: 'Data API Access', size: 29, weight: 400, color: GRAY }, { text: 'Model Training', size: 29, weight: 400, color: GRAY }] },
    ] },
    revenue_by_product: { blocks: [{ x: 709, top: 459, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+70% Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    united_states: { blocks: [{ x: 1022, top: 353, anchor: 'middle', lineGap: 9, lines: [{ text: 'United States', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+68% Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    rest_of_world: { blocks: [{ x: 1023, top: 1043, anchor: 'middle', lineGap: 9, lines: [{ text: 'Rest of World', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+78% Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    revenue: { blocks: [{ x: 1332, top: 460, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+70% Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    gross_profit: { blocks: [{ x: 1645, top: 313, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '92% margin', size: 29, weight: 400, color: GRAY }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    cost_of_revenue: { blocks: [{ x: 1644, top: 982, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1958, top: 237, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '32% margin', size: 29, weight: 400, color: GRAY }, { text: '+20pp Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    operating_expenses: { blocks: [{ x: 1959, top: 870, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    other_income: { blocks: [{ x: 2160, top: 506, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2345, top: 320, anchor: 'start', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '35% margin', size: 29, weight: 400, color: GRAY }, { text: '+18pp Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    tax: { blocks: [{ x: 2400, top: 606, anchor: 'start', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
    rnd: { blocks: [{ x: 2440, top: 742, anchor: 'middle', lineGap: 8, lines: [{ text: 'Research &', size: 31, weight: 800 }, { text: 'development', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }, { text: '27% of revenue', size: 28, weight: 400, color: GRAY }, { text: '(17pp) Y/Y', size: 28, weight: 400, color: GRAY }] }] },
    sm: { blocks: [{ x: 2440, top: 964, anchor: 'middle', lineGap: 8, lines: [{ text: 'Sales &', size: 31, weight: 800 }, { text: 'marketing', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }, { text: '23% of revenue', size: 28, weight: 400, color: GRAY }, { text: '+4pp Y/Y', size: 28, weight: 400, color: GRAY }] }] },
    ga: { blocks: [{ x: 2440, top: 1186, anchor: 'middle', lineGap: 8, lines: [{ text: 'General &', size: 31, weight: 800 }, { text: 'admin', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }, { text: '10% of revenue', size: 28, weight: 400, color: GRAY }, { text: '(7pp) Y/Y', size: 28, weight: 400, color: GRAY }] }] },
  };

  const zhLabels = {
    advertising: { blocks: [{ x: 400, top: 414, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +75%', size: 29, weight: 400, color: GRAY }] }, { x: 311, top: 600, anchor: 'end', lines: [{ text: '广告', size: 40, weight: 800 }] }] },
    other_revenue: { blocks: [{ x: 400, top: 856, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +8%', size: 29, weight: 400, color: GRAY }] }, { x: 255, top: 925, anchor: 'end', lineGap: 10, lines: [{ text: '其他', size: 40, weight: 800 }, { text: 'Data API 访问', size: 29, weight: 400, color: GRAY }, { text: '模型训练', size: 29, weight: 400, color: GRAY }] }] },
    revenue_by_product: { blocks: [{ x: 712, top: 462, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +70%', size: 29, weight: 400, color: GRAY }] }] },
    united_states: { blocks: [{ x: 1023, top: 354, anchor: 'middle', lineGap: 9, lines: [{ text: '美国', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +68%', size: 29, weight: 400 }] }] },
    rest_of_world: { blocks: [{ x: 1023, top: 1042, anchor: 'middle', lineGap: 9, lines: [{ text: '世界其他地区', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +78%', size: 29, weight: 400 }] }] },
    revenue: { blocks: [{ x: 1335, top: 463, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +70%', size: 29, weight: 400, color: GRAY }] }] },
    gross_profit: { blocks: [{ x: 1646, top: 313, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 92%', size: 29, weight: 400, color: GRAY }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: GRAY }] }] },
    cost_of_revenue: { blocks: [{ x: 1646, top: 983, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1958, top: 237, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 32%', size: 29, weight: 400, color: GRAY }, { text: '同比 +20 个百分点', size: 29, weight: 400, color: GRAY }] }] },
    operating_expenses: { blocks: [{ x: 1958, top: 870, anchor: 'middle', lineGap: 8, lines: [{ text: '运营', size: 36, weight: 800 }, { text: '费用', size: 36, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    other_income: { blocks: [{ x: 2158, top: 506, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2347, top: 321, anchor: 'start', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 35%', size: 29, weight: 400, color: GRAY }, { text: '同比 +18 个百分点', size: 29, weight: 400, color: GRAY }] }] },
    tax: { blocks: [{ x: 2380, top: 606, anchor: 'start', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
    rnd: { blocks: [{ x: 2454, top: 742, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '费用', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }, { text: '占收入 27%', size: 28, weight: 400, color: GRAY }, { text: '同比 (17 个百分点)', size: 28, weight: 400, color: GRAY }] }] },
    sm: { blocks: [{ x: 2454, top: 964, anchor: 'middle', lineGap: 8, lines: [{ text: '销售与', size: 31, weight: 800 }, { text: '市场', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }, { text: '占收入 23%', size: 28, weight: 400, color: GRAY }, { text: '同比 +4 个百分点', size: 28, weight: 400, color: GRAY }] }] },
    ga: { blocks: [{ x: 2454, top: 1186, anchor: 'middle', lineGap: 8, lines: [{ text: '一般及', size: 31, weight: 800 }, { text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }, { text: '占收入 10%', size: 28, weight: 400, color: GRAY }, { text: '同比 (7 个百分点)', size: 28, weight: 400, color: GRAY }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'reddit-q4-fy25',
    name: 'Reddit · Q4 FY25',
    company: 'Reddit',
    meta: {
      company: 'Reddit',
      title: 'Reddit Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/reddit-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2128,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      allowRasterAnnotations: true,
      nodeRadius: 0,
      titleColor: TITLE,
      subtitleColor: GRAY,
      noteColor: GRAY,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/reddit/company-wordmark-q4-fy25.png', x: 260, y: 222, width: 570, height: 168 },
      { key: 'united-states-flag', href: 'data/assets/raster-annotations/reddit/region-united-states-flag-q4-fy25.png', x: 990, y: 298, width: 58, height: 45 },
      { key: 'rest-of-world-globe', href: 'data/assets/raster-annotations/reddit/region-rest-of-world-globe-q4-fy25.png', x: 987, y: 978, width: 65, height: 65 },
      { key: 'snoo-mascot', href: 'data/assets/raster-annotations/reddit/company-snoo-mascot-q4-fy25.png', x: 1200, y: 1020, width: 290, height: 380 },
    ],
    layout: {
      nodes: {
        advertising: { x: 365, y: 506, width: 72, height: 254 },
        other_revenue: { x: 365, y: 950, width: 72, height: 12 },
        revenue_by_product: { x: 676, y: 610, width: 72, height: 268 },
        united_states: { x: 987, y: 506, width: 72, height: 215 },
        rest_of_world: { x: 987, y: 915, width: 72, height: 50 },
        revenue: { x: 1299, y: 613, width: 72, height: 267 },
        gross_profit: { x: 1610, y: 505, width: 72, height: 246 },
        cost_of_revenue: { x: 1610, y: 947, width: 72, height: 20 },
        operating_profit: { x: 1922, y: 426, width: 72, height: 86 },
        operating_expenses: { x: 1922, y: 695, width: 72, height: 160 },
        other_income: { x: 2122, y: 485, width: 72, height: 6 },
        net_profit: { x: 2233, y: 342, width: 72, height: 92 },
        tax: { x: 2304, y: 646, width: 1, height: 2 },
        rnd: { x: 2233, y: 789, width: 72, height: 72 },
        sm: { x: 2233, y: 1008, width: 72, height: 59 },
        ga: { x: 2233, y: 1237, width: 72, height: 25 },
      },
      labels,
    },
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 690, notes: ['+75% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 36, notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue_by_product', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 726, notes: ['+70% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'united_states', col: 2, order: 0, type: 'source', label: 'United States', value: 583, notes: ['+68% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'rest_of_world', col: 2, order: 1, type: 'source', label: 'Rest of World', value: 142, notes: ['+78% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 726, notes: ['+70% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 667, notes: ['92% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 59, valueText: '($59M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 232, notes: ['32% margin', '+20pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 435, valueText: '($435M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 6, order: 0, type: 'profit', label: 'Other', value: 23, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 252, notes: ['35% margin', '+18pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 7, order: 1, type: 'cost', label: 'Tax', value: 3, valueText: '($3M)', color: BACKGROUND, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 2, type: 'cost', label: 'Research & development', value: 199, valueText: '($199M)', notes: ['27% of revenue', '(17pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 7, order: 3, type: 'cost', label: 'Sales & marketing', value: 164, valueText: '($164M)', notes: ['23% of revenue', '+4pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 7, order: 4, type: 'cost', label: 'General & admin', value: 72, valueText: '($72M)', notes: ['10% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'advertising', target: 'revenue_by_product', value: 690, width: 254, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'revenue_by_product', value: 36, width: 12, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue_by_product', target: 'united_states', value: 583, width: 215, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue_by_product', target: 'rest_of_world', value: 142, width: 50, sourceOrder: 1, targetOrder: 0 },
      { source: 'united_states', target: 'revenue', value: 583, width: 215, sourceOrder: 0, targetOrder: 0 },
      { source: 'rest_of_world', target: 'revenue', value: 142, width: 50, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 667, width: 246, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 59, width: 20, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 232, width: 84, sourceWidth: 84, targetWidth: 86, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 435, width: 160, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 229, width: 84, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 3, width: 2, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 23, width: 6, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 199, width: 72, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 164, width: 59, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 72, width: 25, sourceWidth: 29, targetWidth: 25, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Reddit · 2025 财年第四季度',
        meta: { title: 'Reddit 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleSize: 112, titleTextLength: 1680 },
        annotationsSvg: annotations(true),
        nodes: {
          advertising: { label: '广告', notes: ['同比 +75%'] }, other_revenue: { label: '其他', notes: ['同比 +8%'] }, revenue_by_product: { label: '收入', notes: ['同比 +70%'] }, united_states: { label: '美国', notes: ['同比 +68%'] }, rest_of_world: { label: '世界其他地区', notes: ['同比 +78%'] }, revenue: { label: '收入', notes: ['同比 +70%'] }, gross_profit: { label: '毛利润', notes: ['利润率 92%', '同比 (1 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 +20 个百分点'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 35%', '同比 +18 个百分点'] }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 27%', '同比 (17 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 23%', '同比 +4 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 10%', '同比 (7 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
