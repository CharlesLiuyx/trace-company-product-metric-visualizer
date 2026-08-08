/* ServiceNow Q2 FY26 income statement ($B), reconstructed from the Source. */
(function () {
  const DARK = '#293e40';
  const DARK_LABEL = '#283e40';
  const TEAL = '#80b6a1';
  const TEAL_LINK = '#bfd7cd';
  const GRAY_LINK = '#97a1a2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_X = 2434;

  const kpiCard = (x, width, title, value, note, rx = 28) => `
    <g>
      <rect x="${x}" y="1147" width="${width}" height="169" rx="${rx}" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1199" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">${title}</text>
      <text x="${x + width / 2}" y="1242" text-anchor="middle" font-size="30" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1287" text-anchor="middle" font-size="28" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'service-now-q2-fy26',
    name: 'ServiceNow - Q2 FY26',
    company: 'ServiceNow',
    meta: {
      company: 'ServiceNow',
      title: 'ServiceNow Q2 FY26 Income Statement',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/service-now-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 196, titleSize: 132, titleWeight: 700, titleTextLength: 2460,
      logoWidth: 800, logoHeight: 142, logoY: 268, logoViewBox: '0 0 800 142',
      logoSvg: `
        <text x="0" y="107" font-family="Arial,Helvetica,sans-serif" font-size="108" font-weight="800" fill="${DARK_LABEL}">service</text>
        <text x="365" y="107" font-family="Arial,Helvetica,sans-serif" font-size="108" font-weight="800" fill="${DARK_LABEL}">n</text>
        <circle cx="478" cy="77" r="34" fill="none" stroke="${TEAL}" stroke-width="23"/>
        <text x="516" y="107" font-family="Arial,Helvetica,sans-serif" font-size="108" font-weight="800" fill="${DARK_LABEL}">w</text>`,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: '#155077',
      interfaceAudit: { mode: 'error' },
      subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK_LABEL }, hub: { node: DARK, label: DARK_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
    },
    annotationsSvg: `
      <g font-family="Montserrat,Arial,sans-serif">
        ${kpiCard(39, 146, 'cRPO', '$13.2B', '+21% Y/Y', 30)}
        ${kpiCard(201, 325, 'Renewal rate', '98%', 'Flat Y/Y', 26)}
        ${kpiCard(542, 377, 'Customers &gt; $5M', '658', '+23% Y/Y', 26)}
        <text x="98" y="1351" font-size="29" font-weight="500" fill="${NOTE}">cRPO = Current Remaining Performance Obligation</text>
      </g>`,
    layout: {
      scale: 95,
      nodes: {
        subscription: { x: 370, y: 502, width: 73, height: 385 },
        professional_services: { x: 370, y: 1069, width: 73, height: 13 },
        revenue: { x: 837, y: 595, width: 73, height: 395 },
        gross_profit: { x: 1304, y: 502, width: 73, height: 280 },
        cost_of_revenue: { x: 1304, y: 954, width: 73, height: 118 },
        operating_profit: { x: 1772, y: 433, width: 73, height: 18 },
        operating_expenses: { x: 1772, y: 607, width: 73, height: 265 },
        other: { x: 2107, y: 398, width: 73, height: 30 },
        net_profit: { x: 2238, y: 358, width: 73, height: 31 },
        tax: { x: 2238, y: 550, width: 73, height: 15 },
        sm: { x: 2238, y: 687, width: 73, height: 137 },
        rnd: { x: 2238, y: 941, width: 73, height: 92 },
        ga: { x: 2238, y: 1164, width: 73, height: 39 },
      },
      labels: {
        subscription: { blocks: [
          { x: 406, top: 407, anchor: 'middle', lineGap: 12, lines: [
            { text: '$value', size: 41, weight: 400 }, { text: '+25% Y/Y', size: 30, weight: 400, color: NOTE },
          ] },
          { x: 206, top: 659, anchor: 'middle', lineGap: 12, lines: [
            { text: 'Subscription', size: 41, weight: 800 }, { text: '73% gross margin', size: 30, weight: 400, color: NOTE },
          ] },
        ] },
        professional_services: { blocks: [
          { x: 409, top: 975, anchor: 'middle', lineGap: 12, lines: [
            { text: '$value', size: 39, weight: 400, color: TEAL }, { text: '+8% Y/Y', size: 30, weight: 400, color: NOTE },
          ] },
          { x: 207, top: 1002, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Professional', size: 39, weight: 800, color: TEAL },
            { text: 'services', size: 39, weight: 800, color: TEAL },
            { text: '(26%) gross margin', size: 30, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [{ x: 873, top: 443, anchor: 'middle', lineGap: 13, lines: [
          { text: 'Revenue', size: 41, weight: 800 }, { text: '$value', size: 41, weight: 400 },
          { text: '+24% Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1342, top: 315, anchor: 'middle', lineGap: 11, lines: [
          { text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 },
          { text: '71% margin', size: 30, weight: 400, color: NOTE }, { text: '(7pp) Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1341, top: 1092, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1806, top: 249, anchor: 'middle', lineGap: 11, lines: [
          { text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 },
          { text: '4% margin', size: 30, weight: 400, color: NOTE }, { text: '(7pp) Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1806, top: 892, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
        ] }] },
        other: { blocks: [{ x: 2146, top: 443, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Other', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2435, top: 310, anchor: 'middle', lineGap: 11, lines: [
          { text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 },
          { text: '7% margin', size: 30, weight: 400, color: NOTE }, { text: '(5pp) Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2434, top: 527, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Tax', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 },
        ] }] },
        sm: { blocks: [{ x: RIGHT_X, top: 702, anchor: 'middle', lineGap: 9, lines: [
          { text: 'S&M', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '34% of revenue', size: 30, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
        rnd: { blocks: [{ x: RIGHT_X, top: 945, anchor: 'middle', lineGap: 9, lines: [
          { text: 'R&D', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '23% of revenue', size: 30, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
        ga: { blocks: [{ x: RIGHT_X, top: 1154, anchor: 'middle', lineGap: 9, lines: [
          { text: 'G&A', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '9% of revenue', size: 30, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
      },
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 3.9, color: DARK, labelColor: DARK_LABEL, linkTint: GRAY_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: ['Professional', 'services'], value: 0.1, color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 4.0, valueText: '$4.0B', color: DARK, labelColor: DARK_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 3.9, width: 384 },
      { source: 'professional_services', target: 'revenue', value: 0.1, width: 11 },
      { source: 'revenue', target: 'gross_profit', value: 2.8, width: 279 },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.2, width: 116 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.2, width: 17 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.7, width: 263 },
      { source: 'operating_profit', target: 'net_profit', value: 0.1, width: 2, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, width: 15, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.3, width: 29, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 1.4, width: 137, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, width: 91, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, width: 37, sourceOrder: 2 },
    ],
    i18n: { zh: {
      name: 'ServiceNow · 2026 财年第二季度',
      meta: { title: 'ServiceNow 2026 财年第二季度利润表' },
      nodes: {
        subscription: { label: '订阅' }, professional_services: { label: '专业服务' }, revenue: { label: '收入' },
        gross_profit: { label: '毛利润' }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润' },
        operating_expenses: { label: '运营费用' }, other: { label: '其他' }, net_profit: { label: '净利润' },
        tax: { label: '税费' }, sm: { label: '销售与市场' }, rnd: { label: '研发' }, ga: { label: '管理费用' },
      },
    } },
  });
})();
