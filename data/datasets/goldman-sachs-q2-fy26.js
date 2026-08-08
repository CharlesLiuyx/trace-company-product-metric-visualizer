/* Goldman Sachs — Q2 FY26 income statement ($B).
 * Reconstructed from input/processed/goldman-sachs-q2-fy26.png as a measured,
 * fixed-layout d3-sankey with pure SVG/text annotations. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#6b96c3';
  const BLUE_LABEL = '#6a96c3';
  const BLUE_LINK = '#b4c9dc';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2497;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="123" y="256" font-size="39" font-weight="800" fill="${TITLE}">${zh ? '按业务分部' : 'By Business Segment'}</text>
      <g fill="${BLUE}">
        <rect x="118" y="1133" width="240" height="148" rx="29"/>
        <rect x="368" y="1133" width="349" height="148" rx="29"/>
      </g>
      <g fill="#ffffff" text-anchor="middle">
        <text x="238" y="1186" font-size="29" font-weight="800">${zh ? 'CET1 比率' : 'CET1 ratio'}</text>
        <text x="238" y="1226" font-size="28" font-weight="400">12.9%</text>
        <text x="238" y="1258" font-size="22" font-weight="400">${zh ? '同比 (1.4 个百分点)' : '(1.4pp) Y/Y'}</text>
        <text x="542.5" y="1186" font-size="29" font-weight="800">${zh ? '年化 ROE' : 'Annualized ROE'}</text>
        <text x="542.5" y="1226" font-size="28" font-weight="400">23.5%</text>
        <text x="542.5" y="1258" font-size="22" font-weight="400">${zh ? '同比 +10.7 个百分点' : '+10.7pp Y/Y'}</text>
      </g>
      <g fill="${NOTE}" font-size="28" font-weight="400">
        <text x="244" y="1320">${zh ? 'CET1 = 普通股一级资本' : 'CET1 = Common Equity Tier 1'}</text>
        <text x="162" y="1352">${zh ? 'ROE = 平均普通股股东权益回报率' : 'ROE = Return on average common equity'}</text>
      </g>
    </g>`;

  const labelBlock = (x, top, lines, anchor = 'middle', lineGap = 9) => ({
    blocks: [{ x, top, anchor, lineGap, lines }],
  });

  const labels = (zh) => ({
    platform_solutions: {
      blocks: [
        { x: 427, top: 976, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: zh ? '同比 (64%)' : '(64%) Y/Y', size: 28, weight: 400, color: NOTE, textLength: zh ? undefined : 124 }] },
        { x: 385, top: 1052, anchor: 'end', lineGap: 8, lines: [{ text: zh ? '平台解决方案' : 'Platform Solutions', size: 37, weight: 800, textLength: zh ? undefined : 376 }, { text: zh ? '净利率 (19%)' : '(19%) net margin', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    global_banking_markets: {
      blocks: [
        { x: 428, top: 377, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: zh ? '同比 +53%' : '+53% Y/Y', size: 28, weight: 400, color: NOTE }] },
        { x: 376, top: 525, anchor: 'end', lineGap: 13, lines: [{ text: zh ? '全球银行与市场' : 'Global Banking &', size: 38, weight: 800 }, ...(zh ? [] : [{ text: 'Markets', size: 38, weight: 800 }]), { text: zh ? '净利率 37%' : '37% net margin', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    asset_wealth_management: {
      blocks: [
        { x: 417, top: 761, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: zh ? '同比 +20%' : '+20% Y/Y', size: 28, weight: 400, color: NOTE }] },
        { x: 365, top: 828, anchor: 'end', lineGap: 13, lines: [{ text: zh ? '资产与财富管理' : 'Asset & Wealth', size: 38, weight: 800 }, ...(zh ? [] : [{ text: 'Management', size: 38, weight: 800 }]), { text: zh ? '净利率 19%' : '19% net margin', size: 28, weight: 400, color: NOTE }] },
      ],
    },
    revenue: labelBlock(1074, 514, [
      { text: zh ? '收入' : 'Revenue', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: zh ? '同比 +39%' : '+39% Y/Y', size: 28, weight: 400, color: NOTE },
    ], 'middle', 10),
    pretax_income: labelBlock(1688, 366, [
      { text: zh ? '税前利润' : 'Pretax income', size: 39, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
    ], 'middle', 10),
    operating_expenses: labelBlock(1673, 1054.5, [
      { text: zh ? '运营费用' : 'Operating', size: 38, weight: 800 },
      ...(zh ? [] : [{ text: 'expenses', size: 38, weight: 800 }]),
      { text: '$value', size: 36, weight: 400 },
    ], 'middle', 10),
    provision_for_credit_loss: labelBlock(1673, 1236, [
      { text: zh ? '信用损失拨备' : 'Provision for', size: zh ? 33 : 35, weight: 800 },
      ...(zh ? [] : [{ text: 'credit loss', size: 35, weight: 800 }]),
      { text: '$value', size: 34, weight: 400 },
    ], 'middle', 10),
    net_income: labelBlock(2378, 245, [
      { text: zh ? '净利润' : 'Net income', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: zh ? '同比 +78%' : '+78% Y/Y', size: 28, weight: 400, color: NOTE },
    ], 'start', 10),
    tax: labelBlock(2440, 414, [
      { text: zh ? '税费' : 'Tax', size: 31, weight: 800 },
      { text: '$value', size: 30, weight: 400 },
    ], 'start', 8),
    compensation_benefits: labelBlock(RIGHT_LABEL_X, 592.5, [
      { text: zh ? '薪酬与福利' : 'Compensation', size: 30, weight: 800 },
      ...(zh ? [] : [{ text: '& benefits', size: 30, weight: 800 }]),
      { text: '$value', size: 29, weight: 400 },
    ], 'middle', 8),
    transaction_based: labelBlock(RIGHT_LABEL_X, 737, [
      { text: zh ? '交易相关' : 'Transaction based', size: 30, weight: 800 },
      { text: '$value', size: 29, weight: 400 },
    ], 'middle', 8),
    market_development: labelBlock(RIGHT_LABEL_X, 821, [
      { text: zh ? '市场开发' : 'Market dev.', size: 30, weight: 800 },
      { text: '$value', size: 29, weight: 400 },
    ], 'middle', 8),
    communication_technology: labelBlock(RIGHT_LABEL_X, 891.5, [
      { text: zh ? '通信与技术' : 'Communication,', size: 30, weight: 800 },
      ...(zh ? [] : [{ text: 'Technology', size: 30, weight: 800 }]),
      { text: '$value', size: 29, weight: 400 },
    ], 'middle', 8),
    da: labelBlock(RIGHT_LABEL_X, 994, [
      { text: zh ? '折旧与摊销' : 'D&A', size: 30, weight: 800 },
      { text: '$value', size: 29, weight: 400 },
    ], 'middle', 8),
    occupancy: labelBlock(RIGHT_LABEL_X, 1082, [
      { text: zh ? '场地占用' : 'Occupancy', size: 30, weight: 800 },
      { text: '$value', size: 29, weight: 400 },
    ], 'middle', 8),
    professional_fees: labelBlock(RIGHT_LABEL_X, 1174, [
      { text: zh ? '专业费用' : 'Professional fees', size: 30, weight: 800 },
      { text: '$value', size: 29, weight: 400 },
    ], 'middle', 8),
    other: labelBlock(RIGHT_LABEL_X, 1268, [
      { text: zh ? '其他' : 'Other', size: 30, weight: 800 },
      { text: '$value', size: 29, weight: 400 },
    ], 'middle', 8),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'goldman-sachs-q2-fy26',
    name: 'Goldman Sachs · Q2 FY26',
    company: 'Goldman Sachs',
    meta: {
      company: 'Goldman Sachs',
      title: 'Goldman Sachs Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/goldman-sachs-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2508,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 244,
      logoHeight: 242,
      logoY: 241,
      logoViewBox: '0 0 244 242',
      logoSvg: BUSINESS_ICONS.goldmanSachsWordmark || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 14.827586,
      nodes: {
        global_banking_markets: { x: 392, y: 470, width: 71, height: 229 },
        asset_wealth_management: { x: 392, y: 855, width: 71, height: 66 },
        platform_solutions: { x: 392, y: 1080, width: 71, height: 3 },
        revenue: { x: 1014, y: 652, width: 72, height: 301 },
        pretax_income: { x: 1637, y: 470, width: 72, height: 126 },
        operating_expenses: { x: 1637, y: 871, width: 72, height: 173 },
        provision_for_credit_loss: { x: 1637, y: 1221, width: 72, height: 2 },
        net_income: { x: 2260, y: 276, width: 71, height: 96 },
        tax: { x: 2260, y: 445, width: 71, height: 26 },
        compensation_benefits: { x: 2260, y: 580, width: 71, height: 89 },
        transaction_based: { x: 2260, y: 740, width: 71, height: 44 },
        market_development: { x: 2260, y: 855, width: 71, height: 1 },
        communication_technology: { x: 2260, y: 937, width: 71, height: 8 },
        da: { x: 2260, y: 1029, width: 71, height: 5 },
        occupancy: { x: 2260, y: 1121, width: 71, height: 2 },
        professional_fees: { x: 2260, y: 1211, width: 71, height: 4 },
        other: { x: 2260, y: 1296, width: 71, height: 7 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'gross_profit', representation: 'data-only' },
    ],
    nodes: [
      { id: 'global_banking_markets', label: ['Global Banking &', 'Markets'], value: 15.5, notes: ['+53% Y/Y', '37% net margin'], type: 'source', col: 0, order: 0 },
      { id: 'asset_wealth_management', label: ['Asset & Wealth', 'Management'], value: 4.6, notes: ['+20% Y/Y', '19% net margin'], type: 'source', col: 0, order: 1 },
      { id: 'platform_solutions', label: 'Platform Solutions', value: 0.2, notes: ['(64%) Y/Y', '(19%) net margin'], type: 'source', col: 0, order: 2 },
      { id: 'revenue', label: 'Revenue', value: 20.3, notes: ['+39% Y/Y'], type: 'hub', col: 1, order: 0 },
      { id: 'pretax_income', label: 'Pretax income', value: 8.6, type: 'profit', col: 2, order: 0 },
      { id: 'operating_expenses', label: ['Operating', 'expenses'], value: 11.7, type: 'cost', col: 2, order: 1 },
      { id: 'provision_for_credit_loss', label: ['Provision for', 'credit loss'], value: 0.1, type: 'cost', col: 2, order: 2 },
      { id: 'net_income', label: 'Net income', value: 6.6, notes: ['+78% Y/Y'], type: 'profit', col: 3, order: 0 },
      { id: 'tax', label: 'Tax', value: 1.9, type: 'cost', col: 3, order: 1 },
      { id: 'compensation_benefits', label: ['Compensation', '& benefits'], value: 6.1, type: 'cost', col: 3, order: 2 },
      { id: 'transaction_based', label: 'Transaction based', value: 3.1, type: 'cost', col: 3, order: 3 },
      { id: 'market_development', label: 'Market dev.', value: 0.2, type: 'cost', col: 3, order: 4 },
      { id: 'communication_technology', label: ['Communication,', 'Technology'], value: 0.6, type: 'cost', col: 3, order: 5 },
      { id: 'da', label: 'D&A', value: 0.5, type: 'cost', col: 3, order: 6 },
      { id: 'occupancy', label: 'Occupancy', value: 0.2, type: 'cost', col: 3, order: 7 },
      { id: 'professional_fees', label: 'Professional fees', value: 0.4, type: 'cost', col: 3, order: 8 },
      { id: 'other', label: 'Other', value: 0.6, type: 'cost', col: 3, order: 9 },
    ],
    links: [
      { source: 'global_banking_markets', target: 'revenue', value: 15.5, sourceWidth: 229, targetWidth: 229, targetOrder: 0 },
      { source: 'asset_wealth_management', target: 'revenue', value: 4.6, sourceWidth: 66, targetWidth: 69, targetOrder: 1 },
      { source: 'platform_solutions', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 3, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'pretax_income', value: 8.6, sourceWidth: 126, targetWidth: 126, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 11.7, sourceWidth: 173, targetWidth: 173, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'provision_for_credit_loss', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 6.6, sourceWidth: 98, targetWidth: 96, sourceOrder: 0, targetOrder: 0 },
      { source: 'pretax_income', target: 'tax', value: 1.9, sourceWidth: 28, targetWidth: 26, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'compensation_benefits', value: 6.1, sourceWidth: 90, targetWidth: 89, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'transaction_based', value: 3.1, sourceWidth: 46, targetWidth: 44, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'market_development', value: 0.2, sourceWidth: 3, targetWidth: 1, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'communication_technology', value: 0.6, sourceWidth: 9, targetWidth: 8, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.5, sourceWidth: 7, targetWidth: 5, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'occupancy', value: 0.2, sourceWidth: 3, targetWidth: 2, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'professional_fees', value: 0.4, sourceWidth: 6, targetWidth: 4, sourceOrder: 6, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other', value: 0.6, sourceWidth: 9, targetWidth: 7, sourceOrder: 7, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Goldman Sachs · 2026 财年第二季度',
        meta: { title: 'Goldman Sachs 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月' },
        annotationsSvg: annotations(true),
        nodes: {
          global_banking_markets: { label: '全球银行与市场', notes: ['同比 +53%', '净利率 37%'] },
          asset_wealth_management: { label: '资产与财富管理', notes: ['同比 +20%', '净利率 19%'] },
          platform_solutions: { label: '平台解决方案', notes: ['同比 (64%)', '净利率 (19%)'] },
          revenue: { label: '收入', notes: ['同比 +39%'] },
          pretax_income: { label: '税前利润' },
          operating_expenses: { label: '运营费用' },
          provision_for_credit_loss: { label: '信用损失拨备' },
          net_income: { label: '净利润', notes: ['同比 +78%'] },
          tax: { label: '税费' },
          compensation_benefits: { label: '薪酬与福利' },
          transaction_based: { label: '交易相关' },
          market_development: { label: '市场开发' },
          communication_technology: { label: '通信与技术' },
          da: { label: '折旧与摊销' },
          occupancy: { label: '场地占用' },
          professional_fees: { label: '专业费用' },
          other: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
