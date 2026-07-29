/* Meta — Q3 FY25 income statement ($B), reconstructed from the supplied reference. */
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
      <g transform="translate(84 525) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(500 1204)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
      <g transform="translate(1828 221)">
        <path d="M18 0H288C302 0 310 9 310 23V78C310 92 302 101 288 101H178L155 122L132 101H18C6 101 0 92 0 78V23C0 9 6 0 18 0Z"
          fill="none" stroke="${BLUE_LABEL}" stroke-width="4"/>
        <g class="sankey-interactive-annotation" data-node="foa_operating_profit">
          <text x="70" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
          <text x="70" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${GREEN_LABEL}">$25.0B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="rl_operating_loss">
          <text x="225" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
          <text x="225" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${RED_LABEL}">($4.4B)</text>
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
    key: 'meta-q3-fy25',
    name: 'Meta - Q3 FY25',
    company: 'Meta',
    meta: {
      company: 'Meta', title: 'Meta Q3 FY25 Income Statement', period: 'Q3 FY25', periodNote: 'Ending Sep. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/meta-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2060,
      hidePeriodStamp: true,
      logoWidth: 300, logoHeight: 235, logoY: 252, logoViewBox: '0 0 270 220',
      logoSvg: BUSINESS_ICONS.metaLogo || '',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL }, hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 6.52,
      nodes: {
        advertising: { x: 488, y: 525, width: 70, height: 326 },
        other_revenue: { x: 488, y: 1059, width: 70, height: 2 },
        family_of_apps: { x: 851, y: 621, width: 70, height: 330 },
        reality_labs: { x: 851, y: 1237, width: 70, height: 1 },
        revenue: { x: 1214, y: 703, width: 70, height: 334 },
        gross_profit: { x: 1577, y: 627, width: 70, height: 273 },
        cost_of_revenue: { x: 1577, y: 1089, width: 70, height: 59 },
        operating_profit: { x: 1939, y: 553, width: 70, height: 132 },
        operating_expenses: { x: 1939, y: 848, width: 70, height: 139 },
        other: { x: 2202, y: 462, width: 70, height: 6 },
        net_profit: { x: 2301, y: 481, width: 70, height: 16 },
        tax: { x: 2301, y: 626, width: 70, height: 121 },
        rnd: { x: 2301, y: 887, width: 70, height: 97 },
        ga: { x: 2301, y: 1098, width: 70, height: 22 },
        sm: { x: 2301, y: 1241, width: 70, height: 17 },
      },
      labels: {
        advertising: label(524, 383, [name('Advertising'), value(), note('+25% Y/Y')]),
        other_revenue: {
          blocks: [
            { x: 524, top: 915, anchor: 'middle', lineGap: 10, lines: [name('Other'), value(), note('+59% Y/Y')] },
            { x: 154, top: 1045, anchor: 'start', lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }] },
          ],
        },
        family_of_apps: label(888, 422, [name('Family of Apps'), name('(FoA)'), value(), note('+26% Y/Y')], { lineGap: 9 }),
        reality_labs: label(888, 1037, [name('Reality Labs'), name('(RL)'), value(), note('+74% Y/Y')]),
        revenue: label(1250, 562, [name('Revenue'), value(), note('+26% Y/Y')]),
        gross_profit: label(1612, 443, [name('Gross Profit'), value(), note('82% margin'), note('+0pp Y/Y')]),
        cost_of_revenue: label(1612, 1169, [name('Cost of'), name('revenue'), value(38)], { lineGap: 9 }),
        operating_profit: label(1970, 371, [name('Operating profit'), value(), note('40% margin'), note('(3pp) Y/Y')]),
        operating_expenses: label(1970, 1008, [name('Operating'), name('expenses'), value(38)], { lineGap: 9 }),
        other: label(2236, 377, [name('Other', 32), value(31)], { lineGap: 8 }),
        net_profit: label(2413, 437, [name('Net profit'), value(), note('5% margin'), note('(33pp) Y/Y')], { anchor: 'start' }),
        tax: label(2506, 657, [name('Tax', 32), value(31)], { lineGap: 8 }),
        rnd: label(2506, 888, [name('R&D', 32), value(31), note('30% of revenue'), note('+2pp Y/Y')], { lineGap: 8 }),
        ga: label(2506, 1056, [name('G&A', 32), value(31), note('7% of revenue'), note('+2pp Y/Y')], { lineGap: 8 }),
        sm: label(2506, 1224, [name('S&M', 32), value(31), note('6% of revenue'), note('(1pp) Y/Y')], { lineGap: 8 }),
      },
    },
    nonNodeMetrics: [
      {
        id: 'foa_operating_profit', representation: 'annotation', label: 'FoA operating profit',
        value: 25.0, valueText: '$25.0B', type: 'profit', labelColor: GREEN_LABEL,
      },
      {
        id: 'rl_operating_loss', representation: 'annotation', label: 'RL operating loss',
        value: -4.4, valueText: '($4.4B)', type: 'cost', labelColor: RED_LABEL,
      },
    ],
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 50.1, notes: ['+25% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.7, notes: ['+59% Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 50.8, notes: ['+26% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 0.5, notes: ['+74% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 51.2, notes: ['+26% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 42.0, valueText: '$42.0B', notes: ['82% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 9.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 20.5, notes: ['40% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 21.5 },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 1.1 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.7 },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 18.9 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 15.1, notes: ['30% of revenue', '+2pp Y/Y'] },
      { id: 'ga', col: 6, order: 3, type: 'cost', label: 'G&A', value: 3.5, notes: ['7% of revenue', '+2pp Y/Y'] },
      { id: 'sm', col: 6, order: 4, type: 'cost', label: 'S&M', value: 2.8, notes: ['6% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 50.1, sourceWidth: 326, targetWidth: 326, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.7, sourceWidth: 2, targetWidth: 4, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 50.8, sourceWidth: 330, targetWidth: 331, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.5, sourceWidth: 1, targetWidth: 3, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 42.0, sourceWidth: 275, targetWidth: 273, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 9.2, sourceWidth: 59, targetWidth: 59, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 20.5, sourceWidth: 134, targetWidth: 132, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 21.5, sourceWidth: 139, targetWidth: 139, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 1.6, sourceWidth: 10, targetWidth: 10, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 18.9, sourceWidth: 122, targetWidth: 121, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 1.1, sourceWidth: 6, targetWidth: 6, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 15.1, sourceWidth: 100, targetWidth: 97, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 3.5, sourceWidth: 22, targetWidth: 22, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 2.8, sourceWidth: 17, targetWidth: 17, targetOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['MetaQuest', 'FoA', 'RL'],
      zh: {
        name: 'Meta · 2025 财年第三季度',
        meta: {
          title: 'Meta 2025 财年第三季度利润表', period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月', titleSize: 112, titleTextLength: 1780,
        },
        nonNodeMetrics: {
          foa_operating_profit: { label: 'FoA 营业利润' },
          rl_operating_loss: { label: 'RL 营业亏损' },
        },
        nodes: {
          advertising: { label: '广告', notes: ['同比 +25%'] },
          other_revenue: { label: '其他', notes: ['同比 +59%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +26%'] },
          reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 +74%'] },
          revenue: { label: '收入', notes: ['同比 +26%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 40%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (33 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 30%', '同比 +2 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 7%', '同比 +2 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            advertising: label(524, 383, [name('广告'), value(), note('同比 +25%')]),
            other_revenue: {
              blocks: [
                { x: 524, top: 915, anchor: 'middle', lineGap: 10, lines: [name('其他'), value(), note('同比 +59%')] },
                { x: 154, top: 1045, anchor: 'start', lines: [{ text: '支付基础设施', size: 23, weight: 400, color: NOTE }] },
              ],
            },
            family_of_apps: label(888, 422, [name('应用家族（FoA）'), value(), note('同比 +26%')]),
            reality_labs: label(888, 1037, [name('Reality Labs（RL）', 34), value(), note('同比 +74%')]),
            revenue: label(1250, 562, [name('收入'), value(), note('同比 +26%')]),
            gross_profit: label(1612, 443, [name('毛利润'), value(), note('利润率 82%'), note('同比 +0 个百分点')]),
            cost_of_revenue: label(1612, 1169, [name('收入'), name('成本'), value(38)], { lineGap: 9 }),
            operating_profit: label(1970, 371, [name('营业利润'), value(), note('利润率 40%'), note('同比 (3 个百分点)')]),
            operating_expenses: label(1970, 1008, [name('运营费用'), value(38)]),
            other: label(2236, 377, [name('其他', 32), value(31)], { lineGap: 8 }),
            net_profit: label(2413, 437, [name('净利润'), value(), note('利润率 5%'), note('同比 (33 个百分点)')], { anchor: 'start' }),
            tax: label(2506, 657, [name('税费', 32), value(31)], { lineGap: 8 }),
            rnd: label(2506, 888, [name('研发', 32), value(31), note('占收入 30%'), note('同比 +2 个百分点')], { lineGap: 8 }),
            ga: label(2506, 1056, [name('管理费用', 32), value(31), note('占收入 7%'), note('同比 +2 个百分点')], { lineGap: 8 }),
            sm: label(2506, 1224, [name('销售与市场', 32), value(31), note('占收入 6%'), note('同比 (1 个百分点)')], { lineGap: 8 }),
          },
        },
      },
    },
  });
})();
