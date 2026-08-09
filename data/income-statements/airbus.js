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
      key: 'airbus-fy25',
      company: 'Airbus',
      period: 'FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/airbus-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 73.4,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'airbus_segment', label: 'Airbus', value: 52.6, notes: ['+4% Y/Y', '9% EBIT margin'] },
          { id: 'helicopters', label: 'Helicopters', value: 9.0, notes: ['+13% Y/Y', '11% EBIT margin'] },
          { id: 'defense_space', label: 'Defense & Space', value: 13.4, notes: ['+11% Y/Y', '5% EBIT margin'] },
          { id: 'inter_segment', label: 'Inter-segment', value: -1.5 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 62.5 },
        operatingExpenses: {
          total: 5.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 3.2, notes: ['4% of revenue', '(0pp) Y/Y'] },
            { id: 'administrative', label: 'Administrative', value: 1.7, notes: ['2% of revenue', '(0pp) Y/Y'] },
            { id: 'selling', label: 'Selling', value: 0.9, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.4 },
      },
      otherIncome: {
        total: 1.1,
        items: [
          { id: 'other_income', label: 'Other', value: 0.9 },
          { id: 'interest', label: 'Interest', value: 0.2 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 11.0, notes: ['15% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 5.2, notes: ['7% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.0, notes: ['7% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'airbus_segment', label: '空中客车', notes: ['同比 +4%', '9% EBIT 利润率'] },
              { id: 'helicopters', label: '直升机', notes: ['同比 +13%', '11% EBIT 利润率'] },
              { id: 'defense_space', label: '防务与航天', notes: ['同比 +11%', '5% EBIT 利润率'] },
              { id: 'inter_segment', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 4%', '同比 (0 个百分点)'] },
                { id: 'administrative', label: '行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
                { id: 'selling', label: '销售', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他' },
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 15%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'airbus-q1-fy26',
      company: 'Airbus',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/airbus-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 12.7,
        notes: ['(7%) Y/Y'],
        items: [
          { id: 'airbus_segment', label: 'Airbus', value: 8.4, notes: ['(11%) Y/Y', '1% segment margin'] },
          { id: 'helicopters', label: 'Helicopters', value: 1.6, notes: ['+0% Y/Y', '4% segment margin'] },
          { id: 'defense_space', label: 'Defense & Space', value: 2.8, notes: ['+7% Y/Y', '5% segment margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 11.1 },
        operatingExpenses: {
          total: 1.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.7, notes: ['6% of revenue', '+1pp Y/Y'] },
            { id: 'administrative', label: 'Administrative', value: 0.4, notes: ['3% of revenue', '+0pp Y/Y'] },
            { id: 'selling', label: 'Selling', value: 0.2, notes: ['2% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.5,
        items: [{ id: 'other_income', label: 'Other', value: 0.5 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.6, notes: ['12% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.2, notes: ['2% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.6, notes: ['4% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 (7%)'],
            items: [
              { id: 'airbus_segment', label: '空中客车', notes: ['同比 (11%)', '分部利润率 1%'] },
              { id: 'helicopters', label: '直升机', notes: ['同比 +0%', '分部利润率 4%'] },
              { id: 'defense_space', label: '防务与航天', notes: ['同比 +7%', '分部利润率 5%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 6%', '同比 +1 个百分点'] },
                { id: 'administrative', label: '行政', notes: ['占收入 3%', '同比 +0 个百分点'] },
                { id: 'selling', label: '销售', notes: ['占收入 2%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 4%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'airbus-q2-fy26',
      company: 'Airbus',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/airbus-q2-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 20.5,
        notes: ['+28% Y/Y'],
        items: [
          { id: 'airbus_segment', label: 'Airbus', value: 15.4, notes: ['+37% Y/Y', '9% segment margin'] },
          { id: 'helicopters', label: 'Helicopters', value: 2.1, notes: ['(1%) Y/Y', '7% segment margin'] },
          { id: 'defense_space', label: 'Defense & Space', value: 3.5, notes: ['+10% Y/Y', '(16%) segment margin'] },
          { id: 'inter_segment', label: 'Inter-segment', value: -0.5 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 16.7 },
        operatingExpenses: {
          total: 1.5,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.7, notes: ['4% of revenue', '(1pp) Y/Y'] },
            { id: 'administrative', label: 'Administrative', value: 0.5, notes: ['2% of revenue', '(0pp) Y/Y'] },
            { id: 'selling', label: 'Selling', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      operatingOtherIncome: {
        total: 0.2,
        items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.3,
        items: [{ id: 'other_expense', label: 'Other', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.8, notes: ['18% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.5, notes: ['12% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['8% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +28%'],
            items: [
              { id: 'airbus_segment', label: '空中客车', notes: ['同比 +37%', '分部利润率 9%'] },
              { id: 'helicopters', label: '直升机', notes: ['同比 (1%)', '分部利润率 7%'] },
              { id: 'defense_space', label: '防务与航天', notes: ['同比 +10%', '分部利润率 (16%)'] },
              { id: 'inter_segment', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 4%', '同比 (1 个百分点)'] },
                { id: 'administrative', label: '行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
                { id: 'selling', label: '销售', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 18%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 +4 个百分点'] },
          },
        },
      },
    }
  );
})(window);
