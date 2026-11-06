/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
  "key": "lockheed-martin-q3-fy26",
  "company": "Lockheed Martin",
  "period": "Q3 FY26",
  "periodNote": "Ending Sep. 2026",
  "currency": "$",
  "unit": "B",
  "decimals": 3,
  "sourceImage": "input/processed/lockheed-martin-q3-fy26.png",
  "roundingTolerance": 0.15,
  "revenue": {
    "total": 20.7,
    "valueText": "$20.7B",
    "notes": [
      "+11% Y/Y"
    ],
    "items": [
      {
        "id": "aeronautics",
        "label": "Aeronautics",
        "value": 8.2,
        "valueText": "$8.2B",
        "notes": [
          "+13% Y/Y",
          "9% segment margin"
        ]
      },
      {
        "id": "missile_fire_control",
        "label": "Missile and Fire Control",
        "value": 4.5,
        "valueText": "$4.5B",
        "notes": [
          "+24% Y/Y",
          "14% segment margin"
        ]
      },
      {
        "id": "rotary_mission_systems",
        "label": "Rotary & Mission Systems",
        "value": 4.5,
        "valueText": "$4.5B",
        "notes": [
          "+3% Y/Y",
          "12% segment margin"
        ]
      },
      {
        "id": "space",
        "label": "Space",
        "value": 3.5,
        "valueText": "$3.5B",
        "notes": [
          "+4% Y/Y",
          "9% segment margin"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 18.3,
      "valueText": "($18.3B)"
    },
    "operatingExpenses": {
      "total": 0,
      "items": []
    },
    "tax": {
      "id": "tax",
      "label": "Tax",
      "value": 0.3,
      "valueText": "($0.3B)"
    }
  },
  "operatingOtherIncome": {
    "total": 0.007,
    "items": [
      {
        "id": "other_operating",
        "label": "Other",
        "value": 0.007,
        "valueText": "$7M",
        "notes": [
          "Shown as $7M in the source chart."
        ]
      }
    ]
  },
  "operatingOtherExpenses": {
    "total": 0,
    "items": []
  },
  "otherIncome": {
    "total": 0,
    "items": []
  },
  "otherExpenses": {
    "total": 0.3,
    "items": [
      {
        "id": "other_nonoperating",
        "label": "Interest & other",
        "value": 0.3,
        "valueText": "($0.3B)"
      }
    ]
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 2.4,
      "valueText": "$2.4B",
      "notes": [
        "12% margin",
        "(0pp) Y/Y"
      ]
    },
    "operating": {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 2.4,
      "valueText": "$2.4B",
      "notes": [
        "12% margin",
        "(0pp) Y/Y"
      ]
    },
    "net": {
      "id": "net_profit",
      "label": "Net profit",
      "value": 1.8,
      "valueText": "$1.8B",
      "notes": [
        "9% margin",
        "+0pp Y/Y"
      ]
    }
  },
  "i18n": {
    "zh": {
      "period": "2026 财年第三季度",
      "operatingMetrics": [{"id":"aircraft_deliveries","label":"飞机交付","notes":["同比 -8"]},{"id":"backlog","label":"订单储备","notes":["同比 +51%"]}],
      "periodNote": "截至 2026 年 9 月",
      "revenue": {
        "notes": [
          "同比 +11%"
        ],
        "items": [
          {
            "id": "aeronautics",
            "label": "航空",
            "notes": [
              "同比 +13%",
              "分部利润率 9%"
            ]
          },
          {
            "id": "missile_fire_control",
            "label": "导弹与火控",
            "notes": [
              "同比 +24%",
              "分部利润率 14%"
            ]
          },
          {
            "id": "rotary_mission_systems",
            "label": "旋翼与任务系统",
            "notes": [
              "同比 +3%",
              "分部利润率 12%"
            ]
          },
          {
            "id": "space",
            "label": "太空",
            "notes": [
              "同比 +4%",
              "分部利润率 9%"
            ]
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "label": "销售成本"
        },
        "tax": {
          "label": "税费"
        }
      },
      "operatingOtherIncome": {
        "items": [
          {
            "id": "other_operating",
            "label": "其他",
            "notes": [
              "源图中显示为 $7M。"
            ]
          }
        ]
      },
      "otherExpenses": {
        "items": [
          {
            "id": "other_nonoperating",
            "label": "利息及其他"
          }
        ]
      },
      "profit": {
        "gross": {
          "label": "毛利润",
          "notes": [
            "利润率 12%",
            "同比 0 个百分点"
          ]
        },
        "operating": {
          "label": "营业利润",
          "notes": [
            "利润率 12%",
            "同比 0 个百分点"
          ]
        },
        "net": {
          "label": "净利润",
          "notes": [
            "利润率 9%",
            "同比 0 个百分点"
          ]
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "aircraft_deliveries",
      "value": "72",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "72",
      "label": "Aircraft Deliveries",
      "basis": "unspecified",
      "notes": [
        "-8 Y/Y"
      ],
      "quote": "Aircraft Deliveries\n72\n-8 Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          73,
          1194,
          449,
          158
        ]
      }
    },
    {
      "id": "backlog",
      "value": "292",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$292B",
      "label": "Backlog",
      "basis": "unspecified",
      "notes": [
        "+51% Y/Y"
      ],
      "quote": "Backlog\n$292B\n+51% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          531,
          1194,
          241,
          158
        ]
      }
    }
  ]
},
    {
      key: 'lockheed-martin-q2-fy26',
      company: 'Lockheed Martin',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/lockheed-martin-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 20.1,
        valueText: '$20.1B',
        notes: ['+11% Y/Y'],
        items: [
          { id: 'aeronautics', label: 'Aeronautics', value: 8.1, valueText: '$8.1B', notes: ['+9% Y/Y', '9% segment margin'] },
          { id: 'missile_fire_control', label: 'Missile and Fire Control', value: 4.1, valueText: '$4.1B', notes: ['+19% Y/Y', '14% segment margin'] },
          { id: 'rotary_mission_systems', label: 'Rotary & Mission Systems', value: 4.4, valueText: '$4.4B', notes: ['+9% Y/Y', '10% segment margin'] },
          { id: 'space', label: 'Space', value: 3.5, valueText: '$3.5B', notes: ['+6% Y/Y', '11% segment margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 17.6, valueText: '($17.6B)' },
        operatingExpenses: { total: 0, items: [] },
        tax: { id: 'tax', label: 'Tax', value: 0.3, valueText: '($0.3B)' },
      },
      operatingOtherIncome: {
        total: 0.033,
        items: [
          { id: 'other_operating', label: 'Other', value: 0.033, valueText: '$33M', notes: ['Shown as $33M in the source chart.'] },
        ],
      },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.3,
        items: [
          { id: 'other_nonoperating', label: 'Interest & other', value: 0.3, valueText: '($0.3B)' },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.4, valueText: '$2.4B', notes: ['12% margin', '+8pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.5, valueText: '$2.5B', notes: ['12% margin', '+8pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.8, valueText: '$1.8B', notes: ['9% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'aeronautics', label: '航空', notes: ['同比 +9%', '分部利润率 9%'] },
              { id: 'missile_fire_control', label: '导弹与火控', notes: ['同比 +19%', '分部利润率 14%'] },
              { id: 'rotary_mission_systems', label: '旋翼与任务系统', notes: ['同比 +9%', '分部利润率 10%'] },
              { id: 'space', label: '太空', notes: ['同比 +6%', '分部利润率 11%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other_operating', label: '其他', notes: ['源图中显示为 $33M。'] }],
          },
          otherExpenses: {
            items: [{ id: 'other_nonoperating', label: '利息及其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12%', '同比 +8 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +8 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'lockheed-martin-q1-fy26',
      company: 'Lockheed Martin',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/lockheed-martin-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 18.0,
        notes: ['+0% Y/Y'],
        items: [
          { id: 'aeronautics', label: 'Aeronautics', value: 7.0, notes: ['(1%) Y/Y', '9% segment margin'] },
          { id: 'missile_fire_control', label: 'Missile and Fire Control', value: 3.6, notes: ['+8% Y/Y', '14% segment margin'] },
          { id: 'rotary_mission_systems', label: 'Rotary & Mission Systems', value: 4.0, notes: ['(8%) Y/Y', '11% segment margin'] },
          { id: 'space', label: 'Space', value: 3.4, notes: ['+7% Y/Y', '8% segment margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 15.9 },
        operatingExpenses: { total: 0, items: [] },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      operatingOtherIncome: { total: 0, items: [] },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.3,
        items: [
          { id: 'other_nonoperating', label: 'Other', value: 0.3 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.1, notes: ['12% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.1, notes: ['11% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.5, notes: ['8% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比持平'],
            items: [
              { id: 'aeronautics', label: '航空', notes: ['同比 -1%', '分部利润率 9%'] },
              { id: 'missile_fire_control', label: '导弹与火控', notes: ['同比 +8%', '分部利润率 14%'] },
              { id: 'rotary_mission_systems', label: '旋翼与任务系统', notes: ['同比 -8%', '分部利润率 11%'] },
              { id: 'space', label: '太空', notes: ['同比 +7%', '分部利润率 8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_nonoperating', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12%', '同比 -1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 -2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 -1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'lockheed-martin-q4-fy25',
      company: 'Lockheed Martin',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/lockheed-martin-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 20.3,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'aeronautics', label: 'Aeronautics', value: 8.5, notes: ['+6% Y/Y', '9% segment margin'] },
          { id: 'missile_fire_control', label: 'Missile and Fire Control', value: 4.0, notes: ['+18% Y/Y', '13% segment margin'] },
          { id: 'rotary_mission_systems', label: 'Rotary & Mission Systems', value: 4.6, notes: ['+8% Y/Y', '10% segment margin'] },
          { id: 'space', label: 'Space', value: 3.2, notes: ['+8% Y/Y', '9% segment margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 18.0 },
        operatingExpenses: { total: 0, items: [] },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      operatingOtherIncome: {
        total: 0.009,
        items: [
          { id: 'other_operating', label: 'Other', value: 0.009, notes: ['Shown as $9M in the source chart.'] },
        ],
      },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.8,
        items: [
          { id: 'interest', label: 'Interest', value: 0.3 },
          { id: 'other_nonoperating', label: 'Other', value: 0.5 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.3, notes: ['11% margin', '+8pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['11% margin', '+8pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.3, notes: ['7% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'aeronautics', label: '航空', notes: ['同比 +6%', '分部利润率 9%'] },
              { id: 'missile_fire_control', label: '导弹与火控', notes: ['同比 +18%', '分部利润率 13%'] },
              { id: 'rotary_mission_systems', label: '旋翼与任务系统', notes: ['同比 +8%', '分部利润率 10%'] },
              { id: 'space', label: '太空', notes: ['同比 +8%', '分部利润率 9%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other_operating', label: '其他', notes: ['源图中显示为 $9M。'] }],
          },
          otherExpenses: {
            items: [
              { id: 'interest', label: '利息' },
              { id: 'other_nonoperating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 11%', '同比 +8 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 +8 个百分点'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 +4 个百分点'] },
          },
        },
      },
    }
  );
})(window);
