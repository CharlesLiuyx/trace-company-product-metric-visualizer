/* ====================================================================
 * Paramount - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/paramount-q4-fy25.png as a fixed
 * d3-sankey layout with validated, reused Paramount raster annotations.
 * ==================================================================== */
(function () {
  const NAVY = '#06083f';
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const SOURCE_LINK = '#9294a7';
  const RED = '#d80000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e68184';
  const CARD = '#05083f';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2420;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="52" y="1160" width="570" height="160" rx="26" fill="${CARD}"/>
      <text x="337" y="1209" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">Paramount+</text>
      <text x="337" y="1251" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">Subscribers 79M +4% Y/Y</text>
      <text x="337" y="1292" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">Revenue $1.8B +7% Y/Y</text>
      <text x="116" y="1348" font-size="29" font-weight="400" fill="${NOTE}">ARPU = Average Revenue Per User</text>
<g class="sankey-interactive-annotation" data-node="eliminations">
        <rect x="1285" y="1140" width="260" height="98" fill="transparent"/>
        <text x="1413" y="1182" text-anchor="middle" font-size="34" font-weight="800" fill="${RED_LABEL}">Eliminations</text>
        <text x="1413" y="1224" text-anchor="middle" font-size="33" font-weight="400" fill="${RED_LABEL}">($35M)</text>
      </g>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="52" y="1160" width="570" height="160" rx="26" fill="${CARD}"/>
      <text x="337" y="1209" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">Paramount+</text>
      <text x="337" y="1251" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">订阅用户 7900 万，同比 +4%</text>
      <text x="337" y="1292" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">收入 $1.8B，同比 +7%</text>
      <text x="116" y="1348" font-size="29" font-weight="400" fill="${NOTE}">ARPU = 每用户平均收入</text>
<g class="sankey-interactive-annotation" data-node="eliminations">
        <rect x="1285" y="1140" width="260" height="98" fill="transparent"/>
        <text x="1413" y="1182" text-anchor="middle" font-size="34" font-weight="800" fill="${RED_LABEL}">抵销</text>
        <text x="1413" y="1224" text-anchor="middle" font-size="33" font-weight="400" fill="${RED_LABEL}">($35M)</text>
      </g>
    </g>`;

  const labelsEn = {
    direct_to_consumer: {
      blocks: [
        { x: 480, top: 318, anchor: 'middle', lineGap: 8, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 405, top: 410, anchor: 'end', lineGap: 13, lines: [
          { text: 'Direct to', size: 40, weight: 800 },
          { text: 'consumer', size: 40, weight: 800 },
        ] },
        { x: 392, top: 516, anchor: 'end', lineGap: 8, lines: [
          { text: '(7%) adj. margin', size: 29, weight: 400, color: NOTE },
          { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    tv_media: {
      blocks: [
        { x: 480, top: 565, anchor: 'middle', lineGap: 8, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '(5%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 405, top: 706, anchor: 'end', lineGap: 8, lines: [
          { text: 'TV Media', size: 40, weight: 800 },
          { text: '23% adj. margin', size: 29, weight: 400, color: NOTE },
          { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    filmed_entertainment: {
      blocks: [
        { x: 480, top: 922, anchor: 'middle', lineGap: 8, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 405, top: 992, anchor: 'end', lineGap: 13, lines: [
          { text: 'Filmed', size: 40, weight: 800 },
          { text: 'Entertainment', size: 40, weight: 800 },
        ] },
        { x: 392, top: 1097, anchor: 'end', lineGap: 8, lines: [
          { text: '(9%) adj. margin', size: 29, weight: 400, color: NOTE },
          { text: '(6pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    segment_revenue: { blocks: [] },
    revenue: {
      blocks: [{ x: 1413, top: 489, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Revenue', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    eliminations: { blocks: [] },
    operating_loss: {
      blocks: [{ x: 1731, top: 1074, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
        { text: 'loss', size: 40, weight: 800, color: RED_LABEL },
        { text: '$value', size: 40, weight: 400, color: RED_LABEL },
        { text: '(4%) margin', size: 29, weight: 400, color: NOTE },
        { text: '(6pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1880, top: 389, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Costs and', size: 40, weight: 800, color: RED_LABEL },
        { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
        { text: '$value', size: 40, weight: 400, color: RED_LABEL },
      ] }],
    },
    operating: {
      blocks: [{ x: RIGHT_LABEL_X, top: 518, anchor: 'start', lineGap: 8, lines: [
        { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
        { text: '$value', size: 40, weight: 400, color: RED_LABEL },
      ] }],
    },
    sga: {
      blocks: [{ x: RIGHT_LABEL_X + 42, top: 824, anchor: 'start', lineGap: 8, lines: [
        { text: 'SG&A', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    restructuring: {
      blocks: [{ x: RIGHT_LABEL_X + 10, top: 1002, anchor: 'start', lineGap: 8, lines: [
        { text: 'Restructuring', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    amortization: {
      blocks: [{ x: RIGHT_LABEL_X + 10, top: 1134, anchor: 'start', lineGap: 8, lines: [
        { text: 'Amortization', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    other: {
      blocks: [{ x: RIGHT_LABEL_X + 40, top: 1256, anchor: 'start', lineGap: 8, lines: [
        { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
  };

  const labelsZh = {
    direct_to_consumer: {
      blocks: [
        { x: 480, top: 318, anchor: 'middle', lineGap: 8, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '同比 +10%', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 405, top: 410, anchor: 'end', lineGap: 13, lines: [
          { text: '直接面向', size: 40, weight: 800 },
          { text: '消费者', size: 40, weight: 800 },
        ] },
        { x: 392, top: 516, anchor: 'end', lineGap: 8, lines: [
          { text: '调整后利润率 (7%)', size: 27, weight: 400, color: NOTE },
          { text: '同比 +7 个百分点', size: 27, weight: 400, color: NOTE },
        ] },
      ],
    },
    tv_media: {
      blocks: [
        { x: 480, top: 565, anchor: 'middle', lineGap: 8, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '同比 (5%)', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 405, top: 706, anchor: 'end', lineGap: 8, lines: [
          { text: '电视媒体', size: 40, weight: 800 },
          { text: '调整后利润率 23%', size: 27, weight: 400, color: NOTE },
          { text: '同比 +4 个百分点', size: 27, weight: 400, color: NOTE },
        ] },
      ],
    },
    filmed_entertainment: {
      blocks: [
        { x: 480, top: 922, anchor: 'middle', lineGap: 8, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '同比 +16%', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 405, top: 992, anchor: 'end', lineGap: 13, lines: [
          { text: '影视', size: 40, weight: 800 },
          { text: '娱乐', size: 40, weight: 800 },
        ] },
        { x: 392, top: 1097, anchor: 'end', lineGap: 8, lines: [
          { text: '调整后利润率 (9%)', size: 27, weight: 400, color: NOTE },
          { text: '同比 (6 个百分点)', size: 27, weight: 400, color: NOTE },
        ] },
      ],
    },
    segment_revenue: { blocks: [] },
    revenue: {
      blocks: [{ x: 1413, top: 489, anchor: 'middle', lineGap: 8, lines: [
        { text: '收入', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '同比 +2%', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    eliminations: { blocks: [] },
    operating_loss: {
      blocks: [{ x: 1731, top: 1074, anchor: 'middle', lineGap: 8, lines: [
        { text: '营业', size: 40, weight: 800, color: RED_LABEL },
        { text: '亏损', size: 40, weight: 800, color: RED_LABEL },
        { text: '$value', size: 40, weight: 400, color: RED_LABEL },
        { text: '利润率 (4%)', size: 29, weight: 400, color: NOTE },
        { text: '同比 (6 个百分点)', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1880, top: 389, anchor: 'middle', lineGap: 8, lines: [
        { text: '成本和', size: 40, weight: 800, color: RED_LABEL },
        { text: '费用', size: 40, weight: 800, color: RED_LABEL },
        { text: '$value', size: 40, weight: 400, color: RED_LABEL },
      ] }],
    },
    operating: {
      blocks: [{ x: RIGHT_LABEL_X, top: 518, anchor: 'start', lineGap: 8, lines: [
        { text: '运营成本', size: 40, weight: 800, color: RED_LABEL },
        { text: '$value', size: 40, weight: 400, color: RED_LABEL },
      ] }],
    },
    sga: {
      blocks: [{ x: RIGHT_LABEL_X + 42, top: 807, anchor: 'start', lineGap: 8, lines: [
        { text: '销售、一般', size: 27, weight: 800, color: RED_LABEL },
        { text: '及行政', size: 27, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    restructuring: {
      blocks: [{ x: RIGHT_LABEL_X + 10, top: 1002, anchor: 'start', lineGap: 8, lines: [
        { text: '重组', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    amortization: {
      blocks: [{ x: RIGHT_LABEL_X + 10, top: 1134, anchor: 'start', lineGap: 8, lines: [
        { text: '摊销', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    other: {
      blocks: [{ x: RIGHT_LABEL_X + 40, top: 1256, anchor: 'start', lineGap: 8, lines: [
        { text: '其他', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'paramount-q4-fy25',
    name: 'Paramount · Q4 FY25',
    company: 'Paramount',
    meta: {
      company: 'Paramount',
      title: 'Paramount Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/paramount-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2425,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
        profit: { node: '#28a428', label: '#008f47' },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: '#9fd39e', cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/paramount/company-wordmark.png', x: 786, y: 258, width: 700, height: 226 },
      { key: 'business-direct-to-consumer-cluster', href: 'data/assets/raster-annotations/paramount/business-direct-to-consumer-cluster.png', x: 18, y: 288, width: 198, height: 206 },
      { key: 'business-tv-media-cluster', href: 'data/assets/raster-annotations/paramount/business-tv-media-cluster.png', x: 10, y: 644, width: 190, height: 160 },
      { key: 'business-filmed-entertainment-cluster', href: 'data/assets/raster-annotations/paramount/business-filmed-entertainment-cluster.png', x: 16, y: 854, width: 196, height: 142 },
    ],
    layout: {
      scale: 46.5,
      nodes: {
        direct_to_consumer: { x: 443, y: 409, width: 71, height: 104 },
        tv_media: { x: 443, y: 656, width: 71, height: 218 },
        filmed_entertainment: { x: 443, y: 1013, width: 71, height: 61 },
        segment_revenue: { x: 910, y: 548, width: 72, height: 383 },
        revenue: { x: 1377, y: 633, width: 72, height: 379 },
        eliminations: { x: 1377, y: 1131, width: 72, height: 3 },
        operating_loss: { x: 1708, y: 1039, width: 45, height: 15 },
        operating_expenses: { x: 1844, y: 548, width: 72, height: 380 },
        operating: { x: 2312, y: 432, width: 72, height: 268 },
        sga: { x: 2312, y: 821, width: 72, height: 83 },
        restructuring: { x: 2312, y: 1028, width: 72, height: 25 },
        amortization: { x: 2312, y: 1161, width: 72, height: 19 },
        other: { x: 2312, y: 1293, width: 72, height: 4 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'direct_to_consumer', col: 0, order: 0, type: 'source', label: ['Direct to', 'consumer'], value: 2.213, notes: ['+10% Y/Y', '(7%) adj. margin', '+7pp Y/Y'], color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK },
      { id: 'tv_media', col: 0, order: 1, type: 'source', label: 'TV Media', value: 4.714, notes: ['(5%) Y/Y', '23% adj. margin', '+4pp Y/Y'], color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK },
      { id: 'filmed_entertainment', col: 0, order: 2, type: 'source', label: ['Filmed', 'Entertainment'], value: 1.256, notes: ['+16% Y/Y', '(9%) adj. margin', '(6pp) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK },
      { id: 'segment_revenue', col: 1, order: 0, type: 'hub', label: '', value: 8.183, color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 8.148, notes: ['+2% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 0.035, valueText: '($35M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.339, valueText: '($0.3B)', notes: ['(4%) margin', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 3, order: 0, type: 'cost', label: ['Costs and', 'expenses'], value: 8.487, valueText: '($8.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating', col: 4, order: 0, type: 'cost', label: 'Operating', value: 5.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 1, type: 'cost', label: 'SG&A', value: 1.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 4, order: 2, type: 'cost', label: 'Restructuring', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 4, order: 3, type: 'cost', label: 'Amortization', value: 0.346, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 4, type: 'cost', label: 'Other', value: 0.041, valueText: '($41M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'direct_to_consumer', target: 'segment_revenue', value: 2.213, width: 104, sourceOrder: 0, targetOrder: 0 },
      { source: 'tv_media', target: 'segment_revenue', value: 4.714, width: 218, sourceOrder: 0, targetOrder: 1 },
      { source: 'filmed_entertainment', target: 'segment_revenue', value: 1.256, width: 59, sourceWidth: 59, targetWidth: 59, y0: 1044.5, y1: 899.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'segment_revenue', target: 'revenue', value: 8.148, width: 379, sourceWidth: 379, targetWidth: 379, sourceOrder: 0, targetOrder: 0 },
      { source: 'segment_revenue', target: 'eliminations', value: 0.035, width: 2, sourceWidth: 2, targetWidth: 3, y0: 928, y1: 1132.5, sourceOrder: 1, targetOrder: 0, curve: { x0: 982, x1: 1377, c1x: 1115, c1y: 928, c2x: 1280, c2y: 1132.5 } },
      { source: 'revenue', target: 'operating_expenses', value: 8.148, width: 379, sourceWidth: 379, targetWidth: 365, y0: 822.5, y1: 730.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.339, width: 15, sourceWidth: 15, targetWidth: 15, y0: 1046.5, y1: 920.5, sourceOrder: 0, targetOrder: 1, curve: { x0: 1753, x1: 1844, c1x: 1788, c1y: 1046.5, c2x: 1812, c2y: 920.5 } },
      { source: 'operating_expenses', target: 'operating', value: 5.8, width: 268, sourceWidth: 268, targetWidth: 268, y0: 682, y1: 566, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.8, width: 83, sourceWidth: 83, targetWidth: 83, y0: 857.5, y1: 862.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.5, width: 25, sourceWidth: 25, targetWidth: 25, y0: 911.5, y1: 1040.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.346, width: 2, sourceWidth: 2, targetWidth: 19, y0: 925, y1: 1170.5, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other', value: 0.041, width: 2, sourceWidth: 2, targetWidth: 4, y0: 927, y1: 1295, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Paramount · 2025 财年第四季度',
        meta: {
          title: 'Paramount 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          titleTextLength: 2200,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          direct_to_consumer: { label: ['直接面向', '消费者'], notes: ['同比 +10%', '调整后利润率 (7%)', '同比 +7 个百分点'] },
          tv_media: { label: '电视媒体', notes: ['同比 (5%)', '调整后利润率 23%', '同比 +4 个百分点'] },
          filmed_entertainment: { label: ['影视', '娱乐'], notes: ['同比 +16%', '调整后利润率 (9%)', '同比 (6 个百分点)'] },
          segment_revenue: { label: '' },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          eliminations: { label: '抵销' },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (4%)', '同比 (6 个百分点)'] },
          operating_expenses: { label: ['成本和', '费用'] },
          operating: { label: '运营成本' },
          sga: { label: '销售、一般及行政' },
          restructuring: { label: '重组' },
          amortization: { label: '摊销' },
          other: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
