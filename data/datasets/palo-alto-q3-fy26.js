/* ====================================================================
 * Palo Alto Networks - Q3 FY26 income statement ($M)
 * Reconstructed from input/processed/palo-alto-q3-fy26.png with measured
 * fixed SVG geometry. Financial values live in data/income-statements/.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
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
      <rect x="${x}" y="1098" width="${width}" height="156" rx="32" fill="#18191d"/>
      <text x="${x + width / 2}" y="1149" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${label}</text>
      <text x="${x + width / 2}" y="1190" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1230" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotationsEn = `
    ${card(238, 191, 'RPO', '$18.4B', '+36% Y/Y')}
    ${card(452, 237, 'NGS ARR', '$8.1B', '+60% Y/Y')}
    <g font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">
      <text x="195" y="1302">RPO = Remaining Performance Obligation</text>
      <text x="67" y="1342">NGS ARR = Next-Gen Security Annualized Recurring Revenue</text>
    </g>`;

  const annotationsZh = `
    ${card(238, 191, 'RPO', '$18.4B', '同比 +36%')}
    ${card(452, 237, 'NGS ARR', '$8.1B', '同比 +60%')}
    <g font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">
      <text x="195" y="1302">RPO = 剩余履约义务</text>
      <text x="67" y="1342">NGS ARR = 新一代安全年度经常性收入</text>
    </g>`;

  const zhLayoutLabels = {
    product: { blocks: [
      { x: 390.5, top: 405, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +31%', size: 29, weight: 400, color: NOTE }] },
      { x: 287, top: 542, anchor: 'end', lines: [{ text: '产品', size: 40, weight: 800 }] },
      { x: 332, top: 592, anchor: 'end', lines: [{ text: '毛利率 72%', size: 29, weight: 400, color: NOTE }] },
    ] },
    subscription_and_support: { blocks: [
      { x: 390.5, top: 681, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +31%', size: 29, weight: 400, color: NOTE }] },
      { x: 330, top: 832, anchor: 'end', lineGap: 10, lines: [{ text: '订阅和', size: 40, weight: 800 }, { text: '支持', size: 40, weight: 800 }] },
      { x: 330, top: 991, anchor: 'end', lines: [{ text: '毛利率 66%', size: 29, weight: 400, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 857, top: 466, anchor: 'middle', lineGap: 12, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +31%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1324.5, top: 306, anchor: 'middle', lineGap: 12, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 68%', size: 29, weight: 400, color: NOTE }, { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1324.5, top: 1080, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 34, weight: 800 }, { text: '成本', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    operating_loss: { blocks: [{ x: 1622.5, top: 992, anchor: 'middle', lineGap: 10, lines: [{ text: '营业亏损', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 (6%)', size: 29, weight: 400, color: NOTE }, { text: '同比 (16 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1792, top: 473, anchor: 'middle', lineGap: 12, lines: [{ text: '运营', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 463, anchor: 'middle', lineGap: 10, lines: [{ text: '销售与市场', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 39%', size: 28, weight: 400, color: NOTE }, { text: '同比 +4 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 757, anchor: 'middle', lineGap: 10, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 24%', size: 28, weight: 400, color: NOTE }, { text: '同比 +3 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1025, anchor: 'middle', lineGap: 10, lines: [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 11%', size: 28, weight: 400, color: NOTE }, { text: '同比 +3 个百分点', size: 28, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palo-alto-q3-fy26',
    name: 'Palo Alto Networks · Q3 FY26',
    company: 'Palo Alto Networks',
    meta: {
      company: 'Palo Alto Networks',
      title: 'Palo Alto Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/palo-alto-q3-fy26.png', width: 2667, height: 1500 },
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
        product: { x: 355, y: 509, width: 71, height: 65 },
        subscription_and_support: { x: 355, y: 786, width: 71, height: 268 },
        revenue: { x: 822, y: 627, width: 70, height: 336 },
        gross_profit: { x: 1289, y: 500, width: 71, height: 225 },
        cost_of_revenue: { x: 1289, y: 951, width: 71, height: 107 },
        operating_loss: { x: 1587, y: 949, width: 71, height: 19 },
        operating_expenses: { x: 1757, y: 627, width: 70, height: 247 },
        sm: { x: 2223, y: 461, width: 71, height: 128 },
        rnd: { x: 2223, y: 757, width: 71, height: 81 },
        ga: { x: 2223, y: 1025, width: 71, height: 34 },
      },
      labels: {
        product: { blocks: [
          { x: 390.5, top: 405, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+31% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 287, top: 542, anchor: 'end', lines: [{ text: 'Products', size: 40, weight: 800 }] },
          { x: 332, top: 592, anchor: 'end', lines: [{ text: '72% gross margin', size: 29, weight: 400, color: NOTE }] },
        ] },
        subscription_and_support: { blocks: [
          { x: 390.5, top: 681, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+31% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 330, top: 832, anchor: 'end', lineGap: 10, lines: [{ text: 'Subscriptions', size: 40, weight: 800 }, { text: 'and', size: 40, weight: 800 }, { text: 'support', size: 40, weight: 800 }] },
          { x: 330, top: 991, anchor: 'end', lines: [{ text: '66% gross margin', size: 29, weight: 400, color: NOTE }] },
        ] },
        revenue: { blocks: [{ x: 857, top: 466, anchor: 'middle', lineGap: 12, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+31% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1324.5, top: 306, anchor: 'middle', lineGap: 12, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '68% margin', size: 29, weight: 400, color: NOTE }, { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1324.5, top: 1080, anchor: 'middle', lineGap: 10, lines: [{ text: 'Cost of', size: 34, weight: 800 }, { text: 'revenue', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
        operating_loss: { blocks: [{ x: 1622.5, top: 992, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating loss', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '(6%) margin', size: 29, weight: 400, color: NOTE }, { text: '(16pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1792, top: 473, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 463, anchor: 'middle', lineGap: 10, lines: [{ text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '39% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 757, anchor: 'middle', lineGap: 10, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '24% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1025, anchor: 'middle', lineGap: 10, lines: [{ text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '11% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Products', value: 594, notes: ['+31% Y/Y', '72% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'subscription_and_support', col: 0, order: 1, type: 'source', label: ['Subscriptions', 'and', 'support'], value: 2408, valueText: '$2,408M', notes: ['+31% Y/Y', '66% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3002, valueText: '$3,002M', notes: ['+31% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2028, valueText: '$2,028M', notes: ['68% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 974, valueText: '($974M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: 'Operating loss', value: -183, notes: ['(6%) margin', '(16pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 2211, valueText: '($2,211M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 1161, valueText: '($1,161M)', notes: ['39% of revenue', '+4pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 734, valueText: '($734M)', notes: ['24% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 316, valueText: '($316M)', notes: ['11% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 594, sourceWidth: 65, targetWidth: 65, y0: 541.5, y1: 659.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'subscription_and_support', target: 'revenue', value: 2408, sourceWidth: 268, targetWidth: 268, y0: 920, y1: 826.5, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 2028, sourceWidth: 225, targetWidth: 225, y0: 739.5, y1: 612.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 974, sourceWidth: 107, targetWidth: 107, y0: 908.5, y1: 1004.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2028, sourceWidth: 225, targetWidth: 225, y0: 612.5, y1: 739.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 183, sourceWidth: 19, targetWidth: 19, y0: 958.5, y1: 864.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1161, sourceWidth: 128, targetWidth: 128, y0: 691, y1: 525, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 734, sourceWidth: 81, targetWidth: 81, y0: 795.5, y1: 797.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 316, sourceWidth: 34, targetWidth: 34, y0: 857, y1: 1042, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['RPO', 'NGS ARR'],
      zh: {
        name: '帕洛阿尔托网络 · 2026 财年第三季度',
        meta: { title: '帕洛阿尔托网络 2026 财年第三季度利润表', period: '2026 财年第三季度', periodNote: '截至 2026 年 4 月', titleTextLength: 1940 },
        annotationsSvg: annotationsZh,
        nodes: {
          product: { label: '产品', notes: ['同比 +31%', '毛利率 72%'] },
          subscription_and_support: { label: ['订阅和', '支持'], notes: ['同比 +31%', '毛利率 66%'] },
          revenue: { label: '收入', notes: ['同比 +31%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 68%', '同比 (5 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: '营业亏损', notes: ['利润率 (6%)', '同比 (16 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          sm: { label: '销售与市场', notes: ['占收入 39%', '同比 +4 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 +3 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 11%', '同比 +3 个百分点'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
