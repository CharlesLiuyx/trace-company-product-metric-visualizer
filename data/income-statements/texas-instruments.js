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
      key: 'texas-instruments-q4-fy25',
      company: 'Texas Instruments',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/texas-instruments-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 4.423,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'analog', label: 'Analog', value: 3.615, notes: ['+14% Y/Y'] },
          { id: 'embedded_processing', label: 'Embedded Processing', value: 0.662, notes: ['+8% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.146, notes: ['(34%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.951 },
        operatingExpenses: {
          total: 0.999,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.521 },
            { id: 'sga', label: 'SG&A', value: 0.446 },
            { id: 'restructuring', label: 'Restructuring', value: 0.032 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.209 },
      },
      otherIncome: {
        total: 0.04,
        items: [{ id: 'other_income', label: 'Other', value: 0.04 }],
      },
      otherExpenses: {
        total: 0.141,
        items: [{ id: 'financial', label: 'Financial', value: 0.141, notes: ['Interest and debt expense.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.472, notes: ['56% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.473, notes: ['33% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.163, notes: ['26% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'analog', label: '模拟', notes: ['同比 +14%'] },
              { id: 'embedded_processing', label: '嵌入式处理', notes: ['同比 +8%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (34%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'restructuring', label: '重组' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'financial', label: '财务费用', notes: ['利息及债务费用。'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'texas-instruments-q1-fy26',
      company: 'Texas Instruments',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/texas-instruments-q1-fy26.png',
      roundingTolerance: 0.05,
      revenue: {
        total: 4.825,
        notes: ['+19% Y/Y'],
        items: [
          { id: 'analog', label: 'Analog', value: 3.924, notes: ['+22% Y/Y'] },
          { id: 'embedded_processing', label: 'Embedded Processing', value: 0.723, notes: ['+12% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.178, notes: ['(16%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.026 },
        operatingExpenses: {
          total: 0.991,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.51 },
            { id: 'sga', label: 'SG&A', value: 0.464 },
            {
              id: 'restructuring',
              label: 'Restructuring',
              value: 0.017,
              notes: ['The official TI filing reports this amount as acquisition charges.'],
            },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.169 },
      },
      otherIncome: {
        total: 0.047,
        items: [{ id: 'other_income', label: 'Other', value: 0.047 }],
      },
      otherExpenses: {
        total: 0.141,
        items: [{ id: 'financial', label: 'Financial', value: 0.141, notes: ['Interest and debt expense.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.799, notes: ['58% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.808, notes: ['37% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.545, notes: ['32% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +19%'],
            items: [
              { id: 'analog', label: '模拟', notes: ['同比 +22%'] },
              { id: 'embedded_processing', label: '嵌入式处理', notes: ['同比 +12%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (16%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政费用' },
                {
                  id: 'restructuring',
                  label: '重组',
                  notes: ['德州仪器官方申报将该金额列为收购费用。'],
                },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'financial', label: '财务费用', notes: ['利息及债务费用。'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 58%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 37%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 32%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'texas-instruments-q2-fy26',
      company: 'Texas Instruments',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/texas-instruments-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 5.5,
        notes: ['+23% Y/Y'],
        items: [
          { id: 'analog', label: 'Analog', value: 4.4, notes: ['+26% Y/Y'] },
          { id: 'embedded_processing', label: 'Embedded Processing', value: 0.8, notes: ['+16% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.3, notes: ['(2%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.1 },
        operatingExpenses: {
          total: 1.0,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.5 },
            { id: 'sga', label: 'SG&A', value: 0.5 },
            { id: 'other_operating_expense', label: 'Other', value: 0.017 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'financial', label: 'Financial', value: 0.1, notes: ['Interest and debt expense.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.4, notes: ['61% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['42% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['36% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +23%'],
            items: [
              { id: 'analog', label: '模拟', notes: ['同比 +26%'] },
              { id: 'embedded_processing', label: '嵌入式处理', notes: ['同比 +16%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (2%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'other_operating_expense', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'financial', label: '财务费用', notes: ['利息及债务费用。'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 61%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 36%', '同比 +7 个百分点'] },
          },
        },
      },
    }
  );
})(window);
