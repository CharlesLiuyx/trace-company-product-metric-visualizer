/* Tencent — Q1 FY25 income statement (RMB B), measured fixed-layout d3/SVG. */
(function () {
  const BG = '#f2f2f2';
  const YELLOW = '#f8b62d';
  const YELLOW_LINK = '#f4d799';
  const SOCIAL_BLUE = '#0052d9';
  const SOCIAL_LINK = '#85aae6';
  const OLIVE = '#80a813';
  const OLIVE_LINK = '#bfd18e';
  const CORAL = '#f97a66';
  const CORAL_LINK = '#f4bcb3';
  const HUB = '#016db7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY = '#666666';
  const GRAY_LINK = '#b2b2b2';
  const TITLE = '#155077';

  const line = (text, size, options = {}) => ({
    text, size, weight: options.weight == null ? 400 : options.weight, color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x, top, anchor: options.anchor || 'middle', semanticRole: options.semanticRole || '',
    lineGap: options.lineGap == null ? 7 : options.lineGap, lines,
  });

  const labels = (zh) => {
    const t = zh ? {
      gaming: '游戏', social: ['社交', '网络'], marketing: ['营销', '服务'], fintech: ['金融科技与', '企业服务'],
      others: '其他', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润',
      expenses: ['运营', '费用'], investments: '投资收益', net: '净利润', tax: '税费', rnd: ['研究与', '开发'],
      ga: ['管理', '费用'], sm: ['销售与', '市场'], otherExpense: '其他',
      yoy24: '同比 +24%', yoy7: '同比 +7%', yoy20: '同比 +20%', yoy5: '同比 +5%', yoy45: '同比 (45%)',
      yoy13: '同比 +13%', margin56: '利润率 56%', pp3: '同比 +3 个百分点', margin32: '利润率 32%',
      ppm1: '同比 (1 个百分点)', margin28: '利润率 28%', pp1: '同比 +1 个百分点', share11: '占收入 11%',
      share8: '占收入 8%', pp2: '同比 +2 个百分点', share4: '占收入 4%', pp0: '同比 (0 个百分点)',
    } : {
      gaming: 'Gaming', social: ['Social', 'Networks'], marketing: ['Marketing', 'Services'],
      fintech: ['Finance &', 'Business', 'Services'], others: 'Others', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      investments: 'Investments', net: 'Net profit', tax: 'Tax', rnd: ['Research &', 'development'],
      ga: ['General &', 'admin'], sm: ['Sales &', 'marketing'], otherExpense: 'Other',
      yoy24: '+24% Y/Y', yoy7: '+7% Y/Y', yoy20: '+20% Y/Y', yoy5: '+5% Y/Y', yoy45: '(45%) Y/Y',
      yoy13: '+13% Y/Y', margin56: '56% margin', pp3: '+3pp Y/Y', margin32: '32% margin',
      ppm1: '(1pp) Y/Y', margin28: '28% margin', pp1: '+1pp Y/Y', share11: '11% of revenue',
      share8: '8% of revenue', pp2: '+2pp Y/Y', share4: '4% of revenue', pp0: '(0pp) Y/Y',
    };
    const amount = (x, top, note, color) => block(x, top, [
      line('$value', 32, { color }), line(note, 22, { color: GRAY }),
    ], { lineGap: 5 });
    const sourceName = (text, top, x = 485, semanticRole = 'centered-side-label') => block(x, top,
      (Array.isArray(text) ? text : [text]).map((v) => line(v, zh ? 36 : 39, { weight: 800 })),
      { anchor: 'end', lineGap: 6, semanticRole });
    const rightExpense = (names, top, amountText, share, pp, x = 2436) => block(x, top, [
      ...names.map((v) => line(v, 29, { weight: 800, color: RED_LABEL })),
      line(amountText, 28, { color: RED_LABEL }), line(share, 25, { color: GRAY }),
      line(pp, 25, { color: GRAY }),
    ], { lineGap: 7 });
    return {
      gaming: { blocks: [amount(555, 299, t.yoy24, YELLOW), sourceName(t.gaming, 412.5, 492)] },
      social_networks: { blocks: [amount(548, 554, t.yoy7, SOCIAL_BLUE), sourceName(t.social, zh ? 633 : 628)] },
      marketing_services: { blocks: [amount(548, 760, t.yoy20, OLIVE), sourceName(t.marketing, zh ? 839 : 833)] },
      fintech_business_services: { blocks: [amount(548, 959, t.yoy5, CORAL), sourceName(t.fintech, zh ? 1062.5 : 1038)] },
      others: { blocks: [amount(548, 1162, t.yoy45, GRAY), sourceName(t.others, 1247, 485, 'top-aligned-side-label')] },
      revenue: { blocks: [block(981, 494, [line(t.revenue, 41, { weight: 800 }), line('$value', 36), line(t.yoy13, 25, { color: GRAY })])] },
      gross_profit: { blocks: [block(1419, 373, [line(t.gross, 38, { weight: 800 }), line('$value', 35), line(t.margin56, 25, { color: GRAY }), line(t.pp3, 25, { color: GRAY })], { lineGap: 6 })] },
      cost_of_revenue: { blocks: [block(1419, 1034, [...t.cost.map((v) => line(v, 37, { weight: 800 })), line('$value', 34)])] },
      operating_profit: { blocks: [block(1855, 291, [line(t.operating, 36, { weight: 800 }), line('$value', 34), line(t.margin32, 25, { color: GRAY }), line(t.ppm1, 25, { color: GRAY })], { lineGap: 6 })] },
      operating_expenses: { blocks: [block(1848, 829, [...t.expenses.map((v) => line(v, 37, { weight: 800 })), line('$value', 34)])] },
      investments: { blocks: [block(2168, 532, [line(t.investments, 27, { weight: 800 }), line('$value', 27)], { lineGap: 5 })] },
      net_profit: { blocks: [block(2437, 358.5, [line(t.net, 38, { weight: 800 }), line('$value', 35), line(t.margin28, 25, { color: GRAY }), line(t.pp1, 25, { color: GRAY })], { lineGap: 6 })] },
      tax: { blocks: [block(2432, 625, [line(t.tax, 28, { weight: 800 }), line('$value', 28)])] },
      rnd: { blocks: [rightExpense(t.rnd, 746.5, '(18.9B)', t.share11, t.pp1)] },
      ga: { blocks: [rightExpense(t.ga, 957.5, '(14.7B)', t.share8, t.pp2)] },
      sm: { blocks: [rightExpense(t.sm, 1149, '(7.9B)', t.share4, t.pp0)] },
      other_operating_expense: { blocks: [block(2357, 1361, [line(`${t.otherExpense} (1.4B)`, 28, { weight: 800, color: RED_LABEL })], { anchor: 'start' })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tencent-q1-fy25', name: 'Tencent · Q1 FY25', company: 'Tencent',
    meta: {
      company: 'Tencent', title: 'Tencent Q1 FY25 Income Statement', period: '', periodNote: '',
      currency: '', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 191, titleSize: 128, titleWeight: 800, titleTextLength: 2240,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: BG, allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: GRAY, noteColor: GRAY,
      palette: {
        source: { node: HUB, label: HUB }, hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: HUB, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 32, note: 22, lineGap: 7 },
    },
    annotationsSvg: `<g font-family="Montserrat,Arial,sans-serif"><text x="120" y="282" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">in RMB</text></g>`,
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/tencent/company-wordmark.png', x: 704, y: 274, width: 548, height: 124 },
      { key: 'business-gaming-cluster', href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png', x: 34, y: 360, width: 231, height: 136 },
      { key: 'business-social-networks-cluster', href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png', x: 65, y: 576, width: 148, height: 147 },
      { key: 'business-marketing-services-cluster', href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png', x: 74, y: 787, width: 140, height: 134 },
      { key: 'business-fintech-business-services-cluster', href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png', x: 81, y: 1013, width: 136, height: 134 },
    ],
    layout: {
      scale: 1.62,
      nodes: {
        gaming: { x: 511, y: 388, width: 66, height: 96 }, social_networks: { x: 511, y: 651, width: 66, height: 51 },
        marketing_services: { x: 511, y: 857, width: 66, height: 51 }, fintech_business_services: { x: 511, y: 1062, width: 66, height: 88 },
        others: { x: 511, y: 1251, width: 66, height: 10 }, revenue: { x: 948, y: 631, width: 66, height: 292 },
        gross_profit: { x: 1387, y: 541, width: 67, height: 163 }, cost_of_revenue: { x: 1385, y: 885, width: 66, height: 128 },
        operating_profit: { x: 1822, y: 457, width: 66, height: 93 }, operating_expenses: { x: 1822, y: 734, width: 66, height: 68 },
        investments: { x: 2136, y: 503, width: 65, height: 7 }, net_profit: { x: 2259, y: 378, width: 66, height: 79 },
        tax: { x: 2259, y: 650, width: 66, height: 20 }, rnd: { x: 2259, y: 777, width: 66, height: 28 },
        ga: { x: 2259, y: 978, width: 66, height: 22 }, sm: { x: 2259, y: 1174, width: 66, height: 12 },
        other_operating_expense: { x: 2259, y: 1380, width: 66, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 59.5, notes: ['+24% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 32.6, notes: ['+7% Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'marketing_services', col: 0, order: 2, type: 'source', label: ['Marketing', 'Services'], value: 31.9, notes: ['+20% Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'fintech_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 54.9, notes: ['+5% Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 1.1, notes: ['(45%) Y/Y'], color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 180.0, valueText: '180.0B', notes: ['+13% Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 100.5, notes: ['56% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 79.5 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 57.6, notes: ['32% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 42.9 },
      { id: 'investments', col: 4, order: 0, type: 'profit', label: 'Investments', value: 5.8 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 49.7, notes: ['28% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 13.7 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'development'], value: 18.9, notes: ['11% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: ['General &', 'admin'], value: 14.7, notes: ['8% of revenue', '+2pp Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: ['Sales &', 'marketing'], value: 7.9, notes: ['4% of revenue', '(0pp) Y/Y'] },
      { id: 'other_operating_expense', col: 5, order: 5, type: 'cost', label: 'Other', value: 1.4, valueText: '(1.4B)' },
    ],
    links: [
      { source: 'gaming', target: 'revenue', value: 59.5, sourceWidth: 96, targetWidth: 96, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 32.6, sourceWidth: 51, targetWidth: 53, targetOrder: 1 },
      { source: 'marketing_services', target: 'revenue', value: 31.9, sourceWidth: 51, targetWidth: 52, targetOrder: 2 },
      { source: 'fintech_business_services', target: 'revenue', value: 54.9, sourceWidth: 88, targetWidth: 89, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 1.1, sourceWidth: 5, targetWidth: 2, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 100.5, sourceWidth: 163, targetWidth: 163, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 79.5, sourceWidth: 128, targetWidth: 128, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 57.6, sourceWidth: 93, targetWidth: 93, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 42.9, sourceWidth: 70, targetWidth: 68, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 43.9, sourceWidth: 71, targetWidth: 70, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 13.7, sourceWidth: 22, targetWidth: 20, sourceOrder: 1 },
      { source: 'investments', target: 'net_profit', value: 5.8, sourceWidth: 7, targetWidth: 9, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 18.9, sourceWidth: 30, targetWidth: 28, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 14.7, sourceWidth: 23, targetWidth: 22, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 7.9, sourceWidth: 13, targetWidth: 12, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 1.4, sourceWidth: 2, targetWidth: 3, sourceOrder: 3 },
    ],
    i18n: {
      zh: {
        name: 'Tencent · 2025 财年第一季度',
        meta: { title: 'Tencent 2025 财年第一季度利润表', period: '', periodNote: '' },
        nodes: {
          gaming: { label: '游戏', notes: ['同比 +24%'] }, social_networks: { label: '社交网络', notes: ['同比 +7%'] },
          marketing_services: { label: '营销服务', notes: ['同比 +20%'] }, fintech_business_services: { label: '金融科技与企业服务', notes: ['同比 +5%'] },
          others: { label: '其他', notes: ['同比 (45%)'] }, revenue: { label: '收入', notes: ['同比 +13%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 +3 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 (1 个百分点)'] }, operating_expenses: { label: '运营费用' },
          investments: { label: '投资收益' }, net_profit: { label: '净利润', notes: ['利润率 28%', '同比 +1 个百分点'] }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 8%', '同比 +2 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 4%', '同比 (0 个百分点)'] },
          other_operating_expense: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
