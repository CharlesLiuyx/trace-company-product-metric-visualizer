/* Pure income-statement SSOT records. Financial data only -- Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'marvell-q4-fy26',
      company: 'Marvell',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/marvell-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 2.2,
        notes: ['+22% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data center', value: 1.7, notes: ['+21% Y/Y'] },
          { id: 'communications_and_other', label: 'Communications and other', value: 0.6, notes: ['+26% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.1 },
        operatingExpenses: {
          total: 0.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.5, notes: ['24% of revenue', '(3pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.2, notes: ['9% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0, notes: ['Source chart shows a $15M tax benefit instead of tax expense.'] },
      },
      otherIncome: {
        total: 0.015,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.015, notes: ['$15M'] }],
      },
      otherExpenses: {
        total: 0.023,
        items: [
          {
            id: 'other_non_operating',
            label: 'Other',
            value: 0.023,
            notes: ['$23M deducted between operating profit and net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.1, notes: ['52% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.4, notes: ['18% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['92% margin', '+136pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +21%'] },
              { id: 'communications_and_other', label: '通信及其他', notes: ['同比 +26%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 (3 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 9%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图显示 $15M 税收收益，而非税费。'] },
          },
          otherIncome: {
            items: [{ id: 'tax_benefit', label: '税收收益', notes: ['$15M'] }],
          },
          otherExpenses: {
            items: [
              {
                id: 'other_non_operating',
                label: '其他',
                notes: ['$23M，在营业利润与净利润之间扣除。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 92%', '同比 +136 个百分点'] },
          },
        },
      },
    }
  );
})(window);
