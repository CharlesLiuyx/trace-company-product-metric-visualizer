/* McDonald's - Q2 FY23 income statement ($B), measured from the Source image. */
(function () {
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GOLD = '#ffc72c';
  const ARCH_GOLD = '#ffc000';
  const GOLD_LINK = '#f7df99';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const arches = `<path fill="${ARCH_GOLD}" d="M0 199V100C0 42 29 0 70 0c25 0 46 17 58 48C140 17 161 0 186 0c41 0 70 42 70 100v99h-31v-99c0-37-16-64-40-64s-40 27-40 64v99H88v-99c0-37-16-64-40-64S31 63 31 100v99z"/>`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 8, semanticRole) => ({
    x, top, anchor, lines, lineGap, ...(semanticRole ? { semanticRole } : {}),
  });
  const card = (x, width, title, lines, fontFamily = 'Noto Sans,Arial,sans-serif') => `
    <g><rect x="${x}" y="1209" width="${width}" height="149" rx="29" fill="#000"/>
      <text x="${x + width / 2}" y="1263" text-anchor="middle" font-family="${fontFamily}" font-size="29" font-weight="800" fill="#fff">${title}</text>
      ${lines.map((text, index) => `<text x="${x + width / 2}" y="${lines.length === 2 ? 1300 + index * 31 : 1289 + index * 31}" text-anchor="middle" font-family="${fontFamily}" font-size="24" fill="#fff">${text}</text>`).join('')}
    </g>`;
  const annotations = (zh) => `<g font-family="Noto Sans,Arial,sans-serif">
    ${card(145, 271, zh ? '全球' : 'Global', zh ? ['可比销售额', '同比 +11.7%'] : ['comparable sales', '+11.7% Y/Y'], zh ? 'Noto Sans SC,Noto Sans,Arial,sans-serif' : undefined)}
    ${card(429, 274, zh ? '数字销售额' : 'Digital sales', zh ? ['占总销售额的 40%', '前 6 大市场'] : ['40% of total sales in top', '6 markets'], zh ? 'Noto Sans SC,Noto Sans,Arial,sans-serif' : undefined)}
    <text x="156" y="1393" font-family="${zh ? 'Noto Sans SC,' : ''}Noto Sans,Arial,sans-serif" font-size="27" fill="${NOTE}">${zh ? '数字销售额 = 移动端、配送和自助点餐' : 'Digital Sales = Mobile, Delivery, and Kiosk'}</text>
  </g>`;

  const labels = {
    company_owned_restaurants: { blocks: [
      block(424, 305, 'middle', [line('$value', 38), line('+18% Y/Y', 28, 400, NOTE)]),
      block(200, 409, 'middle', [line('Sales from', 39, 800), line('company-owned', 39, 800), line('restaurants', 39, 800)]),
    ] },
    franchised_restaurants: { blocks: [
      block(424, 655, 'middle', [line('$value', 38), line('+12% Y/Y', 28, 400, NOTE)]),
      block(205, 826, 'middle', [line('Franchised', 39, 800), line('restaurants', 39, 800)]),
    ] },
    other_revenue: { blocks: [
      block(424, 1037, 'middle', [line('$value', 38), line('(2%) Y/Y', 28, 400, NOTE)]),
      block(204, 1094, 'middle', [line('Other revenue', 39, 800), line('Other restaurants', 27, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(885, 482, 'middle', [line('Revenue', 40, 800), line('$value', 38), line('+14% Y/Y', 28, 400, NOTE)], 9)] },
    gross_profit: { blocks: [block(1358, 357, 'middle', [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('57% margin', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)], 9)] },
    restaurant_expenses: { blocks: [block(1356, 1180, 'middle', [line('Restaurant', 37, 800, RED_LABEL), line('expenses', 37, 800, RED_LABEL), line('$value', 35, 400, RED_LABEL)])] },
    operating_profit: { blocks: [block(1809, 294, 'middle', [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('48% margin', 28, 400, NOTE), line('+21pp Y/Y', 28, 400, NOTE)], 9)] },
    non_operating: { blocks: [block(2169, 598, 'middle', [line('Non-operating', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)])] },
    operating_expenses: { blocks: [block(1807, 875, 'middle', [line('Operating', 36, 800, RED_LABEL), line('expenses', 36, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)])] },
    net_profit: { blocks: [block(2445, 378, 'middle', [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('36% margin', 28, 400, NOTE), line('+15pp Y/Y', 28, 400, NOTE)], 9, 'centered-side-label')] },
    tax: { blocks: [block(2448, 707, 'middle', [line('Tax', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    interest: { blocks: [block(2452, 827, 'middle', [line('Interest', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    other_sga: { blocks: [block(2448, 1008, 'middle', [line('Other SG&A', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    depreciation_amortization: { blocks: [block(2457, 1154, 'middle', [line('Depreciation &', 31, 800, RED_LABEL), line('amortization', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
  };

  const zhLabels = {
    company_owned_restaurants: { blocks: [
      block(424, 305, 'middle', [line('$value', 38), line('同比 +18%', 28, 400, NOTE)]),
      block(200, 429, 'middle', [line('自营餐厅', 39, 800), line('销售额', 39, 800)]),
    ] },
    franchised_restaurants: { blocks: [
      block(424, 655, 'middle', [line('$value', 38), line('同比 +12%', 28, 400, NOTE)]),
      block(205, 852, 'middle', [line('加盟餐厅', 39, 800)]),
    ] },
    other_revenue: { blocks: [
      block(424, 1037, 'middle', [line('$value', 38), line('同比 (2%)', 28, 400, NOTE)]),
      block(204, 1094, 'middle', [line('其他收入', 39, 800), line('其他餐厅', 27, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(885, 482, 'middle', [line('收入', 40, 800), line('$value', 38), line('同比 +14%', 28, 400, NOTE)], 9)] },
    gross_profit: { blocks: [block(1358, 357, 'middle', [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('利润率 57%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)], 2)] },
    restaurant_expenses: { blocks: [block(1356, 1188, 'middle', [line('餐厅费用', 37, 800, RED_LABEL), line('$value', 35, 400, RED_LABEL)])] },
    operating_profit: { blocks: [block(1809, 294, 'middle', [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('利润率 48%', 28, 400, NOTE), line('同比 +21 个百分点', 28, 400, NOTE)], 2)] },
    non_operating: { blocks: [block(2169, 598, 'middle', [line('非经营性收益', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)])] },
    operating_expenses: { blocks: [block(1807, 883, 'middle', [line('运营费用', 36, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)])] },
    net_profit: { blocks: [block(2445, 387, 'middle', [line('净利润', 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('利润率 36%', 28, 400, NOTE), line('同比 +15 个百分点', 28, 400, NOTE)], 2, 'centered-side-label')] },
    tax: { blocks: [block(2448, 707, 'middle', [line('税费', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    interest: { blocks: [block(2452, 827, 'middle', [line('利息', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    other_sga: { blocks: [block(2448, 998, 'middle', [line('其他销售、一般及', 27, 800, RED_LABEL), line('行政费用', 27, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    depreciation_amortization: { blocks: [block(2457, 1164, 'middle', [line('折旧及摊销', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q2-fy23',
    name: "McDonald's · Q2 FY23",
    company: "McDonald's",
    meta: {
      company: "McDonald's", title: "McDonald's Q2 FY23 Income Statement", period: 'Q2 FY23', periodNote: 'Ending Jun. 2023',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 132, titleWeight: 800, titleTextLength: 2430,
      hidePeriodStamp: true,
      logoX: 777, logoY: 258, logoWidth: 214, logoHeight: 187, logoViewBox: '0 0 256 199', logoSvg: arches,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: GOLD, label: '#050505' }, hub: { node: GOLD, label: '#050505' }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GOLD_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    nodes: [
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.5, notes: ['+18% Y/Y'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 3.9, notes: ['+12% Y/Y'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.1, notes: ['(2%) Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 6.5, notes: ['+14% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 3.7, notes: ['57% margin', '+0pp Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 2.8 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 3.1, notes: ['48% margin', '+21pp Y/Y'] },
      { id: 'non_operating', type: 'profit', label: 'Non-operating', value: 0.043, valueText: '$43M' },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.6 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 2.3, notes: ['36% margin', '+15pp Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.3 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.6 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.5, sourceWidth: 163, targetWidth: 163, y0: 475.5, y1: 701.5, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 3.9, sourceWidth: 258, targetWidth: 258, y0: 873, y1: 912, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 4, targetWidth: 6, y0: 1129, y1: 1044, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.7, sourceWidth: 247, targetWidth: 245, y0: 743.5, y1: 656.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 2.8, sourceWidth: 180, targetWidth: 181, y0: 957, y1: 1067.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.1, sourceWidth: 204, targetWidth: 202, y0: 636, y1: 579, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.6, sourceWidth: 40, targetWidth: 40, y0: 759, y1: 837, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.3, sourceWidth: 150, targetWidth: 147, y0: 553, y1: 456.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 32, targetWidth: 32, y0: 644, y1: 731, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 20, targetWidth: 20, y0: 670, y1: 848, sourceOrder: 2, targetOrder: 0 },
      { source: 'non_operating', target: 'net_profit', value: 0.043, sourceWidth: 1, targetWidth: 4, y0: 577.5, y1: 532, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'other_sga', value: 0.6, sourceWidth: 36, targetWidth: 33, y0: 835, y1: 1040.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 855, y1: 1215, sourceOrder: 1, targetOrder: 0 },
    ],
    layout: {
      scale: 65.7,
      nodes: {
        company_owned_restaurants: { x: 385, y: 394, width: 71, height: 163 },
        franchised_restaurants: { x: 385, y: 744, width: 71, height: 258 },
        other_revenue: { x: 385, y: 1127, width: 71, height: 4 },
        revenue: { x: 845, y: 620, width: 70, height: 427 },
        gross_profit: { x: 1316, y: 534, width: 72, height: 245 },
        restaurant_expenses: { x: 1319, y: 977, width: 71, height: 181 },
        operating_profit: { x: 1772, y: 478, width: 70, height: 202 },
        non_operating: { x: 2137, y: 577, width: 70, height: 1 },
        operating_expenses: { x: 1772, y: 817, width: 70, height: 40 },
        net_profit: { x: 2253, y: 383, width: 71, height: 151 },
        tax: { x: 2253, y: 715, width: 71, height: 32 },
        interest: { x: 2253, y: 838, width: 71, height: 20 },
        other_sga: { x: 2253, y: 1024, width: 71, height: 33 },
        depreciation_amortization: { x: 2253, y: 1213, width: 71, height: 4 },
      },
      labels,
    },
    i18n: {
      zh: {
        name: '麦当劳 · 2023 财年第二季度',
        meta: { title: '麦当劳 2023 财年第二季度利润表', period: '2023 财年第二季度', periodNote: '截至 2023 年 6 月', titleTextLength: 1940 },
        annotationsSvg: annotations(true),
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 +18%'] },
          franchised_restaurants: { label: '加盟餐厅', notes: ['同比 +12%'] },
          other_revenue: { label: '其他收入', notes: ['同比 (2%)', '其他餐厅'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 57%', '同比 +0 个百分点'] },
          restaurant_expenses: { label: '餐厅费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 48%', '同比 +21 个百分点'] },
          non_operating: { label: '非经营性收益' },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 36%', '同比 +15 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' },
          other_sga: { label: '其他销售、一般及行政费用' },
          depreciation_amortization: { label: '折旧及摊销' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
