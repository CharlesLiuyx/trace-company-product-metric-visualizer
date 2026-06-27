/* ====================================================================
 * Klaviyo - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/klaviyo-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const DARK = '#202124';
  const DARK_LINK = '#9b9b9b';
  const GREEN = '#28a329';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#9fcea0';
  const RED = '#d60000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e48688';
  const NOTE = '#707070';
  const RIGHT_LABEL_X = 2440;
  const SCALE = 1.32;

  const h = (value) => Math.round(value * SCALE * 10) / 10;

  const kpiCard = (x, y, width, height, rx, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${DARK}"/>
      ${lines
        .map((line) => `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`)
        .join('')}
    </g>`;

  const usFlag = (x, y, width = 49, height = 32) => {
    const stripe = height / 13;
    return `
      <g transform="translate(${x} ${y})">
        <rect x="0" y="0" width="${width}" height="${height}" fill="#ffffff"/>
        ${Array.from({ length: 7 }, (_item, index) => `<rect x="0" y="${index * stripe * 2}" width="${width}" height="${stripe}" fill="#e53b4d"/>`).join('')}
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
        ? `
          <path d="M26 20C35 12 50 13 59 23C50 27 49 35 40 38C35 42 35 49 44 55C40 64 32 68 27 60C25 53 20 50 22 43C13 39 13 27 26 20Z"/>
          <path d="M45 58C53 58 61 67 57 77C49 78 44 71 45 58Z"/>
        `
        : region === 'apac'
          ? `
            <path d="M26 18C39 9 58 13 70 25C62 25 55 29 49 34C42 29 33 33 29 40C23 35 18 26 26 18Z"/>
            <path d="M52 45C62 47 71 53 74 62C66 68 51 69 43 61C43 53 46 48 52 45Z"/>
            <path d="M71 25C80 29 86 36 88 45C80 45 74 39 71 25Z" fill="#6ed441"/>
          `
          : `
            <path d="M32 31C43 23 58 24 69 34C64 42 56 39 52 47C44 48 36 43 32 31Z"/>
            <path d="M54 48C65 46 77 52 82 63C72 74 57 72 49 62C49 56 51 52 54 48Z"/>
            <path d="M27 55C36 52 43 56 47 65C41 72 28 67 27 55Z"/>
          `;
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
    <g font-family="Montserrat,Arial,sans-serif">
      ${usFlag(116, 536)}
      ${globe(684, 362, 76, 'americas')}
      ${globe(606, 1000, 72, 'apac')}
      ${globe(606, 1210, 72, 'emea')}

      ${kpiCard(72, 1150, 165, 164, 33, [
        { text: labels.dbnr, y: 52, size: 29, weight: 800 },
        { text: '110%', y: 96, size: 31 },
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
    dbnrGrowth: '+2pp Q/Q',
    customers: 'Customers &gt; $50K',
    customerCount: '4,175 (+38% Y/Y)',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = annotations({
    dbnr: 'DBNR',
    dbnrGrowth: '环比 +2点',
    customers: '客户 &gt; $50K',
    customerCount: '4,175（同比 +38%）',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const klaviyoLogo = `
    <text x="0" y="124" font-family="Georgia,'Times New Roman',serif" font-size="142" font-weight="600" fill="#202124"
      textLength="494" lengthAdjust="spacingAndGlyphs">klaviyo</text>
    <path d="M507 42H552L540 60L552 78H507Z" fill="#202124"/>
    <text x="555" y="78" font-family="Montserrat,Arial,sans-serif" font-size="10" font-weight="600" fill="#202124">TM</text>
  `;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'klaviyo-q1-fy26',
    name: 'Klaviyo · Q1 FY26',
    company: 'Klaviyo',
    meta: {
      company: 'Klaviyo',
      title: 'Klaviyo Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/klaviyo-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 188,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2180,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 580,
      logoHeight: 160,
      logoY: 246,
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
      linkTint: {
        source: DARK_LINK,
        hub: DARK_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: SCALE,
      nodes: {
        united_states: { x: 460, y: 415, width: 73, height: h(209) },
        other_americas: { x: 460, y: 882, width: 73, height: h(17) },
        americas: { x: 833, y: 529, width: 73, height: h(227) },
        apac: { x: 833, y: 1011, width: 73, height: h(37) },
        emea: { x: 833, y: 1188, width: 73, height: h(94) },
        revenue: { x: 1207, y: 636, width: 73, height: h(358) },
        gross_profit: { x: 1580, y: 531, width: 73, height: h(269) },
        cost_of_revenue: { x: 1580, y: 1073, width: 73, height: h(89) },
        operating_profit: { x: 1953, y: 457, width: 73, height: 2 },
        operating_expenses: { x: 1953, y: 641, width: 73, height: h(267) },
        other: { x: 2224, y: 410, width: 74, height: 12 },
        net_profit: { x: 2328, y: 368, width: 73, height: 11 },
        tax: { x: 2328, y: 584, width: 73, height: 2 },
        sm: { x: 2328, y: 745, width: 73, height: h(134) },
        rnd: { x: 2328, y: 1007, width: 73, height: h(80) },
        ga: { x: 2328, y: 1202, width: 73, height: h(53) },
      },
      labels: {
        united_states: {
          blocks: [
            {
              x: 496, top: 321, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+22% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 162, top: 538, anchor: 'start', lines: [{ text: 'United States', size: 40, weight: 800 }] },
          ],
        },
        other_americas: {
          blocks: [
            {
              x: 496, top: 790, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+28% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 113, top: 877, anchor: 'start', lines: [{ text: 'Other Americas', size: 40, weight: 800 }] },
          ],
        },
        americas: {
          blocks: [
            {
              x: 787, top: 388, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Americas', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+22% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        apac: {
          blocks: [
            {
              x: 876, top: 917, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+31% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 704, top: 1017, anchor: 'start', lines: [{ text: 'APAC', size: 40, weight: 800 }] },
          ],
        },
        emea: {
          blocks: [
            {
              x: 876, top: 1096, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+42% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 704, top: 1228, anchor: 'start', lines: [{ text: 'EMEA', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1244, top: 493, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+28% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1617, top: 352, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '75% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1617, top: 1213, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1990, top: 277, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '0% margin', size: 28, weight: 400, color: NOTE },
                { text: '+9pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1990, top: 1021, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2261, top: 439, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2450, top: 334, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '3% margin', size: 28, weight: 400, color: NOTE },
                { text: '+8pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2515, top: 555, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 772, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '37% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(7pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1006, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '22% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1222, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '15% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 209, notes: ['+22% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'other_americas', col: 0, order: 1, type: 'source', label: 'Other Americas', value: 17, notes: ['+28% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'americas', col: 1, order: 0, type: 'source', label: 'Americas', value: 227, notes: ['+22% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'apac', col: 1, order: 1, type: 'source', label: 'APAC', value: 37, notes: ['+31% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'emea', col: 1, order: 2, type: 'source', label: 'EMEA', value: 94, notes: ['+42% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 358, notes: ['+28% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 269, notes: ['75% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 89, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2, notes: ['0% margin', '+9pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 267, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 9, notes: ['3% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: 'S&M', value: 134, notes: ['37% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 80, notes: ['22% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 53, notes: ['15% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'united_states', target: 'americas', value: 209, width: h(209), sourceOrder: 0, targetOrder: 0 },
      { source: 'other_americas', target: 'americas', value: 17, width: h(17), sourceOrder: 0, targetOrder: 1 },
      { source: 'americas', target: 'revenue', value: 227, width: h(227), sourceOrder: 0, targetOrder: 0 },
      { source: 'apac', target: 'revenue', value: 37, width: h(37), sourceOrder: 0, targetOrder: 1 },
      { source: 'emea', target: 'revenue', value: 94, width: h(94), sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 269, width: h(269), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 89, width: h(89), sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 2, width: 3, sourceOrder: 0, targetOrder: 0, curve: { c1x: 1740, c1y: 532, c2x: 1834, c2y: 458 } },
      { source: 'gross_profit', target: 'operating_expenses', value: 267, width: h(267), sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 2, width: 4, sourceOrder: 0, targetOrder: 0, y1: 369, curve: { c1x: 2075, c1y: 457, c2x: 2236, c2y: 370 } },
      { source: 'operating_profit', target: 'tax', value: 2, width: 2, sourceOrder: 1, targetOrder: 0, y0: 460, curve: { c1x: 2075, c1y: 460, c2x: 2236, c2y: 585 } },
      { source: 'other', target: 'net_profit', value: 9, width: 12, sourceOrder: 0, targetOrder: 1, y1: 373, curve: { c1x: 2315, c1y: 416, c2x: 2318, c2y: 373 } },

      { source: 'operating_expenses', target: 'sm', value: 134, width: h(134), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 80, width: h(80), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 53, width: h(53), sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Klaviyo · 2026 财年第一季度',
        meta: {
          title: 'Klaviyo 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 1740,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +22%'] },
          other_americas: { label: '美洲其他地区', notes: ['同比 +28%'] },
          americas: { label: '美洲', notes: ['同比 +22%'] },
          apac: { label: '亚太', notes: ['同比 +31%'] },
          emea: { label: 'EMEA', notes: ['同比 +42%'] },
          revenue: { label: '收入', notes: ['同比 +28%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 75%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 0%', '同比 +9 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +8 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 37%', '同比 (7 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 22%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 15%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            united_states: {
              blocks: [
                {
                  x: 496, top: 321, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +22%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                { x: 162, top: 538, anchor: 'start', lines: [{ text: '美国', size: 40, weight: 800 }] },
              ],
            },
            other_americas: {
              blocks: [
                {
                  x: 496, top: 790, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +28%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                { x: 113, top: 877, anchor: 'start', lines: [{ text: '美洲其他地区', size: 40, weight: 800 }] },
              ],
            },
            americas: {
              blocks: [
                {
                  x: 787, top: 388, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '美洲', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +22%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            apac: {
              blocks: [
                {
                  x: 876, top: 917, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +31%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                { x: 704, top: 1017, anchor: 'start', lines: [{ text: '亚太', size: 40, weight: 800 }] },
              ],
            },
            emea: {
              blocks: [
                {
                  x: 876, top: 1096, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +42%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                { x: 704, top: 1228, anchor: 'start', lines: [{ text: 'EMEA', size: 40, weight: 800 }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1244, top: 493, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +28%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1617, top: 352, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 75%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1617, top: 1213, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 36, weight: 800 },
                    { text: '成本', size: 36, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1990, top: 277, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 0%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +9 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1990, top: 1021, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '运营', size: 38, weight: 800 },
                    { text: '费用', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2261, top: 439, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2450, top: 334, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 3%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +8 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2515, top: 555, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 772, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 37%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (7 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1006, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 22%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1222, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 15%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();
