/* ====================================================================
 *  The NYT - Q3 FY25 income statement ($M)
 *  Reconstructed from input/processed/nyt-q3-fy25.png as a fixed
 *  d3-sankey layout with reusable NYT raster annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY_LINK = '#858585';

  const statsCard = (x, width, title, value, note, titleTextLength, noteTextLength) => `
    <g>
      <rect x="${x}" y="2040" width="${width}" height="288" rx="52" fill="#000000"/>
      <text x="${x + width / 2}" y="2135" text-anchor="middle" font-size="50" font-weight="800" fill="#ffffff" textLength="${titleTextLength}" lengthAdjust="spacingAndGlyphs">${title}</text>
      <text x="${x + width / 2}" y="2208" text-anchor="middle" font-size="55" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="2274" text-anchor="middle" font-size="39" font-weight="500" fill="#ffffff" textLength="${noteTextLength}" lengthAdjust="spacingAndGlyphs">${note}</text>
    </g>`;

  const annotations = `
    <g transform="scale(0.569142)" font-family="Montserrat,Arial,sans-serif">
      ${statsCard(35, 667, 'Digital subscribers', '11.8M', '+12% Y/Y', 489, 204)}
      ${statsCard(722, 535, 'Digital ARPU', '$9.79', '+4% Y/Y', 325, 176)}
      <text x="118" y="2388" font-size="50" font-weight="500" fill="${NOTE}" textLength="780" lengthAdjust="spacingAndGlyphs">ARPU = Average Revenue Per User</text>
    </g>`;

  const annotationsZh = `
    <g transform="scale(0.569142)" font-family="Noto Sans SC,Noto Sans,Arial,sans-serif">
      ${statsCard(35, 667, '数字订阅用户', '11.8M', '同比 +12%', 330, 150)}
      ${statsCard(722, 535, '数字业务 ARPU', '$9.79', '同比 +4%', 300, 140)}
      <text x="118" y="2388" font-size="50" font-weight="500" fill="${NOTE}" textLength="650" lengthAdjust="spacingAndGlyphs">ARPU = 每用户平均收入</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nyt-q3-fy25',
    name: 'The NYT - Q3 FY25',
    company: 'The New York Times Company',
    meta: {
      company: 'The New York Times Company',
      title: 'The NYT Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/nyt-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 199,
      titleSize: 127,
      titleWeight: 800,
      titleTextLength: 2225,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
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
      labelYOffset: 0,
      type: { name: 40, value: 40, note: 29, lineGap: 12 },
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      {
        key: 'nyt-company-wordmark',
        href: 'data/assets/raster-annotations/nyt/company-wordmark.png',
        x: 933, y: 228, width: 433, height: 285,
      },
      {
        key: 'nyt-business-digital-device',
        href: 'data/assets/raster-annotations/nyt/business-digital-device.png',
        x: 10, y: 426, width: 185, height: 128,
      },
      {
        key: 'nyt-business-print-newspapers',
        href: 'data/assets/raster-annotations/nyt/business-print-newspapers.png',
        x: 9, y: 797, width: 199, height: 145,
      },
      {
        key: 'nyt-business-wirecutter-wordmark',
        href: 'data/assets/raster-annotations/nyt/business-wirecutter-wordmark.png',
        x: 194, y: 1079, width: 342, height: 74,
      },
    ],

    layout: {
      scale: 0.49,
      nodes: {
        digital: { x: 364, y: 445, width: 71, height: 179 },
        print: { x: 364, y: 835, width: 71, height: 60 },
        subscription: { x: 738, y: 547, width: 70, height: 242 },
        advertising: { x: 738, y: 925, width: 70, height: 63 },
        other_revenue: { x: 738, y: 1094, width: 70, height: 34 },
        revenue: { x: 1112, y: 656, width: 70, height: 344 },
        gross_profit: { x: 1485, y: 547, width: 71, height: 172 },
        cost_of_revenue: { x: 1485, y: 980, width: 71, height: 170 },
        operating_profit: { x: 1859, y: 471, width: 71, height: 49 },
        operating_expenses: { x: 1859, y: 725, width: 71, height: 119 },
        interest: { x: 2110, y: 470, width: 70, height: 3 },
        net_profit: { x: 2232, y: 353, width: 71, height: 39 },
        tax_other: { x: 2232, y: 597, width: 71, height: 14 },
        sm: { x: 2232, y: 746, width: 71, height: 38 },
        ga: { x: 2232, y: 889, width: 71, height: 36 },
        product: { x: 2232, y: 1023, width: 71, height: 31 },
        da: { x: 2232, y: 1160, width: 71, height: 9 },
        other_expense: { x: 2232, y: 1292, width: 71, height: 3 },
      },
      labels: {
        digital: {
          blocks: [
            {
              x: 403, top: 348, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 270, top: 512, anchor: 'middle', lines: [{ text: 'Digital', size: 40, weight: 800 }] },
          ],
        },
        print: {
          blocks: [
            {
              x: 397, top: 737, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(3%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 271, top: 827, anchor: 'middle', lines: [{ text: 'Print', size: 40, weight: 800 }] },
          ],
        },
        subscription: {
          blocks: [{
            x: 776, top: 397, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Subscription', size: 40, weight: 800 },
              { text: '$value', size: 40, weight: 400 },
              { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
            ],
          }],
        },
        advertising: {
          blocks: [
            {
              x: 773, top: 797, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 570, top: 921, anchor: 'middle', lines: [{ text: 'Advertising', size: 40, weight: 800 }] },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 776, top: 997, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 612, top: 1085, anchor: 'middle', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [{
            x: 1144, top: 508, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Revenue', size: 40, weight: 800 },
              { text: '$value', size: 40, weight: 400 },
              { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1516, top: 360, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Gross profit', size: 40, weight: 800 },
              { text: '$value', size: 40, weight: 400 },
              { text: '50% margin', size: 29, weight: 400, color: NOTE },
              { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1516, top: 1167, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Cost of', size: 35, weight: 800 },
              { text: 'revenue', size: 35, weight: 800 },
              { text: '$value', size: 34, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1889, top: 283, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Operating profit', size: 40, weight: 800 },
              { text: '$value', size: 40, weight: 400 },
              { text: '15% margin', size: 27, weight: 400, color: NOTE },
              { text: '+3pp Y/Y', size: 27, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1889, top: 860, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
              ],
            },
            { x: 1888, top: 973, anchor: 'middle', lines: [{ text: '$value', size: 40, weight: 400 }] },
          ],
        },
        interest: {
          blocks: [{
            x: 2145, top: 488, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Interest', size: 31, weight: 800 },
              { text: '$value', size: 29, weight: 400 },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2425, top: 324, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Net profit', size: 40, weight: 800 },
              { text: '$value', size: 40, weight: 400 },
              { text: '12% margin', size: 29, weight: 400, color: NOTE },
              { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
            ],
          }],
        },
        tax_other: {
          blocks: [{
            x: 2425, top: 563, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Tax & other', size: 32, weight: 800 },
              { text: '$value', size: 32, weight: 400 },
            ],
          }],
        },
        sm: {
          blocks: [{
            x: 2425, top: 746, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'S&M ($80M)', size: 30, weight: 800 },
              { text: '11% of revenue', size: 30, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 30, weight: 400, color: NOTE },
            ],
          }],
        },
        ga: {
          blocks: [{
            x: 2419, top: 883, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'G&A ($77M)', size: 30, weight: 800 },
              { text: '11% of revenue', size: 30, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 30, weight: 400, color: NOTE },
            ],
          }],
        },
        product: {
          blocks: [{
            x: 2425, top: 1017, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Product ($67M)', size: 31, weight: 800 },
              { text: '10% of revenue', size: 30, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 30, weight: 400, color: NOTE },
            ],
          }],
        },
        da: {
          blocks: [{
            x: 2419, top: 1151, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'D&A ($21M)', size: 30, weight: 800 },
              { text: '3% of revenue', size: 30, weight: 400, color: NOTE },
              { text: '(0pp) Y/Y', size: 30, weight: 400, color: NOTE },
            ],
          }],
        },
        other_expense: {
          blocks: [{
            x: 2416, top: 1280, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'Other ($2M)', size: 31, weight: 800 },
              { text: '0% of revenue', size: 30, weight: 400, color: NOTE },
              { text: '(0pp) Y/Y', size: 30, weight: 400, color: NOTE },
            ],
          }],
        },
      },
    },

    nodes: [
      { id: 'digital', col: 0, order: 0, type: 'source', label: 'Digital', value: 367, notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'print', col: 0, order: 1, type: 'source', label: 'Print', value: 127, notes: ['(3%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'subscription', col: 1, order: 0, type: 'hub', label: 'Subscription', value: 495, notes: ['+9% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'advertising', col: 1, order: 1, type: 'source', label: 'Advertising', value: 132, notes: ['+12% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 74, notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 701, notes: ['+9% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 352, notes: ['50% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 349, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 105, notes: ['15% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 247, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 82, notes: ['12% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_other', col: 6, order: 1, type: 'cost', label: 'Tax & other', value: 31, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: 'S&M', value: 80, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 3, type: 'cost', label: 'G&A', value: 77, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 6, order: 4, type: 'cost', label: 'Product', value: 67, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 6, order: 5, type: 'cost', label: 'D&A', value: 21, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 6, order: 6, type: 'cost', label: 'Other', value: 2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'digital', target: 'subscription', value: 367, sourceWidth: 179, targetWidth: 180, y0: 534.5, y1: 637 },
      { source: 'print', target: 'subscription', value: 127, sourceWidth: 60, targetWidth: 62, y0: 865, y1: 758 },
      { source: 'subscription', target: 'revenue', value: 495, sourceWidth: 242, targetWidth: 243, y0: 668, y1: 777.5 },
      { source: 'advertising', target: 'revenue', value: 132, sourceWidth: 63, targetWidth: 64, y0: 956.5, y1: 931 },
      { source: 'other_revenue', target: 'revenue', value: 74, sourceWidth: 34, targetWidth: 37, y0: 1111, y1: 981.5 },
      { source: 'revenue', target: 'gross_profit', value: 352, sourceWidth: 173, targetWidth: 172, y0: 742.5, y1: 633, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 349, sourceWidth: 171, targetWidth: 170, y0: 914.5, y1: 1065 },
      { source: 'gross_profit', target: 'operating_profit', value: 105, sourceWidth: 51, targetWidth: 49, y0: 572.5, y1: 495.5 },
      { source: 'gross_profit', target: 'operating_expenses', value: 247, sourceWidth: 121, targetWidth: 119, y0: 658.5, y1: 784.5 },
      {
        source: 'operating_profit', target: 'net_profit', value: 74, sourceWidth: 35, targetWidth: 35,
        y0: 488.5, y1: 370.5, sourceOrder: 0, targetOrder: 0,
        curve: { x0: 1930, x1: 2232, c1x: 2040, c1y: 488.5, c2x: 2135, c2y: 370.5 },
      },
      {
        source: 'interest', target: 'net_profit', value: 8, sourceWidth: 3, targetWidth: 4,
        y0: 471.5, y1: 390, targetOrder: 1,
        curve: { x0: 2180, x1: 2232, c1x: 2200, c1y: 471.5, c2x: 2213, c2y: 390 },
      },
      {
        source: 'operating_profit', target: 'tax_other', value: 31, sourceWidth: 14, targetWidth: 14,
        y0: 513, y1: 604, sourceOrder: 1,
        curve: { x0: 1930, x1: 2232, c1x: 2035, c1y: 513, c2x: 2138, c2y: 604 },
      },
      { source: 'operating_expenses', target: 'sm', value: 80, sourceWidth: 39, targetWidth: 38, y0: 744.5, y1: 765, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 77, sourceWidth: 37, targetWidth: 36, y0: 782.5, y1: 907, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'product', value: 67, sourceWidth: 32, targetWidth: 31, y0: 817, y1: 1038.5, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'da', value: 21, sourceWidth: 10, targetWidth: 9, y0: 838, y1: 1164.5, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other_expense', value: 2, sourceWidth: 1, targetWidth: 3, y0: 843.5, y1: 1293.5, sourceOrder: 4 },
    ],

    i18n: {
      preservedAnnotationText: ['The New York Times', 'New York', 'Wirecutter'],
      zh: {
        name: 'The NYT · 2025 财年第三季度',
        meta: {
          title: 'The NYT 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
        },
        annotationsSvg: annotationsZh,
        nodes: {
          digital: { label: '数字', notes: ['同比 +14%'] },
          print: { label: '印刷', notes: ['同比 (3%)'] },
          subscription: { label: '订阅', notes: ['同比 +9%'] },
          advertising: { label: '广告', notes: ['同比 +12%'] },
          other_revenue: { label: '其他', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +2 个百分点'] },
          tax_other: { label: '税费及其他' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
          product: { label: '产品' },
          da: { label: '折旧与摊销' },
          other_expense: { label: '其他' },
        },
        layout: {
          labels: {
            sm: { blocks: [{
              x: 2315, top: 746, anchor: 'start', lineGap: 12,
              lines: [
                { text: '销售与市场 ($80M)', size: 30, weight: 800, color: RED_LABEL },
                { text: '占收入 11%', size: 30, weight: 400, color: NOTE },
                { text: '同比 +1 个百分点', size: 30, weight: 400, color: NOTE },
              ],
            }] },
            ga: { blocks: [{
              x: 2315, top: 883, anchor: 'start', lineGap: 11,
              lines: [
                { text: '管理费用 ($77M)', size: 30, weight: 800, color: RED_LABEL },
                { text: '占收入 11%', size: 30, weight: 400, color: NOTE },
                { text: '同比 (1 个百分点)', size: 30, weight: 400, color: NOTE },
              ],
            }] },
            product: { blocks: [{
              x: 2315, top: 1017, anchor: 'start', lineGap: 12,
              lines: [
                { text: '产品 ($67M)', size: 31, weight: 800, color: RED_LABEL },
                { text: '占收入 10%', size: 30, weight: 400, color: NOTE },
                { text: '同比 +0 个百分点', size: 30, weight: 400, color: NOTE },
              ],
            }] },
            da: { blocks: [{
              x: 2315, top: 1153, anchor: 'start', lineGap: 12,
              lines: [
                { text: '折旧与摊销 ($21M)', size: 30, weight: 800, color: RED_LABEL },
                { text: '占收入 3%', size: 30, weight: 400, color: NOTE },
                { text: '同比 (0 个百分点)', size: 30, weight: 400, color: NOTE },
              ],
            }] },
            other_expense: { blocks: [{
              x: 2315, top: 1280, anchor: 'start', lineGap: 11,
              lines: [
                { text: '其他 ($2M)', size: 31, weight: 800, color: RED_LABEL },
                { text: '占收入 0%', size: 30, weight: 400, color: NOTE },
                { text: '同比 (0 个百分点)', size: 30, weight: 400, color: NOTE },
              ],
            }] },
          },
        },
      },
    },
  });
})();
