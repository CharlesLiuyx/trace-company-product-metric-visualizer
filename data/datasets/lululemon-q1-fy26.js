/* ====================================================================
 * lululemon athletica - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/lululemon-q1-fy26.png as a fixed
 * d3-sankey layout. The lululemon omega mark above the revenue hub is a
 * vector meta.logoSvg; the "lululemon" wordmark beside Operated stores
 * and the three app-screenshot phones beside Direct to consumer are
 * approved runtime raster annotations (extracted via
 * input/icon-crop-specs/lululemon-q1-fy26.json).
 *
 * Source-chart quirks mirrored here (see data/income-statements.js):
 * - Operated stores / Direct to consumer / Other revenue and Revenue are
 *   drawn as solid black bars (not the engine's default teal/near-black
 *   source/hub palette); their outgoing flow bands are grey, not black.
 * - "Other $9M" is a green non-operating hairline that backfills the
 *   net-profit bar from below, mirroring the source's waterfall style
 *   (same pattern as nike-q4-fy26 / intuit-q3-fy26). It rounds to $0.0B;
 *   a small internal value keeps the waterfall (operating profit + other
 *   = net profit + tax) balanced.
 * - "Amortization ($2M)" is a red hairline splitting off the operating
 *   expenses bar toward the lower-right; it rounds to $0.0B, so SG&A
 *   carries essentially the entire operating-expense band.
 * - Published rounding: revenue segments $1.2B + $1.1B + $0.3B = $2.6B
 *   vs the $2.5B hub, and gross-profit / operating-expense splits are
 *   drawn as continuous masses; the largest band in each multi-band node
 *   absorbs the few-px shortfall so no background gap shows.
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
      <path d="M937 1089 L905 1148 L969 1148 Z" fill="#f2f2f2" stroke="#9a9a9a" stroke-width="3"/>
      <rect x="748" y="1148" width="378" height="159" rx="24" fill="#f2f2f2" stroke="#9a9a9a" stroke-width="3"/>
      <text x="937" y="1189" text-anchor="middle" font-size="30" fill="${NOTE}"><tspan font-weight="800" fill="#333333">Women</tspan> +4% Y/Y</text>
      <text x="937" y="1229" text-anchor="middle" font-size="30" fill="${NOTE}"><tspan font-weight="800" fill="#333333">Men</tspan> +7% Y/Y</text>
      <text x="937" y="1269" text-anchor="middle" font-size="30" fill="${NOTE}"><tspan font-weight="800" fill="#333333">Other</tspan> (1%) Y/Y</text>
      <text x="937" y="1332" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">Other: Accessories, Footwear</text>

      <g>
        <rect x="1832" y="1196" width="232" height="153" rx="24" fill="#111111"/>
        <text x="1948" y="1258" text-anchor="middle" font-size="32" font-weight="800" fill="#ffffff">816 stores</text>
        <text x="1948" y="1300" text-anchor="middle" font-size="32" font-weight="800" fill="#ffffff">+6% Y/Y</text>
      </g>
      <g>
        <rect x="2082" y="1196" width="494" height="153" rx="24" fill="#111111"/>
        <text x="2329" y="1245" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">Comparable sales (2%) Y/Y</text>
        <text x="2329" y="1287" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">Americas -3% Y/Y</text>
        <text x="2329" y="1329" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">International +22% Y/Y</text>
      </g>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <path d="M937 1089 L905 1148 L969 1148 Z" fill="#f2f2f2" stroke="#9a9a9a" stroke-width="3"/>
      <rect x="748" y="1148" width="378" height="159" rx="24" fill="#f2f2f2" stroke="#9a9a9a" stroke-width="3"/>
      <text x="937" y="1189" text-anchor="middle" font-size="30" fill="${NOTE}"><tspan font-weight="800" fill="#333333">女装</tspan> 同比 +4%</text>
      <text x="937" y="1229" text-anchor="middle" font-size="30" fill="${NOTE}"><tspan font-weight="800" fill="#333333">男装</tspan> 同比 +7%</text>
      <text x="937" y="1269" text-anchor="middle" font-size="30" fill="${NOTE}"><tspan font-weight="800" fill="#333333">其他</tspan> 同比 (1%)</text>
      <text x="937" y="1332" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">其他：配件、鞋类</text>

      <g>
        <rect x="1832" y="1196" width="232" height="153" rx="24" fill="#111111"/>
        <text x="1948" y="1258" text-anchor="middle" font-size="32" font-weight="800" fill="#ffffff">816 家门店</text>
        <text x="1948" y="1300" text-anchor="middle" font-size="32" font-weight="800" fill="#ffffff">同比 +6%</text>
      </g>
      <g>
        <rect x="2082" y="1196" width="494" height="153" rx="24" fill="#111111"/>
        <text x="2329" y="1245" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">同店销售 同比 (2%)</text>
        <text x="2329" y="1287" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">美洲 同比 -3%</text>
        <text x="2329" y="1329" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">国际 同比 +22%</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lululemon-q1-fy26',
    name: 'lululemon · Q1 FY26',
    company: 'lululemon athletica',
    meta: {
      company: 'lululemon athletica',
      title: 'Lululemon Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/lululemon-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 175,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2360,
      periodX: 189,
      periodY: 258,
      periodNoteY: 300,
      logoWidth: 224,
      logoHeight: 224,
      logoX: 831,
      logoY: 280,
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
        x: 56, y: 470, width: 344, height: 78,
      },
      {
        key: 'lululemon-direct-to-consumer-phones',
        href: 'data/assets/raster-annotations/lululemon/direct-to-consumer-phones.png',
        x: 84, y: 704, width: 316, height: 186,
      },
    ],

    layout: {
      scale: 163,
      nodes: {
        operated_stores: { x: 436, y: 450, width: 72, height: 193 },
        direct_to_consumer: { x: 436, y: 830, width: 72, height: 161 },
        other_revenue: { x: 436, y: 1137, width: 72, height: 44 },
        revenue: { x: 903, y: 689, width: 72, height: 400 },
        gross_profit: { x: 1370, y: 574, width: 73, height: 216 },
        cost_of_sales: { x: 1370, y: 1013, width: 73, height: 183 },
        operating_profit: { x: 1838, y: 459, width: 72, height: 44 },
        operating_expenses: { x: 1837, y: 742, width: 74, height: 172 },
        other: { x: 2093, y: 393, width: 80, height: 2 },
        net_profit: { x: 2305, y: 339, width: 72, height: 30 },
        tax: { x: 2304, y: 580, width: 73, height: 14 },
        sga: { x: 2304, y: 847, width: 73, height: 171 },
        amortization: { x: 2304, y: 1122, width: 73, height: 3 },
      },
      labels: {
        operated_stores: {
          blocks: [
            {
              x: 472, top: 358, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+3% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 234, top: 561, anchor: 'middle', lines: [{ text: 'Operated stores', size: 40, weight: 800, color: BLACK }] },
          ],
        },
        direct_to_consumer: {
          blocks: [
            {
              x: 472, top: 737, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 234, top: 966, anchor: 'middle', lineGap: 6,
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
              x: 472, top: 1044, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 234, top: 1200, anchor: 'middle', lineGap: 5,
              lines: [
                { text: 'Other revenue', size: 40, weight: 800, color: BLACK },
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
              x: 939, top: 540, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: BLACK },
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1406, top: 388, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '54% margin', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1406, top: 1216, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of sales', size: 40, weight: 800, color: RED_LABEL },
                { text: '($1.1B)', size: 38, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1857, top: 273, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '11% margin', size: 29, weight: 400, color: NOTE },
                { text: '(7pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1874, top: 940, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
                { text: '($1.1B)', size: 38, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2242, top: 418, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 32, weight: 800, color: GREEN_LABEL },
                { text: '$9M', size: 32, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2500, top: 300, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '8% margin', size: 29, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2500, top: 550, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 40, weight: 800, color: RED_LABEL },
                { text: '($0.1B)', size: 38, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2500, top: 912, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 40, weight: 800, color: RED_LABEL },
                { text: '($1.1B)', size: 38, weight: 400, color: RED_LABEL },
                { text: '43% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2513, top: 1100, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Amortization', size: 34, weight: 800, color: RED_LABEL },
                { text: '($2M)', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'operated_stores', col: 0, order: 0, type: 'source', label: 'Operated stores', value: 1.2, valueText: '$1.2B', notes: ['+3% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'direct_to_consumer', col: 0, order: 1, type: 'source', label: ['Direct to', 'consumer'], value: 1.1, valueText: '$1.1B', notes: ['+4% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other revenue', value: 0.3, valueText: '$0.3B', notes: ['+9% Y/Y', 'Outlets, temporary locations, wholesale accounts, license and supply arrangement'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.5, valueText: '$2.5B', notes: ['+4% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.3, notes: ['54% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 1.1, valueText: '($1.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.3, notes: ['11% margin', '(7pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.1, valueText: '($1.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.009, valueText: '$9M', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.2, valueText: '$0.2B', notes: ['8% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 1.1, valueText: '($1.1B)', notes: ['43% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 5, order: 3, type: 'cost', label: 'Amortization', value: 0.002, valueText: '($2M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      /* Operated stores / Direct to consumer / Other revenue sum to $2.6B
       * vs the $2.5B revenue bar (published rounding). The reference shows
       * the three incoming bands merging into one continuous mass that
       * fills the hub's full height with no gap, so the largest band
       * (operated stores) is trimmed 2px so 193+161+44 -> 191+161+44 = 396
       * ... instead we keep the measured heights and let operated_stores
       * absorb the tiny overflow at its own bar, which the reference shows
       * as a continuous grey mass. */
      { source: 'operated_stores', target: 'revenue', value: 1.2, width: 194, sourceOrder: 0, targetOrder: 0 },
      { source: 'direct_to_consumer', target: 'revenue', value: 1.1, width: 161, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.3, width: 45, sourceOrder: 0, targetOrder: 2 },

      /* Revenue -> gross profit (green, top) + cost of sales (salmon,
       * bottom). Measured hub right-edge sockets: green y689-904 (215px),
       * salmon y906-1088 (183px). */
      { source: 'revenue', target: 'gross_profit', value: 1.3, width: 216, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1.1, width: 183, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      /* Gross profit -> operating profit (top, 43px) + operating expenses
       * (salmon, remainder). */
      { source: 'gross_profit', target: 'operating_profit', value: 0.3, width: 44, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.0, width: 172, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      /* Waterfall region: the drawn op-profit -> net-profit band is the
       * $0.2B net bar minus the $9M "Other" hairline that backfills the
       * bar bottom from below (no drawn source bar in the original). The
       * op-profit bar (44px) splits into net (29px) + tax (14px). */
      { source: 'operating_profit', target: 'net_profit', value: 0.2, percent: 66.7, width: 28, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, percent: 33.3, width: 14, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.009, width: 2, sourceOrder: 0, targetOrder: 1 },

      /* Operating expenses -> SG&A (essentially the whole bar, 170px) +
       * Amortization ($2M hairline). SG&A absorbs the rounding so the
       * band fills the bar's full height with no visible gap. */
      { source: 'operating_expenses', target: 'sga', value: 1.1, width: 170, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.002, width: 2, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'lululemon · 2026 财年第一季度',
        meta: {
          title: 'Lululemon 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 2100,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          operated_stores: { label: '自营门店', notes: ['同比 +3%'] },
          direct_to_consumer: { label: ['直接面向', '消费者'], notes: ['同比 +4%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +9%', '奥特莱斯、临时店铺、批发客户、授权与供应安排'] },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 (4 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 (7 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 (5 个百分点)'] },
          tax: { label: '税费' },
          sga: { label: '销售及管理费用', notes: ['占收入 43%', '同比 +3 个百分点'] },
          amortization: { label: '摊销' },
        },
        layout: {
          labels: {
            operated_stores: {
              blocks: [
                {
                  x: 472, top: 358, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLACK },
                    { text: '同比 +3%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 234, top: 561, anchor: 'middle', lines: [{ text: '自营门店', size: 40, weight: 800, color: BLACK }] },
              ],
            },
            direct_to_consumer: {
              blocks: [
                {
                  x: 472, top: 737, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLACK },
                    { text: '同比 +4%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 234, top: 966, anchor: 'middle', lineGap: 6,
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
                  x: 472, top: 1044, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLACK },
                    { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 234, top: 1200, anchor: 'middle', lineGap: 5,
                  lines: [
                    { text: '其他收入', size: 40, weight: 800, color: BLACK },
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
                  x: 939, top: 540, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800, color: BLACK },
                    { text: '$value', size: 38, weight: 400, color: BLACK },
                    { text: '同比 +4%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1406, top: 388, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 54%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_sales: {
              blocks: [
                {
                  x: 1406, top: 1216, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售成本', size: 40, weight: 800, color: RED_LABEL },
                    { text: '($1.1B)', size: 38, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1857, top: 273, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 11%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (7 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1874, top: 940, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '运营', size: 40, weight: 800, color: RED_LABEL },
                    { text: '费用', size: 40, weight: 800, color: RED_LABEL },
                    { text: '($1.1B)', size: 38, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2242, top: 418, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 32, weight: 800, color: GREEN_LABEL },
                    { text: '$9M', size: 32, weight: 400, color: GREEN_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2500, top: 300, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 8%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2500, top: 550, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 40, weight: 800, color: RED_LABEL },
                    { text: '($0.1B)', size: 38, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2500, top: 912, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售及管理费用', size: 33, weight: 800, color: RED_LABEL },
                    { text: '($1.1B)', size: 38, weight: 400, color: RED_LABEL },
                    { text: '占收入 43%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: 2513, top: 1100, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '摊销', size: 34, weight: 800, color: RED_LABEL },
                    { text: '($2M)', size: 34, weight: 400, color: RED_LABEL },
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
