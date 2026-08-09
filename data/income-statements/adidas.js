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
      key: 'adidas-q1-fy24',
      company: 'Adidas',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '€',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adidas-q1-fy24.png',
      roundingTolerance: 0.16,
      revenue: {
        total: 5.5,
        notes: ['+3% Y/Y', 'North America (5%) Y/Y', 'EMEA +15% Y/Y', 'China +1% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 3.2, notes: ['+7% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 1.9, notes: ['(1%) Y/Y'] },
          { id: 'accessories_gear', label: 'Accessories & Gear', value: 0.3, notes: ['(4%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2.7 },
        operatingExpenses: {
          total: 2.5,
          items: [
            { id: 'ga', label: 'G&A', value: 1.8 },
            { id: 'marketing_pos', label: 'Marketing & POS', value: 0.7 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      operatingOtherIncome: {
        total: 0.019,
        items: [{ id: 'other', label: 'Other', value: 0.019, notes: ['€19M'] }],
      },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'financial', label: 'Financial', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.8, notes: ['51% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.3, notes: ['6% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.2, notes: ['3% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +3%', '北美同比 (5%)', 'EMEA 同比 +15%', '中国同比 +1%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 +7%'] },
              { id: 'apparel', label: '服装', notes: ['同比 (1%)'] },
              { id: 'accessories_gear', label: '配件与装备', notes: ['同比 (4%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用' },
                { id: 'marketing_pos', label: '营销与销售点' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other', label: '其他', notes: ['€19M'] }] },
          otherExpenses: { items: [{ id: 'financial', label: '财务费用' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'adidas-fy23',
      company: 'Adidas',
      period: 'FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/adidas-fy23.png',
      roundingTolerance: 0.16,
      revenue: {
        total: 21.4,
        notes: ['(5%) Y/Y', 'North America (19%) Y/Y', 'EMEA (4%) Y/Y', 'China flat Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 12.1, notes: ['(1%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 7.8, notes: ['(11%) Y/Y'] },
          { id: 'accessories_gear', label: 'Accessories & Gear', value: 1.4, notes: ['(1%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 11.2 },
        operatingExpenses: {
          total: 10.1,
          notes: ['The displayed line items sum to €10.0B because the Source rounds to one decimal place.'],
          items: [
            { id: 'distribution_selling', label: 'Distribution & Selling', value: 5.5 },
            { id: 'marketing_pos', label: 'Marketing & POS', value: 2.5 },
            { id: 'ga', label: 'G&A', value: 1.8 },
            { id: 'other_opex', label: 'Other', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      operatingOtherIncome: {
        total: 0.2,
        items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
      },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'financial', label: 'Financial', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.2, notes: ['48% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.3, notes: ['1% margin', '(2pp) Y/Y'] },
        net: { id: 'net_loss', label: 'Net loss', value: -0.1, notes: ['(0%) margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 (5%)', '北美同比 (19%)', 'EMEA 同比 (4%)', '中国同比持平'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 (1%)'] },
              { id: 'apparel', label: '服装', notes: ['同比 (11%)'] },
              { id: 'accessories_gear', label: '配件与装备', notes: ['同比 (1%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['由于来源图四舍五入，所列项目合计为 €10.0B。'],
              items: [
                { id: 'distribution_selling', label: '分销与销售' },
                { id: 'marketing_pos', label: '营销与销售点' },
                { id: 'ga', label: '管理费用' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'financial', label: '财务费用' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 48%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 (2 个百分点)'] },
            net: { label: '净亏损', notes: ['利润率 (0%)', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'adidas-q1-fy25',
      company: 'Adidas',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '€',
      unit: 'B',
      decimals: 2,
      sourceImage: 'input/processed/adidas-q1-fy25.png',
      roundingTolerance: 0.16,
      revenue: {
        total: 6.2,
        notes: ['+13% Y/Y', 'North America +6% Y/Y', 'Europe +15% Y/Y', 'China +15% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 3.8, notes: ['+16% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 2.0, notes: ['+8% Y/Y'] },
          { id: 'accessories_gear', label: 'Accessories & Gear', value: 0.4, notes: ['+10% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 2.9,
          notes: ['Revenue less gross profit differs by €0.1B because the source chart rounds to one decimal place.'],
        },
        operatingExpenses: {
          total: 2.6,
          items: [
            { id: 'ga', label: 'G&A', value: 1.9, notes: ['30% of revenue', '(3pp) Y/Y'] },
            { id: 'marketing_pos', label: 'Marketing & POS', value: 0.7, notes: ['12% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax_other', label: 'Tax & other', value: 0.2 },
      },
      operatingOtherIncome: {
        total: 0.02,
        items: [{ id: 'other', label: 'Other', value: 0.02, notes: ['€20M'] }],
      },
      operatingOtherExpenses: {
        total: 0,
        items: [],
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.2, notes: ['52% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['10% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['7% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +13%', '北美同比 +6%', '欧洲同比 +15%', '中国同比 +15%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 +16%'] },
              { id: 'apparel', label: '服装', notes: ['同比 +8%'] },
              { id: 'accessories_gear', label: '配件与装备', notes: ['同比 +10%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '销售成本',
              notes: ['由于来源图按一位小数四舍五入，收入减毛利润与销售成本相差 €0.1B。'],
            },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用', notes: ['占收入 30%', '同比 (3 个百分点)'] },
                { id: 'marketing_pos', label: '营销与销售点', notes: ['占收入 12%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other', label: '其他', notes: ['€20M'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 10%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'adidas-q3-fy25',
      company: 'Adidas',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '€',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adidas-q3-fy25.png',
      roundingTolerance: 0.16,
      revenue: {
        total: 6.6,
        notes: ['+3% Y/Y', 'North America (5%) Y/Y', 'Europe +8% Y/Y', 'China +0% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 3.8, notes: ['(1%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 2.4, notes: ['+11% Y/Y'] },
          { id: 'accessories_gear', label: 'Accessories & Gear', value: 0.5, notes: ['(3%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.2 },
        operatingExpenses: {
          total: 2.7,
          items: [
            { id: 'ga', label: 'G&A', value: 1.9, notes: ['29% of revenue', '(4pp) Y/Y'] },
            { id: 'marketing_pos', label: 'Marketing & POS', value: 0.8, notes: ['12% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax_other', label: 'Tax & other', value: 0.3 },
      },
      operatingOtherIncome: {
        total: 0.042,
        items: [{ id: 'other', label: 'Other', value: 0.042, notes: ['€42M'] }],
      },
      operatingOtherExpenses: {
        total: 0,
        items: [],
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.4, notes: ['52% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.7, notes: ['11% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['7% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +3%', '北美同比 (5%)', '欧洲同比 +8%', '中国同比 +0%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 (1%)'] },
              { id: 'apparel', label: '服装', notes: ['同比 +11%'] },
              { id: 'accessories_gear', label: '配件与装备', notes: ['同比 (3%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用', notes: ['占收入 29%', '同比 (4 个百分点)'] },
                { id: 'marketing_pos', label: '营销与销售点', notes: ['占收入 12%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other', label: '其他', notes: ['€42M'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 (0 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'adidas-q2-fy25',
      company: 'Adidas',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '€',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/adidas-q2-fy25.png',
      roundingTolerance: 0.16,
      revenue: {
        total: 6.0,
        notes: ['+2% Y/Y', 'North America +3% Y/Y', 'Europe +4% Y/Y', 'China (3%) Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 3.5, notes: ['(3%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 2.0, notes: ['+11% Y/Y'] },
          { id: 'accessories_gear', label: 'Accessories & Gear', value: 0.4, notes: ['+3% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2.9 },
        operatingExpenses: {
          total: 2.5,
          notes: [
            'G&A and Marketing & POS line items sum to €2.6B because the source chart rounds to one decimal place.',
          ],
          items: [
            { id: 'ga', label: 'G&A', value: 1.9, notes: ['31% of revenue', '(2pp) Y/Y'] },
            { id: 'marketing_pos', label: 'Marketing & POS', value: 0.7, notes: ['12% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax_other', label: 'Tax & other', value: 0.2 },
      },
      otherIncome: {
        total: 0.019,
        items: [{ id: 'other', label: 'Other', value: 0.019, notes: ['€19M'] }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.1, notes: ['52% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.5, notes: ['9% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['6% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +2%', '北美同比 +3%', '欧洲同比 +4%', '中国同比 (3%)'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 (3%)'] },
              { id: 'apparel', label: '服装', notes: ['同比 +11%'] },
              { id: 'accessories_gear', label: '配件与装备', notes: ['同比 +3%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['由于来源图四舍五入，G&A 与营销及销售点项目合计为 €2.6B。'],
              items: [
                { id: 'ga', label: '管理费用', notes: ['占收入 31%', '同比 (2 个百分点)'] },
                { id: 'marketing_pos', label: '营销与销售点', notes: ['占收入 12%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他', notes: ['€19M'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'adidas-q4-fy25',
      company: 'Adidas',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/adidas-q4-fy25.png',
      roundingTolerance: 0.16,
      revenue: {
        total: 6.1,
        notes: ['+2% Y/Y', 'North America +5% Y/Y', 'Europe +6% Y/Y', 'China +15% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 3.2, notes: ['(4%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 2.4, notes: ['+12% Y/Y'] },
          { id: 'accessories_gear', label: 'Accessories & Gear', value: 0.4, notes: ['(0%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.0 },
        operatingExpenses: {
          total: 3.0,
          notes: [
            'G&A and Marketing & POS line items sum to €2.9B because the source chart rounds to one decimal place.',
          ],
          items: [
            { id: 'ga', label: 'G&A', value: 2.1, notes: ['35% of revenue', '(2pp) Y/Y'] },
            { id: 'marketing_pos', label: 'Marketing & POS', value: 0.8, notes: ['14% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax_other', label: 'Tax & other', value: 0.1 },
      },
      otherIncome: {
        total: 0.041,
        items: [{ id: 'other', label: 'Other', value: 0.041, notes: ['€41M'] }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.1, notes: ['51% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.2, notes: ['3% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.1, notes: ['1% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +2%', '北美同比 +5%', '欧洲同比 +6%', '中国同比 +15%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 (4%)'] },
              { id: 'apparel', label: '服装', notes: ['同比 +12%'] },
              { id: 'accessories_gear', label: '配件与装备', notes: ['同比 (0%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['由于来源图四舍五入，G&A 与营销及销售点项目合计为 €2.9B。'],
              items: [
                { id: 'ga', label: '管理费用', notes: ['占收入 35%', '同比 (2 个百分点)'] },
                { id: 'marketing_pos', label: '营销与销售点', notes: ['占收入 14%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他', notes: ['€41M'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 1%', '同比 +2 个百分点'] },
          },
        },
      },
    }
  );
})(window);
