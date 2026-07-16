/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'fortinet-q3-fy25',
    company: 'Fortinet',
    period: 'Q3 FY25',
    periodNote: 'Ending Sep. 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/fortinet-q3-fy25.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 1725,
      notes: ['+14% Y/Y'],
      items: [
        { id: 'product', label: 'Products', value: 559, notes: ['+18% Y/Y', '68% gross margin'] },
        { id: 'service', label: 'Service', value: 1166, notes: ['+13% Y/Y', '87% gross margin'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 332 },
      operatingExpenses: {
        total: 846,
        notes: ['S&M, R&D, and G&A add to $847M because the source-chart values are rounded; $1M of operating other income offsets the displayed total.'],
        items: [
          { id: 'sm', label: 'S&M', value: 584, notes: ['34% of revenue', '(0pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 202, notes: ['12% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 61, notes: ['4% of revenue', '(1pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 121 },
    },
    operatingOtherIncome: {
      total: 1,
      items: [{ id: 'other_income', label: 'Other income', value: 1 }],
    },
    otherIncome: {
      total: 48,
      items: [
        { id: 'interest', label: 'Interest', value: 35 },
        { id: 'other', label: 'Other', value: 13 },
      ],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 1393, notes: ['81% margin', '(2pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 547, notes: ['32% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 474, notes: ['27% margin', '(8pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度',
        periodNote: '截至 2025 年 9 月',
        revenue: {
          notes: ['同比 +14%'],
          items: [
            { id: 'product', label: '产品', notes: ['同比 +18%', '毛利率 68%'] },
            { id: 'service', label: '服务', notes: ['同比 +13%', '毛利率 87%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['销售与营销、研发和一般及行政费用合计为 $847M，源图金额经四舍五入；$1M 其他营业收入抵减了展示总额。'],
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 34%', '同比 (0 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 (1 个百分点)'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 4%', '同比 (1 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        operatingOtherIncome: {
          items: [{ id: 'other_income', label: '其他收入' }],
        },
        otherIncome: {
          items: [
            { id: 'interest', label: '利息' },
            { id: 'other', label: '其他' },
          ],
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 81%', '同比 (2 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 27%', '同比 (8 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'fortinet-q1-fy26',
    company: 'Fortinet',
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/fortinet-q1-fy26.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 1850,
      notes: ['+20% Y/Y'],
      items: [
        { id: 'product', label: 'Products', value: 645, notes: ['+41% Y/Y', '68% gross margin'] },
        { id: 'service', label: 'Service', value: 1205, notes: ['+11% Y/Y', '87% gross margin'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 365 },
      operatingExpenses: {
        total: 905,
        notes: ['S&M, R&D, and G&A add to $906M because the source-chart values are rounded; $1M of operating other income offsets the displayed total.'],
        items: [
          { id: 'sm', label: 'S&M', value: 636, notes: ['34% of revenue', '(1pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 214, notes: ['12% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 56, notes: ['3% of revenue', '(1pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 122 },
    },
    operatingOtherIncome: {
      total: 1,
      items: [{ id: 'other_income', label: 'Other income', value: 1 }],
    },
    otherIncome: {
      total: 77,
      items: [{ id: 'other', label: 'Other', value: 77 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 1485, notes: ['80% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 580, notes: ['31% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 535, notes: ['29% margin', '+1pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月',
        revenue: {
          notes: ['同比 +20%'],
          items: [
            { id: 'product', label: '产品', notes: ['同比 +41%', '毛利率 68%'] },
            { id: 'service', label: '服务', notes: ['同比 +11%', '毛利率 87%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['销售与营销、研发和一般及行政费用合计为 $906M，源图金额经四舍五入；$1M 其他营业收入抵减了展示总额。'],
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 34%', '同比 (1 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 (1 个百分点)'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 3%', '同比 (1 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        operatingOtherIncome: {
          items: [{ id: 'other_income', label: '其他收入' }],
        },
        otherIncome: {
          items: [{ id: 'other', label: '其他' }],
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 80%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 31%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 29%', '同比 +1 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'fortinet-q4-fy25',
    company: 'Fortinet',
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/fortinet-q4-fy25.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 1905,
      notes: ['+15% Y/Y'],
      items: [
        { id: 'product', label: 'Product', value: 691, notes: ['+20% Y/Y', '67% gross margin'] },
        { id: 'service', label: 'Service', value: 1214, notes: ['+12% Y/Y', '87% gross margin'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 389 },
      operatingExpenses: {
        total: 890,
        notes: ['S&M, R&D, and G&A add to $891M because the source-chart values are rounded.'],
        items: [
          { id: 'sm', label: 'S&M', value: 629, notes: ['33% of revenue', '+1pp Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 205, notes: ['11% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 57, notes: ['3% of revenue', '(0pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 145 },
    },
    operatingOtherIncome: {
      total: 1,
      items: [{ id: 'other_income', label: 'Other income', value: 1 }],
    },
    otherIncome: {
      total: 28,
      items: [{ id: 'interest', label: 'Interest', value: 28 }],
    },
    otherExpenses: {
      total: 3,
      items: [{ id: 'other', label: 'Other', value: 3 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 1516, notes: ['80% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 626, notes: ['33% margin', '(2pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 506, notes: ['27% margin', '(5pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +15%'],
          items: [
            { id: 'product', label: '产品', notes: ['同比 +20%', '毛利率 67%'] },
            { id: 'service', label: '服务', notes: ['同比 +12%', '毛利率 87%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['销售与营销、研发和一般及行政费用合计为 $891M，源图金额经四舍五入。'],
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 33%', '同比 +1 个百分点'] },
              { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 3%', '同比 (0 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        operatingOtherIncome: {
          items: [{ id: 'other_income', label: '其他收入' }],
        },
        otherIncome: {
          items: [{ id: 'interest', label: '利息' }],
        },
        otherExpenses: {
          items: [{ id: 'other', label: '其他' }],
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 80%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 33%', '同比 (2 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 27%', '同比 (5 个百分点)'] },
        },
      },
    },
  });
})(window);
