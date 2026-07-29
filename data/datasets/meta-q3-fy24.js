/* Meta — Q3 FY24 income statement ($B), reconstructed from the supplied reference. */
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

  const fullMetaWordmark = `
    <g transform="translate(0 -3) scale(.52)">${BUSINESS_ICONS.metaLogo || ''}</g>
    <text x="165" y="92" font-family="Arial,Helvetica,sans-serif" font-size="104"
      font-weight="600" textLength="290" lengthAdjust="spacingAndGlyphs" fill="#092730">Meta</text>`;

  const annotations = `
    <g font-family="'Noto Sans',Arial,sans-serif">
      <g transform="translate(84 538) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(457 1237)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
      <g transform="translate(1764 249)">
        <path d="M18 0H282C294 0 300 9 300 23V78C300 92 294 101 282 101H173L150 122L127 101H18C6 101 0 92 0 78V23C0 9 6 0 18 0Z" fill="none" stroke="${BLUE_LABEL}" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="family_of_apps_operating_profit">
          <text x="78" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
          <text x="78" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${GREEN_LABEL}">$21.8B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="reality_labs_operating_loss">
          <text x="233" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
          <text x="233" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${RED_LABEL}">($4.4B)</text>
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
    key: 'meta-q3-fy24',
    name: 'Meta - Q3 FY24',
    company: 'Meta',
    meta: {
      company: 'Meta',
      title: 'Meta Q3 FY24 Income Statement',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/meta-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2060,
      hidePeriodStamp: true,
      logoWidth: 520,
      logoHeight: 120,
      logoY: 249,
      logoViewBox: '0 0 520 120',
      logoSvg: fullMetaWordmark,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 7.8,
      nodes: {
        advertising: { x: 494, y: 575, width: 66, height: 311 },
        other_revenue: { x: 494, y: 1074, width: 66, height: 5 },
        family_of_apps: { x: 841, y: 661, width: 66, height: 316 },
        reality_labs: { x: 841, y: 1278, width: 66, height: 4 },
        revenue: { x: 1189, y: 747, width: 66, height: 317 },
        gross_profit: { x: 1537, y: 661, width: 66, height: 259 },
        cost_of_revenue: { x: 1540, y: 1143, width: 65, height: 56 },
        operating_profit: { x: 1888, y: 570, width: 65, height: 134 },
        operating_expenses: { x: 1888, y: 865, width: 65, height: 122 },
        interest: { x: 2134, y: 653, width: 66, height: 6 },
        net_profit: { x: 2232, y: 478, width: 67, height: 121 },
        tax: { x: 2232, y: 788, width: 67, height: 15 },
        rnd: { x: 2232, y: 915, width: 67, height: 86 },
        sm: { x: 2232, y: 1098, width: 67, height: 19 },
        ga: { x: 2232, y: 1227, width: 67, height: 13 },
      },
      labels: {
        advertising: label(524, 433, [name('Advertising'), value(), note('+19% Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 527, top: 931, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('+48% Y/Y')] },
            { x: 167, top: 1064, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(874, 466, [name('Family of Apps'), name('(FoA)'), value(), note('+19% Y/Y')], { lineGap: 9 }),
        reality_labs: label(874, 1086, [name('Reality Labs'), name('(RL)'), value(), note('+29% Y/Y')]),
        revenue: label(1222, 605, [name('Revenue'), value(), note('+19% Y/Y')]),
        gross_profit: label(1570, 479, [name('Gross Profit'), value(), note('82% margin'), note('(1pp) Y/Y')]),
        cost_of_revenue: label(1571, 1223, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1915, 387, [name('Operating profit'), value(), note('43% margin'), note('+2pp Y/Y')]),
        operating_expenses: label(1919, 1009, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        interest: label(2167, 678, [name('Interest', 32), value(31)], { lineGap: 8 }),
        net_profit: label(2341, 479, [name('Net profit'), value(), note('39% margin'), note('+5pp Y/Y')], { anchor: 'start' }),
        tax: label(2433, 763, [name('Tax', 32), value(31)], { lineGap: 8 }),
        rnd: label(2433, 883, [name('R&D', 32), value(31), note('28% of revenue'), note('+0pp Y/Y')], { lineGap: 8 }),
        sm: label(2433, 1049, [name('S&M', 32), value(31), note('7% of revenue'), note('(1pp) Y/Y')], { lineGap: 8 }),
        ga: label(2434, 1211, [name('G&A', 32), value(31), note('5% of revenue'), note('(1pp) Y/Y')], { lineGap: 8 }),
      },
    },
    nonNodeMetrics: [
      {
        id: 'family_of_apps_operating_profit',
        representation: 'annotation',
        label: 'FoA operating profit',
        value: 21.8,
        valueText: '$21.8B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
      {
        id: 'reality_labs_operating_loss',
        representation: 'annotation',
        label: 'RL operating loss',
        value: -4.4,
        valueText: '($4.4B)',
        type: 'cost',
        labelColor: RED_LABEL,
      },
    ],
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 39.9, notes: ['+19% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.4, notes: ['+48% Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 40.3, notes: ['+19% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 0.3, notes: ['+29% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 40.6, notes: ['+19% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 33.2, notes: ['82% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.4 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 17.4, notes: ['43% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 15.9 },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.5 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 15.7, notes: ['39% margin', '+5pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 2.1 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 11.2, notes: ['28% of revenue', '+0pp Y/Y'] },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 2.8, notes: ['7% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 1.9, notes: ['5% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 39.9, sourceWidth: 311, targetWidth: 313, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.4, sourceWidth: 5, targetWidth: 3, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 40.3, sourceWidth: 316, targetWidth: 314, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.3, sourceWidth: 4, targetWidth: 3, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 33.2, sourceWidth: 259, targetWidth: 259, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.4, sourceWidth: 58, targetWidth: 56, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 17.4, sourceWidth: 134, targetWidth: 134, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 15.9, sourceWidth: 125, targetWidth: 122, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 15.2, sourceWidth: 118, targetWidth: 117, sourceOrder: 0, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 0.5, sourceWidth: 6, targetWidth: 4, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 2.1, sourceWidth: 16, targetWidth: 15, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 11.2, sourceWidth: 86, targetWidth: 86, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.8, sourceWidth: 21, targetWidth: 19, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.9, sourceWidth: 15, targetWidth: 13, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['MetaQuest', 'FoA', 'RL'],
      zh: {
        name: 'Meta · 2024 财年第三季度',
        meta: {
          title: 'Meta 2024 财年第三季度利润表',
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
        },
        nonNodeMetrics: {
          family_of_apps_operating_profit: { label: '应用家族（FoA）营业利润' },
          reality_labs_operating_loss: { label: 'Reality Labs（RL）营业亏损' },
        },
        nodes: {
          advertising: { label: '广告', notes: ['同比 +19%'] },
          other_revenue: { label: '其他', notes: ['同比 +48%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +19%'] },
          reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 +29%'] },
          revenue: { label: '收入', notes: ['同比 +19%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 43%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息收入' },
          net_profit: { label: '净利润', notes: ['利润率 39%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 28%', '同比 +0 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 5%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            advertising: label(524, 433, [name('广告'), value(), note('同比 +19%')]),
            other_revenue: {
              blocks: [
                { x: 527, top: 931, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 +48%')] },
                { x: 167, top: 1064, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] },
              ],
            },
            family_of_apps: label(874, 466, [name('应用家族（FoA）'), value(), note('同比 +19%')]),
            reality_labs: label(874, 1086, [name('Reality Labs（RL）', 34), value(), note('同比 +29%')]),
            revenue: label(1222, 605, [name('收入'), value(), note('同比 +19%')]),
            gross_profit: label(1570, 479, [name('毛利润'), value(), note('利润率 82%'), note('同比 (1 个百分点)')]),
            cost_of_revenue: label(1571, 1223, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1915, 387, [name('营业利润'), value(), note('利润率 43%'), note('同比 +2 个百分点')]),
            operating_expenses: label(1919, 1009, [name('运营费用'), value(38)]),
            interest: label(2167, 678, [name('利息收入', 32), value(31)], { lineGap: 8 }),
            net_profit: label(2341, 479, [name('净利润'), value(), note('利润率 39%'), note('同比 +5 个百分点')], { anchor: 'start' }),
            tax: label(2433, 763, [name('税费', 32), value(31)], { lineGap: 8 }),
            rnd: label(2433, 883, [name('研发', 32), value(31), note('占收入 28%'), note('同比 +0 个百分点')], { lineGap: 8 }),
            sm: label(2433, 1049, [name('销售与市场', 32), value(31), note('占收入 7%'), note('同比 (1 个百分点)')], { lineGap: 8 }),
            ga: label(2434, 1211, [name('管理费用', 32), value(31), note('占收入 5%'), note('同比 (1 个百分点)')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
