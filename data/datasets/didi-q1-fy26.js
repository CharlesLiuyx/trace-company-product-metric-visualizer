/* ====================================================================
 *  DiDi - Q1 FY26 income statement (RMB B)
 *  Reconstructed from input/processed/didi-q1-fy26.png as a fixed
 *  d3-sankey layout with whitelisted company-logo and segment-icon
 *  raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const ORANGE = '#ff7d41';
  const ORANGE_LINK = '#f7bca2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const DARK = '#5b5b5b';
  const NOTE = '#818181';
  const WHITE = '#ffffff';

  const kpiCard = (x, y, width, height, content) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="28" fill="${ORANGE}"/>
      ${content}
    </g>`;

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="328" y="288" text-anchor="middle" font-size="41" font-weight="800" fill="${TITLE}">${L.inRmb}</text>
      ${kpiCard(
        154,
        1200,
        259,
        150,
        `
          <text x="283" y="1253" text-anchor="middle" font-size="29" font-weight="800" fill="${WHITE}">${L.seg1Name}</text>
          <text x="283" y="1296" text-anchor="middle" font-size="36" font-weight="500" fill="${WHITE}">4.8B</text>
          <text x="283" y="1329" text-anchor="middle" font-size="28" font-weight="500" fill="${WHITE}">${L.seg1Yoy}</text>
        `
      )}
      ${kpiCard(
        427,
        1200,
        239,
        150,
        `
          <text x="546" y="1253" text-anchor="middle" font-size="29" font-weight="800" fill="${WHITE}">${L.seg2Name}</text>
          <text x="546" y="1296" text-anchor="middle" font-size="36" font-weight="500" fill="${WHITE}">${L.seg2Val}</text>
          <text x="546" y="1329" text-anchor="middle" font-size="28" font-weight="500" fill="${WHITE}">${L.seg2Yoy}</text>
        `
      )}
      <text x="873" y="1286" text-anchor="middle" font-size="27" font-weight="400" fill="${NOTE}">${L.gtvNote}</text>
    </g>`;

  const annotationsEn = annotations({
    inRmb: 'in RMB',
    seg1Name: 'Transactions',
    seg1Yoy: '+13% Y/Y',
    seg2Name: 'Core GTV',
    seg2Val: 'RMB 123.3B',
    seg2Yoy: '+21% Y/Y',
    gtvNote: 'GTV = Gross Transaction Value',
  });

  const annotationsZh = annotations({
    inRmb: '单位：人民币',
    seg1Name: '交易笔数',
    seg1Yoy: '同比 +13%',
    seg2Name: '核心 GTV',
    seg2Val: 'RMB 123.3B',
    seg2Yoy: '同比 +21%',
    gtvNote: 'GTV = 交易总额',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'didi-q1-fy26',
    name: 'DiDi · Q1 FY26',
    company: 'DiDi',
    meta: {
      company: 'DiDi',
      title: 'Didi Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/didi-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 203,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1957,
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
        source: { node: ORANGE, label: DARK },
        hub: { node: ORANGE, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: ORANGE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 37, value: 36, note: 27, lineGap: 11 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'company-logo',
        href: 'data/assets/raster-annotations/didi/company-logo.png',
        x: 565,
        y: 262,
        width: 530,
        height: 172,
      },
      {
        key: 'china-mobility-tile',
        href: 'data/assets/raster-annotations/didi/china-mobility-tile.png',
        x: 139,
        y: 490,
        width: 176,
        height: 146,
      },
    ],

    layout: {
      nodes: {
        china_mobility: { x: 399, y: 507, width: 70, height: 337 },
        international: { x: 399, y: 969, width: 70, height: 29 },
        other_initiatives: { x: 399, y: 1130, width: 70, height: 14 },
        revenue: { x: 866, y: 648, width: 71, height: 379 },
        gross_profit: { x: 1331, y: 518, width: 72, height: 74 },
        cost_of_revenue: { x: 1331, y: 831, width: 72, height: 305 },
        other_income: { x: 1629, y: 566, width: 71, height: 3 },
        operating_loss: { x: 1600, y: 886, width: 71, height: 5 },
        operating_expenses: { x: 1814, y: 668, width: 72, height: 81 },
        sm: { x: 2266, y: 502, width: 72, height: 34 },
        ga: { x: 2266, y: 771, width: 72, height: 18 },
        rnd: { x: 2266, y: 1003, width: 72, height: 15 },
        operations: { x: 2266, y: 1243, width: 72, height: 14 },
      },
      labels: {
        china_mobility: {
          blocks: [
            {
              x: 434, top: 407, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '52.2B', size: 36, weight: 400 },
                { text: '+9% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 222, top: 655, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'China Mobility', size: 37, weight: 800 },
                { text: '8% adjusted margin', size: 27, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        international: {
          blocks: [
            {
              x: 438, top: 868, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '4.5B', size: 36, weight: 400 },
                { text: '+41% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 213, top: 905, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'International', size: 37, weight: 800 },
                { text: '(65%) adjusted margin', size: 27, weight: 400, color: NOTE },
                { text: '(59pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_initiatives: {
          blocks: [
            {
              x: 439, top: 1033, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '2.1B', size: 36, weight: 400 },
                { text: 'Flat Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 206, top: 1063, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Other initiatives', size: 37, weight: 800 },
                { text: '(43%) adjusted margin', size: 27, weight: 400, color: NOTE },
                { text: '(18pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 901, top: 498, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 37, weight: 800 },
                { text: '58.7B', size: 36, weight: 400 },
                { text: '+10% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1363, top: 328, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'Gross profit', size: 37, weight: 800 },
                { text: '11.4B', size: 36, weight: 400 },
                { text: '19% margin', size: 27, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1364, top: 1148, anchor: 'middle', lineGap: 11,
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
              x: 1664, top: 474, anchor: 'middle', lineGap: 9,
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
              x: 1636, top: 905, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Operating', size: 37, weight: 800 },
                { text: 'loss', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '(1%) margin', size: 27, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1848, top: 506, anchor: 'middle', lineGap: 12,
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
              x: 2492, top: 503, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'S&M (5.1B)', size: 30, weight: 800 },
                { text: '9% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2486, top: 762, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'G&A (2.8B)', size: 30, weight: 800 },
                { text: '5% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2486, top: 993, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'R&D (2.4B)', size: 30, weight: 800 },
                { text: '4% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operations: {
          blocks: [
            {
              x: 2492, top: 1234, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Operations (2.2B)', size: 30, weight: 800 },
                { text: '4% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'china_mobility', col: 0, order: 0, type: 'source', label: 'China Mobility', value: 52.2, valueText: '52.2B', notes: ['+9% Y/Y', '8% adjusted margin', '+1pp Y/Y'], color: ORANGE, labelColor: DARK, linkTint: ORANGE_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 4.5, valueText: '4.5B', notes: ['+41% Y/Y', '(65%) adjusted margin', '(59pp) Y/Y'], color: ORANGE, labelColor: DARK, linkTint: ORANGE_LINK },
      { id: 'other_initiatives', col: 0, order: 2, type: 'source', label: 'Other initiatives', value: 2.1, valueText: '2.1B', notes: ['Flat Y/Y', '(43%) adjusted margin', '(18pp) Y/Y'], color: ORANGE, labelColor: DARK, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 58.7, valueText: '58.7B', notes: ['+10% Y/Y'], color: ORANGE, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 11.4, valueText: '11.4B', notes: ['19% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 47.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.4, valueText: '0.4B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.7, notes: ['(1%) margin', '+5pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 12.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 5.1, valueText: '(5.1B)', notes: ['9% of revenue', '+5pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 1, type: 'cost', label: 'G&A', value: 2.8, valueText: '(2.8B)', notes: ['5% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 2.4, valueText: '(2.4B)', notes: ['4% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 3, type: 'cost', label: 'Operations', value: 2.2, valueText: '(2.2B)', notes: ['4% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'china_mobility', target: 'revenue', value: 52.2, width: 336, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 4.5, width: 29, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_initiatives', target: 'revenue', value: 2.1, width: 14, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 11.4, width: 74, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 47.3, width: 305, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_expenses', value: 11.4, width: 74, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      {
        source: 'other_income', target: 'operating_expenses', value: 0.4, width: 3,
        sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK,
        y0: 568, y1: 670,
        curve: { x0: 1700, x1: 1814, c1x: 1745, c2x: 1780, c1y: 568, c2y: 670 },
      },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 0.7, width: 4,
        sourceOrder: 0, targetOrder: 2, linkTint: RED_LINK,
        y0: 889, y1: 746,
        curve: { x0: 1671, x1: 1814, c1x: 1722, c2x: 1772, c1y: 889, c2y: 746 },
      },

      { source: 'operating_expenses', target: 'sm', value: 5.1, width: 34, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 2.8, width: 18, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 2.4, width: 15, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations', value: 2.2, width: 14, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'DiDi · 2026 财年第一季度',
        meta: {
          title: 'Didi 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1750,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          china_mobility: { label: '中国出行', notes: ['同比 +9%', '经调整利润率 8%', '同比 +1 个百分点'] },
          international: { label: '国际业务', notes: ['同比 +41%', '经调整利润率 (65%)', '同比 (59 个百分点)'] },
          other_initiatives: { label: '其他新业务', notes: ['同比持平', '经调整利润率 (43%)', '同比 (18 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 19%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          other_income: { label: '其他' },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (1%)', '同比 +5 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          sm: { label: '销售与营销', notes: ['占收入 9%', '同比 +5 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 5%', '同比 +1 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 4%', '同比 (0 个百分点)'] },
          operations: { label: '运营', notes: ['占收入 4%', '同比 +1 个百分点'] },
        },
        layout: {
          labels: {
            china_mobility: {
              blocks: [
                {
                  x: 434, top: 407, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '52.2B', size: 36, weight: 400 },
                    { text: '同比 +9%', size: 27, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 222, top: 655, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '中国出行', size: 37, weight: 800 },
                    { text: '经调整利润率 8%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            international: {
              blocks: [
                {
                  x: 438, top: 868, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '4.5B', size: 36, weight: 400 },
                    { text: '同比 +41%', size: 27, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 213, top: 905, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '国际业务', size: 37, weight: 800 },
                    { text: '经调整利润率 (65%)', size: 27, weight: 400, color: NOTE },
                    { text: '同比 (59 个百分点)', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_initiatives: {
              blocks: [
                {
                  x: 439, top: 1033, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '2.1B', size: 36, weight: 400 },
                    { text: '同比持平', size: 27, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 206, top: 1063, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '其他新业务', size: 37, weight: 800 },
                    { text: '经调整利润率 (43%)', size: 27, weight: 400, color: NOTE },
                    { text: '同比 (18 个百分点)', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 901, top: 498, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '收入', size: 37, weight: 800 },
                    { text: '58.7B', size: 36, weight: 400 },
                    { text: '同比 +10%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1363, top: 328, anchor: 'middle', lineGap: 14,
                  lines: [
                    { text: '毛利润', size: 37, weight: 800 },
                    { text: '11.4B', size: 36, weight: 400 },
                    { text: '毛利率 19%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1364, top: 1148, anchor: 'middle', lineGap: 11,
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
                  x: 1664, top: 474, anchor: 'middle', lineGap: 9,
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
                  x: 1636, top: 905, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '营业', size: 37, weight: 800 },
                    { text: '亏损', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '利润率 (1%)', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +5 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1848, top: 506, anchor: 'middle', lineGap: 12,
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
                  x: 2492, top: 503, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '销售与营销 (5.1B)', size: 30, weight: 800 },
                    { text: '占收入 9%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +5 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2486, top: 762, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '一般及行政 (2.8B)', size: 30, weight: 800 },
                    { text: '占收入 5%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2486, top: 993, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '研发 (2.4B)', size: 30, weight: 800 },
                    { text: '占收入 4%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operations: {
              blocks: [
                {
                  x: 2492, top: 1234, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '运营 (2.2B)', size: 30, weight: 800 },
                    { text: '占收入 4%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 27, weight: 400, color: NOTE },
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
