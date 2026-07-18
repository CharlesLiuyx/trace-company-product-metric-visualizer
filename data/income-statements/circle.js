/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'circle-q3-fy25',
    company: 'Circle',
    period: 'Q3 FY25',
    periodNote: 'Ending Sep. 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/circle-q3-fy25.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 740,
      notes: ['+66% Y/Y'],
      items: [
        { id: 'reserve_income', label: 'Reserve income', value: 711, notes: ['+60% Y/Y'] },
        { id: 'other_revenue', label: 'Other revenue', value: 29, notes: ['NM'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'distribution_transaction_costs',
        label: 'Distribution and transaction costs',
        value: 448,
      },
      operatingExpenses: {
        total: 211,
        notes: ['Displayed components total $210M because of whole-million rounding.'],
        items: [
          { id: 'compensation', label: 'Compensation', value: 129 },
          { id: 'general_admin', label: 'General & admin', value: 45 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 23 },
          { id: 'it_infrastructure', label: 'IT Infrastructure', value: 9 },
          { id: 'marketing_other', label: 'Marketing & other', value: 4 },
        ],
      },
      tax: {
        label: 'Tax',
        value: 0,
        notes: ['The source chart shows a $61M tax benefit rather than tax expense.'],
      },
    },
    otherIncome: {
      total: 133,
      items: [
        { id: 'tax_benefit', label: 'Tax benefit', value: 61 },
        { id: 'other_income', label: 'Other', value: 72 },
      ],
    },
    otherExpenses: {
      total: 0,
      items: [],
    },
    profit: {
      gross: {
        label: 'Revenue less distribution and transaction costs (derived)',
        value: 292,
        notes: ['Derived as revenue less distribution and transaction costs; this subtotal is not rendered in the source chart.'],
      },
      operating: {
        id: 'operating_profit',
        label: 'Operating profit',
        value: 81,
        notes: ['5% margin', '(0pp) Y/Y'],
      },
      net: {
        id: 'net_profit',
        label: 'Net profit',
        value: 214,
        notes: ['12% margin', '+7pp Y/Y'],
      },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度',
        periodNote: '截至 2025 年 9 月',
        revenue: {
          notes: ['同比 +66%'],
          items: [
            { id: 'reserve_income', label: '储备金收益', notes: ['同比 +60%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比不可比'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '分发与交易成本' },
          operatingExpenses: {
            notes: ['图中展示的营业费用组成因按百万美元取整合计为 $210M。'],
            items: [
              { id: 'compensation', label: '薪酬' },
              { id: 'general_admin', label: '一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
              { id: 'it_infrastructure', label: 'IT 基础设施' },
              { id: 'marketing_other', label: '市场营销及其他' },
            ],
          },
          tax: {
            label: '税费',
            notes: ['来源图展示 $61M 的税收收益，而非税费。'],
          },
        },
        otherIncome: {
          items: [
            { id: 'tax_benefit', label: '税收收益' },
            { id: 'other_income', label: '其他' },
          ],
        },
        profit: {
          gross: { label: '收入扣除分发与交易成本（推导值）', notes: ['由收入减去分发与交易成本推导；该小计未在来源图中绘制。'] },
          operating: { label: '营业利润', notes: ['利润率 5%', '同比（0 个百分点）'] },
          net: { label: '净利润', notes: ['利润率 12%', '同比 +7 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'circle-q4-fy25',
    company: 'Circle',
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/circle-q4-fy25.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 770,
      notes: ['+77% Y/Y'],
      items: [
        { id: 'reserve_income', label: 'Reserve income', value: 733, notes: ['+69% Y/Y'] },
        { id: 'other_revenue', label: 'Other revenue', value: 37, notes: ['+1,435% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'distribution_transaction_costs',
        label: 'Distribution and transaction costs',
        value: 461,
      },
      operatingExpenses: {
        total: 254,
        items: [
          { id: 'compensation', label: 'Compensation', value: 137 },
          { id: 'general_admin', label: 'General & admin', value: 71 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 26 },
          { id: 'it_infrastructure', label: 'IT Infrastructure', value: 11 },
          { id: 'marketing_other', label: 'Marketing & other', value: 10 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 7 },
    },
    otherIncome: {
      total: 85,
      items: [{ id: 'other_income', label: 'Other', value: 85 }],
    },
    otherExpenses: {
      total: 0,
      items: [],
    },
    profit: {
      gross: {
        label: 'Gross profit (derived)',
        value: 309,
        notes: ['Derived as revenue less distribution and transaction costs; this subtotal is not rendered in the source chart.'],
      },
      operating: {
        id: 'operating_profit',
        label: 'Operating profit',
        value: 55,
        notes: ['3% margin', '+3pp Y/Y'],
      },
      net: {
        id: 'net_profit',
        label: 'Net profit',
        value: 133,
        notes: ['8% margin', '+7pp Y/Y'],
      },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +77%'],
          items: [
            { id: 'reserve_income', label: '储备金收益', notes: ['同比 +69%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +1,435%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '分发与交易成本' },
          operatingExpenses: {
            items: [
              { id: 'compensation', label: '薪酬' },
              { id: 'general_admin', label: '一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
              { id: 'it_infrastructure', label: 'IT 基础设施' },
              { id: 'marketing_other', label: '市场营销及其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: {
          items: [{ id: 'other_income', label: '其他' }],
        },
        profit: {
          gross: { label: '毛利润（推导值）', notes: ['由收入减去分发与交易成本推导；该小计未在来源图中绘制。'] },
          operating: { label: '营业利润', notes: ['利润率 3%', '同比 +3 个百分点'] },
          net: { label: '净利润', notes: ['利润率 8%', '同比 +7 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'circle-q1-fy26',
    company: 'Circle',
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/circle-q1-fy26.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 694,
      notes: ['+20% Y/Y'],
      items: [
        { id: 'reserve_income', label: 'Reserve income', value: 652, notes: ['+17% Y/Y'] },
        { id: 'other_revenue', label: 'Other revenue', value: 42, notes: ['+101% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'distribution_transaction_costs',
        label: 'Distribution and transaction costs',
        value: 407,
      },
      operatingExpenses: {
        total: 242,
        items: [
          { id: 'compensation', label: 'Compensation', value: 138 },
          { id: 'general_admin', label: 'General & admin', value: 57 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 27 },
          { id: 'it_infrastructure', label: 'IT Infrastructure', value: 13 },
          { id: 'marketing_other', label: 'Marketing & other', value: 7 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 1 },
    },
    otherIncome: {
      total: 12,
      items: [{ id: 'other_income', label: 'Other', value: 12 }],
    },
    otherExpenses: {
      total: 0,
      items: [],
    },
    profit: {
      gross: {
        label: 'Revenue less distribution and transaction costs (derived)',
        value: 287,
        notes: ['Derived as revenue less distribution and transaction costs; this subtotal is not rendered in the source chart.'],
      },
      operating: {
        id: 'operating_profit',
        label: 'Operating profit',
        value: 45,
        notes: ['3% margin', '(4pp) Y/Y'],
      },
      net: {
        id: 'net_profit',
        label: 'Net profit',
        value: 55,
        notes: ['8% margin', '-15% Y/Y'],
      },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月',
        revenue: {
          notes: ['同比 +20%'],
          items: [
            { id: 'reserve_income', label: '储备金收益', notes: ['同比 +17%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +101%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '分发与交易成本' },
          operatingExpenses: {
            items: [
              { id: 'compensation', label: '薪酬' },
              { id: 'general_admin', label: '一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
              { id: 'it_infrastructure', label: 'IT 基础设施' },
              { id: 'marketing_other', label: '市场营销及其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: {
          items: [{ id: 'other_income', label: '其他' }],
        },
        profit: {
          gross: { label: '收入扣除分发与交易成本（推导值）', notes: ['由收入减去分发与交易成本推导；该小计未在来源图中绘制。'] },
          operating: { label: '营业利润', notes: ['利润率 3%', '同比（4 个百分点）'] },
          net: { label: '净利润', notes: ['利润率 8%', '同比 -15%'] },
        },
      },
    },
  });
})(window);
