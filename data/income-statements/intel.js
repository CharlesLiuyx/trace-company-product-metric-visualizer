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
      key: 'intel-q1-fy26',
      company: 'Intel',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q1-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 13.6,
        notes: ['+7% Y/Y'],
        items: [
          {
            id: 'intel_products',
            label: 'Intel Products',
            value: 12.8,
            notes: ['+9% Y/Y'],
            children: [
              { id: 'client_computing', label: 'Client Computing', value: 7.7, notes: ['+1% Y/Y', '31% operating margin'] },
              { id: 'datacenter_ai', label: 'Datacenter & AI', value: 5.1, notes: ['+22% Y/Y', '11% operating margin'] },
            ],
          },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 5.4, notes: ['+16% Y/Y', '(43%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.6, notes: ['(33%) Y/Y', '16% operating margin'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -5.3,
            notes: ['Intersegment eliminations reconciling segment revenue to net revenue.'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 8.2,
          notes: ['Net revenue less gross profit differs by $0.1B due to rounded source-chart values.'],
        },
        operatingExpenses: {
          total: 8.5,
          items: [
            { id: 'rnd', label: 'Research & development', value: 3.4, notes: ['25% of revenue', '(4pp) Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.0, notes: ['8% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring and other', value: 4.1, notes: ['30% of revenue', '+29pp Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['No separate tax line is shown in the source chart.'],
        },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.3, notes: ['39% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -3.1, notes: ['(23%) margin', '(21pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -3.1,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              {
                id: 'intel_products',
                label: '英特尔产品',
                notes: ['同比 +9%'],
                children: [
                  { id: 'client_computing', label: '客户端计算', notes: ['同比 +1%', '营业利润率 31%'] },
                  { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 +22%', '营业利润率 11%'] },
                ],
              },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 +16%', '营业利润率 (43%)'] },
              { id: 'other', label: '其他', notes: ['同比 (33%)', '营业利润率 16%'] },
              { id: 'eliminations', label: '内部抵销', notes: ['将分部收入调节为净收入的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '销售成本',
              notes: ['净收入减毛利润因来源图数值取整相差 $0.1B。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 25%', '同比 (4 个百分点)'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 8%', '同比 (2 个百分点)'] },
                { id: 'restructuring', label: '重组及其他', notes: ['占收入 30%', '同比 +29 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 +2 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (23%)', '同比 (21 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损项。'] },
          },
        },
      },
    },
    {
      key: 'intel-q4-fy25',
      company: 'Intel',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q4-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 13.7,
        notes: ['(4%) Y/Y'],
        items: [
          {
            id: 'intel_products',
            label: 'Intel Products',
            value: 12.9,
            notes: ['(1%) Y/Y'],
            children: [
              { id: 'client_computing', label: 'Client Computing', value: 8.2, notes: ['(7%) Y/Y', '27% operating margin'] },
              { id: 'datacenter_ai', label: 'Datacenter & AI', value: 4.7, notes: ['+9% Y/Y', '26% operating margin'] },
            ],
          },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 4.5, notes: ['+4% Y/Y', '(56%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.6, notes: ['(48%) Y/Y', '1% operating margin'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -4.3,
            notes: ['Intersegment eliminations reconciling segment revenue to net revenue.'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 8.7,
        },
        operatingExpenses: {
          total: 4.4,
          items: [
            { id: 'rnd', label: 'Research & development', value: 3.2, notes: ['24% of revenue', '(4pp) Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.2, notes: ['9% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 0.7,
        },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest_other', label: 'Interest & other', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.0, notes: ['36% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['4% margin', '+1pp Y/Y'] },
        net: {
          id: 'net_loss',
          label: 'Net loss',
          value: -0.3,
          notes: ['(2%) margin', '(1pp) Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 (4%)'],
            items: [
              {
                id: 'intel_products',
                label: '英特尔产品',
                notes: ['同比 (1%)'],
                children: [
                  { id: 'client_computing', label: '客户端计算', notes: ['同比 (7%)', '营业利润率 27%'] },
                  { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 +9%', '营业利润率 26%'] },
                ],
              },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 +4%', '营业利润率 (56%)'] },
              { id: 'other', label: '其他', notes: ['同比 (48%)', '营业利润率 1%'] },
              { id: 'eliminations', label: '内部抵销', notes: ['将分部收入调节为净收入的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '销售成本',
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 (4 个百分点)'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 9%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'interest_other', label: '利息及其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 36%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 +1 个百分点'] },
            net: { label: '净亏损', notes: ['利润率 (2%)', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
