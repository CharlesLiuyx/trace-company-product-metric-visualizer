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
      key: 'marriott-q1-fy26',
      company: 'Marriott',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/marriott-q1-fy26.png',
      roundingTolerance: 0.05,
      revenue: {
        total: 6.689,
        notes: ['+6% Y/Y', 'Total before $35M contract investment amortization.'],
        items: [
          { id: 'base_management_fees', label: 'Base management fees', value: 0.339, notes: ['+4% Y/Y'] },
          { id: 'franchise_fees', label: 'Franchise fees', value: 0.872, notes: ['+17% Y/Y'] },
          { id: 'incentive_management_fees', label: 'Incentive management fees', value: 0.222, notes: ['+9% Y/Y'] },
          { id: 'owned_leased_and_other_revenue', label: 'Owned, leased, and other revenue', value: 0.412, notes: ['+14% Y/Y'] },
          { id: 'cost_reimbursement', label: 'Cost reimbursement revenue', value: 4.844, notes: ['+4% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'contract_investment_amortization',
          label: 'Contract investment amortization',
          value: 0.035,
          notes: ['Source chart shows this as Amortization ($35M) before the Revenue node.'],
        },
        operatingExpenses: {
          total: 5.590,
          notes: ['Official total operating costs and expenses; rounded source chart displays ($5.6B).'],
          items: [
            { id: 'owned_leased_other_direct_costs', label: 'Owned, leased, and other direct costs', value: 0.377 },
            { id: 'ga', label: 'G&A', value: 0.219 },
            {
              id: 'da',
              label: 'D&A',
              value: 0.054,
              notes: ['Source chart label reads ($0.1M); official statement lists $54M.'],
            },
            { id: 'reimbursed_expenses', label: 'Reimbursed expenses', value: 4.936 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.191 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.208,
        items: [
          {
            id: 'other_nonoperating',
            label: 'Other',
            value: 0.208,
            notes: ['Net interest expense, equity-method income, and other non-operating items.'],
          },
        ],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 6.654,
          notes: ['Bookkeeping subtotal after contract investment amortization; the source chart does not show gross profit.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.064, notes: ['16% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.665, notes: ['10% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +6%', '扣除 $35M 合同投资摊销前的合计。'],
            items: [
              { id: 'base_management_fees', label: '基础管理费', notes: ['同比 +4%'] },
              { id: 'franchise_fees', label: '特许经营费', notes: ['同比 +17%'] },
              { id: 'incentive_management_fees', label: '激励管理费', notes: ['同比 +9%'] },
              { id: 'owned_leased_and_other_revenue', label: '自有、租赁及其他收入', notes: ['同比 +14%'] },
              { id: 'cost_reimbursement', label: '成本报销收入', notes: ['同比 +4%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '合同投资摊销',
              notes: ['来源图在收入节点前将该项目显示为 Amortization ($35M)。'],
            },
            operatingExpenses: {
              notes: ['官方运营成本和费用合计；来源图四舍五入显示为 ($5.6B)。'],
              items: [
                { id: 'owned_leased_other_direct_costs', label: '自有、租赁及其他直接成本' },
                { id: 'ga', label: '管理费用' },
                {
                  id: 'da',
                  label: '折旧与摊销',
                  notes: ['来源图标注为 ($0.1M)；官方报表列示为 $54M。'],
                },
                { id: 'reimbursed_expenses', label: '报销费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              {
                id: 'other_nonoperating',
                label: '其他',
                notes: ['净利息费用、权益法收益及其他非运营项目。'],
              },
            ],
          },
          profit: {
            gross: {
              label: '毛利润',
              notes: ['扣除合同投资摊销后的账面小计；来源图未显示毛利润。'],
            },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
    ,
    {
      key: 'marriott-q4-fy25',
      company: 'Marriott',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/marriott-q4-fy25.png',
      roundingTolerance: 0.05,
      revenue: {
        total: 6.690,
        notes: ['+4% Y/Y'],
        items: [
          { id: 'base_management_fees', label: 'Base management fees', value: 0.343, notes: ['+3% Y/Y'] },
          { id: 'franchise_fees', label: 'Franchise fees', value: 0.843, notes: ['+6% Y/Y'] },
          { id: 'incentive_management_fees', label: 'Incentive management fees', value: 0.239, notes: ['+16% Y/Y'] },
          { id: 'owned_leased_and_other_revenue', label: 'Owned, leased, and other revenue', value: 0.457, notes: ['+9% Y/Y'] },
          { id: 'cost_reimbursement', label: 'Cost reimbursement revenue', value: 4.857, notes: ['+3% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'contract_investment_amortization',
          label: 'Contract investment amortization',
          value: 0.049,
          notes: ['Source chart shows this as Amortization ($49M) before the Revenue node.'],
        },
        operatingExpenses: {
          total: 5.913,
          notes: [
            'Official total operating costs and expenses; the source chart omits the $29M restructuring and merger-related charges and other line item.',
          ],
          items: [
            { id: 'owned_leased_other_direct_costs', label: 'Owned, leased, and other direct costs', value: 0.416 },
            { id: 'ga', label: 'G&A', value: 0.241 },
            { id: 'da', label: 'D&A', value: 0.059 },
            { id: 'reimbursed_expenses', label: 'Reimbursed expenses', value: 5.168 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.137 },
      },
      otherExpenses: {
        total: 0.195,
        items: [
          {
            id: 'other_nonoperating',
            label: 'Other',
            value: 0.195,
            notes: ['Net interest expense, gains and other income, interest income, and equity in earnings.'],
          },
        ],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 6.690,
          notes: ['Bookkeeping subtotal; the source chart does not show gross profit.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.777, notes: ['12% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.445, notes: ['7% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              { id: 'base_management_fees', label: '基础管理费', notes: ['同比 +3%'] },
              { id: 'franchise_fees', label: '特许经营费', notes: ['同比 +6%'] },
              { id: 'incentive_management_fees', label: '激励管理费', notes: ['同比 +16%'] },
              { id: 'owned_leased_and_other_revenue', label: '自有、租赁及其他收入', notes: ['同比 +9%'] },
              { id: 'cost_reimbursement', label: '成本报销收入', notes: ['同比 +3%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '合同投资摊销',
              notes: ['来源图在收入节点前将该项目显示为 Amortization ($49M)。'],
            },
            operatingExpenses: {
              notes: ['官方运营成本和费用合计；来源图未拆分 $29M 重组、并购相关费用及其他项目。'],
              items: [
                { id: 'owned_leased_other_direct_costs', label: '自有、租赁及其他直接成本' },
                { id: 'ga', label: '管理费用' },
                { id: 'da', label: '折旧与摊销' },
                { id: 'reimbursed_expenses', label: '报销费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              {
                id: 'other_nonoperating',
                label: '其他',
                notes: ['净利息费用、其他收益、利息收入及权益法收益。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['账面核对小计；来源图未显示毛利润。'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 (0 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'marriott-q3-fy25',
      company: 'Marriott',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/marriott-q3-fy25.png',
      roundingTolerance: 0.05,
      revenue: {
        total: 6.489,
        notes: ['+4% Y/Y'],
        items: [
          {
            id: 'gross_fee_revenue',
            label: 'Gross fee revenue',
            value: 1.338,
            notes: ['+4% Y/Y'],
            children: [
              { id: 'base_management_fees', label: 'Base management fees', value: 0.314, notes: ['+1% Y/Y'] },
              { id: 'franchise_fees', label: 'Franchise fees', value: 0.876, notes: ['+8% Y/Y'] },
              { id: 'incentive_management_fees', label: 'Incentive management fees', value: 0.148, notes: ['(7%) Y/Y'] },
            ],
          },
          { id: 'owned_leased_and_other_revenue', label: 'Owned, leased, and other revenue', value: 0.420, notes: ['+10% Y/Y'] },
          { id: 'cost_reimbursement', label: 'Cost reimbursement revenue', value: 4.760, notes: ['+3% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'contract_investment_amortization',
          label: 'Contract investment amortization',
          value: 0.029,
          notes: ['Source chart shows this as Amortization ($29M) before the Revenue node.'],
        },
        operatingExpenses: {
          total: 5.309,
          notes: [
            'The source combines $50M depreciation, amortization, and other with a $40M restructuring and merger-related recovery into the displayed D&A ($10M) flow.',
          ],
          items: [
            { id: 'owned_leased_other_direct_costs', label: 'Owned, leased, and other direct costs', value: 0.326 },
            { id: 'ga', label: 'G&A', value: 0.234 },
            {
              id: 'da',
              label: 'D&A, net of restructuring recoveries',
              value: 0.010,
              notes: ['$50M depreciation, amortization, and other less $40M restructuring and merger-related recoveries.'],
            },
            { id: 'reimbursed_expenses', label: 'Reimbursed expenses', value: 4.739 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.266 },
      },
      otherExpenses: {
        total: 0.186,
        items: [
          {
            id: 'other_nonoperating',
            label: 'Other',
            value: 0.186,
            notes: ['Net interest expense, gains and other income, interest income, and equity in earnings.'],
          },
        ],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 6.489,
          notes: ['Bookkeeping subtotal; the source chart does not show gross profit.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.180, notes: ['18% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.728, notes: ['11% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              {
                id: 'gross_fee_revenue',
                label: '总费用收入',
                notes: ['同比 +4%'],
                children: [
                  { id: 'base_management_fees', label: '基础管理费', notes: ['同比 +1%'] },
                  { id: 'franchise_fees', label: '特许经营费', notes: ['同比 +8%'] },
                  { id: 'incentive_management_fees', label: '激励管理费', notes: ['同比 (7%)'] },
                ],
              },
              { id: 'owned_leased_and_other_revenue', label: '自有、租赁及其他收入', notes: ['同比 +10%'] },
              { id: 'cost_reimbursement', label: '成本报销收入', notes: ['同比 +3%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '合同投资摊销',
              notes: ['来源图在收入节点前将该项目显示为 Amortization ($29M)。'],
            },
            operatingExpenses: {
              notes: ['来源图将 $50M 折旧、摊销及其他费用与 $40M 重组及并购相关净冲回合并为 D&A ($10M) 流。'],
              items: [
                { id: 'owned_leased_other_direct_costs', label: '自有、租赁及其他直接成本' },
                { id: 'ga', label: '管理费用' },
                {
                  id: 'da',
                  label: '扣除重组净冲回后的折旧与摊销',
                  notes: ['$50M 折旧、摊销及其他费用减去 $40M 重组及并购相关净冲回。'],
                },
                { id: 'reimbursed_expenses', label: '报销费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              {
                id: 'other_nonoperating',
                label: '其他',
                notes: ['净利息费用、其他收益、利息收入及权益法收益。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['账面核对小计；来源图未显示毛利润。'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +2 个百分点'] },
          },
        },
      },
    }
  );
})(window);

(function(global){ global.INCOME_STATEMENT_SSOT.records.push({
  "key": "marriott-q2-fy26",
  "company": "Marriott",
  "period": "Q2 FY26",
  "periodNote": "Quarter ended Jun. 30, 2026",
  "currency": "$",
  "unit": "B",
  "decimals": 3,
  "sourceImage": "input/processed/marriott-q2-fy26.png",
  "roundingTolerance": 0.001,
  "revenue": {
    "total": 7.071,
    "notes": [
      "+5% Y/Y"
    ],
    "items": [
      {
        "id": "gross_fee_revenue",
        "label": "Gross fee Revenue",
        "value": 1.578,
        "notes": [
          "+13% Y/Y",
          "Source $1.5B corrected to $1.578B by explicit operator instruction; official gross fee revenue $1578M."
        ],
        "children": [
          {
            "id": "base_management_fees",
            "label": "Base management fees",
            "value": 0.343,
            "notes": [
              "+1% Y/Y"
            ]
          },
          {
            "id": "franchise_fees",
            "label": "Franchise fees",
            "value": 1.023,
            "notes": [
              "+19% Y/Y"
            ]
          },
          {
            "id": "incentive_management_fees",
            "label": "Incentive management fees",
            "value": 0.212,
            "notes": [
              "+6% Y/Y"
            ]
          }
        ]
      },
      {
        "id": "contract_investment_amortization",
        "label": "Amortization",
        "value": -0.031,
        "notes": [
          "Contra-revenue deduction from gross fee revenues."
        ]
      },
      {
        "id": "owned_leased_and_other_revenue",
        "label": "Owned, leased and other",
        "value": 0.466,
        "notes": [
          "+6% Y/Y"
        ]
      },
      {
        "id": "cost_reimbursement",
        "label": "Cost reimbursement",
        "value": 5.058,
        "notes": [
          "+3% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "value": 0,
      "notes": [
        "Contract investment amortization is included as contra-revenue; no separate cost of revenue subtotal is reported."
      ]
    },
    "operatingExpenses": {
      "total": 5.842,
      "items": [
        {
          "id": "owned_leased_other_direct_costs",
          "label": "Owned, lease and other direct costs",
          "value": 0.417,
          "notes": []
        },
        {
          "id": "ga",
          "label": "G&A",
          "value": 0.22,
          "notes": []
        },
        {
          "id": "da",
          "label": "D&A & other",
          "value": 0.105,
          "notes": [
            "$115M depreciation, amortization and other less $10M restructuring recoveries = $105M, grouped by Source as D&A & other."
          ]
        },
        {
          "id": "reimbursed_expenses",
          "label": "Reimbursed expenses",
          "value": 5.1,
          "notes": []
        }
      ]
    },
    "tax": {
      "id": "tax",
      "label": "Tax",
      "value": 0.278,
      "notes": []
    }
  },
  "otherExpenses": {
    "total": 0.185,
    "items": [
      {
        "id": "other_nonoperating",
        "label": "Other",
        "value": 0.185,
        "notes": [
          "$221M interest expense less $20M interest income, $11M gains and $5M equity earnings."
        ]
      }
    ]
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Bookkeeping subtotal",
      "value": 7.071,
      "notes": [
        "Bookkeeping subtotal for schema reconciliation; not a Source-painted node or reported gross profit."
      ]
    },
    "operating": {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1.229,
      "notes": [
        "17% margin",
        "(1pp) Y/Y"
      ]
    },
    "net": {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.766,
      "notes": [
        "11% margin",
        "(0pp) Y/Y"
      ]
    }
  },
  "i18n": {
    "zh": {
      "period": "2026 财年第二季度",
      "periodNote": "截至 2026 年 6 月 30 日的季度",
      "revenue": {
        "notes": [
          "同比 +5%"
        ],
        "items": [
          {
            "id": "gross_fee_revenue",
            "label": "总费用收入",
            "notes": [
              "同比 +13%",
              "依据用户明确指令，原图 $1.5B 纠正为 $1.578B；官方总费用收入为 $1578M。"
            ],
            "children": [
              {
                "id": "base_management_fees",
                "label": "基础管理费",
                "notes": [
                  "同比 +1%"
                ]
              },
              {
                "id": "franchise_fees",
                "label": "特许经营费",
                "notes": [
                  "同比 +19%"
                ]
              },
              {
                "id": "incentive_management_fees",
                "label": "激励管理费",
                "notes": [
                  "同比 +6%"
                ]
              }
            ]
          },
          {
            "id": "contract_investment_amortization",
            "label": "摊销",
            "notes": [
              "从总费用收入中扣除的收入抵减项。"
            ]
          },
          {
            "id": "owned_leased_and_other_revenue",
            "label": "自有、租赁及其他收入",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "cost_reimbursement",
            "label": "成本报销收入",
            "notes": [
              "同比 +3%"
            ]
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "notes": [
            "合同投资摊销作为收入抵减列示；未另行披露营业成本小计。"
          ]
        },
        "operatingExpenses": {
          "items": [
            {
              "id": "owned_leased_other_direct_costs",
              "label": "自有、租赁及其他直接成本",
              "notes": []
            },
            {
              "id": "ga",
              "label": "管理费用",
              "notes": []
            },
            {
              "id": "da",
              "label": "折旧摊销及其他",
              "notes": [
                "折旧摊销及其他 $115M 减去重组费用净冲回 $10M，合计 $105M。"
              ]
            },
            {
              "id": "reimbursed_expenses",
              "label": "报销费用",
              "notes": []
            }
          ]
        },
        "tax": {
          "label": "税费"
        }
      },
      "otherExpenses": {
        "items": [
          {
            "id": "other_nonoperating",
            "label": "其他",
            "notes": [
              "利息费用 $221M 减去利息收入 $20M、其他收益 $11M 及权益法收益 $5M。"
            ]
          }
        ]
      },
      "profit": {
        "gross": {
          "label": "账面核对小计",
          "notes": [
            "用于会计核对；原图未绘制此节点，也未披露毛利润。"
          ]
        },
        "operating": {
          "label": "营业利润",
          "notes": [
            "利润率 17%",
            "同比 (1 个百分点)"
          ]
        },
        "net": {
          "label": "净利润",
          "notes": [
            "利润率 11%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "operatingMetrics": [
        {
          "id": "revpar_yoy",
          "label": "可比全系统 RevPAR"
        },
        {
          "id": "properties",
          "label": "物业数"
        },
        {
          "id": "rooms",
          "label": "客房数"
        }
      ]
    }
  },
  "sourceUrls": [
    "https://www.sec.gov/Archives/edgar/data/1048286/000104828626000033/mar-2026q2xex99earningsrel.htm"
  ],
  "operatingMetrics": [
    {
      "id": "revpar_yoy",
      "label": "Comparable Systemwide RevPAR",
      "value": "3",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "3%",
      "quote": "Comparable Systemwide RevPAR +3% Y/Y",
      "basis": "comparable systemwide year-over-year change",
      "anchor": {
        "type": "image-box",
        "box": [
          112,
          1193,
          283,
          100
        ]
      },
      "notes": [
        "Y/Y"
      ]
    },
    {
      "id": "properties",
      "label": "properties",
      "value": "10082",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "10,082",
      "quote": "10,082 properties",
      "basis": "quarter-end property count",
      "anchor": {
        "type": "image-box",
        "box": [
          461,
          1209,
          241,
          29
        ]
      },
      "notes": []
    },
    {
      "id": "rooms",
      "label": "rooms",
      "value": "1800000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "1.8M",
      "quote": "1.8M rooms",
      "basis": "quarter-end rooms, rounded as displayed by Source",
      "anchor": {
        "type": "image-box",
        "box": [
          499,
          1249,
          163,
          28
        ]
      },
      "notes": []
    }
  ]
}); })(window);
