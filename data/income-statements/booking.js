/* Pure income statement SSOT. */
(function(global){ const ssot=global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};
ssot.records.push({
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
});
ssot.records.push({
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
});
ssot.records.push({
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
});
})(window);
