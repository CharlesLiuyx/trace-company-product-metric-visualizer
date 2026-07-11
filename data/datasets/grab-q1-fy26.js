/* Grab Q1 FY26 income statement ($M), reconstructed from the processed reference. */
(function () {
  const TITLE = '#155077';
  const GRAB = '#00b14f';
  const CARD_GRAB = '#00b14e';
  const GRAB_DARK = '#009943';
  const GRAB_LINK = '#85d4a9';
  const PROFIT = '#2ca02c';
  const PROFIT_LABEL = '#008f51';
  const PROFIT_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const WHITE = '#ffffff';
  const BG = '#f2f2f2';
  const ICON_BG = '#cbeedd';

  const grabLogoSvg = `
    <text x="4" y="124" font-family="Arial Rounded MT Bold,Arial,sans-serif" font-size="142" font-weight="800"
      fill="none" stroke="${GRAB}" stroke-width="7" stroke-linejoin="round"
      textLength="518" lengthAdjust="spacingAndGlyphs">Grab</text>
    <text x="4" y="124" font-family="Arial Rounded MT Bold,Arial,sans-serif" font-size="142" font-weight="800"
      fill="none" stroke="${GRAB}" stroke-width="2" stroke-linejoin="round"
      textLength="518" lengthAdjust="spacingAndGlyphs">Grab</text>`;

  const pillCard = (x, y, width, height, content) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="34" fill="${CARD_GRAB}"/>
      ${content}
    </g>`;

  const iconCircle = (cx, cy, content) => `
    <g>
      <circle cx="${cx}" cy="${cy}" r="47" fill="${ICON_BG}"/>
      ${content}
    </g>`;

  const foodIcon = (cx, cy) => iconCircle(cx, cy, `
    <ellipse cx="${cx + 1}" cy="${cy + 15}" rx="31" ry="10" fill="#ffffff" stroke="#77d59c" stroke-width="4"/>
    <path d="M${cx - 20} ${cy + 7} C${cx - 11} ${cy - 15} ${cx + 18} ${cy - 15} ${cx + 26} ${cy + 7}" fill="#ffffff" stroke="#77d59c" stroke-width="4"/>
    <circle cx="${cx + 5}" cy="${cy - 3}" r="10" fill="#ffb443"/><circle cx="${cx + 5}" cy="${cy - 3}" r="5" fill="#fff7d7"/>
    <path d="M${cx - 31} ${cy + 4} q-13 11 2 20" fill="none" stroke="${GRAB}" stroke-width="5" stroke-linecap="round"/>
    <circle cx="${cx - 31}" cy="${cy + 3}" r="4" fill="#ffaa34"/>`);

  const groceryIcon = (cx, cy) => iconCircle(cx, cy, `
    <path d="M${cx - 33} ${cy + 7} H${cx + 31} L${cx + 18} ${cy + 35} H${cx - 20} Z" fill="${GRAB}" opacity=".92"/>
    <path d="M${cx - 18} ${cy + 8} L${cx - 25} ${cy - 27}" stroke="#f05a45" stroke-width="6" stroke-linecap="round"/>
    <path d="M${cx - 5} ${cy + 5} L${cx - 5} ${cy - 27}" stroke="#ff8b48" stroke-width="8" stroke-linecap="round"/>
    <path d="M${cx + 11} ${cy + 8} C${cx + 10} ${cy - 15} ${cx + 26} ${cy - 22} ${cx + 31} ${cy - 34}" fill="none" stroke="${GRAB_DARK}" stroke-width="6" stroke-linecap="round"/>
    <path d="M${cx + 18} ${cy - 17} C${cx + 34} ${cy - 25} ${cx + 42} ${cy - 9} ${cx + 20} ${cy - 4}" fill="${GRAB}"/>
    <path d="M${cx - 29} ${cy + 15} H${cx + 26}" stroke="#ffffff" stroke-width="5"/>`);

  const carIcon = (cx, cy) => iconCircle(cx, cy, `
    <path d="M${cx - 36} ${cy + 11} C${cx - 28} ${cy - 9} ${cx - 2} ${cy - 18} ${cx + 24} ${cy - 10} C${cx + 37} ${cy - 6} ${cx + 45} ${cy + 4} ${cx + 49} ${cy + 18} H${cx - 40} C${cx - 42} ${cy + 16} ${cx - 41} ${cy + 14} ${cx - 36} ${cy + 11} Z" fill="${GRAB}"/>
    <path d="M${cx - 15} ${cy - 12} H${cx + 21} L${cx + 33} ${cy + 2} H${cx - 25} Z" fill="#d6fff1"/>
    <circle cx="${cx - 19}" cy="${cy + 20}" r="10" fill="#414141"/><circle cx="${cx + 30}" cy="${cy + 20}" r="10" fill="#414141"/>
    <path d="M${cx - 44} ${cy + 8} H${cx + 47}" stroke="#ffffff" stroke-width="4" opacity=".7"/>`);

  const scooterIcon = (cx, cy) => iconCircle(cx, cy, `
    <circle cx="${cx - 22}" cy="${cy + 26}" r="13" fill="none" stroke="#41514c" stroke-width="6"/><circle cx="${cx + 29}" cy="${cy + 26}" r="13" fill="none" stroke="#41514c" stroke-width="6"/>
    <path d="M${cx - 29} ${cy + 17} L${cx - 4} ${cy - 4} H${cx + 22} L${cx + 31} ${cy + 15}" fill="none" stroke="${GRAB}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M${cx + 15} ${cy - 5} L${cx + 28} ${cy - 27} H${cx + 42}" fill="none" stroke="#41514c" stroke-width="6" stroke-linecap="round"/>
    <path d="M${cx - 4} ${cy - 4} H${cx - 18}" stroke="#ffb442" stroke-width="8" stroke-linecap="round"/>`);

  const cashIcon = (cx, cy) => iconCircle(cx, cy, `
    <rect x="${cx - 26}" y="${cy - 20}" width="48" height="37" rx="5" fill="${GRAB}" stroke="#00a346" stroke-width="4"/>
    <circle cx="${cx - 2}" cy="${cy - 2}" r="10" fill="#9bf1bf"/>
    <path d="M${cx - 45} ${cy + 18} C${cx - 25} ${cy + 35} ${cx + 6} ${cy + 31} ${cx + 37} ${cy + 16}" fill="none" stroke="#f4a45b" stroke-width="10" stroke-linecap="round"/>
    <path d="M${cx - 41} ${cy + 11} C${cx - 21} ${cy + 18} ${cx + 5} ${cy + 17} ${cx + 25} ${cy + 7}" fill="none" stroke="#ffd086" stroke-width="9" stroke-linecap="round"/>`);

  const growthIcon = (cx, cy) => iconCircle(cx, cy, `
    <path d="M${cx - 33} ${cy + 21} H${cx + 35}" stroke="#ffbd42" stroke-width="8" stroke-linecap="round"/>
    <path d="M${cx - 25} ${cy + 18} L${cx - 8} ${cy + 1} L${cx + 7} ${cy + 10} L${cx + 31} ${cy - 17}" fill="none" stroke="${GRAB}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M${cx + 16} ${cy - 18} H${cx + 34} V${cy}" fill="none" stroke="${GRAB}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${cx - 22}" cy="${cy + 25}" r="8" fill="#ffbd42"/><circle cx="${cx + 8}" cy="${cy + 25}" r="8" fill="#ffbd42"/>`);

  const annotations = (L) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${foodIcon(196, 379)}${groceryIcon(296, 379)}${carIcon(196, 665)}${scooterIcon(296, 665)}${cashIcon(196, 936)}${growthIcon(296, 936)}
      ${pillCard(66, 1125, 379, 164, `<text x="256" y="1177" text-anchor="middle" font-size="34" font-weight="800" fill="${WHITE}">${L.onDemandGmv}</text><text x="256" y="1220" text-anchor="middle" font-size="35" font-weight="500" fill="${WHITE}">$6.1B</text><text x="256" y="1260" text-anchor="middle" font-size="31" font-weight="400" fill="${WHITE}">${L.onDemandGmvYoy}</text>`) }
      ${pillCard(455, 1125, 332, 164, `<text x="621" y="1177" text-anchor="middle" font-size="34" font-weight="800" fill="${WHITE}">${L.groupMtus}</text><text x="621" y="1220" text-anchor="middle" font-size="35" font-weight="500" fill="${WHITE}">52M</text><text x="621" y="1260" text-anchor="middle" font-size="31" font-weight="400" fill="${WHITE}">${L.groupMtusYoy}</text>`) }
      <text x="419" y="1327" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${L.gmvNote}</text>
      <text x="419" y="1365" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${L.mtuNote}</text>
    </g>`;

  const copy = {
    en: {
      deliveriesValue: '$510M', deliveriesYoy: '+23% Y/Y', deliveriesName: 'Deliveries', deliveriesMargin: '17% adjusted margin', deliveriesMarginYoy: '+2pp Y/Y',
      mobilityValue: '$337M', mobilityYoy: '+19% Y/Y', mobilityName: 'Mobility', mobilityMargin: '59% adjusted margin', mobilityMarginYoy: '+2pp Y/Y',
      financialValue: '$107M', financialYoy: '+43% Y/Y', financialName: 'Financial Services', financialMargin: '(16%) adjusted margin', financialMarginYoy: '+24pp Y/Y',
      revenue: 'Revenue', revenueValue: '$955M', revenueYoy: '+24% Y/Y', gross: 'Gross profit', grossValue: '$414M', grossMargin: '43% margin', grossYoy: '+1pp Y/Y',
      costOf: 'Cost of', revenueWord: 'revenue', operatingProfit: 'Operating profit', operatingProfitValue: '$22M', operatingMargin: '2% margin', operatingYoy: '+5pp Y/Y',
      other: 'Other', otherIncomeValue: '$102M', tax: 'Tax', taxValue: '($4M)', netProfit: 'Net profit', netProfitValue: '$120M', operating: 'Operating', expenses: 'expenses', operatingExpensesValue: '($392M)',
      ga: 'G&A', gaValue: '($125M)', gaPct: '13% of revenue', gaYoy: '(2pp) Y/Y', rnd: 'R&D', rndValue: '($120M)', rndPct: '13% of revenue', rndYoy: '(3pp) Y/Y',
      sm: 'S&M', smValue: '($94M)', smPct: '10% of revenue', smYoy: '(1pp) Y/Y', otherOpex: 'Other', otherOpexValue: '($53M)', otherOpexPct: '6% of revenue', otherOpexYoy: '+2pp Y/Y',
      onDemandGmv: 'On-Demand GMV', onDemandGmvYoy: '+24% Y/Y', groupMtus: 'Group MTUs', groupMtusYoy: '+16% Y/Y', gmvNote: 'GMV = Gross Merchandise Value', mtuNote: 'MTUs = Monthly Transacting Users',
    },
    zh: {
      deliveriesValue: '$510M', deliveriesYoy: '同比 +23%', deliveriesName: '配送', deliveriesMargin: '经调整利润率 17%', deliveriesMarginYoy: '同比 +2 个百分点',
      mobilityValue: '$337M', mobilityYoy: '同比 +19%', mobilityName: '出行', mobilityMargin: '经调整利润率 59%', mobilityMarginYoy: '同比 +2 个百分点',
      financialValue: '$107M', financialYoy: '同比 +43%', financialName: '金融服务', financialMargin: '经调整利润率 (16%)', financialMarginYoy: '同比 +24 个百分点',
      revenue: '收入', revenueValue: '$955M', revenueYoy: '同比 +24%', gross: '毛利润', grossValue: '$414M', grossMargin: '毛利率 43%', grossYoy: '同比 +1 个百分点',
      costOf: '收入', revenueWord: '成本', operatingProfit: '营业利润', operatingProfitValue: '$22M', operatingMargin: '利润率 2%', operatingYoy: '同比 +5 个百分点',
      other: '其他', otherIncomeValue: '$102M', tax: '税费', taxValue: '($4M)', netProfit: '净利润', netProfitValue: '$120M', operating: '营业', expenses: '费用', operatingExpensesValue: '($392M)',
      ga: '一般及行政', gaValue: '($125M)', gaPct: '占收入 13%', gaYoy: '同比 (2 个百分点)', rnd: '研发', rndValue: '($120M)', rndPct: '占收入 13%', rndYoy: '同比 (3 个百分点)',
      sm: '销售与营销', smValue: '($94M)', smPct: '占收入 10%', smYoy: '同比 (1 个百分点)', otherOpex: '其他', otherOpexValue: '($53M)', otherOpexPct: '占收入 6%', otherOpexYoy: '同比 +2 个百分点',
      onDemandGmv: '按需 GMV', onDemandGmvYoy: '同比 +24%', groupMtus: '集团 MTUs', groupMtusYoy: '同比 +16%', gmvNote: 'GMV = 商品交易总额', mtuNote: 'MTUs = 月交易用户数',
    },
  };

  const block = (x, top, lines, lineGap = 10) => ({ x, top, anchor: 'middle', lineGap, lines });
  const labels = (L) => ({
    deliveries: { blocks: [block(473, 266, [{ text: L.deliveriesValue, size: 36, weight: 400, color: GRAB }, { text: L.deliveriesYoy, size: 27, weight: 400, color: NOTE }]), block(206, 443, [{ text: L.deliveriesName, size: 37, weight: 800 }, { text: L.deliveriesMargin, size: 27, weight: 400, color: NOTE }, { text: L.deliveriesMarginYoy, size: 27, weight: 400, color: NOTE }], 11)] },
    mobility: { blocks: [block(473, 652, [{ text: L.mobilityValue, size: 36, weight: 400, color: GRAB }, { text: L.mobilityYoy, size: 27, weight: 400, color: NOTE }]), block(207, 746, [{ text: L.mobilityName, size: 37, weight: 800 }, { text: L.mobilityMargin, size: 27, weight: 400, color: NOTE }, { text: L.mobilityMarginYoy, size: 27, weight: 400, color: NOTE }], 11)] },
    financial_services: { blocks: [block(473, 964, [{ text: L.financialValue, size: 36, weight: 400, color: GRAB }, { text: L.financialYoy, size: 27, weight: 400, color: NOTE }]), block(205, 1005, [{ text: L.financialName, size: 37, weight: 800 }, { text: L.financialMargin, size: 27, weight: 400, color: NOTE }, { text: L.financialMarginYoy, size: 27, weight: 400, color: NOTE }], 11)] },
    revenue: { blocks: [block(940, 461, [{ text: L.revenue, size: 37, weight: 800 }, { text: L.revenueValue, size: 36, weight: 400 }, { text: L.revenueYoy, size: 27, weight: 400, color: NOTE }])] },
    gross_profit: { blocks: [block(1407, 318, [{ text: L.gross, size: 37, weight: 800 }, { text: L.grossValue, size: 36, weight: 400 }, { text: L.grossMargin, size: 27, weight: 400, color: NOTE }, { text: L.grossYoy, size: 27, weight: 400, color: NOTE }])] },
    cost_of_revenue: { blocks: [block(1407, 1123, [{ text: L.costOf, size: 37, weight: 800 }, { text: L.revenueWord, size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 }])] },
    operating_profit: { blocks: [block(1875, 247, [{ text: L.operatingProfit, size: 37, weight: 800 }, { text: L.operatingProfitValue, size: 36, weight: 400 }, { text: L.operatingMargin, size: 27, weight: 400, color: NOTE }, { text: L.operatingYoy, size: 27, weight: 400, color: NOTE }])] },
    other_income: { blocks: [block(2216, 224, [{ text: L.other, size: 32, weight: 800 }, { text: L.otherIncomeValue, size: 31, weight: 400 }], 8)] },
    tax: { blocks: [block(2495, 506, [{ text: L.tax, size: 32, weight: 800 }, { text: L.taxValue, size: 31, weight: 400 }], 8)] },
    net_profit: { blocks: [block(2500, 294, [{ text: L.netProfit, size: 37, weight: 800 }, { text: L.netProfitValue, size: 36, weight: 400 }], 8)] },
    operating_expenses: { blocks: [block(1875, 795, [{ text: L.operating, size: 37, weight: 800 }, { text: L.expenses, size: 37, weight: 800 }, { text: L.operatingExpensesValue, size: 36, weight: 400 }])] },
    ga: { blocks: [block(2498, 657, [{ text: L.ga, size: 31, weight: 800 }, { text: L.gaValue, size: 31, weight: 400 }, { text: L.gaPct, size: 27, weight: 400, color: NOTE }, { text: L.gaYoy, size: 27, weight: 400, color: NOTE }], 8)] },
    rnd: { blocks: [block(2498, 841, [{ text: L.rnd, size: 31, weight: 800 }, { text: L.rndValue, size: 31, weight: 400 }, { text: L.rndPct, size: 27, weight: 400, color: NOTE }, { text: L.rndYoy, size: 27, weight: 400, color: NOTE }], 8)] },
    sm: { blocks: [block(2498, 1015, [{ text: L.sm, size: 31, weight: 800 }, { text: L.smValue, size: 31, weight: 400 }, { text: L.smPct, size: 27, weight: 400, color: NOTE }, { text: L.smYoy, size: 27, weight: 400, color: NOTE }], 8)] },
    other_opex: { blocks: [block(2498, 1196, [{ text: L.otherOpex, size: 31, weight: 800 }, { text: L.otherOpexValue, size: 31, weight: 400 }, { text: L.otherOpexPct, size: 27, weight: 400, color: NOTE }, { text: L.otherOpexYoy, size: 27, weight: 400, color: NOTE }], 8)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'grab-q1-fy26', name: 'Grab · Q1 FY26', company: 'Grab',
    meta: {
      company: 'Grab', title: 'Grab Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 2026', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/grab-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 199, titleSize: 126, titleWeight: 800, titleTextLength: 2080, hidePeriodStamp: true,
      logoSvg: grabLogoSvg, logoViewBox: '0 0 540 160', logoWidth: 540, logoHeight: 160, logoY: 268,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, interfaceAudit: { mode: 'error' },
      palette: { source: { node: GRAB, label: GRAB }, hub: { node: GRAB, label: GRAB }, profit: { node: PROFIT, label: PROFIT_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAB_LINK, hub: GRAB_LINK, profit: PROFIT_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 37, value: 36, note: 27, lineGap: 10 },
    },
    annotationsSvg: annotations(copy.en),
    layout: {
      nodes: {
        deliveries: { x: 436, y: 358, width: 73, height: 221 }, mobility: { x: 436, y: 743, width: 73, height: 146 }, financial_services: { x: 436, y: 1056, width: 73, height: 46 },
        revenue: { x: 903, y: 602, width: 73, height: 413 }, gross_profit: { x: 1370, y: 498, width: 73, height: 180 }, cost_of_revenue: { x: 1370, y: 865, width: 73, height: 234 },
        operating_profit: { x: 1839, y: 423, width: 73, height: 9 }, operating_expenses: { x: 1836, y: 609, width: 75, height: 169 }, other_income: { x: 2180, y: 308, width: 73, height: 46 },
        tax: { x: 2304, y: 530, width: 73, height: 4 }, net_profit: { x: 2304, y: 334, width: 73, height: 51 }, ga: { x: 2304, y: 672, width: 73, height: 53 },
        rnd: { x: 2304, y: 856, width: 73, height: 52 }, sm: { x: 2304, y: 1040, width: 73, height: 41 }, other_opex: { x: 2304, y: 1227, width: 73, height: 24 },
      },
      labels: labels(copy.en),
    },
    nodes: [
      { id: 'deliveries', col: 0, order: 0, type: 'source', label: 'Deliveries', value: 510, notes: ['+23% Y/Y', '17% adjusted margin', '+2pp Y/Y'], color: GRAB, labelColor: GRAB, linkTint: GRAB_LINK },
      { id: 'mobility', col: 0, order: 1, type: 'source', label: 'Mobility', value: 337, notes: ['+19% Y/Y', '59% adjusted margin', '+2pp Y/Y'], color: GRAB, labelColor: GRAB, linkTint: GRAB_LINK },
      { id: 'financial_services', col: 0, order: 2, type: 'source', label: 'Financial Services', value: 107, notes: ['+43% Y/Y', '(16%) adjusted margin', '+24pp Y/Y'], color: GRAB, labelColor: GRAB, linkTint: GRAB_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 955, notes: ['+24% Y/Y'], color: GRAB, labelColor: GRAB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 414, notes: ['43% margin', '+1pp Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 541, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 22, notes: ['2% margin', '+5pp Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 392, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 102, color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 0, type: 'cost', label: 'Tax', value: 4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 120, color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 125, notes: ['13% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 120, notes: ['13% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 94, notes: ['10% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 53, notes: ['6% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'deliveries', target: 'revenue', value: 510, width: 221, sourceOrder: 0, targetOrder: 0 }, { source: 'mobility', target: 'revenue', value: 337, width: 146, sourceOrder: 0, targetOrder: 1 }, { source: 'financial_services', target: 'revenue', value: 107, width: 46, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 414, width: 180, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK }, { source: 'revenue', target: 'cost_of_revenue', value: 541, width: 234, sourceWidth: 233, targetWidth: 234, y0: 898.5, y1: 982, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 22, width: 9, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 392, width: 169, sourceWidth: 171, targetWidth: 169, y0: 592.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 18, width: 7, y1: 381.5, sourceOrder: 0, targetOrder: 1, linkTint: PROFIT_LINK },
      { source: 'operating_profit', target: 'tax', value: 4, width: 2, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, y0: 431, y1: 532, curve: { x0: 1912, x1: 2304, c1x: 2032, c2x: 2186, c1y: 431, c2y: 532 } },
      { source: 'other_income', target: 'net_profit', value: 102, width: 46, sourceWidth: 46, targetWidth: 44, y1: 356, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'operating_expenses', target: 'ga', value: 125, width: 53, sourceOrder: 0, targetOrder: 0 }, { source: 'operating_expenses', target: 'rnd', value: 120, width: 52, sourceOrder: 1, targetOrder: 0 }, { source: 'operating_expenses', target: 'sm', value: 94, width: 41, sourceOrder: 2, targetOrder: 0 }, { source: 'operating_expenses', target: 'other_opex', value: 53, width: 24, sourceWidth: 23, targetWidth: 24, y0: 766.5, y1: 1239, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Grab · 2026 财年第一季度', meta: { title: 'Grab 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleSize: 112, titleTextLength: 1780 }, annotationsSvg: annotations(copy.zh),
        nodes: {
          deliveries: { label: '配送', notes: ['同比 +23%', '经调整利润率 17%', '同比 +2 个百分点'] }, mobility: { label: '出行', notes: ['同比 +19%', '经调整利润率 59%', '同比 +2 个百分点'] }, financial_services: { label: '金融服务', notes: ['同比 +43%', '经调整利润率 (16%)', '同比 +24 个百分点'] }, revenue: { label: '收入', notes: ['同比 +24%'] }, gross_profit: { label: '毛利润', notes: ['毛利率 43%', '同比 +1 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 +5 个百分点'] }, operating_expenses: { label: ['营业', '费用'] }, other_income: { label: '其他' }, tax: { label: '税费' }, net_profit: { label: '净利润' }, ga: { label: '一般及行政', notes: ['占收入 13%', '同比 (2 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 13%', '同比 (3 个百分点)'] }, sm: { label: '销售与营销', notes: ['占收入 10%', '同比 (1 个百分点)'] }, other_opex: { label: '其他', notes: ['占收入 6%', '同比 +2 个百分点'] },
        },
        layout: { labels: labels(copy.zh) },
      },
    },
  });
})();
