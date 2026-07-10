/* HubSpot Q4 FY25 income statement ($M), measured against its processed source. */
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

  const annotationsEn = kpiCard('Customers', '289K +16% Y/Y', 'Average Revenue', '$11,683 +3% Y/Y');
  const annotationsZh = kpiCard('客户数', '289K，同比 +16%', '平均收入', '$11,683，同比 +3%');

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hubspot-q4-fy25',
    name: 'HubSpot · Q4 FY25',
    company: 'HubSpot',
    meta: {
      company: 'HubSpot',
      title: 'HubSpot Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/hubspot-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2260,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
        subscription: { x: 389, y: 505, width: 71, height: 350 },
        professional_services: { x: 389, y: 1056, width: 71, height: 5 },
        revenue: { x: 856, y: 620, width: 70, height: 358 },
        gross_profit: { x: 1323, y: 501, width: 71, height: 300 },
        cost_of_revenue: { x: 1323, y: 1014, width: 71, height: 56 },
        operating_profit: { x: 1791, y: 426, width: 70, height: 18 },
        operating_expenses: { x: 1791, y: 624, width: 70, height: 279 },
        interest: { x: 2133, y: 422, width: 70, height: 4 },
        net_profit: { x: 2257, y: 351, width: 71, height: 21 },
        tax: { x: 2257, y: 554, width: 71, height: 1 },
        sm: { x: 2257, y: 697, width: 71, height: 149 },
        rnd: { x: 2257, y: 923, width: 71, height: 91 },
        ga: { x: 2257, y: 1106, width: 71, height: 33 },
        restructuring: { x: 2257, y: 1276, width: 71, height: 0.5 },
      },
      labels: {
        subscription: { blocks: [
          { x: 424.5, top: 404, anchor: 'middle', lineGap: 13, lines: [
            { text: '$value', size: 40, weight: 400 },
            { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 333, top: 646, anchor: 'end', lineGap: 10, lines: [
            { text: 'Subscription', size: 40, weight: 800 },
            { text: '85% gross margin', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        professional_services: { blocks: [
          { x: 424.5, top: 964, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 40, weight: 400, color: ORANGE },
            { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 295, top: 997, anchor: 'end', lineGap: 10, lines: [
            { text: 'Professional', size: 40, weight: 800, color: ORANGE },
            { text: 'services', size: 40, weight: 800, color: ORANGE },
            { text: '8% gross margin', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [
          { x: 891, top: 476, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Revenue', size: 40, weight: 800 },
            { text: '$value', size: 40, weight: 400 },
            { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        gross_profit: { blocks: [
          { x: 1360.5, top: 311, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Gross profit', size: 40, weight: 800 },
            { text: '$value', size: 40, weight: 400 },
            { text: '84% margin', size: 29, weight: 400, color: NOTE },
            { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        cost_of_revenue: { blocks: [
          { x: 1358.5, top: 1084, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Cost of', size: 37, weight: 800 },
            { text: 'revenue', size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ] },
        ] },
        operating_profit: { blocks: [
          { x: 1827, top: 233, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Operating profit', size: 40, weight: 800 },
            { text: '$value', size: 40, weight: 400 },
            { text: '6% margin', size: 29, weight: 400, color: NOTE },
            { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        operating_expenses: { blocks: [
          { x: 1826, top: 913, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Operating', size: 40, weight: 800 },
            { text: 'expenses', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
          ] },
        ] },
        interest: { blocks: [
          { x: 2168, top: 437, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Interest', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
        net_profit: { blocks: [
          { x: 2370, top: 288, anchor: 'start', lineGap: 8, lines: [
            { text: 'Net profit', size: 40, weight: 800 },
            { text: '$value', size: 40, weight: 400 },
            { text: '6% margin', size: 29, weight: 400, color: NOTE },
            { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        tax: { blocks: [
          { x: RIGHT_LABEL_X, top: 512, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Tax', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
        sm: { blocks: [
          { x: RIGHT_LABEL_X, top: 699, anchor: 'middle', lineGap: 8, lines: [
            { text: 'S&M', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '42% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        rnd: { blocks: [
          { x: RIGHT_LABEL_X, top: 912, anchor: 'middle', lineGap: 8, lines: [
            { text: 'R&D', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '26% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        ga: { blocks: [
          { x: RIGHT_LABEL_X, top: 1078, anchor: 'middle', lineGap: 8, lines: [
            { text: 'G&A', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        restructuring: { blocks: [
          { x: RIGHT_LABEL_X, top: 1240, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Restructuring', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '0% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
      },
    },

    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 829, notes: ['+21% Y/Y', '85% gross margin'], color: DARK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: 'Professional services', value: 18, notes: ['+12% Y/Y', '8% gross margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 847, notes: ['+20% Y/Y'], color: DARK, labelColor: DARK, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 709, notes: ['84% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 138 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 48, notes: ['6% margin', '+7pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 661 },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 13 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 54, notes: ['6% margin', '+6pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 7 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 358, notes: ['42% of revenue', '(3pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 221, notes: ['26% of revenue', '(4pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 82, notes: ['10% of revenue', '(2pp) Y/Y'] },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 1, notes: ['0% of revenue', '(0pp) Y/Y'] },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 829, sourceWidth: 350, targetWidth: 350, y0: 680, y1: 795, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'professional_services', target: 'revenue', value: 18, sourceWidth: 5, targetWidth: 8, y0: 1058.5, y1: 974, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 709, sourceWidth: 300, targetWidth: 300, y0: 770, y1: 651, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 138, sourceWidth: 57, targetWidth: 56, y0: 949.5, y1: 1042, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 48, sourceWidth: 21, targetWidth: 18, y0: 511.5, y1: 435, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 661, sourceWidth: 279, targetWidth: 279, y0: 661.5, y1: 763.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 48, sourceWidth: 15, targetWidth: 18, y0: 433.5, y1: 360, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 7, sourceWidth: 2, targetWidth: 1, y0: 443, y1: 554.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'interest', target: 'net_profit', value: 13, sourceWidth: 4, targetWidth: 4, y0: 424, y1: 370, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 358, sourceWidth: 151, targetWidth: 149, y0: 699.5, y1: 771.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 221, sourceWidth: 93, targetWidth: 91, y0: 821.5, y1: 968.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 82, sourceWidth: 34.5, targetWidth: 33, y0: 885.25, y1: 1122.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 1, sourceWidth: 0.5, targetWidth: 0.5, y0: 902.75, y1: 1276.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],

    i18n: {
      zh: {
        name: 'HubSpot · 2025 财年第四季度',
        meta: { title: 'HubSpot 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleSize: 116, titleTextLength: 1880 },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +21%', '毛利率 85%'] },
          professional_services: { label: '专业服务', notes: ['同比 +12%', '毛利率 8%'] },
          revenue: { label: '收入', notes: ['同比 +20%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 84%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 +7 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +6 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 42%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 26%', '同比 (4 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
          restructuring: { label: '重组费用', notes: ['占收入 0%', '同比 (0 个百分点)'] },
        },
        layout: { labels: {
          subscription: { blocks: [
            { x: 424.5, top: 404, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +21%', size: 29, weight: 400, color: NOTE }] },
            { x: 333, top: 646, anchor: 'end', lineGap: 10, lines: [{ text: '订阅', size: 40, weight: 800 }, { text: '毛利率 85%', size: 29, weight: 400, color: NOTE }] },
          ] },
          professional_services: { blocks: [
            { x: 424.5, top: 964, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400, color: ORANGE }, { text: '同比 +12%', size: 29, weight: 400, color: NOTE }] },
            { x: 295, top: 1014, anchor: 'end', lineGap: 10, lines: [{ text: '专业服务', size: 40, weight: 800, color: ORANGE }, { text: '毛利率 8%', size: 29, weight: 400, color: NOTE }] },
          ] },
          revenue: { blocks: [{ x: 891, top: 476, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +20%', size: 29, weight: 400, color: NOTE }] }] },
          gross_profit: { blocks: [{ x: 1360.5, top: 311, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 84%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
          cost_of_revenue: { blocks: [{ x: 1358.5, top: 1101, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 37, weight: 800 }, { text: '成本', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }] },
          operating_profit: { blocks: [{ x: 1827, top: 233, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 6%', size: 29, weight: 400, color: NOTE }, { text: '同比 +7 个百分点', size: 29, weight: 400, color: NOTE }] }] },
          operating_expenses: { blocks: [{ x: 1826, top: 930, anchor: 'middle', lineGap: 8, lines: [{ text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
          interest: { blocks: [{ x: 2168, top: 437, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
          net_profit: { blocks: [{ x: 2370, top: 288, anchor: 'start', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 6%', size: 29, weight: 400, color: NOTE }, { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE }] }] },
          tax: { blocks: [{ x: RIGHT_LABEL_X, top: 512, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
          sm: { blocks: [{ x: RIGHT_LABEL_X, top: 699, anchor: 'middle', lineGap: 8, lines: [{ text: '销售与市场', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 42%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
          rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 912, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 26%', size: 29, weight: 400, color: NOTE }, { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
          ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1078, anchor: 'middle', lineGap: 8, lines: [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 10%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
          restructuring: { blocks: [{ x: RIGHT_LABEL_X, top: 1240, anchor: 'middle', lineGap: 8, lines: [{ text: '重组费用', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 0%', size: 29, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
        } },
      },
    },
  });
})();
