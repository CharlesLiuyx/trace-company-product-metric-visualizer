/* ====================================================================
 * Lenovo - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/lenovo-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#6b6c6e';
  const PURPLE = '#7a126b';
  const PURPLE_LINK = '#bc8db4';
  const ORANGE = '#f26a52';
  const ORANGE_LINK = '#f2b4aa';
  const BLUE = '#3045ad';
  const BLUE_LINK = '#9ba5d3';
  const HUB = '#000000';
  const HUB_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2408;

  const annotations = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="689" y="394" font-family="Arial Black,Arial,sans-serif" font-size="152" font-weight="900" textLength="526" lengthAdjust="spacingAndGlyphs" fill="#e60012" data-typography-role="brand">Lenovo</text>
      <g fill="${NOTE}" font-weight="700">
        <text x="2464" y="255" text-anchor="middle" font-size="42">Q2 FY26</text>
        <text x="2464" y="302" text-anchor="middle" font-size="30" font-weight="500">Ending Oct. 2025</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lenovo-q2-fy26',
    name: 'Lenovo · Q2 FY26',
    company: 'Lenovo',
    meta: {
      company: 'Lenovo',
      title: 'Lenovo Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/lenovo-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2178,
      hidePeriodStamp: true,
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
        source: { node: PURPLE, label: PURPLE },
        hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: PURPLE_LINK,
        hub: HUB_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 9 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 18.8,
      nodes: {
        idg: { x: 397, y: 491, width: 71, height: 281 },
        isg: { x: 397, y: 975, width: 71, height: 75 },
        ssg: { x: 397, y: 1218, width: 71, height: 46 },
        gross_revenue: { x: 771, y: 565, width: 70, height: 406 },
        revenue: { x: 1145, y: 671, width: 70, height: 382 },
        eliminations: { x: 1145, y: 1224, width: 70, height: 21 },
        gross_profit: { x: 1518, y: 563, width: 71, height: 58 },
        cost_of_revenue: { x: 1518, y: 817, width: 71, height: 323 },
        operating_profit: { x: 1892, y: 480, width: 71, height: 10 },
        operating_expenses: { x: 1892, y: 674, width: 71, height: 43 },
        net_profit: { x: 2265, y: 386, width: 71, height: 5 },
        financial: { x: 2265, y: 610, width: 71, height: 5 },
        tax: { x: 2265, y: 702, width: 71, height: 5 },
        selling_distribution: { x: 2265, y: 835, width: 71, height: 21 },
        administrative: { x: 2265, y: 1011, width: 71, height: 18 },
        rnd: { x: 2265, y: 1180, width: 71, height: 14 },
        other: { x: 2265, y: 1339, width: 71, height: 5 },
      },
      labels: {
        idg: { blocks: [
          { x: 375, top: 501, anchor: 'end', lineGap: 10, lines: [
            { text: 'IDG', size: 40, weight: 800 }, { text: 'Intelligent', size: 40, weight: 800 },
            { text: 'Devices', size: 40, weight: 800 }, { text: 'Group', size: 40, weight: 800 },
          ] },
          { x: 451, top: 391, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 189, top: 711, anchor: 'middle', lines: [{ text: '7% operating margin', size: 28, weight: 400, color: NOTE }] },
        ] },
        isg: { blocks: [
          { x: 374, top: 846, anchor: 'end', lineGap: 10, lines: [
            { text: 'ISG', size: 40, weight: 800 }, { text: 'Infrastructure', size: 40, weight: 800 },
            { text: 'Solutions', size: 40, weight: 800 }, { text: 'Group', size: 40, weight: 800 },
          ] },
          { x: 452, top: 847, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '+24% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 191, top: 1063, anchor: 'middle', lines: [{ text: '(1%) operating margin', size: 28, weight: 400, color: NOTE }] },
        ] },
        ssg: { blocks: [
          { x: 371, top: 1117, anchor: 'end', lineGap: 10, lines: [
            { text: 'SSG', size: 40, weight: 800 }, { text: 'Solutions &', size: 40, weight: 800 },
            { text: 'Services', size: 40, weight: 800 }, { text: 'Group', size: 40, weight: 800 },
          ] },
          { x: 449, top: 1117, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '+18% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 193, top: 1325, anchor: 'middle', lines: [{ text: '22% operating margin', size: 28, weight: 400, color: NOTE }] },
        ] },
        gross_revenue: { blocks: [] },
        revenue: { blocks: [{ x: 1155, top: 534, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
          { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        eliminations: { blocks: [{ x: 1180, top: 1257, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Eliminations', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 },
        ] }] },
        gross_profit: { blocks: [{ x: 1572, top: 383, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
          { text: '15% margin', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1557, top: 1155, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Cost of', size: 34, weight: 800 }, { text: 'revenue', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1927, top: 299, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
          { text: '3% margin', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1927, top: 732, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating', size: 34, weight: 800 }, { text: 'expenses', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2385, top: 318, anchor: 'start', lineGap: 9, lines: [
          { text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
          { text: '2% margin', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        financial: { blocks: [{ x: 2403, top: 558, anchor: 'start', lineGap: 8, lines: [
          { text: 'Financial', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
        tax: { blocks: [{ x: 2421, top: 650, anchor: 'start', lineGap: 8, lines: [
          { text: 'Tax', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
        selling_distribution: { blocks: [{ x: 2403, top: 836, anchor: 'start', lineGap: 8, lines: [
          { text: 'Selling &', size: 31, weight: 800 }, { text: 'Distribution', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '5% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        administrative: { blocks: [{ x: 2382, top: 1013, anchor: 'start', lineGap: 8, lines: [
          { text: 'Administrative', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '4% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        rnd: { blocks: [{ x: 2396, top: 1176, anchor: 'start', lineGap: 8, lines: [
          { text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '3% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        other: { blocks: [{ x: 2418, top: 1315, anchor: 'start', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
        ] }] },
      },
    },

    nodes: [
      { id: 'idg', col: 0, order: 0, type: 'source', label: ['IDG', 'Intelligent', 'Devices', 'Group'], value: 15.1, color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'isg', col: 0, order: 1, type: 'source', label: ['ISG', 'Infrastructure', 'Solutions', 'Group'], value: 4.1, color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'ssg', col: 0, order: 2, type: 'source', label: ['SSG', 'Solutions &', 'Services', 'Group'], value: 2.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: 'Gross revenue', value: 21.8, color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 20.5, color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -1.3, valueText: '($1.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 17.3, valueText: '($17.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.5, valueText: '($2.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'financial', col: 5, order: 1, type: 'cost', label: 'Financial', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling_distribution', col: 5, order: 3, type: 'cost', label: ['Selling &', 'Distribution'], value: 1.1, valueText: '($1.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'administrative', col: 5, order: 4, type: 'cost', label: 'Administrative', value: 0.8, valueText: '($0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 5, type: 'cost', label: 'R&D', value: 0.6, valueText: '($0.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 6, type: 'cost', label: 'Other', value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'idg', target: 'gross_revenue', value: 15.1, width: 281, targetOrder: 0, linkTint: { left: PURPLE_LINK, right: PURPLE_LINK } },
      { source: 'isg', target: 'gross_revenue', value: 4.1, width: 75, targetOrder: 1, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'ssg', target: 'gross_revenue', value: 2.6, sourceWidth: 46, targetWidth: 50, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'gross_revenue', target: 'revenue', value: 20.5, width: 382, sourceOrder: 0, targetOrder: 0, linkTint: { left: HUB_LINK, right: HUB_LINK } },
      { source: 'gross_revenue', target: 'eliminations', value: 1.3, sourceWidth: 24, targetWidth: 21, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 3.1, width: 58, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 17.3, width: 323, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.6, width: 10, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.5, sourceWidth: 48, targetWidth: 43, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, sourceWidth: 6, targetWidth: 5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.1, sourceWidth: 2, targetWidth: 5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 2, targetWidth: 5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'selling_distribution', value: 1.1, sourceWidth: 17, targetWidth: 21, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'administrative', value: 0.8, sourceWidth: 12, targetWidth: 18, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.6, sourceWidth: 9, targetWidth: 14, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other', value: 0.2, sourceWidth: 5, targetWidth: 5, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Lenovo · 2026 财年第二季度',
        meta: { title: 'Lenovo 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2025 年 10 月' },
        nodes: {
          idg: { label: 'IDG 智能设备集团' }, isg: { label: 'ISG 基础设施方案集团' }, ssg: { label: 'SSG 方案与服务集团' },
          gross_revenue: { label: '总收入' }, revenue: { label: '收入' }, eliminations: { label: '抵销' }, gross_profit: { label: '毛利润' },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润' }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润' }, financial: { label: '财务' }, tax: { label: '税费' }, selling_distribution: { label: '销售与分销' },
          administrative: { label: '行政' }, rnd: { label: '研发' }, other: { label: '其他' },
        },
        layout: {
          labels: {
            idg: { blocks: [
              { x: 375, top: 501, anchor: 'end', lineGap: 10, lines: [{ text: 'IDG' }, { text: '智能设备' }, { text: '集团' }] },
              { x: 451, top: 391, anchor: 'middle', lineGap: 10, lines: [{ text: '$value' }, { text: '同比 +12%' }] },
              { x: 189, top: 711, anchor: 'middle', lines: [{ text: '营业利润率 7%' }] },
            ] },
            isg: { blocks: [
              { x: 374, top: 846, anchor: 'end', lineGap: 10, lines: [{ text: 'ISG' }, { text: '基础设施方案' }, { text: '集团' }] },
              { x: 452, top: 847, anchor: 'middle', lineGap: 10, lines: [{ text: '$value' }, { text: '同比 +24%' }] },
              { x: 191, top: 1063, anchor: 'middle', lines: [{ text: '营业利润率 (1%)' }] },
            ] },
            ssg: { blocks: [
              { x: 371, top: 1117, anchor: 'end', lineGap: 10, lines: [{ text: 'SSG' }, { text: '方案与服务' }, { text: '集团' }] },
              { x: 449, top: 1117, anchor: 'middle', lineGap: 10, lines: [{ text: '$value' }, { text: '同比 +18%' }] },
              { x: 193, top: 1325, anchor: 'middle', lines: [{ text: '营业利润率 22%' }] },
            ] },
            revenue: { blocks: [{ x: 1180, top: 522, anchor: 'middle', lineGap: 10, lines: [{ text: '收入' }, { text: '$value' }, { text: '同比 +15%' }] }] },
            eliminations: { blocks: [{ x: 1180, top: 1269, anchor: 'middle', lineGap: 9, lines: [{ text: '抵销' }, { text: '$value' }] }] },
            gross_profit: { blocks: [{ x: 1554, top: 374, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润' }, { text: '$value' }, { text: '利润率 15%' }, { text: '同比 (0 个百分点)' }] }] },
            cost_of_revenue: { blocks: [{ x: 1553, top: 1142, anchor: 'middle', lineGap: 9, lines: [{ text: '收入' }, { text: '成本' }, { text: '$value' }] }] },
            operating_profit: { blocks: [{ x: 1927, top: 292, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润' }, { text: '$value' }, { text: '利润率 3%' }, { text: '同比 (1 个百分点)' }] }] },
            operating_expenses: { blocks: [{ x: 1927, top: 741, anchor: 'middle', lineGap: 9, lines: [{ text: '运营费用' }, { text: '$value' }] }] },
            net_profit: { blocks: [{ x: 2385, top: 306, anchor: 'start', lineGap: 9, lines: [{ text: '净利润' }, { text: '$value' }, { text: '利润率 2%' }, { text: '同比 (0 个百分点)' }] }] },
            financial: { blocks: [{ x: 2403, top: 558, anchor: 'start', lineGap: 8, lines: [{ text: '财务' }, { text: '$value' }] }] },
            tax: { blocks: [{ x: 2421, top: 650, anchor: 'start', lineGap: 8, lines: [{ text: '税费' }, { text: '$value' }] }] },
            selling_distribution: { blocks: [{ x: 2403, top: 844, anchor: 'start', lineGap: 8, lines: [{ text: '销售与分销' }, { text: '$value' }, { text: '占收入 5%' }, { text: '同比 (0 个百分点)' }] }] },
            administrative: { blocks: [{ x: 2382, top: 1020, anchor: 'start', lineGap: 8, lines: [{ text: '行政' }, { text: '$value' }, { text: '占收入 4%' }, { text: '同比 (0 个百分点)' }] }] },
            rnd: { blocks: [{ x: 2396, top: 1176, anchor: 'start', lineGap: 8, lines: [{ text: '研发' }, { text: '$value' }, { text: '占收入 3%' }, { text: '同比 (0 个百分点)' }] }] },
            other: { blocks: [{ x: 2418, top: 1315, anchor: 'start', lineGap: 8, lines: [{ text: '其他' }, { text: '$value' }] }] },
          },
        },
      },
    },
  });
})();
