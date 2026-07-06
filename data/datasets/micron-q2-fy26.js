/* ====================================================================
 * Micron - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/micron-q2-fy26.png as a fixed
 * d3-sankey layout with reusable inline SVG Micron annotations.
 * Geometry measured from the reference image (scale ~13.9 px per $B).
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const MAGENTA = '#bd03f7';
  const BLACK = '#111111';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';

  // ---- inline vector icons (dataset-local, drawn over the #f2f2f2 canvas) ----

  // "micron" lowercase wordmark, drawn as rounded stroke letterforms.
  // Baseline y=80, x-height top y=52, stem stroke 12px, viewBox 0 0 300 100.
  const LOGO = `
    <g fill="none" stroke="#111111" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
      <!-- m -->
      <path d="M8 80 V52 a13 13 0 0 1 26 0 V80"/>
      <path d="M34 65 a13 13 0 0 1 26 0 V80"/>
      <!-- i -->
      <path d="M78 56 V80"/>
      <!-- c -->
      <path d="M126 60 a14 14 0 1 0 0 24"/>
      <!-- r -->
      <path d="M150 56 V80 M150 64 a12 12 0 0 1 15 -6"/>
      <!-- o -->
      <circle cx="200" cy="66" r="14"/>
      <!-- n -->
      <path d="M232 80 V52 a13 13 0 0 1 26 0 V80"/>
    </g>
    <circle cx="78" cy="40" r="4" fill="#111111"/>
    <text x="294" y="86" font-family="Montserrat,Arial,sans-serif"
      font-weight="700" font-size="8" fill="#111111">&#174;</text>`;

  // Cloud Memory: three stacked SSD / memory drives (stylized vector of the render).
  const CLOUD_MEMORY_ICON = `
    <g stroke="#111111" stroke-width="3" stroke-linejoin="round">
      <rect x="34" y="10" width="52" height="20" rx="3" fill="#2b2b2b"
        transform="rotate(-18 60 20)"/>
      <rect x="10" y="40" width="60" height="22" rx="3" fill="#1f1f1f"
        transform="rotate(-14 40 51)"/>
      <rect x="52" y="52" width="44" height="16" rx="3" fill="#2b2b2b"
        transform="rotate(-14 74 60)"/>
    </g>
    <g fill="${MAGENTA}" opacity="0.85">
      <rect x="20" y="52" width="12" height="2.2" transform="rotate(-14 26 53)"/>
      <rect x="42" y="18" width="10" height="2.0" transform="rotate(-18 47 19)"/>
    </g>`;

  // Core Data Center: stacked server racks with magenta activity bars.
  const DATA_CENTER_ICON = `
    <g stroke="#111111" stroke-width="4" stroke-linejoin="round" fill="#ffffff">
      <rect x="20" y="16" width="60" height="18" rx="6"/>
      <rect x="20" y="41" width="60" height="18" rx="6"/>
      <rect x="20" y="66" width="60" height="18" rx="6"/>
    </g>
    <g fill="#111111">
      <circle cx="31" cy="25" r="3"/>
      <circle cx="31" cy="50" r="3"/>
      <circle cx="31" cy="75" r="3"/>
    </g>
    <g fill="${MAGENTA}">
      <rect x="42" y="23" width="24" height="4" rx="2"/>
      <rect x="42" y="48" width="24" height="4" rx="2"/>
      <rect x="42" y="73" width="24" height="4" rx="2"/>
    </g>`;

  // Mobile & Client: smartphone outline with magenta diagonal reflection.
  const MOBILE_ICON = `
    <rect x="16" y="6" width="52" height="88" rx="12" fill="#ffffff" stroke="#111111" stroke-width="4.5"/>
    <path d="M34 14 h16" stroke="#111111" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="42" cy="86" r="2.6" fill="#111111"/>
    <g stroke="${MAGENTA}" stroke-width="5" stroke-linecap="round">
      <path d="M26 62 L58 26"/>
      <path d="M30 78 L60 44"/>
    </g>`;

  // Automotive & Embedded: steering wheel in a double ring.
  const AUTO_ICON = `
    <circle cx="50" cy="50" r="40" fill="#ffffff" stroke="${MAGENTA}" stroke-width="6"/>
    <circle cx="50" cy="50" r="40" fill="none" stroke="#111111" stroke-width="4"
      stroke-dasharray="150 200" stroke-dashoffset="-6"/>
    <g fill="none" stroke="#111111" stroke-width="6" stroke-linecap="round">
      <path d="M18 45 h18 a14 14 0 0 1 28 0 h18"/>
      <path d="M50 52 V84"/>
      <path d="M50 52 C 34 56 26 70 24 82"/>
      <path d="M50 52 C 66 56 74 70 76 82"/>
    </g>
    <circle cx="50" cy="50" r="4.5" fill="${MAGENTA}"/>`;

  const svgIcon = (markup, x, y, w, h, viewBox) => `
    <svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${viewBox}" overflow="visible">
      ${markup}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${svgIcon(CLOUD_MEMORY_ICON, 132, 424, 152, 90, '0 0 100 78')}
      ${svgIcon(DATA_CENTER_ICON, 158, 672, 106, 106, '0 0 100 100')}
      ${svgIcon(MOBILE_ICON, 178, 918, 66, 108, '0 0 84 100')}
      ${svgIcon(AUTO_ICON, 149, 1095, 118, 118, '0 0 100 100')}
      <line x1="2131" y1="684" x2="2210" y2="684" stroke="${GREEN_LINK}" stroke-width="2" stroke-linecap="round"/>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'micron-q2-fy26',
    name: 'Micron · Q2 FY26',
    company: 'Micron',
    meta: {
      company: 'Micron',
      title: 'Micron Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/micron-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 190,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2148,
      // The reference places the period stamp mid-canvas (below the opex flow),
      // not in the usual top-right corner.
      periodX: 1840,
      periodY: 1205,
      periodNoteY: 1246,
      periodAnchor: 'middle',
      logoWidth: 700,
      logoHeight: 240,
      logoX: 700,
      logoY: 180,
      logoViewBox: '0 0 300 100',
      logoSvg: LOGO,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: MAGENTA },
        hub: { node: BLACK, label: MAGENTA },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 44, value: 44, note: 30, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 13.9,
      nodes: {
        cloud_memory: { x: 401, y: 504, width: 71, height: 108 },
        core_data_center: { x: 401, y: 774, width: 71, height: 78 },
        mobile_client: { x: 401, y: 1015, width: 71, height: 106 },
        automotive_embedded: { x: 401, y: 1284, width: 71, height: 36 },
        revenue: { x: 868, y: 711, width: 71, height: 333 },
        gross_profit: { x: 1335, y: 606, width: 71, height: 247 },
        cost_of_revenue: { x: 1335, y: 1052, width: 71, height: 84 },
        operating_profit: { x: 1802, y: 527, width: 71, height: 224 },
        operating_expenses: { x: 1802, y: 935, width: 71, height: 21 },
        other_income: { x: 2132, y: 683, width: 72, height: 1, color: BG },
        net_profit: { x: 2269, y: 429, width: 72, height: 192 },
        tax: { x: 2269, y: 836, width: 72, height: 31 },
        rnd: { x: 2269, y: 1055, width: 72, height: 16 },
        sga: { x: 2269, y: 1221, width: 72, height: 3 },
        other_opex: { x: 2269, y: 1380, width: 72, height: 1 },
      },
      labels: {
        cloud_memory: {
          blocks: [
            {
              x: 436, top: 403, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 44, weight: 400, color: MAGENTA },
                { text: '+163% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 214, top: 526, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cloud Memory', size: 40, weight: 800, color: MAGENTA },
                { text: '66% operating margin', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        core_data_center: {
          blocks: [
            {
              x: 436, top: 674, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 44, weight: 400, color: MAGENTA },
                { text: '+211% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 214, top: 781, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Core Data Center', size: 40, weight: 800, color: MAGENTA },
                { text: '67% operating margin', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        mobile_client: {
          blocks: [
            {
              x: 436, top: 912, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 44, weight: 400, color: MAGENTA },
                { text: '+245% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 214, top: 1018, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Mobile & Client', size: 40, weight: 800, color: MAGENTA },
                { text: '76% operating margin', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        automotive_embedded: {
          blocks: [
            {
              x: 436, top: 1183, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 44, weight: 400, color: MAGENTA },
                { text: '+162% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 214, top: 1219, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Automotive', size: 40, weight: 800, color: MAGENTA },
                { text: '& Embedded', size: 40, weight: 800, color: MAGENTA },
                { text: '62% operating margin', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 904, top: 558, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 46, weight: 800, color: MAGENTA },
                { text: '$value', size: 44, weight: 400, color: MAGENTA },
                { text: '+196% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1370, top: 415, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '74% margin', size: 30, weight: 400, color: NOTE },
                { text: '+38pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1370, top: 1147, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 40, weight: 800 },
                { text: 'revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1838, top: 334, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '68% margin', size: 30, weight: 400, color: NOTE },
                { text: '+46pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1838, top: 974, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
                { text: '$value', size: 40, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2466, top: 442, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '58% margin', size: 30, weight: 400, color: NOTE },
                { text: '+38pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2457, top: 816, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Tax', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2168, top: 699, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Other', size: 34, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 34, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2457, top: 1027, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'R&D', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2457, top: 1178, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'SG&A', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2457, top: 1304, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Other', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'cloud_memory', col: 0, order: 0, type: 'source', label: 'Cloud Memory', value: 7.7, notes: ['+163% Y/Y', '66% operating margin'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'core_data_center', col: 0, order: 1, type: 'source', label: 'Core Data Center', value: 5.7, notes: ['+211% Y/Y', '67% operating margin'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'mobile_client', col: 0, order: 2, type: 'source', label: 'Mobile & Client', value: 7.7, notes: ['+245% Y/Y', '76% operating margin'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'automotive_embedded', col: 0, order: 3, type: 'source', label: ['Automotive', '& Embedded'], value: 2.7, notes: ['+162% Y/Y', '62% operating margin'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 23.9, notes: ['+196% Y/Y'], color: BLACK, labelColor: MAGENTA },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 17.8, notes: ['74% margin', '+38pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.1 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 16.1, notes: ['68% margin', '+46pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.6 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.021, valueText: '$21M', color: BG, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 1, type: 'profit', label: 'Net profit', value: 13.8, notes: ['58% margin', '+38pp Y/Y'] },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 2.4, valueText: '($2.4B)' },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 1.3 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.3 },
      { id: 'other_opex', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.026, valueText: '($26M)' },
    ],

    links: [
      { source: 'cloud_memory', target: 'revenue', value: 7.7, width: 108, targetOrder: 0 },
      { source: 'core_data_center', target: 'revenue', value: 5.7, width: 80, targetOrder: 1 },
      { source: 'mobile_client', target: 'revenue', value: 7.7, width: 108, targetOrder: 2 },
      { source: 'automotive_embedded', target: 'revenue', value: 2.7, width: 37, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 17.8, width: 247, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.1, width: 84, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 16.1, width: 224, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.6, width: 21, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 13.8, width: 191, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2.4, width: 31, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.021, width: 1, sourceOrder: 0, targetOrder: 1, y0: 684, y1: 620.5, linkTint: { left: GREEN_LINK, right: GREEN_LINK }, curve: { x0: 2210, c1x: 2242, c1y: 684, c2x: 2231, c2y: 620.5 } },
      { source: 'operating_expenses', target: 'rnd', value: 1.3, width: 16, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, width: 3, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.026, width: 1, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Micron · 2026 财年第二季度',
        meta: {
          title: 'Micron 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 2 月',
          titleTextLength: 1500,
        },
        nodes: {
          cloud_memory: { label: '云内存', notes: ['同比 +163%', '营业利润率 66%'] },
          core_data_center: { label: '核心数据中心', notes: ['同比 +211%', '营业利润率 67%'] },
          mobile_client: { label: '移动与客户端', notes: ['同比 +245%', '营业利润率 76%'] },
          automotive_embedded: { label: ['汽车', '与嵌入式'], notes: ['同比 +162%', '营业利润率 62%'] },
          revenue: { label: '收入', notes: ['同比 +196%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 +38 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 68%', '同比 +46 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 58%', '同比 +38 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售及行政' },
          other_opex: { label: '其他' },
        },
        // Nodes whose fixed-layout blocks contain non-$value text need explicit
        // zh blocks; these overrides replace all of a node's blocks and keep full
        // geometry + per-line sizing. Other nodes are localized automatically by
        // localizeLayoutLabels from the node label/notes above.
        layout: {
          labels: {
            cloud_memory: {
              blocks: [
                {
                  x: 436, top: 403, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 44, weight: 400, color: MAGENTA },
                    { text: '同比 +163%', size: 30, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 214, top: 526, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '云内存', size: 40, weight: 800, color: MAGENTA },
                    { text: '营业利润率 66%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            core_data_center: {
              blocks: [
                {
                  x: 436, top: 674, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 44, weight: 400, color: MAGENTA },
                    { text: '同比 +211%', size: 30, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 214, top: 781, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '核心数据中心', size: 40, weight: 800, color: MAGENTA },
                    { text: '营业利润率 67%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            mobile_client: {
              blocks: [
                {
                  x: 436, top: 912, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 44, weight: 400, color: MAGENTA },
                    { text: '同比 +245%', size: 30, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 214, top: 1018, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '移动与客户端', size: 40, weight: 800, color: MAGENTA },
                    { text: '营业利润率 76%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            automotive_embedded: {
              blocks: [
                {
                  x: 436, top: 1183, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 44, weight: 400, color: MAGENTA },
                    { text: '同比 +162%', size: 30, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 214, top: 1219, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '汽车与嵌入式', size: 40, weight: 800, color: MAGENTA },
                    { text: '营业利润率 62%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 904, top: 558, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 46, weight: 800, color: MAGENTA },
                    { text: '$value', size: 44, weight: 400, color: MAGENTA },
                    { text: '同比 +196%', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1370, top: 415, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 44, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 74%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 +38 个百分点', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1370, top: 1147, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '成本', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1838, top: 334, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 44, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 68%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 +46 个百分点', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1838, top: 974, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '营业费用', size: 40, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 40, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            other_income: {
              blocks: [
                {
                  x: 2168, top: 699, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '其他', size: 34, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 34, weight: 400, color: GREEN_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2478, top: 442, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 44, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 58%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 +38 个百分点', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2457, top: 816, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '税费', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2457, top: 1027, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '研发', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2457, top: 1178, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '销售及行政', size: 36, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            other_opex: {
              blocks: [
                {
                  x: 2457, top: 1304, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '其他', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
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
