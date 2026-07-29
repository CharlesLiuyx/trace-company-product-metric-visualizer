/* Meta — Q1 FY23 income statement ($B), measured from the supplied Source. */
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
  const companyLogo = `
    <g transform="translate(8 4) scale(.48)">${BUSINESS_ICONS.metaLogo || ''}</g>
    <text x="150" y="92" font-family="Arial,Helvetica,sans-serif" font-size="92" font-weight="700" fill="#062a35">Meta</text>`;

  const operatingCallout = () => `
    <g transform="translate(1784 258)">
      <path d="M18 0H282C294 0 300 9 300 22V78C300 91 294 101 282 101H174L150 123L126 101H18C6 101 0 91 0 78V22C0 9 6 0 18 0Z"
        fill="none" stroke="${BLUE_LABEL}" stroke-width="3"/>
      <g class="sankey-interactive-annotation" data-node="foa_operating_profit">
        <text x="69" y="42" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
        <text x="69" y="80" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$11.2B</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="reality_labs_operating_loss">
        <text x="224" y="42" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
        <text x="224" y="80" text-anchor="middle" font-size="30" font-weight="400" fill="${RED_LABEL}">($4.0B)</text>
      </g>
    </g>`;
  const interestGuide = (zh) => `
    <g class="sankey-interactive-annotation" data-node="interest"
      data-link-numerator="interest" data-link-denominator="net_profit"
      data-link-anchor-x="2200" data-link-anchor-y="640">
      <path d="M2130 640H2180C2210 640 2208 585 2240 585" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2180" y="670" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '利息收入' : 'Interest'}</text>
      <text x="2180" y="712" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$0.1B</text>
    </g>`;
  const annotations = (zh) => `
    <g font-family="'Noto Sans',Arial,sans-serif">
      <g transform="translate(84 563) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(470 1208)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
      ${operatingCallout()}
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
    key: 'meta-q1-fy23',
    name: 'Meta - Q1 FY23',
    company: 'Meta',
    meta: {
      company: 'Meta', title: 'Meta Q1 FY23 Income Statement', period: 'Q1 FY23', periodNote: 'Ending Mar. 2023',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/meta-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2060,
      hidePeriodStamp: true,
      logoWidth: 500, logoHeight: 120, logoY: 252, logoViewBox: '0 0 520 120', logoSvg: companyLogo,
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
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.1, type: 'profit', labelColor: GREEN_LABEL },
      { id: 'foa_operating_profit', representation: 'annotation', label: 'FoA operating profit', value: 11.2, type: 'profit' },
      { id: 'reality_labs_operating_loss', representation: 'annotation', label: 'RL operating loss', value: -4.0, valueText: '($4.0B)', type: 'cost' },
    ],
    layout: {
      scale: 10.88,
      routes: { interest: { x: 2130, y: 640, width: 0, height: 1 } },
      nodes: {
        advertising: { x: 486, y: 577, width: 69, height: 307 },
        other_revenue: { x: 486, y: 1134, width: 69, height: 2 },
        family_of_apps: { x: 837, y: 647, width: 67, height: 309 },
        reality_labs: { x: 837, y: 1238, width: 67, height: 5 },
        revenue: { x: 1185, y: 695, width: 68, height: 312 },
        gross_profit: { x: 1536, y: 652, width: 68, height: 246 },
        cost_of_revenue: { x: 1539, y: 1015, width: 67, height: 66 },
        operating_profit: { x: 1904, y: 589, width: 67, height: 80 },
        operating_expenses: { x: 1901, y: 803, width: 68, height: 167 },
        net_profit: { x: 2239, y: 522, width: 69, height: 63 },
        tax: { x: 2239, y: 748, width: 69, height: 18 },
        rnd: { x: 2239, y: 849, width: 69, height: 102 },
        sm: { x: 2239, y: 1060, width: 69, height: 34 },
        ga: { x: 2239, y: 1209, width: 69, height: 32 },
      },
      labels: {
        advertising: label(522, 432, [name('Advertising'), value(), note('+4% Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 522, top: 988, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('(5%) Y/Y')] },
            { x: 166, top: 1122, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(870, 452, [name('Family of Apps'), name('(FoA)'), value(), note('+4% Y/Y')], { lineGap: 9 }),
        reality_labs: label(870, 1044, [name('Reality Labs'), name('(RL)'), value(), note('(51%) Y/Y')]),
        revenue: label(1220, 549, [name('Revenue'), value(), note('+3% Y/Y')]),
        gross_profit: label(1570, 471, [name('Gross Profit'), value(), note('79% margin'), note('+0pp Y/Y')]),
        cost_of_revenue: label(1565, 1103, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1935, 407, [name('Operating profit'), value(), note('25% margin'), note('(5pp) Y/Y')]),
        operating_expenses: label(1927, 989, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        net_profit: label(2360, 484, [name('Net profit'), value(), note('20% margin'), note('(7pp) Y/Y')], { anchor: 'start' }),
        tax: label(2458, 724, [name('Tax', 32), value(31)], { lineGap: 8 }),
        rnd: label(2461, 860, [name('R&D', 32), value(31), note('33% of revenue'), note('+5pp Y/Y')], { lineGap: 8 }),
        sm: label(2459, 1030, [name('Sales & marketing', 32), value(31), note('11% of revenue'), note('(1pp) Y/Y')], { lineGap: 8 }),
        ga: label(2458, 1198, [name('General & admin', 32), value(31), note('10% of revenue'), note('+2pp Y/Y')], { lineGap: 8 }),
        interest: { blocks: [] },
      },
    },
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 28.1, notes: ['+4% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.2, notes: ['(5%) Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 28.3, notes: ['+4% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 0.3, notes: ['(51%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 28.6, notes: ['+3% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 22.5, notes: ['79% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 7.2, notes: ['25% margin', '(5pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 15.3 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 5.7, notes: ['20% margin', '(7pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.6 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 9.4, notes: ['33% of revenue', '+5pp Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'Sales & marketing', value: 3.0, valueText: '($3.0B)', notes: ['11% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'General & admin', value: 2.9, notes: ['10% of revenue', '+2pp Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 28.1, sourceWidth: 307, targetWidth: 307, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.2, sourceWidth: 2, targetWidth: 2, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 28.3, sourceWidth: 309, targetWidth: 309, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.3, sourceWidth: 5, targetWidth: 3, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 22.5, sourceWidth: 246, targetWidth: 246, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.1, sourceWidth: 66, targetWidth: 66, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 7.2, sourceWidth: 79, targetWidth: 80, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 15.3, sourceWidth: 167, targetWidth: 167, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 5.6, sourceWidth: 62, targetWidth: 62, sourceOrder: 0, targetOrder: 0 },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 1, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.6, sourceWidth: 18, targetWidth: 18, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 9.4, sourceWidth: 102, targetWidth: 102, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 3.0, sourceWidth: 33, targetWidth: 34, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 2.9, sourceWidth: 32, targetWidth: 32, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['MetaQuest', 'FoA', 'RL'],
      zh: {
        name: 'Meta · 2023 财年第一季度',
        meta: { title: 'Meta 2023 财年第一季度利润表', period: '2023 财年第一季度', periodNote: '截至 2023 年 3 月' },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          interest: { label: '利息收入' },
          foa_operating_profit: { label: 'FoA 营业利润' },
          reality_labs_operating_loss: { label: 'RL 营业亏损' },
        },
        nodes: {
          advertising: { label: '广告', notes: ['同比 +4%'] }, other_revenue: { label: '其他', notes: ['同比 (5%)'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +4%'] }, reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 (51%)'] },
          revenue: { label: '收入', notes: ['同比 +3%'] }, gross_profit: { label: '毛利润', notes: ['利润率 79%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 25%', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 20%', '同比 (7 个百分点)'] },
          tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 33%', '同比 +5 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 11%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 +2 个百分点'] },
        },
        layout: {
          labels: {
            advertising: label(522, 432, [name('广告'), value(), note('同比 +4%')]),
            other_revenue: { blocks: [{ x: 522, top: 988, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 (5%)')] }, { x: 166, top: 1122, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] }] },
            family_of_apps: label(870, 452, [name('应用家族（FoA）'), value(), note('同比 +4%')]),
            reality_labs: label(870, 1044, [name('Reality Labs（RL）', 34), value(), note('同比 (51%)')]),
            revenue: label(1220, 549, [name('收入'), value(), note('同比 +3%')]),
            gross_profit: label(1570, 471, [name('毛利润'), value(), note('利润率 79%'), note('同比 +0 个百分点')]),
            cost_of_revenue: label(1565, 1103, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1935, 407, [name('营业利润'), value(), note('利润率 25%'), note('同比 (5 个百分点)')]),
            operating_expenses: label(1927, 989, [name('运营费用'), value(38)]),
            net_profit: label(2360, 484, [name('净利润'), value(), note('利润率 20%'), note('同比 (7 个百分点)')], { anchor: 'start' }),
            tax: label(2458, 724, [name('税费', 32), value(31)], { lineGap: 8 }),
            rnd: label(2461, 860, [name('研发', 32), value(31), note('占收入 33%'), note('同比 +5 个百分点')], { lineGap: 8 }),
            sm: label(2459, 1030, [name('销售与市场', 32), value(31), note('占收入 11%'), note('同比 (1 个百分点)')], { lineGap: 8 }),
            ga: label(2458, 1198, [name('管理费用', 32), value(31), note('占收入 10%'), note('同比 +2 个百分点')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
