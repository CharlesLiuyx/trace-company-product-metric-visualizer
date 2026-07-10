/* ====================================================================
 * Palo Alto Networks - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/palo-alto-q2-fy26.png with measured
 * fixed SVG geometry. Financial values live in data/income-statements/.
 * ==================================================================== */
(function () {
  const TITLE = '#155278';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const BG = '#f2f2f2';
  const ORANGE = '#ff3a00';
  const RIGHT_LABEL_X = 2402;

  const paloAltoLogo = `
    <g>
      <path d="M0 37 L36 0 L73 37 L37 73 Z" fill="${ORANGE}"/>
      <path d="M35 37 L72 0 L116 44 L72 107 L35 70 L72 33 Z" fill="${ORANGE}"/>
      <path d="M76 70 L113 33 L149 70 L113 107 Z" fill="${ORANGE}"/>
      <text x="174" y="72" font-family="Montserrat,Arial,sans-serif" font-size="93" font-weight="800" fill="#000000" textLength="466" lengthAdjust="spacingAndGlyphs">paloalto</text>
      <text x="390" y="104" font-family="Montserrat,Arial,sans-serif" font-size="25" font-weight="800" letter-spacing="5" fill="#000000">NETWORKS</text>
      <text x="644" y="36" font-family="Montserrat,Arial,sans-serif" font-size="24" font-weight="400" fill="#000000">®</text>
    </g>`;

  const card = (x, width, label, value, note) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="${x}" y="1098" width="${width}" height="156" rx="32" fill="#1d1e22"/>
      <text x="${x + width / 2}" y="1149" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${label}</text>
      <text x="${x + width / 2}" y="1190" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1230" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotationsEn = `
    ${card(238, 191, 'RPO', '$16.0B', '+23% Y/Y')}
    ${card(452, 237, 'NGS ARR', '$6.3B', '+33% Y/Y')}
    <g font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">
      <text x="195" y="1302">RPO = Remaining Performance Obligation</text>
      <text x="67" y="1342">NGS ARR = Next-Gen Security Annualized Recurring Revenue</text>
    </g>`;

  const annotationsZh = `
    ${card(238, 191, 'RPO', '$16.0B', '同比 +23%')}
    ${card(452, 237, 'NGS ARR', '$6.3B', '同比 +33%')}
    <g font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">
      <text x="195" y="1302">RPO = 剩余履约义务</text>
      <text x="67" y="1342">NGS ARR = 新一代安全年度经常性收入</text>
    </g>`;

  const zhLayoutLabels = {
    product: { blocks: [
      { x: 390.5, top: 427, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +22%', size: 29, weight: 400, color: NOTE }] },
      { x: 287, top: 542, anchor: 'end', lines: [{ text: '产品', size: 40, weight: 800 }] },
      { x: 332, top: 592, anchor: 'end', lines: [{ text: '毛利率 78%', size: 29, weight: 400, color: NOTE }] },
    ] },
    subscription_and_support: { blocks: [
      { x: 390.5, top: 681, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +13%', size: 29, weight: 400, color: NOTE }] },
      { x: 330, top: 832, anchor: 'end', lineGap: 10, lines: [{ text: '订阅和', size: 40, weight: 800 }, { text: '支持', size: 40, weight: 800 }] },
      { x: 330, top: 991, anchor: 'end', lines: [{ text: '毛利率 73%', size: 29, weight: 400, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 857, top: 466, anchor: 'middle', lineGap: 12, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +15%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1324.5, top: 334, anchor: 'middle', lineGap: 12, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 74%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1324.5, top: 1080, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 34, weight: 800 }, { text: '成本', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1792, top: 222, anchor: 'middle', lineGap: 12, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 15%', size: 29, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1792, top: 892, anchor: 'middle', lineGap: 12, lines: [{ text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }] }] },
    other: { blocks: [{ x: 2137, top: 425, anchor: 'middle', lineGap: 10, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2360, top: 284, anchor: 'start', lineGap: 12, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 17%', size: 29, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 543, anchor: 'middle', lineGap: 10, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X + 14, top: 694, anchor: 'middle', lineGap: 10, lines: [{ text: '销售与市场', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 32%', size: 28, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X + 14, top: 925, anchor: 'middle', lineGap: 10, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 20%', size: 28, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X + 14, top: 1125, anchor: 'middle', lineGap: 10, lines: [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 7%', size: 28, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palo-alto-q2-fy26',
    name: 'Palo Alto Networks · Q2 FY26',
    company: 'Palo Alto Networks',
    meta: {
      company: 'Palo Alto Networks',
      title: 'Palo Alto Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/palo-alto-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 122, titleWeight: 800, titleTextLength: 2290,
      periodX: 942, periodY: 1174, periodNoteY: 1217,
      logoWidth: 780, logoHeight: 115, logoY: 254, logoViewBox: '0 0 780 115', logoSvg: paloAltoLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        product: { x: 355, y: 531, width: 71, height: 70 },
        subscription_and_support: { x: 355, y: 783, width: 71, height: 291 },
        revenue: { x: 822, y: 616, width: 70, height: 364 },
        gross_profit: { x: 1289, y: 527, width: 71, height: 268 },
        cost_of_revenue: { x: 1289, y: 973, width: 71, height: 94 },
        operating_profit: { x: 1757, y: 414, width: 70, height: 53 },
        operating_expenses: { x: 1757, y: 668, width: 70, height: 211 },
        other: { x: 2102, y: 396, width: 70, height: 19 },
        net_profit: { x: 2223, y: 312, width: 71, height: 60 },
        tax: { x: 2223, y: 572, width: 71, height: 15 },
        sm: { x: 2223, y: 696, width: 71, height: 114 },
        rnd: { x: 2223, y: 939, width: 71, height: 70 },
        ga: { x: 2223, y: 1153, width: 71, height: 24 },
      },
      labels: {
        product: { blocks: [
          { x: 390.5, top: 427, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 287, top: 542, anchor: 'end', lines: [{ text: 'Product', size: 40, weight: 800 }] },
          { x: 332, top: 592, anchor: 'end', lines: [{ text: '78% gross margin', size: 29, weight: 400, color: NOTE }] },
        ] },
        subscription_and_support: { blocks: [
          { x: 390.5, top: 681, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 330, top: 832, anchor: 'end', lineGap: 10, lines: [{ text: 'Subscription', size: 40, weight: 800 }, { text: 'and', size: 40, weight: 800 }, { text: 'support', size: 40, weight: 800 }] },
          { x: 330, top: 991, anchor: 'end', lines: [{ text: '73% gross margin', size: 29, weight: 400, color: NOTE }] },
        ] },
        revenue: { blocks: [{ x: 857, top: 466, anchor: 'middle', lineGap: 12, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1324.5, top: 334, anchor: 'middle', lineGap: 12, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '74% margin', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1324.5, top: 1080, anchor: 'middle', lineGap: 10, lines: [{ text: 'Cost of', size: 34, weight: 800 }, { text: 'revenue', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1792, top: 222, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '15% margin', size: 29, weight: 400, color: NOTE }, { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1792, top: 892, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }] }] },
        other: { blocks: [{ x: 2137, top: 425, anchor: 'middle', lineGap: 10, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2360, top: 284, anchor: 'start', lineGap: 12, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '17% margin', size: 29, weight: 400, color: NOTE }, { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        tax: { blocks: [{ x: RIGHT_LABEL_X, top: 543, anchor: 'middle', lineGap: 10, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 694, anchor: 'middle', lineGap: 10, lines: [{ text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '32% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 925, anchor: 'middle', lineGap: 10, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '20% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1125, anchor: 'middle', lineGap: 10, lines: [{ text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '7% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 514, notes: ['+22% Y/Y', '78% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'subscription_and_support', col: 0, order: 1, type: 'source', label: ['Subscription', 'and', 'support'], value: 2080, valueText: '$2,080M', notes: ['+13% Y/Y', '73% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2594, valueText: '$2,594M', notes: ['+15% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1909, valueText: '$1,909M', notes: ['74% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 685, valueText: '($685M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 397, notes: ['15% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1512, valueText: '($1,512M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 152, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 432, notes: ['17% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 117, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 823, notes: ['32% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 511, notes: ['20% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 178, notes: ['7% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 514, sourceWidth: 70, targetWidth: 72, y0: 566, y1: 652, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'subscription_and_support', target: 'revenue', value: 2080, sourceWidth: 291, targetWidth: 293, y0: 928.5, y1: 833.5, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1909, sourceWidth: 270, targetWidth: 268, y0: 751, y1: 661, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 685, sourceWidth: 94, targetWidth: 94, y0: 933, y1: 1020, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 397, sourceWidth: 57, targetWidth: 53, y0: 555.5, y1: 440.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1512, sourceWidth: 211, targetWidth: 211, y0: 689.5, y1: 773.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 280, sourceWidth: 37, targetWidth: 40, y0: 432.5, y1: 332, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 117, sourceWidth: 15, targetWidth: 15, y0: 459.5, y1: 579.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 152, sourceWidth: 19, targetWidth: 20, y0: 405.5, y1: 362, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 823, sourceWidth: 115, targetWidth: 114, y0: 725.5, y1: 753, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 511, sourceWidth: 72, targetWidth: 70, y0: 819, y1: 974, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 178, sourceWidth: 24, targetWidth: 24, y0: 867, y1: 1165, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['RPO', 'NGS ARR'],
      zh: {
        name: '帕洛阿尔托网络 · 2026 财年第二季度',
        meta: { title: '帕洛阿尔托网络 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 1 月', titleTextLength: 1940 },
        annotationsSvg: annotationsZh,
        nodes: {
          product: { label: '产品', notes: ['同比 +22%', '毛利率 78%'] }, subscription_and_support: { label: ['订阅和', '支持'], notes: ['同比 +13%', '毛利率 73%'] },
          revenue: { label: '收入', notes: ['同比 +15%'] }, gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +5 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] }, other: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 17%', '同比 +5 个百分点'] }, tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 32%', '同比 (2 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 20%', '同比 (3 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 7%', '同比 +0 个百分点'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
