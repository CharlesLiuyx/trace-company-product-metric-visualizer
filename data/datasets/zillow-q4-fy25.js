/* ====================================================================
 * Zillow - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/zillow-q4-fy25.png as a fixed
 * d3-sankey layout with measured SVG geometry and validated brand crops.
 * ==================================================================== */
(function () {
  const BLUE = '#011751';
  const BLUE_LINK = '#858fa9';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const BACKGROUND = '#f2f2f2';
  const RIGHT_LABEL_X = 2466;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="34" fill="${BLUE}"/>
      ${lines.map((line) => `
        <text x="${x + width / 2}" y="${line.y}" text-anchor="middle"
          font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>
      `).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      <line x1="1608" y1="947" x2="1682" y2="947" stroke="${RED_LINK}" stroke-width="2"/>
      ${kpiCard(81, 1194, 163, 164, [
        { text: 'Visits', y: 1252, size: 29, weight: 800 },
        { text: '2.1B', y: 1289, size: 29, weight: 500 },
        { text: '+2% Y/Y', y: 1334, size: 28, weight: 500 },
      ])}
      ${kpiCard(260, 1194, 589, 164, [
        { text: 'Average Monthly Unique Users', y: 1249, size: 29, weight: 800 },
        { text: '221M', y: 1289, size: 29, weight: 500 },
        { text: '+8% Y/Y', y: 1333, size: 28, weight: 500 },
      ])}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <line x1="1608" y1="947" x2="1682" y2="947" stroke="${RED_LINK}" stroke-width="2"/>
      ${kpiCard(81, 1194, 163, 164, [
        { text: '访问次数', y: 1252, size: 27, weight: 800 },
        { text: '21 亿', y: 1289, size: 29, weight: 500 },
        { text: '同比 +2%', y: 1334, size: 27, weight: 500 },
      ])}
      ${kpiCard(260, 1194, 589, 164, [
        { text: '月均独立用户', y: 1249, size: 29, weight: 800 },
        { text: '2.21 亿', y: 1289, size: 29, weight: 500 },
        { text: '同比 +8%', y: 1333, size: 28, weight: 500 },
      ])}
    </g>`;

  const zhLayoutLabels = {
    residential: {
      blocks: [
        {
          x: 435, top: 321, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +8%', size: 28, weight: 400, color: NOTE },
          ],
        },
        { x: 337, top: 575, anchor: 'end', lines: [{ text: '住宅业务', size: 38, weight: 800 }] },
      ],
    },
    rentals: {
      blocks: [
        {
          x: 435, top: 675, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +45%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    home_loans: {
      blocks: [
        {
          x: 435, top: 885, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +39%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 435, top: 1031, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +10%', size: 28, weight: 400, color: NOTE },
          ],
        },
        { x: 280, top: 1112, anchor: 'end', lines: [{ text: '其他', size: 40, weight: 800 }] },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 902, top: 433, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '收入', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +18%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1370, top: 292, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '毛利润', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 73%', size: 28, weight: 400, color: NOTE },
            { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1370, top: 1101, anchor: 'middle', lineGap: 12,
          lines: [
            { text: '收入', size: 35, weight: 800 },
            { text: '成本', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
          ],
        },
      ],
    },
    operating_loss: {
      blocks: [
        {
          x: 1648, top: 962, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '营业', size: 40, weight: 800 },
            { text: '亏损', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 (2%)', size: 28, weight: 400, color: NOTE },
            { text: '同比 +11 个百分点', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1837, top: 414, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '运营', size: 40, weight: 800 },
            { text: '费用', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 405, anchor: 'middle', lineGap: 11,
          lines: [
            { text: '销售与市场', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 31%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    product: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 674, anchor: 'middle', lineGap: 11,
          lines: [
            { text: '产品', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 24%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 931, anchor: 'middle', lineGap: 12,
          lines: [
            { text: '管理费用', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 20%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'zillow-q4-fy25',
    name: 'Zillow · Q4 FY25',
    company: 'Zillow',
    meta: {
      company: 'Zillow',
      title: 'Zillow Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/zillow-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2092,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
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
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
      allowRasterAnnotations: true,
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'zillow-company-wordmark',
        href: 'data/assets/raster-annotations/zillow/company-wordmark-q4-fy25.png',
        x: 553, y: 249, width: 690, height: 116,
      },
      {
        key: 'zillow-premier-agent-wordmark',
        href: 'data/assets/raster-annotations/zillow/premier-agent-wordmark-q4-fy25.png',
        x: 54, y: 439, width: 340, height: 121,
      },
      {
        key: 'zillow-rentals-wordmark',
        href: 'data/assets/raster-annotations/zillow/rentals-wordmark-q4-fy25.png',
        x: 89, y: 746, width: 272, height: 118,
      },
      {
        key: 'zillow-home-loans-wordmark',
        href: 'data/assets/raster-annotations/zillow/home-loans-wordmark-q4-fy25.png',
        x: 77, y: 934, width: 301, height: 107,
      },
    ],

    layout: {
      scale: 1,
      nodes: {
        residential: { x: 400, y: 420, width: 71, height: 224 },
        rentals: { x: 400, y: 775, width: 71, height: 87 },
        home_loans: { x: 400, y: 984, width: 71, height: 25 },
        other: { x: 400, y: 1133, width: 71, height: 5 },
        revenue: { x: 867, y: 585, width: 70, height: 349 },
        gross_profit: { x: 1334, y: 481, width: 71, height: 254 },
        cost_of_revenue: { x: 1334, y: 991, width: 71, height: 94 },
        operating_loss: { x: 1610, y: 946, width: 72, height: 1 },
        operating_expenses: { x: 1802, y: 582, width: 70, height: 254 },
        sm: { x: 2268, y: 416, width: 71, height: 109 },
        product: { x: 2268, y: 694, width: 71, height: 76 },
        ga: { x: 2268, y: 935, width: 71, height: 65 },
      },
      labels: {
        residential: {
          blocks: [
            {
              x: 435, top: 321, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 337, top: 575, anchor: 'end', lines: [{ text: 'Residential', size: 40, weight: 800 }] },
          ],
        },
        rentals: {
          blocks: [
            {
              x: 435, top: 675, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+45% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        home_loans: {
          blocks: [
            {
              x: 435, top: 885, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+39% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 435, top: 1031, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 280, top: 1112, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 902, top: 433, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+18% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1370, top: 292, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Gross profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '73% margin', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1370, top: 1101, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Cost of', size: 35, weight: 800 },
                { text: 'revenue', size: 35, weight: 800 },
                { text: '$value', size: 35, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1648, top: 962, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'loss', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(2%) margin', size: 28, weight: 400, color: NOTE },
                { text: '+11pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1837, top: 414, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 405, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '31% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        product: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 674, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Product', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '24% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 931, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '20% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'residential', col: 0, order: 0, type: 'source', label: 'Residential', value: 418, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'rentals', col: 0, order: 1, type: 'source', label: 'Rentals', value: 168, notes: ['+45% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'home_loans', col: 0, order: 2, type: 'source', label: 'Home Loans', value: 57, notes: ['+39% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other', col: 0, order: 3, type: 'source', label: 'Other', value: 11, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 654, notes: ['+18% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 476, notes: ['73% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 178, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -11, notes: ['(2%) margin', '+11pp Y/Y'], color: BACKGROUND, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 487, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 205, notes: ['31% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 5, order: 1, type: 'cost', label: 'Product', value: 154, notes: ['24% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 128, notes: ['20% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'residential', target: 'revenue', value: 418, width: 225, y0: 531.5, y1: 695.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'rentals', target: 'revenue', value: 168, width: 89, y0: 818.5, y1: 854, sourceOrder: 0, targetOrder: 1 },
      { source: 'home_loans', target: 'revenue', value: 57, width: 26, y0: 996.5, y1: 914, sourceOrder: 0, targetOrder: 2 },
      { source: 'other', target: 'revenue', value: 11, width: 6, y0: 1135.5, y1: 931.5, sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 476, width: 255, y0: 712.5, y1: 608, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 178, width: 95, y0: 886.5, y1: 1038, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 476, width: 255, y0: 608, y1: 709, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 11, width: 2,
        y0: 947, y1: 836, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK,
        curve: { x0: 1682, x1: 1802, c1x: 1730, c1y: 947, c2x: 1750, c2y: 836 },
      },

      { source: 'operating_expenses', target: 'sm', value: 205, width: 110, y0: 635.5, y1: 470, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'product', value: 154, width: 77, y0: 731, y1: 731.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 128, width: 66, y0: 803.5, y1: 967.5, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Zillow · 2025 财年第四季度',
        meta: {
          title: 'Zillow 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 108,
          titleTextLength: 1500,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          residential: { label: '住宅业务', notes: ['同比 +8%'] },
          rentals: { label: '租赁', notes: ['同比 +45%'] },
          home_loans: { label: '住房贷款', notes: ['同比 +39%'] },
          other: { label: '其他', notes: ['同比 +10%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (2%)', '同比 +11 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          sm: { label: '销售与市场', notes: ['占收入 31%', '同比 (5 个百分点)'] },
          product: { label: '产品', notes: ['占收入 24%', '同比 (3 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 20%', '同比 (5 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
