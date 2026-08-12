/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'mcdonald-s-q1-fy24',
    company: "McDonald's",
    period: 'Q1 FY24',
    periodNote: 'Ending Mar. 2024',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/mcdonald-s-q1-fy24.png',
    roundingTolerance: 0.12,
    revenue: {
      total: 6.2,
      notes: ['+5% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.4, notes: ['+12% Y/Y', '14% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 3.7, notes: ['+4% Y/Y', '83% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.1, notes: ['+6% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 2.7 },
      operatingExpenses: {
        total: 0.7,
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.6 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.5 },
    },
    operatingOtherIncome: {
      total: 0.017,
      notes: ['Source chart reports this operating-stage Other item as $17M.'],
      items: [{ id: 'operating_other_income', label: 'Other operating', value: 0.017, notes: ['$17M'] }],
    },
    otherIncome: {
      total: 0.045,
      notes: ['Source chart reports this non-operating item as $45M.'],
      items: [{ id: 'non_operating', label: 'Non-operating', value: 0.045, notes: ['$45M'] }],
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.4, notes: ['56% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 2.7, notes: ['44% margin', '+1 pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['31% margin', '+1pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2024 财年第一季度',
        periodNote: '截至 2024 年 3 月',
        revenue: {
          notes: ['同比 +5%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 +12%', '毛利率 14%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +4%', '毛利率 83%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +6%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        operatingOtherIncome: {
          notes: ['来源图将该营业环节“其他”项目披露为 1700 万美元。'],
          items: [{ id: 'operating_other_income', label: '其他营业收入', notes: ['1700 万美元'] }],
        },
        otherIncome: {
          notes: ['来源图将该非营业项目披露为 4500 万美元。'],
          items: [{ id: 'non_operating', label: '非营业项目', notes: ['4500 万美元'] }],
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 56%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 44%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 31%', '同比 +1 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q4-fy24',
    company: "McDonald's",
    period: 'Q4 FY24',
    periodNote: 'Ending Dec. 2024',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/mcdonald-s-q4-fy24.png',
    roundingTolerance: 0.12,
    revenue: {
      total: 6.4,
      notes: ['(0%) Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.3, notes: ['(7%) Y/Y', '14% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 4.0, notes: ['+2% Y/Y', '83% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.1, notes: ['+89% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 2.7 },
      operatingExpenses: {
        total: 0.8,
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.7 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.5 },
    },
    otherIncome: {
      total: 0.049,
      notes: ['Source chart reports this non-operating Other item as $49M.'],
      items: [{ id: 'other_income', label: 'Other', value: 0.049, notes: ['$49M'] }],
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.7, notes: ['58% margin', '+1pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 2.9, notes: ['45% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['32% margin', '(0pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2024 财年第四季度',
        periodNote: '截至 2024 年 12 月',
        revenue: {
          notes: ['同比 (0%)'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 (7%)', '毛利率 14%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +2%', '毛利率 83%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +89%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: {
          notes: ['来源图将该非营业“其他”项目披露为 4900 万美元。'],
          items: [{ id: 'other_income', label: '其他', notes: ['4900 万美元'] }],
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 58%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 45%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 32%', '同比 (0 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q2-fy24',
    company: "McDonald's",
    period: 'Q2 FY24',
    periodNote: 'Ending Jun. 2024',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/mcdonald-s-q2-fy24.png',
    roundingTolerance: 0.12,
    revenue: {
      total: 6.5,
      notes: ['(0%) Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.5, notes: ['(1%) Y/Y', '15% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 3.9, notes: ['+0% Y/Y', '84% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.1, notes: ['+16% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 2.8 },
      operatingExpenses: {
        total: 0.8,
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.6 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
          { id: 'other_operating_expense', label: 'Other', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.5 },
    },
    otherIncome: {
      total: 0.009,
      notes: ['Source chart reports this non-operating Other income as $9M.'],
      items: [{ id: 'other_income', label: 'Other', value: 0.009, notes: ['$9M'] }],
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.7, notes: ['57% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 2.9, notes: ['45% margin', '(3pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['31% margin', '(4pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2024 财年第二季度',
        periodNote: '截至 2024 年 6 月',
        revenue: {
          notes: ['同比 (0%)'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 (1%)', '毛利率 15%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +0%', '毛利率 84%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +16%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
              { id: 'other_operating_expense', label: '其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: {
          notes: ['来源图将该非营业“其他”收入披露为 900 万美元。'],
          items: [{ id: 'other_income', label: '其他', notes: ['900 万美元'] }],
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 57%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 45%', '同比 (3 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 31%', '同比 (4 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q1-fy25',
    company: "McDonald's",
    period: 'Q1 FY25',
    periodNote: 'Ending Mar. 2025',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/mcdonald-s-q1-fy25.png',
    roundingTolerance: 0.12,
    revenue: {
      total: 6.0,
      notes: ['(3%) Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.1, notes: ['(9%) Y/Y', '13% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 3.7, notes: ['(2%) Y/Y', '83% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.2, notes: ['+78% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 2.6 },
      operatingExpenses: {
        total: 0.7,
        notes: ['Source chart rounds the $0.6B, $0.1B, and $7M components to a displayed $0.7B total.'],
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.6 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
          { id: 'other_opex', label: 'Other', value: 0.007, notes: ['$7M'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.5 },
    },
    otherIncome: {
      total: 0.1,
      items: [{ id: 'operating_other_income', label: 'Other', value: 0.1 }],
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.3, notes: ['56% margin', '+0pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 2.6, notes: ['44% margin', '+0pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['31% margin', '+0pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第一季度',
        periodNote: '截至 2025 年 3 月',
        revenue: {
          notes: ['同比 (3%)'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 (9%)', '毛利率 13%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 (2%)', '毛利率 83%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +78%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            notes: ['来源图将 $0.6B、$0.1B 和 $7M 三个分项四舍五入为 $0.7B 总额。'],
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
              { id: 'other_opex', label: '其他', notes: ['700 万美元'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'operating_other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 56%', '同比 +0 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 44%', '同比 +0 个百分点'] },
          net: { label: '净利润', notes: ['利润率 31%', '同比 +0 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q2-fy25',
    company: "McDonald's",
    period: 'Q2 FY25',
    periodNote: 'Ending Jun. 2025',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/mcdonald-s-q2-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 6.8,
      notes: ['+5% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.5, notes: ['(0%) Y/Y', '15% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 4.2, notes: ['+7% Y/Y', '84% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.2, notes: ['+93% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 2.9 },
      operatingExpenses: {
        total: 0.7,
        notes: ['Source chart reports a $29M Other operating-expense flow in addition to the rounded $0.6B and $0.1B items.'],
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.6 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
          { id: 'other_operating_expense', label: 'Other', value: 0.029, notes: ['$29M'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.6 },
    },
    operatingOtherIncome: {
      total: 0.018,
      notes: ['Source chart reports this operating-stage Other item as $18M.'],
      items: [{ id: 'operating_other_income', label: 'Other', value: 0.018, notes: ['$18M'] }],
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 4.0, notes: ['58% margin', '+1pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.2, notes: ['47% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['33% margin', '+2pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第二季度',
        periodNote: '截至 2025 年 6 月',
        revenue: {
          notes: ['同比 +5%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 (0%)', '毛利率 15%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +7%', '毛利率 84%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +93%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            notes: ['来源图除四舍五入显示的 6 亿美元和 1 亿美元项目外，还披露了 2900 万美元的其他运营费用流。'],
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
              { id: 'other_operating_expense', label: '其他', notes: ['2900 万美元'] },
            ],
          },
          tax: { label: '税费' },
        },
        operatingOtherIncome: {
          notes: ['来源图将该营业环节“其他”项目披露为 1800 万美元。'],
          items: [{ id: 'operating_other_income', label: '其他', notes: ['1800 万美元'] }],
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 58%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 47%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 33%', '同比 +2 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q3-fy24',
    company: "McDonald's",
    period: 'Q3 FY24',
    periodNote: 'Ending Sep. 2024',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/mcdonald-s-q3-fy24.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 6.9,
      notes: ['+3% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.7, notes: ['+4% Y/Y', '15% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 4.1, notes: ['+1% Y/Y', '84% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.1, notes: ['+39% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 3.0 },
      operatingExpenses: {
        total: 0.7,
        notes: ['Source chart rounds the three displayed operating-expense items to $0.7B in total.'],
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.5 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
          { id: 'other_operating_expense', label: 'Other', value: 0.039, notes: ['$39M'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.6 },
    },
    otherIncome: {
      total: 0.036,
      notes: ['Source chart reports this non-operating Other income item as $36M.'],
      items: [{ id: 'other_income', label: 'Other', value: 0.036, notes: ['$36M'] }],
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.9, notes: ['56% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.1, notes: ['46% margin', '(2pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['33% margin', '(2pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2024 财年第三季度',
        periodNote: '截至 2024 年 9 月',
        revenue: {
          notes: ['同比 +3%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 +4%', '毛利率 15%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +1%', '毛利率 84%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +39%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            notes: ['来源图中三项运营费用按四舍五入合计为 7 亿美元。'],
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
              { id: 'other_operating_expense', label: '其他', notes: ['3900 万美元'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: {
          notes: ['来源图将该非经营性“其他”收入披露为 3600 万美元。'],
          items: [{ id: 'other_income', label: '其他', notes: ['3600 万美元'] }],
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 56%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 46%', '同比 (2 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 33%', '同比 (2 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q4-fy22',
    company: "McDonald's",
    period: 'Q4 FY22',
    periodNote: 'Ending Dec. 2022',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/mcdonald-s-q4-fy22.png',
    roundingTolerance: 0.12,
    revenue: {
      total: 5.9,
      notes: ['(1%) Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.2, notes: ['(13%) Y/Y', '15% operating margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 3.6, notes: ['+7% Y/Y', '84% operating margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.1, notes: ['(7%) Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 2.5 },
      operatingExpenses: {
        total: 0.8,
        notes: ['Source chart rounds the shown operating-expense total to $0.8B; displayed components sum to $0.815B.'],
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.7 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
          { id: 'other_opex', label: 'Other opex', value: 0.015, notes: ['$15M'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.4 },
    },
    otherIncome: {
      total: 0.1,
      items: [{ id: 'non_operating_income', label: 'Non-operating', value: 0.1 }],
    },
    otherExpenses: {
      total: 0.3,
      items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.4, notes: ['58% margin', '+3pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 2.6, notes: ['44% margin', '+3pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['32% margin', '+5pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2022 财年第四季度',
        periodNote: '截至 2022 年 12 月',
        revenue: {
          notes: ['同比 (1%)'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 (13%)', '营业利润率 15%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +7%', '营业利润率 84%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 (7%)', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            notes: ['来源图将列示的运营费用总额四舍五入为 8 亿美元；列示组件合计为 8.15 亿美元。'],
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
              { id: 'other_opex', label: '其他运营费用', notes: ['1500 万美元'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'non_operating_income', label: '非营业收入' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 58%', '同比 +3 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 44%', '同比 +3 个百分点'] },
          net: { label: '净利润', notes: ['利润率 32%', '同比 +5 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q1-fy23',
    company: "McDonald's",
    period: 'Q1 FY23',
    periodNote: 'Ending Mar. 2023',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/mcdonald-s-q1-fy23.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 5.9,
      notes: ['+4% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.2, notes: ['(3%) Y/Y'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 3.6, notes: ['+10% Y/Y'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.1, notes: ['(14%) Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 2.6 },
      operatingExpenses: {
        total: 0.8,
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.6 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
          { id: 'other_opex', label: 'Other opex', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.5 },
    },
    otherIncome: {
      total: 0.1,
      items: [{ id: 'non_operating_income', label: 'Non-operating', value: 0.1 }],
    },
    otherExpenses: {
      total: 0.3,
      items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.3, notes: ['56% margin', '+2pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 2.5, notes: ['43% margin', '+4pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.8, notes: ['31% margin', '+11pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2023 财年第一季度',
        periodNote: '截至 2023 年 3 月',
        revenue: {
          notes: ['同比 +4%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 (3%)'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +10%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 (14%)', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
              { id: 'other_opex', label: '其他运营费用' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'non_operating_income', label: '非营业收入' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 56%', '同比 +2 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 43%', '同比 +4 个百分点'] },
          net: { label: '净利润', notes: ['利润率 31%', '同比 +11 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q3-fy23',
    company: "McDonald's",
    period: 'Q3 FY23',
    periodNote: 'Ending Sep. 2023',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/mcdonald-s-q3-fy23.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 6.7,
      notes: ['+14% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.6, notes: ['+20% Y/Y', '16% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 4.0, notes: ['+10% Y/Y', '85% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.1, notes: ['+17% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 2.8 },
      operatingExpenses: {
        total: 0.6,
        notes: ['Source chart rounds the shown operating-expense total to $0.6B; displayed components sum to $0.7B.'],
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.6 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.6 },
    },
    otherIncome: {
      total: 0.1,
      items: [{ id: 'non_operating_income', label: 'Non-operating', value: 0.1 }],
    },
    otherExpenses: {
      total: 0.3,
      items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.9, notes: ['58% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.2, notes: ['48% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['35% margin', '+1pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2023 财年第三季度',
        periodNote: '截至 2023 年 9 月',
        revenue: {
          notes: ['同比 +14%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 +20%', '毛利率 16%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +10%', '毛利率 85%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +17%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            notes: ['来源图将列示的运营费用总额四舍五入为 6 亿美元；列示组件合计为 7 亿美元。'],
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'non_operating_income', label: '非营业收入' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 58%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 48%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q4-fy23',
    company: "McDonald's",
    period: 'Q4 FY23',
    periodNote: 'Ending Dec. 2023',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/mcdonald-s-q4-fy23.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 6.4,
      notes: ['+8% Y/Y', 'Source chart rounds the displayed revenue components to one decimal place.'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.5, notes: ['+12% Y/Y', '16% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 3.9, notes: ['+6% Y/Y', '84% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.1, notes: ['(12%) Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 2.8 },
      operatingExpenses: {
        total: 0.9,
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.8 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.5 },
    },
    otherIncome: {
      total: 0.1,
      items: [{ id: 'non_operating_income', label: 'Non-operating', value: 0.1 }],
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.7, notes: ['57% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 2.8, notes: ['44% margin', '+0pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['32% margin', '(0pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2023 财年第四季度',
        periodNote: '截至 2023 年 12 月',
        revenue: {
          notes: ['同比 +8%', '来源图将列示的收入组件按一位小数四舍五入。'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 +12%', '毛利率 16%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +6%', '毛利率 84%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 (12%)', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'non_operating_income', label: '非营业收入' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 57%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 44%', '同比 +0 个百分点'] },
          net: { label: '净利润', notes: ['利润率 32%', '同比 (0 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q3-fy25',
    company: "McDonald's",
    period: 'Q3 FY25',
    periodNote: 'Ending Sep. 2025',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/mcdonald-s-q3-fy25.png',
    roundingTolerance: 0.12,
    revenue: {
      total: 7.1,
      notes: ['+3% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.6, notes: ['(4%) Y/Y', '15% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 4.4, notes: ['+7% Y/Y', '85% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.2, notes: ['+22% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 3.0 },
      operatingExpenses: {
        total: 0.8,
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.7 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.7 },
    },
    operatingOtherIncome: {
      total: 0.037,
      notes: ['Source chart reports this operating-stage Other item as $37M.'],
      items: [{ id: 'operating_other_income', label: 'Other', value: 0.037, notes: ['$37M'] }],
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 4.1, notes: ['58% margin', '+2pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.4, notes: ['47% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['32% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度',
        periodNote: '截至 2025 年 9 月',
        revenue: {
          notes: ['同比 +3%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 (4%)', '毛利率 15%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +7%', '毛利率 85%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +22%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        operatingOtherIncome: {
          notes: ['来源图将该营业环节“其他”项目披露为 3700 万美元。'],
          items: [{ id: 'operating_other_income', label: '其他', notes: ['3700 万美元'] }],
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 58%', '同比 +2 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 47%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 32%', '同比 (1 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q4-fy25',
    company: "McDonald's",
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/mcdonald-s-q4-fy25.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 7.0,
      notes: ['+10% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.5, notes: ['+10% Y/Y', '15% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 4.3, notes: ['+9% Y/Y', '84% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.2, notes: ['+35% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 3.0 },
      operatingExpenses: {
        total: 0.9,
        notes: ['Source chart rounds the shown Other SG&A and depreciation & amortization items to $0.8B.'],
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.7 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.6 },
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 4.0, notes: ['58% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.2, notes: ['45% margin', '+0pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['31% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +10%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 +10%', '毛利率 15%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +9%', '毛利率 84%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +35%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            notes: ['来源图中“其他 SG&A”与“折旧及摊销”按四舍五入合计为 $0.8B。'],
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 58%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 45%', '同比 +0 个百分点'] },
          net: { label: '净利润', notes: ['利润率 31%', '同比 (1 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q1-fy26',
    company: "McDonald's",
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/mcdonald-s-q1-fy26.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 6.5,
      notes: ['+9% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.3, notes: ['+9% Y/Y', '15% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 4.0, notes: ['+9% Y/Y', '85% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.2, notes: ['+19% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 2.9 },
      operatingExpenses: {
        total: 0.8,
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.7 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.6 },
    },
    operatingOtherIncome: {
      total: 0.1,
      notes: ['Source chart rounds intermediate operating values to one decimal place.'],
      items: [{ id: 'operating_other_income', label: 'Other', value: 0.1 }],
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.6, notes: ['56% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.0, notes: ['45% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['30% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月',
        revenue: {
          notes: ['同比 +9%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 +9%', '毛利率 15%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +9%', '毛利率 85%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +19%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        operatingOtherIncome: {
          notes: ['来源图将营业环节中间值按一位小数四舍五入。'],
          items: [{ id: 'operating_other_income', label: '其他' }],
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 56%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 45%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 30%', '同比 (1 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'mcdonald-s-q2-fy23',
    company: "McDonald's",
    period: 'Q2 FY23',
    periodNote: 'Ending Jun. 2023',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/mcdonald-s-q2-fy23.png',
    roundingTolerance: 0.12,
    revenue: {
      total: 6.5,
      notes: ['+14% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.5, notes: ['+18% Y/Y'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 3.9, notes: ['+12% Y/Y'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.1, notes: ['(2%) Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 2.8 },
      operatingExpenses: {
        total: 0.6,
        notes: ['The source chart rounds Other SG&A and depreciation & amortization to $0.7B in aggregate while showing operating expenses as $0.6B.'],
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.6 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.5 },
    },
    otherIncome: {
      total: 0.043,
      items: [{ id: 'non_operating', label: 'Non-operating', value: 0.043, valueText: '$43M' }],
    },
    otherExpenses: {
      total: 0.3,
      items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.7, notes: ['57% margin', '+0pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.1, notes: ['48% margin', '+21pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['36% margin', '+15pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2023 财年第二季度',
        periodNote: '截至 2023 年 6 月',
        revenue: {
          notes: ['同比 +14%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 +18%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +12%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 (2%)', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            notes: ['来源图中“其他 SG&A”与“折旧及摊销”按四舍五入合计为 7 亿美元，而营业费用显示为 6 亿美元。'],
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'non_operating', label: '非经营性收益' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 57%', '同比 +0 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 48%', '同比 +21 个百分点'] },
          net: { label: '净利润', notes: ['利润率 36%', '同比 +15 个百分点'] },
        },
      },
    },
  });
})(window);
