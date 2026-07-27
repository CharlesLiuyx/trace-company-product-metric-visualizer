/* Nutanix Q3 FY26 income statement ($M), measured from the processed
 * reference. The interest and tax labels are source-faithful interactive
 * guide annotations; all flow geometry is native SVG. */
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
  const TERMINAL_X = 2418;

  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap || 8, lines });

  const nutanixLogo = `
    <text x="295" y="78" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="105" font-weight="900" letter-spacing="-4" fill="#101010"
      textLength="572" lengthAdjust="spacingAndGlyphs">NUTANIX</text>`;

  const netAdjustmentCallouts = (zh) => {
    const interest = zh ? '利息' : 'Interest';
    return `
      <g font-family="Montserrat,Arial,sans-serif">
        <text x="2160" y="440" text-anchor="middle" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${interest}</text>
        <text x="2160" y="480" text-anchor="middle" font-size="30" fill="${GREEN_LABEL}">$11M</text>
        <g class="sankey-interactive-annotation" data-node="interest" data-link-numerator="interest" data-link-denominator="net_profit" data-link-anchor-x="2202" data-link-anchor-y="382">
          <path d="M2100 406H2177" fill="none" stroke="${GREEN}" stroke-width="3" stroke-linecap="butt"/>
          <path d="M2177 406C2194 406 2210 357 2227 357" fill="none" stroke="${GREEN_LINK}" stroke-width="3" stroke-linecap="butt"/>
          <rect x="2095" y="413" width="145" height="78" fill="transparent" pointer-events="all"/>
        </g>
      </g>`;
  };

  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="203" y="1129" width="164" height="164" rx="34" fill="${PURPLE}"/>
      <text x="285" y="1183" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">ARR</text>
      <text x="285" y="1223" text-anchor="middle" font-size="31" font-weight="400" fill="#fff">$2.4B</text>
      <text x="285" y="1263" text-anchor="middle" font-size="27" font-weight="400" fill="#fff">${zh ? '同比 +15%' : '+15% Y/Y'}</text>
      <text x="86" y="1337" text-anchor="start" font-size="30" font-weight="400" fill="${NOTE}">ARR = ${zh ? '年度经常性收入' : 'Annual Recurring Revenue'}</text>
      <text x="1334" y="1312" text-anchor="middle" font-size="43" font-weight="800" fill="${NOTE}">${zh ? '2026 财年第三季度' : 'Q3 FY26'}</text>
      <text x="1334" y="1352" text-anchor="middle" font-size="29" font-weight="400" fill="${NOTE}">${zh ? '截至 2026 年 4 月' : 'Ending Apr. 2026'}</text>
    </g>
    ${netAdjustmentCallouts(zh)}`;

  const labels = (zh) => {
    const text = zh ? {
      subscription: '订阅', professional: ['专业', '服务'], revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润', expenses: ['运营', '费用'], net: '净利润', tax: '税项', sm: '销售与营销', rnd: '研发', ga: '一般及行政',
      yoy9: '同比 +9%', yoy31: '同比 +31%', yoy10: '同比 +10%', margin87: '利润率 87%', pp0: '同比 (0 个百分点)', margin10: '利润率 10%', pp2: '同比 +2 个百分点', margin10net: '利润率 10%', sm40: '占收入 40%', rnd28: '占收入 28%', ga9: '占收入 9%', up1: '同比 (1 个百分点)',
    } : {
      subscription: 'Subscription', professional: ['Professional', 'services'], revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', sm: 'S&M', rnd: 'R&D', ga: 'G&A',
      yoy9: '+9% Y/Y', yoy31: '+31% Y/Y', yoy10: '+10% Y/Y', margin87: '87% margin', pp0: '(0pp) Y/Y', margin10: '10% margin', pp2: '+2pp Y/Y', margin10net: '10% margin', sm40: '40% of revenue', rnd28: '28% of revenue', ga9: '9% of revenue', up1: '(1pp) Y/Y',
    };
    const value = () => line('$value', 31, { color: RED_LABEL });
    const note = (valueText) => line(valueText, 28, { color: NOTE });
    const costName = (valueText) => line(valueText, 31, { weight: 800, color: RED_LABEL });
    const output = {
      subscription: { blocks: [block(399, 475, [line('$value', 39), line(text.yoy9, 29, { color: NOTE })], { lineGap: 9 }), block(184, 702, [line(text.subscription, 40, { weight: 800 })])] },
      professional_services: { blocks: [block(399, 1003, [line('$value', 39), line(text.yoy31, 29, { color: NOTE })], { lineGap: 9 }), block(182, 1031, text.professional.map((item) => line(item, 40, { weight: 800 })), { lineGap: 9 })] },
      revenue: { blocks: [block(865, 516, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), line(text.yoy10, 29, { color: NOTE })], { lineGap: 9 })] },
      gross_profit: { blocks: [block(1333, 382, [line(text.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(text.margin87, 29, { color: NOTE }), line(text.pp0, 29, { color: NOTE })], { lineGap: 9 })] },
      cost_of_revenue: { blocks: [block(1333, 1142, [...text.cost.map((item) => line(item, 36, { weight: 800, color: RED_LABEL })), line('$value', 34, { color: RED_LABEL })], { lineGap: 10 })] },
      operating_profit: { blocks: [block(1799, 280, [line(text.operating, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(text.margin10, 29, { color: NOTE }), line(text.pp2, 29, { color: NOTE })], { lineGap: 9 })] },
      operating_expenses: { blocks: [block(1799, 980, [...text.expenses.map((item) => line(item, 40, { weight: 800, color: RED_LABEL })), line('$value', 39, { color: RED_LABEL })], { lineGap: 9 })] },
      net_profit: { blocks: [block(2329, 329, [line(text.net, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(text.margin10net, 29, { color: NOTE }), line(text.pp0, 29, { color: NOTE })], { anchor: 'start', lineGap: 9 })] },
      sm: { blocks: [block(TERMINAL_X, 748, [costName(text.sm), value(), note(text.sm40), note(text.pp0)], { lineGap: 9 })] },
      rnd: { blocks: [block(TERMINAL_X, 1004, [costName(text.rnd), value(), note(text.rnd28), note(text.up1)], { lineGap: 9 })] },
      ga: { blocks: [block(TERMINAL_X, 1218, [costName(text.ga), value(), note(text.ga9), note(text.up1)], { lineGap: 9 })] },
      tax: { blocks: [block(TERMINAL_X, 585, [costName(text.tax), value()], { lineGap: 9 })] }, interest: { blocks: [] },
    };
    for (const label of Object.values(output)) for (const labelBlock of label.blocks) labelBlock.top -= 35;
    return output;
  };

  const dataset = {
    key: 'nutanix-q3-fy26', name: 'Nutanix · Q3 FY26', company: 'Nutanix',
    meta: {
      company: 'Nutanix', title: 'Nutanix Q3 FY26 Income Statement', period: 'Q3 FY26', periodNote: 'Ending Apr. 2026', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/nutanix-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2240, hidePeriodStamp: true,
      logoWidth: 590, logoHeight: 100, logoY: 291, logoViewBox: '0 0 590 100', logoSvg: nutanixLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: PURPLE, label: PURPLE }, hub: { node: PURPLE, label: PURPLE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 0.5,
      nodes: {
        subscription: { x: 362, y: 535, width: 73, height: 312 }, professional_services: { x: 362, y: 1056, width: 73, height: 18 }, revenue: { x: 830, y: 638, width: 73, height: 331 },
        gross_profit: { x: 1297, y: 532, width: 73, height: 286 }, cost_of_revenue: { x: 1297, y: 1054, width: 73, height: 43 }, operating_profit: { x: 1764, y: 428, width: 73, height: 33 }, operating_expenses: { x: 1764, y: 682, width: 73, height: 254 },
        net_profit: { x: 2230, y: 323, width: 73, height: 36 }, tax: { x: 2230, y: 583, width: 73, height: 4 }, sm: { x: 2230, y: 763, width: 73, height: 133 }, rnd: { x: 2230, y: 1019, width: 73, height: 93 }, ga: { x: 2230, y: 1221, width: 73, height: 29 },
        interest: { x: 0, y: 0, width: 0, height: 0 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 665, valueText: '$665M', notes: ['+9% Y/Y'] },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: ['Professional', 'services'], value: 38, valueText: '$38M', notes: ['+31% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 703, valueText: '$703M', notes: ['+10% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 611, valueText: '$611M', notes: ['87% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 92, valueText: '($92M)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 71, valueText: '$71M', notes: ['10% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 540, valueText: '($540M)' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 72, valueText: '$72M', notes: ['10% margin', '+0pp Y/Y'] },
      { id: 'interest', col: 4, order: 1, type: 'profit', label: 'Interest', value: 11, color: BG, labelColor: BG },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 9, valueText: '($9M)' },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 284, valueText: '($284M)', notes: ['40% of revenue', '(0pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 196, valueText: '($196M)', notes: ['28% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 61, valueText: '($61M)', notes: ['9% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 665, sourceWidth: 312, targetWidth: 315, y0: 691, y1: 795.5, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 38, sourceWidth: 18, targetWidth: 18, y0: 1065, y1: 960, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 611, sourceWidth: 286, targetWidth: 286, y0: 781, y1: 675, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 92, sourceWidth: 45, targetWidth: 43, y0: 946.5, y1: 1075, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 71, sourceWidth: 33, targetWidth: 33, y0: 548.5, y1: 444, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 540, sourceWidth: 254, targetWidth: 254, y0: 691.5, y1: 809, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 71, sourceWidth: 33, targetWidth: 36, y0: 444, y1: 341, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 9, sourceWidth: 3, targetWidth: 3, y0: 459, y1: 584.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 284, sourceWidth: 133, targetWidth: 133, y0: 748.5, y1: 829.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 196, sourceWidth: 93, targetWidth: 93, y0: 861.5, y1: 1065.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 61, sourceWidth: 29, targetWidth: 29, y0: 921.5, y1: 1235.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['NUTANIX'],
      zh: {
        name: 'Nutanix · 2026 财年第三季度',
        meta: { title: 'Nutanix 2026 财年第三季度利润表', period: '2026 财年第三季度', periodNote: '截至 2026 年 4 月', titleSize: 114, titleTextLength: 1840 },
        annotationsSvg: annotations(true),
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +9%'] }, professional_services: { label: '专业服务', notes: ['同比 +31%'] }, revenue: { label: '收入', notes: ['同比 +10%'] }, gross_profit: { label: '毛利润', notes: ['利润率 87%', '同比 (0 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 +2 个百分点'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 10%', '同比 +0 个百分点'] }, interest: { label: '利息' }, tax: { label: '税项' }, sm: { label: '销售与营销', notes: ['占收入 40%', '同比 (0 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 28%', '同比 (1 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 9%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(dataset);
})();
