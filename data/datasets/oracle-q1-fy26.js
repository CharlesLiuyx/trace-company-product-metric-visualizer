/* Oracle — Q1 FY26 income statement ($B).
 * Reconstructed from input/processed/oracle-q1-fy26.png as a measured,
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
    <path fill="${ORACLE_RED}" fill-rule="evenodd" d="M78-29h137a88.5 88.5 0 0 1 0 177H78a88.5 88.5 0 0 1 0-177Zm6 32h125a54 54 0 0 1 0 108H84a54 54 0 0 1 0-108Z"/>
    <g fill="${ORACLE_RED}" transform="translate(44 176)" data-typography-role="brand">
      <text x="102" y="26" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="38" font-weight="700" letter-spacing="3" textLength="205" lengthAdjust="spacingAndGlyphs">ORACLE</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g fill="#c74634" font-family="Arial,Helvetica,sans-serif" data-typography-role="brand">
        <text x="168" y="664" font-size="38" font-weight="800" letter-spacing="1">ORACLE</text>
        <text x="168" y="700" font-size="38" font-weight="800" letter-spacing="1">CLOUD</text>
        <text x="168" y="738" font-size="30" font-weight="500">${zh ? '基础设施' : 'Infrastructure'}</text>
      </g>
      <g>
        <rect x="104" y="1235" width="241" height="99" rx="20" fill="${RPO_BRICK}"/>
        <text x="224.5" y="1278" text-anchor="middle" font-size="30" fill="#ffffff"><tspan font-weight="800">RPO</tspan><tspan font-weight="400"> $455B</tspan></text>
        <text x="224.5" y="1314" text-anchor="middle" font-size="25" font-weight="400" fill="#ffffff"
          textLength="194" lengthAdjust="spacingAndGlyphs">${zh ? '同比 +359%' : '+359% Y/Y'}</text>
      </g>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      cloud: '云', cloudApplications: ['云应用'], software: '软件', softwareSupport: ['软件支持'],
      softwareLicense: ['软件许可证'], hardware: '硬件', services: '服务', revenue: '收入',
      gross: '毛利润', cost: ['收入', '成本'], cloudSoftware: ['云与软件'], operating: '营业利润',
      expenses: ['运营', '费用'], net: '净利润', financial: '财务费用', tax: '税费', rnd: '研发',
      sm: '销售与市场', amortization: '摊销', ga: '一般及行政', other: '其他',
      yoy11: '同比 +11%', yoy55: '同比 +55%', yoy1: '同比 +1%', yoy12n: '同比 (12%)',
      yoy28: '同比 +28%', yoy1n: '同比 (1%)', yoy2: '同比 +2%', yoy7: '同比 +7%',
      yoy12: '同比 +12%', margin67: '利润率 67%', pp3: '同比 (3 个百分点)',
      margin29: '利润率 29%', pp1: '同比 (1 个百分点)', margin20: '利润率 20%',
      pp2: '同比 (2 个百分点)', gm72: '毛利率 72%', gm79: '毛利率 79%', gm19: '毛利率 19%',
    } : {
      cloud: 'Cloud', cloudApplications: ['Cloud', 'applications'], software: 'Software',
      softwareSupport: ['Software', 'Support'], softwareLicense: ['Software', 'License'],
      hardware: 'Hardware', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], cloudSoftware: ['Cloud &', 'Software'], operating: 'Operating profit',
      expenses: ['Operating', 'expenses'], net: 'Net profit', financial: 'Financial', tax: 'Tax',
      rnd: 'R&D', sm: 'S&M', amortization: 'Amortization', ga: 'G&A', other: 'Other',
      yoy11: '+11% Y/Y', yoy55: '+55% Y/Y', yoy1: '+1% Y/Y', yoy12n: '(12%) Y/Y',
      yoy28: '+28% Y/Y', yoy1n: '(1%) Y/Y', yoy2: '+2% Y/Y', yoy7: '+7% Y/Y',
      yoy12: '+12% Y/Y', margin67: '67% margin', pp3: '(3pp) Y/Y',
      margin29: '29% margin', pp1: '(1pp) Y/Y', margin20: '20% margin',
      pp2: '(2pp) Y/Y', gm72: '72% gross margin', gm79: '79% gross margin', gm19: '19% gross margin',
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
      cloud_applications: { blocks: [valueNote(474, 321, t.yoy11), sideName(391, zh ? 436 : 412, t.cloudApplications)] },
      oci: { blocks: [valueNote(474, 555, t.yoy55)] },
      software_support: { blocks: [valueNote(474, 775, t.yoy1), sideName(359, zh ? 900 : 875, t.softwareSupport)] },
      software_license: { blocks: [valueNote(474, 1012, t.yoy12n), sideName(359, zh ? 1087 : 1062, t.softwareLicense)] },
      cloud: { blocks: [{ x: 848, top: 365, anchor: 'middle', lineGap: 9, lines: [line(t.cloud, 40, 800), line('$value', 40, 400), line(t.yoy28, 28, 400, NOTE)] }] },
      software: { blocks: [{ x: 848, top: 752, anchor: 'middle', lineGap: 9, lines: [line(t.software, 40, 800), line('$value', 40, 400), line(t.yoy1n, 28, 400, NOTE)] }] },
      hardware: { blocks: [sideName(790, 1143, t.hardware), valueNote(848, 1071, t.yoy2)] },
      services: { blocks: [sideName(790, 1284, t.services), valueNote(848, 1205, t.yoy7)] },
      revenue: { blocks: [{ x: 1222, top: 498, anchor: 'middle', lineGap: 9, lines: [line(t.revenue, 42, 800), line('$value', 40, 400), line(t.yoy12, 28, 400, NOTE)] }] },
      gross_profit: { blocks: [{ x: 1596, top: 364, anchor: 'middle', lineGap: 9, lines: [line(t.gross, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin67, 28, 400, NOTE), line(t.pp3, 28, 400, NOTE)] }] },
      cost_of_revenue: { blocks: [{ x: 1595, top: 1203, anchor: 'middle', lineGap: 8, lines: [...t.cost.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)] }] },
      cor_cloud_software: { blocks: [{ x: 1873, top: zh ? 1094 : 1074, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 8, lines: zh
        ? [line('云与软件 ($3.6B)', 30, 700, RED_LABEL), line(t.gm72, 27, 400, NOTE)]
        : [line('Cloud &', 30, 700, RED_LABEL), line('Software ($3.6B)', 30, 700, RED_LABEL), line(t.gm72, 27, 400, NOTE)] }] },
      cor_hardware: { blocks: [{ x: 1875, top: 1206, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 8, lines: [line(`${t.hardware} ($0.2B)`, 30, 700, RED_LABEL), line(t.gm79, 27, 400, NOTE)] }] },
      cor_services: { blocks: [{ x: 1885, top: 1279, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 8, lines: [line(`${t.services} ($1.1B)`, 30, 700, RED_LABEL), line(t.gm19, 27, 400, NOTE)] }] },
      operating_profit: { blocks: [{ x: 1969, top: 277, anchor: 'middle', lineGap: 9, lines: [line(t.operating, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin29, 28, 400, NOTE), line(t.pp1, 28, 400, NOTE)] }] },
      operating_expenses: { blocks: [{ x: 1970, top: 884, anchor: 'middle', lineGap: 8, lines: [...t.expenses.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)] }] },
      net_profit: { blocks: [{ x: 2404, top: 339, anchor: 'start', lineGap: 9, lines: [line(t.net, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin20, 28, 400, NOTE), line(t.pp2, 28, 400, NOTE)] }] },
      financial: { blocks: [{ x: 2428, top: 560, anchor: 'start', lineGap: 8, lines: [line(t.financial, 34, 800, RED_LABEL), line('($0.9B)', 34, 400, RED_LABEL)] }] },
      tax: { blocks: [{ x: 2443, top: 665, anchor: 'start', lineGap: 8, lines: [line(t.tax, 34, 800, RED_LABEL), line('($0.5B)', 34, 400, RED_LABEL)] }] },
      rnd: { blocks: [{ x: 2412, top: 805, anchor: 'start', lines: [line(`${t.rnd} ($2.5B)`, 34, 800, RED_LABEL)] }] },
      sm: { blocks: [{ x: 2406, top: zh ? 918 : 943, anchor: 'start', lineGap: 8, lines: zh
        ? [line(t.sm, 34, 800, RED_LABEL), line('($2.1B)', 34, 400, RED_LABEL)]
        : [line(`${t.sm} ($2.1B)`, 34, 800, RED_LABEL)] }] },
      amortization: { blocks: [{ x: 2398, top: 1061, anchor: 'start', lineGap: 8, lines: [line(t.amortization, 34, 800, RED_LABEL), line('($0.4B)', 34, 400, RED_LABEL)] }] },
      ga: { blocks: [{ x: 2408, top: zh ? 1170 : 1196, anchor: 'start', lineGap: 8, lines: zh
        ? [line(t.ga, 34, 800, RED_LABEL), line('($0.4B)', 34, 400, RED_LABEL)]
        : [line(`${t.ga} ($0.4B)`, 34, 800, RED_LABEL)] }] },
      other: { blocks: [{ x: 2402, top: 1314, anchor: 'start', lines: [line(`${t.other} ($0.4B)`, 34, 800, RED_LABEL)] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q1-fy26',
    name: 'Oracle · Q1 FY26',
    company: 'Oracle',
    meta: {
      company: 'Oracle', title: 'Oracle Q1 FY26 Income Statement', period: 'Q1 FY26',
      periodNote: 'Ending Aug. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/oracle-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2123,
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
      scale: 24,
      nodes: {
        cloud_applications: { x: 439, y: 415, width: 71, height: 90 },
        oci: { x: 439, y: 649, width: 71, height: 79 },
        software_support: { x: 439, y: 865, width: 71, height: 117 },
        software_license: { x: 439, y: 1102, width: 71, height: 16 },
        cloud: { x: 813, y: 510, width: 70, height: 170 },
        software: { x: 813, y: 895, width: 70, height: 135 },
        hardware: { x: 813, y: 1160, width: 70, height: 14 },
        services: { x: 813, y: 1293, width: 70, height: 30 },
        revenue: { x: 1187, y: 641, width: 70, height: 358 },
        gross_profit: { x: 1560, y: 545, width: 71, height: 239 },
        cost_of_revenue: { x: 1560, y: 1067, width: 71, height: 116 },
        cor_cloud_software: { x: 1757, y: 1085, width: 70, height: 86 },
        cor_hardware: { x: 1757, y: 1239, width: 70, height: 3 },
        cor_services: { x: 1754, y: 1301, width: 70, height: 25 },
        operating_profit: { x: 1934, y: 458, width: 71, height: 100 },
        operating_expenses: { x: 1934, y: 724, width: 71, height: 136 },
        net_profit: { x: 2307, y: 356, width: 71, height: 69 },
        financial: { x: 2307, y: 591, width: 71, height: 19 },
        tax: { x: 2307, y: 699, width: 71, height: 10 },
        rnd: { x: 2307, y: 794, width: 71, height: 59 },
        sm: { x: 2307, y: 934, width: 71, height: 48 },
        amortization: { x: 2307, y: 1090, width: 71, height: 8 },
        ga: { x: 2307, y: 1212, width: 71, height: 9 },
        other: { x: 2307, y: 1332, width: 71, height: 7 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'cloud_applications', col: 0, order: 0, type: 'source', label: ['Cloud', 'applications'], value: 3.8, valueText: '$3.8B', notes: ['+11% Y/Y'] },
      { id: 'oci', col: 0, order: 1, type: 'source', label: 'Oracle Cloud Infrastructure', value: 3.3, valueText: '$3.3B', notes: ['+55% Y/Y'] },
      { id: 'software_support', col: 0, order: 2, type: 'source', label: ['Software', 'Support'], value: 5.0, valueText: '$5.0B', notes: ['+1% Y/Y'] },
      { id: 'software_license', col: 0, order: 3, type: 'source', label: ['Software', 'License'], value: 0.8, valueText: '$0.8B', notes: ['(12%) Y/Y'] },
      { id: 'cloud', col: 1, order: 0, type: 'source', label: 'Cloud', value: 7.2, valueText: '$7.2B', notes: ['+28% Y/Y'] },
      { id: 'software', col: 1, order: 1, type: 'source', label: 'Software', value: 5.7, valueText: '$5.7B', notes: ['(1%) Y/Y'] },
      { id: 'hardware', col: 1, order: 2, type: 'source', label: 'Hardware', value: 0.7, valueText: '$0.7B', notes: ['+2% Y/Y'] },
      { id: 'services', col: 1, order: 3, type: 'source', label: 'Services', value: 1.3, valueText: '$1.3B', notes: ['+7% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 14.9, valueText: '$14.9B', notes: ['+12% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 10.0, valueText: '$10.0B', notes: ['67% margin', '(3pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.9, valueText: '($4.9B)' },
      { id: 'cor_cloud_software', col: 4, order: 2, type: 'cost', label: ['Cloud &', 'Software'], value: 3.6, valueText: '($3.6B)', notes: ['72% gross margin'] },
      { id: 'cor_hardware', col: 4, order: 3, type: 'cost', label: 'Hardware', value: 0.2, valueText: '($0.2B)', notes: ['79% gross margin'] },
      { id: 'cor_services', col: 4, order: 4, type: 'cost', label: 'Services', value: 1.1, valueText: '($1.1B)', notes: ['19% gross margin'] },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.3, valueText: '$4.3B', notes: ['29% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.8, valueText: '($5.8B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.9, valueText: '$2.9B', notes: ['20% margin', '(2pp) Y/Y'] },
      { id: 'financial', col: 5, order: 1, type: 'cost', label: 'Financial', value: 0.9, valueText: '($0.9B)' },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.5, valueText: '($0.5B)' },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 2.5, valueText: '($2.5B)' },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 2.1, valueText: '($2.1B)' },
      { id: 'amortization', col: 5, order: 5, type: 'cost', label: 'Amortization', value: 0.4, valueText: '($0.4B)' },
      { id: 'ga', col: 5, order: 6, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)' },
      { id: 'other', col: 5, order: 7, type: 'cost', label: 'Other', value: 0.4, valueText: '($0.4B)' },
    ],
    links: [
      { source: 'cloud_applications', target: 'cloud', value: 3.8, sourceWidth: 90, targetWidth: 90, targetOrder: 0 },
      { source: 'oci', target: 'cloud', value: 3.3, sourceWidth: 79, targetWidth: 79, targetOrder: 1 },
      { source: 'software_support', target: 'software', value: 5.0, sourceWidth: 117, targetWidth: 117, targetOrder: 0 },
      { source: 'software_license', target: 'software', value: 0.8, sourceWidth: 16, targetWidth: 18, targetOrder: 1 },
      { source: 'cloud', target: 'revenue', value: 7.2, sourceWidth: 170, targetWidth: 173, targetOrder: 0 },
      { source: 'software', target: 'revenue', value: 5.7, sourceWidth: 135, targetWidth: 137, targetOrder: 1 },
      { source: 'hardware', target: 'revenue', value: 0.7, sourceWidth: 14, targetWidth: 17, targetOrder: 2 },
      { source: 'services', target: 'revenue', value: 1.3, sourceWidth: 30, targetWidth: 31, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 10.0, sourceWidth: 241, targetWidth: 239, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.9, sourceWidth: 117, targetWidth: 116, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_cloud_software', value: 3.6, sourceWidth: 85, targetWidth: 86, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_hardware', value: 0.2, sourceWidth: 2, targetWidth: 3, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_services', value: 1.1, sourceWidth: 28, targetWidth: 25, sourceOrder: 2 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.3, sourceWidth: 100, targetWidth: 100, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.8, sourceWidth: 139, targetWidth: 136, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 2.9, sourceWidth: 67, targetWidth: 69, sourceOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.9, sourceWidth: 19, targetWidth: 19, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 14, targetWidth: 10, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 2.5, sourceWidth: 58, targetWidth: 59, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.1, sourceWidth: 48, targetWidth: 48, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'amortization', value: 0.4, sourceWidth: 8, targetWidth: 8, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 9, targetWidth: 9, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other', value: 0.4, sourceWidth: 12, targetWidth: 7, sourceOrder: 4 },
    ],
    i18n: {
      preservedAnnotationText: ['ORACLE', 'RPO'],
      zh: {
        name: 'Oracle · 2026 财年第一季度',
        meta: { title: 'Oracle 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2025 年 8 月', titleTextLength: 2123 },
        nodes: {
          cloud_applications: { label: '云应用', notes: ['同比 +11%'] },
          oci: { label: 'Oracle 云基础设施', notes: ['同比 +55%'] },
          software_support: { label: '软件支持', notes: ['同比 +1%'] },
          software_license: { label: '软件许可证', notes: ['同比 (12%)'] },
          cloud: { label: '云', notes: ['同比 +28%'] }, software: { label: '软件', notes: ['同比 (1%)'] },
          hardware: { label: '硬件', notes: ['同比 +2%'] }, services: { label: '服务', notes: ['同比 +7%'] },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 67%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud_software: { label: '云与软件', notes: ['毛利率 72%'] },
          cor_hardware: { label: '硬件', notes: ['毛利率 79%'] },
          cor_services: { label: '服务', notes: ['毛利率 19%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 29%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 20%', '同比 (2 个百分点)'] },
          financial: { label: '财务费用' }, tax: { label: '税费' }, rnd: { label: '研发' }, sm: { label: '销售与市场' },
          amortization: { label: '摊销' }, ga: { label: '一般及行政' }, other: { label: '其他' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();
