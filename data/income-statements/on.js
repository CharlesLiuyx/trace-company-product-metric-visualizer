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
      key: 'on-q1-fy26',
      company: 'On',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: 'CHF',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/on-q1-fy26.png',
      roundingTolerance: 1,
      revenue: {
        total: 832,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'shoes', label: 'Shoes', value: 764, notes: ['+12% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 55, notes: ['+45% Y/Y'] },
          { id: 'accessories', label: 'Accessories', value: 13, notes: ['+70% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 298 },
        operatingExpenses: {
          total: 417,
          items: [{ id: 'operating_expenses', label: 'Operating expenses', value: 417 }],
        },
        tax: {
          id: 'other',
          label: 'Other',
          value: 14,
          notes: ['The source groups post-operating-profit deductions as Other.'],
        },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 534, notes: ['64% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 117, notes: ['14% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 103, notes: ['12% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              { id: 'shoes', label: '鞋类', notes: ['同比 +12%'] },
              { id: 'apparel', label: '服装', notes: ['同比 +45%'] },
              { id: 'accessories', label: '配饰', notes: ['同比 +70%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用' }] },
            tax: { label: '其他', notes: ['来源图将营业利润后的扣减合并列为“其他”。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 64%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'on-q3-fy25',
      company: 'On',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: 'CHF',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/on-q3-fy25.png',
      roundingTolerance: 1,
      revenue: {
        total: 794,
        notes: ['+25% Y/Y'],
        items: [
          { id: 'shoes', label: 'Shoes', value: 731, notes: ['+21% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 50, notes: ['+87% Y/Y'] },
          { id: 'accessories', label: 'Accessories', value: 13, notes: ['+145% Y/Y'] },
        ],
        breakdowns: [
          {
            id: 'sales_channel',
            label: 'Revenue by sales channel',
            total: 794,
            items: [
              { id: 'wholesale', label: 'Wholesale', value: 480, notes: ['+23% Y/Y'] },
              { id: 'direct_to_consumer', label: 'Direct To Consumer', value: 315, notes: ['+28% Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 272 },
        operatingExpenses: {
          total: 398,
          items: [{ id: 'operating_expenses', label: 'Operating expenses', value: 398 }],
        },
        tax: {
          id: 'other',
          label: 'Other',
          value: 6,
          notes: ['The source groups post-operating-profit deductions as Other.'],
        },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 522, notes: ['66% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 125, notes: ['16% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 119, notes: ['15% margin', '+10pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +25%'],
            items: [
              { id: 'shoes', label: '鞋类', notes: ['同比 +21%'] },
              { id: 'apparel', label: '服装', notes: ['同比 +87%'] },
              { id: 'accessories', label: '配饰', notes: ['同比 +145%'] },
            ],
            breakdowns: [
              {
                id: 'sales_channel',
                label: '按销售渠道划分的收入',
                items: [
                  { id: 'wholesale', label: '批发', notes: ['同比 +23%'] },
                  { id: 'direct_to_consumer', label: '直营消费者业务', notes: ['同比 +28%'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用' }] },
            tax: { label: '其他', notes: ['来源图将营业利润后的扣减合并列为“其他”。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 66%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 15%', '同比 +10 个百分点'] },
          },
        },
      },
    },
    {
      key: 'on-q4-fy25',
      company: 'On',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: 'CHF',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/on-q4-fy25.png',
      roundingTolerance: 1,
      revenue: {
        total: 744,
        notes: ['+23% Y/Y'],
        items: [
          { id: 'shoes', label: 'Shoes', value: 687, notes: ['+21% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 45, notes: ['+38% Y/Y'] },
          { id: 'accessories', label: 'Accessories', value: 11, notes: ['+119% Y/Y'] },
        ],
        breakdowns: [
          {
            id: 'sales_channel',
            label: 'Revenue by sales channel',
            total: 744,
            items: [
              { id: 'wholesale', label: 'Wholesale', value: 383, notes: ['+23% Y/Y'] },
              { id: 'direct_to_consumer', label: 'Direct To Consumer', value: 361, notes: ['+22% Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 269 },
        operatingExpenses: {
          total: 393,
          items: [{ id: 'operating_expenses', label: 'Operating expenses · SG&A', value: 393 }],
        },
        tax: {
          id: 'other',
          label: 'Other',
          value: 14,
          notes: ['The source groups post-operating-profit deductions as Other.'],
        },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 475, notes: ['64% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 82, notes: ['11% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 69, notes: ['9% margin', '(5pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +23%'],
            items: [
              { id: 'shoes', label: '鞋类', notes: ['同比 +21%'] },
              { id: 'apparel', label: '服装', notes: ['同比 +38%'] },
              { id: 'accessories', label: '配饰', notes: ['同比 +119%'] },
            ],
            breakdowns: [
              {
                id: 'sales_channel',
                label: '按销售渠道划分的收入',
                items: [
                  { id: 'wholesale', label: '批发', notes: ['同比 +23%'] },
                  { id: 'direct_to_consumer', label: '直营消费者业务', notes: ['同比 +22%'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用（销售及管理费用）' }] },
            tax: { label: '其他', notes: ['来源图将营业利润后的扣减合并列为“其他”。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 64%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比下降 5 个百分点'] },
          },
        },
      },
    }
  );
})(window);
