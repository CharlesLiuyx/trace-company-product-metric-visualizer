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
      key: 'affirm-q1-fy26',
      company: 'Affirm',
      period: 'Q1 FY26',
      periodNote: 'Ending Sept. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/affirm-q1-fy26.png',
      roundingTolerance: 2,
      notes: [
        'The infographic reports $933M of revenue while displayed operating profit and operating expenses sum to $934M because of published rounding.',
        'The source flows revenue directly to operating profit and operating expenses; it does not show a separate gross-profit stage.',
      ],
      revenue: {
        total: 933,
        notes: ['+34% Y/Y'],
        items: [
          {
            id: 'total_network_revenue',
            label: 'Total network revenue',
            value: 320,
            notes: ['+38% Y/Y'],
            children: [
              { id: 'merchant_network_revenue', label: 'Merchant network revenue', value: 251, notes: ['+36% Y/Y'] },
              { id: 'card_network_revenue', label: 'Card network revenue', value: 69, notes: ['+46% Y/Y'] },
            ],
          },
          { id: 'interest_income', label: 'Interest income', value: 454, notes: ['+20% Y/Y'] },
          { id: 'gain_on_sale_of_loans', label: 'Gain on sale of loans', value: 119, notes: ['+87% Y/Y'] },
          { id: 'servicing_income', label: 'Servicing income', value: 40, notes: ['+53% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue not separately shown',
          value: 0,
          notes: ['The source flows revenue directly to operating profit and operating expenses.'],
        },
        operatingExpenses: {
          total: 870,
          items: [
            { id: 'loss_on_loan_purchase_commitment', label: 'Loss on loan purchase commitment', value: 72 },
            { id: 'provision_for_credit_losses', label: 'Provision for credit losses', value: 163 },
            { id: 'funding_costs', label: 'Funding costs', value: 110 },
            { id: 'processing_servicing', label: 'Processing & Servicing', value: 134 },
            { id: 'technology_data_analytics', label: 'Technology & data analytics', value: 168 },
            { id: 'sales_marketing', label: 'S&M', value: 78 },
            { id: 'general_administrative', label: 'G&A', value: 145 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2 },
      },
      otherIncome: {
        total: 19,
        items: [{ id: 'other_income', label: 'Other', value: 19 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: {
          label: 'Gross profit not separately shown',
          value: 933,
          notes: ['No separate gross-profit stage appears in the source infographic.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 64, notes: ['7% margin', '+26pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 81, notes: ['9% margin', '+23pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +34%'],
            items: [
              {
                id: 'total_network_revenue',
                label: '网络总收入',
                notes: ['同比 +38%'],
                children: [
                  { id: 'merchant_network_revenue', label: '商户网络收入', notes: ['同比 +36%'] },
                  { id: 'card_network_revenue', label: '卡网络收入', notes: ['同比 +46%'] },
                ],
              },
              { id: 'interest_income', label: '利息收入', notes: ['同比 +20%'] },
              { id: 'gain_on_sale_of_loans', label: '贷款出售收益', notes: ['同比 +87%'] },
              { id: 'servicing_income', label: '服务收入', notes: ['同比 +53%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '未单列收入成本',
              notes: ['源图将收入直接分流至营业利润和运营费用。'],
            },
            operatingExpenses: {
              items: [
                { id: 'loss_on_loan_purchase_commitment', label: '贷款购买承诺损失' },
                { id: 'provision_for_credit_losses', label: '信贷损失准备' },
                { id: 'funding_costs', label: '融资成本' },
                { id: 'processing_servicing', label: '处理与服务' },
                { id: 'technology_data_analytics', label: '技术与数据分析' },
                { id: 'sales_marketing', label: '销售与营销' },
                { id: 'general_administrative', label: '一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '未单列毛利润', notes: ['源图未显示单独的毛利润阶段。'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +26 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 +23 个百分点'] },
          },
        },
      },
    },
    {
      key: 'affirm-q3-fy26',
      company: 'Affirm',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/affirm-q3-fy26.png',
      roundingTolerance: 2,
      notes: [
        'The infographic rounds total operating expenses to $950M while its seven displayed components sum to $951M.',
        'The source flows revenue directly to operating profit and operating expenses; it does not show a separate gross-profit stage.',
      ],
      revenue: {
        total: 1038,
        notes: ['+33% Y/Y'],
        items: [
          {
            id: 'total_network_revenue',
            label: 'Total network revenue',
            value: 334,
            notes: ['+23% Y/Y'],
            children: [
              { id: 'merchant_network_revenue', label: 'Merchant network revenue', value: 268, notes: ['+25% Y/Y'] },
              { id: 'card_network_revenue', label: 'Card network revenue', value: 66, notes: ['+13% Y/Y'] },
            ],
          },
          { id: 'interest_income', label: 'Interest income', value: 532, notes: ['+32% Y/Y'] },
          { id: 'gain_on_sale_of_loans', label: 'Gain on sale of loans', value: 127, notes: ['+68% Y/Y'] },
          { id: 'servicing_income', label: 'Servicing income', value: 45, notes: ['+39% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue not separately shown',
          value: 0,
          notes: ['The source flows revenue directly to operating profit and operating expenses.'],
        },
        operatingExpenses: {
          total: 950,
          items: [
            { id: 'loss_on_loan_purchase_commitment', label: 'Loss on loan purchase commitment', value: 68 },
            { id: 'provision_for_credit_losses', label: 'Provision for credit losses', value: 197 },
            { id: 'funding_costs', label: 'Funding costs', value: 114 },
            { id: 'processing_servicing', label: 'Processing & Servicing', value: 162 },
            { id: 'technology_data_analytics', label: 'Technology & data analytics', value: 192 },
            { id: 'sales_marketing', label: 'S&M', value: 73 },
            { id: 'general_administrative', label: 'G&A', value: 145 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4 },
      },
      otherIncome: {
        total: 19,
        items: [{ id: 'other_income', label: 'Other', value: 19 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: {
          label: 'Gross profit not separately shown',
          value: 1038,
          notes: ['No separate gross-profit stage appears in the source infographic.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 88, notes: ['9% margin', '+10pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 103, notes: ['10% margin', '+10pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +33%'],
            items: [
              {
                id: 'total_network_revenue',
                label: '网络总收入',
                notes: ['同比 +23%'],
                children: [
                  { id: 'merchant_network_revenue', label: '商户网络收入', notes: ['同比 +25%'] },
                  { id: 'card_network_revenue', label: '卡网络收入', notes: ['同比 +13%'] },
                ],
              },
              { id: 'interest_income', label: '利息收入', notes: ['同比 +32%'] },
              { id: 'gain_on_sale_of_loans', label: '贷款出售收益', notes: ['同比 +68%'] },
              { id: 'servicing_income', label: '服务收入', notes: ['同比 +39%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '未单列收入成本',
              notes: ['源图将收入直接分流至营业利润和运营费用。'],
            },
            operatingExpenses: {
              items: [
                { id: 'loss_on_loan_purchase_commitment', label: '贷款购买承诺损失' },
                { id: 'provision_for_credit_losses', label: '信贷损失准备' },
                { id: 'funding_costs', label: '融资成本' },
                { id: 'processing_servicing', label: '处理与服务' },
                { id: 'technology_data_analytics', label: '技术与数据分析' },
                { id: 'sales_marketing', label: '销售与营销' },
                { id: 'general_administrative', label: '一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '未单列毛利润', notes: ['源图未显示单独的毛利润阶段。'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 +10 个百分点'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 +10 个百分点'] },
          },
        },
      },
    },
    {
      key: 'affirm-q2-fy26',
      company: 'Affirm',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/affirm-q2-fy26.png',
      roundingTolerance: 2,
      notes: [
        'The infographic rounds total operating expenses to $1,005M while its seven displayed components sum to $1,006M.',
        'The source flows revenue directly to operating profit and operating expenses; it does not show a separate gross-profit stage.',
      ],
      revenue: {
        total: 1123,
        notes: ['+30% Y/Y'],
        items: [
          {
            id: 'total_network_revenue',
            label: 'Total network revenue',
            value: 401,
            notes: ['+32% Y/Y'],
            children: [
              { id: 'merchant_network_revenue', label: 'Merchant network revenue', value: 328, notes: ['+34% Y/Y'] },
              { id: 'card_network_revenue', label: 'Card network revenue', value: 73, notes: ['+26% Y/Y'] },
            ],
          },
          { id: 'interest_income', label: 'Interest income', value: 494, notes: ['+21% Y/Y'] },
          { id: 'gain_on_sale_of_loans', label: 'Gain on sale of loans', value: 185, notes: ['+48% Y/Y'] },
          { id: 'servicing_income', label: 'Servicing income', value: 43, notes: ['+49% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue not separately shown',
          value: 0,
          notes: ['The source flows revenue directly to operating profit and operating expenses.'],
        },
        operatingExpenses: {
          total: 1005,
          items: [
            { id: 'loss_on_loan_purchase_commitment', label: 'Loss on loan purchase commitment', value: 96 },
            { id: 'provision_for_credit_losses', label: 'Provision for credit losses', value: 214 },
            { id: 'funding_costs', label: 'Funding costs', value: 112 },
            { id: 'processing_servicing', label: 'Processing & Servicing', value: 159 },
            { id: 'technology_data_analytics', label: 'Technology & data analytics', value: 185 },
            { id: 'sales_marketing', label: 'S&M', value: 99 },
            { id: 'general_administrative', label: 'G&A', value: 141 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4 },
      },
      otherIncome: {
        total: 16,
        items: [{ id: 'other_income', label: 'Other', value: 16 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: {
          label: 'Gross profit not separately shown',
          value: 1123,
          notes: ['No separate gross-profit stage appears in the source infographic.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 118, notes: ['10% margin', '+11pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 130, notes: ['12% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +30%'],
            items: [
              {
                id: 'total_network_revenue',
                label: '网络总收入',
                notes: ['同比 +32%'],
                children: [
                  { id: 'merchant_network_revenue', label: '商户网络收入', notes: ['同比 +34%'] },
                  { id: 'card_network_revenue', label: '卡网络收入', notes: ['同比 +26%'] },
                ],
              },
              { id: 'interest_income', label: '利息收入', notes: ['同比 +21%'] },
              { id: 'gain_on_sale_of_loans', label: '贷款出售收益', notes: ['同比 +48%'] },
              { id: 'servicing_income', label: '服务收入', notes: ['同比 +49%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '未单列收入成本',
              notes: ['源图将收入直接分流至营业利润和运营费用。'],
            },
            operatingExpenses: {
              items: [
                { id: 'loss_on_loan_purchase_commitment', label: '贷款购买承诺损失' },
                { id: 'provision_for_credit_losses', label: '信贷损失准备' },
                { id: 'funding_costs', label: '融资成本' },
                { id: 'processing_servicing', label: '处理与服务' },
                { id: 'technology_data_analytics', label: '技术与数据分析' },
                { id: 'sales_marketing', label: '销售与营销' },
                { id: 'general_administrative', label: '一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '未单列毛利润', notes: ['源图未显示单独的毛利润阶段。'] },
            operating: { label: '营业利润', notes: ['利润率 10%', '同比 +11 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +2 个百分点'] },
          },
        },
      },
    }
  );
})(window);
