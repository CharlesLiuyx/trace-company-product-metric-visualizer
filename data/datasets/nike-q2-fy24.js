/* Nike Q2 FY24 income statement ($B), measured from the native 2667x1500 Source. */
(function () {
  'use strict';

  const TITLE = '#155077';
  const BLACK = '#000000';
  const GREY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const line = (text, size, weight = 400, color = BLACK) => ({ text, size, weight, color });
  const block = (x, top, lines, lineGap = 8, anchor = 'middle') => ({ x, top, anchor, lineGap, lines });

  function annotations(zh) {
    const text = zh ? {
      china: '中国', chinaRate: '同比 +4%', row: 'RoW', rowRate: '同比 +0%',
      rowNote: 'RoW = 中国以外地区', interest: '利息', other: '其他',
    } : {
      china: 'China', chinaRate: '+4% Y/Y', row: 'RoW', rowRate: '+0% Y/Y',
      rowNote: 'RoW = Rest of World', interest: 'Interest', other: 'Other',
    };
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <g>
          <path d="M847 1107L877 1160H817Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
          <rect x="727" y="1160" width="240" height="110" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
          <text x="847" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">${text.china}<tspan fill="${GREEN_LABEL}" font-weight="700"> ${text.chinaRate}</tspan></text>
          <text x="847" y="1244" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">${text.row}<tspan fill="${GREEN_LABEL}" font-weight="700"> ${text.rowRate}</tspan></text>
        </g>
        <text x="847" y="1305" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">${text.rowNote}</text>
        <g class="sankey-interactive-annotation" data-node="interest"
          data-link-numerator="interest" data-link-denominator="net_profit"
          data-link-anchor-x="2077" data-link-anchor-y="529">
          <path d="M2036 529H2106C2149 529 2149 450 2219 450" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
          <text x="2077" y="565" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${text.interest}</text>
          <text x="2077" y="607" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$22M</text>
          <rect x="2025" y="515" width="205" height="105" fill="transparent" pointer-events="all"/>
        </g>
        <g class="sankey-interactive-annotation" data-node="other"
          data-link-numerator="other" data-link-denominator="net_profit"
          data-link-anchor-x="2127" data-link-anchor-y="630">
          <path d="M2089 630H2158C2193 630 2183 451 2219 451" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
          <text x="2127" y="669" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${text.other}</text>
          <text x="2127" y="711" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$75M</text>
          <rect x="2078" y="616" width="152" height="108" fill="transparent" pointer-events="all"/>
        </g>
      </g>`;
  }

  function labels(zh) {
    const t = zh ? {
      footwear: '鞋类', apparel: '服装', equipment: '装备', converse: 'Converse',
      revenue: '收入', gross: '毛利润', cost: '销售成本', operatingProfit: '营业利润',
      operatingExpenses: ['运营', '费用'], netProfit: '净利润', tax: '税费', overhead: '管理费用',
      demand: ['需求', '创造费用'], y1: '同比 +1%', ym1: '同比 (1%)', y17: '同比 +17%', ym13: '同比 (13%)',
      margin45: '利润率 45%', margin14: '利润率 14%', margin12: '利润率 12%', pp2: '同比 +2 个百分点',
    } : {
      footwear: 'Footwear', apparel: 'Apparel', equipment: 'Equipment', converse: 'Converse',
      revenue: 'Revenue', gross: 'Gross profit', cost: 'Cost of sales', operatingProfit: 'Operating profit',
      operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax', overhead: 'Overhead',
      demand: ['Demand', 'Creation'], y1: '+1% Y/Y', ym1: '(1%) Y/Y', y17: '+17% Y/Y', ym13: '(13%) Y/Y',
      margin45: '45% margin', margin14: '14% margin', margin12: '12% margin', pp2: '+2pp Y/Y',
    };
    return {
      footwear: { blocks: [
        block(386, 397, [line('$value', 38), line(t.y1, 29, 400, NOTE)]),
        { ...block(218, 640, [line(t.footwear, 40, 800)]), semanticRole: 'reference-offset-side-label' },
      ] },
      apparel: { blocks: [
        block(386, 777, [line('$value', 38), line(t.ym1, 29, 400, NOTE)]),
        { ...block(230, 909, [line(t.apparel, 40, 800)]), semanticRole: 'reference-offset-side-label' },
      ] },
      equipment: { blocks: [
        block(386, 1038, [line('$value', 38), line(t.y17, 29, 400, NOTE)]),
        { ...block(221, 1116, [line(t.equipment, 40, 800)]), semanticRole: 'reference-offset-side-label' },
      ] },
      converse: { blocks: [
        block(386, 1213, [line('$value', 38), line(t.ym13, 29, 400, NOTE)]),
        { ...block(220, 1292, [line(t.converse, 40, 800)]), semanticRole: 'reference-offset-side-label' },
      ] },
      revenue: { blocks: [block(856, 587, [line(t.revenue, 40, 800), line('$value', 38), line(t.y1, 29, 400, NOTE)], 9)] },
      gross_profit: { blocks: [block(1318, 350, [
        line(t.gross, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL),
        line(t.margin45, 29, 400, NOTE), line(t.pp2, 29, 400, NOTE),
      ], 9)] },
      cost_of_sales: { blocks: [block(1320, 1205, [line(t.cost, 38, 800, RED_LABEL), line('$value', 38, 400, RED_LABEL)])] },
      operating_profit: { blocks: [block(1790, 272, [
        line(t.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL),
        line(t.margin14, 29, 400, NOTE), line(t.pp2, 29, 400, NOTE),
      ], 9)] },
      operating_expenses: { blocks: [block(1780, 937, [
        ...t.operatingExpenses.map((value) => line(value, 36, 800, RED_LABEL)), line('$value', 34, 400, RED_LABEL),
      ])] },
      net_profit: { blocks: [block(2417, 310, [
        line(t.netProfit, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL),
        line(t.margin12, 29, 400, NOTE), line(t.pp2, 29, 400, NOTE),
      ], 9)] },
      tax: { blocks: [block(2426, 744, [line(t.tax, 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)])] },
      overhead: { blocks: [block(2428, 943, [line(t.overhead, 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)])] },
      demand_creation: { blocks: [block(2428, 1125, [
        ...t.demand.map((value) => line(value, 32, 800, RED_LABEL)), line('$value', 32, 400, RED_LABEL),
      ])] },
    };
  }

  const enLabels = labels(false);
  const zhLabels = labels(true);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q2-fy24',
    name: 'Nike · Q2 FY24',
    company: 'Nike',
    meta: {
      company: 'Nike', title: 'Nike Q2 FY24 Income Statement', period: 'Q2 FY24',
      periodNote: 'Ending Nov. 2023', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/nike-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1338, titleY: 220, titleSize: 118, titleWeight: 800, titleTextLength: 2002,
      periodX: 2230, periodY: 255, periodNoteY: 300,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GREY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'nike-company-logo', href: 'data/assets/raster-annotations/nike/company-logo.png', x: 627, y: 257, width: 541, height: 301 },
      { key: 'nike-business-footwear', href: 'data/assets/raster-annotations/nike/business-footwear.png', x: 114, y: 500, width: 207, height: 140 },
      { key: 'nike-business-apparel', href: 'data/assets/raster-annotations/nike/business-apparel.png', x: 140, y: 735, width: 200, height: 164 },
      { key: 'nike-business-equipment', href: 'data/assets/raster-annotations/nike/business-equipment.png', x: 150, y: 962, width: 190, height: 152 },
      { key: 'nike-business-converse', href: 'data/assets/raster-annotations/nike/business-converse.png', x: 125, y: 1155, width: 215, height: 136 },
    ],
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.022, valueText: '$22M', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'other', representation: 'flow', label: 'Other', value: 0.075, valueText: '$75M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    layout: {
      scale: 26.5,
      routes: {
        interest: { x: 2036, y: 529, width: 0, height: 2 },
        other: { x: 2089, y: 630, width: 0, height: 2 },
      },
      nodes: {
        footwear: { x: 351, y: 495, width: 71, height: 229 },
        apparel: { x: 351, y: 873, width: 71, height: 99 },
        equipment: { x: 351, y: 1136, width: 71, height: 10 },
        converse: { x: 351, y: 1307, width: 71, height: 13 },
        revenue: { x: 821, y: 738, width: 70, height: 356 },
        gross_profit: { x: 1282, y: 642, width: 72, height: 157 },
        cost_of_sales: { x: 1285, y: 988, width: 71, height: 197 },
        operating_profit: { x: 1755, y: 538, width: 70, height: 47 },
        operating_expenses: { x: 1745, y: 805, width: 70, height: 111 },
        net_profit: { x: 2219, y: 410, width: 71, height: 41 },
        tax: { x: 2219, y: 765, width: 71, height: 8 },
        overhead: { x: 2219, y: 939, width: 71, height: 80 },
        demand_creation: { x: 2219, y: 1171, width: 71, height: 29 },
      },
      labels: { interest: { blocks: [] }, other: { blocks: [] }, ...enLabels },
    },
    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 8.6, notes: ['+1% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.8, notes: ['(1%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.5, notes: ['+17% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.5, notes: ['(13%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 13.4, notes: ['+1% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.0, valueText: '$6.0B', notes: ['45% margin', '+2pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 7.4 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.8, notes: ['14% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.1 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.6, notes: ['12% margin', '+2pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'overhead', col: 4, order: 2, type: 'cost', label: 'Overhead', value: 3.0, valueText: '($3.0B)' },
      { id: 'demand_creation', col: 4, order: 3, type: 'cost', label: ['Demand', 'Creation'], value: 1.1 },
    ],
    links: [
      { source: 'footwear', target: 'revenue', value: 8.6, sourceWidth: 229, targetWidth: 229, y0: 609.5, y1: 852.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.8, sourceWidth: 99, targetWidth: 99, y0: 922.5, y1: 1016.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.5, sourceWidth: 10, targetWidth: 14, y0: 1141, y1: 1073, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.5, sourceWidth: 13, targetWidth: 14, y0: 1313.5, y1: 1087, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 6.0, sourceWidth: 157, targetWidth: 157, y0: 816.5, y1: 720.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 7.4, sourceWidth: 199, targetWidth: 197, y0: 994.5, y1: 1086.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.8, sourceWidth: 46, targetWidth: 46, y0: 665, y1: 562, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.1, sourceWidth: 111, targetWidth: 111, y0: 743.5, y1: 860.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, sourceWidth: 39, targetWidth: 41, y0: 557.5, y1: 430.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 8, targetWidth: 8, y0: 581, y1: 769, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.022, sourceWidth: 2, targetWidth: 1, y0: 529, y1: 449.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK,
        curve: { x0: 2036, c1x: 2106, c1y: 529, c2x: 2149, c2y: 450 } },
      { sourceRoute: 'other', target: 'net_profit', value: 0.075, sourceWidth: 2, targetWidth: 1, y0: 630, y1: 450.5, sourceOrder: 0, targetOrder: 2, interactionOnly: true, linkTint: GREEN_LINK,
        curve: { x0: 2089, c1x: 2158, c1y: 630, c2x: 2183, c2y: 451 } },
      { source: 'operating_expenses', target: 'overhead', value: 3.0, sourceWidth: 82, targetWidth: 80, y0: 846, y1: 979, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.1, sourceWidth: 29, targetWidth: 29, y0: 901.5, y1: 1185.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['RoW'],
      zh: {
        name: 'Nike · 2024 财年第二季度',
        meta: {
          title: 'Nike 2024 财年第二季度利润表', period: '2024 财年第二季度',
          periodNote: '截至 2023 年 11 月', titleTextLength: 1770,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { interest: { label: '利息' }, other: { label: '其他' } },
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 +1%'] }, apparel: { label: '服装', notes: ['同比 (1%)'] },
          equipment: { label: '装备', notes: ['同比 +17%'] }, converse: { notes: ['同比 (13%)'] },
          revenue: { label: '收入', notes: ['同比 +1%'] }, gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +2 个百分点'] },
          cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +2 个百分点'] },
          tax: { label: '税费' }, overhead: { label: '管理费用' }, demand_creation: { label: ['需求', '创造费用'] },
        },
        layout: { labels: { interest: { blocks: [] }, other: { blocks: [] }, ...zhLabels } },
      },
    },
  });
})();
