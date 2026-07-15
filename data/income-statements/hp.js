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
      key: 'hp-q4-fy25',
      company: 'HP',
      period: 'Q4 FY25',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/hp-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 14.6,
        notes: ['+4% Y/Y'],
        items: [
          {
            id: 'personal_systems', label: 'Personal Systems', value: 10.4, notes: ['+8% Y/Y'],
            children: [
              { id: 'ps_commercial', label: 'Personal Systems Commercial', value: 7.0, notes: ['+7% Y/Y'] },
              { id: 'ps_consumer', label: 'Personal Systems Consumer', value: 3.4, notes: ['+10% Y/Y'] },
            ],
          },
          {
            id: 'printing', label: 'Printing', value: 4.3, notes: ['(4%) Y/Y'],
            children: [
              { id: 'printing_supplies', label: 'Printing Supplies', value: 2.8, notes: ['(4%) Y/Y'] },
              { id: 'printing_commercial', label: 'Printing Commercial', value: 1.2, notes: ['(4%) Y/Y'] },
              { id: 'printing_consumer', label: 'Printing Consumer', value: 0.3, notes: ['(9%) Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 11.7 },
        operatingExpenses: {
          total: 2.0,
          items: [
            { id: 'sga', label: 'SG&A', value: 1.4, notes: ['10% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.4, notes: ['3% of revenue', '(0pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.1, notes: ['1% of revenue'] },
            { id: 'other_opex', label: 'Other', value: 0.1, notes: ['0% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.039, valueText: '$39M' },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other_nonoperating', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.0, notes: ['20% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.0, notes: ['7% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.8, notes: ['5% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度', periodNote: '截至 2025 年 10 月',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              { id: 'personal_systems', label: '个人系统', notes: ['同比 +8%'], children: [
                { id: 'ps_commercial', label: '商用个人系统', notes: ['同比 +7%'] },
                { id: 'ps_consumer', label: '消费者个人系统', notes: ['同比 +10%'] },
              ] },
              { id: 'printing', label: '打印', notes: ['同比 (4%)'], children: [
                { id: 'printing_supplies', label: '打印耗材', notes: ['同比 (4%)'] },
                { id: 'printing_commercial', label: '商用打印', notes: ['同比 (4%)'] },
                { id: 'printing_consumer', label: '消费者打印', notes: ['同比 (9%)'] },
              ] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政', notes: ['占收入 10%', '同比 (0 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
              { id: 'restructuring', label: '重组', notes: ['占收入 1%'] },
              { id: 'other_opex', label: '其他', notes: ['占收入 0%'] },
            ] },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_nonoperating', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 20%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'hp-q1-fy26',
      company: 'HP',
      period: 'Q1 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/hp-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 14.4,
        notes: ['+7% Y/Y'],
        items: [
          {
            id: 'personal_systems',
            label: 'Personal Systems',
            value: 10.3,
            notes: ['+11% Y/Y'],
            children: [
              { id: 'ps_commercial', label: 'Personal Systems Commercial', value: 7.3, notes: ['+9% Y/Y'] },
              { id: 'ps_consumer', label: 'Personal Systems Consumer', value: 3.0, notes: ['+16% Y/Y'] },
            ],
          },
          {
            id: 'printing',
            label: 'Printing',
            value: 4.2,
            notes: ['(2%) Y/Y'],
            children: [
              { id: 'printing_supplies', label: 'Printing Supplies', value: 2.8, notes: ['(1%) Y/Y'] },
              { id: 'printing_commercial', label: 'Printing Commercial', value: 1.1, notes: ['(3%) Y/Y'] },
              { id: 'printing_consumer', label: 'Printing Consumer', value: 0.3, notes: ['(8%) Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 11.6 },
        operatingExpenses: {
          total: 2.1,
          items: [
            { id: 'sga', label: 'SG&A', value: 1.5, notes: ['10% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.4, notes: ['3% of revenue', '(0pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.1, notes: ['1% of revenue'] },
            { id: 'other_opex', label: 'Other', value: 0.1, notes: ['0% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other_nonoperating', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.8, notes: ['20% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.8, notes: ['5% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['4% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              {
                id: 'personal_systems', label: '个人系统', notes: ['同比 +11%'],
                children: [
                  { id: 'ps_commercial', label: '商用个人系统', notes: ['同比 +9%'] },
                  { id: 'ps_consumer', label: '消费者个人系统', notes: ['同比 +16%'] },
                ],
              },
              {
                id: 'printing', label: '打印', notes: ['同比 (2%)'],
                children: [
                  { id: 'printing_supplies', label: '打印耗材', notes: ['同比 (1%)'] },
                  { id: 'printing_commercial', label: '商用打印', notes: ['同比 (3%)'] },
                  { id: 'printing_consumer', label: '消费者打印', notes: ['同比 (8%)'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 10%', '同比 (0 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 0%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_nonoperating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 20%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 4%', '同比 (0 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'hp-q2-fy26',
      company: 'HP',
      period: 'Q2 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/hp-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 14.4,
        notes: ['+9% Y/Y'],
        items: [
          {
            id: 'personal_systems',
            label: 'Personal Systems',
            value: 10.2,
            notes: ['+13% Y/Y'],
            children: [
              { id: 'ps_commercial', label: 'Personal Systems Commercial', value: 7.7, notes: ['+14% Y/Y'] },
              { id: 'ps_consumer', label: 'Personal Systems Consumer', value: 2.5, notes: ['+10% Y/Y'] },
            ],
          },
          {
            id: 'printing',
            label: 'Printing',
            value: 4.2,
            notes: ['(0%) Y/Y', 'Printing child lines sum to $4.3B because the source chart rounds each line.'],
            children: [
              { id: 'printing_supplies', label: 'Printing Supplies', value: 2.8, notes: ['+1% Y/Y'] },
              { id: 'printing_commercial', label: 'Printing Commercial', value: 1.2, notes: ['+0% Y/Y'] },
              { id: 'printing_consumer', label: 'Printing Consumer', value: 0.3, notes: ['(10%) Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 11.4 },
        operatingExpenses: {
          total: 2.4,
          items: [
            { id: 'sga', label: 'SG&A', value: 1.5, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.4, notes: ['3% of revenue', '(0pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.4, notes: ['3% of revenue'] },
            { id: 'other_opex', label: 'Other', value: 0.1, notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.043, valueText: '$43M' },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other_nonoperating', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.0, notes: ['21% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['4% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['3% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              {
                id: 'personal_systems', label: '个人系统', notes: ['同比 +13%'],
                children: [
                  { id: 'ps_commercial', label: '商用个人系统', notes: ['同比 +14%'] },
                  { id: 'ps_consumer', label: '消费者个人系统', notes: ['同比 +10%'] },
                ],
              },
              {
                id: 'printing', label: '打印', notes: ['同比 (0%)', '打印业务子项目因来源图逐项取整合计为 $4.3B。'],
                children: [
                  { id: 'printing_supplies', label: '打印耗材', notes: ['同比 +1%'] },
                  { id: 'printing_commercial', label: '商用打印', notes: ['同比 +0%'] },
                  { id: 'printing_consumer', label: '消费者打印', notes: ['同比 (10%)'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 3%'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_nonoperating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 21%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 +0 个百分点'] },
          },
        },
      },
    }
  );
})(window);
