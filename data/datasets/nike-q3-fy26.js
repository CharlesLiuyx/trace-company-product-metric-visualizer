/* ====================================================================
 * Nike - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/nike-q3-fy26.png as a fixed
 * d3-sankey layout with the Nike wordmark/swoosh and four product-line
 * photos rendered as approved runtime raster annotations reused from
 * the validated Nike Q4 FY26 crop set.
 *
 * Source-chart quirks mirrored here (see data/income-statements/nike.js):
 * - Footwear/Apparel/Equipment/Converse and Revenue are drawn as solid
 *   black bars (not the engine's default teal/near-black source/hub
 *   palette); their outgoing flow bands are grey, not black.
 * - "Other $0.1B" is a non-operating hairline that backfills the
 *   net-profit bar from below, mirroring the source's waterfall style
 *   (see the intuit-q3-fy26 dataset for the same pattern).
 * - Published rounding: revenue segments sum to $11.4B vs the $11.3B
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
    <path d="M847 1107 L877 1161 L817 1161 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="727" y="1161" width="240" height="109" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="847" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">China<tspan fill="${RED}" font-weight="700"> (7%) Y/Y</tspan></text>
        <text x="847" y="1244" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${GREEN}" font-weight="700"> +1% Y/Y</tspan></text>
      </g>
      <text x="847" y="1305" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = Rest of World</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="847" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">中国<tspan fill="${RED}" font-weight="700"> 同比 (7%)</tspan></text>
        <text x="847" y="1244" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${GREEN}" font-weight="700"> 同比 +1%</tspan></text>
      </g>
      <text x="847" y="1305" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = 中国以外地区</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q3-fy26',
    name: 'Nike · Q3 FY26',
    company: 'Nike',
    meta: {
      company: 'Nike',
      title: 'Nike Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nike-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 189,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2002,
      periodX: 1796,
      periodY: 1213,
      periodNoteY: 1246,
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
        x: 114, y: 500, width: 207, height: 140,
      },
      {
        key: 'nike-business-apparel',
        href: 'data/assets/raster-annotations/nike/business-apparel.png',
        x: 140, y: 735, width: 200, height: 164,
      },
      {
        key: 'nike-business-equipment',
        href: 'data/assets/raster-annotations/nike/business-equipment.png',
        x: 150, y: 962, width: 190, height: 152,
      },
      {
        key: 'nike-business-converse',
        href: 'data/assets/raster-annotations/nike/business-converse.png',
        x: 125, y: 1155, width: 215, height: 136,
      },
    ],

    layout: {
      scale: 33.5,
      nodes: {
        footwear: { x: 358, y: 480, width: 71, height: 248 },
        apparel: { x: 358, y: 877, width: 71, height: 107 },
        equipment: { x: 358, y: 1135, width: 71, height: 14 },
        converse: { x: 358, y: 1306, width: 71, height: 7 },
        revenue: { x: 825, y: 716, width: 71, height: 381 },
        gross_profit: { x: 1291, y: 605, width: 73, height: 152 },
        cost_of_sales: { x: 1292, y: 970, width: 71, height: 227 },
        operating_profit: { x: 1759, y: 519, width: 72, height: 18 },
        operating_expenses: { x: 1759, y: 737, width: 71, height: 134 },
        other: { x: 2102, y: 512, width: 71, height: 2 },
        net_profit: { x: 2226, y: 439, width: 72, height: 17 },
        tax: { x: 2226, y: 667, width: 72, height: 2 },
        overhead: { x: 2226, y: 832, width: 72, height: 97 },
        demand_creation: { x: 2226, y: 1154, width: 72, height: 35 },
      },
      labels: {
        footwear: {
          blocks: [
            {
              x: 393, top: 383, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 218, top: 651, anchor: 'middle', lines: [{ text: 'Footwear', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        apparel: {
          blocks: [
            {
              x: 393, top: 780, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(0%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 240, top: 918, anchor: 'middle', lines: [{ text: 'Apparel', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        equipment: {
          blocks: [
            {
              x: 393, top: 1035, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(2%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 230, top: 1120, anchor: 'middle', lines: [{ text: 'Equipment', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        converse: {
          blocks: [
            {
              x: 393, top: 1207, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(30%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 233, top: 1296, anchor: 'middle', lines: [{ text: 'Converse', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 861, top: 578, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: BLACK },
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+0% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1328, top: 407, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '40% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1328, top: 1205, anchor: 'middle', lineGap: 8,
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
              x: 1795, top: 298, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '5% margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1795, top: 879, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2138, top: 552, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 32, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 32, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2428, top: 388, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '5% margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2428, top: 635, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        overhead: {
          blocks: [
            {
              x: 2428, top: 850, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Overhead', size: 32, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                { text: '26% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        demand_creation: {
          blocks: [
            {
              x: 2428, top: 1126, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Demand', size: 32, weight: 800, color: RED_LABEL },
                { text: 'Creation', size: 32, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 7.4, notes: ['+2% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.2, valueText: '$3.2B', notes: ['(0%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.5, notes: ['(2%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.3, notes: ['(30%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 11.3, valueText: '$11.3B', notes: ['+0% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.5, notes: ['40% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 6.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, notes: ['5% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1, valueText: '$0.1B', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.5, notes: ['5% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'overhead', col: 5, order: 2, type: 'cost', label: 'Overhead', value: 2.9, notes: ['26% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'demand_creation', col: 5, order: 3, type: 'cost', label: ['Demand', 'Creation'], value: 1.1, notes: ['10% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      /* footwear/apparel/equipment/converse sum to $11.4B vs the $11.3B
       * revenue bar (published rounding). The reference shows the four
       * incoming bands merging into one continuous mass that fills the
       * hub's full height with no gap, so footwear's band absorbs the
       * 5px shortfall (376px -> 381px) rather than leaving the bottom of
       * the hub's left edge uncovered. */
      { source: 'footwear', target: 'revenue', value: 7.4, width: 253, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.2, width: 107, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.5, width: 14, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.3, width: 7, sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 4.5, width: 152, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 6.7, width: 229, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 0.6, width: 18, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.0, width: 134, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      /* Waterfall region: the drawn op-profit -> net-profit band is the
       * $0.5B net bar minus the $0.1B "Other" hairline that backfills the
       * bar bottom from below (no drawn source bar in the original). */
      { source: 'operating_profit', target: 'net_profit', value: 0.5, width: 15, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, width: 3, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.1, width: 2, sourceOrder: 0, targetOrder: 1 },

      /* overhead + demand_creation summed to 132px vs the 134px
       * operating_expenses bar (same published-rounding pattern as
       * revenue's inputs above); overhead absorbs the 2px shortfall so
       * the bands fill the bar's full height with no visible gap. */
      { source: 'operating_expenses', target: 'overhead', value: 2.9, width: 99, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.1, width: 35, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['RoW'],
      zh: {
        name: 'Nike · 2026 财年第三季度',
        meta: {
          title: 'Nike 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 2 月',
          titleTextLength: 1900,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 +2%'] },
          apparel: { label: '服装', notes: ['同比 (0%)'] },
          equipment: { label: '装备', notes: ['同比 (2%)'] },
          converse: { notes: ['同比 (30%)'] },
          revenue: { label: '收入', notes: ['同比 +0%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 (1 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 (2 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          overhead: { label: '管理费用', notes: ['占收入 26%', '同比 +1 个百分点'] },
          demand_creation: { label: ['需求', '创造费用'], notes: ['占收入 10%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: {
            footwear: {
              blocks: [
                {
                  x: 393, top: 383, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +2%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 218, top: 651, anchor: 'middle', lines: [{ text: '鞋类', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            apparel: {
              blocks: [
                {
                  x: 393, top: 780, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 (0%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 240, top: 918, anchor: 'middle', lines: [{ text: '服装', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            equipment: {
              blocks: [
                {
                  x: 393, top: 1035, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 (2%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 245, top: 1120, anchor: 'middle', lines: [{ text: '装备', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            converse: {
              blocks: [
                {
                  x: 393, top: 1207, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 (30%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 233, top: 1296, anchor: 'middle', lines: [{ text: 'Converse', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 861, top: 578, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800, color: BLACK },
                    { text: '$value', size: 38, weight: 400, color: BLACK },
                    { text: '同比 +0%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1328, top: 407, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 40%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_sales: {
              blocks: [
                {
                  x: 1328, top: 1205, anchor: 'middle', lineGap: 8,
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
                  x: 1795, top: 298, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 5%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1795, top: 879, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '运营', size: 36, weight: 800, color: RED_LABEL },
                    { text: '费用', size: 36, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2138, top: 552, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 32, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 32, weight: 400, color: GREEN_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2428, top: 388, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 5%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2428, top: 635, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            overhead: {
              blocks: [
                {
                  x: 2428, top: 850, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 32, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                    { text: '占收入 26%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            demand_creation: {
              blocks: [
                {
                  x: 2428, top: 1126, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '需求', size: 32, weight: 800, color: RED_LABEL },
                    { text: '创造费用', size: 32, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                    { text: '占收入 10%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
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
