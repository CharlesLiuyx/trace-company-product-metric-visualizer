/* Tempus AI Q3 FY25 income statement ($M), reconstructed from the processed
 * reference with fixed native-SVG Sankey geometry. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLACK = '#000000';
  const SOURCE_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

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
      genomicsRevenue: '基因组学', genomicsValueYoy: '同比 +117%', genomicsNote: '肿瘤与遗传病', genomicsMargin: '毛利率 61%', genomicsYoy: '同比 +13 个百分点',
      dataServices: ['数据与', '服务'], dataValueYoy: '同比 +26%', dataMargin: '毛利率 68%', dataYoy: '同比 (8 个百分点)',
      revenue: '收入', revenueYoy: '同比 +85%', gross: '毛利润', grossMargin: '利润率 68%', grossYoy: '同比 +9 个百分点',
      cost: ['收入', '成本'], opLoss: '营业亏损', lossMargin: '利润率 (20%)', lossYoy: '同比 +10 个百分点',
      opex: ['营业', '费用'], genomicsCost: '基因组学', dataCost: ['数据与', '服务'],
      rnd: '研发', technologyRnd: ['技术', '研发'], sga: ['销售、一般及', '行政费用'],
      rndRevenue: '占收入 15%', rndYoy: '同比 (1 个百分点)', techRevenue: '占收入 12%', techYoy: '同比 (5 个百分点)',
      sgaRevenue: '占收入 61%', sgaYoy: '同比 +5 个百分点',
    } : {
      genomicsRevenue: 'Genomics', genomicsValueYoy: '+117% Y/Y', genomicsNote: 'Oncology & Hereditary', genomicsMargin: '61% gross margin', genomicsYoy: '+13pp Y/Y',
      dataServices: ['Data &', 'Services'], dataValueYoy: '+26% Y/Y', dataMargin: '68% gross margin', dataYoy: '(8pp) Y/Y',
      revenue: 'Revenue', revenueYoy: '+85% Y/Y', gross: 'Gross profit', grossMargin: '68% margin', grossYoy: '+9pp Y/Y',
      cost: ['Cost of', 'revenue'], opLoss: 'Operating loss', lossMargin: '(20%) margin', lossYoy: '+10pp Y/Y',
      opex: ['Operating', 'expenses'], genomicsCost: 'Genomics', dataCost: ['Data &', 'Services'],
      rnd: 'R&D', technologyRnd: ['Technology', 'R&D'], sga: ['SG&A'],
      rndRevenue: '15% of revenue', rndYoy: '(1pp) Y/Y', techRevenue: '12% of revenue', techYoy: '(5pp) Y/Y',
      sgaRevenue: '61% of revenue', sgaYoy: '+5pp Y/Y',
    };
    const redBold = (value, size = 31) => line(value, size, { weight: 800, color: RED_LABEL });
    const redValue = () => line('$value', 31, { color: RED_LABEL });
    const note = (value) => line(value, 29, { color: NOTE });
    return {
      genomics_revenue: {
        blocks: [
          block(447, 397, [line('$value', 39), line(text.genomicsValueYoy, 29, { color: NOTE })]),
          block(249, 546, [line(text.genomicsRevenue, 40, { weight: 800 }), line(text.genomicsNote, 29, { color: NOTE }), line(text.genomicsMargin, 29, { color: NOTE }), line(text.genomicsYoy, 29, { color: NOTE })], { lineGap: 11 }),
        ],
      },
      data_services: {
        blocks: [
          block(449, 930, [line('$value', 39), line(text.dataValueYoy, 29, { color: NOTE })]),
          block(254, 1005, [line(text.dataServices[0], 40, { weight: 800 }), line(text.dataServices[1], 40, { weight: 800 }), line(text.dataMargin, 29, { color: NOTE }), line(text.dataYoy, 29, { color: NOTE })], { lineGap: 12 }),
        ],
      },
      revenue: { blocks: [block(913, 508, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), line(text.revenueYoy, 29, { color: NOTE })], { lineGap: 13 })] },
      gross_profit: { blocks: [block(1388, 308, [line(text.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(text.grossMargin, 29, { color: NOTE }), line(text.grossYoy, 29, { color: NOTE })], { lineGap: 11 })] },
      cost_of_revenue: { blocks: [block(1384, 1195, [...text.cost.map((value) => redBold(value, 34)), line('$value', 34, { color: RED_LABEL })], { lineGap: 13 })] },
      operating_loss: { blocks: [block(1438, 835, [redBold(text.opLoss, 40), line('$value', 40, { color: RED_LABEL }), note(text.lossMargin), note(text.lossYoy)], { lineGap: 7 })] },
      operating_expenses: { blocks: [block(1845, 510, [...text.opex.map((value) => redBold(value, 34)), line('$value', 34, { color: RED_LABEL })], { lineGap: 12 })] },
      genomics_cost: { blocks: [block(1683, 1095, [redBold(text.genomicsCost), redValue()], { anchor: 'start' })] },
      data_services_cost: {
        blocks: [
          block(1695, 1210, text.dataCost.map((value) => redBold(value)), { anchor: 'start', lineGap: 13 }),
          block(1755, 1296, [redValue()]),
        ],
      },
      rnd: {
        blocks: [
          block(2478, 430, [redBold(text.rnd)], { lineGap: 8 }),
          block(2477, 471, [redValue(), note(text.rndRevenue), note(text.rndYoy)], { lineGap: 10 }),
        ],
      },
      technology_rnd: {
        blocks: [
          block(2478, 652, text.technologyRnd.map((value) => redBold(value)), { lineGap: 8 }),
          block(2477, 736, [redValue(), note(text.techRevenue), note(text.techYoy)], { lineGap: 10 }),
        ],
      },
      sga: { blocks: [block(2477, 941, [...text.sga.map((value) => redBold(value)), redValue(), note(text.sgaRevenue), note(text.sgaYoy)])] },
    };
  };

  const testCards = (zh) => {
    const first = zh ? '肿瘤检测' : 'Oncology tests';
    const second = zh ? '遗传病检测' : 'Hereditary tests';
    const firstYoy = zh ? '同比 +27%' : '+27% Y/Y';
    const secondYoy = zh ? '同比 +37%' : '+37% Y/Y';
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <rect x="39" y="1193" width="418" height="156" rx="40" fill="#00000a"/>
        <text x="248" y="1247" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${first}</text>
        <text x="248" y="1292" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">87,500</text>
        <text x="248" y="1332" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">${firstYoy}</text>
        <rect x="467" y="1190" width="378" height="162" rx="40" fill="#00000a"/>
        <text x="656" y="1247" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${second}</text>
        <text x="656" y="1292" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">129,500</text>
        <text x="656" y="1332" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">${secondYoy}</text>
      </g>`;
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tempus-ai-q3-fy25',
    name: 'Tempus AI · Q3 FY25',
    company: 'Tempus AI',
    meta: {
      company: 'Tempus AI',
      title: 'Tempus AI Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/tempus-ai-q3-fy25.png', width: 2667, height: 1500 },
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
        genomics_revenue: { x: 411, y: 489, width: 71, height: 249 },
        data_services: { x: 411, y: 1026, width: 71, height: 78 },
        revenue: { x: 878, y: 654, width: 70, height: 329 },
        gross_profit: { x: 1345, y: 492, width: 71, height: 206 },
        cost_of_revenue: { x: 1345, y: 1053, width: 71, height: 121 },
        operating_loss: { x: 1598, y: 878, width: 71, height: 59 },
        operating_expenses: { x: 1813, y: 652, width: 70, height: 268 },
        genomics_cost: { x: 1555, y: 1091, width: 70, height: 95 },
        data_services_cost: { x: 1558, y: 1249, width: 70, height: 23 },
        rnd: { x: 2279, y: 452, width: 71, height: 42 },
        technology_rnd: { x: 2279, y: 697, width: 71, height: 36 },
        sga: { x: 2279, y: 922, width: 71, height: 184 },
      },
      labels: labelSet(false),
    },
    nodes: [
      { id: 'genomics_revenue', col: 0, order: 0, type: 'source', label: 'Genomics', value: 253, notes: ['Oncology & Hereditary', '61% gross margin', '+13pp Y/Y'] },
      { id: 'data_services', col: 0, order: 1, type: 'source', label: ['Data &', 'Services'], value: 81, notes: ['68% gross margin', '(8pp) Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 334, notes: ['+85% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 210, notes: ['68% margin', '+9pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 124 },
      { id: 'operating_loss', col: 3, order: 2, type: 'cost', label: 'Operating loss', value: -61, notes: ['(20%) margin', '+10pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 271 },
      { id: 'genomics_cost', col: 3, order: 0, type: 'cost', label: 'Genomics', value: 99 },
      { id: 'data_services_cost', col: 3, order: 1, type: 'cost', label: ['Data &', 'Services'], value: 26 },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'R&D', value: 45, notes: ['15% of revenue', '(1pp) Y/Y'] },
      { id: 'technology_rnd', col: 5, order: 1, type: 'cost', label: ['Technology', 'R&D'], value: 38, notes: ['12% of revenue', '(5pp) Y/Y'] },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 188, notes: ['61% of revenue', '+5pp Y/Y'] },
    ],
    links: [
      { source: 'genomics_revenue', target: 'revenue', value: 253, sourceWidth: 249, targetWidth: 249, y0: 613.5, y1: 778.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'data_services', target: 'revenue', value: 81, sourceWidth: 78, targetWidth: 80, y0: 1065, y1: 943, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 210, sourceWidth: 206, targetWidth: 206, y0: 757, y1: 595, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 124, sourceWidth: 123, targetWidth: 121, y0: 921.5, y1: 1113.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 210, sourceWidth: 206, targetWidth: 206, y0: 595, y1: 755, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 61, sourceWidth: 59, targetWidth: 62, y0: 907.5, y1: 889, sourceOrder: 0, targetOrder: 1 },
      { source: 'cost_of_revenue', target: 'genomics_cost', value: 99, sourceWidth: 95, targetWidth: 95, y0: 1100.5, y1: 1138.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'data_services_cost', value: 26, sourceWidth: 26, targetWidth: 23, y0: 1161, y1: 1260.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 45, sourceWidth: 42, targetWidth: 42, y0: 673, y1: 473, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_rnd', value: 38, sourceWidth: 38, targetWidth: 36, y0: 713, y1: 715, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 188, sourceWidth: 188, targetWidth: 184, y0: 826, y1: 1014, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['TEMPUS'],
      zh: {
        name: 'Tempus AI · 2025 财年第三季度',
        meta: {
          title: 'Tempus AI 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 112,
          titleTextLength: 2020,
        },
        annotationsSvg: testCards(true),
        nodes: {
          genomics_revenue: { label: '基因组学', notes: ['肿瘤与遗传病', '毛利率 61%', '同比 +13 个百分点'] },
          data_services: { label: ['数据与', '服务'], notes: ['毛利率 68%', '同比 (8 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +85%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 68%', '同比 +9 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: '营业亏损', notes: ['利润率 (20%)', '同比 +10 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          genomics_cost: { label: '基因组学' },
          data_services_cost: { label: ['数据与', '服务'] },
          rnd: { label: '研发', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          technology_rnd: { label: '技术研发', notes: ['占收入 12%', '同比 (5 个百分点)'] },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 61%', '同比 +5 个百分点'] },
        },
        layout: { labels: labelSet(true) },
      },
    },
  });
})();
