/* Oracle — Q1 FY24 income statement ($B), measured from the native
 * 2667×1500 Source and rendered as a fixed-layout d3-sankey. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const DARK = '#3a3632';
  const GRAY_LINK = '#9f9d9c';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const ORACLE_RED = '#ff141d';

  const ORACLE_LOGO = `
    <g data-typography-role="brand">
      <rect x="7" y="0" width="280" height="178" rx="89" fill="${ORACLE_RED}"/>
      <rect x="41" y="31" width="212" height="116" rx="58" fill="${BG}"/>
      <text x="151.5" y="242" text-anchor="middle" fill="${ORACLE_RED}"
        font-family="Arial,Helvetica,sans-serif" font-size="38" font-weight="700"
        letter-spacing="3" textLength="300" lengthAdjust="spacingAndGlyphs">ORACLE</text>
    </g>`;

  const line = (text, size, weight = 400, color = undefined) => ({
    text, size, weight, ...(color ? { color } : {}),
  });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8, semanticRole = '') => ({
    x, top, anchor, lineGap, lines, ...(semanticRole ? { semanticRole } : {}),
  });

  const labels = (zh) => {
    const t = zh ? {
      cloudServices: ['云服务与', '许可证支持'],
      cloudLicense: ['云许可证与', '本地许可证'],
      hardware: '硬件', services: '服务', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], cloud: '云', operating: '营业利润',
      expenses: ['运营', '费用'], net: '净利润', financial: '财务费用',
      other: '其他', rnd: '研发', sm: '销售与市场', ga: '一般及行政', amortization: '摊销',
      yoy13: '同比 +13%', yoy11: '同比 (11%)', yoy6: '同比 (6%)',
      yoy2: '同比 +2%', yoy9: '同比 +9%', margin71: '利润率 71%',
      pp2: '同比 (2 个百分点)', margin26: '利润率 26%', pp4: '同比 +4 个百分点',
      margin19: '利润率 19%', pp6: '同比 +6 个百分点',
      gm79: '毛利率 79%', gm69: '毛利率 69%', gm10: '毛利率 10%',
    } : {
      cloudServices: ['Cloud services', '& license support'],
      cloudLicense: ['Cloud license', '& on-premise', 'license'],
      hardware: 'Hardware', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], cloud: 'Cloud', operating: 'Operating profit',
      expenses: ['Operating', 'expenses'], net: 'Net profit', financial: 'Financial',
      other: 'Other', rnd: 'R&D', sm: 'S&M', ga: 'G&A', amortization: 'Amortization',
      yoy13: '+13% Y/Y', yoy11: '(11%) Y/Y', yoy6: '(6%) Y/Y',
      yoy2: '+2% Y/Y', yoy9: '+9% Y/Y', margin71: '71% margin',
      pp2: '(2pp) Y/Y', margin26: '26% margin', pp4: '+4pp Y/Y',
      margin19: '19% margin', pp6: '+6pp Y/Y',
      gm79: '79% gross margin', gm69: '69% gross margin', gm10: '10% gross margin',
    };
    const valueNote = (x, top, note) =>
      block(x, top, [line('$value', 40), line(note, 28, 400, NOTE)], 'middle', 9);
    const sideName = (x, top, values) =>
      block(x, top, (Array.isArray(values) ? values : [values]).map((text) => line(text, 40, 800)), 'end', 8);
    return {
      cloud_services: { blocks: [valueNote(430, 427, t.yoy13), sideName(367, 614, t.cloudServices)] },
      cloud_license: { blocks: [valueNote(430, 830, t.yoy11), sideName(370, zh ? 890 : 864, t.cloudLicense)] },
      hardware: { blocks: [valueNote(430, 1004, t.yoy6), sideName(294, 1092, t.hardware)] },
      services: { blocks: [valueNote(430, 1166, t.yoy2), sideName(279, 1265, t.services)] },
      revenue: { blocks: [block(894, 533, [line(t.revenue, 40, 800), line('$value', 40), line(t.yoy9, 28, 400, NOTE)], 'middle', 9)] },
      gross_profit: { blocks: [block(1366, 423, [
        line(t.gross, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(t.margin71, 28, 400, NOTE), line(t.pp2, 28, 400, NOTE),
      ], 'middle', 9)] },
      cost_of_revenue: { blocks: [block(1361, 1168, [
        ...t.cost.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL),
      ], 'middle', 8)] },
      cor_cloud: { blocks: [block(1679, zh ? 1090 : 1093, [
        line(`${t.cloud} ($2.2B)`, 30, 700, RED_LABEL), line(t.gm79, 27, 400, NOTE),
      ], 'start', 8, 'centered-side-label')] },
      cor_hardware: { blocks: [block(1668, 1218, [
        line(`${t.hardware} ($0.2B)`, 30, 700, RED_LABEL), line(t.gm69, 27, 400, NOTE),
      ], 'start', 8, 'centered-side-label')] },
      cor_services: { blocks: [block(1673, 1330, [
        line(`${t.services} ($1.2B)`, 30, 700, RED_LABEL), line(t.gm10, 27, 400, NOTE),
      ], 'start', 8, 'centered-side-label')] },
      operating_profit: { blocks: [block(1829, 318, [
        line(t.operating, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(t.margin26, 28, 400, NOTE), line(t.pp4, 28, 400, NOTE),
      ], 'middle', 9)] },
      operating_expenses: { blocks: [block(1829, 913, [
        ...t.expenses.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL),
      ], 'middle', 8)] },
      net_profit: { blocks: [block(2354, 390, [
        line(t.net, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(t.margin19, 28, 400, NOTE), line(t.pp6, 28, 400, NOTE),
      ], 'start', 9)] },
      financial: { blocks: [block(2381, 657, [line(t.financial, 31, 800, RED_LABEL), line('($0.9B)', 31, 400, RED_LABEL)], 'start', 8)] },
      other_expense: { blocks: [block(2396, 746, [line(t.other, 31, 800, RED_LABEL), line('($49M)', 31, 400, RED_LABEL)], 'start', 8)] },
      rnd: { blocks: [block(2396, 854, [line(t.rnd, 31, 800, RED_LABEL), line('($2.2B)', 31, 400, RED_LABEL)], 'start', 8)] },
      sm: { blocks: [block(2396, 964, [line(t.sm, 31, 800, RED_LABEL), line('($2.0B)', 31, 400, RED_LABEL)], 'start', 8)] },
      ga: { blocks: [block(2396, 1091, [line(t.ga, 31, 800, RED_LABEL), line('($0.4B)', 31, 400, RED_LABEL)], 'start', 8)] },
      amortization: { blocks: [block(2349, 1188, [line(t.amortization, 31, 800, RED_LABEL), line('($0.8B)', 31, 400, RED_LABEL)], 'start', 8)] },
      operating_other: { blocks: [block(2401, 1280, [line(t.other, 31, 800, RED_LABEL), line('($0.1B)', 31, 400, RED_LABEL)], 'start', 8)] },
      tax_benefit: { blocks: [block(2174, 550, [
        line(zh ? '税收收益' : 'Tax benefit', 31, 800, GREEN_LABEL),
        line('$value', 31, 400, GREEN_LABEL),
      ], 'middle', 8)] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q1-fy24',
    name: 'Oracle · Q1 FY24',
    company: 'Oracle',
    meta: {
      company: 'Oracle',
      title: 'Oracle Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending August 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/oracle-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2123,
      periodX: 887,
      periodY: 1295,
      periodNoteY: 1340,
      logoWidth: 303,
      logoHeight: 244,
      logoY: 247,
      logoViewBox: '0 0 303 244',
      logoSvg: ORACLE_LOGO,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 28.4,
      nodes: {
        cloud_services: { x: 392, y: 526, width: 71, height: 273 },
        cloud_license: { x: 392, y: 930, width: 71, height: 21 },
        hardware: { x: 392, y: 1108, width: 71, height: 17 },
        services: { x: 392, y: 1268, width: 71, height: 37 },
        revenue: { x: 859, y: 680, width: 70, height: 355 },
        gross_profit: { x: 1331, y: 604, width: 71, height: 251 },
        cost_of_revenue: { x: 1326, y: 1054, width: 71, height: 101 },
        cor_cloud: { x: 1579, y: 1095, width: 70, height: 60 },
        cor_hardware: { x: 1579, y: 1238, width: 70, height: 32 },
        cor_services: { x: 1579, y: 1365, width: 70, height: 5 },
        operating_profit: { x: 1794, y: 497, width: 70, height: 93 },
        operating_expenses: { x: 1794, y: 745, width: 70, height: 158 },
        tax_benefit: { x: 2140, y: 536, width: 71, height: 3 },
        net_profit: { x: 2260, y: 406, width: 71, height: 68 },
        financial: { x: 2260, y: 664, width: 71, height: 23 },
        other_expense: { x: 2260, y: 787, width: 71, height: 2 },
        rnd: { x: 2260, y: 866, width: 71, height: 62 },
        sm: { x: 2260, y: 995, width: 71, height: 56 },
        ga: { x: 2260, y: 1126, width: 71, height: 20 },
        amortization: { x: 2260, y: 1220, width: 71, height: 9 },
        operating_other: { x: 2260, y: 1318, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'cloud_services', col: 0, order: 0, type: 'source', label: 'Cloud services & license support', value: 9.5, valueText: '$9.5B', notes: ['+13% Y/Y'] },
      { id: 'cloud_license', col: 0, order: 1, type: 'source', label: 'Cloud license & on-premise license', value: 0.8, valueText: '$0.8B', notes: ['(11%) Y/Y'] },
      { id: 'hardware', col: 0, order: 2, type: 'source', label: 'Hardware', value: 0.7, valueText: '$0.7B', notes: ['(6%) Y/Y'] },
      { id: 'services', col: 0, order: 3, type: 'source', label: 'Services', value: 1.4, valueText: '$1.4B', notes: ['+2% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.5, valueText: '$12.5B', notes: ['+9% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 8.8, valueText: '$8.8B', notes: ['71% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.6, valueText: '($3.6B)' },
      { id: 'cor_cloud', col: 3, order: 2, type: 'cost', label: 'Cloud', value: 2.2, valueText: '($2.2B)', notes: ['79% gross margin'] },
      { id: 'cor_hardware', col: 3, order: 3, type: 'cost', label: 'Hardware', value: 0.2, valueText: '($0.2B)', notes: ['69% gross margin'] },
      { id: 'cor_services', col: 3, order: 4, type: 'cost', label: 'Services', value: 1.2, valueText: '($1.2B)', notes: ['10% gross margin'] },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.3, valueText: '$3.3B', notes: ['26% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.5, valueText: '($5.5B)' },
      { id: 'tax_benefit', col: 5, order: 0, type: 'profit', label: 'Tax benefit', value: 0.045, valueText: '$45M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.4, valueText: '$2.4B', notes: ['19% margin', '+6pp Y/Y'] },
      { id: 'financial', col: 6, order: 1, type: 'cost', label: 'Financial', value: 0.9, valueText: '($0.9B)' },
      { id: 'other_expense', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.049, valueText: '($49M)' },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 2.2, valueText: '($2.2B)' },
      { id: 'sm', col: 6, order: 4, type: 'cost', label: 'S&M', value: 2.0, valueText: '($2.0B)' },
      { id: 'ga', col: 6, order: 5, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)' },
      { id: 'amortization', col: 6, order: 6, type: 'cost', label: 'Amortization', value: 0.8, valueText: '($0.8B)' },
      { id: 'operating_other', col: 6, order: 7, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
    ],
    links: [
      { source: 'cloud_services', target: 'revenue', value: 9.5, sourceWidth: 273, targetWidth: 273, targetOrder: 0 },
      { source: 'cloud_license', target: 'revenue', value: 0.8, sourceWidth: 21, targetWidth: 21, targetOrder: 1 },
      { source: 'hardware', target: 'revenue', value: 0.7, sourceWidth: 17, targetWidth: 17, targetOrder: 2 },
      { source: 'services', target: 'revenue', value: 1.4, sourceWidth: 37, targetWidth: 44, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 8.8, sourceWidth: 254, targetWidth: 251, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.6, sourceWidth: 101, targetWidth: 101, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_cloud', value: 2.2, sourceWidth: 60, targetWidth: 60, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_hardware', value: 0.2, sourceWidth: 32, targetWidth: 32, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_services', value: 1.2, sourceWidth: 7, targetWidth: 5, sourceOrder: 2 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.3, sourceWidth: 92, targetWidth: 93, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.5, sourceWidth: 159, targetWidth: 158, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 2.351, sourceWidth: 68, targetWidth: 66, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'financial', value: 0.9, sourceWidth: 23, targetWidth: 23, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 0.049, sourceWidth: 2, targetWidth: 2, sourceOrder: 2 },
      {
        source: 'tax_benefit', target: 'net_profit', value: 0.045,
        sourceWidth: 3, targetWidth: 2, y0: 537.5, y1: 473,
        sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        curve: { c1x: 2235, c1y: 537.5, c2x: 2239, c2y: 473 },
      },
      { source: 'operating_expenses', target: 'rnd', value: 2.2, sourceWidth: 62, targetWidth: 62, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.0, sourceWidth: 56, targetWidth: 56, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 20, targetWidth: 20, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization', value: 0.8, sourceWidth: 9, targetWidth: 9, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'operating_other', value: 0.1, sourceWidth: 11, targetWidth: 2, sourceOrder: 4 },
    ],
    i18n: {
      preservedAnnotationText: ['ORACLE'],
      zh: {
        name: 'Oracle · 2024 财年第一季度',
        meta: {
          title: 'Oracle 2024 财年第一季度利润表',
          period: '2024 财年第一季度',
          periodNote: '截至 2023 年 8 月',
          titleTextLength: 1960,
        },
        nodes: {
          cloud_services: { label: '云服务与许可证支持', notes: ['同比 +13%'] },
          cloud_license: { label: '云许可证与本地许可证', notes: ['同比 (11%)'] },
          hardware: { label: '硬件', notes: ['同比 (6%)'] },
          services: { label: '服务', notes: ['同比 +2%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 71%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud: { label: '云', notes: ['毛利率 79%'] },
          cor_hardware: { label: '硬件', notes: ['毛利率 69%'] },
          cor_services: { label: '服务', notes: ['毛利率 10%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 26%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润', notes: ['利润率 19%', '同比 +6 个百分点'] },
          financial: { label: '财务费用' },
          other_expense: { label: '其他' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '一般及行政' },
          amortization: { label: '摊销' },
          operating_other: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
