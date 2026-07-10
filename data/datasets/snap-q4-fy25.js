/* ====================================================================
 * Snap - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/snap-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const BLACK = '#000000';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const YELLOW = '#fffc00';
  const YELLOW_LINK = '#f7f685';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const SCALE = 335 / 1717;
  const RIGHT_LABEL_X = 2432;
  const h = (value) => Math.round(value * SCALE * 10) / 10;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${Math.min(31, height / 4)}" fill="${BLACK}"/>
      ${lines.map((line) => `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const userStack = (labels) => `
    <g>
      <path d="M128 417L157 461H100Z" fill="${BLACK}"/>
      <rect x="60" y="461" width="132" height="707" rx="11" fill="${BLACK}"/>
      ${labels.map((line) => `<text x="126" y="${line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  // The source uses Tax as a thin green leader line with no visible terminal
  // node. Keep the Sankey anchor for the link endpoint, but draw the visible
  // horizontal guide separately (T12).
  const taxLeader = `
    <g stroke="${GREEN_LINK}" fill="none">
      <line x1="2144" y1="388" x2="2212" y2="388" stroke-width="3"/>
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${taxLeader}
      ${kpiCard(34, 226, 187, 168, [
        { text: 'DAU', y: 57, size: 35, weight: 800 },
        { text: '474M', y: 103, size: 32, weight: 800 },
        { text: '+5% Y/Y', y: 141, size: 20, weight: 500 },
      ])}
      ${userStack([
        { text: '94M', y: 550, size: 35, weight: 800 },
        { text: '(5%) Y/Y', y: 588, size: 24 },
        { text: '98M', y: 843, size: 35, weight: 800 },
        { text: '(1%) Y/Y', y: 882, size: 24 },
        { text: '282M', y: 1070, size: 35, weight: 800 },
        { text: '+11% Y/Y', y: 1110, size: 24 },
      ])}
      ${kpiCard(332, 1145, 209, 135, [
        { text: 'ARPU', y: 48, size: 29, weight: 800 },
        { text: '$3.62', y: 82, size: 27 },
        { text: '+5% Y/Y', y: 116, size: 21 },
      ])}
      <text x="250" y="1316" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">DAU = Daily Active Users</text>
      <text x="278" y="1356" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">ARPU = Average Revenue Per User</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${taxLeader}
      ${kpiCard(34, 226, 187, 168, [
        { text: 'DAU', y: 57, size: 35, weight: 800 },
        { text: '474M', y: 103, size: 32, weight: 800 },
        { text: '同比 +5%', y: 141, size: 20, weight: 500 },
      ])}
      ${userStack([
        { text: '94M', y: 550, size: 35, weight: 800 },
        { text: '同比 (5%)', y: 588, size: 24 },
        { text: '98M', y: 843, size: 35, weight: 800 },
        { text: '同比 (1%)', y: 882, size: 24 },
        { text: '282M', y: 1070, size: 35, weight: 800 },
        { text: '同比 +11%', y: 1110, size: 24 },
      ])}
      ${kpiCard(332, 1145, 209, 135, [
        { text: 'ARPU', y: 48, size: 29, weight: 800 },
        { text: '$3.62', y: 82, size: 27 },
        { text: '同比 +5%', y: 116, size: 21 },
      ])}
      <text x="250" y="1316" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">DAU = 日活跃用户</text>
      <text x="278" y="1356" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">ARPU = 每用户平均收入</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'snap-q4-fy25',
    name: 'Snap · Q4 FY25',
    company: 'Snap',
    meta: {
      company: 'Snap',
      title: 'Snap Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/snap-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2028,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 234,
      logoHeight: 234,
      logoY: 259,
      logoViewBox: '0 0 208 208',
      logoSvg: BUSINESS_ICONS.snapLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: YELLOW, label: BLACK },
        hub: { node: YELLOW, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: YELLOW_LINK, hub: YELLOW_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: SCALE,
      nodes: {
        north_america: { x: 397, y: 506, width: 72, height: h(1026) },
        europe: { x: 397, y: 851, width: 72, height: h(341) },
        rest_of_world: { x: 397, y: 1036, width: 72, height: h(350) },
        revenue: { x: 864, y: 680, width: 72, height: h(1717) },
        gross_profit: { x: 1331, y: 526, width: 72, height: h(1014) },
        cost_of_revenue: { x: 1331, y: 963, width: 72, height: h(702) },
        operating_profit: { x: 1799, y: 422, width: 71, height: 11 },
        operating_expenses: { x: 1799, y: 687, width: 72, height: h(964) },
        tax: { x: 2140, y: 386, width: 72, height: 4 },
        net_profit: { x: 2265, y: 314, width: 71, height: 11 },
        other: { x: 2265, y: 569, width: 72, height: h(12) },
        rnd: { x: 2265, y: 851, width: 72, height: h(473) },
        sm: { x: 2265, y: 1079, width: 72, height: h(249) },
        ga: { x: 2265, y: 1254, width: 72, height: h(242) },
      },
      labels: {
        north_america: {
          blocks: [
            { x: 433, top: 414, anchor: 'middle', lineGap: 9, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 376, top: 566, anchor: 'end', lineGap: 10, lines: [
              { text: 'North', size: 40, weight: 800 }, { text: 'America', size: 40, weight: 800 },
            ] },
          ],
        },
        europe: {
          blocks: [
            { x: 433, top: 755, anchor: 'middle', lineGap: 9, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 376, top: 870, anchor: 'end', lines: [{ text: 'Europe', size: 40, weight: 800 }] },
          ],
        },
        rest_of_world: {
          blocks: [
            { x: 433, top: 944, anchor: 'middle', lineGap: 9, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
              { x: 370, top: 1044, anchor: 'end', lineGap: 10, lines: [
              { text: 'Rest', size: 40, weight: 800 }, { text: 'of world', size: 40, weight: 800 },
            ] },
          ],
        },
        revenue: {
          blocks: [{ x: 900, top: 535, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Revenue', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        gross_profit: {
          blocks: [{ x: 1367, top: 346, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Gross profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '59% margin', size: 29, weight: 400, color: NOTE },
            { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        cost_of_revenue: {
          blocks: [{ x: 1367, top: 1125, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Cost of', size: 33, weight: 800 }, { text: 'revenue', size: 33, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ] }],
        },
        operating_profit: {
          blocks: [{ x: 1835, top: 244, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Operating profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '3% margin', size: 29, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        operating_expenses: {
          blocks: [{ x: 1835, top: 899, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 },
            { text: '$value', size: 34, weight: 400 },
          ] }],
        },
        tax: {
          blocks: [{ x: 2180, top: 403, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 },
          ] }],
        },
        net_profit: {
          blocks: [{ x: 2487, top: 273, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
            { text: '3% margin', size: 29, weight: 400, color: NOTE },
            { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        other: {
          blocks: [{ x: RIGHT_LABEL_X, top: 537, anchor: 'start', lineGap: 8, lines: [
            { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 },
          ] }],
        },
        rnd: {
          blocks: [{ x: RIGHT_LABEL_X, top: 849, anchor: 'start', lineGap: 8, lines: [
            { text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 },
            { text: '28% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
          ] }],
        },
        sm: {
          blocks: [{ x: RIGHT_LABEL_X, top: 1043, anchor: 'start', lineGap: 8, lines: [
            { text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 },
            { text: '15% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] }],
        },
        ga: {
          blocks: [{ x: RIGHT_LABEL_X, top: 1238, anchor: 'start', lineGap: 8, lines: [
            { text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 },
            { text: '14% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] }],
        },
      },
    },

    nodes: [
      { id: 'north_america', col: 0, order: 0, type: 'source', label: ['North', 'America'], value: 1026, valueText: '$1,026M', notes: ['+6% Y/Y'], color: YELLOW, labelColor: BLACK, linkTint: YELLOW_LINK },
      { id: 'europe', col: 0, order: 1, type: 'source', label: 'Europe', value: 341, valueText: '$341M', notes: ['+19% Y/Y'], color: YELLOW, labelColor: BLACK, linkTint: YELLOW_LINK },
      { id: 'rest_of_world', col: 0, order: 2, type: 'source', label: 'Rest of world', value: 350, valueText: '$350M', notes: ['+16% Y/Y'], color: YELLOW, labelColor: BLACK, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1717, valueText: '$1,717M', notes: ['+10% Y/Y'], color: YELLOW, labelColor: BLACK, linkTint: YELLOW_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1014, valueText: '$1,014M', notes: ['59% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 702, valueText: '($702M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 50, valueText: '$50M', notes: ['3% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 964, valueText: '($964M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 0, type: 'profit', label: 'Tax', value: 7, valueText: '$7M', color: '#f2f2f2', labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 45, valueText: '$45M', notes: ['3% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 12, valueText: '($12M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 473, valueText: '($473M)', notes: ['28% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 249, valueText: '($249M)', notes: ['15% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 242, valueText: '($242M)', notes: ['14% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'north_america', target: 'revenue', value: 1026, width: h(1026), sourceOrder: 0, targetOrder: 0 },
      { source: 'europe', target: 'revenue', value: 341, width: h(341), sourceOrder: 0, targetOrder: 1 },
      { source: 'rest_of_world', target: 'revenue', value: 350, width: h(350), sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1014, width: h(1014), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 702, width: h(702), sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 50, width: h(50), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 964, width: h(964), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 45, width: h(45), sourceWidth: h(45), targetWidth: h(45), sourceOrder: 0, targetOrder: 0, y0: 427, y1: 318.4, linkTint: GREEN_LINK },
      { source: 'tax', target: 'net_profit', value: 7, width: 3, sourceWidth: 3, targetWidth: 2.2, sourceOrder: 0, targetOrder: 1, y0: 388, y1: 323.9, linkTint: GREEN_LINK,
        curve: { c1x: 2246.5, c1y: 388, c2x: 2235.5, c2y: 323.9 } },
      { source: 'operating_profit', target: 'other', value: 12, width: h(12), sourceOrder: 2, targetOrder: 0, y0: 431 },
      { source: 'operating_expenses', target: 'rnd', value: 473, width: h(473), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 249, width: h(249), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 242, width: h(242), sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Snap · 2025 财年第四季度',
        meta: {
          title: 'Snap 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1500,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          north_america: { label: '北美', notes: ['同比 +6%'] },
          europe: { label: '欧洲', notes: ['同比 +19%'] },
          rest_of_world: { label: '世界其他地区', notes: ['同比 +16%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 59%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          tax: { label: '税费' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +0 个百分点'] },
          other: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 28%', '同比 +0 个百分点'] },
          sm: { label: '销售与营销', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 14%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            north_america: { blocks: [
              { x: 433, top: 414, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +6%', size: 29, weight: 400, color: NOTE }] },
              { x: 376, top: 566, anchor: 'end', lineGap: 10, lines: [{ text: '北美', size: 40, weight: 800 }] },
            ] },
            europe: { blocks: [
              { x: 433, top: 755, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +19%', size: 29, weight: 400, color: NOTE }] },
              { x: 376, top: 870, anchor: 'end', lines: [{ text: '欧洲', size: 40, weight: 800 }] },
            ] },
            rest_of_world: { blocks: [
              { x: 433, top: 944, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +16%', size: 29, weight: 400, color: NOTE }] },
              { x: 370, top: 1044, anchor: 'end', lineGap: 10, lines: [{ text: '世界', size: 40, weight: 800 }, { text: '其他地区', size: 40, weight: 800 }] },
            ] },
            revenue: { blocks: [{ x: 900, top: 535, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +10%', size: 29, weight: 400, color: NOTE }] }] },
            gross_profit: { blocks: [{ x: 1367, top: 346, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 59%', size: 29, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            cost_of_revenue: { blocks: [{ x: 1367, top: 1125, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 33, weight: 800 }, { text: '成本', size: 33, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
            operating_profit: { blocks: [{ x: 1835, top: 244, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 3%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1835, top: 899, anchor: 'middle', lineGap: 8, lines: [{ text: '运营', size: 36, weight: 800 }, { text: '费用', size: 36, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
            tax: { blocks: [{ x: 2180, top: 403, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
            net_profit: { blocks: [{ x: 2487, top: 273, anchor: 'middle', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 3%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            other: { blocks: [{ x: RIGHT_LABEL_X, top: 537, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
            rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 849, anchor: 'start', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }, { text: '占收入 28%', size: 28, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE }] }] },
            sm: { blocks: [{ x: RIGHT_LABEL_X, top: 1043, anchor: 'start', lineGap: 8, lines: [{ text: '销售与营销', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }, { text: '占收入 15%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1238, anchor: 'start', lineGap: 8, lines: [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }, { text: '占收入 14%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
          },
        },
      },
    },
  });
})();
