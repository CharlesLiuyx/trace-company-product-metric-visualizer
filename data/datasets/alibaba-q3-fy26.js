/* ====================================================================
 * Alibaba - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/alibaba-q3-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const ORANGE = '#ff5a00';
  const ORANGE_LINK = '#ffb28a';
  const GREEN = '#289321';
  const GREEN_LABEL = '#118e46';
  const GREEN_LINK = '#a7d09f';
  const RED = '#d31300';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e99485';
  const NOTE = '#606164';
  const TITLE = '#124f78';
  const RIGHT_LABEL_X = 2325;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const ANNOTATION_SX = 2667 / 2980;
  const ANNOTATION_SY = 1500 / 1678;

  const annotations = `
    <g transform="scale(${ANNOTATION_SX} ${ANNOTATION_SY})">
      <g font-family="Montserrat,Arial,sans-serif">
        <g transform="translate(760 352)" fill="${ORANGE}">
          <path d="M24 47 C52 4 137 -7 139 34 C141 72 84 95 36 89 C10 86 -8 70 4 54 C18 35 50 25 86 23 C54 29 32 40 24 55 C15 76 63 78 96 61 C122 47 130 27 112 19 C86 6 45 19 24 47 Z"/>
          <path d="M72 43 l34 -13 -8 23 -10 -8 c-18 10 -36 14 -54 11 16 -3 31 -7 45 -16 Z" fill="#ffffff"/>
          <text x="168" y="92" font-family="Arial,sans-serif" font-size="124" font-weight="700">Alibaba</text>
        </g>

        <g font-family="Arial,sans-serif" font-weight="700">
          <text x="83" y="494" text-anchor="middle" font-size="43" fill="${ORANGE}">淘宝</text>
          <text x="83" y="526" text-anchor="middle" font-size="23" fill="${ORANGE}">Taobao</text>
          <text x="84" y="577" text-anchor="middle" font-size="40" fill="#ff1645">TMALL</text>

          <g transform="translate(10 748) scale(0.72)">
            <path d="M0 18 30 0 60 18 60 55 30 73 0 55Z" fill="#ff7b00"/>
            <path d="M30 0 60 18 30 36 0 18Z" fill="#ffb000"/>
            <path d="M30 36 60 18 60 55 30 73Z" fill="#d91dff"/>
          </g>
          <text x="66" y="790" font-size="29" fill="#2a278f">Lazada</text>
          <text x="10" y="846" font-size="31" fill="${ORANGE}" font-weight="500">AliExpress</text>
          <text x="20" y="904" font-size="39" fill="#242424" font-weight="500">trendyol</text>
          <rect x="129" y="864" width="35" height="17" rx="3" fill="${ORANGE}"/>
          <text x="147" y="878" text-anchor="middle" font-size="12" fill="#ffffff">.com</text>

          <g transform="translate(6 1098) scale(0.72)">${BUSINESS_ICONS.alibabaCloud || ''}</g>

          <g transform="translate(20 1190) scale(0.92)">${BUSINESS_ICONS.hema || ''}</g>
          <text x="18" y="1322" font-size="41" fill="#ff4081">YOU</text>
          <text x="105" y="1322" font-size="41" fill="#2db7ea">KU</text>
          <text x="18" y="1372" font-size="33" fill="#0068ff">CAI</text>
          <text x="18" y="1410" font-size="33" fill="#0068ff">NIAO</text>
          <text x="100" y="1410" font-size="26" fill="#0068ff">菜鸟</text>
          <g transform="translate(64 1418) scale(0.30)">${BUSINESS_ICONS.amap || ''}</g>
        </g>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q3-fy26',
    name: 'Alibaba · Q3 FY26',
    company: 'Alibaba',
    meta: {
      company: 'Alibaba',
      title: 'Alibaba Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 200,
      titleSize: 130,
      titleWeight: 800,
      titleTextLength: 2190,
      periodX: 2448,
      periodY: 302,
      periodNoteY: 345,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#efefef',
      titleColor: TITLE,
      subtitleColor: '#56575a',
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 38, value: 37, note: 26, lineGap: 7 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 7.95,
      nodes: {
        china_ecommerce: { x: 454, y: 403, width: 69, height: 181 },
        international_digital_commerce: { x: 454, y: 738, width: 69, height: 44 },
        cloud: { x: 454, y: 941, width: 69, height: 48 },
        all_others: { x: 454, y: 1155, width: 69, height: 77 },
        gross_revenue: { x: 812, y: 558, width: 69, height: 352 },
        revenue: { x: 1170, y: 674, width: 69, height: 324 },
        intersegment_eliminations: { x: 1170, y: 1102, width: 68, height: 27 },
        gross_profit: { x: 1529, y: 555, width: 68, height: 129 },
        cost_of_revenue: { x: 1528, y: 874, width: 69, height: 192 },
        other_operating_income: { x: 1817, y: 557, width: 68, height: 2 },
        operating_profit: { x: 1894, y: 490, width: 68, height: 10 },
        operating_expenses: { x: 1886, y: 665, width: 69, height: 119 },
        investments: { x: 2139, y: 443, width: 67, height: 14 },
        net_profit: { x: 2244, y: 400, width: 69, height: 16 },
        tax: { x: 2244, y: 571, width: 69, height: 9 },
        sm: { x: 2244, y: 712, width: 69, height: 81 },
        product_development: { x: 2244, y: 939, width: 69, height: 17 },
        amortization_impairment: { x: 2244, y: 1099, width: 69, height: 11 },
        ga: { x: 2244, y: 1249, width: 69, height: 8 },
      },
      labels: {
        china_ecommerce: {
          blocks: [
            {
              x: 491, top: 318, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+6% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 434, top: 413, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'China', size: 38, weight: 800 },
                { text: 'E-commerce', size: 38, weight: 800 },
                { text: '22% adjusted margin', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        international_digital_commerce: {
          blocks: [
            {
              x: 491, top: 653, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+4% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 434, top: 653, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'International', size: 38, weight: 800 },
                { text: 'Digital', size: 38, weight: 800 },
                { text: 'Commerce', size: 38, weight: 800 },
                { text: '(5%) adjusted margin', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cloud: {
          blocks: [
            {
              x: 491, top: 858, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+36% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 434, top: 966, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Cloud', size: 38, weight: 800 },
                { text: '9% adjusted margin', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        all_others: {
          blocks: [
            {
              x: 491, top: 1071, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(25%) Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 434, top: 1184, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'All others', size: 38, weight: 800 },
                { text: '(14%) adjusted margin', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_revenue: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1205, top: 529, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
                { text: '+2% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        intersegment_eliminations: {
          blocks: [
            {
              x: 1205, top: 1140, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Inter-segment', size: 35, weight: 800 },
                { text: 'Eliminations', size: 35, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1564, top: 340, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross', size: 37, weight: 800 },
                { text: 'profit', size: 37, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
                { text: '40% margin', size: 26, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1564, top: 1078, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        other_operating_income: {
          blocks: [
            {
              x: 1851, top: 566, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1928, top: 274, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'profit', size: 36, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
                { text: '4% margin', size: 26, weight: 400, color: NOTE },
                { text: '(11pp) Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1920, top: 800, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 35, weight: 800 },
                { text: 'expenses', size: 35, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
              ],
            },
          ],
        },
        investments: {
          blocks: [
            {
              x: 2173, top: 464, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Investments', size: 32, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2432, top: 410, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '5% margin', size: 26, weight: 400, color: NOTE },
                { text: '(11pp) Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 584, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Tax ($1.2B)', size: 30, weight: 800 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 726, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Sales &', size: 31, weight: 800 },
                { text: 'marketing ($10.3B)', size: 31, weight: 800 },
                { text: '25% of revenue', size: 26, weight: 400, color: NOTE },
                { text: '(+12pp Y/Y)', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        product_development: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 914, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Product', size: 30, weight: 800 },
                { text: 'development ($2.2B)', size: 29, weight: 800 },
                { text: '5% of revenue', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization_impairment: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1073, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Amortization', size: 30, weight: 800 },
                { text: '& impairment ($1.5B)', size: 29, weight: 800 },
                { text: '3% of revenue', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1222, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'General &', size: 30, weight: 800 },
                { text: 'Administrative ($1.2B)', size: 29, weight: 800 },
                { text: '3% of revenue', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'china_ecommerce', col: 0, order: 0, type: 'source',
        label: ['China', 'E-commerce'], value: 22.8, valueText: '$22.8B', notes: ['+6% Y/Y'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'international_digital_commerce', col: 0, order: 1, type: 'source',
        label: ['International', 'Digital', 'Commerce'], value: 5.6, valueText: '$5.6B', notes: ['+4% Y/Y'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'cloud', col: 0, order: 2, type: 'source',
        label: 'Cloud', value: 6.2, valueText: '$6.2B', notes: ['+36% Y/Y'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'all_others', col: 0, order: 3, type: 'source',
        label: 'All others', value: 9.6, valueText: '$9.6B', notes: ['(25%) Y/Y'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'gross_revenue', col: 1, order: 0, type: 'source',
        label: '', value: 44.2, valueText: '$44.2B', color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 40.7, valueText: '$40.7B', notes: ['+2% Y/Y'],
        color: ORANGE, labelColor: ORANGE,
      },
      {
        id: 'intersegment_eliminations', col: 2, order: 1, type: 'cost',
        label: ['Inter-segment', 'Eliminations'], value: -3.6, valueText: '($3.6B)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 16.5, valueText: '$16.5B', notes: ['40% margin', '(2pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 24.2, valueText: '($24.2B)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other_operating_income', col: 4, order: 0, type: 'profit',
        label: 'Other', value: -0.2, valueText: '$0.2B',
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_profit', col: 4, order: 1, type: 'profit',
        label: 'Operating profit', value: 1.5, valueText: '$1.5B', notes: ['4% margin', '(11pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 2, type: 'cost',
        label: ['Operating', 'expenses'], value: 15.0, valueText: '($15.2B)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'investments', col: 5, order: 0, type: 'profit',
        label: 'Investments', value: 1.9, valueText: '$1.9B',
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 6, order: 0, type: 'profit',
        label: 'Net profit', value: 2.2, valueText: '$2.2B', notes: ['5% margin', '(11pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 6, order: 1, type: 'cost',
        label: 'Tax', value: 1.2, valueText: '($1.2B)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 6, order: 2, type: 'cost',
        label: ['Sales &', 'marketing'], value: 10.3, valueText: '($10.3B)', notes: ['25% of revenue', '+12pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'product_development', col: 6, order: 3, type: 'cost',
        label: ['Product', 'development'], value: 2.2, valueText: '($2.2B)', notes: ['5% of revenue'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'amortization_impairment', col: 6, order: 4, type: 'cost',
        label: ['Amortization', '& impairment'], value: 1.5, valueText: '($1.5B)', notes: ['3% of revenue'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 6, order: 5, type: 'cost',
        label: ['General &', 'Administrative'], value: 1.2, valueText: '($1.2B)', notes: ['3% of revenue'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'china_ecommerce', target: 'gross_revenue', value: 22.8, width: 181, targetOrder: 0 },
      { source: 'international_digital_commerce', target: 'gross_revenue', value: 5.6, width: 44, targetOrder: 1 },
      { source: 'cloud', target: 'gross_revenue', value: 6.2, width: 48, targetOrder: 2 },
      { source: 'all_others', target: 'gross_revenue', value: 9.6, width: 77, targetOrder: 3 },
      { source: 'gross_revenue', target: 'revenue', value: 40.7, width: 324, sourceOrder: 0 },
      { source: 'gross_revenue', target: 'intersegment_eliminations', value: 3.6, width: 27, sourceOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 16.5, width: 129, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 24.2, width: 192, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 1.3, width: 8, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 15.0, width: 119, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'other_operating_income',
        target: 'operating_profit',
        value: 0.2,
        width: 2,
        targetOrder: 1,
        linkTint: GREEN_LINK,
        y0: 558,
        y1: 499,
        curve: { x0: 1885, x1: 1894, c1x: 1888, c2x: 1890, c1y: 558, c2y: 499 },
      },

      { source: 'operating_profit', target: 'net_profit', value: 0.3, width: 2, sourceOrder: 0, targetOrder: 0, y0: 491 },
      { source: 'operating_profit', target: 'tax', value: 1.2, width: 9, sourceOrder: 1, y0: 496 },
      { source: 'investments', target: 'net_profit', value: 1.9, width: 14, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 10.3, width: 81, sourceOrder: 0, y0: 706 },
      { source: 'operating_expenses', target: 'product_development', value: 2.2, width: 17, sourceOrder: 1, y0: 748 },
      { source: 'operating_expenses', target: 'amortization_impairment', value: 1.5, width: 11, sourceOrder: 2, y0: 767 },
      { source: 'operating_expenses', target: 'ga', value: 1.2, width: 8, sourceOrder: 3, y0: 780 },
    ],

    i18n: {
      preservedAnnotationText: ['Taobao', 'Lazada', 'AliExpress', 'trendyol'],
      zh: {
        name: 'Alibaba · 2026 财年第三季度',
        meta: {
          title: 'Alibaba 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 12 月',
        },
        nodes: {
          china_ecommerce: { label: '中国电子商务', notes: ['同比 +6%'] },
          international_digital_commerce: { label: '国际数字商业', notes: ['同比 +4%'] },
          cloud: { label: '云', notes: ['同比 +36%'] },
          all_others: { label: '所有其他业务', notes: ['同比 (25%)'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          intersegment_eliminations: { label: '分部间抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          other_operating_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 (11 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          investments: { label: '投资收益' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (11 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 25%', '同比 +12 个百分点'] },
          product_development: { label: '产品开发', notes: ['占收入 5%'] },
          amortization_impairment: { label: '摊销与减值', notes: ['占收入 3%'] },
          ga: { label: '一般及行政', notes: ['占收入 3%'] },
        },
        layout: {
          labels: {
            cost_of_revenue: {
              blocks: [
                {
                  x: 1564, top: 1078, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 36, weight: 800 },
                    { text: '成本', size: 36, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
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
