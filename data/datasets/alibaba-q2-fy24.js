/* Alibaba - Q2 FY24 income statement (RMB B), reconstructed from
 * input/processed/alibaba-q2-fy24.png with Source-measured fixed geometry. */
(function () {
  const ORANGE = '#ff5a00';
  const ORANGE_LINK = '#f7ae85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  function annotations(copy) {
    return `
      <g data-typography-role="brand" font-family="Arial,sans-serif" font-weight="700">
        <g transform="translate(681 319)" fill="${ORANGE}">
          <path d="M21 42 C48 3 123 -6 126 30 C129 64 77 85 33 80 C8 77 -7 63 4 49 C17 31 46 23 78 21 C49 27 29 36 21 50 C13 68 56 70 87 55 C110 42 117 24 101 17 C78 6 41 17 21 42 Z"/>
          <path d="M65 39 l31 -12 -8 21 -9 -7 c-16 9 -32 12 -49 10 15 -3 28 -7 41 -15 Z" fill="#ffffff"/>
          <text x="151" y="82" font-size="111" textLength="512" lengthAdjust="spacingAndGlyphs">Alibaba</text>
        </g>
        <text x="260" y="286" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="40" fill="${TITLE}">${copy.inRmb}</text>
        <g fill="${ORANGE}">
          <text x="96" y="391" text-anchor="middle" font-size="34">淘宝</text>
          <text x="96" y="419" text-anchor="middle" font-size="20">Taobao</text>
          <text x="96" y="457" text-anchor="middle" font-size="32" fill="#ff1636">TMALL</text>
          <text x="74" y="601" font-size="25" fill="#2a278f">Lazada</text>
          <text x="28" y="644" font-size="27">AliExpress</text>
          <text x="28" y="687" font-size="33" fill="#242424">trendyol</text>
          <text x="28" y="774" font-size="28" fill="#0068ff">饿了么</text>
          <g transform="translate(70 786) scale(0.23)">${BUSINESS_ICONS.amap || ''}</g>
          <text x="26" y="925" font-size="32" fill="#0068ff">CAI</text>
          <text x="26" y="958" font-size="32" fill="#0068ff">NIAO 菜鸟</text>
          <g transform="translate(20 1046) scale(0.63)">${BUSINESS_ICONS.alibabaCloud || ''}</g>
          <text x="25" y="1194" font-size="37" fill="#ff4081">YOU</text>
          <text x="103" y="1194" font-size="37" fill="#2db7ea">KU</text>
          <text x="39" y="1310" font-size="25" fill="#ff1636">SUN ART</text>
          <g transform="translate(82 1317) scale(0.25)">${BUSINESS_ICONS.hema || ''}</g>
        </g>
      </g>`;
  }

  const label = (x, top, anchor, lines, semanticRole) => ({
    blocks: [{ x, top, anchor, lineGap: 8, ...(semanticRole ? { semanticRole } : {}), lines }],
  });
  const amountAndName = (amountX, amountTop, nameX, nameTop, nameLines) => ({
    blocks: [
      {
        x: amountX, top: amountTop, anchor: 'middle', lineGap: 8, semanticRole: 'amount',
        lines: [
          { text: '$value', size: 38, weight: 400 },
          { text: nameLines.note, size: 26, weight: 400, color: NOTE },
        ],
      },
      {
        x: nameX, top: nameTop, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label',
        lines: nameLines.name.map((text) => ({ text, size: 38, weight: 800 })),
      },
    ],
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q2-fy24',
    name: 'Alibaba · Q2 FY24',
    company: 'Alibaba',
    meta: {
      company: 'Alibaba',
      title: 'Alibaba Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Sept. 2023',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 90,
      titleWeight: 800,
      titleTextLength: 2190,
      periodX: 2448,
      periodY: 275,
      periodNoteY: 318,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: '#5e5e5e',
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: ORANGE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 38, value: 37, note: 26, lineGap: 7 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations({ inRmb: 'in RMB' }),
    layout: {
      scale: 1.1,
      nodes: {
        taobao_tmall: { x: 565, y: 356, width: 64, height: 107 },
        international_digital_commerce: { x: 565, y: 633, width: 64, height: 24 },
        local_services: { x: 565, y: 781, width: 64, height: 16 },
        cainiao: { x: 565, y: 911, width: 64, height: 24 },
        cloud: { x: 565, y: 1051, width: 64, height: 29 },
        digital_media: { x: 565, y: 1188, width: 64, height: 5 },
        all_others: { x: 565, y: 1305, width: 64, height: 52 },
        gross_revenue: { x: 903, y: 681, width: 64, height: 266 },
        revenue: { x: 1242, y: 713, width: 63, height: 247 },
        adjustments_unallocated: { x: 1242, y: 1061, width: 63, height: 17 },
        gross_profit: { x: 1573, y: 631, width: 64, height: 92 },
        cost_of_revenue: { x: 1576, y: 900, width: 63, height: 152 },
        operating_profit: { x: 1905, y: 564, width: 63, height: 35 },
        operating_expenses: { x: 1909, y: 745, width: 64, height: 54 },
        other_income: { x: 2152, y: 560, width: 63, height: 3 },
        net_profit: { x: 2256, y: 482, width: 64, height: 27 },
        interest_investments: { x: 2256, y: 699, width: 64, height: 5 },
        tax: { x: 2256, y: 780, width: 64, height: 3 },
        sm: { x: 2256, y: 876, width: 64, height: 26 },
        product_development: { x: 2256, y: 1005, width: 64, height: 15 },
        ga: { x: 2256, y: 1132, width: 64, height: 9 },
        amortization_intangibles: { x: 2256, y: 1259, width: 64, height: 3 },
      },
      labels: {
        taobao_tmall: amountAndName(597, 271, 533, 367, { name: ['Taobao', 'and Tmall'], note: '+4% Y/Y' }),
        international_digital_commerce: amountAndName(608, 549, 561, 605, { name: ['International', 'Digital Commerce'], note: '+53% Y/Y' }),
        local_services: amountAndName(597, 695, 550, 743, { name: ['Local', 'Services'], note: '+16% Y/Y' }),
        cainiao: amountAndName(606, 820, 559, 885, { name: ['Cainiao'], note: '+25% Y/Y' }),
        cloud: amountAndName(597, 960, 538, 1043, { name: ['Cloud'], note: '+2% Y/Y' }),
        digital_media: amountAndName(597, 1105, 541, 1159, { name: ['Digital Media'], note: '+11% Y/Y' }),
        all_others: amountAndName(590, 1207, 543, 1290, { name: ['All others'], note: '+0% Y/Y' }),
        gross_revenue: { blocks: [] },
        revenue: label(1274, 571, 'middle', [
          { text: 'Revenue', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 },
          { text: '+9% Y/Y', size: 26, weight: 400, color: NOTE },
        ]),
        adjustments_unallocated: label(1274, 1102, 'middle', [
          { text: 'Adjustments', size: 35, weight: 800 }, { text: '& unallocated', size: 35, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ]),
        gross_profit: label(1605, 459, 'middle', [
          { text: 'Gross profit', size: 37, weight: 800 }, { text: '$value', size: 37, weight: 400 },
          { text: '38% margin', size: 26, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 26, weight: 400, color: NOTE },
        ]),
        cost_of_revenue: label(1607, 1074, 'middle', [
          { text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ]),
        operating_profit: label(1937, 389, 'middle', [
          { text: 'Operating profit', size: 36, weight: 800 }, { text: '$value', size: 36, weight: 400 },
          { text: '15% margin', size: 26, weight: 400, color: NOTE },
          { text: '+3pp Y/Y', size: 26, weight: 400, color: NOTE },
        ]),
        operating_expenses: label(1941, 822, 'middle', [
          { text: 'Operating', size: 35, weight: 800 }, { text: 'expenses', size: 35, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ]),
        other_income: label(2183, 579, 'middle', [
          { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ]),
        net_profit: label(2344, 480, 'start', [
          { text: 'Net profit', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 },
          { text: '12% margin', size: 26, weight: 400, color: NOTE },
          { text: '+23pp Y/Y', size: 26, weight: 400, color: NOTE },
        ], 'top-aligned-side-label'),
        interest_investments: label(2336, 675, 'start', [
          { text: 'Interest &', size: 30, weight: 800 }, { text: 'investments (4.4B)', size: 30, weight: 800 },
        ], 'top-aligned-side-label'),
        tax: label(2332, 772, 'start', [{ text: 'Tax (5.8B)', size: 30, weight: 800 }], 'top-aligned-side-label'),
        sm: label(2339, 883, 'start', [
          { text: 'Sales &', size: 30, weight: 800 }, { text: 'marketing (25.5B)', size: 30, weight: 800 },
        ], 'top-aligned-side-label'),
        product_development: label(2334, 979, 'start', [
          { text: 'Product', size: 30, weight: 800 }, { text: 'development (14.2B)', size: 30, weight: 800 },
        ], 'top-aligned-side-label'),
        ga: label(2336, 1108, 'start', [
          { text: 'General &', size: 30, weight: 800 }, { text: 'Administrative (9.4B)', size: 30, weight: 800 },
        ], 'top-aligned-side-label'),
        amortization_intangibles: label(2339, 1230, 'start', [
          { text: 'Amortization', size: 30, weight: 800 }, { text: 'of intangibles (2.4B)', size: 30, weight: 800 },
        ], 'top-aligned-side-label'),
      },
    },
    nodes: [
      { id: 'taobao_tmall', col: 0, order: 0, type: 'source', label: ['Taobao', 'and Tmall'], value: 97.7, valueText: '97.7B', notes: ['+4% Y/Y'] },
      { id: 'international_digital_commerce', col: 0, order: 1, type: 'source', label: ['International', 'Digital Commerce'], value: 24.5, valueText: '24.5B', notes: ['+53% Y/Y'] },
      { id: 'local_services', col: 0, order: 2, type: 'source', label: ['Local', 'Services'], value: 15.6, valueText: '15.6B', notes: ['+16% Y/Y'] },
      { id: 'cainiao', col: 0, order: 3, type: 'source', label: 'Cainiao', value: 22.8, valueText: '22.8B', notes: ['+25% Y/Y'] },
      { id: 'cloud', col: 0, order: 4, type: 'source', label: 'Cloud', value: 27.6, valueText: '27.6B', notes: ['+2% Y/Y'] },
      { id: 'digital_media', col: 0, order: 5, type: 'source', label: 'Digital Media', value: 5.8, valueText: '5.8B', notes: ['+11% Y/Y'] },
      { id: 'all_others', col: 0, order: 6, type: 'source', label: 'All others', value: 48.1, valueText: '48.1B', notes: ['+0% Y/Y'] },
      { id: 'gross_revenue', col: 1, order: 0, type: 'source', label: '', value: 242.1, valueText: '242.1B' },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 224.8, valueText: '224.8B', notes: ['+9% Y/Y'] },
      { id: 'adjustments_unallocated', col: 2, order: 1, type: 'cost', label: ['Adjustments', '& unallocated'], value: -17.3, valueText: '(17.3B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 85.1, valueText: '85.1B', notes: ['38% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 139.7, valueText: '(139.7B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 33.6, valueText: '33.6B', notes: ['15% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 51.5, valueText: '(51.5B)' },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 3.3, valueText: '3.3B' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 26.7, valueText: '26.7B', notes: ['12% margin', '+23pp Y/Y'] },
      { id: 'interest_investments', col: 6, order: 1, type: 'cost', label: ['Interest &', 'investments'], value: 4.4, valueText: '(4.4B)' },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 5.8, valueText: '(5.8B)' },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: ['Sales &', 'marketing'], value: 25.5, valueText: '(25.5B)' },
      { id: 'product_development', col: 6, order: 4, type: 'cost', label: ['Product', 'development'], value: 14.2, valueText: '(14.2B)' },
      { id: 'ga', col: 6, order: 5, type: 'cost', label: ['General &', 'Administrative'], value: 9.4, valueText: '(9.4B)' },
      { id: 'amortization_intangibles', col: 6, order: 6, type: 'cost', label: ['Amortization', 'of intangibles'], value: 2.4, valueText: '(2.4B)' },
    ],
    links: [
      { source: 'taobao_tmall', target: 'gross_revenue', value: 97.7, sourceWidth: 107, targetWidth: 107, targetOrder: 0 },
      { source: 'international_digital_commerce', target: 'gross_revenue', value: 24.5, sourceWidth: 24, targetWidth: 27, targetOrder: 1 },
      { source: 'local_services', target: 'gross_revenue', value: 15.6, sourceWidth: 16, targetWidth: 17, targetOrder: 2 },
      { source: 'cainiao', target: 'gross_revenue', value: 22.8, sourceWidth: 24, targetWidth: 25, targetOrder: 3 },
      { source: 'cloud', target: 'gross_revenue', value: 27.6, sourceWidth: 29, targetWidth: 30, targetOrder: 4 },
      { source: 'digital_media', target: 'gross_revenue', value: 5.8, sourceWidth: 5, targetWidth: 7, targetOrder: 5 },
      { source: 'all_others', target: 'gross_revenue', value: 48.1, sourceWidth: 52, targetWidth: 53, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 224.8, width: 247, sourceOrder: 0 },
      { source: 'gross_revenue', target: 'adjustments_unallocated', value: 17.3, sourceWidth: 19, targetWidth: 17, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 85.1, width: 92, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 139.7, sourceWidth: 155, targetWidth: 152, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 33.6, width: 35, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 51.5, sourceWidth: 57, targetWidth: 54, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 23.4, sourceWidth: 24, targetWidth: 24, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest_investments', value: 4.4, width: 5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 5.8, sourceWidth: 6, targetWidth: 3, sourceOrder: 2 },
      { source: 'other_income', target: 'net_profit', value: 3.3, sourceWidth: 3, targetWidth: 3, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 25.5, width: 26, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'product_development', value: 14.2, width: 15, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 9.4, width: 9, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization_intangibles', value: 2.4, sourceWidth: 4, targetWidth: 3, sourceOrder: 3 },
    ],
    i18n: {
      preservedAnnotationText: ['Taobao', 'TMALL', 'Lazada', 'AliExpress', 'trendyol', 'YOU', 'KU', 'SUN ART', 'CAI', 'NIAO 菜鸟', 'Alibaba Cloud'],
      zh: {
        name: 'Alibaba · 2024 财年第二季度',
        meta: {
          title: 'Alibaba 2024 财年第二季度利润表',
          period: '2024 财年第二季度',
          periodNote: '截至 2023 年 9 月',
          titleSize: 76,
          titleTextLength: 2050,
          periodX: 2490,
        },
        annotationsSvg: annotations({ inRmb: '单位：人民币' }),
        nodes: {
          taobao_tmall: { label: '淘宝与天猫', notes: ['同比 +4%'] },
          international_digital_commerce: { label: '国际数字商业', notes: ['同比 +53%'] },
          local_services: { label: '本地生活服务', notes: ['同比 +16%'] },
          cainiao: { label: '菜鸟', notes: ['同比 +25%'] }, cloud: { label: '云', notes: ['同比 +2%'] },
          digital_media: { label: '数字媒体', notes: ['同比 +11%'] }, all_others: { label: '所有其他业务', notes: ['同比 +0%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] }, adjustments_unallocated: { label: '调整及未分配项目' },
          gross_profit: { label: '毛利润', notes: ['利润率 38%', '同比 +1 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +3 个百分点'] }, operating_expenses: { label: '运营费用' },
          other_income: { label: '其他收益' }, net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +23 个百分点'] },
          interest_investments: { label: '利息及投资损失' }, tax: { label: '税费' }, sm: { label: '销售与市场' },
          product_development: { label: '产品开发' }, ga: { label: '一般及行政' }, amortization_intangibles: { label: '无形资产摊销' },
        },
        layout: { labels: {
          taobao_tmall: amountAndName(597, 271, 533, 367, { name: ['淘宝', '与天猫'], note: '同比 +4%' }),
          international_digital_commerce: amountAndName(608, 549, 561, 605, { name: ['国际', '数字商业'], note: '同比 +53%' }),
          local_services: amountAndName(597, 695, 550, 743, { name: ['本地生活', '服务'], note: '同比 +16%' }),
          cainiao: amountAndName(606, 820, 559, 885, { name: ['菜鸟'], note: '同比 +25%' }),
          cloud: amountAndName(597, 960, 538, 1043, { name: ['云'], note: '同比 +2%' }),
          digital_media: amountAndName(597, 1105, 541, 1159, { name: ['数字媒体'], note: '同比 +11%' }),
          all_others: amountAndName(590, 1207, 543, 1290, { name: ['所有其他业务'], note: '同比 +0%' }),
          revenue: label(1274, 571, 'middle', [
            { text: '收入', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 },
            { text: '同比 +9%', size: 26, weight: 400, color: NOTE },
          ]),
          adjustments_unallocated: label(1274, 1102, 'middle', [
            { text: '调整及', size: 35, weight: 800 }, { text: '未分配项目', size: 35, weight: 800 },
            { text: '$value', size: 34, weight: 400 },
          ]),
          gross_profit: label(1605, 459, 'middle', [
            { text: '毛利润', size: 37, weight: 800 }, { text: '$value', size: 37, weight: 400 },
            { text: '利润率 38%', size: 26, weight: 400, color: NOTE },
            { text: '同比 +1 个百分点', size: 26, weight: 400, color: NOTE },
          ]),
          cost_of_revenue: label(1607, 1074, 'middle', [
            { text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 },
            { text: '$value', size: 34, weight: 400 },
          ]),
          operating_profit: label(1937, 389, 'middle', [
            { text: '营业利润', size: 36, weight: 800 }, { text: '$value', size: 36, weight: 400 },
            { text: '利润率 15%', size: 26, weight: 400, color: NOTE },
            { text: '同比 +3 个百分点', size: 26, weight: 400, color: NOTE },
          ]),
          operating_expenses: label(1941, 822, 'middle', [
            { text: '运营', size: 35, weight: 800 }, { text: '费用', size: 35, weight: 800 },
            { text: '$value', size: 34, weight: 400 },
          ]),
          other_income: label(2183, 579, 'middle', [
            { text: '其他收益', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
          ]),
          net_profit: label(2344, 480, 'start', [
            { text: '净利润', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 },
            { text: '利润率 12%', size: 26, weight: 400, color: NOTE },
            { text: '同比 +23 个百分点', size: 26, weight: 400, color: NOTE },
          ], 'top-aligned-side-label'),
          interest_investments: label(2336, 675, 'start', [
            { text: '利息及', size: 30, weight: 800 }, { text: '投资损失 (4.4B)', size: 30, weight: 800 },
          ], 'top-aligned-side-label'),
          tax: label(2332, 772, 'start', [{ text: '税费 (5.8B)', size: 30, weight: 800 }], 'top-aligned-side-label'),
          sm: label(2339, 883, 'start', [
            { text: '销售与', size: 30, weight: 800 }, { text: '市场 (25.5B)', size: 30, weight: 800 },
          ], 'top-aligned-side-label'),
          product_development: label(2334, 979, 'start', [
            { text: '产品', size: 30, weight: 800 }, { text: '开发 (14.2B)', size: 30, weight: 800 },
          ], 'top-aligned-side-label'),
          ga: label(2336, 1108, 'start', [
            { text: '一般及', size: 30, weight: 800 }, { text: '行政 (9.4B)', size: 30, weight: 800 },
          ], 'top-aligned-side-label'),
          amortization_intangibles: label(2339, 1230, 'start', [
            { text: '无形资产', size: 30, weight: 800 }, { text: '摊销 (2.4B)', size: 30, weight: 800 },
          ], 'top-aligned-side-label'),
        } },
      },
    },
  });
})();
