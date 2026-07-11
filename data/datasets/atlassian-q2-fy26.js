/* ====================================================================
 * Atlassian - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/atlassian-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#0053ce';
  const BLUE_LIGHT = '#2681ff';
  const BLUE_TITLE = '#155077';
  const BLUE_LINK = '#85aae1';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2455;

  const atlassianLogo = `
    <g fill="${BLUE_LIGHT}">
      <path d="M149 10c5-10 20-10 25 0l79 160c4 8-2 17-11 17h-74c-6 0-11-3-14-8l-43-88c-3-6-3-13 0-19z"/>
    </g>
    <g fill="${BLUE}">
      <path d="M91 78c6-10 20-10 25 0l38 91c4 9-2 18-12 18H31c-10 0-16-11-11-19z"/>
    </g>
    <text x="136" y="230" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="31" font-weight="800" fill="${BLUE}">ATLASSIAN</text>`;

  const kpiCard = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="73" y="1193" width="543" height="162" rx="42" fill="#0051cc"/>
      <text x="344" y="1266" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${zh ? '云 ARR 超过 $10K 的客户' : 'Customers &gt; $10K Cloud ARR'}</text>
      <text x="344" y="1307" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">${zh ? '55K，同比 +12%' : '55K +12% Y/Y'}</text>
    </g>`;

  const labels = (zh) => {
    const text = zh ? {
      cloud: '云', cloudYoY: '同比 +26%',
      dataCenter: '数据中心', dataCenterYoY: '同比 +20%',
      marketplace: '市场与', services: '服务', marketplaceYoY: '同比 +8%',
      revenue: '收入', revenueYoY: '同比 +23%',
      grossProfit: '毛利润', margin: '利润率 85%', grossYoY: '同比 +2 个百分点',
      costOf: '收入', costRevenue: '成本',
      operating: '运营', loss: '亏损', lossMargin: '利润率 (3%)', lossYoY: '同比 +1 个百分点',
      operatingExpenses: '运营', expenses: '费用',
      rnd: '研发', rndPct: '占收入 52%', rndYoY: '同比 (1 个百分点)',
      sm: '销售与市场', smPct: '占收入 24%', smYoY: '同比 +3 个百分点',
      ga: '管理费用', gaPct: '占收入 12%', gaYoY: '同比 (1 个百分点)',
    } : {
      cloud: 'Cloud', cloudYoY: '+26% Y/Y',
      dataCenter: 'Data Center', dataCenterYoY: '+20% Y/Y',
      marketplace: 'Marketplace', services: '& Services', marketplaceYoY: '+8% Y/Y',
      revenue: 'Revenue', revenueYoY: '+23% Y/Y',
      grossProfit: 'Gross profit', margin: '85% margin', grossYoY: '+2pp Y/Y',
      costOf: 'Cost of', costRevenue: 'revenue',
      operating: 'Operating', loss: 'loss', lossMargin: '(3%) margin', lossYoY: '+1pp Y/Y',
      operatingExpenses: 'Operating', expenses: 'expenses',
      rnd: 'R&D', rndPct: '52% of revenue', rndYoY: '(1pp) Y/Y',
      sm: 'S&M', smPct: '24% of revenue', smYoY: '+3pp Y/Y',
      ga: 'G&A', gaPct: '12% of revenue', gaYoY: '(1pp) Y/Y',
    };

    return {
      cloud: {
        blocks: [
          { x: 419, top: 407, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: text.cloudYoY, size: 29, weight: 400, color: NOTE },
          ] },
          { x: 223, top: 586, anchor: 'middle', lines: [{ text: text.cloud, size: 40, weight: 800 }] },
        ],
      },
      data_center: {
        blocks: [
          { x: 419, top: 798, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: text.dataCenterYoY, size: 29, weight: 400, color: NOTE },
          ] },
          { x: 225, top: 921, anchor: 'middle', lines: [{ text: text.dataCenter, size: 40, weight: 800 }] },
        ],
      },
      marketplace_services: {
        blocks: [
          { x: 419, top: 1031, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: text.marketplaceYoY, size: 29, weight: 400, color: NOTE },
          ] },
          { x: 224, top: 1068, anchor: 'middle', lineGap: 9, lines: [
            { text: text.marketplace, size: 40, weight: 800 },
            { text: text.services, size: 40, weight: 800 },
          ] },
        ],
      },
      revenue: {
        blocks: [
          { x: 882, top: 497, anchor: 'middle', lineGap: 10, lines: [
            { text: text.revenue, size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: text.revenueYoY, size: 29, weight: 400, color: NOTE },
          ] },
        ],
      },
      gross_profit: {
        blocks: [
          { x: 1349, top: 331, anchor: 'middle', lineGap: 9, lines: [
            { text: text.grossProfit, size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: text.margin, size: 29, weight: 400, color: NOTE },
            { text: text.grossYoY, size: 29, weight: 400, color: NOTE },
          ] },
        ],
      },
      cost_of_revenue: {
        blocks: [
          { x: 1349, top: 1140, anchor: 'middle', lineGap: 7, lines: [
            { text: text.costOf, size: 36, weight: 800 },
            { text: text.costRevenue, size: 36, weight: 800 },
            { text: '$value', size: 32, weight: 400 },
          ] },
        ],
      },
      operating_loss: {
        blocks: [
          { x: 1670, top: 1012, anchor: 'middle', lineGap: 8, lines: [
            { text: text.operating, size: 36, weight: 800 },
            { text: text.loss, size: 36, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: text.lossMargin, size: 28, weight: 400, color: NOTE },
            { text: text.lossYoY, size: 28, weight: 400, color: NOTE },
          ] },
        ],
      },
      operating_expenses: {
        blocks: [
          { x: 1822, top: 440, anchor: 'middle', lineGap: 8, lines: [
            { text: text.operatingExpenses, size: 40, weight: 800 },
            { text: text.expenses, size: 40, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ] },
        ],
      },
      rnd: {
        blocks: [
          { x: RIGHT_LABEL_X, top: 528, anchor: 'middle', lineGap: 8, lines: [
            { text: text.rnd, size: 31, weight: 800 },
            { text: '$value', size: 29, weight: 400 },
            { text: text.rndPct, size: 28, weight: 400, color: NOTE },
            { text: text.rndYoY, size: 28, weight: 400, color: NOTE },
          ] },
        ],
      },
      sm: {
        blocks: [
          { x: RIGHT_LABEL_X, top: 883, anchor: 'middle', lineGap: 8, lines: [
            { text: text.sm, size: 31, weight: 800 },
            { text: '$value', size: 29, weight: 400 },
            { text: text.smPct, size: 28, weight: 400, color: NOTE },
            { text: text.smYoY, size: 28, weight: 400, color: NOTE },
          ] },
        ],
      },
      ga: {
        blocks: [
          { x: RIGHT_LABEL_X, top: 1130, anchor: 'middle', lineGap: 8, lines: [
            { text: text.ga, size: 31, weight: 800 },
            { text: '$value', size: 29, weight: 400 },
            { text: text.gaPct, size: 28, weight: 400, color: NOTE },
            { text: text.gaYoY, size: 28, weight: 400, color: NOTE },
          ] },
        ],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'atlassian-q2-fy26',
    name: 'Atlassian · Q2 FY26',
    company: 'Atlassian',
    meta: {
      company: 'Atlassian',
      title: 'Atlassian Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/atlassian-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1124,
      titleY: 204,
      titleSize: 128,
      titleTextLength: 1908,
      periodX: 2426,
      periodY: 276,
      periodNoteY: 321,
      logoWidth: 270,
      logoHeight: 245,
      logoY: 252,
      logoViewBox: '0 0 270 245',
      logoSvg: atlassianLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: BLUE_TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: kpiCard(false),

    layout: {
      scale: 0.198,
      nodes: {
        cloud: { x: 378, y: 501, width: 75, height: 211.266 },
        data_center: { x: 378, y: 888, width: 75, height: 86.13 },
        marketplace_services: { x: 378, y: 1113, width: 75, height: 16.632 },
        revenue: { x: 845, y: 641, width: 75, height: 314.028 },
        gross_profit: { x: 1312, y: 511, width: 74, height: 267.102 },
        cost_of_revenue: { x: 1312, y: 1080, width: 74, height: 46.926 },
        operating_loss: { x: 1635, y: 979, width: 74, height: 9.11 },
        operating_expenses: { x: 1784, y: 634, width: 75, height: 276.212 },
        rnd: { x: 2248, y: 514, width: 75, height: 163.548 },
        sm: { x: 2248, y: 879, width: 75, height: 74.448 },
        ga: { x: 2248, y: 1150, width: 75, height: 38.216 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: labels(false),
    },

    nodes: [
      { id: 'cloud', col: 0, order: 0, type: 'source', label: 'Cloud', value: 1067, valueText: '$1,067M', notes: ['+26% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'data_center', col: 0, order: 1, type: 'source', label: 'Data Center', value: 435, valueText: '$435M', notes: ['+20% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'marketplace_services', col: 0, order: 2, type: 'source', label: ['Marketplace', '& Services'], value: 84, valueText: '$84M', notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1586, valueText: '$1,586M', notes: ['+23% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1349, valueText: '$1,349M', notes: ['85% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 238, valueText: '($238M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -48, valueText: '($48M)', notes: ['(3%) margin', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 1396, valueText: '($1,396M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'R&D', value: 826, valueText: '($826M)', notes: ['52% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'S&M', value: 376, valueText: '($376M)', notes: ['24% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 193, valueText: '($193M)', notes: ['12% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 6, order: 0, type: 'cost', label: 'Tax', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent' },
    ],

    links: [
      { source: 'cloud', target: 'revenue', value: 1067, width: 211.266, sourceOrder: 0, targetOrder: 0 },
      { source: 'data_center', target: 'revenue', value: 435, width: 86.13, sourceOrder: 1, targetOrder: 1 },
      { source: 'marketplace_services', target: 'revenue', value: 84, width: 16.632, sourceOrder: 2, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1349, width: 267.102, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 238, width: 46.926, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1349, width: 267.102, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 48, width: 9.11, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 826, width: 163.548, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 376, width: 74.448, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 193, width: 38.216, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Atlassian · 2026 财年第二季度',
        meta: {
          title: 'Atlassian 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 2070,
        },
        nodes: {
          cloud: { label: '云', notes: ['同比 +26%'] },
          data_center: { label: '数据中心', notes: ['同比 +20%'] },
          marketplace_services: { label: '市场与服务', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +23%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 85%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '运营亏损', notes: ['利润率 (3%)', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          rnd: { label: '研发', notes: ['占收入 52%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 24%', '同比 +3 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 12%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: kpiCard(true),
      },
    },
  });
})();
