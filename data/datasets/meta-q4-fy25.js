/* Meta — Q4 FY25 income statement ($B), reconstructed from the supplied reference. */
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
      <g transform="translate(84 538) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(500 1180)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
      <g transform="translate(1829 222)">
        <path d="M18 0H288C302 0 310 9 310 23V78C310 92 302 101 288 101H178L155 122L132 101H18C6 101 0 92 0 78V23C0 9 6 0 18 0Z" fill="none" stroke="${BLUE_LABEL}" stroke-width="4"/>
        <text x="70" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
        <text x="70" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${GREEN_LABEL}">$30.8B</text>
        <text x="225" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
        <text x="225" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${RED_LABEL}">($6.0B)</text>
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
    key: 'meta-q4-fy25',
    name: 'Meta - Q4 FY25',
    company: 'Meta',
    meta: {
      company: 'Meta', title: 'Meta Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/meta-q4-fy25.png', width: 2667, height: 1500 },
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
      scale: 5.78,
      nodes: {
        advertising: { x: 488, y: 538, width: 70, height: 336 },
        other_revenue: { x: 488, y: 1066, width: 70, height: 5 },
        family_of_apps: { x: 851, y: 621, width: 70, height: 341 },
        reality_labs: { x: 851, y: 1197, width: 70, height: 6 },
        revenue: { x: 1214, y: 703, width: 70, height: 347 },
        gross_profit: { x: 1577, y: 618, width: 70, height: 283 },
        cost_of_revenue: { x: 1577, y: 1099, width: 70, height: 63 },
        operating_profit: { x: 1940, y: 530, width: 70, height: 143 },
        operating_expenses: { x: 1940, y: 837, width: 70, height: 140 },
        net_profit: { x: 2302, y: 437, width: 70, height: 132 },
        other: { x: 2190, y: 623, width: 70, height: 3 },
        tax: { x: 2302, y: 748, width: 70, height: 14 },
        rnd: { x: 2302, y: 921, width: 70, height: 99 },
        ga: { x: 2302, y: 1110, width: 70, height: 22 },
        sm: { x: 2302, y: 1238, width: 70, height: 20 },
      },
      labels: {
        advertising: label(524, 391, [name('Advertising'), value(), note('+24% Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 524, top: 920, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('+54% Y/Y')] },
            { x: 154, top: 1057, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(888, 425, [name('Family of Apps'), name('(FoA)'), value(), note('+26% Y/Y')], { lineGap: 9 }),
        reality_labs: label(888, 1005, [name('Reality Labs'), name('(RL)'), value(), note('(12%) Y/Y')]),
        revenue: label(1250, 560, [name('Revenue'), value(), note('+24% Y/Y')]),
        gross_profit: label(1610, 438, [name('Gross Profit'), value(), note('82% margin'), note('+0pp Y/Y')]),
        cost_of_revenue: label(1612, 1172, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1970, 347, [name('Operating profit'), value(), note('41% margin'), note('+7pp Y/Y')]),
        operating_expenses: label(1970, 994, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        net_profit: label(2413, 438, [name('Net profit'), value(), note('38% margin'), note('+6pp Y/Y')], { anchor: 'start' }),
        other: label(2229, 639, [name('Other', 32), value(31)], { lineGap: 8 }),
        tax: label(2511, 714, [name('Tax', 32), value(31)], { lineGap: 8 }),
        rnd: label(2511, 906, [name('R&D', 32), value(31), note('29% of revenue'), note('+3pp Y/Y')], { lineGap: 8 }),
        ga: label(2511, 1073, [name('G&A', 32), value(31), note('6% of revenue'), note('+5pp Y/Y')], { lineGap: 8 }),
        sm: label(2511, 1228, [name('S&M', 32), value(31), note('6% of revenue'), note('(1pp) Y/Y')], { lineGap: 8 }),
      },
    },
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 58.1, notes: ['+24% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.8, notes: ['+54% Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 58.9, notes: ['+26% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 1.0, valueText: '$1.0B', notes: ['(12%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 59.9, notes: ['+24% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 49.0, valueText: '$49.0B', notes: ['82% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 10.9 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 24.7, notes: ['41% margin', '+7pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 24.2 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 22.8, notes: ['38% margin', '+6pp Y/Y'] },
      { id: 'other', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.6 },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 2.6 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 17.1, notes: ['29% of revenue', '+3pp Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 3.7, notes: ['6% of revenue', '+5pp Y/Y'] },
      { id: 'sm', col: 5, order: 5, type: 'cost', label: 'S&M', value: 3.4, notes: ['6% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 58.1, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.8, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 58.9, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 1.0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 49.0, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 10.9, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 24.7, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 24.2, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 22.1, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.6, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 2.6, sourceOrder: 1, targetWidth: 14, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 17.1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 3.7, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 3.4, targetOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['MetaQuest', 'FoA'],
      zh: {
        name: 'Meta · 2025 财年第四季度',
        meta: { title: 'Meta 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月' },
        nodes: {
          advertising: { label: '广告', notes: ['同比 +24%'] }, other_revenue: { label: '其他', notes: ['同比 +54%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +26%'] }, reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 (12%)'] },
          revenue: { label: '收入', notes: ['同比 +24%'] }, gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 41%', '同比 +7 个百分点'] },
          operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 38%', '同比 +6 个百分点'] },
          other: { label: '其他' }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 29%', '同比 +3 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 6%', '同比 +5 个百分点'] }, sm: { label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            advertising: label(524, 391, [name('广告'), value(), note('同比 +24%')]),
            other_revenue: { blocks: [{ x: 524, top: 920, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 +54%')] }, { x: 154, top: 1057, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] }] },
            family_of_apps: label(888, 425, [name('应用家族（FoA）'), value(), note('同比 +26%')]),
            reality_labs: label(888, 1005, [name('Reality Labs（RL）', 34), value(), note('同比 (12%)')]),
            gross_profit: label(1610, 438, [name('毛利润'), value(), note('利润率 82%'), note('同比 +0 个百分点')]),
            cost_of_revenue: label(1612, 1172, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1970, 347, [name('营业利润'), value(), note('利润率 41%'), note('同比 +7 个百分点')]),
            operating_expenses: label(1970, 994, [name('运营费用'), value(38)]),
            net_profit: label(2413, 438, [name('净利润'), value(), note('利润率 38%'), note('同比 +6 个百分点')], { anchor: 'start' }),
            tax: label(2511, 714, [name('税费', 32), value(31)], { lineGap: 8 }),
            rnd: label(2511, 906, [name('研发', 32), value(31), note('占收入 29%'), note('同比 +3 个百分点')], { lineGap: 8 }),
            ga: label(2511, 1073, [name('管理费用', 32), value(31), note('占收入 6%'), note('同比 +5 个百分点')], { lineGap: 8 }),
            sm: label(2511, 1228, [name('销售与市场', 32), value(31), note('占收入 6%'), note('同比 (1 个百分点)')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
