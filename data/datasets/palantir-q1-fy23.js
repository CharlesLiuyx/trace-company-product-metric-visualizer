/* Palantir Q1 FY23 income statement ($M), reconstructed from the Source. */
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
  const RIGHT_LABEL_X = 2467;

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
      <rect x="111" y="1184" width="190" height="157" rx="29" fill="${CARD}"/>
      <text x="206" y="1235" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.billings}</text>
      <text x="206" y="1277" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">$614M</text>
      <text x="206" y="1319" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${labels.billingsGrowth}</text>

      <rect x="313" y="1181" width="214" height="164" rx="29" fill="${CARD}"/>
      <text x="420" y="1251" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">DBNR</text>
      <text x="420" y="1293" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">111%</text>

      <rect x="538" y="1181" width="214" height="164" rx="29" fill="${CARD}"/>
      <text x="645" y="1235" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.customers}</text>
      <text x="645" y="1277" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">391</text>
      <text x="645" y="1319" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${labels.customersGrowth}</text>

      <text x="199" y="1381" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    billings: 'Billings',
    billingsGrowth: '+25% Y/Y',
    customers: 'Customers',
    customersGrowth: '+41% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = annotations({
    billings: '账单额',
    billingsGrowth: '同比 +25%',
    customers: '客户数',
    customersGrowth: '同比 +41%',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q1-fy23',
    name: 'Palantir · Q1 FY23',
    company: 'Palantir',
    meta: {
      company: 'Palantir',
      title: 'Palantir Q1 FY23 Income Statement',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2214,
      hidePeriodStamp: true,
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
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 1,
      nodes: {
        government: { x: 381, y: 491, width: 71, height: 155 },
        commercial: { x: 381, y: 925, width: 71, height: 126 },
        revenue: { x: 898, y: 644, width: 70, height: 283 },
        gross_profit: { x: 1385, y: 553, width: 71, height: 224 },
        cost_of_revenue: { x: 1385, y: 970, width: 71, height: 56 },
        operating_profit: { x: 1810, y: 462, width: 70, height: 4 },
        operating_expenses: { x: 1815, y: 678, width: 70, height: 222 },
        interest: { x: 2113, y: 309, width: 70, height: 9 },
        net_profit: { x: 2249, y: 376, width: 71, height: 8 },
        tax: { x: 2249, y: 562, width: 71, height: 4 },
        other: { x: 2249, y: 676, width: 71, height: 4 },
        sm: { x: 2249, y: 780, width: 71, height: 100 },
        ga: { x: 2249, y: 1010, width: 71, height: 71 },
        rnd: { x: 2249, y: 1232, width: 71, height: 47 },
      },
      labels: {
        government: { blocks: [
          { x: 416, top: 398, anchor: 'middle', lineGap: 12, lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 322, top: 548, anchor: 'end', lines: [{ text: 'Government', size: 40, weight: 800 }] },
        ] },
        commercial: { blocks: [
          { x: 416, top: 829, anchor: 'middle', lineGap: 12, lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 315, top: 964, anchor: 'end', lines: [{ text: 'Commercial', size: 40, weight: 800 }] },
        ] },
        revenue: { blocks: [{ x: 933, top: 498, anchor: 'middle', lineGap: 12, lines: [
          { text: 'Revenue', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1421, top: 364, anchor: 'middle', lineGap: 11, lines: [
          { text: 'Gross profit', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '80% margin', size: 29, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1421, top: 1045, anchor: 'middle', lineGap: 12, lines: [
          { text: 'Cost of', size: 37, weight: 800 },
          { text: 'revenue', size: 37, weight: 800 },
          { text: '$value', size: 36, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1845, top: 277, anchor: 'middle', lineGap: 11, lines: [
          { text: 'Operating profit', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '1% margin', size: 29, weight: 400, color: NOTE },
          { text: '+10pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1850, top: 912, anchor: 'middle', lineGap: 12, lines: [
          { text: 'Operating', size: 40, weight: 800 },
          { text: 'expenses', size: 40, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
        ] }] },
        interest: { blocks: [{ x: 2148, top: 222, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Interest', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2367, top: 318, anchor: 'start', lineGap: 11, lines: [
          { text: 'Net profit', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '4% margin', size: 29, weight: 400, color: NOTE },
          { text: '+26pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: RIGHT_LABEL_X, top: 529, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
        other: { blocks: [{ x: RIGHT_LABEL_X, top: 635, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 795, anchor: 'middle', lineGap: 10, lines: [
          { text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
          { text: '36% of revenue', size: 29, weight: 400, color: NOTE },
          { text: 'Flat Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1006, anchor: 'middle', lineGap: 10, lines: [
          { text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
          { text: '26% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '(6pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 1189, anchor: 'middle', lineGap: 10, lines: [
          { text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
          { text: '17% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
      },
    },

    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 289, notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 236, notes: ['+15% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 525, notes: ['+18% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 418, notes: ['80% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 108, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4, notes: ['1% margin', '+10pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 413, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 20, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 19, notes: ['4% margin', '+26pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 187, notes: ['36% of revenue', 'Flat Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 136, notes: ['26% of revenue', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 5, type: 'cost', label: 'R&D', value: 90, notes: ['17% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'government', target: 'revenue', value: 289, width: 155, y0: 568.5, y1: 721.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'revenue', value: 236, sourceWidth: 126, targetWidth: 128, y0: 988, y1: 863, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 418, sourceWidth: 227, targetWidth: 224, y0: 757.5, y1: 665, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 108, sourceWidth: 56, targetWidth: 56, y0: 899, y1: 998, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4, sourceWidth: 2, targetWidth: 4, y0: 554, y1: 464, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 413, sourceWidth: 222, targetWidth: 222, y0: 666, y1: 789, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 20, sourceWidth: 9, targetWidth: 6, y0: 313.5, y1: 379, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 4, sourceWidth: 2, targetWidth: 2, y0: 463, y1: 383, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 2, sourceWidth: 1, targetWidth: 4, y0: 464.5, y1: 564, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 3, sourceWidth: 1, targetWidth: 4, y0: 465.5, y1: 678, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 187, sourceWidth: 100, targetWidth: 100, y0: 728, y1: 830, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 136, sourceWidth: 73, targetWidth: 71, y0: 814.5, y1: 1045.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 90, sourceWidth: 49, targetWidth: 47, y0: 875.5, y1: 1255.5, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Palantir · 2023 财年第一季度',
        meta: {
          title: 'Palantir 2023 财年第一季度利润表',
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          government: { label: '政府', notes: ['同比 +20%'] },
          commercial: { label: '商业', notes: ['同比 +15%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 +10 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 +26 个百分点'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          sm: { label: '销售与营销', notes: ['占收入 36%', '同比持平'] },
          ga: { label: '管理费用', notes: ['占收入 26%', '同比 (6 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 17%', '同比 (3 个百分点)'] },
        },
        layout: {
          labels: {
            government: { blocks: [
              { x: 416, top: 398, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +20%', size: 29, weight: 400, color: NOTE }] },
              { x: 322, top: 550, anchor: 'end', lines: [{ text: '政府', size: 36, weight: 800 }] },
            ] },
            commercial: { blocks: [
              { x: 416, top: 829, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +15%', size: 29, weight: 400, color: NOTE }] },
              { x: 315, top: 966, anchor: 'end', lines: [{ text: '商业', size: 36, weight: 800 }] },
            ] },
            revenue: { blocks: [{ x: 933, top: 498, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +18%', size: 29, weight: 400, color: NOTE }] }] },
            gross_profit: { blocks: [{ x: 1421, top: 364, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 80%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            cost_of_revenue: { blocks: [{ x: 1421, top: 1045, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 37, weight: 800 }, { text: '成本', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }] },
            operating_profit: { blocks: [{ x: 1845, top: 277, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 1%', size: 29, weight: 400, color: NOTE }, { text: '同比 +10 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1850, top: 912, anchor: 'middle', lineGap: 8, lines: [{ text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
            interest: { blocks: [{ x: 2148, top: 222, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
            net_profit: { blocks: [{ x: 2367, top: 328, anchor: 'start', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 4%', size: 29, weight: 400, color: NOTE }, { text: '同比 +26 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            tax: { blocks: [{ x: RIGHT_LABEL_X, top: 529, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
            other: { blocks: [{ x: RIGHT_LABEL_X, top: 635, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
            sm: { blocks: [{ x: RIGHT_LABEL_X, top: 795, anchor: 'middle', lineGap: 8, lines: [{ text: '销售与营销', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 36%', size: 29, weight: 400, color: NOTE }, { text: '同比持平', size: 29, weight: 400, color: NOTE }] }] },
            ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1006, anchor: 'middle', lineGap: 8, lines: [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 26%', size: 29, weight: 400, color: NOTE }, { text: '同比 (6 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 1189, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 17%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
          },
        },
      },
    },
  });
})();
