/* ====================================================================
 * DocuSign - Q1 FY27 income statement ($M)
 * Reconstructed from input/processed/docusign-q1-fy27.png as a fixed
 * d3-sankey layout with pure SVG annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#6b6b6b';
  const TITLE = '#155077';
  const RIGHT_LABEL_X = 2461;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="34" fill="${BLACK}"/>
      ${lines
        .map(
          (line) => `
        <text x="${x + width / 2}" y="${line.y}" text-anchor="middle"
          font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const interestLeader = `
    <g stroke="${GREEN}" fill="none">
      <line x1="2118" y1="378" x2="2192" y2="378" stroke-width="2.5"/>
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${interestLeader}
      ${kpiCard(61, 1163, 207, 147, [
        { text: 'NRR', y: 1207, size: 34, weight: 800 },
        { text: '101%', y: 1250, size: 32, weight: 500 },
        { text: '(1pp)&#8201;&#8201;Q/Q', y: 1290, size: 27, weight: 500 },
      ])}
      ${kpiCard(285, 1163, 463, 147, [
        { text: '<tspan font-weight="800">Customers</tspan> 1.71M (+10% Y/Y)', y: 1222, size: 33, weight: 500 },
        { text: '<tspan font-weight="800">Enterprise</tspan> 268K (+8% Y/Y)', y: 1274, size: 33, weight: 500 },
      ])}
      <text x="386" y="1352" text-anchor="middle" font-size="30" font-weight="500" fill="${NOTE}">NRR = Net Retention Rate</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${interestLeader}
      ${kpiCard(61, 1163, 207, 147, [
        { text: 'NRR', y: 1207, size: 34, weight: 800 },
        { text: '101%', y: 1250, size: 32, weight: 500 },
        { text: '环比 (1 个百分点)', y: 1290, size: 24, weight: 500 },
      ])}
      ${kpiCard(285, 1163, 463, 147, [
        { text: '<tspan font-weight="800">客户</tspan> 1.71M（同比 +10%）', y: 1222, size: 33, weight: 500 },
        { text: '<tspan font-weight="800">企业客户</tspan> 268K（同比 +8%）', y: 1274, size: 33, weight: 500 },
      ])}
      <text x="386" y="1352" text-anchor="middle" font-size="30" font-weight="500" fill="${NOTE}">NRR = 净留存率</text>
    </g>`;

  const enLabels = {
    subscription: {
      blocks: [
        {
          x: 398, top: 460, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 196, top: 682, anchor: 'middle',
          lines: [{ text: 'Subscription', size: 41, weight: 800 }],
        },
      ],
    },
    professional_services: {
      blocks: [
        {
          x: 398, top: 958, anchor: 'middle', lineGap: 11,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          // centered under the small PS bar per user layout preference
          // (source places this name to the left; user asked to center it)
          x: 397, top: 1069, anchor: 'middle', lineGap: 5,
          lines: [
            { text: 'Professional', size: 41, weight: 800 },
            { text: 'Services', size: 41, weight: 800 },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 864, top: 494, anchor: 'middle', lineGap: 14,
          lines: [
            { text: 'Revenue', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1331, top: 339, anchor: 'middle', lineGap: 10,
          lines: [
            { text: 'Gross profit', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '79% margin', size: 29, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1331, top: 1071, anchor: 'middle', lineGap: 14,
          lines: [
            { text: 'Cost of', size: 34, weight: 800 },
            { text: 'revenue', size: 34, weight: 800 },
            { text: '$value', size: 33, weight: 400 },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1798, top: 243, anchor: 'middle', lineGap: 10,
          lines: [
            { text: 'Operating profit', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '13% margin', size: 29, weight: 400, color: NOTE },
            { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1798, top: 920, anchor: 'middle', lineGap: 14,
          lines: [
            { text: 'Operating', size: 38, weight: 800 },
            { text: 'expenses', size: 38, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    interest: {
      blocks: [
        {
          x: 2156, top: 386, anchor: 'middle', lineGap: 9,
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
          x: RIGHT_LABEL_X, top: 288, anchor: 'middle', lineGap: 10,
          lines: [
            { text: 'Net profit', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '9% margin', size: 29, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 512, anchor: 'middle', lineGap: 8,
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
          x: RIGHT_LABEL_X, top: 778, anchor: 'middle', lineGap: 12,
          lines: [
            { text: 'S&M', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '36% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 974, anchor: 'middle', lineGap: 12,
          lines: [
            { text: 'R&D', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '19% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1169, anchor: 'middle', lineGap: 12,
          lines: [
            { text: 'G&A', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  const zhLabels = {
    subscription: {
      blocks: [
        {
          x: 398, top: 460, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 196, top: 682, anchor: 'middle',
          lines: [{ text: '订阅', size: 41, weight: 800 }],
        },
      ],
    },
    professional_services: {
      blocks: [
        {
          x: 398, top: 958, anchor: 'middle', lineGap: 11,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          // centered under the small PS bar per user layout preference
          x: 397, top: 1069, anchor: 'middle', lineGap: 5,
          lines: [
            { text: '专业', size: 41, weight: 800 },
            { text: '服务', size: 41, weight: 800 },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 864, top: 494, anchor: 'middle', lineGap: 14,
          lines: [
            { text: '收入', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1331, top: 339, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '毛利润', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 79%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1331, top: 1071, anchor: 'middle', lineGap: 14,
          lines: [
            { text: '收入', size: 34, weight: 800 },
            { text: '成本', size: 34, weight: 800 },
            { text: '$value', size: 33, weight: 400 },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1798, top: 243, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '营业利润', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 13%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1798, top: 920, anchor: 'middle', lineGap: 14,
          lines: [
            { text: '运营', size: 38, weight: 800 },
            { text: '费用', size: 38, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    interest: {
      blocks: [
        {
          x: 2156, top: 386, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '利息', size: 33, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 288, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '净利润', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 9%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 512, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '税费', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 778, anchor: 'middle', lineGap: 12,
          lines: [
            { text: '销售与市场', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 36%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 974, anchor: 'middle', lineGap: 12,
          lines: [
            { text: '研发', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 19%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1169, anchor: 'middle', lineGap: 12,
          lines: [
            { text: '管理费用', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 11%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'docusign-q1-fy27',
    name: 'DocuSign · Q1 FY27',
    company: 'DocuSign',
    meta: {
      company: 'DocuSign',
      title: 'DocuSign Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/docusign-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 199,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2289,
      periodX: 193,
      periodY: 340,
      periodNoteY: 376,
      logoWidth: 923,
      logoHeight: 152,
      logoY: 263,
      logoViewBox: '0 0 923 152',
      logoSvg: `
        <path d="M34 1 H77 A43 43 0 0 1 77 87 H34 Z" fill="#ff5252"/>
        <rect x="1" y="35" width="85" height="86" rx="16" fill="#4c00ff"/>
        <path d="M35 35 H68 L117 53 V87 H35 Z" fill="#000000"/>
        <text x="149" y="120" font-family="Montserrat,Arial,sans-serif"
          font-size="145" font-weight="700" textLength="599" lengthAdjust="spacingAndGlyphs"
          fill="#000000">docusign</text>
        <text x="728" y="30" font-family="Montserrat,Arial,sans-serif"
          font-size="20" font-weight="600" fill="#000000">™</text>
      `,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: '#5e5e5e',
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 0.3831,
      nodes: {
        subscription: { x: 361, y: 559, width: 71, height: 311 },
        professional_services: { x: 361, y: 1056, width: 71, height: 8 },
        revenue: { x: 828, y: 647, width: 71, height: 318 },
        gross_profit: { x: 1295, y: 520, width: 71, height: 252 },
        cost_of_revenue: { x: 1295, y: 989, width: 71, height: 66 },
        operating_profit: { x: 1762, y: 426, width: 72, height: 42 },
        operating_expenses: { x: 1762, y: 689, width: 72, height: 210 },
        interest: { x: 2121, y: 376, width: 71, height: 3 },
        net_profit: { x: 2229, y: 304, width: 72, height: 30 },
        tax: { x: 2229, y: 546, width: 72, height: 15 },
        sm: { x: 2229, y: 791, width: 72, height: 113 },
        rnd: { x: 2229, y: 1012, width: 72, height: 60 },
        ga: { x: 2229, y: 1194, width: 72, height: 35 },
      },
      labels: enLabels,
    },

    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 811, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: ['Professional', 'Services'], value: 19, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 830, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 659, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 171, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 111, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 548, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 6, color: '#f2f2f2', labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 78, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 40, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 296, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 160, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 92, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 811, width: 311, sourceOrder: 0, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 19, width: 7, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 659, width: 252, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 171, width: 66, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 111, width: 42, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 548, width: 210, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 71, width: 27, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 40, width: 15, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 6, width: 3, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 296, width: 114, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 160, width: 61, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 92, width: 35, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['NRR'],
      zh: {
        name: 'DocuSign · 2027 财年第一季度',
        meta: {
          title: 'DocuSign 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 1770,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +9%'] },
          professional_services: { label: ['专业', '服务'], notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 79%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 13%', '同比 +6 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 36%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 19%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 11%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
