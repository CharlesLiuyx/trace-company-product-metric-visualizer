/* Nike Q3 FY25 income statement ($B), measured from the native 2667x1500 Source. */
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

  const calloutBox = `
    <path d="M847 1107 L877 1161 L817 1161 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="727" y="1161" width="240" height="109" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="847" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">${zh ? '中国' : 'China'}<tspan fill="${RED_LABEL}" font-weight="700"> ${zh ? '同比 (17%)' : '(17%) Y/Y'}</tspan></text>
        <text x="847" y="1244" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${RED_LABEL}" font-weight="700"> ${zh ? '同比 (8%)' : '(8%) Y/Y'}</tspan></text>
      </g>
      <text x="847" y="1305" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">${zh ? 'RoW = 中国以外地区' : 'RoW = Rest of World'}</text>

      <g class="sankey-interactive-annotation" data-node="other" data-link-numerator="other" data-link-denominator="net_profit" data-link-anchor-x="2150" data-link-anchor-y="379">
        <path d="M2060 367H2128C2176 367 2174 393 2222 393" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
        <text x="2098" y="302" text-anchor="middle" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
        <text x="2098" y="344" text-anchor="middle" font-size="32" font-weight="400" fill="${GREEN_LABEL}">$18M</text>
        <rect x="2025" y="265" width="215" height="118" fill="transparent" pointer-events="all"/>
      </g>

      <g class="sankey-interactive-annotation" data-node="interest" data-link-numerator="interest" data-link-denominator="net_profit" data-link-anchor-x="2160" data-link-anchor-y="449">
        <path d="M2081 484H2150C2195 484 2182 413 2222 413" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
        <text x="2126" y="523" text-anchor="middle" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${zh ? '利息收入' : 'Interest'}</text>
        <text x="2126" y="565" text-anchor="middle" font-size="32" font-weight="400" fill="${GREEN_LABEL}">$38M</text>
        <rect x="2040" y="466" width="200" height="111" fill="transparent" pointer-events="all"/>
      </g>

    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, color });
  const block = (x, top, lines, lineGap = 8, semanticRole = '') => ({
    x, top, anchor: 'middle', lineGap, ...(semanticRole ? { semanticRole } : {}), lines,
  });

  const labels = (zh) => {
    const t = zh ? {
      footwear: '鞋类', apparel: '服装', equipment: '装备', converse: 'Converse', revenue: '收入', gross: '毛利润', cost: '销售成本',
      operatingProfit: '营业利润', operatingExpenses: ['运营', '费用'], net: '净利润', tax: '税费', overhead: '管理费用', demand: ['需求', '创造费用'],
      footNote: '同比 (12%)', apparelNote: '同比 (3%)', equipmentNote: '同比 (2%)', converseNote: '同比 (20%)', revenueNote: '同比 (9%)',
      grossMargin: '利润率 41%', grossNote: '同比 (3 个百分点)', operatingMargin: '利润率 7%', operatingNote: '同比 (4 个百分点)',
      netMargin: '利润率 7%', netNote: '同比 (2 个百分点)', overheadShare: '占收入 25%', overheadNote: '同比 +0 个百分点',
      demandShare: '占收入 10%', demandNote: '同比 +1 个百分点',
    } : {
      footwear: 'Footwear', apparel: 'Apparel', equipment: 'Equipment', converse: 'Converse', revenue: 'Revenue', gross: 'Gross profit', cost: 'Cost of sales',
      operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', overhead: 'Overhead', demand: ['Demand', 'Creation'],
      footNote: '(12%) Y/Y', apparelNote: '(3%) Y/Y', equipmentNote: '(2%) Y/Y', converseNote: '(20%) Y/Y', revenueNote: '(9%) Y/Y',
      grossMargin: '41% margin', grossNote: '(3pp) Y/Y', operatingMargin: '7% margin', operatingNote: '(4pp) Y/Y',
      netMargin: '7% margin', netNote: '(2pp) Y/Y', overheadShare: '25% of revenue', overheadNote: '+0pp Y/Y',
      demandShare: '10% of revenue', demandNote: '+1pp Y/Y',
    };
    return {
      footwear: { blocks: [block(390, 385, [line('$value', 38), line(t.footNote, 29, 400, NOTE)]), block(218, 634, [line(t.footwear, 40, 800, BLACK)], 8, 'asset-label')] },
      apparel: { blocks: [block(381, 741, [line('$value', 38), line(t.apparelNote, 29, 400, NOTE)]), block(233, 869, [line(t.apparel, 40, 800, BLACK)], 8, 'asset-label')] },
      equipment: { blocks: [block(393, 1008, [line('$value', 38), line(t.equipmentNote, 29, 400, NOTE)]), block(230, 1089, [line(t.equipment, 40, 800, BLACK)], 8, 'asset-label')] },
      converse: { blocks: [block(389, 1187, [line('$value', 38), line(t.converseNote, 29, 400, NOTE)]), block(233, 1275, [line(t.converse, 40, 800, BLACK)], 8, 'asset-label')] },
      revenue: { blocks: [block(862, 582, [line(t.revenue, 40, 800, BLACK), line('$value', 38, 400, BLACK), line(t.revenueNote, 29, 400, NOTE)], 9)] },
      gross_profit: { blocks: [block(1325, 409, [line(t.gross, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line(t.grossMargin, 29, 400, NOTE), line(t.grossNote, 29, 400, NOTE)], 9)] },
      cost_of_sales: { blocks: [block(1326, 1176, [line(t.cost, 38, 800, RED_LABEL), line('$value', 38, 400, RED_LABEL)])] },
      operating_profit: { blocks: [block(1793, 308, [line(t.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line(t.operatingMargin, 29, 400, NOTE), line(t.operatingNote, 29, 400, NOTE)], 9)] },
      operating_expenses: { blocks: [block(1789, 847, [...t.operatingExpenses.map((v) => line(v, 36, 800, RED_LABEL)), line('$value', 34, 400, RED_LABEL)])] },
      other: { blocks: [] },
      interest: { blocks: [] },
      net_profit: { blocks: [block(2416, 341, [line(t.net, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line(t.netMargin, 29, 400, NOTE), line(t.netNote, 29, 400, NOTE)], 9)] },
      tax: { blocks: [block(2418, 590, [line(t.tax, 34, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)])] },
      overhead: { blocks: [block(2428, 877, [line(t.overhead, 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL), line(t.overheadShare, 29, 400, NOTE), line(t.overheadNote, 29, 400, NOTE)])] },
      demand_creation: { blocks: [block(2428, 1147, [...t.demand.map((v) => line(v, 32, 800, RED_LABEL)), line('$value', 32, 400, RED_LABEL), line(t.demandShare, 29, 400, NOTE), line(t.demandNote, 29, 400, NOTE)])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q3-fy25', name: 'Nike · Q3 FY25', company: 'Nike',
    meta: {
      company: 'Nike', title: 'Nike Q3 FY25 Income Statement', period: 'Q3 FY25', periodNote: 'Ending Feb. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/nike-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 189, titleSize: 118, titleWeight: 800, titleTextLength: 2002,
      periodX: 2407, periodY: 235, periodNoteY: 278, periodAnchor: 'middle',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GREY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'nike-company-logo', href: 'data/assets/raster-annotations/nike/company-logo.png', x: 627, y: 257, width: 541, height: 301 },
      { key: 'nike-business-footwear', href: 'data/assets/raster-annotations/nike/business-footwear.png', x: 114, y: 500, width: 207, height: 140 },
      { key: 'nike-business-apparel', href: 'data/assets/raster-annotations/nike/business-apparel.png', x: 140, y: 695, width: 200, height: 164 },
      { key: 'nike-business-equipment', href: 'data/assets/raster-annotations/nike/business-equipment.png', x: 150, y: 930, width: 190, height: 152 },
      { key: 'nike-business-converse-q2-fy26', href: 'data/assets/raster-annotations/nike/business-converse-q2-fy26.png', x: 125, y: 1155, width: 205, height: 132 },
    ],
    nonNodeMetrics: [
      { id: 'other', representation: 'flow', label: 'Other', value: 0.018, valueText: '$18M', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.038, valueText: '$38M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    layout: {
      scale: 27.4,
      routes: {
        other: { x: 2060, y: 367, width: 0, height: 1 },
        interest: { x: 2081, y: 484, width: 0, height: 1 },
      },
      nodes: {
        footwear: { x: 354, y: 489, width: 71, height: 196 }, apparel: { x: 354, y: 837, width: 71, height: 85 },
        equipment: { x: 354, y: 1103, width: 71, height: 11 }, converse: { x: 354, y: 1296, width: 71, height: 9 },
        revenue: { x: 821, y: 720, width: 70, height: 308 }, gross_profit: { x: 1288, y: 592, width: 71, height: 126 },
        cost_of_sales: { x: 1288, y: 977, width: 71, height: 179 }, operating_profit: { x: 1758, y: 489, width: 70, height: 20 },
        operating_expenses: { x: 1758, y: 717, width: 70, height: 105 }, net_profit: { x: 2222, y: 393, width: 71, height: 20 },
        tax: { x: 2222, y: 624, width: 71, height: 2 }, overhead: { x: 2222, y: 879, width: 71, height: 75 },
        demand_creation: { x: 2222, y: 1186, width: 71, height: 29 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 7.2, notes: ['(12%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.2, notes: ['(3%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.5, notes: ['(2%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.4, notes: ['(20%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 11.3, valueText: '$11.3B', notes: ['(9%) Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.7, notes: ['41% margin', '(3pp) Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 6.6 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.8, notes: ['7% margin', '(4pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.9 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.8, notes: ['7% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.05, valueText: '($50M)', color: RED_LINK },
      { id: 'overhead', col: 4, order: 2, type: 'cost', label: 'Overhead', value: 2.8, notes: ['25% of revenue', '+0pp Y/Y'] },
      { id: 'demand_creation', col: 4, order: 3, type: 'cost', label: ['Demand', 'Creation'], value: 1.1, notes: ['10% of revenue', '+1pp Y/Y'] },
    ],
    links: [
      { source: 'footwear', target: 'revenue', value: 7.2, sourceWidth: 196, targetWidth: 196, y0: 587, y1: 818, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.2, sourceWidth: 85, targetWidth: 86, y0: 879.5, y1: 960, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.5, sourceWidth: 11, targetWidth: 14, y0: 1108.5, y1: 1010, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.4, sourceWidth: 9, targetWidth: 11, y0: 1300.5, y1: 1022.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 4.7, sourceWidth: 128, targetWidth: 126, y0: 784, y1: 655, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 6.6, sourceWidth: 180, targetWidth: 179, y0: 938, y1: 1066.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.8, sourceWidth: 20, targetWidth: 20, y0: 602, y1: 499, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.9, sourceWidth: 106, targetWidth: 105, y0: 665, y1: 769.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.8, sourceWidth: 18, targetWidth: 18, y0: 498, y1: 403, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'other', target: 'net_profit', value: 0.018, sourceWidth: 1, targetWidth: 1, y0: 367, y1: 393, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.038, sourceWidth: 1, targetWidth: 1, y0: 484, y1: 413, sourceOrder: 0, targetOrder: 2, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.05, sourceWidth: 2, targetWidth: 2, y0: 508, y1: 625, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'overhead', value: 2.8, sourceWidth: 76, targetWidth: 75, y0: 755, y1: 916.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.1, sourceWidth: 29, targetWidth: 29, y0: 807.5, y1: 1200.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['RoW'],
      zh: {
        name: 'Nike · 2025 财年第三季度',
        meta: { title: 'Nike 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 2 月', titleTextLength: 1900 },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { other: { label: '其他' }, interest: { label: '利息收入' } },
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 (12%)'] }, apparel: { label: '服装', notes: ['同比 (3%)'] }, equipment: { label: '装备', notes: ['同比 (2%)'] }, converse: { notes: ['同比 (20%)'] },
          revenue: { label: '收入', notes: ['同比 (9%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 41%', '同比 (3 个百分点)'] }, cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 (4 个百分点)'] }, operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 7%', '同比 (2 个百分点)'] }, tax: { label: '税费' }, overhead: { label: '管理费用', notes: ['占收入 25%', '同比 +0 个百分点'] },
          demand_creation: { label: ['需求', '创造费用'], notes: ['占收入 10%', '同比 +1 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
