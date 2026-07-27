/* GitLab Q4 FY26 income-statement Sankey, measured from the source PNG. */
(function () {
  const TITLE = '#155077';
  const ORANGE = '#fca326';
  const ORANGE_LINK = '#f6ce96';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2419;

  const gitlabLogo = `
    <path d="M25 0 48 87 0 97Z" fill="#e24329"/>
    <path d="M135 0 112 87 160 97Z" fill="#e24329"/>
    <path d="M0 97 48 87 80 158Z" fill="#fc6d26"/>
    <path d="M160 97 112 87 80 158Z" fill="#fc6d26"/>
    <path d="M48 87 112 87 80 158Z" fill="#fca326"/>
    <path d="M25 0 48 87 80 87Z" fill="#fc6d26"/>
    <path d="M135 0 112 87 80 87Z" fill="#fc6d26"/>
    <text x="195" y="143" font-family="Arial,sans-serif" font-size="170" font-weight="700" letter-spacing="-6" fill="#171322">GitLab</text>`;

  const metricCard = (x, width, lines, firstY = 1160) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="${x}" y="1104" width="${width}" height="165" rx="32" fill="${ORANGE}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${firstY + index * 41}" text-anchor="middle" font-size="${index === 0 ? 30 : 29}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    ${metricCard(27, 166, ['DBNR', '118%', '(1pp) Q/Q'])}
    ${metricCard(201, 559, ['Customers &gt; $5K 10,682 (+8% Y/Y)', 'Customers &gt; $100K 1,456 (+18% Y/Y)'], 1176)}
    ${metricCard(769, 164, ['cRPO', '$719M', '+24% Y/Y'])}
    <g font-family="Noto Sans,Arial,sans-serif" font-weight="500" fill="${NOTE}">
      <text x="135" y="1309" font-size="28">cRPO = Current Remaining Performance Obligations</text>
      <text x="248" y="1341" font-size="28">DBNR = Dollar Based Net Retention</text>
    </g>`;
  const annotationsZh = `
    ${metricCard(27, 166, ['DBNR', '118%', '环比 -1pp'])}
    ${metricCard(201, 559, ['$5K+ 客户 10,682（同比 +8%）', '$100K+ 客户 1,456（同比 +18%）'], 1176)}
    ${metricCard(769, 164, ['cRPO', '$719M', '同比 +24%'])}
    <g font-family="Noto Sans,Arial,sans-serif" font-weight="500" fill="${NOTE}">
      <text x="92" y="1309" font-size="27">cRPO = 当期剩余履约义务</text>
      <text x="288" y="1341" font-size="27">DBNR = 基于美元的净留存率</text>
    </g>`;

  const zhLayoutLabels = {
    subscription: { blocks: [
      { x: 397, top: 381, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +26%', size: 29, weight: 400, color: NOTE }] },
      { x: 338, top: 632, anchor: 'end', lines: [{ text: '订阅', size: 40, weight: 800, color: ORANGE }] },
    ] },
    license: { blocks: [
      { x: 397, top: 926, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +1%', size: 29, weight: 400, color: NOTE }] },
      { x: 285, top: 1023, anchor: 'end', lines: [{ text: '许可', size: 40, weight: 800, color: ORANGE }] },
    ] },
    revenue: { blocks: [{ x: 864, top: 444, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800, color: ORANGE }, { text: '$value', size: 40, weight: 400, color: ORANGE }, { text: '同比 +23%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1338, top: 291, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 87%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1333, top: 1065, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 37, weight: 800, color: RED_LABEL }, { text: '成本', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, weight: 400, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1581, top: 1045, anchor: 'middle', lineGap: 9, lines: [{ text: '营业亏损', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '利润率 (2%)', size: 29, weight: 400, color: NOTE }, { text: '同比 +7 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1799, top: 431, anchor: 'middle', lineGap: 9, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 407, anchor: 'middle', lineGap: 9, lines: [{ text: '销售与市场', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }, { text: '占收入 43%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 762, anchor: 'middle', lineGap: 9, lines: [{ text: '研发', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }, { text: '占收入 26%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1057, anchor: 'middle', lineGap: 9, lines: [{ text: '管理费用', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }, { text: '占收入 19%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'gitlab-q4-fy26', name: 'GitLab · Q4 FY26', company: 'GitLab',
    meta: {
      company: 'GitLab', title: 'GitLab Q4 FY26 Income Statement', period: 'Q4 FY26', periodNote: 'Ending Jan. 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/gitlab-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2140,
      periodX: 2415, periodY: 290, periodNoteY: 331,
      logoWidth: 820, logoHeight: 160, logoY: 243, logoViewBox: '0 0 820 160', logoSvg: gitlabLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: ORANGE, label: ORANGE }, hub: { node: ORANGE, label: ORANGE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: ORANGE_LINK, hub: GREEN_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        subscription: { x: 361, y: 483, width: 72, height: 340 }, license: { x: 361, y: 1032, width: 72, height: 32 },
        revenue: { x: 828, y: 587, width: 72, height: 374 }, gross_profit: { x: 1295, y: 472, width: 72, height: 324 }, cost_of_revenue: { x: 1297, y: 995, width: 73, height: 49 },
        operating_loss: { x: 1545, y: 1005, width: 73, height: 20 }, operating_expenses: { x: 1763, y: 586, width: 72, height: 342 },
        sm: { x: 2229, y: 393, width: 72, height: 161 }, rnd: { x: 2229, y: 746, width: 72, height: 105 }, ga: { x: 2229, y: 1045, width: 72, height: 78 },
      },
      labels: {
        subscription: { blocks: [{ x: 397, top: 381, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+26% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 338, top: 632, anchor: 'end', lines: [{ text: 'Subscription', size: 40, weight: 800, color: ORANGE }] }] },
        license: { blocks: [{ x: 397, top: 926, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 285, top: 1023, anchor: 'end', lines: [{ text: 'License', size: 40, weight: 800, color: ORANGE }] }] },
        revenue: { blocks: [{ x: 864, top: 444, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800, color: ORANGE }, { text: '$value', size: 40, weight: 400, color: ORANGE }, { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1338, top: 291, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '87% margin', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1333, top: 1065, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 37, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, weight: 400, color: RED_LABEL }] }] },
        operating_loss: { blocks: [{ x: 1581, top: 1045, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'loss', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '(2%) margin', size: 29, weight: 400, color: NOTE }, { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1799, top: 431, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
        sm: { blocks: [{ x: 2419, top: 407, anchor: 'middle', lineGap: 9, lines: [{ text: 'S&M', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }, { text: '43% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        rnd: { blocks: [{ x: 2419, top: 762, anchor: 'middle', lineGap: 9, lines: [{ text: 'R&D', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }, { text: '26% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        ga: { blocks: [{ x: 2423, top: 1057, anchor: 'middle', lineGap: 9, lines: [{ text: 'G&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }, { text: '19% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 234, valueText: '$234M', notes: ['+26% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'license', col: 0, order: 1, type: 'source', label: 'License', value: 26, valueText: '$26M', notes: ['+1% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 260, valueText: '$260M', notes: ['+23% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 225, valueText: '$225M', notes: ['87% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 35, valueText: '($35M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -5, valueText: '($5M)', notes: ['(2%) margin', '+7pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 231, valueText: '($231M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 113, valueText: '($113M)', notes: ['43% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 69, valueText: '($69M)', notes: ['26% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 49, valueText: '($49M)', notes: ['19% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 234, sourceWidth: 340, targetWidth: 337, y0: 653, y1: 755.5, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'license', target: 'revenue', value: 26, sourceWidth: 32, targetWidth: 37, y0: 1048, y1: 942.5, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 225, sourceWidth: 324, targetWidth: 324, y0: 749, y1: 634, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 35, sourceWidth: 50, targetWidth: 49, y0: 936, y1: 1019.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 225, sourceWidth: 324, targetWidth: 334, y0: 634, y1: 753, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 5, sourceWidth: 20, targetWidth: 8, y0: 1015, y1: 924, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 113, sourceWidth: 161, targetWidth: 161, y0: 666.5, y1: 473.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 69, sourceWidth: 103, targetWidth: 105, y0: 798.5, y1: 798.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 49, sourceWidth: 78, targetWidth: 78, y0: 889, y1: 1084, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['DBNR', 'cRPO'],
      zh: {
        name: 'GitLab · 2026 财年第四季度',
        meta: { title: 'GitLab 2026 财年第四季度利润表', period: '2026 财年第四季度', periodNote: '截至 2026 年 1 月', titleTextLength: 1940 },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +26%'] }, license: { label: '许可', notes: ['同比 +1%'] }, revenue: { label: '收入', notes: ['同比 +23%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 87%', '同比 (3 个百分点)'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +7 个百分点'] }, operating_expenses: { label: ['营业', '费用'] },
          sm: { label: '销售与市场', notes: ['占收入 43%', '同比 (3 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 26%', '同比 (3 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 19%', '同比 (3 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
