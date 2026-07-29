/* Broadcom — Q2 FY24 income statement ($B).
 * Reconstructed from input/processed/broadcom-q2-fy24.png as a measured,
 * fixed-layout d3-sankey. Financial SSOT: data/income-statements/broadcom.js. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const CRIMSON = '#cc092f';
  const CRIMSON_LINK = '#e0899a';
  const BLUE = '#0098c7';
  const BLUE_LINK = '#85c9df';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight ?? 400,
    ...(options.color ? { color: options.color } : {}),
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap ?? 8,
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}),
    lines,
  });

  const logo = `
    <circle cx="50" cy="50" r="49" fill="${CRIMSON}"/>
    <path d="M7 56C15 56 18 50 25 50C33 50 35 64 42 64C46 64 47 31 50 31C53 31 54 64 58 64C65 64 67 50 75 50C82 50 85 56 93 56"
      fill="none" stroke="#fff" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"/>`;

  const semiconductorIcon = `
    <rect x="16" y="16" width="68" height="68" rx="3" fill="${CRIMSON}"/>
    <g fill="none" stroke="${BG}" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="25" y="25" width="18" height="18"/>
      <rect x="57" y="27" width="15" height="15"/>
      <path d="M43 33h14M34 43v13H21M50 42v24h14M21 56v14h24M64 66h10"/>
      <circle cx="50" cy="66" r="4"/><circle cx="74" cy="66" r="4"/>
    </g>`;

  const infrastructureIcon = `
    <path d="M61 19a12 12 0 0 1 22 5a9 9 0 0 1-2 17H60a10 10 0 0 1 1-22z"
      fill="none" stroke="${BLUE}" stroke-width="5"/>
    <path d="M16 38h49v48H16z" fill="${BLUE}"/>
    <path d="M26 47h30v30H26z" fill="none" stroke="${BG}" stroke-width="4"/>
    <path d="M38 55l-8 7 8 7M45 55l8 7-8 7"
      fill="none" stroke="${BG}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;

  const svgIcon = (markup, x, y, width, height) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="0 0 100 100" overflow="visible">${markup}</svg>`;

  const annotations = (zh) => `
    <g font-family="Montserrat,Noto Sans,Arial,sans-serif">
      <g data-typography-role="brand">
        <text x="566" y="334" fill="#000" font-size="98" font-weight="800" letter-spacing="1">BROADCOM</text>
        <text x="1178" y="275" fill="#000" font-size="23" font-weight="700">®</text>
      </g>
      ${svgIcon(semiconductorIcon, 128, 489, 145, 145)}
      ${svgIcon(infrastructureIcon, 133, 912, 165, 130)}
      <g class="sankey-interactive-annotation"
        data-node="tax_benefit"
        data-link-numerator="tax_benefit"
        data-link-denominator="net_profit"
        data-link-anchor-x="2175"
        data-link-anchor-y="460">
        <path d="M2102 486H2172C2207 486 2214 426 2248 426"
          fill="none" stroke="${GREEN}" stroke-width="2"/>
        <text x="2140" y="528" text-anchor="middle" font-size="31"
          font-weight="800" fill="${GREEN_LABEL}">${zh ? '税收收益' : 'Tax benefit'}</text>
        <text x="2140" y="570" text-anchor="middle" font-size="31"
          font-weight="400" fill="${GREEN_LABEL}">$0.1B</text>
      </g>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      semiconductor: ['半导体解决方案'],
      infrastructure: ['基础设施软件'],
      semDetail: ['网络、服务器存储、', '宽带、无线、工业'],
      infraDetail: ['大型机、分布式、网络安全、', 'SAN、云基础设施'],
      revenue: '收入', gross: '毛利润', cost: ['收入', '成本'],
      operatingProfit: '营业利润', operatingExpenses: ['运营', '费用'],
      net: '净利润', other: '其他', rnd: '研发', sga: '销售及行政',
      amortization: '摊销', restructuring: '重组',
      semYoy: '同比 +6%', infraYoy: '同比 +175%', revenueYoy: '同比 +43%',
      grossMargin: '利润率 62%', grossYoy: '同比 (8 个百分点)',
      operatingMargin: '利润率 24%', operatingYoy: '同比 (22 个百分点)',
      netMargin: '利润率 17%', netYoy: '同比 (23 个百分点)',
      rndRevenue: '占收入 19%', rndYoy: '同比 +4 个百分点',
      sgaRevenue: '占收入 10%', sgaYoy: '同比 +5 个百分点',
      amortRevenue: '占收入 7%', amortYoy: '同比 +3 个百分点',
      restructuringRevenue: '占收入 2%',
    } : {
      semiconductor: ['Semiconductor', 'solutions'],
      infrastructure: ['Infrastructure', 'software'],
      semDetail: ['Networking, Server Storage,', 'Broadband, Wireless,', 'Industrial'],
      infraDetail: ['Mainframe, Distributed,', 'Cybersecurity, SAN, Cloud', 'Infrastructure'],
      revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'],
      operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'Expenses'],
      net: 'Net profit', other: 'Other', rnd: 'R&D', sga: 'SG&A',
      amortization: 'Amortization', restructuring: 'Restructuring',
      semYoy: '+6% Y/Y', infraYoy: '+175% Y/Y', revenueYoy: '+43% Y/Y',
      grossMargin: '62% margin', grossYoy: '(8pp) Y/Y',
      operatingMargin: '24% margin', operatingYoy: '(22pp) Y/Y',
      netMargin: '17% margin', netYoy: '(23pp) Y/Y',
      rndRevenue: '19% of revenue', rndYoy: '+4pp Y/Y',
      sgaRevenue: '10% of revenue', sgaYoy: '+5pp Y/Y',
      amortRevenue: '7% of revenue', amortYoy: '+3pp Y/Y',
      restructuringRevenue: '2% of revenue',
    };
    const detailSize = zh ? 22 : 26;
    const costLine = (text, size = 34) => line(text, size, { weight: 800, color: RED_LABEL });
    const costValue = (size = 34) => line('$value', size, { color: RED_LABEL });
    const note = (text, size = 28) => line(text, size, { color: NOTE });

    return {
      semiconductor_solutions: {
        blocks: [
          block(416, 499, [line('$value', 40, { color: CRIMSON }), note(t.semYoy, 29)], { lineGap: 10 }),
          block(204, zh ? 691 : 669,
            t.semiconductor.map((text) => line(text, 38, { weight: 800, color: '#000000' }))),
          block(204, zh ? 745 : 775,
            t.semDetail.map((text) => note(text, detailSize)), { semanticRole: 'note' }),
        ],
      },
      infrastructure_software: {
        blocks: [
          block(416, 941, [line('$value', 40, { color: BLUE }), note(t.infraYoy, 29)], { lineGap: 10 }),
          block(204, zh ? 1097 : 1074,
            t.infrastructure.map((text) => line(text, 38, { weight: 800, color: '#000000' }))),
          block(204, zh ? 1150 : 1167,
            t.infraDetail.map((text) => note(text, detailSize)), { semanticRole: 'note' }),
        ],
      },
      revenue: { blocks: [block(883, 545, [
        line(t.revenue, 40, { weight: 800 }), line('$value', 40), note(t.revenueYoy, 29),
      ], { lineGap: 10 })] },
      gross_profit: { blocks: [block(1352, 407, [
        line(t.gross, 40, { weight: 800, color: GREEN_LABEL }),
        line('$value', 40, { color: GREEN_LABEL }), note(t.grossMargin, 29), note(t.grossYoy, 29),
      ], { lineGap: 10 })] },
      cost_of_revenue: { blocks: [block(1354, 1218, [
        ...t.cost.map((text) => costLine(text, 38)), costValue(38),
      ])] },
      operating_profit: { blocks: [block(1827, 294, [
        line(t.operatingProfit, zh ? 38 : 40, { weight: 800, color: GREEN_LABEL }),
        line('$value', 40, { color: GREEN_LABEL }), note(t.operatingMargin, 29), note(t.operatingYoy, 29),
      ], { lineGap: 10 })] },
      operating_expenses: { blocks: [block(1829, 955, [
        ...t.operatingExpenses.map((text) => costLine(text, 38)), costValue(38),
      ])] },
      net_profit: { blocks: [block(2443, 329, [
        line(t.net, 40, { weight: 800, color: GREEN_LABEL }),
        line('$value', 40, { color: GREEN_LABEL }), note(t.netMargin, 29), note(t.netYoy, 29),
      ], { lineGap: 10 })] },
      other: { blocks: [block(2443, 623, [costLine(t.other, 31), costValue(31)])] },
      rnd: { blocks: [block(2472, 880, [
        costLine(`${t.rnd} ($2.4B)`, 34), note(t.rndRevenue, 27), note(t.rndYoy, 27),
      ])] },
      sga: { blocks: [block(2472, 983, [
        costLine(`${t.sga} ($1.3B)`, zh ? 29 : 34), note(t.sgaRevenue, 27), note(t.sgaYoy, 27),
      ], { lineGap: 13 })] },
      amortization: { blocks: [block(2472, 1123, [
        costLine(t.amortization, 31), costValue(31), note(t.amortRevenue, 27), note(t.amortYoy, 27),
      ])] },
      restructuring: { blocks: [block(2472, 1272, [
        costLine(t.restructuring, 31), costValue(31), note(t.restructuringRevenue, 27),
      ])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'broadcom-q2-fy24',
    name: 'Broadcom · Q2 FY24',
    company: 'Broadcom',
    meta: {
      company: 'Broadcom',
      title: 'Broadcom Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Apr. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/broadcom-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 200,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2349,
      periodX: 416,
      periodY: 1308,
      periodNoteY: 1352,
      logoWidth: 190,
      logoHeight: 190,
      logoY: 340,
      logoViewBox: '0 0 100 100',
      logoSvg: logo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: '#5e5e5e',
      noteColor: NOTE,
      palette: {
        source: { node: CRIMSON, label: CRIMSON },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: CRIMSON_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 31,
      routes: { tax_benefit: { x: 2172, y: 486, width: 0, height: 1 } },
      nodes: {
        semiconductor_solutions: { x: 381, y: 596, width: 71, height: 234 },
        infrastructure_software: { x: 381, y: 1034, width: 71, height: 171 },
        revenue: { x: 848, y: 703, width: 70, height: 407 },
        gross_profit: { x: 1317, y: 592, width: 71, height: 251 },
        cost_of_revenue: { x: 1319, y: 1049, width: 72, height: 152 },
        operating_profit: { x: 1792, y: 479, width: 70, height: 95 },
        operating_expenses: { x: 1794, y: 782, width: 70, height: 155 },
        net_profit: { x: 2248, y: 358, width: 71, height: 68 },
        other: { x: 2248, y: 640, width: 71, height: 30 },
        rnd: { x: 2248, y: 870, width: 71, height: 76 },
        sga: { x: 2248, y: 1045, width: 71, height: 40 },
        amortization: { x: 2248, y: 1192, width: 71, height: 25 },
        restructuring: { x: 2248, y: 1326, width: 71, height: 7 },
      },
      labels: {
        ...labels(false),
        tax_benefit: { blocks: [] },
      },
    },
    nonNodeMetrics: [{
      id: 'tax_benefit',
      representation: 'flow',
      label: 'Tax benefit',
      value: 0.1,
      valueText: '$0.1B',
      type: 'profit',
      labelColor: GREEN_LABEL,
    }],
    nodes: [
      { id: 'semiconductor_solutions', col: 0, order: 0, type: 'source', label: ['Semiconductor', 'solutions'], value: 7.2, notes: ['+6% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'], color: CRIMSON, labelColor: CRIMSON, linkTint: CRIMSON_LINK },
      { id: 'infrastructure_software', col: 0, order: 1, type: 'source', label: ['Infrastructure', 'software'], value: 5.3, notes: ['+175% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.5, notes: ['+43% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 7.8, notes: ['62% margin', '(8pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.7 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.0, valueText: '$3.0B', notes: ['24% margin', '(22pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 4.8 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 2.1, notes: ['17% margin', '(23pp) Y/Y'] },
      { id: 'other', col: 4, order: 1, type: 'cost', label: 'Other', value: 1.0, valueText: '($1.0B)' },
      { id: 'rnd', col: 4, order: 2, type: 'cost', label: 'R&D', value: 2.4, notes: ['19% of revenue', '+4pp Y/Y'] },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 1.3, notes: ['10% of revenue', '+5pp Y/Y'] },
      { id: 'amortization', col: 4, order: 4, type: 'cost', label: 'Amortization', value: 0.8, notes: ['7% of revenue', '+3pp Y/Y'] },
      { id: 'restructuring', col: 4, order: 5, type: 'cost', label: 'Restructuring', value: 0.3, notes: ['2% of revenue'] },
    ],
    links: [
      { source: 'semiconductor_solutions', target: 'revenue', value: 7.2, sourceWidth: 234, targetWidth: 234, y0: 713, y1: 820, sourceOrder: 0, targetOrder: 0 },
      { source: 'infrastructure_software', target: 'revenue', value: 5.3, sourceWidth: 171, targetWidth: 173, y0: 1119.5, y1: 1023.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 7.8, sourceWidth: 253, targetWidth: 251, y0: 829.5, y1: 717.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.7, sourceWidth: 153, targetWidth: 152, y0: 1033.5, y1: 1125, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.0, sourceWidth: 96, targetWidth: 95, y0: 640, y1: 526.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.8, sourceWidth: 155, targetWidth: 155, y0: 765.5, y1: 859.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.1, sourceWidth: 64, targetWidth: 67, y0: 511, y1: 391.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 1.0, sourceWidth: 30, targetWidth: 30, y0: 559, y1: 655, sourceOrder: 1, targetOrder: 0 },
      { sourceRoute: 'tax_benefit', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 486, y1: 425.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.4, sourceWidth: 77, targetWidth: 76, y0: 820.5, y1: 908, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.3, sourceWidth: 42, targetWidth: 40, y0: 880, y1: 1065, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.8, sourceWidth: 27, targetWidth: 25, y0: 914.5, y1: 1204.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.3, sourceWidth: 9, targetWidth: 7, y0: 932.5, y1: 1329.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Broadcom · 2024 财年第二季度',
        meta: {
          title: 'Broadcom 2024 财年第二季度利润表',
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 4 月',
          titleTextLength: 1500,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { tax_benefit: { label: '税收收益' } },
        nodes: {
          semiconductor_solutions: { label: '半导体解决方案', notes: ['同比 +6%', '网络、服务器存储、宽带、无线、工业'] },
          infrastructure_software: { label: '基础设施软件', notes: ['同比 +175%', '大型机、分布式、网络安全、SAN、云基础设施'] },
          revenue: { label: '收入', notes: ['同比 +43%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 62%', '同比 (8 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 24%', '同比 (22 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 17%', '同比 (23 个百分点)'] },
          other: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 19%', '同比 +4 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 10%', '同比 +5 个百分点'] },
          amortization: { label: '摊销', notes: ['占收入 7%', '同比 +3 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 2%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
