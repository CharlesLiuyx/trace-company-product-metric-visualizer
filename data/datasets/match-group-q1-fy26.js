/* Match Group — Q1 FY26 income statement ($M), measured against the source. */
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
  const RIGHT_X = 2521;

  const labelsEn = {
    tinder: {
      blocks: [
        { x: 477, top: 266, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: TINDER },
          { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 411, top: 441, anchor: 'end', lines: [{ text: 'Tinder', size: 40, weight: 800, color: TINDER }] },
      ],
    },
    hinge: {
      blocks: [
        { x: 475, top: 606, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+28% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 411, top: 718, anchor: 'end', lines: [{ text: 'Hinge', size: 40, weight: 800 }] },
      ],
    },
    asia: {
      blocks: [
        { x: 477, top: 822, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: ASIA },
          { text: '(7%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 413, top: 909, anchor: 'end', lines: [{ text: 'Asia', size: 40, weight: 800, color: ASIA }] },
      ],
    },
    evergreen_emerging: {
      blocks: [
        { x: 472, top: 978, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: '#ff7d78' },
          { text: '(7%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 414, top: 1039, anchor: 'end', lineGap: 5, lines: [
          { text: 'Evergreen', size: 39, weight: 800, color: ORANGE },
          { text: '& Emerging', size: 39, weight: 800, color: ORANGE },
        ] },
      ],
    },
    indirect: {
      blocks: [
        { x: 471, top: 1174, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '(14%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 398, top: 1245, anchor: 'end', lines: [{ text: 'Indirect', size: 39, weight: 800 }] },
      ],
    },
    revenue: {
      blocks: [{ x: 940, top: 455, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Revenue', size: 40, weight: 800, color: BLUE },
        { text: '$value', size: 39, weight: 400, color: BLUE },
        { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1410, top: 336, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Gross profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '76% margin', size: 29, weight: 400, color: NOTE },
        { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1409, top: 1124, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Cost of', size: 34, weight: 800, color: RED_LABEL },
        { text: 'revenue', size: 34, weight: 800, color: RED_LABEL },
        { text: '$value', size: 34, weight: 400, color: RED_LABEL },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1870, top: 239, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Operating profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '27% margin', size: 29, weight: 400, color: NOTE },
        { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1872, top: 936, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Operating', size: 38, weight: 800, color: RED_LABEL },
        { text: 'expenses', size: 38, weight: 800, color: RED_LABEL },
        { text: '$value', size: 36, weight: 400, color: RED_LABEL },
      ] }],
    },
    net_profit: {
      blocks: [{ x: RIGHT_X, top: 282, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Net profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '19% margin', size: 29, weight: 400, color: NOTE },
        { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    other_non_operating: {
      blocks: [{ x: RIGHT_X, top: 515, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Other', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    tax: {
      blocks: [{ x: RIGHT_X, top: 650, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Tax', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    sm: {
      blocks: [{ x: RIGHT_X, top: 804, anchor: 'middle', lineGap: 9, lines: [
        { text: 'S&M ($163M)', size: 31, weight: 800, color: RED_LABEL },
        { text: '19% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    product: {
      blocks: [{ x: RIGHT_X, top: 967, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Product ($117M)', size: 31, weight: 800, color: RED_LABEL },
        { text: '14% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    ga: {
      blocks: [{ x: RIGHT_X, top: 1130, anchor: 'middle', lineGap: 9, lines: [
        { text: 'G&A ($89M)', size: 31, weight: 800, color: RED_LABEL },
        { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    da: {
      blocks: [{ x: RIGHT_X, top: 1278, anchor: 'middle', lineGap: 9, lines: [
        { text: 'D&A ($48M)', size: 31, weight: 800, color: RED_LABEL },
        { text: '6% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, block, texts) => {
    labelsZh[id].blocks[block].lines.forEach((line, index) => { line.text = texts[index]; });
  };
  setLines('tinder', 0, ['$value', '同比 +2%']);
  setLines('hinge', 0, ['$value', '同比 +28%']);
  setLines('asia', 0, ['$value', '同比 (7%)']);
  setLines('asia', 1, ['亚洲']);
  setLines('evergreen_emerging', 0, ['$value', '同比 (7%)']);
  setLines('evergreen_emerging', 1, ['常青与', '新兴品牌']);
  setLines('indirect', 0, ['$value', '同比 (14%)']);
  setLines('indirect', 1, ['间接收入']);
  setLines('revenue', 0, ['收入', '$value', '同比 +4%']);
  setLines('gross_profit', 0, ['毛利润', '$value', '利润率 76%', '同比 +4 个百分点']);
  setLines('cost_of_revenue', 0, ['收入', '成本', '$value']);
  setLines('operating_profit', 0, ['营业利润', '$value', '利润率 27%', '同比 +7 个百分点']);
  setLines('operating_expenses', 0, ['运营', '费用', '$value']);
  setLines('net_profit', 0, ['净利润', '$value', '利润率 19%', '同比 +5 个百分点']);
  setLines('other_non_operating', 0, ['其他', '$value']);
  setLines('tax', 0, ['税费', '$value']);
  setLines('sm', 0, ['销售与市场（$163M）', '占收入 19%', '同比 (0 个百分点)']);
  setLines('product', 0, ['产品开发（$117M）', '占收入 14%', '同比 (1 个百分点)']);
  setLines('ga', 0, ['管理费用（$89M）', '占收入 10%', '同比 (3 个百分点)']);
  setLines('da', 0, ['折旧及摊销（$48M）', '占收入 6%', '同比 +2 个百分点']);
  ['sm', 'product', 'ga', 'da'].forEach((id) => { labelsZh[id].blocks[0].lines[0].size = 27; });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'match-group-q1-fy26',
    name: 'Match Group · Q1 FY26',
    company: 'Match Group',
    meta: {
      company: 'Match Group',
      title: 'Match Group Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/match-group-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 800,
      titleTextLength: 2511,
      hidePeriodStamp: true,
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
      { key: 'match-group-company-logo-q1-fy26', href: 'data/assets/raster-annotations/match-group/company-logo-q1-fy26.png', x: 772, y: 250, width: 315, height: 210 },
      { key: 'match-group-brand-tinder-q1-fy26', href: 'data/assets/raster-annotations/match-group/brand-tinder-q1-fy26.png', x: 96, y: 360, width: 182, height: 190 },
      { key: 'match-group-brand-hinge-q1-fy26', href: 'data/assets/raster-annotations/match-group/brand-hinge-q1-fy26.png', x: 108, y: 656, width: 158, height: 158 },
      { key: 'match-group-brand-asia-cluster-q1-fy26', href: 'data/assets/raster-annotations/match-group/brand-asia-cluster-q1-fy26.png', x: 35, y: 855, width: 280, height: 115 },
      { key: 'match-group-brand-evergreen-emerging-cluster-q1-fy26', href: 'data/assets/raster-annotations/match-group/brand-evergreen-emerging-cluster-q1-fy26.png', x: 4, y: 1018, width: 190, height: 150 },
    ],
    layout: {
      scale: 0.406,
      nodes: {
        tinder: { x: 438, y: 364, width: 71, height: 184 },
        hinge: { x: 438, y: 704, width: 71, height: 78 },
        asia: { x: 438, y: 922, width: 71, height: 21 },
        evergreen_emerging: { x: 438, y: 1073, width: 71, height: 55 },
        indirect: { x: 438, y: 1265, width: 71, height: 5 },
        revenue: { x: 905, y: 607, width: 70, height: 351 },
        gross_profit: { x: 1369, y: 527, width: 72, height: 265 },
        cost_of_revenue: { x: 1372, y: 1022, width: 71, height: 85 },
        operating_profit: { x: 1840, y: 429, width: 70, height: 95 },
        operating_expenses: { x: 1837, y: 752, width: 70, height: 167 },
        net_profit: { x: 2306, y: 313, width: 71, height: 66 },
        other_non_operating: { x: 2306, y: 550, width: 71, height: 12 },
        tax: { x: 2306, y: 683, width: 71, height: 13 },
        sm: { x: 2306, y: 828, width: 71, height: 65 },
        product: { x: 2306, y: 1001, width: 71, height: 46 },
        ga: { x: 2306, y: 1141, width: 71, height: 34 },
        da: { x: 2306, y: 1287, width: 71, height: 18 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'tinder', col: 0, order: 0, type: 'source', label: 'Tinder', value: 455, valueText: '$455M', notes: ['+2% Y/Y'], color: TINDER, labelColor: TINDER, linkTint: TINDER_LINK },
      { id: 'hinge', col: 0, order: 1, type: 'source', label: 'Hinge', value: 194, valueText: '$194M', notes: ['+28% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'asia', col: 0, order: 2, type: 'source', label: 'Asia', value: 60, valueText: '$60M', notes: ['(7%) Y/Y'], color: ASIA, labelColor: ASIA, linkTint: ASIA_LINK },
      { id: 'evergreen_emerging', col: 0, order: 3, type: 'source', label: ['Evergreen', '& Emerging'], value: 139, valueText: '$139M', notes: ['(7%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'indirect', col: 0, order: 4, type: 'source', label: 'Indirect', value: 16, valueText: '$16M', notes: ['(14%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 864, valueText: '$864M', notes: ['+4% Y/Y'], color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 653, valueText: '$653M', notes: ['76% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 211, valueText: '($211M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 236, valueText: '$236M', notes: ['27% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 417, valueText: '($417M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 167, valueText: '$167M', notes: ['19% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_non_operating', col: 4, order: 1, type: 'cost', label: 'Other', value: 36, valueText: '($36M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 34, valueText: '($34M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 3, type: 'cost', label: 'S&M', value: 163, valueText: '($163M)', notes: ['19% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 4, order: 4, type: 'cost', label: 'Product', value: 117, valueText: '($117M)', notes: ['14% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 5, type: 'cost', label: 'G&A', value: 89, valueText: '($89M)', notes: ['10% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 4, order: 6, type: 'cost', label: 'D&A', value: 48, valueText: '($48M)', notes: ['6% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'tinder', target: 'revenue', value: 455, sourceWidth: 184, targetWidth: 184, y0: 456, y1: 699, linkTint: TINDER_LINK },
      { source: 'hinge', target: 'revenue', value: 194, sourceWidth: 78, targetWidth: 80, y0: 743, y1: 831, linkTint: GRAY_LINK },
      { source: 'asia', target: 'revenue', value: 60, sourceWidth: 21, targetWidth: 25, y0: 932.5, y1: 883.5, linkTint: ASIA_LINK },
      { source: 'evergreen_emerging', target: 'revenue', value: 139, sourceWidth: 55, targetWidth: 56, y0: 1100.5, y1: 924, linkTint: ORANGE_LINK },
      { source: 'indirect', target: 'revenue', value: 16, sourceWidth: 5, targetWidth: 6, y0: 1267.5, y1: 955, linkTint: GRAY_LINK },

      { source: 'revenue', target: 'gross_profit', value: 653, sourceWidth: 265, targetWidth: 265, y0: 739.5, y1: 659.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 211, sourceWidth: 86, targetWidth: 85, y0: 915, y1: 1064.5, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 236, sourceWidth: 95, targetWidth: 95, y0: 574.5, y1: 476.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 417, sourceWidth: 170, targetWidth: 167, y0: 707, y1: 835.5, linkTint: RED_LINK },

      { source: 'operating_profit', target: 'net_profit', value: 167, sourceWidth: 66, targetWidth: 66, y0: 462, y1: 346, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other_non_operating', value: 36, sourceWidth: 14, targetWidth: 12, y0: 502, y1: 556, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 34, sourceWidth: 15, targetWidth: 13, y0: 516.5, y1: 689.5, linkTint: RED_LINK },

      { source: 'operating_expenses', target: 'sm', value: 163, sourceWidth: 65, targetWidth: 65, y0: 784.5, y1: 860.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'product', value: 117, sourceWidth: 47, targetWidth: 46, y0: 840.5, y1: 1024, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 89, sourceWidth: 36, targetWidth: 34, y0: 882, y1: 1158, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 48, sourceWidth: 19, targetWidth: 18, y0: 909.5, y1: 1296, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Match Group · 2026 财年第一季度',
        meta: {
          title: 'Match Group 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1500,
        },
        nodes: {
          tinder: { label: 'Tinder', notes: ['同比 +2%'] },
          hinge: { label: 'Hinge', notes: ['同比 +28%'] },
          asia: { label: '亚洲', notes: ['同比 (7%)'] },
          evergreen_emerging: { label: ['常青与', '新兴品牌'], notes: ['同比 (7%)'] },
          indirect: { label: '间接收入', notes: ['同比 (14%)'] },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 +7 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 19%', '同比 +5 个百分点'] },
          other_non_operating: { label: '其他' },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 19%', '同比 (0 个百分点)'] },
          product: { label: '产品开发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 (3 个百分点)'] },
          da: { label: '折旧及摊销', notes: ['占收入 6%', '同比 +2 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
