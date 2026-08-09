/* ====================================================================
 * Starbucks - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/starbucks-q3-fy26.png as a fixed
 * d3-sankey layout with pure SVG Starbucks business annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#6c6c6c';
  const GREEN = '#00754a';
  const GREEN_LABEL = '#008f47';
  const GREEN_NODE = '#007a49';
  const GREEN_LINK = '#84b9a3';
  const PROFIT_NODE = '#24a226';
  const PROFIT_LINK = '#9fd39f';
  const RED = '#d60000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e88384';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const kpiCard = (x, width, title, value, lines) => `
    <g>
      <rect x="${x}" y="1214" width="${width}" height="149" rx="29" fill="${GREEN}"/>
      <text x="${x + width / 2}" y="1266" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${title}</text>
      ${value ? `<text x="${x + width / 2}" y="1305" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${value}</text>` : ''}
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${(value ? 1338 : 1307) + index * 31}" text-anchor="middle" font-size="24" font-weight="500" fill="#ffffff">${line}</text>`).join('')}
    </g>`;

  const annotations = (copy) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${icon('starbucksBeverage', 112, 407, 1.1)}
      ${icon('starbucksFoodMuffin', 100, 735, 1.08)}
      ${icon('starbucksPackagedBeverages', 134, 986, 0.86)}
      ${kpiCard(27, 273, copy.storeCount, '41,304', [copy.storeCountYoy])}
      ${kpiCard(310, 437, copy.sameStoreSale, '', [copy.ticket, copy.transactions])}
    </g>`;

  const annotationsEn = annotations({
    storeCount: 'Store count',
    storeCountYoy: '+0.5% Y/Y',
    sameStoreSale: 'Same Store Sale (+8%) Y/Y',
    ticket: 'Ticket +4% Y/Y',
    transactions: 'Transactions +4% Y/Y',
  });
  const annotationsZh = annotations({
    storeCount: '门店数',
    storeCountYoy: '同比 +0.5%',
    sameStoreSale: '同店销售额 同比 +8%',
    ticket: '客单价 同比 +4%',
    transactions: '交易量 同比 +4%',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'starbucks-q3-fy26',
    name: 'Starbucks - Q3 FY26',
    company: 'Starbucks',
    meta: {
      company: 'Starbucks',
      title: 'Starbucks Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending June 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/starbucks-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2348,
      periodX: 189,
      periodY: 267,
      periodNoteY: 311,
      logoWidth: 246,
      logoHeight: 246,
      logoY: 272,
      logoViewBox: '0 0 240 240',
      logoSvg: BUSINESS_ICONS.starbucksCompanySiren || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: GREEN_NODE, label: GREEN },
        hub: { node: GREEN_NODE, label: GREEN },
        profit: { node: PROFIT_NODE, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GREEN_LINK,
        hub: null,
        profit: PROFIT_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotationsEn,

    nodes: [
      { id: 'beverage', type: 'source', label: 'Beverage', value: 5.4, notes: ['(5%) Y/Y'] },
      { id: 'food', type: 'source', label: 'Food', value: 1.9, notes: ['+4% Y/Y'] },
      {
        id: 'other_revenue',
        type: 'source',
        label: 'Other',
        value: 2.0,
        valueText: '$2.0B',
        notes: ['+5% Y/Y', 'Packaged beverages, royalty and', 'licensing revenue, ingredients'],
      },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 9.3, notes: ['(1%) Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 2.3, notes: ['25% margin', '+2pp Y/Y'] },
      { id: 'store_opex', type: 'cost', label: 'Store opex', value: 4.2 },
      { id: 'product_distribution', type: 'cost', label: ['Product &', 'distribution'], value: 2.8 },
      { id: 'other_income', type: 'profit', label: 'Other', value: 0.1 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 1.0, notes: ['11% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 1.4 },
      { id: 'gain', type: 'profit', label: 'Gain', value: 0.5 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 1.0, notes: ['11% margin', '+5pp Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'other_expense', type: 'cost', label: 'Other', value: 0.1 },
      { id: 'ga', type: 'cost', label: ['General &', 'administrative'], value: 0.6 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.4 },
      { id: 'other_opex', type: 'cost', label: 'Other opex', value: 0.1 },
      { id: 'restructuring', type: 'cost', label: 'Restructuring', value: 0.3 },
    ],
    links: [
      { source: 'beverage', target: 'revenue', value: 5.4, sourceWidth: 238, targetWidth: 238, y0: 566, y1: 786, targetOrder: 0 },
      { source: 'food', target: 'revenue', value: 1.9, sourceWidth: 80, targetWidth: 84, y0: 900, y1: 947, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 2.0, sourceWidth: 88, targetWidth: 87, y0: 1110, y1: 1032.5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 2.3, sourceWidth: 100, targetWidth: 100, y0: 717, y1: 573, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'store_opex', value: 4.2, sourceWidth: 184, targetWidth: 183, y0: 859, y1: 949.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'product_distribution', value: 2.8, sourceWidth: 125, targetWidth: 123, y0: 1013.5, y1: 1195.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.9, sourceWidth: 39, targetWidth: 39, y0: 542.5, y1: 417.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.4, sourceWidth: 61, targetWidth: 60, y0: 592.5, y1: 726, sourceOrder: 1, targetOrder: 0, curve: { x0: 1393 } },
      { source: 'other_income', target: 'operating_profit', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 485, y1: 438, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, sourceWidth: 21, targetWidth: 22, y0: 408.5, y1: 295, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 16, targetWidth: 15, y0: 427, y1: 541.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.1, sourceWidth: 4, targetWidth: 3, y0: 437, y1: 659.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'gain', target: 'net_profit', value: 0.5, sourceWidth: 21, targetWidth: 22, y0: 368.5, y1: 317, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 0.6, sourceWidth: 26, targetWidth: 25, y0: 709, y1: 783.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.4, sourceWidth: 17, targetWidth: 13, y0: 730.5, y1: 965.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.3, sourceWidth: 13, targetWidth: 11, y0: 745.5, y1: 1110.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 754, y1: 1254, sourceOrder: 3, targetOrder: 0 },
    ],

    layout: {
      scale: 44,
      nodes: {
        beverage: { x: 388, y: 447, width: 71, height: 238 },
        food: { x: 388, y: 860, width: 71, height: 80 },
        other_revenue: { x: 388, y: 1066, width: 71, height: 88 },
        revenue: { x: 855, y: 667, width: 70, height: 409 },
        gross_profit: { x: 1322, y: 523, width: 71, height: 100 },
        store_opex: { x: 1322, y: 858, width: 71, height: 183 },
        product_distribution: { x: 1322, y: 1134, width: 71, height: 123 },
        other_income: { x: 1665, y: 484, width: 71, height: 2 },
        operating_profit: { x: 1790, y: 398, width: 70, height: 41 },
        operating_expenses: { x: 1790, y: 696, width: 70, height: 60 },
        gain: { x: 2140, y: 358, width: 70, height: 21 },
        net_profit: { x: 2256, y: 284, width: 71, height: 44 },
        tax: { x: 2256, y: 534, width: 71, height: 15 },
        other_expense: { x: 2256, y: 658, width: 71, height: 3 },
        ga: { x: 2256, y: 771, width: 71, height: 25 },
        depreciation_amortization: { x: 2256, y: 959, width: 71, height: 13 },
        restructuring: { x: 2256, y: 1105, width: 71, height: 11 },
        other_opex: { x: 2256, y: 1252, width: 71, height: 4 },
      },
      labels: {
        beverage: {
          blocks: [
            {
              x: 421, top: 352, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: GREEN },
                { text: '(5%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 209, top: 649, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [{ text: 'Beverage', size: 40, weight: 800, color: GREEN }] },
          ],
        },
        food: {
          blocks: [
            {
              x: 421, top: 764, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: GREEN },
                { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 209, top: 882, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [{ text: 'Food', size: 40, weight: 800, color: GREEN }] },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 421, top: 971, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: GREEN },
                { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 179, top: 1080, anchor: 'middle', semanticRole: 'reference-offset-side-label', lineGap: 7,
              lines: [
                { text: 'Other', size: 40, weight: 800, color: GREEN },
                { text: 'Packaged beverages, royalty and', size: 20, weight: 400, color: NOTE },
                { text: 'licensing revenue, ingredients', size: 20, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 892, top: 522, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: GREEN },
                { text: '$value', size: 38, weight: 400, color: GREEN },
                { text: '(1%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1358, top: 325, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '25% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        store_opex: {
          blocks: [
            {
              x: 1523, top: 917, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Store opex', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        product_distribution: {
          blocks: [
            {
              x: 1522, top: 1131, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Product &', size: 35, weight: 800, color: RED_LABEL },
                { text: 'distribution', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 1703, top: 506, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 34, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1830, top: 212, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '11% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1822, top: 777, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        gain: {
          blocks: [
            {
              x: 2176, top: 398, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gain', size: 31, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2463, top: 250, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '11% margin', size: 29, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2462, top: 507, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_expense: {
          blocks: [
            {
              x: 2462, top: 622, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2472, top: 748, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'General &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'administrative', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        depreciation_amortization: {
          blocks: [
            {
              x: 2476, top: 919, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'amortization', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2475, top: 1236, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other opex', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: 2473, top: 1093, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Restructuring', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    i18n: {
      zh: {
        name: 'Starbucks · 2026 财年第三季度',
        meta: {
          title: 'Starbucks 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 6 月',
        },
        annotationsSvg: annotationsZh,
        layout: {
          labels: {
            other_revenue: {
              blocks: [
                {
                  x: 421, top: 971, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: GREEN },
                    { text: '同比 +5%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 179, top: 1080, anchor: 'middle', semanticRole: 'reference-offset-side-label', lineGap: 7,
                  lines: [
                    { text: '其他', size: 40, weight: 800, color: GREEN },
                    { text: '包装饮品、版税和', size: 20, weight: 400, color: NOTE },
                    { text: '授权收入、原料', size: 20, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gain: {
              blocks: [
                {
                  x: 2176, top: 398, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收益', size: 31, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
                  ],
                },
              ],
            },
          },
        },
        nodes: {
          beverage: { label: '饮品', notes: ['同比 (5%)'] },
          food: { label: '食品', notes: ['同比 +4%'] },
          other_revenue: { label: '其他', notes: ['同比 +5%', '包装饮品、版税和', '授权收入、原料'] },
          revenue: { label: '收入', notes: ['同比 (1%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 25%', '同比 +2 个百分点'] },
          store_opex: { label: '门店运营费用' },
          product_distribution: { label: '产品与分销' },
          other_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          gain: { label: '收益' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          ga: { label: '一般及行政' },
          depreciation_amortization: { label: '折旧与摊销' },
          other_opex: { label: '其他运营费用' },
          restructuring: { label: '重组' },
        },
      },
    },
  });
})();
