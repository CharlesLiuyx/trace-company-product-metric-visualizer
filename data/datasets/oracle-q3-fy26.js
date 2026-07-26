/* Oracle — Q3 FY26 income statement ($B).
 * Reconstructed from input/processed/oracle-q3-fy26.png as a measured,
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
        <text x="163" y="450" font-size="38" font-weight="800" letter-spacing="1">ORACLE</text>
        <text x="163" y="486" font-size="38" font-weight="800" letter-spacing="1">CLOUD</text>
        <text x="163" y="524" font-size="30" font-weight="500">${zh ? '基础设施' : 'Infrastructure'}</text>
      </g>
      <g>
        <rect x="184" y="1227" width="242" height="99" rx="20" fill="${RPO_BRICK}"/>
        <text x="305" y="1270" text-anchor="middle" font-size="30" fill="#ffffff"><tspan font-weight="800">RPO</tspan><tspan font-weight="400"> $553B</tspan></text>
        <text x="305" y="1306" text-anchor="middle" font-size="25" font-weight="400" fill="#ffffff"
          textLength="222" lengthAdjust="spacingAndGlyphs">${zh ? '同比 +325% &amp; 环比 +6%' : '+325% Y/Y &amp; +6% Q/Q'}</text>
      </g>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      cloud: '云', cloudApplications: ['云应用'], software: '软件', softwareSupport: ['软件支持'],
      softwareLicense: ['软件许可证'], hardware: '硬件', services: '服务', revenue: '收入',
      gross: '毛利润', cost: ['收入', '成本'], cloudSoftware: ['云与软件'], operating: '营业利润',
      expenses: ['运营', '费用'], net: '净利润', interest: '利息', tax: '税费', rnd: '研发',
      sm: '销售与市场', amortization: '摊销', ga: '一般及行政', other: '其他',
      yoy84: '同比 +84%', yoy13: '同比 +13%', yoy4: '同比 +4%', yoy2: '同比 +2%',
      yoy44: '同比 +44%', yoy3: '同比 +3%', yoy12: '同比 +12%', yoy22: '同比 +22%',
      margin65: '利润率 65%', pp6: '同比 (6 个百分点)', margin32: '利润率 32%',
      pp1: '同比 +1 个百分点', margin22: '利润率 22%', gm68: '毛利率 68%',
      gm74: '毛利率 74%', gm21: '毛利率 21%',
    } : {
      cloud: 'Cloud', cloudApplications: ['Cloud', 'applications'], software: 'Software',
      softwareSupport: ['Software', 'Support'], softwareLicense: ['Software', 'License'],
      hardware: 'Hardware', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], cloudSoftware: ['Cloud &', 'Software'], operating: 'Operating profit',
      expenses: ['Operating', 'expenses'], net: 'Net profit', interest: 'Interest', tax: 'Tax',
      rnd: 'R&D', sm: 'S&M', amortization: 'Amortization', ga: 'G&A', other: 'Other',
      yoy84: '+84% Y/Y', yoy13: '+13% Y/Y', yoy4: '+4% Y/Y', yoy2: '+2% Y/Y',
      yoy44: '+44% Y/Y', yoy3: '+3% Y/Y', yoy12: '+12% Y/Y', yoy22: '+22% Y/Y',
      margin65: '65% margin', pp6: '(6pp) Y/Y', margin32: '32% margin', pp1: '+1pp Y/Y',
      margin22: '22% margin', gm68: '68% gross margin', gm74: '74% gross margin',
      gm21: '21% gross margin',
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
      oci: { blocks: [valueNote(474, 328, t.yoy84)] },
      cloud_applications: { blocks: [valueNote(474, 551, t.yoy13), sideName(391, zh ? 667 : 646, t.cloudApplications)] },
      software_support: { blocks: [valueNote(474, 745, t.yoy4), sideName(359, zh ? 866 : 842, t.softwareSupport)] },
      software_license: { blocks: [valueNote(474, 982, t.yoy2), sideName(359, zh ? 1067 : 1043, t.softwareLicense)] },
      cloud: { blocks: [{ x: 848, top: 372, anchor: 'middle', lineGap: 9, lines: [line(t.cloud, 40, 800), line('$value', 40, 400), line(t.yoy44, 28, 400, NOTE)] }] },
      software: { blocks: [{ x: 848, top: 741, anchor: 'middle', lineGap: 9, lines: [line(t.software, 40, 800), line('$value', 40, 400), line(t.yoy3, 28, 400, NOTE)] }] },
      hardware: { blocks: [sideName(790, 1152, t.hardware), valueNote(848, 1070, t.yoy2)] },
      services: { blocks: [sideName(790, 1309, t.services), valueNote(848, 1219, t.yoy12)] },
      revenue: { blocks: [{ x: 1222, top: 491, anchor: 'middle', lineGap: 9, lines: [line(t.revenue, 42, 800), line('$value', 40, 400), line(t.yoy22, 28, 400, NOTE)] }] },
      gross_profit: { blocks: [{ x: 1596, top: 336, anchor: 'middle', lineGap: 9, lines: [line(t.gross, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin65, 28, 400, NOTE), line(t.pp6, 28, 400, NOTE)] }] },
      cost_of_revenue: { blocks: [{ x: 1589.5, top: 1127, anchor: 'middle', lineGap: 8, lines: [...t.cost.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)] }] },
      cor_cloud_software: { blocks: [{ x: 1874, top: zh ? 1023 : 1004, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 8, lines: zh
        ? [line('云与软件 ($4.8B)', 30, 700, RED_LABEL), line(t.gm68, 27, 400, NOTE)]
        : [line('Cloud &', 30, 700, RED_LABEL), line('Software ($4.8B)', 30, 700, RED_LABEL), line(t.gm68, 27, 400, NOTE)] }] },
      cor_hardware: { blocks: [{ x: 1874, top: 1173, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 8, lines: [line(`${t.hardware} ($0.2B)`, 30, 700, RED_LABEL), line(t.gm74, 27, 400, NOTE)] }] },
      cor_services: { blocks: [{ x: 1886, top: 1287, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 8, lines: [line(`${t.services} ($1.1B)`, 30, 700, RED_LABEL), line(t.gm21, 27, 400, NOTE)] }] },
      operating_profit: { blocks: [{ x: 1969, top: 232, anchor: 'middle', lineGap: 9, lines: [line(t.operating, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin32, 28, 400, NOTE), line(t.pp1, 28, 400, NOTE)] }] },
      operating_expenses: { blocks: [{ x: 1970, top: 844, anchor: 'middle', lineGap: 8, lines: [...t.expenses.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)] }] },
      net_profit: { blocks: [{ x: 2404, top: 308, anchor: 'start', lineGap: 9, lines: [line(t.net, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.margin22, 28, 400, NOTE), line(t.pp1, 28, 400, NOTE)] }] },
      interest: { blocks: [{ x: 2425, top: 512, anchor: 'start', lineGap: 8, lines: [line(t.interest, 34, 800, RED_LABEL), line('($1.0B)', 34, 400, RED_LABEL)] }] },
      tax: { blocks: [{ x: 2443, top: 613, anchor: 'start', lineGap: 8, lines: [line(t.tax, 34, 800, RED_LABEL), line('($0.7B)', 34, 400, RED_LABEL)] }] },
      rnd: { blocks: [{ x: 2407, top: 781, anchor: 'start', lines: [line(`${t.rnd} ($2.6B)`, 34, 800, RED_LABEL)] }] },
      sm: { blocks: [{ x: 2406, top: zh ? 915 : 940, anchor: 'start', lineGap: 8, lines: zh
        ? [line(t.sm, 34, 800, RED_LABEL), line('($2.1B)', 34, 400, RED_LABEL)]
        : [line(`${t.sm} ($2.1B)`, 34, 800, RED_LABEL)] }] },
      amortization: { blocks: [{ x: 2398, top: 1045, anchor: 'start', lineGap: 8, lines: [line(t.amortization, 34, 800, RED_LABEL), line('($0.4B)', 34, 400, RED_LABEL)] }] },
      ga: { blocks: [{ x: 2405, top: zh ? 1160 : 1185, anchor: 'start', lineGap: 8, lines: zh
        ? [line(t.ga, 34, 800, RED_LABEL), line('($0.4B)', 34, 400, RED_LABEL)]
        : [line(`${t.ga} ($0.4B)`, 34, 800, RED_LABEL)] }] },
      other: { blocks: [{ x: 2402, top: 1289, anchor: 'start', lines: [line(`${t.other} ($0.2B)`, 34, 800, RED_LABEL)] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q3-fy26',
    name: 'Oracle · Q3 FY26',
    company: 'Oracle',
    meta: {
      company: 'Oracle', title: 'Oracle Q3 FY26 Income Statement', period: 'Q3 FY26',
      periodNote: 'Ending Feb. 2026', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/oracle-q3-fy26.png', width: 2667, height: 1500 },
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
      scale: 20,
      nodes: {
        oci: { x: 438, y: 425, width: 72, height: 100 },
        cloud_applications: { x: 438, y: 650, width: 72, height: 81 },
        software_support: { x: 438, y: 839, width: 72, height: 101 },
        software_license: { x: 438, y: 1080, width: 72, height: 22 },
        cloud: { x: 812, y: 521, width: 72, height: 181 },
        software: { x: 812, y: 893, width: 72, height: 124 },
        hardware: { x: 812, y: 1170, width: 72, height: 13 },
        services: { x: 812, y: 1316, width: 72, height: 28 },
        revenue: { x: 1186, y: 642, width: 71, height: 352 },
        gross_profit: { x: 1560, y: 518, width: 71, height: 227 },
        cost_of_revenue: { x: 1560, y: 986, width: 71, height: 124 },
        cor_cloud_software: { x: 1751, y: 1009, width: 71, height: 97 },
        cor_hardware: { x: 1753, y: 1197, width: 72, height: 22 },
        cor_services: { x: 1756, y: 1321, width: 71, height: 2 },
        operating_profit: { x: 1933, y: 414, width: 72, height: 111 },
        operating_expenses: { x: 1934, y: 716, width: 71, height: 114 },
        net_profit: { x: 2307, y: 319, width: 72, height: 75 },
        interest: { x: 2307, y: 552, width: 72, height: 20 },
        tax: { x: 2307, y: 650, width: 72, height: 13 },
        rnd: { x: 2307, y: 773, width: 72, height: 52 },
        sm: { x: 2307, y: 937, width: 72, height: 40 },
        amortization: { x: 2307, y: 1088, width: 72, height: 7 },
        ga: { x: 2307, y: 1199, width: 72, height: 6 },
        other: { x: 2307, y: 1312, width: 72, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'oci', col: 0, order: 0, type: 'source', label: 'Oracle Cloud Infrastructure', value: 4.9, valueText: '$4.9B', notes: ['+84% Y/Y'] },
      { id: 'cloud_applications', col: 0, order: 1, type: 'source', label: ['Cloud', 'applications'], value: 4.0, valueText: '$4.0B', notes: ['+13% Y/Y'] },
      { id: 'software_support', col: 0, order: 2, type: 'source', label: ['Software', 'Support'], value: 5.0, valueText: '$5.0B', notes: ['+4% Y/Y'] },
      { id: 'software_license', col: 0, order: 3, type: 'source', label: ['Software', 'License'], value: 1.1, valueText: '$1.1B', notes: ['+2% Y/Y'] },
      { id: 'cloud', col: 1, order: 0, type: 'source', label: 'Cloud', value: 8.9, valueText: '$8.9B', notes: ['+44% Y/Y'] },
      { id: 'software', col: 1, order: 1, type: 'source', label: 'Software', value: 6.1, valueText: '$6.1B', notes: ['+3% Y/Y'] },
      { id: 'hardware', col: 1, order: 2, type: 'source', label: 'Hardware', value: 0.7, valueText: '$0.7B', notes: ['+2% Y/Y'] },
      { id: 'services', col: 1, order: 3, type: 'source', label: 'Services', value: 1.4, valueText: '$1.4B', notes: ['+12% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 17.2, valueText: '$17.2B', notes: ['+22% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 11.1, valueText: '$11.1B', notes: ['65% margin', '(6pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.1, valueText: '($6.1B)' },
      { id: 'cor_cloud_software', col: 4, order: 2, type: 'cost', label: ['Cloud &', 'Software'], value: 4.8, valueText: '($4.8B)', notes: ['68% gross margin'] },
      { id: 'cor_hardware', col: 4, order: 3, type: 'cost', label: 'Hardware', value: 0.2, valueText: '($0.2B)', notes: ['74% gross margin'] },
      { id: 'cor_services', col: 4, order: 4, type: 'cost', label: 'Services', value: 1.1, valueText: '($1.1B)', notes: ['21% gross margin'] },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 5.5, valueText: '$5.5B', notes: ['32% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.6, valueText: '($5.6B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.7, valueText: '$3.7B', notes: ['22% margin', '+1pp Y/Y'] },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 1.0, valueText: '($1.0B)' },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.7, valueText: '($0.7B)' },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 2.6, valueText: '($2.6B)' },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 2.1, valueText: '($2.1B)' },
      { id: 'amortization', col: 5, order: 5, type: 'cost', label: 'Amortization', value: 0.4, valueText: '($0.4B)' },
      { id: 'ga', col: 5, order: 6, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)' },
      { id: 'other', col: 5, order: 7, type: 'cost', label: 'Other', value: 0.2, valueText: '($0.2B)' },
    ],
    links: [
      { source: 'oci', target: 'cloud', value: 4.9, sourceWidth: 100, targetWidth: 100, targetOrder: 0 },
      { source: 'cloud_applications', target: 'cloud', value: 4.0, sourceWidth: 81, targetWidth: 81, targetOrder: 1 },
      { source: 'software_support', target: 'software', value: 5.0, sourceWidth: 101, targetWidth: 101, targetOrder: 0 },
      { source: 'software_license', target: 'software', value: 1.1, sourceWidth: 22, targetWidth: 22, targetOrder: 1 },
      { source: 'cloud', target: 'revenue', value: 8.9, sourceWidth: 181, targetWidth: 181, targetOrder: 0 },
      { source: 'software', target: 'revenue', value: 6.1, sourceWidth: 124, targetWidth: 124, targetOrder: 1 },
      { source: 'hardware', target: 'revenue', value: 0.7, sourceWidth: 13, targetWidth: 13, targetOrder: 2 },
      { source: 'services', target: 'revenue', value: 1.4, sourceWidth: 28, targetWidth: 34, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 11.1, sourceWidth: 227, targetWidth: 227, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.1, sourceWidth: 124, targetWidth: 124, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_cloud_software', value: 4.8, sourceWidth: 97, targetWidth: 97, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_hardware', value: 0.2, sourceWidth: 22, targetWidth: 22, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_services', value: 1.1, sourceWidth: 5, targetWidth: 2, sourceOrder: 2 },
      { source: 'gross_profit', target: 'operating_profit', value: 5.5, sourceWidth: 111, targetWidth: 111, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.6, sourceWidth: 116, targetWidth: 114, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 3.7, sourceWidth: 75, targetWidth: 75, sourceOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 1.0, sourceWidth: 20, targetWidth: 20, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 16, targetWidth: 13, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 2.6, sourceWidth: 52, targetWidth: 52, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.1, sourceWidth: 40, targetWidth: 40, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'amortization', value: 0.4, sourceWidth: 7, targetWidth: 7, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 6, targetWidth: 6, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other', value: 0.2, sourceWidth: 8, targetWidth: 2, sourceOrder: 4 },
    ],
    i18n: {
      preservedAnnotationText: ['ORACLE', 'RPO'],
      zh: {
        name: 'Oracle · 2026 财年第三季度',
        meta: { title: 'Oracle 2026 财年第三季度利润表', period: '2026 财年第三季度', periodNote: '截至 2026 年 2 月', titleTextLength: 2123 },
        nodes: {
          oci: { label: 'Oracle 云基础设施', notes: ['同比 +84%'] },
          cloud_applications: { label: '云应用', notes: ['同比 +13%'] },
          software_support: { label: '软件支持', notes: ['同比 +4%'] },
          software_license: { label: '软件许可证', notes: ['同比 +2%'] },
          cloud: { label: '云', notes: ['同比 +44%'] }, software: { label: '软件', notes: ['同比 +3%'] },
          hardware: { label: '硬件', notes: ['同比 +2%'] }, services: { label: '服务', notes: ['同比 +12%'] },
          revenue: { label: '收入', notes: ['同比 +22%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 65%', '同比 (6 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud_software: { label: '云与软件', notes: ['毛利率 68%'] },
          cor_hardware: { label: '硬件', notes: ['毛利率 74%'] },
          cor_services: { label: '服务', notes: ['毛利率 21%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 22%', '同比 +1 个百分点'] },
          interest: { label: '利息' }, tax: { label: '税费' }, rnd: { label: '研发' }, sm: { label: '销售与市场' },
          amortization: { label: '摊销' }, ga: { label: '一般及行政' }, other: { label: '其他' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();
