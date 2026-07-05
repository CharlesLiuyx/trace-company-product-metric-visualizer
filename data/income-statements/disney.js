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
      key: 'disney-q2-fy26-by-segment',
      company: 'Disney',
      period: 'Q2 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/disney-q2-fy26-by-segment.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 25.168,
        notes: ['+7% Y/Y'],
        items: [
          {
            id: 'entertainment_total',
            label: 'Entertainment',
            value: 11.715,
            notes: ['+10% Y/Y'],
            children: [
              { id: 'subscription', label: 'Subscription', value: 7.8, notes: ['+14% Y/Y'] },
              { id: 'advertising', label: 'Advertising', value: 1.7, notes: ['+5% Y/Y'] },
              { id: 'content_sales_licensing', label: 'Content Sales Licensing', value: 1.7, notes: ['+8% Y/Y'] },
              { id: 'entertainment_other', label: 'Other', value: 0.5, notes: ['(18%) Y/Y'] },
            ],
          },
          { id: 'sports', label: 'Sports', value: 4.609, notes: ['+2% Y/Y'] },
          {
            id: 'experiences_total',
            label: 'Experiences',
            value: 9.487,
            notes: ['+7% Y/Y'],
            children: [
              { id: 'parks_experiences', label: 'Parks & Experiences', value: 8.5, notes: ['+7% Y/Y'] },
              { id: 'consumer_products', label: 'Consumer Products', value: 1.0, notes: ['+3% Y/Y'] },
            ],
          },
          {
            label: 'Eliminations',
            value: -0.643,
            notes: ['Intersegment eliminations shown as ($0.7B) in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart is a segment view and does not show a separate gross-profit or cost-of-revenue layer.'],
        },
        operatingExpenses: {
          total: 20.565,
          notes: ['Derived as revenue less total segment operating income; shown in the source chart as Segment Costs & expenses.'],
          items: [
            { id: 'operating_expenses', label: 'Segment Costs & expenses', value: 20.565 },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['The source chart does not show tax in this segment operating income view.'],
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
        gross: {
          id: 'revenue',
          label: 'Revenue',
          value: 25.168,
          notes: ['Used as the gross layer because the source chart is a segment operating income bridge.'],
        },
        operating: {
          id: 'segment_operating_profit',
          label: 'Segment operating profit',
          value: 4.603,
          notes: ['18% margin', '(1pp) Y/Y'],
          items: [
            { id: 'entertainment_profit', label: 'Entertainment', value: 1.336, notes: ['11% margin', '(0pp) Y/Y'] },
            { id: 'sports_profit', label: 'Sports', value: 0.652, notes: ['14% margin', '(1pp) Y/Y'] },
            { id: 'experiences_profit', label: 'Experiences', value: 2.615, notes: ['28% margin', '(0pp) Y/Y'] },
          ],
        },
        net: {
          id: 'segment_operating_profit',
          label: 'Segment operating profit',
          value: 4.603,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              {
                id: 'entertainment_total',
                label: '娱乐',
                notes: ['同比 +10%'],
                children: [
                  { id: 'subscription', label: '订阅', notes: ['同比 +14%'] },
                  { id: 'advertising', label: '广告', notes: ['同比 +5%'] },
                  { id: 'content_sales_licensing', label: '内容销售授权', notes: ['同比 +8%'] },
                  { id: 'entertainment_other', label: '其他', notes: ['同比 (18%)'] },
                ],
              },
              { id: 'sports', label: '体育', notes: ['同比 +2%'] },
              {
                id: 'experiences_total',
                label: '体验',
                notes: ['同比 +7%'],
                children: [
                  { id: 'parks_experiences', label: '乐园及体验', notes: ['同比 +7%'] },
                  { id: 'consumer_products', label: '消费品', notes: ['同比 +3%'] },
                ],
              },
              {
                label: '抵销',
                notes: ['来源图表显示分部间抵销为 ($0.7B)。'],
              },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图表为分部视图，未显示单独的毛利润或收入成本层级。'],
            },
            operatingExpenses: {
              notes: ['按收入减去总分部营业利润推导；来源图表显示为 Segment Costs & expenses。'],
              items: [
                { id: 'operating_expenses', label: '分部成本及费用' },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图表的分部营业利润视图未显示税费。'],
            },
          },
          profit: {
            gross: {
              label: '收入',
              notes: ['由于来源图表为分部营业利润桥图，这里将收入作为总利润桥层级。'],
            },
            operating: {
              label: '分部营业利润',
              notes: ['利润率 18%', '同比 (1 个百分点)'],
              items: [
                { id: 'entertainment_profit', label: '娱乐', notes: ['利润率 11%', '同比 (0 个百分点)'] },
                { id: 'sports_profit', label: '体育', notes: ['利润率 14%', '同比 (1 个百分点)'] },
                { id: 'experiences_profit', label: '体验', notes: ['利润率 28%', '同比 (0 个百分点)'] },
              ],
            },
            net: {
              label: '分部营业利润',
              notes: ['来源图表未显示单独的净利润项目。'],
            },
          },
        },
      },
    }
  );
})(window);
