/* Meta — Q3 FY22 income statement ($B), reconstructed from the supplied reference. */
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
    <g transform="translate(0 26) scale(.62)">${BUSINESS_ICONS.metaLogo || ''}</g>
    <text x="177" y="155" font-family="Arial,Helvetica,sans-serif" font-size="128"
      font-weight="700" fill="#092730">Meta</text>`;

  const annotations = `
    <g font-family="'Noto Sans',Arial,sans-serif">
      <g transform="translate(84 565) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(468 1225)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
      <g data-typography-role="brand">
        <text x="620" y="1331" text-anchor="middle" font-family="Arial,Helvetica,sans-serif"
          font-size="62" font-weight="800" fill="#333333">portal</text>
        <text x="515" y="1385" font-size="26" font-weight="400" fill="${NOTE}">+ Spark AR, Horizon</text>
      </g>
      <g transform="translate(1777 237)">
        <path d="M18 0H288C302 0 310 9 310 23V78C310 92 302 101 288 101H178L155 122L132 101H18C6 101 0 92 0 78V23C0 9 6 0 18 0Z"
          fill="none" stroke="${BLUE_LABEL}" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="foa_operating_profit">
          <text x="70" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
          <text x="70" y="78" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$9.3B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="reality_labs_operating_loss">
          <text x="225" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
          <text x="225" y="78" text-anchor="middle" font-size="30" font-weight="400" fill="${RED_LABEL}">($3.7B)</text>
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
    key: 'meta-q3-fy22',
    name: 'Meta · Q3 FY22',
    company: 'Meta',
    meta: {
      company: 'Meta',
      title: 'Meta Q3 FY22 Income Statement',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/meta-q3-fy22.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2060,
      hidePeriodStamp: true,
      logoWidth: 480,
      logoHeight: 190,
      logoY: 239,
      logoViewBox: '0 0 480 220',
      logoSvg: companyLogo,
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
    nonNodeMetrics: [
      {
        id: 'foa_operating_profit',
        representation: 'annotation',
        label: 'FoA operating profit',
        value: 9.3,
        valueText: '$9.3B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
      {
        id: 'reality_labs_operating_loss',
        representation: 'annotation',
        label: 'Reality Labs operating loss',
        value: -3.7,
        valueText: '($3.7B)',
        type: 'cost',
        labelColor: RED_LABEL,
      },
    ],
    layout: {
      scale: 14.5,
      nodes: {
        advertising: { x: 480, y: 532, width: 70, height: 395 },
        other_revenue: { x: 480, y: 1120, width: 70, height: 2 },
        family_of_apps: { x: 829, y: 579, width: 70, height: 397 },
        reality_labs: { x: 829, y: 1265, width: 70, height: 6 },
        revenue: { x: 1181, y: 612, width: 70, height: 403 },
        gross_profit: { x: 1528, y: 580, width: 70, height: 319 },
        cost_of_revenue: { x: 1530, y: 995, width: 70, height: 82 },
        operating_profit: { x: 1892, y: 551, width: 70, height: 80 },
        operating_expenses: { x: 1894, y: 789, width: 70, height: 237 },
        net_profit: { x: 2233, y: 529, width: 70, height: 63 },
        tax: { x: 2233, y: 710, width: 70, height: 14 },
        interest: { x: 2233, y: 785, width: 70, height: 1 },
        rnd: { x: 2233, y: 875, width: 70, height: 131 },
        sm: { x: 2233, y: 1098, width: 70, height: 53 },
        ga: { x: 2233, y: 1285, width: 70, height: 47 },
      },
      labels: {
        advertising: label(519, 388, [name('Advertising'), value(), note('(4%) Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 519, top: 978, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('+9% Y/Y')] },
            { x: 178, top: 1106, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(870, 438, [name('Family of Apps (FoA)'), value(), note('(4%) Y/Y')]),
        reality_labs: label(864, 1124, [name('Reality Labs (RL)'), value(), note('(49%) Y/Y')]),
        revenue: label(1216, 472, [name('Revenue'), value(), note('(4%) Y/Y')]),
        gross_profit: label(1559, 399, [name('Gross Profit'), value(), note('79% margin'), note('(1pp) Y/Y')]),
        cost_of_revenue: label(1559, 1098, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1926, 371, [name('Operating profit'), value(), note('20% margin'), note('(15pp) Y/Y')]),
        operating_expenses: label(1919, 1050, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        net_profit: label(2358, 454, [name('Net profit'), value(), note('16% margin'), note('(16pp) Y/Y')], { anchor: 'start' }),
        tax: label(2405, 672, [name('Tax', 32), value(31)], { lineGap: 8 }),
        interest: label(2406, 759, [name('Interest', 32), value(31)], { lineGap: 8 }),
        rnd: label(2458, 881, [name('R&D', 32), value(31), note('33% of revenue'), note('+11pp Y/Y')], { lineGap: 8 }),
        sm: label(2459, 1060, [name('Sales & marketing', 32), value(31), note('14% of revenue'), note('+1pp Y/Y')], { lineGap: 8 }),
        ga: label(2459, 1234, [name('General & admin', 32), value(31), note('12% of revenue'), note('+2pp Y/Y')], { lineGap: 8 }),
      },
    },
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 27.2, notes: ['(4%) Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.2, notes: ['+9% Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: 'Family of Apps (FoA)', value: 27.4, notes: ['(4%) Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: 'Reality Labs (RL)', value: 0.3, notes: ['(49%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 27.7, notes: ['(4%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 22.0, valueText: '$22.0B', notes: ['79% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.7 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 5.7, notes: ['20% margin', '(15pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 16.3 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 4.4, notes: ['16% margin', '(16pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.2 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.1 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 9.2, notes: ['33% of revenue', '+11pp Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'Sales & marketing', value: 3.8, notes: ['14% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'General & admin', value: 3.4, notes: ['12% of revenue', '+2pp Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 27.2, sourceWidth: 395, targetWidth: 394, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.2, sourceWidth: 2, targetWidth: 3, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 27.4, sourceWidth: 397, targetWidth: 399, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.3, sourceWidth: 4, targetWidth: 4, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 22.0, sourceWidth: 319, targetWidth: 319, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.7, sourceWidth: 84, targetWidth: 82, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 5.7, sourceWidth: 80, targetWidth: 80, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 16.3, sourceWidth: 239, targetWidth: 237, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 4.4, sourceWidth: 63, targetWidth: 63, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.2, sourceWidth: 16, targetWidth: 14, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 1, targetWidth: 1, sourceOrder: 2, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 9.2, sourceWidth: 133, targetWidth: 131, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 3.8, sourceWidth: 55, targetWidth: 53, targetOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 3.4, sourceWidth: 49, targetWidth: 47, targetOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['MetaQuest', 'portal', 'FoA', 'RL', '+ Spark AR, Horizon'],
      zh: {
        name: 'Meta · 2022 财年第三季度',
        meta: {
          title: 'Meta 2022 财年第三季度利润表',
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
        },
        nodes: {
          advertising: { label: '广告', notes: ['同比 (4%)'] },
          other_revenue: { label: '其他', notes: ['同比 +9%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 (4%)'] },
          reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 (49%)'] },
          revenue: { label: '收入', notes: ['同比 (4%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 79%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 (15 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 16%', '同比 (16 个百分点)'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          rnd: { label: '研发', notes: ['占收入 33%', '同比 +11 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 14%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 12%', '同比 +2 个百分点'] },
        },
        nonNodeMetrics: {
          foa_operating_profit: { label: 'FoA 营业利润' },
          reality_labs_operating_loss: { label: 'RL 营业亏损' },
        },
        layout: {
          labels: {
            advertising: label(519, 388, [name('广告'), value(), note('同比 (4%)')]),
            other_revenue: {
              blocks: [
                { x: 519, top: 978, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 +9%')] },
                { x: 178, top: 1106, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] },
              ],
            },
            family_of_apps: label(870, 438, [name('应用家族（FoA）', 36), value(), note('同比 (4%)')]),
            reality_labs: label(864, 1124, [name('Reality Labs（RL）', 36), value(), note('同比 (49%)')]),
            revenue: label(1216, 472, [name('收入'), value(), note('同比 (4%)')]),
            gross_profit: label(1559, 399, [name('毛利润'), value(), note('利润率 79%'), note('同比 (1 个百分点)')]),
            cost_of_revenue: label(1559, 1098, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1926, 371, [name('营业利润'), value(), note('利润率 20%'), note('同比 (15 个百分点)')]),
            operating_expenses: label(1919, 1050, [name('运营费用'), value(38)]),
            net_profit: label(2358, 454, [name('净利润'), value(), note('利润率 16%'), note('同比 (16 个百分点)')], { anchor: 'start' }),
            tax: label(2405, 672, [name('税费', 32), value(31)], { lineGap: 8 }),
            interest: label(2406, 759, [name('利息', 32), value(31)], { lineGap: 8 }),
            rnd: label(2458, 881, [name('研发', 32), value(31), note('占收入 33%'), note('同比 +11 个百分点')], { lineGap: 8 }),
            sm: label(2459, 1060, [name('销售与市场', 32), value(31), note('占收入 14%'), note('同比 +1 个百分点')], { lineGap: 8 }),
            ga: label(2459, 1234, [name('管理费用', 32), value(31), note('占收入 12%'), note('同比 +2 个百分点')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
