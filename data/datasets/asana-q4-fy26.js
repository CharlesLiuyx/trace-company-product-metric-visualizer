/* ====================================================================
 * Asana - Q4 FY26 income statement ($M)
 * Reconstructed from input/processed/asana-q4-fy26.png as a fixed d3-sankey
 * layout with pure SVG annotations.
 * ==================================================================== */
(function () {
  const PINK = '#ff4f83';
  const PINK_LINK = '#f0a1ba';
  const GREEN = '#25a427';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#98cb96';
  const RED = '#d60000';
  const RED_LABEL = '#941000';
  const RED_LINK = '#df8082';
  const NOTE = '#6d6d6d';
  const TITLE = '#15527a';
  const WORDMARK = '#172636';
  const RIGHT_LABEL_X = 2395;

  const asanaLogo = `
    <defs>
      <linearGradient id="asana-dot-a" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ff4f83"/>
        <stop offset="100%" stop-color="#ffad2f"/>
      </linearGradient>
      <linearGradient id="asana-dot-b" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ff9c35"/>
        <stop offset="100%" stop-color="#ff4f83"/>
      </linearGradient>
      <linearGradient id="asana-dot-c" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ff8d38"/>
        <stop offset="100%" stop-color="#ff4f83"/>
      </linearGradient>
    </defs>
    <circle cx="205" cy="33" r="31" fill="url(#asana-dot-a)"/>
    <circle cx="165" cy="103" r="31" fill="url(#asana-dot-b)"/>
    <circle cx="246" cy="103" r="31" fill="url(#asana-dot-c)"/>
    <text x="205" y="250" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="112" font-weight="800" fill="${WORDMARK}">asana</text>
  `;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="30" fill="${PINK}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${y + 48 + index * 42}" text-anchor="middle"
          font-size="28" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const customerCard = (lines) => `
    <g>
      <rect x="246" y="1135" width="559" height="163" rx="30" fill="${PINK}"/>
      ${lines.map((line, index) => `
        <text x="280" y="${1196 + index * 44}" text-anchor="start"
          font-size="29" font-weight="800" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(72, 1139, 164, 164, ['DBNR', '96%', 'Flat Q/Q'])}
      ${customerCard([
        'Customers &gt; $5K <tspan font-weight="500">25,928 (+8% Y/Y)</tspan>',
        'Customers &gt; $100K <tspan font-weight="500">817 (+13% Y/Y)</tspan>',
      ])}
      <text x="80" y="1342" font-size="29" font-weight="500" fill="${NOTE}">DBNR = Dollar Based Net Retention</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(72, 1139, 164, 164, ['DBNR', '96%', '环比持平'])}
      ${customerCard([
        '&gt;$5K 客户 <tspan font-weight="500">25,928（同比 +8%）</tspan>',
        '&gt;$100K 客户 <tspan font-weight="500">817（同比 +13%）</tspan>',
      ])}
      <text x="80" y="1342" font-size="29" font-weight="500" fill="${NOTE}">DBNR = 美元口径净留存率</text>
    </g>`;

  const zhLayoutLabels = {
    united_states: {
      blocks: [
        {
          x: 402, top: 422, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +8%', size: 28, weight: 400, color: NOTE },
          ],
        },
        { x: 345, top: 578, anchor: 'end', lines: [{ text: '美国', size: 42, weight: 800 }] },
      ],
    },
    international: {
      blocks: [
        {
          x: 402, top: 841, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +11%', size: 28, weight: 400, color: NOTE },
          ],
        },
        { x: 345, top: 967, anchor: 'end', lines: [{ text: '国际', size: 42, weight: 800 }] },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 870, top: 493, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '收入', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +9%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1337, top: 341, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '毛利润', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 88%', size: 28, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1336, top: 1100, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '收入', size: 35, weight: 800 },
            { text: '成本', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
          ],
        },
      ],
    },
    operating_loss: {
      blocks: [
        {
          x: 1602, top: 1091, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '营业', size: 39, weight: 800 },
            { text: '亏损', size: 39, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '利润率 (17%)', size: 28, weight: 400, color: NOTE },
            { text: '同比 +17 个百分点', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1804, top: 477, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '运营', size: 40, weight: 800 },
            { text: '费用', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 445, anchor: 'start', lineGap: 8,
          lines: [
            { text: '销售与市场', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 49%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (6 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 810, anchor: 'start', lineGap: 8,
          lines: [
            { text: '研发', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 36%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (9 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1128, anchor: 'start', lineGap: 8,
          lines: [
            { text: '管理费用', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 20%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asana-q4-fy26',
    name: 'Asana · Q4 FY26',
    company: 'Asana',
    meta: {
      company: 'Asana',
      title: 'Asana Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/asana-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1262,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 1968,
      periodX: 2406,
      periodY: 306,
      periodNoteY: 352,
      logoWidth: 410,
      logoHeight: 254,
      logoY: 218,
      logoViewBox: '0 0 410 254',
      logoSvg: asanaLogo,
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
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 1,
      nodes: {
        united_states: { x: 367, y: 510, width: 71, height: 186 },
        international: { x: 367, y: 929, width: 71, height: 127 },
        revenue: { x: 834, y: 646, width: 71, height: 316 },
        gross_profit: { x: 1301, y: 511, width: 71, height: 278 },
        cost_of_revenue: { x: 1301, y: 1035, width: 71, height: 38 },
        operating_loss: { x: 1566, y: 1027, width: 71, height: 51 },
        operating_expenses: { x: 1769, y: 645, width: 70, height: 330 },
        sm: { x: 2235, y: 475, width: 71, height: 153 },
        rnd: { x: 2235, y: 799, width: 71, height: 111 },
        ga: { x: 2235, y: 1091, width: 71, height: 62 },
      },
      labels: {
        united_states: {
          blocks: [
            {
              x: 402, top: 422, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 345, top: 578, anchor: 'end', lines: [{ text: 'United States', size: 42, weight: 800 }] },
          ],
        },
        international: {
          blocks: [
            {
              x: 402, top: 841, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 345, top: 967, anchor: 'end', lines: [{ text: 'International', size: 42, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 870, top: 493, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1337, top: 341, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '88% margin', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1336, top: 1100, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 35, weight: 800 },
                { text: 'revenue', size: 35, weight: 800 },
                { text: '$value', size: 35, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1602, top: 1091, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'loss', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '(17%) margin', size: 28, weight: 400, color: NOTE },
                { text: '+17pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1804, top: 477, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 445, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '49% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(6pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 810, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '36% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(9pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1128, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '20% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 122, notes: ['+8% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 84, notes: ['+11% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 206, notes: ['+9% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 181, notes: ['88% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 25, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -34, notes: ['(17%) margin', '+17pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 215, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 100, notes: ['49% of revenue', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 73, notes: ['36% of revenue', '(9pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 41, notes: ['20% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'united_states', target: 'revenue', value: 122, width: 186, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 84, width: 127, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 181, width: 278, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 25, width: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 181, width: 278, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 34, width: 51, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 100, width: 153, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 73, width: 111, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 41, width: 62, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Asana · 2026 财年第四季度',
        meta: {
          title: 'Asana 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleSize: 108,
          titleTextLength: 1620,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +8%'] },
          international: { label: '国际', notes: ['同比 +11%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 88%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (17%)', '同比 +17 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          sm: { label: '销售与市场', notes: ['占收入 49%', '同比 (6 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 36%', '同比 (9 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 20%', '同比 (4 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
