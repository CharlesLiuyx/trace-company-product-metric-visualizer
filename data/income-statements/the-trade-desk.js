/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'the-trade-desk-q3-fy25',
    company: 'The Trade Desk',
    period: 'Q3 FY25',
    periodNote: 'Ending Sep. 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/the-trade-desk-q3-fy25.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 739,
      notes: ['+18% Y/Y'],
      items: [{ id: 'revenue', label: 'Revenue', value: 739, notes: ['+18% Y/Y'] }],
    },
    costs: {
      costOfRevenue: { id: 'platform_operations', label: 'Platform operations', value: 162 },
      operatingExpenses: {
        total: 416,
        items: [
          { id: 'sales_marketing', label: 'Sales & marketing', value: 157, notes: ['21% of revenue', '(1pp) Y/Y'] },
          { id: 'technology_development', label: 'Technology & development', value: 128, notes: ['17% of revenue', '(1pp) Y/Y'] },
          { id: 'general_admin', label: 'General & admin', value: 131, notes: ['18% of revenue', '(4pp) Y/Y', 'Includes SBC for CEO performance ($14M)'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 64 },
    },
    otherIncome: {
      total: 18,
      items: [{ id: 'other_income', label: 'Other', value: 18 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 577, notes: ['78% margin', '(2pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 161, notes: ['22% margin', '+5pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 115, notes: ['16% margin', '+1pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度',
        periodNote: '截至 2025 年 9 月',
        revenue: {
          notes: ['同比 +18%'],
          items: [{ id: 'revenue', label: '收入', notes: ['同比 +18%'] }],
        },
        costs: {
          costOfRevenue: { label: '平台运营' },
          operatingExpenses: {
            items: [
              { id: 'sales_marketing', label: '销售与营销', notes: ['占收入 21%', '同比 (1 个百分点)'] },
              { id: 'technology_development', label: '技术与开发', notes: ['占收入 17%', '同比 (1 个百分点)'] },
              { id: 'general_admin', label: '一般与行政', notes: ['占收入 18%', '同比 (4 个百分点)', '包含 CEO 绩效相关的股权激励（$14M）'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 78%', '同比 (2 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 22%', '同比 +5 个百分点'] },
          net: { label: '净利润', notes: ['利润率 16%', '同比 +1 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'the-trade-desk-q4-fy25',
    company: 'The Trade Desk',
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/the-trade-desk-q4-fy25.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 846,
      notes: ['+14% Y/Y'],
      items: [{ id: 'revenue', label: 'Revenue', value: 846, notes: ['+14% Y/Y'] }],
    },
    costs: {
      costOfRevenue: { id: 'platform_operations', label: 'Platform operations', value: 163 },
      operatingExpenses: {
        total: 427,
        notes: ['Sales & marketing, technology & development, and general & admin add to $428M because source-chart values are rounded.'],
        items: [
          { id: 'sales_marketing', label: 'Sales & marketing', value: 174, notes: ['21% of revenue', '+0pp Y/Y'] },
          { id: 'technology_development', label: 'Technology & development', value: 131, notes: ['15% of revenue', '(2pp) Y/Y'] },
          { id: 'general_admin', label: 'General & admin', value: 123, notes: ['14% of revenue', '(3pp) Y/Y', 'Includes SBC for CEO performance ($10M)'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 83 },
    },
    otherIncome: {
      total: 13,
      items: [{ id: 'other_income', label: 'Other', value: 13 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 684, notes: ['81% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 257, notes: ['30% margin', '+4pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 187, notes: ['22% margin', '(3pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +14%'],
          items: [{ id: 'revenue', label: '收入', notes: ['同比 +14%'] }],
        },
        costs: {
          costOfRevenue: { label: '平台运营' },
          operatingExpenses: {
            notes: ['销售与营销、技术与开发及一般与行政费用合计为 $428M，源图金额经四舍五入。'],
            items: [
              { id: 'sales_marketing', label: '销售与营销', notes: ['占收入 21%', '同比 +0 个百分点'] },
              { id: 'technology_development', label: '技术与开发', notes: ['占收入 15%', '同比 (2 个百分点)'] },
              { id: 'general_admin', label: '一般与行政', notes: ['占收入 14%', '同比 (3 个百分点)', '包含 CEO 绩效相关的股权激励（$10M）'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 81%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 30%', '同比 +4 个百分点'] },
          net: { label: '净利润', notes: ['利润率 22%', '同比 (3 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'the-trade-desk-q1-fy26',
    company: 'The Trade Desk',
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/the-trade-desk-q1-fy26.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 689,
      notes: ['+12% Y/Y'],
      items: [{ id: 'revenue', label: 'Revenue', value: 689, notes: ['+12% Y/Y'] }],
    },
    costs: {
      costOfRevenue: { id: 'platform_operations', label: 'Platform operations', value: 182 },
      operatingExpenses: {
        total: 440,
        notes: ['Sales & marketing, technology & development, and general & admin add to $439M because source-chart values are rounded.'],
        items: [
          { id: 'sales_marketing', label: 'Sales & marketing', value: 172, notes: ['25% of revenue', '+0pp Y/Y'] },
          { id: 'technology_development', label: 'Technology & development', value: 142, notes: ['21% of revenue', '(1pp) Y/Y'] },
          { id: 'general_admin', label: 'General & admin', value: 125, notes: ['18% of revenue', '(3pp) Y/Y', 'Includes SBC for CEO performance ($5M)'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 39 },
    },
    otherIncome: {
      total: 12,
      items: [{ id: 'other_income', label: 'Other', value: 12 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 507, notes: ['74% margin', '(3pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 67, notes: ['10% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 40, notes: ['6% margin', '(2pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月',
        revenue: {
          notes: ['同比 +12%'],
          items: [{ id: 'revenue', label: '收入', notes: ['同比 +12%'] }],
        },
        costs: {
          costOfRevenue: { label: '平台运营' },
          operatingExpenses: {
            notes: ['销售与营销、技术与开发及一般与行政费用合计为 $439M，源图金额经四舍五入。'],
            items: [
              { id: 'sales_marketing', label: '销售与营销', notes: ['占收入 25%', '同比 +0 个百分点'] },
              { id: 'technology_development', label: '技术与开发', notes: ['占收入 21%', '同比 (1 个百分点)'] },
              { id: 'general_admin', label: '一般与行政', notes: ['占收入 18%', '同比 (3 个百分点)', '包含 CEO 绩效相关的股权激励（$5M）'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 74%', '同比 (3 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 10%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 6%', '同比 (2 个百分点)'] },
        },
      },
    },
  });
})(window);
