/* ====================================================================
 * Marvell - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/marvell-q4-fy25.png as a fixed
 * d3-sankey layout with a pure inline SVG Marvell mark.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const CYAN = '#00b5e2';
  const CYAN_LINK = '#85d6ea';
  const BLUE = '#0072ce';
  const BLUE_LINK = '#85b8e1';
  const AQUA = '#00c7b1';
  const AQUA_LINK = '#85dfd4';
  const TEAL = '#00816d';
  const TEAL_LINK = '#85bfb6';
  const ORANGE = '#ffa400';
  const ORANGE_LINK = '#f7ce85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2500;

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
    key: 'marvell-q4-fy25',
    name: 'Marvell · Q4 FY25',
    company: 'Marvell',
    meta: {
      company: 'Marvell',
      title: 'Marvell Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Jan. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/marvell-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2190,
      periodX: 2480,
      periodY: 265,
      periodNoteY: 308,
      logoWidth: 286,
      logoHeight: 286,
      logoY: 250,
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
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 150,
      nodes: {
        data_center: { x: 420, y: 519, width: 71, height: 207 },
        enterprise_networking: { x: 420, y: 841, width: 71, height: 24 },
        carrier_infrastructure: { x: 420, y: 996, width: 71, height: 15 },
        consumer: { x: 420, y: 1136, width: 71, height: 11 },
        automotive_industrial: { x: 420, y: 1269, width: 71, height: 11 },
        revenue: { x: 887, y: 714, width: 70, height: 276 },
        gross_profit: { x: 1356, y: 611, width: 72, height: 137 },
        cost_of_revenue: { x: 1354, y: 941, width: 71, height: 135 },
        restructuring: { x: 1555, y: 942, width: 73, height: 2 },
        operating_profit: { x: 1827, y: 484, width: 70, height: 34 },
        operating_expenses: { x: 1834, y: 754, width: 70, height: 104 },
        net_profit: { x: 2288, y: 398, width: 71, height: 29 },
        other_non_operating: { x: 2288, y: 626, width: 71, height: 2 },
        rnd: { x: 2288, y: 848, width: 71, height: 74 },
        sga: { x: 2288, y: 1085, width: 71, height: 27 },
      },
      labels: {
        data_center: {
          blocks: [
            {
              x: 456, top: 428, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: CYAN },
                { text: '+78% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 309, top: 574, anchor: 'middle', lineGap: 8,
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
              x: 456, top: 746, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '(35%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 260, top: 804, anchor: 'middle', lineGap: 8,
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
              x: 456, top: 896, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: AQUA },
                { text: '(38%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 235, top: 956, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Carrier', size: 40, weight: 800, color: AQUA },
                { text: 'infrastructure', size: 40, weight: 800, color: AQUA },
              ],
            },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 456, top: 1036, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: TEAL },
                { text: '(38%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 275, top: 1116, anchor: 'middle', lines: [{ text: 'Consumer', size: 40, weight: 800, color: TEAL }] },
          ],
        },
        automotive_industrial: {
          blocks: [
            {
              x: 456, top: 1169, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: ORANGE },
                { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 250, top: 1226, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Automotive', size: 40, weight: 800, color: ORANGE },
                { text: '/ Industrial', size: 40, weight: 800, color: ORANGE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 922, top: 559, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 46, weight: 800 },
                { text: '$value', size: 44, weight: 400 },
                { text: '+27% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1392, top: 432, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '50% margin', size: 29, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1390, top: 1099, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: 1593, top: 963, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Restructuring', size: 31, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 29, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1862, top: 303, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '13% margin', size: 29, weight: 400, color: NOTE },
                { text: '+15pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1869, top: 881, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'expenses', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2507, top: 363, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '11% margin', size: 29, weight: 400, color: NOTE },
                { text: '+39pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_non_operating: {
          blocks: [
            {
              x: 2512, top: 588, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 814, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '27% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2507, top: 1071, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },
    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: ['Data', 'center'], value: 1.4, notes: ['+78% Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'enterprise_networking', col: 0, order: 1, type: 'source', label: ['Enterprise', 'networking'], value: 0.2, notes: ['(35%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'carrier_infrastructure', col: 0, order: 2, type: 'source', label: ['Carrier', 'infrastructure'], value: 0.1, notes: ['(38%) Y/Y'], color: AQUA, labelColor: AQUA, linkTint: AQUA_LINK },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 0.1, notes: ['(38%) Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'automotive_industrial', col: 0, order: 4, type: 'source', label: ['Automotive', '/ Industrial'], value: 0.1, notes: ['+4% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.8, notes: ['+27% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.9, notes: ['50% margin', '+4pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.9 },
      { id: 'restructuring', col: 3, order: 2, type: 'profit', label: 'Restructuring', value: 0.013, valueText: '$13M', color: GREEN_LABEL, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.2, notes: ['13% margin', '+15pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.7 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['11% margin', '+39pp Y/Y'] },
      { id: 'other_non_operating', col: 5, order: 1, type: 'cost', label: 'Other', value: 0.035, valueText: '($35M)' },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.5, notes: ['27% of revenue', '(5pp) Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.2, notes: ['11% of revenue', '(4pp) Y/Y'] },
    ],
    links: [
      { source: 'data_center', target: 'revenue', value: 1.4, width: 207, sourceWidth: 207, targetWidth: 215, targetOrder: 0 },
      { source: 'enterprise_networking', target: 'revenue', value: 0.2, width: 24, targetOrder: 1 },
      { source: 'carrier_infrastructure', target: 'revenue', value: 0.1, width: 15, targetOrder: 2 },
      { source: 'consumer', target: 'revenue', value: 0.1, width: 11, targetOrder: 3 },
      { source: 'automotive_industrial', target: 'revenue', value: 0.1, width: 11, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 0.9, width: 137, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.9, width: 135, sourceWidth: 139, targetWidth: 135, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.2, width: 34, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, width: 104, sourceWidth: 103, targetWidth: 104, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'restructuring',
        target: 'operating_expenses',
        value: 0.013,
        width: 2,
        targetOrder: 1,
        y1: 857,
        linkTint: GREEN_LINK,
        curve: { x0: 1628, x1: 1834, c1x: 1710, c1y: 943, c2x: 1780, c2y: 857 },
      },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, width: 29, sourceWidth: 32, targetWidth: 29, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      {
        source: 'operating_profit',
        target: 'other_non_operating',
        value: 0.035,
        width: 2,
        sourceOrder: 1,
        targetOrder: 0,
        linkTint: RED_LINK,
        curve: { x0: 1897, x1: 2288, c1x: 2020, c1y: 517, c2x: 2135, c2y: 627 },
      },
      { source: 'operating_expenses', target: 'rnd', value: 0.5, width: 74, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.2, width: 27, sourceWidth: 30, targetWidth: 27, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Marvell · 2025 财年第四季度',
        meta: {
          title: 'Marvell 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 1 月',
          titleTextLength: 1450,
        },
        nodes: {
          data_center: { label: '数据中心', notes: ['同比 +78%'] },
          enterprise_networking: { label: '企业网络', notes: ['同比 (35%)'] },
          carrier_infrastructure: { label: '运营商基础设施', notes: ['同比 (38%)'] },
          consumer: { label: '消费业务', notes: ['同比 (38%)'] },
          automotive_industrial: { label: '汽车/工业', notes: ['同比 +4%'] },
          revenue: { label: '收入', notes: ['同比 +27%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          restructuring: { label: '重组' },
          operating_profit: { label: '营业利润', notes: ['利润率 13%', '同比 +15 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +39 个百分点'] },
          other_non_operating: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 27%', '同比 (5 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 11%', '同比 (4 个百分点)'] },
        },
        layout: {
          labels: {
            data_center: {
              blocks: [
                {
                  x: 456, top: 428, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: CYAN },
                    { text: '同比 +78%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 280, top: 598, anchor: 'middle', lines: [{ text: '数据中心', size: 40, weight: 800, color: CYAN }] },
              ],
            },
            enterprise_networking: {
              blocks: [
                {
                  x: 456, top: 746, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: BLUE },
                    { text: '同比 (35%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 260, top: 828, anchor: 'middle', lines: [{ text: '企业网络', size: 40, weight: 800, color: BLUE }] },
              ],
            },
            carrier_infrastructure: {
              blocks: [
                {
                  x: 456, top: 896, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: AQUA },
                    { text: '同比 (38%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 235, top: 983, anchor: 'middle', lines: [{ text: '运营商基础设施', size: 35, weight: 800, color: AQUA }] },
              ],
            },
            automotive_industrial: {
              blocks: [
                {
                  x: 456, top: 1169, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: ORANGE },
                    { text: '同比 +4%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 250, top: 1253, anchor: 'middle', lines: [{ text: '汽车/工业', size: 38, weight: 800, color: ORANGE }] },
              ],
            },
            restructuring: {
              blocks: [
                {
                  x: 1593, top: 963, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '重组', size: 31, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 29, weight: 400, color: GREEN_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2507, top: 363, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '净利润', size: 38, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 11%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +39 个百分点', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 814, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '研发', size: 34, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                    { text: '占收入 27%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (5 个百分点)', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2507, top: 1071, anchor: 'middle', lineGap: 5,
                  lines: [
                    { text: '销售及行政', size: 30, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 11%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 24, weight: 400, color: NOTE },
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
