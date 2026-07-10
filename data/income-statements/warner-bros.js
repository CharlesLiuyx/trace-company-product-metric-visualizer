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
      key: 'warner-bros-q1-fy26',
      company: 'Warner Bros. Discovery',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/warner-bros-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.893,
        notes: ['(1%) Y/Y'],
        items: [
          { id: 'studios', label: 'Studios', value: 3.125, notes: ['+35% Y/Y', '25% adj. margin', '+14pp Y/Y'] },
          { id: 'networks', label: 'Networks', value: 4.377, notes: ['(8%) Y/Y', '37% adj. margin', '(0pp) Y/Y'] },
          { id: 'streaming', label: 'Streaming', value: 2.887, notes: ['+9% Y/Y', '15% adj. margin', '+2pp Y/Y'] },
          {
            label: 'Eliminations',
            value: -1.497,
            notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.628 },
        operatingExpenses: {
          total: 6.734,
          items: [
            { id: 'sga', label: 'SG&A', value: 2.469, notes: ['28% of revenue', '+3pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 1.247, notes: ['14% of revenue', '(3pp) Y/Y'] },
            { id: 'other', label: 'Other', value: 0.218, notes: ['2% of revenue', '+0pp Y/Y'] },
            { id: 'netflix_termination_fee', label: 'Netflix Termination Fee', value: 2.8, notes: ['New'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.431,
        items: [
          {
            label: 'Net non-operating expense and attributable adjustments',
            value: 0.431,
            notes: ['Bridge from source-chart operating loss to the official approximately $2.9B net loss.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.265, notes: ['48% margin', '+5pp Y/Y'] },
        operating: { label: 'Operating loss', value: -2.469, notes: ['(28%) margin', '(27pp) Y/Y'] },
        net: {
          label: 'Net loss',
          value: -2.9,
          notes: ['Official release states net loss available to Warner Bros. Discovery, Inc. was $2.9B.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 (1%)'],
            items: [
              { label: '影视工作室', notes: ['同比 +35%', '调整后利润率 25%', '同比 +14 个百分点'] },
              { label: '线性网络', notes: ['同比 (8%)', '调整后利润率 37%', '同比 (0 个百分点)'] },
              { label: '流媒体', notes: ['同比 +9%', '调整后利润率 15%', '同比 +2 个百分点'] },
              { label: '抵销', notes: ['来源图中作为单独红色流出的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售、一般及行政', notes: ['占收入 28%', '同比 +3 个百分点'] },
                { label: '摊销', notes: ['占收入 14%', '同比 (3 个百分点)'] },
                { label: '其他', notes: ['占收入 2%', '同比 +0 个百分点'] },
                { label: 'Netflix 解约费', notes: ['新增'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              {
                label: '净非经营费用及归属调整',
                notes: ['用于从来源图中的经营亏损桥接到官方约 $2.9B 净亏损。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 48%', '同比 +5 个百分点'] },
            operating: { label: '经营亏损', notes: ['利润率 (28%)', '同比 (27 个百分点)'] },
            net: { label: '净亏损', notes: ['官方公告称 Warner Bros. Discovery, Inc. 应占净亏损为 $2.9B。'] },
          },
        },
      },
    }
    ,
    {
      key: 'warner-bros-q4-fy25',
      company: 'Warner Bros. Discovery',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/warner-bros-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.5,
        notes: ['(6%) Y/Y'],
        items: [
          { id: 'studios', label: 'Studios', value: 3.2, notes: ['(13%) Y/Y', '23% adj. margin', '(3pp) Y/Y'] },
          { id: 'networks', label: 'Networks', value: 4.2, notes: ['(12%) Y/Y', '33% adj. margin', '(7pp) Y/Y'] },
          { id: 'streaming', label: 'Streaming', value: 2.8, notes: ['+5% Y/Y', '14% adj. margin', '(1pp) Y/Y'] },
          { label: 'Eliminations', value: -0.7, notes: ['Inter-segment eliminations shown as a separate red outflow.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.2 },
        operatingExpenses: {
          total: 3.9,
          items: [
            { id: 'sga', label: 'SG&A', value: 2.4, notes: ['25% of revenue', '+3pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 1.3, notes: ['14% of revenue', '(2pp) Y/Y'] },
            { id: 'other_operating_expense', label: 'Other', value: 0.2 },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.6,
        items: [
          { id: 'other_nonoperating', label: 'Other', value: 0.6, notes: ['Source-chart bridge from operating profit to net loss.'] },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.2, notes: ['45% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.3, notes: ['4% margin', '+2pp Y/Y'] },
        net: { label: 'Net loss', value: -0.2 },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 (6%)'],
            items: [
              { label: '影视工作室', notes: ['同比 (13%)', '调整后利润率 23%', '同比 (3 个百分点)'] },
              { label: '线性网络', notes: ['同比 (12%)', '调整后利润率 33%', '同比 (7 个百分点)'] },
              { label: '流媒体', notes: ['同比 +5%', '调整后利润率 14%', '同比 (1 个百分点)'] },
              { label: '抵销', notes: ['来源图中作为单独红色流出的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售、一般及行政', notes: ['占收入 25%', '同比 +3 个百分点'] },
                { label: '摊销', notes: ['占收入 14%', '同比 (2 个百分点)'] },
                { label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ label: '其他', notes: ['来源图中从营业利润桥接至净亏损的项目。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 +2 个百分点'] },
            net: { label: '净亏损' },
          },
        },
      },
    }
  );
})(window);
