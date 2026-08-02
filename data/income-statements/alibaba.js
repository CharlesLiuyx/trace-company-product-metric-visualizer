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
      key: 'alibaba-q1-fy26',
      company: 'Alibaba',
      period: 'Q1 FY26',
      periodNote: 'Ending June 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q1-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 34.6,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'china_ecommerce', label: 'China E-commerce', value: 19.6, notes: ['+10% Y/Y', '27% adjusted margin'] },
          {
            id: 'international_digital_commerce',
            label: 'International Digital Commerce',
            value: 4.9,
            notes: ['+19% Y/Y', '0% adjusted margin'],
          },
          { id: 'cloud', label: 'Cloud', value: 4.7, notes: ['+26% Y/Y', '9% adjusted margin'] },
          { id: 'all_others', label: 'All others', value: 8.3, notes: ['(28%) Y/Y', '(2%) adjusted margin'] },
          { id: 'intersegment_eliminations', label: 'Inter-segment Eliminations', value: -2.7 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 19.0 },
        operatingExpenses: {
          total: 10.6,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 7.4, notes: ['21% of revenue'] },
            { id: 'product_development', label: 'Product development', value: 2.1, notes: ['6% of revenue'] },
            { id: 'ga', label: 'General & Administrative', value: 1.0, notes: ['3% of revenue'] },
            { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 0.1, notes: ['0% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.2 },
      },
      otherIncome: {
        total: 2.3,
        items: [
          { id: 'interest', label: 'Interest', value: 2.1 },
          { id: 'other', label: 'Other', value: 0.2 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 15.5, notes: ['45% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.9, notes: ['14% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.9, notes: ['17% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'china_ecommerce', label: '中国电子商务', notes: ['同比 +10%', '调整后利润率 27%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +19%', '调整后利润率 0%'] },
              { id: 'cloud', label: '云', notes: ['同比 +26%', '调整后利润率 9%'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 (28%)', '调整后利润率 (2%)'] },
              { id: 'intersegment_eliminations', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 21%'] },
                { id: 'product_development', label: '产品开发', notes: ['占收入 6%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 3%'] },
                { id: 'amortization_intangibles', label: '无形资产摊销', notes: ['占收入 0%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'interest', label: '利息收入' },
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 17%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alibaba-q4-fy24',
      company: 'Alibaba',
      period: 'Q4 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 221.9,
        notes: ['+7% Y/Y'],
        items: [
          { id: 'taobao_tmall', label: 'Taobao and Tmall', value: 93.2, notes: ['+4% Y/Y'] },
          { id: 'international_digital_commerce', label: 'International Digital Commerce', value: 27.5, notes: ['+45% Y/Y'] },
          { id: 'local_services', label: 'Local Services', value: 14.6, notes: ['+19% Y/Y'] },
          { id: 'cainiao', label: 'Cainiao', value: 24.6, notes: ['+30% Y/Y'] },
          { id: 'cloud', label: 'Cloud', value: 25.6, notes: ['+3% Y/Y'] },
          { id: 'digital_media', label: 'Digital Media', value: 4.9, notes: ['(1%) Y/Y'] },
          { id: 'all_others', label: 'All others', value: 51.5, notes: ['(3%) Y/Y'] },
          { id: 'adjustments_unallocated', label: 'Adjustments & unallocated', value: -20.0 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 148.1 },
        operatingExpenses: {
          total: 59.0,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 28.8 },
            { id: 'product_development', label: 'Product development', value: 14.1 },
            { id: 'ga', label: 'General & Administrative', value: 14.0 },
            { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 2.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.7 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 8.1,
        items: [{ id: 'interest_investments', label: 'Interest & investments', value: 8.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 73.8, notes: ['33% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 14.8, notes: ['7% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.9, notes: ['0% margin', '(10pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              { id: 'taobao_tmall', label: '淘宝与天猫', notes: ['同比 +4%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +45%'] },
              { id: 'local_services', label: '本地生活服务', notes: ['同比 +19%'] },
              { id: 'cainiao', label: '菜鸟', notes: ['同比 +30%'] },
              { id: 'cloud', label: '云业务', notes: ['同比 +3%'] },
              { id: 'digital_media', label: '数字媒体', notes: ['同比 (1%)'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 (3%)'] },
              { id: 'adjustments_unallocated', label: '调整项与未分配项' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场' },
                { id: 'product_development', label: '产品开发' },
                { id: 'ga', label: '一般及行政' },
                { id: 'amortization_intangibles', label: '无形资产摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest_investments', label: '利息与投资损失' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 33%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 0%', '同比 (10 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'alibaba-q4-fy23',
      company: 'Alibaba',
      period: 'Q4 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 208.2,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'china_commerce', label: 'China commerce', value: 136.1, notes: ['(3%) Y/Y'] },
          { id: 'international_commerce', label: 'International commerce', value: 18.5, notes: ['+29% Y/Y'] },
          { id: 'local_consumer_services', label: 'Local consumer services', value: 12.5, notes: ['+17% Y/Y'] },
          { id: 'cainiao', label: 'Cainiao', value: 13.6, notes: ['+18% Y/Y'] },
          { id: 'cloud', label: 'Cloud', value: 18.6, notes: ['(2%) Y/Y'] },
          { id: 'digital_media', label: 'Digital Media', value: 8.3, notes: ['+3% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.6, notes: ['+47% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 138.8 },
        operatingExpenses: {
          total: 54.1,
          items: [
            { id: 'product_development', label: 'Product development', value: 13.9 },
            { id: 'sm', label: 'Sales & marketing', value: 24.9 },
            { id: 'ga', label: 'General & Administrative', value: 12.8 },
            { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 2.5 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.8 },
      },
      otherIncome: {
        total: 10.6,
        items: [
          { id: 'interest_investments', label: 'Interest & investments', value: 8.8 },
          { id: 'other_income', label: 'Other', value: 1.8 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 69.4, notes: ['33% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 15.2, notes: ['7% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 22.0, notes: ['11% margin', '+20pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'china_commerce', label: '中国商业', notes: ['同比 (3%)'] },
              { id: 'international_commerce', label: '国际商业', notes: ['同比 +29%'] },
              { id: 'local_consumer_services', label: '本地生活服务', notes: ['同比 +17%'] },
              { id: 'cainiao', label: '菜鸟', notes: ['同比 +18%'] },
              { id: 'cloud', label: '云业务', notes: ['同比 (2%)'] },
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +3%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +47%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'product_development', label: '产品开发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'ga', label: '一般及行政' },
                { id: 'amortization_intangibles', label: '无形资产摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'interest_investments', label: '利息及投资' },
              { id: 'other_income', label: '其他收益' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 33%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +20 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alibaba-q3-fy23', company: 'Alibaba', period: 'Q3 FY23', periodNote: 'Ending Dec. 2022',
      currency: 'CNY', unit: 'B', decimals: 1,
      sourceImage: 'input/processed/alibaba-q3-fy23.png', roundingTolerance: 0.15,
      revenue: { total: 247.8, notes: ['+2% Y/Y'], items: [
        { id: 'china_commerce', label: 'China commerce', value: 170.0, notes: ['(1%) Y/Y'] },
        { id: 'international_commerce', label: 'International commerce', value: 19.5, notes: ['+18% Y/Y'] },
        { id: 'local_consumer_services', label: 'Local consumer services', value: 13.2, notes: ['+6% Y/Y'] },
        { id: 'cainiao', label: 'Cainiao', value: 16.6, notes: ['+27% Y/Y'] },
        { id: 'cloud', label: 'Cloud', value: 20.2, notes: ['+3% Y/Y'] },
        { id: 'digital_media', label: 'Digital Media', value: 7.6, notes: ['(6%) Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 0.8, notes: ['(20%) Y/Y'] },
      ] },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 150.0 },
        operatingExpenses: { total: 62.7, items: [
          { id: 'product_development', label: 'Product development', value: 13.5 },
          { id: 'sm', label: 'Sales & marketing', value: 30.6 },
          { id: 'ga', label: 'General & Administrative', value: 10.3 },
          { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 5.5 },
          { id: 'goodwill_impairment', label: 'Goodwill impairment', value: 2.7 },
        ] },
        tax: { id: 'tax', label: 'Tax', value: 3.8 },
      },
      otherIncome: { total: 15.5, items: [{ id: 'interest_investments', label: 'Interest & investments', value: 15.5 }] },
      otherExpenses: { total: 1.0, items: [{ id: 'other_expense', label: 'Other', value: 1.0 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 97.8, notes: ['39% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 35.0, notes: ['14% margin', '+11pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 45.7, notes: ['18% margin', '+11pp Y/Y'] },
      },
      i18n: { zh: {
        period: '2023 财年第三季度', periodNote: '截至 2022 年 12 月',
        revenue: { notes: ['同比 +2%'], items: [
          { id: 'china_commerce', label: '中国商业', notes: ['同比 (1%)'] },
          { id: 'international_commerce', label: '国际商业', notes: ['同比 +18%'] },
          { id: 'local_consumer_services', label: '本地生活服务', notes: ['同比 +6%'] },
          { id: 'cainiao', label: '菜鸟', notes: ['同比 +27%'] }, { id: 'cloud', label: '云', notes: ['同比 +3%'] },
          { id: 'digital_media', label: '数字媒体', notes: ['同比 (6%)'] }, { id: 'other_revenue', label: '其他', notes: ['同比 (20%)'] },
        ] },
        costs: { costOfRevenue: { label: '收入成本' }, operatingExpenses: { items: [
          { id: 'product_development', label: '产品开发' }, { id: 'sm', label: '销售与市场' }, { id: 'ga', label: '一般及行政' },
          { id: 'amortization_intangibles', label: '无形资产摊销' }, { id: 'goodwill_impairment', label: '商誉减值' },
        ] }, tax: { label: '税费' } },
        otherIncome: { items: [{ id: 'interest_investments', label: '利息与投资收益' }] },
        otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 39%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 14%', '同比 +11 个百分点'] },
          net: { label: '净利润', notes: ['利润率 18%', '同比 +11 个百分点'] },
        },
      } },
    },
    {
      key: 'alibaba-q1-fy24', company: 'Alibaba', period: 'Q1 FY24', periodNote: 'Ending June 2023',
      currency: 'RMB', unit: 'B', decimals: 1,
      sourceImage: 'input/processed/alibaba-q1-fy24.png', roundingTolerance: 0.15,
      revenue: {
        total: 234.2, notes: ['+14% Y/Y'],
        items: [
          { id: 'taobao_tmall', label: 'Taobao and Tmall', value: 115.0, notes: ['+12% Y/Y'] },
          { id: 'international_digital_commerce', label: 'International Digital Commerce', value: 22.1, notes: ['+41% Y/Y'] },
          { id: 'local_services', label: 'Local Services', value: 14.5, notes: ['+30% Y/Y'] },
          { id: 'cainiao', label: 'Cainiao', value: 23.1, notes: ['+34% Y/Y'] },
          { id: 'cloud', label: 'Cloud', value: 25.1, notes: ['+4% Y/Y'] },
          { id: 'digital_media', label: 'Digital Media', value: 5.4, notes: ['+36% Y/Y'] },
          { id: 'all_others', label: 'All others', value: 45.5, notes: ['+1% Y/Y'] },
          { id: 'adjustments_unallocated', label: 'Adjustments & unallocated', value: -16.6 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 142.3 },
        operatingExpenses: { total: 49.3, items: [
          { id: 'sm', label: 'Sales & marketing', value: 27.0 },
          { id: 'product_development', label: 'Product development', value: 10.5 },
          { id: 'ga', label: 'General & Administrative', value: 7.3 },
          { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 2.5 },
          { id: 'goodwill_impairment', label: 'Goodwill impairment', value: 2.0 },
        ] },
        tax: { id: 'tax', label: 'Tax', value: 6.0 },
      },
      otherIncome: { total: 4.2, items: [{ id: 'other', label: 'Other', value: 4.2 }] },
      otherExpenses: { total: 7.7, items: [{ id: 'interest_investments', label: 'Interest & investments', value: 7.7 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 91.8, notes: ['39% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 42.5, notes: ['18% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 33.0, notes: ['14% margin', '+4pp Y/Y'] },
      },
      i18n: { zh: {
        period: '2024 财年第一季度', periodNote: '截至 2023 年 6 月',
        revenue: { notes: ['同比 +14%'], items: [
          { id: 'taobao_tmall', label: '淘宝与天猫', notes: ['同比 +12%'] },
          { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +41%'] },
          { id: 'local_services', label: '本地生活服务', notes: ['同比 +30%'] },
          { id: 'cainiao', label: '菜鸟', notes: ['同比 +34%'] },
          { id: 'cloud', label: '云', notes: ['同比 +4%'] },
          { id: 'digital_media', label: '数字媒体', notes: ['同比 +36%'] },
          { id: 'all_others', label: '所有其他业务', notes: ['同比 +1%'] },
          { id: 'adjustments_unallocated', label: '调整及未分配项目' },
        ] },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [
            { id: 'sm', label: '销售与市场' }, { id: 'product_development', label: '产品开发' },
            { id: 'ga', label: '一般及行政' }, { id: 'amortization_intangibles', label: '无形资产摊销' },
            { id: 'goodwill_impairment', label: '商誉减值' },
          ] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other', label: '其他收入' }] },
        otherExpenses: { items: [{ id: 'interest_investments', label: '利息及投资损失' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 39%', '同比 +2 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 18%', '同比 +6 个百分点'] },
          net: { label: '净利润', notes: ['利润率 14%', '同比 +4 个百分点'] },
        },
      } },
    },
    {
      key: 'alibaba-q4-fy25',
      company: 'Alibaba',
      period: 'Q4 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 32.6,
        notes: ['+7% Y/Y'],
        items: [
          { id: 'taobao_tmall', label: 'Taobao and Tmall', value: 14.0, notes: ['+9% Y/Y', '41% adjusted margin'] },
          {
            id: 'international_digital_commerce',
            label: 'International Digital Commerce',
            value: 4.6,
            notes: ['+22% Y/Y', '(11%) adjusted margin'],
          },
          { id: 'cloud', label: 'Cloud', value: 4.2, notes: ['+18% Y/Y', '8% adjusted margin'] },
          { id: 'cainiao', label: 'Cainiao', value: 3.0, notes: ['(12%) Y/Y', '(3%) adjusted margin'] },
          { id: 'local_services', label: 'Local Services', value: 2.2, notes: ['+10% Y/Y', '(14%) adjusted margin'] },
          { id: 'digital_media', label: 'Digital Media', value: 0.8, notes: ['+12% Y/Y', '1% adjusted margin'] },
          { id: 'all_others', label: 'All others', value: 7.4, notes: ['+5% Y/Y', '(5%) adjusted margin'] },
          { id: 'intersegment_eliminations', label: 'Inter-segment Eliminations', value: -3.6 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.1 },
        operatingExpenses: {
          total: 8.6,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 5.0, notes: ['15% of revenue'] },
            { id: 'product_development', label: 'Product development', value: 2.1, notes: ['6% of revenue'] },
            { id: 'ga', label: 'General & Administrative', value: 1.4, notes: ['4% of revenue'] },
            { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 0.1, notes: ['0% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.9 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 1.3,
        items: [{ id: 'other', label: 'Other', value: 1.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.5, notes: ['38% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.9, notes: ['12% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['5% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              { id: 'taobao_tmall', label: '淘宝与天猫', notes: ['同比 +9%', '调整后利润率 41%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +22%', '调整后利润率 (11%)'] },
              { id: 'cloud', label: '云', notes: ['同比 +18%', '调整后利润率 8%'] },
              { id: 'cainiao', label: '菜鸟', notes: ['同比 (12%)', '调整后利润率 (3%)'] },
              { id: 'local_services', label: '本地生活服务', notes: ['同比 +10%', '调整后利润率 (14%)'] },
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +12%', '调整后利润率 1%'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 +5%', '调整后利润率 (5%)'] },
              { id: 'intersegment_eliminations', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 15%'] },
                { id: 'product_development', label: '产品开发', notes: ['占收入 6%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 4%'] },
                { id: 'amortization_intangibles', label: '无形资产摊销', notes: ['占收入 0%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 38%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alibaba-q2-fy24', company: 'Alibaba', period: 'Q2 FY24', periodNote: 'Ending Sept. 2023',
      currency: 'RMB', unit: 'B', decimals: 1,
      sourceImage: 'input/processed/alibaba-q2-fy24.png', roundingTolerance: 0.15,
      revenue: {
        total: 224.8, notes: ['+9% Y/Y'],
        items: [
          { id: 'taobao_tmall', label: 'Taobao and Tmall', value: 97.7, notes: ['+4% Y/Y'] },
          { id: 'international_digital_commerce', label: 'International Digital Commerce', value: 24.5, notes: ['+53% Y/Y'] },
          { id: 'local_services', label: 'Local Services', value: 15.6, notes: ['+16% Y/Y'] },
          { id: 'cainiao', label: 'Cainiao', value: 22.8, notes: ['+25% Y/Y'] },
          { id: 'cloud', label: 'Cloud', value: 27.6, notes: ['+2% Y/Y'] },
          { id: 'digital_media', label: 'Digital Media', value: 5.8, notes: ['+11% Y/Y'] },
          { id: 'all_others', label: 'All others', value: 48.1, notes: ['+0% Y/Y'] },
          { id: 'adjustments_unallocated', label: 'Adjustments & unallocated', value: -17.3 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 139.7 },
        operatingExpenses: {
          total: 51.5,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 25.5 },
            { id: 'product_development', label: 'Product development', value: 14.2 },
            { id: 'ga', label: 'General & Administrative', value: 9.4 },
            { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 2.4 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.8 },
      },
      otherIncome: { total: 3.3, items: [{ id: 'other_income', label: 'Other', value: 3.3 }] },
      otherExpenses: { total: 4.4, items: [{ id: 'interest_investments', label: 'Interest & investments', value: 4.4 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 85.1, notes: ['38% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 33.6, notes: ['15% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 26.7, notes: ['12% margin', '+23pp Y/Y'] },
      },
      i18n: { zh: {
        period: '2024 财年第二季度', periodNote: '截至 2023 年 9 月',
        revenue: { notes: ['同比 +9%'], items: [
          { id: 'taobao_tmall', label: '淘宝与天猫', notes: ['同比 +4%'] },
          { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +53%'] },
          { id: 'local_services', label: '本地生活服务', notes: ['同比 +16%'] },
          { id: 'cainiao', label: '菜鸟', notes: ['同比 +25%'] },
          { id: 'cloud', label: '云', notes: ['同比 +2%'] },
          { id: 'digital_media', label: '数字媒体', notes: ['同比 +11%'] },
          { id: 'all_others', label: '所有其他业务', notes: ['同比 +0%'] },
          { id: 'adjustments_unallocated', label: '调整及未分配项目' },
        ] },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [
            { id: 'sm', label: '销售与市场' }, { id: 'product_development', label: '产品开发' },
            { id: 'ga', label: '一般及行政' }, { id: 'amortization_intangibles', label: '无形资产摊销' },
          ] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他收益' }] },
        otherExpenses: { items: [{ id: 'interest_investments', label: '利息及投资损失' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 38%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 15%', '同比 +3 个百分点'] },
          net: { label: '净利润', notes: ['利润率 12%', '同比 +23 个百分点'] },
        },
      } },
    },
    {
      key: 'alibaba-q1-fy25',
      company: 'Alibaba',
      period: 'Q1 FY25',
      periodNote: 'Ending Jun. 2024',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 243.2,
        notes: ['+4% Y/Y'],
        items: [
          { id: 'taobao_tmall', label: 'Taobao and Tmall', value: 113.4, notes: ['+1% Y/Y', '43% adjusted margin'] },
          { id: 'international_digital_commerce', label: 'International Digital Commerce', value: 29.3, notes: ['+32% Y/Y', '(13%) adjusted margin'] },
          { id: 'local_services', label: 'Local Services', value: 16.2, notes: ['+12% Y/Y', '(2%) adjusted margin'] },
          { id: 'cainiao', label: 'Cainiao', value: 26.8, notes: ['+16% Y/Y', '2% adjusted margin'] },
          { id: 'cloud', label: 'Cloud', value: 26.5, notes: ['+6% Y/Y', '9% adjusted margin'] },
          { id: 'digital_media', label: 'Digital Media', value: 5.6, notes: ['+4% Y/Y', '(2%) adjusted margin'] },
          { id: 'all_others', label: 'All others', value: 47.0, notes: ['+3% Y/Y', '(3%) adjusted margin'] },
          { id: 'adjustments_unallocated', label: 'Adjustments & unallocated', value: -21.6 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 146.1 },
        operatingExpenses: {
          total: 61.1,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 32.7 },
            { id: 'product_development', label: 'Product development', value: 13.4 },
            { id: 'ga', label: 'General & Administrative', value: 13.3 },
            { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 1.8 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 10.1 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 1.9, items: [{ id: 'other', label: 'Other', value: 1.9 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 97.1, notes: ['40% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 36.0, notes: ['15% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 24.0, notes: ['10% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              { id: 'taobao_tmall', label: '淘宝和天猫', notes: ['同比 +1%', '调整后利润率 43%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +32%', '调整后利润率 (13%)'] },
              { id: 'local_services', label: '本地生活服务', notes: ['同比 +12%', '调整后利润率 (2%)'] },
              { id: 'cainiao', label: '菜鸟', notes: ['同比 +16%', '调整后利润率 2%'] },
              { id: 'cloud', label: '云', notes: ['同比 +6%', '调整后利润率 9%'] },
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +4%', '调整后利润率 (2%)'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 +3%', '调整后利润率 (3%)'] },
              { id: 'adjustments_unallocated', label: '调整及未分配项目' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场' },
                { id: 'product_development', label: '产品开发' },
                { id: 'ga', label: '一般及行政' },
                { id: 'amortization_intangibles', label: '无形资产摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'alibaba-q2-fy23',
      company: 'Alibaba',
      period: 'Q2 FY23',
      periodNote: 'Ending Sept. 2022',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 207.2,
        notes: ['+3% Y/Y'],
        items: [
          { id: 'china_commerce', label: 'China commerce', value: 135.4, notes: ['(1%) Y/Y'] },
          { id: 'international_commerce', label: 'International commerce', value: 15.7, notes: ['+4% Y/Y'] },
          { id: 'local_consumer_services', label: 'Local consumer services', value: 13.1, notes: ['+21% Y/Y'] },
          { id: 'cainiao', label: 'Cainiao', value: 13.4, notes: ['+36% Y/Y'] },
          { id: 'cloud', label: 'Cloud', value: 20.8, notes: ['+4% Y/Y'] },
          { id: 'digital_media', label: 'Digital Media', value: 8.4, notes: ['+4% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.4, notes: ['(45%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 131.2 },
        operatingExpenses: {
          total: 50.8,
          items: [
            { id: 'product_development', label: 'Product & development', value: 15.2 },
            { id: 'sales_general_admin', label: 'Sales, general & admin', value: 22.4 },
            { id: 'general_admin', label: 'General & admin', value: 10.6 },
            { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 2.7 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.6 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 45.0,
        items: [
          { id: 'interest_investments', label: 'Interest & investments', value: 43.8 },
          { id: 'other_expense', label: 'Other', value: 1.2 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 76.0, notes: ['37% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 25.1, notes: ['12% margin', '+5pp Y/Y'] },
        net: { id: 'net_loss', label: 'Net loss', value: -22.5 },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              { id: 'china_commerce', label: '中国商业', notes: ['同比 (1%)'] },
              { id: 'international_commerce', label: '国际商业', notes: ['同比 +4%'] },
              { id: 'local_consumer_services', label: '本地生活服务', notes: ['同比 +21%'] },
              { id: 'cainiao', label: '菜鸟', notes: ['同比 +36%'] },
              { id: 'cloud', label: '云业务', notes: ['同比 +4%'] },
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +4%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (45%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'product_development', label: '产品与研发' },
                { id: 'sales_general_admin', label: '销售、一般及行政' },
                { id: 'general_admin', label: '一般及行政' },
                { id: 'amortization_intangibles', label: '无形资产摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'interest_investments', label: '利息及投资损失' },
              { id: 'other_expense', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 37%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
            net: { label: '净亏损' },
          },
        },
      },
    },
    {
      key: 'alibaba-q3-fy24',
      company: 'Alibaba',
      period: 'Q3 FY24',
      periodNote: 'Ending Dec. 2023',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 260.3,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'taobao_tmall', label: 'Taobao and Tmall', value: 129.1, notes: ['+2% Y/Y'] },
          {
            id: 'international_digital_commerce',
            label: 'International Digital Commerce',
            value: 28.5,
            notes: ['+44% Y/Y'],
          },
          { id: 'local_services', label: 'Local Services', value: 15.2, notes: ['+13% Y/Y'] },
          { id: 'cainiao', label: 'Cainiao', value: 28.5, notes: ['+24% Y/Y'] },
          { id: 'cloud', label: 'Cloud', value: 28.1, notes: ['+3% Y/Y'] },
          { id: 'digital_media', label: 'Digital Media', value: 5.0, notes: ['+18% Y/Y'] },
          { id: 'all_others', label: 'All Others', value: 47.0, notes: ['(7%) Y/Y'] },
          { id: 'adjustments_unallocated', label: 'Adjustments & unallocated', value: -21.0 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 156.2 },
        operatingExpenses: {
          total: 81.6,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 33.7 },
            { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 23.1 },
            { id: 'product_development', label: 'Product development', value: 13.4 },
            { id: 'ga', label: 'General & Administrative', value: 11.4 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.0 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other', label: 'Other', value: 0.4 }],
      },
      otherExpenses: {
        total: 7.2,
        items: [{ id: 'interest_investments', label: 'Interest & investments', value: 7.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 104.1, notes: ['40% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 22.5, notes: ['9% margin', '(5pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 10.7, notes: ['4% margin', '(14pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'taobao_tmall', label: '淘宝和天猫', notes: ['同比 +2%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +44%'] },
              { id: 'local_services', label: '本地生活服务', notes: ['同比 +13%'] },
              { id: 'cainiao', label: '菜鸟', notes: ['同比 +24%'] },
              { id: 'cloud', label: '云', notes: ['同比 +3%'] },
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +18%'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 (7%)'] },
              { id: 'adjustments_unallocated', label: '调整及未分配项目' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场' },
                { id: 'amortization_intangibles', label: '无形资产摊销' },
                { id: 'product_development', label: '产品开发' },
                { id: 'ga', label: '一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他收益' }] },
          otherExpenses: { items: [{ id: 'interest_investments', label: '利息及投资损失' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 (5 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 4%', '同比 (14 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'alibaba-q2-fy25',
      company: 'Alibaba',
      period: 'Q2 FY25',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 33.7,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'taobao_tmall', label: 'Taobao and Tmall', value: 14.1, notes: ['+1% Y/Y', '45% adjusted margin'] },
          { id: 'international_digital_commerce', label: 'International Digital Commerce', value: 4.5, notes: ['+29% Y/Y', '(9%) adjusted margin'] },
          { id: 'local_services', label: 'Local Services', value: 2.5, notes: ['+14% Y/Y', '(2%) adjusted margin'] },
          { id: 'cainiao', label: 'Cainiao', value: 3.5, notes: ['+8% Y/Y', '0% adjusted margin'] },
          { id: 'cloud', label: 'Cloud', value: 4.2, notes: ['+7% Y/Y', '9% adjusted margin'] },
          { id: 'digital_media', label: 'Digital Media', value: 0.8, notes: ['(1%) Y/Y', '(3%) adjusted margin'] },
          { id: 'all_others', label: 'All others', value: 7.5, notes: ['+9% Y/Y', '(3%) adjusted margin'] },
          { id: 'intersegment_eliminations', label: 'Inter-segment Eliminations', value: -3.5 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.5 },
        operatingExpenses: {
          total: 8.3,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 4.6 },
            { id: 'product_development', label: 'Product development', value: 2.0 },
            { id: 'ga', label: 'General & Administrative', value: 1.4 },
            { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.1 },
      },
      otherIncome: {
        total: 2.2,
        items: [{ id: 'other', label: 'Other', value: 2.2 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 13.2, notes: ['39% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 5.0, notes: ['15% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.2, notes: ['18% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'taobao_tmall', label: '淘宝与天猫', notes: ['同比 +1%', '调整后利润率 45%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +29%', '调整后利润率 (9%)'] },
              { id: 'local_services', label: '本地生活服务', notes: ['同比 +14%', '调整后利润率 (2%)'] },
              { id: 'cainiao', label: '菜鸟', notes: ['同比 +8%', '调整后利润率 0%'] },
              { id: 'cloud', label: '云', notes: ['同比 +7%', '调整后利润率 9%'] },
              { id: 'digital_media', label: '数字媒体', notes: ['同比 (1%)', '调整后利润率 (3%)'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 +9%', '调整后利润率 (3%)'] },
              { id: 'intersegment_eliminations', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场' },
                { id: 'product_development', label: '产品开发' },
                { id: 'ga', label: '一般及行政' },
                { id: 'amortization_intangibles', label: '无形资产摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 18%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alibaba-q2-fy26',
      company: 'Alibaba',
      period: 'Q2 FY26',
      periodNote: 'Ending Sept. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 34.8,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'china_ecommerce', label: 'China E-commerce', value: 18.6, notes: ['+16% Y/Y', '8% adjusted margin'] },
          {
            id: 'international_digital_commerce',
            label: 'International Digital Commerce',
            value: 4.9,
            notes: ['+10% Y/Y', '0% adjusted margin'],
          },
          { id: 'cloud', label: 'Cloud', value: 5.6, notes: ['+34% Y/Y', '(8%) adjusted margin'] },
          { id: 'all_others', label: 'All others', value: 8.9, notes: ['(25%) Y/Y', '(2%) adjusted margin'] },
          { id: 'intersegment_eliminations', label: 'Inter-segment Eliminations', value: -3.2 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 21.2 },
        operatingExpenses: {
          total: 12.9,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 9.3, notes: ['27% of revenue', '+13pp Y/Y'] },
            { id: 'product_development', label: 'Product development', value: 2.4, notes: ['7% of revenue'] },
            { id: 'ga', label: 'General & Administrative', value: 1.0, notes: ['3% of revenue'] },
            { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 0.1, notes: ['0% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: {
        total: 2.9,
        items: [{ id: 'investments', label: 'Investments', value: 2.9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 13.6, notes: ['39% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.8, notes: ['2% margin', '(13pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.9, notes: ['8% margin', '(10pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'china_ecommerce', label: '中国电子商务', notes: ['同比 +16%', '调整后利润率 8%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +10%', '调整后利润率 0%'] },
              { id: 'cloud', label: '云', notes: ['同比 +34%', '调整后利润率 (8%)'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 (25%)', '调整后利润率 (2%)'] },
              { id: 'intersegment_eliminations', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 27%', '同比 +13 个百分点'] },
                { id: 'product_development', label: '产品开发', notes: ['占收入 7%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 3%'] },
                { id: 'amortization_intangibles', label: '无形资产摊销', notes: ['占收入 0%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'investments', label: '投资收益' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 (13 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 (10 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'alibaba-q3-fy26',
      company: 'Alibaba',
      period: 'Q3 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 40.7,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'china_ecommerce', label: 'China E-commerce', value: 22.8, notes: ['+6% Y/Y', '22% adjusted margin'] },
          {
            id: 'international_digital_commerce',
            label: 'International Digital Commerce',
            value: 5.6,
            notes: ['+4% Y/Y', '(5%) adjusted margin'],
          },
          { id: 'cloud', label: 'Cloud', value: 6.2, notes: ['+36% Y/Y', '9% adjusted margin'] },
          { id: 'all_others', label: 'All others', value: 9.6, notes: ['(25%) Y/Y', '(14%) adjusted margin'] },
          { id: 'intersegment_eliminations', label: 'Inter-segment Eliminations', value: -3.6 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 24.2 },
        operatingExpenses: {
          total: 15.0,
          notes: [
            'Source chart labels gross operating expenses as $15.2B and shows Other $0.2B as an operating offset before operating profit.',
          ],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 10.3, notes: ['25% of revenue', '+12pp Y/Y'] },
            { id: 'product_development', label: 'Product development', value: 2.2, notes: ['5% of revenue'] },
            { id: 'amortization_impairment', label: 'Amortization & impairment', value: 1.5, notes: ['3% of revenue'] },
            { id: 'ga', label: 'General & Administrative', value: 1.2, notes: ['3% of revenue'] },
            { id: 'other_operating_income', label: 'Other operating income', value: -0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.2 },
      },
      otherIncome: {
        total: 1.9,
        items: [{ id: 'investments', label: 'Investments', value: 1.9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 16.5, notes: ['40% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.5, notes: ['4% margin', '(11pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['5% margin', '(11pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'china_ecommerce', label: '中国电子商务', notes: ['同比 +6%', '调整后利润率 22%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +4%', '调整后利润率 (5%)'] },
              { id: 'cloud', label: '云', notes: ['同比 +36%', '调整后利润率 9%'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 (25%)', '调整后利润率 (14%)'] },
              { id: 'intersegment_eliminations', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['源图将总运营费用标为 152 亿美元，并将其他 2 亿美元作为营业利润前的抵减项。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 25%', '同比 +12 个百分点'] },
                { id: 'product_development', label: '产品开发', notes: ['占收入 5%'] },
                { id: 'amortization_impairment', label: '摊销与减值', notes: ['占收入 3%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 3%'] },
                { id: 'other_operating_income', label: '其他营业收入' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'investments', label: '投资收益' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (11 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (11 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'alibaba-q4-fy26',
      company: 'Alibaba',
      period: 'Q4 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 35.3,
        notes: ['+3% Y/Y'],
        items: [
          { id: 'china_ecommerce', label: 'China E-commerce', value: 17.7, notes: ['+6% Y/Y', '20% adjusted margin'] },
          {
            id: 'international_digital_commerce',
            label: 'International Digital Commerce',
            value: 5.1,
            notes: ['+6% Y/Y', '(0%) adjusted margin'],
          },
          { id: 'cloud', label: 'Cloud', value: 6.0, notes: ['+38% Y/Y', '9% adjusted margin'] },
          { id: 'all_others', label: 'All others', value: 9.6, notes: ['(21%) Y/Y', '(33%) adjusted margin'] },
          { id: 'intersegment_eliminations', label: 'Inter-segment Eliminations', value: -3.2 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 23.1 },
        operatingExpenses: {
          total: 12.3,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 7.7, notes: ['22% of revenue', '+7pp Y/Y'] },
            { id: 'product_development', label: 'Product development', value: 2.7, notes: ['8% of revenue'] },
            { id: 'ga', label: 'General & Administrative', value: 1.4, notes: ['4% of revenue'] },
            { id: 'amortization_impairment', label: 'Amortization & impairment', value: 0.4, notes: ['1% of revenue'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.2, notes: ['35% margin', '(7pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.1, notes: ['(0%) margin', '+12pp Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -0.1 },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              { id: 'china_ecommerce', label: '中国电子商务', notes: ['同比 +6%', '调整后利润率 20%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +6%', '调整后利润率 (0%)'] },
              { id: 'cloud', label: '云', notes: ['同比 +38%', '调整后利润率 9%'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 (21%)', '调整后利润率 (33%)'] },
              { id: 'intersegment_eliminations', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 22%', '同比 +7 个百分点'] },
                { id: 'product_development', label: '产品开发', notes: ['占收入 8%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 4%'] },
                { id: 'amortization_impairment', label: '摊销与减值', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 35%', '同比 (7 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (0%)', '同比 +12 个百分点'] },
            net: { label: '营业亏损' },
          },
        },
      },
    },
    {
      key: 'alibaba-q3-fy25',
      company: 'Alibaba',
      period: 'Q3 FY25',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q3-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 38.4,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'taobao_tmall', label: 'Taobao and Tmall', value: 18.6, notes: ['+5% Y/Y', '45% adjusted margin'] },
          {
            id: 'international_digital_commerce',
            label: 'International Digital Commerce',
            value: 5.2,
            notes: ['+32% Y/Y', '(13%) adjusted margin'],
          },
          { id: 'cloud', label: 'Cloud', value: 4.3, notes: ['+13% Y/Y', '10% adjusted margin'] },
          { id: 'cainiao', label: 'Cainiao', value: 3.9, notes: ['(1%) Y/Y', '1% adjusted margin'] },
          { id: 'local_services', label: 'Local Services', value: 2.3, notes: ['+12% Y/Y', '(4%) adjusted margin'] },
          { id: 'digital_media', label: 'Digital Media', value: 0.7, notes: ['+8% Y/Y', '(6%) adjusted margin'] },
          { id: 'all_others', label: 'All others', value: 7.4, notes: ['+13% Y/Y', '(6%) adjusted margin'] },
          { id: 'intersegment_eliminations', label: 'Inter-segment Eliminations', value: -4.1 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 22.3 },
        operatingExpenses: {
          total: 10.5,
          notes: ['Source line items sum to $10.4B; the displayed operating-expense total is $10.5B after source rounding.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 5.8 },
            { id: 'product_development', label: 'Product development', value: 2.0 },
            { id: 'ga', label: 'General & Administrative', value: 1.5 },
            { id: 'goodwill_impairment', label: 'Goodwill impairment', value: 0.8 },
            { id: 'amortization_intangibles', label: 'Amortization of intangibles', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.5 },
      },
      otherIncome: {
        total: 2.2,
        items: [{ id: 'other_income', label: 'Other', value: 2.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 16.1, notes: ['42% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 5.6, notes: ['15% margin', '+6pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 6.1,
          notes: ['17% margin', '+12pp Y/Y', 'Displayed source components reconcile within $0.2B rounding tolerance.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'taobao_tmall', label: '淘宝与天猫', notes: ['同比 +5%', '调整后利润率 45%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +32%', '调整后利润率 (13%)'] },
              { id: 'cloud', label: '云', notes: ['同比 +13%', '调整后利润率 10%'] },
              { id: 'cainiao', label: '菜鸟', notes: ['同比 (1%)', '调整后利润率 1%'] },
              { id: 'local_services', label: '本地生活', notes: ['同比 +12%', '调整后利润率 (4%)'] },
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +8%', '调整后利润率 (6%)'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 +13%', '调整后利润率 (6%)'] },
              { id: 'intersegment_eliminations', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源分项合计 104 亿美元；源图四舍五入后的运营费用总额为 105 亿美元。'],
              items: [
                { id: 'sm', label: '销售与市场' },
                { id: 'product_development', label: '产品开发' },
                { id: 'ga', label: '一般及行政' },
                { id: 'goodwill_impairment', label: '商誉减值' },
                { id: 'amortization_intangibles', label: '无形资产摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他收益' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 42%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 17%', '同比 +12 个百分点', '源图展示的组成项在 2 亿美元四舍五入容差内对账。'] },
          },
        },
      },
    }
  );
})(window);
