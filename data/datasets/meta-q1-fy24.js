/* Meta — Q1 FY24 income statement ($B), reconstructed from the supplied reference. */
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
      <g transform="translate(82 537) scale(1.45)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(471 1189)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
      <g transform="translate(955 253)" data-typography-role="brand">
        <path transform="scale(0.48)"
          d="M28 142C43 84 70 46 101 45C126 44 145 76 166 112C188 149 209 173 236 157C260 143 265 92 244 61C225 32 190 36 161 75C142 101 124 140 101 167C73 200 35 190 20 158C7 129 14 92 34 69"
          fill="none" stroke="#0878f8" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="158" y="96" font-family="Arial,Helvetica,sans-serif" font-size="100" font-weight="700" fill="#092730">Meta</text>
      </g>
      <g transform="translate(1764 248)">
        <path d="M18 0H282C294 0 300 8 300 21V78C300 91 294 99 282 99H175L150 121L126 99H18C6 99 0 91 0 78V21C0 8 6 0 18 0Z"
          fill="none" stroke="${BLUE_LABEL}" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="foa_operating_profit">
          <text x="72" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
          <text x="72" y="78" text-anchor="middle" font-size="30" fill="${GREEN_LABEL}">$17.7B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="rl_operating_loss">
          <text x="228" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
          <text x="228" y="78" text-anchor="middle" font-size="30" fill="${RED_LABEL}">($3.8B)</text>
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
    key: 'meta-q1-fy24',
    name: 'Meta - Q1 FY24',
    company: 'Meta',
    meta: {
      company: 'Meta',
      title: 'Meta Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/meta-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2060,
      hidePeriodStamp: true,
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
      scale: 8.75,
      nodes: {
        advertising: { x: 494, y: 569, width: 68, height: 312 },
        other_revenue: { x: 494, y: 1079, width: 68, height: 4 },
        family_of_apps: { x: 839, y: 658, width: 68, height: 315 },
        reality_labs: { x: 839, y: 1230, width: 68, height: 6 },
        revenue: { x: 1189, y: 723, width: 68, height: 318 },
        gross_profit: { x: 1537, y: 655, width: 68, height: 262 },
        cost_of_revenue: { x: 1537, y: 1087, width: 68, height: 59 },
        operating_profit: { x: 1885, y: 584, width: 68, height: 121 },
        operating_expenses: { x: 1885, y: 844, width: 68, height: 141 },
        interest: { x: 2132, y: 659, width: 67, height: 5 },
        net_profit: { x: 2232, y: 504, width: 69, height: 109 },
        tax: { x: 2232, y: 797, width: 69, height: 16 },
        rnd: { x: 2232, y: 908, width: 69, height: 87 },
        ga: { x: 2232, y: 1102, width: 69, height: 31 },
        sm: { x: 2232, y: 1243, width: 69, height: 23 },
      },
      labels: {
        advertising: label(528, 423, [name('Advertising'), value(), note('+27% Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 528, top: 932, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('+85% Y/Y')] },
            { x: 164, top: 1072, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(873, 458, [name('Family of Apps'), name('(FoA)'), value(), note('+27% Y/Y')], { lineGap: 9 }),
        reality_labs: label(873, 1033, [name('Reality Labs'), name('(RL)'), value(), note('+30% Y/Y')]),
        revenue: label(1223, 579, [name('Revenue'), value(), note('+27% Y/Y')]),
        gross_profit: label(1571, 474, [name('Gross Profit'), value(), note('82% margin'), note('+3pp Y/Y')]),
        cost_of_revenue: label(1571, 1167, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1912, 399, [name('Operating profit'), value(), note('38% margin'), note('+13pp Y/Y')]),
        operating_expenses: label(1919, 997, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        interest: label(2165, 676, [name('Interest', 32), value(31)], { lineGap: 8 }),
        net_profit: label(2323, 500, [name('Net profit'), value(), note('34% margin'), note('+14pp Y/Y')], { anchor: 'start' }),
        tax: label(2434, 771, [name('Tax', 32), value(31)], { lineGap: 8 }),
        rnd: label(2433, 906, [name('R&D', 32), value(31), note('27% of revenue'), note('(5pp) Y/Y')], { lineGap: 8 }),
        ga: label(2436, 1070, [name('G&A', 32), value(31), note('9% of revenue'), note('(1pp) Y/Y')], { lineGap: 8 }),
        sm: label(2439, 1238, [name('S&M', 32), value(31), note('7% of revenue'), note('(4pp) Y/Y')], { lineGap: 8 }),
      },
    },
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 35.6, notes: ['+27% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.4, notes: ['+85% Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 36.0, valueText: '$36.0B', notes: ['+27% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 0.4, notes: ['+30% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 36.5, notes: ['+27% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 29.8, notes: ['82% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.6 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 13.8, notes: ['38% margin', '+13pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 16.0, valueText: '($16.0B)' },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.4 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 12.4, notes: ['34% margin', '+14pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 1.8 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 10.0, valueText: '($10.0B)', notes: ['27% of revenue', '(5pp) Y/Y'] },
      { id: 'ga', col: 6, order: 3, type: 'cost', label: 'G&A', value: 3.5, notes: ['9% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 6, order: 4, type: 'cost', label: 'S&M', value: 2.6, notes: ['7% of revenue', '(4pp) Y/Y'] },
    ],
    nonNodeMetrics: [
      { id: 'foa_operating_profit', representation: 'annotation', value: 17.7, type: 'profit', valueText: '$17.7B', label: 'FoA operating profit' },
      { id: 'rl_operating_loss', representation: 'annotation', value: -3.8, type: 'cost', valueText: '($3.8B)', label: 'RL operating loss' },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 35.6, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.4, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 36.0, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.4, sourceWidth: 6, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 29.8, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.6, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 13.8, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 16.0, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 12.0, sourceOrder: 0, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 0.4, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.8, sourceOrder: 1, targetWidth: 16, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 10.0, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 3.5, sourceOrder: 1, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 2.6, sourceOrder: 2, targetOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['Meta', 'MetaQuest', 'FoA', 'RL'],
      zh: {
        name: 'Meta · 2024 财年第一季度',
        meta: { title: 'Meta 2024 财年第一季度利润表', period: '2024 财年第一季度', periodNote: '截至 2024 年 3 月' },
        nodes: {
          advertising: { label: '广告', notes: ['同比 +27%'] },
          other_revenue: { label: '其他', notes: ['同比 +85%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +27%'] },
          reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 +30%'] },
          revenue: { label: '收入', notes: ['同比 +27%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 38%', '同比 +13 个百分点'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息收入' },
          net_profit: { label: '净利润', notes: ['利润率 34%', '同比 +14 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 27%', '同比 (5 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 9%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (4 个百分点)'] },
        },
        nonNodeMetrics: {
          foa_operating_profit: { label: 'FoA 营业利润' },
          rl_operating_loss: { label: 'RL 营业亏损' },
        },
        layout: {
          labels: {
            other_revenue: {
              blocks: [
                { x: 528, top: 932, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 +85%')] },
                { x: 164, top: 1072, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] },
              ],
            },
            family_of_apps: label(873, 458, [name('应用家族（FoA）', 34), value(), note('同比 +27%')]),
            reality_labs: label(873, 1033, [name('Reality Labs（RL）', 34), value(), note('同比 +30%')]),
            gross_profit: label(1571, 474, [name('毛利润'), value(), note('利润率 82%'), note('同比 +3 个百分点')]),
            cost_of_revenue: label(1571, 1167, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1912, 399, [name('营业利润'), value(), note('利润率 38%'), note('同比 +13 个百分点')]),
            operating_expenses: label(1919, 997, [name('运营费用'), value(38)]),
            interest: label(2165, 676, [name('利息收入', 32), value(31)], { lineGap: 8 }),
            net_profit: label(2323, 500, [name('净利润'), value(), note('利润率 34%'), note('同比 +14 个百分点')], { anchor: 'start' }),
            tax: label(2434, 771, [name('税费', 32), value(31)], { lineGap: 8 }),
            rnd: label(2433, 906, [name('研发', 32), value(31), note('占收入 27%'), note('同比 (5 个百分点)')], { lineGap: 8 }),
            ga: label(2436, 1070, [name('管理费用', 32), value(31), note('占收入 9%'), note('同比 (1 个百分点)')], { lineGap: 8 }),
            sm: label(2439, 1238, [name('销售与市场', 32), value(31), note('占收入 7%'), note('同比 (4 个百分点)')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
