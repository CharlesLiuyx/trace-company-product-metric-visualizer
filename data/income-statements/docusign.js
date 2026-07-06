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
      key: 'docusign-q1-fy27',
      company: 'DocuSign',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/docusign-q1-fy27.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 830,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 811, notes: ['+9% Y/Y'] },
          { id: 'professional_services', label: 'Professional Services', value: 19, notes: ['+9% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 171 },
        operatingExpenses: {
          total: 548,
          items: [
            { id: 'sm', label: 'S&M', value: 296, notes: ['36% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 160, notes: ['19% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 92, notes: ['11% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 40 },
      },
      otherIncome: {
        total: 6,
        items: [{ id: 'interest', label: 'Interest', value: 6 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 659, notes: ['79% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 111, notes: ['13% margin', '+6pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 78,
          notes: [
            '9% margin',
            '(0pp) Y/Y',
            'Operating profit less tax plus interest sums to $77M; the source chart reports $78M net profit due to rounded line items.',
          ],
        },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +9%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +9%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 36%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 19%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 79%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 (0 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'docusign-q4-fy26',
      company: 'DocuSign',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/docusign-q4-fy26.png',
      roundingTolerance: 1.2,
      revenue: {
        total: 837,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 819, notes: ['+8% Y/Y'] },
          { id: 'professional_services', label: 'Professional Services', value: 18, notes: ['(3%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 170 },
        operatingExpenses: {
          total: 580,
          items: [
            { id: 'sm', label: 'S&M', value: 306, notes: ['37% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 168, notes: ['20% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 106, notes: ['13% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 11 },
      },
      otherIncome: {
        total: 14,
        items: [{ id: 'interest', label: 'Interest', value: 14 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 667, notes: ['80% margin', '+0pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 88,
          notes: [
            '10% margin',
            '+3pp Y/Y',
            'Gross profit less operating expenses sums to $87M; the source chart reports $88M operating profit due to rounded line items.',
          ],
        },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 90,
          notes: [
            '11% margin',
            '+0pp Y/Y',
            'Operating profit less tax plus interest sums to $91M; the source chart reports $90M net profit due to rounded line items.',
          ],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +8%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 (3%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 37%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 20%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 13%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 80%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 10%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +0 个百分点'] },
          },
        },
      },
    }
  );
})(window);
