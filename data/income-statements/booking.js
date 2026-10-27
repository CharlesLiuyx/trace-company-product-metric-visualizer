/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "booking-q4-fy25",
    "company": "Booking Holdings",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/booking-q4-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 6.3,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 4.2,
          "notes": [
            "+27% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 1.8,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.3,
          "notes": [
            "+14% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source infographic folds costs into the operating-expenses waterfall and does not display a gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 4.3,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.9
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.9
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.8
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.2
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.2
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
        "label": "Gross profit",
        "value": 6.3,
        "notes": [
          "Not separately visualized in the source infographic."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2,
        "notes": [
          "32% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.4,
        "notes": [
          "22% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +27%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +14%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源信息图将成本并入运营费用瀑布图，未单列毛利润阶段。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
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
            "label": "毛利润",
            "notes": [
              "来源信息图未单列。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 32%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "booking-q1-fy26",
    "company": "Booking Holdings",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/booking-q1-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 5.5,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 3.7,
          "notes": [
            "+27% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 1.5,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.3,
          "notes": [
            "+9% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source infographic folds costs into the operating-expenses waterfall and does not display a gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 4.3,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 2.1
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.9
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.9
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.2
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
            "id": "other_expense",
            "label": "Other",
            "value": 0.025,
            "valueText": "($25M)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "The source infographic displays this amount as €0.1B."
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
        "label": "Gross profit",
        "value": 5.5,
        "notes": [
          "Not separately visualized in the source infographic."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "23% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "20% margin",
          "+13pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +27%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +9%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源信息图将成本并入运营费用瀑布图，未单列毛利润阶段。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
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
                "id": "other_expense",
                "label": "其他"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他",
              "notes": [
                "来源信息图将该金额显示为 €0.1B。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源信息图未单列。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 23%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 +13 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "booking-q2-fy26",
    "company": "Booking Holdings",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended June 30, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/booking-q2-fy26.png",
    "roundingTolerance": 0.030001,
    "notes": [
      "Official filing supplement: source image amounts are displayed to $0.1B; exact GAAP values are retained in this record. The source operating-margin typo is corrected to 34% = $2500M / $7352M, per user direction.",
      "Source G&A $0.3B and Info Tech $0.2B conflict with the official filing. User approved corrections: G&A $217M display $0.2B and Info Tech $263M display $0.3B.",
      "The official $4852M operating-expense total includes $30M of transformation costs not separately drawn or labeled in the source. The six Source expense items total $4822M. This $30M reconciliation is documented without inventing a Source node.",
      "Other is aggregate non-operating income of $60M: interest expense -$300M + interest/dividend income $201M + other income $159M. The Source displays the rounded aggregate as $0.1B.",
      "Authoritative supplemental source: https://www.sec.gov/Archives/edgar/data/1075531/000107553126000037/bkng-20260630.htm"
    ],
    "revenue": {
      "total": 7.352,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 5.127,
          "notes": [
            "+15% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 1.903,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.322,
          "notes": [
            "+8% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source combines all costs in operating expenses and shows no separate gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 4.852,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 2.371,
            "notes": []
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.942,
            "notes": []
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.9,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.217,
            "notes": []
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.263,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.129,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.61,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.06,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.06,
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
        "label": "Gross profit",
        "value": 7.352,
        "notes": [
          "Not separately visualized in the source."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.5,
        "notes": [
          "34% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.95,
        "notes": [
          "27% margin",
          "+13pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "51.0",
        "unit": "B",
        "currency": "USD",
        "literal": "$51.0B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Gross bookings\n$51.0B\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1202,
            305,
            150
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "325000000",
        "unit": "count",
        "currency": null,
        "literal": "325M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Nights booked\n325M\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1202,
            331,
            152
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度",
        "notes": [
          "官方财报补充：原图金额以 $0.1B 为显示精度，本记录保存精确的 GAAP 金额。根据用户指示，将营业利润率缺损文字修正为 34%$2500M ÷ $7352M。",
          "原图管理费用 $0.3B、信息技术 $0.2B 与官方财报不符。经用户确认，更正为管理费用 $217M图示 $0.2B、信息技术 $263M图示 $0.3B。",
          "官方运营费用合计 $4852M，其中转型费用 $30M 在原图中未单独绘制或标注。原图六项费用的精确值合计 $4822M，此处明确保留 $30M 的差额说明。",
          "其他为非经营净收益 $60M：利息费用 -$300M + 利息及股息收入 $201M + 其他收益 $159M；原图取整显示 $0.1B。",
          "权威补充来源：https://www.sec.gov/Archives/edgar/data/1075531/000107553126000037/bkng-20260630.htm"
        ],
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +15%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +8%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "原图将全部成本并入运营费用，未单列毛利润阶段。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销",
                "notes": []
              },
              {
                "id": "sales",
                "label": "销售",
                "notes": []
              },
              {
                "id": "personnel",
                "label": "人员",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "info_tech",
                "label": "信息技术",
                "notes": []
              },
              {
                "id": "da",
                "label": "折旧与摊销",
                "notes": []
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
          "items": [
            {
              "id": "other_income",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "原图未单列。"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 34%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 27%",
              "同比 +13 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "booking-q3-fy22",
    "company": "Booking Holdings",
    "period": "Q3 FY22",
    "periodNote": "Quarter ended Sep. 30, 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/booking-q3-fy22.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 6.1,
      "notes": [
        "+29% Y/Y"
      ],
      "items": [
        {
          "id": "agency",
          "label": "Agency",
          "value": 3.2,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 2.6,
          "notes": [
            "+61% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.2,
          "notes": [
            "+26% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source infographic folds costs into the operating-expenses waterfall and does not display a gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 3.5,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.8
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.6
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.1
          },
          {
            "id": "da",
            "label": "Amortization",
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
        "label": "Gross profit",
        "value": 6.1,
        "notes": [
          "Not separately visualized in the source infographic."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "43% margin",
          "Unchanged"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.7,
        "notes": [
          "28% margin",
          "+11pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "32.1",
        "unit": "B",
        "currency": "USD",
        "literal": "$32.1B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+36% Y/Y"
        ],
        "quote": "Gross bookings\n$32.1B\n+36% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1241,
            305,
            150
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "240000000",
        "unit": "count",
        "currency": null,
        "literal": "240M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+31% Y/Y"
        ],
        "quote": "Nights booked\n240M\n+31% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            344,
            1241,
            332,
            150
          ]
        }
      },
      {
        "id": "alternative",
        "label": "Alternative",
        "value": "30",
        "unit": "%",
        "currency": null,
        "literal": "30%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "of total nights"
        ],
        "quote": "Alternative\n30%\nof total nights",
        "anchor": {
          "type": "image-box",
          "box": [
            686,
            1241,
            305,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +29%"
          ],
          "items": [
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +61%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +26%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源信息图将成本并入运营费用，未单列毛利润阶段。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
              },
              {
                "id": "da",
                "label": "摊销"
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
            "label": "毛利润",
            "notes": [
              "来源信息图未单列。"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 43%",
              "保持不变"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 28%",
              "同比 +11 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +36%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +31%"
            ]
          },
          {
            "id": "alternative",
            "label": "其他住宿",
            "notes": [
              "占总夜晚数"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "booking-q4-fy22",
    "company": "Booking Holdings",
    "period": "Q4 FY22",
    "periodNote": "Quarter ended Dec. 31, 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/booking-q4-fy22.png",
    "roundingTolerance": 0.11,
    "revenue": {
      "total": 4,
      "items": [
        {
          "id": "agency",
          "label": "Agency",
          "value": 2,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 1.8,
          "notes": [
            "+71% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.2,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ],
      "notes": [
        "+36% Y/Y"
      ]
    },
    "costs": {
      "costOfRevenue": {
        "value": 0,
        "label": "Cost of revenue",
        "notes": [
          "Source folds all costs into operating expenses; no separate gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.3
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.6
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.1
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1
          }
        ],
        "notes": [
          "Gross expenses $2.9B less restructuring income $0.2B; Source displays net ($2.7B)."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2
      }
    },
    "operatingOtherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "restructuring",
          "label": "Restructuring",
          "value": 0.2
        }
      ]
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
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
        "value": 4,
        "label": "Gross profit",
        "notes": [
          "Not separately shown in Source."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "33% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.2,
        "notes": [
          "31% margin",
          "+10pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "27.3",
        "unit": "B",
        "currency": "USD",
        "literal": "$27.3B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+44% Y/Y"
        ],
        "quote": "Gross bookings\n$27.3B\n+44% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1244,
            305,
            151
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "211000000",
        "unit": "count",
        "currency": null,
        "literal": "211M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+40% Y/Y"
        ],
        "quote": "Nights booked\n211M\n+40% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1244,
            332,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +36%"
          ],
          "items": [
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +71%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +16%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "原图将成本并入运营费用，未单列毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ],
            "notes": [
              "费用总额 $2.9B 减重组收益 $0.2B，原图显示净额 ($2.7B)。"
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "restructuring",
              "label": "重组收益"
            }
          ]
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "原图未单列。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 33%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 31%",
              "同比 +10 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +44%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +40%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "booking-q1-fy23",
    "company": "Booking Holdings",
    "period": "Q1 FY23",
    "periodNote": "Quarter ended Mar. 31, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/booking-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.8,
      "notes": [
        "+40% Y/Y"
      ],
      "items": [
        {
          "id": "agency",
          "label": "Agency",
          "value": 1.8,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 1.8,
          "notes": [
            "+67% Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.2,
          "notes": [
            "+25% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source combines costs in operating expenses; gross profit is not separately shown."
        ]
      },
      "operatingExpenses": {
        "total": 3.3,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.5,
            "notes": []
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.7,
            "notes": []
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.5,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.001,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.037,
        "notes": []
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
          "value": 0.2,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Gross profit",
        "value": 3.8,
        "notes": [
          "Not separately shown in Source."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "12% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "7% margin",
          "(32pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "39",
        "unit": "B",
        "currency": "USD",
        "literal": "$39B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+44% Y/Y"
        ],
        "quote": "Gross bookings\n$39B\n+44% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1244,
            305,
            150
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "274000000",
        "unit": "count",
        "currency": null,
        "literal": "274M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+38% Y/Y"
        ],
        "quote": "Nights booked\n274M\n+38% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1244,
            332,
            152
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +40%"
          ],
          "items": [
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +67%"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +25%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "原图将成本并入运营费用，未单列毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销",
                "notes": []
              },
              {
                "id": "personnel",
                "label": "人员",
                "notes": []
              },
              {
                "id": "sales",
                "label": "销售",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "info_tech",
                "label": "信息技术",
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": []
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费",
            "notes": []
          }
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
            "label": "毛利润",
            "notes": [
              "原图未单列。"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (32 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +44%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +38%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "booking-q2-fy23",
    "company": "Booking Holdings",
    "period": "Q2 FY23",
    "periodNote": "Quarter ended June 30, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/booking-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.5,
      "notes": [
        "+27% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 2.8,
          "notes": [
            "+58% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 2.4,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.3,
          "notes": [
            "+8% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source folds costs into operating expenses and does not show a gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 3.8,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.8
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.8
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.7
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.1
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.001
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
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
        "label": "Gross profit",
        "value": 5.5
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "31% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "notes": [
          "24% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "literal": "$39.7B",
        "value": "39.7",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Gross bookings\n$39.7B\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1244,
            305,
            150
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "literal": "268M",
        "value": "268000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Nights booked\n268M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1244,
            332,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2023 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +27%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +58%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +8%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "原图将成本合并列入运营费用，未展示毛利润阶段。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
              },
              {
                "id": "amortization",
                "label": "摊销"
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
            "label": "营业利润",
            "notes": [
              "利润率 31%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 24%",
              "同比 +4 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订间夜量",
            "notes": [
              "同比 +9%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "booking-q1-fy24",
    "company": "Booking Holdings",
    "period": "Q1 FY24",
    "periodNote": "Quarter ended Mar. 31, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/booking-q1-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 4.4,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 2.4,
          "notes": [
            "+36% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 1.8,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.3,
          "notes": [
            "+8% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source infographic folds costs into the operating-expenses waterfall and does not display a gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 3.6,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.6
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.8
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.7
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.2
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.1
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
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
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
        "label": "Gross profit",
        "value": 4.4,
        "notes": [
          "Not separately visualized in the source infographic."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.8,
        "notes": [
          "18% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "notes": [
          "18% margin",
          "+11pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +36%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +8%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源信息图将成本并入运营费用瀑布图，未单列毛利润阶段。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源信息图未单列。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 18%",
              "同比 +11 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +8%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "43.5",
        "unit": "B",
        "currency": "USD",
        "literal": "$43.5B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Gross bookings\n$43.5B\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1243,
            305,
            151
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "297000000",
        "unit": "count",
        "currency": null,
        "literal": "297M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Nights booked\n297M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1243,
            332,
            152
          ]
        }
      }
    ]
  },
  {
    "key": "booking-q3-fy23",
    "company": "Booking Holdings",
    "period": "Q3 FY23",
    "periodNote": "Quarter ended Sep. 30, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/booking-q3-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 7.3,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 3.9,
          "notes": [
            "+51% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 3.1,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.3,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source infographic folds costs into the operating-expenses waterfall and does not display a gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 4.2,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 2,
            "valueText": "($2.0B)"
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.8,
            "valueText": "($0.8B)"
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.7,
            "valueText": "($0.7B)"
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "valueText": "($0.4B)"
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.2,
            "valueText": "($0.2B)"
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "valueText": "($0.1B)"
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.002,
            "valueText": "($2M)"
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
      "total": 0.046,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.046,
          "valueText": "$46M"
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Gross profit",
        "value": 7.3,
        "notes": [
          "Not separately visualized in the source infographic."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.1,
        "notes": [
          "42% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.5,
        "notes": [
          "34% margin",
          "+7pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +51%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +11%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源信息图将成本并入运营费用瀑布图，未单列毛利润阶段。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "restructuring",
                "label": "重组费用"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源信息图未单列。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 42%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 34%",
              "同比 +7 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +24%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "39.8",
        "unit": "B",
        "currency": "USD",
        "literal": "$39.8B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y"
        ],
        "quote": "Gross bookings\n$39.8B\n+24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1243,
            305,
            150
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "276000000",
        "unit": "count",
        "currency": null,
        "literal": "276M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Nights booked\n276M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1243,
            332,
            152
          ]
        }
      }
    ]
  },
  {
    "key": "booking-q2-fy24",
    "company": "Booking Holdings",
    "period": "Q2 FY24",
    "periodNote": "Quarter ended June 30, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/booking-q2-fy24.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Values preserve source infographic rounding. The source does not separately visualize gross profit or cost of revenue."
    ],
    "revenue": {
      "total": 5.9,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 3.4,
          "notes": [
            "+24% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 2.1,
          "notes": [
            "(12%) Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.3,
          "notes": [
            "+2% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0
      },
      "operatingExpenses": {
        "total": 4,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.9,
            "notes": []
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.8,
            "notes": []
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.8,
            "notes": []
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.1,
            "notes": []
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
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
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
        "label": "Gross profit",
        "value": 5.9
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.8,
        "notes": [
          "32% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.5,
        "notes": [
          "26% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "41.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$41.4B",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "Gross bookings\n$41.4B\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1243,
            305,
            151
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "287000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "287M",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Nights booked\n287M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1243,
            332,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月 30 日的季度",
        "notes": [
          "金额保留原图四舍五入精度。原图未单列毛利润或收入成本。"
        ],
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +24%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 (12%)"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
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
                "id": "marketing",
                "label": "营销",
                "notes": []
              },
              {
                "id": "personnel",
                "label": "人员",
                "notes": []
              },
              {
                "id": "sales",
                "label": "销售",
                "notes": []
              },
              {
                "id": "info_tech",
                "label": "信息技术",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "da",
                "label": "折旧与摊销",
                "notes": []
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 32%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 26%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +7%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "booking-q3-fy24",
    "company": "Booking Holdings",
    "period": "Q3 FY24",
    "periodNote": "Quarter ended Sep. 30, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/booking-q3-fy24.png",
    "roundingTolerance": 0.3,
    "revenue": {
      "total": 8,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 5,
          "notes": [
            "+26% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 2.8,
          "notes": [
            "(12%) Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.3,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source infographic folds costs into the operating-expenses waterfall and does not display a gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 4.8,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 2.2
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.9
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.9
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.2
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.2
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
        "label": "Gross profit",
        "value": 8,
        "notes": [
          "Not separately visualized in the source infographic."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.2,
        "notes": [
          "40% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.5,
        "notes": [
          "31% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +26%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 (12%)"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +3%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源信息图将成本并入运营费用瀑布图，未单列毛利润阶段。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
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
            "label": "毛利润",
            "notes": [
              "来源信息图未单列。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 40%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 31%",
              "同比 (3 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +8%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "43.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$43.4B",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Gross bookings\n$43.4B\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1202,
            306,
            151
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "299000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "299M",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Nights booked\n299M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1202,
            332,
            151
          ]
        }
      }
    ]
  },
  {
    "key": "booking-q4-fy23",
    "company": "Booking Holdings",
    "period": "Q4 FY23",
    "periodNote": "Quarter ended Dec. 31, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/booking-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.8,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 2.5,
          "notes": [
            "+39% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 2.1,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.2,
          "notes": [
            "+12% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source folds costs into operating expenses; gross profit not separately visualized."
        ]
      },
      "operatingExpenses": {
        "total": 4.2,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.4
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.7
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.2
          },
          {
            "id": "da",
            "label": "Amortization",
            "value": 0.1
          },
          {
            "id": "other_expense",
            "label": "Other",
            "value": 0.001
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
          "value": 0.2
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Gross profit",
        "value": 4.8
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "13% margin",
          "(20pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "5% margin",
          "(26pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "31.7",
        "unit": "B",
        "currency": "USD",
        "literal": "$31.7B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Gross bookings\n$31.7B\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1243,
            305,
            150
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "231000000",
        "unit": "count",
        "currency": null,
        "literal": "231M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Nights booked\n231M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1243,
            332,
            150
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
            "同比 +18%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +39%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +12%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源将成本并入运营费用，未单列毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
              },
              {
                "id": "da",
                "label": "摊销"
              },
              {
                "id": "other_expense",
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
              "id": "other_nonoperating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比下降 20 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比下降 26 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +9%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "booking-q1-fy25",
    "company": "Booking Holdings",
    "period": "Q1 FY25",
    "periodNote": "Quarter ended Mar. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/booking-q1-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 4.8,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 2.9,
          "notes": [
            "+22% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 1.6,
          "notes": [
            "(11%) Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.3,
          "notes": [
            "+6% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source infographic folds costs into the operating-expenses waterfall and does not display a gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 3.7,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.8
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.7
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.7
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.1
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.2
          },
          {
            "id": "da",
            "label": "D&A",
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
      "total": 0.7,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.7
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Gross profit",
        "value": 4.8,
        "notes": [
          "Not separately visualized in the source infographic."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "22% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "7% margin",
          "(11pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +22%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 (11%)"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +6%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源信息图将成本并入运营费用瀑布图，未单列毛利润阶段。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
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
            "label": "毛利润",
            "notes": [
              "来源信息图未单列。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (11) 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +7%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "46.7",
        "unit": "B",
        "currency": "USD",
        "literal": "$46.7B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Gross bookings\n$46.7B\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1202,
            305,
            150
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "319000000",
        "unit": "count",
        "currency": null,
        "literal": "319M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Nights booked\n319M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1202,
            331,
            152
          ]
        }
      }
    ]
  },
  {
    "key": "booking-q4-fy24",
    "company": "Booking Holdings",
    "period": "Q4 FY24",
    "periodNote": "Quarter ended Dec. 31, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/booking-q4-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 5.5,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 3.3,
          "notes": [
            "+35% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 1.9,
          "notes": [
            "(10%) Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.3,
          "notes": [
            "+10% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source infographic folds costs into the operating-expenses waterfall and does not display a gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 3.7,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.6
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.9
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.7
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.2
          },
          {
            "id": "da",
            "label": "D&A",
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
        "label": "Gross profit",
        "value": 5.5,
        "notes": [
          "Not separately visualized in the source infographic."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "32% margin",
          "+19pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "20% margin",
          "+15pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +35%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 (10%)"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +10%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源信息图将成本并入运营费用瀑布图，未单列毛利润阶段。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
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
            "label": "毛利润",
            "notes": [
              "来源信息图未单列。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 32%",
              "同比 +19 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 +15 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "37.2",
        "unit": "B",
        "currency": "USD",
        "literal": "$37.2B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Gross bookings\n$37.2B\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1202,
            305,
            150
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "261000000",
        "unit": "count",
        "currency": null,
        "literal": "261M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Nights booked\n261M\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1202,
            332,
            152
          ]
        }
      }
    ]
  },
  {
    "key": "booking-q3-fy25",
    "company": "Booking Holdings",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 30, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/booking-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 6.1,
          "notes": [
            "+23% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 2.6,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.3,
          "notes": [
            "+14% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source infographic folds costs into the operating-expenses waterfall and does not display a gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 5.5,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 2.3
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 1
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.9
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.2
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.2
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.6
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
        "label": "Gross profit",
        "value": 9,
        "notes": [
          "Not separately visualized in the source infographic."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.5,
        "notes": [
          "39% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.7,
        "notes": [
          "31% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +23%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +14%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源信息图将成本并入运营费用瀑布图，未单列毛利润阶段。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "other",
                "label": "其他"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源信息图未单列。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 39%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 31%",
              "同比 (1 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +8%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "49.7",
        "unit": "B",
        "currency": "USD",
        "literal": "$49.7B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Gross bookings\n$49.7B\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1202,
            305,
            150
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "323000000",
        "unit": "count",
        "currency": null,
        "literal": "323M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Nights booked\n323M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1202,
            331,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "booking-q2-fy25",
    "company": "Booking Holdings",
    "period": "Q2 FY25",
    "periodNote": "Quarter ended June 30, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/booking-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.8,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "merchant",
          "label": "Merchant",
          "value": 4.5,
          "notes": [
            "+29% Y/Y",
            "Commissions, payments, insurance"
          ]
        },
        {
          "id": "agency",
          "label": "Agency",
          "value": 2,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "advertising_other",
          "label": "Advertising & Other",
          "value": 0.3,
          "notes": [
            "+10% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source infographic folds costs into the operating-expenses waterfall and does not display a gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 4.5,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 2.1
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 0.9
          },
          {
            "id": "sales",
            "label": "Sales",
            "value": 0.9
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "info_tech",
            "label": "Info Tech",
            "value": 0.2
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.2
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
      "total": 1.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 1.1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Gross profit",
        "value": 6.8,
        "notes": [
          "Not separately visualized in the source infographic."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.3,
        "notes": [
          "33% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "13% margin",
          "(13pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "merchant",
              "label": "商户",
              "notes": [
                "同比 +29%",
                "佣金、支付、保险"
              ]
            },
            {
              "id": "agency",
              "label": "代理",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "advertising_other",
              "label": "广告及其他",
              "notes": [
                "同比 +10%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源信息图将成本并入运营费用瀑布图，未单列毛利润阶段。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "sales",
                "label": "销售"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "info_tech",
                "label": "信息技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
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
            "label": "毛利润",
            "notes": [
              "来源信息图未单列。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 33%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 (13 个百分点)"
            ]
          }
        },
        "notes": [
          "原图金额四舍五入至 $0.1B。营业利润减去其他及税费，与图示净利润相差 $0.1B。"
        ],
        "operatingMetrics": [
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "nights_booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +8%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross_bookings",
        "label": "Gross bookings",
        "value": "46.7",
        "unit": "B",
        "currency": "USD",
        "literal": "$46.7B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Gross bookings\n$46.7B\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            99,
            1202,
            305,
            150
          ]
        }
      },
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "309000000",
        "unit": "count",
        "currency": null,
        "literal": "309M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Nights booked\n309M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1202,
            331,
            151
          ]
        }
      }
    ],
    "notes": [
      "Source values are rounded to $0.1B. Operating profit less Other and Tax differs from displayed net profit by $0.1B."
    ]
  }
]);
})(window);
