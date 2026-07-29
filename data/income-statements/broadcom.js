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
      key: 'broadcom-q1-fy25',
      company: 'Broadcom',
      period: 'Q1 FY25',
      periodNote: 'Ending Jan. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/broadcom-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 14.9,
        notes: ['+25% Y/Y'],
        items: [
          {
            id: 'semiconductor_solutions',
            label: 'Semiconductor solutions',
            value: 8.2,
            notes: ['+11% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'],
          },
          {
            id: 'infrastructure_software',
            label: 'Infrastructure software',
            value: 6.7,
            notes: ['+47% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.8 },
        operatingExpenses: {
          total: 3.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.3, notes: ['15% of revenue', '(4pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.0, notes: ['6% of revenue', '(7pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.5, notes: ['3% of revenue', '(3pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.2, notes: ['1% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0, notes: ['No tax node is shown in the Source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.8,
        items: [{
          id: 'other',
          label: 'Other',
          value: 0.8,
          notes: ['Non-operating items deducted between operating profit and net profit.'],
        }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.1, notes: ['68% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 6.3, notes: ['42% margin', '+25pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.5, notes: ['37% margin', '+26pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 1 月',
          revenue: {
            notes: ['同比 +25%'],
            items: [
              {
                id: 'semiconductor_solutions',
                label: '半导体解决方案',
                notes: ['同比 +11%', '网络、服务器存储、宽带、无线、工业'],
              },
              {
                id: 'infrastructure_software',
                label: '基础设施软件',
                notes: ['同比 +47%', '大型机、分布式、网络安全、SAN、云基础设施'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 (4 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 6%', '同比 (7 个百分点)'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 3%', '同比 (3 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未显示税费节点。'] },
          },
          otherExpenses: {
            items: [{
              id: 'other',
              label: '其他',
              notes: ['在营业利润与净利润之间扣除的非经营性项目。'],
            }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 +25 个百分点'] },
            net: { label: '净利润', notes: ['利润率 37%', '同比 +26 个百分点'] },
          },
        },
      },
    },
    {
      key: 'broadcom-q4-fy23',
      company: 'Broadcom',
      period: 'Q4 FY23',
      periodNote: 'Ending Oct. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/broadcom-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.3,
        notes: ['+4% Y/Y'],
        items: [
          { id: 'semiconductor_solutions', label: 'Semiconductor solutions', value: 7.3, notes: ['+3% Y/Y'] },
          { id: 'infrastructure_software', label: 'Infrastructure software', value: 2.0, valueText: '$2.0B', notes: ['+7% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.9 },
        operatingExpenses: {
          total: 2.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.4, notes: ['15% of revenue', '+2pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.4, notes: ['4% of revenue', '+0pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.3, notes: ['4% of revenue'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.013, valueText: '$13M', notes: ['0% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.3,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.3,
            notes: ['Non-operating items deducted between operating profit and net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.4, notes: ['69% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.2, notes: ['46% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.5, notes: ['38% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 10 月',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              { id: 'semiconductor_solutions', label: '半导体解决方案', notes: ['同比 +3%'] },
              { id: 'infrastructure_software', label: '基础设施软件', notes: ['同比 +7%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 +2 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 4%', '同比 +0 个百分点'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 4%'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 0%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other', label: '其他', notes: ['在营业利润与净利润之间扣除的非经营性项目。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 69%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'broadcom-q3-fy24',
      company: 'Broadcom',
      period: 'Q3 FY24',
      periodNote: 'Ending July 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/broadcom-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 13.1,
        notes: ['+47% Y/Y'],
        items: [
          {
            id: 'semiconductor_solutions',
            label: 'Semiconductor solutions',
            value: 7.3,
            notes: ['+5% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'],
          },
          {
            id: 'infrastructure_software',
            label: 'Infrastructure software',
            value: 5.8,
            notes: ['+200% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.7 },
        operatingExpenses: {
          total: 4.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.4, notes: ['18% of revenue', '+3pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.1, notes: ['8% of revenue', '+4pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.8, notes: ['6% of revenue', '+2pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.3, notes: ['2% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.2 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.4,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 1.4,
            notes: ['Non-operating items deducted between operating profit and net loss.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.4, notes: ['64% margin', '(6pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.8, notes: ['29% margin', '(14pp) Y/Y'] },
        net: { id: 'net_loss', label: 'Net loss', value: -1.9 },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 7 月',
          revenue: {
            notes: ['同比 +47%'],
            items: [
              {
                id: 'semiconductor_solutions',
                label: '半导体解决方案',
                notes: ['同比 +5%', '网络、服务器存储、宽带、无线、工业'],
              },
              {
                id: 'infrastructure_software',
                label: '基础设施软件',
                notes: ['同比 +200%', '大型机、分布式、网络安全、SAN、云基础设施'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 +3 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 8%', '同比 +4 个百分点'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 6%', '同比 +2 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 2%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              {
                id: 'other',
                label: '其他',
                notes: ['在营业利润与净亏损之间扣除的非经营性项目。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 64%', '同比 (6 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 29%', '同比 (14 个百分点)'] },
            net: { label: '净亏损' },
          },
        },
      },
    },
    {
      key: 'broadcom-q1-fy24',
      company: 'Broadcom',
      period: 'Q1 FY24',
      periodNote: 'Ending Jan. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/broadcom-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.0,
        notes: ['+34% Y/Y'],
        items: [
          { id: 'semiconductor_solutions', label: 'Semiconductor solutions', value: 7.4, notes: ['+4% Y/Y'] },
          { id: 'infrastructure_software', label: 'Infrastructure software', value: 4.6, notes: ['+153% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.6 },
        operatingExpenses: {
          total: 5.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.3, notes: ['19% of revenue', '+6pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.6, notes: ['13% of revenue', '+9pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.8, notes: ['7% of revenue', '+3pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.6, notes: ['5% of revenue', '+5pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.7,
        items: [{
          id: 'other',
          label: 'Other',
          value: 0.7,
          notes: ['Non-operating items deducted between operating profit and net profit.'],
        }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.4, notes: ['62% margin', '(6pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.1, notes: ['17% margin', '(29pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.3, notes: ['11% margin', '(32pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 1 月',
          revenue: {
            notes: ['同比 +34%'],
            items: [
              { id: 'semiconductor_solutions', label: '半导体解决方案', notes: ['同比 +4%'] },
              { id: 'infrastructure_software', label: '基础设施软件', notes: ['同比 +153%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 19%', '同比 +6 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 13%', '同比 +9 个百分点'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 7%', '同比 +3 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 5%', '同比 +5 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{
              id: 'other',
              label: '其他',
              notes: ['在营业利润与净利润之间扣除的非经营性项目。'],
            }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 62%', '同比 (6 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 (29 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 (32 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'broadcom-q3-fy23',
      company: 'Broadcom',
      period: 'Q3 FY23',
      periodNote: 'Ending July. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/broadcom-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.9,
        notes: ['+5% Y/Y'],
        items: [
          {
            id: 'semiconductor_solutions',
            label: 'Semiconductor solutions',
            value: 6.9,
            notes: ['+5% Y/Y'],
          },
          {
            id: 'infrastructure_software',
            label: 'Infrastructure software',
            value: 1.9,
            notes: ['+5% Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.7 },
        operatingExpenses: {
          total: 2.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.4, notes: ['15% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.4, notes: ['4% of revenue', '+0pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.4, notes: ['4% of revenue'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.2, notes: ['2% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.3,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.3,
            notes: ['Non-operating items deducted between operating profit and net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.2, notes: ['69% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.9, notes: ['43% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.3, notes: ['37% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 7 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'semiconductor_solutions', label: '半导体解决方案', notes: ['同比 +5%'] },
              { id: 'infrastructure_software', label: '基础设施软件', notes: ['同比 +5%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 4%', '同比 +0 个百分点'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 4%'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 2%'] },
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
            operating: { label: '营业利润', notes: ['利润率 43%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 37%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'broadcom-q4-fy24',
      company: 'Broadcom',
      period: 'Q4 FY24',
      periodNote: 'Ending Oct. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/broadcom-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 14.1,
        notes: ['+51% Y/Y'],
        items: [
          {
            id: 'semiconductor_solutions',
            label: 'Semiconductor solutions',
            value: 8.2,
            notes: ['+12% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'],
          },
          {
            id: 'infrastructure_software',
            label: 'Infrastructure software',
            value: 5.8,
            notes: ['+196% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.1 },
        operatingExpenses: {
          total: 4.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.2, notes: ['16% of revenue', '+1pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.0, notes: ['7% of revenue', '+3pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.8, notes: ['6% of revenue', '+2pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.3, notes: ['2% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['The source chart shows a tax benefit rather than a tax expense.'],
        },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.4 }],
      },
      otherExpenses: {
        total: 0.9,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.9,
            notes: ['Non-operating items deducted between operating profit and net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.0, notes: ['64% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.6, notes: ['33% margin', '(13pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 4.2, notes: ['30% margin', '(8pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 10 月',
          revenue: {
            notes: ['同比 +51%'],
            items: [
              {
                id: 'semiconductor_solutions',
                label: '半导体解决方案',
                notes: ['同比 +12%', '网络、服务器存储、宽带、无线、工业'],
              },
              {
                id: 'infrastructure_software',
                label: '基础设施软件',
                notes: ['同比 +196%', '大型机、分布式、网络安全、SAN、云基础设施'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 16%', '同比 +1 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 +3 个百分点'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 6%', '同比 +2 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 2%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['源图展示税收收益，而非税费。'] },
          },
          otherIncome: { items: [{ id: 'tax_benefit', label: '税收收益' }] },
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
            gross: { label: '毛利润', notes: ['利润率 64%', '同比 (5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 (13 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 (8 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'broadcom-q3-fy25',
      company: 'Broadcom',
      period: 'Q3 FY25',
      periodNote: 'Ending July 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/broadcom-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 16.0,
        notes: ['+22% Y/Y'],
        items: [
          {
            id: 'semiconductor_solutions',
            label: 'Semiconductor solutions',
            value: 9.2,
            notes: ['+26% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'],
          },
          {
            id: 'infrastructure_software',
            label: 'Infrastructure software',
            value: 6.8,
            notes: ['+17% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.2 },
        operatingExpenses: {
          total: 4.8,
          items: [
            { id: 'rnd', label: 'R&D', value: 3.1, notes: ['19% of revenue', '+1pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.1, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.5, notes: ['3% of revenue', '(3pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.2, notes: ['1% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.1 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.6,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.6,
            notes: ['Non-operating items deducted between operating profit and net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.7, notes: ['67% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 5.9, notes: ['37% margin', '+8pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 4.1, notes: ['26% margin', '+40pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 7 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              {
                id: 'semiconductor_solutions',
                label: '半导体解决方案',
                notes: ['同比 +26%', '网络、服务器存储、宽带、无线、工业'],
              },
              {
                id: 'infrastructure_software',
                label: '基础设施软件',
                notes: ['同比 +17%', '大型机、分布式、网络安全、SAN、云基础设施'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 19%', '同比 +1 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 (2 个百分点)'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 3%', '同比 (3 个百分点)'] },
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
            gross: { label: '毛利润', notes: ['利润率 67%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 37%', '同比 +8 个百分点'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 +40 个百分点'] },
          },
        },
      },
    },
    {
      key: 'broadcom-q2-fy24',
      company: 'Broadcom',
      period: 'Q2 FY24',
      periodNote: 'Ending Apr. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/broadcom-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.5,
        notes: ['+43% Y/Y'],
        items: [
          {
            id: 'semiconductor_solutions',
            label: 'Semiconductor solutions',
            value: 7.2,
            notes: ['+6% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'],
          },
          {
            id: 'infrastructure_software',
            label: 'Infrastructure software',
            value: 5.3,
            notes: ['+175% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.7 },
        operatingExpenses: {
          total: 4.8,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.4, notes: ['19% of revenue', '+4pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.3, notes: ['10% of revenue', '+5pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.8, notes: ['7% of revenue', '+3pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.3, notes: ['2% of revenue'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['The source chart shows a separate positive tax benefit rather than tax expense.'],
        },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.1 }],
      },
      otherExpenses: {
        total: 1.0,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 1.0,
            notes: ['Non-operating items deducted between operating profit and net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.8, notes: ['62% margin', '(8pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.0, notes: ['24% margin', '(22pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.1, notes: ['17% margin', '(23pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 4 月',
          revenue: {
            notes: ['同比 +43%'],
            items: [
              {
                id: 'semiconductor_solutions',
                label: '半导体解决方案',
                notes: ['同比 +6%', '网络、服务器存储、宽带、无线、工业'],
              },
              {
                id: 'infrastructure_software',
                label: '基础设施软件',
                notes: ['同比 +175%', '大型机、分布式、网络安全、SAN、云基础设施'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 19%', '同比 +4 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 10%', '同比 +5 个百分点'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 7%', '同比 +3 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 2%'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图展示单独的正向税收收益，而非税费。'] },
          },
          otherIncome: { items: [{ id: 'tax_benefit', label: '税收收益' }] },
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
            gross: { label: '毛利润', notes: ['利润率 62%', '同比 (8 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 24%', '同比 (22 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 17%', '同比 (23 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'broadcom-q1-fy23',
      company: 'Broadcom',
      period: 'Q1 FY23',
      periodNote: 'Ending Apr. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/broadcom-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.7,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'semiconductor_solutions', label: 'Semiconductor solutions', value: 6.8, notes: ['+9% Y/Y'] },
          { id: 'infrastructure_software', label: 'Infrastructure software', value: 1.9, notes: ['+3% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.6 },
        operatingExpenses: {
          total: 2.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.3, notes: ['14% of revenue', '(1pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.4, notes: ['5% of revenue', '+0pp Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 0.4, notes: ['4% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.3,
        items: [
          { id: 'other_expense', label: 'Other', value: 0.3 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.1, notes: ['55% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.0, notes: ['43% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.5, notes: ['38% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 4 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'semiconductor_solutions', label: '半导体解决方案', notes: ['同比 +9%'] },
              { id: 'infrastructure_software', label: '基础设施软件', notes: ['同比 +3%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 5%', '同比 +0 个百分点'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 4%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_expense', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 55%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 43%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'broadcom-q2-fy25',
      company: 'Broadcom',
      period: 'Q2 FY25',
      periodNote: 'Ending Apr. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/broadcom-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 15.0,
        notes: ['+20% Y/Y'],
        items: [
          {
            id: 'semiconductor_solutions',
            label: 'Semiconductor solutions',
            value: 8.4,
            notes: ['+17% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'],
          },
          {
            id: 'infrastructure_software',
            label: 'Infrastructure software',
            value: 6.6,
            notes: ['+25% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.8 },
        operatingExpenses: {
          total: 4.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.7, notes: ['18% of revenue', '(1pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.1, notes: ['7% of revenue', '(3pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.5, notes: ['3% of revenue', '(3pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.1, notes: ['1% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: { total: 0, items: [] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.2, notes: ['68% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 5.8, notes: ['39% margin', '+15pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.0, notes: ['33% margin', '+16pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 4 月',
          revenue: {
            notes: ['同比 +20%'],
            items: [
              {
                id: 'semiconductor_solutions',
                label: '半导体解决方案',
                notes: ['同比 +17%', '网络、服务器存储、宽带、无线、工业'],
              },
              {
                id: 'infrastructure_software',
                label: '基础设施软件',
                notes: ['同比 +25%', '大型机、分布式、网络安全、SAN、云基础设施'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 (1 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 (3 个百分点)'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 3%', '同比 (3 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%', '同比 (2 个百分点)'] },
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
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 39%', '同比 +15 个百分点'] },
            net: { label: '净利润', notes: ['利润率 33%', '同比 +16 个百分点'] },
          },
        },
      },
    },
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
    },
    {
      key: 'broadcom-q4-fy25',
      company: 'Broadcom',
      period: 'Q4 FY25',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/broadcom-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 18.0,
        valueText: '$18.0B',
        notes: ['+28% Y/Y'],
        items: [
          {
            id: 'semiconductor_solutions',
            label: 'Semiconductor solutions',
            value: 11.1,
            notes: ['+35% Y/Y', 'Networking, Server Storage, Broadband, Wireless, Industrial'],
          },
          {
            id: 'infrastructure_software',
            label: 'Infrastructure software',
            value: 6.9,
            notes: ['+19% Y/Y', 'Mainframe, Distributed, Cybersecurity, SAN, Cloud Infrastructure'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.8 },
        operatingExpenses: {
          total: 4.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 3.0, valueText: '($3.0B)', notes: ['17% of revenue', '+1pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.1, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.5, notes: ['3% of revenue', '(3pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.1, notes: ['1% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['The source chart shows a tax benefit rather than a tax expense.'],
        },
      },
      otherIncome: {
        total: 1.6,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 1.6 }],
      },
      otherExpenses: {
        total: 0.6,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.6,
            notes: ['Non-operating items deducted between operating profit and net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.2, notes: ['68% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 7.5, notes: ['42% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 8.5, notes: ['47% margin', '+17pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 10 月',
          revenue: {
            notes: ['同比 +28%'],
            items: [
              {
                id: 'semiconductor_solutions',
                label: '半导体解决方案',
                notes: ['同比 +35%', '网络、服务器存储、宽带、无线、工业'],
              },
              {
                id: 'infrastructure_software',
                label: '基础设施软件',
                notes: ['同比 +19%', '大型机、分布式、网络安全、SAN、云基础设施'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 17%', '同比 +1 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 3%', '同比 (3 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['源图展示税收收益，而非税费。'] },
          },
          otherIncome: { items: [{ id: 'tax_benefit', label: '税收收益' }] },
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
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 +9 个百分点'] },
            net: { label: '净利润', notes: ['利润率 47%', '同比 +17 个百分点'] },
          },
        },
      },
    }
  );
})(window);
