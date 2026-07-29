/* Meta — Q2 FY25 income statement ($B), measured from the supplied reference. */
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

  const annotations = (zh) => `
    <g font-family="'Noto Sans',Arial,sans-serif">
      <g transform="translate(84 538) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(500 1180)" data-typography-role="brand">${(BUSINESS_ICONS.metaQuestWordmark || '').replace('MetaQuest', 'Meta Quest')}</g>
      <g transform="translate(1829 222)">
        <path d="M18 0H288C302 0 310 9 310 23V78C310 92 302 101 288 101H178L155 122L132 101H18C6 101 0 92 0 78V23C0 9 6 0 18 0Z"
          fill="none" stroke="${BLUE_LABEL}" stroke-width="4"/>
        <g class="sankey-interactive-annotation" data-node="family_of_apps_operating_profit">
          <text x="70" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
          <text x="70" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${GREEN_LABEL}">$25.0B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="reality_labs_operating_loss">
          <text x="225" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
          <text x="225" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${RED_LABEL}">($4.5B)</text>
        </g>
      </g>
      <g class="sankey-interactive-annotation"
        data-node="interest"
        data-link-numerator="interest"
        data-link-denominator="net_profit"
        data-link-anchor-x="2250"
        data-link-anchor-y="655">
        <path d="M2185 681H2255C2282 681 2284 629 2301 629"
          fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
        <text x="2230" y="722" text-anchor="middle" font-size="31" font-weight="800"
          fill="${GREEN_LABEL}">${zh ? '利息' : 'Interest'}</text>
        <text x="2230" y="763" text-anchor="middle" font-size="31" font-weight="400"
          fill="${GREEN_LABEL}">$0.1B</text>
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
    key: 'meta-q2-fy25',
    name: 'Meta - Q2 FY25',
    company: 'Meta',
    meta: {
      company: 'Meta',
      title: 'Meta Q2 FY25 Income Statement',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/meta-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2032,
      hidePeriodStamp: true,
      logoWidth: 272,
      logoHeight: 220,
      logoY: 252,
      logoViewBox: '0 0 270 220',
      logoSvg: BUSINESS_ICONS.metaLogo || '',
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
      scale: 8.42,
      routes: {
        interest: { x: 2185, y: 681, width: 0, height: 1 },
      },
      nodes: {
        advertising: { x: 489, y: 535, width: 69, height: 391 },
        other_revenue: { x: 488, y: 1160, width: 70, height: 4 },
        family_of_apps: { x: 851, y: 615, width: 68, height: 396 },
        reality_labs: { x: 851, y: 1284, width: 70, height: 2 },
        revenue: { x: 1214, y: 694, width: 68, height: 400 },
        gross_profit: { x: 1577, y: 621, width: 68, height: 327 },
        cost_of_revenue: { x: 1577, y: 1128, width: 68, height: 69 },
        operating_profit: { x: 1940, y: 548, width: 68, height: 170 },
        operating_expenses: { x: 1940, y: 870, width: 68, height: 154 },
        net_profit: { x: 2301, y: 476, width: 69, height: 153 },
        tax: { x: 2301, y: 799, width: 69, height: 15 },
        rnd: { x: 2301, y: 952, width: 69, height: 106 },
        sm: { x: 2301, y: 1180, width: 69, height: 23 },
        ga: { x: 2301, y: 1328, width: 69, height: 21 },
      },
      labels: {
        interest: { blocks: [] },
        advertising: label(524, 391, [name('Advertising'), value(), note('+21% Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 524, top: 1012, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('+50% Y/Y')] },
            { x: 156, top: 1145, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(886, 416, [name('Family of Apps'), name('(FoA)'), value(), note('+22% Y/Y')], { lineGap: 9 }),
        reality_labs: label(886, 1082, [name('Reality Labs'), name('(RL)'), value(), note('+5% Y/Y')]),
        revenue: label(1248, 551, [name('Revenue'), value(), note('+22% Y/Y')]),
        gross_profit: label(1611, 437, [name('Gross Profit'), value(), note('82% margin'), note('+1pp Y/Y')]),
        cost_of_revenue: label(1611, 1211, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1974, 363, [name('Operating profit'), value(), note('43% margin'), note('+5pp Y/Y')]),
        operating_expenses: label(1974, 1045, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        net_profit: label(2412, 474, [name('Net profit'), value(), note('39% margin'), note('+4pp Y/Y')], { anchor: 'start' }),
        tax: label(2505, 764, [name('Tax', 32), value(31)], { lineGap: 8 }),
        rnd: label(2505, 907, [name('R&D', 32), value(31), note('27% of revenue'), note('+0pp Y/Y')], { lineGap: 8 }),
        sm: label(2505, 1068, [name('S&M', 32), value(31), note('6% of revenue'), note('(1pp) Y/Y')], { lineGap: 8 }),
        ga: label(2505, 1239, [name('G&A', 32), value(31), note('6% of revenue'), note('(4pp) Y/Y')], { lineGap: 8 }),
      },
    },
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.1, valueText: '$0.1B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'family_of_apps_operating_profit', representation: 'annotation', label: 'FoA operating profit', value: 25.0, valueText: '$25.0B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'reality_labs_operating_loss', representation: 'annotation', label: 'RL operating loss', value: -4.5, valueText: '($4.5B)', type: 'cost', labelColor: RED_LABEL },
    ],
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 46.6, notes: ['+21% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.6, notes: ['+50% Y/Y'], color: '#1f77b4', labelColor: BLUE_LABEL },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 47.1, notes: ['+22% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 0.4, notes: ['+5% Y/Y'], color: '#0080fb', labelColor: BLUE_LABEL },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 47.5, notes: ['+22% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 39.0, valueText: '$39.0B', notes: ['82% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 8.5 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 20.4, notes: ['43% margin', '+5pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 18.6 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 18.3, notes: ['39% margin', '+4pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.2 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 12.9, notes: ['27% of revenue', '+0pp Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 3.0, valueText: '($3.0B)', notes: ['6% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 2.7, notes: ['6% of revenue', '(4pp) Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 46.6, sourceWidth: 391, targetWidth: 391, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.6, sourceWidth: 4, targetWidth: 5, sourceOrder: 0, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 47.1, sourceWidth: 396, targetWidth: 396, sourceOrder: 0, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.4, sourceWidth: 2, targetWidth: 4, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 39.0, sourceWidth: 328, targetWidth: 327, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 8.5, sourceWidth: 72, targetWidth: 69, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 20.4, sourceWidth: 170, targetWidth: 170, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 18.6, sourceWidth: 157, targetWidth: 154, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 18.2, sourceWidth: 153, targetWidth: 152, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2.2, sourceWidth: 17, targetWidth: 15, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 681, y1: 629, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 12.9, sourceWidth: 106, targetWidth: 106, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 3.0, sourceWidth: 25, targetWidth: 23, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 2.7, sourceWidth: 23, targetWidth: 21, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Meta Quest', 'FoA', 'RL'],
      zh: {
        name: 'Meta · 2025 财年第二季度',
        meta: { title: 'Meta 2025 财年第二季度利润表', period: '2025 财年第二季度', periodNote: '截至 2025 年 6 月' },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          interest: { label: '利息' },
          family_of_apps_operating_profit: { label: 'FoA 营业利润' },
          reality_labs_operating_loss: { label: 'RL 营业亏损' },
        },
        nodes: {
          advertising: { label: '广告', notes: ['同比 +21%'] }, other_revenue: { label: '其他', notes: ['同比 +50%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +22%'] }, reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 +5%'] },
          revenue: { label: '收入', notes: ['同比 +22%'] }, gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 43%', '同比 +5 个百分点'] },
          operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 39%', '同比 +4 个百分点'] },
          tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 27%', '同比 +0 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 6%', '同比 (4 个百分点)'] },
        },
        layout: {
          labels: {
            advertising: label(524, 391, [name('广告'), value(), note('同比 +21%')]),
            other_revenue: { blocks: [{ x: 524, top: 1012, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 +50%')] }, { x: 156, top: 1145, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] }] },
            family_of_apps: label(886, 416, [name('应用家族（FoA）'), value(), note('同比 +22%')]),
            reality_labs: label(886, 1082, [name('Reality Labs（RL）', 34), value(), note('同比 +5%')]),
            gross_profit: label(1611, 437, [name('毛利润'), value(), note('利润率 82%'), note('同比 +1 个百分点')]),
            cost_of_revenue: label(1611, 1211, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1974, 363, [name('营业利润'), value(), note('利润率 43%'), note('同比 +5 个百分点')]),
            operating_expenses: label(1974, 1045, [name('运营费用'), value(38)]),
            net_profit: label(2412, 474, [name('净利润'), value(), note('利润率 39%'), note('同比 +4 个百分点')], { anchor: 'start' }),
            tax: label(2505, 764, [name('税费', 32), value(31)], { lineGap: 8 }),
            rnd: label(2505, 907, [name('研发', 32), value(31), note('占收入 27%'), note('同比 +0 个百分点')], { lineGap: 8 }),
            sm: label(2505, 1068, [name('销售与市场', 32), value(31), note('占收入 6%'), note('同比 (1 个百分点)')], { lineGap: 8 }),
            ga: label(2505, 1239, [name('管理费用', 32), value(31), note('占收入 6%'), note('同比 (4 个百分点)')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
