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
      key: 'pepsico-q3-fy24', company: 'PepsiCo', period: 'Q3 FY24', periodNote: '',
      currency: '$', unit: 'B', decimals: 3, sourceImage: 'input/processed/pepsico-q3-fy24.png', roundingTolerance: 0.15,
      revenue: {
        total: 23.3, notes: ['(1%) Y/Y'], items: [
          { id: 'north_america', label: 'North America', value: 13.7, notes: ['(1%) Y/Y'], children: [
            { id: 'frito_lay', label: 'Frito-Lay', value: 5.9, notes: ['(1%) Y/Y'] },
            { id: 'quaker_foods', label: 'Quaker Foods', value: 0.6, notes: ['(13%) Y/Y'] },
            { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 7.2, notes: ['+0% Y/Y'] },
          ] },
          { id: 'latam', label: 'LATAM', value: 2.9, notes: ['(5%) Y/Y'] },
          { id: 'europe', label: 'Europe', value: 3.9, notes: ['+7% Y/Y'] },
          { id: 'amesa', label: 'Africa, Middle East & South Asia', value: 1.6, notes: ['(4%) Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.2, notes: ['(2%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 10.4 },
        operatingExpenses: { total: 9.1, items: [{ id: 'operating_expenses', label: 'Operating expenses', value: 9.1 }] },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: { total: 0.041, items: [{ id: 'other_income', label: 'Other', value: 0.041 }] },
      otherExpenses: { total: 0.2, items: [{ id: 'interest', label: 'Interest', value: 0.2 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.9, notes: ['55% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.9, notes: ['17% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.9, notes: ['13% margin', '(1pp) Y/Y'] },
      },
      i18n: { zh: {
        period: '2024 财年第三季度', periodNote: '',
        revenue: { notes: ['同比 (1%)'], items: [
          { id: 'north_america', label: '北美', notes: ['同比 (1%)'], children: [
            { id: 'frito_lay', label: '菲多利', notes: ['同比 (1%)'] },
            { id: 'quaker_foods', label: '桂格食品', notes: ['同比 (13%)'] },
            { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +0%'] },
          ] },
          { id: 'latam', label: '拉丁美洲', notes: ['同比 (5%)'] },
          { id: 'europe', label: '欧洲', notes: ['同比 +7%'] },
          { id: 'amesa', label: '非洲、中东和南亚', notes: ['同比 (4%)'] },
          { id: 'apac', label: '亚太', notes: ['同比 (2%)'] },
        ] },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用' }] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 55%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 17%', '同比 (1 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 13%', '同比 (1 个百分点)'] },
        },
      } },
    },
    {
      key: 'pepsico-q1-fy23', company: 'PepsiCo', period: 'Q1 FY23', periodNote: 'Ending Mar. 2023',
      currency: '$', unit: 'B', decimals: 1, sourceImage: 'input/processed/pepsico-q1-fy23.png', roundingTolerance: 0.15,
      revenue: {
        total: 17.8, notes: ['+10% Y/Y'], items: [
          { id: 'north_america', label: 'North America', value: 12.2, notes: ['+11% Y/Y'], children: [
            { id: 'frito_lay', label: 'Frito-Lay', value: 5.6, notes: ['+15% Y/Y'] },
            { id: 'quaker_foods', label: 'Quaker Foods', value: 0.8, notes: ['+9% Y/Y'] },
            { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 5.8, notes: ['+8% Y/Y'] },
          ] },
          { id: 'latam', label: 'LATAM', value: 1.8, notes: ['21% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 1.9, notes: ['+5% Y/Y'] },
          { id: 'amesa', label: 'Africa, Middle East & South Asia', value: 1.0, valueText: '$1.0B', notes: ['+1% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.0, valueText: '$1.0B', notes: ['(1%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.0, valueText: '($8.0B)' },
        operatingExpenses: { total: 7.2, items: [{ id: 'sga', label: 'SG&A', value: 7.2, notes: ['41% of revenue'] }] },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: { total: 0.1, items: [{ id: 'other', label: 'Other', value: 0.1 }] },
      otherExpenses: { total: 0.2, items: [{ id: 'interest', label: 'Interest', value: 0.2 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.9, notes: ['55% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.6, notes: ['15% margin', '(18pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['11% margin', '(15pp) Y/Y'] },
      },
      i18n: { zh: {
        period: '2023 财年第一季度', periodNote: '截至 2023 年 3 月',
        revenue: { notes: ['同比 +10%'], items: [
          { id: 'north_america', label: '北美', notes: ['同比 +11%'], children: [
            { id: 'frito_lay', label: '菲多利', notes: ['同比 +15%'] },
            { id: 'quaker_foods', label: '桂格食品', notes: ['同比 +9%'] },
            { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +8%'] },
          ] },
          { id: 'latam', label: '拉丁美洲', notes: ['同比 21%'] },
          { id: 'europe', label: '欧洲', notes: ['同比 +5%'] },
          { id: 'amesa', label: '非洲、中东及南亚', notes: ['同比 +1%'] },
          { id: 'apac', label: '亚太', notes: ['同比 (1%)'] },
        ] },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [{ id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 41%'] }] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 55%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 15%', '同比 (18 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 11%', '同比 (15 个百分点)'] },
        },
      } },
    },
    {
      key: 'pepsico-q2-fy24', company: 'PepsiCo', period: 'Q2 FY24', periodNote: 'Ending Jun. 2024',
      currency: '$', unit: 'B', decimals: 1, sourceImage: 'input/processed/pepsico-q2-fy24.png', roundingTolerance: 0.15,
      revenue: {
        total: 22.5, notes: ['+1% Y/Y'], items: [
          { id: 'north_america', label: 'North America', value: 13.2, notes: ['(1%) Y/Y'], children: [
            { id: 'frito_lay', label: 'Frito-Lay', value: 5.9, notes: ['(1%) Y/Y'] },
            { id: 'quaker_foods', label: 'Quaker Foods', value: 0.6, notes: ['(18%) Y/Y'] },
            { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 6.8, notes: ['+1% Y/Y'] },
          ] },
          { id: 'latam', label: 'LATAM', value: 3.0, notes: ['+7% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 3.5, notes: ['+3% Y/Y'] },
          { id: 'amesa', label: 'Africa, Middle East & South Asia', value: 1.6, notes: ['+2% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.1, notes: ['(2%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 9.9 },
        operatingExpenses: { total: 8.5, items: [
          { id: 'operating_expenses', label: 'Operating expenses', value: 8.5 },
        ] },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: { total: 0.1, items: [{ id: 'other', label: 'Other', value: 0.1 }] },
      otherExpenses: { total: 0.2, items: [{ id: 'interest', label: 'Interest', value: 0.2 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.6, notes: ['56% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.0, notes: ['18% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.1, notes: ['14% margin', '+1pp Y/Y'] },
      },
      i18n: { zh: {
        period: '2024 财年第二季度', periodNote: '截至 2024 年 6 月',
        revenue: { notes: ['同比 +1%'], items: [
          { id: 'north_america', label: '北美', notes: ['同比 (1%)'], children: [
            { id: 'frito_lay', label: '菲多利', notes: ['同比 (1%)'] },
            { id: 'quaker_foods', label: '桂格食品', notes: ['同比 (18%)'] },
            { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +1%'] },
          ] },
          { id: 'latam', label: '拉丁美洲', notes: ['同比 +7%'] },
          { id: 'europe', label: '欧洲', notes: ['同比 +3%'] },
          { id: 'amesa', label: '非洲、中东和南亚', notes: ['同比 +2%'] },
          { id: 'apac', label: '亚太', notes: ['同比 (2%)'] },
        ] },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用' }] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 56%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 18%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 14%', '同比 +1 个百分点'] },
        },
      } },
    },
    {
      key: 'pepsico-q3-fy25', company: 'PepsiCo', period: 'Q3 FY25', periodNote: 'Ending Sep. 2025',
      currency: '$', unit: 'B', decimals: 3, sourceImage: 'input/processed/pepsico-q3-fy25.png', roundingTolerance: 0.15,
      revenue: {
        total: 23.9, valueText: '$23.9B', notes: ['+3% Y/Y'], items: [
          { id: 'north_america', label: 'North America', value: 13.9, valueText: '$13.9B', notes: ['+1% Y/Y'], children: [
            { id: 'foods', label: 'Foods', value: 6.5, valueText: '$6.5B', notes: ['(0%) Y/Y'] },
            { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 7.3, valueText: '$7.3B', notes: ['+2% Y/Y'] },
          ] },
          { id: 'ib_franchise', label: 'IB franchise', value: 1.3, valueText: '$1.3B', notes: ['+0% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 2.7, valueText: '$2.7B', notes: ['+2% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 5.0, valueText: '$5.0B', notes: ['+9% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.1, valueText: '$1.1B', notes: ['+2% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 11.1, valueText: '($11.1B)' },
        operatingExpenses: { total: 9.3, valueText: '($9.3B)', items: [
          { id: 'sga', label: 'SG&A', value: 9.1, valueText: '($9.1B)' },
          { id: 'impairment', label: 'Impairment', value: 0.1, valueText: '($0.1B)' },
        ] },
        tax: { id: 'tax', label: 'Tax', value: 0.7, valueText: '($0.7B)' },
      },
      otherIncome: { total: 0.026, valueText: '$26M', items: [{ id: 'other_income', label: 'Other', value: 0.026, valueText: '$26M' }] },
      otherExpenses: { total: 0.3, valueText: '($0.3B)', items: [{ id: 'interest', label: 'Interest', value: 0.3, valueText: '($0.3B)' }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.8, valueText: '$12.8B', notes: ['54% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.6, valueText: '$3.6B', notes: ['15% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.6, valueText: '$2.6B', notes: ['11% margin', '(2pp) Y/Y'] },
      },
      i18n: { zh: {
        period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月',
        revenue: { notes: ['同比 +3%'], items: [
          { id: 'north_america', label: '北美', notes: ['同比 +1%'], children: [
            { id: 'foods', label: '食品', notes: ['同比 (0%)'] },
            { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +2%'] },
          ] },
          { id: 'ib_franchise', label: '国际饮料特许经营', notes: ['同比 +0%'] },
          { id: 'latam', label: '拉丁美洲', notes: ['同比 +2%'] },
          { id: 'emea', label: '欧洲中东非洲', notes: ['同比 +9%'] },
          { id: 'apac', label: '亚太', notes: ['同比 +2%'] },
        ] },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [{ id: 'sga', label: '销售及行政费用' }, { id: 'impairment', label: '减值' }] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 54%', '同比 (2 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 15%', '同比 (2 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 11%', '同比 (2 个百分点)'] },
        },
      } },
    },
    {
      key: 'pepsico-q1-fy25', company: 'PepsiCo', period: 'Q1 FY25', periodNote: 'Ending Mar. 2025',
      currency: '$', unit: 'B', decimals: 3, sourceImage: 'input/processed/pepsico-q1-fy25.png', roundingTolerance: 0.15,
      revenue: {
        total: 17.9, notes: ['(2%) Y/Y'], items: [
          { id: 'north_america', label: 'North America', value: 12.1, notes: ['(0%) Y/Y'], children: [
            { id: 'foods', label: 'Foods', value: 6.2, notes: ['(1%) Y/Y'] },
            { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 5.9, notes: ['+0% Y/Y'] },
          ] },
          { id: 'ib_franchise', label: 'IB franchise', value: 0.8, notes: ['+3% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.7, notes: ['(12%) Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 2.4, notes: ['(2%) Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.0, notes: ['(2%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.9 },
        operatingExpenses: { total: 7.4, items: [{ id: 'operating_expenses', label: 'Operating expenses', value: 7.4 }] },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: { total: 0.023, items: [{ id: 'other_income', label: 'Other', value: 0.023 }] },
      otherExpenses: { total: 0.3, items: [{ id: 'interest', label: 'Interest', value: 0.3 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.0, notes: ['56% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.6, notes: ['14% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.8, notes: ['10% margin', '(1pp) Y/Y'] },
      },
      i18n: { zh: {
        period: '2025 财年第一季度', periodNote: '截至 2025 年 3 月',
        revenue: { notes: ['同比 (2%)'], items: [
          { id: 'north_america', label: '北美', notes: ['同比 (0%)'], children: [
            { id: 'foods', label: '食品', notes: ['同比 (1%)'] },
            { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +0%'] },
          ] },
          { id: 'ib_franchise', label: '国际饮料特许经营', notes: ['同比 +3%'] },
          { id: 'latam', label: '拉丁美洲', notes: ['同比 (12%)'] },
          { id: 'emea', label: '欧洲中东非洲', notes: ['同比 (2%)'] },
          { id: 'apac', label: '亚太', notes: ['同比 (2%)'] },
        ] },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用' }] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 56%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 14%', '同比 (0 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 10%', '同比 (1 个百分点)'] },
        },
      } },
    },
    {
      key: 'pepsico-q2-fy23', company: 'PepsiCo', period: 'Q2 FY23', periodNote: 'Ending Jun. 2023',
      currency: '$', unit: 'B', decimals: 1, sourceImage: 'input/processed/pepsico-q2-fy23.png', roundingTolerance: 0.25,
      revenue: {
        total: 22.3, notes: ['+10% Y/Y'], items: [
          { id: 'north_america', label: 'North America', value: 13.3, notes: ['+11% Y/Y'], children: [
            { id: 'frito_lay', label: 'Frito-Lay', value: 5.9, notes: ['+14% Y/Y'] },
            { id: 'quaker_foods', label: 'Quaker Foods', value: 0.7, notes: ['+1% Y/Y'] },
            { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 6.8, notes: ['+10% Y/Y'] },
          ] },
          { id: 'latam', label: 'LATAM', value: 2.9, notes: ['+18% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 3.4, notes: ['+13% Y/Y'] },
          { id: 'amesa', label: 'Africa, Middle East & South Asia', value: 1.6, notes: ['(8%) Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.1, notes: ['+1% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 10.1 },
        operatingExpenses: { total: 8.5, items: [{ id: 'sga', label: 'SG&A', value: 8.5, notes: ['38% of revenue'] }] },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: { total: 0.1, items: [{ id: 'other', label: 'Other', value: 0.1 }] },
      otherExpenses: { total: 0.2, items: [{ id: 'interest', label: 'Interest', value: 0.2 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.2, notes: ['55% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.7, notes: ['16% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.8, notes: ['12% margin', '+7pp Y/Y'] },
      },
      i18n: { zh: {
        period: '2023 财年第二季度', periodNote: '截至 2023 年 6 月',
        revenue: { notes: ['同比 +10%'], items: [
          { id: 'north_america', label: '北美', notes: ['同比 +11%'], children: [
            { id: 'frito_lay', label: '菲多利', notes: ['同比 +14%'] },
            { id: 'quaker_foods', label: '桂格食品', notes: ['同比 +1%'] },
            { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +10%'] },
          ] },
          { id: 'latam', label: '拉丁美洲', notes: ['同比 +18%'] },
          { id: 'europe', label: '欧洲', notes: ['同比 +13%'] },
          { id: 'amesa', label: '非洲、中东及南亚', notes: ['同比 (8%)'] },
          { id: 'apac', label: '亚太', notes: ['同比 +1%'] },
        ] },
        costs: { costOfRevenue: { label: '收入成本' }, operatingExpenses: { items: [{ id: 'sga', label: '销售、一般及行政费用', notes: ['占收入 38%'] }] }, tax: { label: '税费' } },
        otherIncome: { items: [{ id: 'other', label: '其他' }] }, otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 55%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 16%', '同比 +6 个百分点'] },
          net: { label: '净利润', notes: ['利润率 12%', '同比 +7 个百分点'] },
        },
      } },
    },
    {
      key: 'pepsico-q3-fy23',
      company: 'PepsiCo',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/pepsico-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 23.5,
        notes: ['+7% Y/Y'],
        items: [
          {
            id: 'north_america', label: 'North America', value: 13.9, notes: ['+7% Y/Y'],
            children: [
              { id: 'frito_lay', label: 'Frito-Lay', value: 5.9, notes: ['+7% Y/Y'] },
              { id: 'quaker_foods', label: 'Quaker Foods', value: 0.7, notes: ['+5% Y/Y'] },
              { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 7.2, notes: ['+8% Y/Y'] },
            ],
          },
          { id: 'latam', label: 'LATAM', value: 3.1, notes: ['+21% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 3.7, notes: ['+2% Y/Y'] },
          { id: 'amesa', label: 'Africa, Middle East & South Asia', value: 1.6, notes: ['(6%) Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.2, notes: ['+4% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 10.7 },
        operatingExpenses: {
          total: 8.8,
          items: [
            { id: 'sga', label: 'SG&A', value: 8.8, notes: ['37% of revenue'] },
            { id: 'other_operating_expense', label: 'Other', value: 0.006, valueText: '($6M)' },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.8, notes: ['54% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.0, valueText: '$4.0B', notes: ['17% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.1, notes: ['13% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度', periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +7%'], items: [
              {
                id: 'north_america', label: '北美', notes: ['同比 +7%'], children: [
                  { id: 'frito_lay', label: '菲多利', notes: ['同比 +7%'] },
                  { id: 'quaker_foods', label: '桂格食品', notes: ['同比 +5%'] },
                  { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +8%'] },
                ],
              },
              { id: 'latam', label: '拉丁美洲', notes: ['同比 +21%'] },
              { id: 'europe', label: '欧洲', notes: ['同比 +2%'] },
              { id: 'amesa', label: '非洲、中东及南亚', notes: ['同比 (6%)'] },
              { id: 'apac', label: '亚太', notes: ['同比 +4%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 37%'] },
              { id: 'other_operating_expense', label: '其他' },
            ] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'pepsico-q4-fy22',
      company: 'PepsiCo',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/pepsico-q4-fy22.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 28.0,
        notes: ['+11% Y/Y'],
        items: [
          {
            id: 'north_america', label: 'North America', value: 16.9, notes: ['+15% Y/Y'],
            children: [
              { id: 'frito_lay', label: 'Frito-Lay', value: 7.7, notes: ['+25% Y/Y'] },
              { id: 'quaker_foods', label: 'Quaker Foods', value: 1.1, notes: ['+16% Y/Y'] },
              { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 8.1, notes: ['+6% Y/Y'] },
            ],
          },
          { id: 'latam', label: 'LATAM', value: 3.4, notes: ['+21% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 4.3, notes: ['(2%) Y/Y'] },
          { id: 'amesa', label: 'Africa, Middle East & South Asia', value: 2.0, notes: ['+4% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.5, notes: ['+2% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 13.4 },
        operatingExpenses: {
          total: 13.8,
          items: [
            { id: 'sga', label: 'SG&A', value: 12.2, notes: ['44% of revenue'] },
            { id: 'other', label: 'Other', value: 1.6, notes: ['6% of revenue'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax expense is shown in the Source.'] },
      },
      otherIncome: { total: 0.1, items: [{ id: 'tax_other', label: 'Tax & Other', value: 0.1 }] },
      otherExpenses: { total: 0.3, items: [{ id: 'interest', label: 'Interest', value: 0.3 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 14.6, notes: ['52% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.8, notes: ['3% margin', '(7pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['2% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度', periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              {
                id: 'north_america', label: '北美', notes: ['同比 +15%'],
                children: [
                  { id: 'frito_lay', label: '菲多利', notes: ['同比 +25%'] },
                  { id: 'quaker_foods', label: '桂格食品', notes: ['同比 +16%'] },
                  { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +6%'] },
                ],
              },
              { id: 'latam', label: '拉丁美洲', notes: ['同比 +21%'] },
              { id: 'europe', label: '欧洲', notes: ['同比 (2%)'] },
              { id: 'amesa', label: '非洲、中东及南亚', notes: ['同比 +4%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +2%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售管理费用', notes: ['占收入 44%'] },
              { id: 'other', label: '其他', notes: ['占收入 6%'] },
            ] },
            tax: { label: '税费', notes: ['来源图未单独显示税费支出。'] },
          },
          otherIncome: { items: [{ id: 'tax_other', label: '税费及其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3%', '同比 (7 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 2%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'pepsico-q4-fy24',
      company: 'PepsiCo',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/pepsico-q4-fy24.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 27.8,
        notes: ['(0%) Y/Y'],
        items: [
          {
            id: 'north_america', label: 'North America', value: 16.1, notes: ['(1%) Y/Y'],
            children: [
              { id: 'frito_lay', label: 'Frito-Lay', value: 7.3, notes: ['(2%) Y/Y'] },
              { id: 'quaker_foods', label: 'Quaker Foods', value: 0.9, notes: ['(2%) Y/Y'] },
              { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 7.9, notes: ['(0%) Y/Y'] },
            ],
          },
          { id: 'latam', label: 'LATAM', value: 3.7, notes: ['(7%) Y/Y'] },
          { id: 'europe', label: 'Europe', value: 4.5, notes: ['+6% Y/Y'] },
          { id: 'amesa', label: 'Africa, Middle East & South Asia', value: 2.0, notes: ['+5% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.5, notes: ['+2% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 13.2 },
        operatingExpenses: {
          total: 12.3,
          items: [{ id: 'operating_expenses', label: 'Operating expenses', value: 12.3 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.5,
        items: [
          { id: 'interest', label: 'Interest', value: 0.3 },
          { id: 'other', label: 'Other', value: 0.2 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 14.6, notes: ['53% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.2, notes: ['8% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.5, notes: ['6% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度', periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 (0%)'],
            items: [
              {
                id: 'north_america', label: '北美', notes: ['同比 (1%)'],
                children: [
                  { id: 'frito_lay', label: '菲多利', notes: ['同比 (2%)'] },
                  { id: 'quaker_foods', label: '桂格食品', notes: ['同比 (2%)'] },
                  { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 (0%)'] },
                ],
              },
              { id: 'latam', label: '拉丁美洲', notes: ['同比 (7%)'] },
              { id: 'europe', label: '欧洲', notes: ['同比 +6%'] },
              { id: 'amesa', label: '非洲、中东及南亚', notes: ['同比 +5%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +2%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用' }] },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }, { id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'pepsico-q4-fy23',
      company: 'PepsiCo',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/pepsico-q4-fy23.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 27.9,
        notes: ['+1% Y/Y'],
        items: [
          {
            id: 'north_america',
            label: 'North America',
            value: 16.3,
            notes: ['(4%) Y/Y'],
            children: [
              { id: 'frito_lay', label: 'Frito-Lay', value: 7.5, notes: ['(3%) Y/Y'] },
              { id: 'quaker_foods', label: 'Quaker Foods', value: 0.9, notes: ['(16%) Y/Y'] },
              { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 7.9, notes: ['(2%) Y/Y'] },
            ],
          },
          { id: 'latam', label: 'LATAM', value: 4.0, notes: ['+18% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 4.2, notes: ['(1%) Y/Y'] },
          { id: 'amesa', label: 'Africa, Middle East & South Asia', value: 1.9, notes: ['(4%) Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.5, notes: ['(2%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 13.1 },
        operatingExpenses: {
          total: 13.1,
          items: [
            { id: 'sga', label: 'SG&A', value: 12.1, notes: ['44% of revenue'] },
            { id: 'other_expense', label: 'Other', value: 0.9 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 14.8, notes: ['53% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.7, notes: ['6% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.3, notes: ['5% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              {
                id: 'north_america', label: '北美', notes: ['同比 (4%)'],
                children: [
                  { id: 'frito_lay', label: '菲多利', notes: ['同比 (3%)'] },
                  { id: 'quaker_foods', label: '桂格食品', notes: ['同比 (16%)'] },
                  { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 (2%)'] },
                ],
              },
              { id: 'latam', label: '拉丁美洲', notes: ['同比 +18%'] },
              { id: 'europe', label: '欧洲', notes: ['同比 (1%)'] },
              { id: 'amesa', label: '非洲、中东及南亚', notes: ['同比 (4%)'] },
              { id: 'apac', label: '亚太', notes: ['同比 (2%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用', notes: ['占收入 44%'] },
                { id: 'other_expense', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'pepsico-q2-fy25',
      company: 'PepsiCo',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/pepsico-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 22.7,
        notes: ['+1% Y/Y'],
        items: [
          {
            id: 'north_america',
            label: 'North America',
            value: 13.3,
            notes: ['+0% Y/Y'],
            children: [
              { id: 'foods', label: 'Foods', value: 6.5, notes: ['+1% Y/Y'] },
              { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 6.8, notes: ['(0%) Y/Y'] },
            ],
          },
          { id: 'ib_franchise', label: 'IB franchise', value: 1.4, notes: ['+3% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 2.5, notes: ['(7%) Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 4.5, notes: ['+8% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.0, valueText: '$1.0B', notes: ['+1% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 10.3 },
        operatingExpenses: {
          total: 10.6,
          items: [
            { id: 'sga', label: 'SG&A', value: 8.8 },
            { id: 'impairment', label: 'Impairment', value: 1.9 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.042,
        valueText: '$42M',
        items: [{ id: 'other_income', label: 'Other', value: 0.042, valueText: '$42M' }],
      },
      otherExpenses: {
        total: 0.3,
        items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.4, notes: ['55% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['8% margin', '(10pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.3, notes: ['6% margin', '(8pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              {
                id: 'north_america', label: '北美', notes: ['同比 +0%'],
                children: [
                  { id: 'foods', label: '食品', notes: ['同比 +1%'] },
                  { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 (0%)'] },
                ],
              },
              { id: 'ib_franchise', label: '国际饮料特许经营', notes: ['同比 +3%'] },
              { id: 'latam', label: '拉丁美洲', notes: ['同比 (7%)'] },
              { id: 'emea', label: '欧洲中东非洲', notes: ['同比 +8%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +1%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及管理费用' },
                { id: 'impairment', label: '减值' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 55%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 (10 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 (8 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'pepsico-q4-fy25',
      company: 'PepsiCo',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/pepsico-q4-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 29.3,
        notes: ['+6% Y/Y'],
        items: [
          {
            id: 'north_america',
            label: 'North America',
            value: 16.6,
            notes: ['+3% Y/Y'],
            children: [
              { id: 'foods', label: 'Foods', value: 8.3, notes: ['+1% Y/Y'] },
              { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 8.2, notes: ['+4% Y/Y'] },
            ],
          },
          { id: 'ib_franchise', label: 'IB franchise', value: 1.6, notes: ['+4% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 3.7, notes: ['+11% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 6.1, notes: ['+12% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.5, notes: ['+5% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 13.7 },
        operatingExpenses: {
          total: 12.1,
          items: [
            { id: 'operating_expenses', label: 'Operating expenses SG&A', value: 12.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.5,
        items: [
          { id: 'interest', label: 'Interest', value: 0.3 },
          { id: 'other', label: 'Other', value: 0.2 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 15.6, notes: ['53% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.6, notes: ['12% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.5, notes: ['9% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              {
                id: 'north_america', label: '北美', notes: ['同比 +3%'],
                children: [
                  { id: 'foods', label: '食品', notes: ['同比 +1%'] },
                  { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +4%'] },
                ],
              },
              { id: 'ib_franchise', label: '国际饮料特许经营', notes: ['同比 +4%'] },
              { id: 'latam', label: '拉丁美洲', notes: ['同比 +11%'] },
              { id: 'emea', label: '欧洲中东非洲', notes: ['同比 +12%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +5%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用 SG&A' }] },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }, { id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'pepsico-q1-fy26',
      company: 'PepsiCo',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/pepsico-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 19.4,
        notes: ['+9% Y/Y'],
        items: [
          {
            id: 'north_america',
            label: 'North America',
            value: 12.7,
            notes: ['+5% Y/Y'],
            children: [
              { id: 'foods', label: 'Foods', value: 6.3, notes: ['+2% Y/Y'] },
              { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 6.4, notes: ['+9% Y/Y'] },
            ],
          },
          { id: 'ib_franchise', label: 'IB franchise', value: 0.8, notes: ['+9% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.9, notes: ['+16% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 2.8, notes: ['+18% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.1, notes: ['+11% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.7 },
        operatingExpenses: {
          total: 7.5,
          items: [
            { id: 'operating_expenses', label: 'Operating expenses SG&A', value: 7.5 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.4,
        items: [
          { id: 'interest_other', label: 'Interest & other', value: 0.4 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.7, notes: ['55% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.2, notes: ['17% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['11% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              {
                id: 'north_america',
                label: '北美',
                notes: ['同比 +5%'],
                children: [
                  { id: 'foods', label: '食品', notes: ['同比 +2%'] },
                  { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +9%'] },
                ],
              },
              { id: 'ib_franchise', label: '国际饮料特许经营', notes: ['同比 +9%'] },
              { id: 'latam', label: '拉丁美洲', notes: ['同比 +16%'] },
              { id: 'emea', label: '欧洲中东非洲', notes: ['同比 +18%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +11%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'operating_expenses', label: '运营费用 SG&A' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'interest_other', label: '利息及其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 55%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'pepsico-q2-fy26',
      company: 'PepsiCo',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/pepsico-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 24.2,
        notes: ['+6% Y/Y'],
        items: [
          {
            id: 'north_america',
            label: 'North America',
            value: 13.6,
            notes: ['(3%) Y/Y'],
            children: [
              { id: 'foods', label: 'Foods', value: 6.4, notes: ['(2%) Y/Y'] },
              { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 7.2, notes: ['+7% Y/Y'] },
            ],
          },
          { id: 'ib_franchise', label: 'IB franchise', value: 1.5, notes: ['+11% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 2.9, notes: ['+15% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 5.0, notes: ['+10% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.1, notes: ['+12% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 11.1 },
        operatingExpenses: {
          total: 9.1,
          items: [
            { id: 'operating_expenses', label: 'Operating expenses SG&A', value: 9.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.2,
        items: [
          { id: 'interest_other', label: 'Interest & other', value: 0.2 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 13.1, notes: ['54% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.0, notes: ['17% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.0, notes: ['12% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              {
                id: 'north_america', label: '北美', notes: ['同比 (3%)'],
                children: [
                  { id: 'foods', label: '食品', notes: ['同比 (2%)'] },
                  { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +7%'] },
                ],
              },
              { id: 'ib_franchise', label: '国际饮料特许经营', notes: ['同比 +11%'] },
              { id: 'latam', label: '拉丁美洲', notes: ['同比 +15%'] },
              { id: 'emea', label: '欧洲中东非洲', notes: ['同比 +10%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +12%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用 SG&A' }] },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest_other', label: '利息及其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +9 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'pepsico-q1-fy24',
      company: 'PepsiCo',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/pepsico-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 18.3,
        notes: ['+2% Y/Y'],
        items: [
          {
            id: 'north_america',
            label: 'North America',
            value: 12.1,
            notes: ['(0%) Y/Y'],
            children: [
              { id: 'frito_lay', label: 'Frito-Lay', value: 5.7, notes: ['+2% Y/Y'] },
              { id: 'quaker_foods', label: 'Quaker Foods', value: 0.6, notes: ['(24%) Y/Y'] },
              { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 5.9, notes: ['+1% Y/Y'] },
            ],
          },
          { id: 'latam', label: 'LATAM', value: 2.1, notes: ['+16% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 1.9, notes: ['+3% Y/Y'] },
          { id: 'amesa', label: 'Africa, Middle East & South Asia', value: 1.0, notes: ['+2% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.1, notes: ['+6% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.2 },
        operatingExpenses: {
          total: 7.3,
          items: [
            { id: 'operating_expenses', label: 'Operating expenses', value: 7.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0.1,
        items: [
          { id: 'other', label: 'Other', value: 0.1 },
        ],
      },
      otherExpenses: {
        total: 0.2,
        items: [
          { id: 'interest', label: 'Interest', value: 0.2 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.0, notes: ['55% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.7, notes: ['15% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.1, notes: ['11% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              {
                id: 'north_america', label: '北美', notes: ['同比 (0%)'],
                children: [
                  { id: 'frito_lay', label: '菲多利', notes: ['同比 +2%'] },
                  { id: 'quaker_foods', label: '桂格食品', notes: ['同比 (24%)'] },
                  { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +1%'] },
                ],
              },
              { id: 'latam', label: '拉丁美洲', notes: ['同比 +16%'] },
              { id: 'europe', label: '欧洲', notes: ['同比 +3%'] },
              { id: 'amesa', label: '非洲、中东和南亚', notes: ['同比 +2%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +6%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 55%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +0 个百分点'] },
          },
        },
      },
    }
  );
})(window);
