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
      key: 'coupang-q4-fy25',
      company: 'Coupang',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/coupang-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.8,
        notes: ['+11% Y/Y', '+14% Y/Y fxn'],
        items: [
          {
            id: 'product_commerce',
            label: ['Product', 'Commerce'],
            value: 7.4,
            notes: ['+8% Y/Y', '8% adjusted margin', '(0pp) Y/Y', 'Core retail', 'Marketplace', 'Rocket Fresh'],
          },
          {
            id: 'developing_offerings',
            label: ['Developing', 'Offerings'],
            value: 1.4,
            notes: ['+32% Y/Y', '(21%) adjusted margin', '(10pp) Y/Y', 'Coupang Eats and Coupang Play'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.3 },
        operatingExpenses: {
          total: 2.5,
          items: [{ id: 'operating_expenses', label: 'Operating expenses', value: 2.5 }],
        },
        tax: { label: 'Income tax expense', value: 0.048 },
      },
      otherIncome: {
        total: 0.047,
        items: [{ label: 'Interest income', value: 0.047 }],
      },
      otherExpenses: {
        total: 0.033,
        items: [
          { label: 'Interest expense', value: 0.016 },
          { label: 'Other expense, net', value: 0.017 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.5, notes: ['29% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.008, notes: ['0% margin', '(4pp) Y/Y'] },
        net: { id: 'net_loss', label: 'Net loss', value: -0.026 },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +11%', '按固定汇率同比 +14%'],
            items: [
              {
                label: ['产品', '商业'],
                notes: ['同比 +8%', '调整后利润率 8%', '同比 0 个百分点', '核心零售', '平台业务', '火箭生鲜'],
              },
              {
                label: ['培育中', '业务'],
                notes: ['同比 +32%', '调整后利润率 (21%)', '同比 (10 个百分点)', 'Coupang Eats 和 Coupang Play'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [{ label: '运营费用' }] },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ label: '利息收入' }] },
          otherExpenses: { items: [{ label: '利息费用' }, { label: '其他费用净额' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 29%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 0%', '同比 (4 个百分点)'] },
            net: { label: '净亏损' },
          },
        },
      },
    }
  );

  ssot.records.push(
    {
      key: 'coupang-q1-fy26',
      company: 'Coupang',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/coupang-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.504,
        notes: ['+8% Y/Y'],
        items: [
          {
            id: 'product_commerce',
            label: ['Product', 'Commerce'],
            value: 7.176,
            notes: ['+4% Y/Y', '5% adjusted margin', '(4pp) Y/Y', 'Core retail', 'Marketplace', 'Rocket Fresh'],
          },
          {
            id: 'developing_offerings',
            label: ['Developing', 'Offerings'],
            value: 1.328,
            notes: ['+28% Y/Y', '(25%) adjusted margin', '(9pp) Y/Y', 'Coupang Eats and Coupang Play'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.207 },
        operatingExpenses: {
          total: 2.539,
          items: [{ id: 'operating_expenses', label: 'Operating, general and administrative', value: 2.539 }],
        },
        tax: { label: 'Income tax expense', value: 0.011 },
      },
      otherIncome: {
        total: 0.044,
        items: [{ label: 'Interest income', value: 0.044 }],
      },
      otherExpenses: {
        total: 0.057,
        items: [
          { label: 'Interest expense', value: 0.013 },
          { label: 'Other expense, net', value: 0.044 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.297, notes: ['27% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.242, notes: ['(3%) of revenue', '(5pp) Y/Y'] },
        net: { label: 'Net loss', value: -0.266 },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              {
                label: ['产品', '商业'],
                notes: ['同比 +4%', '调整后利润率 5%', '同比 (4 个百分点)', '核心零售', '平台业务', '火箭生鲜'],
              },
              {
                label: ['培育中', '业务'],
                notes: ['同比 +28%', '调整后利润率 (25%)', '同比 (9 个百分点)', 'Coupang Eats 和 Coupang Play'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [{ label: '运营、一般及行政费用' }] },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ label: '利息收入' }] },
          otherExpenses: { items: [{ label: '利息费用' }, { label: '其他费用净额' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 27%', '同比 (2 个百分点)'] },
            operating: { label: '营业亏损', notes: ['占收入 (3%)', '同比 (5 个百分点)'] },
            net: { label: '净亏损' },
          },
        },
      },
    }
  );
})(window);
