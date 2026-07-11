/* ====================================================================
 * DigitalOcean - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/digitalocean-q4-fy25.png.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const DO_BLUE = '#0080ff';
  const DO_LINK = '#85bff7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const SCALE = 1.4;

  const h = (value) => Math.round(value * SCALE * 10) / 10;
  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lineGap, lines: lines.filter(Boolean) });

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="32" fill="${DO_BLUE}"/>
      ${lines.map((item) => `<text x="${x + width / 2}" y="${y + item.y}" text-anchor="middle" font-size="${item.size}" font-weight="${item.weight || 500}" fill="#ffffff">${item.text}</text>`).join('')}
    </g>`;

  const annotations = (copy) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(86, 1116, 166, 166, [
        { text: 'ARR', y: 55, size: 30, weight: 800 },
        { text: '$970M', y: 98, size: 31 },
        { text: copy.arrGrowth, y: 137, size: 28 },
      ])}
      ${kpiCard(266, 1116, 166, 166, [
        { text: 'DBNR', y: 55, size: 30, weight: 800 },
        { text: '101%', y: 98, size: 31 },
        { text: copy.dbnrGrowth, y: 137, size: 28 },
      ])}
      ${kpiCard(445, 1116, 275, 166, [
        { text: copy.customers, y: 55, size: 30, weight: 800 },
        { text: copy.customerThreshold, y: 98, size: 31 },
        { text: copy.customerGrowth, y: 137, size: 28 },
      ])}
      <text x="225" y="1326" font-size="29" font-weight="500" fill="${NOTE}">${copy.arrFootnote}</text>
      <text x="209" y="1362" font-size="29" font-weight="500" fill="${NOTE}">${copy.dbnrFootnote}</text>
    </g>`;

  const makeLabels = (copy) => ({
    north_america: { blocks: [
      block(390, 276, 'middle', [line('$value', 40, 400), line(copy.northGrowth, 29, 400, NOTE)]),
      block(297, 387, 'end', [line(copy.northLine1, 40, 800), copy.northLine2 && line(copy.northLine2, 40, 800)], 10),
    ] },
    europe: { blocks: [
      block(390, 526, 'middle', [line('$value', 40, 400), line(copy.europeGrowth, 29, 400, NOTE)]),
      block(297, 638, 'end', [line(copy.europe, 40, 800)]),
    ] },
    asia: { blocks: [
      block(390, 727, 'middle', [line('$value', 40, 400), line(copy.asiaGrowth, 29, 400, NOTE)]),
      block(297, 833, 'end', [line(copy.asia, 40, 800)]),
    ] },
    other: { blocks: [
      block(390, 947, 'middle', [line('$value', 40, 400), line(copy.otherGrowth, 29, 400, NOTE)]),
      block(297, 1030, 'end', [line(copy.other, 40, 800)]),
    ] },
    revenue: { blocks: [
      block(858, 530, 'middle', [line(copy.revenue, 40, 800), line('$value', 40, 400), line(copy.revenueGrowth, 29, 400, NOTE)]),
    ] },
    gross_profit: { blocks: [
      block(1325, 370, 'middle', [line(copy.grossProfit, 40, 800), line('$value', 40, 400), line(copy.grossMargin, 29, 400, NOTE), line(copy.grossGrowth, 29, 400, NOTE)]),
    ] },
    cost_of_revenue: { blocks: [
      block(1325, 1148, 'middle', [line(copy.costLine1, 36, 800), line(copy.costLine2, 36, 800), line('$value', 36, 400)]),
    ] },
    operating_profit: { blocks: [
      block(1793, 245, 'middle', [line(copy.operatingProfit, 40, 800), line('$value', 40, 400), line(copy.operatingMargin, 29, 400, NOTE), line(copy.operatingGrowth, 29, 400, NOTE)]),
    ] },
    operating_expenses: { blocks: [
      block(1793, 898, 'middle', [line(copy.operatingLine1, 40, 800), line(copy.operatingLine2, 40, 800), line('$value', 40, 400)]),
    ] },
    net_profit: { blocks: [
      block(2374, 284, 'start', [line(copy.netProfit, 40, 800), line('$value', 40, 400), line(copy.netMargin, 29, 400, NOTE), line(copy.netGrowth, 29, 400, NOTE)]),
    ] },
    interest: { blocks: [block(2380, 538, 'start', [line(copy.interest, 31, 800), line('$value', 31, 400)])] },
    tax: { blocks: [block(2380, 655, 'start', [line(copy.tax, 31, 800), line('$value', 31, 400)])] },
    rnd: { blocks: [
      block(2380, 860, 'start', [line(copy.rnd, 31, 800), line('$value', 31, 400), line(copy.rndShare, 29, 400, NOTE), line(copy.rndGrowth, 29, 400, NOTE)]),
    ] },
    ga: { blocks: [
      block(2380, 1046, 'start', [line(copy.ga, 31, 800), line('$value', 31, 400), line(copy.gaShare, 29, 400, NOTE), line(copy.gaGrowth, 29, 400, NOTE)]),
    ] },
    sm: { blocks: [
      block(2380, 1233, 'start', [line(copy.sm, 31, 800), line('$value', 31, 400), line(copy.smShare, 29, 400, NOTE), line(copy.smGrowth, 29, 400, NOTE)]),
    ] },
  });

  const en = {
    northLine1: 'North', northLine2: 'America', northGrowth: '+18% Y/Y',
    europe: 'Europe', europeGrowth: '+18% Y/Y', asia: 'Asia', asiaGrowth: '+13% Y/Y', other: 'Other', otherGrowth: '+30% Y/Y',
    revenue: 'Revenue', revenueGrowth: '+18% Y/Y', grossProfit: 'Gross profit', grossMargin: '59% margin', grossGrowth: '(3pp) Y/Y',
    costLine1: 'Cost of', costLine2: 'revenue', operatingProfit: 'Operating profit', operatingMargin: '16% margin', operatingGrowth: '+0pp Y/Y',
    operatingLine1: 'Operating', operatingLine2: 'expenses', netProfit: 'Net profit', netMargin: '11% margin', netGrowth: '+2pp Y/Y',
    interest: 'Interest', tax: 'Tax', rnd: 'R&D', rndShare: '18% of revenue', rndGrowth: '(1pp) Y/Y',
    ga: 'G&A', gaShare: '15% of revenue', gaGrowth: '(1pp) Y/Y', sm: 'S&M', smShare: '9% of revenue', smGrowth: '+0pp Y/Y',
    arrGrowth: '+18% Y/Y', dbnrGrowth: '+2pp Y/Y', customers: 'Customers', customerThreshold: '&gt;$100K ARR', customerGrowth: '+58% Y/Y',
    arrFootnote: 'ARR = Annual Run-Rate Revenue', dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  };
  const zh = {
    northLine1: '北美', northLine2: '', northGrowth: '同比 +18%', europe: '欧洲', europeGrowth: '同比 +18%', asia: '亚洲', asiaGrowth: '同比 +13%', other: '其他', otherGrowth: '同比 +30%',
    revenue: '收入', revenueGrowth: '同比 +18%', grossProfit: '毛利润', grossMargin: '利润率 59%', grossGrowth: '同比 (3 个百分点)',
    costLine1: '收入', costLine2: '成本', operatingProfit: '营业利润', operatingMargin: '利润率 16%', operatingGrowth: '同比 +0 个百分点',
    operatingLine1: '运营', operatingLine2: '费用', netProfit: '净利润', netMargin: '利润率 11%', netGrowth: '同比 +2 个百分点',
    interest: '利息', tax: '税费', rnd: '研发', rndShare: '占收入 18%', rndGrowth: '同比 (1 个百分点)',
    ga: '管理费用', gaShare: '占收入 15%', gaGrowth: '同比 (1 个百分点)', sm: '销售与营销', smShare: '占收入 9%', smGrowth: '同比 +0 个百分点',
    arrGrowth: '同比 +18%', dbnrGrowth: '同比 +2 个百分点', customers: '客户', customerThreshold: 'ARR &gt;$100K', customerGrowth: '同比 +58%',
    arrFootnote: 'ARR = 年化经常性收入', dbnrFootnote: 'DBNR = 美元净留存率',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'digitalocean-q4-fy25',
    name: 'DigitalOcean · Q4 FY25',
    company: 'DigitalOcean',
    meta: {
      company: 'DigitalOcean', title: 'DigitalOcean Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/digitalocean-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2460,
      hidePeriodStamp: true,
      logoWidth: 390, logoHeight: 286, logoY: 228, logoViewBox: '0 0 404 296', logoSvg: BUSINESS_ICONS.digitalOceanCompanyLogo || '',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: DO_BLUE, label: DO_BLUE }, hub: { node: DO_BLUE, label: DO_BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: DO_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(en),
    layout: {
      scale: SCALE,
      nodes: {
        north_america: { x: 354, y: 375, width: 73, height: 129 }, europe: { x: 354, y: 619, width: 73, height: h(68) },
        asia: { x: 354, y: 824, width: 73, height: h(56) }, other: { x: 354, y: 1041, width: 73, height: 35 },
        revenue: { x: 822, y: 680, width: 73, height: 344 }, gross_profit: { x: 1289, y: 562, width: 73, height: 202 },
        cost_of_revenue: { x: 1289, y: 995, width: 73, height: h(100) }, operating_profit: { x: 1758, y: 435, width: 73, height: h(39) },
        operating_expenses: { x: 1758, y: 741, width: 73, height: 145 }, net_profit: { x: 2225, y: 327, width: 73, height: h(26) },
        interest: { x: 2225, y: 577, width: 73, height: h(6) }, tax: { x: 2225, y: 689, width: 73, height: 7 },
        rnd: { x: 2225, y: 874, width: 73, height: h(44) }, ga: { x: 2225, y: 1066, width: 73, height: h(37) }, sm: { x: 2225, y: 1258, width: 73, height: 30 },
      },
      labels: makeLabels(en),
    },
    nodes: [
      { id: 'north_america', col: 0, order: 0, type: 'source', label: ['North', 'America'], value: 92, notes: ['+18% Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'europe', col: 0, order: 1, type: 'source', label: 'Europe', value: 68, notes: ['+18% Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'asia', col: 0, order: 2, type: 'source', label: 'Asia', value: 56, notes: ['+13% Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'other', col: 0, order: 3, type: 'source', label: 'Other', value: 27, notes: ['+30% Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 242, notes: ['+18% Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 142, notes: ['59% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 100, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 39, notes: ['16% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 103, valueText: '($103M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 26, notes: ['11% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 1, type: 'cost', label: 'Interest', value: 6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 44, notes: ['18% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 37, notes: ['15% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 5, type: 'cost', label: 'S&M', value: 23, notes: ['9% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'north_america', target: 'revenue', value: 92, width: h(92), sourceOrder: 0, targetOrder: 0 },
      { source: 'europe', target: 'revenue', value: 68, width: h(68), sourceOrder: 0, targetOrder: 1 },
      { source: 'asia', target: 'revenue', value: 56, width: h(56), sourceOrder: 0, targetOrder: 2 },
      { source: 'other', target: 'revenue', value: 27, sourceWidth: 35, targetWidth: 41.6, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 142, sourceWidth: 204, targetWidth: 202, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 100, width: h(100), sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 39, width: h(39), sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 103, sourceWidth: 147.4, targetWidth: h(103), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 26, width: h(26), y0: 453.2, y1: 345.2, sourceOrder: 0, targetOrder: 0, curve: { c1x: 1948, c1y: 453.2, c2x: 2088, c2y: 345.2 } },
      { source: 'operating_profit', target: 'interest', value: 6, width: h(6), y0: 475.6, y1: 581.2, sourceOrder: 1, targetOrder: 0, curve: { c1x: 1948, c1y: 475.6, c2x: 2088, c2y: 581.2 } },
      { source: 'operating_profit', target: 'tax', value: 7, sourceWidth: h(7), targetWidth: 7, y0: 484.7, y1: 692.5, sourceOrder: 2, targetOrder: 0, curve: { c1x: 1948, c1y: 484.7, c2x: 2088, c2y: 692.5 } },
      { source: 'operating_expenses', target: 'rnd', value: 44, width: h(44), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 37, width: h(37), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 23, sourceWidth: 31.6, targetWidth: 30, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'DigitalOcean · 2025 财年第四季度',
        meta: { title: 'DigitalOcean 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleSize: 112, titleTextLength: 1800 },
        annotationsSvg: annotations(zh),
        nodes: {
          north_america: { label: '北美', notes: ['同比 +18%'] }, europe: { label: '欧洲', notes: ['同比 +18%'] }, asia: { label: '亚洲', notes: ['同比 +13%'] }, other: { label: '其他', notes: ['同比 +30%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] }, gross_profit: { label: '毛利润', notes: ['利润率 59%', '同比 (3 个百分点)'] }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 +0 个百分点'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +2 个百分点'] },
          interest: { label: '利息' }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 18%', '同比 (1 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 15%', '同比 (1 个百分点)'] }, sm: { label: '销售与营销', notes: ['占收入 9%', '同比 +0 个百分点'] },
        },
        layout: { labels: makeLabels(zh) },
      },
    },
  });
})();
