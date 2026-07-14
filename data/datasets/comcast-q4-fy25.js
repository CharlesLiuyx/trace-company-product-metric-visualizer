/* ====================================================================
 * Comcast - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/comcast-q4-fy25.png as a fixed
 * d3-sankey layout with validated Comcast raster annotations.
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
    net: 'Net profit', interest: 'Interest', other: 'Other', tax: 'Tax',
    otherOperating: ['Other operating &', 'administrative'], advertising: 'Advertising',
    depreciation: 'Depreciation', amortization: 'Amortization',
    yyResidential: '(2%) Y/Y', yyConnectivity: '(1%) Y/Y', yyBusiness: '+6% Y/Y', yyCorporate: '+9% Y/Y',
    yyMedia: '+6% Y/Y', yyStudios: '(7%) Y/Y', yyParks: '+22% Y/Y', yyContent: '+5% Y/Y', yyRevenue: '+4% Y/Y',
    grossMargin: '68% margin', grossPp: '(0pp) Y/Y', operatingMargin: '11% margin', operatingPp: '(5pp) Y/Y',
    netMargin: '6% margin', netPp: '(8pp) Y/Y',
  };

  const ZH = {
    connectivity: '连接业务', corporate: '企业及其他', media: '媒体', studios: '影视工作室', parks: '主题公园',
    content: ['内容与', '体验'], revenue: '收入', eliminations: '抵销',
    gross: ['毛', '利润'], programming: ['节目', '制作'],
    operating: ['营业', '利润'], operatingExpenses: ['营业', '费用'],
    net: '净利润', interest: '利息', other: '其他', tax: '税费',
    otherOperating: ['其他运营', '及管理'], advertising: '广告',
    depreciation: '折旧', amortization: '摊销',
    yyResidential: '同比 (2%)', yyConnectivity: '同比 (1%)', yyBusiness: '同比 +6%', yyCorporate: '同比 +9%',
    yyMedia: '同比 +6%', yyStudios: '同比 (7%)', yyParks: '同比 +22%', yyContent: '同比 +5%', yyRevenue: '同比 +4%',
    grossMargin: '利润率 68%', grossPp: '同比 (0 个百分点)', operatingMargin: '利润率 11%', operatingPp: '同比 (5 个百分点)',
    netMargin: '利润率 6%', netPp: '同比 (8 个百分点)',
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
        blocks: [{ x: 742, top: 372, anchor: 'middle', lineGap: 9, lines: [name(T.connectivity), value(), note(T.yyConnectivity)] }],
      },
      corporate: {
        blocks: [
          { x: 742, top: 737, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyCorporate)] },
          { x: 690, top: 816, anchor: 'end', lines: [name(T.corporate, BLACK, isZh ? 34 : 40)] },
        ],
      },
      media: {
        blocks: [
          { x: 431, top: 819, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyMedia)] },
          { x: 376, top: 904, anchor: 'end', lines: [name(T.media, BLACK, isZh ? 36 : 40)] },
        ],
      },
      studios: {
        blocks: [
          { x: 431, top: 993, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyStudios)] },
          { x: 376, top: 1082, anchor: 'end', lines: [name(T.studios, BLACK, isZh ? 34 : 40)] },
        ],
      },
      parks: {
        blocks: [
          { x: 431, top: 1143, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyParks)] },
          { x: 376, top: 1231, anchor: 'end', lines: [name(T.parks, BLACK, isZh ? 36 : 40)] },
        ],
      },
      content_experiences: {
        blocks: [
          { x: 742, top: 1104, anchor: 'middle', lineGap: 8, lines: [value(), note(T.yyContent)] },
          { x: 742, top: 1196, anchor: 'middle', lineGap: 10, lines: T.content.map((text) => name(text, BLACK, 36)) },
        ],
      },
      gross_revenue: { blocks: [] },
      eliminations_content: {
        blocks: [{ x: 1054, top: 1218, anchor: 'middle', lineGap: 8, lines: [name(T.eliminations, RED_LABEL, isZh ? 31 : 34), value(RED_LABEL, 33)] }],
      },
      revenue: {
        blocks: [{ x: 1366, top: 542, anchor: 'middle', lineGap: 9, lines: [name(T.revenue), value(), note(T.yyRevenue)] }],
      },
      eliminations_gross: {
        blocks: [{ x: 1366, top: 1128, anchor: 'middle', lineGap: 8, lines: [name(T.eliminations, RED_LABEL, isZh ? 31 : 34), value(RED_LABEL, 33)] }],
      },
      gross_profit: {
        blocks: [{ x: 1677, top: 365, anchor: 'middle', lineGap: 9, lines: [...T.gross.map((text) => name(text, GREEN_LABEL)), value(GREEN_LABEL), note(T.grossMargin), note(T.grossPp)] }],
      },
      programming_production: {
        blocks: [{ x: 1677, top: 1175, anchor: 'middle', lineGap: 9, lines: [...T.programming.map((text) => name(text, RED_LABEL)), value(RED_LABEL)] }],
      },
      operating_profit: {
        blocks: [{ x: 1990.5, top: 224, anchor: 'middle', lineGap: 9, lines: [...T.operating.map((text) => name(text, GREEN_LABEL)), value(GREEN_LABEL), note(T.operatingMargin), note(T.operatingPp)] }],
      },
      operating_expenses: {
        blocks: [{ x: 1989, top: 940, anchor: 'middle', lineGap: 9, lines: [...T.operatingExpenses.map((text) => name(text, RED_LABEL)), value(RED_LABEL)] }],
      },
      net_profit: {
        blocks: [{ x: 2490, top: 400, anchor: 'middle', lineGap: 8, lines: [name(T.net, GREEN_LABEL, isZh ? 36 : 40), value(GREEN_LABEL), note(T.netMargin), note(T.netPp)] }],
      },
      interest: {
        blocks: [{ x: 2465, top: 600, anchor: 'middle', lineGap: 8, lines: [name(T.interest, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      other: {
        blocks: [{ x: 2465, top: 684, anchor: 'middle', lineGap: 8, lines: [name(T.other, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      tax: {
        blocks: [{ x: 2465, top: 765, anchor: 'middle', lineGap: 8, lines: [name(T.tax, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      other_operating_administrative: {
        blocks: [{ x: 2514, top: 866, anchor: 'middle', lineGap: 8, lines: [...T.otherOperating.map((text) => name(text, RED_LABEL, sideSize)), value(RED_LABEL, sideSize)] }],
      },
      advertising: {
        blocks: [{ x: 2493, top: 1053, anchor: 'middle', lineGap: 8, lines: [name(T.advertising, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      depreciation: {
        blocks: [{ x: 2493, top: 1164, anchor: 'middle', lineGap: 8, lines: [name(T.depreciation, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
      amortization: {
        blocks: [{ x: 2493, top: 1275, anchor: 'middle', lineGap: 8, lines: [name(T.amortization, RED_LABEL, sideSize), value(RED_LABEL, sideSize)] }],
      },
    };
  }

  const labelsEn = labels(EN);
  const labelsZh = labels(ZH, true);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'comcast-q4-fy25',
    name: 'Comcast · Q4 FY25',
    company: 'Comcast',
    meta: {
      company: 'Comcast',
      title: 'Comcast Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/comcast-q4-fy25.png', width: 2667, height: 1500 },
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
        // The reviewer confirmed that these are continuous financial faces.
        // The source raster's anti-aliased / fine-line sockets must not
        // preserve underfilled candidate endpoints; the Build Interface
        // Matrix records the correction as a design-spec decision.
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
          'net_profit:left', 'interest:left', 'other:left', 'tax:left',
          'other_operating_administrative:left', 'advertising:left',
          'depreciation:left', 'amortization:left',
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
      scale: 8.75,
      nodes: {
        residential_connectivity: { x: 394, y: 436, width: 73, height: 156 },
        comcast_business: { x: 394, y: 733, width: 73, height: 21 },
        connectivity: { x: 706, y: 520, width: 73, height: 177 },
        corporate: { x: 706, y: 826, width: 73, height: 11 },
        media: { x: 394, y: 910, width: 73, height: 67 },
        studios: { x: 394, y: 1095, width: 73, height: 26 },
        parks: { x: 394, y: 1240, width: 73, height: 26 },
        content_experiences: { x: 706, y: 977, width: 73, height: 118 },
        gross_revenue: { x: 1018, y: 602, width: 73, height: 296 },
        eliminations_content: { x: 1018, y: 1204, width: 73, height: 7 },
        revenue: { x: 1330, y: 681, width: 73, height: 283 },
        eliminations_gross: { x: 1330, y: 1108, width: 73, height: 13 },
        gross_profit: { x: 1642, y: 610, width: 73, height: 193 },
        programming_production: { x: 1642, y: 1077, width: 73, height: 90 },
        operating_profit: { x: 1954, y: 450, width: 73, height: 31 },
        operating_expenses: { x: 1954, y: 770, width: 73, height: 162 },
        net_profit: { x: 2295, y: 450, width: 73, height: 18 },
        interest: { x: 2295, y: 625, width: 73, height: 10 },
        other: { x: 2295, y: 716, width: 73, height: 3 },
        tax: { x: 2295, y: 792, width: 73, height: 3 },
        other_operating_administrative: { x: 2295, y: 855, width: 73, height: 104 },
        advertising: { x: 2295, y: 1072, width: 73, height: 21 },
        depreciation: { x: 2295, y: 1182, width: 73, height: 21 },
        amortization: { x: 2295, y: 1292, width: 73, height: 16 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'residential_connectivity', col: 0, order: 0, type: 'source', label: 'Residential Connectivity', value: 17.6, valueText: '$17.6B', notes: [EN.yyResidential], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'comcast_business', col: 0, order: 1, type: 'source', label: 'Comcast Business', value: 2.6, valueText: '$2.6B', notes: [EN.yyBusiness], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'connectivity', col: 1, order: 0, type: 'hub', label: EN.connectivity, value: 20.2, valueText: '$20.2B', notes: [EN.yyConnectivity], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'corporate', col: 1, order: 1, type: 'source', label: EN.corporate, value: 0.9, valueText: '$0.9B', notes: [EN.yyCorporate], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'media', col: 0, order: 2, type: 'source', label: EN.media, value: 7.6, valueText: '$7.6B', notes: [EN.yyMedia], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'studios', col: 0, order: 3, type: 'source', label: EN.studios, value: 3.0, valueText: '$3.0B', notes: [EN.yyStudios], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'parks', col: 0, order: 4, type: 'source', label: EN.parks, value: 2.9, valueText: '$2.9B', notes: [EN.yyParks], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'content_experiences', col: 1, order: 2, type: 'hub', label: EN.content, value: 13.5, valueText: '$13.5B', notes: [EN.yyContent], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_revenue', col: 2, order: 0, type: 'hub', label: '', value: 33.8, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations_content', col: 2, order: 1, type: 'cost', label: EN.eliminations, value: 0.8, valueText: '($0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: EN.revenue, value: 32.31, valueText: '$32.3B', notes: [EN.yyRevenue], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations_gross', col: 3, order: 1, type: 'cost', label: EN.eliminations, value: 1.49, valueText: '($1.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: EN.gross, value: 22.005, valueText: '$22.0B', notes: [EN.grossMargin, EN.grossPp], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'programming_production', col: 4, order: 1, type: 'cost', label: EN.programming, value: 10.305, valueText: '($10.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: EN.operating, value: 3.488, valueText: '$3.5B', notes: [EN.operatingMargin, EN.operatingPp], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: EN.operatingExpenses, value: 18.517, valueText: '($18.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: EN.net, value: 2.071, valueText: '$2.1B', notes: [EN.netMargin, EN.netPp], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 6, order: 1, type: 'cost', label: EN.interest, value: 1.126, valueText: '($1.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 6, order: 2, type: 'cost', label: EN.other, value: 0.202, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 6, order: 3, type: 'cost', label: EN.tax, value: 0.089, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_administrative', col: 6, order: 4, type: 'cost', label: EN.otherOperating, value: 11.903, valueText: '($11.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'advertising', col: 6, order: 5, type: 'cost', label: EN.advertising, value: 2.427, valueText: '($2.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation', col: 6, order: 6, type: 'cost', label: EN.depreciation, value: 2.393, valueText: '($2.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 6, order: 7, type: 'cost', label: EN.amortization, value: 1.794, valueText: '($1.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'residential_connectivity', target: 'connectivity', value: 17.6, width: 156, sourceWidth: 156, targetWidth: 156, y0: 514, y1: 598, sourceOrder: 0, targetOrder: 0 },
      { source: 'comcast_business', target: 'connectivity', value: 2.6, width: 21, sourceWidth: 21, targetWidth: 21, y0: 743.5, y1: 686.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'media', target: 'content_experiences', value: 7.6, width: 67, sourceWidth: 67, targetWidth: 67, y0: 943.5, y1: 1010.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'studios', target: 'content_experiences', value: 3.0, width: 26, sourceWidth: 26, targetWidth: 26, y0: 1108, y1: 1057, sourceOrder: 0, targetOrder: 1 },
      { source: 'parks', target: 'content_experiences', value: 2.9, width: 26, sourceWidth: 26, targetWidth: 26, y0: 1253, y1: 1082, sourceOrder: 0, targetOrder: 2 },
      { source: 'connectivity', target: 'gross_revenue', value: 20.2, width: 177, sourceWidth: 177, targetWidth: 177, y0: 608.5, y1: 690.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'corporate', target: 'gross_revenue', value: 0.9, width: 11, sourceWidth: 11, targetWidth: 11, y0: 831.5, y1: 784.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'content_experiences', target: 'gross_revenue', value: 12.7, width: 111, sourceWidth: 111, targetWidth: 108, y0: 1032.5, y1: 844, sourceOrder: 0, targetOrder: 2 },
      { source: 'content_experiences', target: 'eliminations_content', value: 0.8, width: 7, sourceWidth: 7, targetWidth: 7, y0: 1091.5, y1: 1207.5, sourceOrder: 1, targetOrder: 0, curve: { x0: 779, x1: 1018, c1x: 865, c1y: 1091.5, c2x: 935, c2y: 1207.5 } },
      { source: 'gross_revenue', target: 'revenue', value: 32.31, width: 283, sourceWidth: 283, targetWidth: 283, y0: 743.5, y1: 822.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations_gross', value: 1.49, width: 13, sourceWidth: 13, targetWidth: 13, y0: 891.5, y1: 1114.5, sourceOrder: 1, targetOrder: 0, curve: { x0: 1091, x1: 1330, c1x: 1170, c1y: 891.5, c2x: 1250, c2y: 1114.5 } },
      { source: 'revenue', target: 'gross_profit', value: 22.005, width: 193, sourceWidth: 193, targetWidth: 193, y0: 777.5, y1: 706.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'programming_production', value: 10.305, width: 90, sourceWidth: 90, targetWidth: 90, y0: 919, y1: 1122, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.488, width: 31, sourceWidth: 31, targetWidth: 31, y0: 625.5, y1: 465.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 18.517, width: 162, sourceWidth: 162, targetWidth: 162, y0: 722, y1: 851, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.071, width: 18, sourceWidth: 18, targetWidth: 18, y0: 459, y1: 459, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 1.126, width: 10, sourceWidth: 10, targetWidth: 10, y0: 473, y1: 630, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.202, width: 2, sourceWidth: 2, targetWidth: 3, y0: 479, y1: 717.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.089, width: 1, sourceWidth: 1, targetWidth: 3, y0: 480.5, y1: 793.5, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_administrative', value: 11.903, width: 104, sourceWidth: 104, targetWidth: 104, y0: 822, y1: 907, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'advertising', value: 2.427, width: 21, sourceWidth: 21, targetWidth: 21, y0: 884.5, y1: 1082.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation', value: 2.393, width: 21, sourceWidth: 21, targetWidth: 21, y0: 905.5, y1: 1192.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 1.794, width: 16, sourceWidth: 16, targetWidth: 16, y0: 924, y1: 1300, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '康卡斯特 · 2025 财年第四季度',
        meta: {
          title: '康卡斯特 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
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
          interest: { label: ZH.interest }, other: { label: ZH.other }, tax: { label: ZH.tax },
          other_operating_administrative: { label: ZH.otherOperating }, advertising: { label: ZH.advertising },
          depreciation: { label: ZH.depreciation }, amortization: { label: ZH.amortization },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
