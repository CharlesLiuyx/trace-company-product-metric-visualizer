/* ====================================================================
 * Airbnb - FY25 income statement ($B)
 * Reconstructed from input/processed/airbnb-fy25.png as a measured fixed
 * d3-Sankey layout with pure SVG/vector annotations.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const PINK = '#ff385c';
  const PINK_LABEL = '#ff375b';
  const PINK_LINK = '#f79dae';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2375;

  const airbnbLogo = `
    <rect x="0" y="0" width="244" height="244" rx="38" fill="${PINK_LABEL}"/>
    <path d="M122 48 C103 80 83 116 68 145 C56 169 73 193 99 183 C113 178 121 162 122 145 C123 162 131 178 145 183 C171 193 188 169 176 145 C161 116 141 80 122 48 Z" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M122 145 C99 126 101 96 122 96 C143 96 145 126 122 145 Z" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>`;

  const strokeIcon = (x, y, body, width = 96, height = 96) => `
    <g transform="translate(${x} ${y})" fill="none" stroke="#000000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
      <svg width="${width}" height="${height}" viewBox="0 0 96 96" overflow="visible">${body}</svg>
    </g>`;

  const northAmericaIcon = strokeIcon(87, 410, `
    <path d="M8 48 L8 26 L28 10 L48 26 L48 48"/><path d="M19 48 L19 32 L37 32 L37 48"/>
    <path d="M50 47 L74 47"/><path d="M66 47 L66 12"/><path d="M53 26 L66 16 L82 26"/><path d="M53 38 L66 29 L82 38"/>
    <path d="M6 64 C18 56 30 72 42 64 C54 56 66 72 84 64"/><path d="M6 82 C18 74 30 90 42 82 C54 74 66 90 84 82"/>
  `);
  const emeaIcon = strokeIcon(90, 675, `
    <path d="M8 75 L82 75"/><path d="M30 75 L30 16"/><path d="M16 32 L30 20 L46 32"/><path d="M16 49 L30 38 L46 49"/>
    <path d="M42 75 L76 30 L92 46"/><path d="M62 48 L76 30"/><path d="M44 88 L78 88"/>
  `);
  const latamIcon = strokeIcon(100, 900, `
    <path d="M12 36 C26 10 70 10 84 36"/><path d="M12 36 C32 41 45 41 84 36"/><path d="M48 19 L48 82"/>
    <path d="M48 38 C41 60 36 72 31 82"/><path d="M25 80 A11 11 0 1 0 25 58 A11 11 0 1 0 25 80"/>
    <path d="M29 36 C32 23 37 16 48 16"/><path d="M64 36 C62 23 56 16 48 16"/>
  `, 82, 96);
  const apacIcon = strokeIcon(94, 1066, `
    <path d="M48 17 C36 10 22 13 15 24"/><path d="M48 17 C60 9 76 12 84 24"/><path d="M48 17 C42 29 39 43 44 57"/><path d="M48 17 C56 31 59 43 54 58"/>
    <path d="M44 57 C30 54 18 61 10 74"/><path d="M54 58 C68 54 80 61 88 74"/><path d="M10 76 C22 68 34 84 46 76 C58 68 70 84 88 76"/><path d="M10 91 C22 83 34 99 46 91 C58 83 70 99 88 91"/>
  `);

  const statsCard = (x, y, width, lines) => `
    <g><rect x="${x}" y="${y}" width="${width}" height="148" rx="24" fill="${PINK_LABEL}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${y + 42 + index * 35}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${northAmericaIcon}${emeaIcon}${latamIcon}${apacIcon}
      ${statsCard(102, 1174, 304, [
        { text: zh ? '预订夜晚数' : 'Nights booked', size: 26, weight: 800 },
        { text: zh ? '5.33 亿' : '533M', size: 29, weight: 400 },
        { text: zh ? '同比 +8%' : '+8% Y/Y', size: 21, weight: 400 },
      ])}
      ${statsCard(417, 1174, 157, [
        { text: 'GBV', size: 25, weight: 800 },
        { text: '$91.3B', size: 25, weight: 400 },
        { text: zh ? '同比 +12%' : '+12% Y/Y', size: 19, weight: 400 },
      ])}
      <text x="340" y="1356" text-anchor="middle" font-size="30" font-weight="400" fill="${NOTE}">${zh ? 'GBV = 总预订价值' : 'GBV = Gross Booking Value'}</text>
    </g>`;

  const labelsEn = {
    north_america: { blocks: [
      { x: 434.5, top: 286, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38 }, { text: '+4% Y/Y', size: 29, color: NOTE }] },
      { x: 228, top: 407, anchor: 'start', lineGap: 10, lines: [{ text: 'North', size: 40, weight: 800 }, { text: 'America', size: 40, weight: 800 }] },
    ] },
    emea: { blocks: [
      { x: 434.5, top: 575, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38 }, { text: '+14% Y/Y', size: 29, color: NOTE }] },
      { x: 235, top: 719, anchor: 'start', lines: [{ text: 'EMEA', size: 40, weight: 800 }] },
    ] },
    latam: { blocks: [
      { x: 434.5, top: 851, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38 }, { text: '+20% Y/Y', size: 29, color: NOTE }] },
      { x: 219, top: 944, anchor: 'start', lines: [{ text: 'LATAM', size: 40, weight: 800 }] },
    ] },
    apac: { blocks: [
      { x: 434.5, top: 1025, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38 }, { text: '+17% Y/Y', size: 29, color: NOTE }] },
      { x: 238, top: 1117, anchor: 'start', lines: [{ text: 'APAC', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 901, top: 478, anchor: 'middle', lineGap: 10, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '+10% Y/Y', size: 29, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1368.5, top: 365, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '83% margin', size: 29, color: NOTE }, { text: '(0pp) Y/Y', size: 29, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1368.5, top: 1081, anchor: 'middle', lineGap: 9, lines: [{ text: 'Cost of', size: 38, weight: 800 }, { text: 'revenue', size: 38, weight: 800 }, { text: '$value', size: 38 }] }] },
    operating_profit: { blocks: [{ x: 1836, top: 279, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '21% margin', size: 29, color: NOTE }, { text: '(2pp) Y/Y', size: 29, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1836, top: 954, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating', size: 38, weight: 800 }, { text: 'expenses', size: 38, weight: 800 }, { text: '$value', size: 38 }] }] },
    other_income: { blocks: [{ x: 2183, top: 484, anchor: 'middle', lineGap: 9, lines: [{ text: 'Other', size: 32, weight: 800 }, { text: '$value', size: 32 }] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 329, anchor: 'start', lineGap: 10, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '21% margin', size: 29, color: NOTE }, { text: '(3pp) Y/Y', size: 29, color: NOTE }] }] },
    tax: { blocks: [{ x: 2407, top: 594, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 774, anchor: 'start', lineGap: 10, lines: [{ text: 'S&M ($2.6B)', size: 32, weight: 800 }, { text: '21% of revenue', size: 29, color: NOTE }, { text: '+2pp Y/Y', size: 29, color: NOTE }] }] },
    product: { blocks: [{ x: RIGHT_LABEL_X, top: 946, anchor: 'start', lineGap: 10, lines: [{ text: 'Product ($2.4B)', size: 32, weight: 800 }, { text: '19% of revenue', size: 29, color: NOTE }, { text: '+1pp Y/Y', size: 29, color: NOTE }] }] },
    support: { blocks: [{ x: RIGHT_LABEL_X, top: 1110, anchor: 'start', lineGap: 10, lines: [{ text: 'Support ($1.3B)', size: 32, weight: 800 }, { text: '11% of revenue', size: 29, color: NOTE }, { text: '(1pp) Y/Y', size: 29, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1262, anchor: 'start', lineGap: 10, lines: [{ text: 'G&A ($1.3B)', size: 32, weight: 800 }, { text: '11% of revenue', size: 29, color: NOTE }, { text: '+0pp Y/Y', size: 29, color: NOTE }] }] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, texts) => labelsZh[id].blocks[0].lines.forEach((line, index) => { line.text = texts[index]; });
  setLines('north_america', ['$value', '同比 +4%']); labelsZh.north_america.blocks[1].lines[0].text = '北美'; labelsZh.north_america.blocks[1].lines[1].text = '地区';
  setLines('emea', ['$value', '同比 +14%']); labelsZh.emea.blocks[1].lines[0].text = '欧洲、中东'; labelsZh.emea.blocks[1].lines.splice(1, 0, { text: '和非洲', size: 34, weight: 800 }); labelsZh.emea.blocks[1].x = 224; labelsZh.emea.blocks[1].top = 701; labelsZh.emea.blocks[1].lineGap = 8; labelsZh.emea.blocks[1].lines[0].size = 34;
  setLines('latam', ['$value', '同比 +20%']); labelsZh.latam.blocks[1].lines[0].text = '拉美';
  setLines('apac', ['$value', '同比 +17%']); labelsZh.apac.blocks[1].lines[0].text = '亚太';
  setLines('revenue', ['收入', '$value', '同比 +10%']);
  setLines('gross_profit', ['毛利润', '$value', '利润率 83%', '同比 (0 个百分点)']);
  setLines('cost_of_revenue', ['收入', '成本', '$value']);
  setLines('operating_profit', ['营业利润', '$value', '利润率 21%', '同比 (2 个百分点)']);
  setLines('operating_expenses', ['运营', '费用', '$value']);
  setLines('other_income', ['其他', '$value']);
  setLines('net_profit', ['净利润', '$value', '利润率 21%', '同比 (3 个百分点)']);
  setLines('tax', ['税费', '$value']);
  setLines('sm', ['销售与市场 ($2.6B)', '占收入 21%', '同比 +2 个百分点']);
  setLines('product', ['产品 ($2.4B)', '占收入 19%', '同比 +1 个百分点']);
  setLines('support', ['客服支持 ($1.3B)', '占收入 11%', '同比 (1 个百分点)']);
  setLines('ga', ['管理费用 ($1.3B)', '占收入 11%', '同比 +0 个百分点']);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'airbnb-fy25', name: 'Airbnb · FY25', company: 'Airbnb',
    meta: {
      company: 'Airbnb', title: 'Airbnb FY25 Income Statement', period: 'FY25', periodNote: 'Year ended Dec. 31, 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/airbnb-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 199, titleSize: 124, titleWeight: 800, titleTextLength: 1938,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 244, logoHeight: 244, logoY: 224, logoViewBox: '0 0 244 244', logoSvg: airbnbLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: PINK, label: PINK_LABEL }, hub: { node: PINK, label: PINK_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: PINK_LINK, hub: PINK_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 1,
      nodes: {
        north_america: { x: 399, y: 384, width: 71, height: 146 }, emea: { x: 399, y: 674, width: 71, height: 134 }, latam: { x: 399, y: 949, width: 71, height: 31 }, apac: { x: 399, y: 1122, width: 71, height: 31 },
        revenue: { x: 866, y: 630, width: 70, height: 348 }, gross_profit: { x: 1333, y: 557, width: 71, height: 288 }, cost_of_revenue: { x: 1333, y: 1012, width: 71, height: 57 },
        operating_profit: { x: 1801, y: 470, width: 70, height: 71 }, operating_expenses: { x: 1801, y: 724, width: 70, height: 215 }, other_income: { x: 2148, y: 457, width: 70, height: 15 },
        net_profit: { x: 2267, y: 360, width: 71, height: 70 }, tax: { x: 2267, y: 617, width: 71, height: 17 }, sm: { x: 2267, y: 761, width: 71, height: 73 }, product: { x: 2267, y: 930, width: 71, height: 65 }, support: { x: 2267, y: 1110, width: 71, height: 37 }, ga: { x: 2267, y: 1262, width: 71, height: 36 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'north_america', col: 0, order: 0, type: 'source', label: 'North America', value: 5.2, notes: ['+4% Y/Y'], color: PINK, labelColor: PINK_LABEL, linkTint: PINK_LINK },
      { id: 'emea', col: 0, order: 1, type: 'source', label: 'EMEA', value: 4.7, notes: ['+14% Y/Y'], color: PINK, labelColor: PINK_LABEL, linkTint: PINK_LINK },
      { id: 'latam', col: 0, order: 2, type: 'source', label: 'LATAM', value: 1.2, notes: ['+20% Y/Y'], color: PINK, labelColor: PINK_LABEL, linkTint: PINK_LINK },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.2, notes: ['+17% Y/Y'], color: PINK, labelColor: PINK_LABEL, linkTint: PINK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.2, notes: ['+10% Y/Y'], color: PINK, labelColor: PINK_LABEL, linkTint: PINK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.2, notes: ['83% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.5, notes: ['21% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 7.6, valueText: '($7.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.5, notes: ['21% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 2.6, notes: ['21% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 5, order: 3, type: 'cost', label: 'Product', value: 2.4, notes: ['19% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'support', col: 5, order: 4, type: 'cost', label: 'Support', value: 1.3, notes: ['11% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 1.3, notes: ['11% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'north_america', target: 'revenue', value: 5.2, sourceWidth: 146, targetWidth: 146, y0: 457, y1: 703, linkTint: PINK_LINK }, { source: 'emea', target: 'revenue', value: 4.7, sourceWidth: 134, targetWidth: 134, y0: 741, y1: 843, linkTint: PINK_LINK },
      { source: 'latam', target: 'revenue', value: 1.2, sourceWidth: 31, targetWidth: 34, y0: 964.5, y1: 927, linkTint: PINK_LINK }, { source: 'apac', target: 'revenue', value: 1.2, sourceWidth: 31, targetWidth: 34, y0: 1137.5, y1: 961, linkTint: PINK_LINK },
      { source: 'revenue', target: 'gross_profit', value: 10.2, sourceWidth: 288, targetWidth: 288, y0: 774, y1: 701, linkTint: GREEN_LINK }, { source: 'revenue', target: 'cost_of_revenue', value: 2.1, sourceWidth: 60, targetWidth: 57, y0: 948, y1: 1040.5, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.5, sourceWidth: 73, targetWidth: 71, y0: 593.5, y1: 505.5, linkTint: GREEN_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 7.6, sourceWidth: 215, targetWidth: 215, y0: 737.5, y1: 831.5, linkTint: RED_LINK },
      // The source-sized green ribbon carries operating profit after the $0.6B tax branch: $2.5B - $0.6B = $1.9B. Geometry remains reference-measured; value drives the node-side split share.
      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceWidth: 54, targetWidth: 55, y0: 497, y1: 387.5, linkTint: GREEN_LINK }, { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 17, targetWidth: 17, y0: 532.5, y1: 625.5, linkTint: RED_LINK }, { source: 'other_income', target: 'net_profit', value: 0.6, sourceWidth: 15, targetWidth: 15, y0: 464.5, y1: 422.5, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 2.6, sourceWidth: 73, targetWidth: 73, y0: 760.5, y1: 797.5, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'product', value: 2.4, sourceWidth: 65, targetWidth: 65, y0: 829.5, y1: 962.5, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'support', value: 1.3, sourceWidth: 37, targetWidth: 37, y0: 880.5, y1: 1128.5, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'ga', value: 1.3, sourceWidth: 40, targetWidth: 36, y0: 919, y1: 1280, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Airbnb · 2025 财年', meta: { title: 'Airbnb 2025 财年利润表', period: '2025 财年', periodNote: '截至 2025 年 12 月 31 日的年度', titleTextLength: 1200 }, annotationsSvg: annotations(true),
        nodes: {
          north_america: { label: '北美', notes: ['同比 +4%'] }, emea: { label: '欧洲、中东和非洲', notes: ['同比 +14%'] }, latam: { label: '拉美', notes: ['同比 +20%'] }, apac: { label: '亚太', notes: ['同比 +17%'] }, revenue: { label: '收入', notes: ['同比 +10%'] }, gross_profit: { label: '毛利润', notes: ['利润率 83%', '同比 (0 个百分点)'] }, cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 21%', '同比 (2 个百分点)'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 21%', '同比 (3 个百分点)'] }, tax: { label: '税费' }, sm: { label: '销售与市场', notes: ['占收入 21%', '同比 +2 个百分点'] }, product: { label: '产品', notes: ['占收入 19%', '同比 +1 个百分点'] }, support: { label: '客服支持', notes: ['占收入 11%', '同比 (1 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 11%', '同比 +0 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();
