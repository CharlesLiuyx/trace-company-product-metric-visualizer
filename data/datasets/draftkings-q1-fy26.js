/* ====================================================================
 * DraftKings - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/draftkings-q1-fy26.png as a fixed
 * d3-sankey layout. Reuses the validated DraftKings wordmark and segment
 * badges documented under data/assets/icon-references/draftkings/.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const ORANGE = '#f7750d';
  const ORANGE_LINK = '#f3ba8b';
  const GAMING_GREEN = '#61b510';
  const GAMING_LINK = '#b1d68c';
  const DARK = '#000000';
  const DARK_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const kpiCard = (x, y, width, title, value, note) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="165" rx="32" fill="${ORANGE}"/>
      <text x="${x + width / 2}" y="${y + 50}" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="${y + 93}" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="${y + 134}" text-anchor="middle" font-size="25" font-weight="400" fill="#ffffff">${note}</text>
    </g>`;

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(192, 1116, 162, 'MUPs', '4.2M', '(4%) Y/Y')}
      ${kpiCard(359, 1116, 311, 'ARPMUP', '$131', '+21% Y/Y')}
      <text x="424" y="1314" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">MUP = Monthly Unique Players</text>
      <text x="424" y="1352" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">ARPMUP = Average Revenue per MUP</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(192, 1116, 162, '月独立玩家', '420 万', '同比 (4%)')}
      ${kpiCard(359, 1116, 311, '每位玩家平均收入', '$131', '同比 +21%')}
      <text x="424" y="1314" text-anchor="middle" font-size="26" font-weight="400" fill="${NOTE}">月独立玩家</text>
      <text x="424" y="1352" text-anchor="middle" font-size="26" font-weight="400" fill="${NOTE}">每位月独立玩家平均收入</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'draftkings-q1-fy26',
    name: 'DraftKings · Q1 FY26',
    company: 'DraftKings',
    meta: {
      company: 'DraftKings',
      title: 'DraftKings Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Three months ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/draftkings-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2380,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: DARK_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
      allowRasterAnnotations: true,
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'draftkings-company-wordmark',
        href: 'data/assets/raster-annotations/draftkings/company-wordmark.png',
        x: 620, y: 220, width: 485, height: 261,
      },
      {
        key: 'draftkings-online-gaming-badge',
        href: 'data/assets/raster-annotations/draftkings/online-gaming-badge.png',
        x: 14, y: 370, width: 154, height: 154,
      },
      {
        key: 'draftkings-gaming-software-badge',
        href: 'data/assets/raster-annotations/draftkings/gaming-software-badge.png',
        x: 14, y: 531, width: 154, height: 154,
      },
    ],
    layout: {
      scale: 0.19,
      nodes: {
        online_gaming: { x: 386, y: 446, width: 73, height: 209 },
        gaming_software: { x: 386, y: 818, width: 73, height: 89 },
        other_revenue: { x: 386, y: 1041, width: 73, height: 18 },
        revenue: { x: 853, y: 611, width: 73, height: 317 },
        gross_profit: { x: 1320, y: 483, width: 73, height: 133 },
        cost_of_revenue: { x: 1320, y: 852, width: 73, height: 183 },
        operating_profit: { x: 1788, y: 417, width: 73, height: 3 },
        operating_expenses: { x: 1788, y: 613, width: 73, height: 132 },
        other_income: { x: 2095, y: 428, width: 73, height: 3 },
        net_profit: { x: 2254, y: 328, width: 73, height: 4 },
        sm: { x: 2254, y: 791, width: 73, height: 77 },
        ga: { x: 2254, y: 1021, width: 73, height: 32 },
        rnd: { x: 2254, y: 1195, width: 73, height: 23 },
      },
      labels: {
        online_gaming: {
          blocks: [
            { x: 423, top: 356, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 38, weight: 400 }, { text: '+24% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 273, top: 505, anchor: 'middle', lineGap: 8, lines: [
              { text: 'Online', size: 40, weight: 800 }, { text: 'Gaming', size: 40, weight: 800 },
            ] },
          ],
        },
        gaming_software: {
          blocks: [
            { x: 423, top: 730, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 38, weight: 400 }, { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 273, top: 818, anchor: 'middle', lineGap: 8, lines: [
              { text: 'Gaming', size: 40, weight: 800 }, { text: 'Software', size: 40, weight: 800 },
            ] },
          ],
        },
        other_revenue: {
          blocks: [
            { x: 423, top: 950, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 38, weight: 400 }, { text: '(13%) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 273, top: 1033, anchor: 'middle', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        revenue: { blocks: [{ x: 889, top: 470, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1356, top: 305, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '42% margin', size: 29, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1356, top: 1058, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 38, weight: 800 }, { text: 'revenue', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1824, top: 239, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '0% margin', size: 29, weight: 400, color: NOTE }, { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1824, top: 769, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
        ] }] },
        other_income: { blocks: [{ x: 2130, top: 451, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2470, top: 280, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '1% margin', size: 29, weight: 400, color: NOTE }, { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        sm: { blocks: [{ x: 2470, top: 777, anchor: 'middle', lineGap: 8, lines: [
          { text: 'S&M', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '24% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        ga: { blocks: [{ x: 2470, top: 977, anchor: 'middle', lineGap: 8, lines: [
          { text: 'G&A', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '10% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        rnd: { blocks: [{ x: 2470, top: 1176, anchor: 'middle', lineGap: 8, lines: [
          { text: 'R&D', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '7% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
      },
    },
    nonNodeMetrics: [
      { id: 'tax', representation: 'data-only' },
    ],

    nodes: [
      { id: 'online_gaming', col: 0, order: 0, type: 'source', label: ['Online', 'Gaming'], value: 1095, valueText: '$1,095M', color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gaming_software', col: 0, order: 1, type: 'source', label: ['Gaming', 'Software'], value: 461, color: GAMING_GREEN, labelColor: GAMING_GREEN, linkTint: GAMING_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 90, color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1646, valueText: '$1,646M', color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 697, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 949, valueText: '($949M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 691, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 15, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 21, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'S&M', value: 402, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 166, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 123, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'online_gaming', target: 'revenue', value: 1095, sourceWidth: 209, targetWidth: 209, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'gaming_software', target: 'revenue', value: 461, sourceWidth: 89, targetWidth: 89, sourceOrder: 0, targetOrder: 1, linkTint: GAMING_LINK },
      { source: 'other_revenue', target: 'revenue', value: 90, sourceWidth: 18, targetWidth: 19, sourceOrder: 0, targetOrder: 2, linkTint: DARK_LINK },
      { source: 'revenue', target: 'gross_profit', value: 697, sourceWidth: 133, targetWidth: 133, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 949, sourceWidth: 184, targetWidth: 183, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 6, sourceWidth: 3, targetWidth: 3, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 691, sourceWidth: 130, targetWidth: 132, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 6, sourceWidth: 3, targetWidth: 1, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'net_profit', value: 15, sourceWidth: 3, targetWidth: 3, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 402, sourceWidth: 77, targetWidth: 77, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 166, sourceWidth: 32, targetWidth: 32, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 123, sourceWidth: 23, targetWidth: 23, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'DraftKings · 2026 财年第一季度',
        meta: {
          title: 'DraftKings 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的三个月',
          titleTextLength: 1680,
        },
        nodes: {
          online_gaming: { label: '在线博彩', notes: ['同比 +24%'] },
          gaming_software: { label: '游戏软件', notes: ['同比 +9%'] },
          other_revenue: { label: '其他', notes: ['同比 (13%)'] },
          revenue: { label: '收入', notes: ['同比 +17%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 42%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 0%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 1%', '同比 +4 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 24%', '同比 +0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 +0 个百分点'] },
        },
        annotationsSvg: annotationsZh,
        layout: {
          labels: {
            online_gaming: { blocks: [
              { x: 423, top: 356, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +24%', size: 29, weight: 400, color: NOTE }] },
              { x: 273, top: 532, anchor: 'middle', lines: [{ text: '在线博彩', size: 36, weight: 800 }] },
            ] },
            gaming_software: { blocks: [
              { x: 423, top: 730, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +9%', size: 29, weight: 400, color: NOTE }] },
              { x: 273, top: 846, anchor: 'middle', lines: [{ text: '游戏软件', size: 36, weight: 800 }] },
            ] },
            other_revenue: { blocks: [
              { x: 423, top: 950, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 (13%)', size: 29, weight: 400, color: NOTE }] },
              { x: 273, top: 1033, anchor: 'middle', lines: [{ text: '其他', size: 40, weight: 800 }] },
            ] },
            revenue: { blocks: [{ x: 889, top: 470, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +17%', size: 29, weight: 400, color: NOTE }] }] },
            gross_profit: { blocks: [{ x: 1356, top: 305, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 42%', size: 29, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            cost_of_revenue: { blocks: [{ x: 1356, top: 1058, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 38, weight: 800 }, { text: '成本', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
            operating_profit: { blocks: [{ x: 1824, top: 239, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 0%', size: 29, weight: 400, color: NOTE }, { text: '同比 +4 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1824, top: 786, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
            other_income: { blocks: [{ x: 2130, top: 451, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
            net_profit: { blocks: [{ x: 2470, top: 280, anchor: 'middle', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 1%', size: 29, weight: 400, color: NOTE }, { text: '同比 +4 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            sm: { blocks: [{ x: 2470, top: 777, anchor: 'middle', lineGap: 8, lines: [{ text: '销售与市场', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 24%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            ga: { blocks: [{ x: 2470, top: 977, anchor: 'middle', lineGap: 8, lines: [{ text: '管理费用', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 10%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            rnd: { blocks: [{ x: 2470, top: 1176, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 7%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }] }] },
          },
        },
      },
    },
  });
})();
