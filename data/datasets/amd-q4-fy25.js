/* ====================================================================
 * AMD - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/amd-q4-fy25.png as a fixed
 * d3-sankey layout with reusable SVG AMD annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#777777';
  const BLUE = '#4a8397';
  const BLUE_LINK = '#a6c0c9';
  const ORANGE = '#ed6a00';
  const ORANGE_LINK = '#efba83';
  const MAGENTA = '#bd0034';
  const MAGENTA_LINK = '#d78299';
  const TEAL = '#075d6d';
  const TEAL_LINK = '#9ab9c2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bce99';
  const RED = '#d90000';
  const RED_LABEL = '#971100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${svgIcon('amdDataCenterCluster', 58, 334, 188, 306, '0 0 197 325')}
      ${svgIcon('amdRyzenWordmark', 37, 748, 230, 138, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 63, 992, 170, 139, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 55, 1192, 205, 69, '0 0 226 76')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q4-fy25',
    name: 'AMD · Q4 FY25',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2035,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 430,
      logoHeight: 126,
      logoY: 315,
      logoViewBox: '0 0 468 138',
      logoSvg: BUSINESS_ICONS.amdCompanyWordmark || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: '#050505', label: '#050505' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 31.55,
      nodes: {
        data_center: { x: 566, y: 418, width: 68, height: 170 },
        client: { x: 566, y: 773, width: 67, height: 98 },
        gaming: { x: 566, y: 1059, width: 67, height: 27 },
        embedded: { x: 566, y: 1265, width: 67, height: 30 },
        revenue: { x: 1007, y: 690, width: 67, height: 325 },
        gross_profit: { x: 1447, y: 601, width: 68, height: 176 },
        cost_of_revenue: { x: 1447, y: 957, width: 68, height: 148 },
        operating_profit: { x: 1889, y: 511, width: 66, height: 55 },
        operating_expenses: { x: 1889, y: 736, width: 66, height: 121 },
        other: { x: 2224, y: 490, width: 66, height: 6 },
        net_profit: { x: 2329, y: 393, width: 67, height: 47 },
        tax: { x: 2329, y: 636, width: 67, height: 12 },
        rnd: { x: 2329, y: 772, width: 67, height: 72 },
        sga: { x: 2329, y: 1014, width: 67, height: 37 },
        amortization: { x: 2329, y: 1236, width: 67, height: 7 },
      },
      labels: {
        data_center: {
          blocks: [
            {
              x: 600, top: 323, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+39% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 535, top: 442, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'Data Center', size: 40, weight: 800 },
                { text: '33% operating margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        client: {
          blocks: [
            {
              x: 600, top: 684, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+34% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 535, top: 800, anchor: 'end', lineGap: 8,
              lines: [{ text: 'Client', size: 40, weight: 800 }],
            },
            {
              x: 534, top: 855, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Client and Gaming', size: 28, weight: 400, color: NOTE },
                { text: '18% operating margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gaming: {
          blocks: [
            {
              x: 600, top: 970, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+50% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 535, top: 1045, anchor: 'end', lineGap: 8,
              lines: [{ text: 'Gaming', size: 40, weight: 800 }],
            },
          ],
        },
        embedded: {
          blocks: [
            {
              x: 600, top: 1176, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+3% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 535, top: 1214, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Embedded', size: 40, weight: 800 },
                { text: '38% operating margin', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1040, top: 540, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+34% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1481, top: 419, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '54% margin', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1481, top: 1129, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 35, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1922, top: 323, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '17% margin', size: 28, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1922, top: 883, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2257, top: 513, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2420, top: 360, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '15% margin', size: 28, weight: 400, color: NOTE },
                { text: '+8pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2502, top: 614, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2401, top: 757, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Research &', size: 31, weight: 800 },
                { text: 'Development', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '23% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2401, top: 970, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Sales, General', size: 31, weight: 800 },
                { text: '& Admin', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '12% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2401, top: 1184, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Amortization', size: 31, weight: 800 },
                { text: 'of intangibles', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 5.4, notes: ['+39% Y/Y', '33% operating margin', '+3pp Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 3.1, notes: ['+34% Y/Y', 'Client and Gaming', '18% operating margin', '+1pp Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 0.8, notes: ['+50% Y/Y'], color: MAGENTA, labelColor: MAGENTA, linkTint: MAGENTA_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 1.0, valueText: '$1.0B', notes: ['+3% Y/Y', '38% operating margin', '(2pp) Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 10.3, notes: ['+34% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.6, notes: ['54% margin', '+4pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.7 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.8, notes: ['17% margin', '+6pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.8 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.2, color: '#40a740', linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.5, notes: ['15% margin', '+8pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'Development'], value: 2.3, notes: ['23% of revenue', '+0pp Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: ['Sales, General', '& Admin'], value: 1.2, notes: ['12% of revenue', '+1pp Y/Y'] },
      { id: 'amortization', col: 5, order: 4, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.3, notes: ['3% of revenue', '(1pp) Y/Y'] },
    ],

    links: [
      { source: 'data_center', target: 'revenue', value: 5.4, width: 170, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 3.1, width: 98, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 0.8, width: 27, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 1.0, width: 30, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 5.6, width: 176, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.7, width: 148, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.8, width: 55, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.8, width: 121, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.3, width: 41, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, width: 14, y0: 558.5, y1: 642, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.2, width: 6, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LABEL, right: GREEN_LINK } },
      { source: 'operating_expenses', target: 'rnd', value: 2.3, width: 75, y0: 773.5, y1: 808, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.2, width: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.3, width: 7, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'AMD · 2025 财年第四季度',
        meta: {
          title: 'AMD 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +39%', '营业利润率 33%', '同比 +3 个百分点'] },
          client: { label: '客户端', notes: ['同比 +34%', '客户端和游戏', '营业利润率 18%', '同比 +1 个百分点'] },
          gaming: { label: '游戏', notes: ['同比 +50%'] },
          embedded: { label: '嵌入式', notes: ['同比 +3%', '营业利润率 38%', '同比 (2 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +34%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 15%', '同比 +8 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 23%', '同比 +0 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 12%', '同比 +1 个百分点'] },
          amortization: { label: '无形资产摊销', notes: ['占收入 3%', '同比 (1 个百分点)'] },
        },
      },
    },
  });
})();
