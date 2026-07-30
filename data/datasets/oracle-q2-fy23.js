/* Oracle — Q2 FY23 income statement ($B).
 * Measured from input/processed/oracle-q2-fy23.png. Oracle marks are pure
 * SVG/text; publisher and creator attribution are intentionally omitted. */
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
      hardware: '硬件', services: '服务', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], cloud: '云', operating: '营业利润',
      expenses: ['运营', '费用'], net: '净利润', financial: '财务费用',
      tax: '税费', other: '其他', sm: '销售与市场', rnd: '研发',
      ga: '一般及行政', amortization: '摊销',
      yoy14: '同比 +14%', yoy16: '同比 +16%', yoy11: '同比 +11%',
      yoy74: '同比 +74%', yoy18: '同比 +18%',
      margin73: '利润率 73%', pp7: '同比 (7 个百分点)',
      margin25: '利润率 25%', pp33: '同比 +33 个百分点',
      margin14: '利润率 14%', pp26: '同比 +26 个百分点',
      gm81: '毛利率 81%', gm66: '毛利率 66%', gm15: '毛利率 15%',
    } : {
      cloudSupport: ['Cloud services', '& license support'],
      cloudLicense: ['Cloud license', '& on-premise', 'license'],
      hardware: 'Hardware', services: 'Services', revenue: 'Revenue',
      gross: 'Gross profit', cost: ['Cost of', 'revenue'], cloud: 'Cloud',
      operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      net: 'Net profit', financial: 'Financial', tax: 'Tax', other: 'Other',
      sm: 'S&M', rnd: 'R&D', ga: 'G&A', amortization: 'Amortization',
      yoy14: '+14% Y/Y', yoy16: '+16% Y/Y', yoy11: '+11% Y/Y',
      yoy74: '+74% Y/Y', yoy18: '+18% Y/Y',
      margin73: '73% margin', pp7: '(7pp) Y/Y',
      margin25: '25% margin', pp33: '+33pp Y/Y',
      margin14: '14% margin', pp26: '+26pp Y/Y',
      gm81: '81% gross margin', gm66: '66% gross margin', gm15: '15% gross margin',
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
    const rightPair = (x, top, name, value) => ({
      x, top, anchor: 'start', lineGap: 8,
      lines: [line(name, 34, 800, RED_LABEL), line(value, 34, 400, RED_LABEL)],
    });
    return {
      cloud_services_license_support: {
        blocks: [valueNote(421, 365, t.yoy14), sideName(370, 500, t.cloudSupport)],
      },
      cloud_license_on_premise: {
        blocks: [valueNote(421, 719, t.yoy16), sideName(334, zh ? 778 : 754, t.cloudLicense)],
      },
      hardware: { blocks: [valueNote(421, 907, t.yoy11), sideName(310, 997, t.hardware)] },
      services: { blocks: [valueNote(421, 1105, t.yoy74), sideName(293, 1196, t.services)] },
      revenue: { blocks: [{ x: 888, top: 499, anchor: 'middle', lineGap: 9, lines: [
        line(t.revenue, 40, 800), line('$value', 40, 400), line(t.yoy18, 28, 400, NOTE),
      ] }] },
      gross_profit: { blocks: [{ x: 1360, top: 382, anchor: 'middle', lineGap: 9, lines: [
        line(t.gross, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(t.margin73, 28, 400, NOTE), line(t.pp7, 28, 400, NOTE),
      ] }] },
      cost_of_revenue: { blocks: [{ x: 1356, top: 1145, anchor: 'middle', lineGap: 8, lines: [
        ...t.cost.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL),
      ] }] },
      cor_cloud: { blocks: [{ x: 1696, top: 1059, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 8, lines: [
        line(`${t.cloud} ($1.9B)`, 30, 700, RED_LABEL), line(t.gm81, 27, 400, NOTE),
      ] }] },
      cor_hardware: { blocks: [{ x: 1676, top: 1170, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 8, lines: [
        line(`${t.hardware} ($0.3B)`, 30, 700, RED_LABEL), line(t.gm66, 27, 400, NOTE),
      ] }] },
      cor_services: { blocks: [{ x: 1683, top: 1263, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 8, lines: [
        line(`${t.services} ($1.2B)`, 30, 700, RED_LABEL), line(t.gm15, 27, 400, NOTE),
      ] }] },
      operating_profit: { blocks: [{ x: 1813, top: 300, anchor: 'middle', lineGap: 9, lines: [
        line(t.operating, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(t.margin25, 28, 400, NOTE), line(t.pp33, 28, 400, NOTE),
      ] }] },
      operating_expenses: { blocks: [{ x: 1813, top: 869, anchor: 'middle', lineGap: 8, lines: [
        ...t.expenses.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL),
      ] }] },
      net_profit: { blocks: [{ x: 2354, top: 361, anchor: 'start', lineGap: 9, lines: [
        line(t.net, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
        line(t.margin14, 28, 400, NOTE), line(t.pp26, 28, 400, NOTE),
      ] }] },
      financial: { blocks: [rightPair(2370, 559, t.financial, '($0.9B)')] },
      tax: { blocks: [rightPair(2392, 654, t.tax, '($0.4B)')] },
      other_non_operating: { blocks: [rightPair(2392, 756, t.other, '($0.1B)')] },
      sm: { blocks: [rightPair(2394, 876, t.sm, '($2.2B)')] },
      rnd: { blocks: [rightPair(2398, 1012, t.rnd, '($2.2B)')] },
      ga: { blocks: [rightPair(2396, 1126, t.ga, '($0.4B)')] },
      amortization: { blocks: [rightPair(2344, 1229, t.amortization, '($0.9B)')] },
      other_opex: { blocks: [rightPair(2400, 1320, t.other, '($0.2B)')] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q2-fy23',
    name: 'Oracle · Q2 FY23',
    company: 'Oracle',
    meta: {
      company: 'Oracle',
      title: 'Oracle Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending November 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/oracle-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2123,
      periodX: 2226, periodY: 258, periodNoteY: 300,
      logoWidth: 293, logoHeight: 212, logoY: 236, logoViewBox: '0 0 293 212',
      logoSvg: ORACLE_LOGO,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 22.36,
      nodes: {
        cloud_services_license_support: { x: 386, y: 453, width: 71, height: 192 },
        cloud_license_on_premise: { x: 386, y: 810, width: 71, height: 30 },
        hardware: { x: 386, y: 1010, width: 71, height: 18 },
        services: { x: 386, y: 1207, width: 71, height: 29 },
        revenue: { x: 853, y: 645, width: 70, height: 275 },
        gross_profit: { x: 1325, y: 566, width: 71, height: 200 },
        cost_of_revenue: { x: 1320, y: 1058, width: 71, height: 74 },
        cor_cloud: { x: 1578, y: 1074, width: 70, height: 41 },
        cor_hardware: { x: 1578, y: 1193, width: 70, height: 25 },
        cor_services: { x: 1583, y: 1296, width: 70, height: 5 },
        operating_profit: { x: 1778, y: 486, width: 70, height: 67 },
        operating_expenses: { x: 1778, y: 715, width: 70, height: 130 },
        net_profit: { x: 2254, y: 385, width: 71, height: 36 },
        financial: { x: 2254, y: 583, width: 71, height: 17 },
        tax: { x: 2254, y: 694, width: 71, height: 7 },
        other_non_operating: { x: 2254, y: 782, width: 71, height: 4 },
        sm: { x: 2254, y: 889, width: 71, height: 48 },
        rnd: { x: 2254, y: 1025, width: 71, height: 47 },
        ga: { x: 2254, y: 1158, width: 71, height: 18 },
        amortization: { x: 2254, y: 1263, width: 71, height: 8 },
        other_opex: { x: 2254, y: 1351, width: 71, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'cloud_services_license_support', col: 0, order: 0, type: 'source', label: 'Cloud services & license support', value: 8.6, valueText: '$8.6B', notes: ['+14% Y/Y'] },
      { id: 'cloud_license_on_premise', col: 0, order: 1, type: 'source', label: 'Cloud license & on-premise license', value: 1.4, valueText: '$1.4B', notes: ['+16% Y/Y'] },
      { id: 'hardware', col: 0, order: 2, type: 'source', label: 'Hardware', value: 0.9, valueText: '$0.9B', notes: ['+11% Y/Y'] },
      { id: 'services', col: 0, order: 3, type: 'source', label: 'Services', value: 1.4, valueText: '$1.4B', notes: ['+74% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.3, valueText: '$12.3B', notes: ['+18% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 8.9, valueText: '$8.9B', notes: ['73% margin', '(7pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 3.4, valueText: '($3.4B)' },
      { id: 'cor_cloud', col: 3, order: 2, type: 'cost', label: 'Cloud', value: 1.9, valueText: '($1.9B)', notes: ['81% gross margin'] },
      { id: 'cor_hardware', col: 3, order: 3, type: 'cost', label: 'Hardware', value: 0.3, valueText: '($0.3B)', notes: ['66% gross margin'] },
      { id: 'cor_services', col: 3, order: 4, type: 'cost', label: 'Services', value: 1.2, valueText: '($1.2B)', notes: ['15% gross margin'] },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.1, valueText: '$3.1B', notes: ['25% margin', '+33pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 5.8, valueText: '($5.8B)' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.7, valueText: '$1.7B', notes: ['14% margin', '+26pp Y/Y'] },
      { id: 'financial', col: 4, order: 1, type: 'cost', label: 'Financial', value: 0.9, valueText: '($0.9B)' },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.4, valueText: '($0.4B)' },
      { id: 'other_non_operating', col: 4, order: 3, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
      { id: 'sm', col: 4, order: 4, type: 'cost', label: 'S&M', value: 2.2, valueText: '($2.2B)' },
      { id: 'rnd', col: 4, order: 5, type: 'cost', label: 'R&D', value: 2.2, valueText: '($2.2B)' },
      { id: 'ga', col: 4, order: 6, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)' },
      { id: 'amortization', col: 4, order: 7, type: 'cost', label: 'Amortization', value: 0.9, valueText: '($0.9B)' },
      { id: 'other_opex', col: 4, order: 8, type: 'cost', label: 'Other', value: 0.2, valueText: '($0.2B)' },
    ],
    links: [
      { source: 'cloud_services_license_support', target: 'revenue', value: 8.6, sourceWidth: 192, targetWidth: 192, targetOrder: 0 },
      { source: 'cloud_license_on_premise', target: 'revenue', value: 1.4, sourceWidth: 30, targetWidth: 30, targetOrder: 1 },
      { source: 'hardware', target: 'revenue', value: 0.9, sourceWidth: 18, targetWidth: 18, targetOrder: 2 },
      { source: 'services', target: 'revenue', value: 1.4, sourceWidth: 29, targetWidth: 35, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 8.9, sourceWidth: 200, targetWidth: 200, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.4, sourceWidth: 74, targetWidth: 74, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_cloud', value: 1.9, sourceWidth: 41, targetWidth: 41, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_hardware', value: 0.3, sourceWidth: 25, targetWidth: 25, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_services', value: 1.2, sourceWidth: 8, targetWidth: 5, sourceOrder: 2 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.1, sourceWidth: 67, targetWidth: 67, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.8, sourceWidth: 133, targetWidth: 130, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 1.7, sourceWidth: 36, targetWidth: 36, sourceOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.9, sourceWidth: 17, targetWidth: 17, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 7, targetWidth: 7, sourceOrder: 2 },
      { source: 'operating_profit', target: 'other_non_operating', value: 0.1, sourceWidth: 7, targetWidth: 4, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'sm', value: 2.2, sourceWidth: 48, targetWidth: 48, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 2.2, sourceWidth: 47, targetWidth: 47, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 18, targetWidth: 18, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization', value: 0.9, sourceWidth: 8, targetWidth: 8, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.2, sourceWidth: 9, targetWidth: 3, sourceOrder: 4 },
    ],
    i18n: {
      preservedAnnotationText: ['ORACLE'],
      zh: {
        name: 'Oracle · 2023 财年第二季度',
        meta: {
          title: 'Oracle 2023 财年第二季度利润表',
          period: '2023 财年第二季度',
          periodNote: '截至 2022 年 11 月',
          titleTextLength: 2123,
        },
        nodes: {
          cloud_services_license_support: { label: '云服务与许可证支持', notes: ['同比 +14%'] },
          cloud_license_on_premise: { label: '云许可证与本地部署许可证', notes: ['同比 +16%'] },
          hardware: { label: '硬件', notes: ['同比 +11%'] },
          services: { label: '服务', notes: ['同比 +74%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 (7 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud: { label: '云', notes: ['毛利率 81%'] },
          cor_hardware: { label: '硬件', notes: ['毛利率 66%'] },
          cor_services: { label: '服务', notes: ['毛利率 15%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 25%', '同比 +33 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 14%', '同比 +26 个百分点'] },
          financial: { label: '财务费用' }, tax: { label: '税费' },
          other_non_operating: { label: '其他' }, sm: { label: '销售与市场' },
          rnd: { label: '研发' }, ga: { label: '一般及行政' },
          amortization: { label: '摊销' }, other_opex: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
