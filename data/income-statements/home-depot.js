/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/home-depot-q1-fy26.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'home-depot-q1-fy26',
      company: 'Home Depot',
      period: 'Q1 FY26',
      periodNote: 'Three months ended May 3, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/home-depot-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 41.8,
        notes: ['+5% Y/Y', 'Reported net sales were $41.765B; the source chart rounds to $41.8B.'],
        items: [
          {
            id: 'building_materials',
            label: 'Building Materials',
            value: 13.0,
            notes: ['(0%) Y/Y', 'Electrical/Lighting, Lumber, Millwork, and Plumbing'],
          },
          {
            id: 'decor',
            label: 'Décor',
            value: 12.6,
            notes: ['+1% Y/Y', 'Appliances, Storage, Flooring, Kitchen and Bath, and Paint'],
          },
          {
            id: 'hardlines',
            label: 'Hardlines',
            value: 12.2,
            notes: ['+3% Y/Y', 'Hardware, Indoor Garden, Outdoor Garden, and Tools'],
          },
          {
            id: 'other',
            label: 'Other',
            value: 4.0,
            notes: ['+56% Y/Y', 'SRS Distribution and GMS'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 28.0, notes: ['Reported cost of sales was $27.984B; the source chart rounds to $28.0B.'] },
        operatingExpenses: {
          total: 8.8,
          items: [
            { id: 'sga', label: 'SG&A', value: 8.0, notes: ['Reported selling, general and administrative expense was $7.959B; the source chart rounds to $8.0B.'] },
            { id: 'da', label: 'Depreciation & amortization', value: 0.8, notes: ['Reported depreciation and amortization was $0.841B; the source chart rounds to $0.8B.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.1, notes: ['Reported provision for income taxes was $1.088B; the source chart rounds to $1.1B.'] },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.6,
        items: [{ id: 'interest', label: 'Interest', value: 0.6, notes: ['The source chart rounds reported interest and other, net expense of $0.604B to $0.6B.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 13.8, notes: ['33% margin', '(1pp) Y/Y', 'Reported gross profit was $13.781B.'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 5.0, notes: ['12% margin', '(1pp) Y/Y', 'Reported operating income was $4.981B.'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.3, notes: ['8% margin', '(1pp) Y/Y', 'Reported net earnings were $3.289B.'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 5 月 3 日的三个月',
          revenue: {
            notes: ['同比 +5%', '报告净销售额为 $41.765B；来源图四舍五入为 $41.8B。'],
            items: [
              { id: 'building_materials', label: '建筑材料', notes: ['同比 (0%)', '电气／照明、木材、木制品和管道'] },
              { id: 'decor', label: '家居装饰', notes: ['同比 +1%', '电器、收纳、地板、厨房与卫浴及涂料'] },
              { id: 'hardlines', label: '五金硬货', notes: ['同比 +3%', '五金、室内园艺、户外园艺和工具'] },
              { id: 'other', label: '其他', notes: ['同比 +56%', 'SRS Distribution 和 GMS'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本', notes: ['报告销售成本为 $27.984B；来源图四舍五入为 $28.0B。'] },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用', notes: ['报告销售、一般及行政费用为 $7.959B；来源图四舍五入为 $8.0B。'] },
                { id: 'da', label: '折旧及摊销', notes: ['报告折旧及摊销为 $0.841B；来源图四舍五入为 $0.8B。'] },
              ],
            },
            tax: { label: '税费', notes: ['报告所得税费用为 $1.088B；来源图四舍五入为 $1.1B。'] },
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息', notes: ['来源图将报告的利息和其他净费用 $0.604B 四舍五入为 $0.6B。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 33%', '同比 (1 个百分点)', '报告毛利润为 $13.781B。'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)', '报告营业利润为 $4.981B。'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 (1 个百分点)', '报告净利润为 $3.289B。'] },
          },
        },
      },
    }
  );
})(window);
