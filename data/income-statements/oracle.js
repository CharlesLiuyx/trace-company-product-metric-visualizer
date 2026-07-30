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
      key: 'oracle-q4-fy24',
      company: 'Oracle',
      period: 'Q4 FY24',
      periodNote: 'Ending May 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/oracle-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 14.3,
        notes: ['+3% Y/Y'],
        items: [
          {
            id: 'cloud_services_license_support',
            label: 'Cloud services & license support',
            value: 10.2,
            notes: ['+9% Y/Y'],
          },
          {
            id: 'cloud_license_on_premise',
            label: 'Cloud license & on-premise license',
            value: 1.8,
            notes: ['(15%) Y/Y'],
          },
          { id: 'hardware', label: 'Hardware', value: 0.8, notes: ['(1%) Y/Y'] },
          { id: 'services', label: 'Services', value: 1.4, notes: ['(6%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 3.9,
          items: [
            { id: 'cor_cloud', label: 'Cloud', value: 2.5, notes: ['79% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.2, notes: ['71% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.2, notes: ['8% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 5.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.2 },
            { id: 'sm', label: 'S&M', value: 2.1 },
            { id: 'amortization', label: 'Amortization', value: 0.7 },
            { id: 'ga', label: 'G&A', value: 0.4 },
            { id: 'other_opex', label: 'Other', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.926,
        items: [
          { id: 'financial', label: 'Financial', value: 0.9 },
          { id: 'other_financial', label: 'Other', value: 0.026 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.4, notes: ['73% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.7, notes: ['33% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.1, notes: ['22% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2024 年 5 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              { id: 'cloud_services_license_support', label: '云服务与许可证支持', notes: ['同比 +9%'] },
              { id: 'cloud_license_on_premise', label: '云许可证与本地部署许可证', notes: ['同比 (15%)'] },
              { id: 'hardware', label: '硬件', notes: ['同比 (1%)'] },
              { id: 'services', label: '服务', notes: ['同比 (6%)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud', label: '云', notes: ['毛利率 79%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 71%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 8%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'amortization', label: '摊销' },
                { id: 'ga', label: '一般及行政' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'financial', label: '财务费用' },
              { id: 'other_financial', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 22%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'oracle-q4-fy25',
      company: 'Oracle',
      period: 'Q4 FY25',
      periodNote: 'Ending May 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/oracle-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 15.9,
        notes: ['+11% Y/Y'],
        items: [
          {
            id: 'cloud_services_license_support',
            label: 'Cloud services & license support',
            value: 11.7,
            notes: ['+14% Y/Y'],
            children: [
              { id: 'cloud_services', label: 'Cloud services', value: 6.7, notes: ['+27% Y/Y'] },
              { id: 'license_support', label: 'License support', value: 5.0, notes: ['+1% Y/Y'] },
            ],
          },
          {
            id: 'cloud_license_on_premise',
            label: 'Cloud license & on-premise license',
            value: 2.0,
            notes: ['+9% Y/Y'],
          },
          { id: 'hardware', label: 'Hardware', value: 0.9, notes: ['+1% Y/Y'] },
          { id: 'services', label: 'Services', value: 1.3, notes: ['(2%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 4.7,
          items: [
            { id: 'cor_cloud', label: 'Cloud', value: 3.3, notes: ['76% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.3, notes: ['70% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.1, notes: ['15% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 6.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.7 },
            { id: 'sm', label: 'S&M', value: 2.3 },
            { id: 'amortization', label: 'Amortization', value: 0.5 },
            { id: 'ga', label: 'G&A', value: 0.5 },
            { id: 'other', label: 'Other', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.0,
        items: [{ id: 'financial', label: 'Financial', value: 1.0 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 11.2, notes: ['70% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 5.1, notes: ['32% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.4, notes: ['22% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2025 年 5 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              {
                id: 'cloud_services_license_support',
                label: '云服务与许可证支持',
                notes: ['同比 +14%'],
                children: [
                  { id: 'cloud_services', label: '云服务', notes: ['同比 +27%'] },
                  { id: 'license_support', label: '许可证支持', notes: ['同比 +1%'] },
                ],
              },
              { id: 'cloud_license_on_premise', label: '云许可证与本地部署许可证', notes: ['同比 +9%'] },
              { id: 'hardware', label: '硬件', notes: ['同比 +1%'] },
              { id: 'services', label: '服务', notes: ['同比 (2%)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud', label: '云', notes: ['毛利率 76%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 70%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 15%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'amortization', label: '摊销' },
                { id: 'ga', label: '一般及行政' },
                { id: 'other', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'financial', label: '财务费用' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 70%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 22%', '同比 (0 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'oracle-q3-fy25',
      company: 'Oracle',
      period: 'Q3 FY25',
      periodNote: 'Ending Feb. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/oracle-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 14.1,
        notes: ['+6% Y/Y'],
        items: [
          {
            id: 'cloud_services_license_support',
            label: 'Cloud services & license support',
            value: 11.0,
            notes: ['+10% Y/Y'],
            children: [
              { id: 'cloud_services', label: 'Cloud services', value: 6.2, notes: ['+23% Y/Y'] },
              { id: 'license_support', label: 'License support', value: 4.8, notes: ['(2%) Y/Y'] },
            ],
          },
          {
            id: 'cloud_license_on_premise_license',
            label: 'Cloud license & on-premise license',
            value: 1.1,
            notes: ['(10%) Y/Y'],
          },
          { id: 'hardware', label: 'Hardware', value: 0.7, notes: ['(7%) Y/Y'] },
          { id: 'services', label: 'Services', value: 1.3, notes: ['(1%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 4.2,
          items: [
            { id: 'cor_cloud', label: 'Cloud', value: 2.9, notes: ['76% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.2, notes: ['72% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.1, notes: ['14% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 5.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.4 },
            { id: 'sm', label: 'S&M', value: 2.1 },
            { id: 'amortization', label: 'Amortization', value: 0.5 },
            { id: 'ga', label: 'G&A', value: 0.4 },
            { id: 'other', label: 'Other', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.9,
        items: [{ id: 'financial', label: 'Financial', value: 0.9 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.9, notes: ['70% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.4, notes: ['31% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.9, notes: ['21% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2025 年 2 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              {
                id: 'cloud_services_license_support',
                label: '云服务及许可证支持',
                notes: ['同比 +10%'],
                children: [
                  { id: 'cloud_services', label: '云服务', notes: ['同比 +23%'] },
                  { id: 'license_support', label: '许可证支持', notes: ['同比 (2%)'] },
                ],
              },
              {
                id: 'cloud_license_on_premise_license',
                label: '云许可证及本地部署许可证',
                notes: ['同比 (10%)'],
              },
              { id: 'hardware', label: '硬件', notes: ['同比 (7%)'] },
              { id: 'services', label: '服务', notes: ['同比 (1%)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud', label: '云', notes: ['毛利率 76%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 72%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 14%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'amortization', label: '摊销' },
                { id: 'ga', label: '一般及行政' },
                { id: 'other', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'financial', label: '财务费用' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 70%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 31%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 21%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'oracle-q1-fy24',
      company: 'Oracle',
      period: 'Q1 FY24',
      periodNote: 'Ending August 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/oracle-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.5,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'cloud_services', label: 'Cloud services & license support', value: 9.5, notes: ['+13% Y/Y'] },
          { id: 'cloud_license', label: 'Cloud license & on-premise license', value: 0.8, notes: ['(11%) Y/Y'] },
          { id: 'hardware', label: 'Hardware', value: 0.7, notes: ['(6%) Y/Y'] },
          { id: 'services', label: 'Services', value: 1.4, notes: ['+2% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 3.6,
          items: [
            { id: 'cor_cloud', label: 'Cloud', value: 2.2, notes: ['79% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.2, notes: ['69% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.2, notes: ['10% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 5.5,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.2 },
            { id: 'sm', label: 'S&M', value: 2.0 },
            { id: 'ga', label: 'G&A', value: 0.4 },
            { id: 'amortization', label: 'Amortization', value: 0.8 },
            { id: 'operating_other', label: 'Other', value: 0.1 },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['The Source chart shows a separate positive tax benefit rather than tax expense.'],
        },
      },
      otherIncome: {
        total: 0.045,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.045 }],
      },
      otherExpenses: {
        total: 0.949,
        items: [
          { id: 'financial', label: 'Financial', value: 0.9 },
          { id: 'other_expense', label: 'Other', value: 0.049 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.8, notes: ['71% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.3, notes: ['26% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.4, notes: ['19% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2023 年 8 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'cloud_services', label: '云服务与许可证支持', notes: ['同比 +13%'] },
              { id: 'cloud_license', label: '云许可证与本地许可证', notes: ['同比 (11%)'] },
              { id: 'hardware', label: '硬件', notes: ['同比 (6%)'] },
              { id: 'services', label: '服务', notes: ['同比 +2%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud', label: '云', notes: ['毛利率 79%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 69%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 10%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'ga', label: '一般及行政' },
                { id: 'amortization', label: '摊销' },
                { id: 'operating_other', label: '其他' },
              ],
            },
            tax: { label: '税费', notes: ['来源图展示单独的正向税收收益，而非税费。'] },
          },
          otherIncome: {
            items: [{ id: 'tax_benefit', label: '税收收益' }],
          },
          otherExpenses: {
            items: [
              { id: 'financial', label: '财务费用' },
              { id: 'other_expense', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 71%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 26%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 19%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'oracle-q3-fy24',
      company: 'Oracle',
      period: 'Q3 FY24',
      periodNote: 'Ending Feb. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/oracle-q3-fy24.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 13.3,
        notes: ['+7% Y/Y'],
        items: [
          {
            id: 'cloud_services_license_support',
            label: 'Cloud services & license support',
            value: 10.0,
            notes: ['+12% Y/Y'],
          },
          {
            id: 'cloud_license_on_premise_license',
            label: 'Cloud license & on-premise license',
            value: 1.3,
            notes: ['(2%) Y/Y'],
          },
          { id: 'hardware', label: 'Hardware', value: 0.8, notes: ['(7%) Y/Y'] },
          { id: 'services', label: 'Services', value: 1.3, notes: ['(5%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 3.9,
          items: [
            { id: 'cor_cloud', label: 'Cloud', value: 2.5, notes: ['78% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.2, notes: ['71% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.2, notes: ['8% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 5.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.2 },
            { id: 'sm', label: 'S&M', value: 2.0 },
            { id: 'amortization', label: 'Amortization', value: 0.7 },
            { id: 'ga', label: 'G&A', value: 0.4 },
            { id: 'other', label: 'Other', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.909,
        items: [
          { id: 'financial', label: 'Financial', value: 0.9 },
          { id: 'other_financial', label: 'Other', value: 0.009 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.4, notes: ['71% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.8, notes: ['28% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.4, notes: ['18% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2024 年 2 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              {
                id: 'cloud_services_license_support',
                label: '云服务与许可证支持',
                notes: ['同比 +12%'],
              },
              {
                id: 'cloud_license_on_premise_license',
                label: '云许可证及本地部署许可证',
                notes: ['同比 (2%)'],
              },
              { id: 'hardware', label: '硬件', notes: ['同比 (7%)'] },
              { id: 'services', label: '服务', notes: ['同比 (5%)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud', label: '云', notes: ['毛利率 78%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 71%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 8%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'amortization', label: '摊销' },
                { id: 'ga', label: '一般及行政' },
                { id: 'other', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'financial', label: '财务费用' },
              { id: 'other_financial', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 71%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 28%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 18%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'oracle-q2-fy24',
      company: 'Oracle',
      period: 'Q2 FY24',
      periodNote: 'Ending Nov. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/oracle-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.9,
        notes: ['+5% Y/Y'],
        items: [
          {
            id: 'cloud_services_support',
            label: 'Cloud services & license support',
            value: 9.6,
            notes: ['+12% Y/Y'],
          },
          {
            id: 'cloud_on_premise_license',
            label: 'Cloud license & on-premise license',
            value: 1.1,
            notes: ['(18%) Y/Y'],
          },
          { id: 'hardware', label: 'Hardware', value: 0.8, notes: ['(11%) Y/Y'] },
          { id: 'services', label: 'Services', value: 1.4, notes: ['(2%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 3.7,
          items: [
            { id: 'cor_cloud', label: 'Cloud', value: 2.2, notes: ['79% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.2, notes: ['72% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.3, notes: ['10% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 5.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.2 },
            { id: 'sm', label: 'S&M', value: 2.1 },
            { id: 'ga', label: 'G&A', value: 0.4 },
            { id: 'amortization', label: 'Amortization', value: 0.8 },
            { id: 'other_opex', label: 'Other', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.914,
        items: [
          { id: 'financial', label: 'Financial', value: 0.9 },
          { id: 'other_non_operating', label: 'Other', value: 0.014 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.2, notes: ['71% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.6, notes: ['28% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.5, notes: ['19% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2023 年 11 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'cloud_services_support', label: '云服务与许可证支持', notes: ['同比 +12%'] },
              { id: 'cloud_on_premise_license', label: '云许可证与本地部署许可证', notes: ['同比 (18%)'] },
              { id: 'hardware', label: '硬件', notes: ['同比 (11%)'] },
              { id: 'services', label: '服务', notes: ['同比 (2%)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud', label: '云', notes: ['毛利率 79%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 72%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 10%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'ga', label: '一般及行政' },
                { id: 'amortization', label: '摊销' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'financial', label: '财务费用' },
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 71%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 28%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 19%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'oracle-q2-fy23',
      company: 'Oracle',
      period: 'Q2 FY23',
      periodNote: 'Ending November 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/oracle-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.3,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'cloud_services_license_support', label: 'Cloud services & license support', value: 8.6, notes: ['+14% Y/Y'] },
          { id: 'cloud_license_on_premise', label: 'Cloud license & on-premise license', value: 1.4, notes: ['+16% Y/Y'] },
          { id: 'hardware', label: 'Hardware', value: 0.9, notes: ['+11% Y/Y'] },
          { id: 'services', label: 'Services', value: 1.4, notes: ['+74% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 3.4,
          items: [
            { id: 'cor_cloud', label: 'Cloud', value: 1.9, notes: ['81% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.3, notes: ['66% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.2, notes: ['15% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 5.8,
          items: [
            { id: 'sm', label: 'S&M', value: 2.2 },
            { id: 'rnd', label: 'R&D', value: 2.2 },
            { id: 'ga', label: 'G&A', value: 0.4 },
            { id: 'amortization', label: 'Amortization', value: 0.9 },
            { id: 'other_opex', label: 'Other', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.0,
        items: [
          { id: 'financial', label: 'Financial', value: 0.9 },
          { id: 'other_non_operating', label: 'Other', value: 0.1 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.9, notes: ['73% margin', '(7pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.1, notes: ['25% margin', '+33pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['14% margin', '+26pp Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2022 年 11 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'cloud_services_license_support', label: '云服务与许可证支持', notes: ['同比 +14%'] },
              { id: 'cloud_license_on_premise', label: '云许可证与本地部署许可证', notes: ['同比 +16%'] },
              { id: 'hardware', label: '硬件', notes: ['同比 +11%'] },
              { id: 'services', label: '服务', notes: ['同比 +74%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud', label: '云', notes: ['毛利率 81%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 66%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 15%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场' },
                { id: 'rnd', label: '研发' },
                { id: 'ga', label: '一般及行政' },
                { id: 'amortization', label: '摊销' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'financial', label: '财务费用' },
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 (7 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 25%', '同比 +33 个百分点'] },
            net: { label: '净利润', notes: ['利润率 14%', '同比 +26 个百分点'] },
          },
        },
      },
    },
    {
      key: 'oracle-q3-fy23',
      company: 'Oracle',
      period: 'Q3 FY23',
      periodNote: 'Ending Feb. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/oracle-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.4,
        notes: ['+18% Y/Y'],
        items: [
          {
            id: 'cloud_services_license_support',
            label: 'Cloud services & license support',
            value: 8.9,
            notes: ['+17% Y/Y'],
          },
          {
            id: 'cloud_license_on_premise',
            label: 'Cloud license & on-premise license',
            value: 1.3,
            notes: ['+0% Y/Y'],
          },
          { id: 'hardware', label: 'Hardware', value: 0.8, notes: ['+2% Y/Y'] },
          { id: 'services', label: 'Services', value: 1.4, notes: ['+74% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 3.4,
          items: [
            { id: 'cor_cloud', label: 'Cloud', value: 2.0, notes: ['81% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.2, notes: ['70% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.2, notes: ['10% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 5.7,
          items: [
            { id: 'sm', label: 'S&M', value: 2.2 },
            { id: 'rnd', label: 'R&D', value: 2.1 },
            { id: 'ga', label: 'G&A', value: 0.4 },
            { id: 'amortization', label: 'Amortization', value: 0.9 },
            { id: 'other_opex', label: 'Other', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.0,
        items: [
          { id: 'financial', label: 'Financial', value: 0.9 },
          { id: 'other_non_operating', label: 'Other', value: 0.1 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.0, notes: ['72% margin', '(7pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.3, notes: ['26% margin', '(10pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['15% margin', '(7pp) Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2023 年 2 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'cloud_services_license_support', label: '云服务与许可证支持', notes: ['同比 +17%'] },
              { id: 'cloud_license_on_premise', label: '云许可证与本地部署许可证', notes: ['同比 +0%'] },
              { id: 'hardware', label: '硬件', notes: ['同比 +2%'] },
              { id: 'services', label: '服务', notes: ['同比 +74%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud', label: '云', notes: ['毛利率 81%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 70%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 10%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场' },
                { id: 'rnd', label: '研发' },
                { id: 'ga', label: '一般及行政' },
                { id: 'amortization', label: '摊销' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'financial', label: '财务费用' },
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 (7 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 26%', '同比 (10 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 15%', '同比 (7 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'oracle-q4-fy23',
      company: 'Oracle',
      period: 'Q4 FY23',
      periodNote: 'Ending May 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/oracle-q4-fy23.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 13.8,
        notes: ['+17% Y/Y'],
        items: [
          {
            id: 'cloud_services_license_support',
            label: 'Cloud services & license support',
            value: 9.4,
            notes: ['+23% Y/Y'],
          },
          {
            id: 'cloud_license_on_premise_license',
            label: 'Cloud license & on-premise license',
            value: 2.2,
            notes: ['(15%) Y/Y'],
          },
          { id: 'hardware', label: 'Hardware', value: 0.9, notes: ['(1%) Y/Y'] },
          { id: 'services', label: 'Services', value: 1.5, notes: ['+76% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 3.7,
          items: [
            { id: 'cor_cloud', label: 'Cloud', value: 2.2, notes: ['81% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.3, notes: ['69% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.3, notes: ['10% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 6.0,
          items: [
            { id: 'sm', label: 'S&M', value: 2.3 },
            { id: 'rnd', label: 'R&D', value: 2.2 },
            { id: 'ga', label: 'G&A', value: 0.4 },
            { id: 'amortization', label: 'Amortization', value: 0.9 },
            { id: 'other_opex', label: 'Other', value: 0.2 },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['The source chart shows a tax benefit rather than a tax expense.'],
        },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.2 }],
      },
      otherExpenses: {
        total: 1.1,
        items: [
          { id: 'financial', label: 'Financial', value: 1.0 },
          { id: 'other_financial', label: 'Other', value: 0.1 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.1, notes: ['73% margin', '(7pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.1, notes: ['30% margin', '(8pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.3, notes: ['24% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2023 年 5 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              { id: 'cloud_services_license_support', label: '云服务与许可证支持', notes: ['同比 +23%'] },
              { id: 'cloud_license_on_premise_license', label: '云许可证与本地部署许可证', notes: ['同比 (15%)'] },
              { id: 'hardware', label: '硬件', notes: ['同比 (1%)'] },
              { id: 'services', label: '服务', notes: ['同比 +76%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud', label: '云', notes: ['毛利率 81%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 69%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 10%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场' },
                { id: 'rnd', label: '研发' },
                { id: 'ga', label: '一般及行政' },
                { id: 'amortization', label: '摊销' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费', notes: ['源图展示税收收益，而非税费。'] },
          },
          otherIncome: {
            items: [{ id: 'tax_benefit', label: '税收收益' }],
          },
          otherExpenses: {
            items: [
              { id: 'financial', label: '财务费用' },
              { id: 'other_financial', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 (7 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 30%', '同比 (8 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 24%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'oracle-q1-fy26',
      company: 'Oracle',
      period: 'Q1 FY26',
      periodNote: 'Ending Aug. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/oracle-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 14.9,
        notes: ['+12% Y/Y'],
        items: [
          {
            id: 'cloud',
            label: 'Cloud',
            value: 7.2,
            notes: ['+28% Y/Y'],
            children: [
              { id: 'cloud_applications', label: 'Cloud applications', value: 3.8, notes: ['+11% Y/Y'] },
              { id: 'oci', label: 'Oracle Cloud Infrastructure', value: 3.3, notes: ['+55% Y/Y'] },
            ],
          },
          {
            id: 'software',
            label: 'Software',
            value: 5.7,
            notes: ['(1%) Y/Y'],
            children: [
              { id: 'software_support', label: 'Software Support', value: 5.0, notes: ['+1% Y/Y'] },
              { id: 'software_license', label: 'Software License', value: 0.8, notes: ['(12%) Y/Y'] },
            ],
          },
          { id: 'hardware', label: 'Hardware', value: 0.7, notes: ['+2% Y/Y'] },
          { id: 'services', label: 'Services', value: 1.3, notes: ['+7% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 4.9,
          items: [
            { id: 'cor_cloud_software', label: 'Cloud & Software', value: 3.6, notes: ['72% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.2, notes: ['79% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.1, notes: ['19% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 5.8,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.5 },
            { id: 'sm', label: 'S&M', value: 2.1 },
            { id: 'amortization', label: 'Amortization', value: 0.4 },
            { id: 'ga', label: 'G&A', value: 0.4 },
            { id: 'other', label: 'Other', value: 0.4 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.9,
        items: [{ id: 'financial', label: 'Financial', value: 0.9 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.0, notes: ['67% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.3, notes: ['29% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.9, notes: ['20% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2025 年 8 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              {
                id: 'cloud',
                label: '云',
                notes: ['同比 +28%'],
                children: [
                  { id: 'cloud_applications', label: '云应用', notes: ['同比 +11%'] },
                  { id: 'oci', label: 'Oracle 云基础设施', notes: ['同比 +55%'] },
                ],
              },
              {
                id: 'software',
                label: '软件',
                notes: ['同比 (1%)'],
                children: [
                  { id: 'software_support', label: '软件支持', notes: ['同比 +1%'] },
                  { id: 'software_license', label: '软件许可证', notes: ['同比 (12%)'] },
                ],
              },
              { id: 'hardware', label: '硬件', notes: ['同比 +2%'] },
              { id: 'services', label: '服务', notes: ['同比 +7%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud_software', label: '云与软件', notes: ['毛利率 72%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 79%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 19%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'amortization', label: '摊销' },
                { id: 'ga', label: '一般及行政' },
                { id: 'other', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'financial', label: '财务费用' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 67%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 29%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 20%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'oracle-q2-fy26',
      company: 'Oracle',
      period: 'Q2 FY26',
      periodNote: 'Ending Nov. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/oracle-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 16.1,
        notes: ['+14% Y/Y'],
        items: [
          {
            id: 'cloud',
            label: 'Cloud',
            value: 8.0,
            notes: ['+34% Y/Y'],
            children: [
              { id: 'cloud_applications', label: 'Cloud applications', value: 3.9, notes: ['+11% Y/Y'] },
              { id: 'oci', label: 'Oracle Cloud Infrastructure', value: 4.1, notes: ['+68% Y/Y'] },
            ],
          },
          {
            id: 'software',
            label: 'Software',
            value: 5.9,
            notes: ['(3%) Y/Y'],
            children: [
              { id: 'software_support', label: 'Software Support', value: 4.9, notes: ['+1% Y/Y'] },
              { id: 'software_license', label: 'Software License', value: 0.9, notes: ['(21%) Y/Y'] },
            ],
          },
          { id: 'hardware', label: 'Hardware', value: 0.8, notes: ['+7% Y/Y'] },
          { id: 'services', label: 'Services', value: 1.4, notes: ['+7% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 5.4,
          items: [
            { id: 'cor_cloud_software', label: 'Cloud & Software', value: 4.0, notes: ['71% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.2, notes: ['72% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.2, notes: ['18% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 6.0,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.6 },
            { id: 'sm', label: 'S&M', value: 2.1 },
            { id: 'amortization', label: 'Amortization', value: 0.4 },
            { id: 'ga', label: 'G&A', value: 0.4 },
            { id: 'other', label: 'Other', value: 0.4 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 1.6,
        items: [{ id: 'other_income', label: 'Other', value: 1.6 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.7, notes: ['67% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.7, notes: ['29% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.1, notes: ['38% margin', '+16pp Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2025 年 11 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              {
                id: 'cloud',
                label: '云',
                notes: ['同比 +34%'],
                children: [
                  { id: 'cloud_applications', label: '云应用', notes: ['同比 +11%'] },
                  { id: 'oci', label: 'Oracle 云基础设施', notes: ['同比 +68%'] },
                ],
              },
              {
                id: 'software',
                label: '软件',
                notes: ['同比 (3%)'],
                children: [
                  { id: 'software_support', label: '软件支持', notes: ['同比 +1%'] },
                  { id: 'software_license', label: '软件许可证', notes: ['同比 (21%)'] },
                ],
              },
              { id: 'hardware', label: '硬件', notes: ['同比 +7%'] },
              { id: 'services', label: '服务', notes: ['同比 +7%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud_software', label: '云与软件', notes: ['毛利率 71%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 72%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 18%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'amortization', label: '摊销' },
                { id: 'ga', label: '一般及行政' },
                { id: 'other', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他收入' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 67%', '同比 (4 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 29%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 +16 个百分点'] },
          },
        },
      },
    },
    {
      key: 'oracle-q3-fy26',
      company: 'Oracle',
      period: 'Q3 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/oracle-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 17.2,
        notes: ['+22% Y/Y'],
        items: [
          {
            id: 'cloud',
            label: 'Cloud',
            value: 8.9,
            notes: ['+44% Y/Y'],
            children: [
              { id: 'oci', label: 'Oracle Cloud Infrastructure', value: 4.9, notes: ['+84% Y/Y'] },
              { id: 'cloud_applications', label: 'Cloud applications', value: 4.0, notes: ['+13% Y/Y'] },
            ],
          },
          {
            id: 'software',
            label: 'Software',
            value: 6.1,
            notes: ['+3% Y/Y'],
            children: [
              { id: 'software_support', label: 'Software Support', value: 5.0, notes: ['+4% Y/Y'] },
              { id: 'software_license', label: 'Software License', value: 1.1, notes: ['+2% Y/Y'] },
            ],
          },
          { id: 'hardware', label: 'Hardware', value: 0.7, notes: ['+2% Y/Y'] },
          { id: 'services', label: 'Services', value: 1.4, notes: ['+12% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 6.1,
          items: [
            { id: 'cor_cloud_software', label: 'Cloud & Software', value: 4.8, notes: ['68% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.2, notes: ['74% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.1, notes: ['21% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 5.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.6 },
            { id: 'sm', label: 'S&M', value: 2.1 },
            { id: 'amortization', label: 'Amortization', value: 0.4 },
            { id: 'ga', label: 'G&A', value: 0.4 },
            { id: 'other', label: 'Other', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.0,
        items: [{ id: 'interest', label: 'Interest', value: 1.0 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 11.1, notes: ['65% margin', '(6pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 5.5, notes: ['32% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.7, notes: ['22% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2026 年 2 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              {
                id: 'cloud',
                label: '云',
                notes: ['同比 +44%'],
                children: [
                  { id: 'oci', label: 'Oracle 云基础设施', notes: ['同比 +84%'] },
                  { id: 'cloud_applications', label: '云应用', notes: ['同比 +13%'] },
                ],
              },
              {
                id: 'software',
                label: '软件',
                notes: ['同比 +3%'],
                children: [
                  { id: 'software_support', label: '软件支持', notes: ['同比 +4%'] },
                  { id: 'software_license', label: '软件许可证', notes: ['同比 +2%'] },
                ],
              },
              { id: 'hardware', label: '硬件', notes: ['同比 +2%'] },
              { id: 'services', label: '服务', notes: ['同比 +12%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud_software', label: '云与软件', notes: ['毛利率 68%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 74%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 21%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'amortization', label: '摊销' },
                { id: 'ga', label: '一般及行政' },
                { id: 'other', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 65%', '同比 (6 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 22%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'oracle-q4-fy26',
      company: 'Oracle',
      period: 'Q4 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/oracle-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 19.2,
        notes: ['+21% Y/Y'],
        items: [
          {
            id: 'cloud',
            label: 'Cloud',
            value: 9.9,
            notes: ['+47% Y/Y'],
            children: [
              { id: 'oci', label: 'Oracle Cloud Infrastructure', value: 5.8, notes: ['+93% Y/Y'] },
              { id: 'cloud_applications', label: 'Cloud applications', value: 4.1, notes: ['+10% Y/Y'] },
            ],
          },
          {
            id: 'software',
            label: 'Software',
            value: 6.8,
            notes: ['(2%) Y/Y'],
            children: [
              { id: 'software_support', label: 'Software Support', value: 4.9, notes: ['(0%) Y/Y'] },
              { id: 'software_license', label: 'Software License', value: 1.9, notes: ['(6%) Y/Y'] },
            ],
          },
          { id: 'hardware', label: 'Hardware', value: 0.9, notes: ['+9% Y/Y'] },
          { id: 'services', label: 'Services', value: 1.5, notes: ['+13% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 6.7,
          items: [
            { id: 'cor_cloud_software', label: 'Cloud & Software', value: 5.2, notes: ['67% gross margin'] },
            { id: 'cor_hardware', label: 'Hardware', value: 0.3, notes: ['68% gross margin'] },
            { id: 'cor_services', label: 'Services', value: 1.2, notes: ['24% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 6.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.6 },
            { id: 'sm', label: 'S&M', value: 2.1 },
            { id: 'restructuring_other', label: 'Restructuring & Other', value: 0.8 },
            { id: 'amortization', label: 'Amortization', value: 0.4 },
            { id: 'ga', label: 'G&A', value: 0.4 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.1 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.8,
        items: [{ id: 'interest', label: 'Interest', value: 0.8 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.5, notes: ['65% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 6.1, notes: ['32% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 4.3, notes: ['22% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2026 年 5 月',
          revenue: {
            notes: ['同比 +21%'],
            items: [
              {
                id: 'cloud',
                label: '云',
                notes: ['同比 +47%'],
                children: [
                  { id: 'oci', label: 'Oracle 云基础设施', notes: ['同比 +93%'] },
                  { id: 'cloud_applications', label: '云应用', notes: ['同比 +10%'] },
                ],
              },
              {
                id: 'software',
                label: '软件',
                notes: ['同比 (2%)'],
                children: [
                  { id: 'software_support', label: '软件支持', notes: ['同比 (0%)'] },
                  { id: 'software_license', label: '软件许可证', notes: ['同比 (6%)'] },
                ],
              },
              { id: 'hardware', label: '硬件', notes: ['同比 +9%'] },
              { id: 'services', label: '服务', notes: ['同比 +13%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cor_cloud_software', label: '云与软件', notes: ['毛利率 67%'] },
                { id: 'cor_hardware', label: '硬件', notes: ['毛利率 68%'] },
                { id: 'cor_services', label: '服务', notes: ['毛利率 24%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'restructuring_other', label: '重组及其他' },
                { id: 'amortization', label: '摊销' },
                { id: 'ga', label: '一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 65%', '同比 (5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 22%', '同比 +1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
