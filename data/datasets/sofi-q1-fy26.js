/* SoFi Q1 FY26 income statement ($M), measured from the active Build reference. */
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
      ${kpiCard(75, isZh ? '会员数' : 'Members', '14.7M', isZh ? '同比 +35%' : '+35% Y/Y')}
      ${kpiCard(308, isZh ? '产品数' : 'Products', '22.2M', isZh ? '同比 +39%' : '+39% Y/Y')}
    </g>`;

  const labelSet = (isZh) => {
    const t = isZh
      ? {
          lending: '借贷', technology: ['技术', '平台'], financial: ['金融', '服务'],
          netRevenue: '净收入', corporateOther: ['公司/其他'], pretax: '税前利润', net: '净利润', tax: '税费',
          noninterest: ['非利息', '费用'], sales: '销售与营销', ga: '一般及行政费用', techExpense: '技术',
          operations: '运营成本', provision: ['信贷损失', '准备金'],
          yoy55: '同比 +55%', yoyNeg27: '同比 (27%)', yoy41: '同比 +41%', yoy43: '同比 +43%',
          margin60: '贡献利润率 60%', margin16: '贡献利润率 16%', margin46: '贡献利润率 46%',
          pp2: '同比 +2 个百分点', ppNeg14: '同比 (14 个百分点)', ppNeg3: '同比 (3 个百分点)',
          netMargin: '净利率 15%', netPp6: '同比 +6 个百分点',
          rev30: '占收入 30%', rev18: '占收入 18%', rev17: '占收入 17%', rev16: '占收入 16%',
          pp0: '同比 (0 个百分点)', ppNeg2: '同比 (2 个百分点)',
        }
      : {
          lending: 'Lending', technology: ['Technology', 'Platform'], financial: ['Financial', 'Services'],
          netRevenue: 'Net revenue', corporateOther: ['Corporate/Other'], pretax: 'Pretax income', net: 'Net income', tax: 'Tax',
          noninterest: ['Noninterest', 'expenses'], sales: 'Sales & marketing', ga: 'G&A', techExpense: 'Technology',
          operations: ['Cost of operations'], provision: ['Provision for', 'credit losses'],
          yoy55: '+55% Y/Y', yoyNeg27: '(27%) Y/Y', yoy41: '+41% Y/Y', yoy43: '+43% Y/Y',
          margin60: '60% contribution margin', margin16: '16% contribution margin', margin46: '46% contribution margin',
          pp2: '+2pp Y/Y', ppNeg14: '(14pp) Y/Y', ppNeg3: '(3pp) Y/Y',
          netMargin: '15% net margin', netPp6: '+6pp Y/Y',
          rev30: '30% of revenue', rev18: '18% of revenue', rev17: '17% of revenue', rev16: '16% of revenue',
          pp0: '(0pp) Y/Y', ppNeg2: '(2pp) Y/Y',
        };
    const source = (valueTop, nameTop, nameX, name, yoy, margin, pp) => ({
      blocks: [
        block(414, valueTop, [line('$value', 40), line(yoy, 29, { color: NOTE })], { lineGap: 12 }),
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
      lending: source(290, 422, 365, [t.lending], t.yoy55, t.margin60, t.pp2),
      technology_platform: source(700, 730, 345, t.technology, t.yoyNeg27, t.margin16, t.ppNeg14),
      financial_services: source(904, 999, 345, t.financial, t.yoy41, t.margin46, t.ppNeg3),
      revenue: { blocks: [] },
      net_revenue: { blocks: [block(1352, 498, [line(t.netRevenue, 40, { weight: 800 }), line('$value', 40), line(t.yoy43, 29, { color: NOTE })], { lineGap: 12 })] },
      corporate_other: { blocks: [block(1348, 1113, [...t.corporateOther.map((part) => line(part, 36, { weight: 800 })), line('$value', 36)], { lineGap: 9 })] },
      pretax_income: { blocks: [block(1815, 412, [line(t.pretax, 40, { weight: 800 }), line('$value', 40)], { lineGap: 12 })] },
      operating_expenses: { blocks: [block(1820, 1095, [...t.noninterest.map((part) => line(part, 40, { weight: 800 })), line('$value', 40)], { lineGap: 9 })] },
      net_income: { blocks: [block(2368, 291, [line(t.net, 40, { weight: 800 }), line('$value', 40), line(t.netMargin, 29, { color: NOTE }), line(t.netPp6, 29, { color: NOTE })], { anchor: 'start', lineGap: 12 })] },
      tax: { blocks: [block(2436, 481, [line(t.tax, 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
      sales_marketing: expense(601, [t.sales], t.rev30, t.pp0),
      ga: expense(773, [t.ga], t.rev18, t.ppNeg2, 2393),
      technology: expense(942, [t.techExpense], t.rev17, t.ppNeg3, 2390),
      cost_operations: expense(1111, t.operations, t.rev16, t.ppNeg2),
      provision_credit_losses: expense(1276, t.provision, undefined, undefined, 2393),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sofi-q1-fy26',
    name: 'SoFi · Q1 FY26',
    company: 'SoFi',
    meta: {
      company: 'SoFi',
      title: 'SoFi Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/sofi-q1-fy26.png', width: 2667, height: 1500 },
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
        lending: { x: 378, y: 382, width: 71, height: 190 },
        technology_platform: { x: 378, y: 792, width: 71, height: 20 },
        financial_services: { x: 378, y: 996, width: 71, height: 126 },
        revenue: { x: 845, y: 529, width: 70, height: 342 },
        net_revenue: { x: 1312, y: 646, width: 71, height: 327 },
        corporate_other: { x: 1312, y: 1083, width: 71, height: 12 },
        pretax_income: { x: 1780, y: 523, width: 70, height: 57 },
        operating_expenses: { x: 1780, y: 808, width: 70, height: 268 },
        net_income: { x: 2246, y: 344, width: 71, height: 48 },
        tax: { x: 2246, y: 497, width: 71, height: 7 },
        sales_marketing: { x: 2246, y: 608, width: 71, height: 99 },
        ga: { x: 2246, y: 807, width: 71, height: 57 },
        technology: { x: 2246, y: 971, width: 71, height: 54 },
        cost_operations: { x: 2246, y: 1146, width: 71, height: 50 },
        provision_credit_losses: { x: 2246, y: 1305, width: 71, height: 2 },
      },
      labels: labelSet(false),
    },
    nodes: [
      { id: 'lending', col: 0, order: 0, type: 'source', label: 'Lending', value: 642, notes: ['+55% Y/Y', '60% contribution margin', '+2pp Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'technology_platform', col: 0, order: 1, type: 'source', label: ['Technology', 'Platform'], value: 75, notes: ['(27%) Y/Y', '16% contribution margin', '(14pp) Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'financial_services', col: 0, order: 2, type: 'source', label: ['Financial', 'Services'], value: 428, notes: ['+41% Y/Y', '46% contribution margin', '(3pp) Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: '', value: 1145, color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'net_revenue', col: 2, order: 0, type: 'profit', label: 'Net revenue', value: 1100, notes: ['+43% Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'corporate_other', col: 2, order: 1, type: 'cost', label: 'Corporate/Other', value: 46, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 200, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Noninterest', 'expenses'], value: 901, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 166, notes: ['15% net margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 34, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 2, type: 'cost', label: 'Sales & marketing', value: 336, notes: ['30% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 3, type: 'cost', label: 'G&A', value: 198, notes: ['18% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology', col: 4, order: 4, type: 'cost', label: 'Technology', value: 188, notes: ['17% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_operations', col: 4, order: 5, type: 'cost', label: 'Cost of operations', value: 171, notes: ['16% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'provision_credit_losses', col: 4, order: 6, type: 'cost', label: ['Provision for', 'credit losses'], value: 9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'lending', target: 'revenue', value: 642, sourceWidth: 190, targetWidth: 191, y0: 477, y1: 624.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'technology_platform', target: 'revenue', value: 75, sourceWidth: 20, targetWidth: 22, y0: 802, y1: 730, sourceOrder: 0, targetOrder: 1 },
      { source: 'financial_services', target: 'revenue', value: 428, sourceWidth: 126, targetWidth: 129, y0: 1059, y1: 806.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'net_revenue', value: 1100, sourceWidth: 328, targetWidth: 327, y0: 693, y1: 809.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'corporate_other', value: 46, sourceWidth: 14, targetWidth: 12, y0: 864, y1: 1089, sourceOrder: 1, targetOrder: 0 },
      { source: 'net_revenue', target: 'pretax_income', value: 200, sourceWidth: 59, targetWidth: 57, y0: 675.5, y1: 551.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'net_revenue', target: 'operating_expenses', value: 901, sourceWidth: 268, targetWidth: 268, y0: 839, y1: 942, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 166, sourceWidth: 49, targetWidth: 48, y0: 547.5, y1: 368, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 34, sourceWidth: 8, targetWidth: 7, y0: 576, y1: 500.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_marketing', value: 336, sourceWidth: 100, targetWidth: 99, y0: 858, y1: 657.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 198, sourceWidth: 59, targetWidth: 57, y0: 937.5, y1: 835.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology', value: 188, sourceWidth: 56, targetWidth: 54, y0: 995, y1: 998, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'cost_operations', value: 171, sourceWidth: 51, targetWidth: 50, y0: 1048.5, y1: 1171, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'provision_credit_losses', value: 9, sourceWidth: 2, targetWidth: 2, y0: 1075, y1: 1306, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'SoFi · 2026 财年第一季度',
        meta: {
          title: 'SoFi 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleSize: 110,
          titleTextLength: 1760,
        },
        annotationsSvg: annotations(true),
        nodes: {
          lending: { label: '借贷', notes: ['同比 +55%', '贡献利润率 60%', '同比 +2 个百分点'] },
          technology_platform: { label: '技术平台', notes: ['同比 (27%)', '贡献利润率 16%', '同比 (14 个百分点)'] },
          financial_services: { label: '金融服务', notes: ['同比 +41%', '贡献利润率 46%', '同比 (3 个百分点)'] },
          revenue: { label: '' },
          net_revenue: { label: '净收入', notes: ['同比 +43%'] },
          corporate_other: { label: '公司/其他' },
          pretax_income: { label: '税前利润' },
          operating_expenses: { label: '非利息费用' },
          net_income: { label: '净利润', notes: ['净利率 15%', '同比 +6 个百分点'] },
          tax: { label: '税费' },
          sales_marketing: { label: '销售与营销', notes: ['占收入 30%', '同比 (0 个百分点)'] },
          ga: { label: '一般及行政费用', notes: ['占收入 18%', '同比 (2 个百分点)'] },
          technology: { label: '技术', notes: ['占收入 17%', '同比 (3 个百分点)'] },
          cost_operations: { label: '运营成本', notes: ['占收入 16%', '同比 (2 个百分点)'] },
          provision_credit_losses: { label: '信贷损失准备金' },
        },
        layout: { labels: labelSet(true) },
      },
    },
  });
})();
