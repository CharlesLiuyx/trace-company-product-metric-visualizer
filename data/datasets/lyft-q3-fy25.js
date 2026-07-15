/* Lyft Q3 FY25 income statement ($M), measured from the primary source. */
(function () {
  const TITLE = '#155077';
  const BLACK = '#000000';
  const PINK = '#ff00bf';
  const PINK_LINK = '#ea78d1';
  const GREEN = '#27a22a';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9ccc9a';
  const RED = '#d50000';
  const RED_LABEL = '#991500';
  const RED_LINK = '#df8082';
  const NOTE = '#6a6a6a';
  const RIGHT_LABEL_X = 2364;

  const lyftLogo = `
    <rect x="0" y="0" width="205" height="205" rx="43" fill="${PINK}"/>
    <text x="102.5" y="134" text-anchor="middle" font-family="Arial Rounded MT Bold,Arial,sans-serif" font-size="94" font-weight="900" fill="#fff" textLength="158" lengthAdjust="spacingAndGlyphs">lyft</text>`;

  const carIcon = `
    <g transform="translate(31 579)">
      <ellipse cx="138" cy="112" rx="138" ry="20" fill="#d8d8d8" opacity=".42"/>
      <path d="M21 82C45 39 106 20 175 26c38 4 70 25 91 60l16 19-8 12h-22c-3-22-18-36-39-36-20 0-35 14-39 36H89c-4-21-20-35-41-35-20 0-35 14-39 35H0v-16c0-9 8-16 21-19Z" fill="#f8f8f8"/>
      <path d="M54 50c29-20 92-24 130-11 19 6 35 21 46 43H61c-6-13-9-24-7-32Z" fill="#74129b"/>
      <circle cx="49" cy="118" r="23" fill="#20212f"/><circle cx="213" cy="118" r="24" fill="#20212f"/><circle cx="49" cy="118" r="13" fill="#c7c7c7"/><circle cx="213" cy="118" r="13" fill="#c7c7c7"/>
    </g>`;
  const phonesIcon = `
    <g transform="translate(91 907)">
      <g transform="rotate(-2)"><rect width="76" height="154" rx="12" fill="#1a1a1a"/><rect x="7" y="9" width="62" height="136" rx="7" fill="#f8f8f8"/><rect x="17" y="31" width="42" height="8" rx="3" fill="#fff"/><rect x="17" y="45" width="42" height="8" rx="3" fill="#fff"/><rect x="18" y="78" width="40" height="12" rx="6" fill="#8c35ee"/></g>
      <g transform="translate(87) rotate(4)"><rect width="86" height="163" rx="12" fill="#1b1b1b"/><rect x="8" y="9" width="70" height="145" rx="7" fill="#ecf4ee"/><path d="M12 34C34 20 51 53 73 42M10 74c19-16 36 15 63-3" fill="none" stroke="#80b77c" stroke-width="7"/><rect x="17" y="129" width="50" height="9" rx="4" fill="#fff"/></g>
    </g>`;
  const kpi = (x, width, title, value, note, titleSize = 30) => `
    <g><rect x="${x}" y="1202" width="${width}" height="147" rx="29" fill="#000"/>
      <text x="${x + width / 2}" y="1254" text-anchor="middle" font-size="${titleSize}" font-weight="800" fill="#fff">${title}</text>
      <text x="${x + width / 2}" y="1294" text-anchor="middle" font-size="28" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1326" text-anchor="middle" font-size="22" font-weight="500" fill="#fff">${note}</text></g>`;
  const opexAnnotationEn = `<g class="sankey-interactive-annotation" data-node="operating_expenses"><text x="1786" y="883" text-anchor="middle" font-size="40" font-weight="800" fill="${RED_LABEL}">Operating</text><text x="1786" y="934" text-anchor="middle" font-size="40" font-weight="800" fill="${RED_LABEL}">expenses</text><text x="1786" y="984" text-anchor="middle" font-size="39" font-weight="400" fill="${RED_LABEL}">($735M)</text></g>`;
  const opexAnnotationZh = `<g class="sankey-interactive-annotation" data-node="operating_expenses"><text x="1786" y="883" text-anchor="middle" font-size="40" font-weight="800" fill="${RED_LABEL}">运营</text><text x="1786" y="934" text-anchor="middle" font-size="40" font-weight="800" fill="${RED_LABEL}">费用</text><text x="1786" y="984" text-anchor="middle" font-size="39" font-weight="400" fill="${RED_LABEL}">($735M)</text></g>`;
  const otherAnnotationEn = `<g class="sankey-interactive-annotation" data-node="other"><text x="2126" y="466" text-anchor="middle" font-size="34" font-weight="800" fill="${GREEN_LABEL}">Other</text><text x="2126" y="505" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$26M</text></g>`;
  const otherAnnotationZh = `<g class="sankey-interactive-annotation" data-node="other"><text x="2126" y="466" text-anchor="middle" font-size="34" font-weight="800" fill="${GREEN_LABEL}">其他</text><text x="2126" y="505" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$26M</text></g>`;
  const annotationsEn = `<g>${carIcon}<text x="89" y="767" font-size="40" font-weight="800">Rideshare</text>${phonesIcon}<text x="112" y="1130" font-size="40" font-weight="800">Rentals</text>${kpi(31, 309, 'Active Riders', '28.7M', '+18% Y/Y')}${kpi(353, 169, 'Ride', '249M', '+15% Y/Y')}${kpi(536, 332, 'Gross Bookings', '$4.8B', '+16% Y/Y', 29)}${opexAnnotationEn}${otherAnnotationEn}</g>`;
  const annotationsZh = `<g>${carIcon}<text x="112" y="767" font-size="40" font-weight="800">网约车</text>${phonesIcon}<text x="112" y="1130" font-size="40" font-weight="800">租赁</text>${kpi(31, 309, '活跃乘客', '28.7M', '同比 +18%')}${kpi(353, 169, '行程', '249M', '同比 +15%')}${kpi(536, 332, '总预订额', '$4.8B', '同比 +16%', 29)}${opexAnnotationZh}${otherAnnotationZh}</g>`;

  const labels = {
    rideshare: { blocks: [{ x: 385, top: 415, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    rentals: { blocks: [{ x: 385, top: 1010, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+3% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    revenue: { blocks: [{ x: 853, top: 507, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1317, top: 320, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '45% margin', size: 29, weight: 400, color: NOTE }, { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1317, top: 1150, anchor: 'middle', lineGap: 9, lines: [{ text: 'Cost of', size: 38, weight: 800 }, { text: 'revenue', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1786, top: 243, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '1% margin', size: 29, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: 2127, top: 203, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 34, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    other: { blocks: [] },
    net_profit: { blocks: [{ x: 2454, top: 289, anchor: 'middle', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '3% margin', size: 29, weight: 400, color: NOTE }, { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    interest: { blocks: [{ x: 2454, top: 524, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 34, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    operating_expenses: { blocks: [] }, tax_expense: { blocks: [] },
    ga: { blocks: [{ x: 2319, top: 630, anchor: 'start', lineGap: 9, lines: [{ text: 'General & admin', size: 32, weight: 800 }, { text: '$value', size: 32, weight: 400 }, { text: '15% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    sm: { blocks: [{ x: 2305, top: 829, anchor: 'start', lineGap: 9, lines: [{ text: 'Sales & marketing', size: 32, weight: 800 }, { text: '$value', size: 32, weight: 400 }, { text: '14% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    operations_support: { blocks: [{ x: 2351, top: 997, anchor: 'start', lineGap: 9, lines: [{ text: 'Operations', size: 32, weight: 800 }, { text: '& support', size: 32, weight: 800 }, { text: '$value', size: 32, weight: 400 }, { text: '8% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2366, top: 1207, anchor: 'start', lineGap: 9, lines: [{ text: 'R&D', size: 32, weight: 800 }, { text: '$value', size: 32, weight: 400 }, { text: '7% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
  };
  const labelsZh = JSON.parse(JSON.stringify(labels));
  labelsZh.rideshare.blocks[0].lines[1].text = '同比 +11%';
  labelsZh.rentals.blocks[0].lines[1].text = '同比 +3%';
  labelsZh.revenue.blocks[0].lines[0].text = '收入';
  labelsZh.revenue.blocks[0].lines[2].text = '同比 +11%';
  labelsZh.gross_profit.blocks[0].lines[0].text = '毛利润';
  labelsZh.gross_profit.blocks[0].lines[2].text = '利润率 45%';
  labelsZh.gross_profit.blocks[0].lines[3].text = '同比 +3 个百分点';
  labelsZh.cost_of_revenue.blocks[0].lines[0].text = '收入';
  labelsZh.cost_of_revenue.blocks[0].lines[1].text = '成本';
  labelsZh.operating_profit.blocks[0].lines[0].text = '营业利润';
  labelsZh.operating_profit.blocks[0].lines[2].text = '利润率 1%';
  labelsZh.operating_profit.blocks[0].lines[3].text = '同比 +2 个百分点';
  labelsZh.tax.blocks[0].lines[0].text = '税费';
  labelsZh.net_profit.blocks[0].lines[0].text = '净利润';
  labelsZh.net_profit.blocks[0].lines[2].text = '利润率 3%';
  labelsZh.net_profit.blocks[0].lines[3].text = '同比 +4 个百分点';
  labelsZh.interest.blocks[0].lines[0].text = '利息';
  labelsZh.ga.blocks[0].lines[0].text = '管理费用';
  labelsZh.ga.blocks[0].lines[2].text = '占收入 15%';
  labelsZh.ga.blocks[0].lines[3].text = '同比 (2 个百分点)';
  labelsZh.sm.blocks[0].lines[0].text = '销售与市场';
  labelsZh.sm.blocks[0].lines[2].text = '占收入 14%';
  labelsZh.sm.blocks[0].lines[3].text = '同比 +0 个百分点';
  labelsZh.operations_support.blocks[0].lines[0].text = '运营';
  labelsZh.operations_support.blocks[0].lines[1].text = '与支持';
  labelsZh.operations_support.blocks[0].lines[3].text = '占收入 8%';
  labelsZh.operations_support.blocks[0].lines[4].text = '同比 +0 个百分点';
  labelsZh.rnd.blocks[0].lines[0].text = '研发';
  labelsZh.rnd.blocks[0].lines[2].text = '占收入 7%';
  labelsZh.rnd.blocks[0].lines[3].text = '同比 (0 个百分点)';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lyft-q3-fy25', name: 'Lyft · Q3 FY25', company: 'Lyft',
    meta: { company: 'Lyft', title: 'Lyft Q3 FY25 Income Statement', period: '', periodNote: '', currency: '$', unit: 'M', decimals: 0, referenceImage: { src: 'input/processed/lyft-q3-fy25.png', width: 2667, height: 1500 }, titleX: 1334, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 1755, logoWidth: 205, logoHeight: 205, logoY: 258, logoViewBox: '0 0 205 205', logoSvg: lyftLogo },
    render: { width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, palette: { source: { node: PINK, label: BLACK }, hub: { node: PINK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } }, linkTint: { source: PINK_LINK, hub: PINK_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 39, note: 29, lineGap: 9 }, interfaceAudit: { mode: 'error' } },
    annotationsSvg: annotationsEn,
    layout: { scale: 0.223, nodes: {
      rideshare: { x: 350, y: 505, width: 71, height: 345 }, rentals: { x: 350, y: 1102, width: 71, height: 31 }, revenue: { x: 817, y: 648, width: 71, height: 376 }, gross_profit: { x: 1282, y: 503, width: 71, height: 169 }, cost_of_revenue: { x: 1282, y: 925, width: 71, height: 207 }, operating_profit: { x: 1751, y: 422, width: 72, height: 6 }, operating_expenses: { x: 1751, y: 667, width: 72, height: 165 }, tax: { x: 2091, y: 295, width: 72, height: 5 }, other: { x: 2090, y: 410, width: 72, height: 1 }, tax_expense: { x: 1, y: 1, width: 1, height: 1 }, net_profit: { x: 2217, y: 342, width: 72, height: 12 }, interest: { x: 2217, y: 557, width: 72, height: 3 }, ga: { x: 2217, y: 642, width: 72, height: 56 }, sm: { x: 2217, y: 842, width: 72, height: 54 }, operations_support: { x: 2217, y: 1041, width: 72, height: 29 }, rnd: { x: 2217, y: 1222, width: 72, height: 25 }, }, labels },
    nodes: [
      { id: 'rideshare', col: 0, order: 0, type: 'source', label: 'Rideshare', value: 1546, valueText: '$1,546M', notes: ['+11% Y/Y'], color: PINK, labelColor: BLACK, linkTint: PINK_LINK }, { id: 'rentals', col: 0, order: 1, type: 'source', label: 'Rentals', value: 139, valueText: '$139M', notes: ['+3% Y/Y'], color: PINK, labelColor: BLACK, linkTint: PINK_LINK }, { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1685, valueText: '$1,685M', notes: ['+11% Y/Y'], color: PINK, labelColor: BLACK, linkTint: PINK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 758, valueText: '$758M', notes: ['45% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK }, { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 927, valueText: '($927M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 23, valueText: '$23M', notes: ['1% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK }, { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 735, valueText: '($735M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 0, type: 'profit', label: 'Tax', value: 2, valueText: '$2M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK }, { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 26, valueText: '$26M', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK }, { id: 'tax_expense', col: 4, order: 2, type: 'cost', label: 'Tax expense', value: 0, valueText: '($0M)', color: '#f2f2f2', labelColor: '#f2f2f2', linkTint: RED_LINK }, { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 46, valueText: '$46M', notes: ['3% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK }, { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 5, valueText: '($5M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'General & admin', value: 251, valueText: '($251M)', notes: ['15% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK }, { id: 'sm', col: 5, order: 3, type: 'cost', label: 'Sales & marketing', value: 243, valueText: '($243M)', notes: ['14% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK }, { id: 'operations_support', col: 5, order: 4, type: 'cost', label: ['Operations', '& support'], value: 131, valueText: '($131M)', notes: ['8% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK }, { id: 'rnd', col: 5, order: 5, type: 'cost', label: 'R&D', value: 110, valueText: '($110M)', notes: ['7% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'rideshare', target: 'revenue', value: 1546, width: 345, sourceOrder: 0, targetOrder: 0 }, { source: 'rentals', target: 'revenue', value: 139, width: 31, sourceOrder: 0, targetOrder: 1 }, { source: 'revenue', target: 'gross_profit', value: 758, width: 169, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'revenue', target: 'cost_of_revenue', value: 927, width: 207, sourceOrder: 1, targetOrder: 0 }, { source: 'gross_profit', target: 'operating_profit', value: 23, width: 5, targetWidth: 4, y1: 426, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 735, width: 164, targetWidth: 165, sourceOrder: 1, targetOrder: 0 }, { source: 'operating_profit', target: 'net_profit', value: 18, width: 4, sourceWidth: 2, y0: 425, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'operating_profit', target: 'interest', value: 5, width: 2, y0: 427, sourceOrder: 1, targetOrder: 0 }, { source: 'tax', target: 'net_profit', value: 2, width: 5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK }, { source: 'other', target: 'net_profit', value: 26, width: 7, sourceWidth: 1, targetWidth: 3, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK }, { source: 'operating_expenses', target: 'ga', value: 251, width: 56, sourceWidth: 56, sourceOrder: 0, targetOrder: 0 }, { source: 'operating_expenses', target: 'sm', value: 243, width: 54, sourceWidth: 54, sourceOrder: 1, targetOrder: 0 }, { source: 'operating_expenses', target: 'operations_support', value: 131, width: 29, sourceWidth: 29, sourceOrder: 2, targetOrder: 0 }, { source: 'operating_expenses', target: 'rnd', value: 110, width: 25, sourceWidth: 26, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: { zh: { name: 'Lyft · 2025 财年第三季度', meta: { title: 'Lyft 2025 财年第三季度利润表', period: '', periodNote: '', titleSize: 112, titleTextLength: 1360 }, annotationsSvg: annotationsZh, nodes: { rideshare: { label: '网约车', notes: ['同比 +11%'] }, rentals: { label: '租赁', notes: ['同比 +3%'] }, revenue: { label: '收入', notes: ['同比 +11%'] }, gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +3 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 +2 个百分点'] }, operating_expenses: { label: ['运营', '费用'] }, tax: { label: '税费' }, other: { label: '其他' }, tax_expense: { label: '税费' }, net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +4 个百分点'] }, interest: { label: '利息' }, ga: { label: '管理费用', notes: ['占收入 15%', '同比 (2 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 14%', '同比 +0 个百分点'] }, operations_support: { label: ['运营', '与支持'], notes: ['占收入 8%', '同比 +0 个百分点'] }, rnd: { label: '研发', notes: ['占收入 7%', '同比 (0 个百分点)'] } }, layout: { labels: labelsZh } } },
  });
})();
