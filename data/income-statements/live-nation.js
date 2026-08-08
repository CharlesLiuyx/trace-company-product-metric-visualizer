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
      key: 'live-nation-fy25',
      company: 'Live Nation',
      period: 'FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/live-nation-fy25.png',
      roundingTolerance: 0.22,
      revenue: {
        total: 25.2,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'concerts', label: 'Concerts', value: 20.9, notes: ['+10% Y/Y', '3% adjusted margin', '+1pp Y/Y'] },
          { id: 'ticketing', label: 'Ticketing', value: 3.1, notes: ['+3% Y/Y', '37% adjusted margin', '(1pp) Y/Y'] },
          { id: 'sponsorship', label: 'Sponsorship', value: 1.3, notes: ['+11% Y/Y', '64% adjusted margin', '(0pp) Y/Y'] },
          { id: 'eliminations', label: 'Eliminations', value: -0.1, notes: ['Source-chart elimination before consolidated revenue.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'direct_operating_expenses', label: 'Direct operating expenses', value: 18.8 },
        operatingExpenses: {
          total: 5.2,
          items: [
            { id: 'sga', label: 'SG&A', value: 4.1, notes: ['16% of revenue'] },
            { id: 'da', label: 'D&A', value: 0.6, notes: ['3% of revenue'] },
            { id: 'corporate_other', label: 'Corporate & Other', value: 0.5, notes: ['2% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest_and_other', label: 'Interest & other', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.4, notes: ['26% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.3, notes: ['5% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.7, notes: ['3% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'concerts', label: '演唱会', notes: ['同比 +10%', '调整后利润率 3%', '同比 +1 个百分点'] },
              { id: 'ticketing', label: '票务', notes: ['同比 +3%', '调整后利润率 37%', '同比 (1 个百分点)'] },
              { id: 'sponsorship', label: '赞助', notes: ['同比 +11%', '调整后利润率 64%', '同比 (0 个百分点)'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图表在合并收入前显示抵销项。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '直接运营费用' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 16%'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 3%'] },
                { id: 'corporate_other', label: '公司及其他', notes: ['占收入 2%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest_and_other', label: '利息及其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 26%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'live-nation-q1-fy26',
      company: 'Live Nation',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/live-nation-q1-fy26.png',
      roundingTolerance: 0.22,
      revenue: {
        total: 3.8,
        notes: ['+12% Y/Y'],
        items: [
          { id: 'concerts', label: 'Concerts', value: 2.8, notes: ['+12% Y/Y', '0% adjusted margin', '(0pp) Y/Y'] },
          { id: 'ticketing', label: 'Ticketing', value: 0.8, notes: ['+10% Y/Y', '33% adjusted margin', '(3pp) Y/Y'] },
          { id: 'sponsorship', label: 'Sponsorship', value: 0.3, notes: ['+20% Y/Y', '64% adjusted margin', '+1pp Y/Y'] },
          { id: 'eliminations', label: 'Eliminations', value: -0.006, notes: ['Source chart displays a $6M consolidation elimination before revenue.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'direct_operating_expenses', label: 'Direct operating expenses', value: 2.5 },
        operatingExpenses: {
          total: 1.7,
          notes: ['Gross profit plus displayed operating loss totals $1.6B because source-chart values are rounded.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 1.0, notes: ['25% of revenue'] },
            { id: 'corporate_other', label: 'Corporate & Other', value: 0.5, notes: ['15% of revenue'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['4% of revenue'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.3, notes: ['35% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.3, notes: ['(10%) margin', '(13pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.3,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { id: 'concerts', label: '演唱会', notes: ['同比 +12%', '调整后利润率 0%', '同比 (0 个百分点)'] },
              { id: 'ticketing', label: '票务', notes: ['同比 +10%', '调整后利润率 33%', '同比 (3 个百分点)'] },
              { id: 'sponsorship', label: '赞助', notes: ['同比 +20%', '调整后利润率 64%', '同比 +1 个百分点'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图表在合并收入前显示 $6M 的抵销项。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '直接运营费用' },
            operatingExpenses: {
              notes: ['毛利润与来源图显示的营业亏损合计为 $1.6B，差额来自图表取整。'],
              items: [
                { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 25%'] },
                { id: 'corporate_other', label: '公司及其他', notes: ['占收入 15%'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 4%'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (10%)', '同比 (13 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净亏损项目。'] },
          },
        },
      },
    },
    {
      key: 'live-nation-q2-fy26',
      company: 'Live Nation',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/live-nation-q2-fy26.png',
      roundingTolerance: 0.22,
      revenue: {
        total: 7.7,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'concerts', label: 'Concerts', value: 6.4, notes: ['+8% Y/Y', '5% adjusted margin'] },
          { id: 'ticketing', label: 'Ticketing', value: 0.9, notes: ['+15% Y/Y', '39% adjusted margin'] },
          { id: 'sponsorship', label: 'Sponsorship', value: 0.4, notes: ['+12% Y/Y', '67% adjusted margin'] },
          { id: 'eliminations', label: 'Eliminations', value: -0.013, notes: ['Source chart displays a $13M consolidation elimination before revenue.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'direct_operating_expenses', label: 'Direct operating expenses', value: 5.8 },
        operatingExpenses: {
          total: 1.4,
          items: [
            { id: 'sga', label: 'SG&A', value: 1.1, notes: ['15% of revenue'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['2% of revenue'] },
            { id: 'corporate_other', label: 'Corporate & Other', value: 0.1, notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.9, notes: ['25% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.5, notes: ['7% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['5% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'concerts', label: '演唱会', notes: ['同比 +8%', '调整后利润率 5%'] },
              { id: 'ticketing', label: '票务', notes: ['同比 +15%', '调整后利润率 39%'] },
              { id: 'sponsorship', label: '赞助', notes: ['同比 +12%', '调整后利润率 67%'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图表在合并收入前显示 $13M 的抵销项。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '直接运营费用' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 15%'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 2%'] },
                { id: 'corporate_other', label: '公司及其他', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 25%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'live-nation-q3-fy25',
      company: 'Live Nation',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/live-nation-q3-fy25.png',
      roundingTolerance: 0.22,
      revenue: {
        total: 8.5,
        notes: ['+11% Y/Y'],
        items: [
          { id: 'concerts', label: 'Concerts', value: 7.3, notes: ['+11% Y/Y', '7% adjusted margin', '(0pp) Y/Y'] },
          { id: 'ticketing', label: 'Ticketing', value: 0.8, notes: ['+15% Y/Y', '36% adjusted margin', '+2pp Y/Y'] },
          { id: 'sponsorship', label: 'Sponsorship', value: 0.4, notes: ['+13% Y/Y', '71% adjusted margin', '+0pp Y/Y'] },
          { id: 'eliminations', label: 'Eliminations', value: -0.024, notes: ['Source chart displays a $24M consolidation elimination before revenue.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'direct_operating_expenses', label: 'Direct operating expenses', value: 6.4 },
        operatingExpenses: {
          total: 1.3,
          items: [
            { id: 'sga', label: 'SG&A', value: 1.0, notes: ['12% of revenue'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['2% of revenue'] },
            { id: 'corporate_other', label: 'Corporate & Other', value: 0.1, notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'interest_and_other', label: 'Interest & other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.1, notes: ['24% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.8, notes: ['9% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['6% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'concerts', label: '演唱会', notes: ['同比 +11%', '调整后利润率 7%', '同比 (0 个百分点)'] },
              { id: 'ticketing', label: '票务', notes: ['同比 +15%', '调整后利润率 36%', '同比 +2 个百分点'] },
              { id: 'sponsorship', label: '赞助', notes: ['同比 +13%', '调整后利润率 71%', '同比 +0 个百分点'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图表在合并收入前显示 $24M 的抵销项。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '直接运营费用' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 12%'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 2%'] },
                { id: 'corporate_other', label: '公司及其他', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest_and_other', label: '利息及其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 24%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
