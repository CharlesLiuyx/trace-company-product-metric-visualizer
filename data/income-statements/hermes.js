/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "hermes-fy25",
    "company": "Hermès",
    "period": "FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/hermes-fy25.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 16,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "leather_goods_saddlery",
          "label": "Leather Goods & Saddlery",
          "value": 7.1,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "ready_to_wear_accessories",
          "label": "Ready-to-wear & Accessories",
          "value": 4.5,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "silk_textiles",
          "label": "Silk & Textiles",
          "value": 1,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "other_hermes_sectors",
          "label": "Other Hermes sectors",
          "value": 2.1,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "perfume_beauty",
          "label": "Perfume & Beauty",
          "value": 0.5,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "watches",
          "label": "Watches",
          "value": 0.5,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "other_products",
          "label": "Other products",
          "value": 0.3,
          "notes": [
            "+4% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 4.6
      },
      "operatingExpenses": {
        "total": 4.8,
        "items": [
          {
            "id": "sales_administrative",
            "label": "Sales & Administrative",
            "value": 3.7,
            "notes": [
              "23% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 1.1,
            "notes": [
              "7% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.3
      }
    },
    "otherIncome": {
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.3,
          "notes": [
            "Source image displays $0.3B despite its euro unit caption."
          ]
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
        "value": 11.4,
        "notes": [
          "71% of revenue",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.6,
        "notes": [
          "41% of revenue",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.6,
        "notes": [
          "28% of revenue",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "leather_goods_saddlery",
              "label": "皮具与马具",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "ready_to_wear_accessories",
              "label": "成衣与配饰",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "silk_textiles",
              "label": "丝绸与纺织品",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "other_hermes_sectors",
              "label": "其他爱马仕业务",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "perfume_beauty",
              "label": "香水与美妆",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "watches",
              "label": "腕表",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "other_products",
              "label": "其他产品",
              "notes": [
                "同比 +4%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_administrative",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 23%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 7%"
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
              "label": "其他",
              "notes": [
                "源图金额显示为 $0.3B，但图表单位为欧元。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "占收入 71%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 41%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 28%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hermes-h1-fy26",
    "company": "Hermès",
    "period": "H1 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/hermes-h1-fy26.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 8.2,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "leather_goods_saddlery",
          "label": "Leather Goods & Saddlery",
          "value": 3.8,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "ready_to_wear_accessories",
          "label": "Ready-to-wear & Accessories",
          "value": 2.2,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "silk_textiles",
          "label": "Silk & Textiles",
          "value": 0.5,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "other_hermes_sectors",
          "label": "Other Hermes sectors",
          "value": 1.1,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "perfume_beauty",
          "label": "Perfume & Beauty",
          "value": 0.2,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "watches",
          "label": "Watches",
          "value": 0.3,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "other_products",
          "label": "Other products",
          "value": 0.2,
          "notes": [
            "(0%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 2.4
      },
      "operatingExpenses": {
        "total": 2.5,
        "items": [
          {
            "id": "sales_administrative",
            "label": "Sales & Administrative",
            "value": 1.9,
            "notes": [
              "23% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.6,
            "notes": [
              "7% of revenue"
            ]
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
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
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
        "value": 5.8,
        "notes": [
          "71% of revenue",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.4,
        "notes": [
          "41% of revenue",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.2,
        "notes": [
          "28% of revenue",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年上半年",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "leather_goods_saddlery",
              "label": "皮具与马具",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "ready_to_wear_accessories",
              "label": "成衣与配饰",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "silk_textiles",
              "label": "丝绸与纺织品",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "other_hermes_sectors",
              "label": "其他爱马仕业务",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "perfume_beauty",
              "label": "香水与美妆",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "watches",
              "label": "腕表",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "other_products",
              "label": "其他产品",
              "notes": [
                "同比 (0%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_administrative",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 23%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 7%"
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "占收入 71%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 41%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 28%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hermes-fy24",
    "company": "Hermès",
    "period": "FY24",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/hermes-fy24.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 15.2,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "leather_goods_saddlery",
          "label": "Leather Goods & Saddlery",
          "value": 6.5,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "ready_to_wear_accessories",
          "label": "Ready-to-wear & Accessories",
          "value": 4.4,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "silk_textiles",
          "label": "Silk & Textiles",
          "value": 1,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "other_hermes_sectors",
          "label": "Other Hermes sectors",
          "value": 1.9,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "perfume_beauty",
          "label": "Perfume & Beauty",
          "value": 0.5,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "watches",
          "label": "Watches",
          "value": 0.6,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "other_products",
          "label": "Other products",
          "value": 0.3,
          "notes": [
            "+8% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 4.5
      },
      "operatingExpenses": {
        "total": 4.5,
        "items": [
          {
            "id": "sales_administrative",
            "label": "Sales & Administrative",
            "value": 3.6,
            "notes": [
              "24% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.9,
            "notes": [
              "7% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.8
      }
    },
    "otherIncome": {
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.3,
          "notes": [
            "Source image displays $0.3B despite its euro unit caption."
          ]
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
        "value": 10.7,
        "notes": [
          "70% of revenue",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.1,
        "notes": [
          "41% of revenue",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.6,
        "notes": [
          "31% of revenue",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "leather_goods_saddlery",
              "label": "皮具与马具",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "ready_to_wear_accessories",
              "label": "成衣与配饰",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "silk_textiles",
              "label": "丝绸与纺织品",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "other_hermes_sectors",
              "label": "其他爱马仕业务",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "perfume_beauty",
              "label": "香水与美妆",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "watches",
              "label": "腕表",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "other_products",
              "label": "其他产品",
              "notes": [
                "同比 +8%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_administrative",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 24%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 7%"
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
              "label": "其他",
              "notes": [
                "源图金额显示为 $0.3B，但图表单位为欧元。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "占收入 70%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 41%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 31%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hermes-h1-fy24",
    "company": "Hermès",
    "period": "H1 FY24",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/hermes-h1-fy24.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 7.5,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "leather_goods_saddlery",
          "label": "Leather Goods & Saddlery",
          "value": 3.2,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "ready_to_wear_accessories",
          "label": "Ready-to-wear & Accessories",
          "value": 2.2,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "silk_textiles",
          "label": "Silk & Textiles",
          "value": 0.4,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "other_hermes_sectors",
          "label": "Other Hermes sectors",
          "value": 1,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "perfume_beauty",
          "label": "Perfume & Beauty",
          "value": 0.3,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "watches",
          "label": "Watches",
          "value": 0.3,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "other_products",
          "label": "Other products",
          "value": 0.2,
          "notes": [
            "+5% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 2.2
      },
      "operatingExpenses": {
        "total": 2.1,
        "items": [
          {
            "id": "sales_administrative",
            "label": "Sales & Administrative",
            "value": 1.6,
            "notes": [
              "22% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.5,
            "notes": [
              "6% of revenue"
            ]
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
      "total": 0.2,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.2,
          "notes": [
            "Source image displays $0.2B despite its euro unit caption."
          ]
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
        "value": 5.3,
        "notes": [
          "71% of revenue",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.1,
        "notes": [
          "42% of revenue",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.4,
        "notes": [
          "32% of revenue",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年上半年",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "leather_goods_saddlery",
              "label": "皮具与马具",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "ready_to_wear_accessories",
              "label": "成衣与配饰",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "silk_textiles",
              "label": "丝绸与纺织品",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "other_hermes_sectors",
              "label": "其他爱马仕业务",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "perfume_beauty",
              "label": "香水与美妆",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "watches",
              "label": "腕表",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "other_products",
              "label": "其他产品",
              "notes": [
                "同比 +5%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_administrative",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 22%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 6%"
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
              "label": "其他",
              "notes": [
                "源图金额显示为 $0.2B，但图表单位为欧元。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "占收入 71%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 42%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 32%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hermes-h1-fy22",
    "company": "Hermès",
    "period": "H1 FY22",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/hermes-h1-fy22.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 5.5,
      "notes": [
        "+29% Y/Y"
      ],
      "items": [
        {
          "id": "leather_goods_saddlery",
          "label": "Leather Goods & Saddlery",
          "value": 2.4,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "ready_to_wear_accessories",
          "label": "Ready-to-wear & Accessories",
          "value": 1.5,
          "notes": [
            "+42% Y/Y"
          ]
        },
        {
          "id": "silk_textiles",
          "label": "Silk & Textiles",
          "value": 0.4,
          "notes": [
            "+36% Y/Y"
          ]
        },
        {
          "id": "other_hermes_sectors",
          "label": "Other Hermes sectors",
          "value": 0.6,
          "notes": [
            "+40% Y/Y"
          ]
        },
        {
          "id": "perfume_beauty",
          "label": "Perfume & Beauty",
          "value": 0.2,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "watches",
          "label": "Watches",
          "value": 0.3,
          "notes": [
            "+65% Y/Y"
          ]
        },
        {
          "id": "other_products",
          "label": "Other products",
          "value": 0.1,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1.6
      },
      "operatingExpenses": {
        "total": 1.6,
        "items": [
          {
            "id": "sales_administrative",
            "label": "Sales & Administrative",
            "value": 1.2,
            "notes": [
              "22% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.4,
            "notes": [
              "7% of revenue"
            ]
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
      "total": 0.01,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 0.01
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.9,
        "notes": [
          "71% of revenue",
          "(0.5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.3,
        "notes": [
          "42% of revenue",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.6,
        "notes": [
          "30% of revenue",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年上半年",
        "periodNote": "",
        "revenue": {
          "items": [
            {
              "id": "leather_goods_saddlery",
              "label": "皮具与马具"
            },
            {
              "id": "ready_to_wear_accessories",
              "label": "成衣与配饰"
            },
            {
              "id": "silk_textiles",
              "label": "丝绸与纺织品"
            },
            {
              "id": "other_hermes_sectors",
              "label": "其他爱马仕业务"
            },
            {
              "id": "perfume_beauty",
              "label": "香水与美妆"
            },
            {
              "id": "watches",
              "label": "腕表"
            },
            {
              "id": "other_products",
              "label": "其他产品"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        }
      }
    }
  },
  {
    "key": "hermes-h1-fy23",
    "company": "Hermès",
    "period": "H1 FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/hermes-h1-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 6.7,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "leather_goods_saddlery",
          "label": "Leather Goods & Saddlery",
          "value": 2.8,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "ready_to_wear_accessories",
          "label": "Ready-to-wear & Accessories",
          "value": 1.9,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "silk_textiles",
          "label": "Silk & Textiles",
          "value": 0.4,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "other_hermes_sectors",
          "label": "Other Hermes sectors",
          "value": 0.8,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "perfume_beauty",
          "label": "Perfume & Beauty",
          "value": 0.2,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "watches",
          "label": "Watches",
          "value": 0.3,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "other_products",
          "label": "Other products",
          "value": 0.2,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1.9
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "sales_administrative",
            "label": "Sales & Administrative",
            "value": 1.5,
            "notes": [
              "22% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.4,
            "notes": [
              "6% of revenue"
            ]
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
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "Source displays $0.1B despite the euro unit caption. Source rounded operating profit plus Other less tax exceeds net profit by 0.2B."
          ]
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
        "value": 4.8,
        "notes": [
          "72% of revenue",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.9,
        "notes": [
          "44% of revenue",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.2,
        "notes": [
          "33% of revenue",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年上半年",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "leather_goods_saddlery",
              "label": "皮具与马具",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "ready_to_wear_accessories",
              "label": "成衣与配饰",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "id": "silk_textiles",
              "label": "丝绸与纺织品",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "other_hermes_sectors",
              "label": "其他爱马仕业务",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "perfume_beauty",
              "label": "香水与美妆",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "watches",
              "label": "腕表",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "other_products",
              "label": "其他产品",
              "notes": [
                "同比 +3%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_administrative",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 22%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 6%"
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
              "label": "其他",
              "notes": [
                "源图标为 $0.1B，但全图单位为欧元。源图营业利润加其他减税费，比净利润高 0.2B。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "占收入 72%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 44%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 33%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hermes-fy22",
    "company": "Hermès",
    "period": "FY22",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/hermes-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 11.6,
      "notes": [
        "+29% Y/Y"
      ],
      "items": [
        {
          "id": "leather_goods_saddlery",
          "label": "Leather Goods & Saddlery",
          "value": 5,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "ready_to_wear_accessories",
          "label": "Ready-to-wear & Accessories",
          "value": 3.2,
          "notes": [
            "+42% Y/Y"
          ]
        },
        {
          "id": "silk_textiles",
          "label": "Silk & Textiles",
          "value": 0.8,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "other_hermes_sectors",
          "label": "Other Hermes sectors",
          "value": 1.4,
          "notes": [
            "+37% Y/Y"
          ]
        },
        {
          "id": "perfume_beauty",
          "label": "Perfume & Beauty",
          "value": 0.4,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "watches",
          "label": "Watches",
          "value": 0.5,
          "notes": [
            "+54% Y/Y"
          ]
        },
        {
          "id": "other_products",
          "label": "Other products",
          "value": 0.3,
          "notes": [
            "+10% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 3.4
      },
      "operatingExpenses": {
        "total": 3.5,
        "items": [
          {
            "id": "sales_administrative",
            "label": "Sales & Administrative",
            "value": 2.7,
            "notes": [
              "23% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.8,
            "notes": [
              "7% of revenue"
            ]
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
      "total": 0.012,
      "items": [
        {
          "id": "other",
          "label": "Interest & Other",
          "value": 0.012,
          "valueText": "(€12M)"
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.2,
        "notes": [
          "71% of revenue",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.7,
        "notes": [
          "40% of revenue",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.4,
        "notes": [
          "29% of revenue",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +29%"
          ],
          "items": [
            {
              "id": "leather_goods_saddlery",
              "label": "皮具与马具",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "ready_to_wear_accessories",
              "label": "成衣与配饰",
              "notes": [
                "同比 +42%"
              ]
            },
            {
              "id": "silk_textiles",
              "label": "丝绸与纺织品",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "other_hermes_sectors",
              "label": "其他爱马仕业务",
              "notes": [
                "同比 +37%"
              ]
            },
            {
              "id": "perfume_beauty",
              "label": "香水与美妆",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "watches",
              "label": "腕表",
              "notes": [
                "同比 +54%"
              ]
            },
            {
              "id": "other_products",
              "label": "其他产品",
              "notes": [
                "同比 +10%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_administrative",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 23%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 7%"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": []
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "占收入 71%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 40%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 29%",
              "同比 +2 个百分点"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other",
              "label": "利息及其他"
            }
          ]
        }
      }
    }
  },
  {
    "key": "hermes-h1-fy25",
    "company": "Hermès",
    "period": "H1 FY25",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/hermes-h1-fy25.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 8,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "leather_goods_saddlery",
          "label": "Leather Goods & Saddlery",
          "value": 3.6,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "ready_to_wear_accessories",
          "label": "Ready-to-wear & Accessories",
          "value": 2.3,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "silk_textiles",
          "label": "Silk & Textiles",
          "value": 0.4,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "other_hermes_sectors",
          "label": "Other Hermes sectors",
          "value": 1.1,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "perfume_beauty",
          "label": "Perfume & Beauty",
          "value": 0.2,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "watches",
          "label": "Watches",
          "value": 0.3,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "other_products",
          "label": "Other products",
          "value": 0.2,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 2.4
      },
      "operatingExpenses": {
        "total": 2.4,
        "items": [
          {
            "id": "sales_administrative",
            "label": "Sales & Administrative",
            "value": 1.8,
            "notes": [
              "23% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.5,
            "notes": [
              "6% of revenue"
            ]
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
      "total": 0.2,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.2,
          "notes": [
            "Source image displays $0.2B despite its euro unit caption."
          ]
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
        "value": 5.7,
        "notes": [
          "71% of revenue",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.3,
        "notes": [
          "41% of revenue",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.3,
        "notes": [
          "28% of revenue",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年上半年",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "leather_goods_saddlery",
              "label": "皮具与马具",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "ready_to_wear_accessories",
              "label": "成衣与配饰",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "silk_textiles",
              "label": "丝绸与纺织品",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "other_hermes_sectors",
              "label": "其他爱马仕业务",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "perfume_beauty",
              "label": "香水与美妆",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "watches",
              "label": "腕表",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "other_products",
              "label": "其他产品",
              "notes": [
                "同比 +7%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_administrative",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 23%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 6%"
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
              "label": "其他",
              "notes": [
                "源图金额显示为 $0.2B，但图表单位为欧元。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "占收入 71%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 41%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 28%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hermes-fy23",
    "company": "Hermès",
    "period": "FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/hermes-fy23.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 13.4,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "leather_goods_saddlery",
          "label": "Leather Goods & Saddlery",
          "value": 5.5,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "ready_to_wear_accessories",
          "label": "Ready-to-wear & Accessories",
          "value": 3.9,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "silk_textiles",
          "label": "Silk & Textiles",
          "value": 0.9,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "other_hermes_sectors",
          "label": "Other Hermes sectors",
          "value": 1.7,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "perfume_beauty",
          "label": "Perfume & Beauty",
          "value": 0.5,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "watches",
          "label": "Watches",
          "value": 0.6,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "other_products",
          "label": "Other products",
          "value": 0.3,
          "notes": [
            "+2% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 3.7
      },
      "operatingExpenses": {
        "total": 4.1,
        "items": [
          {
            "id": "sales_administrative",
            "label": "Sales & Administrative",
            "value": 3.2,
            "notes": [
              "24% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.9,
            "notes": [
              "7% of revenue"
            ]
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
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.3,
          "notes": [
            "Source image displays $0.3B despite its euro unit caption."
          ]
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
        "value": 9.7,
        "notes": [
          "72% of revenue",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.6,
        "notes": [
          "42% of revenue",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.3,
        "notes": [
          "32% of revenue",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "leather_goods_saddlery",
              "label": "皮具与马具",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "ready_to_wear_accessories",
              "label": "成衣与配饰",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "silk_textiles",
              "label": "丝绸与纺织品",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "other_hermes_sectors",
              "label": "其他爱马仕业务",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "perfume_beauty",
              "label": "香水与美妆",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "watches",
              "label": "腕表",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "other_products",
              "label": "其他产品",
              "notes": [
                "同比 +2%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sales_administrative",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 24%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 7%"
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
              "label": "其他",
              "notes": [
                "源图金额显示为 $0.3B，但图表单位为欧元。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "占收入 72%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 42%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 32%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
