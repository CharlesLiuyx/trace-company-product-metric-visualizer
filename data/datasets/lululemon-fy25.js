/* ====================================================================
 * lululemon athletica - FY25 income statement ($B)
 * Reconstructed from input/processed/lululemon-fy25.png as a fixed
 * d3-sankey layout. The lululemon omega mark above the revenue hub is a
 * vector meta.logoSvg; the "lululemon" wordmark beside Operated stores
 * and the three app-screenshot phones beside Direct to consumer are
 * approved runtime raster annotations reused from the validated
 * lululemon-q1-fy26 crop/runtime assets because the source clusters are
 * materially similar.
 *
 * Source-chart quirks mirrored here (see data/income-statements/lululemon.js):
 * - Operated stores / Direct to consumer / Other revenue and Revenue are
 *   drawn as solid black bars (not the engine's default teal/near-black
 *   source/hub palette); their outgoing flow bands are grey, not black.
 * - "Other $28M" is a green non-operating hairline that backfills the
 *   net-profit bar from below, mirroring the source's waterfall style
 *   (same pattern as nike-q4-fy26 / intuit-q3-fy26). It rounds to $0.0B;
 *   a small internal value keeps the waterfall (operating profit + other
 *   = net profit + tax) balanced.
 * - "Amortization ($7M)" is a red hairline splitting off the operating
 *   expenses bar toward the lower-right; it rounds to $0.0B, so SG&A
 *   carries essentially the entire operating-expense band.
 * - Published rounding: operating profit $2.2B + other $28M - tax $0.7B
 *   reconciles to the $1.6B net-profit display after source rounding; the
 *   largest band in each multi-band node absorbs small pixel shortfalls so
 *   no background gap shows.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLACK = '#000000';
  const GREY_LINK = '#858585';
  const GREEN = '#2ca02c';        /* dark-green node fill (sampled from source) */
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';   /* light-green flow band (sampled from source) */
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  /* lululemon omega mark, traced from the source logo and scaled to a
   * 240x240 viewBox (circle center 119.5,118.9 r120). */
  const OMEGA_PATH =
    'M104.4,24.6 L135.6,24.6 L160.4,28.9 L183.0,39.6 L193.7,52.5 L197.0,62.1 L195.9,85.7 ' +
    'L190.5,101.8 L170.0,140.4 L165.7,153.2 L166.8,170.4 L177.6,182.1 L184.0,185.4 L198.0,185.4 ' +
    'L212.0,180.0 L198.0,196.1 L189.4,201.4 L179.7,204.6 L164.7,204.6 L157.1,202.5 L142.1,193.9 ' +
    'L130.2,178.9 L129.1,159.6 L131.3,151.1 L146.4,113.6 L156.1,77.1 L156.1,65.4 L151.7,53.6 ' +
    'L141.0,43.9 L131.3,40.7 L117.3,39.6 L99.0,43.9 L88.3,53.6 L83.9,65.4 L83.9,77.1 L93.6,113.6 ' +
    'L108.7,151.1 L110.9,159.6 L109.8,178.9 L97.9,193.9 L82.9,202.5 L75.3,204.6 L60.3,204.6 ' +
    'L50.6,201.4 L42.0,196.1 L28.0,180.0 L42.0,185.4 L56.0,185.4 L62.4,182.1 L73.2,170.4 ' +
    'L74.3,153.2 L70.0,140.4 L49.5,101.8 L44.1,85.7 L43.0,62.1 L46.3,52.5 L57.0,39.6 L79.6,28.9 Z';

  const logoSvg =
    `<circle cx="119.5" cy="118.9" r="120" fill="#d6001c"/>` +
    `<path d="${OMEGA_PATH}" fill="#ffffff"/>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      <path d="M937 1058 L905 1117 L969 1117 Z" fill="#f2f2f2" stroke="#9a9a9a" stroke-width="3"/>
      <rect x="748" y="1117" width="378" height="159" rx="24" fill="#f2f2f2" stroke="#9a9a9a" stroke-width="3"/>
      <text x="937" y="1158" text-anchor="middle" font-size="30" fill="${NOTE}"><tspan font-weight="800" fill="#333333">Women</tspan> +5% Y/Y</text>
      <text x="937" y="1198" text-anchor="middle" font-size="30" fill="${NOTE}"><tspan font-weight="800" fill="#333333">Men</tspan> +4% Y/Y</text>
      <text x="937" y="1238" text-anchor="middle" font-size="30" fill="${NOTE}"><tspan font-weight="800" fill="#333333">Other</tspan> +8% Y/Y</text>
      <text x="937" y="1301" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">Other: Accessories, Footwear</text>

      <g>
        <rect x="1832" y="1196" width="232" height="153" rx="24" fill="#111111"/>
        <text x="1948" y="1258" text-anchor="middle" font-size="32" font-weight="800" fill="#ffffff">796 stores</text>
        <text x="1948" y="1300" text-anchor="middle" font-size="32" font-weight="800" fill="#ffffff">+4% Y/Y</text>
      </g>
      <g>
        <rect x="2082" y="1196" width="494" height="153" rx="24" fill="#111111"/>
        <text x="2329" y="1245" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">Comparable sales +2% Y/Y</text>
        <text x="2329" y="1287" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">Americas -3% Y/Y</text>
        <text x="2329" y="1329" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">International +15% Y/Y</text>
      </g>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <path d="M937 1058 L905 1117 L969 1117 Z" fill="#f2f2f2" stroke="#9a9a9a" stroke-width="3"/>
      <rect x="748" y="1117" width="378" height="159" rx="24" fill="#f2f2f2" stroke="#9a9a9a" stroke-width="3"/>
      <text x="937" y="1158" text-anchor="middle" font-size="30" fill="${NOTE}"><tspan font-weight="800" fill="#333333">女装</tspan> 同比 +5%</text>
      <text x="937" y="1198" text-anchor="middle" font-size="30" fill="${NOTE}"><tspan font-weight="800" fill="#333333">男装</tspan> 同比 +4%</text>
      <text x="937" y="1238" text-anchor="middle" font-size="30" fill="${NOTE}"><tspan font-weight="800" fill="#333333">其他</tspan> 同比 +8%</text>
      <text x="937" y="1301" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">其他：配件、鞋类</text>

      <g>
        <rect x="1832" y="1196" width="232" height="153" rx="24" fill="#111111"/>
        <text x="1948" y="1258" text-anchor="middle" font-size="32" font-weight="800" fill="#ffffff">796 家门店</text>
        <text x="1948" y="1300" text-anchor="middle" font-size="32" font-weight="800" fill="#ffffff">同比 +4%</text>
      </g>
      <g>
        <rect x="2082" y="1196" width="494" height="153" rx="24" fill="#111111"/>
        <text x="2329" y="1245" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">同店销售 同比 +2%</text>
        <text x="2329" y="1287" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">美洲 同比 -3%</text>
        <text x="2329" y="1329" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">国际 同比 +15%</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lululemon-fy25',
    name: 'lululemon · FY25',
    company: 'lululemon athletica',
    meta: {
      company: 'lululemon athletica',
      title: 'Lululemon FY25 Income Statement',
      period: 'FY25',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/lululemon-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 175,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2360,
      periodX: 2440,
      periodY: 278,
      periodNoteY: 320,
      logoWidth: 224,
      logoHeight: 224,
      logoX: 831,
      logoY: 258,
      logoViewBox: '0 0 240 240',
      logoSvg,
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
        key: 'lululemon-operated-stores-wordmark',
        href: 'data/assets/raster-annotations/lululemon/operated-stores-wordmark.png',
        x: 56, y: 495, width: 344, height: 78,
      },
      {
        key: 'lululemon-direct-to-consumer-phones',
        href: 'data/assets/raster-annotations/lululemon/direct-to-consumer-phones.png',
        x: 84, y: 666, width: 316, height: 186,
      },
    ],

    layout: {
      scale: 29.7,
      nodes: {
        operated_stores: { x: 437, y: 488, width: 71, height: 151 },
        direct_to_consumer: { x: 437, y: 802, width: 71, height: 146 },
        other_revenue: { x: 437, y: 1111, width: 71, height: 33 },
        revenue: { x: 904, y: 697, width: 71, height: 330 },
        gross_profit: { x: 1371, y: 582, width: 71, height: 187 },
        cost_of_sales: { x: 1371, y: 994, width: 71, height: 143 },
        operating_profit: { x: 1838, y: 497, width: 71, height: 65 },
        operating_expenses: { x: 1838, y: 733, width: 72, height: 120 },
        other: { x: 2190, y: 484, width: 72, height: 2 },
        net_profit: { x: 2305, y: 380, width: 72, height: 45 },
        tax: { x: 2305, y: 626, width: 72, height: 19 },
        sga: { x: 2305, y: 790, width: 72, height: 120 },
        amortization: { x: 2305, y: 1067, width: 72, height: 1 },
      },
      labels: {
        operated_stores: {
          blocks: [
            {
              x: 472, top: 397, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 234, top: 575, anchor: 'middle', lines: [{ text: 'Operated stores', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        direct_to_consumer: {
          blocks: [
            {
              x: 472, top: 710, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 234, top: 858, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Direct to', size: 40, weight: 800, color: BLACK },
                { text: 'consumer', size: 40, weight: 800, color: BLACK },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 472, top: 1019, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 472, top: 1153, anchor: 'middle',
              lines: [
                { text: 'Other revenue', size: 40, weight: 800, color: BLACK },
              ],
            },
            {
              x: 472, top: 1211, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Outlets, temporary locations,', size: 24, weight: 500, color: NOTE },
                { text: 'wholesale accounts, license and', size: 24, weight: 500, color: NOTE },
                { text: 'supply arrangement', size: 24, weight: 500, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 939, top: 548, anchor: 'middle', lineGap: 9,
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
              x: 1406, top: 397, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '57% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1406, top: 1158, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of sales', size: 40, weight: 800, color: RED_LABEL },
                { text: '($4.8B)', size: 38, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1857, top: 314, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '20% margin', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1874, top: 872, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
                { text: '($4.1B)', size: 38, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2226, top: 505, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 32, weight: 800, color: GREEN_LABEL },
                { text: '$28M', size: 32, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2500, top: 340, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '14% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2500, top: 587, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 40, weight: 800, color: RED_LABEL },
                { text: '($0.7B)', size: 38, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2500, top: 780, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 40, weight: 800, color: RED_LABEL },
                { text: '($4.1B)', size: 38, weight: 400, color: RED_LABEL },
                { text: '37% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2513, top: 1040, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Amortization', size: 34, weight: 800, color: RED_LABEL },
                { text: '($7M)', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'operated_stores', col: 0, order: 0, type: 'source', label: 'Operated stores', value: 5.1, valueText: '$5.1B', notes: ['+1% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'direct_to_consumer', col: 0, order: 1, type: 'source', label: ['Direct to', 'consumer'], value: 4.9, valueText: '$4.9B', notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other revenue', value: 1.1, valueText: '$1.1B', notes: ['+12% Y/Y', 'Outlets, temporary locations, wholesale accounts, license and supply arrangement'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 11.1, valueText: '$11.1B', notes: ['+5% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.3, notes: ['57% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 4.8, valueText: '($4.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.2, notes: ['20% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.1, valueText: '($4.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.028, valueText: '$28M', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.6, valueText: '$1.6B', notes: ['14% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.7, valueText: '($0.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 4.1, valueText: '($4.1B)', notes: ['37% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 5, order: 3, type: 'cost', label: 'Amortization', value: 0.007, valueText: '($7M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      /* Revenue segment widths come from the source bboxes. They total the
       * 330px hub; 1px published-rounding differences are absorbed into the
       * largest/other bands so no background gap shows on the hub edge. */
      { source: 'operated_stores', target: 'revenue', value: 5.1, width: 151, sourceOrder: 0, targetOrder: 0 },
      { source: 'direct_to_consumer', target: 'revenue', value: 4.9, width: 146, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 1.1, width: 33, sourceOrder: 0, targetOrder: 2 },

      /* Revenue -> gross profit (green, top) + cost of sales (salmon,
       * bottom). Measured hub right-edge sockets: green 187px, salmon 143px. */
      { source: 'revenue', target: 'gross_profit', value: 6.3, width: 187, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 4.8, width: 143, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      /* Gross profit -> operating profit (top, 43px) + operating expenses
       * (salmon, remainder). */
      { source: 'gross_profit', target: 'operating_profit', value: 2.2, width: 66, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.1, width: 121, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      /* Waterfall region: the drawn op-profit -> net-profit band is the
       * $1.6B net bar minus the $28M "Other" hairline that backfills the
       * bar bottom from below (no drawn source bar in the original). The
       * op-profit bar splits into net (46px) + tax (19px), closing the
       * right-edge socket with no visible gap. */
      { source: 'operating_profit', target: 'net_profit', value: 1.6, percent: 72.7, width: 46, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.7, percent: 31.8, width: 19, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.028, width: 2, sourceOrder: 0, targetOrder: 1 },

      /* Operating expenses -> SG&A (essentially the whole bar) +
       * Amortization ($7M hairline). SG&A absorbs the rounding so the
       * band fills the bar's full height with no visible gap. */
      { source: 'operating_expenses', target: 'sga', value: 4.1, width: 119, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.007, width: 1, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'lululemon · 2025 财年',
        meta: {
          title: 'Lululemon 2025 财年利润表',
          period: '2025 财年',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1900,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          operated_stores: { label: '自营门店', notes: ['同比 +1%'] },
          direct_to_consumer: { label: ['直接面向', '消费者'], notes: ['同比 +8%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +12%', '奥特莱斯、临时店铺、批发客户、授权与供应安排'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 57%', '同比 (3 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 (4 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 14%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          sga: { label: '销售及管理费用', notes: ['占收入 37%', '同比 +1 个百分点'] },
          amortization: { label: '摊销' },
        },
        layout: {
          labels: {
            operated_stores: {
              blocks: [
                {
                  x: 472, top: 397, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLACK },
                    { text: '同比 +1%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 234, top: 575, anchor: 'middle', lines: [{ text: '自营门店', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            direct_to_consumer: {
              blocks: [
                {
                  x: 472, top: 710, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLACK },
                    { text: '同比 +8%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 234, top: 858, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '直接面向', size: 40, weight: 800, color: BLACK },
                    { text: '消费者', size: 40, weight: 800, color: BLACK },
                  ],
                },
              ],
            },
            other_revenue: {
              blocks: [
                {
                  x: 472, top: 1019, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLACK },
                    { text: '同比 +12%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 472, top: 1153, anchor: 'middle',
                  lines: [
                    { text: '其他收入', size: 40, weight: 800, color: BLACK },
                  ],
                },
                {
                  x: 472, top: 1211, anchor: 'middle', lineGap: 5,
                  lines: [
                    { text: '奥特莱斯、临时店铺、', size: 24, weight: 500, color: NOTE },
                    { text: '批发客户、授权与', size: 24, weight: 500, color: NOTE },
                    { text: '供应安排', size: 24, weight: 500, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 939, top: 548, anchor: 'middle', lineGap: 9,
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
                  x: 1406, top: 397, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 57%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_sales: {
              blocks: [
                {
                  x: 1406, top: 1158, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售成本', size: 40, weight: 800, color: RED_LABEL },
                    { text: '($4.8B)', size: 38, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1857, top: 314, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 20%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1874, top: 872, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '运营', size: 40, weight: 800, color: RED_LABEL },
                    { text: '费用', size: 40, weight: 800, color: RED_LABEL },
                    { text: '($4.1B)', size: 38, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2226, top: 505, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 32, weight: 800, color: GREEN_LABEL },
                    { text: '$28M', size: 32, weight: 400, color: GREEN_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2500, top: 340, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 14%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2500, top: 587, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 40, weight: 800, color: RED_LABEL },
                    { text: '($0.7B)', size: 38, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2500, top: 780, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售及管理费用', size: 33, weight: 800, color: RED_LABEL },
                    { text: '($4.1B)', size: 38, weight: 400, color: RED_LABEL },
                    { text: '占收入 37%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: 2513, top: 1040, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '摊销', size: 34, weight: 800, color: RED_LABEL },
                    { text: '($7M)', size: 34, weight: 400, color: RED_LABEL },
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
