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
      key: 'broadcom-q1-fy26',
      company: 'Broadcom',
      period: 'Q1 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/broadcom-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 19.3,
        notes: ['+29% Y/Y'],
        items: [
          {
            id: 'semiconductor_solutions',
            label: 'Semiconductor solutions',
            value: 12.5,
            notes: ['+52% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'],
          },
          {
            id: 'infrastructure_software',
            label: 'Infrastructure software',
            value: 6.8,
            notes: ['+1% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.2 },
        operatingExpenses: {
          total: 4.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 3.0, notes: ['15% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.0, notes: ['5% of revenue', '(1pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.5, notes: ['3% of revenue', '(1pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.1, notes: ['1% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.4,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.4,
            notes: ['Non-operating items deducted between operating profit and net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 13.2, notes: ['68% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 8.6, notes: ['44% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 7.3, notes: ['38% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +29%'],
            items: [
              {
                id: 'semiconductor_solutions',
                label: '半导体解决方案',
                notes: ['同比 +52%', '网络、服务器存储、宽带、无线、工业'],
              },
              {
                id: 'infrastructure_software',
                label: '基础设施软件',
                notes: ['同比 +1%', '大型机、分布式、网络安全、SAN、云基础设施'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 5%', '同比 (1 个百分点)'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 3%', '同比 (1 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              {
                id: 'other',
                label: '其他',
                notes: ['在营业利润与净利润之间扣除的非经营性项目。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 44%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'broadcom-q2-fy26',
      company: 'Broadcom',
      period: 'Q2 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/broadcom-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 22.2,
        notes: ['+48% Y/Y'],
        items: [
          {
            id: 'semiconductor_solutions',
            label: 'Semiconductor solutions',
            value: 15.0,
            notes: ['+79% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'],
          },
          {
            id: 'infrastructure_software',
            label: 'Infrastructure software',
            value: 7.2,
            notes: ['+9% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.8 },
        operatingExpenses: {
          total: 4.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 3.0, notes: ['13% of revenue', '(4pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.1, notes: ['5% of revenue', '(2pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.5, notes: ['2% of revenue', '(1pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.1, notes: ['0% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.7,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.7,
            notes: ['Non-operating items deducted between operating profit and net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 15.4, notes: ['69% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 10.8, notes: ['49% margin', '+10pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 9.3, notes: ['42% margin', '+9pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +48%'],
            items: [
              {
                id: 'semiconductor_solutions',
                label: '半导体解决方案',
                notes: ['同比 +79%', '网络、服务器存储、宽带、无线、工业'],
              },
              {
                id: 'infrastructure_software',
                label: '基础设施软件',
                notes: ['同比 +9%', '大型机、分布式、网络安全、SAN、云基础设施'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 (4 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 5%', '同比 (2 个百分点)'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 2%', '同比 (1 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 0%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              {
                id: 'other',
                label: '其他',
                notes: ['在营业利润与净利润之间扣除的非经营性项目。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 69%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 49%', '同比 +10 个百分点'] },
            net: { label: '净利润', notes: ['利润率 42%', '同比 +9 个百分点'] },
          },
        },
      },
    }
  );
})(window);
