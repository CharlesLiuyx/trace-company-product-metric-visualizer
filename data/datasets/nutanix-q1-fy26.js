/* Nutanix Q1 FY26 income statement ($M), measured from the Build-bound
 * reference. Interest and tax use source-faithful interactive guide
 * annotations backed by transparent semantic anchors; all ribbons are SVG. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const PURPLE = '#4b00aa';
  const PURPLE_LINK = '#a685d2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TERMINAL_X = 2420;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap || 8,
    lines,
  });

  const nutanixLogo = `
    <text x="295" y="78" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="105" font-weight="900" letter-spacing="-4" fill="#101010"
      textLength="572" lengthAdjust="spacingAndGlyphs">NUTANIX</text>`;

  const adjustmentCallouts = (zh) => {
    const interest = zh ? '利息' : 'Interest';
    const tax = zh ? '税项' : 'Tax';
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <g class="sankey-interactive-annotation" data-node="interest"
          data-link-numerator="interest" data-link-denominator="net_profit"
          data-link-anchor-x="2192" data-link-anchor-y="402">
          <path d="M2103 428.5H2174" fill="none" stroke="${GREEN}" stroke-width="7" stroke-linecap="butt"/>
          <text x="2150" y="478" text-anchor="middle" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${interest}</text>
          <text x="2150" y="520" text-anchor="middle" font-size="30" fill="${GREEN_LABEL}">$16M</text>
          <rect x="2078" y="414" width="150" height="116" fill="transparent" pointer-events="all"/>
        </g>
        <g class="sankey-interactive-annotation" data-node="tax"
          data-link-numerator="tax" data-link-denominator="operating_profit"
          data-link-anchor-x="2290" data-link-anchor-y="555">
          <path d="M2231 569H2303" fill="none" stroke="${RED}" stroke-width="2" stroke-linecap="butt"/>
          <text x="2424" y="561" text-anchor="middle" font-size="31" font-weight="800" fill="${RED_LABEL}">${tax}</text>
          <text x="2424" y="603" text-anchor="middle" font-size="30" fill="${RED_LABEL}">($3M)</text>
          <rect x="2224" y="525" width="250" height="94" fill="transparent" pointer-events="all"/>
        </g>
      </g>`;
  };

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="203" y="1129" width="164" height="164" rx="34" fill="${PURPLE}"/>
      <text x="285" y="1183" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">ARR</text>
      <text x="285" y="1223" text-anchor="middle" font-size="31" font-weight="400" fill="#fff">$2.28B</text>
      <text x="285" y="1263" text-anchor="middle" font-size="27" font-weight="400" fill="#fff">${zh ? '同比 +18%' : '+18% Y/Y'}</text>
      <text x="88" y="1337" text-anchor="start" font-size="30" font-weight="400" fill="${NOTE}">ARR = ${zh ? '年度经常性收入' : 'Annual Recurring Revenue'}</text>
      <text x="1334" y="1312" text-anchor="middle" font-size="43" font-weight="800" fill="${NOTE}">${zh ? '2026 财年第一季度' : 'Q1 FY26'}</text>
      <text x="1334" y="1352" text-anchor="middle" font-size="29" font-weight="400" fill="${NOTE}">${zh ? '截至 2025 年 10 月' : 'Ending Oct. 2025'}</text>
    </g>
    ${adjustmentCallouts(zh)}`;

  const labels = (zh) => {
    const text = zh ? {
      subscription: '订阅',
      professional: ['专业', '服务'],
      revenue: '收入',
      gross: '毛利润',
      cost: ['收入', '成本'],
      operating: '营业利润',
      expenses: ['运营', '费用'],
      net: '净利润',
      sm: '销售与营销',
      rnd: '研发',
      ga: '一般及行政',
      yoy14: '同比 +14%',
      yoy8: '同比 +8%',
      yoy13: '同比 +13%',
      margin87: '利润率 87%',
      pp1: '同比 +1 个百分点',
      margin7: '利润率 7%',
      pp3: '同比 +3 个百分点',
      margin9: '利润率 9%',
      pp4: '同比 +4 个百分点',
      rev43: '占收入 43%',
      pp0: '同比 +0 个百分点',
      rev28: '占收入 28%',
      down1: '同比 (1 个百分点)',
      rev9: '占收入 9%',
    } : {
      subscription: 'Subscription',
      professional: ['Professional', 'services'],
      revenue: 'Revenue',
      gross: 'Gross profit',
      cost: ['Cost of', 'revenue'],
      operating: 'Operating profit',
      expenses: ['Operating', 'expenses'],
      net: 'Net profit',
      sm: 'S&M',
      rnd: 'R&D',
      ga: 'G&A',
      yoy14: '+14% Y/Y',
      yoy8: '+8% Y/Y',
      yoy13: '+13% Y/Y',
      margin87: '87% margin',
      pp1: '+1pp Y/Y',
      margin7: '7% margin',
      pp3: '+3pp Y/Y',
      margin9: '9% margin',
      pp4: '+4pp Y/Y',
      rev43: '43% of revenue',
      pp0: '+0pp Y/Y',
      rev28: '28% of revenue',
      down1: '(1pp) Y/Y',
      rev9: '9% of revenue',
    };
    const value = () => line('$value', 31, { color: RED_LABEL });
    const note = (valueText) => line(valueText, 28, { color: NOTE });
    const costName = (valueText) => line(valueText, 31, { weight: 800, color: RED_LABEL });
    const output = {
      subscription: { blocks: [
        block(403, 451, [line('$value', 39), line(text.yoy14, 29, { color: NOTE })], { lineGap: 9 }),
        block(183, 705, [line(text.subscription, 40, { weight: 800 })]),
      ] },
      professional_services: { blocks: [
        block(401, 1002, [line('$value', 39), line(text.yoy8, 29, { color: NOTE })], { lineGap: 9 }),
        block(184, 1036, text.professional.map((item) => line(item, 40, { weight: 800 })), { lineGap: 9 }),
      ] },
      revenue: { blocks: [
        block(866, 531, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), line(text.yoy13, 29, { color: NOTE })], { lineGap: 9 }),
      ] },
      gross_profit: { blocks: [
        block(1346, 382, [
          line(text.gross, 40, { weight: 800, color: GREEN_LABEL }),
          line('$value', 39, { color: GREEN_LABEL }),
          line(text.margin87, 29, { color: NOTE }),
          line(text.pp1, 29, { color: NOTE }),
        ], { lineGap: 9 }),
      ] },
      cost_of_revenue: { blocks: [
        block(1333, 1142, [...text.cost.map((item) => line(item, 36, { weight: 800, color: RED_LABEL })), line('$value', 34, { color: RED_LABEL })], { lineGap: 10 }),
      ] },
      operating_profit: { blocks: [
        block(1835, 291, [
          line(text.operating, 40, { weight: 800, color: GREEN_LABEL }),
          line('$value', 39, { color: GREEN_LABEL }),
          line(text.margin7, 29, { color: NOTE }),
          line(text.pp3, 29, { color: NOTE }),
        ], { lineGap: 9 }),
      ] },
      operating_expenses: { blocks: [
        block(1830, 993, [...text.expenses.map((item) => line(item, 40, { weight: 800, color: RED_LABEL })), line('$value', 39, { color: RED_LABEL })], { lineGap: 9 }),
      ] },
      net_profit: { blocks: [
        block(2328, 329, [
          line(text.net, 40, { weight: 800, color: GREEN_LABEL }),
          line('$value', 39, { color: GREEN_LABEL }),
          line(text.margin9, 29, { color: NOTE }),
          line(text.pp4, 29, { color: NOTE }),
        ], { anchor: 'start', lineGap: 9 }),
      ] },
      sm: { blocks: [
        block(2426, 760, [costName(text.sm), value(), note(text.rev43), note(text.pp0)], { lineGap: 9 }),
      ] },
      rnd: { blocks: [
        block(TERMINAL_X, 1016, [costName(text.rnd), value(), note(text.rev28), note(text.down1)], { lineGap: 9 }),
      ] },
      ga: { blocks: [
        block(TERMINAL_X, 1228, [costName(text.ga), value(), note(text.rev9), note(text.pp0)], { lineGap: 9 }),
      ] },
      interest: { blocks: [] },
      tax: { blocks: [] },
    };
    for (const label of Object.values(output)) {
      for (const labelBlock of label.blocks) labelBlock.top -= 35;
    }
    return output;
  };

  const dataset = {
    key: 'nutanix-q1-fy26',
    name: 'Nutanix · Q1 FY26',
    company: 'Nutanix',
    meta: {
      company: 'Nutanix',
      title: 'Nutanix Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/nutanix-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2240,
      hidePeriodStamp: true,
      logoWidth: 590,
      logoHeight: 100,
      logoY: 291,
      logoViewBox: '0 0 590 100',
      logoSvg: nutanixLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: {
        mode: 'error',
        fullFaceIds: [
          'cost_of_revenue:left',
          'ga:left',
          'gross_profit:left',
          'gross_profit:right',
          'net_profit:left',
          'operating_expenses:left',
          'operating_expenses:right',
          'operating_profit:left',
          'operating_profit:right',
          'professional_services:right',
          'revenue:right',
          'rnd:left',
        ],
      },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: PURPLE_LINK,
        hub: PURPLE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 0.54,
      nodes: {
        subscription: { x: 362, y: 513, width: 73, height: 349 },
        professional_services: { x: 362, y: 1067, width: 73, height: 18 },
        revenue: { x: 830, y: 641, width: 73, height: 366 },
        gross_profit: { x: 1297, y: 528, width: 73, height: 317 },
        cost_of_revenue: { x: 1297, y: 1042, width: 73, height: 48 },
        operating_profit: { x: 1767, y: 431, width: 73, height: 28 },
        operating_expenses: { x: 1767, y: 643, width: 73, height: 291 },
        net_profit: { x: 2230, y: 344, width: 73, height: 36 },
        interest: { x: 2102, y: 424, width: 72, height: 9 },
        tax: { x: 2230, y: 568, width: 73, height: 3 },
        sm: { x: 2230, y: 710, width: 73, height: 157 },
        rnd: { x: 2230, y: 976, width: 73, height: 102 },
        ga: { x: 2230, y: 1211, width: 73, height: 35 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 637, valueText: '$637M', notes: ['+14% Y/Y'] },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: ['Professional', 'services'], value: 33, valueText: '$33M', notes: ['+8% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 671, valueText: '$671M', notes: ['+13% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 583, valueText: '$583M', notes: ['87% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 87, valueText: '($87M)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 49, valueText: '$49M', notes: ['7% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 534, valueText: '($534M)' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 62, valueText: '$62M', notes: ['9% margin', '+4pp Y/Y'] },
      { id: 'interest', col: 4, order: 1, type: 'profit', label: 'Interest', value: 16, valueText: '$16M', color: BG, labelColor: BG },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 3, valueText: '($3M)', color: BG, labelColor: BG },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 285, valueText: '($285M)', notes: ['43% of revenue', '+0pp Y/Y'] },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 187, valueText: '($187M)', notes: ['28% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 61, valueText: '($61M)', notes: ['9% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 637, sourceWidth: 346, targetWidth: 346, y0: 688, y1: 816, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 33, sourceWidth: 18, targetWidth: 17, y0: 1076, y1: 997, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 583, sourceWidth: 317, targetWidth: 317, y0: 799.5, y1: 686.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 87, sourceWidth: 49, targetWidth: 48, y0: 982.5, y1: 1066, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 49, sourceWidth: 26, targetWidth: 28, y0: 541, y1: 445, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 534, sourceWidth: 291, targetWidth: 291, y0: 699.5, y1: 788.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 49, sourceWidth: 25, targetWidth: 25, y0: 443.5, y1: 356.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'interest', target: 'net_profit', value: 16, sourceWidth: 7, targetWidth: 11, y0: 428.5, y1: 374.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 3, sourceWidth: 3, targetWidth: 3, y0: 457.5, y1: 569.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 285, sourceWidth: 156, targetWidth: 154, y0: 721, y1: 789, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 187, sourceWidth: 99, targetWidth: 102, y0: 848.5, y1: 1027, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 61, sourceWidth: 36, targetWidth: 35, y0: 916, y1: 1228.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['NUTANIX'],
      zh: {
        name: 'Nutanix · 2026 财年第一季度',
        meta: {
          title: 'Nutanix 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 10 月',
          titleSize: 114,
          titleTextLength: 1840,
        },
        annotationsSvg: annotations(true),
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +14%'] },
          professional_services: { label: '专业服务', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 87%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 +4 个百分点'] },
          interest: { label: '利息' },
          tax: { label: '税项' },
          sm: { label: '销售与营销', notes: ['占收入 43%', '同比 +0 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 28%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 9%', '同比 +0 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(dataset);
})();
