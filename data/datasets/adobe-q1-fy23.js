/* Adobe Q1 FY23 income statement ($B), measured from the native 2667x1500
 * Source. Financial values live in data/income-statements/adobe.js. */
(function () {
  'use strict';

  const DARK = '#3d3d3d';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GREY_LINK = '#a1a1a1';
  const ADOBE_RED = '#fa0f00';
  const BG = '#f2f2f2';

  const adobeLogo = `
    <path d="M0 0H58L0 140Z" fill="${ADOBE_RED}"/>
    <path d="M102 0H159V137Z" fill="${ADOBE_RED}"/>
    <path d="M80 50L93 139H116Z" fill="${ADOBE_RED}"/>
    <text x="214" y="113" font-family="Montserrat,Arial,sans-serif" font-size="118" font-weight="800"
      fill="${ADOBE_RED}" textLength="331" lengthAdjust="spacingAndGlyphs">Adobe</text>`;

  const creativeCloudIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">
      <defs><linearGradient id="adobeQ1Fy23Cc" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fe0e8e"/><stop offset="35%" stop-color="#fb4300"/>
        <stop offset="65%" stop-color="#f6c500"/><stop offset="100%" stop-color="#55e04d"/>
      </linearGradient></defs>
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#adobeQ1Fy23Cc)"/>
      <circle cx="${size * 0.38}" cy="${size * 0.58}" r="${size * 0.26}" fill="none" stroke="#fff" stroke-width="${size * 0.09}"/>
      <circle cx="${size * 0.62}" cy="${size * 0.4}" r="${size * 0.19}" fill="none" stroke="#fff" stroke-width="${size * 0.09}"/>
    </g>`;

  const acrobatIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="${ADOBE_RED}"/>
      <path d="M${size * 0.34} ${size * 0.72}C${size * 0.2} ${size * 0.62} ${size * 0.22} ${size * 0.4} ${size * 0.38} ${size * 0.4}
        C${size * 0.5} ${size * 0.4} ${size * 0.5} ${size * 0.55} ${size * 0.4} ${size * 0.6}
        C${size * 0.55} ${size * 0.66} ${size * 0.62} ${size * 0.5} ${size * 0.72} ${size * 0.28}"
        fill="none" stroke="#fff" stroke-width="${size * 0.075}" stroke-linecap="round"/>
    </g>`;

  const adobeAIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="${ADOBE_RED}"/>
      <path d="M${size * 0.5} ${size * 0.21}L${size * 0.8} ${size * 0.765}H${size * 0.66}L${size * 0.5} ${size * 0.44}
        L${size * 0.34} ${size * 0.765}H${size * 0.2}Z" fill="#fff"/>
    </g>`;

  const kpiCard = (x, width, header, value, note) => `
    <g><rect x="${x}" y="1146" width="${width}" height="161" rx="31" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1198" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="1242" text-anchor="middle" font-size="30" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1282" text-anchor="middle" font-size="28" fill="#fff">${note}</text></g>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${creativeCloudIcon(105, 447)}${acrobatIcon(228, 447)}${adobeAIcon(164, 704)}
      ${kpiCard(34, 322, zh ? '创意 ARR' : 'Creative ARR', '$11.3B', zh ? '同比 +8%' : '+8% Y/Y')}
      ${kpiCard(371, 437, zh ? '文档云 ARR' : 'Document Cloud ARR', '$2.4B', zh ? '同比 +18%' : '+18% Y/Y')}
      ${kpiCard(822, 240, 'RPO', '$15.2B', zh ? '同比 +10%' : '+10% Y/Y')}
      <text x="220" y="1343" text-anchor="start" font-size="27" fill="${NOTE}">${zh ? 'ARR = 年化经常性收入' : 'ARR = Annual Recurring Revenue'}</text>
      <text x="159" y="1385" text-anchor="start" font-size="27" fill="${NOTE}">${zh ? 'RPO = 剩余履约义务' : 'RPO = Remaining Performance Obligation'}</text>
      <g class="sankey-interactive-annotation" data-node="other_income" data-link-numerator="other_income"
        data-link-denominator="net_profit" data-link-anchor-x="2193" data-link-anchor-y="505">
        <path d="M2158 505H2228C2245 505 2234 450 2267 450" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
        <text x="2192" y="538" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
        <text x="2192" y="580" text-anchor="middle" font-size="30" fill="${GREEN_LABEL}">$12M</text>
        <rect x="2140" y="445" width="150" height="145" fill="transparent" pointer-events="all"/>
      </g>
    </g>`;

  const line = (text, size, options = {}) => ({
    text, size, weight: options.weight ?? 400, color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap ?? 8, lines,
  });
  const labels = (zh) => {
    const t = zh ? {
      digitalMedia: '数字媒体', digitalExperience: '数字体验', publishing: ['出版', '与广告'], revenue: '收入',
      gross: '毛利润', cost: ['收入', '成本'], operatingProfit: '营业利润', operatingExpenses: ['营业', '费用'],
      net: '净利润', tax: '税费', sm: '销售与市场', rnd: '研发', ga: '一般及行政', amortization: '摊销',
      y9: '同比 +9%', y11: '同比 +11%', y12n: '同比 (12%)', gm96: '毛利率 96%', gm66: '毛利率 66%', gm74: '毛利率 74%',
      margin88: '利润率 88%', unchanged: '同比持平', margin34: '利润率 34%', pp3n: '同比 (3 个百分点)', margin27: '利润率 27%',
      share28: '占收入 28%', share18: '占收入 18%', share7: '占收入 7%', share1: '占收入 1%',
    } : {
      digitalMedia: 'Digital Media', digitalExperience: 'Digital Experience', publishing: ['Publishing', '& Advertising'], revenue: 'Revenue',
      gross: 'Gross profit', cost: ['Cost of', 'revenue'], operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
      net: 'Net profit', tax: 'Tax', sm: 'S&M', rnd: 'R&D', ga: 'G&A', amortization: 'Amortization',
      y9: '+9% Y/Y', y11: '+11% Y/Y', y12n: '(12%) Y/Y', gm96: '96% gross margin', gm66: '66% gross margin', gm74: '74% gross margin',
      margin88: '88% margin', unchanged: 'Unchanged', margin34: '34% margin', pp3n: '(3pp) Y/Y', margin27: '27% margin',
      share28: '28% of revenue', share18: '18% of revenue', share7: '7% of revenue', share1: '1% of revenue',
    };
    const amount = (x, top, yoy) => block(x, top, [line('$value', 39), line(yoy, 29, { color: NOTE })], { lineGap: 9 });
    const side = (x, top, names, note) => block(x, top, [...[].concat(names).map((v) => line(v, 34, { weight: 800 })), line(note, 29, { color: NOTE })], { lineGap: 8 });
    const right = (x, top, name, extra = []) => block(x, top, [line(name, name === t.amortization ? 27 : 31, { weight: 800 }), line('$value', 29), ...extra.map((v) => line(v, 28, { color: NOTE }))], { lineGap: 8 });
    return {
      digital_media: { blocks: [amount(434, 361, t.y9), side(214, 580, t.digitalMedia, t.gm96)] },
      digital_experience: { blocks: [amount(436, 732, t.y11), side(190, 842, t.digitalExperience, t.gm66)] },
      publishing_advertising: { blocks: [amount(438, 958, t.y12n), side(200, 998, t.publishing, t.gm74)] },
      revenue: { blocks: [block(903, 413, [line(t.revenue, 40, { weight: 800 }), line('$value', 39), line(t.y9, 29, { color: NOTE })], { lineGap: 10 })] },
      gross_profit: { blocks: [block(1373, 329, [line(t.gross, 40, { weight: 800 }), line('$value', 39), line(t.margin88, 29, { color: NOTE }), line(t.unchanged, 29, { color: NOTE })], { lineGap: 9 })] },
      cost_of_revenue: { blocks: [block(1367, 1012, [...t.cost.map((v) => line(v, 36, { weight: 800 })), line('$value', 32)], { lineGap: 7 })] },
      operating_profit: { blocks: [block(1828, 251, [line(t.operatingProfit, 40, { weight: 800 }), line('$value', 39), line(t.margin34, 29, { color: NOTE }), line(t.pp3n, 29, { color: NOTE })], { lineGap: 8 })] },
      operating_expenses: { blocks: [block(1819, 880, [...t.operatingExpenses.map((v) => line(v, 40, { weight: 800 })), line('$value', 36)], { lineGap: 8 })] },
      other_income: { blocks: [] },
      net_profit: { blocks: [block(2464, 352, [line(t.net, 40, { weight: 800 }), line('$value', 39), line(t.margin27, 29, { color: NOTE }), line(t.pp3n, 29, { color: NOTE })], { lineGap: 8 })] },
      tax: { blocks: [right(2460, 573, t.tax)] },
      sm: { blocks: [right(2460, 732, t.sm, [t.share28])] },
      rnd: { blocks: [right(2475, 899, t.rnd, [t.share18])] },
      ga: { blocks: [right(2476, 1055, t.ga, [t.share7])] },
      amortization: { blocks: [right(2462, 1195, t.amortization, [t.share1])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q1-fy23', name: 'Adobe · Q1 FY23', company: 'Adobe',
    meta: {
      company: 'Adobe', title: 'Adobe Q1 FY23 Income Statement', period: 'Q1 FY23', periodNote: 'Ending Feb. 2023',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 204, titleSize: 128, titleTextLength: 2119,
      periodX: 2460, periodY: 257, periodNoteY: 302,
      logoWidth: 628, logoHeight: 140, logoY: 247, logoViewBox: '0 0 628 140', logoSvg: adobeLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GREY_LINK, hub: GREY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.012, valueText: '$12M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    layout: {
      scale: 70.64,
      routes: { other_income: { x: 2158, y: 505, width: 0, height: 1 } },
      nodes: {
        digital_media: { x: 399, y: 455, width: 71, height: 240 },
        digital_experience: { x: 399, y: 822, width: 71, height: 81 },
        publishing_advertising: { x: 399, y: 1047, width: 71, height: 4 },
        revenue: { x: 866, y: 565, width: 70, height: 332 },
        gross_profit: { x: 1335, y: 510, width: 72, height: 289 },
        cost_of_revenue: { x: 1335, y: 948, width: 72, height: 39 },
        operating_profit: { x: 1791, y: 430, width: 70, height: 109 },
        operating_expenses: { x: 1788, y: 688, width: 70, height: 179 },
        net_profit: { x: 2267, y: 365, width: 71, height: 85 },
        tax: { x: 2267, y: 613, width: 71, height: 22 },
        sm: { x: 2267, y: 728, width: 71, height: 93 },
        rnd: { x: 2267, y: 922, width: 71, height: 55 },
        ga: { x: 2267, y: 1082, width: 71, height: 22 },
        amortization: { x: 2267, y: 1227, width: 71, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'digital_media', col: 0, order: 0, type: 'source', label: 'Digital Media', value: 3.4, notes: ['+9% Y/Y', '96% gross margin'], color: DARK, labelColor: DARK, linkTint: GREY_LINK },
      { id: 'digital_experience', col: 0, order: 1, type: 'source', label: 'Digital Experience', value: 1.2, notes: ['+11% Y/Y', '66% gross margin'], color: DARK, labelColor: DARK, linkTint: GREY_LINK },
      { id: 'publishing_advertising', col: 0, order: 2, type: 'source', label: ['Publishing', '& Advertising'], value: 0.1, notes: ['(12%) Y/Y', '74% gross margin'], color: DARK, labelColor: DARK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 4.7, notes: ['+9% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.1, notes: ['88% margin', 'Unchanged'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.6, notes: ['34% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.5 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.2, notes: ['27% margin', '(3pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: 'S&M', value: 1.3, notes: ['28% of revenue'] },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.8, notes: ['18% of revenue'] },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 0.3, notes: ['7% of revenue'] },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.042, valueText: '($42M)', notes: ['1% of revenue'] },
    ],
    links: [
      { source: 'digital_media', target: 'revenue', value: 3.4, sourceWidth: 240, targetWidth: 240, y0: 575, y1: 685, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.2, sourceWidth: 81, targetWidth: 84, y0: 862.5, y1: 847, sourceOrder: 0, targetOrder: 1 },
      { source: 'publishing_advertising', target: 'revenue', value: 0.1, sourceWidth: 4, targetWidth: 8, y0: 1049, y1: 893, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.1, sourceWidth: 290, targetWidth: 289, y0: 710, y1: 654.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 42, targetWidth: 39, y0: 876, y1: 967.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.6, sourceWidth: 109, targetWidth: 109, y0: 564.5, y1: 484.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.5, sourceWidth: 180, targetWidth: 179, y0: 709, y1: 777.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.2, sourceWidth: 86, targetWidth: 84, y0: 473, y1: 407, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.012, sourceWidth: 1, targetWidth: 1, y0: 505, y1: 449.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK, curve: { x0: 2158, c1x: 2228, c1y: 505, c2x: 2234, c2y: 450 } },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 23, targetWidth: 22, y0: 527.5, y1: 624, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 1.3, sourceWidth: 93, targetWidth: 93, y0: 734.5, y1: 774.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 54, targetWidth: 55, y0: 808, y1: 949.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.3, sourceWidth: 23, targetWidth: 22, y0: 846.5, y1: 1093, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.042, sourceWidth: 9, targetWidth: 3, y0: 862.5, y1: 1228.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Adobe · 2023 财年第一季度',
        meta: { title: 'Adobe 2023 财年第一季度利润表', period: '2023 财年第一季度', periodNote: '截至 2023 年 2 月', titleTextLength: 1540 },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { other_income: { label: '其他' } },
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +9%', '毛利率 96%'] },
          digital_experience: { label: '数字体验', notes: ['同比 +11%', '毛利率 66%'] },
          publishing_advertising: { label: ['出版', '与广告'], notes: ['同比 (12%)', '毛利率 74%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] }, gross_profit: { label: '毛利润', notes: ['利润率 88%', '同比持平'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 34%', '同比 (3 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 27%', '同比 (3 个百分点)'] },
          tax: { label: '税费' }, sm: { label: '销售与市场', notes: ['占收入 28%'] }, rnd: { label: '研发', notes: ['占收入 18%'] },
          ga: { label: '一般及行政', notes: ['占收入 7%'] }, amortization: { label: '摊销', notes: ['占收入 1%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
