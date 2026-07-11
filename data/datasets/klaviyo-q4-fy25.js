/* ====================================================================
 * Klaviyo - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/klaviyo-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const DARK = '#232426';
  const CARD_DARK = '#222425';
  const DARK_LINK = '#959596';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#707070';
  const RIGHT_LABEL_X = 2440;
  const SCALE = 1.12;

  const h = (value) => Math.round(value * SCALE * 10) / 10;

  const kpiCard = (x, y, width, height, rx, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${CARD_DARK}"/>
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
      ${usFlag(116, 627)}
      ${globe(684, 461, 76, 'americas')}
      ${globe(606, 1008, 72, 'apac')}
      ${globe(606, 1203, 72, 'emea')}

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
    dbnrGrowth: '+1pp Q/Q',
    customers: 'Customers &gt; $50K',
    customerCount: '3,912 (+37% Y/Y)',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = annotations({
    dbnr: 'DBNR',
    dbnrGrowth: '环比 +1点',
    customers: '客户 &gt; $50K',
    customerCount: '3,912（同比 +37%）',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const klaviyoLogo = `
    <text x="0" y="124" font-family="Georgia,'Times New Roman',serif" font-size="142" font-weight="600" fill="#232426"
      textLength="494" lengthAdjust="spacingAndGlyphs">klaviyo</text>
    <path d="M507 42H552L540 60L552 78H507Z" fill="#232426"/>
    <text x="555" y="78" font-family="Montserrat,Arial,sans-serif" font-size="10" font-weight="600" fill="#232426">TM</text>
  `;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'klaviyo-q4-fy25',
    name: 'Klaviyo · Q4 FY25',
    company: 'Klaviyo',
    meta: {
      company: 'Klaviyo',
      title: 'Klaviyo Q4 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/klaviyo-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 201,
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
      linkTint: {
        source: DARK_LINK,
        hub: DARK_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: SCALE,
      nodes: {
        united_states: { x: 460, y: 515, width: 73, height: h(206) },
        other_americas: { x: 460, y: 931, width: 73, height: h(17) },
        americas: { x: 834, y: 624, width: 73, height: h(223) },
        apac: { x: 834, y: 1039, width: 73, height: h(37) },
        emea: { x: 834, y: 1211, width: 73, height: h(90) },
        revenue: { x: 1208, y: 739, width: 73, height: h(350) },
        gross_profit: { x: 1581, y: 623, width: 73, height: h(253) },
        cost_of_revenue: { x: 1581, y: 1126, width: 73, height: h(97) },
        operating_loss: { x: 1745, y: 999, width: 73, height: 2 },
        operating_expenses: { x: 1955, y: 743, width: 73, height: h(255) },
        sm: { x: 2328, y: 628, width: 73, height: h(128) },
        rnd: { x: 2328, y: 946, width: 73, height: h(77) },
        ga: { x: 2328, y: 1198, width: 73, height: h(49) },
      },
      labels: {
        united_states: {
          blocks: [
            {
              x: 496, top: 421, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+24% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 180, top: 628, anchor: 'start', lines: [{ text: 'United States', size: 40, weight: 800 }] },
          ],
        },
        other_americas: {
          blocks: [
            {
              x: 496, top: 837, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+28% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 113, top: 921, anchor: 'start', lines: [{ text: 'Other Americas', size: 40, weight: 800 }] },
          ],
        },
        americas: {
          blocks: [
            {
              x: 787, top: 486, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Americas', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+24% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        apac: {
          blocks: [
            {
              x: 876, top: 940, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+34% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 704, top: 1043, anchor: 'start', lines: [{ text: 'APAC', size: 40, weight: 800 }] },
          ],
        },
        emea: {
          blocks: [
            {
              x: 876, top: 1115, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+44% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 704, top: 1240, anchor: 'start', lines: [{ text: 'EMEA', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1244, top: 596, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+30% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1617, top: 444, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '72% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1617, top: 1256, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1781, top: 1102, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'loss', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(1%) margin', size: 28, weight: 400, color: NOTE },
                { text: '+12pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1990, top: 585, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 628, anchor: 'start', lineGap: 8,
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
              x: RIGHT_LABEL_X, top: 943, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '22% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1190, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '14% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 206, notes: ['+24% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'other_americas', col: 0, order: 1, type: 'source', label: 'Other Americas', value: 17, notes: ['+28% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'americas', col: 1, order: 0, type: 'source', label: 'Americas', value: 223, notes: ['+24% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'apac', col: 1, order: 1, type: 'source', label: 'APAC', value: 37, notes: ['+34% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'emea', col: 1, order: 2, type: 'source', label: 'EMEA', value: 90, notes: ['+44% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 350, notes: ['+30% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 253, notes: ['72% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 97, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 2, type: 'cost', label: ['Operating', 'loss'], value: -2, notes: ['(1%) margin', '+12pp Y/Y'], color: '#f2f2f2', labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 255, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 128, notes: ['37% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 77, notes: ['22% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 49, notes: ['14% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'united_states', target: 'americas', value: 206, width: h(206), sourceOrder: 0, targetOrder: 0 },
      { source: 'other_americas', target: 'americas', value: 17, width: h(17), sourceOrder: 0, targetOrder: 1 },
      { source: 'americas', target: 'revenue', value: 223, width: h(223), sourceOrder: 0, targetOrder: 0 },
      { source: 'apac', target: 'revenue', value: 37, width: h(37), sourceOrder: 0, targetOrder: 1 },
      { source: 'emea', target: 'revenue', value: 90, width: h(90), sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 253, width: h(253), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 97, width: h(97), sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 253, sourceWidth: h(253), targetWidth: h(255), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 2, width: 2, sourceOrder: 0, targetOrder: 1, y1: 1027.6, curve: { c1x: 1845, c1y: 1000, c2x: 1895, c2y: 1027.6 } },
      { source: 'operating_expenses', target: 'sm', value: 128, width: h(128), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 77, width: h(77), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 49, width: h(49), sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Klaviyo · 2025 财年第四季度',
        meta: {
          title: 'Klaviyo 2025 财年第四季度利润表',
          period: '',
          periodNote: '',
          titleSize: 112,
          titleTextLength: 1740,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +24%'] },
          other_americas: { label: '美洲其他地区', notes: ['同比 +28%'] },
          americas: { label: '美洲', notes: ['同比 +24%'] },
          apac: { label: '亚太', notes: ['同比 +34%'] },
          emea: { label: 'EMEA', notes: ['同比 +44%'] },
          revenue: { label: '收入', notes: ['同比 +30%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (1%)', '同比 +12 个百分点'] },
          operating_expenses: { label: '运营费用' },
          sm: { label: '销售与营销', notes: ['占收入 37%', '同比 (7 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 22%', '同比 (4 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 14%', '同比 (2 个百分点)'] },
        },
        layout: {
          labels: {
            united_states: {
              blocks: [
                {
                  x: 496, top: 421, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +24%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                { x: 180, top: 628, anchor: 'start', lines: [{ text: '美国', size: 40, weight: 800 }] },
              ],
            },
            other_americas: {
              blocks: [
                {
                  x: 496, top: 837, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +28%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                { x: 113, top: 921, anchor: 'start', lines: [{ text: '美洲其他地区', size: 40, weight: 800 }] },
              ],
            },
            americas: {
              blocks: [
                {
                  x: 787, top: 486, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '美洲', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +24%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            apac: {
              blocks: [
                {
                  x: 876, top: 940, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +34%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                { x: 704, top: 1043, anchor: 'start', lines: [{ text: '亚太', size: 40, weight: 800 }] },
              ],
            },
            emea: {
              blocks: [
                {
                  x: 876, top: 1115, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +44%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                { x: 704, top: 1240, anchor: 'start', lines: [{ text: 'EMEA', size: 40, weight: 800 }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1244, top: 596, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +30%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1617, top: 444, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 72%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1617, top: 1256, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 36, weight: 800 },
                    { text: '成本', size: 36, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            operating_loss: {
              blocks: [
                {
                  x: 1781, top: 1102, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '亏损', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 (1%)', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +12 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1990, top: 585, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '运营', size: 38, weight: 800 },
                    { text: '费用', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 628, anchor: 'start', lineGap: 8,
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
                  x: RIGHT_LABEL_X, top: 943, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 22%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1190, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 14%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
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
