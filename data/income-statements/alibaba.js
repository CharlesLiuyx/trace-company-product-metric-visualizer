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
      key: 'alibaba-q2-fy26',
      company: 'Alibaba',
      period: 'Q2 FY26',
      periodNote: 'Ending Sept. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 34.8,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'china_ecommerce', label: 'China E-commerce', value: 18.6, notes: ['+16% Y/Y', '8% adjusted margin'] },
          {
            id: 'international_digital_commerce',
            label: 'International Digital Commerce',
            value: 4.9,
            notes: ['+10% Y/Y', '0% adjusted margin'],
          },
          { id: 'cloud', label: 'Cloud', value: 5.6, notes: ['+34% Y/Y', '(8%) adjusted margin'] },
          { id: 'all_others', label: 'All others', value: 8.9, notes: ['(25%) Y/Y', '(2%) adjusted margin'] },
          { id: 'intersegment_eliminations', label: 'Inter-segment Eliminations', value: -3.2 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 21.2 },
        operatingExpenses: {
          total: 12.9,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 9.3, notes: ['27% of revenue', '+13pp Y/Y'] },
            { id: 'product_development', label: 'Product development', value: 2.4, notes: ['7% of revenue'] },
            { id: 'ga', label: 'General & Administrative', value: 1.0, notes: ['3% of revenue'] },
            { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 0.1, notes: ['0% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: {
        total: 2.9,
        items: [{ id: 'investments', label: 'Investments', value: 2.9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 13.6, notes: ['39% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.8, notes: ['2% margin', '(13pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.9, notes: ['8% margin', '(10pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'china_ecommerce', label: '中国电子商务', notes: ['同比 +16%', '调整后利润率 8%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +10%', '调整后利润率 0%'] },
              { id: 'cloud', label: '云', notes: ['同比 +34%', '调整后利润率 (8%)'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 (25%)', '调整后利润率 (2%)'] },
              { id: 'intersegment_eliminations', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 27%', '同比 +13 个百分点'] },
                { id: 'product_development', label: '产品开发', notes: ['占收入 7%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 3%'] },
                { id: 'amortization_intangibles', label: '无形资产摊销', notes: ['占收入 0%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'investments', label: '投资收益' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 (13 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 (10 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'alibaba-q3-fy26',
      company: 'Alibaba',
      period: 'Q3 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 40.7,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'china_ecommerce', label: 'China E-commerce', value: 22.8, notes: ['+6% Y/Y', '22% adjusted margin'] },
          {
            id: 'international_digital_commerce',
            label: 'International Digital Commerce',
            value: 5.6,
            notes: ['+4% Y/Y', '(5%) adjusted margin'],
          },
          { id: 'cloud', label: 'Cloud', value: 6.2, notes: ['+36% Y/Y', '9% adjusted margin'] },
          { id: 'all_others', label: 'All others', value: 9.6, notes: ['(25%) Y/Y', '(14%) adjusted margin'] },
          { id: 'intersegment_eliminations', label: 'Inter-segment Eliminations', value: -3.6 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 24.2 },
        operatingExpenses: {
          total: 15.0,
          notes: [
            'Source chart labels gross operating expenses as $15.2B and shows Other $0.2B as an operating offset before operating profit.',
          ],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 10.3, notes: ['25% of revenue', '+12pp Y/Y'] },
            { id: 'product_development', label: 'Product development', value: 2.2, notes: ['5% of revenue'] },
            { id: 'amortization_impairment', label: 'Amortization & impairment', value: 1.5, notes: ['3% of revenue'] },
            { id: 'ga', label: 'General & Administrative', value: 1.2, notes: ['3% of revenue'] },
            { id: 'other_operating_income', label: 'Other operating income', value: -0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.2 },
      },
      otherIncome: {
        total: 1.9,
        items: [{ id: 'investments', label: 'Investments', value: 1.9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 16.5, notes: ['40% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.5, notes: ['4% margin', '(11pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['5% margin', '(11pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'china_ecommerce', label: '中国电子商务', notes: ['同比 +6%', '调整后利润率 22%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +4%', '调整后利润率 (5%)'] },
              { id: 'cloud', label: '云', notes: ['同比 +36%', '调整后利润率 9%'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 (25%)', '调整后利润率 (14%)'] },
              { id: 'intersegment_eliminations', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['源图将总运营费用标为 152 亿美元，并将其他 2 亿美元作为营业利润前的抵减项。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 25%', '同比 +12 个百分点'] },
                { id: 'product_development', label: '产品开发', notes: ['占收入 5%'] },
                { id: 'amortization_impairment', label: '摊销与减值', notes: ['占收入 3%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 3%'] },
                { id: 'other_operating_income', label: '其他营业收入' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'investments', label: '投资收益' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (11 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (11 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'alibaba-q4-fy26',
      company: 'Alibaba',
      period: 'Q4 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 35.3,
        notes: ['+3% Y/Y'],
        items: [
          { id: 'china_ecommerce', label: 'China E-commerce', value: 17.7, notes: ['+6% Y/Y', '20% adjusted margin'] },
          {
            id: 'international_digital_commerce',
            label: 'International Digital Commerce',
            value: 5.1,
            notes: ['+6% Y/Y', '(0%) adjusted margin'],
          },
          { id: 'cloud', label: 'Cloud', value: 6.0, notes: ['+38% Y/Y', '9% adjusted margin'] },
          { id: 'all_others', label: 'All others', value: 9.6, notes: ['(21%) Y/Y', '(33%) adjusted margin'] },
          { id: 'intersegment_eliminations', label: 'Inter-segment Eliminations', value: -3.2 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 23.1 },
        operatingExpenses: {
          total: 12.3,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 7.7, notes: ['22% of revenue', '+7pp Y/Y'] },
            { id: 'product_development', label: 'Product development', value: 2.7, notes: ['8% of revenue'] },
            { id: 'ga', label: 'General & Administrative', value: 1.4, notes: ['4% of revenue'] },
            { id: 'amortization_impairment', label: 'Amortization & impairment', value: 0.4, notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.2, notes: ['35% margin', '(7pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.1, notes: ['(0%) margin', '+12pp Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -0.1 },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              { id: 'china_ecommerce', label: '中国电子商务', notes: ['同比 +6%', '调整后利润率 20%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +6%', '调整后利润率 (0%)'] },
              { id: 'cloud', label: '云', notes: ['同比 +38%', '调整后利润率 9%'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 (21%)', '调整后利润率 (33%)'] },
              { id: 'intersegment_eliminations', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 22%', '同比 +7 个百分点'] },
                { id: 'product_development', label: '产品开发', notes: ['占收入 8%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 4%'] },
                { id: 'amortization_impairment', label: '摊销与减值', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 35%', '同比 (7 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (0%)', '同比 +12 个百分点'] },
            net: { label: '营业亏损' },
          },
        },
      },
    }
  );
})(window);
