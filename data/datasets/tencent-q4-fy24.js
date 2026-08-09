/* Tencent Q4 FY24 income statement (RMB B), reconstructed from the Source. */
(function () {
  const YELLOW = '#f8b62d';
  const YELLOW_LINK = '#f4d799';
  const SOCIAL_BLUE = '#0052d9';
  const SOCIAL_LINK = '#85aae6';
  const OLIVE = '#80a813';
  const OLIVE_LINK = '#bfd18e';
  const CORAL = '#f97a66';
  const CORAL_LINK = '#f4bcb3';
  const HUB = '#016db7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY = '#666666';
  const GRAY_LINK = '#b9b9b9';
  const TITLE = '#155077';

  const annotations = (localized) => `
      <g font-family="Noto Sans,Arial,sans-serif">
        <text x="${localized ? 170 : 83}" y="282" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">${localized ? '单位：人民币' : 'in RMB'}</text>
      </g>
      <g font-family="Noto Sans,Arial,sans-serif" class="sankey-interactive-annotation" data-node="other_operating_gains">
        <line x1="1700" y1="584.5" x2="1767" y2="584.5" stroke="${GREEN}" stroke-width="5"/>
        <path d="M1767 584.5 C1780 584.5 1801 535 1813.5 535" fill="none" stroke="${GREEN_LINK}" stroke-width="4"/>
        <text x="1725" y="631" text-anchor="middle" font-size="26" font-weight="800" fill="${GREEN_LABEL}">${localized ? '其他收益' : 'Other gains'}</text>
        <text x="1725" y="666" text-anchor="middle" font-size="25" font-weight="400" fill="${GREEN_LABEL}">2.5B</text>
      </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tencent-q4-fy24',
    name: 'Tencent · Q4 FY24',
    company: 'Tencent',
    meta: {
      company: 'Tencent',
      title: 'Tencent Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 191,
      titleSize: 127,
      titleWeight: 800,
      titleTextLength: 2230,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: GRAY,
      noteColor: GRAY,
      palette: {
        source: { node: HUB, label: HUB },
        hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: HUB, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 32, note: 21, lineGap: 6 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/tencent/company-wordmark.png', x: 704, y: 274, width: 548, height: 124 },
      { key: 'business-gaming-cluster', href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png', x: 34, y: 360, width: 231, height: 136 },
      { key: 'business-social-networks-cluster', href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png', x: 66, y: 576, width: 148, height: 147 },
      { key: 'business-marketing-services-cluster', href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png', x: 74, y: 787, width: 140, height: 134 },
      { key: 'business-fintech-business-services-cluster', href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png', x: 81, y: 1013, width: 136, height: 134 },
    ],

    layout: {
      scale: 1.675,
      routes: { other_operating_gains: { x: 1767, y: 584.5, width: 0, height: 1 } },
      nodes: {
        gaming: { x: 512, y: 355, width: 66, height: 82 },
        social_networks: { x: 512, y: 617, width: 66, height: 50 },
        marketing_services: { x: 512, y: 838, width: 66, height: 59 },
        fintech_business_services: { x: 512, y: 1043, width: 66, height: 94 },
        others: { x: 511, y: 1265, width: 67, height: 6 },
        revenue: { x: 947, y: 630, width: 65, height: 289 },
        gross_profit: { x: 1381, y: 542, width: 67, height: 152 },
        cost_of_revenue: { x: 1381, y: 885, width: 67, height: 137 },
        operating_profit: { x: 1817, y: 451, width: 65, height: 86 },
        operating_expenses: { x: 1817, y: 739, width: 65, height: 70 },
        investments: { x: 2138, y: 474, width: 65, height: 20 },
        net_profit: { x: 2251, y: 359, width: 66, height: 86 },
        tax: { x: 2251, y: 628, width: 66, height: 20 },
        rnd: { x: 2251, y: 825, width: 66, height: 33 },
        ga: { x: 2251, y: 1018, width: 66, height: 20 },
        sm: { x: 2251, y: 1210, width: 66, height: 17 },
      },
      labels: {
        gaming: { blocks: [
          { x: 560, top: 258, anchor: 'middle', lineGap: 7, lines: [
            { text: '$value', size: 32, weight: 400 },
            { text: '+20% Y/Y', size: 21, weight: 400, color: GRAY },
          ] },
          { x: 494, top: 376, anchor: 'end', semanticRole: 'top-aligned-side-label', lines: [{ text: 'Gaming', size: 40, weight: 800 }] },
        ] },
        social_networks: { blocks: [
          { x: 560, top: 525, anchor: 'middle', lineGap: 6, lines: [
            { text: '$value', size: 32, weight: 400 },
            { text: '+6% Y/Y', size: 21, weight: 400, color: GRAY },
          ] },
          { x: 487, top: 587, anchor: 'end', lineGap: 7, semanticRole: 'top-aligned-side-label', lines: [
            { text: 'Social', size: 40, weight: 800 },
            { text: 'Networks', size: 40, weight: 800 },
          ] },
        ] },
        marketing_services: { blocks: [
          { x: 559, top: 749, anchor: 'middle', lineGap: 6, lines: [
            { text: '$value', size: 32, weight: 400 },
            { text: '+17% Y/Y', size: 21, weight: 400, color: GRAY },
          ] },
          { x: 486, top: 804, anchor: 'end', lineGap: 7, semanticRole: 'top-aligned-side-label', lines: [
            { text: 'Marketing', size: 40, weight: 800 },
            { text: 'Services', size: 40, weight: 800 },
          ] },
        ] },
        fintech_business_services: { blocks: [
          { x: 550, top: 955, anchor: 'middle', lineGap: 6, lines: [
            { text: '$value', size: 32, weight: 400 },
            { text: '+3% Y/Y', size: 21, weight: 400, color: GRAY },
          ] },
          { x: 479, top: 1017, anchor: 'end', lineGap: 7, semanticRole: 'top-aligned-side-label', lines: [
            { text: 'Finance &', size: 36, weight: 800 },
            { text: 'Business', size: 36, weight: 800 },
            { text: 'Services', size: 36, weight: 800 },
          ] },
        ] },
        others: { blocks: [
          { x: 545, top: 1147, anchor: 'middle', lineGap: 6, lines: [
            { text: '$value', size: 32, weight: 400, color: GRAY },
            { text: '+18% Y/Y', size: 21, weight: 400, color: GRAY },
          ] },
          { x: 479, top: 1215, anchor: 'end', semanticRole: 'top-aligned-side-label', lines: [{ text: 'Others', size: 40, weight: 800, color: GRAY }] },
        ] },
        revenue: { blocks: [{ x: 980, top: 495, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Revenue', size: 40, weight: 800 },
          { text: '$value', size: 33, weight: 400 },
          { text: '+11% Y/Y', size: 22, weight: 400, color: GRAY },
        ] }] },
        gross_profit: { blocks: [{ x: 1419, top: 376, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Gross profit', size: 38, weight: 800 },
          { text: '$value', size: 33, weight: 400 },
          { text: '53% margin', size: 22, weight: 400, color: GRAY },
          { text: '+3pp Y/Y', size: 22, weight: 400, color: GRAY },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1412, top: 1047, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Cost of', size: 36, weight: 800 },
          { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 32, weight: 400 },
        ] }] },
        other_operating_gains: { blocks: [] },
        operating_profit: { blocks: [{ x: 1856, top: 286, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Operating profit', size: 35, weight: 800 },
          { text: '$value', size: 33, weight: 400 },
          { text: '30% margin', size: 22, weight: 400, color: GRAY },
          { text: '+3pp Y/Y', size: 22, weight: 400, color: GRAY },
        ] }] },
        operating_expenses: { blocks: [{ x: 1848, top: 831, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Operating', size: 36, weight: 800 },
          { text: 'expenses', size: 36, weight: 800 },
          { text: '$value', size: 32, weight: 400 },
        ] }] },
        investments: { blocks: [{ x: 2164, top: 515, anchor: 'middle', lineGap: 6, lines: [
          { text: 'Investments', size: 25, weight: 800 },
          { text: '$value', size: 25, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2437, top: 362, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Net profit', size: 38, weight: 800 },
          { text: '$value', size: 33, weight: 400 },
          { text: '30% margin', size: 22, weight: 400, color: GRAY },
          { text: '+12pp Y/Y', size: 22, weight: 400, color: GRAY },
        ] }] },
        tax: { blocks: [{ x: 2435, top: 604, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Tax', size: 26, weight: 800 },
          { text: '(11.8B)', size: 26, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: 2443, top: 791, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Research &', size: 25, weight: 800 },
          { text: 'development', size: 25, weight: 800 },
          { text: '(19.8B)', size: 25, weight: 400 },
          { text: '11% of revenue', size: 22, weight: 400, color: GRAY },
          { text: '+1pp Y/Y', size: 22, weight: 400, color: GRAY },
        ] }] },
        ga: { blocks: [{ x: 2440, top: 973, anchor: 'middle', lineGap: 7, lines: [
          { text: 'General &', size: 25, weight: 800 },
          { text: 'admin', size: 25, weight: 800 },
          { text: '(11.6B)', size: 25, weight: 400 },
          { text: '7% of revenue', size: 22, weight: 400, color: GRAY },
          { text: '(0pp) Y/Y', size: 22, weight: 400, color: GRAY },
        ] }] },
        sm: { blocks: [{ x: 2440, top: 1169, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Sales &', size: 25, weight: 800 },
          { text: 'marketing', size: 25, weight: 800 },
          { text: '(10.3B)', size: 25, weight: 400 },
          { text: '6% of revenue', size: 22, weight: 400, color: GRAY },
          { text: '(1pp) Y/Y', size: 22, weight: 400, color: GRAY },
        ] }] },
      },
    },

    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 49.2, notes: ['+20% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 29.8, notes: ['+6% Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'marketing_services', col: 0, order: 2, type: 'source', label: ['Marketing', 'Services'], value: 35.0, valueText: '35.0B', notes: ['+17% Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'fintech_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 56.1, notes: ['+3% Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 2.3, notes: ['+18% Y/Y'], color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 172.4, notes: ['+11% Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 90.7, notes: ['53% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 81.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 51.5, notes: ['30% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 41.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'investments', col: 4, order: 0, type: 'profit', label: 'Investments', value: 11.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 51.5, notes: ['30% margin', '+12pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 11.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'development'], value: 19.8, notes: ['11% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: ['General &', 'admin'], value: 11.6, notes: ['7% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: ['Sales &', 'marketing'], value: 10.3, notes: ['6% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    nonNodeMetrics: [
      { id: 'other_operating_gains', representation: 'flow', label: 'Other gains', value: 2.5, valueText: '2.5B', type: 'profit', labelColor: GREEN_LABEL },
    ],

    links: [
      { source: 'gaming', target: 'revenue', value: 49.2, width: 82, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 29.8, width: 50, targetOrder: 1 },
      { source: 'marketing_services', target: 'revenue', value: 35.0, width: 59, targetOrder: 2 },
      { source: 'fintech_business_services', target: 'revenue', value: 56.1, width: 94, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 2.3, width: 4, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 90.7, width: 152, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 81.7, width: 137, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 49.0, sourceWidth: 82, targetWidth: 86, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 41.7, width: 70, sourceOrder: 1, targetOrder: 0 },
      {
        sourceRoute: 'other_operating_gains', target: 'operating_profit', value: 2.5, sourceWidth: 0, targetWidth: 0,
        targetOrder: 1, y1: 535, linkTint: GREEN_LINK,
        interactionOnly: true,
        curve: { x0: 1767, x1: 1817, c1x: 1780, c2x: 1804, c1y: 584.5, c2y: 535 },
      },
      { source: 'operating_profit', target: 'net_profit', value: 39.7, width: 66, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 11.8, width: 20, sourceOrder: 1 },
      { source: 'investments', target: 'net_profit', value: 11.8, width: 20, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 19.8, width: 33, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 11.6, width: 20, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 10.3, width: 17, sourceOrder: 2 },
    ],

    i18n: {
      zh: {
        name: 'Tencent · 2024 财年第四季度',
        meta: { title: 'Tencent 2024 财年第四季度利润表', period: '2024 财年第四季度', periodNote: '截至 2024 年 12 月' },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { other_operating_gains: { label: '其他收益' } },
        nodes: {
          gaming: { label: '游戏', notes: ['同比 +20%'] },
          social_networks: { label: '社交网络', notes: ['同比 +6%'] },
          marketing_services: { label: '营销服务', notes: ['同比 +17%'] },
          fintech_business_services: { label: '金融与企业服务', notes: ['同比 +3%'] },
          others: { label: '其他', notes: ['同比 +18%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 53%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 30%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          investments: { label: '投资收益' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 +12 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 7%', '同比 0 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            fintech_business_services: { blocks: [
              { x: 550, top: 955, anchor: 'middle', lineGap: 6, lines: [
                { text: '$value', size: 32, weight: 400 },
                { text: '同比 +3%', size: 21, weight: 400, color: GRAY },
              ] },
              { x: 479, top: 1017, anchor: 'end', lineGap: 7, semanticRole: 'top-aligned-side-label', lines: [
                { text: '金融与', size: 36, weight: 800 },
                { text: '企业', size: 36, weight: 800 },
                { text: '服务', size: 36, weight: 800 },
              ] },
            ] },
          },
        },
      },
    },
  });
})();
