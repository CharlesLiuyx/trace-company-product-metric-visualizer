(function(global){global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};global.INCOME_STATEMENT_SSOT.records.push(...[
  {
    "key": "hilton-q4-fy25",
    "company": "Hilton",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/hilton-q4-fy25.png",
    "roundingTolerance": 0.02,
    "revenue": {
      "total": 3.087,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "franchise_fees",
          "label": "Franchise fees",
          "value": 0.671,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "base_management_fees",
          "label": "Base management fees",
          "value": 0.098,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "incentive_management_fees",
          "label": "Incentive management fees",
          "value": 0.101,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "owned_leased_and_other",
          "label": "Owned, leased and other",
          "value": 0.345,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.065,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "managed_franchised_other_revenue",
          "label": "Other revenue from managed and franchised properties",
          "value": 1.807,
          "notes": [
            "+14% Y/Y",
            "Reported by Hilton as cost reimbursement revenues."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart does not show a gross profit or cost-of-revenue subtotal."
        ]
      },
      "operatingExpenses": {
        "total": 2.485,
        "notes": [
          "Source chart presents Hilton expenses as operating expenses rather than a gross-profit split."
        ],
        "items": [
          {
            "id": "owned_leased_hotels",
            "label": "Owned, leased hotels",
            "value": 0.292
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.095
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.047
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.057
          },
          {
            "id": "managed_franchised_other_expenses",
            "label": "Other expenses from managed and franchised properties",
            "value": 1.994,
            "notes": [
              "Reported by Hilton as reimbursed expenses."
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.131
      }
    },
    "otherExpenses": {
      "total": 0.173,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Other",
          "value": 0.173,
          "notes": [
            "Interest expense, foreign-currency loss, and other non-operating loss, net."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.087,
        "notes": [
          "Synthetic SSOT subtotal because the source chart does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.602,
        "notes": [
          "20% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.298,
        "notes": [
          "10% margin",
          "(8pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "franchise_fees",
              "label": "特许经营费",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "base_management_fees",
              "label": "基础管理费",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "incentive_management_fees",
              "label": "激励管理费",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "owned_leased_and_other",
              "label": "自有、租赁及其他",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "managed_franchised_other_revenue",
              "label": "管理和特许经营物业的其他收入",
              "notes": [
                "同比 +14%",
                "Hilton 将该项目列报为成本报销收入。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本小计。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "来源图将 Hilton 的费用列示为运营费用，而非毛利润拆分。"
            ],
            "items": [
              {
                "id": "owned_leased_hotels",
                "label": "自有及租赁酒店"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "other_operating",
                "label": "其他"
              },
              {
                "id": "managed_franchised_other_expenses",
                "label": "管理和特许经营物业的其他费用",
                "notes": [
                  "Hilton 将该项目列报为报销费用。"
                ]
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
              "id": "other_nonoperating",
              "label": "其他",
              "notes": [
                "利息费用、外币损失及其他非运营损失净额。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源图未显示毛利润，因此 SSOT 使用合成小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (8 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hilton-q1-fy26",
    "company": "Hilton",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/hilton-q1-fy26.png",
    "roundingTolerance": 0.02,
    "revenue": {
      "total": 2.937,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "franchise_fees",
          "label": "Franchise fees",
          "value": 0.696,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "base_management_fees",
          "label": "Base management fees",
          "value": 0.095,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "incentive_management_fees",
          "label": "Incentive management fees",
          "value": 0.076,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "owned_leased_and_other",
          "label": "Owned, leased and other",
          "value": 0.249,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.066,
          "notes": [
            "+43% Y/Y"
          ]
        },
        {
          "id": "managed_franchised_other_revenue",
          "label": "Other revenue from managed and franchised properties",
          "value": 1.755,
          "notes": [
            "+8% Y/Y",
            "Reported by Hilton as cost reimbursement revenues."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart does not show a gross profit or cost-of-revenue subtotal."
        ]
      },
      "operatingExpenses": {
        "total": 2.259,
        "notes": [
          "Source chart presents Hilton expenses as operating expenses rather than a gross-profit split."
        ],
        "items": [
          {
            "id": "owned_leased_hotels",
            "label": "Owned, leased hotels",
            "value": 0.235
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.103
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.05
          },
          {
            "id": "managed_franchised_other_expenses",
            "label": "Other expenses from managed and franchised properties",
            "value": 1.871,
            "notes": [
              "Includes reimbursed expenses of $1.849B plus $0.022B of other expenses."
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.135
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.16,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Other",
          "value": 0.16,
          "notes": [
            "Interest expense, foreign-currency loss, and other non-operating income, net."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.937,
        "notes": [
          "Synthetic SSOT subtotal because the source chart does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.678,
        "notes": [
          "23% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.383,
        "notes": [
          "13% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "franchise_fees",
              "label": "特许经营费",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "base_management_fees",
              "label": "基础管理费",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "incentive_management_fees",
              "label": "激励管理费",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "owned_leased_and_other",
              "label": "自有、租赁及其他",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +43%"
              ]
            },
            {
              "id": "managed_franchised_other_revenue",
              "label": "管理和特许经营物业的其他收入",
              "notes": [
                "同比 +8%",
                "Hilton 将该项目列报为成本报销收入。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本小计。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "来源图将 Hilton 的费用列示为运营费用，而非毛利润拆分。"
            ],
            "items": [
              {
                "id": "owned_leased_hotels",
                "label": "自有及租赁酒店"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "managed_franchised_other_expenses",
                "label": "管理和特许经营物业的其他费用",
                "notes": [
                  "包括 $1.849B 报销费用和 $0.022B 其他费用。"
                ]
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
              "id": "other_nonoperating",
              "label": "其他",
              "notes": [
                "利息费用、外币损失及其他非运营收入净额。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源图未显示毛利润，因此 SSOT 使用合成小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 23%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hilton-q2-fy26",
    "company": "Hilton",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/hilton-q2-fy26.png",
    "roundingTolerance": 0.02,
    "revenue": {
      "total": 3.341,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "franchise_fees",
          "label": "Franchise fees",
          "value": 0.808,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "base_management_fees",
          "label": "Base management fees",
          "value": 0.099,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "incentive_management_fees",
          "label": "Incentive management fees",
          "value": 0.069,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "owned_leased_and_other",
          "label": "Owned, leased and other",
          "value": 0.311,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.072,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "managed_franchised_other_revenue",
          "label": "Other revenue from managed and franchised properties",
          "value": 1.982,
          "notes": [
            "+9% Y/Y",
            "Reported by Hilton as cost reimbursement revenues."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart does not show a gross profit or cost-of-revenue subtotal."
        ]
      },
      "operatingExpenses": {
        "total": 2.483,
        "notes": [
          "Source chart presents Hilton expenses as operating expenses rather than a gross-profit split."
        ],
        "items": [
          {
            "id": "owned_leased_hotels",
            "label": "Owned, leased hotels",
            "value": 0.266
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.114
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.049
          },
          {
            "id": "managed_franchised_other_expenses",
            "label": "Other expenses from managed and franchised properties",
            "value": 2.054,
            "notes": [
              "Includes reimbursed expenses of $2.008B plus $0.046B of other expenses."
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.198
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.178,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Other",
          "value": 0.178,
          "notes": [
            "Interest expense and foreign-currency loss, net of other non-operating income."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.341,
        "notes": [
          "Synthetic SSOT subtotal because the source chart does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.858,
        "notes": [
          "26% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.482,
        "notes": [
          "14% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "franchise_fees",
              "label": "特许经营费",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "base_management_fees",
              "label": "基础管理费",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "incentive_management_fees",
              "label": "激励管理费",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "owned_leased_and_other",
              "label": "自有、租赁及其他",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "managed_franchised_other_revenue",
              "label": "管理和特许经营物业的其他收入",
              "notes": [
                "同比 +9%",
                "Hilton 将该项目列报为成本报销收入。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本小计。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "来源图将 Hilton 的费用列示为运营费用，而非毛利润拆分。"
            ],
            "items": [
              {
                "id": "owned_leased_hotels",
                "label": "自有及租赁酒店"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "managed_franchised_other_expenses",
                "label": "管理和特许经营物业的其他费用",
                "notes": [
                  "包括 $2.008B 报销费用和 $0.046B 其他费用。"
                ]
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
              "id": "other_nonoperating",
              "label": "其他",
              "notes": [
                "利息费用及外币损失，扣除其他非运营收入。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源图未显示毛利润，因此 SSOT 使用合成小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 26%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hilton-q3-fy26",
    "company": "Hilton",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/hilton-q3-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.3,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "franchise_fees",
          "label": "Franchise fees",
          "value": 0.8,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "base_management_fees",
          "label": "Base management fees",
          "value": 0.1,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "incentive_management_fees",
          "label": "Incentive management fees",
          "value": 0.1,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "owned_leased_and_other",
          "label": "Owned, leased and other",
          "value": 0.3,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "managed_franchised_other_revenue",
          "label": "Other revenue from managed and franchised properties",
          "value": 2,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart does not show a gross profit or cost-of-revenue subtotal."
        ]
      },
      "operatingExpenses": {
        "total": 2.4,
        "notes": [
          "Source chart presents Hilton expenses as operating expenses rather than a gross-profit split."
        ],
        "items": [
          {
            "id": "owned_leased_hotels",
            "label": "Owned, leased hotels",
            "value": 0.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.1
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.1
          },
          {
            "id": "managed_franchised_other_expenses",
            "label": "Other expenses from managed and franchised properties",
            "value": 2
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
      "total": 0.2,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Other",
          "value": 0.2,
          "notes": [
            "Interest expense and foreign-currency loss, net of other non-operating income."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.3,
        "notes": [
          "Synthetic SSOT subtotal because the source chart does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.9,
        "notes": [
          "27% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "16% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "revpar_growth",
        "label": "Comparable Systemwide RevPAR",
        "value": "5.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+5.8%",
        "basis": "unspecified",
        "notes": [],
        "quote": "Comparable Systemwide RevPAR +5.8%",
        "anchor": {
          "type": "image-box",
          "box": [
            96,
            1156,
            305,
            148
          ]
        }
      },
      {
        "id": "properties",
        "label": "Properties",
        "value": "9620",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "9,620",
        "basis": "unspecified",
        "notes": [],
        "quote": "Properties 9,620",
        "anchor": {
          "type": "image-box",
          "box": [
            412,
            1156,
            330,
            148
          ]
        }
      },
      {
        "id": "rooms",
        "label": "Rooms",
        "value": "1400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1.4M",
        "basis": "unspecified",
        "notes": [],
        "quote": "Rooms 1.4M",
        "anchor": {
          "type": "image-box",
          "box": [
            412,
            1156,
            330,
            148
          ]
        }
      }
    ],
    "notes": [
      "Printed revenue components total $3.4B against $3.3B; printed expense components total $2.5B against $2.4B. Official Q3 2026 release confirms ordinary rounding, not a uniquely identifiable typo: https://ir.hilton.com/news-events/investor-news/detail/419/hilton-reports-third-quarter-results"
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "franchise_fees",
              "label": "特许经营费",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "base_management_fees",
              "label": "基础管理费",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "incentive_management_fees",
              "label": "激励管理费",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "owned_leased_and_other",
              "label": "自有、租赁及其他",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "managed_franchised_other_revenue",
              "label": "管理和特许经营物业的其他收入",
              "notes": [
                "同比 +7%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本小计。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "来源图将 Hilton 的费用列示为运营费用，而非毛利润拆分。"
            ],
            "items": [
              {
                "id": "owned_leased_hotels",
                "label": "自有及租赁酒店"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "managed_franchised_other_expenses",
                "label": "管理和特许经营物业的其他费用"
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
              "id": "other_nonoperating",
              "label": "其他",
              "notes": [
                "利息费用及外币损失，扣除其他非运营收入。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源图未显示毛利润，因此 SSOT 使用合成小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 27%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 +3 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "revpar_growth",
            "label": "可比全系统 RevPAR"
          },
          {
            "id": "properties",
            "label": "物业数"
          },
          {
            "id": "rooms",
            "label": "客房数"
          }
        ]
      }
    }
  }
]);})(window);
