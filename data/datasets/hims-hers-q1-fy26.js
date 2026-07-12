/* Hims & Hers Q1 FY26 income statement ($M), measured against the supplied
 * source infographic. Financial facts live in data/income-statements/hims-hers.js. */
(function () {
  const TITLE = '#15527a';
  const TAN = '#ca9a5d';
  const TAN_LINK = '#e1cbaa';
  const GREEN = '#26a229';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#9ccd9c';
  const RED = '#de0000';
  const RED_LABEL = '#951400';
  const RED_LINK = '#e38486';
  const NOTE = '#707070';
  const CARD = '#ce9754';
  const RIGHT_LABEL_X = 2455;
  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap || 9, lines });

  const himsHersLogo = `
    <g transform="translate(-24 0)">
      <text x="350" y="119" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="139" font-weight="700" letter-spacing="-6" textLength="665" lengthAdjust="spacingAndGlyphs" fill="#121212">hims &amp; hers</text>
    </g>`;

  const annotations = (labels) => `
    <g font-family="Noto Sans, Arial, sans-serif">
      <g data-typography-role="brand">
        <rect x="44" y="710" width="135" height="136" rx="28" fill="#ffffff"/>
        <text x="111.5" y="790" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="700" letter-spacing="-3" fill="#c67552">hims</text>
      </g>
      <g data-typography-role="brand">
        <rect x="191" y="710" width="135" height="136" rx="28" fill="#7cc7b2"/>
        <text x="258.5" y="790" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="700" letter-spacing="-3" fill="#ffffff">hers</text>
      </g>
      <g>
        <rect x="72" y="1201" width="240" height="148" rx="27" fill="${CARD}"/>
        <text x="192" y="1252" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff">${labels.subscribers}</text>
        <text x="192" y="1291" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">2.6M</text>
        <text x="192" y="1325" text-anchor="middle" font-size="25" font-weight="400" fill="#ffffff">${labels.subscribersNote}</text>
      </g>
      <g>
        <rect x="325" y="1201" width="379" height="148" rx="27" fill="${CARD}"/>
        <text x="514.5" y="1252" text-anchor="middle" font-size="27" font-weight="800" fill="#ffffff">${labels.monthlyRevenue}</text>
        <text x="514.5" y="1291" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">$80</text>
        <text x="514.5" y="1325" text-anchor="middle" font-size="25" font-weight="400" fill="#ffffff">${labels.monthlyRevenueNote}</text>
      </g>
    </g>`;

  const labels = {
    united_states: { blocks: [
      block(387, 437, [line('$value', 40), line('(8)% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
      block(120, 594, [line('United', 40, { weight: 800 }), line('States', 40, { weight: 800 })], { anchor: 'start', lineGap: 10 }),
    ] },
    rest_of_world: { blocks: [
      block(387, 956, [line('$value', 40), line('+969% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
      block(120, 1028, [line('Rest of', 40, { weight: 800 }), line('World', 40, { weight: 800 })], { anchor: 'start', lineGap: 10 }),
    ] },
    revenue: { blocks: [block(853, 512, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+4% Y/Y', 29, { color: NOTE })], { lineGap: 10 })] },
    gross_profit: { blocks: [block(1320, 344, [line('Gross profit', 40, { weight: 800 }), line('$value', 40), line('65% margin', 29, { color: NOTE }), line('(8pp) Y/Y', 29, { color: NOTE })], { lineGap: 10 })] },
    cost_of_revenue: { blocks: [block(1320, 1116, [line('Cost of', 36, { weight: 800 }), line('revenue', 36, { weight: 800 }), line('$value', 36)], { lineGap: 8 })] },
    operating_loss: { blocks: [block(1595, 1034, [line('Operating', 40, { weight: 800 }), line('loss', 40, { weight: 800 }), line('$value', 40), line('(13%) margin', 29, { color: NOTE }), line('(23pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1787, 498, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 40)], { lineGap: 9 })] },
    marketing: { blocks: [block(RIGHT_LABEL_X, 482, [line('Marketing', 31, { weight: 800 }), line('$value', 31), line('37% of revenue', 29, { color: NOTE }), line('(3pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    general_admin: { blocks: [block(RIGHT_LABEL_X, 710, [line('General & admin', 31, { weight: 800 }), line('$value', 31), line('18% of revenue', 29, { color: NOTE }), line('+10pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    operations_support: { blocks: [block(RIGHT_LABEL_X, 895, [line('Operations', 31, { weight: 800 }), line('& support', 31, { weight: 800 }), line('$value', 31), line('16% of revenue', 29, { color: NOTE }), line('+5pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    tech_development: { blocks: [block(RIGHT_LABEL_X, 1100, [line('Tech & Development', 31, { weight: 800 }), line('$value', 31), line('8% of revenue', 29, { color: NOTE }), line('+3pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
  };

  const zhLabels = {
    united_states: { blocks: [block(387, 437, [line('$value', 40), line('同比 (8%)', 29, { color: NOTE })], { lineGap: 10 }), block(120, 616, [line('美国', 40, { weight: 800 })], { anchor: 'start' })] },
    rest_of_world: { blocks: [block(387, 956, [line('$value', 40), line('同比 +969%', 29, { color: NOTE })], { lineGap: 10 }), block(120, 1050, [line('世界其他地区', 37, { weight: 800 })], { anchor: 'start' })] },
    revenue: { blocks: [block(853, 512, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +4%', 29, { color: NOTE })], { lineGap: 10 })] },
    gross_profit: { blocks: [block(1320, 344, [line('毛利润', 40, { weight: 800 }), line('$value', 40), line('利润率 65%', 29, { color: NOTE }), line('同比 (8 个百分点)', 29, { color: NOTE })], { lineGap: 10 })] },
    cost_of_revenue: { blocks: [block(1320, 1116, [line('收入', 36, { weight: 800 }), line('成本', 36, { weight: 800 }), line('$value', 36)], { lineGap: 8 })] },
    operating_loss: { blocks: [block(1595, 1045, [line('营业亏损', 40, { weight: 800 }), line('$value', 40), line('利润率 (13%)', 29, { color: NOTE }), line('同比 (23 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1787, 509, [line('营业费用', 40, { weight: 800 }), line('$value', 40)], { lineGap: 9 })] },
    marketing: { blocks: [block(RIGHT_LABEL_X, 493, [line('营销费用', 31, { weight: 800 }), line('$value', 31), line('占收入 37%', 29, { color: NOTE }), line('同比 (3 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
    general_admin: { blocks: [block(RIGHT_LABEL_X, 721, [line('一般及行政费用', 31, { weight: 800 }), line('$value', 31), line('占收入 18%', 29, { color: NOTE }), line('同比 +10 个百分点', 29, { color: NOTE })], { lineGap: 8 })] },
    operations_support: { blocks: [block(RIGHT_LABEL_X, 907, [line('运营与支持', 31, { weight: 800 }), line('$value', 31), line('占收入 16%', 29, { color: NOTE }), line('同比 +5 个百分点', 29, { color: NOTE })], { lineGap: 8 })] },
    tech_development: { blocks: [block(RIGHT_LABEL_X, 1112, [line('技术与开发', 31, { weight: 800 }), line('$value', 31), line('占收入 8%', 29, { color: NOTE }), line('同比 +3 个百分点', 29, { color: NOTE })], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hims-hers-q1-fy26',
    name: 'Hims & Hers · Q1 FY26',
    company: 'Hims & Hers',
    meta: {
      company: 'Hims & Hers',
      title: 'Hims & Hers Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/hims-hers-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 122, titleWeight: 800, titleTextLength: 2500,
      hidePeriodStamp: true,
      logoWidth: 700, logoHeight: 145, logoY: 270, logoViewBox: '0 0 700 145', logoSvg: himsHersLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: TAN, label: TAN }, hub: { node: TAN, label: TAN }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: TAN_LINK, hub: TAN_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations({ subscribers: 'Subscribers', subscribersNote: '+9% Y/Y', monthlyRevenue: 'Monthly Rev. per Sub', monthlyRevenueNote: '(6%) Y/Y' }),
    layout: {
      nodes: {
        united_states: { x: 350, y: 532, width: 73, height: 316 },
        rest_of_world: { x: 350, y: 1050, width: 73, height: 46 },
        revenue: { x: 817, y: 656, width: 73, height: 362 },
        gross_profit: { x: 1284, y: 526, width: 73, height: 237 },
        cost_of_revenue: { x: 1284, y: 973, width: 73, height: 126 },
        operating_loss: { x: 1559, y: 965, width: 73, height: 47 },
        operating_expenses: { x: 1751, y: 656, width: 73, height: 283 },
        marketing: { x: 2218, y: 474, width: 73, height: 132 },
        general_admin: { x: 2218, y: 736, width: 73, height: 66 },
        operations_support: { x: 2218, y: 936, width: 73, height: 58 },
        tech_development: { x: 2218, y: 1134, width: 73, height: 28 },
      },
      labels,
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 530, notes: ['(8)% Y/Y'], color: TAN, labelColor: '#000000', linkTint: TAN_LINK },
      { id: 'rest_of_world', col: 0, order: 1, type: 'source', label: 'Rest of World', value: 78, notes: ['+969% Y/Y'], color: TAN, labelColor: '#000000', linkTint: TAN_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 608, notes: ['+4% Y/Y'], color: TAN, labelColor: '#000000', linkTint: TAN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 397, notes: ['65% margin', '(8pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 211, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -78, notes: ['(13%) margin', '(23pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 475, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 0, type: 'cost', label: 'Marketing', value: 222, notes: ['37% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 5, order: 1, type: 'cost', label: 'General & admin', value: 110, notes: ['18% of revenue', '+10pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations_support', col: 5, order: 2, type: 'cost', label: ['Operations', '& support'], value: 97, notes: ['16% of revenue', '+5pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tech_development', col: 5, order: 3, type: 'cost', label: 'Tech & Development', value: 47, notes: ['8% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 530, sourceWidth: 316, targetWidth: 316, y0: 690, y1: 814, sourceOrder: 0, targetOrder: 0 },
      { source: 'rest_of_world', target: 'revenue', value: 78, sourceWidth: 46, targetWidth: 46, y0: 1073, y1: 995, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 397, sourceWidth: 237, targetWidth: 237, y0: 774.5, y1: 644.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 211, sourceWidth: 125, targetWidth: 126, y0: 955.5, y1: 1036, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 397, sourceWidth: 237, targetWidth: 237, y0: 644.5, y1: 774.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 78, sourceWidth: 47, targetWidth: 47, y0: 988.5, y1: 915.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing', value: 222, sourceWidth: 132, targetWidth: 132, y0: 722, y1: 540, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_admin', value: 110, sourceWidth: 66, targetWidth: 66, y0: 821, y1: 769, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations_support', value: 97, sourceWidth: 58, targetWidth: 58, y0: 883, y1: 965, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'tech_development', value: 47, sourceWidth: 28, targetWidth: 28, y0: 925, y1: 1148, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['hims', 'hers'],
      zh: {
        name: 'Hims & Hers · 2026 财年第一季度',
        meta: { title: 'Hims & Hers 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 31 日的季度', titleSize: 108, titleTextLength: 1840 },
        annotationsSvg: annotations({ subscribers: '订阅用户', subscribersNote: '同比 +9%', monthlyRevenue: '每位订阅用户月收入', monthlyRevenueNote: '同比 (6%)' }),
        nodes: {
          united_states: { label: '美国', notes: ['同比 (8%)'] }, rest_of_world: { label: '世界其他地区', notes: ['同比 +969%'] }, revenue: { label: '收入', notes: ['同比 +4%'] }, gross_profit: { label: '毛利润', notes: ['利润率 65%', '同比 (8 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, operating_loss: { label: '营业亏损', notes: ['利润率 (13%)', '同比 (23 个百分点)'] }, operating_expenses: { label: '营业费用' }, marketing: { label: '营销费用', notes: ['占收入 37%', '同比 (3 个百分点)'] }, general_admin: { label: '一般及行政费用', notes: ['占收入 18%', '同比 +10 个百分点'] }, operations_support: { label: '运营与支持', notes: ['占收入 16%', '同比 +5 个百分点'] }, tech_development: { label: '技术与开发', notes: ['占收入 8%', '同比 +3 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
