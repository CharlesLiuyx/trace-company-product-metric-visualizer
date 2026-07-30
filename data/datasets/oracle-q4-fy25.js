/* Oracle — Q4 FY25 income statement ($B).
 * Reconstructed from input/processed/oracle-q4-fy25.png as a measured,
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
    <rect x="3" y="0" width="277" height="175" rx="87.5" fill="${ORACLE_RED}"/>
    <rect x="36" y="31" width="211" height="113" rx="56.5" fill="${BG}"/>
    <text x="146.5" y="241" text-anchor="middle" font-family="Arial,Helvetica,sans-serif"
      font-size="51" font-weight="700" letter-spacing="3" textLength="293"
      lengthAdjust="spacingAndGlyphs" fill="${ORACLE_RED}" data-typography-role="brand">ORACLE</text>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g fill="#c74634" font-family="Arial,Helvetica,sans-serif" data-typography-role="brand">
        <text x="153" y="429" font-size="30" font-weight="800">ORACLE</text>
        <text x="153" y="453" font-size="30" font-weight="800">CLOUD</text>
        <text x="153" y="480" font-size="24" font-weight="500">${zh ? '基础设施' : 'Infrastructure'}</text>
      </g>
      <g>
        <rect x="105" y="1236" width="240" height="98" rx="20" fill="${ORACLE_RED}"/>
        <text x="225" y="1282" text-anchor="middle" font-size="30" fill="#ffffff"><tspan font-weight="800">RPO</tspan><tspan font-weight="400"> $138B</tspan></text>
        <text x="225" y="1318" text-anchor="middle" font-size="25" font-weight="400" fill="#ffffff"
          textLength="144" lengthAdjust="spacingAndGlyphs">${zh ? '同比 +41%' : '+41% Y/Y'}</text>
      </g>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      cloudServices: ['云服务'],
      licenseSupport: ['许可证支持'],
      cloudSupport: ['云服务与', '许可证支持'],
      cloudLicense: ['云许可证与', '本地部署许可证'],
      hardware: '硬件', services: '服务', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], cloudCost: '云', operating: '营业利润',
      expenses: ['运营', '费用'], net: '净利润', financial: '财务费用',
      tax: '税费', rnd: '研发', sm: '销售与市场', amortization: '摊销',
      ga: '一般及行政', other: '其他',
      yoy27: '同比 +27%', yoy1: '同比 +1%', yoy14: '同比 +14%',
      yoy9: '同比 +9%', yoy11: '同比 +11%', yoyNeg2: '同比 (2%)', margin70: '利润率 70%',
      pp2: '同比 (2 个百分点)', margin32: '利润率 32%',
      pp1: '同比 (1 个百分点)', margin22: '利润率 22%',
      pp0: '同比 (0 个百分点)', gm76: '毛利率 76%',
      gm70: '毛利率 70%', gm15: '毛利率 15%',
    } : {
      cloudServices: ['Cloud services'],
      licenseSupport: ['License support'],
      cloudSupport: ['Cloud services', '& license support'],
      cloudLicense: ['Cloud license', '& on-premise', 'license'],
      hardware: 'Hardware', services: 'Services', revenue: 'Revenue',
      gross: 'Gross profit', cost: ['Cost of', 'revenue'], cloudCost: 'Cloud',
      operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      net: 'Net profit', financial: 'Financial', tax: 'Tax', rnd: 'R&D',
      sm: 'S&M', amortization: 'Amortization', ga: 'G&A', other: 'Other',
      yoy27: '+27% Y/Y', yoy1: '+1% Y/Y', yoy14: '+14% Y/Y',
      yoy9: '+9% Y/Y', yoy11: '+11% Y/Y', yoyNeg2: '(2%) Y/Y', margin70: '70% margin',
      pp2: '(2pp) Y/Y', margin32: '32% margin', pp1: '(1pp) Y/Y',
      margin22: '22% margin', pp0: '(0pp) Y/Y', gm76: '76% gross margin',
      gm70: '70% gross margin', gm15: '15% gross margin',
    };
    const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
    const valueNote = (x, top, note) => ({
      x, top, anchor: 'middle', lineGap: 9,
      lines: [line('$value', 40, 400), line(note, 28, 400, NOTE)],
    });
    const sideName = (x, top, values) => ({
      x, top, anchor: 'end', lineGap: 8,
      lines: (Array.isArray(values) ? values : [values]).map((text) => line(text, 40, 800)),
    });
    return {
      cloud_services: { blocks: [valueNote(441, 359, t.yoy27), sideName(359, 520, t.cloudServices)] },
      license_support: { blocks: [valueNote(441, 675, t.yoy1), sideName(374, zh ? 802 : 801, t.licenseSupport)] },
      cloud_services_license_support: { blocks: [{
        x: 814, top: 358, anchor: 'middle', lineGap: 9,
        lines: [...t.cloudSupport.map((text) => line(text, 40, 800)), line('$value', 40, 400), line(t.yoy14, 28, 400, NOTE)],
      }] },
      cloud_license_on_premise: { blocks: [sideName(740, zh ? 922 : 898, t.cloudLicense), valueNote(814, 854, t.yoy9)] },
      hardware: { blocks: [sideName(710, 1109, t.hardware), valueNote(814, 1018, t.yoy1)] },
      services: { blocks: [
        sideName(698, 1258, t.services),
        { x: 814, top: 1163, anchor: 'middle', lineGap: 9, lines: [line('$value', 40, 400), line(t.yoyNeg2, 28, 400, NOTE)] },
      ] },
      revenue: { blocks: [{
        x: 1188, top: 494, anchor: 'middle', lineGap: 9,
        lines: [line(t.revenue, 42, 800), line('$value', 40, 400), line(t.yoy11, 28, 400, NOTE)],
      }] },
      gross_profit: { blocks: [{
        x: 1562, top: 379, anchor: 'middle', lineGap: 9,
        lines: [line(t.gross, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin70, 28, 400, NOTE), line(t.pp2, 28, 400, NOTE)],
      }] },
      cost_of_revenue: { blocks: [{
        x: 1562, top: 1175, anchor: 'middle', lineGap: 8,
        lines: [...t.cost.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)],
      }] },
      cor_cloud: { blocks: [{
        x: 1857, top: 1099, anchor: 'start', lineGap: 8,
        lines: [line(`${t.cloudCost} ($3.3B)`, 30, 700, RED_LABEL), line(t.gm76, 27, 400, NOTE)],
      }] },
      cor_hardware: { blocks: [{
        x: 1840, top: 1205, anchor: 'start', lineGap: 8,
        lines: [line(`${t.hardware} ($0.3B)`, 30, 700, RED_LABEL), line(t.gm70, 27, 400, NOTE)],
      }] },
      cor_services: { blocks: [{
        x: 1852, top: 1305, anchor: 'start', lineGap: 8,
        lines: [line(`${t.services} ($1.1B)`, 30, 700, RED_LABEL), line(t.gm15, 27, 400, NOTE)],
      }] },
      operating_profit: { blocks: [{
        x: 1936, top: 290, anchor: 'middle', lineGap: 9,
        lines: [line(t.operating, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin32, 28, 400, NOTE), line(t.pp1, 28, 400, NOTE)],
      }] },
      operating_expenses: { blocks: [{
        x: 1936, top: 908, anchor: 'middle', lineGap: 8,
        lines: [...t.expenses.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)],
      }] },
      net_profit: { blocks: [{
        x: 2371, top: 339, anchor: 'start', lineGap: 9,
        lines: [line(t.net, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin22, 28, 400, NOTE), line(t.pp0, 28, 400, NOTE)],
      }] },
      financial: { blocks: [{ x: 2389, top: 566, anchor: 'start', lineGap: 8, lines: [line(t.financial, 34, 800, RED_LABEL), line('($1.0B)', 34, 400, RED_LABEL)] }] },
      tax: { blocks: [{ x: 2415, top: 700, anchor: 'start', lineGap: 8, lines: [line(t.tax, 34, 800, RED_LABEL), line('($0.7B)', 34, 400, RED_LABEL)] }] },
      rnd: { blocks: [{ x: 2379, top: 827, anchor: 'start', lines: [line(`${t.rnd} ($2.7B)`, 34, 800, RED_LABEL)] }] },
      sm: { blocks: [{ x: 2373, top: zh ? 944 : 974, anchor: 'start', lineGap: 8, lines: zh
        ? [line(t.sm, 34, 800, RED_LABEL), line('($2.3B)', 34, 400, RED_LABEL)]
        : [line(`${t.sm} ($2.3B)`, 34, 800, RED_LABEL)] }] },
      amortization: { blocks: [{ x: 2348, top: 1086, anchor: 'start', lineGap: 8, lines: [line(t.amortization, 34, 800, RED_LABEL), line('($0.5B)', 34, 400, RED_LABEL)] }] },
      ga: { blocks: [{ x: 2375, top: zh ? 1190 : 1221, anchor: 'start', lineGap: 8, lines: zh
        ? [line(t.ga, 34, 800, RED_LABEL), line('($0.5B)', 34, 400, RED_LABEL)]
        : [line(`${t.ga} ($0.5B)`, 34, 800, RED_LABEL)] }] },
      other: { blocks: [{ x: 2369, top: 1323, anchor: 'start', lines: [line(`${t.other} ($0.1B)`, 34, 800, RED_LABEL)] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q4-fy25',
    name: 'Oracle · Q4 FY25',
    company: 'Oracle',
    meta: {
      company: 'Oracle', title: 'Oracle Q4 FY25 Income Statement', period: 'Q4 FY25',
      periodNote: 'Ending May 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/oracle-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2123,
      periodX: 224, periodY: 1164, periodNoteY: 1207,
      logoWidth: 293, logoHeight: 242, logoY: 234, logoViewBox: '0 0 293 212', logoSvg: ORACLE_LOGO,
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
      linkOpacity: 1, type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 20.82,
      nodes: {
        cloud_services: { x: 405, y: 474, width: 71, height: 140 },
        license_support: { x: 405, y: 774, width: 71, height: 102 },
        cloud_services_license_support: { x: 779, y: 560, width: 70, height: 244 },
        cloud_license_on_premise: { x: 779, y: 954, width: 70, height: 40 },
        hardware: { x: 779, y: 1122, width: 70, height: 16 },
        services: { x: 779, y: 1265, width: 70, height: 27 },
        revenue: { x: 1153, y: 645, width: 70, height: 331 },
        gross_profit: { x: 1526, y: 561, width: 71, height: 233 },
        cost_of_revenue: { x: 1526, y: 1063, width: 71, height: 97 },
        cor_cloud: { x: 1735, y: 1099, width: 70, height: 68 },
        cor_hardware: { x: 1738, y: 1235, width: 70, height: 3 },
        cor_services: { x: 1740, y: 1309, width: 70, height: 23 },
        operating_profit: { x: 1900, y: 472, width: 71, height: 105 },
        operating_expenses: { x: 1900, y: 768, width: 71, height: 125 },
        net_profit: { x: 2273, y: 362, width: 71, height: 70 },
        financial: { x: 2273, y: 600, width: 71, height: 17 },
        tax: { x: 2273, y: 726, width: 71, height: 13 },
        rnd: { x: 2273, y: 820, width: 71, height: 54 },
        sm: { x: 2273, y: 969, width: 71, height: 46 },
        amortization: { x: 2273, y: 1118, width: 71, height: 9 },
        ga: { x: 2273, y: 1239, width: 71, height: 8 },
        other: { x: 2273, y: 1343, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'cloud_services', col: 0, order: 0, type: 'source', label: 'Cloud services', value: 6.7, valueText: '$6.7B', notes: ['+27% Y/Y'] },
      { id: 'license_support', col: 0, order: 1, type: 'source', label: 'License support', value: 5.0, valueText: '$5.0B', notes: ['+1% Y/Y'] },
      { id: 'cloud_services_license_support', col: 1, order: 0, type: 'source', label: ['Cloud services', '& license support'], value: 11.7, valueText: '$11.7B', notes: ['+14% Y/Y'] },
      { id: 'cloud_license_on_premise', col: 1, order: 1, type: 'source', label: ['Cloud license', '& on-premise', 'license'], value: 2.0, valueText: '$2.0B', notes: ['+9% Y/Y'] },
      { id: 'hardware', col: 1, order: 2, type: 'source', label: 'Hardware', value: 0.9, valueText: '$0.9B', notes: ['+1% Y/Y'] },
      { id: 'services', col: 1, order: 3, type: 'source', label: 'Services', value: 1.3, valueText: '$1.3B', notes: ['(2%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 15.9, valueText: '$15.9B', notes: ['+11% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 11.2, valueText: '$11.2B', notes: ['70% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.7, valueText: '($4.7B)' },
      { id: 'cor_cloud', col: 4, order: 2, type: 'cost', label: 'Cloud', value: 3.3, valueText: '($3.3B)', notes: ['76% gross margin'] },
      { id: 'cor_hardware', col: 4, order: 3, type: 'cost', label: 'Hardware', value: 0.3, valueText: '($0.3B)', notes: ['70% gross margin'] },
      { id: 'cor_services', col: 4, order: 4, type: 'cost', label: 'Services', value: 1.1, valueText: '($1.1B)', notes: ['15% gross margin'] },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 5.1, valueText: '$5.1B', notes: ['32% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.1, valueText: '($6.1B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.4, valueText: '$3.4B', notes: ['22% margin', '(0pp) Y/Y'] },
      { id: 'financial', col: 5, order: 1, type: 'cost', label: 'Financial', value: 1.0, valueText: '($1.0B)' },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.7, valueText: '($0.7B)' },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 2.7, valueText: '($2.7B)' },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 2.3, valueText: '($2.3B)' },
      { id: 'amortization', col: 5, order: 5, type: 'cost', label: 'Amortization', value: 0.5, valueText: '($0.5B)' },
      { id: 'ga', col: 5, order: 6, type: 'cost', label: 'G&A', value: 0.5, valueText: '($0.5B)' },
      { id: 'other', col: 5, order: 7, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
    ],
    links: [
      { source: 'cloud_services', target: 'cloud_services_license_support', value: 6.7, sourceWidth: 140, targetWidth: 140, targetOrder: 0 },
      { source: 'license_support', target: 'cloud_services_license_support', value: 5.0, sourceWidth: 102, targetWidth: 104, targetOrder: 1 },
      { source: 'cloud_services_license_support', target: 'revenue', value: 11.7, sourceWidth: 244, targetWidth: 244, targetOrder: 0 },
      { source: 'cloud_license_on_premise', target: 'revenue', value: 2.0, sourceWidth: 40, targetWidth: 40, targetOrder: 1 },
      { source: 'hardware', target: 'revenue', value: 0.9, sourceWidth: 16, targetWidth: 16, targetOrder: 2 },
      { source: 'services', target: 'revenue', value: 1.3, sourceWidth: 27, targetWidth: 31, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 11.2, sourceWidth: 233, targetWidth: 233, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.7, sourceWidth: 97, targetWidth: 97, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_cloud', value: 3.3, sourceWidth: 68, targetWidth: 68, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_hardware', value: 0.3, sourceWidth: 3, targetWidth: 3, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_services', value: 1.1, sourceWidth: 25, targetWidth: 23, sourceOrder: 2 },
      { source: 'gross_profit', target: 'operating_profit', value: 5.1, sourceWidth: 105, targetWidth: 105, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.1, sourceWidth: 128, targetWidth: 125, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 3.4, sourceWidth: 70, targetWidth: 70, sourceOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 1.0, sourceWidth: 17, targetWidth: 17, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 18, targetWidth: 13, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 2.7, sourceWidth: 54, targetWidth: 54, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.3, sourceWidth: 46, targetWidth: 46, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'amortization', value: 0.5, sourceWidth: 9, targetWidth: 9, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.5, sourceWidth: 8, targetWidth: 8, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other', value: 0.1, sourceWidth: 7, targetWidth: 2, sourceOrder: 4 },
    ],
    i18n: {
      preservedAnnotationText: ['ORACLE', 'RPO'],
      zh: {
        name: 'Oracle · 2025 财年第四季度',
        meta: { title: 'Oracle 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 5 月', titleTextLength: 2123 },
        nodes: {
          cloud_services: { label: '云服务', notes: ['同比 +27%'] },
          license_support: { label: '许可证支持', notes: ['同比 +1%'] },
          cloud_services_license_support: { label: '云服务与许可证支持', notes: ['同比 +14%'] },
          cloud_license_on_premise: { label: '云许可证与本地部署许可证', notes: ['同比 +9%'] },
          hardware: { label: '硬件', notes: ['同比 +1%'] }, services: { label: '服务', notes: ['同比 (2%)'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 70%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud: { label: '云', notes: ['毛利率 76%'] }, cor_hardware: { label: '硬件', notes: ['毛利率 70%'] },
          cor_services: { label: '服务', notes: ['毛利率 15%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 22%', '同比 (0 个百分点)'] },
          financial: { label: '财务费用' }, tax: { label: '税费' }, rnd: { label: '研发' },
          sm: { label: '销售与市场' }, amortization: { label: '摊销' }, ga: { label: '一般及行政' }, other: { label: '其他' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();
