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
      key: 'nestle-h1-fy23',
      company: 'Nestlé',
      period: 'H1 FY23',
      periodNote: 'Six months ended June 30, 2023',
      currency: 'CHF',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nestle-h1-fy23.png',
      sourceUrl: 'https://www.nestle.com/sites/default/files/2023-07/2023-half-year-report-en.pdf',
      roundingTolerance: 0.25,
      revenue: {
        total: 46.3,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'powdered_liquid_beverages', label: ['Powdered &', 'Liquid Beverages'], value: 12.3, notes: ['+0% Y/Y'] },
          { id: 'water', label: 'Water', value: 1.7, notes: ['(5%) Y/Y'] },
          { id: 'milk_ice_cream', label: ['Milk products', '& Ice cream'], value: 5.4, notes: ['+0% Y/Y'] },
          { id: 'nutrition_health_science', label: ['Nutrition &', 'Health Science'], value: 7.8, notes: ['+2% Y/Y'] },
          { id: 'prepared_dishes_cooking_aids', label: ['Prepared dishes', '& Cooking aid'], value: 5.9, notes: ['(3%) Y/Y'] },
          { id: 'confectionery', label: 'Confectionery', value: 3.7, notes: ['+3% Y/Y'] },
          { id: 'petcare', label: 'PetCare', value: 9.4, notes: ['+9% Y/Y'] },
          { id: 'other_revenue', label: 'Other revenue', value: 0.2, notes: ['Reported separately from Sales in the Source view'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 25.2 },
        operatingExpenses: {
          total: 14.0,
          items: [
            { id: 'marketing_administration', label: ['Marketing &', 'Administration'], value: 8.6 },
            { id: 'distribution', label: 'Distribution', value: 4.0, valueText: '(CHF 4.0B)' },
            { id: 'rnd', label: 'R&D', value: 0.8 },
            { id: 'other_operating_expenses', label: 'Other', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.5 },
      },
      otherIncome: {
        total: 0.7,
        items: [
          {
            id: 'other_income',
            label: 'Other',
            value: 0.7,
            notes: ['Income from associates and joint ventures'],
          },
        ],
      },
      otherExpenses: {
        total: 0.7,
        items: [{ id: 'financial', label: 'Financial', value: 0.7, notes: ['Net financial expenses'] }],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 21.3,
          notes: ['46% margin', '+0pp Y/Y', 'Includes separately shown Other revenue'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 7.3, notes: ['16% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.8, notes: ['12% margin', '+1% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年上半年',
          periodNote: '截至 2023 年 6 月 30 日的六个月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'powdered_liquid_beverages', label: ['粉末及', '液体饮料'], notes: ['同比 +0%'] },
              { id: 'water', label: '水业务', notes: ['同比 (5%)'] },
              { id: 'milk_ice_cream', label: ['乳制品及', '冰淇淋'], notes: ['同比 +0%'] },
              { id: 'nutrition_health_science', label: ['营养与', '健康科学'], notes: ['同比 +2%'] },
              { id: 'prepared_dishes_cooking_aids', label: ['预制食品及', '烹饪辅料'], notes: ['同比 (3%)'] },
              { id: 'confectionery', label: '糖果业务', notes: ['同比 +3%'] },
              { id: 'petcare', label: '宠物护理', notes: ['同比 +9%'] },
              { id: 'other_revenue', label: '其他收入', notes: ['在来源图中与销售额分开列示'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'marketing_administration', label: ['营销及', '管理费用'] },
                { id: 'distribution', label: '分销费用' },
                { id: 'rnd', label: '研发费用' },
                { id: 'other_operating_expenses', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他', notes: ['联营及合营企业收益'] }] },
          otherExpenses: { items: [{ id: 'financial', label: '财务费用', notes: ['净财务费用'] }] },
          profit: {
            gross: {
              label: '毛利润',
              notes: ['利润率 46%', '同比 +0 个百分点', '包含单独列示的其他收入'],
            },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +1%'] },
          },
        },
      },
    }
  );

  ssot.records.push(
    {
      key: 'nestle-fy23',
      company: 'Nestlé',
      period: 'FY23',
      periodNote: 'Ending Dec. 2023',
      currency: 'CHF',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nestle-fy23.png',
      roundingTolerance: 1.0,
      revenue: {
        total: 93.0,
        notes: ['(2%) Y/Y'],
        items: [
          { id: 'powdered_liquid_beverages', label: 'Powdered & Liquid Beverages', value: 24.8, notes: ['(2%) Y/Y'] },
          { id: 'water', label: 'Water', value: 3.3, notes: ['(6%) Y/Y'] },
          { id: 'milk_products_ice_cream', label: 'Milk products & Ice cream', value: 11.0, notes: ['(3%) Y/Y'] },
          { id: 'nutrition_health_science', label: 'Nutrition & Health Science', value: 15.3, notes: ['(3%) Y/Y'] },
          { id: 'prepared_dishes_cooking_aids', label: 'Prepared dishes & Cooking aid', value: 11.7, notes: ['(7%) Y/Y'] },
          { id: 'confectionery', label: 'Confectionery', value: 8.1, notes: ['+0% Y/Y'] },
          { id: 'petcare', label: 'PetCare', value: 18.9, notes: ['+4% Y/Y'] },
          { id: 'other_revenue', label: 'Other revenue', value: 0.4, notes: ['Reported separately from Sales in the Source view'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 50.3 },
        operatingExpenses: {
          total: 29.0,
          items: [
            { id: 'marketing_administration', label: 'Marketing & Administration', value: 17.5 },
            { id: 'distribution', label: 'Distribution', value: 7.8 },
            { id: 'research_development', label: 'R&D', value: 1.7 },
            { id: 'other_opex', label: 'Other', value: 2.0 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.3 },
      },
      otherIncome: {
        total: 1.1,
        items: [{ id: 'other_income', label: 'Other', value: 1.1 }],
      },
      otherExpenses: {
        total: 1.4,
        items: [{ id: 'financial', label: 'Financial', value: 1.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 43.0, notes: ['46% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 14.1, notes: ['15% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 11.5, notes: ['12% margin', '+2% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 (2%)'],
            items: [
              { id: 'powdered_liquid_beverages', label: '粉末及液体饮料', notes: ['同比 (2%)'] },
              { id: 'water', label: '水', notes: ['同比 (6%)'] },
              { id: 'milk_products_ice_cream', label: '乳制品与冰淇淋', notes: ['同比 (3%)'] },
              { id: 'nutrition_health_science', label: '营养与健康科学', notes: ['同比 (3%)'] },
              { id: 'prepared_dishes_cooking_aids', label: '预制食品与烹饪调味', notes: ['同比 (7%)'] },
              { id: 'confectionery', label: '糖果', notes: ['同比 +0%'] },
              { id: 'petcare', label: '宠物护理', notes: ['同比 +4%'] },
              { id: 'other_revenue', label: '其他收入', notes: ['在来源图中与销售额分开列示'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'marketing_administration', label: '市场营销及管理' },
                { id: 'distribution', label: '分销' },
                { id: 'research_development', label: '研发' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'financial', label: '财务费用' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +2%'] },
          },
        },
      },
    }
  );
})(window);
