/* ====================================================================
 * NVIDIA · Q2 FY27 income statement ($B)
 * Source-bound fixed layout for the 2743×1539 reference image.
 * ==================================================================== */
(function () {
  const dataset = {
    key: 'nvidia-q2-fy27',
    name: 'NVIDIA · Q2 FY27',
    meta: {
      title: 'NVIDIA Q2 FY27 Income Statement',
      period: 'Q2 FY27',
      periodNote: 'Ending July 2026',
      periodX: 2543,
      periodY: 301,
      periodNoteY: 355,
      titleX: 1372,
      titleY: 210,
      titleSize: 96,
      titleTextLength: 2224,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nvidia-q2-fy27.png', width: 2743, height: 1539 },
      logoWidth: 390,
      logoHeight: 279,
      logoY: 190,
      logoViewBox: '0 0 190 104',
      logoSvg: `
        <rect x="63" y="0" width="64" height="58" fill="#76b900"/>
        <g transform="translate(72,6) scale(1.92)" fill="#ffffff">
          <path d="${window.SANKEY_BRAND.nvidia}"/>
        </g>
        <text x="95" y="94" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="27" font-weight="800" letter-spacing="-0.5" fill="#1d1d1d">NVIDIA<tspan font-size="11" baseline-shift="super">&#174;</tspan></text>
      `,
    },

    render: {
      width: 2743,
      height: 1539,
      background: '#f0f0f0',
      titleColor: '#204268',
      subtitleColor: '#535353',
      noteColor: '#535353',
      palette: {
        source: { node: '#35775b', label: '#267359' },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: '#499330', label: '#218542' },
        cost: { node: '#b02a15', label: '#8d1e11' },
      },
      linkTint: {
        source: '#9abaaa',
        hub: null,
        profit: '#a2c19b',
        cost: '#d19388',
      },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
    },

    layout: {
      scale: 4.47,
      nodes: {
        hyperscale: { x: 394, y: 493, width: 75, height: 218 },
        ai_clouds: { x: 394, y: 891, width: 75, height: 180 },
        data_center: { x: 779, y: 589, width: 75, height: 397 },
        edge: { x: 779, y: 1216, width: 75, height: 35 },
        revenue: { x: 1163, y: 682, width: 75, height: 430 },
        gross_profit: { x: 1548, y: 586, width: 75, height: 324 },
        cost_of_revenue: { x: 1550, y: 1136, width: 75, height: 110 },
        operating_profit: { x: 1933, y: 499, width: 75, height: 286 },
        operating_expenses: { x: 1933, y: 916, width: 75, height: 40 },
        investments: { x: 2178, y: 356, width: 75, height: 37 },
        net_profit: { x: 2318, y: 390, width: 75, height: 267 },
        tax: { x: 2318, y: 793, width: 75, height: 55 },
        rnd: { x: 2318, y: 998, width: 75, height: 34 },
        sga: { x: 2318, y: 1239, width: 75, height: 8 },
      },
      labels: {
        hyperscale: {
          blocks: [
            { parts: ['name'], x: 327, top: 581, anchor: 'end', nameSize: 40 },
            { parts: ['value', 'notes'], x: 438, top: 392, anchor: 'middle', valueSize: 43, noteSize: 31 },
          ],
        },
        ai_clouds: {
          blocks: [
            { parts: ['name'], x: 341, top: 905, anchor: 'end', nameSize: 39, lineGap: 10 },
            { parts: ['value', 'notes'], x: 458, top: 796, anchor: 'middle', valueSize: 43, noteSize: 31 },
          ],
        },
        data_center: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: 817, top: 446, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 }],
          icons: { names: ['server'], x: 774, y: 247, size: 88, color: '#000000', strokeWidth: 2.15 },
        },
        edge: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: 817, top: 1066, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 }],
          icons: { names: ['controller', 'eye', 'car', 'factory'], x: 182, y: 1176, size: 94, gap: 34, color: '#000000', strokeWidth: 2.15 },
        },
        revenue: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: 1201, top: 532, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 }],
        },
        gross_profit: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: 1586, top: 351, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 }],
        },
        operating_profit: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: 1971, top: 259, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 }],
        },
        investments: {
          blocks: [{ parts: ['name', 'value'], x: 2216, top: 264, anchor: 'middle', nameSize: 36, valueSize: 34 }],
        },
        net_profit: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: 2544, top: 417, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 }],
        },
        cost_of_revenue: {
          blocks: [{ parts: ['name', 'value'], x: 1588, top: 1254, anchor: 'middle', nameSize: 38, valueSize: 37 }],
        },
        operating_expenses: {
          blocks: [{ parts: ['name', 'value'], x: 1971, top: 973, anchor: 'middle', nameSize: 38, valueSize: 37 }],
        },
        tax: {
          blocks: [{ parts: ['name', 'value'], x: 2556, top: 805, anchor: 'middle', nameSize: 36, valueSize: 35 }],
        },
        rnd: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: 2554, top: 984, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31 }],
        },
        sga: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: 2549, top: 1218, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31 }],
        },
      },
    },

    nodes: [
      { id: 'hyperscale', col: 0, order: 0, type: 'source', labelSide: 'split-left', label: 'Hyperscale', value: 48.7, notes: ['+102% Y/Y'] },
      { id: 'ai_clouds', col: 0, order: 1, type: 'source', labelSide: 'split-left', label: ['AI Clouds,', 'Industrial,', '& Enterprise'], value: 40.3, notes: ['+138% Y/Y'] },
      { id: 'data_center', col: 1, order: 0, type: 'source', labelSide: 'above', label: 'Data Center', value: 89.0, valueText: '$89.0B', notes: ['+117% Y/Y'], icons: ['server'], iconSize: 82, iconColor: '#000000' },
      { id: 'edge', col: 1, order: 1, type: 'source', labelSide: 'above', label: 'Edge Computing', value: 7.2, notes: ['+27% Y/Y'], color: '#79aa27', labelColor: '#66af04', linkTint: '#b8d596', icons: ['controller', 'eye', 'car', 'factory'], iconSize: 80, iconColor: '#000000' },
      { id: 'revenue', col: 2, order: 0, type: 'hub', labelSide: 'above', label: 'Revenue', value: 96.2, notes: ['+106% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', labelSide: 'above', label: 'Gross profit', value: 72.1, notes: ['75% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', labelSide: 'below', label: ['Cost of', 'revenue'], value: 24.1 },
      { id: 'investments', col: 4, order: 0, type: 'profit', labelSide: 'above', label: 'Investments', value: 7.8 },
      { id: 'operating_profit', col: 4, order: 1, type: 'profit', labelSide: 'above', label: ['Operating', 'profit'], value: 63.7, notes: ['66% margin', '+5pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 2, type: 'cost', labelSide: 'below', label: ['Operating', 'expenses'], value: 8.4 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', labelSide: 'right', label: ['Net', 'profit'], value: 59.7, notes: ['62% margin', '+6pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', labelSide: 'right', label: 'Tax', value: 11.8 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', labelSide: 'right', label: ['Research &', 'Development'], value: 7.1, notes: ['7% of revenue', '(2pp) Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', labelSide: 'right', label: ['Sales, General', '& Admin'], value: 1.4, notes: ['1% of revenue', '(1pp) Y/Y'] },
    ],

    links: [
      { source: 'hyperscale', target: 'data_center', value: 48.7, sourceWidth: 218, targetWidth: 217, targetOrder: 0 },
      { source: 'ai_clouds', target: 'data_center', value: 40.3, sourceWidth: 180, targetWidth: 180, targetOrder: 1 },
      { source: 'data_center', target: 'revenue', value: 89.0, sourceWidth: 397, targetWidth: 398, targetOrder: 0 },
      { source: 'edge', target: 'revenue', value: 7.2, sourceWidth: 35, targetWidth: 32, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 72.1, sourceWidth: 322, targetWidth: 324, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 24.1, sourceWidth: 108, targetWidth: 110, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 63.7, sourceWidth: 286, targetWidth: 286, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 8.4, sourceWidth: 38, targetWidth: 40, sourceOrder: 1 },
      { source: 'investments', target: 'net_profit', value: 7.8, sourceWidth: 37, targetWidth: 35, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 51.9, sourceWidth: 233, targetWidth: 232, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 11.8, sourceWidth: 53, targetWidth: 55, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 7.1, sourceWidth: 33, targetWidth: 34, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.4, sourceWidth: 7, targetWidth: 8, sourceOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'NVIDIA · 2027 财年第二季度',
        meta: {
          title: 'NVIDIA 2027 财年第二季度利润表',
          period: '2027 财年第二季度',
          periodNote: '截至 2026 年 7 月',
        },
        nodes: {
          hyperscale: { label: '超大规模', notes: ['同比 +102%'] },
          ai_clouds: { label: 'AI 云、工业与企业', notes: ['同比 +138%'] },
          data_center: { label: '数据中心', notes: ['同比 +117%'] },
          edge: { label: '边缘计算', notes: ['同比 +27%'] },
          revenue: { label: '收入', notes: ['同比 +106%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 75%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          investments: { label: '投资收益' },
          operating_profit: { label: '营业利润', notes: ['利润率 66%', '同比 +5 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 62%', '同比 +6 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 (2 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 1%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            ai_clouds: {
              blocks: [
                { parts: ['name'], x: 341, top: 954, anchor: 'end', nameSize: 39, lineGap: 10 },
                { parts: ['value', 'notes'], x: 458, top: 796, anchor: 'middle', valueSize: 43, noteSize: 31 },
              ],
            },
          },
        },
      },
    },
  };

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
