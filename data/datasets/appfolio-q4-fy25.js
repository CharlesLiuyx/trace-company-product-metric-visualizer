/* ====================================================================
 * AppFolio - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/appfolio-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
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
  const WORDMARK = '#1e2430';

  const annotations = `
    <g font-family="Arial Rounded MT Bold,Arial Black,Arial,sans-serif" data-typography-role="brand">
      <text x="871" y="442" text-anchor="middle" font-size="141" font-weight="900" textLength="535" lengthAdjust="spacingAndGlyphs" fill="${WORDMARK}">appfolio</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'appfolio-q4-fy25',
    name: 'AppFolio · Q4 FY25',
    company: 'AppFolio',
    meta: {
      company: 'AppFolio',
      title: 'Appfolio Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/appfolio-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 125,
      titleWeight: 800,
      titleTextLength: 2252,
      hidePeriodStamp: true,
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
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 1.6,
      nodes: {
        core_solutions: { x: 386, y: 535, width: 74, height: 90 },
        value_added_services: { x: 386, y: 773, width: 74, height: 299 },
        other_revenue: { x: 386, y: 1197, width: 74, height: 12 },
        revenue: { x: 853, y: 687, width: 72, height: 402 },
        gross_profit: { x: 1321, y: 590, width: 72, height: 256 },
        cost_of_revenue: { x: 1321, y: 1067, width: 72, height: 146 },
        operating_profit: { x: 1787, y: 483, width: 74, height: 71 },
        operating_expenses: { x: 1787, y: 759, width: 74, height: 185 },
        interest: { x: 2135, y: 508, width: 72, height: 3 },
        net_profit: { x: 2255, y: 389, width: 72, height: 65 },
        tax: { x: 2255, y: 669, width: 72, height: 10 },
        rnd: { x: 2255, y: 787, width: 72, height: 74 },
        sm: { x: 2255, y: 966, width: 72, height: 65 },
        ga: { x: 2255, y: 1130, width: 72, height: 37 },
        depreciation: { x: 2255, y: 1270, width: 72, height: 8 },
      },
      labels: {
        core_solutions: {
          blocks: [
            {
              x: 423, top: 437, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 342, top: 556, anchor: 'end', lines: [{ text: 'Core solutions', size: 40, weight: 800 }] },
          ],
        },
        value_added_services: {
          blocks: [
            {
              x: 423, top: 674, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 328, top: 858, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Value Added', size: 40, weight: 800 },
                { text: 'Services', size: 40, weight: 800 },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 423, top: 1098, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+191% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 277, top: 1176, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 889, top: 541, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1357, top: 411, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '64% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1357, top: 1230, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 37, weight: 800 },
                { text: 'revenue', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1824, top: 303, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '18% margin', size: 29, weight: 400, color: NOTE },
                { text: '+8pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1824, top: 959, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 37, weight: 800 },
                { text: 'expenses', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2171, top: 524, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2354, top: 369, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '16% margin', size: 29, weight: 400, color: NOTE },
                { text: '(34pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2446, top: 631, anchor: 'middle', lineGap: 8,
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
              x: 2451, top: 775, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '19% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2449, top: 934, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2448, top: 1087, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '9% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        depreciation: {
          blocks: [
            {
              x: 2454, top: 1241, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Depreciation', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'core_solutions', col: 0, order: 0, type: 'source', label: 'Core solutions', value: 56, notes: ['+17% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'value_added_services', col: 0, order: 1, type: 'source', label: ['Value Added', 'Services'], value: 185, notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 8, notes: ['+191% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 248, notes: ['+22% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 158, notes: ['64% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 91, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 44, notes: ['18% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 114, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 40, notes: ['16% margin', '(34pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 46, notes: ['19% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 40, notes: ['16% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 23, notes: ['9% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation', col: 5, order: 5, type: 'cost', label: 'Depreciation', value: 5, notes: ['2% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'core_solutions', target: 'revenue', value: 56, width: 90, sourceOrder: 0, targetOrder: 0 },
      { source: 'value_added_services', target: 'revenue', value: 185, width: 299, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 8, width: 12, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 158, width: 255, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 91, width: 146, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 44, width: 71, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 114, width: 185, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'interest', target: 'net_profit', value: 2,
        width: 3, sourceOrder: 0, targetOrder: 1,
        curve: { c1x: 2215, c1y: 510, c2x: 2243, c2y: 453 },
      },
      {
        source: 'operating_profit', target: 'net_profit', value: 38,
        width: 62, sourceOrder: 0, targetOrder: 0,
        curve: { c1x: 2000, c1y: 514, c2x: 2115, c2y: 420 },
      },
      {
        source: 'operating_profit', target: 'tax', value: 6,
        width: 9, sourceOrder: 1, targetOrder: 0,
        curve: { c1x: 2000, c1y: 550, c2x: 2140, c2y: 674 },
      },

      { source: 'operating_expenses', target: 'rnd', value: 46, width: 74, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 40, width: 65, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 23, width: 37, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation', value: 5, width: 8, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'AppFolio · 2025 财年第四季度',
        meta: {
          title: 'Appfolio 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
        },
        nodes: {
          core_solutions: { label: '核心解决方案', notes: ['同比 +17%'] },
          value_added_services: { label: '增值服务', notes: ['同比 +20%'] },
          other_revenue: { label: '其他', notes: ['同比 +191%'] },
          revenue: { label: '收入', notes: ['同比 +22%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 64%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +8 个百分点'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 16%', '同比 (34 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 19%', '同比 (2 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 16%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 9%', '同比 (2 个百分点)'] },
          depreciation: { label: '折旧', notes: ['占收入 2%', '同比 (1 个百分点)'] },
        },
      },
    },
  });
})();
