/* ====================================================================
 * Autodesk - Q1 FY27 income statement ($M)
 * Reconstructed from input/processed/autodesk-q1-fy27.png as a fixed
 * d3-sankey layout with a reusable SVG Autodesk logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#991100';
  const RED_LINK = '#e08585';
  const NOTE = '#737373';
  const RIGHT_LABEL_X = 2442;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const zhLayoutLabels = {
    aec: {
      blocks: [
        {
          x: 185, top: 389, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '建筑、工程', size: 41, weight: 700 },
            { text: '与施工', size: 41, weight: 700 },
          ],
        },
        {
          x: 426, top: 276, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +20%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    autocad: {
      blocks: [
        {
          x: 184, top: 714, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'AutoCAD 产品', size: 39, weight: 700 },
            { text: '计算机辅助设计', size: 28, weight: 400, color: NOTE },
            { text: '包含 LT', size: 28, weight: 400, color: NOTE },
          ],
        },
        {
          x: 426, top: 608, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +15%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    manufacturing: {
      blocks: [
        {
          x: 181, top: 947, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '制造', size: 41, weight: 700 },
          ],
        },
        {
          x: 426, top: 841, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +26%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    media_entertainment: {
      blocks: [
        {
          x: 190, top: 1104, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '媒体与', size: 39, weight: 700 },
            { text: '娱乐', size: 39, weight: 700 },
          ],
        },
        {
          x: 426, top: 1045, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 37, weight: 400 },
            { text: '同比 +13%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other_revenue: {
      blocks: [
        {
          x: 183, top: 1289, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '其他', size: 38, weight: 700 },
          ],
        },
        {
          x: 426, top: 1210, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 37, weight: 400 },
            { text: '同比 +32%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 893, top: 516, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '收入', size: 40, weight: 700 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +18%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1363, top: 365, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '毛利润', size: 39, weight: 700 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 91%', size: 28, weight: 400, color: NOTE },
            { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1830, top: 235, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '营业利润', size: 39, weight: 700 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 28%', size: 28, weight: 400, color: NOTE },
            { text: '同比 +14 个百分点', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2355, top: 272, anchor: 'start', lineGap: 10,
          lines: [
            { text: '净利润', size: 39, weight: 700 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 25%', size: 28, weight: 400, color: NOTE },
            { text: '同比 +16 个百分点', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other_income: {
      blocks: [
        {
          x: 2148, top: 468, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '其他', size: 32, weight: 700 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: 2442, top: 600, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '税费', size: 32, weight: 700 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1363, top: 1188, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '收入', size: 34, weight: 700 },
            { text: '成本', size: 34, weight: 700 },
            { text: '$value', size: 33, weight: 400 },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1828, top: 1013, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '运营', size: 34, weight: 700 },
            { text: '费用', size: 34, weight: 700 },
            { text: '$value', size: 33, weight: 400 },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 763, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'S&M 费用', size: 31, weight: 700 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 31%', size: 28, weight: 400, color: NOTE },
            { text: '同比 (4 个百分点)', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 922, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'R&D 费用', size: 31, weight: 700 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 22%', size: 28, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1081, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'G&A 费用', size: 31, weight: 700 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 8%', size: 28, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other_expense: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1243, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '其他', size: 32, weight: 700 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 2%', size: 28, weight: 400, color: NOTE },
            { text: '同比 (5 个百分点)', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'autodesk-q1-fy27',
    name: 'Autodesk · Q1 FY27',
    company: 'Autodesk',
    meta: {
      company: 'Autodesk',
      title: 'Autodesk Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/autodesk-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1331,
      titleY: 198,
      titleSize: 132,
      titleWeight: 700,
      titleTextLength: 2317,
      periodX: 1830,
      periodY: 1268,
      periodNoteY: 1314,
      logoWidth: 407,
      logoHeight: 230,
      logoY: 227,
      logoViewBox: '0 0 407 230',
      logoSvg: BUSINESS_ICONS.autodeskCompanyLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
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
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 9 },
    },

    layout: {
      scale: 0.1871768356,
      nodes: {
        aec: { x: 390, y: 368, width: 72, height: 181.56 },
        autocad: { x: 390, y: 698, width: 72, height: 88.76 },
        manufacturing: { x: 390, y: 929, width: 72, height: 68.71 },
        media_entertainment: { x: 390, y: 1134, width: 72, height: 16.1 },
        other_revenue: { x: 390, y: 1297, width: 72, height: 6.93 },
        revenue: { x: 857, y: 659, width: 72, height: 362.06 },
        gross_profit: { x: 1327, y: 550, width: 72, height: 329.33 },
        cost_of_revenue: { x: 1327, y: 1133, width: 72, height: 32.76 },
        operating_profit: { x: 1792, y: 421, width: 72, height: 101.27 },
        operating_expenses: { x: 1792, y: 763, width: 72, height: 228.06 },
        other_income: { x: 2115, y: 439, width: 72, height: 10.86 },
        net_profit: { x: 2259, y: 285, width: 72, height: 91.9 },
        tax: { x: 2259, y: 623, width: 72, height: 20.22 },
        sm: { x: 2259, y: 773, width: 72, height: 111.0 },
        rnd: { x: 2259, y: 972, width: 72, height: 78.8 },
        ga: { x: 2259, y: 1147, width: 72, height: 30.33 },
        other_expense: { x: 2259, y: 1270, width: 72, height: 7.86 },
      },
      labels: {
        aec: {
          blocks: [
            {
              x: 185, top: 388, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Architecture', size: 41, weight: 700 },
                { text: 'Engineering', size: 41, weight: 700 },
                { text: '& Construction', size: 41, weight: 700 },
              ],
            },
            {
              x: 426, top: 276, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+20% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        autocad: {
          blocks: [
            {
              x: 184, top: 714, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'AutoCAD', size: 41, weight: 700 },
                { text: 'Computer-aided design', size: 28, weight: 400, color: NOTE },
                { text: 'Including LT', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 426, top: 608, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        manufacturing: {
          blocks: [
            {
              x: 181, top: 947, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Manufacturing', size: 41, weight: 700 },
              ],
            },
            {
              x: 426, top: 841, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+26% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        media_entertainment: {
          blocks: [
            {
              x: 190, top: 1104, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Media &', size: 39, weight: 700 },
                { text: 'Entertainment', size: 39, weight: 700 },
              ],
            },
            {
              x: 426, top: 1045, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '+13% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 183, top: 1289, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Other', size: 38, weight: 700 },
              ],
            },
            {
              x: 426, top: 1210, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '+32% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 893, top: 516, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 700 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+18% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1363, top: 365, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 39, weight: 700 },
                { text: '$value', size: 39, weight: 400 },
                { text: '91% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1830, top: 235, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 700 },
                { text: '$value', size: 39, weight: 400 },
                { text: '28% margin', size: 28, weight: 400, color: NOTE },
                { text: '+14pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2355, top: 272, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 700 },
                { text: '$value', size: 39, weight: 400 },
                { text: '25% margin', size: 28, weight: 400, color: NOTE },
                { text: '+16pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2148, top: 468, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 32, weight: 700 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2442, top: 600, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 32, weight: 700 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1363, top: 1188, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 34, weight: 700 },
                { text: 'revenue', size: 34, weight: 700 },
                { text: '$value', size: 33, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1828, top: 1013, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 34, weight: 700 },
                { text: 'expenses', size: 34, weight: 700 },
                { text: '$value', size: 33, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 763, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 32, weight: 700 },
                { text: '$value', size: 31, weight: 400 },
                { text: '31% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 922, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 32, weight: 700 },
                { text: '$value', size: 31, weight: 400 },
                { text: '22% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1081, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 32, weight: 700 },
                { text: '$value', size: 31, weight: 400 },
                { text: '8% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_expense: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1243, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 32, weight: 700 },
                { text: '$value', size: 31, weight: 400 },
                { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'aec', col: 0, order: 0, type: 'source', label: ['Architecture', 'Engineering', '& Construction'], value: 970, notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'autocad', col: 0, order: 1, type: 'source', label: 'AutoCAD', value: 474, notes: ['+15% Y/Y', 'Computer-aided design', 'Including LT'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'manufacturing', col: 0, order: 2, type: 'source', label: 'Manufacturing', value: 367, notes: ['+26% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'media_entertainment', col: 0, order: 3, type: 'source', label: ['Media &', 'Entertainment'], value: 86, notes: ['+13% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 37, notes: ['+32% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1934, valueText: '$1,934M', notes: ['+18% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1759, valueText: '$1,759M', notes: ['91% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 175 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 541, notes: ['28% margin', '+14pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1218, valueText: '($1,218M)' },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 58 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 491, notes: ['25% margin', '+16pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 108 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 593, notes: ['31% of revenue', '(4pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 421, notes: ['22% of revenue', '(2pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 162, notes: ['8% of revenue', '(2pp) Y/Y'] },
      { id: 'other_expense', col: 5, order: 5, type: 'cost', label: 'Other', value: 42, notes: ['2% of revenue', '(5pp) Y/Y'] },
    ],

    links: [
      { source: 'aec', target: 'revenue', value: 970, width: 181.56, targetOrder: 0 },
      { source: 'autocad', target: 'revenue', value: 474, width: 88.76, targetOrder: 1 },
      { source: 'manufacturing', target: 'revenue', value: 367, width: 68.71, targetOrder: 2 },
      { source: 'media_entertainment', target: 'revenue', value: 86, width: 16.1, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 37, width: 6.93, targetOrder: 4 },

      { source: 'revenue', target: 'gross_profit', value: 1759, width: 329.3, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 175, width: 32.76, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },

      { source: 'gross_profit', target: 'operating_profit', value: 541, width: 101.27, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1218, width: 228.06, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 433, width: 81.05, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 108, width: 20.22, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 58, width: 10.86, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 593, width: 111.0, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 421, width: 78.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 162, width: 30.33, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_expense', value: 42, width: 7.86, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Autodesk · 2027 财年第一季度',
        meta: {
          title: 'Autodesk 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 1830,
        },
        nodes: {
          aec: { label: ['建筑、工程', '与施工'], notes: ['同比 +20%'] },
          autocad: { label: 'AutoCAD 产品', notes: ['同比 +15%', '计算机辅助设计', '包含 LT'] },
          manufacturing: { label: '制造', notes: ['同比 +26%'] },
          media_entertainment: { label: ['媒体与', '娱乐'], notes: ['同比 +13%'] },
          other_revenue: { label: '其他', notes: ['同比 +32%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 91%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 28%', '同比 +14 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 25%', '同比 +16 个百分点'] },
          tax: { label: '税费' },
          sm: { label: 'S&M 费用', notes: ['占收入 31%', '同比 (4 个百分点)'] },
          rnd: { label: 'R&D 费用', notes: ['占收入 22%', '同比 (2 个百分点)'] },
          ga: { label: 'G&A 费用', notes: ['占收入 8%', '同比 (2 个百分点)'] },
          other_expense: { label: '其他', notes: ['占收入 2%', '同比 (5 个百分点)'] },
        },
        layout: {
          labels: zhLayoutLabels,
        },
      },
    },
  });
})();
