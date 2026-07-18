/* ====================================================================
 * GM - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/gm-q1-fy26.png as a fixed d3-sankey
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
      blocks: [
        block(474, 384, [line('$value', 39), line('(3%) Y/Y', 28, { color: NOTE })], { lineGap: 11 }),
      ],
    },
    gm_international: {
      blocks: [
        block(482, 869, [line('$value', 39), line('+18% Y/Y', 28, { color: NOTE })], { lineGap: 11 }),
        block(65, 959, [line('GM International', 38, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    corporate: {
      blocks: [
        block(482, 1018, [line('$value', 39), line('+96% Y/Y', 28, { color: NOTE })], { lineGap: 11 }),
        block(137, 1090, [line('Corporate', 38, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    auto: {
      blocks: [
        block(850, 421, [line('Auto', 39, { weight: 800 }), line('$value', 39), line('(1%) Y/Y', 28, { color: NOTE })], {
          lineGap: 11,
        }),
      ],
    },
    gm_financial: {
      blocks: [
        block(850, 1048, [line('$value', 39), line('+3% Y/Y', 28, { color: NOTE })], { lineGap: 11 }),
        block(783, 1141, [line('GM Financial', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    revenue: {
      blocks: [
        block(1226, 501, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('(1%) Y/Y', 28, { color: NOTE })], {
          lineGap: 11,
        }),
      ],
    },
    gross_profit: {
      blocks: [
        block(
          1598,
          388,
          [
            line('Gross profit', 38, { weight: 800 }),
            line('$value', 39),
            line('20% margin', 28, { color: NOTE }),
            line('(0pp) Y/Y', 28, { color: NOTE }),
          ],
          { lineGap: 10 }
        ),
      ],
    },
    cost_of_sales: {
      blocks: [
        block(1597, 1186, [line('Cost of sales', 38, { weight: 800 }), line('$value', 37)], { lineGap: 9 }),
      ],
    },
    other_income: {
      blocks: [block(2235, 484, [line('Other', 32, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    operating_profit: {
      blocks: [
        block(
          1979,
          312,
          [
            line('Operating profit', 38, { weight: 800 }),
            line('$value', 38),
            line('7% margin', 28, { color: NOTE }),
            line('(1pp) Y/Y', 28, { color: NOTE }),
          ],
          { lineGap: 10 }
        ),
      ],
    },
    operating_expenses: {
      blocks: [
        block(
          1974,
          822,
          [line('Operating', 38, { weight: 800 }), line('Expenses', 38, { weight: 800 }), line('$value', 37)],
          { lineGap: 9 }
        ),
      ],
    },
    net_profit: {
      blocks: [
        block(
          2501,
          356,
          [
            line('Net profit', 38, { weight: 800 }),
            line('$value', 38),
            line('6% margin', 28, { color: NOTE }),
            line('(0pp) Y/Y', 28, { color: NOTE }),
          ],
          { lineGap: 10 }
        ),
      ],
    },
    tax: {
      blocks: [block(2501, 591, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    other_expense: {
      blocks: [block(2501, 880, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    sga: {
      blocks: [block(2501, 1099, [line('SG&A', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
  };

  const zhLabels = {
    gm_north_america: {
      blocks: [
        block(474, 384, [line('$value', 39), line('同比 (3%)', 28, { color: NOTE })], { lineGap: 11 }),
      ],
    },
    gm_international: {
      blocks: [
        block(482, 869, [line('$value', 39), line('同比 +18%', 28, { color: NOTE })], { lineGap: 11 }),
        block(65, 959, [line('通用国际', 38, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    corporate: {
      blocks: [
        block(482, 1018, [line('$value', 39), line('同比 +96%', 28, { color: NOTE })], { lineGap: 11 }),
        block(137, 1090, [line('公司及其他', 34, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    auto: {
      blocks: [
        block(850, 421, [line('汽车业务', 39, { weight: 800 }), line('$value', 39), line('同比 (1%)', 28, { color: NOTE })], {
          lineGap: 11,
        }),
      ],
    },
    gm_financial: {
      blocks: [
        block(850, 1048, [line('$value', 39), line('同比 +3%', 28, { color: NOTE })], { lineGap: 11 }),
        block(783, 1141, [line('通用金融', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    revenue: {
      blocks: [
        block(1226, 501, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 (1%)', 28, { color: NOTE })], {
          lineGap: 11,
        }),
      ],
    },
    gross_profit: {
      blocks: [
        block(
          1598,
          388,
          [
            line('毛利润', 38, { weight: 800 }),
            line('$value', 39),
            line('利润率 20%', 28, { color: NOTE }),
            line('同比 (0 个百分点)', 26, { color: NOTE }),
          ],
          { lineGap: 10 }
        ),
      ],
    },
    cost_of_sales: {
      blocks: [block(1597, 1186, [line('销售成本', 38, { weight: 800 }), line('$value', 37)], { lineGap: 9 })],
    },
    other_income: {
      blocks: [block(2235, 484, [line('其他收入', 28, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    operating_profit: {
      blocks: [
        block(
          1979,
          312,
          [
            line('营业利润', 38, { weight: 800 }),
            line('$value', 38),
            line('利润率 7%', 28, { color: NOTE }),
            line('同比 (1 个百分点)', 26, { color: NOTE }),
          ],
          { lineGap: 10 }
        ),
      ],
    },
    operating_expenses: {
      blocks: [block(1974, 822, [line('运营费用', 38, { weight: 800 }), line('$value', 37)], { lineGap: 9 })],
    },
    net_profit: {
      blocks: [
        block(
          2501,
          356,
          [
            line('净利润', 38, { weight: 800 }),
            line('$value', 38),
            line('利润率 6%', 28, { color: NOTE }),
            line('同比 (0 个百分点)', 26, { color: NOTE }),
          ],
          { lineGap: 10 }
        ),
      ],
    },
    tax: {
      blocks: [block(2501, 591, [line('税费', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    other_expense: {
      blocks: [block(2501, 880, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    sga: {
      blocks: [block(2501, 1099, [line('销售及管理', 26, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'gm-q1-fy26',
    name: 'GM · Q1 FY26',
    company: 'GM',
    meta: {
      company: 'GM',
      title: 'GM Q1 FY26 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/gm-q1-fy26.png', width: 2667, height: 1500 },
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
        gm_north_america: { x: 443, y: 479, width: 72, height: 352 },
        gm_international: { x: 443, y: 965, width: 72, height: 27 },
        corporate: { x: 443, y: 1113, width: 72, height: 2 },
        auto: { x: 817, y: 570, width: 72, height: 380 },
        gm_financial: { x: 817, y: 1143, width: 72, height: 40 },
        revenue: { x: 1191, y: 649, width: 71, height: 423 },
        gross_profit: { x: 1564, y: 569, width: 73, height: 82 },
        cost_of_sales: { x: 1564, y: 831, width: 73, height: 339 },
        operating_profit: { x: 1938, y: 492, width: 72, height: 27 },
        operating_expenses: { x: 1937, y: 752, width: 74, height: 55 },
        other_income: { x: 2198, y: 465, width: 72, height: 3 },
        net_profit: { x: 2312, y: 395, width: 72, height: 25 },
        tax: { x: 2311, y: 623, width: 73, height: 6 },
        other_expense: { x: 2311, y: 902, width: 73, height: 35 },
        sga: { x: 2311, y: 1126, width: 73, height: 20 },
      },
      labels,
    },
    nodes: [
      { id: 'gm_north_america', col: 0, order: 0, type: 'source', label: 'GM North America', value: 36.4, notes: ['(3%) Y/Y'] },
      { id: 'gm_international', col: 0, order: 1, type: 'source', label: 'GM International', value: 2.9, notes: ['+18% Y/Y'] },
      { id: 'corporate', col: 0, order: 2, type: 'source', label: 'Corporate', value: 0.1, notes: ['+96% Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 39.3, notes: ['(1%) Y/Y'] },
      { id: 'gm_financial', col: 1, order: 1, type: 'source', label: 'GM Financial', value: 4.3, notes: ['+3% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 43.6, notes: ['(1%) Y/Y'] },
      {
        id: 'gross_profit',
        col: 3,
        order: 0,
        type: 'profit',
        label: 'Gross profit',
        value: 8.6,
        notes: ['20% margin', '(0pp) Y/Y'],
      },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 35.0, valueText: '($35.0B)' },
      {
        id: 'operating_profit',
        col: 4,
        order: 0,
        type: 'profit',
        label: 'Operating profit',
        value: 2.9,
        notes: ['7% margin', '(1pp) Y/Y'],
      },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 5.7 },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.4 },
      {
        id: 'net_profit',
        col: 6,
        order: 0,
        type: 'profit',
        label: 'Net profit',
        value: 2.7,
        notes: ['6% margin', '(0pp) Y/Y'],
      },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.6 },
      { id: 'other_expense', col: 6, order: 2, type: 'cost', label: 'Other', value: 3.6 },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 2.1 },
    ],
    links: [
      { source: 'gm_north_america', target: 'auto', value: 36.4, width: 352, sourceOrder: 0, targetOrder: 0 },
      { source: 'gm_international', target: 'auto', value: 2.9, width: 27, sourceOrder: 0, targetOrder: 1 },
      { source: 'corporate', target: 'auto', value: 0.1, sourceWidth: 2, targetWidth: 1, sourceOrder: 0, targetOrder: 2 },
      {
        source: 'auto',
        target: 'revenue',
        value: 39.3,
        sourceWidth: 380,
        targetWidth: 383,
        sourceOrder: 0,
        targetOrder: 0,
      },
      { source: 'gm_financial', target: 'revenue', value: 4.3, width: 40, sourceOrder: 0, targetOrder: 1 },
      {
        source: 'revenue',
        target: 'gross_profit',
        value: 8.6,
        sourceWidth: 83,
        targetWidth: 82,
        sourceOrder: 0,
        targetOrder: 0,
      },
      {
        source: 'revenue',
        target: 'cost_of_sales',
        value: 35.0,
        sourceWidth: 340,
        targetWidth: 339,
        sourceOrder: 1,
        targetOrder: 0,
      },
      { source: 'gross_profit', target: 'operating_profit', value: 2.9, width: 27, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.7, width: 55, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.3, width: 21, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.6, width: 6, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'other_income',
        target: 'net_profit',
        value: 0.4,
        sourceWidth: 3,
        targetWidth: 4,
        targetOrder: 1,
        curve: { c1x: 2287, c2x: 2307 },
      },
      { source: 'operating_expenses', target: 'other_expense', value: 3.6, width: 35, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 2.1, width: 20, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'GM · 2026 财年第一季度',
        meta: { title: 'GM 2026 财年第一季度利润表', titleSize: 124, titleTextLength: 1650 },
        annotationsSvg: gmNorthAmericaHeading(true),
        nodes: {
          gm_north_america: { label: '通用北美', notes: ['同比 (3%)'] },
          gm_international: { label: '通用国际', notes: ['同比 +18%'] },
          corporate: { label: '公司及其他', notes: ['同比 +96%'] },
          auto: { label: '汽车业务', notes: ['同比 (1%)'] },
          gm_financial: { label: '通用金融', notes: ['同比 +3%'] },
          revenue: { label: '收入', notes: ['同比 (1%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 20%', '同比 (0 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他收入' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          sga: { label: '销售及管理' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
