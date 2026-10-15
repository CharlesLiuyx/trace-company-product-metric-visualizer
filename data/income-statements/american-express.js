/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "american-express-q4-fy25",
    "company": "American Express",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/american-express-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 19,
      "notes": [
        "+10% Y/Y",
        "Net of interest expenses; source segment labels total $19.1B before the $0.1B All Other noninterest loss."
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 9.2,
          "notes": [
            "+11% Y/Y",
            "17% pretax margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 4.4,
          "notes": [
            "+7% Y/Y",
            "19% pretax margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 3.5,
          "notes": [
            "+17% Y/Y",
            "9% pretax margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 2,
          "notes": [
            "+8% Y/Y",
            "43% pretax margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.4,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 14.5,
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 4.8
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.7
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.6
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 2.5
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 1.9
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
        "value": 17.6,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.5,
        "notes": [
          "+13% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +10%",
            "扣除利息支出后；来源图的业务分部合计为 191 亿美元，另有 1 亿美元的“所有其他”非利息损失。"
          ],
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务",
              "notes": [
                "同比 +11%",
                "税前利润率 17%"
              ]
            },
            {
              "id": "commercial_services",
              "label": "商务服务",
              "notes": [
                "同比 +7%",
                "税前利润率 19%"
              ]
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务",
              "notes": [
                "同比 +17%",
                "税前利润率 9%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务",
              "notes": [
                "同比 +8%",
                "税前利润率 43%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "card_members_rewards",
                "label": "持卡人奖励"
              },
              {
                "id": "business_development",
                "label": "业务拓展"
              },
              {
                "id": "card_member_services",
                "label": "持卡人服务"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales_employee_benefits",
                "label": "销售与员工福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
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
              "同比 +13%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "american-express-q1-fy26",
    "company": "American Express",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/american-express-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 18.9,
      "notes": [
        "+11% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 9.1,
          "notes": [
            "+11% Y/Y",
            "19% pretax margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 4.3,
          "notes": [
            "+7% Y/Y",
            "19% pretax margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 3.5,
          "notes": [
            "+20% Y/Y",
            "22% pretax margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 2,
          "notes": [
            "+10% Y/Y",
            "56% pretax margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.3,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 13.9,
        "notes": [
          "Noninterest expense line items sum to $14.0B because the source chart rounds each item."
        ],
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 4.9
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.6
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.5
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 2.5
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 1.5
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
        "value": 3.8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3,
        "notes": [
          "+10% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +11%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务",
              "notes": [
                "同比 +11%",
                "税前利润率 19%"
              ]
            },
            {
              "id": "commercial_services",
              "label": "商务服务",
              "notes": [
                "同比 +7%",
                "税前利润率 19%"
              ]
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务",
              "notes": [
                "同比 +20%",
                "税前利润率 22%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务",
              "notes": [
                "同比 +10%",
                "税前利润率 56%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "非利息支出各分项因来源图逐项四舍五入，合计为 140 亿美元。"
            ],
            "items": [
              {
                "id": "card_members_rewards",
                "label": "持卡人奖励"
              },
              {
                "id": "business_development",
                "label": "业务拓展"
              },
              {
                "id": "card_member_services",
                "label": "持卡人服务"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales_employee_benefits",
                "label": "销售与员工福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
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
              "同比 +10%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "american-express-q2-fy26",
    "company": "American Express",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/american-express-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 19.6,
      "notes": [
        "+10% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 9.5,
          "notes": [
            "+11% Y/Y",
            "22% pretax margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 4.5,
          "notes": [
            "+7% Y/Y",
            "22% pretax margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 3.6,
          "notes": [
            "+12% Y/Y",
            "13% pretax margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 2.1,
          "notes": [
            "+8% Y/Y",
            "54% pretax margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.1,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 14.5,
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 5.1
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.8
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 1.9
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.7
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 2.3
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 1.7
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
        "value": 18.5,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.1,
        "notes": [
          "+8% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +10%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务",
              "notes": [
                "同比 +11%",
                "税前利润率 22%"
              ]
            },
            {
              "id": "commercial_services",
              "label": "商务服务",
              "notes": [
                "同比 +7%",
                "税前利润率 22%"
              ]
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务",
              "notes": [
                "同比 +12%",
                "税前利润率 13%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务",
              "notes": [
                "同比 +8%",
                "税前利润率 54%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "card_members_rewards",
                "label": "持卡人奖励"
              },
              {
                "id": "business_development",
                "label": "业务拓展"
              },
              {
                "id": "card_member_services",
                "label": "持卡人服务"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales_employee_benefits",
                "label": "销售与员工福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
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
              "同比 +8%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "american-express-q1-fy25",
    "company": "American Express",
    "period": "Q1 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/american-express-q1-fy25.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 17,
      "notes": [
        "+7% Y/Y",
        "Net of interest expenses; displayed segments minus All Other sum to $16.8B versus the reported $17.0B total; source rounding retained."
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 8.2,
          "notes": [
            "+10% Y/Y",
            "21% pretax margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 4,
          "notes": [
            "+7% Y/Y",
            "21% pretax margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 2.9,
          "notes": [
            "+8% Y/Y",
            "13% pretax margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 1.8,
          "notes": [
            "(3%) Y/Y",
            "55% pretax margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.2,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 12.5,
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 4.4
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.5
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 1.3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.5
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 2.1
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 1.6
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Revenue after credit loss provision",
        "value": 15.8,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.3
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.6,
        "notes": [
          "+6% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +7%",
            "扣除利息支出后；原图分部减所有其他合计 $16.8B，与所示 $17.0B 总额存在舍入差异，保留原数。"
          ],
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务",
              "notes": [
                "同比 +10%",
                "税前利润率 21%"
              ]
            },
            {
              "id": "commercial_services",
              "label": "商务服务",
              "notes": [
                "同比 +7%",
                "税前利润率 21%"
              ]
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务",
              "notes": [
                "同比 +8%",
                "税前利润率 13%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务",
              "notes": [
                "同比 (3%)",
                "税前利润率 55%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他（非利息亏损）",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "card_members_rewards",
                "label": "持卡人奖励"
              },
              {
                "id": "business_development",
                "label": "业务拓展"
              },
              {
                "id": "card_member_services",
                "label": "持卡人服务"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales_employee_benefits",
                "label": "销售与员工福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
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
              "同比 +6%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "loans_receivables",
            "label": "贷款与应收款",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.1pp"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "146",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$146B",
        "notes": [
          "+9% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Deposits\n$146B\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1194,
            173,
            150
          ]
        }
      },
      {
        "id": "loans_receivables",
        "label": "Loans and receivables",
        "value": "207",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$207B",
        "notes": [
          "+7% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Loans and receivables\n$207B\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            208,
            1194,
            405,
            150
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "10.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "10.7%",
        "notes": [
          "+0.1pp Y/Y"
        ],
        "basis": "unspecified",
        "quote": "CET1 ratio\n10.7%\n+0.1pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            620,
            1195,
            241,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "american-express-q1-fy23",
    "company": "American Express",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/american-express-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 14.3,
      "notes": [
        "+22% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 6.6,
          "notes": [
            "+25% Y/Y",
            "17% net margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 3.5,
          "notes": [
            "+15% Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 2.5,
          "notes": [
            "+22% Y/Y",
            "8% net margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 1.7,
          "notes": [
            "+23% Y/Y",
            "51% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.1,
        "notes": []
      },
      "operatingExpenses": {
        "total": 11.1,
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 3.8
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.4
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 1
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.3
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 2
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 1.6
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Revenue after credit loss provision",
        "value": 13.2,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 2.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 1.8,
        "notes": [
          "(13%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +22%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务",
              "notes": [
                "同比 +25%",
                "净利率 17%"
              ]
            },
            {
              "id": "commercial_services",
              "label": "商务服务",
              "notes": [
                "同比 +15%",
                "净利率 18%"
              ]
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务",
              "notes": [
                "同比 +22%",
                "净利率 8%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务",
              "notes": [
                "同比 +23%",
                "净利率 51%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他（非利息亏损）",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "card_members_rewards",
                "label": "持卡人奖励"
              },
              {
                "id": "business_development",
                "label": "业务拓展"
              },
              {
                "id": "card_member_services",
                "label": "持卡人服务"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales_employee_benefits",
                "label": "销售与员工福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
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
              "同比 (13%)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": []
          },
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "loans_receivables",
            "label": "贷款与应收款",
            "notes": [
              "同比 +18%"
            ]
          },
          {
            "id": "eps",
            "label": "每股收益",
            "notes": []
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.4%",
        "notes": [],
        "basis": "unspecified",
        "quote": "CET1 ratio\n11.4%",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1192,
            242,
            148
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "120",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$120B",
        "notes": [
          "+10% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Deposits\n$120B\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1192,
            372,
            148
          ]
        }
      },
      {
        "id": "loans_receivables",
        "label": "Loans and receivables",
        "value": "172",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$172B",
        "notes": [
          "+18% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Loans and receivables\n$172B\n+18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1192,
            430,
            148
          ]
        }
      },
      {
        "id": "eps",
        "label": "EPS",
        "value": "0.0024",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.40",
        "notes": [],
        "basis": "unspecified",
        "quote": "$2.40 EPS",
        "anchor": {
          "type": "image-box",
          "box": [
            2430,
            435,
            147,
            35
          ]
        }
      }
    ]
  },
  {
    "key": "american-express-q1-fy24",
    "company": "American Express",
    "period": "Q1 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/american-express-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.8,
      "notes": [
        "+11% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 7.5,
          "notes": [
            "+14% Y/Y",
            "22% margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 3.8,
          "notes": [
            "+8% Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 2.7,
          "notes": [
            "+8% Y/Y",
            "9% net margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 1.9,
          "notes": [
            "+7% Y/Y",
            "54% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.3,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 11.4,
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 3.8
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.4
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 1.1
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.5
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 2.1
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 1.5
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Revenue after credit loss provision",
        "value": 14.5,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.4,
        "notes": [
          "+9% Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "10.6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "10.6%",
        "notes": [
          "Flat Y/Y"
        ],
        "basis": "unspecified",
        "quote": "CET1 ratio\n10.6%\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1192,
            242,
            148
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "134",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$134B",
        "notes": [
          "+11% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Deposits\n$134B\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1192,
            372,
            148
          ]
        }
      },
      {
        "id": "loans_receivables",
        "label": "Loans and receivables",
        "value": "181",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$181B",
        "notes": [
          "+12% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Loans and receivables\n$181B\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1192,
            430,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +11%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务",
              "notes": [
                "同比 +14%",
                "利润率 22%"
              ]
            },
            {
              "id": "commercial_services",
              "label": "商务服务",
              "notes": [
                "同比 +8%",
                "净利润率 23%"
              ]
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务",
              "notes": [
                "同比 +8%",
                "净利润率 9%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务",
              "notes": [
                "同比 +7%",
                "净利润率 54%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他（非利息亏损）",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "card_members_rewards",
                "label": "持卡人奖励"
              },
              {
                "id": "business_development",
                "label": "业务拓展"
              },
              {
                "id": "card_member_services",
                "label": "持卡人服务"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales_employee_benefits",
                "label": "销售与员工福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
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
              "同比 +9%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "loans_receivables",
            "label": "贷款与应收款",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "american-express-q2-fy23",
    "company": "American Express",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/american-express-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.1,
      "notes": [
        "+12% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": [
            "US Consumer",
            "Services"
          ],
          "value": 6.9,
          "notes": [
            "+17% Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": [
            "Commercial",
            "Services"
          ],
          "value": 3.7,
          "notes": [
            "+7% Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": [
            "International",
            "Card Services"
          ],
          "value": 2.6,
          "notes": [
            "+7% Y/Y",
            "7% net margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": [
            "Global Merchant",
            "& Network Service"
          ],
          "value": 1.9,
          "notes": [
            "+43% Y/Y",
            "43% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": "All Other",
          "value": -0.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.2
      },
      "operatingExpenses": {
        "total": 11.1,
        "items": [
          {
            "id": "card_members_rewards",
            "label": [
              "Card members",
              "rewards"
            ],
            "value": 4
          },
          {
            "id": "business_development",
            "label": [
              "Business",
              "development"
            ],
            "value": 1.4
          },
          {
            "id": "card_member_services",
            "label": [
              "Card Member",
              "services"
            ],
            "value": 0.9
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.4
          },
          {
            "id": "sales_employee_benefits",
            "label": [
              "Sales & employee",
              "benefits"
            ],
            "value": 1.9
          },
          {
            "id": "other_general_operating",
            "label": [
              "Other general",
              "operating"
            ],
            "value": 1.5
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Revenue after credit loss provision",
        "value": 13.9,
        "notes": [
          "Balancing subtotal; not labeled separately in source."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 2.7
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.3,
        "notes": [
          "+11% Y/Y",
          "$2.89 EPS",
          "Source displays $1.2B. Operator correction dated 2026-10-15: $2.7B pretax less $0.4B tax = $2.3B."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.4%",
        "quote": "CET1 ratio\n11.4%\n+0.2pp Y/Y",
        "notes": [
          "+0.2pp Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1191,
            240,
            149
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "123",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$123B",
        "quote": "Deposits\n$123B\n+28% Y/Y",
        "notes": [
          "+28% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            274,
            1191,
            372,
            149
          ]
        }
      },
      {
        "id": "loans_receivables",
        "label": "Loans and receivables",
        "value": "179",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$179B",
        "quote": "Loans and receivables\n$179B\n+15% Y/Y",
        "notes": [
          "+15% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            429,
            149
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "revenue": {
          "items": [
            {
              "id": "us_consumer_services",
              "label": [
                "美国消费者",
                "服务"
              ],
              "notes": [
                "同比 +17%",
                "净利率 18%"
              ]
            },
            {
              "id": "commercial_services",
              "label": [
                "商务",
                "服务"
              ],
              "notes": [
                "同比 +7%",
                "净利率 21%"
              ]
            },
            {
              "id": "international_card_services",
              "label": [
                "国际",
                "卡服务"
              ],
              "notes": [
                "同比 +7%",
                "净利率 7%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": [
                "全球商户",
                "与网络服务"
              ],
              "notes": [
                "同比 +43%",
                "净利率 43%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "用于平衡的小计，原图未单独标示。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +11%",
              "每股收益 $2.89",
              "原图标为 $1.2B；按操作员 2026-10-15 更正，以税前 $2.7B 减税费 $0.4B，记为 $2.3B。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.2pp"
            ]
          },
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +28%"
            ]
          },
          {
            "id": "loans_receivables",
            "label": "贷款与应收款",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "american-express-q2-fy24",
    "company": "American Express",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/american-express-q2-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 16.3,
      "notes": [
        "+8% Y/Y",
        "Net of interest expenses. Source rounding retained: segment sum less $48M All Other loss is $16.352B; noninterest expense detail sums to $11.2B versus $11.3B total."
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 7.7,
          "notes": [
            "+12% Y/Y",
            "20% pretax margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 4,
          "notes": [
            "+6% Y/Y",
            "23% pretax margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 2.8,
          "notes": [
            "+9% Y/Y",
            "10% pretax margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 1.9,
          "notes": [
            "+1% Y/Y",
            "82% pretax margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.048,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.3,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 11.3,
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 4.2
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.4
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 1.2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.5
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 1.9
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 1
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Revenue after credit loss provision",
        "value": 15,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3,
        "notes": [
          "+39% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +8%",
            "收入已扣除利息支出。保留原图舍入差异：分部减其他亏损为 $16.352B；非利息费用明细合计 $11.2B，图示总额为 $11.3B。"
          ],
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务",
              "notes": [
                "同比 +12%",
                "税前利润率 20%"
              ]
            },
            {
              "id": "commercial_services",
              "label": "商务服务",
              "notes": [
                "同比 +6%",
                "税前利润率 23%"
              ]
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务",
              "notes": [
                "同比 +9%",
                "税前利润率 10%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务",
              "notes": [
                "同比 +1%",
                "税前利润率 82%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他（非利息亏损）",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "card_members_rewards",
                "label": "持卡人奖励"
              },
              {
                "id": "business_development",
                "label": "业务拓展"
              },
              {
                "id": "card_member_services",
                "label": "持卡人服务"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales_employee_benefits",
                "label": "销售与员工福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
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
              "同比 +39%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.2pp"
            ]
          },
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "loans_receivables",
            "label": "贷款与应收款",
            "notes": [
              "同比 +11%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "10.8",
        "unit": "%",
        "currency": null,
        "literal": "10.8%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+0.2pp Y/Y"
        ],
        "quote": "CET1 ratio\n10.8%\n+0.2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1192,
            242,
            148
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "134",
        "unit": "B",
        "currency": "USD",
        "literal": "$134B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Deposits\n$134B\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1192,
            372,
            148
          ]
        }
      },
      {
        "id": "loans_receivables",
        "label": "Loans and receivables",
        "value": "199",
        "unit": "B",
        "currency": "USD",
        "literal": "$199B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Loans and receivables\n$199B\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1192,
            430,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "american-express-q2-fy25",
    "company": "American Express",
    "period": "Q2 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/american-express-q2-fy25.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 17.9,
      "notes": [
        "+9% Y/Y",
        "Net of interest expenses"
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 8.6,
          "notes": [
            "+11% Y/Y",
            "20% pretax margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 4.2,
          "notes": [
            "+7% Y/Y",
            "21% pretax margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 3.2,
          "notes": [
            "+15% Y/Y",
            "14% pretax margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 1.9,
          "notes": [
            "+3% Y/Y",
            "55% pretax margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.4,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 12.9,
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 4.6
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.6
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 1.3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.6
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 2.3
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 1.7
          }
        ],
        "notes": [
          "Displayed rounded expense items sum to $13.1B versus the source total $12.9B."
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Revenue after credit loss provision",
        "value": 16.5,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.6
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.9,
        "notes": [
          "(4%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +9%",
            "扣除利息支出后"
          ],
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务",
              "notes": [
                "同比 +11%",
                "税前利润率 20%"
              ]
            },
            {
              "id": "commercial_services",
              "label": "商务服务",
              "notes": [
                "同比 +7%",
                "税前利润率 21%"
              ]
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务",
              "notes": [
                "同比 +15%",
                "税前利润率 14%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务",
              "notes": [
                "同比 +3%",
                "税前利润率 55%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他（非利息亏损）",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "card_members_rewards",
                "label": "持卡人奖励"
              },
              {
                "id": "business_development",
                "label": "业务拓展"
              },
              {
                "id": "card_member_services",
                "label": "持卡人服务"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales_employee_benefits",
                "label": "销售与员工福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
              }
            ],
            "notes": [
              "原图各项支出舍入后合计 $13.1B，所示总额为 $12.9B。"
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
              "同比 (4%)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "loans_receivables",
            "label": "贷款与应收款",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.2pp)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "149",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$149B",
        "notes": [
          "+12% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Deposits\n$149B\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1194,
            173,
            150
          ]
        }
      },
      {
        "id": "loans_receivables",
        "label": "Loans and receivables",
        "value": "212",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$212B",
        "notes": [
          "+7% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Loans and receivables\n$212B\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            208,
            1194,
            405,
            150
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "10.6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "10.6%",
        "notes": [
          "(0.2pp) Y/Y"
        ],
        "basis": "unspecified",
        "quote": "CET1 ratio\n10.6%\n(0.2pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            620,
            1195,
            241,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "american-express-q3-fy23",
    "company": "American Express",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/american-express-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.4,
      "notes": [
        "+13% Y/Y",
        "Net of interest expenses. Displayed segments less All Other total $15.3B versus $15.4B revenue; source rounding retained."
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 7.2,
          "notes": [
            "+16% Y/Y",
            "22% net margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 3.7,
          "notes": [
            "+7% Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 2.6,
          "notes": [
            "+17% Y/Y",
            "17% net margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 1.9,
          "notes": [
            "+11% Y/Y",
            "53% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.2,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 11,
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 3.8
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.4
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 1
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.2
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 2
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 1.6
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
        "value": 14.2,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
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
          "+30% Y/Y",
          "Displayed pretax income $3.2B less $0.6B tax differs from $2.5B net income by $0.1B due to source rounding; amounts retained."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +13%",
            "扣除利息支出后。原图分部减所有其他为 $15.3B，与收入 $15.4B 有舍入差异；保留原数。"
          ],
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务",
              "notes": [
                "同比 +16%",
                "净利率 22%"
              ]
            },
            {
              "id": "commercial_services",
              "label": "商务服务",
              "notes": [
                "同比 +7%",
                "净利率 23%"
              ]
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务",
              "notes": [
                "同比 +17%",
                "净利率 17%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务",
              "notes": [
                "同比 +11%",
                "净利率 53%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他（非利息亏损）",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "card_members_rewards",
                "label": "持卡人奖励"
              },
              {
                "id": "business_development",
                "label": "业务拓展"
              },
              {
                "id": "card_member_services",
                "label": "持卡人服务"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales_employee_benefits",
                "label": "销售与员工福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
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
              "同比 +30%",
              "原图税前利润 $3.2B 减税费 $0.6B，与净利润 $2.5B 有 $0.1B 舍入差异；保留原数。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.1 pp"
            ]
          },
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "loans_receivables",
            "label": "贷款与应收款",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "10.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "10.7%",
        "notes": [
          "+0.1 pp Y/Y"
        ],
        "basis": "unspecified",
        "quote": "CET1 ratio\n10.7%\n+0.1 pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1192,
            242,
            150
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "124",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$124B",
        "notes": [
          "+13% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Deposits\n$124B\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1192,
            372,
            150
          ]
        }
      },
      {
        "id": "loans_receivables",
        "label": "Loans and receivables",
        "value": "183",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$183B",
        "notes": [
          "+15% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Loans and receivables\n$183B\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1192,
            430,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "american-express-q3-fy24",
    "company": "American Express",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/american-express-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 16.6,
      "notes": [
        "+8% Y/Y",
        "Net of interest expenses; segment sum minus All Other is $16.6B.",
        "Displayed revenue less provision and noninterest expenses is $3.1B versus $3.2B pretax income; source rounding retained."
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 7.9,
          "notes": [
            "+10% Y/Y",
            "21% pretax margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 4,
          "notes": [
            "+7% Y/Y",
            "23% pretax margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 2.9,
          "notes": [
            "+11% Y/Y",
            "15% pretax margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 1.9,
          "notes": [
            "(0%) Y/Y",
            "54% pretax margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.4,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 12.1,
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 4.2
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.4
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 1.2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.5
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 1.9
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 1.8
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Revenue after credit loss provision",
        "value": 15.2,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
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
          "+2% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +8%",
            "扣除利息支出后；分部减所有其他合计 $16.6B。",
            "原图收入减拨备及非利息支出为 $3.1B，所示税前利润为 $3.2B，保留舍入差异。"
          ],
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务",
              "notes": [
                "同比 +10%",
                "税前利润率 21%"
              ]
            },
            {
              "id": "commercial_services",
              "label": "商务服务",
              "notes": [
                "同比 +7%",
                "税前利润率 23%"
              ]
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务",
              "notes": [
                "同比 +11%",
                "税前利润率 15%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务",
              "notes": [
                "同比 (0%)",
                "税前利润率 54%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他（非利息亏损）",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "card_members_rewards",
                "label": "持卡人奖励"
              },
              {
                "id": "business_development",
                "label": "业务拓展"
              },
              {
                "id": "card_member_services",
                "label": "持卡人服务"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales_employee_benefits",
                "label": "销售与员工福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
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
              "同比 +2%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "loans_receivables",
            "label": "贷款与应收款",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比持平"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "135",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$135B",
        "notes": [
          "+9% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Deposits\n$135B\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1194,
            173,
            150
          ]
        }
      },
      {
        "id": "loans_receivables",
        "label": "Loans and receivables",
        "value": "202",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$202B",
        "notes": [
          "+10% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Loans and receivables\n$202B\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            208,
            1194,
            405,
            150
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "10.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "10.7%",
        "notes": [
          "Flat Y/Y"
        ],
        "basis": "unspecified",
        "quote": "CET1 ratio\n10.7%\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            620,
            1195,
            241,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "american-express-q3-fy25",
    "company": "American Express",
    "period": "Q3 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/american-express-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 18.4,
      "notes": [
        "+11% Y/Y",
        "Net of interest expenses; rounded source segment amounts sum to $18.481B after $19M All Other loss."
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 8.9,
          "notes": [
            "+11% Y/Y",
            "21% pretax margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 4.3,
          "notes": [
            "+7% Y/Y",
            "25% pretax margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 3.3,
          "notes": [
            "+14% Y/Y",
            "13% pretax margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 2,
          "notes": [
            "+7% Y/Y",
            "53% pretax margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.019,
          "notes": [],
          "valueText": "($19M)"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.3,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 13.3,
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 4.6
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.6
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 1.5
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.6
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 2.3
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 1.8
          }
        ],
        "notes": [
          "Source rounded expense items sum to $13.4B; reported total retained."
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
        "value": 17.1,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.9,
        "notes": [
          "+16% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +11%",
            "扣除利息支出后；分部舍入金额减 $19M 后合计 $18.481B，保留来源总额。"
          ],
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务",
              "notes": [
                "同比 +11%",
                "税前利润率 21%"
              ]
            },
            {
              "id": "commercial_services",
              "label": "商务服务",
              "notes": [
                "同比 +7%",
                "税前利润率 25%"
              ]
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务",
              "notes": [
                "同比 +14%",
                "税前利润率 13%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务",
              "notes": [
                "同比 +7%",
                "税前利润率 53%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他（非利息亏损）",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "card_members_rewards",
                "label": "持卡人奖励"
              },
              {
                "id": "business_development",
                "label": "业务拓展"
              },
              {
                "id": "card_member_services",
                "label": "持卡人服务"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales_employee_benefits",
                "label": "销售与员工福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
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
              "同比 +16%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "billed_business",
            "label": "签账业务额",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.2pp)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "150",
        "unit": "B",
        "currency": "USD",
        "literal": "$150B",
        "notes": [
          "+11% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Deposits\n$150B\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1195,
            173,
            148
          ]
        }
      },
      {
        "id": "billed_business",
        "label": "Billed Business",
        "value": "421",
        "unit": "B",
        "currency": "USD",
        "literal": "$421B",
        "notes": [
          "+9% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Billed Business\n$421B\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            208,
            1195,
            329,
            148
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "10.5",
        "unit": "%",
        "currency": null,
        "literal": "10.5%",
        "notes": [
          "(0.2pp) Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "CET1 ratio\n10.5%\n(0.2pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            547,
            1195,
            241,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "american-express-q4-fy23",
    "company": "American Express",
    "period": "Q4 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/american-express-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.8,
      "notes": [
        "+11% Y/Y",
        "Net of interest expenses. Rounded segments less $37M All Other loss total $15.763B; reported revenue $15.8B retained."
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 7.4,
          "notes": [
            "+13% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 3.8,
          "notes": [
            "+7% Y/Y",
            "17% net margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 2.7,
          "notes": [
            "+12% Y/Y",
            "5% net margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 1.9,
          "notes": [
            "+10% Y/Y",
            "42% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.037,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.4,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 11.9,
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 3.9
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.5
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 1.1
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.2
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 2.1
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 2.1
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
        "value": 14.4,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 2.5
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 1.9,
        "notes": [
          "+23% Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "10.5",
        "unit": "%",
        "currency": null,
        "literal": "10.5%",
        "notes": [
          "+0.2pp Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "CET1 ratio\n10.5%\n+0.2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1192,
            241,
            150
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "129",
        "unit": "B",
        "currency": "USD",
        "literal": "$129B",
        "notes": [
          "+17% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Deposits\n$129B\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1192,
            372,
            150
          ]
        }
      },
      {
        "id": "loans_receivables",
        "label": "Loans and receivables",
        "value": "193",
        "unit": "B",
        "currency": "USD",
        "literal": "$193B",
        "notes": [
          "+13% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Loans and receivables\n$193B\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1192,
            430,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "revenue": {
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务"
            },
            {
              "id": "commercial_services",
              "label": "商务服务"
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务"
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务"
            },
            {
              "id": "all_other",
              "label": "所有其他（非利息亏损）"
            }
          ]
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
            "id": "loans_receivables",
            "label": "贷款与应收款"
          }
        ]
      }
    }
  },
  {
    "key": "american-express-q4-fy24",
    "company": "American Express",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/american-express-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 17.2,
      "notes": [
        "+9% Y/Y",
        "Net of interest expenses; displayed segments total $17.3B before $0.1B All Other loss."
      ],
      "items": [
        {
          "id": "us_consumer_services",
          "label": "US Consumer Services",
          "value": 8.3,
          "notes": [
            "+12% Y/Y",
            "19% pretax margin"
          ]
        },
        {
          "id": "commercial_services",
          "label": "Commercial Services",
          "value": 4.1,
          "notes": [
            "+8% Y/Y",
            "20% pretax margin"
          ]
        },
        {
          "id": "international_card_services",
          "label": "International Card Services",
          "value": 3,
          "notes": [
            "+11% Y/Y",
            "1% pretax margin"
          ]
        },
        {
          "id": "global_merchant_network",
          "label": "Global Merchant & Network Service",
          "value": 1.9,
          "notes": [
            "(2%) Y/Y",
            "45% pretax margin"
          ]
        },
        {
          "id": "all_other",
          "label": "All Other (noninterest loss)",
          "value": -0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_losses",
        "label": "Provision for credit losses",
        "value": 1.3,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 13.1,
        "items": [
          {
            "id": "card_members_rewards",
            "label": "Card members rewards",
            "value": 4.4
          },
          {
            "id": "business_development",
            "label": "Business development",
            "value": 1.6
          },
          {
            "id": "card_member_services",
            "label": "Card Member services",
            "value": 1.3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.6
          },
          {
            "id": "sales_employee_benefits",
            "label": "Sales & employee benefits",
            "value": 2.1
          },
          {
            "id": "other_general_operating",
            "label": "Other general operating",
            "value": 2.1
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
        "value": 15.9,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 2.8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.2,
        "notes": [
          "+12% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +9%",
            "扣除利息支出后；分部合计 173 亿美元，减所有其他亏损 1 亿美元。"
          ],
          "items": [
            {
              "id": "us_consumer_services",
              "label": "美国消费者服务",
              "notes": [
                "同比 +12%",
                "税前利润率 19%"
              ]
            },
            {
              "id": "commercial_services",
              "label": "商务服务",
              "notes": [
                "同比 +8%",
                "税前利润率 20%"
              ]
            },
            {
              "id": "international_card_services",
              "label": "国际卡服务",
              "notes": [
                "同比 +11%",
                "税前利润率 1%"
              ]
            },
            {
              "id": "global_merchant_network",
              "label": "全球商户与网络服务",
              "notes": [
                "同比 (2%)",
                "税前利润率 45%"
              ]
            },
            {
              "id": "all_other",
              "label": "所有其他（非利息损失）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "card_members_rewards",
                "label": "持卡人奖励"
              },
              {
                "id": "business_development",
                "label": "业务拓展"
              },
              {
                "id": "card_member_services",
                "label": "持卡人服务"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales_employee_benefits",
                "label": "销售与员工福利"
              },
              {
                "id": "other_general_operating",
                "label": "其他一般运营"
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
              "同比 +12%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deposits",
            "label": "存款",
            "notes": [
              "同比 +2%"
            ]
          },
          {
            "id": "loans_receivables",
            "label": "贷款与应收款",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比持平"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deposits",
        "label": "Deposits",
        "value": "138",
        "unit": "B",
        "currency": "USD",
        "literal": "$138B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Deposits\n$138B\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1195,
            175,
            148
          ]
        }
      },
      {
        "id": "loans_receivables",
        "label": "Loans and receivables",
        "value": "208",
        "unit": "B",
        "currency": "USD",
        "literal": "$208B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Loans and receivables\n$208B\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            208,
            1195,
            405,
            148
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "10.5",
        "unit": "%",
        "currency": null,
        "literal": "10.5%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "CET1 ratio\n10.5%\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            619,
            1195,
            241,
            148
          ]
        }
      }
    ]
  }
]);
})(window);
