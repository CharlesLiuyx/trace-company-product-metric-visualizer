/* ====================================================================
 * Figma - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/figma-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const DARK = '#2b2e36';
  const DARK_LINK = '#9fa0a2';
  const GREEN = '#26a229';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#9ccd9c';
  const RED = '#d60000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e38486';
  const NOTE = '#707070';
  const SCALE = 0.96;
  const RIGHT_LABEL_X = 2464;

  const h = (value) => Math.round(value * SCALE);

  const figmaLogo = `
    <defs>
      <filter id="figma-icon-shadow" x="-14%" y="-10%" width="128%" height="128%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#000000" flood-opacity="0.16"/>
      </filter>
    </defs>
    <g filter="url(#figma-icon-shadow)">
      <rect x="8" y="8" width="234" height="234" rx="48" fill="${DARK}"/>
      <g transform="translate(61 38)">
        <path d="M28 0H84V56H28C12.5 56 0 43.5 0 28S12.5 0 28 0Z" fill="#f24e1e"/>
        <path d="M84 0H112C127.5 0 140 12.5 140 28S127.5 56 112 56H84V0Z" fill="#ff7262"/>
        <path d="M28 58H84V114H28C12.5 114 0 101.5 0 86S12.5 58 28 58Z" fill="#a259ff"/>
        <circle cx="112" cy="86" r="28" fill="#1abcfe"/>
        <path d="M28 116H84V172C84 187.5 71.5 200 56 200S28 187.5 28 172V116Z" fill="#0acf83"/>
      </g>
    </g>`;

  const kpiCard = (x, y, width, height, rx, content) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${DARK}"/>
      ${content}
    </g>`;

  const annotations = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(
        36,
        1154,
        184,
        164,
        34,
        `
          <text x="128" y="1205" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.ndr}</text>
          <text x="128" y="1248" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">139%</text>
          <text x="128" y="1291" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${labels.ndrGrowth}</text>
        `
      )}
      ${kpiCard(
        237,
        1153,
        389,
        164,
        28,
        `
          <text x="432" y="1205" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${labels.customers}</text>
          <text x="260" y="1249" text-anchor="start" font-size="${labels.customerLineSize}" font-weight="500" fill="#ffffff">
            <tspan>${labels.customer10kPrefix}</tspan><tspan font-weight="800">15,218</tspan><tspan>${labels.customer10kGrowth}</tspan>
          </text>
          <text x="260" y="1292" text-anchor="start" font-size="${labels.customerLineSize}" font-weight="500" fill="#ffffff">
            <tspan>${labels.customer100kPrefix}</tspan><tspan font-weight="800">1,525</tspan><tspan>${labels.customer100kGrowth}</tspan>
          </text>
        `
      )}
      <text x="158" y="1356" font-size="29" font-weight="500" fill="${NOTE}">${labels.ndrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    ndr: 'NDR',
    ndrGrowth: '+3pp Q/Q',
    customers: 'Customers',
    customerLineSize: 28,
    customer10kPrefix: '&gt; $10K ',
    customer100kPrefix: '&gt; $100K ',
    customer10kGrowth: ' +37% Y/Y',
    customer100kGrowth: ' +48% Y/Y',
    ndrFootnote: 'NDR = Net Dollar Retention',
  });

  const annotationsZh = annotations({
    ndr: 'NDR',
    ndrGrowth: '环比 +3点',
    customers: '客户',
    customerLineSize: 25,
    customer10kPrefix: '&gt; $10K 客户 ',
    customer100kPrefix: '&gt; $100K 客户 ',
    customer10kGrowth: '，同比 +37%',
    customer100kGrowth: '，同比 +48%',
    ndrFootnote: 'NDR = 净美元留存率',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'figma-q1-fy26',
    name: 'Figma · Q1 FY26',
    company: 'Figma',
    meta: {
      company: 'Figma',
      title: 'Figma Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/figma-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 190,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2086,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 250,
      logoHeight: 250,
      logoY: 242,
      logoViewBox: '0 0 250 250',
      logoSvg: figmaLogo,
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
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: SCALE,
      nodes: {
        united_states: { x: 380, y: 529, width: 73, height: h(155) },
        international: { x: 380, y: 902, width: 73, height: h(178) },
        revenue: { x: 848, y: 651, width: 73, height: h(333) },
        gross_profit: { x: 1314, y: 522, width: 73, height: h(265) },
        cost_of_revenue: { x: 1314, y: 1011, width: 73, height: h(69) },
        operating_loss: { x: 1577, y: 947, width: 73, height: h(137) },
        operating_expenses: { x: 1783, y: 644, width: 73, height: h(402) },
        rnd: { x: 2248, y: 496, width: 73, height: h(173) },
        sm: { x: 2248, y: 800, width: 73, height: h(126) },
        ga: { x: 2248, y: 1049, width: 73, height: h(104) },
      },
      labels: {
        united_states: {
          blocks: [
            {
              x: 416, top: 438, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+44% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 64, top: 581, anchor: 'start', lines: [{ text: 'United States', size: 40, weight: 800 }] },
          ],
        },
        international: {
          blocks: [
            {
              x: 416, top: 814, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+48% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 64, top: 962, anchor: 'start', lines: [{ text: 'International', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 885, top: 516, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+46% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1351, top: 344, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '79% margin', size: 29, weight: 400, color: NOTE },
                { text: '(12pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1351, top: 1095, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'Revenue', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1633, top: 1089, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating loss', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(41%) margin', size: 29, weight: 400, color: NOTE },
                { text: '(59pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1820, top: 506, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 498, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Research &', size: 31, weight: 800 },
                { text: 'development', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '52% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+21pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 773, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Sales &', size: 31, weight: 800 },
                { text: 'marketing', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '38% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1045, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'General &', size: 31, weight: 800 },
                { text: 'Admin', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '31% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+18pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 155, notes: ['+44% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 178, notes: ['+48% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 333, notes: ['+46% Y/Y'], color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 265, notes: ['79% margin', '(12pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'Revenue'], value: 69, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: 'Operating loss', value: -137, notes: ['(41%) margin', '(59pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 402, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'Research & development', value: 173, notes: ['52% of revenue', '+21pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'Sales & marketing', value: 126, notes: ['38% of revenue', '+7pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'General & Admin', value: 104, notes: ['31% of revenue', '+18pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'united_states', target: 'revenue', value: 155, width: h(155), sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 178, width: h(178), sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 265, width: h(265), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 69, width: h(69), sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 265, width: h(265), sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 137, width: h(137), sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 173, width: h(173), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 126, width: h(126), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 104, width: h(104), sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Figma · 2026 财年第一季度',
        meta: {
          title: 'Figma 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 1850,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +44%'] },
          international: { label: '国际', notes: ['同比 +48%'] },
          revenue: { label: '收入', notes: ['同比 +46%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 79%', '同比 (12 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (41%)', '同比 (59 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 52%', '同比 +21 个百分点'] },
          sm: { label: '销售与营销', notes: ['占收入 38%', '同比 +7 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 31%', '同比 +18 个百分点'] },
        },
        layout: {
          labels: {
            united_states: {
              blocks: [
                {
                  x: 416, top: 438, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +44%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 64, top: 581, anchor: 'start', lines: [{ text: '美国', size: 40, weight: 800 }] },
              ],
            },
            international: {
              blocks: [
                {
                  x: 416, top: 814, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +48%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 64, top: 962, anchor: 'start', lines: [{ text: '国际', size: 40, weight: 800 }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 885, top: 516, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +46%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1351, top: 344, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 79%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (12 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1351, top: 1095, anchor: 'middle', lineGap: 8,
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
                  x: 1633, top: 1089, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业亏损', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 (41%)', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (59 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1820, top: 506, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 498, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研究与', size: 31, weight: 800 },
                    { text: '开发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 52%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +21 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 773, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售与', size: 31, weight: 800 },
                    { text: '营销', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 38%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +7 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1045, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '一般及', size: 31, weight: 800 },
                    { text: '行政', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 31%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +18 个百分点', size: 29, weight: 400, color: NOTE },
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
