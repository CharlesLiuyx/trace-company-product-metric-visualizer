/* ====================================================================
 * FOX Corporation - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/fox-q3-fy26.png as a fixed
 * d3-sankey layout with validated crop-backed brand annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#153892';
  const BLUE_LABEL = '#0f3f9a';
  const BLUE_LINK = '#8e9dc6';
  const TITLE = '#155077';
  const NOTE = '#777777';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#0f955b';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#98190a';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2545;

  const periodStamp = `
    <g font-family="Montserrat,Arial,sans-serif" text-anchor="middle">
      <text x="306" y="1305" font-size="42" font-weight="800" fill="${NOTE}">Q3 FY26</text>
      <text x="306" y="1344" font-size="30" font-weight="400" fill="${NOTE}">Ending Mar. 2026</text>
    </g>`;

  const periodStampZh = `
    <g font-family="Montserrat,Arial,sans-serif" text-anchor="middle">
      <text x="306" y="1305" font-size="40" font-weight="800" fill="${NOTE}">2026 财年第三季度</text>
      <text x="306" y="1344" font-size="30" font-weight="400" fill="${NOTE}">截至 2026 年 3 月</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'fox-q3-fy26',
    name: 'FOX · Q3 FY26',
    company: 'FOX',
    meta: {
      company: 'FOX',
      title: 'FOX Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/fox-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1336,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 1961,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: periodStamp,
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/fox/company-wordmark.png',
        x: 792,
        y: 256,
        width: 406,
        height: 180,
      },
      {
        key: 'cable-network-cluster',
        href: 'data/assets/raster-annotations/fox/cable-network-cluster.png',
        x: 4,
        y: 315,
        width: 224,
        height: 256,
      },
      {
        key: 'television-cluster',
        href: 'data/assets/raster-annotations/fox/television-cluster.png',
        x: 54,
        y: 695,
        width: 167,
        height: 283,
      },
    ],

    layout: {
      scale: 110,
      nodes: {
        cable_network_programming: { x: 480, y: 371, width: 72, height: 190 },
        television: { x: 480, y: 711, width: 72, height: 241 },
        corporate_other: { x: 480, y: 1092, width: 72, height: 20 },
        gross_revenue: { x: 948, y: 524, width: 71, height: 451 },
        revenue: { x: 1415, y: 570, width: 71, height: 441 },
        eliminations: { x: 1414, y: 1123, width: 72, height: 10 },
        operating_profit: { x: 1882, y: 473, width: 71, height: 92 },
        operating_expenses: { x: 1881, y: 772, width: 72, height: 349 },
        net_profit: { x: 2349, y: 367, width: 72, height: 20 },
        other_op: { x: 2349, y: 522, width: 72, height: 64 },
        tax: { x: 2349, y: 677, width: 72, height: 8 },
        operating: { x: 2349, y: 800, width: 72, height: 274 },
        sga: { x: 2349, y: 1133, width: 72, height: 60 },
        da: { x: 2349, y: 1254, width: 72, height: 11 },
        other_cost: { x: 2349, y: 1332, width: 72, height: 4 },
      },
      labels: {
        gross_revenue: { blocks: [] },
        cable_network_programming: {
          blocks: [
            {
              x: 518, top: 267, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 470, top: 415, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Cable Network', size: 40, weight: 800 },
                { text: 'Programming', size: 40, weight: 800 },
              ],
            },
            {
              x: 470, top: 502, anchor: 'end', lineGap: 8,
              lines: [
                { text: '51% adj. margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        television: {
          blocks: [
            {
              x: 518, top: 608, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(19%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 480, top: 779, anchor: 'end',
              lines: [{ text: 'Television', size: 40, weight: 800 }],
            },
            {
              x: 480, top: 829, anchor: 'end', lineGap: 8,
              lines: [
                { text: '9% adj. margin', size: 29, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        corporate_other: {
          blocks: [
            {
              x: 518, top: 989, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+162% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 470, top: 1074, anchor: 'end',
              lines: [{ text: 'Corporate & Other', size: 40, weight: 800 }],
            },
            {
              x: 470, top: 1123, anchor: 'end', lineGap: 8,
              lines: [
                { text: '(80%) adj. margin', size: 29, weight: 400, color: NOTE },
                { text: '+62pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1452, top: 415, anchor: 'middle', lineGap: 16,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '(9%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1452, top: 1158, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Eliminations', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1916, top: 281, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '11% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1916, top: 1144, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Costs and', size: 40, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
                { text: '$value', size: 40, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 301, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '2% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_op: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 513, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 633, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 894, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1118, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        da: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1220, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'D&A', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_cost: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1304, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'cable_network_programming', col: 0, order: 0, type: 'source', label: ['Cable Network', 'Programming'], value: 1.7, notes: ['+6% Y/Y', '51% adj. margin', '(3pp) Y/Y'] },
      { id: 'television', col: 0, order: 1, type: 'source', label: 'Television', value: 2.2, notes: ['(19%) Y/Y', '9% adj. margin', '+6pp Y/Y'] },
      { id: 'corporate_other', col: 0, order: 2, type: 'source', label: 'Corporate & Other', value: 0.2, notes: ['+162% Y/Y', '(80%) adj. margin', '+62pp Y/Y'] },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: 'Gross revenue', value: 4.1 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 4.0, valueText: '$4.0B', notes: ['(9%) Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 0.1 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.8, notes: ['11% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Costs and', 'expenses'], value: 3.2 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['2% margin', '(3pp) Y/Y'] },
      { id: 'other_op', col: 4, order: 1, type: 'cost', label: 'Other', value: 0.5 },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.1 },
      { id: 'operating', col: 4, order: 3, type: 'cost', label: 'Operating', value: 2.5 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.5 },
      { id: 'da', col: 4, order: 5, type: 'cost', label: 'D&A', value: 0.1 },
      { id: 'other_cost', col: 4, order: 6, type: 'cost', label: 'Other', value: 0.04, valueText: '($0.0B)' },
    ],

    links: [
      { source: 'cable_network_programming', target: 'gross_revenue', value: 1.7, width: 190, sourceOrder: 0, targetOrder: 0 },
      { source: 'television', target: 'gross_revenue', value: 2.2, width: 241, sourceOrder: 0, targetOrder: 1 },
      { source: 'corporate_other', target: 'gross_revenue', value: 0.2, width: 20, sourceOrder: 0, targetOrder: 2 },

      { source: 'gross_revenue', target: 'revenue', value: 4.0, width: 441, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.1, width: 10, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'revenue',
        target: 'operating_profit',
        value: 0.8,
        width: 92,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: { left: GREEN_LINK, right: GREEN_LINK },
      },
      { source: 'revenue', target: 'operating_expenses', value: 3.2, width: 349, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 0.2, width: 20, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_op', value: 0.5, width: 64, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, width: 8, sourceOrder: 2, targetOrder: 0 },

      { source: 'operating_expenses', target: 'operating', value: 2.5, width: 274, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.5, width: 60, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.1, width: 11, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_cost', value: 0.04, width: 4, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'FOX · 2026 财年第三季度',
        meta: {
          title: 'FOX 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1720,
        },
        annotationsSvg: periodStampZh,
        nodes: {
          cable_network_programming: { label: ['有线网络', '节目'], notes: ['同比 +6%', '调整后利润率 51%', '同比 (3 个百分点)'] },
          television: { label: '电视', notes: ['同比 (19%)', '调整后利润率 9%', '同比 +6 个百分点'] },
          corporate_other: { label: '企业及其他', notes: ['同比 +162%', '调整后利润率 (80%)', '同比 +62 个百分点'] },
          gross_revenue: { label: '总收入' },
          revenue: { label: '收入', notes: ['同比 (9%)'] },
          eliminations: { label: '抵销' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +1 个百分点'] },
          operating_expenses: { label: ['成本与', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 (3 个百分点)'] },
          other_op: { label: '其他' },
          tax: { label: '税费' },
          operating: { label: '经营' },
          sga: { label: '销售及管理费用' },
          da: { label: '折旧摊销' },
          other_cost: { label: '其他' },
        },
        layout: {
          labels: {
            cable_network_programming: {
              blocks: [
                {
                  x: 518, top: 267, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +6%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 470, top: 415, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '有线网络', size: 40, weight: 800 },
                    { text: '节目', size: 40, weight: 800 },
                  ],
                },
                {
                  x: 470, top: 502, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '调整后利润率 51%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            television: {
              blocks: [
                {
                  x: 518, top: 608, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 (19%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 480, top: 779, anchor: 'end',
                  lines: [{ text: '电视', size: 40, weight: 800 }],
                },
                {
                  x: 480, top: 829, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '调整后利润率 9%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            corporate_other: {
              blocks: [
                {
                  x: 518, top: 989, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +162%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 470, top: 1074, anchor: 'end',
                  lines: [{ text: '企业及其他', size: 40, weight: 800 }],
                },
                {
                  x: 470, top: 1123, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '调整后利润率 (80%)', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +62 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1452, top: 415, anchor: 'middle', lineGap: 16,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 (9%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            eliminations: {
              blocks: [
                {
                  x: 1452, top: 1158, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '抵销', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1916, top: 281, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 11%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1916, top: 1144, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '成本与', size: 40, weight: 800, color: RED_LABEL },
                    { text: '费用', size: 40, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 40, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 301, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 2%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_op: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 513, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 633, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            operating: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 894, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '经营', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1118, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售及管理费用', size: 32, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            da: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1220, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '折旧摊销', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            other_cost: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1304, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
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
