/* PepsiCo Q4 FY25 fixed-layout income statement. Geometry is measured from
 * input/processed/pepsico-q4-fy25.png; the existing validated PepsiCo icon
 * cluster is reused as approved runtime raster annotations. */
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

  window.DATASETS = window.DATASETS || [];
  const data = {
    key: 'pepsico-q4-fy25',
    name: 'PepsiCo · Q4 FY25',
    company: 'PepsiCo',
    meta: {
      company: 'PepsiCo',
      title: 'PepsiCo Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 207, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      allowRasterAnnotations: true,
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
    rasterAnnotations: [
      { key: 'pepsico-company-logo', href: 'data/assets/raster-annotations/pepsico/company-logo.png', x: 1000, y: 267, width: 475, height: 76 },
      { key: 'pepsico-foods-lays-quaker', href: 'data/assets/raster-annotations/pepsico/foods-lays-quaker.png', x: 27, y: 426, width: 244, height: 117 },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 51, y: 703, width: 136, height: 137 },
      { key: 'pepsico-ib-sodastream', href: 'data/assets/raster-annotations/pepsico/ib-sodastream.png', x: 486, y: 859, width: 106, height: 168 },
      { key: 'pepsico-revenue-globe', href: 'data/assets/raster-annotations/pepsico/revenue-globe.png', x: 1176, y: 356, width: 116, height: 117 },
      { key: 'pepsico-globe-north-america', href: 'data/assets/raster-annotations/pepsico/globe-north-america.png', x: 806, y: 302, width: 98, height: 98 },
      { key: 'pepsico-globe-latam', href: 'data/assets/raster-annotations/pepsico/globe-latam.png', x: 556, y: 1030, width: 92, height: 92 },
      { key: 'pepsico-globe-emea', href: 'data/assets/raster-annotations/pepsico/globe-emea.png', x: 481, y: 1174, width: 191, height: 99 },
      { key: 'pepsico-globe-apac', href: 'data/assets/raster-annotations/pepsico/globe-apac.png', x: 572, y: 1318, width: 91, height: 91 },
    ],
    layout: {
      scale: 10.4,
      nodes: {
        foods: { x: 456, y: 451, width: 71, height: 85 }, pepsico_beverages: { x: 456, y: 746, width: 71, height: 84 },
        north_america: { x: 830, y: 542, width: 72, height: 171 }, ib_franchise: { x: 830, y: 916, width: 72, height: 15 },
        latam: { x: 830, y: 1051, width: 72, height: 37 }, emea: { x: 830, y: 1200, width: 72, height: 62 }, apac: { x: 830, y: 1395, width: 72, height: 15 },
        revenue: { x: 1204, y: 679, width: 71, height: 304 }, gross_profit: { x: 1578, y: 546, width: 71, height: 162 },
        cost_of_revenue: { x: 1577, y: 951, width: 72, height: 142 }, operating_profit: { x: 1962, y: 419, width: 71, height: 36 },
        operating_expenses: { x: 1962, y: 716, width: 72, height: 124 }, net_profit: { x: 2325, y: 316, width: 72, height: 27 },
        tax: { x: 2324, y: 563, width: 72, height: 4 }, interest: { x: 2324, y: 675, width: 72, height: 3 }, other: { x: 2324, y: 791, width: 72, height: 3 },
      },
      labels: {
        foods: { blocks: [{ x: 491, top: 361, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 365, top: 468, anchor: 'middle', lines: [{ text: 'Foods', size: 40, weight: 800 }] }] },
        pepsico_beverages: { blocks: [{ x: 491, top: 657, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 316, top: 750, anchor: 'middle', lineGap: 8, lines: [{ text: 'PepsiCo', size: 40, weight: 800 }, { text: 'Beverages', size: 40, weight: 800 }] }] },
        north_america: { blocks: [{ x: 866, top: 399, anchor: 'middle', lineGap: 12, lines: [{ text: 'North America', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+3% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        ib_franchise: { blocks: [{ x: 865, top: 826, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 693, top: 903, anchor: 'middle', lines: [{ text: 'IB franchise', size: 40, weight: 800 }] }] },
        latam: { blocks: [{ x: 865, top: 963, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 732, top: 1055, anchor: 'middle', lines: [{ text: 'LATAM', size: 40, weight: 800 }] }] },
        emea: { blocks: [{ x: 865, top: 1112, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 735, top: 1218, anchor: 'middle', lines: [{ text: 'EMEA', size: 40, weight: 800 }] }] },
        apac: { blocks: [{ x: 864, top: 1308, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE }] }, { x: 733, top: 1389, anchor: 'middle', lines: [{ text: 'APAC', size: 40, weight: 800 }] }] },
        revenue: { blocks: [{ x: 1240, top: 538, anchor: 'middle', lineGap: 12, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1613, top: 363, anchor: 'middle', lineGap: 12, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '53% margin', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1613, top: 1115, anchor: 'middle', lineGap: 12, lines: [{ text: 'Cost of', size: 40, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
        operating_profit: { blocks: [{ x: 1997, top: 239, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '12% margin', size: 29, weight: 400, color: NOTE }, { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1997, top: 858, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: 'SG&A', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, weight: 400, color: RED_LABEL }] }] },
        net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 281, anchor: 'middle', lineGap: 12, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '9% margin', size: 29, weight: 400, color: NOTE }, { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        tax: { blocks: [{ x: RIGHT_LABEL_X, top: 534, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
        interest: { blocks: [{ x: RIGHT_LABEL_X, top: 644, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
        other: { blocks: [{ x: RIGHT_LABEL_X, top: 758, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
      },
    },
    nodes: [
      { id: 'foods', col: 0, order: 0, type: 'source', label: 'Foods', value: 8.3, notes: ['+1% Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 1, type: 'source', label: ['PepsiCo', 'Beverages'], value: 8.2, notes: ['+4% Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 16.6, notes: ['+3% Y/Y'] },
      { id: 'ib_franchise', col: 1, order: 1, type: 'source', label: 'IB franchise', value: 1.6, notes: ['+4% Y/Y'] },
      { id: 'latam', col: 1, order: 2, type: 'source', label: 'LATAM', value: 3.7, notes: ['+11% Y/Y'] },
      { id: 'emea', col: 1, order: 3, type: 'source', label: 'EMEA', value: 6.1, notes: ['+12% Y/Y'] },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.5, notes: ['+5% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 29.3, notes: ['+6% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 15.6, notes: ['53% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 13.7 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.6, notes: ['12% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses SG&A', value: 12.1 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.5, notes: ['9% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.3 },
      { id: 'other', col: 5, order: 3, type: 'cost', label: 'Other', value: 0.2 },
    ],
    links: [
      { source: 'foods', target: 'north_america', value: 8.3, width: 85, sourceOrder: 0, targetOrder: 0 },
      { source: 'pepsico_beverages', target: 'north_america', value: 8.2, sourceWidth: 84, targetWidth: 86, sourceOrder: 0, targetOrder: 1 },
      { source: 'north_america', target: 'revenue', value: 16.6, sourceWidth: 171, targetWidth: 175, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'ib_franchise', target: 'revenue', value: 1.6, width: 15, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'latam', target: 'revenue', value: 3.7, width: 37, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'emea', target: 'revenue', value: 6.1, width: 62, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'apac', target: 'revenue', value: 1.5, width: 15, sourceOrder: 0, targetOrder: 4, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 15.6, width: 162, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 13.7, width: 142, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.6, width: 36, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 12.1, sourceWidth: 126, targetWidth: 124, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.5, width: 27, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, width: 4, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.3, width: 3, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.2, sourceWidth: 2, targetWidth: 3, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '百事公司 · 2025 财年第四季度',
        meta: { title: '百事公司 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2000 },
        nodes: {
          foods: { label: '食品', notes: ['同比 +1%'] }, pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 +4%'] }, north_america: { label: '北美', notes: ['同比 +3%'] }, ib_franchise: { label: '国际饮料特许经营', notes: ['同比 +4%'] }, latam: { label: '拉丁美洲', notes: ['同比 +11%'] }, emea: { label: '欧洲中东非洲', notes: ['同比 +12%'] }, apac: { label: '亚太', notes: ['同比 +5%'] }, revenue: { label: '收入', notes: ['同比 +6%'] }, gross_profit: { label: '毛利润', notes: ['利润率 53%', '同比 +1 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +4 个百分点'] }, operating_expenses: { label: '运营费用 SG&A' }, net_profit: { label: '净利润', notes: ['利润率 9%', '同比 +3 个百分点'] }, tax: { label: '税费' }, interest: { label: '利息' }, other: { label: '其他' },
        },
        layout: {
          labels: {
            foods: { blocks: [{ x: 491, top: 361, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +1%', size: 29, weight: 400, color: NOTE }] }, { x: 365, top: 468, anchor: 'middle', lines: [{ text: '食品', size: 40, weight: 800 }] }] },
            pepsico_beverages: { blocks: [{ x: 491, top: 657, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +4%', size: 29, weight: 400, color: NOTE }] }, { x: 316, top: 750, anchor: 'middle', lineGap: 8, lines: [{ text: '百事', size: 40, weight: 800 }, { text: '饮料', size: 40, weight: 800 }] }] },
            north_america: { blocks: [{ x: 866, top: 399, anchor: 'middle', lineGap: 12, lines: [{ text: '北美', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +3%', size: 29, weight: 400, color: NOTE }] }] },
            ib_franchise: { blocks: [{ x: 865, top: 826, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +4%', size: 29, weight: 400, color: NOTE }] }, { x: 699, top: 892, anchor: 'middle', lineGap: 8, lines: [{ text: '国际饮料', size: 34, weight: 800 }, { text: '特许经营', size: 34, weight: 800 }] }] },
            latam: { blocks: [{ x: 865, top: 963, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +11%', size: 29, weight: 400, color: NOTE }] }, { x: 732, top: 1055, anchor: 'middle', lines: [{ text: '拉丁美洲', size: 36, weight: 800 }] }] },
            emea: { blocks: [{ x: 865, top: 1112, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +12%', size: 29, weight: 400, color: NOTE }] }, { x: 730, top: 1207, anchor: 'middle', lineGap: 6, lines: [{ text: '欧洲中东', size: 32, weight: 800 }, { text: '非洲', size: 32, weight: 800 }] }] },
            apac: { blocks: [{ x: 864, top: 1308, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +5%', size: 29, weight: 400, color: NOTE }] }, { x: 733, top: 1389, anchor: 'middle', lines: [{ text: '亚太', size: 40, weight: 800 }] }] },
            revenue: { blocks: [{ x: 1240, top: 538, anchor: 'middle', lineGap: 12, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +6%', size: 29, weight: 400, color: NOTE }] }] },
            gross_profit: { blocks: [{ x: 1613, top: 363, anchor: 'middle', lineGap: 12, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 53%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            cost_of_revenue: { blocks: [{ x: 1613, top: 1115, anchor: 'middle', lineGap: 12, lines: [{ text: '收入', size: 40, weight: 800, color: RED_LABEL }, { text: '成本', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
            operating_profit: { blocks: [{ x: 1997, top: 239, anchor: 'middle', lineGap: 12, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 12%', size: 29, weight: 400, color: NOTE }, { text: '同比 +4 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1997, top: 858, anchor: 'middle', lineGap: 12, lines: [{ text: '运营费用', size: 36, weight: 800, color: RED_LABEL }, { text: 'SG&A', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, weight: 400, color: RED_LABEL }] }] },
            net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 281, anchor: 'middle', lineGap: 12, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 9%', size: 29, weight: 400, color: NOTE }, { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            tax: { blocks: [{ x: RIGHT_LABEL_X, top: 534, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
            interest: { blocks: [{ x: RIGHT_LABEL_X, top: 644, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
            other: { blocks: [{ x: RIGHT_LABEL_X, top: 758, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
          },
        },
      },
    },
  };

  // The source keeps each measured label group 10px above the engine's
  // baseline-oriented fixed-label input. Apply this to both locale layouts
  // so the visible text, rather than the source coordinate, is aligned.
  for (const labels of [data.layout.labels, data.i18n.zh.layout.labels]) {
    for (const label of Object.values(labels)) {
      for (const block of label.blocks) block.top -= 10;
    }
  }

  // Side labels use their visual vertical centre, rather than the source's
  // baseline. These per-group offsets restore the measured alignment.
  data.layout.labels.foods.blocks[1].top += 13;
  data.layout.labels.pepsico_beverages.blocks[1].top += 1;
  data.layout.labels.ib_franchise.blocks[1].top += 4;
  data.layout.labels.latam.blocks[1].top -= 1;
  data.layout.labels.emea.blocks[1].top -= 1;
  data.layout.labels.apac.blocks[1].top -= 1;
  data.layout.labels.operating_expenses.blocks[0].top += 1;
  // Keep the localized LATAM value group clear of its longer side label.
  data.i18n.zh.layout.labels.latam.blocks[0].top -= 4;

  window.DATASETS.push(data);
})();
