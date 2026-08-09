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
      key: 'moodys-q2-fy26',
      company: "Moody's",
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/moodys-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 2185,
        notes: ['+15% Y/Y'],
        items: [
          {
            id: 'moodys_analytics',
            label: "Moody's Analytics",
            value: 925,
            notes: ['+4% Y/Y'],
            children: [
              { id: 'decision_solutions', label: 'Decision Solutions', value: 423, notes: ['+2% Y/Y'] },
              { id: 'research_insights', label: 'Research & Insights', value: 256, notes: ['+3% Y/Y'] },
              { id: 'data_information', label: 'Data & Information', value: 246, notes: ['+9% Y/Y'] },
            ],
          },
          {
            id: 'moodys_investors_service',
            label: "Moody's Investors Service",
            value: 1260,
            notes: ['+25% Y/Y'],
            children: [
              { id: 'corporate_finance', label: 'Corporate Finance', value: 651, notes: ['+27% Y/Y'] },
              { id: 'structured_finance', label: 'Structured Finance', value: 151, notes: ['+12% Y/Y'] },
              { id: 'financial_institutions', label: 'Financial Institutions', value: 222, notes: ['+16% Y/Y'] },
              { id: 'public_project', label: 'Public, Project', value: 224, notes: ['+38% Y/Y'] },
              { id: 'other', label: 'Other', value: 12, notes: ['+20% Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0,
          notes: ['Source chart does not show a separate gross profit or cost-of-revenue layer.'],
        },
        operatingExpenses: {
          total: 1139,
          items: [
            { id: 'operating', label: 'Operating', value: 518 },
            { id: 'sga', label: 'SG&A', value: 463 },
            { id: 'da', label: 'D&A', value: 126 },
            { id: 'restructuring', label: 'Restructuring', value: 32 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 292 },
      },
      otherIncome: {
        total: 125,
        items: [{ id: 'other_income', label: 'Other', value: 125 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 2185,
          notes: ['Source chart flows revenue directly to operating profit and operating expenses.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1046, notes: ['48% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 879, notes: ['40% margin', '+10pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的季度',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              {
                id: 'moodys_analytics',
                label: '穆迪分析',
                notes: ['同比 +4%'],
                children: [
                  { id: 'decision_solutions', label: '决策解决方案', notes: ['同比 +2%'] },
                  { id: 'research_insights', label: '研究与洞察', notes: ['同比 +3%'] },
                  { id: 'data_information', label: '数据与信息', notes: ['同比 +9%'] },
                ],
              },
              {
                id: 'moodys_investors_service',
                label: '穆迪投资者服务',
                notes: ['同比 +25%'],
                children: [
                  { id: 'corporate_finance', label: '企业融资', notes: ['同比 +27%'] },
                  { id: 'structured_finance', label: '结构性融资', notes: ['同比 +12%'] },
                  { id: 'financial_institutions', label: '金融机构', notes: ['同比 +16%'] },
                  { id: 'public_project', label: '公共、项目', notes: ['同比 +38%'] },
                  { id: 'other', label: '其他', notes: ['同比 +20%'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'operating', label: '运营' },
                { id: 'sga', label: '销售及管理费用' },
                { id: 'da', label: '折旧摊销' },
                { id: 'restructuring', label: '重组' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['来源图将收入直接流向营业利润与营业费用。'] },
            operating: { label: '营业利润', notes: ['利润率 48%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 40%', '同比 +10 个百分点'] },
          },
        },
      },
    },
    {
      key: 'moodys-q1-fy26',
      company: "Moody's",
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/moodys-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 2079,
        notes: ['+8% Y/Y'],
        items: [
          {
            id: 'moodys_analytics',
            label: "Moody's Analytics",
            value: 926,
            notes: ['+8% Y/Y'],
            children: [
              { id: 'decision_solutions', label: 'Decision Solutions', value: 432, notes: ['+7% Y/Y'] },
              { id: 'research_insights', label: 'Research & Insights', value: 255, notes: ['+8% Y/Y'] },
              { id: 'data_information', label: 'Data & Information', value: 239, notes: ['+10% Y/Y'] },
            ],
          },
          {
            id: 'moodys_investors_service',
            label: "Moody's Investors Service",
            value: 1153,
            notes: ['+8% Y/Y'],
            children: [
              { id: 'corporate_finance', label: 'Corporate Finance', value: 633, notes: ['+12% Y/Y'] },
              { id: 'structured_finance', label: 'Structured Finance', value: 137, notes: ['(1%) Y/Y'] },
              { id: 'financial_institutions', label: 'Financial Institutions', value: 194, notes: ['+2% Y/Y'] },
              { id: 'public_project', label: 'Public, Project', value: 176, notes: ['+8% Y/Y'] },
              { id: 'other', label: 'Other', value: 13, notes: ['+44% Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0,
          notes: ['Source chart does not show a separate gross profit or cost-of-revenue layer.'],
        },
        operatingExpenses: {
          total: 1157,
          items: [
            { id: 'operating', label: 'Operating', value: 531 },
            { id: 'sga', label: 'SG&A', value: 477 },
            { id: 'da', label: 'D&A', value: 122 },
            { id: 'restructuring', label: 'Restructuring', value: 27 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 209 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 52,
        items: [{ id: 'interest_other', label: 'Interest & other', value: 52 }],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 2079,
          notes: ['Source chart flows revenue directly to operating profit and operating expenses.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 922, notes: ['44% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 661, notes: ['32% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              {
                id: 'moodys_analytics',
                label: '穆迪分析',
                notes: ['同比 +8%'],
                children: [
                  { id: 'decision_solutions', label: '决策解决方案', notes: ['同比 +7%'] },
                  { id: 'research_insights', label: '研究与洞察', notes: ['同比 +8%'] },
                  { id: 'data_information', label: '数据与信息', notes: ['同比 +10%'] },
                ],
              },
              {
                id: 'moodys_investors_service',
                label: '穆迪投资者服务',
                notes: ['同比 +8%'],
                children: [
                  { id: 'corporate_finance', label: '企业融资', notes: ['同比 +12%'] },
                  { id: 'structured_finance', label: '结构性融资', notes: ['同比 (1%)'] },
                  { id: 'financial_institutions', label: '金融机构', notes: ['同比 +2%'] },
                  { id: 'public_project', label: '公共、项目', notes: ['同比 +8%'] },
                  { id: 'other', label: '其他', notes: ['同比 +44%'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'operating', label: '运营' },
                { id: 'sga', label: '销售及管理费用' },
                { id: 'da', label: '折旧摊销' },
                { id: 'restructuring', label: '重组' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'interest_other', label: '利息及其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['来源图将收入直接流向营业利润与营业费用。'] },
            operating: { label: '营业利润', notes: ['利润率 44%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 32%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'moodys-q4-fy25',
      company: "Moody's",
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/moodys-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 1889,
        notes: ['+13% Y/Y'],
        items: [
          {
            id: 'moodys_analytics',
            label: "Moody's Analytics",
            value: 943,
            notes: ['+9% Y/Y'],
            children: [
              { id: 'decision_solutions', label: 'Decision Solutions', value: 450, notes: ['+12% Y/Y'] },
              { id: 'research_insights', label: 'Research & Insights', value: 258, notes: ['+6% Y/Y'] },
              { id: 'data_information', label: 'Data & Information', value: 235, notes: ['+8% Y/Y'] },
            ],
          },
          {
            id: 'moodys_investors_service',
            label: "Moody's Investors Service",
            value: 946,
            notes: ['+17% Y/Y'],
            children: [
              { id: 'corporate_finance', label: 'Corporate Finance', value: 480, notes: ['+26% Y/Y'] },
              { id: 'structured_finance', label: 'Structured Finance', value: 139, notes: ['+1% Y/Y'] },
              { id: 'financial_institutions', label: 'Financial Institutions', value: 169, notes: ['+1% Y/Y'] },
              { id: 'public_project', label: 'Public, Project', value: 149, notes: ['+30% Y/Y'] },
              { id: 'other', label: 'Other', value: 9, notes: ['+13% Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0,
          notes: ['Source chart does not show a separate gross profit or cost-of-revenue layer.'],
        },
        operatingExpenses: {
          total: 1119,
          items: [
            { id: 'operating', label: 'Operating', value: 502 },
            { id: 'sga', label: 'SG&A', value: 467 },
            { id: 'da', label: 'Depreciation & Amortization', value: 124 },
            { id: 'other_expense', label: 'Other', value: 26 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 76 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 83,
        items: [{ id: 'interest_other', label: 'Interest & other', value: 83 }],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 1889,
          notes: ['Source chart flows revenue directly to operating profit and operating expenses.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 770, notes: ['41% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 611, notes: ['32% margin', '+9pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              {
                id: 'moodys_analytics',
                label: '穆迪分析',
                notes: ['同比 +9%'],
                children: [
                  { id: 'decision_solutions', label: '决策解决方案', notes: ['同比 +12%'] },
                  { id: 'research_insights', label: '研究与洞察', notes: ['同比 +6%'] },
                  { id: 'data_information', label: '数据与信息', notes: ['同比 +8%'] },
                ],
              },
              {
                id: 'moodys_investors_service',
                label: '穆迪投资者服务',
                notes: ['同比 +17%'],
                children: [
                  { id: 'corporate_finance', label: '企业融资', notes: ['同比 +26%'] },
                  { id: 'structured_finance', label: '结构性融资', notes: ['同比 +1%'] },
                  { id: 'financial_institutions', label: '金融机构', notes: ['同比 +1%'] },
                  { id: 'public_project', label: '公共、项目', notes: ['同比 +30%'] },
                  { id: 'other', label: '其他', notes: ['同比 +13%'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'operating', label: '运营' },
                { id: 'sga', label: '销售及管理费用' },
                { id: 'da', label: '折旧及摊销' },
                { id: 'other_expense', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'interest_other', label: '利息及其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['来源图将收入直接流向营业利润与营业费用。'] },
            operating: { label: '营业利润', notes: ['利润率 41%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 32%', '同比 +9 个百分点'] },
          },
        },
      },
    }
  );
})(window);
