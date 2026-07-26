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
      key: 'amazon-q2-fy23',
      company: 'Amazon',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 134.3,
        notes: ['+11% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Store', value: 53.0, notes: ['+4% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.0, notes: ['+6% Y/Y'] },
          { id: 'third_party_seller_services', label: '3rd party sellers services', value: 32.3, notes: ['+18% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 9.9, notes: ['+14% Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 10.7, notes: ['+22% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 22.1, notes: ['+12% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.3, notes: ['+26% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 69.4 },
        operatingExpenses: {
          total: 57.3,
          notes: ['Operating expense items sum to $57.2B because the source chart rounds each item.'],
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 21.3, notes: ['16% of revenue', '(1pp) Y/Y'] },
            { id: 'technology_content', label: 'Technology & content', value: 21.9, notes: ['16% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 10.7, notes: ['8% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.2, notes: ['2% of revenue', '+0pp Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'interest_other', label: 'Interest/Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 65.0, notes: ['48% margin', '+3pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 7.7,
          notes: ['6% margin', '+3pp Y/Y'],
          items: [
            { id: 'aws_operating_profit', label: 'AWS operating profit', value: 5.4 },
            { id: 'other_operating_profit', label: 'Other operating profit', value: 2.3 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 6.7, notes: ['5% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +4%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +6%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +18%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +14%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +22%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +12%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +26%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['运营费用项目合计为 $57.2B，因为来源图表对各项目做了四舍五入。'],
              items: [
                { id: 'fulfillment', label: '履约', notes: ['占收入 16%', '同比 (1 个百分点)'] },
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 16%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 +0 个百分点'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'interest_other', label: '利息/其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 48%', '同比 +3 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 6%', '同比 +3 个百分点'],
              items: [
                { id: 'aws_operating_profit', label: 'AWS 营业利润' },
                { id: 'other_operating_profit', label: '其他营业利润' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 5%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amazon-q3-fy24',
      company: 'Amazon',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 158.9,
        notes: ['+11% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Stores', value: 61.4, notes: ['+7% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.2, notes: ['+5% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 37.9,
            notes: ['+10% Y/Y'],
          },
          { id: 'advertising', label: 'Advertising', value: 14.3, notes: ['+19% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 11.3, notes: ['+11% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 27.5, notes: ['+19% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.3, notes: ['+7% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 81.0 },
        operatingExpenses: {
          total: 60.5,
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 24.7, notes: ['16% of revenue', '(0pp) Y/Y'] },
            { id: 'technology_content', label: 'Technology & content', value: 22.2, notes: ['14% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 10.6, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.7, notes: ['2% of revenue', '(0pp) Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.7 },
      },
      otherIncome: {
        total: 0.6,
        items: [{ id: 'other_income', label: 'Other', value: 0.6 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 77.9, notes: ['49% margin', '+1pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 17.4,
          notes: ['11% margin', '+3pp Y/Y'],
          items: [
            { id: 'aws_operating_profit', label: 'AWS operating profit', value: 10.4 },
            { id: 'other_operating_profit', label: 'Other operating profit', value: 7.0 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 15.3, notes: ['10% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +7%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +5%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +10%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +19%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +11%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +19%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +7%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'fulfillment', label: '履约', notes: ['占收入 16%', '同比 (0 个百分点)'] },
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 +1 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 11%', '同比 +3 个百分点'],
              items: [
                { id: 'aws_operating_profit', label: 'AWS 营业利润' },
                { id: 'other_operating_profit', label: '其他业务营业利润' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 10%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amazon-q1-fy23',
      company: 'Amazon',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 127.4,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Store', value: 51.1, notes: ['(0%) Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 4.9, notes: ['+7% Y/Y'] },
          { id: 'third_party_seller_services', label: '3rd party sellers services', value: 29.8, notes: ['+18% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 9.7, notes: ['+15% Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 9.5, notes: ['+21% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 21.3, notes: ['+16% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.0, notes: ['+55% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of revenue', value: 67.8 },
        operatingExpenses: {
          total: 54.8,
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 20.9, notes: ['16% of revenue', '(1pp) Y/Y'] },
            { id: 'technology_content', label: 'Technology & content', value: 20.5, notes: ['16% of revenue', '+3pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 10.2, notes: ['8% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.0, notes: ['2% of revenue', '+0pp Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.9 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.6,
        items: [
          { id: 'other_expense', label: 'Other', value: 0.4 },
          { id: 'interest', label: 'Interest', value: 0.2 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 59.6, notes: ['47% margin', '+4pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 4.8,
          notes: ['4% margin', '+1pp Y/Y'],
          items: [
            { id: 'aws_operating_profit', label: 'AWS', value: 5.1 },
            { id: 'other_operating_loss', label: 'Other', value: -0.3 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 3.2, notes: ['2% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 (0%)'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +7%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +18%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +15%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +21%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +16%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +55%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'fulfillment', label: '履约', notes: ['占收入 16%', '同比 (1 个百分点)'] },
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 16%', '同比 +3 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 +0 个百分点'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_expense', label: '其他' },
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 47%', '同比 +4 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 4%', '同比 +1 个百分点'],
              items: [
                { id: 'aws_operating_profit', label: 'AWS' },
                { id: 'other_operating_loss', label: '其他' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 2%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amazon-q1-fy24',
      company: 'Amazon',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 143.3,
        notes: ['+13% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Store', value: 54.7, notes: ['+7% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.2, notes: ['+6% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 34.6,
            notes: ['+16% Y/Y'],
          },
          { id: 'advertising', label: 'Advertising', value: 11.8, notes: ['+24% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 10.7, notes: ['+11% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 25.0, notes: ['+17% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.3, notes: ['+23% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 72.6 },
        operatingExpenses: {
          total: 55.4,
          notes: ['Operating expense items sum to $55.3B because the source chart rounds each item.'],
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 22.3, notes: ['16% of revenue', '(1pp) Y/Y'] },
            { id: 'technology_content', label: 'Technology & content', value: 20.4, notes: ['14% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 9.7, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.7, notes: ['2% of revenue', '(1pp) Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.5 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 2.4,
        items: [{ id: 'other_expense', label: 'Other', value: 2.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 70.7, notes: ['49% margin', '+3pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 15.3,
          notes: ['11% margin', '+7pp Y/Y', 'AWS $9.4B', 'Other $5.9B'],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 10.4, notes: ['7% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +7%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +6%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +16%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +24%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +11%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +17%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +23%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['运营费用项目合计为 $55.3B，因为来源图表对各项目做了四舍五入。'],
              items: [
                { id: 'fulfillment', label: '履约', notes: ['占收入 16%', '同比 (1 个百分点)'] },
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 14%', '同比 (2 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 +3 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 11%', '同比 +7 个百分点', 'AWS 业务 $9.4B', '其他业务 $5.9B'],
            },
            net: { label: '净利润', notes: ['利润率 7%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amazon-q2-fy24',
      company: 'Amazon',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 148.0,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Store', value: 55.4, notes: ['+5% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.2, notes: ['+4% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 36.0,
            notes: ['+11% Y/Y'],
          },
          { id: 'advertising', label: 'Advertising', value: 12.8, notes: ['+20% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 10.9, notes: ['+10% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 26.3, notes: ['+19% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.3, notes: ['(6%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 73.7 },
        operatingExpenses: {
          total: 59.5,
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 23.6, notes: ['16% of revenue', '+0pp Y/Y'] },
            { id: 'technology_content', label: 'Technology & content', value: 22.3, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 10.5, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.0, notes: ['2% of revenue', '(0pp) Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.8 },
      },
      otherIncome: {
        total: 0.6,
        items: [{ id: 'other_income', label: 'Other', value: 0.6 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 74.2, notes: ['50% margin', '+2pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 14.7,
          notes: ['10% margin', '+4pp Y/Y', 'AWS $9.3B', 'Other $5.3B'],
          items: [
            { id: 'aws_operating_profit', label: 'AWS operating profit', value: 9.3 },
            { id: 'other_operating_profit', label: 'Other operating profit', value: 5.3 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 13.5, notes: ['9% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +5%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +4%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +11%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +20%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +10%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +19%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (6%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'fulfillment', label: '履约', notes: ['占收入 16%', '同比 +0 个百分点'] },
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 50%', '同比 +2 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 10%', '同比 +4 个百分点', 'AWS 业务 $9.3B', '其他业务 $5.3B'],
              items: [
                { id: 'aws_operating_profit', label: 'AWS 营业利润' },
                { id: 'other_operating_profit', label: '其他营业利润' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 9%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amazon-q3-fy22',
      company: 'Amazon',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q3-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 127.1,
        notes: ['+15% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Store', value: 53.4, notes: ['+7% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 4.7, notes: ['+10% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 28.7,
            notes: ['+18% Y/Y'],
          },
          { id: 'subscription', label: 'Subscription', value: 8.9, notes: ['+9% Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 9.5, notes: ['+25% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 20.5, notes: ['+27% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.3 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 70.3 },
        operatingExpenses: {
          total: 54.3,
          notes: ['Operating expense items sum to $54.4B because the source chart rounds each item.'],
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 20.6, notes: ['16% of revenue', 'Unchanged'] },
            {
              id: 'technology_content',
              label: 'Technology & content',
              value: 19.5,
              notes: ['15% of revenue', '+2pp Y/Y'],
            },
            { id: 'sm', label: 'S&M', value: 11.0, notes: ['9% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.1, notes: ['2% of revenue', 'Unchanged'] },
            { id: 'other_opex', label: 'Other opex', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.7,
        items: [{ id: 'other_income', label: 'Other', value: 0.7 }],
      },
      otherExpenses: {
        total: 0.3,
        items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 56.8, notes: ['45% margin', '+2pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 2.5,
          notes: ['2% margin', '(2pp) Y/Y', 'AWS $5.4B', 'Other ($2.9B)'],
          items: [
            { id: 'aws_operating_profit', label: 'AWS', value: 5.4 },
            { id: 'other_operating_loss', label: 'Other', value: -2.9 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 2.9, notes: ['2% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +7%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +10%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +18%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +9%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +25%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +27%'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['运营费用项目合计为 $54.4B，因为来源图表对各项目做了四舍五入。'],
              items: [
                { id: 'fulfillment', label: '履约', notes: ['占收入 16%', '同比持平'] },
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 15%', '同比 +2 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比持平'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +2 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 2%', '同比 (2 个百分点)', 'AWS 业务 $5.4B', '其他业务 ($2.9B)'],
              items: [
                { id: 'aws_operating_profit', label: 'AWS' },
                { id: 'other_operating_loss', label: '其他' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 2%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'amazon-q3-fy23',
      company: 'Amazon',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 143.1,
        notes: [
          '+13% Y/Y',
          'Visible revenue items sum to $143.2B because the source chart rounds each item.',
        ],
        items: [
          { id: 'online_stores', label: 'Online Store', value: 57.3, notes: ['+7% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.0, notes: ['+6% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 34.3,
            notes: ['+20% Y/Y'],
          },
          { id: 'subscription', label: 'Subscription', value: 10.2, notes: ['+14% Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 12.1, notes: ['+26% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 23.1, notes: ['+12% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.2, notes: ['(3%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 75.0 },
        operatingExpenses: {
          total: 56.9,
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 22.3, notes: ['16% of revenue', '(1pp) Y/Y'] },
            { id: 'technology_content', label: 'Technology & content', value: 21.2, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 10.6, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.6, notes: ['2% of revenue', '(1pp) Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.3 },
      },
      otherIncome: {
        total: 1.0,
        items: [{ id: 'other_income', label: 'Other', value: 1.0 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 68.1,
          notes: ['48% margin', '+3pp Y/Y'],
        },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 11.2,
          notes: ['8% margin', '+6pp Y/Y'],
          items: [
            { id: 'aws_operating_profit', label: 'AWS operating profit', value: 7.0 },
            { id: 'other_operating_profit', label: 'Other operating profit', value: 4.2 },
          ],
        },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 9.9,
          notes: ['7% margin', '+5pp Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: [
              '同比 +13%',
              '由于来源图表对各项目取整，可见收入项目合计为 $143.2B。',
            ],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +7%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +6%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +20%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +14%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +26%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +12%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (3%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'fulfillment', label: '履约', notes: ['占收入 16%', '同比 (1 个百分点)'] },
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 48%', '同比 +3 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 8%', '同比 +6 个百分点'],
              items: [
                { id: 'aws_operating_profit', label: 'AWS 营业利润' },
                { id: 'other_operating_profit', label: '其他业务营业利润' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 7%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amazon-q2-fy25',
      company: 'Amazon',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 167.7,
        notes: ['+13% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Stores', value: 61.5, notes: ['+11% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.6, notes: ['+7% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 40.3,
            notes: ['+12% Y/Y'],
          },
          { id: 'advertising', label: 'Advertising', value: 15.7, notes: ['+23% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 12.2, notes: ['+12% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 30.9, notes: ['+17% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.5, notes: ['+19% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 80.8 },
        operatingExpenses: {
          total: 67.7,
          notes: ['Operating expense items sum to $67.8B because the source chart rounds each item.'],
          items: [
            { id: 'technology_content', label: 'Technology & content', value: 27.2, notes: ['16% of revenue', '+1pp Y/Y'] },
            { id: 'fulfillment', label: 'Fulfillment', value: 26.0, notes: ['15% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 11.4, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.0, notes: ['2% of revenue', '(0pp) Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.7 },
      },
      otherIncome: {
        total: 1.7,
        items: [{ id: 'other_income', label: 'Other', value: 1.7 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 86.9, notes: ['52% margin', '+2pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 19.2,
          notes: ['11% margin', '+1pp Y/Y', 'AWS $10.2B', 'Other $9.0B'],
          items: [
            { id: 'aws_operating_profit', label: 'AWS operating profit', value: 10.2 },
            { id: 'other_operating_profit', label: 'Other operating profit', value: 9.0 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 18.1, notes: ['11% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +11%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +7%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +12%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +23%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +12%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +17%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +19%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['运营费用项目合计为 $67.8B，因为来源图表对各项目做了四舍五入。'],
              items: [
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 16%', '同比 +1 个百分点'] },
                { id: 'fulfillment', label: '履约', notes: ['占收入 15%', '同比 (0 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +2 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 11%', '同比 +1 个百分点', 'AWS 业务 $10.2B', '其他业务 $9.0B'],
              items: [
                { id: 'aws_operating_profit', label: 'AWS 营业利润' },
                { id: 'other_operating_profit', label: '其他业务营业利润' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amazon-q3-fy25',
      company: 'Amazon',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 180.2,
        notes: ['+13% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Stores', value: 67.4, notes: ['+10% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.6, notes: ['+7% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 42.5,
            notes: ['+12% Y/Y'],
          },
          { id: 'advertising', label: 'Advertising', value: 17.7, notes: ['+24% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 12.6, notes: ['+11% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 33.0, notes: ['+20% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.4, notes: ['+8% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 88.7 },
        operatingExpenses: {
          total: 74.1,
          notes: ['Operating expense items sum to $74.2B because the source chart rounds each item.'],
          items: [
            { id: 'technology_content', label: 'Technology & content', value: 29.0, notes: ['16% of revenue', '+2pp Y/Y'] },
            { id: 'fulfillment', label: 'Fulfillment', value: 27.7, notes: ['15% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 11.7, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 2.9 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 6.9 },
      },
      otherIncome: {
        total: 10.7,
        items: [{ id: 'other_income', label: 'Other', value: 10.7 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 91.5, notes: ['52% margin', '+2pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 17.4,
          notes: ['10% margin', '+0pp Y/Y', 'AWS $11.4B', 'Other $6.0B'],
          items: [
            { id: 'aws_operating_profit', label: 'AWS operating profit', value: 11.4 },
            { id: 'other_operating_profit', label: 'Other operating profit', value: 6.0 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 21.2, notes: ['12% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +10%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +7%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +12%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +24%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +11%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +20%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 16%', '同比 +2 个百分点'] },
                { id: 'fulfillment', label: '履约', notes: ['占收入 15%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +2 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 10%', '同比 +0 个百分点', 'AWS 业务 $11.4B', '其他业务 $6.0B'],
              items: [
                { id: 'aws_operating_profit', label: 'AWS 营业利润' },
                { id: 'other_operating_profit', label: '其他营业利润' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amazon-q4-fy22',
      company: 'Amazon',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q4-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 149.2,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Store', value: 64.5, notes: ['(2%) Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.0, notes: ['+6% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 36.3,
            notes: ['+20% Y/Y'],
          },
          { id: 'subscription', label: 'Subscription', value: 9.2, notes: ['+13% Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 11.6, notes: ['+19% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 21.4, notes: ['+20% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.3, notes: ['(76%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 85.6 },
        operatingExpenses: {
          total: 60.8,
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 23.1, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'technology_content', label: 'Technology & content', value: 20.8, notes: ['14% of revenue', '+3pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 12.8, notes: ['9% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.3, notes: ['2% of revenue', 'Unchanged'] },
            { id: 'other_opex', label: 'Other opex', value: 0.8 },
          ],
        },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 3.7,
        items: [
          { id: 'other_non_operating', label: 'Other', value: 3.5 },
          { id: 'interest', label: 'Interest', value: 0.2 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 63.6, notes: ['43% margin', '+3pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 2.7,
          notes: ['2% margin', '(2pp) Y/Y'],
          items: [
            { id: 'aws_operating_profit', label: 'AWS', value: 5.2 },
            { id: 'other_operating_result', label: 'Other', value: -2.5 },
          ],
        },
        net: { id: 'net_loss_before_tax', label: 'Net loss before tax', value: -1.0 },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 (2%)'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +6%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +20%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +13%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +19%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +20%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (76%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'fulfillment', label: '履约', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 14%', '同比 +3 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比不变'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
          },
          otherExpenses: {
            items: [
              { id: 'other_non_operating', label: '其他' },
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 43%', '同比 +3 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 2%', '同比 (2 个百分点)'],
              items: [
                { id: 'aws_operating_profit', label: 'AWS' },
                { id: 'other_operating_result', label: '其他' },
              ],
            },
            net: { label: '税前净亏损' },
          },
        },
      },
    },
    {
      key: 'amazon-q4-fy23',
      company: 'Amazon',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 170.0,
        notes: ['+14% Y/Y', 'Revenue items sum to $170.1B because the source chart rounds each item.'],
        items: [
          { id: 'online_stores', label: 'Online Store', value: 70.5, notes: ['+9% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.2, notes: ['+4% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 43.6,
            notes: ['+20% Y/Y'],
          },
          { id: 'advertising', label: 'Advertising', value: 14.7, notes: ['+27% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 10.5, notes: ['+14% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 24.2, notes: ['+13% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.4, notes: ['(3%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 92.6 },
        operatingExpenses: {
          total: 64.2,
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 26.1, notes: ['15% of revenue', '(0pp) Y/Y'] },
            { id: 'technology_content', label: 'Technology & content', value: 22.0, notes: ['13% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 12.9, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.0, notes: ['2% of revenue', '(1pp) Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.1 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 77.4, notes: ['46% margin', '+3pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 13.2,
          notes: ['8% margin', '+2pp Y/Y'],
          items: [
            { id: 'aws_operating_profit', label: 'AWS', value: 7.2 },
            { id: 'other_operating_profit', label: 'Other', value: 6.0 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 10.6, notes: ['6% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +14%', '由于来源图表对各项目做了四舍五入，收入项目合计为 $170.1B。'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +9%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +4%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +20%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +27%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +14%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +13%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (3%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'fulfillment', label: '履约', notes: ['占收入 15%', '同比 (0 个百分点)'] },
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 13%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 +3 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 8%', '同比 +2 个百分点'],
              items: [
                { id: 'aws_operating_profit', label: 'AWS' },
                { id: 'other_operating_profit', label: '其他' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 6%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amazon-q4-fy24',
      company: 'Amazon',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q4-fy24.png',
      roundingTolerance: 0.35,
      revenue: {
        total: 187.8,
        notes: ['+10% Y/Y', 'Revenue items sum to $187.9B because the source chart rounds each item.'],
        items: [
          { id: 'online_stores', label: 'Online Stores', value: 75.6, notes: ['+7% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.6, notes: ['+8% Y/Y'] },
          { id: 'third_party_seller_services', label: '3rd party sellers services', value: 47.5, notes: ['+9% Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 17.3, notes: ['+18% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 11.5, notes: ['+10% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 28.8, notes: ['+19% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.6, notes: ['+17% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 98.9 },
        operatingExpenses: {
          total: 67.7,
          notes: ['Operating expense items sum to $68.0B because the source chart rounds each item.'],
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 28.0, notes: ['15% of revenue', '(0pp) Y/Y'] },
            { id: 'technology_content', label: 'Technology & content', value: 23.8, notes: ['13% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 13.1, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.3 },
      },
      otherIncome: {
        total: 1.1,
        items: [{ id: 'other_income', label: 'Other', value: 1.1 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 88.9, notes: ['47% margin', '+2pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 21.2,
          notes: ['11% margin', '+4pp Y/Y', 'AWS $10.6B', 'Other $10.6B'],
          items: [
            { id: 'aws_operating_profit', label: 'AWS operating profit', value: 10.6 },
            { id: 'other_operating_profit', label: 'Other operating profit', value: 10.6 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 20.0, notes: ['11% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +10%', '由于来源图表对各项目做了四舍五入，收入项目合计为 $187.9B。'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +7%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +8%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +9%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +18%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +10%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +19%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +17%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['由于来源图表对各项目做了四舍五入，运营费用项目合计为 $68.0B。'],
              items: [
                { id: 'fulfillment', label: '履约', notes: ['占收入 15%', '同比 (0 个百分点)'] },
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 13%', '同比 (0 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 47%', '同比 +2 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 11%', '同比 +4 个百分点', 'AWS 业务 $10.6B', '其他业务 $10.6B'],
              items: [
                { id: 'aws_operating_profit', label: 'AWS 营业利润' },
                { id: 'other_operating_profit', label: '其他业务营业利润' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amazon-q1-fy25',
      company: 'Amazon',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 155.7,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Stores', value: 57.4, notes: ['+5% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.5, notes: ['+6% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 36.5,
            notes: ['+6% Y/Y'],
          },
          { id: 'advertising', label: 'Advertising', value: 13.9, notes: ['+18% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 11.7, notes: ['+9% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 29.3, notes: ['+17% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.3, notes: ['+4% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 77.0 },
        operatingExpenses: {
          total: 60.3,
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 24.6, notes: ['16% of revenue', '+0pp Y/Y'] },
            { id: 'technology_content', label: 'Technology & content', value: 23.0, notes: ['15% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 9.8, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.6, notes: ['2% of revenue', '(0pp) Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.6 },
      },
      otherIncome: {
        total: 3.3,
        items: [{ id: 'other_income', label: 'Other', value: 3.3 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 78.7, notes: ['51% margin', '+1pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 18.4,
          notes: ['12% margin', '+1pp Y/Y', 'AWS $11.5B', 'Other $6.9B'],
          items: [
            { id: 'aws_operating_profit', label: 'AWS operating profit', value: 11.5 },
            { id: 'other_operating_profit', label: 'Other operating profit', value: 6.9 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 17.1, notes: ['11% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +5%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +6%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +6%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +18%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +9%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +17%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +4%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'fulfillment', label: '履约', notes: ['占收入 16%', '同比 +0 个百分点'] },
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 15%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +1 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 12%', '同比 +1 个百分点', 'AWS 业务 $11.5B', '其他业务 $6.9B'],
              items: [
                { id: 'aws_operating_profit', label: 'AWS 营业利润' },
                { id: 'other_operating_profit', label: '其他营业利润' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amazon-q4-fy25',
      company: 'Amazon',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 213.4,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Stores', value: 83.0, notes: ['+10% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.9, notes: ['+5% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 52.8,
            notes: ['+11% Y/Y'],
          },
          { id: 'advertising', label: 'Advertising', value: 21.3, notes: ['+23% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 13.1, notes: ['+14% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 35.6, notes: ['+24% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.7, notes: ['+7% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 110.0 },
        operatingExpenses: {
          total: 78.4,
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 30.8, notes: ['14% of revenue', '(0pp) Y/Y'] },
            { id: 'technology_content', label: 'Technology & content', value: 29.4, notes: ['14% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 14.2, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.7, notes: ['1% of revenue', '(0pp) Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 1.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.9 },
      },
      otherIncome: {
        total: 1.2,
        items: [{ id: 'other_income', label: 'Other', value: 1.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 103.4, notes: ['48% margin', '+1pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 25.0,
          notes: ['12% margin', '+0pp Y/Y', 'AWS $12.5B', 'Other $12.5B'],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 21.2, notes: ['10% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +10%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +5%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +11%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +23%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +14%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +24%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +7%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'fulfillment', label: '履约', notes: ['占收入 14%', '同比 (0 个百分点)'] },
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 14%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 1%', '同比 (0 个百分点)'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 48%', '同比 +1 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 12%', '同比 +0 个百分点', 'AWS 业务 $12.5B', '其他业务 $12.5B'],
            },
            net: { label: '净利润', notes: ['利润率 10%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amazon-q1-fy26',
      company: 'Amazon',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 181.5,
        notes: ['+17% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Stores', value: 64.3, notes: ['+12% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.8, notes: ['+5% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 41.6,
            notes: ['+14% Y/Y'],
          },
          { id: 'advertising', label: 'Advertising', value: 17.2, notes: ['+24% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 13.4, notes: ['+15% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 37.6, notes: ['+28% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.6, notes: ['+25% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 87.5 },
        operatingExpenses: {
          total: 70.2,
          notes: ['Operating expense items sum to $70.3B because the source chart rounds each item.'],
          items: [
            { id: 'technology_content', label: 'Technology & content', value: 29.6, notes: ['16% of revenue', '+2pp Y/Y'] },
            { id: 'fulfillment', label: 'Fulfillment', value: 27.3, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 10.3, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.6, notes: ['1% of revenue', '(0pp) Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 0.5 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 9.6 },
      },
      otherIncome: {
        total: 16.0,
        items: [{ id: 'other_income', label: 'Other', value: 16.0 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 94.1, notes: ['52% margin', '+1pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 23.9,
          notes: ['13% margin', '+1pp Y/Y', 'AWS $14.2B', 'Other $9.7B'],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 30.3, notes: ['17% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +12%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +5%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +14%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +24%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +15%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +28%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +25%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['运营费用项目合计为 $70.3B，因为来源图表对各项目做了四舍五入。'],
              items: [
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 16%', '同比 +2 个百分点'] },
                { id: 'fulfillment', label: '履约', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 1%', '同比 (0 个百分点)'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 13%', '同比 +1 个百分点', 'AWS 业务 $14.2B', '其他业务 $9.7B'],
            },
            net: { label: '净利润', notes: ['利润率 17%', '同比 +6 个百分点'] },
          },
        },
      },
    }
  );
})(window);
