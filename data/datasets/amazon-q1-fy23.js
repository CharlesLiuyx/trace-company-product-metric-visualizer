/* ====================================================================
 * Amazon - Q1 FY23 income statement ($B)
 * Reconstructed from input/processed/amazon-q1-fy23.png as a fixed
 * d3-sankey layout with reusable SVG/text Amazon business annotations.
 * ==================================================================== */
(function () {
  const ORANGE = '#ff9900';
  const ORANGE_LINK = '#f7ca85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_LABEL_X = 2350;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g>
      ${icon('amazonCompanyWordmark', 655, 294, 0.98)}
      <g class="sankey-interactive-annotation" data-node="online_stores">
        <text x="109" y="436" font-family="Noto Sans,Arial,sans-serif"
          font-size="38" font-weight="800" fill="#111111">Online Store</text>
        ${icon('amazonDotCom', 112, 444, 0.70)}
      </g>
      ${icon('amazonSubscriptionCluster', 105, 925, 0.47)}
      ${icon('amazonAdvertisingCluster', 118, 1044, 0.46)}
      ${icon('amazonAws', 205, 1204, 0.46)}

      <g transform="translate(1716 479)">
        <path d="M38 146H210C224 146 233 137 233 123V38C233 24 224 15 210 15H126L104 0L82 15H38C24 15 15 24 15 38V123C15 137 24 146 38 146Z"
          fill="#f2f2f2" stroke="#1d1d1d" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="aws_operating_profit">
          ${icon('amazonAws', 40, 29, 0.17)}
          <text x="150" y="69" font-family="Noto Sans,Arial,sans-serif" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$5.1B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="other_operating_loss">
          <text x="40" y="118" font-family="Noto Sans,Arial,sans-serif" font-size="30" font-weight="800" fill="#333333">Other</text>
          <text x="142" y="118" font-family="Noto Sans,Arial,sans-serif" font-size="28" font-weight="400" fill="${RED_LABEL}">($0.3B)</text>
        </g>
      </g>
    </g>`;
  const localizedAnnotations = annotations
    .replace('>Other</text>', '>其他</text>')
    .replace('>Online Store</text>', '>线上商店</text>');

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q1-fy23',
    name: 'Amazon · Q1 FY23',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q1 FY23 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2245,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: ORANGE, label: '#111111' },
        hub: { node: ORANGE, label: '#111111' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: ORANGE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotations,
    nonNodeMetrics: [
      { id: 'aws_operating_profit', representation: 'annotation', value: 5.1, type: 'profit' },
      { id: 'other_operating_loss', representation: 'annotation', value: -0.3, type: 'cost' },
    ],

    layout: {
      scale: 1,
      nodes: {
        online_stores: { x: 393, y: 371, width: 71, height: 137 },
        physical_store: { x: 393, y: 616, width: 71, height: 12 },
        third_party_seller_services: { x: 393, y: 735, width: 71, height: 78 },
        subscription: { x: 393, y: 927, width: 71, height: 23 },
        advertising: { x: 393, y: 1065, width: 71, height: 23 },
        aws: { x: 393, y: 1203, width: 71, height: 55 },
        other_revenue: { x: 393, y: 1375, width: 71, height: 1 },
        revenue: { x: 858, y: 611, width: 70, height: 342 },
        gross_profit: { x: 1319, y: 528, width: 72, height: 157 },
        cost_of_sales: { x: 1327, y: 849, width: 71, height: 180 },
        operating_profit: { x: 1800, y: 451, width: 70, height: 12 },
        operating_expenses: { x: 1817, y: 874, width: 70, height: 146 },
        net_profit: { x: 2261, y: 329, width: 71, height: 6 },
        tax: { x: 2261, y: 493, width: 71, height: 1 },
        other_expense: { x: 2261, y: 602, width: 71, height: 1 },
        interest: { x: 2261, y: 700, width: 71, height: 1 },
        fulfillment: { x: 2261, y: 778, width: 71, height: 55 },
        technology_content: { x: 2261, y: 957, width: 71, height: 52 },
        sm: { x: 2261, y: 1117, width: 71, height: 25 },
        ga: { x: 2261, y: 1251, width: 71, height: 6 },
        other_opex: { x: 2261, y: 1366, width: 71, height: 1 },
      },
      labels: {
        online_stores: {
          blocks: [
            {
              x: 428, top: 291, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '(0%) Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        physical_store: {
          blocks: [
            {
              x: 338, top: 603, anchor: 'end',
              lines: [{ text: 'Physical Store', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 540, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+7% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        third_party_seller_services: {
          blocks: [
            {
              x: 339, top: 727, anchor: 'end', lineGap: 9,
              lines: [
                { text: '3rd party', size: 38, weight: 800, color: '#111111' },
                { text: 'sellers services', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 422, top: 659, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+18% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        subscription: {
          blocks: [
            {
              x: 337, top: 876, anchor: 'end',
              lines: [{ text: 'Subscription', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 420, top: 847, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+15% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        advertising: {
          blocks: [
            {
              x: 336, top: 1008, anchor: 'end',
              lines: [{ text: 'Advertising', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 419, top: 984, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+21% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        aws: {
          blocks: [
            {
              x: 428, top: 1127, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+16% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 336, top: 1352, anchor: 'end',
              lines: [{ text: 'Other', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 1285, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+55% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 895, top: 469, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 42, weight: 800, color: '#111111' },
                { text: '$value', size: 38, weight: 400, color: '#111111' },
                { text: '+9% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1355, top: 345, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Gross profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '47% margin', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1362, top: 1053, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Cost of', size: 38, weight: 800, color: RED_LABEL },
                { text: 'revenue', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 37, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1835, top: 271, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '4% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1852, top: 1043, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 39, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 39, weight: 800, color: RED_LABEL },
                { text: '$value', size: 37, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2355, top: 271, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '2% margin', size: 28, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [{
            x: 2399, top: 465, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'Tax', size: 30, weight: 800, color: RED_LABEL },
              { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        other_expense: {
          blocks: [{
            x: 2405, top: 569, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'Other', size: 30, weight: 800, color: RED_LABEL },
              { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        interest: {
          blocks: [{
            x: 2390, top: 655, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'Interest', size: 30, weight: 800, color: RED_LABEL },
              { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        fulfillment: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 774, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'Fulfillment ($20.9B)', size: 28, weight: 800, color: RED_LABEL },
              { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        technology_content: {
          blocks: [{
            x: 2368, top: 911, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'Technology &', size: 29, weight: 800, color: RED_LABEL },
              { text: 'content ($20.5B)', size: 29, weight: 800, color: RED_LABEL },
              { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        sm: {
          blocks: [{
            x: 2384, top: 1084, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'S&M ($10.2B)', size: 29, weight: 800, color: RED_LABEL },
              { text: '8% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        ga: {
          blocks: [{
            x: 2387, top: 1217, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'G&A ($3.0B)', size: 29, weight: 800, color: RED_LABEL },
              { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_opex: {
          blocks: [{
            x: 2356, top: 1347, anchor: 'start',
            lines: [{ text: 'Other opex ($0.2B)', size: 27, weight: 800, color: RED_LABEL }],
          }],
        },
      },
    },

    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Store', value: 51.1, notes: ['(0%) Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 4.9, notes: ['+7% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 29.8, notes: ['+18% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 3, type: 'source', label: 'Subscription', value: 9.7, notes: ['+15% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 4, type: 'source', label: 'Advertising', value: 9.5, notes: ['+21% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 21.3, notes: ['+16% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.0, valueText: '$1.0B', notes: ['+55% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 127.4, notes: ['+9% Y/Y'], color: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 59.6, notes: ['47% margin', '+4pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 67.8 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4.8, notes: ['4% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 54.8 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.2, notes: ['2% margin', '+6pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.9 },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.4 },
      { id: 'interest', col: 5, order: 3, type: 'cost', label: 'Interest', value: 0.2 },
      { id: 'fulfillment', col: 5, order: 4, type: 'cost', label: 'Fulfillment', value: 20.9, notes: ['16% of revenue', '(1pp) Y/Y'] },
      { id: 'technology_content', col: 5, order: 5, type: 'cost', label: 'Technology & content', value: 20.5, notes: ['16% of revenue', '+3pp Y/Y'] },
      { id: 'sm', col: 5, order: 6, type: 'cost', label: 'S&M', value: 10.2, notes: ['8% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 5, order: 7, type: 'cost', label: 'G&A', value: 3.0, valueText: '($3.0B)', notes: ['2% of revenue', '+0pp Y/Y'] },
      { id: 'other_opex', col: 5, order: 8, type: 'cost', label: 'Other opex', value: 0.2 },
    ],

    links: [
      { source: 'online_stores', target: 'revenue', value: 51.1, sourceWidth: 137, targetWidth: 139, y0: 439.5, y1: 680.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 4.9, sourceWidth: 12, targetWidth: 13, y0: 622, y1: 756.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 29.8, sourceWidth: 78, targetWidth: 80, y0: 774, y1: 803, sourceOrder: 0, targetOrder: 2 },
      { source: 'subscription', target: 'revenue', value: 9.7, sourceWidth: 23, targetWidth: 26, y0: 938.5, y1: 856, sourceOrder: 0, targetOrder: 3 },
      { source: 'advertising', target: 'revenue', value: 9.5, sourceWidth: 23, targetWidth: 26, y0: 1076.5, y1: 882, sourceOrder: 0, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 21.3, sourceWidth: 55, targetWidth: 57, y0: 1230.5, y1: 923.5, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.0, sourceWidth: 1, targetWidth: 1, y0: 1375.5, y1: 952.5, sourceOrder: 0, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 59.6, sourceWidth: 160, targetWidth: 157, y0: 691, y1: 606.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 67.8, sourceWidth: 182, targetWidth: 180, y0: 862, y1: 939, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 4.8, sourceWidth: 12, targetWidth: 12, y0: 534, y1: 457, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 54.8, sourceWidth: 145, targetWidth: 146, y0: 612.5, y1: 947, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 3.2, sourceWidth: 8, targetWidth: 6, y0: 455, y1: 332, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.9, sourceWidth: 2, targetWidth: 1, y0: 460, y1: 493.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 0.4, sourceWidth: 1, targetWidth: 1, y0: 461.5, y1: 602.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 1, targetWidth: 1, y0: 462.5, y1: 700.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'fulfillment', value: 20.9, sourceWidth: 55, targetWidth: 55, y0: 901.5, y1: 805.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology_content', value: 20.5, sourceWidth: 55, targetWidth: 52, y0: 956.5, y1: 983, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 10.2, sourceWidth: 27, targetWidth: 25, y0: 997.5, y1: 1129.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 3.0, sourceWidth: 8, targetWidth: 6, y0: 1015, y1: 1254, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.2, sourceWidth: 1, targetWidth: 1, y0: 1019.5, y1: 1366.5, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],

    i18n: {
      zh: {
        name: 'Amazon · 2023 财年第一季度',
        meta: { title: 'Amazon 2023 财年第一季度利润表' },
        annotationsSvg: localizedAnnotations,
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 (0%)'] },
          physical_store: { label: '实体商店', notes: ['同比 +7%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +18%'] },
          subscription: { label: '订阅', notes: ['同比 +15%'] },
          advertising: { label: '广告', notes: ['同比 +21%'] },
          aws: { label: 'AWS', notes: ['同比 +16%'] },
          other_revenue: { label: '其他', notes: ['同比 +55%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 47%', '同比 +4 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 +6 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          interest: { label: '利息' },
          fulfillment: { label: '履约', notes: ['占收入 16%', '同比 (1 个百分点)'] },
          technology_content: { label: '技术与内容', notes: ['占收入 16%', '同比 +3 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 8%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 +0 个百分点'] },
          other_opex: { label: '其他运营费用' },
        },
        nonNodeMetrics: {
          aws_operating_profit: { label: 'AWS 营业利润' },
          other_operating_loss: { label: '其他业务营业亏损' },
        },
        layout: {
          labels: {
            online_stores: {
              blocks: [
                {
                  x: 428, top: 291, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 34, weight: 400, color: '#111111' },
                    { text: '同比 (0%)', size: 23, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            third_party_seller_services: {
              blocks: [
                {
                  x: 339, top: 727, anchor: 'end', lineGap: 9,
                  lines: [
                    { text: '第三方卖家', size: 38, weight: 800, color: '#111111' },
                    { text: '服务', size: 38, weight: 800, color: '#111111' },
                  ],
                },
                {
                  x: 422, top: 659, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 34, weight: 400, color: '#111111' },
                    { text: '同比 +18%', size: 23, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [{
                x: 2384, top: 1084, anchor: 'start', lineGap: 8,
                lines: [
                  { text: '销售与市场 ($10.2B)', size: 29, weight: 800, color: RED_LABEL },
                  { text: '占收入 8%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            ga: {
              blocks: [{
                x: 2387, top: 1217, anchor: 'start', lineGap: 8,
                lines: [
                  { text: '管理费用 ($3.0B)', size: 29, weight: 800, color: RED_LABEL },
                  { text: '占收入 2%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
          },
        },
      },
    },
  });
})();
