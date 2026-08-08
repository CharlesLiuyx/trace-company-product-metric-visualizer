/* ====================================================================
 * SAP - Q2 FY26 income statement (€B)
 * Reconstructed from input/processed/sap-q2-fy26.png as a fixed
 * d3-sankey layout with a pure SVG SAP logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const NAVY = '#35495f';
  const NAVY_LINK = '#9da6af';
  const BLUE = '#1a68c0';
  const BLUE_LINK = '#91b4db';
  const CYAN = '#02afeb';
  const CYAN_LINK = '#86d3ee';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g transform="translate(1010 253)" data-typography-role="brand">
        <defs>
          <linearGradient id="sap-q2-fy26-logo-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#00b7f0"/>
            <stop offset="0.55" stop-color="#01adeb"/>
            <stop offset="1" stop-color="#1a68c0"/>
          </linearGradient>
        </defs>
        <path d="M0 0H340L172 168H0Z" fill="url(#sap-q2-fy26-logo-gradient)"/>
        <path d="M0 84H256L172 168H0Z" fill="#1a68c0" opacity="0.68"/>
        <text x="18" y="134" transform="skewX(-8)" font-family="Arial Black,Arial,sans-serif" font-size="116" font-weight="900" textLength="236" lengthAdjust="spacingAndGlyphs" fill="#ffffff">SAP</text>
        <text x="210" y="168" font-family="Arial,Helvetica,sans-serif" font-size="31" font-weight="700" fill="#1a68c0">&#174;</text>
      </g>
      <g fill="${NOTE}" font-size="25" font-weight="400">
        <text x="73" y="1301">SaaS = Software as a Service</text>
        <text x="73" y="1330">PaaS = Platform as a Service</text>
        <text x="73" y="1360">IaaS = Infrastructure as a Service</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sap-q2-fy26',
    name: 'SAP · Q2 FY26',
    company: 'SAP',
    meta: {
      company: 'SAP',
      title: 'SAP Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/sap-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1958,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 38, note: 28, lineGap: 9 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 32.22,
      nodes: {
        saas_paas: { x: 364, y: 409, width: 71, height: 200 },
        iaas: { x: 364, y: 749, width: 71, height: 3 },
        software_licenses: { x: 364, y: 942, width: 71, height: 3 },
        software_support: { x: 364, y: 1102, width: 71, height: 78 },
        cloud: { x: 738, y: 521, width: 70, height: 203 },
        licenses_support: { x: 738, y: 966, width: 70, height: 83 },
        services: { x: 738, y: 1252, width: 70, height: 32 },
        revenue: { x: 1112, y: 624, width: 70, height: 319 },
        gross_profit: { x: 1485, y: 519, width: 71, height: 233 },
        cost_of_revenue: { x: 1485, y: 966, width: 71, height: 84 },
        operating_profit: { x: 1859, y: 438, width: 71, height: 84 },
        operating_expenses: { x: 1859, y: 699, width: 71, height: 147 },
        other_income: { x: 2122, y: 453, width: 70, height: 10 },
        net_profit: { x: 2232, y: 337, width: 71, height: 70 },
        tax: { x: 2232, y: 616, width: 71, height: 23 },
        sm: { x: 2232, y: 733, width: 71, height: 74 },
        rnd: { x: 2232, y: 958, width: 71, height: 58 },
        ga: { x: 2232, y: 1182, width: 71, height: 12 },
      },
      labels: {
        saas_paas: { blocks: [
          { x: 399, top: 321, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 38, weight: 400, color: NAVY },
            { text: '+23% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 336, top: 489, anchor: 'end', lines: [{ text: 'Saas/Paas', size: 30, weight: 800, textLength: 166, color: NAVY }] },
        ] },
        iaas: { blocks: [
          { x: 399, top: 661, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 38, weight: 400, color: NAVY },
            { text: '(24%) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 349, top: 730, anchor: 'end', lines: [{ text: 'Iaas', size: 30, weight: 800, textLength: 95, color: NAVY }] },
        ] },
        software_licenses: { blocks: [
          { x: 399, top: 849, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 38, weight: 400, color: BLUE },
            { text: '(32%) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 349, top: 902, anchor: 'end', lineGap: 8, lines: [
            { text: 'Software', size: 30, weight: 800, textLength: 169, color: BLUE },
            { text: 'Licenses', size: 30, weight: 800, textLength: 169, color: BLUE },
          ] },
        ] },
        software_support: { blocks: [
          { x: 399, top: 1010, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 38, weight: 400, color: BLUE },
            { text: '(8%) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 327, top: 1099, anchor: 'end', lineGap: 8, lines: [
            { text: 'Software', size: 31, weight: 800, textLength: 147, color: BLUE },
            { text: 'Support', size: 31, weight: 800, textLength: 147, color: BLUE },
          ] },
        ] },
        cloud: { blocks: [{ x: 773, top: 379, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Cloud', size: 40, weight: 800, color: NAVY },
          { text: '$value', size: 38, weight: 400, color: NAVY },
          { text: '+22% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        licenses_support: { blocks: [{ x: 773, top: 769, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Licenses', size: 39, weight: 800, color: BLUE },
          { text: '& Support', size: 39, weight: 800, color: BLUE },
          { text: '$value', size: 38, weight: 400, color: BLUE },
          { text: '(8%) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        services: { blocks: [
          { x: 773, top: 1159, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 38, weight: 400, color: CYAN },
            { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 709, top: 1248, anchor: 'end', lines: [{ text: 'Services', size: 39, weight: 800, color: CYAN }] },
        ] },
        revenue: { blocks: [{ x: 1147, top: 483, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 40, weight: 800, color: NAVY },
          { text: '$value', size: 38, weight: 400, color: NAVY },
          { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1520, top: 335, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 39, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          { text: '73% margin', size: 28, weight: 400, color: NOTE },
          { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1520, top: 1071, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 35, weight: 800, color: RED_LABEL },
          { text: 'revenue', size: 35, weight: 800, color: RED_LABEL },
          { text: '$value', size: 33, weight: 400, color: RED_LABEL },
        ] }] },
        operating_profit: { blocks: [{ x: 1895, top: 256, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 39, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          { text: '27% margin', size: 28, weight: 400, color: NOTE },
          { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1895, top: 869, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 35, weight: 800, color: RED_LABEL },
          { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
          { text: '$value', size: 33, weight: 400, color: RED_LABEL },
        ] }] },
        other_income: { blocks: [{ x: 2157, top: 482, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2330, top: 326, anchor: 'start', lineGap: 9, lines: [
          { text: 'Net profit', size: 39, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          { text: '22% margin', size: 28, weight: 400, color: NOTE },
          { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2424, top: 588, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 30, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ] }] },
        sm: { blocks: [{ x: 2330, top: 749, anchor: 'start', lineGap: 8, lines: [
          { text: 'S&M (€2.3B)', size: 30, weight: 800, color: RED_LABEL },
          { text: '23% of revenue', size: 27, weight: 400, color: NOTE },
          { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE },
        ] }] },
        rnd: { blocks: [{ x: 2330, top: 970, anchor: 'start', lineGap: 8, lines: [
          { text: 'R&D (€1.8B)', size: 30, weight: 800, color: RED_LABEL },
          { text: '19% of revenue', size: 27, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE },
        ] }] },
        ga: { blocks: [{ x: 2330, top: 1175, anchor: 'start', lineGap: 8, lines: [
          { text: 'G&A (€0.4B)', size: 30, weight: 800, color: RED_LABEL },
          { text: '4% of revenue', size: 27, weight: 400, color: NOTE },
          { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE },
        ] }] },
      },
    },

    nodes: [
      { id: 'saas_paas', col: 0, order: 0, type: 'source', label: 'Saas/Paas', value: 6.2, valueText: '€6.2B', notes: ['+23% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'iaas', col: 0, order: 1, type: 'source', label: 'Iaas', value: 0.1, valueText: '€0.1B', notes: ['(24%) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'software_licenses', col: 0, order: 2, type: 'source', label: ['Software', 'Licenses'], value: 0.1, valueText: '€0.1B', notes: ['(32%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'software_support', col: 0, order: 3, type: 'source', label: ['Software', 'Support'], value: 2.6, valueText: '€2.6B', notes: ['(8%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'cloud', col: 1, order: 0, type: 'source', label: 'Cloud', value: 6.3, valueText: '€6.3B', notes: ['+22% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'licenses_support', col: 1, order: 1, type: 'source', label: ['Licenses', '& Support'], value: 2.6, valueText: '€2.6B', notes: ['(8%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 1.0, valueText: '€1.0B', notes: ['(4%) Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 9.9, valueText: '€9.9B', notes: ['+9% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.2, valueText: '€7.2B', notes: ['73% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.7, valueText: '(€2.7B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.6, valueText: '€2.6B', notes: ['27% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.6, valueText: '(€4.6B)' },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.4, valueText: '€0.4B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.2, valueText: '€2.2B', notes: ['22% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.8, valueText: '(€0.8B)' },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: 'S&M', value: 2.3, valueText: '(€2.3B)', notes: ['23% of revenue', '(0pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 1.8, valueText: '(€1.8B)', notes: ['19% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.4, valueText: '(€0.4B)', notes: ['4% of revenue', '(0pp) Y/Y'] },
    ],

    links: [
      { source: 'saas_paas', target: 'cloud', value: 6.2, sourceWidth: 200, targetWidth: 200, y0: 509, y1: 621, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'iaas', target: 'cloud', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 750.5, y1: 722.5, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'software_licenses', target: 'licenses_support', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 943.5, y1: 967.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'software_support', target: 'licenses_support', value: 2.6, sourceWidth: 78, targetWidth: 80, y0: 1141, y1: 1009, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'cloud', target: 'revenue', value: 6.3, sourceWidth: 203, targetWidth: 204, y0: 622.5, y1: 726, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'licenses_support', target: 'revenue', value: 2.6, sourceWidth: 83, targetWidth: 84, y0: 1007.5, y1: 870, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'services', target: 'revenue', value: 1.0, sourceWidth: 32, targetWidth: 31, y0: 1268, y1: 927.5, sourceOrder: 0, targetOrder: 2, linkTint: CYAN_LINK },
      { source: 'revenue', target: 'gross_profit', value: 7.2, sourceWidth: 235, targetWidth: 233, y0: 741.5, y1: 635.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.7, sourceWidth: 84, targetWidth: 84, y0: 901, y1: 1008, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.6, sourceWidth: 84, targetWidth: 84, y0: 561, y1: 480, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.6, sourceWidth: 148, targetWidth: 147, y0: 678, y1: 772.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 60, targetWidth: 60, y0: 468, y1: 367, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.8, sourceWidth: 24, targetWidth: 23, y0: 510, y1: 627.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.4, sourceWidth: 10, targetWidth: 10, y0: 458, y1: 402, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 2.3, sourceWidth: 74, targetWidth: 74, y0: 736, y1: 770, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.8, sourceWidth: 59, targetWidth: 58, y0: 803.5, y1: 987, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 12, targetWidth: 12, y0: 840, y1: 1188, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],

    i18n: {
      zh: {
        name: 'SAP · 2026 财年第二季度',
        meta: { title: 'SAP 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月' },
        nodes: {
          saas_paas: { label: 'SaaS/PaaS', notes: ['同比 +23%'] },
          iaas: { label: 'IaaS', notes: ['同比 (24%)'] },
          software_licenses: { label: '软件许可证', notes: ['同比 (32%)'] },
          software_support: { label: '软件支持', notes: ['同比 (8%)'] },
          cloud: { label: '云', notes: ['同比 +22%'] },
          licenses_support: { label: '许可证与支持', notes: ['同比 (8%)'] },
          services: { label: '服务', notes: ['同比 (4%)'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 22%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 23%', '同比 (0 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 19%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 4%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: {
            software_licenses: {
              blocks: [
                {
                  x: 399, top: 849, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLUE },
                    { text: '同比 (32%)', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 349, top: 902, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '软件', size: 30, weight: 800, color: BLUE },
                    { text: '许可证', size: 30, weight: 800, color: BLUE },
                  ],
                },
              ],
            },
            software_support: {
              blocks: [
                {
                  x: 399, top: 1010, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLUE },
                    { text: '同比 (8%)', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 327, top: 1099, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '软件', size: 31, weight: 800, color: BLUE },
                    { text: '支持', size: 31, weight: 800, color: BLUE },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();
