/* ====================================================================
 * UnitedHealth Group - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/unitedhealth-q1-fy26.png as a fixed
 * d3-sankey layout. Four revenue lines (Premiums, Products, Services,
 * Investments & Other) fan into a single Revenue hub, which splits into
 * the operating-profit / operating-expense waterfall. Operating profit
 * flows to net profit with Tax and Other deducted; operating expenses
 * split into Medical costs, Operational costs, Cost of product sold and
 * D&A. The source chart shows no separate gross-profit / cost-of-revenue
 * layer, so those SSOT-parity nodes are parked off-canvas.
 * Two segment stat cards (UnitedHealthcare, Optum) sit bottom-left.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NAVY = '#1e3d6a';
  const NAVY_LINK = '#93a0b4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const CARD_NAVY = '#002577';
  const CARD_ORANGE = '#ff612b';
  const RIGHT_X = 2472; // terminal cost labels sit to the right of their bars

  // App Economy "UNITEDHEALTH" small-caps wordmark, centred over the hub.
  const wordmark = (parts) => `
    <g font-family="Montserrat,Arial,sans-serif" font-weight="800" fill="${NAVY}"
       text-anchor="middle" letter-spacing="1">
      <text x="990" y="349">
        <tspan font-size="102">${parts[0]}</tspan><tspan font-size="76">${parts[1]}</tspan><tspan font-size="102">${parts[2]}</tspan><tspan font-size="76">${parts[3]}</tspan>
      </text>
    </g>`;

  // UnitedHealthcare "U" shield mark (simplified concentric pillars).
  const uhcShield = `
    <g fill="none" stroke="${NAVY}" stroke-width="9">
      <path d="M52 1176 v22 a20 20 0 0 0 40 0 v-22"/>
      <path d="M70 1176 v22 a20 20 0 0 0 40 0 v-22"/>
      <path d="M88 1176 v22 a20 20 0 0 0 40 0 v-22"/>
      <path d="M106 1176 v22 a20 20 0 0 0 40 0 v-22"/>
    </g>`;

  const segCard = (x, w, fill, val, margin) => `
    <g>
      <rect x="${x}" y="1230" width="${w}" height="106" rx="29" fill="${fill}"/>
      <text x="${x + w / 2}" y="1272" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${val}</text>
      <text x="${x + w / 2}" y="1308" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${margin}</text>
    </g>`;

  const annotations = (parts, uhcLine1, uhcLine2, optum, navyVal, navyMargin, orangeVal, orangeMargin) => `
    ${wordmark(parts)}
    <g font-family="Montserrat,Arial,sans-serif">
      ${uhcShield}
      <text x="182" y="1179" font-family="Georgia,'Times New Roman',serif" font-size="34" font-weight="700" fill="${NAVY}">${uhcLine1}</text>
      <text x="182" y="1214" font-family="Georgia,'Times New Roman',serif" font-size="34" font-weight="700" fill="${NAVY}">${uhcLine2}</text>
      <text x="521" y="1211" font-size="50" font-weight="800" fill="${CARD_ORANGE}">${optum}</text>
      ${segCard(28, 465, CARD_NAVY, navyVal, navyMargin)}
      ${segCard(500, 466, CARD_ORANGE, orangeVal, orangeMargin)}
    </g>`;

  const EN_ANN = annotations(
    ['U', 'NITED', 'H', 'EALTH'],
    'United', 'Healthcare', 'Optum',
    'Revenue: $86.3B +2% Y/Y', 'Operating margin 6.6%',
    'Revenue: $63.7B (0%) Y/Y', 'Operating margin 5.2%'
  );

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'unitedhealth-q1-fy26',
    name: 'UnitedHealth Group · Q1 FY26',
    company: 'UnitedHealth Group',
    meta: {
      company: 'UnitedHealth Group',
      title: 'UnitedHealth Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/unitedhealth-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1324,
      titleY: 200,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2431,
      periodX: -2000,
      periodY: -2000,
      periodNoteY: -1950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
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
      type: { name: 44, value: 44, note: 30, lineGap: 9 },
    },
    annotationsSvg: EN_ANN,

    layout: {
      scale: 3.3,
      nodes: {
        premiums: { x: 364, y: 356, width: 70 },
        products: { x: 364, y: 776, width: 70 },
        services: { x: 364, y: 949, width: 70 },
        investments_other: { x: 364, y: 1108, width: 70 },

        revenue: { x: 986, y: 557, width: 71 },

        operating_profit: { x: 1609, y: 421, width: 71 },
        operating_expenses: { x: 1609, y: 698, width: 71 },

        net_profit: { x: 2232, y: 303, width: 71 },
        tax: { x: 2232, y: 517, width: 71 },
        other: { x: 2232, y: 612, width: 71 },
        medical_costs: { x: 2232, y: 749, width: 71 },
        operational_costs: { x: 2232, y: 1080, width: 71 },
        cost_of_product_sold: { x: 2232, y: 1207, width: 71 },
        da: { x: 2232, y: 1327, width: 71 },

        cost_of_revenue: { x: -2000, y: -2000, width: 1, height: 1 },
        gross_profit: { x: -2000, y: -2000, width: 1, height: 1 },
      },
      labels: {
        premiums: {
          blocks: [
            { x: 399, top: 252, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+1% Y/Y', size: 30, color: NOTE }] },
            { x: 316, top: 474, anchor: 'end',
              lines: [{ text: 'Premiums', size: 44, weight: 700 }] },
          ],
        },
        products: {
          blocks: [
            { x: 399, top: 670, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+2% Y/Y', size: 30, color: NOTE }] },
            { x: 316, top: 771, anchor: 'end',
              lines: [{ text: 'Products', size: 44, weight: 700 }] },
          ],
        },
        services: {
          blocks: [
            { x: 399, top: 845, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+9% Y/Y', size: 30, color: NOTE }] },
            { x: 316, top: 939, anchor: 'end',
              lines: [{ text: 'Services', size: 44, weight: 700 }] },
          ],
        },
        investments_other: {
          blocks: [
            { x: 399, top: 1008, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+9% Y/Y', size: 30, color: NOTE }] },
            { x: 316, top: 1044, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Investments', size: 44, weight: 700 }, { text: '& Other', size: 44, weight: 700 }] },
          ],
        },

        revenue: {
          blocks: [
            { x: 1021, top: 402, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '+2% Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },

        operating_profit: {
          blocks: [
            { x: 1645, top: 229, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '8% margin', size: 30, color: NOTE },
                { text: '(0pp) Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },
        operating_expenses: {
          blocks: [
            { x: 1645, top: 1050, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 44, weight: 700 },
                { text: 'expenses', size: 44, weight: 700 },
                { text: '$value', size: 44 },
              ] },
          ],
        },

        net_profit: {
          blocks: [
            { x: 2379, top: 248, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '6% margin', size: 30, color: NOTE },
                { text: '(0pp) Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },
        tax: {
          blocks: [
            { x: RIGHT_X, top: 483, anchor: 'middle', lineGap: 8,
              lines: [{ text: 'Tax', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        other: {
          blocks: [
            { x: RIGHT_X, top: 588, anchor: 'middle', lineGap: 8,
              lines: [{ text: 'Other', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        medical_costs: {
          blocks: [
            { x: RIGHT_X, top: 833, anchor: 'middle', lineGap: 8,
              lines: [{ text: 'Medical costs', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        operational_costs: {
          blocks: [
            { x: RIGHT_X, top: 1068, anchor: 'middle', lineGap: 8,
              lines: [{ text: 'Operational costs', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        cost_of_product_sold: {
          blocks: [
            { x: RIGHT_X, top: 1191, anchor: 'middle', lineGap: 8,
              lines: [{ text: 'Cost of product sold', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        da: {
          blocks: [
            { x: RIGHT_X, top: 1295, anchor: 'middle', lineGap: 8,
              lines: [{ text: 'D&A', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
      },
    },

    nodes: [
      { id: 'premiums', col: 0, order: 0, type: 'source', label: 'Premiums', value: 87.6, notes: ['+1% Y/Y'] },
      { id: 'products', col: 0, order: 1, type: 'source', label: 'Products', value: 13.3, notes: ['+2% Y/Y'] },
      { id: 'services', col: 0, order: 2, type: 'source', label: 'Services', value: 9.8, notes: ['+9% Y/Y'] },
      { id: 'investments_other', col: 0, order: 3, type: 'source', label: ['Investments', '& Other'], value: 1.1, notes: ['+9% Y/Y'] },

      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 111.7, notes: ['+2% Y/Y'] },

      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 9.0, valueText: '$9.0B', notes: ['8% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 102.7 },

      { id: 'net_profit', col: 3, order: 0, type: 'profit', label: 'Net profit', value: 6.5, notes: ['6% margin', '(0pp) Y/Y'] },
      { id: 'tax', col: 3, order: 1, type: 'cost', label: 'Tax', value: 1.5 },
      { id: 'other', col: 3, order: 2, type: 'cost', label: 'Other', value: 1.0, valueText: '($1.0B)' },
      { id: 'medical_costs', col: 3, order: 3, type: 'cost', label: 'Medical costs', value: 73.5 },
      { id: 'operational_costs', col: 3, order: 4, type: 'cost', label: 'Operational costs', value: 15.4 },
      { id: 'cost_of_product_sold', col: 3, order: 5, type: 'cost', label: 'Cost of product sold', value: 12.8 },
      { id: 'da', col: 3, order: 6, type: 'cost', label: 'D&A', value: 1.0, valueText: '($1.0B)' },

      { id: 'cost_of_revenue', col: 5, order: 98, type: 'cost', label: 'Cost of revenue', value: 0 },
      { id: 'gross_profit', col: 5, order: 99, type: 'profit', label: 'Gross profit', value: 111.7 },
    ],

    links: [
      { source: 'premiums', target: 'revenue', value: 87.6, sourceOrder: 0, targetOrder: 0 },
      { source: 'products', target: 'revenue', value: 13.3, sourceOrder: 0, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 9.8, sourceOrder: 0, targetOrder: 2 },
      { source: 'investments_other', target: 'revenue', value: 1.1, sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'operating_profit', value: 9.0, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 102.7, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 6.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 1.0, sourceOrder: 2, targetOrder: 0 },

      { source: 'operating_expenses', target: 'medical_costs', value: 73.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operational_costs', value: 15.4, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'cost_of_product_sold', value: 12.8, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 1.0, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['U', 'NITED', 'H', 'EALTH', 'United', 'Healthcare', 'Optum'],
      zh: {
        name: '联合健康集团 · 2026 财年第一季度',
        meta: {
          title: '联合健康集团 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1900,
        },
        annotationsSvg: annotations(
          ['U', 'NITED', 'H', 'EALTH'],
          'United', 'Healthcare', 'Optum',
          '收入：$86.3B 同比 +2%', '营业利润率 6.6%',
          '收入：$63.7B 同比 (0%)', '营业利润率 5.2%'
        ),
        nodes: {
          premiums: { label: '保费', notes: ['同比 +1%'] },
          products: { label: '产品', notes: ['同比 +2%'] },
          services: { label: '服务', notes: ['同比 +9%'] },
          investments_other: { label: ['投资', '及其他'], notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 (0 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          medical_costs: { label: '医疗成本' },
          operational_costs: { label: '运营成本' },
          cost_of_product_sold: { label: '产品销售成本' },
          da: { label: '折旧摊销' },
          cost_of_revenue: { label: '收入成本' },
          gross_profit: { label: '毛利润' },
        },
        layout: {
          labels: {
            premiums: {
              blocks: [
                { x: 399, top: 252, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 44 }, { text: '同比 +1%', size: 30, color: NOTE }] },
                { x: 316, top: 474, anchor: 'end',
                  lines: [{ text: '保费', size: 44, weight: 700 }] },
              ],
            },
            products: {
              blocks: [
                { x: 399, top: 670, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 44 }, { text: '同比 +2%', size: 30, color: NOTE }] },
                { x: 316, top: 771, anchor: 'end',
                  lines: [{ text: '产品', size: 44, weight: 700 }] },
              ],
            },
            services: {
              blocks: [
                { x: 399, top: 845, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 44 }, { text: '同比 +9%', size: 30, color: NOTE }] },
                { x: 316, top: 939, anchor: 'end',
                  lines: [{ text: '服务', size: 44, weight: 700 }] },
              ],
            },
            investments_other: {
              blocks: [
                { x: 399, top: 1008, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 44 }, { text: '同比 +9%', size: 30, color: NOTE }] },
                { x: 316, top: 1044, anchor: 'end', lineGap: 9,
                  lines: [{ text: '投资', size: 44, weight: 700 }, { text: '及其他', size: 44, weight: 700 }] },
              ],
            },
            revenue: {
              blocks: [
                { x: 1021, top: 402, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 44, weight: 700 },
                    { text: '$value', size: 44 },
                    { text: '同比 +2%', size: 30, color: NOTE },
                  ] },
              ],
            },
            operating_profit: {
              blocks: [
                { x: 1645, top: 229, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业利润', size: 44, weight: 700 },
                    { text: '$value', size: 44 },
                    { text: '利润率 8%', size: 30, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 30, color: NOTE },
                  ] },
              ],
            },
            operating_expenses: {
              blocks: [
                { x: 1645, top: 1050, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业费用', size: 44, weight: 700 },
                    { text: '$value', size: 44 },
                  ] },
              ],
            },
            net_profit: {
              blocks: [
                { x: 2379, top: 248, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 44, weight: 700 },
                    { text: '$value', size: 44 },
                    { text: '利润率 6%', size: 30, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 30, color: NOTE },
                  ] },
              ],
            },
            tax: {
              blocks: [
                { x: RIGHT_X, top: 483, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '税费', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
              ],
            },
            other: {
              blocks: [
                { x: RIGHT_X, top: 588, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '其他', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
              ],
            },
            medical_costs: {
              blocks: [
                { x: RIGHT_X, top: 833, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '医疗成本', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
              ],
            },
            operational_costs: {
              blocks: [
                { x: RIGHT_X, top: 1068, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '运营成本', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
              ],
            },
            cost_of_product_sold: {
              blocks: [
                { x: RIGHT_X, top: 1191, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '产品销售成本', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
              ],
            },
            da: {
              blocks: [
                { x: RIGHT_X, top: 1295, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '折旧摊销', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
              ],
            },
          },
        },
      },
    },
  });
})();
