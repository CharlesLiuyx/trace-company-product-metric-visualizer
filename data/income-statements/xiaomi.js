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
      key: 'xiaomi-q2-fy25',
      company: 'Xiaomi',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/xiaomi-q2-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 116.0,
        notes: ['+30% Y/Y'],
        items: [
          {
            id: 'smartphones_aiot',
            label: 'Smartphones x AIoT',
            value: 94.7,
            notes: ['+15% Y/Y'],
            children: [
              { id: 'smartphones', label: 'Smartphones', value: 45.5, notes: ['(2%) Y/Y'] },
              { id: 'iot_lifestyle', label: 'IoT & Lifestyle', value: 38.7, notes: ['(2%) Y/Y'] },
              { id: 'internet_services', label: 'Internet Services', value: 9.1, notes: ['(2%) Y/Y'] },
              { id: 'other_segment', label: 'Other', value: 1.4, notes: ['(2%) Y/Y'] },
            ],
          },
          { id: 'smart_ev_ai_other', label: 'Smart EV, AI and other', value: 21.3, notes: ['+234% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 89.9 },
        operatingExpenses: {
          total: 17.2,
          items: [
            { id: 'sales_marketing', label: 'Sales & marketing', value: 7.8, notes: ['7% of revenue'] },
            { id: 'rnd', label: 'Research & development', value: 7.7, notes: ['7% of revenue'] },
            { id: 'ga', label: 'General & Administrative', value: 1.6, notes: ['4% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.5 },
      },
      operatingOtherIncome: {
        total: 4.5,
        items: [{ id: 'other_operating_income', label: 'Other', value: 4.5 }],
      },
      otherIncome: {
        total: 1.0,
        items: [{ id: 'other_after_operating', label: 'Other', value: 1.0 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 26.1, notes: ['23% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 13.4, notes: ['12% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 11.9, notes: ['10% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +30%'],
            items: [
              {
                id: 'smartphones_aiot',
                label: '智能手机 x AIoT',
                notes: ['同比 +15%'],
                children: [
                  { id: 'smartphones', label: '智能手机', notes: ['同比 (2%)'] },
                  { id: 'iot_lifestyle', label: 'IoT 与生活消费产品', notes: ['同比 (2%)'] },
                  { id: 'internet_services', label: '互联网服务', notes: ['同比 (2%)'] },
                  { id: 'other_segment', label: '其他', notes: ['同比 (2%)'] },
                ],
              },
              { id: 'smart_ev_ai_other', label: '智能电动汽车、AI 及其他', notes: ['同比 +234%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sales_marketing', label: '销售与营销', notes: ['占收入 7%'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 4%'] },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other_operating_income', label: '其他' }],
          },
          otherIncome: {
            items: [{ id: 'other_after_operating', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 23%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['净利率 10%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'xiaomi-q3-fy25',
      company: 'Xiaomi',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/xiaomi-q3-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 113.1,
        notes: ['+22% Y/Y'],
        items: [
          {
            id: 'smartphones_aiot',
            label: 'Smartphones x AIoT',
            value: 84.1,
            notes: ['+2% Y/Y'],
            children: [
              { id: 'smartphones', label: 'Smartphones', value: 46.0, notes: ['(3%) Y/Y'] },
              { id: 'iot_lifestyle', label: 'IoT & Lifestyle', value: 27.6, notes: ['+6% Y/Y'] },
              { id: 'internet_services', label: 'Internet Services', value: 9.4, notes: ['+11% Y/Y'] },
              { id: 'other_segment', label: 'Other', value: 1.2, notes: ['+53% Y/Y'] },
            ],
          },
          { id: 'smart_ev_ai_other', label: 'Smart EV, AI and other', value: 29.0, notes: ['+199% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 87.2 },
        operatingExpenses: {
          total: 19.2,
          items: [
            { id: 'sales_marketing', label: 'Sales & marketing', value: 9.1, notes: ['8% of revenue'] },
            { id: 'rnd', label: 'Research & development', value: 8.3, notes: ['7% of revenue'] },
            { id: 'ga', label: 'General & Administrative', value: 1.8, notes: ['2% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.7 },
      },
      operatingOtherIncome: {
        total: 8.4,
        items: [{ id: 'other_operating_income', label: 'Other', value: 8.4 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'other_after_operating', label: 'Other', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 25.9, notes: ['23% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 15.1, notes: ['13% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 12.3, notes: ['11% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              {
                id: 'smartphones_aiot',
                label: '智能手机 x AIoT',
                notes: ['同比 +2%'],
                children: [
                  { id: 'smartphones', label: '智能手机', notes: ['同比 (3%)'] },
                  { id: 'iot_lifestyle', label: 'IoT 与生活消费产品', notes: ['同比 +6%'] },
                  { id: 'internet_services', label: '互联网服务', notes: ['同比 +11%'] },
                  { id: 'other_segment', label: '其他', notes: ['同比 +53%'] },
                ],
              },
              { id: 'smart_ev_ai_other', label: '智能电动汽车、AI 及其他', notes: ['同比 +199%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sales_marketing', label: '销售与营销', notes: ['占收入 8%'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%'] },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other_operating_income', label: '其他' }],
          },
          otherExpenses: {
            items: [{ id: 'other_after_operating', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 23%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['净利率 11%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'xiaomi-q4-fy25',
      company: 'Xiaomi',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/xiaomi-q4-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 116.9,
        notes: ['+7% Y/Y'],
        items: [
          {
            id: 'smartphones_aiot',
            label: 'Smartphones x AIoT',
            value: 79.7,
            notes: ['(14%) Y/Y'],
            children: [
              { id: 'smartphones', label: 'Smartphones', value: 44.3, notes: ['(14%) Y/Y'] },
              { id: 'iot_lifestyle', label: 'IoT & Lifestyle', value: 24.6, notes: ['(20%) Y/Y'] },
              { id: 'internet_services', label: 'Internet Services', value: 9.9, notes: ['+6% Y/Y'] },
              { id: 'other_segment', label: 'Other', value: 0.9, notes: ['+6% Y/Y'] },
            ],
          },
          { id: 'smart_ev_ai_other', label: 'Smart EV, AI and other', value: 37.2, notes: ['+123% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 92.6 },
        operatingExpenses: {
          total: 21.2,
          items: [
            { id: 'sales_marketing', label: 'Sales & marketing', value: 9.9, notes: ['8% of revenue', '+2pp Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 9.6, notes: ['8% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'General & Administrative', value: 1.6, notes: ['1% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 3.9,
        items: [
          { id: 'other_operating_income', label: 'Other', value: 3.0 },
          { id: 'other_after_operating', label: 'Other', value: 0.9 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      // The source chart's visible Operating profit node includes RMB 3.0B of
      // "Other" operating income. The schema's operating arithmetic is gross
      // profit minus operating expenses, so `profit.operating` has no Sankey id;
      // the drawn operating_profit node is checked visually in the adapter.
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 24.4, notes: ['21% margin', '+3pp Y/Y'] },
        operating: { label: 'Operating profit before other operating income', value: 3.2 },
        net: { id: 'net_profit', label: 'Net profit', value: 6.5, notes: ['6% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              {
                id: 'smartphones_aiot',
                label: '智能手机 x AIoT',
                notes: ['同比 (14%)'],
                children: [
                  { id: 'smartphones', label: '智能手机', notes: ['同比 (14%)'] },
                  { id: 'iot_lifestyle', label: 'IoT 与生活消费产品', notes: ['同比 (20%)'] },
                  { id: 'internet_services', label: '互联网服务', notes: ['同比 +6%'] },
                  { id: 'other_segment', label: '其他', notes: ['同比 +6%'] },
                ],
              },
              { id: 'smart_ev_ai_other', label: '智能电动汽车、AI 及其他', notes: ['同比 +123%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sales_marketing', label: '销售与营销', notes: ['占收入 8%', '同比 +2 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 8%', '同比 +2 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 1%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_operating_income', label: '其他' },
              { id: 'other_after_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 21%', '同比 +3 个百分点'] },
            operating: { label: '计入其他经营收益前的营业利润' },
            net: { label: '净利润', notes: ['净利率 6%', '同比 (2 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
