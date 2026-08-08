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
      key: 'schwab-q4-fy25',
      company: 'Schwab',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/schwab-q4-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 6.3,
        notes: ['+19% Y/Y'],
        items: [
          { id: 'net_interest', label: 'Net interest', value: 3.2, notes: ['+27% Y/Y'] },
          { id: 'asset_management', label: 'Asset management', value: 1.7, notes: ['+15% Y/Y'] },
          { id: 'trading', label: 'Trading', value: 1.1, notes: ['+22% Y/Y'] },
          { id: 'bank_deposit_account_fees', label: 'Bank deposit account fees', value: 0.2, notes: ['(1%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.1, notes: ['(27%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart has no separate cost-of-revenue or gross-profit layer.'],
        },
        operatingExpenses: {
          total: 3.2,
          notes: ['Displayed non-interest expense detail totals $3.0B because the source rounds or omits a residual $0.2B allocation.'],
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 1.6 },
            { id: 'professional_services', label: 'Professional services', value: 0.3 },
            { id: 'occupancy', label: 'Occupancy', value: 0.3 },
            { id: 'advertising', label: 'Advertising', value: 0.1 },
            { id: 'comm', label: 'Comm.', value: 0.1 },
            { id: 'da', label: 'D&A', value: 0.2 },
            { id: 'acquired_intangible_assets', label: 'Acquired intangible assets', value: 0.1 },
            { id: 'regulatory_fee', label: 'Regulatory fee', value: 0.1 },
            { id: 'other_expenses', label: 'Other', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          id: 'revenue',
          label: 'Revenue before non-interest expenses',
          value: 6.3,
          notes: ['The source flows net revenue directly to pretax income and non-interest expenses.'],
        },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 3.2 },
        net: { id: 'net_income', label: 'Net income', value: 2.5, notes: ['+34% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +19%'],
            items: [
              { id: 'net_interest', label: '净利息收入', notes: ['同比 +27%'] },
              { id: 'asset_management', label: '资产管理', notes: ['同比 +15%'] },
              { id: 'trading', label: '交易', notes: ['同比 +22%'] },
              { id: 'bank_deposit_account_fees', label: '银行存款账户费用', notes: ['同比 (1%)'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (27%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图未单独显示收入成本或毛利润层。'] },
            operatingExpenses: {
              notes: ['图示非利息费用明细合计为 $3.0B；来源图因取整或未单列分配形成 $0.2B 残差。'],
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' },
                { id: 'professional_services', label: '专业服务' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'advertising', label: '广告' },
                { id: 'comm', label: '通信费用' },
                { id: 'da', label: '折旧与摊销' },
                { id: 'acquired_intangible_assets', label: '收购无形资产' },
                { id: 'regulatory_fee', label: '监管费用' },
                { id: 'other_expenses', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '扣除非利息费用前收入', notes: ['来源图将净收入直接流向税前利润和非利息费用。'] },
            operating: { label: '税前利润' },
            net: { label: '净利润', notes: ['同比 +34%'] },
          },
        },
      },
    },
    {
      key: 'schwab-q1-fy26',
      company: 'Schwab',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/schwab-q1-fy26.png',
      roundingTolerance: 0.05,
      revenue: {
        total: 6.5,
        notes: ['+16% Y/Y'],
        items: [
          { id: 'net_interest', label: 'Net interest', value: 3.1, notes: ['+16% Y/Y'] },
          { id: 'asset_management', label: 'Asset management', value: 1.8, notes: ['+15% Y/Y'] },
          { id: 'trading', label: 'Trading', value: 1.1, notes: ['+20% Y/Y'] },
          { id: 'bank_deposit_account_fees', label: 'Bank deposit account fees', value: 0.3, notes: ['+20% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.2, notes: ['(7%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart has no separate cost-of-revenue or gross-profit layer.'],
        },
        operatingExpenses: {
          total: 3.3,
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 1.8 },
            { id: 'professional_services', label: 'Professional services', value: 0.3 },
            { id: 'occupancy', label: 'Occupancy', value: 0.3 },
            { id: 'advertising', label: 'Advertising', value: 0.1 },
            { id: 'comm', label: 'Comm.', value: 0.2 },
            { id: 'da', label: 'D&A', value: 0.2 },
            { id: 'acquired_intangible_assets', label: 'Acquired intangible assets', value: 0.1 },
            { id: 'regulatory_fee', label: 'Regulatory fee', value: 0.1 },
            { id: 'other_expenses', label: 'Other', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          id: 'revenue',
          label: 'Revenue before non-interest expenses',
          value: 6.5,
          notes: ['The source flows net revenue directly to pretax income and non-interest expenses.'],
        },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 3.2 },
        net: { id: 'net_income', label: 'Net income', value: 2.5, notes: ['+30% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              { id: 'net_interest', label: '净利息收入', notes: ['同比 +16%'] },
              { id: 'asset_management', label: '资产管理', notes: ['同比 +15%'] },
              { id: 'trading', label: '交易', notes: ['同比 +20%'] },
              { id: 'bank_deposit_account_fees', label: '银行存款账户费用', notes: ['同比 +20%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (7%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图未单独显示收入成本或毛利润层。'] },
            operatingExpenses: {
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' },
                { id: 'professional_services', label: '专业服务' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'advertising', label: '广告' },
                { id: 'comm', label: '通信费用' },
                { id: 'da', label: '折旧与摊销' },
                { id: 'acquired_intangible_assets', label: '收购无形资产' },
                { id: 'regulatory_fee', label: '监管费用' },
                { id: 'other_expenses', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '扣除非利息费用前收入', notes: ['来源图将净收入直接流向税前利润和非利息费用。'] },
            operating: { label: '税前利润' },
            net: { label: '净利润', notes: ['同比 +30%'] },
          },
        },
      },
    },
    {
      key: 'schwab-q2-fy26',
      company: 'Schwab',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/schwab-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 7.1,
        notes: ['+21% Y/Y', 'Displayed revenue items total $7.0B because of source rounding.'],
        items: [
          { id: 'net_interest', label: 'Net interest', value: 3.4, notes: ['+19% Y/Y'] },
          { id: 'asset_management', label: 'Asset management', value: 1.8, notes: ['+16% Y/Y'] },
          { id: 'trading', label: 'Trading', value: 1.2, notes: ['+28% Y/Y'] },
          { id: 'bank_deposit_account_fees', label: 'Bank deposit account fees', value: 0.3, notes: ['+35% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.3, notes: ['+32% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart has no separate cost-of-revenue or gross-profit layer.'],
        },
        operatingExpenses: {
          total: 3.4,
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 1.8 },
            { id: 'professional_services', label: 'Professional services', value: 0.3 },
            { id: 'occupancy', label: 'Occupancy', value: 0.3 },
            { id: 'advertising', label: 'Advertising', value: 0.1 },
            { id: 'comm', label: 'Comm.', value: 0.2 },
            { id: 'da', label: 'D&A', value: 0.2 },
            { id: 'acquired_intangible_assets', label: 'Acquired intangible assets', value: 0.1 },
            { id: 'regulatory_fee', label: 'Regulatory fee', value: 0.1 },
            { id: 'other_expenses', label: 'Other', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.9 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          id: 'revenue',
          label: 'Revenue before non-interest expenses',
          value: 7.1,
          notes: ['The source flows net revenue directly to pretax income and non-interest expenses.'],
        },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 3.7 },
        net: { id: 'net_income', label: 'Net income', value: 2.8, notes: ['+40% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +21%', '因来源图取整，图示收入分项合计为 $7.0B。'],
            items: [
              { id: 'net_interest', label: '净利息收入', notes: ['同比 +19%'] },
              { id: 'asset_management', label: '资产管理', notes: ['同比 +16%'] },
              { id: 'trading', label: '交易', notes: ['同比 +28%'] },
              { id: 'bank_deposit_account_fees', label: '银行存款账户费用', notes: ['同比 +35%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +32%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图未单独显示收入成本或毛利润层。'] },
            operatingExpenses: {
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' },
                { id: 'professional_services', label: '专业服务' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'advertising', label: '广告' },
                { id: 'comm', label: '通信费用' },
                { id: 'da', label: '折旧与摊销' },
                { id: 'acquired_intangible_assets', label: '收购无形资产' },
                { id: 'regulatory_fee', label: '监管费用' },
                { id: 'other_expenses', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '扣除非利息费用前收入', notes: ['来源图将净收入直接流向税前利润和非利息费用。'] },
            operating: { label: '税前利润' },
            net: { label: '净利润', notes: ['同比 +40%'] },
          },
        },
      },
    }
  );
})(window);
