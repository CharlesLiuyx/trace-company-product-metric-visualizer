/* ASML · Q3 FY23 income statement (€B), reconstructed from the Source PNG. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#757575';
  const NAVY = '#0f238c';
  const NAVY_LINK = '#8c95c4';
  const ORANGE = '#ff7f45';
  const ORANGE_LINK = '#f7bda4';
  const BLUE = '#1c7ddb';
  const BLUE_LINK = '#92bce8';
  const DRY_GREEN = '#34b233';
  const DRY_LINK = '#9cd49c';
  const YELLOW = '#fcd12a';
  const YELLOW_LABEL = '#ffa400';
  const YELLOW_LINK = '#f6e298';
  const LIGHT_BLUE = '#86cef4';
  const LIGHT_BLUE_LINK = '#c1e1f2';
  const PROFIT_GREEN = '#2ca02c';
  const PROFIT_LABEL = '#008f51';
  const OTHER_LABEL = '#008e00';
  const PROFIT_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const name = (text, size = 40, color) => ({ text, size, weight: 800, ...(color ? { color } : {}) });
  const value = (size = 39, color) => ({ text: '$value', size, weight: 400, ...(color ? { color } : {}) });
  const note = (text, size = 29) => ({ text, size, weight: 400, color: NOTE });
  const block = (x, top, lines, options = {}) => ({
    blocks: [{ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap ?? 10, lines }],
  });

  const labels = (localized) => {
    const text = localized ? {
      euvDescription: '极紫外', arfiDescription: '氟化氩浸没式', dryDescription: '氟化氩干式',
      krfDescription: '氟化氪', metrology: ['量测', '与检测'], netSystem: ['系统净', '销售额'],
      installed: ['装机基础', '管理'], revenue: '净销售额', gross: '毛利润', cost: '销售成本',
      operatingProfit: '营业利润', operatingExpenses: ['运营', '费用'], other: '其他收益',
      netProfit: '净利润', tax: '税费', rnd: '研发', sga: '销售、一般及行政',
      euvYoy: '同比 (14%)', arfiYoy: '同比 +93%', dryYoy: '同比 +66%', krfYoy: '同比 +25%',
      iLineYoy: '同比 +25%', metrologyYoy: '同比 (38%)', systemYoy: '同比 +25%',
      installedYoy: '同比 (10%)', revenueYoy: '同比 +15%', grossMargin: '利润率 52%',
      grossYoy: '同比持平', operatingMargin: '利润率 33%', operatingYoy: '同比 (1 个百分点)',
      netMargin: '利润率 28%', netYoy: '同比 (1 个百分点)', eps: '每股收益 €4.81',
    } : {
      euvDescription: 'Extreme Ultraviolet', arfiDescription: 'Argon Fluoride immersion', dryDescription: 'Argon Fluoride Dry',
      krfDescription: 'Krypton Fluoride', metrology: ['Metrology', '& Inspection'], netSystem: ['Net system', 'sales'],
      installed: ['Installed base', 'management'], revenue: 'Net sales', gross: 'Gross profit', cost: 'Cost of sales',
      operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'], other: 'Other gains',
      netProfit: 'Net profit', tax: 'Tax', rnd: 'R&D', sga: 'SG&A',
      euvYoy: '(14%) Y/Y', arfiYoy: '+93% Y/Y', dryYoy: '+66% Y/Y', krfYoy: '+25% Y/Y',
      iLineYoy: '+25% Y/Y', metrologyYoy: '(38%) Y/Y', systemYoy: '+25% Y/Y',
      installedYoy: '(10%) Y/Y', revenueYoy: '+15% Y/Y', grossMargin: '52% margin',
      grossYoy: 'Flat Y/Y', operatingMargin: '33% margin', operatingYoy: '(1pp) Y/Y',
      netMargin: '28% margin', netYoy: '(1pp) Y/Y', eps: 'EPS €4.81',
    };

    return {
      euv: { blocks: [
        { x: 462, top: 349, anchor: 'middle', lineGap: 8, lines: [value(39, ORANGE), note(text.euvYoy)] },
        { x: 388, top: 448, anchor: 'end', lineGap: 15, semanticRole: 'reference-offset-side-label', lines: [name('EUV', 40, ORANGE), note(text.euvDescription)] },
      ] },
      arfi: { blocks: [
        { x: 462, top: 574, anchor: 'middle', lineGap: 8, lines: [value(39, BLUE), note(text.arfiYoy)] },
        { x: 388, top: 693, anchor: 'end', lineGap: 15, semanticRole: 'reference-offset-side-label', lines: [name('ArFi', 40, BLUE), note(text.arfiDescription, localized ? 27 : 25)] },
      ] },
      arf_dry: { blocks: [
        { x: 462, top: 827, anchor: 'middle', lineGap: 8, lines: [value(39, DRY_GREEN), note(text.dryYoy)] },
        { x: 388, top: 897, anchor: 'end', lineGap: 15, semanticRole: 'reference-offset-side-label', lines: [name('ArF Dry', 38, DRY_GREEN), note(text.dryDescription)] },
      ] },
      krf: { blocks: [
        { x: 462, top: 968, anchor: 'middle', lineGap: 8, lines: [value(39, NAVY), note(text.krfYoy)] },
        { x: 388, top: 1050, anchor: 'end', lineGap: 15, semanticRole: 'reference-offset-side-label', lines: [name('KrF', 38, NAVY), note(text.krfDescription)] },
      ] },
      i_line: { blocks: [
        { x: 462, top: 1115, anchor: 'middle', lineGap: 8, lines: [value(39, YELLOW), note(text.iLineYoy)] },
        { x: 388, top: 1177, anchor: 'end', semanticRole: 'reference-offset-side-label', lines: [name('I-line', 39, YELLOW)] },
      ] },
      metrology_inspection: { blocks: [
        { x: 462, top: 1211, anchor: 'middle', lineGap: 8, lines: [value(39, LIGHT_BLUE), note(text.metrologyYoy)] },
        { x: 388, top: 1260, anchor: 'end', lineGap: 7, semanticRole: 'reference-offset-side-label', lines: [name(text.metrology[0], 39, LIGHT_BLUE), name(text.metrology[1], 39, LIGHT_BLUE)] },
      ] },
      net_system_sales: block(837, 447, [name(text.netSystem[0], 41), name(text.netSystem[1], 41), value(), note(text.systemYoy)]),
      installed_base_management: block(829, 1208, [name(text.installed[0], 39, YELLOW_LABEL), name(text.installed[1], 39, YELLOW_LABEL), value(39, YELLOW_LABEL), note(text.installedYoy)]),
      revenue: block(1208, 606, [name(text.revenue, 42), value(), note(text.revenueYoy)]),
      gross_profit: block(1585, 454, [name(text.gross, 40, PROFIT_LABEL), value(39, PROFIT_LABEL), note(text.grossMargin), note(text.grossYoy)]),
      cost_of_sales: block(1585, 1206, [name(text.cost, localized ? 36 : 38, RED_LABEL), value(36, RED_LABEL)]),
      operating_profit: block(1966, 348, [name(text.operatingProfit, localized ? 36 : 39, PROFIT_LABEL), value(38, PROFIT_LABEL), note(text.operatingMargin), note(text.operatingYoy)]),
      operating_expenses: block(1966, 967, [name(text.operatingExpenses[0], 38, RED_LABEL), name(text.operatingExpenses[1], 38, RED_LABEL), value(36, RED_LABEL)]),
      other_gains: block(2206, 640, [name(text.other, localized ? 29 : 31, OTHER_LABEL), value(31, OTHER_LABEL)], { lineGap: 8 }),
      net_profit: block(2394, 437, [name(text.netProfit, 39, PROFIT_LABEL), value(38, PROFIT_LABEL), note(text.netMargin), note(text.netYoy), note(text.eps)], { anchor: 'start' }),
      tax: block(2495, 758, [name(text.tax, 31, RED_LABEL), value(30, RED_LABEL)], { lineGap: 8 }),
      rnd: block(2495, 996, [name(text.rnd, 31, RED_LABEL), value(30, RED_LABEL)], { lineGap: 8 }),
      sga: block(2495, 1181, [name(text.sga, localized ? 27 : 31, RED_LABEL), value(30, RED_LABEL)], { lineGap: 8 }),
    };
  };

  const annotations = `
    <g font-family="Arial Black,Arial,sans-serif" data-typography-role="brand">
      <text x="1207" y="385" text-anchor="middle" font-size="162" font-weight="900" textLength="445" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q3-fy23',
    name: 'ASML · Q3 FY23',
    company: 'ASML',
    meta: {
      company: 'ASML', title: 'ASML Q3 FY23 Income Statement', period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023', currency: '€', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/asml-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1331, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2066,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' }, linkOpacity: 1,
      palette: {
        source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY },
        profit: { node: PROFIT_GREEN, label: PROFIT_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: PROFIT_LINK, cost: RED_LINK },
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 49,
      nodes: {
        euv: { x: 428, y: 442, width: 71, height: 92 },
        arfi: { x: 428, y: 668, width: 71, height: 125 },
        arf_dry: { x: 430, y: 920, width: 71, height: 9 },
        krf: { x: 428, y: 1059, width: 71, height: 24 },
        i_line: { x: 428, y: 1208, width: 71, height: 4 },
        metrology_inspection: { x: 430, y: 1317, width: 71, height: 4 },
        net_system_sales: { x: 802, y: 645, width: 70, height: 264 },
        installed_base_management: { x: 794, y: 1112, width: 70, height: 66 },
        revenue: { x: 1173, y: 749, width: 70, height: 331 },
        gross_profit: { x: 1550, y: 638, width: 70, height: 170 },
        cost_of_sales: { x: 1550, y: 1004, width: 70, height: 159 },
        operating_profit: { x: 1931, y: 531, width: 70, height: 107 },
        operating_expenses: { x: 1931, y: 892, width: 70, height: 61 },
        other_gains: { x: 2171, y: 626, width: 70, height: 3 },
        net_profit: { x: 2296, y: 442, width: 71, height: 93 },
        tax: { x: 2296, y: 780, width: 71, height: 15 },
        rnd: { x: 2296, y: 1013, width: 71, height: 47 },
        sga: { x: 2296, y: 1209, width: 71, height: 12 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'euv', col: 0, order: 0, type: 'source', label: 'EUV', value: 1.9, notes: ['Extreme Ultraviolet', '(14%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'arfi', col: 0, order: 1, type: 'source', label: 'ArFi', value: 2.5, notes: ['Argon Fluoride immersion', '+93% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'arf_dry', col: 0, order: 2, type: 'source', label: 'ArF Dry', value: 0.2, notes: ['Argon Fluoride Dry', '+66% Y/Y'], color: DRY_GREEN, labelColor: DRY_GREEN, linkTint: DRY_LINK },
      { id: 'krf', col: 0, order: 3, type: 'source', label: 'KrF', value: 0.5, notes: ['Krypton Fluoride', '+25% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'i_line', col: 0, order: 4, type: 'source', label: 'I-line', value: 0.1, notes: ['+25% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'metrology_inspection', col: 0, order: 5, type: 'source', label: ['Metrology', '& Inspection'], value: 0.1, notes: ['(38%) Y/Y'], color: LIGHT_BLUE, labelColor: LIGHT_BLUE, linkTint: LIGHT_BLUE_LINK },
      { id: 'net_system_sales', col: 1, order: 0, type: 'source', label: ['Net system', 'sales'], value: 5.3, notes: ['+25% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'installed_base_management', col: 1, order: 1, type: 'source', label: ['Installed base', 'management'], value: 1.4, notes: ['(10%) Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 6.7, notes: ['+15% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.5, notes: ['52% margin', 'Flat Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 3.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.2, notes: ['33% margin', '(1pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_gains', col: 5, order: 0, type: 'profit', label: 'Other gains', value: 0.1, color: PROFIT_GREEN, labelColor: OTHER_LABEL, linkTint: PROFIT_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 1.9, notes: ['28% margin', '(1pp) Y/Y', 'EPS €4.81'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 1.0, valueText: '(€1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'euv', target: 'net_system_sales', value: 1.9, sourceWidth: 92, targetWidth: 95, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'arfi', target: 'net_system_sales', value: 2.5, sourceWidth: 125, targetWidth: 125, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'arf_dry', target: 'net_system_sales', value: 0.2, sourceWidth: 9, targetWidth: 10, targetOrder: 2, linkTint: DRY_LINK },
      { source: 'krf', target: 'net_system_sales', value: 0.5, sourceWidth: 24, targetWidth: 24, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'i_line', target: 'net_system_sales', value: 0.1, sourceWidth: 4, targetWidth: 5, targetOrder: 4, linkTint: YELLOW_LINK },
      { source: 'metrology_inspection', target: 'net_system_sales', value: 0.1, sourceWidth: 4, targetWidth: 5, targetOrder: 5, linkTint: LIGHT_BLUE_LINK },
      { source: 'net_system_sales', target: 'revenue', value: 5.3, sourceWidth: 264, targetWidth: 265, sourceOrder: 0, targetOrder: 0 },
      { source: 'installed_base_management', target: 'revenue', value: 1.4, sourceWidth: 66, targetWidth: 66, sourceOrder: 0, targetOrder: 1, linkTint: YELLOW_LINK },
      { source: 'revenue', target: 'gross_profit', value: 3.5, sourceWidth: 171, targetWidth: 170, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 3.2, sourceWidth: 160, targetWidth: 159, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.2, sourceWidth: 108, targetWidth: 107, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.3, sourceWidth: 62, targetWidth: 61, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 89, targetWidth: 89, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'other_gains', target: 'net_profit', value: 0.1, sourceWidth: 3, targetWidth: 4, sourceOrder: 0, targetOrder: 1, linkTint: PROFIT_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 18, targetWidth: 15, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, sourceWidth: 47, targetWidth: 47, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 14, targetWidth: 12, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'ASML · 2023 财年第三季度',
        meta: { title: 'ASML 2023 财年第三季度利润表', period: '2023 财年第三季度', periodNote: '截至 2023 年 9 月' },
        nodes: {
          euv: { label: 'EUV', notes: ['极紫外', '同比 (14%)'] },
          arfi: { label: 'ArFi', notes: ['氟化氩浸没式', '同比 +93%'] },
          arf_dry: { label: 'ArF Dry', notes: ['氟化氩干式', '同比 +66%'] },
          krf: { label: 'KrF', notes: ['氟化氪', '同比 +25%'] },
          i_line: { label: 'I-line', notes: ['同比 +25%'] },
          metrology_inspection: { label: '量测与检测', notes: ['同比 (38%)'] },
          net_system_sales: { label: '系统净销售额', notes: ['同比 +25%'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 (10%)'] },
          revenue: { label: '净销售额', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比持平'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_gains: { label: '其他收益' },
          net_profit: { label: '净利润', notes: ['利润率 28%', '同比 (1 个百分点)', '每股收益 €4.81'] },
          tax: { label: '税费' }, rnd: { label: '研发' }, sga: { label: '销售、一般及行政' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
