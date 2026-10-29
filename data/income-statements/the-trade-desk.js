/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "the-trade-desk-q3-fy25",
    "company": "The Trade Desk",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 739,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Revenue",
          "value": 739,
          "notes": [
            "+18% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 162
      },
      "operatingExpenses": {
        "total": 416,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 157,
            "notes": [
              "21% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 128,
            "notes": [
              "17% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 131,
            "notes": [
              "18% of revenue",
              "(4pp) Y/Y",
              "Includes SBC for CEO performance ($14M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 64
      }
    },
    "otherIncome": {
      "total": 18,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 18
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 577,
        "notes": [
          "78% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 161,
        "notes": [
          "22% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 115,
        "notes": [
          "16% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "revenue",
              "label": "收入",
              "notes": [
                "同比 +18%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 21%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 17%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "占收入 18%",
                  "同比 (4 个百分点)",
                  "包含 CEO 绩效相关的股权激励（$14M）"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 78%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "the-trade-desk-q4-fy25",
    "company": "The Trade Desk",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 846,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Revenue",
          "value": 846,
          "notes": [
            "+14% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 163
      },
      "operatingExpenses": {
        "total": 427,
        "notes": [
          "Sales & marketing, technology & development, and general & admin add to $428M because source-chart values are rounded."
        ],
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 174,
            "notes": [
              "21% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 131,
            "notes": [
              "15% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 123,
            "notes": [
              "14% of revenue",
              "(3pp) Y/Y",
              "Includes SBC for CEO performance ($10M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 83
      }
    },
    "otherIncome": {
      "total": 13,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 13
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 684,
        "notes": [
          "81% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 257,
        "notes": [
          "30% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 187,
        "notes": [
          "22% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "revenue",
              "label": "收入",
              "notes": [
                "同比 +14%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "notes": [
              "销售与营销、技术与开发及一般与行政费用合计为 $428M，源图金额经四舍五入。"
            ],
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 21%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 15%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "占收入 14%",
                  "同比 (3 个百分点)",
                  "包含 CEO 绩效相关的股权激励（$10M）"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 81%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 30%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "the-trade-desk-q1-fy26",
    "company": "The Trade Desk",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 689,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Revenue",
          "value": 689,
          "notes": [
            "+12% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 182
      },
      "operatingExpenses": {
        "total": 440,
        "notes": [
          "Sales & marketing, technology & development, and general & admin add to $439M because source-chart values are rounded."
        ],
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 172,
            "notes": [
              "25% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 142,
            "notes": [
              "21% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 125,
            "notes": [
              "18% of revenue",
              "(3pp) Y/Y",
              "Includes SBC for CEO performance ($5M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 39
      }
    },
    "otherIncome": {
      "total": 12,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 12
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 507,
        "notes": [
          "74% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 67,
        "notes": [
          "10% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 40,
        "notes": [
          "6% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "revenue",
              "label": "收入",
              "notes": [
                "同比 +12%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "notes": [
              "销售与营销、技术与开发及一般与行政费用合计为 $439M，源图金额经四舍五入。"
            ],
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 25%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 21%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "占收入 18%",
                  "同比 (3 个百分点)",
                  "包含 CEO 绩效相关的股权激励（$5M）"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 (3 个百分点)"
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
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "the-trade-desk-q2-fy26",
    "company": "The Trade Desk",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 715,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Revenue",
          "value": 715,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 184,
        "notes": []
      },
      "operatingExpenses": {
        "total": 429,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 174,
            "notes": [
              "24% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 141,
            "notes": [
              "20% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 114,
            "notes": [
              "14% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 49,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 12,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 12,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 531,
        "notes": [
          "74% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 102,
        "notes": [
          "14% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 64,
        "notes": [
          "9% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "revenue",
              "label": "收入",
              "notes": [
                "同比 +3%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 24%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 20%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "占收入 14%",
                  "同比 (3 个百分点)"
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
              "id": "other_income",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (4 个百分点)"
            ]
          }
        },
        "notes": [
          "源图金额经取整。营业利润 $102M + 其他 $12M - 税费 $49M 为 $65M，与原图净利润 $64M 存在差额。客户留存率 >95%。"
        ]
      }
    },
    "notes": [
      "Source chart amounts are rounded. Operating profit $102M + Other $12M - Tax $49M is $65M versus displayed net profit $64M. Customer retention >95%."
    ]
  },
  {
    "key": "the-trade-desk-q3-fy22",
    "company": "The Trade Desk",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q3-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 395,
      "notes": [
        "+31% Y/Y",
        "Geographic breakdown based on Gross Billings. Source geographic amounts total $394M versus revenue $395M due to rounding."
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 351,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 43,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 70
      },
      "operatingExpenses": {
        "total": 296,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 85,
            "notes": [
              "22% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 80,
            "notes": [
              "20% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & Admin",
            "value": 131,
            "notes": [
              "Includes $66M SBC for long-term CEO performance"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 15
      }
    },
    "otherIncome": {
      "total": 2,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 2
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 325,
        "notes": [
          "82% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 29,
        "notes": [
          "7% margin",
          "(20pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 16,
        "notes": [
          "4% margin",
          "(16pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customer_retention",
        "label": "Customer retention",
        "literal": "> 95%",
        "value": "95",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "basis": "unspecified",
        "notes": [],
        "quote": "Customer retention > 95%",
        "anchor": {
          "type": "image-box",
          "box": [
            166,
            1265,
            542,
            72
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "notes": [
            "同比 +31%",
            "地理细分基于总账单额。原图地域金额合计 $394M，与收入 $395M 的差异源于舍入。"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +11%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 22%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 20%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "包含长期 CEO 绩效相关股权激励 $66M"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 82%",
              "同比持平"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 (20 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 (16 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customer_retention",
            "label": "客户留存率"
          }
        ]
      }
    }
  },
  {
    "key": "the-trade-desk-q4-fy22",
    "company": "The Trade Desk",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q4-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 491,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 430,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 60,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 80
      },
      "operatingExpenses": {
        "total": 311,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 93,
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 84,
            "notes": [
              "17% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 134,
            "notes": [
              "Includes SBC for CEO",
              "performance ($66M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 41
      }
    },
    "otherIncome": {
      "total": 12,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 12
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 411,
        "notes": [
          "84% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 100,
        "notes": [
          "20% margin",
          "+14pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 71,
        "notes": [
          "15% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +11%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 17%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "包含 CEO 绩效相关",
                  "股权激励（$66M）"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 84%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +14 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customer_retention",
            "label": "客户留存率"
          }
        ]
      }
    },
    "notes": [
      "Geographic amounts $430M + $60M = $490M versus total $491M: source integer rounding. Customer retention >95%."
    ],
    "operatingMetrics": [
      {
        "id": "customer_retention",
        "value": "95",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 95%",
        "label": "Customer retention",
        "notes": [],
        "basis": "unspecified",
        "quote": "Customer retention > 95%",
        "anchor": {
          "type": "image-box",
          "box": [
            165,
            1265,
            543,
            72
          ]
        }
      }
    ]
  },
  {
    "key": "the-trade-desk-q1-fy23",
    "company": "The Trade Desk",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q1-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 383,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 337,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 46,
          "notes": [
            "+21% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 85,
        "notes": []
      },
      "operatingExpenses": {
        "total": 321,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 97,
            "notes": [
              "25% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 94,
            "notes": [
              "24% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 130,
            "notes": []
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 298,
        "notes": [
          "78% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -23,
        "notes": [
          "(6%) margin",
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
        "id": "retention",
        "label": "Customer retention",
        "value": "95",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 95%",
        "basis": "unspecified",
        "quote": "Customer retention > 95%",
        "anchor": {
          "type": "image-box",
          "box": [
            165,
            1266,
            543,
            72
          ]
        },
        "notes": []
      },
      {
        "id": "ceo_sbc",
        "label": "Includes SBC for CEO performance",
        "value": "60",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$60M",
        "basis": "unspecified",
        "quote": "Includes SBC for CEO performance ($60M)",
        "anchor": {
          "type": "image-box",
          "box": [
            2334,
            1181,
            292,
            72
          ]
        },
        "notes": []
      }
    ],
    "notes": [
      "Source operating loss ($26M) is arithmetically impossible; corrected to ($23M) per official Q1 2023 release (loss $23.308M). Other printed amounts retained."
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +21%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 25%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 24%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 78%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (6%)",
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
            "id": "retention",
            "label": "客户留存率"
          },
          {
            "id": "ceo_sbc",
            "label": "含 CEO 绩效股权激励"
          }
        ],
        "notes": [
          "原图营业亏损 ($26M) 与算术关系矛盾；根据公司 2023 年第一季度官方公告（亏损 $23.308M）更正为 ($23M)。其余原图金额保留。"
        ]
      }
    }
  },
  {
    "key": "the-trade-desk-q2-fy23",
    "company": "The Trade Desk",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q2-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 464,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 409,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 56,
          "notes": [
            "+34% Y/Y",
            "Geographic breakdown based on Gross Billings"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 87,
        "notes": []
      },
      "operatingExpenses": {
        "total": 336,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 111,
            "notes": [
              "24% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 98,
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 126,
            "notes": [
              "Includes SBC for CEO performance ($48M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 27,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 18,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 18,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 378,
        "notes": [
          "81% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 42,
        "notes": [
          "20% margin",
          "+14pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 33,
        "notes": [
          "7% margin",
          "+12pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customer_retention",
        "label": "Customer retention",
        "value": "95",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 95%",
        "basis": "unspecified",
        "notes": [],
        "quote": "Customer retention > 95%",
        "anchor": {
          "type": "image-box",
          "box": [
            165,
            1265,
            544,
            72
          ]
        }
      }
    ],
    "notes": [
      "Source rounded amounts have $1M differences: geographic sum 465 vs revenue 464; gross profit 378 + platform operations 87 = 465; expense items sum 335 vs total 336. Source percentage labels retained by operator direction: operating margin 20%, +14pp Y/Y, technology/development 22%."
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +34%",
                "按总账单额划分的地域构成"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 24%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 22%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "包含 CEO 绩效相关的股权激励（$48M）"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": []
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 81%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +14 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +12 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customer_retention",
            "label": "客户留存率"
          }
        ],
        "notes": [
          "原图金额经过取整；地域分项、毛利桥接与营业费用分项均存在舍入差额。按操作者要求保留原图百分比标注，详见各节点说明。"
        ]
      }
    }
  },
  {
    "key": "the-trade-desk-q2-fy25",
    "company": "The Trade Desk",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q2-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 694,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 597,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 97,
          "notes": [
            "+28% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 151
      },
      "operatingExpenses": {
        "total": 426,
        "items": [
          {
            "id": "sales_marketing",
            "value": 161,
            "label": "Sales & marketing",
            "notes": [
              "23% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "value": 134,
            "label": "Technology & development",
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "value": 131,
            "label": "General & admin",
            "notes": [
              "19% of revenue",
              "(4pp) Y/Y",
              "Includes SBC for CEO",
              "performance ($19M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 43
      }
    },
    "otherIncome": {
      "total": 16,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 16
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 543,
        "notes": [
          "78% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 117,
        "notes": [
          "17% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 90,
        "notes": [
          "13% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customer_retention",
        "literal": "> 95%",
        "value": "95",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "label": "Customer retention",
        "quote": "Customer retention > 95%",
        "notes": [],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            165,
            1266,
            544,
            72
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +28%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 23%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "占收入 19%",
                  "同比 (4 个百分点)",
                  "包含 CEO 绩效相关的",
                  "股权激励（$19M）"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 78%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 (2 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customer_retention",
            "label": "客户留存率"
          }
        ]
      }
    }
  },
  {
    "key": "the-trade-desk-q3-fy24",
    "company": "The Trade Desk",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 628,
      "notes": [
        "+27% Y/Y",
        "Geographic breakdown based on Gross Billings. Source rounded gross profit plus platform operations totals $627M versus $628M revenue."
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 553,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 75,
          "notes": [
            "+18% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 122
      },
      "operatingExpenses": {
        "total": 397,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 140,
            "notes": [
              "22% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 118,
            "notes": [
              "19% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 139,
            "notes": [
              "22% of revenue",
              "(5pp) Y/Y",
              "Includes SBC for CEO performance ($30M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 33
      }
    },
    "otherIncome": {
      "total": 19,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 19
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 505,
        "notes": [
          "80% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 108,
        "notes": [
          "17% margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 94,
        "notes": [
          "15% margin",
          "+7pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customer_retention",
        "label": "Customer retention",
        "value": "95",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 95%",
        "basis": "unspecified",
        "notes": [],
        "quote": "Customer retention > 95%",
        "anchor": {
          "type": "image-box",
          "box": [
            166,
            1265,
            544,
            72
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "operatingMetrics": [
          {
            "id": "customer_retention",
            "label": "客户留存率"
          }
        ],
        "revenue": {
          "notes": [
            "同比 +27%",
            "地域划分以广告投放总额为依据；原图整数百万舍入使毛利润与平台运营费用之和为 $627M，收入为 $628M。"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +18%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 22%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 19%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "占收入 22%",
                  "同比 (5 个百分点)",
                  "包含 CEO 绩效相关的股权激励（$30M）"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 80%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +7 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "the-trade-desk-q3-fy23",
    "company": "The Trade Desk",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 493,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 429,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 64,
          "notes": [
            "+48% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 93,
        "notes": []
      },
      "operatingExpenses": {
        "total": 362,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 118,
            "notes": [
              "24% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 112,
            "notes": [
              "23% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 132,
            "notes": [
              "27% of revenue",
              "(6pp) Y/Y",
              "Includes SBC for CEO",
              "performance ($48M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 17,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 19,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 19,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 400,
        "notes": [
          "81% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 38,
        "notes": [
          "8% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 39,
        "notes": [
          "8% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "retention",
        "value": "95",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 95%",
        "label": "Customer retention",
        "quote": "Customer retention > 95%",
        "basis": "unspecified",
        "notes": [],
        "anchor": {
          "type": "image-box",
          "box": [
            166,
            1265,
            543,
            72
          ]
        }
      }
    ],
    "notes": [
      "Geographic breakdown based on Gross Billings. Source amounts are rounded: operating profit $38M + Other $19M - Tax $17M = $40M versus displayed net profit $39M. CEO performance SBC $48M is included in general & admin."
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +48%"
              ]
            }
          ],
          "notes": [
            "同比 +25%"
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 24%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 23%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "占收入 27%",
                  "同比 (6 个百分点)",
                  "含 CEO 绩效股权激励",
                  "（$48M）"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 81%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +4 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "retention",
            "label": "客户留存率"
          }
        ],
        "notes": [
          "地理拆分基于广告交易总额。原图金额取整：营业利润 $38M + 其他 $19M − 税费 $17M = $40M，图印净利润为 $39M。CEO 绩效股权激励 $48M 已包含于一般与行政费用。"
        ]
      }
    }
  },
  {
    "key": "the-trade-desk-q4-fy24",
    "company": "The Trade Desk",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 741,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Revenue",
          "value": 741,
          "notes": [
            "+22% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 135
      },
      "operatingExpenses": {
        "total": 410,
        "notes": [
          "Source rounded line items total $411M versus $410M; gross profit less operating expenses is $196M versus printed operating profit $195M. Both $1M differences lie within aggregate rounding intervals."
        ],
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 151,
            "notes": [
              "20% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 128,
            "notes": [
              "17% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 132,
            "notes": [
              "18% of revenue",
              "(4pp) Y/Y",
              "Includes SBC for CEO performance ($27M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 39
      }
    },
    "otherIncome": {
      "total": 26,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 26
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 606,
        "notes": [
          "82% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 195,
        "notes": [
          "26% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 182,
        "notes": [
          "25% margin",
          "+9pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customer_retention",
        "value": "95",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 95%",
        "label": "Customer retention",
        "basis": "unspecified",
        "notes": [],
        "quote": "Customer retention > 95%",
        "anchor": {
          "type": "image-box",
          "box": [
            65,
            1265,
            544,
            72
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "revenue",
              "label": "收入",
              "notes": [
                "同比 +22%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 20%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 17%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "占收入 18%",
                  "同比 (4 个百分点)",
                  "包含 CEO 绩效相关的股权激励（$27M）"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 82%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 26%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 25%",
              "同比 +9 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customer_retention",
            "label": "客户留存率"
          }
        ]
      }
    }
  },
  {
    "key": "the-trade-desk-q1-fy25",
    "company": "The Trade Desk",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 616,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 536,
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 80,
          "notes": [
            "+36% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 143,
        "notes": []
      },
      "operatingExpenses": {
        "total": 419,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 153,
            "notes": [
              "25% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 132,
            "notes": [
              "21% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 134,
            "notes": [
              "22% of revenue",
              "(5pp) Y/Y",
              "Includes SBC for CEO performance ($24M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 25,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 21,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 21,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 473,
        "notes": [
          "77% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 54,
        "notes": [
          "9% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 50,
        "notes": [
          "8% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customer_retention",
        "value": "95",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 95%",
        "label": "Customer retention",
        "basis": "unspecified",
        "notes": [],
        "quote": "Customer retention > 95%",
        "anchor": {
          "type": "image-box",
          "box": [
            165,
            1265,
            544,
            72
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +24%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +36%"
              ]
            }
          ],
          "notes": [
            "同比 +25%"
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 25%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 21%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "占收入 22%",
                  "同比 (5 个百分点)",
                  "包含 CEO 绩效相关股权激励（$24M）"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 77%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 9%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customer_retention",
            "label": "客户留存率"
          }
        ]
      }
    }
  },
  {
    "key": "the-trade-desk-q1-fy24",
    "company": "The Trade Desk",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 491,
      "notes": [
        "+28% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 432,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 59,
          "notes": [
            "+28% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 104,
        "notes": []
      },
      "operatingExpenses": {
        "total": 359,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 122,
            "notes": [
              "25% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 108,
            "notes": [
              "22% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 130,
            "notes": [
              "26% of revenue",
              "(8pp) Y/Y",
              "Includes SBC for CEO performance ($36M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 14,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 17,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 17,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 387,
        "notes": [
          "79% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 29,
        "notes": [
          "6% margin",
          "+12pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 32,
        "notes": [
          "6% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customer_retention",
        "literal": "> 95%",
        "value": "95",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "label": "Customer retention",
        "notes": [],
        "basis": "unspecified",
        "quote": "Customer retention > 95%",
        "anchor": {
          "type": "image-box",
          "box": [
            165,
            1265,
            544,
            72
          ]
        }
      }
    ],
    "notes": [
      "Source values are rounded to integer millions: expense items sum to $360M versus total $359M; $387M gross profit minus $359M expenses is $28M versus operating profit $29M. Geography is based on Gross Billings."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "items": [
            {
              "id": "united_states",
              "label": "美国"
            },
            {
              "id": "international",
              "label": "国际"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "占收入 26%",
                  "同比（8 个百分点）",
                  "包含 CEO 绩效相关的股权激励（$36M）"
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
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润"
          },
          "net": {
            "label": "净利润"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "customer_retention",
            "label": "客户留存率"
          }
        ]
      }
    }
  },
  {
    "key": "the-trade-desk-q4-fy23",
    "company": "The Trade Desk",
    "period": "Q4 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q4-fy23.png",
    "revenue": {
      "total": 606,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "us",
          "label": "United States",
          "value": 528,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 78,
          "notes": [
            "+29% Y/Y",
            "Geographic breakdown based on Gross Billings"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 101,
        "notes": []
      },
      "operatingExpenses": {
        "total": 361,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 127,
            "notes": [
              "21% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 102,
            "notes": [
              "17% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 132,
            "notes": [
              "22% of revenue",
              "(5pp) Y/Y",
              "Includes SBC for CEO performance ($42M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 63,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 16,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 16,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 505,
        "notes": [
          "83% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 144,
        "notes": [
          "24% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 97,
        "notes": [
          "16% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "retention",
        "label": "Customer retention",
        "value": "95",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 95%",
        "basis": "unspecified",
        "notes": [],
        "quote": "Customer retention > 95%",
        "anchor": {
          "type": "image-box",
          "box": [
            165,
            1265,
            544,
            73
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "us",
              "label": "美国",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +29%",
                "地域划分基于广告投放总额"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 21%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 17%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "占收入 22%",
                  "同比 (5 个百分点)",
                  "包含 CEO 绩效相关的股权激励（$42M）"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 83%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 24%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "retention",
            "label": "客户留存率"
          }
        ]
      }
    }
  },
  {
    "key": "the-trade-desk-q2-fy24",
    "company": "The Trade Desk",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/the-trade-desk-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 585,
      "notes": [
        "+26% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 509,
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 76,
          "notes": [
            "+36% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "platform_operations",
        "label": "Platform operations",
        "value": 110,
        "notes": []
      },
      "operatingExpenses": {
        "total": 379,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 134,
            "notes": [
              "23% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 110,
            "notes": [
              "19% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 135,
            "notes": [
              "23% of revenue",
              "(4pp) Y/Y",
              "Includes SBC for CEO performance ($36M)"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 27,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 18,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 18,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 474,
        "notes": [
          "81% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 95,
        "notes": [
          "16% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 85,
        "notes": [
          "15% margin",
          "+7pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "notes": [
          "原图金额按百万取整：收入 585 - 平台运营 110 = 475，原图毛利润为 474；营业利润 95 + 更正后的其他收入 18 - 税费 27 = 86，原图净利润为 85。地域划分按总账单金额。其他收入依据公司业绩公告由 $14M 更正为 $18M。"
        ],
        "revenue": {
          "notes": [
            "同比 +26%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +24%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +36%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "平台运营"
          },
          "tax": {
            "label": "税费"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 23%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 19%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般与行政",
                "notes": [
                  "占收入 23%",
                  "同比 (4 个百分点)",
                  "包含 CEO 绩效相关的股权激励（$36M）"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 81%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +7 个百分点"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "customer_retention",
            "label": "客户留存率"
          }
        ]
      }
    },
    "notes": [
      "Source integer-million values are rounded: revenue 585 - platform operations 110 = 475 versus gross profit 474; operating profit 95 + corrected Other 18 - tax 27 = 86 versus net profit 85. Geographic breakdown is based on Gross Billings. Other corrected from $14M to $18M using the issuer earnings release."
    ],
    "operatingMetrics": [
      {
        "id": "customer_retention",
        "label": "Customer retention",
        "value": "95",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 95%",
        "basis": "unspecified",
        "notes": [],
        "quote": "Customer retention > 95%",
        "anchor": {
          "type": "image-box",
          "box": [
            165,
            1265,
            544,
            73
          ]
        }
      }
    ]
  }
]);
})(window);
