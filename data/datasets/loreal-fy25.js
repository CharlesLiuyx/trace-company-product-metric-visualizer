/* L’Oréal FY25 fixed-layout income statement (€B). Measured against
 * input/processed/loreal-fy25.png. The four business brand clusters are
 * validated, transparent runtime crops; the central company wordmark is
 * represented as pure SVG text. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const SOURCE = '#cb9b7d';
  const SOURCE_LINK = '#dfc9ba';
  const GREEN = '#29a32a';
  const GREEN_LABEL = '#008e48';
  const GREEN_LINK = '#9bcf9a';
  const RED = '#d90000';
  const RED_LABEL = '#9b1805';
  const RED_LINK = '#df8082';
  const NOTE = '#666666';
  const RIGHT_X = 2512;

  const lorealLogo = `
    <text x="270" y="91" text-anchor="middle" font-family="Arial,sans-serif" font-size="105" font-weight="400" letter-spacing="-6" textLength="530" lengthAdjust="spacingAndGlyphs" fill="#000000">L’ORÉAL</text>`;

  const labels = (zh) => {
    const t = zh ? {
      professional: ['专业产品', '事业部'], consumer: ['大众化妆品', '事业部'], luxe: ['欧莱雅', '高档化妆品'], active: ['皮肤科学', '美容事业部'],
      revenue: '收入', gross: '毛利润', cost: '销售成本', operating: '营业利润', expenses: ['运营', '费用'], dividend: ['赛诺菲', '股息'],
      net: '净利润', tax: '税费', other: '其他', advertising: ['广告与', '推广'], sga: ['销售、一般及', '管理费用'], research: ['研发与', '创新'],
      yoy6: '同比 +6%', yoy1: '同比 +1%', yoy0: '同比 +0%', yoy3: '同比 +3%',
      grossMargin: '占收入 74%', operatingMargin: '占收入 20%', netMargin: '占收入 15%', pp1: '同比 +1 个百分点', pp0: '同比 +0 个百分点',
      adsShare: '占收入 32%', sgaShare: '占收入 19%', researchShare: '占收入 3%',
    } : {
      professional: ['Professional', 'Products'], consumer: ['Consumer', 'Products'], luxe: ["L’Oréal", 'Luxe'], active: ['Active', 'Cosmetics'],
      revenue: 'Revenue', gross: 'Gross profit', cost: 'Cost of sales', operating: 'Operating profit', expenses: ['Operating', 'expenses'], dividend: ['Sanofi', 'Dividend'],
      net: 'Net profit', tax: 'Tax', other: 'Other', advertising: ['Advertising &', 'Promotion'], sga: ['SG&A'], research: ['Research &', 'Innovation'],
      yoy6: '+6% Y/Y', yoy1: '+1% Y/Y', yoy0: '+0% Y/Y', yoy3: '+3% Y/Y',
      grossMargin: '74% of revenue', operatingMargin: '20% of revenue', netMargin: '15% of revenue', pp1: '+1pp Y/Y', pp0: '+0pp Y/Y',
      adsShare: '32% of revenue', sgaShare: '19% of revenue', researchShare: '3% of revenue',
    };
    const source = (valueX, valueTop, nameTop, name, yoy, nameSize = 40) => ({
      blocks: [
        { x: valueX, top: valueTop, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: yoy, size: 29, weight: 400, color: NOTE }] },
        { x: 430, top: nameTop, anchor: 'end', lineGap: 7, lines: name.map((text) => ({ text, size: nameSize, weight: 800 })) },
      ],
    });
    const right = (top, name, value = true, notes = [], nameSize = 33, x = RIGHT_X) => ({
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
      professional_products: source(499, 279, 349, t.professional, t.yoy6),
      consumer_products: source(499, 493, 607, t.consumer, t.yoy1),
      loreal_luxe: source(499, 796, 911, t.luxe, t.yoy0),
      active_cosmetics: source(499, 1096, 1176, t.active, t.yoy3),
      revenue: { blocks: [{ x: 966, top: 540, anchor: 'middle', lineGap: 10, lines: [{ text: t.revenue, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: t.yoy1, size: 29, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1433, top: 398, anchor: 'middle', lineGap: 10, lines: [{ text: t.gross, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: t.grossMargin, size: 29, weight: 400, color: NOTE }, { text: t.pp1, size: 29, weight: 400, color: NOTE }] }] },
      cost_of_sales: { blocks: [{ x: 1433, top: 1204, anchor: 'middle', lineGap: 8, lines: [{ text: t.cost, size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
      operating_profit: { blocks: [{ x: 1900, top: 301, anchor: 'middle', lineGap: 10, lines: [{ text: t.operating, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: t.operatingMargin, size: 29, weight: 400, color: NOTE }, { text: t.pp0, size: 29, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1900, top: 986, anchor: 'middle', lineGap: 8, lines: [...t.expenses.map((text) => ({ text, size: 38, weight: 800, color: RED_LABEL })), { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
      net_profit: { blocks: [{ x: zh ? 2518 : RIGHT_X, top: 343, anchor: 'middle', lineGap: 10, lines: [{ text: t.net, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: t.netMargin, size: 29, weight: 400, color: NOTE }, { text: t.pp0, size: 29, weight: 400, color: NOTE }] }] },
      tax: right(630, [t.tax]),
      other: right(742, [t.other]),
      advertising_promotion: right(880, t.advertising, true, [t.adsShare], 33, 2538),
      sga: right(1079, t.sga, true, [t.sgaShare]),
      research_innovation: right(1233, t.research, true, [t.researchShare]),
      // The short source bar is the interactive dividend node. Its text is
      // deliberately centred on the measured bar midpoint (x=2248), rather
      // than on the curve joining net profit.
      sanofi_dividend: { blocks: [{ x: 2248, top: 481, anchor: 'middle', lineGap: 5, lines: [
        { text: t.dividend[0], size: 33, weight: 800, color: GREEN_LABEL },
        { text: t.dividend[1], size: 33, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 33, weight: 400, color: GREEN_LABEL },
      ] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'loreal-fy25',
    name: 'L’Oréal · FY25',
    company: "L'Oréal",
    meta: {
      company: "L'Oréal", title: 'L’Oréal FY25 Income Statement', period: 'FY25', periodNote: 'Year ended Dec. 2025', currency: '€', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/loreal-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 1960,
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
      { key: 'loreal-professional-products-brands', href: 'data/assets/raster-annotations/loreal/professional-products-brands.png', x: 0, y: 318, width: 184, height: 150 },
      { key: 'loreal-consumer-products-brands', href: 'data/assets/raster-annotations/loreal/consumer-products-brands.png', x: 0, y: 572, width: 184, height: 154 },
      { key: 'loreal-luxe-brands', href: 'data/assets/raster-annotations/loreal/loreal-luxe-brands.png', x: 0, y: 881, width: 194, height: 152 },
      { key: 'loreal-active-cosmetics-brands', href: 'data/assets/raster-annotations/loreal/active-cosmetics-brands.png', x: 0, y: 1128, width: 194, height: 162 },
    ],
    layout: {
      scale: 8.5,
      nodes: {
        professional_products: { x: 463, y: 367, width: 72, height: 44 }, consumer_products: { x: 463, y: 581, width: 72, height: 137 }, loreal_luxe: { x: 463, y: 885, width: 72, height: 133 }, active_cosmetics: { x: 463, y: 1185, width: 72, height: 61 },
        revenue: { x: 930, y: 681, width: 72, height: 374 }, gross_profit: { x: 1397, y: 577, width: 72, height: 278 }, cost_of_sales: { x: 1397, y: 1088, width: 72, height: 96 },
        operating_profit: { x: 1864, y: 480, width: 72, height: 76 }, operating_expenses: { x: 1864, y: 763, width: 72, height: 202 }, sanofi_dividend: { x: 2209, y: 464, width: 77, height: 3 },
        net_profit: { x: 2332, y: 360, width: 72, height: 58 }, tax: { x: 2332, y: 658, width: 72, height: 19 }, other: { x: 2332, y: 778, width: 72, height: 2 }, advertising_promotion: { x: 2332, y: 880, width: 72, height: 121 }, sga: { x: 2332, y: 1079, width: 72, height: 71 }, research_innovation: { x: 2332, y: 1285, width: 72, height: 12 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'professional_products', col: 0, order: 0, type: 'source', label: ['Professional', 'Products'], value: 5.2, notes: ['+6% Y/Y'] }, { id: 'consumer_products', col: 0, order: 1, type: 'source', label: ['Consumer', 'Products'], value: 16.1, notes: ['+1% Y/Y'] }, { id: 'loreal_luxe', col: 0, order: 2, type: 'source', label: ["L’Oréal", 'Luxe'], value: 15.6, notes: ['+0% Y/Y'] }, { id: 'active_cosmetics', col: 0, order: 3, type: 'source', label: ['Active', 'Cosmetics'], value: 7.2, notes: ['+3% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 44.1, notes: ['+1% Y/Y'] }, { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 32.7, notes: ['74% of revenue', '+1pp Y/Y'] }, { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 11.3 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 8.9, notes: ['20% of revenue', '+0pp Y/Y'] }, { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 23.8, valueText: '(€23.8B)' }, { id: 'sanofi_dividend', col: 4, order: 0, type: 'profit', label: ['Sanofi', 'Dividend'], value: 0.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 6.8, notes: ['15% of revenue', '+0pp Y/Y'] }, { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.2 }, { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.2 }, { id: 'advertising_promotion', col: 5, order: 3, type: 'cost', label: ['Advertising &', 'Promotion'], value: 14.2, notes: ['32% of revenue'] }, { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 8.3, notes: ['19% of revenue'] }, { id: 'research_innovation', col: 5, order: 5, type: 'cost', label: ['Research &', 'Innovation'], value: 1.4, notes: ['3% of revenue'] },
    ],
    links: [
      { source: 'professional_products', target: 'revenue', value: 5.2, sourceWidth: 44, targetWidth: 44, y0: 389, y1: 703 }, { source: 'consumer_products', target: 'revenue', value: 16.1, sourceWidth: 137, targetWidth: 137, y0: 649.5, y1: 793.5 }, { source: 'loreal_luxe', target: 'revenue', value: 15.6, sourceWidth: 133, targetWidth: 133, y0: 951.5, y1: 928.5 }, { source: 'active_cosmetics', target: 'revenue', value: 7.2, sourceWidth: 61, targetWidth: 60, y0: 1215.5, y1: 1025 },
      { source: 'revenue', target: 'gross_profit', value: 32.7, sourceWidth: 278, targetWidth: 278, y0: 820, y1: 716, linkTint: GREEN_LINK }, { source: 'revenue', target: 'cost_of_sales', value: 11.3, sourceWidth: 96, targetWidth: 96, y0: 1007, y1: 1136 },
      { source: 'gross_profit', target: 'operating_profit', value: 8.9, sourceWidth: 76, targetWidth: 76, y0: 615, y1: 518, linkTint: GREEN_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 23.8, sourceWidth: 202, targetWidth: 202, y0: 754, y1: 864 },
      { source: 'operating_profit', target: 'net_profit', value: 6.4, sourceWidth: 54, targetWidth: 55, y0: 507, y1: 387.5, linkTint: GREEN_LINK }, { source: 'operating_profit', target: 'tax', value: 2.2, sourceWidth: 19, targetWidth: 19, y0: 543.5, y1: 667.5 }, { source: 'operating_profit', target: 'other', value: 0.2, sourceWidth: 2, targetWidth: 2, y0: 555, y1: 779 },
      { source: 'sanofi_dividend', target: 'net_profit', value: 0.4, sourceWidth: 3, targetWidth: 3, y0: 465.5, y1: 416.5, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN, right: GREEN }, curve: { c1x: 2305, c1y: 465.5, c2x: 2305, c2y: 416.5 } },
      { source: 'operating_expenses', target: 'advertising_promotion', value: 14.2, sourceWidth: 121, targetWidth: 121, y0: 823.5, y1: 940.5 }, { source: 'operating_expenses', target: 'sga', value: 8.3, sourceWidth: 69, targetWidth: 71, y0: 919.5, y1: 1114.5 }, { source: 'operating_expenses', target: 'research_innovation', value: 1.4, sourceWidth: 12, targetWidth: 12, y0: 959, y1: 1291 },
    ],
    i18n: {
      zh: {
        name: '欧莱雅 · 2025 财年',
        meta: { title: '欧莱雅 2025 财年利润表', period: '2025 财年', periodNote: '截至 2025 年 12 月', titleTextLength: 1900, hidePeriodStamp: true },
        nodes: {
          professional_products: { label: ['专业产品', '事业部'], notes: ['同比 +6%'] }, consumer_products: { label: ['大众化妆品', '事业部'], notes: ['同比 +1%'] }, loreal_luxe: { label: ['欧莱雅', '高档化妆品'], notes: ['同比 +0%'] }, active_cosmetics: { label: ['皮肤科学', '美容事业部'], notes: ['同比 +3%'] }, revenue: { label: '收入', notes: ['同比 +1%'] }, gross_profit: { label: '毛利润', notes: ['占收入 74%', '同比 +1 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['占收入 20%', '同比 +0 个百分点'] }, operating_expenses: { label: ['运营', '费用'] }, sanofi_dividend: { label: ['赛诺菲', '股息'] }, net_profit: { label: '净利润', notes: ['占收入 15%', '同比 +0 个百分点'] }, tax: { label: '税费' }, other: { label: '其他' }, advertising_promotion: { label: ['广告与', '推广'], notes: ['占收入 32%'] }, sga: { label: ['销售、一般及', '管理费用'], notes: ['占收入 19%'] }, research_innovation: { label: ['研发与', '创新'], notes: ['占收入 3%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
