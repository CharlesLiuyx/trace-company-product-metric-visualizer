/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "lvmh-h1-fy25",
    "company": "LVMH",
    "period": "H1 FY25",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/lvmh-h1-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 39.8,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "wines_spirits",
          "label": "Wines & Spirits",
          "value": 2.6,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "fashion_leather_goods",
          "label": "Fashion & Leather Goods",
          "value": 19.1,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "perfumes_cosmetics",
          "label": "Perfumes & Cosmetics",
          "value": 4.1,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "watches_jewelry",
          "label": "Watches & Jewelry",
          "value": 5.1,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "selective_retailing",
          "label": "Selective retailing",
          "value": 8.6,
          "notes": [
            "(0%) Y/Y"
          ]
        },
        {
          "id": "other_activities_eliminations",
          "label": "Other activities and eliminations",
          "value": 0.3,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 13.2
      },
      "operatingExpenses": {
        "total": 17.6,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & Marketing",
            "value": 14.7,
            "notes": [
              "37% of revenue"
            ]
          },
          {
            "id": "general_administrative",
            "label": "General & Administrative",
            "value": 2.9,
            "notes": [
              "7% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.6
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.4,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 26.6,
        "notes": [
          "67% of revenue",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 9,
        "notes": [
          "23% of revenue",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.9,
        "notes": [
          "15% of revenue",
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
            "同比 (4%)"
          ],
          "items": [
            {
              "id": "wines_spirits",
              "label": "葡萄酒与烈酒",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "fashion_leather_goods",
              "label": "时装与皮具",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "perfumes_cosmetics",
              "label": "香水与美妆",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "watches_jewelry",
              "label": "腕表与珠宝",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "selective_retailing",
              "label": "精选零售",
              "notes": [
                "同比 (0%)"
              ]
            },
            {
              "id": "other_activities_eliminations",
              "label": "其他业务及抵销",
              "notes": []
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
                "id": "sales_marketing",
                "label": "销售与市场费用",
                "notes": [
                  "占收入 37%"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
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
              "占收入 67%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 23%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 15%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lvmh-fy25",
    "company": "LVMH",
    "period": "FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lvmh-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 80.8,
      "notes": [
        "(5%) Y/Y"
      ],
      "items": [
        {
          "id": "wines_spirits",
          "label": "Wines & Spirits",
          "value": 5.4,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "fashion_leather_goods",
          "label": "Fashion & Leather Goods",
          "value": 37.8,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "perfumes_cosmetics",
          "label": "Perfumes & Cosmetics",
          "value": 8.2,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "watches_jewelry",
          "label": "Watches & Jewelry",
          "value": 10.5,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "selective_retailing",
          "label": "Selective retailing",
          "value": 18.3,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "other_activities_eliminations",
          "label": "Other activities and eliminations",
          "value": 0.7
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 27.3
      },
      "operatingExpenses": {
        "total": 36.4,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & Marketing",
            "value": 29.9,
            "notes": [
              "37% of revenue"
            ]
          },
          {
            "id": "general_administrative",
            "label": "General & Administrative",
            "value": 5.9,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 5.5
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.4,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 53.5,
        "notes": [
          "66% of revenue",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 17.1,
        "notes": [
          "22% of revenue",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 11.2,
        "notes": [
          "14% of revenue",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 (5%)"
          ],
          "items": [
            {
              "id": "wines_spirits",
              "label": "葡萄酒与烈酒",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "fashion_leather_goods",
              "label": "时装与皮具",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "perfumes_cosmetics",
              "label": "香水与美妆",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "watches_jewelry",
              "label": "腕表与珠宝",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "selective_retailing",
              "label": "精选零售",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "other_activities_eliminations",
              "label": "其他业务及抵销"
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
                "id": "sales_marketing",
                "label": "销售与市场费用",
                "notes": [
                  "占收入 37%"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
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
              "占收入 66%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 22%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 14%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lvmh-h1-fy26",
    "company": "LVMH",
    "period": "H1 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lvmh-h1-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 38.6,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "wines_spirits",
          "label": "Wines & Spirits",
          "value": 2.6,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "fashion_leather_goods",
          "label": "Fashion & Leather Goods",
          "value": 18.1,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "perfumes_cosmetics",
          "label": "Perfumes & Cosmetics",
          "value": 3.9,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "watches_jewelry",
          "label": "Watches & Jewelry",
          "value": 5.2,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "selective_retailing",
          "label": "Selective retailing",
          "value": 8.4,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "other_activities_eliminations",
          "label": "Other activities and eliminations",
          "value": 0.4
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 12.7
      },
      "operatingExpenses": {
        "total": 17.3,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & Marketing",
            "value": 14.4,
            "notes": [
              "37% of revenue"
            ]
          },
          {
            "id": "general_administrative",
            "label": "General & Administrative",
            "value": 2.9,
            "notes": [
              "7% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.6
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
        "value": 25.9,
        "notes": [
          "67% of revenue",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 8.7,
        "notes": [
          "23% of revenue",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 6,
        "notes": [
          "16% of revenue",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年上半年",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "wines_spirits",
              "label": "葡萄酒与烈酒",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "fashion_leather_goods",
              "label": "时装与皮具",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "perfumes_cosmetics",
              "label": "香水与美妆",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "watches_jewelry",
              "label": "腕表与珠宝",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "selective_retailing",
              "label": "精选零售",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "other_activities_eliminations",
              "label": "其他业务及抵销"
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
                "id": "sales_marketing",
                "label": "销售与市场费用",
                "notes": [
                  "占收入 37%"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
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
              "占收入 67%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 23%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 16%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lvmh-fy24",
    "company": "LVMH",
    "period": "FY24",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lvmh-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 84.7,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "wines_spirits",
          "label": "Wines & Spirits",
          "value": 5.9,
          "notes": [
            "(11%) Y/Y"
          ]
        },
        {
          "id": "fashion_leather_goods",
          "label": "Fashion & Leather Goods",
          "value": 41,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "perfumes_cosmetics",
          "label": "Perfumes & Cosmetics",
          "value": 8.4,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "watches_jewelry",
          "label": "Watches & Jewelry",
          "value": 10.6,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "selective_retailing",
          "label": "Selective retailing",
          "value": 18.3,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "other_activities_eliminations",
          "label": "Other activities and eliminations",
          "value": 0.5
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 27.9
      },
      "operatingExpenses": {
        "total": 37.9,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & Marketing",
            "value": 31,
            "notes": [
              "37% of revenue"
            ]
          },
          {
            "id": "general_administrative",
            "label": "General & Administrative",
            "value": 6.2,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 5.2
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.8,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.8
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 56.8,
        "notes": [
          "67% of revenue",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 18.9,
        "notes": [
          "22% of revenue",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 13,
        "notes": [
          "15% of revenue",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "wines_spirits",
              "label": "葡萄酒与烈酒",
              "notes": [
                "同比 (11%)"
              ]
            },
            {
              "id": "fashion_leather_goods",
              "label": "时装与皮具",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "perfumes_cosmetics",
              "label": "香水与美妆",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "watches_jewelry",
              "label": "腕表与珠宝",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "selective_retailing",
              "label": "精选零售",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "other_activities_eliminations",
              "label": "其他业务及抵销"
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
                "id": "sales_marketing",
                "label": "销售与市场费用",
                "notes": [
                  "占收入 37%"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
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
              "占收入 67%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 22%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 15%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lvmh-fy23",
    "company": "LVMH",
    "period": "FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/lvmh-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 86.2,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "wines_spirits",
          "label": "Wines & Spirits",
          "value": 6.6,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "fashion_leather_goods",
          "label": "Fashion & Leather Goods",
          "value": 42.2,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "perfumes_cosmetics",
          "label": "Perfumes & Cosmetics",
          "value": 8.3,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "watches_jewelry",
          "label": "Watches & Jewelry",
          "value": 10.9,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "selective_retailing",
          "label": "Selective retailing",
          "value": 17.9,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "other_activities_eliminations",
          "label": "Other activities and eliminations",
          "value": 0.3,
          "notes": [
            "+15% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 26.9
      },
      "operatingExpenses": {
        "total": 36.7,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & Marketing",
            "value": 30.8,
            "notes": [
              "36% of revenue"
            ]
          },
          {
            "id": "general_administrative",
            "label": "General & Administrative",
            "value": 5.7,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.2,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 5.7
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.9,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.9
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 59.3,
        "notes": [
          "69% of revenue",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 22.6,
        "notes": [
          "26% of revenue",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 16,
        "notes": [
          "19% of revenue",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "wines_spirits",
              "label": "葡萄酒与烈酒",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "fashion_leather_goods",
              "label": "时装与皮具",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "perfumes_cosmetics",
              "label": "香水与美妆",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "watches_jewelry",
              "label": "腕表与珠宝",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "selective_retailing",
              "label": "精选零售",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "other_activities_eliminations",
              "label": "其他业务及抵销",
              "notes": [
                "同比 +15%"
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
                "id": "sales_marketing",
                "label": "销售与市场费用",
                "notes": [
                  "占收入 36%"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
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
              "占收入 69%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 26%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 19%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lvmh-h1-fy22",
    "company": "LVMH",
    "period": "H1 FY22",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/lvmh-h1-fy22.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 36.7,
      "notes": [
        "+28% Y/Y"
      ],
      "items": [
        {
          "id": "wines_spirits",
          "label": "Wines & Spirits",
          "value": 3.3,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "fashion_leather_goods",
          "label": "Fashion & Leather Goods",
          "value": 18.1,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "perfumes_cosmetics",
          "label": "Perfumes & Cosmetics",
          "value": 3.6,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "watches_jewelry",
          "label": "Watches & Jewelry",
          "value": 4.9,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "selective_retailing",
          "label": "Selective retailers",
          "value": 6.6,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "other_activities_eliminations",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 11.4
      },
      "operatingExpenses": {
        "total": 15.2,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & Marketing",
            "value": 12.7,
            "notes": [
              "35% of revenue"
            ]
          },
          {
            "id": "general_administrative",
            "label": "General & Administrative",
            "value": 2.4,
            "notes": [
              "6% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.4
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.8,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 0.8
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 25.3,
        "notes": [
          "69% of revenue",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 10.1,
        "notes": [
          "28% of revenue",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 6.9,
        "notes": [
          "19% of revenue",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年上半年",
        "revenue": {
          "notes": [
            "同比 +28%"
          ],
          "items": [
            {
              "id": "wines_spirits",
              "label": "葡萄酒与烈酒",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "fashion_leather_goods",
              "label": "时装与皮具",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "perfumes_cosmetics",
              "label": "香水与美妆",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "watches_jewelry",
              "label": "腕表与珠宝",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "selective_retailing",
              "label": "精选零售",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "other_activities_eliminations",
              "label": "其他"
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
                "id": "sales_marketing",
                "label": "销售与市场费用"
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用"
              },
              {
                "id": "other_opex",
                "label": "其他营业费用"
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
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "占收入 69%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 28%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 19%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lvmh-h1-fy23",
    "company": "LVMH",
    "period": "H1 FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processing/lvmh-h1-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 42.2,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "wines_spirits",
          "label": "Wines & Spirits",
          "value": 3.2,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "fashion_leather_goods",
          "label": "Fashion & Leather Goods",
          "value": 21.2,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "perfumes_cosmetics",
          "label": "Perfumes & Cosmetics",
          "value": 4,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "watches_jewelry",
          "label": "Watches & Jewelry",
          "value": 5.4,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "selective_retailing",
          "label": "Selective retailing",
          "value": 8.4,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "other_activities_eliminations",
          "label": "Other activities and eliminations",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 12.9
      },
      "operatingExpenses": {
        "total": 17.8,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & Marketing",
            "value": 14.9,
            "notes": [
              "35% of revenue"
            ]
          },
          {
            "id": "general_administrative",
            "label": "General & Administrative",
            "value": 2.8,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.01
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 3.1
      }
    },
    "otherIncome": {
      "total": 0.5,
      "items": [
        {
          "id": "other",
          "label": "Interest & Other",
          "value": 0.5
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
        "value": 29.3,
        "notes": [
          "69% of revenue",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 11.5,
        "notes": [
          "27% of revenue",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 8.9,
        "notes": [
          "21% of revenue",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年上半年",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "wines_spirits",
              "label": "葡萄酒与烈酒",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "fashion_leather_goods",
              "label": "时装与皮具",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "perfumes_cosmetics",
              "label": "香水与美妆",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "watches_jewelry",
              "label": "腕表与珠宝",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "selective_retailing",
              "label": "精选零售",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "other_activities_eliminations",
              "label": "其他业务及抵销",
              "notes": []
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
                "id": "sales_marketing",
                "label": "销售与市场费用",
                "notes": [
                  "占收入 35%"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他营业费用"
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
              "占收入 69%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 27%",
              "同比 0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 21%",
              "同比 +2 个百分点"
            ]
          }
        },
        "otherIncome": {
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
    "key": "lvmh-h1-fy24",
    "company": "LVMH",
    "period": "H1 FY24",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processing/lvmh-h1-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 41.7,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "wines_spirits",
          "label": "Wines & Spirits",
          "value": 2.8,
          "notes": [
            "(12%) Y/Y"
          ]
        },
        {
          "id": "fashion_leather_goods",
          "label": "Fashion & Leather Goods",
          "value": 20.8,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "perfumes_cosmetics",
          "label": "Perfumes & Cosmetics",
          "value": 4.1,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "watches_jewelry",
          "label": "Watches & Jewelry",
          "value": 5.2,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "selective_retailing",
          "label": "Selective retailing",
          "value": 8.6,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "other_activities_eliminations",
          "label": "Other activities and eliminations",
          "value": 0.2,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 13
      },
      "operatingExpenses": {
        "total": 18.1,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & Marketing",
            "value": 15,
            "notes": [
              "36% of revenue"
            ]
          },
          {
            "id": "general_administrative",
            "label": "General & Administrative",
            "value": 3,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.01,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.8
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
          "id": "other",
          "label": "Other",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 28.7,
        "notes": [
          "69% of revenue",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 10.6,
        "notes": [
          "25% of revenue",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 7.6,
        "notes": [
          "18% of revenue",
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
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "wines_spirits",
              "label": "葡萄酒与烈酒",
              "notes": [
                "同比 (12%)"
              ]
            },
            {
              "id": "fashion_leather_goods",
              "label": "时装与皮具",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "perfumes_cosmetics",
              "label": "香水与美妆",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "watches_jewelry",
              "label": "腕表与珠宝",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "selective_retailing",
              "label": "精选零售",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "other_activities_eliminations",
              "label": "其他业务及抵销",
              "notes": []
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
                "id": "sales_marketing",
                "label": "销售与市场费用",
                "notes": [
                  "占收入 36%"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
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
              "占收入 69%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 25%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 18%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lvmh-fy22",
    "company": "LVMH",
    "period": "FY22",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/lvmh-fy22.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 79.2,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "wines_spirits",
          "label": "Wines & Spirits",
          "value": 7.1,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "fashion_leather_goods",
          "label": "Fashion & Leather Goods",
          "value": 38.6,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "perfumes_cosmetics",
          "label": "Perfumes & Cosmetics",
          "value": 7.7,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "watches_jewelry",
          "label": "Watches & Jewelry",
          "value": 10.6,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "selective_retailing",
          "label": "Selective retailing",
          "value": 14.9,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "other_activities_eliminations",
          "label": "Other activities and eliminations",
          "value": 0.3,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 25
      },
      "operatingExpenses": {
        "total": 33.2,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & Marketing",
            "value": 28.2,
            "notes": [
              "36% of revenue"
            ]
          },
          {
            "id": "general_administrative",
            "label": "General & Administrative",
            "value": 5,
            "notes": [
              "6% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.017,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 5.4
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.9,
      "items": [
        {
          "id": "other",
          "label": "Interest & Other",
          "value": 0.9
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 54.2,
        "notes": [
          "68% of revenue",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 21,
        "notes": [
          "27% of revenue",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 14.8,
        "notes": [
          "20% of revenue",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "wines_spirits",
              "label": "葡萄酒与烈酒",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "fashion_leather_goods",
              "label": "时装与皮具",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "perfumes_cosmetics",
              "label": "香水与美妆",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "watches_jewelry",
              "label": "腕表与珠宝",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "selective_retailing",
              "label": "精选零售",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "other_activities_eliminations",
              "label": "其他业务及抵销",
              "notes": []
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
                "id": "sales_marketing",
                "label": "销售与市场费用",
                "notes": [
                  "占收入 36%"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 6%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
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
              "label": "利息与其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "占收入 68%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 27%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 20%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  }
]);
})(window);
