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
      key: 'lowes-q4-fy25',
      company: "Lowe's",
      period: 'Q4 FY25',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/lowes-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 20.6,
        notes: ['+11% Y/Y'],
        items: [
          {
            id: 'home_decor',
            label: 'Home Décor',
            value: 7.8,
            notes: ['(1%) Y/Y', 'Appliances, Décor, Flooring, Kitchen & Bath, and Paint'],
          },
          {
            id: 'building_products',
            label: 'Building Products',
            value: 6.0,
            notes: ['+2% Y/Y', 'Electrical/Lighting, Lumber, Millwork, and Plumbing'],
          },
          {
            id: 'hardlines',
            label: 'Hardlines',
            value: 4.9,
            notes: ['+4% Y/Y', 'Hardware, Indoor Garden, Outdoor Garden, and Tools'],
          },
          { id: 'other', label: 'Other', value: 1.9, notes: ['NM'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 13.9 },
        operatingExpenses: {
          total: 5.0,
          items: [
            { id: 'sga', label: 'SG&A', value: 4.4 },
            { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.4,
        items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.7, notes: ['32% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.7, notes: ['8% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.0, notes: ['5% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'home_decor', label: '家居装饰', notes: ['同比 (1%)', '家电、装饰、地板、厨卫及涂料'] },
              { id: 'building_products', label: '建筑产品', notes: ['同比 +2%', '电气及照明、木材、木制品及管道'] },
              { id: 'hardlines', label: '耐用品', notes: ['同比 +4%', '五金、室内园艺、户外园艺及工具'] },
              { id: 'other', label: '其他', notes: ['不适用'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'depreciation_amortization', label: '折旧及摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 32%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'lowes-q1-fy26',
      company: "Lowe's",
      period: 'Q1 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/lowes-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 23.1,
        notes: ['+10% Y/Y'],
        items: [
          {
            id: 'home_decor',
            label: 'Home Décor',
            value: 7.2,
            notes: ['+1% Y/Y', 'Appliances, Décor, Flooring, Kitchen & Bath, and Paint'],
          },
          {
            id: 'building_products',
            label: 'Building Products',
            value: 6.8,
            notes: ['(0%) Y/Y', 'Electrical/Lighting, Lumber, Millwork, and Plumbing'],
          },
          {
            id: 'hardlines',
            label: 'Hardlines',
            value: 6.8,
            notes: ['+3% Y/Y', 'Hardware, Indoor Garden, Outdoor Garden, and Tools'],
          },
          { id: 'other', label: 'Other', value: 2.3, notes: ['+4444% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 15.5 },
        operatingExpenses: {
          total: 5.0,
          items: [
            { id: 'sga', label: 'SG&A', value: 4.4 },
            { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.4,
        items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.5, notes: ['33% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.6, notes: ['11% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['7% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'home_decor', label: '家居装饰', notes: ['同比 +1%', '家电、装饰、地板、厨卫及涂料'] },
              { id: 'building_products', label: '建筑产品', notes: ['同比 (0%)', '电气及照明、木材、木制品及管道'] },
              { id: 'hardlines', label: '耐用品', notes: ['同比 +3%', '五金、室内园艺、户外园艺及工具'] },
              { id: 'other', label: '其他', notes: ['同比 +4444%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'depreciation_amortization', label: '折旧及摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 33%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
