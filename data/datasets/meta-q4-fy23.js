/* Meta — Q4 FY23 income statement ($B), reconstructed from the supplied reference. */
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

  const interestGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="interest"
      data-link-numerator="interest"
      data-link-denominator="net_profit"
      data-link-anchor-x="2180"
      data-link-anchor-y="654">
      <path d="M2133 654H2198C2218 654 2218 589 2233 589"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2165" y="697" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '利息' : 'Interest'}</text>
      <text x="2165" y="739" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$0.4B</text>
    </g>`;

  const annotations = (zh) => `
    <g>
      <g transform="translate(84 516) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(470 1184)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
      <g transform="translate(1764 263)">
        <path d="M18 0H279C292 0 301 9 301 23V78C301 92 292 101 279 101H172L150 122L128 101H18C6 101 0 92 0 78V23C0 9 6 0 18 0Z" fill="none" stroke="${BLUE_LABEL}" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="foa_operating_profit">
          <text x="70" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
          <text x="70" y="78" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$21.0B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="reality_labs_operating_loss">
          <text x="224" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
          <text x="224" y="78" text-anchor="middle" font-size="30" font-weight="400" fill="${RED_LABEL}">($4.6B)</text>
        </g>
      </g>
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
    key: 'meta-q4-fy23',
    name: 'Meta - Q4 FY23',
    company: 'Meta',
    meta: {
      company: 'Meta',
      title: 'Meta Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/meta-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2060,
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
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 7.38,
      routes: { interest: { x: 2133, y: 654, width: 0, height: 1 } },
      nodes: {
        advertising: { x: 495, y: 538, width: 66, height: 287 },
        other_revenue: { x: 495, y: 1082, width: 66, height: 2 },
        family_of_apps: { x: 842, y: 654, width: 66, height: 289 },
        reality_labs: { x: 842, y: 1228, width: 66, height: 7 },
        revenue: { x: 1190, y: 736, width: 66, height: 296 },
        gross_profit: { x: 1538, y: 659, width: 66, height: 240 },
        cost_of_revenue: { x: 1538, y: 1079, width: 66, height: 55 },
        operating_profit: { x: 1889, y: 580, width: 65, height: 120 },
        operating_expenses: { x: 1889, y: 870, width: 65, height: 117 },
        net_profit: { x: 2233, y: 487, width: 67, height: 102 },
        tax: { x: 2233, y: 794, width: 67, height: 19 },
        rnd: { x: 2233, y: 910, width: 67, height: 77 },
        sm: { x: 2233, y: 1105, width: 67, height: 22 },
        ga: { x: 2231, y: 1260, width: 66, height: 16 },
      },
      labels: {
        interest: { blocks: [] },
        advertising: label(528, 394, [name('Advertising'), value(), note('+24% Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 528, top: 938, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('+82% Y/Y')] },
            { x: 164, top: 1068, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(875, 459, [name('Family of Apps'), name('(FoA)'), value(), note('+24% Y/Y')], { lineGap: 9 }),
        reality_labs: label(875, 1029, [name('Reality Labs'), name('(RL)'), value(), note('+47% Y/Y')]),
        revenue: label(1223, 593, [name('Revenue'), value(), note('+25% Y/Y')]),
        gross_profit: label(1571, 478, [name('Gross Profit'), value(), note('81% margin'), note('+7pp Y/Y')]),
        cost_of_revenue: label(1571, 1153, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1912, 398, [name('Operating profit'), value(), note('41% margin'), note('+20pp Y/Y')]),
        operating_expenses: label(1922, 1005, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        net_profit: label(2327, 478, [name('Net profit'), value(), note('35% margin'), note('+20pp Y/Y')], { anchor: 'start' }),
        tax: label(2434, 775, [name('Tax', 32), value(31)], { lineGap: 8 }),
        rnd: label(2436, 899, [name('R&D', 32), value(31), note('26% of revenue'), note('(4pp) Y/Y')], { lineGap: 8 }),
        sm: label(2440, 1071, [name('S&M', 32), value(31), note('8% of revenue'), note('(6pp) Y/Y')], { lineGap: 8 }),
        ga: label(2436, 1238, [name('G&A', 32), value(31), note('6% of revenue'), note('(4pp) Y/Y')], { lineGap: 8 }),
      },
    },
    nonNodeMetrics: [
      {
        id: 'interest',
        representation: 'flow',
        label: 'Interest',
        value: 0.4,
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
      {
        id: 'foa_operating_profit',
        representation: 'annotation',
        label: 'FoA operating profit',
        value: 21.0,
        valueText: '$21.0B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
      {
        id: 'reality_labs_operating_loss',
        representation: 'annotation',
        label: 'RL operating loss',
        value: -4.6,
        valueText: '($4.6B)',
        type: 'cost',
        labelColor: RED_LABEL,
      },
    ],
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 38.7, notes: ['+24% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.3, notes: ['+82% Y/Y'], color: '#1f77b4' },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 39.0, valueText: '$39.0B', notes: ['+24% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 1.1, notes: ['+47% Y/Y'], color: '#0080fb' },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 40.1, notes: ['+25% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 32.4, notes: ['81% margin', '+7pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.7 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 16.4, notes: ['41% margin', '+20pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 16.0, valueText: '($16.0B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 14.0, valueText: '$14.0B', notes: ['35% margin', '+20pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.8 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 10.5, notes: ['26% of revenue', '(4pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 3.2, notes: ['8% of revenue', '(6pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 2.3, notes: ['6% of revenue', '(4pp) Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 38.7, sourceWidth: 287, targetWidth: 287, y0: 681.5, y1: 797.5, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.3, sourceWidth: 2, targetWidth: 2, y0: 1083, y1: 942, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 39.0, sourceWidth: 289, targetWidth: 288, y0: 798.5, y1: 880, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 1.1, sourceWidth: 7, targetWidth: 8, y0: 1231.5, y1: 1028, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 32.4, sourceWidth: 242, targetWidth: 240, y0: 857, y1: 779, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.7, sourceWidth: 54, targetWidth: 55, y0: 1005, y1: 1106.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 16.4, sourceWidth: 120, targetWidth: 120, y0: 719, y1: 640, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 16.0, sourceWidth: 120, targetWidth: 117, y0: 839, y1: 928.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 13.6, sourceWidth: 101, targetWidth: 102, y0: 630.5, y1: 538, sourceOrder: 0, targetOrder: 0 },
      {
        sourceRoute: 'interest', target: 'net_profit', value: 0.4,
        sourceWidth: 1, targetWidth: 1, y0: 654, y1: 588.5, targetOrder: 1, interactionOnly: true,
        curve: { c1x: 2198, c1y: 654, c2x: 2218, c2y: 588.5 },
        linkTint: GREEN_LINK,
      },
      { source: 'operating_profit', target: 'tax', value: 2.8, sourceWidth: 19, targetWidth: 19, y0: 690.5, y1: 803.5, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 10.5, sourceWidth: 79, targetWidth: 77, y0: 909.5, y1: 948.5, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 3.2, sourceWidth: 23, targetWidth: 22, y0: 960.5, y1: 1116, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 2.3, sourceWidth: 15, targetWidth: 16, y0: 979.5, y1: 1268, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['MetaQuest', 'FoA', 'RL'],
      zh: {
        name: 'Meta · 2023 财年第四季度',
        meta: {
          title: 'Meta 2023 财年第四季度利润表',
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          titleTextLength: 2060,
        },
        annotationsSvg: annotations(true),
        nodes: {
          advertising: { label: '广告', notes: ['同比 +24%'] },
          other_revenue: { label: '其他', notes: ['同比 +82%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +24%'] },
          reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 +47%'] },
          revenue: { label: '收入', notes: ['同比 +25%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 81%', '同比 +7 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 41%', '同比 +20 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 35%', '同比 +20 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 26%', '同比 (4 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 8%', '同比 (6 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 6%', '同比 (4 个百分点)'] },
        },
        nonNodeMetrics: {
          interest: { label: '利息' },
          foa_operating_profit: { label: '应用家族营业利润' },
          reality_labs_operating_loss: { label: 'Reality Labs 营业亏损' },
        },
        layout: {
          labels: {
            advertising: label(528, 394, [name('广告'), value(), note('同比 +24%')]),
            other_revenue: {
              blocks: [
                { x: 528, top: 938, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 +82%')] },
                { x: 164, top: 1068, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] },
              ],
            },
            family_of_apps: label(875, 459, [name('应用家族（FoA）'), value(), note('同比 +24%')]),
            reality_labs: label(875, 1029, [name('Reality Labs（RL）', 34), value(), note('同比 +47%')]),
            revenue: label(1223, 593, [name('收入'), value(), note('同比 +25%')]),
            gross_profit: label(1571, 478, [name('毛利润'), value(), note('利润率 81%'), note('同比 +7 个百分点')]),
            cost_of_revenue: label(1571, 1153, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1912, 398, [name('营业利润'), value(), note('利润率 41%'), note('同比 +20 个百分点')]),
            operating_expenses: label(1922, 1005, [name('运营费用'), value(38)]),
            net_profit: label(2327, 478, [name('净利润'), value(), note('利润率 35%'), note('同比 +20 个百分点')], { anchor: 'start' }),
            tax: label(2434, 775, [name('税费', 32), value(31)], { lineGap: 8 }),
            rnd: label(2436, 899, [name('研发', 32), value(31), note('占收入 26%'), note('同比 (4 个百分点)')], { lineGap: 8 }),
            sm: label(2440, 1071, [name('销售与市场', 32), value(31), note('占收入 8%'), note('同比 (6 个百分点)')], { lineGap: 8 }),
            ga: label(2436, 1238, [name('管理费用', 32), value(31), note('占收入 6%'), note('同比 (4 个百分点)')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
