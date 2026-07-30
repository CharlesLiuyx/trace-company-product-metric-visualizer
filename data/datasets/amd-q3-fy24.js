/* AMD — Q3 FY24 income statement ($B), reconstructed as a measured fixed layout. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#4a8397';
  const BLUE_LINK = '#a6c0c9';
  const ORANGE = '#e26301';
  const ORANGE_LABEL = '#ed6a00';
  const ORANGE_LINK = '#eab285';
  const MAGENTA = '#b2002a';
  const MAGENTA_LABEL = '#bd0034';
  const MAGENTA_LINK = '#d48598';
  const TEAL = '#0b5366';
  const TEAL_LABEL = '#075d6d';
  const TEAL_LINK = '#8aaab3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g data-typography-role="brand">
        ${svgIcon('amdDataCenterCluster', 58, 334, 188, 306, '0 0 197 325')}
        ${svgIcon('amdRyzenWordmark', 37, 724, 230, 138, '0 0 232 139')}
        ${svgIcon('amdRadeonBadge', 63, 960, 170, 139, '0 0 195 160')}
        ${svgIcon('amdXilinxWordmark', 55, 1182, 205, 69, '0 0 226 76')}
      </g>
      <g class="sankey-interactive-annotation"
        data-node="other"
        data-link-numerator="other"
        data-link-denominator="net_profit"
        data-link-anchor-x="2251"
        data-link-anchor-y="326">
        <path d="M2183 305H2251C2282 305 2288 349 2319 349"
          fill="none" stroke="${GREEN}" stroke-width="1"/>
        <text x="2217" y="244" text-anchor="middle" font-size="31"
          font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
        <text x="2217" y="285" text-anchor="middle" font-size="31"
          font-weight="400" fill="${GREEN_LABEL}">$20M</text>
      </g>
      <g class="sankey-interactive-annotation"
        data-node="tax_benefit"
        data-link-numerator="tax_benefit"
        data-link-denominator="net_profit"
        data-link-anchor-x="2251"
        data-link-anchor-y="418">
        <path d="M2181 453H2251C2282 453 2288 383 2319 383"
          fill="none" stroke="${GREEN}" stroke-width="1"/>
        <text x="2217" y="498" text-anchor="middle" font-size="31"
          font-weight="800" fill="${GREEN_LABEL}">${zh ? '税收收益' : 'Tax'}</text>
        <text x="2217" y="539" text-anchor="middle" font-size="31"
          font-weight="400" fill="${GREEN_LABEL}">$27M</text>
      </g>
    </g>`;

  const line = (text, size, weight = 400, color = undefined) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8, semanticRole = '') => ({
    x,
    top,
    anchor,
    lineGap,
    lines,
    ...(semanticRole ? { semanticRole } : {}),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q3-fy24',
    name: 'AMD · Q3 FY24',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q3 FY24 Income Statement',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2021,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 430,
      logoHeight: 126,
      logoY: 315,
      logoViewBox: '0 0 468 138',
      logoSvg: BUSINESS_ICONS.amdCompanyWordmark || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 46.34,
      routes: {
        other: { x: 2251, y: 305, width: 0, height: 1 },
        tax_benefit: { x: 2251, y: 453, width: 0, height: 1 },
      },
      nodes: {
        data_center: { x: 565, y: 455, width: 67, height: 163 },
        client: { x: 565, y: 783, width: 67, height: 86 },
        gaming: { x: 565, y: 1027, width: 67, height: 19 },
        embedded: { x: 565, y: 1227, width: 67, height: 41 },
        revenue: { x: 1004, y: 661, width: 66, height: 316 },
        gross_profit: { x: 1442, y: 537, width: 67, height: 159 },
        cost_of_revenue: { x: 1442, y: 949, width: 67, height: 156 },
        operating_profit: { x: 1879, y: 446, width: 66, height: 31 },
        operating_expenses: { x: 1879, y: 678, width: 66, height: 125 },
        net_profit: { x: 2319, y: 349, width: 67, height: 34 },
        rnd: { x: 2319, y: 774, width: 67, height: 74 },
        sga: { x: 2319, y: 1034, width: 67, height: 31 },
        amortization: { x: 2319, y: 1246, width: 67, height: 14 },
      },
      labels: {
        data_center: { blocks: [
          block(592, 364, [line('$value', 39), line('+122% Y/Y', 28, 400, NOTE)], 'middle', 10),
          block(528, 498, [line('Data Center', 40, 800), line('29% operating margin', 28, 400, NOTE), line('+10pp Y/Y', 28, 400, NOTE)], 'end', 9),
        ] },
        client: { blocks: [
          block(588, 691, [line('$value', 39), line('+29% Y/Y', 28, 400, NOTE)], 'middle', 10),
          block(524, 777, [line('Client', 40, 800)], 'end', 8, 'top-aligned-side-label'),
          block(523, 827, [line('15% operating margin', 28, 400, NOTE), line('+5pp Y/Y', 28, 400, NOTE)], 'end'),
        ] },
        gaming: { blocks: [
          block(590, 933, [line('$value', 39), line('(69%) Y/Y', 28, 400, NOTE)], 'middle', 10),
          block(526, 1008, [line('Gaming', 40, 800)], 'end'),
          block(525, 1060, [line('3% operating margin', 28, 400, NOTE), line('(11pp) Y/Y', 28, 400, NOTE)], 'end'),
        ] },
        embedded: { blocks: [
          block(606, 1135, [line('$value', 39), line('(25%) Y/Y', 28, 400, NOTE)], 'middle', 10),
          block(542, 1205, [line('Embedded', 40, 800)], 'end', 8, 'top-aligned-side-label'),
          block(541, 1257, [line('40% operating margin', 28, 400, NOTE), line('(9pp) Y/Y', 28, 400, NOTE)], 'end'),
        ] },
        revenue: { blocks: [block(1034, 515, [line('Revenue', 40, 800), line('$value', 39), line('+18% Y/Y', 28, 400, NOTE)], 'middle', 10)] },
        gross_profit: { blocks: [block(1476, 358, [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('50% margin', 28, 400, NOTE), line('+3pp Y/Y', 28, 400, NOTE)], 'middle', 9)] },
        cost_of_revenue: { blocks: [block(1471, 1127, [line('Cost of', 36, 800), line('revenue', 36, 800), line('$value', 35)], 'middle')] },
        operating_profit: { blocks: [block(1911, 271, [line('Operating profit', 40, 800), line('$value', 39), line('11% margin', 28, 400, NOTE), line('+7pp Y/Y', 28, 400, NOTE)], 'middle', 9)] },
        operating_expenses: { blocks: [block(1909, 824, [line('Operating', 38, 800), line('expenses', 38, 800), line('$value', 37)], 'middle')] },
        net_profit: { blocks: [block(2394, 327, [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('11% margin', 28, 400, NOTE), line('+6pp Y/Y', 28, 400, NOTE)], 'start', 9)] },
        rnd: { blocks: [block(2412, 774, [line('Research &', 31, 800), line('Development', 31, 800), line('$value', 30), line('24% of revenue', 28, 400, NOTE), line('(2pp) Y/Y', 28, 400, NOTE)], 'start')] },
        sga: { blocks: [block(2406, 990, [line('Sales, General', 31, 800), line('& Admin', 31, 800), line('$value', 30), line('11% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)], 'start')] },
        amortization: { blocks: [block(2409, 1199, [line('Amortization', 31, 800), line('of intangibles', 31, 800), line('$value', 30), line('5% of revenue', 28, 400, NOTE), line('(3pp) Y/Y', 28, 400, NOTE)], 'start')] },
        other: { blocks: [] },
        tax_benefit: { blocks: [] },
      },
    },
    nonNodeMetrics: [
      { id: 'other', representation: 'flow', label: 'Other', value: 0.020, valueText: '$20M', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'tax_benefit', representation: 'flow', label: 'Tax', value: 0.027, valueText: '$27M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 3.549, notes: ['+122% Y/Y', '29% operating margin', '+10pp Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 1.881, notes: ['+29% Y/Y', '15% operating margin', '+5pp Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 0.462, notes: ['(69%) Y/Y', '3% operating margin', '(11pp) Y/Y'], color: MAGENTA, labelColor: MAGENTA_LABEL, linkTint: MAGENTA_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 0.927, notes: ['(25%) Y/Y', '40% operating margin', '(9pp) Y/Y'], color: TEAL, labelColor: TEAL_LABEL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6.819, notes: ['+18% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.419, notes: ['50% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.400 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.724, notes: ['11% margin', '+7pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.709 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.771, notes: ['11% margin', '+6pp Y/Y'] },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: ['Research &', 'Development'], value: 1.636, notes: ['24% of revenue', '(2pp) Y/Y'] },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.721, notes: ['11% of revenue', '+1pp Y/Y'] },
      { id: 'amortization', col: 5, order: 3, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.352, notes: ['5% of revenue', '(3pp) Y/Y'] },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 3.549, sourceWidth: 163, targetWidth: 163, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 1.881, sourceWidth: 86, targetWidth: 86, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 0.462, sourceWidth: 19, targetWidth: 20, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 0.927, sourceWidth: 41, targetWidth: 47, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 3.419, sourceWidth: 159, targetWidth: 159, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.400, sourceWidth: 156, targetWidth: 156, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.724, sourceWidth: 33, targetWidth: 31, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.709, sourceWidth: 126, targetWidth: 125, sourceOrder: 1, targetOrder: 0 },
      { sourceRoute: 'other', target: 'net_profit', value: 0.020, sourceWidth: 1, targetWidth: 1, y0: 305, y1: 349.5, targetOrder: 0, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.724, sourceWidth: 31, targetWidth: 32, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { sourceRoute: 'tax_benefit', target: 'net_profit', value: 0.027, sourceWidth: 1, targetWidth: 1, y0: 453, y1: 382.5, targetOrder: 2, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.636, sourceWidth: 74, targetWidth: 74, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.721, sourceWidth: 33, targetWidth: 31, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.352, sourceWidth: 18, targetWidth: 14, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'AMD · 2024 财年第三季度',
        meta: {
          title: 'AMD 2024 财年第三季度利润表',
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          titleTextLength: 1820,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { other: { label: '其他' }, tax_benefit: { label: '税收收益' } },
        layout: {
          labels: {
            data_center: { blocks: [
              block(592, 364, [line('$value', 39), line('同比 +122%', 28, 400, NOTE)], 'middle', 10),
              block(528, 498, [line('数据中心', 40, 800), line('营业利润率 29%', 28, 400, NOTE), line('同比 +10 个百分点', 28, 400, NOTE)], 'end', 9),
            ] },
            client: { blocks: [
              block(588, 691, [line('$value', 39), line('同比 +29%', 28, 400, NOTE)], 'middle', 10),
              block(524, 777, [line('客户端', 40, 800)], 'end', 8, 'top-aligned-side-label'),
              block(523, 827, [line('营业利润率 15%', 28, 400, NOTE), line('同比 +5 个百分点', 28, 400, NOTE)], 'end'),
            ] },
            gaming: { blocks: [
              block(590, 933, [line('$value', 39), line('同比 (69%)', 28, 400, NOTE)], 'middle', 10),
              block(526, 1008, [line('游戏', 40, 800)], 'end'),
              block(525, 1060, [line('营业利润率 3%', 28, 400, NOTE), line('同比 (11 个百分点)', 28, 400, NOTE)], 'end'),
            ] },
            embedded: { blocks: [
              block(606, 1135, [line('$value', 39), line('同比 (25%)', 28, 400, NOTE)], 'middle', 10),
              block(542, 1205, [line('嵌入式', 40, 800)], 'end', 8, 'top-aligned-side-label'),
              block(541, 1257, [line('营业利润率 40%', 28, 400, NOTE), line('同比 (9 个百分点)', 28, 400, NOTE)], 'end'),
            ] },
            revenue: { blocks: [block(1034, 515, [line('收入', 40, 800), line('$value', 39), line('同比 +18%', 28, 400, NOTE)], 'middle', 10)] },
            gross_profit: { blocks: [block(1476, 358, [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 50%', 28, 400, NOTE), line('同比 +3 个百分点', 28, 400, NOTE)], 'middle', 9)] },
            cost_of_revenue: { blocks: [block(1471, 1127, [line('收入', 36, 800), line('成本', 36, 800), line('$value', 35)], 'middle')] },
            operating_profit: { blocks: [block(1911, 271, [line('营业利润', 40, 800), line('$value', 39), line('利润率 11%', 28, 400, NOTE), line('同比 +7 个百分点', 28, 400, NOTE)], 'middle', 9)] },
            operating_expenses: { blocks: [block(1909, 824, [line('运营', 38, 800), line('费用', 38, 800), line('$value', 37)], 'middle')] },
            net_profit: { blocks: [block(2394, 327, [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 11%', 28, 400, NOTE), line('同比 +6 个百分点', 28, 400, NOTE)], 'start', 9)] },
            rnd: { blocks: [block(2412, 774, [line('研究与', 31, 800), line('开发', 31, 800), line('$value', 30), line('占收入 24%', 28, 400, NOTE), line('同比 (2 个百分点)', 28, 400, NOTE)], 'start')] },
            sga: { blocks: [block(2406, 990, [line('销售、一般', 31, 800), line('及行政', 31, 800), line('$value', 30), line('占收入 11%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)], 'start')] },
            amortization: { blocks: [block(2409, 1199, [line('无形资产', 31, 800), line('摊销', 31, 800), line('$value', 30), line('占收入 5%', 28, 400, NOTE), line('同比 (3 个百分点)', 28, 400, NOTE)], 'start')] },
            other: { blocks: [] },
            tax_benefit: { blocks: [] },
          },
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +122%', '营业利润率 29%', '同比 +10 个百分点'] },
          client: { label: '客户端', notes: ['同比 +29%', '营业利润率 15%', '同比 +5 个百分点'] },
          gaming: { label: '游戏', notes: ['同比 (69%)', '营业利润率 3%', '同比 (11 个百分点)'] },
          embedded: { label: '嵌入式', notes: ['同比 (25%)', '营业利润率 40%', '同比 (9 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +7 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +6 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 (2 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 11%', '同比 +1 个百分点'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 5%', '同比 (3 个百分点)'] },
        },
      },
    },
  });
})();
