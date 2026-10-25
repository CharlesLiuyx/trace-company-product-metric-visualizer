/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "unity-q3-fy22",
    "company": "Unity",
    "period": "Q3 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/unity-q3-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 323,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "create",
          "label": "Create Solutions",
          "value": 129,
          "notes": [
            "+54% Y/Y"
          ]
        },
        {
          "id": "operate",
          "label": "Operate Solutions",
          "value": 172,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "strategic",
          "label": "Strategic Partnerships",
          "value": 23,
          "notes": [
            "(28%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 112,
        "notes": []
      },
      "operatingExpenses": {
        "total": 451,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 248,
            "notes": [
              "77% of revenue",
              "+15pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 110,
            "notes": [
              "34% of revenue",
              "Unchanged"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 93,
            "notes": [
              "29% of revenue",
              "+3pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 211,
        "notes": [
          "65% margin",
          "(12pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -240,
        "notes": [
          "(74%) margin",
          "(30pp) Y/Y"
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
        "id": "dbnr",
        "label": "DBNR",
        "value": "111",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "111%",
        "basis": "unspecified",
        "notes": [
          "(31pp) Y/Y"
        ],
        "quote": "DBNR\n111%\n(31pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            139,
            1174,
            161,
            165
          ]
        }
      },
      {
        "id": "customers_gt_100k",
        "label": "Customers > $100K",
        "value": "1075",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,075",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y and (1%) Q/Q"
        ],
        "quote": "Customers > $100K\n1,075\n+10% Y/Y and (1%) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            307,
            1172,
            412,
            168
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "create",
              "label": "创作解决方案",
              "notes": [
                "同比 +54%"
              ]
            },
            {
              "id": "operate",
              "label": "运营解决方案",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "strategic",
              "label": "战略合作",
              "notes": [
                "同比 (28%)"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 77%",
                  "同比 +15 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 34%",
                  "保持不变"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 29%",
                  "同比 +3 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 65%",
              "同比 (12 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (74%)",
              "同比 (30 个百分点)"
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
            "id": "dbnr",
            "label": "净收入留存率",
            "notes": [
              "同比 (31 个百分点)"
            ]
          },
          {
            "id": "customers_gt_100k",
            "label": "年收入贡献 > $100K 的客户",
            "notes": [
              "同比 +10%，环比 (1%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "unity-q4-fy22",
    "company": "Unity",
    "period": "Q4 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/unity-q4-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 451,
      "notes": [
        "+43% Y/Y"
      ],
      "items": [
        {
          "id": "create",
          "label": "Create Solutions",
          "value": 198,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "grow",
          "label": "Grow Solutions",
          "value": 253,
          "notes": [
            "+51% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 140,
        "notes": []
      },
      "operatingExpenses": {
        "total": 585,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 274,
            "notes": [
              "61% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 183,
            "notes": [
              "41% of revenue",
              "+8pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 127,
            "notes": [
              "28% of revenue",
              "+4pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 311,
        "notes": [
          "69% margin",
          "(8pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -274,
        "notes": [
          "(61%) margin",
          "(15pp) Y/Y"
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
        "id": "dbne",
        "label": "DBNE",
        "value": "116",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "116%",
        "notes": [
          "(24pp) Y/Y"
        ],
        "quote": "DBNE\n116%\n(24pp) Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            139,
            1175,
            161,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers > $100K",
        "value": "1340",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,340",
        "notes": [
          "+27% Y/Y and +25% Q/Q"
        ],
        "quote": "Customers > $100K\n1,340\n+27% Y/Y and +25% Q/Q",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            306,
            1172,
            413,
            167
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +43%"
          ],
          "items": [
            {
              "id": "create",
              "label": "创作解决方案",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "id": "grow",
              "label": "增长解决方案",
              "notes": [
                "同比 +51%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 61%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 41%",
                  "同比 +8 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 28%",
                  "同比 +4 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 69%",
              "同比 (8 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (61%)",
              "同比 (15 个百分点)"
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
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "同比 (24 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户年收入贡献 > $100K",
            "notes": [
              "同比 +27%；环比 +25%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "unity-q2-fy23",
    "company": "Unity",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/unity-q2-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 533,
      "notes": [
        "+80% Y/Y"
      ],
      "items": [
        {
          "id": "create",
          "label": "Create Solutions",
          "value": 193,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "grow",
          "label": "Grow Solutions",
          "value": 340,
          "notes": [
            "+157% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 159,
        "notes": []
      },
      "operatingExpenses": {
        "total": 566,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 268,
            "notes": [
              "50% of revenue",
              "(22pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 209,
            "notes": [
              "39% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 89,
            "notes": [
              "27% of revenue",
              "(11pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 375,
        "notes": [
          "70% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -191,
        "notes": [
          "(36%) margin",
          "+31pp Y/Y"
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
        "id": "dbne",
        "label": "DBNE",
        "value": "106",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "106%",
        "basis": "unspecified",
        "notes": [
          "(1pp) Q/Q"
        ],
        "quote": "DBNE\n106%\n(1pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            138,
            1175,
            164,
            164
          ]
        }
      },
      {
        "id": "customers_gt_100k",
        "label": "Customers > $100K",
        "value": "1330",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,330",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y and +1% Q/Q"
        ],
        "quote": "Customers > $100K\n1,330\n+23% Y/Y and +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            306,
            1172,
            413,
            167
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +80%"
          ],
          "items": [
            {
              "id": "create",
              "label": "创作解决方案",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "grow",
              "label": "增长解决方案",
              "notes": [
                "同比 +157%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 50%",
                  "同比 (22 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 39%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 27%",
                  "同比 (11 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 70%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (36%)",
              "同比 +31 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "环比 (1 个百分点)"
            ]
          },
          {
            "id": "customers_gt_100k",
            "label": "客户 > $100K",
            "notes": [
              "同比 +23% 和环比 +1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "unity-q3-fy23",
    "company": "Unity",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/unity-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 544,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "create",
          "label": "Create Solutions",
          "value": 189,
          "notes": [
            "Flat Y/Y"
          ]
        },
        {
          "id": "grow",
          "label": "Grow Solutions",
          "value": 355,
          "notes": [
            "+12% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 151,
        "notes": []
      },
      "operatingExpenses": {
        "total": 520,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 240,
            "notes": [
              "44% of revenue",
              "(33pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 194,
            "notes": [
              "36% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 86,
            "notes": [
              "16% of revenue",
              "(13pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 393,
        "notes": [
          "72% margin",
          "+7pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -127,
        "notes": [
          "(23%) margin",
          "+51pp Y/Y"
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
        "id": "dbne",
        "label": "DBNE",
        "value": "102",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "102%",
        "basis": "unspecified",
        "notes": [
          "(4pp) Q/Q"
        ],
        "quote": "DBNE\n102%\n(4pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            139,
            1175,
            163,
            165
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "1324",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,324",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Customers > $100K\n1,324\n+23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            306,
            1172,
            413,
            168
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
            "同比 +8%"
          ],
          "items": [
            {
              "id": "create",
              "label": "创作解决方案",
              "notes": [
                "同比持平"
              ]
            },
            {
              "id": "grow",
              "label": "增长解决方案",
              "notes": [
                "同比 +12%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 44%",
                  "同比 (33 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 36%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 16%",
                  "同比 (13 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 +7 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (23%)",
              "同比 +51 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图仅列至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "环比 (4 个百分点)"
            ]
          },
          {
            "id": "customers_100k",
            "label": "收入贡献 > $100K 的客户",
            "notes": [
              "同比 +23%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "unity-q1-fy23",
    "company": "Unity",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/unity-q1-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 500,
      "notes": [
        "+56% Y/Y"
      ],
      "items": [
        {
          "id": "create",
          "label": "Create Solutions",
          "value": 187,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "grow",
          "label": "Grow Solutions",
          "value": 313,
          "notes": [
            "+101% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 161,
        "notes": []
      },
      "operatingExpenses": {
        "total": 593,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 280,
            "notes": [
              "56% of revenue",
              "(13pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 216,
            "notes": [
              "43% of revenue",
              "+11pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 97,
            "notes": [
              "19% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 338,
        "notes": [
          "68% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -254,
        "notes": [
          "(51%) margin",
          "+3pp Y/Y"
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
        "id": "dbne",
        "label": "DBNE",
        "value": "107",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "107%",
        "basis": "unspecified",
        "notes": [
          "(9pp) Q/Q"
        ],
        "quote": "DBNE\n107%\n(9pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            138,
            1172,
            164,
            168
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers > $100K",
        "value": "1322",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,322",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y and -1% Q/Q"
        ],
        "quote": "Customers > $100K\n1,322\n+22% Y/Y and -1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            305,
            1171,
            415,
            171
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
            "同比 +56%"
          ],
          "items": [
            {
              "id": "create",
              "label": "创作解决方案",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "grow",
              "label": "增长解决方案",
              "notes": [
                "同比 +101%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 56%",
                  "同比 (13 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 43%",
                  "同比 +11 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 19%",
                  "同比 (3 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 68%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (51%)",
              "同比 +3 个百分点"
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
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "环比 (9 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "年收入贡献 > $100K 的客户",
            "notes": [
              "同比 +22%，环比 -1%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
