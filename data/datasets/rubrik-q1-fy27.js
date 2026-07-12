/* ====================================================================
 * Rubrik - Q1 FY27 income statement ($M)
 * Reconstructed from input/processed/rubrik-q1-fy27.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const TEAL = '#00aea2';
  const TEAL_LINK = '#85d3ce';
  const BLACK = '#4a4a4a';
  const GRAY_LINK = '#a6a6a6';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2520;

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
      <g transform="translate(8,4)">
        <rect x="51" y="0" width="31" height="31" rx="3" transform="rotate(45 66.5 15.5)" fill="#00aea2"/>
        <rect x="0" y="48" width="31" height="31" rx="3" transform="rotate(45 15.5 63.5)" fill="#00aea2"/>
        <rect x="102" y="48" width="31" height="31" rx="3" transform="rotate(45 117.5 63.5)" fill="#00a9dc"/>
        <rect x="51" y="96" width="31" height="31" rx="3" transform="rotate(45 66.5 111.5)" fill="#00a9dc"/>
        <rect x="22" y="24" width="27" height="27" rx="4" fill="#00aea2"/>
        <rect x="84" y="24" width="27" height="27" rx="4" fill="#00a9dc"/>
        <rect x="22" y="76" width="27" height="27" rx="4" fill="#00aea2"/>
        <rect x="84" y="76" width="27" height="27" rx="4" fill="#00a9dc"/>
      </g>
      <text x="184" y="111" font-family="Montserrat,Arial,sans-serif" font-size="118"
        font-weight="400" letter-spacing="-8" fill="${BLACK}">rubrik</text>
    </g>`;

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${card(23, 1114, 379, 157, [
        { text: 'Subscription ARR', y: 1166, size: 31, weight: 800 },
        { text: '$1.57B', y: 1207, size: 30, weight: 500 },
        { text: '+32% Y/Y', y: 1248, size: 29, weight: 500 },
      ])}
      ${card(415, 1109, 274, 157, [
        { text: 'Cloud ARR', y: 1160, size: 31, weight: 800 },
        { text: '$1.394B', y: 1201, size: 30, weight: 500 },
        { text: '+43% Y/Y', y: 1242, size: 29, weight: 500 },
      ])}
      ${card(702, 1105, 189, 164, [
        { text: 'DBNR', y: 1156, size: 31, weight: 800 },
        { text: '&gt; 120%', y: 1199, size: 30, weight: 500 },
        { text: 'Unchanged', y: 1241, size: 29, weight: 500 },
      ])}
      ${card(902, 1105, 379, 164, [
        { text: 'Customers &gt; $100K', y: 1158, size: 31, weight: 800 },
        { text: '2,946', y: 1200, size: 30, weight: 500 },
        { text: '+24% Y/Y', y: 1242, size: 29, weight: 500 },
      ])}
      <text x="120" y="1313" font-size="29" font-weight="500" fill="${NOTE}">ARR = Annual Recurring Revenue</text>
      <text x="108" y="1351" font-size="29" font-weight="500" fill="${NOTE}">DBNR = Dollar Based Net Retention</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${card(23, 1114, 379, 157, [
        { text: '订阅 ARR', y: 1166, size: 31, weight: 800 },
        { text: '$1.57B', y: 1207, size: 30, weight: 500 },
        { text: '同比 +32%', y: 1248, size: 29, weight: 500 },
      ])}
      ${card(415, 1109, 274, 157, [
        { text: '云 ARR', y: 1160, size: 31, weight: 800 },
        { text: '$1.394B', y: 1201, size: 30, weight: 500 },
        { text: '同比 +43%', y: 1242, size: 29, weight: 500 },
      ])}
      ${card(702, 1105, 189, 164, [
        { text: 'DBNR', y: 1156, size: 31, weight: 800 },
        { text: '&gt; 120%', y: 1199, size: 30, weight: 500 },
        { text: '保持不变', y: 1241, size: 29, weight: 500 },
      ])}
      ${card(902, 1105, 379, 164, [
        { text: '客户数 &gt; $100K', y: 1158, size: 31, weight: 800 },
        { text: '2,946', y: 1200, size: 30, weight: 500 },
        { text: '同比 +24%', y: 1242, size: 29, weight: 500 },
      ])}
      <text x="120" y="1313" font-size="29" font-weight="500" fill="${NOTE}">ARR = 年度经常性收入</text>
      <text x="108" y="1351" font-size="29" font-weight="500" fill="${NOTE}">DBNR = 美元净留存率</text>
    </g>`;

  const labelsEn = {
    subscription: { blocks: [
      block(483, 392, [{ text: '$value', size: 40, weight: 400, color: TEAL }, { text: '+41% Y/Y', size: 29, weight: 400, color: NOTE }], 'middle', 11),
      block(382, 625, [{ text: 'Subscription', size: 40, weight: 800, color: TEAL }], 'end'),
      block(382, 676, [{ text: '82% gross margin', size: 29, weight: 400, color: NOTE }], 'end'),
    ] },
    other: { blocks: [
      block(483, 950, [{ text: '$value', size: 40, weight: 400, color: BLACK }, { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE }], 'middle', 11),
      block(386, 1016, [{ text: 'Other', size: 40, weight: 800, color: BLACK }], 'end'),
      block(386, 1068, [{ text: '34% gross margin', size: 29, weight: 400, color: NOTE }], 'end'),
    ] },
    revenue: { blocks: [block(950, 446, [
      { text: 'Revenue', size: 40, weight: 800, color: BLACK },
      { text: '$value', size: 40, weight: 400, color: BLACK },
      { text: '+39% Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'middle', 10)] },
    gross_profit: { blocks: [block(1417, 300, [
      { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
      { text: '81% margin', size: 29, weight: 400, color: NOTE },
      { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'middle', 10)] },
    cost_of_revenue: { blocks: [block(1417, 1080, [
      { text: 'Cost of', size: 36, weight: 800, color: RED_LABEL },
      { text: 'revenue', size: 36, weight: 800, color: RED_LABEL },
      { text: '$value', size: 35, weight: 400, color: RED_LABEL },
    ], 'middle', 8)] },
    operating_expenses: { blocks: [block(1885, 423, [
      { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
      { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
      { text: '$value', size: 40, weight: 400, color: RED_LABEL },
    ], 'middle', 10)] },
    operating_loss: { blocks: [block(1657, 1099, [
      { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
      { text: 'loss', size: 40, weight: 800, color: RED_LABEL },
      { text: '$value', size: 40, weight: 400, color: RED_LABEL },
      { text: '(14%) margin', size: 29, weight: 400, color: NOTE },
      { text: '+20pp Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'middle', 10)] },
    sm: { blocks: [block(RIGHT_LABEL_X, 399, [
      { text: 'S&M', size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '50% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '(11pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'middle', 8)] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 756, [
      { text: 'R&D', size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '30% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'middle', 8)] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1049, [
      { text: 'G&A', size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '15% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '(7pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'middle', 8)] },
  };

  const labelsZh = {
    subscription: { blocks: [
      block(483, 392, [{ text: '$value', size: 40, weight: 400, color: TEAL }, { text: '同比 +41%', size: 29, weight: 400, color: NOTE }], 'middle', 11),
      block(382, 625, [{ text: '订阅', size: 40, weight: 800, color: TEAL }], 'end'),
      block(382, 676, [{ text: '毛利率 82%', size: 29, weight: 400, color: NOTE }], 'end'),
    ] },
    other: { blocks: [
      block(483, 950, [{ text: '$value', size: 40, weight: 400, color: BLACK }, { text: '同比 +23%', size: 29, weight: 400, color: NOTE }], 'middle', 11),
      block(386, 1016, [{ text: '其他', size: 40, weight: 800, color: BLACK }], 'end'),
      block(386, 1068, [{ text: '毛利率 34%', size: 29, weight: 400, color: NOTE }], 'end'),
    ] },
    revenue: { blocks: [block(950, 446, [{ text: '收入', size: 40, weight: 800, color: BLACK }, { text: '$value', size: 40, weight: 400, color: BLACK }, { text: '同比 +39%', size: 29, weight: 400, color: NOTE }], 'middle', 10)] },
    gross_profit: { blocks: [block(1417, 300, [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 81%', size: 29, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE }], 'middle', 10)] },
    cost_of_revenue: { blocks: [block(1417, 1080, [{ text: '收入', size: 36, weight: 800, color: RED_LABEL }, { text: '成本', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, weight: 400, color: RED_LABEL }], 'middle', 8)] },
    operating_expenses: { blocks: [block(1885, 423, [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }], 'middle', 10)] },
    operating_loss: { blocks: [block(1657, 1099, [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '亏损', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '利润率 (14%)', size: 29, weight: 400, color: NOTE }, { text: '同比 +20 个百分点', size: 29, weight: 400, color: NOTE }], 'middle', 10)] },
    sm: { blocks: [block(RIGHT_LABEL_X, 399, [{ text: '销售与市场', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 50%', size: 29, weight: 400, color: NOTE }, { text: '同比 (11 个百分点)', size: 29, weight: 400, color: NOTE }], 'middle', 8)] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 756, [{ text: '研发', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 30%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }], 'middle', 8)] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1049, [{ text: '管理费用', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 15%', size: 29, weight: 400, color: NOTE }, { text: '同比 (7 个百分点)', size: 29, weight: 400, color: NOTE }], 'middle', 8)] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'rubrik-q1-fy27',
    name: 'Rubrik · Q1 FY27',
    company: 'Rubrik',
    meta: {
      company: 'Rubrik',
      title: 'Rubrik Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/rubrik-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2160,
      periodX: 2507,
      periodY: 269,
      periodNoteY: 312,
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
        source: { node: TEAL, label: TEAL },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: TEAL_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 0.934,
      nodes: {
        subscription: { x: 448, y: 488, width: 71, height: 349 },
        other: { x: 448, y: 1046, width: 71, height: 10 },
        revenue: { x: 915, y: 594, width: 70, height: 362 },
        gross_profit: { x: 1382, y: 489, width: 71, height: 292 },
        cost_of_revenue: { x: 1382, y: 991, width: 71, height: 68 },
        operating_loss: { x: 1622, y: 1031, width: 71, height: 47 },
        operating_expenses: { x: 1850, y: 571, width: 70, height: 340 },
        sm: { x: 2316, y: 378, width: 71, height: 180 },
        rnd: { x: 2316, y: 756, width: 71, height: 105 },
        ga: { x: 2316, y: 1056, width: 71, height: 51 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 374, notes: ['+41% Y/Y', '82% gross margin'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'other', col: 0, order: 1, type: 'hub', label: 'Other', value: 13, notes: ['+23% Y/Y', '34% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 387, notes: ['+39% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 312, notes: ['81% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 75, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -53, notes: ['(14%) margin', '+20pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 364, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 193, notes: ['50% of revenue', '(11pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 114, notes: ['30% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 57, notes: ['15% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 374, width: 349, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'other', target: 'revenue', value: 13, width: 10, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 312, width: 292, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 75, width: 68, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 312, width: 292, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 53, width: 47, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 193, width: 180, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 114, width: 105, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 57, width: 51, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['ARR', 'DBNR'],
      zh: {
        name: 'Rubrik · 2027 财年第一季度',
        meta: {
          title: 'Rubrik 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 1790,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +41%', '毛利率 82%'] },
          other: { label: '其他', notes: ['同比 +23%', '毛利率 34%'] },
          revenue: { label: '收入', notes: ['同比 +39%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 81%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (14%)', '同比 +20 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          sm: { label: '销售与市场', notes: ['占收入 50%', '同比 (11 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 30%', '同比 +0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 15%', '同比 (7 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
