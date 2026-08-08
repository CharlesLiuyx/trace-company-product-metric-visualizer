/* ====================================================================
 * GM - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/gm-q2-fy26.png as a fixed d3-sankey
 * layout with reused, approved GM raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#09a7db';
  const BLUE_LINK = '#89cfe8';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const line = (text, size, options = {}) => ({ text, size, ...options });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: 'middle', lineGap: 8, lines, ...options });
  const gmNorthAmericaHeading = (zh) => `
    <g class="sankey-interactive-annotation" data-node="gm_north_america">
      <text x="46" y="582" text-anchor="start" font-size="40" font-weight="800"
        fill="${BLUE}">${zh ? '通用北美' : 'GM North America'}</text>
    </g>
  `;

  const rasterAnnotations = [
    { href: 'data/assets/raster-annotations/gm/company-logo.png', x: 1096, y: 197, width: 252, height: 246 },
    {
      href: 'data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png',
      x: 9,
      y: 602,
      width: 432,
      height: 241,
    },
  ];

  const labels = {
    gm_north_america: {
      blocks: [block(474, 392, [line('$value', 39), line('+1% Y/Y', 28, { color: NOTE })], { lineGap: 11 })],
    },
    gm_international: {
      blocks: [
        block(482, 865, [line('$value', 39), line('+11% Y/Y', 28, { color: NOTE })], { lineGap: 11 }),
        block(65, 959, [line('GM International', 38, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    corporate: {
      blocks: [
        block(482, 1024, [line('$value', 39), line('+179% Y/Y', 28, { color: NOTE })], { lineGap: 11 }),
        block(137, 1104, [line('Corporate', 38, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    auto: {
      blocks: [
        block(850, 422, [line('Auto', 39, { weight: 800 }), line('$value', 39), line('+2% Y/Y', 28, { color: NOTE })], {
          lineGap: 11,
        }),
      ],
    },
    gm_financial: {
      blocks: [
        block(850, 1048, [line('$value', 39), line('+0% Y/Y', 28, { color: NOTE })], { lineGap: 11 }),
        block(783, 1145, [line('GM Financial', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    revenue: {
      blocks: [
        block(1226, 501, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+2% Y/Y', 28, { color: NOTE })], {
          lineGap: 11,
        }),
      ],
    },
    gross_profit: {
      blocks: [
        block(
          1602,
          385,
          [
            line('Gross profit', 40, { weight: 800 }),
            line('$value', 39),
            line('15% margin', 28, { color: NOTE }),
            line('(1pp) Y/Y', 28, { color: NOTE }),
          ],
          { lineGap: 13 }
        ),
      ],
    },
    cost_of_sales: {
      blocks: [block(1597, 1169, [line('Cost of sales', 34, { weight: 800 }), line('$value', 37)], { lineGap: 9 })],
    },
    other_income: {
      blocks: [block(2240, 456, [line('Other', 32, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    operating_profit: {
      blocks: [
        block(
          1976,
          320,
          [
            line('Operating profit', 40, { weight: 800 }),
            line('$value', 38),
            line('3% margin', 28, { color: NOTE }),
            line('(1pp) Y/Y', 28, { color: NOTE }),
          ],
          { lineGap: 13 }
        ),
      ],
    },
    operating_expenses: {
      blocks: [
        block(
          1974,
          742,
          [line('Operating', 34, { weight: 800 }), line('Expenses', 34, { weight: 800 }), line('$value', 37)],
          { lineGap: 9 }
        ),
      ],
    },
    net_profit: {
      blocks: [
        block(
          2501,
          338,
          [
            line('Net profit', 40, { weight: 800 }),
            line('$value', 38),
            line('3% margin', 28, { color: NOTE }),
            line('(1pp) Y/Y', 28, { color: NOTE }),
          ],
          { lineGap: 13 }
        ),
      ],
    },
    tax: {
      blocks: [block(2501, 574, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    other_expense: {
      blocks: [block(2501, 837, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    sga: {
      blocks: [block(2501, 1099, [line('SG&A', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
  };

  const zhLabels = {
    gm_north_america: {
      blocks: [block(474, 392, [line('$value', 39), line('同比 +1%', 28, { color: NOTE })], { lineGap: 11 })],
    },
    gm_international: {
      blocks: [
        block(482, 865, [line('$value', 39), line('同比 +11%', 28, { color: NOTE })], { lineGap: 11 }),
        block(65, 959, [line('通用国际', 38, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    corporate: {
      blocks: [
        block(482, 1024, [line('$value', 39), line('同比 +179%', 28, { color: NOTE })], { lineGap: 11 }),
        block(137, 1104, [line('公司及其他', 34, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    auto: {
      blocks: [
        block(850, 422, [line('汽车业务', 39, { weight: 800 }), line('$value', 39), line('同比 +2%', 28, { color: NOTE })], {
          lineGap: 11,
        }),
      ],
    },
    gm_financial: {
      blocks: [
        block(850, 1048, [line('$value', 39), line('同比 +0%', 28, { color: NOTE })], { lineGap: 11 }),
        block(783, 1145, [line('通用金融', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    revenue: {
      blocks: [
        block(1226, 501, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +2%', 28, { color: NOTE })], {
          lineGap: 11,
        }),
      ],
    },
    gross_profit: {
      blocks: [
        block(
          1602,
          385,
          [
            line('毛利润', 40, { weight: 800 }),
            line('$value', 39),
            line('利润率 15%', 28, { color: NOTE }),
            line('同比 (1 个百分点)', 26, { color: NOTE }),
          ],
          { lineGap: 13 }
        ),
      ],
    },
    cost_of_sales: {
      blocks: [block(1597, 1169, [line('销售成本', 34, { weight: 800 }), line('$value', 37)], { lineGap: 9 })],
    },
    other_income: {
      blocks: [block(2240, 456, [line('其他收入', 28, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    operating_profit: {
      blocks: [
        block(
          1976,
          320,
          [
            line('营业利润', 40, { weight: 800 }),
            line('$value', 38),
            line('利润率 3%', 28, { color: NOTE }),
            line('同比 (1 个百分点)', 26, { color: NOTE }),
          ],
          { lineGap: 13 }
        ),
      ],
    },
    operating_expenses: {
      blocks: [block(1974, 742, [line('运营费用', 34, { weight: 800 }), line('$value', 37)], { lineGap: 9 })],
    },
    net_profit: {
      blocks: [
        block(
          2501,
          338,
          [
            line('净利润', 40, { weight: 800 }),
            line('$value', 38),
            line('利润率 3%', 28, { color: NOTE }),
            line('同比 (1 个百分点)', 26, { color: NOTE }),
          ],
          { lineGap: 13 }
        ),
      ],
    },
    tax: {
      blocks: [block(2501, 574, [line('税费', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    other_expense: {
      blocks: [block(2501, 837, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    sga: {
      blocks: [block(2501, 1099, [line('销售及管理', 26, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'gm-q2-fy26',
    name: 'GM · Q2 FY26',
    company: 'GM',
    meta: {
      company: 'GM',
      title: 'GM Q2 FY26 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/gm-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 1923,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      allowRasterAnnotations: true,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 38, value: 39, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: gmNorthAmericaHeading(false),
    rasterAnnotations,
    layout: {
      nodes: {
        gm_north_america: { x: 443, y: 491, width: 72, height: 321 },
        gm_international: { x: 443, y: 967, width: 72, height: 27 },
        corporate: { x: 443, y: 1126, width: 72, height: 3 },
        auto: { x: 817, y: 574, width: 72, height: 351 },
        gm_financial: { x: 817, y: 1153, width: 72, height: 33 },
        revenue: { x: 1191, y: 653, width: 71, height: 386 },
        gross_profit: { x: 1564, y: 575, width: 73, height: 58 },
        cost_of_sales: { x: 1564, y: 819, width: 73, height: 327 },
        operating_profit: { x: 1938, y: 505, width: 72, height: 10 },
        operating_expenses: { x: 1938, y: 675, width: 72, height: 46 },
        other_income: { x: 2204, y: 441, width: 72, height: 3 },
        net_profit: { x: 2311, y: 383, width: 73, height: 11 },
        tax: { x: 2311, y: 608, width: 73, height: 3 },
        other_expense: { x: 2311, y: 862, width: 73, height: 30 },
        sga: { x: 2311, y: 1131, width: 73, height: 19 },
      },
      labels,
    },
    nodes: [
      { id: 'gm_north_america', col: 0, order: 0, type: 'source', label: 'GM North America', value: 39.9, notes: ['+1% Y/Y'] },
      { id: 'gm_international', col: 0, order: 1, type: 'source', label: 'GM International', value: 3.7, notes: ['+11% Y/Y'] },
      { id: 'corporate', col: 0, order: 2, type: 'source', label: 'Corporate', value: 0.2, notes: ['+179% Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 43.8, notes: ['+2% Y/Y'] },
      { id: 'gm_financial', col: 1, order: 1, type: 'source', label: 'GM Financial', value: 4.3, notes: ['+0% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 48.0, valueText: '$48.0B', notes: ['+2% Y/Y'] },
      {
        id: 'gross_profit',
        col: 3,
        order: 0,
        type: 'profit',
        label: 'Gross profit',
        value: 7.3,
        notes: ['15% margin', '(1pp) Y/Y'],
      },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 40.7, valueText: '($40.7B)' },
      {
        id: 'operating_profit',
        col: 4,
        order: 0,
        type: 'profit',
        label: 'Operating profit',
        value: 1.5,
        notes: ['3% margin', '(1pp) Y/Y'],
      },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 5.9 },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.1 },
      {
        id: 'net_profit',
        col: 6,
        order: 0,
        type: 'profit',
        label: 'Net profit',
        value: 1.4,
        notes: ['3% margin', '(1pp) Y/Y'],
      },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'other_expense', col: 6, order: 2, type: 'cost', label: 'Other', value: 3.7 },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 2.2 },
    ],
    links: [
      { source: 'gm_north_america', target: 'auto', value: 39.9, width: 321, sourceOrder: 0, targetOrder: 0 },
      { source: 'gm_international', target: 'auto', value: 3.7, width: 27, sourceOrder: 0, targetOrder: 1 },
      { source: 'corporate', target: 'auto', value: 0.2, sourceWidth: 3, targetWidth: 3, sourceOrder: 0, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 43.8, sourceWidth: 351, targetWidth: 353, sourceOrder: 0, targetOrder: 0 },
      { source: 'gm_financial', target: 'revenue', value: 4.3, width: 33, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 7.3, sourceWidth: 59, targetWidth: 58, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 40.7, sourceWidth: 327, targetWidth: 327, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.5, sourceWidth: 12, targetWidth: 10, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.9, sourceWidth: 46, targetWidth: 46, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 7, targetWidth: 8, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 3, targetWidth: 3, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'other_income',
        target: 'net_profit',
        value: 0.1,
        sourceWidth: 3,
        targetWidth: 3,
        targetOrder: 1,
        curve: { c1x: 2287, c2x: 2307 },
      },
      { source: 'operating_expenses', target: 'other_expense', value: 3.7, sourceWidth: 28, targetWidth: 30, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 2.2, sourceWidth: 18, targetWidth: 19, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'GM · 2026 财年第二季度',
        meta: { title: 'GM 2026 财年第二季度利润表', titleSize: 124, titleTextLength: 1650 },
        annotationsSvg: gmNorthAmericaHeading(true),
        nodes: {
          gm_north_america: { label: '通用北美', notes: ['同比 +1%'] },
          gm_international: { label: '通用国际', notes: ['同比 +11%'] },
          corporate: { label: '公司及其他', notes: ['同比 +179%'] },
          auto: { label: '汽车业务', notes: ['同比 +2%'] },
          gm_financial: { label: '通用金融', notes: ['同比 +0%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 15%', '同比 (1 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他收入' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          sga: { label: '销售及管理' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
