/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'mcdonald-s-q3-fy25',
    company: "McDonald's",
    period: 'Q3 FY25',
    periodNote: 'Ending Sep. 2025',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/mcdonald-s-q3-fy25.png',
    roundingTolerance: 0.12,
    revenue: {
      total: 7.1,
      notes: ['+3% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.6, notes: ['(4%) Y/Y', '15% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 4.4, notes: ['+7% Y/Y', '85% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.2, notes: ['+22% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 3.0 },
      operatingExpenses: {
        total: 0.8,
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.7 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.7 },
    },
    operatingOtherIncome: {
      total: 0.037,
      notes: ['Source chart reports this operating-stage Other item as $37M.'],
      items: [{ id: 'operating_other_income', label: 'Other', value: 0.037, notes: ['$37M'] }],
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 4.1, notes: ['58% margin', '+2pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.4, notes: ['47% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['32% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度',
        periodNote: '截至 2025 年 9 月',
        revenue: {
          notes: ['同比 +3%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 (4%)', '毛利率 15%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +7%', '毛利率 85%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +22%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        operatingOtherIncome: {
          notes: ['来源图将该营业环节“其他”项目披露为 3700 万美元。'],
          items: [{ id: 'operating_other_income', label: '其他', notes: ['3700 万美元'] }],
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 58%', '同比 +2 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 47%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 32%', '同比 (1 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q4-fy25',
    company: "McDonald's",
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/mcdonald-s-q4-fy25.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 7.0,
      notes: ['+10% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.5, notes: ['+10% Y/Y', '15% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 4.3, notes: ['+9% Y/Y', '84% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.2, notes: ['+35% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 3.0 },
      operatingExpenses: {
        total: 0.9,
        notes: ['Source chart rounds the shown Other SG&A and depreciation & amortization items to $0.8B.'],
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.7 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.6 },
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 4.0, notes: ['58% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.2, notes: ['45% margin', '+0pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['31% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +10%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 +10%', '毛利率 15%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +9%', '毛利率 84%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +35%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            notes: ['来源图中“其他 SG&A”与“折旧及摊销”按四舍五入合计为 $0.8B。'],
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 58%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 45%', '同比 +0 个百分点'] },
          net: { label: '净利润', notes: ['利润率 31%', '同比 (1 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q1-fy26',
    company: "McDonald's",
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/mcdonald-s-q1-fy26.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 6.5,
      notes: ['+9% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.3, notes: ['+9% Y/Y', '15% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 4.0, notes: ['+9% Y/Y', '85% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.2, notes: ['+19% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 2.9 },
      operatingExpenses: {
        total: 0.8,
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.7 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.6 },
    },
    operatingOtherIncome: {
      total: 0.1,
      notes: ['Source chart rounds intermediate operating values to one decimal place.'],
      items: [{ id: 'operating_other_income', label: 'Other', value: 0.1 }],
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.6, notes: ['56% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.0, notes: ['45% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['30% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月',
        revenue: {
          notes: ['同比 +9%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 +9%', '毛利率 15%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +9%', '毛利率 85%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +19%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        operatingOtherIncome: {
          notes: ['来源图将营业环节中间值按一位小数四舍五入。'],
          items: [{ id: 'operating_other_income', label: '其他' }],
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 56%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 45%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 30%', '同比 (1 个百分点)'] },
        },
      },
    },
  });
})(window);
