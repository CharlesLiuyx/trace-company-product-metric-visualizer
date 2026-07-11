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
      key: 'instacart-q1-fy26',
      company: 'Instacart',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/instacart-q1-fy26.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 1019,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'transaction', label: 'Transaction', value: 733, notes: ['+13% Y/Y', 'Retailer fees', 'Customer fees'] },
          { id: 'advertising_other', label: 'Advertising & Other', value: 286, notes: ['+16% Y/Y', 'Per click & fixed fee'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 281 },
        operatingExpenses: {
          total: 556,
          items: [
            { id: 'sm', label: 'S&M', value: 230, notes: ['23% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 164, notes: ['16% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 88, notes: ['9% of revenue', '(5pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 74, notes: ['7% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 44 },
      },
      otherIncome: {
        total: 6,
        items: [{ id: 'interest', label: 'Interest', value: 6 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 738, notes: ['72% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 182, notes: ['18% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 144, notes: ['14% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              { id: 'transaction', label: '交易', notes: ['同比 +13%', '零售商费用', '客户费用'] },
              { id: 'advertising_other', label: '广告及其他', notes: ['同比 +16%', '按点击与固定费用'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 23%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 16%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 (5 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 7%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 14%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'instacart-q4-fy25',
      company: 'Instacart',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/instacart-q4-fy25.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 992,
        notes: ['+12% Y/Y'],
        items: [
          { id: 'transaction', label: 'Transaction', value: 698, notes: ['+13% Y/Y', 'Retailer fees', 'Customer fees'] },
          { id: 'advertising_other', label: 'Advertising & Other', value: 294, notes: ['+10% Y/Y', 'Per click & fixed fee'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 275,
          notes: ['Source chart displays gross profit as $717M; official shareholder letter reports GAAP gross profit of $716M.'],
        },
        operatingExpenses: {
          total: 619,
          items: [
            { id: 'sm', label: 'S&M', value: 214, notes: ['22% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 170, notes: ['17% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 163, notes: ['16% of revenue', '+8pp Y/Y'] },
            { id: 'operations', label: 'Operations', value: 71, notes: ['7% of revenue', '(1pp) Y/Y'] },
          ],
          notes: ['Visible operating-expense line items sum to $618M because the source chart rounds values.'],
        },
        tax: { id: 'tax', label: 'Tax', value: 28 },
      },
      otherIncome: {
        total: 12,
        items: [{ id: 'interest', label: 'Interest', value: 12 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 717, notes: ['72% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 98, notes: ['10% margin', '(8pp) Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 81,
          notes: ['8% margin', '+9pp Y/Y', 'Operating profit plus interest less tax sums to $82M; source chart reports $81M due to rounded line items.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { id: 'transaction', label: '交易', notes: ['同比 +13%', '零售商费用', '客户费用'] },
              { id: 'advertising_other', label: '广告及其他', notes: ['同比 +10%', '按点击与固定费用'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['源图将毛利润显示为 $717M；官方股东信披中的 GAAP 毛利润为 $716M。'],
            },
            operatingExpenses: {
              notes: ['可见营业费用分项合计为 $618M，因为源图对数值取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 22%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 17%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 16%', '同比 +8 个百分点'] },
                { id: 'operations', label: '运营', notes: ['占收入 7%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息收入' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 10%', '同比 (8 个百分点)'] },
            net: {
              label: '净利润',
              notes: ['利润率 8%', '同比 +9 个百分点', '营业利润加利息收入再减税费为 $82M；源图因四舍五入显示净利润 $81M。'],
            },
          },
        },
      },
    }
  );
})(window);
