/* ====================================================================
 * NIO - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/nio-q1-fy26.png as a fixed d3-sankey
 * layout. The three-vehicle revenue cluster is a validated runtime raster;
 * the NIO horizon symbol and wordmark are dataset-owned SVG.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#707070';
  const GRAY_LINK = '#8f8f8c';
  const GREEN = '#29a329';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9acd99';
  const RED = '#d60000';
  const RED_LABEL = '#991600';
  const RED_LINK = '#e28183';
  const RIGHT_LABEL_X = 2392;

  const nioLogo = `
    <g data-typography-role="brand" transform="translate(431 268)">
      <path d="M0 111C0 50 47 0 105 0s105 50 105 111H145c0-35-18-61-40-61s-40 26-40 61Z" fill="#000000"/>
      <path d="M12 124h186L176 181l-44-42a12 12 0 0 0-17 0l-44 42Z" fill="#000000"/>
      <text x="258" y="161" font-family="Arial Black,Arial,sans-serif" font-size="146" font-weight="900" letter-spacing="-7" fill="#000000">NIO</text>
    </g>`;

  const deliveryCard = (title, note) => `
    <g font-family="'Noto Sans',Arial,sans-serif">
      <rect x="145" y="1175" width="313" height="165" rx="34" fill="#000000"/>
      <text x="302" y="1228" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${title}</text>
      <text x="302" y="1277" text-anchor="middle" font-size="34" font-weight="800" fill="#ffffff">83,465</text>
      <text x="302" y="1318" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotationsEn = `${nioLogo}${deliveryCard('Deliveries', '+98% Y/Y')}`;
  const annotationsZh = `${nioLogo}${deliveryCard('交付量', '同比 +98%')}`;

  const zhLabels = {
    vehicle_sales: {
      blocks: [
        {
          x: 419, top: 482, anchor: 'middle', lineGap: 8,
          lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +129%', size: 28, weight: 400, color: NOTE }],
        },
        { x: 190, top: 805, anchor: 'middle', lines: [{ text: '汽车销售', size: 40, weight: 800 }] },
        { x: 190, top: 856, anchor: 'middle', lines: [{ text: '毛利率 19%', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    other_sales: {
      blocks: [
        {
          x: 419, top: 1000, anchor: 'middle', lineGap: 8,
          lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +31%', size: 28, weight: 400, color: NOTE }],
        },
        { x: 190, top: 1075, anchor: 'middle', lines: [{ text: '其他销售', size: 40, weight: 800 }] },
        { x: 190, top: 1126, anchor: 'middle', lines: [{ text: '毛利率 21%', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    revenue: {
      blocks: [{ x: 884, top: 543, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +112%', size: 28, weight: 400, color: NOTE }] }],
    },
    gross_profit: {
      blocks: [{ x: 1354, top: 400, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 19%', size: 28, weight: 400, color: NOTE }, { text: '同比 +11 个百分点', size: 28, weight: 400, color: NOTE }] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1354, top: 1151, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 37, weight: 800 }, { text: '成本', size: 37, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
    },
    other: {
      blocks: [{ x: 1588, top: 491, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 34, weight: 800 }, { text: '$value', size: 33, weight: 400 }] }],
    },
    operating_loss: {
      blocks: [{ x: 1588, top: 855, anchor: 'middle', lineGap: 8, lines: [{ text: '营业', size: 40, weight: 800 }, { text: '亏损', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '利润率 (1%)', size: 28, weight: 400, color: NOTE }, { text: '同比 +55 个百分点', size: 28, weight: 400, color: NOTE }] }],
    },
    operating_expenses: {
      blocks: [{ x: 1821, top: 529, anchor: 'middle', lineGap: 7, lines: [{ text: '运营', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
    },
    sga: {
      blocks: [{ x: 2370, top: 569, anchor: 'start', lineGap: 8, lines: [{ text: '销售、一般及行政费用', size: 27, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 14%', size: 28, weight: 400, color: NOTE }, { text: '同比 (21 个百分点)', size: 28, weight: 400, color: NOTE }] }],
    },
    rnd: {
      blocks: [{ x: RIGHT_LABEL_X, top: 934, anchor: 'start', lineGap: 8, lines: [{ text: '研发', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 7%', size: 28, weight: 400, color: NOTE }, { text: '同比 (19 个百分点)', size: 28, weight: 400, color: NOTE }] }],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nio-q1-fy26',
    name: 'NIO · Q1 FY26',
    company: 'NIO',
    meta: {
      company: 'NIO',
      title: 'NIO Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nio-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 1980,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
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
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'nio-vehicle-sales-cars',
        href: 'data/assets/raster-annotations/nio/vehicle-sales-cars.png',
        x: 64, y: 544, width: 272, height: 260,
      },
    ],
    layout: {
      scale: 96,
      nodes: {
        vehicle_sales: { x: 382, y: 576, width: 74, height: 317 },
        other_sales: { x: 382, y: 1090, width: 74, height: 38 },
        revenue: { x: 847, y: 684, width: 74, height: 355 },
        gross_profit: { x: 1317, y: 578, width: 74, height: 68 },
        cost_of_revenue: { x: 1317, y: 842, width: 74, height: 286 },
        other: { x: 1551, y: 581, width: 74, height: 3 },
        operating_loss: { x: 1551, y: 827, width: 74, height: 4 },
        operating_expenses: { x: 1784, y: 687, width: 74, height: 75 },
        sga: { x: 2250, y: 580, width: 74, height: 49 },
        rnd: { x: 2250, y: 953, width: 74, height: 27 },
      },
      labels: {
        vehicle_sales: {
          blocks: [
            { x: 419, top: 482, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+129% Y/Y', size: 28, weight: 400, color: NOTE }] },
            { x: 190, top: 805, anchor: 'middle', lines: [{ text: 'Vehicle sales', size: 40, weight: 800 }] },
            { x: 190, top: 856, anchor: 'middle', lines: [{ text: '19% gross margin', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        other_sales: {
          blocks: [
            { x: 419, top: 1000, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+31% Y/Y', size: 28, weight: 400, color: NOTE }] },
            { x: 190, top: 1075, anchor: 'middle', lines: [{ text: 'Other sales', size: 40, weight: 800 }] },
            { x: 190, top: 1126, anchor: 'middle', lines: [{ text: '21% gross margin', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        revenue: {
          blocks: [{ x: 884, top: 543, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+112% Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        gross_profit: {
          blocks: [{ x: 1354, top: 400, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '19% margin', size: 28, weight: 400, color: NOTE }, { text: '+11pp Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        cost_of_revenue: {
          blocks: [{ x: 1354, top: 1151, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 37, weight: 800 }, { text: 'revenue', size: 37, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
        },
        other: {
          blocks: [{ x: 1588, top: 491, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 34, weight: 800 }, { text: '$value', size: 33, weight: 400 }] }],
        },
        operating_loss: {
          blocks: [{ x: 1588, top: 855, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'loss', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '(1%) margin', size: 28, weight: 400, color: NOTE }, { text: '+55pp Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        operating_expenses: {
          blocks: [{ x: 1821, top: 529, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
        },
        sga: {
          blocks: [{ x: RIGHT_LABEL_X, top: 569, anchor: 'start', lineGap: 8, lines: [{ text: 'SG&A', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '14% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(21pp) Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        rnd: {
          blocks: [{ x: RIGHT_LABEL_X, top: 934, anchor: 'start', lineGap: 8, lines: [{ text: 'R&D', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '7% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(19pp) Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
      },
    },
    nodes: [
      { id: 'vehicle_sales', col: 0, order: 0, type: 'source', label: 'Vehicle sales', value: 3.302944, valueText: '$3.3B', notes: ['+129% Y/Y', '19% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_sales', col: 0, order: 1, type: 'source', label: 'Other sales', value: 0.398556, valueText: '$0.4B', notes: ['+31% Y/Y', '21% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.7015, valueText: '$3.7B', notes: ['+112% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.7044, valueText: '$0.7B', notes: ['19% margin', '+11pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.9970, valueText: '($3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.031079, valueText: '$3M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.044768, valueText: '($4M)', notes: ['(1%) margin', '+55pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 0.780274, valueText: '($0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 0, type: 'cost', label: 'SG&A', value: 0.507003, valueText: '($0.5B)', notes: ['14% of revenue', '(21pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 0.273271, valueText: '($0.3B)', notes: ['7% of revenue', '(19pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'vehicle_sales', target: 'revenue', value: 3.302944, y0: 734.5, y1: 842.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_sales', target: 'revenue', value: 0.398556, y0: 1109, y1: 1019.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 0.7044, y0: 718, y1: 612, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.9970, sourceWidth: 286, targetWidth: 286, y0: 895.5, y1: 985, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7044, y0: 612, y1: 723, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'operating_expenses', value: 0.031079, y0: 582.5, y1: 688.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.044768, y0: 829, y1: 759.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 0.507003, y0: 711.5, y1: 604.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.273271, y0: 748.8, y1: 966.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '蔚来 · 2026 财年第一季度',
        meta: { title: '蔚来 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 1760 },
        annotationsSvg: annotationsZh,
        nodes: {
          vehicle_sales: { label: '汽车销售', notes: ['同比 +129%', '毛利率 19%'] },
          other_sales: { label: '其他销售', notes: ['同比 +31%', '毛利率 21%'] },
          revenue: { label: '收入', notes: ['同比 +112%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 19%', '同比 +11 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other: { label: '其他' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (1%)', '同比 +55 个百分点'] },
          operating_expenses: { label: '运营费用' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 14%', '同比 (21 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 (19 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
