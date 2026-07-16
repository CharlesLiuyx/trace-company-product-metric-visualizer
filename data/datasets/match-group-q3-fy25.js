/* Match Group — Q3 FY25 income statement ($M), measured against the source. */
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
        { x: 462, top: 610, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+27% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 413, top: 721, anchor: 'end', lines: [{ text: 'Hinge', size: 40, weight: 800 }] },
      ],
    },
    asia: {
      blocks: [
        { x: 463, top: 817, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: ASIA },
          { text: '(4%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 414, top: 902, anchor: 'end', lines: [{ text: 'Asia', size: 40, weight: 800, color: ASIA }] },
      ],
    },
    evergreen_emerging: {
      blocks: [
        { x: 458, top: 1004, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400, color: '#ff7d78' },
          { text: '(4%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 414, top: 1107, anchor: 'end', lineGap: 5, lines: [
          { text: 'Evergreen', size: 39, weight: 800, color: ORANGE },
          { text: '& Emerging', size: 39, weight: 800, color: ORANGE },
        ] },
      ],
    },
    indirect: {
      blocks: [
        { x: 457, top: 1215, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 402, top: 1280, anchor: 'end', lines: [{ text: 'Indirect', size: 39, weight: 800 }] },
      ],
    },
    revenue: {
      blocks: [{ x: 926, top: 444, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Revenue', size: 40, weight: 800, color: BLUE },
        { text: '$value', size: 39, weight: 400, color: BLUE },
        { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1394, top: 324, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Gross profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '73% margin', size: 29, weight: 400, color: NOTE },
        { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1394, top: 1105, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Cost of', size: 34, weight: 800, color: RED_LABEL },
        { text: 'revenue', size: 34, weight: 800, color: RED_LABEL },
        { text: '$value', size: 34, weight: 400, color: RED_LABEL },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1868, top: 230, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Operating profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '24% margin', size: 29, weight: 400, color: NOTE },
        { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1861, top: 910, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Operating', size: 38, weight: 800, color: RED_LABEL },
        { text: 'expenses', size: 38, weight: 800, color: RED_LABEL },
        { text: '$value', size: 36, weight: 400, color: RED_LABEL },
      ] }],
    },
    net_profit: {
      blocks: [{ x: RIGHT_X, top: 291, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Net profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '18% margin', size: 29, weight: 400, color: NOTE },
        { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    tax: {
      blocks: [{ x: RIGHT_X - 4, top: 510, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Tax', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    other_non_operating: {
      blocks: [{ x: RIGHT_X - 5, top: 625, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Other', size: 32, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    sm: {
      blocks: [{ x: RIGHT_X, top: 806, anchor: 'middle', lineGap: 9, lines: [
        { text: 'S&M ($169M)', size: 31, weight: 800, color: RED_LABEL },
        { text: '19% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    ga: {
      blocks: [{ x: RIGHT_X, top: 974, anchor: 'middle', lineGap: 9, lines: [
        { text: 'G&A ($148M)', size: 31, weight: 800, color: RED_LABEL },
        { text: '16% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    product: {
      blocks: [{ x: RIGHT_X, top: 1134, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Product ($105M)', size: 31, weight: 800, color: RED_LABEL },
        { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    da: {
      blocks: [{ x: RIGHT_X, top: 1280, anchor: 'middle', lineGap: 9, lines: [
        { text: 'D&A ($24M)', size: 31, weight: 800, color: RED_LABEL },
        { text: '3% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, block, texts) => {
    labelsZh[id].blocks[block].lines.forEach((line, index) => { line.text = texts[index]; });
  };
  setLines('tinder', 0, ['$value', '同比 (3%)']);
  setLines('hinge', 0, ['$value', '同比 +27%']);
  setLines('asia', 0, ['$value', '同比 (4%)']);
  setLines('asia', 1, ['亚洲']);
  setLines('evergreen_emerging', 0, ['$value', '同比 (4%)']);
  setLines('evergreen_emerging', 1, ['常青与', '新兴品牌']);
  setLines('indirect', 0, ['$value', '同比 +8%']);
  setLines('indirect', 1, ['间接收入']);
  setLines('revenue', 0, ['收入', '$value', '同比 +2%']);
  setLines('gross_profit', 0, ['毛利润', '$value', '利润率 73%', '同比 +1 个百分点']);
  setLines('cost_of_revenue', 0, ['收入', '成本', '$value']);
  setLines('operating_profit', 0, ['营业利润', '$value', '利润率 24%', '同比 +1 个百分点']);
  setLines('operating_expenses', 0, ['运营', '费用', '$value']);
  setLines('net_profit', 0, ['净利润', '$value', '利润率 18%', '同比 +2 个百分点']);
  setLines('tax', 0, ['税费', '$value']);
  setLines('other_non_operating', 0, ['其他', '$value']);
  setLines('sm', 0, ['销售与市场（$169M）', '占收入 19%', '同比 +1 个百分点']);
  setLines('ga', 0, ['管理费用（$148M）', '占收入 16%', '同比 +5 个百分点']);
  setLines('product', 0, ['产品开发（$105M）', '占收入 11%', '同比 (0 个百分点)']);
  setLines('da', 0, ['折旧及摊销（$24M）', '占收入 3%', '同比 (0 个百分点)']);
  ['sm', 'ga', 'product', 'da'].forEach((id) => { labelsZh[id].blocks[0].lines[0].size = 27; });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'match-group-q3-fy25',
    name: 'Match Group · Q3 FY25',
    company: 'Match Group',
    meta: {
      company: 'Match Group',
      title: 'Match Group Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/match-group-q3-fy25.png', width: 2667, height: 1500 },
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
      { key: 'match-group-company-logo-q3-fy25', href: 'data/assets/raster-annotations/match-group/company-logo-q4-fy25.png', x: 760, y: 240, width: 320, height: 205 },
      { key: 'match-group-brand-tinder-q3-fy25', href: 'data/assets/raster-annotations/match-group/brand-tinder-q1-fy26.png', x: 96, y: 360, width: 182, height: 190 },
      { key: 'match-group-brand-hinge-q3-fy25', href: 'data/assets/raster-annotations/match-group/brand-hinge-q4-fy25.png', x: 108, y: 661, width: 158, height: 158 },
      { key: 'match-group-brand-asia-cluster-q3-fy25', href: 'data/assets/raster-annotations/match-group/brand-asia-cluster-q4-fy25.png', x: 35, y: 856, width: 280, height: 115 },
      { key: 'match-group-brand-evergreen-emerging-cluster-q3-fy25', href: 'data/assets/raster-annotations/match-group/brand-evergreen-emerging-cluster-q4-fy25.png', x: 4, y: 1030, width: 190, height: 150 },
    ],
    layout: {
      scale: 0.409,
      nodes: {
        tinder: { x: 424, y: 364, width: 71, height: 199 },
        hinge: { x: 424, y: 709, width: 71, height: 74 },
        asia: { x: 424, y: 919, width: 71, height: 27 },
        evergreen_emerging: { x: 424, y: 1097, width: 71, height: 60 },
        indirect: { x: 424, y: 1311, width: 71, height: 5 },
        revenue: { x: 891, y: 593, width: 70, height: 374 },
        gross_profit: { x: 1358, y: 504, width: 71, height: 273 },
        cost_of_revenue: { x: 1358, y: 986, width: 71, height: 99 },
        operating_profit: { x: 1826, y: 413, width: 70, height: 89 },
        operating_expenses: { x: 1826, y: 716, width: 70, height: 181 },
        net_profit: { x: 2292, y: 324, width: 71, height: 64 },
        tax: { x: 2292, y: 545, width: 71, height: 12 },
        other_non_operating: { x: 2292, y: 664, width: 71, height: 9 },
        sm: { x: 2292, y: 793, width: 71, height: 68 },
        ga: { x: 2292, y: 963, width: 71, height: 59 },
        product: { x: 2292, y: 1131, width: 71, height: 41 },
        da: { x: 2292, y: 1298, width: 71, height: 8 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'tinder', col: 0, order: 0, type: 'source', label: 'Tinder', value: 491, valueText: '$491M', notes: ['(3%) Y/Y'], color: TINDER, labelColor: TINDER, linkTint: TINDER_LINK },
      { id: 'hinge', col: 0, order: 1, type: 'source', label: 'Hinge', value: 185, valueText: '$185M', notes: ['+27% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'asia', col: 0, order: 2, type: 'source', label: 'Asia', value: 69, valueText: '$69M', notes: ['(4%) Y/Y'], color: ASIA, labelColor: ASIA, linkTint: ASIA_LINK },
      { id: 'evergreen_emerging', col: 0, order: 3, type: 'source', label: ['Evergreen', '& Emerging'], value: 152, valueText: '$152M', notes: ['(4%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'indirect', col: 0, order: 4, type: 'source', label: 'Indirect', value: 18, valueText: '$18M', notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 914, valueText: '$914M', notes: ['+2% Y/Y'], color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 667, valueText: '$667M', notes: ['73% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 247, valueText: '($247M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 221, valueText: '$221M', notes: ['24% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 446, valueText: '($446M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 161, valueText: '$161M', notes: ['18% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 33, valueText: '($33M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_non_operating', col: 4, order: 2, type: 'cost', label: 'Other', value: 28, valueText: '($28M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 3, type: 'cost', label: 'S&M', value: 169, valueText: '($169M)', notes: ['19% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 148, valueText: '($148M)', notes: ['16% of revenue', '+5pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 4, order: 5, type: 'cost', label: 'Product', value: 105, valueText: '($105M)', notes: ['11% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 4, order: 6, type: 'cost', label: 'D&A', value: 24, valueText: '($24M)', notes: ['3% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'tinder', target: 'revenue', value: 491, sourceWidth: 199, targetWidth: 200, y0: 463.5, y1: 693, linkTint: TINDER_LINK },
      { source: 'hinge', target: 'revenue', value: 185, sourceWidth: 74, targetWidth: 77, y0: 746, y1: 831.5, linkTint: GRAY_LINK },
      { source: 'asia', target: 'revenue', value: 69, sourceWidth: 27, targetWidth: 29, y0: 932.5, y1: 884.5, linkTint: ASIA_LINK },
      { source: 'evergreen_emerging', target: 'revenue', value: 152, sourceWidth: 60, targetWidth: 63, y0: 1127, y1: 930.5, linkTint: ORANGE_LINK },
      { source: 'indirect', target: 'revenue', value: 18, sourceWidth: 5, targetWidth: 5, y0: 1313.5, y1: 964.5, linkTint: GRAY_LINK },

      { source: 'revenue', target: 'gross_profit', value: 667, sourceWidth: 274, targetWidth: 273, y0: 730, y1: 640.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 247, sourceWidth: 100, targetWidth: 99, y0: 917, y1: 1035.5, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 221, sourceWidth: 91, targetWidth: 89, y0: 549.5, y1: 457.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 446, sourceWidth: 182, targetWidth: 181, y0: 686, y1: 806.5, linkTint: RED_LINK },

      { source: 'operating_profit', target: 'net_profit', value: 161, sourceWidth: 66, targetWidth: 64, y0: 446, y1: 356, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 33, sourceWidth: 14, targetWidth: 12, y0: 486, y1: 551, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_non_operating', value: 28, sourceWidth: 9, targetWidth: 9, y0: 497.5, y1: 668.5, sourceOrder: 2, linkTint: RED_LINK },

      { source: 'operating_expenses', target: 'sm', value: 169, sourceWidth: 68, targetWidth: 68, y0: 750, y1: 827, sourceOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 148, sourceWidth: 63, targetWidth: 59, y0: 815.5, y1: 992.5, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'product', value: 105, sourceWidth: 42, targetWidth: 41, y0: 868, y1: 1151.5, sourceOrder: 2, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 24, sourceWidth: 8, targetWidth: 8, y0: 893, y1: 1302, sourceOrder: 3, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Match Group · 2025 财年第三季度',
        meta: {
          title: 'Match Group 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 1500,
        },
        nodes: {
          tinder: { label: 'Tinder', notes: ['同比 (3%)'] },
          hinge: { label: 'Hinge', notes: ['同比 +27%'] },
          asia: { label: '亚洲', notes: ['同比 (4%)'] },
          evergreen_emerging: { label: ['常青与', '新兴品牌'], notes: ['同比 (4%)'] },
          indirect: { label: '间接收入', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 24%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 18%', '同比 +2 个百分点'] },
          tax: { label: '税费' },
          other_non_operating: { label: '其他' },
          sm: { label: '销售与市场', notes: ['占收入 19%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 16%', '同比 +5 个百分点'] },
          product: { label: '产品开发', notes: ['占收入 11%', '同比 (0 个百分点)'] },
          da: { label: '折旧及摊销', notes: ['占收入 3%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
