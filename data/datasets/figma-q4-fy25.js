/* ====================================================================
 * Figma - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/figma-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const DARK = '#2b2c33';
  const DARK_LABEL = '#2a2c33';
  const DARK_LINK = '#98999c';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2463;

  const figmaLogo = `
    <defs>
      <filter id="figma-q4-icon-shadow" x="-14%" y="-10%" width="128%" height="128%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#000000" flood-opacity="0.16"/>
      </filter>
    </defs>
    <g filter="url(#figma-q4-icon-shadow)">
      <rect x="8" y="8" width="234" height="234" rx="48" fill="${DARK}"/>
      <g transform="translate(61 38)">
        <path d="M28 0H84V56H28C12.5 56 0 43.5 0 28S12.5 0 28 0Z" fill="#f24e1e"/>
        <path d="M84 0H112C127.5 0 140 12.5 140 28S127.5 56 112 56H84V0Z" fill="#ff7262"/>
        <path d="M28 58H84V114H28C12.5 114 0 101.5 0 86S12.5 58 28 58Z" fill="#a259ff"/>
        <circle cx="112" cy="86" r="28" fill="#1abcfe"/>
        <path d="M28 116H84V172C84 187.5 71.5 200 56 200S28 187.5 28 172V116Z" fill="#0acf83"/>
      </g>
    </g>`;

  const kpiCard = (x, y, width, height, rx, content) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${DARK}"/>
      ${content}
    </g>`;

  const annotations = (copy) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(104, 1154, 187, 164, 34, `
        <text x="198" y="1205" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">NDR</text>
        <text x="198" y="1248" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">136%</text>
        <text x="198" y="1291" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${copy.ndrGrowth}</text>
      `)}
      ${kpiCard(304, 1154, 387, 163, 28, `
        <text x="498" y="1205" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${copy.customers}</text>
        <text x="327" y="1249" text-anchor="start" font-size="${copy.customerLineSize || 28}" font-weight="500" fill="#ffffff">
          <tspan>${copy.customer10kPrefix}</tspan><tspan dx="${copy.customerNumberDx == null ? 8 : copy.customerNumberDx}" font-weight="800">13,861</tspan><tspan dx="${copy.customerGrowthDx == null ? 5 : copy.customerGrowthDx}">${copy.customer10kGrowth}</tspan>
        </text>
        <text x="327" y="1292" text-anchor="start" font-size="${copy.customerLineSize || 28}" font-weight="500" fill="#ffffff">
          <tspan>${copy.customer100kPrefix}</tspan><tspan dx="${copy.customerNumberDx == null ? 8 : copy.customerNumberDx}" font-weight="800">1,405</tspan><tspan dx="${copy.customerGrowthDx == null ? 5 : copy.customerGrowthDx}">${copy.customer100kGrowth}</tspan>
        </text>
      `)}
      <text x="158" y="1356" font-size="29" font-weight="500" fill="${NOTE}">${copy.ndrFootnote}</text>
    </g>`;

  const labels = (copy) => ({
    united_states: {
      blocks: [
        { x: 410, top: 438, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: copy.usYoy, size: 29, weight: 400, color: NOTE },
        ] },
        { x: 64, top: 599, anchor: 'start', lines: [{ text: copy.us, size: 40, weight: 800 }] },
      ],
    },
    international: {
      blocks: [
        { x: 410, top: 801, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: copy.internationalYoy, size: 29, weight: 400, color: NOTE },
        ] },
        { x: 64, top: 974, anchor: 'start', lines: [{ text: copy.international, size: 40, weight: 800 }] },
      ],
    },
    revenue: {
      blocks: [{ x: 877, top: 516, anchor: 'middle', lineGap: 9, lines: [
        { text: copy.revenue, size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: copy.revenueYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1345, top: 353, anchor: 'middle', lineGap: 9, lines: [
        { text: copy.grossProfit, size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: copy.grossMargin, size: 29, weight: 400, color: NOTE },
        { text: copy.grossYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1345, top: 1099, anchor: 'middle', lineGap: 8, lines: [
        { text: copy.costLine1, size: 36, weight: 800 },
        { text: copy.costLine2, size: 36, weight: 800 },
        { text: '$value', size: 36, weight: 400 },
      ] }],
    },
    operating_loss: {
      blocks: [{ x: 1628, top: 1176, anchor: 'middle', lineGap: 8, lines: [
        { text: copy.operatingLossLine1, size: 40, weight: 800 },
        { text: copy.operatingLossLine2, size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: copy.operatingMargin, size: 29, weight: 400, color: NOTE },
        { text: copy.operatingYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1814, top: 515, anchor: 'middle', lineGap: 5, lines: [
        { text: copy.opexLine1, size: 40, weight: 800 },
        { text: copy.opexLine2, size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
      ] }],
    },
    rnd: {
      blocks: [{ x: RIGHT_LABEL_X, top: 545, anchor: 'middle', lineGap: 8, lines: [
        { text: copy.rndLine1, size: 31, weight: 800 },
        { text: copy.rndLine2, size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
        { text: copy.rndShare, size: 29, weight: 400, color: NOTE },
        { text: copy.rndYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    sm: {
      blocks: [{ x: RIGHT_LABEL_X, top: 873, anchor: 'middle', lineGap: 8, lines: [
        { text: copy.smLine1, size: 31, weight: 800 },
        { text: copy.smLine2, size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
        { text: copy.smShare, size: 29, weight: 400, color: NOTE },
        { text: copy.smYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    ga: {
      blocks: [{ x: RIGHT_LABEL_X, top: 1138, anchor: 'middle', lineGap: 8, lines: [
        { text: copy.gaLine1, size: 31, weight: 800 },
        { text: copy.gaLine2, size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
        { text: copy.gaShare, size: 29, weight: 400, color: NOTE },
        { text: copy.gaYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
  });

  const labelsEn = labels({
    us: 'United States', usYoy: '+36% Y/Y', international: 'International', internationalYoy: '+43% Y/Y',
    revenue: 'Revenue', revenueYoy: '+40% Y/Y', grossProfit: 'Gross profit', grossMargin: '82% margin', grossYoy: '(10pp) Y/Y',
    costLine1: 'Cost of', costLine2: 'Revenue', operatingLossLine1: 'Operating', operatingLossLine2: 'loss', operatingMargin: '(64%) margin', operatingYoy: '(88pp) Y/Y',
    opexLine1: 'Operating', opexLine2: 'expenses', rndLine1: 'Research &', rndLine2: 'development', rndShare: '64% of revenue', rndYoy: '+37pp Y/Y',
    smLine1: 'Sales &', smLine2: 'marketing', smShare: '44% of revenue', smYoy: '+16pp Y/Y',
    gaLine1: 'General &', gaLine2: 'Admin', gaShare: '38% of revenue', gaYoy: '+24pp Y/Y',
  });
  const labelsZh = labels({
    us: '美国', usYoy: '同比 +36%', international: '国际', internationalYoy: '同比 +43%',
    revenue: '收入', revenueYoy: '同比 +40%', grossProfit: '毛利润', grossMargin: '利润率 82%', grossYoy: '同比 (10 个百分点)',
    costLine1: '收入', costLine2: '成本', operatingLossLine1: '营业', operatingLossLine2: '亏损', operatingMargin: '利润率 (64%)', operatingYoy: '同比 (88 个百分点)',
    opexLine1: '营业', opexLine2: '费用', rndLine1: '研究与', rndLine2: '开发', rndShare: '占收入 64%', rndYoy: '同比 +37 个百分点',
    smLine1: '销售与', smLine2: '营销', smShare: '占收入 44%', smYoy: '同比 +16 个百分点',
    gaLine1: '一般及', gaLine2: '行政', gaShare: '占收入 38%', gaYoy: '同比 +24 个百分点',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'figma-q4-fy25',
    name: 'Figma · Q4 FY25',
    company: 'Figma',
    meta: {
      company: 'Figma', title: 'Figma Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/figma-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 190, titleSize: 128, titleWeight: 800, titleTextLength: 2086,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 250, logoHeight: 250, logoY: 242, logoViewBox: '0 0 250 250', logoSvg: figmaLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: DARK, label: DARK_LABEL }, hub: { node: DARK, label: DARK_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: DARK_LINK, hub: DARK_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations({
      ndrGrowth: '+5pp Q/Q', customers: 'Customers', customer10kPrefix: '&gt; $10K ', customer10kGrowth: ' +32% Y/Y',
      customer100kPrefix: '&gt; $100K ', customer100kGrowth: ' +46% Y/Y', ndrFootnote: 'NDR = Net Dollar Retention',
    }),
    layout: {
      nodes: {
        united_states: { x: 375, y: 550, width: 71, height: 150 }, international: { x: 375, y: 912, width: 71, height: 174 },
        revenue: { x: 842, y: 665, width: 71, height: 324 }, gross_profit: { x: 1309, y: 543, width: 71, height: 266 },
        cost_of_revenue: { x: 1309, y: 1024, width: 71, height: 58 }, operating_loss: { x: 1592, y: 955, width: 71, height: 208 },
        operating_expenses: { x: 1777, y: 660, width: 71, height: 474 }, rnd: { x: 2243, y: 533, width: 71, height: 208 },
        sm: { x: 2243, y: 873, width: 71, height: 144 }, ga: { x: 2243, y: 1143, width: 71, height: 122 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 141, notes: ['+36% Y/Y'], color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 163, notes: ['+43% Y/Y'], color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 304, notes: ['+40% Y/Y'], color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 249, notes: ['82% margin', '(10pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'Revenue'], value: 54, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: 'Operating loss', value: -196, notes: ['(64%) margin', '(88pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 445, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'Research & development', value: 196, notes: ['64% of revenue', '+37pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'Sales & marketing', value: 134, notes: ['44% of revenue', '+16pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'General & Admin', value: 115, notes: ['38% of revenue', '+24pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 141, width: 150, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 163, width: 174, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 249, width: 266, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 54, width: 58, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 249, width: 266, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 196, width: 208, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 196, width: 208, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 134, width: 144, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 115, width: 122, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Figma · 2025 财年第四季度',
        meta: { title: 'Figma 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月 31 日的季度', titleSize: 112, titleTextLength: 1850 },
        annotationsSvg: annotations({
          ndrGrowth: '环比 +5点', customers: '客户', customerLineSize: 22, customerNumberDx: 4, customerGrowthDx: 3, customer10kPrefix: '&gt; $10K 客户 ', customer10kGrowth: '，同比 +32%',
          customer100kPrefix: '&gt; $100K 客户 ', customer100kGrowth: '，同比 +46%', ndrFootnote: 'NDR = 净美元留存率',
        }),
        nodes: {
          united_states: { label: '美国', notes: ['同比 +36%'] }, international: { label: '国际', notes: ['同比 +43%'] }, revenue: { label: '收入', notes: ['同比 +40%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 (10 个百分点)'] }, cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (64%)', '同比 (88 个百分点)'] }, operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 64%', '同比 +37 个百分点'] }, sm: { label: '销售与营销', notes: ['占收入 44%', '同比 +16 个百分点'] }, ga: { label: '一般及行政', notes: ['占收入 38%', '同比 +24 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
