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
      key: 'boeing-q2-fy26',
      company: 'Boeing',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/boeing-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 24.6,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'commercial_airplanes', label: 'Commercial Airplanes', value: 11.8, notes: ['+8% Y/Y', '(3%) segment margin'] },
          { id: 'defense', label: 'Defense, Space & Security', value: 7.5, notes: ['+13% Y/Y', '(0%) segment margin'] },
          { id: 'global_services', label: 'Global Services', value: 5.3, notes: ['+1% Y/Y', '18% segment margin'] },
          { id: 'other_seg', label: 'Other', value: 0.018, notes: ['Shown as "$18M" in the source.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 22.1 },
        operatingExpenses: {
          total: 2.3,
          items: [
            { id: 'ga', label: 'G&A', value: 1.4, notes: ['General and administrative.'] },
            { id: 'rnd', label: 'R&D', value: 0.9, notes: ['Research and development.'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['Income tax is drawn inside the combined non-operating "Other ($0.6B)" outflow in the source chart.'],
        },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.6,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.6,
            notes: ['Combined non-operating items plus income tax; the terminal "Other ($0.6B)" deduction that turns $0.2B operating profit into a $0.4B net loss.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.4, notes: ['10% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.2, notes: ['1% margin', '+1pp Y/Y'] },
        net: {
          id: 'net_loss',
          label: 'Net loss',
          value: -0.4,
          notes: ['Net loss of $0.4B after the terminal non-operating and tax Other deduction.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'commercial_airplanes', label: '商用飞机', notes: ['同比 +8%', '分部利润率 (3%)'] },
              { id: 'defense', label: '国防、太空与安全', notes: ['同比 +13%', '分部利润率 (0%)'] },
              { id: 'global_services', label: '全球服务', notes: ['同比 +1%', '分部利润率 18%'] },
              { id: 'other_seg', label: '其他', notes: ['来源图显示为 "$18M"。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用', notes: ['一般及行政费用。'] },
                { id: 'rnd', label: '研发', notes: ['研究与开发。'] },
              ],
            },
            tax: { label: '税费', notes: ['所得税在来源图中并入非经营性“其他（$0.6B）”流出。'] },
          },
          otherExpenses: {
            items: [
              {
                id: 'other',
                label: '其他',
                notes: ['非经营性项目加所得税的合计；即将 $0.2B 营业利润转为 $0.4B 净亏损的终端“其他（$0.6B）”扣减。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 10%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 +1 个百分点'] },
            net: { label: '净亏损', notes: ['扣除终端非经营性与税费“其他”后净亏损 $0.4B。'] },
          },
        },
      },
    },
    {
      key: 'boeing-q1-fy26',
      company: 'Boeing',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/boeing-q1-fy26.png',
      roundingTolerance: 0.06,
      revenue: {
        total: 22.2,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'commercial_airplanes', label: 'Commercial Airplanes', value: 9.2, notes: ['+13% Y/Y', '(6%) segment margin'] },
          { id: 'defense', label: 'Defense, Space & Security', value: 7.6, notes: ['+21% Y/Y', '3% segment margin'] },
          { id: 'global_services', label: 'Global Services', value: 5.4, notes: ['+6% Y/Y', '18% segment margin'] },
          { id: 'other_seg', label: 'Other', value: 0.045, notes: ['Boeing Capital and unallocated items; shown as "$45M" in the source.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 19.7 },
        operatingExpenses: {
          total: 2.1,
          items: [
            { id: 'ga', label: 'G&A', value: 1.2, notes: ['General and administrative.'] },
            { id: 'rnd', label: 'R&D', value: 0.9, notes: ['Research and development.'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['Income tax is drawn inside the combined non-operating "Other ($0.4B)" outflow in the source chart.'],
        },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.407,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.4,
            notes: ['Combined non-operating items plus income tax; the terminal "Other ($0.4B)" deduction that turns $0.4B operating profit into a $7M net loss.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.5, notes: ['11% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.4, notes: ['2% margin', '(0pp) Y/Y'] },
        net: {
          id: 'net_loss',
          label: 'Net loss',
          value: -0.007,
          notes: ['Net loss of $7M; operating profit of $0.4B offset by the non-operating and tax "Other" deduction.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              { id: 'commercial_airplanes', label: '商用飞机', notes: ['同比 +13%', '分部利润率 (6%)'] },
              { id: 'defense', label: '国防、太空与安全', notes: ['同比 +21%', '分部利润率 3%'] },
              { id: 'global_services', label: '全球服务', notes: ['同比 +6%', '分部利润率 18%'] },
              { id: 'other_seg', label: '其他', notes: ['波音金融及未分配项；来源图显示为 "$45M"。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用', notes: ['一般及行政费用。'] },
                { id: 'rnd', label: '研发', notes: ['研究与开发。'] },
              ],
            },
            tax: { label: '税费', notes: ['所得税在来源图中并入非经营性"其他（$0.4B）"流出。'] },
          },
          otherExpenses: {
            items: [
              {
                id: 'other',
                label: '其他',
                notes: ['非经营性项目加所得税的合计；即将 $0.4B 营业利润转为 $7M 净亏损的终端"其他（$0.4B）"扣减。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 11%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 (0 个百分点)'] },
            net: { label: '净亏损', notes: ['净亏损 $7M；$0.4B 营业利润被非经营性与税费"其他"扣减抵销。'] },
          },
        },
      },
    },
    {
      key: 'boeing-q4-fy25',
      company: 'Boeing',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/boeing-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 23.9,
        notes: ['+57% Y/Y'],
        items: [
          { id: 'commercial_airplanes', label: 'Commercial Airplanes', value: 11.4, notes: ['+139% Y/Y', '(6%) segment margin'] },
          { id: 'defense', label: 'Defense, Space & Security', value: 7.4, notes: ['+37% Y/Y', '(7%) segment margin'] },
          { id: 'global_services', label: 'Global Services', value: 5.2, notes: ['+2% Y/Y', '202% segment margin'] },
          {
            id: 'unallocated',
            label: 'Unallocated',
            value: -0.1,
            notes: ['A $0.1B unallocated deduction shown between the segment aggregation and reported revenue.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 22.1 },
        operatingExpenses: {
          total: 2.7,
          items: [
            { id: 'ga', label: 'G&A', value: 1.7, notes: ['General and administrative.'] },
            { id: 'rnd', label: 'R&D', value: 1.0, notes: ['Research and development.'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['The source does not display a separate tax flow.'] },
      },
      operatingOtherIncome: {
        total: 9.6,
        items: [{ id: 'gains_disposition', label: 'Gains on disposition', value: 9.6 }],
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
      },
      otherExpenses: {
        total: 0.7,
        items: [{ id: 'interest', label: 'Interest', value: 0.7 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.8, notes: ['8% margin', '+18pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 8.7,
          notes: ['Derived as gross profit plus gains on disposition less G&A and R&D; the source has no separately labelled operating-profit node.'],
        },
        net: { id: 'net_income', label: 'Net income', value: 8.3, notes: ['35% margin', '+62pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +57%'],
            items: [
              { id: 'commercial_airplanes', label: '商用飞机', notes: ['同比 +139%', '分部利润率 (6%)'] },
              { id: 'defense', label: '国防、太空与安全', notes: ['同比 +37%', '分部利润率 (7%)'] },
              { id: 'global_services', label: '全球服务', notes: ['同比 +2%', '分部利润率 202%'] },
              { id: 'unallocated', label: '未分配项', notes: ['在分部汇总与报告收入之间显示的 $0.1B 未分配扣减。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用', notes: ['一般及行政费用。'] },
                { id: 'rnd', label: '研发', notes: ['研究与开发。'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未展示单独的税费流。'] },
          },
          operatingOtherIncome: { items: [{ id: 'gains_disposition', label: '处置收益' }] },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 8%', '同比 +18 个百分点'] },
            operating: { label: '营业利润', notes: ['按毛利润加处置收益、减管理费用与研发推导；来源图未单独标注营业利润节点。'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 +62 个百分点'] },
          },
        },
      },
    }
  );
})(window);
