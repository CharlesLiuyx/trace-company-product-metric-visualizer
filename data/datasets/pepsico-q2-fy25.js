/* PepsiCo Q2 FY25 fixed-layout income statement. Geometry and label positions
 * are measured from input/processed/pepsico-q2-fy25.png. The validated
 * PepsiCo runtime raster annotations are reused from the company asset set. */
(function () {
  const NAVY = '#2a4790';
  const NAVY_LINK = '#98a5c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2514;

  const line = (text, size, options = {}) => ({ text, size, weight: 400, ...options });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: 'middle', lineGap: 12, lines, ...options });

  function otherIncomeGuide(zh = false) {
    const family = zh ? 'Noto Sans SC,Noto Sans,Arial,sans-serif' : 'Noto Sans,Arial,sans-serif';
    return `<g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2282"
      data-link-anchor-y="408">
      <path d="M2216 443H2282C2302 443 2298 373 2325 373"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <rect x="2198" y="438" width="126" height="102" fill="transparent"/>
      <text x="2255" y="493" text-anchor="middle" font-family="${family}"
        font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2255" y="534" text-anchor="middle" font-family="${family}"
        font-size="31" font-weight="400" fill="${GREEN_LABEL}">$42M</text>
    </g>`;
  }

  function labels(zh = false) {
    const t = zh ? {
      foods: '食品', beverages: ['百事', '饮料'], northAmerica: '北美', ib: ['国际饮料', '特许经营'],
      latam: '拉丁美洲', emea: ['欧洲中东', '非洲'], apac: '亚太', revenue: '收入',
      gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润',
      operatingExpenses: ['运营费用'], net: '净利润', tax: '税费', interest: '利息',
      sga: ['销售、一般及', '管理费用'], impairment: '减值',
      yoy: (value) => `同比 ${value}`, margin: (value) => `利润率 ${value}`,
      pp: (value) => `同比 ${value.replace('pp', '')} 个百分点`,
    } : {
      foods: 'Foods', beverages: ['PepsiCo', 'Beverages'], northAmerica: 'North America', ib: ['IB franchise'],
      latam: 'LATAM', emea: ['EMEA'], apac: 'APAC', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit',
      operatingExpenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', interest: 'Interest',
      sga: ['SG&A'], impairment: 'Impairment',
      yoy: (value) => `${value} Y/Y`, margin: (value) => `${value} margin`, pp: (value) => `${value} Y/Y`,
    };

    const valueAndYoy = (x, top, yoy) => block(x, top, [
      line('$value', 40), line(t.yoy(yoy), 29, { color: NOTE }),
    ], { lineGap: 13 });
    const nameBlock = (x, top, names, size = 40, lineGap = 8) => block(
      x, top, (Array.isArray(names) ? names : [names]).map((name) => line(name, size, { weight: 800 })), { lineGap }
    );
    const profitBlock = (x, top, name, margin, pp) => block(x, top, [
      line(name, 40, { weight: 800, color: GREEN_LABEL }),
      line('$value', 40, { color: GREEN_LABEL }),
      line(t.margin(margin), 29, { color: NOTE }),
      line(t.pp(pp), 29, { color: NOTE }),
    ]);
    const terminalCost = (top, names, options = {}) => block(RIGHT_LABEL_X, top, [
      ...(Array.isArray(names) ? names : [names]).map((name) => line(name, options.nameSize || 34, { weight: 800, color: RED_LABEL })),
      line('$value', options.valueSize || 34, { color: RED_LABEL }),
    ], { lineGap: options.lineGap || 8 });

    return {
      foods: { blocks: [valueAndYoy(491, 337, '+1%'), nameBlock(365, 463, t.foods)] },
      pepsico_beverages: { blocks: [valueAndYoy(491, 629, '(0%)'), nameBlock(316, 729, t.beverages)] },
      north_america: { blocks: [block(866, 390, [
        line(t.northAmerica, 40, { weight: 800 }), line('$value', 40), line(t.yoy('+0%'), 29, { color: NOTE }),
      ])] },
      ib_franchise: { blocks: [valueAndYoy(865, 810, '+3%'), nameBlock(zh ? 699 : 693, zh ? 879 : 892, t.ib, zh ? 34 : 40)] },
      latam: { blocks: [valueAndYoy(865, 954, '(7%)'), nameBlock(732, 1048, t.latam, zh ? 36 : 40)] },
      emea: { blocks: [valueAndYoy(865, 1117, '+8%'), nameBlock(zh ? 730 : 735, zh ? 1214 : 1227, t.emea, zh ? 32 : 40, 6)] },
      apac: { blocks: [valueAndYoy(864, 1300, '+1%'), nameBlock(733, 1383, t.apac)] },
      revenue: { blocks: [block(1240, 515, [
        line(t.revenue, 40, { weight: 800 }), line('$value', 40), line(t.yoy('+1%'), 29, { color: NOTE }),
      ])] },
      gross_profit: { blocks: [profitBlock(1613, 355, t.gross, '55%', '+1pp')] },
      cost_of_revenue: { blocks: [block(1613, 1106, [
        ...t.cost.map((name) => line(name, 40, { weight: 800, color: RED_LABEL })),
        line('$value', 40, { color: RED_LABEL }),
      ])] },
      operating_profit: { blocks: [profitBlock(1987, 254, t.operating, '8%', '(10pp)')] },
      operating_expenses: { blocks: [block(1987, zh ? 874 : 850, [
        ...t.operatingExpenses.map((name) => line(name, 36, { weight: 800, color: RED_LABEL })),
        line('$value', 36, { color: RED_LABEL }),
      ])] },
      net_profit: { blocks: [profitBlock(RIGHT_LABEL_X, 293, t.net, '6%', '(8pp)')] },
      other_income: { blocks: [] },
      tax: { blocks: [terminalCost(538, t.tax)] },
      interest: { blocks: [terminalCost(646, t.interest)] },
      sga: { blocks: [terminalCost(zh ? 838 : 859, t.sga, zh ? { nameSize: 29, valueSize: 34 } : {})] },
      impairment: { blocks: [terminalCost(1147, t.impairment)] },
    };
  }

  const data = {
    key: 'pepsico-q2-fy25',
    name: 'PepsiCo · Q2 FY25',
    company: 'PepsiCo',
    meta: {
      company: 'PepsiCo',
      title: 'PepsiCo Q2 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 207, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: otherIncomeGuide(false),
    rasterAnnotations: [
      { key: 'pepsico-company-logo', href: 'data/assets/raster-annotations/pepsico/company-logo.png', x: 1000, y: 267, width: 475, height: 76 },
      { key: 'pepsico-foods-lays-quaker', href: 'data/assets/raster-annotations/pepsico/foods-lays-quaker.png', x: 27, y: 426, width: 244, height: 117 },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 51, y: 703, width: 136, height: 137 },
      { key: 'pepsico-ib-sodastream-q2-fy26', href: 'data/assets/raster-annotations/pepsico/ib-sodastream-q2-fy26.png', x: 486, y: 859, width: 78, height: 168 },
      { key: 'pepsico-revenue-globe', href: 'data/assets/raster-annotations/pepsico/revenue-globe.png', x: 1176, y: 356, width: 116, height: 117 },
      { key: 'pepsico-globe-north-america', href: 'data/assets/raster-annotations/pepsico/globe-north-america.png', x: 806, y: 302, width: 98, height: 98 },
      { key: 'pepsico-globe-latam', href: 'data/assets/raster-annotations/pepsico/globe-latam.png', x: 556, y: 1030, width: 92, height: 92 },
      { key: 'pepsico-globe-emea', href: 'data/assets/raster-annotations/pepsico/globe-emea.png', x: 481, y: 1174, width: 191, height: 99 },
      { key: 'pepsico-globe-apac', href: 'data/assets/raster-annotations/pepsico/globe-apac.png', x: 572, y: 1318, width: 91, height: 91 },
    ],
    layout: {
      scale: 15,
      routes: { other_income: { x: 2216, y: 443, width: 0, height: 1 } },
      nodes: {
        foods: { x: 457, y: 437, width: 71, height: 95 },
        pepsico_beverages: { x: 457, y: 724, width: 71, height: 100 },
        north_america: { x: 828, y: 542, width: 70, height: 197 },
        ib_franchise: { x: 831, y: 908, width: 70, height: 18 },
        latam: { x: 831, y: 1053, width: 70, height: 36 },
        emea: { x: 831, y: 1216, width: 70, height: 66 },
        apac: { x: 831, y: 1399, width: 70, height: 13 },
        revenue: { x: 1205, y: 662, width: 70, height: 338 },
        gross_profit: { x: 1578, y: 546, width: 71, height: 183 },
        cost_of_revenue: { x: 1578, y: 941, width: 71, height: 152 },
        operating_profit: { x: 1952, y: 445, width: 71, height: 25 },
        operating_expenses: { x: 1952, y: 679, width: 71, height: 157 },
        net_profit: { x: 2325, y: 356, width: 71, height: 17 },
        tax: { x: 2325, y: 582, width: 71, height: 3 },
        interest: { x: 2325, y: 682, width: 71, height: 2 },
        sga: { x: 2325, y: 835, width: 71, height: 129 },
        impairment: { x: 2325, y: 1174, width: 71, height: 26 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.042, valueText: '$42M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'foods', col: 0, order: 0, type: 'source', label: 'Foods', value: 6.5, notes: ['+1% Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 1, type: 'source', label: ['PepsiCo', 'Beverages'], value: 6.8, notes: ['(0%) Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 13.3, notes: ['+0% Y/Y'] },
      { id: 'ib_franchise', col: 1, order: 1, type: 'source', label: 'IB franchise', value: 1.4, notes: ['+3% Y/Y'] },
      { id: 'latam', col: 1, order: 2, type: 'source', label: 'LATAM', value: 2.5, notes: ['(7%) Y/Y'] },
      { id: 'emea', col: 1, order: 3, type: 'source', label: 'EMEA', value: 4.5, notes: ['+8% Y/Y'] },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.0, valueText: '$1.0B', notes: ['+1% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 22.7, notes: ['+1% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 12.4, notes: ['55% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 10.3 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.8, notes: ['8% margin', '(10pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 10.6 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.3, notes: ['6% margin', '(8pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.3 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 8.8 },
      { id: 'impairment', col: 5, order: 4, type: 'cost', label: 'Impairment', value: 1.9 },
    ],
    links: [
      { source: 'foods', target: 'north_america', value: 6.5, sourceWidth: 95, targetWidth: 96, sourceOrder: 0, targetOrder: 0 },
      { source: 'pepsico_beverages', target: 'north_america', value: 6.8, sourceWidth: 100, targetWidth: 101, sourceOrder: 0, targetOrder: 1 },
      { source: 'north_america', target: 'revenue', value: 13.3, sourceWidth: 197, targetWidth: 198, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'ib_franchise', target: 'revenue', value: 1.4, sourceWidth: 18, targetWidth: 21, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'latam', target: 'revenue', value: 2.5, sourceWidth: 36, targetWidth: 37, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'emea', target: 'revenue', value: 4.5, sourceWidth: 66, targetWidth: 67, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'apac', target: 'revenue', value: 1.0, sourceWidth: 13, targetWidth: 15, sourceOrder: 0, targetOrder: 4, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.4, sourceWidth: 184, targetWidth: 183, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 10.3, sourceWidth: 154, targetWidth: 152, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.8, sourceWidth: 25, targetWidth: 25, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 10.6, sourceWidth: 158, targetWidth: 157, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 17, targetWidth: 16, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 4, targetWidth: 3, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 4, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.042, sourceWidth: 1, targetWidth: 1, y0: 443, y1: 372.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 8.8, sourceWidth: 132, targetWidth: 129, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'impairment', value: 1.9, sourceWidth: 25, targetWidth: 26, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '百事公司 · 2025 财年第二季度',
        meta: { title: '百事公司 2025 财年第二季度利润表', period: '', periodNote: '', titleTextLength: 2000 },
        annotationsSvg: otherIncomeGuide(true),
        nonNodeMetrics: { other_income: { label: '其他' } },
        nodes: {
          foods: { label: '食品', notes: ['同比 +1%'] },
          pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 (0%)'] },
          north_america: { label: '北美', notes: ['同比 +0%'] },
          ib_franchise: { label: '国际饮料特许经营', notes: ['同比 +3%'] },
          latam: { label: '拉丁美洲', notes: ['同比 (7%)'] },
          emea: { label: '欧洲中东非洲', notes: ['同比 +8%'] },
          apac: { label: '亚太', notes: ['同比 +1%'] },
          revenue: { label: '收入', notes: ['同比 +1%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 (10 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (8 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售、一般及管理费用' },
          impairment: { label: '减值' },
        },
        layout: { labels: labels(true) },
      },
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(data);
})();
