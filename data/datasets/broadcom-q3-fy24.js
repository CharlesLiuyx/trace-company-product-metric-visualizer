/* Broadcom — Q3 FY24 income statement ($B).
 * Reconstructed from input/processed/broadcom-q3-fy24.png as a measured,
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

  const companyLogo = `
    <circle cx="50" cy="50" r="49" fill="${CRIMSON}"/>
    <path d="M7 56C15 56 18 50 25 50C33 50 35 64 42 64C46 64 47 31 50 31C53 31 54 64 58 64C65 64 67 50 75 50C82 50 85 56 93 56"
      fill="none" stroke="#fff" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"/>`;

  const semiconductorIcon = `
    <rect x="7" y="7" width="86" height="86" rx="2" fill="${CRIMSON}"/>
    <g fill="none" stroke="${BG}" stroke-width="5" stroke-linecap="square">
      <rect x="16" y="16" width="29" height="31"/>
      <rect x="55" y="16" width="30" height="17"/>
      <rect x="16" y="56" width="27" height="27"/>
      <rect x="55" y="43" width="30" height="26"/>
      <path d="M45 31h10M30 47v9M43 69h12M70 33v10M43 61h7v17h12"/>
      <circle cx="69" cy="78" r="5"/><circle cx="51" cy="53" r="5"/>
    </g>`;

  const infrastructureIcon = `
    <path d="M58 10a18 18 0 0 1 33 7a14 14 0 0 1-4 27H56a15 15 0 0 1 2-34z"
      fill="none" stroke="${BLUE}" stroke-width="6"/>
    <rect x="7" y="37" width="62" height="57" fill="${BLUE}"/>
    <rect x="16" y="47" width="44" height="39" fill="none" stroke="${BG}" stroke-width="5"/>
    <path d="M35 61l-10 9 10 9M45 61l10 9-10 9"
      fill="none" stroke="${BG}" stroke-width="5" stroke-linecap="square" stroke-linejoin="miter"/>`;

  const svgIcon = (markup, x, y, width, height) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="0 0 100 100" overflow="visible">${markup}</svg>`;

  const annotations = `
    <g data-typography-role="brand" font-family="Montserrat,Arial,sans-serif">
      <text x="573" y="331" fill="#000" font-size="96" font-weight="800" letter-spacing="1">BROADCOM</text>
      <text x="1173" y="276" fill="#000" font-size="22" font-weight="700">®</text>
    </g>
    <g>
      ${svgIcon(companyLogo, 793, 353, 188, 190)}
    </g>
    <g data-annotation-clearance="broadcom-semiconductor-solutions-icon">
      ${svgIcon(semiconductorIcon, 124, 440, 155, 155)}
    </g>
    <g data-annotation-clearance="broadcom-infrastructure-software-icon">
      ${svgIcon(infrastructureIcon, 132, 848, 169, 155)}
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      semiconductor: ['半导体解决方案'],
      infrastructure: ['基础设施软件'],
      semDetail: ['网络、服务器存储、', '宽带、无线、工业'],
      infraDetail: ['大型机、分布式、网络安全、', 'SAN、云基础设施'],
      revenue: '收入',
      gross: '毛利润',
      cost: ['收入', '成本'],
      operatingProfit: '营业利润',
      operatingExpenses: ['运营', '费用'],
      netLoss: '净亏损',
      tax: '税费',
      other: '其他',
      rnd: '研发',
      sga: '销售及行政',
      amortization: '摊销',
      restructuring: '重组',
      semYoy: '同比 +5%',
      infraYoy: '同比 +200%',
      revenueYoy: '同比 +47%',
      grossMargin: '利润率 64%',
      grossYoy: '同比 (6 个百分点)',
      operatingMargin: '利润率 29%',
      operatingYoy: '同比 (14 个百分点)',
      rndRevenue: '占收入 18%',
      rndYoy: '同比 +3 个百分点',
      sgaRevenue: '占收入 8%',
      sgaYoy: '同比 +4 个百分点',
      amortRevenue: '占收入 6%',
      amortYoy: '同比 +2 个百分点',
      restructuringRevenue: '占收入 2%',
    } : {
      semiconductor: ['Semiconductor', 'solutions'],
      infrastructure: ['Infrastructure', 'software'],
      semDetail: ['Networking, Server Storage,', 'Broadband, Wireless,', 'Industrial'],
      infraDetail: ['Mainframe, Distributed,', 'Cybersecurity, SAN, Cloud', 'Infrastructure'],
      revenue: 'Revenue',
      gross: 'Gross profit',
      cost: ['Cost of', 'revenue'],
      operatingProfit: 'Operating profit',
      operatingExpenses: ['Operating', 'Expenses'],
      netLoss: 'Net loss',
      tax: 'Tax',
      other: 'Other',
      rnd: 'R&D',
      sga: 'SG&A',
      amortization: 'Amortization',
      restructuring: 'Restructuring',
      semYoy: '+5% Y/Y',
      infraYoy: '+200% Y/Y',
      revenueYoy: '+47% Y/Y',
      grossMargin: '64% margin',
      grossYoy: '(6pp) Y/Y',
      operatingMargin: '29% margin',
      operatingYoy: '(14pp) Y/Y',
      rndRevenue: '18% of revenue',
      rndYoy: '+3pp Y/Y',
      sgaRevenue: '8% of revenue',
      sgaYoy: '+4pp Y/Y',
      amortRevenue: '6% of revenue',
      amortYoy: '+2pp Y/Y',
      restructuringRevenue: '2% of revenue',
    };
    const detailSize = zh ? 25 : 27;
    const costLine = (text, size = 34) => line(text, size, { weight: 800, color: RED_LABEL });
    const costValue = (size = 34) => line('$value', size, { color: RED_LABEL });
    const note = (text, size = 28) => line(text, size, { color: NOTE });

    return {
      semiconductor_solutions: {
        blocks: [
          block(415, 502, [line('$value', 40, { color: CRIMSON }), note(t.semYoy, 29)], { lineGap: 10 }),
          block(204, 625, [
            ...t.semiconductor.map((text) => line(text, 40, { weight: 800, color: '#000000' })),
            ...t.semDetail.map((text) => note(text, detailSize)),
          ], { semanticRole: 'top-aligned-side-label' }),
        ],
      },
      infrastructure_software: {
        blocks: [
          block(418, 897, [line('$value', 40, { color: BLUE }), note(t.infraYoy, 29)], { lineGap: 10 }),
          block(203, 1024, [
            ...t.infrastructure.map((text) => line(text, 40, { weight: 800, color: '#000000' })),
            ...t.infraDetail.map((text) => note(text, detailSize)),
          ], { semanticRole: 'top-aligned-side-label' }),
        ],
      },
      revenue: { blocks: [block(883, 563, [
        line(t.revenue, 40, { weight: 800 }), line('$value', 40), note(t.revenueYoy, 29),
      ], { lineGap: 4 })] },
      gross_profit: { blocks: [block(1351, 414, [
        line(t.gross, 40, { weight: 800, color: GREEN_LABEL }),
        line('$value', 40, { color: GREEN_LABEL }), note(t.grossMargin, 29), note(t.grossYoy, 29),
      ], { lineGap: 10 })] },
      cost_of_revenue: { blocks: [block(1349, 1170, [
        ...t.cost.map((text) => costLine(text, 38)), costValue(38),
      ])] },
      operating_profit: { blocks: [block(1822, 278, [
        line(t.operatingProfit, zh ? 38 : 40, { weight: 800, color: GREEN_LABEL }),
        line('$value', 40, { color: GREEN_LABEL }), note(t.operatingMargin, 29), note(t.operatingYoy, 29),
      ], { lineGap: 10 })] },
      operating_expenses: { blocks: [block(1822, 973, [
        ...t.operatingExpenses.map((text) => costLine(text, 38)), costValue(38),
      ])] },
      net_loss: { blocks: [block(2128, 273, [costLine(t.netLoss, 34), costValue(34)], { lineGap: 7 })] },
      tax: { blocks: [block(2445, 485, [costLine(t.tax, 31), costValue(31)], { lineGap: 7 })] },
      other: { blocks: [block(2445, 681, [costLine(t.other, 31), costValue(31)], { lineGap: 7 })] },
      rnd: { blocks: [block(2470, 877, [
        costLine(zh ? '研发（$2.4B）' : 'R&D ($2.4B)', 31), note(t.rndRevenue, 27), note(t.rndYoy, 27),
      ])] },
      sga: { blocks: [block(2467, 1003, [
        costLine(zh ? '销售及行政（$1.1B）' : 'SG&A ($1.1B)', zh ? 29 : 31), note(t.sgaRevenue, 27), note(t.sgaYoy, 27),
      ])] },
      amortization: { blocks: [block(2471, 1126, [
        costLine(t.amortization, 31), costValue(31), note(t.amortRevenue, 27), note(t.amortYoy, 27),
      ])] },
      restructuring: { blocks: [block(2473, 1288, [
        costLine(t.restructuring, 31), costValue(31), note(t.restructuringRevenue, 27),
      ], { lineGap: 3 })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'broadcom-q3-fy24',
    name: 'Broadcom · Q3 FY24',
    company: 'Broadcom',
    meta: {
      company: 'Broadcom',
      title: 'Broadcom Q3 FY24 Income Statement',
      period: 'Q3 FY24',
      periodNote: 'Ending July 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/broadcom-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1338,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2350,
      periodX: 201,
      periodY: 325,
      periodNoteY: 369,
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
    annotationsSvg: annotations,
    layout: {
      scale: 26,
      nodes: {
        semiconductor_solutions: { x: 383, y: 593, width: 71, height: 186 },
        infrastructure_software: { x: 383, y: 988, width: 71, height: 149 },
        revenue: { x: 850, y: 702, width: 70, height: 337 },
        gross_profit: { x: 1312, y: 594, width: 71, height: 215 },
        cost_of_revenue: { x: 1314, y: 1027, width: 72, height: 120 },
        operating_profit: { x: 1785, y: 458, width: 70, height: 96 },
        operating_expenses: { x: 1787, y: 835, width: 70, height: 117 },
        net_loss: { x: 2092, y: 375, width: 70, height: 46 },
        tax: { x: 2251, y: 465, width: 71, height: 108 },
        other: { x: 2251, y: 690, width: 71, height: 34 },
        rnd: { x: 2251, y: 897, width: 71, height: 59 },
        sga: { x: 2251, y: 1057, width: 71, height: 26 },
        amortization: { x: 2251, y: 1191, width: 71, height: 18 },
        restructuring: { x: 2251, y: 1317, width: 71, height: 5 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'semiconductor_solutions', col: 0, order: 0, type: 'source', label: ['Semiconductor', 'solutions'], value: 7.3, notes: ['+5% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'], color: CRIMSON, labelColor: CRIMSON, linkTint: CRIMSON_LINK },
      { id: 'infrastructure_software', col: 0, order: 1, type: 'source', label: ['Infrastructure', 'software'], value: 5.8, notes: ['+200% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 13.1, notes: ['+47% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 8.4, notes: ['64% margin', '(6pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.7 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.8, notes: ['29% margin', '(14pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 4.6 },
      { id: 'net_loss', col: 4, order: 0, type: 'cost', label: 'Net loss', value: -1.9, valueText: '($1.9B)' },
      { id: 'tax', col: 5, order: 0, type: 'cost', label: 'Tax', value: 4.2 },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 1.4 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 2.4, notes: ['18% of revenue', '+3pp Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 1.1, notes: ['8% of revenue', '+4pp Y/Y'] },
      { id: 'amortization', col: 5, order: 4, type: 'cost', label: 'Amortization', value: 0.8, notes: ['6% of revenue', '+2pp Y/Y'] },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 0.3, notes: ['2% of revenue'] },
    ],
    links: [
      { source: 'semiconductor_solutions', target: 'revenue', value: 7.3, sourceWidth: 186, targetWidth: 186, sourceOrder: 0, targetOrder: 0 },
      { source: 'infrastructure_software', target: 'revenue', value: 5.8, sourceWidth: 149, targetWidth: 151, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 8.4, sourceWidth: 215, targetWidth: 215, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.7, sourceWidth: 122, targetWidth: 120, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.8, sourceWidth: 96, targetWidth: 96, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.6, sourceWidth: 119, targetWidth: 117, sourceOrder: 1, targetOrder: 0 },
      { source: 'net_loss', target: 'tax', value: 1.9, sourceWidth: 46, targetWidth: 46, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 2.3, sourceWidth: 62, targetWidth: 62, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 1.4, sourceWidth: 34, targetWidth: 34, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.4, sourceWidth: 61, targetWidth: 59, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.1, sourceWidth: 28, targetWidth: 26, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.8, sourceWidth: 20, targetWidth: 18, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.3, sourceWidth: 8, targetWidth: 5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['BROADCOM'],
      zh: {
        name: 'Broadcom · 2024 财年第三季度',
        annotationsSvg: annotations,
        meta: {
          title: 'Broadcom 2024 财年第三季度利润表',
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 7 月',
          titleTextLength: 1500,
        },
        nodes: {
          semiconductor_solutions: { label: '半导体解决方案', notes: ['同比 +5%', '网络、服务器存储、宽带、无线、工业'] },
          infrastructure_software: { label: '基础设施软件', notes: ['同比 +200%', '大型机、分布式、网络安全、SAN、云基础设施'] },
          revenue: { label: '收入', notes: ['同比 +47%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 64%', '同比 (6 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 29%', '同比 (14 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_loss: { label: '净亏损' },
          tax: { label: '税费' },
          other: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 18%', '同比 +3 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 8%', '同比 +4 个百分点'] },
          amortization: { label: '摊销', notes: ['占收入 6%', '同比 +2 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 2%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
