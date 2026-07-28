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
      key: 'tesla-q2-fy23',
      company: 'Tesla',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tesla-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 24.9,
        notes: ['+47% Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 21.3,
            notes: ['+46% Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 20.4, notes: ['+49% Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.3, notes: ['(18%) Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.6, notes: ['(4%) Y/Y'] },
            ],
          },
          {
            id: 'energy_generation_storage',
            label: 'Energy generation & storage',
            value: 1.5,
            notes: ['+74% Y/Y'],
          },
          { id: 'services', label: 'Services', value: 2.2, notes: ['+47% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.4 },
        operatingExpenses: {
          total: 2.1,
          items: [
            { id: 'sga', label: 'SG&A', value: 1.2 },
            { id: 'rnd', label: 'R&D', value: 0.9 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.5,
        items: [
          { id: 'other', label: 'Other', value: 0.3 },
          { id: 'interest', label: 'Interest', value: 0.2 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.5, notes: ['18% margin', '(7pp) Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 2.4,
          notes: ['10% margin', '(5pp) Y/Y'],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 2.6, notes: ['11% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 +47%'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 +46%'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 +49%'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 (18%)'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (4%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +74%'] },
              { id: 'services', label: '服务', notes: ['同比 +47%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理' },
                { id: 'rnd', label: '研发' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 18%', '同比 (7 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 10%', '同比 (5 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tesla-q3-fy22',
      company: 'Tesla',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/tesla-q3-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 21.5,
        notes: ['+56% Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 18.7,
            notes: ['+55% Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 17.8, notes: ['+56% Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.6, notes: ['+61% Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.3, notes: ['+3% Y/Y'] },
            ],
          },
          { id: 'energy_generation_storage', label: 'Energy generation & storage', value: 1.1, notes: ['+39% Y/Y'] },
          { id: 'services', label: 'Services', value: 1.6, notes: ['+84% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 16.1 },
        operatingExpenses: {
          total: 1.7,
          items: [
            { id: 'sga', label: 'SG&A', value: 1.0 },
            { id: 'rnd', label: 'R&D', value: 0.7 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.033,
        items: [{ id: 'interest', label: 'Interest', value: 0.033 }],
      },
      otherExpenses: {
        total: 0.085,
        items: [{ id: 'other', label: 'Other', value: 0.085 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.4, notes: ['25% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.7, notes: ['17% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.3, notes: ['16% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 +56%'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 +55%'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 +56%'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 +61%'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 +3%'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +39%'] },
              { id: 'services', label: '服务', notes: ['同比 +84%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理' },
                { id: 'rnd', label: '研发' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 25%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 16%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tesla-q2-fy24',
      company: 'Tesla',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tesla-q2-fy24.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 25.5,
        notes: ['+2% Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 19.9,
            notes: ['(7%) Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 18.5, notes: ['(9%) Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.9, notes: ['+216% Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.5, notes: ['(19%) Y/Y'] },
            ],
          },
          { id: 'energy_generation_storage', label: 'Energy generation & storage', value: 3.0, notes: ['+100% Y/Y'] },
          { id: 'services', label: 'Services', value: 2.6, notes: ['+21% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.9 },
        operatingExpenses: {
          total: 3.0,
          items: [
            { id: 'sga', label: 'SG&A', value: 1.3, notes: ['5% of revenue', '+0pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 1.1, notes: ['4% of revenue', '+0pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.6, notes: ['2% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'other', label: 'Other', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.6, notes: ['18% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.6, notes: ['6% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.5, notes: ['6% margin', '(5pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 (7%)'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 (9%)'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 +216%'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (19%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +100%'] },
              { id: 'services', label: '服务', notes: ['同比 +21%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理', notes: ['占收入 5%', '同比 +0 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 4%', '同比 +0 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 2%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 18%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 (5 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tesla-q1-fy23',
      company: 'Tesla',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/tesla-q1-fy23.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 23.3,
        notes: ['+24% Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 20.0,
            notes: ['+18% Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 18.9, notes: ['+22% Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.5, notes: ['(23%) Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.6, notes: ['(16%) Y/Y'] },
            ],
          },
          { id: 'energy_generation_storage', label: 'Energy generation & storage', value: 1.5, notes: ['+148% Y/Y'] },
          { id: 'services', label: 'Services', value: 1.8, notes: ['+44% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 18.8 },
        operatingExpenses: {
          total: 1.8,
          notes: ['Source chart rounds R&D and SG&A to $1.8B total operating expenses.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 1.1 },
            { id: 'rnd', label: 'R&D', value: 0.8 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
      },
      otherExpenses: {
        total: 0.048,
        items: [{ id: 'other', label: 'Other', value: 0.048 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.5, notes: ['19% margin', '(10pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.7, notes: ['11% margin', '(8pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.5, notes: ['11% margin', '(7pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +24%'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 +18%'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 +22%'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 (23%)'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (16%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +148%'] },
              { id: 'services', label: '服务', notes: ['同比 +44%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图将研发与销售、一般及行政费用取整为 $1.8B 运营费用合计。'],
              items: [
                { id: 'sga', label: '销售及管理' },
                { id: 'rnd', label: '研发' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 19%', '同比 (10 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 (8 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 (7 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tesla-q3-fy23',
      company: 'Tesla',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/tesla-q3-fy23.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 23.4,
        notes: ['+9% Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 19.6,
            notes: ['+5% Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 18.6, notes: ['+4% Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.6, notes: ['+94% Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.5, notes: ['(21%) Y/Y'] },
            ],
          },
          { id: 'energy_generation_storage', label: 'Energy generation & storage', value: 1.6, notes: ['+40% Y/Y'] },
          { id: 'services', label: 'Services', value: 2.2, notes: ['+32% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 19.2 },
        operatingExpenses: {
          total: 2.4,
          notes: ['Source chart rounds SG&A and R&D to $2.4B total operating expenses.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 1.3 },
            { id: 'rnd', label: 'R&D', value: 1.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.237,
        items: [
          { id: 'other', label: 'Other', value: 0.037 },
          { id: 'interest', label: 'Interest', value: 0.2 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.2, notes: ['18% margin', '(7pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['8% margin', '(10pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['8% margin', '(8pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 +5%'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 +4%'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 +94%'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (21%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +40%'] },
              { id: 'services', label: '服务', notes: ['同比 +32%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图将销售、一般及管理费用与研发费用取整为 $2.4B 运营费用合计。'],
              items: [
                { id: 'sga', label: '销售及管理' },
                { id: 'rnd', label: '研发' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 18%', '同比 (7 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 (10 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 (8 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tesla-q4-fy23',
      company: 'Tesla',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tesla-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 25.2,
        notes: ['+3% Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 21.6,
            notes: ['+0% Y/Y', 'Source chart rounds the three displayed auto components to $21.5B.'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 20.6, notes: ['+2% Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.4, notes: ['(7%) Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.5, notes: ['(17%) Y/Y'] },
            ],
          },
          { id: 'energy_generation_storage', label: 'Energy generation & storage', value: 1.4, notes: ['+10% Y/Y'] },
          { id: 'services', label: 'Services', value: 2.2, notes: ['+27% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.7 },
        operatingExpenses: {
          total: 2.4,
          items: [
            { id: 'sga', label: 'SG&A', value: 1.3 },
            { id: 'rnd', label: 'R&D', value: 1.1 },
          ],
        },
      },
      otherIncome: {
        total: 5.9,
        items: [
          { id: 'other', label: 'Other', value: 0.1 },
          { id: 'tax_benefit', label: 'Tax benefit', value: 5.8 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 4.4,
          notes: ['18% margin', '(6pp) Y/Y', 'Revenue less cost of revenue rounds to $4.5B.'],
        },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 2.1,
          notes: ['8% margin', '(8pp) Y/Y', 'Gross profit less operating expenses rounds to $2.0B.'],
        },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 7.9,
          notes: ['32% margin', '+16pp Y/Y', 'Operating profit plus displayed other income rounds to $8.0B.'],
        },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 +0%', '来源图中三个汽车业务分项四舍五入后合计为 $21.5B。'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 +2%'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 (7%)'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (17%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +10%'] },
              { id: 'services', label: '服务', notes: ['同比 +27%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理' },
                { id: 'rnd', label: '研发' },
              ],
            },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
              { id: 'tax_benefit', label: '税收收益' },
            ],
          },
          profit: {
            gross: {
              label: '毛利润',
              notes: ['利润率 18%', '同比 (6 个百分点)', '收入减去收入成本四舍五入为 $4.5B。'],
            },
            operating: {
              label: '营业利润',
              notes: ['利润率 8%', '同比 (8 个百分点)', '毛利润减去运营费用四舍五入为 $2.0B。'],
            },
            net: {
              label: '净利润',
              notes: ['利润率 32%', '同比 +16 个百分点', '营业利润加上图中其他收入四舍五入为 $8.0B。'],
            },
          },
        },
      },
    },
    {
      key: 'tesla-q4-fy22',
      company: 'Tesla',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/tesla-q4-fy22.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 24.3,
        notes: ['+37% Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 21.3,
            notes: ['+33% Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 20.2, notes: ['+35% Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.6, notes: ['(5%) Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.5, notes: ['+49% Y/Y'] },
            ],
          },
          { id: 'energy_generation_storage', label: 'Energy generation & storage', value: 1.3, notes: ['+90% Y/Y'] },
          { id: 'services', label: 'Services', value: 1.7, notes: ['+60% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 18.5 },
        operatingExpenses: {
          total: 1.9,
          notes: ['Source chart rounds the component total to $1.9B operating expenses.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 1.0 },
            { id: 'rnd', label: 'R&D', value: 0.8 },
            { id: 'restructuring', label: 'Restructuring', value: 0.034 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      otherExpenses: {
        total: 0.042,
        items: [{ id: 'other', label: 'Other', value: 0.042 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.8, notes: ['24% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.9, notes: ['16% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.7, notes: ['15% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 +37%'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 +33%'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 +35%'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (5%)'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 +49%'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +90%'] },
              { id: 'services', label: '服务', notes: ['同比 +60%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图将分项合计取整为 $1.9B 运营费用。'],
              items: [
                { id: 'sga', label: '销售及管理' },
                { id: 'rnd', label: '研发' },
                { id: 'restructuring', label: '重组' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 24%', '同比 (4 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 15%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tesla-q4-fy24',
      company: 'Tesla',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tesla-q4-fy24.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 25.7,
        notes: ['+2% Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 19.8,
            notes: ['(8%) Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 18.7, notes: ['(10%) Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.7, notes: ['+60% Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.4, notes: ['(11%) Y/Y'] },
            ],
          },
          {
            id: 'energy_generation_storage',
            label: 'Energy generation & storage',
            value: 3.1,
            notes: ['+113% Y/Y'],
          },
          { id: 'services', label: 'Services', value: 2.8, notes: ['+31% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 21.5 },
        operatingExpenses: {
          total: 2.6,
          items: [
            { id: 'sga', label: 'SG&A', value: 1.3, notes: ['5% of revenue', '+0pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 1.3, notes: ['5% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 1.1,
        items: [
          { id: 'other', label: 'Other', value: 0.8 },
          { id: 'interest', label: 'Interest', value: 0.3 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.2, notes: ['16% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.6, notes: ['6% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['9% margin', '(22pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 (8%)'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 (10%)'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 +60%'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (11%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +113%'] },
              { id: 'services', label: '服务', notes: ['同比 +31%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理', notes: ['占收入 5%', '同比 +0 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 5%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 16%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 (22 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tesla-q3-fy24',
      company: 'Tesla',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tesla-q3-fy24.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 25.2,
        notes: ['+8% Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 20.0,
            notes: ['+2% Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 18.8, notes: ['+1% Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.7, notes: ['+33% Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.4, notes: ['(9%) Y/Y'] },
            ],
          },
          {
            id: 'energy_generation_storage',
            label: 'Energy generation & storage',
            value: 2.4,
            notes: ['+52% Y/Y'],
          },
          { id: 'services', label: 'Services', value: 2.8, notes: ['+29% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.2 },
        operatingExpenses: {
          total: 2.3,
          items: [
            { id: 'sga', label: 'SG&A', value: 1.2, notes: ['5% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 1.0, notes: ['4% of revenue', '(1pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
      },
      otherExpenses: {
        total: 0.3,
        items: [{ id: 'other', label: 'Other', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.0, notes: ['20% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.7, notes: ['11% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['9% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 +2%'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 +1%'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 +33%'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (9%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +52%'] },
              { id: 'services', label: '服务', notes: ['同比 +29%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理', notes: ['占收入 5%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 4%', '同比 (1 个百分点)'] },
                { id: 'restructuring', label: '重组' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 20%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tesla-q1-fy24',
      company: 'Tesla',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tesla-q1-fy24.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 21.3,
        notes: ['(9%) Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 17.4,
            notes: ['(13%) Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 16.5, notes: ['(13%) Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.4, notes: ['(15%) Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.5, notes: ['(16%) Y/Y'] },
            ],
          },
          { id: 'energy_generation_storage', label: 'Energy generation & storage', value: 1.6, notes: ['+7% Y/Y'] },
          { id: 'services', label: 'Services', value: 2.3, notes: ['+25% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 17.6 },
        operatingExpenses: {
          total: 2.5,
          notes: ['Source chart rounds R&D and SG&A to $2.5B total operating expenses.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 1.2, notes: ['5% of revenue'] },
            { id: 'sga', label: 'SG&A', value: 1.4, notes: ['6% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other', label: 'Other', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.7, notes: ['17% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.2, notes: ['5% margin', '(6pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.1, notes: ['5% margin', '(6pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 (9%)'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 (13%)'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 (13%)'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 (15%)'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (16%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +7%'] },
              { id: 'services', label: '服务', notes: ['同比 +25%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图将研发与销售、一般及行政费用取整为 $2.5B 运营费用合计。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 5%'] },
                { id: 'sga', label: '销售及管理', notes: ['占收入 6%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 17%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 (6 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (6 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tesla-q1-fy25',
      company: 'Tesla',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tesla-q1-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 19.3,
        notes: ['(9%) Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 14.0,
            notes: ['(20%) Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 12.9, notes: ['(21%) Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.6, notes: ['+35% Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.4, notes: ['(6%) Y/Y'] },
            ],
          },
          { id: 'energy_generation_storage', label: 'Energy generation & storage', value: 2.7, notes: ['+67% Y/Y'] },
          { id: 'services', label: 'Services', value: 2.6, notes: ['+15% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 16.2 },
        operatingExpenses: {
          total: 2.8,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.4, notes: ['7% of revenue', '+2pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.3, notes: ['6% of revenue', '+0pp Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other_net', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.2, notes: ['16% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.4, notes: ['2% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['2% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 (9%)'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 (20%)'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 (21%)'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 +35%'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (6%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +67%'] },
              { id: 'services', label: '服务', notes: ['同比 +15%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 +2 个百分点'] },
                { id: 'sga', label: '销售及管理', notes: ['占收入 6%', '同比 +0 个百分点'] },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          otherExpenses: { items: [{ id: 'other_net', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 16%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 2%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tesla-q3-fy25',
      company: 'Tesla',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tesla-q3-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 28.1,
        notes: ['+12% Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 21.2,
            notes: ['+6% Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 20.4, notes: ['+8% Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.4, notes: ['(44%) Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.4, notes: ['(4%) Y/Y'] },
            ],
          },
          { id: 'energy_generation_storage', label: 'Energy generation & storage', value: 3.4, notes: ['+44% Y/Y'] },
          { id: 'services', label: 'Services', value: 3.5, notes: ['+25% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 23.0 },
        operatingExpenses: {
          total: 3.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.6, notes: ['6% of revenue', '+2pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.6, notes: ['6% of revenue', '+1pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.2, notes: ['1% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.1, notes: ['18% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.6, notes: ['6% margin', '(5pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.4, notes: ['5% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 +6%'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 +8%'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 (44%)'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (4%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +44%'] },
              { id: 'services', label: '服务', notes: ['同比 +25%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 6%', '同比 +2 个百分点'] },
                { id: 'sga', label: '销售及管理', notes: ['占收入 6%', '同比 +1 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 18%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 (5 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tesla-q2-fy25',
      company: 'Tesla',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tesla-q2-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 22.5,
        notes: ['(12%) Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 16.7,
            notes: ['(16%) Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 15.8, notes: ['(15%) Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.4, notes: ['(51%) Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.4, notes: ['(5%) Y/Y'] },
            ],
          },
          {
            id: 'energy_generation_storage',
            label: 'Energy generation & storage',
            value: 2.8,
            notes: ['(7%) Y/Y'],
          },
          { id: 'services', label: 'Services', value: 3.0, notes: ['+17% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 18.6 },
        operatingExpenses: {
          total: 3.0,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.6, notes: ['7% of revenue', '+3pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.4, notes: ['6% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.6,
        items: [
          { id: 'interest', label: 'Interest', value: 0.3 },
          { id: 'other', label: 'Other', value: 0.3 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.9, notes: ['17% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.9, notes: ['4% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['5% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 (12%)'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 (16%)'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 (15%)'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 (51%)'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (5%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 (7%)'] },
              { id: 'services', label: '服务', notes: ['同比 +17%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 +3 个百分点'] },
                { id: 'sga', label: '销售及管理', notes: ['占收入 6%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'interest', label: '利息' },
              { id: 'other', label: '其他' },
            ],
          },
          otherExpenses: { items: [] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 17%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tesla-q4-fy25',
      company: 'Tesla',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tesla-q4-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 24.9,
        notes: ['(3%) Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 17.8,
            notes: ['(11%) Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 16.8, notes: ['(10%) Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.5, notes: ['(22%) Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.4, notes: ['(10%) Y/Y'] },
            ],
          },
          { id: 'energy_generation_storage', label: 'Energy generation & storage', value: 3.8, notes: ['+25% Y/Y'] },
          { id: 'services', label: 'Services', value: 3.4, notes: ['+18% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 19.9 },
        operatingExpenses: {
          total: 3.6,
          notes: ['Source chart rounds the component total to $3.6B operating expenses.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 1.8, notes: ['7% of revenue', '+2pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.7, notes: ['7% of revenue', '+2pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.2, notes: ['1% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
      },
      otherExpenses: {
        total: 0.6,
        items: [{ id: 'other', label: 'Other', value: 0.6 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.0, notes: ['20% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.4, notes: ['6% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.9, notes: ['3% margin', '(6pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 (3%)'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 (11%)'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 (10%)'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 (22%)'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (10%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 +25%'] },
              { id: 'services', label: '服务', notes: ['同比 +18%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图将分项合计取整为 $3.6B 运营费用。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 +2 个百分点'] },
                { id: 'sga', label: '销售及管理', notes: ['占收入 7%', '同比 +2 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 20%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 (6 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tesla-q1-fy26',
      company: 'Tesla',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tesla-q1-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 22.4,
        notes: ['+16% Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 16.2,
            notes: ['+16% Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 15.5, notes: ['+20% Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.4, notes: ['(36%) Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.4, notes: ['(15%) Y/Y'] },
            ],
          },
          {
            id: 'energy_generation_storage',
            label: 'Energy generation & storage',
            value: 2.4,
            notes: ['(12%) Y/Y'],
          },
          { id: 'services', label: 'Services', value: 3.7, notes: ['+42% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 17.7 },
        operatingExpenses: {
          total: 3.8,
          notes: ['Source chart rounds R&D and SG&A to $3.8B total operating expenses.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 1.9, notes: ['9% of revenue', '+1pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.8, notes: ['8% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
      },
      otherExpenses: {
        total: 0.5,
        items: [{ id: 'other', label: 'Other', value: 0.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.7, notes: ['21% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.9, notes: ['4% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['2% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 +16%'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 +20%'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 (36%)'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (15%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 (12%)'] },
              { id: 'services', label: '服务', notes: ['同比 +42%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图将研发与销售、一般及行政费用取整为 $3.8B 运营费用合计。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 +1 个百分点'] },
                { id: 'sga', label: '销售及管理', notes: ['占收入 8%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          otherExpenses: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 21%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 2%', '同比 +0 个百分点'] },
          },
        },
      },
    }
  );
})(window);
