/* Marvell - Q2 FY26 income statement ($B), measured from its Source PNG. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const CYAN = '#00b5e2';
  const CYAN_LINK = '#85d6ea';
  const BLUE = '#0072ce';
  const BLUE_LINK = '#85b8e1';
  const TEAL = '#00c7b1';
  const TEAL_LINK = '#85dfd4';
  const DARK_TEAL = '#00816d';
  const DARK_TEAL_LINK = '#85bfb6';
  const ORANGE = '#ffa400';
  const ORANGE_LINK = '#f7ce85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2480;

  const marvellLogo = `
    <g fill="#212322">
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
    key: 'marvell-q2-fy26',
    name: 'Marvell · Q2 FY26',
    company: 'Marvell',
    meta: {
      company: 'Marvell',
      title: 'Marvell Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending July 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/marvell-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2186,
      periodX: 1949,
      periodY: 1242,
      periodNoteY: 1284,
      logoWidth: 284,
      logoHeight: 284,
      logoY: 263,
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
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: CYAN, label: CYAN },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: CYAN_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 148,
      nodes: {
        data_center: { x: 420, y: 437, width: 71, height: 221 },
        enterprise_networking: { x: 420, y: 800, width: 71, height: 28 },
        carrier_infrastructure: { x: 420, y: 963, width: 71, height: 17 },
        consumer: { x: 420, y: 1115, width: 71, height: 16 },
        automotive_industrial: { x: 420, y: 1257, width: 71, height: 9 },
        revenue: { x: 887, y: 736, width: 70, height: 298 },
        gross_profit: { x: 1351, y: 633, width: 72, height: 148 },
        cost_of_revenue: { x: 1354, y: 979, width: 71, height: 147 },
        operating_profit: { x: 1827, y: 531, width: 70, height: 42 },
        operating_expenses: { x: 1822, y: 784, width: 70, height: 105 },
        net_profit: { x: 2288, y: 429, width: 71, height: 27 },
        tax_and_other: { x: 2288, y: 685, width: 71, height: 13 },
        rnd: { x: 2288, y: 912, width: 71, height: 76 },
        sga: { x: 2288, y: 1156, width: 71, height: 26 },
      },
      labels: {
        data_center: {
          blocks: [
            { x: 457, top: 336, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: CYAN },
              { text: '+69% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 329, top: 499, anchor: 'middle', lineGap: 8, lines: [
              { text: 'Data', size: 40, weight: 800, color: CYAN },
              { text: 'center', size: 40, weight: 800, color: CYAN },
            ] },
          ],
        },
        enterprise_networking: {
          blocks: [
            { x: 457, top: 699, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: BLUE },
              { text: '+28% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 289, top: 768, anchor: 'middle', lineGap: 8, lines: [
              { text: 'Enterprise', size: 40, weight: 800, color: BLUE },
              { text: 'networking', size: 40, weight: 800, color: BLUE },
            ] },
          ],
        },
        carrier_infrastructure: {
          blocks: [
            { x: 453, top: 859, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: TEAL },
              { text: '+71% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 264, top: 923, anchor: 'middle', lineGap: 8, lines: [
              { text: 'Carrier', size: 40, weight: 800, color: TEAL },
              { text: 'infrastructure', size: 40, weight: 800, color: TEAL },
            ] },
          ],
        },
        consumer: {
          blocks: [
            { x: 457, top: 1013, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: DARK_TEAL },
              { text: '+30% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 306, top: 1100, anchor: 'middle', lines: [
              { text: 'Consumer', size: 40, weight: 800, color: DARK_TEAL },
            ] },
          ],
        },
        automotive_industrial: {
          blocks: [
            { x: 459, top: 1154, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: ORANGE },
              { text: '(0%) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 271, top: 1213, anchor: 'middle', lineGap: 8, lines: [
              { text: 'Automotive', size: 40, weight: 800, color: ORANGE },
              { text: '/Industrial', size: 40, weight: 800, color: ORANGE },
            ] },
          ],
        },
        revenue: { blocks: [{ x: 922, top: 579, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Revenue', size: 46, weight: 800 },
          { text: '$value', size: 44, weight: 400 },
          { text: '+58% Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1387, top: 445, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Gross profit', size: 44, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
          { text: '50% margin', size: 30, weight: 400, color: NOTE },
          { text: '+4pp Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1390, top: 1151, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Cost of', size: 36, weight: 800 },
          { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1862, top: 353, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '14% margin', size: 29, weight: 400, color: NOTE },
          { text: '+22pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1857, top: 912, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 36, weight: 800 },
          { text: 'expenses', size: 36, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2470, top: 389, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: '10% margin', size: 29, weight: 400, color: NOTE },
          { text: '+25pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        tax_and_other: { blocks: [{ x: 2470, top: 656, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax & other', size: 34, weight: 800 },
          { text: '$value', size: 32, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 905, anchor: 'middle', lineGap: 8, lines: [
          { text: 'R&D', size: 34, weight: 800 },
          { text: '$value', size: 32, weight: 400 },
          { text: '26% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '(12pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        sga: { blocks: [{ x: RIGHT_LABEL_X, top: 1132, anchor: 'middle', lineGap: 8, lines: [
          { text: 'SG&A', size: 34, weight: 800 },
          { text: '$value', size: 32, weight: 400 },
          { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '(6pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
      },
    },
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: ['Data', 'center'], value: 1.5, notes: ['+69% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'enterprise_networking', col: 0, order: 1, type: 'source', label: ['Enterprise', 'networking'], value: 0.2, notes: ['+28% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'carrier_infrastructure', col: 0, order: 2, type: 'source', label: ['Carrier', 'infrastructure'], value: 0.1, notes: ['+71% Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 0.1, notes: ['+30% Y/Y'], color: DARK_TEAL, labelColor: DARK_TEAL, linkTint: DARK_TEAL_LINK },
      { id: 'automotive_industrial', col: 0, order: 4, type: 'source', label: ['Automotive', '/Industrial'], value: 0.1, notes: ['(0%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2, valueText: '$2.0B', notes: ['+58% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1, valueText: '$1.0B', notes: ['50% margin', '+4pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1, valueText: '($1.0B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.3, notes: ['14% margin', '+22pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.7 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['10% margin', '+25pp Y/Y'] },
      { id: 'tax_and_other', col: 4, order: 1, type: 'cost', label: 'Tax & other', value: 0.1 },
      { id: 'rnd', col: 4, order: 2, type: 'cost', label: 'R&D', value: 0.5, notes: ['26% of revenue', '(12pp) Y/Y'] },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 0.2, notes: ['10% of revenue', '(6pp) Y/Y'] },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 1.5, sourceWidth: 221, targetWidth: 223, y0: 547.5, y1: 847.5, targetOrder: 0 },
      { source: 'enterprise_networking', target: 'revenue', value: 0.2, sourceWidth: 28, targetWidth: 28, y0: 814, y1: 973, targetOrder: 1 },
      { source: 'carrier_infrastructure', target: 'revenue', value: 0.1, sourceWidth: 17, targetWidth: 18, y0: 971.5, y1: 996, targetOrder: 2 },
      { source: 'consumer', target: 'revenue', value: 0.1, sourceWidth: 16, targetWidth: 16, y0: 1123, y1: 1013, targetOrder: 3 },
      { source: 'automotive_industrial', target: 'revenue', value: 0.1, sourceWidth: 9, targetWidth: 13, y0: 1261.5, y1: 1027.5, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 1, sourceWidth: 149, targetWidth: 148, y0: 810.5, y1: 707, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1, sourceWidth: 149, targetWidth: 147, y0: 959.5, y1: 1052.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.3, sourceWidth: 42, targetWidth: 42, y0: 654, y1: 552, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, sourceWidth: 106, targetWidth: 105, y0: 728, y1: 836.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, sourceWidth: 28, targetWidth: 27, y0: 545, y1: 442.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax_and_other', value: 0.1, sourceWidth: 14, targetWidth: 13, y0: 566, y1: 691.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.5, sourceWidth: 77, targetWidth: 76, y0: 822.5, y1: 950, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.2, sourceWidth: 28, targetWidth: 26, y0: 875, y1: 1169, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Marvell · 2026 财年第二季度',
        meta: {
          title: 'Marvell 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 7 月',
          titleTextLength: 1450,
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +69%'] },
          enterprise_networking: { label: '企业网络', notes: ['同比 +28%'] },
          carrier_infrastructure: { label: '运营商基础设施', notes: ['同比 +71%'] },
          consumer: { label: '消费级产品', notes: ['同比 +30%'] },
          automotive_industrial: { label: '汽车 / 工业', notes: ['同比 (0%)'] },
          revenue: { label: '收入', notes: ['同比 +58%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +22 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 +25 个百分点'] },
          tax_and_other: { label: '税费及其他' },
          rnd: { label: '研发', notes: ['占收入 26%', '同比 (12 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 10%', '同比 (6 个百分点)'] },
        },
        layout: {
          labels: {
            data_center: { blocks: [
              { x: 457, top: 336, anchor: 'middle', lineGap: 10, lines: [
                { text: '$value', size: 39, weight: 400, color: CYAN },
                { text: '同比 +69%', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 329, top: 523, anchor: 'middle', lines: [{ text: '数据中心', size: 40, weight: 800, color: CYAN }] },
            ] },
            enterprise_networking: { blocks: [
              { x: 457, top: 699, anchor: 'middle', lineGap: 10, lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '同比 +28%', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 289, top: 790, anchor: 'middle', lines: [{ text: '企业网络', size: 40, weight: 800, color: BLUE }] },
            ] },
            carrier_infrastructure: { blocks: [
              { x: 453, top: 859, anchor: 'middle', lineGap: 10, lines: [
                { text: '$value', size: 39, weight: 400, color: TEAL },
                { text: '同比 +71%', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 264, top: 950, anchor: 'middle', lines: [{ text: '运营商基础设施', size: 36, weight: 800, color: TEAL }] },
            ] },
            automotive_industrial: { blocks: [
              { x: 459, top: 1154, anchor: 'middle', lineGap: 10, lines: [
                { text: '$value', size: 39, weight: 400, color: ORANGE },
                { text: '同比 (0%)', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 283, top: 1240, anchor: 'middle', lines: [{ text: '汽车 / 工业', size: 36, weight: 800, color: ORANGE }] },
            ] },
            net_profit: { blocks: [{ x: 2470, top: 389, anchor: 'middle', lineGap: 7, lines: [
              { text: '净利润', size: 38, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
              { text: '利润率 10%', size: 28, weight: 400, color: NOTE },
              { text: '同比 +25 个百分点', size: 26, weight: 400, color: NOTE },
            ] }] },
            rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 905, anchor: 'middle', lineGap: 6, lines: [
              { text: '研发', size: 34, weight: 800 },
              { text: '$value', size: 32, weight: 400 },
              { text: '占收入 26%', size: 29, weight: 400, color: NOTE },
              { text: '同比 (12 个百分点)', size: 25, weight: 400, color: NOTE },
            ] }] },
            sga: { blocks: [{ x: RIGHT_LABEL_X, top: 1132, anchor: 'middle', lineGap: 5, lines: [
              { text: '销售及行政', size: 30, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
              { text: '占收入 10%', size: 27, weight: 400, color: NOTE },
              { text: '同比 (6 个百分点)', size: 24, weight: 400, color: NOTE },
            ] }] },
          },
        },
      },
    },
  });
})();
