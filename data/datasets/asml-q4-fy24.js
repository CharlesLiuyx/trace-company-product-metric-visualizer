/* ASML · Q4 FY24 income statement (€B), reconstructed from the Source PNG. */
(function () {
  const TITLE = '#155077';
  const NAVY = '#0f238c';
  const NAVY_LINK = '#8c95c4';
  const ORANGE = '#ff7f45';
  const ORANGE_LINK = '#f7bda4';
  const BLUE = '#1c7ddb';
  const BLUE_LINK = '#92bce8';
  const DRY_GREEN = '#34b233';
  const DRY_LINK = '#9bcc99';
  const YELLOW = '#eac61c';
  const YELLOW_LABEL = '#ffa400';
  const YELLOW_LINK = '#f6e298';
  const LIGHT_BLUE = '#86cef4';
  const LIGHT_BLUE_LINK = '#c1e1f2';
  const PROFIT_GREEN = '#2ca02c';
  const PROFIT_LABEL = '#008f51';
  const PROFIT_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const annotations = () => `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="1221" y="385" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="446" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>`;

  const labels = (localized) => {
    const t = localized ? {
      netSystem: ['系统净', '销售额'], installed: ['装机基础', '管理'], revenue: '净销售额',
      grossProfit: '毛利润', costOfSales: '销售成本', operatingProfit: '营业利润',
      operatingExpenses: ['运营', '费用'], netProfit: '净利润', tax: '税费', rnd: '研发',
      sga: '销售、一般及行政', otherGains: '其他收益', metrology: ['量测与', '检测'],
      euvNote: '极紫外', arfiNote: '氟化氩浸没式', dryNote: '氟化氩干式', krfNote: '氟化氪',
      netSystemNote: '同比 +25%', installedNote: '同比 +38%', revenueNote: '同比 +28%',
      grossNotes: ['利润率 52%', '同比 +0 个百分点'],
      operatingNotes: ['利润率 36%', '同比 +3 个百分点'],
      netNotes: ['利润率 29%', '同比 +1 个百分点'],
    } : {
      netSystem: ['Net system', 'sales'], installed: ['Installed base', 'management'], revenue: 'Net sales',
      grossProfit: 'Gross profit', costOfSales: 'Cost of sales', operatingProfit: 'Operating profit',
      operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax', rnd: 'R&D',
      sga: 'SG&A', otherGains: 'Other gains', metrology: ['Metrology', '& Inspection'],
      euvNote: 'Extreme Ultraviolet', arfiNote: 'Argon Fluoride immersion', dryNote: 'Argon Fluoride Dry', krfNote: 'Krypton Fluoride',
      netSystemNote: '+25% Y/Y', installedNote: '+38% Y/Y', revenueNote: '+28% Y/Y',
      grossNotes: ['52% margin', '+0pp Y/Y'], operatingNotes: ['36% margin', '+3pp Y/Y'], netNotes: ['29% margin', '+1pp Y/Y'],
    };
    return {
      euv: { blocks: [
        { x: 465, top: 367, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: ORANGE }] },
        { x: 391, top: 444, anchor: 'end', lineGap: 15, lines: [{ text: 'EUV', size: 40, weight: 800, color: ORANGE }, { text: t.euvNote, size: 29, weight: 400, color: NOTE }] },
      ] },
      arfi: { blocks: [
        { x: 465, top: 594, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: BLUE }] },
        { x: 391, top: 663, anchor: 'end', lineGap: 15, lines: [{ text: 'ArFi', size: 40, weight: 800, color: BLUE }, { text: t.arfiNote, size: 29, weight: 400, color: NOTE }] },
      ] },
      arf_dry: { blocks: [
        { x: 467, top: 814, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: DRY_GREEN }] },
        { x: 393, top: 839, anchor: 'end', lineGap: 15, lines: [{ text: 'ArF Dry', size: 38, weight: 800, color: DRY_GREEN }, { text: t.dryNote, size: 29, weight: 400, color: NOTE }] },
      ] },
      krf: { blocks: [
        { x: 469, top: 924, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: NAVY }] },
        { x: 395, top: 958, anchor: 'end', lineGap: 15, lines: [{ text: 'KrF', size: 38, weight: 800, color: NAVY }, { text: t.krfNote, size: 29, weight: 400, color: NOTE }] },
      ] },
      i_line: { blocks: [
        { x: 474, top: 1054, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: YELLOW }] },
        { x: 400, top: 1098, anchor: 'end', lines: [{ text: 'I-line', size: 39, weight: 800, color: YELLOW }] },
      ] },
      metrology_inspection: { blocks: [
        { x: 471, top: 1172, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: LIGHT_BLUE }] },
        { x: 397, top: 1191, anchor: 'end', lineGap: 7, lines: [{ text: t.metrology[0], size: 39, weight: 800, color: LIGHT_BLUE }, { text: t.metrology[1], size: 39, weight: 800, color: LIGHT_BLUE }] },
      ] },
      net_system_sales: { blocks: [{ x: 850, top: 388, anchor: 'middle', lineGap: 10, lines: [
        { text: t.netSystem[0], size: 41, weight: 800 }, { text: t.netSystem[1], size: 41, weight: 800 },
        { text: '$value', size: 39, weight: 400 }, { text: t.netSystemNote, size: 29, weight: 400, color: NOTE },
      ] }] },
      installed_base_management: { blocks: [{ x: 847, top: 1209, anchor: 'middle', lineGap: 10, lines: [
        { text: t.installed[0], size: 39, weight: 800, color: YELLOW_LABEL }, { text: t.installed[1], size: 39, weight: 800, color: YELLOW_LABEL },
        { text: '$value', size: 39, weight: 400, color: YELLOW_LABEL }, { text: t.installedNote, size: 29, weight: 400, color: NOTE },
      ] }] },
      revenue: { blocks: [{ x: 1219, top: 558, anchor: 'middle', lineGap: 10, lines: [
        { text: t.revenue, size: 42, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: t.revenueNote, size: 29, weight: 400, color: NOTE },
      ] }] },
      gross_profit: { blocks: [{ x: 1593, top: 426, anchor: 'middle', lineGap: 10, lines: [
        { text: t.grossProfit, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
        { text: t.grossNotes[0], size: 29, weight: 400, color: NOTE }, { text: t.grossNotes[1], size: 29, weight: 400, color: NOTE },
      ] }] },
      cost_of_sales: { blocks: [{ x: 1596, top: 1207, anchor: 'middle', lineGap: 10, lines: [
        { text: t.costOfSales, size: 38, weight: 800 }, { text: '$value', size: 36, weight: 400 },
      ] }] },
      operating_profit: { blocks: [{ x: 1963, top: 339, anchor: 'middle', lineGap: 10, lines: [
        { text: t.operatingProfit, size: localized ? 38 : 39, weight: 800 }, { text: '$value', size: 38, weight: 400 },
        { text: t.operatingNotes[0], size: 29, weight: 400, color: NOTE }, { text: t.operatingNotes[1], size: 29, weight: 400, color: NOTE },
      ] }] },
      operating_expenses: { blocks: [{ x: 1963, top: 908, anchor: 'middle', lineGap: 10, lines: [
        { text: t.operatingExpenses[0], size: 38, weight: 800 }, { text: t.operatingExpenses[1], size: 38, weight: 800 }, { text: '$value', size: 36, weight: 400 },
      ] }] },
      other_gains: { blocks: [{ x: 2229, top: 606, anchor: 'middle', lineGap: 7, lines: [
        { text: t.otherGains, size: 31, weight: 800, color: PROFIT_LABEL },
        { text: '$value', size: 30, weight: 400, color: PROFIT_LABEL },
      ] }] },
      net_profit: { blocks: [{ x: 2403, top: 397, anchor: 'start', lineGap: 10, lines: [
        { text: t.netProfit, size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 },
        { text: t.netNotes[0], size: 29, weight: 400, color: NOTE }, { text: t.netNotes[1], size: 29, weight: 400, color: NOTE },
      ] }] },
      tax: { blocks: [{ x: 2498, top: 724, anchor: 'middle', lineGap: 8, lines: [{ text: t.tax, size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
      rnd: { blocks: [{ x: 2498, top: 917, anchor: 'middle', lineGap: 8, lines: [{ text: t.rnd, size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
      sga: { blocks: [{ x: localized ? 2513 : 2495, top: 1153, anchor: 'middle', lineGap: 8, lines: [{ text: t.sga, size: localized ? 29 : 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q4-fy24',
    name: 'ASML · Q4 FY24',
    company: 'ASML',
    meta: {
      company: 'ASML', title: 'ASML Q4 FY24 Income Statement', period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024', currency: '€', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/asml-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2066,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY },
        profit: { node: PROFIT_GREEN, label: PROFIT_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: PROFIT_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 40,
      nodes: {
        euv: { x: 435, y: 429, width: 71, height: 117 },
        arfi: { x: 435, y: 649, width: 71, height: 115 },
        arf_dry: { x: 435, y: 876, width: 71, height: 4 },
        krf: { x: 435, y: 985, width: 71, height: 24 },
        i_line: { x: 435, y: 1119, width: 71, height: 4 },
        metrology_inspection: { x: 435, y: 1233, width: 71, height: 9 },
        net_system_sales: { x: 814, y: 611, width: 70, height: 284 },
        installed_base_management: { x: 811, y: 1103, width: 70, height: 84 },
        revenue: { x: 1183, y: 704, width: 70, height: 370 },
        gross_profit: { x: 1556, y: 611, width: 71, height: 190 },
        cost_of_sales: { x: 1559, y: 1013, width: 70, height: 177 },
        operating_profit: { x: 1925, y: 521, width: 71, height: 133 },
        operating_expenses: { x: 1928, y: 835, width: 70, height: 55 },
        other_gains: { x: 2192, y: 587, width: 74, height: 4 },
        net_profit: { x: 2303, y: 420, width: 71, height: 105 },
        tax: { x: 2303, y: 749, width: 71, height: 27 },
        rnd: { x: 2303, y: 929, width: 71, height: 42 },
        sga: { x: 2303, y: 1185, width: 71, height: 10 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'euv', col: 0, order: 0, type: 'source', label: 'EUV', value: 3.0, valueText: '€3.0B', notes: ['Extreme Ultraviolet'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'arfi', col: 0, order: 1, type: 'source', label: 'ArFi', value: 2.9, notes: ['Argon Fluoride immersion'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'arf_dry', col: 0, order: 2, type: 'source', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry'], color: DRY_GREEN, labelColor: DRY_GREEN, linkTint: DRY_LINK },
      { id: 'krf', col: 0, order: 3, type: 'source', label: 'KrF', value: 0.6, notes: ['Krypton Fluoride'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'i_line', col: 0, order: 4, type: 'source', label: 'I-line', value: 0.1, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'metrology_inspection', col: 0, order: 5, type: 'source', label: ['Metrology', '& Inspection'], value: 0.3, color: LIGHT_BLUE, labelColor: LIGHT_BLUE, linkTint: LIGHT_BLUE_LINK },
      { id: 'net_system_sales', col: 1, order: 0, type: 'source', label: ['Net system', 'sales'], value: 7.1, notes: ['+25% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'installed_base_management', col: 1, order: 1, type: 'source', label: ['Installed base', 'management'], value: 2.1, notes: ['+38% Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 9.3, notes: ['+28% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.8, notes: ['52% margin', '+0pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 4.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.4, notes: ['36% margin', '+3pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_gains', col: 4, order: 2, type: 'profit', label: 'Other gains', value: 0.1, valueText: '€0.1B', color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.7, notes: ['29% margin', '+1pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'euv', target: 'net_system_sales', value: 3.0, sourceWidth: 117, targetWidth: 124, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'arfi', target: 'net_system_sales', value: 2.9, sourceWidth: 115, targetWidth: 116, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'arf_dry', target: 'net_system_sales', value: 0.1, sourceWidth: 4, targetWidth: 4, targetOrder: 2, linkTint: DRY_LINK },
      { source: 'krf', target: 'net_system_sales', value: 0.6, sourceWidth: 24, targetWidth: 24, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'i_line', target: 'net_system_sales', value: 0.1, sourceWidth: 4, targetWidth: 4, targetOrder: 4, linkTint: YELLOW_LINK },
      { source: 'metrology_inspection', target: 'net_system_sales', value: 0.3, sourceWidth: 9, targetWidth: 12, targetOrder: 5, linkTint: LIGHT_BLUE_LINK },
      { source: 'net_system_sales', target: 'revenue', value: 7.1, sourceWidth: 284, targetWidth: 286, sourceOrder: 0, targetOrder: 0 },
      { source: 'installed_base_management', target: 'revenue', value: 2.1, sourceWidth: 84, targetWidth: 84, sourceOrder: 0, targetOrder: 1, linkTint: YELLOW_LINK },
      { source: 'revenue', target: 'gross_profit', value: 4.8, sourceWidth: 192, targetWidth: 190, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 4.5, sourceWidth: 178, targetWidth: 177, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.4, sourceWidth: 134, targetWidth: 133, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.4, sourceWidth: 56, targetWidth: 55, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.6, sourceWidth: 105, targetWidth: 101, y0: 573.5, y1: 470.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 28, targetWidth: 27, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_gains', target: 'net_profit', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 589, y1: 523, sourceOrder: 0, targetOrder: 1, linkTint: PROFIT_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.1, sourceWidth: 43, targetWidth: 42, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 12, targetWidth: 10, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'ASML · 2024 财年第四季度',
        meta: { title: 'ASML 2024 财年第四季度利润表', period: '2024 财年第四季度', periodNote: '截至 2024 年 12 月' },
        annotationsSvg: annotations(true),
        nodes: {
          euv: { label: 'EUV', notes: ['极紫外'] }, arfi: { label: 'ArFi', notes: ['氟化氩浸没式'] },
          arf_dry: { label: 'ArF Dry', notes: ['氟化氩干式'] }, krf: { label: 'KrF', notes: ['氟化氪'] },
          i_line: { label: 'I-line' }, metrology_inspection: { label: '量测与检测' },
          net_system_sales: { label: '系统净销售额', notes: ['同比 +25%'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 +38%'] },
          revenue: { label: '净销售额', notes: ['同比 +28%'] }, gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +0 个百分点'] },
          cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 36%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' }, other_gains: { label: '其他收益' }, net_profit: { label: '净利润', notes: ['利润率 29%', '同比 +1 个百分点'] },
          tax: { label: '税费' }, rnd: { label: '研发' }, sga: { label: '销售、一般及行政' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
