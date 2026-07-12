/* ====================================================================
 * Zscaler - Q3 FY26 income statement ($M)
 * Reconstructed from input/processed/zscaler-q3-fy26.png as a fixed
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
  const RIGHT_LABEL_X = 2415;

  const zscalerLogo = `
    <g transform="translate(5 0)">
      <g fill="${CYAN}">
        <path d="M34,32 C61,2 119,0 151,19 C183,38 184,68 160,76 C138,84 111,67 86,64 C61,60 41,75 19,68 C2,62 11,47 34,32 Z"/>
        <path d="M20,75 C42,57 72,63 95,76 C121,91 146,90 166,101 C182,111 171,124 146,129 C111,136 66,126 39,106 C22,94 11,84 20,75 Z"/>
        <path d="M74,12 C95,1 130,4 149,19 C166,31 159,43 140,45 C118,47 99,36 82,34 C61,31 50,24 57,18 C61,15 67,14 74,12 Z"/>
      </g>
      <path d="M57,58 C84,44 121,45 151,60 C166,68 163,77 145,77 C119,77 93,69 70,75 C52,80 40,72 42,66 C44,63 50,60 57,58 Z" fill="#f2f2f2"/>
      <text x="203" y="105" font-family="Montserrat,Arial,sans-serif" font-size="105" font-style="italic" font-weight="800" fill="${CYAN}" textLength="386" lengthAdjust="spacingAndGlyphs">zscaler</text>
    </g>
  `;

  const card = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="148" rx="32" fill="${CYAN}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${y + 55 + index * 35}" text-anchor="middle" font-size="${index === 0 ? 30 : 29}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>`).join('')}
    </g>`;

  const customerCardEn = `
    <g>
      <rect x="515" y="1116" width="352" height="148" rx="32" fill="${CYAN}"/>
      <text x="691" y="1161" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">Customers</text>
      <text x="536" y="1201" font-size="27" fill="#ffffff"><tspan font-weight="800">&gt; $100K</tspan><tspan font-weight="500"> 4,003 +19% Y/Y</tspan></text>
      <text x="563" y="1240" font-size="27" fill="#ffffff"><tspan font-weight="800">&gt; $1M</tspan><tspan font-weight="500"> 748 +18% Y/Y</tspan></text>
    </g>`;

  const customerCardZh = `
    <g>
      <rect x="515" y="1116" width="352" height="148" rx="32" fill="${CYAN}"/>
      <text x="691" y="1161" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">客户</text>
      <text x="691" y="1201" text-anchor="middle" font-size="25" font-weight="500" fill="#ffffff"><tspan font-weight="800">&gt; $100K</tspan><tspan>：4,003，同比 +19%</tspan></text>
      <text x="691" y="1240" text-anchor="middle" font-size="25" font-weight="500" fill="#ffffff"><tspan font-weight="800">&gt; $1M</tspan><tspan>：748，同比 +18%</tspan></text>
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(74, 1116, 209, ['ARR', '$3.5B', '+25% Y/Y'])}
      ${card(295, 1116, 208, ['RPO', '$6.5B', '+30% Y/Y'])}
      ${customerCardEn}
      <text x="202" y="1311" text-anchor="start" font-size="29" font-weight="400" fill="${NOTE}">DBNR = Dollar Based Net Retention</text>
      <text x="158" y="1345" text-anchor="start" font-size="29" font-weight="400" fill="${NOTE}">RPO = Remaining Performance Obligation</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(74, 1116, 209, ['ARR', '$3.5B', '同比 +25%'])}
      ${card(295, 1116, 208, ['RPO', '$6.5B', '同比 +30%'])}
      ${customerCardZh}
      <text x="202" y="1311" text-anchor="start" font-size="26" font-weight="400" fill="${NOTE}">DBNR = 美元净留存率</text>
      <text x="158" y="1345" text-anchor="start" font-size="26" font-weight="400" fill="${NOTE}">RPO = 剩余履约义务</text>
    </g>`;

  const zhLayoutLabels = {
    united_states: {
      blocks: [
        { x: 400, top: 276, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +32%', size: 29, weight: 400, color: NOTE }] },
        { x: 145, top: 429, anchor: 'start', lines: [{ text: '美国', size: 40, weight: 800 }] },
      ],
    },
    emea: {
      blocks: [
        { x: 400, top: 573, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +16%', size: 29, weight: 400, color: NOTE }] },
        { x: 127, top: 704, anchor: 'start', lineGap: 5, lines: [{ text: '欧洲、中东', size: 35, weight: 800 }, { text: '和非洲', size: 35, weight: 800 }] },
      ],
    },
    asia_pacific: {
      blocks: [
        { x: 400, top: 776, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +23%', size: 29, weight: 400, color: NOTE }] },
        { x: 171, top: 881, anchor: 'start', lines: [{ text: '亚太', size: 40, weight: 800 }] },
      ],
    },
    other: {
      blocks: [
        { x: 400, top: 948, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +19%', size: 29, weight: 400, color: NOTE }] },
        { x: 151, top: 1025, anchor: 'start', lines: [{ text: '其他', size: 40, weight: 800 }] },
      ],
    },
    revenue: { blocks: [{ x: 866, top: 429, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +25%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1333, top: 284, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 77%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1333, top: 1059, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 34, weight: 800, color: RED_LABEL }, { text: '成本', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1586, top: 997, anchor: 'middle', lineGap: 12, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '亏损', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '利润率 (3%)', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1801, top: 406, anchor: 'middle', lineGap: 12, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: 2430, top: 407, anchor: 'middle', lineGap: 10, lines: [{ text: '销售与市场', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 44%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2430, top: 747, anchor: 'middle', lineGap: 10, lines: [{ text: '研发', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 27%', size: 29, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: 2430, top: 974, anchor: 'middle', lineGap: 10, lines: [{ text: '管理费用', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 10%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'zscaler-q3-fy26',
    name: 'Zscaler · Q3 FY26',
    company: 'Zscaler',
    meta: {
      company: 'Zscaler',
      title: 'Zscaler Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/zscaler-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2180,
      periodX: 2415,
      periodY: 305,
      periodNoteY: 349,
      logoWidth: 618,
      logoHeight: 120,
      logoY: 260,
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
        united_states: { x: 363, y: 367, width: 73, height: 189 },
        emea: { x: 363, y: 664, width: 73, height: 98 },
        asia_pacific: { x: 363, y: 867, width: 73, height: 54 },
        other: { x: 363, y: 1039, width: 73, height: 10 },
        revenue: { x: 830, y: 571, width: 72, height: 357 },
        gross_profit: { x: 1297, y: 466, width: 73, height: 275 },
        cost_of_revenue: { x: 1297, y: 960, width: 73, height: 79 },
        operating_loss: { x: 1550, y: 963, width: 73, height: 10 },
        operating_expenses: { x: 1765, y: 567, width: 73, height: 288 },
        sm: { x: 2231, y: 394, width: 73, height: 155 },
        rnd: { x: 2231, y: 741, width: 73, height: 95 },
        ga: { x: 2231, y: 992, width: 73, height: 33 },
      },
      labels: {
        united_states: {
          blocks: [
            { x: 400, top: 276, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+32% Y/Y', size: 29, weight: 400, color: NOTE }] },
            { x: 145, top: 429, anchor: 'start', lineGap: 9, lines: [{ text: 'United', size: 40, weight: 800 }, { text: 'States', size: 40, weight: 800 }] },
          ],
        },
        emea: {
          blocks: [
            { x: 400, top: 573, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE }] },
            { x: 155, top: 705, anchor: 'start', lines: [{ text: 'EMEA', size: 40, weight: 800 }] },
          ],
        },
        asia_pacific: {
          blocks: [
            { x: 400, top: 776, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE }] },
            { x: 98, top: 881, anchor: 'start', lines: [{ text: 'Asia Pacific', size: 40, weight: 800 }] },
          ],
        },
        other: {
          blocks: [
            { x: 400, top: 948, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE }] },
            { x: 151, top: 1025, anchor: 'start', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        revenue: { blocks: [{ x: 866, top: 429, anchor: 'middle', lineGap: 10, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+25% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1333, top: 284, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '77% margin', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1333, top: 1059, anchor: 'middle', lineGap: 10, lines: [{ text: 'Cost of', size: 34, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
        operating_loss: { blocks: [{ x: 1586, top: 997, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'loss', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '(3%) margin', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1801, top: 406, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 407, anchor: 'middle', lineGap: 10, lines: [{ text: 'S&M', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '44% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 747, anchor: 'middle', lineGap: 10, lines: [{ text: 'R&D', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '27% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 974, anchor: 'middle', lineGap: 10, lines: [{ text: 'G&A', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '10% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: ['United', 'States'], value: 453, notes: ['+32% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'emea', col: 0, order: 1, type: 'source', label: 'EMEA', value: 236, notes: ['+16% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'asia_pacific', col: 0, order: 2, type: 'source', label: 'Asia Pacific', value: 132, notes: ['+23% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'other', col: 0, order: 3, type: 'source', label: 'Other', value: 29, notes: ['+19% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 850, notes: ['+25% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 658, notes: ['77% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 193, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -30, notes: ['(3%) margin', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 687, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 372, notes: ['44% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 232, notes: ['27% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 83, notes: ['10% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 453, sourceWidth: 189, targetWidth: 190, y0: 461.5, y1: 666, sourceOrder: 0, targetOrder: 0 },
      { source: 'emea', target: 'revenue', value: 236, sourceWidth: 98, targetWidth: 99, y0: 713, y1: 810.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'asia_pacific', target: 'revenue', value: 132, sourceWidth: 54, targetWidth: 55, y0: 894, y1: 887.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'other', target: 'revenue', value: 29, sourceWidth: 10, targetWidth: 13, y0: 1044, y1: 921.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 658, sourceWidth: 276, targetWidth: 275, y0: 709, y1: 603.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 193, sourceWidth: 81, targetWidth: 79, y0: 887.5, y1: 999.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 658, sourceWidth: 275, targetWidth: 275, y0: 603.5, y1: 704.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 30, sourceWidth: 10, targetWidth: 13, y0: 968, y1: 848.5, sourceOrder: 0, targetOrder: 1, curve: { x0: 1623, x1: 1765, c1x: 1665, c1y: 968, c2x: 1717, c2y: 848.5 } },
      { source: 'operating_expenses', target: 'sm', value: 372, sourceWidth: 156, targetWidth: 155, y0: 645, y1: 471.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 232, sourceWidth: 97, targetWidth: 95, y0: 771.5, y1: 788.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 83, sourceWidth: 35, targetWidth: 33, y0: 837.5, y1: 1008.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['ARR', 'RPO', '> $100K', '> $1M'],
      zh: {
        name: 'Zscaler · 2026 财年第三季度',
        meta: {
          title: 'Zscaler 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 4 月',
          titleSize: 108,
          titleTextLength: 1860,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +32%'] },
          emea: { label: '欧洲、中东和非洲', notes: ['同比 +16%'] },
          asia_pacific: { label: '亚太', notes: ['同比 +23%'] },
          other: { label: '其他', notes: ['同比 +19%'] },
          revenue: { label: '收入', notes: ['同比 +25%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 77%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (3%)', '同比 +0 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与市场', notes: ['占收入 44%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 27%', '同比 +2 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 +0 个百分点'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
