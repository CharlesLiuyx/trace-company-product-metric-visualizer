/* Tempus AI Q1 FY26 income statement ($M), reconstructed from the processed
 * reference with fixed native-SVG Sankey geometry. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLACK = '#000000';
  const SOURCE_LINK = '#858585';
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
      genomicsRevenue: '基因组学', genomicsValueYoy: '同比 +35%', genomicsNote: '肿瘤与遗传病', genomicsMargin: '毛利率 61%', genomicsYoy: '同比 +5 个百分点',
      dataServices: ['数据与', '服务'], dataValueYoy: '同比 +41%', dataMargin: '毛利率 71%', dataYoy: '同比 (3 个百分点)',
      revenue: '收入', revenueYoy: '同比 +36%', gross: '毛利润', grossMargin: '利润率 64%', grossYoy: '同比 +3 个百分点',
      cost: ['收入', '成本'], opLoss: '营业亏损', lossMargin: '利润率 (24%)', lossYoy: '同比 +3 个百分点',
      opex: ['营业', '费用'], genomicsCost: '基因组学', dataCost: ['数据与', '服务'],
      sga: ['销售、一般及', '行政费用'], rnd: '研发', technologyRnd: ['技术', '研发'],
      sgaRevenue: '占收入 61%', sgaYoy: '同比 +1 个百分点', rndRevenue: '占收入 14%', rndYoy: '同比 +0 个百分点', techRevenue: '占收入 13%', techYoy: '同比 +0 个百分点',
    } : {
      genomicsRevenue: 'Genomics', genomicsValueYoy: '+35% Y/Y', genomicsNote: 'Oncology & Hereditary', genomicsMargin: '61% gross margin', genomicsYoy: '+5pp Y/Y',
      dataServices: ['Data &', 'Services'], dataValueYoy: '+41% Y/Y', dataMargin: '71% gross margin', dataYoy: '(3pp) Y/Y',
      revenue: 'Revenue', revenueYoy: '+36% Y/Y', gross: 'Gross profit', grossMargin: '64% margin', grossYoy: '+3pp Y/Y',
      cost: ['Cost of', 'revenue'], opLoss: 'Operating loss', lossMargin: '(24%) margin', lossYoy: '+3pp Y/Y',
      opex: ['Operating', 'expenses'], genomicsCost: 'Genomics', dataCost: ['Data &', 'Services'],
      sga: ['SG&A'], rnd: 'R&D', technologyRnd: ['Technology', 'R&D'],
      sgaRevenue: '61% of revenue', sgaYoy: '+1pp Y/Y', rndRevenue: '14% of revenue', rndYoy: '+0pp Y/Y', techRevenue: '13% of revenue', techYoy: '+0pp) Y/Y',
    };
    const redBold = (value, size = 31) => line(value, size, { weight: 800, color: RED_LABEL });
    const redValue = () => line('$value', 31, { color: RED_LABEL });
    const note = (value) => line(value, 29, { color: NOTE });
    return {
      genomics_revenue: {
        blocks: [
          block(443.5, 387, [line('$value', 39), line(text.genomicsValueYoy, 29, { color: NOTE })]),
          block(248.5, 538, [line(text.genomicsRevenue, 40, { weight: 800 }), line(text.genomicsNote, 29, { color: NOTE }), line(text.genomicsMargin, 29, { color: NOTE }), line(text.genomicsYoy, 29, { color: NOTE })], { lineGap: 11 }),
        ],
      },
      data_services: {
        blocks: [
          block(448.5, 920, [line('$value', 39), line(text.dataValueYoy, 29, { color: NOTE })]),
          block(253.5, 1002, [line(text.dataServices[0], 40, { weight: 800 }), line(text.dataServices[1], 40, { weight: 800 }), line(text.dataMargin, 29, { color: NOTE }), line(text.dataYoy, 29, { color: NOTE })], { lineGap: 12 }),
        ],
      },
      revenue: { blocks: [block(913.5, 458, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), line(text.revenueYoy, 29, { color: NOTE })], { lineGap: 13 })] },
      gross_profit: { blocks: [block(1374.5, 295, [line(text.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(text.grossMargin, 29, { color: NOTE }), line(text.grossYoy, 29, { color: NOTE })], { lineGap: 11 })] },
      cost_of_revenue: { blocks: [block(1377.5, 1187, [...text.cost.map((value) => redBold(value, 34)), line('$value', 34, { color: RED_LABEL })], { lineGap: 13 })] },
      operating_loss: { blocks: [block(1478, 833, [redBold(text.opLoss, 40), line('$value', 40, { color: RED_LABEL }), note(text.lossMargin), note(text.lossYoy)], { lineGap: 7 })] },
      operating_expenses: { blocks: [block(1845, 445, [...text.opex.map((value) => redBold(value, 34)), line('$value', 34, { color: RED_LABEL })], { lineGap: 12 })] },
      genomics_cost: { blocks: [block(1652, 1104, [redBold(text.genomicsCost), redValue()], { anchor: 'start' })] },
      data_services_cost: { blocks: [
        block(1666, 1228, text.dataCost.map((value) => redBold(value)), { anchor: 'start', lineGap: 13 }),
        block(1727, 1318, [redValue()]),
      ] },
      rnd: { blocks: [
        block(2477, 410, [redBold(text.rnd)], { lineGap: 8 }),
        block(2429, 450, [redValue(), note(text.rndRevenue), note(text.rndYoy)], { anchor: 'start', lineGap: 10 }),
      ] },
      technology_rnd: { blocks: [
        block(2477, 605, text.technologyRnd.map((value) => redBold(value)), { lineGap: 8 }),
        block(2429, 687, [redValue(), note(text.techRevenue), note(text.techYoy)], { anchor: 'start', lineGap: 10 }),
      ] },
      sga: { blocks: [block(RIGHT_LABEL_X, 871, [...text.sga.map((value) => redBold(value)), redValue(), note(text.sgaRevenue), note(text.sgaYoy)], { anchor: 'start' })] },
    };
  };

  const testCards = (zh) => {
    const first = zh ? '肿瘤检测' : 'Oncology tests';
    const second = zh ? '遗传病检测' : 'Hereditary tests';
    const firstYoy = zh ? '同比 +28%' : '+28% Y/Y';
    const secondYoy = zh ? '同比 +7%' : '+7% Y/Y';
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <rect x="39" y="1193" width="418" height="156" rx="40" fill="#00000a"/>
        <text x="248" y="1247" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${first}</text>
        <text x="248" y="1292" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">85,500</text>
        <text x="248" y="1332" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">${firstYoy}</text>
        <rect x="467" y="1190" width="378" height="162" rx="40" fill="#00000a"/>
        <text x="656" y="1247" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${second}</text>
        <text x="656" y="1292" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">132,500</text>
        <text x="656" y="1332" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">${secondYoy}</text>
      </g>`;
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tempus-ai-q1-fy26',
    name: 'Tempus AI · Q1 FY26',
    company: 'Tempus AI',
    meta: {
      company: 'Tempus AI',
      title: 'Tempus AI Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/tempus-ai-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 201,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2382,
      hidePeriodStamp: true,
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
      linkTint: { source: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: testCards(false),
    layout: {
      scale: 1,
      nodes: {
        genomics_revenue: { x: 408, y: 475, width: 71, height: 271 },
        data_services: { x: 408, y: 1008, width: 71, height: 90 },
        revenue: { x: 875, y: 604, width: 70, height: 361 },
        gross_profit: { x: 1342, y: 477, width: 71, height: 232 },
        cost_of_revenue: { x: 1342, y: 1035, width: 71, height: 130 },
        operating_loss: { x: 1640, y: 840, width: 71, height: 89 },
        operating_expenses: { x: 1810, y: 590, width: 70, height: 317 },
        genomics_cost: { x: 1555, y: 1089, width: 71, height: 105 },
        data_services_cost: { x: 1555, y: 1268, width: 71, height: 26 },
        rnd: { x: 2277, y: 413, width: 71, height: 51 },
        technology_rnd: { x: 2277, y: 633, width: 71, height: 50 },
        sga: { x: 2277, y: 827, width: 71, height: 222 },
      },
      labels: labelSet(false),
    },
    nodes: [
      { id: 'genomics_revenue', col: 0, order: 0, type: 'source', label: 'Genomics', value: 261, notes: ['Oncology & Hereditary', '61% gross margin', '+5pp Y/Y'] },
      { id: 'data_services', col: 0, order: 1, type: 'source', label: ['Data &', 'Services'], value: 87, notes: ['71% gross margin', '(3pp) Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 348, notes: ['+36% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 222, notes: ['64% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 126 },
      { id: 'operating_loss', col: 3, order: 2, type: 'cost', label: ['Operating', 'loss'], value: -85, notes: ['(24%) margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 307 },
      { id: 'genomics_cost', col: 3, order: 0, type: 'cost', label: 'Genomics', value: 101 },
      { id: 'data_services_cost', col: 3, order: 1, type: 'cost', label: ['Data &', 'Services'], value: 25 },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'R&D', value: 48, notes: ['14% of revenue', '+0pp Y/Y'] },
      { id: 'technology_rnd', col: 5, order: 1, type: 'cost', label: ['Technology', 'R&D'], value: 46, notes: ['13% of revenue', '+0pp) Y/Y'] },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 213, notes: ['61% of revenue', '+1pp Y/Y'] },
    ],
    links: [
      { source: 'genomics_revenue', target: 'revenue', value: 261, sourceWidth: 271, targetWidth: 271, y0: 610.5, y1: 739.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'data_services', target: 'revenue', value: 87, sourceWidth: 90, targetWidth: 90, y0: 1053, y1: 920, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 222, sourceWidth: 232, targetWidth: 232, y0: 720, y1: 593, sourceOrder: 0, targetOrder: 0, linkTint: { left: HUB_PROFIT_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 126, sourceWidth: 130, targetWidth: 130, y0: 900, y1: 1100, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 222, sourceWidth: 232, targetWidth: 232, y0: 593, y1: 706, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 85, sourceWidth: 89, targetWidth: 85, y0: 884.5, y1: 864.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'cost_of_revenue', target: 'genomics_cost', value: 101, sourceWidth: 105, targetWidth: 105, y0: 1087.5, y1: 1141.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'data_services_cost', value: 25, sourceWidth: 25, targetWidth: 26, y0: 1152.5, y1: 1281, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 48, sourceWidth: 51, targetWidth: 51, y0: 615.5, y1: 438.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_rnd', value: 46, sourceWidth: 47, targetWidth: 50, y0: 664.5, y1: 658, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 213, sourceWidth: 219, targetWidth: 222, y0: 797.5, y1: 938, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['TEMPUS'],
      zh: {
        name: 'Tempus AI · 2026 财年第一季度',
        meta: {
          title: 'Tempus AI 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 2020,
        },
        annotationsSvg: testCards(true),
        nodes: {
          genomics_revenue: { label: '基因组学', notes: ['肿瘤与遗传病', '毛利率 61%', '同比 +5 个百分点'] },
          data_services: { label: ['数据与', '服务'], notes: ['毛利率 71%', '同比 (3 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +36%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 64%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: '营业亏损', notes: ['利润率 (24%)', '同比 +3 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          genomics_cost: { label: '基因组学' },
          data_services_cost: { label: ['数据与', '服务'] },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 +0 个百分点'] },
          technology_rnd: { label: '技术研发', notes: ['占收入 13%', '同比 +0 个百分点'] },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 61%', '同比 +1 个百分点'] },
        },
        layout: { labels: labelSet(true) },
      },
    },
  });
})();
