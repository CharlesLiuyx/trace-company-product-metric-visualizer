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
      key: 'netease-q4-fy25',
      company: 'NetEase',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/netease-q4-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 3.9,
        notes: ['+3% Y/Y'],
        items: [
          {
            id: 'games',
            label: 'Games and related value-added services',
            value: 3.1,
            notes: ['+3% Y/Y', '71% gross margin'],
          },
          { id: 'cloud_music', label: 'Cloud Music', value: 0.3, notes: ['+5% Y/Y', '35% gross margin'] },
          { id: 'youdao', label: 'Youdao', value: 0.2, notes: ['+17% Y/Y', '45% gross margin'] },
          {
            id: 'innovative_businesses',
            label: 'Innovative Businesses & Others',
            value: 0.3,
            notes: ['(10%) Y/Y', '40% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.4 },
        operatingExpenses: {
          total: 1.3,
          notes: ['R&D, S&M, and G&A line items sum to $1.4B because the source chart rounds to one decimal place.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 0.6, notes: ['16% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.6, notes: ['14% of revenue', '+4pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.2, notes: ['4% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.5, notes: ['64% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.2, notes: ['30% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.9, notes: ['23% margin', '(10pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              { label: '游戏及相关增值服务', notes: ['同比 +3%', '毛利率 71%'] },
              { label: '云音乐', notes: ['同比 +5%', '毛利率 35%'] },
              { label: '有道', notes: ['同比 +17%', '毛利率 45%'] },
              { label: '创新业务及其他', notes: ['同比 (10%)', '毛利率 40%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['研发、销售与营销、管理费用明细合计为 14 亿美元，因为源图按一位小数四舍五入。'],
              items: [
                { label: '研发', notes: ['占收入 16%', '同比 (1 个百分点)'] },
                { label: '销售与营销', notes: ['占收入 14%', '同比 +4 个百分点'] },
                { label: '管理费用', notes: ['占收入 4%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 64%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 30%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 23%', '同比 (10 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'netease-q3-fy25',
      company: 'NetEase',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/netease-q3-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 4.0,
        notes: ['+8% Y/Y'],
        items: [
          {
            id: 'games',
            label: 'Games and related value-added services',
            value: 3.3,
            notes: ['+12% Y/Y', '70% gross margin'],
          },
          { id: 'cloud_music', label: 'Cloud Music', value: 0.3, notes: ['(2%) Y/Y', '36% gross margin'] },
          { id: 'youdao', label: 'Youdao', value: 0.2, notes: ['+4% Y/Y', '43% gross margin'] },
          {
            id: 'innovative_businesses',
            label: 'Innovative Businesses & Others',
            value: 0.2,
            notes: ['(19%) Y/Y', '42% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.4 },
        operatingExpenses: {
          total: 1.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.6, notes: ['16% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.6, notes: ['16% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.2, notes: ['4% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.6, notes: ['64% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.1, notes: ['28% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['31% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { label: '游戏及相关增值服务', notes: ['同比 +12%', '毛利率 70%'] },
              { label: '云音乐', notes: ['同比 (2%)', '毛利率 36%'] },
              { label: '有道', notes: ['同比 +4%', '毛利率 43%'] },
              { label: '创新业务及其他', notes: ['同比 (19%)', '毛利率 42%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '研发', notes: ['占收入 16%', '同比 (1 个百分点)'] },
                { label: '销售与营销', notes: ['占收入 16%', '同比 +1 个百分点'] },
                { label: '管理费用', notes: ['占收入 4%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 64%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 28%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 31%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'netease-q1-fy26',
      company: 'NetEase',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/netease-q1-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 4.4,
        notes: ['+6% Y/Y'],
        items: [
          {
            id: 'games',
            label: 'Games and related value-added services',
            value: 3.7,
            notes: ['+7% Y/Y', '75% gross margin'],
          },
          { id: 'cloud_music', label: 'Cloud Music', value: 0.3, notes: ['+7% Y/Y', '37% gross margin'] },
          { id: 'youdao', label: 'Youdao', value: 0.2, notes: ['+4% Y/Y', '45% gross margin'] },
          {
            id: 'innovative_businesses',
            label: 'Innovative Businesses & Others',
            value: 0.2,
            notes: ['(5%) Y/Y', '42% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.4 },
        operatingExpenses: {
          total: 1.2,
          notes: ['R&D, S&M, and G&A line items sum to $1.3B because the source chart rounds to one decimal place.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 0.7, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.5, notes: ['11% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.1, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.1, notes: ['69% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['41% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['35% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { label: '游戏及相关增值服务', notes: ['同比 +7%', '毛利率 75%'] },
              { label: '云音乐', notes: ['同比 +7%', '毛利率 37%'] },
              { label: '有道', notes: ['同比 +4%', '毛利率 45%'] },
              { label: '创新业务及其他', notes: ['同比 (5%)', '毛利率 42%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['研发、销售与营销、管理费用明细合计为 13 亿美元，因为源图按一位小数四舍五入。'],
              items: [
                { label: '研发', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { label: '销售与营销', notes: ['占收入 11%', '同比 +2 个百分点'] },
                { label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 69%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 41%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
