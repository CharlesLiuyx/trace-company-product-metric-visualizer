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
      key: 'hilton-q4-fy25',
      company: 'Hilton',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/hilton-q4-fy25.png',
      roundingTolerance: 0.02,
      revenue: {
        total: 3.087,
        notes: ['+11% Y/Y'],
        items: [
          { id: 'franchise_fees', label: 'Franchise fees', value: 0.671, notes: ['+5% Y/Y'] },
          { id: 'base_management_fees', label: 'Base management fees', value: 0.098, notes: ['+20% Y/Y'] },
          { id: 'incentive_management_fees', label: 'Incentive management fees', value: 0.101, notes: ['+17% Y/Y'] },
          { id: 'owned_leased_and_other', label: 'Owned, leased and other', value: 0.345, notes: ['+4% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.065, notes: ['+23% Y/Y'] },
          {
            id: 'managed_franchised_other_revenue',
            label: 'Other revenue from managed and franchised properties',
            value: 1.807,
            notes: ['+14% Y/Y', 'Reported by Hilton as cost reimbursement revenues.'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart does not show a gross profit or cost-of-revenue subtotal.'],
        },
        operatingExpenses: {
          total: 2.485,
          notes: ['Source chart presents Hilton expenses as operating expenses rather than a gross-profit split.'],
          items: [
            { id: 'owned_leased_hotels', label: 'Owned, leased hotels', value: 0.292 },
            { id: 'ga', label: 'G&A', value: 0.095 },
            { id: 'da', label: 'D&A', value: 0.047 },
            { id: 'other_operating', label: 'Other', value: 0.057 },
            {
              id: 'managed_franchised_other_expenses',
              label: 'Other expenses from managed and franchised properties',
              value: 1.994,
              notes: ['Reported by Hilton as reimbursed expenses.'],
            },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.131 },
      },
      otherExpenses: {
        total: 0.173,
        items: [
          {
            id: 'other_nonoperating',
            label: 'Other',
            value: 0.173,
            notes: ['Interest expense, foreign-currency loss, and other non-operating loss, net.'],
          },
        ],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 3.087,
          notes: ['Synthetic SSOT subtotal because the source chart does not show gross profit.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.602, notes: ['20% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.298, notes: ['10% margin', '(8pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'franchise_fees', label: '特许经营费', notes: ['同比 +5%'] },
              { id: 'base_management_fees', label: '基础管理费', notes: ['同比 +20%'] },
              { id: 'incentive_management_fees', label: '激励管理费', notes: ['同比 +17%'] },
              { id: 'owned_leased_and_other', label: '自有、租赁及其他', notes: ['同比 +4%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +23%'] },
              { id: 'managed_franchised_other_revenue', label: '管理和特许经营物业的其他收入', notes: ['同比 +14%', 'Hilton 将该项目列报为成本报销收入。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图未单独显示毛利润或收入成本小计。'] },
            operatingExpenses: {
              notes: ['来源图将 Hilton 的费用列示为运营费用，而非毛利润拆分。'],
              items: [
                { id: 'owned_leased_hotels', label: '自有及租赁酒店' },
                { id: 'ga', label: '管理费用' },
                { id: 'da', label: '折旧与摊销' },
                { id: 'other_operating', label: '其他' },
                { id: 'managed_franchised_other_expenses', label: '管理和特许经营物业的其他费用', notes: ['Hilton 将该项目列报为报销费用。'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_nonoperating', label: '其他', notes: ['利息费用、外币损失及其他非运营损失净额。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['来源图未显示毛利润，因此 SSOT 使用合成小计。'] },
            operating: { label: '营业利润', notes: ['利润率 20%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 (8 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'hilton-q1-fy26',
      company: 'Hilton',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/hilton-q1-fy26.png',
      roundingTolerance: 0.02,
      revenue: {
        total: 2.937,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'franchise_fees', label: 'Franchise fees', value: 0.696, notes: ['+11% Y/Y'] },
          { id: 'base_management_fees', label: 'Base management fees', value: 0.095, notes: ['+8% Y/Y'] },
          { id: 'incentive_management_fees', label: 'Incentive management fees', value: 0.076, notes: ['+6% Y/Y'] },
          { id: 'owned_leased_and_other', label: 'Owned, leased and other', value: 0.249, notes: ['+6% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.066, notes: ['+43% Y/Y'] },
          {
            id: 'managed_franchised_other_revenue',
            label: 'Other revenue from managed and franchised properties',
            value: 1.755,
            notes: ['+8% Y/Y', 'Reported by Hilton as cost reimbursement revenues.'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart does not show a gross profit or cost-of-revenue subtotal.'],
        },
        operatingExpenses: {
          total: 2.259,
          notes: ['Source chart presents Hilton expenses as operating expenses rather than a gross-profit split.'],
          items: [
            { id: 'owned_leased_hotels', label: 'Owned, leased hotels', value: 0.235 },
            { id: 'ga', label: 'G&A', value: 0.103 },
            { id: 'da', label: 'D&A', value: 0.050 },
            {
              id: 'managed_franchised_other_expenses',
              label: 'Other expenses from managed and franchised properties',
              value: 1.871,
              notes: ['Includes reimbursed expenses of $1.849B plus $0.022B of other expenses.'],
            },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.135 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.160,
        items: [
          {
            id: 'other_nonoperating',
            label: 'Other',
            value: 0.160,
            notes: ['Interest expense, foreign-currency loss, and other non-operating income, net.'],
          },
        ],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 2.937,
          notes: ['Synthetic SSOT subtotal because the source chart does not show gross profit.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.678, notes: ['23% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.383, notes: ['13% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'franchise_fees', label: '特许经营费', notes: ['同比 +11%'] },
              { id: 'base_management_fees', label: '基础管理费', notes: ['同比 +8%'] },
              { id: 'incentive_management_fees', label: '激励管理费', notes: ['同比 +6%'] },
              { id: 'owned_leased_and_other', label: '自有、租赁及其他', notes: ['同比 +6%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +43%'] },
              {
                id: 'managed_franchised_other_revenue',
                label: '管理和特许经营物业的其他收入',
                notes: ['同比 +8%', 'Hilton 将该项目列报为成本报销收入。'],
              },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图未单独显示毛利润或收入成本小计。'],
            },
            operatingExpenses: {
              notes: ['来源图将 Hilton 的费用列示为运营费用，而非毛利润拆分。'],
              items: [
                { id: 'owned_leased_hotels', label: '自有及租赁酒店' },
                { id: 'ga', label: '管理费用' },
                { id: 'da', label: '折旧与摊销' },
                {
                  id: 'managed_franchised_other_expenses',
                  label: '管理和特许经营物业的其他费用',
                  notes: ['包括 $1.849B 报销费用和 $0.022B 其他费用。'],
                },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              {
                id: 'other_nonoperating',
                label: '其他',
                notes: ['利息费用、外币损失及其他非运营收入净额。'],
              },
            ],
          },
          profit: {
            gross: {
              label: '毛利润',
              notes: ['来源图未显示毛利润，因此 SSOT 使用合成小计。'],
            },
            operating: { label: '营业利润', notes: ['利润率 23%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 +2 个百分点'] },
          },
        },
      },
    }
  );
})(window);
