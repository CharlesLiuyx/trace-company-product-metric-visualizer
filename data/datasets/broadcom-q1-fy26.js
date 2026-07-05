/* ====================================================================
 * Broadcom - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/broadcom-q1-fy26.png as a fixed
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
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="576" y="322" fill="#000000" font-size="98" font-weight="800" letter-spacing="1">BROADCOM</text>
      <text x="1188" y="263" fill="#000000" font-size="23" font-weight="700">®</text>
      ${svgIcon(SEMI_ICON, 128, 461, 145, 145, '0 0 100 100')}
      ${svgIcon(INFRA_ICON, 133, 923, 165, 130, '0 0 100 100')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'broadcom-q1-fy26',
    name: 'Broadcom · Q1 FY26',
    company: 'Broadcom',
    meta: {
      company: 'Broadcom',
      title: 'Broadcom Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/broadcom-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 200,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2349,
      periodX: 200,
      periodY: 319,
      periodNoteY: 360,
      logoWidth: 190,
      logoHeight: 190,
      logoY: 339,
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
      linkOpacity: 1,
      type: { name: 44, value: 44, note: 30, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 20.8,
      nodes: {
        semiconductor_solutions: { x: 389, y: 587, width: 72, height: 260 },
        infrastructure_software: { x: 390, y: 1056, width: 71, height: 140 },
        revenue: { x: 857, y: 682, width: 71, height: 402 },
        gross_profit: { x: 1324, y: 588, width: 71, height: 273 },
        cost_of_revenue: { x: 1324, y: 1063, width: 71, height: 127 },
        operating_profit: { x: 1791, y: 492, width: 71, height: 177 },
        operating_expenses: { x: 1791, y: 850, width: 71, height: 94 },
        net_profit: { x: 2258, y: 396, width: 72, height: 152 },
        tax: { x: 2258, y: 654, width: 72, height: 16 },
        other: { x: 2258, y: 764, width: 72, height: 6 },
        rnd: { x: 2258, y: 871, width: 72, height: 61 },
        sga: { x: 2258, y: 1031, width: 72, height: 20 },
        amortization: { x: 2258, y: 1163, width: 72, height: 9 },
        restructuring: { x: 2258, y: 1272, width: 72, height: 2 },
      },
      labels: {
        semiconductor_solutions: {
          blocks: [
            {
              x: 425, top: 489, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$12.5B', size: 44, weight: 400, color: CRIMSON },
                { text: '+52% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 195, top: 631, anchor: 'middle', lineGap: 8,
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
              x: 425, top: 950, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 44, weight: 400, color: BLUE },
                { text: '+1% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 195, top: 1117, anchor: 'middle', lineGap: 8,
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
              x: 894, top: 531, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 46, weight: 800 },
                { text: '$value', size: 44, weight: 400 },
                { text: '+29% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1360, top: 405, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '68% margin', size: 30, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1360, top: 1205, anchor: 'middle', lineGap: 7,
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
              x: 1826, top: 307, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '44% margin', size: 30, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1826, top: 962, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2472, top: 394, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '38% margin', size: 30, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2472, top: 629, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Tax', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2472, top: 725, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2472, top: 824, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'R&D ($3.0B)', size: 34, weight: 800 },
                { text: '15% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
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
                { text: '5% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2472, top: 1075, anchor: 'middle', lineGap: 2,
              lines: [
                { text: 'Amortization', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
                { text: '3% of revenue', size: 24, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 24, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: 2472, top: 1238, anchor: 'middle', lineGap: 2,
              lines: [
                { text: 'Restructuring', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
                { text: '1% of revenue', size: 24, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 24, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'semiconductor_solutions', col: 0, order: 0, type: 'source', label: ['Semiconductor', 'solutions'], value: 12.5, notes: ['+52% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'], color: CRIMSON, labelColor: CRIMSON, linkTint: CRIMSON_LINK },
      { id: 'infrastructure_software', col: 0, order: 1, type: 'source', label: ['Infrastructure', 'software'], value: 6.8, notes: ['+1% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 19.3, notes: ['+29% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 13.2, notes: ['68% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.2 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 8.6, notes: ['44% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.6 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 7.3, notes: ['38% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.8 },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.4 },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 3.0, notes: ['15% of revenue', '+0pp Y/Y'] },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 1.0, valueText: '($1.0B)', notes: ['5% of revenue', '(1pp) Y/Y'] },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.5, notes: ['3% of revenue', '(1pp) Y/Y'] },
      { id: 'restructuring', col: 4, order: 6, type: 'cost', label: 'Restructuring', value: 0.1, notes: ['1% of revenue', '(1pp) Y/Y'] },
    ],

    links: [
      { source: 'semiconductor_solutions', target: 'revenue', value: 12.5, width: 260, targetOrder: 0 },
      { source: 'infrastructure_software', target: 'revenue', value: 6.8, width: 140, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 13.2, width: 273, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.2, width: 127, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 8.6, width: 177, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.6, width: 94, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 7.3, width: 152, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.8, width: 16, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.4, width: 6, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 3.0, width: 61, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.0, width: 20, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.5, width: 9, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.1, width: 2, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['BROADCOM'],
      zh: {
        name: 'Broadcom · 2026 财年第一季度',
        meta: {
          title: 'Broadcom 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1500,
        },
        nodes: {
          semiconductor_solutions: { label: ['半导体', '解决方案'], notes: ['同比 +52%', '网络、服务器存储、宽带、无线、工业'] },
          infrastructure_software: { label: ['基础设施', '软件'], notes: ['同比 +1%', '大型机、分布式、网络安全、SAN、云基础设施'] },
          revenue: { label: '收入', notes: ['同比 +29%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 68%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 44%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 38%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 15%', '同比 +0 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 5%', '同比 (1 个百分点)'] },
          amortization: { label: '摊销', notes: ['占收入 3%', '同比 (1 个百分点)'] },
          restructuring: { label: '重组', notes: ['占收入 1%', '同比 (1 个百分点)'] },
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
                  x: 425, top: 489, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$12.5B', size: 44, weight: 400, color: CRIMSON },
                    { text: '同比 +52%', size: 30, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 200, top: 631, anchor: 'middle', lineGap: 8,
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
                  x: 425, top: 950, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 44, weight: 400, color: BLUE },
                    { text: '同比 +1%', size: 30, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 200, top: 1117, anchor: 'middle', lineGap: 8,
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
                    { text: '占收入 5%', size: 24, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 24, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: 2472, top: 1075, anchor: 'middle', lineGap: 2,
                  lines: [
                    { text: '摊销', size: 34, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                    { text: '占收入 3%', size: 24, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 24, weight: 400, color: NOTE },
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
