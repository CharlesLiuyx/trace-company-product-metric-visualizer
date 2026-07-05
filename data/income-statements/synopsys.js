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
      key: 'synopsys-q2-fy26',
      company: 'Synopsys',
      period: 'Q2 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/synopsys-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 2.275985,
        notes: ['+42% Y/Y'],
        items: [
          {
            id: 'design_automation',
            label: 'Design Automation',
            value: 1.8218,
            notes: ['+62% Y/Y', 'Adjusted margin 41%', '+5pp Y/Y'],
          },
          {
            id: 'design_ip',
            label: 'Design IP',
            value: 0.4542,
            notes: ['(6%) Y/Y', 'Adjusted margin 14%', '(23pp) Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0.62985,
          notes: ['Official total cost of revenue was $629.9M; source chart displays ($0.6B).'],
        },
        operatingExpenses: {
          total: 1.525709,
          notes: ['Official total operating expenses were $1.526B; source chart displays ($1.5B).'],
          items: [
            { id: 'rnd', label: 'R&D', value: 0.700124, notes: ['31% of revenue', '(4pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.381998, notes: ['17% of revenue', '+3pp Y/Y'] },
            {
              id: 'other_opex',
              label: 'Other',
              value: 0.271169,
              notes: ['12% of revenue', '+12pp Y/Y', 'Includes acquired-intangible amortization and restructuring charges.'],
            },
            { id: 'ga', label: 'G&A', value: 0.172418, notes: ['8% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 0.103321,
          notes: [
            'Modeled as the source chart tax outflow from operating profit to net profit; official provision for income taxes was $2.4M and net interest/other expense accounts for the remainder.',
          ],
        },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.646135, notes: ['72% margin', '(8pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.120426, notes: ['5% margin', '(18pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.017105, valueText: '$17M', notes: ['1% margin', '(21pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +42%'],
            items: [
              {
                id: 'design_automation',
                label: '设计自动化',
                notes: ['同比 +62%', '调整后利润率 41%', '同比 +5 个百分点'],
              },
              {
                id: 'design_ip',
                label: '设计 IP',
                notes: ['同比 (6%)', '调整后利润率 14%', '同比 (23 个百分点)'],
              },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['官方收入成本合计为 $629.9M；来源图表显示为 ($0.6B)。'],
            },
            operatingExpenses: {
              notes: ['官方运营费用合计为 $1.526B；来源图表显示为 ($1.5B)。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 31%', '同比 (4 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 17%', '同比 +3 个百分点'] },
                {
                  id: 'other_opex',
                  label: '其他',
                  notes: ['占收入 12%', '同比 +12 个百分点', '包括收购无形资产摊销和重组费用。'],
                },
                { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
              ],
            },
            tax: {
              label: '税费',
              notes: [
                '按来源图表中从营业利润流向净利润的税费流出建模；官方所得税拨备为 $2.4M，净利息和其他费用解释剩余差额。',
              ],
            },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 (8 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 (18 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 1%', '同比 (21 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
