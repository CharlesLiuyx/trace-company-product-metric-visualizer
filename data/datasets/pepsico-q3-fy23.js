/* PepsiCo Q3 FY23 fixed-layout income statement. Geometry, label groups,
 * short faces, and link endpoint widths are measured from the Build Source.
 * Existing validated PepsiCo raster annotations are reused. */
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
  const RIGHT_LABEL_X = 2515;

  function otherIncomeAnnotation(zh) {
    return `
      <g class="sankey-interactive-annotation"
        data-node="other_income"
        data-link-numerator="other_income"
        data-link-denominator="net_profit"
        data-link-anchor-x="2220"
        data-link-anchor-y="496"
        font-family="Noto Sans,Arial,sans-serif">
        <path d="M2178 518H2256C2282 518 2271 438 2293 438"
          fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
        <rect x="2152" y="523" width="126" height="98" fill="#fff" fill-opacity="0"/>
        <text x="2214" y="570" text-anchor="middle" font-size="31"
          font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他收入' : 'Other'}</text>
        <text x="2214" y="610" text-anchor="middle" font-size="31"
          font-weight="400" fill="${GREEN_LABEL}">$0.1B</text>
      </g>`;
  }

  function measuredLabels(zh) {
    const text = zh ? {
      frito: '菲多利', quaker: ['桂格', '食品'], beverages: ['百事', '饮料'], northAmerica: '北美',
      latam: '拉丁美洲', europe: '欧洲', amesa: '非洲、中东及南亚', apac: '亚太', revenue: '收入',
      gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润', expenses: ['运营', '费用'],
      net: '净利润', tax: '税费', interest: '利息', sga: '销售、一般及管理费用', other: '其他',
      yoy: (value) => `同比 ${value}`, margin: (value) => `利润率 ${value}`,
      pp: (value) => `同比 ${value.replace('pp', '')} 个百分点`, share: (value) => `占收入 ${value}`,
    } : {
      frito: 'Frito-Lay', quaker: ['Quaker', 'Foods'], beverages: ['PepsiCo', 'Beverages'],
      northAmerica: 'North America', latam: 'LATAM', europe: 'Europe',
      amesa: 'Africa, Middle East & South Asia', apac: 'APAC', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      net: 'Net profit', tax: 'Tax', interest: 'Interest', sga: 'SG&A', other: 'Other',
      yoy: (value) => `${value} Y/Y`, margin: (value) => `${value} margin`,
      pp: (value) => `${value} Y/Y`, share: (value) => `${value} of revenue`,
    };
    const valueAndYoy = (x, top, yoy) => ({
      x, top, anchor: 'middle', lineGap: 13,
      lines: [{ text: '$value', size: 40, weight: 400 }, { text: text.yoy(yoy), size: 29, weight: 400, color: NOTE }],
    });
    const nameBlock = (x, top, names, size = 40, lineGap = 8, semanticRole = '') => ({
      x, top, anchor: 'middle', lineGap, ...(semanticRole ? { semanticRole } : {}),
      lines: (Array.isArray(names) ? names : [names]).map((name) => ({ text: name, size, weight: 800 })),
    });
    const profitBlock = (x, top, name, margin, pp) => ({
      x, top, anchor: 'middle', lineGap: 12,
      lines: [
        { text: name, size: 40, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
        { text: text.margin(margin), size: 29, weight: 400, color: NOTE },
        { text: text.pp(pp), size: 29, weight: 400, color: NOTE },
      ],
    });

    return {
      frito_lay: { blocks: [valueAndYoy(461, 265, '+7%'), nameBlock(308, 386, text.frito, 40, 8, 'reference-offset-side-label')] },
      quaker_foods: { blocks: [valueAndYoy(461, 491, '+5%'), nameBlock(303.3, 560, text.quaker, 40, 8, 'reference-offset-side-label')] },
      pepsico_beverages: { blocks: [valueAndYoy(461, 630, '+8%'), nameBlock(298, 730, text.beverages, 40, 8, 'reference-offset-side-label')] },
      north_america: { blocks: [{ x: 831, top: 370, anchor: 'middle', lineGap: 12, lines: [
        { text: text.northAmerica, size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 },
        { text: text.yoy('+7%'), size: 29, weight: 400, color: NOTE },
      ] }] },
      latam: { blocks: [valueAndYoy(831, 764, '+21%'), nameBlock(675, 878, text.latam, zh ? 34 : 40, 8, 'reference-offset-side-label')] },
      europe: { blocks: [valueAndYoy(831, 920, '+2%'), nameBlock(678.8, 1011, text.europe, 40, 8, 'reference-offset-side-label')] },
      amesa: { blocks: [valueAndYoy(831, 1079, '(6%)'), nameBlock(428.5, 1143, text.amesa, zh ? 32 : 40, 8, 'reference-offset-side-label')] },
      apac: { blocks: [valueAndYoy(831, 1209, '+4%'), nameBlock(709, 1271, text.apac, 40, 8, 'reference-offset-side-label')] },
      revenue: { blocks: [{ x: 1205, top: 567, anchor: 'middle', lineGap: 12, lines: [
        { text: text.revenue, size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 },
        { text: text.yoy('+7%'), size: 29, weight: 400, color: NOTE },
      ] }] },
      gross_profit: { blocks: [profitBlock(1584, 427, text.gross, '54%', '+1pp')] },
      cost_of_revenue: { blocks: [{ x: 1584, top: 1187, anchor: 'middle', lineGap: 12, lines: [
        ...text.cost.map((name) => ({ text: name, size: 40, weight: 800, color: RED_LABEL })),
        { text: '$value', size: 40, weight: 400, color: RED_LABEL },
      ] }] },
      operating_profit: { blocks: [profitBlock(1986, 340, text.operating, '17%', '+2pp')] },
      operating_expenses: { blocks: [{ x: 2001.5, top: 982.5, anchor: 'middle', lineGap: 9, lines: [
        ...text.expenses.map((name) => ({ text: name, size: 36, weight: 800, color: RED_LABEL })),
        { text: '$value', size: 36, weight: 400, color: RED_LABEL },
      ] }] },
      other_income: { blocks: [] },
      net_profit: { blocks: [profitBlock(2487, 370, text.net, '13%', '+1pp')] },
      tax: { blocks: [{ x: 2490, top: 663, anchor: 'middle', lineGap: 8, lines: [
        { text: text.tax, size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL },
      ] }] },
      interest: { blocks: [{ x: 2494, top: 778, anchor: 'middle', lineGap: 8, lines: [
        { text: text.interest, size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL },
      ] }] },
      sga: { blocks: [{ x: 2491.5, top: zh ? 925 : 939, anchor: 'middle', lineGap: 8, lines: [
        ...((zh ? ['销售、一般及', '管理费用'] : [text.sga]).map((name) => ({ text: name, size: zh ? 29 : 34, weight: 800, color: RED_LABEL }))),
        { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        { text: text.share('37%'), size: 29, weight: 400, color: NOTE },
      ] }] },
      other_operating_expense: { blocks: [{ x: 2497.5, top: 1222, anchor: 'middle', lineGap: 8, lines: [
        { text: text.other, size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL },
      ] }] },
    };
  }

  const data = {
    key: 'pepsico-q3-fy23',
    name: 'PepsiCo · Q3 FY23',
    company: 'PepsiCo',
    meta: {
      company: 'PepsiCo', title: 'PepsiCo Q3 FY23 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 207, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: otherIncomeAnnotation(false),
    rasterAnnotations: [
      { key: 'pepsico-company-logo', href: 'data/assets/raster-annotations/pepsico/company-logo.png', x: 972, y: 264, width: 475, height: 76 },
      { key: 'pepsico-lays-q4-fy24', href: 'data/assets/raster-annotations/pepsico/lays-q4-fy24.png', x: 9, y: 338, width: 154, height: 145, pairedNode: 'frito_lay', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'pepsico-quaker-q4-fy24', href: 'data/assets/raster-annotations/pepsico/quaker-q4-fy24.png', x: 8, y: 544, width: 144, height: 129, pairedNode: 'quaker_foods', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 9, y: 705, width: 151, height: 151, pairedNode: 'pepsico_beverages', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'pepsico-revenue-globe', href: 'data/assets/raster-annotations/pepsico/revenue-globe.png', x: 1145, y: 362, width: 116, height: 117 },
      { key: 'pepsico-globe-north-america', href: 'data/assets/raster-annotations/pepsico/globe-north-america.png', x: 778, y: 243, width: 98, height: 98 },
      { key: 'pepsico-globe-latam', href: 'data/assets/raster-annotations/pepsico/globe-latam.png', x: 531, y: 856.5, width: 92, height: 92, pairedNode: 'latam', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'pepsico-globe-europe-q4-fy24', href: 'data/assets/raster-annotations/pepsico/globe-europe-q4-fy24.png', x: 522, y: 985, width: 99, height: 99, pairedNode: 'europe', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'pepsico-globe-amesa-q4-fy24', href: 'data/assets/raster-annotations/pepsico/globe-amesa-q4-fy24.png', x: 47, y: 1121, width: 88, height: 88, pairedNode: 'amesa', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'pepsico-globe-apac', href: 'data/assets/raster-annotations/pepsico/globe-apac.png', x: 546, y: 1250, width: 91, height: 91, pairedNode: 'apac', pairedTarget: 'label', pairedSide: 'left' },
    ],
    layout: {
      scale: 14.6,
      routes: { other_income: { x: 2178, y: 518, width: 0, height: 2 } },
      nodes: {
        frito_lay: { x: 425, y: 363, width: 71, height: 86 }, quaker_foods: { x: 425, y: 584, width: 71, height: 9 }, pepsico_beverages: { x: 425, y: 729, width: 71, height: 104 },
        north_america: { x: 799, y: 522, width: 70, height: 203 }, latam: { x: 796, y: 857, width: 70, height: 44 }, europe: { x: 799, y: 1017, width: 70, height: 52 }, amesa: { x: 796, y: 1172, width: 70, height: 21 }, apac: { x: 791, y: 1303, width: 70, height: 17 },
        revenue: { x: 1173, y: 719, width: 70, height: 344 }, gross_profit: { x: 1549, y: 620, width: 70, height: 187 }, cost_of_revenue: { x: 1549, y: 1013, width: 70, height: 156 },
        operating_profit: { x: 1915, y: 530, width: 70, height: 58 }, operating_expenses: { x: 1920, y: 839, width: 71, height: 128 },
        net_profit: { x: 2293, y: 395, width: 71, height: 44 }, tax: { x: 2293, y: 712, width: 71, height: 8 }, interest: { x: 2293, y: 822, width: 71, height: 1 },
        sga: { x: 2293, y: 941, width: 71, height: 127 }, other_operating_expense: { x: 2293, y: 1270, width: 71, height: 1 },
      },
      labels: measuredLabels(false),
    },
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.1, valueText: '$0.1B', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'frito_lay', col: 0, order: 0, type: 'source', label: 'Frito-Lay', value: 5.9, notes: ['+7% Y/Y'] },
      { id: 'quaker_foods', col: 0, order: 1, type: 'source', label: ['Quaker', 'Foods'], value: 0.7, notes: ['+5% Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 2, type: 'source', label: ['PepsiCo', 'Beverages'], value: 7.2, notes: ['+8% Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 13.9, notes: ['+7% Y/Y'] },
      { id: 'latam', col: 1, order: 1, type: 'source', label: 'LATAM', value: 3.1, notes: ['+21% Y/Y'] },
      { id: 'europe', col: 1, order: 2, type: 'source', label: 'Europe', value: 3.7, notes: ['+2% Y/Y'] },
      { id: 'amesa', col: 1, order: 3, type: 'source', label: 'Africa, Middle East & South Asia', value: 1.6, notes: ['(6%) Y/Y'] },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.2, notes: ['+4% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 23.5, notes: ['+7% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 12.8, notes: ['54% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 10.7 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.0, valueText: '$4.0B', notes: ['17% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 8.8 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.1, notes: ['13% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.8 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.2 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 8.8, notes: ['37% of revenue'] },
      { id: 'other_operating_expense', col: 5, order: 4, type: 'cost', label: 'Other', value: 0.006, valueText: '($6M)' },
    ],
    links: [
      { source: 'frito_lay', target: 'north_america', value: 5.9, sourceWidth: 86, targetWidth: 86, y0: 406, y1: 565, sourceOrder: 0, targetOrder: 0 },
      { source: 'quaker_foods', target: 'north_america', value: 0.7, sourceWidth: 9, targetWidth: 10, y0: 588.5, y1: 613, sourceOrder: 0, targetOrder: 1 },
      { source: 'pepsico_beverages', target: 'north_america', value: 7.2, sourceWidth: 104, targetWidth: 107, y0: 781, y1: 671.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'north_america', target: 'revenue', value: 13.9, sourceWidth: 203, targetWidth: 210, y0: 623.5, y1: 824, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'latam', target: 'revenue', value: 3.1, sourceWidth: 44, targetWidth: 44, y0: 879, y1: 951, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'europe', target: 'revenue', value: 3.7, sourceWidth: 52, targetWidth: 52, y0: 1043, y1: 999, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'amesa', target: 'revenue', value: 1.6, sourceWidth: 21, targetWidth: 21, y0: 1182.5, y1: 1035.5, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'apac', target: 'revenue', value: 1.2, sourceWidth: 17, targetWidth: 17, y0: 1311.5, y1: 1054.5, sourceOrder: 0, targetOrder: 4, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.8, sourceWidth: 187, targetWidth: 187, y0: 812.5, y1: 713.5, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 10.7, sourceWidth: 157, targetWidth: 156, y0: 984.5, y1: 1091, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.0, sourceWidth: 58, targetWidth: 58, y0: 649, y1: 559, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 8.8, sourceWidth: 129, targetWidth: 128, y0: 742.5, y1: 903, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.0, sourceWidth: 44, targetWidth: 43, y0: 552, y1: 416.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 1, y0: 518, y1: 438.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.8, sourceWidth: 12, targetWidth: 8, y0: 580, y1: 716, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 2, targetWidth: 1, y0: 587, y1: 822.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 8.8, sourceWidth: 127, targetWidth: 127, y0: 902.5, y1: 1004.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 0.006, sourceWidth: 1, targetWidth: 1, y0: 966.5, y1: 1270.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '百事公司 · 2023 财年第三季度',
        meta: { title: '百事公司 2023 财年第三季度利润表', period: '', periodNote: '', titleTextLength: 2000 },
        annotationsSvg: otherIncomeAnnotation(true),
        nonNodeMetrics: { other_income: { label: '其他收入' } },
        nodes: {
          frito_lay: { label: '菲多利', notes: ['同比 +7%'] }, quaker_foods: { label: ['桂格', '食品'], notes: ['同比 +5%'] }, pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 +8%'] },
          north_america: { label: '北美', notes: ['同比 +7%'] }, latam: { label: '拉丁美洲', notes: ['同比 +21%'] }, europe: { label: '欧洲', notes: ['同比 +2%'] },
          amesa: { label: '非洲、中东及南亚', notes: ['同比 (6%)'] }, apac: { label: '亚太', notes: ['同比 +4%'] }, revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 +1 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +2 个百分点'] }, operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 13%', '同比 +1 个百分点'] }, tax: { label: '税费' }, interest: { label: '利息' },
          sga: { label: '销售、一般及管理费用', notes: ['占收入 37%'] }, other_operating_expense: { label: '其他' },
        },
        layout: { labels: measuredLabels(true) },
      },
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(data);
})();
