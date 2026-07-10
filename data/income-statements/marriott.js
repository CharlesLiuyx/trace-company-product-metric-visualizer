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
      key: 'marriott-q1-fy26',
      company: 'Marriott',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/marriott-q1-fy26.png',
      roundingTolerance: 0.05,
      revenue: {
        total: 6.689,
        notes: ['+6% Y/Y', 'Total before $35M contract investment amortization.'],
        items: [
          { id: 'base_management_fees', label: 'Base management fees', value: 0.339, notes: ['+4% Y/Y'] },
          { id: 'franchise_fees', label: 'Franchise fees', value: 0.872, notes: ['+17% Y/Y'] },
          { id: 'incentive_management_fees', label: 'Incentive management fees', value: 0.222, notes: ['+9% Y/Y'] },
          { id: 'owned_leased_and_other_revenue', label: 'Owned, leased, and other revenue', value: 0.412, notes: ['+14% Y/Y'] },
          { id: 'cost_reimbursement', label: 'Cost reimbursement revenue', value: 4.844, notes: ['+4% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'contract_investment_amortization',
          label: 'Contract investment amortization',
          value: 0.035,
          notes: ['Source chart shows this as Amortization ($35M) before the Revenue node.'],
        },
        operatingExpenses: {
          total: 5.590,
          notes: ['Official total operating costs and expenses; rounded source chart displays ($5.6B).'],
          items: [
            { id: 'owned_leased_other_direct_costs', label: 'Owned, leased, and other direct costs', value: 0.377 },
            { id: 'ga', label: 'G&A', value: 0.219 },
            {
              id: 'da',
              label: 'D&A',
              value: 0.054,
              notes: ['Source chart label reads ($0.1M); official statement lists $54M.'],
            },
            { id: 'reimbursed_expenses', label: 'Reimbursed expenses', value: 4.936 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.191 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.208,
        items: [
          {
            id: 'other_nonoperating',
            label: 'Other',
            value: 0.208,
            notes: ['Net interest expense, equity-method income, and other non-operating items.'],
          },
        ],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 6.654,
          notes: ['Bookkeeping subtotal after contract investment amortization; the source chart does not show gross profit.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.064, notes: ['16% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.665, notes: ['10% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +6%', '扣除 $35M 合同投资摊销前的合计。'],
            items: [
              { id: 'base_management_fees', label: '基础管理费', notes: ['同比 +4%'] },
              { id: 'franchise_fees', label: '特许经营费', notes: ['同比 +17%'] },
              { id: 'incentive_management_fees', label: '激励管理费', notes: ['同比 +9%'] },
              { id: 'owned_leased_and_other_revenue', label: '自有、租赁及其他收入', notes: ['同比 +14%'] },
              { id: 'cost_reimbursement', label: '成本报销收入', notes: ['同比 +4%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '合同投资摊销',
              notes: ['来源图在收入节点前将该项目显示为 Amortization ($35M)。'],
            },
            operatingExpenses: {
              notes: ['官方运营成本和费用合计；来源图四舍五入显示为 ($5.6B)。'],
              items: [
                { id: 'owned_leased_other_direct_costs', label: '自有、租赁及其他直接成本' },
                { id: 'ga', label: '管理费用' },
                {
                  id: 'da',
                  label: '折旧与摊销',
                  notes: ['来源图标注为 ($0.1M)；官方报表列示为 $54M。'],
                },
                { id: 'reimbursed_expenses', label: '报销费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              {
                id: 'other_nonoperating',
                label: '其他',
                notes: ['净利息费用、权益法收益及其他非运营项目。'],
              },
            ],
          },
          profit: {
            gross: {
              label: '毛利润',
              notes: ['扣除合同投资摊销后的账面小计；来源图未显示毛利润。'],
            },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
    ,
    {
      key: 'marriott-q4-fy25',
      company: 'Marriott',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/marriott-q4-fy25.png',
      roundingTolerance: 0.05,
      revenue: {
        total: 6.690,
        notes: ['+4% Y/Y'],
        items: [
          { id: 'base_management_fees', label: 'Base management fees', value: 0.343, notes: ['+3% Y/Y'] },
          { id: 'franchise_fees', label: 'Franchise fees', value: 0.843, notes: ['+6% Y/Y'] },
          { id: 'incentive_management_fees', label: 'Incentive management fees', value: 0.239, notes: ['+16% Y/Y'] },
          { id: 'owned_leased_and_other_revenue', label: 'Owned, leased, and other revenue', value: 0.457, notes: ['+9% Y/Y'] },
          { id: 'cost_reimbursement', label: 'Cost reimbursement revenue', value: 4.857, notes: ['+3% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'contract_investment_amortization',
          label: 'Contract investment amortization',
          value: 0.049,
          notes: ['Source chart shows this as Amortization ($49M) before the Revenue node.'],
        },
        operatingExpenses: {
          total: 5.913,
          notes: [
            'Official total operating costs and expenses; the source chart omits the $29M restructuring and merger-related charges and other line item.',
          ],
          items: [
            { id: 'owned_leased_other_direct_costs', label: 'Owned, leased, and other direct costs', value: 0.416 },
            { id: 'ga', label: 'G&A', value: 0.241 },
            { id: 'da', label: 'D&A', value: 0.059 },
            { id: 'reimbursed_expenses', label: 'Reimbursed expenses', value: 5.168 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.137 },
      },
      otherExpenses: {
        total: 0.195,
        items: [
          {
            id: 'other_nonoperating',
            label: 'Other',
            value: 0.195,
            notes: ['Net interest expense, gains and other income, interest income, and equity in earnings.'],
          },
        ],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 6.690,
          notes: ['Bookkeeping subtotal; the source chart does not show gross profit.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.777, notes: ['12% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.445, notes: ['7% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              { id: 'base_management_fees', label: '基础管理费', notes: ['同比 +3%'] },
              { id: 'franchise_fees', label: '特许经营费', notes: ['同比 +6%'] },
              { id: 'incentive_management_fees', label: '激励管理费', notes: ['同比 +16%'] },
              { id: 'owned_leased_and_other_revenue', label: '自有、租赁及其他收入', notes: ['同比 +9%'] },
              { id: 'cost_reimbursement', label: '成本报销收入', notes: ['同比 +3%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '合同投资摊销',
              notes: ['来源图在收入节点前将该项目显示为 Amortization ($49M)。'],
            },
            operatingExpenses: {
              notes: ['官方运营成本和费用合计；来源图未拆分 $29M 重组、并购相关费用及其他项目。'],
              items: [
                { id: 'owned_leased_other_direct_costs', label: '自有、租赁及其他直接成本' },
                { id: 'ga', label: '管理费用' },
                { id: 'da', label: '折旧与摊销' },
                { id: 'reimbursed_expenses', label: '报销费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              {
                id: 'other_nonoperating',
                label: '其他',
                notes: ['净利息费用、其他收益、利息收入及权益法收益。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['账面核对小计；来源图未显示毛利润。'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 (0 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
