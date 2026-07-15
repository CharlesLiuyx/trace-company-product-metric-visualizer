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
      key: 'apple-q2-fy26',
      company: 'Apple',
      period: 'Q2 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 111.2,
        notes: ['+17% Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 80.2,
            notes: ['+17% Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 57.0, notes: ['+22% Y/Y'] },
              { id: 'mac', label: 'Mac', value: 8.4, notes: ['+6% Y/Y', 'Air, Pro, Mini'] },
              { id: 'ipad', label: 'iPad', value: 6.9, notes: ['+8% Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 7.9,
                notes: ['+5% Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 31.0, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 56.4,
          items: [
            { id: 'product_cost', label: 'Products', value: 49.2, notes: ['39% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 7.2, notes: ['77% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 18.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 11.4, notes: ['10% of revenue', '+1pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 7.5, notes: ['7% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 6.3 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 54.8, notes: ['49% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 35.9, notes: ['32% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 29.7, notes: ['27% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 +17%'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 +22%'] },
                  { id: 'mac', label: 'Mac', notes: ['同比 +6%', 'Air、Pro、Mini'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 +8%'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 +5%'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +16%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 39%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 77%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 10%', '同比 +1 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 27%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'apple-q1-fy26',
      company: 'Apple',
      period: 'Q1 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 143.8,
        notes: ['+16% Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 113.7,
            notes: ['+16% Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 85.3, notes: ['+23% Y/Y'] },
              { id: 'mac', label: 'Mac', value: 8.4, notes: ['(7%) Y/Y', 'Air, Pro, Mini'] },
              { id: 'ipad', label: 'iPad', value: 8.5, notes: ['+6% Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 11.5,
                notes: ['(2%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 30.0, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 74.5,
          items: [
            { id: 'product_cost', label: 'Products', value: 67.5, notes: ['41% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 7.1, notes: ['77% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 18.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 10.9, notes: ['8% of revenue', '+1pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 7.5, notes: ['5% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 8.9 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 69.2, notes: ['48% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 50.9, notes: ['35% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 42.1, notes: ['29% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 +16%'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 +23%'] },
                  { id: 'mac', label: 'Mac', notes: ['同比 (7%)', 'Air、Pro、Mini'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 +6%'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (2%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 41%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 77%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 8%', '同比 +1 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 5%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 48%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 29%', '同比 +0 个百分点'] },
          },
        },
      },
    }
  );
})(window);
