/* Tempus AI Q2 FY26 income statement ($M), reconstructed from the processed
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
      diagnostics: '诊断业务', diagnosticsValueYoy: '同比 +20%', diagnosticsNote: '肿瘤与遗传病', diagnosticsMargin: '毛利率 63%', diagnosticsYoy: '同比 +4 个百分点',
      dataApplications: ['数据与', '应用'], dataValueYoy: '同比 +28%', dataMargin: '毛利率 70%', dataYoy: '同比 (3 个百分点)',
      revenue: '收入', revenueYoy: '同比 +22%', gross: '毛利润', grossMargin: '利润率 64%', grossYoy: '同比 +2 个百分点',
      cost: ['收入', '成本'], opLoss: '营业亏损', lossMargin: '利润率 (20%)', lossYoy: '同比 (0 个百分点)',
      opex: ['营业', '费用'], diagnosticsCost: '诊断业务', dataCost: ['数据与', '服务'],
      rnd: '研发', technologyRnd: ['技术', '研发'], sga: ['销售、一般及', '行政费用'],
      rndRevenue: '占收入 14%', rndYoy: '同比 +1 个百分点', techRevenue: '占收入 11%', techYoy: '同比 +1 个百分点',
      sgaRevenue: '占收入 59%', sgaYoy: '同比 +2 个百分点',
    } : {
      diagnostics: 'Diagnostics', diagnosticsValueYoy: '+20% Y/Y', diagnosticsNote: 'Oncology & Hereditary', diagnosticsMargin: '63% gross margin', diagnosticsYoy: '+4pp Y/Y',
      dataApplications: ['Data &', 'Applications'], dataValueYoy: '+28% Y/Y', dataMargin: '70% gross margin', dataYoy: '(3pp) Y/Y',
      revenue: 'Revenue', revenueYoy: '+22% Y/Y', gross: 'Gross profit', grossMargin: '64% margin', grossYoy: '+2pp Y/Y',
      cost: ['Cost of', 'revenue'], opLoss: 'Operating loss', lossMargin: '(20%) margin', lossYoy: '(0pp) Y/Y',
      opex: ['Operating', 'expenses'], diagnosticsCost: 'Diagnostics', dataCost: ['Data &', 'Services'],
      rnd: 'R&D', technologyRnd: ['Technology', 'R&D'], sga: ['SG&A'],
      rndRevenue: '14% of revenue', rndYoy: '+1pp Y/Y', techRevenue: '11% of revenue', techYoy: '+1pp Y/Y',
      sgaRevenue: '59% of revenue', sgaYoy: '+2pp Y/Y',
    };
    const redBold = (value, size = 31) => line(value, size, { weight: 800, color: RED_LABEL });
    const redValue = () => line('$value', 31, { color: RED_LABEL });
    const note = (value) => line(value, 29, { color: NOTE });
    return {
      diagnostics: {
        blocks: [
          block(445.5, 386, [line('$value', 39), line(text.diagnosticsValueYoy, 29, { color: NOTE })]),
          block(249.5, 535, [line(text.diagnostics, 40, { weight: 800 }), line(text.diagnosticsNote, 29, { color: NOTE }), line(text.diagnosticsMargin, 29, { color: NOTE }), line(text.diagnosticsYoy, 29, { color: NOTE })], { lineGap: 11 }),
        ],
      },
      data_applications: {
        blocks: [
          block(445.5, 891, [line('$value', 39), line(text.dataValueYoy, 29, { color: NOTE })]),
          block(249.5, 982, [line(text.dataApplications[0], 40, { weight: 800 }), line(text.dataApplications[1], 40, { weight: 800 }), line(text.dataMargin, 29, { color: NOTE }), line(text.dataYoy, 29, { color: NOTE })], { lineGap: 12 }),
        ],
      },
      revenue: { blocks: [block(912, 480, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), line(text.revenueYoy, 29, { color: NOTE })], { lineGap: 13 })] },
      gross_profit: { blocks: [block(1379.5, 296, [line(text.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(text.grossMargin, 29, { color: NOTE }), line(text.grossYoy, 29, { color: NOTE })], { lineGap: 11 })] },
      cost_of_revenue: { blocks: [block(1379.5, 1130, [...text.cost.map((value) => redBold(value, 34)), line('$value', 34, { color: RED_LABEL })], { lineGap: 13 })] },
      operating_loss: { blocks: [block(1450, 816, [redBold(text.opLoss, 40), line('$value', 40, { color: RED_LABEL }), note(text.lossMargin), note(text.lossYoy)], { lineGap: 7 })] },
      operating_expenses: { blocks: [block(1847, 480, [...text.opex.map((value) => redBold(value, 34)), line('$value', 34, { color: RED_LABEL })], { lineGap: 12 })] },
      diagnostics_cost: { blocks: [block(1669, 1078, [redBold(text.diagnosticsCost), redValue()], { anchor: 'start' })] },
      data_services_cost: { blocks: [
        block(1693, 1207, text.dataCost.map((value) => redBold(value)), { anchor: 'start', lineGap: 13 }),
        block(1753, 1293, [redValue()]),
      ] },
      rnd: { blocks: [block(2477, 437, [redBold(text.rnd), redValue(), note(text.rndRevenue), note(text.rndYoy)], { lineGap: 10 })] },
      technology_rnd: { blocks: [block(2477, 635, [...text.technologyRnd.map((value) => redBold(value)), redValue(), note(text.techRevenue), note(text.techYoy)], { lineGap: 9 })] },
      sga: { blocks: [block(2477, 878, [...text.sga.map((value) => redBold(value)), redValue(), note(text.sgaRevenue), note(text.sgaYoy)], { lineGap: 9 })] },
    };
  };

  const testCards = (zh) => {
    const first = zh ? '肿瘤检测' : 'Oncology tests';
    const second = zh ? '遗传病检测' : 'Hereditary tests';
    const firstYoy = zh ? '同比 +31%' : '+31% Y/Y';
    const secondYoy = zh ? '同比 +2%' : '+2% Y/Y';
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <rect x="39" y="1193" width="418" height="156" rx="40" fill="#00000a"/>
        <text x="248" y="1247" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${first}</text>
        <text x="248" y="1292" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">96,500</text>
        <text x="248" y="1332" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">${firstYoy}</text>
        <rect x="467" y="1190" width="378" height="162" rx="40" fill="#00000a"/>
        <text x="656" y="1247" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${second}</text>
        <text x="656" y="1292" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">141,500</text>
        <text x="656" y="1332" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">${secondYoy}</text>
      </g>`;
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tempus-ai-q2-fy26',
    name: 'Tempus AI · Q2 FY26',
    company: 'Tempus AI',
    meta: {
      company: 'Tempus AI',
      title: 'Tempus AI Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/tempus-ai-q2-fy26.png', width: 2667, height: 1500 },
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
        diagnostics: { x: 410, y: 482, width: 71, height: 237 },
        data_applications: { x: 410, y: 981, width: 71, height: 76 },
        revenue: { x: 877, y: 636, width: 70, height: 314 },
        gross_profit: { x: 1344, y: 481, width: 71, height: 202 },
        cost_of_revenue: { x: 1344, y: 1007, width: 71, height: 110 },
        operating_loss: { x: 1602, y: 858, width: 71, height: 60 },
        operating_expenses: { x: 1812, y: 632, width: 70, height: 264 },
        diagnostics_cost: { x: 1577, y: 1074, width: 70, height: 86 },
        data_services_cost: { x: 1569, y: 1243, width: 70, height: 21 },
        rnd: { x: 2278, y: 464, width: 71, height: 41 },
        technology_rnd: { x: 2278, y: 675, width: 71, height: 34 },
        sga: { x: 2278, y: 860, width: 71, height: 184 },
      },
      labels: labelSet(false),
    },
    nodes: [
      { id: 'diagnostics', col: 0, order: 0, type: 'source', label: 'Diagnostics', value: 289, notes: ['Oncology & Hereditary', '63% gross margin', '+4pp Y/Y'] },
      { id: 'data_applications', col: 0, order: 1, type: 'source', label: ['Data &', 'Applications'], value: 93, notes: ['70% gross margin', '(3pp) Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 382, notes: ['+22% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 247, notes: ['64% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 136 },
      { id: 'operating_loss', col: 3, order: 2, type: 'cost', label: ['Operating', 'loss'], value: -76, notes: ['(20%) margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 322 },
      { id: 'diagnostics_cost', col: 3, order: 0, type: 'cost', label: 'Diagnostics', value: 108 },
      { id: 'data_services_cost', col: 3, order: 1, type: 'cost', label: ['Data &', 'Services'], value: 28 },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'R&D', value: 53, notes: ['14% of revenue', '+1pp Y/Y'] },
      { id: 'technology_rnd', col: 5, order: 1, type: 'cost', label: ['Technology', 'R&D'], value: 44, notes: ['11% of revenue', '+1pp Y/Y'] },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 226, notes: ['59% of revenue', '+2pp Y/Y'] },
    ],
    links: [
      { source: 'diagnostics', target: 'revenue', value: 289, sourceWidth: 237, targetWidth: 237, y0: 600.5, y1: 754.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'data_applications', target: 'revenue', value: 93, sourceWidth: 76, targetWidth: 77, y0: 1019, y1: 911.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 247, sourceWidth: 202, targetWidth: 202, y0: 737, y1: 582, sourceOrder: 0, targetOrder: 0, linkTint: { left: HUB_PROFIT_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 136, sourceWidth: 112, targetWidth: 110, y0: 894, y1: 1062, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 247, sourceWidth: 202, targetWidth: 204, y0: 582, y1: 734, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 76, sourceWidth: 60, targetWidth: 60, y0: 888, y1: 866, sourceOrder: 0, targetOrder: 1 },
      { source: 'cost_of_revenue', target: 'diagnostics_cost', value: 108, sourceWidth: 87, targetWidth: 86, y0: 1050.5, y1: 1117, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'data_services_cost', value: 28, sourceWidth: 23, targetWidth: 21, y0: 1105.5, y1: 1253.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 53, sourceWidth: 42, targetWidth: 41, y0: 653, y1: 484.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_rnd', value: 44, sourceWidth: 34, targetWidth: 34, y0: 691, y1: 692, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 226, sourceWidth: 188, targetWidth: 184, y0: 802, y1: 952, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['TEMPUS'],
      zh: {
        name: 'Tempus AI · 2026 财年第二季度',
        meta: {
          title: 'Tempus AI 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleSize: 112,
          titleTextLength: 2020,
        },
        annotationsSvg: testCards(true),
        nodes: {
          diagnostics: { label: '诊断业务', notes: ['肿瘤与遗传病', '毛利率 63%', '同比 +4 个百分点'] },
          data_applications: { label: ['数据与', '应用'], notes: ['毛利率 70%', '同比 (3 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +22%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 64%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: '营业亏损', notes: ['利润率 (20%)', '同比 (0 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          diagnostics_cost: { label: '诊断业务' },
          data_services_cost: { label: ['数据与', '服务'] },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 +1 个百分点'] },
          technology_rnd: { label: '技术研发', notes: ['占收入 11%', '同比 +1 个百分点'] },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 59%', '同比 +2 个百分点'] },
        },
        layout: { labels: labelSet(true) },
      },
    },
  });
})();
