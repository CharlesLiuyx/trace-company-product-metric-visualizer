/* ====================================================================
 *  Meituan - Q1 FY26 income statement (RMB B)
 *  Reconstructed from input/processed/meituan-q1-fy26.png as a fixed
 *  d3-sankey layout with a whitelisted company-logo raster annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const DARK = '#141414';
  const YELLOW = '#f8d347';
  const YELLOW_LINK = '#f4e4a5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#818181';
  const SCALE = 3.92;
  const h = (value) => Math.round(value * SCALE);

  const kpiCard = (x, y, width, height, content) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="30" fill="${YELLOW}"/>
      ${content}
    </g>`;

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="328" y="273" text-anchor="middle" font-size="41" font-weight="800" fill="${TITLE}">${L.inRmb}</text>
      ${kpiCard(
        80,
        1174,
        334,
        178,
        `
          <text x="247" y="1240" text-anchor="middle" font-size="29" font-weight="800" fill="${DARK}">${L.seg1Name}</text>
          <text x="247" y="1283" text-anchor="middle" font-size="36" font-weight="500" fill="${DARK}">64.1B</text>
          <text x="247" y="1320" text-anchor="middle" font-size="28" font-weight="500" fill="${NOTE}">${L.seg1Yoy}</text>
        `
      )}
      ${kpiCard(
        426,
        1174,
        283,
        178,
        `
          <text x="567" y="1240" text-anchor="middle" font-size="29" font-weight="800" fill="${DARK}">${L.seg2Name}</text>
          <text x="567" y="1283" text-anchor="middle" font-size="36" font-weight="500" fill="${DARK}">${L.seg2Val}</text>
          <text x="567" y="1320" text-anchor="middle" font-size="28" font-weight="500" fill="${NOTE}">${L.seg2Yoy}</text>
        `
      )}
    </g>`;

  const annotationsEn = annotations({
    inRmb: 'in RMB',
    seg1Name: 'Core Local Commerce',
    seg1Yoy: '+0% Y/Y',
    seg2Name: 'New initiatives',
    seg2Val: 'RMB 27.0B',
    seg2Yoy: '+22% Y/Y',
  });

  const annotationsZh = annotations({
    inRmb: '单位：人民币',
    seg1Name: '核心本地商业',
    seg1Yoy: '同比 +0%',
    seg2Name: '新业务',
    seg2Val: 'RMB 27.0B',
    seg2Yoy: '同比 +22%',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'meituan-q1-fy26',
    name: 'Meituan · Q1 FY26',
    company: 'Meituan',
    meta: {
      company: 'Meituan',
      title: 'Meituan Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/meituan-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 200,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2238,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: YELLOW, label: DARK },
        hub: { node: YELLOW, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: YELLOW_LINK,
        hub: YELLOW_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 37, value: 36, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'company-logo',
        href: 'data/assets/raster-annotations/meituan/company-logo.png',
        x: 783,
        y: 233,
        width: 225,
        height: 224,
      },
    ],

    layout: {
      scale: SCALE,
      nodes: {
        delivery: { x: 393, y: 412, width: 73, height: h(25.0) },
        merchant: { x: 393, y: 618, width: 73, height: 150 },
        product_sales: { x: 393, y: 892, width: 73, height: h(21.0) },
        other_seg: { x: 393, y: 1087, width: 73, height: h(7.0) },
        revenue: { x: 860, y: 619, width: 73, height: h(91.0) },
        gross_profit: { x: 1327, y: 497, width: 72, height: h(26.0) },
        cost_of_revenue: { x: 1327, y: 846, width: 72, height: h(65.1) },
        other_income: { x: 1580, y: 500, width: 72, height: 4 },
        operating_loss: { x: 1580, y: 814, width: 72, height: h(6.5) },
        operating_expenses: { x: 1795, y: 585, width: 72, height: h(33.4) },
        sm: { x: 2262, y: 371, width: 72, height: h(23.0) },
        rnd: { x: 2262, y: 721, width: 72, height: h(7.0) },
        ga: { x: 2262, y: 968, width: 72, height: h(2.9) },
        provisions: { x: 2262, y: 1185, width: 72, height: 3 },
      },
      labels: {
        delivery: {
          blocks: [
            {
              x: 430, top: 318, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 36, weight: 400 },
                { text: '(3%) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 220, top: 421, anchor: 'middle', lineGap: 4,
              lines: [
                { text: 'Delivery', size: 37, weight: 800 },
                { text: 'services', size: 37, weight: 800 },
              ],
            },
          ],
        },
        merchant: {
          blocks: [
            {
              x: 430, top: 524, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 36, weight: 400 },
                { text: '+3% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 222, top: 647, anchor: 'middle', lineGap: 4,
              lines: [
                { text: 'Marchant', size: 37, weight: 800 },
                { text: 'services', size: 37, weight: 800 },
              ],
            },
          ],
        },
        product_sales: {
          blocks: [
            {
              x: 430, top: 799, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 36, weight: 400 },
                { text: '+47% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            { x: 215, top: 913, anchor: 'middle', lines: [{ text: 'Product sales', size: 37, weight: 800 }] },
          ],
        },
        other_seg: {
          blocks: [
            {
              x: 430, top: 994, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 36, weight: 400 },
                { text: '(25%) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            { x: 208, top: 1078, anchor: 'middle', lines: [{ text: 'Other', size: 37, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 890, top: 478, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Revenue', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '+6% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1363, top: 317, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Gross profit', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '29% margin', size: 27, weight: 400, color: NOTE },
                { text: '(9pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1362, top: 1123, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 37, weight: 800 },
                { text: 'revenue', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 1616, top: 405, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Other', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1615, top: 863, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Operating', size: 37, weight: 800 },
                { text: 'loss', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '(7%) margin', size: 27, weight: 400, color: NOTE },
                { text: '+19pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1833, top: 425, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 37, weight: 800 },
                { text: 'expenses', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2492, top: 365, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Selling &', size: 31, weight: 800 },
                { text: 'marketing', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '25% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+8pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2492, top: 680, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Research &', size: 31, weight: 800 },
                { text: 'development', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '8% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2491, top: 918, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'General', size: 31, weight: 800 },
                { text: '& admin', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '3% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        provisions: {
          blocks: [
            {
              x: 2493, top: 1162, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Provisions (0.5B)', size: 31, weight: 800 },
                { text: '1% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'delivery', col: 0, order: 0, type: 'source', label: ['Delivery', 'services'], value: 25.0, valueText: '25.0B', notes: ['(3%) Y/Y'], color: YELLOW, labelColor: DARK, linkTint: YELLOW_LINK },
      { id: 'merchant', col: 0, order: 1, type: 'source', label: ['Marchant', 'services'], value: 38.1, notes: ['+3% Y/Y'], color: YELLOW, labelColor: DARK, linkTint: YELLOW_LINK },
      { id: 'product_sales', col: 0, order: 2, type: 'source', label: 'Product sales', value: 21.0, valueText: '21.0B', notes: ['+47% Y/Y'], color: YELLOW, labelColor: DARK, linkTint: YELLOW_LINK },
      { id: 'other_seg', col: 0, order: 3, type: 'source', label: 'Other', value: 7.0, valueText: '7.0B', notes: ['(25%) Y/Y'], color: YELLOW, labelColor: DARK, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 91.0, valueText: '91.0B', notes: ['+6% Y/Y'], color: YELLOW, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 26.0, valueText: '26.0B', notes: ['29% margin', '(9pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 65.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 1.0, valueText: '1.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -6.5, notes: ['(7%) margin', '+19pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 33.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: ['Selling &', 'marketing'], value: 23.0, valueText: '(23.0B)', notes: ['25% of revenue', '+8pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: ['Research &', 'development'], value: 7.0, valueText: '(7.0B)', notes: ['8% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: ['General', '& admin'], value: 2.9, notes: ['3% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'provisions', col: 5, order: 3, type: 'cost', label: 'Provisions', value: 0.5, notes: ['1% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'delivery', target: 'revenue', value: 25.0, width: h(25.0), sourceOrder: 0, targetOrder: 0 },
      { source: 'merchant', target: 'revenue', value: 38.1, width: 150, sourceOrder: 0, targetOrder: 1 },
      { source: 'product_sales', target: 'revenue', value: 21.0, width: h(21.0), sourceOrder: 0, targetOrder: 2 },
      { source: 'other_seg', target: 'revenue', value: 7.0, width: h(7.0), sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 26.0, width: h(26.0), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 65.1, width: h(65.1), sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_expenses', value: 26.0, width: h(26.0), sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      {
        source: 'other_income', target: 'operating_expenses', value: 1.0, width: 4,
        sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK,
        y0: 502, y1: 587,
        curve: { x0: 1652, x1: 1795, c1x: 1712, c2x: 1748, c1y: 502, c2y: 587 },
      },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 6.5, width: h(6.5),
        sourceOrder: 0, targetOrder: 2, linkTint: RED_LINK,
        y0: 826, y1: 703,
        curve: { x0: 1652, x1: 1795, c1x: 1712, c2x: 1748, c1y: 826, c2y: 703 },
      },

      { source: 'operating_expenses', target: 'sm', value: 23.0, width: h(23.0), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 7.0, width: h(7.0), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 2.9, width: h(2.9), sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'provisions', value: 0.5, width: 3, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Meituan · 2026 财年第一季度',
        meta: {
          title: 'Meituan 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1850,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          delivery: { label: ['配送', '服务'], notes: ['同比 (3%)'] },
          merchant: { label: ['商家', '服务'], notes: ['同比 +3%'] },
          product_sales: { label: '商品销售', notes: ['同比 +47%'] },
          other_seg: { label: '其他', notes: ['同比 (25%)'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 29%', '同比 (9 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          other_income: { label: '其他' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (7%)', '同比 +19 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与营销', notes: ['占收入 25%', '同比 +8 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 8%', '同比 +1 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 3%', '同比 +0 个百分点'] },
          provisions: { label: '拨备', notes: ['占收入 1%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: {
            delivery: {
              blocks: [
                {
                  x: 430, top: 318, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 36, weight: 400 },
                    { text: '同比 (3%)', size: 27, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 220, top: 421, anchor: 'middle', lineGap: 4,
                  lines: [
                    { text: '配送', size: 37, weight: 800 },
                    { text: '服务', size: 37, weight: 800 },
                  ],
                },
              ],
            },
            merchant: {
              blocks: [
                {
                  x: 430, top: 524, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 36, weight: 400 },
                    { text: '同比 +3%', size: 27, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 222, top: 647, anchor: 'middle', lineGap: 4,
                  lines: [
                    { text: '商家', size: 37, weight: 800 },
                    { text: '服务', size: 37, weight: 800 },
                  ],
                },
              ],
            },
            product_sales: {
              blocks: [
                {
                  x: 430, top: 799, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 36, weight: 400 },
                    { text: '同比 +47%', size: 27, weight: 400, color: NOTE },
                  ],
                },
                { x: 215, top: 913, anchor: 'middle', lines: [{ text: '商品销售', size: 37, weight: 800 }] },
              ],
            },
            other_seg: {
              blocks: [
                {
                  x: 430, top: 994, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 36, weight: 400 },
                    { text: '同比 (25%)', size: 27, weight: 400, color: NOTE },
                  ],
                },
                { x: 208, top: 1078, anchor: 'middle', lines: [{ text: '其他', size: 37, weight: 800 }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 890, top: 478, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '收入', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '同比 +6%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1363, top: 317, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '毛利润', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '毛利率 29%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 (9 个百分点)', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1362, top: 1123, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 37, weight: 800 },
                    { text: '成本', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            other_income: {
              blocks: [
                {
                  x: 1616, top: 405, anchor: 'middle', lineGap: 5,
                  lines: [
                    { text: '其他', size: 32, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            operating_loss: {
              blocks: [
                {
                  x: 1615, top: 863, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '营业', size: 37, weight: 800 },
                    { text: '亏损', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '利润率 (7%)', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +19 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1833, top: 425, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 37, weight: 800 },
                    { text: '费用', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2492, top: 365, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '销售与', size: 31, weight: 800 },
                    { text: '营销', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 25%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +8 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2492, top: 680, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '研究与', size: 31, weight: 800 },
                    { text: '开发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 8%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2491, top: 918, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '一般及', size: 31, weight: 800 },
                    { text: '行政', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 3%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            provisions: {
              blocks: [
                {
                  x: 2493, top: 1162, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '拨备 (0.5B)', size: 31, weight: 800 },
                    { text: '占收入 1%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 27, weight: 400, color: NOTE },
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
