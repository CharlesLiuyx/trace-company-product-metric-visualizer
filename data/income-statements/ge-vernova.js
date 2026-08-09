/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'ge-vernova-q4-fy25',
    company: 'GE Vernova',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/ge-vernova-q4-fy25.png',
    roundingTolerance: 1,
    revenue: {
      total: 11.0,
      notes: ['+4% Y/Y'],
      items: [
        { id: 'power', label: 'Power', value: 5.7, notes: ['+6% Y/Y', '13% segment margin', '+1pp Y/Y'] },
        { id: 'wind', label: 'Wind', value: 3.1, notes: ['+1% Y/Y', '(2%) segment margin', '+9pp Y/Y'] },
        { id: 'electrification', label: 'Electrification', value: 3.0, notes: ['+36% Y/Y', '15% segment margin', '+5pp Y/Y'] },
        { label: 'Eliminations', value: -0.9, notes: ['Intersegment eliminations shown as ($0.9B) in the source chart; the Sankey cost node uses its positive absolute magnitude.'] },
      ],
    },
    costs: {
      costOfRevenue: {
        label: 'Cost of equipment and services',
        value: 8.6,
        notes: ['The source separately displays Cost of equipment ($5.4B) and Cost of services ($3.2B).'],
      },
      operatingExpenses: {
        total: 1.7,
        notes: ['The source displays $1.7B of operating expenses while its SG&A and R&D components sum to $1.8B; the rounded source presentation is retained.'],
        items: [
          { id: 'sga', label: 'SG&A', value: 1.4, notes: ['12% of revenue', '+0pp Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 0.4, notes: ['3% of revenue', '+1pp Y/Y'] },
        ],
      },
      tax: {
        label: 'Tax',
        value: 0,
        notes: ['The source chart shows a $2.6B tax benefit rather than tax expense.'],
      },
    },
    otherIncome: {
      total: 3.1,
      items: [
        { id: 'tax_benefit', label: 'Tax benefit', value: 2.6 },
        { id: 'other', label: 'Other', value: 0.5 },
      ],
    },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 2.3, notes: ['21% margin', '+1pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['5% margin', '(0pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 3.7, notes: ['33% margin', '+29pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +4%'],
          items: [
            { id: 'power', label: '电力', notes: ['同比 +6%', '部门利润率 13%', '同比 +1 个百分点'] },
            { id: 'wind', label: '风电', notes: ['同比 +1%', '部门利润率 (2%)', '同比 +9 个百分点'] },
            { id: 'electrification', label: '电气化', notes: ['同比 +36%', '部门利润率 15%', '同比 +5 个百分点'] },
            { label: '抵销', notes: ['来源图表将分部间抵销显示为 ($0.9B)；Sankey 成本节点使用其正绝对值。'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '设备与服务成本', notes: ['来源图分别展示设备成本 ($5.4B) 与服务成本 ($3.2B)。'] },
          operatingExpenses: {
            notes: ['来源图显示运营费用为 $1.7B，而 SG&A 与研发组成项合计为 $1.8B；保留该四舍五入展示差异。'],
            items: [
              { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 12%', '同比 +0 个百分点'] },
              { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 +1 个百分点'] },
            ],
          },
          tax: { label: '税费', notes: ['来源图显示 $2.6B 税收收益，而非税费。'] },
        },
        otherIncome: {
          items: [
            { id: 'tax_benefit', label: '税收收益' },
            { id: 'other', label: '其他' },
          ],
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 21%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 5%', '同比 (0 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 33%', '同比 +29 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'ge-vernova-q1-fy26',
    company: 'GE Vernova',
    period: 'Q1 FY26',
    periodNote: 'Quarter ended Mar. 31, 2026',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/ge-vernova-q1-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 9.3,
      notes: ['+16% Y/Y'],
      items: [
        { id: 'power', label: 'Power', value: 5.0, notes: ['+12% Y/Y', '16% segment margin', '+5pp Y/Y'] },
        { id: 'wind', label: 'Wind', value: 1.4, notes: ['(22%) Y/Y', '(27%) segment margin', '(19pp) Y/Y'] },
        { id: 'electrification', label: 'Electrification', value: 3.0, notes: ['+61% Y/Y', '18% segment margin', '+7pp Y/Y'] },
        { id: 'eliminations', label: 'Eliminations', value: -0.023, notes: ['Displayed as ($23M); the Source paints a 71×1px terminal face that must remain visible at native height.'] },
      ],
    },
    costs: {
      costOfRevenue: {
        label: 'Cost of equipment and services',
        value: 7.5,
        items: [
          { id: 'cost_of_equipment', label: 'Cost of equipment', value: 4.7 },
          { id: 'cost_of_services', label: 'Cost of services', value: 2.8 },
        ],
      },
      operatingExpenses: {
        total: 1.6,
        items: [
          { id: 'sga', label: 'SG&A', value: 1.3, notes: ['14% of revenue', '(1pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 0.3, notes: ['3% of revenue', '+0pp Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0 },
    },
    otherIncome: {
      total: 4.5,
      items: [{ id: 'other', label: 'Other', value: 4.5 }],
    },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 1.8, notes: ['19% margin', '+1pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.2, notes: ['2% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 4.8, notes: ['51% margin', '+48pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日的季度',
        revenue: {
          notes: ['同比 +16%'],
          items: [
            { id: 'power', label: '电力', notes: ['同比 +12%', '部门利润率 16%', '同比 +5 个百分点'] },
            { id: 'wind', label: '风电', notes: ['同比 (22%)', '部门利润率 (27%)', '同比 (19 个百分点)'] },
            { id: 'electrification', label: '电气化', notes: ['同比 +61%', '部门利润率 18%', '同比 +7 个百分点'] },
            { id: 'eliminations', label: '抵销', notes: ['显示为 ($23M)；Source 绘制了 71×1px 的末端短柱，必须按原生高度保留。'] },
          ],
        },
        costs: {
          costOfRevenue: {
            label: '设备与服务成本',
            items: [
              { id: 'cost_of_equipment', label: '设备成本' },
              { id: 'cost_of_services', label: '服务成本' },
            ],
          },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 14%', '同比 (1 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 +0 个百分点'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 19%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 2%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 51%', '同比 +48 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'ge-vernova-q2-fy26',
    company: 'GE Vernova',
    period: 'Q2 FY26',
    periodNote: 'Quarter ended Jun. 30, 2026',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/ge-vernova-q2-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 11.1,
      notes: ['+22% Y/Y'],
      items: [
        { id: 'power', label: 'Power', value: 5.5, notes: ['+14% Y/Y', '19% segment margin', '+2pp Y/Y'] },
        { id: 'wind', label: 'Wind', value: 2.0, notes: ['(10%) Y/Y', '(14%) segment margin', '(6pp) Y/Y'] },
        { id: 'electrification', label: 'Electrification', value: 3.6, notes: ['+68% Y/Y', '18% segment margin', '+4pp Y/Y'] },
        { id: 'eliminations', label: 'Eliminations', value: -0.036, notes: ['Displayed as ($36M); the Source paints a 71×1px terminal face that must remain visible at native height.'] },
      ],
    },
    costs: {
      costOfRevenue: {
        label: 'Cost of equipment and services',
        value: 8.7,
        items: [
          { id: 'cost_of_equipment', label: 'Cost of equipment', value: 5.6 },
          { id: 'cost_of_services', label: 'Cost of services', value: 3.1 },
        ],
      },
      operatingExpenses: {
        total: 1.7,
        items: [
          { id: 'sga', label: 'SG&A', value: 1.4, notes: ['12% of revenue', '(1pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 0.3, notes: ['3% of revenue', '(0pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.3 },
    },
    otherIncome: {
      total: 0.3,
      items: [{ id: 'other', label: 'Other', value: 0.3 }],
    },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 2.4, notes: ['21% margin', '+1pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.7, notes: ['6% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.6, notes: ['6% margin', '+0pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2026 年 6 月 30 日的季度',
        revenue: {
          notes: ['同比 +22%'],
          items: [
            { id: 'power', label: '电力', notes: ['同比 +14%', '部门利润率 19%', '同比 +2 个百分点'] },
            { id: 'wind', label: '风电', notes: ['同比 (10%)', '部门利润率 (14%)', '同比 (6 个百分点)'] },
            { id: 'electrification', label: '电气化', notes: ['同比 +68%', '部门利润率 18%', '同比 +4 个百分点'] },
            { id: 'eliminations', label: '抵销', notes: ['显示为 ($36M)；Source 绘制了 71×1px 的末端短柱，必须按原生高度保留。'] },
          ],
        },
        costs: {
          costOfRevenue: {
            label: '设备与服务成本',
            items: [
              { id: 'cost_of_equipment', label: '设备成本' },
              { id: 'cost_of_services', label: '服务成本' },
            ],
          },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 12%', '同比 (1 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 21%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 6%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 6%', '同比 +0 个百分点'] },
        },
      },
    },
  });
})(window);
