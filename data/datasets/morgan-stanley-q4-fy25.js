/* Morgan Stanley Q4 FY25 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2441;

  const line = (text, size, weight = 800, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const annotations = (zh = false) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="89" y="276" font-size="38" font-weight="800" fill="${TITLE}">${zh ? '按业务分部' : 'By Business Segment'}</text>
      <text x="606" y="397" font-family="Arial,Helvetica,sans-serif" font-size="126" font-weight="400" textLength="760" lengthAdjust="spacingAndGlyphs" fill="${BLACK}" data-typography-role="brand">Morgan Stanley</text>

      <g fill="${BLACK}">
        <rect x="123" y="1108" width="242" height="149" rx="30"/>
        <rect x="373" y="1108" width="272" height="149" rx="30"/>
      </g>
      <g fill="#ffffff" text-anchor="middle">
        <text x="244" y="1160" font-size="29" font-weight="800">${zh ? 'CET1 比率' : 'CET1 ratio'}</text>
        <text x="244" y="1199" font-size="28" font-weight="400">15.0%</text>
        <text x="244" y="1231" font-size="${zh ? '22' : '24'}" font-weight="400">${zh ? '同比 (0.9 个百分点)' : '(0.9pp) Y/Y'}</text>
        <text x="509" y="1160" font-size="29" font-weight="800">ROTCE</text>
        <text x="509" y="1199" font-size="28" font-weight="400">21.8%</text>
        <text x="509" y="1231" font-size="${zh ? '22' : '24'}" font-weight="400">${zh ? '同比 +1.6 个百分点' : '+1.6pp Y/Y'}</text>
      </g>
      <g fill="${NOTE}" font-weight="400">
        <text x="232" y="1296" font-size="${zh ? '23' : '28'}">${zh ? 'CET1 = 普通股一级资本充足率' : 'CET1 = Common Equity Tier 1'}</text>
        <text x="78" y="1343" font-size="${zh ? '23' : '28'}">${zh ? 'ROTCE = 平均有形普通股权益回报率' : 'ROTCE = Return on average tangible common equity'}</text>
      </g>
    </g>`;

  const labels = (zh = false) => ({
    segment_revenue: { blocks: [] },
    institutional_securities: {
      blocks: [
        block(284, 477, [line(zh ? '机构证券' : 'Institutional', 40), ...(zh ? [] : [line('Securities', 40)]), line(zh ? '净利率 34%' : '34% net margin', 28, 400, NOTE)], 'end'),
        block(410, 343, [line('$value', 39, 400), line(zh ? '同比 +9%' : '+9% Y/Y', 28, 400, NOTE)], 'middle', 9),
      ],
    },
    wealth_management: {
      blocks: [
        block(284, 754, [line(zh ? '财富管理' : 'Wealth', 40), ...(zh ? [] : [line('Management', 40)]), line(zh ? '净利率 31%' : '31% net margin', 28, 400, NOTE)], 'end'),
        block(410, 647, [line('$value', 39, 400), line(zh ? '同比 +13%' : '+13% Y/Y', 28, 400, NOTE)], 'middle', 9),
      ],
    },
    investment_management: {
      blocks: [
        block(284, 971, [line(zh ? '投资管理' : 'Investment', 40), ...(zh ? [] : [line('Management', 40)]), line(zh ? '净利率 27%' : '27% net margin', 28, 400, NOTE)], 'end'),
        block(410, 941, [line('$value', 39, 400), line(zh ? '同比 +5%' : '+5% Y/Y', 28, 400, NOTE)], 'middle', 9),
      ],
    },
    revenue: { blocks: [block(1343, 531, [line(zh ? '收入' : 'Revenue', 41), line('$value', 39, 400), line(zh ? '同比 +10%' : '+10% Y/Y', 28, 400, NOTE)], 'middle', 10)] },
    eliminations: { blocks: [block(1342, 1215, [line(zh ? '抵销' : 'Eliminations', 34, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 8)] },
    pretax_income: { blocks: [block(1810, 419, [line(zh ? '税前利润' : 'Pretax income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL)], 'middle', 10)] },
    net_income: { blocks: [block(2345, 271, [line(zh ? '净利润' : 'Net income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '同比 +19%' : '+19% Y/Y', 28, 400, NOTE)], 'start', 10)] },
    tax: { blocks: [block(2439, 435, [line(zh ? '税费' : 'Tax', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 'middle', 8)] },
    non_interest_expenses: { blocks: [block(1810, 1122, [line(zh ? '非利息' : 'Non interest', 35, 800, RED_LABEL), line(zh ? '费用' : 'expenses', 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 'middle', 8)] },
    operating_expenses: { blocks: [] },
    compensation_benefits: { blocks: [block(RIGHT_LABEL_X, 597, [line(zh ? '薪酬与福利' : 'Compensation', 31, 800, RED_LABEL), ...(zh ? [] : [line('& benefits', 31, 800, RED_LABEL)]), line('$value', 30, 400, RED_LABEL)], 'middle', 8)] },
    information_communications: { blocks: [block(2475, 809, [line(zh ? '信息与通信' : 'Information &', 30, 800, RED_LABEL), ...(zh ? [] : [line('communications', 30, 800, RED_LABEL)]), line('$value', 29, 400, RED_LABEL)], 'middle', 8)] },
    brokerage_clearing_exchange: { blocks: [block(2475, 925, [line(zh ? '经纪、清算与' : 'Brokerage, clearing', 30, 800, RED_LABEL), line(zh ? '交易所费用' : '& exchange fees', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'middle', 8)] },
    professional_services: { blocks: [block(RIGHT_LABEL_X, 1042, [line(zh ? '专业服务' : 'Professional', 30, 800, RED_LABEL), ...(zh ? [] : [line('services', 30, 800, RED_LABEL)]), line('$value', 29, 400, RED_LABEL)], 'middle', 8)] },
    occupancy: { blocks: [block(RIGHT_LABEL_X, 1155, [line(zh ? '场地占用' : 'Occupancy', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'middle', 8)] },
    marketing_business_development: { blocks: [block(RIGHT_LABEL_X, 1264, [line(zh ? '市场与' : 'Marketing &', 30, 800, RED_LABEL), line(zh ? '业务开发' : 'business dev.', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'middle', 8)] },
    other_expenses: { blocks: [block(RIGHT_LABEL_X, 1360, [line(zh ? '其他' : 'Other', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'middle', 8)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'morgan-stanley-q4-fy25',
    name: 'Morgan Stanley · Q4 FY25',
    company: 'Morgan Stanley',
    meta: {
      company: 'Morgan Stanley',
      title: 'Morgan Stanley Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/morgan-stanley-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 196, titleSize: 115, titleWeight: 800, titleTextLength: 2492,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', nodeRadius: 0,
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations(),
    layout: {
      scale: 18.4,
      nodes: {
        institutional_securities: { x: 373, y: 432, width: 73, height: 168 },
        wealth_management: { x: 373, y: 734, width: 73, height: 158 },
        investment_management: { x: 373, y: 1028, width: 73, height: 35 },
        segment_revenue: { x: 840, y: 600, width: 73, height: 360 },
        revenue: { x: 1307, y: 671, width: 73, height: 356 },
        eliminations: { x: 1307, y: 1185, width: 73, height: 3 },
        pretax_income: { x: 1775, y: 533, width: 73, height: 115 },
        non_interest_expenses: { x: 1775, y: 867, width: 73, height: 241 },
        operating_expenses: { x: 1775, y: 0, width: 73, height: 0 },
        net_income: { x: 2241, y: 298, width: 73, height: 90 },
        tax: { x: 2241, y: 462, width: 73, height: 28 },
        compensation_benefits: { x: 2241, y: 566, width: 73, height: 142 },
        information_communications: { x: 2241, y: 782, width: 73, height: 25 },
        brokerage_clearing_exchange: { x: 2241, y: 896, width: 73, height: 23 },
        professional_services: { x: 2241, y: 1014, width: 73, height: 17 },
        occupancy: { x: 2241, y: 1125, width: 73, height: 11 },
        marketing_business_development: { x: 2241, y: 1236, width: 73, height: 8 },
        other_expenses: { x: 2241, y: 1324, width: 73, height: 24 },
      },
      labels: labels(),
    },
    nodes: [
      { id: 'institutional_securities', col: 0, order: 0, type: 'source', label: ['Institutional', 'Securities'], value: 7.9, notes: ['+9% Y/Y', '34% net margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'wealth_management', col: 0, order: 1, type: 'source', label: ['Wealth', 'Management'], value: 8.4, notes: ['+13% Y/Y', '31% net margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'investment_management', col: 0, order: 2, type: 'source', label: ['Investment', 'Management'], value: 1.7, notes: ['+5% Y/Y', '27% net margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'segment_revenue', col: 1, order: 0, type: 'hub', label: '', value: 18.0, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 17.9, notes: ['+10% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 5.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'non_interest_expenses', col: 3, order: 1, type: 'cost', label: ['Non interest', 'expenses'], value: 12.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: '', value: 0, color: '#f2f2f2', labelColor: '#f2f2f2', linkTint: RED_LINK },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 4.4, notes: ['+19% Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'compensation_benefits', col: 4, order: 2, type: 'cost', label: ['Compensation', '& benefits'], value: 7.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'information_communications', col: 4, order: 3, type: 'cost', label: ['Information &', 'communications'], value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'brokerage_clearing_exchange', col: 4, order: 4, type: 'cost', label: ['Brokerage, clearing', '& exchange fees'], value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'professional_services', col: 4, order: 5, type: 'cost', label: ['Professional', 'services'], value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'occupancy', col: 4, order: 6, type: 'cost', label: 'Occupancy', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_business_development', col: 4, order: 7, type: 'cost', label: ['Marketing &', 'business dev.'], value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 4, order: 8, type: 'cost', label: 'Other', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'institutional_securities', target: 'segment_revenue', value: 7.9, width: 168, sourceOrder: 0, targetOrder: 0 },
      { source: 'wealth_management', target: 'segment_revenue', value: 8.4, width: 158, sourceOrder: 0, targetOrder: 1 },
      { source: 'investment_management', target: 'segment_revenue', value: 1.7, width: 34, sourceOrder: 0, targetOrder: 2 },
      { source: 'segment_revenue', target: 'revenue', value: 17.9, width: 357, targetWidth: 356, sourceOrder: 0, targetOrder: 0 },
      { source: 'segment_revenue', target: 'eliminations', value: 0.2, width: 3, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'pretax_income', value: 5.8, width: 115, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'non_interest_expenses', value: 12.1, width: 241, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_income', value: 4.4, width: 90, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 1.3, width: 28, sourceWidth: 25, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'non_interest_expenses', target: 'compensation_benefits', value: 7.1, width: 142, sourceWidth: 137, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'non_interest_expenses', target: 'information_communications', value: 1.2, width: 25, sourceWidth: 24, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'non_interest_expenses', target: 'brokerage_clearing_exchange', value: 1.1, width: 23, sourceWidth: 22, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'non_interest_expenses', target: 'professional_services', value: 0.8, width: 17, sourceWidth: 16, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'non_interest_expenses', target: 'occupancy', value: 0.5, width: 11, sourceWidth: 11, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'non_interest_expenses', target: 'marketing_business_development', value: 0.4, width: 8, sourceWidth: 8, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'non_interest_expenses', target: 'other_expenses', value: 1.1, width: 24, sourceWidth: 23, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '摩根士丹利 · 2025 财年第四季度',
        meta: { title: '摩根士丹利 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2280 },
        annotationsSvg: annotations(true),
        nodes: {
          institutional_securities: { label: '机构证券', notes: ['同比 +9%', '净利率 34%'] },
          wealth_management: { label: '财富管理', notes: ['同比 +13%', '净利率 31%'] },
          investment_management: { label: '投资管理', notes: ['同比 +5%', '净利率 27%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] }, eliminations: { label: '抵销' }, pretax_income: { label: '税前利润' },
          non_interest_expenses: { label: ['非利息', '费用'] }, operating_expenses: { label: '' }, net_income: { label: '净利润', notes: ['同比 +19%'] }, tax: { label: '税费' },
          compensation_benefits: { label: '薪酬与福利' }, information_communications: { label: '信息与通信' }, brokerage_clearing_exchange: { label: '经纪、清算与交易所费用' },
          professional_services: { label: '专业服务' }, occupancy: { label: '场地占用' }, marketing_business_development: { label: '市场与业务开发' }, other_expenses: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
