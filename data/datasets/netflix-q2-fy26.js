/* ====================================================================
 * Netflix - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/netflix-q2-fy26.png as a fixed
 * d3-sankey layout. Financial values live in netflix.js.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NETFLIX_RED = '#e50914';

  function globePaths(region) {
    const paths = {
      ucan: `<path d="M22 34C30 24 39 20 50 23C55 28 58 34 58 43C50 45 44 43 38 40C33 47 27 48 21 43Z" fill="#1f7936"/><path d="M35 45C42 47 47 51 50 58C43 61 36 59 31 54Z" fill="#1f7936"/><path d="M57 60C65 61 70 66 73 73C63 74 57 70 54 64Z" fill="#b8b8b8"/>`,
      emea: `<path d="M33 32C43 23 60 24 68 36C60 39 55 42 51 49C45 45 39 43 33 45Z" fill="#1f7936"/><path d="M45 46C59 45 70 51 78 61C67 65 55 64 45 58Z" fill="#1f7936"/><path d="M36 49C44 54 45 63 42 73C33 68 29 60 30 52Z" fill="#1f7936"/><path d="M24 27C32 22 40 20 47 23C40 27 34 31 30 37Z" fill="#b8b8b8"/>`,
      latam: `<path d="M24 29C33 24 44 25 51 33C45 38 40 39 34 37C29 40 25 39 21 35Z" fill="#1f7936"/><path d="M48 38C60 41 68 50 70 61C62 65 55 62 51 54C45 51 41 48 39 42Z" fill="#1f7936"/><path d="M57 61C65 67 66 77 61 88C52 80 50 70 54 62Z" fill="#1f7936"/><path d="M26 23C38 17 52 18 64 26C56 28 49 28 42 25Z" fill="#b8b8b8"/>`,
      apac: `<path d="M21 30C35 18 56 17 72 27C64 35 50 35 41 31C33 36 26 38 19 36Z" fill="#1f7936"/><path d="M44 39C57 37 70 43 78 54C67 58 55 56 45 50Z" fill="#1f7936"/><path d="M55 62C66 61 75 66 79 76C66 81 55 77 50 68Z" fill="#1f7936"/><path d="M68 22C76 23 82 28 86 35C78 34 72 31 68 27Z" fill="#6ad94b"/>`,
    };
    return paths[region];
  }

  function globeIcon(x, y, size, region) {
    const scale = size / 100;
    return `<g transform="translate(${x} ${y}) scale(${scale})"><defs><radialGradient id="netflix-q2-globe-bg-${region}" cx="34%" cy="25%" r="70%"><stop offset="0" stop-color="#fff"/><stop offset=".62" stop-color="#f5f5f5"/><stop offset="1" stop-color="#d8d8d8"/></radialGradient><clipPath id="netflix-q2-globe-clip-${region}"><circle cx="50" cy="50" r="47"/></clipPath></defs><circle cx="50" cy="50" r="47" fill="url(#netflix-q2-globe-bg-${region})" stroke="#d5d5d5" stroke-width="1.5"/><g clip-path="url(#netflix-q2-globe-clip-${region})"><path d="M10 50H90M50 4C35 23 35 76 50 96M50 4C65 23 65 76 50 96M17 24C37 36 63 36 83 24M17 76C37 64 63 64 83 76" fill="none" stroke="#e2e2e2" stroke-width="1.6"/>${globePaths(region)}<path d="M11 25C24 5 54 -2 77 12" fill="none" stroke="#fff" stroke-width="7" opacity=".65"/><path d="M18 87C37 99 65 97 82 82" fill="none" stroke="#bdbdbd" stroke-width="4" opacity=".5"/></g></g>`;
  }

  const annotations = `<g font-family="Montserrat,Arial,sans-serif"><text x="564" y="405" font-family="Arial Black,Arial,sans-serif" font-size="195" font-weight="900" letter-spacing="4" fill="${NETFLIX_RED}" textLength="535" lengthAdjust="spacingAndGlyphs" data-typography-role="brand">NETFLIX</text>${globeIcon(80, 452, 88, 'ucan')}${globeIcon(80, 751, 88, 'emea')}${globeIcon(80, 984, 88, 'latam')}${globeIcon(84, 1214, 88, 'apac')}</g>`;
  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const labels = {
    ucan: { blocks: [{ x: 358, top: 312, anchor: 'middle', lineGap: 12, lines: [line('$value', 38, 400), line('+10% Y/Y', 27, 400, NOTE)] }, { x: 184, top: 472, anchor: 'start', lines: [line('UCAN', 39, 800)] }] },
    emea: { blocks: [{ x: 358, top: 625, anchor: 'middle', lineGap: 12, lines: [line('$value', 38, 400), line('+14% Y/Y', 27, 400, NOTE)] }, { x: 190, top: 762, anchor: 'start', lines: [line('EMEA', 39, 800)] }] },
    latam: { blocks: [{ x: 358, top: 900, anchor: 'middle', lineGap: 12, lines: [line('$value', 38, 400), line('+21% Y/Y', 27, 400, NOTE)] }, { x: 175, top: 1003, anchor: 'start', lines: [line('LATAM', 39, 800)] }] },
    apac: { blocks: [{ x: 358, top: 1125, anchor: 'middle', lineGap: 12, lines: [line('$value', 38, 400), line('+16% Y/Y', 27, 400, NOTE)] }, { x: 193, top: 1227, anchor: 'start', lines: [line('APAC', 39, 800)] }] },
    revenue: { blocks: [{ x: 825, top: 495, anchor: 'middle', lineGap: 13, lines: [line('Revenue', 40, 800), line('$value', 38, 400), line('+13% Y/Y', 27, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1288, top: 366, anchor: 'middle', lineGap: 12, lines: [line('Gross profit', 39, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('52% margin', 27, 400, NOTE), line('(0pp) Y/Y', 27, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1293, top: 1134, anchor: 'middle', lineGap: 9, lines: [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1763, top: 291, anchor: 'middle', lineGap: 11, lines: [line('Operating profit', 39, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('33% margin', 27, 400, NOTE), line('(1pp) Y/Y', 27, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1764, top: 862, anchor: 'middle', lineGap: 8, lines: [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: 2288, top: 377, anchor: 'start', lineGap: 11, lines: [line('Net profit', 39, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('27% margin', 27, 400, NOTE), line('(1pp) Y/Y', 27, 400, NOTE)] }] },
    tax: { blocks: [{ x: 2381, top: 601, anchor: 'middle', lineGap: 8, lines: [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    other: { blocks: [{ x: 2385, top: 715, anchor: 'middle', lineGap: 8, lines: [line('Other', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    technology_development: { blocks: [{ x: 2283, top: 839, anchor: 'start', lineGap: 8, lines: [line('Technology &', 31, 800, RED_LABEL), line('development', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('8% of revenue', 27, 400, NOTE), line('+1pp Y/Y', 27, 400, NOTE)] }] },
    marketing: { blocks: [{ x: 2304, top: 1062, anchor: 'start', lineGap: 8, lines: [line('Marketing', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('7% of revenue', 27, 400, NOTE), line('+0pp Y/Y', 27, 400, NOTE)] }] },
    ga: { blocks: [{ x: 2301, top: 1233, anchor: 'start', lineGap: 8, lines: [line('G&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('4% of revenue', 27, 400, NOTE), line('+0pp Y/Y', 27, 400, NOTE)] }] },
  };

  const zhLabels = {
    ucan: { blocks: [{ x: 358, top: 312, anchor: 'middle', lineGap: 12, lines: [line('$value', 38, 400), line('同比 +10%', 27, 400, NOTE)] }, { x: 318, top: 449, anchor: 'end', lineGap: 8, lines: [line('美国和', 39, 800), line('加拿大', 39, 800)] }] },
    emea: { blocks: [{ x: 358, top: 625, anchor: 'middle', lineGap: 12, lines: [line('$value', 38, 400), line('同比 +14%', 27, 400, NOTE)] }, { x: 318, top: 740, anchor: 'end', lineGap: 8, lines: [line('欧洲、中东', 39, 800), line('和非洲', 39, 800)] }] },
    latam: { blocks: [{ x: 358, top: 900, anchor: 'middle', lineGap: 12, lines: [line('$value', 38, 400), line('同比 +21%', 27, 400, NOTE)] }, { x: 318, top: 1003, anchor: 'end', lines: [line('拉美', 39, 800)] }] },
    apac: { blocks: [{ x: 358, top: 1125, anchor: 'middle', lineGap: 12, lines: [line('$value', 38, 400), line('同比 +16%', 27, 400, NOTE)] }, { x: 318, top: 1227, anchor: 'end', lines: [line('亚太', 39, 800)] }] },
    revenue: { blocks: [{ x: 825, top: 495, anchor: 'middle', lineGap: 13, lines: [line('收入', 40, 800), line('$value', 38, 400), line('同比 +13%', 27, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1288, top: 365, anchor: 'middle', lineGap: 12, lines: [line('毛利润', 39, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('利润率 52%', 27, 400, NOTE), line('同比 (0 个百分点)', 27, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1293, top: 1134, anchor: 'middle', lineGap: 9, lines: [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1763, top: 287, anchor: 'middle', lineGap: 11, lines: [line('营业利润', 39, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('利润率 33%', 27, 400, NOTE), line('同比 (1 个百分点)', 27, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1764, top: 861, anchor: 'middle', lineGap: 8, lines: [line('运营', 38, 800, RED_LABEL), line('费用', 38, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: 2288, top: 374, anchor: 'start', lineGap: 11, lines: [line('净利润', 39, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('利润率 27%', 27, 400, NOTE), line('同比 (1 个百分点)', 27, 400, NOTE)] }] },
    tax: { blocks: [{ x: 2381, top: 601, anchor: 'middle', lineGap: 8, lines: [line('税费', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    other: { blocks: [{ x: 2385, top: 715, anchor: 'middle', lineGap: 8, lines: [line('其他', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    technology_development: { blocks: [{ x: 2303, top: 841, anchor: 'start', lineGap: 8, lines: [line('技术与', 31, 800, RED_LABEL), line('开发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 8%', 27, 400, NOTE), line('同比 +1 个百分点', 27, 400, NOTE)] }] },
    marketing: { blocks: [{ x: 2308, top: 1058, anchor: 'start', lineGap: 8, lines: [line('市场营销', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 7%', 27, 400, NOTE), line('同比 +0 个百分点', 27, 400, NOTE)] }] },
    ga: { blocks: [{ x: 2308, top: 1228, anchor: 'start', lineGap: 8, lines: [line('管理费用', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 4%', 27, 400, NOTE), line('同比 +0 个百分点', 27, 400, NOTE)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'netflix-q2-fy26', name: 'Netflix - Q2 FY26', company: 'Netflix',
    meta: { company: 'Netflix', title: 'Netflix Q2 FY26 Income Statement', period: 'Q2 FY26', periodNote: 'Ending Jun. 2026', currency: '$', unit: 'B', decimals: 1, referenceImage: { src: 'input/processed/netflix-q2-fy26.png', width: 2667, height: 1500 }, titleX: 1333, titleY: 201, titleSize: 122, titleWeight: 800, titleTextLength: 2148, hidePeriodStamp: true },
    render: { width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } }, linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 38, note: 28, lineGap: 8 }, interfaceAudit: { mode: 'error' } },
    annotationsSvg: annotations,
    layout: {
      scale: 29.68,
      nodes: { ucan: { x: 323, y: 412, width: 71, height: 161 }, emea: { x: 323, y: 724, width: 71, height: 119 }, latam: { x: 323, y: 1002, width: 71, height: 45 }, apac: { x: 323, y: 1226, width: 71, height: 44 }, revenue: { x: 790, y: 647, width: 70, height: 374 }, gross_profit: { x: 1257, y: 556, width: 71, height: 193 }, cost_of_revenue: { x: 1257, y: 940, width: 71, height: 178 }, operating_profit: { x: 1727, y: 479, width: 70, height: 123 }, operating_expenses: { x: 1725, y: 779, width: 70, height: 68 }, net_profit: { x: 2191, y: 390, width: 71, height: 101 }, tax: { x: 2191, y: 638, width: 71, height: 18 }, other: { x: 2191, y: 759, width: 71, height: 3 }, technology_development: { x: 2191, y: 892, width: 71, height: 29 }, marketing: { x: 2191, y: 1083, width: 71, height: 23 }, ga: { x: 2191, y: 1259, width: 71, height: 12 } },
      labels,
    },
    nodes: [
      { id: 'ucan', col: 0, order: 0, type: 'source', label: 'UCAN', value: 5.4, notes: ['+10% Y/Y'] }, { id: 'emea', col: 0, order: 1, type: 'source', label: 'EMEA', value: 4.0, valueText: '$4.0B', notes: ['+14% Y/Y'] }, { id: 'latam', col: 0, order: 2, type: 'source', label: 'LATAM', value: 1.6, notes: ['+21% Y/Y'] }, { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.5, notes: ['+16% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.6, notes: ['+13% Y/Y'] }, { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.5, notes: ['52% margin', '(0pp) Y/Y'] }, { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.0, valueText: '($6.0B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4.2, notes: ['33% margin', '(1pp) Y/Y'] }, { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.3 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 3.4, notes: ['27% margin', '(1pp) Y/Y'] }, { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.7 }, { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.1 }, { id: 'technology_development', col: 4, order: 3, type: 'cost', label: ['Technology &', 'development'], value: 1.0, valueText: '($1.0B)', notes: ['8% of revenue', '+1pp Y/Y'] }, { id: 'marketing', col: 4, order: 4, type: 'cost', label: 'Marketing', value: 0.8, notes: ['7% of revenue', '+0pp Y/Y'] }, { id: 'ga', col: 4, order: 5, type: 'cost', label: 'G&A', value: 0.5, notes: ['4% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'ucan', target: 'revenue', value: 5.4, sourceWidth: 161, targetWidth: 161, y0: 492.5, y1: 727.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'emea', target: 'revenue', value: 4.0, sourceWidth: 119, targetWidth: 119, y0: 783.5, y1: 867.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'latam', target: 'revenue', value: 1.6, sourceWidth: 45, targetWidth: 48, y0: 1024.5, y1: 951, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'revenue', value: 1.5, sourceWidth: 44, targetWidth: 46, y0: 1248, y1: 998, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 6.5, sourceWidth: 194, targetWidth: 193, y0: 744, y1: 652.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.0, sourceWidth: 180, targetWidth: 178, y0: 931, y1: 1029, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.2, sourceWidth: 125, targetWidth: 123, y0: 618.5, y1: 540.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.3, sourceWidth: 68, targetWidth: 68, y0: 715, y1: 813, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.4, sourceWidth: 101, targetWidth: 101, y0: 529.5, y1: 440.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 18, targetWidth: 18, y0: 590, y1: 647, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 600.5, y1: 760.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_development', value: 1.0, sourceWidth: 30, targetWidth: 29, y0: 794, y1: 906.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 0.8, sourceWidth: 23, targetWidth: 23, y0: 820.5, y1: 1094.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.5, sourceWidth: 15, targetWidth: 12, y0: 839.5, y1: 1265, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: { zh: { name: 'Netflix · 2026 财年第二季度', meta: { title: 'Netflix 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月', titleSize: 112, titleTextLength: 1880 }, nodes: { ucan: { label: '美国和加拿大', notes: ['同比 +10%'] }, emea: { label: '欧洲、中东和非洲', notes: ['同比 +14%'] }, latam: { label: '拉美', notes: ['同比 +21%'] }, apac: { label: '亚太', notes: ['同比 +16%'] }, revenue: { label: '收入', notes: ['同比 +13%'] }, gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 (0 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 (1 个百分点)'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 27%', '同比 (1 个百分点)'] }, tax: { label: '税费' }, other: { label: '其他' }, technology_development: { label: '技术与开发', notes: ['占收入 8%', '同比 +1 个百分点'] }, marketing: { label: '市场营销', notes: ['占收入 7%', '同比 +0 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 4%', '同比 +0 个百分点'] } }, layout: { labels: zhLabels } } },
  });
})();
