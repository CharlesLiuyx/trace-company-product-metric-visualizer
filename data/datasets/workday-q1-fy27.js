/* ====================================================================
 * Workday - Q1 FY27 income statement ($B)
 * Reconstructed from input/processed/workday-q1-fy27.png as a fixed
 * d3-sankey layout with a reusable SVG Workday logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLUE = '#0875b5';
  const BLUE_LINK = '#82b6d4';
  const ORANGE = '#ff8b00';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#9bcc9b';
  const RED = '#d50000';
  const RED_LABEL = '#9d1600';
  const RED_LINK = '#e28486';
  const NOTE = '#6f6f6f';
  const RIGHT_LABEL_X = 2428;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1178" width="${width}" height="166" rx="34" fill="${BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1233 + index * 40}" text-anchor="middle"
          font-size="${index === 0 ? 33 : 31}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(38, 435, ['Subscription Backlog', '$27B', '+11% Y/Y'])}
      ${kpiCard(484, 318, ['Gross Revenue', 'Retention', '97%'])}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(38, 435, ['订阅待履约收入', '$27B', '同比 +11%'])}
      ${kpiCard(484, 318, ['总收入', '留存率', '97%'])}
    </g>`;

  const zhLayoutLabels = {
    subscription: {
      blocks: [
        {
          x: 204, top: 696, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '订阅', size: 39, weight: 800, color: ORANGE },
            { text: '毛利率 82%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 400, top: 443, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 39, weight: 400, color: ORANGE },
            { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    professional_services: {
      blocks: [
        {
          x: 204, top: 1036, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '专业', size: 38, weight: 800, color: ORANGE },
            { text: '服务', size: 38, weight: 800, color: ORANGE },
            { text: '毛利率 (2%)', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 400, top: 1018, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 38, weight: 400, color: ORANGE },
            { text: '同比 +4%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 866, top: 483, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '收入', size: 40, weight: 800, color: ORANGE },
            { text: '$value', size: 40, weight: 400, color: ORANGE },
            { text: '同比 +13%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1335, top: 349, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 76%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1801, top: 224, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 13%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +12 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 2140, top: 412, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '其他', size: 32, weight: 800, color: GREEN_LABEL },
            { text: '$17M', size: 31, weight: 400, color: GREEN_LABEL },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2426, top: 259, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 9%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1335, top: 1162, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '收入', size: 35, weight: 800, color: RED_LABEL },
            { text: '成本', size: 35, weight: 800, color: RED_LABEL },
            { text: '$value', size: 35, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1802, top: 971, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '运营', size: 35, weight: 800, color: RED_LABEL },
            { text: '费用', size: 35, weight: 800, color: RED_LABEL },
            { text: '$value', size: 35, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 566, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '税费', size: 33, weight: 800, color: RED_LABEL },
            { text: '$value', size: 33, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    product_development: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 739, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '产品', size: 33, weight: 800, color: RED_LABEL },
            { text: '开发', size: 33, weight: 800, color: RED_LABEL },
            { text: '$value', size: 33, weight: 400, color: RED_LABEL },
            { text: '占收入 28%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1006, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'S&M 费用', size: 33, weight: 800, color: RED_LABEL },
            { text: '$value', size: 33, weight: 400, color: RED_LABEL },
            { text: '占收入 27%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1238, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'G&A 费用', size: 33, weight: 800, color: RED_LABEL },
            { text: '$value', size: 33, weight: 400, color: RED_LABEL },
            { text: '占收入 8%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'workday-q1-fy27',
    name: 'Workday · Q1 FY27',
    company: 'Workday',
    meta: {
      company: 'Workday',
      title: 'Workday Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/workday-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1320,
      titleY: 199,
      titleSize: 125,
      titleWeight: 800,
      titleTextLength: 2290,
      periodX: 1830,
      periodY: 1232,
      periodNoteY: 1274,
      logoWidth: 665,
      logoHeight: 280,
      logoY: 232,
      logoViewBox: '0 0 665 280',
      logoSvg: BUSINESS_ICONS.workdayCompanyLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: ORANGE },
        hub: { node: BLUE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 38, value: 38, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 166,
      nodes: {
        subscription: { x: 365, y: 535, width: 72, height: 386 },
        professional_services: { x: 365, y: 1106, width: 72, height: 35 },
        revenue: { x: 830, y: 624, width: 72, height: 417 },
        gross_profit: { x: 1298, y: 530, width: 72, height: 316 },
        cost_of_revenue: { x: 1298, y: 1039, width: 72, height: 100 },
        operating_profit: { x: 1765, y: 407, width: 72, height: 54 },
        operating_expenses: { x: 1765, y: 688, width: 72, height: 266 },
        other: { x: 2104, y: 386, width: 72, height: 5 },
        net_profit: { x: 2234, y: 294, width: 72, height: 35 },
        tax: { x: 2234, y: 590, width: 72, height: 18 },
        product_development: { x: 2234, y: 748, width: 72, height: 116 },
        sm: { x: 2234, y: 1010, width: 72, height: 112 },
        ga: { x: 2234, y: 1250, width: 72, height: 35 },
      },
      labels: {
        subscription: {
          blocks: [
            {
              x: 204, top: 696, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Subscription', size: 39, weight: 800, color: ORANGE },
                { text: '82% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 400, top: 443, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: ORANGE },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        professional_services: {
          blocks: [
            {
              x: 204, top: 1036, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Professional', size: 38, weight: 800, color: ORANGE },
                { text: 'services', size: 38, weight: 800, color: ORANGE },
                { text: '(2%) gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 400, top: 1018, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: ORANGE },
                { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 866, top: 483, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: ORANGE },
                { text: '$value', size: 40, weight: 400, color: ORANGE },
                { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1335, top: 349, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '76% margin', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1801, top: 224, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '13% margin', size: 29, weight: 400, color: NOTE },
                { text: '+12pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2140, top: 412, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 32, weight: 800, color: GREEN_LABEL },
                { text: '$17M', size: 31, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2426, top: 259, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '9% margin', size: 29, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1335, top: 1162, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 35, weight: 800, color: RED_LABEL },
                { text: 'revenue', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1802, top: 971, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 35, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 566, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Tax', size: 33, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        product_development: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 739, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Product', size: 33, weight: 800, color: RED_LABEL },
                { text: 'development', size: 33, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                { text: '28% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1006, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'S&M', size: 33, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                { text: '27% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1238, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A', size: 33, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 2.4, notes: ['+14% Y/Y', '82% gross margin'], color: BLUE, labelColor: ORANGE, linkTint: BLUE_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: ['Professional', 'services'], value: 0.2, notes: ['+4% Y/Y', '(2%) gross margin'], color: BLUE, labelColor: ORANGE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.5, notes: ['+13% Y/Y'], color: BLUE, labelColor: ORANGE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.9, notes: ['76% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.3, notes: ['13% margin', '+12pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.017, valueText: '$17M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['9% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 5, order: 2, type: 'cost', label: ['Product', 'development'], value: 0.7, notes: ['28% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.7, notes: ['27% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.2, notes: ['8% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 2.4, width: 386, sourceOrder: 0, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 0.2, width: 35, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1.9, width: 316, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, width: 100, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.3, width: 54, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.6, width: 266, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, width: 35, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, width: 18, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.017, width: 5, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'product_development', value: 0.7, width: 116, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 0.7, width: 112, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.2, width: 35, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Workday · 2027 财年第一季度',
        meta: {
          title: 'Workday 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 1860,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +14%', '毛利率 82%'] },
          professional_services: { label: '专业服务', notes: ['同比 +4%', '毛利率 (2%)'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 13%', '同比 +12 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 +6 个百分点'] },
          tax: { label: '税费' },
          product_development: { label: '产品开发', notes: ['占收入 28%', '同比 (2 个百分点)'] },
          sm: { label: 'S&M 费用', notes: ['占收入 27%', '同比 (1 个百分点)'] },
          ga: { label: 'G&A 费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: zhLayoutLabels,
        },
      },
    },
  });
})();
