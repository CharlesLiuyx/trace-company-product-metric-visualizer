/* ====================================================================
 * Broadcom - Q1 FY23 income statement ($B)
 * Reconstructed from input/processed/broadcom-q1-fy23.png as a fixed
 * d3-sankey layout with pure SVG branding.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const label = (x, top, anchor, lines, lineGap = 8, semanticRole) => ({
    x,
    top,
    anchor,
    lineGap,
    lines,
    ...(semanticRole ? { semanticRole } : {}),
  });
  const labelGroup = (...blocks) => ({ blocks });

  const labelsEn = {
    semiconductor_solutions: labelGroup(
      label(402, 507, 'middle', [line('$value', 39), line('+9% Y/Y', 29, 400, NOTE)], 9),
      label(203, 688, 'middle', [line('Semiconductor', 40, 800), line('solutions', 40, 800)], 9)
    ),
    infrastructure_software: labelGroup(
      label(402, 1015, 'middle', [line('$value', 39), line('+3% Y/Y', 29, 400, NOTE)], 9),
      label(202, 1107, 'middle', [line('Infrastructure', 40, 800), line('software', 40, 800)], 9)
    ),
    revenue: labelGroup(
      label(869, 580, 'middle', [line('Revenue', 40, 800), line('$value', 39), line('+8% Y/Y', 29, 400, NOTE)], 11)
    ),
    gross_profit: labelGroup(
      label(1329, 419, 'middle', [
        line('Gross profit', 39, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line('55% margin', 29, 400, NOTE),
        line('(3pp) Y/Y', 29, 400, NOTE),
      ], 10)
    ),
    cost_of_revenue: labelGroup(
      label(1332, 1174, 'middle', [
        line('Cost of', 34, 800, RED_LABEL),
        line('revenue', 34, 800, RED_LABEL),
        line('$value', 33, 400, RED_LABEL),
      ], 9)
    ),
    operating_profit: labelGroup(
      label(1794, 322, 'middle', [
        line('Operating profit', 39, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line('43% margin', 29, 400, NOTE),
        line('+1pp Y/Y', 29, 400, NOTE),
      ], 10)
    ),
    operating_expenses: labelGroup(
      label(1794, 933, 'middle', [
        line('Operating', 34, 800, RED_LABEL),
        line('Expenses', 34, 800, RED_LABEL),
        line('$value', 33, 400, RED_LABEL),
      ], 9)
    ),
    net_profit: labelGroup(
      label(2333, 374, 'start', [
        line('Net profit', 39, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line('38% margin', 29, 400, NOTE),
        line('+6pp Y/Y', 29, 400, NOTE),
      ], 10)
    ),
    tax: labelGroup(
      label(2428, 605, 'middle', [
        line('Tax', 32, 800, RED_LABEL),
        line('$value', 31, 400, RED_LABEL),
      ], 8)
    ),
    other_expense: labelGroup(
      label(2436, 740, 'middle', [
        line('Other', 32, 800, RED_LABEL),
        line('$value', 31, 400, RED_LABEL),
      ], 8)
    ),
    rnd: labelGroup(
      label(2440, 869, 'middle', [
        line('R&D', 32, 800, RED_LABEL),
        line('$value', 31, 400, RED_LABEL),
        line('14% of revenue', 29, 400, NOTE),
        line('(1pp) Y/Y', 29, 400, NOTE),
      ], 8)
    ),
    sga: labelGroup(
      label(2445, 1050, 'middle', [
        line('SG&A', 32, 800, RED_LABEL),
        line('$value', 31, 400, RED_LABEL),
        line('5% of revenue', 29, 400, NOTE),
        line('+0pp Y/Y', 29, 400, NOTE),
      ], 8)
    ),
    other_opex: labelGroup(
      label(2444, 1233, 'middle', [
        line('Other', 32, 800, RED_LABEL),
        line('$value', 31, 400, RED_LABEL),
        line('4% of revenue', 29, 400, NOTE),
      ], 8)
    ),
  };

  const labelsZh = {
    semiconductor_solutions: labelGroup(
      label(402, 507, 'middle', [line('$value', 39), line('同比 +9%', 29, 400, NOTE)], 9),
      label(203, 688, 'middle', [line('半导体', 40, 800), line('解决方案', 40, 800)], 9)
    ),
    infrastructure_software: labelGroup(
      label(402, 1015, 'middle', [line('$value', 39), line('同比 +3%', 29, 400, NOTE)], 9),
      label(202, 1107, 'middle', [line('基础设施', 40, 800), line('软件', 40, 800)], 9)
    ),
    revenue: labelGroup(
      label(869, 580, 'middle', [line('收入', 40, 800), line('$value', 39), line('同比 +8%', 29, 400, NOTE)], 11)
    ),
    gross_profit: labelGroup(
      label(1329, 419, 'middle', [
        line('毛利润', 39, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line('利润率 55%', 29, 400, NOTE),
        line('同比 (3 个百分点)', 29, 400, NOTE),
      ], 10)
    ),
    cost_of_revenue: labelGroup(
      label(1332, 1174, 'middle', [line('收入', 34, 800, RED_LABEL), line('成本', 34, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 9)
    ),
    operating_profit: labelGroup(
      label(1794, 322, 'middle', [
        line('营业利润', 39, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line('利润率 43%', 29, 400, NOTE),
        line('同比 +1 个百分点', 29, 400, NOTE),
      ], 10)
    ),
    operating_expenses: labelGroup(
      label(1794, 933, 'middle', [line('营业', 34, 800, RED_LABEL), line('费用', 34, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 9)
    ),
    net_profit: labelGroup(
      label(2333, 374, 'start', [
        line('净利润', 39, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line('利润率 38%', 29, 400, NOTE),
        line('同比 +6 个百分点', 29, 400, NOTE),
      ], 10)
    ),
    tax: labelGroup(
      label(2428, 605, 'middle', [line('税费', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8)
    ),
    other_expense: labelGroup(
      label(2436, 740, 'middle', [line('其他', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 8)
    ),
    rnd: labelGroup(
      label(2440, 869, 'middle', [
        line('研发', 32, 800, RED_LABEL),
        line('$value', 31, 400, RED_LABEL),
        line('占收入 14%', 29, 400, NOTE),
        line('同比 (1 个百分点)', 29, 400, NOTE),
      ], 8)
    ),
    sga: labelGroup(
      label(2445, 1050, 'middle', [
        line('销售、一般及', 30, 800, RED_LABEL),
        line('管理费用', 30, 800, RED_LABEL),
        line('$value', 31, 400, RED_LABEL),
        line('占收入 5%', 29, 400, NOTE),
        line('同比 +0 个百分点', 29, 400, NOTE),
      ], 7)
    ),
    other_opex: labelGroup(
      label(2444, 1233, 'middle', [
        line('其他', 32, 800, RED_LABEL),
        line('$value', 31, 400, RED_LABEL),
        line('占收入 4%', 29, 400, NOTE),
      ], 8)
    ),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'broadcom-q1-fy23',
    name: 'Broadcom · Q1 FY23',
    company: 'Broadcom',
    meta: {
      company: 'Broadcom',
      title: 'Broadcom Q1 FY23 Income Statement',
      period: 'Q1 FY23',
      periodNote: 'Ending Apr. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/broadcom-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2352,
      periodX: 400,
      periodY: 1331,
      periodNoteY: 1375,
      logoWidth: 660,
      logoHeight: 300,
      logoY: 273,
      logoViewBox: '0 0 660 300',
      logoSvg: `
        <text x="320" y="70" text-anchor="middle" font-family="Arial,sans-serif"
          font-size="94" font-weight="800" letter-spacing="-5" textLength="594"
          lengthAdjust="spacingAndGlyphs" fill="#000000">BROADCOM</text>
        <text x="625" y="18" font-family="Arial,sans-serif" font-size="18"
          font-weight="700" fill="#000000">®</text>
        <g transform="translate(-7,-9)">
          <circle cx="330" cy="210" r="95" fill="#cc092f"/>
          <path d="M239 210 C260 194 278 194 294 210 C312 228 318 232 330 143
            C342 232 348 228 366 210 C382 194 400 194 421 210"
            fill="none" stroke="#ffffff" stroke-width="16" stroke-linecap="round"
            stroke-linejoin="round"/>
        </g>
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
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 34,
      nodes: {
        semiconductor_solutions: { x: 367, y: 618, width: 71, height: 231 },
        infrastructure_software: { x: 367, y: 1127, width: 71, height: 64 },
        revenue: { x: 834, y: 738, width: 70, height: 297 },
        gross_profit: { x: 1293, y: 602, width: 72, height: 207 },
        cost_of_revenue: { x: 1303, y: 1062, width: 72, height: 88 },
        operating_profit: { x: 1759, y: 505, width: 70, height: 136 },
        operating_expenses: { x: 1761, y: 839, width: 70, height: 70 },
        net_profit: { x: 2235, y: 374, width: 71, height: 118 },
        tax: { x: 2235, y: 632, width: 71, height: 9 },
        other_expense: { x: 2235, y: 773, width: 71, height: 6 },
        rnd: { x: 2235, y: 926, width: 71, height: 42 },
        sga: { x: 2235, y: 1090, width: 71, height: 13 },
        other_opex: { x: 2235, y: 1245, width: 71, height: 10 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'semiconductor_solutions', col: 0, order: 0, type: 'source', label: ['Semiconductor', 'solutions'], value: 6.8, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'infrastructure_software', col: 0, order: 1, type: 'source', label: ['Infrastructure', 'software'], value: 1.9, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.7, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4.0, valueText: '$4.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 2.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 3.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'semiconductor_solutions', target: 'revenue', value: 6.8, sourceWidth: 231, targetWidth: 233, y0: 733.5, y1: 854.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'infrastructure_software', target: 'revenue', value: 1.9, sourceWidth: 64, targetWidth: 64, y0: 1159, y1: 1003, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 6.1, sourceWidth: 209, targetWidth: 207, y0: 842.5, y1: 705.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.6, sourceWidth: 88, targetWidth: 88, y0: 991, y1: 1106, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 4.0, sourceWidth: 137, targetWidth: 136, y0: 670.5, y1: 573, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.1, sourceWidth: 70, targetWidth: 70, y0: 774, y1: 874, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 3.5, sourceWidth: 121, targetWidth: 118, y0: 565.5, y1: 433, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 9, targetWidth: 9, y0: 630.5, y1: 636.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 0.3, sourceWidth: 6, targetWidth: 6, y0: 638, y1: 776, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.3, sourceWidth: 45, targetWidth: 42, y0: 861.5, y1: 947, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 0.4, sourceWidth: 14, targetWidth: 13, y0: 891, y1: 1096.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.4, sourceWidth: 11, targetWidth: 10, y0: 903.5, y1: 1250, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '博通 · 2023 财年第一季度',
        meta: {
          title: '博通 2023 财年第一季度利润表',
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 4 月',
          titleTextLength: 1780,
        },
        nodes: {
          semiconductor_solutions: { label: ['半导体', '解决方案'], notes: ['同比 +9%'] },
          infrastructure_software: { label: ['基础设施', '软件'], notes: ['同比 +3%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 43%', '同比 +1 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 38%', '同比 +6 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          sga: { label: '销售、一般及管理费用', notes: ['占收入 5%', '同比 +0 个百分点'] },
          other_opex: { label: '其他', notes: ['占收入 4%'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
