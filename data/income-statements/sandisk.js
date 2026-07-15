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
      key: 'sandisk-q2-fy26',
      company: 'Sandisk',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/sandisk-q2-fy26.png',
      roundingTolerance: 2,
      revenue: {
        total: 3025,
        notes: ['+61% Y/Y'],
        items: [
          { id: 'datacenter', label: 'Datacenter', value: 440, notes: ['+76% Y/Y'] },
          { id: 'edge', label: 'Edge', value: 1678, notes: ['+63% Y/Y'] },
          { id: 'consumer', label: 'Consumer', value: 907, notes: ['+52% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1484 },
        operatingExpenses: {
          total: 476,
          items: [
            { id: 'rnd', label: 'R&D', value: 327 },
            { id: 'sga', label: 'SG&A', value: 139 },
            { id: 'other_opex', label: 'Other', value: 10 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 134 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 128,
        items: [
          { id: 'other_non_operating', label: 'Other', value: 128 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1541, notes: ['51% margin', '+19pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1065, notes: ['35% margin', '+25pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 803, notes: ['27% margin', '+21pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +61%'],
            items: [
              { id: 'datacenter', label: '数据中心', notes: ['同比 +76%'] },
              { id: 'edge', label: '边缘', notes: ['同比 +63%'] },
              { id: 'consumer', label: '消费级', notes: ['同比 +52%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +19 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 35%', '同比 +25 个百分点'] },
            net: { label: '净利润', notes: ['利润率 27%', '同比 +21 个百分点'] },
          },
        },
      },
    },
    {
      key: 'sandisk-q3-fy26',
      company: 'Sandisk',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/sandisk-q3-fy26.png',
      roundingTolerance: 0.2,
      // Source-fidelity note: figures reproduce the source infographic as
      // published. They are implausible for a NAND/storage maker (78% gross,
      // 69% operating, 61% net margins; +252% Y/Y revenue) and the source
      // draws the Datacenter/Consumer segment bars inconsistently with their
      // labelled values. Reproduced faithfully, not corrected.
      revenue: {
        total: 6.0,
        notes: ['+252% Y/Y'],
        items: [
          { id: 'datacenter', label: 'Datacenter', value: 1.5, notes: ['+645% Y/Y'] },
          { id: 'edge', label: 'Edge', value: 3.7, notes: ['+295% Y/Y'] },
          { id: 'consumer', label: 'Consumer', value: 0.8, notes: ['+44% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.3 },
        operatingExpenses: {
          total: 0.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.3 },
            { id: 'sga', label: 'SG&A', value: 0.2 },
            { id: 'other_opex', label: 'Other', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.004,
        items: [
          { id: 'other_non_operating', label: 'Other', value: 0.004 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.7, notes: ['78% margin', '+56pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.1, notes: ['69% margin', '+180pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.6, notes: ['61% margin', '+175pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +252%'],
            items: [
              { id: 'datacenter', label: '数据中心', notes: ['同比 +645%'] },
              { id: 'edge', label: '边缘', notes: ['同比 +295%'] },
              { id: 'consumer', label: '消费级', notes: ['同比 +44%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 78%', '同比 +56 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 69%', '同比 +180 个百分点'] },
            net: { label: '净利润', notes: ['利润率 61%', '同比 +175 个百分点'] },
          },
        },
      },
    }
  );
})(window);
