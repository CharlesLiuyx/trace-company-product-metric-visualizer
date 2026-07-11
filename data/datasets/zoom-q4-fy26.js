/* ====================================================================
 * Zoom - Q4 FY26 income statement ($M)
 * Reconstructed from input/processed/zoom-q4-fy26.png as a fixed d3-sankey
 * layout with pure SVG annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#2d8cff';
  const BLUE_LABEL = '#1464da';
  const BLUE_LINK = '#99c4f7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_LABEL_X = 2374;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const label = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const labelGroup = (...blocks) => ({ blocks });
  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="36" fill="${BLUE}"/>
      ${lines.map((item, index) => `
        <text x="${x + width / 2}" y="${y + 48 + index * 40}" text-anchor="middle"
          font-size="30" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${item}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(18, 1116, 145, 168, ['RPO', '$4.2B', '+10% Y/Y'])}
      ${kpiCard(169, 1118, 141, 164, ['DBNE', '98%', 'TTM'])}
      ${kpiCard(317, 1119, 332, 164, ['Customers &gt; $100K', '+9% Y/Y to 4,468'])}
      ${kpiCard(656, 1119, 332, 164, ['Montly Churn', '2.9%', '+0.1pp Y/Y'])}
      <text x="76" y="1314" font-size="27" font-weight="500" fill="${NOTE}">RPO = Remaining Performance Obligation</text>
      <text x="126" y="1356" font-size="27" font-weight="500" fill="${NOTE}">DBNE = Dollar Based Net Expansion</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(18, 1116, 145, 168, ['RPO', '$4.2B', '同比 +10%'])}
      ${kpiCard(169, 1118, 141, 164, ['DBNE', '98%', '过去 12 个月'])}
      ${kpiCard(317, 1119, 332, 164, ['&gt;$100K 客户', '同比 +9% 至 4,468'])}
      ${kpiCard(656, 1119, 332, 164, ['月流失率', '2.9%', '同比 +0.1 个百分点'])}
      <text x="76" y="1314" font-size="27" font-weight="500" fill="${NOTE}">RPO = 剩余履约义务</text>
      <text x="126" y="1356" font-size="27" font-weight="500" fill="${NOTE}">DBNE = 美元口径净扩张率</text>
    </g>`;

  const labelsEn = {
    enterprise: labelGroup(
      label(382, 510, 'middle', [line('$value', 39), line('+7% Y/Y', 29, 400, NOTE)], 9),
      label(211, 666, 'middle', [line('Enterprise', 41, 800, BLUE_LABEL)])
    ),
    online: labelGroup(
      label(382, 881, 'middle', [line('$value', 39), line('+3% Y/Y', 29, 400, NOTE)], 9),
      label(211, 1004, 'middle', [line('Online', 41, 800, BLUE_LABEL)])
    ),
    revenue: labelGroup(label(849, 555, 'middle', [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39), line('+5% Y/Y', 29, 400, NOTE)], 11)),
    gross_profit: labelGroup(label(1316, 423, 'middle', [line('Gross profit', 39, 800, GREEN_LABEL), line('$value', 39), line('76% margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)], 10)),
    operating_profit: labelGroup(label(1781, 321, 'middle', [line('Operating profit', 39, 800, GREEN_LABEL), line('$value', 39), line('20% margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)], 10)),
    investments: labelGroup(label(2116, 221, 'middle', [line('Investments', 33, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 9)),
    other: labelGroup(label(2119, 565, 'middle', [line('Other', 33, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 9)),
    net_profit: labelGroup(label(2314, 329, 'start', [line('Net profit', 39, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('54% margin', 29, 400, NOTE), line('+23pp Y/Y', 29, 400, NOTE)], 10)),
    cost_of_revenue: labelGroup(label(1316, 1098, 'middle', [line('Cost of', 34, 800, RED_LABEL), line('revenue', 34, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 9)),
    operating_expenses: labelGroup(label(1782, 930, 'middle', [line('Operating', 34, 800, RED_LABEL), line('expenses', 34, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 9)),
    tax: labelGroup(label(RIGHT_LABEL_X, 690, 'start', [line('Tax', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8)),
    sm: labelGroup(label(RIGHT_LABEL_X, 824, 'start', [line('S&M', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('29% of revenue', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)], 8)),
    rnd: labelGroup(label(RIGHT_LABEL_X, 1025, 'start', [line('R&D', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('18% of revenue', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)], 8)),
    ga: labelGroup(label(RIGHT_LABEL_X, 1226, 'start', [line('G&A', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('10% of revenue', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)], 8)),
  };

  const labelsZh = {
    enterprise: labelGroup(
      label(382, 510, 'middle', [line('$value', 39), line('同比 +7%', 29, 400, NOTE)], 9),
      label(211, 666, 'middle', [line('企业', 41, 800, BLUE_LABEL)])
    ),
    online: labelGroup(
      label(382, 881, 'middle', [line('$value', 39), line('同比 +3%', 29, 400, NOTE)], 9),
      label(211, 1004, 'middle', [line('线上', 41, 800, BLUE_LABEL)])
    ),
    revenue: labelGroup(label(849, 555, 'middle', [line('收入', 40, 800, BLUE_LABEL), line('$value', 39), line('同比 +5%', 29, 400, NOTE)], 11)),
    gross_profit: labelGroup(label(1316, 423, 'middle', [line('毛利润', 39, 800, GREEN_LABEL), line('$value', 39), line('利润率 76%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)], 10)),
    operating_profit: labelGroup(label(1781, 321, 'middle', [line('营业利润', 39, 800, GREEN_LABEL), line('$value', 39), line('利润率 20%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)], 10)),
    investments: labelGroup(label(2116, 221, 'middle', [line('投资', 33, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 9)),
    other: labelGroup(label(2119, 565, 'middle', [line('其他', 33, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 9)),
    net_profit: labelGroup(label(2314, 329, 'start', [line('净利润', 39, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 54%', 29, 400, NOTE), line('同比 +23 个百分点', 29, 400, NOTE)], 10)),
    cost_of_revenue: labelGroup(label(1316, 1098, 'middle', [line('收入', 34, 800, RED_LABEL), line('成本', 34, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 9)),
    operating_expenses: labelGroup(label(1782, 930, 'middle', [line('营业', 34, 800, RED_LABEL), line('费用', 34, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 9)),
    tax: labelGroup(label(RIGHT_LABEL_X, 690, 'start', [line('税费', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8)),
    sm: labelGroup(label(RIGHT_LABEL_X, 824, 'start', [line('销售与市场', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 29%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)], 8)),
    rnd: labelGroup(label(RIGHT_LABEL_X, 1025, 'start', [line('研发', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 18%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)], 8)),
    ga: labelGroup(label(RIGHT_LABEL_X, 1226, 'start', [line('管理费用', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 10%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)], 8)),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'zoom-q4-fy26',
    name: 'Zoom · Q4 FY26',
    company: 'Zoom',
    meta: {
      company: 'Zoom',
      title: 'Zoom Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/zoom-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2245,
      periodX: 190,
      periodY: 310,
      periodNoteY: 352,
      logoWidth: 460,
      logoHeight: 150,
      logoY: 282,
      logoViewBox: '0 0 460 150',
      logoSvg: `
        <text x="230" y="100" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
          font-size="124" font-weight="800" letter-spacing="-7" fill="#2d8cff">zoom</text>
      `,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 0.222,
      nodes: {
        enterprise: { x: 345, y: 600, width: 72, height: 168 },
        online: { x: 345, y: 967, width: 72, height: 109 },
        revenue: { x: 813, y: 695, width: 72, height: 276 },
        gross_profit: { x: 1280, y: 602, width: 72, height: 211 },
        cost_of_revenue: { x: 1280, y: 1008, width: 72, height: 66 },
        operating_profit: { x: 1746, y: 503, width: 71, height: 55 },
        operating_expenses: { x: 1746, y: 751, width: 73, height: 156 },
        investments: { x: 2080, y: 305, width: 72, height: 118 },
        other: { x: 2082, y: 529, width: 73, height: 18 },
        net_profit: { x: 2214, y: 331, width: 72, height: 149 },
        tax: { x: 2214, y: 703, width: 72, height: 42 },
        sm: { x: 2214, y: 852, width: 72, height: 80 },
        rnd: { x: 2214, y: 1057, width: 72, height: 50 },
        ga: { x: 2214, y: 1241, width: 72, height: 26 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'enterprise', col: 0, order: 0, type: 'source', label: 'Enterprise', value: 757, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'online', col: 0, order: 1, type: 'source', label: 'Online', value: 490, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1247, valueText: '$1,247M', color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 951, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 296, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 250, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 701, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'investments', col: 4, order: 0, type: 'profit', label: 'Investments', value: 532, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 81, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 674, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 190, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 360, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 223, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 119, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'enterprise', target: 'revenue', value: 757, width: 168, sourceOrder: 0, targetOrder: 0 },
      { source: 'online', target: 'revenue', value: 490, width: 109, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 951, width: 211, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 296, width: 66, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 250, width: 55, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 701, width: 156, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 60, width: 13, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 190, width: 42, sourceOrder: 1, targetOrder: 0 },
      { source: 'investments', target: 'net_profit', value: 532, width: 118, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 81, width: 18, sourceOrder: 0, targetOrder: 2 },
      { source: 'operating_expenses', target: 'sm', value: 360, width: 80, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 223, width: 50, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 119, width: 26, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Zoom · 2026 财年第四季度',
        meta: { title: 'Zoom 2026 财年第四季度利润表', period: '2026 财年第四季度', periodNote: '截至 2026 年 1 月', titleTextLength: 1770 },
        annotationsSvg: annotationsZh,
        nodes: {
          enterprise: { label: '企业', notes: ['同比 +7%'] },
          online: { label: '线上', notes: ['同比 +3%'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 +1 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          investments: { label: '投资' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 54%', '同比 +23 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 29%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 18%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 +1 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
