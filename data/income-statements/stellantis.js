(function(g){const t=g.INCOME_STATEMENT_SSOT=g.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};t.records.push({
  "key": "stellantis-q3-fy26",
  "company": "Stellantis",
  "period": "Q3 FY26",
  "currency": "€",
  "unit": "B",
  "decimals": 1,
  "sourceImage": "input/processed/stellantis-q3-fy26.png",
  "roundingTolerance": 0.15,
  "revenue": {
    "total": 37.6,
    "notes": [
      "+1% Y/Y"
    ],
    "items": [
      {
        "id": "north_america",
        "label": "North America",
        "value": 15.6,
        "notes": [
          "(3%) Y/Y"
        ]
      },
      {
        "id": "enlarged_europe",
        "label": "Enlarged Europe",
        "value": 14.1,
        "notes": [
          "+3% Y/Y"
        ]
      },
      {
        "id": "middle_east_africa",
        "label": "Middle East Africa",
        "value": 1.7,
        "notes": [
          "(19%) Y/Y"
        ]
      },
      {
        "id": "south_america",
        "label": "South America",
        "value": 4.1,
        "notes": [
          "+3% Y/Y"
        ]
      },
      {
        "id": "china_india_apac",
        "label": "China India APAC",
        "value": 0.4,
        "notes": [
          "(7%) Y/Y"
        ]
      },
      {
        "id": "other_revenue",
        "label": "Other",
        "value": 1.7,
        "notes": [
          "+79% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 34.2
    },
    "operatingExpenses": {
      "total": 3.8,
      "items": [
        {
          "id": "sga",
          "label": "SG&A",
          "value": 2.3
        },
        {
          "id": "rd",
          "label": "R&D",
          "value": 1.3
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ],
      "notes": [
        "Printed components total €3.7B versus €3.8B total. Filing components €2.303B + €1.326B + €0.066B + €0.057B = €3.752B explain independent rounding."
      ]
    },
    "tax": {
      "value": 0,
      "label": "Tax",
      "notes": [
        "Not shown in Source."
      ]
    }
  },
  "otherIncome": {
    "total": 0,
    "items": []
  },
  "otherExpenses": {
    "total": 0,
    "items": []
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 3.4,
      "notes": [
        "9% margin",
        "+12pp Y/Y"
      ]
    },
    "operating": {
      "id": "operating_loss",
      "label": "Operating Loss",
      "value": -0.3,
      "notes": [
        "(1%) margin",
        "+14pp Y/Y",
        "Printed €3.4B less €3.8B differs by €0.1B from printed loss. Filing gross €3.421B less expenses €3.752B equals loss €0.331B; retain printed amounts."
      ]
    },
    "net": {
      "availability": "not-reported",
      "value": null,
      "label": "Net result not reported",
      "notes": [
        "Source ends at operating loss."
      ]
    }
  },
  "sourceUrls": [
    "https://www.stellantis.com/en/news/press-releases/2026/october/third-quarter-2026-financial-results",
    "https://www.stocktitan.net/sec-filings/STLA/6-k-stellantis-n-v-current-report-foreign-issuer-6ea63a6521c0.html"
  ],
  "i18n": {
    "zh": {
      "revenue": {
        "items": [
          {
            "id": "north_america",
            "label": "北美"
          },
          {
            "id": "enlarged_europe",
            "label": "扩大欧洲"
          },
          {
            "id": "middle_east_africa",
            "label": "中东与非洲"
          },
          {
            "id": "south_america",
            "label": "南美洲"
          },
          {
            "id": "china_india_apac",
            "label": "中国、印度及亚太"
          },
          {
            "id": "other_revenue",
            "label": "其他"
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "label": "销售成本"
        },
        "operatingExpenses": {
          "items": [
            {
              "id": "sga",
              "label": "销售及管理费用"
            },
            {
              "id": "rd",
              "label": "研发费用"
            },
            {
              "id": "other",
              "label": "其他"
            }
          ],
          "notes": [
            "图中分项合计为 €3.7B，总额为 €3.8B。申报分项 €2.303B、€1.326B、€0.066B、€0.057B 合计 €3.752B，差额来自分别舍入。"
          ]
        },
        "tax": {
          "label": "税项",
          "notes": [
            "原图未展示。"
          ]
        }
      },
      "profit": {
        "gross": {
          "label": "毛利润",
          "notes": [
            "利润率 9%",
            "同比 +12 个百分点"
          ]
        },
        "operating": {
          "label": "经营亏损",
          "notes": [
            "利润率 (1%)",
            "同比 +14 个百分点",
            "图中 €3.4B 减去 €3.8B 与所列经营亏损相差 €0.1B。申报毛利润 €3.421B 减去费用 €3.752B 等于亏损 €0.331B，保留图中舍入值。"
          ]
        },
        "net": {
          "label": "净利润未报告",
          "notes": [
            "原图仅展示到经营亏损。"
          ]
        }
      }
    }
  }
});})(window);
