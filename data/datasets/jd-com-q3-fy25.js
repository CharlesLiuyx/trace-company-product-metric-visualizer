/* ====================================================================
 * JD.com - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/jd-com-q3-fy25.png as a fixed
 * d3-sankey layout with reused, validated JD business annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const SOURCE_NODE = '#666666';
  const SOURCE_LABEL = '#5e5e5e';
  const SOURCE_LINK = '#b3b3b3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2475;

  function block(x, top, lines, anchor = 'middle', lineGap = 8) {
    return { x, top, anchor, lineGap, lines };
  }

  function makeLabels(language) {
    const zh = language === 'zh';
    return {
      jd_retail: {
        blocks: [
          block(450, 365, [
            { text: '$value', size: 40, weight: 400 },
            { text: zh ? '同比 +11%' : '+11% Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
          block(370, 478, [
            { text: zh ? '京东零售' : 'JD Retail', size: 40, weight: 800, color: SOURCE_LABEL },
            { text: zh ? '营业利润率 6%' : '6% operating margin', size: 29, weight: 400, color: NOTE },
            { text: zh ? '同比 +1 个百分点' : '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
          ], 'end'),
        ],
      },
      jd_logistics: {
        blocks: [
          block(449, 929, [
            { text: '$value', size: 40, weight: 400 },
            { text: zh ? '同比 +24%' : '+24% Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
          block(364, 1067, [
            { text: zh ? '营业利润率 2%' : '2% operating margin', size: 29, weight: 400, color: NOTE },
            { text: zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ], 'end'),
        ],
      },
      new_businesses: {
        blocks: [
          block(450, 1155, [
            { text: '$value', size: 40, weight: 400 },
            { text: zh ? '同比 +214%' : '+214% Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
          block(224, 1233, [
            { text: zh ? '新业务' : 'New businesses', size: 40, weight: 800, color: SOURCE_LABEL },
            { text: zh ? '营业利润率 (101%)' : '(101%) operating margin', size: 29, weight: 400, color: NOTE },
            { text: zh ? '同比 (88 个百分点)' : '(88pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
        ],
      },
      gross_revenue: { blocks: [] },
      revenue: {
        blocks: [
          block(1196, 503, [
            { text: zh ? '收入' : 'Revenue', size: 40, weight: 800, color: SOURCE_LABEL },
            { text: '$value', size: 40, weight: 400, color: SOURCE_LABEL },
            { text: zh ? '同比 +15%' : '+15% Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
        ],
      },
      intersegment_eliminations: {
        blocks: [
          block(1196, 1235, [
            { text: zh ? '分部间' : 'Intrasegment', size: 34, weight: 800, color: RED_LABEL },
            { text: zh ? '抵销' : 'eliminations', size: 34, weight: 800, color: RED_LABEL },
            { text: '$value', size: 32, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
      gross_profit: {
        blocks: [
          block(1569, 353, [
            { text: zh ? '毛利润' : 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: zh ? '利润率 17%' : '17% margin', size: 29, weight: 400, color: NOTE },
            { text: zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
        ],
      },
      cost_of_revenue: {
        blocks: [
          block(1570, 1169, [
            { text: zh ? '收入' : 'Cost of', size: 40, weight: 800, color: RED_LABEL },
            { text: zh ? '成本' : 'revenue', size: 40, weight: 800, color: RED_LABEL },
            { text: '$value', size: 40, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
      operating_loss: {
        blocks: [
          block(1815, 815, [
            { text: zh ? '营业' : 'Operating', size: 40, weight: 800, color: RED_LABEL },
            { text: zh ? '亏损' : 'loss', size: 40, weight: 800, color: RED_LABEL },
            { text: '$value', size: 40, weight: 400, color: RED_LABEL },
            { text: zh ? '利润率 (0%)' : '(0%) margin', size: 29, weight: 400, color: NOTE },
            { text: zh ? '同比 (5 个百分点)' : '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ]),
        ],
      },
      operating_expenses: {
        blocks: [
          block(1944, 490, [
            { text: zh ? '运营' : 'Operating', size: 40, weight: 800, color: RED_LABEL },
            { text: zh ? '费用' : 'expenses', size: 40, weight: 800, color: RED_LABEL },
            { text: '$value', size: 40, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
      fulfillment: {
        blocks: [
          block(RIGHT_LABEL_X, 513, [
            { text: zh ? '履约' : 'Fulfillment', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
      marketing: {
        blocks: [
          block(RIGHT_LABEL_X, 695, [
            { text: zh ? '营销' : 'Marketing', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
      rnd: {
        blocks: [
          block(RIGHT_LABEL_X, 860, [
            { text: zh ? '研发' : 'R&D', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
      ga: {
        blocks: [
          block(RIGHT_LABEL_X, 1005, [
            { text: zh ? '管理' : 'General &', size: 31, weight: 800, color: RED_LABEL },
            { text: zh ? '费用' : 'admin', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ]),
        ],
      },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'jd-com-q3-fy25',
    name: 'JD.com · Q3 FY25',
    company: 'JD.com',
    meta: {
      company: 'JD.com',
      title: 'JD.com Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/jd-com-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2160,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: {
        mode: 'error',
        // On these three aggregation faces the Source paints adjacent
        // same-colour ribbons as one continuous interval. Audit the intended
        // full-face occupancy instead of trying to recover invisible seams.
        fullFaceIds: ['gross_revenue:left', 'revenue:right', 'operating_expenses:right'],
      },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: SOURCE_NODE, label: SOURCE_LABEL },
        hub: { node: SOURCE_NODE, label: SOURCE_LABEL },
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
      scale: 9.0,
      nodes: {
        jd_retail: { x: 414, y: 453, width: 71, height: 337 },
        jd_logistics: { x: 414, y: 1019, width: 71, height: 72 },
        new_businesses: { x: 414, y: 1245, width: 71, height: 19 },
        gross_revenue: { x: 788, y: 538, width: 70, height: 433 },
        revenue: { x: 1162, y: 642, width: 70, height: 403 },
        intersegment_eliminations: { x: 1162, y: 1184, width: 70, height: 29 },
        gross_profit: { x: 1535, y: 532, width: 71, height: 66 },
        cost_of_revenue: { x: 1535, y: 815, width: 71, height: 333 },
        operating_loss: { x: 1777, y: 788, width: 72, height: 2 },
        operating_expenses: { x: 1909, y: 642, width: 71, height: 68 },
        fulfillment: { x: 2282, y: 531, width: 71, height: 27 },
        marketing: { x: 2282, y: 712, width: 71, height: 26 },
        rnd: { x: 2282, y: 887, width: 71, height: 5 },
        ga: { x: 2282, y: 1056, width: 71, height: 1 },
      },
      labels: makeLabels('en'),
    },
    nodes: [
      { id: 'jd_retail', col: 0, order: 0, type: 'source', label: 'JD Retail', value: 35.2, notes: ['+11% Y/Y', '6% operating margin', '+1pp Y/Y'], color: SOURCE_NODE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'jd_logistics', col: 0, order: 1, type: 'source', label: 'JD Logistics', value: 7.7, notes: ['+24% Y/Y', '2% operating margin', '(2pp) Y/Y'], color: SOURCE_NODE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'new_businesses', col: 0, order: 2, type: 'source', label: 'New Businesses', value: 2.2, notes: ['+214% Y/Y', '(101%) operating margin', '(88pp) Y/Y'], color: SOURCE_NODE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 45.1, color: SOURCE_NODE, labelColor: SOURCE_LABEL },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 42.0, notes: ['+15% Y/Y'], color: SOURCE_NODE, labelColor: SOURCE_LABEL },
      { id: 'intersegment_eliminations', col: 2, order: 1, type: 'cost', label: ['Intrasegment', 'eliminations'], value: -3.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.1, notes: ['17% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 34.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 4, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -0.1, notes: ['(0%) margin', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 7.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'fulfillment', col: 6, order: 0, type: 'cost', label: 'Fulfillment', value: 3.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 6, order: 1, type: 'cost', label: 'Marketing', value: 3.0, valueText: '($3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 3, type: 'cost', label: 'General & admin', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'jd_retail', target: 'gross_revenue', value: 35.2, sourceWidth: 337, targetWidth: 337, y0: 621.5, y1: 706.5, targetOrder: 0 },
      { source: 'jd_logistics', target: 'gross_revenue', value: 7.7, sourceWidth: 72, targetWidth: 77, y0: 1055, y1: 913.5, targetOrder: 1 },
      { source: 'new_businesses', target: 'gross_revenue', value: 2.2, sourceWidth: 19, targetWidth: 19, y0: 1254.5, y1: 961.5, targetOrder: 2 },
      { source: 'gross_revenue', target: 'revenue', value: 42.0, sourceWidth: 404, targetWidth: 403, y0: 740, y1: 843.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'intersegment_eliminations', value: 3.1, sourceWidth: 29, targetWidth: 29, y0: 956.5, y1: 1198.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 7.1, sourceWidth: 66, targetWidth: 66, y0: 675, y1: 565, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 34.9, sourceWidth: 337, targetWidth: 333, y0: 876.5, y1: 981.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.1, sourceWidth: 66, targetWidth: 66, y0: 565, y1: 675, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss',
        target: 'operating_expenses',
        value: 0.1,
        sourceWidth: 2,
        targetWidth: 2,
        y0: 789,
        y1: 709,
        sourceOrder: 0,
        targetOrder: 1,
        linkTint: RED_LINK,
        curve: { x0: 1849, x1: 1909, c1x: 1878, c2x: 1884, c1y: 789, c2y: 709 },
      },
      { source: 'operating_expenses', target: 'fulfillment', value: 3.1, sourceWidth: 27, targetWidth: 27, y0: 655.5, y1: 544.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 3.0, sourceWidth: 26, targetWidth: 26, y0: 682, y1: 725, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 10, targetWidth: 5, y0: 700, y1: 889.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 5, targetWidth: 1, y0: 707.5, y1: 1056.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'JD.com · 2025 财年第三季度',
        meta: {
          title: 'JD.com 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
        },
        nodes: {
          jd_retail: { label: '京东零售', notes: ['同比 +11%', '营业利润率 6%', '同比 +1 个百分点'] },
          jd_logistics: { label: '京东物流', notes: ['同比 +24%', '营业利润率 2%', '同比 (2 个百分点)'] },
          new_businesses: { label: '新业务', notes: ['同比 +214%', '营业利润率 (101%)', '同比 (88 个百分点)'] },
          gross_revenue: { label: '' },
          revenue: { label: '收入', notes: ['同比 +15%'] },
          intersegment_eliminations: { label: '分部间抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 17%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (0%)', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          fulfillment: { label: '履约' },
          marketing: { label: '营销' },
          rnd: { label: '研发' },
          ga: { label: '管理费用' },
        },
        layout: {
          labels: makeLabels('zh'),
        },
      },
    },
  });
})();
