/* Meta — Q4 FY24 income statement ($B), reconstructed from the supplied Source. */
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
      <g transform="translate(84 527) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(490 1224)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
      <g transform="translate(1822 212)">
        <path d="M18 0H282C295 0 302 9 302 22V80C302 94 294 102 282 102H173L151 124L129 102H18C6 102 0 94 0 80V22C0 9 6 0 18 0Z"
          fill="none" stroke="${BLUE_LABEL}" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="foa_operating_profit">
          <text x="70" y="42" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
          <text x="70" y="82" text-anchor="middle" font-size="29" font-weight="500" fill="${GREEN_LABEL}">$28.3B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="reality_labs_operating_loss">
          <text x="226" y="42" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
          <text x="226" y="82" text-anchor="middle" font-size="29" font-weight="500" fill="${RED_LABEL}">($5.0B)</text>
        </g>
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
    key: 'meta-q4-fy24',
    name: 'Meta - Q4 FY24',
    company: 'Meta',
    meta: {
      company: 'Meta', title: 'Meta Q4 FY24 Income Statement', period: 'Q4 FY24', periodNote: 'Ending Dec. 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/meta-q4-fy24.png', width: 2667, height: 1500 },
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
      scale: 6.9,
      nodes: {
        advertising: { x: 489, y: 523, width: 69, height: 322 },
        other_revenue: { x: 489, y: 1029, width: 69, height: 3 },
        family_of_apps: { x: 852, y: 613, width: 69, height: 325 },
        reality_labs: { x: 852, y: 1254, width: 69, height: 6 },
        revenue: { x: 1215, y: 696, width: 68, height: 334 },
        gross_profit: { x: 1578, y: 617, width: 68, height: 272 },
        cost_of_revenue: { x: 1580, y: 1088, width: 68, height: 59 },
        operating_profit: { x: 1938, y: 533, width: 68, height: 161 },
        operating_expenses: { x: 1940, y: 855, width: 68, height: 110 },
        interest: { x: 2200, y: 637, width: 68, height: 3 },
        net_profit: { x: 2302, y: 444, width: 69, height: 143 },
        tax: { x: 2302, y: 768, width: 69, height: 19 },
        rnd: { x: 2302, y: 889, width: 69, height: 83 },
        sm: { x: 2302, y: 1107, width: 69, height: 22 },
        ga: { x: 2302, y: 1267, width: 69, height: 6 },
      },
      labels: {
        advertising: label(524, 380, [name('Advertising'), value(), note('+21% Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 524, top: 887, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('+55% Y/Y')] },
            { x: 164, top: 1017, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(888, 417, [name('Family of Apps'), name('(FoA)'), value(), note('+21% Y/Y')], { lineGap: 9 }),
        reality_labs: label(888, 1060, [name('Reality Labs'), name('(RL)'), value(), note('+1% Y/Y')]),
        revenue: label(1250, 554, [name('Revenue'), value(), note('+21% Y/Y')]),
        gross_profit: label(1612, 435, [name('Gross Profit'), value(), note('82% margin'), note('+1pp Y/Y')]),
        cost_of_revenue: label(1612, 1162, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1972, 349, [name('Operating profit'), value(), note('48% margin'), note('+7pp Y/Y')]),
        operating_expenses: label(1974, 979, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        interest: label(2234, 649, [name('Interest', 32), value(31)], { lineGap: 8 }),
        net_profit: label(2413, 447, [name('Net profit'), value(), note('43% margin'), note('+8pp Y/Y')], { anchor: 'start' }),
        tax: label(2504, 748, [name('Tax', 32), value(31)], { lineGap: 8 }),
        rnd: label(2504, 888, [name('R&D', 32), value(31), note('25% of revenue'), note('(1pp) Y/Y')], { lineGap: 8 }),
        sm: label(2504, 1066, [name('S&M', 32), value(31), note('7% of revenue'), note('(1pp) Y/Y')], { lineGap: 8 }),
        ga: label(2504, 1239, [name('G&A', 32), value(31), note('2% of revenue'), note('(4pp) Y/Y')], { lineGap: 8 }),
      },
    },
    nonNodeMetrics: [
      { id: 'foa_operating_profit', representation: 'annotation', label: 'FoA operating profit', value: 28.3, valueText: '$28.3B', type: 'profit' },
      { id: 'reality_labs_operating_loss', representation: 'annotation', label: 'RL operating loss', value: -5.0, valueText: '($5.0B)', type: 'cost' },
    ],
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 46.8, notes: ['+21% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.5, notes: ['+55% Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 47.3, notes: ['+21% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 1.1, notes: ['+1% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 48.4, notes: ['+21% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 39.5, notes: ['82% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 8.8 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 23.4, notes: ['48% margin', '+7pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 16.2 },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.2 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 20.8, notes: ['43% margin', '+8pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 2.7 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 12.2, notes: ['25% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 3.2, notes: ['7% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.8, notes: ['2% of revenue', '(4pp) Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 46.8, sourceWidth: 322, targetWidth: 322, y0: 684, y1: 774, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.5, sourceWidth: 3, targetWidth: 3, y0: 1030.5, y1: 936.5, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 47.3, sourceWidth: 325, targetWidth: 326, y0: 775.5, y1: 859, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 1.1, sourceWidth: 6, targetWidth: 8, y0: 1257, y1: 1026, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 39.5, sourceWidth: 273, targetWidth: 272, y0: 832.5, y1: 753, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 8.8, sourceWidth: 61, targetWidth: 59, y0: 999.5, y1: 1117.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 23.4, sourceWidth: 161, targetWidth: 161, y0: 697.5, y1: 613.5, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 16.2, sourceWidth: 111, targetWidth: 110, y0: 833.5, y1: 910, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 20.7, sourceWidth: 142, targetWidth: 142, y0: 604, y1: 515, sourceOrder: 0, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 0.2, sourceWidth: 3, targetWidth: 1, y0: 638.5, y1: 586.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 2.7, sourceWidth: 19, targetWidth: 19, y0: 684.5, y1: 777.5, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 12.2, sourceWidth: 83, targetWidth: 83, y0: 896.5, y1: 930.5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 3.2, sourceWidth: 22, targetWidth: 22, y0: 949, y1: 1118, targetOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 0.8, sourceWidth: 5, targetWidth: 6, y0: 962.5, y1: 1270, targetOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['FoA', 'RL', 'MetaQuest'],
      zh: {
        name: 'Meta · 2024 财年第四季度',
        meta: { title: 'Meta 2024 财年第四季度利润表', period: '2024 财年第四季度', periodNote: '截至 2024 年 12 月', titleTextLength: 2060 },
        nonNodeMetrics: {
          foa_operating_profit: { label: 'FoA 营业利润' },
          reality_labs_operating_loss: { label: 'RL 营业亏损' },
        },
        nodes: {
          advertising: { label: '广告', notes: ['同比 +21%'] }, other_revenue: { label: '其他', notes: ['同比 +55%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +21%'] }, reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 +1%'] },
          revenue: { label: '收入', notes: ['同比 +21%'] }, gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 48%', '同比 +7 个百分点'] },
          operating_expenses: { label: '运营费用' }, interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 43%', '同比 +8 个百分点'] }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 25%', '同比 (1 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (4 个百分点)'] },
        },
        layout: {
          labels: {
            advertising: label(524, 380, [name('广告'), value(), note('同比 +21%')]),
            other_revenue: { blocks: [{ x: 524, top: 887, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 +55%')] }, { x: 164, top: 1017, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] }] },
            family_of_apps: label(888, 417, [name('应用家族（FoA）'), value(), note('同比 +21%')]),
            reality_labs: label(888, 1060, [name('Reality Labs（RL）', 34), value(), note('同比 +1%')]),
            gross_profit: label(1612, 435, [name('毛利润'), value(), note('利润率 82%'), note('同比 +1 个百分点')]),
            cost_of_revenue: label(1612, 1162, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1972, 349, [name('营业利润'), value(), note('利润率 48%'), note('同比 +7 个百分点')]),
            operating_expenses: label(1974, 979, [name('运营费用'), value(38)]),
            interest: label(2234, 649, [name('利息', 32), value(31)], { lineGap: 8 }),
            net_profit: label(2413, 447, [name('净利润'), value(), note('利润率 43%'), note('同比 +8 个百分点')], { anchor: 'start' }),
            tax: label(2504, 748, [name('税费', 32), value(31)], { lineGap: 8 }),
            rnd: label(2504, 888, [name('研发', 32), value(31), note('占收入 25%'), note('同比 (1 个百分点)')], { lineGap: 8 }),
            sm: label(2504, 1066, [name('销售与市场', 32), value(31), note('占收入 7%'), note('同比 (1 个百分点)')], { lineGap: 8 }),
            ga: label(2504, 1239, [name('管理费用', 32), value(31), note('占收入 2%'), note('同比 (4 个百分点)')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
