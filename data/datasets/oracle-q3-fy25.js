/* Oracle — Q3 FY25 income statement ($B), reconstructed from the measured
 * 2667×1500 Source as a fixed-layout d3-sankey. */
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

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g fill="#c74634" font-family="Arial,Helvetica,sans-serif" data-typography-role="brand">
        <text x="151" y="408" font-size="29" font-weight="800" letter-spacing="1">ORACLE</text>
        <text x="151" y="432" font-size="29" font-weight="800" letter-spacing="1">CLOUD</text>
        <text x="151" y="458" font-size="23" font-weight="500">${zh ? '基础设施' : 'Infrastructure'}</text>
      </g>
      <g>
        <rect x="105" y="1236" width="240" height="98" rx="20" fill="${ORACLE_RED}"/>
        <text x="225" y="1281" text-anchor="middle" font-size="28" fill="#ffffff"><tspan font-weight="800">RPO</tspan><tspan font-weight="400"> $130B</tspan></text>
        <text x="225" y="1316" text-anchor="middle" font-size="23" font-weight="400" fill="#ffffff"
          textLength="214" lengthAdjust="spacingAndGlyphs">${zh ? '同比 +63%（汇率中性）' : '+63% Y/Y fx neutral'}</text>
      </g>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      cloudServices: '云服务',
      licenseSupport: '许可证支持',
      cloudSupport: ['云服务及', '许可证支持'],
      cloudLicense: ['云许可证及', '本地部署许可证'],
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
      rnd: '研发',
      sm: '销售与市场',
      amortization: '摊销',
      ga: '一般及行政',
      other: '其他',
      yoy23: '同比 +23%',
      yoy2: '同比 (2%)',
      yoy10: '同比 +10%',
      yoy10Down: '同比 (10%)',
      yoy7: '同比 (7%)',
      yoy1: '同比 (1%)',
      yoy6: '同比 +6%',
      margin70: '利润率 70%',
      pp1: '同比 (1 个百分点)',
      margin31: '利润率 31%',
      pp3: '同比 +3 个百分点',
      margin21: '利润率 21%',
      gm76: '毛利率 76%',
      gm72: '毛利率 72%',
      gm14: '毛利率 14%',
    } : {
      cloudServices: 'Cloud services',
      licenseSupport: 'License support',
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
      rnd: 'R&D',
      sm: 'S&M',
      amortization: 'Amortization',
      ga: 'G&A',
      other: 'Other',
      yoy23: '+23% Y/Y',
      yoy2: '(2%) Y/Y',
      yoy10: '+10% Y/Y',
      yoy10Down: '(10%) Y/Y',
      yoy7: '(7%) Y/Y',
      yoy1: '(1%) Y/Y',
      yoy6: '+6% Y/Y',
      margin70: '70% margin',
      pp1: '(1pp) Y/Y',
      margin31: '31% margin',
      pp3: '+3pp Y/Y',
      margin21: '21% margin',
      gm76: '76% gross margin',
      gm72: '72% gross margin',
      gm14: '14% gross margin',
    };
    const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
    const valueNote = (x, top, note) => ({
      x,
      top,
      anchor: 'middle',
      lineGap: 9,
      lines: [line('$value', 40, 400), line(note, 28, 400, NOTE)],
    });
    const sideName = (x, top, values) => ({
      x,
      top,
      anchor: 'end',
      lineGap: 8,
      lines: (Array.isArray(values) ? values : [values]).map((text) => line(text, 40, 800)),
    });
    return {
      cloud_services: {
        blocks: [sideName(361, 486, t.cloudServices), valueNote(440, 332, t.yoy23)],
      },
      license_support: {
        blocks: [sideName(377, zh ? 807 : 812, t.licenseSupport), valueNote(440, 670, t.yoy2)],
      },
      cloud_services_license_support: {
        blocks: [{
          x: 816,
          top: 338,
          anchor: 'middle',
          lineGap: 8,
          lines: [
            ...t.cloudSupport.map((text) => line(text, 40, 800)),
            line('$value', 40, 400),
            line(t.yoy10, 28, 400, NOTE),
          ],
        }],
      },
      cloud_license_on_premise_license: {
        blocks: [
          sideName(742, zh ? 957 : 933, t.cloudLicense),
          valueNote(815, 895, t.yoy10Down),
        ],
      },
      hardware: {
        blocks: [sideName(710, 1133, t.hardware), valueNote(815, 1037, t.yoy7)],
      },
      services: {
        blocks: [sideName(710, 1277, t.services), valueNote(815, 1190, t.yoy1)],
      },
      revenue: {
        blocks: [{
          x: 1188,
          top: 492,
          anchor: 'middle',
          lineGap: 9,
          lines: [line(t.revenue, 42, 800), line('$value', 40, 400), line(t.yoy6, 28, 400, NOTE)],
        }],
      },
      gross_profit: {
        blocks: [{
          x: 1566,
          top: 349,
          anchor: 'middle',
          lineGap: 9,
          lines: [
            line(t.gross, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin70, 28, 400, NOTE),
            line(t.pp1, 28, 400, NOTE),
          ],
        }],
      },
      cost_of_revenue: {
        blocks: [{
          x: 1557.5,
          top: 1137,
          anchor: 'middle',
          lineGap: 8,
          lines: [
            ...t.cost.map((text) => line(text, 40, 800, RED_LABEL)),
            line('$value', 38, 400, RED_LABEL),
          ],
        }],
      },
      cor_cloud: {
        blocks: [{
          x: 1857,
          top: 1082,
          anchor: 'start',
          semanticRole: 'centered-side-label',
          lineGap: 8,
          lines: [line(`${t.cloud} ($2.9B)`, 30, 700, RED_LABEL), line(t.gm76, 27, 400, NOTE)],
        }],
      },
      cor_hardware: {
        blocks: [{
          x: 1840,
          top: 1188,
          anchor: 'start',
          semanticRole: 'centered-side-label',
          lineGap: 8,
          lines: [line(`${t.hardware} ($0.2B)`, 30, 700, RED_LABEL), line(t.gm72, 27, 400, NOTE)],
        }],
      },
      cor_services: {
        blocks: [{
          x: 1853,
          top: 1282,
          anchor: 'start',
          semanticRole: 'top-aligned-side-label',
          lineGap: 8,
          lines: [line(`${t.services} ($1.1B)`, 30, 700, RED_LABEL), line(t.gm14, 27, 400, NOTE)],
        }],
      },
      operating_profit: {
        blocks: [{
          x: 1938,
          top: 246,
          anchor: 'middle',
          lineGap: 9,
          lines: [
            line(t.operating, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin31, 28, 400, NOTE),
            line(t.pp3, 28, 400, NOTE),
          ],
        }],
      },
      operating_expenses: {
        blocks: [{
          x: 1938,
          top: 903,
          anchor: 'middle',
          lineGap: 8,
          lines: [
            ...t.expenses.map((text) => line(text, 40, 800, RED_LABEL)),
            line('$value', 38, 400, RED_LABEL),
          ],
        }],
      },
      net_profit: {
        blocks: [{
          x: 2371,
          top: 289,
          anchor: 'start',
          lineGap: 9,
          lines: [
            line(t.net, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin21, 28, 400, NOTE),
            line(t.pp3, 28, 400, NOTE),
          ],
        }],
      },
      financial: {
        blocks: [{
          x: 2390,
          top: 505,
          anchor: 'start',
          lineGap: 8,
          lines: [line(t.financial, 34, 800, RED_LABEL), line('($0.9B)', 34, 400, RED_LABEL)],
        }],
      },
      tax: {
        blocks: [{
          x: 2408,
          top: 625,
          anchor: 'start',
          lineGap: 8,
          lines: [line(t.tax, 34, 800, RED_LABEL), line('($0.5B)', 34, 400, RED_LABEL)],
        }],
      },
      rnd: {
        blocks: [{
          x: 2376,
          top: 822,
          anchor: 'start',
          lines: [line(`${t.rnd} ($2.4B)`, 34, 800, RED_LABEL)],
        }],
      },
      sm: {
        blocks: [{
          x: 2373,
          top: 971,
          anchor: 'start',
          lines: [line(`${t.sm} ($2.1B)`, 34, 800, RED_LABEL)],
        }],
      },
      amortization: {
        blocks: [{
          x: 2364.5,
          top: 1081,
          anchor: 'start',
          lineGap: 8,
          lines: [
            line(t.amortization, 34, 800, RED_LABEL),
            line('($0.5B)', 34, 400, RED_LABEL),
          ],
        }],
      },
      ga: {
        blocks: [{
          x: 2374,
          top: 1205,
          anchor: 'start',
          lines: [line(`${t.ga} ($0.4B)`, 34, 800, RED_LABEL)],
        }],
      },
      other: {
        blocks: [{
          x: 2365,
          top: 1322,
          anchor: 'start',
          lines: [line(`${t.other} ($0.1B)`, 34, 800, RED_LABEL)],
        }],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q3-fy25',
    name: 'Oracle · Q3 FY25',
    company: 'Oracle',
    meta: {
      company: 'Oracle',
      title: 'Oracle Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Feb. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/oracle-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2135,
      periodX: 224,
      periodY: 1165,
      periodNoteY: 1207,
      logoWidth: 293,
      logoHeight: 212,
      logoY: 234,
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
    annotationsSvg: annotations(false),
    layout: {
      scale: 26.8,
      nodes: {
        cloud_services: { x: 405, y: 428, width: 71, height: 167 },
        license_support: { x: 405, y: 770, width: 71, height: 127 },
        cloud_services_license_support: { x: 781, y: 533, width: 70, height: 297 },
        cloud_license_on_premise_license: { x: 779, y: 995, width: 70, height: 29 },
        hardware: { x: 779, y: 1148, width: 70, height: 17 },
        services: { x: 779, y: 1289, width: 70, height: 32 },
        revenue: { x: 1153, y: 642, width: 70, height: 382 },
        gross_profit: { x: 1531, y: 530, width: 71, height: 267 },
        cost_of_revenue: { x: 1529, y: 1014, width: 70, height: 111 },
        cor_cloud: { x: 1765, y: 1079, width: 70, height: 76 },
        cor_hardware: { x: 1768, y: 1221, width: 70, height: 3 },
        cor_services: { x: 1768, y: 1281, width: 70, height: 28 },
        operating_profit: { x: 1903, y: 426, width: 70, height: 116 },
        operating_expenses: { x: 1903, y: 738, width: 70, height: 149 },
        net_profit: { x: 2273, y: 296, width: 71, height: 77 },
        financial: { x: 2273, y: 543, width: 71, height: 23 },
        tax: { x: 2273, y: 662, width: 71, height: 13 },
        rnd: { x: 2273, y: 812, width: 71, height: 64 },
        sm: { x: 2273, y: 964, width: 71, height: 55 },
        amortization: { x: 2273, y: 1111, width: 71, height: 13 },
        ga: { x: 2273, y: 1224, width: 71, height: 9 },
        other: { x: 2273, y: 1341, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'cloud_services', col: 0, order: 0, type: 'source', label: 'Cloud services', value: 6.2, valueText: '$6.2B', notes: ['+23% Y/Y'] },
      { id: 'license_support', col: 0, order: 1, type: 'source', label: 'License support', value: 4.8, valueText: '$4.8B', notes: ['(2%) Y/Y'] },
      { id: 'cloud_services_license_support', col: 1, order: 0, type: 'source', label: ['Cloud services', '& license support'], value: 11.0, valueText: '$11.0B', notes: ['+10% Y/Y'] },
      { id: 'cloud_license_on_premise_license', col: 1, order: 1, type: 'source', label: ['Cloud license', '& on-premise', 'license'], value: 1.1, valueText: '$1.1B', notes: ['(10%) Y/Y'] },
      { id: 'hardware', col: 1, order: 2, type: 'source', label: 'Hardware', value: 0.7, valueText: '$0.7B', notes: ['(7%) Y/Y'] },
      { id: 'services', col: 1, order: 3, type: 'source', label: 'Services', value: 1.3, valueText: '$1.3B', notes: ['(1%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 14.1, valueText: '$14.1B', notes: ['+6% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 9.9, valueText: '$9.9B', notes: ['70% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.2, valueText: '($4.2B)' },
      { id: 'cor_cloud', col: 4, order: 2, type: 'cost', label: 'Cloud', value: 2.9, valueText: '($2.9B)', notes: ['76% gross margin'] },
      { id: 'cor_hardware', col: 4, order: 3, type: 'cost', label: 'Hardware', value: 0.2, valueText: '($0.2B)', notes: ['72% gross margin'] },
      { id: 'cor_services', col: 4, order: 4, type: 'cost', label: 'Services', value: 1.1, valueText: '($1.1B)', notes: ['14% gross margin'] },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.4, valueText: '$4.4B', notes: ['31% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.6, valueText: '($5.6B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.9, valueText: '$2.9B', notes: ['21% margin', '+3pp Y/Y'] },
      { id: 'financial', col: 5, order: 1, type: 'cost', label: 'Financial', value: 0.9, valueText: '($0.9B)' },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.5, valueText: '($0.5B)' },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 2.4, valueText: '($2.4B)' },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 2.1, valueText: '($2.1B)' },
      { id: 'amortization', col: 5, order: 5, type: 'cost', label: 'Amortization', value: 0.5, valueText: '($0.5B)' },
      { id: 'ga', col: 5, order: 6, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)' },
      { id: 'other', col: 5, order: 7, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
    ],
    links: [
      { source: 'cloud_services', target: 'cloud_services_license_support', value: 6.2, sourceWidth: 167, targetWidth: 167, targetOrder: 0 },
      { source: 'license_support', target: 'cloud_services_license_support', value: 4.8, sourceWidth: 127, targetWidth: 130, targetOrder: 1 },
      { source: 'cloud_services_license_support', target: 'revenue', value: 11.0, sourceWidth: 297, targetWidth: 297, targetOrder: 0 },
      { source: 'cloud_license_on_premise_license', target: 'revenue', value: 1.1, sourceWidth: 29, targetWidth: 29, targetOrder: 1 },
      { source: 'hardware', target: 'revenue', value: 0.7, sourceWidth: 17, targetWidth: 17, targetOrder: 2 },
      { source: 'services', target: 'revenue', value: 1.3, sourceWidth: 32, targetWidth: 39, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 9.9, sourceWidth: 267, targetWidth: 267, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.2, sourceWidth: 115, targetWidth: 111, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_cloud', value: 2.9, sourceWidth: 76, targetWidth: 76, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_hardware', value: 0.2, sourceWidth: 3, targetWidth: 3, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_services', value: 1.1, sourceWidth: 32, targetWidth: 28, sourceOrder: 2 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.4, sourceWidth: 116, targetWidth: 116, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.6, sourceWidth: 151, targetWidth: 149, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 2.9, sourceWidth: 77, targetWidth: 77, sourceOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.9, sourceWidth: 23, targetWidth: 23, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 16, targetWidth: 13, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 2.4, sourceWidth: 64, targetWidth: 64, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.1, sourceWidth: 55, targetWidth: 55, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'amortization', value: 0.5, sourceWidth: 13, targetWidth: 13, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 9, targetWidth: 9, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other', value: 0.1, sourceWidth: 8, targetWidth: 2, sourceOrder: 4 },
    ],
    i18n: {
      preservedAnnotationText: ['ORACLE', 'RPO'],
      zh: {
        name: 'Oracle · 2025 财年第三季度',
        meta: {
          title: 'Oracle 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 2 月',
          titleTextLength: 2135,
        },
        nodes: {
          cloud_services: { label: '云服务', notes: ['同比 +23%'] },
          license_support: { label: '许可证支持', notes: ['同比 (2%)'] },
          cloud_services_license_support: { label: '云服务及许可证支持', notes: ['同比 +10%'] },
          cloud_license_on_premise_license: { label: '云许可证及本地部署许可证', notes: ['同比 (10%)'] },
          hardware: { label: '硬件', notes: ['同比 (7%)'] },
          services: { label: '服务', notes: ['同比 (1%)'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 70%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud: { label: '云', notes: ['毛利率 76%'] },
          cor_hardware: { label: '硬件', notes: ['毛利率 72%'] },
          cor_services: { label: '服务', notes: ['毛利率 14%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 21%', '同比 +3 个百分点'] },
          financial: { label: '财务费用' },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          amortization: { label: '摊销' },
          ga: { label: '一般及行政' },
          other: { label: '其他' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();
