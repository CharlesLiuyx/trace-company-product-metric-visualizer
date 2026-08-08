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
      key: 'servicenow-q4-fy25',
      company: 'ServiceNow',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/servicenow-q4-fy25.png',
      roundingTolerance: 1,
      revenue: {
        total: 3568,
        notes: ['+21% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 3466, notes: ['+21% Y/Y', '79% gross margin'] },
          { id: 'professional_services', label: 'Professional services', value: 102, notes: ['+12% Y/Y', '(15%) gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 834 },
        operatingExpenses: {
          total: 2291,
          items: [
            { id: 'sm', label: 'S&M', value: 1150, notes: ['32% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 773, notes: ['22% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 368, notes: ['10% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 140 },
      },
      otherIncome: {
        total: 105,
        items: [{ id: 'interest', label: 'Interest', value: 105 }],
      },
      otherExpenses: {
        total: 7,
        items: [{ id: 'other', label: 'Other', value: 7 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2734, notes: ['77% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 443, notes: ['12% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 401, notes: ['11% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +21%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +21%', '毛利率 79%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +12%', '毛利率 (15%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 32%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 22%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 77%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'servicenow-q1-fy26',
      company: 'ServiceNow',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/servicenow-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 3.8,
        notes: ['+22% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 3.7, notes: ['+22% Y/Y', '78% gross margin'] },
          {
            id: 'professional_services',
            label: 'Professional services',
            value: 0.1,
            notes: ['+19% Y/Y', '(21%) gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0.9,
          notes: ['Gross profit and cost of revenue sum to $3.7B due to source chart rounding.'],
        },
        operatingExpenses: {
          total: 2.3,
          items: [
            { id: 'sm', label: 'S&M', value: 1.2, notes: ['32% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['22% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.3, notes: ['8% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.8, notes: ['75% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.5, notes: ['13% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['12% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +22%', '毛利率 78%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +19%', '毛利率 (21%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['由于来源图四舍五入，毛利润和收入成本合计为 $3.7B。'] },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 32%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 22%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 75%', '同比 (4 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'service-now-q2-fy26',
      company: 'ServiceNow',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/service-now-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 4.0,
        notes: ['+24% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 3.9, notes: ['+25% Y/Y', '73% gross margin'] },
          {
            id: 'professional_services',
            label: 'Professional services',
            value: 0.1,
            notes: ['+8% Y/Y', '(26%) gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 1.2,
        },
        operatingExpenses: {
          total: 2.7,
          items: [
            { id: 'sm', label: 'S&M', value: 1.4, notes: ['34% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.9, notes: ['23% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.4, notes: ['9% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'other', label: 'Other', value: 0.3 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.8, notes: ['71% margin', '(7pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.2, notes: ['4% margin', '(7pp) Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 0.5,
          notes: ['7% margin', '(5pp) Y/Y', 'Source chart label and margin/flow geometry are internally inconsistent.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +24%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +25%', '毛利率 73%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +8%', '毛利率 (26%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 34%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 23%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 71%', '同比 (7 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (7 个百分点)'] },
            net: {
              label: '净利润',
              notes: ['利润率 7%', '同比 (5 个百分点)', '来源图标签与利润率/流量几何存在内部不一致。'],
            },
          },
        },
      },
    }
  );
})(window);
