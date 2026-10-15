/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "mastercard-q1-fy25",
    "company": "Mastercard",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/mastercard-q1-fy25.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Amounts preserve the source rounding: 4.4 + 2.8 = 7.2 versus 7.3 net revenue; 4.1 + 3.1 = 7.2 versus 7.3; 4.1 - 0.8 - 0.1 = 3.2 versus 3.3 net profit; expense items sum to 3.2 versus 3.1."
    ],
    "revenue": {
      "total": 7.3,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 4.4,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 2.8,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 9
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.7,
            "notes": [
              "+8% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 2.6,
            "notes": [
              "+16% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 3.5,
            "notes": [
              "+14% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.2,
            "notes": [
              "+2% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 4.6
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "No cost-of-revenue subtotal appears; net revenue flows directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 3.1,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2.5
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.2
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
      "total": 0.1,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 7.3,
        "notes": [
          "Balancing subtotal; source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.1,
        "notes": [
          "57% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.3,
        "notes": [
          "45% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gdv",
        "label": "Gross Dollar Volume",
        "value": "9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+9%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Gross Dollar Volume\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            18,
            1194,
            263,
            148
          ]
        }
      },
      {
        "id": "cbv",
        "label": "Cross-Border Volume",
        "value": "15",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+15%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Cross-Border Volume\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            290,
            1194,
            292,
            148
          ]
        }
      },
      {
        "id": "switched",
        "label": "Switched Transactions",
        "value": "9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+9%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Switched Transactions\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1194,
            292,
            148
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
              "id": "payment_network",
              "label": "支付网络",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案",
              "notes": [
                "同比 +16%"
              ]
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "支付网络毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费",
                "notes": [
                  "同比 +8%"
                ]
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费",
                "notes": [
                  "同比 +16%"
                ]
              },
              {
                "id": "transaction",
                "label": "交易处理",
                "notes": [
                  "同比 +14%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +2%"
                ]
              }
            ],
            "rebates": {
              "label": "返利与激励"
            }
          }
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "litigation",
                "label": "诉讼"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入"
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 57%",
              "同比 +0pp"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 45%",
              "同比 (2pp)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gdv",
            "label": "总美元交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "cbv",
            "label": "跨境交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "switched",
            "label": "已处理交易笔数",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "mastercard-q4-fy25",
    "company": "Mastercard",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/mastercard-q4-fy25.png",
    "roundingTolerance": 0.15,
    "notes": [
      "The View preserves the rounded amounts shown by the source infographic. Payment Network revenue is gross payment-network revenue less rebates and incentives; it then combines with Value-added Services & Solutions to form net revenue.",
      "The source labels the final non-tax deduction as $34M. Its difference from the displayed net-profit bridge is within the source chart’s published rounding."
    ],
    "revenue": {
      "total": 8.8,
      "notes": [
        "+18% Y/Y",
        "Net revenue after rebates & incentives"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 4.9,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 3.9,
          "notes": [
            "+26% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 10.6
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.8,
            "notes": [
              "+9% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 3.3,
            "notes": [
              "+21% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 4.2,
            "notes": [
              "+18% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.3,
            "notes": [
              "+14% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 5.6
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart flows net revenue directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 3.9,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 3.1
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.2
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
      "total": 0.034,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.034
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 8.8,
        "notes": [
          "Balancing subtotal; the source does not show gross profit or a cost-of-revenue subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.9,
        "notes": [
          "56% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.1,
        "notes": [
          "46% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "notes": [
          "视图保留来源信息图中的四舍五入金额。支付网络收入等于支付网络毛收入减去返利与激励，之后与增值服务与解决方案收入合并形成净收入。",
          "来源图把税费以外的最终扣减标为 3400 万美元；其与显示的净利润桥接差异在来源图的四舍五入口径内。"
        ],
        "revenue": {
          "notes": [
            "同比 +18%",
            "扣除返利与激励后的净收入"
          ],
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案",
              "notes": [
                "同比 +26%"
              ]
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "支付网络毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费",
                "notes": [
                  "同比 +9%"
                ]
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费",
                "notes": [
                  "同比 +21%"
                ]
              },
              {
                "id": "transaction",
                "label": "交易处理",
                "notes": [
                  "同比 +18%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +14%"
                ]
              }
            ],
            "rebates": {
              "label": "返利与激励"
            }
          }
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图让净收入直接流向营业利润和运营费用。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "litigation",
                "label": "诉讼"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "平衡小计；来源图未显示毛利润或收入成本小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 56%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 46%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mastercard-q1-fy26",
    "company": "Mastercard",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/mastercard-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.4,
      "notes": [
        "+16% Y/Y",
        "Net revenue after rebates & incentives"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 4.9,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 3.5,
          "notes": [
            "+22% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "No cost-of-revenue subtotal is shown in the source chart; net revenue flows straight to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 3.5,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 3
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.3
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
        "value": 0.9
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
          "id": "other_ded",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 8.4,
        "notes": [
          "Balancing subtotal; the source chart does not show a gross profit or cost-of-revenue subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.9,
        "notes": [
          "58% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.9,
        "notes": [
          "46% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +16%",
            "扣除返利与激励后的净收入"
          ],
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案",
              "notes": [
                "同比 +22%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未显示收入成本小计；净收入直接流向营业利润和运营费用。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "平衡小计；来源图未显示毛利润或收入成本小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 58%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 46%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mastercard-q2-fy26",
    "company": "Mastercard",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/mastercard-q2-fy26.png",
    "roundingTolerance": 0.15,
    "notes": [
      "The View preserves the rounded amounts shown by the source infographic. Payment Network revenue is gross payment-network revenue less rebates and incentives; it then combines with Value-added Services & Solutions to form net revenue."
    ],
    "revenue": {
      "total": 9.3,
      "notes": [
        "+14% Y/Y",
        "Net revenue after rebates & incentives"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 5.5,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 3.8,
          "notes": [
            "+20% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 11.5
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 3.2,
            "notes": [
              "+13% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 3.5,
            "notes": [
              "+21% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 4.5,
            "notes": [
              "+14% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.3,
            "notes": [
              "+25% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 6
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "No cost-of-revenue subtotal is shown in the source chart; net revenue flows straight to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 3.7,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 3.1
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.1
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
      "total": 0.1,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 9.3,
        "notes": [
          "Balancing subtotal; the source chart does not show a gross profit or cost-of-revenue subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.6,
        "notes": [
          "60% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.4,
        "notes": [
          "47% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "notes": [
          "视图保留来源信息图中的四舍五入金额。支付网络收入等于支付网络毛收入减去返利与激励，之后与增值服务与解决方案收入合并形成净收入。"
        ],
        "revenue": {
          "notes": [
            "同比 +14%",
            "扣除返利与激励后的净收入"
          ],
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案",
              "notes": [
                "同比 +20%"
              ]
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "支付网络毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费",
                "notes": [
                  "同比 +13%"
                ]
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费",
                "notes": [
                  "同比 +21%"
                ]
              },
              {
                "id": "transaction",
                "label": "交易处理",
                "notes": [
                  "同比 +14%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +25%"
                ]
              }
            ],
            "rebates": {
              "label": "返利与激励"
            }
          }
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未显示收入成本小计；净收入直接流向营业利润和运营费用。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "other_opex",
                "label": "其他"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "平衡小计；来源图未显示毛利润或收入成本小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 60%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 47%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mastercard-q1-fy23",
    "company": "Mastercard",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/mastercard-q1-fy23.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Amounts retain source rounding: gross payment-network components sum to 7.1B; less 3.4B rebates gives 3.7B net payment-network revenue."
    ],
    "revenue": {
      "total": 5.8,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 3.7,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 2.1,
          "notes": [
            "+19% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 7.1
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.3,
            "notes": [
              "+7% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 1.8,
            "notes": [
              "+33% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 2.8,
            "notes": [
              "+12% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.2,
            "notes": [
              "+26% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 3.4
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "No cost-of-revenue subtotal appears; net revenue flows directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 2.6,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.2
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
          "id": "other_ded",
          "label": "Other",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 5.8,
        "notes": [
          "Balancing subtotal; source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.2,
        "notes": [
          "55% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.4,
        "notes": [
          "41% margin",
          "(10pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案",
              "notes": [
                "同比 +19%"
              ]
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "支付网络毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费",
                "notes": [
                  "同比 +7%"
                ]
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费",
                "notes": [
                  "同比 +33%"
                ]
              },
              {
                "id": "transaction",
                "label": "交易处理",
                "notes": [
                  "同比 +12%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +26%"
                ]
              }
            ],
            "rebates": {
              "label": "返利与激励"
            }
          },
          "notes": [
            "同比 +11%"
          ]
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "litigation",
                "label": "诉讼"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入"
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 55%",
              "同比下降 3 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 41%",
              "同比下降 10 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mastercard-q1-fy24",
    "company": "Mastercard",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/mastercard-q1-fy24.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Amounts preserve the source rounding and displayed precision. Gross payment-network revenue of 8.0B is derived from its four components; its hub is unlabeled in the source."
    ],
    "revenue": {
      "total": 6.3,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 3.9,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 2.4,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 8
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.5,
            "notes": [
              "+10% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 2.2,
            "notes": [
              "+21% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 3.1,
            "notes": [
              "+12% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.2,
            "notes": [
              "+7% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 4.1
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "No cost-of-revenue subtotal appears; net revenue flows directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 2.7,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2.3
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.1
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.1
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
      "total": 0.1,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 6.3,
        "notes": [
          "Balancing subtotal; source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.6,
        "notes": [
          "57% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3,
        "notes": [
          "47% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案",
              "notes": [
                "同比 +16%"
              ]
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "支付网络毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费",
                "notes": [
                  "同比 +10%"
                ]
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费",
                "notes": [
                  "同比 +21%"
                ]
              },
              {
                "id": "transaction",
                "label": "交易处理",
                "notes": [
                  "同比 +12%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +7%"
                ]
              }
            ],
            "rebates": {
              "label": "返利与激励"
            }
          }
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "litigation",
                "label": "诉讼"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入"
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 57%",
              "同比 +2pp"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 47%",
              "同比 +6pp"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mastercard-q2-fy23",
    "company": "Mastercard",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/mastercard-q2-fy23.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source rounding preserved: gross fee components total 7.9B versus 7.8B from 4.1B + 3.7B; operating expense items total 2.62B versus 2.6B; net bridge 3.7B + 0.048B - 0.9B = 2.848B versus 2.8B."
    ],
    "revenue": {
      "total": 6.3,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 4.1,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 2.2,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 7.9
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.5,
            "notes": [
              "+10% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 2.1,
            "notes": [
              "+27% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 3,
            "notes": [
              "+16% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.3,
            "notes": [
              "+27% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 3.7
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart flows net revenue directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 2.6,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2.2
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.02
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
      "total": 0.048,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.048
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 6.3,
        "notes": [
          "Balancing subtotal; the source does not show gross profit or a cost-of-revenue subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.7,
        "notes": [
          "58% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.8,
        "notes": [
          "45% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案",
              "notes": [
                "同比 +16%"
              ]
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "支付网络毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费",
                "notes": [
                  "同比 +10%"
                ]
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费",
                "notes": [
                  "同比 +27%"
                ]
              },
              {
                "id": "transaction",
                "label": "交易处理",
                "notes": [
                  "同比 +16%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +27%"
                ]
              }
            ],
            "rebates": {
              "label": "返利与激励"
            }
          }
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图让净收入直接流向营业利润和运营费用。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "litigation",
                "label": "诉讼"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "平衡小计；来源图未显示毛利润或收入成本小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 58%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 45%",
              "同比 +4 个百分点"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他收益"
            }
          ]
        }
      }
    }
  },
  {
    "key": "mastercard-q2-fy24",
    "company": "Mastercard",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/mastercard-q2-fy24.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source rounding preserved: fee inputs 8.5 less rebates 4.2 = 4.3 versus 4.4 payment-network revenue; operating profit 4.0 plus expenses 2.9 = 6.9 versus 7.0 net revenue."
    ],
    "revenue": {
      "total": 7,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 4.4,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 2.6,
          "notes": [
            "+18% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 8.5
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.6,
            "notes": [
              "+5% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 2.4,
            "notes": [
              "+19% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 3.3,
            "notes": [
              "+12% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.2,
            "notes": [
              "(10%) Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 4.2
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "No cost-of-revenue subtotal appears; net revenue flows directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2.4
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.1
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
      "total": 0.1,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 7,
        "notes": [
          "Balancing subtotal; source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4,
        "notes": [
          "58% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.2,
        "notes": [
          "45% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gdv",
        "label": "Gross Dollar Volume",
        "value": "9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+9%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Gross Dollar Volume\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            18,
            1216,
            263,
            148
          ]
        }
      },
      {
        "id": "cbv",
        "label": "Cross-Border Volume",
        "value": "17",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+17%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Cross-Border Volume\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            290,
            1216,
            292,
            148
          ]
        }
      },
      {
        "id": "switched",
        "label": "Switched Transactions",
        "value": "11",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+11%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Switched Transactions\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1216,
            292,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案",
              "notes": [
                "同比 +18%"
              ]
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "支付网络毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费",
                "notes": [
                  "同比 +5%"
                ]
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费",
                "notes": [
                  "同比 +19%"
                ]
              },
              {
                "id": "transaction",
                "label": "交易处理",
                "notes": [
                  "同比 +12%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 (10%)"
                ]
              }
            ],
            "rebates": {
              "label": "返利与激励"
            }
          }
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "litigation",
                "label": "诉讼"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入"
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 58%",
              "同比 (0pp)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 45%",
              "同比 +1pp"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gdv",
            "label": "总美元交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "cbv",
            "label": "跨境交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "switched",
            "label": "已处理交易笔数",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "mastercard-q2-fy25",
    "company": "Mastercard",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/mastercard-q2-fy25.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Amounts retain source rounding: gross fee items sum to 9.9 versus 9.8 implied by payment-network revenue plus rebates; operating profit plus operating expenses is 8.2 versus 8.1 net revenue."
    ],
    "revenue": {
      "total": 8.1,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 4.9,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 3.2,
          "notes": [
            "+23% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 9.9
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.8,
            "notes": [
              "+7% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 2.8,
            "notes": [
              "+17% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 4,
            "notes": [
              "+19% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.3,
            "notes": [
              "+7% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 4.9
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "No cost-of-revenue subtotal appears; net revenue flows directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 3.4,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2.8
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.1
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
      "total": 0.1,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 8.1,
        "notes": [
          "Balancing subtotal; source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.8,
        "notes": [
          "59% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.7,
        "notes": [
          "46% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gdv",
        "label": "Gross Dollar Volume",
        "value": "9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+9%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Gross Dollar Volume\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            18,
            1194,
            263,
            148
          ]
        }
      },
      {
        "id": "cbv",
        "label": "Cross-Border Volume",
        "value": "15",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+15%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Cross-Border Volume\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            290,
            1194,
            292,
            148
          ]
        }
      },
      {
        "id": "switched",
        "label": "Switched Transactions",
        "value": "10",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+10%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Switched Transactions\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1194,
            292,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络"
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案"
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "支付网络毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费"
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费"
              },
              {
                "id": "transaction",
                "label": "交易处理"
              },
              {
                "id": "other_rev",
                "label": "其他"
              }
            ],
            "rebates": {
              "label": "返利与激励"
            }
          },
          "notes": [
            "同比 +17%"
          ]
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "litigation",
                "label": "诉讼"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入"
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润"
          },
          "net": {
            "id": "net_profit",
            "label": "净利润"
          }
        },
        "operatingMetrics": [
          {
            "id": "gdv",
            "label": "总美元交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "cbv",
            "label": "跨境交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "switched",
            "label": "已处理交易笔数",
            "notes": [
              "同比"
            ]
          }
        ],
        "notes": [
          "金额保留原图四舍五入：费用收入分项合计 9.9，而支付网络净收入加返利为 9.8；营业利润加运营费用为 8.2，净收入为 8.1。"
        ]
      }
    }
  },
  {
    "key": "mastercard-q3-fy22",
    "company": "Mastercard",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/mastercard-q3-fy22.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source rounded amounts retained; operating-profit bridge differs by $0.1B and operating-expense components by $0.1B."
    ],
    "revenue": {
      "total": 5.8,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Net revenue",
          "value": 5.8
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross revenue",
          "value": 9.2,
          "notes": [
            "+17% Y/Y"
          ]
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.3,
            "notes": [
              "+5% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 1.8,
            "notes": [
              "+41% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 3.3,
            "notes": [
              "+15% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 1.8,
            "notes": [
              "+17% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Client incentives",
          "value": 3.4
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source does not show cost of revenue."
        ]
      },
      "operatingExpenses": {
        "total": 2.6,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2.1
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          },
          {
            "id": "dna",
            "label": "Depreciation & amortization",
            "value": 0.2
          },
          {
            "id": "litigation",
            "label": "Litigation provision",
            "value": 0.2
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
      "total": 0.04,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.04
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 5.8,
        "notes": [
          "Source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.1,
        "notes": [
          "54% margin",
          "Unchanged"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.5,
        "notes": [
          "43% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "notes": [
          "保留原图四舍五入金额；营业利润桥接差异及运营费用分项差异均为 1 亿美元。"
        ],
        "revenue": {
          "items": [
            {
              "id": "revenue",
              "label": "净收入"
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费"
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费"
              },
              {
                "id": "transaction",
                "label": "交易处理"
              },
              {
                "id": "other_rev",
                "label": "其他"
              }
            ],
            "rebates": {
              "label": "客户激励"
            }
          }
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "litigation",
                "label": "诉讼拨备"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入"
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 54%",
              "同比持平"
            ]
          },
          "net": {
            "label": "净利润"
          }
        }
      }
    }
  },
  {
    "key": "mastercard-q3-fy23",
    "company": "Mastercard",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/mastercard-q3-fy23.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source-rounded amounts preserved: 8.2 - 4.0 = 4.2 payment-network revenue; 3.8 - 0.6 - 0.1 = 3.1 versus 3.2 reported net profit."
    ],
    "revenue": {
      "total": 6.5,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 4.2,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 2.3,
          "notes": [
            "+17% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 8.2
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.5,
            "notes": [
              "+11% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 2.3,
            "notes": [
              "+28% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 3.2,
            "notes": [
              "+14% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.2,
            "notes": [
              "+17% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 4
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "No cost-of-revenue subtotal appears; net revenue flows directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 2.7,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2.3
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.2
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
        "value": 0.6
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
          "id": "other_ded",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 6.5,
        "notes": [
          "Balancing subtotal; source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.8,
        "notes": [
          "59% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.2,
        "notes": [
          "49% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2023 年 9 月",
        "notes": [
          "保留原图舍入值：8.2 - 4.0 = 4.2；3.8 - 0.6 - 0.1 = 3.1，原图净利润为 3.2。"
        ],
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案",
              "notes": [
                "同比 +17%"
              ]
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "支付网络毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费",
                "notes": [
                  "同比 +11%"
                ]
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费",
                "notes": [
                  "同比 +28%"
                ]
              },
              {
                "id": "transaction",
                "label": "交易处理",
                "notes": [
                  "同比 +14%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +17%"
                ]
              }
            ],
            "rebates": {
              "label": "返利与激励"
            }
          }
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "原图未显示收入成本小计；净收入直接流向营业利润与运营费用。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "平衡小计；原图未显示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 59%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 49%",
              "同比 +6 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mastercard-q3-fy24",
    "company": "Mastercard",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/mastercard-q3-fy24.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source rounded amounts: 4.6 + 2.7 = 7.3 versus net revenue 7.4; operating expense items total 3.3 versus 3.4."
    ],
    "revenue": {
      "total": 7.4,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 4.6,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 2.7,
          "notes": [
            "+18% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 9.2
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.6,
            "notes": [
              "+7% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 2.8,
            "notes": [
              "+21% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 3.6,
            "notes": [
              "+13% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.2,
            "notes": [
              "(1%) Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 4.6
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "No cost-of-revenue subtotal appears; net revenue flows directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 3.4,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2.7
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.2
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
      "total": 0.1,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 7.4,
        "notes": [
          "Balancing subtotal; source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4,
        "notes": [
          "54% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.3,
        "notes": [
          "44% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gdv",
        "label": "Gross Dollar Volume",
        "value": "10",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+10%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Gross Dollar Volume\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            18,
            1194,
            263,
            148
          ]
        }
      },
      {
        "id": "cbv",
        "label": "Cross-Border Volume",
        "value": "17",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+17%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Cross-Border Volume\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            290,
            1194,
            292,
            148
          ]
        }
      },
      {
        "id": "switched",
        "label": "Switched Transactions",
        "value": "11",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+11%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Switched Transactions\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1194,
            292,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "",
        "revenue": {
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案",
              "notes": [
                "同比 +18%"
              ]
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "支付网络毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费",
                "notes": [
                  "同比 +7%"
                ]
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费",
                "notes": [
                  "同比 +21%"
                ]
              },
              {
                "id": "transaction",
                "label": "交易处理",
                "notes": [
                  "同比 +13%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 (1%)"
                ]
              }
            ],
            "rebates": {
              "label": "返利与激励"
            }
          },
          "notes": [
            "同比 +13%"
          ]
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "litigation",
                "label": "诉讼"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入"
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 54%",
              "同比 (4pp)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 44%",
              "同比 (5pp)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gdv",
            "label": "总美元交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "cbv",
            "label": "跨境交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "switched",
            "label": "已处理交易笔数",
            "notes": [
              "同比"
            ]
          }
        ],
        "notes": [
          "原图金额经过四舍五入：4.6 + 2.7 = 7.3，净收入为 7.4；运营费用明细合计 3.3，总额为 3.4。"
        ]
      }
    }
  },
  {
    "key": "mastercard-q3-fy25",
    "company": "Mastercard",
    "period": "Q3 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/mastercard-q3-fy25.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source-rounded values retained. Gross network items total 10.6; rebates 5.4 leave 5.2. Expense items total 3.5."
    ],
    "revenue": {
      "total": 8.6,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 5.2,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 3.4,
          "notes": [
            "+25% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 10.6
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.8,
            "notes": [
              "+6% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 3.3,
            "notes": [
              "+18% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 4.2,
            "notes": [
              "+17% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.3,
            "notes": [
              "+12% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 5.4
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "No cost-of-revenue subtotal appears; net revenue flows directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 3.5,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2.9
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.1
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
      "total": 0.1,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 8.6,
        "notes": [
          "Balancing subtotal; source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.1,
        "notes": [
          "59% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.9,
        "notes": [
          "46% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gdv",
        "label": "Gross Dollar Volume",
        "value": "9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+9%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Gross Dollar Volume\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            18,
            1194,
            263,
            148
          ]
        }
      },
      {
        "id": "cbv",
        "label": "Cross-Border Volume",
        "value": "15",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+15%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Cross-Border Volume\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            290,
            1194,
            292,
            148
          ]
        }
      },
      {
        "id": "switched",
        "label": "Switched Transactions",
        "value": "10",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+10%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Switched Transactions\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1194,
            292,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "",
        "revenue": {
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案",
              "notes": [
                "同比 +25%"
              ]
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "支付网络毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费",
                "notes": [
                  "同比 +6%"
                ]
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费",
                "notes": [
                  "同比 +18%"
                ]
              },
              {
                "id": "transaction",
                "label": "交易处理",
                "notes": [
                  "同比 +17%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +12%"
                ]
              }
            ],
            "rebates": {
              "label": "返利与激励"
            }
          }
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "litigation",
                "label": "诉讼"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入"
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 59%",
              "同比 +4pp"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 46%",
              "同比 +1pp"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gdv",
            "label": "总美元交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "cbv",
            "label": "跨境交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "switched",
            "label": "已处理交易笔数",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "mastercard-q4-fy22",
    "company": "Mastercard",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 4,
    "sourceImage": "input/processed/mastercard-q4-fy22.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source rounding retained. Other expense is $0.1M, litigation $15M. Operating-expense items sum to $2.615B; displayed net-profit bridge differs by $0.0999B."
    ],
    "revenue": {
      "total": 5.8,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Net payment-network revenue",
          "value": 5.8
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross revenue",
          "value": 9.4,
          "notes": [
            "+13% Y/Y"
          ]
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.3,
            "notes": [
              "+4% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 1.8,
            "notes": [
              "+30% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 3.3,
            "notes": [
              "+12% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 2,
            "notes": [
              "+11% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Client incentives",
          "value": 3.6
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source flows net revenue directly to operating profit and expenses."
        ]
      },
      "operatingExpenses": {
        "total": 2.6,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2.2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.2
          },
          {
            "id": "dna",
            "label": "Depreciation & amortization",
            "value": 0.2
          },
          {
            "id": "litigation",
            "label": "Litigation provision",
            "value": 0.015
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
      "total": 0.0001,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.0001
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 5.8
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.2,
        "notes": [
          "55% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.5,
        "notes": [
          "43% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "items": [
            {
              "id": "revenue",
              "label": "支付网络净收入"
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "毛收入"
            },
            "grossItems": [
              {
                "id": "domestic",
                "label": "境内评估费"
              },
              {
                "id": "cross_border",
                "label": "跨境交易量费"
              },
              {
                "id": "transaction",
                "label": "交易处理"
              },
              {
                "id": "other_rev",
                "label": "其他"
              }
            ],
            "rebates": {
              "label": "客户激励"
            }
          }
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "litigation",
                "label": "诉讼准备金"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入"
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
    "key": "mastercard-q4-fy23",
    "company": "Mastercard",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/mastercard-q4-fy23.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source rounded values retained: 3.9 + 2.7 = 6.6 versus 6.5 net revenue; 3.4 + 3.2 = 6.6 versus 6.5."
    ],
    "revenue": {
      "total": 6.5,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 3.9,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 2.7,
          "notes": [
            "+19% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 8
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.4,
            "notes": [
              "+8% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 2.2,
            "notes": [
              "+23% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 3.1,
            "notes": [
              "+12% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.3,
            "notes": [
              "+32% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 4.1
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "No cost-of-revenue subtotal appears; net revenue flows directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 3.2,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2.4
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.3
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
      "total": 0.1,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 6.5,
        "notes": [
          "Balancing subtotal; source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.4,
        "notes": [
          "51% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.8,
        "notes": [
          "43% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "notes": [
          "保留原图舍入值：3.9 + 2.7 = 6.6，净收入为 6.5；3.4 + 3.2 = 6.6，净收入为 6.5。"
        ],
        "profit": {
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 51%",
              "同比下降 3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 43%",
              "同比下降 1 个百分点"
            ]
          }
        },
        "revenue": {
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络"
            },
            {
              "id": "value_added",
              "label": "增值服务与解决方案"
            }
          ]
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "dna",
                "label": "折旧与摊销"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "litigation",
                "label": "诉讼"
              }
            ]
          }
        }
      }
    }
  },
  {
    "key": "mastercard-q4-fy24",
    "company": "Mastercard",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/mastercard-q4-fy24.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Rounded source values retained: gross network inflows 9.0 versus net network 4.4 plus rebates 4.7; expense items 3.6; operating-profit deductions 3.847 versus displayed 3.9."
    ],
    "revenue": {
      "total": 7.5,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "payment_network",
          "label": "Payment Network",
          "value": 4.4,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "value_added",
          "label": "Value-added Services & Solutions",
          "value": 3.1,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "Gross payment-network revenue",
          "value": 9
        },
        "grossItems": [
          {
            "id": "domestic",
            "label": "Domestic assessments",
            "value": 2.5,
            "notes": [
              "+6% Y/Y"
            ]
          },
          {
            "id": "cross_border",
            "label": "Cross-border volume fees",
            "value": 2.7,
            "notes": [
              "+23% Y/Y"
            ]
          },
          {
            "id": "transaction",
            "label": "Transaction processing",
            "value": 3.6,
            "notes": [
              "+14% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.2,
            "notes": [
              "(5%) Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "rebates",
          "label": "Rebates & incentives",
          "value": 4.7
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart flows net revenue directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 3.6,
        "items": [
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 2.7
          },
          {
            "id": "dna",
            "label": "D&A",
            "value": 0.2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.4
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.3
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
      "total": 0.047,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.047,
          "valueText": "($47M)",
          "decimals": 3
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Net revenue",
        "value": 7.5,
        "notes": [
          "Balancing subtotal; the source does not show gross profit or a cost-of-revenue subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.9,
        "notes": [
          "53% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.3,
        "notes": [
          "45% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gdv",
        "label": "Gross Dollar Volume",
        "value": "12",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+12%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Gross Dollar Volume\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            18,
            1194,
            263,
            148
          ]
        }
      },
      {
        "id": "cbv",
        "label": "Cross-Border Volume",
        "value": "20",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+20%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Cross-Border Volume\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            290,
            1194,
            292,
            148
          ]
        }
      },
      {
        "id": "switched",
        "label": "Switched Transactions",
        "value": "11",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+11%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Switched Transactions\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1194,
            292,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "operatingMetrics": [
          {
            "id": "gdv",
            "label": "总美元交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "cbv",
            "label": "跨境交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "switched",
            "label": "已处理交易笔数",
            "notes": [
              "同比"
            ]
          }
        ],
        "revenue": {
          "items": [
            {
              "id": "payment_network",
              "label": "支付网络"
            }
          ]
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "litigation",
                "label": "诉讼"
              }
            ]
          }
        }
      }
    }
  }
]);
})(window);
