/* ====================================================================
 * Broadcom - Q4 FY24 income statement ($B)
 * Reconstructed from input/processed/broadcom-q4-fy24.png as a fixed
 * d3-sankey layout with reusable inline SVG Broadcom annotations.
 * Geometry measured from the reference image (scale ~20.8 px per $B).
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#6b6b6b';
  const CRIMSON = '#cc092f';
  const CRIMSON_LINK = '#e0899a';
  const BLUE = '#0098c7';
  const BLUE_LINK = '#85c9df';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';

  // ---- inline vector icons (dataset-local, drawn over the #f2f2f2 canvas) ----
  const LOGO = `
    <circle cx="50" cy="50" r="49" fill="${CRIMSON}"/>
    <path d="M7 56 C 15 56 18 50 25 50 C 33 50 35 64 42 64 C 46 64 47 31 50 31 C 53 31 54 64 58 64 C 65 64 67 50 75 50 C 82 50 85 56 93 56"
      fill="none" stroke="#ffffff" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"/>`;

  const SEMI_ICON = `
    <rect x="16" y="16" width="68" height="68" rx="13" fill="${CRIMSON}"/>
    <g fill="${BG}">
      <rect x="27" y="27" width="17" height="17" rx="3"/>
      <rect x="49" y="27" width="10" height="10" rx="2"/>
      <rect x="27" y="56" width="10" height="10" rx="2"/>
      <circle cx="69" cy="33" r="3.6"/>
      <circle cx="50" cy="71" r="3.6"/>
    </g>
    <g fill="none" stroke="${BG}" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M62 33 h7"/>
      <path d="M56 52 h13 v13 h-14"/>
      <path d="M44 61 h6 v10"/>
    </g>`;

  const INFRA_ICON = `
    <path d="M63 18 a11 11 0 0 1 20 4 a8.5 8.5 0 0 1 -2 16 h-20 a9.5 9.5 0 0 1 2 -20 z" fill="${BLUE}"/>
    <rect x="14" y="34" width="52" height="52" rx="7" fill="${BLUE}"/>
    <g fill="none" stroke="${BG}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M33 51 l-10 9 l10 9"/>
      <path d="M47 51 l10 9 l-10 9"/>
    </g>`;

  const svgIcon = (markup, x, y, w, h, viewBox) => `
    <svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${viewBox}" overflow="visible">
      ${markup}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="568" y="315" fill="#000000" font-size="57" font-weight="800" textLength="610" lengthAdjust="spacingAndGlyphs">BROADCOM</text>
      <text x="1183" y="265" fill="#000000" font-size="23" font-weight="700">®</text>
      ${svgIcon(SEMI_ICON, 128, 465, 145, 145, '0 0 100 100')}
      ${svgIcon(INFRA_ICON, 133, 889, 165, 152, '0 0 100 100')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'broadcom-q4-fy24',
    name: 'Broadcom · Q4 FY24',
    company: 'Broadcom',
    meta: {
      company: 'Broadcom',
      title: 'Broadcom Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Oct. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/broadcom-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 178,
      titleSize: 74,
      titleWeight: 800,
      titleTextLength: 2349,
      periodX: 200,
      periodY: 330,
      periodNoteY: 371,
      logoWidth: 190,
      logoHeight: 190,
      logoY: 353,
      logoViewBox: '0 0 100 100',
      logoSvg: LOGO,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: '#5e5e5e',
      noteColor: NOTE,
      palette: {
        source: { node: CRIMSON, label: CRIMSON },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: CRIMSON_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      interfaceAudit: { mode: 'error' },
      linkOpacity: 1,
      type: { name: 44, value: 44, note: 30, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 27.1,
      nodes: {
        semiconductor_solutions: { x: 392, y: 582, width: 71, height: 223 },
        infrastructure_software: { x: 392, y: 1029, width: 71, height: 156 },
        revenue: { x: 859, y: 702, width: 70, height: 383 },
        gross_profit: { x: 1336, y: 580, width: 71, height: 243 },
        cost_of_revenue: { x: 1336, y: 1047, width: 71, height: 137 },
        operating_profit: { x: 1796, y: 474, width: 70, height: 124 },
        operating_expenses: { x: 1794, y: 802, width: 70, height: 118 },
        tax_benefit: { x: 2124, y: 541, width: 70, height: 10 },
        net_profit: { x: 2260, y: 353, width: 71, height: 114 },
        other: { x: 2260, y: 676, width: 71, height: 21 },
        rnd: { x: 2260, y: 850, width: 71, height: 59 },
        sga: { x: 2260, y: 1015, width: 71, height: 25 },
        amortization: { x: 2260, y: 1147, width: 71, height: 20 },
        restructuring: { x: 2260, y: 1286, width: 71, height: 7 },
      },
      labels: {
        semiconductor_solutions: {
          blocks: [
            {
              x: 428, top: 487, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$8.2B', size: 44, weight: 400, color: CRIMSON },
                { text: '+12% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 195, top: 643, anchor: 'middle', lineGap: 14, semanticRole: 'top-aligned-side-label',
              lines: [
                { text: 'Semiconductor', size: 38, weight: 800, color: '#000000' },
                { text: 'solutions', size: 38, weight: 800, color: '#000000' },
                { text: 'Networking, Server Storage,', size: 24, weight: 400, color: NOTE },
                { text: 'Broadband, Wireless,', size: 24, weight: 400, color: NOTE },
                { text: 'Industrial', size: 24, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        infrastructure_software: {
          blocks: [
            {
              x: 435, top: 934, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 44, weight: 400, color: BLUE },
                { text: '+196% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 202, top: 1059, anchor: 'middle', lineGap: 12, semanticRole: 'top-aligned-side-label',
              lines: [
                { text: 'Infrastructure', size: 38, weight: 800, color: '#000000' },
                { text: 'software', size: 38, weight: 800, color: '#000000' },
                { text: 'Mainframe, Distributed,', size: 24, weight: 400, color: NOTE },
                { text: 'Cybersecurity, SAN, Cloud', size: 24, weight: 400, color: NOTE },
                { text: 'Infrastructure', size: 24, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 894, top: 552, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 46, weight: 800 },
                { text: '$value', size: 44, weight: 400 },
                { text: '+51% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1371, top: 397, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '64% margin', size: 30, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1371, top: 1205, anchor: 'middle', lineGap: 7,
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
              x: 1841, top: 291, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '33% margin', size: 30, weight: 400, color: NOTE },
                { text: '(13pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1829, top: 943, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        tax_benefit: {
          blocks: [
            {
              x: 2159, top: 569, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Tax benefit', size: 34, weight: 800, color: '#008e00' },
                { text: '$value', size: 34, weight: 400, color: '#008e00' },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2465, top: 349, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '30% margin', size: 30, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2458, top: 661, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2472, top: 837, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'R&D ($2.2B)', size: 34, weight: 800 },
                { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2472, top: 949, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'SG&A ($1.0B)', size: 34, weight: 800 },
                { text: '7% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2472, top: 1089, anchor: 'middle', lineGap: 2,
              lines: [
                { text: 'Amortization', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
                { text: '6% of revenue', size: 24, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 24, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: 2472, top: 1251, anchor: 'middle', lineGap: 2,
              lines: [
                { text: 'Restructuring', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
                { text: '2% of revenue', size: 24, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 24, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'semiconductor_solutions', col: 0, order: 0, type: 'source', label: ['Semiconductor', 'solutions'], value: 8.2, notes: ['+12% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'], color: CRIMSON, labelColor: CRIMSON, linkTint: CRIMSON_LINK },
      { id: 'infrastructure_software', col: 0, order: 1, type: 'source', label: ['Infrastructure', 'software'], value: 5.8, notes: ['+196% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 14.1, notes: ['+51% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 9.0, valueText: '$9.0B', notes: ['64% margin', '(5pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.1 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4.6, notes: ['33% margin', '(13pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.4 },
      { id: 'tax_benefit', col: 4, order: 0, type: 'profit', label: 'Tax benefit', value: 0.4, notes: [], color: '#008e00', labelColor: '#008e00', linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 4.2, notes: ['30% margin', '(8pp) Y/Y'] },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 0.9 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 2.2, notes: ['16% of revenue', '+1pp Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 1.0, valueText: '($1.0B)', notes: ['7% of revenue', '+3pp Y/Y'] },
      { id: 'amortization', col: 5, order: 4, type: 'cost', label: 'Amortization', value: 0.8, notes: ['6% of revenue', '+2pp Y/Y'] },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 0.3, notes: ['2% of revenue', '+2pp Y/Y'] },
    ],

    links: [
      { source: 'semiconductor_solutions', target: 'revenue', value: 8.2, width: 223, targetOrder: 0 },
      { source: 'infrastructure_software', target: 'revenue', value: 5.8, width: 156, sourceWidth: 156, targetWidth: 160, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 9.0, width: 243, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.1, width: 137, sourceWidth: 140, targetWidth: 137, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.6, width: 124, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.4, width: 118, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.8, width: 103, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.9, width: 21, sourceOrder: 1, targetOrder: 0 },
      { source: 'tax_benefit', target: 'net_profit', value: 0.4, width: 10, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 2.2, width: 59, sourceWidth: 60, targetWidth: 59, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.0, width: 25, sourceWidth: 27, targetWidth: 25, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.8, width: 20, sourceWidth: 22, targetWidth: 20, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.3, width: 7, sourceWidth: 9, targetWidth: 7, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['BROADCOM'],
      zh: {
        name: 'Broadcom · 2024 财年第四季度',
        meta: {
          title: 'Broadcom 2024 财年第四季度利润表',
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 10 月',
          titleTextLength: 1500,
        },
        nodes: {
          semiconductor_solutions: { label: ['半导体', '解决方案'], notes: ['同比 +12%', '网络、服务器存储、宽带、无线、工业'] },
          infrastructure_software: { label: ['基础设施', '软件'], notes: ['同比 +196%', '大型机、分布式、网络安全、SAN、云基础设施'] },
          revenue: { label: '收入', notes: ['同比 +51%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 64%', '同比 (5 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 (13 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 (8 个百分点)'] },
          other: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 16%', '同比 +1 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%', '同比 +3 个百分点'] },
          amortization: { label: '摊销', notes: ['占收入 6%', '同比 +2 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 2%', '同比 +2 个百分点'] },
        },
        // Only nodes whose label text cannot auto-translate need explicit zh
        // blocks; every other node is localized by localizeLayoutLabels, which
        // preserves the English block geometry. These overrides replace all of
        // a node's blocks, so each keeps full geometry + per-line sizing.
        layout: {
          labels: {
            semiconductor_solutions: {
              blocks: [
                {
                  x: 428, top: 487, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$8.2B', size: 44, weight: 400, color: CRIMSON },
                    { text: '同比 +12%', size: 30, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 202, top: 643, anchor: 'middle', lineGap: 14, semanticRole: 'top-aligned-side-label',
                  lines: [
                    { text: '半导体解决方案', size: 38, weight: 800, color: '#000000' },
                    { text: '网络、服务器存储、', size: 24, weight: 400, color: NOTE },
                    { text: '宽带、无线、工业', size: 24, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            infrastructure_software: {
              blocks: [
                {
                  x: 435, top: 934, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 44, weight: 400, color: BLUE },
                    { text: '同比 +196%', size: 30, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 202, top: 1059, anchor: 'middle', lineGap: 12, semanticRole: 'top-aligned-side-label',
                  lines: [
                    { text: '基础设施软件', size: 38, weight: 800, color: '#000000' },
                    { text: '大型机、分布式、网络安全、', size: 22, weight: 400, color: NOTE },
                    { text: 'SAN、云基础设施', size: 22, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2472, top: 949, anchor: 'middle', lineGap: 2,
                  lines: [
                    { text: '销售及行政', size: 30, weight: 800 },
                    { text: '$value', size: 28, weight: 400 },
                    { text: '占收入 7%', size: 24, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 24, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: 2472, top: 1089, anchor: 'middle', lineGap: 2,
                  lines: [
                    { text: '摊销', size: 34, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                    { text: '占收入 6%', size: 24, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 24, weight: 400, color: NOTE },
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
