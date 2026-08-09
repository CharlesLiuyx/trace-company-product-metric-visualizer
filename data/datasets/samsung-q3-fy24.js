/* ====================================================================
 * Samsung - Q3 FY24 income statement (KRW T)
 * Fixed d3-sankey reconstruction of input/processed/samsung-q3-fy24.png.
 * Source-painted short faces (Other and Tax included) remain real nodes.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#1428a0';
  const BLUE_LINK = '#8e97cd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="198" y="272" font-size="42" font-weight="800" fill="${TITLE}">In KRW trillion</text>
      ${icon('samsungCompanyWordmark', 672, 338, 1.06)}
      ${icon('samsungDeviceExperienceCluster', 72, 404, 1.03)}
      ${icon('samsungDeviceSolutionsChipCluster', 283, 736, 1.05)}
      ${icon('samsungDisplayWordmark', 120, 1069, 0.96)}
      ${icon('samsungHarmanWordmark', 118, 1158, 0.88)}
    </g>`;

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
    lineGap: options.lineGap || 8,
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}),
    lines,
  });

  const labels = (zh) => {
    const t = zh ? {
      deviceExperience: '设备体验',
      deviceExperienceDetail: ['数字电视', '冰箱', '手机', '通信系统'],
      deviceSolutions: '设备解决方案',
      deviceSolutionsDetail: ['存储器、晶圆代工', '和 System LSI'],
      dxYoy: '同比 +2%', dsYoy: '同比 +78%', displayYoy: '同比 (3%)', harmanYoy: '同比 (7%)',
      sales: '销售额', salesYoy: '同比 +17%', eliminations: '抵销', gross: '毛利润',
      grossMargin: '利润率 38%', grossYoy: '同比 +7 个百分点', cost: ['收入', '成本'],
      operatingProfit: '营业利润', operatingMargin: '利润率 12%', operatingYoy: '同比 +8 个百分点',
      operatingExpenses: ['运营', '费用'], other: '其他', net: '净利润',
      netMargin: '利润率 13%', netYoy: '同比 +4 个百分点', tax: '税费',
      sga: ['销售、一般', '及行政'], sgaRevenue: '占收入 15%', sgaYoy: '同比 (2 个百分点)',
      rnd: ['研究与', '开发'], rndRevenue: '占收入 11%', rndYoy: '同比 +1 个百分点',
    } : {
      deviceExperience: 'Device eXperience',
      deviceExperienceDetail: ['Digital TVs', 'Refrigerators', 'Mobile phones', 'Communication systems'],
      deviceSolutions: 'Device Solutions',
      deviceSolutionsDetail: ['Memory, Foundry,', '& System LSI'],
      dxYoy: '+2% Y/Y', dsYoy: '+78% Y/Y', displayYoy: '(3%) Y/Y', harmanYoy: '(7%) Y/Y',
      sales: 'Sales', salesYoy: '+17% Y/Y', eliminations: 'Eliminations', gross: 'Gross profit',
      grossMargin: '38% margin', grossYoy: '+7pp Y/Y', cost: ['Cost of', 'revenue'],
      operatingProfit: 'Operating profit', operatingMargin: '12% margin', operatingYoy: '+8pp Y/Y',
      operatingExpenses: ['Operating', 'expenses'], other: 'Other', net: 'Net profit',
      netMargin: '13% margin', netYoy: '+4pp Y/Y', tax: 'Tax',
      sga: ['Sales, general', '& admin'], sgaRevenue: '15% of revenue', sgaYoy: '(2pp) Y/Y',
      rnd: ['Research &', 'development'], rndRevenue: '11% of revenue', rndYoy: '+1pp Y/Y',
    };

    return {
      device_experience: {
        blocks: [
          block(471, 428, [line('$value', 38, { color: BLUE }), line(t.dxYoy, 27, { color: NOTE })]),
          block(401, 474, [
            line(t.deviceExperience, zh ? 32 : 39, { weight: 800, color: BLUE }),
            ...t.deviceExperienceDetail.map((text) => line(text, zh ? 26 : 28, { color: NOTE })),
          ], { anchor: 'end', lineGap: 12, semanticRole: 'side-description' }),
        ],
      },
      device_solutions: {
        blocks: [
          block(471, 732, [line('$value', 38, { color: BLUE }), line(t.dsYoy, 27, { color: NOTE })]),
          block(410, 857, [
            line(t.deviceSolutions, zh ? 32 : 40, { weight: 800, color: BLUE }),
            ...t.deviceSolutionsDetail.map((text) => line(text, zh ? 26 : 28, { color: NOTE })),
          ], { anchor: 'end', semanticRole: 'side-description' }),
        ],
      },
      samsung_display: { blocks: [block(471, 976, [line('$value', 38, { color: BLUE }), line(t.displayYoy, 27, { color: NOTE })])] },
      harman: { blocks: [block(471, 1179, [line('$value', 38, { color: BLUE }), line(t.harmanYoy, 27, { color: NOTE })])] },
      segment_sales: { blocks: [] },
      revenue: { blocks: [block(1217, 660, [
        line(t.sales, 40, { weight: 800, color: BLUE }), line('$value', 39, { color: BLUE }), line(t.salesYoy, 28, { color: NOTE }),
      ], { lineGap: 10 })] },
      eliminations: { blocks: [block(1214, 1242, [
        line(t.eliminations, zh ? 31 : 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }),
      ])] },
      gross_profit: { blocks: [block(1590, 501, [
        line(t.gross, zh ? 38 : 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }),
        line(t.grossMargin, 28, { color: NOTE }), line(t.grossYoy, zh ? 25 : 28, { color: NOTE }),
      ], { lineGap: 9 })] },
      cost_of_revenue: { blocks: [block(1593, 1171, [
        ...t.cost.map((text) => line(text, 36, { weight: 800, color: RED_LABEL })), line('$value', 35, { color: RED_LABEL }),
      ])] },
      operating_profit: { blocks: [block(1959, 409, [
        line(t.operatingProfit, zh ? 37 : 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }),
        line(t.operatingMargin, 28, { color: NOTE }), line(t.operatingYoy, zh ? 25 : 28, { color: NOTE }),
      ], { lineGap: 9 })] },
      operating_expenses: { blocks: [block(1959, 895, [
        ...t.operatingExpenses.map((text) => line(text, 36, { weight: 800, color: RED_LABEL })), line('$value', 35, { color: RED_LABEL }),
      ])] },
      other: { blocks: [block(2224, 625, [
        line(t.other, 31, { weight: 800, color: GREEN_LABEL }), line('$value', 30, { color: GREEN_LABEL }),
      ], { lineGap: 7 })] },
      net_profit: { blocks: [block(2401, 480, [
        line(t.net, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }),
        line(t.netMargin, 28, { color: NOTE }), line(t.netYoy, zh ? 25 : 28, { color: NOTE }),
      ], { anchor: 'start', lineGap: 9 })] },
      tax: { blocks: [block(2493, 718, [
        line(t.tax, 31, { weight: 800, color: RED_LABEL }), line('$value', 30, { color: RED_LABEL }),
      ])] },
      sga: { blocks: [block(2515, 889, [
        ...t.sga.map((text) => line(text, zh ? 29 : 31, { weight: 800, color: RED_LABEL })),
        line('$value', 30, { color: RED_LABEL }), line(t.sgaRevenue, 28, { color: NOTE }), line(t.sgaYoy, zh ? 25 : 28, { color: NOTE }),
      ])] },
      rnd: { blocks: [block(2512, 1130, [
        ...t.rnd.map((text) => line(text, zh ? 29 : 31, { weight: 800, color: RED_LABEL })),
        line('$value', 30, { color: RED_LABEL }), line(t.rndRevenue, 28, { color: NOTE }), line(t.rndYoy, zh ? 25 : 28, { color: NOTE }),
      ])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsung-q3-fy24',
    name: 'Samsung · Q3 FY24',
    company: 'Samsung',
    meta: {
      company: 'Samsung',
      title: 'Samsung Q3 FY24 Income Statement',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '',
      unit: 'T',
      decimals: 1,
      referenceImage: { src: 'input/processed/samsung-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2295,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 3.3,
      nodes: {
        device_experience: { x: 435, y: 526, width: 72, height: 150 },
        device_solutions: { x: 435, y: 822, width: 72, height: 97 },
        samsung_display: { x: 435, y: 1067, width: 72, height: 26 },
        harman: { x: 435, y: 1268, width: 72, height: 11 },
        segment_sales: { x: 809, y: 746, width: 72, height: 288 },
        revenue: { x: 1180, y: 807, width: 72, height: 265 },
        eliminations: { x: 1178, y: 1198, width: 72, height: 21 },
        gross_profit: { x: 1554, y: 684, width: 72, height: 100 },
        cost_of_revenue: { x: 1557, y: 988, width: 72, height: 163 },
        operating_profit: { x: 1923, y: 593, width: 72, height: 30 },
        operating_expenses: { x: 1923, y: 804, width: 72, height: 68 },
        other: { x: 2188, y: 603, width: 72, height: 3 },
        net_profit: { x: 2304, y: 514, width: 72, height: 33 },
        tax: { x: 2304, y: 753, width: 72, height: 4 },
        sga: { x: 2304, y: 923, width: 72, height: 38 },
        rnd: { x: 2304, y: 1150, width: 72, height: 28 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'device_experience', col: 0, order: 0, type: 'source', label: 'Device eXperience', value: 45.0, valueText: '45.0T', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'device_solutions', col: 0, order: 1, type: 'source', label: 'Device Solutions', value: 29.3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'samsung_display', col: 0, order: 2, type: 'source', label: 'Samsung Display', value: 8.0, valueText: '8.0T', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'harman', col: 0, order: 3, type: 'source', label: 'Harman', value: 3.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 85.8, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 79.1, notes: ['+17% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -6.7, valueText: '(6.7T)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 30.0, valueText: '30.0T', notes: ['38% margin', '+7pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 49.1, valueText: '(49.1T)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 9.2, notes: ['12% margin', '+8pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 20.8, valueText: '(20.8T)' },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 1.1 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 10.1, notes: ['13% margin', '+4pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.2, valueText: '(0.2T)', color: RED_LINK, labelColor: RED_LABEL },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: ['Sales, general', '& admin'], value: 12.0, valueText: '(12.0T)', notes: ['15% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: ['Research &', 'development'], value: 8.9, valueText: '(8.9T)', notes: ['11% of revenue', '+1pp Y/Y'] },
    ],
    links: [
      { source: 'device_experience', target: 'segment_sales', value: 45.0, sourceWidth: 150, targetWidth: 151, y0: 601, y1: 821.5, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'device_solutions', target: 'segment_sales', value: 29.3, sourceWidth: 97, targetWidth: 98, y0: 870.5, y1: 946, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'samsung_display', target: 'segment_sales', value: 8.0, sourceWidth: 26, targetWidth: 27, y0: 1080, y1: 1008.5, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'harman', target: 'segment_sales', value: 3.5, sourceWidth: 11, targetWidth: 12, y0: 1273.5, y1: 1028, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 79.1, sourceWidth: 265, targetWidth: 265, y0: 878.5, y1: 939.5, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'eliminations', value: 6.7, sourceWidth: 23, targetWidth: 21, y0: 1022.5, y1: 1208.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 30.0, sourceWidth: 100, targetWidth: 100, y0: 857, y1: 734, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 49.1, sourceWidth: 165, targetWidth: 163, y0: 989.5, y1: 1069.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 9.2, sourceWidth: 30, targetWidth: 30, y0: 699, y1: 608, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 20.8, sourceWidth: 70, targetWidth: 68, y0: 749, y1: 838, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 9.0, sourceWidth: 29, targetWidth: 30, y0: 607.5, y1: 529, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 1, targetWidth: 4, y0: 622.5, y1: 755, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 1.1, sourceWidth: 3, targetWidth: 3, y0: 604.5, y1: 545.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 12.0, sourceWidth: 39, targetWidth: 38, y0: 823.5, y1: 942, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 8.9, sourceWidth: 29, targetWidth: 28, y0: 857.5, y1: 1164, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['In KRW trillion', 'SAMSUNG DISPLAY', 'A SAMSUNG COMPANY'],
      zh: {
        name: 'Samsung · 2024 财年第三季度',
        meta: {
          title: 'Samsung 2024 财年第三季度利润表',
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
        },
        nodes: {
          device_experience: { label: '设备体验' }, device_solutions: { label: '设备解决方案' },
          samsung_display: { label: '三星显示' }, harman: { label: '哈曼' },
          revenue: { label: '销售额', notes: ['同比 +17%'] }, eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 38%', '同比 +7 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +8 个百分点'] }, operating_expenses: { label: '运营费用' },
          other: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 13%', '同比 +4 个百分点'] },
          tax: { label: '税费' }, sga: { label: '销售、一般及行政', notes: ['占收入 15%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
