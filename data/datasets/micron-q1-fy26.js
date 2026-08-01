/* ====================================================================
 * Micron - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/micron-q1-fy26.png as a fixed
 * d3-sankey layout. Geometry is measured from the 2667x1500 Source.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
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

  const annotations = `
    <g>
      ${svgIcon(CLOUD_MEMORY_ICON, 132, 404, 152, 90, '0 0 100 78')}
      ${svgIcon(DATA_CENTER_ICON, 158, 674, 106, 106, '0 0 100 100')}
      ${svgIcon(MOBILE_ICON, 178, 886, 66, 108, '0 0 84 100')}
      ${svgIcon(AUTO_ICON, 149, 1089, 118, 118, '0 0 100 100')}
    </g>`;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, lineGap = 8) => ({ x, top, anchor: 'middle', lineGap, lines });

  function labels(zh) {
    const t = zh ? {
      cloud: ['同比 +100%', '云内存', '营业利润率 55%'],
      core: ['同比 +4%', '核心数据中心', '营业利润率 37%'],
      mobile: ['同比 +63%', '移动与客户端', '营业利润率 47%'],
      auto: ['同比 +49%', '汽车与嵌入式', '营业利润率 36%'],
      revenue: ['收入', '同比 +57%'], gross: ['毛利润', '利润率 56%', '同比 +18 个百分点'],
      cost: ['收入', '成本'], operating: ['营业利润', '利润率 45%', '同比 +20 个百分点'],
      opex: ['营业费用'], net: ['净利润', '利润率 38%', '同比 +17 个百分点'],
      tax: '税费', other: '其他', rnd: '研发', sga: '销售及行政',
    } : {
      cloud: ['+100% Y/Y', 'Cloud Memory', '55% operating margin'],
      core: ['+4% Y/Y', 'Core Data Center', '37% operating margin'],
      mobile: ['+63% Y/Y', 'Mobile & Client', '47% operating margin'],
      auto: ['+49% Y/Y', 'Automotive', '36% operating margin'],
      revenue: ['Revenue', '+57% Y/Y'], gross: ['Gross profit', '56% margin', '+18pp Y/Y'],
      cost: ['Cost of', 'revenue'], operating: ['Operating profit', '45% margin', '+20pp Y/Y'],
      opex: ['Operating', 'expenses'], net: ['Net profit', '38% margin', '+17pp Y/Y'],
      tax: 'Tax', other: 'Other', rnd: 'R&D', sga: 'SG&A',
    };
    const source = (valueTop, sideTop, copy, sideLines, sideX = 214) => ({ blocks: [
      block(436, valueTop, [line('$value', 44, 400, MAGENTA), line(copy[0], 30, 400, NOTE)], 10),
      block(sideX, sideTop, sideLines, 7),
    ] });
    return {
      cloud_memory: source(392, 526, t.cloud, [line(t.cloud[1], 40, 800, MAGENTA), line(t.cloud[2], 27, 400, NOTE)]),
      core_data_center: source(671, 781, t.core, [line(t.core[1], 40, 800, MAGENTA), line(t.core[2], 27, 400, NOTE)]),
      mobile_client: source(879, 1008, t.mobile, [line(t.mobile[1], zh ? 37 : 40, 800, MAGENTA), line(t.mobile[2], 27, 400, NOTE)]),
      automotive_embedded: source(1144, 1227, t.auto, zh
        ? [line(t.auto[1], 38, 800, MAGENTA), line(t.auto[2], 27, 400, NOTE)]
        : [line('Automotive', 40, 800, MAGENTA), line('& Embedded', 40, 800, MAGENTA), line(t.auto[2], 27, 400, NOTE)], 194),
      revenue: { blocks: [block(904, 558, [line(t.revenue[0], 46, 800, MAGENTA), line('$value', 44, 400, MAGENTA), line(t.revenue[1], 30, 400, NOTE)])] },
      gross_profit: { blocks: [block(1370, 431, [line(t.gross[0], 44, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL), line(t.gross[1], 30, 400, NOTE), line(t.gross[2], 30, 400, NOTE)])] },
      cost_of_revenue: { blocks: [block(1370, 1206, [line(t.cost[0], 40, 800), line(t.cost[1], 40, 800), line('$value', 40, 400)], 7)] },
      operating_profit: { blocks: [block(1838, 353, [line(t.operating[0], 44, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL), line(t.operating[1], 30, 400, NOTE), line(t.operating[2], 30, 400, NOTE)])] },
      operating_expenses: { blocks: [block(1838, 947, [line(t.opex[0], 40, 800, RED_LABEL), ...(t.opex[1] ? [line(t.opex[1], 40, 800, RED_LABEL)] : []), line('$value', 40, 400, RED_LABEL)], 7)] },
      net_profit: { blocks: [block(zh ? 2473 : 2457, 466, [line(t.net[0], 44, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL), line(t.net[1], 30, 400, NOTE), line(t.net[2], 30, 400, NOTE)])] },
      tax: { blocks: [block(2457, 716, [line(t.tax, 40, 800), line('$value', 40, 400)], 6)] },
      other_non_operating: { blocks: [block(2457, 832, [line(t.other, 40, 800), line('$value', 40, 400)], 6)] },
      rnd: { blocks: [block(2457, 969, [line(t.rnd, 40, 800), line('$value', 40, 400)], 6)] },
      sga: { blocks: [block(2457, 1177, [line(t.sga, zh ? 36 : 40, 800), line('$value', 40, 400)], 6)] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'micron-q1-fy26',
    name: 'Micron · Q1 FY26',
    company: 'Micron',
    meta: {
      company: 'Micron', title: 'Micron Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Nov. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/micron-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 190, titleSize: 122, titleWeight: 800, titleTextLength: 2148,
      periodX: 1840, periodY: 1205, periodNoteY: 1246, periodAnchor: 'middle',
      logoWidth: 700, logoHeight: 240, logoX: 700, logoY: 180, logoViewBox: '0 0 300 100', logoSvg: LOGO,
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
    annotationsSvg: annotations,
    layout: {
      scale: 28.7,
      nodes: {
        cloud_memory: { x: 401, y: 491, width: 71, height: 150 },
        core_data_center: { x: 401, y: 772, width: 71, height: 67 },
        mobile_client: { x: 401, y: 980, width: 71, height: 120 },
        automotive_embedded: { x: 401, y: 1247, width: 71, height: 47 },
        revenue: { x: 868, y: 714, width: 70, height: 390 },
        gross_profit: { x: 1335, y: 619, width: 71, height: 217 },
        cost_of_revenue: { x: 1335, y: 1025, width: 71, height: 170 },
        operating_profit: { x: 1803, y: 540, width: 70, height: 174 },
        operating_expenses: { x: 1803, y: 891, width: 70, height: 40 },
        net_profit: { x: 2269, y: 458, width: 71, height: 149 },
        tax: { x: 2269, y: 742, width: 71, height: 22 },
        other_non_operating: { x: 2269, y: 867, width: 71, height: 3 },
        rnd: { x: 2269, y: 985, width: 71, height: 31 },
        sga: { x: 2269, y: 1213, width: 71, height: 7 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'cloud_memory', col: 0, order: 0, type: 'source', label: 'Cloud Memory', value: 5.3, notes: ['+100% Y/Y', '55% operating margin'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'core_data_center', col: 0, order: 1, type: 'source', label: 'Core Data Center', value: 2.4, notes: ['+4% Y/Y', '37% operating margin'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'mobile_client', col: 0, order: 2, type: 'source', label: 'Mobile & Client', value: 4.3, notes: ['+63% Y/Y', '47% operating margin'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'automotive_embedded', col: 0, order: 3, type: 'source', label: ['Automotive', '& Embedded'], value: 1.7, notes: ['+49% Y/Y', '36% operating margin'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 13.6, notes: ['+57% Y/Y'], color: BLACK, labelColor: MAGENTA },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 7.6, notes: ['56% margin', '+18pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.0, valueText: '($6.0B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 6.1, notes: ['45% margin', '+20pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.5 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 5.2, notes: ['38% margin', '+17pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.8 },
      { id: 'other_non_operating', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.1 },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 1.2 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.3 },
    ],
    links: [
      { source: 'cloud_memory', target: 'revenue', value: 5.3, sourceWidth: 150, targetWidth: 151, y0: 566, y1: 789.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'core_data_center', target: 'revenue', value: 2.4, sourceWidth: 67, targetWidth: 68, y0: 805.5, y1: 899, sourceOrder: 0, targetOrder: 1 },
      { source: 'mobile_client', target: 'revenue', value: 4.3, sourceWidth: 120, targetWidth: 122, y0: 1040, y1: 994, sourceOrder: 0, targetOrder: 2 },
      { source: 'automotive_embedded', target: 'revenue', value: 1.7, sourceWidth: 47, targetWidth: 49, y0: 1270.5, y1: 1079.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 7.6, sourceWidth: 217, targetWidth: 217, y0: 822.5, y1: 727.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.0, sourceWidth: 173, targetWidth: 170, y0: 1017.5, y1: 1110, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 6.1, sourceWidth: 174, targetWidth: 174, y0: 706, y1: 627, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.5, sourceWidth: 43, targetWidth: 40, y0: 814.5, y1: 911, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 5.2, sourceWidth: 149, targetWidth: 149, y0: 614.5, y1: 532.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.8, sourceWidth: 22, targetWidth: 22, y0: 700, y1: 753, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_non_operating', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 712.5, y1: 868.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.2, sourceWidth: 32, targetWidth: 31, y0: 907, y1: 1000.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 8, targetWidth: 7, y0: 927, y1: 1216.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Micron · 2026 财年第一季度',
        meta: { title: 'Micron 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2025 年 11 月', titleTextLength: 1500 },
        nodes: {
          cloud_memory: { label: '云内存', notes: ['同比 +100%', '营业利润率 55%'] },
          core_data_center: { label: '核心数据中心', notes: ['同比 +4%', '营业利润率 37%'] },
          mobile_client: { label: '移动与客户端', notes: ['同比 +63%', '营业利润率 47%'] },
          automotive_embedded: { label: '汽车与嵌入式', notes: ['同比 +49%', '营业利润率 36%'] },
          revenue: { label: '收入', notes: ['同比 +57%'] }, gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 +18 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 45%', '同比 +20 个百分点'] },
          operating_expenses: { label: '营业费用' }, net_profit: { label: '净利润', notes: ['利润率 38%', '同比 +17 个百分点'] },
          tax: { label: '税费' }, other_non_operating: { label: '其他' }, rnd: { label: '研发' }, sga: { label: '销售及行政' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
