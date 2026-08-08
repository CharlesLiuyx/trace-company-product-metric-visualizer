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
      key: 'cadence-q4-fy25',
      company: 'Cadence',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/cadence-q4-fy25.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 1440,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'core_eda', label: 'Core Electronic Design Automation', value: 994, notes: ['+8% Y/Y'] },
          { id: 'ip', label: 'IP', value: 216, notes: ['+15% Y/Y'] },
          { id: 'system_design_analysis', label: 'System Design & Analysis', value: 230, notes: ['(16%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 189,
          notes: ['Source chart splits cost of revenue into Products ($144M) and Services ($45M).'],
        },
        operatingExpenses: {
          total: 788,
          notes: ['Source chart operating expense item sum is $789M due to rounded display values.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 465, notes: ['32% of revenue', '+3pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 207, notes: ['14% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 103, notes: ['7% of revenue', '+2pp Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 14 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 105 },
      },
      otherIncome: {
        total: 30,
        items: [{ id: 'other_income', label: 'Other', value: 30 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1251, notes: ['87% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 463, notes: ['32% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 388, notes: ['27% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'core_eda', label: '核心电子设计自动化', notes: ['同比 +8%'] },
              { id: 'ip', label: 'IP', notes: ['同比 +15%'] },
              { id: 'system_design_analysis', label: '系统设计与分析', notes: ['同比 (16%)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图将收入成本拆分为产品 ($144M) 与服务 ($45M)。'],
            },
            operatingExpenses: {
              notes: ['由于展示值四舍五入，来源图中的运营费用分项合计为 $789M。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 32%', '同比 +3 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 14%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 7%', '同比 +2 个百分点'] },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 87%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 27%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'cadence-q1-fy26',
      company: 'Cadence',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/cadence-q1-fy26.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 1474,
        notes: ['+19% Y/Y'],
        items: [
          { id: 'core_eda', label: 'Core Electronic Design Automation', value: 1046, notes: ['+18% Y/Y'] },
          { id: 'ip', label: 'IP', value: 206, notes: ['+22% Y/Y'] },
          { id: 'system_design_analysis', label: 'System Design & Analysis', value: 221, notes: ['+18% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 215,
          notes: ['Source chart splits cost of revenue into Products ($153M) and Services ($61M).'],
          items: [
            { id: 'products_cor', label: 'Products', value: 153 },
            { id: 'services_cor', label: 'Services', value: 61 },
          ],
        },
        operatingExpenses: {
          total: 828,
          items: [
            { id: 'rnd', label: 'R&D', value: 508, notes: ['34% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 212, notes: ['14% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 88, notes: ['6% of revenue', '+1pp Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 20 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 92 },
      },
      otherIncome: {
        total: 28,
        items: [{ id: 'other_income', label: 'Other', value: 28 }],
      },
      otherExpenses: {
        total: 32,
        items: [{ id: 'interest', label: 'Interest', value: 32 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1260, notes: ['85% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 431, notes: ['29% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 336, notes: ['23% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +19%'],
            items: [
              { id: 'core_eda', label: '核心电子设计自动化', notes: ['同比 +18%'] },
              { id: 'ip', label: 'IP', notes: ['同比 +22%'] },
              { id: 'system_design_analysis', label: '系统设计与分析', notes: ['同比 +18%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图将收入成本拆分为产品 ($153M) 与服务 ($61M)。'],
              items: [
                { id: 'products_cor', label: '产品' },
                { id: 'services_cor', label: '服务' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 34%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 14%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 +1 个百分点'] },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 85%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 29%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 23%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'cadence-q2-fy26',
      company: 'Cadence',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/cadence-q2-fy26.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 1585,
        notes: ['+24% Y/Y'],
        items: [
          { id: 'core_eda', label: 'Core Electronic Design Automation', value: 1077, notes: ['+19% Y/Y'] },
          { id: 'ip', label: 'IP', value: 238, notes: ['+43% Y/Y'] },
          { id: 'system_design_analysis', label: 'System Design & Analysis', value: 269, notes: ['+32% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 239,
          notes: [
            'Source chart splits cost of revenue into Products ($175M) and Services ($64M).',
            'The Source label shows Services ($153M); Cadence\'s official Q2 FY26 income statement reports cost of services of $64.135M, so the user approved a numeric-typo correction to ($64M).',
          ],
          items: [
            { id: 'products_cor', label: 'Products', value: 175 },
            { id: 'services_cor', label: 'Services', value: 64 },
          ],
        },
        operatingExpenses: {
          total: 895,
          items: [
            { id: 'rnd', label: 'R&D', value: 531, notes: ['34% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 241, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 89, notes: ['6% of revenue', '+0pp Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 34, notes: ['2% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 143 },
      },
      otherIncome: {
        total: 60,
        items: [{ id: 'other_income', label: 'Other', value: 60 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1345, notes: ['85% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 450, notes: ['28% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 367, notes: ['23% margin', '+11pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +24%'],
            items: [
              { id: 'core_eda', label: '核心电子设计自动化', notes: ['同比 +19%'] },
              { id: 'ip', label: 'IP', notes: ['同比 +43%'] },
              { id: 'system_design_analysis', label: '系统设计与分析', notes: ['同比 +32%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: [
                '来源图将收入成本拆分为产品 ($175M) 与服务 ($64M)。',
                '来源图将服务成本误写为 ($153M)；Cadence 官方 Q2 FY26 损益表披露服务成本为 $64.135M，用户已批准按数字笔误修正为 ($64M)。',
              ],
              items: [
                { id: 'products_cor', label: '产品' },
                { id: 'services_cor', label: '服务' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 34%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 +0 个百分点'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 2%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 85%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 28%', '同比 +9 个百分点'] },
            net: { label: '净利润', notes: ['利润率 23%', '同比 +11 个百分点'] },
          },
        },
      },
    }
  );
})(window);
