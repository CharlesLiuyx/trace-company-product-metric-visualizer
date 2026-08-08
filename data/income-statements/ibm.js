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
      key: 'ibm-q4-fy25',
      company: 'IBM',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ibm-q4-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 19.7,
        notes: ['+12% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 9.0, notes: ['+14% Y/Y', '83% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.3, notes: ['+3% Y/Y', '28% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 5.1, notes: ['+21% Y/Y', '61% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['+5% Y/Y', '44% gross margin'] },
          { label: 'Unspecified rounding residual', value: 0.1, notes: ['The source rounds displayed segment revenue to $19.6B while showing $19.7B total revenue.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.8 },
        operatingExpenses: {
          total: 7.4,
          notes: ['SG&A and R&D are reduced by the $0.3B intellectual-property income shown in the source chart.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 5.5, notes: ['28% of revenue', '+0pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 2.2, notes: ['11% of revenue', '(0pp) Y/Y'] },
            { id: 'intellectual_property', label: 'Intellectual property income offset', value: -0.3, notes: ['Shown as +$0.3B income in the source chart.'] },
          ],
        },
        tax: { id: 'tax_benefit', label: 'Tax benefit', value: -1.4 },
      },
      operatingOtherIncome: {
        total: 0.1,
        items: [{ id: 'other_income', label: 'Other income', value: 0.1 }],
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.5, items: [{ id: 'interest', label: 'Interest', value: 0.5 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 11.9, notes: ['61% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.6, notes: ['23% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.6, notes: ['28% margin', '+12pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +14%', '毛利率 83%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 +3%', '毛利率 28%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 +21%', '毛利率 61%'] },
              { id: 'financing', label: '融资', notes: ['同比 +5%', '毛利率 44%'] },
              { label: '未披露的四舍五入差额', notes: ['来源图各业务收入合计为 $19.6B，总收入显示为 $19.7B。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政', notes: ['占收入 28%', '同比 +0 个百分点'] },
              { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (0 个百分点)'] },
              { id: 'intellectual_property', label: '知识产权收入抵减', notes: ['来源图显示为 +$0.3B 收入。'] },
            ] },
            tax: { label: '税收优惠' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 61%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 23%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 +12 个百分点'] },
          },
        },
      },
    },
    {
      key: 'ibm-q1-fy26',
      company: 'IBM',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ibm-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 15.9,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 7.1, notes: ['+11% Y/Y', '83% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.3, notes: ['+4% Y/Y', '28% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 3.3, notes: ['+15% Y/Y', '57% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['+15% Y/Y', '43% gross margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.048, notes: ['$48M'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.0 },
        operatingExpenses: {
          total: 7.1,
          notes: ['SG&A and R&D are offset by $0.2B of intellectual property income in the source chart.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 5.1, notes: ['32% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 2.2, notes: ['14% of revenue', '+0pp Y/Y'] },
            { id: 'intellectual_property', label: 'Intellectual property income offset', value: -0.2, notes: ['Shown as +$0.2B income in the source chart.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.5,
        items: [{ id: 'interest', label: 'Interest', value: 0.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.0, notes: ['56% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.9, notes: ['12% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['8% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +11%', '毛利率 83%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 +4%', '毛利率 28%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 +15%', '毛利率 57%'] },
              { id: 'financing', label: '融资', notes: ['同比 +15%', '毛利率 43%'] },
              { id: 'other_revenue', label: '其他', notes: ['$48M'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 32%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 +0 个百分点'] },
                { id: 'intellectual_property', label: '知识产权收入抵减', notes: ['来源图显示为 +$0.2B 收入。'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'ibm-q2-fy26',
      company: 'IBM',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ibm-q2-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 17.2,
        notes: ['+1% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 7.8, notes: ['+5% Y/Y', '83% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.3, notes: ['+0% Y/Y', '29% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 3.8, notes: ['(7%) Y/Y', '58% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['+12% Y/Y', '43% gross margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.1, notes: ['+68% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.3 },
        operatingExpenses: {
          total: 6.9,
          notes: ['The source displays two $0.2B income magnitudes alongside SG&A and R&D; the normalization adjustment converts those display magnitudes into their net expense-reducing effect.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 5.0, notes: ['29% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 2.3, notes: ['13% of revenue', '+1pp Y/Y'] },
            { id: 'intellectual_property', label: 'Intellectual property income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { id: 'other_income', label: 'Other income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { label: 'Income-offset normalization adjustment', value: -0.8, notes: ['Reverses the two positive display magnitudes and applies their $0.4B expense-reducing effect, yielding $6.9B net operating expenses.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.5,
        items: [{ id: 'interest', label: 'Interest', value: 0.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.9, notes: ['58% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.0, notes: ['17% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['13% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +5%', '毛利率 83%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 +0%', '毛利率 29%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 (7%)', '毛利率 58%'] },
              { id: 'financing', label: '融资', notes: ['同比 +12%', '毛利率 43%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +68%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 29%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 +1 个百分点'] },
                { id: 'intellectual_property', label: '知识产权收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
                { id: 'other_income', label: '其他收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
                { label: '收入抵减标准化调整', notes: ['冲回两个正数展示金额，并计入其合计 $0.4B 的费用抵减影响，得到 $6.9B 净运营费用。'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 58%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 (0 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
