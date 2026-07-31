/* ====================================================================
 * Palantir - Q4 FY24 income statement ($M)
 * Reconstructed from input/processed/palantir-q4-fy24.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const CARD = '#18191d';
  const RIGHT_LABEL_X = 2446;

  const palantirLogo = `
    <g transform="translate(-30 0)" data-typography-role="brand">
      <g transform="translate(3 5)" fill="none" stroke="${BLACK}" stroke-linejoin="round">
        <circle cx="64" cy="54" r="41" stroke-width="15"/>
        <path d="M19 109L64 129L109 109" stroke-width="14"/>
      </g>
      <text x="146" y="117" font-family="Arial,Helvetica,sans-serif" font-size="109" font-weight="400" fill="${BLACK}"
        textLength="445" lengthAdjust="spacingAndGlyphs">Palantir</text>
    </g>
  `;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="112" y="1154" width="189" height="157" rx="28" fill="${CARD}"/>
      <text x="206.5" y="1206" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${zh ? '账单额' : 'Billings'}</text>
      <text x="206.5" y="1248" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">$779M</text>
      <text x="206.5" y="1290" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${zh ? '同比 +29%' : '+29% Y/Y'}</text>

      <rect x="313" y="1151" width="214" height="163" rx="29" fill="${CARD}"/>
      <text x="420" y="1207" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${zh ? '美元净留存' : 'DBNR'}</text>
      <text x="420" y="1249" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">120%</text>
      <text x="420" y="1291" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${zh ? '同比 +12点' : '+12pp Y/Y'}</text>

      <rect x="538" y="1151" width="214" height="163" rx="29" fill="${CARD}"/>
      <text x="645" y="1207" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${zh ? '客户数' : 'Customers'}</text>
      <text x="645" y="1249" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">711</text>
      <text x="645" y="1291" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${zh ? '同比 +43%' : '+43% Y/Y'}</text>

      <text x="200" y="1350" font-size="29" font-weight="500" fill="${NOTE}">${zh ? 'DBNR = 美元净留存率' : 'DBNR = Dollar Based Net Retention'}</text>
    </g>`;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const labels = (zh) => ({
    government: { blocks: [
      { x: 420, top: 458, anchor: 'middle', lineGap: 12, lines: [line('$value', 39, 400), line(zh ? '同比 +40%' : '+40% Y/Y', 29, 400, NOTE)] },
      { x: 330, top: zh ? 616 : 615, anchor: 'end', lines: [line(zh ? '政府' : 'Government', zh ? 36 : 40, 800)] },
    ] },
    commercial: { blocks: [
      { x: 420, top: 864, anchor: 'middle', lineGap: 12, lines: [line('$value', 39, 400), line(zh ? '同比 +31%' : '+31% Y/Y', 29, 400, NOTE)] },
      { x: 330, top: zh ? 1013 : 1012, anchor: 'end', lines: [line(zh ? '商业' : 'Commercial', zh ? 36 : 40, 800)] },
    ] },
    revenue: { blocks: [{ x: 886, top: 528, anchor: 'middle', lineGap: 12, lines: [
      line(zh ? '收入' : 'Revenue', 40, 800), line('$value', 39, 400), line(zh ? '同比 +36%' : '+36% Y/Y', 29, 400, NOTE),
    ] }] },
    gross_profit: { blocks: [{ x: 1356, top: 376, anchor: 'middle', lineGap: 10, lines: [
      line(zh ? '毛利润' : 'Gross profit', 40, 800), line('$value', 39, 400),
      line(zh ? '利润率 79%' : '79% margin', 29, 400, NOTE), line(zh ? '同比 (3 个百分点)' : '(3pp) Y/Y', 29, 400, NOTE),
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1354, top: 1113, anchor: 'middle', lineGap: 11, lines: [
      line(zh ? '收入' : 'Cost of', zh ? 36 : 37, 800), line(zh ? '成本' : 'revenue', zh ? 36 : 37, 800), line('$value', 36, 400),
    ] }] },
    operating_profit: { blocks: [{ x: 1816, top: 274, anchor: 'middle', lineGap: 10, lines: [
      line(zh ? '营业利润' : 'Operating profit', 40, 800), line('$value', 39, 400),
      line(zh ? '利润率 1%' : '1% margin', 29, 400, NOTE), line(zh ? '同比 (9 个百分点)' : '(9pp) Y/Y', 29, 400, NOTE),
    ] }] },
    operating_expenses: { blocks: [{ x: 1818, top: 945, anchor: 'middle', lineGap: 11, lines: [
      line(zh ? '营业' : 'Operating', 40, 800), line(zh ? '费用' : 'expenses', 40, 800), line('$value', 38, 400),
    ] }] },
    interest: { blocks: [{ x: 2171, top: 218, anchor: 'middle', lineGap: 8, lines: [line(zh ? '利息' : 'Interest', 31, 800), line('$value', 30, 400)] }] },
    other: { blocks: [{ x: 2172, top: 441, anchor: 'middle', lineGap: 8, lines: [line(zh ? '其他' : 'Other', 31, 800), line('$value', 30, 400)] }] },
    net_profit: { blocks: [{ x: 2352, top: 313, anchor: 'start', lineGap: 10, lines: [
      line(zh ? '净利润' : 'Net profit', 40, 800), line('$value', 39, 400),
      line(zh ? '利润率 9%' : '9% margin', 29, 400, NOTE), line(zh ? '同比 (7 个百分点)' : '(7pp) Y/Y', 29, 400, NOTE),
    ] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 541, anchor: 'middle', lineGap: 8, lines: [
      line(zh ? '税费' : 'Tax', 31, 800), line('$value', 30, 400),
    ] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 780, anchor: 'middle', lineGap: 9, lines: [
      line(zh ? '销售与营销' : 'S&M', 31, 800), line('$value', 30, 400), line(zh ? '占收入 35%' : '35% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +2 个百分点' : '+2pp Y/Y', 29, 400, NOTE),
    ] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1007, anchor: 'middle', lineGap: 9, lines: [
      line(zh ? '管理费用' : 'G&A', 31, 800), line('$value', 30, 400), line(zh ? '占收入 22%' : '22% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +1 个百分点' : '+1pp Y/Y', 29, 400, NOTE),
    ] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 1221, anchor: 'middle', lineGap: 9, lines: [
      line(zh ? '研发' : 'R&D', 31, 800), line('$value', 30, 400), line(zh ? '占收入 21%' : '21% of revenue', 29, 400, NOTE),
      line(zh ? '同比 +3 个百分点' : '+3pp Y/Y', 29, 400, NOTE),
    ] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q4-fy24',
    name: 'Palantir · Q4 FY24',
    company: 'Palantir',
    meta: {
      company: 'Palantir', title: 'Palantir Q4 FY24 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2220,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 635, logoHeight: 158, logoY: 272, logoViewBox: '0 0 640 150', logoSvg: palantirLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 1,
      nodes: {
        government: { x: 384, y: 560, width: 71, height: 164 }, commercial: { x: 384, y: 968, width: 71, height: 134 },
        revenue: { x: 851, y: 680, width: 70, height: 300 }, gross_profit: { x: 1320, y: 561, width: 72, height: 236 },
        cost_of_revenue: { x: 1318, y: 1040, width: 71, height: 62 }, operating_profit: { x: 1781, y: 458, width: 70, height: 2 },
        operating_expenses: { x: 1783, y: 700, width: 70, height: 233 }, interest: { x: 2136, y: 311, width: 70, height: 18 },
        other: { x: 2136, y: 429, width: 70, height: 4 }, net_profit: { x: 2252, y: 342, width: 71, height: 26 },
        tax: { x: 2252, y: 576, width: 71, height: 4 },
        sm: { x: 2252, y: 771, width: 71, height: 103 }, ga: { x: 2252, y: 1007, width: 71, height: 63 },
        rnd: { x: 2252, y: 1232, width: 71, height: 60 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 455, notes: ['+40% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 372, notes: ['+31% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 828, notes: ['+36% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 653, notes: ['79% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 175, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 11, notes: ['1% margin', '(9pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 642, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 55, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 15, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 77, notes: ['9% margin', '(7pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4, color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 288, notes: ['35% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 182, notes: ['22% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 172, notes: ['21% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'government', target: 'revenue', value: 455, sourceWidth: 164, targetWidth: 164, y0: 642, y1: 762, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'revenue', value: 372, sourceWidth: 134, targetWidth: 136, y0: 1035, y1: 912, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 653, sourceWidth: 236, targetWidth: 236, y0: 798, y1: 679, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 175, sourceWidth: 64, targetWidth: 62, y0: 948, y1: 1071, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 11, sourceWidth: 4, targetWidth: 2, y0: 563, y1: 459, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 642, sourceWidth: 232, targetWidth: 233, y0: 681, y1: 816.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 55, sourceWidth: 18, targetWidth: 19, y0: 320, y1: 351.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 11, sourceWidth: 2, targetWidth: 3, y0: 459, y1: 362.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 15, sourceWidth: 4, targetWidth: 4, y0: 431, y1: 366, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 4, sourceWidth: 2, targetWidth: 4, y0: 459, y1: 578, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 288, sourceWidth: 105, targetWidth: 103, y0: 752.5, y1: 822.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 182, sourceWidth: 66, targetWidth: 63, y0: 838, y1: 1038.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 172, sourceWidth: 62, targetWidth: 60, y0: 902, y1: 1262, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Palantir · 2024 财年第四季度',
        meta: { title: 'Palantir 2024 财年第四季度利润表', titleSize: 112, titleTextLength: 1880 },
        annotationsSvg: annotations(true),
        nodes: {
          government: { label: '政府', notes: ['同比 +40%'] }, commercial: { label: '商业', notes: ['同比 +31%'] },
          revenue: { label: '收入', notes: ['同比 +36%'] }, gross_profit: { label: '毛利润', notes: ['利润率 79%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 (9 个百分点)'] },
          operating_expenses: { label: '营业费用' }, interest: { label: '利息' }, other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 (7 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 35%', '同比 +2 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 22%', '同比 +1 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 21%', '同比 +3 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
