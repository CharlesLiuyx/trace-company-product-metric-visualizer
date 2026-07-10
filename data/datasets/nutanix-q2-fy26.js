/* Nutanix Q2 FY26 income statement ($M), measured from the processed
 * reference. All financial flow geometry is native SVG; the two net-income
 * adjustment callouts are source-faithful vector guides, not image overlays. */
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

  const netAdjustmentCallouts = (zh) => {
    const tax = zh ? '税项' : 'Tax';
    const interest = zh ? '利息' : 'Interest';
    return `
      <g font-family="Montserrat,Arial,sans-serif">
        <text x="2160" y="262" text-anchor="middle" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${tax}</text>
        <text x="2160" y="302" text-anchor="middle" font-size="30" fill="${GREEN_LABEL}">$6M</text>
        <g class="sankey-interactive-annotation" data-node="tax" data-link-numerator="tax" data-link-denominator="net_profit" data-link-anchor-x="2166" data-link-anchor-y="323">
          <path d="M2100 323H2168C2185 323 2210 359 2227 359" fill="none" stroke="${GREEN}" stroke-width="3" stroke-linecap="butt"/>
          <rect x="2095" y="238" width="145" height="94" fill="transparent" pointer-events="all"/>
        </g>
        <text x="2160" y="510" text-anchor="middle" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${interest}</text>
        <text x="2160" y="550" text-anchor="middle" font-size="30" fill="${GREEN_LABEL}">$13M</text>
        <g class="sankey-interactive-annotation" data-node="interest" data-link-numerator="interest" data-link-denominator="net_profit" data-link-anchor-x="2168" data-link-anchor-y="461">
          <path d="M2100 461H2168C2185 461 2210 410 2227 410" fill="none" stroke="${GREEN}" stroke-width="3" stroke-linecap="butt"/>
          <rect x="2095" y="470" width="145" height="94" fill="transparent" pointer-events="all"/>
        </g>
      </g>`;
  };

  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="203" y="1130" width="164" height="164" rx="34" fill="${PURPLE}"/>
      <text x="285" y="1184" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">ARR</text>
      <text x="285" y="1224" text-anchor="middle" font-size="31" font-weight="400" fill="#fff">$2.36B</text>
      <text x="285" y="1264" text-anchor="middle" font-size="27" font-weight="400" fill="#fff">${zh ? '同比 +16%' : '+16% Y/Y'}</text>
      <text x="86" y="1337" text-anchor="start" font-size="30" font-weight="400" fill="${NOTE}">ARR = ${zh ? '年度经常性收入' : 'Annual Recurring Revenue'}</text>
      <text x="1334" y="1312" text-anchor="middle" font-size="43" font-weight="800" fill="${NOTE}">${zh ? '2026 财年第二季度' : 'Q2 FY26'}</text>
      <text x="1334" y="1352" text-anchor="middle" font-size="29" font-weight="400" fill="${NOTE}">${zh ? '截至 2026 年 1 月' : 'Ending Jan. 2026'}</text>
    </g>
    ${netAdjustmentCallouts(zh)}`;

  const labels = (zh) => {
    const text = zh ? {
      subscription: '订阅', professional: ['专业', '服务'], revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润', expenses: ['运营', '费用'], net: '净利润', sm: '销售与营销', rnd: '研发', ga: '一般及行政',
      yoy11: '同比 +11%', yoy15: '同比 +15%', yoy10: '同比 +10%', margin87: '利润率 87%', pp0: '同比 +0 个百分点', margin12: '利润率 12%', pp2: '同比 +2 个百分点', margin14: '利润率 14%', pp6: '同比 +6 个百分点', rev38: '占收入 38%', down2: '同比 (2 个百分点)', rev28: '占收入 28%', rev9: '占收入 9%',
    } : {
      subscription: 'Subscription', professional: ['Professional', 'services'], revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'], net: 'Net profit', sm: 'S&M', rnd: 'R&D', ga: 'G&A',
      yoy11: '+11% Y/Y', yoy15: '+15% Y/Y', yoy10: '+10% Y/Y', margin87: '87% margin', pp0: '+0pp Y/Y', margin12: '12% margin', pp2: '+2pp Y/Y', margin14: '14% margin', pp6: '+6pp Y/Y', rev38: '38% of revenue', down2: '(2pp) Y/Y', rev28: '28% of revenue', rev9: '9% of revenue',
    };
    const value = () => line('$value', 31, { color: RED_LABEL });
    const note = (valueText) => line(valueText, 28, { color: NOTE });
    const costName = (valueText) => line(valueText, 31, { weight: 800, color: RED_LABEL });
    const output = {
      subscription: { blocks: [
        block(395, 458, [line('$value', 39), line(text.yoy11, 29, { color: NOTE })], { lineGap: 9 }),
        block(182, 705, [line(text.subscription, 40, { weight: 800 })], { lineGap: 8 }),
      ] },
      professional_services: { blocks: [
        block(395, 998, [line('$value', 39), line(text.yoy15, 29, { color: NOTE })], { lineGap: 9 }),
        block(180, 1055, text.professional.map((item) => line(item, 40, { weight: 800 })), { lineGap: 9 }),
      ] },
      revenue: { blocks: [block(862, 513, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), line(text.yoy10, 29, { color: NOTE })], { lineGap: 9 })] },
      gross_profit: { blocks: [block(1330, 383, [line(text.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(text.margin87, 29, { color: NOTE }), line(text.pp0, 29, { color: NOTE })], { lineGap: 9 })] },
      cost_of_revenue: { blocks: [block(1330, 1129, [...text.cost.map((item) => line(item, 36, { weight: 800, color: RED_LABEL })), line('$value', 34, { color: RED_LABEL })], { lineGap: 10 })] },
      operating_profit: { blocks: [block(1796, 284, [line(text.operating, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(text.margin12, 29, { color: NOTE }), line(text.pp2, 29, { color: NOTE })], { lineGap: 9 })] },
      operating_expenses: { blocks: [block(1796, 993, [...text.expenses.map((item) => line(item, 40, { weight: 800, color: RED_LABEL })), line('$value', 39, { color: RED_LABEL })], { lineGap: 9 })] },
      net_profit: { blocks: [block(2326, 361, [line(text.net, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(text.margin14, 29, { color: NOTE }), line(text.pp6, 29, { color: NOTE })], { anchor: 'start', lineGap: 9 })] },
      sm: { blocks: [block(TERMINAL_X, 748, [costName(text.sm), value(), note(text.rev38), note(text.down2)], { lineGap: 9 })] },
      rnd: { blocks: [block(TERMINAL_X, 1004, [costName(text.rnd), value(), note(text.rev28), note(text.pp0)], { lineGap: 9 })] },
      ga: { blocks: [block(TERMINAL_X, 1218, [costName(text.ga), value(), note(text.rev9), note(text.pp0)], { lineGap: 9 })] },
      tax: { blocks: [] },
      interest: { blocks: [] },
    };
    // Fixed labels are specified by block-top rather than SVG baselines.
    // The source's measured text baselines therefore require this shared
    // correction before the first label-layout audit.
    for (const label of Object.values(output)) {
      for (const labelBlock of label.blocks) labelBlock.top -= 35;
    }
    return output;
  };

  const dataset = {
    key: 'nutanix-q2-fy26',
    name: 'Nutanix · Q2 FY26',
    company: 'Nutanix',
    meta: {
      company: 'Nutanix',
      title: 'Nutanix Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/nutanix-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2240,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 0.5,
      nodes: {
        subscription: { x: 358, y: 520, width: 73, height: 345 },
        professional_services: { x: 358, y: 1059, width: 73, height: 16 },
        revenue: { x: 826, y: 624, width: 73, height: 362 },
        gross_profit: { x: 1293, y: 532, width: 73, height: 316 },
        cost_of_revenue: { x: 1293, y: 1037, width: 73, height: 46 },
        operating_profit: { x: 1760, y: 433, width: 73, height: 42 },
        operating_expenses: { x: 1760, y: 664, width: 73, height: 274 },
        net_profit: { x: 2227, y: 359, width: 73, height: 51 },
        sm: { x: 2227, y: 719, width: 73, height: 139 },
        rnd: { x: 2227, y: 975, width: 73, height: 101 },
        ga: { x: 2227, y: 1210, width: 73, height: 34 },
        // The reference uses label-and-guide callouts rather than visible
        // bars for these two net-income adjustments.
        tax: { x: 0, y: 0, width: 0, height: 0 },
        interest: { x: 0, y: 0, width: 0, height: 0 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 690.531, valueText: '$690M', notes: ['+11% Y/Y'] },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: ['Professional', 'services'], value: 32.294, valueText: '$32M', notes: ['+15% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 722.825, valueText: '$723M', notes: ['+10% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 631.552, valueText: '$632M', notes: ['87% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 91.273, valueText: '($91M)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 84.137, valueText: '$84M', notes: ['12% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 547.415, valueText: '($547M)' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 103.022, valueText: '$103M', notes: ['14% margin', '+6pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'profit', label: 'Tax', value: -5.517, color: BG, labelColor: BG },
      { id: 'interest', col: 4, order: 2, type: 'profit', label: 'Interest', value: 13.368, color: BG, labelColor: BG },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 277.543, valueText: '($278M)', notes: ['38% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 202.259, valueText: '($202M)', notes: ['28% of revenue', '+0pp Y/Y'] },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 67.613, valueText: '($68M)', notes: ['9% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 690.531, sourceWidth: 345, targetWidth: 345, y0: 692.5, y1: 796.5, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 32.294, sourceWidth: 16, targetWidth: 16, y0: 1067, y1: 978, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 631.552, sourceWidth: 316, targetWidth: 316, y0: 782, y1: 690, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 91.273, sourceWidth: 46, targetWidth: 46, y0: 963, y1: 1060, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 84.137, sourceWidth: 42, targetWidth: 42, y0: 553, y1: 454, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 547.415, sourceWidth: 274, targetWidth: 274, y0: 711, y1: 801, sourceOrder: 1, targetOrder: 0 },
      // The band expands at its terminal face to include the separately
      // called-out $13M other income and $6M tax benefit.
      { source: 'operating_profit', target: 'net_profit', value: 84.137, sourceWidth: 42, targetWidth: 51, y0: 454, y1: 384.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 277.543, sourceWidth: 139, targetWidth: 139, y0: 733.5, y1: 788.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 202.259, sourceWidth: 101, targetWidth: 101, y0: 853.5, y1: 1025.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 67.613, sourceWidth: 34, targetWidth: 34, y0: 921, y1: 1227, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['NUTANIX'],
      zh: {
        name: 'Nutanix · 2026 财年第二季度',
        meta: {
          title: 'Nutanix 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 1 月',
          titleSize: 114,
          titleTextLength: 1840,
        },
        annotationsSvg: annotations(true),
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +11%'] },
          professional_services: { label: '专业服务', notes: ['同比 +15%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 87%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 14%', '同比 +6 个百分点'] },
          tax: { label: '税项' },
          interest: { label: '利息' },
          sm: { label: '销售与营销', notes: ['占收入 38%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 28%', '同比 +0 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 9%', '同比 +0 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(dataset);
})();
