/* ====================================================================
 * Match Group - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/match-group-q4-fy25.png as a fixed
 * d3-sankey layout with validated runtime raster brand annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const BLUE = '#0065ff';
  const TINDER = '#fd3776';
  const TINDER_LINK = '#f69dba';
  const GRAY_LINK = '#858585';
  const ASIA = '#4de0e7';
  const ASIA_LINK = '#a8e9ed';
  const ORANGE = '#ff740f';
  const ORANGE_LINK = '#f7b88c';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_X = 2508;

  const labelsEn = {
    tinder: {
      blocks: [
        { x: 463, top: 265, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: TINDER },
          { text: '(3%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 411, top: 439, anchor: 'end', lines: [{ text: 'Tinder', size: 40, weight: 800, color: TINDER }] },
      ],
    },
    hinge: {
      blocks: [
        { x: 462, top: 603, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+26% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 413, top: 711, anchor: 'end', lines: [{ text: 'Hinge', size: 40, weight: 800 }] },
      ],
    },
    asia: {
      blocks: [
        { x: 463, top: 816, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: ASIA },
          { text: '(2%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 413, top: 902, anchor: 'end', lines: [{ text: 'Asia', size: 40, weight: 800, color: ASIA }] },
      ],
    },
    evergreen_emerging: {
      blocks: [
        { x: 458, top: 984, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: '#ff6f69' },
          { text: '(7%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 411, top: 1082, anchor: 'end', lineGap: 5, lines: [
          { text: 'Evergreen', size: 39, weight: 800, color: ORANGE },
          { text: '& Emerging', size: 39, weight: 800, color: ORANGE },
        ] },
      ],
    },
    indirect: {
      blocks: [
        { x: 457, top: 1191, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 402, top: 1248, anchor: 'end', lines: [{ text: 'Indirect', size: 39, weight: 800 }] },
      ],
    },
    revenue: {
      blocks: [{ x: 924, top: 455, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Revenue', size: 40, weight: 800, color: BLUE },
        { text: '$value', size: 39, weight: 400, color: BLUE },
        { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1392, top: 302, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Gross profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '75% margin', size: 29, weight: 400, color: NOTE },
        { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1392, top: 1073, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Cost of', size: 34, weight: 800, color: RED_LABEL },
        { text: 'revenue', size: 34, weight: 800, color: RED_LABEL },
        { text: '$value', size: 34, weight: 400, color: RED_LABEL },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1859, top: 211, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Operating profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '32% margin', size: 29, weight: 400, color: NOTE },
        { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1859, top: 875, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Operating', size: 38, weight: 800, color: RED_LABEL },
        { text: 'expenses', size: 38, weight: 800, color: RED_LABEL },
        { text: '$value', size: 36, weight: 400, color: RED_LABEL },
      ] }],
    },
    net_profit: {
      blocks: [{ x: RIGHT_X, top: 290, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Net profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '24% margin', size: 29, weight: 400, color: NOTE },
        { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    tax: {
      blocks: [{ x: RIGHT_X, top: 515, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Tax', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    other_non_operating: {
      blocks: [{ x: RIGHT_X, top: 611, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Other', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    sm: {
      blocks: [{ x: RIGHT_X, top: 761, anchor: 'middle', lineGap: 9, lines: [
        { text: 'S&M ($151M)', size: 31, weight: 800, color: RED_LABEL },
        { text: '17% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    product: {
      blocks: [{ x: RIGHT_X, top: 899, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Product ($109M)', size: 31, weight: 800, color: RED_LABEL },
        { text: '12% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    ga: {
      blocks: [{ x: RIGHT_X, top: 1039, anchor: 'middle', lineGap: 9, lines: [
        { text: 'G&A ($89M)', size: 31, weight: 800, color: RED_LABEL },
        { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    da: {
      blocks: [{ x: RIGHT_X, top: 1171, anchor: 'middle', lineGap: 9, lines: [
        { text: 'D&A ($12M)', size: 31, weight: 800, color: RED_LABEL },
        { text: '1% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    other_operating: {
      blocks: [{ x: RIGHT_X, top: 1304, anchor: 'middle', lines: [
        { text: 'Other ($9M)', size: 31, weight: 800, color: RED_LABEL },
      ] }],
    },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, block, texts) => {
    labelsZh[id].blocks[block].lines.forEach((line, index) => { line.text = texts[index]; });
  };
  setLines('tinder', 0, ['$value', '同比 (3%)']);
  setLines('hinge', 0, ['$value', '同比 +26%']);
  setLines('asia', 0, ['$value', '同比 (2%)']);
  setLines('asia', 1, ['亚洲']);
  setLines('evergreen_emerging', 0, ['$value', '同比 (7%)']);
  setLines('evergreen_emerging', 1, ['常青与', '新兴品牌']);
  setLines('indirect', 0, ['$value', '同比 +19%']);
  setLines('indirect', 1, ['间接收入']);
  setLines('revenue', 0, ['收入', '$value', '同比 +2%']);
  setLines('gross_profit', 0, ['毛利润', '$value', '利润率 75%', '同比 +2 个百分点']);
  setLines('cost_of_revenue', 0, ['收入', '成本', '$value']);
  setLines('operating_profit', 0, ['营业利润', '$value', '利润率 32%', '同比 +6 个百分点']);
  setLines('operating_expenses', 0, ['运营', '费用', '$value']);
  setLines('net_profit', 0, ['净利润', '$value', '利润率 24%', '同比 +5 个百分点']);
  setLines('tax', 0, ['税费', '$value']);
  setLines('other_non_operating', 0, ['其他', '$value']);
  setLines('sm', 0, ['销售与市场（$151M）', '占收入 17%', '同比 +0 个百分点']);
  setLines('product', 0, ['产品开发（$109M）', '占收入 12%', '同比 (0 个百分点)']);
  setLines('ga', 0, ['管理费用（$89M）', '占收入 10%', '同比 (3 个百分点)']);
  setLines('da', 0, ['折旧及摊销（$12M）', '占收入 1%', '同比 (0 个百分点)']);
  setLines('other_operating', 0, ['其他（$9M）']);
  ['sm', 'product', 'ga', 'da'].forEach((id) => {
    labelsZh[id].blocks[0].lines[0].size = 27;
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'match-group-q4-fy25',
    name: 'Match Group · Q4 FY25',
    company: 'Match Group',
    meta: {
      company: 'Match Group',
      title: 'Match Group Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/match-group-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 800,
      titleTextLength: 2511,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'match-group-company-logo', href: 'data/assets/raster-annotations/match-group/company-logo-q4-fy25.png', x: 760, y: 240, width: 320, height: 205 },
      { key: 'match-group-brand-tinder', href: 'data/assets/raster-annotations/match-group/brand-tinder-q4-fy25.png', x: 96, y: 360, width: 182, height: 190 },
      { key: 'match-group-brand-hinge', href: 'data/assets/raster-annotations/match-group/brand-hinge-q4-fy25.png', x: 108, y: 650, width: 158, height: 158 },
      { key: 'match-group-brand-asia-cluster', href: 'data/assets/raster-annotations/match-group/brand-asia-cluster-q4-fy25.png', x: 35, y: 855, width: 280, height: 115 },
      { key: 'match-group-brand-evergreen-emerging-cluster', href: 'data/assets/raster-annotations/match-group/brand-evergreen-emerging-cluster-q4-fy25.png', x: 4, y: 1018, width: 190, height: 150 },
    ],
    layout: {
      scale: 0.387,
      nodes: {
        tinder: { x: 422, y: 364, width: 71, height: 179 },
        hinge: { x: 422, y: 703, width: 71, height: 70 },
        asia: { x: 422, y: 917, width: 71, height: 22 },
        evergreen_emerging: { x: 422, y: 1083, width: 71, height: 54 },
        indirect: { x: 422, y: 1283, width: 71, height: 5 },
        revenue: { x: 889, y: 609, width: 70, height: 340 },
        gross_profit: { x: 1356, y: 492, width: 71, height: 254 },
        cost_of_revenue: { x: 1356, y: 970, width: 71, height: 85 },
        operating_profit: { x: 1824, y: 404, width: 70, height: 108 },
        operating_expenses: { x: 1824, y: 716, width: 70, height: 143 },
        net_profit: { x: 2290, y: 315, width: 71, height: 79 },
        tax: { x: 2290, y: 545, width: 71, height: 15 },
        other_non_operating: { x: 2290, y: 648, width: 71, height: 8 },
        sm: { x: 2290, y: 776, width: 71, height: 57 },
        product: { x: 2290, y: 928, width: 71, height: 40 },
        ga: { x: 2290, y: 1065, width: 71, height: 33 },
        da: { x: 2290, y: 1200, width: 71, height: 3 },
        other_operating: { x: 2290, y: 1317, width: 71, height: 1 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'tinder', col: 0, order: 0, type: 'source', label: 'Tinder', value: 464, valueText: '$464M', notes: ['(3%) Y/Y'], color: TINDER, labelColor: TINDER, linkTint: TINDER_LINK },
      { id: 'hinge', col: 0, order: 1, type: 'source', label: 'Hinge', value: 187, valueText: '$187M', notes: ['+26% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'asia', col: 0, order: 2, type: 'source', label: 'Asia', value: 66, valueText: '$66M', notes: ['(2%) Y/Y'], color: ASIA, labelColor: ASIA, linkTint: ASIA_LINK },
      { id: 'evergreen_emerging', col: 0, order: 3, type: 'source', label: ['Evergreen', '& Emerging'], value: 145, valueText: '$145M', notes: ['(7%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'indirect', col: 0, order: 4, type: 'source', label: 'Indirect', value: 18, valueText: '$18M', notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 878, valueText: '$878M', notes: ['+2% Y/Y'], color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 656, valueText: '$656M', notes: ['75% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 222, valueText: '($222M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 285, valueText: '$285M', notes: ['32% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 371, valueText: '($371M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 210, valueText: '$210M', notes: ['24% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 45, valueText: '($45M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_non_operating', col: 4, order: 2, type: 'cost', label: 'Other', value: 30, valueText: '($30M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 3, type: 'cost', label: 'S&M', value: 151, valueText: '($151M)', notes: ['17% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 4, order: 4, type: 'cost', label: 'Product', value: 109, valueText: '($109M)', notes: ['12% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 5, type: 'cost', label: 'G&A', value: 89, valueText: '($89M)', notes: ['10% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 4, order: 6, type: 'cost', label: 'D&A', value: 12, valueText: '($12M)', notes: ['1% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 4, order: 7, type: 'cost', label: 'Other', value: 9, valueText: '($9M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'tinder', target: 'revenue', value: 464, sourceWidth: 179, targetWidth: 179, y0: 453.5, y1: 698.5, linkTint: TINDER_LINK },
      { source: 'hinge', target: 'revenue', value: 187, sourceWidth: 70, targetWidth: 72, y0: 738, y1: 824, linkTint: GRAY_LINK },
      { source: 'asia', target: 'revenue', value: 66, sourceWidth: 22, targetWidth: 27, y0: 928, y1: 873.5, linkTint: ASIA_LINK },
      { source: 'evergreen_emerging', target: 'revenue', value: 145, sourceWidth: 54, targetWidth: 57, y0: 1110, y1: 915.5, linkTint: ORANGE_LINK },
      { source: 'indirect', target: 'revenue', value: 18, sourceWidth: 5, targetWidth: 5, y0: 1285.5, y1: 946.5, linkTint: GRAY_LINK },

      { source: 'revenue', target: 'gross_profit', value: 656, sourceWidth: 254, targetWidth: 254, y0: 736, y1: 619, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 222, sourceWidth: 86, targetWidth: 85, y0: 906, y1: 1012.5, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 285, sourceWidth: 110, targetWidth: 108, y0: 547, y1: 458, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 371, sourceWidth: 144, targetWidth: 143, y0: 674, y1: 787.5, linkTint: RED_LINK },

      { source: 'operating_profit', target: 'net_profit', value: 210, sourceWidth: 80, targetWidth: 79, y0: 444, y1: 354.5, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 45, sourceWidth: 17, targetWidth: 15, y0: 492.5, y1: 552.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_non_operating', value: 30, sourceWidth: 11, targetWidth: 8, y0: 506.5, y1: 652, linkTint: RED_LINK },

      { source: 'operating_expenses', target: 'sm', value: 151, sourceWidth: 59, targetWidth: 57, y0: 745.5, y1: 804.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'product', value: 109, sourceWidth: 42, targetWidth: 40, y0: 796, y1: 948, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 89, sourceWidth: 34, targetWidth: 33, y0: 834, y1: 1081.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 12, sourceWidth: 5, targetWidth: 3, y0: 853.5, y1: 1201.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 9, sourceWidth: 3, targetWidth: 1, y0: 857.5, y1: 1317.5, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Match Group · 2025 财年第四季度',
        meta: {
          title: 'Match Group 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1500,
        },
        nodes: {
          tinder: { label: 'Tinder', notes: ['同比 (3%)'] },
          hinge: { label: 'Hinge', notes: ['同比 +26%'] },
          asia: { label: '亚洲', notes: ['同比 (2%)'] },
          evergreen_emerging: { label: ['常青与', '新兴品牌'], notes: ['同比 (7%)'] },
          indirect: { label: '间接收入', notes: ['同比 +19%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 75%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 24%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
          other_non_operating: { label: '其他' },
          sm: { label: '销售与市场', notes: ['占收入 17%', '同比 +0 个百分点'] },
          product: { label: '产品开发', notes: ['占收入 12%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 (3 个百分点)'] },
          da: { label: '折旧及摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
          other_operating: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
