/* ====================================================================
 *  Mastercard - Q1 FY26 income statement (USD B)
 *  Reconstructed from input/processed/mastercard-q1-fy26.png as a fixed
 *  d3-sankey layout with pure SVG/text Mastercard annotations.
 *
 *  Flow: four gross payment-network fee segments feed the Mastercard hub
 *  (gross payment revenue $10.6B), which splits into Payment Network net
 *  revenue ($4.9B) and Rebates & incentives ($5.6B, contra). Payment
 *  Network + Value-added Services & Solutions ($3.5B) form Net revenue
 *  ($8.4B), which splits into Operating profit ($4.9B) and Operating
 *  expenses ($3.5B). Operating profit -> Net profit ($3.9B), Tax, Other;
 *  Operating expenses -> General & admin, D&A, Marketing.
 * ==================================================================== */
(function () {
  const ORANGE = '#ff5f00';
  const SALMON_LINK = '#f7b187';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const WHITE = '#ffffff';

  // Mastercard logo: two overlapping circles (red + amber) with an orange
  // intersection lens, above a lowercase "mastercard" wordmark.
  const logo = `
    <circle cx="78" cy="74" r="74" fill="#eb001b"/>
    <circle cx="170" cy="74" r="74" fill="#f79e1b"/>
    <path d="M124 16 A74 74 0 0 1 124 132 A74 74 0 0 1 124 16 Z" fill="#ff5f00"/>
    <text x="124" y="182" text-anchor="middle" font-size="38" font-weight="500" fill="#231f20" font-family="Montserrat,Arial,sans-serif" textLength="212" lengthAdjust="spacingAndGlyphs">mastercard</text>`;

  const kpiCard = (x, width, t1, t2, note) => `
    <g>
      <rect x="${x}" y="1193" width="${width}" height="148" rx="32" fill="${ORANGE}"/>
      <text x="${x + width / 2}" y="1243" text-anchor="middle" font-size="30" font-weight="700" fill="${WHITE}">${t1}</text>
      <text x="${x + width / 2}" y="1281" text-anchor="middle" font-size="30" font-weight="700" fill="${WHITE}">${t2}</text>
      <text x="${x + width / 2}" y="1320" text-anchor="middle" font-size="29" font-weight="600" fill="${WHITE}">${note}</text>
    </g>`;

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(21, 256, L.c1a, L.c1b, L.c1n)}
      ${kpiCard(294, 285, L.c2a, L.c2b, L.c2n)}
      ${kpiCard(593, 284, L.c3a, L.c3b, L.c3n)}
    </g>`;

  const annotationsEn = annotations({
    c1a: 'Gross Dollar', c1b: 'Volume', c1n: '+7% Y/Y',
    c2a: 'Cross-Border', c2b: 'Volume', c2n: '+13% Y/Y',
    c3a: 'Switched', c3b: 'Transactions', c3n: '+9% Y/Y',
  });
  const annotationsZh = annotations({
    c1a: '总美元', c1b: '交易额', c1n: '同比 +7%',
    c2a: '跨境', c2b: '交易额', c2n: '同比 +13%',
    c3a: '已处理', c3b: '交易笔数', c3n: '同比 +9%',
  });

  // ---- label builder: geometry lives here once; text comes from `t` ----
  const nameLn = (text, color, size) => ({ text, size: size || 41, weight: 700, color });
  const valLn = (color, size) => ({ text: '$value', size: size || 41, weight: 400, color });
  const noteLn = (text) => ({ text, size: 30, weight: 400, color: NOTE });

  const buildLabels = (t) => ({
    // ---- column 0: gross payment-network fee segments ----
    domestic: {
      blocks: [
        { x: 211, top: 363, anchor: 'middle', lineGap: 16,
          lines: t.domestic.map((s) => nameLn(s, ORANGE)) },
        { x: 400, top: 277, anchor: 'middle', lineGap: 12,
          lines: [valLn(ORANGE), noteLn(t.yy9)] },
      ],
    },
    cross_border: {
      blocks: [
        { x: 214, top: 580, anchor: 'middle', lineGap: 16,
          lines: t.crossBorder.map((s) => nameLn(s, ORANGE)) },
        { x: 400, top: 489, anchor: 'middle', lineGap: 12,
          lines: [valLn(ORANGE), noteLn(t.yy23)] },
      ],
    },
    transaction: {
      blocks: [
        { x: 214, top: 823, anchor: 'middle', lineGap: 16,
          lines: t.transaction.map((s) => nameLn(s, ORANGE)) },
        { x: 400, top: 720, anchor: 'middle', lineGap: 12,
          lines: [valLn(ORANGE), noteLn(t.yy20)] },
      ],
    },
    other_rev: {
      blocks: [
        { x: 215, top: 1061, anchor: 'middle', lineGap: 16,
          lines: t.otherSrc.map((s) => nameLn(s, ORANGE)) },
        { x: 400, top: 982, anchor: 'middle', lineGap: 12,
          lines: [valLn(ORANGE), noteLn(t.yy20)] },
      ],
    },
    // ---- column 2: net payment network, rebates (contra), value-added ----
    payment_network: {
      blocks: [
        { x: 1147, top: 244, anchor: 'middle', lineGap: 11,
          lines: [...t.paymentNetwork.map((s) => nameLn(s, ORANGE)), valLn(ORANGE), noteLn(t.yy12)] },
      ],
    },
    rebates: {
      blocks: [
        { x: 1146, top: 935, anchor: 'middle', lineGap: 11,
          lines: [...t.rebates.map((s) => nameLn(s, RED_LABEL)), valLn(RED_LABEL)] },
      ],
    },
    value_added: {
      blocks: [
        { x: 1146, top: 1192, anchor: 'middle', lineGap: 11,
          lines: [...t.valueAdded.map((s) => nameLn(s, ORANGE)), valLn(ORANGE), noteLn(t.yy22)] },
      ],
    },
    // ---- column 3: net revenue ----
    revenue: {
      blocks: [
        { x: 1520, top: 403, anchor: 'middle', lineGap: 11,
          lines: [...t.netRevenue.map((s) => nameLn(s, ORANGE)), valLn(ORANGE), noteLn(t.yy16)] },
      ],
    },
    // ---- column 4: operating profit / operating expenses ----
    operating_profit: {
      blocks: [
        { x: 1893, top: 258, anchor: 'middle', lineGap: 11,
          lines: [...t.operatingProfit.map((s) => nameLn(s, GREEN_LABEL)), valLn(GREEN_LABEL), noteLn(t.margin58), noteLn(t.pp1)] },
      ],
    },
    operating_expenses: {
      blocks: [
        { x: 1895, top: 881, anchor: 'middle', lineGap: 11,
          lines: [...t.operatingExpenses.map((s) => nameLn(s, RED_LABEL)), valLn(RED_LABEL)] },
      ],
    },
    // ---- column 5: terminals ----
    net_profit: {
      blocks: [
        { x: 2431, top: 322, anchor: 'middle', lineGap: 11,
          lines: [...t.netProfit.map((s) => nameLn(s, GREEN_LABEL)), valLn(GREEN_LABEL), noteLn(t.margin46), noteLn(t.pp1)] },
      ],
    },
    tax: {
      blocks: [
        { x: 2425, top: 660, anchor: 'middle', lineGap: 9,
          lines: [...t.tax.map((s) => nameLn(s, RED_LABEL, 40)), valLn(RED_LABEL, 40)] },
      ],
    },
    other_ded: {
      blocks: [
        { x: 2420, top: 749, anchor: 'middle', lineGap: 9,
          lines: [...t.otherDed.map((s) => nameLn(s, RED_LABEL, 40)), valLn(RED_LABEL, 40)] },
      ],
    },
    general_admin: {
      blocks: [
        { x: 2431, top: 897, anchor: 'middle', lineGap: 9,
          lines: [...t.generalAdmin.map((s) => nameLn(s, RED_LABEL, 40)), valLn(RED_LABEL, 40)] },
      ],
    },
    dna: {
      blocks: [
        { x: 2432, top: 1096, anchor: 'middle', lineGap: 9,
          lines: [...t.dna.map((s) => nameLn(s, RED_LABEL, 40)), valLn(RED_LABEL, 40)] },
      ],
    },
    marketing: {
      blocks: [
        { x: 2432, top: 1245, anchor: 'middle', lineGap: 9,
          lines: [...t.marketing.map((s) => nameLn(s, RED_LABEL, 40)), valLn(RED_LABEL, 40)] },
      ],
    },
    // hub carries only the logo, no text label
    network_revenue: { blocks: [] },
  });

  const EN = {
    domestic: ['Domestic', 'assessments'],
    crossBorder: ['Cross-border', 'volume fees'],
    transaction: ['Transaction', 'processing'],
    otherSrc: ['Other'],
    paymentNetwork: ['Payment', 'Network'],
    rebates: ['Rebates &', 'incentives'],
    valueAdded: ['Value-added', 'Services & Solutions'],
    netRevenue: ['Net revenue'],
    operatingProfit: ['Operating profit'],
    operatingExpenses: ['Operating', 'expenses'],
    netProfit: ['Net profit'],
    tax: ['Tax'],
    otherDed: ['Other'],
    generalAdmin: ['General', '& admin'],
    dna: ['D&A'],
    marketing: ['Marketing'],
    yy9: '+9% Y/Y', yy23: '+23% Y/Y', yy20: '+20% Y/Y', yy12: '+12% Y/Y',
    yy22: '+22% Y/Y', yy16: '+16% Y/Y',
    margin58: '58% margin', margin46: '46% margin', pp1: '+1pp Y/Y',
  };

  const ZH = {
    domestic: ['境内', '评估费'],
    crossBorder: ['跨境', '交易量费'],
    transaction: ['交易', '处理'],
    otherSrc: ['其他'],
    paymentNetwork: ['支付', '网络'],
    rebates: ['返利与', '激励'],
    valueAdded: ['增值服务', '与解决方案'],
    netRevenue: ['净收入'],
    operatingProfit: ['营业利润'],
    operatingExpenses: ['运营', '费用'],
    netProfit: ['净利润'],
    tax: ['税费'],
    otherDed: ['其他'],
    generalAdmin: ['一般及', '行政'],
    dna: ['折旧与摊销'],
    marketing: ['营销'],
    yy9: '同比 +9%', yy23: '同比 +23%', yy20: '同比 +20%', yy12: '同比 +12%',
    yy22: '同比 +22%', yy16: '同比 +16%',
    margin58: '58% 利润率', margin46: '46% 利润率', pp1: '同比 +1 个百分点',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mastercard-q1-fy26',
    name: 'Mastercard · Q1 FY26',
    company: 'Mastercard',
    meta: {
      company: 'Mastercard',
      title: 'Mastercard Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/mastercard-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 200,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2430,
      periodX: -3000,
      periodY: -3000,
      logoWidth: 240,
      logoHeight: 190,
      logoY: 290,
      logoViewBox: '0 0 240 190',
      logoSvg: logo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: SALMON_LINK,
        hub: SALMON_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 28.1,
      nodes: {
        domestic: { x: 363, y: 376, width: 72, height: 80 },
        cross_border: { x: 363, y: 588, width: 72, height: 90 },
        transaction: { x: 363, y: 818, width: 72, height: 118 },
        other_rev: { x: 363, y: 1082, width: 72, height: 8 },
        network_revenue: { x: 738, y: 553, width: 71, height: 296 },
        payment_network: { x: 1112, y: 448, width: 71, height: 138 },
        rebates: { x: 1112, y: 763, width: 71, height: 158 },
        value_added: { x: 1112, y: 1083, width: 71, height: 98 },
        revenue: { x: 1486, y: 555, width: 71, height: 236 },
        operating_profit: { x: 1859, y: 449, width: 72, height: 138 },
        operating_expenses: { x: 1859, y: 763, width: 72, height: 98 },
        net_profit: { x: 2233, y: 345, width: 72, height: 110 },
        tax: { x: 2233, y: 647, width: 72, height: 25 },
        other_ded: { x: 2233, y: 755, width: 72, height: 3 },
        general_admin: { x: 2233, y: 909, width: 72, height: 84 },
        dna: { x: 2233, y: 1130, width: 72, height: 8 },
        marketing: { x: 2233, y: 1280, width: 72, height: 6 },
      },
      labels: buildLabels(EN),
    },

    nodes: [
      { id: 'domestic', col: 0, order: 0, type: 'source', label: 'Domestic assessments', value: 2.9 },
      { id: 'cross_border', col: 0, order: 1, type: 'source', label: 'Cross-border volume fees', value: 3.2 },
      { id: 'transaction', col: 0, order: 2, type: 'source', label: 'Transaction processing', value: 4.2 },
      { id: 'other_rev', col: 0, order: 3, type: 'source', label: 'Other', value: 0.3 },

      { id: 'network_revenue', col: 1, order: 0, type: 'hub', label: '', value: 10.6 },

      { id: 'payment_network', col: 2, order: 0, type: 'source', label: 'Payment Network', value: 4.9 },
      { id: 'rebates', col: 2, order: 1, type: 'cost', label: ['Rebates &', 'incentives'], value: 5.6, valueText: '($5.6B)' },
      { id: 'value_added', col: 2, order: 2, type: 'source', label: 'Value-added Services & Solutions', value: 3.5 },

      { id: 'revenue', col: 3, order: 0, type: 'source', label: 'Net revenue', value: 8.4 },

      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.9 },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.5, valueText: '($3.5B)' },

      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.9 },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.9, valueText: '($0.9B)' },
      { id: 'other_ded', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
      { id: 'general_admin', col: 5, order: 3, type: 'cost', label: ['General', '& admin'], value: 3.0, valueText: '($3.0B)' },
      { id: 'dna', col: 5, order: 4, type: 'cost', label: 'D&A', value: 0.3, valueText: '($0.3B)' },
      { id: 'marketing', col: 5, order: 5, type: 'cost', label: 'Marketing', value: 0.2, valueText: '($0.2B)' },
    ],

    links: [
      { source: 'domestic', target: 'network_revenue', value: 2.9, width: 80, targetOrder: 0 },
      { source: 'cross_border', target: 'network_revenue', value: 3.2, width: 90, targetOrder: 1 },
      { source: 'transaction', target: 'network_revenue', value: 4.2, width: 118, targetOrder: 2 },
      { source: 'other_rev', target: 'network_revenue', value: 0.3, width: 8, targetOrder: 3 },

      { source: 'network_revenue', target: 'payment_network', value: 4.9, width: 138, sourceOrder: 0 },
      { source: 'network_revenue', target: 'rebates', value: 5.6, width: 158, sourceOrder: 1 },

      { source: 'payment_network', target: 'revenue', value: 4.9, width: 138, targetOrder: 0 },
      { source: 'value_added', target: 'revenue', value: 3.5, width: 98, targetOrder: 1 },

      { source: 'revenue', target: 'operating_profit', value: 4.9, width: 138, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 3.5, width: 98, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 3.9, width: 110, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.9, width: 25, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_ded', value: 0.1, width: 3, sourceOrder: 2 },

      { source: 'operating_expenses', target: 'general_admin', value: 3.0, width: 84, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'dna', value: 0.3, width: 8, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'marketing', value: 0.2, width: 6, sourceOrder: 2 },
    ],

    i18n: {
      zh: {
        name: 'Mastercard · 2026 财年第一季度',
        meta: {
          title: 'Mastercard 2026 财年第一季度利润表',
          titleTextLength: 1500,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          domestic: { label: '境内评估费' },
          cross_border: { label: '跨境交易量费' },
          transaction: { label: '交易处理' },
          other_rev: { label: '其他' },
          network_revenue: { label: '' },
          payment_network: { label: '支付网络' },
          rebates: { label: ['返利与', '激励'] },
          value_added: { label: '增值服务与解决方案' },
          revenue: { label: '净收入' },
          operating_profit: { label: '营业利润' },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          other_ded: { label: '其他' },
          general_admin: { label: ['一般及', '行政'] },
          dna: { label: '折旧与摊销' },
          marketing: { label: '营销' },
        },
        layout: {
          labels: buildLabels(ZH),
        },
      },
    },
  });
})();
