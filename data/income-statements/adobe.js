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
      key: 'adobe-q2-fy24', company: 'Adobe', period: 'Q2 FY24', periodNote: 'Ending May 2024',
      currency: '$', unit: 'B', decimals: 3,
      sourceImage: 'input/processed/adobe-q2-fy24.png', roundingTolerance: 0.1,
      revenue: {
        total: 5.3, notes: ['+10% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 3.9, notes: ['+11% Y/Y', '95% gross margin'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.3, notes: ['+9% Y/Y', '70% gross margin'] },
          { id: 'publishing_advertising', label: 'Publishing & Advertising', value: 0.1, notes: ['(11%) Y/Y', '70% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 2.8,
          notes: ['Visible operating-expense line items sum to $2.842B because the source chart rounds the total.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.4, notes: ['27% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 1.0, notes: ['18% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 0.4, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.042, valueText: '$42M' },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: { total: 0.045, items: [{ id: 'other_income', label: 'Other', value: 0.045, valueText: '$45M' }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.7, notes: ['89% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.9, notes: ['36% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['30% margin', '+3pp Y/Y'] },
      },
      i18n: { zh: {
        period: '2024 财年第二季度', periodNote: '截至 2024 年 5 月',
        revenue: { notes: ['同比 +10%'], items: [
          { id: 'digital_media', label: '数字媒体', notes: ['同比 +11%', '毛利率 95%'] },
          { id: 'digital_experience', label: '数字体验', notes: ['同比 +9%', '毛利率 70%'] },
          { id: 'publishing_advertising', label: '出版与广告', notes: ['同比 (11%)', '毛利率 70%'] },
        ] },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['可见营业费用明细合计为 $2.842B，因为来源图表总额经过取整。'],
            items: [
              { id: 'sm', label: '销售与市场', notes: ['占收入 27%', '同比 (1 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 +0 个百分点'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 7%', '同比 (1 个百分点)'] },
              { id: 'amortization', label: '摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 89%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 36%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 30%', '同比 +3 个百分点'] },
        },
      } },
    },
    {
      key: 'adobe-q4-fy24', company: 'Adobe', period: 'Q4 FY24', periodNote: 'Ending Nov. 2024',
      currency: '$', unit: 'B', decimals: 3,
      sourceImage: 'input/processed/adobe-q4-fy24.png', roundingTolerance: 0.1,
      revenue: {
        total: 5.6, notes: ['+11% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 4.1, notes: ['+12% Y/Y', '95% gross margin'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.4, notes: ['+10% Y/Y', '71% gross margin'] },
          { id: 'publishing_advertising', label: 'Publishing & Advertising', value: 0.1, notes: ['(2%) Y/Y', '65% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 3.0, notes: ['Visible operating-expense line items sum to $3.042B because the source chart rounds the total.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.5, notes: ['27% of revenue', '+0pp Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 1.0, notes: ['18% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 0.5, notes: ['8% of revenue', '+1pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.042 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: { total: 0.034, items: [{ id: 'other_income', label: 'Other', value: 0.034 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.0, notes: ['89% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.0, notes: ['35% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['30% margin', '+1pp Y/Y'] },
      },
      i18n: { zh: {
        period: '2024 财年第四季度', periodNote: '截至 2024 年 11 月',
        revenue: { notes: ['同比 +11%'], items: [
          { id: 'digital_media', label: '数字媒体', notes: ['同比 +12%', '毛利率 95%'] },
          { id: 'digital_experience', label: '数字体验', notes: ['同比 +10%', '毛利率 71%'] },
          { id: 'publishing_advertising', label: '出版与广告', notes: ['同比 (2%)', '毛利率 65%'] },
        ] },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['可见营业费用明细合计为 $3.042B，因为来源图表总额经过取整。'],
            items: [
              { id: 'sm', label: '销售与市场', notes: ['占收入 27%', '同比 +0 个百分点'] },
              { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 +0 个百分点'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 8%', '同比 +1 个百分点'] },
              { id: 'amortization', label: '摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 89%', '同比 +2 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 35%', '同比 +0 个百分点'] },
          net: { label: '净利润', notes: ['利润率 30%', '同比 +1 个百分点'] },
        },
      } },
    },
    {
      key: 'adobe-q1-fy23',
      company: 'Adobe',
      period: 'Q1 FY23',
      periodNote: 'Ending Feb. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adobe-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 4.7,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 3.4, notes: ['+9% Y/Y', '96% gross margin'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.2, notes: ['+11% Y/Y', '66% gross margin'] },
          { id: 'publishing_advertising', label: 'Publishing & Advertising', value: 0.1, notes: ['(12%) Y/Y', '74% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 2.5,
          notes: ['Visible operating-expense line items sum to $2.442B because the source chart rounds the total.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.3, notes: ['28% of revenue'] },
            { id: 'rnd', label: 'Research & development', value: 0.8, notes: ['18% of revenue'] },
            { id: 'ga', label: 'General & admin', value: 0.3, notes: ['7% of revenue'] },
            { id: 'amortization', label: 'Amortization', value: 0.042, valueText: '$42M', notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.012,
        items: [{ id: 'other_income', label: 'Other', value: 0.012, valueText: '$12M' }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.1, notes: ['88% margin', 'Unchanged'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.6, notes: ['34% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['27% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度', periodNote: '截至 2023 年 2 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +9%', '毛利率 96%'] },
              { id: 'digital_experience', label: '数字体验', notes: ['同比 +11%', '毛利率 66%'] },
              { id: 'publishing_advertising', label: '出版与广告', notes: ['同比 (12%)', '毛利率 74%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $2.442B，因为来源图表的总额经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 28%'] }, { id: 'rnd', label: '研发', notes: ['占收入 18%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 7%'] }, { id: 'amortization', label: '摊销', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 88%', '同比持平'] },
            operating: { label: '营业利润', notes: ['利润率 34%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 27%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'adobe-q1-fy25',
      company: 'Adobe',
      period: 'Q1 FY25',
      periodNote: 'Ending Feb. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adobe-q1-fy25.png',
      roundingTolerance: 0.1,
      revenue: {
        total: 5.7,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 4.2, notes: ['+11% Y/Y', '95% gross margin'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.4, notes: ['+10% Y/Y', '72% gross margin'] },
          { id: 'publishing_advertising', label: 'Publishing & Advertising', value: 0.1 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 2.9,
          notes: ['Visible operating-expense line items sum to $2.941B because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.5, notes: ['26% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 1.0, notes: ['18% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 0.4, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.041 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: { total: 0.019, items: [{ id: 'other_income', label: 'Other', value: 0.019 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.1, notes: ['89% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.2, notes: ['38% margin', '+20pp Y/Y*'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.8, notes: ['32% margin', '+20pp Y/Y*'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度', periodNote: '截至 2025 年 2 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +11%', '毛利率 95%'] },
              { id: 'digital_experience', label: '数字体验', notes: ['同比 +10%', '毛利率 72%'] },
              { id: 'publishing_advertising', label: '出版与广告' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $2.941B，因为来源图表数值经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 26%', '同比 (0 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'amortization', label: '摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收益' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 89%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 38%', '同比 +20 个百分点*'] },
            net: { label: '净利润', notes: ['利润率 32%', '同比 +20 个百分点*'] },
          },
        },
      },
    },
    {
      key: 'adobe-q2-fy23',
      company: 'Adobe',
      period: 'Q2 FY23',
      periodNote: 'Ending May 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adobe-q2-fy23.png',
      roundingTolerance: 0.11,
      revenue: {
        total: 4.8,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 3.5, notes: ['+10% Y/Y', '96% gross margin'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.2, notes: ['+12% Y/Y', '67% gross margin'] },
          { id: 'publishing_advertising', label: 'Publishing & Advertising', value: 0.1, notes: ['(9%) Y/Y', '75% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 2.6,
          notes: ['Visible operating-expense line items sum to $2.642B because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.3, notes: ['28% of revenue'] },
            { id: 'rnd', label: 'Research & development', value: 0.9, notes: ['18% of revenue'] },
            { id: 'ga', label: 'General & admin', value: 0.4, notes: ['7% of revenue'] },
            { id: 'amortization', label: 'Amortization', value: 0.042, notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.026,
        items: [{ id: 'other_income', label: 'Other', value: 0.026 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.2, notes: ['88% margin', 'Flat Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.6, notes: ['34% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.3, notes: ['27% margin', 'Flat Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 5 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +10%', '毛利率 96%'] },
              { id: 'digital_experience', label: '数字体验', notes: ['同比 +12%', '毛利率 67%'] },
              { id: 'publishing_advertising', label: '出版与广告', notes: ['同比 (9%)', '毛利率 75%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $2.642B，因为来源图表数值经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 28%'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 7%'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 88%', '同比持平'] },
            operating: { label: '营业利润', notes: ['利润率 34%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 27%', '同比持平'] },
          },
        },
      },
    },
    {
      key: 'adobe-q4-fy23',
      company: 'Adobe',
      period: 'Q4 FY23',
      periodNote: 'Ending Nov. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adobe-q4-fy23.png',
      roundingTolerance: 0.11,
      revenue: {
        total: 5.0,
        notes: ['+12% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 3.7, notes: ['+13% Y/Y', '94% gross margin'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.3, notes: ['+10% Y/Y', '68% gross margin'] },
          { id: 'publishing_advertising', label: 'Publishing & Advertising', value: 0.1, notes: ['(12%) Y/Y', '68% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 2.7,
          notes: ['Visible operating-expense line items sum to $2.742B because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.4, notes: ['27% of revenue'] },
            { id: 'rnd', label: 'Research & development', value: 0.9, notes: ['18% of revenue'] },
            { id: 'ga', label: 'General & admin', value: 0.4, notes: ['7% of revenue'] },
            { id: 'amortization', label: 'Amortization', value: 0.042, notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.4, notes: ['87% margin', 'Flat Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.7, notes: ['35% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.5, notes: ['29% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 11 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +13%', '毛利率 94%'] },
              { id: 'digital_experience', label: '数字体验', notes: ['同比 +10%', '毛利率 68%'] },
              { id: 'publishing_advertising', label: '出版与广告', notes: ['同比 (12%)', '毛利率 68%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $2.742B，因为来源图表数值经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 27%'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 7%'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 87%', '同比持平'] },
            operating: { label: '营业利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 29%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'adobe-q1-fy24',
      company: 'Adobe',
      period: 'Q1 FY24',
      periodNote: 'Ending Feb. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adobe-q1-fy24.png',
      roundingTolerance: 0.11,
      revenue: {
        total: 5.2,
        notes: ['+11% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 3.8, notes: ['+12% Y/Y', '96% gross margin'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.3, notes: ['+10% Y/Y', '69% gross margin'] },
          { id: 'publishing_advertising', label: 'Publishing & Advertising', value: 0.1, notes: ['(8%) Y/Y', '71% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 3.7,
          notes: ['Visible operating-expense line items sum to $3.742B because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.4, notes: ['26% of revenue'] },
            { id: 'termination', label: 'Termination', value: 1.0, notes: ['19% of revenue'] },
            { id: 'rnd', label: 'Research & development', value: 0.9, notes: ['18% of revenue'] },
            { id: 'ga', label: 'General & admin', value: 0.4, notes: ['7% of revenue'] },
            { id: 'amortization', label: 'Amortization', value: 0.042 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      operatingOtherIncome: { total: 0, items: [] },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0.1, items: [{ id: 'other_income', label: 'Other', value: 0.1 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.6, notes: ['89% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.9, notes: ['18% margin', '(17pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.6, notes: ['12% margin', '(15pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 2 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +12%', '毛利率 96%'] },
              { id: 'digital_experience', label: '数字体验', notes: ['同比 +10%', '毛利率 69%'] },
              { id: 'publishing_advertising', label: '出版与广告', notes: ['同比 (8%)', '毛利率 71%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $3.742B，因为来源图表数值经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 26%'] },
                { id: 'termination', label: '离职补偿', notes: ['占收入 19%'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 7%'] },
                { id: 'amortization', label: '摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收益' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 89%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 (17 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 (15 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'adobe-q3-fy24',
      company: 'Adobe',
      period: 'Q3 FY24',
      periodNote: 'Ending August 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adobe-q3-fy24.png',
      roundingTolerance: 0.11,
      revenue: {
        total: 5.4,
        notes: ['+11% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 4.0, notes: ['+11% Y/Y', '97% gross margin'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.4, notes: ['+10% Y/Y', '71% gross margin'] },
          { id: 'publishing_advertising', label: 'Publishing & Advertising', value: 0.1, notes: ['(12%) Y/Y', '63% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 2.9,
          notes: ['Visible operating-expense line items sum to $2.843B because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.4, notes: ['26% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 1.0, notes: ['19% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 0.4, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.043 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      operatingOtherIncome: { total: 0, items: [] },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0.05, items: [{ id: 'other_income', label: 'Other', value: 0.05 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.9, notes: ['90% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.0, notes: ['37% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['31% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 8 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +11%', '毛利率 97%'] },
              { id: 'digital_experience', label: '数字体验', notes: ['同比 +10%', '毛利率 71%'] },
              { id: 'publishing_advertising', label: '出版与广告', notes: ['同比 (12%)', '毛利率 63%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $2.843B，因为来源图表数值经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 26%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 19%', '同比 +1 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 7%', '同比 (0 个百分点)'] },
                { id: 'amortization', label: '摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 90%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 37%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 31%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'adobe-q2-fy25',
      company: 'Adobe',
      period: 'Q2 FY25',
      periodNote: 'Ending May 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adobe-q2-fy25.png',
      roundingTolerance: 0.11,
      revenue: {
        total: 5.9,
        notes: ['+11% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 4.3, notes: ['+11% Y/Y', '95% gross margin'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.5, notes: ['+10% Y/Y', '72% gross margin'] },
          { id: 'publishing_advertising', label: 'Publishing & Advertising', value: 0.1 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 3.1,
          notes: ['Visible operating-expense line items sum to $3.141B because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.6, notes: ['29% of revenue', '+0pp Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 1.1, notes: ['18% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 0.4, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.041 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.2, notes: ['89% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.1, notes: ['36% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['29% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 5 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +11%', '毛利率 95%'] },
              { id: 'digital_experience', label: '数字体验', notes: ['同比 +10%', '毛利率 72%'] },
              { id: 'publishing_advertising', label: '出版与广告' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $3.141B，因为来源图表数值经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 29%', '同比 +0 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'amortization', label: '摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 89%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 36%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 29%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'adobe-q1-fy26',
      company: 'Adobe',
      period: 'Q1 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/adobe-q1-fy26.png',
      roundingTolerance: 0.1,
      revenue: {
        total: 6.4,
        notes: ['+12% Y/Y'],
        items: [
          { id: 'creative_marketing', label: 'Creative & Marketing Professionals', value: 4.4, notes: ['+12% Y/Y'] },
          { id: 'business_consumers', label: 'Business Professionals & Consumers', value: 1.8, notes: ['+16% Y/Y'] },
          { id: 'other', label: 'Other', value: 0.2 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.7 },
        operatingExpenses: {
          total: 3.3,
          notes: ['Visible operating-expense line items sum to $3.335B because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.7, notes: ['27% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 1.1, notes: ['17% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 0.5, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.035 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.7, notes: ['90% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.4, notes: ['38% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['30% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 2 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { id: 'creative_marketing', label: '创意与营销专业人士', notes: ['同比 +12%'] },
              { id: 'business_consumers', label: '企业专业人士与消费者', notes: ['同比 +16%'] },
              { id: 'other', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $3.335B，因为来源图表数值经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 27%', '同比 (0 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 17%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'amortization', label: '摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 90%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 38%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'adobe-q2-fy26',
      company: 'Adobe',
      period: 'Q2 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/adobe-q2-fy26.png',
      roundingTolerance: 0.1,
      revenue: {
        total: 6.6,
        notes: ['+13% Y/Y'],
        items: [
          { id: 'creative_marketing', label: 'Creative & Marketing Professionals', value: 4.5, notes: ['+13% Y/Y'] },
          { id: 'business_consumers', label: 'Business Professionals & Consumers', value: 1.9, notes: ['+16% Y/Y'] },
          { id: 'other', label: 'Other', value: 0.2 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.7 },
        operatingExpenses: {
          total: 3.7,
          notes: ['Visible operating-expense line items sum to $3.637B because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.9, notes: ['28% of revenue', '+2pp Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 1.2, notes: ['18% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 0.5, notes: ['8% of revenue', '+0pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.037 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.9, notes: ['89% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.2, notes: ['34% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['26% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 5 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'creative_marketing', label: '创意与营销专业人士', notes: ['同比 +13%'] },
              { id: 'business_consumers', label: '企业专业人士与消费者', notes: ['同比 +16%'] },
              { id: 'other', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $3.637B，因为来源图表数值经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 28%', '同比 +2 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 +1 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 8%', '同比 +0 个百分点'] },
                { id: 'amortization', label: '摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 89%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 34%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'adobe-q4-fy22',
      company: 'Adobe',
      period: 'Q4 FY22',
      periodNote: 'Ending November 2022',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adobe-q4-fy22.png',
      roundingTolerance: 0.11,
      revenue: {
        total: 4.5,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 3.3, notes: ['+10% Y/Y', '95% gross margin'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.2, notes: ['+14% Y/Y', '66% gross margin'] },
          { id: 'publishing', label: 'Publishing & Advertising', value: 0.1, notes: ['(18%) Y/Y', '64% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 2.5,
          notes: ['Visible operating-expense line items sum to $2.442B because the source chart rounds the total.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.3, notes: ['29% of revenue'] },
            { id: 'rnd', label: 'Research & development', value: 0.8, notes: ['17% of revenue'] },
            { id: 'ga', label: 'General & admin', value: 0.3, notes: ['8% of revenue'] },
            { id: 'amortization', label: 'Amortization', value: 0.042, notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.012,
        items: [{ id: 'other_income', label: 'Other', value: 0.012 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.0, notes: ['88% margin', 'Unchanged'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.5, notes: ['33% margin', '(4pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['26% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 11 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +10%', '毛利率 95%'] },
              { id: 'digital_experience', label: '数字体验', notes: ['同比 +14%', '毛利率 66%'] },
              { id: 'publishing', label: '出版与广告', notes: ['同比 (18%)', '毛利率 64%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $2.442B，因为来源图表的总额经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 29%'] },
                { id: 'rnd', label: '研发', notes: ['占收入 17%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 8%'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 88%', '同比持平'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 (4 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'adobe-q4-fy25',
      company: 'Adobe',
      period: 'Q4 FY25',
      periodNote: 'Ending Nov. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adobe-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 6.2,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 4.6, notes: ['+12% Y/Y'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.5, notes: ['+6% Y/Y'] },
          { id: 'publishing_advertising', label: 'Publishing & Advertising', value: 0.1 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 3.3,
          notes: ['Visible operating-expense line items sum to $3.237B because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.7, notes: ['28% of revenue', '+0pp Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 1.1, notes: ['18% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 0.4, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.037 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.5, notes: ['90% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['37% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['30% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 11 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +12%'] },
              { id: 'digital_experience', label: '数字体验', notes: ['同比 +6%'] },
              { id: 'publishing_advertising', label: '出版与广告' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $3.237B，因为来源图表数值经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 28%', '同比 +0 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'amortization', label: '摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 90%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 37%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 (0 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'adobe-q3-fy25',
      company: 'Adobe',
      period: 'Q3 FY25',
      periodNote: 'Ending Aug. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adobe-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 6.0,
        notes: ['+11% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 4.5, notes: ['+12% Y/Y'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.5, notes: ['+9% Y/Y'] },
          {
            id: 'publishing_advertising',
            label: 'Publishing & Advertising',
            value: 0.053,
            notes: ['The source chart rounds this value to $0.0B; Adobe Q3 FY25 Form 10-Q reports $53M.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 3.2,
          notes: ['Visible operating-expense line items sum to $3.138B because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.6, notes: ['27% of revenue', '+1pp Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 1.1, notes: ['18% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 0.4, notes: ['7% of revenue', '+0pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.038 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.3, notes: ['89% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.2, notes: ['36% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.8, notes: ['30% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 8 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +12%'] },
              { id: 'digital_experience', label: '数字体验', notes: ['同比 +9%'] },
              {
                id: 'publishing_advertising',
                label: '出版与广告',
                notes: ['来源图表将该值四舍五入显示为 $0.0B；Adobe 2025 财年第三季度 Form 10-Q 披露为 $53M。'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $3.138B，因为来源图表数值经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 27%', '同比 +1 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 7%', '同比 +0 个百分点'] },
                { id: 'amortization', label: '摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 89%', '同比持平'] },
            operating: { label: '营业利润', notes: ['利润率 36%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'adobe-q3-fy23',
      company: 'Adobe',
      period: 'Q3 FY23',
      periodNote: 'Ending Aug. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adobe-q3-fy23.png',
      roundingTolerance: 0.11,
      revenue: {
        total: 4.9,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'digital_media', label: 'Digital Media', value: 3.6, notes: ['+11% Y/Y', '96% gross margin'] },
          { id: 'digital_experience', label: 'Digital Experience', value: 1.2, notes: ['+10% Y/Y', '68% gross margin'] },
          { id: 'publishing_advertising', label: 'Publishing & Advertising', value: 0.1, notes: ['(17%) Y/Y', '67% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 2.6,
          notes: ['Visible operating-expense line items sum to $2.642B because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.3, notes: ['27% of revenue'] },
            { id: 'rnd', label: 'Research & development', value: 0.9, notes: ['18% of revenue'] },
            { id: 'ga', label: 'General & admin', value: 0.4, notes: ['7% of revenue'] },
            { id: 'amortization', label: 'Amortization', value: 0.042, notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.046,
        items: [{ id: 'other_income', label: 'Other', value: 0.046 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.3, notes: ['88% margin', 'Flat Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.7, notes: ['35% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.4, notes: ['29% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 8 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'digital_media', label: '数字媒体', notes: ['同比 +11%', '毛利率 96%'] },
              { id: 'digital_experience', label: '数字体验', notes: ['同比 +10%', '毛利率 68%'] },
              { id: 'publishing_advertising', label: '出版与广告', notes: ['同比 (17%)', '毛利率 67%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $2.642B，因为来源图表数值经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 27%'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 7%'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 88%', '同比持平'] },
            operating: { label: '营业利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 29%', '同比 (4 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
