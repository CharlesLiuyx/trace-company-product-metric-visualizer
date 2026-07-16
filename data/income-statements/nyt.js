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
      key: 'nyt-q1-fy26',
      company: 'The New York Times Company',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/nyt-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 712,
        notes: ['+12% Y/Y'],
        items: [
          {
            id: 'subscription',
            label: 'Subscription',
            value: 517,
            notes: ['+11% Y/Y'],
            children: [
              { id: 'digital', label: 'Digital', value: 389, notes: ['+16% Y/Y'] },
              { id: 'print', label: 'Print', value: 128, notes: ['(1%) Y/Y'] },
            ],
          },
          { id: 'advertising', label: 'Advertising', value: 127, notes: ['(1%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 69, notes: ['+8% Y/Y', 'Wirecutter'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 363 },
        operatingExpenses: {
          total: 259,
          items: [
            { id: 'ga', label: 'G&A', value: 86, notes: ['12% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 77, notes: ['11% of revenue', '+0pp Y/Y'] },
            { id: 'product', label: 'Product', value: 70, notes: ['10% of revenue', '(1pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 21, notes: ['3% of revenue', '(0pp) Y/Y'] },
            { id: 'other_expense', label: 'Other', value: 4, notes: ['1% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax_other', label: 'Tax & other', value: 14 },
      },
      otherIncome: {
        total: 11,
        items: [{ id: 'interest', label: 'Interest', value: 11 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 349, notes: ['49% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 91, notes: ['13% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 88, notes: ['12% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              {
                id: 'subscription', label: '订阅', notes: ['同比 +11%'],
                children: [
                  { id: 'digital', label: '数字', notes: ['同比 +16%'] },
                  { id: 'print', label: '印刷', notes: ['同比 (1%)'] },
                ],
              },
              { id: 'advertising', label: '广告', notes: ['同比 (1%)'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +8%', 'Wirecutter'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用', notes: ['占收入 12%', '同比 (0 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 11%', '同比 +0 个百分点'] },
                { id: 'product', label: '产品', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 3%', '同比 (0 个百分点)'] },
                { id: 'other_expense', label: '其他', notes: ['占收入 1%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          otherIncome: {
            items: [
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nyt-q4-fy25',
      company: 'The New York Times Company',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/nyt-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 802,
        notes: ['+10% Y/Y'],
        items: [
          {
            id: 'subscription',
            label: 'Subscription',
            value: 510,
            notes: ['+9% Y/Y'],
            children: [
              { id: 'digital', label: 'Digital', value: 382, notes: ['+14% Y/Y'] },
              { id: 'print', label: 'Print', value: 129, notes: ['(2%) Y/Y'] },
            ],
          },
          { id: 'advertising', label: 'Advertising', value: 192, notes: ['+16% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 100, notes: ['+5% Y/Y', 'Wirecutter'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 367 },
        operatingExpenses: {
          total: 274,
          items: [
            { id: 'sm', label: 'S&M', value: 92, notes: ['12% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 89, notes: ['11% of revenue', '+1pp Y/Y'] },
            { id: 'product', label: 'Product', value: 67, notes: ['8% of revenue', '(0pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 21, notes: ['3% of revenue', '(0pp) Y/Y'] },
            { id: 'other_expense', label: 'Other', value: 4, notes: ['1% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax_other', label: 'Tax & other', value: 42 },
      },
      otherIncome: {
        total: 11,
        items: [{ id: 'interest', label: 'Interest', value: 11 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 435, notes: ['54% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 162, notes: ['20% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 130, notes: ['16% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              {
                id: 'subscription', label: '订阅', notes: ['同比 +9%'],
                children: [
                  { id: 'digital', label: '数字', notes: ['同比 +14%'] },
                  { id: 'print', label: '印刷', notes: ['同比 (2%)'] },
                ],
              },
              { id: 'advertising', label: '广告', notes: ['同比 +16%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +5%', 'Wirecutter'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 12%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 +1 个百分点'] },
                { id: 'product', label: '产品', notes: ['占收入 8%', '同比 (0 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 3%', '同比 (0 个百分点)'] },
                { id: 'other_expense', label: '其他', notes: ['占收入 1%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          otherIncome: {
            items: [
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 20%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 16%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nyt-q3-fy25',
      company: 'The New York Times Company',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/nyt-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 701,
        notes: ['+9% Y/Y'],
        items: [
          {
            id: 'subscription',
            label: 'Subscription',
            value: 495,
            notes: ['+9% Y/Y'],
            children: [
              { id: 'digital', label: 'Digital', value: 367, notes: ['+14% Y/Y'] },
              { id: 'print', label: 'Print', value: 127, notes: ['(3%) Y/Y'] },
            ],
          },
          { id: 'advertising', label: 'Advertising', value: 132, notes: ['+12% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 74, notes: ['+8% Y/Y', 'Wirecutter'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 349 },
        operatingExpenses: {
          total: 247,
          items: [
            { id: 'sm', label: 'S&M', value: 80, notes: ['11% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 77, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'product', label: 'Product', value: 67, notes: ['10% of revenue', '+0pp Y/Y'] },
            { id: 'da', label: 'D&A', value: 21, notes: ['3% of revenue', '(0pp) Y/Y'] },
            { id: 'other_expense', label: 'Other', value: 2, notes: ['0% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax_other', label: 'Tax & other', value: 31 },
      },
      otherIncome: {
        total: 8,
        items: [{ id: 'interest', label: 'Interest', value: 8 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 352, notes: ['50% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 105, notes: ['15% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 82, notes: ['12% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              {
                id: 'subscription', label: '订阅', notes: ['同比 +9%'],
                children: [
                  { id: 'digital', label: '数字', notes: ['同比 +14%'] },
                  { id: 'print', label: '印刷', notes: ['同比 (3%)'] },
                ],
              },
              { id: 'advertising', label: '广告', notes: ['同比 +12%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +8%', 'Wirecutter'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 11%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'product', label: '产品', notes: ['占收入 10%', '同比 +0 个百分点'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 3%', '同比 (0 个百分点)'] },
                { id: 'other_expense', label: '其他', notes: ['占收入 0%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 50%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +2 个百分点'] },
          },
        },
      },
    }
  );
})(window);
