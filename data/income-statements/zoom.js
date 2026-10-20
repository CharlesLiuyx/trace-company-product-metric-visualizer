/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "zoom-q1-fy24",
    "company": "Zoom",
    "period": "Q1 FY24",
    "periodNote": "Ending April 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1105,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 632,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 473,
          "notes": [
            "(8%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 264
      },
      "operatingExpenses": {
        "total": 832,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 423,
            "notes": [
              "38% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 209,
            "notes": [
              "19% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 200,
            "notes": [
              "18% of revenue",
              "+7pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 28
      }
    },
    "otherIncome": {
      "total": 33,
      "items": [
        {
          "id": "investments",
          "label": "Investment gains",
          "value": 2
        },
        {
          "id": "other",
          "label": "Other income",
          "value": 31
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
        "value": 841,
        "notes": [
          "76% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 10,
        "notes": [
          "1% margin",
          "(16pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 15,
        "notes": [
          "1% margin",
          "(9pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "rpo",
        "label": "RPO",
        "literal": "$3.5B",
        "value": "3.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "RPO\n$3.5B\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            52,
            1137,
            145,
            168
          ]
        }
      },
      {
        "id": "dbne",
        "label": "DBNE",
        "literal": "112%",
        "value": "112",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "TTM"
        ],
        "quote": "DBNE\n112%\nTTM",
        "anchor": {
          "type": "image-box",
          "box": [
            202,
            1138,
            142,
            164
          ]
        }
      },
      {
        "id": "enterprise_customers",
        "label": "Enterprise Customers",
        "literal": "216K",
        "value": "216000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Enterprise Customers +9% Y/Y to 216K",
        "anchor": {
          "type": "image-box",
          "box": [
            350,
            1138,
            646,
            86
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "literal": "3,580",
        "value": "3580",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Customers > $100K +23% Y/Y to 3,580",
        "anchor": {
          "type": "image-box",
          "box": [
            350,
            1224,
            646,
            78
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
            "同比 +3%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
              "notes": [
                "同比 (8%)"
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
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 18%",
                  "同比 +7 个百分点"
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
              "id": "investments",
              "label": "投资收益"
            },
            {
              "id": "other",
              "label": "其他收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 (16 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 (9 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "rpo",
            "label": "剩余履约义务",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "dbne",
            "label": "美元口径净扩张率",
            "notes": [
              "过去 12 个月"
            ]
          },
          {
            "id": "enterprise_customers",
            "label": "企业客户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "customers_100k",
            "label": ">$100K 客户",
            "notes": [
              "同比 +23%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "zoom-q1-fy27",
    "company": "Zoom",
    "period": "Q1 FY27",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q1-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1239,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 756,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 483,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 274
      },
      "operatingExpenses": {
        "total": 654,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 330,
            "notes": [
              "27% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 228,
            "notes": [
              "18% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 96,
            "notes": [
              "8% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 106
      }
    },
    "otherIncome": {
      "total": 221,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 152
        },
        {
          "id": "other",
          "label": "Other",
          "value": 69
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
        "value": 965,
        "notes": [
          "78% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 310,
        "notes": [
          "25% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 426,
        "notes": [
          "34% margin",
          "+13pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
              "notes": [
                "同比 +3%"
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
                  "占收入 27%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
              "id": "investments",
              "label": "投资"
            },
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
              "利润率 78%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 25%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 34%",
              "同比 +13 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "zoom-q4-fy26",
    "company": "Zoom",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q4-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1247,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 757,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 490,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 296
      },
      "operatingExpenses": {
        "total": 701,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 360,
            "notes": [
              "29% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 223,
            "notes": [
              "18% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 119,
            "notes": [
              "10% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 190
      }
    },
    "otherIncome": {
      "total": 613,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 532
        },
        {
          "id": "other",
          "label": "Other",
          "value": 81
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
        "value": 951,
        "notes": [
          "76% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 250,
        "notes": [
          "20% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 674,
        "notes": [
          "54% margin",
          "+23pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
              "notes": [
                "同比 +3%"
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
                  "占收入 29%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
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
              "id": "investments",
              "label": "投资"
            },
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
              "利润率 76%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 54%",
              "同比 +23 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "zoom-q3-fy26",
    "company": "Zoom",
    "period": "Q3 FY26",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q3-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1230,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 741,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 488,
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
        "value": 272
      },
      "operatingExpenses": {
        "total": 648,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 343,
            "notes": [
              "28% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 210,
            "notes": [
              "17% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 95,
            "notes": [
              "8% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 182
      }
    },
    "otherIncome": {
      "total": 484,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 406
        },
        {
          "id": "other",
          "label": "Other",
          "value": 78
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
        "value": 958,
        "notes": [
          "78% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 310,
        "notes": [
          "25% margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 613,
        "notes": [
          "50% margin",
          "+32pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2025 年 10 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
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
                  "占收入 28%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
              "id": "investments",
              "label": "投资"
            },
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
              "利润率 78%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 25%",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 50%",
              "同比 +32 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "zoom-q2-fy27",
    "company": "Zoom",
    "period": "Q2 FY27",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q2-fy27.png",
    "roundingTolerance": 1.5,
    "notes": [
      "Amounts and captions are transcribed from the source infographic; displayed totals may differ from sums because each amount is independently rounded.",
      "RPO",
      "$4.5B",
      "+14% Y/Y",
      "DBNE",
      "99%",
      "TTM",
      "Customers > $100K",
      "+8% Y/Y to 4,625",
      "Montly Churn",
      "2.9%",
      "Flat Y/Y",
      "Q2 FY27",
      "Ending July 2026",
      "RPO = Remaining Performance Obligation",
      "DBNE = Dollar Based Net Expansion"
    ],
    "revenue": {
      "total": 1277,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 788,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 490,
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
        "value": 292,
        "notes": []
      },
      "operatingExpenses": {
        "total": 671,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 331,
            "notes": [
              "26% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rd",
            "label": "R&D",
            "value": 243,
            "notes": [
              "19% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 98,
            "notes": [
              "8% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 453,
        "notes": []
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 986,
        "notes": [
          "77% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 314,
        "notes": [
          "25% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1542,
        "notes": [
          "121% margin",
          "+91pp Y/Y"
        ]
      }
    },
    "otherIncome": {
      "total": 1680,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 1614,
          "notes": []
        },
        {
          "id": "other",
          "label": "Other",
          "value": 66,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "notes": [
          "Amounts和captions are transcribed from the source infographic；displayed totals may differ from sums because each amount is independently rounded.",
          "RPO",
          "$4.5B",
          "同比 +14%",
          "DBNE",
          "99%",
          "过去十二个月",
          "年收入超过 $100K 的客户",
          "同比 +8%，至 4,625",
          "月流失率",
          "2.9%",
          "同比持平",
          "2027 财年第二季度",
          "截至 2026 年 7 月",
          "RPO = 剩余履约义务",
          "DBNE = 金额净扩张率"
        ],
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "label": "企业",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "label": "在线",
              "notes": [
                "同比 +1%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售与市场",
                "notes": [
                  "占收入 26%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": []
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 77%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 25%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 121%",
              "同比 +91 个百分点"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "投资收益",
              "notes": []
            },
            {
              "label": "其他",
              "notes": []
            }
          ]
        },
        "otherExpenses": {
          "items": []
        }
      }
    }
  },
  {
    "key": "zoom-q1-fy25",
    "company": "Zoom",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1141,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 666,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 475,
          "notes": [
            "+0% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 273,
        "notes": []
      },
      "operatingExpenses": {
        "total": 665,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 348,
            "notes": [
              "30% of revenue",
              "(8pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 206,
            "notes": [
              "18% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 111,
            "notes": [
              "10% of revenue",
              "(8pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 76,
        "notes": []
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 868,
        "notes": [
          "76% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 203,
        "notes": [
          "18% margin",
          "+17pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 216,
        "notes": [
          "19% margin",
          "+18pp Y/Y"
        ]
      }
    },
    "otherIncome": {
      "total": 89,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 72,
          "notes": []
        },
        {
          "id": "investments",
          "label": "Investments",
          "value": 17,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "operatingMetrics": [
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.6",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.6B",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "RPO\n$3.6B\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            102,
            1137,
            145,
            167
          ]
        }
      },
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "99",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "99%",
        "basis": "unspecified",
        "notes": [
          "TTM"
        ],
        "quote": "DBNE\n99%\nTTM",
        "anchor": {
          "type": "image-box",
          "box": [
            253,
            1138,
            141,
            165
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers > $100K",
        "value": "3883",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,883",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Customers > $100K\n+8% Y/Y to 3,883",
        "anchor": {
          "type": "image-box",
          "box": [
            401,
            1138,
            332,
            165
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
            "同比 +3%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
              "notes": [
                "同比 +0%"
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
                  "占收入 30%",
                  "同比 (8 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (8 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费",
            "notes": []
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +17 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 19%",
              "同比 +18 个百分点"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": []
            },
            {
              "id": "investments",
              "label": "投资",
              "notes": []
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "过去十二个月"
            ]
          },
          {
            "id": "customers",
            "label": "年收入超过 $100K 的客户",
            "notes": [
              "同比 +8%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "zoom-q1-fy26",
    "company": "Zoom",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1175,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 705,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 470,
          "notes": [
            "(1%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 278
      },
      "operatingExpenses": {
        "total": 655,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 347,
            "notes": [
              "30% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 205,
            "notes": [
              "17% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 102,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 61
      }
    },
    "otherIncome": {
      "total": 88,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 88
        }
      ]
    },
    "otherExpenses": {
      "total": 14,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 14
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 896,
        "notes": [
          "76% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 242,
        "notes": [
          "21% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 255,
        "notes": [
          "22% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.9",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.9B",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "RPO\n$3.9B\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            18,
            1117,
            145,
            167
          ]
        }
      },
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "98",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "98%",
        "basis": "unspecified",
        "notes": [
          "TTM"
        ],
        "quote": "DBNE\n98%\nTTM",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1117,
            142,
            167
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers > $100K",
        "value": "4192",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "4,192",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Customers > $100K\n4,192\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            318,
            1119,
            331,
            165
          ]
        }
      },
      {
        "id": "online_churn",
        "label": "Online Churn",
        "value": "2.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "2.8%",
        "basis": "unspecified",
        "notes": [
          "(0.4pp) Y/Y"
        ],
        "quote": "Online Churn\n2.8%\n(0.4pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1119,
            332,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 4 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
              "notes": [
                "同比 (1%)"
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
                  "占收入 30%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "investments",
              "label": "投资"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 +3 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "近 12 个月"
            ]
          },
          {
            "id": "customers",
            "label": "客户 > $100K",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "online_churn",
            "label": "线上流失率",
            "notes": [
              "同比 (0.4 个百分点)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "zoom-q2-fy24",
    "company": "Zoom",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1139,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 660,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 479,
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
        "value": 267,
        "notes": []
      },
      "operatingExpenses": {
        "total": 695,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 373,
            "notes": [
              "33% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rd",
            "label": "R&D",
            "value": 192,
            "notes": [
              "17% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 129,
            "notes": [
              "11% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 68,
        "notes": []
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 872,
        "notes": [
          "77% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 178,
        "notes": [
          "16% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 182,
        "notes": [
          "16% margin",
          "+12pp Y/Y"
        ]
      }
    },
    "otherIncome": {
      "total": 72,
      "items": [
        {
          "id": "investments",
          "label": "Investment gains",
          "value": 31,
          "notes": []
        },
        {
          "id": "other",
          "label": "Other income",
          "value": 41,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "operatingMetrics": [
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.5",
        "unit": "B",
        "currency": "USD",
        "literal": "$3.5B",
        "comparison": "eq",
        "notes": [
          "+9% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "RPO\n$3.5B\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            873,
            110,
            128
          ]
        }
      },
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "109",
        "unit": "%",
        "currency": null,
        "literal": "109%",
        "comparison": "eq",
        "notes": [
          "TTM"
        ],
        "basis": "unspecified",
        "quote": "DBNE\n109%\nTTM",
        "anchor": {
          "type": "image-box",
          "box": [
            155,
            873,
            109,
            128
          ]
        }
      },
      {
        "id": "enterprise_customers",
        "label": "Enterprise Customers",
        "value": "218000",
        "unit": "count",
        "currency": null,
        "literal": "218K",
        "comparison": "eq",
        "notes": [
          "+7% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Enterprise Customers\n218K\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            270,
            900,
            495,
            38
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "3672",
        "unit": "count",
        "currency": null,
        "literal": "3,672",
        "comparison": "eq",
        "notes": [
          "+18% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Customers > $100K\n3,672\n+18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            270,
            939,
            495,
            39
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
            "同比 +4%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "online",
              "label": "在线",
              "notes": [
                "同比 (4%)"
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
                  "占收入 33%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费",
            "notes": []
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 77%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 +12 个百分点"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "investments",
              "label": "投资收益",
              "notes": []
            },
            {
              "id": "other",
              "label": "其他收入",
              "notes": []
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "rpo",
            "label": "剩余履约义务",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "dbne",
            "label": "金额净扩张率",
            "notes": [
              "过去十二个月"
            ]
          },
          {
            "id": "enterprise_customers",
            "label": "企业客户",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年收入超过 $100K 的客户",
            "notes": [
              "同比 +18%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "zoom-q2-fy25",
    "company": "Zoom",
    "period": "Q2 FY25",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1163,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 683,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 480,
          "notes": [
            "+0% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 285
      },
      "operatingExpenses": {
        "total": 675,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 359,
            "notes": [
              "31% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 207,
            "notes": [
              "18% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 110,
            "notes": [
              "9% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 74
      }
    },
    "otherIncome": {
      "total": 90,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 3
        },
        {
          "id": "other",
          "label": "Other",
          "value": 87
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
        "value": 877,
        "notes": [
          "75% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 202,
        "notes": [
          "17% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 219,
        "notes": [
          "19% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "operatingMetrics": [
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "过去 12 个月"
            ]
          },
          {
            "id": "customers_100k",
            "label": "年消费额超过 $100K 的客户",
            "notes": [
              "同比 +7%"
            ]
          }
        ],
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
              "notes": [
                "同比 +0%"
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
                  "占收入 31%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (2 个百分点)"
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
              "id": "investments",
              "label": "投资"
            },
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
              "利润率 75%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 19%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    },
    "operatingMetrics": [
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.8",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.8B",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "RPO\n$3.8B\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            102,
            1137,
            143,
            168
          ]
        }
      },
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "98",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "98%",
        "basis": "unspecified",
        "notes": [
          "TTM"
        ],
        "quote": "DBNE\n98%\nTTM",
        "anchor": {
          "type": "image-box",
          "box": [
            251,
            1137,
            143,
            167
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "3933",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,933",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Customers > $100K\n+7% Y/Y to 3,933",
        "anchor": {
          "type": "image-box",
          "box": [
            400,
            1138,
            333,
            165
          ]
        }
      }
    ]
  },
  {
    "key": "zoom-q2-fy26",
    "company": "Zoom",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1217,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 731,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 487,
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
        "value": 273
      },
      "operatingExpenses": {
        "total": 622,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 339,
            "notes": [
              "28% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 206,
            "notes": [
              "17% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 77,
            "notes": [
              "6% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 90
      }
    },
    "otherIncome": {
      "total": 126,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 45
        },
        {
          "id": "other",
          "label": "Other",
          "value": 81
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
        "value": 944,
        "notes": [
          "78% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 322,
        "notes": [
          "26% margin",
          "+9pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 359,
        "notes": [
          "29% margin",
          "+11pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 7 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
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
                "label": "销售与市场",
                "notes": [
                  "占收入 28%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 6%",
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
              "id": "investments",
              "label": "投资"
            },
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
              "利润率 78%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 26%",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 29%",
              "同比 +11 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "近 12 个月"
            ]
          },
          {
            "id": "large_customers",
            "label": "客户 > $100K",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "online_churn",
            "label": "线上流失率",
            "notes": [
              "同比持平"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "rpo",
        "label": "RPO",
        "value": "4.0",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$4.0B",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "RPO\n$4.0B\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            18,
            1117,
            146,
            167
          ]
        }
      },
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "98",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "98%",
        "basis": "unspecified",
        "notes": [
          "TTM"
        ],
        "quote": "DBNE\n98%\nTTM",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1118,
            143,
            165
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "4274",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "4,274",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Customers > $100K\n4,274\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            316,
            1118,
            333,
            165
          ]
        }
      },
      {
        "id": "online_churn",
        "label": "Online Churn",
        "value": "2.9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "2.9%",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Online Churn\n2.9%\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1118,
            332,
            165
          ]
        }
      }
    ]
  },
  {
    "key": "zoom-q3-fy23",
    "company": "Zoom",
    "period": "Q3 FY23",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q3-fy23.png",
    "roundingTolerance": 1.1,
    "operatingMetrics": [
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.2B",
        "basis": "unspecified",
        "notes": [
          "+32% Y/Y"
        ],
        "quote": "RPO\n$3.2B\n+32% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            52,
            1137,
            143,
            168
          ]
        }
      },
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "117",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "117%",
        "basis": "unspecified",
        "notes": [
          "TTM"
        ],
        "quote": "DBNE\n117%\nTTM",
        "anchor": {
          "type": "image-box",
          "box": [
            202,
            1137,
            143,
            168
          ]
        }
      },
      {
        "id": "enterprise_customers",
        "label": "Enterprise Customers",
        "value": "209000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "209K",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Enterprise Customers\n209K\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            352,
            1138,
            646,
            86
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "3286",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,286",
        "basis": "unspecified",
        "notes": [
          "+31% Y/Y"
        ],
        "quote": "Customers > $100K\n3,286\n+31% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            352,
            1224,
            646,
            79
          ]
        }
      }
    ],
    "revenue": {
      "total": 1102,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "americas",
          "label": "Americas",
          "value": 774,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 182,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 146,
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
        "value": 271,
        "notes": []
      },
      "operatingExpenses": {
        "total": 765,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 428,
            "notes": [
              "39% of revenue",
              "+11pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 196,
            "notes": [
              "18% of revenue",
              "+8pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 141,
            "notes": [
              "13% of revenue",
              "+4pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 6,
        "notes": []
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 831,
        "notes": [
          "75% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 67,
        "notes": [
          "6% margin",
          "(22pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 48,
        "notes": [
          "4% margin",
          "(28pp) Y/Y"
        ]
      }
    },
    "otherExpenses": {
      "total": 12,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 7,
          "notes": []
        },
        {
          "id": "other",
          "label": "Other",
          "value": 5,
          "notes": []
        }
      ]
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "americas",
              "label": "美洲",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 (3%)"
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
                  "占收入 39%",
                  "同比 +11 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +8 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 +4 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费",
            "notes": []
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 (22 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 (28 个百分点)"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "investments",
              "label": "投资",
              "notes": []
            },
            {
              "id": "other",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "rpo",
            "label": "剩余履约义务",
            "notes": [
              "同比 +32%"
            ]
          },
          {
            "id": "dbne",
            "label": "美元口径净扩张率",
            "notes": [
              "近 12 个月"
            ]
          },
          {
            "id": "enterprise_customers",
            "label": "企业客户数",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年收入超过 $100K 的客户",
            "notes": [
              "同比 +31%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "zoom-q3-fy24",
    "company": "Zoom",
    "period": "Q3 FY24",
    "periodNote": "Ending Oct. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1137,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 661,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 476,
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
        "value": 271
      },
      "operatingExpenses": {
        "total": 696,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 374,
            "notes": [
              "33% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 196,
            "notes": [
              "17% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 125,
            "notes": [
              "11% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 45
      }
    },
    "otherIncome": {
      "total": 42,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 42
        }
      ]
    },
    "otherExpenses": {
      "total": 25,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 25
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 866,
        "notes": [
          "76% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 169,
        "notes": [
          "15% margin",
          "+9pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 141,
        "notes": [
          "12% margin",
          "+8pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2023 年 10 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
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
                  "占收入 33%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
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
              "利润率 76%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 +8 个百分点"
            ]
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
        "otherExpenses": {
          "items": [
            {
              "id": "investments",
              "label": "投资"
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "近 12 个月"
            ]
          },
          {
            "id": "enterprise_customers",
            "label": "企业客户",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年收入超过 $100K 的客户",
            "notes": [
              "同比 +14%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.6",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.6B",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "RPO\n$3.6B\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            52,
            1137,
            143,
            167
          ]
        }
      },
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "105",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "105%",
        "basis": "unspecified",
        "notes": [
          "TTM"
        ],
        "quote": "DBNE\n105%\nTTM",
        "anchor": {
          "type": "image-box",
          "box": [
            202,
            1138,
            142,
            164
          ]
        }
      },
      {
        "id": "enterprise_customers",
        "label": "Enterprise Customers",
        "value": "220000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "220K",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Enterprise Customers\n220K\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            352,
            1138,
            646,
            91
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "3731",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,731",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Customers > $100K\n3,731\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            352,
            1224,
            646,
            78
          ]
        }
      }
    ]
  },
  {
    "key": "zoom-q3-fy25",
    "company": "Zoom",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1178,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 699,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 479,
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
        "value": 284
      },
      "operatingExpenses": {
        "total": 711,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 362,
            "notes": [
              "31% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 223,
            "notes": [
              "19% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 126,
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 74
      }
    },
    "otherIncome": {
      "total": 97,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 6
        },
        {
          "id": "other",
          "label": "Other",
          "value": 91
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
        "value": 894,
        "notes": [
          "76% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 183,
        "notes": [
          "16% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 207,
        "notes": [
          "18% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 10 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
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
                "label": "销售与市场",
                "notes": [
                  "占收入 31%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
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
              "id": "investments",
              "label": "投资收益",
              "notes": []
            },
            {
              "id": "other",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 18%",
              "同比 +5 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "rpo",
            "label": "剩余履约义务",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "dbne",
            "label": "金额净扩张率",
            "notes": [
              "近 12 个月"
            ]
          },
          {
            "id": "customers",
            "label": "年收入超过 $100K 的客户",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "churn",
            "label": "线上客户流失率",
            "notes": [
              "同比 (0.3 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.7",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.7B",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "RPO\n$3.7B\n+5% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            18,
            1116,
            145,
            168
          ]
        }
      },
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "98",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "98%",
        "notes": [
          "TTM"
        ],
        "quote": "DBNE\n98%\nTTM",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1116,
            143,
            168
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers > $100K",
        "value": "3995",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,995",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Customers > $100K\n+7% Y/Y to 3,995",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            316,
            1116,
            333,
            168
          ]
        }
      },
      {
        "id": "churn",
        "label": "Online Churn",
        "value": "2.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "2.7%",
        "notes": [
          "(0.3pp) Y/Y"
        ],
        "quote": "Online Churn\n2.7%\n(0.3pp) Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1116,
            332,
            168
          ]
        }
      }
    ]
  },
  {
    "key": "zoom-q4-fy23",
    "company": "Zoom",
    "period": "Q4 FY23",
    "periodNote": "Ending January 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1118,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 636,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 482,
          "notes": [
            "(10%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 294
      },
      "operatingExpenses": {
        "total": 953,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 506,
            "notes": [
              "45% of revenue",
              "+15pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 261,
            "notes": [
              "23% of revenue",
              "+12pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 186,
            "notes": [
              "17% of revenue",
              "+6pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 823,
        "notes": [
          "74% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -130,
        "notes": [
          "(12%) margin",
          "(34pp) Y/Y"
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
        "id": "rpo",
        "label": "RPO",
        "value": "3.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.4B",
        "basis": "unspecified",
        "notes": [
          "+30% Y/Y"
        ],
        "quote": "RPO\n$3.4B\n+30% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            52,
            1137,
            143,
            168
          ]
        }
      },
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "115",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "115%",
        "basis": "unspecified",
        "notes": [
          "TTM"
        ],
        "quote": "DBNE\n115%\nTTM",
        "anchor": {
          "type": "image-box",
          "box": [
            201,
            1138,
            143,
            165
          ]
        }
      },
      {
        "id": "enterprise_customers",
        "label": "Enterprise Customers",
        "value": "213000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "213K",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Enterprise Customers +12% Y/Y to 213K",
        "anchor": {
          "type": "image-box",
          "box": [
            350,
            1138,
            646,
            82
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "3471",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,471",
        "basis": "unspecified",
        "notes": [
          "+27% Y/Y"
        ],
        "quote": "Customers > $100K +27% Y/Y to 3,471",
        "anchor": {
          "type": "image-box",
          "box": [
            350,
            1220,
            646,
            83
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
            "同比 +4%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
              "notes": [
                "同比 (10%)"
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
                  "占收入 45%",
                  "同比 +15 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 +12 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 17%",
                  "同比 +6 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (12%)",
              "同比 (34 个百分点)"
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
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +30%"
            ]
          },
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "近12个月"
            ]
          },
          {
            "id": "enterprise_customers",
            "label": "企业客户",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年收入超过 $100K 的客户",
            "notes": [
              "同比 +27%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "zoom-q4-fy24",
    "company": "Zoom",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q4-fy24.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 1147,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 667,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 479,
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
        "value": 276
      },
      "operatingExpenses": {
        "total": 702,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 371,
            "notes": [
              "32% of revenue",
              "(13pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 205,
            "notes": [
              "18% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 125,
            "notes": [
              "11% of revenue",
              "(6pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 54
      }
    },
    "otherIncome": {
      "total": 184,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 101
        },
        {
          "id": "other",
          "label": "Other",
          "value": 83
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
        "value": 870,
        "notes": [
          "76% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 169,
        "notes": [
          "15% margin",
          "+26pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 299,
        "notes": [
          "26% margin",
          "+35pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.6",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.6B",
        "notes": [
          "+4% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "RPO\n$3.6B\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            52,
            1137,
            143,
            167
          ]
        }
      },
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "101",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "101%",
        "notes": [
          "TTM"
        ],
        "basis": "unspecified",
        "quote": "DBNE\n101%\nTTM",
        "anchor": {
          "type": "image-box",
          "box": [
            202,
            1139,
            142,
            163
          ]
        }
      },
      {
        "id": "enterprise_customers",
        "label": "Enterprise Customers",
        "value": "220000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "220K",
        "notes": [
          "+3% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Enterprise Customers\n220K\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            352,
            1139,
            645,
            81
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "3810",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,810",
        "notes": [
          "+10% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Customers > $100K\n3,810\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            352,
            1220,
            645,
            82
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
            "同比 +3%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
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
                "label": "销售与市场",
                "notes": [
                  "占收入 32%",
                  "同比 (13 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (6 个百分点)"
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
              "id": "investments",
              "label": "投资"
            },
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
              "利润率 76%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +26 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 26%",
              "同比 +35 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "rpo",
            "label": "剩余履约义务",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "id": "dbne",
            "label": "美元口径净扩张率",
            "notes": [
              "过去 12 个月"
            ]
          },
          {
            "id": "enterprise_customers",
            "label": "企业客户",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年收入超过 $100K 的客户",
            "notes": [
              "同比 +10%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "zoom-q4-fy25",
    "company": "Zoom",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/zoom-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1184,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "enterprise",
          "label": "Enterprise",
          "value": 707,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "online",
          "label": "Online",
          "value": 477,
          "notes": [
            "(0%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 287
      },
      "operatingExpenses": {
        "total": 672,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 359,
            "notes": [
              "30% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 217,
            "notes": [
              "18% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 96,
            "notes": [
              "8% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 82
      }
    },
    "otherIncome": {
      "total": 225,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 150
        },
        {
          "id": "other",
          "label": "Other",
          "value": 75
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
        "value": 897,
        "notes": [
          "76% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 225,
        "notes": [
          "19% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 368,
        "notes": [
          "31% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "enterprise",
              "label": "企业",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "online",
              "label": "线上",
              "notes": [
                "同比 (0%)"
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
                  "占收入 30%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
              "id": "investments",
              "label": "投资"
            },
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
              "利润率 76%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 31%",
              "同比 +5 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "rpo",
            "label": "RPO",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "过去 12 个月"
            ]
          },
          {
            "id": "customers",
            "label": "年消费 > $100K 客户",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "churn",
            "label": "线上流失率",
            "notes": [
              "同比 (0.2 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "rpo",
        "label": "RPO",
        "value": "3.8",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.8B",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "RPO\n$3.8B\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            18,
            1117,
            145,
            167
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "98",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "98%",
        "notes": [
          "TTM"
        ],
        "quote": "DBNE\n98%\nTTM",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1119,
            143,
            164
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "customers",
        "label": "Customers > $100K",
        "value": "4088",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "4,088",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Customers > $100K\n+7% Y/Y to 4,088",
        "anchor": {
          "type": "image-box",
          "box": [
            316,
            1119,
            333,
            164
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "churn",
        "label": "Online Churn",
        "value": "2.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "2.8%",
        "notes": [
          "(0.2pp) Y/Y"
        ],
        "quote": "Online Churn\n2.8%\n(0.2pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            655,
            1119,
            333,
            164
          ]
        },
        "basis": "unspecified"
      }
    ]
  }
]);
})(window);
