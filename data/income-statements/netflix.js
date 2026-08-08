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
      key: 'netflix-q4-fy25',
      company: 'Netflix',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/netflix-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.1,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'ucan', label: 'UCAN', value: 5.3, notes: ['+18% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 3.9, notes: ['+18% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.4, notes: ['+15% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.4, notes: ['+17% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.5 },
        operatingExpenses: {
          total: 2.6,
          items: [
            { id: 'technology_development', label: 'Technology & development', value: 1.1, notes: ['9% of revenue', '+2pp Y/Y'] },
            { id: 'marketing', label: 'Marketing', value: 0.9, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.6, notes: ['5% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      operatingOtherIncome: { total: 0, items: [] },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.2, items: [{ id: 'other', label: 'Other', value: 0.2 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.5, notes: ['46% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.0, notes: ['25% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.5, notes: ['20% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月',
          revenue: { notes: ['同比 +18%'], items: [{ id: 'ucan', label: '美国和加拿大', notes: ['同比 +18%'] }, { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +18%'] }, { id: 'latam', label: '拉美', notes: ['同比 +15%'] }, { id: 'apac', label: '亚太', notes: ['同比 +17%'] }] },
          costs: { costOfRevenue: { label: '收入成本' }, operatingExpenses: { items: [{ id: 'technology_development', label: '技术与开发', notes: ['占收入 9%', '同比 +2 个百分点'] }, { id: 'marketing', label: '市场营销', notes: ['占收入 7%', '同比 (2 个百分点)'] }, { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 +0 个百分点'] }] }, tax: { label: '税费' } },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: { gross: { label: '毛利润', notes: ['利润率 46%', '同比 +2 个百分点'] }, operating: { label: '营业利润', notes: ['利润率 25%', '同比 +2 个百分点'] }, net: { label: '净利润', notes: ['利润率 20%', '同比 +2 个百分点'] } },
        },
      },
    },
    {
      key: 'netflix-q1-fy26',
      company: 'Netflix',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/netflix-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.2,
        notes: ['+16% Y/Y'],
        items: [
          { id: 'ucan', label: 'UCAN', value: 5.2, notes: ['+14% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 4.0, notes: ['+17% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.5, notes: ['+19% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.5, notes: ['+20% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.9 },
        operatingExpenses: {
          total: 2.4,
          items: [
            { id: 'technology_development', label: 'Technology & development', value: 1.0, notes: ['8% of revenue', '+0pp Y/Y'] },
            { id: 'marketing', label: 'Marketing', value: 0.8, notes: ['7% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.6, notes: ['5% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.2 },
      },
      otherIncome: {
        total: 2.6,
        items: [
          {
            id: 'other_income',
            label: 'Other',
            value: 2.6,
            notes: ['Including $2.8B Warner break-up fee'],
          },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.4, notes: ['52% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.0, notes: ['32% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.3, notes: ['43% margin', '+16pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              { id: 'ucan', label: '美国和加拿大', notes: ['同比 +14%'] },
              { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +17%'] },
              { id: 'latam', label: '拉美', notes: ['同比 +19%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +20%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'technology_development', label: '技术与开发', notes: ['占收入 8%', '同比 +0 个百分点'] },
                { id: 'marketing', label: '市场营销', notes: ['占收入 7%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              {
                id: 'other_income',
                label: '其他',
                notes: ['包括 $2.8B Warner 解约费'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 43%', '同比 +16 个百分点'] },
          },
        },
      },
    },
    {
      key: 'netflix-q2-fy26',
      company: 'Netflix',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/netflix-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.6,
        notes: ['+13% Y/Y'],
        items: [
          { id: 'ucan', label: 'UCAN', value: 5.4, notes: ['+10% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 4.0, notes: ['+14% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.6, notes: ['+21% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.5, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.0 },
        operatingExpenses: {
          total: 2.3,
          items: [
            { id: 'technology_development', label: 'Technology & development', value: 1.0, notes: ['8% of revenue', '+1pp Y/Y'] },
            { id: 'marketing', label: 'Marketing', value: 0.8, notes: ['7% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.5, notes: ['4% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      operatingOtherIncome: { total: 0, items: [] },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.1, items: [{ id: 'other', label: 'Other', value: 0.1 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.5, notes: ['52% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.2, notes: ['33% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.4, notes: ['27% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'ucan', label: '美国和加拿大', notes: ['同比 +10%'] },
              { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +14%'] },
              { id: 'latam', label: '拉美', notes: ['同比 +21%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +16%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'technology_development', label: '技术与开发', notes: ['占收入 8%', '同比 +1 个百分点'] },
                { id: 'marketing', label: '市场营销', notes: ['占收入 7%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 4%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 27%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
