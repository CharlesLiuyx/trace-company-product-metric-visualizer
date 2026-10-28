/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "docusign-q4-fy23",
    "company": "DocuSign",
    "period": "Q4 FY23",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 1,
    "sourceImage": "input/processed/docusign-q4-fy23.png",
    "roundingTolerance": 1.4,
    "revenue": {
      "total": 660,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 644,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 16,
          "notes": [
            "(5%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 137,
        "notes": []
      },
      "operatingExpenses": {
        "total": 522,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 305,
            "notes": [
              "46% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 126,
            "notes": [
              "19% of revenue",
              "Unchanged"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 92,
            "notes": [
              "14% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.3,
            "notes": []
          }
        ],
        "notes": [
          "Source rounded expense components total $523.3M; the printed total is $522M."
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax not reported"
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
        "value": 522,
        "notes": [
          "79% margin",
          "+2pp Y/Y",
          "Revenue less cost of revenue is $523M; Source prints $522M."
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.3,
        "notes": [
          "(0%) margin",
          "+4pp Y/Y"
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
        "id": "billings",
        "label": "Billings",
        "value": "739",
        "literal": "$739M",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Billings $739M (+10% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1198,
            208,
            150
          ]
        }
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "107",
        "literal": "107%",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(12pp) Y/Y"
        ],
        "quote": "NRR 107% ((12pp) Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            254,
            1198,
            211,
            150
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1360000",
        "literal": "1.36M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Customers 1.36M (+16% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            479,
            1227,
            465,
            51
          ]
        }
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "211000",
        "literal": "211K",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y"
        ],
        "quote": "Enterprise 211K (+24% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            479,
            1278,
            465,
            51
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
            "同比 +14%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (5%)"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 46%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比不变"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": []
              }
            ],
            "notes": [
              "原图费用分项合计为 $523.3M，总额标为 $522M。"
            ]
          },
          "tax": {
            "label": "税费未披露"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 +2 个百分点",
              "收入减收入成本为 $523M；原图毛利润标为 $522M。"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (0%)",
              "同比 +4 个百分点"
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
            "id": "billings",
            "label": "账单额",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "nrr",
            "label": "NRR",
            "notes": [
              "同比 (12 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +24%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "docusign-q1-fy27",
    "company": "DocuSign",
    "period": "Q1 FY27",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q1-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 830,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 811,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 19,
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
        "value": 171
      },
      "operatingExpenses": {
        "total": 548,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 296,
            "notes": [
              "36% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 160,
            "notes": [
              "19% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 92,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 40
      }
    },
    "otherIncome": {
      "total": 6,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 6
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
        "value": 659,
        "notes": [
          "79% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 111,
        "notes": [
          "13% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 78,
        "notes": [
          "9% margin",
          "(0pp) Y/Y",
          "Operating profit less tax plus interest sums to $77M; the source chart reports $78M net profit due to rounded line items."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +9%"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 36%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (1 个百分点)"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "docusign-q4-fy26",
    "company": "DocuSign",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q4-fy26.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 837,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 819,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 18,
          "notes": [
            "(3%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 170
      },
      "operatingExpenses": {
        "total": 580,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 306,
            "notes": [
              "37% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 168,
            "notes": [
              "20% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 106,
            "notes": [
              "13% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 11
      }
    },
    "otherIncome": {
      "total": 14,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 14
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
        "value": 667,
        "notes": [
          "80% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 88,
        "notes": [
          "10% margin",
          "+3pp Y/Y",
          "Gross profit less operating expenses sums to $87M; the source chart reports $88M operating profit due to rounded line items."
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 90,
        "notes": [
          "11% margin",
          "+0pp Y/Y",
          "Operating profit less tax plus interest sums to $91M; the source chart reports $90M net profit due to rounded line items."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (3%)"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 37%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 80%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "docusign-q2-fy27",
    "company": "DocuSign",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q2-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 876,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 854,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 22,
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
        "value": 178
      },
      "operatingExpenses": {
        "total": 580,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 314,
            "notes": [
              "36% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 164,
            "notes": [
              "19% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 103,
            "notes": [
              "12% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source rounded components sum to $581M while the reported total is $580M."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 47
      }
    },
    "otherIncome": {
      "total": 7,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 7
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
        "value": 698,
        "notes": [
          "80% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 118,
        "notes": [
          "13% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 78,
        "notes": [
          "9% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
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
                "label": "销售与市场",
                "notes": [
                  "占收入 36%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (0 个百分点)"
                ]
              }
            ],
            "notes": [
              "来源四舍五入后的分项合计为 $581M，总额报告为 $580M。"
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
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
              "利润率 80%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 +1 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +7%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "1900000",
        "literal": "1.9M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Customers 1.9M (+10% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            169,
            1208,
            413,
            40
          ]
        }
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "289000",
        "literal": "289K",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Enterprise 289K (+7% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            184,
            1255,
            393,
            38
          ]
        }
      }
    ]
  },
  {
    "key": "docusign-q2-fy26",
    "company": "DocuSign",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 801,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 784,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 16,
          "notes": [
            "(13%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 165
      },
      "operatingExpenses": {
        "total": 570,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 305,
            "notes": [
              "38% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 170,
            "notes": [
              "21% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 95,
            "notes": [
              "12% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 13
      }
    },
    "otherIncome": {
      "total": 11,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 11
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
        "value": 635,
        "notes": [
          "79% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 65,
        "notes": [
          "8% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 63,
        "notes": [
          "8% margin",
          "(113pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "billings",
        "label": "Billings",
        "value": "818",
        "unit": "M",
        "currency": "USD",
        "literal": "$818M",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Billings $818M +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            32,
            1163,
            209,
            148
          ]
        },
        "comparison": "eq",
        "basis": "unspecified"
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "102",
        "unit": "%",
        "currency": null,
        "literal": "102%",
        "notes": [
          "+1pp Q/Q"
        ],
        "quote": "NRR 102% +1pp Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            255,
            1163,
            210,
            148
          ]
        },
        "comparison": "eq",
        "basis": "unspecified"
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1740000",
        "unit": "count",
        "currency": null,
        "literal": "1.74M",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Customers 1.74M (+9% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            510,
            1203,
            405,
            35
          ]
        },
        "comparison": "eq",
        "basis": "unspecified"
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "271000",
        "unit": "count",
        "currency": null,
        "literal": "271K",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Enterprise 271K (+7% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            510,
            1243,
            405,
            35
          ]
        },
        "comparison": "eq",
        "basis": "unspecified"
      }
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 7 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "professional_services",
              "label": [
                "专业",
                "服务"
              ],
              "notes": [
                "同比 (13%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": [
              "收入",
              "成本"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "S&M（销售与市场）",
                "notes": [
                  "占收入 38%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "R&D（研发）",
                "notes": [
                  "占收入 21%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "G&A（管理）",
                "notes": [
                  "占收入 12%",
                  "同比 +0 个百分点"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 +0 个百分点"
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
              "同比 (113 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "billings",
            "label": "账单金额",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "nrr",
            "label": "净收入留存率",
            "notes": [
              "环比 +1 个百分点"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +7%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "docusign-q4-fy24",
    "company": "DocuSign",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 3,
    "sourceImage": "input/processed/docusign-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 712,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 696,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 17,
          "notes": [
            "+5% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 148
      },
      "operatingExpenses": {
        "total": 555,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 300,
            "notes": [
              "42% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 152,
            "notes": [
              "21% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 103,
            "notes": [
              "14% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.088,
            "valueText": "($88K)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 3
      }
    },
    "otherIncome": {
      "total": 20,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 20
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
        "value": 564,
        "notes": [
          "79% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 10,
        "notes": [
          "1% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 27,
        "notes": [
          "4% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "billings",
        "label": "Billings",
        "value": "833",
        "unit": "M",
        "currency": "USD",
        "literal": "$833M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Billings $833M +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            32,
            1198,
            210,
            149
          ]
        }
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "98",
        "unit": "%",
        "currency": null,
        "literal": "98%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(9pp) Y/Y"
        ],
        "quote": "NRR 98% (9pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            255,
            1198,
            210,
            149
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1510000",
        "unit": "count",
        "currency": null,
        "literal": "1.51M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Customers 1.51M +12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            478,
            1198,
            466,
            74
          ]
        }
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "242000",
        "unit": "count",
        "currency": null,
        "literal": "242K",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Enterprise 242K +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            478,
            1272,
            466,
            75
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
            "同比 +8%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +5%"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 42%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 21%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +3 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "billings",
            "label": "账单额",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "nrr",
            "label": "NRR",
            "notes": [
              "同比 (9 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "docusign-q4-fy25",
    "company": "DocuSign",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q4-fy25.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 776,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 758,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 18,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 160
      },
      "operatingExpenses": {
        "total": 556,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 301,
            "notes": [
              "39% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 155,
            "notes": [
              "20% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 99,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source rounded components total $555M versus printed $556M; retained as printed."
        ]
      }
    },
    "otherIncome": {
      "total": 23,
      "items": [
        {
          "id": "tax",
          "label": "Tax benefit",
          "value": 16,
          "notes": [
            "Source prints Tax $16M as a green inflow."
          ]
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 7
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
        "value": 616,
        "notes": [
          "79% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 60,
        "notes": [
          "8% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 83,
        "notes": [
          "11% margin",
          "+7pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "revenue": {
          "items": [
            {
              "id": "subscription",
              "label": "订阅"
            },
            {
              "id": "professional_services",
              "label": "专业服务"
            }
          ]
        },
        "costs": {
          "operatingExpenses": {
            "notes": [
              "原图四舍五入分项合计 $555M，总额为 $556M，均按原图保留。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "billings",
            "label": "账单额"
          },
          {
            "id": "nrr",
            "label": "净留存率"
          },
          {
            "id": "customers",
            "label": "客户"
          },
          {
            "id": "enterprise",
            "label": "企业客户"
          }
        ],
        "otherIncome": {
          "items": [
            {
              "id": "tax",
              "label": "税收收益"
            },
            {
              "id": "interest",
              "label": "利息"
            }
          ]
        }
      }
    },
    "operatingMetrics": [
      {
        "id": "billings",
        "label": "Billings",
        "value": "923",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$923M",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Billings $923M +11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            32,
            1162,
            210,
            150
          ]
        }
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "101",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "101%",
        "basis": "unspecified",
        "notes": [
          "+1pp Q/Q"
        ],
        "quote": "NRR 101% +1pp Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            255,
            1162,
            210,
            150
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1660000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1.66M",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Customers 1.66M (+10% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            510,
            1205,
            405,
            35
          ]
        }
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "260000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "260K",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Enterprise 260K (+8% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            530,
            1245,
            370,
            35
          ]
        }
      }
    ]
  },
  {
    "key": "docusign-q1-fy24",
    "company": "DocuSign",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 661,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 639,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 22,
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
        "value": 136
      },
      "operatingExpenses": {
        "total": 530,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 281,
            "notes": [
              "42% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 115,
            "notes": [
              "19% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 105,
            "notes": [
              "16% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 29
          }
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
        "value": 525,
        "notes": [
          "79% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -5,
        "notes": [
          "(1%) margin",
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
        "id": "billings",
        "label": "Billings",
        "value": "675",
        "unit": "M",
        "literal": "$675M",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Billings $675M (+10% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1198,
            208,
            150
          ]
        }
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "105",
        "unit": "%",
        "literal": "105%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(9pp) Y/Y"
        ],
        "quote": "NRR 105% (9pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            254,
            1198,
            212,
            150
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1400000",
        "unit": "count",
        "literal": "1.4M",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers 1.4M (+13% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            521,
            1233,
            391,
            39
          ]
        }
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "220000",
        "unit": "count",
        "literal": "220K",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Enterprise 220K (+21% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            521,
            1274,
            391,
            39
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +12%"
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
            "id": "cost_of_revenue",
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 42%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润"
          }
        },
        "operatingMetrics": [
          {
            "id": "billings",
            "label": "账单金额",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "nrr",
            "label": "净留存率",
            "notes": [
              "同比 (9 个百分点)"
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
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +21%"
            ]
          }
        ],
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 4 月"
      }
    }
  },
  {
    "company": "DocuSign",
    "period": "Q3 FY24",
    "periodNote": "Ending Oct. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "key": "docusign-q3-fy24",
    "sourceImage": "input/processed/docusign-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 700,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 682,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 18,
          "notes": [
            "(16%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "operatingExpenses": {
        "total": 538,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 292,
            "notes": [
              "42% of revenue",
              "(8pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 137,
            "notes": [
              "20% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 108,
            "notes": [
              "15% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": []
          }
        ]
      },
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 143,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 19,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 3,
          "notes": []
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 16,
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
        "value": 558,
        "notes": [
          "80% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 20,
        "notes": [
          "3% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 39,
        "notes": [
          "6% margin",
          "+10pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "billings",
        "label": "Billings",
        "value": "692",
        "literal": "$692M",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Billings $692M (+5% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1198,
            208,
            150
          ]
        }
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "100",
        "literal": "100%",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(8pp) Y/Y"
        ],
        "quote": "NRR 100% ((8pp) Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            255,
            1198,
            210,
            150
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1470000",
        "literal": "1.47M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Customers 1.47M (+11% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            521,
            1241,
            378,
            33
          ]
        }
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "233000",
        "literal": "233K",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Enterprise 233K (+15% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            531,
            1281,
            365,
            33
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2023 年 10 月",
        "operatingMetrics": [
          {
            "id": "billings",
            "label": "账单金额",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "nrr",
            "label": "净留存率",
            "notes": [
              "同比 (8 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +15%"
            ]
          }
        ],
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (16%)"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 42%",
                  "同比 (8 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": []
              }
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "tax_benefit",
              "label": "税收收益",
              "notes": []
            },
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
              "利润率 80%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 +10 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "docusign-q1-fy25",
    "company": "DocuSign",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 710,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 691,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 18,
          "notes": [
            "(18%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 149
      },
      "operatingExpenses": {
        "total": 538,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 282,
            "notes": [
              "40% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 134,
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 92,
            "notes": [
              "13% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 29
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 3
      }
    },
    "otherIncome": {
      "total": 14,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 14
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
        "value": 560,
        "notes": [
          "79% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 23,
        "notes": [
          "3% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 34,
        "notes": [
          "5% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "billings",
        "label": "Billings",
        "value": "710",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$710M",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Billings $710M +5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1198,
            210,
            150
          ]
        }
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "99",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "99%",
        "basis": "unspecified",
        "notes": [
          "(6pp) Y/Y"
        ],
        "quote": "NRR 99% (6pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            255,
            1198,
            211,
            150
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1560000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1.56M",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Customers 1.56M +11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            478,
            1198,
            466,
            85
          ]
        }
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "248000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "248K",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Enterprise 248K +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            478,
            1283,
            466,
            65
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 4 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (18%)"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 40%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +5 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "billings",
            "label": "账单金额",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "nrr",
            "label": "NRR",
            "notes": [
              "同比 (6 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "docusign-q2-fy24",
    "company": "DocuSign",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 688,
      "notes": [
        "+11% Y/Y",
        "Source rounded revenue components sum to $687M; reported revenue is $688M."
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 669,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 18,
          "notes": [
            "+8% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 146,
        "notes": []
      },
      "operatingExpenses": {
        "total": 535,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 295,
            "notes": [
              "43% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 136,
            "notes": [
              "20% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 104,
            "notes": [
              "15% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": []
          }
        ],
        "notes": [
          "Source rounded expense components sum to $536M; reported expenses are $535M."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 15,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 16,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 16,
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
        "value": 542,
        "notes": [
          "79% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 7,
        "notes": [
          "1% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 7,
        "notes": [
          "1% margin",
          "+8pp Y/Y",
          "Source operating profit plus interest less tax sums to $8M; reported net profit is $7M."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "billings",
        "label": "Billings",
        "value": "711",
        "unit": "M",
        "currency": "USD",
        "literal": "$711M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Billings $711M (+10% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1199,
            208,
            148
          ]
        }
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "102",
        "unit": "%",
        "currency": null,
        "literal": "102%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(8pp) Y/Y"
        ],
        "quote": "NRR 102% ((8pp) Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            255,
            1199,
            210,
            148
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1400000",
        "unit": "count",
        "currency": null,
        "literal": "1.4M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers 1.4M (+13% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            478,
            1199,
            466,
            76
          ]
        }
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "226000",
        "unit": "count",
        "currency": null,
        "literal": "226K",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "Enterprise 226K (+18% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            478,
            1275,
            466,
            73
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 7 月",
        "operatingMetrics": [
          {
            "id": "billings",
            "label": "开票金额",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "nrr",
            "label": "NRR",
            "notes": [
              "同比 (8 个百分点)"
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
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +18%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "docusign-q3-fy23",
    "company": "DocuSign",
    "period": "Q3 FY23",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 645,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 624,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 21,
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
        "value": 130
      },
      "operatingExpenses": {
        "total": 543,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 314,
            "notes": [
              "49% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 116,
            "notes": [
              "19% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 85,
            "notes": [
              "13% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 28
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 516,
        "notes": [
          "80% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -27,
        "notes": [
          "(4%) margin",
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
        "id": "billings",
        "label": "Billings",
        "value": "659",
        "unit": "M",
        "currency": "USD",
        "literal": "$659M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Billings\n$659M\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1198,
            211,
            150
          ]
        }
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "108",
        "unit": "%",
        "currency": null,
        "literal": "108%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(13pp) Y/Y"
        ],
        "quote": "NRR\n108%\n(13pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            255,
            1198,
            211,
            150
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1320000",
        "unit": "count",
        "currency": null,
        "literal": "1.32M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Customers\n1.32M\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            478,
            1198,
            466,
            85
          ]
        }
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "202000",
        "unit": "count",
        "currency": null,
        "literal": "202K",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Enterprise\n202K\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            478,
            1280,
            466,
            68
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "professional_services",
              "label": [
                "专业",
                "服务"
              ],
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
                "label": "销售与市场",
                "notes": [
                  "占收入 49%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 80%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 (4 个百分点)"
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
            "id": "billings",
            "label": "账单金额",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "nrr",
            "label": "净留存率",
            "notes": [
              "同比 (13 个百分点)"
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
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +6%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "docusign-q3-fy26",
    "company": "DocuSign",
    "period": "Q3 FY26",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q3-fy26.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 818,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 801,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 17,
          "notes": [
            "(14%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 171
      },
      "operatingExpenses": {
        "total": 562,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 297,
            "notes": [
              "36% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 168,
            "notes": [
              "20% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 98,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 12
      }
    },
    "otherIncome": {
      "total": 11,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 11
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
        "value": 648,
        "notes": [
          "79% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 85,
        "notes": [
          "10% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 85,
        "notes": [
          "10% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2025 年 10 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (14%)"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 36%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "billings",
            "label": "账单额",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "nrr",
            "label": "NRR",
            "notes": [
              "环比持平"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +8%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "billings",
        "label": "Billings",
        "value": "829",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$829M",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Billings\n$829M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            32,
            1163,
            210,
            148
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "102",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "102%",
        "notes": [
          "Flat Q/Q"
        ],
        "quote": "NRR\n102%\nFlat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            255,
            1163,
            210,
            148
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1780000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1.78M",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Customers 1.78M (+9% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            478,
            1163,
            466,
            74
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "276000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "276K",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Enterprise 276K (+8% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            478,
            1237,
            466,
            74
          ]
        },
        "basis": "unspecified"
      }
    ]
  },
  {
    "key": "docusign-q3-fy25",
    "company": "DocuSign",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 755,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 735,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 20,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 157
      },
      "operatingExpenses": {
        "total": 539,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 291,
            "notes": [
              "38% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 151,
            "notes": [
              "20% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 98,
            "notes": [
              "13% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 9
      }
    },
    "otherIncome": {
      "total": 13,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 13
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
        "value": 598,
        "notes": [
          "79% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 59,
        "notes": [
          "8% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 62,
        "notes": [
          "8% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 10 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +11%"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 38%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +3 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "billings",
            "label": "账单金额",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "nrr",
            "label": "NRR",
            "notes": [
              "环比 +1 个百分点"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +10%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "billings",
        "label": "Billings",
        "value": "752",
        "literal": "$752M",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Billings $752M (+9% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            32,
            1162,
            210,
            150
          ]
        }
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "100",
        "literal": "100%",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1pp Q/Q"
        ],
        "quote": "NRR 100% (+1pp Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            255,
            1162,
            210,
            150
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1630000",
        "literal": "1.63M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Customers 1.63M (+11% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            478,
            1162,
            465,
            150
          ]
        }
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "256000",
        "literal": "256K",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Enterprise 256K (+10% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            478,
            1162,
            465,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "docusign-q2-fy25",
    "company": "DocuSign",
    "period": "Q2 FY25",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q2-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 736,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 717,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 19,
          "notes": [
            "+2% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 155,
        "notes": []
      },
      "operatingExpenses": {
        "total": 523,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 287,
            "notes": [
              "39% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 148,
            "notes": [
              "20% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 87,
            "notes": [
              "12% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": []
          }
        ]
      }
    },
    "otherIncome": {
      "total": 830,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 14,
          "notes": []
        },
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 816,
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
        "value": 581,
        "notes": [
          "79% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 58,
        "notes": [
          "8% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 888,
        "notes": []
      }
    },
    "operatingMetrics": [
      {
        "id": "billings",
        "label": "Billings",
        "value": "725",
        "literal": "$725M",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Billings $725M (+2% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1198,
            210,
            150
          ]
        }
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "99",
        "literal": "99%",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(3pp) Y/Y"
        ],
        "quote": "NRR 99% ((3pp) Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            255,
            1198,
            210,
            150
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1600000",
        "literal": "1.60M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Customers 1.60M (+11% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            520,
            1238,
            385,
            36
          ]
        }
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "253000",
        "literal": "253K",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Enterprise 253K (+12% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            530,
            1280,
            365,
            36
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +2%"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 39%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": []
              }
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "interest",
              "label": "利息",
              "notes": []
            },
            {
              "id": "tax_benefit",
              "label": "税收收益",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": []
          }
        },
        "operatingMetrics": [
          {
            "id": "billings",
            "label": "账单额",
            "notes": [
              "同比 +2%"
            ]
          },
          {
            "id": "nrr",
            "label": "净留存率",
            "notes": [
              "同比 (3 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "docusign-q1-fy26",
    "company": "DocuSign",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/docusign-q1-fy26.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 764,
      "notes": [
        "+8% Y/Y",
        "Source rounded components total $763M versus reported $764M."
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 746,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional Services",
          "value": 17,
          "notes": [
            "(4%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 157
      },
      "operatingExpenses": {
        "total": 546,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 296,
            "notes": [
              "39% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 159,
            "notes": [
              "21% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 90,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source rounded expense components total $545M versus reported $546M."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2
      }
    },
    "otherIncome": {
      "total": 14,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 14
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
        "value": 606,
        "notes": [
          "79% margin",
          "+0pp Y/Y",
          "Source gross profit plus cost of revenue totals $763M versus revenue $764M."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 60,
        "notes": [
          "8% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 72,
        "notes": [
          "9% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 4 月",
        "revenue": {
          "notes": [
            "同比 +8%",
            "来源分项合计 $763M，收入原值 $764M。"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (4%)"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 39%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 21%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
                ]
              }
            ],
            "notes": [
              "来源费用分项合计 $545M，总额原值 $546M。"
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
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
              "利润率 79%",
              "同比 +0 个百分点",
              "毛利加收入成本合计 $763M，收入原值 $764M。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 +5 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "billings",
            "label": "账单额",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "id": "nrr",
            "label": "NRR",
            "notes": [
              "环比持平"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "enterprise",
            "label": "企业客户",
            "notes": [
              "同比 +8%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "billings",
        "label": "Billings",
        "value": "0.000740",
        "unit": "M",
        "currency": "USD",
        "literal": "$740",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "Billings $740 +4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1162,
            210,
            150
          ]
        }
      },
      {
        "id": "nrr",
        "label": "NRR",
        "value": "101",
        "unit": "%",
        "currency": null,
        "literal": "101%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Q/Q"
        ],
        "quote": "NRR 101% Flat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            255,
            1162,
            210,
            150
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "1700000",
        "unit": "count",
        "currency": null,
        "literal": "1.7M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Customers 1.7M +10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            527,
            1202,
            375,
            35
          ]
        }
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": "268000",
        "unit": "count",
        "currency": null,
        "literal": "268K",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Enterprise 268K +8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            537,
            1245,
            353,
            35
          ]
        }
      }
    ]
  }
]);
})(window);
