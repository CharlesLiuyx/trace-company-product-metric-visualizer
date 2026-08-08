/* SK hynix Q2 FY26 income statement (KRW T), measured from the native
 * 2667x1500 Source. Financial values live in data/income-statements/sk-hynix.js. */
(function () {
  'use strict';

  const TITLE = '#155077';
  const NOTE = '#666666';
  const ORANGE = '#e6863e';
  const ORANGE_LABEL = '#e31837';
  const ORANGE_LINK = '#edc1a1';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';

  const LOGO = `
    <g data-typography-role="brand">
      <path d="M188 40C217 42 239 57 254 79C235 80 219 89 207 105C202 82 195 60 188 40Z" fill="#f58025"/>
      <path d="M256 56C280 68 298 86 310 109C288 106 269 112 251 127C252 103 254 80 256 56Z" fill="#e31837"/>
      <path d="M313 85C339 98 359 117 372 141C347 136 325 142 307 158C309 132 311 108 313 85Z" fill="#f58025"/>
      <text x="42" y="222" font-family="Noto Sans,Arial,sans-serif" font-size="142" font-weight="800" fill="#e31837">SK</text>
      <text x="270" y="222" font-family="Noto Sans,Arial,sans-serif" font-size="126" font-weight="700" fill="#f58025">hynix</text>
    </g>`;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight ?? 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap ?? 8,
    lines,
  });

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif" fill="${TITLE}">
      <text x="85" y="270" font-size="36" font-weight="800">${zh ? '单位：万亿' : 'In KRW'}</text>
      <text x="85" y="320" font-size="36" font-weight="800">${zh ? '韩元' : 'trillion'}</text>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      nand: 'NAND 闪存', revenue: '收入', gross: ['毛利润'], cost: ['销售成本'],
      operatingProfit: ['营业利润'], operatingExpenses: ['营业', '费用'], finance: '财务收益',
      net: '净利润', tax: '税费',
      yy238: '同比 +238%', yy359: '同比 +359%', yy257: '同比 +257%',
      margin83: '利润率 83%', pp46: '同比下降 46 个百分点', margin76: '利润率 76%',
      pp35: '同比 +35 个百分点', margin118: '利润率 118%', pp87: '同比 +87 个百分点',
    } : {
      nand: 'NAND Flash', revenue: 'Revenue', gross: ['Gross', 'profit'], cost: ['Cost of sales'],
      operatingProfit: ['Operating', 'profit'], operatingExpenses: ['Operating', 'expenses'], finance: 'Finance',
      net: 'Net profit', tax: 'Tax',
      yy238: '+238% Y/Y', yy359: '+359% Y/Y', yy257: '+257% Y/Y',
      margin83: '83% margin', pp46: '(46pp) Y/Y', margin76: '76% margin',
      pp35: '+35pp Y/Y', margin118: '118% margin', pp87: '+87pp Y/Y',
    };

    return {
      dram: {
        blocks: [
          block(438, 674, [line('$value', 39, { color: ORANGE_LABEL }), line(t.yy238, 28, { color: NOTE })], { lineGap: 7 }),
          block(210, 862, [line('DRAM', 39, { weight: 800, color: ORANGE_LABEL })]),
        ],
      },
      nand_flash: {
        blocks: [
          block(438, 1059, [line('$value', 39, { color: ORANGE_LABEL }), line(t.yy359, 28, { color: NOTE })], { lineGap: 7 }),
          block(210, 1176, [line(t.nand, zh ? 34 : 39, { weight: 800, color: ORANGE_LABEL })]),
        ],
      },
      revenue: {
        blocks: [block(817, 729, [
          line(t.revenue, 40, { weight: 800, color: ORANGE_LABEL }),
          line('$value', 39, { color: ORANGE_LABEL }),
          line(t.yy257, 28, { color: NOTE }),
        ], { lineGap: 7 })],
      },
      gross_profit: {
        blocks: [block(1187, 550, [
          ...t.gross.map((value) => line(value, 39, { weight: 800, color: GREEN_LABEL })),
          line('$value', 39, { color: GREEN_LABEL }),
          line(t.margin83, 28, { color: NOTE }),
          line(t.pp46, zh ? 24 : 28, { color: NOTE }),
        ], { lineGap: 7 })],
      },
      cost_of_sales: {
        blocks: [block(1187, 1258, [
          ...t.cost.map((value) => line(value, zh ? 34 : 36, { weight: 800, color: RED_LABEL })),
          line('$value', 35, { color: RED_LABEL }),
        ], { lineGap: 7 })],
      },
      operating_profit: {
        blocks: [block(1560, 476, [
          ...t.operatingProfit.map((value) => line(value, 39, { weight: 800, color: GREEN_LABEL })),
          line('$value', 39, { color: GREEN_LABEL }),
          line(t.margin76, 28, { color: NOTE }),
          line(t.pp35, zh ? 24 : 28, { color: NOTE }),
        ], { lineGap: 7 })],
      },
      operating_expenses: {
        blocks: [block(1556, 1140, [
          ...t.operatingExpenses.map((value) => line(value, 36, { weight: 800, color: RED_LABEL })),
          line('$value', 35, { color: RED_LABEL }),
        ], { lineGap: 7 })],
      },
      finance_income: {
        blocks: [block(1771, 321, [
          line(t.finance, zh ? 29 : 31, { weight: 800, color: GREEN_LABEL }),
          line('$value', 30, { color: GREEN_LABEL }),
        ], { lineGap: 6 })],
      },
      finance_other: {
        blocks: [block(1816, 960, [
          line(t.finance, zh ? 29 : 31, { weight: 800, color: GREEN_LABEL }),
          line('$value', 30, { color: GREEN_LABEL }),
        ], { lineGap: 6 })],
      },
      pretax_hub: { blocks: [] },
      net_profit: {
        blocks: [block(2365, 493, [
          line(t.net, 40, { weight: 800, color: GREEN_LABEL }),
          line('$value', 39, { color: GREEN_LABEL }),
          line(t.margin118, 28, { color: NOTE }),
          line(t.pp87, zh ? 24 : 28, { color: NOTE }),
        ], { anchor: 'start', lineGap: 7 })],
      },
      tax: {
        blocks: [block(2458, 872, [
          line(t.tax, 31, { weight: 800, color: RED_LABEL }),
          line('$value', 30, { color: RED_LABEL }),
        ], { lineGap: 6 })],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sk-hynix-q2-fy26',
    name: 'SK hynix · Q2 FY26',
    company: 'SK hynix',
    meta: {
      company: 'SK hynix',
      title: 'SKHynix Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      hidePeriodStamp: true,
      currency: '₩',
      unit: 'T',
      decimals: 1,
      referenceImage: { src: 'input/processed/sk-hynix-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 200,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2230,
      logoWidth: 650,
      logoHeight: 270,
      logoY: 292,
      logoViewBox: '0 0 650 270',
      logoSvg: LOGO,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: ORANGE, label: ORANGE_LABEL },
        hub: { node: ORANGE, label: ORANGE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: ORANGE_LINK, hub: ORANGE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 39, value: 39, note: 28, lineGap: 7 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 3.78,
      nodes: {
        dram: { x: 404, y: 776, width: 71, height: 218 },
        nand_flash: { x: 404, y: 1160, width: 71, height: 79 },
        revenue: { x: 778, y: 877, width: 70, height: 300 },
        gross_profit: { x: 1152, y: 775, width: 70, height: 249 },
        cost_of_sales: { x: 1152, y: 1190, width: 70, height: 48 },
        operating_profit: { x: 1525, y: 703, width: 71, height: 229 },
        operating_expenses: { x: 1525, y: 1103, width: 71, height: 19 },
        finance_income: { x: 1733, y: 411, width: 70, height: 230 },
        finance_other: { x: 1778, y: 942, width: 70, height: 2 },
        pretax_hub: { x: 1899, y: 431, width: 71, height: 464 },
        net_profit: { x: 2272, y: 376, width: 71, height: 357 },
        tax: { x: 2272, y: 849, width: 71, height: 108 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'dram', col: 0, order: 0, type: 'source', label: 'DRAM', value: 57.9, notes: ['+238% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'nand_flash', col: 0, order: 1, type: 'source', label: 'NAND Flash', value: 21.4, notes: ['+359% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 79.3, notes: ['+257% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: ['Gross', 'profit'], value: 66.0, valueText: '₩66.0T', notes: ['83% margin', '(46pp) Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 13.3, valueText: '(₩13.3T)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 60.5, notes: ['76% margin', '+35pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.4, valueText: '(₩5.4T)' },
      { id: 'finance_income', col: 4, order: 0, type: 'profit', label: 'Finance', value: 60.9 },
      { id: 'finance_other', col: 4, order: 2, type: 'profit', label: 'Finance', value: 1.3 },
      { id: 'pretax_hub', col: 5, order: 0, type: 'profit', label: '', value: 122.7, valueText: '', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 93.9, notes: ['118% margin', '+87pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 28.8, valueText: '(₩28.8T)' },
    ],
    links: [
      { source: 'dram', target: 'revenue', value: 57.9, sourceWidth: 218, targetWidth: 220, y0: 885, y1: 987, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'nand_flash', target: 'revenue', value: 21.4, sourceWidth: 79, targetWidth: 80, y0: 1199.5, y1: 1137, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 66.0, sourceWidth: 250, targetWidth: 249, y0: 1002, y1: 899.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 13.3, sourceWidth: 49, targetWidth: 48, y0: 1152.5, y1: 1214, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 60.5, sourceWidth: 229, targetWidth: 229, y0: 889.5, y1: 817.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.4, sourceWidth: 19, targetWidth: 19, y0: 1014.5, y1: 1112.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'finance_income', target: 'pretax_hub', value: 60.9, sourceWidth: 230, targetWidth: 231, y0: 526, y1: 546.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'pretax_hub', value: 60.5, sourceWidth: 229, targetWidth: 231, y0: 817.5, y1: 777.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'finance_other', target: 'pretax_hub', value: 1.3, sourceWidth: 2, targetWidth: 2, y0: 943, y1: 894, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'pretax_hub', target: 'net_profit', value: 93.9, sourceWidth: 358, targetWidth: 357, y0: 610, y1: 554.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_hub', target: 'tax', value: 28.8, sourceWidth: 106, targetWidth: 108, y0: 842, y1: 903, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['SK', 'hynix', 'DRAM', 'NAND'],
      zh: {
        name: 'SK 海力士 · 2026 财年第二季度',
        meta: {
          title: 'SK 海力士 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleTextLength: 1780,
        },
        annotationsSvg: annotations(true),
        nodes: {
          dram: { label: 'DRAM', notes: ['同比 +238%'] },
          nand_flash: { label: 'NAND 闪存', notes: ['同比 +359%'] },
          revenue: { label: '收入', notes: ['同比 +257%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 83%', '同比下降 46 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 76%', '同比 +35 个百分点'] },
          operating_expenses: { label: '营业费用' },
          finance_income: { label: '财务收益' },
          finance_other: { label: '财务收益' },
          pretax_hub: { label: '' },
          net_profit: { label: '净利润', notes: ['利润率 118%', '同比 +87 个百分点'] },
          tax: { label: '税费' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
