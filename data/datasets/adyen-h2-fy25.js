/* ====================================================================
 *  Adyen - H2 FY25 income statement (€M)
 *  Reconstructed from input/processed/adyen-h2-fy25.png as a fixed
 *  d3-sankey layout with pure SVG/text annotations.
 *
 *  Flow: four gross-revenue lines feed Gross revenue (€1,411M). Net
 *  revenue is reached after two visible cost deductions (€96M and €51M)
 *  and a small net-interest add-in (€7M). Operating profit plus other
 *  income less tax bridge to net profit; operating expenses split into
 *  four reported cost lines.
 * ==================================================================== */
(function () {
  const TITLE = '#155377';
  const NAVY = '#001a3d';
  const GRAY_LINK = '#8d97a1';
  const GREEN = '#29a329';
  const ADYEN_GREEN = '#31b85a';
  const GREEN_LABEL = '#00934f';
  const GREEN_LINK = '#98cb99';
  const RED = '#d40000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e58283';
  const NOTE = '#6c6c6c';
  const BG = '#f2f2f2';
  const WHITE = '#ffffff';

  const adyenLogo = `
    <text x="260" y="125" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="142" font-weight="900" fill="${ADYEN_GREEN}" textLength="510"
      lengthAdjust="spacingAndGlyphs">adyen</text>`;

  const statCard = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="88" y="203" width="185" height="203" rx="31" fill="#000000"/>
      <text x="181" y="260" text-anchor="middle" font-size="31" font-weight="800" fill="${WHITE}">${L.processed}</text>
      <text x="181" y="302" text-anchor="middle" font-size="31" font-weight="800" fill="${WHITE}">${L.volume}</text>
      <text x="181" y="339" text-anchor="middle" font-size="28" font-weight="500" fill="${WHITE}">€745B</text>
      <text x="181" y="374" text-anchor="middle" font-size="24" font-weight="500" fill="${WHITE}">${L.processedYy}</text>
    </g>`;

  const line = (text, size, weight, color) => ({ text, size, weight, color });
  const name = (text, color = NAVY, size = 40) => line(text, size, 800, color);
  const value = (text, color = NAVY, size = 40) => line(text, size, 400, color);
  const note = (text, size = 30) => line(text, size, 400, NOTE);
  const names = (arr, color = NAVY, size = 40) => arr.map((text) => name(text, color, size));

  function buildLabels(T) {
    return {
      settlement_fees: {
        blocks: [
          { x: 400, top: 286, anchor: 'middle', lineGap: 11, lines: [value('€853M'), note(T.yy19)] },
          { x: 333, top: 467, anchor: 'end', lines: names(T.settlement) },
        ],
      },
      processing_fees: {
        blocks: [
          { x: 400, top: 625, anchor: 'middle', lineGap: 11, lines: [value('€309M'), note(T.yy9)] },
          { x: 333, top: 735, anchor: 'end', lines: names(T.processing) },
        ],
      },
      sales_of_goods: {
        blocks: [
          { x: 400, top: 852, anchor: 'middle', lineGap: 11, lines: [value('€54M'), note(T.yy24)] },
          { x: 333, top: 925, anchor: 'end', lines: names(T.sales) },
        ],
      },
      other_services: {
        blocks: [
          { x: 400, top: 1012, anchor: 'middle', lineGap: 11, lines: [value('€195M'), note(T.yy29)] },
          { x: 333, top: 1108, anchor: 'end', lines: names(T.otherServices) },
        ],
      },
      revenue: {
        blocks: [
          { x: 866, top: 454, anchor: 'middle', lineGap: 10, lines: [...names(T.grossRevenue), value('€1,411M'), note(T.yy18)] },
        ],
      },
      net_interest: {
        blocks: [
          { x: 1105, top: 454, anchor: 'middle', lineGap: 5, lines: [...names(T.netInterest, GREEN_LABEL, 31), value('€7M', GREEN_LABEL, 31)] },
        ],
      },
      net_revenue: {
        blocks: [
          { x: 1334, top: 518, anchor: 'middle', lineGap: 10, lines: [...names(T.netRevenue, NAVY, 40), value('€1,271M'), note(T.yy17)] },
        ],
      },
      cost_from_financial_institutions: {
        blocks: [
          { x: 1499, top: 1047, anchor: 'middle', lineGap: 10, lines: [...names(T.costFromFi, RED_LABEL, 37), value('(€96M)', RED_LABEL, 37)] },
        ],
      },
      cost_of_goods_sold: {
        blocks: [
          { x: 1470, top: 1257, anchor: 'middle', lineGap: 10, lines: [...names(T.cogs, RED_LABEL, 35), value('(€51M)', RED_LABEL, 35)] },
        ],
      },
      operating_profit: {
        blocks: [
          { x: 1802, top: 357, anchor: 'middle', lineGap: 10, lines: [...names(T.operatingProfit, GREEN_LABEL, 40), value('€627M', GREEN_LABEL), note(T.margin49), note(T.pp2)] },
        ],
      },
      operating_expenses: {
        blocks: [
          { x: 1801, top: 1054, anchor: 'middle', lineGap: 9, lines: [...names(T.operatingExpenses, RED_LABEL, 38), value('(€644M)', RED_LABEL, 38)] },
        ],
      },
      other_income: {
        blocks: [
          { x: 2134, top: 303, anchor: 'middle', lineGap: 7, lines: [...names(T.otherIncome, GREEN_LABEL, 32), value('€133M', GREEN_LABEL, 32)] },
        ],
      },
      net_profit: {
        blocks: [
          { x: 2448, top: 393, anchor: 'middle', lineGap: 10, lines: [...names(T.netProfit, GREEN_LABEL, 40), value('€582M', GREEN_LABEL), note(T.margin46), note(T.ppNeg2)] },
        ],
      },
      tax: {
        blocks: [
          { x: 2464, top: 688, anchor: 'middle', lineGap: 8, lines: [...names(T.tax, RED_LABEL, 32), value('(€179M)', RED_LABEL, 32)] },
        ],
      },
      wages_salaries: {
        blocks: [
          { x: 2470, top: 840, anchor: 'middle', lineGap: 8, lines: [...names(T.wages, RED_LABEL, 30), value('(€329M)', RED_LABEL, 30), note(T.margin26, 28), note(T.ppNeg3, 28)] },
        ],
      },
      other_opex: {
        blocks: [
          { x: 2470, top: 1029, anchor: 'middle', lineGap: 8, lines: [...names(T.otherOpex, RED_LABEL, 30), value('(€189M)', RED_LABEL, 30)] },
        ],
      },
      amortization_depreciation: {
        blocks: [
          { x: 2471, top: 1136, anchor: 'middle', lineGap: 8, lines: [...names(T.amortization, RED_LABEL, 29), value('(€75M)', RED_LABEL, 29)] },
        ],
      },
      social_securities_pension: {
        blocks: [
          { x: 2472, top: 1254, anchor: 'middle', lineGap: 8, lines: [...names(T.social, RED_LABEL, 29), value('(€51M)', RED_LABEL, 29)] },
        ],
      },
    };
  }

  const EN = {
    processed: 'Processed',
    volume: 'volume',
    processedYy: '+12% Y/Y',
    settlement: ['Settlement fees'],
    processing: ['Processing fees'],
    sales: ['Sales of goods'],
    otherServices: ['Other services'],
    grossRevenue: ['Gross revenue'],
    netInterest: ['Net', 'interest'],
    netRevenue: ['Net revenue'],
    costFromFi: ['Cost from', 'financial', 'institutions'],
    cogs: ['Cost of', 'goods sold'],
    operatingProfit: ['Operating profit'],
    operatingExpenses: ['Operating', 'expenses'],
    otherIncome: ['Other'],
    netProfit: ['Net profit'],
    tax: ['Tax'],
    wages: ['Wages & salaries'],
    otherOpex: ['Other'],
    amortization: ['Amortization &', 'Depreciation'],
    social: ['Social securities', 'and pension'],
    yy9: '+9% Y/Y',
    yy17: '+17% Y/Y',
    yy18: '+18% Y/Y',
    yy19: '+19% Y/Y',
    yy24: '+24% Y/Y',
    yy29: '+29% Y/Y',
    margin49: '49% of net revenue',
    margin46: '46% of net revenue',
    margin26: '26% of net revenue',
    pp2: '+2pp Y/Y',
    ppNeg2: '(2pp) Y/Y',
    ppNeg3: '(3pp) Y/Y',
  };

  const ZH = {
    processed: '处理',
    volume: '交易额',
    processedYy: '同比 +12%',
    settlement: ['结算费'],
    processing: ['处理费'],
    sales: ['商品销售'],
    otherServices: ['其他服务'],
    grossRevenue: ['总收入'],
    netInterest: ['净', '利息'],
    netRevenue: ['净收入'],
    costFromFi: ['来自', '金融机构', '的成本'],
    cogs: ['商品', '销售成本'],
    operatingProfit: ['营业利润'],
    operatingExpenses: ['营业', '费用'],
    otherIncome: ['其他'],
    netProfit: ['净利润'],
    tax: ['税费'],
    wages: ['工资与薪金'],
    otherOpex: ['其他'],
    amortization: ['摊销与', '折旧'],
    social: ['社会保障', '与养老金'],
    yy9: '同比 +9%',
    yy17: '同比 +17%',
    yy18: '同比 +18%',
    yy19: '同比 +19%',
    yy24: '同比 +24%',
    yy29: '同比 +29%',
    margin49: '占净收入 49%',
    margin46: '占净收入 46%',
    margin26: '占净收入 26%',
    pp2: '同比 +2 个百分点',
    ppNeg2: '同比 (2 个百分点)',
    ppNeg3: '同比 (3 个百分点)',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adyen-h2-fy25',
    name: 'Adyen · H2 FY25',
    company: 'Adyen',
    meta: {
      company: 'Adyen',
      title: 'Adyen H2 FY25 Income Statement',
      period: 'H2 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/adyen-h2-fy25.png', width: 2667, height: 1500 },
      titleX: 1335,
      titleY: 199,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2140,
      periodX: -3000,
      periodY: -3000,
      periodNoteY: -2950,
      logoWidth: 520,
      logoHeight: 160,
      logoY: 246,
      logoViewBox: '0 0 520 160',
      logoSvg: adyenLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 30, lineGap: 10 },
    },
    annotationsSvg: statCard(EN),

    layout: {
      scale: 0.2186,
      nodes: {
        settlement_fees: { x: 363, y: 383, width: 72, height: 184 },
        processing_fees: { x: 363, y: 722, width: 72, height: 65 },
        sales_of_goods: { x: 363, y: 946, width: 72, height: 10 },
        other_services: { x: 363, y: 1106, width: 72, height: 41 },
        revenue: { x: 831, y: 600, width: 71, height: 308 },
        net_interest: { x: 1069, y: 581, width: 72, height: 2 },
        net_revenue: { x: 1298, y: 662, width: 71, height: 278 },
        cost_from_financial_institutions: { x: 1297, y: 1103, width: 72, height: 19 },
        cost_of_goods_sold: { x: 1297, y: 1263, width: 72, height: 10 },
        operating_profit: { x: 1765, y: 544, width: 72, height: 136 },
        operating_expenses: { x: 1765, y: 906, width: 72, height: 140 },
        other_income: { x: 2098, y: 389, width: 71, height: 27 },
        net_profit: { x: 2232, y: 415, width: 72, height: 126 },
        tax: { x: 2232, y: 707, width: 72, height: 38 },
        wages_salaries: { x: 2232, y: 850, width: 72, height: 71 },
        other_opex: { x: 2232, y: 1024, width: 72, height: 40 },
        amortization_depreciation: { x: 2232, y: 1166, width: 72, height: 15 },
        social_securities_pension: { x: 2232, y: 1280, width: 72, height: 10 },
      },
      labels: buildLabels(EN),
    },

    nodes: [
      { id: 'settlement_fees', col: 0, order: 0, type: 'source', label: 'Settlement fees', value: 853, valueText: '€853M', notes: ['+19% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'processing_fees', col: 0, order: 1, type: 'source', label: 'Processing fees', value: 309, valueText: '€309M', notes: ['+9% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'sales_of_goods', col: 0, order: 2, type: 'source', label: 'Sales of goods', value: 54, valueText: '€54M', notes: ['+24% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'other_services', col: 0, order: 3, type: 'source', label: 'Other services', value: 195, valueText: '€195M', notes: ['+29% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Gross revenue', value: 1411, valueText: '€1,411M', notes: ['+18% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'net_interest', col: 2, order: 0, type: 'profit', label: 'Net interest', value: 7, valueText: '€7M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_revenue', col: 2, order: 1, type: 'hub', label: 'Net revenue', value: 1271, valueText: '€1,271M', notes: ['+17% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'cost_from_financial_institutions', col: 2, order: 2, type: 'cost', label: ['Cost from', 'financial', 'institutions'], value: 96, valueText: '(€96M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_of_goods_sold', col: 2, order: 3, type: 'cost', label: ['Cost of', 'goods sold'], value: 51, valueText: '(€51M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 627, valueText: '€627M', notes: ['49% of net revenue', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 644, valueText: '(€644M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 133, valueText: '€133M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 582, valueText: '€582M', notes: ['46% of net revenue', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 179, valueText: '(€179M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'wages_salaries', col: 5, order: 2, type: 'cost', label: 'Wages & salaries', value: 329, valueText: '(€329M)', notes: ['26% of net revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 3, type: 'cost', label: 'Other', value: 189, valueText: '(€189M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization_depreciation', col: 5, order: 4, type: 'cost', label: ['Amortization &', 'Depreciation'], value: 75, valueText: '(€75M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'social_securities_pension', col: 5, order: 5, type: 'cost', label: ['Social securities', 'and pension'], value: 51, valueText: '(€51M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'settlement_fees', target: 'revenue', value: 853, width: 184, sourceOrder: 0, targetOrder: 0 },
      { source: 'processing_fees', target: 'revenue', value: 309, width: 65, sourceOrder: 0, targetOrder: 1 },
      { source: 'sales_of_goods', target: 'revenue', value: 54, width: 10, sourceOrder: 0, targetOrder: 2 },
      { source: 'other_services', target: 'revenue', value: 195, width: 41, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'net_revenue', value: 1264, width: 276, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'cost_from_financial_institutions', value: 96, width: 19, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_goods_sold', value: 51, width: 10, sourceOrder: 2, targetOrder: 0 },
      { source: 'net_interest', target: 'net_revenue', value: 7, width: 2, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK }, y0: 582, y1: 664 },
      { source: 'net_revenue', target: 'operating_profit', value: 627, width: 136, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'net_revenue', target: 'operating_expenses', value: 644, width: 140, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 449, width: 98, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 179, width: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 133, width: 28, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'wages_salaries', value: 329, width: 71, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 189, width: 40, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization_depreciation', value: 75, width: 15, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'social_securities_pension', value: 51, width: 10, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Adyen · 2025 财年下半年',
        meta: {
          title: 'Adyen 2025 财年下半年利润表',
          period: '2025 财年下半年',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1540,
        },
        annotationsSvg: statCard(ZH),
        nodes: {
          settlement_fees: { label: '结算费', notes: ['同比 +19%'] },
          processing_fees: { label: '处理费', notes: ['同比 +9%'] },
          sales_of_goods: { label: '商品销售', notes: ['同比 +24%'] },
          other_services: { label: '其他服务', notes: ['同比 +29%'] },
          revenue: { label: '总收入', notes: ['同比 +18%'] },
          net_interest: { label: '净利息' },
          net_revenue: { label: '净收入', notes: ['同比 +17%'] },
          cost_from_financial_institutions: { label: ['来自', '金融机构', '的成本'] },
          cost_of_goods_sold: { label: ['商品', '销售成本'] },
          operating_profit: { label: '营业利润', notes: ['占净收入 49%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['占净收入 46%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          wages_salaries: { label: '工资与薪金', notes: ['占净收入 26%', '同比 (3 个百分点)'] },
          other_opex: { label: '其他' },
          amortization_depreciation: { label: ['摊销与', '折旧'] },
          social_securities_pension: { label: ['社会保障', '与养老金'] },
        },
        layout: {
          labels: buildLabels(ZH),
        },
      },
    },
  });
})();
