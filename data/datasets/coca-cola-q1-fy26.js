/* ====================================================================
 * The Coca-Cola Company - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/coca-cola-q1-fy26.png as a fixed
 * d3-sankey layout measured against the source infographic.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const BLACK_LABEL = '#111111';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#707070';
  const RIGHT_LABEL_X = 2518;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coca-cola-q1-fy26',
    name: 'Coca-Cola · Q1 FY26',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola',
      title: 'Coca-Cola Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coca-cola-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 210,
      titleSize: 150,
      titleWeight: 800,
      titleTextLength: 2326,
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
        source: { node: BLACK, label: BLACK_LABEL },
        hub: { node: BLACK, label: BLACK_LABEL },
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },

    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/coca-cola/company-wordmark.png', x: 736, y: 247, width: 594, height: 200 },
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 368, width: 96, height: 92 },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 556, width: 98, height: 92 },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 770, width: 96, height: 98 },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 975, width: 92, height: 90 },
    ],

    layout: {
      scale: 23.5,
      nodes: {
        emea: { x: 450, y: 378, width: 72, height: 71 },
        latam: { x: 450, y: 587, width: 72, height: 40 },
        ucan: { x: 450, y: 765, width: 72, height: 116 },
        apac: { x: 450, y: 1006, width: 72, height: 35 },
        bottling_investments: { x: 450, y: 1161, width: 72, height: 38 },
        other_revenue: { x: 450, y: 1299, width: 72, height: 2 },
        gross_revenue: { x: 824, y: 624, width: 72, height: 301 },
        revenue: { x: 1197, y: 719, width: 72, height: 294 },
        eliminations: { x: 1197, y: 1136, width: 72, height: 7 },
        gross_profit: { x: 1571, y: 623, width: 72, height: 186 },
        cost_of_revenue: { x: 1571, y: 999, width: 72, height: 108 },
        operating_profit: { x: 1945, y: 535, width: 72, height: 103 },
        operating_expenses: { x: 1945, y: 824, width: 72, height: 83 },
        net_profit: { x: 2318, y: 403, width: 72, height: 93 },
        other_income: { x: 2213, y: 545, width: 72, height: 9 },
        tax: { x: 2318, y: 706, width: 72, height: 14 },
        interest: { x: 2318, y: 807, width: 72, height: 5 },
        sga: { x: 2318, y: 998, width: 72, height: 82 },
        other_opex: { x: 2318, y: 1300, width: 72, height: 2 },
      },
      labels: {
        gross_revenue: { blocks: [] },

        emea: {
          blocks: [
            { x: 486, top: 279, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 424, top: 388, anchor: 'end',
              lines: [{ text: 'EMEA', size: 36, weight: 700 }] },
          ],
        },
        latam: {
          blocks: [
            { x: 486, top: 487, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 424, top: 581, anchor: 'end',
              lines: [{ text: 'LATAM', size: 36, weight: 700 }] },
          ],
        },
        ucan: {
          blocks: [
            { x: 486, top: 664, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 424, top: 797, anchor: 'end',
              lines: [{ text: 'UCAN', size: 36, weight: 700 }] },
          ],
        },
        apac: {
          blocks: [
            { x: 486, top: 907, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 424, top: 998, anchor: 'end',
              lines: [{ text: 'APAC', size: 36, weight: 700 }] },
          ],
        },
        bottling_investments: {
          blocks: [
            { x: 486, top: 1061, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 424, top: 1154, anchor: 'end',
              lines: [{ text: 'Bottling investments', size: 36, weight: 700 }] },
          ],
        },
        other_revenue: {
          blocks: [
            { x: 486, top: 1239, anchor: 'middle',
              lines: [{ text: '$value', size: 40, weight: 400 }] },
            { x: 424, top: 1272, anchor: 'end',
              lines: [{ text: 'Other', size: 36, weight: 700 }] },
          ],
        },

        revenue: {
          blocks: [
            { x: 1233, top: 567, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 40, weight: 700 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        eliminations: {
          blocks: [
            { x: 1233, top: 1157, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Eliminations', size: 34, weight: 700, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        gross_profit: {
          blocks: [
            { x: 1607, top: 431, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Gross profit', size: 40, weight: 700, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '63% margin', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        cost_of_revenue: {
          blocks: [
            { x: 1607, top: 1121, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Cost of', size: 40, weight: 700, color: RED_LABEL },
                { text: 'revenue', size: 40, weight: 700, color: RED_LABEL },
                { text: '$value', size: 40, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        operating_profit: {
          blocks: [
            { x: 1981, top: 342, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating profit', size: 40, weight: 700, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '35% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        operating_expenses: {
          blocks: [
            { x: 1981, top: 923, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating', size: 40, weight: 700, color: RED_LABEL },
                { text: 'expenses', size: 40, weight: 700, color: RED_LABEL },
                { text: '$value', size: 40, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        net_profit: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 382, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Net profit', size: 40, weight: 700, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '32% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        other_income: {
          blocks: [
            { x: 2249, top: 560, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 700, color: GREEN_LABEL },
                { text: '$value', size: 34, weight: 400, color: GREEN_LABEL },
              ] },
          ],
        },
        tax: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 671, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 34, weight: 700, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        interest: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 768, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 34, weight: 700, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        sga: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 979, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 34, weight: 700, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                { text: '28% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        other_opex: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 1219, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 700, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                { text: '0% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0 pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
      },
    },

    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 3.0, valueText: '$3.0B', notes: ['+13% Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.7, notes: ['+14% Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 4.9, notes: ['+12% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.5, notes: ['+6% Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 4, type: 'source', label: 'Bottling investments', value: 1.6, notes: ['+12% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 5, type: 'source', label: 'Other', value: 0.034, valueText: '$34M', color: '#f2f2f2' },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 12.8 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 12.5, notes: ['+12% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 0.3 },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.9, notes: ['63% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.6 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.4, notes: ['35% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.5 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 4.0, valueText: '$4.0B', notes: ['32% margin', '+2pp Y/Y'] },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.4 },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.6 },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.2 },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.5, notes: ['28% of revenue', '(1pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.021, valueText: '($21M)', notes: ['0% of revenue', '(0 pp) Y/Y'], color: '#f2f2f2' },
    ],

    links: [
      { source: 'emea', target: 'gross_revenue', value: 3.0, width: 71, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.7, width: 40, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 4.9, width: 116, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.5, width: 35, sourceOrder: 0, targetOrder: 3 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 1.6, width: 38, sourceOrder: 0, targetOrder: 4 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.034, width: 1, sourceOrder: 0, targetOrder: 5 },

      { source: 'gross_revenue', target: 'revenue', value: 12.5, width: 294, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.3, width: 7, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'revenue', target: 'gross_profit', value: 7.9, width: 186,
        sourceOrder: 0, targetOrder: 0,
        linkTint: { left: GREEN_LINK, right: GREEN_LINK },
      },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.6, width: 108, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 4.4, width: 103, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.5, width: 83, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 3.6, width: 84, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.6, width: 14, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, width: 5, sourceOrder: 2, targetOrder: 0 },

      { source: 'other_income', target: 'net_profit', value: 0.4, width: 9, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sga', value: 3.5, width: 82, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.021, width: 1, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Coca-Cola · 2026 财年第一季度',
        meta: {
          title: '可口可乐 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 2100,
        },
        nodes: {
          emea: { label: 'EMEA', notes: ['同比 +13%'] },
          latam: { label: 'LATAM', notes: ['同比 +14%'] },
          ucan: { label: 'UCAN', notes: ['同比 +12%'] },
          apac: { label: 'APAC', notes: ['同比 +6%'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 +12%'] },
          other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 63%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 35%', '同比 +2 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 32%', '同比 +2 个百分点'] },
          other_income: { label: '其他' },
          tax: { label: '税费' },
          interest: { label: '利息' },
          sga: { label: '销售及管理费用', notes: ['占收入 28%', '同比 (1 个百分点)'] },
          other_opex: { label: '其他', notes: ['占收入 0%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: {
            gross_revenue: { blocks: [] },

            emea: {
              blocks: [
                { x: 486, top: 279, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +13%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 424, top: 383, anchor: 'end', lineGap: 6,
                  lines: [
                    { text: '欧洲、中东', size: 28, weight: 700 },
                    { text: '和非洲', size: 28, weight: 700 },
                  ] },
              ],
            },
            latam: {
              blocks: [
                { x: 486, top: 487, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 424, top: 581, anchor: 'end',
                  lines: [{ text: '拉美', size: 36, weight: 700 }] },
              ],
            },
            ucan: {
              blocks: [
                { x: 486, top: 664, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +12%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 424, top: 790, anchor: 'end', lineGap: 6,
                  lines: [
                    { text: '美国和', size: 32, weight: 700 },
                    { text: '加拿大', size: 32, weight: 700 },
                  ] },
              ],
            },
            apac: {
              blocks: [
                { x: 486, top: 907, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +6%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 424, top: 998, anchor: 'end',
                  lines: [{ text: '亚太', size: 36, weight: 700 }] },
              ],
            },
            bottling_investments: {
              blocks: [
                { x: 486, top: 1061, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +12%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 424, top: 1154, anchor: 'end',
                  lines: [{ text: '装瓶投资业务', size: 36, weight: 700 }] },
              ],
            },
            other_revenue: {
              blocks: [
                { x: 486, top: 1239, anchor: 'middle',
                  lines: [{ text: '$value', size: 40, weight: 400 }] },
                { x: 424, top: 1272, anchor: 'end',
                  lines: [{ text: '其他', size: 36, weight: 700 }] },
              ],
            },

            revenue: {
              blocks: [
                { x: 1233, top: 567, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '收入', size: 40, weight: 700 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +12%', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            eliminations: {
              blocks: [
                { x: 1233, top: 1157, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '抵销', size: 34, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            gross_profit: {
              blocks: [
                { x: 1607, top: 431, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '毛利润', size: 40, weight: 700, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 63%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            cost_of_revenue: {
              blocks: [
                { x: 1607, top: 1121, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '收入', size: 40, weight: 700, color: RED_LABEL },
                    { text: '成本', size: 40, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 40, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            operating_profit: {
              blocks: [
                { x: 1981, top: 342, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '营业利润', size: 40, weight: 700, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 35%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            operating_expenses: {
              blocks: [
                { x: 1981, top: 923, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '营业', size: 40, weight: 700, color: RED_LABEL },
                    { text: '费用', size: 40, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 40, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            net_profit: {
              blocks: [
                { x: RIGHT_LABEL_X, top: 382, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '净利润', size: 40, weight: 700, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 32%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            other_income: {
              blocks: [
                { x: 2249, top: 560, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 34, weight: 700, color: GREEN_LABEL },
                    { text: '$value', size: 34, weight: 400, color: GREEN_LABEL },
                  ] },
              ],
            },
            tax: {
              blocks: [
                { x: RIGHT_LABEL_X, top: 671, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 34, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            interest: {
              blocks: [
                { x: RIGHT_LABEL_X, top: 768, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 34, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            sga: {
              blocks: [
                { x: RIGHT_LABEL_X, top: 979, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售及管理费用', size: 34, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                    { text: '占收入 28%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            other_opex: {
              blocks: [
                { x: RIGHT_LABEL_X, top: 1219, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 34, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                    { text: '占收入 0%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
          },
        },
      },
    },
  });
})();
