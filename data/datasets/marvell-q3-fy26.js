/* ====================================================================
 * Marvell - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/marvell-q3-fy26.png as a fixed
 * d3-sankey layout with a pure inline SVG Marvell mark.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const CYAN = '#00b5e2';
  const CYAN_LINK = '#85d6ea';
  const BLUE = '#0071cd';
  const BLUE_LINK = '#85b8e1';
  const TEAL = '#00c7b1';
  const TEAL_LINK = '#85dfd4';
  const DARK_TEAL = '#00816d';
  const DARK_TEAL_LINK = '#85bfb6';
  const ORANGE = '#ffa400';
  const ORANGE_LINK = '#f7ce85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2480;

  const marvellLogo = `
    <g fill="#212322">
      <path d="M8 0 L20 13 L20 87 L8 100 Z"/>
      <path d="M92 0 L80 13 L80 87 L92 100 Z"/>
      <path d="M25 10 H75 L68 18 H32 Z"/>
      <path d="M25 90 H75 L68 82 H32 Z"/>
      <path d="M33 27 L45 39 V66 L33 78 Z"/>
      <path d="M67 27 L55 39 V66 L67 78 Z"/>
      <path d="M41 38 H59 L50 48 Z"/>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'marvell-q3-fy26',
    name: 'Marvell · Q3 FY26',
    company: 'Marvell',
    meta: {
      company: 'Marvell',
      title: 'Marvell Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/marvell-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2190,
      periodX: 1944,
      periodY: 1228,
      periodNoteY: 1276,
      logoWidth: 286,
      logoHeight: 286,
      logoY: 270,
      logoViewBox: '0 0 100 100',
      logoSvg: marvellLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: CYAN, label: CYAN },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: CYAN_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },

    layout: {
      scale: 120,
      nodes: {
        data_center: { x: 420, y: 446, width: 71, height: 181 },
        enterprise_networking: { x: 420, y: 788, width: 71, height: 27 },
        carrier_infrastructure: { x: 420, y: 950, width: 71, height: 18 },
        consumer: { x: 420, y: 1099, width: 71, height: 11 },
        automotive_industrial: { x: 420, y: 1251, width: 71, height: 1 },
        revenue: { x: 887, y: 793, width: 70, height: 249 },
        gross_profit: { x: 1354, y: 667, width: 71, height: 128 },
        cost_of_revenue: { x: 1354, y: 1031, width: 71, height: 119 },
        operating_profit: { x: 1822, y: 513, width: 70, height: 41 },
        operating_expenses: { x: 1822, y: 838, width: 70, height: 85 },
        other_non_operating: { x: 2154, y: 214, width: 70, height: 224 },
        net_profit: { x: 2288, y: 229, width: 71, height: 229 },
        tax_and_other: { x: 2288, y: 654, width: 71, height: 37 },
        rnd: { x: 2288, y: 960, width: 71, height: 60 },
        sga: { x: 2288, y: 1170, width: 71, height: 21 },
      },
      labels: {
        data_center: {
          blocks: [
            {
              x: 456, top: 348, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: CYAN },
                { text: '+38% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 330, top: 492, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Data', size: 40, weight: 800, color: CYAN },
                { text: 'center', size: 40, weight: 800, color: CYAN },
              ],
            },
          ],
        },
        enterprise_networking: {
          blocks: [
            {
              x: 456, top: 697, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+57% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 284, top: 757, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Enterprise', size: 40, weight: 800, color: BLUE },
                { text: 'networking', size: 40, weight: 800, color: BLUE },
              ],
            },
          ],
        },
        carrier_infrastructure: {
          blocks: [
            {
              x: 456, top: 859, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: TEAL },
                { text: '+98% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 259, top: 914, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Carrier', size: 40, weight: 800, color: TEAL },
                { text: 'infrastructure', size: 40, weight: 800, color: TEAL },
              ],
            },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 456, top: 1002, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: DARK_TEAL },
                { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 301, top: 1078, anchor: 'middle',
              lines: [{ text: 'Consumer', size: 40, weight: 800, color: DARK_TEAL }],
            },
          ],
        },
        automotive_industrial: {
          blocks: [
            {
              x: 456, top: 1157, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: ORANGE },
                { text: '(58%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 270, top: 1207, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Automotive', size: 40, weight: 800, color: ORANGE },
                { text: '/Industrial', size: 40, weight: 800, color: ORANGE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 922, top: 640, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 46, weight: 800 },
                { text: '$value', size: 44, weight: 400 },
                { text: '+37% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1390, top: 432, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross', size: 44, weight: 800, color: GREEN_LABEL },
                { text: 'profit', size: 44, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
                { text: '52% margin', size: 30, weight: 400, color: NOTE },
                { text: '+29pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1390, top: 1174, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1857, top: 280, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800, color: GREEN_LABEL },
                { text: 'profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '17% margin', size: 29, weight: 400, color: NOTE },
                { text: '+64pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1857, top: 946, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'expenses', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        other_non_operating: {
          blocks: [
            {
              x: 2079, top: 286, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 32, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2470, top: 264, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '92% margin', size: 29, weight: 400, color: NOTE },
                { text: '+136pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax_and_other: {
          blocks: [
            {
              x: 2469, top: 635, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax & other', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 954, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '25% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1150, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '9% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: ['Data', 'center'], value: 1.5, notes: ['+38% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'enterprise_networking', col: 0, order: 1, type: 'source', label: ['Enterprise', 'networking'], value: 0.2, notes: ['+57% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'carrier_infrastructure', col: 0, order: 2, type: 'source', label: ['Carrier', 'infrastructure'], value: 0.2, notes: ['+98% Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 0.1, notes: ['+21% Y/Y'], color: DARK_TEAL, labelColor: DARK_TEAL, linkTint: DARK_TEAL_LINK },
      { id: 'automotive_industrial', col: 0, order: 4, type: 'source', label: ['Automotive', '/Industrial'], value: 0.035, valueText: '$35M', notes: ['(58%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.1, notes: ['+37% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.1, notes: ['52% margin', '+29pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1.0, valueText: '($1.0B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.4, notes: ['17% margin', '+64pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.7 },
      { id: 'other_non_operating', col: 4, order: 0, type: 'profit', label: 'Other', value: 1.9 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.9, notes: ['92% margin', '+136pp Y/Y'] },
      { id: 'tax_and_other', col: 5, order: 1, type: 'cost', label: 'Tax & other', value: 0.3 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.5, notes: ['25% of revenue', '(8pp) Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.2, notes: ['9% of revenue', '(4pp) Y/Y'] },
    ],

    nonNodeMetrics: [
      { id: 'tax', representation: 'data-only' },
    ],

    links: [
      { source: 'data_center', target: 'revenue', value: 1.5, sourceWidth: 181, targetWidth: 183, targetOrder: 0 },
      { source: 'enterprise_networking', target: 'revenue', value: 0.2, sourceWidth: 27, targetWidth: 29, targetOrder: 1 },
      { source: 'carrier_infrastructure', target: 'revenue', value: 0.2, sourceWidth: 18, targetWidth: 20, targetOrder: 2 },
      { source: 'consumer', target: 'revenue', value: 0.1, sourceWidth: 11, targetWidth: 14, targetOrder: 3 },
      { source: 'automotive_industrial', target: 'revenue', value: 0.035, sourceWidth: 1, targetWidth: 3, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 1.1, width: 128, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.0, sourceWidth: 120, targetWidth: 119, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.4, sourceWidth: 44, targetWidth: 41, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, sourceWidth: 84, targetWidth: 85, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_non_operating', target: 'net_profit', value: 1.9, sourceWidth: 224, targetWidth: 224, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.1, sourceWidth: 4, targetWidth: 5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax_and_other', value: 0.3, width: 37, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.5, sourceWidth: 63, targetWidth: 60, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.2, sourceWidth: 22, targetWidth: 21, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Marvell · 2026 财年第三季度',
        meta: {
          title: 'Marvell 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 10 月',
          titleTextLength: 1450,
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +38%'] },
          enterprise_networking: { label: '企业网络', notes: ['同比 +57%'] },
          carrier_infrastructure: { label: '运营商基础设施', notes: ['同比 +98%'] },
          consumer: { label: '消费业务', notes: ['同比 +21%'] },
          automotive_industrial: { label: '汽车 / 工业', notes: ['同比 (58%)'] },
          revenue: { label: '收入', notes: ['同比 +37%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +29 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +64 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_non_operating: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 92%', '同比 +136 个百分点'] },
          tax_and_other: { label: '税费及其他' },
          rnd: { label: '研发', notes: ['占收入 25%', '同比 (8 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 9%', '同比 (4 个百分点)'] },
        },
        layout: {
          labels: {
            data_center: {
              blocks: [
                {
                  x: 456, top: 356, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: CYAN },
                    { text: '同比 +38%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 330, top: 512, anchor: 'middle', lines: [{ text: '数据中心', size: 40, weight: 800, color: CYAN }] },
              ],
            },
            enterprise_networking: {
              blocks: [
                {
                  x: 456, top: 697, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: BLUE },
                    { text: '同比 +57%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 284, top: 777, anchor: 'middle', lines: [{ text: '企业网络', size: 40, weight: 800, color: BLUE }] },
              ],
            },
            carrier_infrastructure: {
              blocks: [
                {
                  x: 456, top: 859, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: TEAL },
                    { text: '同比 +98%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 259, top: 936, anchor: 'middle', lines: [{ text: '运营商基础设施', size: 36, weight: 800, color: TEAL }] },
              ],
            },
            consumer: {
              blocks: [
                {
                  x: 456, top: 1008, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: DARK_TEAL },
                    { text: '同比 +21%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 301, top: 1080, anchor: 'middle', lines: [{ text: '消费业务', size: 40, weight: 800, color: DARK_TEAL }] },
              ],
            },
            automotive_industrial: {
              blocks: [
                {
                  x: 456, top: 1160, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: ORANGE },
                    { text: '同比 (58%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 270, top: 1229, anchor: 'middle', lines: [{ text: '汽车 / 工业', size: 36, weight: 800, color: ORANGE }] },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 954, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '研发', size: 34, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                    { text: '占收入 25%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (8 个百分点)', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1148, anchor: 'middle', lineGap: 5,
                  lines: [
                    { text: '销售及行政', size: 30, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 9%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 24, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2504, top: 264, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '净利润', size: 38, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 92%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +136 个百分点', size: 26, weight: 400, color: NOTE },
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
