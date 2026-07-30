/* Oracle — Q2 FY26 income statement ($B).
 * Reconstructed from input/processed/oracle-q2-fy26.png as a measured,
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
  const RPO_BRICK = '#c64633';

  const ORACLE_LOGO = `
    <path fill="${ORACLE_RED}" fill-rule="evenodd" d="M78 8h137a70 70 0 0 1 0 140H78a70 70 0 0 1 0-140Zm6 34h125a36 36 0 0 1 0 72H84a36 36 0 0 1 0-72Z"/>
    <g fill="${ORACLE_RED}" transform="translate(44 176)" data-typography-role="brand">
      <text x="102" y="26" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="38" font-weight="700" letter-spacing="3" textLength="205" lengthAdjust="spacingAndGlyphs">ORACLE</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g fill="#c74634" font-family="Arial,Helvetica,sans-serif" data-typography-role="brand">
        <text x="163" y="674" font-size="38" font-weight="800" letter-spacing="1">ORACLE</text>
        <text x="163" y="710" font-size="38" font-weight="800" letter-spacing="1">CLOUD</text>
        <text x="163" y="748" font-size="30" font-weight="500">${zh ? '基础设施' : 'Infrastructure'}</text>
      </g>
      <g>
        <rect x="184" y="1226" width="242" height="99" rx="20" fill="${RPO_BRICK}"/>
        <text x="305" y="1269" text-anchor="middle" font-size="30" fill="#ffffff"><tspan font-weight="800">RPO</tspan><tspan font-weight="400"> $523B</tspan></text>
        <text x="305" y="1305" text-anchor="middle" font-size="25" font-weight="400" fill="#ffffff">${zh ? '同比 +438%' : '+438% Y/Y'}</text>
      </g>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      cloud: '云', cloudApplications: ['云应用'], software: '软件', softwareSupport: ['软件支持'],
      softwareLicense: ['软件许可证'], hardware: '硬件', services: '服务', revenue: '收入',
      gross: '毛利润', cost: ['收入', '成本'], cloudSoftware: ['云与软件'], operating: '营业利润',
      expenses: ['运营', '费用'], net: '净利润', otherIncome: '其他收入', tax: '税费',
      rnd: '研发', sm: '销售与市场', amortization: '摊销', ga: '一般及行政', other: '其他',
      yoy11: '同比 +11%', yoy68: '同比 +68%', yoy1: '同比 +1%', yoy21: '同比 (21%)',
      yoy34: '同比 +34%', yoy3: '同比 (3%)', yoy7: '同比 +7%', yoy14: '同比 +14%',
      margin67: '利润率 67%', pp4: '同比 (4 个百分点)', margin29: '利润率 29%',
      pp1: '同比 (1 个百分点)', margin38: '利润率 38%', pp16: '同比 +16 个百分点',
      gm71: '毛利率 71%', gm72: '毛利率 72%', gm18: '毛利率 18%',
    } : {
      cloud: 'Cloud', cloudApplications: ['Cloud', 'applications'], software: 'Software',
      softwareSupport: ['Software', 'Support'], softwareLicense: ['Software', 'License'],
      hardware: 'Hardware', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], cloudSoftware: ['Cloud &', 'Software'], operating: 'Operating profit',
      expenses: ['Operating', 'expenses'], net: 'Net profit', otherIncome: 'Other', tax: 'Tax',
      rnd: 'R&D', sm: 'S&M', amortization: 'Amortization', ga: 'G&A', other: 'Other',
      yoy11: '+11% Y/Y', yoy68: '+68% Y/Y', yoy1: '+1% Y/Y', yoy21: '(21%) Y/Y',
      yoy34: '+34% Y/Y', yoy3: '(3%) Y/Y', yoy7: '+7% Y/Y', yoy14: '+14% Y/Y',
      margin67: '67% margin', pp4: '(4pp) Y/Y', margin29: '29% margin',
      pp1: '(1pp) Y/Y', margin38: '38% margin', pp16: '+16pp Y/Y',
      gm71: '71% gross margin', gm72: '72% gross margin', gm18: '18% gross margin',
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
      cloud_applications: { blocks: [valueNote(474, 335, t.yoy11), sideName(391, zh ? 451 : 427, t.cloudApplications)] },
      oci: { blocks: [valueNote(474, 561, t.yoy68)] },
      software_support: { blocks: [valueNote(474, 777, t.yoy1), sideName(359, zh ? 903 : 877, t.softwareSupport)] },
      software_license: { blocks: [valueNote(474, 1005, t.yoy21), sideName(359, zh ? 1093 : 1065, t.softwareLicense)] },
      cloud: { blocks: [{ x: 848, top: 380, anchor: 'middle', lineGap: 9, lines: [line(t.cloud, 40, 800), line('$value', 40, 400), line(t.yoy34, 28, 400, NOTE)] }] },
      software: { blocks: [{ x: 850, top: 778, anchor: 'middle', lineGap: 9, lines: [line(t.software, 40, 800), line('$value', 40, 400), line(t.yoy3, 28, 400, NOTE)] }] },
      hardware: { blocks: [sideName(790, 1191, t.hardware), valueNote(848, 1113, t.yoy7)] },
      services: { blocks: [sideName(790, 1350, t.services), valueNote(848, 1256, t.yoy7)] },
      revenue: { blocks: [{ x: 1222, top: 488, anchor: 'middle', lineGap: 9, lines: [line(t.revenue, 42, 800), line('$value', 40, 400), line(t.yoy14, 28, 400, NOTE)] }] },
      gross_profit: { blocks: [{ x: 1596, top: 352, anchor: 'middle', lineGap: 9, lines: [line(t.gross, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin67, 28, 400, NOTE), line(t.pp4, 28, 400, NOTE)] }] },
      cost_of_revenue: { blocks: [{ x: 1595.5, top: 1155, anchor: 'middle', lineGap: 8, lines: [...t.cost.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)] }] },
      cor_cloud_software: { blocks: [{ x: 1874, top: zh ? 1076 : 1063, anchor: 'start', lineGap: 8, lines: zh
        ? [line('云与软件 ($4.0B)', 30, 700, RED_LABEL), line(t.gm71, 27, 400, NOTE)]
        : [line('Cloud &', 30, 700, RED_LABEL), line('Software ($4.0B)', 30, 700, RED_LABEL), line(t.gm71, 27, 400, NOTE)] }] },
      cor_hardware: { blocks: [{ x: 1874, top: 1194, anchor: 'start', lineGap: 8, lines: [line(`${t.hardware} ($0.2B)`, 30, 700, RED_LABEL), line(t.gm72, 27, 400, NOTE)] }] },
      cor_services: { blocks: [{ x: 1886, top: 1283, anchor: 'start', lineGap: 8, lines: [line(`${t.services} ($1.2B)`, 30, 700, RED_LABEL), line(t.gm18, 27, 400, NOTE)] }] },
      operating_profit: { blocks: [{ x: 1969, top: 234, anchor: 'middle', lineGap: 9, lines: [line(t.operating, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin29, 28, 400, NOTE), line(t.pp1, 28, 400, NOTE)] }] },
      operating_expenses: { blocks: [{ x: 1970, top: 858, anchor: 'middle', lineGap: 8, lines: [...t.expenses.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)] }] },
      other_income: { blocks: [{ x: 2252, top: 529, anchor: 'middle', lineGap: 8, lines: [line(t.otherIncome, 34, 800, GREEN_LABEL), line('$value', 34, 400, GREEN_LABEL)] }] },
      net_profit: { blocks: [{ x: 2404, top: 335, anchor: 'start', lineGap: 9, lines: [line(t.net, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin38, 28, 400, NOTE), line(t.pp16, 28, 400, NOTE)] }] },
      tax: { blocks: [{ x: 2443, top: 612, anchor: 'start', lineGap: 8, lines: [line(t.tax, 34, 800, RED_LABEL), line('($0.2B)', 34, 400, RED_LABEL)] }] },
      rnd: { blocks: [{ x: 2407, top: 765, anchor: 'start', lines: [line(`${t.rnd} ($2.6B)`, 34, 800, RED_LABEL)] }] },
      sm: { blocks: [{ x: 2406, top: zh ? 903 : 922, anchor: 'start', lineGap: 8, lines: zh
        ? [line(t.sm, 34, 800, RED_LABEL), line('($2.1B)', 34, 400, RED_LABEL)]
        : [line(`${t.sm} ($2.1B)`, 34, 800, RED_LABEL)] }] },
      amortization: { blocks: [{ x: 2398, top: 1043, anchor: 'start', lineGap: 8, lines: [line(t.amortization, 34, 800, RED_LABEL), line('($0.4B)', 34, 400, RED_LABEL)] }] },
      ga: { blocks: [{ x: 2405, top: zh ? 1188 : 1205, anchor: 'start', lineGap: 8, lines: zh
        ? [line(t.ga, 34, 800, RED_LABEL), line('($0.4B)', 34, 400, RED_LABEL)]
        : [line(`${t.ga} ($0.4B)`, 34, 800, RED_LABEL)] }] },
      other: { blocks: [{ x: 2402, top: 1350, anchor: 'start', lines: [line(`${t.other} ($0.4B)`, 34, 800, RED_LABEL)] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q2-fy26',
    name: 'Oracle · Q2 FY26',
    company: 'Oracle',
    meta: {
      company: 'Oracle', title: 'Oracle Q2 FY26 Income Statement', period: 'Q2 FY26',
      periodNote: 'Ending Nov. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/oracle-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2135,
      periodX: 224, periodY: 294, periodNoteY: 342,
      logoWidth: 293, logoHeight: 212, logoY: 270, logoViewBox: '0 0 293 212', logoSvg: ORACLE_LOGO,
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
      scale: 20,
      nodes: {
        cloud_applications: { x: 439, y: 434, width: 71, height: 83 },
        oci: { x: 439, y: 659, width: 71, height: 89 },
        software_support: { x: 439, y: 874, width: 71, height: 107 },
        software_license: { x: 439, y: 1104, width: 71, height: 19 },
        cloud: { x: 813, y: 530, width: 70, height: 176 },
        software: { x: 815, y: 930, width: 70, height: 129 },
        hardware: { x: 813, y: 1209, width: 70, height: 16 },
        services: { x: 813, y: 1363, width: 70, height: 30 },
        revenue: { x: 1187, y: 635, width: 70, height: 356 },
        gross_profit: { x: 1560, y: 530, width: 71, height: 236 },
        cost_of_revenue: { x: 1560, y: 1019, width: 71, height: 119 },
        cor_cloud_software: { x: 1762, y: 1060, width: 70, height: 87 },
        cor_hardware: { x: 1764, y: 1214, width: 70, height: 24 },
        cor_services: { x: 1769, y: 1303, width: 70, height: 2 },
        operating_profit: { x: 1934, y: 417, width: 71, height: 104 },
        operating_expenses: { x: 1934, y: 710, width: 71, height: 130 },
        other_income: { x: 2192, y: 482, width: 70, height: 34 },
        net_profit: { x: 2307, y: 318, width: 71, height: 134 },
        tax: { x: 2307, y: 646, width: 71, height: 3 },
        rnd: { x: 2307, y: 751, width: 71, height: 55 },
        sm: { x: 2307, y: 914, width: 71, height: 45 },
        amortization: { x: 2307, y: 1080, width: 71, height: 8 },
        ga: { x: 2307, y: 1222, width: 71, height: 7 },
        other: { x: 2307, y: 1368, width: 71, height: 6 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'cloud_applications', col: 0, order: 0, type: 'source', label: ['Cloud', 'applications'], value: 3.9, valueText: '$3.9B', notes: ['+11% Y/Y'] },
      { id: 'oci', col: 0, order: 1, type: 'source', label: 'Oracle Cloud Infrastructure', value: 4.1, valueText: '$4.1B', notes: ['+68% Y/Y'] },
      { id: 'software_support', col: 0, order: 2, type: 'source', label: ['Software', 'Support'], value: 4.9, valueText: '$4.9B', notes: ['+1% Y/Y'] },
      { id: 'software_license', col: 0, order: 3, type: 'source', label: ['Software', 'License'], value: 0.9, valueText: '$0.9B', notes: ['(21%) Y/Y'] },
      { id: 'cloud', col: 1, order: 0, type: 'source', label: 'Cloud', value: 8.0, valueText: '$8.0B', notes: ['+34% Y/Y'] },
      { id: 'software', col: 1, order: 1, type: 'source', label: 'Software', value: 5.9, valueText: '$5.9B', notes: ['(3%) Y/Y'] },
      { id: 'hardware', col: 1, order: 2, type: 'source', label: 'Hardware', value: 0.8, valueText: '$0.8B', notes: ['+7% Y/Y'] },
      { id: 'services', col: 1, order: 3, type: 'source', label: 'Services', value: 1.4, valueText: '$1.4B', notes: ['+7% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 16.1, valueText: '$16.1B', notes: ['+14% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 10.7, valueText: '$10.7B', notes: ['67% margin', '(4pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.4, valueText: '($5.4B)' },
      { id: 'cor_cloud_software', col: 4, order: 2, type: 'cost', label: ['Cloud &', 'Software'], value: 4.0, valueText: '($4.0B)', notes: ['71% gross margin'] },
      { id: 'cor_hardware', col: 4, order: 3, type: 'cost', label: 'Hardware', value: 0.2, valueText: '($0.2B)', notes: ['72% gross margin'] },
      { id: 'cor_services', col: 4, order: 4, type: 'cost', label: 'Services', value: 1.2, valueText: '($1.2B)', notes: ['18% gross margin'] },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.7, valueText: '$4.7B', notes: ['29% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.0, valueText: '($6.0B)' },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 1.6, valueText: '$1.6B' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 6.1, valueText: '$6.1B', notes: ['38% margin', '+16pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.2, valueText: '($0.2B)' },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 2.6, valueText: '($2.6B)' },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 2.1, valueText: '($2.1B)' },
      { id: 'amortization', col: 6, order: 4, type: 'cost', label: 'Amortization', value: 0.4, valueText: '($0.4B)' },
      { id: 'ga', col: 6, order: 5, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)' },
      { id: 'other', col: 6, order: 6, type: 'cost', label: 'Other', value: 0.4, valueText: '($0.4B)' },
    ],
    links: [
      { source: 'cloud_applications', target: 'cloud', value: 3.9, sourceWidth: 83, targetWidth: 83, targetOrder: 0 },
      { source: 'oci', target: 'cloud', value: 4.1, sourceWidth: 89, targetWidth: 93, targetOrder: 1 },
      { source: 'software_support', target: 'software', value: 4.9, sourceWidth: 107, targetWidth: 107, targetOrder: 0 },
      { source: 'software_license', target: 'software', value: 0.9, sourceWidth: 19, targetWidth: 22, targetOrder: 1 },
      { source: 'cloud', target: 'revenue', value: 8.0, sourceWidth: 176, targetWidth: 176, targetOrder: 0 },
      { source: 'software', target: 'revenue', value: 5.9, sourceWidth: 129, targetWidth: 129, targetOrder: 1 },
      { source: 'hardware', target: 'revenue', value: 0.8, sourceWidth: 16, targetWidth: 16, targetOrder: 2 },
      { source: 'services', target: 'revenue', value: 1.4, sourceWidth: 30, targetWidth: 35, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 10.7, sourceWidth: 236, targetWidth: 236, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.4, sourceWidth: 119, targetWidth: 119, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_cloud_software', value: 4.0, sourceWidth: 87, targetWidth: 87, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_hardware', value: 0.2, sourceWidth: 24, targetWidth: 24, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_services', value: 1.2, sourceWidth: 8, targetWidth: 2, sourceOrder: 2 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.7, sourceWidth: 104, targetWidth: 104, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.0, sourceWidth: 132, targetWidth: 130, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 4.5, sourceWidth: 101, targetWidth: 100, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 3, targetWidth: 3, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 1.6, sourceWidth: 34, targetWidth: 34, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 2.6, sourceWidth: 55, targetWidth: 55, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.1, sourceWidth: 45, targetWidth: 45, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'amortization', value: 0.4, sourceWidth: 8, targetWidth: 8, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 7, targetWidth: 7, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other', value: 0.4, sourceWidth: 15, targetWidth: 6, sourceOrder: 4 },
    ],
    i18n: {
      preservedAnnotationText: ['ORACLE', 'RPO'],
      zh: {
        name: 'Oracle · 2026 财年第二季度',
        meta: { title: 'Oracle 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2025 年 11 月', titleTextLength: 2135 },
        nodes: {
          cloud_applications: { label: '云应用', notes: ['同比 +11%'] },
          oci: { label: 'Oracle 云基础设施', notes: ['同比 +68%'] },
          software_support: { label: '软件支持', notes: ['同比 +1%'] },
          software_license: { label: '软件许可证', notes: ['同比 (21%)'] },
          cloud: { label: '云', notes: ['同比 +34%'] }, software: { label: '软件', notes: ['同比 (3%)'] },
          hardware: { label: '硬件', notes: ['同比 +7%'] }, services: { label: '服务', notes: ['同比 +7%'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 67%', '同比 (4 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud_software: { label: '云与软件', notes: ['毛利率 71%'] },
          cor_hardware: { label: '硬件', notes: ['毛利率 72%'] },
          cor_services: { label: '服务', notes: ['毛利率 18%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 29%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他收入' },
          net_profit: { label: '净利润', notes: ['利润率 38%', '同比 +16 个百分点'] },
          tax: { label: '税费' }, rnd: { label: '研发' }, sm: { label: '销售与市场' },
          amortization: { label: '摊销' }, ga: { label: '一般及行政' }, other: { label: '其他' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();
