/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "lowes-q4-fy25",
    "company": "Lowe's",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.6,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 7.8,
          "notes": [
            "(1%) Y/Y",
            "Appliances, Décor, Flooring, Kitchen & Bath, and Paint"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 6,
          "notes": [
            "+2% Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 4.9,
          "notes": [
            "+4% Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 1.9,
          "notes": [
            "NM"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 13.9
      },
      "operatingExpenses": {
        "total": 5,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 4.4
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.6
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.7,
        "notes": [
          "32% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "8% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "5% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 (1%)",
                "家电、装饰、地板、厨卫及涂料"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 +2%",
                "电气及照明、木材、木制品及管道"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 +4%",
                "五金、室内园艺、户外园艺及工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "不适用"
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
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 32%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lowes-q1-fy26",
    "company": "Lowe's",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 23.1,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 7.2,
          "notes": [
            "+1% Y/Y",
            "Appliances, Décor, Flooring, Kitchen & Bath, and Paint"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 6.8,
          "notes": [
            "(0%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 6.8,
          "notes": [
            "+3% Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 2.3,
          "notes": [
            "+4444% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 15.5
      },
      "operatingExpenses": {
        "total": 5,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 4.4
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.5,
        "notes": [
          "33% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "11% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.6,
        "notes": [
          "7% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 +1%",
                "家电、装饰、地板、厨卫及涂料"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 (0%)",
                "电气及照明、木材、木制品及管道"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 +3%",
                "五金、室内园艺、户外园艺及工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +4444%"
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
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lowes-q2-fy26",
    "company": "Lowe's",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 26,
      "notes": [
        "+8% Y/Y",
        "Comparable sales: +0% Y/Y",
        "Customer transactions: (2%) Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 7.8,
          "notes": [
            "+0% Y/Y",
            "Appliances, Décor, Flooring, Kitchen & Bath, and Paint"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 7.6,
          "notes": [
            "+1% Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 8,
          "notes": [
            "(1%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 2.6,
          "notes": [
            "+277% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 17.4
      },
      "operatingExpenses": {
        "total": 5,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 4.5
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.8
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.6,
        "notes": [
          "33% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.5,
        "notes": [
          "14% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.4,
        "notes": [
          "9% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +8%",
            "可比销售额：同比 +0%",
            "客户交易次数：同比 (2%)"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 +0%",
                "家电、装饰、地板、厨卫及涂料"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 +1%",
                "电气及照明、木材、木制品及管道"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 (1%)",
                "五金、室内园艺、户外园艺及工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +277%"
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
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
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
        },
        "operatingMetrics": [
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比 +2%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "literal": "$108",
        "value": "0.108",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Average ticket\n$108\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1205,
            325,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "lowes-q4-fy22",
    "company": "Lowe's",
    "period": "Q4 FY22",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 22.4,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 10.2,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 5.9,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 5.6,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.7,
          "notes": [
            "(3%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 15.2
      },
      "operatingExpenses": {
        "total": 5.6,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 5.1
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.3,
        "notes": [
          "32% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "8% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "6% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2023 年 1 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 (3%)"
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
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 32%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    },
    "roundingNote": "Source values rounded to $0.1B: revenue less cost differs from gross by $0.1B; operating expense components differ from total by $0.1B. Retain Source literals."
  },
  {
    "key": "lowes-q1-fy23",
    "company": "Lowe's",
    "period": "Q1 FY23",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 22.3,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 8.2,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 6.8,
          "notes": [
            "(13%) Y/Y"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 6.8,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.5,
          "notes": [
            "+1% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 14.8,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.2,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3.8,
            "notes": []
          },
          {
            "id": "depreciation_amortization",
            "label": [
              "Depreciation &",
              "amortization"
            ],
            "value": 0.4,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.7,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.3,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.5,
        "notes": [
          "34% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.3,
        "notes": [
          "15% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.3,
        "notes": [
          "10% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable-sales",
        "label": "Comparable sales",
        "literal": "(4%)",
        "value": "-4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales\n(4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1233,
            274,
            150
          ]
        }
      },
      {
        "id": "customer-transactions",
        "label": "Customer transactions",
        "literal": "(4%)",
        "value": "-4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Customer transactions\n(4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "average-ticket",
        "label": "Average ticket",
        "literal": "+0.3%",
        "value": "0.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Average ticket\n+0.3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            605,
            1233,
            275,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2023 年 4 月",
        "operatingMetrics": [
          {
            "id": "comparable-sales",
            "label": "可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "customer-transactions",
            "label": "客户交易次数",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "average-ticket",
            "label": "平均客单价",
            "notes": [
              "同比"
            ]
          }
        ],
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 (13%)"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +1%"
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
                "label": "销售、一般及行政费用",
                "notes": []
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销",
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
              "id": "interest",
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 34%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lowes-q3-fy24",
    "company": "Lowe's",
    "period": "Q3 FY24",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.2,
      "notes": [
        "(1%) Y/Y",
        "Comparable sales: (1%) Y/Y",
        "Customer transactions: (2%) Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 7.5,
          "notes": [
            "(3%) Y/Y",
            "Appliances, Décor, Flooring, Kitchen & Bath, and Paint"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 6.7,
          "notes": [
            "(2%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 5.3,
          "notes": [
            "+2% Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.6,
          "notes": [
            "(9%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 13.4
      },
      "operatingExpenses": {
        "total": 4.3,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3.8
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.8,
        "notes": [
          "34% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.5,
        "notes": [
          "13% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.7,
        "notes": [
          "8% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 10 月",
        "revenue": {
          "notes": [
            "同比 (1%)",
            "可比销售额：同比 (1%)",
            "客户交易次数：同比 (2%)"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 (3%)",
                "家电、装饰、地板、厨卫及涂料"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 (2%)",
                "电气及照明、木材、木制品及管道"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 +2%",
                "五金、室内园艺、户外园艺及工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 (9%)"
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
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 34%",
              "同比 +0 个百分点"
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
              "利润率 8%",
              "同比 (0 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比持平"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "literal": "$104",
        "value": "0.104",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Average ticket\n$104\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1205,
            325,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "lowes-q2-fy23",
    "company": "Lowe's",
    "period": "Q2 FY23",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q2-fy23.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 25,
      "notes": [
        "(9%) Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 8.7,
          "notes": [
            "(8%) Y/Y",
            "Appliances, Décor, Flooring, Kitchen & Bath, and Paint"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 7.2,
          "notes": [
            "(13%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 8.3,
          "notes": [
            "(6%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.6,
          "notes": [
            "(10%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 16.6
      },
      "operatingExpenses": {
        "total": 4.5,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 4.1
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.9
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.4,
        "notes": [
          "34% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.9,
        "notes": [
          "16% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.7,
        "notes": [
          "11% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 7 月",
        "revenue": {
          "notes": [
            "同比 (9%)"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 (8%)",
                "家电、装饰、地板、厨卫及涂料"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 (13%)",
                "电气及照明、木材、木制品及管道"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 (6%)",
                "五金、室内园艺、户外园艺及工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 (10%)"
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
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 34%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +0 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "comparable_sales",
            "label": "可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "customer_transactions",
            "label": "客户交易次数",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "-2",
        "literal": "(2%)",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Comparable sales\n(2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            32,
            1233,
            275,
            149
          ]
        },
        "notes": [
          "Y/Y"
        ]
      },
      {
        "id": "customer_transactions",
        "label": "Customer transactions",
        "value": "-2",
        "literal": "(2%)",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Customer transactions\n(2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            318,
            1233,
            275,
            149
          ]
        },
        "notes": [
          "Y/Y"
        ]
      },
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "value": "0.3",
        "literal": "+0.3%",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Average ticket\n+0.3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            604,
            1233,
            275,
            149
          ]
        },
        "notes": [
          "Y/Y"
        ]
      }
    ],
    "notes": [
      "Revenue items total $24.8B versus printed $25.0B; difference is within the combined rounding intervals of four one-decimal items and the total."
    ]
  },
  {
    "key": "lowes-q1-fy25",
    "company": "Lowe's",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.9,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 7.6,
          "notes": [
            "(1%) Y/Y",
            "Appliances, Décor, Flooring, Kitchen & Bath, and Paint"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 6.6,
          "notes": [
            "+1% Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 6.4,
          "notes": [
            "(6%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.4,
          "notes": [
            "+4% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 13.9
      },
      "operatingExpenses": {
        "total": 4.5,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 4
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7,
        "notes": [
          "33% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.5,
        "notes": [
          "12% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.6,
        "notes": [
          "8% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 4 月",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 (1%)",
                "家电、装饰、地板、厨卫及涂料"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 +1%",
                "电气及照明、木材、木制品及管道"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 (6%)",
                "五金、室内园艺、户外园艺及工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +4%"
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
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 (0 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "comparable_sales",
            "label": "可比销售额",
            "notes": [
              "同比 (2%)"
            ]
          },
          {
            "id": "customer_transactions",
            "label": "客户交易次数",
            "notes": [
              "同比 (4%)"
            ]
          },
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比 +2%"
            ]
          }
        ]
      }
    },
    "notes": [
      "Source printed values retained. Revenue items sum to $21.0B versus $20.9B; expense items sum to $4.4B versus $4.5B; operating profit less tax and interest is $1.7B versus $1.6B. Each $0.1B difference is within combined one-decimal rounding intervals."
    ],
    "operatingMetrics": [
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "-2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(2%)",
        "basis": "yoy",
        "notes": [
          "(2%) Y/Y"
        ],
        "quote": "Comparable sales\n(2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1205,
            274,
            150
          ]
        }
      },
      {
        "id": "customer_transactions",
        "label": "Customer transactions",
        "value": "-4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(4%)",
        "basis": "yoy",
        "notes": [
          "(4%) Y/Y"
        ],
        "quote": "Customer transactions\n(4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1205,
            274,
            150
          ]
        }
      },
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "value": "0.105",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$105",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Average ticket\n$105\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1205,
            325,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "lowes-fy23",
    "company": "Lowe's",
    "period": "FY23",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 86.4,
      "notes": [
        "(13%) Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 32.1,
          "notes": [
            "(11%) Y/Y",
            "Appliances, Décor, Flooring, Kitchen & Bath, and Paint"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 26.9,
          "notes": [
            "(14%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 25,
          "notes": [
            "(7%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 2.3,
          "notes": [
            "(10%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 57.5
      },
      "operatingExpenses": {
        "total": 17.3,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 15.6
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 1.7
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.5
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1.4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 1.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 28.9,
        "notes": [
          "33% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 11.6,
        "notes": [
          "13% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 7.7,
        "notes": [
          "9% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年",
        "periodNote": "截至 2024 年 1 月",
        "revenue": {
          "notes": [
            "同比 (13%)"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 (11%)",
                "家电、装饰、地板、厨卫及涂料"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 (14%)",
                "电气及照明、木材、木制品及管道"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 (7%)",
                "五金、室内园艺、户外园艺及工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 (10%)"
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
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "comparable-sales",
            "label": "可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "customer-transactions",
            "label": "客户交易次数",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "average-ticket",
            "label": "平均客单价",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable-sales",
        "label": "Comparable sales",
        "literal": "(5%)",
        "value": "-5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales\n(5%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1233,
            275,
            149
          ]
        }
      },
      {
        "id": "customer-transactions",
        "label": "Customer transactions",
        "literal": "(5%)",
        "value": "-5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Customer transactions\n(5%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1233,
            275,
            149
          ]
        }
      },
      {
        "id": "average-ticket",
        "label": "Average ticket",
        "literal": "(0.1%)",
        "value": "-0.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Average ticket\n(0.1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1233,
            275,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "lowes-q1-fy24",
    "company": "Lowe's",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 21.4,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 7.7,
          "notes": [
            "(7%) Y/Y",
            "Appliances, Décor, Flooring, Kitchen & Bath, and Paint"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 6.6,
          "notes": [
            "(3%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 6.6,
          "notes": [
            "(2%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.4,
          "notes": [
            "(19%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 14.3
      },
      "operatingExpenses": {
        "total": 4.4,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 4
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.1,
        "notes": [
          "33% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.7,
        "notes": [
          "12% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.8,
        "notes": [
          "8% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 4 月",
        "revenue": {
          "notes": [
            "同比 (4%)"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 (19%)"
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
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 (2 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "comparable_sales",
            "label": "可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "customer_transactions",
            "label": "客户交易次数",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "-4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(4%)",
        "basis": "yoy",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales\n(4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            32,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "customer_transactions",
        "label": "Customer transactions",
        "value": "-3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(3%)",
        "basis": "yoy",
        "notes": [
          "Y/Y"
        ],
        "quote": "Customer transactions\n(3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "value": "-1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(1%)",
        "basis": "yoy",
        "notes": [
          "Y/Y"
        ],
        "quote": "Average ticket\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1233,
            275,
            150
          ]
        }
      }
    ],
    "notes": [
      "Source values retained at $0.1B precision; revenue items sum to $21.3B versus printed $21.4B due to rounding."
    ]
  },
  {
    "key": "lowes-q3-fy22",
    "company": "Lowe's",
    "period": "Q3 FY22",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 23.5,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 8.6,
          "notes": [
            "+1% Y/Y",
            "Appliances, Décor, Flooring, Kitchen & Bath, and Paint"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 8.2,
          "notes": [
            "+8% Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 6,
          "notes": [
            "(1%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.7,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 15.7
      },
      "operatingExpenses": {
        "total": 6.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 6.4
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.5
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.8,
        "notes": [
          "33% margin",
          "+0.2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.9,
        "notes": [
          "4% margin",
          "(8pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "1% margin",
          "(8pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 +1%",
                "家电、装饰、地板、厨卫及涂料"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 +8%",
                "电气及照明、木材、木制品及管道"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 (1%)",
                "五金、室内园艺、户外园艺及工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +3%"
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
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 +0.2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 (8 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 (8 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "comparable_sales",
            "label": "可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "customer_transactions",
            "label": "客户交易次数",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "e_commerce",
            "label": "电子商务",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "3",
        "literal": "+3%",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "quote": "Comparable sales\n+3% Y/Y",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            32,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "customer_transactions",
        "label": "Customer transactions",
        "value": "-5",
        "literal": "(5%)",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "quote": "Customer transactions\n(5%) Y/Y",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "value": "8",
        "literal": "+8%",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "quote": "Average ticket\n+8% Y/Y",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "e_commerce",
        "label": "E-commerce",
        "value": "12",
        "literal": "+12%",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "quote": "E-commerce\n+12% Y/Y",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            893,
            1233,
            275,
            150
          ]
        }
      }
    ],
    "notes": [
      "Source rounded to $0.1B: operating profit $0.9B less tax $0.5B and interest $0.3B differs from printed net profit $0.2B by $0.1B; rounding intervals overlap."
    ]
  },
  {
    "key": "lowes-q4-fy24",
    "company": "Lowe's",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 18.6,
      "notes": [
        "(0%) Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 7.5,
          "notes": [
            "(0%) Y/Y",
            "Appliances, Décor, Flooring, Kitchen & Bath, and Paint"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 5.9,
          "notes": [
            "+1% Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 4.6,
          "notes": [
            "(3%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.6,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 12.5
      },
      "operatingExpenses": {
        "total": 4.3,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3.8
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.1,
        "notes": [
          "33% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.8,
        "notes": [
          "10% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "6% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "revenue": {
          "notes": [
            "同比 (0%)"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 (0%)",
                "家电、装饰、地板、厨卫及涂料"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 +1%",
                "电气及照明、木材、木制品及管道"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 (3%)",
                "五金、室内园艺、户外园艺及工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +3%"
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
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 +1 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "comparable_sales",
            "label": "可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "customer_transactions",
            "label": "客户交易次数",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比 +1.5%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "0.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+0.2%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales\n+0.2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1206,
            275,
            149
          ]
        }
      },
      {
        "id": "customer_transactions",
        "label": "Customer transactions",
        "value": "-1.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(1.3%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Customer transactions\n(1.3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1206,
            275,
            149
          ]
        }
      },
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "value": "0.102",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$102",
        "basis": "unspecified",
        "notes": [
          "+1.5% Y/Y"
        ],
        "quote": "Average ticket\n$102\n+1.5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1206,
            325,
            149
          ]
        }
      }
    ],
    "notes": [
      "Source rounding: SG&A $3.8B + depreciation $0.4B = $4.2B versus operating expenses $4.3B; difference $0.1B lies within component rounding intervals."
    ]
  },
  {
    "key": "lowes-q2-fy24",
    "company": "Lowe's",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 23.6,
      "notes": [
        "(5%) Y/Y",
        "Comparable sales: (5%) Y/Y",
        "Customer transactions: (6%) Y/Y",
        "Average ticket: +1% Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 8.2,
          "notes": [
            "(6%) Y/Y",
            "Appliances, Décor, Flooring, Kitchen & Bath, and Paint"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 7.7,
          "notes": [
            "(7%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 7.1,
          "notes": [
            "(3%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.6,
          "notes": [
            "(4%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 15.7
      },
      "operatingExpenses": {
        "total": 4.4,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 4
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.9,
        "notes": [
          "33% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.4,
        "notes": [
          "15% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.4,
        "notes": [
          "10% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "notes": [
            "同比 (5%)",
            "可比销售额：同比 (5%)",
            "客户交易次数：同比 (6%)",
            "平均客单价：同比 +1%"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 (6%)",
                "家电、装饰、地板、厨卫及涂料"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 (7%)",
                "电气及照明、木材、木制品及管道"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 (3%)",
                "五金、室内园艺、户外园艺及工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 (4%)"
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
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    },
    "roundingNote": "Source rounds each amount to $0.1B; gross profit 7.9 less operating expenses 4.4 differs from displayed operating profit 3.4 by 0.1B, within the combined rounding intervals."
  },
  {
    "key": "lowes-q3-fy23",
    "company": "Lowe's",
    "period": "Q3 FY23",
    "periodNote": "Ending Oct. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lowes-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.5,
      "notes": [
        "(13%) Y/Y"
      ],
      "items": [
        {
          "id": "home_decor",
          "label": "Home Décor",
          "value": 7.8,
          "notes": [
            "(14%) Y/Y",
            "Appliances, Décor, Flooring, Kitchen & Bath, and Paint"
          ]
        },
        {
          "id": "building_products",
          "label": "Building Products",
          "value": 6.8,
          "notes": [
            "(13%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 5.2,
          "notes": [
            "(11%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.6,
          "notes": [
            "(10%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 13.6
      },
      "operatingExpenses": {
        "total": 4.2,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3.8
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.9,
        "notes": [
          "34% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.7,
        "notes": [
          "13% margin",
          "+9pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.8,
        "notes": [
          "9% margin",
          "+8pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2023 年 10 月",
        "revenue": {
          "notes": [
            "同比 (13%)"
          ],
          "items": [
            {
              "id": "home_decor",
              "label": "家居装饰",
              "notes": [
                "同比 (14%)"
              ]
            },
            {
              "id": "building_products",
              "label": "建筑产品",
              "notes": [
                "同比 (13%)"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用品",
              "notes": [
                "同比 (11%)"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 (10%)"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 34%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 +8 个百分点"
            ]
          }
        }
      }
    },
    "notes": [
      "Revenue categories sum to $20.4B versus displayed total $20.5B due to independent one-decimal rounding."
    ]
  }
]);
})(window);
