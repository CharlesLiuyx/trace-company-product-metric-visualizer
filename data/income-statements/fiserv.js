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
            '视图复现源信息图的四舍五入标签。Fiserv 在 2026 年 2 月 10 日发布的第四季度业绩中以 M 美元为单位披露这些数字。',
            '源图中“其他”1 亿美元桥接项为 $0.097B：其他收入 $0.046B，加权益法投资收益 $0.053B，减非控股权益 $0.002B；该处理使可见的营业利润桥接至归母净利润。',
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
    },
    {
      key: 'fiserv-q1-fy26',
      company: 'Fiserv',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/fiserv-q1-fy26.png',
      roundingTolerance: 0.006,
      notes: [
        'The View reproduces the source infographic’s rounded labels. Fiserv reported the figures in millions in its May 5, 2026 first-quarter release.',
        'The source draws the $0.347B combined non-operating, tax, investment-income, and noncontrolling-interest effect as “Interest & Other ($0.3B)”; the combined net deduction reconciles operating profit to net income attributable to Fiserv.',
        'The source adds the $0.083B net gain on sale of assets into the operating-expense face through its visible $0.1B Other bridge.',
      ],
      revenue: {
        total: 5.027,
        notes: ['(2%) Y/Y'],
        items: [
          { id: 'merchants_solutions', label: 'Merchants Solutions', value: 2.373, notes: ['+0% Y/Y', '26% operating margin'] },
          { id: 'financial_solutions', label: 'Financial Solutions', value: 2.302, notes: ['(5%) Y/Y', '38% operating margin'] },
          { id: 'corporate', label: 'Corporate', value: 0.352, notes: ['+3% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of processing and services plus cost of product',
          value: 2.307,
          items: [
            { id: 'cost_processing', label: 'Cost of processing and services', value: 1.61 },
            { id: 'cost_product', label: 'Cost of product', value: 0.697 },
          ],
        },
        operatingExpenses: {
          total: 1.885,
          items: [
            { id: 'operating_expenses', label: 'Selling, general and administrative', value: 1.885 },
          ],
        },
        tax: {
          label: 'Income tax provision',
          value: 0,
          notes: ['The $24M provision is included in the source chart’s combined “Interest & Other” deduction.'],
        },
      },
      operatingOtherIncome: {
        total: 0.083,
        items: [
          { id: 'other', label: 'Other', value: 0.083, notes: ['Net gain on sale of assets; shown as $0.1B in the source.'] },
        ],
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.347,
        items: [
          {
            id: 'interest_other',
            label: 'Interest & Other',
            value: 0.347,
            notes: ['Interest expense, net, combined with other income, income from investments in unconsolidated affiliates, income tax, and noncontrolling interests to match the source’s terminal deduction.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.72, notes: ['54% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.918, notes: ['18% margin', '(9pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.571, notes: ['11% margin', '(5pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          notes: [
            '视图复现源信息图的四舍五入标签。Fiserv 在 2026 年 5 月 5 日发布的第一季度业绩中以 M 美元为单位披露这些数字。',
            '来源图把 $0.347B 的非经营性、税费、投资收益及非控股权益合并影响绘制为“利息及其他（$0.3B）”；该合并净扣减使营业利润与归属于 Fiserv 的净利润相衔接。',
            '来源图通过可见的“其他”$0.1B 桥接项，将出售资产净收益 $0.083B 加入营业费用端面。',
          ],
          revenue: {
            notes: ['同比 (2%)'],
            items: [
              { id: 'merchants_solutions', label: '商户解决方案', notes: ['同比 +0%', '经营利润率 26%'] },
              { id: 'financial_solutions', label: '金融解决方案', notes: ['同比 (5%)', '经营利润率 38%'] },
              { id: 'corporate', label: '公司及其他', notes: ['同比 +3%'] },
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
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }] },
            tax: { label: '所得税费用', notes: ['2400 万美元所得税费用已并入来源图的“利息及其他”扣减。'] },
          },
          operatingOtherIncome: { items: [{ id: 'other', label: '其他', notes: ['出售资产净收益；来源图显示为 1 亿美元。'] }] },
          otherExpenses: {
            items: [{ id: 'interest_other', label: '利息及其他', notes: ['净利息费用与其他收入、权益法投资收益、所得税及非控股权益合并，以匹配来源图的终端扣减。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 (5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 (9 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 (5 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
