/* Oracle · Q3 FY24 income statement ($B), measured from the Source PNG. */
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

  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 9, semanticRole) => ({
    x,
    top,
    anchor,
    lines,
    lineGap,
    ...(semanticRole ? { semanticRole } : {}),
  });

  const labels = (zh) => {
    const t = zh ? {
      cloudServicesSupport: ['云服务与', '许可证支持'],
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
      yoy12: '同比 +12%',
      yoy2: '同比 (2%)',
      yoy7: '同比 (7%)',
      yoy5: '同比 (5%)',
      yoyRevenue: '同比 +7%',
      margin71: '利润率 71%',
      pp1: '同比 (1 个百分点)',
      margin28: '利润率 28%',
      pp2: '同比 +2 个百分点',
      margin18: '利润率 18%',
      pp3: '同比 +3 个百分点',
      gm78: '毛利率 78%',
      gm71: '毛利率 71%',
      gm8: '毛利率 8%',
    } : {
      cloudServicesSupport: ['Cloud services', '& license support'],
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
      yoy12: '+12% Y/Y',
      yoy2: '(2%) Y/Y',
      yoy7: '(7%) Y/Y',
      yoy5: '(5%) Y/Y',
      yoyRevenue: '+7% Y/Y',
      margin71: '71% margin',
      pp1: '(1pp) Y/Y',
      margin28: '28% margin',
      pp2: '+2pp Y/Y',
      margin18: '18% margin',
      pp3: '+3pp Y/Y',
      gm78: '78% gross margin',
      gm71: '71% gross margin',
      gm8: '8% gross margin',
    };

    const valueNote = (x, top, note) =>
      block(x, top, 'middle', [line('$value', 40), line(note, 28, 400, NOTE)]);
    const sideName = (x, top, values) =>
      block(
        x,
        top,
        'end',
        (Array.isArray(values) ? values : [values]).map((text) => line(text, 40, 800)),
        8
      );
    const sideCost = (x, top, name, valueText, note) =>
      block(
        x,
        top,
        'start',
        [line(`${name} ${valueText}`, 30, 700, RED_LABEL), line(note, 27, 400, NOTE)],
        8
      );

    return {
      cloud_services_license_support: {
        blocks: [
          valueNote(425, 389, t.yoy12),
          sideName(366, zh ? 568 : 569, t.cloudServicesSupport),
        ],
      },
      cloud_license_on_premise_license: {
        blocks: [valueNote(425, 808, t.yoy2), sideName(337, zh ? 873 : 849, t.cloudLicense)],
      },
      hardware: {
        blocks: [valueNote(425, 990, t.yoy7), sideName(294, 1075, t.hardware)],
      },
      services: {
        blocks: [valueNote(425, 1169, t.yoy5), sideName(277, 1265, t.services)],
      },
      revenue: {
        blocks: [
          block(891, 516, 'middle', [
            line(t.revenue, 42, 800),
            line('$value', 40),
            line(t.yoyRevenue, 28, 400, NOTE),
          ]),
        ],
      },
      gross_profit: {
        blocks: [
          block(1363, 405, 'middle', [
            line(t.gross, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin71, 28, 400, NOTE),
            line(t.pp1, 28, 400, NOTE),
          ]),
        ],
      },
      cost_of_revenue: {
        blocks: [
          block(
            1359,
            1184,
            'middle',
            [...t.cost.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)],
            8
          ),
        ],
      },
      cor_cloud: {
        blocks: [sideCost(1602, zh ? 1072 : 1082, t.cloud, '($2.5B)', t.gm78)],
      },
      cor_hardware: {
        blocks: [sideCost(1588, 1193, t.hardware, '($0.2B)', t.gm71)],
      },
      cor_services: {
        blocks: [sideCost(1599, 1299, t.services, '($1.2B)', t.gm8)],
      },
      operating_profit: {
        blocks: [
          block(1861, 309, 'middle', [
            line(t.operating, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin28, 28, 400, NOTE),
            line(t.pp2, 28, 400, NOTE),
          ]),
        ],
      },
      operating_expenses: {
        blocks: [
          block(
            1856,
            934,
            'middle',
            [...t.expenses.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)],
            8
          ),
        ],
      },
      net_profit: {
        blocks: [
          block(2351, 365, 'start', [
            line(t.net, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin18, 28, 400, NOTE),
            line(t.pp3, 28, 400, NOTE),
          ]),
        ],
      },
      financial: {
        blocks: [
          block(2380, 592, 'start', [
            line(t.financial, 31, 800, RED_LABEL),
            line('($0.9B)', 31, 400, RED_LABEL),
          ], 8),
        ],
      },
      tax: {
        blocks: [
          block(2399, 699, 'start', [
            line(t.tax, 31, 800, RED_LABEL),
            line('($0.5B)', 31, 400, RED_LABEL),
          ], 8),
        ],
      },
      other_financial: {
        blocks: [
          block(2403, 793, 'start', [
            line(t.other, 31, 800, RED_LABEL),
            line('($9M)', 31, 400, RED_LABEL),
          ], 8),
        ],
      },
      rnd: {
        blocks: [block(2355, 938, 'start', [line(`${t.rnd} ($2.2B)`, 31, 800, RED_LABEL)])],
      },
      sm: {
        blocks: [block(2355, 1063, 'start', [line(`${t.sm} ($2.0B)`, 31, 800, RED_LABEL)])],
      },
      amortization: {
        blocks: [
          block(2351, 1154, 'start', [
            line(t.amortization, 31, 800, RED_LABEL),
            line('($0.7B)', 31, 400, RED_LABEL),
          ], 8),
        ],
      },
      ga: {
        blocks: [block(2360, 1252, 'start', [line(`${t.ga} ($0.4B)`, 31, 800, RED_LABEL)])],
      },
      other: {
        blocks: [block(2350, 1335, 'start', [line(`${t.other} ($0.2B)`, 31, 800, RED_LABEL)])],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q3-fy24',
    name: 'Oracle · Q3 FY24',
    company: 'Oracle',
    meta: {
      company: 'Oracle',
      title: 'Oracle Q3 FY24 Income Statement',
      period: 'Q3 FY24',
      periodNote: 'Ending Feb. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      referenceImage: {
        src: 'input/processed/oracle-q3-fy24.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2135,
      periodX: 201,
      periodY: 320,
      periodNoteY: 359,
      logoWidth: 293,
      logoHeight: 212,
      logoY: 247,
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
      linkTint: {
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 26.4,
      nodes: {
        cloud_services_license_support: { x: 389, y: 485, width: 71, height: 263 },
        cloud_license_on_premise_license: { x: 389, y: 906, width: 71, height: 31 },
        hardware: { x: 389, y: 1092, width: 71, height: 17 },
        services: { x: 389, y: 1270, width: 71, height: 33 },
        revenue: { x: 856, y: 663, width: 70, height: 351 },
        gross_profit: { x: 1328, y: 588, width: 71, height: 249 },
        cost_of_revenue: { x: 1330, y: 1063, width: 72, height: 101 },
        cor_cloud: { x: 1498, y: 1086, width: 70, height: 62 },
        cor_hardware: { x: 1503, y: 1221, width: 70, height: 30 },
        cor_services: { x: 1508, y: 1331, width: 70, height: 4 },
        operating_profit: { x: 1826, y: 493, width: 70, height: 97 },
        operating_expenses: { x: 1821, y: 768, width: 70, height: 148 },
        net_profit: { x: 2257, y: 385, width: 71, height: 63 },
        financial: { x: 2257, y: 623, width: 71, height: 20 },
        tax: { x: 2257, y: 742, width: 71, height: 10 },
        other_financial: { x: 2257, y: 832, width: 71, height: 4 },
        rnd: { x: 2257, y: 924, width: 71, height: 58 },
        sm: { x: 2257, y: 1052, width: 71, height: 52 },
        amortization: { x: 2257, y: 1181, width: 71, height: 17 },
        ga: { x: 2257, y: 1271, width: 71, height: 9 },
        other: { x: 2257, y: 1353, width: 71, height: 4 },
      },
      labels: labels(false),
    },
    nodes: [
      {
        id: 'cloud_services_license_support',
        col: 0,
        order: 0,
        type: 'source',
        label: ['Cloud services', '& license support'],
        value: 10.0,
        valueText: '$10.0B',
        notes: ['+12% Y/Y'],
      },
      {
        id: 'cloud_license_on_premise_license',
        col: 0,
        order: 1,
        type: 'source',
        label: ['Cloud license', '& on-premise', 'license'],
        value: 1.3,
        valueText: '$1.3B',
        notes: ['(2%) Y/Y'],
      },
      { id: 'hardware', col: 0, order: 2, type: 'source', label: 'Hardware', value: 0.8, valueText: '$0.8B', notes: ['(7%) Y/Y'] },
      { id: 'services', col: 0, order: 3, type: 'source', label: 'Services', value: 1.3, valueText: '$1.3B', notes: ['(5%) Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 13.3, valueText: '$13.3B', notes: ['+7% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 9.4, valueText: '$9.4B', notes: ['71% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.9, valueText: '($3.9B)' },
      { id: 'cor_cloud', col: 3, order: 2, type: 'cost', label: 'Cloud', value: 2.5, valueText: '($2.5B)', notes: ['78% gross margin'] },
      { id: 'cor_hardware', col: 3, order: 3, type: 'cost', label: 'Hardware', value: 0.2, valueText: '($0.2B)', notes: ['71% gross margin'] },
      { id: 'cor_services', col: 3, order: 4, type: 'cost', label: 'Services', value: 1.2, valueText: '($1.2B)', notes: ['8% gross margin'] },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.8, valueText: '$3.8B', notes: ['28% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.7, valueText: '($5.7B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.4, valueText: '$2.4B', notes: ['18% margin', '+3pp Y/Y'] },
      { id: 'financial', col: 5, order: 1, type: 'cost', label: 'Financial', value: 0.9, valueText: '($0.9B)' },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.5, valueText: '($0.5B)' },
      { id: 'other_financial', col: 5, order: 3, type: 'cost', label: 'Other', value: 0.009, valueText: '($9M)' },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 2.2, valueText: '($2.2B)' },
      { id: 'sm', col: 5, order: 5, type: 'cost', label: 'S&M', value: 2.0, valueText: '($2.0B)' },
      { id: 'amortization', col: 5, order: 6, type: 'cost', label: 'Amortization', value: 0.7, valueText: '($0.7B)' },
      { id: 'ga', col: 5, order: 7, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)' },
      { id: 'other', col: 5, order: 8, type: 'cost', label: 'Other', value: 0.2, valueText: '($0.2B)' },
    ],
    links: [
      { source: 'cloud_services_license_support', target: 'revenue', value: 10.0, sourceWidth: 263, targetWidth: 263, targetOrder: 0 },
      { source: 'cloud_license_on_premise_license', target: 'revenue', value: 1.3, sourceWidth: 31, targetWidth: 31, targetOrder: 1 },
      { source: 'hardware', target: 'revenue', value: 0.8, sourceWidth: 17, targetWidth: 17, targetOrder: 2 },
      { source: 'services', target: 'revenue', value: 1.3, sourceWidth: 33, targetWidth: 40, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 9.4, sourceWidth: 249, targetWidth: 249, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.9, sourceWidth: 101, targetWidth: 101, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_cloud', value: 2.5, sourceWidth: 62, targetWidth: 62, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_hardware', value: 0.2, sourceWidth: 30, targetWidth: 30, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_services', value: 1.2, sourceWidth: 9, targetWidth: 4, sourceOrder: 2 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.8, sourceWidth: 97, targetWidth: 97, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.7, sourceWidth: 152, targetWidth: 148, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 2.4, sourceWidth: 63, targetWidth: 63, sourceOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.9, sourceWidth: 20, targetWidth: 20, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 10, targetWidth: 10, sourceOrder: 2 },
      { source: 'operating_profit', target: 'other_financial', value: 0.009, sourceWidth: 4, targetWidth: 4, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'rnd', value: 2.2, sourceWidth: 58, targetWidth: 58, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.0, sourceWidth: 52, targetWidth: 52, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'amortization', value: 0.7, sourceWidth: 17, targetWidth: 17, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 9, targetWidth: 9, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other', value: 0.2, sourceWidth: 12, targetWidth: 4, sourceOrder: 4 },
    ],
    i18n: {
      preservedAnnotationText: ['ORACLE'],
      zh: {
        name: 'Oracle · 2024 财年第三季度',
        meta: {
          title: 'Oracle 2024 财年第三季度利润表',
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 2 月',
          titleTextLength: 1850,
        },
        nodes: {
          cloud_services_license_support: { label: '云服务与许可证支持', notes: ['同比 +12%'] },
          cloud_license_on_premise_license: { label: '云许可证及本地部署许可证', notes: ['同比 (2%)'] },
          hardware: { label: '硬件', notes: ['同比 (7%)'] },
          services: { label: '服务', notes: ['同比 (5%)'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 71%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud: { label: '云', notes: ['毛利率 78%'] },
          cor_hardware: { label: '硬件', notes: ['毛利率 71%'] },
          cor_services: { label: '服务', notes: ['毛利率 8%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 28%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 18%', '同比 +3 个百分点'] },
          financial: { label: '财务费用' },
          tax: { label: '税费' },
          other_financial: { label: '其他' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          amortization: { label: '摊销' },
          ga: { label: '一般及行政' },
          other: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
