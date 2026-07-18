/* Autodesk Q3 FY26 income statement ($M), reconstructed from the processed reference. */
(function () {
  const TITLE = '#155077';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const zhLayoutLabels = {
    aec: {
      blocks: [
        {
          x: 194, top: 439, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '建筑、工程', size: 41, weight: 700 },
            { text: '与施工', size: 41, weight: 700 },
          ],
        },
        {
          x: 431, top: 309, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +23%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    autocad: {
      blocks: [
        {
          x: 195, top: 732, anchor: 'middle', lineGap: 9,
          lines: [{ text: 'AutoCAD 产品', size: 39, weight: 700 }],
        },
        {
          x: 195, top: 796, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '计算机辅助设计', size: 28, weight: 400, color: NOTE },
            { text: '包含 LT', size: 28, weight: 400, color: NOTE },
          ],
        },
        {
          x: 428, top: 620, anchor: 'middle', lineGap: 10,
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
          x: 197, top: 939, anchor: 'middle', lineGap: 10,
          lines: [{ text: '制造', size: 41, weight: 700 }],
        },
        {
          x: 428, top: 836, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +16%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    media_entertainment: {
      blocks: [
        {
          x: 211, top: 1096, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '媒体与', size: 39, weight: 700 },
            { text: '娱乐', size: 39, weight: 700 },
          ],
        },
        {
          x: 429, top: 1043, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 37, weight: 400 },
            { text: '同比 +4%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other_revenue: {
      blocks: [
        {
          x: 196, top: 1274, anchor: 'middle', lineGap: 10,
          lines: [{ text: '其他', size: 38, weight: 700 }],
        },
        {
          x: 426, top: 1199, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 37, weight: 400 },
            { text: '同比 +7%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [{
        x: 891, top: 536, anchor: 'middle', lineGap: 13,
        lines: [
          { text: '收入', size: 40, weight: 700 },
          { text: '$value', size: 39, weight: 400 },
          { text: '同比 +18%', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    gross_profit: {
      blocks: [{
        x: 1360, top: 394, anchor: 'middle', lineGap: 13,
        lines: [
          { text: '毛利润', size: 39, weight: 700 },
          { text: '$value', size: 39, weight: 400 },
          { text: '利润率 91%', size: 28, weight: 400, color: NOTE },
          { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    operating_profit: {
      blocks: [{
        x: 1828, top: 297, anchor: 'middle', lineGap: 13,
        lines: [
          { text: '营业利润', size: 39, weight: 700 },
          { text: '$value', size: 39, weight: 400 },
          { text: '利润率 25%', size: 28, weight: 400, color: NOTE },
          { text: '同比 +3 个百分点', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    net_profit: {
      blocks: [{
        x: 2359, top: 334, anchor: 'start', lineGap: 13,
        lines: [
          { text: '净利润', size: 39, weight: 700 },
          { text: '$value', size: 39, weight: 400 },
          { text: '利润率 19%', size: 28, weight: 400, color: NOTE },
          { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    tax_other: {
      blocks: [{
        x: 2451, top: 616, anchor: 'middle', lineGap: 11,
        lines: [
          { text: '税费及其他', size: 32, weight: 700 },
          { text: '$value', size: 31, weight: 400 },
        ],
      }],
    },
    cost_of_revenue: {
      blocks: [{
        x: 1360, top: 1177, anchor: 'middle', lineGap: 12,
        lines: [
          { text: '收入', size: 34, weight: 700 },
          { text: '成本', size: 34, weight: 700 },
          { text: '$value', size: 33, weight: 400 },
        ],
      }],
    },
    operating_expenses: {
      blocks: [{
        x: 1828, top: 990, anchor: 'middle', lineGap: 12,
        lines: [
          { text: '运营', size: 34, weight: 700 },
          { text: '费用', size: 34, weight: 700 },
          { text: '$value', size: 33, weight: 400 },
        ],
      }],
    },
    sm: {
      blocks: [{
        x: 2459, top: 750, anchor: 'middle', lineGap: 11,
        lines: [
          { text: 'S&M 费用', size: 31, weight: 700 },
          { text: '$value', size: 31, weight: 400 },
          { text: '占收入 33%', size: 28, weight: 400, color: NOTE },
          { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    rnd: {
      blocks: [{
        x: 2459, top: 913, anchor: 'middle', lineGap: 11,
        lines: [
          { text: 'R&D 费用', size: 31, weight: 700 },
          { text: '$value', size: 31, weight: 400 },
          { text: '占收入 22%', size: 28, weight: 400, color: NOTE },
          { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    ga: {
      blocks: [{
        x: 2457, top: 1072, anchor: 'middle', lineGap: 11,
        lines: [
          { text: 'G&A 费用', size: 31, weight: 700 },
          { text: '$value', size: 31, weight: 400 },
          { text: '占收入 9%', size: 28, weight: 400, color: NOTE },
          { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    other_expense: {
      blocks: [{
        x: 2457, top: 1235, anchor: 'middle', lineGap: 11,
        lines: [
          { text: '其他', size: 32, weight: 700 },
          { text: '$value', size: 31, weight: 400 },
          { text: '占收入 1%', size: 28, weight: 400, color: NOTE },
          { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'autodesk-q3-fy26',
    name: 'Autodesk · Q3 FY26',
    company: 'Autodesk',
    meta: {
      company: 'Autodesk',
      title: 'Autodesk Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/autodesk-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1331,
      titleY: 198,
      titleSize: 132,
      titleWeight: 700,
      titleTextLength: 2317,
      periodX: 2457,
      periodY: 265,
      periodNoteY: 307,
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
      interfaceAudit: { mode: 'error' },
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
      scale: 0.177,
      nodes: {
        aec: { x: 390, y: 408, width: 72, height: 163.017 },
        autocad: { x: 390, y: 716, width: 72, height: 81.066 },
        manufacturing: { x: 390, y: 936, width: 72, height: 62.835 },
        media_entertainment: { x: 390, y: 1140, width: 72, height: 15.222 },
        other_revenue: { x: 390, y: 1297, width: 72, height: 5.841 },
        revenue: { x: 857, y: 689, width: 72, height: 327.981 },
        gross_profit: { x: 1324, y: 586, width: 72, height: 298.776 },
        cost_of_revenue: { x: 1324, y: 1135, width: 72, height: 29.205 },
        operating_profit: { x: 1792, y: 488, width: 72, height: 83.19 },
        operating_expenses: { x: 1792, y: 760, width: 72, height: 215.586 },
        net_profit: { x: 2259, y: 389, width: 72, height: 60.711 },
        tax_other: { x: 2259, y: 671, width: 72, height: 22.479 },
        sm: { x: 2259, y: 776, width: 72, height: 108.324 },
        rnd: { x: 2259, y: 967, width: 72, height: 73.632 },
        ga: { x: 2259, y: 1132, width: 72, height: 30.444 },
        other_expense: { x: 2259, y: 1273, width: 72, height: 3.186 },
      },
      labels: {
        aec: {
          blocks: [
            {
              x: 194, top: 415, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Architecture', size: 41, weight: 700 },
                { text: 'Engineering', size: 41, weight: 700 },
                { text: '& Construction', size: 41, weight: 700 },
              ],
            },
            {
              x: 431, top: 309, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+23% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        autocad: {
          blocks: [
            {
              x: 195, top: 732, anchor: 'middle', lineGap: 9,
              lines: [{ text: 'AutoCAD', size: 41, weight: 700 }],
            },
            {
              x: 195, top: 796, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Computer-aided design', size: 28, weight: 400, color: NOTE },
                { text: 'Including LT', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 428, top: 620, anchor: 'middle', lineGap: 10,
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
              x: 197, top: 939, anchor: 'middle', lineGap: 10,
              lines: [{ text: 'Manufacturing', size: 41, weight: 700 }],
            },
            {
              x: 428, top: 836, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+16% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        media_entertainment: {
          blocks: [
            {
              x: 211, top: 1096, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Media &', size: 39, weight: 700 },
                { text: 'Entertainment', size: 39, weight: 700 },
              ],
            },
            {
              x: 429, top: 1043, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '+4% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 196, top: 1274, anchor: 'middle', lineGap: 10,
              lines: [{ text: 'Other', size: 38, weight: 700 }],
            },
            {
              x: 426, top: 1199, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [{
            x: 891, top: 536, anchor: 'middle', lineGap: 13,
            lines: [
              { text: 'Revenue', size: 40, weight: 700 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+18% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1360, top: 394, anchor: 'middle', lineGap: 13,
            lines: [
              { text: 'Gross profit', size: 39, weight: 700 },
              { text: '$value', size: 39, weight: 400 },
              { text: '91% margin', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1828, top: 297, anchor: 'middle', lineGap: 13,
            lines: [
              { text: 'Operating profit', size: 39, weight: 700 },
              { text: '$value', size: 39, weight: 400 },
              { text: '25% margin', size: 28, weight: 400, color: NOTE },
              { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2359, top: 334, anchor: 'start', lineGap: 13,
            lines: [
              { text: 'Net profit', size: 39, weight: 700 },
              { text: '$value', size: 39, weight: 400 },
              { text: '19% margin', size: 28, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        tax_other: {
          blocks: [{
            x: 2451, top: 616, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'Tax & Other', size: 32, weight: 700 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1360, top: 1177, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Cost of', size: 34, weight: 700 },
              { text: 'revenue', size: 34, weight: 700 },
              { text: '$value', size: 33, weight: 400 },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1828, top: 990, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Operating', size: 34, weight: 700 },
              { text: 'expenses', size: 34, weight: 700 },
              { text: '$value', size: 33, weight: 400 },
            ],
          }],
        },
        sm: {
          blocks: [{
            x: 2459, top: 750, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'S&M', size: 32, weight: 700 },
              { text: '$value', size: 31, weight: 400 },
              { text: '33% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: 2459, top: 913, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'R&D', size: 32, weight: 700 },
              { text: '$value', size: 31, weight: 400 },
              { text: '22% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        ga: {
          blocks: [{
            x: 2457, top: 1072, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'G&A', size: 32, weight: 700 },
              { text: '$value', size: 31, weight: 400 },
              { text: '9% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_expense: {
          blocks: [{
            x: 2457, top: 1235, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'Other', size: 32, weight: 700 },
              { text: '$value', size: 31, weight: 400 },
              { text: '1% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
      },
    },
    nodes: [
      { id: 'aec', col: 0, order: 0, type: 'source', label: ['Architecture', 'Engineering', '& Construction'], value: 921, notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'autocad', col: 0, order: 1, type: 'source', label: 'AutoCAD', value: 458, notes: ['+15% Y/Y', 'Computer-aided design', 'Including LT'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'manufacturing', col: 0, order: 2, type: 'source', label: 'Manufacturing', value: 355, notes: ['+16% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'media_entertainment', col: 0, order: 3, type: 'source', label: ['Media &', 'Entertainment'], value: 86, notes: ['+4% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 33, notes: ['+7% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1853, valueText: '$1,853M', notes: ['+18% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1688, valueText: '$1,688M', notes: ['91% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 165 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 470, notes: ['25% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1218, valueText: '($1,218M)' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 343, notes: ['19% margin', '+1pp Y/Y'] },
      { id: 'tax_other', col: 4, order: 1, type: 'cost', label: 'Tax & Other', value: 127 },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: 'S&M', value: 612, notes: ['33% of revenue', '(0pp) Y/Y'] },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 416, notes: ['22% of revenue', '(2pp) Y/Y'] },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 172, notes: ['9% of revenue', '(1pp) Y/Y'] },
      { id: 'other_expense', col: 4, order: 5, type: 'cost', label: 'Other', value: 18, notes: ['1% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'aec', target: 'revenue', value: 921, width: 163.017, targetOrder: 0 },
      { source: 'autocad', target: 'revenue', value: 458, width: 81.066, targetOrder: 1 },
      { source: 'manufacturing', target: 'revenue', value: 355, width: 62.835, targetOrder: 2 },
      { source: 'media_entertainment', target: 'revenue', value: 86, width: 15.222, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 33, width: 5.841, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 1688, width: 298.776, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 165, width: 29.205, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'gross_profit', target: 'operating_profit', value: 470, width: 83.19, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1218, width: 215.586, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 343, width: 60.711, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax_other', value: 127, width: 22.479, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 612, width: 108.324, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 416, width: 73.632, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 172, width: 30.444, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_expense', value: 18, width: 3.186, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Autodesk · 2026 财年第三季度',
        meta: {
          title: 'Autodesk 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 10 月',
          titleTextLength: 1830,
        },
        nodes: {
          aec: { label: ['建筑、工程', '与施工'], notes: ['同比 +23%'] },
          autocad: { label: 'AutoCAD 产品', notes: ['同比 +15%', '计算机辅助设计', '包含 LT'] },
          manufacturing: { label: '制造', notes: ['同比 +16%'] },
          media_entertainment: { label: ['媒体与', '娱乐'], notes: ['同比 +4%'] },
          other_revenue: { label: '其他', notes: ['同比 +7%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 91%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 25%', '同比 +3 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 19%', '同比 +1 个百分点'] },
          tax_other: { label: '税费及其他' },
          sm: { label: 'S&M 费用', notes: ['占收入 33%', '同比 (0 个百分点)'] },
          rnd: { label: 'R&D 费用', notes: ['占收入 22%', '同比 (2 个百分点)'] },
          ga: { label: 'G&A 费用', notes: ['占收入 9%', '同比 (1 个百分点)'] },
          other_expense: { label: '其他', notes: ['占收入 1%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: zhLayoutLabels,
        },
      },
    },
  });
})();
