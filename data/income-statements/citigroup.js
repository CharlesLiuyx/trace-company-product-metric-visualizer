/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'citigroup-q4-fy25',
      company: 'Citigroup',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/citigroup-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 19.9,
        notes: ['+2% Y/Y', 'Net of interest expenses'],
        items: [
          { id: 'services', label: 'Services', value: 5.9, notes: ['+15% Y/Y', '38% net margin'] },
          { id: 'markets', label: 'Markets', value: 4.5, notes: ['(1%) Y/Y', '17% net margin'] },
          { id: 'banking', label: 'Banking', value: 2.2, notes: ['+78% Y/Y', '31% net margin'] },
          { id: 'wealth', label: 'Wealth', value: 2.1, notes: ['+7% Y/Y', '16% net margin'] },
          { id: 'uspb', label: 'USPB', value: 5.3, notes: ['+3% Y/Y', '16% net margin'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'provision_for_credit_losses',
          label: 'Provision for credit losses',
          value: 2.2,
          notes: ['Source depicts this as a pre-pretax cost.'],
        },
        operatingExpenses: {
          total: 13.8,
          notes: ['Noninterest expenses'],
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 7.1 },
            { id: 'other_general_operating', label: 'Other general operating', value: 3.3 },
            { id: 'technology_communication', label: 'Technology & communication', value: 2.4 },
            { id: 'premises_equipment', label: 'Premises & equipment', value: 0.7 },
            { id: 'marketing', label: 'Marketing', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.3 },
      },
      operatingOtherExpenses: {
        total: 0.2,
        items: [{ id: 'all_other', label: 'All Other', value: 0.2 }],
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Revenue after credit loss provision',
          value: 17.7,
          notes: ['Balancing subtotal; not labeled separately in the source chart.'],
        },
        operating: {
          id: 'pretax_income',
          label: 'Pretax income',
          value: 3.8,
          notes: ['Source amounts are rounded to the nearest tenth of a billion.'],
        },
        net: { id: 'net_income', label: 'Net income', value: 2.5, notes: ['(13%) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +2%', '扣除利息支出后'],
            items: [
              { id: 'services', label: '服务', notes: ['同比 +15%', '净利率 38%'] },
              { id: 'markets', label: '市场', notes: ['同比 (1%)', '净利率 17%'] },
              { id: 'banking', label: '银行', notes: ['同比 +78%', '净利率 31%'] },
              { id: 'wealth', label: '财富管理', notes: ['同比 +7%', '净利率 16%'] },
              { id: 'uspb', label: '美国个人银行', notes: ['同比 +3%', '净利率 16%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '信用损失拨备', notes: ['来源图将其展示为税前利润前成本。'] },
            operatingExpenses: {
              notes: ['非利息费用'],
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' },
                { id: 'other_general_operating', label: '其他一般运营' },
                { id: 'technology_communication', label: '技术与通信' },
                { id: 'premises_equipment', label: '场地与设备' },
                { id: 'marketing', label: '营销' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherExpenses: { items: [{ id: 'all_other', label: '所有其他' }] },
          profit: {
            gross: { label: '扣除信用损失拨备后的收入', notes: ['用于平衡的小计；来源图未单独标注。'] },
            operating: { label: '税前利润', notes: ['来源金额四舍五入至十亿美元的小数点后一位。'] },
            net: { label: '净利润', notes: ['同比 (13%)'] },
          },
        },
      },
    }
  );
})(window);
