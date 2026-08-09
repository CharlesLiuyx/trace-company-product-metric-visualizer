/* ====================================================================
 * Adobe - Q4 FY22 income statement ($B)
 * Reconstructed from input/processed/adobe-q4-fy22.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const DARK = '#3d3d3d';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const NET_PROFIT_GREEN = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GREY_LINK = '#a0a0a0';
  const ADOBE_RED = '#fa0f00';
  const OTHER_LABEL_X = 2206;

  const adobeFlagMark = `
    <path d="M0,0 L58,0 L0,140 Z" fill="${ADOBE_RED}"/>
    <path d="M102,0 L159,0 L159,137 Z" fill="${ADOBE_RED}"/>
    <path d="M80,50 L93,139 L116,139 Z" fill="${ADOBE_RED}"/>`;

  const adobeLogo = `
    ${adobeFlagMark}
    <text x="214" y="113" font-family="Montserrat,Arial,sans-serif" font-size="118" font-weight="800"
      fill="${ADOBE_RED}" textLength="331" lengthAdjust="spacingAndGlyphs">Adobe</text>`;

  const appIconRect = (size, fill) => `<rect width="${size}" height="${size}" rx="${size * 0.22}" fill="${fill}"/>`;

  const creativeCloudIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})">
      <defs>
        <linearGradient id="adobeCcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fe0e8e"/>
          <stop offset="35%" stop-color="#fb4300"/>
          <stop offset="65%" stop-color="#f6c500"/>
          <stop offset="100%" stop-color="#55e04d"/>
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#adobeCcGradient)"/>
      <circle cx="${size * 0.38}" cy="${size * 0.58}" r="${size * 0.26}" fill="none" stroke="#ffffff" stroke-width="${size * 0.09}"/>
      <circle cx="${size * 0.62}" cy="${size * 0.4}" r="${size * 0.19}" fill="none" stroke="#ffffff" stroke-width="${size * 0.09}"/>
    </g>`;

  const acrobatIcon = (x, y, size = 116) => `
    <g transform="translate(${x} ${y})">
      ${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.34},${size * 0.72} C${size * 0.2},${size * 0.62} ${size * 0.22},${size * 0.4} ${size * 0.38},${size * 0.4}
        C${size * 0.5},${size * 0.4} ${size * 0.5},${size * 0.55} ${size * 0.4},${size * 0.6}
        C${size * 0.55},${size * 0.66} ${size * 0.62},${size * 0.5} ${size * 0.72},${size * 0.28}"
        fill="none" stroke="#ffffff" stroke-width="${size * 0.075}" stroke-linecap="round"/>
    </g>`;

  const adobeAIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})">
      ${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.5},${size * 0.21} L${size * 0.8},${size * 0.765} L${size * 0.66},${size * 0.765}
        L${size * 0.5},${size * 0.44} L${size * 0.34},${size * 0.765} L${size * 0.2},${size * 0.765} Z" fill="#ffffff"/>
    </g>`;

  const kpiCard = (x, width, header, value, note) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="${x}" y="1146" width="${width}" height="157" rx="31" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1197" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${header}</text>
      <text x="${x + width / 2}" y="1240" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1277" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const otherIncomeGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2215"
      data-link-anchor-y="500"
      data-user-directed-layout="other-income-under-guide-left-of-net-profit">
      <rect x="2145" y="515" width="125" height="85" fill="transparent"/>
      <path d="M2150 511H2250C2263 511 2253 450 2267 450"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="${OTHER_LABEL_X}" y="550" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="${OTHER_LABEL_X}" y="590" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$12M</text>
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${creativeCloudIcon(104, 446)}
      ${acrobatIcon(226, 446)}
      ${adobeAIcon(163, 704)}
      ${kpiCard(33, 323, 'Creative ARR', '$11.6B', '+13% Y/Y')}
      ${kpiCard(371, 437, 'Document Cloud ARR', '$2.4B', '+23% Y/Y')}
      ${kpiCard(822, 240, 'RPO', '$15.2B', '+9% Y/Y')}
      <text x="220" y="1338" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = Annual Recurring Revenue</text>
      <text x="160" y="1379" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">RPO = Remaining Performance Obligation</text>
    </g>
    ${otherIncomeGuide(false)}`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${creativeCloudIcon(104, 446)}
      ${acrobatIcon(226, 446)}
      ${adobeAIcon(163, 704)}
      ${kpiCard(33, 323, '创意 ARR', '$11.6B', '同比 +13%')}
      ${kpiCard(371, 437, '文档云 ARR', '$2.4B', '同比 +23%')}
      ${kpiCard(822, 240, 'RPO', '$15.2B', '同比 +9%')}
      <text x="220" y="1338" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = 年化经常性收入</text>
      <text x="160" y="1379" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">RPO = 剩余履约义务</text>
    </g>
    ${otherIncomeGuide(true)}`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q4-fy22',
    name: 'Adobe · Q4 FY22',
    company: 'Adobe',
    meta: {
      company: 'Adobe',
      title: 'Adobe Q4 FY22 Income Statement',
      period: 'Q4 FY22',
      periodNote: 'Ending November 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q4-fy22.png', width: 2667, height: 1500 },
      titleY: 200,
      titleSize: 124,
      titleTextLength: 2110,
      periodX: 2267,
      periodY: 259,
      periodNoteY: 306,
      logoWidth: 560,
      logoHeight: 140,
      logoY: 247,
      logoViewBox: '0 0 628 140',
      logoSvg: adobeLogo,
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
        source: GREY_LINK,
        hub: GREY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 1,
      nodes: {
        digital_media: { x: 399, y: 455, width: 71, height: 240 },
        digital_experience: { x: 399, y: 822, width: 71, height: 81 },
        publishing: { x: 399, y: 1047, width: 71, height: 4 },
        revenue: { x: 866, y: 565, width: 70, height: 332 },
        gross_profit: { x: 1335, y: 510, width: 72, height: 289 },
        cost_of_revenue: { x: 1335, y: 948, width: 72, height: 39 },
        operating_profit: { x: 1791, y: 430, width: 70, height: 109 },
        operating_expenses: { x: 1788, y: 688, width: 70, height: 179 },
        net_profit: { x: 2267, y: 365, width: 71, height: 85 },
        tax: { x: 2267, y: 613, width: 71, height: 22 },
        sm: { x: 2267, y: 728, width: 71, height: 93 },
        rnd: { x: 2267, y: 922, width: 71, height: 55 },
        ga: { x: 2267, y: 1082, width: 71, height: 22 },
        amortization: { x: 2267, y: 1227, width: 71, height: 2 },
      },
      routes: { other_income: { x: 2150, y: 511, width: 0, height: 1 } },
      labels: {
        digital_media: {
          blocks: [
            {
              x: 434, top: 360, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 203, top: 582, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Digital Media', size: 34, weight: 800 },
                { text: '95% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        digital_experience: {
          blocks: [
            {
              x: 434, top: 730, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 201, top: 845, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Digital Experience', size: 34, weight: 800 },
                { text: '66% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        publishing: {
          blocks: [
            {
              x: 434, top: 961, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 34, weight: 400 },
                { text: '(18%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 238, top: 1004, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Publishing', size: 34, weight: 800, textLength: 180 },
                { text: '& Advertising', size: 34, weight: 800, textLength: 293 },
                { text: '64% gross margin', size: 29, weight: 400, color: NOTE, textLength: 250 },
              ],
            },
          ],
        },
        other_income: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 901, top: 418, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1371, top: 323, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '88% margin', size: 29, weight: 400, color: NOTE },
                { text: 'Unchanged', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1371, top: 1010, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1826, top: 245, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '33% margin', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1824, top: 881, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2370, top: 346, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '26% margin', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2412, top: 574, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2361, top: 726, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '29% of revenue', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2362, top: 899, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '17% of revenue', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2371, top: 1040, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '8% of revenue', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2363, top: 1195, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Amortization', size: 27, weight: 800, textLength: 198 },
                { text: '$value', size: 29, weight: 400 },
                { text: '1% of revenue', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nonNodeMetrics: [
      {
        id: 'other_income', representation: 'flow', label: 'Other', value: 0.012,
        valueText: '$12M', type: 'profit', labelColor: GREEN_LABEL,
      },
    ],

    nodes: [
      {
        id: 'digital_media', col: 0, order: 0, type: 'source',
        label: 'Digital Media', value: 3.3, notes: ['+10% Y/Y', '95% gross margin'],
        color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'digital_experience', col: 0, order: 1, type: 'source',
        label: 'Digital Experience', value: 1.2, notes: ['+14% Y/Y', '66% gross margin'],
        color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'publishing', col: 0, order: 2, type: 'source',
        label: ['Publishing', '& Advertising'], value: 0.1, notes: ['(18%) Y/Y', '64% gross margin'],
        color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 4.5, notes: ['+10% Y/Y'], color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 4.0, valueText: '$4.0B', notes: ['88% margin', 'Unchanged'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 1.5, notes: ['33% margin', '(4pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 2.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_profit', col: 4, order: 0, type: 'profit',
        label: 'Net profit', value: 1.2, notes: ['26% margin', '(4pp) Y/Y'],
        color: NET_PROFIT_GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 4, order: 1, type: 'cost',
        label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 4, order: 2, type: 'cost',
        label: 'S&M', value: 1.3, notes: ['29% of revenue'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 4, order: 3, type: 'cost',
        label: 'R&D', value: 0.8, notes: ['17% of revenue'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 4, order: 4, type: 'cost',
        label: 'G&A', value: 0.3, notes: ['8% of revenue'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'amortization', col: 4, order: 5, type: 'cost',
        label: 'Amortization', value: 0.042, valueText: '($42M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'digital_media', target: 'revenue', value: 3.3, sourceWidth: 240, targetWidth: 240, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.2, sourceWidth: 81, targetWidth: 88, sourceOrder: 0, targetOrder: 1 },
      { source: 'publishing', target: 'revenue', value: 0.1, sourceWidth: 4, targetWidth: 4, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 4.0, sourceWidth: 289, targetWidth: 289, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 43, targetWidth: 39, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 1.5, sourceWidth: 109, targetWidth: 109, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.5, sourceWidth: 180, targetWidth: 179, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 1.2, sourceWidth: 86, targetWidth: 85, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 23, targetWidth: 22, sourceOrder: 1, targetOrder: 0 },
      {
        sourceRoute: 'other_income', target: 'net_profit', value: 0.012,
        sourceWidth: 2, targetWidth: 1, y0: 511, y1: 449.5,
        sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK,
      },

      { source: 'operating_expenses', target: 'sm', value: 1.3, sourceWidth: 95, targetWidth: 93, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 59, targetWidth: 55, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.3, sourceWidth: 22, targetWidth: 22, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.042, sourceWidth: 3, targetWidth: 2, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Adobe · 2022 财年第四季度',
        meta: {
          title: 'Adobe 2022 财年第四季度利润表',
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 11 月',
          titleTextLength: 2050,
          periodX: 2267,
        },
        annotationsSvg: annotationsZh,
        nonNodeMetrics: { other_income: { label: '其他' } },
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +10%', '毛利率 95%'] },
          digital_experience: { label: '数字体验', notes: ['同比 +14%', '毛利率 66%'] },
          publishing: { label: ['出版', '与广告'], notes: ['同比 (18%)', '毛利率 64%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 88%', '同比持平'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 (4 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 26%', '同比 (4 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 29%'] },
          rnd: { label: '研发', notes: ['占收入 17%'] },
          ga: { label: '一般及行政', notes: ['占收入 8%'] },
          amortization: { label: '摊销', notes: ['占收入 1%'] },
        },
        layout: {
          labels: {
            digital_media: { blocks: [
              { x: 434, top: 360, anchor: 'middle', lineGap: 9, lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '同比 +10%', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 203, top: 582, anchor: 'middle', lineGap: 8, lines: [
                { text: '数字媒体', size: 34, weight: 800 },
                { text: '毛利率 95%', size: 29, weight: 400, color: NOTE },
              ] },
            ] },
            digital_experience: { blocks: [
              { x: 434, top: 730, anchor: 'middle', lineGap: 9, lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 201, top: 845, anchor: 'middle', lineGap: 8, lines: [
                { text: '数字体验', size: 34, weight: 800 },
                { text: '毛利率 66%', size: 29, weight: 400, color: NOTE },
              ] },
            ] },
            publishing: { blocks: [
              { x: 434, top: 961, anchor: 'middle', lineGap: 9, lines: [
                { text: '$value', size: 34, weight: 400 },
                { text: '同比 (18%)', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 238, top: 1004, anchor: 'middle', lineGap: 6, lines: [
                { text: '出版', size: 34, weight: 800 },
                { text: '与广告', size: 34, weight: 800 },
                { text: '毛利率 64%', size: 29, weight: 400, color: NOTE },
              ] },
            ] },
            other_income: { blocks: [] },
            revenue: { blocks: [{ x: 901, top: 418, anchor: 'middle', lineGap: 10, lines: [
              { text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
              { text: '同比 +10%', size: 29, weight: 400, color: NOTE },
            ] }] },
            gross_profit: { blocks: [{ x: 1371, top: 323, anchor: 'middle', lineGap: 9, lines: [
              { text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
              { text: '利润率 88%', size: 29, weight: 400, color: NOTE },
              { text: '同比持平', size: 29, weight: 400, color: NOTE },
            ] }] },
            cost_of_revenue: { blocks: [{ x: 1371, top: 1010, anchor: 'middle', lineGap: 7, lines: [
              { text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 },
              { text: '$value', size: 32, weight: 400 },
            ] }] },
            operating_profit: { blocks: [{ x: 1826, top: 245, anchor: 'middle', lineGap: 8, lines: [
              { text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
              { text: '利润率 33%', size: 29, weight: 400, color: NOTE },
              { text: '同比 (4 个百分点)', size: 25, weight: 400, color: NOTE },
            ] }] },
            operating_expenses: { blocks: [{ x: 1824, top: 881, anchor: 'middle', lineGap: 8, lines: [
              { text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 },
              { text: '$value', size: 36, weight: 400 },
            ] }] },
            net_profit: { blocks: [{ x: 2370, top: 346, anchor: 'start', lineGap: 8, lines: [
              { text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
              { text: '利润率 26%', size: 29, weight: 400, color: NOTE },
              { text: '同比 (4 个百分点)', size: 24, weight: 400, color: NOTE },
            ] }] },
            tax: { blocks: [{ x: 2412, top: 574, anchor: 'start', lineGap: 8, lines: [
              { text: '税费', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 },
            ] }] },
            sm: { blocks: [{ x: 2361, top: 726, anchor: 'start', lineGap: 8, lines: [
              { text: '销售与市场', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 },
              { text: '占收入 29%', size: 28, weight: 400, color: NOTE },
            ] }] },
            rnd: { blocks: [{ x: 2362, top: 899, anchor: 'start', lineGap: 8, lines: [
              { text: '研发', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 },
              { text: '占收入 17%', size: 28, weight: 400, color: NOTE },
            ] }] },
            ga: { blocks: [{ x: 2371, top: 1040, anchor: 'start', lineGap: 8, lines: [
              { text: '一般及行政', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 },
              { text: '占收入 8%', size: 28, weight: 400, color: NOTE },
            ] }] },
            amortization: { blocks: [{ x: 2363, top: 1195, anchor: 'start', lineGap: 8, lines: [
              { text: '摊销', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 },
              { text: '占收入 1%', size: 28, weight: 400, color: NOTE },
            ] }] },
          },
        },
      },
    },
  });
})();
