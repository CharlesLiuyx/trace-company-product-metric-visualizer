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
