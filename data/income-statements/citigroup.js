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
          notes: ['Source amounts are rounded to $0.1B precision.'],
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
            operating: { label: '税前利润', notes: ['来源金额按 $0.1B 精度取整。'] },
            net: { label: '净利润', notes: ['同比 (13%)'] },
          },
        },
      },
    },
    {
      key: 'citigroup-q1-fy26',
      company: 'Citigroup',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/citigroup-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 24.6,
        notes: ['+14% Y/Y', 'Net of interest expenses'],
        items: [
          { id: 'services', label: 'Services', value: 6.1, notes: ['+17% Y/Y', '37% net margin'] },
          { id: 'markets', label: 'Markets', value: 7.2, notes: ['+19% Y/Y', '36% net margin'] },
          { id: 'banking', label: 'Banking', value: 1.8, notes: ['+15% Y/Y', '17% net margin'] },
          { id: 'wealth', label: 'Wealth', value: 3.1, notes: ['+11% Y/Y', '14% net margin'] },
          { id: 'uspb', label: 'USPB', value: 4.8, notes: ['+4% Y/Y', '15% net margin'] },
          { id: 'all_other', label: 'All other', value: 1.7, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'provision_for_credit_losses',
          label: 'Provision for credit losses',
          value: 2.8,
          notes: ['Source depicts this as a pre-pretax cost.'],
        },
        operatingExpenses: {
          total: 14.3,
          notes: ['Noninterest expenses'],
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 8.4 },
            { id: 'other_general_operating', label: 'Other general operating', value: 2.8 },
            { id: 'technology_communication', label: 'Technology & Communication', value: 2.4 },
            { id: 'premises_equipment', label: 'Premises & equipment', value: 0.6 },
            { id: 'marketing', label: 'Marketing', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.6 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Revenue after credit loss provision',
          value: 21.8,
          notes: ['Balancing subtotal; not labeled separately in the source chart.'],
        },
        operating: {
          id: 'pretax_income',
          label: 'Pretax income',
          value: 7.5,
          notes: ['Source amounts are rounded to $0.1B precision.'],
        },
        net: { id: 'net_income', label: 'Net income', value: 5.9, notes: ['+45% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +14%', '扣除利息支出后'],
            items: [
              { id: 'services', label: '服务', notes: ['同比 +17%', '净利率 37%'] },
              { id: 'markets', label: '市场', notes: ['同比 +19%', '净利率 36%'] },
              { id: 'banking', label: '银行', notes: ['同比 +15%', '净利率 17%'] },
              { id: 'wealth', label: '财富管理', notes: ['同比 +11%', '净利率 14%'] },
              { id: 'uspb', label: '美国个人银行', notes: ['同比 +4%', '净利率 15%'] },
              { id: 'all_other', label: '所有其他', notes: ['同比 +16%'] },
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
          profit: {
            gross: { label: '扣除信用损失拨备后的收入', notes: ['用于平衡的小计；来源图未单独标注。'] },
            operating: { label: '税前利润', notes: ['来源金额按 $0.1B 精度取整。'] },
            net: { label: '净利润', notes: ['同比 +45%'] },
          },
        },
      },
    },
    {
      key: 'citigroup-q2-fy26',
      company: 'Citigroup',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/citigroup-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 24.8,
        notes: ['+14% Y/Y', 'Net of interest expenses'],
        items: [
          { id: 'services', label: 'Services', value: 6.4, notes: ['+18% Y/Y', '41% net margin'] },
          { id: 'markets', label: 'Markets', value: 7.0, notes: ['+17% Y/Y', '34% net margin'] },
          { id: 'banking', label: 'Banking', value: 1.9, notes: ['+34% Y/Y', '18% net margin'] },
          { id: 'wealth', label: 'Wealth', value: 3.2, notes: ['+13% Y/Y', '18% net margin'] },
          { id: 'uspb', label: 'USPB', value: 4.5, notes: ['+1% Y/Y', '19% net margin'] },
          { id: 'all_other', label: 'All other', value: 1.8, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'provision_for_credit_losses',
          label: 'Provision for credit losses',
          value: 2.5,
          notes: ['Source depicts this as a pre-pretax cost.'],
        },
        operatingExpenses: {
          total: 14.2,
          notes: ['Noninterest expenses'],
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 8.0 },
            { id: 'other_general_operating', label: 'Other general operating', value: 3.1 },
            { id: 'technology_communication', label: 'Technology & Communication', value: 2.3 },
            { id: 'premises_equipment', label: 'Premises & equipment', value: 0.6 },
            { id: 'marketing', label: 'Marketing', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Revenue after credit loss provision',
          value: 22.3,
          notes: ['Balancing subtotal; not labeled separately in the source chart.'],
        },
        operating: {
          id: 'pretax_income',
          label: 'Pretax income',
          value: 8.0,
          notes: ['Source amounts are rounded to $0.1B precision.'],
        },
        net: { id: 'net_income', label: 'Net income', value: 6.0, notes: ['+49% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +14%', '扣除利息支出后'],
            items: [
              { id: 'services', label: '服务', notes: ['同比 +18%', '净利率 41%'] },
              { id: 'markets', label: '市场', notes: ['同比 +17%', '净利率 34%'] },
              { id: 'banking', label: '银行', notes: ['同比 +34%', '净利率 18%'] },
              { id: 'wealth', label: '财富管理', notes: ['同比 +13%', '净利率 18%'] },
              { id: 'uspb', label: '美国个人银行', notes: ['同比 +1%', '净利率 19%'] },
              { id: 'all_other', label: '所有其他', notes: ['同比 +14%'] },
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
          profit: {
            gross: { label: '扣除信用损失拨备后的收入', notes: ['用于平衡的小计；来源图未单独标注。'] },
            operating: { label: '税前利润', notes: ['来源金额按 $0.1B 精度取整。'] },
            net: { label: '净利润', notes: ['同比 +49%'] },
          },
        },
      },
    }
  );
})(window);
