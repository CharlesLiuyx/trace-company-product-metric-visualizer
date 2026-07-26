/* ====================================================================
 * Apple - Q2 FY25 income statement ($B)
 * Reconstructed from input/processed/apple-q2-fy25.png as a fixed
 * d3-sankey layout with reusable SVG-only Apple business annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const APPLE_PATH =
    'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701';
  const applePath = (window.SANKEY_BRAND && window.SANKEY_BRAND.apple) || APPLE_PATH;
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  function appleGlyph(x, y, size) {
    return `<g transform="translate(${x} ${y}) scale(${size / 24})" fill="${BLACK}"><path d="${applePath}"/></g>`;
  }

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${appleGlyph(98, 487, 40)}
      <text x="144" y="527" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>

      ${appleGlyph(98, 1009, 42)}
      <text x="148" y="1047" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
      ${appleGlyph(98, 1083, 42)}
      <text x="148" y="1121" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>

      <g transform="translate(78 1228)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q2-fy25',
    name: 'Apple · Q2 FY25',
    company: 'Apple',
    meta: {
      company: 'Apple',
      title: 'Apple Q2 FY25 Income Statement',
      period: 'Q2 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/apple-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 168,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2080,
      periodX: 2420,
      periodY: 268,
      periodNoteY: 324,
      logoWidth: 280,
      logoHeight: 270,
      logoY: 242,
      logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${applePath}" fill="${BLACK}"/>`,
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
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 3.66,
      nodes: {
        iphone: { x: 389, y: 425, width: 71, height: 171 },
        mac: { x: 389, y: 742, width: 71, height: 28 },
        ipad: { x: 389, y: 911, width: 71, height: 23 },
        wearables: { x: 389, y: 1071, width: 71, height: 27 },
        products: { x: 763, y: 571, width: 70, height: 253 },
        services: { x: 765, y: 1224, width: 70, height: 96 },
        revenue: { x: 1137, y: 699, width: 70, height: 352 },
        gross_profit: { x: 1513, y: 579, width: 70, height: 165 },
        cost_of_revenue: { x: 1513, y: 970, width: 70, height: 185 },
        operating_profit: { x: 1887, y: 508, width: 70, height: 109 },
        operating_expenses: { x: 1884, y: 785, width: 71, height: 55 },
        product_cost: { x: 1749, y: 1024, width: 70, height: 161 },
        service_cost: { x: 1749, y: 1265, width: 70, height: 22 },
        net_profit: { x: 2257, y: 413, width: 71, height: 89 },
        tax: { x: 2257, y: 680, width: 71, height: 14 },
        other_expense: { x: 2257, y: 797, width: 71, height: 4 },
        rnd: { x: 2257, y: 871, width: 71, height: 30 },
        sga: { x: 2257, y: 1124, width: 71, height: 22 },
      },
      labels: {
        iphone: {
          blocks: [{
            x: 364, top: 334, anchor: 'start', lineGap: 12,
            lines: [
              { text: '$value', size: 39, weight: 400 },
              { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        mac: {
          blocks: [
            {
              x: 372, top: 646, anchor: 'start', lineGap: 12,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 213, top: 705, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'Mac', size: 69, weight: 800 },
                { text: 'Air, Pro, Mini', size: 24, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ipad: {
          blocks: [
            {
              x: 372, top: 804, anchor: 'start', lineGap: 12,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 220, top: 879, anchor: 'start', lines: [{ text: 'iPad', size: 64, weight: 800 }] },
          ],
        },
        wearables: {
          blocks: [
            {
              x: 365, top: 974, anchor: 'start', lineGap: 12,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(5%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 210, top: 1141, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Wearables, Home, and', size: 22, weight: 400, color: NOTE },
                { text: 'Accessories', size: 22, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        products: {
          blocks: [{
            x: 798, top: 425, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Products', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+3% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        services: {
          blocks: [{
            x: 800, top: 1078, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Services', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        revenue: {
          blocks: [{
            x: 1172, top: 555, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Revenue', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1548, top: 396, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Gross profit', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '47% margin', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1548, top: 1176, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Cost of', size: 38, weight: 800 },
              { text: 'revenue', size: 38, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1916, top: 327, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'Operating profit', size: 39, weight: 800 },
              { text: '$value', size: 38, weight: 400 },
              { text: '31% margin', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1920, top: 862, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Operating', size: 38, weight: 800 },
              { text: 'expenses', size: 38, weight: 800 },
              { text: '$value', size: 36, weight: 400 },
            ],
          }],
        },
        product_cost: {
          blocks: [{
            x: 1946, top: 1054, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Products', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
              { text: '36% gross margin', size: 27, weight: 400, color: NOTE },
            ],
          }],
        },
        service_cost: {
          blocks: [{
            x: 1962, top: 1233, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Services', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
              { text: '76% gross margin', size: 27, weight: 400, color: NOTE },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2355, top: 416, anchor: 'start', lineGap: 11,
            lines: [
              { text: 'Net profit', size: 39, weight: 800 },
              { text: '$value', size: 38, weight: 400 },
              { text: '26% margin', size: 28, weight: 400, color: NOTE },
              { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: 2448, top: 649, anchor: 'middle', lineGap: 7,
            lines: [
              { text: 'Tax', size: 30, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ],
          }],
        },
        other_expense: {
          blocks: [{
            x: 2448, top: 762, anchor: 'middle', lineGap: 7,
            lines: [
              { text: 'Other', size: 30, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: 2455, top: 862, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'R&D', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
              { text: '9% of revenue', size: 27, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 27, weight: 400, color: NOTE },
            ],
          }],
        },
        sga: {
          blocks: [{
            x: 2455, top: 1103, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'SG&A', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
              { text: '7% of revenue', size: 27, weight: 400, color: NOTE },
              { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE },
            ],
          }],
        },
      },
    },

    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 46.8, notes: ['+2% Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'Mac', value: 7.9, notes: ['+7% Y/Y'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 6.4, notes: ['+15% Y/Y'] },
      {
        id: 'wearables', col: 0, order: 3, type: 'source',
        label: ['Wearables, Home,', 'and Accessories'], value: 7.5, notes: ['(5%) Y/Y'],
      },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 68.7, notes: ['+3% Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 26.6, notes: ['+12% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 95.4, notes: ['+5% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 44.9, notes: ['47% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 50.5 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 29.6, notes: ['31% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 15.3 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 44.0, valueText: '($44.0B)', notes: ['36% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 6.5, notes: ['76% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 24.8, notes: ['26% margin', '(0pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4.5 },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.3 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 8.6, notes: ['9% of revenue', '+0pp Y/Y'] },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 6.7, notes: ['7% of revenue', '(0pp) Y/Y'] },
    ],

    links: [
      { source: 'iphone', target: 'products', value: 46.8, sourceWidth: 171, targetWidth: 172, y0: 510.5, y1: 657, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 7.9, sourceWidth: 28, targetWidth: 29, y0: 756, y1: 757.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 6.4, sourceWidth: 23, targetWidth: 24, y0: 922.5, y1: 784, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 7.5, sourceWidth: 27, targetWidth: 28, y0: 1084.5, y1: 810, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 68.7, sourceWidth: 253, targetWidth: 253, y0: 697.5, y1: 825.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 26.6, sourceWidth: 96, targetWidth: 99, y0: 1272, y1: 1001.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 44.9, sourceWidth: 165, targetWidth: 165, y0: 781.5, y1: 661.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 50.5, sourceWidth: 187, targetWidth: 185, y0: 957.5, y1: 1062.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 29.6, sourceWidth: 109, targetWidth: 109, y0: 633.5, y1: 562.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 15.3, sourceWidth: 56, targetWidth: 55, y0: 716, y1: 812.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 24.8, sourceWidth: 89, targetWidth: 89, y0: 552.5, y1: 457.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.5, sourceWidth: 16, targetWidth: 14, y0: 605, y1: 687, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.3, sourceWidth: 4, targetWidth: 4, y0: 615, y1: 799, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 8.6, sourceWidth: 31, targetWidth: 30, y0: 800.5, y1: 886, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 6.7, sourceWidth: 24, targetWidth: 22, y0: 828, y1: 1135, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 44.0, sourceWidth: 161, targetWidth: 161, y0: 1050.5, y1: 1104.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 6.5, sourceWidth: 24, targetWidth: 22, y0: 1143, y1: 1276, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['tv'],
      zh: {
        name: 'Apple · 2025 财年第二季度',
        meta: {
          title: 'Apple 2025 财年第二季度利润表',
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 3 月',
        },
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 +2%'] },
          mac: { label: 'Mac', notes: ['同比 +7%'] },
          ipad: { label: 'iPad', notes: ['同比 +15%'] },
          wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 (5%)'] },
          products: { label: '产品', notes: ['同比 +3%'] },
          services: { label: '服务', notes: ['同比 +12%'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 47%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 36%'] },
          service_cost: { label: '服务', notes: ['毛利率 76%'] },
          net_profit: { label: '净利润', notes: ['利润率 26%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 9%', '同比 +0 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: {
            mac: {
              blocks: [
                {
                  x: 372, top: 646, anchor: 'start', lineGap: 12,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +7%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 201, top: 705, anchor: 'start', lineGap: 7,
                  lines: [
                    { text: 'Mac', size: 69, weight: 800 },
                    { text: 'Air、Pro、Mini', size: 24, weight: 400, color: NOTE },
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
