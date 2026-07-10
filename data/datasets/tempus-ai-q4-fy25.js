/* Tempus AI Q4 FY25 income statement ($M), reconstructed from the processed
 * reference with fixed native-SVG Sankey geometry. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLACK = '#000000';
  const SOURCE_LINK = '#858585';
  const HUB_LINK = '#303030';
  const HUB_PROFIT_LINK = '#415841';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2420;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight == null ? 400 : options.weight,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    lines,
  });

  const labelSet = (zh) => {
    const text = zh ? {
      diagnostics: '诊断业务', diagnosticsValueYoy: '同比 +122%', diagnosticsNote: '肿瘤和遗传病检测', diagnosticsMargin: '毛利率 61%', diagnosticsYoy: '同比 +13 个百分点',
      dataServices: ['数据与', '服务'], dataValueYoy: '同比 +25%', dataMargin: '毛利率 74%', dataYoy: '同比 (6 个百分点)',
      revenue: '收入', revenueYoy: '同比 +83%', gross: '毛利润', grossMargin: '利润率 65%', grossYoy: '同比 +4 个百分点',
      cost: ['收入', '成本'], opLoss: '营业亏损', lossMargin: '利润率 (17%)', lossYoy: '同比 +9 个百分点',
      opex: ['营业', '费用'], genomics: '基因组学', dataCost: ['数据与', '服务'],
      sga: ['销售、一般及', '行政费用'], rnd: '研发', technologyRnd: ['技术', '研发'],
      sgaRevenue: '占收入 57%', sgaYoy: '同比 +1 个百分点', rndRevenue: '占收入 14%', rndYoy: '同比 (1 个百分点)', techRevenue: '占收入 11%', techYoy: '同比 (5 个百分点)',
    } : {
      diagnostics: 'Diagnostics', diagnosticsValueYoy: '+122% Y/Y', diagnosticsNote: 'Oncology & Hereditary', diagnosticsMargin: '61% gross margin', diagnosticsYoy: '+13pp Y/Y',
      dataServices: ['Data &', 'Services'], dataValueYoy: '+25% Y/Y', dataMargin: '74% gross margin', dataYoy: '(6pp) Y/Y',
      revenue: 'Revenue', revenueYoy: '+83% Y/Y', gross: 'Gross profit', grossMargin: '65% margin', grossYoy: '+4pp Y/Y',
      cost: ['Cost of', 'revenue'], opLoss: 'Operating loss', lossMargin: '(17%) margin', lossYoy: '+9pp Y/Y',
      opex: ['Operating', 'expenses'], genomics: 'Genomics', dataCost: ['Data &', 'Services'],
      sga: ['SG&A'], rnd: 'R&D', technologyRnd: ['Technology', 'R&D'],
      sgaRevenue: '57% of revenue', sgaYoy: '+1pp Y/Y', rndRevenue: '14% of revenue', rndYoy: '(1pp) Y/Y', techRevenue: '11% of revenue', techYoy: '(5pp) Y/Y',
    };
    const redBold = (value, size = 31) => line(value, size, { weight: 800, color: RED_LABEL });
    const redValue = () => line('$value', 31, { color: RED_LABEL });
    const note = (value) => line(value, 29, { color: NOTE });
    return {
      diagnostics: {
        blocks: [
          block(443.5, 391, [line('$value', 39), line(text.diagnosticsValueYoy, 29, { color: NOTE })]),
          block(248.5, 538, [line(text.diagnostics, 40, { weight: 800 }), line(text.diagnosticsNote, 29, { color: NOTE }), line(text.diagnosticsMargin, 29, { color: NOTE }), line(text.diagnosticsYoy, 29, { color: NOTE })], { lineGap: 11 }),
        ],
      },
      data_services: {
        blocks: [
          block(448.5, 928, [line('$value', 39), line(text.dataValueYoy, 29, { color: NOTE })]),
          block(253.5, 1002, [line(text.dataServices[0], 40, { weight: 800 }), line(text.dataServices[1], 40, { weight: 800 }), line(text.dataMargin, 29, { color: NOTE }), line(text.dataYoy, 29, { color: NOTE })], { lineGap: 12 }),
        ],
      },
      revenue: { blocks: [block(913.5, 468, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), line(text.revenueYoy, 29, { color: NOTE })], { lineGap: 13 })] },
      gross_profit: { blocks: [block(1374.5, 303, [line(text.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(text.grossMargin, 29, { color: NOTE }), line(text.grossYoy, 29, { color: NOTE })], { lineGap: 11 })] },
      cost_of_revenue: { blocks: [block(1377.5, 1182, [...text.cost.map((value) => redBold(value, 34)), line('$value', 34, { color: RED_LABEL })], { lineGap: 13 })] },
      operating_loss: { blocks: [block(1478, 856, [redBold(text.opLoss, 40), line('$value', 40, { color: RED_LABEL }), note(text.lossMargin), note(text.lossYoy)], { lineGap: 7 })] },
      operating_expenses: { blocks: [block(1845, 501, [...text.opex.map((value) => redBold(value, 34)), line('$value', 34, { color: RED_LABEL })], { lineGap: 12 })] },
      genomics: { blocks: [block(1652, 1097, [redBold(text.genomics), redValue()], { anchor: 'start' })] },
      data_services_cost: { blocks: [
        block(1666, 1223, text.dataCost.map((value) => redBold(value)), { anchor: 'start', lineGap: 13 }),
        block(1727, 1311, [redValue()]),
      ] },
      sga: { blocks: [block(RIGHT_LABEL_X, 480, [...text.sga.map((value) => redBold(value)), redValue(), note(text.sgaRevenue), note(text.sgaYoy)], { anchor: 'start' })] },
      rnd: { blocks: [
        block(2477, 792, [redBold(text.rnd)], { lineGap: 8 }),
        block(2429, 832, [redValue(), note(text.rndRevenue), note(text.rndYoy)], { anchor: 'start', lineGap: 10 }),
      ] },
      technology_rnd: { blocks: [
        block(2477, 1037, text.technologyRnd.map((value) => redBold(value)), { lineGap: 8 }),
        block(2429, 1119, [redValue(), note(text.techRevenue), note(text.techYoy)], { anchor: 'start', lineGap: 10 }),
      ] },
    };
  };

  const testCards = (zh) => {
    const first = zh ? '肿瘤检测' : 'Oncology tests';
    const second = zh ? '遗传病检测' : 'Hereditary tests';
    const firstYoy = zh ? '同比 +29%' : '+29% Y/Y';
    const secondYoy = zh ? '同比 +23%' : '+23% Y/Y';
    return `
      <g font-family="Montserrat,Arial,sans-serif">
        <rect x="39" y="1193" width="418" height="156" rx="40" fill="#00000a"/>
        <text x="248" y="1247" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${first}</text>
        <text x="248" y="1292" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">94,000</text>
        <text x="248" y="1332" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">${firstYoy}</text>
        <rect x="467" y="1190" width="378" height="162" rx="40" fill="#00000a"/>
        <text x="656" y="1247" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${second}</text>
        <text x="656" y="1292" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">125,000</text>
        <text x="656" y="1332" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">${secondYoy}</text>
      </g>`;
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tempus-ai-q4-fy25',
    name: 'Tempus AI · Q4 FY25',
    company: 'Tempus AI',
    meta: {
      company: 'Tempus AI',
      title: 'Tempus AI Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/tempus-ai-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 201,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2382,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 665,
      logoHeight: 100,
      logoY: 288,
      logoViewBox: '0 0 665 100',
      logoSvg: '<text x="-24" y="99" font-family="Montserrat,Arial,sans-serif" font-size="134" font-weight="800" letter-spacing="2" textLength="671" lengthAdjust="spacingAndGlyphs" fill="#01000b">TEMPUS</text>',
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
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: HUB_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: testCards(false),
    layout: {
      scale: 1,
      nodes: {
        diagnostics: { x: 408, y: 490, width: 71, height: 246 },
        data_services: { x: 408, y: 1029, width: 71, height: 90 },
        revenue: { x: 875, y: 621, width: 70, height: 339 },
        gross_profit: { x: 1342, y: 492, width: 71, height: 219 },
        cost_of_revenue: { x: 1342, y: 1048, width: 71, height: 117 },
        operating_loss: { x: 1640, y: 889, width: 71, height: 55 },
        operating_expenses: { x: 1810, y: 646, width: 70, height: 277 },
        genomics: { x: 1560, y: 1090, width: 70, height: 94 },
        data_services_cost: { x: 1560, y: 1270, width: 70, height: 23 },
        sga: { x: 2274, y: 460, width: 71, height: 193 },
        rnd: { x: 2276, y: 835, width: 71, height: 45 },
        technology_rnd: { x: 2276, y: 1074, width: 71, height: 35 },
      },
      labels: labelSet(false),
    },
    nodes: [
      { id: 'diagnostics', col: 0, order: 0, type: 'source', label: 'Diagnostics', value: 267, notes: ['Oncology & Hereditary', '61% gross margin', '+13pp Y/Y'] },
      { id: 'data_services', col: 0, order: 1, type: 'source', label: ['Data &', 'Services'], value: 100, notes: ['74% gross margin', '(6pp) Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 367, notes: ['+83% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 238, notes: ['65% margin', '+4pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 129 },
      { id: 'operating_loss', col: 3, order: 2, type: 'cost', label: ['Operating', 'loss'], value: -61, notes: ['(17%) margin', '+9pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 299 },
      { id: 'genomics', col: 3, order: 0, type: 'cost', label: 'Genomics', value: 103 },
      { id: 'data_services_cost', col: 3, order: 1, type: 'cost', label: ['Data &', 'Services'], value: 27 },
      { id: 'sga', col: 5, order: 0, type: 'cost', label: 'SG&A', value: 209, notes: ['57% of revenue', '+1pp Y/Y'] },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 50, notes: ['14% of revenue', '(1pp) Y/Y'] },
      { id: 'technology_rnd', col: 5, order: 2, type: 'cost', label: ['Technology', 'R&D'], value: 40, notes: ['11% of revenue', '(5pp) Y/Y'] },
    ],
    links: [
      { source: 'diagnostics', target: 'revenue', value: 267, sourceWidth: 246, targetWidth: 246, y0: 613, y1: 744, sourceOrder: 0, targetOrder: 0 },
      { source: 'data_services', target: 'revenue', value: 100, sourceWidth: 90, targetWidth: 93, y0: 1074, y1: 913.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 238, sourceWidth: 219, targetWidth: 219, y0: 730.5, y1: 601.5, sourceOrder: 0, targetOrder: 0, linkTint: { left: HUB_PROFIT_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 129, sourceWidth: 120, targetWidth: 117, y0: 900, y1: 1106.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 238, sourceWidth: 219, targetWidth: 222, y0: 601.5, y1: 757, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 61, sourceWidth: 55, targetWidth: 55, y0: 916.5, y1: 895.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'cost_of_revenue', target: 'genomics', value: 103, sourceWidth: 94, targetWidth: 94, y0: 1095, y1: 1137, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'data_services_cost', value: 27, sourceWidth: 23, targetWidth: 23, y0: 1153.5, y1: 1281.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 209, sourceWidth: 193, targetWidth: 193, y0: 742.5, y1: 556.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 50, sourceWidth: 45, targetWidth: 45, y0: 861.5, y1: 857.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_rnd', value: 40, sourceWidth: 39, targetWidth: 35, y0: 903.5, y1: 1091.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['TEMPUS'],
      zh: {
        name: 'Tempus AI · 2025 财年第四季度',
        meta: {
          title: 'Tempus AI 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 2020,
        },
        annotationsSvg: testCards(true),
        nodes: {
          diagnostics: { label: '诊断业务', notes: ['肿瘤和遗传病检测', '毛利率 61%', '同比 +13 个百分点'] },
          data_services: { label: ['数据与', '服务'], notes: ['毛利率 74%', '同比 (6 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +83%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 65%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: '营业亏损', notes: ['利润率 (17%)', '同比 +9 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          genomics: { label: '基因组学' },
          data_services_cost: { label: ['数据与', '服务'] },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 57%', '同比 +1 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          technology_rnd: { label: '技术研发', notes: ['占收入 11%', '同比 (5 个百分点)'] },
        },
        layout: { labels: labelSet(true) },
      },
    },
  });
})();
