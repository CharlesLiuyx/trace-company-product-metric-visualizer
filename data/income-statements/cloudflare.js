/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "cloudflare-q1-fy26",
    "company": "Cloudflare",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 640,
      "notes": [
        "+34% Y/Y",
        "Reported revenue was $639.8M; source chart rounds to $640M."
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 316,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 176,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 99,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 50,
          "notes": [
            "+34% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 184
      },
      "operatingExpenses": {
        "total": 518,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 272,
            "notes": [
              "42% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 151,
            "notes": [
              "24% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 95,
            "notes": [
              "15% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
          "71% margin",
          "(5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -62,
        "notes": [
          "(10%) margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -62,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +34%",
            "报告收入为 $639.8M；来源图四舍五入为 $640M。"
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
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +34%"
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
                  "占收入 24%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
                  "同比 (3 个百分点)"
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
              "利润率 71%",
              "同比 (5 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (10%)",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cloudflare-q4-fy25",
    "company": "Cloudflare",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q4-fy25.png",
    "roundingTolerance": 0.1,
    "revenue": {
      "total": 615,
      "notes": [
        "+34% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 304,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 168,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 97,
          "notes": [
            "+50% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 46,
          "notes": [
            "+28% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 162
      },
      "operatingExpenses": {
        "total": 502,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 251,
            "notes": [
              "41% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 142,
            "notes": [
              "23% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 109,
            "notes": [
              "18% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 453,
        "notes": [
          "74% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -49,
        "notes": [
          "(8%) margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -49,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +34%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +50%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +28%"
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
                  "占收入 41%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 18%",
                  "同比 +2 个百分点"
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
              "利润率 74%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (8%)",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cloudflare-q2-fy26",
    "company": "Cloudflare",
    "period": "Q2 FY26",
    "periodNote": "Q2 FY26 · Source chart",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 696,
      "notes": [
        "+36% Y/Y",
        "Source displays independently rounded amounts; geographic sum is $695M, gross profit plus cost is $697M."
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 354,
          "notes": [
            "+41% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 187,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 99,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 55,
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
        "value": 197,
        "notes": []
      },
      "operatingExpenses": {
        "total": 705,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 276,
            "notes": [
              "40% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 159,
            "notes": [
              "23% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 151,
            "notes": [
              "22% of revenue",
              "+22pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 119,
            "notes": [
              "17% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 500,
        "notes": [
          "72% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -206,
        "notes": [
          "(30%) margin",
          "(16pp) Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "The Source ends at operating loss and does not report net income."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "2026 财年第二季度 · 来源图",
        "revenue": {
          "notes": [
            "同比 +36%",
            "来源金额分别取整；地区合计 $695M，毛利润与收入成本合计 $697M。"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +41%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
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
                  "占收入 40%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 22%",
                  "同比 +22 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 17%",
                  "同比 (2 个百分点)"
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
              "利润率 72%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (30%)",
              "同比 (16 个百分点)"
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "原图止于营业亏损，未披露净利润。"
            ]
          }
        }
      }
    },
    "notes": [
      "The Source ends at operating loss and does not report net income.",
      "DBNR 120%, +6pp Y/Y; customers > $100K: 4,698, +27% Y/Y."
    ]
  },
  {
    "key": "cloudflare-q1-fy23",
    "company": "Cloudflare",
    "period": "Q1 FY23",
    "periodNote": "Q1 FY23 · Source chart",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q1-fy23.png",
    "roundingTolerance": 0.1,
    "revenue": {
      "total": 290,
      "notes": [
        "+37% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 153,
          "notes": [
            "+37% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 78,
          "notes": [
            "+40% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 39,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 20,
          "notes": [
            "+31% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 70,
        "notes": []
      },
      "operatingExpenses": {
        "total": 267,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 137,
            "notes": [
              "47% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 82,
            "notes": [
              "28% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 48,
            "notes": [
              "17% of revenue",
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
        "value": 220,
        "notes": [
          "76% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -47,
        "notes": [
          "(16%) margin",
          "+3pp Y/Y"
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
        "value": "117",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "117%",
        "basis": "unspecified",
        "notes": [
          "(10pp) Y/Y"
        ],
        "quote": "DBNR\n117%\n(10pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1184,
            163,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "168000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "168K",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers 168K +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            279,
            1201,
            475,
            44
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "2156",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,156",
        "basis": "unspecified",
        "notes": [
          "+40% Y/Y"
        ],
        "quote": "> $100K 2,156 +40% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            333,
            1245,
            418,
            44
          ]
        }
      },
      {
        "id": "direct_customers",
        "label": "Direct customers",
        "value": "86",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "86%",
        "basis": "unspecified",
        "notes": [
          "of revenue"
        ],
        "quote": "Direct customers 86% of revenue",
        "anchor": {
          "type": "image-box",
          "box": [
            271,
            1288,
            507,
            44
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "2023 财年第一季度 · 来源图",
        "revenue": {
          "notes": [
            "同比 +37%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +37%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +40%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +31%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 47%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 28%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 17%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (16%)",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "美元净留存率",
            "notes": [
              "同比 (10 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "large_customers",
            "label": "客户 > $100K",
            "notes": [
              "同比 +40%"
            ]
          },
          {
            "id": "direct_customers",
            "label": "直销客户",
            "notes": [
              "占收入"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "cloudflare-q1-fy24",
    "company": "Cloudflare",
    "period": "Q1 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 379,
      "notes": [
        "+30% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 196,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 105,
          "notes": [
            "+35% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 48,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 29,
          "notes": [
            "+48% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 85,
        "notes": []
      },
      "operatingExpenses": {
        "total": 348,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 194,
            "notes": [
              "51% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 88,
            "notes": [
              "23% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 66,
            "notes": [
              "18% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 294,
        "notes": [
          "78% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -55,
        "notes": [
          "(14%) margin",
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
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "115",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "115%",
        "basis": "unspecified",
        "notes": [
          "(2pp) Y/Y"
        ],
        "quote": "DBNR\n115%\n(2pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1186,
            164,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "197000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "197K",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Customers 197K +17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1184,
            569,
            163
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "2878",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,878",
        "basis": "unspecified",
        "notes": [
          "+33% Y/Y"
        ],
        "quote": "> $100K 2,878 +33% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1184,
            569,
            163
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +30%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +28%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +35%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +48%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 51%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 18%",
                  "同比 +1 个百分点"
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "毛利率 78%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (14%)",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润未披露",
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
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "large_customers",
            "label": "超过 $100K",
            "notes": [
              "同比 +33%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "cloudflare-q1-fy25",
    "company": "Cloudflare",
    "period": "Q1 FY25",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 479,
      "notes": [
        "+27% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 235,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 134,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 73,
          "notes": [
            "+54% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 37,
          "notes": [
            "+27% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 116,
        "notes": []
      },
      "operatingExpenses": {
        "total": 417,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 214,
            "notes": [
              "45% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 115,
            "notes": [
              "24% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 88,
            "notes": [
              "18% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 364,
        "notes": [
          "76% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -53,
        "notes": [
          "(11%) margin",
          "+3pp Y/Y"
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
        "value": "111",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "111%",
        "basis": "unspecified",
        "notes": [
          "(4pp) Y/Y"
        ],
        "quote": "DBNR\n111%\n(4pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1155,
            164,
            165
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "251000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "251K",
        "basis": "unspecified",
        "notes": [
          "+27% Y/Y"
        ],
        "quote": "Customers\n251K\n+27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            237,
            1154,
            568,
            83
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "3527",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,527",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Customers > $100K\n3,527\n+23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            237,
            1237,
            568,
            81
          ]
        }
      }
    ],
    "notes": [
      "Source independently rounds amounts: gross profit $364M plus cost of revenue $116M is $480M, versus revenue $479M."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +27%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +54%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +27%"
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
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 18%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (11%)",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润未披露",
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
              "同比 (4 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +27%"
            ]
          },
          {
            "id": "large_customers",
            "label": "超过 $100K 的客户",
            "notes": [
              "同比 +23%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "cloudflare-q2-fy24",
    "company": "Cloudflare",
    "period": "Q2 FY24",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q2-fy24.png",
    "roundingTolerance": 0.1,
    "revenue": {
      "total": 401,
      "notes": [
        "+30% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 207,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 111,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 52,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 31,
          "notes": [
            "+40% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 89
      },
      "operatingExpenses": {
        "total": 347,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 175,
            "notes": [
              "44% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 102,
            "notes": [
              "26% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 70,
            "notes": [
              "17% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 312,
        "notes": [
          "78% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -35,
        "notes": [
          "(9%) margin",
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
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "112",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "112%",
        "basis": "unspecified",
        "notes": [
          "(3pp) Y/Y"
        ],
        "quote": "DBNR 112% (3pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1186,
            164,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "210000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "210K",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Customers 210K +21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            237,
            1184,
            569,
            82
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "3046",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,046",
        "basis": "unspecified",
        "notes": [
          "+30% Y/Y"
        ],
        "quote": "> $100K 3,046 +30% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            237,
            1266,
            569,
            82
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +30%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +28%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +40%"
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
                  "占收入 26%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 17%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 78%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (9%)",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "label": "净利润未披露",
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
              "同比 (3 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户总数",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年消费超过 $100K 的客户数",
            "notes": [
              "同比 +30%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "cloudflare-q2-fy25",
    "company": "Cloudflare",
    "period": "Q2 FY25",
    "periodNote": "Q2 FY25 · Source chart",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 512,
      "notes": [
        "+28% Y/Y",
        "Source independently rounds gross profit and cost of revenue; their sum is $513M."
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 252,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 143,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 75,
          "notes": [
            "+44% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 42,
          "notes": [
            "+35% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 129
      },
      "operatingExpenses": {
        "total": 451,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 219,
            "notes": [
              "43% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 135,
            "notes": [
              "26% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 97,
            "notes": [
              "19% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 384,
        "notes": [
          "75% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -67,
        "notes": [
          "(13%) margin",
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
        "value": "114",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "114%",
        "basis": "unspecified",
        "notes": [
          "+2pp Y/Y"
        ],
        "quote": "DBNR\n114%\n+2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1155,
            165,
            165
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "266000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "266K",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Customers 266K +21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            203,
            1152,
            569,
            165
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "3712",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,712",
        "basis": "unspecified",
        "notes": [
          "+26% Y/Y"
        ],
        "quote": "> $100K 3,712 +26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            203,
            1152,
            569,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "2025 财年第二季度 · 来源图",
        "revenue": {
          "notes": [
            "同比 +28%",
            "来源毛利润与收入成本分别取整，合计为 $513M。"
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
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +44%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +35%"
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
                  "占收入 26%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 19%",
                  "同比 +2 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (13%)",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "美元净留存率",
            "notes": [
              "同比 +2 个百分点"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年消费超过 $100K 的客户数",
            "notes": [
              "同比 +26%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "cloudflare-q3-fy22",
    "company": "Cloudflare",
    "period": "Q3 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q3-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 254,
      "notes": [
        "+47% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 135,
          "notes": [
            "+49% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 68,
          "notes": [
            "+51% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 34,
          "notes": [
            "+38% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 17,
          "notes": [
            "+41% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 62,
        "notes": []
      },
      "operatingExpenses": {
        "total": 238,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 116,
            "notes": [
              "46% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 76,
            "notes": [
              "30% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 45,
            "notes": [
              "18% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 192,
        "notes": [
          "76% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -46,
        "notes": [
          "(18%) margin",
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
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "124",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "124%",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "DBNR 124% Flat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1184,
            164,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "156000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "156,000",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "Customers 156,000 +18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1184,
            570,
            55
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "1908",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,908",
        "basis": "unspecified",
        "notes": [
          "+51% Y/Y"
        ],
        "quote": "Customers > $100K 1,908 +51% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1238,
            570,
            42
          ]
        }
      },
      {
        "id": "direct_customers",
        "label": "Direct customers",
        "value": "87",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "87%",
        "basis": "unspecified",
        "notes": [
          "of revenue"
        ],
        "quote": "Direct customers 87% of revenue",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1280,
            570,
            68
          ]
        }
      }
    ],
    "notes": [
      "Source operating expense items total $237M versus the displayed $238M total; retain independently rounded values."
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +47%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +49%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +51%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +38%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +41%"
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
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 18%",
                  "同比 +1 个百分点"
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
              "利润率 76%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (18%)",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润未披露",
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
              "同比持平"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +18%"
            ]
          },
          {
            "id": "large_customers",
            "label": "超过 $100K 的客户",
            "notes": [
              "同比 +51%"
            ]
          },
          {
            "id": "direct_customers",
            "label": "直接客户",
            "notes": [
              "收入占比"
            ]
          }
        ],
        "notes": [
          "营业费用分项合计 $237M，图示总额为 $238M；保留分别取整的金额。"
        ]
      }
    }
  },
  {
    "key": "cloudflare-q3-fy23",
    "company": "Cloudflare",
    "period": "Q3 FY23",
    "periodNote": "Q3 FY23 · Source chart",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q3-fy23.png",
    "roundingTolerance": 0.1,
    "revenue": {
      "total": 336,
      "notes": [
        "+32% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 176,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 93,
          "notes": [
            "+36% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 43,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 24,
          "notes": [
            "+47% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 78
      },
      "operatingExpenses": {
        "total": 297,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 91,
            "notes": [
              "27% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 150,
            "notes": [
              "45% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 56,
            "notes": [
              "17% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax not shown",
        "value": 0
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
        "value": 258,
        "notes": [
          "77% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -39,
        "notes": [
          "(12%) margin",
          "+6pp Y/Y"
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
        "value": "116",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "116%",
        "basis": "unspecified",
        "notes": [
          "(8pp) Y/Y"
        ],
        "quote": "DBNR\n116%\n(8pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1184,
            163,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "182000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "182K",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Customers\n182K\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            237,
            1184,
            570,
            59
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "2558",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,558",
        "basis": "unspecified",
        "notes": [
          "+34% Y/Y"
        ],
        "quote": "Customers > $100K\n2,558\n+34% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            237,
            1241,
            570,
            47
          ]
        }
      },
      {
        "id": "direct_customers",
        "label": "Direct customers",
        "value": "84",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "84%",
        "basis": "unspecified",
        "notes": [
          "of revenue"
        ],
        "quote": "Direct customers\n84%\nof revenue",
        "anchor": {
          "type": "image-box",
          "box": [
            237,
            1288,
            570,
            60
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "2023 财年第三季度 · 来源图",
        "revenue": {
          "notes": [
            "同比 +32%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +36%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +47%"
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
                  "占收入 27%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 45%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 17%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费未列示"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 77%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (12%)",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净利润未披露",
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
              "同比 (8 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年收入贡献超过 $100K 的客户",
            "notes": [
              "同比 +34%"
            ]
          },
          {
            "id": "direct_customers",
            "label": "直销客户",
            "notes": [
              "占收入"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "cloudflare-q3-fy24",
    "company": "Cloudflare",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q3-fy24.png",
    "roundingTolerance": 0.1,
    "revenue": {
      "total": 430,
      "notes": [
        "+28% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 215,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 122,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 59,
          "notes": [
            "+38% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 34,
          "notes": [
            "+40% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 96
      },
      "operatingExpenses": {
        "total": 365,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 185,
            "notes": [
              "43% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 111,
            "notes": [
              "26% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 69,
            "notes": [
              "16% of revenue",
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
        "value": 334,
        "notes": [
          "78% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -31,
        "notes": [
          "(7%) margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating loss and does not report net income."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "110",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "110%",
        "basis": "unspecified",
        "notes": [
          "(6pp) Y/Y"
        ],
        "quote": "DBNR\n110%\n(6pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1155,
            163,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "221000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "221K",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Customers 221K +22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            237,
            1152,
            568,
            164
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "3265",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,265",
        "basis": "unspecified",
        "notes": [
          "+28% Y/Y"
        ],
        "quote": "> $100K 3,265 +28% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            237,
            1152,
            568,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +28%"
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
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +38%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +40%"
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
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 26%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
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
              "利润率 78%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "原图止于营业亏损，未披露净利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "美元净留存率",
            "notes": [
              "同比 (6 个百分点)"
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
            "id": "large_customers",
            "label": "年消费超过 $100K 的客户",
            "notes": [
              "同比 +28%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "cloudflare-q3-fy25",
    "company": "Cloudflare",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 30, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q3-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 562,
      "notes": [
        "+31% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 283,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 153,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 85,
          "notes": [
            "+43% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 41,
          "notes": [
            "+21% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 146
      },
      "operatingExpenses": {
        "total": 453,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 236,
            "notes": [
              "42% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 121,
            "notes": [
              "22% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 96,
            "notes": [
              "17% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 416,
        "notes": [
          "74% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -37,
        "notes": [
          "(7%) margin",
          "(0pp) Y/Y"
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
        "value": "119",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "119%",
        "basis": "unspecified",
        "notes": [
          "+9pp Y/Y"
        ],
        "quote": "DBNR 119% +9pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1155,
            164,
            165
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "296000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "296K",
        "basis": "unspecified",
        "notes": [
          "+33% Y/Y"
        ],
        "quote": "Customers 296K +33% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            203,
            1152,
            569,
            164
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "4000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "4K",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "> $100K 4K +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            203,
            1152,
            569,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +31%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +43%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +21%"
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
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 22%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 17%",
                  "同比 +1 个百分点"
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
              "利润率 74%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 (0 个百分点)"
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
            "label": "美元净留存率",
            "notes": [
              "同比 +9 个百分点"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +33%"
            ]
          },
          {
            "id": "large_customers",
            "label": "超过 $100K 的客户",
            "notes": [
              "同比 +23%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "cloudflare-q4-fy22",
    "company": "Cloudflare",
    "period": "Q4 FY22",
    "periodNote": "Quarter ended Dec. 31, 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q4-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 275,
      "notes": [
        "+42% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 145,
          "notes": [
            "+44% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 73,
          "notes": [
            "+42% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 37,
          "notes": [
            "+40% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 20,
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
        "value": 68
      },
      "operatingExpenses": {
        "total": 258,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 132,
            "notes": [
              "50% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 80,
            "notes": [
              "32% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 46,
            "notes": [
              "18% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 206,
        "notes": [
          "75% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -51,
        "notes": [
          "(18%) margin",
          "+3pp Y/Y"
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
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +42%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +44%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +42%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +40%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
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
                  "占收入 50%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 32%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 18%",
                  "同比 (1 个百分点)"
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
              "利润率 75%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (18%)",
              "同比 +3 个百分点"
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
            "label": "美元净留存率",
            "notes": [
              "同比 (3 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "large_customers",
            "label": "客户 > $100K",
            "notes": [
              "同比 +44%"
            ]
          },
          {
            "id": "direct_customers",
            "label": "直接客户",
            "notes": [
              "占收入"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "122",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "122%",
        "basis": "unspecified",
        "notes": [
          "(3pp) Y/Y"
        ],
        "quote": "DBNR 122% (3pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1184,
            164,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "162086",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "162,086",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Customers 162,086 +16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1184,
            570,
            164
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "2042",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,042",
        "basis": "unspecified",
        "notes": [
          "+44% Y/Y"
        ],
        "quote": "> $100K 2,042 +44% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1184,
            570,
            164
          ]
        }
      },
      {
        "id": "direct_customers",
        "label": "Direct customers",
        "value": "87",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "87%",
        "basis": "unspecified",
        "notes": [
          "of revenue"
        ],
        "quote": "Direct customers 87% of revenue",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1184,
            570,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "cloudflare-q4-fy23",
    "company": "Cloudflare",
    "period": "Q4 FY23",
    "periodNote": "Quarter ended Dec. 31, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 362,
      "notes": [
        "+32% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 188,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 101,
          "notes": [
            "+38% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 46,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 27,
          "notes": [
            "+36% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 83
      },
      "operatingExpenses": {
        "total": 322,
        "notes": [
          "Source rounds each expense independently; displayed components sum to $321M."
        ],
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 165,
            "notes": [
              "46% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 96,
            "notes": [
              "27% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 60,
            "notes": [
              "17% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 279,
        "notes": [
          "77% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -43,
        "notes": [
          "(12%) margin",
          "+7pp Y/Y"
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
        "value": "115",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "115%",
        "basis": "unspecified",
        "notes": [
          "(7pp) Y/Y"
        ],
        "quote": "DBNR\n115%\n(7pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1184,
            164,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "189000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "189K",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Customers 189K +17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1184,
            570,
            164
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "2756",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,756",
        "basis": "unspecified",
        "notes": [
          "+36% Y/Y"
        ],
        "quote": "> $100K 2,756 +36% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1184,
            570,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +32%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +38%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +36%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "notes": [
              "原图各项费用分别取整；显示分项合计为 $321M。"
            ],
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
                  "占收入 27%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 17%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "所得税"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 77%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (12%)",
              "同比 +7 个百分点"
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
            "label": "美元净留存率",
            "notes": [
              "同比 (7 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "large_customers",
            "label": "客户 > $100K",
            "notes": [
              "同比 +36%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "cloudflare-q4-fy24",
    "company": "Cloudflare",
    "period": "Q4 FY24",
    "periodNote": "Q4 FY24 · Source chart",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/cloudflare-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 460,
      "notes": [
        "+27% Y/Y",
        "Source rounded geographic revenue sums to $459M versus $460M total."
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 231,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 128,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 64,
          "notes": [
            "+39% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 36,
          "notes": [
            "+34% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 109
      },
      "operatingExpenses": {
        "total": 386,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 192,
            "notes": [
              "42% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 120,
            "notes": [
              "26% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 74,
            "notes": [
              "16% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 351,
        "notes": [
          "76% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -35,
        "notes": [
          "(8%) margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating loss and does not report net income."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "2024 财年第四季度 · 来源图",
        "revenue": {
          "notes": [
            "同比 +27%",
            "原图地区收入取整合计 $459M，总收入为 $460M。"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +39%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +34%"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (8%)",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "原图止于营业亏损，未披露净利润。"
            ]
          }
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
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 26%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "美元净留存率"
          },
          {
            "id": "customers",
            "label": "客户总数"
          },
          {
            "id": "large_customers",
            "label": "超过 $100K 的客户数"
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "111",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "111%",
        "basis": "unspecified",
        "notes": [
          "(4pp) Y/Y"
        ],
        "quote": "DBNR 111% (4pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1155,
            164,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "237000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "237K",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Customers 237K +20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1152,
            570,
            164
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "3497",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,497",
        "basis": "unspecified",
        "notes": [
          "+27% Y/Y"
        ],
        "quote": "Customers > $100K 3,497 +27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1152,
            570,
            164
          ]
        }
      }
    ]
  }
]);
})(window);
