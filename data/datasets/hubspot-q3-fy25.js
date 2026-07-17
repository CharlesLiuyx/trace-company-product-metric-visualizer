/* HubSpot Q3 FY25 income statement ($M), measured against its processed source. */
(function () {
  const TITLE = '#155077';
  const DARK = '#33475b';
  const NOTE = '#666666';
  const GRAY_LINK = '#9ca5ae';
  const ORANGE = '#ff7a59';
  const ORANGE_LINK = '#f7bcad';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2463;

  const kpiCard = (line1Label, line1Value, line2Label, line2Value) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="148" y="1227" width="568" height="111" rx="29" fill="${DARK}"/>
      <text x="432" y="1281" text-anchor="middle" font-size="30" fill="#ffffff">
        <tspan font-weight="800">${line1Label}</tspan><tspan font-weight="500"> ${line1Value}</tspan>
      </text>
      <text x="432" y="1321" text-anchor="middle" font-size="30" fill="#ffffff">
        <tspan font-weight="800">${line2Label}</tspan><tspan font-weight="500"> ${line2Value}</tspan>
      </text>
    </g>`;

  const annotationsEn = kpiCard('Customers', '279K +17% Y/Y', 'Average Revenue', '$11,578 +3% Y/Y');
  const annotationsZh = kpiCard('客户数', '279K，同比 +17%', '平均收入', '$11,578，同比 +3%');

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hubspot-q3-fy25',
    name: 'HubSpot · Q3 FY25',
    company: 'HubSpot',
    meta: {
      company: 'HubSpot',
      title: 'HubSpot Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/hubspot-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2260,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: GREEN_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/hubspot/company-wordmark.png',
        x: 580,
        y: 245,
        width: 620,
        height: 180,
      },
    ],

    layout: {
      scale: 1,
      nodes: {
        subscription: { x: 389, y: 575, width: 71, height: 310 },
        professional_services: { x: 389, y: 1108, width: 71, height: 5 },
        revenue: { x: 856, y: 686, width: 70, height: 318 },
        gross_profit: { x: 1323, y: 580, width: 71, height: 265 },
        cost_of_revenue: { x: 1323, y: 1038, width: 71, height: 51 },
        operating_profit: { x: 1791, y: 509, width: 70, height: 3 },
        operating_expenses: { x: 1791, y: 675, width: 70, height: 261 },
        other: { x: 2150, y: 471, width: 71, height: 3 },
        net_profit: { x: 2258, y: 397, width: 71, height: 4 },
        tax: { x: 2258, y: 619, width: 71, height: 2 },
        sm: { x: 2258, y: 717, width: 71, height: 138 },
        rnd: { x: 2258, y: 943, width: 71, height: 87 },
        ga: { x: 2258, y: 1118, width: 71, height: 30 },
        restructuring: { x: 2258, y: 1228, width: 71, height: 2 },
      },
      labels: {
        subscription: { blocks: [
          { x: 424.5, top: 474, anchor: 'middle', lineGap: 13, lines: [
            { text: '$value', size: 40, weight: 400 },
            { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 333, top: 710, anchor: 'end', lineGap: 10, lines: [
            { text: 'Subscription', size: 40, weight: 800 },
            { text: '85% gross margin', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        professional_services: { blocks: [
          { x: 424.5, top: 1005, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 40, weight: 400, color: ORANGE },
            { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 335, top: 1058, anchor: 'end', lineGap: 10, lines: [
            { text: 'Professional', size: 40, weight: 800, color: ORANGE },
            { text: 'services', size: 40, weight: 800, color: ORANGE },
            { text: '8% gross margin', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [
          { x: 891, top: 542, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Revenue', size: 40, weight: 800 },
            { text: '$value', size: 40, weight: 400 },
            { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        gross_profit: { blocks: [
          { x: 1358.5, top: 396, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Gross profit', size: 40, weight: 800 },
            { text: '$value', size: 40, weight: 400 },
            { text: '84% margin', size: 29, weight: 400, color: NOTE },
            { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        cost_of_revenue: { blocks: [
          { x: 1358.5, top: 1100, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Cost of', size: 37, weight: 800 },
            { text: 'revenue', size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ] },
        ] },
        operating_profit: { blocks: [
          { x: 1826, top: 326, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Operating profit', size: 40, weight: 800 },
            { text: '$value', size: 40, weight: 400 },
            { text: '1% margin', size: 29, weight: 400, color: NOTE },
            { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        operating_expenses: { blocks: [
          { x: 1826, top: 959, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Operating', size: 40, weight: 800 },
            { text: 'expenses', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
          ] },
        ] },
        other: { blocks: [
          { x: 2185.5, top: 482, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Other', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
        net_profit: { blocks: [
          { x: 2370, top: 329, anchor: 'start', lineGap: 8, lines: [
            { text: 'Net profit', size: 40, weight: 800 },
            { text: '$value', size: 40, weight: 400 },
            { text: '2% margin', size: 29, weight: 400, color: NOTE },
            { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        tax: { blocks: [
          { x: RIGHT_LABEL_X, top: 576, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Tax', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
        sm: { blocks: [
          { x: RIGHT_LABEL_X, top: 729, anchor: 'middle', lineGap: 8, lines: [
            { text: 'S&M', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '44% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        rnd: { blocks: [
          { x: RIGHT_LABEL_X, top: 895, anchor: 'middle', lineGap: 8, lines: [
            { text: 'R&D', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '28% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        ga: { blocks: [
          { x: RIGHT_LABEL_X, top: 1053, anchor: 'middle', lineGap: 8, lines: [
            { text: 'G&A', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        restructuring: { blocks: [
          { x: RIGHT_LABEL_X, top: 1214, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Restructuring', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '0% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
      },
    },

    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 792, notes: ['+21% Y/Y', '85% gross margin'], color: DARK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: 'Professional services', value: 18, notes: ['+19% Y/Y', '8% gross margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 810, notes: ['+21% Y/Y'], color: DARK, labelColor: DARK, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 676, notes: ['84% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 134 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 11, notes: ['1% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 665 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 12 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 17, notes: ['2% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 7 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 355, notes: ['44% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 228, notes: ['28% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 81, notes: ['10% of revenue', '(2pp) Y/Y'] },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 1, notes: ['0% of revenue', '(0pp) Y/Y'] },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 792, sourceWidth: 310, targetWidth: 311, y0: 730, y1: 841.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'professional_services', target: 'revenue', value: 18, sourceWidth: 5, targetWidth: 7, y0: 1110.5, y1: 1000.5, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 676, sourceWidth: 265, targetWidth: 265, y0: 818.5, y1: 712.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 134, sourceWidth: 53, targetWidth: 51, y0: 977.5, y1: 1063.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 11, sourceWidth: 4, targetWidth: 3, y0: 582, y1: 510.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 665, sourceWidth: 261, targetWidth: 261, y0: 714.5, y1: 805.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 11, sourceWidth: 2, targetWidth: 3, y0: 510, y1: 398.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 7, sourceWidth: 1, targetWidth: 2, y0: 511.5, y1: 620, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 12, sourceWidth: 3, targetWidth: 2, y0: 472.5, y1: 400, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 355, sourceWidth: 139, targetWidth: 138, y0: 744.5, y1: 786, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 228, sourceWidth: 89, targetWidth: 87, y0: 858.5, y1: 986.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 81, sourceWidth: 32, targetWidth: 30, y0: 919, y1: 1133, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 1, sourceWidth: 0.5, targetWidth: 2, y0: 935.75, y1: 1229, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],

    i18n: {
      zh: {
        name: 'HubSpot · 2025 财年第三季度',
        meta: {
          title: 'HubSpot 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 116,
          titleTextLength: 1880,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +21%', '毛利率 85%'] },
          professional_services: { label: '专业服务', notes: ['同比 +19%', '毛利率 8%'] },
          revenue: { label: '收入', notes: ['同比 +21%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 84%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 +1 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 44%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 28%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
          restructuring: { label: '重组费用', notes: ['占收入 0%', '同比 (0 个百分点)'] },
        },
        layout: { labels: {
          subscription: { blocks: [
            { x: 424.5, top: 474, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +21%', size: 29, weight: 400, color: NOTE }] },
            { x: 333, top: 710, anchor: 'end', lineGap: 10, lines: [{ text: '订阅', size: 40, weight: 800 }, { text: '毛利率 85%', size: 29, weight: 400, color: NOTE }] },
          ] },
          professional_services: { blocks: [
            { x: 424.5, top: 1005, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400, color: ORANGE }, { text: '同比 +19%', size: 29, weight: 400, color: NOTE }] },
            { x: 333, top: 1075, anchor: 'end', lineGap: 10, lines: [{ text: '专业服务', size: 40, weight: 800, color: ORANGE }, { text: '毛利率 8%', size: 29, weight: 400, color: NOTE }] },
          ] },
          revenue: { blocks: [{ x: 891, top: 542, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +21%', size: 29, weight: 400, color: NOTE }] }] },
          gross_profit: { blocks: [{ x: 1358.5, top: 396, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 84%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
          cost_of_revenue: { blocks: [{ x: 1358.5, top: 1117, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 37, weight: 800 }, { text: '成本', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }] },
          operating_profit: { blocks: [{ x: 1826, top: 326, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 1%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }] }] },
          operating_expenses: { blocks: [{ x: 1826, top: 976, anchor: 'middle', lineGap: 8, lines: [{ text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
          other: { blocks: [{ x: 2185.5, top: 482, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
          net_profit: { blocks: [{ x: 2370, top: 329, anchor: 'start', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 2%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }] }] },
          tax: { blocks: [{ x: RIGHT_LABEL_X, top: 576, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
          sm: { blocks: [{ x: RIGHT_LABEL_X, top: 729, anchor: 'middle', lineGap: 8, lines: [{ text: '销售与市场', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 44%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
          rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 895, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 28%', size: 29, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
          ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1053, anchor: 'middle', lineGap: 8, lines: [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 10%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
          restructuring: { blocks: [{ x: RIGHT_LABEL_X, top: 1214, anchor: 'middle', lineGap: 8, lines: [{ text: '重组费用', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 0%', size: 29, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
        } },
      },
    },
  });
})();
