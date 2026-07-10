/* ====================================================================
 * Warner Bros. Discovery - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/warner-bros-q4-fy25.png as a fixed
 * d3-sankey layout with validated, reused Warner Bros. raster annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#0020af';
  const BLUE_LINK = '#8593d3';
  const TITLE = '#155077';
  const NOTE = '#727272';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#11955c';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#8d1400';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2500;

  const EN = {
    studios: 'Studios', networks: 'Networks', streaming: 'Streaming', revenue: 'Revenue',
    eliminations: 'Eliminations', grossProfit: 'Gross profit', cost: ['Cost of', 'revenue'],
    operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
    netLoss: 'Net loss', other: 'Other', sga: 'SG&A', amortization: 'Amortization',
    yy13: '(13%) Y/Y', yy12: '(12%) Y/Y', yy5: '+5% Y/Y', yy6: '(6%) Y/Y',
    studiosMargin: '23% adj. margin', studiosPp: '(3pp) Y/Y',
    networksMargin: '33% adj. margin', networksPp: '(7pp) Y/Y',
    streamingMargin: '14% adj. margin', streamingPp: '(1pp) Y/Y',
    grossMargin: '45% margin', grossPp: '(0pp) Y/Y', operatingMargin: '4% margin', operatingPp: '+2pp Y/Y',
    sgaMargin: '25% of revenue', sgaPp: '+3pp Y/Y', amortizationMargin: '14% of revenue', amortizationPp: '(2pp) Y/Y',
  };

  const ZH = {
    studios: '影视工作室', networks: '线性网络', streaming: '流媒体', revenue: '收入',
    eliminations: '抵销', grossProfit: '毛利润', cost: ['收入', '成本'],
    operatingProfit: '营业利润', operatingExpenses: ['营业', '费用'],
    netLoss: '净亏损', other: '其他', sga: '销售、一般及行政', amortization: '摊销',
    yy13: '同比 (13%)', yy12: '同比 (12%)', yy5: '同比 +5%', yy6: '同比 (6%)',
    studiosMargin: '调整后利润率 23%', studiosPp: '同比 (3 个百分点)',
    networksMargin: '调整后利润率 33%', networksPp: '同比 (7 个百分点)',
    streamingMargin: '调整后利润率 14%', streamingPp: '同比 (1 个百分点)',
    grossMargin: '利润率 45%', grossPp: '同比 (0 个百分点)', operatingMargin: '利润率 4%', operatingPp: '同比 +2 个百分点',
    sgaMargin: '占收入 25%', sgaPp: '同比 +3 个百分点', amortizationMargin: '占收入 14%', amortizationPp: '同比 (2 个百分点)',
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
          { x: 464, top: 316, anchor: 'middle', lineGap: 8, lines: [valueLine(BLUE), noteLine(T.yy13)] },
          { x: 405, top: 404, anchor: 'end', lines: [nameLine(T.studios)] },
          { x: 405, top: 462, anchor: 'end', lineGap: 8, lines: [noteLine(T.studiosMargin), noteLine(T.studiosPp)] },
        ],
      },
      networks: {
        blocks: [
          { x: 464, top: 603, anchor: 'middle', lineGap: 8, lines: [valueLine(BLUE), noteLine(T.yy12)] },
          { x: 405, top: 714, anchor: 'end', lines: [nameLine(T.networks)] },
          { x: 405, top: 773, anchor: 'end', lineGap: 8, lines: [noteLine(T.networksMargin), noteLine(T.networksPp)] },
        ],
      },
      streaming: {
        blocks: [
          { x: 464, top: 901, anchor: 'middle', lineGap: 8, lines: [valueLine(BLUE), noteLine(T.yy5)] },
          { x: 405, top: 993, anchor: 'end', lines: [nameLine(T.streaming)] },
          { x: 405, top: 1044, anchor: 'end', lineGap: 8, lines: [noteLine(T.streamingMargin), noteLine(T.streamingPp)] },
        ],
      },
      revenue: {
        blocks: [
          { x: 1212, top: 509, anchor: 'middle', lineGap: 9, lines: [nameLine(T.revenue), valueLine(BLUE), noteLine(T.yy6)] },
        ],
      },
      eliminations: {
        blocks: [
          { x: 1212, top: 1150, anchor: 'middle', lineGap: 8, lines: [nameLine(T.eliminations, RED_LABEL, 34), valueLine(RED_LABEL, 33)] },
        ],
      },
      gross_profit: {
        blocks: [
          { x: 1585, top: 382, anchor: 'middle', lineGap: 8, lines: [nameLine(T.grossProfit, GREEN_LABEL), valueLine(GREEN_LABEL), noteLine(T.grossMargin), noteLine(T.grossPp)] },
        ],
      },
      cost_of_revenue: {
        blocks: [
          { x: 1585, top: 1097, anchor: 'middle', lineGap: 8, lines: [...T.cost.map((text) => nameLine(text, RED_LABEL)), valueLine(RED_LABEL)] },
        ],
      },
      operating_profit: {
        blocks: [
          { x: 1958, top: 308, anchor: 'middle', lineGap: 8, lines: [nameLine(T.operatingProfit, GREEN_LABEL), valueLine(GREEN_LABEL), noteLine(T.operatingMargin), noteLine(T.operatingPp)] },
        ],
      },
      operating_expenses: {
        blocks: [
          { x: 1958, top: 825, anchor: 'middle', lineGap: 8, lines: [...T.operatingExpenses.map((text) => nameLine(text, RED_LABEL)), valueLine(RED_LABEL)] },
        ],
      },
      net_loss: {
        blocks: [
          { x: 2212, top: 508, anchor: 'middle', lineGap: 8, lines: [nameLine(T.netLoss, RED_LABEL, 34), valueLine(RED_LABEL, 33)] },
        ],
      },
      other_nonoperating: {
        blocks: [
          { x: RIGHT_LABEL_X, top: 368, anchor: 'middle', lineGap: 8, lines: [nameLine(T.other, RED_LABEL, 34), valueLine(RED_LABEL, 33)] },
        ],
      },
      sga: {
        blocks: [
          { x: RIGHT_LABEL_X, top: 776, anchor: 'middle', lineGap: 8, lines: [nameLine(T.sga, RED_LABEL, 34), valueLine(RED_LABEL, 33), noteLine(T.sgaMargin), noteLine(T.sgaPp)] },
        ],
      },
      amortization: {
        blocks: [
          { x: RIGHT_LABEL_X, top: 988, anchor: 'middle', lineGap: 8, lines: [nameLine(T.amortization, RED_LABEL, 34), valueLine(RED_LABEL, 33), noteLine(T.amortizationMargin), noteLine(T.amortizationPp)] },
        ],
      },
      other_operating_expense: {
        blocks: [
          { x: RIGHT_LABEL_X, top: 1197, anchor: 'middle', lineGap: 8, lines: [nameLine(T.other, RED_LABEL, 34), valueLine(RED_LABEL, 33)] },
        ],
      },
    };
  }

  function statCard(isZh) {
    const copy = isZh
      ? { subscribers: 'DTC 订阅用户', subscriberValue: '132M（同比 +13%，环比 +3%）', arpu: '全球 ARPU', arpuValue: '$6.80（同比 -9%，环比 +2%）', definition: 'ARPU = 每用户平均收入' }
      : { subscribers: 'DTC subscribers', subscriberValue: '132M (+13% Y/Y +3% Q/Q)', arpu: 'Global ARPU', arpuValue: '$6.80 (-9% Y/Y & +2% Q/Q)', definition: 'ARPU = Average Revenue Per User' };
    return `
      <g font-family="Montserrat,Arial,sans-serif">
        <rect x="47" y="1197" width="839" height="120" rx="31" fill="${BLUE}"/>
        <text x="156" y="1248" font-size="30" fill="#ffffff"><tspan font-weight="800">${copy.subscribers}</tspan><tspan font-weight="400"> ${copy.subscriberValue}</tspan></text>
        <text x="156" y="1289" font-size="30" fill="#ffffff"><tspan font-weight="800">${copy.arpu}</tspan><tspan font-weight="400"> ${copy.arpuValue}</tspan></text>
        <text x="199" y="1350" font-size="29" font-weight="400" fill="${NOTE}">${copy.definition}</text>
      </g>`;
  }

  const zhLabels = labels(ZH);
  // The localized SG&A name is wider than its English counterpart; preserve
  // the source's right-side reading column while clearing the terminal bar.
  zhLabels.sga.blocks[0].x = 2510;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'warner-bros-q4-fy25',
    name: 'Warner Bros. Discovery · Q4 FY25',
    company: 'Warner Bros. Discovery',
    meta: {
      company: 'Warner Bros. Discovery',
      title: 'Warner Bros. Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/warner-bros-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 195,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2428,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
        studios: { x: 428, y: 416, width: 72, height: 110 },
        networks: { x: 428, y: 703, width: 72, height: 143 },
        streaming: { x: 428, y: 1000, width: 72, height: 95 },
        gross_revenue: { x: 802, y: 573, width: 71, height: 348 },
        revenue: { x: 1176, y: 660, width: 71, height: 323 },
        eliminations: { x: 1176, y: 1113, width: 71, height: 24 },
        gross_profit: { x: 1549, y: 572, width: 71, height: 143 },
        cost_of_revenue: { x: 1549, y: 908, width: 71, height: 177 },
        operating_profit: { x: 1922, y: 500, width: 71, height: 11 },
        operating_expenses: { x: 1923, y: 681, width: 71, height: 132 },
        net_loss: { x: 2176, y: 489, width: 72, height: 8 },
        other_nonoperating: { x: 2297, y: 402, width: 71, height: 20 },
        sga: { x: 2297, y: 798, width: 71, height: 81 },
        amortization: { x: 2297, y: 1027, width: 71, height: 43 },
        other_operating_expense: { x: 2297, y: 1240, width: 71, height: 8 },
      },
      labels: labels(EN),
    },
    nodes: [
      { id: 'studios', col: 0, order: 0, type: 'source', label: EN.studios, value: 3.2, notes: [EN.yy13, EN.studiosMargin, EN.studiosPp] },
      { id: 'networks', col: 0, order: 1, type: 'source', label: EN.networks, value: 4.2, notes: [EN.yy12, EN.networksMargin, EN.networksPp] },
      { id: 'streaming', col: 0, order: 2, type: 'source', label: EN.streaming, value: 2.8, notes: [EN.yy5, EN.streamingMargin, EN.streamingPp] },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: 'Gross revenue', value: 10.2 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: EN.revenue, value: 9.5, notes: [EN.yy6] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: EN.eliminations, value: 0.7 },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: EN.grossProfit, value: 4.2, notes: [EN.grossMargin, EN.grossPp] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: EN.cost, value: 5.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: EN.operatingProfit, value: 0.3, notes: [EN.operatingMargin, EN.operatingPp] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: EN.operatingExpenses, value: 3.9 },
      { id: 'net_loss', col: 5, order: 0, type: 'cost', label: EN.netLoss, value: 0.2 },
      { id: 'other_nonoperating', col: 6, order: 0, type: 'cost', label: EN.other, value: 0.6 },
      { id: 'sga', col: 6, order: 1, type: 'cost', label: EN.sga, value: 2.4, notes: [EN.sgaMargin, EN.sgaPp] },
      { id: 'amortization', col: 6, order: 2, type: 'cost', label: EN.amortization, value: 1.3, notes: [EN.amortizationMargin, EN.amortizationPp] },
      { id: 'other_operating_expense', col: 6, order: 3, type: 'cost', label: EN.other, value: 0.2 },
    ],
    links: [
      { source: 'studios', target: 'gross_revenue', value: 3.2, width: 110, sourceOrder: 0, targetOrder: 0 },
      { source: 'networks', target: 'gross_revenue', value: 4.2, width: 143, sourceOrder: 0, targetOrder: 1 },
      { source: 'streaming', target: 'gross_revenue', value: 2.8, width: 95, sourceOrder: 0, targetOrder: 2 },
      { source: 'gross_revenue', target: 'revenue', value: 9.5, width: 323, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.7, width: 24, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 4.2, sourceWidth: 144, targetWidth: 143, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.2, sourceWidth: 179, targetWidth: 177, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.3, width: 11, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.9, width: 132, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 2.4, width: 81, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 1.3, width: 43, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 0.2, width: 8, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.3, sourceWidth: 11, targetWidth: 12, y0: 505.5, y1: 408, sourceOrder: 0, targetOrder: 0 },
      { source: 'net_loss', target: 'other_nonoperating', value: 0.2, sourceWidth: 8, targetWidth: 8, y0: 493, y1: 418, sourceOrder: 0, targetOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'Warner Bros. Discovery · 2025 财年第四季度',
        meta: {
          title: 'Warner Bros. 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 2160,
        },
        annotationsSvg: statCard(true),
        nodes: {
          studios: { label: ZH.studios, notes: [ZH.yy13, ZH.studiosMargin, ZH.studiosPp] },
          networks: { label: ZH.networks, notes: [ZH.yy12, ZH.networksMargin, ZH.networksPp] },
          streaming: { label: ZH.streaming, notes: [ZH.yy5, ZH.streamingMargin, ZH.streamingPp] },
          gross_revenue: { label: '总收入' }, revenue: { label: ZH.revenue, notes: [ZH.yy6] },
          eliminations: { label: ZH.eliminations }, gross_profit: { label: ZH.grossProfit, notes: [ZH.grossMargin, ZH.grossPp] },
          cost_of_revenue: { label: ZH.cost }, operating_profit: { label: ZH.operatingProfit, notes: [ZH.operatingMargin, ZH.operatingPp] },
          operating_expenses: { label: ZH.operatingExpenses }, net_loss: { label: ZH.netLoss },
          other_nonoperating: { label: ZH.other }, sga: { label: ZH.sga, notes: [ZH.sgaMargin, ZH.sgaPp] },
          amortization: { label: ZH.amortization, notes: [ZH.amortizationMargin, ZH.amortizationPp] },
          other_operating_expense: { label: ZH.other },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
