/* ====================================================================
 * NIO - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/nio-q3-fy25.png as a fixed d3-sankey
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
      <text x="302" y="1277" text-anchor="middle" font-size="34" font-weight="800" fill="#ffffff">87,071</text>
      <text x="302" y="1318" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const sourceCaptions = (vehicleName, vehicleNote, otherName, otherNote) => `
    <g class="sankey-interactive-annotation" data-node="vehicle_sales" font-family="'Noto Sans',Arial,sans-serif">
      <text x="194" y="807" text-anchor="middle" font-size="40" font-weight="800" fill="${BLACK}">${vehicleName}</text>
      <text x="194" y="851" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${vehicleNote}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="other_sales" font-family="'Noto Sans',Arial,sans-serif">
      <text x="203" y="1088" text-anchor="middle" font-size="40" font-weight="800" fill="${BLACK}">${otherName}</text>
      <text x="203" y="1132" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${otherNote}</text>
    </g>`;

  const annotationsEn = `${nioLogo}${sourceCaptions('Vehicle sales', '15% gross margin', 'Other sales', '8% gross margin')}${deliveryCard('Deliveries', '+41% Y/Y')}`;
  const annotationsZh = `${nioLogo}${sourceCaptions('汽车销售', '毛利率 15%', '其他销售', '毛利率 8%')}${deliveryCard('交付量', '同比 +41%')}`;

  const zhLabels = {
    vehicle_sales: {
      blocks: [
        {
          x: 419, top: 492, anchor: 'middle', lineGap: 8,
          lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +15%', size: 28, weight: 400, color: NOTE }],
        },
      ],
    },
    other_sales: {
      blocks: [
        {
          x: 423, top: 984, anchor: 'middle', lineGap: 8,
          lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +31%', size: 28, weight: 400, color: NOTE }],
        },
      ],
    },
    revenue: {
      blocks: [{ x: 884, top: 575, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +17%', size: 28, weight: 400, color: NOTE }] }],
    },
    gross_profit: {
      blocks: [{ x: 1354, top: 409, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 14%', size: 28, weight: 400, color: NOTE }, { text: '同比 +3 个百分点', size: 28, weight: 400, color: NOTE }] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1354, top: 1133, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 37, weight: 800 }, { text: '成本', size: 37, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
    },
    other: {
      blocks: [{ x: 1616, top: 532, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 34, weight: 800 }, { text: '$value', size: 33, weight: 400 }] }],
    },
    operating_loss: {
      blocks: [{ x: 1608, top: 925, anchor: 'middle', lineGap: 8, lines: [{ text: '营业', size: 40, weight: 800 }, { text: '亏损', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '利润率 (16%)', size: 28, weight: 400, color: NOTE }, { text: '同比 +12 个百分点', size: 28, weight: 400, color: NOTE }] }],
    },
    operating_expenses: {
      blocks: [{ x: 1821, top: 571, anchor: 'middle', lineGap: 7, lines: [{ text: '运营', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
    },
    sga: {
      blocks: [{ x: RIGHT_LABEL_X, top: 597, anchor: 'middle', lineGap: 8, lines: [{ text: '销售及行政费用', size: 27, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 19%', size: 28, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE }] }],
    },
    rnd: {
      blocks: [{ x: RIGHT_LABEL_X, top: 920, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 11%', size: 28, weight: 400, color: NOTE }, { text: '同比 (7 个百分点)', size: 28, weight: 400, color: NOTE }] }],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nio-q3-fy25',
    name: 'NIO · Q3 FY25',
    company: 'NIO',
    meta: {
      company: 'NIO',
      title: 'NIO Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nio-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 1955,
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
      scale: 96,
      nodes: {
        vehicle_sales: { x: 382, y: 583, width: 74, height: 271 },
        other_sales: { x: 382, y: 1073, width: 74, height: 39 },
        revenue: { x: 849, y: 717, width: 74, height: 307 },
        gross_profit: { x: 1317, y: 589, width: 74, height: 43 },
        cost_of_revenue: { x: 1317, y: 852, width: 74, height: 260 },
        other: { x: 1579, y: 628, width: 74, height: 2 },
        operating_loss: { x: 1571, y: 848, width: 74, height: 46 },
        operating_expenses: { x: 1784, y: 733, width: 74, height: 95 },
        sga: { x: 2248, y: 605, width: 74, height: 59 },
        rnd: { x: 2250, y: 937, width: 74, height: 33 },
      },
      labels: {
        vehicle_sales: {
          blocks: [
            { x: 419, top: 492, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        other_sales: {
          blocks: [
            { x: 423, top: 984, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+31% Y/Y', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        revenue: {
          blocks: [{ x: 884, top: 575, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        gross_profit: {
          blocks: [{ x: 1354, top: 409, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '14% margin', size: 28, weight: 400, color: NOTE }, { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        cost_of_revenue: {
          blocks: [{ x: 1354, top: 1133, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 37, weight: 800 }, { text: 'revenue', size: 37, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
        },
        other: {
          blocks: [{ x: 1616, top: 532, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 34, weight: 800 }, { text: '$value', size: 33, weight: 400 }] }],
        },
        operating_loss: {
          blocks: [{ x: 1608, top: 925, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'loss', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '(16%) margin', size: 28, weight: 400, color: NOTE }, { text: '+12pp Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        operating_expenses: {
          blocks: [{ x: 1821, top: 571, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
        },
        sga: {
          blocks: [{ x: RIGHT_LABEL_X, top: 597, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '19% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        rnd: {
          blocks: [{ x: RIGHT_LABEL_X, top: 920, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '11% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(7pp) Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
      },
    },
    nodes: [
      { id: 'vehicle_sales', col: 0, order: 0, type: 'source', label: 'Vehicle sales', value: 2.7, valueText: '$2.7B', notes: ['+15% Y/Y', '15% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_sales', col: 0, order: 1, type: 'source', label: 'Other sales', value: 0.4, valueText: '$0.4B', notes: ['+31% Y/Y', '8% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.1, valueText: '$3.1B', notes: ['+17% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.4, valueText: '$0.4B', notes: ['14% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.6, valueText: '($2.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.004, valueText: '$4M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.5, valueText: '($0.5B)', notes: ['(16%) margin', '+12pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 0.9, valueText: '($0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 0, type: 'cost', label: 'SG&A', value: 0.6, valueText: '($0.6B)', notes: ['19% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 0.3, valueText: '($0.3B)', notes: ['11% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'vehicle_sales', target: 'revenue', value: 2.7, sourceWidth: 271, targetWidth: 267, y0: 718.5, y1: 850.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_sales', target: 'revenue', value: 0.4, sourceWidth: 39, targetWidth: 40, y0: 1092.5, y1: 1004, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 0.4, sourceWidth: 43, targetWidth: 43, y0: 738.5, y1: 610.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.6, sourceWidth: 264, targetWidth: 260, y0: 892, y1: 982, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.4, sourceWidth: 43, targetWidth: 43, y0: 610.5, y1: 756.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'other', target: 'operating_expenses', value: 0.004, sourceWidth: 2, targetWidth: 2, y0: 629, y1: 734, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.5, sourceWidth: 46, targetWidth: 50, y0: 871, y1: 803, sourceOrder: 0, targetOrder: 2, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 0.6, sourceWidth: 59, y0: 762.5, y1: 634.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.3, sourceWidth: 33, targetWidth: 33, y0: 808.5, y1: 953.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '蔚来 · 2025 财年第三季度',
        meta: { title: '蔚来 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月', titleTextLength: 1760 },
        annotationsSvg: annotationsZh,
        nodes: {
          vehicle_sales: { label: '汽车销售', notes: ['同比 +15%', '毛利率 15%'] },
          other_sales: { label: '其他销售', notes: ['同比 +31%', '毛利率 8%'] },
          revenue: { label: '收入', notes: ['同比 +17%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 14%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other: { label: '其他' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (16%)', '同比 +12 个百分点'] },
          operating_expenses: { label: '运营费用' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 19%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 (7 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
