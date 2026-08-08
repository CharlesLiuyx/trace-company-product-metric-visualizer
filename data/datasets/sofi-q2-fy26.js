/* SoFi Q2 FY26 income statement ($M), measured from the active Build reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const SOURCE = '#00a2c7';
  const SOURCE_LABEL = '#009fc7';
  const SOURCE_LINK = '#85cedf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_X = 2350;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

  const kpiCard = (x, heading, value, note) => `
    <g>
      <rect x="${x}" y="1189" width="220" height="150" rx="31" fill="${SOURCE}"/>
      <text x="${x + 110}" y="1244" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${heading}</text>
      <text x="${x + 110}" y="1285" text-anchor="middle" font-size="30" font-weight="400" fill="#fff">${value}</text>
      <text x="${x + 110}" y="1324" text-anchor="middle" font-size="25" font-weight="400" fill="#fff">${note}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(75, isZh ? '会员数' : 'Members', '15.8M', isZh ? '同比 +35%' : '+35% Y/Y')}
      ${kpiCard(308, isZh ? '产品数' : 'Products', '24.3M', isZh ? '同比 +42%' : '+42% Y/Y')}
    </g>`;

  const labelSet = (isZh) => {
    const t = isZh
      ? {
          lending: '借贷', technology: ['技术', '平台'], financial: ['金融', '服务'],
          netRevenue: '净收入', corporateOther: ['公司/其他'], pretax: '税前利润', net: '净利润', tax: '税费',
          noninterest: ['非利息', '费用'], sales: '销售与营销', ga: '一般及行政费用', techExpense: '技术',
          operations: '运营成本', provision: ['信贷损失', '准备金'],
          yoy63: '同比 +63%', yoyNeg23: '同比 (23%)', yoy28: '同比 +28%', yoy43: '同比 +43%',
          margin56: '贡献利润率 56%', margin14: '贡献利润率 14%', margin46: '贡献利润率 46%',
          pp1: '同比 +1 个百分点', ppNeg16: '同比 (16 个百分点)', ppNeg6: '同比 (6 个百分点)',
          netMargin: '净利率 13%', netPp1: '同比 +1 个百分点',
          rev32: '占收入 32%', rev18: '占收入 18%', rev16: '占收入 16%',
          ppNeg1: '同比 (1 个百分点)', ppNeg2: '同比 (2 个百分点)',
        }
      : {
          lending: 'Lending', technology: ['Technology', 'Platform'], financial: ['Financial', 'Services'],
          netRevenue: 'Net revenue', corporateOther: ['Corporate/Other'], pretax: 'Pretax income', net: 'Net income', tax: 'Tax',
          noninterest: ['Noninterest', 'expenses'], sales: 'Sales & marketing', ga: 'G&A', techExpense: 'Technology',
          operations: ['Cost of operations'], provision: ['Provision for', 'credit losses'],
          yoy63: '+63% Y/Y', yoyNeg23: '(23%) Y/Y', yoy28: '+28% Y/Y', yoy43: '+43% Y/Y',
          margin56: '56% contribution margin', margin14: '14% contribution margin', margin46: '46% contribution margin',
          pp1: '+1pp Y/Y', ppNeg16: '(16pp) Y/Y', ppNeg6: '(6pp) Y/Y',
          netMargin: '13% net margin', netPp1: '+1pp Y/Y',
          rev32: '32% of revenue', rev18: '18% of revenue', rev16: '16% of revenue',
          ppNeg1: '(1pp) Y/Y', ppNeg2: '(2pp) Y/Y',
        };
    const source = (valueTop, nameTop, nameX, name, yoy, margin, pp, valueX = 414) => ({
      blocks: [
        block(valueX, valueTop, [line('$value', 40), line(yoy, 29, { color: NOTE })], { lineGap: 12 }),
        block(nameX, nameTop, [
          ...name.map((part) => line(part, 40, { weight: 800 })),
          line(margin, 29, { color: NOTE }),
          line(pp, 29, { color: NOTE }),
        ], { anchor: 'end', lineGap: name.length === 1 ? 10 : 12 }),
      ],
    });
    const expense = (top, name, note, yoy, x = RIGHT_X) => ({
      blocks: [block(x, top, [
        ...(Array.isArray(name) ? name : [name]).map((part) => line(part, 31, { weight: 800 })), line('$value', 29),
        ...(note ? [line(note, 28, { color: NOTE }), line(yoy, 28, { color: NOTE })] : []),
      ], { anchor: 'start', lineGap: 8 })],
    });
    return {
      lending: source(317, 444, 363, [t.lending], t.yoy63, t.margin56, t.pp1, 408),
      technology_platform: source(689, 719, 345, t.technology, t.yoyNeg23, t.margin14, t.ppNeg16),
      financial_services: source(888, 991, 345, t.financial, t.yoy28, t.margin46, t.ppNeg6),
      revenue: { blocks: [] },
      net_revenue: { blocks: [block(1352, 495, [line(t.netRevenue, 40, { weight: 800 }), line('$value', 40), line(t.yoy43, 29, { color: NOTE })], { lineGap: 12 })] },
      corporate_other: { blocks: [block(1348, 1105, [...t.corporateOther.map((part) => line(part, 36, { weight: 800 })), line('$value', 36)], { lineGap: 9 })] },
      pretax_income: { blocks: [block(1815, 378, [line(t.pretax, 40, { weight: 800 }), line('$value', 40)], { lineGap: 12 })] },
      operating_expenses: { blocks: [block(1820, 1037, [...t.noninterest.map((part) => line(part, 40, { weight: 800 })), line('$value', 40)], { lineGap: 9 })] },
      net_income: { blocks: [block(2368, 268, [line(t.net, 40, { weight: 800 }), line('$value', 40), line(t.netMargin, 29, { color: NOTE }), line(t.netPp1, 29, { color: NOTE })], { anchor: 'start', lineGap: 12 })] },
      tax: { blocks: [block(2436, 470, [line(t.tax, 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
      sales_marketing: expense(593, [t.sales], t.rev32, t.pp1),
      ga: expense(775, [t.ga], t.rev18, t.ppNeg2, 2393),
      technology: expense(953, [t.techExpense], t.rev16, t.ppNeg2, 2390),
      cost_operations: expense(1119, t.operations, t.rev16, t.ppNeg1),
      provision_credit_losses: expense(1282, t.provision, undefined, undefined, 2393),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sofi-q2-fy26',
    name: 'SoFi · Q2 FY26',
    company: 'SoFi',
    meta: {
      company: 'SoFi',
      title: 'SoFi Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/sofi-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 1970,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: SOURCE, label: SOURCE_LABEL },
        hub: { node: SOURCE, label: SOURCE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'sofi-company-wordmark', href: 'data/assets/raster-annotations/sofi/company-wordmark-q4-fy25.png', x: 894, y: 284, width: 557, height: 172 },
    ],
    layout: {
      scale: 1,
      nodes: {
        lending: { x: 378, y: 411, width: 71, height: 172 },
        technology_platform: { x: 378, y: 782, width: 71, height: 19 },
        financial_services: { x: 378, y: 981, width: 71, height: 112 },
        revenue: { x: 845, y: 536, width: 70, height: 306 },
        net_revenue: { x: 1312, y: 642, width: 71, height: 293 },
        corporate_other: { x: 1312, y: 1076, width: 71, height: 12 },
        pretax_income: { x: 1780, y: 487, width: 70, height: 48 },
        operating_expenses: { x: 1780, y: 779, width: 70, height: 243 },
        net_income: { x: 2246, y: 332, width: 71, height: 36 },
        tax: { x: 2246, y: 475, width: 71, height: 10 },
        sales_marketing: { x: 2246, y: 577, width: 71, height: 94 },
        ga: { x: 2246, y: 791, width: 71, height: 50 },
        technology: { x: 2246, y: 971, width: 71, height: 46 },
        cost_operations: { x: 2246, y: 1145, width: 71, height: 45 },
        provision_credit_losses: { x: 2246, y: 1333, width: 71, height: 1 },
      },
      labels: labelSet(false),
    },
    nodes: [
      { id: 'lending', col: 0, order: 0, type: 'source', label: 'Lending', value: 725, notes: ['+63% Y/Y', '56% contribution margin', '+1pp Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'technology_platform', col: 0, order: 1, type: 'source', label: ['Technology', 'Platform'], value: 85, notes: ['(23%) Y/Y', '14% contribution margin', '(16pp) Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'financial_services', col: 0, order: 2, type: 'source', label: ['Financial', 'Services'], value: 466, notes: ['+28% Y/Y', '46% contribution margin', '(6pp) Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: '', value: 1276, color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'net_revenue', col: 2, order: 0, type: 'profit', label: 'Net revenue', value: 1219, valueText: '$1,219M', notes: ['+43% Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'corporate_other', col: 2, order: 1, type: 'cost', label: 'Corporate/Other', value: 57, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 204, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Noninterest', 'expenses'], value: 1014, valueText: '($1,014M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 157, notes: ['13% net margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 48, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 2, type: 'cost', label: 'Sales & marketing', value: 392, notes: ['32% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 3, type: 'cost', label: 'G&A', value: 217, notes: ['18% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology', col: 4, order: 4, type: 'cost', label: 'Technology', value: 191, notes: ['16% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_operations', col: 4, order: 5, type: 'cost', label: 'Cost of operations', value: 200, notes: ['16% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'provision_credit_losses', col: 4, order: 6, type: 'cost', label: ['Provision for', 'credit losses'], value: 14, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'lending', target: 'revenue', value: 725, sourceWidth: 172, targetWidth: 174, y0: 497, y1: 623, sourceOrder: 0, targetOrder: 0 },
      { source: 'technology_platform', target: 'revenue', value: 85, sourceWidth: 19, targetWidth: 20, y0: 791.5, y1: 720, sourceOrder: 0, targetOrder: 1 },
      { source: 'financial_services', target: 'revenue', value: 466, sourceWidth: 112, targetWidth: 112, y0: 1037, y1: 786, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'net_revenue', value: 1219, sourceWidth: 292, targetWidth: 293, y0: 682, y1: 788.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'corporate_other', value: 57, sourceWidth: 14, targetWidth: 12, y0: 835, y1: 1082, sourceOrder: 1, targetOrder: 0 },
      { source: 'net_revenue', target: 'pretax_income', value: 204, sourceWidth: 49, targetWidth: 48, y0: 666.5, y1: 511, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'net_revenue', target: 'operating_expenses', value: 1014, sourceWidth: 244, targetWidth: 243, y0: 813, y1: 900.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 157, sourceWidth: 37, targetWidth: 36, y0: 505.5, y1: 350, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 48, sourceWidth: 11, targetWidth: 10, y0: 529.5, y1: 480, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_marketing', value: 392, sourceWidth: 94, targetWidth: 94, y0: 826, y1: 624, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 217, sourceWidth: 52, targetWidth: 50, y0: 899, y1: 816, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology', value: 191, sourceWidth: 46, targetWidth: 46, y0: 948, y1: 994, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'cost_operations', value: 200, sourceWidth: 48, targetWidth: 45, y0: 995, y1: 1167.5, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'provision_credit_losses', value: 14, sourceWidth: 3, targetWidth: 1, y0: 1020.5, y1: 1333.5, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'SoFi · 2026 财年第二季度',
        meta: {
          title: 'SoFi 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的季度',
          titleSize: 110,
          titleTextLength: 1760,
        },
        annotationsSvg: annotations(true),
        nodes: {
          lending: { label: '借贷', notes: ['同比 +63%', '贡献利润率 56%', '同比 +1 个百分点'] },
          technology_platform: { label: '技术平台', notes: ['同比 (23%)', '贡献利润率 14%', '同比 (16 个百分点)'] },
          financial_services: { label: '金融服务', notes: ['同比 +28%', '贡献利润率 46%', '同比 (6 个百分点)'] },
          revenue: { label: '' },
          net_revenue: { label: '净收入', notes: ['同比 +43%'] },
          corporate_other: { label: '公司/其他' },
          pretax_income: { label: '税前利润' },
          operating_expenses: { label: '非利息费用' },
          net_income: { label: '净利润', notes: ['净利率 13%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          sales_marketing: { label: '销售与营销', notes: ['占收入 32%', '同比 +1 个百分点'] },
          ga: { label: '一般及行政费用', notes: ['占收入 18%', '同比 (2 个百分点)'] },
          technology: { label: '技术', notes: ['占收入 16%', '同比 (2 个百分点)'] },
          cost_operations: { label: '运营成本', notes: ['占收入 16%', '同比 (1 个百分点)'] },
          provision_credit_losses: { label: '信贷损失准备金' },
        },
        layout: { labels: labelSet(true) },
      },
    },
  });
})();
