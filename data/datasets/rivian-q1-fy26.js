/* ====================================================================
 * Rivian - Q1 FY26 income statement ($B)
 * Fixed d3-sankey layout reconstructed from the native Source. The vehicle
 * cluster is a validated runtime raster; the Rivian logo is pure SVG.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const ORANGE = '#f3af3d';
  const ORANGE_LINK = '#f2d3a0';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const logoSvg = `
    <g data-typography-role="brand">
      <text x="120" y="38" text-anchor="middle" font-family="Arial,sans-serif"
        font-size="38" font-weight="700" letter-spacing="12" fill="#000000">RIVIAN</text>
      <g transform="translate(120 124) rotate(45)">
        <rect x="-53" y="-53" width="106" height="106" rx="9" fill="none" stroke="#ffac00" stroke-width="24"/>
        <rect x="-25" y="-25" width="50" height="50" rx="8" fill="#ffac00"/>
        <path d="M-7 -49H7V49H-7Z" fill="#f2f2f2"/>
      </g>
    </g>`;

  function metricCard(x, title, value, note) {
    return `
      <g font-family="'Noto Sans',Arial,sans-serif">
        <rect x="${x}" y="1193" width="190" height="148" rx="30" fill="#f3ae3b"/>
        <text x="${x + 95}" y="1248" text-anchor="middle" font-size="28" font-weight="800" fill="#000000">${title}</text>
        <text x="${x + 95}" y="1287" text-anchor="middle" font-size="27" font-weight="500" fill="#000000">${value}</text>
        <text x="${x + 95}" y="1320" text-anchor="middle" font-size="22" font-weight="500" fill="#000000">${note}</text>
      </g>`;
  }

  const annotationsEn = `
    <g transform="translate(767 262)">${logoSvg}</g>
    ${metricCard(2060, 'Production', '10.4K', '+20% Y/Y')}
    ${metricCard(2255, 'Deliveries', '10.2K', '(30%) Y/Y')}`;

  const annotationsZh = `
    <g transform="translate(767 262)">${logoSvg}</g>
    ${metricCard(2060, '产量', '10.4K', '同比 +20%')}
    ${metricCard(2255, '交付量', '10.2K', '同比 (30%)')}`;

  const zhLabels = {
    automotive: {
      blocks: [
        { x: 422, top: 404, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (2%)', size: 28, weight: 400, color: NOTE }] },
        { x: 112, top: 495, anchor: 'start', lineGap: 8, lines: [{ text: '汽车业务', size: 40, weight: 800 }, { text: '毛利率 (7%)', size: 28, weight: 400, color: NOTE }, { text: '同比 (17 个百分点)', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    software_services: {
      blocks: [
        { x: 422, top: 878, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +49%', size: 28, weight: 400, color: NOTE }] },
        { x: 112, top: 994, anchor: 'start', lineGap: 8, lines: [{ text: '软件与服务', size: 40, weight: 800 }, { text: '毛利率 38%', size: 28, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    revenue: {
      blocks: [{ x: 877, top: 506, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +11%', size: 28, weight: 400, color: NOTE }] }],
    },
    gross_profit: {
      blocks: [{ x: 1356, top: 321, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 9%', size: 28, weight: 400, color: NOTE }, { text: '同比 (8 个百分点)', size: 28, weight: 400, color: NOTE }] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1356, top: 1119, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 37, weight: 800 }, { text: '成本', size: 37, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
    },
    operating_loss: {
      blocks: [{ x: 1589, top: 1020, anchor: 'middle', lineGap: 8, lines: [{ text: '营业', size: 40, weight: 800 }, { text: '亏损', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '利润率 (64%)', size: 28, weight: 400, color: NOTE }, { text: '同比 (11 个百分点)', size: 28, weight: 400, color: NOTE }] }],
    },
    operating_expenses: {
      blocks: [{ x: 1837, top: 487, anchor: 'middle', lineGap: 8, lines: [{ text: '运营', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }],
    },
    rnd: {
      blocks: [{ x: 2356, top: 476, anchor: 'start', lineGap: 8, lines: [{ text: '研究与', size: 34, weight: 800 }, { text: '开发', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 33%', size: 28, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE }] }],
    },
    sga: {
      blocks: [{ x: 2470, top: 987, anchor: 'middle', lineGap: 8, lines: [{ text: '销售、一般及', size: 30, weight: 800 }, { text: '行政费用', size: 30, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 39%', size: 28, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE }] }],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'rivian-q1-fy26',
    name: 'Rivian · Q1 FY26',
    company: 'Rivian',
    meta: {
      company: 'Rivian',
      title: 'Rivian Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/rivian-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2102,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: BLACK },
        hub: { node: ORANGE, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: ORANGE_LINK, hub: ORANGE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'rivian-automotive-vehicles',
        href: 'data/assets/raster-annotations/rivian/automotive-vehicles.png',
        x: 50,
        y: 620,
        width: 320,
        height: 188,
      },
    ],
    layout: {
      scale: 259,
      nodes: {
        automotive: { x: 387, y: 495, width: 71, height: 235 },
        software_services: { x: 387, y: 970, width: 71, height: 122 },
        revenue: { x: 854, y: 646, width: 70, height: 358 },
        gross_profit: { x: 1321, y: 503, width: 71, height: 28 },
        cost_of_revenue: { x: 1321, y: 768, width: 71, height: 327 },
        operating_loss: { x: 1554, y: 763, width: 71, height: 227 },
        operating_expenses: { x: 1789, y: 645, width: 70, height: 260 },
        rnd: { x: 2255, y: 504, width: 71, height: 140 },
        sga: { x: 2255, y: 984, width: 71, height: 118 },
      },
      labels: {
        automotive: {
          blocks: [
            { x: 422, top: 404, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE }] },
            { x: 112, top: 495, anchor: 'start', lineGap: 8, lines: [{ text: 'Automotive', size: 40, weight: 800 }, { text: '(7%) gross margin', size: 28, weight: 400, color: NOTE }, { text: '(17pp) Y/Y', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        software_services: {
          blocks: [
            { x: 422, top: 878, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+49% Y/Y', size: 28, weight: 400, color: NOTE }] },
            { x: 112, top: 994, anchor: 'start', lineGap: 8, lines: [{ text: 'Software', size: 40, weight: 800 }, { text: '& Services', size: 40, weight: 800 }, { text: '38% gross margin', size: 28, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE }] },
          ],
        },
        revenue: {
          blocks: [{ x: 877, top: 506, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        gross_profit: {
          blocks: [{ x: 1356, top: 321, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '9% margin', size: 28, weight: 400, color: NOTE }, { text: '(8pp) Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        cost_of_revenue: {
          blocks: [{ x: 1356, top: 1119, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 37, weight: 800 }, { text: 'revenue', size: 37, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
        },
        operating_loss: {
          blocks: [{ x: 1589, top: 1020, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'loss', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '(64%) margin', size: 28, weight: 400, color: NOTE }, { text: '(11pp) Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        operating_expenses: {
          blocks: [{ x: 1837, top: 487, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }],
        },
        rnd: {
          blocks: [{ x: 2356, top: 476, anchor: 'start', lineGap: 8, lines: [{ text: 'Research &', size: 34, weight: 800 }, { text: 'development', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '33% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
        sga: {
          blocks: [{ x: 2470, top: 987, anchor: 'middle', lineGap: 8, lines: [{ text: 'Selling, general,', size: 30, weight: 800 }, { text: '& admin', size: 30, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '39% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE }] }],
        },
      },
    },
    nodes: [
      { id: 'automotive', col: 0, order: 0, type: 'source', label: 'Automotive', value: 0.9, valueText: '$0.9B', notes: ['(2%) Y/Y', '(7%) gross margin', '(17pp) Y/Y'], color: ORANGE, labelColor: BLACK, linkTint: ORANGE_LINK },
      { id: 'software_services', col: 0, order: 1, type: 'source', label: 'Software & Services', value: 0.5, valueText: '$0.5B', notes: ['+49% Y/Y', '38% gross margin', '+2pp Y/Y'], color: ORANGE, labelColor: BLACK, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.4, valueText: '$1.4B', notes: ['+11% Y/Y'], color: ORANGE, labelColor: BLACK, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.1, valueText: '$0.1B', notes: ['9% margin', '(8pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 1.3, valueText: '($1.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: 'Operating loss', value: -0.9, valueText: '($0.9B)', notes: ['(64%) margin', '(11pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: 'Operating expenses', value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'Research & development', value: 0.5, valueText: '($0.5B)', notes: ['33% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 1, type: 'cost', label: 'Selling, general, & admin', value: 0.5, valueText: '($0.5B)', notes: ['39% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'automotive', target: 'revenue', value: 0.9, sourceWidth: 235, targetWidth: 235, y0: 612.5, y1: 763.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'software_services', target: 'revenue', value: 0.5, sourceWidth: 122, targetWidth: 122, y0: 1031, y1: 943, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 0.1, sourceWidth: 28, targetWidth: 28, y0: 660, y1: 517, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.3, sourceWidth: 330, targetWidth: 327, y0: 839, y1: 931.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.1, sourceWidth: 28, targetWidth: 28, y0: 517, y1: 659, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.9, sourceWidth: 227, targetWidth: 232, y0: 876.5, y1: 789, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 0.5, sourceWidth: 140, targetWidth: 140, y0: 715, y1: 574, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.5, sourceWidth: 120, targetWidth: 118, y0: 845, y1: 1043, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Rivian · 2026 财年第一季度',
        meta: { title: 'Rivian 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 1950 },
        annotationsSvg: annotationsZh,
        nodes: {
          automotive: { label: '汽车业务', notes: ['同比 (2%)', '毛利率 (7%)', '同比 (17 个百分点)'] },
          software_services: { label: '软件与服务', notes: ['同比 +49%', '毛利率 38%', '同比 +2 个百分点'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 9%', '同比 (8 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (64%)', '同比 (11 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          rnd: { label: '研发', notes: ['占收入 33%', '同比 +2 个百分点'] },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 39%', '同比 +1 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
