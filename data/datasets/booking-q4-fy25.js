/* Booking Holdings — Q4 FY25 income statement ($B).
 * Reconstructed from input/processed/booking-q4-fy25.png as a measured,
 * fixed-layout d3-sankey. Source brand clusters are validated runtime crops;
 * publisher attribution is intentionally not rendered. */
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
  const NAVY = '#003680';

  const cards = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="100" y="1202" width="305" height="149" rx="24" fill="${NAVY}"/>
      <text x="252.5" y="1251" text-anchor="middle" font-size="27" font-weight="800" fill="#ffffff">${zh ? '总预订额' : 'Gross bookings'}</text>
      <text x="252.5" y="1291" text-anchor="middle" font-size="27" font-weight="400" fill="#ffffff">$43B</text>
      <text x="252.5" y="1325" text-anchor="middle" font-size="23" font-weight="400" fill="#ffffff">${zh ? '同比 +16%' : '+16% Y/Y'}</text>
      <rect x="416" y="1202" width="330" height="149" rx="24" fill="${NAVY}"/>
      <text x="581" y="1251" text-anchor="middle" font-size="27" font-weight="800" fill="#ffffff">${zh ? '预订夜晚数' : 'Nights booked'}</text>
      <text x="581" y="1291" text-anchor="middle" font-size="27" font-weight="400" fill="#ffffff">285M</text>
      <text x="581" y="1325" text-anchor="middle" font-size="23" font-weight="400" fill="#ffffff">${zh ? '同比 +9%' : '+9% Y/Y'}</text>
    </g>`;

  const labels = (zh) => {
    const text = zh ? {
      merchant: '商户', agency: '代理', advertising: ['广告', '及其他'], revenue: '收入',
      operating: ['营业利润'], expenses: ['运营', '费用'], net: '净利润', tax: '税费', other: '其他',
      marketing: '营销', personnel: '人员', sales: '销售', ga: '管理费用', info: '信息技术', da: '折旧与摊销',
      commissions: '佣金、支付、保险', yoy27: '同比 +27%', yoy4: '同比 (4%)', yoy14: '同比 +14%',
      yoy16: '同比 +16%', margin32: '利润率 32%', margin22: '利润率 22%', pp0: '同比 +0 个百分点', pp3: '同比 +3 个百分点',
    } : {
      merchant: 'Merchant', agency: 'Agency', advertising: ['Advertising', '& Other'], revenue: 'Revenue',
      operating: ['Operating profit'], expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', other: 'Other',
      marketing: 'Marketing', personnel: 'Personnel', sales: 'Sales', ga: 'G&A', info: 'Info Tech', da: 'D&A',
      commissions: 'Commissions,', payments: 'payments, insurance', yoy27: '+27% Y/Y', yoy4: '(4%) Y/Y', yoy14: '+14% Y/Y',
      yoy16: '+16% Y/Y', margin32: '32% margin', margin22: '22% margin', pp0: '+0pp Y/Y', pp3: '+3pp Y/Y',
    };
    const merchantNote = zh ? [text.commissions] : [text.commissions, text.payments];
    return {
      merchant: { blocks: [
        { x: 490.5, top: 443, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: text.yoy27, size: 27, weight: 400, color: NOTE }] },
        { x: 410, top: 594, anchor: 'end', lineGap: 9, lines: [{ text: text.merchant, size: 40, weight: 800 }, ...merchantNote.map((value) => ({ text: value, size: 27, weight: 400, color: NOTE }))] },
      ] },
      agency: { blocks: [
        { x: 490.5, top: 805, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: text.yoy4, size: 27, weight: 400, color: NOTE }] },
        { x: 410, top: 923, anchor: 'end', lines: [{ text: text.agency, size: 40, weight: 800 }] },
      ] },
      advertising_other: { blocks: [
        { x: 490.5, top: 1035, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: text.yoy14, size: 27, weight: 400, color: NOTE }] },
        { x: 410, top: 1053, anchor: 'end', lineGap: 5, lines: text.advertising.map((value) => ({ text: value, size: 38, weight: 800 })) },
      ] },
      revenue: { blocks: [{ x: 1113, top: 530, anchor: 'middle', lineGap: 10, lines: [{ text: text.revenue, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: text.yoy16, size: 27, weight: 400, color: NOTE }] }] },
      operating_profit: { blocks: [{ x: 1738.5, top: 340, anchor: 'middle', lineGap: 10, lines: [...text.operating.map((value) => ({ text: value, size: 39, weight: 800 })), { text: '$value', size: 39, weight: 400 }, { text: text.margin32, size: 27, weight: 400, color: NOTE }, { text: text.pp0, size: 27, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1736, top: 1171, anchor: 'middle', lineGap: 8, lines: [...text.expenses.map((value) => ({ text: value, size: 39, weight: 800 })), { text: '$value', size: 38, weight: 400 }] }] },
      net_profit: { blocks: [{ x: 2460, top: 276, anchor: 'start', lineGap: 10, lines: [{ text: text.net, size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.margin22, size: 27, weight: 400, color: NOTE }, { text: text.pp3, size: 27, weight: 400, color: NOTE }] }] },
      tax: { blocks: [{ x: 2460, top: 479, anchor: 'start', lineGap: 7, lines: [{ text: text.tax, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      other: { blocks: [{ x: 2460, top: 596, anchor: 'start', lineGap: 7, lines: [{ text: text.other, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      marketing: { blocks: [{ x: 2460, top: 700, anchor: 'start', lineGap: 7, lines: [{ text: text.marketing, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      personnel: { blocks: [{ x: 2460, top: 869, anchor: 'start', lineGap: 7, lines: [{ text: text.personnel, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      sales: { blocks: [{ x: 2460, top: 985, anchor: 'start', lineGap: 7, lines: [{ text: text.sales, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      ga: { blocks: [{ x: 2460, top: 1100, anchor: 'start', lineGap: 7, lines: [{ text: text.ga, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      info_tech: { blocks: [{ x: 2460, top: 1200, anchor: 'start', lineGap: 7, lines: [{ text: text.info, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      da: { blocks: [{ x: 2460, top: 1301, anchor: 'start', lineGap: 7, lines: [{ text: text.da, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'booking-q4-fy25',
    name: 'Booking Holdings · Q4 FY25',
    company: 'Booking Holdings',
    meta: {
      company: 'Booking Holdings', title: 'Booking Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/booking-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2230,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
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
      { key: 'booking-company-logo', href: 'data/assets/raster-annotations/booking/company-logo.png', x: 784, y: 276, width: 626, height: 160 },
      { key: 'booking-merchant-brands', href: 'data/assets/raster-annotations/booking/merchant-brands.png', x: 0, y: 532, width: 180, height: 220 },
      { key: 'booking-agency-brand', href: 'data/assets/raster-annotations/booking/agency-brand.png', x: 8, y: 848, width: 174, height: 176 },
      { key: 'booking-advertising-brands', href: 'data/assets/raster-annotations/booking/advertising-brands.png', x: 0, y: 1040, width: 184, height: 154 },
    ],
    layout: {
      scale: 52.7,
      nodes: {
        merchant: { x: 455, y: 536, width: 71, height: 222 }, agency: { x: 455, y: 893, width: 71, height: 91 }, advertising_other: { x: 455, y: 1123, width: 71, height: 14 },
        revenue: { x: 1077, y: 676, width: 72, height: 332 }, operating_profit: { x: 1703, y: 523, width: 71, height: 105 }, operating_expenses: { x: 1700, y: 920, width: 72, height: 226 },
        net_profit: { x: 2323, y: 297, width: 71, height: 73 }, tax: { x: 2323, y: 503, width: 71, height: 20 }, other: { x: 2323, y: 618, width: 71, height: 6 },
        marketing: { x: 2323, y: 722, width: 71, height: 98 }, personnel: { x: 2323, y: 909, width: 71, height: 44 }, sales: { x: 2323, y: 1024, width: 71, height: 42 }, ga: { x: 2323, y: 1143, width: 71, height: 11 }, info_tech: { x: 2323, y: 1244, width: 71, height: 10 }, da: { x: 2323, y: 1346, width: 71, height: 7 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'merchant', col: 0, order: 0, type: 'source', label: 'Merchant', value: 4.2, notes: ['+27% Y/Y', 'Commissions, payments, insurance'] },
      { id: 'agency', col: 0, order: 1, type: 'source', label: 'Agency', value: 1.8, notes: ['(4%) Y/Y'] },
      { id: 'advertising_other', col: 0, order: 2, type: 'source', label: ['Advertising', '& Other'], value: 0.3, notes: ['+14% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6.3, notes: ['+16% Y/Y'] },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 2.0, notes: ['32% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.3 },
      { id: 'net_profit', col: 3, order: 0, type: 'profit', label: 'Net profit', value: 1.4, notes: ['22% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 3, order: 1, type: 'cost', label: 'Tax', value: 0.4 }, { id: 'other', col: 3, order: 2, type: 'cost', label: 'Other', value: 0.2 },
      { id: 'marketing', col: 3, order: 3, type: 'cost', label: 'Marketing', value: 1.9 }, { id: 'personnel', col: 3, order: 4, type: 'cost', label: 'Personnel', value: 0.9 }, { id: 'sales', col: 3, order: 5, type: 'cost', label: 'Sales', value: 0.8 },
      { id: 'ga', col: 3, order: 6, type: 'cost', label: 'G&A', value: 0.3 }, { id: 'info_tech', col: 3, order: 7, type: 'cost', label: 'Info Tech', value: 0.2 }, { id: 'da', col: 3, order: 8, type: 'cost', label: 'D&A', value: 0.2 },
    ],
    links: [
      { source: 'merchant', target: 'revenue', value: 4.2, sourceWidth: 222, targetWidth: 222, y0: 647, y1: 787, linkTint: CYAN_LINK },
      { source: 'agency', target: 'revenue', value: 1.8, sourceWidth: 91, targetWidth: 94, y0: 938.5, y1: 945, linkTint: CYAN_LINK },
      { source: 'advertising_other', target: 'revenue', value: 0.3, sourceWidth: 14, targetWidth: 16, y0: 1130, y1: 1000, linkTint: CYAN_LINK },
      { source: 'revenue', target: 'operating_profit', value: 2.0, sourceWidth: 105, targetWidth: 105, y0: 728.5, y1: 575.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 4.3, sourceWidth: 227, targetWidth: 226, y0: 894.5, y1: 1033, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.4, sourceWidth: 73, targetWidth: 73, y0: 559.5, y1: 333.5, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 20, targetWidth: 20, y0: 606, y1: 513, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.2, sourceWidth: 12, targetWidth: 6, y0: 622, y1: 621, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing', value: 1.9, sourceWidth: 100, targetWidth: 98, y0: 970, y1: 771, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'personnel', value: 0.9, sourceWidth: 48, targetWidth: 44, y0: 1044, y1: 931, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales', value: 0.8, sourceWidth: 43, targetWidth: 42, y0: 1089.5, y1: 1045, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.3, sourceWidth: 16, targetWidth: 11, y0: 1119, y1: 1148.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'info_tech', value: 0.2, sourceWidth: 10, targetWidth: 10, y0: 1132, y1: 1249, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 0.2, sourceWidth: 9, targetWidth: 7, y0: 1141.5, y1: 1349.5, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '缤客控股 · 2025 财年第四季度',
        meta: { title: '缤客控股 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2230 },
        nodes: {
          merchant: { label: '商户', notes: ['同比 +27%', '佣金、支付、保险'] }, agency: { label: '代理', notes: ['同比 (4%)'] }, advertising_other: { label: ['广告', '及其他'], notes: ['同比 +14%'] }, revenue: { label: '收入', notes: ['同比 +16%'] },
          operating_profit: { label: ['营业', '利润'], notes: ['利润率 32%', '同比 +0 个百分点'] }, operating_expenses: { label: ['运营', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 22%', '同比 +3 个百分点'] }, tax: { label: '税费' }, other: { label: '其他' },
          marketing: { label: '营销' }, personnel: { label: '人员' }, sales: { label: '销售' }, ga: { label: '管理费用' }, info_tech: { label: '信息技术' }, da: { label: '折旧与摊销' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: cards(true),
      },
    },
  });
})();
