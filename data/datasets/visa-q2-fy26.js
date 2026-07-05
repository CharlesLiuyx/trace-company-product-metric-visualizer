/* ====================================================================
 * Visa - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/visa-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 *
 * Source-fidelity note: the infographic figures do not reconcile
 * exactly. Net revenue $11.2B less operating expenses $3.7B implies
 * $7.5B operating profit (chart labels $7.2B, 64% margin); operating
 * profit $7.2B less tax $0.9B implies $6.3B (chart labels net profit
 * $6.0B, 54% margin). Node bars are drawn to the residual heights so
 * the flows stay conserved while the labels reproduce the source.
 * ==================================================================== */
(function () {
  const TITLE = '#155377';
  const NAVY = '#00268f';
  const NAVY_LINK = '#8596c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const visaLogo = `
    <defs>
      <linearGradient id="visaLogoGrad" x1="0" y1="0" x2="1" y2="0.35">
        <stop offset="0%" stop-color="#1c3aa0"/>
        <stop offset="100%" stop-color="#00157a"/>
      </linearGradient>
    </defs>
    <text x="179" y="99" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="132" font-weight="900" font-style="italic" letter-spacing="3"
      fill="url(#visaLogoGrad)" textLength="352" lengthAdjust="spacingAndGlyphs">VISA</text>
  `;

  // KPI capsule: bold two-line name over a lighter Y/Y note, all white on navy.
  const card = (x, y, w, h, names, note) => {
    const cx = x + w / 2;
    const nameEls = names
      .map((t, i) => `<text x="${cx}" y="${y + 56 + i * 33}" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${t}</text>`)
      .join('');
    const noteEl = `<text x="${cx}" y="${y + 56 + names.length * 33}" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${note}</text>`;
    return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="34" fill="${NAVY}"/>${nameEls}${noteEl}</g>`;
  };

  const annotations = (t) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(77, 1189, 203, 147, t.card1, t.card1n)}
      ${card(291, 1188, 290, 148, t.card2, t.card2n)}
      ${card(590, 1189, 332, 147, t.card3, t.card3n)}
    </g>`;

  // Fixed-geometry label builder shared by English (canonical) and the
  // localization overlay; only text differs between languages.
  function mkLabels(T, inlineTerminals) {
    const nameL = (arr, size, color) => arr.map((s) => ({ text: s, size, weight: 700, color }));
    const L = {
      revenue: { blocks: [] },
      service: {
        blocks: [
          { x: 399, top: 254, anchor: 'middle', lineGap: 13, lines: [{ text: '$5.0B', size: 38, weight: 400, color: NAVY }, { text: T.n_service, size: 27, weight: 400, color: NOTE }] },
          { x: 192, top: 386, anchor: 'middle', lineGap: 11, lines: nameL(T.service, 36, NAVY) },
        ],
      },
      data_processing: {
        blocks: [
          { x: 399, top: 497, anchor: 'middle', lineGap: 13, lines: [{ text: '$5.5B', size: 38, weight: 400, color: NAVY }, { text: T.n_dp, size: 27, weight: 400, color: NOTE }] },
          { x: 192, top: 613, anchor: 'middle', lineGap: 11, lines: nameL(T.data_processing, 36, NAVY) },
        ],
      },
      international: {
        blocks: [
          { x: 400, top: 749, anchor: 'middle', lineGap: 13, lines: [{ text: '$3.6B', size: 38, weight: 400, color: NAVY }, { text: T.n_intl, size: 27, weight: 400, color: NOTE }] },
          { x: 192, top: 844, anchor: 'middle', lineGap: 11, lines: nameL(T.international, 36, NAVY) },
        ],
      },
      other_rev: {
        blocks: [
          { x: 398, top: 962, anchor: 'middle', lineGap: 13, lines: [{ text: '$1.3B', size: 38, weight: 400, color: NAVY }, { text: T.n_other, size: 27, weight: 400, color: NOTE }] },
          { x: 192, top: 1052, anchor: 'middle', lineGap: 11, lines: nameL(T.other_rev, 36, NAVY) },
        ],
      },
      net_revenue: {
        blocks: [
          { x: 1333, top: 392, anchor: 'middle', lineGap: 7, lines: [...nameL(T.net_revenue, 36, NAVY), { text: '$11.2B', size: 38, weight: 400, color: NAVY }, { text: T.n_netrev, size: 27, weight: 400, color: NOTE }] },
        ],
      },
      client_incentives: {
        blocks: [
          { x: 1333, top: 1024, anchor: 'middle', lineGap: 11, lines: [...nameL(T.client_incentives, 36, RED_LABEL), { text: '($4.2B)', size: 36, weight: 400, color: RED_LABEL }] },
        ],
      },
      operating_profit: {
        blocks: [
          { x: 1800, top: 254, anchor: 'middle', lineGap: 14, lines: [...nameL(T.operating_profit, 38, GREEN_LABEL), { text: '$7.2B', size: 38, weight: 400, color: GREEN_LABEL }, { text: T.op_margin, size: 27, weight: 400, color: NOTE }, { text: T.op_pp, size: 27, weight: 400, color: NOTE }] },
        ],
      },
      operating_expenses: {
        blocks: [
          { x: 1800, top: 895, anchor: 'middle', lineGap: 11, lines: [...nameL(T.operating_expenses, 36, RED_LABEL), { text: '($3.7B)', size: 36, weight: 400, color: RED_LABEL }] },
        ],
      },
      net_profit: {
        blocks: [
          { x: 2413, top: 315, anchor: 'middle', lineGap: 13, lines: [...nameL(T.net_profit, 38, GREEN_LABEL), { text: '$6.0B', size: 38, weight: 400, color: GREEN_LABEL }, { text: T.np_margin, size: 27, weight: 400, color: NOTE }, { text: T.np_pp, size: 27, weight: 400, color: NOTE }] },
        ],
      },
      tax: {
        blocks: [
          { x: 2418, top: 628, anchor: 'middle', lineGap: 8, lines: [...nameL(T.tax, 31, RED_LABEL), { text: '($0.9B)', size: 31, weight: 400, color: RED_LABEL }] },
        ],
      },
      other_ded: {
        blocks: [
          { x: 2421, top: 729, anchor: 'middle', lineGap: 8, lines: [...nameL(T.other_ded, 31, RED_LABEL), { text: '($0.0B)', size: 31, weight: 400, color: RED_LABEL }] },
        ],
      },
    };

    const term = [
      ['personnel', T.personnel, '($1.8B)', 856, 2446],
      ['marketing', T.marketing, '($0.5B)', 954, 2453],
      ['general_admin', T.general_admin, '($0.5B)', 1035, 2533],
      ['da', T.da, '($0.3B)', 1120, 2377],
      ['litigation', T.litigation, '($0.3B)', 1199, 2443],
      ['network', T.network, '($0.3B)', 1278, 2429],
      ['professional_fees', T.professional_fees, '($0.2B)', 1359, 2534],
    ];
    term.forEach(([id, name, val, top, valx]) => {
      L[id] = inlineTerminals
        ? {
            blocks: [
              { x: 2320, top, anchor: 'start', lines: [{ text: name, size: 23, weight: 700, color: RED_LABEL }] },
              { x: valx, top: top - 2, anchor: 'start', lines: [{ text: val, size: 26, weight: 400, color: RED_LABEL }] },
            ],
          }
        : {
            blocks: [
              { x: 2320, top, anchor: 'start', lines: [{ text: `${name} ${val}`, size: 23, weight: 700, color: RED_LABEL }] },
            ],
          };
    });
    return L;
  }

  const EN_T = {
    service: ['Service'], n_service: '+13% Y/Y',
    data_processing: ['Data', 'processing'], n_dp: '+18% Y/Y',
    international: ['International', 'transaction'], n_intl: '+10% Y/Y',
    other_rev: ['Other'], n_other: '+41% Y/Y',
    net_revenue: ['Net revenue'], n_netrev: '+17% Y/Y',
    client_incentives: ['Client', 'incentives'],
    operating_profit: ['Operating profit'], op_margin: '64% margin', op_pp: '+8pp Y/Y',
    operating_expenses: ['Operating', 'expenses'],
    net_profit: ['Net profit'], np_margin: '54% margin', np_pp: '+6pp Y/Y',
    tax: ['Tax'], other_ded: ['Other'],
    personnel: 'Personnel', marketing: 'Marketing', general_admin: 'General & admin',
    da: 'D&A', litigation: 'Litigation', network: 'Network', professional_fees: 'Professional fees',
    card1: ['Payment', 'Volume'], card1n: '+9% Y/Y',
    card2: ['Cross-Border', 'Volume'], card2n: '+11% Y/Y',
    card3: ['Processed', 'Transactions'], card3n: '+9% Y/Y',
  };

  const ZH_T = {
    service: ['服务'], n_service: '同比 +13%',
    data_processing: ['数据', '处理'], n_dp: '同比 +18%',
    international: ['国际', '交易'], n_intl: '同比 +10%',
    other_rev: ['其他'], n_other: '同比 +41%',
    net_revenue: ['净收入'], n_netrev: '同比 +17%',
    client_incentives: ['客户', '激励'],
    operating_profit: ['营业利润'], op_margin: '利润率 64%', op_pp: '同比 +8 个百分点',
    operating_expenses: ['营业', '费用'],
    net_profit: ['净利润'], np_margin: '利润率 54%', np_pp: '同比 +6 个百分点',
    tax: ['税费'], other_ded: ['其他'],
    personnel: '人员', marketing: '市场营销', general_admin: '综合及行政',
    da: '折旧摊销', litigation: '诉讼', network: '网络', professional_fees: '专业服务费',
    card1: ['支付', '交易额'], card1n: '同比 +9%',
    card2: ['跨境', '交易额'], card2n: '同比 +11%',
    card3: ['处理', '交易笔数'], card3n: '同比 +9%',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'visa-q2-fy26',
    name: 'Visa · Q2 FY26',
    company: 'Visa',
    meta: {
      company: 'Visa',
      title: 'Visa Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/visa-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1332,
      titleY: 190,
      titleSize: 105,
      titleWeight: 800,
      titleTextLength: 1979,
      periodX: 2410,
      periodY: 212,
      periodNoteY: 260,
      logoWidth: 358,
      logoHeight: 116,
      logoY: 276,
      logoViewBox: '0 0 358 116',
      logoSvg: visaLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: TITLE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: NAVY_LINK,
        hub: NAVY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 36, value: 38, note: 27, lineGap: 13 },
    },
    annotationsSvg: annotations(EN_T),

    layout: {
      scale: 23.57,
      nodes: {
        service: { x: 364, y: 345, width: 71, height: 116 },
        data_processing: { x: 364, y: 587, width: 71, height: 130 },
        international: { x: 364, y: 841, width: 71, height: 85 },
        other_rev: { x: 364, y: 1051, width: 71, height: 30 },
        revenue: { x: 831, y: 435, width: 71, height: 363 },
        net_revenue: { x: 1298, y: 529, width: 71, height: 264 },
        client_incentives: { x: 1298, y: 902, width: 71, height: 99 },
        operating_profit: { x: 1765, y: 439, width: 71, height: 170 },
        operating_expenses: { x: 1765, y: 780, width: 71, height: 93 },
        net_profit: { x: 2232, y: 356, width: 72, height: 142 },
        tax: { x: 2232, y: 644, width: 72, height: 26 },
        other_ded: { x: 2232, y: 751, width: 72, height: 2 },
        personnel: { x: 2232, y: 844, width: 72, height: 42 },
        marketing: { x: 2232, y: 959, width: 72, height: 12 },
        general_admin: { x: 2232, y: 1040, width: 72, height: 10 },
        da: { x: 2232, y: 1125, width: 72, height: 7 },
        litigation: { x: 2232, y: 1209, width: 72, height: 6 },
        network: { x: 2232, y: 1288, width: 72, height: 4 },
        professional_fees: { x: 2232, y: 1369, width: 72, height: 6 },
      },
      labels: mkLabels(EN_T, true),
    },

    nodes: [
      { id: 'service', col: 0, order: 0, type: 'source', label: 'Service', value: 5.0, valueText: '$5.0B', notes: ['+13% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'data_processing', col: 0, order: 1, type: 'source', label: ['Data', 'processing'], value: 5.5, notes: ['+18% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'international', col: 0, order: 2, type: 'source', label: ['International', 'transaction'], value: 3.6, notes: ['+10% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'other_rev', col: 0, order: 3, type: 'source', label: 'Other', value: 1.3, notes: ['+41% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: '', value: 15.4, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'net_revenue', col: 2, order: 0, type: 'hub', label: 'Net revenue', value: 11.2, valueText: '$11.2B', notes: ['+17% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'client_incentives', col: 2, order: 1, type: 'cost', label: ['Client', 'incentives'], value: 4.2, valueText: '($4.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 7.2, valueText: '$7.2B', notes: ['64% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.7, valueText: '($3.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 6.0, valueText: '$6.0B', notes: ['54% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.9, valueText: '($0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_ded', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.0, valueText: '($0.0B)', color: '#f2f2f2', labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'personnel', col: 5, order: 0, type: 'cost', label: 'Personnel', value: 1.8, valueText: '($1.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 1, type: 'cost', label: 'Marketing', value: 0.5, valueText: '($0.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 5, order: 2, type: 'cost', label: 'General & admin', value: 0.5, valueText: '($0.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 3, type: 'cost', label: 'D&A', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'litigation', col: 5, order: 4, type: 'cost', label: 'Litigation', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'network', col: 5, order: 5, type: 'cost', label: 'Network', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'professional_fees', col: 5, order: 6, type: 'cost', label: 'Professional fees', value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'service', target: 'revenue', value: 5.0, width: 116, sourceOrder: 0, targetOrder: 0 },
      { source: 'data_processing', target: 'revenue', value: 5.5, width: 132, sourceOrder: 0, targetOrder: 1 },
      { source: 'international', target: 'revenue', value: 3.6, width: 85, sourceOrder: 0, targetOrder: 2 },
      { source: 'other_rev', target: 'revenue', value: 1.3, width: 30, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'net_revenue', value: 11.2, width: 264, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'client_incentives', value: 4.2, width: 99, sourceOrder: 1, targetOrder: 0 },
      { source: 'net_revenue', target: 'operating_profit', value: 7.2, width: 170, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'net_revenue', target: 'operating_expenses', value: 3.7, width: 93, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 6.0, width: 142, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.9, width: 26, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_ded', value: 0.0, width: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'personnel', value: 1.8, width: 42, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 0.5, width: 12, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_admin', value: 0.5, width: 10, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.3, width: 7, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'litigation', value: 0.3, width: 6, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'network', value: 0.3, width: 4, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'professional_fees', value: 0.2, width: 6, sourceOrder: 6, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Visa · 2026 财年第二季度',
        meta: {
          title: 'Visa 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1500,
        },
        annotationsSvg: annotations(ZH_T),
        nodes: {
          service: { label: '服务', notes: ['同比 +13%'] },
          data_processing: { label: ['数据', '处理'], notes: ['同比 +18%'] },
          international: { label: ['国际', '交易'], notes: ['同比 +10%'] },
          other_rev: { label: '其他', notes: ['同比 +41%'] },
          net_revenue: { label: '净收入', notes: ['同比 +17%'] },
          client_incentives: { label: ['客户', '激励'] },
          operating_profit: { label: '营业利润', notes: ['利润率 64%', '同比 +8 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 54%', '同比 +6 个百分点'] },
          tax: { label: '税费' },
          other_ded: { label: '其他' },
          personnel: { label: '人员' },
          marketing: { label: '市场营销' },
          general_admin: { label: '综合及行政' },
          da: { label: '折旧摊销' },
          litigation: { label: '诉讼' },
          network: { label: '网络' },
          professional_fees: { label: '专业服务费' },
        },
        layout: { labels: mkLabels(ZH_T, false) },
      },
    },
  });
})();
