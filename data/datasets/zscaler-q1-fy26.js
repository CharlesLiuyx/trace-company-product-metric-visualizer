/* ====================================================================
 * Zscaler - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/zscaler-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const CYAN = '#009cda';
  const CYAN_LINK = '#85cae6';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2433;

  const zscalerLogo = `
    <g fill="${CYAN}">
      <path d="M34,32 C61,2 119,0 151,19 C183,38 184,68 160,76 C138,84 111,67 86,64 C61,60 41,75 19,68 C2,62 11,47 34,32 Z"/>
      <path d="M20,75 C42,57 72,63 95,76 C121,91 146,90 166,101 C182,111 171,124 146,129 C111,136 66,126 39,106 C22,94 11,84 20,75 Z"/>
      <path d="M74,12 C95,1 130,4 149,19 C166,31 159,43 140,45 C118,47 99,36 82,34 C61,31 50,24 57,18 C61,15 67,14 74,12 Z"/>
    </g>
    <path d="M57,58 C84,44 121,45 151,60 C166,68 163,77 145,77 C119,77 93,69 70,75 C52,80 40,72 42,66 C44,63 50,60 57,58 Z" fill="#f2f2f2"/>
    <text x="203" y="105" font-family="Montserrat,Arial,sans-serif" font-size="105" font-style="italic" font-weight="800" fill="${CYAN}" textLength="386" lengthAdjust="spacingAndGlyphs">zscaler</text>
  `;

  const card = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="148" rx="32" fill="${CYAN}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${y + 55 + index * 35}" text-anchor="middle" font-size="${index === 0 ? 30 : 29}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(74, 1194, 209, ['ARR', '$3.2B', '+26% Y/Y'])}
      ${card(292, 1194, 353, ['Customers', '&gt; $100K 3,754 +19% Y/Y', '&gt; $1M 698 +20% Y/Y'])}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(74, 1194, 209, ['ARR', '$3.2B', '同比 +26%'])}
      <g>
        <rect x="292" y="1194" width="353" height="148" rx="32" fill="${CYAN}"/>
        <text x="468.5" y="1249" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">客户</text>
        <text x="468.5" y="1284" text-anchor="middle" font-size="22" font-weight="500" fill="#ffffff">&gt; $100K：3,754，同比 +19%</text>
        <text x="468.5" y="1319" text-anchor="middle" font-size="22" font-weight="500" fill="#ffffff">&gt; $1M：698，同比 +20%</text>
      </g>
    </g>`;

  const zhLayoutLabels = {
    united_states: {
      blocks: [
        { x: 400, top: 337, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +34%', size: 29, weight: 400, color: NOTE }] },
        { x: 164, top: 500, anchor: 'start', lines: [{ text: '美国', size: 40, weight: 800 }] },
      ],
    },
    emea: {
      blocks: [
        { x: 400, top: 635, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +14%', size: 29, weight: 400, color: NOTE }] },
        { x: 126, top: 741, anchor: 'start', lineGap: 5, lines: [{ text: '欧洲、中东', size: 35, weight: 800 }, { text: '和非洲', size: 35, weight: 800 }] },
      ],
    },
    asia_pacific: {
      blocks: [
        { x: 400, top: 846, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +21%', size: 29, weight: 400, color: NOTE }] },
        { x: 171, top: 940, anchor: 'start', lines: [{ text: '亚太', size: 40, weight: 800 }] },
      ],
    },
    other: {
      blocks: [
        { x: 396, top: 1024, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +22%', size: 29, weight: 400, color: NOTE }] },
        { x: 171, top: 1106, anchor: 'start', lines: [{ text: '其他', size: 40, weight: 800 }] },
      ],
    },
    revenue: { blocks: [{ x: 867, top: 460, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +26%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1335, top: 307, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 77%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1329, top: 1085, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 34, weight: 800, color: RED_LABEL }, { text: '成本', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1623, top: 971, anchor: 'middle', lineGap: 12, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '亏损', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '利润率 (5%)', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1800, top: 446, anchor: 'middle', lineGap: 12, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: 2430, top: 445, anchor: 'middle', lineGap: 10, lines: [{ text: '销售与市场', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 47%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2430, top: 772, anchor: 'middle', lineGap: 10, lines: [{ text: '研发', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 25%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: 2430, top: 1010, anchor: 'middle', lineGap: 10, lines: [{ text: '管理费用', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 8%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'zscaler-q1-fy26',
    name: 'Zscaler · Q1 FY26',
    company: 'Zscaler',
    meta: {
      company: 'Zscaler',
      title: 'Zscaler Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/zscaler-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2180,
      periodX: 2415,
      periodY: 305,
      periodNoteY: 349,
      logoWidth: 690,
      logoHeight: 130,
      logoY: 270,
      logoViewBox: '0 0 690 130',
      logoSvg: zscalerLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: CYAN, label: CYAN },
        hub: { node: CYAN, label: CYAN },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: CYAN_LINK,
        hub: CYAN_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        united_states: { x: 360, y: 438, width: 71, height: 174 },
        emea: { x: 360, y: 737, width: 71, height: 85 },
        asia_pacific: { x: 360, y: 945, width: 71, height: 47 },
        other: { x: 360, y: 1130, width: 71, height: 9 },
        revenue: { x: 827, y: 613, width: 70, height: 322 },
        gross_profit: { x: 1294, y: 493, width: 71, height: 247 },
        cost_of_revenue: { x: 1294, y: 991, width: 71, height: 74 },
        operating_loss: { x: 1587, y: 945, width: 71, height: 12 },
        operating_expenses: { x: 1764, y: 612, width: 70, height: 262 },
        sm: { x: 2228, y: 445, width: 71, height: 151 },
        rnd: { x: 2228, y: 775, width: 71, height: 80 },
        ga: { x: 2228, y: 1050, width: 71, height: 25 },
      },
      labels: {
        united_states: {
          blocks: [
            { x: 400, top: 337, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+34% Y/Y', size: 29, weight: 400, color: NOTE }] },
            { x: 141, top: 480, anchor: 'start', lineGap: 9, lines: [{ text: 'United', size: 40, weight: 800 }, { text: 'States', size: 40, weight: 800 }] },
          ],
        },
        emea: {
          blocks: [
            { x: 400, top: 635, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE }] },
            { x: 156, top: 759, anchor: 'start', lines: [{ text: 'EMEA', size: 40, weight: 800 }] },
          ],
        },
        asia_pacific: {
          blocks: [
            { x: 400, top: 846, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE }] },
            { x: 98, top: 940, anchor: 'start', lines: [{ text: 'Asia Pacific', size: 40, weight: 800 }] },
          ],
        },
        other: {
          blocks: [
            { x: 396, top: 1024, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE }] },
            { x: 151, top: 1106, anchor: 'start', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        revenue: { blocks: [{ x: 867, top: 460, anchor: 'middle', lineGap: 10, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+26% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1335, top: 307, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '77% margin', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1329, top: 1085, anchor: 'middle', lineGap: 10, lines: [{ text: 'Cost of', size: 34, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
        operating_loss: { blocks: [{ x: 1623, top: 971, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'loss', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '(5%) margin', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1800, top: 446, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 445, anchor: 'middle', lineGap: 10, lines: [{ text: 'S&M', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '47% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 772, anchor: 'middle', lineGap: 10, lines: [{ text: 'R&D', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '25% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1010, anchor: 'middle', lineGap: 10, lines: [{ text: 'G&A', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '8% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: ['United', 'States'], value: 427, notes: ['+34% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'emea', col: 0, order: 1, type: 'source', label: 'EMEA', value: 212, notes: ['+14% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'asia_pacific', col: 0, order: 2, type: 'source', label: 'Asia Pacific', value: 120, notes: ['+21% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'other', col: 0, order: 3, type: 'source', label: 'Other', value: 28, notes: ['+22% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 788, notes: ['+26% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 603, notes: ['77% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 185, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -36, notes: ['(5%) margin', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 640, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 373, notes: ['47% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 200, notes: ['25% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 66, notes: ['8% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 427, sourceWidth: 174, targetWidth: 175, y0: 525, y1: 700.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'emea', target: 'revenue', value: 212, sourceWidth: 85, targetWidth: 87, y0: 779.5, y1: 831.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'asia_pacific', target: 'revenue', value: 120, sourceWidth: 47, targetWidth: 49, y0: 968.5, y1: 899.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'other', target: 'revenue', value: 28, sourceWidth: 9, targetWidth: 11, y0: 1134.5, y1: 929.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 603, sourceWidth: 247, targetWidth: 247, y0: 736.5, y1: 616.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 185, sourceWidth: 75, targetWidth: 74, y0: 897.5, y1: 1028, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 603, sourceWidth: 247, targetWidth: 247, y0: 616.5, y1: 735.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 36, sourceWidth: 12, targetWidth: 15, y0: 951, y1: 866.5, sourceOrder: 0, targetOrder: 1, curve: { x0: 1658, x1: 1764, c1x: 1689, c1y: 951, c2x: 1728, c2y: 866.5 } },
      { source: 'operating_expenses', target: 'sm', value: 373, sourceWidth: 153, targetWidth: 151, y0: 688.5, y1: 520.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 200, sourceWidth: 82, targetWidth: 80, y0: 806, y1: 815, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 66, sourceWidth: 27, targetWidth: 25, y0: 860.5, y1: 1062.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['ARR'],
      zh: {
        name: 'Zscaler · 2026 财年第一季度',
        meta: {
          title: 'Zscaler 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 10 月',
          titleSize: 108,
          titleTextLength: 1860,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +34%'] },
          emea: { label: '欧洲、中东和非洲', notes: ['同比 +14%'] },
          asia_pacific: { label: '亚太', notes: ['同比 +21%'] },
          other: { label: '其他', notes: ['同比 +22%'] },
          revenue: { label: '收入', notes: ['同比 +26%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 77%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (5%)', '同比 +0 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与市场', notes: ['占收入 47%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 25%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
