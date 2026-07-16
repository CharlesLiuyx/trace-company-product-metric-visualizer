/* ====================================================================
 * Paramount - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/paramount-q3-fy25.png as a fixed
 * d3-sankey layout with reused, validated Paramount raster annotations.
 * ==================================================================== */
(function () {
  const NAVY = '#060a39';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const SOURCE_LINK = '#9294a8';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e18585';
  const CARD = '#050a38';
  const BG = '#f2f2f2';

  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap ?? 8,
    lines,
  });
  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight ?? 400,
    ...(options.color ? { color: options.color } : {}),
  });

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="52" y="1160" width="570" height="160" rx="26" fill="${CARD}"/>
      <text x="337" y="1209" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">Paramount+</text>
      <text x="337" y="1251" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">${zh ? '订阅用户 7900 万（环比 +140 万）' : 'Subscribers 79M (+1.4M Q/Q)'}</text>
      <text x="337" y="1292" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">${zh ? 'ARPU 同比 +10%' : 'ARPU +10% Y/Y'}</text>
      <text x="116" y="1348" font-size="29" font-weight="400" fill="${NOTE}">${zh ? 'ARPU = 每用户平均收入' : 'ARPU = Average Revenue Per User'}</text>
      <g class="sankey-interactive-annotation" data-node="eliminations">
        <rect x="1275" y="1136" width="300" height="132" fill="transparent"/>
        <text x="1415" y="1194" text-anchor="middle" font-size="34" font-weight="800" fill="${RED_LABEL}">${zh ? '抵销' : 'Eliminations'}</text>
        <text x="1415" y="1244" text-anchor="middle" font-size="33" font-weight="400" fill="${RED_LABEL}">($17M)</text>
      </g>
    </g>`;

  const labels = (zh) => ({
    filmed_entertainment: {
      blocks: [
        block(480, 283, [line('$value', 40), line(zh ? '同比 +28%' : '+28% Y/Y', 29, { color: NOTE })]),
        block(406, 339, [line(zh ? '影视' : 'Filmed', 40, { weight: 800 }), line(zh ? '娱乐' : 'Entertainment', 40, { weight: 800 })], { anchor: 'end', lineGap: 13 }),
        block(393, 447, [line(zh ? '调整后利润率 (6%)' : '(6%) adj. margin', zh ? 27 : 29, { color: NOTE }), line(zh ? '同比 (7 个百分点)' : '(7pp) Y/Y', zh ? 27 : 29, { color: NOTE })], { anchor: 'end' }),
      ],
    },
    tv_media: {
      blocks: [
        block(480, 526, [line('$value', 40), line(zh ? '同比 (12%)' : '(12%) Y/Y', 29, { color: NOTE })]),
        block(406, 647, [
          line(zh ? '电视媒体' : 'TV Media', 40, { weight: 800 }),
          line(zh ? '调整后利润率 22%' : '22% adj. margin', zh ? 27 : 29, { color: NOTE }),
          line(zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', zh ? 27 : 29, { color: NOTE }),
        ], { anchor: 'end' }),
      ],
    },
    direct_to_consumer: {
      blocks: [
        block(480, 886, [line('$value', 40), line(zh ? '同比 +17%' : '+17% Y/Y', 29, { color: NOTE })]),
        block(406, 976, [line(zh ? '直接面向' : 'Direct to', 40, { weight: 800 }), line(zh ? '消费者' : 'consumer', 40, { weight: 800 })], { anchor: 'end', lineGap: 13 }),
        block(417, 1081, [line(zh ? '调整后利润率 +16%' : '+16% adj. margin', zh ? 27 : 29, { color: NOTE }), line(zh ? '同比 +13 个百分点' : '+13pp Y/Y', zh ? 27 : 29, { color: NOTE })], { anchor: 'end' }),
      ],
    },
    segment_revenue: { blocks: [] },
    revenue: {
      blocks: [block(1414, 550, [
        line(zh ? '收入' : 'Revenue', 40, { weight: 800 }),
        line('$value', 40),
        line(zh ? '同比 (0%)' : '(0%) Y/Y', 29, { color: NOTE }),
      ])],
    },
    eliminations: { blocks: [] },
    operating_profit: {
      blocks: [block(1882, 388, [
        line(zh ? '营业利润' : 'Operating profit', 40, { weight: 800, color: GREEN_LABEL }),
        line('$value', 40, { color: GREEN_LABEL }),
        line(zh ? '利润率 5%' : '5% margin', 29, { color: NOTE }),
        line(zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', 29, { color: NOTE }),
      ])],
    },
    operating_expenses: {
      blocks: [block(1882, 1112, [
        line(zh ? '成本和' : 'Costs and', 40, { weight: 800, color: RED_LABEL }),
        line(zh ? '费用' : 'expenses', 40, { weight: 800, color: RED_LABEL }),
        line('$value', 40, { color: RED_LABEL }),
      ])],
    },
    net_profit: {
      blocks: [block(2414, 389, [
        line(zh ? '净利润' : 'Net profit', 40, { weight: 800, color: GREEN_LABEL }),
        line('$value', 40, { color: GREEN_LABEL }),
        line(zh ? '利润率 3%' : '3% margin', 29, { color: NOTE }),
        line(zh ? '同比 +3 个百分点' : '+3pp Y/Y', 29, { color: NOTE }),
      ], { anchor: 'start' })],
    },
    tax_benefit: {
      blocks: [block(zh ? 2222 : 2180, 519, [
        line(zh ? '税收收益' : 'Tax', 31, { weight: 800, color: GREEN_LABEL }),
        line('$value', 31, { color: GREEN_LABEL }),
      ], { anchor: zh ? 'middle' : 'start' })],
    },
    other: {
      blocks: [block(2457, 646, [
        line(zh ? '其他' : 'Other', 31, { weight: 800, color: RED_LABEL }),
        line('$value', 31, { color: RED_LABEL }),
      ], { anchor: 'start' })],
    },
    operating: {
      blocks: [block(2427, 914, [
        line(zh ? '运营成本' : 'Operating', 31, { weight: 800, color: RED_LABEL }),
        line('$value', 31, { color: RED_LABEL }),
      ], { anchor: 'start' })],
    },
    sga: {
      blocks: [block(2457, 1107, [
        line(zh ? '销售、一般及行政' : 'SG&A', zh ? 25 : 31, { weight: 800, color: RED_LABEL }),
        line('$value', 31, { color: RED_LABEL }),
      ], { anchor: 'start' })],
    },
    restructuring: {
      blocks: [block(2400, 1227, [
        line(zh ? '重组' : 'Restructuring', 31, { weight: 800, color: RED_LABEL }),
        line('$value', 31, { color: RED_LABEL }),
      ], { anchor: 'start' })],
    },
    amortization: {
      blocks: [block(2400, 1317, [
        line(zh ? '摊销' : 'Amortization', 31, { weight: 800, color: RED_LABEL }),
        line('$value', 31, { color: RED_LABEL }),
      ], { anchor: 'start' })],
    },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'paramount-q3-fy25',
    name: 'Paramount · Q3 FY25',
    company: 'Paramount',
    meta: {
      company: 'Paramount',
      title: 'Paramount Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/paramount-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2425,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/paramount/company-wordmark.png', x: 786, y: 258, width: 700, height: 226 },
      { key: 'business-filmed-entertainment-cluster', href: 'data/assets/raster-annotations/paramount/business-filmed-entertainment-cluster.png', x: 16, y: 235, width: 196, height: 142 },
      { key: 'business-tv-media-cluster', href: 'data/assets/raster-annotations/paramount/business-tv-media-cluster.png', x: 10, y: 611, width: 190, height: 160 },
      { key: 'business-direct-to-consumer-cluster', href: 'data/assets/raster-annotations/paramount/business-direct-to-consumer-cluster.png', x: 18, y: 854, width: 198, height: 206 },
    ],
    layout: {
      scale: 46.5,
      nodes: {
        filmed_entertainment: { x: 445, y: 373, width: 71, height: 34 },
        tv_media: { x: 445, y: 619, width: 71, height: 176 },
        direct_to_consumer: { x: 445, y: 977, width: 71, height: 100 },
        segment_revenue: { x: 912, y: 571, width: 70, height: 312 },
        revenue: { x: 1379, y: 692, width: 71, height: 311 },
        // Source-visible 71x2 terminal face: the pale-red guide reaches the
        // left edge at x=1379, then continues across the complete short bar.
        eliminations: { x: 1379, y: 1149, width: 71, height: 2 },
        operating_profit: { x: 1847, y: 571, width: 70, height: 12 },
        operating_expenses: { x: 1847, y: 792, width: 70, height: 297 },
        tax_benefit: { x: 2187, y: 493, width: 70, height: 5 },
        net_profit: { x: 2313, y: 441, width: 71, height: 7 },
        other: { x: 2313, y: 675, width: 71, height: 10 },
        operating: { x: 2313, y: 840, width: 71, height: 201 },
        sga: { x: 2313, y: 1109, width: 71, height: 63 },
        restructuring: { x: 2313, y: 1235, width: 71, height: 15 },
        amortization: { x: 2313, y: 1325, width: 71, height: 10 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'filmed_entertainment', col: 0, order: 0, type: 'source', label: ['Filmed', 'Entertainment'], value: 0.8, notes: ['+28% Y/Y', '(6%) adj. margin', '(7pp) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK },
      { id: 'tv_media', col: 0, order: 1, type: 'source', label: 'TV Media', value: 3.8, notes: ['(12%) Y/Y', '22% adj. margin', '(0pp) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK },
      { id: 'direct_to_consumer', col: 0, order: 2, type: 'source', label: ['Direct to', 'consumer'], value: 2.2, notes: ['+17% Y/Y', '+16% adj. margin', '+13pp Y/Y'], color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK },
      { id: 'segment_revenue', col: 1, order: 0, type: 'hub', label: '', value: 6.8, color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 6.7, notes: ['(0%) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.017, valueText: '($17M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.3, notes: ['5% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Costs and', 'expenses'], value: 6.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 4, order: 0, type: 'profit', label: 'Tax', value: 0.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['3% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating', col: 5, order: 2, type: 'cost', label: 'Operating', value: 4.3, valueText: '($4.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 1.4, valueText: '($1.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 4, type: 'cost', label: 'Restructuring', value: 0.4, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 5, order: 5, type: 'cost', label: 'Amortization', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'filmed_entertainment', target: 'segment_revenue', value: 0.8, sourceWidth: 34, targetWidth: 34, targetOrder: 0 },
      { source: 'tv_media', target: 'segment_revenue', value: 3.8, sourceWidth: 176, targetWidth: 176, targetOrder: 1 },
      { source: 'direct_to_consumer', target: 'segment_revenue', value: 2.2, sourceWidth: 100, targetWidth: 102, targetOrder: 2 },
      { source: 'segment_revenue', target: 'revenue', value: 6.7, sourceWidth: 311, targetWidth: 311, sourceOrder: 0, targetOrder: 0 },
      {
        source: 'segment_revenue', target: 'eliminations', value: 0.017,
        sourceWidth: 2, targetWidth: 2, sourceOrder: 1, targetOrder: 0,
        y0: 882, y1: 1150,
        curve: { x0: 982, x1: 1379, c1x: 1118, c1y: 882, c2x: 1280, c2y: 1150 },
      },
      { source: 'revenue', target: 'operating_profit', value: 0.3, sourceWidth: 12, targetWidth: 12, sourceOrder: 0, targetOrder: 0, y0: 698, y1: 577, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 6.4, sourceWidth: 299, targetWidth: 297, sourceOrder: 1, targetOrder: 0, y0: 853.5, y1: 940.5 },
      { source: 'tax_benefit', target: 'net_profit', value: 0.1, sourceWidth: 5, targetWidth: 3, sourceOrder: 0, targetOrder: 1, y0: 495.5, y1: 446.5, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.3, sourceWidth: 12, targetWidth: 4, sourceOrder: 0, targetOrder: 0, y0: 577, y1: 443, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 0.3, sourceWidth: 10, targetWidth: 10, sourceOrder: 1, targetOrder: 0, y0: 578, y1: 680 },
      { source: 'operating_expenses', target: 'operating', value: 4.3, sourceWidth: 201, targetWidth: 201, sourceOrder: 0, targetOrder: 0, y0: 892.5, y1: 940.5 },
      { source: 'operating_expenses', target: 'sga', value: 1.4, sourceWidth: 63, targetWidth: 63, sourceOrder: 1, targetOrder: 0, y0: 1024.5, y1: 1140.5 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.4, sourceWidth: 15, targetWidth: 15, sourceOrder: 2, targetOrder: 0, y0: 1063.5, y1: 1242.5 },
      { source: 'operating_expenses', target: 'amortization', value: 0.3, sourceWidth: 18, targetWidth: 10, sourceOrder: 3, targetOrder: 0, y0: 1080, y1: 1330 },
    ],
    i18n: {
      preservedAnnotationText: ['Paramount+', 'ARPU'],
      zh: {
        name: 'Paramount · 2025 财年第三季度',
        meta: {
          title: 'Paramount 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          titleTextLength: 2200,
        },
        annotationsSvg: annotations(true),
        nodes: {
          filmed_entertainment: { label: ['影视', '娱乐'], notes: ['同比 +28%', '调整后 OIBDA 利润率 (6%)', '同比 (7 个百分点)'] },
          tv_media: { label: '电视媒体', notes: ['同比 (12%)', '调整后 OIBDA 利润率 22%', '同比 (0 个百分点)'] },
          direct_to_consumer: { label: ['直接面向', '消费者'], notes: ['同比 +17%', '调整后 OIBDA 利润率 +16%', '同比 +13 个百分点'] },
          segment_revenue: { label: '' },
          revenue: { label: '收入', notes: ['同比 (0%)'] },
          eliminations: { label: '抵销' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 (0 个百分点)'] },
          operating_expenses: { label: ['成本和', '费用'] },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +3 个百分点'] },
          other: { label: '其他' },
          operating: { label: '运营成本' },
          sga: { label: '销售、一般及行政' },
          restructuring: { label: '重组' },
          amortization: { label: '摊销' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
