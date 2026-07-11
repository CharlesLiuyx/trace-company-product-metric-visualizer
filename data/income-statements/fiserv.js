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
      key: 'fiserv-q4-fy25',
      company: 'Fiserv',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/fiserv-q4-fy25.png',
      roundingTolerance: 0.006,
      notes: [
        'The View reproduces the source infographic’s rounded labels. Fiserv reported the figures in millions in its February 10, 2026 fourth-quarter release.',
        'The source’s Other $0.1B bridge is $0.097B: $0.046B other income, plus $0.053B income from investments in unconsolidated affiliates, less $0.002B noncontrolling interests. This reconciles the visible operating-profit bridge to attributable net income.',
      ],
      revenue: {
        total: 5.284,
        notes: ['+1% Y/Y'],
        items: [
          { id: 'merchants_solutions', label: 'Merchants Solutions', value: 2.538, notes: ['+2% Y/Y', '32% operating margin'] },
          { id: 'financial_solutions', label: 'Financial Solutions', value: 2.362, notes: ['(2%) Y/Y', '42% operating margin'] },
          { id: 'corporate', label: 'Corporate', value: 0.384, notes: ['+9% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of processing and services plus cost of product',
          value: 2.268,
          items: [
            { id: 'cost_processing', label: 'Cost of processing and services', value: 1.515 },
            { id: 'cost_product', label: 'Cost of product', value: 0.753 },
          ],
        },
        operatingExpenses: {
          total: 1.728,
          items: [
            { id: 'operating_expenses', label: 'Selling, general and administrative', value: 1.728 },
          ],
        },
        tax: { id: 'tax', label: 'Income tax provision', value: 0.202 },
      },
      operatingOtherIncome: {
        total: 0.003,
        items: [
          { label: 'Net gain on sales and distribution of other assets', value: 0.003 },
        ],
      },
      otherIncome: {
        total: 0.097,
        items: [
          { id: 'other', label: 'Other bridge', value: 0.097, notes: ['Other income plus equity-method income, net of noncontrolling interests; shown as $0.1B in the source.'] },
        ],
      },
      otherExpenses: {
        total: 0.375,
        items: [
          { id: 'interest', label: 'Interest expense, net', value: 0.375 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.016, notes: ['57% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.291, notes: ['24% margin', '(7pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.811, notes: ['15% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          notes: [
            '视图复现源信息图的四舍五入标签。Fiserv 在 2026 年 2 月 10 日发布的第四季度业绩中以百万美元披露这些数字。',
            '源图中“其他”1 亿美元桥接项为 0.097B：其他收入 0.046B，加权益法投资收益 0.053B，减非控股权益 0.002B；该处理使可见的营业利润桥接至归母净利润。',
          ],
          revenue: {
            notes: ['同比 +1%'],
            items: [
              { id: 'merchants_solutions', label: '商户解决方案', notes: ['同比 +2%', '经营利润率 32%'] },
              { id: 'financial_solutions', label: '金融解决方案', notes: ['同比 (2%)', '经营利润率 42%'] },
              { id: 'corporate', label: '公司及其他', notes: ['同比 +9%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '处理服务成本及产品成本',
              items: [
                { id: 'cost_processing', label: '处理服务成本' },
                { id: 'cost_product', label: '产品成本' },
              ],
            },
            operatingExpenses: {
              items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }],
            },
            tax: { label: '所得税费用' },
          },
          operatingOtherIncome: {
            items: [{ label: '出售业务及分配其他资产的净收益' }],
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他桥接项', notes: ['其他收入加权益法投资收益，扣除非控股权益；源图显示为 1 亿美元。'] }],
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '净利息费用' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 57%', '同比 (4 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 24%', '同比 (7 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 15%', '同比 +4 个百分点'] },
          },
        },
      },
    }
  );
})(window);
