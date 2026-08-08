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
      key: 'reddit-q4-fy25',
      company: 'Reddit',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/reddit-q4-fy25.png',
      roundingTolerance: 2.1,
      revenue: {
        total: 726,
        notes: ['+70% Y/Y'],
        items: [
          { id: 'advertising', label: 'Advertising', value: 690, notes: ['+75% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 36, notes: ['+8% Y/Y', 'Data API Access', 'Model Training'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 59 },
        operatingExpenses: {
          total: 435,
          items: [
            { id: 'rnd', label: 'Research & development', value: 199, notes: ['27% of revenue', '(17pp) Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 164, notes: ['23% of revenue', '+4pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 72, notes: ['10% of revenue', '(7pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3 },
      },
      otherIncome: {
        total: 23,
        items: [{ id: 'other_income', label: 'Other', value: 23 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 667, notes: ['92% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 232, notes: ['32% margin', '+20pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 252, notes: ['35% margin', '+18pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +70%'],
            items: [
              { id: 'advertising', label: '广告', notes: ['同比 +75%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +8%', 'Data API 访问', '模型训练'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (17 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 23%', '同比 +4 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (7 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 92%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +20 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 +18 个百分点'] },
          },
        },
      },
    },
    {
      key: 'reddit-q1-fy26',
      company: 'Reddit',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/reddit-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 663,
        notes: ['+69% Y/Y'],
        items: [
          { id: 'advertising', label: 'Advertising', value: 625, notes: ['+74% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 39, notes: ['+15% Y/Y', 'Data API Access', 'Model Training'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 56 },
        operatingExpenses: {
          total: 424,
          items: [
            { id: 'rnd', label: 'Research & development', value: 207, notes: ['31% of revenue', '(18pp) Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 152, notes: ['23% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 66, notes: ['10% of revenue', '(8pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2 },
      },
      otherIncome: {
        total: 23,
        items: [{ id: 'other_income', label: 'Other', value: 23 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 607, notes: ['92% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 183, notes: ['28% margin', '+27pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 204, notes: ['31% margin', '+24pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +69%'],
            items: [
              { id: 'advertising', label: '广告', notes: ['同比 +74%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +15%', 'Data API 访问', '模型训练'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 31%', '同比 (18 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 23%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (8 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 92%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 28%', '同比 +27 个百分点'] },
            net: { label: '净利润', notes: ['利润率 31%', '同比 +24 个百分点'] },
          },
        },
      },
    },
    {
      key: 'reddit-q2-fy26',
      company: 'Reddit',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/reddit-q2-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 805,
        notes: ['+61% Y/Y'],
        items: [
          { id: 'advertising', label: 'Advertising', value: 762, notes: ['+64% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 43, notes: ['+24% Y/Y', 'Data API Access', 'Model Training'] },
        ],
        breakdowns: [
          {
            id: 'geography',
            label: 'Revenue by geography',
            total: 805,
            items: [
              { id: 'united_states', label: 'United States', value: 638, notes: ['+56% Y/Y'] },
              { id: 'rest_of_world', label: 'Rest of World', value: 167, notes: ['+84% Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 70 },
        operatingExpenses: {
          total: 503,
          items: [
            { id: 'rnd', label: 'Research & development', value: 231, notes: ['29% of revenue', '(11pp) Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 196, notes: ['24% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 76, notes: ['9% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5 },
      },
      otherIncome: {
        total: 25,
        items: [{ id: 'other_income', label: 'Other', value: 25 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 735, notes: ['91% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 232, notes: ['29% margin', '+15pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 253, notes: ['31% margin', '+14pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +61%'],
            items: [
              { id: 'advertising', label: '广告', notes: ['同比 +64%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +24%', 'Data API 访问', '模型训练'] },
            ],
            breakdowns: [
              {
                id: 'geography',
                label: '按地区划分的收入',
                items: [
                  { id: 'united_states', label: '美国', notes: ['同比 +56%'] },
                  { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +84%'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 29%', '同比 (11 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 24%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 91%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 29%', '同比 +15 个百分点'] },
            net: { label: '净利润', notes: ['利润率 31%', '同比 +14 个百分点'] },
          },
        },
      },
    }
  );
})(window);
