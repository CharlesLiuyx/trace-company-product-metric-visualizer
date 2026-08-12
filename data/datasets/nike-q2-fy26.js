/* ====================================================================
 * Nike - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/nike-q2-fy26.png as a fixed
 * d3-sankey layout with the Nike wordmark/swoosh and four product-line
 * photos rendered as approved runtime raster annotations reused from
 * the validated Nike Q4 FY26 crop set.
 *
 * Source-chart quirks mirrored here (see data/income-statements/nike.js):
 * - Footwear/Apparel/Equipment/Converse and Revenue are drawn as solid
 *   black bars (not the engine's default teal/near-black source/hub
 *   palette); their outgoing flow bands are grey, not black.
 * - Interest $9M is a positive non-operating hairline that backfills the
 *   net-profit bar; Other ($16M) is a separate negative hairline from
 *   operating profit. Both remain visible semantic nodes.
 * - Published rounding: revenue segments sum to $12.5B vs the $12.4B
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
  const PALE_GREEN_NODE = '#c0ddc0';
  const PALE_RED_NODE = '#e0cdcd';
  const NOTE = '#666666';

  /* Callout box geometry measured directly against the reference image
   * (triangle apex, box top/bottom, corner radius) after a user fidelity
   * correction found the first-pass box too high/short. See
   * docs/fidelity-loop-rules.md 人工反馈沉淀 note below. */
  const calloutBox = `
    <path d="M847 1107 L877 1161 L817 1161 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="727" y="1161" width="240" height="109" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>`;

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="847" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">China<tspan fill="${RED}" font-weight="700"> (17%) Y/Y</tspan></text>
        <text x="847" y="1244" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${GREEN}" font-weight="700"> +3% Y/Y</tspan></text>
      </g>
      <text x="847" y="1305" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = Rest of World</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="847" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">中国<tspan fill="${RED}" font-weight="700"> 同比 (17%)</tspan></text>
        <text x="847" y="1244" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${GREEN}" font-weight="700"> 同比 +3%</tspan></text>
      </g>
      <text x="847" y="1305" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = 中国以外地区</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q2-fy26',
    name: 'Nike · Q2 FY26',
    company: 'Nike',
    meta: {
      company: 'Nike',
      title: 'Nike Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Nov. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nike-q2-fy26.png', width: 2667, height: 1500 },
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
        x: 114, y: 475, width: 207, height: 140,
      },
      {
        key: 'nike-business-apparel',
        href: 'data/assets/raster-annotations/nike/business-apparel.png',
        x: 140, y: 721, width: 200, height: 164,
      },
      {
        key: 'nike-business-equipment',
        href: 'data/assets/raster-annotations/nike/business-equipment.png',
        x: 150, y: 948, width: 190, height: 152,
      },
      {
        key: 'nike-business-converse-q2-fy26',
        href: 'data/assets/raster-annotations/nike/business-converse-q2-fy26.png',
        x: 125, y: 1159, width: 205, height: 132,
      },
    ],

    layout: {
      scale: 29.9,
      nodes: {
        footwear: { x: 358, y: 434, width: 71, height: 228 },
        apparel: { x: 358, y: 826, width: 71, height: 115 },
        equipment: { x: 358, y: 1119, width: 71, height: 15 },
        converse: { x: 358, y: 1305, width: 71, height: 7 },
        revenue: { x: 825, y: 719, width: 70, height: 371 },
        gross_profit: { x: 1292, y: 572, width: 71, height: 149 },
        cost_of_sales: { x: 1292, y: 995, width: 71, height: 220 },
        operating_profit: { x: 1760, y: 476, width: 70, height: 27 },
        operating_expenses: { x: 1760, y: 768, width: 70, height: 119 },
        interest: { x: 2106, y: 439, width: 72, height: 4 },
        net_profit: { x: 2226, y: 370, width: 71, height: 23 },
        tax: { x: 2226, y: 594, width: 71, height: 4 },
        other: { x: 2226, y: 696, width: 71, height: 2 },
        overhead: { x: 2226, y: 938, width: 71, height: 82 },
        demand_creation: { x: 2226, y: 1189, width: 71, height: 36 },
      },
      labels: {
        footwear: {
          blocks: [
            {
              x: 393, top: 335, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+0% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 218, top: 620, anchor: 'middle', semanticRole: 'note', lines: [{ text: 'Footwear', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        apparel: {
          blocks: [
            {
              x: 393, top: 735, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 239, top: 894, anchor: 'middle', semanticRole: 'note', lines: [{ text: 'Apparel', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        equipment: {
          blocks: [
            {
              x: 393, top: 1024, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 218, top: 1100, anchor: 'middle', semanticRole: 'note', lines: [{ text: 'Equipment', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        converse: {
          blocks: [
            {
              x: 393, top: 1197, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(30%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 233, top: 1283, anchor: 'middle', semanticRole: 'note', lines: [{ text: 'Converse', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 861, top: 578, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: BLACK },
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1328, top: 389, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '41% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1328, top: 1230, anchor: 'middle', lineGap: 8,
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
                { text: '8% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1795, top: 907, anchor: 'middle', lineGap: 8,
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
              x: 2142, top: 456, anchor: 'middle', lineGap: 8,
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
              x: 2428, top: 320, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '6% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2428, top: 561, anchor: 'middle', lineGap: 8,
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
              x: 2428, top: 658, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        overhead: {
          blocks: [
            {
              x: 2435, top: 931, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Overhead', size: 32, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                { text: '22% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        demand_creation: {
          blocks: [
            {
              x: 2435, top: 1155, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Demand', size: 32, weight: 800, color: RED_LABEL },
                { text: 'Creation', size: 32, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 7.7, notes: ['+0% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.9, notes: ['+4% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.6, notes: ['+1% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.3, notes: ['(30%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.4, notes: ['+1% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.0, valueText: '$5.0B', notes: ['41% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 7.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.0, valueText: '$1.0B', notes: ['8% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.009, valueText: '$9M', color: PALE_GREEN_NODE, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.8, notes: ['6% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.016, valueText: '($16M)', color: PALE_RED_NODE, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'overhead', col: 5, order: 3, type: 'cost', label: 'Overhead', value: 2.8, notes: ['22% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'demand_creation', col: 5, order: 4, type: 'cost', label: ['Demand', 'Creation'], value: 1.3, notes: ['10% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      /* Footwear/Apparel/Equipment/Converse sum to $12.5B vs the $12.4B
       * revenue bar (published rounding). The reference shows the four
       * incoming bands merging into one continuous mass that fills the
       * hub's full height with no gap; only Footwear tapers by the 6px
       * published-rounding difference at the revenue face. */
      { source: 'footwear', target: 'revenue', value: 7.7, sourceWidth: 228, targetWidth: 234, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.9, width: 115, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.6, width: 15, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.3, width: 7, sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 5.0, sourceWidth: 151, targetWidth: 149, y0: 794.5, y1: 646.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 7.4, width: 220, y0: 980, y1: 1105, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 1.0, sourceWidth: 30, targetWidth: 27, y0: 587, y1: 489.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.0, width: 119, y0: 661.5, y1: 827.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      /* Waterfall region: Interest adds into net profit while Tax and
       * Other leave operating profit as separately visible hairlines. */
      { source: 'operating_profit', target: 'net_profit', value: 0.8, sourceWidth: 22, targetWidth: 19, y0: 487, y1: 379.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 4, y0: 500, y1: 596, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.016, width: 2, y0: 502, y1: 697, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'interest', target: 'net_profit', value: 0.009, width: 4, y0: 441, y1: 391, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'overhead', value: 2.8, sourceWidth: 83, targetWidth: 82, y0: 809.5, y1: 979, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.3, width: 36, y0: 869, y1: 1207, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['RoW'],
      zh: {
        name: 'Nike · 2026 财年第二季度',
        meta: {
          title: 'Nike 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 11 月',
          titleTextLength: 1900,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 +0%'] },
          apparel: { label: '服装', notes: ['同比 +4%'] },
          equipment: { label: '装备', notes: ['同比 +1%'] },
          converse: { notes: ['同比 (30%)'] },
          revenue: { label: '收入', notes: ['同比 +1%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 41%', '同比 (3 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 (3 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          interest: { label: '利息' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          overhead: { label: '管理费用', notes: ['占收入 22%', '同比 (2 个百分点)'] },
          demand_creation: { label: ['需求', '创造费用'], notes: ['占收入 10%', '同比 +2 个百分点'] },
        },
        layout: {
          labels: {
            footwear: {
              blocks: [
                {
                  x: 393, top: 335, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +0%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 218, top: 620, anchor: 'middle', semanticRole: 'note', lines: [{ text: '鞋类', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            apparel: {
              blocks: [
                {
                  x: 393, top: 735, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +4%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 239, top: 894, anchor: 'middle', semanticRole: 'note', lines: [{ text: '服装', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            equipment: {
              blocks: [
                {
                  x: 393, top: 1024, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +1%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 245, top: 1100, anchor: 'middle', semanticRole: 'note', lines: [{ text: '装备', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            converse: {
              blocks: [
                {
                  x: 393, top: 1197, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 (30%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 233, top: 1283, anchor: 'middle', semanticRole: 'note', lines: [{ text: 'Converse', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 861, top: 578, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800, color: BLACK },
                    { text: '$value', size: 38, weight: 400, color: BLACK },
                    { text: '同比 +1%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1328, top: 389, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 41%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_sales: {
              blocks: [
                {
                  x: 1328, top: 1230, anchor: 'middle', lineGap: 8,
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
                    { text: '利润率 8%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1795, top: 907, anchor: 'middle', lineGap: 8,
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
                  x: 2142, top: 456, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 32, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 32, weight: 400, color: GREEN_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2428, top: 320, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 6%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2428, top: 561, anchor: 'middle', lineGap: 8,
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
                  x: 2428, top: 658, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            overhead: {
              blocks: [
                {
                  x: 2435, top: 931, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 32, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                    { text: '占收入 22%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            demand_creation: {
              blocks: [
                {
                  x: 2435, top: 1155, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '需求', size: 32, weight: 800, color: RED_LABEL },
                    { text: '创造费用', size: 32, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                    { text: '占收入 10%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
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
