/* ====================================================================
 * Saudi Aramco - Q1 FY26 income statement (SAR B)
 * Reconstructed from input/processed/aramco-q1-fy26.png as a fixed
 * d3-sankey layout. The bilingual Saudi Aramco lockup is the one approved
 * runtime raster annotation; all financial marks are native SVG.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLUE = '#0781b7';
  const BLUE_LINK = '#83b9d0';
  const GREEN = '#2ca329';
  const GREEN_LABEL = '#008e49';
  const GREEN_LINK = '#9bcf9a';
  const RED = '#d40000';
  const RED_LABEL = '#971600';
  const RED_LINK = '#e08383';
  const NOTE = '#68686a';
  const RIGHT_X = 2398;

  const annotations = (zh = false) => `
    <g>
      <text x="234" y="280" font-size="40" font-weight="800" fill="${TITLE}">${zh ? '单位：十亿沙特里亚尔' : 'In SAR billion'}</text>
    </g>`;

  const labels = (zh = false) => {
    const copy = zh
      ? {
        crude: '原油', refined: ['炼油及', '化工产品'], gas: ['天然气及', '天然气液'], other: '其他',
        reportedRevenue: '收入', salesRelated: ['销售相关', '其他收入'], revenue: ['收入及', '其他收入'],
        operatingProfit: '营业利润', operatingExpenses: ['营业', '费用'], netProfit: '净利润', tax: '税费',
        purchases: '采购', royalties: '特许权使用费', sga: '销售、一般及行政费用',
        producing: ['生产及', '制造'], da: '折旧及摊销', exploration: '勘探', rnd: '研发',
        yoy1: '同比 +1%', yoy8: '同比 +8%', yoy30: '同比 +30%', yoy143: '同比 +143%',
        yoy7: '同比 +7%', yoy42: '同比 +42%', yoy9: '同比 +9%', margin48: '利润率 48%',
        margin26: '利润率 26%', pp3: '同比 +3 个百分点',
      }
      : {
        crude: 'Crude Oil', refined: ['Refined &', 'Chemical products'], gas: ['Natural gas', '& NGLs'], other: 'Other',
        reportedRevenue: 'Revenue', salesRelated: ['Other income', 'related to sales'], revenue: ['Revenue &', 'Other income'],
        operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'], netProfit: 'Net profit', tax: 'Tax',
        purchases: 'Purchases', royalties: 'Royalties', sga: 'SG&A',
        producing: ['Producing &', 'Manufacturing'], da: 'D&A', exploration: 'Exploration', rnd: 'R&D',
        yoy1: '+1% Y/Y', yoy8: '+8% Y/Y', yoy30: '+30% Y/Y', yoy143: '+143% Y/Y',
        yoy7: '+7% Y/Y', yoy42: '+42% Y/Y', yoy9: '+9% Y/Y', margin48: '48% margin',
        margin26: '26% margin', pp3: '+3pp Y/Y',
      };
    const headingLines = (lines, size = 42) => (Array.isArray(lines) ? lines : [lines])
      .map((text) => ({ text, size, weight: 800 }));
    const terminal = (text, top, size = 32) => ({
      blocks: [{ x: RIGHT_X, top, anchor: 'start', lines: [{ text, size, weight: 800 }] }],
    });

    return {
      crude_oil: {
        blocks: [
          { x: 456, top: 374, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 42, weight: 400 }, { text: copy.yoy1, size: 29, weight: 400, color: NOTE }] },
          { x: 398, top: 514, anchor: 'end', lines: headingLines(copy.crude, 42) },
        ],
      },
      refined_chemical_products: {
        blocks: [
          { x: 456, top: 601, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 42, weight: 400 }, { text: copy.yoy8, size: 29, weight: 400, color: NOTE }] },
          { x: 398, top: 714, anchor: 'end', lineGap: 7, lines: headingLines(copy.refined, 40) },
        ],
      },
      natural_gas_ngls: {
        blocks: [
          { x: 456, top: 846, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 42, weight: 400 }, { text: copy.yoy30, size: 29, weight: 400, color: NOTE }] },
          { x: 389, top: 898, anchor: 'end', lineGap: 7, lines: headingLines(copy.gas, 39) },
        ],
      },
      other: {
        blocks: [
          { x: 456, top: 974, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 42, weight: 400 }, { text: copy.yoy143, size: 29, weight: 400, color: NOTE }] },
          { x: 388, top: 1055, anchor: 'end', lines: headingLines(copy.other, 42) },
        ],
      },
      reported_revenue: {
        blocks: [{ x: 923, top: 474, anchor: 'middle', lineGap: 9, lines: [
          ...headingLines(copy.reportedRevenue, 43), { text: '$value', size: 42, weight: 400 }, { text: copy.yoy7, size: 29, weight: 400, color: NOTE },
        ] }],
      },
      other_income_related_sales: {
        blocks: [{ x: 923, top: 1127, anchor: 'middle', lineGap: 8, lines: [
          ...headingLines(copy.salesRelated, 40), { text: '$value', size: 38, weight: 400 }, { text: copy.yoy42, size: 29, weight: 400, color: NOTE },
        ] }],
      },
      revenue: {
        blocks: [{ x: 1390, top: 525, anchor: 'middle', lineGap: 9, lines: [
          ...headingLines(copy.revenue, 42), { text: '$value', size: 42, weight: 400 }, { text: copy.yoy9, size: 29, weight: 400, color: NOTE },
        ] }],
      },
      operating_profit: {
        blocks: [{ x: 1857, top: 432, anchor: 'middle', lineGap: 8, lines: [
          ...headingLines(copy.operatingProfit, 42), { text: '$value', size: 41, weight: 400 }, { text: copy.margin48, size: 29, weight: 400, color: NOTE }, { text: copy.pp3, size: 29, weight: 400, color: NOTE },
        ] }],
      },
      operating_expenses: {
        blocks: [{ x: 1857, top: 1132, anchor: 'middle', lineGap: 8, lines: [
          ...headingLines(copy.operatingExpenses, 40), { text: '$value', size: 38, weight: 400 },
        ] }],
      },
      net_profit: {
        blocks: [{ x: RIGHT_X, top: 381, anchor: 'start', lineGap: 8, lines: [
          ...headingLines(copy.netProfit, 42), { text: '$value', size: 41, weight: 400 }, { text: copy.margin26, size: 29, weight: 400, color: NOTE }, { text: copy.pp3, size: 29, weight: 400, color: NOTE },
        ] }],
      },
      tax: terminal(`${copy.tax} (100B)`, 592, 32),
      purchases: terminal(`${copy.purchases} (112B)`, 738, 32),
      royalties: terminal(`${copy.royalties} (41B)`, 850, zh ? 30 : 32),
      sga: zh
        ? {
          blocks: [{ x: RIGHT_X, top: 938, anchor: 'start', lineGap: 5, lines: [
            { text: '销售、一般及', size: 31, weight: 800 },
            { text: '行政费用 (36B)', size: 31, weight: 800 },
          ] }],
        }
        : terminal(`${copy.sga} (36B)`, 952, 32),
      producing_manufacturing: {
        blocks: [{ x: RIGHT_X, top: 1017, anchor: 'start', lineGap: 6, lines: [
          ...headingLines(copy.producing, 32), { text: '(30B)', size: 31, weight: 400 },
        ] }],
      },
      da: terminal(`${copy.da} (24B)`, 1162, 32),
      exploration: terminal(`${copy.exploration} (1B)`, 1261, 31),
      rnd: terminal(`${copy.rnd} (1B)`, 1346, 31),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'aramco-q1-fy26',
    name: 'Saudi Aramco · Q1 FY26',
    company: 'Saudi Aramco',
    meta: {
      company: 'Saudi Aramco',
      title: 'Aramco Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '',
      unit: 'B',
      decimals: 0,
      referenceImage: { src: 'input/processed/aramco-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2190,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
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
      type: { name: 42, value: 42, note: 29, lineGap: 8 },
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations(),
    rasterAnnotations: [
      {
        key: 'aramco-company-lockup',
        href: 'data/assets/raster-annotations/aramco/company-lockup.png',
        x: 750, y: 210, width: 740, height: 220,
      },
    ],
    nodes: [
      { id: 'crude_oil', label: 'Crude Oil', value: 199, notes: ['+1% Y/Y'], type: 'source', col: 0, order: 0 },
      { id: 'refined_chemical_products', label: ['Refined &', 'Chemical products'], value: 206, notes: ['+8% Y/Y'], type: 'source', col: 0, order: 1 },
      { id: 'natural_gas_ngls', label: ['Natural gas', '& NGLs'], value: 18, notes: ['+30% Y/Y'], type: 'source', col: 0, order: 2 },
      { id: 'other', label: 'Other', value: 10, notes: ['+143% Y/Y'], type: 'source', col: 0, order: 3 },
      { id: 'reported_revenue', label: 'Revenue', value: 433, notes: ['+7% Y/Y'], type: 'hub', col: 1, order: 0 },
      { id: 'other_income_related_sales', label: ['Other income', 'related to sales'], value: 34, notes: ['+42% Y/Y'], type: 'source', col: 1, order: 1 },
      { id: 'revenue', label: ['Revenue &', 'Other income'], value: 467, notes: ['+9% Y/Y'], type: 'hub', col: 2, order: 0 },
      { id: 'operating_profit', label: 'Operating profit', value: 223, notes: ['48% margin', '+3pp Y/Y'], type: 'profit', col: 3, order: 0 },
      { id: 'operating_expenses', label: ['Operating', 'expenses'], value: 245, type: 'cost', col: 3, order: 1 },
      { id: 'net_profit', label: 'Net profit', value: 122, notes: ['26% margin', '+3pp Y/Y'], type: 'profit', col: 4, order: 0 },
      { id: 'tax', label: 'Tax', value: 100, type: 'cost', col: 4, order: 1 },
      { id: 'purchases', label: 'Purchases', value: 112, type: 'cost', col: 4, order: 2 },
      { id: 'royalties', label: 'Royalties', value: 41, type: 'cost', col: 4, order: 3 },
      { id: 'sga', label: 'SG&A', value: 36, type: 'cost', col: 4, order: 4 },
      { id: 'producing_manufacturing', label: ['Producing &', 'Manufacturing'], value: 30, type: 'cost', col: 4, order: 5 },
      { id: 'da', label: 'D&A', value: 24, type: 'cost', col: 4, order: 6 },
      { id: 'exploration', label: 'Exploration', value: 1, type: 'cost', col: 4, order: 7 },
      { id: 'rnd', label: 'R&D', value: 1, type: 'cost', col: 4, order: 8 },
    ],
    links: [
      { source: 'crude_oil', target: 'reported_revenue', value: 199, targetWidth: 123, targetOrder: 0 },
      { source: 'refined_chemical_products', target: 'reported_revenue', value: 206, targetWidth: 127, targetOrder: 1 },
      { source: 'natural_gas_ngls', target: 'reported_revenue', value: 18, targetWidth: 10.8, targetOrder: 2 },
      { source: 'other', target: 'reported_revenue', value: 10, sourceWidth: 5, targetWidth: 5.2, targetOrder: 3 },
      { source: 'reported_revenue', target: 'revenue', value: 433, sourceWidth: 266, targetWidth: 266, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_income_related_sales', target: 'revenue', value: 34, sourceWidth: 21.08, targetWidth: 20, targetOrder: 1 },
      { source: 'revenue', target: 'operating_profit', value: 222, sourceWidth: 135, targetWidth: 135, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 245, sourceWidth: 151, targetWidth: 150, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 122, sourceWidth: 75, targetWidth: 76, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 100, sourceWidth: 60, targetWidth: 62, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'purchases', value: 112, sourceWidth: 69, targetWidth: 70, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'royalties', value: 41, sourceWidth: 25, targetWidth: 25.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 36, sourceWidth: 22, targetWidth: 22.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'producing_manufacturing', value: 30, sourceWidth: 18, targetWidth: 19, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 24, sourceWidth: 14, targetWidth: 15, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'exploration', value: 1, sourceWidth: 1, targetWidth: 1.2, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1, sourceWidth: 1, targetWidth: 1.2, sourceOrder: 6, targetOrder: 0 },
    ],
    layout: {
      scale: 0.62,
      nodes: {
        crude_oil: { x: 420, y: 472, width: 72, height: 124 },
        refined_chemical_products: { x: 420, y: 697, width: 72, height: 128 },
        natural_gas_ngls: { x: 420, y: 940, width: 72, height: 11.2 },
        other: { x: 420, y: 1071, width: 72, height: 5 },
        reported_revenue: { x: 887, y: 624, width: 72, height: 266 },
        other_income_related_sales: { x: 887, y: 1086, width: 72, height: 21.1 },
        revenue: { x: 1353, y: 724, width: 74, height: 286 },
        operating_profit: { x: 1820, y: 625, width: 74, height: 135 },
        operating_expenses: { x: 1820, y: 961, width: 74, height: 150 },
        net_profit: { x: 2288, y: 422, width: 72, height: 76 },
        tax: { x: 2288, y: 576, width: 72, height: 62 },
        purchases: { x: 2288, y: 716, width: 72, height: 70 },
        royalties: { x: 2288, y: 852, width: 72, height: 25.5 },
        sga: { x: 2288, y: 957, width: 72, height: 22.5 },
        producing_manufacturing: { x: 2288, y: 1064, width: 72, height: 19 },
        da: { x: 2288, y: 1170, width: 72, height: 15 },
        exploration: { x: 2288, y: 1275, width: 72, height: 1.2 },
        rnd: { x: 2288, y: 1363, width: 72, height: 1.2 },
      },
      labels: labels(),
    },
    i18n: {
      zh: {
        name: '沙特阿美 · 2026 财年第一季度',
        meta: {
          title: '沙特阿美 2026 财年第一季度利润表',
          titleSize: 105,
          titleTextLength: 1600,
        },
        annotationsSvg: annotations(true),
        nodes: {
          crude_oil: { label: '原油', notes: ['同比 +1%'] },
          refined_chemical_products: { label: ['炼油及', '化工产品'], notes: ['同比 +8%'] },
          natural_gas_ngls: { label: ['天然气及', '天然气液'], notes: ['同比 +30%'] },
          other: { label: '其他', notes: ['同比 +143%'] },
          reported_revenue: { label: '收入', notes: ['同比 +7%'] },
          other_income_related_sales: { label: ['销售相关', '其他收入'], notes: ['同比 +42%'] },
          revenue: { label: ['收入及', '其他收入'], notes: ['同比 +9%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 48%', '同比 +3 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 26%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          purchases: { label: '采购' },
          royalties: { label: '特许权使用费' },
          sga: { label: '销售、一般及行政费用' },
          producing_manufacturing: { label: ['生产及', '制造'] },
          da: { label: '折旧及摊销' },
          exploration: { label: '勘探' },
          rnd: { label: '研发' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
