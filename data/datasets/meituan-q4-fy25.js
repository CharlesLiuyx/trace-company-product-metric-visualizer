/* ====================================================================
 *  Meituan - Q4 FY25 income statement (RMB B)
 *  Reconstructed from input/processed/meituan-q4-fy25.png as a fixed
 *  d3-sankey layout with a reused whitelisted company-logo raster asset.
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
  const SCALE = 3.96;
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
        35,
        1202,
        379,
        148,
        `
          <text x="225" y="1258" text-anchor="middle" font-size="29" font-weight="800" fill="${DARK}">${L.seg1Name}</text>
          <text x="225" y="1296" text-anchor="middle" font-size="36" font-weight="500" fill="${DARK}">64.8B</text>
          <text x="225" y="1328" text-anchor="middle" font-size="28" font-weight="500" fill="${DARK}">${L.seg1Yoy}</text>
        `
      )}
      ${kpiCard(
        426,
        1202,
        380,
        148,
        `
          <text x="616" y="1258" text-anchor="middle" font-size="29" font-weight="800" fill="${DARK}">${L.seg2Name}</text>
          <text x="616" y="1296" text-anchor="middle" font-size="36" font-weight="500" fill="${DARK}">${L.seg2Val}</text>
          <text x="616" y="1328" text-anchor="middle" font-size="28" font-weight="500" fill="${DARK}">${L.seg2Yoy}</text>
        `
      )}
    </g>`;

  const annotationsEn = annotations({
    inRmb: 'in RMB',
    seg1Name: 'Core Local Commerce',
    seg1Yoy: '(1%) Y/Y',
    seg2Name: 'New initiatives',
    seg2Val: 'RMB 27.3B',
    seg2Yoy: '+19% Y/Y',
  });

  const annotationsZh = annotations({
    inRmb: '单位：人民币',
    seg1Name: '核心本地商业',
    seg1Yoy: '同比 (1%)',
    seg2Name: '新业务',
    seg2Val: 'RMB 27.3B',
    seg2Yoy: '同比 +19%',
  });

  const layoutLabelsEn = {
    delivery: {
      blocks: [
        {
          x: 430, top: 332, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 36, weight: 400 },
            { text: '(10%) Y/Y', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 220, top: 428, anchor: 'middle', lineGap: 4,
          lines: [
            { text: 'Delivery', size: 37, weight: 800 },
            { text: 'services', size: 37, weight: 800 },
          ],
        },
      ],
    },
    commission: {
      blocks: [
        {
          x: 430, top: 544, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 36, weight: 400 },
            { text: '+3% Y/Y', size: 27, weight: 400, color: NOTE },
          ],
        },
        { x: 220, top: 669, anchor: 'middle', lines: [{ text: 'Commission', size: 37, weight: 800 }] },
      ],
    },
    online_marketing: {
      blocks: [
        {
          x: 430, top: 760, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 36, weight: 400 },
            { text: '+3% Y/Y', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 220, top: 810, anchor: 'middle', lineGap: 4,
          lines: [
            { text: 'Oline marketing', size: 37, weight: 800 },
            { text: 'services', size: 37, weight: 800 },
          ],
        },
      ],
    },
    other_services_sales: {
      blocks: [
        {
          x: 430, top: 937, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 36, weight: 400 },
            { text: '+21% Y/Y', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 220, top: 1040, anchor: 'middle', lineGap: 4,
          lines: [
            { text: 'Other services', size: 37, weight: 800 },
            { text: '& sales', size: 37, weight: 800 },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 895, top: 485, anchor: 'middle', lineGap: 7,
          lines: [
            { text: 'Revenue', size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
            { text: '+4% Y/Y', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1363, top: 299, anchor: 'middle', lineGap: 7,
          lines: [
            { text: 'Gross profit', size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
            { text: '26% margin', size: 27, weight: 400, color: NOTE },
            { text: '(12pp) Y/Y', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1362, top: 1090, anchor: 'middle', lineGap: 8,
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
          x: 1626, top: 423, anchor: 'middle', lineGap: 5,
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
          x: 1615, top: 925, anchor: 'middle', lineGap: 6,
          lines: [
            { text: 'Operating', size: 37, weight: 800 },
            { text: 'loss', size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
            { text: '(17%) margin', size: 27, weight: 400, color: NOTE },
            { text: '(25pp) Y/Y', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1833, top: 452, anchor: 'middle', lineGap: 8,
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
          x: 2492, top: 407, anchor: 'middle', lineGap: 7,
          lines: [
            { text: 'Selling &', size: 31, weight: 800 },
            { text: 'marketing', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '34% of revenue', size: 27, weight: 400, color: NOTE },
            { text: '+15pp Y/Y', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: 2492, top: 682, anchor: 'middle', lineGap: 7,
          lines: [
            { text: 'Research &', size: 31, weight: 800 },
            { text: 'development', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '8% of revenue', size: 27, weight: 400, color: NOTE },
            { text: '+2pp Y/Y', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: 2492, top: 937, anchor: 'middle', lineGap: 7,
          lines: [
            { text: 'General', size: 31, weight: 800 },
            { text: '& admin', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '4% of revenue', size: 27, weight: 400, color: NOTE },
            { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    provisions: {
      blocks: [
        {
          x: 2492, top: 1194, anchor: 'middle', lineGap: 7,
          lines: [
            { text: 'Provisions (0.4B)', size: 31, weight: 800 },
            { text: '0% of revenue', size: 27, weight: 400, color: NOTE },
            { text: '+0pp Y/Y', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  const layoutLabelsZh = {
    delivery: {
      blocks: [
        {
          x: 430, top: 332, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 36, weight: 400 },
            { text: '同比 (10%)', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 220, top: 428, anchor: 'middle', lineGap: 4,
          lines: [
            { text: '配送', size: 37, weight: 800 },
            { text: '服务', size: 37, weight: 800 },
          ],
        },
      ],
    },
    commission: {
      blocks: [
        {
          x: 430, top: 544, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 36, weight: 400 },
            { text: '同比 +3%', size: 27, weight: 400, color: NOTE },
          ],
        },
        { x: 220, top: 669, anchor: 'middle', lines: [{ text: '佣金', size: 37, weight: 800 }] },
      ],
    },
    online_marketing: {
      blocks: [
        {
          x: 430, top: 760, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 36, weight: 400 },
            { text: '同比 +3%', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 220, top: 810, anchor: 'middle', lineGap: 4,
          lines: [
            { text: '在线营销', size: 37, weight: 800 },
            { text: '服务', size: 37, weight: 800 },
          ],
        },
      ],
    },
    other_services_sales: {
      blocks: [
        {
          x: 430, top: 937, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 36, weight: 400 },
            { text: '同比 +21%', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 220, top: 1040, anchor: 'middle', lineGap: 4,
          lines: [
            { text: '其他服务', size: 37, weight: 800 },
            { text: '与销售', size: 37, weight: 800 },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 895, top: 485, anchor: 'middle', lineGap: 7,
          lines: [
            { text: '收入', size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
            { text: '同比 +4%', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1363, top: 299, anchor: 'middle', lineGap: 7,
          lines: [
            { text: '毛利润', size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
            { text: '毛利率 26%', size: 27, weight: 400, color: NOTE },
            { text: '同比 (12 个百分点)', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1362, top: 1090, anchor: 'middle', lineGap: 8,
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
          x: 1626, top: 423, anchor: 'middle', lineGap: 5,
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
          x: 1615, top: 925, anchor: 'middle', lineGap: 6,
          lines: [
            { text: '营业', size: 37, weight: 800 },
            { text: '亏损', size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
            { text: '利润率 (17%)', size: 27, weight: 400, color: NOTE },
            { text: '同比 (25 个百分点)', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1833, top: 452, anchor: 'middle', lineGap: 8,
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
          x: 2492, top: 407, anchor: 'middle', lineGap: 7,
          lines: [
            { text: '销售与', size: 31, weight: 800 },
            { text: '营销', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 34%', size: 27, weight: 400, color: NOTE },
            { text: '同比 +15 个百分点', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: 2492, top: 682, anchor: 'middle', lineGap: 7,
          lines: [
            { text: '研究与', size: 31, weight: 800 },
            { text: '开发', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 8%', size: 27, weight: 400, color: NOTE },
            { text: '同比 +2 个百分点', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: 2492, top: 937, anchor: 'middle', lineGap: 7,
          lines: [
            { text: '一般及', size: 31, weight: 800 },
            { text: '行政', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 4%', size: 27, weight: 400, color: NOTE },
            { text: '同比 +1 个百分点', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    provisions: {
      blocks: [
        {
          x: 2492, top: 1194, anchor: 'middle', lineGap: 7,
          lines: [
            { text: '拨备 (0.4B)', size: 31, weight: 800 },
            { text: '占收入 0%', size: 27, weight: 400, color: NOTE },
            { text: '同比 +0 个百分点', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'meituan-q4-fy25',
    name: 'Meituan · Q4 FY25',
    company: 'Meituan',
    meta: {
      company: 'Meituan',
      title: 'Meituan Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/meituan-q4-fy25.png', width: 2667, height: 1500 },
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
        x: 789,
        y: 239,
        width: 211,
        height: 212,
      },
    ],

    layout: {
      scale: SCALE,
      nodes: {
        delivery: { x: 391, y: 441, width: 72, height: h(23.6) },
        commission: { x: 391, y: 656, width: 72, height: h(25.7) },
        online_marketing: { x: 391, y: 872, width: 72, height: h(13.3) },
        other_services_sales: { x: 391, y: 1046, width: 72, height: h(29.5) },
        revenue: { x: 859, y: 627, width: 72, height: h(92.1) },
        gross_profit: { x: 1325, y: 500, width: 72, height: h(24.1) },
        cost_of_revenue: { x: 1325, y: 809, width: 73, height: 270 },
        other_income: { x: 1591, y: 523, width: 72, height: h(2.6) },
        operating_loss: { x: 1578, y: 851, width: 72, height: h(16.1) },
        operating_expenses: { x: 1792, y: 628, width: 74, height: 170 },
        sm: { x: 2260, y: 413, width: 72, height: h(31.7) },
        rnd: { x: 2259, y: 756, width: 73, height: h(7.0) },
        ga: { x: 2260, y: 984, width: 72, height: h(3.7) },
        provisions: { x: 2260, y: 1222, width: 72, height: 2 },
      },
      labels: layoutLabelsEn,
    },

    nodes: [
      { id: 'delivery', col: 0, order: 0, type: 'source', label: ['Delivery', 'services'], value: 23.6, notes: ['(10%) Y/Y'], color: YELLOW, labelColor: DARK, linkTint: YELLOW_LINK },
      { id: 'commission', col: 0, order: 1, type: 'source', label: 'Commission', value: 25.7, notes: ['+3% Y/Y'], color: YELLOW, labelColor: DARK, linkTint: YELLOW_LINK },
      { id: 'online_marketing', col: 0, order: 2, type: 'source', label: ['Oline marketing', 'services'], value: 13.3, notes: ['+3% Y/Y'], color: YELLOW, labelColor: DARK, linkTint: YELLOW_LINK },
      { id: 'other_services_sales', col: 0, order: 3, type: 'source', label: ['Other services', '& sales'], value: 29.5, notes: ['+21% Y/Y'], color: YELLOW, labelColor: DARK, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 92.1, notes: ['+4% Y/Y'], color: YELLOW, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 24.1, notes: ['26% margin', '(12pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 68.0, valueText: '(68.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 2.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -16.1, notes: ['(17%) margin', '(25pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 42.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: ['Selling &', 'marketing'], value: 31.7, notes: ['34% of revenue', '+15pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: ['Research &', 'development'], value: 7.0, valueText: '(7.0B)', notes: ['8% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: ['General', '& admin'], value: 3.7, notes: ['4% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'provisions', col: 5, order: 3, type: 'cost', label: 'Provisions', value: 0.4, notes: ['0% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'delivery', target: 'revenue', value: 23.6, width: h(23.6), sourceOrder: 0, targetOrder: 0 },
      { source: 'commission', target: 'revenue', value: 25.7, width: h(25.7), sourceOrder: 0, targetOrder: 1 },
      { source: 'online_marketing', target: 'revenue', value: 13.3, width: h(13.3), sourceOrder: 0, targetOrder: 2 },
      { source: 'other_services_sales', target: 'revenue', value: 29.5, width: h(29.5), sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 24.1, width: h(24.1), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 68.0, width: 270, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_expenses', value: 24.1, width: h(24.1), sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      {
        source: 'other_income', target: 'operating_expenses', value: 2.6, width: h(2.6),
        sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK,
        y0: 528, y1: 633,
        curve: { x0: 1663, x1: 1792, c1x: 1714, c2x: 1748, c1y: 528, c2y: 633 },
      },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 16.1, width: 65,
        sourceOrder: 0, targetOrder: 2, linkTint: RED_LINK,
        y0: 883, y1: 766,
        curve: { x0: 1650, x1: 1792, c1x: 1710, c2x: 1748, c1y: 883, c2y: 766 },
      },

      { source: 'operating_expenses', target: 'sm', value: 31.7, width: h(31.7), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 7.0, width: h(7.0), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 3.7, width: h(3.7), sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'provisions', value: 0.4, width: 1, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Meituan · 2025 财年第四季度',
        meta: {
          title: 'Meituan 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1850,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          delivery: { label: ['配送', '服务'], notes: ['同比 (10%)'] },
          commission: { label: '佣金', notes: ['同比 +3%'] },
          online_marketing: { label: ['在线营销', '服务'], notes: ['同比 +3%'] },
          other_services_sales: { label: ['其他服务', '与销售'], notes: ['同比 +21%'] },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 26%', '同比 (12 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          other_income: { label: '其他' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (17%)', '同比 (25 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与营销', notes: ['占收入 34%', '同比 +15 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 8%', '同比 +2 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 4%', '同比 +1 个百分点'] },
          provisions: { label: '拨备', notes: ['占收入 0%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: layoutLabelsZh,
        },
      },
    },
  });
})();
