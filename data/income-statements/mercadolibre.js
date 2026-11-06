/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "mercadolibre-q4-fy24",
    "company": "MercadoLibre",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.1,
      "notes": [
        "+37% Y/Y"
      ],
      "items": [
        {
          "id": "commerce",
          "label": "Commerce",
          "value": 3.6,
          "notes": [
            "+44% Y/Y"
          ],
          "children": [
            {
              "id": "marketplace",
              "label": "Intermediation services and advertising sales",
              "value": 2.8,
              "notes": [
                "+45% Y/Y"
              ]
            },
            {
              "id": "shipping",
              "label": "Product sales and shipping fees",
              "value": 0.7,
              "notes": [
                "+41% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "fintech",
          "label": "Fintech",
          "value": 2.5,
          "notes": [
            "+29% Y/Y"
          ],
          "children": [
            {
              "id": "payments",
              "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
              "value": 1.4,
              "notes": [
                "+20% Y/Y"
              ]
            },
            {
              "id": "pos",
              "label": "Point of sale devices",
              "value": 0.019,
              "notes": [
                "+111% Y/Y"
              ]
            },
            {
              "id": "credit",
              "label": "Interest earned on loans and credit card transactions",
              "value": 1,
              "notes": [
                "+41% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.3
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.6
          },
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.3
          },
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 0.5,
            "notes": [
              "Interest margin after losses 28%"
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
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.7,
        "notes": [
          "45% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.8,
        "notes": [
          "14% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.6,
        "notes": [
          "11% margin",
          "+7pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "items": [
            {
              "id": "commerce",
              "label": "电商"
            },
            {
              "id": "fintech",
              "label": "金融科技"
            }
          ]
        }
      }
    }
  },
  {
    "key": "mercadolibre-q2-fy26",
    "company": "MercadoLibre",
    "period": "Q2 FY26",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 10.2,
      "notes": [
        "+50% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Intermediation services and advertising sales",
          "value": 4.3,
          "notes": [
            "+42% Y/Y"
          ]
        },
        {
          "id": "shipping",
          "label": "Product sales and shipping fees",
          "value": 1.5,
          "notes": [
            "+80% Y/Y"
          ]
        },
        {
          "id": "payments",
          "label": "Payment solution, installments, credit & debit card fees, insurtech fees",
          "value": 2.1,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "pos",
          "label": "Point of sales devices",
          "value": 0.016,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "credit",
          "label": "Interest earned on loans and credit card transactions",
          "value": 2.3,
          "notes": [
            "+72% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_segments",
          "label": "Revenue by segment",
          "total": 10.2,
          "items": [
            {
              "id": "commerce",
              "label": "Commerce",
              "value": 5.8
            },
            {
              "id": "fintech",
              "label": "Fintech",
              "value": 4.4
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6
      },
      "operatingExpenses": {
        "total": 3.5,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 1.1
          },
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.7
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.3
          },
          {
            "id": "provision_doubtful",
            "label": "Provision doubtful",
            "value": 1.3,
            "notes": [
              "Interest margin after losses 21%"
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
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4.2,
        "notes": [
          "41% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.7,
        "notes": [
          "7% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "5% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +50%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "撮合服务与广告销售",
              "notes": [
                "同比 +42%"
              ]
            },
            {
              "id": "shipping",
              "label": "商品销售与配送费",
              "notes": [
                "同比 +80%"
              ]
            },
            {
              "id": "payments",
              "label": "支付解决方案、分期、信用卡及借记卡手续费、保险科技费",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "pos",
              "label": "销售点设备",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "credit",
              "label": "贷款与信用卡交易利息收入",
              "notes": [
                "同比 +72%"
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
                "label": "销售与营销"
              },
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "损失后利息利润率 21%"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 41%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mercadolibre-q1-fy26",
    "company": "MercadoLibre",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/mercadolibre-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.8,
      "notes": [
        "+49% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Intermediation services and advertising sales",
          "value": 3.8,
          "notes": [
            "+39% Y/Y"
          ]
        },
        {
          "id": "shipping",
          "label": "Product sales and shipping fees",
          "value": 1.1,
          "notes": [
            "+85% Y/Y"
          ]
        },
        {
          "id": "payments",
          "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
          "value": 1.9,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "pos",
          "label": "Point of sale devices",
          "value": 0.018,
          "notes": [
            "+38% Y/Y"
          ]
        },
        {
          "id": "credit",
          "label": "Interest earned on loans and credit card transactions",
          "value": 2,
          "notes": [
            "+76% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5
      },
      "operatingExpenses": {
        "total": 3.3,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 1
          },
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.7
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.3
          },
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 1.2,
            "notes": [
              "Interest margin after losses 18%"
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.032,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.032
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.9,
        "notes": [
          "44% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "7% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "5% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +49%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "撮合服务与广告销售",
              "notes": [
                "同比 +39%"
              ]
            },
            {
              "id": "shipping",
              "label": "商品销售与配送费",
              "notes": [
                "同比 +85%"
              ]
            },
            {
              "id": "payments",
              "label": "支付解决方案、分期、信用卡和借记卡手续费及保险科技费用",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "id": "pos",
              "label": "销售点设备",
              "notes": [
                "同比 +38%"
              ]
            },
            {
              "id": "credit",
              "label": "贷款与信用卡交易利息收入",
              "notes": [
                "同比 +76%"
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
                "label": "销售与营销"
              },
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "损失后利息利润率 18%"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 44%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 (6 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mercadolibre-q4-fy25",
    "company": "MercadoLibre",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/mercadolibre-q4-fy25.png",
    "roundingTolerance": 0.05,
    "revenue": {
      "total": 8.8,
      "notes": [
        "+45% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Intermediation services and advertising sales",
          "value": 3.8,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "shipping",
          "label": "Product sales and shipping fees",
          "value": 1.2,
          "notes": [
            "+71% Y/Y"
          ]
        },
        {
          "id": "payments",
          "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
          "value": 1.9,
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "pos",
          "label": "Point of sale devices",
          "value": 0.018,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "credit",
          "label": "Interest earned on loans and credit card transactions",
          "value": 1.9,
          "notes": [
            "+77% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 1
          },
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.3
          },
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 1,
            "notes": [
              "Interest margin after losses 23%"
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.8,
        "notes": [
          "43% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.9,
        "notes": [
          "10% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.6,
        "notes": [
          "6% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +45%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "撮合服务与广告销售",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "id": "shipping",
              "label": "商品销售与配送费",
              "notes": [
                "同比 +71%"
              ]
            },
            {
              "id": "payments",
              "label": "支付解决方案、分期、信用卡和借记卡手续费及保险科技费用",
              "notes": [
                "同比 +33%"
              ]
            },
            {
              "id": "pos",
              "label": "销售点设备",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "credit",
              "label": "贷款与信用卡交易利息收入",
              "notes": [
                "同比 +77%"
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
                "label": "销售与营销"
              },
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "损失后利息利润率 23%"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 43%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mercadolibre-q4-fy23",
    "company": "MercadoLibre",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.3,
      "notes": [
        "+42% Y/Y",
        "+83% Y/Y fxn"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Intermediation services and advertising sales",
          "value": 2,
          "notes": [
            "+45% Y/Y"
          ]
        },
        {
          "id": "shipping",
          "label": "Product sales and shipping fees",
          "value": 0.5,
          "notes": [
            "+61% Y/Y"
          ]
        },
        {
          "id": "payments",
          "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
          "value": 1,
          "notes": [
            "+37% Y/Y"
          ]
        },
        {
          "id": "pos",
          "label": "Point of sale devices",
          "value": 0.009,
          "notes": []
        },
        {
          "id": "credit",
          "label": "Interest earned on loans and credit card transactions",
          "value": 0.7,
          "notes": [
            "+33% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_segments",
          "label": "Revenue by segment",
          "total": 4.3,
          "items": [
            {
              "id": "commerce",
              "label": "Commerce",
              "value": 2.5,
              "notes": [
                "+48% Y/Y",
                "+91% Y/Y fxn"
              ]
            },
            {
              "id": "fintech",
              "label": "Fintech",
              "value": 1.8,
              "notes": [
                "+34% Y/Y",
                "+73% Y/Y fxn"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": [
          "Cost of",
          "revenue"
        ],
        "value": 2.3,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.7,
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.7,
            "notes": []
          },
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.5,
            "notes": []
          },
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 0.3,
            "notes": [
              "Interest margin after losses 40%"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.2,
            "notes": []
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.01,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.01,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2,
        "notes": [
          "46% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.2,
        "notes": [
          "6% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "4% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 +42%",
            "固定汇率同比 +83%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "撮合服务与广告销售",
              "notes": [
                "同比 +45%"
              ]
            },
            {
              "id": "shipping",
              "label": "商品销售与配送费",
              "notes": [
                "同比 +61%"
              ]
            },
            {
              "id": "payments",
              "label": "支付及金融服务费用",
              "notes": [
                "同比 +37%"
              ]
            },
            {
              "id": "pos",
              "label": "销售点设备",
              "notes": []
            },
            {
              "id": "credit",
              "label": "贷款与信用卡利息收入",
              "notes": [
                "同比 +33%"
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
                "id": "product_development",
                "label": "产品开发",
                "notes": []
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": []
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "损失后利息利润率 40%"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 46%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 (6 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mercadolibre-q3-fy25",
    "company": "MercadoLibre",
    "period": "Q3 FY25",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q3-fy25.png",
    "roundingTolerance": 0.05,
    "revenue": {
      "total": 7.4,
      "notes": [
        "+39% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Intermediation services and advertising sales",
          "value": 3.3,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "shipping",
          "label": "Product sales and shipping fees",
          "value": 0.9,
          "notes": [
            "+70% Y/Y"
          ]
        },
        {
          "id": "payments",
          "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
          "value": 1.7,
          "notes": [
            "+35% Y/Y"
          ]
        },
        {
          "id": "pos",
          "label": "Point of sale devices",
          "value": 0.017,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "credit",
          "label": "Interest earned on loans and credit card transactions",
          "value": 1.5,
          "notes": [
            "+69% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_segments",
          "label": "Revenue by segment",
          "total": 7.4,
          "items": [
            {
              "id": "commerce",
              "label": "Commerce",
              "value": 4.2,
              "notes": [
                "+33% Y/Y"
              ]
            },
            {
              "id": "fintech",
              "label": "Fintech",
              "value": 3.2,
              "notes": [
                "+49% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 4.2
      },
      "operatingExpenses": {
        "total": 2.5,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.8
          },
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.3
          },
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 0.8,
            "notes": [
              "Interest margin after losses 21%"
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.2,
        "notes": [
          "43% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.7,
        "notes": [
          "10% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "6% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +39%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "撮合服务与广告销售",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "shipping",
              "label": "商品销售与配送费",
              "notes": [
                "同比 +70%"
              ]
            },
            {
              "id": "payments",
              "label": "支付解决方案、分期、信用卡和借记卡手续费及保险科技费用",
              "notes": [
                "同比 +35%"
              ]
            },
            {
              "id": "pos",
              "label": "销售点设备",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "credit",
              "label": "贷款与信用卡交易利息收入",
              "notes": [
                "同比 +69%"
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
                "label": "销售与营销"
              },
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "损失后利息利润率 21%"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 43%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 (1 个百分点)"
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
    "key": "mercadolibre-q2-fy23",
    "company": "MercadoLibre",
    "period": "Q2 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q2-fy23.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source rounds components independently. Confirmed against MercadoLibre Q2 2023 Form 10-Q: gross profit 1720M, operating expenses 1162M, operating profit 558M; printed values retained. https://www.sec.gov/Archives/edgar/data/1099590/000109959023000020/meli-20230630.htm"
    ],
    "revenue": {
      "total": 3.4,
      "items": [
        {
          "id": "marketplace",
          "label": "Intermediation services and advertising sales",
          "value": 1.6,
          "notes": [
            "+37% Y/Y"
          ]
        },
        {
          "id": "shipping",
          "label": "Product sales and shipping fees",
          "value": 0.4,
          "notes": [
            "+41% Y/Y"
          ]
        },
        {
          "id": "payments",
          "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
          "value": 0.9,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "pos",
          "label": "Point of sale devices",
          "value": 0.012,
          "notes": []
        },
        {
          "id": "credit",
          "label": "Interest earned on loans and credit card transactions",
          "value": 0.5,
          "notes": [
            "+13% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_segments",
          "label": "Revenue by segment",
          "total": 3.4,
          "items": [
            {
              "id": "commerce",
              "label": "Commerce",
              "value": 1.9,
              "notes": [
                "+38% Y/Y",
                "+65% Y/Y fxn"
              ]
            },
            {
              "id": "fintech",
              "label": "Fintech",
              "value": 1.5,
              "notes": [
                "+24% Y/Y",
                "+48% Y/Y fxn"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.7,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 0.2,
            "notes": [
              "Interest margin",
              "after losses 37%"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.7,
        "notes": [
          "50% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "16% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "8% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "revenue": {
          "items": [
            {
              "id": "marketplace",
              "label": "撮合服务与广告销售"
            },
            {
              "id": "shipping",
              "label": "商品销售与配送费"
            },
            {
              "id": "payments",
              "label": "支付及金融服务费用"
            },
            {
              "id": "pos",
              "label": "销售点设备"
            },
            {
              "id": "credit",
              "label": "贷款与信用卡利息收入"
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
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sm",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "损失后利息",
                  "利润率 37%"
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
              "id": "other",
              "label": "其他"
            }
          ]
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
        }
      }
    }
  },
  {
    "key": "mercadolibre-q2-fy25",
    "company": "MercadoLibre",
    "period": "Q2 FY25",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.8,
      "notes": [
        "+34% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Intermediation services and advertising sales",
          "value": 3,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "shipping",
          "label": "Product sales and shipping fees",
          "value": 0.8,
          "notes": [
            "+73% Y/Y"
          ]
        },
        {
          "id": "payments",
          "label": "Payment solution, installments, credit & debit card fees, insurtech fees",
          "value": 1.6,
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "pos",
          "label": "Point of sales devices",
          "value": 0.015,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "credit",
          "label": "Interest earned on loans and credit card transactions",
          "value": 1.3,
          "notes": [
            "+52% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_segments",
          "label": "Revenue by segment",
          "total": 6.8,
          "items": [
            {
              "id": "commerce",
              "label": "Commerce",
              "value": 3.8
            },
            {
              "id": "fintech",
              "label": "Fintech",
              "value": 3
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.7
      },
      "operatingExpenses": {
        "total": 2.3,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.7
          },
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.3
          },
          {
            "id": "provision_doubtful",
            "label": "Provision doubtful",
            "value": 0.8,
            "notes": [
              "Interest margin after losses 23%"
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.1,
        "notes": [
          "46% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.8,
        "notes": [
          "12% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "8% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +34%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "撮合服务与广告销售",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "shipping",
              "label": "商品销售与配送费",
              "notes": [
                "同比 +73%"
              ]
            },
            {
              "id": "payments",
              "label": "支付解决方案、分期、信用卡及借记卡手续费、保险科技费",
              "notes": [
                "同比 +33%"
              ]
            },
            {
              "id": "pos",
              "label": "销售点设备",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "credit",
              "label": "贷款与信用卡交易利息收入",
              "notes": [
                "同比 +52%"
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
                "label": "销售与营销"
              },
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "损失后利息利润率 23%"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 46%",
              "同比 (1) 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 (2) 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 (3) 个百分点"
            ]
          }
        }
      }
    },
    "notes": [
      "Source operating expense items sum to $2.4B vs printed total $2.3B. SEC comparative Q2 2025: sales and marketing $751M, provision for doubtful accounts $690M, total operating expenses $2,269M. Printed source values retained under 0.15B roundingTolerance; multiple discrepant items prevent a unique one-item correction. https://www.sec.gov/Archives/edgar/data/1099590/000109959026000021/meli-20260805xex991.htm"
    ]
  },
  {
    "key": "mercadolibre-q3-fy22",
    "company": "MercadoLibre",
    "period": "Q3 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.7,
      "notes": [
        "+45% Y/Y"
      ],
      "items": [
        {
          "id": "commerce",
          "label": "Commerce",
          "value": 1.5,
          "notes": [
            "+20% Y/Y"
          ],
          "children": [
            {
              "id": "marketplace",
              "label": "Intermediation services and advertising sales",
              "value": 1.2,
              "notes": [
                "+21% Y/Y"
              ]
            },
            {
              "id": "shipping",
              "label": "Product sales and shipping fees",
              "value": 0.2,
              "notes": [
                "+12% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "fintech",
          "label": "Fintech",
          "value": 1.2,
          "notes": [
            "+94% Y/Y"
          ],
          "children": [
            {
              "id": "payments",
              "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
              "value": 0.7,
              "notes": [
                "+65% Y/Y"
              ]
            },
            {
              "id": "pos",
              "label": "Point of sale devices",
              "value": 0.011,
              "notes": []
            },
            {
              "id": "credit",
              "label": "Interest earned on loans and credit card transactions",
              "value": 0.5,
              "notes": [
                "+151% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.3
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.3
          },
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.3
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.2
          },
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 0.3,
            "notes": [
              "Interest margin after losses 37%"
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
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.3,
        "notes": [
          "50% margin",
          "+7pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "11% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.1,
        "notes": [
          "5% margin",
          "Unchanged"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +45%"
          ],
          "items": [
            {
              "id": "commerce",
              "label": "电商",
              "notes": [
                "同比 +20%"
              ],
              "children": [
                {
                  "id": "marketplace",
                  "label": "撮合服务与广告销售",
                  "notes": [
                    "同比 +21%"
                  ]
                },
                {
                  "id": "shipping",
                  "label": "商品销售与配送费",
                  "notes": [
                    "同比 +12%"
                  ]
                }
              ]
            },
            {
              "id": "fintech",
              "label": "金融科技",
              "notes": [
                "同比 +94%"
              ],
              "children": [
                {
                  "id": "payments",
                  "label": "支付及金融服务费用",
                  "notes": [
                    "同比 +65%"
                  ]
                },
                {
                  "id": "pos",
                  "label": "销售点设备",
                  "notes": []
                },
                {
                  "id": "credit",
                  "label": "贷款与信用卡利息收入",
                  "notes": [
                    "同比 +151%"
                  ]
                }
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
                "label": "销售与营销"
              },
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "损失后利息利润率 37%"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 50%",
              "同比 +7 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "保持不变"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mercadolibre-q1-fy23",
    "company": "MercadoLibre",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3,
      "notes": [
        "+35% Y/Y",
        "+58% Y/Y fxn"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Intermediation services and advertising sales",
          "value": 1.4,
          "notes": [
            "+36% Y/Y"
          ]
        },
        {
          "id": "shipping",
          "label": "Product sales and shipping fees",
          "value": 0.3,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "payments",
          "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
          "value": 0.8,
          "notes": [
            "+46% Y/Y"
          ]
        },
        {
          "id": "pos",
          "label": "Point of sale devices",
          "value": 0.013
        },
        {
          "id": "credit",
          "label": "Interest earned on loans and credit card transactions",
          "value": 0.5,
          "notes": [
            "+33% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_segments",
          "label": "Revenue by segment",
          "total": 3,
          "items": [
            {
              "id": "commerce",
              "label": "Commerce",
              "value": 1.7,
              "notes": [
                "+31% Y/Y",
                "+54% Y/Y fxn"
              ]
            },
            {
              "id": "fintech",
              "label": "Fintech",
              "value": 1.4,
              "notes": [
                "+40% Y/Y",
                "+64% Y/Y fxn"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.5
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.3
          },
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.4
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.2
          },
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 0.3,
            "notes": [
              "Interest margin after losses 39%"
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
      "total": 0.017,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.017
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.5,
        "notes": [
          "51% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "11% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "7% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +35%",
            "固定汇率同比 +58%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "撮合服务、广告销售",
              "notes": [
                "同比 +36%"
              ]
            },
            {
              "id": "shipping",
              "label": "商品销售+ 配送费",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "payments",
              "label": "支付方案、分期、信用卡及借记卡手续费、保险科技费",
              "notes": [
                "同比 +46%"
              ]
            },
            {
              "id": "pos",
              "label": "销售点设备",
              "notes": []
            },
            {
              "id": "credit",
              "label": "贷款利息收入+ 信用卡交易",
              "notes": [
                "同比 +33%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_segments",
              "label": "分业务收入",
              "items": [
                {
                  "id": "commerce",
                  "label": "电商",
                  "notes": [
                    "同比 +31%",
                    "固定汇率同比 +54%"
                  ]
                },
                {
                  "id": "fintech",
                  "label": "金融科技",
                  "notes": [
                    "同比 +40%",
                    "固定汇率同比 +64%"
                  ]
                }
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
                "id": "product_development",
                "label": "产品开发",
                "notes": []
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "损失后利息利润率 39%"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 51%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +4 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mercadolibre-q1-fy24",
    "company": "MercadoLibre",
    "period": "Q1 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.3,
      "notes": [
        "+36% Y/Y",
        "+94% Y/Y fxn"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Intermediation services and advertising sales",
          "value": 2.1,
          "notes": [
            "+50% Y/Y"
          ]
        },
        {
          "id": "shipping",
          "label": "Product sales and shipping fees",
          "value": 0.4,
          "notes": [
            "+41% Y/Y"
          ]
        },
        {
          "id": "payments",
          "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
          "value": 1.1,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "pos",
          "label": "Point of sale devices",
          "value": 0.01
        },
        {
          "id": "credit",
          "label": "Interest earned on loans and credit card transactions",
          "value": 0.8,
          "notes": [
            "+44% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_segments",
          "label": "Revenue by segment",
          "total": 4.3,
          "items": [
            {
              "id": "commerce",
              "label": "Commerce",
              "value": 2.5,
              "notes": [
                "+49% Y/Y",
                "+113% Y/Y fxn"
              ]
            },
            {
              "id": "fintech",
              "label": "Fintech",
              "value": 1.8,
              "notes": [
                "+22% Y/Y",
                "+74% Y/Y fxn"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": [
          "Cost of",
          "revenue"
        ],
        "value": 2.3
      },
      "operatingExpenses": {
        "total": 1.5,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.5
          },
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.5
          },
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 0.4,
            "notes": [
              "Interest margin",
              "after losses 35%"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.2
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
      "total": 0.047,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.047
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2,
        "notes": [
          "47% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "12% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "8% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +36%",
            "固定汇率同比 +94%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "撮合服务与广告销售",
              "notes": [
                "同比 +50%"
              ]
            },
            {
              "id": "shipping",
              "label": "商品销售与配送费",
              "notes": [
                "同比 +41%"
              ]
            },
            {
              "id": "payments",
              "label": "支付及金融服务费用",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "pos",
              "label": "销售点设备"
            },
            {
              "id": "credit",
              "label": "贷款与信用卡利息收入",
              "notes": [
                "同比 +44%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_segments",
              "label": "分部收入",
              "items": [
                {
                  "id": "commerce",
                  "label": "电商",
                  "notes": [
                    "同比 +49%",
                    "固定汇率同比 +113%"
                  ]
                },
                {
                  "id": "fintech",
                  "label": "金融科技",
                  "notes": [
                    "同比 +22%",
                    "固定汇率同比 +74%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": [
              "收入",
              "成本"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": [
                  "销售与",
                  "营销"
                ]
              },
              {
                "id": "product_development",
                "label": [
                  "产品",
                  "开发"
                ]
              },
              {
                "id": "provision_doubtful",
                "label": [
                  "坏账",
                  "准备"
                ],
                "notes": [
                  "损失后利息",
                  "利润率 35%"
                ]
              },
              {
                "id": "ga",
                "label": [
                  "管理",
                  "费用"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 47%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +2 个百分点"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other",
              "label": "其他"
            }
          ]
        }
      }
    }
  },
  {
    "key": "mercadolibre-q1-fy25",
    "company": "MercadoLibre",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.9,
      "notes": [
        "+37% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Intermediation services and advertising sales",
          "value": 2.7,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "shipping",
          "label": "Product sales and shipping fees",
          "value": 0.6,
          "notes": [
            "+64% Y/Y"
          ]
        },
        {
          "id": "payments",
          "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
          "value": 1.5,
          "notes": [
            "+39% Y/Y"
          ]
        },
        {
          "id": "pos",
          "label": "Point of sale devices",
          "value": 0.013,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "credit",
          "label": "Interest earned on loans and credit card transactions",
          "value": 1.1,
          "notes": [
            "+49% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_segments",
          "label": "Revenue by segment",
          "total": 5.9,
          "items": [
            {
              "id": "commerce",
              "label": "Commerce",
              "value": 3.3,
              "notes": [
                "+32% Y/Y"
              ]
            },
            {
              "id": "fintech",
              "label": "Fintech",
              "value": 2.6,
              "notes": [
                "+43% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.2
      },
      "operatingExpenses": {
        "total": 2,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.6
          },
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.3
          },
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 0.6,
            "notes": [
              "Interest margin after losses 23%"
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.8,
        "notes": [
          "47% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.8,
        "notes": [
          "13% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "8% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +37%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "撮合服务与广告销售",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "shipping",
              "label": "商品销售与配送费",
              "notes": [
                "同比 +64%"
              ]
            },
            {
              "id": "payments",
              "label": "支付解决方案、分期、信用卡和借记卡手续费及保险科技费用",
              "notes": [
                "同比 +39%"
              ]
            },
            {
              "id": "pos",
              "label": "销售点设备",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "credit",
              "label": "贷款与信用卡交易利息收入",
              "notes": [
                "同比 +49%"
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
                "label": "销售与营销"
              },
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "损失后利息利润率 23%"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 47%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mercadolibre-q3-fy24",
    "company": "MercadoLibre",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.3,
      "notes": [
        "+35% Y/Y"
      ],
      "items": [
        {
          "id": "commerce",
          "label": "Commerce",
          "value": 3.1,
          "notes": [
            "+48% Y/Y"
          ],
          "children": [
            {
              "id": "marketplace",
              "label": "Intermediation services and advertising sales",
              "value": 2.6,
              "notes": [
                "+45% Y/Y"
              ]
            },
            {
              "id": "shipping",
              "label": "Product sales and shipping fees",
              "value": 0.5,
              "notes": [
                "+62% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "fintech",
          "label": "Fintech",
          "value": 2.2,
          "notes": [
            "+21% Y/Y"
          ],
          "children": [
            {
              "id": "payments",
              "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
              "value": 1.2,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "pos",
              "label": "Point of sale devices",
              "value": 0.014,
              "notes": [
                "+56% Y/Y"
              ]
            },
            {
              "id": "credit",
              "label": "Interest earned on loans and credit card transactions",
              "value": 0.9,
              "notes": [
                "+35% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": [
          "Cost of",
          "revenue"
        ],
        "value": 2.9
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 0.6
          },
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.5
          },
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.3
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
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.4
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "items": [
            {
              "id": "commerce",
              "label": "电商",
              "children": [
                {
                  "id": "marketplace",
                  "label": "撮合服务与广告销售"
                },
                {
                  "id": "shipping",
                  "label": "商品销售与配送费"
                }
              ]
            },
            {
              "id": "fintech",
              "label": "金融科技",
              "children": [
                {
                  "id": "payments",
                  "label": "支付及金融服务费用"
                },
                {
                  "id": "pos",
                  "label": "销售点设备"
                },
                {
                  "id": "credit",
                  "label": "贷款与信用卡利息收入"
                }
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
                "id": "provision_doubtful",
                "label": "坏账准备"
              },
              {
                "id": "sm",
                "label": "销售与营销"
              },
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              }
            ]
          },
          "tax": {
            "id": "tax",
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
            "id": "gross_profit",
            "label": "毛利润"
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润"
          },
          "net": {
            "id": "net_profit",
            "label": "净利润"
          }
        }
      }
    }
  },
  {
    "key": "mercadolibre-q3-fy23",
    "company": "MercadoLibre",
    "period": "Q3 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.8,
      "notes": [
        "+40% Y/Y",
        "+69% Y/Y fxn"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Intermediation services and advertising sales",
          "value": 1.8,
          "notes": [
            "+47% Y/Y"
          ]
        },
        {
          "id": "shipping",
          "label": "Product sales and shipping fees",
          "value": 0.3,
          "notes": [
            "+37% Y/Y"
          ]
        },
        {
          "id": "payments",
          "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
          "value": 1,
          "notes": [
            "+42% Y/Y"
          ]
        },
        {
          "id": "pos",
          "label": "Point of sale devices",
          "value": 0.009,
          "notes": []
        },
        {
          "id": "credit",
          "label": "Interest earned on loans and credit card transactions",
          "value": 0.7,
          "notes": [
            "+24% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_segments",
          "label": "Revenue by segment",
          "total": 3.8,
          "items": [
            {
              "id": "commerce",
              "label": "Commerce",
              "value": 2.1,
              "notes": [
                "+45% Y/Y",
                "+76% Y/Y fxn"
              ]
            },
            {
              "id": "fintech",
              "label": "Fintech",
              "value": 1.6,
              "notes": [
                "+33% Y/Y",
                "+61% Y/Y fxn"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.8
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 0.3,
            "notes": [
              "Interest margin",
              "after losses 37%"
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.2,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.2
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2,
        "notes": [
          "53% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.7,
        "notes": [
          "18% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "10% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +40%",
            "固定汇率同比 +69%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "撮合服务与广告销售",
              "notes": [
                "同比 +47%"
              ]
            },
            {
              "id": "shipping",
              "label": "商品销售与配送费",
              "notes": [
                "同比 +37%"
              ]
            },
            {
              "id": "payments",
              "label": "支付及金融服务费用",
              "notes": [
                "同比 +42%"
              ]
            },
            {
              "id": "pos",
              "label": "销售点设备",
              "notes": []
            },
            {
              "id": "credit",
              "label": "贷款与信用卡利息收入",
              "notes": [
                "同比 +24%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_segments",
              "label": "分业务收入",
              "items": [
                {
                  "id": "commerce",
                  "label": "电商",
                  "notes": [
                    "同比 +45%",
                    "固定汇率同比 +76%"
                  ]
                },
                {
                  "id": "fintech",
                  "label": "金融科技",
                  "notes": [
                    "同比 +33%",
                    "固定汇率同比 +61%"
                  ]
                }
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
                "id": "product_development",
                "label": "产品开发",
                "notes": []
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "扣除损失后的",
                  "利息利润率 37%"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 53%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mercadolibre-q4-fy22",
    "company": "MercadoLibre",
    "period": "Q4 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3,
      "notes": [
        "+41% Y/Y",
        "+57% Y/Y fxn"
      ],
      "items": [
        {
          "id": "commerce",
          "label": "Commerce",
          "value": 1.7,
          "notes": [
            "+22% Y/Y",
            "+36% Y/Y fxn"
          ],
          "children": [
            {
              "id": "marketplace",
              "label": "Intermediation services and advertising sales",
              "value": 1.3,
              "notes": [
                "+32% Y/Y"
              ]
            },
            {
              "id": "shipping",
              "label": "Product sales and shipping fees",
              "value": 0.3,
              "notes": [
                "(7%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "fintech",
          "label": "Fintech",
          "value": 1.3,
          "notes": [
            "+73% Y/Y",
            "+93% Y/Y fxn"
          ],
          "children": [
            {
              "id": "payments",
              "label": "Payment solution, installments, credit and debit card fees, and insurtech fees",
              "value": 0.8,
              "notes": [
                "+65% Y/Y"
              ]
            },
            {
              "id": "pos",
              "label": "Point of sale devices",
              "value": 0.014,
              "notes": []
            },
            {
              "id": "credit",
              "label": "Interest earned on loans and credit card transactions",
              "value": 0.6,
              "notes": [
                "+88% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": [
          "Cost of",
          "revenue"
        ],
        "value": 1.5,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "provision_doubtful",
            "label": "Provision for doubtful accounts",
            "value": 0.2,
            "notes": [
              "Interest margin after losses 48%"
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.041,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.041,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.5,
        "notes": [
          "49% margin",
          "+9pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "12% margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "5% margin",
          "+8pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +41%",
            "固定汇率同比 +57%"
          ],
          "items": [
            {
              "id": "commerce",
              "label": "电商",
              "notes": [
                "同比 +22%",
                "固定汇率同比 +36%"
              ],
              "children": [
                {
                  "id": "marketplace",
                  "label": "撮合服务与广告销售",
                  "notes": [
                    "同比 +32%"
                  ]
                },
                {
                  "id": "shipping",
                  "label": "商品销售与配送费",
                  "notes": [
                    "同比 (7%)"
                  ]
                }
              ]
            },
            {
              "id": "fintech",
              "label": "金融科技",
              "notes": [
                "同比 +73%",
                "固定汇率同比 +93%"
              ],
              "children": [
                {
                  "id": "payments",
                  "label": "支付及金融服务费用",
                  "notes": [
                    "同比 +65%"
                  ]
                },
                {
                  "id": "pos",
                  "label": "销售点设备",
                  "notes": []
                },
                {
                  "id": "credit",
                  "label": "贷款与信用卡利息收入",
                  "notes": [
                    "同比 +88%"
                  ]
                }
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
                "id": "product_development",
                "label": "产品开发",
                "notes": []
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "损失后利息利润率 48%"
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
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 49%",
              "同比 +9 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +8 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mercadolibre-q2-fy24",
    "company": "MercadoLibre",
    "period": "Q2 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mercadolibre-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.1,
      "notes": [
        "+42% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Intermediation services and advertising sales",
          "value": 2.5,
          "notes": [
            "+58% Y/Y"
          ]
        },
        {
          "id": "shipping",
          "label": "Product sales and shipping fees",
          "value": 0.5,
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "payments",
          "label": "Payment solution, installments, credit & debit card fees, insurtech fees",
          "value": 1.2,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "pos",
          "label": "Point of sales devices",
          "value": 0.013,
          "notes": []
        },
        {
          "id": "credit",
          "label": "Interest earned on loans and credit card transactions",
          "value": 0.9,
          "notes": [
            "+47% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_segments",
          "label": "Revenue by segment",
          "total": 5.1,
          "items": [
            {
              "id": "commerce",
              "label": "Commerce",
              "value": 3
            },
            {
              "id": "fintech",
              "label": "Fintech",
              "value": 2.1
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.7
      },
      "operatingExpenses": {
        "total": 1.6,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.5
          },
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.2
          },
          {
            "id": "provision_doubtful",
            "label": "Provision doubtful",
            "value": 0.5,
            "notes": [
              "Interest margin after losses 31%"
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
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.4,
        "notes": [
          "47% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.7,
        "notes": [
          "14% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "10% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "items": [
            {
              "id": "marketplace",
              "label": "撮合服务与广告销售",
              "notes": [
                "同比 +58%"
              ]
            },
            {
              "id": "shipping",
              "label": "商品销售与配送费",
              "notes": [
                "同比 +33%"
              ]
            },
            {
              "id": "payments",
              "label": "支付解决方案、分期、信用卡及借记卡手续费、保险科技费",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "pos",
              "label": "销售点设备",
              "notes": []
            },
            {
              "id": "credit",
              "label": "贷款与信用卡交易利息收入",
              "notes": [
                "同比 +47%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_segments",
              "items": [
                {
                  "id": "commerce",
                  "label": "电商"
                },
                {
                  "id": "fintech",
                  "label": "金融科技"
                }
              ],
              "label": "分部收入"
            }
          ],
          "notes": [
            "同比 +42%"
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
                "label": "销售与营销"
              },
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "provision_doubtful",
                "label": "坏账准备",
                "notes": [
                  "损失后利息利润率 31%"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": []
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 47%",
              "同比 (4) 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (4) 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
