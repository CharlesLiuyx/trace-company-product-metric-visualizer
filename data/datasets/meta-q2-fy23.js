/* Meta — Q2 FY23 income statement ($B), reconstructed from the supplied reference. */
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

  const annotations = () => `
    <g font-family="'Noto Sans',Arial,sans-serif">
      <g transform="translate(960 257)" data-typography-role="brand">
        <g transform="scale(0.5)" fill="none" stroke-width="34" stroke-linecap="round" stroke-linejoin="round">
          <path
            d="M28 142C43 84 70 46 101 45C126 44 145 76 166 112C188 149 209 173 236 157C260 143 265 92 244 61C225 32 190 36 161 75C142 101 124 140 101 167C73 200 35 190 20 158C7 129 14 92 34 69"
            transform="translate(0 7)"
            stroke="#33404c"
            opacity="0.28"
          />
          <path
            d="M28 142C43 84 70 46 101 45C126 44 145 76 166 112C188 149 209 173 236 157C260 143 265 92 244 61C225 32 190 36 161 75C142 101 124 140 101 167C73 200 35 190 20 158C7 129 14 92 34 69"
            stroke="#0878f8"
          />
        </g>
        <text x="160" y="99" font-size="124" font-weight="700" fill="#092730">Meta</text>
      </g>
      <g transform="translate(84 533) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(469 1184)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
      <text x="522" y="1263" font-size="23" font-weight="400" fill="${NOTE}">+ Spark AR, Horizon</text>
      <g transform="translate(1778 263)">
        <path d="M18 0H288C302 0 310 9 310 23V78C310 92 302 101 288 101H178L155 122L132 101H18C6 101 0 92 0 78V23C0 9 6 0 18 0Z" fill="none" stroke="${BLUE_LABEL}" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="foa_operating_profit">
          <text x="70" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
          <text x="70" y="78" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$13.1B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="rl_operating_loss">
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

  const labels = (zh = false) => ({
    advertising: label(521, 396, [name(zh ? '广告' : 'Advertising'), value(), note(zh ? '同比 +12%' : '+12% Y/Y')]),
    other_revenue: {
      blocks: [
        {
          x: 522,
          top: 947,
          anchor: 'middle',
          lineGap: 10,
          lines: [name(zh ? '其他' : 'Other'), value(), note(zh ? '同比 +3%' : '+3% Y/Y')],
        },
        {
          x: 170,
          top: 1092,
          anchor: 'start',
          lines: [{ text: zh ? '支付基础设施' : 'Payments infrastructure', size: 23, weight: 400, color: NOTE }],
        },
      ],
    },
    family_of_apps: label(
      869,
      427,
      [name(zh ? '应用家族（FoA）' : 'Family of Apps'), ...(!zh ? [name('(FoA)')] : []), value(), note(zh ? '同比 +12%' : '+12% Y/Y')],
      { lineGap: 9 }
    ),
    reality_labs: label(
      872,
      1004,
      [name(zh ? 'Reality Labs（RL）' : 'Reality Labs', zh ? 34 : 40), ...(!zh ? [name('(RL)')] : []), value(), note(zh ? '同比 (39%)' : '(39%) Y/Y')]
    ),
    revenue: label(1225, 577, [name(zh ? '收入' : 'Revenue'), value(), note(zh ? '同比 +11%' : '+11% Y/Y')]),
    gross_profit: label(1570, 474, [
      name(zh ? '毛利润' : 'Gross Profit'),
      value(),
      note(zh ? '利润率 81%' : '81% margin'),
      note(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y'),
    ]),
    cost_of_revenue: label(1570, 1129, [name(zh ? '收入' : 'Cost of'), name(zh ? '成本' : 'revenue'), value(38)], { lineGap: 9 }),
    operating_profit: label(1929, 410, [
      name(zh ? '营业利润' : 'Operating profit'),
      value(),
      note(zh ? '利润率 29%' : '29% margin'),
      note(zh ? '同比 +0 个百分点' : '+0pp Y/Y'),
    ]),
    operating_expenses: label(
      1921,
      997,
      [name(zh ? '运营费用' : 'Operating'), ...(!zh ? [name('expenses')] : []), value(38)],
      { lineGap: 9 }
    ),
    net_profit: label(
      2363,
      482,
      [
        name(zh ? '净利润' : 'Net profit'),
        value(),
        note(zh ? '利润率 24%' : '24% margin'),
        note(zh ? '同比 +1 个百分点' : '+1pp Y/Y'),
      ],
      { anchor: 'start' }
    ),
    tax: label(2452, 688, [name(zh ? '税费' : 'Tax', 32), value(31)], { lineGap: 8 }),
    interest: label(2456, 778, [name(zh ? '利息' : 'Interest', 32), value(31)], { lineGap: 8 }),
    rnd: label(2455, 885, [
      name(zh ? '研发' : 'R&D', 32),
      value(31),
      note(zh ? '占收入 29%' : '29% of revenue'),
      note(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y'),
    ], { lineGap: 8 }),
    ga: label(2452, 1072, [
      name(zh ? '管理费用' : 'General & admin', 32),
      value(31),
      note(zh ? '占收入 13%' : '13% of revenue'),
      note(zh ? '同比 +3 个百分点' : '+3pp Y/Y'),
    ], { lineGap: 8 }),
    sm: label(2455, 1232, [
      name(zh ? '销售与市场' : 'Sales & marketing', 32),
      value(31),
      note(zh ? '占收入 10%' : '10% of revenue'),
      note(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y'),
    ], { lineGap: 8 }),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'meta-q2-fy23',
    name: 'Meta - Q2 FY23',
    company: 'Meta',
    meta: {
      company: 'Meta',
      title: 'Meta Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/meta-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2060,
      hidePeriodStamp: true,
      logoWidth: 300,
      logoHeight: 235,
      logoY: 252,
      logoViewBox: '0 0 270 220',
      logoSvg: '',
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
    annotationsSvg: annotations(),
    nonNodeMetrics: [
      {
        id: 'foa_operating_profit',
        representation: 'annotation',
        label: 'FoA operating profit',
        value: 13.1,
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
      {
        id: 'rl_operating_loss',
        representation: 'annotation',
        label: 'RL operating loss',
        value: -3.7,
        valueText: '($3.7B)',
        type: 'cost',
        labelColor: RED_LABEL,
      },
    ],
    layout: {
      scale: 9.48,
      nodes: {
        advertising: { x: 488, y: 549, width: 70, height: 298 },
        other_revenue: { x: 488, y: 1094, width: 70, height: 2 },
        family_of_apps: { x: 836, y: 632, width: 70, height: 302 },
        reality_labs: { x: 836, y: 1203, width: 70, height: 3 },
        revenue: { x: 1190, y: 721, width: 70, height: 304 },
        gross_profit: { x: 1538, y: 655, width: 70, height: 247 },
        cost_of_revenue: { x: 1543, y: 1052, width: 70, height: 55 },
        operating_profit: { x: 1896, y: 594, width: 70, height: 88 },
        operating_expenses: { x: 1894, y: 820, width: 70, height: 157 },
        net_profit: { x: 2241, y: 531, width: 70, height: 73 },
        tax: { x: 2241, y: 719, width: 70, height: 12 },
        interest: { x: 2241, y: 819, width: 70, height: 1 },
        rnd: { x: 2241, y: 885, width: 70, height: 88 },
        ga: { x: 2241, y: 1071, width: 70, height: 38 },
        sm: { x: 2241, y: 1235, width: 70, height: 29 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 31.5, notes: ['+12% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.2, notes: ['+3% Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 31.7, notes: ['+12% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 0.3, notes: ['(39%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 32.0, valueText: '$32.0B', notes: ['+11% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 26.1, notes: ['81% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.9 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 9.4, notes: ['29% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 16.7 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 7.8, notes: ['24% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.5 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.1 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 9.3, notes: ['29% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'General & admin', value: 4.2, notes: ['13% of revenue', '+3pp Y/Y'] },
      { id: 'sm', col: 5, order: 5, type: 'cost', label: 'Sales & marketing', value: 3.2, notes: ['10% of revenue', '(2pp) Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 31.5, sourceWidth: 298, targetWidth: 300, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.2, sourceWidth: 2, targetWidth: 2, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 31.7, sourceWidth: 302, targetWidth: 301, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.3, sourceWidth: 3, targetWidth: 3, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 26.1, sourceWidth: 248, targetWidth: 247, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.9, sourceWidth: 56, targetWidth: 55, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 9.4, sourceWidth: 89, targetWidth: 88, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 16.7, sourceWidth: 158, targetWidth: 157, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 7.8, sourceWidth: 74, targetWidth: 73, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.5, sourceWidth: 13, targetWidth: 12, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 1, targetWidth: 1, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 9.3, sourceWidth: 89, targetWidth: 88, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 4.2, sourceWidth: 39, targetWidth: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 3.2, sourceWidth: 29, targetWidth: 29, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['FoA', 'RL', 'MetaQuest', '+ Spark AR, Horizon'],
      zh: {
        name: 'Meta · 2023 财年第二季度',
        meta: {
          title: 'Meta 2023 财年第二季度利润表',
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
        },
        nonNodeMetrics: {
          foa_operating_profit: { label: 'FoA 营业利润' },
          rl_operating_loss: { label: 'RL 营业亏损' },
        },
        nodes: {
          advertising: { label: '广告', notes: ['同比 +12%'] },
          other_revenue: { label: '其他', notes: ['同比 +3%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +12%'] },
          reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 (39%)'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 81%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 29%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 24%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          rnd: { label: '研发', notes: ['占收入 29%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 13%', '同比 +3 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 10%', '同比 (2 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
