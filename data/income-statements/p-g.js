/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'p-g-q2-fy26',
    company: 'P&G',
    period: 'Q2 FY26',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/p-g-q2-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 22.2,
      notes: ['+1% Y/Y'],
      items: [
        { id: 'beauty', label: 'Beauty', value: 4.0, notes: ['+5% Y/Y'] },
        { id: 'grooming', label: 'Grooming', value: 1.8, notes: ['+2% Y/Y'] },
        { id: 'health_care', label: 'Health Care', value: 3.4, notes: ['+5% Y/Y'] },
        { id: 'fabric_home_care', label: 'Fabric & Home Care', value: 7.7, notes: ['+1% Y/Y'] },
        { id: 'baby_feminine_family_care', label: 'Baby, Feminine & Family Care', value: 5.1, notes: ['(3%) Y/Y'] },
        { id: 'corporate', label: 'Corporate', value: 0.2 },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_products_sold', label: 'Cost of products sold', value: 10.8 },
      operatingExpenses: {
        total: 6.0,
        items: [{ id: 'operating_expenses', label: 'Operating expenses', value: 6.0 }],
      },
      tax: { id: 'tax', label: 'Tax', value: 1.1 },
    },
    otherIncome: {
      total: 0.2,
      items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
    },
    otherExpenses: {
      total: 0.1,
      items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 11.4, notes: ['51% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 5.4, notes: ['24% margin', '(2pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 4.3, notes: ['20% margin', '(2%) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +1%'],
          items: [
            { id: 'beauty', label: '美容', notes: ['同比 +5%'] },
            { id: 'grooming', label: '男士理容', notes: ['同比 +2%'] },
            { id: 'health_care', label: '健康护理', notes: ['同比 +5%'] },
            { id: 'fabric_home_care', label: '织物及家居护理', notes: ['同比 +1%'] },
            { id: 'baby_feminine_family_care', label: '婴幼儿、女性及家庭护理', notes: ['同比 (3%)'] },
            { id: 'corporate', label: '总部及其他' },
          ],
        },
        costs: {
          costOfRevenue: { label: '产品销售成本' },
          operatingExpenses: { items: [{ id: 'operating_expenses', label: '营业费用' }] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 51%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 24%', '同比 (2 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 20%', '同比 (2%)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'p-g-q3-fy26',
    company: 'P&G',
    period: 'Q3 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/p-g-q3-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 21.2,
      notes: ['+7% Y/Y'],
      items: [
        { id: 'beauty', label: 'Beauty', value: 3.9, notes: ['+11% Y/Y'] },
        { id: 'grooming', label: 'Grooming', value: 1.6, notes: ['+7% Y/Y'] },
        { id: 'health_care', label: 'Health Care', value: 3.1, notes: ['+7% Y/Y'] },
        { id: 'fabric_home_care', label: 'Fabric & Home Care', value: 7.4, notes: ['+7% Y/Y'] },
        { id: 'baby_feminine_family_care', label: 'Baby, Feminine & Family Care', value: 5.1, notes: ['+6% Y/Y'] },
        { id: 'corporate', label: 'Corporate', value: 0.2 },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_products_sold', label: 'Cost of products sold', value: 10.7 },
      operatingExpenses: {
        total: 5.9,
        items: [{ id: 'operating_expenses', label: 'Operating expenses', value: 5.9 }],
      },
      tax: { id: 'tax', label: 'Tax', value: 1.0 },
    },
    otherIncome: {
      total: 0.5,
      items: [{ id: 'other_income', label: 'Other', value: 0.5 }],
    },
    otherExpenses: {
      total: 0.1,
      items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 10.5, notes: ['50% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 4.6, notes: ['22% margin', '(1pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 4.0, notes: ['19% margin', '(1%) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第三季度',
        periodNote: '截至 2026 年 3 月',
        revenue: {
          notes: ['同比 +7%'],
          items: [
            { id: 'beauty', label: '美容', notes: ['同比 +11%'] },
            { id: 'grooming', label: '男士理容', notes: ['同比 +7%'] },
            { id: 'health_care', label: '健康护理', notes: ['同比 +7%'] },
            { id: 'fabric_home_care', label: '织物及家居护理', notes: ['同比 +7%'] },
            { id: 'baby_feminine_family_care', label: '婴幼儿、女性及家庭护理', notes: ['同比 +6%'] },
            { id: 'corporate', label: '总部及其他' },
          ],
        },
        costs: {
          costOfRevenue: { label: '产品销售成本' },
          operatingExpenses: { items: [{ id: 'operating_expenses', label: '营业费用' }] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 50%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 22%', '同比 (1 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 19%', '同比 (1%)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'p-g-q4-fy26',
    company: 'P&G',
    period: 'Q4 FY26',
    periodNote: 'Ending June 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/p-g-q4-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 21.2,
      notes: ['+2% Y/Y'],
      items: [
        { id: 'beauty', label: 'Beauty', value: 4.0, notes: ['+6% Y/Y'] },
        { id: 'grooming', label: 'Grooming', value: 1.7, notes: ['+1% Y/Y'] },
        { id: 'health_care', label: 'Health Care', value: 2.8, notes: ['+1% Y/Y'] },
        { id: 'fabric_home_care', label: 'Fabric & Home Care', value: 7.4, notes: ['+1% Y/Y'] },
        { id: 'baby_feminine_family_care', label: 'Baby, Feminine & Family Care', value: 5.0, notes: ['(1%) Y/Y'] },
        { id: 'corporate', label: 'Corporate', value: 0.3 },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_products_sold', label: 'Cost of products sold', value: 10.9 },
      operatingExpenses: {
        total: 6.3,
        items: [{ id: 'operating_expenses', label: 'Operating expenses', value: 6.3 }],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.9 },
    },
    otherIncome: {
      total: 0.1,
      items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
    },
    otherExpenses: {
      total: 0.1,
      items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 10.3, notes: ['48% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.9, notes: ['19% margin', '(2pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 3.1, notes: ['15% margin', '(3%) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第四季度',
        periodNote: '截至 2026 年 6 月',
        revenue: {
          notes: ['同比 +2%'],
          items: [
            { id: 'beauty', label: '美容', notes: ['同比 +6%'] },
            { id: 'grooming', label: '男士理容', notes: ['同比 +1%'] },
            { id: 'health_care', label: '健康护理', notes: ['同比 +1%'] },
            { id: 'fabric_home_care', label: '织物及家居护理', notes: ['同比 +1%'] },
            { id: 'baby_feminine_family_care', label: '婴幼儿、女性及家庭护理', notes: ['同比 (1%)'] },
            { id: 'corporate', label: '总部及其他' },
          ],
        },
        costs: {
          costOfRevenue: { label: '产品销售成本' },
          operatingExpenses: { items: [{ id: 'operating_expenses', label: '营业费用' }] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 48%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 19%', '同比 (2 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 15%', '同比 (3%)'] },
        },
      },
    },
  });
})(window);
