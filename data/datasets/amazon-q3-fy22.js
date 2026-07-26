/* ====================================================================
 * Amazon - Q3 FY22 income statement ($B)
 * Reconstructed from input/processed/amazon-q3-fy22.png as a fixed
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
  const RIGHT_LABEL_X = 2365;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = (zh = false) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('amazonCompanyWordmark', 680, 278, 0.98)}
      ${icon('amazonDotCom', 118, 454, 0.70)}
      ${icon('amazonSubscriptionCluster', 112, 934, 0.47)}
      ${icon('amazonAdvertisingCluster', 126, 1064, 0.47)}
      ${icon('amazonAws', 210, 1170, 0.46)}

      <g transform="translate(1738 470)">
        <path d="M36 145H220C234 145 243 136 243 122V31C243 17 234 8 220 8H142L116 -20L90 8H36C22 8 13 17 13 31V122C13 136 22 145 36 145Z"
          fill="#f2f2f2" stroke="#1d1d1d" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="aws_operating_profit">
          ${icon('amazonAws', 38, 22, 0.17)}
          <text x="142" y="69" font-size="33" font-weight="400" fill="${GREEN_LABEL}">$5.4B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="other_operating_loss">
          <text x="27" y="126" font-size="31" font-weight="800" fill="#333333">${zh ? '其他' : 'Other'}</text>
          <text x="133" y="126" font-size="28" font-weight="400" fill="${RED_LABEL}">($2.9B)</text>
        </g>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q3-fy22',
    name: 'Amazon · Q3 FY22',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q3 FY22 Income Statement',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q3-fy22.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2245,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: '#111111' },
        hub: { node: '#000000', label: '#111111' },
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
      interfaceAudit: { mode: 'error' },
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotations(false),

    layout: {
      scale: 3.39,
      nodes: {
        online_stores: { x: 391, y: 370, width: 73, height: 181 },
        physical_store: { x: 391, y: 643, width: 73, height: 14 },
        third_party_seller_services: { x: 391, y: 749, width: 73, height: 96 },
        subscription: { x: 391, y: 938, width: 73, height: 28 },
        advertising: { x: 391, y: 1058, width: 73, height: 31 },
        aws: { x: 391, y: 1181, width: 73, height: 69 },
        other_revenue: { x: 391, y: 1342, width: 73, height: 2 },
        revenue: { x: 862, y: 606, width: 71, height: 433 },
        gross_profit: { x: 1332, y: 521, width: 72, height: 192 },
        cost_of_revenue: { x: 1332, y: 886, width: 72, height: 238 },
        operating_profit: { x: 1833, y: 444, width: 72, height: 6 },
        operating_expenses: { x: 1833, y: 756, width: 72, height: 183 },
        other_income: { x: 2167, y: 478, width: 73, height: 3 },
        net_profit: { x: 2282, y: 388, width: 73, height: 7 },
        interest: { x: 2282, y: 611, width: 73, height: 2 },
        tax: { x: 2282, y: 698, width: 73, height: 2 },
        fulfillment: { x: 2282, y: 777, width: 73, height: 68 },
        technology_content: { x: 2282, y: 943, width: 73, height: 65 },
        sm: { x: 2282, y: 1109, width: 73, height: 36 },
        ga: { x: 2282, y: 1247, width: 73, height: 9 },
        other_opex: { x: 2282, y: 1377, width: 73, height: 2 },
      },
      labels: {
        online_stores: {
          blocks: [
            { x: 358, top: 420, anchor: 'end', semanticRole: 'source-group', lines: [{ text: 'Online Store', size: 38, weight: 800, color: ORANGE }] },
            {
              x: 428, top: 278, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+7% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        physical_store: {
          blocks: [
            { x: 355, top: 630, anchor: 'end', semanticRole: 'source-group', lines: [{ text: 'Physical Store', size: 38, weight: 800, color: ORANGE }] },
            {
              x: 428, top: 550, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+10% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        third_party_seller_services: {
          blocks: [
            {
              x: 355, top: 745, anchor: 'end', lineGap: 9, semanticRole: 'source-group',
              lines: [
                { text: '3rd party', size: 38, weight: 800, color: ORANGE },
                { text: 'sellers services', size: 38, weight: 800, color: ORANGE },
              ],
            },
            {
              x: 428, top: 666, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+18% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        subscription: {
          blocks: [
            { x: 355, top: 902, anchor: 'end', semanticRole: 'source-group', lines: [{ text: 'Subscription', size: 38, weight: 800, color: ORANGE }] },
            {
              x: 428, top: 855, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+9% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        advertising: {
          blocks: [
            { x: 355, top: 1038, anchor: 'end', semanticRole: 'source-group', lines: [{ text: 'Advertising', size: 38, weight: 800, color: ORANGE }] },
            {
              x: 428, top: 977, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+25% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        aws: {
          blocks: [
            {
              x: 428, top: 1098, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+27% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            { x: 338, top: 1319, anchor: 'end', semanticRole: 'source-group', lines: [{ text: 'Other', size: 38, weight: 800, color: ORANGE }] },
            {
              x: 428, top: 1284, anchor: 'middle',
              lines: [{ text: '$value', size: 34, weight: 400, color: '#111111' }],
            },
          ],
        },
        revenue: {
          blocks: [{
            x: 897, top: 463, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Revenue', size: 42, weight: 800, color: '#111111' },
              { text: '$value', size: 38, weight: 400, color: '#111111' },
              { text: '+15% Y/Y', size: 26, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1368, top: 339, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'Gross profit', size: 42, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
              { text: '45% margin', size: 28, weight: 400, color: NOTE },
              { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1357, top: 1144, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'Cost of', size: 38, weight: 800, color: RED_LABEL },
              { text: 'revenue', size: 38, weight: 800, color: RED_LABEL },
              { text: '$value', size: 37, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1869, top: 263, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating profit', size: 42, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
              { text: '2% margin', size: 28, weight: 400, color: NOTE },
              { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1869, top: 960, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating', size: 39, weight: 800, color: RED_LABEL },
              { text: 'expenses', size: 39, weight: 800, color: RED_LABEL },
              { text: '$value', size: 37, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        other_income: {
          blocks: [{
            x: 2205, top: 493, anchor: 'middle', lineGap: 7,
            lines: [
              { text: 'Other', size: 25, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 24, weight: 400, color: GREEN_LABEL },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2462, top: 273, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Net profit', size: 42, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
              { text: '2% margin', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        interest: {
          blocks: [{
            x: 2460, top: 596, anchor: 'middle', lineGap: 7,
            lines: [
              { text: 'Interest', size: 25, weight: 800, color: RED_LABEL },
              { text: '$value', size: 24, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: 2460, top: 663, anchor: 'middle', lineGap: 7,
            lines: [
              { text: 'Tax', size: 25, weight: 800, color: RED_LABEL },
              { text: '$value', size: 24, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        fulfillment: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 770, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'Fulfillment ($20.6B)', size: 22, weight: 800, color: RED_LABEL },
              { text: '16% of revenue', size: 21, weight: 400, color: NOTE },
              { text: 'Unchanged', size: 21, weight: 400, color: NOTE },
            ],
          }],
        },
        technology_content: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 947, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'Technology &', size: 25, weight: 800, color: RED_LABEL },
              { text: 'content ($19.5B)', size: 25, weight: 800, color: RED_LABEL },
              { text: '15% of revenue', size: 24, weight: 400, color: NOTE },
              { text: '+2pp Y/Y', size: 24, weight: 400, color: NOTE },
            ],
          }],
        },
        sm: {
          blocks: [{
            x: 2390, top: 1106, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'S&M ($11.0B)', size: 25, weight: 800, color: RED_LABEL },
              { text: '9% of revenue', size: 24, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 24, weight: 400, color: NOTE },
            ],
          }],
        },
        ga: {
          blocks: [{
            x: 2396, top: 1237, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'G&A ($3.1B)', size: 25, weight: 800, color: RED_LABEL },
              { text: '2% of revenue', size: 24, weight: 400, color: NOTE },
              { text: 'Unchanged', size: 24, weight: 400, color: NOTE },
            ],
          }],
        },
        other_opex: {
          blocks: [{
            x: 2371, top: 1367, anchor: 'start',
            lines: [{ text: 'Other opex ($0.2B)', size: 22, weight: 800, color: RED_LABEL }],
          }],
        },
      },
    },
    nonNodeMetrics: [
      {
        id: 'aws_operating_profit',
        representation: 'annotation',
        label: 'AWS operating profit',
        value: 5.4,
        valueText: '$5.4B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
      {
        id: 'other_operating_loss',
        representation: 'annotation',
        label: 'Other operating loss',
        value: -2.9,
        valueText: '($2.9B)',
        type: 'cost',
        labelColor: RED_LABEL,
      },
    ],

    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Store', value: 53.4, notes: ['+7% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 4.7, notes: ['+10% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 28.7, notes: ['+18% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 3, type: 'source', label: 'Subscription', value: 8.9, notes: ['+9% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 4, type: 'source', label: 'Advertising', value: 9.5, notes: ['+25% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 20.5, notes: ['+27% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.3, color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 127.1, notes: ['+15% Y/Y'], color: '#000000' },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 56.8, notes: ['45% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 70.3 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.5, notes: ['2% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 54.3 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.7 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.9, notes: ['2% margin', '(1pp) Y/Y'] },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.3 },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.1 },
      { id: 'fulfillment', col: 5, order: 3, type: 'cost', label: 'Fulfillment', value: 20.6, notes: ['16% of revenue', 'Unchanged'] },
      { id: 'technology_content', col: 5, order: 4, type: 'cost', label: 'Technology & content', value: 19.5, notes: ['15% of revenue', '+2pp Y/Y'] },
      { id: 'sm', col: 5, order: 5, type: 'cost', label: 'S&M', value: 11.0, valueText: '($11.0B)', notes: ['9% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 5, order: 6, type: 'cost', label: 'G&A', value: 3.1, notes: ['2% of revenue', 'Unchanged'] },
      { id: 'other_opex', col: 5, order: 7, type: 'cost', label: 'Other opex', value: 0.2 },
    ],

    links: [
      { source: 'online_stores', target: 'revenue', value: 53.4, sourceWidth: 181, targetWidth: 182, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 4.7, sourceWidth: 14, targetWidth: 16, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 28.7, sourceWidth: 96, targetWidth: 98, targetOrder: 2 },
      { source: 'subscription', target: 'revenue', value: 8.9, sourceWidth: 28, targetWidth: 30, targetOrder: 3 },
      { source: 'advertising', target: 'revenue', value: 9.5, sourceWidth: 31, targetWidth: 32, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 20.5, sourceWidth: 69, targetWidth: 70, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.3, sourceWidth: 2, targetWidth: 5, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 56.8, sourceWidth: 192, targetWidth: 192, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 70.3, sourceWidth: 241, targetWidth: 238, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.5, sourceWidth: 6, targetWidth: 6, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 54.3, sourceWidth: 186, targetWidth: 183, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 2.1, sourceWidth: 4, targetWidth: 5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 1, targetWidth: 2, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 1, targetWidth: 2, sourceOrder: 2 },
      { source: 'other_income', target: 'net_profit', value: 0.7, sourceWidth: 3, targetWidth: 2, targetOrder: 1 },
      { source: 'operating_expenses', target: 'fulfillment', value: 20.6, sourceWidth: 69, targetWidth: 68, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_content', value: 19.5, sourceWidth: 66, targetWidth: 65, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 11.0, sourceWidth: 37, targetWidth: 36, targetOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 3.1, sourceWidth: 9, targetWidth: 9, targetOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.2, sourceWidth: 2, targetWidth: 2, targetOrder: 4 },
    ],

    i18n: {
      zh: {
        name: 'Amazon · 2022 财年第三季度',
        meta: {
          title: 'Amazon 2022 财年第三季度利润表',
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          titleSize: 112,
          titleTextLength: 1780,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          aws_operating_profit: { label: 'AWS 营业利润' },
          other_operating_loss: { label: '其他业务营业亏损' },
        },
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +7%'] },
          physical_store: { label: '实体商店', notes: ['同比 +10%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +18%'] },
          subscription: { label: '订阅', notes: ['同比 +9%'] },
          advertising: { label: '广告', notes: ['同比 +25%'] },
          aws: { label: 'AWS', notes: ['同比 +27%'] },
          other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 (1 个百分点)'] },
          interest: { label: '利息' },
          tax: { label: '税费' },
          fulfillment: { label: '履约', notes: ['占收入 16%', '同比持平'] },
          technology_content: { label: '技术与内容', notes: ['占收入 15%', '同比 +2 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 9%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比持平'] },
          other_opex: { label: '其他运营费用' },
        },
        layout: {
          labels: {
            online_stores: { blocks: [
              { x: 358, top: 420, anchor: 'end', semanticRole: 'source-group', lines: [{ text: '线上商店', size: 38, weight: 800, color: ORANGE }] },
              { x: 428, top: 278, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '同比 +7%', size: 23, weight: 400, color: NOTE },
              ] },
            ] },
            physical_store: { blocks: [
              { x: 355, top: 630, anchor: 'end', semanticRole: 'source-group', lines: [{ text: '实体商店', size: 38, weight: 800, color: ORANGE }] },
              { x: 428, top: 550, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '同比 +10%', size: 23, weight: 400, color: NOTE },
              ] },
            ] },
            third_party_seller_services: { blocks: [
              { x: 355, top: 745, anchor: 'end', lineGap: 9, semanticRole: 'source-group', lines: [
                { text: '第三方卖家', size: 38, weight: 800, color: ORANGE },
                { text: '服务', size: 38, weight: 800, color: ORANGE },
              ] },
              { x: 428, top: 666, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '同比 +18%', size: 23, weight: 400, color: NOTE },
              ] },
            ] },
            subscription: { blocks: [
              { x: 355, top: 902, anchor: 'end', semanticRole: 'source-group', lines: [{ text: '订阅', size: 38, weight: 800, color: ORANGE }] },
              { x: 428, top: 855, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '同比 +9%', size: 23, weight: 400, color: NOTE },
              ] },
            ] },
            advertising: { blocks: [
              { x: 355, top: 1038, anchor: 'end', semanticRole: 'source-group', lines: [{ text: '广告', size: 38, weight: 800, color: ORANGE }] },
              { x: 428, top: 977, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '同比 +25%', size: 23, weight: 400, color: NOTE },
              ] },
            ] },
            aws: { blocks: [{ x: 428, top: 1098, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 34, weight: 400, color: '#111111' },
              { text: '同比 +27%', size: 23, weight: 400, color: NOTE },
            ] }] },
            other_revenue: { blocks: [
              { x: 338, top: 1319, anchor: 'end', semanticRole: 'source-group', lines: [{ text: '其他', size: 38, weight: 800, color: ORANGE }] },
              { x: 428, top: 1284, anchor: 'middle', lines: [{ text: '$value', size: 34, weight: 400, color: '#111111' }] },
            ] },
            revenue: { blocks: [{ x: 897, top: 463, anchor: 'middle', lineGap: 12, lines: [
              { text: '收入', size: 42, weight: 800, color: '#111111' },
              { text: '$value', size: 38, weight: 400, color: '#111111' },
              { text: '同比 +15%', size: 26, weight: 400, color: NOTE },
            ] }] },
            gross_profit: { blocks: [{ x: 1368, top: 339, anchor: 'middle', lineGap: 11, lines: [
              { text: '毛利润', size: 42, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
              { text: '利润率 45%', size: 28, weight: 400, color: NOTE },
              { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE },
            ] }] },
            cost_of_revenue: { blocks: [{ x: 1357, top: 1144, anchor: 'middle', lineGap: 11, lines: [
              { text: '收入', size: 38, weight: 800, color: RED_LABEL },
              { text: '成本', size: 38, weight: 800, color: RED_LABEL },
              { text: '$value', size: 37, weight: 400, color: RED_LABEL },
            ] }] },
            operating_profit: { blocks: [{ x: 1869, top: 263, anchor: 'middle', lineGap: 10, lines: [
              { text: '营业利润', size: 42, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
              { text: '利润率 2%', size: 28, weight: 400, color: NOTE },
              { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
            ] }] },
            operating_expenses: { blocks: [{ x: 1869, top: 960, anchor: 'middle', lineGap: 10, lines: [
              { text: '运营', size: 39, weight: 800, color: RED_LABEL },
              { text: '费用', size: 39, weight: 800, color: RED_LABEL },
              { text: '$value', size: 37, weight: 400, color: RED_LABEL },
            ] }] },
            other_income: { blocks: [{ x: 2205, top: 493, anchor: 'middle', lineGap: 7, lines: [
              { text: '其他', size: 25, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 24, weight: 400, color: GREEN_LABEL },
            ] }] },
            net_profit: { blocks: [{ x: 2463, top: 273, anchor: 'middle', lineGap: 10, lines: [
              { text: '净利润', size: 42, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
              { text: '利润率 2%', size: 28, weight: 400, color: NOTE },
              { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
            ] }] },
            interest: { blocks: [{ x: 2460, top: 596, anchor: 'middle', lineGap: 7, lines: [
              { text: '利息', size: 25, weight: 800, color: RED_LABEL },
              { text: '$value', size: 24, weight: 400, color: RED_LABEL },
            ] }] },
            tax: { blocks: [{ x: 2460, top: 663, anchor: 'middle', lineGap: 7, lines: [
              { text: '税费', size: 25, weight: 800, color: RED_LABEL },
              { text: '$value', size: 24, weight: 400, color: RED_LABEL },
            ] }] },
            fulfillment: { blocks: [{ x: RIGHT_LABEL_X, top: 770, anchor: 'start', lineGap: 8, lines: [
              { text: '履约 ($20.6B)', size: 22, weight: 800, color: RED_LABEL },
              { text: '占收入 16%', size: 21, weight: 400, color: NOTE },
              { text: '同比持平', size: 21, weight: 400, color: NOTE },
            ] }] },
            technology_content: { blocks: [{ x: RIGHT_LABEL_X, top: 947, anchor: 'start', lineGap: 8, lines: [
              { text: '技术与内容', size: 25, weight: 800, color: RED_LABEL },
              { text: '($19.5B)', size: 25, weight: 800, color: RED_LABEL },
              { text: '占收入 15%', size: 24, weight: 400, color: NOTE },
              { text: '同比 +2 个百分点', size: 24, weight: 400, color: NOTE },
            ] }] },
            sm: { blocks: [{ x: 2390, top: 1106, anchor: 'start', lineGap: 8, lines: [
              { text: '销售与市场 ($11.0B)', size: 25, weight: 800, color: RED_LABEL },
              { text: '占收入 9%', size: 24, weight: 400, color: NOTE },
              { text: '同比 +1 个百分点', size: 24, weight: 400, color: NOTE },
            ] }] },
            ga: { blocks: [{ x: 2396, top: 1237, anchor: 'start', lineGap: 8, lines: [
              { text: '管理费用 ($3.1B)', size: 25, weight: 800, color: RED_LABEL },
              { text: '占收入 2%', size: 24, weight: 400, color: NOTE },
              { text: '同比持平', size: 24, weight: 400, color: NOTE },
            ] }] },
            other_opex: { blocks: [{ x: 2371, top: 1367, anchor: 'start', lines: [
              { text: '其他运营费用 ($0.2B)', size: 22, weight: 800, color: RED_LABEL },
            ] }] },
          },
        },
      },
    },
  });
})();
