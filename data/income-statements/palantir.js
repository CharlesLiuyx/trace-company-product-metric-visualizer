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
      key: 'palantir-q3-fy25',
      company: 'Palantir',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1181,
        notes: ['+63% Y/Y'],
        items: [
          { id: 'government', label: 'Government', value: 633, notes: ['+55% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 548, notes: ['+73% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 207 },
        operatingExpenses: {
          total: 580,
          items: [
            { id: 'sm', label: 'S&M', value: 275, notes: ['23% of revenue', '(6pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 162, notes: ['14% of revenue', '(5pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 144, notes: ['12% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4 },
      },
      otherIncome: {
        total: 87,
        items: [
          { id: 'interest', label: 'Interest', value: 60 },
          { id: 'other', label: 'Other', value: 27 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 974, notes: ['82% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 393, notes: ['33% margin', '+18pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 477, notes: ['40% margin', '+20pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +63%'],
            items: [
              { label: '政府', notes: ['同比 +55%'] },
              { label: '商业', notes: ['同比 +73%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 23%', '同比 (6 个百分点)'] },
                { label: '管理费用', notes: ['占收入 14%', '同比 (5 个百分点)'] },
                { label: '研发', notes: ['占收入 12%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { label: '利息' },
              { label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 +18 个百分点'] },
            net: { label: '净利润', notes: ['利润率 40%', '同比 +20 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q4-fy25',
      company: 'Palantir',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1407,
        notes: ['+70% Y/Y'],
        items: [
          { id: 'commercial', label: 'Commercial', value: 677, notes: ['+82% Y/Y'] },
          { id: 'government', label: 'Government', value: 730, notes: ['+60% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 216 },
        operatingExpenses: {
          total: 615,
          items: [
            { id: 'sm', label: 'S&M', value: 302, notes: ['21% of revenue', '(13pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 170, notes: ['12% of revenue', '(10pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 144, notes: ['10% of revenue', '(11pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 10 },
      },
      otherIncome: {
        total: 63,
        items: [{ id: 'interest', label: 'Interest', value: 63 }],
      },
      otherExpenses: {
        total: 17,
        items: [{ id: 'other', label: 'Other', value: 17 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1191, notes: ['85% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 575, notes: ['41% margin', '+40pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 612, notes: ['43% margin', '+34pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +70%'],
            items: [
              { label: '商业', notes: ['同比 +82%'] },
              { label: '政府', notes: ['同比 +60%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 21%', '同比 (13 个百分点)'] },
                { label: '管理费用', notes: ['占收入 12%', '同比 (10 个百分点)'] },
                { label: '研发', notes: ['占收入 10%', '同比 (11 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '利息' }] },
          otherExpenses: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 85%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 41%', '同比 +40 个百分点'] },
            net: { label: '净利润', notes: ['利润率 43%', '同比 +34 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q1-fy26',
      company: 'Palantir',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1633,
        notes: ['+85% Y/Y', 'Commercial and Government revenue items sum to $1,632M because the source chart rounds to whole millions.'],
        items: [
          { id: 'commercial', label: 'Commercial', value: 774, notes: ['+95% Y/Y'] },
          { id: 'government', label: 'Government', value: 858, notes: ['+76% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 216 },
        operatingExpenses: {
          total: 663,
          items: [
            { id: 'sm', label: 'S&M', value: 319, notes: ['20% of revenue', '(7pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 183, notes: ['11% of revenue', '(7pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 161, notes: ['10% of revenue', '(5pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 12 },
      },
      otherIncome: {
        total: 134,
        items: [
          { id: 'interest', label: 'Interest', value: 66 },
          { id: 'other', label: 'Other', value: 68 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1417, notes: ['87% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 754, notes: ['46% margin', '+26pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 876, notes: ['54% margin', '+29pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +85%', '由于来源图按百万美元四舍五入，商业和政府收入明细合计为 1,632M 美元。'],
            items: [
              { label: '商业', notes: ['同比 +95%'] },
              { label: '政府', notes: ['同比 +76%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 20%', '同比 (7 个百分点)'] },
                { label: '管理费用', notes: ['占收入 11%', '同比 (7 个百分点)'] },
                { label: '研发', notes: ['占收入 10%', '同比 (5 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { label: '利息' },
              { label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 87%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 46%', '同比 +26 个百分点'] },
            net: { label: '净利润', notes: ['利润率 54%', '同比 +29 个百分点'] },
          },
        },
      },
    }
  );
})(window);
