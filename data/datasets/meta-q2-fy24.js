/* Meta — Q2 FY24 income statement ($B), measured from the supplied Source. */
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

  const fullMetaWordmark = `
    <g transform="translate(0 -3) scale(.52)">${BUSINESS_ICONS.metaLogo || ''}</g>
    <text x="165" y="92" font-family="Arial,Helvetica,sans-serif" font-size="104"
      font-weight="600" textLength="290" lengthAdjust="spacingAndGlyphs" fill="#092730">Meta</text>`;

  const annotations = (zh) => `
    <g transform="translate(84 563) scale(1.36)" data-typography-role="brand">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
    <g transform="translate(471 1188) scale(.985 1)" data-typography-role="brand">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>
    <text x="522" y="1283" font-size="23" font-weight="400" fill="${NOTE}">+ Spark AR, Horizon</text>
    <g transform="translate(1764 249)">
      <path d="M18 0H282C294 0 300 9 300 23V78C300 92 294 101 282 101H174L150 123L126 101H18C6 101 0 92 0 78V23C0 9 6 0 18 0Z"
        fill="none" stroke="${BLUE_LABEL}" stroke-width="3"/>
      <g class="sankey-interactive-annotation" data-node="foa_operating_profit">
        <text x="75" y="41" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
        <text x="75" y="80" text-anchor="middle" font-size="30" font-weight="500" fill="${GREEN_LABEL}">$19.3B</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="reality_labs_operating_loss">
        <text x="225" y="41" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
        <text x="225" y="80" text-anchor="middle" font-size="30" font-weight="500" fill="${RED_LABEL}">($4.5B)</text>
      </g>
    </g>
    <g class="sankey-interactive-annotation" data-node="interest"
      data-link-numerator="interest" data-link-denominator="net_profit"
      data-link-anchor-x="2182" data-link-anchor-y="649">
      <path d="M2132 649H2196C2217 649 2218 600 2233 600"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2166" y="692" text-anchor="middle" font-size="31" font-weight="800"
        fill="${GREEN_LABEL}">${zh ? '利息收入' : 'Interest'}</text>
      <text x="2166" y="734" text-anchor="middle" font-size="31" font-weight="400"
        fill="${GREEN_LABEL}">$0.3B</text>
    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10) => ({ x, top, anchor, lineGap, lines });
  const labels = (zh) => {
    const t = zh ? {
      advertising: '广告', otherRevenue: '其他', family: '应用家族（FoA）', reality: 'Reality Labs（RL）',
      revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operatingProfit: '营业利润',
      operatingExpenses: '运营费用', net: '净利润', tax: '税费', rnd: '研发', ga: '管理费用',
      sm: '销售与市场', payments: '支付基础设施', yoy22: '同比 +22%', yoy73: '同比 +73%',
      yoy28: '同比 +28%', margin81: '利润率 81%', pp0: '同比 (0 个百分点)', margin38: '利润率 38%',
      pp9: '同比 +9 个百分点', margin34: '利润率 34%', pp10: '同比 +10 个百分点',
      share27: '占收入 27%', pp2: '同比 (2 个百分点)', share9: '占收入 9%',
      pp4: '同比 (4 个百分点)', share7: '占收入 7%', pp3: '同比 (3 个百分点)',
    } : {
      advertising: 'Advertising', otherRevenue: 'Other', family: ['Family of Apps', '(FoA)'],
      reality: ['Reality Labs', '(RL)'], revenue: 'Revenue', gross: 'Gross Profit', cost: ['Cost of', 'revenue'],
      operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'], net: 'Net profit',
      tax: 'Tax', rnd: 'R&D', ga: 'G&A', sm: 'S&M', payments: 'Payments infrastructure',
      yoy22: '+22% Y/Y', yoy73: '+73% Y/Y', yoy28: '+28% Y/Y', margin81: '81% margin',
      pp0: '(0pp) Y/Y', margin38: '38% margin', pp9: '+9pp Y/Y', margin34: '34% margin',
      pp10: '+10pp Y/Y', share27: '27% of revenue', pp2: '(2pp) Y/Y', share9: '9% of revenue',
      pp4: '(4pp) Y/Y', share7: '7% of revenue', pp3: '(3pp) Y/Y',
    };
    const names = (item, size = 40) => (Array.isArray(item) ? item : [item]).map((text) => line(text, size, 800));
    const value = (size = 39) => line('$value', size);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    return {
      advertising: { blocks: [block(524, 438, 'middle', [...names(t.advertising), value(), note(t.yoy22)])] },
      other_revenue: { blocks: [
        block(530, 923, 'middle', [...names(t.otherRevenue), value(), note(t.yoy73)]),
        block(167, 1053, 'start', [note(t.payments, 23)], 0),
      ] },
      family_of_apps: { blocks: [block(869, 463, 'middle', [...names(t.family, zh ? 36 : 40), value(), note(t.yoy22)], 9)] },
      reality_labs: { blocks: [block(878, 1022, 'middle', [...names(t.reality, zh ? 34 : 40), value(), note(t.yoy28)])] },
      revenue: { blocks: [block(1221, 578, 'middle', [...names(t.revenue), value(), note(t.yoy22)])] },
      gross_profit: { blocks: [block(1567, 477, 'middle', [...names(t.gross), value(), note(t.margin81), note(t.pp0)])] },
      cost_of_revenue: { blocks: [block(1565, 1123, 'middle', [...names(t.cost), value(38)], 9)] },
      operating_profit: { blocks: [block(1912, 394, 'middle', [...names(t.operatingProfit), value(), note(t.margin38), note(t.pp9)])] },
      operating_expenses: { blocks: [block(1913, 997, 'middle', [...names(t.operatingExpenses), value(38)], 9)] },
      net_profit: { blocks: [block(2324, 493, 'start', [...names(t.net), value(), note(t.margin34), note(t.pp10)])] },
      tax: { blocks: [block(2434, 756, 'middle', [...names(t.tax, 32), value(31)], 8)] },
      rnd: { blocks: [block(2433, 905, 'middle', [...names(t.rnd, 32), value(31), note(t.share27), note(t.pp2)], 8)] },
      ga: { blocks: [block(2436, 1070, 'middle', [...names(t.ga, 32), value(31), note(t.share9), note(t.pp4)], 8)] },
      sm: { blocks: [block(2439, 1237, 'middle', [...names(t.sm, 32), value(31), note(t.share7), note(t.pp3)], 8)] },
      interest: { blocks: [] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'meta-q2-fy24',
    name: 'Meta · Q2 FY24',
    company: 'Meta',
    meta: {
      company: 'Meta', title: 'Meta Q2 FY24\u00a0Income Statement', period: 'Q2 FY24', periodNote: 'Ending Jun. 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/meta-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2032,
      hidePeriodStamp: true,
      logoWidth: 520, logoHeight: 120, logoY: 249, logoViewBox: '0 0 520 120', logoSvg: fullMetaWordmark,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', nodeRadius: 0,
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLUE, label: BLUE_LABEL }, hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      { id: 'foa_operating_profit', representation: 'annotation', label: 'FoA operating profit', value: 19.3, valueText: '$19.3B', type: 'profit' },
      { id: 'reality_labs_operating_loss', representation: 'annotation', label: 'RL operating loss', value: -4.5, valueText: '($4.5B)', type: 'cost' },
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.3, type: 'profit', labelColor: GREEN_LABEL },
    ],
    layout: {
      scale: 7.57,
      routes: { interest: { x: 2132, y: 649, width: 0, height: 1 } },
      nodes: {
        advertising: { x: 494, y: 582, width: 68, height: 292 },
        other_revenue: { x: 494, y: 1064, width: 68, height: 3 },
        family_of_apps: { x: 841, y: 661, width: 68, height: 295 },
        reality_labs: { x: 841, y: 1216, width: 68, height: 3 },
        revenue: { x: 1189, y: 723, width: 68, height: 297 },
        gross_profit: { x: 1533, y: 661, width: 69, height: 241 },
        cost_of_revenue: { x: 1534, y: 1046, width: 68, height: 55 },
        operating_profit: { x: 1883, y: 576, width: 68, height: 112 },
        operating_expenses: { x: 1883, y: 847, width: 68, height: 127 },
        net_profit: { x: 2232, y: 499, width: 69, height: 102 },
        tax: { x: 2232, y: 783, width: 69, height: 11 },
        rnd: { x: 2232, y: 913, width: 69, height: 79 },
        ga: { x: 2232, y: 1106, width: 69, height: 26 },
        sm: { x: 2232, y: 1253, width: 69, height: 19 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 38.3, notes: ['+22% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.4, notes: ['+73% Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 38.7, notes: ['+22% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 0.4, notes: ['+28% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 39.1, notes: ['+22% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 31.8, notes: ['81% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.3 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 14.8, notes: ['38% margin', '+9pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 16.9 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 13.5, notes: ['34% margin', '+10pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.6 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 10.5, notes: ['27% of revenue', '(2pp) Y/Y'] },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 3.7, notes: ['9% of revenue', '(4pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 2.7, notes: ['7% of revenue', '(3pp) Y/Y'] },
    ],
    links: [
      { source: 'advertising', target: 'family_of_apps', value: 38.3, sourceWidth: 292, targetWidth: 292, y0: 728, y1: 807, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.4, sourceWidth: 3, targetWidth: 3, y0: 1065.5, y1: 954.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 38.7, sourceWidth: 295, targetWidth: 295, y0: 808.5, y1: 870.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.4, sourceWidth: 3, targetWidth: 3, y0: 1217.5, y1: 1018.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 31.8, sourceWidth: 242, targetWidth: 241, y0: 844, y1: 781.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.3, sourceWidth: 55, targetWidth: 55, y0: 992.5, y1: 1073.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 14.8, sourceWidth: 112, targetWidth: 112, y0: 717, y1: 632, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 16.9, sourceWidth: 128, targetWidth: 127, y0: 838, y1: 910.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 13.2, sourceWidth: 100, targetWidth: 102, y0: 626, y1: 550, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.6, sourceWidth: 12, targetWidth: 11, y0: 682, y1: 788.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.3, sourceWidth: 2, targetWidth: 2, y0: 649, y1: 600, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 10.5, sourceWidth: 79, targetWidth: 79, y0: 886.5, y1: 952.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 3.7, sourceWidth: 28, targetWidth: 26, y0: 940.5, y1: 1119, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 2.7, sourceWidth: 20, targetWidth: 19, y0: 964, y1: 1262.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['FoA', 'RL', 'MetaQuest', '+ Spark AR, Horizon'],
      zh: {
        name: 'Meta · 2024 财年第二季度',
        meta: { title: 'Meta 2024 财年第二季度利润表', period: '2024 财年第二季度', periodNote: '截至 2024 年 6 月', titleTextLength: 1810 },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          foa_operating_profit: { label: 'FoA 营业利润' },
          reality_labs_operating_loss: { label: 'RL 营业亏损' },
          interest: { label: '利息收入' },
        },
        nodes: {
          advertising: { label: '广告', notes: ['同比 +22%'] }, other_revenue: { label: '其他', notes: ['同比 +73%'] },
          family_of_apps: { label: '应用家族（FoA）', notes: ['同比 +22%'] }, reality_labs: { label: 'Reality Labs（RL）', notes: ['同比 +28%'] },
          revenue: { label: '收入', notes: ['同比 +22%'] }, gross_profit: { label: '毛利润', notes: ['利润率 81%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 38%', '同比 +9 个百分点'] },
          operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 34%', '同比 +10 个百分点'] },
          tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 27%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 9%', '同比 (4 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (3 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
