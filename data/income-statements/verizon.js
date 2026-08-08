/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'verizon-q4-fy25',
    company: 'Verizon',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/verizon-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 36.4,
      notes: ['+2% Y/Y'],
      items: [
        {
          id: 'consumer',
          label: 'Consumer',
          value: 28.4,
          notes: ['+3% Y/Y'],
          children: [
            { id: 'service', label: 'Service', value: 20.2, notes: ['+1% Y/Y'] },
            { id: 'wireless_equipment', label: 'Wireless Equipment', value: 7.1, notes: ['+10% Y/Y'] },
            { id: 'other_consumer', label: 'Other', value: 1.1, notes: ['+7% Y/Y'] },
          ],
        },
        {
          id: 'business',
          label: 'Business',
          value: 7.4,
          notes: ['(2%) Y/Y'],
          children: [
            { id: 'enterprise_public_sector', label: 'Enterprise & Public Sector', value: 3.3, notes: ['(6%) Y/Y'] },
            { id: 'business_markets_saas', label: 'Business Markets & SaaS', value: 3.6, notes: ['+6% Y/Y'] },
            { id: 'wholesale', label: 'Wholesale', value: 0.5, notes: ['(10%) Y/Y'] },
          ],
        },
        { id: 'corporate', label: 'Corporate', value: 0.6, notes: ['(6%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 16.5 },
      operatingExpenses: {
        total: 14.9,
        items: [
          { id: 'sga', label: 'SG&A', value: 10.4 },
          { id: 'depreciation_amortization', label: 'Depreciation & Amortization', value: 4.5 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.6 },
    },
    otherExpenses: {
      total: 2.0,
      items: [
        { id: 'interest', label: 'Interest', value: 1.8 },
        { id: 'other', label: 'Other', value: 0.2 },
      ],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 19.9, notes: ['55% margin', '(2pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 5.0, notes: ['14% margin', '(7pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.4, notes: ['7% margin', '(8pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +2%'],
          items: [
            {
              id: 'consumer', label: '消费者', notes: ['同比 +3%'],
              children: [
                { id: 'service', label: '服务', notes: ['同比 +1%'] },
                { id: 'wireless_equipment', label: '无线设备', notes: ['同比 +10%'] },
                { id: 'other_consumer', label: '其他', notes: ['同比 +7%'] },
              ],
            },
            {
              id: 'business', label: '商业', notes: ['同比 (2%)'],
              children: [
                { id: 'enterprise_public_sector', label: '企业及公共部门', notes: ['同比 (6%)'] },
                { id: 'business_markets_saas', label: '商业市场及 SaaS', notes: ['同比 +6%'] },
                { id: 'wholesale', label: '批发', notes: ['同比 (10%)'] },
              ],
            },
            { id: 'corporate', label: '公司及其他', notes: ['同比 (6%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [
            { id: 'sga', label: '销售、一般及管理费用' },
            { id: 'depreciation_amortization', label: '折旧与摊销' },
          ] },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }, { id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 55%', '同比 (2 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 14%', '同比 (7 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 7%', '同比 (8 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'verizon-q1-fy26',
    company: 'Verizon',
    period: 'Q1 FY26',
    periodNote: 'Quarter ended Mar. 31, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/verizon-q1-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 34.4,
      notes: ['+3% Y/Y'],
      items: [
        {
          id: 'consumer',
          label: 'Consumer',
          value: 26.5,
          notes: ['+3% Y/Y'],
          children: [
            { id: 'service', label: 'Service', value: 19.2, notes: ['+2% Y/Y'] },
            { id: 'wireless_consumer', label: 'Wireless Equipment', value: 4.8, notes: ['+6% Y/Y'] },
            { id: 'other_consumer', label: 'Other', value: 2.4, notes: ['+7% Y/Y'] },
          ],
        },
        {
          id: 'business',
          label: 'Business',
          value: 7.4,
          notes: ['+2% Y/Y'],
          children: [
            { id: 'mobility_broadband_service', label: 'Mobility & Broadband Service', value: 3.7, notes: ['(1%) Y/Y'] },
            { id: 'wireless_business', label: 'Wireless Equipment', value: 0.9, notes: ['(1%) Y/Y'] },
            { id: 'other_business', label: 'Other', value: 2.9, notes: ['+6% Y/Y'] },
          ],
        },
        { id: 'corporate', label: 'Corporate', value: 0.6, notes: ['(2%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 13.7 },
      operatingExpenses: {
        total: 12.5,
        items: [
          { id: 'sga', label: 'SG&A', value: 7.6 },
          { id: 'depreciation_amortization', label: 'Depreciation & Amortization', value: 5.0 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 1.6 },
    },
    otherIncome: {
      total: 0.5,
      items: [{ id: 'other_income', label: 'Other', value: 0.5 }],
    },
    otherExpenses: {
      total: 1.9,
      items: [{ id: 'interest', label: 'Interest', value: 1.9 }],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit',
        value: 20.8,
        notes: ['60% margin', '(1pp) Y/Y'],
      },
      operating: {
        id: 'operating_profit',
        label: 'Operating profit',
        value: 8.2,
        notes: ['24% margin', '+0pp Y/Y'],
      },
      net: {
        id: 'net_profit',
        label: 'Net profit',
        value: 5.1,
        notes: ['15% margin', '+0pp Y/Y'],
      },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日的季度',
        revenue: {
          notes: ['同比 +3%'],
          items: [
            {
              id: 'consumer',
              label: '消费者',
              notes: ['同比 +3%'],
              children: [
                { id: 'service', label: '服务', notes: ['同比 +2%'] },
                { id: 'wireless_consumer', label: '无线设备', notes: ['同比 +6%'] },
                { id: 'other_consumer', label: '其他', notes: ['同比 +7%'] },
              ],
            },
            {
              id: 'business',
              label: '商业',
              notes: ['同比 +2%'],
              children: [
                { id: 'mobility_broadband_service', label: '移动与宽带服务', notes: ['同比 (1%)'] },
                { id: 'wireless_business', label: '无线设备', notes: ['同比 (1%)'] },
                { id: 'other_business', label: '其他', notes: ['同比 +6%'] },
              ],
            },
            { id: 'corporate', label: '公司及其他', notes: ['同比 (2%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及管理费用' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 60%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 24%', '同比 +0 个百分点'] },
          net: { label: '净利润', notes: ['利润率 15%', '同比 +0 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'verizon-q2-fy26',
    company: 'Verizon',
    period: 'Q2 FY26',
    periodNote: 'Quarter ended Jun. 30, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/verizon-q2-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 34.3,
      notes: ['(1%) Y/Y'],
      items: [
        {
          id: 'consumer',
          label: 'Consumer',
          value: 26.2,
          notes: ['(2%) Y/Y'],
          children: [
            { id: 'mobility_broadband_consumer', label: 'Mobility & Broadband Service', value: 19.6, notes: ['+3% Y/Y'] },
            { id: 'wireless_consumer', label: 'Wireless Equipment', value: 4.2, notes: ['(22%) Y/Y'] },
            { id: 'other_consumer', label: 'Other', value: 2.4, notes: ['+7% Y/Y'] },
          ],
        },
        {
          id: 'business',
          label: 'Business',
          value: 7.2,
          notes: ['+3% Y/Y'],
          children: [
            { id: 'mobility_broadband_business', label: 'Mobility & Broadband Service', value: 3.7, notes: ['+0% Y/Y'] },
            { id: 'wireless_business', label: 'Wireless Equipment', value: 0.8, notes: ['(5%) Y/Y'] },
            { id: 'other_business', label: 'Other', value: 2.6, notes: ['+10% Y/Y'] },
          ],
        },
        { id: 'corporate', label: 'Corporate', value: 0.9, notes: ['(3%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 13.1 },
      operatingExpenses: {
        total: 14.0,
        items: [
          { id: 'sga', label: 'SG&A', value: 9.0 },
          { id: 'depreciation_amortization', label: 'Depreciation & Amortization', value: 5.0 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 1.3 },
    },
    otherIncome: {
      total: 0.1,
      items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
    },
    otherExpenses: {
      total: 2.0,
      items: [{ id: 'interest', label: 'Interest', value: 2.0 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 21.1, notes: ['62% margin', '+2pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 7.2, notes: ['21% margin', '(3pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 3.9, notes: ['12% margin', '(3pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2026 年 6 月 30 日的季度',
        revenue: {
          notes: ['同比 (1%)'],
          items: [
            {
              id: 'consumer', label: '消费者', notes: ['同比 (2%)'],
              children: [
                { id: 'mobility_broadband_consumer', label: '移动与宽带服务', notes: ['同比 +3%'] },
                { id: 'wireless_consumer', label: '无线设备', notes: ['同比 (22%)'] },
                { id: 'other_consumer', label: '其他', notes: ['同比 +7%'] },
              ],
            },
            {
              id: 'business', label: '商业', notes: ['同比 +3%'],
              children: [
                { id: 'mobility_broadband_business', label: '移动与宽带服务', notes: ['同比 +0%'] },
                { id: 'wireless_business', label: '无线设备', notes: ['同比 (5%)'] },
                { id: 'other_business', label: '其他', notes: ['同比 +10%'] },
              ],
            },
            { id: 'corporate', label: '公司及其他', notes: ['同比 (3%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [
            { id: 'sga', label: '销售、一般及管理费用' },
            { id: 'depreciation_amortization', label: '折旧与摊销' },
          ] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 62%', '同比 +2 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 21%', '同比 (3 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 12%', '同比 (3 个百分点)'] },
        },
      },
    },
  });
})(window);
