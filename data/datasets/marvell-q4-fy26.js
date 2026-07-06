/* ====================================================================
 * Marvell - Q4 FY26 income statement ($B)
 * Reconstructed from input/processed/marvell-q4-fy26.png as a fixed
 * d3-sankey layout with a pure inline SVG Marvell mark.
 * Geometry measured from the reference image (scale ~145 px per $B).
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const CYAN = '#12b2d1';
  const CYAN_LINK = '#82d2df';
  const BLUE = '#0d79cf';
  const BLUE_LINK = '#83b5dc';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#d80000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e28282';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2486;

  const marvellLogo = `
    <g fill="#202422">
      <path d="M8 0 L20 13 L20 87 L8 100 Z"/>
      <path d="M92 0 L80 13 L80 87 L92 100 Z"/>
      <path d="M25 10 H75 L68 18 H32 Z"/>
      <path d="M25 90 H75 L68 82 H32 Z"/>
      <path d="M33 27 L45 39 V66 L33 78 Z"/>
      <path d="M67 27 L55 39 V66 L67 78 Z"/>
      <path d="M41 38 H59 L50 48 Z"/>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'marvell-q4-fy26',
    name: 'Marvell · Q4 FY26',
    company: 'Marvell',
    meta: {
      company: 'Marvell',
      title: 'Marvell Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/marvell-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2190,
      periodX: 1944,
      periodY: 1228,
      periodNoteY: 1276,
      logoWidth: 286,
      logoHeight: 286,
      logoY: 270,
      logoViewBox: '0 0 100 100',
      logoSvg: marvellLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: CYAN, label: CYAN },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: CYAN_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },

    layout: {
      scale: 145,
      nodes: {
        data_center: { x: 426, y: 641, width: 72, height: 238 },
        communications_and_other: { x: 426, y: 1088, width: 72, height: 81 },
        revenue: { x: 894, y: 768, width: 71, height: 320 },
        gross_profit: { x: 1361, y: 641, width: 72, height: 165 },
        cost_of_revenue: { x: 1361, y: 1020, width: 71, height: 154 },
        operating_profit: { x: 1828, y: 556, width: 71, height: 57 },
        operating_expenses: { x: 1828, y: 775, width: 72, height: 107 },
        tax_benefit: { x: 2197, y: 576, width: 72, height: 3 },
        other_non_operating: { x: 2295, y: 713, width: 72, height: 2 },
        net_profit: { x: 2295, y: 471, width: 72, height: 55 },
        rnd: { x: 2295, y: 857, width: 72, height: 76 },
        sga: { x: 2295, y: 1117, width: 72, height: 28 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: {
        data_center: {
          blocks: [
            {
              x: 462, top: 536, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: CYAN },
                { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 280, top: 741, anchor: 'middle', lines: [{ text: 'Data center', size: 40, weight: 800, color: CYAN }] },
          ],
        },
        communications_and_other: {
          blocks: [
            {
              x: 462, top: 975, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+26% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 236, top: 1074, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Communications', size: 40, weight: 800, color: BLUE },
                { text: 'And other', size: 40, weight: 800, color: BLUE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 930, top: 615, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 46, weight: 800 },
                { text: '$value', size: 44, weight: 400 },
                { text: '+22% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1397, top: 397, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross', size: 44, weight: 800, color: GREEN_LABEL },
                { text: 'profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '52% margin', size: 30, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1397, top: 1190, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1864, top: 314, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800, color: GREEN_LABEL },
                { text: 'profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '18% margin', size: 29, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1864, top: 912, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'expenses', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        tax_benefit: {
          blocks: [
            {
              x: 2233, top: 598, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax benefit', size: 34, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 32, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        other_non_operating: {
          blocks: [
            {
              x: 2472, top: 660, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 428, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '92% margin', size: 29, weight: 400, color: NOTE },
                { text: '+136pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 827, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '24% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1077, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '9% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: { blocks: [] },
      },
    },

    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data center', value: 1.7, notes: ['+21% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'communications_and_other', col: 0, order: 1, type: 'source', label: ['Communications', 'and other'], value: 0.6, notes: ['+26% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.2, notes: ['+22% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.1, notes: ['52% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1.1 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.4, notes: ['18% margin', '+5pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.7 },
      { id: 'tax_benefit', col: 4, order: 0, type: 'profit', label: 'Tax benefit', value: 0.015, valueText: '$15M', color: GREEN_LABEL, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_non_operating', col: 5, order: 1, type: 'cost', label: 'Other', value: 0.023, valueText: '($23M)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.4, notes: ['92% margin', '+136pp Y/Y'] },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.5, notes: ['24% of revenue', '(3pp) Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.2, notes: ['9% of revenue', '(2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 4, type: 'cost', label: 'Tax', value: 0, valueText: '' },
    ],

    links: [
      { source: 'data_center', target: 'revenue', value: 1.7, width: 238, targetOrder: 0 },
      { source: 'communications_and_other', target: 'revenue', value: 0.6, width: 81, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1.1, width: 165, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.1, width: 154, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.4, width: 57, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, width: 106, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, width: 55, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      {
        source: 'tax_benefit',
        target: 'net_profit',
        value: 0.015,
        width: 3,
        targetOrder: 1,
        y1: 526,
        linkTint: GREEN_LINK,
        curve: { x0: 2269, x1: 2295, c1x: 2282, c1y: 578, c2x: 2284, c2y: 526 },
      },
      {
        source: 'operating_profit',
        target: 'other_non_operating',
        value: 0.023,
        width: 2,
        sourceOrder: 1,
        targetOrder: 0,
        linkTint: RED_LINK,
        curve: { x0: 1899, x1: 2295, c1x: 2025, c1y: 620, c2x: 2115, c2y: 714 },
      },
      { source: 'operating_expenses', target: 'rnd', value: 0.5, width: 76, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.2, width: 28, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Marvell · 2026 财年第四季度',
        meta: {
          title: 'Marvell 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1450,
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +21%'] },
          communications_and_other: { label: ['通信', '及其他'], notes: ['同比 +26%'] },
          revenue: { label: '收入', notes: ['同比 +22%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +5 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          tax_benefit: { label: '税收收益' },
          other_non_operating: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 92%', '同比 +136 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 (3 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 9%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
        },
        layout: {
          labels: {
            data_center: {
              blocks: [
                {
                  x: 462, top: 536, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: CYAN },
                    { text: '同比 +21%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 280, top: 741, anchor: 'middle', lines: [{ text: '数据中心', size: 40, weight: 800, color: CYAN }] },
              ],
            },
            communications_and_other: {
              blocks: [
                {
                  x: 462, top: 975, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: BLUE },
                    { text: '同比 +26%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 236, top: 1097, anchor: 'middle', lines: [{ text: '通信及其他', size: 40, weight: 800, color: BLUE }] },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 827, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '研发', size: 34, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                    { text: '占收入 24%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1075, anchor: 'middle', lineGap: 5,
                  lines: [
                    { text: '销售及行政', size: 30, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 9%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 24, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2510, top: 428, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '净利润', size: 38, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 92%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +136 个百分点', size: 26, weight: 400, color: NOTE },
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
