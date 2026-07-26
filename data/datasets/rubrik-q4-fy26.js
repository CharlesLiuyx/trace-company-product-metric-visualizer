/* ====================================================================
 * Rubrik - Q4 FY26 income statement ($M)
 * Reconstructed from input/processed/rubrik-q4-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const TEAL = '#00aea2';
  const TEAL_LABEL = '#00aea1';
  const TEAL_LINK = '#85d3ce';
  const BLUE = '#00a6d3';
  const BLUE_LABEL = '#0399d7';
  const BLUE_LINK = '#85cfe4';
  const BLACK = '#4a4a4a';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2507;

  const block = (x, top, lines, anchor = 'middle', lineGap = 10) => ({
    x, top, anchor, lineGap, lines,
  });

  const card = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="34" fill="${BLACK}"/>
      ${lines.map((line) => `
        <text x="${x + width / 2}" y="${line.y}" text-anchor="middle"
          font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const rubrikLogo = `
    <g>
      <g transform="translate(-12,10) scale(1.14,1.185)">
        <rect x="51" y="0" width="31" height="31" rx="3" transform="rotate(45 66.5 15.5)" fill="#00aea2"/>
        <rect x="0" y="48" width="31" height="31" rx="3" transform="rotate(45 15.5 63.5)" fill="#00aea2"/>
        <rect x="102" y="48" width="31" height="31" rx="3" transform="rotate(45 117.5 63.5)" fill="#00a9dc"/>
        <rect x="51" y="96" width="31" height="31" rx="3" transform="rotate(45 66.5 111.5)" fill="#00a9dc"/>
        <rect x="22" y="24" width="27" height="27" rx="4" fill="#00aea2"/>
        <rect x="84" y="24" width="27" height="27" rx="4" fill="#00a9dc"/>
        <rect x="22" y="76" width="27" height="27" rx="4" fill="#00aea2"/>
        <rect x="84" y="76" width="27" height="27" rx="4" fill="#00a9dc"/>
      </g>
      <text x="186" y="127" font-family="Montserrat,Arial,sans-serif" font-size="163"
        font-weight="400" textLength="350" lengthAdjust="spacingAndGlyphs" fill="${BLACK}">rubrik</text>
    </g>`;

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${card(23, 1114, 379, 157, [
        { text: 'Subscription ARR', y: 1166, size: 31, weight: 800 },
        { text: '$1.46B', y: 1207, size: 30, weight: 500 },
        { text: '+34% Y/Y', y: 1248, size: 29, weight: 500 },
      ])}
      ${card(413, 1110, 190, 164, [
        { text: 'DBNR', y: 1162, size: 31, weight: 800 },
        { text: '&gt; 120%', y: 1204, size: 30, weight: 500 },
        { text: 'Unchanged', y: 1246, size: 29, weight: 500 },
      ])}
      ${card(613, 1110, 379, 163, [
        { text: 'Customers &gt; $100K', y: 1162, size: 31, weight: 800 },
        { text: '2,805', y: 1204, size: 30, weight: 500 },
        { text: '+25% Y/Y', y: 1246, size: 29, weight: 500 },
      ])}
      <text x="120" y="1313" font-size="29" font-weight="500" fill="${NOTE}">ARR = Annual Recurring Revenue</text>
      <text x="108" y="1351" font-size="29" font-weight="500" fill="${NOTE}">DBNR = Dollar Based Net Retention</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${card(23, 1114, 379, 157, [
        { text: '订阅 ARR', y: 1166, size: 31, weight: 800 },
        { text: '$1.46B', y: 1207, size: 30, weight: 500 },
        { text: '同比 +34%', y: 1248, size: 29, weight: 500 },
      ])}
      ${card(413, 1110, 190, 164, [
        { text: 'DBNR', y: 1162, size: 31, weight: 800 },
        { text: '&gt; 120%', y: 1204, size: 30, weight: 500 },
        { text: '保持不变', y: 1246, size: 29, weight: 500 },
      ])}
      ${card(613, 1110, 379, 163, [
        { text: '客户数 &gt; $100K', y: 1162, size: 31, weight: 800 },
        { text: '2,805', y: 1204, size: 30, weight: 500 },
        { text: '同比 +25%', y: 1246, size: 29, weight: 500 },
      ])}
      <text x="120" y="1313" font-size="29" font-weight="500" fill="${NOTE}">ARR = 年度经常性收入</text>
      <text x="108" y="1351" font-size="29" font-weight="500" fill="${NOTE}">DBNR = 美元净留存率</text>
    </g>`;

  const labelsEn = {
    subscription: { blocks: [
      block(482, 392, [{ text: '$value', size: 40, weight: 400, color: TEAL_LABEL }, { text: '+50% Y/Y', size: 29, weight: 400, color: NOTE }], 'middle', 11),
      block(382, 627, [{ text: 'Subscription', size: 40, weight: 800, color: TEAL_LABEL }], 'end'),
      block(382, 666, [{ text: '83% gross margin', size: 29, weight: 400, color: NOTE }], 'end'),
    ] },
    other: { blocks: [
      block(485, 905, [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '(11%) Y/Y', size: 29, weight: 400, color: NOTE }], 'middle', 11),
      block(277, 984, [{ text: 'Other', size: 40, weight: 800, color: BLUE }], 'middle'),
      block(277, 1020, [{ text: '39% gross margin', size: 29, weight: 400, color: NOTE }], 'middle'),
    ] },
    revenue: { blocks: [block(950, 446, [
      { text: 'Revenue', size: 40, weight: 800, color: BLACK },
      { text: '$value', size: 40, weight: 400, color: BLACK },
      { text: '+46% Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'middle', 10)] },
    gross_profit: { blocks: [block(1418, 308, [
      { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
      { text: '82% margin', size: 29, weight: 400, color: NOTE },
      { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'middle', 10)] },
    cost_of_revenue: { blocks: [block(1415, 1039, [
      { text: 'Cost of', size: 36, weight: 800, color: RED_LABEL },
      { text: 'revenue', size: 36, weight: 800, color: RED_LABEL },
      { text: '$value', size: 35, weight: 400, color: RED_LABEL },
    ], 'middle', 8)] },
    operating_expenses: { blocks: [block(1885, 459, [
      { text: 'Operating', size: 33, weight: 800, color: RED_LABEL },
      { text: 'expenses', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
    ], 'middle', 8)] },
    operating_loss: { blocks: [block(1667, 1046, [
      { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
      { text: 'loss', size: 40, weight: 800, color: RED_LABEL },
      { text: '$value', size: 40, weight: 400, color: RED_LABEL },
      { text: '(22%) margin', size: 29, weight: 400, color: NOTE },
      { text: '+23pp Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'middle', 10)] },
    sm: { blocks: [block(RIGHT_LABEL_X, 486, [
      { text: 'S&M', size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '59% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'middle', 8)] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 788, [
      { text: 'R&D', size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '27% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'middle', 8)] },
    ga: { blocks: [block(RIGHT_LABEL_X, 995, [
      { text: 'G&A', size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '17% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '(12pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'middle', 8)] },
  };

  const labelsZh = {
    subscription: { blocks: [
      block(482, 392, [{ text: '$value', size: 40, weight: 400, color: TEAL_LABEL }, { text: '同比 +50%', size: 29, weight: 400, color: NOTE }], 'middle', 11),
      block(382, 627, [{ text: '订阅', size: 40, weight: 800, color: TEAL_LABEL }], 'end'),
      block(382, 666, [{ text: '毛利率 83%', size: 29, weight: 400, color: NOTE }], 'end'),
    ] },
    other: { blocks: [
      block(485, 905, [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '同比 (11%)', size: 29, weight: 400, color: NOTE }], 'middle', 11),
      block(277, 984, [{ text: '其他', size: 40, weight: 800, color: BLUE }], 'middle'),
      block(277, 1020, [{ text: '毛利率 39%', size: 29, weight: 400, color: NOTE }], 'middle'),
    ] },
    revenue: { blocks: [block(950, 446, [{ text: '收入', size: 40, weight: 800, color: BLACK }, { text: '$value', size: 40, weight: 400, color: BLACK }, { text: '同比 +46%', size: 29, weight: 400, color: NOTE }], 'middle', 10)] },
    gross_profit: { blocks: [block(1418, 308, [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 82%', size: 29, weight: 400, color: NOTE }, { text: '同比 +4 个百分点', size: 29, weight: 400, color: NOTE }], 'middle', 10)] },
    cost_of_revenue: { blocks: [block(1415, 1039, [{ text: '收入', size: 36, weight: 800, color: RED_LABEL }, { text: '成本', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, weight: 400, color: RED_LABEL }], 'middle', 8)] },
    operating_expenses: { blocks: [block(1885, 459, [{ text: '营业', size: 33, weight: 800, color: RED_LABEL }, { text: '费用', size: 33, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }], 'middle', 8)] },
    operating_loss: { blocks: [block(1667, 1046, [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '亏损', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '利润率 (22%)', size: 29, weight: 400, color: NOTE }, { text: '同比 +23 个百分点', size: 29, weight: 400, color: NOTE }], 'middle', 10)] },
    sm: { blocks: [block(RIGHT_LABEL_X, 486, [{ text: '销售与市场', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 59%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }], 'middle', 8)] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 788, [{ text: '研发', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 27%', size: 29, weight: 400, color: NOTE }, { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE }], 'middle', 8)] },
    ga: { blocks: [block(RIGHT_LABEL_X, 995, [{ text: '管理费用', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 17%', size: 29, weight: 400, color: NOTE }, { text: '同比 (12 个百分点)', size: 29, weight: 400, color: NOTE }], 'middle', 8)] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'rubrik-q4-fy26',
    name: 'Rubrik · Q4 FY26',
    company: 'Rubrik',
    meta: {
      company: 'Rubrik',
      title: 'Rubrik Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/rubrik-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2140,
      periodX: 2500,
      periodY: 324,
      periodNoteY: 367,
      logoWidth: 620,
      logoHeight: 130,
      logoY: 280,
      logoViewBox: '0 0 630 130',
      logoSvg: rubrikLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: '#5d5d5d',
      noteColor: NOTE,
      palette: {
        source: { node: TEAL, label: TEAL_LABEL },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: TEAL_LINK, hub: TEAL_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 0.86,
      nodes: {
        subscription: { x: 446, y: 494, width: 71, height: 315 },
        other: { x: 446, y: 1004, width: 71, height: 9 },
        revenue: { x: 913, y: 598, width: 70, height: 325 },
        gross_profit: { x: 1380, y: 498, width: 71, height: 265 },
        cost_of_revenue: { x: 1380, y: 962, width: 71, height: 59 },
        operating_loss: { x: 1630, y: 957, width: 71, height: 69 },
        operating_expenses: { x: 1848, y: 594, width: 70, height: 337 },
        sm: { x: 2314, y: 464, width: 71, height: 193 },
        rnd: { x: 2314, y: 790, width: 71, height: 87 },
        ga: { x: 2314, y: 1011, width: 71, height: 53 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 365, notes: ['+50% Y/Y', '83% gross margin'], color: TEAL, labelColor: TEAL_LABEL, linkTint: TEAL_LINK },
      { id: 'other', col: 0, order: 1, type: 'source', label: 'Other', value: 13, notes: ['(11%) Y/Y', '39% gross margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 378, notes: ['+46% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 308, notes: ['82% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 70, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -82, notes: ['(22%) margin', '+23pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 390, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 224, notes: ['59% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 102, notes: ['27% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 64, notes: ['17% of revenue', '(12pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 365, width: 315, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'other', target: 'revenue', value: 13, width: 9, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 308, width: 265, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 70, width: 59, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 308, width: 265, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 82, sourceWidth: 69, targetWidth: 72, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 224, width: 193, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 102, width: 87, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 64, sourceWidth: 57, targetWidth: 53, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['ARR', 'DBNR'],
      zh: {
        name: 'Rubrik · 2026 财年第四季度',
        meta: {
          title: 'Rubrik 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1790,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +50%', '毛利率 83%'] },
          other: { label: '其他', notes: ['同比 (11%)', '毛利率 39%'] },
          revenue: { label: '收入', notes: ['同比 +46%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (22%)', '同比 +23 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          sm: { label: '销售与市场', notes: ['占收入 59%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 27%', '同比 (4 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 17%', '同比 (12 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
