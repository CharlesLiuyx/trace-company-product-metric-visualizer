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
