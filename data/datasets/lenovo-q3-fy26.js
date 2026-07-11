/* ====================================================================
 * Lenovo - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/lenovo-q3-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#6b6c6e';
  const PURPLE = '#881178';
  const PURPLE_LINK = '#be8ab8';
  const ORANGE = '#ff614f';
  const ORANGE_LINK = '#f3b0a8';
  const BLUE = '#3148ba';
  const BLUE_LINK = '#9ca8dc';
  const HUB = '#000000';
  const HUB_LINK = '#8e8e8b';
  const GREEN = '#28a329';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9ccf99';
  const RED = '#df0000';
  const RED_LABEL = '#971900';
  const RED_LINK = '#e98283';
  const RIGHT_LABEL_X = 2408;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="689" y="394" font-family="Arial Black,Arial,sans-serif" font-size="152" font-weight="900" textLength="526" lengthAdjust="spacingAndGlyphs" fill="#e60012" data-typography-role="brand">Lenovo</text>
      <g fill="${NOTE}" font-weight="700">
        <text x="1900" y="1240" text-anchor="middle" font-size="42">Q3 FY26</text>
        <text x="1900" y="1287" text-anchor="middle" font-size="30" font-weight="500">Ending Jan. 2026</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lenovo-q3-fy26',
    name: 'Lenovo · Q3 FY26',
    company: 'Lenovo',
    meta: {
      company: 'Lenovo',
      title: 'Lenovo Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/lenovo-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2178,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: PURPLE_LINK,
        hub: HUB_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 9 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 18.8,
      nodes: {
        idg: { x: 396, y: 440, width: 72, height: 297 },
        isg: { x: 396, y: 939, width: 72, height: 97 },
        ssg: { x: 396, y: 1198, width: 72, height: 49 },
        gross_revenue: { x: 770, y: 552, width: 72, height: 444 },
        revenue: { x: 1144, y: 654, width: 71, height: 417 },
        eliminations: { x: 1144, y: 1237, width: 71, height: 24 },
        gross_profit: { x: 1518, y: 553, width: 71, height: 62 },
        cost_of_revenue: { x: 1518, y: 821, width: 71, height: 355 },
        operating_profit: { x: 1894, y: 462, width: 72, height: 17 },
        operating_expenses: { x: 1891, y: 695, width: 72, height: 44 },
        net_profit: { x: 2265, y: 364, width: 72, height: 11 },
        tax: { x: 2265, y: 568, width: 72, height: 4 },
        financial: { x: 2265, y: 685, width: 72, height: 2 },
        selling_distribution: { x: 2265, y: 846, width: 72, height: 20 },
        administrative: { x: 2265, y: 1025, width: 72, height: 13 },
        rnd: { x: 2265, y: 1207, width: 72, height: 11 },
      },
      labels: {
        idg: {
          blocks: [
            {
              x: 356, top: 500, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'IDG', size: 40, weight: 800 },
                { text: 'Intelligent', size: 40, weight: 800 },
                { text: 'Devices', size: 40, weight: 800 },
                { text: 'Group', size: 40, weight: 800 },
              ],
            },
            {
              x: 432, top: 351, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 170, top: 708, anchor: 'middle',
              lines: [{ text: '7% operating margin', size: 28, weight: 400, color: NOTE }],
            },
          ],
        },
        isg: {
          blocks: [
            {
              x: 356, top: 846, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'ISG', size: 40, weight: 800 },
                { text: 'Infrastructure', size: 40, weight: 800 },
                { text: 'Solutions', size: 40, weight: 800 },
                { text: 'Group', size: 40, weight: 800 },
              ],
            },
            {
              x: 434, top: 846, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+31% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 173, top: 1058, anchor: 'middle',
              lines: [{ text: '(0%) operating margin', size: 28, weight: 400, color: NOTE }],
            },
          ],
        },
        ssg: {
          blocks: [
            {
              x: 356, top: 1118, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'SSG', size: 40, weight: 800 },
                { text: 'Solutions &', size: 40, weight: 800 },
                { text: 'Services', size: 40, weight: 800 },
                { text: 'Group', size: 40, weight: 800 },
              ],
            },
            {
              x: 434, top: 1106, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+18% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 178, top: 1317, anchor: 'middle',
              lines: [{ text: '22% operating margin', size: 28, weight: 400, color: NOTE }],
            },
          ],
        },
        gross_revenue: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1178, top: 506, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+18% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1179, top: 1289, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Eliminations', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1554, top: 365, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '15% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1553, top: 1200, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 34, weight: 800 },
                { text: 'revenue', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1927, top: 267, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '4% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1927, top: 759, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 34, weight: 800 },
                { text: 'expenses', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 306, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '3% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 546, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Tax', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        financial: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 658, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Financial', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        selling_distribution: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 846, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Selling/', size: 31, weight: 800 },
                { text: 'Distribution', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '5% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        administrative: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1025, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Administrative', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1197, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'idg', col: 0, order: 0, type: 'source',
        label: ['IDG', 'Intelligent', 'Devices', 'Group'],
        value: 15.8, color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK,
      },
      {
        id: 'isg', col: 0, order: 1, type: 'source',
        label: ['ISG', 'Infrastructure', 'Solutions', 'Group'],
        value: 5.2, color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'ssg', col: 0, order: 2, type: 'source',
        label: ['SSG', 'Solutions &', 'Services', 'Group'],
        value: 2.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'gross_revenue', col: 1, order: 0, type: 'hub',
        label: 'Gross revenue', value: 23.7, color: HUB, labelColor: HUB, linkTint: HUB_LINK,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 22.2, color: HUB, labelColor: HUB, linkTint: HUB_LINK,
      },
      {
        id: 'eliminations', col: 2, order: 1, type: 'cost',
        label: 'Eliminations', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 3.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 18.9, valueText: '($18.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 4, order: 1, type: 'profit',
        label: 'Operating profit', value: 0.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 2, type: 'cost',
        label: ['Operating', 'expenses'], value: 2.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 0.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'financial', col: 5, order: 2, type: 'cost',
        label: 'Financial', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'selling_distribution', col: 5, order: 3, type: 'cost',
        label: ['Selling/', 'Distribution'], value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'administrative', col: 5, order: 4, type: 'cost',
        label: 'Administrative', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 5, type: 'cost',
        label: 'R&D', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'idg', target: 'gross_revenue', value: 15.8, width: 297, targetOrder: 0, linkTint: { left: PURPLE_LINK, right: PURPLE_LINK } },
      { source: 'isg', target: 'gross_revenue', value: 5.2, width: 97, targetOrder: 1, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'ssg', target: 'gross_revenue', value: 2.7, width: 49, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'gross_revenue', target: 'revenue', value: 22.2, width: 417, sourceOrder: 0, targetOrder: 0, linkTint: { left: HUB_LINK, right: HUB_LINK } },
      { source: 'gross_revenue', target: 'eliminations', value: 1.4, width: 24, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 3.3, width: 62, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 18.9, width: 355, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.9, width: 17, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.4, width: 44, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, width: 11, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 4, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.1, width: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'selling_distribution', value: 1.1, width: 20, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'administrative', value: 0.7, width: 13, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.6, width: 11, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Lenovo · 2026 财年第三季度',
        meta: {
          title: 'Lenovo 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 1 月',
        },
        nodes: {
          idg: { label: 'IDG 智能设备集团' },
          isg: { label: 'ISG 基础设施方案集团' },
          ssg: { label: 'SSG 方案与服务集团' },
          gross_revenue: { label: '总收入' },
          revenue: { label: '收入' },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润' },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润' },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          financial: { label: '财务' },
          selling_distribution: { label: '销售/分销' },
          administrative: { label: '行政' },
          rnd: { label: '研发' },
        },
        layout: {
          labels: {
            selling_distribution: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 846, anchor: 'start', lineGap: 7,
                  lines: [
                    { text: '销售/分销', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 5%', size: 26, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 26, weight: 400, color: NOTE },
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
