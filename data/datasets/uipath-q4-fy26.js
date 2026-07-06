/* ====================================================================
 * UiPath - Q4 FY26 income statement ($M)
 * Reconstructed from input/processed/uipath-q4-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const ORANGE = '#ff3f19';
  const ORANGE_LINK = '#f7a08d';
  const GREEN = '#29a32a';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9dce9b';
  const RED = '#d60000';
  const RED_LABEL = '#8e1300';
  const RED_LINK = '#e38082';
  const NOTE = '#707070';
  const RIGHT_LABEL_X = 2440;

  const uipathLogo = `
    <g font-family="Montserrat,Arial,sans-serif" fill="${ORANGE}">
      <rect x="26" y="26" width="171" height="170" fill="${ORANGE}"/>
      <rect x="45" y="45" width="133" height="132" fill="#ffffff"/>
      <text x="57" y="158" font-size="116" font-weight="900">Ui</text>
      <text x="215" y="161" font-size="124" font-weight="900"
        textLength="270" lengthAdjust="spacingAndGlyphs">Path</text>
    </g>`;

  const pill = (x, y, width, height, rx, body) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${ORANGE}"/>
      ${body}
    </g>`;

  const annotations = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <g stroke="${GREEN}" fill="none">
        <line x1="2138" y1="333" x2="2208" y2="333" stroke-width="5"/>
        <line x1="2143" y1="476" x2="2213" y2="476" stroke-width="5"/>
      </g>
      ${pill(87, 1126, 146, 159, 37, `
        <text x="160" y="1174" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${labels.arr}</text>
        <text x="160" y="1217" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">$1.85B</text>
        <text x="160" y="1257" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${labels.arrGrowth}</text>
      `)}
      ${pill(241, 1128, 167, 156, 37, `
        <text x="325" y="1175" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">DBNR</text>
        <text x="325" y="1218" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">107%</text>
        <text x="325" y="1258" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${labels.dbnrGrowth}</text>
      `)}
      ${pill(415, 1128, 505, 156, 37, `
        <text x="668" y="1190" text-anchor="middle" font-size="${labels.customerSize}" font-weight="500" fill="#ffffff">${labels.customersLine1}</text>
        <text x="668" y="1234" text-anchor="middle" font-size="${labels.customerSize}" font-weight="500" fill="#ffffff">${labels.customersLine2Prefix}<tspan font-weight="800">${labels.customersLine2Strong}</tspan>${labels.customersLine2Suffix}</text>
      `)}
      <text x="220" y="1325" font-size="29" font-weight="500" fill="${NOTE}">${labels.arrFootnote}</text>
      <text x="210" y="1361" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    arr: 'ARR',
    arrGrowth: '+11% Y/Y',
    dbnrGrowth: 'Flat Q/Q',
    customerSize: 28,
    customersLine1: 'Customers &gt; $1M 357 +13% Y/Y',
    customersLine2Prefix: '&gt; ',
    customersLine2Strong: '$100K',
    customersLine2Suffix: ' 2,565 +12% Y/Y',
    arrFootnote: 'ARR = Annual Recurring Revenue',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = annotations({
    arr: 'ARR',
    arrGrowth: '同比 +11%',
    dbnrGrowth: '环比持平',
    customerSize: 27,
    customersLine1: '客户 &gt; $1M 357，同比 +13%',
    customersLine2Prefix: '&gt; ',
    customersLine2Strong: '$100K',
    customersLine2Suffix: ' 2,565，同比 +12%',
    arrFootnote: 'ARR = 年度经常性收入',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uipath-q4-fy26',
    name: 'UiPath · Q4 FY26',
    company: 'UiPath',
    meta: {
      company: 'UiPath',
      title: 'UiPath Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/uipath-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2165,
      periodX: 2034,
      periodY: 1310,
      periodNoteY: 1350,
      logoWidth: 510,
      logoHeight: 222,
      logoY: 251,
      logoViewBox: '0 0 510 222',
      logoSvg: uipathLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: ORANGE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 0.61,
      nodes: {
        subscription: { x: 396, y: 417, width: 71, height: 153 },
        licenses: { x: 396, y: 747, width: 71, height: 132 },
        professional_services: { x: 396, y: 1050, width: 71, height: 9 },
        revenue: { x: 863, y: 659, width: 71, height: 294 },
        gross_profit: { x: 1330, y: 558, width: 71, height: 250 },
        cost_of_revenue: { x: 1330, y: 1014, width: 71, height: 44 },
        operating_profit: { x: 1797, y: 450, width: 71, height: 49 },
        operating_expenses: { x: 1797, y: 686, width: 71, height: 201 },
        interest: { x: 2138, y: 330, width: 70, height: 6 },
        tax_benefit: { x: 2143, y: 473, width: 70, height: 6 },
        net_profit: { x: 2264, y: 355, width: 72, height: 61 },
        sm: { x: 2264, y: 720, width: 72, height: 109 },
        rnd: { x: 2264, y: 935, width: 72, height: 58 },
        ga: { x: 2264, y: 1097, width: 72, height: 33 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: {
        subscription: {
          blocks: [
            {
              x: 238, top: 472, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Subscription', size: 39, weight: 800 },
                { text: '84% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 432, top: 326, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        licenses: {
          blocks: [
            {
              x: 238, top: 790, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Licenses', size: 39, weight: 800 },
                { text: '99% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 432, top: 658, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        professional_services: {
          blocks: [
            {
              x: 236, top: 994, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Professional', size: 39, weight: 800 },
                { text: 'services', size: 39, weight: 800 },
                { text: '(126%) gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 432, top: 960, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+29% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 899, top: 515, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1368, top: 379, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '85% margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1833, top: 258, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '17% margin', size: 29, weight: 400, color: NOTE },
                { text: '+9pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2173, top: 246, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        tax_benefit: {
          blocks: [
            {
              x: 2178, top: 500, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax benefit', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2380, top: 338, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '22% margin', size: 29, weight: 400, color: NOTE },
                { text: '+9pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1365, top: 1080, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1833, top: 912, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'expenses', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 720, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '37% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 908, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '20% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1086, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: { blocks: [] },
      },
    },

    nodes: [
      {
        id: 'subscription', col: 0, order: 0, type: 'source',
        label: 'Subscription', value: 251, notes: ['+17% Y/Y', '84% gross margin'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'licenses', col: 0, order: 1, type: 'source',
        label: 'Licenses', value: 216, notes: ['+9% Y/Y', '99% gross margin'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'professional_services', col: 0, order: 2, type: 'source',
        label: ['Professional', 'services'], value: 14, notes: ['+29% Y/Y', '(126%) gross margin'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 481, notes: ['+14% Y/Y'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 407, notes: ['85% margin', '(0pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 74,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 80, notes: ['17% margin', '+9pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 327,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'interest', col: 4, order: 0, type: 'profit',
        label: 'Interest', value: 12, color: '#f2f2f2', labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax_benefit', col: 4, order: 1, type: 'profit',
        label: 'Tax benefit', value: 12, color: '#f2f2f2', labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 104, notes: ['22% margin', '+9pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'sm', col: 5, order: 2, type: 'cost',
        label: 'S&M', value: 178, notes: ['37% of revenue', '(5pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 3, type: 'cost',
        label: 'R&D', value: 95, notes: ['20% of revenue', '(4pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 4, type: 'cost',
        label: 'G&A', value: 54, notes: ['11% of revenue', '(0pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 5, order: 5, type: 'cost',
        label: 'Tax', value: 0, valueText: '',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 251, width: 153, sourceOrder: 0, targetOrder: 0 },
      { source: 'licenses', target: 'revenue', value: 216, width: 132, sourceOrder: 0, targetOrder: 1 },
      { source: 'professional_services', target: 'revenue', value: 14, width: 9, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 407, width: 250, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 74, width: 44, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 80, width: 49, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 327, width: 201, sourceOrder: 1, targetOrder: 0 },

      { source: 'interest', target: 'net_profit', value: 12, width: 6, sourceOrder: 0, targetOrder: 0, curve: { c1x: 2236, c1y: 333, c2x: 2248, c2y: 356 } },
      { source: 'operating_profit', target: 'net_profit', value: 80, width: 49, sourceOrder: 0, targetOrder: 1 },
      { source: 'tax_benefit', target: 'net_profit', value: 12, width: 6, sourceOrder: 0, targetOrder: 2, curve: { c1x: 2236, c1y: 476, c2x: 2248, c2y: 410 } },

      { source: 'operating_expenses', target: 'sm', value: 178, width: 109, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 95, width: 58, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 54, width: 33, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'UiPath · 2026 财年第四季度',
        meta: {
          title: 'UiPath 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleSize: 112,
          titleTextLength: 1810,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +17%', '毛利率 84%'] },
          licenses: { label: '许可证', notes: ['同比 +9%', '毛利率 99%'] },
          professional_services: { label: '专业服务', notes: ['同比 +29%', '毛利率 (126%)'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 85%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +9 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润', notes: ['利润率 22%', '同比 +9 个百分点'] },
          sm: { label: '销售与营销', notes: ['占收入 37%', '同比 (5 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 20%', '同比 (4 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 11%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
        },
        layout: {
          labels: {
            subscription: {
              blocks: [
                {
                  x: 238, top: 472, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '订阅', size: 39, weight: 800 },
                    { text: '毛利率 84%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 432, top: 326, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +17%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            licenses: {
              blocks: [
                {
                  x: 238, top: 790, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '许可证', size: 39, weight: 800 },
                    { text: '毛利率 99%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 432, top: 658, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            professional_services: {
              blocks: [
                {
                  x: 236, top: 994, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '专业', size: 39, weight: 800 },
                    { text: '服务', size: 39, weight: 800 },
                    { text: '毛利率 (126%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 432, top: 960, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +29%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 899, top: 515, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1368, top: 379, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 85%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1833, top: 258, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 17%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +9 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 2173, top: 246, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            tax_benefit: {
              blocks: [
                {
                  x: 2178, top: 500, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税收收益', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2380, top: 338, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 22%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +9 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1365, top: 1080, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 36, weight: 800 },
                    { text: '成本', size: 36, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1833, top: 912, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 39, weight: 800 },
                    { text: '费用', size: 39, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 720, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 37%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 908, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 20%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1086, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '一般及行政', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 11%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: { blocks: [] },
          },
        },
      },
    },
  });
})();
