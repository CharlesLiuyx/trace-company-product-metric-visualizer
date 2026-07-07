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
      key: 'qualcomm-q2-fy26',
      company: 'Qualcomm',
      period: 'Q2 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/qualcomm-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 10.6,
        notes: ['(3%) Y/Y'],
        items: [
          {
            id: 'qct',
            label: 'QCT',
            value: 9.1,
            notes: ['(4%) Y/Y', '27% EBIT margin', 'CDMA Technologies'],
            children: [
              { id: 'handsets', label: 'Handsets', value: 6.0, notes: ['(13%) Y/Y'] },
              { id: 'automotive', label: 'Automotive', value: 1.3, notes: ['+38% Y/Y'] },
              { id: 'iot', label: 'IoT', value: 1.7, notes: ['+9% Y/Y'] },
            ],
          },
          { id: 'qtl', label: 'QTL', value: 1.4, notes: ['+5% Y/Y', '72% margin', 'Technology Licensing'] },
          { id: 'other_revenue', label: 'Other', value: 0.1 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.9 },
        operatingExpenses: {
          total: 3.4,
          notes: ['Operating expense detail sums to $3.429B before rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 2.5, notes: ['23% of revenue', '+3pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.9, notes: ['8% of revenue', '+2pp Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 0.029, notes: ['$29M', '0% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0, notes: ['Source chart shows a $5.1B tax benefit instead of tax expense.'] },
      },
      otherIncome: {
        total: 5.1,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 5.1 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other_non_operating', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.7, notes: ['54% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['22% margin', '(7pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 7.4, notes: ['70% margin', '+44pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 (3%)'],
            items: [
              {
                id: 'qct', label: 'QCT', notes: ['同比 (4%)', 'EBIT 利润率 27%', 'CDMA 技术'],
                children: [
                  { id: 'handsets', label: '手机', notes: ['同比 (13%)'] },
                  { id: 'automotive', label: '汽车', notes: ['同比 +38%'] },
                  { id: 'iot', label: '物联网', notes: ['同比 +9%'] },
                ],
              },
              { id: 'qtl', label: 'QTL', notes: ['同比 +5%', '利润率 72%', '技术授权'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 23%', '同比 +3 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 8%', '同比 +2 个百分点'] },
                { id: 'other_opex', label: '其他', notes: ['$29M', '占收入 0%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图显示 $5.1B 税收收益，而非税费。'] },
          },
          otherIncome: {
            items: [
              { id: 'tax_benefit', label: '税收收益' },
            ],
          },
          otherExpenses: {
            items: [
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 22%', '同比 (7 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 70%', '同比 +44 个百分点'] },
          },
        },
      },
    },
    {
      key: 'qualcomm-q1-fy26',
      company: 'Qualcomm',
      period: 'Q1 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/qualcomm-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.3,
        notes: ['+5% Y/Y'],
        items: [
          {
            id: 'qct',
            label: 'QCT',
            value: 10.6,
            notes: ['+5% Y/Y', '31% EBIT margin', 'CDMA Technologies'],
            children: [
              { id: 'handsets', label: 'Handsets', value: 7.8, notes: ['+3% Y/Y'] },
              { id: 'automotive', label: 'Automotive', value: 1.1, notes: ['+15% Y/Y'] },
              { id: 'iot', label: 'IoT', value: 1.7, notes: ['+9% Y/Y'] },
            ],
          },
          { id: 'qtl', label: 'QTL', value: 1.6, notes: ['+4% Y/Y', '74% EBIT margin', 'Technology Licensing'] },
          { id: 'other_revenue', label: 'Other', value: 0, notes: ['$0.0B in source chart'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.6 },
        operatingExpenses: {
          total: 3.3,
          notes: ['R&D and SG&A detail sums to $3.4B before rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 2.5, notes: ['20% of revenue', '+1pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.9, notes: ['7% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.7, notes: ['55% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.4, notes: ['27% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.0, notes: ['25% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              {
                id: 'qct', label: 'QCT', notes: ['同比 +5%', 'EBIT 利润率 31%', 'CDMA 技术'],
                children: [
                  { id: 'handsets', label: '手机', notes: ['同比 +3%'] },
                  { id: 'automotive', label: '汽车', notes: ['同比 +15%'] },
                  { id: 'iot', label: '物联网', notes: ['同比 +9%'] },
                ],
              },
              { id: 'qtl', label: 'QTL', notes: ['同比 +4%', 'EBIT 利润率 74%', '技术授权'] },
              { id: 'other_revenue', label: '其他', notes: ['来源图为 $0.0B'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 20%', '同比 +1 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他' },
            ],
          },
          otherExpenses: {
            items: [],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 55%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 27%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 25%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'qualcomm-q4-fy25',
      company: 'Qualcomm',
      period: 'Q4 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/qualcomm-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.3,
        notes: ['+10% Y/Y'],
        items: [
          {
            id: 'qct',
            label: 'QCT',
            value: 9.8,
            notes: ['+13% Y/Y', '30% EBIT margin', 'CDMA Technologies'],
            children: [
              { id: 'handsets', label: 'Handsets', value: 7.0, notes: ['+14% Y/Y'] },
              { id: 'automotive', label: 'Automotive', value: 1.1, notes: ['+17% Y/Y'] },
              { id: 'iot', label: 'IoT', value: 1.8, notes: ['+7% Y/Y'] },
            ],
          },
          { id: 'qtl', label: 'QTL', value: 1.4, notes: ['(7%) Y/Y', '72% EBIT margin', 'Technology Licensing'] },
          { id: 'other_revenue', label: 'Other', value: 0.04, notes: ['$40M in source chart'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.0 },
        operatingExpenses: {
          total: 3.3,
          notes: ['R&D, SG&A, and Other line items sum to $3.339B before rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 2.4, notes: ['21% of revenue', '(1pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.9, notes: ['8% of revenue', '+1pp Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 0.039, notes: ['$39M in source chart'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 0,
          notes: ['Source chart combines non-operating items and tax inside the $6.0B Other deduction.'],
        },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 6.0,
        items: [
          {
            id: 'other_non_operating',
            label: 'Other',
            value: 6.0,
            notes: ['Non-operating and tax deduction that turns $2.9B operating profit into a $3.1B net loss.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.2, notes: ['55% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.9, notes: ['27% margin', '+3pp Y/Y'] },
        net: {
          id: 'net_loss',
          label: 'Net loss',
          value: -3.1,
          notes: ['Net loss after the $6.0B Other deduction.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              {
                id: 'qct', label: 'QCT', notes: ['同比 +13%', 'EBIT 利润率 30%', 'CDMA 技术'],
                children: [
                  { id: 'handsets', label: '手机', notes: ['同比 +14%'] },
                  { id: 'automotive', label: '汽车', notes: ['同比 +17%'] },
                  { id: 'iot', label: '物联网', notes: ['同比 +7%'] },
                ],
              },
              { id: 'qtl', label: 'QTL', notes: ['同比 (7%)', 'EBIT 利润率 72%', '技术授权'] },
              { id: 'other_revenue', label: '其他', notes: ['来源图为 $40M'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['研发、销售及行政、其他项目合计为 $3.339B，来源图显示为四舍五入后的金额。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 21%', '同比 (1 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 8%', '同比 +1 个百分点'] },
                { id: 'other_opex', label: '其他', notes: ['来源图为 $39M'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图将非经营性项目和税费合并在 $6.0B 其他扣减中。'] },
          },
          otherIncome: {
            items: [],
          },
          otherExpenses: {
            items: [
              {
                id: 'other_non_operating',
                label: '其他',
                notes: ['非经营性与税费扣减，将 $2.9B 营业利润转为 $3.1B 净亏损。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 55%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 27%', '同比 +3 个百分点'] },
            net: { label: '净亏损', notes: ['扣除 $6.0B 其他项目后的净亏损。'] },
          },
        },
      },
    }
  );
})(window);
