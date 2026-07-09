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
      key: 'global-payments-q4-fy25',
      company: 'Global Payments',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/global-payments-q4-fy25.png',
      roundingTolerance: 0.002,
      revenue: {
        total: 1.896765,
        notes: ['+6% Y/Y in the source infographic'],
        items: [
          {
            id: 'merchants_solutions',
            label: 'Merchants Solutions',
            value: 1.896765,
            notes: ['+6% Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue not separately shown',
          value: 0,
          notes: ['The source flows revenue directly to operating profit and operating expenses.'],
        },
        operatingExpenses: {
          total: 1.681435,
          items: [
            {
              id: 'sga',
              label: 'SG&A',
              value: 1.091918,
              notes: ['58% of revenue', '+14pp Y/Y'],
            },
            {
              id: 'cost_of_service',
              label: 'Cost of service',
              value: 0.557343,
              notes: ['29% of revenue', '(12pp) Y/Y'],
            },
            {
              id: 'other_operating_expense',
              label: 'Other operating expense',
              value: 0.032174,
              notes: ['Net loss on business dispositions; displayed as $32M in the source.'],
            },
          ],
        },
        tax: {
          label: 'Tax expense',
          value: 0,
          notes: ['The source shows a tax benefit rather than tax expense.'],
        },
      },
      otherIncome: {
        total: 0.146602,
        notes: [
          'The source infographic aggregates non-operating, equity-method, discontinued-operations, and noncontrolling-interest effects into its Other bridge so the displayed flow reconciles to attributable net income.',
        ],
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.113977,
            notes: ['Balancing aggregation represented as $0.1B in the source infographic.'],
          },
          {
            id: 'tax_benefit',
            label: 'Tax benefit',
            value: 0.032625,
            notes: ['Displayed as $32M in the source infographic.'],
          },
        ],
      },
      otherExpenses: {
        total: 0.144408,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 0.144408,
            notes: ['Net interest and other expense represented as ($0.1B) in the source infographic.'],
          },
        ],
      },
      profit: {
        gross: {
          label: 'Gross profit not separately shown',
          value: 1.896765,
          notes: ['No separate gross-profit stage appears in the source infographic.'],
        },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 0.21533,
          notes: ['11% margin', '(11pp) Y/Y'],
        },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 0.217524,
          notes: ['12% margin', '(5pp) Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['源图标注同比 +6%'],
            items: [
              { label: '商户解决方案', notes: ['同比 +6%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '未单列收入成本',
              notes: ['源图将收入直接分流至营业利润和运营费用。'],
            },
            operatingExpenses: {
              items: [
                { label: '销售、一般及行政费用', notes: ['占收入 58%', '同比 +14 个百分点'] },
                { label: '服务成本', notes: ['占收入 29%', '同比 (12 个百分点)'] },
                { label: '其他运营费用', notes: ['业务处置净损失；源图显示为 3,200 万美元。'] },
              ],
            },
            tax: {
              label: '所得税费用',
              notes: ['源图显示所得税收益，而非所得税费用。'],
            },
          },
          otherIncome: {
            notes: ['源图将非经营项目、权益法收益、终止经营及非控股权益影响合并进“其他”桥接项，以勾稽归属于 Global Payments 的净利润。'],
            items: [
              { label: '其他', notes: ['源图以 1 亿美元展示的平衡聚合项。'] },
              { label: '所得税收益', notes: ['源图显示为 3,200 万美元。'] },
            ],
          },
          otherExpenses: {
            items: [
              { label: '利息', notes: ['净利息及其他费用在源图中显示为 1 亿美元。'] },
            ],
          },
          profit: {
            gross: { label: '未单列毛利润', notes: ['源图未显示单独的毛利润阶段。'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 (11 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 (5 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
