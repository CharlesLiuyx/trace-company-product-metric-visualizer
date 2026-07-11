/* ====================================================================
 * Boeing - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/boeing-q1-fy26.png as a fixed
 * d3-sankey layout with a vector Boeing wordmark logo, two whitelisted
 * runtime raster segment icons (737 + Starliner), and pure SVG/text
 * annotations.
 *
 * Topology: Commercial Airplanes + Defense, Space & Security +
 * Global Services + Other -> Revenue hub -> Gross profit + Cost of
 * sales; Gross profit -> Operating profit + Operating expenses;
 * Operating expenses -> G&A + R&D; Operating profit + Net loss ->
 * combined non-operating/tax "Other" outflow ($0.4B operating profit
 * turns into a $7M net loss).
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NAVY = '#0030a2';
  const NAVY_LINK = '#8296c8';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#96c896';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const LOSS_LINK = '#e3aeae';
  const NOTE = '#666666';
  const LOGO_BLUE = '#0033a1';

  /* Boeing symbol (orbit ring + diagonal blade + swoosh contrail) traced
   * in source coordinates from input/processed/boeing-q1-fy26.png; the
   * "BOEING" wordmark is set in Montserrat bold-italic to approximate the
   * custom brand type. Company name is exempt from i18n fallback checks. */
  const boeingLogo = `
    <g data-typography-role="brand">
      <g fill="${LOGO_BLUE}">
        <circle cx="748" cy="368" r="43" fill="none" stroke="${LOGO_BLUE}" stroke-width="6.5"/>
        <path d="M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z"/>
        <path d="M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z"/>
      </g>
      <text x="880" y="391" font-family="Montserrat,Arial,sans-serif" font-size="72" font-weight="800" font-style="italic" textLength="460" lengthAdjust="spacingAndGlyphs" letter-spacing="1" fill="${LOGO_BLUE}">BOEING</text>
    </g>`;

  const CARD_BASELINES = [50, 92, 128];
  const statsCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="26" fill="${NAVY}"/>
      ${lines
        .map((line, index) => `<text x="${x + width / 2}" y="${y + CARD_BASELINES[index]}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`)
        .join('')}
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${boeingLogo}
      ${statsCard(73, 1177, 446, 158, [
        { text: 'Deliveries', size: 30, weight: 700 },
        { text: '143 commercial airplanes', size: 30, weight: 400 },
        { text: '+10% Y/Y', size: 26, weight: 400 },
      ])}
      ${statsCard(531, 1177, 240, 158, [
        { text: 'Backlog', size: 30, weight: 700 },
        { text: '$695B', size: 30, weight: 400 },
        { text: '+2% Y/Y', size: 26, weight: 400 },
      ])}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${boeingLogo}
      ${statsCard(73, 1177, 446, 158, [
        { text: '交付', size: 30, weight: 700 },
        { text: '143 架商用飞机', size: 28, weight: 400 },
        { text: '同比 +10%', size: 26, weight: 400 },
      ])}
      ${statsCard(531, 1177, 240, 158, [
        { text: '订单储备', size: 30, weight: 700 },
        { text: '$695B', size: 30, weight: 400 },
        { text: '同比 +2%', size: 26, weight: 400 },
      ])}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'boeing-q1-fy26',
    name: 'Boeing · Q1 FY26',
    company: 'Boeing',
    meta: {
      company: 'Boeing',
      title: 'Boeing Q1 FY26 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/boeing-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 200,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2137,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: NAVY_LINK,
        hub: NAVY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
      allowRasterAnnotations: true,
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      {
        key: 'boeing-737-tile',
        href: 'data/assets/raster-annotations/boeing/commercial-airplanes-737.png',
        x: 99, y: 325, width: 291, height: 98,
      },
      {
        key: 'boeing-starliner-tile',
        href: 'data/assets/raster-annotations/boeing/defense-starliner.png',
        x: 197, y: 574, width: 136, height: 129,
      },
    ],

    layout: {
      nodes: {
        commercial_airplanes: { x: 429, y: 446, width: 72, height: 136 },
        defense: { x: 429, y: 717, width: 72, height: 112 },
        global_services: { x: 429, y: 946, width: 72, height: 79 },
        other_seg: { x: 429, y: 1122, width: 72, height: 2 },
        seg_hub: { x: 806, y: 615, width: 72, height: 329 },
        revenue: { x: 1178, y: 703, width: 72, height: 329 },
        gross_profit: { x: 1552, y: 607, width: 72, height: 37 },
        cost_of_sales: { x: 1552, y: 828, width: 72, height: 292 },
        operating_profit: { x: 1926, y: 531, width: 72, height: 6 },
        operating_expenses: { x: 1926, y: 748, width: 72, height: 31 },
        net_loss: { x: 2187, y: 533, width: 80, height: 1 },
        other: { x: 2300, y: 455, width: 72, height: 7 },
        ga: { x: 2300, y: 912, width: 72, height: 18 },
        rnd: { x: 2300, y: 1102, width: 72, height: 13 },
      },
      labels: {
        commercial_airplanes: {
          blocks: [
            {
              x: 470, top: 345, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+13% Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
            {
              x: 254, top: 429, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Commercial', size: 35, weight: 800 },
                { text: 'Airplanes', size: 35, weight: 800 },
              ],
            },
            {
              x: 252, top: 536, anchor: 'middle',
              lines: [{ text: '(6%) segment margin', size: 25, weight: 400, color: NOTE }],
            },
          ],
        },
        defense: {
          blocks: [
            {
              x: 465, top: 618, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+21% Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
            {
              x: 250, top: 704, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Defense, Space', size: 35, weight: 800 },
                { text: '& Security', size: 35, weight: 800 },
              ],
            },
            {
              x: 250, top: 804, anchor: 'middle',
              lines: [{ text: '3% segment margin', size: 25, weight: 400, color: NOTE }],
            },
          ],
        },
        global_services: {
          blocks: [
            {
              x: 459, top: 846, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+6% Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
            {
              x: 248, top: 939, anchor: 'middle',
              lines: [{ text: 'Global Services', size: 35, weight: 800 }],
            },
            {
              x: 249, top: 997, anchor: 'middle',
              lines: [{ text: '18% segment margin', size: 25, weight: 400, color: NOTE }],
            },
          ],
        },
        other_seg: {
          blocks: [
            {
              x: 465, top: 1066, anchor: 'middle',
              lines: [{ text: '$value', size: 40, weight: 400 }],
            },
            {
              x: 360, top: 1100, anchor: 'middle',
              lines: [{ text: 'Other', size: 35, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1209, top: 549, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 35, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+14% Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1591, top: 415, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 35, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '11% margin', size: 25, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1591, top: 1133, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of sales', size: 35, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1962, top: 338, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 35, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '2% margin', size: 25, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1960, top: 797, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 35, weight: 800 },
                { text: 'expenses', size: 35, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        net_loss: {
          blocks: [
            {
              x: 2227, top: 552, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net loss', size: 30, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2492, top: 420, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 30, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2491, top: 880, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 30, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2491, top: 1066, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 30, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
              ],
            },
          ],
        },
        seg_hub: { blocks: [] },
      },
    },

    nodes: [
      {
        id: 'commercial_airplanes', col: 0, order: 0, type: 'source',
        label: 'Commercial Airplanes', value: 9.2, notes: ['+13% Y/Y', '(6%) segment margin'],
        color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK,
      },
      {
        id: 'defense', col: 0, order: 1, type: 'source',
        label: 'Defense, Space & Security', value: 7.6, notes: ['+21% Y/Y', '3% segment margin'],
        color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK,
      },
      {
        id: 'global_services', col: 0, order: 2, type: 'source',
        label: 'Global Services', value: 5.4, notes: ['+6% Y/Y', '18% segment margin'],
        color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK,
      },
      {
        id: 'other_seg', col: 0, order: 3, type: 'source',
        label: 'Other', value: 0.045, valueText: '$45M',
        color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK,
      },
      {
        id: 'seg_hub', col: 1, order: 0, type: 'hub',
        label: '', value: 22.2,
        color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 22.2, notes: ['+14% Y/Y'],
        color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 2.5, notes: ['11% margin', '(1pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_sales', col: 3, order: 1, type: 'cost',
        label: 'Cost of sales', value: 19.7,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Operating profit', value: 0.4, notes: ['2% margin', '(0pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 2.1,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_loss', col: 5, order: 0, type: 'cost',
        label: 'Net loss', value: -0.007, valueText: '($7M)',
        color: LOSS_LINK, labelColor: RED_LABEL, linkTint: LOSS_LINK,
      },
      {
        id: 'other', col: 6, order: 0, type: 'cost',
        label: 'Other', value: 0.4,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 6, order: 1, type: 'cost',
        label: 'G&A', value: 1.2,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 6, order: 2, type: 'cost',
        label: 'R&D', value: 0.9,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'commercial_airplanes', target: 'seg_hub', value: 9.2, width: 136, sourceOrder: 0, targetOrder: 0 },
      { source: 'defense', target: 'seg_hub', value: 7.6, width: 112, sourceOrder: 0, targetOrder: 1 },
      { source: 'global_services', target: 'seg_hub', value: 5.4, width: 79, sourceOrder: 0, targetOrder: 2 },
      { source: 'other_seg', target: 'seg_hub', value: 0.045, width: 2, sourceOrder: 0, targetOrder: 3, y0: 1123, y1: 942.5, curve: { c1x: 620, c1y: 1123, c2x: 700, c2y: 942.5 } },

      { source: 'seg_hub', target: 'revenue', value: 22.2, width: 329, sourceOrder: 0, targetOrder: 0 },

      { source: 'revenue', target: 'gross_profit', value: 2.5, width: 37, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 19.7, width: 292, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 0.4, width: 6, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.1, width: 31, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'operating_profit', target: 'other', value: 0.4, width: 6, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'net_loss', target: 'other', value: 0.007, width: 1, sourceOrder: 0, targetOrder: 1, y0: 533, y1: 461, linkTint: LOSS_LINK, curve: { c1x: 2283, c1y: 533, c2x: 2296, c2y: 461 } },

      { source: 'operating_expenses', target: 'ga', value: 1.2, width: 18, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, width: 13, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Boeing · 2026 财年第一季度',
        meta: {
          title: '波音 2026 财年第一季度利润表',
          titleSize: 120,
          titleTextLength: 1560,
        },
        nodes: {
          commercial_airplanes: { label: '商用飞机', notes: ['同比 +13%', '分部利润率 (6%)'] },
          defense: { label: '国防、太空与安全', notes: ['同比 +21%', '分部利润率 3%'] },
          global_services: { label: '全球服务', notes: ['同比 +6%', '分部利润率 18%'] },
          other_seg: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 11%', '同比 (1 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 (0 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_loss: { label: '净亏损' },
          other: { label: '其他' },
          ga: { label: '管理费用' },
          rnd: { label: '研发' },
        },
        annotationsSvg: annotationsZh,
        layout: {
          labels: {
            commercial_airplanes: {
              blocks: [
                {
                  x: 470, top: 345, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +13%', size: 25, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 254, top: 452, anchor: 'middle',
                  lines: [{ text: '商用飞机', size: 35, weight: 800 }],
                },
                {
                  x: 252, top: 536, anchor: 'middle',
                  lines: [{ text: '分部利润率 (6%)', size: 25, weight: 400, color: NOTE }],
                },
              ],
            },
            defense: {
              blocks: [
                {
                  x: 465, top: 618, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +21%', size: 25, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 250, top: 727, anchor: 'middle',
                  lines: [{ text: '国防、太空与安全', size: 35, weight: 800 }],
                },
                {
                  x: 266, top: 804, anchor: 'middle',
                  lines: [{ text: '分部利润率 3%', size: 25, weight: 400, color: NOTE }],
                },
              ],
            },
            global_services: {
              blocks: [
                {
                  x: 459, top: 846, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +6%', size: 25, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 248, top: 939, anchor: 'middle',
                  lines: [{ text: '全球服务', size: 35, weight: 800 }],
                },
                {
                  x: 249, top: 997, anchor: 'middle',
                  lines: [{ text: '分部利润率 18%', size: 25, weight: 400, color: NOTE }],
                },
              ],
            },
            other_seg: {
              blocks: [
                {
                  x: 465, top: 1066, anchor: 'middle',
                  lines: [{ text: '$value', size: 40, weight: 400 }],
                },
                {
                  x: 360, top: 1100, anchor: 'middle',
                  lines: [{ text: '其他', size: 35, weight: 800 }],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1209, top: 549, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 35, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +14%', size: 25, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1591, top: 415, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 35, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 11%', size: 25, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 25, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_sales: {
              blocks: [
                {
                  x: 1591, top: 1133, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售成本', size: 35, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1962, top: 338, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 35, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 2%', size: 25, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 25, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1960, top: 797, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 35, weight: 800 },
                    { text: '费用', size: 35, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            net_loss: {
              blocks: [
                {
                  x: 2227, top: 552, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '净亏损', size: 30, weight: 800 },
                    { text: '$value', size: 33, weight: 400 },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2492, top: 420, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 30, weight: 800 },
                    { text: '$value', size: 33, weight: 400 },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2491, top: 880, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 30, weight: 800 },
                    { text: '$value', size: 33, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2491, top: 1066, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研发', size: 30, weight: 800 },
                    { text: '$value', size: 33, weight: 400 },
                  ],
                },
              ],
            },
            seg_hub: { blocks: [] },
          },
        },
      },
    },
  });
})();
