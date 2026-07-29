/* Meta — Q3 FY23 income statement ($B), reconstructed from the supplied Source. */
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

  const metaWordmark = `
    <g transform="translate(8 15) scale(.62)">${BUSINESS_ICONS.metaLogo || ''}</g>
    <text x="180" y="145" font-family="Arial,Helvetica,sans-serif"
      font-size="130" font-weight="700" fill="#092730">Meta</text>`;

  const operatingBreakdown = `
    <g transform="translate(1764 264)">
      <path d="M18 0H282C294 0 300 9 300 22V80C300 94 292 102 280 102H174L150 123L126 102H18C6 102 0 94 0 80V22C0 9 6 0 18 0Z"
        fill="none" stroke="${BLUE_LABEL}" stroke-width="3"/>
      <g class="sankey-interactive-annotation" data-node="foa_operating_profit">
        <rect x="18" y="8" width="126" height="83" fill="transparent"/>
        <text x="72" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
        <text x="72" y="81" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$17.5B</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="reality_labs_operating_loss">
        <rect x="156" y="8" width="126" height="83" fill="transparent"/>
        <text x="228" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
        <text x="228" y="81" text-anchor="middle" font-size="30" font-weight="400" fill="${RED_LABEL}">($3.7B)</text>
      </g>
    </g>`;

  const interestGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="interest"
      data-link-numerator="interest"
      data-link-denominator="net_profit"
      data-link-anchor-x="2180"
      data-link-anchor-y="654">
      <path d="M2132 675H2198C2215 675 2218 631 2230 631"
        fill="none" stroke="${GREEN_LINK}" stroke-width="3"/>
      <text x="2165" y="719" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '利息' : 'Interest'}</text>
      <text x="2165" y="759" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$0.3B</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="'Noto Sans',Arial,sans-serif">
      <g transform="translate(84 532) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(470 1210)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
      ${operatingBreakdown}
      ${interestGuide(zh)}
    </g>`;

  const label = (x, top, lines, options = {}) => ({
    blocks: [{ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap ?? 10, lines }],
  });
  const name = (text, size = 40) => ({ text, size, weight: 800 });
  const value = (size = 39) => ({ text: '$value', size, weight: 400 });
  const note = (text, size = 28) => ({ text, size, weight: 400, color: NOTE });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'meta-q3-fy23',
    name: 'Meta - Q3 FY23',
    company: 'Meta',
    meta: {
      company: 'Meta',
      title: 'Meta Q3 FY23 Income Statement',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/meta-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2040,
      hidePeriodStamp: true,
      logoWidth: 470,
      logoHeight: 180,
      logoY: 230,
      logoViewBox: '0 0 520 200',
      logoSvg: metaWordmark,
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
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 8.65,
      routes: {
        interest: { x: 2132, y: 675, width: 0, height: 1 },
      },
      nodes: {
        advertising: { x: 492, y: 576, width: 66, height: 290 },
        other_revenue: { x: 492, y: 1124, width: 66, height: 4 },
        family_of_apps: { x: 839, y: 649, width: 66, height: 292 },
        reality_labs: { x: 839, y: 1249, width: 66, height: 5 },
        revenue: { x: 1187, y: 732, width: 66, height: 295 },
        gross_profit: { x: 1538, y: 663, width: 65, height: 241 },
        cost_of_revenue: { x: 1542, y: 1061, width: 66, height: 51 },
        operating_profit: { x: 1881, y: 597, width: 65, height: 118 },
        operating_expenses: { x: 1881, y: 869, width: 65, height: 121 },
        net_profit: { x: 2230, y: 532, width: 67, height: 98 },
        tax: { x: 2230, y: 803, width: 67, height: 20 },
        rnd: { x: 2230, y: 919, width: 67, height: 78 },
        sm: { x: 2230, y: 1114, width: 67, height: 24 },
        ga: { x: 2230, y: 1255, width: 67, height: 16 },
      },
      labels: {
        advertising: label(525, 424, [name('Advertising'), value(), note('+24% Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 525, top: 969, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('+53% Y/Y')] },
            { x: 170, top: 1104, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(872, 452, [name('Family of Apps'), name('(FoA)'), value(), note('+24% Y/Y')], { lineGap: 9 }),
        reality_labs: label(872, 1047, [name('Reality Labs'), name('(RL)'), value(), note('(26%) Y/Y')]),
        revenue: label(1220, 582, [name('Revenue'), value(), note('+23% Y/Y')]),
        gross_profit: label(1571, 480, [name('Gross Profit'), value(), note('82% margin'), note('+2pp Y/Y')]),
        cost_of_revenue: label(1575, 1123, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1914, 416, [name('Operating profit'), value(), note('40% margin'), note('+20pp Y/Y')]),
        operating_expenses: label(1914, 1002, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        net_profit: label(2338, 521, [name('Net profit'), value(), note('34% margin'), note('+18pp Y/Y')], { anchor: 'start' }),
        tax: label(2430, 764, [name('Tax', 32), value(31)], { lineGap: 8 }),
        rnd: label(2436, 894, [name('R&D', 32), value(31), note('27% of revenue'), note('(6pp) Y/Y')], { lineGap: 8 }),
        sm: label(2440, 1067, [name('S&M', 32), value(31), note('8% of revenue'), note('(5pp) Y/Y')], { lineGap: 8 }),
        ga: label(2436, 1232, [name('G&A', 32), value(31), note('6% of revenue'), note('(6pp) Y/Y')], { lineGap: 8 }),
        interest: { blocks: [] },
      },
    },
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.3, valueText: '$0.3B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'foa_operating_profit', representation: 'annotation', label: 'FoA operating profit', value: 17.5, valueText: '$17.5B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'reality_labs_operating_loss', representation: 'annotation', label: 'RL operating loss', value: -3.7, valueText: '($3.7B)', type: 'cost', labelColor: RED_LABEL },
    ],
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 33.6, notes: ['+24% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.3, notes: ['+53% Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 33.9, notes: ['+24% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 0.2, notes: ['(26%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 34.1, notes: ['+23% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 27.9, notes: ['82% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 13.7, notes: ['40% margin', '+20pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 14.2 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 11.6, notes: ['34% margin', '+18pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.4 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 9.2, notes: ['27% of revenue', '(6pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 2.9, notes: ['8% of revenue', '(5pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 2.1, notes: ['6% of revenue', '(6pp) Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 33.6, sourceWidth: 290, targetWidth: 289, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.3, sourceWidth: 4, targetWidth: 3, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 33.9, sourceWidth: 292, targetWidth: 292, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.2, sourceWidth: 5, targetWidth: 3, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 27.9, sourceWidth: 243, targetWidth: 241, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.2, sourceWidth: 52, targetWidth: 51, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 13.7, sourceWidth: 119, targetWidth: 118, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 14.2, sourceWidth: 122, targetWidth: 121, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 11.3, sourceWidth: 98, targetWidth: 98, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2.4, sourceWidth: 20, targetWidth: 20, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.3, sourceWidth: 3, targetWidth: 2, y0: 675, y1: 629, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 9.2, sourceWidth: 79, targetWidth: 78, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.9, sourceWidth: 25, targetWidth: 24, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 2.1, sourceWidth: 17, targetWidth: 16, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['Meta', 'MetaQuest', 'FoA', 'RL'],
      zh: {
        name: 'Meta · 2023 财年第三季度',
        meta: {
          title: 'Meta 2023 财年第三季度利润表',
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          interest: { label: '利息' },
          foa_operating_profit: { label: 'FoA 营业利润' },
          reality_labs_operating_loss: { label: 'RL 营业亏损' },
        },
        nodes: {
          advertising: { label: '广告', notes: ['同比 +24%'] },
          other_revenue: { label: '其他', notes: ['同比 +53%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +24%'] },
          reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 (26%)'] },
          revenue: { label: '收入', notes: ['同比 +23%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 40%', '同比 +20 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 34%', '同比 +18 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 27%', '同比 (6 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 8%', '同比 (5 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 6%', '同比 (6 个百分点)'] },
        },
        layout: {
          labels: {
            advertising: label(525, 424, [name('广告'), value(), note('同比 +24%')]),
            other_revenue: {
              blocks: [
                { x: 525, top: 969, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 +53%')] },
                { x: 170, top: 1104, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] },
              ],
            },
            family_of_apps: label(872, 452, [name('应用家族（FoA）'), value(), note('同比 +24%')]),
            reality_labs: label(872, 1047, [name('Reality Labs（RL）', 34), value(), note('同比 (26%)')]),
            revenue: label(1220, 582, [name('收入'), value(), note('同比 +23%')]),
            gross_profit: label(1571, 480, [name('毛利润'), value(), note('利润率 82%'), note('同比 +2 个百分点')]),
            cost_of_revenue: label(1575, 1123, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1914, 416, [name('营业利润'), value(), note('利润率 40%'), note('同比 +20 个百分点')]),
            operating_expenses: label(1914, 1002, [name('运营费用'), value(38)]),
            net_profit: label(2338, 521, [name('净利润'), value(), note('利润率 34%'), note('同比 +18 个百分点')], { anchor: 'start' }),
            tax: label(2430, 764, [name('税费', 32), value(31)], { lineGap: 8 }),
            rnd: label(2436, 894, [name('研发', 32), value(31), note('占收入 27%'), note('同比 (6 个百分点)')], { lineGap: 8 }),
            sm: label(2440, 1067, [name('销售与市场', 32), value(31), note('占收入 8%'), note('同比 (5 个百分点)')], { lineGap: 8 }),
            ga: label(2436, 1232, [name('管理费用', 32), value(31), note('占收入 6%'), note('同比 (6 个百分点)')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
