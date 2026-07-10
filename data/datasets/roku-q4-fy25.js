/* Roku — Q4 FY25 income statement ($M). Fixed, source-measured Sankey. */
(function () {
  const TITLE = '#16527a';
  const NOTE = '#666666';
  const PURPLE = '#711bb3';
  const PURPLE_LINK = '#af8bd5';
  const GREEN = '#2ca42a';
  const GREEN_LABEL = '#008f48';
  const GREEN_LINK = '#9bd39a';
  const RED = '#df0000';
  const RED_LABEL = '#991600';
  const RED_LINK = '#e18486';
  const CARD = '#721bb3';

  const block = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="132" y="1187" width="480" height="152" rx="44" fill="${CARD}"/>
      <text x="372" y="1237" text-anchor="middle" font-size="32" font-weight="800" fill="#ffffff">FY25 Streaming hours</text>
      <text x="372" y="1280" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">146B</text>
      <text x="372" y="1318" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">+15% Y/Y</text>
      <g class="sankey-interactive-annotation" data-node="other" data-link-numerator="other" data-link-denominator="net_profit" data-link-anchor-x="2268" data-link-anchor-y="365">
        <path d="M2254 401.5 C2268 401.5 2268 327.5 2281 327.5" fill="none" stroke="${GREEN_LINK}" stroke-width="5"/>
        <rect x="2142" y="390" width="122" height="110" fill="transparent"/>
      </g>
    </g>`;
  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="132" y="1187" width="480" height="152" rx="44" fill="${CARD}"/>
      <text x="372" y="1237" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">2025 财年流媒体观看时长</text>
      <text x="372" y="1280" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">146B</text>
      <text x="372" y="1318" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">同比 +15%</text>
      <g class="sankey-interactive-annotation" data-node="other" data-link-numerator="other" data-link-denominator="net_profit" data-link-anchor-x="2268" data-link-anchor-y="365">
        <path d="M2254 401.5 C2268 401.5 2268 327.5 2281 327.5" fill="none" stroke="${GREEN_LINK}" stroke-width="5"/>
        <rect x="2142" y="390" width="122" height="110" fill="transparent"/>
      </g>
    </g>`;

  const labels = {
    platform: { blocks: [
      block(449, 458, 'middle', [line('$value', 40, 400), line('+18% Y/Y', 29, 400, NOTE)]),
      block(244, 675, 'middle', [line('Platform', 40, 800)]),
      block(244, 728, 'middle', [line('53% gross margin', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)]),
    ] },
    devices: { blocks: [
      block(449, 953, 'middle', [line('$value', 40, 400), line('+3% Y/Y', 29, 400, NOTE)]),
      block(244, 1032, 'middle', [line('Devices', 40, 800)]),
      block(244, 1081, 'middle', [line('(23%) gross margin', 29, 400, NOTE), line('+5pp Y/Y', 29, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(916, 534, 'middle', [line('Revenue', 40, 800), line('$value', 40, 400), line('+16% Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1384, 365, 'middle', [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('44% margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1384, 1100, 'middle', [line('Cost of', 40, 800, RED_LABEL), line('revenue', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)])] },
    operating_profit: { blocks: [block(1850, 257, 'middle', [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('5% margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1850, 817, 'middle', [line('Operating', 40, 800, RED_LABEL), line('expenses', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)])] },
    net_profit: { blocks: [block(2460, 297, 'middle', [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL)])] },
    other: { blocks: [block(2203, 425, 'middle', [line('Other', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)])] },
    tax: { blocks: [block(2460, 535, 'middle', [line('Tax', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    platform_cost: { blocks: [block(1684, 1000, 'start', [line('Platform', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    player_cost: { blocks: [block(1684, 1218, 'start', [line('Player', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    sm: { blocks: [block(2460, 817, 'middle', [line('S&M', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('18% of revenue', 29, 400, NOTE), line('(4pp) Y/Y', 29, 400, NOTE)])] },
    rnd: { blocks: [block(2460, 1030, 'middle', [line('R&D', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('13% of revenue', 29, 400, NOTE), line('(2pp) Y/Y', 29, 400, NOTE)])] },
    ga: { blocks: [block(2460, 1241, 'middle', [line('G&A', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('7% of revenue', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)])] },
  };

  const labelsZh = {
    platform: { blocks: [
      block(449, 458, 'middle', [line('$value', 40, 400), line('同比 +18%', 29, 400, NOTE)]),
      block(244, 675, 'middle', [line('平台', 40, 800)]),
      block(244, 728, 'middle', [line('毛利率 53%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)]),
    ] },
    devices: { blocks: [
      block(449, 953, 'middle', [line('$value', 40, 400), line('同比 +3%', 29, 400, NOTE)]),
      block(244, 1032, 'middle', [line('设备', 40, 800)]),
      block(244, 1081, 'middle', [line('毛利率 (23%)', 29, 400, NOTE), line('同比 +5 个百分点', 29, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(916, 534, 'middle', [line('收入', 40, 800), line('$value', 40, 400), line('同比 +16%', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1384, 365, 'middle', [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 44%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1384, 1100, 'middle', [line('收入', 40, 800, RED_LABEL), line('成本', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)])] },
    operating_profit: { blocks: [block(1850, 257, 'middle', [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 5%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1850, 817, 'middle', [line('营业', 40, 800, RED_LABEL), line('费用', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)])] },
    net_profit: { blocks: [block(2460, 297, 'middle', [line('净利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL)])] },
    other: { blocks: [block(2203, 425, 'middle', [line('其他', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)])] },
    tax: { blocks: [block(2460, 535, 'middle', [line('税费', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    platform_cost: { blocks: [block(1684, 1000, 'start', [line('平台', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    player_cost: { blocks: [block(1684, 1218, 'start', [line('播放器', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    sm: { blocks: [block(2480, 817, 'middle', [line('销售与市场', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 18%', 29, 400, NOTE), line('同比 (4 个百分点)', 29, 400, NOTE)])] },
    rnd: { blocks: [block(2480, 1030, 'middle', [line('研发', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 13%', 29, 400, NOTE), line('同比 (2 个百分点)', 29, 400, NOTE)])] },
    ga: { blocks: [block(2480, 1241, 'middle', [line('一般及行政', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 7%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'roku-q4-fy25',
    name: 'Roku · Q4 FY25',
    company: 'Roku',
    meta: {
      company: 'Roku',
      title: 'Roku Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/roku-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2070,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/roku/company-wordmark.png', x: 654, y: 296, width: 494, height: 165 },
      { key: 'platform-tv-screen', href: 'data/assets/raster-annotations/roku/platform-tv-screen.png', x: 136, y: 522, width: 198, height: 125 },
      { key: 'devices-remote-cluster', href: 'data/assets/raster-annotations/roku/devices-remote-cluster.png', x: 120, y: 918, width: 230, height: 104 },
    ],
    layout: {
      scale: 0.196,
      nodes: {
        platform: { x: 412, y: 547, width: 74, height: 239 },
        devices: { x: 412, y: 1044, width: 74, height: 36 },
        revenue: { x: 880, y: 675, width: 73, height: 273 },
        gross_profit: { x: 1348, y: 543, width: 72, height: 119 },
        cost_of_revenue: { x: 1348, y: 924, width: 72, height: 154 },
        operating_profit: { x: 1813, y: 438, width: 73, height: 13 },
        operating_expenses: { x: 1813, y: 688, width: 73, height: 107 },
        net_profit: { x: 2281, y: 320, width: 73, height: 15 },
        other: { x: 2152, y: 399, width: 102, height: 5 },
        tax: { x: 2281, y: 565, width: 73, height: 2 },
        platform_cost: { x: 1575, y: 978, width: 73, height: 113 },
        player_cost: { x: 1575, y: 1235, width: 73, height: 41 },
        sm: { x: 2281, y: 826, width: 73, height: 51 },
        rnd: { x: 2281, y: 1051, width: 73, height: 37 },
        ga: { x: 2281, y: 1272, width: 73, height: 20 },
      },
      labels,
    },
    nodes: [
      { id: 'platform', col: 0, order: 0, type: 'source', label: 'Platform', value: 1224, valueText: '$1,224M', notes: ['+18% Y/Y', '53% gross margin', '(1pp) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'devices', col: 0, order: 1, type: 'source', label: 'Devices', value: 171, valueText: '$171M', notes: ['+3% Y/Y', '(23%) gross margin', '+5pp Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1395, valueText: '$1,395M', notes: ['+16% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 607, valueText: '$607M', notes: ['44% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 788, valueText: '($788M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 66, valueText: '$66M', notes: ['5% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 541, valueText: '($541M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 81, valueText: '$81M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 26, valueText: '$26M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 11, valueText: '($11M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'platform_cost', col: 4, order: 1, type: 'cost', label: 'Platform', value: 577, valueText: '($577M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'player_cost', col: 4, order: 2, type: 'cost', label: 'Player', value: 211, valueText: '($211M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 255, valueText: '($255M)', notes: ['18% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 185, valueText: '($185M)', notes: ['13% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 101, valueText: '($101M)', notes: ['7% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'platform', target: 'revenue', value: 1224, width: 239, targetOrder: 0 },
      { source: 'devices', target: 'revenue', value: 171, width: 34, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 607, width: 119, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 788, width: 154, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 66, width: 13, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 541, width: 106, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 66, sourceWidth: 11, targetWidth: 15, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 11, sourceWidth: 2, targetWidth: 2, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 26, width: 0, sourceWidth: 0, targetWidth: 0, y0: 401.5, y1: 327.5, interactionOnly: true, curve: { x0: 2254, x1: 2281, c1x: 2268, c1y: 401.5, c2x: 2268, c2y: 327.5 } },
      { source: 'cost_of_revenue', target: 'platform_cost', value: 577, width: 113, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'player_cost', value: 211, width: 41, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 255, width: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 185, width: 37, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 101, width: 20, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Roku · 2025 财年第四季度',
        meta: { title: 'Roku 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月 31 日的季度' },
        annotationsSvg: annotationsZh,
        nodes: {
          platform: { label: '平台', notes: ['同比 +18%', '毛利率 53%', '同比 (1 个百分点)'] },
          devices: { label: '设备', notes: ['同比 +3%', '毛利率 (23%)', '同比 +5 个百分点'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 44%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润' }, other: { label: '其他' }, tax: { label: '税费' },
          platform_cost: { label: '平台' }, player_cost: { label: '播放器' },
          sm: { label: '销售与市场', notes: ['占收入 18%', '同比 (4 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 13%', '同比 (2 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 7%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
