/* ====================================================================
 * Rivian - Q2 FY26 income statement ($B)
 * Fixed d3-sankey layout reconstructed from the native Source. The vehicle
 * cluster reuses the validated Rivian runtime raster; the logo is pure SVG.
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
    ${metricCard(2060, 'Production', '12.6K', '+111% Y/Y')}
    ${metricCard(2255, 'Deliveries', '12.2K', '+14% Y/Y')}`;

  const annotationsZh = `
    <g transform="translate(767 262)">${logoSvg}</g>
    ${metricCard(2060, '产量', '12.6K', '同比 +111%')}
    ${metricCard(2255, '交付量', '12.2K', '同比 +14%')}`;

  const labels = {
    automotive: {
      blocks: [
        { x: 428, top: 467, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+23% Y/Y', size: 28, weight: 400, color: NOTE }] },
        { x: 112, top: 550, anchor: 'start', lineGap: 8, lines: [{ text: 'Automotive', size: 40, weight: 800 }, { text: '3% gross margin', size: 28, weight: 400, color: NOTE }, { text: '+33pp Y/Y', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    software_services: {
      blocks: [
        { x: 425, top: 941, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+37% Y/Y', size: 28, weight: 400, color: NOTE }] },
        { x: 105, top: 1041, anchor: 'start', lineGap: 8, lines: [{ text: 'Software', size: 40, weight: 800 }, { text: '& Services', size: 40, weight: 800 }, { text: '42% gross margin', size: 28, weight: 400, color: NOTE }, { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    revenue: {
      blocks: [{ x: 894, top: 520, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE }] }],
    },
    gross_profit: {
      blocks: [{ x: 1360, top: 385, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '11% margin', size: 28, weight: 400, color: NOTE }, { text: '+27pp Y/Y', size: 28, weight: 400, color: NOTE }] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1360, top: 1183, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 37, weight: 800 }, { text: 'revenue', size: 37, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
    },
    operating_loss: {
      blocks: [{ x: 1578, top: 987, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'loss', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '(50%) margin', size: 28, weight: 400, color: NOTE }, { text: '+35pp Y/Y', size: 28, weight: 400, color: NOTE }] }],
    },
    operating_expenses: {
      blocks: [{ x: 1827, top: 516, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }],
    },
    rnd: {
      blocks: [{ x: 2353, top: 510, anchor: 'start', lineGap: 8, lines: [{ text: 'Research &', size: 34, weight: 800 }, { text: 'development', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '28% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE }] }],
    },
    sga: {
      blocks: [{ x: 2470, top: 916, anchor: 'middle', lineGap: 8, lines: [{ text: 'Selling, general,', size: 30, weight: 800 }, { text: '& admin', size: 30, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '33% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE }] }],
    },
  };

  const zhLabels = {
    automotive: {
      blocks: [
        { x: 428, top: 467, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +23%', size: 28, weight: 400, color: NOTE }] },
        { x: 112, top: 550, anchor: 'start', lineGap: 8, lines: [{ text: '汽车业务', size: 40, weight: 800 }, { text: '毛利率 3%', size: 28, weight: 400, color: NOTE }, { text: '同比 +33 个百分点', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    software_services: {
      blocks: [
        { x: 425, top: 941, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +37%', size: 28, weight: 400, color: NOTE }] },
        { x: 105, top: 1041, anchor: 'start', lineGap: 8, lines: [{ text: '软件与服务', size: 40, weight: 800 }, { text: '毛利率 42%', size: 28, weight: 400, color: NOTE }, { text: '同比 +7 个百分点', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    revenue: {
      blocks: [{ x: 894, top: 520, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +27%', size: 28, weight: 400, color: NOTE }] }],
    },
    gross_profit: {
      blocks: [{ x: 1360, top: 385, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 11%', size: 28, weight: 400, color: NOTE }, { text: '同比 +27 个百分点', size: 28, weight: 400, color: NOTE }] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1360, top: 1183, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 37, weight: 800 }, { text: '成本', size: 37, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }],
    },
    operating_loss: {
      blocks: [{ x: 1578, top: 987, anchor: 'middle', lineGap: 8, lines: [{ text: '营业', size: 40, weight: 800 }, { text: '亏损', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '利润率 (50%)', size: 28, weight: 400, color: NOTE }, { text: '同比 +35 个百分点', size: 28, weight: 400, color: NOTE }] }],
    },
    operating_expenses: {
      blocks: [{ x: 1827, top: 516, anchor: 'middle', lineGap: 8, lines: [{ text: '运营', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }],
    },
    rnd: {
      blocks: [{ x: 2353, top: 510, anchor: 'start', lineGap: 8, lines: [{ text: '研究与', size: 34, weight: 800 }, { text: '开发', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 28%', size: 28, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE }] }],
    },
    sga: {
      blocks: [{ x: 2470, top: 916, anchor: 'middle', lineGap: 8, lines: [{ text: '销售、一般及', size: 30, weight: 800 }, { text: '行政费用', size: 30, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 33%', size: 28, weight: 400, color: NOTE }, { text: '同比 (5 个百分点)', size: 28, weight: 400, color: NOTE }] }],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'rivian-q2-fy26',
    name: 'Rivian · Q2 FY26',
    company: 'Rivian',
    meta: {
      company: 'Rivian',
      title: 'Rivian Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/rivian-q2-fy26.png', width: 2667, height: 1500 },
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
        y: 674,
        width: 320,
        height: 188,
      },
    ],
    layout: {
      scale: 244,
      nodes: {
        automotive: { x: 390, y: 558, width: 71, height: 286 },
        software_services: { x: 390, y: 1031, width: 71, height: 128 },
        revenue: { x: 857, y: 661, width: 70, height: 415 },
        gross_profit: { x: 1324, y: 566, width: 71, height: 43 },
        cost_of_revenue: { x: 1324, y: 790, width: 71, height: 369 },
        operating_loss: { x: 1534, y: 746, width: 71, height: 208 },
        operating_expenses: { x: 1792, y: 674, width: 70, height: 254 },
        rnd: { x: 2258, y: 525, width: 71, height: 114 },
        sga: { x: 2258, y: 933, width: 71, height: 135 },
      },
      labels,
    },
    nodes: [
      { id: 'automotive', col: 0, order: 0, type: 'source', label: 'Automotive', value: 1.1, valueText: '$1.1B', notes: ['+23% Y/Y', '3% gross margin', '+33pp Y/Y'], color: ORANGE, labelColor: BLACK, linkTint: ORANGE_LINK },
      { id: 'software_services', col: 0, order: 1, type: 'source', label: 'Software & Services', value: 0.5, valueText: '$0.5B', notes: ['+37% Y/Y', '42% gross margin', '+7pp Y/Y'], color: ORANGE, labelColor: BLACK, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.7, valueText: '$1.7B', notes: ['+27% Y/Y'], color: ORANGE, labelColor: BLACK, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.2, valueText: '$0.2B', notes: ['11% margin', '+27pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 1.5, valueText: '($1.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: 'Operating loss', value: -0.8, valueText: '($0.8B)', notes: ['(50%) margin', '+35pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: 'Operating expenses', value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'Research & development', value: 0.5, valueText: '($0.5B)', notes: ['28% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 1, type: 'cost', label: 'Selling, general, & admin', value: 0.5, valueText: '($0.5B)', notes: ['33% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'automotive', target: 'revenue', value: 1.1, sourceWidth: 286, targetWidth: 288, y0: 701, y1: 805, sourceOrder: 0, targetOrder: 0 },
      { source: 'software_services', target: 'revenue', value: 0.5, sourceWidth: 128, targetWidth: 127, y0: 1095, y1: 1012.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 0.2, sourceWidth: 45, targetWidth: 43, y0: 683.5, y1: 587.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.5, sourceWidth: 370, targetWidth: 369, y0: 891, y1: 974.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.2, sourceWidth: 43, targetWidth: 46, y0: 587.5, y1: 697, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.8, sourceWidth: 208, targetWidth: 208, y0: 850, y1: 824, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 0.5, sourceWidth: 117, targetWidth: 114, y0: 732.5, y1: 582, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.5, sourceWidth: 137, targetWidth: 135, y0: 859.5, y1: 1000.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Rivian · 2026 财年第二季度',
        meta: { title: 'Rivian 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月', titleTextLength: 1950 },
        annotationsSvg: annotationsZh,
        nodes: {
          automotive: { label: '汽车业务', notes: ['同比 +23%', '毛利率 3%', '同比 +33 个百分点'] },
          software_services: { label: '软件与服务', notes: ['同比 +37%', '毛利率 42%', '同比 +7 个百分点'] },
          revenue: { label: '收入', notes: ['同比 +27%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 11%', '同比 +27 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (50%)', '同比 +35 个百分点'] },
          operating_expenses: { label: '运营费用' },
          rnd: { label: '研发', notes: ['占收入 28%', '同比 (3 个百分点)'] },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 33%', '同比 (5 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
