/* ====================================================================
 * Okta - Q4 FY26 income statement ($M)
 * Reconstructed from input/processed/okta-q4-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155278';
  const OKTA_BLUE = '#052f86';
  const BLUE_LINK = '#8ea0c8';
  const GREEN = '#29a32a';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9ccd9c';
  const RED = '#d60000';
  const RED_LABEL = '#961600';
  const RED_LINK = '#e28183';
  const NOTE = '#6c6c6c';
  const RIGHT_LABEL_X = 2405;

  const oktaLogo = `
    <text x="262" y="164" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="180" font-weight="800" fill="${OKTA_BLUE}"
      textLength="488" lengthAdjust="spacingAndGlyphs">okta</text>
  `;

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1061" width="${width}" height="164" rx="34" fill="${OKTA_BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1115 + index * 43}" text-anchor="middle"
          font-size="${index === 0 ? 30 : 29}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const zhKpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1061" width="${width}" height="164" rx="34" fill="${OKTA_BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1115 + index * 43}" text-anchor="middle"
          font-size="${index === 0 ? 26 : 26}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(30, 150, ['cRPO', '$2.5B', '+12% Y/Y'])}
      ${kpiCard(186, 197, ['DBNR', '&gt; 106%', '(1pp) Y/Y'])}
      ${kpiCard(390, 492, ['Customers &gt; $100K ACV', '5,100', '+6% Y/Y'])}
      <text x="82" y="1270" font-size="29" font-weight="500" fill="${NOTE}">cRPO = CurrentRemaining Performance Obligation</text>
      <text x="122" y="1314" font-size="29" font-weight="500" fill="${NOTE}">DBNR = Dollar Based Net Retention (TTM)</text>
      <text x="232" y="1358" font-size="29" font-weight="500" fill="${NOTE}">ACV = Annual Contract Value</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${zhKpiCard(30, 150, ['当前RPO', '$2.5B', '同比+12%'])}
      ${zhKpiCard(186, 197, ['净留存', '&gt; 106%', '同比(1点)'])}
      ${zhKpiCard(390, 492, ['&gt;$100K 客户', '5,100', '同比+6%'])}
      <text x="82" y="1270" font-size="29" font-weight="500" fill="${NOTE}">当前RPO = 当前剩余履约义务</text>
      <text x="122" y="1314" font-size="29" font-weight="500" fill="${NOTE}">净留存 = 美元口径净留存率（过去 12 个月）</text>
      <text x="232" y="1358" font-size="29" font-weight="500" fill="${NOTE}">年度合同价值 = 年度合同价值</text>
    </g>`;

  const zhLayoutLabels = {
    subscription: {
      blocks: [
        {
          x: 212, top: 646, anchor: 'middle',
          lines: [{ text: '订阅', size: 40, weight: 800, color: OKTA_BLUE }],
        },
        {
          x: 399, top: 385, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 40, weight: 400, color: OKTA_BLUE },
            { text: '同比 +11%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    professional_services: {
      blocks: [
        {
          x: 204, top: 976, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '专业', size: 38, weight: 800, color: OKTA_BLUE },
            { text: '服务', size: 38, weight: 800, color: OKTA_BLUE },
          ],
        },
        {
          x: 399, top: 920, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 38, weight: 400, color: OKTA_BLUE },
            { text: '同比 +17%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 866, top: 438, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '收入', size: 40, weight: 800, color: OKTA_BLUE },
            { text: '$value', size: 40, weight: 400, color: OKTA_BLUE },
            { text: '同比 +12%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1331, top: 293, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 78%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1801, top: 216, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 6%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +7 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    interest: {
      blocks: [
        {
          x: 2151, top: 398, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '利息', size: 33, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2392, top: 278, anchor: 'start', lineGap: 10,
          lines: [
            { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 8%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +5 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1334, top: 1079, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '收入', size: 35, weight: 800, color: RED_LABEL },
            { text: '成本', size: 35, weight: 800, color: RED_LABEL },
            { text: '$value', size: 33, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1801, top: 914, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '营业', size: 38, weight: 800, color: RED_LABEL },
            { text: '费用', size: 38, weight: 800, color: RED_LABEL },
            { text: '$value', size: 36, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: 2440, top: 501, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '税费', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 608, anchor: 'start', lineGap: 8,
          lines: [
            { text: '销售与', size: 32, weight: 800, color: RED_LABEL },
            { text: '市场', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
            { text: '占收入 35%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 835, anchor: 'start', lineGap: 8,
          lines: [
            { text: '研究与', size: 32, weight: 800, color: RED_LABEL },
            { text: '开发', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
            { text: '占收入 22%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1080, anchor: 'start', lineGap: 8,
          lines: [
            { text: '一般及', size: 32, weight: 800, color: RED_LABEL },
            { text: '行政', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
            { text: '占收入 15%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1308, anchor: 'start', lineGap: 8,
          lines: [
            { text: '其他', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'okta-q4-fy26',
    name: 'Okta · Q4 FY26',
    company: 'Okta',
    meta: {
      company: 'Okta',
      title: 'Okta Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/okta-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 205,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2020,
      periodX: 1810,
      periodY: 1266,
      periodNoteY: 1309,
      logoWidth: 524,
      logoHeight: 202,
      logoY: 220,
      logoViewBox: '0 0 524 202',
      logoSvg: oktaLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: OKTA_BLUE, label: OKTA_BLUE },
        hub: { node: OKTA_BLUE, label: OKTA_BLUE },
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 0.493,
      nodes: {
        subscription: { x: 363, y: 476, width: 72, height: 371 },
        professional_services: { x: 363, y: 1023, width: 72, height: 7 },
        revenue: { x: 830, y: 579, width: 72, height: 378 },
        gross_profit: { x: 1295, y: 473, width: 72, height: 294 },
        cost_of_revenue: { x: 1297, y: 940, width: 73, height: 84 },
        operating_profit: { x: 1765, y: 396, width: 72, height: 22 },
        operating_expenses: { x: 1764, y: 607, width: 74, height: 272 },
        interest: { x: 2115, y: 374, width: 72, height: 12 },
        net_profit: { x: 2232, y: 308, width: 72, height: 31 },
        tax: { x: 2231, y: 528, width: 73, height: 3 },
        sm: { x: 2231, y: 632, width: 73, height: 132 },
        rnd: { x: 2231, y: 906, width: 73, height: 82 },
        ga: { x: 2231, y: 1134, width: 73, height: 56 },
        other: { x: 2232, y: 1348, width: 72, height: 2 },
      },
      labels: {
        subscription: {
          blocks: [
            {
              x: 219, top: 646, anchor: 'middle',
              lines: [{ text: 'Subscription', size: 40, weight: 800 }],
            },
            {
              x: 399, top: 385, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        professional_services: {
          blocks: [
            {
              x: 204, top: 976, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Professional', size: 38, weight: 800 },
                { text: 'services', size: 38, weight: 800 },
              ],
            },
            {
              x: 399, top: 920, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 866, top: 438, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1331, top: 293, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '78% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1801, top: 216, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '6% margin', size: 29, weight: 400, color: NOTE },
                { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2151, top: 398, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Interest', size: 33, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2392, top: 278, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '8% margin', size: 29, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1334, top: 1079, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 35, weight: 800 },
                { text: 'revenue', size: 35, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1801, top: 914, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2440, top: 501, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 608, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Sales &', size: 32, weight: 800 },
                { text: 'marketing', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '35% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 835, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Research &', size: 32, weight: 800 },
                { text: 'development', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '22% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1080, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'General &', size: 32, weight: 800 },
                { text: 'admin', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '15% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1308, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Other', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 747, notes: ['+11% Y/Y'], color: OKTA_BLUE, labelColor: OKTA_BLUE, linkTint: BLUE_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: ['Professional', 'services'], value: 14, notes: ['+17% Y/Y'], color: OKTA_BLUE, labelColor: OKTA_BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 761, notes: ['+12% Y/Y'], color: OKTA_BLUE, labelColor: OKTA_BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 593, notes: ['78% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 168, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 46, notes: ['6% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 547, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 24, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 63, notes: ['8% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: ['Sales &', 'marketing'], value: 264, notes: ['35% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: ['Research &', 'development'], value: 165, notes: ['22% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: ['General &', 'admin'], value: 114, notes: ['15% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 5, type: 'cost', label: 'Other', value: 4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 747, width: 371, sourceOrder: 0, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 14, width: 7, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 593, width: 294, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 168, width: 84, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 46, width: 22, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 547, width: 272, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 39, width: 19, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 7, width: 3, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 24, width: 12, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 264, width: 132, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 165, width: 82, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 114, width: 56, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other', value: 4, width: 2, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Okta · 2026 财年第四季度',
        meta: {
          title: 'Okta 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1760,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +11%'] },
          professional_services: { label: '专业服务', notes: ['同比 +17%'] },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 78%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 +7 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 35%', '同比 +0 个百分点'] },
          rnd: { label: '研究与开发', notes: ['占收入 22%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 15%', '同比 (2 个百分点)'] },
          other: { label: '其他' },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
