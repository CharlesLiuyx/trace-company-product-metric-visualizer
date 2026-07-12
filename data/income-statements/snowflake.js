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
      key: 'snowflake-q1-fy27',
      company: 'Snowflake',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/snowflake-q1-fy27.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1391,
        notes: ['+33% Y/Y'],
        items: [
          { id: 'product_revenue', label: 'Product revenue', value: 1334, notes: ['+34% Y/Y'] },
          { id: 'professional_services', label: 'Professional services', value: 57, notes: ['+25% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 465 },
        operatingExpenses: {
          total: 1253,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 589, notes: ['42% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 535, notes: ['38% of revenue', '(7pp) Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 129, notes: ['9% of revenue', '(11pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 926, notes: ['67% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -326, notes: ['(23%) margin', '+19pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -326,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +33%'],
            items: [
              { id: 'product_revenue', label: '产品收入', notes: ['同比 +34%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +25%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 42%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 38%', '同比 (7 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 9%', '同比 (11 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单独显示税费项目。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 67%', '同比 +0 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (23%)', '同比 +19 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
          },
        },
      },
    },
    {
      key: 'snowflake-q4-fy26',
      company: 'Snowflake',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/snowflake-q4-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1284,
        notes: ['+30% Y/Y'],
        items: [
          { id: 'product_revenue', label: 'Product revenue', value: 1227, notes: ['+30% Y/Y'] },
          { id: 'professional_services', label: 'Professional services', value: 57, notes: ['+32% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 426 },
        operatingExpenses: {
          total: 1176,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 551, notes: ['43% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 511, notes: ['40% of revenue', '(10pp) Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 114, notes: ['9% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 858, notes: ['67% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -318, notes: ['(25%) margin', '+14pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -318,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +30%'],
            items: [
              { id: 'product_revenue', label: '产品收入', notes: ['同比 +30%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +32%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 43%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 40%', '同比 (10 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 9%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单独显示税费项目。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 67%', '同比 +1 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (25%)', '同比 +14 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
          },
        },
      },
    }
  );
})(window);
