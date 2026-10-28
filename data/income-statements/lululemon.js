/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "lululemon-q2-fy26",
    "company": "lululemon athletica",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.4,
      "notes": [
        "(4%) Y/Y",
        "Women (4%) Y/Y",
        "Men (1%) Y/Y",
        "Other (13%) Y/Y"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 1.6,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 0.4,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 0.4,
          "notes": [
            "+21% Y/Y",
            "Outlets, temporary locations, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1,
            "notes": [
              "42% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.002,
            "notes": [
              "Shown as ($2M) in the source image"
            ]
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
      "total": 0.014,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.014,
          "notes": [
            "Shown as $14M in the source image"
          ]
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.5,
        "notes": [
          "61% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "19% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "14% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 (4%)",
            "女装同比 (4%)",
            "男装同比 (1%)",
            "其他同比 (13%)"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +21%",
                "奥特莱斯、临时店铺、批发客户、授权与供应安排"
              ]
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
                "label": "销售及管理费用",
                "notes": [
                  "占收入 42%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "源图中显示为 ($2M)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "源图中显示为 $14M"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 61%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 (1 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "stores",
            "label": "门店",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "americas",
            "label": "美洲",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "international",
            "label": "国际",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "stores",
        "label": "stores",
        "value": "825",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "825",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "825 stores\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            1832,
            1195,
            230,
            154
          ]
        }
      },
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "-9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "-9%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales -9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2079,
            1195,
            496,
            154
          ]
        }
      },
      {
        "id": "americas",
        "label": "Americas",
        "value": "-12",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "-12%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Americas -12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2079,
            1195,
            496,
            154
          ]
        }
      },
      {
        "id": "international",
        "label": "International",
        "value": "-3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "-3%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "International -3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2079,
            1195,
            496,
            154
          ]
        }
      }
    ]
  },
  {
    "key": "lululemon-q1-fy26",
    "company": "lululemon athletica",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lululemon-q1-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 2.5,
      "notes": [
        "+4% Y/Y",
        "Women +4% Y/Y",
        "Men +7% Y/Y",
        "Other (1%) Y/Y"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 1.2,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1.1,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 0.3,
          "notes": [
            "+9% Y/Y",
            "Outlets, temporary locations, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1.1
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.1,
            "notes": [
              "43% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.002,
            "notes": [
              "Shown as ($2M) in the source image"
            ]
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
      "total": 0.009,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.009,
          "notes": [
            "Shown as $9M in the source image"
          ]
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.3,
        "notes": [
          "54% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "11% margin",
          "(7pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "8% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +4%",
            "女装同比 +4%",
            "男装同比 +7%",
            "其他同比 (1%)"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +9%",
                "奥特莱斯、临时店铺、批发客户、授权与供应安排"
              ]
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
                "label": "销售及管理费用",
                "notes": [
                  "占收入 43%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "源图中显示为 ($2M)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "源图中显示为 $9M"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 54%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 (7 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 (5 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lululemon-fy25",
    "company": "lululemon athletica",
    "period": "FY25",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lululemon-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 11.1,
      "notes": [
        "+5% Y/Y",
        "Women +5% Y/Y",
        "Men +4% Y/Y",
        "Other +8% Y/Y"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 5.1,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 4.9,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 1.1,
          "notes": [
            "+12% Y/Y",
            "Outlets, temporary locations, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 4.8
      },
      "operatingExpenses": {
        "total": 4.1,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 4.1,
            "notes": [
              "37% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.007,
            "notes": [
              "Shown as ($7M) in the source image"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.7
      }
    },
    "otherIncome": {
      "total": 0.028,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.028,
          "notes": [
            "Shown as $28M in the source image"
          ]
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.3,
        "notes": [
          "57% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.2,
        "notes": [
          "20% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.6,
        "notes": [
          "14% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +5%",
            "女装同比 +5%",
            "男装同比 +4%",
            "其他同比 +8%"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +12%",
                "奥特莱斯、临时店铺、批发客户、授权与供应安排"
              ]
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
                "label": "销售及管理费用",
                "notes": [
                  "占收入 37%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "源图中显示为 ($7M)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "源图中显示为 $28M"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 57%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lululemon-fy23",
    "company": "lululemon athletica",
    "period": "FY23",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 9.6,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "americas",
          "label": "Americas",
          "value": 7.6,
          "notes": [
            "+12% Y/Y",
            "38% margin"
          ]
        },
        {
          "id": "china",
          "label": "China",
          "value": 1,
          "notes": [
            "+67% Y/Y",
            "35% margin"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of World",
          "value": 1,
          "notes": [
            "+43% Y/Y",
            "20% margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 4
      },
      "operatingExpenses": {
        "total": 3.5,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3.4,
            "notes": [
              "35% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 0.075,
            "notes": [
              "1% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.005
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.6
      }
    },
    "otherIncome": {
      "total": 0.043,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.043
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.6,
        "notes": [
          "58% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.1,
        "notes": [
          "22% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.6,
        "notes": [
          "16% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "stores",
        "label": "stores",
        "value": "711",
        "literal": "711",
        "unit": "count",
        "notes": [
          "+56 Y/Y"
        ],
        "quote": "711 stores +56 Y/Y",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            642,
            1232,
            496,
            126
          ]
        }
      },
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "913",
        "literal": "+913%",
        "unit": "%",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales +913% Y/Y",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            642,
            1232,
            496,
            126
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年",
        "periodNote": "截至 2024 年 1 月",
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "items": [
            {
              "id": "americas",
              "label": "美洲",
              "notes": [
                "同比 +12%",
                "利润率 38%"
              ]
            },
            {
              "id": "china",
              "label": "中国",
              "notes": [
                "同比 +67%",
                "利润率 35%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +43%",
                "利润率 20%"
              ]
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
                "label": "销售及管理费用",
                "notes": [
                  "占收入 35%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "impairment",
                "label": "减值",
                "notes": [
                  "占收入 1%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 58%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 +6 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "stores",
            "label": "门店",
            "notes": [
              "同比 +56"
            ]
          },
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "lululemon-q3-fy23",
    "company": "lululemon athletica",
    "period": "Q3 FY23",
    "periodNote": "Ending Oct. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.2,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 1.1,
          "notes": [
            "+19% Y/Y",
            "29% margin"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 0.9,
          "notes": [
            "+18% Y/Y",
            "42% margin"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 0.2,
          "notes": [
            "+19% Y/Y",
            "24% margin",
            "Outlets, temporary locations, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.9
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.8
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 0.075
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.001
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
      "total": 0.01,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.01
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.3,
        "notes": [
          "57% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "15% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "11% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 10 月",
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 +19%",
                "利润率 29%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +18%",
                "利润率 42%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +19%",
                "利润率 24%",
                "奥特莱斯、临时店铺、批发客户、授权与供应安排"
              ]
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
                "id": "impairment",
                "label": "减值"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 57%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 (2 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "stores",
            "label": "门店",
            "notes": [
              "环比 +14"
            ]
          },
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "stores",
        "label": "stores",
        "value": "686",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "686",
        "basis": "unspecified",
        "notes": [
          "+14 Q/Q"
        ],
        "quote": "686 stores +14 Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            695,
            1232,
            495,
            125
          ]
        }
      },
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+9 %",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales +9 % Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            695,
            1232,
            495,
            125
          ]
        }
      }
    ]
  },
  {
    "key": "lululemon-q3-fy22",
    "company": "lululemon athletica",
    "period": "Q3 FY22",
    "periodNote": "Ending October 2022; Source subtitle prints Q3 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q3-fy22.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 1.9,
      "notes": [
        "+28% Y/Y",
        "Women (65%) +22% Y/Y",
        "Men (24%) +29% Y/Y",
        "Other (11%) +73% Y/Y",
        "Other: Accessories, Mirror, Footwear"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 0.9,
          "notes": [
            "+28% Y/Y",
            "27% operating margin"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 0.8,
          "notes": [
            "+31% Y/Y",
            "42% operating margin"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 0.2,
          "notes": [
            "+18% Y/Y",
            "13% operating margin",
            "Outlets, temporary locations, MIRROR, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.8
      },
      "operatingExpenses": {
        "total": 0.7,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.7
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.002,
            "notes": [
              "Shown as ($2M) in Source"
            ]
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1,
        "notes": [
          "56% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "19% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "14% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 10 月；原图副标题为 Q3 FY23",
        "revenue": {
          "notes": [
            "同比 +28%",
            "女装 (65%) 同比 +22%",
            "男装 (24%) 同比 +29%",
            "其他 (11%) 同比 +73%",
            "其他：配件、Mirror、鞋类"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 +28%",
                "营业利润率 27%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +31%",
                "营业利润率 42%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +18%",
                "营业利润率 13%",
                "奥特莱斯、临时店铺、MIRROR、批发客户、授权与供应安排"
              ]
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
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "原图显示为 ($2M)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 56%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lululemon-q1-fy24",
    "company": "lululemon athletica",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.2,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "americas",
          "label": "Americas",
          "value": 1.6,
          "notes": [
            "+3% Y/Y",
            "35% margin"
          ]
        },
        {
          "id": "china",
          "label": "China",
          "value": 0.3,
          "notes": [
            "+45% Y/Y",
            "39% margin"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of World",
          "value": 0.3,
          "notes": [
            "+27% Y/Y",
            "24% margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.9,
        "notes": []
      },
      "operatingExpenses": {
        "total": 0.8,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.8,
            "notes": [
              "38% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.023,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.023,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.3,
        "notes": [
          "58% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "20% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "15% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "stores",
        "label": "stores",
        "value": "711",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "711",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "711 stores +7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            642,
            1232,
            496,
            126
          ]
        }
      },
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+6%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales +6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            642,
            1232,
            496,
            126
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 4 月",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "americas",
              "label": "美洲",
              "notes": [
                "同比 +3%",
                "利润率 35%"
              ]
            },
            {
              "id": "china",
              "label": "中国",
              "notes": [
                "同比 +45%",
                "利润率 39%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +27%",
                "利润率 24%"
              ]
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
                "label": "销售及管理费用",
                "notes": [
                  "占收入 38%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 58%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +0 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "stores",
            "label": "门店",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "lululemon-q3-fy25",
    "company": "lululemon athletica",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.6,
      "notes": [
        "+7% Y/Y",
        "Women +6% Y/Y",
        "Men +8% Y/Y",
        "Other +12% Y/Y"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 1.2,
          "notes": [
            "(0%) Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1.1,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 0.3,
          "notes": [
            "+21% Y/Y",
            "Outlets, temporary locations, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1.1
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1,
            "notes": [
              "39% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.002,
            "notes": [
              "Shown as ($2M) in the source image"
            ]
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
      "total": 0.006,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.006,
          "notes": [
            "Shown as $6M in the source image"
          ]
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.4,
        "notes": [
          "56% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "17% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "12% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 10 月",
        "revenue": {
          "notes": [
            "同比 +7%",
            "女装同比 +6%",
            "男装同比 +8%",
            "其他同比 +12%"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 (0%)"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +21%",
                "奥特莱斯、临时店铺、批发客户、授权与供应安排"
              ]
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
                "label": "销售及管理费用",
                "notes": [
                  "占收入 39%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "源图中显示为 ($2M)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "源图中显示为 $6M"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 56%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 (3 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "stores",
            "label": "门店",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "americas",
            "label": "美洲",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "international",
            "label": "国际",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "stores",
        "label": "stores",
        "value": "796",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "796",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "stores\n796\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            1832,
            1195,
            230,
            154
          ]
        }
      },
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+1%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales\n+1%\nY/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2079,
            1195,
            496,
            154
          ]
        }
      },
      {
        "id": "americas",
        "label": "Americas",
        "value": "-5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "-5%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Americas\n-5%\nY/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2079,
            1195,
            496,
            154
          ]
        }
      },
      {
        "id": "international",
        "label": "International",
        "value": "18",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+18%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "International\n+18%\nY/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2079,
            1195,
            496,
            154
          ]
        }
      }
    ]
  },
  {
    "key": "lululemon-q1-fy25",
    "company": "lululemon athletica",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q1-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 2.4,
      "notes": [
        "+7% Y/Y",
        "Women +7% Y/Y",
        "Men +8% Y/Y",
        "Other +8% Y/Y"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 1.2,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 0.3,
          "notes": [
            "+10% Y/Y",
            "Outlets, temporary locations, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.9,
            "notes": [
              "40% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.002,
            "notes": [
              "Shown as ($2M) in the Source"
            ]
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
      "total": 0.012,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.012,
          "notes": [
            "Shown as $12M in the Source"
          ]
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.4,
        "notes": [
          "58% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "19% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "13% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 4 月",
        "revenue": {
          "notes": [
            "同比 +7%",
            "女装同比 +7%",
            "男装同比 +8%",
            "其他同比 +8%"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +10%",
                "奥特莱斯、临时店铺、批发客户、授权与供应安排"
              ]
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
                "label": "销售及管理费用",
                "notes": [
                  "占收入 40%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "源图中显示为 ($2M)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "源图中显示为 $12M"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 58%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lululemon-q3-fy24",
    "company": "lululemon athletica",
    "period": "Q3 FY24",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.4,
      "notes": [
        "+9% Y/Y",
        "Women (65%) +8% Y/Y",
        "Men (23%) +9% Y/Y",
        "Other (12%) +9% Y/Y"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 1.2,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 0.9,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 0.2,
          "notes": [
            "+9% Y/Y",
            "Outlets, temporary locations, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.9,
            "notes": [
              "38% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.001,
            "notes": [
              "Shown as ($1M) in the source image"
            ]
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
      "total": 0.014,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.014,
          "notes": [
            "Shown as $14M in the source image"
          ]
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.4,
        "notes": [
          "58% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "20% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "15% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 10 月",
        "revenue": {
          "notes": [
            "同比 +9%",
            "女装 (65%) 同比 +8%",
            "男装 (23%) 同比 +9%",
            "其他 (12%) 同比 +9%"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +9%",
                "奥特莱斯、临时店铺、批发客户、授权与供应安排"
              ]
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
                "label": "销售及管理费用",
                "notes": [
                  "占收入 38%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "源图中显示为 ($1M)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "源图中显示为 $14M"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 58%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +3 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "stores",
            "label": "门店",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "americas",
            "label": "美洲",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "international",
            "label": "国际",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "stores",
        "label": "stores",
        "value": "749",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "749",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "749 stores\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            1832,
            1195,
            230,
            154
          ]
        }
      },
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+3%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales +3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2079,
            1195,
            496,
            154
          ]
        }
      },
      {
        "id": "americas",
        "label": "Americas",
        "value": "-2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "-2%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Americas -2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2079,
            1195,
            496,
            154
          ]
        }
      },
      {
        "id": "international",
        "label": "International",
        "value": "22",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+22%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "International +22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2079,
            1195,
            496,
            154
          ]
        }
      }
    ]
  },
  {
    "key": "lululemon-q2-fy24",
    "company": "lululemon athletica",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.4,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "americas",
          "label": "Americas",
          "value": 1.7,
          "notes": [
            "+1% Y/Y",
            "38% margin"
          ]
        },
        {
          "id": "china",
          "label": "China",
          "value": 0.3,
          "notes": [
            "+34% Y/Y",
            "38% margin"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of World",
          "value": 0.3,
          "notes": [
            "+24% Y/Y",
            "23% margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.9,
            "notes": [
              "37% of revenue",
              "(0pp) Y/Y"
            ]
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
      "total": 0.018,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.018
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.4,
        "notes": [
          "60% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "23% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "17% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "stores",
        "label": "stores",
        "value": "721",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "721",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "721 stores\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            1832,
            1197,
            229,
            154
          ]
        }
      },
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+2%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales +2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2078,
            1197,
            497,
            154
          ]
        }
      },
      {
        "id": "americas_sales",
        "label": "Americas",
        "value": "-3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "-3%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Americas -3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2078,
            1197,
            497,
            154
          ]
        }
      },
      {
        "id": "international_sales",
        "label": "International",
        "value": "19",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+19%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "International +19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2078,
            1197,
            497,
            154
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "americas",
              "label": "美洲",
              "notes": [
                "同比 +1%",
                "利润率 38%"
              ]
            },
            {
              "id": "china",
              "label": "中国",
              "notes": [
                "同比 +34%",
                "利润率 38%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +24%",
                "利润率 23%"
              ]
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
                "label": "销售及管理费用",
                "notes": [
                  "占收入 37%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 60%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 23%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +1 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "stores",
            "label": "门店数",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "americas_sales",
            "label": "美洲",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "international_sales",
            "label": "国际",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "lululemon-q2-fy25",
    "company": "lululemon athletica",
    "period": "Q2 FY25",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.5,
      "notes": [
        "+7% Y/Y",
        "Women +5% Y/Y",
        "Men +6% Y/Y",
        "Other +15% Y/Y"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 1.8,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 0.4,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 0.4,
          "notes": [
            "+19% Y/Y",
            "Outlets, temporary locations, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1,
            "notes": [
              "38% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.002,
            "notes": [
              "Shown as ($2M) in the source image"
            ]
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
      "total": 0.014,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.014,
          "notes": [
            "Shown as $14M in the source image"
          ]
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.5,
        "notes": [
          "58% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "21% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "15% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 7 月",
        "revenue": {
          "notes": [
            "同比 +7%",
            "女装同比 +5%",
            "男装同比 +6%",
            "其他同比 +15%"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +19%",
                "奥特莱斯、临时店铺、批发客户、授权与供应安排"
              ]
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
                "label": "销售及管理费用",
                "notes": [
                  "占收入 38%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "源图中显示为 ($2M)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "源图中显示为 $14M"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 58%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 (2 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "stores",
            "label": "门店",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "americas",
            "label": "美洲",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "international",
            "label": "国际",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "stores",
        "label": "stores",
        "value": "784",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "784",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "784 stores\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            1832,
            1195,
            230,
            154
          ]
        }
      },
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+1%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales +1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2079,
            1195,
            496,
            154
          ]
        }
      },
      {
        "id": "americas",
        "label": "Americas",
        "value": "-4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "-4%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Americas -4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2079,
            1195,
            496,
            154
          ]
        }
      },
      {
        "id": "international",
        "label": "International",
        "value": "17",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+17%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "International +17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            2079,
            1195,
            496,
            154
          ]
        }
      }
    ]
  },
  {
    "key": "lululemon-q2-fy23",
    "company": "lululemon athletica",
    "period": "Q2 FY23",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.2,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 1.1,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 0.9,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 0.2,
          "notes": [
            "+15% Y/Y",
            "Outlets, temporary locations, MIRROR, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.9
      },
      "operatingExpenses": {
        "total": 0.8,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.8
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.002
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.3,
        "notes": [
          "59% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "22% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "15% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "stores",
        "label": "stores",
        "value": "672",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "672",
        "basis": "unspecified",
        "notes": [
          "+10 Q/Q"
        ],
        "quote": "672 stores +10 Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            695,
            1232,
            496,
            126
          ]
        }
      },
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "13",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+13%",
        "basis": "unspecified",
        "notes": [
          "Y/Y fxn"
        ],
        "quote": "Comparable sales +13% Y/Y fxn",
        "anchor": {
          "type": "image-box",
          "box": [
            695,
            1232,
            496,
            126
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 7 月",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +15%",
                "奥特莱斯、临时店铺、MIRROR、批发客户、授权与供应安排"
              ]
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
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "毛利率 59%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "营业利润率 22%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "净利润率 15%",
              "同比 +0 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "stores",
            "label": "门店",
            "notes": [
              "环比 +10"
            ]
          },
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比，固定汇率口径"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "lululemon-q4-fy24",
    "company": "lululemon athletica",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.6,
      "notes": [
        "+13% Y/Y",
        "Women +11% Y/Y",
        "Men +17% Y/Y",
        "Other +13% Y/Y"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 1.5,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1.8,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 0.3,
          "notes": [
            "+17% Y/Y",
            "Outlets, temporary locations, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1.4
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.1,
            "notes": [
              "32% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.002,
            "notes": [
              "Shown as ($2M) in the source image"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "otherIncome": {
      "total": 0.015,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.015,
          "notes": [
            "Shown as $15M in the source image"
          ]
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.2,
        "notes": [
          "60% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "29% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.7,
        "notes": [
          "21% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "revenue": {
          "notes": [
            "同比 +13%",
            "女装同比 +11%",
            "男装同比 +17%",
            "其他同比 +13%"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +17%",
                "奥特莱斯、临时店铺、批发客户、授权与供应安排"
              ]
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
                "label": "销售及管理费用",
                "notes": [
                  "占收入 32%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "源图中显示为 ($2M)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "源图中显示为 $15M"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 60%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 29%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 (0 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "stores",
            "label": "门店",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "international",
            "label": "国际",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "stores",
        "label": "stores",
        "value": "767",
        "unit": "count",
        "literal": "767",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "767 stores\n+8% Y/Y",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            1832,
            1195,
            230,
            154
          ]
        }
      },
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "3",
        "unit": "%",
        "literal": "+3%",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales +3% Y/Y",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            2080,
            1195,
            496,
            154
          ]
        }
      },
      {
        "id": "international",
        "label": "International",
        "value": "20",
        "unit": "%",
        "literal": "+20%",
        "notes": [
          "Y/Y"
        ],
        "quote": "International +20% Y/Y",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            2080,
            1195,
            496,
            154
          ]
        }
      }
    ]
  },
  {
    "key": "lululemon-q1-fy23",
    "company": "lululemon athletica",
    "period": "Q1 FY23",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2,
      "notes": [
        "+24% Y/Y",
        "Women (65%) +22% Y/Y",
        "Men (22%) +17% Y/Y",
        "Other (13%) +54% Y/Y",
        "Other: Accessories, Mirror, Footwear"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 1,
          "notes": [
            "+31% Y/Y",
            "27% operating margin"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 0.8,
          "notes": [
            "+16% Y/Y",
            "44% operating margin"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 0.2,
          "notes": [
            "+29% Y/Y",
            "21% operating margin",
            "Outlets, temporary locations, MIRROR, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.9
      },
      "operatingExpenses": {
        "total": 0.7,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.7,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.002,
            "notes": [
              "Shown as ($2M) in the source image"
            ]
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.2,
        "notes": [
          "58% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "20% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "15% margin",
          "+36pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 4 月",
        "revenue": {
          "notes": [
            "同比 +24%",
            "女装 (65%) 同比 +22%",
            "男装 (22%) 同比 +17%",
            "其他 (13%) 同比 +54%",
            "其他：配件、Mirror、鞋类"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 +31%",
                "营业利润率 27%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +16%",
                "营业利润率 44%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +29%",
                "营业利润率 21%",
                "奥特莱斯、临时店铺、MIRROR、批发客户、授权与供应安排"
              ]
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
                "label": "销售及管理费用",
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "源图中显示为 ($2M)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": []
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 58%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +36 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lululemon-q4-fy22",
    "company": "lululemon athletica",
    "period": "Q4 FY22",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lululemon-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.8,
      "notes": [
        "+30% Y/Y",
        "Women (64%) +30% Y/Y",
        "Men (25%) +22% Y/Y",
        "Other (11%) +54% Y/Y",
        "Other: Accessories, Mirror, Footwear"
      ],
      "items": [
        {
          "id": "operated_stores",
          "label": "Operated stores",
          "value": 1.1,
          "notes": [
            "+15% Y/Y",
            "30% operating margin"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1.4,
          "notes": [
            "+37% Y/Y",
            "44% operating margin"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other revenue",
          "value": 0.2,
          "notes": [
            "+14% Y/Y",
            "15% operating margin",
            "Outlets, temporary locations, MIRROR, wholesale accounts, license and supply arrangement"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1.2
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.8
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 0.4
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.002
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.5,
        "notes": [
          "55% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "11% margin",
          "(16pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.1,
        "notes": [
          "4% margin",
          "(16pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2023 年 1 月",
        "revenue": {
          "notes": [
            "同比 +30%",
            "女装 (64%) 同比 +30%",
            "男装 (25%) 同比 +22%",
            "其他 (11%) 同比 +54%",
            "其他：配件、Mirror、鞋类"
          ],
          "items": [
            {
              "id": "operated_stores",
              "label": "自营门店",
              "notes": [
                "同比 +15%",
                "营业利润率 30%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +37%",
                "营业利润率 44%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他收入",
              "notes": [
                "同比 +14%",
                "营业利润率 15%",
                "奥特莱斯、临时店铺、MIRROR、批发客户、授权与供应安排"
              ]
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
                "id": "impairment",
                "label": "减值"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 55%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 (16 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 (16 个百分点)"
            ]
          }
        }
      }
    }
  }
]);
})(window);
