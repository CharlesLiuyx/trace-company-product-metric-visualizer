/* ====================================================================
 * Live Nation - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/live-nation-q2-fy26.png as a fixed
 * d3-sankey layout. The source-visible unlabeled segment aggregation face
 * is preserved as segment_total before the labeled Revenue node.
 * Validated company and concert-brand raster assets are reused.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
  const BLACK = '#000000';
  const TITLE = '#155077';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY_LINK = '#858585';
  const NOTE = '#666666';
  const RIGHT_X = 2462;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight == null ? 400 : options.weight,
    ...(options.color ? { color: options.color } : {}),
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}),
    lines,
  });

  const otherIncomeGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2208"
      data-link-anchor-y="384">
      <path d="M2154 413H2207C2247 413 2244 353 2264 353"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2190" y="465" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他收入' : 'Other'}</text>
      <text x="2190" y="502" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$0.1B</text>
    </g>`;

  const labelsEn = {
    concerts: { blocks: [
      block(431, 439, [line('$value', 39), line('+8% Y/Y', 29, { color: NOTE })]),
      block(359, 557, [line('Concerts', 40, { weight: 800 }), line('5% adjusted margin', 28, { color: NOTE })], { anchor: 'end', lineGap: 10 }),
    ] },
    ticketing: { blocks: [
      block(431, 953, [line('$value', 39), line('+15% Y/Y', 29, { color: NOTE })]),
      block(369, 1025, [line('Ticketing', 40, { weight: 800 }), line('39% adjusted margin', 28, { color: NOTE })], { anchor: 'end', lineGap: 10, semanticRole: 'centered-side-label' }),
    ] },
    sponsorship: { blocks: [
      block(431, 1143, [line('$value', 39), line('+12% Y/Y', 29, { color: NOTE })]),
      block(369, 1198, [line('Sponsorship', 40, { weight: 800 }), line('67% adjusted margin', 28, { color: NOTE })], { anchor: 'end', lineGap: 10, semanticRole: 'centered-side-label' }),
    ] },
    segment_total: { blocks: [] },
    revenue: { blocks: [
      block(1179, 539, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+9% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    eliminations: { blocks: [
      block(1179, 1271, [line('Eliminations', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 10 }),
    ] },
    gross_profit: { blocks: [
      block(1552, 424, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('25% margin', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    direct_operating_expenses: { blocks: [
      block(1552, 1215, [line('Direct operating', 36, { weight: 800, color: RED_LABEL }), line('expenses', 36, { weight: 800, color: RED_LABEL }), line('$value', 35, { color: RED_LABEL })], { lineGap: 9 }),
    ] },
    operating_profit: { blocks: [
      block(1926, 309, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('7% margin', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    operating_expenses: { blocks: [
      block(1926, 818, [line('Other', 38, { weight: 800, color: RED_LABEL }), line('operating', 38, { weight: 800, color: RED_LABEL }), line('expenses', 38, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 7 }),
    ] },
    other_income: { blocks: [] },
    net_profit: { blocks: [
      block(RIGHT_X, 294, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('5% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    tax: { blocks: [
      block(RIGHT_X, 548, [line('Tax', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 8, semanticRole: 'centered-side-label' }),
    ] },
    interest: { blocks: [
      block(RIGHT_X, 662, [line('Interest', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 8, semanticRole: 'centered-side-label' }),
    ] },
    sga: { blocks: [
      block(RIGHT_X, 832, [line('SG&A', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('15% of revenue', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    da: { blocks: [
      block(RIGHT_X, 1002, [line('D&A', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('2% of revenue', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    corporate_other: { blocks: [
      block(RIGHT_X, 1172, [line('Corporate', 32, { weight: 800, color: RED_LABEL }), line('& Other', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('1% of revenue', 29, { color: NOTE })], { lineGap: 7 }),
    ] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, blockIndex, texts) => {
    labelsZh[id].blocks[blockIndex].lines.forEach((item, index) => { item.text = texts[index]; });
  };
  setLines('concerts', 0, ['$value', '同比 +8%']);
  setLines('concerts', 1, ['演唱会', '调整后利润率 5%']);
  setLines('ticketing', 0, ['$value', '同比 +15%']);
  setLines('ticketing', 1, ['票务', '调整后利润率 39%']);
  setLines('sponsorship', 0, ['$value', '同比 +12%']);
  setLines('sponsorship', 1, ['赞助', '调整后利润率 67%']);
  setLines('revenue', 0, ['收入', '$value', '同比 +9%']);
  setLines('eliminations', 0, ['抵销', '$value']);
  setLines('gross_profit', 0, ['毛利润', '$value', '利润率 25%', '同比 (0 个百分点)']);
  setLines('direct_operating_expenses', 0, ['直接运营', '费用', '$value']);
  setLines('operating_profit', 0, ['营业利润', '$value', '利润率 7%', '同比 (0 个百分点)']);
  setLines('operating_expenses', 0, ['其他运营', '费用', '', '$value']);
  labelsZh.operating_expenses.blocks[0].lines.splice(2, 1);
  setLines('net_profit', 0, ['净利润', '$value', '利润率 5%', '同比 +1 个百分点']);
  setLines('tax', 0, ['税费', '$value']);
  setLines('interest', 0, ['利息', '$value']);
  setLines('sga', 0, ['销售、一般及管理费用', '$value', '占收入 15%']);
  labelsZh.sga.blocks[0].lines[0].size = 20;
  setLines('da', 0, ['折旧与摊销', '$value', '占收入 2%']);
  setLines('corporate_other', 0, ['公司及其他', '$value', '', '占收入 1%']);
  labelsZh.corporate_other.blocks[0].lines.splice(2, 1);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'live-nation-q2-fy26',
    name: 'Live Nation · Q2 FY26',
    company: 'Live Nation',
    meta: {
      company: 'Live Nation',
      title: 'Live Nation Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 3,
      referenceImage: { src: 'input/processed/live-nation-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 800,
      titleTextLength: 2430,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
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
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: otherIncomeGuide(false),
    rasterAnnotations: [
      { key: 'live-nation-company-logo', href: 'data/assets/raster-annotations/live-nation/company-logo.png', x: 570, y: 270, width: 665, height: 165 },
      { key: 'live-nation-concerts-brand-cluster', href: 'data/assets/raster-annotations/live-nation/concerts-brand-cluster.png', x: 125, y: 637, width: 240, height: 236 },
    ],
    layout: {
      scale: 55.9,
      routes: {
        other_income: { x: 2154, y: 413, width: 0, height: 2 },
      },
      nodes: {
        concerts: { x: 396, y: 528, width: 71, height: 362 },
        ticketing: { x: 396, y: 1043, width: 71, height: 46 },
        sponsorship: { x: 396, y: 1232, width: 71, height: 21 },
        segment_total: { x: 770, y: 604, width: 70, height: 431 },
        revenue: { x: 1144, y: 680, width: 70, height: 430 },
        eliminations: { x: 1144, y: 1257, width: 71, height: 2 },
        gross_profit: { x: 1517, y: 602, width: 71, height: 109 },
        direct_operating_expenses: { x: 1517, y: 870, width: 71, height: 323 },
        operating_profit: { x: 1891, y: 487, width: 71, height: 29 },
        operating_expenses: { x: 1891, y: 714, width: 71, height: 80 },
        net_profit: { x: 2264, y: 332, width: 71, height: 22 },
        tax: { x: 2264, y: 584, width: 71, height: 7 },
        interest: { x: 2264, y: 700, width: 71, height: 3 },
        sga: { x: 2264, y: 828, width: 71, height: 64 },
        da: { x: 2264, y: 1043, width: 71, height: 11 },
        corporate_other: { x: 2264, y: 1201, width: 71, height: 5 },
      },
      labels: labelsEn,
    },
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.1, valueText: '$0.1B', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'concerts', col: 0, order: 0, type: 'source', label: 'Concerts', value: 6.4, valueText: '$6.4B', notes: ['+8% Y/Y', '5% adjusted margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'ticketing', col: 0, order: 1, type: 'source', label: 'Ticketing', value: 0.9, valueText: '$0.9B', notes: ['+15% Y/Y', '39% adjusted margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'sponsorship', col: 0, order: 2, type: 'source', label: 'Sponsorship', value: 0.4, valueText: '$0.4B', notes: ['+12% Y/Y', '67% adjusted margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'segment_total', col: 1, order: 0, type: 'hub', label: '', value: 7.713, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 7.7, valueText: '$7.7B', notes: ['+9% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.013, valueText: '($13M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 1.9, valueText: '$1.9B', notes: ['25% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'direct_operating_expenses', col: 3, order: 1, type: 'cost', label: 'Direct operating expenses', value: 5.8, valueText: '($5.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.5, valueText: '$0.5B', notes: ['7% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Other operating expenses', value: 1.4, valueText: '($1.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.4, valueText: '$0.4B', notes: ['5% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 1.1, valueText: '($1.1B)', notes: ['15% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 4, type: 'cost', label: 'D&A', value: 0.2, valueText: '($0.2B)', notes: ['2% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'corporate_other', col: 5, order: 5, type: 'cost', label: 'Corporate & Other', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'concerts', target: 'segment_total', value: 6.4, sourceWidth: 362, targetWidth: 362, y0: 709, y1: 785, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'ticketing', target: 'segment_total', value: 0.9, sourceWidth: 46, targetWidth: 48, y0: 1066, y1: 990, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'sponsorship', target: 'segment_total', value: 0.4, sourceWidth: 21, targetWidth: 21, y0: 1242.5, y1: 1024.5, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK },
      { source: 'segment_total', target: 'revenue', value: 7.7, sourceWidth: 429, targetWidth: 430, y0: 818.5, y1: 895, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'segment_total', target: 'eliminations', value: 0.013, sourceWidth: 2, targetWidth: 2, y0: 1034, y1: 1258, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { x0: 840, y0: 1034, x1: 1144, y1: 1258, c1x: 920, c1y: 1034, c2x: 1040, c2y: 1258 } },
      { source: 'revenue', target: 'gross_profit', value: 1.9, sourceWidth: 109, targetWidth: 109, y0: 734.5, y1: 656.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'direct_operating_expenses', value: 5.8, sourceWidth: 321, targetWidth: 323, y0: 949.5, y1: 1031.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.5, sourceWidth: 29, targetWidth: 29, y0: 616.5, y1: 501.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.4, sourceWidth: 80, targetWidth: 80, y0: 671, y1: 754, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, sourceWidth: 20, targetWidth: 22, y0: 497, y1: 343, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 7, targetWidth: 7, y0: 510.5, y1: 587.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 2, targetWidth: 3, y0: 515, y1: 701.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 413, y1: 353, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 1.1, sourceWidth: 64, targetWidth: 64, y0: 746, y1: 860, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 0.2, sourceWidth: 11, targetWidth: 11, y0: 783.5, y1: 1048.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'corporate_other', value: 0.1, sourceWidth: 5, targetWidth: 5, y0: 791.5, y1: 1203.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Live Nation · 2026 财年第二季度',
        meta: {
          title: 'Live Nation 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleTextLength: 2080,
        },
        annotationsSvg: otherIncomeGuide(true),
        nonNodeMetrics: { other_income: { label: '其他收入' } },
        nodes: {
          concerts: { label: '演唱会', notes: ['同比 +8%', '调整后利润率 5%'] },
          ticketing: { label: '票务', notes: ['同比 +15%', '调整后利润率 39%'] },
          sponsorship: { label: '赞助', notes: ['同比 +12%', '调整后利润率 67%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 25%', '同比 (0 个百分点)'] },
          direct_operating_expenses: { label: '直接运营费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '其他运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          sga: { label: '销售、一般及管理费用', notes: ['占收入 15%'] },
          da: { label: '折旧与摊销', notes: ['占收入 2%'] },
          corporate_other: { label: '公司及其他', notes: ['占收入 1%'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
