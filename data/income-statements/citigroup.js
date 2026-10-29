/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "citigroup-q4-fy25",
    "company": "Citigroup",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 19.9,
      "notes": [
        "+2% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "services",
          "label": "Services",
          "value": 5.9,
          "notes": [
            "+15% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "markets",
          "label": "Markets",
          "value": 4.5,
          "notes": [
            "(1%) Y/Y",
            "17% net margin"
          ]
        },
        {
          "id": "banking",
          "label": "Banking",
          "value": 2.2,
          "notes": [
            "+78% Y/Y",
            "31% net margin"
          ]
        },
        {
          "id": "wealth",
          "label": "Wealth",
          "value": 2.1,
          "notes": [
            "+7% Y/Y",
            "16% net margin"
          ]
        },
        {
          "id": "uspb",
          "label": "USPB",
          "value": 5.3,
          "notes": [
            "+3% Y/Y",
            "16% net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 2.2,
        "notes": [
          "Source depicts this as a pre-pretax cost."
        ]
      },
      "operatingExpenses": {
        "total": 13.8,
        "notes": [
          "Noninterest expenses"
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.1
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 3.3
          },
          {
            "id": "technology_communication",
            "label": "Technology & communication",
            "value": 2.4
          },
          {
            "id": "premises_equipment",
            "label": "Premises & equipment",
            "value": 0.7
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.3
      }
    },
    "operatingOtherExpenses": {
      "total": 0.2,
      "items": [
        {
          "id": "all_other",
          "label": "All Other",
          "value": 0.2
        }
      ]
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
        "label": "Revenue after credit loss provision",
        "value": 17.7,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.8,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.5,
        "notes": [
          "(13%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +2%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +15%",
                "净利率 38%"
              ]
            },
            {
              "id": "markets",
              "label": "市场",
              "notes": [
                "同比 (1%)",
                "净利率 17%"
              ]
            },
            {
              "id": "banking",
              "label": "银行",
              "notes": [
                "同比 +78%",
                "净利率 31%"
              ]
            },
            {
              "id": "wealth",
              "label": "财富管理",
              "notes": [
                "同比 +7%",
                "净利率 16%"
              ]
            },
            {
              "id": "uspb",
              "label": "美国个人银行",
              "notes": [
                "同比 +3%",
                "净利率 16%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "来源图将其展示为税前利润前成本。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "非利息费用"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "premises_equipment",
                "label": "场地与设备"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherExpenses": {
          "items": [
            {
              "id": "all_other",
              "label": "所有其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "用于平衡的小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (13%)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "citigroup-q1-fy26",
    "company": "Citigroup",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 24.6,
      "notes": [
        "+14% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "services",
          "label": "Services",
          "value": 6.1,
          "notes": [
            "+17% Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "markets",
          "label": "Markets",
          "value": 7.2,
          "notes": [
            "+19% Y/Y",
            "36% net margin"
          ]
        },
        {
          "id": "banking",
          "label": "Banking",
          "value": 1.8,
          "notes": [
            "+15% Y/Y",
            "17% net margin"
          ]
        },
        {
          "id": "wealth",
          "label": "Wealth",
          "value": 3.1,
          "notes": [
            "+11% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "uspb",
          "label": "USPB",
          "value": 4.8,
          "notes": [
            "+4% Y/Y",
            "15% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": "All other",
          "value": 1.7,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 2.8,
        "notes": [
          "Source depicts this as a pre-pretax cost."
        ]
      },
      "operatingExpenses": {
        "total": 14.3,
        "notes": [
          "Noninterest expenses"
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 8.4
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 2.8
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.4
          },
          {
            "id": "premises_equipment",
            "label": "Premises & equipment",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.6
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
        "label": "Revenue after credit loss provision",
        "value": 21.8,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7.5,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.9,
        "notes": [
          "+45% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +14%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +17%",
                "净利率 37%"
              ]
            },
            {
              "id": "markets",
              "label": "市场",
              "notes": [
                "同比 +19%",
                "净利率 36%"
              ]
            },
            {
              "id": "banking",
              "label": "银行",
              "notes": [
                "同比 +15%",
                "净利率 17%"
              ]
            },
            {
              "id": "wealth",
              "label": "财富管理",
              "notes": [
                "同比 +11%",
                "净利率 14%"
              ]
            },
            {
              "id": "uspb",
              "label": "美国个人银行",
              "notes": [
                "同比 +4%",
                "净利率 15%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他",
              "notes": [
                "同比 +16%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "来源图将其展示为税前利润前成本。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "非利息费用"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "premises_equipment",
                "label": "场地与设备"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "用于平衡的小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +45%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "citigroup-q2-fy26",
    "company": "Citigroup",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 24.8,
      "notes": [
        "+14% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "services",
          "label": "Services",
          "value": 6.4,
          "notes": [
            "+18% Y/Y",
            "41% net margin"
          ]
        },
        {
          "id": "markets",
          "label": "Markets",
          "value": 7,
          "notes": [
            "+17% Y/Y",
            "34% net margin"
          ]
        },
        {
          "id": "banking",
          "label": "Banking",
          "value": 1.9,
          "notes": [
            "+34% Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "wealth",
          "label": "Wealth",
          "value": 3.2,
          "notes": [
            "+13% Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "uspb",
          "label": "USPB",
          "value": 4.5,
          "notes": [
            "+1% Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": "All other",
          "value": 1.8,
          "notes": [
            "+14% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 2.5,
        "notes": [
          "Source depicts this as a pre-pretax cost."
        ]
      },
      "operatingExpenses": {
        "total": 14.2,
        "notes": [
          "Noninterest expenses"
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 8
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 3.1
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.3
          },
          {
            "id": "premises_equipment",
            "label": "Premises & equipment",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2
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
        "label": "Revenue after credit loss provision",
        "value": 22.3,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 8,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 6,
        "notes": [
          "+49% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +14%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +18%",
                "净利率 41%"
              ]
            },
            {
              "id": "markets",
              "label": "市场",
              "notes": [
                "同比 +17%",
                "净利率 34%"
              ]
            },
            {
              "id": "banking",
              "label": "银行",
              "notes": [
                "同比 +34%",
                "净利率 18%"
              ]
            },
            {
              "id": "wealth",
              "label": "财富管理",
              "notes": [
                "同比 +13%",
                "净利率 18%"
              ]
            },
            {
              "id": "uspb",
              "label": "美国个人银行",
              "notes": [
                "同比 +1%",
                "净利率 19%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他",
              "notes": [
                "同比 +14%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "来源图将其展示为税前利润前成本。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "非利息费用"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "premises_equipment",
                "label": "场地与设备"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "用于平衡的小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +49%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "citigroup-q1-fy23",
    "company": "Citigroup",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 21.4,
      "notes": [
        "+12% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "icg",
          "label": "Institutional Clients Group",
          "value": 11.2,
          "notes": [
            "+1% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "pbwm",
          "label": "Personal Banking & Wealth Management",
          "value": 6.5,
          "notes": [
            "+9% Y/Y",
            "8% net margin"
          ]
        },
        {
          "id": "legacy",
          "label": "LegacyFranchises",
          "value": 2.9,
          "notes": [
            "+48% Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "corporate_other",
          "label": "Corporate/Other",
          "value": 0.9,
          "notes": [
            "28% net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 2
      },
      "operatingExpenses": {
        "total": 13.3,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.5
          },
          {
            "id": "other",
            "label": "Other",
            "value": 2.7
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.5
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
        "label": "Revenue after credit loss provision",
        "value": 19.4
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.2
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.6,
        "notes": [
          "+7% Y/Y",
          "$2.19 EPS"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "13.4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "literal": "13.4%",
        "notes": [
          "+2.0pp Y/Y"
        ],
        "quote": "CET1 ratio\n13.4%\n+2.0pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            70,
            1206,
            241,
            149
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "1.33",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "literal": "$1.33T",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Deposits\n$1.33T\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1206,
            216,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Loans",
        "value": "0.65",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "literal": "$0.65T",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "Loans\n$0.65T\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            544,
            1206,
            204,
            149
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +12%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "icg",
              "label": "机构客户集团",
              "notes": [
                "同比 +1%",
                "净利率 29%"
              ]
            },
            {
              "id": "pbwm",
              "label": "个人银行与财富管理",
              "notes": [
                "同比 +9%",
                "净利率 8%"
              ]
            },
            {
              "id": "legacy",
              "label": "遗留业务",
              "notes": [
                "同比 +48%",
                "净利率 21%"
              ]
            },
            {
              "id": "corporate_other",
              "label": "公司及其他",
              "notes": [
                "净利率 28%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other",
                "label": "其他"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "occupancy",
                "label": "场所费用"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +7%",
              "$2.19 每股收益"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +2.0 个百分点"
            ]
          },
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "loans",
            "label": "贷款",
            "notes": [
              "同比 (1%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "citigroup-q3-fy23",
    "company": "Citigroup",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.1,
      "notes": [
        "+9% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "institutional_clients_group",
          "label": "Institutional Clients Group",
          "value": 10.6,
          "notes": [
            "+12% Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "personal_banking_wealth_management",
          "label": "Personal Banking & Wealth Management",
          "value": 6.8,
          "notes": [
            "+10% Y/Y",
            "12% net margin"
          ]
        },
        {
          "id": "legacy_franchises",
          "label": "Legacy/Franchises",
          "value": 2.2,
          "notes": [
            "(13%) Y/Y",
            "6% net margin"
          ]
        },
        {
          "id": "corporate_other",
          "label": "Corporate/Other",
          "value": 0.5,
          "notes": [
            "38% net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.8
      },
      "operatingExpenses": {
        "total": 13.5,
        "notes": [
          "Noninterest expenses"
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 2.9
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.3
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.2
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
        "label": "Revenue after credit loss provision",
        "value": 18.3,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.5,
        "notes": [
          "+22% Y/Y",
          "$1.52 EPS"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "13.5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "13.5%",
        "quote": "CET1 ratio\n13.5%\n+1.2pp Y/Y",
        "basis": "unspecified",
        "notes": [
          "+1.2pp Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            70,
            1205,
            240,
            149
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "1.32",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.32T",
        "quote": "Deposits\n$1.32T\nFlat Y/Y",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1205,
            215,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Loans",
        "value": "0.66",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.66T",
        "quote": "Loans\n$0.66T\n+1% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            544,
            1205,
            203,
            149
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +9%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "institutional_clients_group",
              "label": "机构客户集团",
              "notes": [
                "同比 +12%",
                "净利率 23%"
              ]
            },
            {
              "id": "personal_banking_wealth_management",
              "label": "个人银行与财富管理",
              "notes": [
                "同比 +10%",
                "净利率 12%"
              ]
            },
            {
              "id": "legacy_franchises",
              "label": "遗留业务／特许经营",
              "notes": [
                "同比 (13%)",
                "净利率 6%"
              ]
            },
            {
              "id": "corporate_other",
              "label": "企业／其他",
              "notes": [
                "净利率 38%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备"
          },
          "operatingExpenses": {
            "notes": [
              "非利息费用"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other",
                "label": "其他"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "occupancy",
                "label": "场地"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "用于平衡的小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +22%",
              "每股收益 $1.52"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +1.2 个百分点"
            ]
          },
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "loans",
            "label": "贷款",
            "notes": [
              "同比 +1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "citigroup-q3-fy25",
    "company": "Citigroup",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 22.1,
      "notes": [
        "+9% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "services",
          "label": "Services",
          "value": 5.4,
          "notes": [
            "+7% Y/Y",
            "34% net margin"
          ]
        },
        {
          "id": "markets",
          "label": "Markets",
          "value": 5.6,
          "notes": [
            "+15% Y/Y",
            "28% net margin"
          ]
        },
        {
          "id": "banking",
          "label": "Banking",
          "value": 2.1,
          "notes": [
            "+34% Y/Y",
            "30% net margin"
          ]
        },
        {
          "id": "wealth",
          "label": "Wealth",
          "value": 2.2,
          "notes": [
            "+8% Y/Y",
            "17% net margin"
          ]
        },
        {
          "id": "uspb",
          "label": "USPB",
          "value": 5.3,
          "notes": [
            "+7% Y/Y",
            "16% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": "All Other",
          "value": 1.5,
          "notes": [
            "(16%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 2.5,
        "notes": [
          "Source depicts this as a pre-pretax cost."
        ]
      },
      "operatingExpenses": {
        "total": 14.3,
        "notes": [
          "Noninterest expenses"
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.5
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 3.6
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.3
          },
          {
            "id": "premises_equipment",
            "label": "Premises & equipment",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.6
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
        "label": "Revenue after credit loss provision",
        "value": 19.6,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.3,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.8,
        "notes": [
          "+16% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +9%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +7%",
                "净利率 34%"
              ]
            },
            {
              "id": "markets",
              "label": "市场",
              "notes": [
                "同比 +15%",
                "净利率 28%"
              ]
            },
            {
              "id": "banking",
              "label": "银行",
              "notes": [
                "同比 +34%",
                "净利率 30%"
              ]
            },
            {
              "id": "wealth",
              "label": "财富管理",
              "notes": [
                "同比 +8%",
                "净利率 17%"
              ]
            },
            {
              "id": "uspb",
              "label": "美国个人银行",
              "notes": [
                "同比 +7%",
                "净利率 16%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他",
              "notes": [
                "同比 (16%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "来源图将其展示为税前利润前成本。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "非利息费用"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "premises_equipment",
                "label": "场地与设备"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "用于平衡的小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +16%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +6%，环比 +2%"
            ]
          },
          {
            "id": "loans",
            "label": "贷款",
            "notes": [
              "同比 +7%，环比 +1%"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.5 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "1.38",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.38T",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y & +2% Q/Q"
        ],
        "quote": "Deposits\n$1.38T\n+6% Y/Y & +2% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1211,
            264,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Loans",
        "value": "0.73",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.73T",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y & +1% Q/Q"
        ],
        "quote": "Loans\n$0.73T\n+7% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            351,
            1211,
            241,
            149
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "13.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "13.2%",
        "basis": "unspecified",
        "notes": [
          "(0.5pp) Y/Y"
        ],
        "quote": "CET1 ratio\n13.2%\n(0.5pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            600,
            1211,
            242,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "citigroup-q4-fy23",
    "company": "Citigroup",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 17.4,
      "notes": [
        "(3%) Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "services",
          "label": "Services",
          "value": 4.5,
          "notes": [
            "+6% Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "markets",
          "label": "Markets",
          "value": 3.4,
          "notes": [
            "(19%) Y/Y",
            "(4%) net margin"
          ]
        },
        {
          "id": "banking",
          "label": "Banking",
          "value": 0.9,
          "notes": [
            "+22% Y/Y",
            "(34%) net margin"
          ]
        },
        {
          "id": "uspb",
          "label": "USPB",
          "value": 4.9,
          "notes": [
            "+12% Y/Y",
            "4% net margin"
          ]
        },
        {
          "id": "wealth",
          "label": "Wealth",
          "value": 1.7,
          "notes": [
            "(3%) Y/Y",
            "0% net margin"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 2,
          "notes": [
            "(26%) Y/Y",
            "(120%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 3.5
      },
      "operatingExpenses": {
        "total": 16,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6.9
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 4.8
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.4
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.8
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.7
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax benefit",
        "value": -0.3
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
        "label": "Revenue after credit loss provision",
        "value": 13.9
      },
      "operating": {
        "id": "pretax_loss",
        "label": "Pretax loss",
        "value": -2.1
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -1.8
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "13.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "13.3%",
        "basis": "unspecified",
        "notes": [
          "+0.3pp Y/Y"
        ],
        "quote": "CET1 ratio\n13.3%\n+0.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            70,
            1206,
            241,
            149
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "1.31",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.31T",
        "basis": "unspecified",
        "notes": [
          "(4%) Y/Y"
        ],
        "quote": "Deposits\n$1.31T\n(4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1206,
            216,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Loans",
        "value": "0.67",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.67T",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Loans\n$0.67T\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            543,
            1206,
            204,
            149
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 (3%)",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +6%",
                "净利率 18%"
              ]
            },
            {
              "id": "markets",
              "label": "市场",
              "notes": [
                "同比 (19%)",
                "净利率 (4%)"
              ]
            },
            {
              "id": "banking",
              "label": "银行",
              "notes": [
                "同比 +22%",
                "净利率 (34%)"
              ]
            },
            {
              "id": "uspb",
              "label": "美国个人银行",
              "notes": [
                "同比 +12%",
                "净利率 4%"
              ]
            },
            {
              "id": "wealth",
              "label": "财富管理",
              "notes": [
                "同比 (3%)",
                "净利率 0%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 (26%)",
                "净利率 (120%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "restructuring",
                "label": "重组费用"
              },
              {
                "id": "occupancy",
                "label": "场地费用"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税收收益"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入"
          },
          "operating": {
            "label": "税前亏损"
          },
          "net": {
            "label": "净亏损"
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.3 个百分点"
            ]
          },
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 (4%)"
            ]
          },
          {
            "id": "loans",
            "label": "贷款",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "citigroup-q2-fy23",
    "company": "Citigroup",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/citigroup-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 19.4,
      "items": [
        {
          "id": "icg",
          "label": "Institutional Clients Group",
          "value": 10.4,
          "notes": [
            "(9%) Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "pbwm",
          "label": "Personal Banking & Wealth Management",
          "value": 6.4,
          "notes": [
            "+6% Y/Y",
            "8% net margin"
          ]
        },
        {
          "id": "legacy",
          "label": "Legacy/Franchises",
          "value": 1.9,
          "notes": [
            "(7%) net margin"
          ]
        },
        {
          "id": "corporate_other",
          "label": "Corporate/Other",
          "value": 0.7,
          "notes": [
            "53% net margin"
          ]
        }
      ],
      "notes": [
        "(1%) Y/Y",
        "Net of interest expenses"
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.8
      },
      "operatingExpenses": {
        "total": 13.6,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.4
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 2.9
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.3
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.037,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.037
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Revenue after credit loss provision",
        "value": 17.6
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.9,
        "notes": [
          "(36%) Y/Y",
          "$1.33 EPS"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "13.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "13.3%",
        "basis": "unspecified",
        "notes": [
          "+1.3pp Y/Y"
        ],
        "quote": "CET1 ratio\n13.3%\n+1.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            70,
            1205,
            240,
            149
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "1.34",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.34T",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "quote": "Deposits\n$1.34T\n+1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1205,
            216,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Loans",
        "value": "0.65",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.65T",
        "basis": "unspecified",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "Loans\n$0.65T\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            543,
            1205,
            204,
            149
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "items": [
            {
              "id": "icg",
              "label": "机构客户集团",
              "notes": [
                "同比 (9%)",
                "净利率 21%"
              ]
            },
            {
              "id": "pbwm",
              "label": "个人银行与财富管理",
              "notes": [
                "同比 +6%",
                "净利率 8%"
              ]
            },
            {
              "id": "legacy",
              "label": "遗留业务与特许经营",
              "notes": [
                "净利率 (7%)"
              ]
            },
            {
              "id": "corporate_other",
              "label": "公司及其他",
              "notes": [
                "净利率 53%"
              ]
            }
          ],
          "notes": [
            "同比 (1%)",
            "扣除利息支出后"
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "occupancy",
                "label": "房地占用费用"
              },
              {
                "id": "marketing",
                "label": "营销"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (36%)",
              "每股收益 $1.33"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +1.3 个百分点"
            ]
          },
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +1%"
            ]
          },
          {
            "id": "loans",
            "label": "贷款",
            "notes": [
              "同比 (1%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "citigroup-q4-fy24",
    "company": "Citigroup",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 19.6,
      "notes": [
        "+12% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "services",
          "label": "Services",
          "value": 5.2,
          "notes": [
            "+15% Y/Y",
            "36% net margin"
          ]
        },
        {
          "id": "markets",
          "label": "Markets",
          "value": 4.6,
          "notes": [
            "+36% Y/Y",
            "22% net margin"
          ]
        },
        {
          "id": "banking",
          "label": "Banking",
          "value": 1.2,
          "notes": [
            "+27% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "wealth",
          "label": "Wealth",
          "value": 2,
          "notes": [
            "+20% Y/Y",
            "17% net margin"
          ]
        },
        {
          "id": "uspb",
          "label": "USPB",
          "value": 5.2,
          "notes": [
            "+6% Y/Y",
            "7% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": "All other",
          "value": 1.4,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 2.6,
        "notes": [
          "Source depicts this as a pre-pretax cost."
        ]
      },
      "operatingExpenses": {
        "total": 13.2,
        "notes": [
          "Noninterest expenses"
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6.9
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 3
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.3
          },
          {
            "id": "premises_equipment",
            "label": "Occupancy",
            "value": 0.7
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Revenue after credit loss provision",
        "value": 17,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.8,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.9,
        "notes": [
          "NM"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +12%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +15%",
                "净利率 36%"
              ]
            },
            {
              "id": "markets",
              "label": "市场",
              "notes": [
                "同比 +36%",
                "净利率 22%"
              ]
            },
            {
              "id": "banking",
              "label": "银行",
              "notes": [
                "同比 +27%",
                "净利率 29%"
              ]
            },
            {
              "id": "wealth",
              "label": "财富管理",
              "notes": [
                "同比 +20%",
                "净利率 17%"
              ]
            },
            {
              "id": "uspb",
              "label": "美国个人银行",
              "notes": [
                "同比 +6%",
                "净利率 7%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "来源图将其展示为税前利润前成本。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "非利息费用"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "premises_equipment",
                "label": "场地占用"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "用于平衡的小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "不适用"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 (2%)，环比 (2%)"
            ]
          },
          {
            "id": "loans",
            "label": "贷款",
            "notes": [
              "同比 +1%，环比 +1%"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.2 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "1.31",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.31T",
        "basis": "unspecified",
        "notes": [
          "(2%) Y/Y & (2%) Q/Q"
        ],
        "quote": "Deposits\n$1.31T\n(2%) Y/Y & (2%) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1211,
            264,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Loans",
        "value": "0.69",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.69T",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y & +1% Q/Q"
        ],
        "quote": "Loans\n$0.69T\n+1% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            351,
            1211,
            242,
            149
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "13.6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "13.6%",
        "basis": "unspecified",
        "notes": [
          "+0.2pp Y/Y"
        ],
        "quote": "CET1 ratio\n13.6%\n+0.2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            600,
            1211,
            242,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "citigroup-q1-fy25",
    "company": "Citigroup",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 21.6,
      "notes": [
        "+3% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "services",
          "label": "Services",
          "value": 4.9,
          "notes": [
            "+3% Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "markets",
          "label": "Markets",
          "value": 6,
          "notes": [
            "+12% Y/Y",
            "30% net margin"
          ]
        },
        {
          "id": "banking",
          "label": "Banking",
          "value": 2,
          "notes": [
            "+12% Y/Y",
            "28% net margin"
          ]
        },
        {
          "id": "wealth",
          "label": "Wealth",
          "value": 2.1,
          "notes": [
            "+24% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "uspb",
          "label": "USPB",
          "value": 5.2,
          "notes": [
            "+2% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": "All other",
          "value": 1.4,
          "notes": [
            "(39%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 2.7,
        "notes": [
          "Source depicts this as a pre-pretax cost."
        ]
      },
      "operatingExpenses": {
        "total": 13.4,
        "notes": [
          "Noninterest expenses"
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.5
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 2.8
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.4
          },
          {
            "id": "premises_equipment",
            "label": "Premises & equipment",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.3
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
        "label": "Revenue after credit loss provision",
        "value": 18.9,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.4,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.1,
        "notes": [
          "+21% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +3%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +3%",
                "净利率 33%"
              ]
            },
            {
              "id": "markets",
              "label": "市场",
              "notes": [
                "同比 +12%",
                "净利率 30%"
              ]
            },
            {
              "id": "banking",
              "label": "银行",
              "notes": [
                "同比 +12%",
                "净利率 28%"
              ]
            },
            {
              "id": "wealth",
              "label": "财富管理",
              "notes": [
                "同比 +24%",
                "净利率 14%"
              ]
            },
            {
              "id": "uspb",
              "label": "美国个人银行",
              "notes": [
                "同比 +2%",
                "净利率 14%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他",
              "notes": [
                "同比 (39%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "来源图将其展示为税前利润前成本。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "非利息费用"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "premises_equipment",
                "label": "场地与设备"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "用于平衡的小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +21%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +1%，环比 +2%"
            ]
          },
          {
            "id": "loans",
            "label": "贷款",
            "notes": [
              "同比 +1%，环比 +2%"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.05 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "1.31",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.31T",
        "notes": [
          "+1% Y/Y & +2% Q/Q"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Deposits\n$1.31T\n+1% Y/Y & +2% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1211,
            264,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Loans",
        "value": "0.70",
        "unit": "T",
        "currency": "USD",
        "literal": "$0.70T",
        "notes": [
          "+1% Y/Y & +2% Q/Q"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Loans\n$0.70T\n+1% Y/Y & +2% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            351,
            1211,
            242,
            149
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "13.4",
        "unit": "%",
        "currency": null,
        "literal": "13.4%",
        "notes": [
          "(0.05pp) Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "CET1 ratio\n13.4%\n(0.05pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            600,
            1211,
            242,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "citigroup-q3-fy22",
    "company": "Citigroup",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/citigroup-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 18.5,
      "notes": [
        "+6% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "institutional",
          "label": "Institutional Clients Group",
          "value": 9.5,
          "notes": [
            "(5%) Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "personal",
          "label": "Personal Banking & Wealth Management",
          "value": 6.2,
          "notes": [
            "+6% Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "legacy",
          "label": "LegacyFranchises",
          "value": 2.6,
          "notes": [
            "+66% Y/Y",
            "12% net margin"
          ]
        },
        {
          "id": "corporate_other",
          "label": "Corporate/Other",
          "value": 0.3,
          "notes": [
            "70% net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.4
      },
      "operatingExpenses": {
        "total": 12.7,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6.7
          },
          {
            "id": "other_general_operating",
            "label": "Other",
            "value": 2.9
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
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
      "total": 0.006,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.006,
          "valueText": "($6M)"
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Revenue after credit loss provision",
        "value": 17.1
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.5,
        "notes": [
          "(25%) Y/Y",
          "$1.63 EPS"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "12.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "12.2%",
        "basis": "unspecified",
        "notes": [
          "+50bps Y/Y"
        ],
        "quote": "CET1 ratio\n12.2%\n+50bps Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            175,
            1170,
            240,
            148
          ]
        }
      },
      {
        "id": "rotce",
        "label": "RoTCE",
        "value": "8.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "8.2%",
        "basis": "unspecified",
        "notes": [
          "(2.8pp) Y/Y"
        ],
        "quote": "RoTCE\n8.2%\n(2.8pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            425,
            1170,
            240,
            148
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
            "同比 +6%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "institutional",
              "label": "机构客户集团",
              "notes": [
                "同比 (5%)",
                "净利率 23%"
              ]
            },
            {
              "id": "personal",
              "label": "个人银行与财富管理",
              "notes": [
                "同比 +6%",
                "净利率 13%"
              ]
            },
            {
              "id": "legacy",
              "label": "传统业务",
              "notes": [
                "同比 +66%",
                "净利率 12%"
              ]
            },
            {
              "id": "corporate_other",
              "label": "公司及其他",
              "notes": [
                "净利率 70%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "occupancy",
                "label": "场地费用"
              },
              {
                "id": "marketing",
                "label": "营销"
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (25%)",
              "每股收益 $1.63"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +50 个基点"
            ]
          },
          {
            "id": "rotce",
            "label": "有形普通股权益回报率",
            "notes": [
              "同比 (2.8 个百分点)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "citigroup-q3-fy24",
    "company": "Citigroup",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.3,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "services",
          "label": "Services",
          "value": 5,
          "notes": [
            "+8% Y/Y",
            "39% net margin"
          ]
        },
        {
          "id": "markets",
          "label": "Markets",
          "value": 4.8,
          "notes": [
            "+1% Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "banking",
          "label": "Banking",
          "value": 1.6,
          "notes": [
            "+16% Y/Y",
            "15% net margin"
          ]
        },
        {
          "id": "uspb",
          "label": "USPB",
          "value": 5,
          "notes": [
            "+3% Y/Y",
            "10% net margin"
          ]
        },
        {
          "id": "wealth",
          "label": "Wealth",
          "value": 2,
          "notes": [
            "+9% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": "All Other",
          "value": 1.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 2.7
      },
      "operatingExpenses": {
        "total": 13.3,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.1
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 3
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.3
          },
          {
            "id": "premises_equipment",
            "label": "Occupancy",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1
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
        "label": "Revenue after credit loss provision",
        "value": 17.6
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.3,
        "notes": [
          "(9%) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "1.31",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.31T",
        "quote": "Deposits\n$1.31T\n+3% Y/Y & +2% Q/Q",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1211,
            264,
            149
          ]
        },
        "notes": [
          "+3% Y/Y & +2% Q/Q"
        ]
      },
      {
        "id": "loans",
        "label": "Loans",
        "value": "0.69",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.69T",
        "quote": "Loans\n$0.69T\n+3% Y/Y & Flat Q/Q",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            351,
            1211,
            241,
            149
          ]
        },
        "notes": [
          "+3% Y/Y & Flat Q/Q"
        ]
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "13.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "13.7%",
        "quote": "CET1 ratio\n13.7%\n+0.1pp Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            600,
            1211,
            242,
            149
          ]
        },
        "notes": [
          "+0.1pp Y/Y"
        ]
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +8%",
                "净利率 39%"
              ]
            },
            {
              "id": "markets",
              "label": "市场",
              "notes": [
                "同比 +1%",
                "净利率 23%"
              ]
            },
            {
              "id": "banking",
              "label": "银行",
              "notes": [
                "同比 +16%",
                "净利率 15%"
              ]
            },
            {
              "id": "uspb",
              "label": "美国个人银行",
              "notes": [
                "同比 +3%",
                "净利率 10%"
              ]
            },
            {
              "id": "wealth",
              "label": "财富管理",
              "notes": [
                "同比 +9%",
                "净利率 14%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "premises_equipment",
                "label": "场地费用"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (9%)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +3%，环比 +2%"
            ]
          },
          {
            "id": "loans",
            "label": "贷款",
            "notes": [
              "同比 +3%，环比持平"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.1 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "citigroup-q1-fy24",
    "company": "Citigroup",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 21.1,
      "notes": [
        "(2%) Y/Y",
        "(net of interest expenses)"
      ],
      "items": [
        {
          "id": "services",
          "label": "Services",
          "value": 4.8,
          "notes": [
            "+8% Y/Y",
            "17% net margin"
          ]
        },
        {
          "id": "markets",
          "label": "Markets",
          "value": 5.4,
          "notes": [
            "(7%) Y/Y",
            "(2%) net margin"
          ]
        },
        {
          "id": "banking",
          "label": "Banking",
          "value": 1.7,
          "notes": [
            "+49% Y/Y",
            "(19%) net margin"
          ]
        },
        {
          "id": "uspb",
          "label": "USPB",
          "value": 5.2,
          "notes": [
            "+10% Y/Y",
            "4% net margin"
          ]
        },
        {
          "id": "wealth",
          "label": "Wealth",
          "value": 1.7,
          "notes": [
            "(4%) Y/Y",
            "0% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": "Other",
          "value": 2.4,
          "notes": [
            "(35%) Y/Y",
            "(23%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 2.4,
        "notes": [
          "Source depicts this as a pre-pretax cost."
        ]
      },
      "operatingExpenses": {
        "total": 14.2,
        "notes": [
          "Noninterest expenses"
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.7
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 3.5
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.2
          },
          {
            "id": "premises_equipment",
            "label": "Occupancy",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1
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
        "label": "Revenue after credit loss provision",
        "value": 18.7,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.5,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.4,
        "notes": [
          "(27%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 (2%)",
            "（扣除利息支出后）"
          ],
          "items": [
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +8%",
                "净利率 17%"
              ]
            },
            {
              "id": "markets",
              "label": "市场",
              "notes": [
                "同比 (7%)",
                "净利率 (2%)"
              ]
            },
            {
              "id": "banking",
              "label": "银行",
              "notes": [
                "同比 +49%",
                "净利率 (19%)"
              ]
            },
            {
              "id": "uspb",
              "label": "美国个人银行",
              "notes": [
                "同比 +10%",
                "净利率 4%"
              ]
            },
            {
              "id": "wealth",
              "label": "财富管理",
              "notes": [
                "同比 (4%)",
                "净利率 0%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他",
              "notes": [
                "同比 (35%)",
                "净利率 (23%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "来源图将其展示为税前利润前成本。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "非利息费用"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "premises_equipment",
                "label": "场地占用"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "用于平衡的小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (27%)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.1 个百分点"
            ]
          },
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 (2%)"
            ]
          },
          {
            "id": "loans",
            "label": "贷款",
            "notes": [
              "同比 +3%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "13.5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "13.5%",
        "basis": "unspecified",
        "notes": [
          "+0.1pp Y/Y"
        ],
        "quote": "CET1 ratio\n13.5%\n+0.1pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            70,
            1205,
            241,
            149
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "1.31",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.31T",
        "basis": "unspecified",
        "notes": [
          "(2%) Y/Y"
        ],
        "quote": "Deposits\n$1.31T\n(2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1205,
            217,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Loans",
        "value": "0.67",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.67T",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Loans\n$0.67T\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            543,
            1205,
            205,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "citigroup-q2-fy25",
    "company": "Citigroup",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 21.7,
      "notes": [
        "+8% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "services",
          "label": "Services",
          "value": 5.1,
          "notes": [
            "+8% Y/Y",
            "28% net margin"
          ]
        },
        {
          "id": "markets",
          "label": "Markets",
          "value": 5.9,
          "notes": [
            "+16% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "banking",
          "label": "Banking",
          "value": 1.9,
          "notes": [
            "+18% Y/Y",
            "24% net margin"
          ]
        },
        {
          "id": "wealth",
          "label": "Wealth",
          "value": 2.2,
          "notes": [
            "+20% Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "uspb",
          "label": "USPB",
          "value": 5.1,
          "notes": [
            "+6% Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": "All other",
          "value": 1.5,
          "notes": [
            "(24%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 2.9,
        "notes": [
          "Source depicts this as a pre-pretax cost."
        ]
      },
      "operatingExpenses": {
        "total": 13.6,
        "notes": [
          "Noninterest expenses"
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.6
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 2.8
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.3
          },
          {
            "id": "premises_equipment",
            "label": "Premises & equipment",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.2
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
        "label": "Revenue after credit loss provision",
        "value": 18.8,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.2,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4,
        "notes": [
          "+25% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +8%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +8%",
                "净利率 28%"
              ]
            },
            {
              "id": "markets",
              "label": "市场",
              "notes": [
                "同比 +16%",
                "净利率 29%"
              ]
            },
            {
              "id": "banking",
              "label": "银行",
              "notes": [
                "同比 +18%",
                "净利率 24%"
              ]
            },
            {
              "id": "wealth",
              "label": "财富管理",
              "notes": [
                "同比 +20%",
                "净利率 23%"
              ]
            },
            {
              "id": "uspb",
              "label": "美国个人银行",
              "notes": [
                "同比 +6%",
                "净利率 13%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他",
              "notes": [
                "同比 (24%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "来源图将其展示为税前利润前成本。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "非利息费用"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "premises_equipment",
                "label": "场地与设备"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "用于平衡的小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +25%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +6%，环比 +3%"
            ]
          },
          {
            "id": "loans",
            "label": "贷款",
            "notes": [
              "同比 +5%，环比 +3%"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.1 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "1.36",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.36T",
        "notes": [
          "+6% Y/Y & +3% Q/Q"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1211,
            264,
            149
          ]
        },
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Deposits\n$1.36T\n+6% Y/Y & +3% Q/Q"
      },
      {
        "id": "loans",
        "label": "Loans",
        "value": "0.72",
        "unit": "T",
        "currency": "USD",
        "literal": "$0.72T",
        "notes": [
          "+5% Y/Y & +3% Q/Q"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            351,
            1211,
            242,
            149
          ]
        },
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Loans\n$0.72T\n+5% Y/Y & +3% Q/Q"
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "13.5",
        "unit": "%",
        "currency": null,
        "literal": "13.5%",
        "notes": [
          "(0.1pp) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            600,
            1211,
            242,
            149
          ]
        },
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "CET1 ratio\n13.5%\n(0.1pp) Y/Y"
      }
    ]
  },
  {
    "key": "citigroup-q4-fy22",
    "company": "Citigroup",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q4-fy22.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 18,
      "notes": [
        "+6% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "icg",
          "label": "Institutional Clients Group",
          "value": 9.2,
          "notes": [
            "+3% Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "pbwm",
          "label": "Personal Banking & Wealth Management",
          "value": 6.1,
          "notes": [
            "+5% Y/Y",
            "2% net margin"
          ]
        },
        {
          "id": "legacy",
          "label": "Legacy Franchises",
          "value": 2.1,
          "notes": [
            "(6%) Y/Y",
            "4% net margin"
          ]
        },
        {
          "id": "corporate_other",
          "label": "Corporate/Other",
          "value": 0.7,
          "notes": [
            "62% net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.8
      },
      "operatingExpenses": {
        "total": 13,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6.6
          },
          {
            "id": "other",
            "label": "Other",
            "value": 2.9
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.3
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Revenue after credit loss provision",
        "value": 16.2
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.2
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.5,
        "notes": [
          "(21%) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "13.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "13.0%",
        "basis": "unspecified",
        "notes": [
          "+0.8pp Y/Y"
        ],
        "quote": "CET1 ratio\n13.0%\n+0.8pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            70,
            1205,
            240,
            150
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "1.36",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.36T",
        "basis": "unspecified",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "Deposits\n$1.36T\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1205,
            215,
            150
          ]
        }
      },
      {
        "id": "loans",
        "label": "Loans",
        "value": "0.65",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.65T",
        "basis": "unspecified",
        "notes": [
          "(2%) Y/Y"
        ],
        "quote": "Loans\n$0.65T\n(2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            544,
            1205,
            205,
            150
          ]
        }
      },
      {
        "id": "eps",
        "label": "EPS",
        "value": "0.00116",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.16",
        "basis": "unspecified",
        "notes": [],
        "quote": "EPS\n$1.16",
        "anchor": {
          "type": "image-box",
          "box": [
            2415,
            490,
            160,
            32
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "items": [
            {
              "id": "icg",
              "label": "机构客户集团"
            },
            {
              "id": "pbwm",
              "label": "个人银行与财富管理"
            },
            {
              "id": "legacy",
              "label": "遗留特许业务"
            },
            {
              "id": "corporate_other",
              "label": "公司及其他"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other",
                "label": "其他"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "occupancy",
                "label": "场地费用"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润"
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率"
          },
          {
            "id": "deposits",
            "label": "存款"
          },
          {
            "id": "loans",
            "label": "贷款"
          },
          {
            "id": "eps",
            "label": "每股收益"
          }
        ]
      }
    }
  },
  {
    "key": "citigroup-q2-fy24",
    "company": "Citigroup",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/citigroup-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.1,
      "notes": [
        "+4% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "services",
          "label": "Services",
          "value": 4.7,
          "notes": [
            "+3% Y/Y",
            "31% net margin"
          ]
        },
        {
          "id": "markets",
          "label": "Markets",
          "value": 5.1,
          "notes": [
            "+6% Y/Y",
            "28% net margin"
          ]
        },
        {
          "id": "banking",
          "label": "Banking",
          "value": 1.6,
          "notes": [
            "+38% Y/Y",
            "25% net margin"
          ]
        },
        {
          "id": "uspb",
          "label": "USPB",
          "value": 4.9,
          "notes": [
            "+6% Y/Y",
            "2% net margin"
          ]
        },
        {
          "id": "wealth",
          "label": "Wealth",
          "value": 1.8,
          "notes": [
            "+2% Y/Y",
            "12% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": "Other",
          "value": 2,
          "notes": [
            "(20%) Y/Y",
            "(20%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 2.5,
        "notes": [
          "Source depicts this as a pre-pretax cost."
        ]
      },
      "operatingExpenses": {
        "total": 13.4,
        "notes": [
          "Noninterest expenses"
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6.9
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 3.4
          },
          {
            "id": "technology_communication",
            "label": "Technology & Communication",
            "value": 2.2
          },
          {
            "id": "premises_equipment",
            "label": "Occupancy",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1
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
        "label": "Revenue after credit loss provision",
        "value": 17.6,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.3,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.3,
        "notes": [
          "+11% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +4%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +3%",
                "净利率 31%"
              ]
            },
            {
              "id": "markets",
              "label": "市场",
              "notes": [
                "同比 +6%",
                "净利率 28%"
              ]
            },
            {
              "id": "banking",
              "label": "银行",
              "notes": [
                "同比 +38%",
                "净利率 25%"
              ]
            },
            {
              "id": "uspb",
              "label": "美国个人银行",
              "notes": [
                "同比 +6%",
                "净利率 2%"
              ]
            },
            {
              "id": "wealth",
              "label": "财富管理",
              "notes": [
                "同比 +2%",
                "净利率 12%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他",
              "notes": [
                "同比 (20%)",
                "净利率 (20%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "来源图将其展示为税前利润前成本。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "非利息费用"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
              },
              {
                "id": "technology_communication",
                "label": "技术与通信"
              },
              {
                "id": "premises_equipment",
                "label": "场地占用"
              },
              {
                "id": "marketing",
                "label": "营销"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "用于平衡的小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +11%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.2 个百分点"
            ]
          },
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 (4%)，环比 (2%)"
            ]
          },
          {
            "id": "loans",
            "label": "贷款",
            "notes": [
              "同比 +4%，环比持平"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "13.6",
        "unit": "%",
        "currency": null,
        "literal": "13.6%",
        "notes": [
          "+0.2pp Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "CET1 ratio\n13.6%\n+0.2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1204,
            242,
            150
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "1.31",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.31T",
        "notes": [
          "(4%) Y/Y & (2%) Q/Q"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Deposits\n$1.31T\n(4%) Y/Y & (2%) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1204,
            263,
            150
          ]
        }
      },
      {
        "id": "loans",
        "label": "Loans",
        "value": "0.68",
        "unit": "T",
        "currency": "USD",
        "literal": "$0.68T",
        "notes": [
          "+4% Y/Y & Flat Q/Q"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Loans\n$0.68T\n+4% Y/Y & Flat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            591,
            1204,
            242,
            150
          ]
        }
      }
    ]
  }
]);
})(window);
