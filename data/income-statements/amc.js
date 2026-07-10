/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'amc-q4-fy25',
    company: 'AMC Entertainment',
    period: 'Q4 FY25',
    periodNote: 'Three months ended Dec. 31, 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/amc-q4-fy25.png',
    roundingTolerance: 1.5,
    revenue: {
      total: 1288,
      notes: ['(1%) Y/Y', 'Source revenue items sum to $1,289M because each item is rounded.'],
      items: [
        { id: 'admissions', label: 'Admissions', value: 702, notes: ['(3%) Y/Y'] },
        { id: 'food_beverage', label: 'Food & Beverage', value: 437, notes: ['(2%) Y/Y'] },
        {
          id: 'other_theatre',
          label: 'Other theatre',
          value: 150,
          notes: ['+8% Y/Y', 'Gift Cards, Package tickets, Advertising, Retail, Rentals.'],
        },
      ],
    },
    costs: {
      costOfRevenue: {
        label: 'Cost of revenue',
        value: 411,
        notes: ['Film exhibition costs and Food & Beverage costs are shown as separate source terminals.'],
      },
      operatingExpenses: {
        total: 877,
        items: [
          { id: 'operating', label: 'Operating', value: 470, notes: ['36% of revenue', '+3pp Y/Y'] },
          { id: 'rent', label: 'Rent', value: 223, notes: ['17% of revenue', '+1pp Y/Y'] },
          { id: 'depreciation_amortization', label: 'Depreciation & Amortization', value: 80, notes: ['6% of revenue', '+0pp Y/Y'] },
          { id: 'ga', label: 'G&A', value: 61, notes: ['5% of revenue', '(0pp) Y/Y'] },
          { id: 'impairment', label: 'Impairment', value: 44 },
        ],
      },
      tax: { label: 'Tax', value: 0, notes: ['No separate tax terminal is shown in the source chart.'] },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 128,
      items: [
        {
          id: 'other',
          label: 'Other',
          value: 128,
          notes: ['Terminal non-operating expense that turns break-even operating profit into a $127M net loss.'],
        },
      ],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 877, notes: ['68% margin', '+1pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0, notes: ['0% margin', '(0pp) Y/Y'] },
      net: {
        id: 'net_loss',
        label: 'Net loss',
        value: -127,
        notes: ['(10%) margin', '+1pp Y/Y'],
      },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的三个月',
        revenue: {
          notes: ['同比 (1%)', '由于来源图逐项四舍五入，收入分项合计为 12.89 亿美元。'],
          items: [
            { id: 'admissions', label: '影院票务', notes: ['同比 (3%)'] },
            { id: 'food_beverage', label: '餐饮', notes: ['同比 (2%)'] },
            { id: 'other_theatre', label: '其他影院', notes: ['同比 +8%', '礼品卡、套餐票、广告、零售、场地租赁。'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本', notes: ['来源图将电影放映成本和餐饮成本分列为终端项目。'] },
          operatingExpenses: {
            items: [
              { id: 'operating', label: '运营', notes: ['占收入 36%', '同比 +3 个百分点'] },
              { id: 'rent', label: '租金', notes: ['占收入 17%', '同比 +1 个百分点'] },
              { id: 'depreciation_amortization', label: '折旧及摊销', notes: ['占收入 6%', '同比 +0 个百分点'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (0 个百分点)'] },
              { id: 'impairment', label: '减值' },
            ],
          },
          tax: { label: '税费', notes: ['来源图未单列税费终端项目。'] },
        },
        otherExpenses: {
          items: [{ id: 'other', label: '其他', notes: ['使盈亏平衡的营业利润转为 1.27 亿美元净亏损的非经营性终端费用。'] }],
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 68%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 0%', '同比 (0 个百分点)'] },
          net: { label: '净亏损', notes: ['利润率 (10%)', '同比 +1 个百分点'] },
        },
      },
    },
  });
})(window);
