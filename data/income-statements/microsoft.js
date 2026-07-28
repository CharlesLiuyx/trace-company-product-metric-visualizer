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
      key: 'microsoft-q1-fy23',
      company: 'Microsoft',
      period: 'Q1 FY23',
      periodNote: 'Ending Sept. 2022',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/microsoft-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 50.1,
        notes: ['+11% Y/Y'],
        items: [
          {
            id: 'productivity_business_processes',
            label: 'Productivity & Business Processes',
            value: 16.5,
            notes: ['+9% Y/Y', '51% operating margin'],
          },
          {
            id: 'intelligent_cloud',
            label: 'Intelligent Cloud',
            value: 20.3,
            notes: ['+20% Y/Y', '44% operating margin'],
          },
          {
            id: 'more_personal_computing',
            label: 'More Personal Computing',
            value: 13.3,
            notes: ['Flat Y/Y', '32% operating margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 15.5,
        },
        operatingExpenses: {
          total: 13.2,
          notes: [
            'Source chart operating-expense items sum to $13.1B because each item is displayed to one decimal place.',
          ],
          items: [
            { id: 'rnd', label: 'R&D', value: 6.6 },
            { id: 'sm', label: 'S&M', value: 5.1 },
            { id: 'ga', label: 'G&A', value: 1.4 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.0 },
      },
      otherIncome: {
        total: 0.054,
        items: [{ id: 'other', label: 'Other', value: 0.054 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 34.7,
          notes: ['69% margin', '(1pp) Y/Y'],
        },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 21.5,
          notes: ['43% margin', '(2pp) Y/Y'],
        },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 17.6,
          notes: ['35% margin', '(10pp) Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              {
                id: 'productivity_business_processes',
                label: '生产力与业务流程',
                notes: ['同比 +9%', '营业利润率 51%'],
              },
              {
                id: 'intelligent_cloud',
                label: '智能云',
                notes: ['同比 +20%', '营业利润率 44%'],
              },
              {
                id: 'more_personal_computing',
                label: '更多个人计算',
                notes: ['同比持平', '营业利润率 32%'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图中的运营费用明细因各项目显示至一位小数而合计为 $13.1B。'],
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'ga', label: '管理费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: {
              label: '毛利润',
              notes: ['利润率 69%', '同比 (1 个百分点)'],
            },
            operating: {
              label: '营业利润',
              notes: ['利润率 43%', '同比 (2 个百分点)'],
            },
            net: {
              label: '净利润',
              notes: ['利润率 35%', '同比 (10 个百分点)'],
            },
          },
        },
      },
    },
    {
      key: 'microsoft-q4-fy23',
      company: 'Microsoft',
      period: 'Q4 FY23',
      periodNote: 'Ending June 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 56.2,
        notes: ['+8% Y/Y'],
        items: [
          {
            id: 'productivity_business_processes',
            label: 'Productivity & Business Processes',
            value: 18.3,
            notes: ['+10% Y/Y', '49% operating margin'],
          },
          {
            id: 'intelligent_cloud',
            label: 'Intelligent Cloud',
            value: 24.0,
            notes: ['+15% Y/Y', '44% operating margin'],
          },
          {
            id: 'more_personal_computing',
            label: 'More Personal Computing',
            value: 13.9,
            notes: ['(4%) Y/Y', '34% operating margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 16.8 },
        operatingExpenses: {
          total: 15.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 6.7, notes: ['12% of revenue'] },
            { id: 'sm', label: 'S&M', value: 6.2, notes: ['11% of revenue'] },
            { id: 'ga', label: 'G&A', value: 2.2, notes: ['4% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.6 },
      },
      otherIncome: {
        total: 0.5,
        items: [{ id: 'other', label: 'Other', value: 0.5 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 39.4, notes: ['70% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 24.3, notes: ['40% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 20.1, notes: ['36% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +10%', '营业利润率 49%'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +15%', '营业利润率 44%'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 (4%)', '营业利润率 34%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 11%'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 4%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 70%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 40%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 36%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q3-fy23',
      company: 'Microsoft',
      period: 'Q3 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 52.9,
        notes: ['+7% Y/Y'],
        items: [
          {
            id: 'productivity_business_processes',
            label: 'Productivity & Business Processes',
            value: 17.5,
            notes: ['+11% Y/Y', '49% operating margin'],
          },
          {
            id: 'intelligent_cloud',
            label: 'Intelligent Cloud',
            value: 22.1,
            notes: ['+16% Y/Y', '43% operating margin'],
          },
          {
            id: 'more_personal_computing',
            label: 'More Personal Computing',
            value: 13.3,
            notes: ['(9%) Y/Y', '32% operating margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 16.1 },
        operatingExpenses: {
          total: 14.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.0, notes: ['13% of revenue'] },
            { id: 'sm', label: 'S&M', value: 5.8, notes: ['11% of revenue'] },
            { id: 'ga', label: 'G&A', value: 1.6, notes: ['3% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.4 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'other', label: 'Other', value: 0.3 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 36.7, notes: ['69% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 22.4, notes: ['42% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 18.3, notes: ['35% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +11%', '营业利润率 49%'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +16%', '营业利润率 43%'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 (9%)', '营业利润率 32%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 13%'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 11%'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 69%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q4-fy24',
      company: 'Microsoft',
      period: 'Q4 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 64.7,
        notes: ['+15% Y/Y'],
        items: [
          { id: 'server', label: 'Server', value: 26.6, notes: ['+21% Y/Y'] },
          { id: 'office', label: 'Office', value: 14.3, notes: ['+11% Y/Y'] },
          { id: 'windows', label: 'Windows', value: 6.5, notes: ['+7% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 5.0, notes: ['+44% Y/Y'] },
          { id: 'linkedin', label: 'LinkedIn', value: 4.3, notes: ['+9% Y/Y'] },
          { id: 'search', label: 'Search', value: 3.2, notes: ['+5% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 4.8, notes: ['(1%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 19.7 },
        operatingExpenses: {
          total: 17.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.1, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.8, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.2, notes: ['3% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.2 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.7, items: [{ id: 'other', label: 'Other', value: 0.7 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 45.0, notes: ['70% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 27.9, notes: ['43% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 22.0, notes: ['34% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              { id: 'server', label: '服务器', notes: ['同比 +21%'] },
              { id: 'office', label: 'Office', notes: ['同比 +11%'] },
              { id: 'windows', label: 'Windows', notes: ['同比 +7%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +44%'] },
              { id: 'linkedin', label: 'LinkedIn', notes: ['同比 +9%'] },
              { id: 'search', label: '搜索', notes: ['同比 +5%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (1%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 70%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 43%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 34%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q4-fy24-by-bu',
      company: 'Microsoft',
      period: 'Q4 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q4-fy24-by-bu.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 64.7,
        notes: ['+15% Y/Y'],
        items: [
          { id: 'productivity_business_processes', label: 'Productivity & Business Processes', value: 20.3, notes: ['+11% Y/Y', '50% operating margin'] },
          { id: 'intelligent_cloud', label: 'Intelligent Cloud', value: 28.5, notes: ['+19% Y/Y', '45% operating margin'] },
          { id: 'more_personal_computing', label: 'More Personal Computing', value: 15.9, notes: ['+14% Y/Y', '31% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 19.7 },
        operatingExpenses: {
          total: 17.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.1, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.8, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.2, notes: ['3% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.2 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.7, items: [{ id: 'other', label: 'Other', value: 0.7 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 45.0, notes: ['70% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 27.9, notes: ['43% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 22.0, notes: ['34% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +11%', '营业利润率 50%'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +19%', '营业利润率 45%'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 +14%', '营业利润率 31%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 70%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 43%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 34%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q3-fy24',
      company: 'Microsoft',
      period: 'Q3 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 61.9,
        notes: [
          '+17% Y/Y',
          'Source chart business-line items sum to $61.8B versus reported revenue of $61.9B; retained as source business attribution with rounding tolerance.',
        ],
        items: [
          { id: 'server', label: 'Server', value: 24.8, notes: ['+24% Y/Y'] },
          { id: 'office', label: 'Office', value: 13.9, notes: ['+12% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 5.5, notes: ['+51% Y/Y'] },
          { id: 'windows', label: 'Windows', value: 5.9, notes: ['+11% Y/Y'] },
          { id: 'linkedin', label: 'LinkedIn', value: 4.0, notes: ['+10% Y/Y'] },
          { id: 'search', label: 'Search', value: 3.1, notes: ['+3% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 4.6, notes: ['(3%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 18.5 },
        operatingExpenses: {
          total: 15.8,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.7, notes: ['12% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.2, notes: ['10% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.9, notes: ['3% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.8 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.9, items: [{ id: 'other', label: 'Other', value: 0.9 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 43.4, notes: ['70% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 27.6, notes: ['44% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 21.9, notes: ['35% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: [
              '同比 +17%',
              '来源图中的业务线合计为 $61.8B，报告收入为 $61.9B；保留来源业务归属并采用取整容差。',
            ],
            items: [
              { id: 'server', label: '服务器', notes: ['同比 +24%'] },
              { id: 'office', label: 'Office', notes: ['同比 +12%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +51%'] },
              { id: 'windows', label: 'Windows', notes: ['同比 +11%'] },
              { id: 'linkedin', label: 'LinkedIn', notes: ['同比 +10%'] },
              { id: 'search', label: '搜索', notes: ['同比 +3%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (3%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 70%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 44%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q3-fy24-by-bu',
      company: 'Microsoft',
      period: 'Q3 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q3-fy24-by-bu.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 61.9,
        notes: ['+17% Y/Y'],
        items: [
          {
            id: 'productivity_business_processes',
            label: 'Productivity & Business Processes',
            value: 19.6,
            notes: ['+12% Y/Y', '52% operating margin'],
          },
          {
            id: 'intelligent_cloud',
            label: 'Intelligent Cloud',
            value: 26.7,
            notes: ['+21% Y/Y', '47% operating margin'],
          },
          {
            id: 'more_personal_computing',
            label: 'More Personal Computing',
            value: 15.6,
            notes: ['+17% Y/Y', '32% operating margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 18.5 },
        operatingExpenses: {
          total: 15.8,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.7, notes: ['12% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.2, notes: ['10% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.9, notes: ['3% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.8 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.9, items: [{ id: 'other', label: 'Other', value: 0.9 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 43.4, notes: ['70% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 27.6, notes: ['44% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 21.9, notes: ['35% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              {
                id: 'productivity_business_processes',
                label: '生产力与业务流程',
                notes: ['同比 +12%', '营业利润率 52%'],
              },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +21%', '营业利润率 47%'] },
              {
                id: 'more_personal_computing',
                label: '更多个人计算',
                notes: ['同比 +17%', '营业利润率 32%'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 70%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 44%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q1-fy25',
      company: 'Microsoft',
      period: 'Q1 FY25',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 65.6,
        notes: [
          '+16% Y/Y',
          'Source chart business-line items sum to $65.5B versus reported revenue of $65.6B; retained as source business attribution with rounding tolerance.',
        ],
        items: [
          { id: 'server', label: 'Server', value: 22.2, notes: ['+23% Y/Y'] },
          { id: 'microsoft_365_commercial', label: 'Microsoft 365 Commercial', value: 20.4, notes: ['+13% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 5.6, notes: ['+43% Y/Y'] },
          { id: 'windows_devices', label: 'Windows & Devices', value: 4.3, notes: ['(0%) Y/Y'] },
          { id: 'linkedin', label: 'LinkedIn', value: 4.3, notes: ['+10% Y/Y'] },
          { id: 'search', label: 'Search', value: 3.2, notes: ['+7% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 5.5, notes: ['+6% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.1 },
        operatingExpenses: {
          total: 14.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.5, notes: ['12% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 5.7, notes: ['9% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.7, notes: ['3% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.6 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.3,
        items: [{ id: 'other_expense', label: 'Other', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 45.5, notes: ['69% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 30.6, notes: ['47% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 24.7, notes: ['38% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +16%', '来源图中的业务线合计为 $65.5B，报告收入为 $65.6B；保留来源业务归属并采用取整容差。'],
            items: [
              { id: 'server', label: '服务器', notes: ['同比 +23%'] },
              { id: 'microsoft_365_commercial', label: 'Microsoft 365 商业版', notes: ['同比 +13%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +43%'] },
              { id: 'windows_devices', label: 'Windows 与设备', notes: ['同比 (0%)'] },
              { id: 'linkedin', label: 'LinkedIn', notes: ['同比 +10%'] },
              { id: 'search', label: '搜索', notes: ['同比 +7%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +6%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 (0 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 69%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 47%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q1-fy25-by-bu',
      company: 'Microsoft',
      period: 'Q1 FY25',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q1-fy25-by-bu.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 65.6,
        notes: ['+16% Y/Y'],
        items: [
          { id: 'productivity_business_processes', label: 'Productivity & Business Processes', value: 28.3, notes: ['+12% Y/Y', '58% operating margin'] },
          { id: 'intelligent_cloud', label: 'Intelligent Cloud', value: 24.1, notes: ['+20% Y/Y', '44% operating margin'] },
          { id: 'more_personal_computing', label: 'More Personal Computing', value: 13.2, notes: ['+17% Y/Y', '27% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.1 },
        operatingExpenses: {
          total: 14.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.5, notes: ['12% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 5.7, notes: ['9% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.7, notes: ['3% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.6 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.3, items: [{ id: 'other_expense', label: 'Other', value: 0.3 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 45.5, notes: ['69% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 30.6, notes: ['47% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 24.7, notes: ['38% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +12%', '营业利润率 58%'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +20%', '营业利润率 44%'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 +17%', '营业利润率 27%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 (0 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 69%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 47%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q3-fy25',
      company: 'Microsoft',
      period: 'Q3 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q3-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 70.1,
        notes: [
          '+13% Y/Y',
          'Source chart business-line items sum to $69.9B versus reported revenue of $70.1B; retained as source business attribution with rounding tolerance.',
        ],
        items: [
          { id: 'server', label: 'Server', value: 24.7, notes: ['+22% Y/Y'] },
          { id: 'microsoft_365_commercial', label: 'Microsoft 365 Commercial', value: 21.9, notes: ['+11% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 5.7, notes: ['+5% Y/Y'] },
          { id: 'linkedin', label: 'LinkedIn', value: 4.3, notes: ['+7% Y/Y'] },
          { id: 'windows_devices', label: 'Windows & Devices', value: 4.1, notes: ['+1% Y/Y'] },
          { id: 'search', label: 'Search', value: 3.5, notes: ['+15% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 5.7, notes: ['+9% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 21.9 },
        operatingExpenses: {
          total: 16.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.2, notes: ['12% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.2, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.7, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.6 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.6,
        items: [{ id: 'other', label: 'Other', value: 0.6 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 48.1, notes: ['69% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 32.0, notes: ['46% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 25.8, notes: ['37% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +13%', '来源图中的业务线合计为 $69.9B，报告收入为 $70.1B；保留来源业务归属并采用取整容差。'],
            items: [
              { id: 'server', label: '服务器', notes: ['同比 +22%'] },
              { id: 'microsoft_365_commercial', label: 'Microsoft 365 商业版', notes: ['同比 +11%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +5%'] },
              { id: 'linkedin', label: 'LinkedIn', notes: ['同比 +7%'] },
              { id: 'windows_devices', label: 'Windows 与设备', notes: ['同比 +1%'] },
              { id: 'search', label: '搜索', notes: ['同比 +15%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +9%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 69%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 37%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q3-fy25-by-bu',
      company: 'Microsoft',
      period: 'Q3 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q3-fy25-by-bu.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 70.1,
        notes: ['+13% Y/Y'],
        items: [
          {
            id: 'productivity_business_processes',
            label: 'Productivity & Business Processes',
            value: 29.9,
            notes: ['+10% Y/Y', '58% operating margin', '+2pp Y/Y'],
          },
          {
            id: 'intelligent_cloud',
            label: 'Intelligent Cloud',
            value: 26.8,
            notes: ['+21% Y/Y', '41% operating margin', '(1pp) Y/Y'],
          },
          {
            id: 'more_personal_computing',
            label: 'More Personal Computing',
            value: 13.4,
            notes: ['+6% Y/Y', '26% operating margin', '+3pp Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 21.9 },
        operatingExpenses: {
          total: 16.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.2, notes: ['12% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.2, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.7, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.6 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.6,
        items: [{ id: 'other', label: 'Other', value: 0.6 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 48.1, notes: ['69% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 32.0, notes: ['46% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 25.8, notes: ['37% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +10%', '营业利润率 58%', '同比 +2 个百分点'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +21%', '营业利润率 41%', '同比 (1 个百分点)'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 +6%', '营业利润率 26%', '同比 +3 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 69%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 37%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q2-fy25',
      company: 'Microsoft',
      period: 'Q2 FY25',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 69.6,
        notes: [
          '+12% Y/Y',
          'Source chart business-line items sum to $69.5B versus reported revenue of $69.6B; retained as source business attribution with rounding tolerance.',
        ],
        items: [
          { id: 'server', label: 'Server', value: 23.6, notes: ['+21% Y/Y'] },
          { id: 'microsoft_365_commercial', label: 'Microsoft 365 Commercial', value: 21.1, notes: ['+15% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 6.6, notes: ['(7%) Y/Y'] },
          { id: 'linkedin', label: 'LinkedIn', value: 4.6, notes: ['+9% Y/Y'] },
          { id: 'windows_devices', label: 'Windows & Devices', value: 4.5, notes: ['+3% Y/Y'] },
          { id: 'search', label: 'Search', value: 3.5, notes: ['+12% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 5.6, notes: ['+7% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 21.8 },
        operatingExpenses: {
          total: 16.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.9, notes: ['11% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.4, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.8, notes: ['3% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.3 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 2.2,
        items: [{ id: 'other_expense', label: 'Other', value: 2.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 47.8, notes: ['69% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 31.7, notes: ['45% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 24.1, notes: ['35% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +12%', '来源图中的业务线合计为 $69.5B，报告收入为 $69.6B；保留来源业务归属并采用取整容差。'],
            items: [
              { id: 'server', label: '服务器', notes: ['同比 +21%'] },
              { id: 'microsoft_365_commercial', label: 'Microsoft 365 商业版', notes: ['同比 +15%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (7%)'] },
              { id: 'linkedin', label: 'LinkedIn', notes: ['同比 +9%'] },
              { id: 'windows_devices', label: 'Windows 与设备', notes: ['同比 +3%'] },
              { id: 'search', label: '搜索', notes: ['同比 +12%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +7%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (0 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 69%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 45%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q2-fy25-by-bu',
      company: 'Microsoft',
      period: 'Q2 FY25',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q2-fy25-by-bu.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 69.6,
        notes: ['+12% Y/Y'],
        items: [
          { id: 'productivity_business_processes', label: 'Productivity & Business Processes', value: 29.4, notes: ['+14% Y/Y', '57% operating margin'] },
          { id: 'intelligent_cloud', label: 'Intelligent Cloud', value: 25.5, notes: ['+20% Y/Y', '42% operating margin'] },
          { id: 'more_personal_computing', label: 'More Personal Computing', value: 14.7, notes: ['+0% Y/Y', '27% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 21.8 },
        operatingExpenses: {
          total: 16.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.9, notes: ['11% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.4, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.8, notes: ['3% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.3 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 2.2,
        items: [{ id: 'other_expense', label: 'Other', value: 2.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 47.8, notes: ['69% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 31.7, notes: ['45% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 24.1, notes: ['35% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +14%', '营业利润率 57%'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +20%', '营业利润率 42%'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 +0%', '营业利润率 27%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (0 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 69%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 45%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q2-fy26',
      company: 'Microsoft',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 81.3,
        notes: [
          '+17% Y/Y',
          'Source chart business-line items sum to $81.4B versus reported revenue of $81.3B; retained as source business attribution with rounding tolerance.',
        ],
        items: [
          { id: 'server', label: 'Server', value: 30.9, notes: ['+31% Y/Y'] },
          { id: 'microsoft_365_commercial', label: 'Microsoft 365 Commercial', value: 24.5, notes: ['+16% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 6.0, notes: ['(9%) Y/Y'] },
          { id: 'linkedin', label: 'LinkedIn', value: 5.1, notes: ['+11% Y/Y'] },
          { id: 'windows_devices', label: 'Windows & Devices', value: 4.5, notes: ['(1%) Y/Y'] },
          { id: 'search', label: 'Search', value: 3.8, notes: ['+7% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 6.6, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 26.0 },
        operatingExpenses: {
          total: 17.0,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.5, notes: ['10% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.6, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 9.8 },
      },
      otherIncome: {
        total: 10.0,
        items: [{ id: 'other', label: 'Other', value: 10.0 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 55.3, notes: ['68% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 38.3, notes: ['47% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 38.5, notes: ['47% margin', '+13pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +17%', '来源图中的业务线合计为 $81.4B，报告收入为 $81.3B；保留来源业务归属并采用取整容差。'],
            items: [
              { id: 'server', label: '服务器', notes: ['同比 +31%'] },
              { id: 'microsoft_365_commercial', label: 'Microsoft 365 商业版', notes: ['同比 +16%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (9%)'] },
              { id: 'linkedin', label: 'LinkedIn', notes: ['同比 +11%'] },
              { id: 'windows_devices', label: 'Windows 与设备', notes: ['同比 (1%)'] },
              { id: 'search', label: '搜索', notes: ['同比 +7%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +16%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 47%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 47%', '同比 +13 个百分点'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q2-fy26-by-bu',
      company: 'Microsoft',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q2-fy26-by-bu.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 81.3,
        notes: ['+17% Y/Y'],
        items: [
          { id: 'productivity_business_processes', label: 'Productivity & Business Processes', value: 34.1, notes: ['+16% Y/Y', '60% operating margin', '+3pp Y/Y'] },
          { id: 'intelligent_cloud', label: 'Intelligent Cloud', value: 32.9, notes: ['+29% Y/Y', '41% operating margin', '(1pp) Y/Y'] },
          { id: 'more_personal_computing', label: 'More Personal Computing', value: 14.3, notes: ['(3%) Y/Y', '32% operating margin', '+5pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 26.0 },
        operatingExpenses: {
          total: 17.0,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.5, notes: ['10% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.6, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 9.8 },
      },
      otherIncome: { total: 10.0, items: [{ id: 'other', label: 'Other', value: 10.0 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 55.3, notes: ['68% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 38.3, notes: ['47% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 38.5, notes: ['47% margin', '+13pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +16%', '营业利润率 60%', '同比 +3 个百分点'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +29%', '营业利润率 41%', '同比 (1 个百分点)'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 (3%)', '营业利润率 32%', '同比 +5 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 47%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 47%', '同比 +13 个百分点'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q3-fy26-by-bu',
      company: 'Microsoft',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q3-fy26-by-bu.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 82.9,
        notes: ['+18% Y/Y'],
        items: [
          {
            id: 'productivity_business_processes',
            label: 'Productivity & Business Processes',
            value: 35.0,
            notes: ['+17% Y/Y', '60% operating margin', '+2pp Y/Y'],
          },
          {
            id: 'intelligent_cloud',
            label: 'Intelligent Cloud',
            value: 34.7,
            notes: ['+30% Y/Y', '40% operating margin', '(2pp) Y/Y'],
          },
          {
            id: 'more_personal_computing',
            label: 'More Personal Computing',
            value: 13.2,
            notes: ['(1%) Y/Y', '28% operating margin', '+1pp Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 26.8 },
        operatingExpenses: {
          total: 17.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.9, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.8, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7.6 },
      },
      otherIncome: {
        total: 0.9,
        items: [{ id: 'other', label: 'Other', value: 0.9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 56.1, notes: ['68% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 38.4, notes: ['46% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 31.8, notes: ['38% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +17%', '营业利润率 60%', '同比 +2 个百分点'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +30%', '营业利润率 40%', '同比 (2 个百分点)'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 (1%)', '营业利润率 28%', '同比 +1 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q3-fy26',
      company: 'Microsoft',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q3-fy26.png',
      roundingTolerance: 3.1,
      revenue: {
        total: 82.9,
        notes: [
          '+18% Y/Y',
          'Source chart business-line items sum to $85.8B versus reported revenue of $82.9B; retained as source business attribution with classification/rounding tolerance.',
        ],
        items: [
          { id: 'server', label: 'Server', value: 35.6, notes: ['+32% Y/Y'] },
          { id: 'microsoft_365_commercial', label: 'Microsoft 365 Commercial', value: 25.6, notes: ['+17% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 5.3, notes: ['(7%) Y/Y'] },
          { id: 'linkedin', label: 'LinkedIn', value: 4.8, notes: ['+12% Y/Y'] },
          { id: 'windows_devices', label: 'Windows & Devices', value: 4.0, notes: ['(2%) Y/Y'] },
          { id: 'search', label: 'Search', value: 3.8, notes: ['+9% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 6.7, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 26.8 },
        operatingExpenses: {
          total: 17.7,
          notes: ['Operating expense detail shown in the source chart sums to $17.6B due to rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 8.9, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.8, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7.6 },
      },
      otherIncome: {
        total: 0.9,
        items: [{ id: 'other', label: 'Other', value: 0.9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 56.1, notes: ['68% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 38.4, notes: ['46% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 31.8, notes: ['38% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +18%', 'Source chart business-line items sum to $85.8B versus reported 收入 of $82.9B；retained as source business attribution with classification/rounding tolerance.'],
            items: [
              { id: 'server', label: '服务器', notes: ['同比 +32%'] },
              { id: 'microsoft_365_commercial', label: 'Microsoft 365 商业版', notes: ['同比 +17%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (7%)'] },
              { id: 'linkedin', label: 'LinkedIn', notes: ['同比 +12%'] },
              { id: 'windows_devices', label: 'Windows 与设备', notes: ['同比 (2%)'] },
              { id: 'search', label: '搜索', notes: ['同比 +9%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +16%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 +1 个百分点'] },
          },
        },
      },
    }
  );

  ssot.records.push({
    key: 'microsoft-q2-fy23',
    company: 'Microsoft',
    period: 'Q2 FY23',
    periodNote: 'Ending Dec. 2022',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/microsoft-q2-fy23.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 52.7,
      notes: ['+2% Y/Y'],
      items: [
        { id: 'productivity_business_processes', label: 'Productivity & Business Processes', value: 17.0, notes: ['+7% Y/Y', '48% operating margin'] },
        { id: 'intelligent_cloud', label: 'Intelligent Cloud', value: 21.5, notes: ['+18% Y/Y', '41% operating margin'] },
        { id: 'more_personal_computing', label: 'More Personal Computing', value: 14.2, notes: ['(19%) Y/Y', '23% operating margin'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 17.5 },
      operatingExpenses: {
        total: 14.9,
        notes: ['Source-chart detail sums to $14.8B because of displayed rounding.'],
        items: [
          { id: 'rnd', label: 'R&D', value: 6.8 },
          { id: 'sm', label: 'S&M', value: 5.7 },
          { id: 'ga', label: 'G&A', value: 2.3 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 3.9 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0.1, items: [{ id: 'other', label: 'Other', value: 0.1 }] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 35.3, notes: ['67% margin', '(10pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 20.4, notes: ['39% margin', '(10pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 16.4, notes: ['31% margin', '(10pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2023 财年第二季度',
        periodNote: '截至 2022 年 12 月',
        revenue: {
          notes: ['同比 +2%'],
          items: [
            { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +7%', '营业利润率 48%'] },
            { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +18%', '营业利润率 41%'] },
            { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 (19%)', '营业利润率 23%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['来源图中的明细因显示取整合计为 $14.8B。'],
            items: [
              { id: 'rnd', label: '研发' },
              { id: 'sm', label: '销售与市场' },
              { id: 'ga', label: '管理费用' },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 67%', '同比 (10 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 39%', '同比 (10 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 31%', '同比 (10 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push(
    {
      key: 'microsoft-q1-fy24',
      company: 'Microsoft',
      period: 'Q1 FY24',
      periodNote: 'Ending Sept. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 56.5,
        notes: ['+13% Y/Y'],
        items: [
          { id: 'server', label: 'Server', value: 22.3, notes: ['+21% Y/Y'] },
          { id: 'office', label: 'Office', value: 13.1, notes: ['+13% Y/Y'] },
          { id: 'windows', label: 'Windows', value: 5.6, notes: ['+5% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 3.9, notes: ['+9% Y/Y'] },
          { id: 'linkedin', label: 'LinkedIn', value: 3.9, notes: ['+9% Y/Y'] },
          { id: 'search', label: 'Search', value: 3.1, notes: ['+5% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 4.6, notes: ['+0% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 16.3 },
        operatingExpenses: {
          total: 13.3,
          notes: ['Source chart detail sums to $13.4B because of displayed rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 6.7, notes: ['12% of revenue'] },
            { id: 'sm', label: 'S&M', value: 5.2, notes: ['9% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.5, notes: ['3% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.0 },
      },
      otherIncome: { total: 0.4, items: [{ id: 'other', label: 'Other', value: 0.4 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 40.2, notes: ['71% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 26.9, notes: ['48% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 22.3, notes: ['39% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'server', label: '服务器', notes: ['同比 +21%'] },
              { id: 'office', label: 'Office', notes: ['同比 +13%'] },
              { id: 'windows', label: 'Windows', notes: ['同比 +5%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +9%'] },
              { id: 'linkedin', label: 'LinkedIn', notes: ['同比 +9%'] },
              { id: 'search', label: '搜索', notes: ['同比 +5%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +0%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图中的明细因显示取整合计为 $13.4B。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 71%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 48%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 39%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q1-fy24-by-bu',
      company: 'Microsoft',
      period: 'Q1 FY24',
      periodNote: 'Ending Sept. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q1-fy24-by-bu.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 56.5,
        notes: [
          '+13% Y/Y',
          'Source chart business-unit items sum to $56.6B versus reported revenue of $56.5B; retained with display-rounding tolerance.',
        ],
        items: [
          { id: 'productivity_business_processes', label: 'Productivity & Business Processes', value: 18.6, notes: ['+13% Y/Y', '54% operating margin'] },
          { id: 'intelligent_cloud', label: 'Intelligent Cloud', value: 24.3, notes: ['+19% Y/Y', '48% operating margin'] },
          { id: 'more_personal_computing', label: 'More Personal Computing', value: 13.7, notes: ['+3% Y/Y', '31% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 16.3 },
        operatingExpenses: {
          total: 13.3,
          notes: ['Source chart detail sums to $13.4B because of displayed rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 6.7, notes: ['12% of revenue'] },
            { id: 'sm', label: 'S&M', value: 5.2, notes: ['9% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.5, notes: ['3% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.0 },
      },
      otherIncome: { total: 0.4, items: [{ id: 'other', label: 'Other', value: 0.4 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 40.2, notes: ['71% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 26.9, notes: ['48% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 22.3, notes: ['39% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +13%', '来源图中的业务部门合计为 $56.6B，报告收入为 $56.5B；保留来源值并采用显示取整容差。'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +13%', '营业利润率 54%'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +19%', '营业利润率 48%'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 +3%', '营业利润率 31%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图中的明细因显示取整合计为 $13.4B。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 71%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 48%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 39%', '同比 +4 个百分点'] },
          },
        },
      },
    }
  );
  ssot.records.push(
    {
      key: 'microsoft-q2-fy24',
      company: 'Microsoft',
      period: 'Q2 FY24',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 62.0,
        notes: ['+18% Y/Y', 'Source-chart business-line detail sums to $62.1B because of displayed rounding.'],
        items: [
          { id: 'server', label: 'Server', value: 24.0, notes: ['+22% Y/Y'] },
          { id: 'office', label: 'Office', value: 13.5, notes: ['+14% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 7.1, notes: ['+49% Y/Y'] },
          { id: 'windows', label: 'Windows', value: 5.3, notes: ['+9% Y/Y'] },
          { id: 'linkedin', label: 'LinkedIn', value: 4.2, notes: ['+9% Y/Y'] },
          { id: 'search', label: 'Search', value: 3.2, notes: ['+0% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 4.8, notes: ['+3% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 19.6 },
        operatingExpenses: {
          total: 15.4,
          notes: ['Source-chart detail sums to $15.3B because of displayed rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 7.1, notes: ['12% of revenue'] },
            { id: 'sm', label: 'S&M', value: 6.2, notes: ['10% of revenue'] },
            { id: 'ga', label: 'G&A', value: 2.0, notes: ['3% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.7 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.5, items: [{ id: 'other', label: 'Other', value: 0.5 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 42.4, notes: ['68% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 27.0, notes: ['44% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 21.9, notes: ['35% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +18%', '来源图中的业务线明细因显示取整合计为 $62.1B。'],
            items: [
              { id: 'server', label: '服务器', notes: ['同比 +22%'] },
              { id: 'office', label: 'Office', notes: ['同比 +14%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +49%'] },
              { id: 'windows', label: 'Windows', notes: ['同比 +9%'] },
              { id: 'linkedin', label: 'LinkedIn', notes: ['同比 +9%'] },
              { id: 'search', label: '搜索', notes: ['同比 +0%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +3%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图中的明细因显示取整合计为 $15.3B。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 44%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q2-fy24-by-bu',
      company: 'Microsoft',
      period: 'Q2 FY24',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q2-fy24-by-bu.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 62.0,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'productivity_business_processes', label: 'Productivity & Business Processes', value: 19.2, notes: ['+13% Y/Y', '53% operating margin'] },
          { id: 'intelligent_cloud', label: 'Intelligent Cloud', value: 25.9, notes: ['+20% Y/Y', '48% operating margin'] },
          { id: 'more_personal_computing', label: 'More Personal Computing', value: 16.9, notes: ['+19% Y/Y', '25% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 19.6 },
        operatingExpenses: {
          total: 15.4,
          notes: ['Source-chart detail sums to $15.3B because of displayed rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 7.1, notes: ['12% of revenue'] },
            { id: 'sm', label: 'S&M', value: 6.2, notes: ['10% of revenue'] },
            { id: 'ga', label: 'G&A', value: 2.0, notes: ['3% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.7 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.5, items: [{ id: 'other', label: 'Other', value: 0.5 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 42.4, notes: ['68% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 27.0, notes: ['44% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 21.9, notes: ['35% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +13%', '营业利润率 53%'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +20%', '营业利润率 48%'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 +19%', '营业利润率 25%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图中的明细因显示取整合计为 $15.3B。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 44%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 +4 个百分点'] },
          },
        },
      },
    }
  );
  const microsoftQ1Fy26Common = () => ({
    company: 'Microsoft',
    period: 'Q1 FY26',
    periodNote: 'Ending Sept. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    roundingTolerance: 0.15,
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 24.0 },
      operatingExpenses: {
        total: 15.7,
        notes: ['Operating expense detail shown in the source chart sums to $15.6B due to displayed rounding.'],
        items: [
          { id: 'rnd', label: 'R&D', value: 8.1, notes: ['10% of revenue', '(1pp) Y/Y'] },
          { id: 'sm', label: 'S&M', value: 5.7, notes: ['7% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 1.8, notes: ['2% of revenue', '(0pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 6.6 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 3.7, items: [{ id: 'other', label: 'Other', value: 3.7 }] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 53.6, notes: ['69% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 38.0, notes: ['49% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 27.7, notes: ['36% margin', '(2pp) Y/Y'] },
    },
  });
  const microsoftQ1Fy26ZhCommon = () => ({
    period: '2026 财年第一季度',
    periodNote: '截至 2025 年 9 月',
    costs: {
      costOfRevenue: { label: '收入成本' },
      operatingExpenses: {
        notes: ['来源图中的运营费用明细因显示取整合计为 $15.6B。'],
        items: [
          { id: 'rnd', label: '研发', notes: ['占收入 10%', '同比 (1 个百分点)'] },
          { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
          { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
        ],
      },
      tax: { label: '税费' },
    },
    otherExpenses: { items: [{ id: 'other', label: '其他' }] },
    profit: {
      gross: { label: '毛利润', notes: ['利润率 69%', '同比 (0 个百分点)'] },
      operating: { label: '营业利润', notes: ['利润率 49%', '同比 +2 个百分点'] },
      net: { label: '净利润', notes: ['利润率 36%', '同比 (2 个百分点)'] },
    },
  });

  ssot.records.push(
    {
      key: 'microsoft-q1-fy26',
      ...microsoftQ1Fy26Common(),
      sourceImage: 'input/processed/microsoft-q1-fy26.png',
      revenue: {
        total: 77.7,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'server', label: 'Server', value: 28.9, notes: ['+30% Y/Y'] },
          { id: 'microsoft_365_commercial', label: 'Microsoft 365 Commercial', value: 24.0, notes: ['+17% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 5.5, notes: ['(2%) Y/Y'] },
          { id: 'linkedin', label: 'LinkedIn', value: 4.7, notes: ['+10% Y/Y'] },
          { id: 'windows_devices', label: 'Windows & Devices', value: 4.6, notes: ['+5% Y/Y'] },
          { id: 'search', label: 'Search', value: 3.7, notes: ['+15% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 6.3, notes: ['+15% Y/Y'] },
        ],
      },
      i18n: {
        zh: {
          ...microsoftQ1Fy26ZhCommon(),
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'server', label: '服务器', notes: ['同比 +30%'] },
              { id: 'microsoft_365_commercial', label: 'Microsoft 365 商业版', notes: ['同比 +17%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (2%)'] },
              { id: 'linkedin', label: 'LinkedIn', notes: ['同比 +10%'] },
              { id: 'windows_devices', label: 'Windows 与设备', notes: ['同比 +5%'] },
              { id: 'search', label: '搜索', notes: ['同比 +15%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +15%'] },
            ],
          },
        },
      },
    },
    {
      key: 'microsoft-q1-fy26-by-bu',
      ...microsoftQ1Fy26Common(),
      sourceImage: 'input/processed/microsoft-q1-fy26-by-bu.png',
      revenue: {
        total: 77.7,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'productivity_business_processes', label: 'Productivity & Business Processes', value: 33.0, notes: ['+17% Y/Y', '62% operating margin', '+3pp Y/Y'] },
          { id: 'intelligent_cloud', label: 'Intelligent Cloud', value: 30.9, notes: ['+28% Y/Y', '43% operating margin', '(0pp) Y/Y'] },
          { id: 'more_personal_computing', label: 'More Personal Computing', value: 13.8, notes: ['+4% Y/Y', '30% operating margin', '+3pp Y/Y'] },
        ],
      },
      i18n: {
        zh: {
          ...microsoftQ1Fy26ZhCommon(),
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +17%', '营业利润率 62%', '同比 +3 个百分点'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +28%', '营业利润率 43%', '同比 (0 个百分点)'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 +4%', '营业利润率 30%', '同比 +3 个百分点'] },
            ],
          },
        },
      },
    }
  );

  const microsoftQ4Fy25Common = () => ({
    company: 'Microsoft',
    period: 'Q4 FY25',
    periodNote: 'Ending June 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    roundingTolerance: 0.15,
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 24.0 },
      operatingExpenses: {
        total: 18.1,
        items: [
          { id: 'rnd', label: 'R&D', value: 8.8, notes: ['12% of revenue', '(1pp) Y/Y'] },
          { id: 'sm', label: 'S&M', value: 7.3, notes: ['10% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 2.0, notes: ['3% of revenue', '(1pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 5.4 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 1.7,
      items: [{ id: 'other', label: 'Other', value: 1.7 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 52.4, notes: ['69% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 34.3, notes: ['45% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 27.2, notes: ['36% margin', '+2pp Y/Y'] },
    },
  });

  const microsoftQ4Fy25ZhCommon = () => ({
    period: '2025 财年第四季度',
    periodNote: '截至 2025 年 6 月',
    costs: {
      costOfRevenue: { label: '收入成本' },
      operatingExpenses: {
        items: [
          { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 (1 个百分点)'] },
          { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 (1 个百分点)'] },
          { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] },
        ],
      },
      tax: { label: '税费' },
    },
    otherExpenses: { items: [{ id: 'other', label: '其他' }] },
    profit: {
      gross: { label: '毛利润', notes: ['利润率 69%', '同比 (1 个百分点)'] },
      operating: { label: '营业利润', notes: ['利润率 45%', '同比 +2 个百分点'] },
      net: { label: '净利润', notes: ['利润率 36%', '同比 +2 个百分点'] },
    },
  });

  ssot.records.push(
    {
      key: 'microsoft-q4-fy25',
      ...microsoftQ4Fy25Common(),
      sourceImage: 'input/processed/microsoft-q4-fy25.png',
      revenue: {
        total: 76.4,
        notes: [
          '+18% Y/Y',
          'Source chart business-line items sum to $76.3B versus reported revenue of $76.4B; retained as source business attribution with rounding tolerance.',
        ],
        items: [
          { id: 'server', label: 'Server', value: 27.8, notes: ['+27% Y/Y'] },
          { id: 'microsoft_365_commercial', label: 'Microsoft 365 Commercial', value: 24.3, notes: ['+16% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 5.5, notes: ['+10% Y/Y'] },
          { id: 'linkedin', label: 'LinkedIn', value: 4.6, notes: ['+9% Y/Y'] },
          { id: 'windows_devices', label: 'Windows & Devices', value: 4.3, notes: ['+2% Y/Y'] },
          { id: 'search', label: 'Search', value: 3.6, notes: ['+17% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 6.2, notes: ['+15% Y/Y'] },
        ],
      },
      i18n: {
        zh: {
          ...microsoftQ4Fy25ZhCommon(),
          revenue: {
            notes: ['同比 +18%', '来源图中的业务线合计为 $76.3B，报告收入为 $76.4B；保留来源业务归属并采用取整容差。'],
            items: [
              { id: 'server', label: '服务器', notes: ['同比 +27%'] },
              { id: 'microsoft_365_commercial', label: 'Microsoft 365 商业版', notes: ['同比 +16%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +10%'] },
              { id: 'linkedin', label: 'LinkedIn', notes: ['同比 +9%'] },
              { id: 'windows_devices', label: 'Windows 与设备', notes: ['同比 +2%'] },
              { id: 'search', label: '搜索', notes: ['同比 +17%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +15%'] },
            ],
          },
        },
      },
    },
    {
      key: 'microsoft-q4-fy25-by-bu',
      ...microsoftQ4Fy25Common(),
      sourceImage: 'input/processed/microsoft-q4-fy25-by-bu.png',
      revenue: {
        total: 76.4,
        notes: [
          '+18% Y/Y',
          'Source chart business-unit items sum to $76.5B versus reported revenue of $76.4B; retained as source business attribution with rounding tolerance.',
        ],
        items: [
          { id: 'productivity_business_processes', label: 'Productivity & Business Processes', value: 33.1, notes: ['+16% Y/Y', '57% operating margin', '+5pp Y/Y'] },
          { id: 'intelligent_cloud', label: 'Intelligent Cloud', value: 29.9, notes: ['+26% Y/Y', '41% operating margin', '(1pp) Y/Y'] },
          { id: 'more_personal_computing', label: 'More Personal Computing', value: 13.5, notes: ['+9% Y/Y', '24% operating margin', '+4pp Y/Y'] },
        ],
      },
      i18n: {
        zh: {
          ...microsoftQ4Fy25ZhCommon(),
          revenue: {
            notes: ['同比 +18%', '来源图中的业务单元合计为 $76.5B，报告收入为 $76.4B；保留来源业务归属并采用取整容差。'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +16%', '营业利润率 57%', '同比 +5 个百分点'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +26%', '营业利润率 41%', '同比 (1 个百分点)'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 +9%', '营业利润率 24%', '同比 +4 个百分点'] },
            ],
          },
        },
      },
    }
  );
})(window);
