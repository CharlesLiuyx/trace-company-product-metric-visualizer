/* ====================================================================
 * Micron - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/micron-q4-fy25.png as a fixed
 * d3-sankey layout. Geometry is measured from the 2667x1500 Source.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const SEGMENT_NOTE = '#797979';
  const MAGENTA = '#bd03f7';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';

  const LOGO = `
    <g fill="none" stroke="#000000" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 80 V52 a13 13 0 0 1 26 0 V80"/>
      <path d="M34 65 a13 13 0 0 1 26 0 V80"/>
      <path d="M78 56 V80"/>
      <path d="M126 60 a14 14 0 1 0 0 24"/>
      <path d="M150 56 V80 M150 64 a12 12 0 0 1 15 -6"/>
      <circle cx="200" cy="66" r="14"/>
      <path d="M232 80 V52 a13 13 0 0 1 26 0 V80"/>
    </g>
    <circle cx="78" cy="40" r="4" fill="#000000"/>
    <circle cx="276" cy="78" r="3.5" fill="#000000"/>`;

  const CLOUD_MEMORY_ICON = `
    <g stroke="#111111" stroke-width="3" stroke-linejoin="round">
      <rect x="34" y="10" width="52" height="20" rx="3" fill="#2b2b2b" transform="rotate(-18 60 20)"/>
      <rect x="10" y="40" width="60" height="22" rx="3" fill="#1f1f1f" transform="rotate(-14 40 51)"/>
      <rect x="52" y="52" width="44" height="16" rx="3" fill="#2b2b2b" transform="rotate(-14 74 60)"/>
    </g>
    <g fill="${MAGENTA}" opacity="0.85">
      <rect x="20" y="52" width="12" height="2.2" transform="rotate(-14 26 53)"/>
      <rect x="42" y="18" width="10" height="2" transform="rotate(-18 47 19)"/>
    </g>`;

  const DATA_CENTER_ICON = `
    <g stroke="#111111" stroke-width="4" stroke-linejoin="round" fill="#ffffff">
      <rect x="20" y="16" width="60" height="18" rx="6"/>
      <rect x="20" y="41" width="60" height="18" rx="6"/>
      <rect x="20" y="66" width="60" height="18" rx="6"/>
    </g>
    <g fill="#111111"><circle cx="31" cy="25" r="3"/><circle cx="31" cy="50" r="3"/><circle cx="31" cy="75" r="3"/></g>
    <g fill="${MAGENTA}"><rect x="42" y="23" width="24" height="4" rx="2"/><rect x="42" y="48" width="24" height="4" rx="2"/><rect x="42" y="73" width="24" height="4" rx="2"/></g>`;

  const MOBILE_ICON = `
    <rect x="16" y="6" width="52" height="88" rx="12" fill="#ffffff" stroke="#111111" stroke-width="4.5"/>
    <path d="M34 14 h16" stroke="#111111" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="42" cy="86" r="2.6" fill="#111111"/>
    <g stroke="${MAGENTA}" stroke-width="5" stroke-linecap="round"><path d="M26 62 L58 26"/><path d="M30 78 L60 44"/></g>`;

  const AUTO_ICON = `
    <circle cx="50" cy="50" r="40" fill="#ffffff" stroke="${MAGENTA}" stroke-width="6"/>
    <circle cx="50" cy="50" r="40" fill="none" stroke="#111111" stroke-width="4" stroke-dasharray="150 200" stroke-dashoffset="-6"/>
    <g fill="none" stroke="#111111" stroke-width="6" stroke-linecap="round">
      <path d="M18 45 h18 a14 14 0 0 1 28 0 h18"/><path d="M50 52 V84"/>
      <path d="M50 52 C34 56 26 70 24 82"/><path d="M50 52 C66 56 74 70 76 82"/>
    </g>
    <circle cx="50" cy="50" r="4.5" fill="${MAGENTA}"/>`;

  const svgIcon = (markup, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">${markup}</svg>`;

  const annotations = () => `
    <g data-typography-role="brand">
      ${svgIcon(CLOUD_MEMORY_ICON, 132, 376, 152, 90, '0 0 100 78')}
      ${svgIcon(DATA_CENTER_ICON, 158, 655, 106, 106, '0 0 100 100')}
      ${svgIcon(MOBILE_ICON, 178, 900, 66, 108, '0 0 84 100')}
      ${svgIcon(AUTO_ICON, 145, 1100, 126, 126, '0 0 100 100')}
    </g>`;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, lineGap = 8) => ({ x, top, anchor: 'middle', lineGap, lines });

  function labels(zh) {
    const t = zh ? {
      cloud: ['同比 +214%', '云内存', '营业利润率 48%'],
      core: ['同比下降 23%', '核心数据中心', '营业利润率 25%'],
      mobile: ['同比 +25%', '移动与客户端', '营业利润率 29%'],
      auto: ['同比 +17%', '汽车与嵌入式', '营业利润率 20%'],
      revenue: ['收入', '同比 +46%'], gross: ['毛利润', '利润率 45%', '同比 +9 个百分点'],
      cost: ['收入', '成本'], operating: ['营业利润', '利润率 32%', '同比 +13 个百分点'],
      opex: ['营业费用'], net: ['净利润', '利润率 28%', '同比 +17 个百分点'],
      tax: '税费', other: '其他', rnd: '研发', sga: '销售及行政',
    } : {
      cloud: ['+214% Y/Y', 'Cloud Memory', '48% operating margin'],
      core: ['(23%) Y/Y', 'Core Data Center', '25% operating margin'],
      mobile: ['+25% Y/Y', 'Mobile & Client', '29% operating margin'],
      auto: ['+17% Y/Y', 'Automotive', '20% operating margin'],
      revenue: ['Revenue', '+46% Y/Y'], gross: ['Gross profit', '45% margin', '+9pp Y/Y'],
      cost: ['Cost of', 'revenue'], operating: ['Operating profit', '32% margin', '+13pp Y/Y'],
      opex: ['Operating', 'expenses'], net: ['Net profit', '28% margin', '+17pp Y/Y'],
      tax: 'Tax', other: 'Other', rnd: 'R&D', sga: 'SG&A',
    };
    const sourceLabels = (valueTop, sideTop, copy, sideLines, valueStyle = {}) => ({ blocks: [
      block(436, valueTop, [
        line('$value', valueStyle.amountSize || 44, 400, MAGENTA),
        line(copy[0], valueStyle.noteSize || 30, 400, SEGMENT_NOTE),
      ], 10),
      block(214, sideTop, sideLines, 7),
    ] });
    return {
      cloud_memory: sourceLabels(373, 493, t.cloud, [line(t.cloud[1], 40, 800, MAGENTA, 'name'), line(t.cloud[2], 27, 400, SEGMENT_NOTE, 'note')]),
      core_data_center: sourceLabels(673, 775, t.core, [line(t.core[1], 40, 800, MAGENTA), line(t.core[2], 27, 400, SEGMENT_NOTE)], { amountSize: 38, noteSize: 26 }),
      mobile_client: sourceLabels(871, 1017, t.mobile, [line(t.mobile[1], zh ? 37 : 40, 800, MAGENTA, 'name'), line(t.mobile[2], 27, 400, SEGMENT_NOTE, 'note')]),
      automotive_embedded: sourceLabels(1142, 1229, t.auto, zh
        ? [line(t.auto[1], 38, 800, MAGENTA, 'name'), line(t.auto[2], 27, 400, SEGMENT_NOTE, 'note')]
        : [line('Automotive', 40, 800, MAGENTA, 'name'), line('& Embedded', 40, 800, MAGENTA, 'name'), line(t.auto[2], 27, 400, SEGMENT_NOTE, 'note')]),
      revenue: { blocks: [block(904, 512, [line(t.revenue[0], 46, 800, MAGENTA, 'name'), line('$value', 44, 400, MAGENTA, 'amount'), line(t.revenue[1], 30, 400, NOTE, 'note')])] },
      gross_profit: { blocks: [block(1370, 378, [line(t.gross[0], 44, 800, GREEN_LABEL, 'name'), line('$value', 44, 400, GREEN_LABEL, 'amount'), line(t.gross[1], 30, 400, NOTE, 'note'), line(t.gross[2], 30, 400, NOTE, 'note')])] },
      cost_of_revenue: { blocks: [block(1370, 1112, [line(t.cost[0], 40, 800, null, 'name'), line(t.cost[1], 40, 800, null, 'name'), line('$value', 40, 400, null, 'amount')], 7)] },
      operating_profit: { blocks: [block(1838, 281, [line(t.operating[0], 44, 800, GREEN_LABEL, 'name'), line('$value', 44, 400, GREEN_LABEL, 'amount'), line(t.operating[1], 30, 400, NOTE, 'note'), line(t.operating[2], 30, 400, NOTE, 'note')])] },
      operating_expenses: { blocks: [block(1838, 826, [line(t.opex[0], 40, 800, RED_LABEL, 'name'), ...(t.opex[1] ? [line(t.opex[1], 40, 800, RED_LABEL, 'name')] : []), line('$value', 40, 400, RED_LABEL, 'amount')], 7)] },
      net_profit: { blocks: [block(zh ? 2472 : 2457, 349, [line(t.net[0], 44, 800, GREEN_LABEL, 'name'), line('$value', 44, 400, GREEN_LABEL, 'amount'), line(t.net[1], 30, 400, NOTE, 'note'), line(t.net[2], 30, 400, NOTE, 'note')])] },
      tax: { blocks: [block(2457, 600, [line(t.tax, 40, 800, null, 'name'), line('$value', 40, 400, null, 'amount')], 6)] },
      other_non_operating: { blocks: [block(2457, 714, [line(t.other, 40, 800, null, 'name'), line('$value', 40, 400, null, 'amount')], 6)] },
      rnd: { blocks: [block(2457, 871, [line(t.rnd, 40, 800, null, 'name'), line('$value', 40, 400, null, 'amount')], 6)] },
      sga: { blocks: [block(2457, 1028, [line(t.sga, zh ? 36 : 40, 800, null, 'name'), line('$value', 40, 400, null, 'amount')], 6)] },
      other_opex: { blocks: [block(2457, 1200, [line(t.other, 40, 800, null, 'name'), line('$value', 40, 400, null, 'amount')], 6)] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'micron-q4-fy25',
    name: 'Micron · Q4 FY25',
    company: 'Micron',
    meta: {
      company: 'Micron',
      title: 'Micron Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Aug. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/micron-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 199, titleSize: 122, titleWeight: 800, titleTextLength: 2148,
      periodX: 1840, periodY: 1200, periodNoteY: 1241, periodAnchor: 'middle',
      logoWidth: 700, logoHeight: 260, logoX: 540, logoY: 155, logoViewBox: '0 0 300 100', logoSvg: LOGO,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: MAGENTA }, hub: { node: BLACK, label: MAGENTA },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 44, value: 44, note: 30, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations(),
    layout: {
      scale: 29.4,
      nodes: {
        cloud_memory: { x: 401, y: 473, width: 71, height: 133 },
        core_data_center: { x: 401, y: 769, width: 71, height: 45 },
        mobile_client: { x: 401, y: 976, width: 71, height: 109 },
        automotive_embedded: { x: 401, y: 1249, width: 71, height: 40 },
        revenue: { x: 868, y: 670, width: 70, height: 332 },
        gross_profit: { x: 1335, y: 567, width: 71, height: 148 },
        cost_of_revenue: { x: 1335, y: 920, width: 71, height: 183 },
        operating_profit: { x: 1803, y: 473, width: 70, height: 107 },
        operating_expenses: { x: 1803, y: 780, width: 70, height: 39 },
        net_profit: { x: 2269, y: 370, width: 71, height: 92 },
        tax: { x: 2269, y: 656, width: 71, height: 10 },
        other_non_operating: { x: 2269, y: 765, width: 71, height: 3 },
        rnd: { x: 2269, y: 901, width: 71, height: 29 },
        sga: { x: 2269, y: 1081, width: 71, height: 7 },
        other_opex: { x: 2269, y: 1246, width: 71, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'cloud_memory', col: 0, order: 0, type: 'source', label: 'Cloud Memory', value: 4.5, notes: ['+214% Y/Y', '48% operating margin'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'core_data_center', col: 0, order: 1, type: 'source', label: 'Core Data Center', value: 1.6, notes: ['(23%) Y/Y', '25% operating margin'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'mobile_client', col: 0, order: 2, type: 'source', label: 'Mobile & Client', value: 3.8, notes: ['+25% Y/Y', '29% operating margin'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'automotive_embedded', col: 0, order: 3, type: 'source', label: ['Automotive', '& Embedded'], value: 1.4, notes: ['+17% Y/Y', '20% operating margin'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 11.3, notes: ['+46% Y/Y'], color: BLACK, labelColor: MAGENTA },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.1, notes: ['45% margin', '+9pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.3 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.7, notes: ['32% margin', '+13pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.4 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 3.2, notes: ['28% margin', '+17pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'other_non_operating', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.022, valueText: '($22M)', color: '#e8b5b5' },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 1.0, valueText: '($1.0B)' },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.3 },
      { id: 'other_opex', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.039, valueText: '($39M)', color: '#bb1b1b' },
    ],
    links: [
      { source: 'cloud_memory', target: 'revenue', value: 4.5, sourceWidth: 133, targetWidth: 132, y0: 539.5, y1: 736, sourceOrder: 0, targetOrder: 0 },
      { source: 'core_data_center', target: 'revenue', value: 1.6, sourceWidth: 45, targetWidth: 47, y0: 791.5, y1: 825.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'mobile_client', target: 'revenue', value: 3.8, sourceWidth: 109, targetWidth: 112, y0: 1030.5, y1: 905, sourceOrder: 0, targetOrder: 2 },
      { source: 'automotive_embedded', target: 'revenue', value: 1.4, sourceWidth: 40, targetWidth: 41, y0: 1269, y1: 981.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 5.1, sourceWidth: 148, targetWidth: 148, y0: 744, y1: 641, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.3, sourceWidth: 184, targetWidth: 183, y0: 910, y1: 1011.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 3.7, sourceWidth: 107, targetWidth: 107, y0: 620.5, y1: 526.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.4, sourceWidth: 41, targetWidth: 39, y0: 694.5, y1: 799.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 3.2, sourceWidth: 94, targetWidth: 92, y0: 520, y1: 416, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 12, targetWidth: 10, y0: 574, y1: 661, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_non_operating', value: 0.022, sourceWidth: 1, targetWidth: 3, y0: 579.5, y1: 766.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, sourceWidth: 29, targetWidth: 29, y0: 794.5, y1: 915.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 8, targetWidth: 7, y0: 813, y1: 1084.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.039, sourceWidth: 1, targetWidth: 3, y0: 817.5, y1: 1247.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Micron · 2025 财年第四季度',
        meta: { title: 'Micron 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 8 月', titleTextLength: 1500 },
        nodes: {
          cloud_memory: { label: '云内存', notes: ['同比 +214%', '营业利润率 48%'] },
          core_data_center: { label: '核心数据中心', notes: ['同比下降 23%', '营业利润率 25%'] },
          mobile_client: { label: '移动与客户端', notes: ['同比 +25%', '营业利润率 29%'] },
          automotive_embedded: { label: '汽车与嵌入式', notes: ['同比 +17%', '营业利润率 20%'] },
          revenue: { label: '收入', notes: ['同比 +46%'] }, gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +9 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 +13 个百分点'] },
          operating_expenses: { label: '营业费用' }, net_profit: { label: '净利润', notes: ['利润率 28%', '同比 +17 个百分点'] },
          tax: { label: '税费' }, rnd: { label: '研发' }, sga: { label: '销售及行政' },
          other_non_operating: { label: '其他' }, other_opex: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
