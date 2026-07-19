/* ====================================================================
 * Comcast - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/comcast-q1-fy26.png as a fixed
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
  const RED = '#df0000';
  const RED_LABEL = '#9e1908';
  const RED_LINK = '#e08486';

  const EN = {
    connectivity: 'Connectivity', corporate: 'Corporate', media: 'Media', studios: 'Studio', parks: 'Parks',
    content: ['Content &', 'Experiences'], revenue: 'Revenue', eliminations: 'Eliminations',
    gross: ['Gross', 'profit'], programming: ['Programming', '& production'],
    operating: ['Operating', 'profit'], operatingExpenses: ['Operating', 'expenses'],
    net: 'Net profit', interest: 'Interest', tax: 'Tax', other: 'Other',
    otherOperating: ['Other operating &', 'administrative'], depreciation: 'Depreciation',
    advertising: 'Advertising', amortization: 'Amortization',
    yyResidential: '(2%) Y/Y', yyConnectivity: '(1%) Y/Y', yyBusiness: '+6% Y/Y', yyCorporate: '+11% Y/Y',
    yyMedia: '+61% Y/Y', yyStudios: '+21% Y/Y', yyParks: '+24% Y/Y', yyContent: '+41% Y/Y', yyRevenue: '+5% Y/Y',
    grossMargin: '65% margin', grossPp: '(6pp) Y/Y', operatingMargin: '13% margin', operatingPp: '(6pp) Y/Y',
    netMargin: '6% margin', netPp: '(5pp) Y/Y',
  };

  const ZH = {
    connectivity: '连接业务', corporate: '企业及其他', media: '媒体', studios: '影视工作室', parks: '主题公园',
    content: ['内容与', '体验'], revenue: '收入', eliminations: '抵销',
    gross: ['毛', '利润'], programming: ['节目', '制作'],
    operating: ['营业', '利润'], operatingExpenses: ['营业', '费用'],
    net: '净利润', interest: '利息', tax: '税费', other: '其他',
    otherOperating: ['其他运营', '及管理'], depreciation: '折旧', advertising: '广告', amortization: '摊销',
    yyResidential: '同比 (2%)', yyConnectivity: '同比 (1%)', yyBusiness: '同比 +6%', yyCorporate: '同比 +11%',
    yyMedia: '同比 +61%', yyStudios: '同比 +21%', yyParks: '同比 +24%', yyContent: '同比 +41%', yyRevenue: '同比 +5%',
    grossMargin: '利润率 65%', grossPp: '同比 (6 个百分点)', operatingMargin: '利润率 13%', operatingPp: '同比 (6 个百分点)',
    netMargin: '利润率 6%', netPp: '同比 (5 个百分点)',
  };

  const line = (text, size, weight, color = BLACK) => ({ text, size, weight, color });
  const value = (color = BLACK, size = 40) => line('$value', size, 400, color);
  const name = (text, color = BLACK, size = 40) => line(text, size, 800, color);
  const note = (text, size = 29) => line(text, size, 400, NOTE);

  function labels(T, isZh = false) {
    const sideSize = isZh ? 31 : 31;
    return {
      residential_connectivity: {
        blocks: [{ x: 431, top: 342, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyResidential)] }],
      },
      comcast_business: {
        blocks: [{ x: 431, top: 641, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyBusiness)] }],
      },
      connectivity: {
        blocks: [{ x: 742, top: 384, anchor: 'middle', lineGap: 9, lines: [name(T.connectivity), value(), note(T.yyConnectivity)] }],
      },
      corporate: {
        blocks: [
          { x: 742, top: 756, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyCorporate)] },
          { x: 690, top: 825, anchor: 'end', lines: [name(T.corporate, BLACK, isZh ? 34 : 40)] },
        ],
      },
      media: {
        blocks: [
          { x: 431, top: 819, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyMedia)] },
          { x: 376, top: 921, anchor: 'end', lines: [name(T.media, BLACK, isZh ? 36 : 40)] },
        ],
      },
      studios: {
        blocks: [
          { x: 431, top: 1004, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyStudios)] },
          { x: 376, top: 1083, anchor: 'end', lines: [name(T.studios, BLACK, isZh ? 34 : 40)] },
        ],
      },
      parks: {
        blocks: [
          { x: 431, top: 1138, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyParks)] },
          { x: 376, top: 1218, anchor: 'end', lines: [name(T.parks, BLACK, isZh ? 36 : 40)] },
        ],
      },
      content_experiences: {
        blocks: [
          { x: 742, top: 1128, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyContent)] },
          { x: 742, top: 1215, anchor: 'middle', lineGap: 10, lines: T.content.map((text) => name(text, BLACK, 36)) },
        ],
      },
      gross_revenue: { blocks: [] },
      eliminations_content: {
        blocks: [{ x: 1054, top: 1227, anchor: 'middle', lineGap: 8, lines: [name(T.eliminations, RED_LABEL, isZh ? 31 : 34), value(RED_LABEL, 33)] }],
      },
      revenue: {
        blocks: [{ x: 1366, top: 542, anchor: 'middle', lineGap: 9, lines: [name(T.revenue), value(), note(T.yyRevenue)] }],
      },
      eliminations_gross: {
        blocks: [{ x: 1366, top: 1150, anchor: 'middle', lineGap: 8, lines: [name(T.eliminations, RED_LABEL, isZh ? 31 : 34), value(RED_LABEL, 33)] }],
      },
      gross_profit: {
        blocks: [{ x: 1681, top: 385, anchor: 'middle', lineGap: 9, lines: [...T.gross.map((text) => name(text, GREEN_LABEL)), value(GREEN_LABEL), note(T.grossMargin), note(T.grossPp)] }],
      },
      programming_production: {
        blocks: [{ x: 1677, top: 1088, anchor: 'middle', lineGap: 9, lines: [...T.programming.map((text) => name(text, RED_LABEL)), value(RED_LABEL)] }],
      },
      operating_profit: {
        blocks: [{ x: 1989, top: 250, anchor: 'middle', lineGap: 9, lines: [...T.operating.map((text) => name(text, GREEN_LABEL)), value(GREEN_LABEL), note(T.operatingMargin), note(T.operatingPp)] }],
      },
      operating_expenses: {
        blocks: [{ x: 1989, top: 882, anchor: 'middle', lineGap: 9, lines: [...T.operatingExpenses.map((text) => name(text, RED_LABEL)), value(RED_LABEL)] }],
      },
      net_profit: {
        blocks: [{ x: 2480, top: 330, anchor: 'middle', lineGap: 8, lines: [name(T.net, GREEN_LABEL, isZh ? 36 : 40), value(GREEN_LABEL), note(T.netMargin), note(T.netPp)] }],
      },
      interest: {
        blocks: [{ x: 2490, top: 550, anchor: 'middle', lineGap: 8, lines: [name(T.interest, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      tax: {
        blocks: [{ x: 2490, top: 640, anchor: 'middle', lineGap: 8, lines: [name(T.tax, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      other: {
        blocks: [{ x: 2490, top: 728, anchor: 'middle', lineGap: 8, lines: [name(T.other, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      other_operating_administrative: {
        blocks: [{ x: 2500, top: 873, anchor: 'middle', lineGap: 8, lines: [...T.otherOperating.map((text) => name(text, RED_LABEL, sideSize)), value(RED_LABEL, sideSize)] }],
      },
      depreciation: {
        blocks: [{ x: 2490, top: 1047, anchor: 'middle', lineGap: 8, lines: [name(T.depreciation, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      advertising: {
        blocks: [{ x: 2490, top: 1149, anchor: 'middle', lineGap: 8, lines: [name(T.advertising, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      amortization: {
        blocks: [{ x: 2490, top: 1249, anchor: 'middle', lineGap: 8, lines: [name(T.amortization, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
    };
  }

  const labelsEn = labels(EN);
  const labelsZh = labels(ZH, true);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'comcast-q1-fy26',
    name: 'Comcast · Q1 FY26',
    company: 'Comcast',
    meta: {
      company: 'Comcast',
      title: 'Comcast Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/comcast-q1-fy26.png', width: 2667, height: 1500 },
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
          'net_profit:left', 'interest:left', 'tax:left', 'other:left',
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
      scale: 9.3,
      nodes: {
        residential_connectivity: { x: 396, y: 437, width: 71, height: 162 },
        comcast_business: { x: 396, y: 732, width: 71, height: 23 },
        connectivity: { x: 707, y: 528, width: 72, height: 186 },
        corporate: { x: 707, y: 846, width: 72, height: 8 },
        media: { x: 396, y: 912, width: 71, height: 67 },
        studios: { x: 396, y: 1092, width: 71, height: 31 },
        parks: { x: 396, y: 1232, width: 71, height: 21 },
        content_experiences: { x: 707, y: 985, width: 72, height: 120 },
        gross_revenue: { x: 1018, y: 627, width: 72, height: 307 },
        eliminations_content: { x: 1018, y: 1199, width: 72, height: 10 },
        revenue: { x: 1330, y: 687, width: 71, height: 293 },
        eliminations_gross: { x: 1330, y: 1121, width: 72, height: 13 },
        gross_profit: { x: 1645, y: 617, width: 73, height: 193 },
        programming_production: { x: 1641, y: 967, width: 72, height: 102 },
        operating_profit: { x: 1952, y: 487, width: 73, height: 39 },
        operating_expenses: { x: 1952, y: 708, width: 73, height: 153 },
        net_profit: { x: 2264, y: 378, width: 72, height: 18 },
        interest: { x: 2264, y: 574, width: 72, height: 9 },
        tax: { x: 2264, y: 666, width: 72, height: 5 },
        other: { x: 2264, y: 757, width: 72, height: 2 },
        other_operating_administrative: { x: 2264, y: 870, width: 72, height: 97 },
        depreciation: { x: 2264, y: 1065, width: 72, height: 19 },
        advertising: { x: 2264, y: 1165, width: 72, height: 21 },
        amortization: { x: 2264, y: 1275, width: 72, height: 13 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'residential_connectivity', col: 0, order: 0, type: 'source', label: 'Residential Connectivity', value: 17.3, valueText: '$17.3B', notes: [EN.yyResidential], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'comcast_business', col: 0, order: 1, type: 'source', label: 'Comcast Business', value: 2.6, valueText: '$2.6B', notes: [EN.yyBusiness], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'connectivity', col: 1, order: 0, type: 'hub', label: EN.connectivity, value: 20.0, valueText: '$20.0B', notes: [EN.yyConnectivity], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'corporate', col: 1, order: 1, type: 'source', label: EN.corporate, value: 1.1, valueText: '$1.1B', notes: [EN.yyCorporate], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'media', col: 0, order: 2, type: 'source', label: EN.media, value: 7.3, valueText: '$7.3B', notes: [EN.yyMedia], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'studios', col: 0, order: 3, type: 'source', label: EN.studios, value: 3.4, valueText: '$3.4B', notes: [EN.yyStudios], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'parks', col: 0, order: 4, type: 'source', label: EN.parks, value: 2.3, valueText: '$2.3B', notes: [EN.yyParks], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'content_experiences', col: 1, order: 2, type: 'hub', label: EN.content, value: 13.0, valueText: '$13.0B', notes: [EN.yyContent], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 2, order: 0, type: 'hub', label: '', value: 33.0, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations_content', col: 2, order: 1, type: 'cost', label: EN.eliminations, value: 1.1, valueText: '($1.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: EN.revenue, value: 31.5, valueText: '$31.5B', notes: [EN.yyRevenue], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations_gross', col: 3, order: 1, type: 'cost', label: EN.eliminations, value: 1.5, valueText: '($1.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: EN.gross, value: 20.6, valueText: '$20.6B', notes: [EN.grossMargin, EN.grossPp], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'programming_production', col: 4, order: 1, type: 'cost', label: EN.programming, value: 10.9, valueText: '($10.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: EN.operating, value: 4.1, valueText: '$4.1B', notes: [EN.operatingMargin, EN.operatingPp], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: EN.operatingExpenses, value: 16.4, valueText: '($16.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: EN.net, value: 2.0, valueText: '$2.0B', notes: [EN.netMargin, EN.netPp], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 6, order: 1, type: 'cost', label: EN.interest, value: 1.1, valueText: '($1.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: EN.tax, value: 0.7, valueText: '($0.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 6, order: 3, type: 'cost', label: EN.other, value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_administrative', col: 6, order: 4, type: 'cost', label: EN.otherOperating, value: 10.4, valueText: '($10.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation', col: 6, order: 5, type: 'cost', label: EN.depreciation, value: 2.3, valueText: '($2.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'advertising', col: 6, order: 6, type: 'cost', label: EN.advertising, value: 2.2, valueText: '($2.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 6, order: 7, type: 'cost', label: EN.amortization, value: 1.5, valueText: '($1.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'residential_connectivity', target: 'connectivity', value: 17.3, width: 162, sourceWidth: 162, targetWidth: 162, y0: 518, y1: 609, sourceOrder: 0, targetOrder: 0 },
      { source: 'comcast_business', target: 'connectivity', value: 2.6, width: 23, sourceWidth: 23, targetWidth: 24, y0: 743.5, y1: 702, sourceOrder: 0, targetOrder: 1 },
      { source: 'media', target: 'content_experiences', value: 7.3, width: 67, sourceWidth: 67, targetWidth: 67, y0: 945.5, y1: 1018.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'studios', target: 'content_experiences', value: 3.4, width: 31, sourceWidth: 31, targetWidth: 31, y0: 1107.5, y1: 1067.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'parks', target: 'content_experiences', value: 2.3, width: 21, sourceWidth: 21, targetWidth: 22, y0: 1242.5, y1: 1094, sourceOrder: 0, targetOrder: 2 },
      { source: 'connectivity', target: 'gross_revenue', value: 20.0, width: 186, sourceWidth: 186, targetWidth: 186, y0: 621, y1: 720, sourceOrder: 0, targetOrder: 0 },
      { source: 'corporate', target: 'gross_revenue', value: 1.1, width: 8, sourceWidth: 8, targetWidth: 8, y0: 850, y1: 817, sourceOrder: 0, targetOrder: 1 },
      { source: 'content_experiences', target: 'gross_revenue', value: 11.9, width: 110, sourceWidth: 110, targetWidth: 113, y0: 1040, y1: 877.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'content_experiences', target: 'eliminations_content', value: 1.1, width: 10, sourceWidth: 10, targetWidth: 10, y0: 1100, y1: 1204, sourceOrder: 1, targetOrder: 0, curve: { x0: 779, x1: 1018, c1x: 865, c1y: 1100, c2x: 935, c2y: 1204 } },
      { source: 'gross_revenue', target: 'revenue', value: 31.5, width: 293, sourceWidth: 293, targetWidth: 293, y0: 773.5, y1: 833.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations_gross', value: 1.5, width: 13, sourceWidth: 14, targetWidth: 13, y0: 927, y1: 1127.5, sourceOrder: 1, targetOrder: 0, curve: { x0: 1090, x1: 1330, c1x: 1170, c1y: 927, c2x: 1250, c2y: 1127.5 } },
      { source: 'revenue', target: 'gross_profit', value: 20.6, width: 191, sourceWidth: 191, targetWidth: 193, y0: 782.5, y1: 713.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'programming_production', value: 10.9, width: 102, sourceWidth: 102, targetWidth: 102, y0: 929, y1: 1018, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.1, width: 39, sourceWidth: 40, targetWidth: 39, y0: 637, y1: 506.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 16.4, width: 153, sourceWidth: 153, targetWidth: 153, y0: 733.5, y1: 784.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.0, width: 19, sourceWidth: 19, targetWidth: 18, y0: 496.5, y1: 387, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 1.1, width: 10, sourceWidth: 10, targetWidth: 9, y0: 511, y1: 578.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.7, width: 7, sourceWidth: 7, targetWidth: 5, y0: 519.5, y1: 668.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.3, width: 3, sourceWidth: 3, targetWidth: 2, y0: 524.5, y1: 758, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_administrative', value: 10.4, width: 97, sourceWidth: 97, targetWidth: 97, y0: 756.5, y1: 918.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation', value: 2.3, width: 22, sourceWidth: 22, targetWidth: 19, y0: 816, y1: 1074.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'advertising', value: 2.2, width: 20, sourceWidth: 20, targetWidth: 21, y0: 837, y1: 1175.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 1.5, width: 14, sourceWidth: 14, targetWidth: 13, y0: 854, y1: 1281.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '康卡斯特 · 2026 财年第一季度',
        meta: {
          title: '康卡斯特 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleTextLength: 2300,
        },
        nodes: {
          residential_connectivity: { label: '住宅连接业务', notes: [ZH.yyResidential] },
          comcast_business: { label: 'Comcast 商务', notes: [ZH.yyBusiness] },
          connectivity: { label: ZH.connectivity, notes: [ZH.yyConnectivity] },
          corporate: { label: ZH.corporate, notes: [ZH.yyCorporate] },
          media: { label: ZH.media, notes: [ZH.yyMedia] },
          studios: { label: ZH.studios, notes: [ZH.yyStudios] },
          parks: { label: ZH.parks, notes: [ZH.yyParks] },
          content_experiences: { label: ZH.content, notes: [ZH.yyContent] },
          eliminations_content: { label: ZH.eliminations },
          revenue: { label: ZH.revenue, notes: [ZH.yyRevenue] },
          eliminations_gross: { label: ZH.eliminations },
          gross_profit: { label: ZH.gross, notes: [ZH.grossMargin, ZH.grossPp] },
          programming_production: { label: ZH.programming },
          operating_profit: { label: ZH.operating, notes: [ZH.operatingMargin, ZH.operatingPp] },
          operating_expenses: { label: ZH.operatingExpenses },
          net_profit: { label: ZH.net, notes: [ZH.netMargin, ZH.netPp] },
          interest: { label: ZH.interest }, tax: { label: ZH.tax }, other: { label: ZH.other },
          other_operating_administrative: { label: ZH.otherOperating }, depreciation: { label: ZH.depreciation },
          advertising: { label: ZH.advertising }, amortization: { label: ZH.amortization },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
