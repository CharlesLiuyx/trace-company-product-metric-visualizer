/* Meta — Q2 FY26 income statement ($B), measured from the supplied reference. */
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
  const FAMILY_APPS_CLUSTER = (BUSINESS_ICONS.metaFamilyAppsCluster || '')
    .replace('translate(0 152)', 'translate(0 133)')
    .replace('translate(152 152)', 'translate(152 133)');

  const annotations = () => `
    <g font-family="'Noto Sans',Arial,sans-serif">
      <g transform="translate(82 513) scale(1.36)" data-typography-role="brand">${FAMILY_APPS_CLUSTER}</g>
      <g transform="translate(503 1200)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
      <g transform="translate(1829 222)">
        <path d="M18 0H288C302 0 310 9 310 23V78C310 92 302 101 288 101H178L155 122L132 101H18C6 101 0 92 0 78V23C0 9 6 0 18 0Z"
          fill="none" stroke="${BLUE_LABEL}" stroke-width="4"/>
        <g class="sankey-interactive-annotation" data-node="family_of_apps_operating_profit">
          <text x="70" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
          <text x="70" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${GREEN_LABEL}">$23.4B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="reality_labs_operating_loss">
          <text x="225" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
          <text x="225" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${RED_LABEL}">($4.6B)</text>
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
    key: 'meta-q2-fy26',
    name: 'Meta - Q2 FY26',
    company: 'Meta',
    meta: {
      company: 'Meta',
      title: 'Meta Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/meta-q2-fy26.png', width: 2667, height: 1500 },
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
    annotationsSvg: annotations(),
    layout: {
      scale: 5.5,
      nodes: {
        advertising: { x: 488, y: 507, width: 69, height: 329 },
        other_revenue: { x: 488, y: 1034, width: 69, height: 4 },
        family_of_apps: { x: 851, y: 614, width: 68, height: 335 },
        reality_labs: { x: 851, y: 1241, width: 68, height: 2 },
        revenue: { x: 1214, y: 703, width: 68, height: 336 },
        gross_profit: { x: 1577, y: 611, width: 68, height: 274 },
        cost_of_revenue: { x: 1577, y: 1062, width: 68, height: 61 },
        operating_profit: { x: 1940, y: 535, width: 68, height: 102 },
        operating_expenses: { x: 1940, y: 783, width: 68, height: 170 },
        net_profit: { x: 2302, y: 461, width: 69, height: 87 },
        tax: { x: 2302, y: 702, width: 69, height: 14 },
        rnd: { x: 2302, y: 822, width: 69, height: 119 },
        ga: { x: 2302, y: 1081, width: 69, height: 29 },
        sm: { x: 2302, y: 1258, width: 69, height: 17 },
      },
      labels: {
        advertising: label(523, 365, [name('Advertising'), value(), note('+27% Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 523, top: 875, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('+73% Y/Y')] },
            { x: 154, top: 1018, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(886, 416, [name('Family of Apps'), name('(FoA)'), value(), note('+28% Y/Y')], { lineGap: 9 }),
        reality_labs: label(886, 1044, [name('Reality Labs'), name('(RL)'), value(), note('+16% Y/Y')]),
        revenue: label(1248, 552, [name('Revenue'), value(), note('+28% Y/Y')]),
        gross_profit: label(1611, 418, [name('Gross Profit'), value(), note('81% margin'), note('(1pp) Y/Y')]),
        cost_of_revenue: label(1611, 1131, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1974, 344, [name('Operating profit'), value(), note('31% margin'), note('(12pp) Y/Y')]),
        operating_expenses: label(1974, 973, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        net_profit: label(2414, 460, [name('Net profit'), value(), note('26% margin'), note('(13pp) Y/Y')], { anchor: 'start' }),
        tax: label(2505, 673, [name('Tax', 32), value(31)], { lineGap: 8 }),
        rnd: label(2505, 795, [name('R&D', 32), value(31), note('36% of revenue'), note('+8pp Y/Y')], { lineGap: 8 }),
        ga: label(2505, 1003, [name('G&A', 32), value(31), note('9% of revenue'), note('+4pp Y/Y')], { lineGap: 8 }),
        sm: label(2505, 1194, [name('S&M', 32), value(31), note('6% of revenue'), note('(1pp) Y/Y')], { lineGap: 8 }),
      },
    },
    nonNodeMetrics: [
      { id: 'family_of_apps_operating_profit', representation: 'annotation', label: 'FoA operating profit', value: 23.4, valueText: '$23.4B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'reality_labs_operating_loss', representation: 'annotation', label: 'RL operating loss', value: -4.6, valueText: '($4.6B)', type: 'cost', labelColor: RED_LABEL },
    ],
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 59.4, notes: ['+27% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 1.0, valueText: '$1.0B', notes: ['+73% Y/Y'], color: '#1f77b4', labelColor: BLUE_LABEL },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 60.4, notes: ['+28% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 0.4, notes: ['+16% Y/Y'], color: '#0080fb', labelColor: BLUE_LABEL },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 60.8, notes: ['+28% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 49.5, notes: ['81% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 11.3 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 18.8, notes: ['31% margin', '(12pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 30.7 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 15.8, notes: ['26% margin', '(13pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.9 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 21.7, notes: ['36% of revenue', '+8pp Y/Y'] },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 5.6, notes: ['9% of revenue', '+4pp Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 3.4, notes: ['6% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 59.4, sourceWidth: 329, targetWidth: 329, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 1.0, sourceWidth: 4, targetWidth: 6, sourceOrder: 0, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 60.4, sourceWidth: 335, targetWidth: 334, sourceOrder: 0, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.4, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 49.5, sourceWidth: 274, targetWidth: 274, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 11.3, sourceWidth: 62, targetWidth: 61, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 18.8, sourceWidth: 103, targetWidth: 102, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 30.7, sourceWidth: 171, targetWidth: 170, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 15.9, sourceWidth: 88, targetWidth: 87, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2.9, sourceWidth: 14, targetWidth: 14, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 21.7, sourceWidth: 120, targetWidth: 119, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 5.6, sourceWidth: 31, targetWidth: 29, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 3.4, sourceWidth: 19, targetWidth: 17, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['MetaQuest', 'FoA', 'RL'],
      zh: {
        name: 'Meta · 2026 财年第二季度',
        meta: { title: 'Meta 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月' },
        annotationsSvg: annotations(),
        nonNodeMetrics: {
          family_of_apps_operating_profit: { label: 'FoA 营业利润' },
          reality_labs_operating_loss: { label: 'RL 营业亏损' },
        },
        nodes: {
          advertising: { label: '广告', notes: ['同比 +27%'] }, other_revenue: { label: '其他', notes: ['同比 +73%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +28%'] }, reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 +16%'] },
          revenue: { label: '收入', notes: ['同比 +28%'] }, gross_profit: { label: '毛利润', notes: ['利润率 81%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 (12 个百分点)'] },
          operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 26%', '同比 (13 个百分点)'] },
          tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 36%', '同比 +8 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 9%', '同比 +4 个百分点'] }, sm: { label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            advertising: label(523, 365, [name('广告'), value(), note('同比 +27%')]),
            other_revenue: { blocks: [{ x: 523, top: 875, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 +73%')] }, { x: 154, top: 1018, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] }] },
            family_of_apps: label(886, 416, [name('应用家族（FoA）'), value(), note('同比 +28%')]),
            reality_labs: label(886, 1044, [name('Reality Labs（RL）', 34), value(), note('同比 +16%')]),
            gross_profit: label(1611, 418, [name('毛利润'), value(), note('利润率 81%'), note('同比 (1 个百分点)')]),
            cost_of_revenue: label(1611, 1131, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1974, 344, [name('营业利润'), value(), note('利润率 31%'), note('同比 (12 个百分点)')]),
            operating_expenses: label(1974, 973, [name('运营费用'), value(38)]),
            net_profit: label(2414, 460, [name('净利润'), value(), note('利润率 26%'), note('同比 (13 个百分点)')], { anchor: 'start' }),
            tax: label(2505, 673, [name('税费', 32), value(31)], { lineGap: 8 }),
            rnd: label(2505, 795, [name('研发', 32), value(31), note('占收入 36%'), note('同比 +8 个百分点')], { lineGap: 8 }),
            ga: label(2505, 1003, [name('管理费用', 32), value(31), note('占收入 9%'), note('同比 +4 个百分点')], { lineGap: 8 }),
            sm: label(2505, 1194, [name('销售与市场', 32), value(31), note('占收入 6%'), note('同比 (1 个百分点)')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
