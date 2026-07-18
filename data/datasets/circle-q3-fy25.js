/* ====================================================================
 * Circle - Q3 FY25 income statement ($M)
 * Reconstructed from input/processed/circle-q3-fy25.png as a fixed
 * d3-sankey layout with a pure-SVG Circle brand reconstruction.
 * ==================================================================== */
(function () {
  const NAVY = '#3c3752';
  const GRAY_LINK = '#a09daa';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_LABEL_X = 2442;

  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    x,
    top,
    anchor,
    lineGap,
    lines,
  });

  const circleLogo = `
    <g>
      <circle cx="95" cy="84" r="70" fill="none" stroke="#6ee2d0" stroke-width="20" stroke-dasharray="208 232" stroke-dashoffset="17"/>
      <circle cx="95" cy="84" r="51" fill="none" stroke="#57b7f4" stroke-width="19" stroke-dasharray="150 170" stroke-dashoffset="-28"/>
      <circle cx="95" cy="84" r="31" fill="none" stroke="#9786ee" stroke-width="19" stroke-dasharray="91 105" stroke-dashoffset="-49"/>
      <circle cx="95" cy="84" r="11" fill="#ffffff"/>
      <text x="210" y="126" font-family="Montserrat,Arial,sans-serif" font-size="128" font-weight="600" letter-spacing="2" fill="${NAVY}">CIRCLE</text>
    </g>`;

  const enLabels = {
    reserve_income: {
      blocks: [
        block(374, 423, [line('$value', 40), line('+60% Y/Y', 29, 400, NOTE)], 'middle', 9),
        block(270, 631, [line('Reserve', 40, 800), line('income', 40, 800)], 'end'),
      ],
    },
    other_revenue: {
      blocks: [
        block(374, 982, [line('$value', 40), line('NM', 29, 400, NOTE)], 'middle', 9),
        block(270, 1044, [line('Other', 40, 800), line('revenue', 40, 800)], 'end'),
      ],
    },
    revenue: {
      blocks: [block(998, 512, [
        line('Revenue', 40, 800),
        line('$value', 40),
        line('+66% Y/Y', 29, 400, NOTE),
      ], 'middle', 10)],
    },
    operating_profit: {
      blocks: [block(1620, 338, [
        line('Operating profit', 40, 800),
        line('$value', 40),
        line('5% margin', 29, 400, NOTE),
        line('(0pp) Y/Y', 29, 400, NOTE),
      ], 'middle', 9)],
    },
    distribution_transaction_costs: {
      blocks: [block(1661, 794, [
        line('Distribution and', 37, 800),
        line('transaction costs', 37, 800),
        line('$value', 36),
      ], 'start')],
    },
    operating_expenses: {
      blocks: [block(1621, 1222, [
        line('Operating', 39, 800),
        line('expenses', 39, 800),
        line('$value', 36),
      ])],
    },
    tax_benefit: {
      blocks: [block(2093, 287, [line('Tax benefit', 34, 800), line('$value', 33)])],
    },
    other_income: {
      blocks: [block(2103, 570, [line('Other', 34, 800), line('$value', 33)])],
    },
    net_profit: {
      blocks: [block(RIGHT_LABEL_X, 416, [
        line('Net profit', 40, 800),
        line('$value', 40),
        line('12% margin', 29, 400, NOTE),
        line('+7pp Y/Y', 29, 400, NOTE),
      ], 'middle', 9)],
    },
    compensation: {
      blocks: [block(2452, 776, [line('Compensation', 34, 800), line('$value', 33)])],
    },
    general_admin: {
      blocks: [block(RIGHT_LABEL_X, 915, [line('General & admin', 34, 800), line('$value', 33)])],
    },
    depreciation_amortization: {
      blocks: [block(RIGHT_LABEL_X, 1021, [
        line('Depreciation &', 34, 800),
        line('amortization', 34, 800),
        line('$value', 33),
      ], 'middle', 7)],
    },
    it_infrastructure: {
      blocks: [block(2453, 1156, [line('IT Infrastructure', 34, 800), line('$value', 33)])],
    },
    marketing_other: {
      blocks: [block(RIGHT_LABEL_X, 1277, [line('Marketing & other', 34, 800), line('$value', 33)])],
    },
  };

  const zhLabels = {
    reserve_income: {
      blocks: [
        block(374, 423, [line('$value', 40), line('同比 +60%', 29, 400, NOTE)], 'middle', 9),
        block(270, 654, [line('储备金收益', 40, 800)], 'end'),
      ],
    },
    other_revenue: {
      blocks: [
        block(374, 982, [line('$value', 40), line('同比不可比', 29, 400, NOTE)], 'middle', 9),
        block(270, 1069, [line('其他收入', 40, 800)], 'end'),
      ],
    },
    revenue: {
      blocks: [block(998, 512, [
        line('收入', 40, 800),
        line('$value', 40),
        line('同比 +66%', 29, 400, NOTE),
      ], 'middle', 10)],
    },
    operating_profit: {
      blocks: [block(1620, 338, [
        line('营业利润', 40, 800),
        line('$value', 40),
        line('利润率 5%', 29, 400, NOTE),
        line('同比（0 个百分点）', 29, 400, NOTE),
      ], 'middle', 9)],
    },
    distribution_transaction_costs: {
      blocks: [block(1661, 794, [
        line('分发与', 37, 800),
        line('交易成本', 37, 800),
        line('$value', 36),
      ], 'start')],
    },
    operating_expenses: {
      blocks: [block(1621, 1222, [line('运营费用', 39, 800), line('$value', 36)])],
    },
    tax_benefit: {
      blocks: [block(2093, 287, [line('税收收益', 34, 800), line('$value', 33)])],
    },
    other_income: {
      blocks: [block(2103, 570, [line('其他', 34, 800), line('$value', 33)])],
    },
    net_profit: {
      blocks: [block(RIGHT_LABEL_X, 416, [
        line('净利润', 40, 800),
        line('$value', 40),
        line('利润率 12%', 29, 400, NOTE),
        line('同比 +7 个百分点', 29, 400, NOTE),
      ], 'middle', 9)],
    },
    compensation: {
      blocks: [block(RIGHT_LABEL_X, 776, [line('薪酬', 34, 800), line('$value', 33)])],
    },
    general_admin: {
      blocks: [block(RIGHT_LABEL_X, 915, [line('一般及行政费用', 34, 800), line('$value', 33)])],
    },
    depreciation_amortization: {
      blocks: [block(RIGHT_LABEL_X, 1044, [line('折旧及摊销', 34, 800), line('$value', 33)])],
    },
    it_infrastructure: {
      blocks: [block(RIGHT_LABEL_X, 1156, [line('IT 基础设施', 34, 800), line('$value', 33)])],
    },
    marketing_other: {
      blocks: [block(RIGHT_LABEL_X, 1277, [line('市场营销及其他', 34, 800), line('$value', 33)])],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'circle-q3-fy25',
    name: 'Circle · Q3 FY25',
    company: 'Circle',
    meta: {
      company: 'Circle',
      title: 'Circle Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/circle-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2070,
      periodX: 175,
      periodY: 1420,
      periodNoteY: 1460,
      logoWidth: 800,
      logoHeight: 170,
      logoY: 264,
      logoViewBox: '0 0 800 170',
      logoSvg: circleLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: '#f2f2f2',
      noteColor: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 0.458,
      nodes: {
        reserve_income: { x: 338, y: 515, width: 72, height: 326 },
        other_revenue: { x: 338, y: 1084, width: 72, height: 12 },
        revenue: { x: 961, y: 656, width: 72, height: 339 },
        operating_profit: { x: 1584, y: 521, width: 72, height: 36 },
        distribution_transaction_costs: { x: 1584, y: 765, width: 72, height: 205 },
        operating_expenses: { x: 1586, y: 1115, width: 73, height: 96 },
        tax_benefit: { x: 2057, y: 382, width: 72, height: 32 },
        other_income: { x: 2067, y: 532, width: 72, height: 27 },
        net_profit: { x: 2207, y: 418, width: 72, height: 97 },
        compensation: { x: 2207, y: 786, width: 72, height: 59 },
        general_admin: { x: 2207, y: 930, width: 72, height: 19 },
        depreciation_amortization: { x: 2207, y: 1055, width: 72, height: 9 },
        it_infrastructure: { x: 2207, y: 1174, width: 72, height: 4 },
        marketing_other: { x: 2207, y: 1300, width: 72, height: 1 },
      },
      labels: enLabels,
    },
    nodes: [
      { id: 'reserve_income', col: 0, order: 0, type: 'source', label: ['Reserve', 'income'], value: 711, notes: ['+60% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: ['Other', 'revenue'], value: 29, notes: ['NM'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 740, notes: ['+66% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 81, notes: ['5% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'distribution_transaction_costs', col: 2, order: 1, type: 'cost', label: ['Distribution and', 'transaction costs'], value: 448, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 2, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 211, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 3, order: 0, type: 'profit', label: 'Tax benefit', value: 61, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: 'Other', value: 72, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 214, notes: ['12% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'compensation', col: 4, order: 1, type: 'cost', label: 'Compensation', value: 129, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 4, order: 2, type: 'cost', label: 'General & admin', value: 45, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 3, type: 'cost', label: ['Depreciation &', 'amortization'], value: 23, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'it_infrastructure', col: 4, order: 4, type: 'cost', label: 'IT Infrastructure', value: 9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_other', col: 4, order: 5, type: 'cost', label: 'Marketing & other', value: 4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'reserve_income', target: 'revenue', value: 711, sourceWidth: 326, targetWidth: 326, sourceOrder: 0, targetOrder: 0, y0: 678, y1: 819, linkTint: GRAY_LINK },
      { source: 'other_revenue', target: 'revenue', value: 29, sourceWidth: 12, targetWidth: 12, sourceOrder: 0, targetOrder: 1, y0: 1090, y1: 989, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'operating_profit', value: 81, width: 36, sourceOrder: 0, targetOrder: 0, y0: 674, y1: 539, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'distribution_transaction_costs', value: 448, width: 205, sourceOrder: 1, targetOrder: 0, y0: 794.5, y1: 867.5 },
      { source: 'revenue', target: 'operating_expenses', value: 211, sourceWidth: 98, targetWidth: 96, sourceOrder: 2, targetOrder: 0, y0: 946, y1: 1163 },
      { source: 'operating_profit', target: 'net_profit', value: 81, sourceWidth: 36, targetWidth: 37, sourceOrder: 0, targetOrder: 1, y0: 539, y1: 469.5, linkTint: GREEN_LINK },
      { source: 'tax_benefit', target: 'net_profit', value: 61, sourceWidth: 32, targetWidth: 33, sourceOrder: 0, targetOrder: 0, y0: 398, y1: 434.5, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'net_profit', value: 72, sourceWidth: 27, targetWidth: 27, sourceOrder: 0, targetOrder: 2, y0: 545.5, y1: 501.5, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'compensation', value: 129, sourceWidth: 59, targetWidth: 59, sourceOrder: 0, targetOrder: 0, y0: 1144.5, y1: 815.5 },
      { source: 'operating_expenses', target: 'general_admin', value: 45, sourceWidth: 21, targetWidth: 19, sourceOrder: 1, targetOrder: 0, y0: 1184.5, y1: 939.5 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 23, sourceWidth: 10, targetWidth: 9, sourceOrder: 2, targetOrder: 0, y0: 1200, y1: 1059.5 },
      { source: 'operating_expenses', target: 'it_infrastructure', value: 9, sourceWidth: 4, targetWidth: 4, sourceOrder: 3, targetOrder: 0, y0: 1207, y1: 1176 },
      { source: 'operating_expenses', target: 'marketing_other', value: 4, sourceWidth: 2, targetWidth: 1, sourceOrder: 4, targetOrder: 0, y0: 1210, y1: 1300.5 },
    ],
    i18n: {
      zh: {
        name: 'Circle · 2025 财年第三季度',
        meta: {
          title: 'Circle 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 1800,
        },
        nodes: {
          reserve_income: { label: '储备金收益', notes: ['同比 +60%'] },
          other_revenue: { label: '其他收入', notes: ['同比不可比'] },
          revenue: { label: '收入', notes: ['同比 +66%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比（0 个百分点）'] },
          distribution_transaction_costs: { label: '分发与交易成本' },
          operating_expenses: { label: '运营费用' },
          tax_benefit: { label: '税收收益' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +7 个百分点'] },
          compensation: { label: '薪酬' },
          general_admin: { label: '一般及行政费用' },
          depreciation_amortization: { label: '折旧及摊销' },
          it_infrastructure: { label: 'IT 基础设施' },
          marketing_other: { label: '市场营销及其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
