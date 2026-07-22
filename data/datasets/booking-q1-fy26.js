/* Booking Holdings — Q1 FY26 income statement ($B).
 * Reconstructed from input/processed/booking-q1-fy26.png as a measured,
 * fixed-layout d3-sankey. Source brand clusters reuse validated Booking
 * runtime crops; publisher attribution is intentionally not rendered. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const CYAN = '#00b0f0';
  const CYAN_LABEL = '#00a9e8';
  const CYAN_LINK = '#85d3f0';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const NAVY = '#002a6e';

  const cards = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="100" y="1203" width="304" height="148" rx="24" fill="${NAVY}"/>
      <text x="252" y="1251" text-anchor="middle" font-size="27" font-weight="800" fill="#ffffff">${zh ? '总预订额' : 'Gross bookings'}</text>
      <text x="252" y="1291" text-anchor="middle" font-size="27" font-weight="400" fill="#ffffff">$53.8B</text>
      <text x="252" y="1325" text-anchor="middle" font-size="23" font-weight="400" fill="#ffffff">${zh ? '同比 +15%' : '+15% Y/Y'}</text>
      <rect x="415" y="1203" width="330" height="150" rx="24" fill="${NAVY}"/>
      <text x="580" y="1251" text-anchor="middle" font-size="27" font-weight="800" fill="#ffffff">${zh ? '预订夜晚数' : 'Nights booked'}</text>
      <text x="580" y="1291" text-anchor="middle" font-size="27" font-weight="400" fill="#ffffff">338M</text>
      <text x="580" y="1325" text-anchor="middle" font-size="23" font-weight="400" fill="#ffffff">${zh ? '同比 +6%' : '+6% Y/Y'}</text>
    </g>`;

  const labels = (zh) => {
    const text = zh ? {
      merchant: '商户', agency: '代理', advertising: ['广告', '及其他'], revenue: '收入',
      operating: ['营业利润'], expenses: ['运营', '费用'], net: '净利润', tax: '税费', otherIncome: '其他', otherExpense: '其他',
      marketing: '营销', personnel: '人员', sales: '销售', ga: '管理费用', info: '信息技术', da: '折旧与摊销',
      commissions: '佣金、支付、保险', yoy27: '同比 +27%', yoy2: '同比 (2%)', yoy9: '同比 +9%',
      yoy16: '同比 +16%', margin23: '利润率 23%', margin20: '利润率 20%', pp1: '同比 +1 个百分点', pp13: '同比 +13 个百分点',
    } : {
      merchant: 'Merchant', agency: 'Agency', advertising: ['Advertising', '& Other'], revenue: 'Revenue',
      operating: ['Operating profit'], expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', otherIncome: 'Other', otherExpense: 'Other',
      marketing: 'Marketing', personnel: 'Personnel', sales: 'Sales', ga: 'G&A', info: 'Info Tech', da: 'D&A',
      commissions: 'Commissions,', payments: 'payments, insurance', yoy27: '+27% Y/Y', yoy2: '(2%) Y/Y', yoy9: '+9% Y/Y',
      yoy16: '+16% Y/Y', margin23: '23% margin', margin20: '20% margin', pp1: '+1pp Y/Y', pp13: '+13pp Y/Y',
    };
    const merchantNote = zh ? [text.commissions] : [text.commissions, text.payments];
    return {
      merchant: { blocks: [
        { x: 496.5, top: 338, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: text.yoy27, size: 27, weight: 400, color: NOTE }] },
        { x: 445, top: zh ? 509 : 491, anchor: 'end', lineGap: 9, lines: [{ text: text.merchant, size: 40, weight: 800 }, ...merchantNote.map((value) => ({ text: value, size: 27, weight: 400, color: NOTE }))] },
      ] },
      agency: { blocks: [
        { x: 496.5, top: 778, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: text.yoy2, size: 27, weight: 400, color: NOTE }] },
        { x: 402, top: 892, anchor: 'end', lines: [{ text: text.agency, size: 40, weight: 800 }] },
      ] },
      advertising_other: { blocks: [
        { x: 496.5, top: 1018.5, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: text.yoy9, size: 27, weight: 400, color: NOTE }] },
        { x: 416, top: 1097.5, anchor: 'end', lineGap: 5, lines: text.advertising.map((value) => ({ text: value, size: 38, weight: 800 })) },
      ] },
      revenue: { blocks: [{ x: 1119, top: 479, anchor: 'middle', lineGap: 10, lines: [{ text: text.revenue, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: text.yoy16, size: 27, weight: 400, color: NOTE }] }] },
      operating_profit: { blocks: [{ x: 1742, top: 283, anchor: 'middle', lineGap: 10, lines: [...text.operating.map((value) => ({ text: value, size: 39, weight: 800 })), { text: '$value', size: 39, weight: 400 }, { text: text.margin23, size: 27, weight: 400, color: NOTE }, { text: text.pp1, size: 27, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1742, top: 1086, anchor: 'middle', lineGap: 8, lines: [...text.expenses.map((value) => ({ text: value, size: 39, weight: 800 })), { text: '$value', size: 38, weight: 400 }] }] },
      other_income: { blocks: [{ x: 2242, top: 394, anchor: 'middle', lineGap: 7, lines: [{ text: text.otherIncome, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      net_profit: { blocks: [{ x: 2516, top: 236, anchor: 'middle', lineGap: 10, lines: [{ text: text.net, size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.margin20, size: 27, weight: 400, color: NOTE }, { text: text.pp13, size: 27, weight: 400, color: NOTE }] }] },
      tax: { blocks: [{ x: 2511.5, top: 445, anchor: 'middle', lineGap: 7, lines: [{ text: text.tax, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      marketing: { blocks: [{ x: 2519, top: 604, anchor: 'middle', lineGap: 7, lines: [{ text: text.marketing, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      personnel: { blocks: [{ x: 2518, top: 760, anchor: 'middle', lineGap: 7, lines: [{ text: text.personnel, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      sales: { blocks: [{ x: 2517.5, top: 887, anchor: 'middle', lineGap: 7, lines: [{ text: text.sales, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      info_tech: { blocks: [{ x: 2515, top: 1006, anchor: 'middle', lineGap: 7, lines: [{ text: text.info, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      ga: { blocks: [{ x: 2520.5, top: 1102, anchor: 'middle', lineGap: 7, lines: [{ text: text.ga, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      da: { blocks: [{ x: 2520.5, top: 1200, anchor: 'middle', lineGap: 7, lines: [{ text: text.da, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      other_expense: { blocks: [{ x: 2520.5, top: 1293, anchor: 'middle', lineGap: 7, lines: [{ text: text.otherExpense, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'booking-q1-fy26',
    name: 'Booking Holdings · Q1 FY26',
    company: 'Booking Holdings',
    meta: {
      company: 'Booking Holdings', title: 'Booking Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 2026', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/booking-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2230,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' }, allowRasterAnnotations: true,
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: CYAN, label: CYAN_LABEL }, hub: { node: CYAN, label: CYAN_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: CYAN_LINK, hub: CYAN_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 27, lineGap: 8 },
    },
    annotationsSvg: cards(false),
    rasterAnnotations: [
      { key: 'booking-company-logo', href: 'data/assets/raster-annotations/booking/company-logo.png', x: 778, y: 278, width: 626, height: 160 },
      { key: 'booking-merchant-brands', href: 'data/assets/raster-annotations/booking/merchant-brands.png', x: 0, y: 438, width: 180, height: 220 },
      { key: 'booking-agency-brand', href: 'data/assets/raster-annotations/booking/agency-brand.png', x: 8, y: 828, width: 174, height: 176 },
      { key: 'booking-advertising-brands', href: 'data/assets/raster-annotations/booking/advertising-brands.png', x: 0, y: 1055, width: 184, height: 154 },
    ],
    layout: {
      scale: 62.4,
      nodes: {
        merchant: { x: 461, y: 432, width: 71, height: 234 }, agency: { x: 461, y: 869, width: 71, height: 95 }, advertising_other: { x: 461, y: 1133, width: 71, height: 18 },
        revenue: { x: 1083, y: 628, width: 72, height: 350 }, operating_profit: { x: 1706, y: 468, width: 72, height: 79 }, operating_expenses: { x: 1706, y: 809, width: 72, height: 270 },
        other_income: { x: 2204, y: 373, width: 71, height: 6 }, net_profit: { x: 2329, y: 273, width: 71, height: 68 }, tax: { x: 2329, y: 474, width: 71, height: 18 },
        marketing: { x: 2329, y: 577, width: 71, height: 129 }, personnel: { x: 2329, y: 773, width: 71, height: 55 }, sales: { x: 2329, y: 902, width: 71, height: 50 },
        info_tech: { x: 2329, y: 1039, width: 71, height: 13 }, ga: { x: 2329, y: 1138, width: 71, height: 6 }, da: { x: 2329, y: 1236, width: 71, height: 5 }, other_expense: { x: 2329, y: 1328, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'merchant', col: 0, order: 0, type: 'source', label: 'Merchant', value: 3.7, notes: ['+27% Y/Y', 'Commissions, payments, insurance'] },
      { id: 'agency', col: 0, order: 1, type: 'source', label: 'Agency', value: 1.5, notes: ['(2%) Y/Y'] },
      { id: 'advertising_other', col: 0, order: 2, type: 'source', label: ['Advertising', '& Other'], value: 0.3, notes: ['+9% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.5, notes: ['+16% Y/Y'] },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 1.3, notes: ['23% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.3 },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.1, valueText: '€0.1B' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.1, notes: ['20% margin', '+13pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'marketing', col: 4, order: 2, type: 'cost', label: 'Marketing', value: 2.1 }, { id: 'personnel', col: 4, order: 3, type: 'cost', label: 'Personnel', value: 0.9 }, { id: 'sales', col: 4, order: 4, type: 'cost', label: 'Sales', value: 0.9 },
      { id: 'info_tech', col: 4, order: 5, type: 'cost', label: 'Info Tech', value: 0.2 }, { id: 'ga', col: 4, order: 6, type: 'cost', label: 'G&A', value: 0.1 }, { id: 'da', col: 4, order: 7, type: 'cost', label: 'D&A', value: 0.1 },
      { id: 'other_expense', col: 4, order: 8, type: 'cost', label: 'Other', value: 0.025, valueText: '($25M)' },
    ],
    links: [
      { source: 'merchant', target: 'revenue', value: 3.7, sourceWidth: 234, targetWidth: 234, y0: 549, y1: 745, linkTint: CYAN_LINK },
      { source: 'agency', target: 'revenue', value: 1.5, sourceWidth: 95, targetWidth: 97, y0: 916.5, y1: 910.5, linkTint: CYAN_LINK },
      { source: 'advertising_other', target: 'revenue', value: 0.3, sourceWidth: 18, targetWidth: 19, y0: 1142, y1: 968.5, linkTint: CYAN_LINK },
      { source: 'revenue', target: 'operating_profit', value: 1.3, sourceWidth: 79, targetWidth: 79, y0: 667.5, y1: 507.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 4.3, sourceWidth: 270, targetWidth: 270, y0: 843, y1: 944, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.0, sourceWidth: 61, targetWidth: 62, y0: 498.5, y1: 304, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 18, targetWidth: 18, y0: 538, y1: 483, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 6, targetWidth: 6, y0: 376, y1: 338, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'marketing', value: 2.1, sourceWidth: 131, targetWidth: 129, y0: 874.5, y1: 641.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'personnel', value: 0.9, sourceWidth: 56, targetWidth: 55, y0: 968, y1: 800.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales', value: 0.9, sourceWidth: 56, targetWidth: 50, y0: 1024, y1: 927, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'info_tech', value: 0.2, sourceWidth: 13, targetWidth: 13, y0: 1058.5, y1: 1045.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.1, sourceWidth: 6, targetWidth: 6, y0: 1068, y1: 1141, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 0.1, sourceWidth: 6, targetWidth: 5, y0: 1074, y1: 1238.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_expense', value: 0.025, sourceWidth: 2, targetWidth: 1, y0: 1078, y1: 1328.5, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '缤客控股 · 2026 财年第一季度',
        meta: { title: '缤客控股 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 2230 },
        nodes: {
          merchant: { label: '商户', notes: ['同比 +27%', '佣金、支付、保险'] }, agency: { label: '代理', notes: ['同比 (2%)'] }, advertising_other: { label: ['广告', '及其他'], notes: ['同比 +9%'] }, revenue: { label: '收入', notes: ['同比 +16%'] },
          operating_profit: { label: ['营业', '利润'], notes: ['利润率 23%', '同比 +1 个百分点'] }, operating_expenses: { label: ['运营', '费用'] }, other_income: { label: '其他', valueText: '€0.1B' }, net_profit: { label: '净利润', notes: ['利润率 20%', '同比 +13 个百分点'] }, tax: { label: '税费' },
          marketing: { label: '营销' }, personnel: { label: '人员' }, sales: { label: '销售' }, info_tech: { label: '信息技术' }, ga: { label: '管理费用' }, da: { label: '折旧与摊销' }, other_expense: { label: '其他', valueText: '($25M)' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: cards(true),
      },
    },
  });
})();
