/* ====================================================================
 * Alibaba - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/alibaba-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const ORANGE = '#ff5a00';
  const ORANGE_LINK = '#f7ae85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_LABEL_X = 2317;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <g transform="translate(681 319)" fill="${ORANGE}">
        <path d="M21 42 C48 3 123 -6 126 30 C129 64 77 85 33 80 C8 77 -7 63 4 49 C17 31 46 23 78 21 C49 27 29 36 21 50 C13 68 56 70 87 55 C110 42 117 24 101 17 C78 6 41 17 21 42 Z"/>
        <path d="M65 39 l31 -12 -8 21 -9 -7 c-16 9 -32 12 -49 10 15 -3 28 -7 41 -15 Z" fill="#ffffff"/>
        <text x="151" y="82" font-family="Arial,sans-serif" font-size="111" font-weight="700" textLength="512" lengthAdjust="spacingAndGlyphs">Alibaba</text>
      </g>
      <g font-family="Arial,sans-serif" font-weight="700">
        <text x="74" y="441" text-anchor="middle" font-size="38" fill="${ORANGE}">淘宝</text>
        <text x="74" y="470" text-anchor="middle" font-size="21" fill="${ORANGE}">Taobao</text>
        <text x="75" y="516" text-anchor="middle" font-size="36" fill="#ff1636">TMALL</text>

        <g transform="translate(8 695) scale(0.65)">
          <path d="M0 18 30 0 60 18 60 55 30 73 0 55Z" fill="#ff7b00"/>
          <path d="M30 0 60 18 30 36 0 18Z" fill="#ffb000"/>
          <path d="M30 36 60 18 60 55 30 73Z" fill="#d91dff"/>
        </g>
        <text x="60" y="719" font-size="26" fill="#2a278f">Lazada</text>
        <text x="16" y="764" font-size="28" fill="${ORANGE}" font-weight="500">AliExpress</text>
        <text x="14" y="807" font-size="35" fill="#242424" font-weight="500">trendyol</text>
        <rect x="111" y="771" width="31" height="15" rx="3" fill="${ORANGE}"/>
        <text x="127" y="784" text-anchor="middle" font-size="11" fill="#ffffff">.com</text>

        <g transform="translate(5 950) scale(0.65)">${BUSINESS_ICONS.alibabaCloud || ''}</g>
        <g transform="translate(18 1056) scale(0.82)">${BUSINESS_ICONS.hema || ''}</g>
        <text x="14" y="1150" font-size="37" fill="#ff4081">YOU</text>
        <text x="92" y="1150" font-size="37" fill="#2db7ea">KU</text>
        <text x="14" y="1195" font-size="30" fill="#0068ff">CAI</text>
        <text x="14" y="1229" font-size="30" fill="#0068ff">NIAO</text>
        <text x="90" y="1229" font-size="23" fill="#0068ff">菜鸟</text>
        <g transform="translate(57 1240) scale(0.27)">${BUSINESS_ICONS.amap || ''}</g>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q2-fy26',
    name: 'Alibaba · Q2 FY26',
    company: 'Alibaba',
    meta: {
      company: 'Alibaba',
      title: 'Alibaba Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Sept. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 129,
      titleWeight: 800,
      titleTextLength: 2190,
      periodX: 2448,
      periodY: 275,
      periodNoteY: 318,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: '#5e5e5e',
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
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 7.45,
      nodes: {
        china_ecommerce: { x: 455, y: 409, width: 69, height: 138 },
        international_digital_commerce: { x: 455, y: 737, width: 69, height: 34 },
        cloud: { x: 455, y: 942, width: 69, height: 40 },
        all_others: { x: 455, y: 1151, width: 69, height: 65 },
        gross_revenue: { x: 813, y: 586, width: 67, height: 283 },
        revenue: { x: 1171, y: 670, width: 67, height: 259 },
        intersegment_eliminations: { x: 1171, y: 1042, width: 67, height: 22 },
        gross_profit: { x: 1529, y: 582, width: 67, height: 101 },
        cost_of_revenue: { x: 1529, y: 868, width: 67, height: 158 },
        operating_profit: { x: 1887, y: 502, width: 67, height: 4 },
        operating_expenses: { x: 1887, y: 685, width: 67, height: 95 },
        investments: { x: 2129, y: 375, width: 67, height: 20 },
        net_profit: { x: 2244, y: 411, width: 68, height: 20 },
        tax: { x: 2244, y: 579, width: 68, height: 4 },
        sm: { x: 2244, y: 720, width: 68, height: 68 },
        product_development: { x: 2244, y: 918, width: 68, height: 16 },
        ga: { x: 2244, y: 1073, width: 68, height: 6 },
        amortization_intangibles: { x: 2244, y: 1215, width: 68, height: 1 },
      },
      labels: {
        china_ecommerce: {
          blocks: [
            {
              x: 483, top: 326, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+16% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 426, top: 432, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'China', size: 38, weight: 800 },
                { text: 'E-commerce', size: 38, weight: 800 },
                { text: '8% adjusted margin', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        international_digital_commerce: {
          blocks: [
            {
              x: 491, top: 654, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+10% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 434, top: 695, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'International', size: 38, weight: 800 },
                { text: 'Digital', size: 38, weight: 800 },
                { text: 'Commerce', size: 38, weight: 800 },
                { text: '0% adjusted margin', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cloud: {
          blocks: [
            {
              x: 474, top: 858, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+34% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 417, top: 947, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Cloud', size: 38, weight: 800 },
                { text: '(8%) adjusted margin', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        all_others: {
          blocks: [
            {
              x: 481, top: 1068, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(25%) Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 424, top: 1157, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'All others', size: 38, weight: 800 },
                { text: '(2%) adjusted margin', size: 26, weight: 400, color: NOTE },
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
                { text: '+5% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        intersegment_eliminations: {
          blocks: [
            {
              x: 1205, top: 1087, anchor: 'middle', lineGap: 8,
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
              x: 1563, top: 361, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross', size: 37, weight: 800 },
                { text: 'profit', size: 37, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
                { text: '39% margin', size: 26, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1563, top: 1049, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1921, top: 281, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'profit', size: 36, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
                { text: '2% margin', size: 26, weight: 400, color: NOTE },
                { text: '(13pp) Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1921, top: 801, anchor: 'middle', lineGap: 8,
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
              x: 2163, top: 290, anchor: 'middle', lineGap: 8,
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
              x: 2421, top: 378, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '8% margin', size: 26, weight: 400, color: NOTE },
                { text: '(10pp) Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X + 21, top: 566, anchor: 'start', lineGap: 8,
              lines: [{ text: 'Tax ($0.8B)', size: 30, weight: 800 }],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 718, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Sales &', size: 31, weight: 800 },
                { text: 'marketing ($9.3B)', size: 31, weight: 800 },
                { text: '27% of revenue', size: 26, weight: 400, color: NOTE },
                { text: '(+13pp Y/Y)', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        product_development: {
          blocks: [
            {
              x: RIGHT_LABEL_X + 9, top: 914, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Product', size: 30, weight: 800 },
                { text: 'development ($2.4B)', size: 29, weight: 800 },
                { text: '7% of revenue', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X + 8, top: 1065, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'General &', size: 30, weight: 800 },
                { text: 'Administrative ($1.0B)', size: 29, weight: 800 },
                { text: '3% of revenue', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization_intangibles: {
          blocks: [
            {
              x: RIGHT_LABEL_X + 6, top: 1204, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Amortization', size: 30, weight: 800 },
                { text: 'of intangibles ($0.1B)', size: 29, weight: 800 },
                { text: '0% of revenue', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'china_ecommerce', col: 0, order: 0, type: 'source', label: ['China', 'E-commerce'], value: 18.6, valueText: '$18.6B', notes: ['+16% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'international_digital_commerce', col: 0, order: 1, type: 'source', label: ['International', 'Digital', 'Commerce'], value: 4.9, valueText: '$4.9B', notes: ['+10% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cloud', col: 0, order: 2, type: 'source', label: 'Cloud', value: 5.6, valueText: '$5.6B', notes: ['+34% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'all_others', col: 0, order: 3, type: 'source', label: 'All others', value: 8.9, valueText: '$8.9B', notes: ['(25%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'source', label: '', value: 38.0, valueText: '$38.0B', color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 34.8, valueText: '$34.8B', notes: ['+5% Y/Y'], color: ORANGE, labelColor: ORANGE },
      { id: 'intersegment_eliminations', col: 2, order: 1, type: 'cost', label: ['Inter-segment', 'Eliminations'], value: -3.2, valueText: '($3.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 13.6, valueText: '$13.6B', notes: ['39% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 21.2, valueText: '($21.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.8, valueText: '$0.8B', notes: ['2% margin', '(13pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 12.9, valueText: '($12.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'investments', col: 5, order: 0, type: 'profit', label: 'Investments', value: 2.9, valueText: '$2.9B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.9, valueText: '$2.9B', notes: ['8% margin', '(10pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.8, valueText: '($0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: ['Sales &', 'marketing'], value: 9.3, valueText: '($9.3B)', notes: ['27% of revenue', '+13pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 6, order: 3, type: 'cost', label: ['Product', 'development'], value: 2.4, valueText: '($2.4B)', notes: ['7% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: ['General &', 'Administrative'], value: 1.0, valueText: '($1.0B)', notes: ['3% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization_intangibles', col: 6, order: 5, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.1, valueText: '($0.1B)', notes: ['0% of revenue'], color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'china_ecommerce', target: 'gross_revenue', value: 18.6, sourceWidth: 138, targetWidth: 139, targetOrder: 0 },
      { source: 'international_digital_commerce', target: 'gross_revenue', value: 4.9, sourceWidth: 34, targetWidth: 36, targetOrder: 1 },
      { source: 'cloud', target: 'gross_revenue', value: 5.6, sourceWidth: 40, targetWidth: 42, targetOrder: 2 },
      { source: 'all_others', target: 'gross_revenue', value: 8.9, sourceWidth: 65, targetWidth: 66, targetOrder: 3 },
      { source: 'gross_revenue', target: 'revenue', value: 34.8, width: 259, sourceOrder: 0 },
      { source: 'gross_revenue', target: 'intersegment_eliminations', value: 3.2, width: 22, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 13.6, width: 101, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 21.2, width: 158, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.8, sourceWidth: 6, targetWidth: 4, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 12.9, sourceWidth: 95, targetWidth: 95, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0, sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 1, y0: 502.5, y1: 430.5, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.8, sourceWidth: 4, targetWidth: 4, sourceOrder: 1, y0: 504, y1: 581 },
      { source: 'investments', target: 'net_profit', value: 2.9, sourceWidth: 20, targetWidth: 19, targetOrder: 0, y1: 420.5 },
      { source: 'operating_expenses', target: 'sm', value: 9.3, sourceWidth: 69, targetWidth: 68, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'product_development', value: 2.4, sourceWidth: 17, targetWidth: 16, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.0, sourceWidth: 7, targetWidth: 6, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization_intangibles', value: 0.1, sourceWidth: 2, targetWidth: 1, sourceOrder: 3 },
    ],

    i18n: {
      preservedAnnotationText: ['Taobao', 'Lazada', 'AliExpress', 'trendyol'],
      zh: {
        name: 'Alibaba · 2026 财年第二季度',
        meta: {
          title: 'Alibaba 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 9 月',
        },
        nodes: {
          china_ecommerce: { label: '中国电子商务', notes: ['同比 +16%'] },
          international_digital_commerce: { label: '国际数字商业', notes: ['同比 +10%'] },
          cloud: { label: '云', notes: ['同比 +34%'] },
          all_others: { label: '所有其他业务', notes: ['同比 (25%)'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          intersegment_eliminations: { label: '分部间抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 (13 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          investments: { label: '投资收益' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 (10 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 27%', '同比 +13 个百分点'] },
          product_development: { label: '产品开发', notes: ['占收入 7%'] },
          ga: { label: '一般及行政', notes: ['占收入 3%'] },
          amortization_intangibles: { label: '无形资产摊销', notes: ['占收入 0%'] },
        },
        layout: {
          labels: {
            cost_of_revenue: {
              blocks: [
                {
                  x: 1563, top: 1049, anchor: 'middle', lineGap: 8,
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
