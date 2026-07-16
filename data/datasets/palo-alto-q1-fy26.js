/* ====================================================================
 * Palo Alto Networks - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/palo-alto-q1-fy26.png with measured
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
  const RIGHT_LABEL_X = 2422;

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
    ${card(238, 191, 'RPO', '$15.5B', '+24% Y/Y')}
    ${card(452, 237, 'NGS ARR', '$5.9B', '+29% Y/Y')}
    <g font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">
      <text x="195" y="1302">RPO = Remaining Performance Obligation</text>
      <text x="67" y="1342">NGS ARR = Next-Gen Security Annualized Recurring Revenue</text>
    </g>`;

  const annotationsZh = `
    ${card(238, 191, 'RPO', '$15.5B', '同比 +24%')}
    ${card(452, 237, 'NGS ARR', '$5.9B', '同比 +29%')}
    <g font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">
      <text x="195" y="1302">RPO = 剩余履约义务</text>
      <text x="67" y="1342">NGS ARR = 新一代安全年度经常性收入</text>
    </g>`;

  const zhLayoutLabels = {
    product: { blocks: [
      { x: 390.5, top: 422, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +23%', size: 29, weight: 400, color: NOTE }] },
      { x: 287, top: 520, anchor: 'end', lines: [{ text: '产品', size: 40, weight: 800 }] },
      { x: 332, top: 576, anchor: 'end', lines: [{ text: '毛利率 79%', size: 29, weight: 400, color: NOTE }] },
    ] },
    subscription_and_support: { blocks: [
      { x: 390.5, top: 696, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +14%', size: 29, weight: 400, color: NOTE }] },
      { x: 330, top: 882, anchor: 'end', lineGap: 10, lines: [{ text: '订阅和', size: 40, weight: 800 }, { text: '支持', size: 40, weight: 800 }] },
      { x: 330, top: 991, anchor: 'end', lines: [{ text: '毛利率 73%', size: 29, weight: 400, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 857, top: 472, anchor: 'middle', lineGap: 12, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +16%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1324.5, top: 320, anchor: 'middle', lineGap: 12, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 74%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1329.5, top: 1094, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 34, weight: 800 }, { text: '成本', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1793, top: 228, anchor: 'middle', lineGap: 12, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 12%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1793, top: 895, anchor: 'middle', lineGap: 12, lines: [{ text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }] }] },
    other: { blocks: [{ x: 2143, top: 445, anchor: 'middle', lineGap: 10, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2328, top: 300, anchor: 'start', lineGap: 12, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 14%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 563, anchor: 'middle', lineGap: 10, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X + 14, top: 752, anchor: 'middle', lineGap: 10, lines: [{ text: '销售与市场', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 33%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X + 14, top: 958, anchor: 'middle', lineGap: 10, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 21%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X + 14, top: 1164, anchor: 'middle', lineGap: 10, lines: [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 7%', size: 28, weight: 400, color: NOTE }, { text: '同比 +3 个百分点', size: 28, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palo-alto-q1-fy26',
    name: 'Palo Alto Networks · Q1 FY26',
    company: 'Palo Alto Networks',
    meta: {
      company: 'Palo Alto Networks',
      title: 'Palo Alto Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/palo-alto-q1-fy26.png', width: 2667, height: 1500 },
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
        product: { x: 355, y: 514, width: 71, height: 60 },
        subscription_and_support: { x: 355, y: 788, width: 71, height: 289 },
        revenue: { x: 822, y: 622, width: 70, height: 353 },
        gross_profit: { x: 1289, y: 512, width: 71, height: 261 },
        cost_of_revenue: { x: 1289, y: 990, width: 71, height: 89 },
        operating_profit: { x: 1757, y: 420, width: 70, height: 41 },
        operating_expenses: { x: 1757, y: 666, width: 70, height: 217 },
        other: { x: 2107, y: 421, width: 70, height: 13 },
        net_profit: { x: 2223, y: 335, width: 71, height: 45 },
        tax: { x: 2223, y: 597, width: 71, height: 9 },
        sm: { x: 2223, y: 764, width: 71, height: 115 },
        rnd: { x: 2223, y: 989, width: 71, height: 74 },
        ga: { x: 2223, y: 1184, width: 71, height: 24 },
      },
      labels: {
        product: { blocks: [
          { x: 390.5, top: 422, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 287, top: 520, anchor: 'end', lines: [{ text: 'Products', size: 40, weight: 800 }] },
          { x: 332, top: 576, anchor: 'end', lines: [{ text: '79% gross margin', size: 29, weight: 400, color: NOTE }] },
        ] },
        subscription_and_support: { blocks: [
          { x: 390.5, top: 696, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 330, top: 858, anchor: 'end', lineGap: 10, lines: [{ text: 'Subscriptions', size: 40, weight: 800 }, { text: 'and', size: 40, weight: 800 }, { text: 'support', size: 40, weight: 800 }] },
          { x: 330, top: 991, anchor: 'end', lines: [{ text: '73% gross margin', size: 29, weight: 400, color: NOTE }] },
        ] },
        revenue: { blocks: [{ x: 857, top: 472, anchor: 'middle', lineGap: 12, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1324.5, top: 320, anchor: 'middle', lineGap: 12, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '74% margin', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1329.5, top: 1094, anchor: 'middle', lineGap: 10, lines: [{ text: 'Cost of', size: 34, weight: 800 }, { text: 'revenue', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1793, top: 228, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '12% margin', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1793, top: 895, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }] }] },
        other: { blocks: [{ x: 2143, top: 445, anchor: 'middle', lineGap: 10, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2328, top: 300, anchor: 'start', lineGap: 12, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '14% margin', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        tax: { blocks: [{ x: RIGHT_LABEL_X, top: 563, anchor: 'middle', lineGap: 10, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 752, anchor: 'middle', lineGap: 10, lines: [{ text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '33% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 958, anchor: 'middle', lineGap: 10, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '21% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1164, anchor: 'middle', lineGap: 10, lines: [{ text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '7% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Products', value: 434, notes: ['+23% Y/Y', '79% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'subscription_and_support', col: 0, order: 1, type: 'source', label: ['Subscriptions', 'and', 'support'], value: 2040, valueText: '$2,040M', notes: ['+14% Y/Y', '73% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2474, valueText: '$2,474M', notes: ['+16% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1836, valueText: '$1,836M', notes: ['74% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 638, valueText: '($638M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 309, notes: ['12% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1527, valueText: '($1,527M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 103, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 334, notes: ['14% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 78, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 820, notes: ['33% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 528, notes: ['21% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 179, notes: ['7% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 434, sourceWidth: 60, targetWidth: 61, y0: 544, y1: 652.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'subscription_and_support', target: 'revenue', value: 2040, sourceWidth: 289, targetWidth: 292, y0: 932.5, y1: 829, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1836, sourceWidth: 262, targetWidth: 261, y0: 753, y1: 642.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 638, sourceWidth: 90, targetWidth: 89, y0: 930, y1: 1034.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 309, sourceWidth: 44, targetWidth: 41, y0: 534, y1: 440.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1527, sourceWidth: 217, targetWidth: 217, y0: 664.5, y1: 774.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 231, sourceWidth: 31, targetWidth: 32, y0: 435.5, y1: 351, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 78, sourceWidth: 10, targetWidth: 9, y0: 456, y1: 601.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 103, sourceWidth: 13, targetWidth: 13, y0: 427.5, y1: 373.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 820, sourceWidth: 116, targetWidth: 115, y0: 724, y1: 821.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 528, sourceWidth: 75, targetWidth: 74, y0: 820.5, y1: 1026, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 179, sourceWidth: 25, targetWidth: 24, y0: 870.5, y1: 1196, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['RPO', 'NGS ARR'],
      zh: {
        name: '帕洛阿尔托网络 · 2026 财年第一季度',
        meta: { title: '帕洛阿尔托网络 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2025 年 10 月', titleTextLength: 1940 },
        annotationsSvg: annotationsZh,
        nodes: {
          product: { label: '产品', notes: ['同比 +23%', '毛利率 79%'] },
          subscription_and_support: { label: ['订阅和', '支持'], notes: ['同比 +14%', '毛利率 73%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 14%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 33%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 21%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 7%', '同比 +3 个百分点'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
