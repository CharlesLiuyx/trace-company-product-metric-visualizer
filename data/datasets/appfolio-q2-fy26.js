/* ====================================================================
 * AppFolio - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/appfolio-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#009051';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const WORDMARK = '#1e2430';

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="871" y="371" text-anchor="middle" font-family="Arial Rounded MT Bold,Arial Black,Arial,sans-serif" font-size="141" font-weight="900" textLength="535" lengthAdjust="spacingAndGlyphs" fill="${WORDMARK}">appfolio</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'appfolio-q2-fy26',
    name: 'AppFolio · Q2 FY26',
    company: 'AppFolio',
    meta: {
      company: 'AppFolio',
      title: 'Appfolio Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/appfolio-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2260,
      hidePeriodStamp: true,
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
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 1.57,
      nodes: {
        core_solutions: { x: 386, y: 456, width: 72, height: 93 },
        value_added_services: { x: 386, y: 707, width: 72, height: 347 },
        other_revenue: { x: 386, y: 1216, width: 72, height: 4 },
        revenue: { x: 853, y: 590, width: 72, height: 444 },
        gross_profit: { x: 1321, y: 506, width: 72, height: 282 },
        cost_of_revenue: { x: 1321, y: 981, width: 72, height: 161 },
        operating_profit: { x: 1788, y: 406, width: 72, height: 83 },
        operating_expenses: { x: 1788, y: 678, width: 72, height: 197 },
        interest: { x: 2120, y: 417, width: 84, height: 4 },
        net_profit: { x: 2258, y: 304, width: 72, height: 65 },
        tax: { x: 2258, y: 564, width: 72, height: 19 },
        rnd: { x: 2258, y: 718, width: 72, height: 80 },
        sm: { x: 2258, y: 914, width: 72, height: 69 },
        ga: { x: 2258, y: 1109, width: 72, height: 40 },
        depreciation: { x: 2258, y: 1301, width: 72, height: 8 },
      },
      labels: {
        core_solutions: {
          blocks: [
            {
              x: 422, top: 365, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 342, top: 478, anchor: 'end', lines: [{ text: 'Core solutions', size: 40, weight: 800 }] },
          ],
        },
        value_added_services: {
          blocks: [
            {
              x: 422, top: 615, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 326, top: 832, anchor: 'end', lineGap: 8,
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
              x: 422, top: 1123, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(37%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 288, top: 1194, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 889, top: 446, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1357, top: 322, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '64% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1357, top: 1157, anchor: 'middle', lineGap: 8,
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
              x: 1824, top: 225, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '19% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1824, top: 896, anchor: 'middle', lineGap: 8,
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
              x: 2164, top: 438, anchor: 'middle', lineGap: 8,
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
              x: 2360, top: 292, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '15% margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2443, top: 536, anchor: 'middle', lineGap: 8,
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
              x: 2452, top: 726, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2443, top: 914, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '18% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2443, top: 1092, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '9% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        depreciation: {
          blocks: [
            {
              x: 2454, top: 1248, anchor: 'middle', lineGap: 8,
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
      { id: 'core_solutions', col: 0, order: 0, type: 'source', label: 'Core solutions', value: 60, notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'value_added_services', col: 0, order: 1, type: 'source', label: ['Value Added', 'Services'], value: 219, notes: ['+22% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 2, notes: ['(37%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 281, notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 179, notes: ['64% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 103, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 53, notes: ['19% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 126, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 42, notes: ['15% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 13, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 44, notes: ['16% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 51, notes: ['18% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 26, notes: ['9% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation', col: 5, order: 5, type: 'cost', label: 'Depreciation', value: 5, notes: ['2% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'core_solutions', target: 'revenue', value: 60, width: 93, sourceOrder: 0, targetOrder: 0 },
      { source: 'value_added_services', target: 'revenue', value: 219, width: 347, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 2, width: 4, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 179, width: 282, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 103, width: 161, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 53, width: 83, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 126, sourceWidth: 199, targetWidth: 197, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'interest',
        target: 'net_profit', value: 1,
        sourceWidth: 2,
        targetWidth: 2,
        sourceOrder: 0,
        targetOrder: 1,
        curve: { c1x: 2220, c1y: 418, c2x: 2242, c2y: 368 },
      },
      {
        source: 'operating_profit',
        target: 'net_profit', value: 40,
        width: 63,
        sourceOrder: 0,
        targetOrder: 0,
        curve: { c1x: 2000, c1y: 438, c2x: 2115, c2y: 336 },
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 13,
        width: 19,
        sourceOrder: 1,
        targetOrder: 0,
        curve: { c1x: 1998, c1y: 479, c2x: 2135, c2y: 573 },
      },

      { source: 'operating_expenses', target: 'rnd', value: 44, width: 80, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 51, width: 69, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 26, width: 40, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation', value: 5, width: 8, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'AppFolio · 2026 财年第二季度',
        meta: {
          title: 'Appfolio 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
        },
        nodes: {
          core_solutions: { label: '核心解决方案', notes: ['同比 +14%'] },
          value_added_services: { label: '增值服务', notes: ['同比 +22%'] },
          other_revenue: { label: '其他', notes: ['同比 (37%)'] },
          revenue: { label: '收入', notes: ['同比 +19%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 64%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 15%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 16%', '同比 (4 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 18%', '同比 +2 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 9%', '同比 +0 个百分点'] },
          depreciation: { label: '折旧', notes: ['占收入 2%', '同比 (1 个百分点)'] },
        },
      },
    },
  });
})();
