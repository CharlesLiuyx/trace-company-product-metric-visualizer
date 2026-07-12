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
      key: 'amer-sports-q4-fy25',
      company: 'Amer Sports',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 1,
      sourceImage: 'input/processed/amer-sports-q4-fy25.png',
      roundingTolerance: 0.6,
      revenue: {
        total: 2101.1,
        notes: ['+28% Y/Y'],
        items: [
          { id: 'technical_apparel', label: 'Technical Apparel', value: 999.8, notes: ['+34% Y/Y'] },
          { id: 'outdoor_performance', label: 'Outdoor Performance', value: 764.1, notes: ['+29% Y/Y'] },
          { id: 'ball_racquet', label: 'Ball & Racquet', value: 337.2, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 889.0 },
        operatingExpenses: {
          total: 988.3,
          items: [
            { id: 'operating_expenses', label: 'Selling, General & Administrative expenses', value: 988.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 73.9 },
      },
      operatingOtherIncome: {
        total: 4.2,
        notes: ['Net of $5.1M other operating income and $0.9M impairment losses.'],
        items: [{ id: 'other', label: 'Other', value: 4.2, notes: ['$4M in the rounded source chart'] }],
      },
      otherExpenses: {
        total: 20.6,
        items: [{ id: 'finance', label: 'Finance', value: 20.6 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1212.1, notes: ['58% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 228.0, notes: ['12% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 133.5, notes: ['6% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +28%'],
            items: [
              { id: 'technical_apparel', label: '技术服饰', notes: ['同比 +34%'] },
              { id: 'outdoor_performance', label: '户外运动', notes: ['同比 +29%'] },
              { id: 'ball_racquet', label: '球类与球拍运动', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            notes: ['净额包含 510 万美元其他营业收入及 90 万美元减值损失。'],
            items: [{ id: 'other', label: '其他', notes: ['来源图按整数百万美元显示为 400 万美元'] }],
          },
          otherExpenses: {
            items: [{ id: 'finance', label: '财务费用' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 58%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amer-sports-q1-fy26',
      company: 'Amer Sports',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 1,
      sourceImage: 'input/processed/amer-sports-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1946,
        notes: ['+32% Y/Y'],
        items: [
          { id: 'technical_apparel', label: 'Technical Apparel', value: 885, notes: ['+33% Y/Y'] },
          { id: 'outdoor_performance', label: 'Outdoor Performance', value: 714, notes: ['+42% Y/Y'] },
          { id: 'ball_racquet', label: 'Ball & Racquet', value: 347, notes: ['+13% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 780 },
        operatingExpenses: {
          total: 856,
          items: [
            { id: 'sales_marketing', label: 'Sales & Marketing', value: 856 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 71 },
      },
      operatingOtherIncome: {
        total: 12,
        items: [{ id: 'other', label: 'Other', value: 12 }],
      },
      otherExpenses: {
        total: 81,
        items: [{ id: 'finance', label: 'Finance', value: 81 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1165, notes: ['60% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 321, notes: ['17% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 170, notes: ['9% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +32%'],
            items: [
              { id: 'technical_apparel', label: '技术服饰', notes: ['同比 +33%'] },
              { id: 'outdoor_performance', label: '户外运动', notes: ['同比 +42%'] },
              { id: 'ball_racquet', label: '球类与球拍', notes: ['同比 +13%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [{ id: 'sales_marketing', label: '销售与营销' }],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          otherExpenses: {
            items: [{ id: 'finance', label: '财务费用' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 60%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
