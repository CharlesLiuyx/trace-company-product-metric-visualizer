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
      key: 'peloton-q2-fy26',
      company: 'Peloton',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/peloton-q2-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 657,
        notes: ['(3%) Y/Y'],
        items: [
          {
            id: 'connected_fitness_products',
            label: 'Connected Fitness Products',
            value: 244,
            notes: ['(4%) Y/Y', '14% gross margin'],
          },
          {
            id: 'subscriptions',
            label: 'Subscriptions',
            value: 413,
            notes: ['(2%) Y/Y', '72% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 325 },
        operatingExpenses: {
          total: 346,
          items: [
            { id: 'sm', label: 'S&M', value: 152, notes: ['23% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 103, notes: ['16% of revenue', '(4pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 65, notes: ['10% of revenue', '+1pp Y/Y'] },
            { id: 'other', label: 'Other', value: 26, notes: ['4% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 331, notes: ['50% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -14, notes: ['(2%) margin', '+5pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -14,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 (3%)'],
            items: [
              { id: 'connected_fitness_products', label: '互联健身产品', notes: ['同比 (4%)', '毛利率 14%'] },
              { id: 'subscriptions', label: '订阅', notes: ['同比 (2%)', '毛利率 72%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 23%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 16%', '同比 (4 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 10%', '同比 +1 个百分点'] },
                { id: 'other', label: '其他', notes: ['占收入 4%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 50%', '同比 +3 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +5 个百分点'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净亏损项目。'],
            },
          },
        },
      },
    },
    {
      key: 'peloton-q3-fy26',
      company: 'Peloton',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/peloton-q3-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 631,
        notes: ['+1% Y/Y'],
        items: [
          {
            id: 'connected_fitness_products',
            label: 'Connected Fitness Products',
            value: 203,
            notes: ['(1%) Y/Y', '11% gross margin'],
          },
          {
            id: 'subscriptions',
            label: 'Subscriptions',
            value: 428,
            notes: ['+2% Y/Y', '71% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 304 },
        operatingExpenses: {
          total: 275,
          items: [
            { id: 'ga', label: 'G&A', value: 110, notes: ['17% of revenue', '(7pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 98, notes: ['16% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 59, notes: ['9% of revenue', '(0pp) Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 8, notes: ['2% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 27,
        items: [{ id: 'other_expense', label: 'Other', value: 27 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 327, notes: ['52% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 52, notes: ['8% margin', '+14pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 26,
          notes: [
            '4% margin',
            '+12pp Y/Y',
            'Operating profit less other expenses sums to $25M; the source chart reports $26M net profit due to rounded line items.',
          ],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              { id: 'connected_fitness_products', label: '互联健身产品', notes: ['同比 (1%)', '毛利率 11%'] },
              { id: 'subscriptions', label: '订阅', notes: ['同比 +2%', '毛利率 71%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用', notes: ['占收入 17%', '同比 (7 个百分点)'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 16%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 (0 个百分点)'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 2%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 +14 个百分点'] },
            net: {
              label: '净利润',
              notes: [
                '利润率 4%',
                '同比 +12 个百分点',
                '营业利润减其他费用按四舍五入后的项目相加为 2500 万美元；来源图显示净利润为 2600 万美元。',
              ],
            },
          },
        },
      },
    }
  );
})(window);
