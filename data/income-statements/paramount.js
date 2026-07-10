/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'paramount-q4-fy25',
      company: 'Paramount',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/paramount-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.148,
        notes: ['+2% Y/Y', 'Official Q4 2025 total revenue; source chart displays $8.1B.'],
        items: [
          { id: 'direct_to_consumer', label: 'Direct to consumer', value: 2.213, notes: ['+10% Y/Y', '(7%) adjusted OIBDA margin', '+7pp Y/Y'] },
          { id: 'tv_media', label: 'TV Media', value: 4.714, notes: ['(5%) Y/Y', '23% adjusted OIBDA margin', '+4pp Y/Y'] },
          { id: 'filmed_entertainment', label: 'Filmed Entertainment', value: 1.256, notes: ['+16% Y/Y', '(9%) adjusted OIBDA margin', '(6pp) Y/Y'] },
          { id: 'eliminations', label: 'Eliminations', value: -0.035, notes: ['The source chart shows eliminations as ($35M).'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart directly bridges revenue and operating loss to costs and expenses; no separate gross-profit or cost-of-revenue layer is shown.'],
        },
        operatingExpenses: {
          total: 8.487,
          notes: ['Official Q4 2025 total costs and expenses, calculated as $8.148B revenue plus $0.339B operating loss; source chart displays ($8.5B).'],
          items: [
            { id: 'operating', label: 'Operating', value: 5.8 },
            { id: 'sga', label: 'SG&A', value: 1.8 },
            { id: 'restructuring', label: 'Restructuring', value: 0.5 },
            { id: 'amortization', label: 'Amortization', value: 0.346, notes: ['Source chart rounds this visible amount to ($0.4B).'] },
            { id: 'other', label: 'Other', value: 0.041, notes: ['Source chart displays ($41M).'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['The source chart ends at operating loss and does not show a separate tax line.'],
        },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { label: 'Gross profit bridge', value: 8.148, notes: ['SSOT bridge for arithmetic only; source chart does not display gross profit.'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.339, notes: ['(4%) margin', '(6pp) Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -0.339, notes: ['No separate net income or net loss line is shown in the source chart.'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +2%', '官方 2025 年第四季度总收入为 $8.148B；来源图表显示为 $8.1B。'],
            items: [
              { id: 'direct_to_consumer', label: '直接面向消费者', notes: ['同比 +10%', '调整后 OIBDA 利润率 (7%)', '同比 +7 个百分点'] },
              { id: 'tv_media', label: '电视媒体', notes: ['同比 (5%)', '调整后 OIBDA 利润率 23%', '同比 +4 个百分点'] },
              { id: 'filmed_entertainment', label: '影视娱乐', notes: ['同比 +16%', '调整后 OIBDA 利润率 (9%)', '同比 (6 个百分点)'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图表将抵销显示为 ($35M)。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图表将收入和营业亏损直接桥接至成本和费用；未显示单独毛利润或收入成本层。'] },
            operatingExpenses: {
              notes: ['官方 2025 年第四季度成本和费用总额，按 $8.148B 收入加 $0.339B 营业亏损计算；来源图表显示为 ($8.5B)。'],
              items: [
                { id: 'operating', label: '运营成本' },
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'restructuring', label: '重组' },
                { id: 'amortization', label: '摊销', notes: ['来源图表将此可见金额四舍五入为 ($0.4B)。'] },
                { id: 'other', label: '其他', notes: ['来源图表显示为 ($41M)。'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图表止于营业亏损，未显示单独的税费项目。'] },
          },
          profit: {
            gross: { label: '毛利润桥接', notes: ['仅用于 SSOT 算术桥接；来源图表未显示毛利润。'] },
            operating: { label: '营业亏损', notes: ['利润率 (4%)', '同比 (6 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图表未显示单独的净利润或净亏损项目。'] },
          },
        },
      },
    },
    {
      key: 'paramount-q1-fy26',
      company: 'Paramount',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/paramount-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 7.4,
        notes: ['+2% Y/Y', 'Official Q1 2026 total revenues were $7.347B; source chart displays $7.4B.'],
        items: [
          { id: 'filmed_entertainment', label: 'Filmed Entertainment', value: 1.3, notes: ['+11% Y/Y', '13% adj. margin', '+6pp Y/Y'] },
          { id: 'tv_media', label: 'TV Media', value: 3.7, notes: ['(6%) Y/Y', '29% adj. margin', '+3pp Y/Y'] },
          { id: 'direct_to_consumer', label: 'Direct to consumer', value: 2.4, notes: ['+11% Y/Y', '10% adj. margin', '+11pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 0,
          notes: ['Source chart flows revenue directly to operating profit and total costs and expenses; no separate gross-profit or cost-of-revenue layer is shown.'],
        },
        operatingExpenses: {
          total: 6.7,
          notes: [
            'Source chart labels this bridge as Costs and expenses; official total costs and expenses were $6.731B.',
            'Rounded source-chart item labels are preserved; official statements list Operating $4.855B, SG&A $1.411B, depreciation and amortization $0.362B, and restructuring/transaction-related items $0.103B.',
          ],
          items: [
            { id: 'operating', label: 'Operating', value: 4.9 },
            { id: 'sga', label: 'SG&A', value: 1.4 },
            {
              id: 'restructuring',
              label: 'Restructuring',
              value: 0.4,
              notes: ['Source chart displays Restructuring as ($0.4B); official Q1 statement lists depreciation and amortization as $0.362B.'],
            },
            {
              id: 'amortization',
              label: 'Amortization',
              value: 0.1,
              notes: ['Source chart displays Amortization as ($0.1B); official Q1 statement lists restructuring and transaction-related items as $0.103B.'],
            },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 0.2,
          notes: ['Official provision for income taxes was $155M; source chart displays ($0.2B).'],
        },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.3,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.3,
            notes: ['Source chart groups interest expense, interest income, other items, and equity losses into Other.'],
          },
        ],
      },
      profit: {
        gross: {
          label: 'Gross profit bridge',
          value: 7.4,
          notes: ['SSOT bridge for arithmetic only; source chart does not display gross profit.'],
        },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 0.6,
          notes: ['8% margin', '+1pp Y/Y', 'Official operating income was $616M.'],
        },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 0.2,
          notes: ['2% margin', '+0pp Y/Y', 'Official net earnings attributable to Parent were $168M.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +2%', '官方 2026 年第一季度总收入为 $7.347B；来源图表显示为 $7.4B。'],
            items: [
              { id: 'filmed_entertainment', label: '影视娱乐', notes: ['同比 +11%', '调整后利润率 13%', '同比 +6 个百分点'] },
              { id: 'tv_media', label: '电视媒体', notes: ['同比 (6%)', '调整后利润率 29%', '同比 +3 个百分点'] },
              { id: 'direct_to_consumer', label: '直接面向消费者', notes: ['同比 +11%', '调整后利润率 10%', '同比 +11 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图表将收入直接拆分为营业利润和总成本费用；未显示单独毛利润或收入成本层。'],
            },
            operatingExpenses: {
              notes: [
                '来源图表将该桥接项标为成本和费用；官方总成本和费用为 $6.731B。',
                '保留来源图表的四舍五入项目标签；官方报表列示运营 $4.855B、SG&A $1.411B、折旧和摊销 $0.362B，以及重组/交易相关项目 $0.103B。',
              ],
              items: [
                { id: 'operating', label: '运营成本' },
                { id: 'sga', label: '销售、一般及行政' },
                {
                  id: 'restructuring',
                  label: '重组',
                  notes: ['来源图表将重组显示为 ($0.4B)；官方 Q1 报表列示折旧和摊销为 $0.362B。'],
                },
                {
                  id: 'amortization',
                  label: '摊销',
                  notes: ['来源图表将摊销显示为 ($0.1B)；官方 Q1 报表列示重组和交易相关项目为 $0.103B。'],
                },
              ],
            },
            tax: {
              label: '税费',
              notes: ['官方所得税拨备为 $155M；来源图表显示为 ($0.2B)。'],
            },
          },
          otherExpenses: {
            items: [
              {
                id: 'other',
                label: '其他',
                notes: ['来源图表将利息费用、利息收入、其他项目和权益法投资亏损归入其他。'],
              },
            ],
          },
          profit: {
            gross: {
              label: '毛利润桥接',
              notes: ['仅用于 SSOT 算术桥接；来源图表未显示毛利润。'],
            },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 +1 个百分点', '官方营业利润为 $616M。'] },
            net: { label: '净利润', notes: ['利润率 2%', '同比 +0 个百分点', '归属于母公司的官方净利润为 $168M。'] },
          },
        },
      },
    }
  );
})(window);
