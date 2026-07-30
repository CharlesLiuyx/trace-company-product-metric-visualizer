/* ====================================================================
 * Marvell - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/marvell-q1-fy26.png as a fixed
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
  const RIGHT_LABEL_X = 2480;

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

  const labelsZh = {
    data_center: {
      blocks: [
        { x: 456, top: 336, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: CYAN }, { text: '同比 +76%', size: 29, color: NOTE }] },
        { x: 329, top: 532, anchor: 'middle', lines: [{ text: '数据中心', size: 40, weight: 800, color: CYAN }] },
      ],
    },
    enterprise_networking: {
      blocks: [
        { x: 450, top: 707, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: BLUE }, { text: '同比 +16%', size: 29, color: NOTE }] },
        { x: 280, top: 786, anchor: 'middle', lines: [{ text: '企业网络', size: 38, weight: 800, color: BLUE }] },
      ],
    },
    carrier_infrastructure: {
      blocks: [
        { x: 448, top: 866, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: TEAL }, { text: '同比 +93%', size: 29, color: NOTE }] },
        { x: 254, top: 947, anchor: 'middle', lines: [{ text: '运营商基础设施', size: 34, weight: 800, color: TEAL }] },
      ],
    },
    consumer: {
      blocks: [
        { x: 456, top: 1010, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: DARK_TEAL }, { text: '同比 +50%', size: 29, color: NOTE }] },
        { x: 303, top: 1093, anchor: 'middle', lines: [{ text: '消费业务', size: 38, weight: 800, color: DARK_TEAL }] },
      ],
    },
    automotive_industrial: {
      blocks: [
        { x: 456, top: 1161, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: ORANGE }, { text: '同比 (2%)', size: 29, color: NOTE }] },
        { x: 270, top: 1238, anchor: 'middle', lines: [{ text: '汽车 / 工业', size: 37, weight: 800, color: ORANGE }] },
      ],
    },
    revenue: { blocks: [{ x: 922, top: 586, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 +63%', size: 29, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1397, top: 427, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, color: GREEN_LABEL }, { text: '利润率 50%', size: 29, color: NOTE }, { text: '同比 +5 个百分点', size: 27, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1390, top: 1142, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 36, weight: 800, color: RED_LABEL }, { text: '成本', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1864, top: 303, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 38, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 37, color: GREEN_LABEL }, { text: '利润率 14%', size: 28, color: NOTE }, { text: '同比 +27 个百分点', size: 26, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1864, top: 907, anchor: 'middle', lineGap: 8, lines: [{ text: '营业费用', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 37, color: RED_LABEL }] }] },
    other_gain: { blocks: [{ x: 1682, top: 964, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 34, weight: 800, color: GREEN_LABEL }, { text: '收益', size: 34, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 32, color: GREEN_LABEL }] }] },
    net_profit: { blocks: [{ x: 2470, top: 347, anchor: 'middle', lineGap: 8, lines: [{ text: '净利润', size: 38, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 37, color: GREEN_LABEL }, { text: '利润率 9%', size: 28, color: NOTE }, { text: '同比 +28 个百分点', size: 26, color: NOTE }] }] },
    tax_other: { blocks: [{ x: 2470, top: 599, anchor: 'middle', lineGap: 8, lines: [{ text: '税费及其他', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 871, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }, { text: '占收入 27%', size: 29, color: NOTE }, { text: '同比 (14 个百分点)', size: 26, color: NOTE }] }] },
    sga: { blocks: [{ x: RIGHT_LABEL_X, top: 1137, anchor: 'middle', lineGap: 8, lines: [{ text: '销售、一般及行政', size: 29, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }, { text: '占收入 10%', size: 29, color: NOTE }, { text: '同比 (7 个百分点)', size: 26, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'marvell-q1-fy26',
    name: 'Marvell · Q1 FY26',
    company: 'Marvell',
    meta: {
      company: 'Marvell',
      title: 'Marvell Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Apr. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/marvell-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2190,
      periodX: 1945,
      periodY: 1242,
      periodNoteY: 1285,
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
    layout: {
      scale: 1,
      nodes: {
        data_center: { x: 420, y: 440, width: 71, height: 230 },
        enterprise_networking: { x: 420, y: 796, width: 71, height: 26 },
        carrier_infrastructure: { x: 420, y: 957, width: 71, height: 21 },
        consumer: { x: 420, y: 1114, width: 71, height: 9 },
        automotive_industrial: { x: 420, y: 1255, width: 71, height: 10 },
        revenue: { x: 887, y: 734, width: 70, height: 302 },
        gross_profit: { x: 1349, y: 611, width: 71, height: 151 },
        cost_of_revenue: { x: 1354, y: 976, width: 71, height: 149 },
        other_gain: { x: 1644, y: 954, width: 71, height: 3 },
        operating_profit: { x: 1829, y: 490, width: 70, height: 41 },
        operating_expenses: { x: 1829, y: 782, width: 70, height: 110 },
        net_profit: { x: 2288, y: 381, width: 71, height: 27 },
        tax_other: { x: 2288, y: 635, width: 71, height: 12 },
        rnd: { x: 2288, y: 884, width: 71, height: 78 },
        sga: { x: 2288, y: 1160, width: 71, height: 28 },
      },
      labels: {
        data_center: {
          blocks: [
            { x: 456, top: 336, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: CYAN }, { text: '+76% Y/Y', size: 29, color: NOTE }] },
            { x: 329, top: 503, anchor: 'middle', lineGap: 8, lines: [{ text: 'Data', size: 40, weight: 800, color: CYAN }, { text: 'center', size: 40, weight: 800, color: CYAN }] },
          ],
        },
        enterprise_networking: {
          blocks: [
            { x: 450, top: 707, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: BLUE }, { text: '+16% Y/Y', size: 29, color: NOTE }] },
            { x: 280, top: 763, anchor: 'middle', lineGap: 8, lines: [{ text: 'Enterprise', size: 38, weight: 800, color: BLUE }, { text: 'networking', size: 38, weight: 800, color: BLUE }] },
          ],
        },
        carrier_infrastructure: {
          blocks: [
            { x: 448, top: 866, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: TEAL }, { text: '+93% Y/Y', size: 29, color: NOTE }] },
            { x: 254, top: 920, anchor: 'middle', lineGap: 8, lines: [{ text: 'Carrier', size: 38, weight: 800, color: TEAL }, { text: 'infrastructure', size: 38, weight: 800, color: TEAL }] },
          ],
        },
        consumer: {
          blocks: [
            { x: 456, top: 1010, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: DARK_TEAL }, { text: '+50% Y/Y', size: 29, color: NOTE }] },
            { x: 303, top: 1093, anchor: 'middle', lines: [{ text: 'Consumer', size: 38, weight: 800, color: DARK_TEAL }] },
          ],
        },
        automotive_industrial: {
          blocks: [
            { x: 456, top: 1161, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, color: ORANGE }, { text: '(2%) Y/Y', size: 29, color: NOTE }] },
            { x: 270, top: 1216, anchor: 'middle', lineGap: 8, lines: [{ text: 'Automotive', size: 37, weight: 800, color: ORANGE }, { text: '/Industrial', size: 37, weight: 800, color: ORANGE }] },
          ],
        },
        revenue: { blocks: [{ x: 922, top: 586, anchor: 'middle', lineGap: 8, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+63% Y/Y', size: 29, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1397, top: 427, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, color: GREEN_LABEL }, { text: '50% margin', size: 29, color: NOTE }, { text: '+5pp Y/Y', size: 29, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1390, top: 1142, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 36, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
        operating_profit: { blocks: [{ x: 1864, top: 303, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, color: GREEN_LABEL }, { text: '14% margin', size: 29, color: NOTE }, { text: '+27pp Y/Y', size: 29, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1864, top: 907, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 38, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 37, color: RED_LABEL }] }] },
        other_gain: { blocks: [{ x: 1682, top: 964, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 34, weight: 800, color: GREEN_LABEL }, { text: 'gain', size: 34, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 32, color: GREEN_LABEL }] }] },
        net_profit: { blocks: [{ x: 2470, top: 347, anchor: 'middle', lineGap: 8, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, color: GREEN_LABEL }, { text: '9% margin', size: 29, color: NOTE }, { text: '+28pp Y/Y', size: 29, color: NOTE }] }] },
        tax_other: { blocks: [{ x: 2470, top: 599, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax & other', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 871, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }, { text: '27% of revenue', size: 29, color: NOTE }, { text: '(14pp) Y/Y', size: 29, color: NOTE }] }] },
        sga: { blocks: [{ x: RIGHT_LABEL_X, top: 1137, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }, { text: '10% of revenue', size: 29, color: NOTE }, { text: '(7pp) Y/Y', size: 29, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data center', value: 1.4, notes: ['+76% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'enterprise_networking', col: 0, order: 1, type: 'source', label: 'Enterprise networking', value: 0.2, notes: ['+16% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'carrier_infrastructure', col: 0, order: 2, type: 'source', label: 'Carrier infrastructure', value: 0.1, notes: ['+93% Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 0.1, notes: ['+50% Y/Y'], color: DARK_TEAL, labelColor: DARK_TEAL, linkTint: DARK_TEAL_LINK },
      { id: 'automotive_industrial', col: 0, order: 4, type: 'source', label: 'Automotive / Industrial', value: 0.1, notes: ['(2%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.9, notes: ['+63% Y/Y'], color: '#000000', labelColor: '#000000' },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.0, notes: ['50% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_gain', col: 3, order: 2, type: 'profit', label: 'Other gain', value: 0.014, valueText: '$14M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.3, notes: ['14% margin', '+27pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['9% margin', '+28pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_other', col: 5, order: 1, type: 'cost', label: 'Tax & other', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.5, notes: ['27% of revenue', '(14pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.2, notes: ['10% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 1.4, sourceWidth: 230, targetWidth: 230, y0: 555, y1: 849, sourceOrder: 0, targetOrder: 0 },
      { source: 'enterprise_networking', target: 'revenue', value: 0.2, sourceWidth: 26, targetWidth: 26, y0: 809, y1: 977, sourceOrder: 0, targetOrder: 1 },
      { source: 'carrier_infrastructure', target: 'revenue', value: 0.1, sourceWidth: 21, targetWidth: 21, y0: 967.5, y1: 1000.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'consumer', target: 'revenue', value: 0.1, sourceWidth: 9, targetWidth: 9, y0: 1118.5, y1: 1015.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'automotive_industrial', target: 'revenue', value: 0.1, sourceWidth: 10, targetWidth: 16, y0: 1260, y1: 1028, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 1.0, sourceWidth: 151, targetWidth: 151, y0: 809.5, y1: 686.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.9, sourceWidth: 151, targetWidth: 149, y0: 960.5, y1: 1050.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.3, sourceWidth: 41, targetWidth: 41, y0: 631.5, y1: 510.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, sourceWidth: 110, targetWidth: 107, y0: 707, y1: 835.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_gain', target: 'operating_expenses', value: 0.014, sourceWidth: 3, targetWidth: 3, y0: 955.5, y1: 890.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, sourceWidth: 27, targetWidth: 27, y0: 503.5, y1: 394.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax_other', value: 0.1, sourceWidth: 12, targetWidth: 12, y0: 524, y1: 641, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.5, sourceWidth: 78, targetWidth: 78, y0: 821, y1: 923, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 0.2, sourceWidth: 32, targetWidth: 28, y0: 876, y1: 1174, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Marvell · 2026 财年第一季度',
        meta: {
          title: 'Marvell 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 4 月',
          titleSize: 112,
          titleTextLength: 1900,
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +76%'] },
          enterprise_networking: { label: '企业网络', notes: ['同比 +16%'] },
          carrier_infrastructure: { label: '运营商基础设施', notes: ['同比 +93%'] },
          consumer: { label: '消费业务', notes: ['同比 +50%'] },
          automotive_industrial: { label: '汽车 / 工业', notes: ['同比 (2%)'] },
          revenue: { label: '收入', notes: ['同比 +63%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other_gain: { label: '其他收益' },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +27 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 +28 个百分点'] },
          tax_other: { label: '税费及其他' },
          rnd: { label: '研发', notes: ['占收入 27%', '同比 (14 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 10%', '同比 (7 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
