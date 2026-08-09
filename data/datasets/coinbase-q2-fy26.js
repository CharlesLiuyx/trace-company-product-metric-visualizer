/* ====================================================================
 * Coinbase - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/coinbase-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const BLUE = '#0052fe';
  const BLUE_LINK = '#7ea0ea';
  const RED = '#d50000';
  const RED_LABEL = '#941506';
  const RED_LINK = '#df7f80';
  const NOTE = '#6f7073';
  const TITLE = '#155478';
  const RIGHT_LABEL_X = 2483;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coinbase-q2-fy26',
    name: 'Coinbase - Q2 FY26',
    company: 'Coinbase',
    meta: {
      company: 'Coinbase',
      title: 'Coinbase Q2FY26 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/coinbase-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 178,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2290,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 253,
      logoHeight: 242,
      logoY: 232,
      logoViewBox: '0 0 253 242',
      logoSvg: BUSINESS_ICONS.coinbaseLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: BLUE, label: BLUE },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: RED_LINK,
        profit: BLUE_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },

    layout: {
      scale: 0.2235,
      nodes: {
        consumer: { x: 367, y: 332, width: 71, height: 100 },
        institutions: { x: 367, y: 572, width: 71, height: 20 },
        other_transaction: { x: 367, y: 717, width: 71, height: 9 },
        stablecoin: { x: 367, y: 851, width: 71, height: 64 },
        blockchain_rewards: { x: 367, y: 1047, width: 71, height: 17 },
        interest_income: { x: 367, y: 1184, width: 71, height: 12 },
        other_subscription: { x: 367, y: 1304, width: 71, height: 24 },
        transaction_based: { x: 834, y: 507, width: 70, height: 133 },
        subscription_services: { x: 834, y: 925, width: 70, height: 122 },
        other_revenue: { x: 834, y: 1251, width: 70, height: 13 },
        revenue: { x: 1301, y: 636, width: 71, height: 273 },
        operating_loss: { x: 1514, y: 1056, width: 71, height: 24 },
        operating_expenses: { x: 1769, y: 623, width: 70, height: 299 },
        technology: { x: 2235, y: 339, width: 71, height: 104 },
        ga: { x: 2235, y: 606, width: 71, height: 77 },
        sm: { x: 2235, y: 841, width: 71, height: 53 },
        transaction_costs: { x: 2235, y: 1039, width: 71, height: 41 },
        other_costs: { x: 2235, y: 1209, width: 71, height: 15 },
      },
      labels: {
        consumer: {
          blocks: [
            {
              x: 403, top: 231, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(30%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 297, top: 358, anchor: 'end',
              lines: [{ text: 'Consumer', size: 40, weight: 800 }],
            },
          ],
        },
        institutions: {
          blocks: [
            {
              x: 403, top: 472, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+64% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 310, top: 558, anchor: 'end',
              lines: [{ text: 'Institutions', size: 40, weight: 800 }],
            },
          ],
        },
        other_transaction: {
          blocks: [
            {
              x: 403, top: 618, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(12%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 262, top: 697, anchor: 'end',
              lines: [{ text: 'Other', size: 40, weight: 800 }],
            },
          ],
        },
        stablecoin: {
          blocks: [
            {
              x: 403, top: 744, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(6%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 310, top: 859, anchor: 'end',
              lines: [{ text: 'Stablecoin', size: 40, weight: 800 }],
            },
          ],
        },
        blockchain_rewards: {
          blocks: [
            {
              x: 403, top: 951, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(43%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 310, top: 1009, anchor: 'end', lineGap: 5,
              lines: [
                { text: 'Blockchain', size: 40, weight: 800 },
                { text: 'rewards', size: 40, weight: 800 },
              ],
            },
          ],
        },
        interest_income: {
          blocks: [
            {
              x: 403, top: 1083, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 310, top: 1164, anchor: 'end',
              lines: [{ text: 'Interest income', size: 36, weight: 800 }],
            },
          ],
        },
        other_subscription: {
          blocks: [
            {
              x: 403, top: 1216, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(4%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 310, top: 1293, anchor: 'end',
              lines: [{ text: 'Other sub', size: 40, weight: 800 }],
            },
          ],
        },
        transaction_based: {
          blocks: [
            {
              x: 869, top: 362, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Transaction-based', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(22%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        subscription_services: {
          blocks: [
            {
              x: 869, top: 738, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Subscription', size: 40, weight: 800 },
                { text: '& Services', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(12%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 869, top: 1106, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(35%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1337, top: 493, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 42, weight: 800 },
                { text: '$value', size: 41, weight: 400 },
                { text: '(19%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1550, top: 1109, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'loss', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '(9%) margin', size: 28, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1804, top: 464, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        technology: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 343, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Technology ($473M)', size: 31, weight: 800 },
                { text: '39% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+13pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 608, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'G&A ($357M)', size: 31, weight: 800 },
                { text: '29% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 833, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'S&M ($240M)', size: 31, weight: 800 },
                { text: '20% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        transaction_costs: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1025, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Transaction ($190M)', size: 31, weight: 800 },
                { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_costs: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1196, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other ($74M)', size: 31, weight: 800 },
                { text: '6% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(14pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'consumer', label: 'Consumer', value: 452, notes: ['(30%) Y/Y'], type: 'source', col: 0, order: 0 },
      { id: 'institutions', label: 'Institutions', value: 100, notes: ['+64% Y/Y'], type: 'source', col: 0, order: 1 },
      { id: 'other_transaction', label: 'Other', value: 47, notes: ['(12%) Y/Y'], type: 'source', col: 0, order: 2 },
      { id: 'stablecoin', label: 'Stablecoin', value: 292, notes: ['(6%) Y/Y'], type: 'source', col: 0, order: 3 },
      { id: 'blockchain_rewards', label: ['Blockchain', 'rewards'], value: 83, notes: ['(43%) Y/Y'], type: 'source', col: 0, order: 4 },
      { id: 'interest_income', label: 'Interest income', value: 66, notes: ['+11% Y/Y'], type: 'source', col: 0, order: 5 },
      { id: 'other_subscription', label: 'Other sub', value: 114, notes: ['(4%) Y/Y'], type: 'source', col: 0, order: 6 },
      { id: 'transaction_based', label: 'Transaction-based', value: 599, notes: ['(22%) Y/Y'], type: 'source', col: 1, order: 0 },
      { id: 'subscription_services', label: ['Subscription', '& Services'], value: 555, notes: ['(12%) Y/Y'], type: 'source', col: 1, order: 1 },
      { id: 'other_revenue', label: 'Other', value: 66, notes: ['(35%) Y/Y'], type: 'source', col: 1, order: 2 },
      { id: 'revenue', label: 'Revenue', value: 1220, valueText: '$1,220M', notes: ['(19%) Y/Y'], type: 'hub', col: 2, order: 0 },
      { id: 'operating_loss', label: ['Operating', 'loss'], value: -113, notes: ['(9%) margin', '(8pp) Y/Y'], type: 'cost', col: 3, order: 1 },
      { id: 'operating_expenses', label: ['Operating', 'expenses'], value: 1333, valueText: '($1,333M)', type: 'cost', col: 4, order: 0 },
      { id: 'technology', label: 'Technology', value: 473, notes: ['39% of revenue', '+13pp Y/Y'], type: 'cost', col: 5, order: 0 },
      { id: 'ga', label: 'G&A', value: 357, notes: ['29% of revenue', '+6pp Y/Y'], type: 'cost', col: 5, order: 1 },
      { id: 'sm', label: 'S&M', value: 240, notes: ['20% of revenue', '+4pp Y/Y'], type: 'cost', col: 5, order: 2 },
      { id: 'transaction_costs', label: 'Transaction', value: 190, notes: ['16% of revenue', '(1pp) Y/Y'], type: 'cost', col: 5, order: 3 },
      { id: 'other_costs', label: 'Other', value: 74, notes: ['6% of revenue', '(14pp) Y/Y'], type: 'cost', col: 5, order: 4 },
    ],

    links: [
      { source: 'consumer', target: 'transaction_based', value: 452, sourceWidth: 100, targetWidth: 100, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'institutions', target: 'transaction_based', value: 100, sourceWidth: 20, targetWidth: 20, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_transaction', target: 'transaction_based', value: 47, sourceWidth: 9, targetWidth: 13, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'transaction_based', target: 'revenue', value: 599, sourceWidth: 133, targetWidth: 133, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },

      { source: 'stablecoin', target: 'subscription_services', value: 292, sourceWidth: 64, targetWidth: 64, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'blockchain_rewards', target: 'subscription_services', value: 83, sourceWidth: 17, targetWidth: 17, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'interest_income', target: 'subscription_services', value: 66, sourceWidth: 12, targetWidth: 12, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'other_subscription', target: 'subscription_services', value: 114, sourceWidth: 24, targetWidth: 29, sourceOrder: 0, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'subscription_services', target: 'revenue', value: 555, sourceWidth: 122, targetWidth: 122, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 66, sourceWidth: 13, targetWidth: 18, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },

      { source: 'revenue', target: 'operating_expenses', value: 1220, sourceWidth: 273, targetWidth: 273, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 113, sourceWidth: 24, targetWidth: 26, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },

      { source: 'operating_expenses', target: 'technology', value: 473, sourceWidth: 104, targetWidth: 104, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 357, sourceWidth: 77, targetWidth: 77, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 240, sourceWidth: 53, targetWidth: 53, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'transaction_costs', value: 190, sourceWidth: 41, targetWidth: 41, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_costs', value: 74, sourceWidth: 24, targetWidth: 15, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],

    i18n: {
      zh: {
        name: 'Coinbase · 2026 财年第二季度',
        meta: {
          title: 'Coinbase 2026 财年第二季度利润表',
          period: '',
          periodNote: '',
          titleSize: 112,
          titleTextLength: 1820,
        },
        nodes: {
          consumer: { label: '消费者', notes: ['同比 (30%)'] },
          institutions: { label: '机构', notes: ['同比 +64%'] },
          other_transaction: { label: '其他', notes: ['同比 (12%)'] },
          stablecoin: { label: '稳定币', notes: ['同比 (6%)'] },
          blockchain_rewards: { label: '区块链奖励', notes: ['同比 (43%)'] },
          interest_income: { label: '利息收入', notes: ['同比 +11%'] },
          other_subscription: { label: '其他订阅', notes: ['同比 (4%)'] },
          transaction_based: { label: '交易收入', notes: ['同比 (22%)'] },
          subscription_services: { label: '订阅与服务', notes: ['同比 (12%)'] },
          other_revenue: { label: '其他', notes: ['同比 (35%)'] },
          revenue: { label: '收入', notes: ['同比 (19%)'] },
          operating_loss: { label: '营业亏损', notes: ['利润率 (9%)', '同比 (8 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          technology: { label: '技术', notes: ['占收入 39%', '同比 +13 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 29%', '同比 +6 个百分点'] },
          sm: { label: '销售与营销', notes: ['占收入 20%', '同比 +4 个百分点'] },
          transaction_costs: { label: '交易', notes: ['占收入 16%', '同比 (1 个百分点)'] },
          other_costs: { label: '其他', notes: ['占收入 6%', '同比 (14 个百分点)'] },
        },
        layout: {
          labels: {
            consumer: {
              blocks: [
                {
                  x: 403, top: 231, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (30%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 297, top: 358, anchor: 'end',
                  lines: [{ text: '消费者', size: 40, weight: 800 }],
                },
              ],
            },
            institutions: {
              blocks: [
                {
                  x: 403, top: 472, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +64%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 310, top: 558, anchor: 'end',
                  lines: [{ text: '机构', size: 40, weight: 800 }],
                },
              ],
            },
            other_transaction: {
              blocks: [
                {
                  x: 403, top: 618, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (12%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 262, top: 697, anchor: 'end',
                  lines: [{ text: '其他', size: 40, weight: 800 }],
                },
              ],
            },
            stablecoin: {
              blocks: [
                {
                  x: 403, top: 744, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (6%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 310, top: 859, anchor: 'end',
                  lines: [{ text: '稳定币', size: 40, weight: 800 }],
                },
              ],
            },
            blockchain_rewards: {
              blocks: [
                {
                  x: 403, top: 951, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (43%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 310, top: 1034, anchor: 'end',
                  lines: [{ text: '区块链奖励', size: 40, weight: 800 }],
                },
              ],
            },
            interest_income: {
              blocks: [
                {
                  x: 403, top: 1083, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +11%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 310, top: 1163, anchor: 'end',
                  lines: [{ text: '利息收入', size: 40, weight: 800 }],
                },
              ],
            },
            other_subscription: {
              blocks: [
                {
                  x: 403, top: 1216, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (4%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 310, top: 1293, anchor: 'end',
                  lines: [{ text: '其他订阅', size: 40, weight: 800 }],
                },
              ],
            },
            transaction_based: {
              blocks: [
                {
                  x: 869, top: 362, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '交易收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (22%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            subscription_services: {
              blocks: [
                {
                  x: 869, top: 753, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '订阅与服务', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (12%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_revenue: {
              blocks: [
                {
                  x: 869, top: 1106, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '其他', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (35%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1337, top: 493, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 42, weight: 800 },
                    { text: '$value', size: 41, weight: 400 },
                    { text: '同比 (19%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_loss: {
              blocks: [
                {
                  x: 1550, top: 1109, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '营业', size: 38, weight: 800 },
                    { text: '亏损', size: 38, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '利润率 (9%)', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (8 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1804, top: 464, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '运营', size: 38, weight: 800 },
                    { text: '费用', size: 38, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            technology: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 343, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '技术 ($473M)', size: 31, weight: 800 },
                    { text: '占收入 39%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +13 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 608, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '管理费用 ($357M)', size: 31, weight: 800 },
                    { text: '占收入 29%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +6 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 833, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '销售与营销 ($240M)', size: 31, weight: 800 },
                    { text: '占收入 20%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +4 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            transaction_costs: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1025, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '交易 ($190M)', size: 31, weight: 800 },
                    { text: '占收入 16%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_costs: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1196, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '其他 ($74M)', size: 31, weight: 800 },
                    { text: '占收入 6%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (14 个百分点)', size: 28, weight: 400, color: NOTE },
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
