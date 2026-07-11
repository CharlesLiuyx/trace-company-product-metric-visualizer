/* ====================================================================
 * Arm Holdings - Q3 FY26 income statement ($M)
 * Reconstructed from input/processed/arm-holdings-q3-fy26.png as a fixed
 * d3-sankey layout with reusable SVG/text Arm annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#008fbe';
  const BLUE_LINK = '#85c5db';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${svgIcon('armHoldingsCompanyWordmark', 695, 274, 530, 188, '0 0 565 205')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arm-holdings-q3-fy26',
    name: 'Arm Holdings · Q3 FY26',
    company: 'Arm Holdings',
    meta: {
      company: 'Arm Holdings',
      title: 'Arm Holdings Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/arm-holdings-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2398,
      periodX: 2382,
      periodY: 257,
      periodNoteY: 300,
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
      type: { name: 39, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 0.2415,
      nodes: {
        license_other: { x: 304, y: 642, width: 71, height: 120 },
        royalty: { x: 304, y: 957, width: 71, height: 177 },
        revenue_by_type: { x: 615, y: 750, width: 71, height: 300 },
        external_customers: { x: 926, y: 640, width: 72, height: 217 },
        related_parties: { x: 926, y: 1057, width: 72, height: 80 },
        revenue: { x: 1238, y: 747, width: 71, height: 300 },
        gross_profit: { x: 1549, y: 651, width: 72, height: 293 },
        cost_of_sales: { x: 1549, y: 1137, width: 72, height: 6 },
        operating_profit: { x: 1861, y: 577, width: 71, height: 43 },
        operating_expenses: { x: 1861, y: 769, width: 71, height: 247 },
        other: { x: 2063, y: 597, width: 72, height: 9 },
        net_profit: { x: 2172, y: 500, width: 72, height: 52 },
        tax: { x: 2140, y: 737, width: 104, height: 4 },
        rnd: { x: 2172, y: 832, width: 72, height: 178 },
        sga: { x: 2172, y: 1136, width: 72, height: 68 },
      },
      labels: {
        license_other: {
          blocks: [
            {
              x: 339, top: 553, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+25% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 224, top: 648, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'License', size: 39, weight: 800 },
                { text: '& Other', size: 39, weight: 800 },
                { text: 'Support &', size: 28, weight: 400, color: NOTE },
                { text: 'Maintenance', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        royalty: {
          blocks: [
            {
              x: 339, top: 868, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 224, top: 981, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Royalty', size: 39, weight: 800 },
                { text: 'Percentage', size: 28, weight: 400, color: NOTE },
                { text: 'or fixed', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue_by_type: {
          blocks: [
            {
              x: 650, top: 592, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+26% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        external_customers: {
          blocks: [
            {
              x: 962, top: 503, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'External Customers', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+30% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        related_parties: {
          blocks: [
            {
              x: 962, top: 1145, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Related parties', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE },
                { text: 'Arm China', size: 28, weight: 400, color: NOTE },
                { text: 'Equity method investments', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1273, top: 592, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+26% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1585, top: 468, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '98% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1585, top: 1168, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of sales', size: 33, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1881, top: 372, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '15% margin', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1896, top: 1036, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 34, weight: 800 },
                { text: 'expenses', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2055, top: 613, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2298, top: 465, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '18% margin', size: 28, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2398, top: 700, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2398, top: 845, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '59% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2398, top: 1094, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'SG&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '23% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'license_other', col: 0, order: 0, type: 'source', label: ['License', '& Other'], value: 505, notes: ['+25% Y/Y', 'Support & Maintenance'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'royalty', col: 0, order: 1, type: 'source', label: 'Royalty', value: 737, notes: ['+27% Y/Y', 'Percentage or fixed'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue_by_type', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1242, notes: ['+26% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'external_customers', col: 2, order: 0, type: 'source', label: 'External Customers', value: 904, notes: ['+30% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      {
        id: 'related_parties',
        col: 2,
        order: 1,
        type: 'source',
        label: 'Related parties',
        value: 338,
        notes: ['+19% Y/Y', 'Arm China', 'Equity method investments'],
        color: BLUE,
        labelColor: BLUE,
        linkTint: BLUE_LINK,
      },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 1242, notes: ['+26% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 1212, notes: ['98% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Cost of sales', value: 30, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 185, notes: ['15% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1027, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 6, order: 0, type: 'profit', label: 'Other', value: 43, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 1, type: 'profit', label: 'Net profit', value: 223, notes: ['18% margin', '(8pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 737, notes: ['59% of revenue', '+5pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 4, type: 'cost', label: 'SG&A', value: 284, notes: ['23% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'license_other', target: 'revenue_by_type', value: 505, width: 122, targetOrder: 0 },
      { source: 'royalty', target: 'revenue_by_type', value: 737, width: 178, targetOrder: 1 },
      { source: 'revenue_by_type', target: 'external_customers', value: 904, width: 218, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue_by_type', target: 'related_parties', value: 338, width: 82, sourceOrder: 1, targetOrder: 0 },
      { source: 'external_customers', target: 'revenue', value: 904, width: 218, sourceOrder: 0, targetOrder: 0 },
      { source: 'related_parties', target: 'revenue', value: 338, width: 82, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1212, width: 293, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 30, width: 7, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 185, width: 45, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1027, width: 248, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 180, width: 43, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 43, width: 9, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 5, width: 4, sourceOrder: 1, targetOrder: 0, y0: 618 },
      { source: 'operating_expenses', target: 'rnd', value: 737, width: 179, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 284, width: 68, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Arm Holdings · 2026 财年第三季度',
        meta: {
          title: 'Arm Holdings 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 12 月',
        },
        nodes: {
          license_other: { label: '授权及其他', notes: ['同比 +25%', '支持与维护'] },
          royalty: { label: '版税', notes: ['同比 +27%', '按比例或固定金额'] },
          revenue_by_type: { label: '收入', notes: ['同比 +26%'] },
          external_customers: { label: '外部客户', notes: ['同比 +30%'] },
          related_parties: { label: '关联方', notes: ['同比 +19%', 'Arm 中国', '权益法投资'] },
          revenue: { label: '收入', notes: ['同比 +26%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 98%', '同比 +0 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 18%', '同比 (8 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 59%', '同比 +5 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 23%', '同比 (2 个百分点)'] },
        },
        layout: {
          labels: {
            license_other: {
              blocks: [
                {
                  x: 339, top: 553, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +25%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 224, top: 648, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '授权', size: 39, weight: 800 },
                    { text: '及其他', size: 39, weight: 800 },
                    { text: '支持与', size: 28, weight: 400, color: NOTE },
                    { text: '维护', size: 28, weight: 400, color: NOTE },
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
