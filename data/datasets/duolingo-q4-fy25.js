/* ====================================================================
 * Duolingo - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/duolingo-q4-fy25.png as a fixed
 * d3-sankey layout with validated runtime raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const DUO = '#58cc02';
  const CARD = '#57cc02';
  const DUO_LINK = '#ade086';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const SCALE = 1.32;

  const h = (value) => Math.round(value * SCALE * 10) / 10;

  const kpiCard = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="148" rx="24" fill="${CARD}"/>
      ${lines
        .map(
          (line) =>
            `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#f2f2f2">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const annotations = (dau, mau, paidSubscribers, bookings, yoy) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(33, 1196, 209, [
        { text: 'DAU', y: 51, size: 26, weight: 800 },
        { text: dau, y: 91, size: 26 },
        { text: yoy ? `${yoy} +30%` : '+30% Y/Y', y: 125, size: 20 },
      ])}
      ${kpiCard(256, 1196, 208, [
        { text: 'MAU', y: 51, size: 26, weight: 800 },
        { text: mau, y: 91, size: 26 },
        { text: yoy ? `${yoy} +14%` : '+14% Y/Y', y: 125, size: 20 },
      ])}
      ${kpiCard(479, 1196, 352, [
        { text: paidSubscribers, y: 51, size: 26, weight: 800 },
        { text: '12.2M', y: 91, size: 26 },
        { text: yoy ? `${yoy} +28%` : '+28% Y/Y', y: 125, size: 20 },
      ])}
      ${kpiCard(845, 1196, 209, [
        { text: bookings, y: 51, size: 26, weight: 800 },
        { text: '$337M', y: 91, size: 26 },
        { text: yoy ? `${yoy} +24%` : '+24% Y/Y', y: 125, size: 20 },
      ])}
    </g>`;

  const annotationsEn = annotations('53M', '133M', 'Paid subscribers', 'Bookings', '');
  const annotationsZh = annotations('5300万', '1.33亿', '付费订阅用户', '预订额', '同比');

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'duolingo-q4-fy25',
    name: 'Duolingo · Q4 FY25',
    company: 'Duolingo',
    meta: {
      company: 'Duolingo',
      title: 'Duolingo Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/duolingo-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1335,
      titleY: 203,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2286,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/duolingo/company-wordmark.png',
        x: 629,
        y: 297,
        width: 595,
        height: 158,
      },
      {
        key: 'subscription-mascot',
        href: 'data/assets/raster-annotations/duolingo/subscription-mascot.png',
        x: 176,
        y: 564,
        width: 204,
        height: 170,
      },
    ],

    layout: {
      scale: SCALE,
      nodes: {
        subscription: { x: 424, y: 528, width: 72, height: h(242.286) },
        other_revenue: { x: 424, y: 1061, width: 72, height: h(40.582) },
        revenue: { x: 891, y: 624, width: 72, height: h(282.868) },
        gross_profit: { x: 1358, y: 525, width: 72, height: h(205.869) },
        cost_of_revenue: { x: 1358, y: 1011, width: 72, height: h(76.999) },
        operating_profit: { x: 1826, y: 446, width: 72, height: h(43.454) },
        operating_expenses: { x: 1826, y: 668, width: 72, height: h(162.415) },
        interest: { x: 2173, y: 437, width: 72, height: h(11.596) },
        net_profit: { x: 2292, y: 353, width: 72, height: h(41.954) },
        tax: { x: 2292, y: 584, width: 72, height: h(12.547) },
        rnd: { x: 2292, y: 693, width: 72, height: h(79.556) },
        ga: { x: 2292, y: 931, width: 72, height: h(48.488) },
        sm: { x: 2292, y: 1123, width: 72, height: h(34.371) },
      },
      labels: {
        subscription: {
          blocks: [
            {
              x: 465, top: 424, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400, color: BLACK },
                { text: '+39% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 278, top: 738, anchor: 'middle',
              lines: [{ text: 'Subscription', size: 40, weight: 800, color: DUO }],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 464, top: 960, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 132, top: 1031, anchor: 'middle', lineGap: 19,
              lines: [
                { text: 'Advertising', size: 22, weight: 400, color: NOTE },
                { text: 'English Test', size: 22, weight: 400, color: NOTE },
                { text: 'In-app Purchase', size: 22, weight: 400, color: NOTE },
              ],
            },
            {
              x: 333, top: 1067, anchor: 'middle',
              lines: [{ text: 'Other', size: 40, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 926, top: 473, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+35% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1399, top: 333, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '73% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1394, top: 1129, anchor: 'middle',
              lines: [{ text: 'Cost of', size: 34, weight: 800 }],
            },
            {
              x: 1394, top: 1184, anchor: 'middle',
              lines: [{ text: 'revenue', size: 34, weight: 800 }],
            },
            {
              x: 1394, top: 1224, anchor: 'middle',
              lines: [{ text: '$value', size: 34, weight: 400 }],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1867, top: 253, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '15% margin', size: 29, weight: 400, color: NOTE },
                { text: '+9pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1864, top: 901, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2210, top: 463, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2504, top: 338, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2496, top: 545, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2500, top: 688, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '28% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2505, top: 906, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '17% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2499, top: 1107, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '12% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'subscription', col: 0, order: 0, type: 'source',
        label: 'Subscription', value: 242.286, valueText: '$242M', notes: ['+39% Y/Y'],
        color: DUO, labelColor: DUO, linkTint: DUO_LINK,
      },
      {
        id: 'other_revenue', col: 0, order: 1, type: 'source',
        label: 'Other', value: 40.582, valueText: '$41M',
        notes: ['+15% Y/Y', 'Advertising', 'English Test', 'In-app Purchase'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 282.868, valueText: '$283M', notes: ['+35% Y/Y'],
        color: BLACK, labelColor: BLACK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 205.869, valueText: '$206M', notes: ['73% margin', '+1pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 76.999, valueText: '($77M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 43.454, valueText: '$43M', notes: ['15% margin', '+9pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 162.415, valueText: '($162M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'interest', col: 4, order: 0, type: 'profit',
        label: 'Interest', value: 11.596, valueText: '$12M',
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 41.954, valueText: '$42M',
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 12.547, valueText: '($12M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 2, type: 'cost',
        label: 'R&D', value: 79.556, valueText: '($80M)', notes: ['28% of revenue', '(4pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 3, type: 'cost',
        label: 'G&A', value: 48.488, valueText: '($48M)', notes: ['17% of revenue', '(5pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 4, type: 'cost',
        label: 'S&M', value: 34.371, valueText: '($34M)', notes: ['12% of revenue', '+0pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 242.286, width: h(242.286), sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'revenue', value: 40.582, width: h(40.582), sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 205.869, width: h(205.869), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 76.999, width: h(76.999), sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 43.454, width: h(43.454), sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 162.415, width: h(162.415), sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 30.358, width: h(30.907), sourceWidth: h(30.907), targetWidth: h(30.358), sourceOrder: 0, targetOrder: 0, percentText: '70%' },
      { source: 'operating_profit', target: 'tax', value: 12.547, width: h(12.547), sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 11.596, width: h(11.596), sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 79.556, width: h(79.556), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 48.488, width: h(48.488), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 34.371, width: h(34.371), sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Duolingo · 2025 财年第四季度',
        meta: {
          title: 'Duolingo 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1680,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +39%'] },
          other_revenue: { label: '其他', notes: ['同比 +15%', '广告', '英语测试', '应用内购买'] },
          revenue: { label: '收入', notes: ['同比 +35%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +9 个百分点'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 28%', '同比 (4 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 17%', '同比 (5 个百分点)'] },
          sm: { label: '销售与营销', notes: ['占收入 12%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: {
            subscription: {
              blocks: [
                {
                  x: 465, top: 424, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400, color: BLACK },
                    { text: '同比 +39%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 278, top: 738, anchor: 'middle',
                  lines: [{ text: '订阅', size: 40, weight: 800, color: DUO }],
                },
              ],
            },
            other_revenue: {
              blocks: [
                {
                  x: 464, top: 960, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +15%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 132, top: 1031, anchor: 'middle', lineGap: 19,
                  lines: [
                    { text: '广告', size: 22, weight: 400, color: NOTE },
                    { text: '英语测试', size: 22, weight: 400, color: NOTE },
                    { text: '应用内购买', size: 22, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 333, top: 1067, anchor: 'middle',
                  lines: [{ text: '其他', size: 40, weight: 800 }],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 926, top: 473, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +35%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1399, top: 333, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 73%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1394, top: 1129, anchor: 'middle',
                  lines: [{ text: '收入', size: 34, weight: 800 }],
                },
                {
                  x: 1394, top: 1184, anchor: 'middle',
                  lines: [{ text: '成本', size: 34, weight: 800 }],
                },
                {
                  x: 1394, top: 1224, anchor: 'middle',
                  lines: [{ text: '$value', size: 34, weight: 400 }],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1867, top: 253, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 15%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +9 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1864, top: 901, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '运营', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 2210, top: 463, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2504, top: 338, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2496, top: 545, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2500, top: 688, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 28%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2505, top: 906, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 17%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2499, top: 1107, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 12%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();
