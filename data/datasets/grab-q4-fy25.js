/* ====================================================================
 * Grab - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/grab-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/vector annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const GRAB = '#00b14f';
  const GRAB_DARK = '#009943';
  const GRAB_LINK = '#88d2a4';
  const PROFIT = '#28a428';
  const PROFIT_LABEL = '#008f51';
  const PROFIT_LINK = '#a2d6a0';
  const RED = '#d70000';
  const RED_LABEL = '#971100';
  const RED_LINK = '#df8184';
  const NOTE = '#777777';
  const WHITE = '#ffffff';
  const BG = '#f2f2f2';
  const ICON_BG = '#cff6df';

  const grabLogoSvg = `
    <text x="4" y="124" font-family="Arial Rounded MT Bold,Arial,sans-serif" font-size="142" font-weight="800"
      fill="none" stroke="${GRAB}" stroke-width="7" stroke-linejoin="round"
      textLength="518" lengthAdjust="spacingAndGlyphs">Grab</text>
    <text x="4" y="124" font-family="Arial Rounded MT Bold,Arial,sans-serif" font-size="142" font-weight="800"
      fill="none" stroke="${GRAB}" stroke-width="2" stroke-linejoin="round"
      textLength="518" lengthAdjust="spacingAndGlyphs">Grab</text>`;

  const pillCard = (x, y, width, height, content) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="34" fill="${GRAB}"/>
      ${content}
    </g>`;

  const iconCircle = (cx, cy, content) => `
    <g>
      <circle cx="${cx}" cy="${cy}" r="47" fill="${ICON_BG}"/>
      ${content}
    </g>`;

  const foodIcon = (cx, cy) => iconCircle(
    cx,
    cy,
    `
      <ellipse cx="${cx + 1}" cy="${cy + 15}" rx="31" ry="10" fill="#ffffff" stroke="#77d59c" stroke-width="4"/>
      <path d="M${cx - 20} ${cy + 7} C${cx - 11} ${cy - 15} ${cx + 18} ${cy - 15} ${cx + 26} ${cy + 7}" fill="#ffffff" stroke="#77d59c" stroke-width="4"/>
      <circle cx="${cx + 5}" cy="${cy - 3}" r="10" fill="#ffb443"/>
      <circle cx="${cx + 5}" cy="${cy - 3}" r="5" fill="#fff7d7"/>
      <path d="M${cx - 31} ${cy + 4} q-13 11 2 20" fill="none" stroke="${GRAB}" stroke-width="5" stroke-linecap="round"/>
      <circle cx="${cx - 31}" cy="${cy + 3}" r="4" fill="#ffaa34"/>
    `
  );

  const groceryIcon = (cx, cy) => iconCircle(
    cx,
    cy,
    `
      <path d="M${cx - 33} ${cy + 7} H${cx + 31} L${cx + 18} ${cy + 35} H${cx - 20} Z" fill="${GRAB}" opacity="0.92"/>
      <path d="M${cx - 18} ${cy + 8} L${cx - 25} ${cy - 27}" stroke="#f05a45" stroke-width="6" stroke-linecap="round"/>
      <path d="M${cx - 5} ${cy + 5} L${cx - 5} ${cy - 27}" stroke="#ff8b48" stroke-width="8" stroke-linecap="round"/>
      <path d="M${cx + 11} ${cy + 8} C${cx + 10} ${cy - 15} ${cx + 26} ${cy - 22} ${cx + 31} ${cy - 34}" fill="none" stroke="${GRAB_DARK}" stroke-width="6" stroke-linecap="round"/>
      <path d="M${cx + 18} ${cy - 17} C${cx + 34} ${cy - 25} ${cx + 42} ${cy - 9} ${cx + 20} ${cy - 4}" fill="${GRAB}"/>
      <path d="M${cx - 29} ${cy + 15} H${cx + 26}" stroke="#ffffff" stroke-width="5"/>
    `
  );

  const carIcon = (cx, cy) => iconCircle(
    cx,
    cy,
    `
      <path d="M${cx - 36} ${cy + 11} C${cx - 28} ${cy - 9} ${cx - 2} ${cy - 18} ${cx + 24} ${cy - 10} C${cx + 37} ${cy - 6} ${cx + 45} ${cy + 4} ${cx + 49} ${cy + 18} H${cx - 40} C${cx - 42} ${cy + 16} ${cx - 41} ${cy + 14} ${cx - 36} ${cy + 11} Z" fill="${GRAB}"/>
      <path d="M${cx - 15} ${cy - 12} H${cx + 21} L${cx + 33} ${cy + 2} H${cx - 25} Z" fill="#d6fff1"/>
      <circle cx="${cx - 19}" cy="${cy + 20}" r="10" fill="#414141"/>
      <circle cx="${cx + 30}" cy="${cy + 20}" r="10" fill="#414141"/>
      <path d="M${cx - 44} ${cy + 8} H${cx + 47}" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
    `
  );

  const scooterIcon = (cx, cy) => iconCircle(
    cx,
    cy,
    `
      <circle cx="${cx - 22}" cy="${cy + 26}" r="13" fill="none" stroke="#41514c" stroke-width="6"/>
      <circle cx="${cx + 29}" cy="${cy + 26}" r="13" fill="none" stroke="#41514c" stroke-width="6"/>
      <path d="M${cx - 29} ${cy + 17} L${cx - 4} ${cy - 4} H${cx + 22} L${cx + 31} ${cy + 15}" fill="none" stroke="${GRAB}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M${cx + 15} ${cy - 5} L${cx + 28} ${cy - 27} H${cx + 42}" fill="none" stroke="#41514c" stroke-width="6" stroke-linecap="round"/>
      <path d="M${cx - 4} ${cy - 4} H${cx - 18}" stroke="#ffb442" stroke-width="8" stroke-linecap="round"/>
    `
  );

  const cashIcon = (cx, cy) => iconCircle(
    cx,
    cy,
    `
      <rect x="${cx - 26}" y="${cy - 20}" width="48" height="37" rx="5" fill="${GRAB}" stroke="#00a346" stroke-width="4"/>
      <circle cx="${cx - 2}" cy="${cy - 2}" r="10" fill="#9bf1bf"/>
      <path d="M${cx - 45} ${cy + 18} C${cx - 25} ${cy + 35} ${cx + 6} ${cy + 31} ${cx + 37} ${cy + 16}" fill="none" stroke="#f4a45b" stroke-width="10" stroke-linecap="round"/>
      <path d="M${cx - 41} ${cy + 11} C${cx - 21} ${cy + 18} ${cx + 5} ${cy + 17} ${cx + 25} ${cy + 7}" fill="none" stroke="#ffd086" stroke-width="9" stroke-linecap="round"/>
    `
  );

  const growthIcon = (cx, cy) => iconCircle(
    cx,
    cy,
    `
      <path d="M${cx - 33} ${cy + 21} H${cx + 35}" stroke="#ffbd42" stroke-width="8" stroke-linecap="round"/>
      <path d="M${cx - 25} ${cy + 18} L${cx - 8} ${cy + 1} L${cx + 7} ${cy + 10} L${cx + 31} ${cy - 17}" fill="none" stroke="${GRAB}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M${cx + 16} ${cy - 18} H${cx + 34} V${cy}" fill="none" stroke="${GRAB}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="${cx - 22}" cy="${cy + 25}" r="8" fill="#ffbd42"/>
      <circle cx="${cx + 8}" cy="${cy + 25}" r="8" fill="#ffbd42"/>
    `
  );

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${foodIcon(196, 379)}
      ${groceryIcon(296, 379)}
      ${carIcon(196, 665)}
      ${scooterIcon(296, 665)}
      ${cashIcon(196, 936)}
      ${growthIcon(296, 936)}

      ${pillCard(
        66,
        1125,
        379,
        164,
        `
          <text x="256" y="1177" text-anchor="middle" font-size="34" font-weight="800" fill="${WHITE}">${L.onDemandGmv}</text>
          <text x="256" y="1220" text-anchor="middle" font-size="35" font-weight="500" fill="${WHITE}">$6.1B</text>
          <text x="256" y="1260" text-anchor="middle" font-size="31" font-weight="400" fill="${WHITE}">${L.onDemandGmvYoy}</text>
        `
      )}
      ${pillCard(
        455,
        1125,
        332,
        164,
        `
          <text x="621" y="1177" text-anchor="middle" font-size="34" font-weight="800" fill="${WHITE}">${L.groupMtus}</text>
          <text x="621" y="1220" text-anchor="middle" font-size="35" font-weight="500" fill="${WHITE}">50.5M</text>
          <text x="621" y="1260" text-anchor="middle" font-size="31" font-weight="400" fill="${WHITE}">${L.groupMtusYoy}</text>
        `
      )}
      <text x="419" y="1327" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${L.gmvNote}</text>
      <text x="419" y="1365" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${L.mtuNote}</text>
    </g>`;

  const annotationsEn = annotations({
    onDemandGmv: 'On-Demand GMV',
    onDemandGmvYoy: '+21% Y/Y',
    groupMtus: 'Group MTUs',
    groupMtusYoy: '+15% Y/Y',
    gmvNote: 'GMV = Gross Merchandise Value',
    mtuNote: 'MTUs = Monthly Transacting Users',
  });

  const annotationsZh = annotations({
    onDemandGmv: '按需 GMV',
    onDemandGmvYoy: '同比 +21%',
    groupMtus: '集团 MTUs',
    groupMtusYoy: '同比 +15%',
    gmvNote: 'GMV = 商品交易总额',
    mtuNote: 'MTUs = 月交易用户数',
  });

  const labelText = {
    en: {
      deliveriesValue: '$481M',
      deliveriesYoy: '+18% Y/Y',
      deliveriesName: 'Deliveries',
      deliveriesMargin: '17% adjusted margin',
      deliveriesMarginYoy: '+3pp Y/Y',
      mobilityValue: '$325M',
      mobilityYoy: '+15% Y/Y',
      mobilityName: 'Mobility',
      mobilityMargin: '57% adjusted margin',
      mobilityMarginYoy: '+3pp Y/Y',
      financialValue: '$99M',
      financialYoy: '+34% Y/Y',
      financialName: 'Financial Services',
      financialMargin: '(36%) adjusted margin',
      financialMarginYoy: '+11pp Y/Y',
      revenue: 'Revenue',
      revenueValue: '$906M',
      revenueYoy: '+19% Y/Y',
      gross: 'Gross profit',
      grossValue: '$397M',
      grossMargin: '44% margin',
      grossYoy: '+0pp Y/Y',
      costOf: 'Cost of',
      revenueWord: 'revenue',
      operatingProfit: 'Operating profit',
      operatingProfitValue: '$52M',
      operatingMargin: '6% margin',
      operatingYoy: '+6pp Y/Y',
      other: 'Other',
      otherIncomeValue: '$113M',
      tax: 'Tax',
      taxValue: '($12M)',
      netProfit: 'Net profit',
      netProfitValue: '$153M',
      operating: 'Operating',
      expenses: 'expenses',
      operatingExpensesValue: '($345M)',
      ga: 'G&A',
      gaValue: '($107M)',
      gaPct: '12% of revenue',
      gaYoy: '(7pp) Y/Y',
      sm: 'S&M',
      smValue: '($104M)',
      smPct: '11% of revenue',
      smYoy: '(1pp) Y/Y',
      rnd: 'R&D',
      rndValue: '($91M)',
      rndPct: '10% of revenue',
      rndYoy: '(2pp) Y/Y',
      otherOpex: 'Other',
      otherOpexValue: '($43M)',
      otherOpexPct: '5% of revenue',
      otherOpexYoy: '+4pp Y/Y',
    },
    zh: {
      deliveriesValue: '$481M',
      deliveriesYoy: '同比 +18%',
      deliveriesName: '配送',
      deliveriesMargin: '经调整利润率 17%',
      deliveriesMarginYoy: '同比 +3 个百分点',
      mobilityValue: '$325M',
      mobilityYoy: '同比 +15%',
      mobilityName: '出行',
      mobilityMargin: '经调整利润率 57%',
      mobilityMarginYoy: '同比 +3 个百分点',
      financialValue: '$99M',
      financialYoy: '同比 +34%',
      financialName: '金融服务',
      financialMargin: '经调整利润率 (36%)',
      financialMarginYoy: '同比 +11 个百分点',
      revenue: '收入',
      revenueValue: '$906M',
      revenueYoy: '同比 +19%',
      gross: '毛利润',
      grossValue: '$397M',
      grossMargin: '毛利率 44%',
      grossYoy: '同比 +0 个百分点',
      costOf: '收入',
      revenueWord: '成本',
      operatingProfit: '营业利润',
      operatingProfitValue: '$52M',
      operatingMargin: '利润率 6%',
      operatingYoy: '同比 +6 个百分点',
      other: '其他',
      otherIncomeValue: '$113M',
      tax: '税费',
      taxValue: '($12M)',
      netProfit: '净利润',
      netProfitValue: '$153M',
      operating: '营业',
      expenses: '费用',
      operatingExpensesValue: '($345M)',
      ga: '一般及行政',
      gaValue: '($107M)',
      gaPct: '占收入 12%',
      gaYoy: '同比 (7 个百分点)',
      sm: '销售与营销',
      smValue: '($104M)',
      smPct: '占收入 11%',
      smYoy: '同比 (1 个百分点)',
      rnd: '研发',
      rndValue: '($91M)',
      rndPct: '占收入 10%',
      rndYoy: '同比 (2 个百分点)',
      otherOpex: '其他',
      otherOpexValue: '($43M)',
      otherOpexPct: '占收入 5%',
      otherOpexYoy: '同比 +4 个百分点',
    },
  };

  const makeLabels = (L) => ({
    deliveries: {
      blocks: [
        {
          x: 475, top: 282, anchor: 'middle', lineGap: 10,
          lines: [
            { text: L.deliveriesValue, size: 36, weight: 400, color: GRAB },
            { text: L.deliveriesYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 206, top: 443, anchor: 'middle', lineGap: 11,
          lines: [
            { text: L.deliveriesName, size: 37, weight: 800 },
            { text: L.deliveriesMargin, size: 27, weight: 400, color: NOTE },
            { text: L.deliveriesMarginYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    mobility: {
      blocks: [
        {
          x: 475, top: 662, anchor: 'middle', lineGap: 10,
          lines: [
            { text: L.mobilityValue, size: 36, weight: 400, color: GRAB },
            { text: L.mobilityYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 207, top: 746, anchor: 'middle', lineGap: 11,
          lines: [
            { text: L.mobilityName, size: 37, weight: 800 },
            { text: L.mobilityMargin, size: 27, weight: 400, color: NOTE },
            { text: L.mobilityMarginYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    financial_services: {
      blocks: [
        {
          x: 475, top: 974, anchor: 'middle', lineGap: 10,
          lines: [
            { text: L.financialValue, size: 36, weight: 400, color: GRAB },
            { text: L.financialYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 205, top: 1005, anchor: 'middle', lineGap: 11,
          lines: [
            { text: L.financialName, size: 37, weight: 800 },
            { text: L.financialMargin, size: 27, weight: 400, color: NOTE },
            { text: L.financialMarginYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 943, top: 464, anchor: 'middle', lineGap: 10,
          lines: [
            { text: L.revenue, size: 37, weight: 800 },
            { text: L.revenueValue, size: 36, weight: 400 },
            { text: L.revenueYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1410, top: 321, anchor: 'middle', lineGap: 10,
          lines: [
            { text: L.gross, size: 37, weight: 800 },
            { text: L.grossValue, size: 36, weight: 400 },
            { text: L.grossMargin, size: 27, weight: 400, color: NOTE },
            { text: L.grossYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1410, top: 1139, anchor: 'middle', lineGap: 10,
          lines: [
            { text: L.costOf, size: 37, weight: 800 },
            { text: L.revenueWord, size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1872, top: 236, anchor: 'middle', lineGap: 10,
          lines: [
            { text: L.operatingProfit, size: 37, weight: 800 },
            { text: L.operatingProfitValue, size: 36, weight: 400 },
            { text: L.operatingMargin, size: 27, weight: 400, color: NOTE },
            { text: L.operatingYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other_income: {
      blocks: [
        {
          x: 2222, top: 452, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.other, size: 32, weight: 800 },
            { text: L.otherIncomeValue, size: 31, weight: 400 },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: 2495, top: 528, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.tax, size: 32, weight: 800 },
            { text: L.taxValue, size: 31, weight: 400 },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2500, top: 319, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.netProfit, size: 37, weight: 800 },
            { text: L.netProfitValue, size: 36, weight: 400 },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1877, top: 823, anchor: 'middle', lineGap: 10,
          lines: [
            { text: L.operating, size: 37, weight: 800 },
            { text: L.expenses, size: 37, weight: 800 },
            { text: L.operatingExpensesValue, size: 36, weight: 400 },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: 2498, top: 640, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.ga, size: 31, weight: 800 },
            { text: L.gaValue, size: 31, weight: 400 },
            { text: L.gaPct, size: 27, weight: 400, color: NOTE },
            { text: L.gaYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: 2498, top: 834, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.sm, size: 31, weight: 800 },
            { text: L.smValue, size: 31, weight: 400 },
            { text: L.smPct, size: 27, weight: 400, color: NOTE },
            { text: L.smYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: 2498, top: 1024, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.rnd, size: 31, weight: 800 },
            { text: L.rndValue, size: 31, weight: 400 },
            { text: L.rndPct, size: 27, weight: 400, color: NOTE },
            { text: L.rndYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other_opex: {
      blocks: [
        {
          x: 2498, top: 1207, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.otherOpex, size: 31, weight: 800 },
            { text: L.otherOpexValue, size: 31, weight: 400 },
            { text: L.otherOpexPct, size: 27, weight: 400, color: NOTE },
            { text: L.otherOpexYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'grab-q4-fy25',
    name: 'Grab · Q4 FY25',
    company: 'Grab',
    meta: {
      company: 'Grab',
      title: 'Grab Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/grab-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2080,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoSvg: grabLogoSvg,
      logoViewBox: '0 0 540 160',
      logoWidth: 540,
      logoHeight: 160,
      logoY: 268,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: GRAB, label: GRAB },
        hub: { node: GRAB, label: GRAB },
        profit: { node: PROFIT, label: PROFIT_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAB_LINK,
        hub: GRAB_LINK,
        profit: PROFIT_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 37, value: 36, note: 27, lineGap: 10 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      nodes: {
        deliveries: { x: 439, y: 373, width: 73, height: 224 },
        mobility: { x: 439, y: 750, width: 73, height: 151 },
        financial_services: { x: 439, y: 1060, width: 73, height: 46 },
        revenue: { x: 906, y: 604, width: 73, height: 422 },
        gross_profit: { x: 1373, y: 502, width: 73, height: 185 },
        cost_of_revenue: { x: 1373, y: 879, width: 73, height: 238 },
        operating_profit: { x: 1835, y: 414, width: 73, height: 24 },
        operating_expenses: { x: 1839, y: 645, width: 75, height: 160 },
        other_income: { x: 2186, y: 383, width: 73, height: 53 },
        tax: { x: 2307, y: 559, width: 73, height: 6 },
        net_profit: { x: 2307, y: 327, width: 73, height: 71 },
        ga: { x: 2307, y: 681, width: 73, height: 50 },
        sm: { x: 2307, y: 870, width: 73, height: 49 },
        rnd: { x: 2307, y: 1059, width: 73, height: 42 },
        other_opex: { x: 2307, y: 1239, width: 73, height: 20 },
      },
      labels: makeLabels(labelText.en),
    },

    nodes: [
      { id: 'deliveries', col: 0, order: 0, type: 'source', label: 'Deliveries', value: 481, notes: ['+18% Y/Y', '17% adjusted margin', '+3pp Y/Y'], color: GRAB, labelColor: GRAB, linkTint: GRAB_LINK },
      { id: 'mobility', col: 0, order: 1, type: 'source', label: 'Mobility', value: 325, notes: ['+15% Y/Y', '57% adjusted margin', '+3pp Y/Y'], color: GRAB, labelColor: GRAB, linkTint: GRAB_LINK },
      { id: 'financial_services', col: 0, order: 2, type: 'source', label: 'Financial Services', value: 99, notes: ['+34% Y/Y', '(36%) adjusted margin', '+11pp Y/Y'], color: GRAB, labelColor: GRAB, linkTint: GRAB_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 906, notes: ['+19% Y/Y'], color: GRAB, labelColor: GRAB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 397, notes: ['44% margin', '+0pp Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 509, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 52, notes: ['6% margin', '+6pp Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 345, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 113, color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 0, type: 'cost', label: 'Tax', value: 12, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 153, color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 107, notes: ['12% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 104, notes: ['11% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 91, notes: ['10% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 43, notes: ['5% of revenue', '+4pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'deliveries', target: 'revenue', value: 481, width: 224, sourceOrder: 0, targetOrder: 0 },
      { source: 'mobility', target: 'revenue', value: 325, width: 151, sourceOrder: 0, targetOrder: 1 },
      { source: 'financial_services', target: 'revenue', value: 99, width: 46, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 397, width: 185, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 509, width: 238, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 52, width: 24, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 345, width: 160, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'operating_profit', target: 'net_profit', value: 40, width: 18, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      {
        source: 'operating_profit', target: 'tax', value: 12, width: 6,
        sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK,
        y0: 435, y1: 562,
        curve: { x0: 1908, x1: 2307, c1x: 2030, c2x: 2188, c1y: 435, c2y: 562 },
      },
      { source: 'other_income', target: 'net_profit', value: 113, width: 53, sourceOrder: 0, targetOrder: 1, linkTint: PROFIT_LINK },

      { source: 'operating_expenses', target: 'ga', value: 107, width: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 104, width: 49, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 91, width: 42, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 43, width: 20, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Grab · 2025 财年第四季度',
        meta: {
          title: 'Grab 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1780,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          deliveries: { label: '配送', notes: ['同比 +18%', '经调整利润率 17%', '同比 +3 个百分点'] },
          mobility: { label: '出行', notes: ['同比 +15%', '经调整利润率 57%', '同比 +3 个百分点'] },
          financial_services: { label: '金融服务', notes: ['同比 +34%', '经调整利润率 (36%)', '同比 +11 个百分点'] },
          revenue: { label: '收入', notes: ['同比 +19%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 44%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 +6 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          other_income: { label: '其他' },
          tax: { label: '税费' },
          net_profit: { label: '净利润' },
          ga: { label: '一般及行政', notes: ['占收入 12%', '同比 (7 个百分点)'] },
          sm: { label: '销售与营销', notes: ['占收入 11%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 10%', '同比 (2 个百分点)'] },
          other_opex: { label: '其他', notes: ['占收入 5%', '同比 +4 个百分点'] },
        },
        layout: {
          labels: makeLabels(labelText.zh),
        },
      },
    },
  });
})();
