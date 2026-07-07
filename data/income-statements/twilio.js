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
      key: 'twilio-q4-fy25',
      company: 'Twilio',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/twilio-q4-fy25.png',
      roundingTolerance: 6.5,
      revenue: {
        total: 1366,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'united_states', label: 'United States', value: 880, notes: ['+14% Y/Y'] },
          { id: 'international', label: 'International', value: 486, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 704 },
        operatingExpenses: {
          total: 606,
          notes: ['R&D, S&M, and G&A line items sum to $600M because the source chart rounds each item.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 269, notes: ['20% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 222, notes: ['16% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 109, notes: ['8% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['The source chart does not show a separate income tax line; non-operating items are grouped as Other.'],
        },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 103,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 103,
            notes: ['Non-operating items grouped in the source chart; this deduction turns $57M operating profit into a $45M net loss.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 662, notes: ['48% margin', '(2pp) Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 57,
          notes: [
            '4% margin',
            '+3pp Y/Y',
            'Gross profit less operating expenses sums to $56M; the source chart reports $57M operating profit due to rounded line items.',
          ],
        },
        net: {
          id: 'net_loss',
          label: 'Net loss',
          value: -45,
          notes: [
            'Operating profit of $57M less Other of $103M sums to a $46M net loss; the source chart reports $45M net loss due to rounded line items.',
          ],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +14%'] },
              { id: 'international', label: '国际', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['研发、销售与市场、管理费用项目因来源图逐项取整合计为 $600M。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 20%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 16%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 (2 个百分点)'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图未单列所得税；非经营性项目合并显示为“其他”。'],
            },
          },
          otherExpenses: {
            items: [
              {
                id: 'other',
                label: '其他',
                notes: ['来源图合并显示的非经营性项目；该扣减将 $57M 营业利润转为 $45M 净亏损。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 48%', '同比 (2 个百分点)'] },
            operating: {
              label: '营业利润',
              notes: [
                '利润率 4%',
                '同比 +3 个百分点',
                '毛利润减运营费用合计为 $56M；来源图因项目取整报告 $57M 营业利润。',
              ],
            },
            net: {
              label: '净亏损',
              notes: ['$57M 营业利润减 $103M 其他项目合计为 $46M 净亏损；来源图因项目取整报告 $45M 净亏损。'],
            },
          },
        },
      },
    }
  );
})(window);
