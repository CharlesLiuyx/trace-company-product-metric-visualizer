/* ====================================================================
 * PepsiCo - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/pepsico-q1-fy26.png as a fixed
 * d3-sankey layout measured against the source infographic.
 *
 * Structure mirrored from the source:
 * - Foods ($6.3B) + PepsiCo Beverages ($6.4B) feed the North America
 *   aggregate ($12.7B); North America and the four direct regions
 *   (IB franchise, LATAM, EMEA, APAC) all feed the Revenue hub.
 * - Revenue splits into Gross profit / Cost of revenue; Gross profit into
 *   Operating profit / Operating expenses SG&A; Operating profit is a
 *   waterfall into Net profit + Tax + Interest & other.
 * - Brand marks (Lay's/Quaker, Pepsi, SodaStream), region globes, the
 *   Revenue globe, and the PEPSICO wordmark are approved runtime raster
 *   annotations extracted via input/icon-crop-specs/pepsico-q1-fy26.json.
 * - Published rounding: the six revenue inputs sum to $19.3B vs the $19.4B
 *   hub; North America's band absorbs the shortfall so the hub's left edge
 *   fills with no gap (see links below).
 * ==================================================================== */
(function () {
  const NAVY = '#2a4790';
  const NAVY_LINK = '#98a5c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2514;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'pepsico-q1-fy26',
    name: 'PepsiCo · Q1 FY26',
    company: 'PepsiCo',
    meta: {
      company: 'PepsiCo',
      title: 'PepsiCo Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 207,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2201,
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
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: NAVY_LINK,
        hub: NAVY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },

    rasterAnnotations: [
      { key: 'pepsico-company-logo', href: 'data/assets/raster-annotations/pepsico/company-logo.png', x: 1000, y: 267, width: 475, height: 76 },
      { key: 'pepsico-foods-lays-quaker', href: 'data/assets/raster-annotations/pepsico/foods-lays-quaker.png', x: 27, y: 426, width: 244, height: 117 },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 51, y: 703, width: 136, height: 137 },
      { key: 'pepsico-ib-sodastream', href: 'data/assets/raster-annotations/pepsico/ib-sodastream.png', x: 486, y: 859, width: 106, height: 168 },
      { key: 'pepsico-revenue-globe', href: 'data/assets/raster-annotations/pepsico/revenue-globe.png', x: 1176, y: 356, width: 116, height: 117 },
      { key: 'pepsico-globe-north-america', href: 'data/assets/raster-annotations/pepsico/globe-north-america.png', x: 806, y: 302, width: 98, height: 98 },
      { key: 'pepsico-globe-latam', href: 'data/assets/raster-annotations/pepsico/globe-latam.png', x: 556, y: 1030, width: 92, height: 92 },
      { key: 'pepsico-globe-emea', href: 'data/assets/raster-annotations/pepsico/globe-emea.png', x: 481, y: 1174, width: 191, height: 99 },
      { key: 'pepsico-globe-apac', href: 'data/assets/raster-annotations/pepsico/globe-apac.png', x: 572, y: 1318, width: 91, height: 91 },
    ],

    layout: {
      scale: 15.5,
      nodes: {
        foods: { x: 456, y: 446, width: 71, height: 97 },
        pepsico_beverages: { x: 456, y: 728, width: 71, height: 98 },
        north_america: { x: 830, y: 557, width: 72, height: 197 },
        ib_franchise: { x: 830, y: 915, width: 72, height: 12 },
        latam: { x: 830, y: 1059, width: 72, height: 29 },
        emea: { x: 830, y: 1205, width: 72, height: 43 },
        apac: { x: 830, y: 1360, width: 72, height: 17 },
        revenue: { x: 1204, y: 646, width: 71, height: 301 },
        gross_profit: { x: 1578, y: 537, width: 71, height: 166 },
        cost_of_revenue: { x: 1577, y: 905, width: 72, height: 135 },
        operating_profit: { x: 1952, y: 431, width: 71, height: 50 },
        operating_expenses: { x: 1951, y: 702, width: 72, height: 116 },
        net_profit: { x: 2325, y: 334, width: 72, height: 34 },
        tax: { x: 2324, y: 631, width: 72, height: 9 },
        interest_other: { x: 2324, y: 776, width: 72, height: 6 },
      },
      labels: {
        foods: {
          blocks: [
            { x: 491, top: 347, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 365, top: 468, anchor: 'middle',
              lines: [{ text: 'Foods', size: 40, weight: 800 }] },
          ],
        },
        pepsico_beverages: {
          blocks: [
            { x: 491, top: 629, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 316, top: 731, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'PepsiCo', size: 40, weight: 800 },
                { text: 'Beverages', size: 40, weight: 800 },
              ] },
          ],
        },
        north_america: {
          blocks: [
            { x: 866, top: 404, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'North America', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        ib_franchise: {
          blocks: [
            { x: 865, top: 816, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 693, top: 894, anchor: 'middle',
              lines: [{ text: 'IB franchise', size: 40, weight: 800 }] },
          ],
        },
        latam: {
          blocks: [
            { x: 865, top: 959, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 732, top: 1047, anchor: 'middle',
              lines: [{ text: 'LATAM', size: 40, weight: 800 }] },
          ],
        },
        emea: {
          blocks: [
            { x: 865, top: 1106, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 735, top: 1199, anchor: 'middle',
              lines: [{ text: 'EMEA', size: 40, weight: 800 }] },
          ],
        },
        apac: {
          blocks: [
            { x: 864, top: 1260, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
            { x: 733, top: 1341, anchor: 'middle',
              lines: [{ text: 'APAC', size: 40, weight: 800 }] },
          ],
        },

        revenue: {
          blocks: [
            { x: 1240, top: 495, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        gross_profit: {
          blocks: [
            { x: 1613, top: 344, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '55% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        cost_of_revenue: {
          blocks: [
            { x: 1613, top: 1054, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Cost of', size: 40, weight: 800, color: RED_LABEL },
                { text: 'revenue', size: 40, weight: 800, color: RED_LABEL },
                { text: '$value', size: 40, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        operating_profit: {
          blocks: [
            { x: 1987, top: 244, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '17% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        operating_expenses: {
          blocks: [
            { x: 1987, top: 833, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
                { text: 'SG&A', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 36, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        net_profit: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 293, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '11% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ] },
          ],
        },
        tax: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 595, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
        interest_other: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 720, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 34, weight: 800, color: RED_LABEL },
                { text: '& other', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ] },
          ],
        },
      },
    },

    nodes: [
      { id: 'foods', col: 0, order: 0, type: 'source', label: 'Foods', value: 6.3, notes: ['+2% Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 1, type: 'source', label: ['PepsiCo', 'Beverages'], value: 6.4, notes: ['+9% Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 12.7, notes: ['+5% Y/Y'] },
      { id: 'ib_franchise', col: 1, order: 1, type: 'source', label: 'IB franchise', value: 0.8, notes: ['+9% Y/Y'] },
      { id: 'latam', col: 1, order: 2, type: 'source', label: 'LATAM', value: 1.9, notes: ['+16% Y/Y'] },
      { id: 'emea', col: 1, order: 3, type: 'source', label: 'EMEA', value: 2.8, notes: ['+18% Y/Y'] },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.1, notes: ['+11% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 19.4, notes: ['+9% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 10.7, notes: ['55% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 8.7 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.2, notes: ['17% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses SG&A', value: 7.5 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.2, notes: ['11% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.6 },
      { id: 'interest_other', col: 5, order: 2, type: 'cost', label: ['Interest', '& other'], value: 0.4 },
    ],

    links: [
      /* Foods + PepsiCo Beverages fill North America (97 + 98 -> 197). */
      { source: 'foods', target: 'north_america', value: 6.3, width: 98, sourceOrder: 0, targetOrder: 0 },
      { source: 'pepsico_beverages', target: 'north_america', value: 6.4, width: 99, sourceOrder: 0, targetOrder: 1 },

      /* Revenue's six inputs sum to $19.3B vs the $19.4B hub; North
       * America's band absorbs the 3px shortfall (197 -> 200) so the hub's
       * left edge fills with no gap. */
      { source: 'north_america', target: 'revenue', value: 12.7, width: 200, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'ib_franchise', target: 'revenue', value: 0.8, width: 12, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'latam', target: 'revenue', value: 1.9, width: 29, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'emea', target: 'revenue', value: 2.8, width: 43, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'apac', target: 'revenue', value: 1.1, width: 17, sourceOrder: 0, targetOrder: 4, linkTint: NAVY_LINK },

      { source: 'revenue', target: 'gross_profit', value: 10.7, width: 166, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 8.7, width: 135, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 3.2, width: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.5, width: 116, sourceOrder: 1, targetOrder: 0 },

      /* Operating profit waterfall: Net profit (top) + Tax + Interest & other. */
      { source: 'operating_profit', target: 'net_profit', value: 2.2, width: 34, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.6, width: 9, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest_other', value: 0.4, width: 7, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'PepsiCo · 2026 财年第一季度',
        meta: {
          title: '百事公司 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 2000,
        },
        nodes: {
          foods: { label: '食品', notes: ['同比 +2%'] },
          pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 +9%'] },
          north_america: { label: '北美', notes: ['同比 +5%'] },
          ib_franchise: { label: '国际饮料特许经营', notes: ['同比 +9%'] },
          latam: { label: '拉丁美洲', notes: ['同比 +16%'] },
          emea: { label: '欧洲中东非洲', notes: ['同比 +18%'] },
          apac: { label: '亚太', notes: ['同比 +11%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用 SG&A' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          interest_other: { label: ['利息', '及其他'] },
        },
        layout: {
          labels: {
            foods: {
              blocks: [
                { x: 491, top: 347, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +2%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 365, top: 468, anchor: 'middle',
                  lines: [{ text: '食品', size: 40, weight: 800 }] },
              ],
            },
            pepsico_beverages: {
              blocks: [
                { x: 491, top: 629, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 316, top: 731, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '百事', size: 40, weight: 800 },
                    { text: '饮料', size: 40, weight: 800 },
                  ] },
              ],
            },
            north_america: {
              blocks: [
                { x: 866, top: 404, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '北美', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +5%', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            ib_franchise: {
              blocks: [
                { x: 865, top: 816, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 699, top: 883, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '国际饮料', size: 34, weight: 800 },
                    { text: '特许经营', size: 34, weight: 800 },
                  ] },
              ],
            },
            latam: {
              blocks: [
                { x: 865, top: 959, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +16%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 732, top: 1047, anchor: 'middle',
                  lines: [{ text: '拉丁美洲', size: 36, weight: 800 }] },
              ],
            },
            emea: {
              blocks: [
                { x: 865, top: 1106, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +18%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 730, top: 1188, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '欧洲中东', size: 32, weight: 800 },
                    { text: '非洲', size: 32, weight: 800 },
                  ] },
              ],
            },
            apac: {
              blocks: [
                { x: 864, top: 1260, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +11%', size: 29, weight: 400, color: NOTE },
                  ] },
                { x: 733, top: 1341, anchor: 'middle',
                  lines: [{ text: '亚太', size: 40, weight: 800 }] },
              ],
            },

            revenue: {
              blocks: [
                { x: 1240, top: 495, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            gross_profit: {
              blocks: [
                { x: 1613, top: 344, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 55%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            cost_of_revenue: {
              blocks: [
                { x: 1613, top: 1054, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '收入', size: 40, weight: 800, color: RED_LABEL },
                    { text: '成本', size: 40, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 40, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            operating_profit: {
              blocks: [
                { x: 1987, top: 244, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 17%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            operating_expenses: {
              blocks: [
                { x: 1987, top: 833, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '运营费用', size: 36, weight: 800, color: RED_LABEL },
                    { text: 'SG&A', size: 36, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 36, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            net_profit: {
              blocks: [
                { x: RIGHT_LABEL_X, top: 293, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 11%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ] },
              ],
            },
            tax: {
              blocks: [
                { x: RIGHT_LABEL_X, top: 595, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
            interest_other: {
              blocks: [
                { x: RIGHT_LABEL_X, top: 720, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 34, weight: 800, color: RED_LABEL },
                    { text: '及其他', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ] },
              ],
            },
          },
        },
      },
    },
  });
})();
