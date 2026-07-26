/* StoneCo Q4 FY25 income statement (R$B), reconstructed from the Build-bound
 * 2667x1500 reference in input/processing/stoneco-q4-fy25.png. */
(function () {
  const BACKGROUND = '#f2f2f2';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const SOURCE = '#004132';
  const SOURCE_LINK = '#85a29c';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const CARD = '#41d600';

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

  const stoneLogoSvg = `
    <g fill="#2b2d2c" font-family="Arial Black,Arial,sans-serif">
      <text x="0" y="130" font-size="165" font-weight="900" letter-spacing="-12">stone</text>
      <text x="525" y="130" font-size="165" font-weight="900" letter-spacing="-12">co</text>
    </g>`;

  const kpiCards = (tpvLabel, tpvValue, clientsLabel, footnote, tpvGrowth, clientsGrowth, footnoteY = 1191, footnoteSize = 28) => `
    <g data-typography-role="product">
      <text x="34" y="${footnoteY}" font-size="${footnoteSize}" font-weight="400" fill="${NOTE}">${footnote}</text>
      <rect x="40" y="1204" width="379" height="148" rx="28" fill="${CARD}"/>
      <text x="229.5" y="1257" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${tpvLabel}</text>
      <text x="229.5" y="1295" text-anchor="middle" font-size="29" fill="#ffffff">${tpvValue}</text>
      <text x="229.5" y="1328" text-anchor="middle" font-size="24" fill="#ffffff">${tpvGrowth}</text>
      <rect x="426" y="1204" width="379" height="148" rx="28" fill="${CARD}"/>
      <text x="615.5" y="1257" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${clientsLabel}</text>
      <text x="615.5" y="1295" text-anchor="middle" font-size="29" fill="#ffffff">4.8M</text>
      <text x="615.5" y="1328" text-anchor="middle" font-size="24" fill="#ffffff">${clientsGrowth}</text>
    </g>`;

  const annotationsEn = kpiCards('MSMB Card TPV', 'R$135B', 'MSMB Active Clients', 'MSMB = Micro and SMB Client', '+5% Y/Y', '+15% Y/Y');
  const annotationsZh = kpiCards('MSMB 卡支付总额', '1,350 亿雷亚尔', 'MSMB 活跃客户', 'MSMB = 微型及中小企业客户', '同比 +5%', '同比 +15%', 1200, 24);

  const labelsEn = {
    transaction_services: { blocks: [
      block(399.5, 278, [line('$value', 39), line('(32%) Y/Y', 28, { color: NOTE })]),
      block(296, 352, [line('Transaction', 38, { weight: 800 }), line('& services', 38, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
    ] },
    subscription_rental: { blocks: [
      block(399.5, 481, [line('$value', 39), line('+22% Y/Y', 28, { color: NOTE })]),
      block(292, 523, [line('Subscription', 36, { weight: 800 }), line('& equipment', 36, { weight: 800 }), line('rental', 36, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
    ] },
    financial_income: { blocks: [
      block(399.5, 654, [line('$value', 39), line('+26% Y/Y', 28, { color: NOTE })]),
      block(294, 815, [line('Financial', 43, { weight: 800 }), line('income', 43, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
    ] },
    other_revenue: { blocks: [
      block(399.5, 1028, [line('$value', 39), line('+67% Y/Y', 28, { color: NOTE })]),
      block(228, 1117, [line('Other', 31, { weight: 800 })], { anchor: 'end' }),
    ] },
    revenue: { blocks: [block(1022, 464, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+13% Y/Y', 28, { color: NOTE })])] },
    pretax_income: { blocks: [block(1645, 248, [line('Pretax income', 40, { weight: 800 }), line('$value', 39), line('21% margin', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1645, 1079, [line('Costs and', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 36)])] },
    net_income: { blocks: [block(2431, 221, [line('Net income', 40, { weight: 800 }), line('$value', 39), line('19% margin', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })])] },
    tax: { blocks: [block(2431, 397, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    financial_expense: { blocks: [block(2431, 539, [line('Financial', 31, { weight: 800 }), line('$value', 31), line('31% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    cost_of_service: { blocks: [block(2431, 710, [line('Cost of service', 31, { weight: 800 }), line('$value', 31), line('24% of revenue', 28, { color: NOTE }), line('+2pp Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    selling: { blocks: [block(2431, 875, [line('Selling', 31, { weight: 800 }), line('$value', 31), line('15% of revenue', 28, { color: NOTE }), line('+0pp Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    admin: { blocks: [block(2431, 1033, [line('Admin', 31, { weight: 800 }), line('$value', 31), line('7% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    other_cost: { blocks: [block(2431, 1198, [line('Other', 31, { weight: 800 }), line('$value', 31), line('2% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
  };

  const labelsZh = {
    transaction_services: { blocks: [
      block(399.5, 287, [line('$value', 39), line('同比 (32%)', 28, { color: NOTE })]),
      block(296, 377, [line('交易与服务', 40, { weight: 800 })], { anchor: 'end' }),
    ] },
    subscription_rental: { blocks: [
      block(399.5, 492, [line('$value', 39), line('同比 +22%', 28, { color: NOTE })]),
      block(292, 542, [line('订阅与', 40, { weight: 800 }), line('设备租赁', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
    ] },
    financial_income: { blocks: [
      block(399.5, 665, [line('$value', 39), line('同比 +26%', 28, { color: NOTE })]),
      block(294, 842, [line('金融收入', 40, { weight: 800 })], { anchor: 'end' }),
    ] },
    other_revenue: { blocks: [
      block(399.5, 1040, [line('$value', 39), line('同比 +67%', 28, { color: NOTE })]),
      block(294, 1111, [line('其他', 40, { weight: 800 })], { anchor: 'end' }),
    ] },
    revenue: { blocks: [block(1022, 466, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +13%', 28, { color: NOTE })])] },
    pretax_income: { blocks: [block(1645, 245, [line('税前利润', 40, { weight: 800 }), line('$value', 39), line('利润率 21%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1645, 1083, [line('成本与费用', 36, { weight: 800 }), line('$value', 36)])] },
    net_income: { blocks: [block(2431, 217, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 19%', 28, { color: NOTE }), line('同比 (0 个百分点)', 28, { color: NOTE })])] },
    tax: { blocks: [block(2431, 403, [line('税费', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    financial_expense: { blocks: [block(2431, 534, [line('财务费用', 31, { weight: 800 }), line('$value', 31), line('占收入 31%', 28, { color: NOTE }), line('同比 (0 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
    cost_of_service: { blocks: [block(2431, 706, [line('服务成本', 31, { weight: 800 }), line('$value', 31), line('占收入 24%', 28, { color: NOTE }), line('同比 +2 个百分点', 28, { color: NOTE })], { lineGap: 8 })] },
    selling: { blocks: [block(2431, 875, [line('销售费用', 31, { weight: 800 }), line('$value', 31), line('占收入 15%', 28, { color: NOTE }), line('同比 +0 个百分点', 28, { color: NOTE })], { lineGap: 8 })] },
    admin: { blocks: [block(2431, 1032, [line('行政费用', 31, { weight: 800 }), line('$value', 31), line('占收入 7%', 28, { color: NOTE }), line('同比 (0 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
    other_cost: { blocks: [block(2431, 1194, [line('其他', 31, { weight: 800 }), line('$value', 31), line('占收入 2%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'stoneco-q4-fy25',
    name: 'StoneCo · Q4 FY25',
    company: 'StoneCo',
    meta: {
      company: 'StoneCo',
      title: 'StoneCo Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: 'R$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/stoneco-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2240,
      hidePeriodStamp: true,
      subtitle: 'in Brazilian Real',
      subtitleX: 237,
      subtitleY: 260,
      subtitleSize: 40,
      subtitleAnchor: 'start',
      logoWidth: 760,
      logoHeight: 165,
      logoY: 272,
      logoViewBox: '0 0 760 165',
      logoSvg: stoneLogoSvg,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: TITLE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: SOURCE, label: SOURCE },
        hub: { node: SOURCE, label: SOURCE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,
    nonNodeMetrics: [
      { id: 'gross_stage_cost', representation: 'data-only' },
      { id: 'gross_profit', representation: 'data-only' },
    ],
    layout: {
      scale: 1,
      nodes: {
        transaction_services: { x: 364, y: 378, width: 71, height: 45 },
        subscription_rental: { x: 364, y: 583, width: 71, height: 17 },
        financial_income: { x: 364, y: 752, width: 71, height: 232 },
        other_revenue: { x: 364, y: 1129, width: 71, height: 14 },
        revenue: { x: 986, y: 609, width: 72, height: 314 },
        pretax_income: { x: 1609, y: 426, width: 72, height: 64 },
        operating_expenses: { x: 1609, y: 813, width: 72, height: 246 },
        net_income: { x: 2232, y: 250, width: 71, height: 58 },
        tax: { x: 2232, y: 436, width: 71, height: 4 },
        financial_expense: { x: 2232, y: 560, width: 71, height: 95 },
        cost_of_service: { x: 2232, y: 743, width: 71, height: 75 },
        selling: { x: 2232, y: 917, width: 71, height: 45 },
        admin: { x: 2232, y: 1072, width: 71, height: 19 },
        other_cost: { x: 2232, y: 1233, width: 71, height: 4 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'transaction_services', col: 0, order: 0, type: 'source', label: ['Transaction', '& services'], value: 0.5, notes: ['(32%) Y/Y'], color: SOURCE, labelColor: SOURCE, linkTint: SOURCE_LINK },
      { id: 'subscription_rental', col: 0, order: 1, type: 'source', label: ['Subscription', '& equipment', 'rental'], value: 0.2, notes: ['+22% Y/Y'], color: SOURCE, labelColor: SOURCE, linkTint: SOURCE_LINK },
      { id: 'financial_income', col: 0, order: 2, type: 'source', label: ['Financial', 'income'], value: 2.8, notes: ['+26% Y/Y'], color: SOURCE, labelColor: SOURCE, linkTint: SOURCE_LINK },
      { id: 'other_revenue', col: 0, order: 3, type: 'source', label: 'Other', value: 0.2, notes: ['+67% Y/Y'], color: SOURCE, labelColor: SOURCE, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.7, notes: ['+13% Y/Y'], color: SOURCE, labelColor: SOURCE, linkTint: SOURCE_LINK },
      { id: 'pretax_income', col: 2, order: 0, type: 'profit', label: 'Pretax income', value: 0.8, notes: ['21% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Costs and', 'expenses'], value: 2.9 },
      { id: 'net_income', col: 3, order: 0, type: 'profit', label: 'Net income', value: 0.7, notes: ['19% margin', '(0pp) Y/Y'] },
      { id: 'tax', col: 3, order: 1, type: 'cost', label: 'Tax', value: 0.1 },
      { id: 'financial_expense', col: 3, order: 2, type: 'cost', label: 'Financial', value: 1.2, notes: ['31% of revenue', '(0pp) Y/Y'] },
      { id: 'cost_of_service', col: 3, order: 3, type: 'cost', label: 'Cost of service', value: 0.9, notes: ['24% of revenue', '+2pp Y/Y'] },
      { id: 'selling', col: 3, order: 4, type: 'cost', label: 'Selling', value: 0.6, notes: ['15% of revenue', '+0pp Y/Y'] },
      { id: 'admin', col: 3, order: 5, type: 'cost', label: 'Admin', value: 0.2, notes: ['7% of revenue', '(0pp) Y/Y'] },
      { id: 'other_cost', col: 3, order: 6, type: 'cost', label: 'Other', value: 0.1, notes: ['2% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'transaction_services', target: 'revenue', value: 0.5, sourceWidth: 45, targetWidth: 43, y0: 400.5, y1: 630.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'subscription_rental', target: 'revenue', value: 0.2, sourceWidth: 17, targetWidth: 17, y0: 591.5, y1: 660.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'financial_income', target: 'revenue', value: 2.8, sourceWidth: 232, targetWidth: 237, y0: 868, y1: 787.5, sourceOrder: 0, targetOrder: 2, linkTint: SOURCE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.2, sourceWidth: 14, targetWidth: 17, y0: 1136, y1: 914.5, sourceOrder: 0, targetOrder: 3, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'pretax_income', value: 0.8, sourceWidth: 64, targetWidth: 64, y0: 641, y1: 458, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 2.9, sourceWidth: 250, targetWidth: 246, y0: 798, y1: 936, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_income', value: 0.7, sourceWidth: 58, targetWidth: 58, y0: 455, y1: 279, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 0.1, sourceWidth: 6, targetWidth: 4, y0: 487, y1: 438, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'financial_expense', value: 1.2, sourceWidth: 95, targetWidth: 95, y0: 860.5, y1: 607.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'cost_of_service', value: 0.9, sourceWidth: 75, targetWidth: 75, y0: 945.5, y1: 780.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'selling', value: 0.6, sourceWidth: 45, targetWidth: 45, y0: 1005.5, y1: 939.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'admin', value: 0.2, sourceWidth: 19, targetWidth: 19, y0: 1037.5, y1: 1081.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_cost', value: 0.1, sourceWidth: 12, targetWidth: 4, y0: 1053, y1: 1235, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'StoneCo · 2025 财年第四季度',
        meta: {
          title: 'StoneCo 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          subtitle: '单位：巴西雷亚尔',
          titleSize: 108,
          titleTextLength: 1900,
        },
        nodes: {
          transaction_services: { label: '交易与服务', notes: ['同比 (32%)'] },
          subscription_rental: { label: ['订阅与', '设备租赁'], notes: ['同比 +22%'] },
          financial_income: { label: '金融收入', notes: ['同比 +26%'] },
          other_revenue: { label: '其他', notes: ['同比 +67%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          pretax_income: { label: '税前利润', notes: ['利润率 21%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '成本与费用' },
          net_income: { label: '净利润', notes: ['利润率 19%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          financial_expense: { label: '财务费用', notes: ['占收入 31%', '同比 (0 个百分点)'] },
          cost_of_service: { label: '服务成本', notes: ['占收入 24%', '同比 +2 个百分点'] },
          selling: { label: '销售费用', notes: ['占收入 15%', '同比 +0 个百分点'] },
          admin: { label: '行政费用', notes: ['占收入 7%', '同比 (0 个百分点)'] },
          other_cost: { label: '其他', notes: ['占收入 2%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labelsZh },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();
