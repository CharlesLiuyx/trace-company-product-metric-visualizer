/* GitLab Q1 FY27 income-statement Sankey, measured from the source PNG. */
(function () {
  const TITLE = '#16547d';
  const ORANGE = '#ffa51f';
  const ORANGE_LINK = '#f7d095';
  const GREEN = '#29a42a';
  const GREEN_LABEL = '#008d4a';
  const GREEN_LINK = '#9bcc99';
  const RED = '#d40000';
  const RED_LABEL = '#951300';
  const RED_LINK = '#df8586';
  const NOTE = '#686868';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2438;

  const gitlabLogo = `
    <path d="M62 0 100 106 62 151 24 106Z" fill="#fc6d26"/>
    <path d="M62 151 0 106 24 106Z" fill="#e24329"/>
    <path d="M62 151 124 106 100 106Z" fill="#fca326"/>
    <path d="M24 106h76L62 151Z" fill="#fca326"/>
    <text x="155" y="122" font-family="Arial,sans-serif" font-size="150" font-weight="700" letter-spacing="-7" fill="#171322">GitLab</text>`;

  const metricCard = (x, width, lines) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="${x}" y="1130" width="${width}" height="157" rx="32" fill="${ORANGE}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${1190 + index * 40}" text-anchor="middle" font-size="${index === 0 ? 30 : 29}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    ${metricCard(27, 165, ['DBNR', '117%', '(1pp) Q/Q'])}
    ${metricCard(202, 547, ['Customers &gt; $5K 10,831 (+7% Y/Y)', 'Customers &gt; $100K 1,519 (+18% Y/Y)'])}
    ${metricCard(762, 166, ['cRPO', '$724M', '+24% Y/Y'])}
    <g font-family="Noto Sans,Arial,sans-serif" font-weight="500" fill="${NOTE}">
      <text x="135" y="1322" font-size="28">cRPO = Current Remaining Performance Obligations</text>
      <text x="265" y="1362" font-size="28">DBNR = Dollar Based Net Retention</text>
    </g>`;
  const annotationsZh = `
    ${metricCard(27, 165, ['DBNR', '117%', '环比 -1pp'])}
    ${metricCard(202, 547, ['$5K+ 客户 10,831（同比 +7%）', '$100K+ 客户 1,519（同比 +18%）'])}
    ${metricCard(762, 166, ['cRPO', '$724M', '同比 +24%'])}
    <g font-family="Noto Sans,Arial,sans-serif" font-weight="500" fill="${NOTE}">
      <text x="92" y="1322" font-size="27">cRPO = 当期剩余履约义务</text>
      <text x="288" y="1362" font-size="27">DBNR = 基于美元的净留存率</text>
    </g>`;

  const zhLayoutLabels = {
    subscription: { blocks: [
      { x: 397, top: 428, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +23%', size: 29, weight: 400, color: NOTE }] },
      { x: 338, top: 675, anchor: 'end', lines: [{ text: '订阅', size: 40, weight: 800, color: ORANGE }] },
    ] },
    license: { blocks: [
      { x: 397, top: 897, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +24%', size: 29, weight: 400, color: NOTE }] },
      { x: 334, top: 1060, anchor: 'end', lines: [{ text: '许可', size: 40, weight: 800, color: ORANGE }] },
    ] },
    revenue: { blocks: [{ x: 864, top: 496, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800, color: ORANGE }, { text: '$value', size: 40, weight: 400, color: ORANGE }, { text: '同比 +23%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1331, top: 343, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 86%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1331, top: 1075, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 37, weight: 800, color: RED_LABEL }, { text: '成本', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, weight: 400, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1629, top: 1080, anchor: 'middle', lineGap: 9, lines: [{ text: '营业亏损', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '利润率 (6%)', size: 29, weight: 400, color: NOTE }, { text: '同比 +10 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1812, top: 483, anchor: 'middle', lineGap: 9, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 477, anchor: 'middle', lineGap: 9, lines: [{ text: '销售与市场', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }, { text: '占收入 45%', size: 29, weight: 400, color: NOTE }, { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 798, anchor: 'middle', lineGap: 9, lines: [{ text: '研发', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }, { text: '占收入 27%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1090, anchor: 'middle', lineGap: 9, lines: [{ text: '管理费用', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }, { text: '占收入 20%', size: 29, weight: 400, color: NOTE }, { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'gitlab-q1-fy27', name: 'GitLab · Q1 FY27', company: 'GitLab',
    meta: {
      company: 'GitLab', title: 'GitLab Q1 FY27 Income Statement', period: 'Q1 FY27', periodNote: 'Ending Apr. 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/gitlab-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2160,
      periodX: 2415, periodY: 302, periodNoteY: 347,
      logoWidth: 800, logoHeight: 175, logoY: 255, logoViewBox: '0 0 800 175', logoSvg: gitlabLogo,
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
        subscription: { x: 361, y: 518, width: 72, height: 283 }, license: { x: 361, y: 986, width: 72, height: 30 },
        revenue: { x: 828, y: 634, width: 72, height: 312 }, gross_profit: { x: 1295, y: 519, width: 72, height: 268 }, cost_of_revenue: { x: 1295, y: 976, width: 72, height: 46 },
        operating_loss: { x: 1593, y: 992, width: 73, height: 20 }, operating_expenses: { x: 1762, y: 637, width: 73, height: 287 },
        sm: { x: 2230, y: 444, width: 72, height: 142 }, rnd: { x: 2230, y: 779, width: 72, height: 87 }, ga: { x: 2230, y: 1053, width: 72, height: 62 },
      },
      labels: {
        subscription: { blocks: [{ x: 397, top: 428, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 338, top: 675, anchor: 'end', lines: [{ text: 'Subscription', size: 40, weight: 800, color: ORANGE }] }] },
        license: { blocks: [{ x: 397, top: 897, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+24% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 334, top: 1060, anchor: 'end', lines: [{ text: 'License', size: 40, weight: 800, color: ORANGE }] }] },
        revenue: { blocks: [{ x: 864, top: 496, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800, color: ORANGE }, { text: '$value', size: 40, weight: 400, color: ORANGE }, { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1331, top: 343, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '86% margin', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1331, top: 1075, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 37, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, weight: 400, color: RED_LABEL }] }] },
        operating_loss: { blocks: [{ x: 1629, top: 1080, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'loss', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '(6%) margin', size: 29, weight: 400, color: NOTE }, { text: '+10pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1812, top: 483, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 477, anchor: 'middle', lineGap: 9, lines: [{ text: 'S&M', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }, { text: '45% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 798, anchor: 'middle', lineGap: 9, lines: [{ text: 'R&D', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }, { text: '27% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1090, anchor: 'middle', lineGap: 9, lines: [{ text: 'G&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }, { text: '20% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 239, notes: ['+23% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'license', col: 0, order: 1, type: 'source', label: 'License', value: 25, notes: ['+24% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 264, notes: ['+23% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 227, notes: ['86% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 37, valueText: '($37M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -16, notes: ['(6%) margin', '+10pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 242, valueText: '($242M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 119, valueText: '($119M)', notes: ['45% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 71, valueText: '($71M)', notes: ['27% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 52, valueText: '($52M)', notes: ['20% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 239, sourceWidth: 283, targetWidth: 281, y0: 659.5, y1: 774.5, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'license', target: 'revenue', value: 25, sourceWidth: 30, targetWidth: 31, y0: 1001, y1: 930.5, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 227, sourceWidth: 268, targetWidth: 268, y0: 768, y1: 653, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 37, sourceWidth: 44, targetWidth: 46, y0: 924, y1: 999, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 227, sourceWidth: 268, targetWidth: 287, y0: 653, y1: 780.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 16, sourceWidth: 20, targetWidth: 1, y0: 1002, y1: 923.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 119, sourceWidth: 142, targetWidth: 142, y0: 708, y1: 515, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 71, sourceWidth: 87, targetWidth: 87, y0: 822.5, y1: 822.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 52, sourceWidth: 58, targetWidth: 62, y0: 895, y1: 1084, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['DBNR', 'cRPO'],
      zh: {
        name: 'GitLab · 2027 财年第一季度',
        meta: { title: 'GitLab 2027 财年第一季度利润表', period: '2027 财年第一季度', periodNote: '截至 2026 年 4 月', titleTextLength: 1940 },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +23%'] }, license: { label: '许可', notes: ['同比 +24%'] }, revenue: { label: '收入', notes: ['同比 +23%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 86%', '同比 (3 个百分点)'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: '营业亏损', notes: ['利润率 (6%)', '同比 +10 个百分点'] }, operating_expenses: { label: ['营业', '费用'] },
          sm: { label: '销售与市场', notes: ['占收入 45%', '同比 (5 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 27%', '同比 (3 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 20%', '同比 (4 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
