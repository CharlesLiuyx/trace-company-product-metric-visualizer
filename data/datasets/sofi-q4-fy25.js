/* SoFi Q4 FY25 income statement ($M), measured from the active Build reference. */
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
      ${kpiCard(75, isZh ? '会员数' : 'Members', '13.7M', isZh ? '同比 +35%' : '+35% Y/Y')}
      ${kpiCard(308, isZh ? '产品数' : 'Products', '20.2M', isZh ? '同比 +37%' : '+37% Y/Y')}
    </g>`;

  const labelSet = (isZh) => {
    const t = isZh
      ? {
          lending: '借贷', technology: ['技术', '平台'], financial: ['金融', '服务'],
          netRevenue: '净收入', corporateOther: ['公司/其他'], pretax: '税前利润', net: '净利润', tax: '税费',
          noninterest: ['非利息', '费用'], sales: '销售与营销', ga: '一般及行政费用', techExpense: '技术',
          operations: '运营成本', provision: ['信贷损失', '准备金'],
          yoy19: '同比 +19%', yoy78: '同比 +78%', yoy40: '同比 +40%',
          margin54: '贡献利润率 54%', margin39: '贡献利润率 39%', margin51: '贡献利润率 51%',
          ppNeg4: '同比 (4 个百分点)', pp8: '同比 +8 个百分点', pp6: '同比 +6 个百分点',
          netMargin: '净利率 17%', rev30: '占收入 30%', rev19: '占收入 19%', rev17: '占收入 17%', rev16: '占收入 16%',
          ppNeg1: '同比 (1 个百分点)', ppNeg3: '同比 (3 个百分点)', ppNeg2: '同比 (2 个百分点)',
        }
      : {
          lending: 'Lending', technology: ['Technology', 'Platform'], financial: ['Financial', 'Services'],
          netRevenue: 'Net revenue', corporateOther: ['Corporate/Other'], pretax: 'Pretax income', net: 'Net income', tax: 'Tax',
          noninterest: ['Noninterest', 'expenses'], sales: 'Sales & marketing', ga: 'G&A', techExpense: 'Technology',
          operations: ['Cost of operations'], provision: ['Provision for', 'credit losses'],
          yoy19: '+19% Y/Y', yoy78: '+78% Y/Y', yoy40: '+40% Y/Y',
          margin54: '54% contribution margin', margin39: '39% contribution margin', margin51: '51% contribution margin',
          ppNeg4: '(4pp) Y/Y', pp8: '+8pp Y/Y', pp6: '+6pp Y/Y',
          netMargin: '17% net margin', rev30: '30% of revenue', rev19: '19% of revenue', rev17: '17% of revenue', rev16: '16% of revenue',
          ppNeg1: '(1pp) Y/Y', ppNeg3: '(3pp) Y/Y', ppNeg2: '(2pp) Y/Y',
        };
    // Keep the descriptive source labels close to their bars, while pushing
    // the numeric value stack farther right so adjacent source labels never
    // cover a value or Y/Y line.
    const source = (valueTop, nameTop, name, yoy, margin, pp) => ({
      blocks: [
        block(455, valueTop, [line('$value', 40), line(yoy, 29, { color: NOTE })], { lineGap: 12 }),
        block(375, nameTop, name.map((part) => line(part, 40, { weight: 800 })), { anchor: 'end', lineGap: 9 }),
        block(375, nameTop + (name.length === 1 ? 60 : 104), [line(margin, 29, { color: NOTE }), line(pp, 29, { color: NOTE })], { anchor: 'end', lineGap: 10 }),
      ],
    });
    const expense = (top, name, note, yoy) => ({
      blocks: [block(RIGHT_X, top, [
        ...(Array.isArray(name) ? name : [name]).map((part) => line(part, 31, { weight: 800 })), line('$value', 29),
        ...(note ? [line(note, 28, { color: NOTE }), line(yoy, 28, { color: NOTE })] : []),
      ], { anchor: 'start', lineGap: 8 })],
    });
    return {
      lending: source(308, 431, [t.lending], t.yoy19, t.margin54, t.ppNeg4),
      technology_platform: source(661, 705, t.technology, t.yoy19, t.margin39, t.pp8),
      financial_services: source(865, 986, t.financial, t.yoy78, t.margin51, t.pp6),
      revenue: { blocks: [] },
      net_revenue: { blocks: [block(1352, 505, [line(t.netRevenue, 40, { weight: 800 }), line('$value', 40), line(t.yoy40, 29, { color: NOTE })], { lineGap: 12 })] },
      corporate_other: { blocks: [block(1352, 1162, [...t.corporateOther.map((part) => line(part, 36, { weight: 800 })), line('$value', 36)], { lineGap: 9 })] },
      pretax_income: { blocks: [block(1820, 405, [line(t.pretax, 40, { weight: 800 }), line('$value', 40)], { lineGap: 12 })] },
      operating_expenses: { blocks: [block(1820, 1107, [...t.noninterest.map((part) => line(part, 40, { weight: 800 })), line('$value', 40)], { lineGap: 9 })] },
      net_income: { blocks: [block(RIGHT_X, 282, [line(t.net, 40, { weight: 800 }), line('$value', 40), line(t.netMargin, 29, { color: NOTE })], { anchor: 'start', lineGap: 12 })] },
      tax: { blocks: [block(RIGHT_X, 449, [line(t.tax, 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
      sales_marketing: expense(602, [t.sales], t.rev30, t.ppNeg1),
      ga: expense(772, [t.ga], t.rev19, t.ppNeg3),
      technology: expense(943, [t.techExpense], t.rev17, t.ppNeg3),
      cost_operations: expense(1111, t.operations, t.rev16, t.ppNeg2),
      provision_credit_losses: expense(1278, t.provision),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sofi-q4-fy25',
    name: 'SoFi · Q4 FY25',
    company: 'SoFi',
    meta: {
      company: 'SoFi',
      title: 'SoFi Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/sofi-q4-fy25.png', width: 2667, height: 1500 },
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
        lending: { x: 383, y: 401, width: 72, height: 172 },
        technology_platform: { x: 383, y: 753, width: 72, height: 41 },
        financial_services: { x: 383, y: 957, width: 72, height: 157 },
        revenue: { x: 850, y: 581, width: 72, height: 374 },
        net_revenue: { x: 1317, y: 650, width: 72, height: 355 },
        corporate_other: { x: 1317, y: 1122, width: 72, height: 16 },
        pretax_income: { x: 1785, y: 514, width: 72, height: 62 },
        operating_expenses: { x: 1785, y: 793, width: 72, height: 291 },
        net_income: { x: 2251, y: 323, width: 72, height: 58 },
        tax: { x: 2251, y: 479, width: 72, height: 3 },
        sales_marketing: { x: 2251, y: 614, width: 72, height: 105 },
        ga: { x: 2251, y: 812, width: 72, height: 65 },
        technology: { x: 2251, y: 970, width: 72, height: 59 },
        cost_operations: { x: 2251, y: 1132, width: 72, height: 54 },
        provision_credit_losses: { x: 2251, y: 1296, width: 72, height: 3 },
      },
      labels: labelSet(false),
    },
    nodes: [
      { id: 'lending', col: 0, order: 0, type: 'source', label: 'Lending', value: 499, notes: ['+19% Y/Y', '54% contribution margin', '(4pp) Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'technology_platform', col: 0, order: 1, type: 'source', label: ['Technology', 'Platform'], value: 122, notes: ['+19% Y/Y', '39% contribution margin', '+8pp Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'financial_services', col: 0, order: 2, type: 'source', label: ['Financial', 'Services'], value: 457, notes: ['+78% Y/Y', '51% contribution margin', '+6pp Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: '', value: 1078, color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'net_revenue', col: 2, order: 0, type: 'profit', label: 'Net revenue', value: 1025, notes: ['+40% Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'corporate_other', col: 2, order: 1, type: 'cost', label: 'Corporate/Other', value: 53, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 185, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Noninterest', 'expenses'], value: 840, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 174, notes: ['17% net margin'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 12, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 2, type: 'cost', label: 'Sales & marketing', value: 306, notes: ['30% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 3, type: 'cost', label: 'G&A', value: 194, notes: ['19% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology', col: 4, order: 4, type: 'cost', label: 'Technology', value: 172, notes: ['17% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_operations', col: 4, order: 5, type: 'cost', label: 'Cost of operations', value: 162, notes: ['16% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'provision_credit_losses', col: 4, order: 6, type: 'cost', label: ['Provision for', 'credit losses'], value: 5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'lending', target: 'revenue', value: 499, sourceWidth: 172, targetWidth: 172, y0: 487, y1: 667, sourceOrder: 0, targetOrder: 0 },
      { source: 'technology_platform', target: 'revenue', value: 122, sourceWidth: 41, targetWidth: 41, y0: 773.5, y1: 773.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'financial_services', target: 'revenue', value: 457, sourceWidth: 157, targetWidth: 161, y0: 1035.5, y1: 874.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'net_revenue', value: 1025, sourceWidth: 358, targetWidth: 355, y0: 760, y1: 827.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'corporate_other', value: 53, sourceWidth: 16, targetWidth: 16, y0: 947, y1: 1130, sourceOrder: 1, targetOrder: 0 },
      { source: 'net_revenue', target: 'pretax_income', value: 185, sourceWidth: 62, targetWidth: 62, y0: 681, y1: 545, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'net_revenue', target: 'operating_expenses', value: 840, sourceWidth: 293, targetWidth: 291, y0: 858.5, y1: 938.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 174, sourceWidth: 58, targetWidth: 58, y0: 543, y1: 352, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 12, sourceWidth: 4, targetWidth: 3, y0: 574, y1: 480.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_marketing', value: 306, sourceWidth: 105, targetWidth: 105, y0: 845.5, y1: 666.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 194, sourceWidth: 65, targetWidth: 65, y0: 930.5, y1: 844.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology', value: 172, sourceWidth: 59, targetWidth: 59, y0: 992.5, y1: 999.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'cost_operations', value: 162, sourceWidth: 54, targetWidth: 54, y0: 1049, y1: 1159, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'provision_credit_losses', value: 5, sourceWidth: 8, targetWidth: 3, y0: 1080, y1: 1297.5, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'SoFi · 2025 财年第四季度',
        meta: {
          title: 'SoFi 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          titleSize: 110,
          titleTextLength: 1760,
        },
        annotationsSvg: annotations(true),
        nodes: {
          lending: { label: '借贷', notes: ['同比 +19%', '贡献利润率 54%', '同比 (4 个百分点)'] },
          technology_platform: { label: '技术平台', notes: ['同比 +19%', '贡献利润率 39%', '同比 +8 个百分点'] },
          financial_services: { label: '金融服务', notes: ['同比 +78%', '贡献利润率 51%', '同比 +6 个百分点'] },
          revenue: { label: '' },
          net_revenue: { label: '净收入', notes: ['同比 +40%'] },
          corporate_other: { label: '公司/其他' },
          pretax_income: { label: '税前利润' },
          operating_expenses: { label: '非利息费用' },
          net_income: { label: '净利润', notes: ['净利率 17%'] },
          tax: { label: '税费' },
          sales_marketing: { label: '销售与营销', notes: ['占收入 30%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政费用', notes: ['占收入 19%', '同比 (3 个百分点)'] },
          technology: { label: '技术', notes: ['占收入 17%', '同比 (3 个百分点)'] },
          cost_operations: { label: '运营成本', notes: ['占收入 16%', '同比 (2 个百分点)'] },
          provision_credit_losses: { label: '信贷损失准备金' },
        },
        layout: { labels: labelSet(true) },
      },
    },
  });
})();
