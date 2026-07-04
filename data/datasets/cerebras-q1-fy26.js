/* ====================================================================
 * Cerebras - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/cerebras-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const ORANGE = '#f35c29';
  const SALMON = '#eab3a0';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2485;

  const cerebrasLogo = `
    <g fill="none" stroke="${ORANGE}" stroke-width="15">
      <path d="M222,48 A110.6,110.6 0 1 0 222,209"/>
      <path d="M222,48 A101.2,101.2 0 1 0 222,209"/>
      <path d="M222,48 A93,93 0 1 0 222,209"/>
      <path d="M222,48 A86.1,86.1 0 1 0 222,209"/>
    </g>
    <text x="192" y="163" font-family="Arial,Helvetica,sans-serif" font-size="150" font-weight="500"
      fill="${BLACK}" textLength="417" lengthAdjust="spacingAndGlyphs">cerebras</text>
  `;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'cerebras-q1-fy26',
    name: 'Cerebras · Q1 FY26',
    company: 'Cerebras',
    meta: {
      company: 'Cerebras',
      title: 'Cerebras Q1 FY26 Income Statement',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/cerebras-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 205,
      titleSize: 140,
      titleWeight: 700,
      titleTextLength: 2275,
      logoWidth: 700,
      logoHeight: 257,
      logoY: 294,
      logoViewBox: '0 0 700 257',
      logoSvg: cerebrasLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: ORANGE },
        hub: { node: BLACK, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: SALMON,
        hub: SALMON,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },

    layout: {
      scale: 1,
      nodes: {
        hardware: { x: 405, y: 609, width: 72, height: 192 },
        cloud_services: { x: 405, y: 1015, width: 72, height: 144 },
        revenue: { x: 873, y: 721, width: 71, height: 336 },
        gross_profit: { x: 1339, y: 606, width: 72, height: 150 },
        cost_of_revenue: { x: 1339, y: 967, width: 72, height: 186 },
        operating_loss: { x: 1627, y: 971, width: 72, height: 26 },
        operating_expenses: { x: 1805, y: 719, width: 73, height: 176 },
        rnd: { x: 2272, y: 584, width: 73, height: 131 },
        sm: { x: 2272, y: 853, width: 73, height: 26 },
        ga: { x: 2272, y: 1027, width: 73, height: 19 },
      },
      labels: {
        hardware: {
          blocks: [
            {
              x: 440, top: 519, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+59% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 252, top: 665, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Hardware', size: 40, weight: 800 },
                { text: '41% gross margin', size: 32, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cloud_services: {
          blocks: [
            {
              x: 440, top: 920, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+178% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 250, top: 1018, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cloud &', size: 40, weight: 800 },
                { text: 'Other services', size: 40, weight: 800 },
                { text: '49% gross margin', size: 32, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 908, top: 579, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+94% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1374, top: 424, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '45% margin', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1374, top: 1171, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1662, top: 1019, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'loss', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(8%) margin', size: 29, weight: 400, color: NOTE },
                { text: '+21pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1841, top: 561, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 593, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '39% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(14pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 810, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1004, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '6% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'hardware', col: 0, order: 0, type: 'source', label: 'Hardware', value: 111, notes: ['+59% Y/Y', '41% gross margin'], color: BLACK, labelColor: ORANGE, linkTint: SALMON },
      { id: 'cloud_services', col: 0, order: 1, type: 'source', label: ['Cloud &', 'Other services'], value: 83, notes: ['+178% Y/Y', '49% gross margin'], color: BLACK, labelColor: ORANGE, linkTint: SALMON },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 193, notes: ['+94% Y/Y'], color: BLACK, labelColor: ORANGE, linkTint: SALMON },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 86, notes: ['45% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 107, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -15, notes: ['(8%) margin', '+21pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 101, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'R&D', value: 75, notes: ['39% of revenue', '(14pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'S&M', value: 15, notes: ['8% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 11, notes: ['6% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'hardware', target: 'revenue', value: 111, width: 192, sourceOrder: 0, targetOrder: 0 },
      { source: 'cloud_services', target: 'revenue', value: 83, width: 144, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 86, width: 150, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 107, width: 186, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 86, width: 150, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 15, width: 26, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 75, width: 131, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 15, width: 26, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 11, width: 19, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Cerebras · 2026 财年第一季度',
        meta: {
          title: 'Cerebras 2026 财年第一季度利润表',
          titleSize: 118,
          titleTextLength: 2120,
        },
        nodes: {
          hardware: { label: '硬件', notes: ['同比 +59%', '毛利率 41%'] },
          cloud_services: { label: ['云与', '其他服务'], notes: ['同比 +178%', '毛利率 49%'] },
          revenue: { label: '收入', notes: ['同比 +94%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (8%)', '同比 +21 个百分点'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 39%', '同比 (14 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 8%', '同比 (3 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 6%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            hardware: {
              blocks: [
                {
                  x: 440, top: 519, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +59%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 252, top: 665, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '硬件', size: 40, weight: 800 },
                    { text: '毛利率 41%', size: 32, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cloud_services: {
              blocks: [
                {
                  x: 440, top: 920, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +178%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 250, top: 1018, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '云与', size: 40, weight: 800 },
                    { text: '其他服务', size: 40, weight: 800 },
                    { text: '毛利率 49%', size: 32, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 908, top: 579, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +94%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1374, top: 424, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 45%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1374, top: 1171, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '收入', size: 36, weight: 800 },
                    { text: '成本', size: 36, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            operating_loss: {
              blocks: [
                {
                  x: 1662, top: 1019, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '亏损', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 (8%)', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +21 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1841, top: 561, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 593, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 39%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (14 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 810, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售与市场', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 8%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1004, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 6%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
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
