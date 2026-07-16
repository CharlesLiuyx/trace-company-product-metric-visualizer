/* ====================================================================
 * Warner Bros. Discovery - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/warner-bros-q3-fy25.png as a fixed
 * d3-sankey layout with validated, reused Warner Bros. raster annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#0020af';
  const BLUE_LINK = '#8593d3';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2490;

  const EN = {
    studios: 'Studios', networks: 'Networks', streaming: 'Streaming', revenue: 'Revenue',
    eliminations: 'Eliminations', grossProfit: 'Gross profit', cost: ['Cost of', 'revenue'],
    operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
    netLoss: 'Net loss', other: 'Other', sga: 'SG&A', amortization: 'Amortization',
    yy24: '+24% Y/Y', yy22: '(22%) Y/Y', yy0: '(0%) Y/Y', yy6: '(6%) Y/Y',
    studiosMargin: '21% adj. margin', studiosPp: '+9pp Y/Y',
    networksMargin: '44% adj. margin', networksPp: '+2pp Y/Y',
    streamingMargin: '13% adj. margin', streamingPp: '+2pp Y/Y',
    grossMargin: '50% margin', grossPp: '+3pp Y/Y',
    operatingMargin: '7% margin', operatingPp: '+4pp Y/Y',
    sgaMargin: '26% of revenue', sgaPp: '+1pp Y/Y',
    amortizationMargin: '15% of revenue', amortizationPp: '(3pp) Y/Y',
  };

  const ZH = {
    studios: '影视工作室', networks: '线性网络', streaming: '流媒体', revenue: '收入',
    eliminations: '抵销', grossProfit: '毛利润', cost: ['收入', '成本'],
    operatingProfit: '营业利润', operatingExpenses: ['营业', '费用'],
    netLoss: '净亏损', other: '其他', sga: '销售、一般及行政', amortization: '摊销',
    yy24: '同比 +24%', yy22: '同比 (22%)', yy0: '同比 (0%)', yy6: '同比 (6%)',
    studiosMargin: '调整后利润率 21%', studiosPp: '同比 +9 个百分点',
    networksMargin: '调整后利润率 44%', networksPp: '同比 +2 个百分点',
    streamingMargin: '调整后利润率 13%', streamingPp: '同比 +2 个百分点',
    grossMargin: '利润率 50%', grossPp: '同比 +3 个百分点',
    operatingMargin: '利润率 7%', operatingPp: '同比 +4 个百分点',
    sgaMargin: '占收入 26%', sgaPp: '同比 +1 个百分点',
    amortizationMargin: '占收入 15%', amortizationPp: '同比 (3 个百分点)',
  };

  const labelLine = (text, size, weight, color) => ({ text, size, weight, color });
  const nameLine = (text, color = BLUE, size = 40) => labelLine(text, size, 800, color);
  const valueLine = (color, size = 40) => labelLine('$value', size, 400, color);
  const noteLine = (text, size = 29) => labelLine(text, size, 400, NOTE);

  function labels(T) {
    return {
      gross_revenue: { blocks: [] },
      studios: {
        blocks: [
          { x: 464, top: 312, anchor: 'middle', lineGap: 8, lines: [valueLine(BLUE), noteLine(T.yy24)] },
          { x: 400, top: 405, anchor: 'end', lineGap: 12, lines: [nameLine(T.studios), noteLine(T.studiosMargin), noteLine(T.studiosPp)] },
        ],
      },
      networks: {
        blocks: [
          { x: 464, top: 608, anchor: 'middle', lineGap: 8, lines: [valueLine(BLUE), noteLine(T.yy22)] },
          { x: 405, top: 716, anchor: 'end', lineGap: 12, lines: [nameLine(T.networks), noteLine(T.networksMargin), noteLine(T.networksPp)] },
        ],
      },
      streaming: {
        blocks: [
          { x: 464, top: 907, anchor: 'middle', lineGap: 8, lines: [valueLine(BLUE), noteLine(T.yy0)] },
          { x: 405, top: 991, anchor: 'end', lineGap: 12, lines: [nameLine(T.streaming), noteLine(T.streamingMargin), noteLine(T.streamingPp)] },
        ],
      },
      revenue: {
        blocks: [
          { x: 1212, top: 502, anchor: 'middle', lineGap: 9, lines: [nameLine(T.revenue), valueLine(BLUE), noteLine(T.yy6)] },
        ],
      },
      eliminations: {
        blocks: [
          { x: 1212, top: 1167, anchor: 'middle', lineGap: 8, lines: [nameLine(T.eliminations, RED_LABEL, 34), valueLine(RED_LABEL, 33)] },
        ],
      },
      gross_profit: {
        blocks: [
          { x: 1585, top: 380, anchor: 'middle', lineGap: 8, lines: [nameLine(T.grossProfit, GREEN_LABEL), valueLine(GREEN_LABEL), noteLine(T.grossMargin), noteLine(T.grossPp)] },
        ],
      },
      cost_of_revenue: {
        blocks: [
          { x: 1585, top: 1098, anchor: 'middle', lineGap: 8, lines: [...T.cost.map((text) => nameLine(text, RED_LABEL)), valueLine(RED_LABEL)] },
        ],
      },
      operating_profit: {
        blocks: [
          { x: 1965, top: 286, anchor: 'middle', lineGap: 8, lines: [nameLine(T.operatingProfit, GREEN_LABEL), valueLine(GREEN_LABEL), noteLine(T.operatingMargin), noteLine(T.operatingPp)] },
        ],
      },
      operating_expenses: {
        blocks: [
          { x: 1966, top: 834, anchor: 'middle', lineGap: 8, lines: [...T.operatingExpenses.map((text) => nameLine(text, RED_LABEL)), valueLine(RED_LABEL)] },
        ],
      },
      net_loss: {
        blocks: [
          { x: 2190, top: 530, anchor: 'middle', lineGap: 8, lines: [nameLine(T.netLoss, RED_LABEL, 34), valueLine(RED_LABEL, 33)] },
        ],
      },
      other_nonoperating: {
        blocks: [
          { x: RIGHT_LABEL_X, top: 372, anchor: 'middle', lineGap: 8, lines: [nameLine(T.other, RED_LABEL, 34), valueLine(RED_LABEL, 33)] },
        ],
      },
      sga: {
        blocks: [
          { x: RIGHT_LABEL_X, top: 761, anchor: 'middle', lineGap: 8, lines: [nameLine(T.sga, RED_LABEL, 34), valueLine(RED_LABEL, 33), noteLine(T.sgaMargin), noteLine(T.sgaPp)] },
        ],
      },
      amortization: {
        blocks: [
          { x: 2500, top: 982, anchor: 'middle', lineGap: 8, lines: [nameLine(T.amortization, RED_LABEL, 34), valueLine(RED_LABEL, 33), noteLine(T.amortizationMargin), noteLine(T.amortizationPp)] },
        ],
      },
      other_operating_expense: {
        blocks: [
          { x: RIGHT_LABEL_X, top: 1188, anchor: 'middle', lineGap: 8, lines: [nameLine(T.other, RED_LABEL, 34), valueLine(RED_LABEL, 33)] },
        ],
      },
    };
  }

  function statCard(isZh) {
    const copy = isZh
      ? {
          subscribers: 'DTC 订阅用户',
          subscriberValue: '128M（同比 +16%，环比 +2%）',
          arpu: '全球 ARPU',
          arpuValue: '$6.64（同比 -15%，环比 -7%）',
          definition: 'ARPU = 每用户平均收入',
        }
      : {
          subscribers: 'DTC subscribers',
          subscriberValue: '128M (+16% Y/Y +2% Q/Q)',
          arpu: 'Global ARPU',
          arpuValue: '$6.64 (-15% Y/Y & -7% Q/Q)',
          definition: 'ARPU = Average Revenue Per User',
        };
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <rect x="47" y="1197" width="839" height="120" rx="31" fill="${BLUE}"/>
        <text x="156" y="1248" font-size="30" fill="#ffffff"><tspan font-weight="800">${copy.subscribers}</tspan><tspan font-weight="400"> ${copy.subscriberValue}</tspan></text>
        <text x="176" y="1289" font-size="30" fill="#ffffff"><tspan font-weight="800">${copy.arpu}</tspan><tspan font-weight="400"> ${copy.arpuValue}</tspan></text>
        <text x="199" y="1350" font-size="29" font-weight="400" fill="${NOTE}">${copy.definition}</text>
      </g>`;
  }

  const zhLabels = labels(ZH);
  zhLabels.sga.blocks[0].x = 2510;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'warner-bros-q3-fy25',
    name: 'Warner Bros. Discovery · Q3 FY25',
    company: 'Warner Bros. Discovery',
    meta: {
      company: 'Warner Bros. Discovery',
      title: 'Warner Bros. Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/warner-bros-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 195,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2428,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: statCard(false),
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/warner-bros/company-wordmark.png', x: 560, y: 219, width: 748, height: 270 },
      { key: 'business-studios-cluster', href: 'data/assets/raster-annotations/warner-bros/business-studios-cluster.png', x: 26, y: 360, width: 169, height: 177 },
      { key: 'business-networks-cluster', href: 'data/assets/raster-annotations/warner-bros/business-networks-cluster.png', x: 24, y: 631, width: 162, height: 251 },
      { key: 'business-streaming-cluster', href: 'data/assets/raster-annotations/warner-bros/business-streaming-cluster.png', x: 51, y: 963, width: 106, height: 190 },
    ],
    layout: {
      scale: 1,
      nodes: {
        studios: { x: 428, y: 409, width: 72, height: 126 },
        networks: { x: 428, y: 706, width: 72, height: 145 },
        streaming: { x: 428, y: 1005, width: 72, height: 98 },
        gross_revenue: { x: 802, y: 563, width: 71, height: 369 },
        revenue: { x: 1176, y: 648, width: 71, height: 338 },
        eliminations: { x: 1176, y: 1122, width: 71, height: 31 },
        gross_profit: { x: 1549, y: 563, width: 71, height: 167 },
        cost_of_revenue: { x: 1549, y: 916, width: 71, height: 169 },
        operating_profit: { x: 1923, y: 468, width: 71, height: 23 },
        operating_expenses: { x: 1936, y: 675, width: 71, height: 144 },
        net_loss: { x: 2154, y: 515, width: 71, height: 4 },
        other_nonoperating: { x: 2297, y: 403, width: 71, height: 27 },
        sga: { x: 2297, y: 759, width: 71, height: 87 },
        amortization: { x: 2297, y: 1012, width: 71, height: 51 },
        other_operating_expense: { x: 2297, y: 1228, width: 71, height: 6 },
      },
      labels: labels(EN),
    },
    nodes: [
      { id: 'studios', col: 0, order: 0, type: 'source', label: EN.studios, value: 3.3, notes: [EN.yy24, EN.studiosMargin, EN.studiosPp] },
      { id: 'networks', col: 0, order: 1, type: 'source', label: EN.networks, value: 3.9, notes: [EN.yy22, EN.networksMargin, EN.networksPp] },
      { id: 'streaming', col: 0, order: 2, type: 'source', label: EN.streaming, value: 2.6, notes: [EN.yy0, EN.streamingMargin, EN.streamingPp] },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: 'Gross revenue', value: 9.8 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: EN.revenue, value: 9.0, valueText: '$9.0B', notes: [EN.yy6] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: EN.eliminations, value: -0.8, valueText: '($0.8B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: EN.grossProfit, value: 4.5, notes: [EN.grossMargin, EN.grossPp] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: EN.cost, value: 4.6 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: EN.operatingProfit, value: 0.6, notes: [EN.operatingMargin, EN.operatingPp] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: EN.operatingExpenses, value: 3.9 },
      { id: 'net_loss', col: 5, order: 0, type: 'cost', label: EN.netLoss, value: -0.1, valueText: '($0.1B)' },
      { id: 'other_nonoperating', col: 6, order: 0, type: 'cost', label: EN.other, value: 0.6 },
      { id: 'sga', col: 6, order: 1, type: 'cost', label: EN.sga, value: 2.4, notes: [EN.sgaMargin, EN.sgaPp] },
      { id: 'amortization', col: 6, order: 2, type: 'cost', label: EN.amortization, value: 1.4, notes: [EN.amortizationMargin, EN.amortizationPp] },
      { id: 'other_operating_expense', col: 6, order: 3, type: 'cost', label: EN.other, value: 0.1 },
    ],
    links: [
      { source: 'studios', target: 'gross_revenue', value: 3.3, width: 126, sourceOrder: 0, targetOrder: 0 },
      { source: 'networks', target: 'gross_revenue', value: 3.9, width: 145, sourceOrder: 0, targetOrder: 1 },
      { source: 'streaming', target: 'gross_revenue', value: 2.6, width: 98, sourceOrder: 0, targetOrder: 2 },
      { source: 'gross_revenue', target: 'revenue', value: 9.0, width: 338, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.8, width: 31, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 4.5, sourceWidth: 168, targetWidth: 167, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.6, sourceWidth: 170, targetWidth: 169, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.6, width: 23, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.9, width: 144, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 2.4, width: 87, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 1.4, width: 51, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 0.1, width: 6, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.6, sourceWidth: 23, targetWidth: 23, y0: 479.5, y1: 414.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'net_loss', target: 'other_nonoperating', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 517, y1: 428, sourceOrder: 0, targetOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'Warner Bros. Discovery · 2025 财年第三季度',
        meta: {
          title: 'Warner Bros. 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 2160,
        },
        annotationsSvg: statCard(true),
        nodes: {
          studios: { label: ZH.studios, notes: [ZH.yy24, ZH.studiosMargin, ZH.studiosPp] },
          networks: { label: ZH.networks, notes: [ZH.yy22, ZH.networksMargin, ZH.networksPp] },
          streaming: { label: ZH.streaming, notes: [ZH.yy0, ZH.streamingMargin, ZH.streamingPp] },
          gross_revenue: { label: '总收入' },
          revenue: { label: ZH.revenue, notes: [ZH.yy6] },
          eliminations: { label: ZH.eliminations },
          gross_profit: { label: ZH.grossProfit, notes: [ZH.grossMargin, ZH.grossPp] },
          cost_of_revenue: { label: ZH.cost },
          operating_profit: { label: ZH.operatingProfit, notes: [ZH.operatingMargin, ZH.operatingPp] },
          operating_expenses: { label: ZH.operatingExpenses },
          net_loss: { label: ZH.netLoss },
          other_nonoperating: { label: ZH.other },
          sga: { label: ZH.sga, notes: [ZH.sgaMargin, ZH.sgaPp] },
          amortization: { label: ZH.amortization, notes: [ZH.amortizationMargin, ZH.amortizationPp] },
          other_operating_expense: { label: ZH.other },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
