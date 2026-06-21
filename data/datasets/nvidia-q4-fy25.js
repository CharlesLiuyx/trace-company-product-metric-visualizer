/* ====================================================================
 *  NVIDIA Q4 FY25 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q4-fy25.png with the
 *  high-level income-statement helper and fixed source-image geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.fromIncomeStatement({
    key: 'nvidia-q4-fy25',
    name: 'NVIDIA · Q4 FY25',
    meta: {
      title: 'NVIDIA Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Jan. 2025',
      periodX: 2851,
      periodY: 232,
      periodNoteY: 287,
      titleSize: 142,
      titleX: 1492,
      titleY: 117,
      titleTextLength: 2471,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nvidia-q4-fy25.png', width: 2986, height: 1490 },
      logoWidth: 390,
      logoHeight: 279,
      logoY: 167,
      logoViewBox: '0 0 390 279',
      logoSvg: `
        <rect x="140" y="0" width="166" height="178" fill="#66af04"/>
        <g transform="translate(151,25) scale(6.2)" fill="#ffffff">
          <path d="${window.SANKEY_BRAND.nvidia}"/>
        </g>
        <text x="195" y="281" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="94" font-weight="800" letter-spacing="0" fill="#000000">NVIDIA<tspan font-size="38" baseline-shift="super">&#174;</tspan></text>
      `,
    },

    revenue: [
      {
        id: 'data_center',
        label: 'Data Center',
        value: 35.6,
        notes: ['+16% Q/Q'],
        icons: ['server'],
        iconSize: 34,
        labelSide: 'left',
        color: '#0e7451',
        labelColor: '#0e7451',
      },
      {
        id: 'gaming',
        label: 'Gaming',
        value: 2.5,
        notes: ['(22%) Q/Q'],
        icons: ['controller'],
        iconSize: 32,
        labelSide: 'left',
        color: '#a5db57',
        labelColor: '#66af04',
      },
      {
        id: 'professional_visualization',
        label: ['Professional', 'Visualization'],
        value: 0.5,
        notes: ['+5% Q/Q'],
        icons: ['eye'],
        iconSize: 32,
        labelSide: 'left',
        color: '#49006f',
        labelColor: '#49006f',
      },
      {
        id: 'automotive',
        label: 'Automotive',
        value: 0.6,
        notes: ['+27% Q/Q'],
        icons: ['car'],
        iconSize: 32,
        labelSide: 'left',
        color: '#095ab8',
        labelColor: '#095ab8',
      },
      {
        id: 'oem_other',
        label: 'OEM & Other',
        value: 0.1,
        notes: ['+30% Q/Q'],
        icons: ['factory'],
        iconSize: 32,
        labelSide: 'left',
        color: '#740046',
        labelColor: '#740046',
      },
    ],
    costOfRevenue: 10.6,
    opex: [
      { id: 'rnd', label: ['Research &', 'Development'], value: 3.7, notes: ['9% of revenue', '(0pp) Q/Q'] },
      { id: 'sga', label: ['Sales, General', '& Admin'], value: 1.0, notes: ['2% of revenue', '(0pp) Q/Q'] },
    ],
    tax: 3.1,
    otherIncome: [{ id: 'other', label: 'Other', value: 1.1 }],

    derived: {
      revenueHub: { value: 39.3, notes: ['+12% Q/Q'] },
      grossProfit: { value: 28.7, notes: ['73% margin', '(2pp) Q/Q'] },
      operatingProfit: { label: 'Operating profit', value: 24.0, notes: ['61% margin', '(1pp) Q/Q'] },
      operatingExpenses: { value: 4.7 },
      netProfit: { label: 'Net profit', value: 22.1, notes: ['56% margin', '+1pp Q/Q'] },
    },
  });

  const byId = Object.fromEntries(dataset.nodes.map((node) => [node.id, node]));
  dataset.render = {
    width: 2986,
    height: 1490,
    background: '#efefef',
    titleColor: '#123e65',
    subtitleColor: '#535353',
    noteColor: '#535353',
    palette: {
      source: { node: '#0e7451', label: '#0e7451' },
      hub: { node: '#000000', label: '#000000' },
      profit: { node: '#289321', label: '#128040' },
      cost: { node: '#be0004', label: '#800003' },
    },
    linkTint: {
      source: '#88b7a3',
      hub: null,
      profit: '#93c68b',
      cost: '#de8577',
    },
    linkOpacity: 1,
  };

  dataset.layout = {
    scale: 10.78,
    nodes: {
      data_center: { x: 502, y: 412, width: 82, height: 384 },
      gaming: { x: 502, y: 936, width: 82, height: 27 },
      professional_visualization: { x: 502, y: 1100, width: 82, height: 5 },
      automotive: { x: 502, y: 1246, width: 82, height: 6 },
      oem_other: { x: 502, y: 1397, width: 82, height: 1.5 },
      revenue: { x: 1035, y: 644, width: 81, height: 424 },
      gross_profit: { x: 1567, y: 536, width: 82, height: 309 },
      cost_of_revenue: { x: 1567, y: 1079, width: 82, height: 114 },
      operating_profit: { x: 2100, y: 446, width: 81, height: 259 },
      operating_expenses: { x: 2100, y: 936, width: 81, height: 51 },
      other: { x: 2485, y: 646, width: 82, height: 12 },
      net_profit: { x: 2632, y: 356, width: 82, height: 238 },
      tax: { x: 2632, y: 815, width: 82, height: 33 },
      rnd: { x: 2632, y: 1058, width: 82, height: 40 },
      sga: { x: 2632, y: 1308, width: 82, height: 11 },
    },
    labels: {
      data_center: {
        blocks: [
          { parts: ['name'], x: 363, top: 579, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 543, top: 309, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['server'], x: 52, y: 524, size: 96, color: '#000000', strokeWidth: 2.15 },
      },
      gaming: {
        blocks: [
          { parts: ['name'], x: 359, top: 922, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 543, top: 836, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['controller'], x: 50, y: 915, size: 108, color: '#000000', strokeWidth: 2.15 },
      },
      professional_visualization: {
        blocks: [
          { parts: ['name'], x: 352, top: 1015, anchor: 'middle', nameSize: 40, lineGap: 10 },
          { parts: ['value', 'notes'], x: 543, top: 996, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['eye'], x: 49, y: 1074, size: 110, color: '#000000', strokeWidth: 2.15 },
      },
      automotive: {
        blocks: [
          { parts: ['name'], x: 357, top: 1227, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 543, top: 1143, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['car'], x: 51, y: 1204, size: 108, color: '#000000', strokeWidth: 2.15 },
      },
      oem_other: {
        blocks: [
          { parts: ['name'], x: 352, top: 1362, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 543, top: 1286, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['factory'], x: 54, y: 1325, size: 102, color: '#000000', strokeWidth: 2.15 },
      },
      revenue: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 1076, top: 472, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      gross_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 1608, top: 329, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      operating_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2141, top: 239, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      other: {
        blocks: [
          { parts: ['name', 'value'], x: 2526, top: 672, anchor: 'middle', nameSize: 34, valueSize: 34 },
        ],
      },
      net_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2745, top: 378, anchor: 'start', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      cost_of_revenue: {
        blocks: [
          { parts: ['name', 'value'], x: 1608, top: 1218, anchor: 'middle', nameSize: 38, valueSize: 37 },
        ],
      },
      operating_expenses: {
        blocks: [
          { parts: ['name', 'value'], x: 2141, top: 1008, anchor: 'middle', nameSize: 38, valueSize: 37 },
        ],
      },
      tax: {
        blocks: [
          { parts: ['name', 'value'], x: 2808, top: 796, anchor: 'start', nameSize: 35, valueSize: 34 },
        ],
      },
      rnd: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2846, top: 1017, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31 },
        ],
      },
      sga: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2846, top: 1270, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31 },
        ],
      },
    },
  };

  Object.assign(byId.data_center || {}, { linkTint: '#88b7a3' });
  Object.assign(byId.gaming || {}, { linkTint: '#add383' });
  Object.assign(byId.professional_visualization || {}, { linkTint: '#a07fb4' });
  Object.assign(byId.automotive || {}, { linkTint: '#82aad7' });
  Object.assign(byId.oem_other || {}, { linkTint: '#bc81a0' });

  if (byId.cost_of_revenue) byId.cost_of_revenue.valueText = '($10.6B)';
  if (byId.operating_expenses) byId.operating_expenses.valueText = '($4.7B)';
  if (byId.tax) byId.tax.valueText = '($3.1B)';
  if (byId.rnd) byId.rnd.valueText = '($3.7B)';
  if (byId.sga) byId.sga.valueText = '($1.0B)';
  if (byId.net_profit) byId.net_profit.valueText = '$22.1B';

  dataset.links.forEach((link) => {
    if (link.source === 'operating_profit' && link.target === 'net_profit') link.targetOrder = 0;
    if (link.source === 'other' && link.target === 'net_profit') {
      link.targetOrder = 1;
      link.y0 = 652;
      link.y1 = 592;
      link.curve = { c1x: 2596, c2x: 2590 };
    }
  });

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
