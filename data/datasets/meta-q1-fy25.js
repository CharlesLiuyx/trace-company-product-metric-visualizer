/* Meta — Q1 FY25 income statement ($B), reconstructed from the supplied reference. */
(function () {
  const BLUE = '#0668e1';
  const BLUE_LABEL = '#005392';
  const BLUE_LINK = '#88b4e9';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = `
    <g font-family="'Noto Sans',Arial,sans-serif">
      <g transform="translate(84 516) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(500 1188)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
      <g transform="translate(1829 232)">
        <path d="M18 0H288C302 0 310 9 310 23V78C310 92 302 101 288 101H178L155 122L132 101H18C6 101 0 92 0 78V23C0 9 6 0 18 0Z" fill="none" stroke="${BLUE_LABEL}" stroke-width="4"/>
        <text x="70" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
        <text x="70" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${GREEN_LABEL}">$21.8B</text>
        <text x="225" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
        <text x="225" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${RED_LABEL}">($4.2B)</text>
      </g>
    </g>`;

  const label = (x, top, lines, options = {}) => ({
    blocks: [{ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap ?? 10, lines }],
  });
  const name = (text, size = 40) => ({ text, size, weight: 800 });
  const value = (size = 39) => ({ text: '$value', size, weight: 400 });
  const note = (text, size = 28) => ({ text, size, weight: 400, color: NOTE });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'meta-q1-fy25',
    name: 'Meta - Q1 FY25',
    company: 'Meta',
    meta: {
      company: 'Meta', title: 'Meta Q1 FY25 Income Statement', period: 'Q1 FY25', periodNote: 'Ending Mar. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/meta-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2060,
      hidePeriodStamp: true,
      logoWidth: 300, logoHeight: 235, logoY: 252, logoViewBox: '0 0 270 220', logoSvg: BUSINESS_ICONS.metaLogo || '',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL }, hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, interfaceAudit: { mode: 'error' }, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 7.33,
      nodes: {
        advertising: { x: 488, y: 543, width: 70, height: 304 },
        other_revenue: { x: 488, y: 1039, width: 70, height: 4 },
        family_of_apps: { x: 849, y: 621, width: 70, height: 309 },
        reality_labs: { x: 849, y: 1236, width: 70, height: 3 },
        revenue: { x: 1214, y: 694, width: 70, height: 311 },
        gross_profit: { x: 1578, y: 616, width: 70, height: 256 },
        cost_of_revenue: { x: 1577, y: 1047, width: 70, height: 56 },
        operating_profit: { x: 1944, y: 541, width: 70, height: 129 },
        operating_expenses: { x: 1944, y: 841, width: 70, height: 127 },
        interest: { x: 2196, y: 638, width: 70, height: 6 },
        net_profit: { x: 2300, y: 474, width: 70, height: 122 },
        tax: { x: 2300, y: 769, width: 70, height: 12 },
        rnd: { x: 2300, y: 887, width: 70, height: 89 },
        sm: { x: 2300, y: 1105, width: 70, height: 21 },
        ga: { x: 2300, y: 1255, width: 70, height: 17 },
      },
      labels: {
        advertising: label(524, 359, [name('Advertising'), value(), note('+16% Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 524, top: 888, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('+34% Y/Y')] },
            { x: 164, top: 1026, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(888, 417, [name('Family of Apps'), name('(FoA)'), value(), note('+16% Y/Y')], { lineGap: 9 }),
        reality_labs: label(888, 1032, [name('Reality Labs'), name('(RL)'), value(), note('(6%) Y/Y')]),
        revenue: label(1250, 543, [name('Revenue'), value(), note('+16% Y/Y')]),
        gross_profit: label(1613, 425, [name('Gross Profit'), value(), note('82% margin'), note('+0pp Y/Y')]),
        cost_of_revenue: label(1612, 1110, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1979, 354, [name('Operating profit'), value(), note('41% margin'), note('+4pp Y/Y')]),
        operating_expenses: label(1979, 981, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        interest: label(2231, 653, [name('Interest', 32), value(31)], { lineGap: 8 }),
        net_profit: label(2410, 468, [name('Net profit'), value(), note('39% margin'), note('+5pp Y/Y')], { anchor: 'start' }),
        tax: label(2511, 739, [name('Tax', 32), value(31)], { lineGap: 8 }),
        rnd: label(2511, 847, [name('R&D', 32), value(31), note('29% of revenue'), note('+1pp Y/Y')], { lineGap: 8 }),
        sm: label(2511, 1050, [name('S&M', 32), value(31), note('7% of revenue'), note('(1pp) Y/Y')], { lineGap: 8 }),
        ga: label(2511, 1191, [name('G&A', 32), value(31), note('5% of revenue'), note('(4pp) Y/Y')], { lineGap: 8 }),
      },
    },
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 41.4, notes: ['+16% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.5, notes: ['+34% Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 41.9, notes: ['+16% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 0.4, notes: ['(6%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 42.3, notes: ['+16% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 34.7, notes: ['82% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.6 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 17.6, notes: ['41% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 17.2 },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.8 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 16.6, notes: ['39% margin', '+5pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 1.7 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 12.2, notes: ['29% of revenue', '+1pp Y/Y'] },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 2.8, notes: ['7% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 2.3, notes: ['5% of revenue', '(4pp) Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 41.4, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.5, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 41.9, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.4, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 34.7, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.6, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 17.6, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 17.2, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 15.9, sourceOrder: 0, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 0.8, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.7, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 12.2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.8, targetOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 2.3, targetOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['MetaQuest', 'FoA'],
      zh: {
        name: 'Meta · 2025 财年第一季度',
        meta: { title: 'Meta 2025 财年第一季度利润表', period: '2025 财年第一季度', periodNote: '截至 2025 年 3 月' },
        nodes: {
          advertising: { label: '广告', notes: ['同比 +16%'] }, other_revenue: { label: '其他', notes: ['同比 +34%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +16%'] }, reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 (6%)'] },
          revenue: { label: '收入', notes: ['同比 +16%'] }, gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 41%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' }, interest: { label: '利息收入' },
          net_profit: { label: '净利润', notes: ['利润率 39%', '同比 +5 个百分点'] }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 29%', '同比 +1 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 5%', '同比 (4 个百分点)'] },
        },
        layout: {
          labels: {
            advertising: label(524, 359, [name('广告'), value(), note('同比 +16%')]),
            other_revenue: { blocks: [{ x: 524, top: 888, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 +34%')] }, { x: 164, top: 1026, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] }] },
            family_of_apps: label(888, 417, [name('应用家族（FoA）'), value(), note('同比 +16%')]),
            reality_labs: label(888, 1032, [name('Reality Labs（RL）', 34), value(), note('同比 (6%)')]),
            revenue: label(1250, 543, [name('收入'), value(), note('同比 +16%')]),
            gross_profit: label(1613, 425, [name('毛利润'), value(), note('利润率 82%'), note('同比 +0 个百分点')]),
            cost_of_revenue: label(1612, 1110, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1979, 354, [name('营业利润'), value(), note('利润率 41%'), note('同比 +4 个百分点')]),
            operating_expenses: label(1979, 981, [name('运营费用'), value(38)]),
            interest: label(2231, 653, [name('利息收入', 32), value(31)], { lineGap: 8 }),
            net_profit: label(2410, 468, [name('净利润'), value(), note('利润率 39%'), note('同比 +5 个百分点')], { anchor: 'start' }),
            tax: label(2511, 739, [name('税费', 32), value(31)], { lineGap: 8 }),
            rnd: label(2511, 847, [name('研发', 32), value(31), note('占收入 29%'), note('同比 +1 个百分点')], { lineGap: 8 }),
            sm: label(2511, 1050, [name('销售与市场', 32), value(31), note('占收入 7%'), note('同比 (1 个百分点)')], { lineGap: 8 }),
            ga: label(2511, 1191, [name('管理费用', 32), value(31), note('占收入 5%'), note('同比 (4 个百分点)')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
