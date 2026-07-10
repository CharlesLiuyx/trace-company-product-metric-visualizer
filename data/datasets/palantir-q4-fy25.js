/* ====================================================================
 * Palantir - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/palantir-q4-fy25.png as a fixed
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
  const RIGHT_LABEL_X = 2443;

  const palantirLogo = `
    <g transform="translate(-30 0)">
      <g transform="translate(3 5)" fill="none" stroke="${BLACK}" stroke-linejoin="round">
        <circle cx="64" cy="54" r="41" stroke-width="15"/>
        <path d="M19 109L64 129L109 109" stroke-width="14"/>
      </g>
      <text x="146" y="117" font-family="Arial,Helvetica,sans-serif" font-size="109" font-weight="400" fill="${BLACK}"
        textLength="445" lengthAdjust="spacingAndGlyphs">Palantir</text>
    </g>
  `;

  const annotations = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="88" y="1120" width="214" height="163" rx="29" fill="${CARD}"/>
      <text x="195" y="1176" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${labels.dbnr}</text>
      <text x="195" y="1218" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">139%</text>
      <text x="195" y="1260" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${labels.dbnrGrowth}</text>

      <rect x="313" y="1120" width="215" height="163" rx="29" fill="${CARD}"/>
      <text x="420" y="1176" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.customers}</text>
      <text x="420" y="1218" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">954</text>
      <text x="420" y="1260" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${labels.customersGrowth}</text>

      <rect x="539" y="1123" width="411" height="157" rx="26" fill="${CARD}"/>
      <text x="744" y="1174" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.usCommercialRdv}</text>
      <text x="744" y="1216" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">$4.38B</text>
      <text x="744" y="1258" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${labels.rdvGrowth}</text>

      <text x="102" y="1323" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
      <text x="102" y="1365" font-size="29" font-weight="500" fill="${NOTE}">${labels.rdvFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    dbnr: 'DBNR',
    dbnrGrowth: '+19pp Y/Y',
    customers: 'Customers',
    customersGrowth: '+34% Y/Y',
    usCommercialRdv: 'US Commercial RDV',
    rdvGrowth: '+145% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
    rdvFootnote: 'RDV = Remaining Deal Value',
  });

  const annotationsZh = annotations({
    dbnr: '美元净留存',
    dbnrGrowth: '同比 +19点',
    customers: '客户数',
    customersGrowth: '同比 +34%',
    usCommercialRdv: '美国商业 RDV',
    rdvGrowth: '同比 +145%',
    dbnrFootnote: 'DBNR = 美元净留存率',
    rdvFootnote: 'RDV = 剩余交易价值',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q4-fy25',
    name: 'Palantir · Q4 FY25',
    company: 'Palantir',
    meta: {
      company: 'Palantir',
      title: 'Palantir Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2220,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 635,
      logoHeight: 158,
      logoY: 272,
      logoViewBox: '0 0 640 150',
      logoSvg: palantirLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 1,
      nodes: {
        commercial: { x: 384, y: 522, width: 71, height: 186 },
        government: { x: 384, y: 903, width: 71, height: 202 },
        revenue: { x: 851, y: 627, width: 70, height: 389 },
        gross_profit: { x: 1318, y: 524, width: 71, height: 329 },
        cost_of_revenue: { x: 1318, y: 1050, width: 71, height: 57 },
        operating_profit: { x: 1785, y: 430, width: 71, height: 158 },
        operating_expenses: { x: 1785, y: 787, width: 71, height: 169 },
        interest: { x: 2128, y: 310, width: 70, height: 15 },
        net_profit: { x: 2252, y: 330, width: 71, height: 169 },
        other: { x: 2252, y: 639, width: 71, height: 3 },
        tax: { x: 2252, y: 745, width: 71, height: 2 },
        sm: { x: 2252, y: 822, width: 71, height: 82 },
        ga: { x: 2252, y: 1050, width: 71, height: 45 },
        rnd: { x: 2252, y: 1242, width: 71, height: 38 },
      },
      labels: {
        commercial: {
          blocks: [
            { x: 420, top: 422, anchor: 'middle', lineGap: 14, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+82% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 328, top: 574, anchor: 'end', lines: [{ text: 'Commercial', size: 40, weight: 800 }] },
          ],
        },
        government: {
          blocks: [
            { x: 420, top: 799, anchor: 'middle', lineGap: 14, lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+60% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 335, top: 962, anchor: 'end', lines: [{ text: 'Government', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [{ x: 886, top: 473, anchor: 'middle', lineGap: 14, lines: [
            { text: 'Revenue', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '+70% Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        gross_profit: {
          blocks: [{ x: 1354, top: 332, anchor: 'middle', lineGap: 12, lines: [
            { text: 'Gross profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '85% margin', size: 29, weight: 400, color: NOTE },
            { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        cost_of_revenue: {
          blocks: [{ x: 1354, top: 1119, anchor: 'middle', lineGap: 13, lines: [
            { text: 'Cost of', size: 37, weight: 800 },
            { text: 'revenue', size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ] }],
        },
        operating_profit: {
          blocks: [{ x: 1821, top: 238, anchor: 'middle', lineGap: 12, lines: [
            { text: 'Operating profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '41% margin', size: 29, weight: 400, color: NOTE },
            { text: '+40pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        operating_expenses: {
          blocks: [{ x: 1821, top: 969, anchor: 'middle', lineGap: 13, lines: [
            { text: 'Operating', size: 40, weight: 800 },
            { text: 'expenses', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
          ] }],
        },
        interest: {
          blocks: [{ x: 2163, top: 219, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Interest', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] }],
        },
        net_profit: {
          blocks: [{ x: 2350, top: 322, anchor: 'start', lineGap: 12, lines: [
            { text: 'Net profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '43% margin', size: 29, weight: 400, color: NOTE },
            { text: '+34pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        other: {
          blocks: [{ x: RIGHT_LABEL_X, top: 598, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Other', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] }],
        },
        tax: {
          blocks: [{ x: RIGHT_LABEL_X, top: 705, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Tax', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] }],
        },
        sm: {
          blocks: [{ x: RIGHT_LABEL_X, top: 829, anchor: 'middle', lineGap: 11, lines: [
            { text: 'S&M', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '21% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(13pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        ga: {
          blocks: [{ x: RIGHT_LABEL_X, top: 1032, anchor: 'middle', lineGap: 11, lines: [
            { text: 'G&A', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '12% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(10pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        rnd: {
          blocks: [{ x: RIGHT_LABEL_X, top: 1219, anchor: 'middle', lineGap: 11, lines: [
            { text: 'R&D', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(11pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
      },
    },

    nodes: [
      { id: 'commercial', col: 0, order: 0, type: 'source', label: 'Commercial', value: 677, notes: ['+82% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'government', col: 0, order: 1, type: 'source', label: 'Government', value: 730, notes: ['+60% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1407, valueText: '$1,407M', notes: ['+70% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1191, valueText: '$1,191M', notes: ['85% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 216, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 575, notes: ['41% margin', '+40pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 615, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 63, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 612, notes: ['43% margin', '+34pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 17, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 10, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 302, notes: ['21% of revenue', '(13pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 170, notes: ['12% of revenue', '(10pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 5, type: 'cost', label: 'R&D', value: 144, notes: ['10% of revenue', '(11pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'commercial', target: 'revenue', value: 677, width: 186, y0: 615, y1: 720, sourceOrder: 0, targetOrder: 0 },
      { source: 'government', target: 'revenue', value: 730, width: 202, y0: 1004, y1: 915, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1191, width: 329, y0: 791.5, y1: 688.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 216, sourceWidth: 60, targetWidth: 57, y0: 986.5, y1: 1078.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 575, sourceWidth: 159, targetWidth: 158, y0: 603.5, y1: 509, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 615, sourceWidth: 172, targetWidth: 169, y0: 767, y1: 871.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 63, sourceWidth: 15, targetWidth: 19, y0: 317.5, y1: 339.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 575, sourceWidth: 151, targetWidth: 150, y0: 505.5, y1: 424, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 17, sourceWidth: 6, targetWidth: 3, y0: 584, y1: 640.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 10, sourceWidth: 3, targetWidth: 2, y0: 586.5, y1: 746, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 302, sourceWidth: 84, targetWidth: 82, y0: 829, y1: 863, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 170, sourceWidth: 49, targetWidth: 45, y0: 894.5, y1: 1072.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 144, sourceWidth: 37, targetWidth: 38, y0: 937.5, y1: 1261, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Palantir · 2025 财年第四季度',
        meta: {
          title: 'Palantir 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          commercial: { label: '商业', notes: ['同比 +82%'] },
          government: { label: '政府', notes: ['同比 +60%'] },
          revenue: { label: '收入', notes: ['同比 +70%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 85%', '同比 +6 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 41%', '同比 +40 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 43%', '同比 +34 个百分点'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 21%', '同比 (13 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 12%', '同比 (10 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 10%', '同比 (11 个百分点)'] },
        },
        layout: {
          labels: {
            commercial: { blocks: [
              { x: 420, top: 418, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +82%', size: 29, weight: 400, color: NOTE }] },
              { x: 335, top: 560, anchor: 'end', lines: [{ text: '商业', size: 36, weight: 800 }] },
            ] },
            government: { blocks: [
              { x: 420, top: 798, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +60%', size: 29, weight: 400, color: NOTE }] },
              { x: 335, top: 950, anchor: 'end', lines: [{ text: '政府', size: 36, weight: 800 }] },
            ] },
            revenue: { blocks: [{ x: 886, top: 473, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +70%', size: 29, weight: 400, color: NOTE }] }] },
            gross_profit: { blocks: [{ x: 1354, top: 336, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 85%', size: 29, weight: 400, color: NOTE }, { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            cost_of_revenue: { blocks: [{ x: 1354, top: 1120, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 37, weight: 800 }, { text: '成本', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }] },
            operating_profit: { blocks: [{ x: 1821, top: 234, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 41%', size: 29, weight: 400, color: NOTE }, { text: '同比 +40 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1821, top: 968, anchor: 'middle', lineGap: 8, lines: [{ text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
            interest: { blocks: [{ x: 2163, top: 222, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
            net_profit: { blocks: [{ x: 2350, top: 362, anchor: 'start', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 43%', size: 29, weight: 400, color: NOTE }, { text: '同比 +34 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            other: { blocks: [{ x: RIGHT_LABEL_X, top: 606, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
            tax: { blocks: [{ x: RIGHT_LABEL_X, top: 746, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
            sm: { blocks: [{ x: 2451, top: 827, anchor: 'middle', lineGap: 8, lines: [{ text: '销售与营销', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 21%', size: 29, weight: 400, color: NOTE }, { text: '同比 (13 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            ga: { blocks: [{ x: 2451, top: 1040, anchor: 'middle', lineGap: 8, lines: [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 12%', size: 29, weight: 400, color: NOTE }, { text: '同比 (10 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            rnd: { blocks: [{ x: 2451, top: 1226, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 10%', size: 29, weight: 400, color: NOTE }, { text: '同比 (11 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
          },
        },
      },
    },
  });
})();
