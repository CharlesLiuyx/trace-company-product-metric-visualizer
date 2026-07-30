/* AMD · Q2 FY24 income statement ($B), reconstructed from the Source PNG. */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const BLUE = '#4a8397';
  const BLUE_LINK = '#a6c0c9';
  const ORANGE = '#e26301';
  const ORANGE_LABEL = '#ed6a00';
  const ORANGE_LINK = '#eab285';
  const MAGENTA = '#b2002a';
  const MAGENTA_LABEL = '#bd0034';
  const MAGENTA_LINK = '#d78299';
  const TEAL = '#0b5366';
  const TEAL_LABEL = '#075d6d';
  const TEAL_LINK = '#9ab9c2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#971100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const otherIncomeGuide = (localized) => `
    <g font-family="Noto Sans,Arial,sans-serif" class="sankey-interactive-annotation" data-node="other_income">
      <line x1="2137" y1="372" x2="2204" y2="372" stroke="${GREEN}" stroke-width="2"/>
      <text x="2171" y="309" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${localized ? '其他' : 'Other'}</text>
      <text x="2171" y="351" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$37M</text>
    </g>`;

  const annotations = (localized) => `
    <g data-typography-role="brand">
      ${svgIcon('amdDataCenterCluster', 45, 424, 190, 151, '0 0 197 325')}
      ${svgIcon('amdRyzenWordmark', 29, 697, 205, 127, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 53, 924, 165, 141, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 35, 1144, 205, 69, '0 0 226 76')}
    </g>
    ${otherIncomeGuide(localized)}`;

  const labels = (localized) => {
    const t = localized ? {
      dataCenter: '数据中心', client: '客户端', gaming: '游戏', embedded: '嵌入式',
      revenue: '收入', grossProfit: '毛利润', costOfRevenue: ['收入', '成本'],
      operatingProfit: '营业利润', operatingExpenses: ['营业', '费用'], netProfit: '净利润',
      tax: '税费', rnd: ['研究与', '开发'], sga: ['销售、一般', '及行政'],
      amortization: ['无形资产', '摊销'],
      dataCenterNotes: ['同比 +115%', '营业利润率 26%'],
      clientNotes: ['同比 +49%', '营业利润率 6%'],
      gamingNotes: ['同比 (59%)', '营业利润率 12%'],
      embeddedNotes: ['同比 (41%)', '营业利润率 40%'],
      revenueNote: '同比 +9%', grossNotes: ['利润率 49%', '同比 +3 个百分点'],
      operatingNotes: ['利润率 5%', '同比 +5 个百分点'],
      netNotes: ['利润率 5%', '同比 +4 个百分点'],
      rndNotes: ['占收入 27%', '同比 +0 个百分点'],
      sgaNotes: ['占收入 11%', '同比 +1 个百分点'],
      amortizationNotes: ['占收入 6%', '同比 (3 个百分点)'],
    } : {
      dataCenter: 'Data Center', client: 'Client', gaming: 'Gaming', embedded: 'Embedded',
      revenue: 'Revenue', grossProfit: 'Gross profit', costOfRevenue: ['Cost of', 'revenue'],
      operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit',
      tax: 'Tax', rnd: ['Research &', 'Development'], sga: ['Sales, General', '& Admin'],
      amortization: ['Amortization', 'of intangibles'],
      dataCenterNotes: ['+115% Y/Y', '26% operating margin'],
      clientNotes: ['+49% Y/Y', '6% operating margin'],
      gamingNotes: ['(59%) Y/Y', '12% operating margin'],
      embeddedNotes: ['(41%) Y/Y', '40% operating margin'],
      revenueNote: '+9% Y/Y', grossNotes: ['49% margin', '+3pp Y/Y'],
      operatingNotes: ['5% margin', '+5pp Y/Y'], netNotes: ['5% margin', '+4pp Y/Y'],
      rndNotes: ['27% of revenue', '+0pp Y/Y'], sgaNotes: ['11% of revenue', '+1pp Y/Y'],
      amortizationNotes: ['6% of revenue', '(3pp) Y/Y'],
    };
    return {
      data_center: { blocks: [
        { x: 566, top: 332, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: t.dataCenterNotes[0], size: 28, weight: 400, color: NOTE }] },
        { x: 520, top: 465, anchor: 'end', lineGap: 9, lines: [{ text: t.dataCenter, size: 40, weight: 800, ...(localized ? {} : { semanticRole: 'top-aligned-side-label' }) }, { text: t.dataCenterNotes[1], size: 30, weight: 400, color: NOTE }] },
      ] },
      client: { blocks: [
        { x: 566, top: 646, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: t.clientNotes[0], size: 28, weight: 400, color: NOTE }] },
        { x: 520, top: 743, anchor: 'end', lineGap: 9, lines: [{ text: t.client, size: 40, weight: 800, ...(localized ? {} : { semanticRole: 'top-aligned-side-label' }) }, { text: t.clientNotes[1], size: 33, weight: 400, color: NOTE }] },
      ] },
      gaming: { blocks: [
        { x: 566, top: 883, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: t.gamingNotes[0], size: 28, weight: 400, color: NOTE }] },
        { x: 520, top: 975, anchor: 'end', lineGap: 9, lines: [{ text: t.gaming, size: 40, weight: 800, ...(localized ? {} : { semanticRole: 'top-aligned-side-label' }) }, { text: t.gamingNotes[1], size: 30, weight: 400, color: NOTE }] },
      ] },
      embedded: { blocks: [
        { x: 566, top: 1074, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: t.embeddedNotes[0], size: 28, weight: 400, color: NOTE }] },
        { x: 520, top: 1170, anchor: 'end', lineGap: 9, lines: [{ text: t.embedded, size: 40, weight: 800, ...(localized ? {} : { semanticRole: 'top-aligned-side-label' }) }, { text: t.embeddedNotes[1], size: 31, weight: 400, color: NOTE }] },
      ] },
      revenue: { blocks: [{ x: 1011, top: 530, anchor: 'middle', lineGap: 10, lines: [{ text: t.revenue, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: t.revenueNote, size: 28, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1435, top: 399, anchor: 'middle', lineGap: 9, lines: [{ text: t.grossProfit, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: t.grossNotes[0], size: 28, weight: 400, color: NOTE }, { text: t.grossNotes[1], size: 28, weight: 400, color: NOTE }] }] },
      cost_of_revenue: { blocks: [{ x: 1439, top: 1105, anchor: 'middle', lineGap: 8, lines: [{ text: t.costOfRevenue[0], size: 36, weight: 800 }, { text: t.costOfRevenue[1], size: 36, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }] },
      operating_profit: { blocks: [{ x: 1882, top: 288, anchor: 'middle', lineGap: 9, lines: [{ text: t.operatingProfit, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: t.operatingNotes[0], size: 28, weight: 400, color: NOTE }, { text: t.operatingNotes[1], size: 28, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1880, top: 843, anchor: 'middle', lineGap: 8, lines: [{ text: t.operatingExpenses[0], size: 38, weight: 800 }, { text: t.operatingExpenses[1], size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
      other_income: { blocks: [] },
      net_profit: { blocks: [{ x: 2363, top: 356, anchor: 'start', lineGap: 9, lines: [{ text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: t.netNotes[0], size: 28, weight: 400, color: NOTE }, { text: t.netNotes[1], size: 28, weight: 400, color: NOTE }] }] },
      tax: { blocks: [{ x: 2458, top: 557, anchor: 'middle', lineGap: 8, lines: [{ text: t.tax, size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
      rnd: { blocks: [{ x: 2377, top: 737, anchor: 'start', lineGap: 8, lines: [{ text: t.rnd[0], size: 31, weight: 800 }, { text: t.rnd[1], size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: t.rndNotes[0], size: 28, weight: 400, color: NOTE }, { text: t.rndNotes[1], size: 28, weight: 400, color: NOTE }] }] },
      sga: { blocks: [{ x: 2372, top: 947, anchor: 'start', lineGap: 8, lines: [{ text: t.sga[0], size: 31, weight: 800 }, { text: t.sga[1], size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: t.sgaNotes[0], size: 28, weight: 400, color: NOTE }, { text: t.sgaNotes[1], size: 28, weight: 400, color: NOTE }] }] },
      amortization: { blocks: [{ x: 2377, top: 1153, anchor: 'start', lineGap: 8, lines: [{ text: t.amortization[0], size: 31, weight: 800 }, { text: t.amortization[1], size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: t.amortizationNotes[0], size: 28, weight: 400, color: NOTE }, { text: t.amortizationNotes[1], size: 28, weight: 400, color: NOTE }] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q2-fy24',
    name: 'AMD · Q2 FY24',
    company: 'AMD',
    meta: {
      company: 'AMD', title: 'AMD Q2 FY24 Income Statement', period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/amd-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2035,
      hidePeriodStamp: true, logoWidth: 430, logoHeight: 126, logoY: 277,
      logoViewBox: '0 0 468 138', logoSvg: BUSINESS_ICONS.amdCompanyWordmark || '',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: '#000000', label: '#000000' }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 55,
      routes: { other_income: { x: 2204, y: 372, width: 0, height: 1 } },
      nodes: {
        data_center: { x: 533, y: 425, width: 66, height: 154 }, client: { x: 533, y: 738, width: 66, height: 81 },
        gaming: { x: 533, y: 974, width: 66, height: 34 }, embedded: { x: 533, y: 1163, width: 66, height: 46 },
        revenue: { x: 978, y: 674, width: 65, height: 322 }, gross_profit: { x: 1401, y: 582, width: 67, height: 156 },
        cost_of_revenue: { x: 1406, y: 919, width: 67, height: 162 }, operating_profit: { x: 1849, y: 474, width: 66, height: 12 },
        operating_expenses: { x: 1847, y: 675, width: 65, height: 143 }, net_profit: { x: 2275, y: 393, width: 66, height: 13 },
        tax: { x: 2275, y: 597, width: 66, height: 1 }, rnd: { x: 2275, y: 748, width: 66, height: 86 },
        sga: { x: 2275, y: 961, width: 66, height: 34 }, amortization: { x: 2275, y: 1160, width: 66, height: 18 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [{ id: 'other_income', representation: 'flow', label: 'Other', value: 0.037, valueText: '$37M', type: 'profit', labelColor: GREEN_LABEL }],
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 2.834, notes: ['+115% Y/Y', '26% operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 1.492, notes: ['+49% Y/Y', '6% operating margin'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 0.648, notes: ['(59%) Y/Y', '12% operating margin'], color: MAGENTA, labelColor: MAGENTA_LABEL, linkTint: MAGENTA_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 0.861, notes: ['(41%) Y/Y', '40% operating margin'], color: TEAL, labelColor: TEAL_LABEL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.835, notes: ['+9% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.864, notes: ['49% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.971 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.269, notes: ['5% margin', '+5pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.605 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.265, notes: ['5% margin', '+4pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.041, valueText: '($41M)' },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'Development'], value: 1.583, notes: ['27% of revenue', '+0pp Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.65, notes: ['11% of revenue', '+1pp Y/Y'] },
      { id: 'amortization', col: 5, order: 4, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.372, notes: ['6% of revenue', '(3pp) Y/Y'] },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 2.834, sourceWidth: 154, targetWidth: 157, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 1.492, sourceWidth: 81, targetWidth: 83, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 0.648, sourceWidth: 34, targetWidth: 35, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 0.861, sourceWidth: 46, targetWidth: 47, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.864, sourceWidth: 156, targetWidth: 156, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.971, sourceWidth: 166, targetWidth: 162, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.269, sourceWidth: 13, targetWidth: 12, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.595, sourceWidth: 143, targetWidth: 143, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.228, sourceWidth: 11, targetWidth: 13, sourceOrder: 0, targetOrder: 1, y1: 399.5 },
      { source: 'operating_profit', target: 'tax', value: 0.041, sourceWidth: 1, targetWidth: 1, sourceOrder: 1, targetOrder: 0 },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.037, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.583, sourceWidth: 87, targetWidth: 86, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.65, sourceWidth: 36, targetWidth: 34, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.372, sourceWidth: 20, targetWidth: 18, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'AMD · 2024 财年第二季度',
        meta: { title: 'AMD 2024 财年第二季度利润表', period: '2024 财年第二季度', periodNote: '截至 2024 年 6 月' },
        annotationsSvg: annotations(true), nonNodeMetrics: { other_income: { label: '其他' } },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +115%', '营业利润率 26%'] },
          client: { label: '客户端', notes: ['同比 +49%', '营业利润率 6%'] },
          gaming: { label: '游戏', notes: ['同比 (59%)', '营业利润率 12%'] },
          embedded: { label: '嵌入式', notes: ['同比 (41%)', '营业利润率 40%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] }, gross_profit: { label: '毛利润', notes: ['利润率 49%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +5 个百分点'] },
          operating_expenses: { label: '营业费用' }, net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +4 个百分点'] },
          tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 27%', '同比 +0 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 11%', '同比 +1 个百分点'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 6%', '同比 (3 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
