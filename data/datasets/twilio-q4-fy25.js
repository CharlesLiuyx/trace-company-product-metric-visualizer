/* ====================================================================
 * Twilio - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/twilio-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG logo and KPI annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#001489';
  const BLUE_LINK = '#858ec2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const LOGO_RED = '#f22f46';
  const RIGHT_LABEL_X = 2490;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="32" fill="${BLUE}"/>
      ${lines
        .map(
          (line) => `
        <text x="${x + width / 2}" y="${line.y}" text-anchor="middle"
          font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(120, 1161, 190, 157, [
        { text: 'DBNE', y: 1206, size: 32, weight: 800 },
        { text: '109%', y: 1248, size: 32, weight: 500 },
        { text: '+3pp Y/Y', y: 1289, size: 29, weight: 500 },
      ])}
      ${kpiCard(319, 1159, 214, 164, [
        { text: 'Customers', y: 1204, size: 32, weight: 800 },
        { text: '402K+', y: 1248, size: 32, weight: 500 },
        { text: '+24% Y/Y', y: 1292, size: 29, weight: 500 },
      ])}
      <text x="340" y="1367" text-anchor="middle" font-size="30" font-weight="500" fill="${NOTE}"
        textLength="500" lengthAdjust="spacingAndGlyphs">DBNE = Dollar Based Net Expansion</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(120, 1161, 190, 157, [
        { text: 'DBNE', y: 1206, size: 32, weight: 800 },
        { text: '109%', y: 1248, size: 32, weight: 500 },
        { text: '同比 +3 个百分点', y: 1289, size: 22, weight: 500 },
      ])}
      ${kpiCard(319, 1159, 214, 164, [
        { text: '客户数', y: 1204, size: 32, weight: 800 },
        { text: '402K+', y: 1248, size: 32, weight: 500 },
        { text: '同比 +24%', y: 1292, size: 29, weight: 500 },
      ])}
      <text x="340" y="1367" text-anchor="middle" font-size="30" font-weight="500" fill="${NOTE}">DBNE = 基于美元的净扩张率</text>
    </g>`;

  const enLabels = {
    united_states: {
      blocks: [
        {
          x: 449, top: 427, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 210, top: 608, anchor: 'middle',
          lines: [{ text: 'United States', size: 40, weight: 800 }],
        },
      ],
    },
    international: {
      blocks: [
        {
          x: 449, top: 890, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 210, top: 1025, anchor: 'middle',
          lines: [{ text: 'International', size: 40, weight: 800 }],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 917, top: 505, anchor: 'middle', lineGap: 14,
          lines: [
            { text: 'Revenue', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1384, top: 335, anchor: 'middle', lineGap: 10,
          lines: [
            { text: 'Gross profit', size: 38, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '48% margin', size: 29, weight: 400, color: NOTE },
            { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1386, top: 1125, anchor: 'middle', lineGap: 12,
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
          x: 1852, top: 255, anchor: 'middle', lineGap: 10,
          lines: [
            { text: 'Operating profit', size: 38, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '4% margin', size: 29, weight: 400, color: NOTE },
            { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1853, top: 815, anchor: 'middle', lineGap: 12,
          lines: [
            { text: 'Operating', size: 38, weight: 800 },
            { text: 'expenses', size: 38, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    net_loss: {
      blocks: [
        {
          x: 2200, top: 323, anchor: 'middle', lineGap: 10,
          lines: [
            { text: 'Net loss', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 488, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Other', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 696, anchor: 'middle', lineGap: 12,
          lines: [
            { text: 'R&D', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '20% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 907, anchor: 'middle', lineGap: 12,
          lines: [
            { text: 'S&M', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '16% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1118, anchor: 'middle', lineGap: 12,
          lines: [
            { text: 'G&A', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  const zhLabels = {
    united_states: {
      blocks: [
        {
          x: 449, top: 427, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 210, top: 608, anchor: 'middle',
          lines: [{ text: '美国', size: 40, weight: 800 }],
        },
      ],
    },
    international: {
      blocks: [
        {
          x: 449, top: 890, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 210, top: 1025, anchor: 'middle',
          lines: [{ text: '国际', size: 40, weight: 800 }],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 917, top: 505, anchor: 'middle', lineGap: 14,
          lines: [
            { text: '收入', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1384, top: 335, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '毛利润', size: 38, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 48%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1386, top: 1125, anchor: 'middle', lineGap: 12,
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
          x: 1852, top: 255, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '营业利润', size: 38, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 4%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1853, top: 815, anchor: 'middle', lineGap: 12,
          lines: [
            { text: '运营', size: 38, weight: 800 },
            { text: '费用', size: 38, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    net_loss: {
      blocks: [
        {
          x: 2200, top: 323, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '净亏损', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 488, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '其他', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 696, anchor: 'middle', lineGap: 12,
          lines: [
            { text: '研发', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 20%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 907, anchor: 'middle', lineGap: 12,
          lines: [
            { text: '销售与市场', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 16%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1118, anchor: 'middle', lineGap: 12,
          lines: [
            { text: '管理费用', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 8%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'twilio-q4-fy25',
    name: 'Twilio · Q4 FY25',
    company: 'Twilio',
    meta: {
      company: 'Twilio',
      title: 'Twilio Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/twilio-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 199,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2110,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 665,
      logoHeight: 150,
      logoY: 260,
      logoViewBox: '0 0 665 150',
      logoSvg: `
        <g fill="${LOGO_RED}">
          <circle cx="75" cy="75" r="69"/>
          <circle cx="75" cy="75" r="50" fill="#f2f2f2"/>
          <circle cx="53" cy="53" r="15"/>
          <circle cx="97" cy="53" r="15"/>
          <circle cx="53" cy="97" r="15"/>
          <circle cx="97" cy="97" r="15"/>
          <text x="165" y="116" font-family="Montserrat,Arial,sans-serif" font-size="118" font-weight="800"
            textLength="476" lengthAdjust="spacingAndGlyphs">twilio</text>
        </g>
      `,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
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
      scale: 0.256,
      nodes: {
        united_states: { x: 413, y: 521, width: 72, height: 226 },
        international: { x: 413, y: 987, width: 72, height: 124 },
        revenue: { x: 881, y: 652, width: 71, height: 350 },
        gross_profit: { x: 1348, y: 520, width: 71, height: 169 },
        cost_of_revenue: { x: 1350, y: 931, width: 72, height: 180 },
        operating_profit: { x: 1815, y: 434, width: 71, height: 14 },
        operating_expenses: { x: 1817, y: 647, width: 72, height: 155 },
        net_loss: { x: 2165, y: 434, width: 72, height: 12 },
        other: { x: 2282, y: 497, width: 72, height: 26 },
        rnd: { x: 2282, y: 693, width: 72, height: 70 },
        sm: { x: 2282, y: 914, width: 72, height: 57 },
        ga: { x: 2282, y: 1124, width: 72, height: 28 },
      },
      labels: enLabels,
    },

    nodes: [
      {
        id: 'united_states', col: 0, order: 0, type: 'source',
        label: 'United States', value: 880, notes: ['+14% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'international', col: 0, order: 1, type: 'source',
        label: 'International', value: 486, notes: ['+14% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 1366, notes: ['+14% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 662, notes: ['48% margin', '(2pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 704,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 57, notes: ['4% margin', '+3pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 606,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_loss', col: 4, order: 0, type: 'cost',
        label: 'Net loss', value: -45, valueText: '($45M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other', col: 5, order: 0, type: 'cost',
        label: 'Other', value: 103,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 1, type: 'cost',
        label: 'R&D', value: 269, notes: ['20% of revenue', '(1pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 2, type: 'cost',
        label: 'S&M', value: 222, notes: ['16% of revenue', '(2pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 3, type: 'cost',
        label: 'G&A', value: 109, notes: ['8% of revenue', '(2pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'united_states', target: 'revenue', value: 880, width: 226, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 486, width: 124, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 662, width: 169, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 704, width: 180, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 57, width: 14, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 606, width: 155, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'operating_profit', target: 'other', value: 57, percent: 55.3, width: 14,
        sourceOrder: 0, targetOrder: 1, y0: 441, y1: 516, linkTint: RED_LINK,
        curve: { c1x: 1970, c1y: 441, c2x: 2140, c2y: 516 },
      },
      {
        source: 'net_loss', target: 'other', value: 45, percent: 43.7, width: 12,
        sourceOrder: 0, targetOrder: 0, y0: 440, y1: 503, linkTint: RED_LINK,
        curve: { c1x: 2250, c1y: 440, c2x: 2266, c2y: 503 },
      },

      { source: 'operating_expenses', target: 'rnd', value: 269, width: 70, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 222, width: 57, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 109, width: 28, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['DBNE'],
      zh: {
        name: 'Twilio · 2025 财年第四季度',
        meta: {
          title: 'Twilio 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1770,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +14%'] },
          international: { label: '国际', notes: ['同比 +14%'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 48%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 +3 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_loss: { label: '净亏损' },
          other: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 20%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 16%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 (2 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
