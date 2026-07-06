/* ====================================================================
 * PDD Holdings - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/pdd-holdings-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#737373';
  const BLACK = '#000000';
  const SOURCE_LINK = '#8f8f8f';
  const GREEN = '#25a525';
  const GREEN_LABEL = '#00924a';
  const GREEN_LINK = '#99cd99';
  const RED = '#d70000';
  const RED_LABEL = '#8c1000';
  const RED_LINK = '#e28183';

  const heartLogo = (x, y, width, height, centerTextSize = 36) => `
    <g transform="translate(${x} ${y}) scale(${width / 220} ${height / 184})">
      <path d="M110 182 L10 100 C-20 70 8 18 54 12 C78 9 98 25 110 44 C122 25 142 9 166 12 C212 18 240 70 210 100 Z" fill="#ef2a24"/>
      <path d="M110 44 L110 182 M10 100 L110 44 L210 100 M54 12 L54 138 M166 12 L166 138 M10 100 L110 100 L210 100 M55 58 L110 100 L165 58 M55 138 L110 100 L165 138" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="110" y="113" text-anchor="middle" font-family="Arial,sans-serif" font-size="${centerTextSize}" font-weight="900" fill="#ffffff">拼</text>
    </g>`;

  const pinduoduoAppIcon = `
    <g transform="translate(68 798)">
      <rect width="142" height="142" rx="22" fill="#ff0808"/>
      ${heartLogo(18, 19, 106, 88, 26)}
    </g>`;

  const temuAppIcon = `
    <g transform="translate(219 795)">
      <rect width="147" height="148" rx="24" fill="#ff7900"/>
      <g fill="#ffffff" opacity="0.98">
        <path d="M34 39 C45 28 58 32 54 47 C64 45 70 53 63 62 C50 74 27 66 23 54 C21 47 26 43 34 39 Z"/>
        <path d="M70 34 C82 28 95 37 91 50 C88 61 76 63 66 57 C57 51 59 39 70 34 Z"/>
        <path d="M108 35 C117 30 124 34 123 44 C122 58 105 66 90 65 C96 56 101 44 108 35 Z"/>
        <rect x="124" y="38" width="31" height="26" rx="7"/>
      </g>
      <text x="73.5" y="102" text-anchor="middle" font-family="Arial Rounded MT Bold, Arial, sans-serif" font-size="47" font-weight="900" fill="#ffffff">TEMU</text>
    </g>`;

  const buildAnnotations = (wordmark) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${heartLogo(818, 242, 214, 180, 38)}
      <text x="666" y="510" font-family="Arial Black,Arial,sans-serif" font-size="82" font-weight="900" fill="#000000">${wordmark}</text>
      ${pinduoduoAppIcon}
      ${temuAppIcon}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'pdd-holdings-q4-fy25',
    name: 'PDD Holdings · Q4 FY25',
    company: 'PDD Holdings',
    meta: {
      company: 'PDD Holdings',
      title: 'PDD Holdings Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/pdd-holdings-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1195,
      titleY: 184,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2205,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
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
        source: SOURCE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: buildAnnotations('Pinduoduo'),

    layout: {
      scale: 20.2,
      nodes: {
        online_marketing: { x: 437, y: 566, width: 74, height: 172 },
        transaction_services: { x: 437, y: 993, width: 74, height: 184 },
        revenue: { x: 905, y: 711, width: 74, height: 357 },
        gross_profit: { x: 1372, y: 565, width: 74, height: 198 },
        cost_of_revenue: { x: 1372, y: 1021, width: 74, height: 159 },
        operating_profit: { x: 1840, y: 467, width: 74, height: 79 },
        operating_expenses: { x: 1840, y: 729, width: 74, height: 118 },
        other: { x: 2193, y: 476, width: 74, height: 14 },
        net_profit: { x: 2307, y: 379, width: 74, height: 70 },
        tax: { x: 2307, y: 652, width: 74, height: 24 },
        sm: { x: 2307, y: 814, width: 74, height: 99 },
        rnd: { x: 2307, y: 1083, width: 74, height: 14 },
        ga: { x: 2307, y: 1275, width: 74, height: 4 },
      },
      labels: {
        online_marketing: {
          blocks: [
            {
              x: 473, top: 474, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 190, top: 594, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Online Marketing', size: 38, weight: 800 },
                { text: '& Others', size: 38, weight: 800 },
                { text: 'Performance-based services', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        transaction_services: {
          blocks: [
            {
              x: 473, top: 904, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 176, top: 1028, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Transaction', size: 40, weight: 800 },
                { text: 'Services', size: 40, weight: 800 },
                { text: 'Merchant fee', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 943, top: 570, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1412, top: 382, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '55% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1413, top: 1204, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 40, weight: 800 },
                { text: 'revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1884, top: 286, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '22% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1885, top: 870, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2501, top: 360, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '20% margin', size: 29, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2501, top: 636, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2184, top: 514, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2501, top: 814, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Sales &', size: 31, weight: 800 },
                { text: 'marketing', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '28% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2501, top: 1050, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '4% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2501, top: 1241, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '1% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'online_marketing', col: 0, order: 0, type: 'source',
        label: ['Online Marketing', '& Others'], value: 8.6, notes: ['+5% Y/Y', 'Performance-based services'],
        color: BLACK, labelColor: BLACK, linkTint: SOURCE_LINK,
      },
      {
        id: 'transaction_services', col: 0, order: 1, type: 'source',
        label: ['Transaction', 'Services'], value: 9.1, notes: ['+19% Y/Y', 'Merchant fee'],
        color: BLACK, labelColor: BLACK, linkTint: SOURCE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 17.7, notes: ['+12% Y/Y'],
        color: BLACK, labelColor: BLACK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 9.8, notes: ['55% margin', '(1pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 7.9,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 4.0, notes: ['22% margin', '(1pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 5.9,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other', col: 4, order: 0, type: 'profit',
        label: 'Other', value: 0.8,
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 3.5, notes: ['20% margin', '(5pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 1.2,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 2, type: 'cost',
        label: ['Sales &', 'marketing'], value: 4.9, notes: ['28% of revenue', '(1pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 3, type: 'cost',
        label: 'R&D', value: 0.7, notes: ['4% of revenue', '+1pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 4, type: 'cost',
        label: 'G&A', value: 0.2, notes: ['1% of revenue', '(1pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'online_marketing', target: 'revenue', value: 8.6, width: 172, targetOrder: 0 },
      { source: 'transaction_services', target: 'revenue', value: 9.1, width: 184, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 9.8, width: 198, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.9, width: 159, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 4.0, width: 79, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.9, width: 118, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 2.8, width: 56, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.2, width: 24, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.8, width: 14, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 4.9, width: 99, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.7, width: 14, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.2, width: 4, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'PDD Holdings · 2025 财年第四季度',
        meta: {
          title: 'PDD Holdings 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
        },
        annotationsSvg: buildAnnotations('拼多多'),
        nodes: {
          online_marketing: { label: ['在线营销', '及其他'], notes: ['同比 +5%', '基于绩效的服务'] },
          transaction_services: { label: ['交易', '服务'], notes: ['同比 +19%', '商户费用'] },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 22%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 20%', '同比 (5 个百分点)'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          sm: { label: '销售与市场', notes: ['占收入 28%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 4%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 1%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            online_marketing: {
              blocks: [
                {
                  x: 473, top: 474, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +5%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 190, top: 594, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '在线营销', size: 38, weight: 800 },
                    { text: '及其他', size: 38, weight: 800 },
                    { text: '基于绩效的服务', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            transaction_services: {
              blocks: [
                {
                  x: 473, top: 904, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +19%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 176, top: 1028, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '交易', size: 40, weight: 800 },
                    { text: '服务', size: 40, weight: 800 },
                    { text: '商户费用', size: 29, weight: 400, color: NOTE },
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
