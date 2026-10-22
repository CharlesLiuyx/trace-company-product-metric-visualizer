/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "snowflake-q1-fy27",
    "company": "Snowflake",
    "period": "Q1 FY27",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q1-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1391,
      "notes": [
        "+33% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 1334,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 57,
          "notes": [
            "+25% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 465
      },
      "operatingExpenses": {
        "total": 1253,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 589,
            "notes": [
              "42% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 535,
            "notes": [
              "38% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 129,
            "notes": [
              "9% of revenue",
              "(11pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 926,
        "notes": [
          "67% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -326,
        "notes": [
          "(23%) margin",
          "+19pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -326,
        "notes": [
          "No separate net income or net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +33%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +25%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 42%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 38%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 9%",
                  "同比 (11 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 67%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (23%)",
              "同比 +19 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润或净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "snowflake-q4-fy26",
    "company": "Snowflake",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q4-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1284,
      "notes": [
        "+30% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 1227,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 57,
          "notes": [
            "+32% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 426
      },
      "operatingExpenses": {
        "total": 1176,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 551,
            "notes": [
              "43% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 511,
            "notes": [
              "40% of revenue",
              "(10pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 114,
            "notes": [
              "9% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 858,
        "notes": [
          "67% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -318,
        "notes": [
          "(25%) margin",
          "+14pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -318,
        "notes": [
          "No separate net income or net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +30%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +32%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 43%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 40%",
                  "同比 (10 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 9%",
                  "同比 (3 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 67%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (25%)",
              "同比 +14 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润或净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "snowflake-q2-fy27",
    "company": "Snowflake",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q2-fy27.png",
    "roundingTolerance": 0.01,
    "revenue": {
      "total": 1547,
      "notes": [
        "+35% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 1492,
          "notes": [
            "+37% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 55,
          "notes": [
            "+1% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 510
      },
      "operatingExpenses": {
        "total": 1300,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 612,
            "notes": [
              "40% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 567,
            "notes": [
              "37% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 121,
            "notes": [
              "8% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 1037,
        "notes": [
          "67% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -263,
        "notes": [
          "(17%) margin",
          "+13pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -263,
        "notes": [
          "No separate net income or net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +35%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +37%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +1%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 40%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 37%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 8%",
                  "同比 (3 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 67%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (17%)",
              "同比 +13 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润或净亏损项目。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "同比 +1 个百分点"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +30%"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +27%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "126",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "126%",
        "basis": "unspecified",
        "notes": [
          "+1pp Y/Y"
        ],
        "quote": "DBNR\n126%\n+1pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1425,
            241,
            210
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "9.0",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$9.0B",
        "basis": "unspecified",
        "notes": [
          "+30% Y/Y"
        ],
        "quote": "RPO\n$9.0B\n+30% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            292,
            1425,
            190,
            210
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "14554",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "14,554",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Customers 14,554 +22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            500,
            1423,
            587,
            214
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "> $1M",
        "value": "828",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "828",
        "basis": "unspecified",
        "notes": [
          "+27% Y/Y"
        ],
        "quote": "> $1M 828 +27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            500,
            1423,
            587,
            214
          ]
        }
      }
    ]
  },
  {
    "key": "snowflake-q3-fy23",
    "company": "Snowflake",
    "period": "Q3 FY23",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 557,
      "notes": [
        "+67% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 523,
          "notes": [
            "+67% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 34,
          "notes": [
            "+56% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 191
      },
      "operatingExpenses": {
        "total": 572,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 284,
            "notes": [
              "51% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 211,
            "notes": [
              "38% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 76,
            "notes": [
              "14% of revenue",
              "(5pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 366,
        "notes": [
          "66% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -206,
        "notes": [
          "(37%) margin",
          "+10pp Y/Y"
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
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "notes": [
            "同比 +67%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +67%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +56%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 51%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 38%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 14%",
                  "同比 (5 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 66%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "营业利润率 (37%)",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "同比 (7 个百分点)"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +66%"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +34%"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +94%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "165",
        "unit": "%",
        "currency": null,
        "literal": "165%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(7pp) Y/Y"
        ],
        "quote": "DBNR 165% (7pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1119,
            147,
            161
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.0",
        "unit": "B",
        "currency": "USD",
        "literal": "$3.0B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+66% Y/Y"
        ],
        "quote": "RPO $3.0B +66% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            188,
            1119,
            147,
            161
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "7292",
        "unit": "count",
        "currency": null,
        "literal": "7,292",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+34% Y/Y"
        ],
        "quote": "Customers 7,292 +34% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            348,
            1117,
            439,
            164
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "> $1M",
        "value": "287",
        "unit": "count",
        "currency": null,
        "literal": "287",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+94% Y/Y"
        ],
        "quote": "> $1M 287 +94% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            348,
            1117,
            439,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "snowflake-q1-fy25",
    "company": "Snowflake",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 829,
      "notes": [
        "+33% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 790,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 39,
          "notes": [
            "+17% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 273
      },
      "operatingExpenses": {
        "total": 905,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 401,
            "notes": [
              "48% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 411,
            "notes": [
              "50% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 93,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 556,
        "notes": [
          "67% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -349,
        "notes": [
          "(42%) margin",
          "+2pp Y/Y"
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
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 4 月",
        "revenue": {
          "notes": [
            "同比 +33%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +17%"
              ]
            }
          ]
        },
        "costs": {
          "tax": {
            "label": "税费",
            "notes": [
              "原图未单独披露税费。"
            ]
          },
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 50%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 48%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 67%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (42%)",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (3 个百分点)"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +46%"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年消费 > $1M 的客户",
            "notes": [
              "同比 +30%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "128",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "128%",
        "basis": "unspecified",
        "notes": [
          "(3pp) Q/Q"
        ],
        "quote": "DBNR\n128%\n(3pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1119,
            184,
            161
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "5.0",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$5.0B",
        "basis": "unspecified",
        "notes": [
          "+46% Y/Y"
        ],
        "quote": "RPO\n$5.0B\n+46% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            224,
            1119,
            147,
            161
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "9822",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "9,822",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Customers\n9,822\n+21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1117,
            439,
            164
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $1M",
        "value": "485",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "485",
        "basis": "unspecified",
        "notes": [
          "+30% Y/Y"
        ],
        "quote": "Customers > $1M\n485\n+30% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1117,
            439,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "snowflake-q4-fy25",
    "company": "Snowflake",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 987,
      "notes": [
        "+27% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 943,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 44,
          "notes": [
            "+19% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 333,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1040,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 492,
            "notes": [
              "50% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 433,
            "notes": [
              "44% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 115,
            "notes": [
              "12% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax",
        "notes": [
          "No separate tax line is shown in the Source."
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
        "value": 654,
        "notes": [
          "66% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -387,
        "notes": [
          "(39%) margin",
          "(4pp) Y/Y"
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
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "126",
        "unit": "%",
        "currency": null,
        "literal": "126%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(1pp) Q/Q"
        ],
        "quote": "DBNR 126% (1pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1082,
            184,
            161
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "6.9",
        "unit": "B",
        "currency": "USD",
        "literal": "$6.9B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+33% Y/Y"
        ],
        "quote": "RPO $6.9B +33% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            224,
            1082,
            147,
            161
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "11159",
        "unit": "count",
        "currency": null,
        "literal": "11,159",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Customers 11,159 +19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1082,
            452,
            163
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "> $1M",
        "value": "580",
        "unit": "count",
        "currency": null,
        "literal": "580",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+27% Y/Y"
        ],
        "quote": "> $1M 580 +27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1082,
            452,
            163
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "revenue": {
          "notes": [
            "同比 +27%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +28%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +19%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 50%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 44%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "原图未单列税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 66%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (39%)",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (1 个百分点)"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +33%"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "> $1M 客户",
            "notes": [
              "同比 +27%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "snowflake-q1-fy26",
    "company": "Snowflake",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1042,
      "notes": [
        "+26% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 997,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 45,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 349
      },
      "operatingExpenses": {
        "total": 1141,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 458,
            "notes": [
              "44% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 472,
            "notes": [
              "45% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 210,
            "notes": [
              "20% of revenue",
              "+9pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 693,
        "notes": [
          "67% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -447,
        "notes": [
          "(43%) margin",
          "(1pp) Y/Y"
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
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 4 月",
        "revenue": {
          "notes": [
            "同比 +26%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +16%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 44%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 45%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 20%",
                  "同比 +9 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 67%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (43%)",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (2 个百分点)"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +34%"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "> $1M 客户",
            "notes": [
              "同比 +27%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "124",
        "unit": "%",
        "literal": "124%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(2pp) Q/Q"
        ],
        "quote": "DBNR\n124%\n(2pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1082,
            184,
            160
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "6.7",
        "unit": "B",
        "literal": "$6.7B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+34% Y/Y"
        ],
        "quote": "RPO\n$6.7B\n+34% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            224,
            1082,
            146,
            160
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "11578",
        "unit": "count",
        "literal": "11,578",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Customers\n11,578\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1081,
            451,
            163
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "> $1M",
        "value": "606",
        "unit": "count",
        "literal": "606",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+27% Y/Y"
        ],
        "quote": "> $1M\n606\n+27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1081,
            451,
            163
          ]
        }
      }
    ]
  },
  {
    "key": "snowflake-q4-fy23",
    "company": "Snowflake",
    "period": "Q4 FY23",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 589,
      "notes": [
        "+53% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 555,
          "notes": [
            "+54% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 34,
          "notes": [
            "+39% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 206
      },
      "operatingExpenses": {
        "total": 623,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 303,
            "notes": [
              "52% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 242,
            "notes": [
              "41% of revenue",
              "+9pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 78,
            "notes": [
              "13% of revenue",
              "(6pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "Not separately shown in the source."
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
        "value": 383,
        "notes": [
          "65% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -240,
        "notes": [
          "(41%) margin",
          "(1pp) Y/Y"
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
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "158",
        "unit": "%",
        "currency": null,
        "literal": "158%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(19pp) Y/Y"
        ],
        "quote": "DBNR 158% (19pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1119,
            185,
            161
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.7",
        "unit": "B",
        "currency": "USD",
        "literal": "$3.7B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+38% Y/Y"
        ],
        "quote": "RPO $3.7B +38% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            224,
            1119,
            147,
            161
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "7828",
        "unit": "count",
        "currency": null,
        "literal": "7,828",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+31% Y/Y"
        ],
        "quote": "Customers 7,828 +31% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1117,
            439,
            164
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "> $1M",
        "value": "330",
        "unit": "count",
        "currency": null,
        "literal": "330",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+79% Y/Y"
        ],
        "quote": "> $1M 330 +79% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1117,
            439,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 1 月",
        "revenue": {
          "notes": [
            "同比 +53%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +54%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +39%"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 65%",
              "同比持平"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (41%)",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净损益",
            "notes": [
              "原图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数"
          },
          {
            "id": "customers_gt_1m",
            "label": "年消费超过 $1M 的客户数"
          }
        ],
        "costs": {
          "tax": {
            "label": "税项",
            "notes": [
              "原图未单独披露。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "snowflake-q3-fy26",
    "company": "Snowflake",
    "period": "Q3 FY26",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q3-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1213,
      "notes": [
        "+29% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 1158,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 55,
          "notes": [
            "+30% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 391
      },
      "operatingExpenses": {
        "total": 1152,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 550,
            "notes": [
              "45% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 494,
            "notes": [
              "41% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 107,
            "notes": [
              "9% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 822,
        "notes": [
          "68% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -329,
        "notes": [
          "(27%) margin",
          "+12pp Y/Y"
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
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2025 年 10 月",
        "revenue": {
          "notes": [
            "同比 +29%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +30%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 45%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 41%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 9%",
                  "同比 (2 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 68%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (27%)",
              "同比 +12 个百分点"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "同比 (2 个百分点)"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +37%"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "> $1M 客户",
            "notes": [
              "同比 +29%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "125",
        "unit": "%",
        "literal": "125%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(2pp) Y/Y"
        ],
        "quote": "DBNR 125% (2pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1082,
            184,
            161
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "7.9",
        "unit": "B",
        "literal": "$7.9B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+37% Y/Y"
        ],
        "quote": "RPO $7.9B +37% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            224,
            1082,
            146,
            161
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "12621",
        "unit": "count",
        "literal": "12,621",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Customers 12,621 +20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1081,
            451,
            164
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "> $1M",
        "value": "688",
        "unit": "count",
        "literal": "688",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+29% Y/Y"
        ],
        "quote": "> $1M 688 +29% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1081,
            451,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "snowflake-q4-fy24",
    "company": "Snowflake",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 775,
      "notes": [
        "+32% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 738,
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 37,
          "notes": [
            "+9% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 242
      },
      "operatingExpenses": {
        "total": 808,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 364,
            "notes": [
              "47% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 362,
            "notes": [
              "47% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 82,
            "notes": [
              "11% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 533,
        "notes": [
          "69% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -276,
        "notes": [
          "(36%) margin",
          "+5pp Y/Y"
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
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "131",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "131%",
        "notes": [
          "(4pp) Q/Q"
        ],
        "quote": "DBNR\n131%\n(4pp) Q/Q",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1119,
            184,
            160
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "5.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$5.2B",
        "notes": [
          "+41% Y/Y"
        ],
        "quote": "RPO\n$5.2B\n+41% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            224,
            1119,
            146,
            160
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "9437",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "9,437",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Customers\n9,437\n+22% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1117,
            438,
            86
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $1M",
        "value": "461",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "461",
        "notes": [
          "+39% Y/Y"
        ],
        "quote": "Customers > $1M\n461\n+39% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1203,
            438,
            78
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 1 月",
        "revenue": {
          "notes": [
            "同比 +32%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +33%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +9%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 47%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 47%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
                  "同比 (3 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 69%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (36%)",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (4 个百分点)"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +41%"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "large_customers",
            "label": "超过 $1M 的客户数",
            "notes": [
              "同比 +39%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "snowflake-q2-fy26",
    "company": "Snowflake",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1145,
      "notes": [
        "+32% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 1090,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 54,
          "notes": [
            "+38% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 372
      },
      "operatingExpenses": {
        "total": 1113,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 502,
            "notes": [
              "44% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 492,
            "notes": [
              "43% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 119,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 773,
        "notes": [
          "68% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -340,
        "notes": [
          "(30%) margin",
          "+11pp Y/Y"
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
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 7 月",
        "revenue": {
          "notes": [
            "同比 +32%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +38%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 44%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 43%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 68%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (30%)",
              "同比 +11 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "同比 (2 个百分点)"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +33%"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +28%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "125",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "125%",
        "basis": "unspecified",
        "notes": [
          "(2pp) Y/Y"
        ],
        "quote": "DBNR 125% (2pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1082,
            185,
            161
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "6.9",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$6.9B",
        "basis": "unspecified",
        "notes": [
          "+33% Y/Y"
        ],
        "quote": "RPO $6.9B +33% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            224,
            1082,
            146,
            161
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "12062",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "12,062",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Customers 12,062 +19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1082,
            451,
            161
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "> $1M",
        "value": "654",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "654",
        "basis": "unspecified",
        "notes": [
          "+28% Y/Y"
        ],
        "quote": "> $1M 654 +28% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1082,
            451,
            161
          ]
        }
      }
    ]
  },
  {
    "key": "snowflake-q3-fy24",
    "company": "Snowflake",
    "period": "Q3 FY24",
    "periodNote": "Ending Oct. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 734,
      "notes": [
        "+32% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 698,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 36,
          "notes": [
            "+4% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 229
      },
      "operatingExpenses": {
        "total": 766,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 355,
            "notes": [
              "48% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 332,
            "notes": [
              "45% of revenue",
              "+7pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 79,
            "notes": [
              "11% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax",
        "notes": [
          "No separate tax line is shown in the source."
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
        "value": 505,
        "notes": [
          "69% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -261,
        "notes": [
          "(35%) margin",
          "+1pp Y/Y"
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
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "135",
        "unit": "%",
        "currency": null,
        "literal": "135%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(7pp) Q/Q"
        ],
        "quote": "DBNR 135% (7pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1118,
            185,
            161
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.7",
        "unit": "B",
        "currency": "USD",
        "literal": "$3.7B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "RPO $3.7B +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            224,
            1118,
            147,
            161
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "8907",
        "unit": "count",
        "currency": null,
        "literal": "8,907",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y"
        ],
        "quote": "Customers 8,907 +24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1117,
            439,
            164
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "> $1M",
        "value": "436",
        "unit": "count",
        "currency": null,
        "literal": "436",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+52% Y/Y"
        ],
        "quote": "> $1M 436 +52% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1117,
            439,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2023 年 10 月",
        "revenue": {
          "notes": [
            "同比 +32%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +4%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 48%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 45%",
                  "同比 +7 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
                  "同比 (3 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "原图未单独列示税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 69%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (35%)",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "未报告净损益",
            "notes": [
              "原图仅展示到营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (7 个百分点)"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +24%"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "收入超过 $1M 的客户数",
            "notes": [
              "同比 +52%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "snowflake-q3-fy25",
    "company": "Snowflake",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 942,
      "notes": [
        "+28% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 900,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 42,
          "notes": [
            "+17% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 321
      },
      "operatingExpenses": {
        "total": 987,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 442,
            "notes": [
              "47% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 438,
            "notes": [
              "46% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 106,
            "notes": [
              "11% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 621,
        "notes": [
          "66% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -365,
        "notes": [
          "(39%) margin",
          "(3pp) Y/Y"
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
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 10 月",
        "revenue": {
          "notes": [
            "同比 +28%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +17%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 46%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 47%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 66%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (39%)",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比持平"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +55%"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "> $1M 客户",
            "notes": [
              "同比 +25%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "127",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "127%",
        "notes": [
          "Flat Q/Q"
        ],
        "quote": "DBNR\n127%\nFlat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1082,
            185,
            161
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "5.7",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$5.7B",
        "notes": [
          "+55% Y/Y"
        ],
        "quote": "RPO\n$5.7B\n+55% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            224,
            1082,
            147,
            161
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "10618",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "10,618",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Customers 10,618 +20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1081,
            439,
            164
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "customers_gt_1m",
        "label": "> $1M",
        "value": "510",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "510",
        "notes": [
          "+25% Y/Y"
        ],
        "quote": "> $1M 510 +25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1081,
            439,
            164
          ]
        },
        "basis": "unspecified"
      }
    ]
  },
  {
    "key": "snowflake-q1-fy24",
    "company": "Snowflake",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 624,
      "notes": [
        "+48% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 590,
          "notes": [
            "+50% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 34,
          "notes": [
            "+20% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 209
      },
      "operatingExpenses": {
        "total": 687,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 332,
            "notes": [
              "53% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 277,
            "notes": [
              "44% of revenue",
              "+9pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 78,
            "notes": [
              "13% of revenue",
              "(4pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 414,
        "notes": [
          "66% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -273,
        "notes": [
          "(44%) margin",
          "+1pp Y/Y"
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
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "151",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "151%",
        "basis": "unspecified",
        "notes": [
          "(7pp) Q/Q"
        ],
        "quote": "DBNR 151% (7pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1119,
            184,
            161
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.4B",
        "basis": "unspecified",
        "notes": [
          "+31% Y/Y"
        ],
        "quote": "RPO $3.4B +31% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            224,
            1119,
            146,
            161
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "8167",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "8,167",
        "basis": "unspecified",
        "notes": [
          "+29% Y/Y"
        ],
        "quote": "Customers 8,167 +29% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1117,
            438,
            164
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "> $1M",
        "value": "373",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "373",
        "basis": "unspecified",
        "notes": [
          "+80% Y/Y"
        ],
        "quote": "> $1M 373 +80% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1117,
            438,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 4 月",
        "revenue": {
          "notes": [
            "同比 +48%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +50%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +20%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 53%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 44%",
                  "同比 +9 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 13%",
                  "同比 (4 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 66%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (44%)",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (7 个百分点)"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +31%"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +29%"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "> $1M 客户",
            "notes": [
              "同比 +80%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "snowflake-q2-fy25",
    "company": "Snowflake",
    "period": "Q2 FY25",
    "periodNote": "Ending Jul. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 869,
      "notes": [
        "+29% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 829,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 39,
          "notes": [
            "+17% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 288
      },
      "operatingExpenses": {
        "total": 936,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 438,
            "notes": [
              "50% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 401,
            "notes": [
              "46% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 98,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 581,
        "notes": [
          "67% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -355,
        "notes": [
          "(41%) margin",
          "+1pp Y/Y"
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
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "127",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "127%",
        "basis": "unspecified",
        "notes": [
          "(1pp) Q/Q"
        ],
        "quote": "DBNR\n127%\n(1pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1117,
            185,
            163
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "5.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$5.2B",
        "basis": "unspecified",
        "notes": [
          "+48% Y/Y"
        ],
        "quote": "RPO\n$5.2B\n+48% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            224,
            1117,
            146,
            163
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "10249",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "10,249",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Customers 10,249 +21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1117,
            439,
            164
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "> $1M",
        "value": "510",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "510",
        "basis": "unspecified",
        "notes": [
          "+28% Y/Y"
        ],
        "quote": "> $1M 510 +28% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1117,
            439,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "notes": [
            "同比 +29%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +17%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 50%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 46%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 67%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (41%)",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "未报告净损益",
            "notes": [
              "来源止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (1 个百分点)"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +48%"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +28%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "snowflake-q2-fy24",
    "company": "Snowflake",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snowflake-q2-fy24.png",
    "roundingTolerance": 0.01,
    "revenue": {
      "total": 674,
      "notes": [
        "+36% Y/Y"
      ],
      "items": [
        {
          "id": "product_revenue",
          "label": "Product revenue",
          "value": 640,
          "notes": [
            "+37% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 34,
          "notes": [
            "+9% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 218
      },
      "operatingExpenses": {
        "total": 741,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 343,
            "notes": [
              "51% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 314,
            "notes": [
              "47% of revenue",
              "+10pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 84,
            "notes": [
              "12% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 456,
        "notes": [
          "68% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -285,
        "notes": [
          "(42%) margin",
          "(1pp) Y/Y"
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
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "142",
        "unit": "%",
        "literal": "142%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(9pp) Q/Q"
        ],
        "quote": "DBNR 142% (9pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1118,
            185,
            161
          ]
        }
      },
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.5",
        "unit": "B",
        "literal": "$3.5B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+30% Y/Y"
        ],
        "quote": "RPO $3.5B +30% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            224,
            1118,
            147,
            161
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "8537",
        "unit": "count",
        "literal": "8,537",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+25% Y/Y"
        ],
        "quote": "Customers 8,537 +25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1116,
            438,
            165
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "> $1M",
        "value": "402",
        "unit": "count",
        "literal": "402",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+62% Y/Y"
        ],
        "quote": "> $1M 402 +62% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1116,
            438,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 7 月",
        "revenue": {
          "notes": [
            "同比 +36%"
          ],
          "items": [
            {
              "id": "product_revenue",
              "label": "产品收入",
              "notes": [
                "同比 +37%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +9%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 51%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 47%",
                  "同比 +10 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
                  "同比 (2 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 68%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (42%)",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (9 个百分点)"
            ]
          },
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +30%"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +25%"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "> $1M 客户",
            "notes": [
              "同比 +62%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
