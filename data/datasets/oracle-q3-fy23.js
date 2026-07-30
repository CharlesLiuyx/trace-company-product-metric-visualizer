/* Oracle — Q3 FY23 income statement ($B).
 * Reconstructed from input/processed/oracle-q3-fy23.png as a measured,
 * fixed-layout d3-sankey. Oracle marks are pure SVG/text; publisher
 * attribution is intentionally not rendered. */
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
    <path fill="${ORACLE_RED}" fill-rule="evenodd" d="M78 8h137a70 70 0 0 1 0 140H78a70 70 0 0 1 0-140Zm6 34h125a36 36 0 0 1 0 72H84a36 36 0 0 1 0-72Z"/>
    <g fill="${ORACLE_RED}" transform="translate(44 176)" data-typography-role="brand">
      <text x="102" y="26" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="38" font-weight="700" letter-spacing="3" textLength="205" lengthAdjust="spacingAndGlyphs">ORACLE</text>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      cloudSupport: ['云服务与', '许可证支持'],
      cloudLicense: ['云许可证与', '本地部署许可证'],
      hardware: '硬件',
      services: '服务',
      revenue: '收入',
      gross: '毛利润',
      cost: ['收入', '成本'],
      cloud: '云',
      operating: '营业利润',
      expenses: ['运营', '费用'],
      net: '净利润',
      financial: '财务费用',
      tax: '税费',
      other: '其他',
      sm: '销售与市场',
      rnd: '研发',
      ga: '一般及行政',
      amortization: '摊销',
      yoy17: '同比 +17%',
      yoy0: '同比 +0%',
      yoy2: '同比 +2%',
      yoy74: '同比 +74%',
      yoy18: '同比 +18%',
      margin72: '利润率 72%',
      pp7: '同比 (7 个百分点)',
      margin26: '利润率 26%',
      pp10: '同比 (10 个百分点)',
      margin15: '利润率 15%',
      gm81: '毛利率 81%',
      gm70: '毛利率 70%',
      gm10: '毛利率 10%',
    } : {
      cloudSupport: ['Cloud services', '& license support'],
      cloudLicense: ['Cloud license', '& on-premise', 'license'],
      hardware: 'Hardware',
      services: 'Services',
      revenue: 'Revenue',
      gross: 'Gross profit',
      cost: ['Cost of', 'revenue'],
      cloud: 'Cloud',
      operating: 'Operating profit',
      expenses: ['Operating', 'expenses'],
      net: 'Net profit',
      financial: 'Financial',
      tax: 'Tax',
      other: 'Other',
      sm: 'S&M',
      rnd: 'R&D',
      ga: 'G&A',
      amortization: 'Amortization',
      yoy17: '+17% Y/Y',
      yoy0: '+0% Y/Y',
      yoy2: '+2% Y/Y',
      yoy74: '+74% Y/Y',
      yoy18: '+18% Y/Y',
      margin72: '72% margin',
      pp7: '(7pp) Y/Y',
      margin26: '26% margin',
      pp10: '(10pp) Y/Y',
      margin15: '15% margin',
      gm81: '81% gross margin',
      gm70: '70% gross margin',
      gm10: '10% gross margin',
    };
    const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
    const sideName = (x, top, values) => ({
      x, top, anchor: 'end', lineGap: 8,
      lines: (Array.isArray(values) ? values : [values]).map((text) => line(text, 40, 800)),
    });
    const valueNote = (x, top, note) => ({
      x, top, anchor: 'middle', lineGap: 9,
      lines: [line('$value', 40, 400), line(note, 28, 400, NOTE)],
    });
    const rightPair = (x, top, name, value, split = true) => ({
      x, top, anchor: 'start', lineGap: 8,
      lines: split
        ? [line(name, 34, 800, RED_LABEL), line(value, 34, 400, RED_LABEL)]
        : [line(`${name} ${value}`, 34, 800, RED_LABEL)],
    });
    return {
      cloud_services_license_support: {
        blocks: [valueNote(435, 528, t.yoy17), sideName(353, zh ? 685 : 683, t.cloudSupport)],
      },
      cloud_license_on_premise: {
        blocks: [valueNote(420, 880, t.yoy0), sideName(338, zh ? 944 : 914, t.cloudLicense)],
      },
      hardware: { blocks: [valueNote(402, 1022, t.yoy2), sideName(320, 1118, t.hardware)] },
      services: { blocks: [valueNote(390, 1169, t.yoy74), sideName(308, 1267, t.services)] },
      revenue: { blocks: [{ x: 886, top: 582, anchor: 'middle', lineGap: 9, lines: [
        line(t.revenue, 40, 800), line('$value', 40, 400), line(t.yoy18, 28, 400, NOTE),
      ] }] },
      gross_profit: { blocks: [{ x: 1363, top: 383, anchor: 'middle', lineGap: 9, lines: [
        line(t.gross, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(t.margin72, 28, 400, NOTE), line(t.pp7, 28, 400, NOTE),
      ] }] },
      cost_of_revenue: { blocks: [{ x: 1355, top: 1222, anchor: 'middle', lineGap: 8, lines: [
        ...t.cost.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL),
      ] }] },
      cor_cloud: { blocks: [{ x: 1693, top: 1132, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 8, lines: [
        line(`${t.cloud} ($2.0B)`, 30, 700, RED_LABEL), line(t.gm81, 27, 400, NOTE),
      ] }] },
      cor_hardware: { blocks: [{ x: 1676, top: 1230, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 8, lines: [
        line(`${t.hardware} ($0.2B)`, 30, 700, RED_LABEL), line(t.gm70, 27, 400, NOTE),
      ] }] },
      cor_services: { blocks: [{ x: 1684, top: 1324, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 8, lines: [
        line(`${t.services} ($1.2B)`, 30, 700, RED_LABEL), line(t.gm10, 27, 400, NOTE),
      ] }] },
      operating_profit: { blocks: [{ x: 1810, top: 278, anchor: 'middle', lineGap: 9, lines: [
        line(t.operating, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(t.margin26, 28, 400, NOTE), line(t.pp10, 28, 400, NOTE),
      ] }] },
      operating_expenses: { blocks: [{ x: 1823, top: 894, anchor: 'middle', lineGap: 8, lines: [
        ...t.expenses.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL),
      ] }] },
      net_profit: { blocks: [{ x: 2352, top: 362, anchor: 'start', lineGap: 9, lines: [
        line(t.net, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(t.margin15, 28, 400, NOTE), line(t.pp7, 28, 400, NOTE),
      ] }] },
      financial: { blocks: [rightPair(2374, 545, t.financial, '($0.9B)')] },
      tax: { blocks: [rightPair(2388, 643, t.tax, '($0.3B)')] },
      other_non_operating: { blocks: [rightPair(2390, 745, t.other, '($0.1B)')] },
      sm: { blocks: [rightPair(2394, 881, t.sm, '($2.2B)')] },
      rnd: { blocks: [rightPair(2398, 1011, t.rnd, '($2.1B)')] },
      ga: { blocks: [rightPair(2394, 1117, t.ga, '($0.4B)')] },
      amortization: { blocks: [rightPair(2342, 1209, t.amortization, '($0.9B)')] },
      other_opex: { blocks: [rightPair(2396, 1302, t.other, '($0.1B)')] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q3-fy23',
    name: 'Oracle · Q3 FY23',
    company: 'Oracle',
    meta: {
      company: 'Oracle',
      title: 'Oracle Q3 FY23 Income Statement',
      period: 'Q3 FY23',
      periodNote: 'Ending Feb. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/oracle-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2135,
      periodX: 2440,
      periodY: 258,
      periodNoteY: 300,
      logoWidth: 293,
      logoHeight: 240,
      logoY: 280,
      logoViewBox: '0 0 293 212',
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
      scale: 25.5,
      nodes: {
        cloud_services_license_support: { x: 386, y: 619, width: 71, height: 226 },
        cloud_license_on_premise: { x: 386, y: 973, width: 71, height: 31 },
        hardware: { x: 386, y: 1130, width: 71, height: 19 },
        services: { x: 386, y: 1277, width: 71, height: 32 },
        revenue: { x: 853, y: 737, width: 70, height: 316 },
        gross_profit: { x: 1320, y: 579, width: 71, height: 227 },
        cost_of_revenue: { x: 1320, y: 1115, width: 71, height: 87 },
        cor_cloud: { x: 1568, y: 1144, width: 70, height: 48 },
        cor_hardware: { x: 1568, y: 1253, width: 70, height: 29 },
        cor_services: { x: 1568, y: 1354, width: 70, height: 5 },
        operating_profit: { x: 1783, y: 461, width: 70, height: 80 },
        operating_expenses: { x: 1788, y: 730, width: 70, height: 144 },
        net_profit: { x: 2254, y: 360, width: 71, height: 46 },
        financial: { x: 2254, y: 548, width: 71, height: 21 },
        tax: { x: 2254, y: 665, width: 71, height: 6 },
        other_non_operating: { x: 2254, y: 776, width: 71, height: 3 },
        sm: { x: 2254, y: 881, width: 71, height: 53 },
        rnd: { x: 2254, y: 1019, width: 71, height: 54 },
        ga: { x: 2254, y: 1141, width: 71, height: 22 },
        amortization: { x: 2254, y: 1253, width: 71, height: 9 },
        other_opex: { x: 2254, y: 1342, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'cloud_services_license_support', col: 0, order: 0, type: 'source', label: 'Cloud services & license support', value: 8.9, valueText: '$8.9B', notes: ['+17% Y/Y'] },
      { id: 'cloud_license_on_premise', col: 0, order: 1, type: 'source', label: 'Cloud license & on-premise license', value: 1.3, valueText: '$1.3B', notes: ['+0% Y/Y'] },
      { id: 'hardware', col: 0, order: 2, type: 'source', label: 'Hardware', value: 0.8, valueText: '$0.8B', notes: ['+2% Y/Y'] },
      { id: 'services', col: 0, order: 3, type: 'source', label: 'Services', value: 1.4, valueText: '$1.4B', notes: ['+74% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.4, valueText: '$12.4B', notes: ['+18% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 9.0, valueText: '$9.0B', notes: ['72% margin', '(7pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 3.4, valueText: '($3.4B)' },
      { id: 'cor_cloud', col: 3, order: 2, type: 'cost', label: 'Cloud', value: 2.0, valueText: '($2.0B)', notes: ['81% gross margin'] },
      { id: 'cor_hardware', col: 3, order: 3, type: 'cost', label: 'Hardware', value: 0.2, valueText: '($0.2B)', notes: ['70% gross margin'] },
      { id: 'cor_services', col: 3, order: 4, type: 'cost', label: 'Services', value: 1.2, valueText: '($1.2B)', notes: ['10% gross margin'] },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.3, valueText: '$3.3B', notes: ['26% margin', '(10pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 5.7, valueText: '($5.7B)' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.9, valueText: '$1.9B', notes: ['15% margin', '(7pp) Y/Y'] },
      { id: 'financial', col: 4, order: 1, type: 'cost', label: 'Financial', value: 0.9, valueText: '($0.9B)' },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.3, valueText: '($0.3B)' },
      { id: 'other_non_operating', col: 4, order: 3, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
      { id: 'sm', col: 4, order: 4, type: 'cost', label: 'S&M', value: 2.2, valueText: '($2.2B)' },
      { id: 'rnd', col: 4, order: 5, type: 'cost', label: 'R&D', value: 2.1, valueText: '($2.1B)' },
      { id: 'ga', col: 4, order: 6, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)' },
      { id: 'amortization', col: 4, order: 7, type: 'cost', label: 'Amortization', value: 0.9, valueText: '($0.9B)' },
      { id: 'other_opex', col: 4, order: 8, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
    ],
    links: [
      { source: 'cloud_services_license_support', target: 'revenue', value: 8.9, sourceWidth: 226, targetWidth: 226, targetOrder: 0 },
      { source: 'cloud_license_on_premise', target: 'revenue', value: 1.3, sourceWidth: 31, targetWidth: 31, targetOrder: 1 },
      { source: 'hardware', target: 'revenue', value: 0.8, sourceWidth: 19, targetWidth: 19, targetOrder: 2 },
      { source: 'services', target: 'revenue', value: 1.4, sourceWidth: 32, targetWidth: 40, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 9.0, sourceWidth: 229, targetWidth: 227, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.4, sourceWidth: 87, targetWidth: 87, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_cloud', value: 2.0, sourceWidth: 48, targetWidth: 48, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_hardware', value: 0.2, sourceWidth: 29, targetWidth: 29, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_services', value: 1.2, sourceWidth: 10, targetWidth: 5, sourceOrder: 2 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.3, sourceWidth: 80, targetWidth: 80, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.7, sourceWidth: 147, targetWidth: 144, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceWidth: 46, targetWidth: 46, sourceOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.9, sourceWidth: 21, targetWidth: 21, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 6, targetWidth: 6, sourceOrder: 2 },
      { source: 'operating_profit', target: 'other_non_operating', value: 0.1, sourceWidth: 7, targetWidth: 3, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'sm', value: 2.2, sourceWidth: 53, targetWidth: 53, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 2.1, sourceWidth: 54, targetWidth: 54, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 22, targetWidth: 22, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization', value: 0.9, sourceWidth: 9, targetWidth: 9, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 6, targetWidth: 1, sourceOrder: 4 },
    ],
    i18n: {
      preservedAnnotationText: ['ORACLE'],
      zh: {
        name: 'Oracle · 2023 财年第三季度',
        meta: {
          title: 'Oracle 2023 财年第三季度利润表',
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 2 月',
          titleTextLength: 2135,
        },
        nodes: {
          cloud_services_license_support: { label: '云服务与许可证支持', notes: ['同比 +17%'] },
          cloud_license_on_premise: { label: '云许可证与本地部署许可证', notes: ['同比 +0%'] },
          hardware: { label: '硬件', notes: ['同比 +2%'] },
          services: { label: '服务', notes: ['同比 +74%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 (7 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud: { label: '云', notes: ['毛利率 81%'] },
          cor_hardware: { label: '硬件', notes: ['毛利率 70%'] },
          cor_services: { label: '服务', notes: ['毛利率 10%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 26%', '同比 (10 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 15%', '同比 (7 个百分点)'] },
          financial: { label: '财务费用' },
          tax: { label: '税费' },
          other_non_operating: { label: '其他' },
          sm: { label: '销售与市场' },
          rnd: { label: '研发' },
          ga: { label: '一般及行政' },
          amortization: { label: '摊销' },
          other_opex: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
