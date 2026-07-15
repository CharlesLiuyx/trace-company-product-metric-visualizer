/* ====================================================================
 * GM - FY25 income statement ($B)
 * Reconstructed from input/processed/gm-fy25.png as a fixed d3-sankey
 * layout with raster GM/brand annotations.
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

  const rasterAnnotations = [
    { href: 'data/assets/raster-annotations/gm/company-logo.png', x: 1095, y: 251, width: 252, height: 246 },
    {
      href: 'data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png',
      x: 0,
      y: 586,
      width: 432,
      height: 241,
    },
  ];

  const labels = {
    gm_north_america: {
      blocks: [
        block(505, 404, [line('$value', 39), line('(2%) Y/Y', 28, { color: NOTE })], { lineGap: 11 }),
        block(46, 538, [line('GM North America', 40, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    gm_international: {
      blocks: [
        block(480, 928, [line('$value', 39), line('(3%) Y/Y', 28, { color: NOTE })], { lineGap: 11 }),
        block(65, 1008, [line('GM International', 38, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    corporate: {
      blocks: [
        block(480, 1113, [line('$value', 39), line('+10% Y/Y', 28, { color: NOTE })], { lineGap: 11 }),
        block(135, 1185, [line('Corporate', 38, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    auto: {
      blocks: [
        block(802, 428, [line('Auto', 39, { weight: 800 }), line('$value', 39), line('(2%) Y/Y', 28, { color: NOTE })], {
          lineGap: 11,
        }),
      ],
    },
    gm_financial: {
      blocks: [
        block(852, 1160, [line('$value', 39), line('+7% Y/Y', 28, { color: NOTE })], { lineGap: 11 }),
        block(790, 1275, [line('GM Financial', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    revenue: {
      blocks: [
        block(1210, 500, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('(1%) Y/Y', 28, { color: NOTE })], {
          lineGap: 11,
        }),
      ],
    },
    gross_profit: {
      blocks: [
        block(
          1600,
          386,
          [
            line('Gross profit', 38, { weight: 800 }),
            line('$value', 39),
            line('14% margin', 28, { color: NOTE }),
            line('(5pp) Y/Y', 28, { color: NOTE }),
          ],
          { lineGap: 10 }
        ),
      ],
    },
    cost_of_sales: {
      blocks: [
        block(1601, 1198, [line('Cost of sales', 38, { weight: 800 }), line('$value', 37)], { lineGap: 9 }),
      ],
    },
    interest: {
      blocks: [block(2287, 450, [line('Interest', 32, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    operating_profit: {
      blocks: [
        block(
          1987,
          275,
          [
            line('Operating profit', 38, { weight: 800 }),
            line('$value', 38),
            line('2% margin', 28, { color: NOTE }),
            line('(5pp) Y/Y', 28, { color: NOTE }),
          ],
          { lineGap: 10 }
        ),
      ],
    },
    operating_expenses: {
      blocks: [
        block(
          1978,
          728,
          [line('Operating', 38, { weight: 800 }), line('Expenses', 38, { weight: 800 }), line('$value', 37)],
          { lineGap: 9 }
        ),
      ],
    },
    net_profit: {
      blocks: [
        block(
          2493,
          340,
          [
            line('Net profit', 38, { weight: 800 }),
            line('$value', 38),
            line('2% margin', 28, { color: NOTE }),
            line('(2pp) Y/Y', 28, { color: NOTE }),
          ],
          { lineGap: 10 }
        ),
      ],
    },
    tax: {
      blocks: [block(2512, 565, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    other: {
      blocks: [block(2515, 842, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    sga: {
      blocks: [block(2517, 1048, [line('SG&A', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
  };

  const zhLabels = {
    gm_north_america: {
      blocks: [
        block(505, 404, [line('$value', 39), line('同比 (2%)', 28, { color: NOTE })], { lineGap: 11 }),
        block(46, 538, [line('通用北美', 40, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    gm_international: {
      blocks: [
        block(480, 928, [line('$value', 39), line('同比 (3%)', 28, { color: NOTE })], { lineGap: 11 }),
        block(65, 1008, [line('通用国际', 38, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    corporate: {
      blocks: [
        block(480, 1113, [line('$value', 39), line('同比 +10%', 28, { color: NOTE })], { lineGap: 11 }),
        block(135, 1185, [line('公司及其他', 34, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    auto: {
      blocks: [
        block(802, 428, [line('汽车业务', 39, { weight: 800 }), line('$value', 39), line('同比 (2%)', 28, { color: NOTE })], {
          lineGap: 11,
        }),
      ],
    },
    gm_financial: {
      blocks: [
        block(852, 1160, [line('$value', 39), line('同比 +7%', 28, { color: NOTE })], { lineGap: 11 }),
        block(790, 1275, [line('通用金融', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    revenue: {
      blocks: [
        block(1210, 500, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 (1%)', 28, { color: NOTE })], {
          lineGap: 11,
        }),
      ],
    },
    gross_profit: {
      blocks: [
        block(
          1600,
          386,
          [
            line('毛利润', 38, { weight: 800 }),
            line('$value', 39),
            line('利润率 14%', 28, { color: NOTE }),
            line('同比 (5 个百分点)', 26, { color: NOTE }),
          ],
          { lineGap: 10 }
        ),
      ],
    },
    cost_of_sales: {
      blocks: [block(1601, 1198, [line('销售成本', 38, { weight: 800 }), line('$value', 37)], { lineGap: 9 })],
    },
    interest: {
      blocks: [block(2287, 450, [line('利息', 32, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    operating_profit: {
      blocks: [
        block(
          1987,
          275,
          [
            line('营业利润', 38, { weight: 800 }),
            line('$value', 38),
            line('利润率 2%', 28, { color: NOTE }),
            line('同比 (5 个百分点)', 26, { color: NOTE }),
          ],
          { lineGap: 10 }
        ),
      ],
    },
    operating_expenses: {
      blocks: [
        block(1978, 728, [line('运营费用', 38, { weight: 800 }), line('$value', 37)], { lineGap: 9 }),
      ],
    },
    net_profit: {
      blocks: [
        block(
          2493,
          340,
          [
            line('净利润', 38, { weight: 800 }),
            line('$value', 38),
            line('利润率 2%', 28, { color: NOTE }),
            line('同比 (2 个百分点)', 26, { color: NOTE }),
          ],
          { lineGap: 10 }
        ),
      ],
    },
    tax: {
      blocks: [block(2512, 565, [line('税费', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    other: {
      blocks: [block(2515, 842, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    sga: {
      blocks: [block(2517, 1048, [line('销售及管理', 26, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'gm-fy25',
    name: 'GM · FY25',
    company: 'GM',
    meta: {
      company: 'GM',
      title: 'GM FY25 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/gm-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 1717,
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
    rasterAnnotations,
    layout: {
      nodes: {
        gm_north_america: { x: 444, y: 498, width: 71, height: 355 },
        gm_international: { x: 444, y: 1031, width: 71, height: 29 },
        corporate: { x: 444, y: 1207, width: 71, height: 3 },
        auto: { x: 817, y: 572, width: 72, height: 388 },
        gm_financial: { x: 817, y: 1265, width: 72, height: 37 },
        revenue: { x: 1191, y: 653, width: 71, height: 425 },
        gross_profit: { x: 1565, y: 570, width: 71, height: 58 },
        cost_of_sales: { x: 1565, y: 798, width: 71, height: 367 },
        interest: { x: 2195, y: 439, width: 25, height: 3 },
        operating_profit: { x: 1951, y: 467, width: 71, height: 6 },
        operating_expenses: { x: 1949, y: 659, width: 71, height: 51 },
        net_profit: { x: 2312, y: 389, width: 72, height: 6 },
        tax: { x: 2312, y: 622, width: 72, height: 1 },
        other: { x: 2312, y: 858, width: 72, height: 32 },
        sga: { x: 2312, y: 1074, width: 72, height: 18 },
      },
      labels,
    },
    nodes: [
      { id: 'gm_north_america', col: 0, order: 0, type: 'source', label: 'GM North America', value: 154.3, notes: ['(2%) Y/Y'] },
      { id: 'gm_international', col: 0, order: 1, type: 'source', label: 'GM International', value: 13.4, notes: ['(3%) Y/Y'] },
      { id: 'corporate', col: 0, order: 2, type: 'source', label: 'Corporate', value: 0.2, notes: ['+10% Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 168.0, notes: ['(2%) Y/Y'] },
      { id: 'gm_financial', col: 1, order: 1, type: 'source', label: 'GM Financial', value: 17.1, notes: ['+7% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 185.0, notes: ['(1%) Y/Y'] },
      {
        id: 'gross_profit',
        col: 3,
        order: 0,
        type: 'profit',
        label: 'Gross profit',
        value: 25.9,
        notes: ['14% margin', '(5pp) Y/Y'],
      },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 159.1 },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.2 },
      {
        id: 'operating_profit',
        col: 4,
        order: 1,
        type: 'profit',
        label: 'Operating profit',
        value: 2.9,
        notes: ['2% margin', '(5pp) Y/Y'],
      },
      { id: 'operating_expenses', col: 4, order: 2, type: 'cost', label: ['Operating', 'Expenses'], value: 23.0 },
      {
        id: 'net_profit',
        col: 5,
        order: 0,
        type: 'profit',
        label: 'Net profit',
        value: 2.8,
        notes: ['2% margin', '(2pp) Y/Y'],
      },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 14.3 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 8.7 },
    ],
    links: [
      { source: 'gm_north_america', target: 'auto', value: 154.3, width: 355, sourceOrder: 0, targetOrder: 0 },
      { source: 'gm_international', target: 'auto', value: 13.4, width: 29, sourceOrder: 0, targetOrder: 1 },
      { source: 'corporate', target: 'auto', value: 0.2, width: 3, sourceOrder: 0, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 168.0, width: 388, sourceOrder: 0, targetOrder: 0 },
      { source: 'gm_financial', target: 'revenue', value: 17.1, width: 37, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 25.9, width: 58, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 159.1, width: 367, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'gross_profit',
        target: 'operating_profit',
        value: 2.9,
        sourceWidth: 7,
        targetWidth: 6,
        sourceOrder: 0,
        targetOrder: 0,
      },
      {
        source: 'gross_profit',
        target: 'operating_expenses',
        value: 23.0,
        sourceWidth: 51,
        targetWidth: 51,
        sourceOrder: 1,
        targetOrder: 0,
      },

      { source: 'operating_profit', target: 'net_profit', value: 2.6, width: 5, sourceOrder: 0, targetOrder: 1 },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 0.3,
        width: 1,
        sourceOrder: 1,
        targetOrder: 0,
      },
      {
        source: 'interest',
        target: 'net_profit',
        value: 0.2,
        width: 1,
        targetOrder: 0,
        curve: { c1x: 2258, c2x: 2300 },
      },

      { source: 'operating_expenses', target: 'other', value: 14.3, width: 32, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 8.7, width: 18, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'GM · 2025 财年',
        meta: { title: 'GM 2025 财年利润表', titleSize: 124, titleTextLength: 1440 },
        nodes: {
          gm_north_america: { label: '通用北美', notes: ['同比 (2%)'] },
          gm_international: { label: '通用国际', notes: ['同比 (3%)'] },
          corporate: { label: '公司及其他', notes: ['同比 +10%'] },
          auto: { label: '汽车业务', notes: ['同比 (2%)'] },
          gm_financial: { label: '通用金融', notes: ['同比 +7%'] },
          revenue: { label: '收入', notes: ['同比 (1%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 14%', '同比 (5 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          interest: { label: '利息' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          sga: { label: '销售及管理' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
