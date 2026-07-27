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
      key: 'warby-parker-q3-fy25',
      company: 'Warby Parker',
      period: 'Q3 FY25',
      periodNote: 'Three months ended Sep. 30, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/warby-parker-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 222,
        notes: [
          '+15% Y/Y',
          'Source values are rounded to whole millions; the official reported net revenue was $221.7M.',
        ],
        items: [
          { id: 'eyewear', label: 'Eyewear', value: 207, notes: ['+14% Y/Y'] },
          { id: 'vision_care', label: 'Vision care', value: 14, notes: ['+41% Y/Y'] },
        ],
        breakdowns: [
          {
            id: 'product_type',
            label: 'Revenue by product type',
            total: 222,
            items: [
              { id: 'eyewear', label: 'Eyewear', value: 207, notes: ['+14% Y/Y'] },
              { id: 'vision_care', label: 'Vision care', value: 14, notes: ['+41% Y/Y'] },
            ],
          },
          {
            id: 'channel',
            label: 'Revenue by channel',
            total: 222,
            items: [
              { id: 'ecommerce', label: 'E-Commerce', value: 59, notes: ['+3% Y/Y'] },
              { id: 'retail', label: 'Retail', value: 163, notes: ['+20% Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 102 },
        operatingExpenses: {
          total: 116,
          items: [
            { id: 'other_sga', label: 'Other SG&A', value: 87, notes: ['39% of revenue', '(6pp) Y/Y'] },
            { id: 'marketing', label: 'Marketing', value: 29, notes: ['13% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['No separate tax line is shown in the source chart.'],
        },
      },
      otherIncome: {
        total: 2,
        items: [{ id: 'other', label: 'Other', value: 2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 120,
          notes: ['54% margin', '(0pp) Y/Y'],
        },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 4,
          notes: ['2% margin', '+5pp Y/Y'],
        },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 6,
          notes: ['3% margin', '+5pp Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日止三个月',
          revenue: {
            notes: [
              '同比 +15%',
              '来源图采用整数单位四舍五入；官方披露的净收入为 221.7M 美元。',
            ],
            items: [
              { id: 'eyewear', label: '眼镜', notes: ['同比 +14%'] },
              { id: 'vision_care', label: '视力保健', notes: ['同比 +41%'] },
            ],
            breakdowns: [
              {
                id: 'product_type',
                label: '按产品类型划分的收入',
                items: [
                  { id: 'eyewear', label: '眼镜', notes: ['同比 +14%'] },
                  { id: 'vision_care', label: '视力保健', notes: ['同比 +41%'] },
                ],
              },
              {
                id: 'channel',
                label: '按渠道划分的收入',
                items: [
                  { id: 'ecommerce', label: '电子商务', notes: ['同比 +3%'] },
                  { id: 'retail', label: '零售', notes: ['同比 +20%'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'other_sga', label: '其他销售、一般及行政费用', notes: ['占收入 39%', '同比 (6 个百分点)'] },
                { id: 'marketing', label: '营销', notes: ['占收入 13%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单独显示税费。'] },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 +5 个百分点'] },
          },
        },
      },
    }
  );
})(window);
