/* ====================================================================
 * NIO - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/nio-q4-fy25.png as a fixed d3-sankey
 * layout. The three-vehicle revenue cluster reuses NIO's validated runtime
 * raster; the NIO horizon symbol and wordmark are dataset-owned SVG.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2439;

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
      <text x="302" y="1277" text-anchor="middle" font-size="34" font-weight="800" fill="#ffffff">124,807</text>
      <text x="302" y="1318" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  // The Source places these category names beneath the vehicle artwork and
  // beside the small secondary stream, rather than centering them as Sankey
  // side labels. Keep them interactive and bound to their financial nodes.
  const salesCategoryAnnotations = (vehicleSales, otherSales) => `
    <g class="sankey-interactive-annotation" data-node="vehicle_sales">
      <text x="194" y="817" text-anchor="middle" font-size="40" font-weight="800" fill="#000000">${vehicleSales}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="other_sales">
      <text x="203" y="1098" text-anchor="middle" font-size="40" font-weight="800" fill="#000000">${otherSales}</text>
    </g>`;

  const annotationsEn = `${nioLogo}${deliveryCard('Deliveries', '+72% Y/Y')}${salesCategoryAnnotations('Vehicle sales', 'Other sales')}`;
  const annotationsZh = `${nioLogo}${deliveryCard('交付量', '同比 +72%')}${salesCategoryAnnotations('汽车销售', '其他销售')}`;

  const zhLabels = {
    vehicle_sales: {
      blocks: [
        {
          x: 419, top: 494, anchor: 'middle', lineGap: 8,
          lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +81%', size: 28, weight: 400, color: NOTE }],
        },
        { x: 193, top: 828, anchor: 'middle', lines: [{ text: '毛利率 18%', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    other_sales: {
      blocks: [
        {
          x: 419, top: 1014, anchor: 'middle', lineGap: 8,
          lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +37%', size: 28, weight: 400, color: NOTE }],
        },
        { x: 203, top: 1109, anchor: 'middle', lines: [{ text: '毛利率 12%', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    revenue: {
      blocks: [{ x: 884, top: 552, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +76%', size: 28, weight: 400, color: NOTE }] }],
    },
    gross_profit: {
      blocks: [{ x: 1354, top: 399, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 18%', size: 28, weight: 400, color: NOTE }, { text: '同比 +6 个百分点', size: 28, weight: 400, color: NOTE }] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1354, top: 1147, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 37, weight: 800 }, { text: '成本', size: 37, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
    },
    other: {
      blocks: [{ x: 1710, top: 547, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 34, weight: 800 }, { text: '$value', size: 33, weight: 400 }] }],
    },
    operating_profit: {
      blocks: [{ x: 1821, top: 304, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 2%', size: 28, weight: 400, color: NOTE }, { text: '同比 +33 个百分点', size: 28, weight: 400, color: NOTE }] }],
    },
    operating_expenses: {
      blocks: [{ x: 1821, top: 778, anchor: 'middle', lineGap: 7, lines: [{ text: '运营', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
    },
    net_profit: {
      blocks: [{ x: RIGHT_LABEL_X + 6, top: 324, anchor: 'middle', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 1%', size: 28, weight: 400, color: NOTE }, { text: '同比 +37 个百分点', size: 28, weight: 400, color: NOTE }] }],
    },
    tax: {
      blocks: [{ x: RIGHT_LABEL_X, top: 550, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }],
    },
    sga: {
      blocks: [{ x: RIGHT_LABEL_X + 6, top: 778, anchor: 'middle', lineGap: 8, lines: [{ text: '销售及行政费用', size: 27, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 10%', size: 28, weight: 400, color: NOTE }, { text: '同比 (15 个百分点)', size: 28, weight: 400, color: NOTE }] }],
    },
    rnd: {
      blocks: [{ x: RIGHT_LABEL_X + 6, top: 1030, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 6%', size: 28, weight: 400, color: NOTE }, { text: '同比 (13 个百分点)', size: 28, weight: 400, color: NOTE }] }],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nio-q4-fy25',
    name: 'NIO · Q4 FY25',
    company: 'NIO',
    meta: {
      company: 'NIO',
      title: 'NIO Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      referenceImage: { src: 'input/processed/nio-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 1955,
      titleLengthAdjust: 'spacing',
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
        x: 64, y: 518, width: 272, height: 260,
      },
    ],
    layout: {
      scale: 64,
      nodes: {
        vehicle_sales: { x: 382, y: 583, width: 74, height: 293 },
        other_sales: { x: 382, y: 1108, width: 74, height: 27 },
        revenue: { x: 849, y: 695, width: 74, height: 320 },
        gross_profit: { x: 1317, y: 581, width: 74, height: 56 },
        cost_of_revenue: { x: 1317, y: 859, width: 74, height: 265 },
        other: { x: 1671, y: 536, width: 74, height: 3 },
        operating_profit: { x: 1784, y: 487, width: 74, height: 7 },
        operating_expenses: { x: 1784, y: 702, width: 74, height: 52 },
        net_profit: { x: 2250, y: 390, width: 74, height: 3 },
        tax: { x: 2250, y: 582, width: 74, height: 6 },
        sga: { x: 2250, y: 796, width: 74, height: 33 },
        rnd: { x: 2250, y: 1059, width: 74, height: 18 },
      },
      labels: {
        vehicle_sales: {
          blocks: [
            { x: 419, top: 494, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+81% Y/Y', size: 28, weight: 400, color: NOTE }] },
            { x: 193, top: 828, anchor: 'middle', lines: [{ text: '18% gross margin', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        other_sales: {
          blocks: [
            { x: 419, top: 1014, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+37% Y/Y', size: 28, weight: 400, color: NOTE }] },
            { x: 203, top: 1109, anchor: 'middle', lines: [{ text: '12% gross margin', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        revenue: {
          blocks: [{ x: 884, top: 552, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+76% Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        gross_profit: {
          blocks: [{ x: 1354, top: 399, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '18% margin', size: 28, weight: 400, color: NOTE }, { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        cost_of_revenue: {
          blocks: [{ x: 1354, top: 1147, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 37, weight: 800 }, { text: 'revenue', size: 37, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
        },
        other: {
          blocks: [{ x: 1710, top: 547, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 34, weight: 800 }, { text: '$value', size: 33, weight: 400 }] }],
        },
        operating_profit: {
          blocks: [{ x: 1821, top: 304, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '2% margin', size: 28, weight: 400, color: NOTE }, { text: '+33pp Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        operating_expenses: {
          blocks: [{ x: 1821, top: 778, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
        },
        net_profit: {
          blocks: [{ x: RIGHT_LABEL_X, top: 324, anchor: 'middle', lineGap: 8, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '1% margin', size: 28, weight: 400, color: NOTE }, { text: '+37pp Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        tax: {
          blocks: [{ x: RIGHT_LABEL_X, top: 550, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }],
        },
        sga: {
          blocks: [{ x: RIGHT_LABEL_X, top: 778, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '10% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(15pp) Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        rnd: {
          blocks: [{ x: RIGHT_LABEL_X, top: 1030, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '6% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(13pp) Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
      },
    },
    nodes: [
      { id: 'vehicle_sales', col: 0, order: 0, type: 'source', label: 'Vehicle sales', value: 4.5, valueText: '$4.5B', notes: ['+81% Y/Y', '18% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_sales', col: 0, order: 1, type: 'source', label: 'Other sales', value: 0.4, valueText: '$0.4B', notes: ['+37% Y/Y', '12% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 4.9, valueText: '$4.9B', notes: ['+76% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.9, valueText: '$0.9B', notes: ['18% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.1, valueText: '($4.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.042, valueText: '$42M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.1, valueText: '$0.1B', notes: ['2% margin', '+33pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.8, valueText: '($0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.052, valueText: '$52M', notes: ['1% margin', '+37pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.016, valueText: '($16M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 0.5, valueText: '($0.5B)', notes: ['10% of revenue', '(15pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 0.3, valueText: '($0.3B)', notes: ['6% of revenue', '(13pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'vehicle_sales', target: 'revenue', value: 4.5, sourceWidth: 293, targetWidth: 293, y0: 729.5, y1: 841.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_sales', target: 'revenue', value: 0.4, sourceWidth: 27, targetWidth: 27, y0: 1121.5, y1: 1001.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 0.9, sourceWidth: 56, targetWidth: 56, y0: 723, y1: 609, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.1, sourceWidth: 264, targetWidth: 265, y0: 883, y1: 991.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.058, sourceWidth: 4, targetWidth: 4, y0: 583, y1: 489, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.8, sourceWidth: 52, targetWidth: 52, y0: 611, y1: 728, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'operating_profit', value: 0.042, sourceWidth: 3, targetWidth: 3, y0: 537.5, y1: 492.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.052, sourceWidth: 3, targetWidth: 3, y0: 488.5, y1: 391.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.016, sourceWidth: 4, targetWidth: 6, y0: 492, y1: 585, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.5, sourceWidth: 33, targetWidth: 33, y0: 718.5, y1: 812.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.3, sourceWidth: 19, targetWidth: 18, y0: 744.5, y1: 1068, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '蔚来 · 2025 财年第四季度',
        meta: { title: '蔚来 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 1760 },
        annotationsSvg: annotationsZh,
        nodes: {
          vehicle_sales: { label: '汽车销售', notes: ['同比 +81%', '毛利率 18%'] },
          other_sales: { label: '其他销售', notes: ['同比 +37%', '毛利率 12%'] },
          revenue: { label: '收入', notes: ['同比 +76%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 18%', '同比 +6 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 +33 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 1%', '同比 +37 个百分点'] },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 10%', '同比 (15 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 6%', '同比 (13 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
