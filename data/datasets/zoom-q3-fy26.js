/* ====================================================================
 * Zoom - Q3 FY26 income statement ($M)
 * Reconstructed from input/processed/zoom-q3-fy26.png as a fixed d3-sankey
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
    <g>
      ${kpiCard(18, 1116, 145, 168, ['RPO', '$4.0B', '+8% Y/Y'])}
      ${kpiCard(169, 1118, 141, 164, ['DBNE', '98%', 'TTM'])}
      ${kpiCard(317, 1119, 332, 164, ['Customers &gt; $100K', '+9% Y/Y to 4,363'])}
      ${kpiCard(656, 1119, 332, 164, ['Montly Churn', '2.7%', 'Flat Y/Y'])}
      <text x="76" y="1314" font-size="27" font-weight="500" fill="${NOTE}">RPO = Remaining Performance Obligation</text>
      <text x="126" y="1356" font-size="27" font-weight="500" fill="${NOTE}">DBNE = Dollar Based Net Expansion</text>
    </g>`;

  const annotationsZh = `
    <g>
      ${kpiCard(18, 1116, 145, 168, ['RPO', '$4.0B', '同比 +8%'])}
      ${kpiCard(169, 1118, 141, 164, ['DBNE', '98%', '近 12 个月'])}
      ${kpiCard(317, 1119, 332, 164, ['&gt;$100K 客户', '同比 +9% 至 4,363'])}
      ${kpiCard(656, 1119, 332, 164, ['月流失率', '2.7%', '同比持平'])}
      <text x="76" y="1314" font-size="27" font-weight="500" fill="${NOTE}">RPO = 剩余履约义务</text>
      <text x="126" y="1356" font-size="27" font-weight="500" fill="${NOTE}">DBNE = 美元口径净扩张率</text>
    </g>`;

  const labelsEn = {
    enterprise: labelGroup(
      label(382, 510, 'middle', [line('$value', 39), line('+6% Y/Y', 29, 400, NOTE)], 9),
      label(211, 673, 'middle', [line('Enterprise', 41, 800, BLUE_LABEL)])
    ),
    online: labelGroup(
      label(382, 868, 'middle', [line('$value', 39), line('+2% Y/Y', 29, 400, NOTE)], 9),
      label(211, 999, 'middle', [line('Online', 41, 800, BLUE_LABEL)])
    ),
    revenue: labelGroup(label(849, 541, 'middle', [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39), line('+4% Y/Y', 29, 400, NOTE)], 11)),
    gross_profit: labelGroup(label(1316, 423, 'middle', [line('Gross profit', 39, 800, GREEN_LABEL), line('$value', 39), line('78% margin', 29, 400, NOTE), line('+2pp Y/Y', 29, 400, NOTE)], 10)),
    operating_profit: labelGroup(label(1784, 322, 'middle', [line('Operating profit', 39, 800, GREEN_LABEL), line('$value', 39), line('25% margin', 29, 400, NOTE), line('+10pp Y/Y', 29, 400, NOTE)], 10)),
    investments: labelGroup(label(2114, 216, 'middle', [line('Investments', 33, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 9)),
    other: labelGroup(label(2126, 538, 'middle', [line('Other', 33, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 9)),
    net_profit: labelGroup(label(2312, 337, 'start', [line('Net profit', 39, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('50% margin', 29, 400, NOTE), line('+32pp Y/Y', 29, 400, NOTE)], 10)),
    cost_of_revenue: labelGroup(label(1316, 1098, 'middle', [line('Cost of', 34, 800, RED_LABEL), line('revenue', 34, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 9)),
    operating_expenses: labelGroup(label(1784, 951, 'middle', [line('Operating', 34, 800, RED_LABEL), line('expenses', 34, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 9)),
    tax: labelGroup(label(2408, 641, 'middle', [line('Tax', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8)),
    sm: labelGroup(label(2408, 825, 'middle', [line('S&M', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('28% of revenue', 29, 400, NOTE), line('(3pp) Y/Y', 29, 400, NOTE)], 8)),
    rnd: labelGroup(label(2408, 1032, 'middle', [line('R&D', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('17% of revenue', 29, 400, NOTE), line('(2pp) Y/Y', 29, 400, NOTE)], 8)),
    ga: labelGroup(label(2408, 1228, 'middle', [line('G&A', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('8% of revenue', 29, 400, NOTE), line('(3pp) Y/Y', 29, 400, NOTE)], 8)),
  };

  const labelsZh = {
    enterprise: labelGroup(
      label(382, 510, 'middle', [line('$value', 39), line('同比 +6%', 29, 400, NOTE)], 9),
      label(211, 673, 'middle', [line('企业', 41, 800, BLUE_LABEL)])
    ),
    online: labelGroup(
      label(382, 868, 'middle', [line('$value', 39), line('同比 +2%', 29, 400, NOTE)], 9),
      label(211, 999, 'middle', [line('线上', 41, 800, BLUE_LABEL)])
    ),
    revenue: labelGroup(label(849, 541, 'middle', [line('收入', 40, 800, BLUE_LABEL), line('$value', 39), line('同比 +4%', 29, 400, NOTE)], 11)),
    gross_profit: labelGroup(label(1316, 423, 'middle', [line('毛利润', 39, 800, GREEN_LABEL), line('$value', 39), line('利润率 78%', 29, 400, NOTE), line('同比 +2 个百分点', 29, 400, NOTE)], 10)),
    operating_profit: labelGroup(label(1784, 322, 'middle', [line('营业利润', 39, 800, GREEN_LABEL), line('$value', 39), line('利润率 25%', 29, 400, NOTE), line('同比 +10 个百分点', 29, 400, NOTE)], 10)),
    investments: labelGroup(label(2114, 216, 'middle', [line('投资', 33, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 9)),
    other: labelGroup(label(2126, 538, 'middle', [line('其他', 33, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 9)),
    net_profit: labelGroup(label(2312, 337, 'start', [line('净利润', 39, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 50%', 29, 400, NOTE), line('同比 +32 个百分点', 29, 400, NOTE)], 10)),
    cost_of_revenue: labelGroup(label(1316, 1098, 'middle', [line('收入', 34, 800, RED_LABEL), line('成本', 34, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 9)),
    operating_expenses: labelGroup(label(1784, 951, 'middle', [line('营业', 34, 800, RED_LABEL), line('费用', 34, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 9)),
    tax: labelGroup(label(2408, 641, 'middle', [line('税费', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8)),
    sm: labelGroup(label(2408, 825, 'middle', [line('销售与市场', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 28%', 29, 400, NOTE), line('同比 (3 个百分点)', 29, 400, NOTE)], 8)),
    rnd: labelGroup(label(2408, 1032, 'middle', [line('研发', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 17%', 29, 400, NOTE), line('同比 (2 个百分点)', 29, 400, NOTE)], 8)),
    ga: labelGroup(label(2408, 1228, 'middle', [line('管理费用', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 8%', 29, 400, NOTE), line('同比 (3 个百分点)', 29, 400, NOTE)], 8)),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'zoom-q3-fy26',
    name: 'Zoom · Q3 FY26',
    company: 'Zoom',
    meta: {
      company: 'Zoom',
      title: 'Zoom Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/zoom-q3-fy26.png', width: 2667, height: 1500 },
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
        <text x="203" y="112" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
          font-size="150" font-weight="800" letter-spacing="-4" textLength="456"
          lengthAdjust="spacingAndGlyphs" fill="#2d8cff">zoom</text>
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
      scale: 0.244,
      nodes: {
        enterprise: { x: 347, y: 608, width: 71, height: 180 },
        online: { x: 347, y: 965, width: 71, height: 118 },
        revenue: { x: 814, y: 690, width: 70, height: 300 },
        gross_profit: { x: 1281, y: 606, width: 71, height: 233 },
        cost_of_revenue: { x: 1281, y: 1018, width: 71, height: 64 },
        operating_profit: { x: 1749, y: 511, width: 70, height: 74 },
        operating_expenses: { x: 1749, y: 778, width: 70, height: 157 },
        investments: { x: 2079, y: 306, width: 70, height: 98 },
        other: { x: 2091, y: 506, width: 70, height: 17 },
        net_profit: { x: 2215, y: 325, width: 71, height: 149 },
        tax: { x: 2215, y: 655, width: 71, height: 43 },
        sm: { x: 2215, y: 819, width: 71, height: 81 },
        rnd: { x: 2215, y: 1049, width: 71, height: 49 },
        ga: { x: 2215, y: 1266, width: 71, height: 21 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'enterprise', col: 0, order: 0, type: 'source', label: 'Enterprise', value: 741 },
      { id: 'online', col: 0, order: 1, type: 'source', label: 'Online', value: 488 },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1230, valueText: '$1,230M' },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 958 },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 272 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 310 },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 648 },
      { id: 'investments', col: 4, order: 0, type: 'profit', label: 'Investments', value: 406 },
      { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 78 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 613 },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 182 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 343 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 210 },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 95 },
    ],
    links: [
      { source: 'enterprise', target: 'revenue', value: 741, sourceWidth: 180, targetWidth: 182, sourceOrder: 0, targetOrder: 0 },
      { source: 'online', target: 'revenue', value: 488, sourceWidth: 118, targetWidth: 118, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 958, sourceWidth: 235, targetWidth: 233, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 272, sourceWidth: 65, targetWidth: 64, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 310, sourceWidth: 75, targetWidth: 74, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 648, sourceWidth: 158, targetWidth: 157, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 128, sourceWidth: 31, targetWidth: 34, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 182, sourceWidth: 43, targetWidth: 43, sourceOrder: 1, targetOrder: 0 },
      { source: 'investments', target: 'net_profit', value: 406, width: 98, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 78, width: 17, sourceOrder: 0, targetOrder: 2 },
      { source: 'operating_expenses', target: 'sm', value: 343, sourceWidth: 83, targetWidth: 81, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 210, sourceWidth: 51, targetWidth: 49, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 95, sourceWidth: 23, targetWidth: 21, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Zoom · 2026 财年第三季度',
        meta: { title: 'Zoom 2026 财年第三季度利润表', period: '2026 财年第三季度', periodNote: '截至 2025 年 10 月', titleTextLength: 1770 },
        annotationsSvg: annotationsZh,
        nodes: {
          enterprise: { label: '企业', notes: ['同比 +6%'] },
          online: { label: '线上', notes: ['同比 +2%'] },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 78%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 25%', '同比 +10 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          investments: { label: '投资' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 50%', '同比 +32 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 28%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 17%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 (3 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
