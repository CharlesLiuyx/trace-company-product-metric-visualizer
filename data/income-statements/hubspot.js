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
      key: 'hubspot-q1-fy26',
      company: 'HubSpot',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/hubspot-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 881,
        notes: ['+23% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 862, notes: ['+23% Y/Y', '85% gross margin'] },
          {
            id: 'professional_services',
            label: 'Professional services',
            value: 19,
            notes: ['+22% Y/Y', '9% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 146 },
        operatingExpenses: {
          total: 707,
          items: [
            { id: 'sm', label: 'S&M', value: 386, notes: ['44% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 234, notes: ['27% of revenue', '(4pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 86, notes: ['10% of revenue', '(1pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 1, notes: ['0% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7 },
      },
      otherIncome: {
        total: 11,
        items: [{ id: 'interest', label: 'Interest', value: 11 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 735, notes: ['83% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 28, notes: ['3% margin', '+7pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 33,
          notes: ['4% margin', '+6pp Y/Y', 'Displayed rounded bridge sums to $32M; source chart shows $33M net profit.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +23%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +23%', '毛利率 85%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +22%', '毛利率 9%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 44%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (4 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                { id: 'restructuring', label: '重组费用', notes: ['占收入 0%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 83%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 3%', '同比 +7 个百分点'] },
            net: {
              label: '净利润',
              notes: ['利润率 4%', '同比 +6 个百分点', '显示值四舍五入桥接合计为 $32M；源图显示净利润为 $33M。'],
            },
          },
        },
      },
    },
    {
      key: 'hubspot-q4-fy25',
      company: 'HubSpot',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/hubspot-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 847,
        notes: ['+20% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 829, notes: ['+21% Y/Y', '85% gross margin'] },
          { id: 'professional_services', label: 'Professional services', value: 18, notes: ['+12% Y/Y', '8% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 138 },
        operatingExpenses: {
          total: 661,
          items: [
            { id: 'sm', label: 'S&M', value: 358, notes: ['42% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 221, notes: ['26% of revenue', '(4pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 82, notes: ['10% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 1, notes: ['0% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7 },
      },
      otherIncome: {
        total: 13,
        items: [{ id: 'interest', label: 'Interest', value: 13 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 709, notes: ['84% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 48, notes: ['6% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 54, notes: ['6% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +20%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +21%', '毛利率 85%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +12%', '毛利率 8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 42%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 26%', '同比 (4 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
                { id: 'restructuring', label: '重组费用', notes: ['占收入 0%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 84%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'hubspot-q3-fy25',
      company: 'HubSpot',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/hubspot-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 810,
        notes: ['+21% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 792, notes: ['+21% Y/Y', '85% gross margin'] },
          { id: 'professional_services', label: 'Professional services', value: 18, notes: ['+19% Y/Y', '8% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 134 },
        operatingExpenses: {
          total: 665,
          items: [
            { id: 'sm', label: 'S&M', value: 355, notes: ['44% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 228, notes: ['28% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 81, notes: ['10% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 1, notes: ['0% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7 },
      },
      otherIncome: {
        total: 12,
        items: [{ id: 'other', label: 'Other', value: 12 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 676, notes: ['84% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 11, notes: ['1% margin', '+1pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 17,
          notes: ['2% margin', '+1pp Y/Y', 'Displayed rounded bridge sums to $16M; source chart shows $17M net profit.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +21%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +21%', '毛利率 85%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +19%', '毛利率 8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 44%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
                { id: 'restructuring', label: '重组费用', notes: ['占收入 0%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 84%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 +1 个百分点'] },
            net: {
              label: '净利润',
              notes: ['利润率 2%', '同比 +1 个百分点', '显示值四舍五入桥接合计为 $16M；源图显示净利润为 $17M。'],
            },
          },
        },
      },
    }
  );
})(window);
