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
      key: 'block-q3-fy25',
      company: 'Block',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/block-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 6.1,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'bitcoin_revenue', label: 'Bitcoin', value: 2.0, notes: ['(19%) Y/Y', '4% gross margin'] },
          { id: 'transaction_revenue', label: 'Transaction', value: 1.9, notes: ['+9% Y/Y', '39% gross margin'] },
          { id: 'subscription_services', label: 'Subscription and services', value: 2.2, notes: ['+23% Y/Y', '86% gross margin'] },
          { id: 'hardware_revenue', label: 'Hardware', value: 0.1, notes: ['+91% Y/Y', '(47%) gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 3.5,
          notes: ['Visible cost detail items sum to $3.414B because the source chart rounds the aggregate label.'],
          items: [
            { id: 'bitcoin_cost', label: 'Bitcoin', value: 1.9 },
            { id: 'transaction_cost', label: 'Transaction', value: 1.1 },
            { id: 'subscription_cost', label: 'Subscription', value: 0.3 },
            { id: 'hardware_cost', label: 'Hardware', value: 0.1 },
            { id: 'amortization', label: 'Amortization', value: 0.014 },
          ],
        },
        operatingExpenses: {
          total: 2.3,
          notes: ['Visible operating-expense line items sum to $2.234B because the source chart rounds the aggregate label.'],
          items: [
            { id: 'product_development', label: 'Product Development', value: 0.7 },
            { id: 'sales_marketing', label: 'S&M', value: 0.6 },
            { id: 'ga', label: 'G&A', value: 0.5 },
            { id: 'loan_losses', label: 'Loan losses', value: 0.4 },
            { id: 'other_operating', label: 'Other', value: 0.034 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.2,
        items: [
          { id: 'other_non_operating', label: 'Other', value: 0.2 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 2.7,
          notes: ['+18% Y/Y'],
          items: [
            { id: 'square_gross_profit', label: 'Square', value: 1.0, notes: ['+9% Y/Y'] },
            { id: 'cash_app_gross_profit', label: 'Cash App', value: 1.6, notes: ['+24% Y/Y'] },
          ],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.4, notes: ['7% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['8% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'bitcoin_revenue', label: '比特币', notes: ['同比 (19%)', '毛利率 4%'] },
              { id: 'transaction_revenue', label: '交易', notes: ['同比 +9%', '毛利率 39%'] },
              { id: 'subscription_services', label: '订阅与服务', notes: ['同比 +23%', '毛利率 86%'] },
              { id: 'hardware_revenue', label: '硬件', notes: ['同比 +91%', '毛利率 (47%)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['可见成本明细合计为 $3.414B，差异来自来源图对汇总标签的取整。'],
              items: [
                { id: 'bitcoin_cost', label: '比特币' },
                { id: 'transaction_cost', label: '交易' },
                { id: 'subscription_cost', label: '订阅' },
                { id: 'hardware_cost', label: '硬件' },
                { id: 'amortization', label: '摊销' },
              ],
            },
            operatingExpenses: {
              notes: ['可见运营费用明细合计为 $2.234B，差异来自来源图对汇总标签的取整。'],
              items: [
                { id: 'product_development', label: '产品开发' },
                { id: 'sales_marketing', label: '销售与营销' },
                { id: 'ga', label: '一般及行政' },
                { id: 'loan_losses', label: '贷款损失' },
                { id: 'other_operating', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: {
              label: '毛利润',
              notes: ['同比 +18%'],
              items: [
                { id: 'square_gross_profit', label: 'Square 商户生态', notes: ['同比 +9%'] },
                { id: 'cash_app_gross_profit', label: 'Cash App 消费者生态', notes: ['同比 +24%'] },
              ],
            },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'block-fy25',
      company: 'Block',
      period: 'FY25',
      periodNote: 'Year ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/block-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 24.2,
        notes: ['+0% Y/Y'],
        items: [
          { id: 'commerce_enablement', label: 'Commerce Enablement', value: 11.5, notes: ['+10% Y/Y', '54% gross margin'] },
          { id: 'financial_solutions', label: 'Financial Solutions', value: 4.2, notes: ['+28% Y/Y', '92% gross margin'] },
          { id: 'bitcoin_ecosystem', label: 'Bitcoin Ecosystem', value: 8.5, notes: ['(18%) Y/Y', '5% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 13.8 },
        operatingExpenses: {
          total: 8.7,
          items: [
            { id: 'product_development', label: 'Product Development', value: 2.9 },
            { id: 'sales_marketing', label: 'S&M', value: 2.3 },
            { id: 'ga', label: 'G&A', value: 2.0 },
            { id: 'loan_losses', label: 'Loan losses', value: 1.3 },
            { id: 'other_operating', label: 'Other', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [
          { id: 'other_non_operating', label: 'Other', value: 0 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.4, notes: ['+17% Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.7, notes: ['7% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.3, notes: ['5% margin', '(6pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月 31 日的年度',
          revenue: {
            notes: ['同比 +0%'],
            items: [
              { id: 'commerce_enablement', label: '商业赋能', notes: ['同比 +10%', '毛利率 54%'] },
              { id: 'financial_solutions', label: '金融解决方案', notes: ['同比 +28%', '毛利率 92%'] },
              { id: 'bitcoin_ecosystem', label: '比特币生态', notes: ['同比 (18%)', '毛利率 5%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'product_development', label: '产品开发' },
                { id: 'sales_marketing', label: '销售与营销' },
                { id: 'ga', label: '一般及行政' },
                { id: 'loan_losses', label: '贷款损失' },
                { id: 'other_operating', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['同比 +17%'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (6 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'block-q1-fy26',
      company: 'Block',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/block-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 6.1,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'commerce_enablement', label: 'Commerce Enablement', value: 2.9, notes: ['+14% Y/Y', '55% gross margin'] },
          { id: 'financial_solutions', label: 'Financial Solutions', value: 1.3, notes: ['+51% Y/Y', '93% gross margin'] },
          { id: 'bitcoin_ecosystem', label: 'Bitcoin Ecosystem', value: 1.8, notes: ['(23%) Y/Y', '4% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 3.1 },
        operatingExpenses: {
          total: 3.1,
          notes: ['Visible operating-expense line items sum to $3.134B because the source chart rounds the aggregate label.'],
          items: [
            { id: 'product_development', label: 'Product Development', value: 1.0 },
            { id: 'sales_marketing', label: 'S&M', value: 0.9 },
            { id: 'ga', label: 'G&A', value: 0.7 },
            { id: 'loan_losses', label: 'Loan losses', value: 0.5 },
            { id: 'other_operating', label: 'Other', value: 0.034 },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.9, notes: ['+27% Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.2, notes: ['(3%) margin', '(9pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.2,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'commerce_enablement', label: '商业赋能', notes: ['同比 +14%', '毛利率 55%'] },
              { id: 'financial_solutions', label: '金融解决方案', notes: ['同比 +51%', '毛利率 93%'] },
              { id: 'bitcoin_ecosystem', label: '比特币生态', notes: ['同比 (23%)', '毛利率 4%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见运营费用明细合计为 $3.134B，差异来自来源图对汇总标签的取整。'],
              items: [
                { id: 'product_development', label: '产品开发' },
                { id: 'sales_marketing', label: '销售与营销' },
                { id: 'ga', label: '一般及行政' },
                { id: 'loan_losses', label: '贷款损失' },
                { id: 'other_operating', label: '其他' },
              ],
            },
            tax: { label: '税费', notes: ['来源图未显示单独的税费项目。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['同比 +27%'] },
            operating: { label: '营业亏损', notes: ['利润率 (3%)', '同比 (9 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
          },
        },
      },
    }
  );
})(window);
