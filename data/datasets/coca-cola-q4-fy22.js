/* ====================================================================
 * The Coca-Cola Company - Q4 FY22 income statement ($B)
 * Reconstructed from input/processed/coca-cola-q4-fy25.png as a fixed
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
    key: 'coca-cola-q4-fy22',
    name: 'Coca-Cola · Q4 FY22',
    company: 'Coca-Cola',
    meta: {
      company: 'Coca-Cola',
      title: 'Coca-Cola Q4 FY22 Income Statement',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 3,
      referenceImage: { src: 'input/processed/coca-cola-q4-fy22.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 210,
      titleSize: 150,
      titleWeight: 800,
      titleTextLength: 2326,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
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
      { key: 'globe-emea', href: 'data/assets/raster-annotations/coca-cola/globe-emea.png', x: 198, y: 290, width: 96, height: 92 },
      { key: 'globe-latam', href: 'data/assets/raster-annotations/coca-cola/globe-latam.png', x: 196, y: 465, width: 98, height: 92 },
      { key: 'globe-ucan', href: 'data/assets/raster-annotations/coca-cola/globe-ucan.png', x: 204, y: 661, width: 96, height: 98 },
      { key: 'globe-apac', href: 'data/assets/raster-annotations/coca-cola/globe-apac.png', x: 212, y: 869, width: 92, height: 90 },
    ],

    layout: {
      scale: 33.3,
      nodes: {
        emea: { x: 449, y: 312, width: 72, height: 49 },
        latam: { x: 449, y: 490, width: 72, height: 41 },
        ucan: { x: 449, y: 646, width: 72, height: 128 },
        apac: { x: 449, y: 898, width: 72, height: 32 },
        global_ventures: { x: 449, y: 1048, width: 72, height: 22 },
        bottling_investments: { x: 449, y: 1185, width: 72, height: 64 },
        other_revenue: { x: 449, y: 1366, width: 72, height: 2 },
        gross_revenue: { x: 823, y: 621, width: 72, height: 349 },
        revenue: { x: 1197, y: 676, width: 72, height: 338 },
        eliminations: { x: 1197, y: 1138, width: 72, height: 9 },
        gross_profit: { x: 1568, y: 589, width: 72, height: 186 },
        cost_of_revenue: { x: 1568, y: 944, width: 72, height: 150 },
        operating_profit: { x: 1940, y: 460, width: 72, height: 67 },
        operating_expenses: { x: 1939, y: 805, width: 72, height: 116 },
        net_profit: { x: 2317, y: 339, width: 72, height: 67 },
        other_income: { x: 2187, y: 465, width: 72, height: 17 },
        tax: { x: 2317, y: 668, width: 72, height: 13 },
        interest: { x: 2317, y: 768, width: 72, height: 3 },
        sga: { x: 2317, y: 913, width: 72, height: 114 },
        other_opex: { x: 2317, y: 1184, width: 72, height: 1 },
      },
      labels: {
        gross_revenue: { blocks: [] },

        emea: {
          blocks: [
            { x: 477.5, top: 218, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(7%) Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 416.5, top: 314, anchor: 'end',
              lines: [{ text: 'EMEA', size: 36, weight: 700 }] },
          ],
        },
        latam: {
          blocks: [
            { x: 473, top: 396, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+25% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 412, top: 488, anchor: 'end',
              lines: [{ text: 'LATAM', size: 36, weight: 700 }] },
          ],
        },
        ucan: {
          blocks: [
            { x: 475, top: 552, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 414, top: 687.5, anchor: 'end',
              lines: [{ text: 'UCAN', size: 36, weight: 700 }] },
          ],
        },
        apac: {
          blocks: [
            { x: 485, top: 804, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+3% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 424, top: 891.5, anchor: 'end',
              lines: [{ text: 'APAC', size: 36, weight: 700 }] },
          ],
        },
        global_ventures: {
          blocks: [
            { x: 466.5, top: 954, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(5%) Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 405.5, top: 1036.5, anchor: 'end',
              lines: [{ text: 'Global ventures', size: 36, weight: 700 }] },
          ],
        },
        bottling_investments: {
          blocks: [
            { x: 470, top: 1091, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 409, top: 1194.5, anchor: 'end',
              lines: [{ text: 'Bottling investments', size: 36, weight: 700 }] },
          ],
        },
        other_revenue: {
          blocks: [
            { x: 485, top: 1310, anchor: 'middle',
              lines: [{ text: '$value', size: 40, weight: 400 }] },
            { x: 415, top: 1317, anchor: 'end',
              lines: [{ text: 'Other', size: 36, weight: 700 }] },
          ],
        },

        revenue: {
          blocks: [
            { x: 1233, top: 522, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 40, weight: 700 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        eliminations: {
          blocks: [
            { x: 1233, top: 1170, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Eliminations', size: 34, weight: 700, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        gross_profit: {
          blocks: [
            { x: 1594, top: 403, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Gross profit', size: 40, weight: 700, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '55% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        cost_of_revenue: {
          blocks: [
            { x: 1604, top: 1104.5, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Cost of', size: 40, weight: 700, color: RED_LABEL },
                { text: 'revenue', size: 40, weight: 700, color: RED_LABEL },
                { text: '$value', size: 40, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        operating_profit: {
          blocks: [
            { x: 1953, top: 274, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating profit', size: 40, weight: 700, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '20% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        operating_expenses: {
          blocks: [
            { x: 1975, top: 933.5, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating', size: 40, weight: 700, color: RED_LABEL },
                { text: 'expenses', size: 40, weight: 700, color: RED_LABEL },
                { text: '$value', size: 40, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        net_profit: {
          blocks: [
            { x: 2506.5, top: 345, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Net profit', size: 40, weight: 700, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '20% margin', size: 29, weight: 400, color: NOTE },
                { text: '(6pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        other_income: {
          blocks: [
            { x: 2223, top: 494.5, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 700, color: GREEN_LABEL },
                { text: '$value', size: 34, weight: 400, color: GREEN_LABEL },
              ] },
          ],
        },
        tax: {
          blocks: [
            { x: 2508, top: 627.5, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 34, weight: 700, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        interest: {
          blocks: [
            { x: 2508.5, top: 724.5, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 34, weight: 700, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        sga: {
          blocks: [
            { x: 2524.5, top: 925, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 34, weight: 700, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                { text: '34% of revenue', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        other_opex: {
          blocks: [
            { x: 2526, top: 1147.5, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 700, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                { text: '1% of revenue', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
      },
    },

    nodes: [
      { id: 'emea', col: 0, order: 0, type: 'source', label: 'EMEA', value: 1.5, valueText: '$1.5B', notes: ['(7%) Y/Y'] },
      { id: 'latam', col: 0, order: 1, type: 'source', label: 'LATAM', value: 1.3, valueText: '$1.3B', notes: ['+25% Y/Y'] },
      { id: 'ucan', col: 0, order: 2, type: 'source', label: 'UCAN', value: 3.9, valueText: '$3.9B', notes: ['+14% Y/Y'] },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.0, valueText: '$1.0B', notes: ['+3% Y/Y'] },
      { id: 'global_ventures', col: 0, order: 4, type: 'source', label: 'Global ventures', value: 0.8, valueText: '$0.8B', notes: ['(5%) Y/Y'] },
      { id: 'bottling_investments', col: 0, order: 5, type: 'source', label: 'Bottling investments', value: 2.0, valueText: '$2.0B', notes: ['+4% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 0.017, valueText: '$17M', color: BLACK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: '', value: 10.517 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 10.1, valueText: '$10.1B', notes: ['+7% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.3, valueText: '($0.3B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.6, valueText: '$5.6B', notes: ['55% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.5, valueText: '($4.5B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.1, valueText: '$2.1B', notes: ['20% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.5, valueText: '($3.5B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.1, valueText: '$2.1B', notes: ['20% margin', '(6pp) Y/Y'] },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.6, valueText: '$0.6B' },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.4, valueText: '($0.4B)' },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.2, valueText: '($0.2B)' },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 3.4, valueText: '($3.4B)', notes: ['34% of revenue'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue'] },
    ],

    links: [
      { source: 'emea', target: 'gross_revenue', value: 1.5, width: 49, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'gross_revenue', value: 1.3, width: 41, sourceOrder: 0, targetOrder: 1 },
      { source: 'ucan', target: 'gross_revenue', value: 3.9, width: 128, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'gross_revenue', value: 1.0, width: 32, sourceOrder: 0, targetOrder: 3 },
      { source: 'global_ventures', target: 'gross_revenue', value: 0.8, width: 22, sourceOrder: 0, targetOrder: 4 },
      { source: 'bottling_investments', target: 'gross_revenue', value: 2.0, width: 64, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'gross_revenue', value: 0.017, sourceWidth: 2, targetWidth: 13, sourceOrder: 0, targetOrder: 6 },

      { source: 'gross_revenue', target: 'revenue', value: 10.1, width: 338, sourceWidth: 340, targetWidth: 338, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 0.3, width: 9, sourceWidth: 9, targetWidth: 9, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'revenue', target: 'gross_profit', value: 5.6, width: 186,
        sourceOrder: 0, targetOrder: 0,
        linkTint: { left: GREEN_LINK, right: GREEN_LINK },
      },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.5, width: 152, targetWidth: 150, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 2.1, width: 67, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.5, width: 119, targetWidth: 116, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 1.5, width: 51, targetWidth: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, width: 13, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, width: 3, sourceOrder: 2, targetOrder: 0 },

      { source: 'other_income', target: 'net_profit', value: 0.6, width: 17, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sga', value: 3.4, width: 114, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, width: 2, targetWidth: 1, y1: 1184.5, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Coca-Cola · 2022 财年第四季度',
        meta: {
          title: '可口可乐 2022 财年第四季度利润表',
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          titleTextLength: 2100,
        },
        nodes: {
          emea: { label: 'EMEA', notes: ['同比 (7%)'] },
          latam: { label: 'LATAM', notes: ['同比 +25%'] },
          ucan: { label: 'UCAN', notes: ['同比 +14%'] },
          apac: { label: 'APAC', notes: ['同比 +3%'] },
          global_ventures: { label: '全球新兴业务', notes: ['同比 (5%)'] },
          bottling_investments: { label: '装瓶投资业务', notes: ['同比 +4%'] },
          other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 20%', '同比 (6 个百分点)'] },
          other_income: { label: '其他' },
          tax: { label: '税费' },
          interest: { label: '利息' },
          sga: { label: '销售及管理费用', notes: ['占收入 34%'] },
          other_opex: { label: '其他', notes: ['占收入 1%'] },
        },
        layout: {
          labels: {
            gross_revenue: { blocks: [] },

            emea: {
              blocks: [
                { x: 477.5, top: 218, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 (7%)', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 416.5, top: 302.5, anchor: 'end', lineGap: 6,
                  lines: [
                    { text: '欧洲、中东', size: 28, weight: 700 },
                    { text: '和非洲', size: 28, weight: 700 },
                  ] },
              ],
            },
            latam: {
              blocks: [
                { x: 473, top: 396, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +25%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 412, top: 488, anchor: 'end',
                  lines: [{ text: '拉美', size: 36, weight: 700 }] },
              ],
            },
            ucan: {
              blocks: [
                { x: 475, top: 552, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 414, top: 671.5, anchor: 'end', lineGap: 6,
                  lines: [
                    { text: '美国和', size: 32, weight: 700 },
                    { text: '加拿大', size: 32, weight: 700 },
                  ] },
              ],
            },
            apac: {
              blocks: [
                { x: 485, top: 804, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +3%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 424, top: 891.5, anchor: 'end',
                  lines: [{ text: '亚太', size: 36, weight: 700 }] },
              ],
            },
            global_ventures: {
              blocks: [
                { x: 466.5, top: 954, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 (5%)', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 405.5, top: 1022.5, anchor: 'end', lineGap: 6,
                  lines: [
                    { text: '全球新兴', size: 30, weight: 700 },
                    { text: '业务', size: 30, weight: 700 },
                  ] },
              ],
            },
            bottling_investments: {
              blocks: [
                { x: 470, top: 1091, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +4%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 409, top: 1194.5, anchor: 'end',
                  lines: [{ text: '装瓶投资业务', size: 36, weight: 700 }] },
              ],
            },
            other_revenue: {
              blocks: [
                { x: 485, top: 1310, anchor: 'middle',
                  lines: [{ text: '$value', size: 40, weight: 400 }] },
                { x: 415, top: 1317, anchor: 'end',
                  lines: [{ text: '其他', size: 36, weight: 700 }] },
              ],
            },

            revenue: {
              blocks: [
                { x: 1233, top: 522, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '收入', size: 40, weight: 700 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +7%', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            eliminations: {
              blocks: [
                { x: 1233, top: 1170, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '抵销', size: 34, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            gross_profit: {
              blocks: [
                { x: 1594, top: 403, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '毛利润', size: 40, weight: 700, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 55%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            cost_of_revenue: {
              blocks: [
                { x: 1604, top: 1104.5, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '收入', size: 40, weight: 700, color: RED_LABEL },
                    { text: '成本', size: 40, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 40, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            operating_profit: {
              blocks: [
                { x: 1953, top: 274, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '营业利润', size: 40, weight: 700, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 20%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            operating_expenses: {
              blocks: [
                { x: 1975, top: 933.5, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '营业', size: 40, weight: 700, color: RED_LABEL },
                    { text: '费用', size: 40, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 40, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            net_profit: {
              blocks: [
                { x: 2506.5, top: 345, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '净利润', size: 40, weight: 700, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 20%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (6 个百分点)', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            other_income: {
              blocks: [
                { x: 2223, top: 494.5, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 34, weight: 700, color: GREEN_LABEL },
                    { text: '$value', size: 34, weight: 400, color: GREEN_LABEL },
                  ] },
              ],
            },
            tax: {
              blocks: [
                { x: 2508, top: 627.5, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 34, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            interest: {
              blocks: [
                { x: 2508.5, top: 724.5, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 34, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            sga: {
              blocks: [
                { x: 2524.5, top: 925, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售及管理费用', size: 34, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                    { text: '占收入 34%', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            other_opex: {
              blocks: [
                { x: 2526, top: 1147.5, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 34, weight: 700, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                    { text: '占收入 1%', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
          },
        },
      },
    },
  });
})();
