/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in period-specific dataset adapters. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'home-depot-q3-fy25',
      company: 'Home Depot',
      period: 'Q3 FY25',
      periodNote: 'Three months ended November 2, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/home-depot-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 41.3,
        notes: ['+3% Y/Y'],
        items: [
          { id: 'building_materials', label: 'Building Materials', value: 13.6, notes: ['+0% Y/Y', 'Electrical/Lighting, Lumber, Millwork, and Plumbing'] },
          { id: 'decor', label: 'Décor', value: 12.9, notes: ['+1% Y/Y', 'Appliances, Storage, Flooring, Kitchen and Bath, and Paint'] },
          { id: 'hardlines', label: 'Hardlines', value: 10.9, notes: ['+0% Y/Y', 'Hardware, Indoor Garden, Outdoor Garden, and Tools'] },
          { id: 'other', label: 'Other', value: 3.9, notes: ['+33% Y/Y', 'SRS Distribution'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 27.5 },
        operatingExpenses: {
          total: 8.5,
          items: [
            { id: 'sga', label: 'SG&A', value: 7.6 },
            { id: 'da', label: 'Depreciation & amortization', value: 0.8 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.2 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.6,
        items: [{ id: 'interest', label: 'Interest', value: 0.6 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 13.8, notes: ['33% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 5.4, notes: ['13% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.6, notes: ['9% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 11 月 2 日的三个月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              { id: 'building_materials', label: '建筑材料', notes: ['同比 +0%', '电气／照明、木材、木制品和管道'] },
              { id: 'decor', label: '家居装饰', notes: ['同比 +1%', '电器、收纳、地板、厨房与卫浴及涂料'] },
              { id: 'hardlines', label: '五金硬货', notes: ['同比 +0%', '五金、室内园艺、户外园艺和工具'] },
              { id: 'other', label: '其他', notes: ['同比 +33%', 'SRS Distribution（建材分销商）'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'da', label: '折旧及摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 33%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 (0 个百分点)'] },
          },
        },
      },
    },
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
    },
    {
      key: 'home-depot-q4-fy25',
      company: 'Home Depot',
      period: 'Q4 FY25',
      periodNote: 'Three months ended February 1, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/home-depot-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 38.2,
        notes: ['(4%) Y/Y', 'Reported net sales were $38.198B; the source chart rounds to $38.2B.'],
        items: [
          { id: 'building_materials', label: 'Building Materials', value: 11.7, notes: ['(8%) Y/Y', 'Electrical/Lighting, Lumber, Millwork, and Plumbing'] },
          { id: 'decor', label: 'Décor', value: 12.4, notes: ['(7%) Y/Y', 'Appliances, Storage, Flooring, Kitchen and Bath, and Paint'] },
          { id: 'hardlines', label: 'Hardlines', value: 10.9, notes: ['(4%) Y/Y', 'Hardware, Indoor Garden, Outdoor Garden, and Tools'] },
          { id: 'other', label: 'Other', value: 3.1, notes: ['+42% Y/Y', 'SRS Distribution and GMS'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 25.7, notes: ['Reported cost of sales was $25.732B; the source chart rounds to $25.7B.'] },
        operatingExpenses: {
          total: 8.6,
          items: [
            { id: 'sga', label: 'SG&A', value: 7.8, notes: ['Reported selling, general and administrative expense was $7.772B; the source chart rounds to $7.8B.'] },
            { id: 'da', label: 'Depreciation & amortization', value: 0.8, notes: ['Reported depreciation and amortization was $0.845B; the source chart rounds to $0.8B.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7, notes: ['Reported provision for income taxes was $0.727B; the source chart rounds to $0.7B.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.6,
        items: [{ id: 'interest', label: 'Interest', value: 0.6, notes: ['The source chart rounds reported interest and other, net expense of $0.551B to $0.6B.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.5, notes: ['33% margin', '(0pp) Y/Y', 'Reported gross profit was $12.466B.'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.8, notes: ['10% margin', '(1pp) Y/Y', 'Reported operating income was $3.849B.'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.6, notes: ['7% margin', '(1pp) Y/Y', 'Reported net earnings were $2.571B.'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2026 年 2 月 1 日的三个月',
          revenue: {
            notes: ['同比 (4%)', '报告净销售额为 $38.198B；来源图四舍五入为 $38.2B。'],
            items: [
              { id: 'building_materials', label: '建筑材料', notes: ['同比 (8%)', '电气／照明、木材、木制品和管道'] },
              { id: 'decor', label: '家居装饰', notes: ['同比 (7%)', '电器、收纳、地板、厨房与卫浴及涂料'] },
              { id: 'hardlines', label: '五金硬货', notes: ['同比 (4%)', '五金、室内园艺、户外园艺和工具'] },
              { id: 'other', label: '其他', notes: ['同比 +42%', 'SRS Distribution 和 GMS'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本', notes: ['报告销售成本为 $25.732B；来源图四舍五入为 $25.7B。'] },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用', notes: ['报告销售、一般及行政费用为 $7.772B；来源图四舍五入为 $7.8B。'] },
                { id: 'da', label: '折旧及摊销', notes: ['报告折旧及摊销为 $0.845B；来源图四舍五入为 $0.8B。'] },
              ],
            },
            tax: { label: '税费', notes: ['报告所得税费用为 $0.727B；来源图四舍五入为 $0.7B。'] },
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息', notes: ['来源图将报告的利息及其他净费用 $0.551B 四舍五入为 $0.6B。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 33%', '同比 (0 个百分点)', '报告毛利润为 $12.466B。'] },
            operating: { label: '营业利润', notes: ['利润率 10%', '同比 (1 个百分点)', '报告营业利润为 $3.849B。'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 (1 个百分点)', '报告净利润为 $2.571B。'] },
          },
        },
      },
    }
  );
})(window);
