/* ====================================================================
 * JD.com - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/jd-com-q4-fy25.png as a fixed
 * d3-sankey layout with reused validated JD business annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#686868';
  const SOURCE = '#666666';
  const SOURCE_LINK = '#b5b5b3';
  const GREEN = '#28a428';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9aca99';
  const RED = '#cc0000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e28283';
  const RIGHT_LABEL_X = 2496;

  function makeBlock(x, top, lines, anchor = 'middle', lineGap = 8) {
    return { x, top, anchor, lineGap, lines };
  }

  function makeLabels(language) {
    const zh = language === 'zh';
    return {
      jd_retail: {
        blocks: [
          makeBlock(450, 323, [
            { text: '$value', size: 40, weight: 400 },
            { text: zh ? '同比 (2%)' : '(2%) Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
          makeBlock(276, 452, [
            { text: zh ? '京东零售' : 'JD Retail', size: 40, weight: 800, color: SOURCE },
            { text: zh ? '营业利润率 3%' : '3% operating margin', size: 29, weight: 400, color: NOTE },
            { text: zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
        ],
      },
      jd_logistics: {
        blocks: [
          makeBlock(450, 858, [
            { text: '$value', size: 40, weight: 400 },
            { text: zh ? '同比 +22%' : '+22% Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
          makeBlock(238, 1003, [
            { text: zh ? '营业利润率 4%' : '4% operating margin', size: 29, weight: 400, color: NOTE },
            { text: zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
        ],
      },
      new_businesses: {
        blocks: [
          makeBlock(450, 1106, [
            { text: '$value', size: 40, weight: 400 },
            { text: zh ? '同比 +201%' : '+201% Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
          makeBlock(212, 1190, [
            { text: zh ? '新业务' : 'New businesses', size: 40, weight: 800, color: SOURCE },
            { text: zh ? '营业利润率 (105%)' : '(105%) operating margin', size: 29, weight: 400, color: NOTE },
            { text: zh ? '同比 (86 个百分点)' : '(86pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
        ],
      },
      gross_revenue: { blocks: [] },
      revenue: {
        blocks: [
          makeBlock(1196, 490, [
            { text: zh ? '收入' : 'Revenue', size: 40, weight: 800, color: SOURCE },
            { text: '$value', size: 40, weight: 400, color: SOURCE },
            { text: zh ? '同比 +2%' : '+2% Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
        ],
      },
      intersegment_eliminations: {
        blocks: [
          makeBlock(1196, 1210, [
            { text: zh ? '分部间' : 'Intrasegment', size: 34, weight: 800, color: RED_LABEL },
            { text: zh ? '抵销' : 'eliminations', size: 34, weight: 800, color: RED_LABEL },
            { text: '$value', size: 32, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
      gross_profit: {
        blocks: [
          makeBlock(1568, 354, [
            { text: zh ? '毛利润' : 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: zh ? '利润率 16%' : '16% margin', size: 29, weight: 400, color: NOTE },
            { text: zh ? '同比 +0 个百分点' : '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
        ],
      },
      cost_of_revenue: {
        blocks: [
          makeBlock(1570, 1150, [
            { text: zh ? '收入' : 'Cost of', size: 40, weight: 800, color: RED_LABEL },
            { text: zh ? '成本' : 'revenue', size: 40, weight: 800, color: RED_LABEL },
            { text: '$value', size: 40, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
      operating_loss: {
        blocks: [
          makeBlock(1826, 835, [
            { text: zh ? '营业' : 'Operating', size: 40, weight: 800, color: RED_LABEL },
            { text: zh ? '亏损' : 'loss', size: 40, weight: 800, color: RED_LABEL },
            { text: '$value', size: 40, weight: 400, color: RED_LABEL },
            { text: zh ? '利润率 (2%)' : '(2%) margin', size: 29, weight: 400, color: NOTE },
            { text: zh ? '同比 +4 个百分点' : '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
        ],
      },
      operating_expenses: {
        blocks: [
          makeBlock(1944, 506, [
            { text: zh ? '运营' : 'Operating', size: 40, weight: 800, color: RED_LABEL },
            { text: zh ? '费用' : 'expenses', size: 40, weight: 800, color: RED_LABEL },
            { text: '$value', size: 40, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
      fulfillment: {
        blocks: [
          makeBlock(RIGHT_LABEL_X, 566, [
            { text: zh ? '履约' : 'Fulfillment', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
      marketing: {
        blocks: [
          makeBlock(RIGHT_LABEL_X, 741, [
            { text: zh ? '营销' : 'Marketing', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
      rnd: {
        blocks: [
          makeBlock(RIGHT_LABEL_X, 905, [
            { text: zh ? '研发' : 'R&D', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
      ga: {
        blocks: [
          makeBlock(RIGHT_LABEL_X, 1059, [
            { text: zh ? '管理' : 'G&A', size: 31, weight: 800, color: RED_LABEL },
            { text: zh ? '费用' : '$value', size: 31, weight: zh ? 800 : 400, color: RED_LABEL },
            ...(zh ? [{ text: '$value', size: 31, weight: 400, color: RED_LABEL }] : []),
          ]),
        ],
      },
      goodwill: {
        blocks: [
          makeBlock(RIGHT_LABEL_X, 1196, [
            { text: zh ? '商誉' : 'Goodwill', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'jd-com-q4-fy25',
    name: 'JD.com · Q4 FY25',
    company: 'JD.com',
    meta: {
      company: 'JD.com',
      title: 'JD.com Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/jd-com-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2160,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: SOURCE, label: SOURCE },
        hub: { node: SOURCE, label: SOURCE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: SOURCE_LINK,
        hub: SOURCE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/jd-com/company-wordmark.png',
        x: 680,
        y: 238,
        width: 300,
        height: 236,
      },
      {
        key: 'business-retail-jdcom',
        href: 'data/assets/raster-annotations/jd-com/business-retail-jdcom.png',
        x: 198,
        y: 620,
        width: 198,
        height: 78,
      },
      {
        key: 'business-jd-health',
        href: 'data/assets/raster-annotations/jd-com/business-jd-health.png',
        x: 140,
        y: 702,
        width: 246,
        height: 70,
      },
      {
        key: 'business-logistics',
        href: 'data/assets/raster-annotations/jd-com/business-logistics.png',
        x: 76,
        y: 924,
        width: 316,
        height: 80,
      },
      {
        key: 'business-new-businesses-cluster',
        href: 'data/assets/raster-annotations/jd-com/business-new-businesses-cluster.png',
        x: 42,
        y: 1118,
        width: 346,
        height: 90,
      },
    ],

    layout: {
      scale: 7.4,
      nodes: {
        jd_retail: { x: 414, y: 426, width: 72, height: 319 },
        jd_logistics: { x: 414, y: 950, width: 72, height: 65 },
        new_businesses: { x: 414, y: 1195, width: 72, height: 13 },
        gross_revenue: { x: 787, y: 542, width: 72, height: 402 },
        revenue: { x: 1161, y: 633, width: 72, height: 374 },
        intersegment_eliminations: { x: 1161, y: 1175, width: 72, height: 28 },
        gross_profit: { x: 1533, y: 540, width: 72, height: 56 },
        cost_of_revenue: { x: 1535, y: 815, width: 72, height: 314 },
        operating_loss: { x: 1790, y: 807, width: 72, height: 8 },
        operating_expenses: { x: 1908, y: 659, width: 72, height: 64 },
        fulfillment: { x: 2282, y: 579, width: 72, height: 25 },
        marketing: { x: 2282, y: 756, width: 72, height: 25 },
        rnd: { x: 2282, y: 927, width: 72, height: 7 },
        ga: { x: 2282, y: 1084, width: 72, height: 3 },
        goodwill: { x: 2282, y: 1226, width: 72, height: 1 },
      },
      labels: makeLabels('en'),
    },

    nodes: [
      {
        id: 'jd_retail', col: 0, order: 0, type: 'source',
        label: 'JD Retail', value: 43.2, notes: ['(2%) Y/Y', '3% operating margin', '(0pp) Y/Y'],
        color: SOURCE, labelColor: SOURCE, linkTint: SOURCE_LINK,
      },
      {
        id: 'jd_logistics', col: 0, order: 1, type: 'source',
        label: 'JD Logistics', value: 9.1, notes: ['+22% Y/Y', '4% operating margin', '(1pp) Y/Y'],
        color: SOURCE, labelColor: SOURCE, linkTint: SOURCE_LINK,
      },
      {
        id: 'new_businesses', col: 0, order: 2, type: 'source',
        label: 'New Businesses', value: 2.0, notes: ['+201% Y/Y', '(105%) operating margin', '(86pp) Y/Y'],
        color: SOURCE, labelColor: SOURCE, linkTint: SOURCE_LINK,
      },
      {
        id: 'gross_revenue', col: 1, order: 0, type: 'hub',
        label: '', value: 54.3,
        color: SOURCE, labelColor: SOURCE,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 50.4, notes: ['+2% Y/Y'],
        color: SOURCE, labelColor: SOURCE,
      },
      {
        id: 'intersegment_eliminations', col: 2, order: 1, type: 'cost',
        label: ['Intrasegment', 'eliminations'], value: -3.9,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 7.9, notes: ['16% margin', '+0pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 42.5,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 4, order: 0, type: 'cost',
        label: ['Operating', 'loss'], value: -0.8, notes: ['(2%) margin', '+4pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 5, order: 0, type: 'cost',
        label: ['Operating', 'expenses'], value: 8.7,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'fulfillment', col: 6, order: 0, type: 'cost',
        label: 'Fulfillment', value: 3.5,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'marketing', col: 6, order: 1, type: 'cost',
        label: 'Marketing', value: 3.6,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 6, order: 2, type: 'cost',
        label: 'R&D', value: 1.0,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 6, order: 3, type: 'cost',
        label: 'G&A', value: 0.5,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'goodwill', col: 6, order: 4, type: 'cost',
        label: 'Goodwill', value: 0.2,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'jd_retail', target: 'gross_revenue', value: 43.2, width: 319, targetOrder: 0 },
      { source: 'jd_logistics', target: 'gross_revenue', value: 9.1, width: 65, targetOrder: 1 },
      { source: 'new_businesses', target: 'gross_revenue', value: 2.0, width: 13, targetOrder: 2 },

      { source: 'gross_revenue', target: 'revenue', value: 50.4, width: 374, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'intersegment_eliminations', value: 3.9, width: 28, sourceOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 7.9, width: 56, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 42.5, width: 314, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 7.9, width: 56, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 0.8, width: 8,
        sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK,
        y0: 811, y1: 719,
        curve: { x0: 1862, x1: 1908, c1x: 1877, c2x: 1890, c1y: 811, c2y: 719 },
      },

      { source: 'operating_expenses', target: 'fulfillment', value: 3.5, width: 25, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 3.6, width: 25, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, width: 7, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.5, width: 3, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'goodwill', value: 0.2, width: 1, sourceOrder: 4, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'JD.com · 2025 财年第四季度',
        meta: {
          title: 'JD.com 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
        },
        nodes: {
          jd_retail: { label: '京东零售', notes: ['同比 (2%)', '营业利润率 3%', '同比 (0 个百分点)'] },
          jd_logistics: { label: '京东物流', notes: ['同比 +22%', '营业利润率 4%', '同比 (1 个百分点)'] },
          new_businesses: { label: '新业务', notes: ['同比 +201%', '营业利润率 (105%)', '同比 (86 个百分点)'] },
          gross_revenue: { label: '' },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          intersegment_eliminations: { label: '分部间抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 16%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          fulfillment: { label: '履约' },
          marketing: { label: '营销' },
          rnd: { label: '研发' },
          ga: { label: '管理费用' },
          goodwill: { label: '商誉' },
        },
        layout: {
          labels: makeLabels('zh'),
        },
      },
    },
  });
})();
