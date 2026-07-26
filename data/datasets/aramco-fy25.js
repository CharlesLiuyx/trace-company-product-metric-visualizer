/* ====================================================================
 * Saudi Aramco - FY25 income statement (USD B)
 * Reconstructed from input/processed/aramco-fy25.png as a fixed d3-sankey
 * layout. The Source-visible square Aramco mark is the only approved runtime
 * raster; every financial mark is native SVG.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLUE = '#007eac';
  const BLUE_LINK = '#85bdd2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_X = 2378;

  const labels = (zh = false) => {
    const copy = zh
      ? {
        crude: '原油',
        refined: ['炼油及', '化工产品'],
        gas: ['天然气及', '天然气液'],
        other: '其他',
        reportedRevenue: '收入',
        salesRelated: ['销售相关', '其他收入'],
        revenue: ['收入及', '其他收入'],
        operatingProfit: '营业利润',
        operatingExpenses: ['营业', '费用'],
        finance: '财务收益',
        netProfit: '净利润',
        tax: '税费',
        purchases: '采购',
        royalties: '特许权使用费',
        da: '折旧及摊销',
        producing: ['生产及', '制造'],
        sga: '销售、一般及行政费用',
        exploration: '勘探',
        rnd: '研发',
        yoyCrude: '同比 -12%',
        yoyRefined: '同比 -1%',
        yoyGas: '同比 +22%',
        yoyOther: '同比 +61%',
        yoyRevenue: '同比 -5%',
        yoySalesRelated: '同比 -32%',
        yoyCombined: '同比 -7%',
        margin42: '利润率 42%',
        margin21: '利润率 21%',
        pp1: '同比 -1 个百分点',
      }
      : {
        crude: 'Crude Oil',
        refined: ['Refined &', 'Chemical products'],
        gas: ['Natural gas', '& NGLs'],
        other: 'Other',
        reportedRevenue: 'Revenue',
        salesRelated: ['Other income', 'related to sales'],
        revenue: ['Revenue &', 'Other income'],
        operatingProfit: 'Operating profit',
        operatingExpenses: ['Operating', 'expenses'],
        finance: 'Finance',
        netProfit: 'Net profit',
        tax: 'Tax',
        purchases: 'Purchases',
        royalties: 'Royalties',
        da: 'D&A',
        producing: ['Producing &', 'Manufacturing'],
        sga: 'SG&A',
        exploration: 'Exploration',
        rnd: 'R&D',
        yoyCrude: '(12%) Y/Y',
        yoyRefined: '(1%) Y/Y',
        yoyGas: '+22% Y/Y',
        yoyOther: '+61% Y/Y',
        yoyRevenue: '(5%) Y/Y',
        yoySalesRelated: '(32%) Y/Y',
        yoyCombined: '(7%) Y/Y',
        margin42: '42% margin',
        margin21: '21% margin',
        pp1: '(1pp) Y/Y',
      };

    const heading = (lines, size = 42) => (Array.isArray(lines) ? lines : [lines])
      .map((text) => ({ text, size, weight: 800 }));
    const terminal = (text, top, size = 31, x = RIGHT_X) => ({
      blocks: [{ x, top, anchor: 'start', lines: [{ text, size, weight: 800 }] }],
    });

    return {
      crude_oil: {
        blocks: [
          {
            x: 457, top: 299, anchor: 'middle', lineGap: 8,
            lines: [
              { text: '$value', size: 42, weight: 400 },
              { text: copy.yoyCrude, size: 29, weight: 400, color: NOTE },
            ],
          },
          { x: 398, top: 437, anchor: 'end', lines: heading(copy.crude, 42) },
        ],
      },
      refined_chemical_products: {
        blocks: [
          {
            x: 457, top: 567, anchor: 'middle', lineGap: 8,
            lines: [
              { text: '$value', size: 42, weight: 400 },
              { text: copy.yoyRefined, size: 29, weight: 400, color: NOTE },
            ],
          },
          { x: 398, top: 686, anchor: 'end', lineGap: 7, lines: heading(copy.refined, 40) },
        ],
      },
      natural_gas_ngls: {
        blocks: [
          {
            x: 457, top: 822, anchor: 'middle', lineGap: 8,
            lines: [
              { text: '$value', size: 42, weight: 400 },
              { text: copy.yoyGas, size: 29, weight: 400, color: NOTE },
            ],
          },
          { x: 389, top: 895, anchor: 'end', lineGap: 7, lines: heading(copy.gas, 39) },
        ],
      },
      other: {
        blocks: [
          {
            x: 457, top: 967, anchor: 'middle', lineGap: 8,
            lines: [
              { text: '$value', size: 42, weight: 400 },
              { text: copy.yoyOther, size: 29, weight: 400, color: NOTE },
            ],
          },
          { x: 388, top: 1041, anchor: 'end', lines: heading(copy.other, 42) },
        ],
      },
      reported_revenue: {
        blocks: [{
          x: 923, top: 384, anchor: 'middle', lineGap: 9,
          lines: [
            ...heading(copy.reportedRevenue, 43),
            { text: '$value', size: 42, weight: 400 },
            { text: copy.yoyRevenue, size: 29, weight: 400, color: NOTE },
          ],
        }],
      },
      other_income_related_sales: {
        blocks: [{
          x: 923, top: 1092, anchor: 'middle', lineGap: 8,
          lines: [
            ...heading(copy.salesRelated, 40),
            { text: '$value', size: 38, weight: 400 },
            { text: copy.yoySalesRelated, size: 29, weight: 400, color: NOTE },
          ],
        }],
      },
      revenue: {
        blocks: [{
          x: 1390, top: 462, anchor: 'middle', lineGap: 9,
          lines: [
            ...heading(copy.revenue, 42),
            { text: '$value', size: 42, weight: 400 },
            { text: copy.yoyCombined, size: 29, weight: 400, color: NOTE },
          ],
        }],
      },
      operating_profit: {
        blocks: [{
          x: 1858, top: 347, anchor: 'middle', lineGap: 8,
          lines: [
            ...heading(copy.operatingProfit, 42),
            { text: '$value', size: 41, weight: 400 },
            { text: copy.margin42, size: 29, weight: 400, color: NOTE },
            { text: copy.pp1, size: 29, weight: 400, color: NOTE },
          ],
        }],
      },
      operating_expenses: {
        blocks: [{
          x: 1858, top: 1076, anchor: 'middle', lineGap: 8,
          lines: [
            ...heading(copy.operatingExpenses, 40),
            { text: '$value', size: 38, weight: 400 },
          ],
        }],
      },
      finance: {
        blocks: [{
          x: 2178, top: 198, anchor: 'middle', lineGap: 7,
          lines: [
            ...heading(copy.finance, 31),
            { text: '$value', size: 31, weight: 400 },
          ],
        }],
      },
      net_profit: {
        blocks: [{
          x: RIGHT_X, top: 259, anchor: 'start', lineGap: 8,
          lines: [
            ...heading(copy.netProfit, 42),
            { text: '$value', size: 41, weight: 400 },
            { text: copy.margin21, size: 29, weight: 400, color: NOTE },
            { text: copy.pp1, size: 29, weight: 400, color: NOTE },
          ],
        }],
      },
      tax: terminal(`${copy.tax} ($94.0B)`, 467, 31, RIGHT_X + 5),
      other_expense: terminal(`${copy.other} ($2.2B)`, 586, 31),
      purchases: {
        blocks: [{
          x: RIGHT_X + 42, top: 692, anchor: 'start', lineGap: 5,
          lines: [
            ...heading(copy.purchases, 31),
            { text: '($121.7B)', size: 31, weight: 400 },
          ],
        }],
      },
      royalties: {
        blocks: [{
          x: RIGHT_X + 50, top: 840, anchor: 'start', lineGap: 5,
          lines: [
            ...heading(copy.royalties, zh ? 29 : 31),
            { text: '($40.4B)', size: 31, weight: 400 },
          ],
        }],
      },
      da: terminal(`${copy.da} ($33.5B)`, 958, 31, RIGHT_X + (zh ? 0 : 19)),
      producing_manufacturing: {
        blocks: [{
          x: RIGHT_X + 7, top: 1038, anchor: 'start', lineGap: 5,
          lines: [
            ...heading(copy.producing, 31),
            { text: '($35.2B)', size: 31, weight: 400 },
          ],
        }],
      },
      sga: zh
        ? {
          blocks: [{
            x: RIGHT_X - 2, top: 1151, anchor: 'start', lineGap: 5,
            lines: [
              ...heading(copy.sga, 29),
              { text: '($22.3B)', size: 29, weight: 400 },
            ],
          }],
        }
        : terminal(`${copy.sga} ($22.3B)`, 1172, 31, RIGHT_X + 8),
      exploration: {
        blocks: [{
          x: RIGHT_X + 31, top: 1244, anchor: 'start', lineGap: 5,
          lines: [
            ...heading(copy.exploration, 31),
            { text: '($2.7B)', size: 31, weight: 400 },
          ],
        }],
      },
      rnd: terminal(`${copy.rnd} ($1.5B)`, 1349, 31, RIGHT_X + 31),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'aramco-fy25',
    name: 'Saudi Aramco · FY25',
    company: 'Saudi Aramco',
    meta: {
      company: 'Saudi Aramco',
      title: 'Aramco FY25 Income Statement',
      period: 'FY25',
      periodNote: 'Year ended Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/aramco-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2000,
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
    rasterAnnotations: [
      {
        key: 'aramco-company-mark-fy25',
        href: 'data/assets/raster-annotations/aramco/company-mark-fy25.png',
        x: 1282,
        y: 231,
        width: 200,
        height: 198,
      },
    ],
    nodes: [
      { id: 'crude_oil', label: 'Crude Oil', value: 188.3, valueText: '$188.3B', notes: ['(12%) Y/Y'], type: 'source', col: 0, order: 0 },
      { id: 'refined_chemical_products', label: ['Refined &', 'Chemical products'], value: 207.2, valueText: '$207.2B', notes: ['(1%) Y/Y'], type: 'source', col: 0, order: 1 },
      { id: 'natural_gas_ngls', label: ['Natural gas', '& NGLs'], value: 17.4, valueText: '$17.4B', notes: ['+22% Y/Y'], type: 'source', col: 0, order: 2 },
      { id: 'other', label: 'Other', value: 3.0, valueText: '$3.0B', notes: ['+61% Y/Y'], type: 'source', col: 0, order: 3 },
      { id: 'reported_revenue', label: 'Revenue', value: 415.8, valueText: '$415.8B', notes: ['(5%) Y/Y'], type: 'hub', col: 1, order: 0 },
      { id: 'other_income_related_sales', label: ['Other income', 'related to sales'], value: 29.8, valueText: '$29.8B', notes: ['(32%) Y/Y'], type: 'source', col: 1, order: 1 },
      { id: 'revenue', label: ['Revenue &', 'Other income'], value: 445.7, valueText: '$445.7B', notes: ['(7%) Y/Y'], type: 'hub', col: 2, order: 0 },
      { id: 'operating_profit', label: 'Operating profit', value: 188.5, valueText: '$188.5B', notes: ['42% margin', '(1pp) Y/Y'], type: 'profit', col: 3, order: 0 },
      { id: 'operating_expenses', label: ['Operating', 'expenses'], value: 257.2, valueText: '($257.2B)', type: 'cost', col: 3, order: 1 },
      { id: 'finance', label: 'Finance', value: 1.2, valueText: '$1.2B', type: 'profit', col: 3, order: 2 },
      { id: 'net_profit', label: 'Net profit', value: 93.4, valueText: '$93.4B', notes: ['21% margin', '(1pp) Y/Y'], type: 'profit', col: 4, order: 0 },
      { id: 'tax', label: 'Tax', value: 94.0, valueText: '($94.0B)', type: 'cost', col: 4, order: 1 },
      { id: 'other_expense', label: 'Other', value: 2.2, valueText: '($2.2B)', type: 'cost', col: 4, order: 2 },
      { id: 'purchases', label: 'Purchases', value: 121.7, valueText: '($121.7B)', type: 'cost', col: 4, order: 3 },
      { id: 'royalties', label: 'Royalties', value: 40.4, valueText: '($40.4B)', type: 'cost', col: 4, order: 4 },
      { id: 'da', label: 'D&A', value: 33.5, valueText: '($33.5B)', type: 'cost', col: 4, order: 5 },
      { id: 'producing_manufacturing', label: ['Producing &', 'Manufacturing'], value: 35.2, valueText: '($35.2B)', type: 'cost', col: 4, order: 6 },
      { id: 'sga', label: 'SG&A', value: 22.3, valueText: '($22.3B)', type: 'cost', col: 4, order: 7 },
      { id: 'exploration', label: 'Exploration', value: 2.7, valueText: '($2.7B)', type: 'cost', col: 4, order: 8 },
      { id: 'rnd', label: 'R&D', value: 1.5, valueText: '($1.5B)', type: 'cost', col: 4, order: 9 },
    ],
    links: [
      { source: 'crude_oil', target: 'reported_revenue', value: 188.3, sourceWidth: 134, targetWidth: 132, targetOrder: 0 },
      { source: 'refined_chemical_products', target: 'reported_revenue', value: 207.2, sourceWidth: 147, targetWidth: 145, targetOrder: 1 },
      { source: 'natural_gas_ngls', target: 'reported_revenue', value: 17.4, sourceWidth: 13, targetWidth: 12, targetOrder: 2 },
      { source: 'other', target: 'reported_revenue', value: 3.0, sourceWidth: 3, targetWidth: 2.1, targetOrder: 3 },
      { source: 'reported_revenue', target: 'revenue', value: 415.8, sourceWidth: 291.1, targetWidth: 291.1, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_income_related_sales', target: 'revenue', value: 29.8, sourceWidth: 22, targetWidth: 21, targetOrder: 1 },
      { source: 'revenue', target: 'operating_profit', value: 188.5, sourceWidth: 132, targetWidth: 132, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 257.2, sourceWidth: 180, targetWidth: 180, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 93.4, sourceWidth: 65, targetWidth: 65, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 94.0, sourceWidth: 66, targetWidth: 66, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 2.2, sourceWidth: 1, targetWidth: 3, sourceOrder: 2, targetOrder: 0 },
      { source: 'finance', target: 'net_profit', value: 1.2, sourceWidth: 3, targetWidth: 1, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'purchases', value: 121.7, sourceWidth: 85.2, targetWidth: 86, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'royalties', value: 40.4, sourceWidth: 28.3, targetWidth: 29, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 33.5, sourceWidth: 23.5, targetWidth: 25, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'producing_manufacturing', value: 35.2, sourceWidth: 24.6, targetWidth: 24.6, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 22.3, sourceWidth: 15.6, targetWidth: 15.6, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'exploration', value: 2.7, sourceWidth: 1.9, targetWidth: 4, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.5, sourceWidth: 1.1, targetWidth: 3, sourceOrder: 6, targetOrder: 0 },
    ],
    layout: {
      scale: 0.7,
      nodes: {
        crude_oil: { x: 420, y: 395, width: 72, height: 134 },
        refined_chemical_products: { x: 420, y: 657, width: 72, height: 147 },
        natural_gas_ngls: { x: 420, y: 935, width: 72, height: 13 },
        other: { x: 420, y: 1065, width: 72, height: 3 },
        reported_revenue: { x: 887, y: 529, width: 72, height: 291.1 },
        other_income_related_sales: { x: 887, y: 1045, width: 72, height: 22 },
        revenue: { x: 1354, y: 657, width: 72, height: 312.1 },
        operating_profit: { x: 1822, y: 527, width: 72, height: 132 },
        operating_expenses: { x: 1822, y: 886, width: 72, height: 180.2 },
        finance: { x: 2140, y: 284, width: 71, height: 3 },
        net_profit: { x: 2288, y: 306, width: 72, height: 66 },
        tax: { x: 2288, y: 448, width: 72, height: 66 },
        other_expense: { x: 2288, y: 606, width: 72, height: 3 },
        purchases: { x: 2288, y: 688, width: 72, height: 86 },
        royalties: { x: 2288, y: 858, width: 72, height: 29 },
        da: { x: 2288, y: 967, width: 72, height: 25 },
        producing_manufacturing: { x: 2288, y: 1082, width: 72, height: 24.6 },
        sga: { x: 2288, y: 1186, width: 72, height: 15.6 },
        exploration: { x: 2288, y: 1286, width: 72, height: 4 },
        rnd: { x: 2288, y: 1371, width: 72, height: 3 },
      },
      labels: labels(),
    },
    i18n: {
      zh: {
        name: '沙特阿美 · 2025 财年',
        meta: {
          title: '沙特阿美 2025 财年利润表',
          periodNote: '截至 2025 年 12 月的年度',
          titleSize: 105,
          titleTextLength: 1450,
        },
        nodes: {
          crude_oil: { label: '原油', notes: ['同比 -12%'] },
          refined_chemical_products: { label: ['炼油及', '化工产品'], notes: ['同比 -1%'] },
          natural_gas_ngls: { label: ['天然气及', '天然气液'], notes: ['同比 +22%'] },
          other: { label: '其他', notes: ['同比 +61%'] },
          reported_revenue: { label: '收入', notes: ['同比 -5%'] },
          other_income_related_sales: { label: ['销售相关', '其他收入'], notes: ['同比 -32%'] },
          revenue: { label: ['收入及', '其他收入'], notes: ['同比 -7%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 -1 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          finance: { label: '财务收益' },
          net_profit: { label: '净利润', notes: ['利润率 21%', '同比 -1 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          purchases: { label: '采购' },
          royalties: { label: '特许权使用费' },
          da: { label: '折旧及摊销' },
          producing_manufacturing: { label: ['生产及', '制造'] },
          sga: { label: '销售、一般及行政费用' },
          exploration: { label: '勘探' },
          rnd: { label: '研发' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
