/* Meta — Q4 FY22 income statement ($B), reconstructed from the supplied reference. */
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
      <g transform="translate(84 563) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>

      <g data-typography-role="brand">
        <g transform="translate(948 244) scale(0.55)">
          <path d="M28 142C43 84 70 46 101 45C126 44 145 76 166 112C188 149 209 173 236 157C260 143 265 92 244 61C225 32 190 36 161 75C142 101 124 140 101 167C73 200 35 190 20 158C7 129 14 92 34 69"
            fill="none" stroke="#0878f8" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <text x="1120" y="356" font-family="Arial,Helvetica,sans-serif" font-size="124" font-weight="700" fill="#092730">Meta</text>
      </g>

      <g data-typography-role="brand">
        <g transform="translate(470 1202)">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
        <text x="524" y="1295" font-family="Arial,Helvetica,sans-serif" font-size="25" font-weight="400" fill="${NOTE}">+ Spark AR, Horizon</text>
      </g>

      <g transform="translate(1775 235)">
        <path d="M18 0H283C295 0 301 9 301 23V78C301 92 295 102 283 102H169L151 124L132 102H18C6 102 0 92 0 78V23C0 9 6 0 18 0Z"
          fill="none" stroke="${BLUE_LABEL}" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="foa_operating_profit">
          <text x="73" y="44" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
          <text x="73" y="87" text-anchor="middle" font-size="30" font-weight="500" fill="#008e00">$10.7B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="reality_labs_operating_loss">
          <text x="233" y="44" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
          <text x="233" y="87" text-anchor="middle" font-size="30" font-weight="500" fill="${RED_LABEL}">($4.3B)</text>
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
    key: 'meta-q4-fy22',
    name: 'Meta - Q4 FY22',
    company: 'Meta',
    meta: {
      company: 'Meta',
      title: 'Meta Q4 FY22\u00a0Income\u00a0Statement',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/meta-q4-fy22.png', width: 2667, height: 1500 },
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
    annotationsSvg: annotations,

    layout: {
      scale: 9.75,
      nodes: {
        advertising: { x: 490, y: 571, width: 66, height: 305 },
        other_revenue: { x: 490, y: 1104, width: 66, height: 3 },
        family_of_apps: { x: 838, y: 615, width: 66, height: 307 },
        reality_labs: { x: 829, y: 1238, width: 65, height: 6 },
        revenue: { x: 1182, y: 659, width: 66, height: 314 },
        gross_profit: { x: 1536, y: 623, width: 65, height: 232 },
        cost_of_revenue: { x: 1536, y: 939, width: 65, height: 80 },
        operating_profit: { x: 1901, y: 573, width: 65, height: 61 },
        operating_expenses: { x: 1901, y: 793, width: 65, height: 170 },
        net_profit: { x: 2232, y: 541, width: 66, height: 44 },
        tax: { x: 2232, y: 709, width: 66, height: 13 },
        interest: { x: 2232, y: 822, width: 66, height: 1 },
        rnd: { x: 2232, y: 905, width: 66, height: 95 },
        sm: { x: 2232, y: 1098, width: 66, height: 42 },
        ga: { x: 2232, y: 1262, width: 66, height: 28 },
      },
      labels: {
        advertising: label(524, 426, [name('Advertising'), value(), note('(4%) Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 524, top: 961, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('+19% Y/Y')] },
            { x: 170, top: 1088, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(871, 420, [name('Family of Apps'), name('(FoA)'), value(), note('(4%) Y/Y')], { lineGap: 9 }),
        reality_labs: label(858, 1046, [name('Reality Labs'), name('(RL)'), value(), note('(17%) Y/Y')]),
        revenue: label(1215, 515, [name('Revenue'), value(), note('(4%) Y/Y')]),
        gross_profit: label(1559, 441, [name('Gross Profit'), value(), note('74% margin'), note('(6pp) Y/Y')]),
        cost_of_revenue: label(1559, 1035, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1926, 388, [name('Operating profit'), value(), note('20% margin'), note('(17pp) Y/Y')]),
        operating_expenses: label(1918, 978, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        net_profit: label(2360, 454, [name('Net profit'), value(), note('14% margin'), note('(16pp) Y/Y')], { anchor: 'start' }),
        tax: label(2455, 673, [name('Tax', 32), value(31)], { lineGap: 8 }),
        interest: label(2454, 783, [name('Interest', 32), value(31)], { lineGap: 8 }),
        rnd: label(2458, 901, [name('R&D', 32), value(31), note('30% of revenue'), note('+9pp Y/Y')], { lineGap: 8 }),
        sm: label(2459, 1072, [name('Sales & marketing', 32), value(31), note('14% of revenue'), note('+1pp Y/Y')], { lineGap: 8 }),
        ga: label(2458, 1244, [name('General & admin', 32), value(31), note('10% of revenue'), note('+0pp Y/Y')], { lineGap: 8 }),
      },
    },

    nonNodeMetrics: [
      {
        id: 'foa_operating_profit',
        representation: 'annotation',
        label: 'FoA operating profit',
        value: 10.7,
        valueText: '$10.7B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
      {
        id: 'reality_labs_operating_loss',
        representation: 'annotation',
        label: 'Reality Labs operating loss',
        value: -4.3,
        valueText: '($4.3B)',
        type: 'cost',
        labelColor: RED_LABEL,
      },
    ],

    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 31.3, notes: ['(4%) Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.2, notes: ['+19% Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 31.4, notes: ['(4%) Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 0.7, notes: ['(17%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 32.2, notes: ['(4%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 23.8, notes: ['74% margin', '(6pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 8.3 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 6.4, notes: ['20% margin', '(17pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 17.4 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 4.7, notes: ['14% margin', '(16pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.5 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.3 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 9.8, notes: ['30% of revenue', '+9pp Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'Sales & marketing', value: 4.6, notes: ['14% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'General & admin', value: 3.1, notes: ['10% of revenue', '+0pp Y/Y'] },
    ],

    links: [
      { source: 'advertising', target: 'family_of_apps', value: 31.3, sourceWidth: 305, targetWidth: 305, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.2, sourceWidth: 2, targetWidth: 2, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 31.4, sourceWidth: 307, targetWidth: 307, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.7, sourceWidth: 6, targetWidth: 7, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 23.8, sourceWidth: 232, targetWidth: 232, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 8.3, sourceWidth: 82, targetWidth: 80, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 6.4, sourceWidth: 61, targetWidth: 61, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 17.4, sourceWidth: 170, targetWidth: 170, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 4.6, sourceWidth: 44, targetWidth: 44, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.5, sourceWidth: 14, targetWidth: 13, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 3, targetWidth: 1, sourceOrder: 2, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 9.8, sourceWidth: 95, targetWidth: 95, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 4.6, sourceWidth: 45, targetWidth: 42, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 3.1, sourceWidth: 30, targetWidth: 28, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['MetaQuest', 'FoA', 'RL', '+ Spark AR, Horizon'],
      zh: {
        name: 'Meta · 2022 财年第四季度',
        meta: {
          title: 'Meta 2022 财年第四季度利润表',
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          titleTextLength: 1900,
        },
        nonNodeMetrics: {
          foa_operating_profit: { label: 'FoA 营业利润' },
          reality_labs_operating_loss: { label: 'Reality Labs 营业亏损' },
        },
        nodes: {
          advertising: { label: '广告', notes: ['同比 (4%)'] },
          other_revenue: { label: '其他', notes: ['同比 +19%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 (4%)'] },
          reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 (17%)'] },
          revenue: { label: '收入', notes: ['同比 (4%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 (6 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 (17 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 14%', '同比 (16 个百分点)'] },
          tax: { label: '税费' },
          interest: { label: '利息费用' },
          rnd: { label: '研发', notes: ['占收入 30%', '同比 +9 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 14%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: {
            advertising: label(524, 426, [name('广告'), value(), note('同比 (4%)')]),
            other_revenue: {
              blocks: [
                { x: 524, top: 961, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 +19%')] },
                { x: 170, top: 1088, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] },
              ],
            },
            family_of_apps: label(871, 420, [name('应用家族（FoA）', 34), value(), note('同比 (4%)')]),
            reality_labs: label(858, 1046, [name('Reality Labs（RL）', 34), value(), note('同比 (17%)')]),
            revenue: label(1215, 515, [name('收入'), value(), note('同比 (4%)')]),
            gross_profit: label(1559, 441, [name('毛利润'), value(), note('利润率 74%'), note('同比 (6 个百分点)')]),
            cost_of_revenue: label(1559, 1035, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1926, 388, [name('营业利润'), value(), note('利润率 20%'), note('同比 (17 个百分点)')]),
            operating_expenses: label(1918, 978, [name('运营费用'), value(38)]),
            net_profit: label(2360, 454, [name('净利润'), value(), note('利润率 14%'), note('同比 (16 个百分点)')], { anchor: 'start' }),
            tax: label(2455, 673, [name('税费', 32), value(31)], { lineGap: 8 }),
            interest: label(2454, 783, [name('利息费用', 32), value(31)], { lineGap: 8 }),
            rnd: label(2458, 901, [name('研发', 32), value(31), note('占收入 30%'), note('同比 +9 个百分点')], { lineGap: 8 }),
            sm: label(2459, 1072, [name('销售与市场', 32), value(31), note('占收入 14%'), note('同比 +1 个百分点')], { lineGap: 8 }),
            ga: label(2458, 1244, [name('管理费用', 32), value(31), note('占收入 10%'), note('同比 +0 个百分点')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
