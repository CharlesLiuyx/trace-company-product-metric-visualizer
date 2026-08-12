/* ====================================================================
 * Nike - Q4 FY23 income statement ($B)
 * Reconstructed from input/processed/nike-q4-fy23.png as a fixed
 * d3-sankey layout with the Nike wordmark/swoosh and four product-line
 * photos rendered as approved runtime raster annotations reused from
 * the validated Nike Q4 FY26 crop set.
 *
 * Source-chart quirks mirrored here (see data/income-statements/nike.js):
 * - Footwear/Apparel/Equipment/Converse and Revenue are drawn as solid
 *   black bars (not the engine's default teal/near-black source/hub
 *   palette); their outgoing flow bands are grey, not black.
 * - Interest $28M is a short green inflow to net profit. Other ($3M)
 *   is a distinct short red outflow from operating profit. Both retain
 *   their Source-painted 1px faces and exact non-zero amounts.
 * - Published rounding: revenue segments sum to $12.7B vs the $12.8B
 *   hub, and the China/RoW callout is a geography note, not a drawn
 *   Sankey flow.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLACK = '#000000';
  const GREY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  /* Callout box geometry measured directly against the reference image
   * (triangle apex, box top/bottom, corner radius) after a user fidelity
   * correction found the first-pass box too high/short. See
   * docs/fidelity-loop-rules.md 人工反馈沉淀 note below. */
  const calloutBox = `
    <path d="M870 1098 L900 1150 L840 1150 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="740" y="1150" width="240" height="109" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="870" y="1190" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">China<tspan fill="${GREEN}" font-weight="700"> +16% Y/Y</tspan></text>
        <text x="870" y="1233" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${GREEN}" font-weight="700"> +3% Y/Y</tspan></text>
      </g>
      <text x="870" y="1295" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = Rest of World</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="870" y="1190" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">中国<tspan fill="${GREEN}" font-weight="700"> 同比 +16%</tspan></text>
        <text x="870" y="1233" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${GREEN}" font-weight="700"> 同比 +3%</tspan></text>
      </g>
      <text x="870" y="1295" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = 中国以外地区</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q4-fy23',
    name: 'Nike · Q4 FY23',
    company: 'Nike',
    meta: {
      company: 'Nike',
      title: 'Nike Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending May 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nike-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 189,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2002,
      periodX: 2232,
      periodY: 255,
      periodNoteY: 295,
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
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GREY_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'nike-company-logo',
        href: 'data/assets/raster-annotations/nike/company-logo.png',
        x: 627, y: 257, width: 541, height: 301,
      },
      {
        key: 'nike-business-footwear',
        href: 'data/assets/raster-annotations/nike/business-footwear.png',
        x: 114, y: 545, width: 207, height: 140,
      },
      {
        key: 'nike-business-apparel',
        href: 'data/assets/raster-annotations/nike/business-apparel.png',
        x: 140, y: 768, width: 200, height: 164,
      },
      {
        key: 'nike-business-equipment',
        href: 'data/assets/raster-annotations/nike/business-equipment.png',
        x: 150, y: 976, width: 190, height: 152,
      },
      {
        key: 'nike-business-converse',
        href: 'data/assets/raster-annotations/nike/business-converse.png',
        x: 125, y: 1155, width: 215, height: 136,
      },
    ],

    layout: {
      scale: 26.8,
      nodes: {
        footwear: { x: 369, y: 550, width: 71, height: 228 },
        apparel: { x: 369, y: 918, width: 71, height: 83 },
        equipment: { x: 369, y: 1153, width: 71, height: 9 },
        converse: { x: 369, y: 1300, width: 71, height: 14 },
        revenue: { x: 831, y: 740, width: 70, height: 343 },
        gross_profit: { x: 1293, y: 649, width: 71, height: 149 },
        cost_of_sales: { x: 1298, y: 963, width: 71, height: 191 },
        operating_profit: { x: 1771, y: 545, width: 70, height: 31 },
        operating_expenses: { x: 1773, y: 745, width: 70, height: 116 },
        interest: { x: 2113, y: 546, width: 70, height: 1 },
        net_profit: { x: 2237, y: 454, width: 71, height: 26 },
        tax: { x: 2235, y: 689, width: 71, height: 2 },
        other: { x: 2235, y: 780, width: 71, height: 1 },
        overhead: { x: 2237, y: 923, width: 71, height: 86 },
        demand_creation: { x: 2235, y: 1220, width: 71, height: 28 },
      },
      labels: {
        footwear: {
          blocks: [
            {
              x: 404, top: 450, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 224, top: 690, anchor: 'middle', semanticRole: 'top-aligned-side-label', lines: [{ text: 'Footwear', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        apparel: {
          blocks: [
            {
              x: 404, top: 818, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+0% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 228, top: 943, anchor: 'middle', semanticRole: 'top-aligned-side-label', lines: [{ text: 'Apparel', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        equipment: {
          blocks: [
            {
              x: 404, top: 1052, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 220, top: 1124, anchor: 'middle', semanticRole: 'top-aligned-side-label', lines: [{ text: 'Equipment', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        converse: {
          blocks: [
            {
              x: 404, top: 1206, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(1%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 231, top: 1284, anchor: 'middle', lines: [{ text: 'Converse', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 866, top: 594, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: BLACK },
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1329, top: 463, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '44% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1325.5, top: 1171, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of sales', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 38, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1806, top: 363, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '10% margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1798, top: 873, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2148, top: 560, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 32, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 32, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2429, top: 409, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '8% margin', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2434, top: 648, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2438, top: 745, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 32, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        overhead: {
          blocks: [
            {
              x: 2428, top: 933, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Overhead', size: 32, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        demand_creation: {
          blocks: [
            {
              x: 2431, top: 1171, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Demand', size: 32, weight: 800, color: RED_LABEL },
                { text: 'Creation', size: 32, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 8.5, notes: ['+7% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.2, valueText: '$3.2B', notes: ['+0% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.4, notes: ['+11% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.6, notes: ['(1%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.8, valueText: '$12.8B', notes: ['+5% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.6, notes: ['44% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 7.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.2, notes: ['10% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.028, valueText: '$28M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.0, notes: ['8% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.003, valueText: '($3M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'overhead', col: 5, order: 3, type: 'cost', label: 'Overhead', value: 3.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'demand_creation', col: 5, order: 4, type: 'cost', label: ['Demand', 'Creation'], value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      /* footwear/apparel/equipment/converse sum to $12.7B vs the $12.8B
       * revenue bar (published rounding). The reference shows the four
       * incoming bands merging into one continuous mass that fills the
       * hub's full height with no gap, so footwear's band absorbs the
       * 9px shortfall (334px -> 343px) rather than leaving the bottom of
       * the hub's left edge uncovered. */
      { source: 'footwear', target: 'revenue', value: 8.5, sourceWidth: 228, targetWidth: 237, y0: 664, y1: 858.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.2, sourceWidth: 83, targetWidth: 83, y0: 959.5, y1: 1018.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.4, sourceWidth: 9, targetWidth: 9, y0: 1157.5, y1: 1064.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.6, sourceWidth: 14, targetWidth: 14, y0: 1307, y1: 1076, sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 5.6, sourceWidth: 151, targetWidth: 149, y0: 815.5, y1: 723.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 7.2, sourceWidth: 192, targetWidth: 191, y0: 987, y1: 1058.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 1.2, sourceWidth: 31, targetWidth: 31, y0: 664.5, y1: 560.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.4, sourceWidth: 118, targetWidth: 116, y0: 739, y1: 803, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      /* Waterfall region: Interest enters net profit from below. Tax and
       * Other leave operating profit in the Source's top-to-bottom order. */
      { source: 'operating_profit', target: 'net_profit', value: 1.0, sourceWidth: 25, targetWidth: 25, y0: 557.5, y1: 466.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 5, targetWidth: 2, y0: 572.5, y1: 690, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.003, sourceWidth: 1, targetWidth: 1, y0: 575.5, y1: 780.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'interest', target: 'net_profit', value: 0.028, sourceWidth: 1, targetWidth: 1, y0: 546.5, y1: 479.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },

      { source: 'operating_expenses', target: 'overhead', value: 3.3, sourceWidth: 87, targetWidth: 86, y0: 788.5, y1: 966, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.1, sourceWidth: 29, targetWidth: 28, y0: 846.5, y1: 1234, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['RoW'],
      zh: {
        name: 'Nike · 2023 财年第四季度',
        meta: {
          title: 'Nike 2023 财年第四季度利润表',
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 5 月',
          titleTextLength: 1900,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 +7%'] },
          apparel: { label: '服装', notes: ['同比 +0%'] },
          equipment: { label: '装备', notes: ['同比 +11%'] },
          converse: { notes: ['同比 (1%)'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 44%', '同比 (1 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 (2 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          interest: { label: '利息收入' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 (4 个百分点)'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          overhead: { label: '管理费用' },
          demand_creation: { label: ['需求', '创造费用'] },
        },
        layout: {
          labels: {
            footwear: {
              blocks: [
                {
                  x: 404, top: 450, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +7%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 224, top: 690, anchor: 'middle', semanticRole: 'top-aligned-side-label', lines: [{ text: '鞋类', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            apparel: {
              blocks: [
                {
                  x: 404, top: 818, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +0%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 228, top: 943, anchor: 'middle', semanticRole: 'top-aligned-side-label', lines: [{ text: '服装', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            equipment: {
              blocks: [
                {
                  x: 404, top: 1052, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +11%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 220, top: 1124, anchor: 'middle', semanticRole: 'top-aligned-side-label', lines: [{ text: '装备', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            converse: {
              blocks: [
                {
                  x: 404, top: 1206, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 (1%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 231, top: 1284, anchor: 'middle', lines: [{ text: 'Converse', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 866, top: 594, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800, color: BLACK },
                    { text: '$value', size: 38, weight: 400, color: BLACK },
                    { text: '同比 +5%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1329, top: 463, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 44%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_sales: {
              blocks: [
                {
                  x: 1325.5, top: 1171, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售成本', size: 38, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 38, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1806, top: 363, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 10%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1798, top: 873, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '运营', size: 36, weight: 800, color: RED_LABEL },
                    { text: '费用', size: 36, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 2148, top: 560, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息收入', size: 32, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 32, weight: 400, color: GREEN_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2429, top: 409, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 8%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2434, top: 648, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2438, top: 745, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 32, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            overhead: {
              blocks: [
                {
                  x: 2428, top: 933, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 32, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            demand_creation: {
              blocks: [
                {
                  x: 2431, top: 1171, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '需求', size: 32, weight: 800, color: RED_LABEL },
                    { text: '创造费用', size: 32, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
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
