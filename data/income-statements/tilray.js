/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/tilray-q2-fy26.js. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'tilray-q2-fy26',
    company: 'Tilray Brands',
    period: 'Q2 FY26',
    periodNote: 'Three months ended Nov. 30, 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/tilray-q2-fy26.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 218,
      notes: ['+3% Y/Y'],
      items: [
        { id: 'beverage_alcohol', label: ['Beverage', 'alcohol'], value: 50, notes: ['(21%) Y/Y', '31% gross margin'] },
        { id: 'cannabis', label: 'Cannabis', value: 68, notes: ['+3% Y/Y', '39% gross margin'] },
        { id: 'distribution', label: 'Distribution', value: 85, notes: ['+26% Y/Y', '13% gross margin'] },
        { id: 'wellness', label: 'Wellness', value: 15, notes: ['(0%) Y/Y', '32% gross margin'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_goods_sold', label: ['Cost of', 'goods sold'], value: 160 },
      operatingExpenses: {
        total: 80,
        items: [
          { id: 'ga', label: 'G&A', value: 51, notes: ['24% of revenue', '+2pp Y/Y'] },
          { id: 'selling', label: 'Selling', value: 12, notes: ['5% of revenue', '(2pp) Y/Y'] },
          { id: 'marketing', label: 'Marketing', value: 10, notes: ['5% of revenue', '(0pp) Y/Y'] },
          { id: 'amortization', label: 'Amortization', value: 4, notes: ['2% of revenue', '(9pp) Y/Y'] },
          { id: 'other', label: 'Other', value: 2, notes: ['1% of revenue', '(3pp) Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0, notes: ['No separate tax terminal is depicted in the source chart.'] },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 57, notes: ['26% margin', '(3pp) Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -22, notes: ['(10%) margin', '+10pp Y/Y'] },
      net: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -22,
        notes: ['No separate net income or net loss terminal is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2025 年 11 月 30 日的三个月',
        revenue: {
          notes: ['同比 +3%'],
          items: [
            { id: 'beverage_alcohol', label: ['酒精', '饮料'], notes: ['同比 (21%)', '毛利率 31%'] },
            { id: 'cannabis', label: '大麻', notes: ['同比 +3%', '毛利率 39%'] },
            { id: 'distribution', label: '分销', notes: ['同比 +26%', '毛利率 13%'] },
            { id: 'wellness', label: '健康产品', notes: ['同比 (0%)', '毛利率 32%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: {
            items: [
              { id: 'ga', label: '一般及行政费用', notes: ['占收入 24%', '同比 +2 个百分点'] },
              { id: 'selling', label: '销售费用', notes: ['占收入 5%', '同比 (2 个百分点)'] },
              { id: 'marketing', label: '市场营销', notes: ['占收入 5%', '同比 (0 个百分点)'] },
              { id: 'amortization', label: '摊销', notes: ['占收入 2%', '同比 (9 个百分点)'] },
              { id: 'other', label: '其他', notes: ['占收入 1%', '同比 (3 个百分点)'] },
            ],
          },
          tax: { label: '税费', notes: ['来源图未单列税费终端项目。'] },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 26%', '同比 (3 个百分点)'] },
          operating: { label: '营业亏损', notes: ['利润率 (10%)', '同比 +10 个百分点'] },
          net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损终端项目。'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'tilray-q3-fy26',
    company: 'Tilray Brands',
    period: 'Q3 FY26',
    periodNote: 'Three months ended Feb. 28, 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/tilray-q3-fy26.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 207,
      notes: ['+11% Y/Y'],
      items: [
        { id: 'beverage_alcohol', label: ['Beverage', 'alcohol'], value: 43, notes: ['(24%) Y/Y', '32% gross margin'] },
        { id: 'cannabis', label: 'Cannabis', value: 65, notes: ['+19% Y/Y', '40% gross margin'] },
        { id: 'distribution', label: 'Distribution', value: 83, notes: ['+35% Y/Y', '12% gross margin'] },
        { id: 'wellness', label: 'Wellness', value: 16, notes: ['+16% Y/Y', '33% gross margin'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_goods_sold', label: ['Cost of', 'goods sold'], value: 152 },
      operatingExpenses: {
        total: 81,
        items: [
          { id: 'ga', label: 'G&A', value: 50, notes: ['24% of revenue', '+3pp Y/Y'] },
          { id: 'selling', label: 'Selling', value: 11, notes: ['5% of revenue', '(2pp) Y/Y'] },
          { id: 'marketing', label: 'Marketing', value: 9, notes: ['4% of revenue', '+1pp Y/Y'] },
          { id: 'amortization', label: 'Amortization', value: 5, notes: ['2% of revenue', '(10pp) Y/Y'] },
          { id: 'other', label: 'Other', value: 7, notes: ['3% of revenue', '(13pp) Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0, notes: ['No separate tax terminal is depicted in the source chart.'] },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 55, notes: ['27% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -26, notes: ['(13%) margin', '+396pp Y/Y'] },
      net: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -26,
        notes: ['No separate net income or net loss terminal is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2026 财年第三季度',
        periodNote: '截至 2026 年 2 月 28 日的三个月',
        revenue: {
          notes: ['同比 +11%'],
          items: [
            { id: 'beverage_alcohol', label: ['酒精', '饮料'], notes: ['同比 (24%)', '毛利率 32%'] },
            { id: 'cannabis', label: '大麻', notes: ['同比 +19%', '毛利率 40%'] },
            { id: 'distribution', label: '分销', notes: ['同比 +35%', '毛利率 12%'] },
            { id: 'wellness', label: '健康产品', notes: ['同比 +16%', '毛利率 33%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: {
            items: [
              { id: 'ga', label: '一般及行政费用', notes: ['占收入 24%', '同比 +3 个百分点'] },
              { id: 'selling', label: '销售费用', notes: ['占收入 5%', '同比 (2 个百分点)'] },
              { id: 'marketing', label: '市场营销', notes: ['占收入 4%', '同比 +1 个百分点'] },
              { id: 'amortization', label: '摊销', notes: ['占收入 2%', '同比 (10 个百分点)'] },
              { id: 'other', label: '其他', notes: ['占收入 3%', '同比 (13 个百分点)'] },
            ],
          },
          tax: { label: '税费', notes: ['来源图未单列税费终端项目。'] },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 27%', '同比 (1 个百分点)'] },
          operating: { label: '营业亏损', notes: ['利润率 (13%)', '同比 +396 个百分点'] },
          net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损终端项目。'] },
        },
      },
    },
  });
})(window);
