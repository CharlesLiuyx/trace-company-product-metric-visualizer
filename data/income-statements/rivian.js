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
      key: 'rivian-q1-fy26',
      company: 'Rivian',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/rivian-q1-fy26.png',
      roundingTolerance: 0.01,
      revenue: {
        total: 1.4,
        notes: ['+11% Y/Y'],
        items: [
          {
            id: 'automotive',
            label: 'Automotive',
            value: 0.9,
            notes: ['(2%) Y/Y', '(7%) gross margin', '(17pp) Y/Y'],
          },
          {
            id: 'software_services',
            label: 'Software & Services',
            value: 0.5,
            notes: ['+49% Y/Y', '38% gross margin', '+2pp Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.3 },
        operatingExpenses: {
          total: 1.0,
          items: [
            {
              id: 'rnd',
              label: 'Research & development',
              value: 0.5,
              notes: ['33% of revenue', '+2pp Y/Y'],
            },
            {
              id: 'sga',
              label: 'Selling, general, & admin',
              value: 0.5,
              notes: ['39% of revenue', '+1pp Y/Y'],
            },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 0.1,
          notes: ['9% margin', '(8pp) Y/Y'],
        },
        operating: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.9,
          notes: ['(64%) margin', '(11pp) Y/Y'],
        },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.9,
          notes: ['No separate net loss line is shown in the Source chart.'],
        },
      },
      sources: [
        {
          name: 'Rivian Q1 2026 Form 10-Q',
          url: 'https://www.sec.gov/Archives/edgar/data/1874178/000187417826000035/rivn-20260331.htm',
        },
      ],
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              {
                id: 'automotive',
                label: '汽车业务',
                notes: ['同比 (2%)', '毛利率 (7%)', '同比 (17 个百分点)'],
              },
              {
                id: 'software_services',
                label: '软件与服务',
                notes: ['同比 +49%', '毛利率 38%', '同比 +2 个百分点'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                {
                  id: 'rnd',
                  label: '研发',
                  notes: ['占收入 33%', '同比 +2 个百分点'],
                },
                {
                  id: 'sga',
                  label: '销售、一般及行政费用',
                  notes: ['占收入 39%', '同比 +1 个百分点'],
                },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 9%', '同比 (8 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (64%)', '同比 (11 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净亏损。'] },
          },
        },
      },
    }
  );
})(window);
