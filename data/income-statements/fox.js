(function(global){const ssot=global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};ssot.records.push(...[
  {
    "key": "fox-q3-fy26",
    "company": "FOX",
    "period": "Q3 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fox-q3-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4,
      "notes": [
        "(9%) Y/Y"
      ],
      "items": [
        {
          "id": "cable_network_programming",
          "label": "Cable Network Programming",
          "value": 1.7,
          "notes": [
            "+6% Y/Y",
            "51% adj. margin",
            "(3pp) Y/Y"
          ]
        },
        {
          "id": "television",
          "label": "Television",
          "value": 2.2,
          "notes": [
            "(19%) Y/Y",
            "9% adj. margin",
            "+6pp Y/Y"
          ]
        },
        {
          "id": "corporate_other",
          "label": "Corporate & Other",
          "value": 0.2,
          "notes": [
            "+162% Y/Y",
            "(80%) adj. margin",
            "+62pp Y/Y"
          ]
        },
        {
          "label": "Eliminations",
          "value": -0.1,
          "notes": [
            "Inter-segment eliminations shown in the source chart as a separate red outflow."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart shows Costs and expenses as one operating layer with no separate gross-profit or cost-of-revenue line."
        ]
      },
      "operatingExpenses": {
        "total": 3.2,
        "notes": [
          "Shown in the source chart as Costs and expenses."
        ],
        "items": [
          {
            "id": "operating",
            "label": "Operating",
            "value": 2.5
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.1
          },
          {
            "id": "other_cost",
            "label": "Other",
            "value": 0
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.5,
      "items": [
        {
          "id": "other_op",
          "label": "Other",
          "value": 0.5,
          "notes": [
            "Non-operating and other items bridging operating profit to net profit."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "revenue",
        "label": "Revenue",
        "value": 4,
        "notes": [
          "Used as the gross layer because the source chart has no separate gross-profit line."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.8,
        "notes": [
          "11% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "2% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 (9%)"
          ],
          "items": [
            {
              "label": "有线网络节目",
              "notes": [
                "同比 +6%",
                "调整后利润率 51%",
                "同比 (3 个百分点)"
              ]
            },
            {
              "label": "电视",
              "notes": [
                "同比 (19%)",
                "调整后利润率 9%",
                "同比 +6 个百分点"
              ]
            },
            {
              "label": "企业及其他",
              "notes": [
                "同比 +162%",
                "调整后利润率 (80%)",
                "同比 +62 个百分点"
              ]
            },
            {
              "label": "抵销",
              "notes": [
                "来源图中作为单独红色流出的分部间抵销。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图将“成本与费用”作为单一经营层展示，没有单独的毛利或收入成本行。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "来源图中显示为“成本与费用”。"
            ],
            "items": [
              {
                "label": "经营"
              },
              {
                "label": "销售、一般及行政"
              },
              {
                "label": "折旧与摊销"
              },
              {
                "label": "其他"
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
              "label": "其他",
              "notes": [
                "将营业利润桥接到净利润的非经营性及其他项目。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "收入",
            "notes": [
              "因来源图没有单独毛利行，此处用作毛利层。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fox-q4-fy26",
    "company": "FOX",
    "period": "Q4 FY26",
    "periodNote": "Ending June 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/fox-q4-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.2,
      "notes": [
        "+28% Y/Y"
      ],
      "items": [
        {
          "id": "cable_network_programming",
          "label": "Cable Network Programming",
          "value": 1.7,
          "notes": [
            "+9% Y/Y",
            "44% adj. margin",
            "(5pp) Y/Y"
          ]
        },
        {
          "id": "television",
          "label": "Television",
          "value": 2.5,
          "notes": [
            "+45% Y/Y",
            "28% adj. margin",
            "+10pp Y/Y"
          ]
        },
        {
          "id": "corporate_other",
          "label": "Corporate & Other",
          "value": 0.2,
          "notes": [
            "+159% Y/Y",
            "(148%) adj. margin",
            "+36pp Y/Y"
          ]
        },
        {
          "label": "Eliminations",
          "value": -0.1,
          "notes": [
            "Inter-segment eliminations shown in the source chart as a separate red outflow."
          ],
          "id": "eliminations"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart shows Costs and expenses as one operating layer with no separate gross-profit or cost-of-revenue line."
        ]
      },
      "operatingExpenses": {
        "total": 3.3,
        "notes": [
          "Shown in the source chart as Costs and expenses."
        ],
        "items": [
          {
            "id": "operating",
            "label": "Operating",
            "value": 2.4
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.6
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.1
          },
          {
            "id": "other_cost",
            "label": "Other",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.048,
      "items": [
        {
          "id": "other_op",
          "label": "Other",
          "value": 0.048,
          "notes": [
            "Net interest expense $60M less non-operating other income $12M = $48M; Source displays ($0.0B). Precision recovered from official Q4 FY26 earnings release."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "revenue",
        "label": "Revenue",
        "value": 4.2,
        "notes": [
          "Used as the gross layer because the source chart has no separate gross-profit line."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.9,
        "notes": [
          "13% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.7,
        "notes": [
          "9% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +28%"
          ],
          "items": [
            {
              "label": "有线网络节目",
              "notes": [
                "同比 +9%",
                "调整后利润率 44%",
                "同比 (5 个百分点)"
              ]
            },
            {
              "label": "电视",
              "notes": [
                "同比 +45%",
                "调整后利润率 28%",
                "同比 +10 个百分点"
              ]
            },
            {
              "label": "企业及其他",
              "notes": [
                "同比 +159%",
                "调整后利润率 (148%)",
                "同比 +36 个百分点"
              ]
            },
            {
              "label": "抵销",
              "notes": [
                "来源图中作为单独红色流出的分部间抵销。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图将“成本与费用”作为单一经营层展示，没有单独的毛利或收入成本行。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "来源图中显示为“成本与费用”。"
            ],
            "items": [
              {
                "label": "经营"
              },
              {
                "label": "销售、一般及行政"
              },
              {
                "label": "折旧与摊销"
              },
              {
                "label": "其他"
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
              "label": "其他",
              "notes": [
                "净利息费用 $60M 减非经营性其他收入 $12M = $48M；原图显示 ($0.0B)，按官方 2026 财年第四季度业绩公告恢复精度。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "收入",
            "notes": [
              "因来源图没有单独毛利行，此处用作毛利层。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  }
]);})(window);
