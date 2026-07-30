/* ====================================================================
 * Marvell - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/marvell-q3-fy25.png as a fixed
 * d3-sankey layout with pure SVG/vector annotations.
 * ==================================================================== */
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
  const RIGHT_LABEL_X = 2500;

  const marvellLogo = `
    <g fill="#202322">
      <path d="M8 0 L20 13 L20 87 L8 100 Z"/>
      <path d="M92 0 L80 13 L80 87 L92 100 Z"/>
      <path d="M25 10 H75 L68 18 H32 Z"/>
      <path d="M25 90 H75 L68 82 H32 Z"/>
      <path d="M33 27 L45 39 V66 L33 78 Z"/>
      <path d="M67 27 L55 39 V66 L67 78 Z"/>
      <path d="M41 38 H59 L50 48 Z"/>
    </g>`;

  const specialItemsAnnotation = (text) => `
    <g class="sankey-interactive-annotation"
       data-node="special_items"
       data-annotation-clearance="true">
      <rect x="1260" y="1274" width="275" height="58" fill="transparent"/>
      <text x="1390" y="1313" text-anchor="middle"
            font-size="29" font-weight="400" fill="${NOTE}">${text}</text>
    </g>`;

  const labelsZh = {
    data_center: {
      blocks: [
        { x: 460, top: 326, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: CYAN }, { text: '同比 +98%', size: 29, color: NOTE }] },
        { x: 329, top: 507, anchor: 'middle', lineGap: 8, lines: [{ text: '数据中心', size: 40, weight: 800, color: CYAN }] },
      ],
    },
    enterprise_networking: {
      blocks: [
        { x: 456, top: 689, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: BLUE }, { text: '同比 (44%)', size: 29, color: NOTE }] },
        { x: 275, top: 776, anchor: 'middle', lineGap: 8, lines: [{ text: '企业网络', size: 38, weight: 800, color: BLUE }] },
      ],
    },
    carrier_infrastructure: {
      blocks: [
        { x: 456, top: 862, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: TEAL }, { text: '同比 (73%)', size: 29, color: NOTE }] },
        { x: 250, top: 918, anchor: 'middle', lineGap: 8, lines: [{ text: '运营商', size: 36, weight: 800, color: TEAL }, { text: '基础设施', size: 36, weight: 800, color: TEAL }] },
      ],
    },
    consumer: {
      blocks: [
        { x: 462, top: 1003, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: DARK_TEAL }, { text: '同比 (43%)', size: 29, color: NOTE }] },
        { x: 300, top: 1087, anchor: 'middle', lines: [{ text: '消费业务', size: 38, weight: 800, color: DARK_TEAL }] },
      ],
    },
    automotive_industrial: {
      blocks: [
        { x: 456, top: 1179, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: ORANGE }, { text: '同比 (22%)', size: 29, color: NOTE }] },
        { x: 260, top: 1238, anchor: 'middle', lineGap: 8, lines: [{ text: '汽车与', size: 37, weight: 800, color: ORANGE }, { text: '工业', size: 37, weight: 800, color: ORANGE }] },
      ],
    },
    revenue: { blocks: [{ x: 920, top: 586, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 +7%', size: 29, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1382, top: 389, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, color: GREEN_LABEL }, { text: '利润率 23%', size: 29, color: NOTE }, { text: '同比 (16 个百分点)', size: 27, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1390, top: 1142, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 36, weight: 800, color: RED_LABEL }, { text: '成本', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1628, top: 1038, anchor: 'middle', lineGap: 8, lines: [{ text: '营业亏损', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 37, color: RED_LABEL }, { text: '利润率 (46%)', size: 28, color: NOTE }, { text: '同比 (36 个百分点)', size: 26, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1860, top: 580, anchor: 'middle', lineGap: 8, lines: [{ text: '营业费用', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 37, color: RED_LABEL }] }] },
    rnd: { blocks: [{ x: 2481, top: 518, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }, { text: '占收入 32%', size: 29, color: NOTE }, { text: '同比 (2 个百分点)', size: 26, color: NOTE }] }] },
    restructuring: { blocks: [{ x: 2488, top: 818, anchor: 'middle', lineGap: 8, lines: [{ text: '重组费用', size: 33, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }, { text: '占收入 24%', size: 29, color: NOTE }, { text: '同比 +23 个百分点', size: 26, color: NOTE }] }] },
    sga: { blocks: [{ x: 2481, top: 1128, anchor: 'middle', lineGap: 8, lines: [{ text: '销售、一般及行政', size: 29, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }, { text: '占收入 14%', size: 29, color: NOTE }, { text: '同比 (1 个百分点)', size: 26, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'marvell-q3-fy25',
    name: 'Marvell · Q3 FY25',
    company: 'Marvell',
    meta: {
      company: 'Marvell',
      title: 'Marvell Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Oct. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/marvell-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2190,
      periodX: 2480,
      periodY: 334,
      periodNoteY: 379,
      logoWidth: 286,
      logoHeight: 286,
      logoY: 263,
      logoViewBox: '0 0 100 100',
      logoSvg: marvellLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: CYAN, label: CYAN },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: CYAN_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: specialItemsAnnotation('Special items $0.3B'),
    nonNodeMetrics: [
      { id: 'special_items', representation: 'annotation', label: 'Special items', value: 0.3, valueText: '$0.3B', type: 'cost' },
    ],
    layout: {
      scale: 1,
      nodes: {
        data_center: { x: 420, y: 426, width: 71, height: 210 },
        enterprise_networking: { x: 420, y: 785, width: 71, height: 27 },
        carrier_infrastructure: { x: 420, y: 956, width: 71, height: 14 },
        consumer: { x: 420, y: 1106, width: 71, height: 16 },
        automotive_industrial: { x: 420, y: 1274, width: 71, height: 14 },
        revenue: { x: 885, y: 733, width: 70, height: 291 },
        gross_profit: { x: 1346, y: 576, width: 72, height: 65 },
        cost_of_revenue: { x: 1354, y: 900, width: 71, height: 222 },
        operating_loss: { x: 1592, y: 883, width: 71, height: 133 },
        operating_expenses: { x: 1824, y: 733, width: 70, height: 201 },
        rnd: { x: 2288, y: 506, width: 71, height: 91 },
        restructuring: { x: 2288, y: 828, width: 71, height: 67 },
        sga: { x: 2288, y: 1154, width: 71, height: 37 },
      },
      labels: {
        data_center: {
          blocks: [
            { x: 460, top: 326, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: CYAN }, { text: '+98% Y/Y', size: 29, color: NOTE }] },
            { x: 329, top: 481, anchor: 'middle', lineGap: 8, lines: [{ text: 'Data', size: 40, weight: 800, color: CYAN }, { text: 'center', size: 40, weight: 800, color: CYAN }] },
          ],
        },
        enterprise_networking: {
          blocks: [
            { x: 456, top: 689, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: BLUE }, { text: '(44%) Y/Y', size: 29, color: NOTE }] },
            { x: 275, top: 750, anchor: 'middle', lineGap: 8, lines: [{ text: 'Enterprise', size: 38, weight: 800, color: BLUE }, { text: 'networking', size: 38, weight: 800, color: BLUE }] },
          ],
        },
        carrier_infrastructure: {
          blocks: [
            { x: 456, top: 862, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: TEAL }, { text: '(73%) Y/Y', size: 29, color: NOTE }] },
            { x: 250, top: 915, anchor: 'middle', lineGap: 8, lines: [{ text: 'Carrier', size: 38, weight: 800, color: TEAL }, { text: 'infrastructure', size: 38, weight: 800, color: TEAL }] },
          ],
        },
        consumer: {
          blocks: [
            { x: 462, top: 1003, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: DARK_TEAL }, { text: '(43%) Y/Y', size: 29, color: NOTE }] },
            { x: 300, top: 1087, anchor: 'middle', lines: [{ text: 'Consumer', size: 38, weight: 800, color: DARK_TEAL }] },
          ],
        },
        automotive_industrial: {
          blocks: [
            { x: 456, top: 1179, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: ORANGE }, { text: '(22%) Y/Y', size: 29, color: NOTE }] },
            { x: 260, top: 1236, anchor: 'middle', lineGap: 8, lines: [{ text: 'Automotive', size: 37, weight: 800, color: ORANGE }, { text: '/Industrial', size: 37, weight: 800, color: ORANGE }] },
          ],
        },
        revenue: { blocks: [{ x: 920, top: 586, anchor: 'middle', lineGap: 8, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+7% Y/Y', size: 29, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1382, top: 389, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, color: GREEN_LABEL }, { text: '23% margin', size: 29, color: NOTE }, { text: '(16pp) Y/Y', size: 29, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1390, top: 1142, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 36, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
        operating_loss: { blocks: [{ x: 1628, top: 1038, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 38, weight: 800, color: RED_LABEL }, { text: 'loss', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 37, color: RED_LABEL }, { text: '(46%) margin', size: 28, color: NOTE }, { text: '(36pp) Y/Y', size: 28, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1860, top: 580, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 38, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 37, color: RED_LABEL }] }] },
        rnd: { blocks: [{ x: 2481, top: 518, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }, { text: '32% of revenue', size: 29, color: NOTE }, { text: '(2pp) Y/Y', size: 29, color: NOTE }] }] },
        restructuring: { blocks: [{ x: 2488, top: 818, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restructuring', size: 33, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }, { text: '24% of revenue', size: 29, color: NOTE }, { text: '+23pp Y/Y', size: 29, color: NOTE }] }] },
        sga: { blocks: [{ x: 2481, top: 1128, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }, { text: '14% of revenue', size: 29, color: NOTE }, { text: '(1pp) Y/Y', size: 29, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data center', value: 1.1, notes: ['+98% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'enterprise_networking', col: 0, order: 1, type: 'source', label: 'Enterprise networking', value: 0.2, notes: ['(44%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'carrier_infrastructure', col: 0, order: 2, type: 'source', label: 'Carrier infrastructure', value: 0.1, notes: ['(73%) Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 0.1, notes: ['(43%) Y/Y'], color: DARK_TEAL, labelColor: DARK_TEAL, linkTint: DARK_TEAL_LINK },
      { id: 'automotive_industrial', col: 0, order: 4, type: 'source', label: 'Automotive /Industrial', value: 0.1, notes: ['(22%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.5, notes: ['+7% Y/Y'], color: '#000000', labelColor: '#000000' },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.3, notes: ['23% margin', '(16pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: 'Operating loss', value: -0.7, notes: ['(46%) margin', '(36pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: 'Operating expenses', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'R&D', value: 0.5, notes: ['32% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 1, type: 'cost', label: 'Restructuring', value: 0.4, notes: ['24% of revenue', '+23pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 0.2, notes: ['14% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 1.1, sourceWidth: 210, targetWidth: 210, y0: 531, y1: 838, sourceOrder: 0, targetOrder: 0 },
      { source: 'enterprise_networking', target: 'revenue', value: 0.2, sourceWidth: 27, targetWidth: 27, y0: 798.5, y1: 956.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'carrier_infrastructure', target: 'revenue', value: 0.1, sourceWidth: 14, targetWidth: 14, y0: 963, y1: 977, sourceOrder: 0, targetOrder: 2 },
      { source: 'consumer', target: 'revenue', value: 0.1, sourceWidth: 16, targetWidth: 16, y0: 1114, y1: 992, sourceOrder: 0, targetOrder: 3 },
      { source: 'automotive_industrial', target: 'revenue', value: 0.1, sourceWidth: 14, targetWidth: 24, y0: 1281, y1: 1012, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 0.3, sourceWidth: 65, targetWidth: 65, y0: 765.5, y1: 608.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.2, sourceWidth: 226, targetWidth: 222, y0: 911, y1: 1011, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.3, sourceWidth: 65, targetWidth: 96, y0: 608.5, y1: 781, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.7, sourceWidth: 133, targetWidth: 105, y0: 949.5, y1: 881.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.5, sourceWidth: 94, targetWidth: 91, y0: 780, y1: 551.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 0.4, sourceWidth: 70, targetWidth: 67, y0: 862, y1: 861.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 0.2, sourceWidth: 37, targetWidth: 37, y0: 915.5, y1: 1172.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Marvell · 2025 财年第三季度',
        meta: {
          title: 'Marvell 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2024 年 10 月',
          titleSize: 112,
          titleTextLength: 1900,
        },
        annotationsSvg: specialItemsAnnotation('特殊项目 $0.3B'),
        nonNodeMetrics: { special_items: { label: '特殊项目' } },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +98%'] },
          enterprise_networking: { label: '企业网络', notes: ['同比 (44%)'] },
          carrier_infrastructure: { label: '运营商基础设施', notes: ['同比 (73%)'] },
          consumer: { label: '消费业务', notes: ['同比 (43%)'] },
          automotive_industrial: { label: '汽车与工业', notes: ['同比 (22%)'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 23%', '同比 (16 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (46%)', '同比 (36 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 32%', '同比 (2 个百分点)'] },
          restructuring: { label: '重组费用', notes: ['占收入 24%', '同比 +23 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 14%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
