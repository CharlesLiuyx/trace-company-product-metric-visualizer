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
      key: 'ibm-q2-fy24',
      company: 'IBM',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/ibm-q2-fy24.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 15.8,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 6.7, notes: ['+7% Y/Y', '84% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.2, notes: ['(1%) Y/Y', '26% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 3.6, notes: ['+1% Y/Y', '57% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['(99%) Y/Y', '49% gross margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.038, notes: ['(75%) Y/Y', '$38M'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.8 },
        operatingExpenses: {
          total: 6.3,
          notes: ['The source displays two $0.2B income magnitudes alongside SG&A and R&D; the normalization adjustment converts those display magnitudes into their net expense-reducing effect.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 4.9 },
            { id: 'rnd', label: 'R&D', value: 1.8 },
            { id: 'intellectual_property', label: 'Intellectual property income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { id: 'other_income', label: 'Other income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { label: 'Income-offset normalization adjustment', value: -0.8, notes: ['Reverses the two positive display magnitudes and applies their $0.4B expense-reducing effect, yielding $6.3B net operating expenses.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.4, items: [{ id: 'interest', label: 'Interest', value: 0.4 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.0, notes: ['57% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.6, notes: ['17% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.8, notes: ['12% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度', periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +7%', '毛利率 84%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 (1%)', '毛利率 26%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 +1%', '毛利率 57%'] },
              { id: 'financing', label: '融资', notes: ['同比 (99%)', '毛利率 49%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (75%)', '$38M'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政' },
              { id: 'rnd', label: '研发' },
              { id: 'intellectual_property', label: '知识产权收入', notes: ['来源图显示为正数收入；见下方标准化调整。'] },
              { id: 'other_income', label: '其他收入', notes: ['来源图显示为正数收入；见下方标准化调整。'] },
              { label: '收入抵减标准化调整', notes: ['反转两项正数展示值并计入合计 $0.4B 的费用抵减影响，使运营费用净额为 $6.3B。'] },
            ] },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 57%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'ibm-q1-fy25',
      company: 'IBM',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ibm-q1-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 14.5,
        notes: ['+1% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 6.3, notes: ['+7% Y/Y', '84% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.1, notes: ['(2%) Y/Y', '27% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 2.9, notes: ['(6%) Y/Y', '53% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['(1%) Y/Y', '46% gross margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.1, notes: ['(44%) Y/Y'] },
          { label: 'Unspecified rounding residual', value: -0.1, notes: ['The source rounds displayed segment revenue to $14.6B while showing $14.5B total revenue.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.5 },
        operatingExpenses: {
          total: 6.4,
          notes: ['SG&A and R&D are offset by $0.3B of intellectual-property income and $0.2B of other income in the source chart.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 4.9, notes: ['34% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 2.0, notes: ['13% of revenue', '+1pp Y/Y'] },
            { id: 'intellectual_property', label: 'Intellectual property income', value: 0.3, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { id: 'other_income', label: 'Other income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { label: 'Income-offset normalization adjustment', value: -1.0, notes: ['Reverses the two positive display magnitudes and applies their $0.5B expense-reducing effect, yielding $6.4B net operating expenses.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.5,
        items: [{ id: 'interest', label: 'Interest', value: 0.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.0, notes: ['55% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.6, notes: ['11% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.1, notes: ['7% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度', periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +7%', '毛利率 84%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 (2%)', '毛利率 27%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 (6%)', '毛利率 53%'] },
              { id: 'financing', label: '融资', notes: ['同比 (1%)', '毛利率 46%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (44%)'] },
              { label: '未披露的四舍五入差额', notes: ['来源图各业务收入合计为 $14.6B，总收入显示为 $14.5B。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政', notes: ['占收入 34%', '同比 (1 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 +1 个百分点'] },
              { id: 'intellectual_property', label: '知识产权收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
              { id: 'other_income', label: '其他收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
              { label: '收入抵减标准化调整', notes: ['冲回两个正数展示金额，并计入其合计 $0.5B 的费用抵减影响，得到 $6.4B 净运营费用。'] },
            ] },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 55%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'ibm-q4-fy24',
      company: 'IBM',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/ibm-q4-fy24.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 17.6,
        notes: ['+1% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 7.9, notes: ['+10% Y/Y', '85% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.2, notes: ['(2%) Y/Y', '28% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 4.3, notes: ['(8%) Y/Y', '57% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['(3%) Y/Y', '47% gross margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.003, notes: ['(79%) Y/Y', '$3M'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.1 },
        operatingExpenses: {
          total: 6.7,
          notes: ['SG&A, R&D, and Other are reduced by the $0.3B intellectual-property income shown in the source chart.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 4.9, notes: ['28% of revenue', '+0pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 2.0, notes: ['11% of revenue', '+1pp Y/Y'] },
            { id: 'other_operating_expense', label: 'Other', value: 0.2, notes: ['1% of revenue', '+2pp Y/Y'] },
            { id: 'intellectual_property', label: 'Intellectual property income', value: 0.3, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { label: 'Income-offset normalization adjustment', value: -0.7, notes: ['Reverses the positive $0.3B display magnitude, applies its expense-reducing effect, and reconciles the source-rounded $6.7B total operating expenses.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.4, items: [{ id: 'interest', label: 'Interest', value: 0.4 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.4, notes: ['59% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.7, notes: ['19% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.9, notes: ['17% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度', periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +10%', '毛利率 85%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 (2%)', '毛利率 28%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 (8%)', '毛利率 57%'] },
              { id: 'financing', label: '融资', notes: ['同比 (3%)', '毛利率 47%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (79%)', '$3M'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政', notes: ['占收入 28%', '同比 +0 个百分点'] },
              { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] },
              { id: 'other_operating_expense', label: '其他', notes: ['占收入 1%', '同比 +2 个百分点'] },
              { id: 'intellectual_property', label: '知识产权收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
              { label: '收入抵减标准化调整', notes: ['冲回正数展示金额、计入费用抵减影响，并对账来源图四舍五入后的 $6.7B 运营费用总额。'] },
            ] },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 59%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 19%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 17%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'ibm-q3-fy23',
      company: 'IBM',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ibm-q3-fy23.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 14.8,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 6.3, notes: ['+8% Y/Y', '79% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.0, notes: ['+6% Y/Y', '27% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 3.3, notes: ['(2%) Y/Y', '54% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['+7% Y/Y', '50% gross margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.1, notes: ['(4%) Y/Y'] },
          { label: 'Unspecified rounding residual', value: -0.1, notes: ['The source rounds displayed segment revenue to $14.9B while showing $14.8B total revenue.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.0 },
        operatingExpenses: {
          total: 5.7,
          notes: ['SG&A and R&D are offset by the two $0.2B income items and a $0.1B source-rounding residual.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 4.5 },
            { id: 'rnd', label: 'R&D', value: 1.7 },
            { id: 'intellectual_property', label: 'Intellectual property income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { id: 'other_income', label: 'Other income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { label: 'Income-offset normalization adjustment', value: -0.9, notes: ['Reverses the two positive display magnitudes, applies their $0.4B expense-reducing effect, and includes the $0.1B source-rounding residual, yielding $5.7B net operating expenses.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.4, items: [{ id: 'interest', label: 'Interest', value: 0.4 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.0, notes: ['54% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['15% margin', '+47pp Y/Y *'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['12% margin', '+34pp Y/Y *'] },
      },
      notes: ['* Q3 FY22 includes a one-time, non-cash, pre-tax pension settlement charge of $5.9B ($4.4B net of tax).'],
      i18n: {
        zh: {
          period: '2023 财年第三季度', periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +8%', '毛利率 79%'] }, { id: 'consulting', label: '咨询', notes: ['同比 +6%', '毛利率 27%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 (2%)', '毛利率 54%'] }, { id: 'financing', label: '融资', notes: ['同比 +7%', '毛利率 50%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (4%)'] }, { label: '未披露的四舍五入差额', notes: ['来源图各业务收入合计为 $14.9B，总收入显示为 $14.8B。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政' }, { id: 'rnd', label: '研发' },
              { id: 'intellectual_property', label: '知识产权收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
              { id: 'other_income', label: '其他收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
              { label: '收入抵减标准化调整', notes: ['冲回两个正数展示金额，计入其合计 $0.4B 的费用抵减影响及 $0.1B 来源四舍五入差额，得到 $5.7B 净运营费用。'] },
            ] },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +47 个百分点 *'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +34 个百分点 *'] },
          },
          notes: ['* 2022 财年第三季度包含一次性、非现金、税前养老金结算费用 $5.9B（税后 $4.4B）。'],
        },
      },
    },
    {
      key: 'ibm-q1-fy23',
      company: 'IBM',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ibm-q1-fy23.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 14.3,
        notes: ['+0% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 5.9, notes: ['+3% Y/Y', '80% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.0, notes: ['+3% Y/Y', '25% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 3.1, notes: ['(4%) Y/Y', '52% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['+27% Y/Y', '44% gross margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.1, notes: ['(67%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.7 },
        operatingExpenses: {
          total: 6.1,
          notes: ['The source displays $0.2B of intellectual-property income and $0.2B of other income alongside SG&A and R&D; the normalization adjustment converts those display magnitudes into their net expense-reducing effect.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 4.9 },
            { id: 'rnd', label: 'R&D', value: 1.7 },
            { id: 'intellectual_property', label: 'Intellectual property income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { id: 'other_income', label: 'Other income', value: 0.2, notes: ['Source-displayed income magnitude; the source literal contains a duplicated currency symbol.'] },
            { label: 'Income-offset normalization adjustment', value: -0.9, notes: ['Reverses the two positive display magnitudes, applies their $0.4B expense-reducing effect, and includes the source rounding residual, yielding $6.1B net operating expenses.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.4, items: [{ id: 'interest', label: 'Interest', value: 0.4 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.5, notes: ['54% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.4, notes: ['10% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.9, notes: ['7% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度', periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +0%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +3%', '毛利率 80%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 +3%', '毛利率 25%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 (4%)', '毛利率 52%'] },
              { id: 'financing', label: '融资', notes: ['同比 +27%', '毛利率 44%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (67%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政' },
              { id: 'rnd', label: '研发' },
              { id: 'intellectual_property', label: '知识产权收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
              { id: 'other_income', label: '其他收入', notes: ['来源图显示的收入金额；来源字面量重复了货币符号。'] },
              { label: '收入抵减标准化调整', notes: ['冲回两个正数展示金额，计入其合计 $0.4B 的费用抵减影响及来源四舍五入差额，得到 $6.1B 净运营费用。'] },
            ] },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 10%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'ibm-q4-fy23',
      company: 'IBM',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/ibm-q4-fy23.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 17.3,
        notes: ['+4% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 7.5, notes: ['+3% Y/Y', '82% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.0, notes: ['+6% Y/Y', '28% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 4.6, notes: ['+3% Y/Y', '61% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['+2% Y/Y', '50% gross margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.041, notes: ['$41M'] },
          { label: 'Unspecified rounding residual', value: -0.041, notes: ['Displayed business-line revenue sums to $17.341B while total revenue is shown as $17.3B.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.1 },
        operatingExpenses: {
          total: 6.1,
          notes: ['SG&A and R&D are offset by $0.2B of intellectual-property income and $0.2B of other income shown in the source chart.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 4.8 },
            { id: 'rnd', label: 'R&D', value: 1.7 },
            { id: 'intellectual_property', label: 'Intellectual property income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { id: 'other_income', label: 'Other income', value: 0.2, notes: ['Source image prints the value as $$0.2B; see the normalization adjustment below.'] },
            { label: 'Income-offset normalization adjustment', value: -0.8, notes: ['Reverses the two positive display magnitudes and applies their combined $0.4B expense-reducing effect, yielding $6.1B net operating expenses.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.4, items: [{ id: 'interest', label: 'Interest', value: 0.4 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.3, notes: ['59% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.1, notes: ['24% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.3, notes: ['19% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度', periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +3%', '毛利率 82%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 +6%', '毛利率 28%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 +3%', '毛利率 61%'] },
              { id: 'financing', label: '融资', notes: ['同比 +2%', '毛利率 50%'] },
              { id: 'other_revenue', label: '其他', notes: ['$41M'] },
              { label: '未披露的四舍五入差额', notes: ['来源图各业务收入合计为 $17.341B，总收入显示为 $17.3B。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['销售、一般及行政费用和研发费用被 $0.2B 的知识产权收入及 $0.2B 的其他收入抵减。'],
              items: [
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'rnd', label: '研发' },
                { id: 'intellectual_property', label: '知识产权收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
                { id: 'other_income', label: '其他收入', notes: ['来源图金额含重复的美元符号；净额处理见下方标准化调整。'] },
                { label: '收入抵减标准化调整', notes: ['冲回两个正数展示金额，并计入其合计 $0.4B 的费用抵减影响，得到 $6.1B 净运营费用。'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 59%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 24%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 19%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'ibm-q3-fy24',
      company: 'IBM',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ibm-q3-fy24.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 15.0,
        notes: ['+1% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 6.5, notes: ['+10% Y/Y', '83% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.2, notes: ['(1%) Y/Y', '28% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 3.0, notes: ['(7%) Y/Y', '54% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['(3%) Y/Y', '50% gross margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.1, notes: ['(60%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.5 },
        operatingExpenses: {
          total: 8.8,
          notes: ['The source presents $9.0B of gross expense categories offset by $0.2B of intellectual-property income.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 4.9, notes: ['33% of revenue', '+3pp Y/Y'] },
            { id: 'other_expense', label: 'Other', value: 2.2, notes: ['15% of revenue', '+16pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 1.9, notes: ['13% of revenue', '+1pp Y/Y'] },
            { id: 'intellectual_property', label: 'Intellectual property income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { label: 'Income-offset normalization adjustment', value: -0.4, notes: ['Reverses the positive display magnitude and applies its $0.2B expense-reducing effect, yielding $8.8B net operating expenses.'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the Source infographic.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.4, notes: ['56% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.4, notes: ['(2%) margin', '(18pp) Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -0.4, notes: ['No separate net income or net loss line is shown in the Source infographic.'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度', periodNote: '截至 2024 年 9 月', revenue: { notes: ['同比 +1%'], items: [
            { id: 'software', label: '软件', notes: ['同比 +10%', '毛利率 83%'] }, { id: 'consulting', label: '咨询', notes: ['同比 (1%)', '毛利率 28%'] },
            { id: 'infrastructure', label: '基础设施', notes: ['同比 (7%)', '毛利率 54%'] }, { id: 'financing', label: '融资', notes: ['同比 (3%)', '毛利率 50%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 (60%)'] },
          ] },
          costs: { costOfRevenue: { label: '收入成本' }, operatingExpenses: { items: [
            { id: 'sga', label: '销售、一般及行政', notes: ['占收入 33%', '同比 +3 个百分点'] }, { id: 'other_expense', label: '其他', notes: ['占收入 15%', '同比 +16 个百分点'] },
            { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 +1 个百分点'] }, { id: 'intellectual_property', label: '知识产权收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
            { label: '收入抵减标准化调整', notes: ['冲回正数展示金额，并计入其 $0.2B 的费用抵减影响，得到 $8.8B 净运营费用。'] },
          ] }, tax: { label: '税费', notes: ['来源图未单独展示税费项目。'] } },
          profit: { gross: { label: '毛利润', notes: ['利润率 56%', '同比 +2 个百分点'] }, operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 (18 个百分点)'] }, net: { label: '营业亏损', notes: ['来源图未单独展示净利润或净亏损。'] } },
        },
      },
    },
    {
      key: 'ibm-q2-fy23',
      company: 'IBM',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ibm-q2-fy23.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 15.5,
        notes: ['+0% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 6.6, notes: ['+7% Y/Y', '79% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.0, notes: ['+4% Y/Y', '26% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 3.6, notes: ['(15%) Y/Y', '56% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['+27% Y/Y', '49% gross margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.1, notes: ['(720%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.0 },
        operatingExpenses: {
          total: 6.1,
          notes: ['The source displays $0.2B of intellectual-property income and $0.3B of other income alongside SG&A and R&D; the normalization adjustment converts those display magnitudes into their net expense-reducing effect.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 4.9 },
            { id: 'rnd', label: 'R&D', value: 1.7 },
            { id: 'intellectual_property', label: 'Intellectual property income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { id: 'other_income', label: 'Other income', value: 0.3, notes: ['Source-displayed income magnitude; the source literal contains a duplicated currency symbol.'] },
            { label: 'Income-offset normalization adjustment', value: -1.0, notes: ['Reverses the two positive display magnitudes and applies their $0.5B expense-reducing effect, yielding $6.1B net operating expenses.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.4,
        items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.5, notes: ['61% margin', '+8pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.4, notes: ['18% margin', '+11pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['11% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度', periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 +0%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +7%', '毛利率 79%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 +4%', '毛利率 26%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 (15%)', '毛利率 56%'] },
              { id: 'financing', label: '融资', notes: ['同比 +27%', '毛利率 49%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (720%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政' },
              { id: 'rnd', label: '研发' },
              { id: 'intellectual_property', label: '知识产权收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
              { id: 'other_income', label: '其他收入', notes: ['来源图显示的收入金额；来源字面量重复了货币符号。'] },
              { label: '收入抵减标准化调整', notes: ['冲回两个正数展示金额，并计入其合计 $0.5B 的费用抵减影响，得到 $6.1B 净运营费用。'] },
            ] },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 61%', '同比 +8 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 +11 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'ibm-q1-fy24',
      company: 'IBM',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ibm-q1-fy24.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 14.5,
        notes: ['+1% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 5.9, notes: ['+6% Y/Y', '82% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.2, notes: ['+0% Y/Y', '25% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 3.1, notes: ['(1%) Y/Y', '54% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['(2%) Y/Y', '49% gross margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.1, notes: ['(36%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.7 },
        operatingExpenses: {
          total: 6.2,
          notes: ['The source displays $0.3B of other income and $0.2B of intellectual-property income alongside SG&A and R&D; the normalization adjustment converts those displayed magnitudes into their net expense-reducing effect.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 5.0 },
            { id: 'rnd', label: 'R&D', value: 1.8 },
            { id: 'other_income', label: 'Other income', value: 0.3, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { id: 'intellectual_property', label: 'Intellectual property income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { label: 'Income-offset normalization adjustment', value: -1.1, notes: ['Reverses the two positive display magnitudes and applies their $0.5B expense-reducing effect, including the source rounding residual, yielding $6.2B net operating expenses.'] },
          ],
        },
      },
      otherIncome: { total: 0.5, items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.5 }] },
      otherExpenses: {
        total: 0.4,
        items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.7, notes: ['54% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.5, notes: ['10% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['11% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +6%', '毛利率 82%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 +0%', '毛利率 25%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 (1%)', '毛利率 54%'] },
              { id: 'financing', label: '融资', notes: ['同比 (2%)', '毛利率 49%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (36%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'rnd', label: '研发' },
                { id: 'other_income', label: '其他收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
                { id: 'intellectual_property', label: '知识产权收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
                { label: '收入抵减标准化调整', notes: ['冲回两个正数展示金额，并计入其合计 $0.5B 的费用抵减影响及来源四舍五入差额，得到 $6.2B 净运营费用。'] },
              ],
            },
          },
          otherIncome: { items: [{ id: 'tax_benefit', label: '税收优惠' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 10%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'ibm-q2-fy25',
      company: 'IBM',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/ibm-q2-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 17.0,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 7.4, notes: ['+10% Y/Y', '84% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.3, notes: ['+3% Y/Y', '28% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 4.1, notes: ['+14% Y/Y', '62% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['(2%) Y/Y', '46% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.9 },
        operatingExpenses: {
          total: 6.9,
          notes: ['The source displays $0.2B of intellectual-property income and $39M of other income alongside SG&A and R&D; the normalization adjustment converts those displayed magnitudes into their net expense-reducing effect.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 5.0, notes: ['30% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 2.1, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'intellectual_property', label: 'Intellectual property income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { id: 'other_income', label: 'Other income', value: 0.039, valueText: '$39M', notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { label: 'Income-offset normalization adjustment', value: -0.478, notes: ['Reverses the two positive display magnitudes and applies their combined $0.239B expense-reducing effect, yielding $6.861B, displayed as $6.9B in the source.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.5,
        items: [{ id: 'interest', label: 'Interest', value: 0.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.0, notes: ['59% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.1, notes: ['18% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['13% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度', periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +10%', '毛利率 84%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 +3%', '毛利率 28%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 +14%', '毛利率 62%'] },
              { id: 'financing', label: '融资', notes: ['同比 (2%)', '毛利率 46%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 30%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'intellectual_property', label: '知识产权收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
                { id: 'other_income', label: '其他收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
                { label: '收入抵减标准化调整', notes: ['冲回两个正数展示金额，并计入其合计 $0.239B 的费用抵减影响，得到 $6.861B；来源图显示为 $6.9B。'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 59%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'ibm-q3-fy25',
      company: 'IBM',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ibm-q3-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 16.3,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 7.2, notes: ['+10% Y/Y', '83% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.3, notes: ['+3% Y/Y', '29% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 3.6, notes: ['+17% Y/Y', '57% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['+10% Y/Y', '46% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.0 },
        operatingExpenses: {
          total: 6.4,
          notes: ['The source displays $0.2B of intellectual-property income and $0.2B of other income alongside SG&A and R&D; the normalization adjustment converts those displayed magnitudes into their net expense-reducing effect.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 4.7, notes: ['29% of revenue', '(4pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 2.1, notes: ['13% of revenue', '+0pp Y/Y'] },
            { id: 'intellectual_property', label: 'Intellectual property income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { id: 'other_income', label: 'Other income', value: 0.2, notes: ['Source-displayed income magnitude; see the normalization adjustment below.'] },
            { label: 'Income-offset normalization adjustment', value: -0.8, notes: ['Reverses the two positive display magnitudes and applies their $0.4B expense-reducing effect, yielding $6.4B net operating expenses.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.5,
        items: [{ id: 'interest', label: 'Interest', value: 0.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.4, notes: ['57% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.9, notes: ['18% margin', '+20pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['11% margin', '+13pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +10%', '毛利率 83%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 +3%', '毛利率 29%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 +17%', '毛利率 57%'] },
              { id: 'financing', label: '融资', notes: ['同比 +10%', '毛利率 46%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图并列显示 $0.2B 的知识产权收入、$0.2B 的其他收入以及销售、一般及行政和研发费用；标准化调整将两个收入展示金额转换为其费用抵减净影响。'],
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 29%', '同比 (4 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 +0 个百分点'] },
                { id: 'intellectual_property', label: '知识产权收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
                { id: 'other_income', label: '其他收入', notes: ['来源图显示的收入金额；净额处理见下方标准化调整。'] },
                { label: '收入抵减标准化调整', notes: ['冲回两个正数展示金额，并计入其合计 $0.4B 的费用抵减影响，得到 $6.4B 净运营费用。'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 57%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 +20 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +13 个百分点'] },
          },
        },
      },
    },
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
