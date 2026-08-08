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
      key: 'arm-q1-fy27',
      company: 'Arm Holdings',
      period: 'Q1 FY27',
      periodNote: 'Ending June 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/arm-q1-fy27.png',
      roundingTolerance: 0.65,
      revenue: {
        total: 1289,
        notes: ['+22% Y/Y'],
        items: [
          { id: 'license_other', label: 'License & Other', value: 574, notes: ['+23% Y/Y', 'Support & Maintenance'] },
          { id: 'royalty', label: 'Royalty', value: 715, notes: ['+22% Y/Y', 'Percentage or fixed'] },
        ],
        breakdowns: [
          {
            id: 'customer_type',
            label: 'Revenue by customer type',
            total: 1289,
            items: [
              { id: 'external_customers', label: 'External Customers', value: 901, notes: ['+24% Y/Y'] },
              { id: 'related_parties', label: 'Related parties', value: 388, notes: ['+18% Y/Y', 'Arm China', 'Equity method investments'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 36 },
        operatingExpenses: {
          total: 1162,
          items: [
            { id: 'rnd', label: 'R&D', value: 838, notes: ['65% of revenue', '+3pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 317, notes: ['25% of revenue', '(0pp) Y/Y'] },
            { id: 'other_operating_expense', label: 'Other', value: 7, notes: ['1% of revenue'] },
          ],
        },
        tax: { label: 'Tax expense', value: 0, notes: ['The source presents tax as a benefit flowing into net profit.'] },
      },
      otherIncome: {
        total: 179,
        items: [
          { id: 'tax', label: 'Tax', value: 17, notes: ['Source-presented tax benefit.'] },
          { id: 'other_income', label: 'Other', value: 162 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1253, notes: ['97% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 91, notes: ['7% margin', '(4pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 270, notes: ['21% margin', '+9pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              { id: 'license_other', label: '授权及其他', notes: ['同比 +23%', '支持与维护'] },
              { id: 'royalty', label: '版税', notes: ['同比 +22%', '按比例或固定金额'] },
            ],
            breakdowns: [
              {
                id: 'customer_type',
                label: '按客户类型划分的收入',
                items: [
                  { id: 'external_customers', label: '外部客户', notes: ['同比 +24%'] },
                  { id: 'related_parties', label: '关联方', notes: ['同比 +18%', 'Arm 中国', '权益法投资'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 65%', '同比 +3 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 25%', '同比 (0 个百分点)'] },
                { id: 'other_operating_expense', label: '其他', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '所得税费用', notes: ['来源图将税项作为收益流入净利润。'] },
          },
          otherIncome: {
            items: [
              { id: 'tax', label: '税项', notes: ['来源图所示税收收益。'] },
              { id: 'other_income', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 97%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 (4 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 21%', '同比 +9 个百分点'] },
          },
        },
      },
    },
    {
      key: 'arm-holdings-q2-fy26',
      company: 'Arm Holdings',
      period: 'Q2 FY26',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/arm-holdings-q2-fy26.png',
      roundingTolerance: 0.65,
      revenue: {
        total: 1135,
        notes: ['+34% Y/Y'],
        items: [
          { id: 'license_other', label: 'License & Other', value: 515, notes: ['+56% Y/Y', 'Support & Maintenance'] },
          { id: 'royalty', label: 'Royalty', value: 620, notes: ['+21% Y/Y', 'Percentage or fixed'] },
        ],
        breakdowns: [
          {
            id: 'license_type',
            label: 'Revenue by license type',
            total: 1135,
            items: [
              { id: 'license_other', label: 'License & Other', value: 515 },
              { id: 'royalty', label: 'Royalty', value: 620 },
            ],
          },
          {
            id: 'customer_type',
            label: 'Revenue by customer type',
            total: 1135,
            items: [
              { id: 'external_customers', label: 'External Customers', value: 713, notes: ['+9% Y/Y'] },
              { id: 'related_parties', label: 'Related parties', value: 422, notes: ['+120% Y/Y', 'Arm China', 'Equity method investments'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 29 },
        operatingExpenses: {
          total: 943,
          items: [
            { id: 'rnd', label: 'R&D', value: 691, notes: ['61% of revenue', '+1pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 252, notes: ['22% of revenue', '(6pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 64 },
      },
      otherIncome: {
        total: 139,
        items: [{ id: 'other', label: 'Other', value: 139 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1106, notes: ['97% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 163, notes: ['14% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 238, notes: ['21% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +34%'],
            items: [
              { id: 'license_other', label: '授权及其他', notes: ['同比 +56%', '支持与维护'] },
              { id: 'royalty', label: '版税', notes: ['同比 +21%', '按比例或固定金额'] },
            ],
            breakdowns: [
              {
                id: 'license_type',
                label: '按授权类型划分的收入',
                items: [
                  { id: 'license_other', label: '授权及其他' },
                  { id: 'royalty', label: '版税' },
                ],
              },
              {
                id: 'customer_type',
                label: '按客户类型划分的收入',
                items: [
                  { id: 'external_customers', label: '外部客户', notes: ['同比 +9%'] },
                  { id: 'related_parties', label: '关联方', notes: ['同比 +120%', 'Arm 中国', '权益法投资'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 61%', '同比 +1 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 22%', '同比 (6 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 97%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 21%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
      key: 'arm-holdings-q3-fy26',
      company: 'Arm Holdings',
      period: 'Q3 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/arm-holdings-q3-fy26.png',
      roundingTolerance: 6.5,
      revenue: {
        total: 1242,
        notes: [
          '+26% Y/Y',
          'Source chart also shows revenue by customer type: External Customers $904M and Related parties $338M.',
        ],
        items: [
          { id: 'license_other', label: 'License & Other', value: 505, notes: ['+25% Y/Y', 'Support & Maintenance'] },
          { id: 'royalty', label: 'Royalty', value: 737, notes: ['+27% Y/Y', 'Percentage or fixed'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 30 },
        operatingExpenses: {
          total: 1027,
          notes: ['Source chart shows R&D $737M and SG&A $284M; displayed split sums to $1,021M versus operating expenses of $1,027M.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 737, notes: ['59% of revenue', '+5pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 284, notes: ['23% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5 },
      },
      otherIncome: {
        total: 43,
        items: [{ id: 'other', label: 'Other', value: 43 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1212, notes: ['98% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 185, notes: ['15% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 223, notes: ['18% margin', '(8pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +26%', '来源图还按客户类型显示收入：外部客户 $904M，关联方 $338M。'],
            items: [
              { id: 'license_other', label: '授权及其他', notes: ['同比 +25%', '支持与维护'] },
              { id: 'royalty', label: '版税', notes: ['同比 +27%', '按比例或固定金额'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['来源图显示研发 $737M、销售一般及行政 $284M；拆分合计 $1,021M，低于运营费用总额 $1,027M。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 59%', '同比 +5 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 23%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 98%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 18%', '同比 (8 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'arm-holdings-q4-fy26',
      company: 'Arm Holdings',
      period: 'Q4 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/arm-holdings-q4-fy26.png',
      roundingTolerance: 0.65,
      revenue: {
        total: 1490,
        notes: [
          '+20% Y/Y',
          'Source chart also shows revenue by customer type: External Customers $1,079M and Related parties $411M.',
        ],
        items: [
          { id: 'license_other', label: 'License & Other', value: 819, notes: ['+29% Y/Y', 'Support & Maintenance'] },
          { id: 'royalty', label: 'Royalty', value: 671, notes: ['+11% Y/Y', 'Percentage or fixed'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 32 },
        operatingExpenses: {
          total: 1020,
          items: [
            { id: 'rnd', label: 'R&D', value: 698, notes: ['47% of revenue', '+3pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 322, notes: ['21% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 168 },
      },
      otherIncome: {
        total: 43,
        items: [{ id: 'other', label: 'Other', value: 43 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1458, notes: ['98% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 438, notes: ['29% margin', '(4pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 313, notes: ['21% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +20%', '来源图还按客户类型显示收入：外部客户 $1,079M，关联方 $411M。'],
            items: [
              { id: 'license_other', label: '授权及其他', notes: ['同比 +29%', '支持与维护'] },
              { id: 'royalty', label: '版税', notes: ['同比 +11%', '按比例或固定金额'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 47%', '同比 +3 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 21%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 98%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 29%', '同比 (4 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 21%', '同比 +4 个百分点'] },
          },
        },
      },
    }
  );
})(window);
