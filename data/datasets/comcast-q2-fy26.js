/* ====================================================================
 * Comcast - Q2 FY26 income statement ($B)
 * Reconstructed from input/processing/comcast-q2-fy26.png as a fixed
 * d3-sankey layout using the previously approved Comcast raster assets.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const BLACK = '#000000';
  const GRAY_LINK = '#8b8b8b';
  const NOTE = '#6b6b6b';
  const GREEN = '#2aa329';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bce99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const EN = {
    connectivity: 'Connectivity', corporate: 'Corporate', media: 'Media', studios: 'Studio', parks: 'Parks',
    content: ['Content &', 'Experiences'], revenue: 'Revenue', eliminations: 'Eliminations',
    gross: ['Gross', 'profit'], programming: ['Programming', '& production'],
    operating: ['Operating', 'profit'], operatingExpenses: ['Operating', 'expenses'],
    net: 'Net profit', interest: 'Interest', tax: 'Tax', other: 'Other',
    otherOperating: ['Other operating &', 'administrative'], depreciation: 'Depreciation',
    advertising: 'Advertising', amortization: 'Amortization',
    yyResidential: '(4%) Y/Y', yyConnectivity: '(3%) Y/Y', yyBusiness: '+4% Y/Y', yyCorporate: '+14% Y/Y',
    yyMedia: '+25% Y/Y', yyStudios: '+25% Y/Y', yyParks: '+3% Y/Y', yyContent: '+23% Y/Y', yyRevenue: '(1%) Y/Y',
    grossMargin: '72% margin', grossPp: '(3pp) Y/Y', operatingMargin: '17% margin', operatingPp: '(3pp) Y/Y',
    netMargin: '11% margin', netPp: '(25pp) Y/Y',
  };

  const ZH = {
    connectivity: '连接业务', corporate: '企业及其他', media: '媒体', studios: '影视工作室', parks: '主题公园',
    content: ['内容与', '体验'], revenue: '收入', eliminations: '抵销',
    gross: ['毛', '利润'], programming: ['节目', '制作'],
    operating: ['营业', '利润'], operatingExpenses: ['营业', '费用'],
    net: '净利润', interest: '利息', tax: '税费', other: '其他',
    otherOperating: ['其他运营', '及管理'], depreciation: '折旧', advertising: '广告', amortization: '摊销',
    yyResidential: '同比 (4%)', yyConnectivity: '同比 (3%)', yyBusiness: '同比 +4%', yyCorporate: '同比 +14%',
    yyMedia: '同比 +25%', yyStudios: '同比 +25%', yyParks: '同比 +3%', yyContent: '同比 +23%', yyRevenue: '同比 (1%)',
    grossMargin: '利润率 72%', grossPp: '同比 (3 个百分点)', operatingMargin: '利润率 17%', operatingPp: '同比 (3 个百分点)',
    netMargin: '利润率 11%', netPp: '同比 (25 个百分点)',
  };

  const line = (text, size, weight, color = BLACK) => ({ text, size, weight, color });
  const value = (color = BLACK, size = 40) => line('$value', size, 400, color);
  const name = (text, color = BLACK, size = 40) => line(text, size, 800, color);
  const note = (text, size = 29) => line(text, size, 400, NOTE);

  function labels(T, isZh = false) {
    const sideSize = 31;
    return {
      residential_connectivity: {
        blocks: [{ x: 431, top: 346, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyResidential)] }],
      },
      comcast_business: {
        blocks: [{ x: 431, top: 669, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyBusiness)] }],
      },
      connectivity: {
        blocks: [{ x: 742, top: 375, anchor: 'middle', lineGap: 9, lines: [name(T.connectivity), value(), note(T.yyConnectivity)] }],
      },
      corporate: {
        blocks: [
          { x: 742, top: 795, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyCorporate)] },
          { x: 690, top: 866, anchor: 'end', semanticRole: 'reference-offset-side-label', lines: [name(T.corporate, BLACK, isZh ? 34 : 40)] },
        ],
      },
      media: {
        blocks: [
          { x: 431, top: 870, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyMedia)] },
          { x: 376, top: 919, anchor: 'end', semanticRole: 'reference-offset-side-label', lines: [name(T.media, BLACK, isZh ? 36 : 40)] },
        ],
      },
      studios: {
        blocks: [
          { x: 431, top: 1050, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyStudios)] },
          { x: 376, top: 1128, anchor: 'end', semanticRole: 'reference-offset-side-label', lines: [name(T.studios, BLACK, isZh ? 34 : 40)] },
        ],
      },
      parks: {
        blocks: [
          { x: 431, top: 1209, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyParks)] },
          { x: 376, top: 1289, anchor: 'end', semanticRole: 'reference-offset-side-label', lines: [name(T.parks, BLACK, isZh ? 36 : 40)] },
        ],
      },
      content_experiences: {
        blocks: [
          { x: 742, top: 1186, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyContent)] },
          { x: 742, top: 1272, anchor: 'middle', lineGap: 10, lines: T.content.map((text) => name(text, BLACK, 36)) },
        ],
      },
      gross_revenue: { blocks: [] },
      eliminations_content: {
        blocks: [{ x: 1053, top: 1254, anchor: 'middle', lineGap: 8, lines: [name(T.eliminations, RED_LABEL, isZh ? 31 : 34), value(RED_LABEL, 33)] }],
      },
      revenue: {
        blocks: [{ x: 1365, top: 519, anchor: 'middle', lineGap: 9, lines: [name(T.revenue), value(), note(T.yyRevenue)] }],
      },
      eliminations_gross: {
        blocks: [{ x: 1365, top: 1117, anchor: 'middle', lineGap: 8, lines: [name(T.eliminations, RED_LABEL, isZh ? 31 : 34), value(RED_LABEL, 33)] }],
      },
      gross_profit: {
        blocks: [{ x: 1677, top: 372, anchor: 'middle', lineGap: 9, lines: [...T.gross.map((text) => name(text, GREEN_LABEL)), value(GREEN_LABEL), note(T.grossMargin), note(T.grossPp)] }],
      },
      programming_production: {
        blocks: [{ x: 1676, top: 1063, anchor: 'middle', lineGap: 9, lines: [...T.programming.map((text) => name(text, RED_LABEL)), value(RED_LABEL)] }],
      },
      operating_profit: {
        blocks: [{ x: 1988, top: 286, anchor: 'middle', lineGap: 9, lines: [...T.operating.map((text) => name(text, GREEN_LABEL)), value(GREEN_LABEL), note(T.operatingMargin), note(T.operatingPp)] }],
      },
      operating_expenses: {
        blocks: [{ x: 1988, top: 928, anchor: 'middle', lineGap: 9, lines: [...T.operatingExpenses.map((text) => name(text, RED_LABEL)), value(RED_LABEL)] }],
      },
      other: {
        blocks: [{ x: 2194, top: 306, anchor: 'middle', lineGap: 8, lines: [name(T.other, GREEN_LABEL, sideSize), value(GREEN_LABEL, sideSize)] }],
      },
      net_profit: {
        blocks: [{ x: 2480, top: 334, anchor: 'middle', lineGap: 8, lines: [name(T.net, GREEN_LABEL, isZh ? 36 : 40), value(GREEN_LABEL), note(T.netMargin), note(T.netPp)] }],
      },
      interest: {
        blocks: [{ x: 2478, top: 522, anchor: 'middle', lineGap: 8, lines: [name(T.interest, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      tax: {
        blocks: [{ x: 2477, top: 624, anchor: 'middle', lineGap: 8, lines: [name(T.tax, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      other_operating_administrative: {
        blocks: [{ x: 2481, top: 765, anchor: 'middle', lineGap: 8, lines: [...T.otherOperating.map((text) => name(text, RED_LABEL, sideSize)), value(RED_LABEL, sideSize)] }],
      },
      depreciation: {
        blocks: [{ x: 2477, top: 961, anchor: 'middle', lineGap: 8, lines: [name(T.depreciation, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      advertising: {
        blocks: [{ x: 2478, top: 1101, anchor: 'middle', lineGap: 8, lines: [name(T.advertising, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      amortization: {
        blocks: [{ x: 2480, top: 1263, anchor: 'middle', lineGap: 8, lines: [name(T.amortization, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
    };
  }

  const labelsEn = labels(EN);
  const labelsZh = labels(ZH, true);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'comcast-q2-fy26',
    name: 'Comcast · Q2 FY26',
    company: 'Comcast',
    meta: {
      company: 'Comcast',
      title: 'Comcast Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/comcast-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 194,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2300,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      allowRasterAnnotations: true,
      interfaceAudit: {
        mode: 'error',
        fullFaceIds: [
          'residential_connectivity:right', 'comcast_business:right',
          'media:right', 'studios:right', 'parks:right',
          'connectivity:left', 'connectivity:right', 'corporate:right',
          'content_experiences:left', 'content_experiences:right',
          'gross_revenue:left', 'gross_revenue:right',
          'eliminations_content:left', 'eliminations_gross:left',
          'revenue:left', 'revenue:right',
          'gross_profit:left', 'gross_profit:right', 'programming_production:left',
          'operating_profit:left', 'operating_profit:right',
          'operating_expenses:left', 'operating_expenses:right',
          'other:right', 'net_profit:left', 'interest:left', 'tax:left',
          'other_operating_administrative:left', 'depreciation:left',
          'advertising:left', 'amortization:left',
        ],
      },
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/comcast/company-wordmark.png', x: 942, y: 195, width: 560, height: 225 },
      { key: 'connectivity-icon-cluster', href: 'data/assets/raster-annotations/comcast/connectivity-icon-cluster.png', x: 28, y: 344, width: 340, height: 254 },
      { key: 'comcast-business-wordmark', href: 'data/assets/raster-annotations/comcast/comcast-business-wordmark.png', x: 70, y: 670, width: 306, height: 148 },
      { key: 'media-icon-cluster', href: 'data/assets/raster-annotations/comcast/media-icon-cluster.png', x: 20, y: 844, width: 226, height: 176 },
      { key: 'studios-icon-cluster', href: 'data/assets/raster-annotations/comcast/studios-icon-cluster.png', x: 12, y: 1022, width: 232, height: 155 },
      { key: 'parks-icon-cluster', href: 'data/assets/raster-annotations/comcast/parks-icon-cluster.png', x: 12, y: 1160, width: 250, height: 182 },
    ],
    layout: {
      scale: 11,
      nodes: {
        residential_connectivity: { x: 395, y: 434, width: 71, height: 194 },
        comcast_business: { x: 395, y: 768, width: 71, height: 28 },
        connectivity: { x: 706, y: 517, width: 71, height: 224 },
        corporate: { x: 706, y: 887, width: 71, height: 2 },
        media: { x: 395, y: 959, width: 71, height: 62 },
        studios: { x: 395, y: 1141, width: 71, height: 31 },
        parks: { x: 395, y: 1300, width: 71, height: 25 },
        content_experiences: { x: 706, y: 1036, width: 71, height: 122 },
        gross_revenue: { x: 1017, y: 598, width: 72, height: 348 },
        eliminations_content: { x: 1017, y: 1236, width: 72, height: 2 },
        revenue: { x: 1329, y: 657, width: 71, height: 331 },
        eliminations_gross: { x: 1329, y: 1092, width: 71, height: 13 },
        gross_profit: { x: 1640, y: 602, width: 72, height: 237 },
        programming_production: { x: 1640, y: 958, width: 72, height: 92 },
        operating_profit: { x: 1952, y: 519, width: 71, height: 55 },
        operating_expenses: { x: 1952, y: 732, width: 71, height: 180 },
        other: { x: 2162, y: 390, width: 71, height: 4 },
        net_profit: { x: 2263, y: 408, width: 71, height: 36 },
        interest: { x: 2263, y: 548, width: 71, height: 11 },
        tax: { x: 2263, y: 654, width: 71, height: 9 },
        other_operating_administrative: { x: 2263, y: 758, width: 71, height: 115 },
        depreciation: { x: 2263, y: 989, width: 71, height: 26 },
        advertising: { x: 2263, y: 1132, width: 71, height: 24 },
        amortization: { x: 2263, y: 1295, width: 71, height: 12 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'residential_connectivity', col: 0, order: 0, type: 'source', label: 'Residential Connectivity', value: 17.1, valueText: '$17.1B', notes: [EN.yyResidential], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'comcast_business', col: 0, order: 1, type: 'source', label: 'Comcast Business', value: 2.7, valueText: '$2.7B', notes: [EN.yyBusiness], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'connectivity', col: 1, order: 0, type: 'hub', label: EN.connectivity, value: 19.8, valueText: '$19.8B', notes: [EN.yyConnectivity], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'corporate', col: 1, order: 1, type: 'source', label: EN.corporate, value: 0.5, valueText: '$0.5B', notes: [EN.yyCorporate], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'media', col: 0, order: 2, type: 'source', label: EN.media, value: 5.7, valueText: '$5.7B', notes: [EN.yyMedia], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'studios', col: 0, order: 3, type: 'source', label: EN.studios, value: 3.0, valueText: '$3.0B', notes: [EN.yyStudios], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'parks', col: 0, order: 4, type: 'source', label: EN.parks, value: 2.4, valueText: '$2.4B', notes: [EN.yyParks], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'content_experiences', col: 1, order: 2, type: 'hub', label: EN.content, value: 10.7, valueText: '$10.7B', notes: [EN.yyContent], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 2, order: 0, type: 'hub', label: '', value: 31.2, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations_content', col: 2, order: 1, type: 'cost', label: EN.eliminations, value: 0.4, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: EN.revenue, value: 29.9, valueText: '$29.9B', notes: [EN.yyRevenue], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations_gross', col: 3, order: 1, type: 'cost', label: EN.eliminations, value: 1.3, valueText: '($1.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: EN.gross, value: 21.6, valueText: '$21.6B', notes: [EN.grossMargin, EN.grossPp], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'programming_production', col: 4, order: 1, type: 'cost', label: EN.programming, value: 8.4, valueText: '($8.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: EN.operating, value: 5.2, valueText: '$5.2B', notes: [EN.operatingMargin, EN.operatingPp], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: EN.operatingExpenses, value: 16.4, valueText: '($16.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 6, order: 0, type: 'profit', label: EN.other, value: 0.5, valueText: '$0.5B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: EN.net, value: 3.4, valueText: '$3.4B', notes: [EN.netMargin, EN.netPp], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 7, order: 1, type: 'cost', label: EN.interest, value: 1.1, valueText: '($1.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 7, order: 2, type: 'cost', label: EN.tax, value: 1.2, valueText: '($1.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_administrative', col: 7, order: 3, type: 'cost', label: EN.otherOperating, value: 10.4, valueText: '($10.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation', col: 7, order: 4, type: 'cost', label: EN.depreciation, value: 2.3, valueText: '($2.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'advertising', col: 7, order: 5, type: 'cost', label: EN.advertising, value: 2.4, valueText: '($2.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 7, order: 6, type: 'cost', label: EN.amortization, value: 1.3, valueText: '($1.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'residential_connectivity', target: 'connectivity', value: 17.1, sourceWidth: 194, targetWidth: 196, y0: 531, y1: 615, sourceOrder: 0, targetOrder: 0 },
      { source: 'comcast_business', target: 'connectivity', value: 2.7, sourceWidth: 28, targetWidth: 28, y0: 782, y1: 727, sourceOrder: 0, targetOrder: 1 },
      { source: 'media', target: 'content_experiences', value: 5.7, sourceWidth: 62, targetWidth: 64, y0: 990, y1: 1068, sourceOrder: 0, targetOrder: 0 },
      { source: 'studios', target: 'content_experiences', value: 3.0, sourceWidth: 31, targetWidth: 33, y0: 1156.5, y1: 1116.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'parks', target: 'content_experiences', value: 2.4, sourceWidth: 25, targetWidth: 25, y0: 1312.5, y1: 1145.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'connectivity', target: 'gross_revenue', value: 19.8, sourceWidth: 224, targetWidth: 224, y0: 629, y1: 710, sourceOrder: 0, targetOrder: 0 },
      { source: 'corporate', target: 'gross_revenue', value: 0.5, sourceWidth: 2, targetWidth: 2, y0: 888, y1: 823, sourceOrder: 0, targetOrder: 1 },
      { source: 'content_experiences', target: 'gross_revenue', value: 10.3, sourceWidth: 120, targetWidth: 122, y0: 1096, y1: 885, sourceOrder: 0, targetOrder: 2 },
      { source: 'content_experiences', target: 'eliminations_content', value: 0.4, sourceWidth: 2, targetWidth: 2, y0: 1157, y1: 1237, sourceOrder: 1, targetOrder: 0, curve: { x0: 777, x1: 1017, c1x: 862, c1y: 1157, c2x: 934, c2y: 1237 } },
      { source: 'gross_revenue', target: 'revenue', value: 29.9, sourceWidth: 335, targetWidth: 331, y0: 765.5, y1: 822.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations_gross', value: 1.3, sourceWidth: 13, targetWidth: 13, y0: 939.5, y1: 1098.5, sourceOrder: 1, targetOrder: 0, curve: { x0: 1089, x1: 1329, c1x: 1168, c1y: 939.5, c2x: 1248, c2y: 1098.5 } },
      { source: 'revenue', target: 'gross_profit', value: 21.6, sourceWidth: 237, targetWidth: 237, y0: 775.5, y1: 720.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'programming_production', value: 8.4, sourceWidth: 94, targetWidth: 92, y0: 941, y1: 1004, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 5.2, sourceWidth: 55, targetWidth: 55, y0: 629.5, y1: 546.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 16.4, sourceWidth: 182, targetWidth: 180, y0: 748, y1: 822, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.9, sourceWidth: 29, targetWidth: 32, y0: 533.5, y1: 428, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'interest', value: 1.1, sourceWidth: 11, targetWidth: 11, y0: 553.5, y1: 553.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.2, sourceWidth: 15, targetWidth: 9, y0: 566.5, y1: 658.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.5, sourceWidth: 4, targetWidth: 4, y0: 392, y1: 410, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_administrative', value: 10.4, sourceWidth: 115, targetWidth: 115, y0: 789.5, y1: 815.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation', value: 2.3, sourceWidth: 26, targetWidth: 26, y0: 860, y1: 1002, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'advertising', value: 2.4, sourceWidth: 24, targetWidth: 24, y0: 885, y1: 1144, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 1.3, sourceWidth: 15, targetWidth: 12, y0: 904.5, y1: 1301, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '康卡斯特 · 2026 财年第二季度',
        meta: {
          title: '康卡斯特 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的季度',
          titleTextLength: 2300,
        },
        nodes: {
          residential_connectivity: { label: '住宅连接业务', notes: [ZH.yyResidential] },
          comcast_business: { label: 'Comcast 商务', notes: [ZH.yyBusiness] },
          connectivity: { label: ZH.connectivity, notes: [ZH.yyConnectivity] },
          corporate: { label: ZH.corporate, notes: [ZH.yyCorporate] },
          media: { label: ZH.media, notes: [ZH.yyMedia] }, studios: { label: ZH.studios, notes: [ZH.yyStudios] },
          parks: { label: ZH.parks, notes: [ZH.yyParks] }, content_experiences: { label: ZH.content, notes: [ZH.yyContent] },
          eliminations_content: { label: ZH.eliminations }, revenue: { label: ZH.revenue, notes: [ZH.yyRevenue] },
          eliminations_gross: { label: ZH.eliminations }, gross_profit: { label: ZH.gross, notes: [ZH.grossMargin, ZH.grossPp] },
          programming_production: { label: ZH.programming }, operating_profit: { label: ZH.operating, notes: [ZH.operatingMargin, ZH.operatingPp] },
          operating_expenses: { label: ZH.operatingExpenses }, other: { label: ZH.other },
          net_profit: { label: ZH.net, notes: [ZH.netMargin, ZH.netPp] }, interest: { label: ZH.interest }, tax: { label: ZH.tax },
          other_operating_administrative: { label: ZH.otherOperating }, depreciation: { label: ZH.depreciation },
          advertising: { label: ZH.advertising }, amortization: { label: ZH.amortization },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
