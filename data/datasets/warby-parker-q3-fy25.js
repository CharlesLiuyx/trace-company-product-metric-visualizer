/* Warby Parker Q3 FY25 income statement ($M), measured from the Source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#4ba6db';
  const BLUE_LABEL = '#0da8e0';
  const BLUE_HUB = '#2f628a';
  const BLUE_LINK = '#a6cfe8';
  const HUB_LINK = '#9ab1c2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const CARD = '#0da8e0';

  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    x,
    top,
    anchor,
    lineGap,
    lines,
  });

  const logo = `
    <rect x="0" y="0" width="216" height="216" rx="44" fill="#0da8e0"/>
    <text x="108" y="136" text-anchor="middle"
      font-family="Arial,Helvetica,sans-serif" font-size="78" font-weight="400"
      fill="#ffffff" textLength="132" lengthAdjust="spacingAndGlyphs">WP</text>`;

  const cards = (t) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="50" y="1211" width="273" height="149" rx="31" fill="${CARD}"/>
      <text x="186.5" y="1256" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${t.rpc1}</text>
      <text x="186.5" y="1296" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${t.rpc2}</text>
      <text x="186.5" y="1338" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">$320 (+5% Y/Y)</text>

      <rect x="335" y="1211" width="301" height="149" rx="31" fill="${CARD}"/>
      <text x="485.5" y="1277" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${t.stores}</text>
      <text x="485.5" y="1320" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">313 (+16% Y/Y)</text>
    </g>`;

  const productCallouts = (t) => `
    <g class="sankey-interactive-annotation" data-node="eyewear"
      font-family="Noto Sans,Arial,sans-serif" style="cursor:pointer">
      <text x="400" y="515" text-anchor="middle" font-size="39" fill="${BLUE_LABEL}">$207M</text>
      <text x="400" y="552" text-anchor="middle" font-size="29" fill="${NOTE}">${t.eyewearGrowth}</text>
      <text x="203" y="838" text-anchor="middle" font-size="40" font-weight="800" fill="${BLUE_LABEL}">${t.eyewear}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="vision_care"
      font-family="Noto Sans,Arial,sans-serif" style="cursor:pointer">
      <text x="400" y="1048" text-anchor="middle" font-size="39" fill="${BLUE_LABEL}">$14M</text>
      <text x="400" y="1085" text-anchor="middle" font-size="29" fill="${NOTE}">${t.visionGrowth}</text>
      <text x="200" y="1135" text-anchor="middle" font-size="40" font-weight="800" fill="${BLUE_LABEL}">${t.vision}</text>
    </g>`;

  const annotationsEn = `${cards({
    rpc1: 'Revenue per',
    rpc2: 'Customer',
    stores: 'Store Locations',
  })}${productCallouts({
    eyewear: 'Eyewear',
    eyewearGrowth: '+14% Y/Y',
    vision: 'Vision care',
    visionGrowth: '+41% Y/Y',
  })}`;
  const annotationsZh = `${cards({
    rpc1: '每位客户',
    rpc2: '收入',
    stores: '门店数量',
  })
    .replace('$320 (+5% Y/Y)', '$320（同比 +5%）')
    .replace('313 (+16% Y/Y)', '313（同比 +16%）')}${productCallouts({
    eyewear: '眼镜',
    eyewearGrowth: '同比 +14%',
    vision: '视力保健',
    visionGrowth: '同比 +41%',
  })}`;

  const labelsEn = {
    eyewear: { blocks: [] },
    vision_care: { blocks: [] },
    revenue_by_product: {
      blocks: [block(718, 525, [line('Revenue', 40, 800), line('$value', 39), line('+15% Y/Y', 29, 400, NOTE)])],
    },
    ecommerce: {
      blocks: [block(1025, 423, [line('E-Commerce', 40, 800), line('$value', 39), line('+3% Y/Y', 29, 400, NOTE)])],
    },
    retail: {
      blocks: [block(1022, 1134, [line('Retail', 40, 800), line('$value', 39), line('+20% Y/Y', 29, 400, NOTE)])],
    },
    revenue: {
      blocks: [block(1334, 520, [line('Revenue', 40, 800), line('$value', 39), line('+15% Y/Y', 29, 400, NOTE)])],
    },
    gross_profit: {
      blocks: [block(1650, 387, [line('Gross profit', 40, 800), line('$value', 39), line('54% margin', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)])],
    },
    cost_of_revenue: {
      blocks: [block(1645, 1134, [line('Cost of', 38, 800), line('revenue', 38, 800), line('$value', 38)])],
    },
    operating_profit: {
      blocks: [block(1957, 295, [line('Operating profit', 40, 800), line('$value', 39), line('2% margin', 29, 400, NOTE), line('+5pp Y/Y', 29, 400, NOTE)])],
    },
    operating_expenses: {
      blocks: [block(1957, 839, [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 39)])],
    },
    other: {
      blocks: [block(2163, 507, [line('Other', 31, 800), line('$value', 30)])],
    },
    net_profit: {
      blocks: [block(2442, 353, [line('Net profit', 40, 800), line('$value', 39), line('3% margin', 29, 400, NOTE), line('+5pp Y/Y', 29, 400, NOTE)])],
    },
    other_sga: {
      blocks: [block(2440, 722, [line('Other SG&A', 31, 800), line('$value', 30), line('39% of revenue', 29, 400, NOTE), line('(6pp) Y/Y', 29, 400, NOTE)])],
    },
    marketing: {
      blocks: [block(2440, 1027, [line('Marketing', 31, 800), line('$value', 30), line('13% of revenue', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)])],
    },
  };

  const labelsZh = {
    eyewear: { blocks: [] },
    vision_care: { blocks: [] },
    revenue_by_product: {
      blocks: [block(718, 525, [line('收入', 40, 800), line('$value', 39), line('同比 +15%', 29, 400, NOTE)])],
    },
    ecommerce: {
      blocks: [block(1025, 423, [line('电子商务', 40, 800), line('$value', 39), line('同比 +3%', 29, 400, NOTE)])],
    },
    retail: {
      blocks: [block(1022, 1134, [line('零售', 40, 800), line('$value', 39), line('同比 +20%', 29, 400, NOTE)])],
    },
    revenue: {
      blocks: [block(1334, 520, [line('收入', 40, 800), line('$value', 39), line('同比 +15%', 29, 400, NOTE)])],
    },
    gross_profit: {
      blocks: [block(1650, 387, [line('毛利润', 40, 800), line('$value', 39), line('利润率 54%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)])],
    },
    cost_of_revenue: {
      blocks: [block(1645, 1134, [line('收入', 38, 800), line('成本', 38, 800), line('$value', 38)])],
    },
    operating_profit: {
      blocks: [block(1957, 295, [line('营业利润', 40, 800), line('$value', 39), line('利润率 2%', 29, 400, NOTE), line('同比 +5 个百分点', 29, 400, NOTE)])],
    },
    operating_expenses: {
      blocks: [block(1957, 839, [line('营业', 40, 800), line('费用', 40, 800), line('$value', 39)])],
    },
    other: {
      blocks: [block(2163, 507, [line('其他', 31, 800), line('$value', 30)])],
    },
    net_profit: {
      blocks: [block(2442, 353, [line('净利润', 40, 800), line('$value', 39), line('利润率 3%', 29, 400, NOTE), line('同比 +5 个百分点', 29, 400, NOTE)])],
    },
    other_sga: {
      blocks: [block(2444, 722, [line('其他销售、一般及行政', 28, 800), line('$value', 30), line('占收入 39%', 29, 400, NOTE), line('同比 (6 个百分点)', 29, 400, NOTE)])],
    },
    marketing: {
      blocks: [block(2440, 1027, [line('营销', 31, 800), line('$value', 30), line('占收入 13%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)])],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'warby-parker-q3-fy25',
    name: 'Warby Parker · Q3 FY25',
    company: 'Warby Parker',
    meta: {
      company: 'Warby Parker',
      title: 'Warby Parker Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Three months ended Sep. 30, 2025',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/warby-parker-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2460,
      logoWidth: 216,
      logoHeight: 216,
      logoY: 252,
      logoViewBox: '0 0 216 216',
      logoSvg: logo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE_HUB, label: TITLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: HUB_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
      allowRasterAnnotations: true,
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'warby-parker-eyewear-cluster',
        href: 'data/assets/raster-annotations/warby-parker/eyewear-cluster.png',
        x: 99,
        y: 514,
        width: 204,
        height: 253,
      },
      {
        key: 'warby-parker-vision-care-phone',
        href: 'data/assets/raster-annotations/warby-parker/vision-care-phone.png',
        x: 157,
        y: 916,
        width: 96,
        height: 176,
      },
      {
        key: 'warby-parker-ecommerce-phone',
        href: 'data/assets/raster-annotations/warby-parker/ecommerce-phone.png',
        x: 1164,
        y: 261,
        width: 191,
        height: 248,
      },
    ],
    layout: {
      scale: 1,
      nodes: {
        eyewear: { x: 364, y: 568, width: 71, height: 338 },
        vision_care: { x: 364, y: 1101, width: 71, height: 21 },
        revenue_by_product: { x: 675, y: 667, width: 71, height: 361 },
        ecommerce: { x: 986, y: 563, width: 72, height: 95 },
        retail: { x: 986, y: 846, width: 72, height: 265 },
        revenue: { x: 1298, y: 664, width: 71, height: 362 },
        gross_profit: { x: 1614, y: 571, width: 72, height: 193 },
        cost_of_revenue: { x: 1609, y: 953, width: 72, height: 165 },
        operating_profit: { x: 1921, y: 479, width: 71, height: 4 },
        operating_expenses: { x: 1921, y: 638, width: 71, height: 189 },
        other: { x: 2123, y: 488, width: 72, height: 1 },
        net_profit: { x: 2232, y: 415, width: 71, height: 8 },
        other_sga: { x: 2232, y: 713, width: 71, height: 142 },
        marketing: { x: 2232, y: 1045, width: 71, height: 46 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'eyewear', col: 0, order: 0, type: 'source', label: 'Eyewear', value: 207, notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'vision_care', col: 0, order: 1, type: 'source', label: 'Vision care', value: 14, notes: ['+41% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue_by_product', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 222, notes: ['+15% Y/Y'], color: BLUE_HUB, labelColor: TITLE, linkTint: HUB_LINK },
      { id: 'ecommerce', col: 2, order: 0, type: 'hub', label: 'E-Commerce', value: 59, notes: ['+3% Y/Y'], color: BLUE_HUB, labelColor: TITLE, linkTint: HUB_LINK },
      { id: 'retail', col: 2, order: 1, type: 'hub', label: 'Retail', value: 163, notes: ['+20% Y/Y'], color: BLUE_HUB, labelColor: TITLE, linkTint: HUB_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 222, notes: ['+15% Y/Y'], color: BLUE_HUB, labelColor: TITLE, linkTint: HUB_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 120, notes: ['54% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 102, valueText: '($102M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 4, notes: ['2% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 116, valueText: '($116M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 6, order: 0, type: 'profit', label: 'Other', value: 2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 6, notes: ['3% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_sga', col: 7, order: 1, type: 'cost', label: 'Other SG&A', value: 87, valueText: '($87M)', notes: ['39% of revenue', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 7, order: 2, type: 'cost', label: 'Marketing', value: 29, valueText: '($29M)', notes: ['13% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'eyewear', target: 'revenue_by_product', value: 207, sourceWidth: 338, targetWidth: 338, y0: 737, y1: 836, sourceOrder: 0, targetOrder: 0 },
      { source: 'vision_care', target: 'revenue_by_product', value: 14, sourceWidth: 21, targetWidth: 23, y0: 1111.5, y1: 1016.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue_by_product', target: 'ecommerce', value: 59, sourceWidth: 96, targetWidth: 95, y0: 715, y1: 610.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue_by_product', target: 'retail', value: 163, sourceWidth: 265, targetWidth: 265, y0: 895.5, y1: 978.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'ecommerce', target: 'revenue', value: 59, sourceWidth: 95, targetWidth: 96, y0: 610.5, y1: 712, sourceOrder: 0, targetOrder: 0 },
      { source: 'retail', target: 'revenue', value: 163, sourceWidth: 265, targetWidth: 266, y0: 978.5, y1: 893, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 120, sourceWidth: 196, targetWidth: 193, y0: 762, y1: 667.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 102, sourceWidth: 166, targetWidth: 165, y0: 943, y1: 1035.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4, width: 4, y0: 573, y1: 481, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 116, width: 189, y0: 669.5, y1: 732.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 4, sourceWidth: 4, targetWidth: 6, y0: 481, y1: 418, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 2, sourceWidth: 1, targetWidth: 2, y0: 488.5, y1: 422, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'other_sga', value: 87, sourceWidth: 143, targetWidth: 142, y0: 709.5, y1: 784, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 29, sourceWidth: 46, targetWidth: 46, y0: 804, y1: 1068, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Warby Parker · 2025 财年第三季度',
        meta: {
          title: 'Warby Parker 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日止三个月',
          titleSize: 112,
          titleTextLength: 1940,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          eyewear: { label: '眼镜', notes: ['同比 +14%'] },
          vision_care: { label: '视力保健', notes: ['同比 +41%'] },
          revenue_by_product: { label: '收入', notes: ['同比 +15%'] },
          ecommerce: { label: '电子商务', notes: ['同比 +3%'] },
          retail: { label: '零售', notes: ['同比 +20%'] },
          revenue: { label: '收入', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 +5 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +5 个百分点'] },
          other_sga: { label: '其他销售、一般及行政', notes: ['占收入 39%', '同比 (6 个百分点)'] },
          marketing: { label: '营销', notes: ['占收入 13%', '同比 +1 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
