/* ====================================================================
 * Broadcom - Q4 FY23 income statement ($B)
 * Reconstructed from input/processed/broadcom-q4-fy23.png as a fixed
 * d3-sankey layout with reusable inline SVG Broadcom branding.
 * Geometry measured from the reference image (scale ~37 px per $B).
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#6b6b6b';
  const CRIMSON = '#cc092f';
  const CRIMSON_LINK = '#e0899a';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';

  // ---- inline vector brand marks (dataset-local, drawn over the source canvas) ----
  const LOGO = `
    <circle cx="50" cy="50" r="49" fill="${CRIMSON}"/>
    <path d="M7 56 C 15 56 18 50 25 50 C 33 50 35 64 42 64 C 46 64 47 31 50 31 C 53 31 54 64 58 64 C 65 64 67 50 75 50 C 82 50 85 56 93 56"
      fill="none" stroke="#ffffff" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"/>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="565" y="330" fill="#000000" font-size="98" font-weight="800" letter-spacing="1">BROADCOM</text>
      <text x="1178" y="272" fill="#000000" font-size="23" font-weight="700">®</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'broadcom-q4-fy23',
    name: 'Broadcom · Q4 FY23',
    company: 'Broadcom',
    meta: {
      company: 'Broadcom',
      title: 'Broadcom Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending Oct. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/broadcom-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 200,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2349,
      periodX: 400,
      periodY: 1310,
      periodNoteY: 1352,
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
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
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
      scale: 37.1,
      nodes: {
        semiconductor_solutions: { x: 370, y: 588, width: 71, height: 271 },
        infrastructure_software: { x: 370, y: 1078, width: 71, height: 72 },
        revenue: { x: 837, y: 709, width: 70, height: 346 },
        gross_profit: { x: 1291, y: 593, width: 72, height: 238 },
        cost_of_revenue: { x: 1296, y: 1037, width: 72, height: 105 },
        operating_profit: { x: 1769, y: 507, width: 70, height: 156 },
        operating_expenses: { x: 1769, y: 831, width: 70, height: 78 },
        net_profit: { x: 2238, y: 408, width: 71, height: 130 },
        tax: { x: 2238, y: 676, width: 71, height: 15 },
        other: { x: 2238, y: 788, width: 71, height: 8 },
        rnd: { x: 2238, y: 888, width: 71, height: 50 },
        sga: { x: 2238, y: 1050, width: 71, height: 13 },
        amortization: { x: 2238, y: 1176, width: 71, height: 10 },
        restructuring: { x: 2238, y: 1309, width: 71, height: 4 },
      },
      labels: {
        semiconductor_solutions: {
          blocks: [
            {
              x: 405, top: 489, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$7.3B', size: 44, weight: 400 },
                { text: '+3% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 195, top: 681, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Semiconductor', size: 38, weight: 800 },
                { text: 'solutions', size: 38, weight: 800 },
              ],
            },
          ],
        },
        infrastructure_software: {
          blocks: [
            {
              x: 405, top: 980, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$2.0B', size: 44, weight: 400 },
                { text: '+7% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 195, top: 1069, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Infrastructure', size: 38, weight: 800 },
                { text: 'software', size: 38, weight: 800 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 872, top: 558, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 46, weight: 800 },
                { text: '$value', size: 44, weight: 400 },
                { text: '+4% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1327, top: 403, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '69% margin', size: 30, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1332, top: 1157, anchor: 'middle', lineGap: 7,
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
              x: 1804, top: 314, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '46% margin', size: 30, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1804, top: 929, anchor: 'middle', lineGap: 7,
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
              x: 2430, top: 403, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '38% margin', size: 30, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2430, top: 630, anchor: 'middle', lineGap: 7,
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
              x: 2430, top: 747, anchor: 'middle', lineGap: 7,
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
              x: 2445, top: 873, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'R&D ($1.4B)', size: 34, weight: 800 },
                { text: '15% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2444, top: 1015, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'SG&A ($0.4B)', size: 34, weight: 800 },
                { text: '4% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2455, top: 1155, anchor: 'middle', lineGap: 2,
              lines: [
                { text: 'Amortization', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
                { text: '4% of revenue', size: 24, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: 2457, top: 1281, anchor: 'middle', lineGap: 2,
              lines: [
                { text: 'Restructuring', size: 34, weight: 800 },
                { text: '($13M)', size: 34, weight: 400 },
                { text: '0% of revenue', size: 24, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'semiconductor_solutions', col: 0, order: 0, type: 'source', label: ['Semiconductor', 'solutions'], value: 7.3, notes: ['+3% Y/Y'], color: '#000000', labelColor: '#000000', linkTint: GRAY_LINK },
      { id: 'infrastructure_software', col: 0, order: 1, type: 'source', label: ['Infrastructure', 'software'], value: 2.0, valueText: '$2.0B', notes: ['+7% Y/Y'], color: '#000000', labelColor: '#000000', linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 9.3, notes: ['+4% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.4, notes: ['69% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.9 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4.2, notes: ['46% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.2 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 3.5, notes: ['38% margin', '+0pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.3 },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 1.4, notes: ['15% of revenue', '+2pp Y/Y'] },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.4, notes: ['4% of revenue', '+0pp Y/Y'] },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.3, notes: ['4% of revenue'] },
      { id: 'restructuring', col: 4, order: 6, type: 'cost', label: 'Restructuring', value: 0.013, valueText: '($13M)', notes: ['0% of revenue'] },
    ],

    links: [
      { source: 'semiconductor_solutions', target: 'revenue', value: 7.3, sourceWidth: 271, targetWidth: 271, y0: 723.5, y1: 844.5, targetOrder: 0 },
      { source: 'infrastructure_software', target: 'revenue', value: 2.0, sourceWidth: 72, targetWidth: 75, y0: 1114, y1: 1017.5, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 6.4, sourceWidth: 238, targetWidth: 238, y0: 828, y1: 712, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.9, sourceWidth: 108, targetWidth: 105, y0: 1001, y1: 1089.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.2, sourceWidth: 156, targetWidth: 156, y0: 671, y1: 585, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.2, sourceWidth: 82, targetWidth: 78, y0: 790, y1: 870, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.5, sourceWidth: 130, targetWidth: 130, y0: 572, y1: 473, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 18, targetWidth: 15, y0: 646, y1: 683.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.3, sourceWidth: 8, targetWidth: 8, y0: 659, y1: 792, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.4, sourceWidth: 50, targetWidth: 50, y0: 856, y1: 913, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.4, sourceWidth: 15, targetWidth: 13, y0: 888.5, y1: 1056.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.3, sourceWidth: 12, targetWidth: 10, y0: 902, y1: 1181, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.013, sourceWidth: 1, targetWidth: 1, y0: 908.5, y1: 1311, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Broadcom · 2023 财年第四季度',
        meta: {
          title: 'Broadcom 2023 财年第四季度利润表',
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 10 月',
          titleTextLength: 1500,
        },
        nodes: {
          semiconductor_solutions: { label: ['半导体', '解决方案'], notes: ['同比 +3%'] },
          infrastructure_software: { label: ['基础设施', '软件'], notes: ['同比 +7%'] },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 69%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 38%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 15%', '同比 +2 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 4%', '同比 +0 个百分点'] },
          amortization: { label: '摊销', notes: ['占收入 4%'] },
          restructuring: { label: '重组', notes: ['占收入 0%'] },
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
                  x: 405, top: 489, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$7.3B', size: 44, weight: 400 },
                    { text: '同比 +3%', size: 30, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 195, top: 701, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '半导体解决方案', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            infrastructure_software: {
              blocks: [
                {
                  x: 405, top: 980, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$2.0B', size: 44, weight: 400 },
                    { text: '同比 +7%', size: 30, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 195, top: 1091, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '基础设施软件', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2444, top: 1015, anchor: 'middle', lineGap: 2,
                  lines: [
                    { text: '销售及行政', size: 30, weight: 800 },
                    { text: '$value', size: 28, weight: 400 },
                    { text: '占收入 4%', size: 24, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 24, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: 2455, top: 1155, anchor: 'middle', lineGap: 2,
                  lines: [
                    { text: '摊销', size: 34, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                    { text: '占收入 4%', size: 24, weight: 400, color: NOTE },
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
