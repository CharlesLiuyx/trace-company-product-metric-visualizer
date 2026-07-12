/* Pure income-statement SSOT records. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'sofi-q4-fy25',
    company: 'SoFi',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/sofi-q4-fy25.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 1078,
      notes: [
        'Sum of the three segment-revenue bars before the source chart’s $53M Corporate/Other adjustment.',
        'The source chart labels $1,025M after that adjustment as Net revenue.',
      ],
      items: [
        { id: 'lending', label: 'Lending', value: 499, notes: ['+19% Y/Y', '54% contribution margin', '(4pp) Y/Y'] },
        { id: 'technology_platform', label: 'Technology Platform', value: 122, notes: ['+19% Y/Y', '39% contribution margin', '+8pp Y/Y'] },
        { id: 'financial_services', label: 'Financial Services', value: 457, notes: ['+78% Y/Y', '51% contribution margin', '+6pp Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'corporate_other',
        label: 'Corporate/Other',
        value: 53,
        notes: ['Source-chart adjustment from segment revenue to Net revenue; presented as a cost-of-revenue bridge for SSOT arithmetic.'],
      },
      operatingExpenses: {
        total: 840,
        items: [
          { id: 'sales_marketing', label: 'Sales & marketing', value: 306, notes: ['30% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 194, notes: ['19% of revenue', '(3pp) Y/Y'] },
          { id: 'technology', label: 'Technology', value: 172, notes: ['17% of revenue', '(3pp) Y/Y'] },
          { id: 'cost_operations', label: 'Cost of operations', value: 162, notes: ['16% of revenue', '(2pp) Y/Y'] },
          { id: 'provision_credit_losses', label: 'Provision for credit losses', value: 5 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 12 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'net_revenue', label: 'Net revenue', value: 1025, notes: ['+40% Y/Y'] },
      operating: { id: 'pretax_income', label: 'Pretax income', value: 185 },
      net: { id: 'net_income', label: 'Net income', value: 174, notes: ['17% net margin'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['三项业务收入在来源图中扣除 $53M“公司/其他”调整前的合计。', '来源图将调整后的 $1,025M 标为净收入。'],
          items: [
            { id: 'lending', label: '借贷', notes: ['同比 +19%', '贡献利润率 54%', '同比 (4 个百分点)'] },
            { id: 'technology_platform', label: '技术平台', notes: ['同比 +19%', '贡献利润率 39%', '同比 +8 个百分点'] },
            { id: 'financial_services', label: '金融服务', notes: ['同比 +78%', '贡献利润率 51%', '同比 +6 个百分点'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '公司/其他', notes: ['来源图中由业务收入通向净收入的调整；为满足 SSOT 算术而列为收入成本桥接项。'] },
          operatingExpenses: {
            items: [
              { id: 'sales_marketing', label: '销售与营销', notes: ['占收入 30%', '同比 (1 个百分点)'] },
              { id: 'ga', label: '一般及行政费用', notes: ['占收入 19%', '同比 (3 个百分点)'] },
              { id: 'technology', label: '技术', notes: ['占收入 17%', '同比 (3 个百分点)'] },
              { id: 'cost_operations', label: '运营成本', notes: ['占收入 16%', '同比 (2 个百分点)'] },
              { id: 'provision_credit_losses', label: '信贷损失准备金' },
            ],
          },
          tax: { label: '税费' },
        },
        profit: {
          gross: { label: '净收入', notes: ['同比 +40%'] },
          operating: { label: '税前利润' },
          net: { label: '净利润', notes: ['净利率 17%'] },
        },
      },
    },
  });
})(window);
