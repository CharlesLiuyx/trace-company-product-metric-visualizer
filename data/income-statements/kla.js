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
      key: 'kla-q2-fy26',
      company: 'KLA',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/kla-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 3.3,
        notes: ['+7% Y/Y'],
        items: [
          { id: 'wafer_inspection', label: 'Wafer Inspection', value: 1.6, notes: ['+1% Y/Y'] },
          { id: 'patterning', label: 'Patterning', value: 0.7, notes: ['+31% Y/Y'] },
          { id: 'specialty_semi_process', label: 'Specialty Semi Process', value: 0.1, notes: ['(15%) Y/Y'] },
          { id: 'pcb_component_inspection', label: 'PCB and Component Inspection', value: 0.1, notes: ['(14%) Y/Y'] },
          { id: 'services', label: 'Services', value: 0.8, notes: ['+18% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.04, notes: ['(50%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.3 },
        operatingExpenses: {
          total: 0.7,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 0.4, notes: ['12% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.3, notes: ['8% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.032,
        items: [{ id: 'other_ded', label: 'Other', value: 0.032 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.0, notes: ['61% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.4, notes: ['41% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.1, notes: ['35% margin', '+8pp Y/Y'] },
      },
      sources: [
        {
          name: 'KLA Q2 FY26 reference infographic',
          url: 'https://ir.kla.com/financial-information/quarterly-results',
          note: 'The SSOT preserves the values displayed in the registered Q2 FY26 Sankey adapter.',
        },
      ],
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              { id: 'wafer_inspection', label: '晶圆检测', notes: ['同比 +1%'] },
              { id: 'patterning', label: '图形化', notes: ['同比 +31%'] },
              { id: 'specialty_semi_process', label: '特种半导体制程', notes: ['同比 (15%)'] },
              { id: 'pcb_component_inspection', label: 'PCB 与元件检测', notes: ['同比 (14%)'] },
              { id: 'services', label: '服务', notes: ['同比 +18%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (50%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研究与开发', notes: ['占收入 12%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及管理', notes: ['占收入 8%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_ded', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 61%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 41%', '同比 +9 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
    key: 'kla-q3-fy26',
    company: 'KLA',
    period: 'Q3 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/kla-q3-fy26.png',
    roundingTolerance: 0.051,
    revenue: {
      total: 3.415078,
      notes: ['+11% Y/Y'],
      items: [
        { id: 'wafer_inspection', label: 'Wafer Inspection', value: 1.739671, notes: ['+16% Y/Y'] },
        { id: 'patterning', label: 'Patterning', value: 0.615076, notes: ['(3%) Y/Y'] },
        {
          id: 'specialty_semi_process',
          label: 'Specialty Semi Process',
          value: 0.144199,
          notes: ['+4% Y/Y'],
        },
        {
          id: 'pcb_component_inspection',
          label: 'PCB and Component Inspection',
          value: 0.095148,
          notes: ['(9%) Y/Y'],
        },
        { id: 'services', label: 'Services', value: 0.774791, notes: ['+16% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 0.046193, notes: ['+143% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.327672 },
      operatingExpenses: {
        total: 0.680097,
        items: [
          {
            id: 'rnd',
            label: 'Research & Development',
            value: 0.388763,
            notes: ['11% of revenue', '+0pp Y/Y'],
          },
          {
            id: 'sga',
            label: 'Sales, General & Admin',
            value: 0.291134,
            notes: ['9% of revenue', '+0pp Y/Y'],
          },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.215771 },
    },
    otherIncome: {
      total: 0.009252,
      items: [{ id: 'other_income', label: 'Other', value: 0.009252 }],
    },
    otherExpenses: {
      total: 0,
      items: [],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit',
        value: 2.087406,
        notes: ['61% margin', '(0pp) Y/Y'],
      },
      operating: {
        id: 'operating_profit',
        label: 'Operating profit',
        value: 1.407309,
        notes: ['41% margin', '(1pp) Y/Y'],
      },
      net: {
        id: 'net_profit',
        label: 'Net profit',
        value: 1.20099,
        notes: ['35% margin', '(0pp) Y/Y'],
      },
    },
    sources: [
      {
        name: 'KLA fiscal 2026 third-quarter Form 10-Q',
        url: 'https://ir.kla.com/sec-filings/all-sec-filings/content/0000319201-26-000016/klac-20260331.htm',
        note:
          'Exact GAAP values and product-category revenues are authored from KLA filings; display text follows the rounded reference infographic.',
      },
      {
        name: 'KLA fiscal 2026 third-quarter earnings release',
        url: 'https://ir.kla.com/news-events/press-releases/detail/514/kla-corporation-reports-fiscal-2026-third-quarter-results',
      },
    ],
    i18n: {
      zh: {
        period: '2026 财年第三季度',
        periodNote: '截至 2026 年 3 月',
        revenue: {
          notes: ['同比 +11%'],
          items: [
            { id: 'wafer_inspection', label: '晶圆检测', notes: ['同比 +16%'] },
            { id: 'patterning', label: '图形化', notes: ['同比 (3%)'] },
            { id: 'specialty_semi_process', label: '专用半导体制程', notes: ['同比 +4%'] },
            { id: 'pcb_component_inspection', label: 'PCB 与元器件检测', notes: ['同比 (9%)'] },
            { id: 'services', label: '服务', notes: ['同比 +16%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +143%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 +0 个百分点'] },
              { id: 'sga', label: '销售、一般及管理', notes: ['占收入 9%', '同比 +0 个百分点'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 61%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 41%', '同比 (1 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 35%', '同比 (0 个百分点)'] },
        },
      },
    },
    },
    {
      key: 'kla-q4-fy26',
      company: 'KLA',
      period: 'Q4 FY26',
      periodNote: 'Ending June 2026',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/kla-q4-fy26.png',
      roundingTolerance: 0.051,
      revenue: {
        total: 3.657556,
        notes: ['+15% Y/Y'],
        items: [
          { id: 'wafer_inspection', label: 'Wafer Inspection', value: 1.781116, notes: ['+1% Y/Y'] },
          { id: 'patterning', label: 'Patterning', value: 0.728099, notes: ['+61% Y/Y'] },
          {
            id: 'specialty_semi_process',
            label: 'Specialty Semi Process',
            value: 0.136513,
            notes: ['+11% Y/Y'],
          },
          {
            id: 'pcb_component_inspection',
            label: 'PCB and Component Inspection',
            value: 0.167526,
            notes: ['+96% Y/Y'],
          },
          { id: 'services', label: 'Services', value: 0.820405, notes: ['+17% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.023897, notes: ['(39%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.413108 },
        operatingExpenses: {
          total: 0.6905,
          items: [
            {
              id: 'rnd',
              label: 'Research & Development',
              value: 0.399023,
              notes: ['11% of revenue', '(0pp) Y/Y'],
            },
            {
              id: 'sga',
              label: 'Sales, General & Admin',
              value: 0.291477,
              notes: ['8% of revenue', '(0pp) Y/Y'],
            },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.186326 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.004563,
        items: [{ id: 'other_expense', label: 'Other', value: 0.004563 }],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 2.244448,
          notes: ['61% margin', '(1pp) Y/Y'],
        },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 1.553948,
          notes: ['42% margin', '(0pp) Y/Y'],
        },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 1.363059,
          notes: ['37% margin', '(1pp) Y/Y'],
        },
      },
      sources: [
        {
          name: 'KLA fiscal 2026 Form 10-K',
          url: 'https://www.sec.gov/Archives/edgar/data/319201/000031920126000027/klac-20260630.htm',
          note:
            'Exact Q4 product-category revenues are the FY26 Form 10-K totals less the nine-month FY26 values in KLA\'s Q3 Form 10-Q. Exact GAAP statement values come from the Q4 earnings release and FY26 Form 10-K; display text follows the rounded reference infographic.',
        },
        {
          name: 'KLA fiscal 2026 fourth-quarter earnings release',
          url: 'https://ir.kla.com/news-events/press-releases/detail/518/kla-corporation-reports-fiscal-2026-fourth-quarter-and-full',
        },
      ],
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              { id: 'wafer_inspection', label: '晶圆检测', notes: ['同比 +1%'] },
              { id: 'patterning', label: '图形化', notes: ['同比 +61%'] },
              { id: 'specialty_semi_process', label: '专用半导体制程', notes: ['同比 +11%'] },
              { id: 'pcb_component_inspection', label: 'PCB 与元器件检测', notes: ['同比 +96%'] },
              { id: 'services', label: '服务', notes: ['同比 +17%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (39%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (0 个百分点)'] },
                { id: 'sga', label: '销售、一般及管理', notes: ['占收入 8%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 61%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 37%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
