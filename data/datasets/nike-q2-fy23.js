/* ====================================================================
 * Nike - Q2 FY23 income statement ($B)
 * Reconstructed from input/processed/nike-q2-fy23.png as a fixed
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
 * - Interest is a genuine one-pixel terminal face and remains a visible
 *   semantic node; it is never inflated or replaced by a hidden route.
 * - China/RoW is a geography note, not a drawn Sankey flow.
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

  /* Callout geometry is measured from this Build's native Q2 FY23 Source. */
  const calloutBox = `
    <path d="M942 1064 L972 1118 L912 1118 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="822" y="1118" width="240" height="109" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>`;

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="942" y="1158" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">China<tspan fill="${RED}" font-weight="700"> -3% Y/Y</tspan></text>
        <text x="942" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${GREEN}" font-weight="700"> +21% Y/Y</tspan></text>
      </g>
      <text x="942" y="1262" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = Rest of World</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="942" y="1158" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">中国<tspan fill="${RED}" font-weight="700"> 同比 -3%</tspan></text>
        <text x="942" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${GREEN}" font-weight="700"> 同比 +21%</tspan></text>
      </g>
      <text x="942" y="1262" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = 中国以外地区</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q2-fy23',
    name: 'Nike · Q2 FY23',
    company: 'Nike',
    meta: {
      company: 'Nike',
      title: 'Nike Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending November 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nike-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 189,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2002,
      periodX: 2235,
      periodY: 229,
      periodNoteY: 272,
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
        x: 700, y: 257, width: 541, height: 301,
      },
      {
        key: 'nike-business-footwear',
        href: 'data/assets/raster-annotations/nike/business-footwear.png',
        x: 114, y: 537, width: 207, height: 140,
      },
      {
        key: 'nike-business-apparel',
        href: 'data/assets/raster-annotations/nike/business-apparel.png',
        x: 140, y: 763, width: 200, height: 164,
      },
      {
        key: 'nike-business-equipment',
        href: 'data/assets/raster-annotations/nike/business-equipment.png',
        x: 150, y: 962, width: 190, height: 152,
      },
      {
        key: 'nike-business-converse',
        href: 'data/assets/raster-annotations/nike/business-converse.png',
        x: 125, y: 1150, width: 215, height: 136,
      },
    ],

    layout: {
      scale: 23.68,
      nodes: {
        footwear: { x: 367, y: 544, width: 71, height: 200 },
        apparel: { x: 367, y: 890, width: 71, height: 88 },
        equipment: { x: 367, y: 1127, width: 71, height: 8 },
        converse: { x: 367, y: 1296, width: 71, height: 12 },
        revenue: { x: 907, y: 738, width: 70, height: 315 },
        gross_profit: { x: 1383, y: 646, width: 72, height: 134 },
        cost_of_sales: { x: 1386, y: 934, width: 71, height: 179 },
        operating_profit: { x: 1824, y: 580, width: 70, height: 36 },
        operating_expenses: { x: 1819, y: 769, width: 70, height: 95 },
        // Source draws this as a 5px origin face followed by an 80px hairline.
        // Keep the semantic face explicit and let the bound link own the run.
        other: { x: 2134, y: 596, width: 5, height: 5 },
        net_profit: { x: 2235, y: 501, width: 71, height: 30 },
        tax: { x: 2235, y: 704, width: 71, height: 6 },
        interest: { x: 2235, y: 804, width: 71, height: 1 },
        overhead: { x: 2235, y: 1019, width: 71, height: 69 },
        demand_creation: { x: 2235, y: 1277, width: 71, height: 24 },
      },
      labels: {
        footwear: {
          blocks: [
            {
              x: 402, top: 442, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+25% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 218, top: 679, anchor: 'middle', semanticRole: 'icon-caption', lines: [{ text: 'Footwear', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        apparel: {
          blocks: [
            {
              x: 396, top: 797, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 234, top: 935, anchor: 'middle', semanticRole: 'icon-caption', lines: [{ text: 'Apparel', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        equipment: {
          blocks: [
            {
              x: 402, top: 1034, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 230, top: 1100, anchor: 'middle', semanticRole: 'icon-caption', lines: [{ text: 'Equipment', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        converse: {
          blocks: [
            {
              x: 402, top: 1191, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 233, top: 1279, anchor: 'middle', semanticRole: 'icon-caption', lines: [{ text: 'Converse', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 942, top: 589, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: BLACK },
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1419, top: 462, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '43% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1421, top: 1124, anchor: 'middle', lineGap: 8,
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
              x: 1859, top: 401, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '12% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1854, top: 879, anchor: 'middle', lineGap: 8,
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
              x: 2179, top: 609, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Other', size: 27, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 27, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2428, top: 453, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '10% margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2409, top: 667, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2410, top: 777, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        overhead: {
          blocks: [
            {
              x: 2428, top: 1024, anchor: 'middle', lineGap: 8,
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
              x: 2428, top: 1225, anchor: 'middle', lineGap: 8,
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
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 8.5, notes: ['+25% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.8, notes: ['+4% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.4, notes: ['+7% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.6, notes: ['+5% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 13.3, notes: ['+17% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.7, notes: ['43% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 7.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.6, notes: ['12% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1, valueText: '$0.1B', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.3, notes: ['10% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.016, valueText: '($16M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'overhead', col: 5, order: 3, type: 'cost', label: 'Overhead', value: 3.0, valueText: '($3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'demand_creation', col: 5, order: 4, type: 'cost', label: ['Demand', 'Creation'], value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'footwear', target: 'revenue', value: 8.5, sourceWidth: 200, targetWidth: 207, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.8, sourceWidth: 88, targetWidth: 88, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.4, sourceWidth: 8, targetWidth: 8, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.6, sourceWidth: 12, targetWidth: 12, sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 5.7, sourceWidth: 134, targetWidth: 134, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 7.6, sourceWidth: 181, targetWidth: 179, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 1.6, sourceWidth: 36, targetWidth: 36, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.1, sourceWidth: 98, targetWidth: 95, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      /* Waterfall region: the drawn op-profit -> net-profit band is the
       * $1.3B net bar minus the $0.1B "Other" hairline that backfills the
       * bar bottom from below. */
      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 29, targetWidth: 28, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 6, targetWidth: 6, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.016, sourceWidth: 1, targetWidth: 1, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.1, sourceWidth: 5, targetWidth: 2, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'overhead', value: 3.0, sourceWidth: 71, targetWidth: 69, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.1, sourceWidth: 24, targetWidth: 24, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['RoW'],
      zh: {
        name: 'Nike · 2023 财年第二季度',
        meta: {
          title: 'Nike 2023 财年第二季度利润表',
          period: '2023 财年第二季度',
          periodNote: '截至 2022 年 11 月',
          titleTextLength: 1900,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 +25%'] },
          apparel: { label: '服装', notes: ['同比 +4%'] },
          equipment: { label: '装备', notes: ['同比 +7%'] },
          converse: { notes: ['同比 +5%'] },
          revenue: { label: '收入', notes: ['同比 +17%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 43%', '同比 (3 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          overhead: { label: '管理费用' },
          demand_creation: { label: ['需求', '创造费用'] },
        },
        layout: {
          labels: {
            footwear: {
              blocks: [
                {
                  x: 402, top: 442, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +25%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 218, top: 679, anchor: 'middle', semanticRole: 'icon-caption', lines: [{ text: '鞋类', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            apparel: {
              blocks: [
                {
                  x: 396, top: 797, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +4%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 234, top: 935, anchor: 'middle', semanticRole: 'icon-caption', lines: [{ text: '服装', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            equipment: {
              blocks: [
                {
                  x: 402, top: 1033, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +7%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 230, top: 1100, anchor: 'middle', semanticRole: 'icon-caption', lines: [{ text: '装备', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            converse: {
              blocks: [
                {
                  x: 402, top: 1191, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +5%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 233, top: 1279, anchor: 'middle', semanticRole: 'icon-caption', lines: [{ text: 'Converse', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 942, top: 589, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800, color: BLACK },
                    { text: '$value', size: 38, weight: 400, color: BLACK },
                    { text: '同比 +17%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1419, top: 462, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 43%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_sales: {
              blocks: [
                {
                  x: 1421, top: 1124, anchor: 'middle', lineGap: 8,
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
                  x: 1859, top: 401, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 12%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1854, top: 879, anchor: 'middle', lineGap: 8,
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
                  x: 2179, top: 609, anchor: 'middle', lineGap: 5,
                  lines: [
                    { text: '其他', size: 27, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 27, weight: 400, color: GREEN_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2428, top: 453, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 10%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2409, top: 667, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 2410, top: 777, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            overhead: {
              blocks: [
                {
                  x: 2428, top: 1024, anchor: 'middle', lineGap: 8,
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
                  x: 2428, top: 1225, anchor: 'middle', lineGap: 8,
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
