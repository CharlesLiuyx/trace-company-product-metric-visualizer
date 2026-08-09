/* L’Oréal H1 FY26 fixed-layout income statement (€B). Measured against
 * input/processed/loreal-h1-fy26.png. The four business brand clusters reuse
 * the validated transparent L’Oréal runtime crops; the central wordmark is
 * represented as pure SVG text. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const SOURCE = '#cb997e';
  const SOURCE_LINK = '#e0cabd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const lorealLogo = `
    <text x="270" y="91" text-anchor="middle" font-family="Arial,sans-serif" font-size="105" font-weight="400" letter-spacing="-6" textLength="530" lengthAdjust="spacingAndGlyphs" fill="#000000">L’ORÉAL</text>`;

  const labels = (zh) => {
    const t = zh ? {
      professional: ['专业产品', '事业部'], consumer: ['大众化妆品', '事业部'], luxe: ['欧莱雅', '高档化妆品'], active: ['皮肤科学', '美容事业部'],
      revenue: '收入', gross: '毛利润', cost: '销售成本', operating: '营业利润', expenses: ['运营', '费用'], dividend: ['赛诺菲', '股息'],
      net: '净利润', tax: '税费', other: '其他', advertising: ['广告与', '推广'], sga: ['销售、一般及', '管理费用'], research: ['研发与', '创新'],
      yoy15: '同比 +15%', yoy3: '同比 +3%', yoy4: '同比 +4%', yoy9: '同比 +9%', yoy6: '同比 +6%',
      grossMargin: '占收入 75%', operatingMargin: '占收入 21%', netMargin: '占收入 17%', pp4: '同比 +4 个百分点', pp1: '同比 +1 个百分点',
      adsShare: '占收入 33%', sgaShare: '占收入 18%', researchShare: '占收入 3%',
    } : {
      professional: ['Professional', 'Products'], consumer: ['Consumer', 'Products'], luxe: ["L’Oréal", 'Luxe'], active: ['Active', 'Cosmetics'],
      revenue: 'Revenue', gross: 'Gross profit', cost: 'Cost of sales', operating: 'Operating profit', expenses: ['Operating', 'expenses'], dividend: ['Sanofi', 'Dividend'],
      net: 'Net profit', tax: 'Tax', other: 'Other', advertising: ['Advertising &', 'Promotion'], sga: ['SG&A'], research: ['Research &', 'Innovation'],
      yoy15: '+15% Y/Y', yoy3: '+3% Y/Y', yoy4: '+4% Y/Y', yoy9: '+9% Y/Y', yoy6: '+6% Y/Y',
      grossMargin: '75% of revenue', operatingMargin: '21% of revenue', netMargin: '17% of revenue', pp4: '+4pp Y/Y', pp1: '+1pp Y/Y',
      adsShare: '33% of revenue', sgaShare: '18% of revenue', researchShare: '3% of revenue',
    };
    const source = (valueX, valueTop, nameTop, name, yoy, nameX = 430) => ({
      blocks: [
        { x: valueX, top: valueTop, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: yoy, size: 29, weight: 400, color: NOTE }] },
        { x: nameX, top: nameTop, anchor: 'end', lineGap: 7, lines: name.map((text) => ({ text, size: 40, weight: 800 })) },
      ],
    });
    const right = (top, name, value = true, notes = [], nameSize = 33, x = 2525) => ({
      blocks: [{
        x, top, anchor: 'middle', lineGap: 8,
        lines: [
          ...name.map((text) => ({ text, size: nameSize, weight: 800, color: RED_LABEL })),
          ...(value ? [{ text: '$value', size: nameSize, weight: 400, color: RED_LABEL }] : []),
          ...notes.map((text) => ({ text, size: 29, weight: 400, color: NOTE })),
        ],
      }],
    });
    return {
      professional_products: source(486, 324, 388.5, t.professional, t.yoy15, 435),
      consumer_products: source(494, 538, 640.5, t.consumer, t.yoy3, 439),
      loreal_luxe: source(494, 828, 927.5, t.luxe, t.yoy4, 402),
      active_cosmetics: source(494, 1113, 1183.5, t.active, t.yoy9, 424),
      revenue: { blocks: [{ x: 957, top: 526, anchor: 'middle', lineGap: 10, lines: [{ text: t.revenue, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: t.yoy6, size: 29, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1426, top: 389, anchor: 'middle', lineGap: 10, lines: [{ text: t.gross, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: t.grossMargin, size: 29, weight: 400, color: NOTE }, { text: t.pp4, size: 29, weight: 400, color: NOTE }] }] },
      cost_of_sales: { blocks: [{ x: 1431, top: 1143, anchor: 'middle', lineGap: 8, lines: [{ text: t.cost, size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
      operating_profit: { blocks: [{ x: 1897, top: 284, anchor: 'middle', lineGap: 10, lines: [{ text: t.operating, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: t.operatingMargin, size: 29, weight: 400, color: NOTE }, { text: t.pp1, size: 29, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1897, top: 937, anchor: 'middle', lineGap: 8, lines: [...t.expenses.map((text) => ({ text, size: 38, weight: 800, color: RED_LABEL })), { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
      sanofi_dividend: { blocks: [{ x: 2237, top: 503, anchor: 'middle', lineGap: 5, lines: [
        { text: t.dividend[0], size: 33, weight: 800, color: GREEN_LABEL },
        { text: t.dividend[1], size: 33, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 33, weight: 400, color: GREEN_LABEL },
      ] }] },
      net_profit: { blocks: [{ x: 2525, top: 308, anchor: 'middle', lineGap: 10, lines: [{ text: t.net, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: t.netMargin, size: 29, weight: 400, color: NOTE }, { text: t.pp1, size: 29, weight: 400, color: NOTE }] }] },
      tax: right(620, [t.tax], true, [], 33, 2519),
      other: right(720, [t.other], true, [], 33, 2524),
      advertising_promotion: right(862, t.advertising, true, [t.adsShare], 33, 2530),
      sga: right(1059, t.sga, true, [t.sgaShare], 33, 2531),
      research_innovation: right(1213, t.research, true, [t.researchShare], 33, 2530),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'loreal-h1-fy26',
    name: 'L’Oréal · H1 FY26',
    company: "L'Oréal",
    meta: {
      company: "L'Oréal", title: 'L’Oréal H1 FY26 Income Statement', period: 'H1 FY26', periodNote: 'Ending Jun. 2026', currency: '€', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/loreal-h1-fy26.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2150,
      hidePeriodStamp: true,
      logoWidth: 540, logoHeight: 110, logoY: 321, logoViewBox: '0 0 540 110', logoSvg: lorealLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: SOURCE, label: SOURCE }, hub: { node: SOURCE, label: SOURCE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'loreal-professional-products-brands', href: 'data/assets/raster-annotations/loreal/professional-products-brands.png', x: 0, y: 369, width: 184, height: 150 },
      { key: 'loreal-consumer-products-brands', href: 'data/assets/raster-annotations/loreal/consumer-products-brands.png', x: 0, y: 620, width: 184, height: 154 },
      { key: 'loreal-luxe-brands', href: 'data/assets/raster-annotations/loreal/loreal-luxe-brands.png', x: 0, y: 905, width: 194, height: 152 },
      { key: 'loreal-active-cosmetics-brands', href: 'data/assets/raster-annotations/loreal/active-cosmetics-brands.png', x: 0, y: 1147, width: 194, height: 162 },
    ],
    layout: {
      scale: 13.3,
      nodes: {
        professional_products: { x: 460, y: 416, width: 72, height: 37 }, consumer_products: { x: 460, y: 629, width: 72, height: 115 }, loreal_luxe: { x: 460, y: 921, width: 72, height: 105 }, active_cosmetics: { x: 460, y: 1202, width: 72, height: 55 },
        revenue: { x: 927, y: 669, width: 72, height: 318 }, gross_profit: { x: 1395, y: 568, width: 72, height: 236 }, cost_of_sales: { x: 1395, y: 1044, width: 72, height: 79 },
        operating_profit: { x: 1863, y: 467, width: 72, height: 66 }, operating_expenses: { x: 1863, y: 745, width: 72, height: 169 }, sanofi_dividend: { x: 2198, y: 480, width: 70, height: 3 },
        net_profit: { x: 2329, y: 350, width: 71, height: 51 }, tax: { x: 2329, y: 645, width: 71, height: 15 }, other: { x: 2329, y: 753, width: 71, height: 3 }, advertising_promotion: { x: 2329, y: 872, width: 71, height: 102 }, sga: { x: 2329, y: 1076, width: 71, height: 55 }, research_innovation: { x: 2329, y: 1251, width: 71, height: 7 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'professional_products', col: 0, order: 0, type: 'source', label: ['Professional', 'Products'], value: 2.9, notes: ['+15% Y/Y'] },
      { id: 'consumer_products', col: 0, order: 1, type: 'source', label: ['Consumer', 'Products'], value: 8.6, notes: ['+3% Y/Y'] },
      { id: 'loreal_luxe', col: 0, order: 2, type: 'source', label: ["L’Oréal", 'Luxe'], value: 8.0, valueText: '€8.0B', notes: ['+4% Y/Y'] },
      { id: 'active_cosmetics', col: 0, order: 3, type: 'source', label: ['Active', 'Cosmetics'], value: 4.2, notes: ['+9% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 23.8, notes: ['+6% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 17.8, notes: ['75% of revenue', '+4pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 6.0, valueText: '(€6.0B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 5.1, notes: ['21% of revenue', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 12.7, valueText: '(€12.7B)' },
      { id: 'sanofi_dividend', col: 4, order: 0, type: 'profit', label: ['Sanofi', 'Dividend'], value: 0.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 4.0, valueText: '€4.0B', notes: ['17% of revenue', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.3 },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.2 },
      { id: 'advertising_promotion', col: 5, order: 3, type: 'cost', label: ['Advertising &', 'Promotion'], value: 7.7, notes: ['33% of revenue'] },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 4.3, notes: ['18% of revenue'] },
      { id: 'research_innovation', col: 5, order: 5, type: 'cost', label: ['Research &', 'Innovation'], value: 0.7, notes: ['3% of revenue'] },
    ],
    links: [
      { source: 'professional_products', target: 'revenue', value: 2.9, sourceWidth: 37, targetWidth: 39, y0: 434.5, y1: 688.5, targetOrder: 0 },
      { source: 'consumer_products', target: 'revenue', value: 8.6, sourceWidth: 115, targetWidth: 115, y0: 686.5, y1: 765.5, targetOrder: 1 },
      { source: 'loreal_luxe', target: 'revenue', value: 8.0, sourceWidth: 105, targetWidth: 107, y0: 973.5, y1: 876.5, targetOrder: 2 },
      { source: 'active_cosmetics', target: 'revenue', value: 4.2, sourceWidth: 55, targetWidth: 57, y0: 1229.5, y1: 958.5, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 17.8, sourceWidth: 238, targetWidth: 236, y0: 788, y1: 686, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 6.0, sourceWidth: 80, targetWidth: 79, y0: 947, y1: 1083.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 5.1, sourceWidth: 67, targetWidth: 66, y0: 601.5, y1: 500, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 12.7, sourceWidth: 169, targetWidth: 169, y0: 719.5, y1: 829.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 3.6, sourceWidth: 48, targetWidth: 48, y0: 491, y1: 374, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.3, sourceWidth: 16, targetWidth: 15, y0: 523, y1: 652.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 0.2, sourceWidth: 2, targetWidth: 3, y0: 532, y1: 754.5, sourceOrder: 2 },
      { source: 'sanofi_dividend', target: 'net_profit', value: 0.4, sourceWidth: 3, targetWidth: 3, y0: 481.5, y1: 399.5, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN, right: GREEN }, curve: { c1x: 2284, c1y: 481.5, c2x: 2284, c2y: 399.5 } },
      { source: 'operating_expenses', target: 'advertising_promotion', value: 7.7, sourceWidth: 102, targetWidth: 102, y0: 796, y1: 923, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 4.3, sourceWidth: 57, targetWidth: 55, y0: 875.5, y1: 1103.5, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'research_innovation', value: 0.7, sourceWidth: 10, targetWidth: 7, y0: 909, y1: 1254.5, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: '欧莱雅 · 2026 财年上半年',
        meta: { title: '欧莱雅 2026 财年上半年利润表', period: '2026 财年上半年', periodNote: '截至 2026 年 6 月', titleTextLength: 1900, hidePeriodStamp: true },
        nodes: {
          professional_products: { label: ['专业产品', '事业部'], notes: ['同比 +15%'] }, consumer_products: { label: ['大众化妆品', '事业部'], notes: ['同比 +3%'] }, loreal_luxe: { label: ['欧莱雅', '高档化妆品'], notes: ['同比 +4%'] }, active_cosmetics: { label: ['皮肤科学', '美容事业部'], notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] }, gross_profit: { label: '毛利润', notes: ['占收入 75%', '同比 +4 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['占收入 21%', '同比 +1 个百分点'] }, operating_expenses: { label: ['运营', '费用'] },
          sanofi_dividend: { label: ['赛诺菲', '股息'] }, net_profit: { label: '净利润', notes: ['占收入 17%', '同比 +1 个百分点'] }, tax: { label: '税费' }, other: { label: '其他' }, advertising_promotion: { label: ['广告与', '推广'], notes: ['占收入 33%'] }, sga: { label: ['销售、一般及', '管理费用'], notes: ['占收入 18%'] }, research_innovation: { label: ['研发与', '创新'], notes: ['占收入 3%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
