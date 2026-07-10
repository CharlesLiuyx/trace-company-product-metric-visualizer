/* ====================================================================
 * DraftKings - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/draftkings-q4-fy25.png as a fixed
 * d3-sankey layout. The company wordmark and two segment badges are the
 * validated runtime raster annotations documented under
 * data/assets/icon-references/draftkings/.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const ORANGE = '#ff7800';
  const ORANGE_LINK = '#f4bd8c';
  const GAMING_GREEN = '#5dbb08';
  const GAMING_LINK = '#b0d687';
  const DARK = '#000000';
  const DARK_LINK = '#808080';
  const GREEN = '#29a329';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9ccf9b';
  const RED = '#d60000';
  const RED_LABEL = '#991200';
  const RED_LINK = '#df8384';
  const NOTE = '#666666';

  const kpiCard = (x, y, width, title, value, note) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="157" rx="32" fill="${ORANGE}"/>
      <text x="${x + width / 2}" y="${y + 50}" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="${y + 93}" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="${y + 134}" text-anchor="middle" font-size="25" font-weight="400" fill="#ffffff">${note}</text>
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(192, 1120, 162, 'MUPs', '4.8M', 'Flat Y/Y')}
      ${kpiCard(360, 1120, 310, 'ARPMUP', '$139', '+43% Y/Y')}
      <text x="424" y="1314" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">MUP = Monthly Unique Players</text>
      <text x="424" y="1352" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">ARPMUP = Average Revenue per MUP</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(192, 1120, 162, '月独立玩家', '480 万', '同比持平')}
      ${kpiCard(360, 1120, 310, '每位玩家平均收入', '$139', '同比 +43%')}
      <text x="424" y="1314" text-anchor="middle" font-size="26" font-weight="400" fill="${NOTE}">月独立玩家</text>
      <text x="424" y="1352" text-anchor="middle" font-size="26" font-weight="400" fill="${NOTE}">每位月独立玩家平均收入</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'draftkings-q4-fy25',
    name: 'DraftKings · Q4 FY25',
    company: 'DraftKings',
    meta: {
      company: 'DraftKings',
      title: 'DraftKings Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Three months ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/draftkings-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2380,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
        x: 14, y: 407, width: 154, height: 154,
      },
      {
        key: 'draftkings-gaming-software-badge',
        href: 'data/assets/raster-annotations/draftkings/gaming-software-badge.png',
        x: 14, y: 570, width: 154, height: 154,
      },
    ],
    layout: {
      scale: 0.169,
      nodes: {
        online_gaming: { x: 386, y: 457, width: 73, height: 229 },
        gaming_software: { x: 386, y: 850, width: 73, height: 85 },
        other_revenue: { x: 386, y: 1064, width: 73, height: 24 },
        revenue: { x: 855, y: 626, width: 72, height: 333 },
        gross_profit: { x: 1320, y: 520, width: 72, height: 155 },
        cost_of_revenue: { x: 1320, y: 862, width: 72, height: 182 },
        operating_profit: { x: 1785, y: 423, width: 73, height: 26 },
        operating_expenses: { x: 1785, y: 638, width: 73, height: 128 },
        net_profit: { x: 2254, y: 335, width: 73, height: 23 },
        tax: { x: 2254, y: 533, width: 73, height: 2 },
        other_expense: { x: 2254, y: 639, width: 73, height: 1 },
        sm: { x: 2254, y: 837, width: 73, height: 75 },
        ga: { x: 2254, y: 1058, width: 73, height: 31 },
        rnd: { x: 2254, y: 1246, width: 73, height: 22 },
      },
      labels: {
        online_gaming: {
          blocks: [
            {
              x: 423, top: 363, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+64% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 273, top: 522, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Online', size: 40, weight: 800 },
                { text: 'Gaming', size: 40, weight: 800 },
              ],
            },
          ],
        },
        gaming_software: {
          blocks: [
            {
              x: 423, top: 756, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 273, top: 844, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gaming', size: 40, weight: 800 },
                { text: 'Software', size: 40, weight: 800 },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 423, top: 970, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(3%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 273, top: 1054, anchor: 'middle',
              lines: [{ text: 'Other', size: 40, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 891, top: 481, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+43% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1356, top: 334, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '46% margin', size: 29, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1356, top: 1060, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1821, top: 237, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+18pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1821, top: 784, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2470, top: 280, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '7% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+17pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2420, top: 496, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        other_expense: {
          blocks: [
            {
              x: 2420, top: 602, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2470, top: 828, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '22% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2470, top: 1024, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '9% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(6pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2470, top: 1218, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '7% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },
    nodes: [
      { id: 'online_gaming', col: 0, order: 0, type: 'source', label: ['Online', 'Gaming'], value: 1351, valueText: '$1,351M', color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gaming_software', col: 0, order: 1, type: 'source', label: ['Gaming', 'Software'], value: 500, color: GAMING_GREEN, labelColor: GAMING_GREEN, linkTint: GAMING_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 138, color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1989, valueText: '$1,989M', color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 915, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1075, valueText: '($1,075M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 152, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 763, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 136, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 10, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 4, order: 2, type: 'cost', label: 'Other', value: 5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 3, type: 'cost', label: 'S&M', value: 443, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 187, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 5, type: 'cost', label: 'R&D', value: 134, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'online_gaming', target: 'revenue', value: 1351, sourceWidth: 229, targetWidth: 228, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'gaming_software', target: 'revenue', value: 500, sourceWidth: 85, targetWidth: 84, sourceOrder: 0, targetOrder: 1, linkTint: GAMING_LINK },
      { source: 'other_revenue', target: 'revenue', value: 138, sourceWidth: 24, targetWidth: 21, sourceOrder: 0, targetOrder: 2, linkTint: DARK_LINK },
      { source: 'revenue', target: 'gross_profit', value: 915, sourceWidth: 155, targetWidth: 155, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1075, sourceWidth: 178, targetWidth: 182, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 152, sourceWidth: 26, targetWidth: 26, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 763, sourceWidth: 128, targetWidth: 128, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 136, sourceWidth: 23, targetWidth: 23, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 10, sourceWidth: 2, targetWidth: 2, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 5, sourceWidth: 1, targetWidth: 1, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 443, sourceWidth: 75, targetWidth: 75, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 187, sourceWidth: 31, targetWidth: 31, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 134, sourceWidth: 22, targetWidth: 22, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'DraftKings · 2025 财年第四季度',
        meta: {
          title: 'DraftKings 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的三个月',
          titleTextLength: 1680,
        },
        nodes: {
          online_gaming: { label: '在线博彩', notes: ['同比 +64%'] },
          gaming_software: { label: '游戏软件', notes: ['同比 +17%'] },
          other_revenue: { label: '其他', notes: ['同比 (3%)'] },
          revenue: { label: '收入', notes: ['同比 +43%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 46%', '同比 +6 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['占收入 8%', '同比 +18 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['占收入 7%', '同比 +17 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          sm: { label: '销售与市场', notes: ['占收入 22%', '同比 (4 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 9%', '同比 (6 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 (1 个百分点)'] },
        },
        annotationsSvg: annotationsZh,
        layout: {
          labels: {
            online_gaming: { blocks: [
              { x: 423, top: 363, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 }, { text: '同比 +64%', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 273, top: 549, anchor: 'middle', lines: [{ text: '在线博彩', size: 36, weight: 800 }] },
            ] },
            gaming_software: { blocks: [
              { x: 423, top: 756, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 }, { text: '同比 +17%', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 273, top: 870, anchor: 'middle', lines: [{ text: '游戏软件', size: 36, weight: 800 }] },
            ] },
            other_revenue: { blocks: [
              { x: 423, top: 970, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 }, { text: '同比 (3%)', size: 29, weight: 400, color: NOTE },
              ] },
              { x: 273, top: 1054, anchor: 'middle', lines: [{ text: '其他', size: 40, weight: 800 }] },
            ] },
            revenue: { blocks: [{ x: 891, top: 481, anchor: 'middle', lineGap: 8, lines: [
              { text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +43%', size: 29, weight: 400, color: NOTE },
            ] }] },
            gross_profit: { blocks: [{ x: 1356, top: 334, anchor: 'middle', lineGap: 8, lines: [
              { text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 46%', size: 29, weight: 400, color: NOTE }, { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE },
            ] }] },
            cost_of_revenue: { blocks: [{ x: 1356, top: 1060, anchor: 'middle', lineGap: 8, lines: [
              { text: '收入', size: 38, weight: 800 }, { text: '成本', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 },
            ] }] },
            operating_profit: { blocks: [{ x: 1821, top: 237, anchor: 'middle', lineGap: 8, lines: [
              { text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '占收入 8%', size: 29, weight: 400, color: NOTE }, { text: '同比 +18 个百分点', size: 29, weight: 400, color: NOTE },
            ] }] },
            operating_expenses: { blocks: [{ x: 1821, top: 801, anchor: 'middle', lineGap: 8, lines: [
              { text: '运营费用', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
            ] }] },
            net_profit: { blocks: [{ x: 2470, top: 280, anchor: 'middle', lineGap: 8, lines: [
              { text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '占收入 7%', size: 29, weight: 400, color: NOTE }, { text: '同比 +17 个百分点', size: 29, weight: 400, color: NOTE },
            ] }] },
            tax: { blocks: [{ x: 2420, top: 496, anchor: 'middle', lineGap: 8, lines: [
              { text: '税费', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 },
            ] }] },
            other_expense: { blocks: [{ x: 2420, top: 602, anchor: 'middle', lineGap: 8, lines: [
              { text: '其他', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 },
            ] }] },
            sm: { blocks: [{ x: 2470, top: 828, anchor: 'middle', lineGap: 8, lines: [
              { text: '销售与市场', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 22%', size: 29, weight: 400, color: NOTE }, { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
            ] }] },
            ga: { blocks: [{ x: 2470, top: 1024, anchor: 'middle', lineGap: 8, lines: [
              { text: '管理费用', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 9%', size: 29, weight: 400, color: NOTE }, { text: '同比 (6 个百分点)', size: 29, weight: 400, color: NOTE },
            ] }] },
            rnd: { blocks: [{ x: 2470, top: 1218, anchor: 'middle', lineGap: 8, lines: [
              { text: '研发', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 7%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
            ] }] },
          },
        },
      },
    },
  });
})();
