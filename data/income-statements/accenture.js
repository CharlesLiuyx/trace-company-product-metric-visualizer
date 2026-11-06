/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "accenture-q3-fy26",
    "company": "Accenture",
    "period": "Q3 FY26",
    "periodNote": "Ending May 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/accenture-q3-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 18.7,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 3.2,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3.5,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.8,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": "Products",
          "value": 5.7,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": "Resources",
          "value": 2.5,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 12.6
      },
      "operatingExpenses": {
        "total": 3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.8,
            "notes": [
              "10% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.1,
            "notes": [
              "6% of revenue",
              "+0pp Y/Y"
            ]
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
      "total": 0.025,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.025
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.1,
        "notes": [
          "33% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.2,
        "notes": [
          "17% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.4,
        "notes": [
          "13% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 5 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "resources",
              "label": "资源",
              "notes": [
                "同比 +3%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": [
              "服务",
              "成本"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 10%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 6%",
                  "同比 +0 个百分点"
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
              "利润率 33%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q2-fy26",
    "company": "Accenture",
    "period": "Q2 FY26",
    "periodNote": "Ending Feb. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/accenture-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 18,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 3.1,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3.4,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.7,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": "Products",
          "value": 5.5,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": "Resources",
          "value": 2.4,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 18,
          "items": [
            {
              "id": "consulting",
              "label": "Consulting",
              "value": 8.9,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": "Managed Services",
              "value": 9.2,
              "notes": [
                "+10% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 12.6
      },
      "operatingExpenses": {
        "total": 3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.7,
            "notes": [
              "10% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.2,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
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
      "total": 0.036893,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.036893
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.5,
        "notes": [
          "30% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.5,
        "notes": [
          "14% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.9,
        "notes": [
          "10% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 2 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "resources",
              "label": "资源",
              "notes": [
                "同比 +7%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": "咨询",
                  "notes": [
                    "同比 +7%"
                  ]
                },
                {
                  "id": "managed_services",
                  "label": "托管服务",
                  "notes": [
                    "同比 +10%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": [
              "服务",
              "成本"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 10%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 7%",
                  "同比 +0 个百分点"
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
              "利润率 30%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q4-fy26",
    "company": "Accenture",
    "period": "Q4 FY26",
    "periodNote": "Ending Aug. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/accenture-q4-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 18.7,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 3.3,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3.5,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.9,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": "Products",
          "value": 5.6,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": "Resources",
          "value": 2.5,
          "notes": [
            "+6% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 18.7,
          "items": [
            {
              "id": "consulting",
              "label": "Consulting",
              "value": 9.3,
              "notes": [
                "+6% Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": "Managed Services",
              "value": 9.4,
              "notes": [
                "+7% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 12.7
      },
      "operatingExpenses": {
        "total": 3.1,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.8,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.3,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
            ]
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
        "value": 6,
        "notes": [
          "32% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.9,
        "notes": [
          "15% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.2,
        "notes": [
          "12% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 8 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "resources",
              "label": "资源",
              "notes": [
                "同比 +6%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": "咨询",
                  "notes": [
                    "同比 +6%"
                  ]
                },
                {
                  "id": "managed_services",
                  "label": "托管服务",
                  "notes": [
                    "同比 +7%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": [
              "服务",
              "成本"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 10%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 7%",
                  "同比 +0 个百分点"
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
              "利润率 32%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q2-fy24",
    "company": "Accenture",
    "period": "Q2 FY24",
    "periodNote": "Ending Feb. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/accenture-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.8,
      "notes": [
        "(0%) Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 2.7,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 2.8,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.3,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": [
            "Products"
          ],
          "value": 4.8,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": [
            "Resources"
          ],
          "value": 2.2,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 15.8,
          "items": [
            {
              "id": "consulting",
              "label": [
                "Consulting"
              ],
              "value": 8,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": [
                "Managed Services"
              ],
              "value": 7.8,
              "notes": [
                "+3% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 10.9
      },
      "operatingExpenses": {
        "total": 2.8,
        "items": [
          {
            "id": "sm",
            "label": [
              "S&M"
            ],
            "value": 1.6,
            "notes": [
              "10% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": [
              "G&A"
            ],
            "value": 1.1,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "optimization",
            "label": [
              "Optimization"
            ],
            "value": 0.1,
            "notes": [
              "1% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": [
          "Tax"
        ],
        "value": 0.4
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": [
            "Other"
          ],
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
        "label": [
          "Gross profit"
        ],
        "value": 4.9,
        "notes": [
          "31% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": [
          "Operating profit"
        ],
        "value": 2,
        "notes": [
          "13% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": [
          "Net profit"
        ],
        "value": 1.7,
        "notes": [
          "11% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 2 月",
        "revenue": {
          "notes": [
            "同比 (0%)"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "products",
              "label": [
                "产品"
              ],
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "resources",
              "label": [
                "资源"
              ],
              "notes": [
                "同比 +3%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": [
                    "咨询"
                  ],
                  "notes": [
                    "同比 (3%)"
                  ]
                },
                {
                  "id": "managed_services",
                  "label": [
                    "托管服务"
                  ],
                  "notes": [
                    "同比 +3%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_services",
            "label": [
              "服务",
              "成本"
            ],
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": [
                  "销售与市场"
                ],
                "notes": [
                  "占收入 10%"
                ]
              },
              {
                "id": "ga",
                "label": [
                  "一般及行政"
                ],
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "optimization",
                "label": [
                  "业务优化"
                ],
                "notes": [
                  "占收入 1%"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": [
              "税费"
            ],
            "notes": []
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": [
                "其他"
              ],
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": [
              "毛利润"
            ],
            "notes": [
              "利润率 31%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": [
              "营业利润"
            ],
            "notes": [
              "利润率 13%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": [
              "净利润"
            ],
            "notes": [
              "利润率 11%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q3-fy25",
    "company": "Accenture",
    "period": "Q3 FY25",
    "periodNote": "Ending May 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/accenture-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 17.7,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 2.9,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3.3,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.8,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": "Products",
          "value": 5.3,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": "Resources",
          "value": 2.4,
          "notes": [
            "+5% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 17.7,
          "items": [
            {
              "id": "consulting",
              "label": "Consulting",
              "value": 9,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": "Managed Services",
              "value": 8.7,
              "notes": [
                "+9% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 11.9,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2.8,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.8,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.1,
            "notes": [
              "6% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax & other",
        "value": 0.7,
        "notes": []
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
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.8,
        "notes": [
          "33% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3,
        "notes": [
          "17% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.2,
        "notes": [
          "13% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 5 月",
        "revenue": {
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ]
            },
            {
              "id": "financial_services",
              "label": "金融服务"
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ]
            },
            {
              "id": "products",
              "label": "产品"
            },
            {
              "id": "resources",
              "label": "资源"
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": "咨询"
                },
                {
                  "id": "managed_services",
                  "label": "托管服务"
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "服务成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              }
            ]
          },
          "tax": {
            "label": "税费及其他"
          }
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
    },
    "notes": [
      "Printed one-decimal values retained. Rounding differences of $0.1B in operating expense breakdown and operating-to-net bridge agree with the unrounded SEC Q3 FY25 earnings exhibit: SG&A $2.843868B, operating income $2.982782B, net income $2.243963B. https://www.sec.gov/Archives/edgar/data/1467373/000146737325000168/q3fy25earnings8-kexhibit.htm",
      "Source Products growth +9% Y/Y retained; SEC Q3 FY25 earnings exhibit reports +7% in USD and local currency; flagged for operator review."
    ]
  },
  {
    "key": "accenture-q3-fy24",
    "company": "Accenture",
    "period": "Q3 FY24",
    "periodNote": "Ending May 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/accenture-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 16.5,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 2.8,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 2.9,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.5,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": [
            "Products"
          ],
          "value": 4.9,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": [
            "Resources"
          ],
          "value": 2.3,
          "notes": [
            "+0% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 16.5,
          "items": [
            {
              "id": "consulting",
              "label": [
                "Consulting"
              ],
              "value": 8.5,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": [
                "Managed Services"
              ],
              "value": 8,
              "notes": [
                "+2% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 11
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "sm",
            "label": [
              "S&M"
            ],
            "value": 1.8,
            "notes": [
              "11% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": [
              "G&A"
            ],
            "value": 1,
            "notes": [
              "6% of revenue"
            ]
          },
          {
            "id": "optimization",
            "label": [
              "Optimization"
            ],
            "value": 0.1,
            "notes": [
              "0% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": [
          "Tax"
        ],
        "value": 0.7
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": [
            "Other"
          ],
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
        "label": [
          "Gross profit"
        ],
        "value": 5.5,
        "notes": [
          "33% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": [
          "Operating profit"
        ],
        "value": 2.6,
        "notes": [
          "16% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": [
          "Net profit"
        ],
        "value": 2,
        "notes": [
          "12% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 5 月",
        "revenue": {
          "notes": [
            "同比下降 1%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比下降 4%"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比下降 8%"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "products",
              "label": [
                "产品"
              ],
              "notes": [
                "同比下降 1%"
              ]
            },
            {
              "id": "resources",
              "label": [
                "资源"
              ],
              "notes": [
                "同比 +0%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": [
                    "咨询"
                  ],
                  "notes": [
                    "同比下降 3%"
                  ]
                },
                {
                  "id": "managed_services",
                  "label": [
                    "托管服务"
                  ],
                  "notes": [
                    "同比 +2%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": [
              "服务",
              "成本"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": [
                  "销售与市场"
                ],
                "notes": [
                  "占收入 11%"
                ]
              },
              {
                "id": "ga",
                "label": [
                  "一般及行政"
                ],
                "notes": [
                  "占收入 6%"
                ]
              },
              {
                "id": "optimization",
                "label": [
                  "业务优化"
                ],
                "notes": [
                  "占收入 0%"
                ]
              }
            ]
          },
          "tax": {
            "label": [
              "税费"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": [
                "其他"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": [
              "毛利润"
            ],
            "notes": [
              "利润率 33%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": [
              "营业利润"
            ],
            "notes": [
              "利润率 16%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": [
              "净利润"
            ],
            "notes": [
              "利润率 12%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q4-fy24",
    "company": "Accenture",
    "period": "Q4 FY24",
    "periodNote": "Ending Aug. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/accenture-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 16.4,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": "Communications Media & Tech",
          "value": 2.8,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": "Financial Services",
          "value": 2.9,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": "Health & Public Services",
          "value": 3.6,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": "Products",
          "value": 4.9,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": "Resources",
          "value": 2.2,
          "notes": [
            "(0%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 16.4,
          "items": [
            {
              "id": "consulting",
              "label": "Consulting",
              "value": 8.3,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": "Managed Services",
              "value": 8.1,
              "notes": [
                "+5% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": "Cost of services",
        "value": 11.1
      },
      "operatingExpenses": {
        "total": 3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.8,
            "notes": [
              "11% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.1,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "optimization",
            "label": "Optimization",
            "value": 0.1,
            "notes": [
              "1% of revenue"
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
      "total": 0.021107,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.021107
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.3,
        "notes": [
          "33% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.4,
        "notes": [
          "14% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.7,
        "notes": [
          "10% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 8 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "resources",
              "label": "资源",
              "notes": [
                "同比 (0%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": "咨询",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "managed_services",
                  "label": "托管服务",
                  "notes": [
                    "同比 +5%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": [
              "服务",
              "成本"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 11%"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "optimization",
                "label": "业务优化",
                "notes": [
                  "占收入 1%"
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
              "利润率 33%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q1-fy25",
    "company": "Accenture",
    "period": "Q1 FY25",
    "periodNote": "Ending Nov. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/accenture-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 17.7,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 2.9,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3.2,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.8,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": "Products",
          "value": 5.4,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": "Resources",
          "value": 2.4,
          "notes": [
            "+6% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 17.7,
          "items": [
            {
              "id": "consulting",
              "label": "Consulting",
              "value": 9,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": "Managed Services",
              "value": 8.6,
              "notes": [
                "+11% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 11.9,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.8,
            "notes": [
              "10% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.1,
            "notes": [
              "6% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax & other",
        "value": 0.6,
        "notes": []
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
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.8,
        "notes": [
          "33% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.9,
        "notes": [
          "17% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.3,
        "notes": [
          "13% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 11 月",
        "revenue": {
          "items": [
            {
              "id": "resources",
              "label": "资源"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": [
              "服务",
              "成本"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q1-fy23",
    "company": "Accenture",
    "period": "Q1 FY23",
    "periodNote": "Ending November 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/accenture-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.7,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 3,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": "Products",
          "value": 4.7,
          "notes": [
            "4% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": "Resources",
          "value": 2.1,
          "notes": [
            "10% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 15.7,
          "items": [
            {
              "id": "consulting",
              "label": "Consulting",
              "value": 8.4,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "outsourcing",
              "label": "Outsourcing",
              "value": 7.3,
              "notes": [
                "+11% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 10.6
      },
      "operatingExpenses": {
        "total": 2.6,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.6,
            "notes": [
              "10% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1,
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
      "total": 0.037,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.037
        }
      ]
    },
    "otherExpenses": {
      "total": 0.029,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.029
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.2,
        "notes": [
          "33% margin",
          "+0.1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "16% margin",
          "+0.2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2,
        "notes": [
          "13% margin",
          "+0.5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2022 年 11 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 4%"
              ]
            },
            {
              "id": "resources",
              "label": "资源",
              "notes": [
                "同比 10%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": "咨询",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "outsourcing",
                  "label": "外包",
                  "notes": [
                    "同比 +11%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": [
              "服务",
              "成本"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 10%"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
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
              "id": "interest",
              "label": "利息"
            }
          ]
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
              "利润率 33%",
              "同比 +0.1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 +0.2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 +0.5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q4-fy23",
    "company": "Accenture",
    "period": "Q4 FY23",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/accenture-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 16,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 2.7,
          "notes": [
            "(12%) Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.2,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": "Products",
          "value": 4.8,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": "Resources",
          "value": 2.2,
          "notes": [
            "+10% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 16,
          "items": [
            {
              "id": "consulting",
              "label": "Consulting",
              "value": 8.2,
              "notes": [
                "(2%) Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": "Managed Services",
              "value": 7.8,
              "notes": [
                "+10% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 10.8,
        "notes": []
      },
      "operatingExpenses": {
        "total": 3.3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.7,
            "notes": [
              "11% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.1,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "optimization",
            "label": "Optimization",
            "value": 0.5,
            "notes": [
              "3% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.6,
        "notes": []
      }
    },
    "otherIncome": {
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
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.2,
        "notes": [
          "32% margin",
          "+0.3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.9,
        "notes": [
          "12% margin",
          "(2.7pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.4,
        "notes": [
          "9% margin",
          "(2.2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 7 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 (12%)"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "resources",
              "label": "资源",
              "notes": [
                "同比 +10%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": "咨询",
                  "notes": [
                    "同比 (2%)"
                  ]
                },
                {
                  "id": "managed_services",
                  "label": "托管服务",
                  "notes": [
                    "同比 +10%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_services",
            "label": "服务成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 11%"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "optimization",
                "label": "优化费用",
                "notes": [
                  "占收入 3%"
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
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 32%",
              "同比 +0.3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 (2.7 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (2.2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q1-fy24",
    "company": "Accenture",
    "period": "Q1 FY24",
    "periodNote": "Ending Nov. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/accenture-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 16.2,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 2.7,
          "notes": [
            "(10%) Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.4,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": "Products",
          "value": 4.9,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": "Resources",
          "value": 2.3,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 16.2,
          "items": [
            {
              "id": "consulting",
              "label": "Consulting",
              "value": 8.5,
              "notes": [
                "+0% Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": "Managed Services",
              "value": 7.8,
              "notes": [
                "+6% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 10.8,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.7,
            "notes": [
              "11% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1,
            "notes": [
              "6% of revenue"
            ]
          },
          {
            "id": "optimization",
            "label": "Optimization",
            "value": 0.1,
            "notes": [
              "1% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.6,
        "notes": []
      }
    },
    "otherIncome": {
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
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.4,
        "notes": [
          "34% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "16% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2,
        "notes": [
          "12% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 (10%)"
              ]
            },
            {
              "id": "financial_services",
              "label": "金融服务",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "resources",
              "label": "资源",
              "notes": [
                "同比 +7%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": "咨询",
                  "notes": [
                    "同比 +0%"
                  ]
                },
                {
                  "id": "managed_services",
                  "label": "托管服务",
                  "notes": [
                    "同比 +6%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_services",
            "label": "服务成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 11%"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 6%"
                ]
              },
              {
                "id": "optimization",
                "label": "业务优化",
                "notes": [
                  "占收入 1%"
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
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 34%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 (0 个百分点)"
            ]
          }
        },
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 11 月"
      }
    }
  },
  {
    "key": "accenture-q2-fy25",
    "company": "Accenture",
    "period": "Q2 FY25",
    "periodNote": "Ending Feb. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/accenture-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 16.7,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 2.7,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.6,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": "Products",
          "value": 5.1,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": "Resources",
          "value": 2.3,
          "notes": [
            "+1% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 16.7,
          "items": [
            {
              "id": "consulting",
              "label": "Consulting",
              "value": 8.3,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": "Managed Services",
              "value": 8.4,
              "notes": [
                "+8% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 11.7
      },
      "operatingExpenses": {
        "total": 2.7,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.7,
            "notes": [
              "10% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.1,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax_other",
        "label": "Tax & other",
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
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5,
        "notes": [
          "30% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.2,
        "notes": [
          "13% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.8,
        "notes": [
          "11% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 2 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "resources",
              "label": "资源",
              "notes": [
                "同比 +1%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "Revenue by service type",
              "items": [
                {
                  "id": "consulting",
                  "label": "咨询",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "managed_services",
                  "label": "托管服务",
                  "notes": [
                    "同比 +8%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_services",
            "label": [
              "服务",
              "成本"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 10%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 6%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax_other",
            "label": "税费及其他"
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 30%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q3-fy23",
    "company": "Accenture",
    "period": "Q3 FY23",
    "periodNote": "Ending May 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/accenture-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 16.6,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 2.9,
          "notes": [
            "(11%) Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3.1,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.3,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": [
            "Products"
          ],
          "value": 5,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": [
            "Resources"
          ],
          "value": 2.3,
          "notes": [
            "+8% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 16.6,
          "items": [
            {
              "id": "consulting",
              "label": [
                "Consulting"
              ],
              "value": 8.7,
              "notes": [
                "(4%) Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": [
                "Managed Services"
              ],
              "value": 7.9,
              "notes": [
                "+10% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 11,
        "notes": []
      },
      "operatingExpenses": {
        "total": 3.2,
        "items": [
          {
            "id": "sm",
            "label": [
              "S&M"
            ],
            "value": 1.7,
            "notes": [
              "10% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": [
              "G&A"
            ],
            "value": 1.1,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "optimization",
            "label": [
              "Optimization"
            ],
            "value": 0.3,
            "notes": [
              "2% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": [
          "Tax"
        ],
        "value": 0.6,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": [
            "Other"
          ],
          "value": 0.3,
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
        "id": "gross_profit",
        "label": [
          "Gross profit"
        ],
        "value": 5.5,
        "notes": [
          "33% margin",
          "+0.5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": [
          "Operating profit"
        ],
        "value": 2.4,
        "notes": [
          "14% margin",
          "(1.9pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": [
          "Net profit"
        ],
        "value": 2,
        "notes": [
          "12% margin",
          "+1.1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 5 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 (11%)"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "products",
              "label": [
                "产品"
              ],
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "resources",
              "label": [
                "资源"
              ],
              "notes": [
                "同比 +8%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": "咨询",
                  "notes": [
                    "同比 (4%)"
                  ]
                },
                {
                  "id": "managed_services",
                  "label": "托管服务",
                  "notes": [
                    "同比 +10%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "服务成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 10%"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "optimization",
                "label": "业务优化",
                "notes": [
                  "占收入 2%"
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
              "利润率 33%",
              "同比 +0.5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (1.9 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 +1.1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q2-fy23",
    "company": "Accenture",
    "period": "Q2 FY23",
    "periodNote": "Ending Feb. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/accenture-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.8,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 2.9,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "products",
          "label": [
            "Products"
          ],
          "value": 4.7,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": [
            "Resources"
          ],
          "value": 2.2,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 15.8,
          "items": [
            {
              "id": "consulting",
              "label": [
                "Consulting"
              ],
              "value": 8.3,
              "notes": [
                "(1%) Y/Y"
              ]
            },
            {
              "id": "outsourcing",
              "label": [
                "Outsourcing"
              ],
              "value": 7.5,
              "notes": [
                "+12% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 11
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "sm",
            "label": [
              "S&M"
            ],
            "value": 1.6,
            "notes": [
              "10% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": [
              "G&A"
            ],
            "value": 1.1,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "optimization",
            "label": [
              "Optimization"
            ],
            "value": 0.2,
            "notes": [
              "2% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": [
          "Tax"
        ],
        "value": 0.4
      }
    },
    "otherIncome": {
      "total": 0.039,
      "items": [
        {
          "id": "interest",
          "label": [
            "Interest"
          ],
          "value": 0.039
        }
      ]
    },
    "otherExpenses": {
      "total": 0.036,
      "items": [
        {
          "id": "other",
          "label": [
            "Other"
          ],
          "value": 0.036
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": [
          "Gross profit"
        ],
        "value": 4.8,
        "notes": [
          "31% margin",
          "+0.5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": [
          "Operating profit"
        ],
        "value": 1.9,
        "notes": [
          "12% margin",
          "(1.4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": [
          "Net profit"
        ],
        "value": 1.6,
        "notes": [
          "10% margin",
          "(1.2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 2 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "products",
              "label": [
                "产品"
              ],
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "resources",
              "label": [
                "资源"
              ],
              "notes": [
                "同比 +11%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": [
                    "咨询"
                  ],
                  "notes": [
                    "同比 (1%)"
                  ]
                },
                {
                  "id": "outsourcing",
                  "label": [
                    "外包服务"
                  ],
                  "notes": [
                    "同比 +12%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_services",
            "label": [
              "服务",
              "成本"
            ],
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": [
                  "销售与市场"
                ],
                "notes": [
                  "占收入 10%"
                ]
              },
              {
                "id": "ga",
                "label": [
                  "一般及行政"
                ],
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "optimization",
                "label": [
                  "业务优化"
                ],
                "notes": [
                  "占收入 2%"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": [
              "税费"
            ],
            "notes": []
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "interest",
              "label": [
                "利息"
              ],
              "notes": []
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other",
              "label": [
                "其他"
              ],
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": [
              "毛利润"
            ],
            "notes": [
              "利润率 31%",
              "同比 +0.5 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": [
              "营业利润"
            ],
            "notes": [
              "利润率 12%",
              "同比 (1.4 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": [
              "净利润"
            ],
            "notes": [
              "利润率 10%",
              "同比 (1.2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q4-fy25",
    "company": "Accenture",
    "period": "Q4 FY25",
    "periodNote": "Ending Aug. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/accenture-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 17.6,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 3,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3.3,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.6,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "products",
          "label": "Products",
          "value": 5.4,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": "Resources",
          "value": 2.4,
          "notes": [
            "+8% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 17.6,
          "items": [
            {
              "id": "consulting",
              "label": "Consulting",
              "value": 8.8,
              "notes": [
                "+6% Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": "Managed Services",
              "value": 8.8,
              "notes": [
                "+8% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 12
      },
      "operatingExpenses": {
        "total": 3.6,
        "items": [
          {
            "id": "sm",
            "label": [
              "S&M"
            ],
            "value": 1.8,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": [
              "G&A"
            ],
            "value": 1.2,
            "notes": [
              "7% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "business_optimization",
            "label": [
              "Business",
              "optimization"
            ],
            "value": 0.6,
            "notes": [
              "3% of revenue",
              "+3pp Y/Y"
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
      "total": 0.026,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.026
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
        "value": 5.6,
        "notes": [
          "32% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2,
        "notes": [
          "12% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.5,
        "notes": [
          "8% margin",
          "(8pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 8 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "products",
              "label": [
                "产品"
              ],
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "resources",
              "label": [
                "资源"
              ],
              "notes": [
                "同比 +8%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": [
                    "咨询"
                  ],
                  "notes": [
                    "同比 +6%"
                  ]
                },
                {
                  "id": "managed_services",
                  "label": [
                    "托管服务"
                  ],
                  "notes": [
                    "同比 +8%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "服务成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": [
                  "销售与市场"
                ],
                "notes": [
                  "占收入 10%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": [
                  "一般及行政"
                ],
                "notes": [
                  "占收入 7%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "business_optimization",
                "label": [
                  "业务",
                  "优化"
                ],
                "notes": [
                  "占收入 3%",
                  "同比 +3 个百分点"
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
            "label": [
              "毛利润"
            ],
            "notes": [
              "利润率 32%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": [
              "营业利润"
            ],
            "notes": [
              "利润率 12%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": [
              "净利润"
            ],
            "notes": [
              "利润率 8%",
              "同比 (8 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "accenture-q1-fy26",
    "company": "Accenture",
    "period": "Q1 FY26",
    "periodNote": "Ending Nov. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/accenture-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 18.7,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "communications_media_tech",
          "label": [
            "Communications",
            "Media & Tech"
          ],
          "value": 3.1,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "financial_services",
          "label": [
            "Financial",
            "Services"
          ],
          "value": 3.6,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "health_public_services",
          "label": [
            "Health &",
            "Public Services"
          ],
          "value": 3.8,
          "notes": [
            "(0%) Y/Y"
          ]
        },
        {
          "id": "products",
          "label": "Products",
          "value": 5.7,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "resources",
          "label": "Resources",
          "value": 2.5,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "service_type",
          "label": "Revenue by service type",
          "total": 18.7,
          "items": [
            {
              "id": "consulting",
              "label": "Consulting",
              "value": 9.4,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "managed_services",
              "label": "Managed Services",
              "value": 9.3,
              "notes": [
                "+8% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_services",
        "label": [
          "Cost of",
          "services"
        ],
        "value": 12.5
      },
      "operatingExpenses": {
        "total": 3.3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.9,
            "notes": [
              "10% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.1,
            "notes": [
              "6% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "business_optimization",
            "label": [
              "Business",
              "optimization"
            ],
            "value": 0.3,
            "notes": [
              "2% of revenue"
            ]
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
        "value": 6.2,
        "notes": [
          "33% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.9,
        "notes": [
          "15% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.2,
        "notes": [
          "12% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 11 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "communications_media_tech",
              "label": [
                "通信",
                "媒体与科技"
              ],
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "financial_services",
              "label": [
                "金融",
                "服务"
              ],
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "health_public_services",
              "label": [
                "医疗健康与",
                "公共服务"
              ],
              "notes": [
                "同比 (0%)"
              ]
            },
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "resources",
              "label": "资源",
              "notes": [
                "同比 +3%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "service_type",
              "label": "按服务类型划分的收入",
              "items": [
                {
                  "id": "consulting",
                  "label": "咨询",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "id": "managed_services",
                  "label": "托管服务",
                  "notes": [
                    "同比 +8%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": [
              "服务",
              "成本"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 10%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 6%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "business_optimization",
                "label": [
                  "业务",
                  "优化"
                ],
                "notes": [
                  "占收入 2%"
                ]
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
              "利润率 33%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 (1 个百分点)"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他"
            }
          ]
        }
      }
    }
  }
]);
})(window);
