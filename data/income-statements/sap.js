/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "sap-q4-fy25",
    "company": "SAP",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sap-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.7,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 5.6,
          "notes": [
            "+19% Y/Y"
          ],
          "children": [
            {
              "id": "saas_paas",
              "label": "SaaS/PaaS",
              "value": 5.5,
              "notes": [
                "+21% Y/Y"
              ]
            },
            {
              "id": "iaas",
              "label": "IaaS",
              "value": 0.1,
              "notes": [
                "(37%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 3,
          "notes": [
            "(15%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.5,
              "notes": [
                "(34%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.6,
              "notes": [
                "(11%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "(4%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.6
      },
      "operatingExpenses": {
        "total": 4.5,
        "notes": [
          "Gross profit minus operating expenses differs from operating profit by €0.1B due to source chart rounding."
        ],
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.3,
            "notes": [
              "24% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.7,
            "notes": [
              "18% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5,
            "notes": [
              "5% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.021,
            "notes": [
              "IFRS other operating income/expense, net: €21M expense in Q4 FY25; displayed as (€0.0B) at one decimal."
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
          "id": "other_income",
          "label": "Other",
          "value": 0.2
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
        "value": 7,
        "notes": [
          "73% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "26% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.9,
        "notes": [
          "20% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +19%"
              ],
              "children": [
                {
                  "id": "saas_paas",
                  "label": "SaaS/PaaS",
                  "notes": [
                    "同比 +21%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (37%)"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": "许可证与支持",
              "notes": [
                "同比 (15%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (34%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 (11%)"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 (4%)"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 24%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他",
                "notes": [
                  "源图四舍五入为 €0.0B。"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 73%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 26%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sap-q1-fy26",
    "company": "SAP",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sap-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.6,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 6,
          "notes": [
            "+19% Y/Y"
          ],
          "children": [
            {
              "id": "saas_paas",
              "label": "SaaS/PaaS",
              "value": 5.9,
              "notes": [
                "+21% Y/Y"
              ]
            },
            {
              "id": "iaas",
              "label": "IaaS",
              "value": 0.1,
              "notes": [
                "(37%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 2.6,
          "notes": [
            "(12%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.1,
              "notes": [
                "(37%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.5,
              "notes": [
                "(11%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1,
          "notes": [
            "(6%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.6
      },
      "operatingExpenses": {
        "total": 4.2,
        "notes": [
          "Gross profit minus operating expenses differs from operating profit by €0.1B due to source chart rounding."
        ],
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.1,
            "notes": [
              "22% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.7,
            "notes": [
              "18% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7,
        "notes": [
          "73% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.7,
        "notes": [
          "29% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.9,
        "notes": [
          "20% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +19%"
              ],
              "children": [
                {
                  "id": "saas_paas",
                  "label": "SaaS/PaaS",
                  "notes": [
                    "同比 +21%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (37%)"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": "许可证与支持",
              "notes": [
                "同比 (12%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (37%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 (11%)"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 (6%)"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 22%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (0 个百分点)"
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
              "利润率 73%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 29%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sap-q2-fy26",
    "company": "SAP",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sap-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.9,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 6.3,
          "notes": [
            "+22% Y/Y"
          ],
          "children": [
            {
              "id": "saas_paas",
              "label": "SaaS/PaaS",
              "value": 6.2,
              "notes": [
                "+23% Y/Y"
              ]
            },
            {
              "id": "iaas",
              "label": "IaaS",
              "value": 0.1,
              "notes": [
                "(24%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 2.6,
          "notes": [
            "(8%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.1,
              "notes": [
                "(32%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.6,
              "notes": [
                "(8%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1,
          "notes": [
            "(4%) Y/Y"
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
        "total": 4.6,
        "notes": [
          "Displayed operating-expense components sum to €4.5B; the €0.1B difference reflects source-chart rounding."
        ],
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.3,
            "notes": [
              "23% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.8,
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
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
      "total": 0.4,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.4
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
        "value": 7.2,
        "notes": [
          "73% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "27% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.2,
        "notes": [
          "22% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +22%"
              ],
              "children": [
                {
                  "id": "saas_paas",
                  "label": "SaaS/PaaS",
                  "notes": [
                    "同比 +23%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (24%)"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": "许可证与支持",
              "notes": [
                "同比 (8%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (32%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 (8%)"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 (4%)"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 23%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (0 个百分点)"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 73%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 27%",
              "同比 (0 个百分点)"
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
    "key": "sap-q3-fy22",
    "company": "SAP",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sap-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.8,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 3.3,
          "notes": [
            "+38% Y/Y"
          ],
          "children": [
            {
              "id": "saas",
              "label": "Saas",
              "value": 2.6,
              "notes": [
                "+39% Y/Y",
                "76% gross margin"
              ]
            },
            {
              "id": "paas",
              "label": "Paas",
              "value": 0.4,
              "notes": [
                "+56% Y/Y",
                "78% gross margin"
              ]
            },
            {
              "id": "iaas",
              "label": "Iaas",
              "value": 0.3,
              "notes": [
                "+5% Y/Y",
                "21% gross margin"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 3.4,
          "notes": [
            "(3%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.4,
              "notes": [
                "(38%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 3,
              "notes": [
                "+5% Y/Y",
                "87% gross margin"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "+21% Y/Y",
            "24% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.3
      },
      "operatingExpenses": {
        "total": 4.4,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.3
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.6
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
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
      "total": 0.4,
      "items": [
        {
          "id": "financial",
          "label": "Financial",
          "value": 0.3
        },
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
        "value": 5.6,
        "notes": [
          "71% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "16% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "7% margin",
          "(19pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +38%"
              ],
              "children": [
                {
                  "id": "saas",
                  "label": "SaaS",
                  "notes": [
                    "同比 +39%",
                    "毛利率 76%"
                  ]
                },
                {
                  "id": "paas",
                  "label": "PaaS",
                  "notes": [
                    "同比 +56%",
                    "毛利率 78%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 +5%",
                    "毛利率 21%"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": "许可证与支持",
              "notes": [
                "同比 (3%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (38%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 +5%",
                    "毛利率 87%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +21%",
                "毛利率 24%"
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
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "管理费用"
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
              "id": "financial",
              "label": "财务费用"
            },
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
              "利润率 71%",
              "同比持平"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (19 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sap-q2-fy23",
    "company": "SAP",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sap-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.6,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 3.3,
          "notes": [
            "+19% Y/Y"
          ],
          "children": [
            {
              "id": "saas",
              "label": "Saas",
              "value": 2.6,
              "notes": [
                "+19% Y/Y",
                "73% gross margin"
              ]
            },
            {
              "id": "paas",
              "label": "Paas",
              "value": 0.5,
              "notes": [
                "+42% Y/Y",
                "84% gross margin"
              ]
            },
            {
              "id": "iaas",
              "label": "Iaas",
              "value": 0.2,
              "notes": [
                "(23%) Y/Y",
                "37% gross margin"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 3.2,
          "notes": [
            "(6%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.3,
              "notes": [
                "(26%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.9,
              "notes": [
                "(3%) Y/Y",
                "90% gross margin"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "+4% Y/Y",
            "18% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.1
      },
      "operatingExpenses": {
        "total": 4.1,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.2
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.6
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3
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
          "id": "financial",
          "label": "Financial",
          "value": 0.2
        },
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
        "value": 5.4,
        "notes": [
          "72% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.4,
        "notes": [
          "18% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.7,
        "notes": [
          "10% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +19%"
              ],
              "children": [
                {
                  "id": "saas",
                  "label": "SaaS",
                  "notes": [
                    "同比 +19%",
                    "毛利率 73%"
                  ]
                },
                {
                  "id": "paas",
                  "label": "PaaS",
                  "notes": [
                    "同比 +42%",
                    "毛利率 84%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (23%)",
                    "毛利率 37%"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": "许可证与支持",
              "notes": [
                "同比 (6%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (26%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 (3%)",
                    "毛利率 90%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +4%",
                "毛利率 18%"
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
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
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
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "financial",
              "label": "财务费用"
            },
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
              "利润率 72%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sap-q1-fy23",
    "company": "SAP",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sap-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.4,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 3.2,
          "notes": [
            "+24% Y/Y"
          ],
          "children": [
            {
              "id": "saas",
              "label": "Saas",
              "value": 2.5,
              "notes": [
                "+24% Y/Y",
                "72% gross margin"
              ]
            },
            {
              "id": "paas",
              "label": "Paas",
              "value": 0.5,
              "notes": [
                "+47% Y/Y",
                "84% gross margin"
              ]
            },
            {
              "id": "iaas",
              "label": "Iaas",
              "value": 0.2,
              "notes": [
                "(12%) Y/Y",
                "34% gross margin"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 3.2,
          "notes": [
            "(2%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.3,
              "notes": [
                "(13%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.9,
              "notes": [
                "(1%) Y/Y",
                "87% gross margin"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "+12% Y/Y",
            "30% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.2
      },
      "operatingExpenses": {
        "total": 4.5,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.3
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.6
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.3
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
      "total": 0.114,
      "items": [
        {
          "id": "financial",
          "label": "Financial",
          "value": 0.1
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.014
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.3,
        "notes": [
          "72% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.8,
        "notes": [
          "11% margin",
          "(11pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "5% margin",
          "(10pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +24%"
              ],
              "children": [
                {
                  "id": "saas",
                  "label": "SaaS",
                  "notes": [
                    "同比 +24%",
                    "毛利率 72%"
                  ]
                },
                {
                  "id": "paas",
                  "label": "PaaS",
                  "notes": [
                    "同比 +47%",
                    "毛利率 84%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (12%)",
                    "毛利率 34%"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": "许可证与支持",
              "notes": [
                "同比 (2%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (13%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 (1%)",
                    "毛利率 87%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +12%",
                "毛利率 30%"
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
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "管理费用"
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
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "financial",
              "label": "财务净费用"
            },
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
              "利润率 72%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 (11 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 (10 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sap-q4-fy24",
    "company": "SAP",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sap-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.4,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 4.7,
          "notes": [
            "+27% Y/Y"
          ],
          "children": [
            {
              "id": "saas_paas",
              "label": "SaaS / PaaS",
              "value": 4.6,
              "notes": [
                "+30% Y/Y"
              ]
            },
            {
              "id": "iaas",
              "label": "IaaS",
              "value": 0.1,
              "notes": [
                "(33%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 3.6,
          "notes": [
            "(3%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.7,
              "notes": [
                "(18%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.9,
              "notes": [
                "+1% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "+2% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.5,
            "notes": [
              "27% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.7,
            "notes": [
              "18% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.3,
            "notes": [
              "3% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.1,
            "notes": []
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
          "id": "other_income",
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
        "value": 6.9,
        "notes": [
          "74% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2,
        "notes": [
          "21% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.6,
        "notes": [
          "17% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +27%"
              ],
              "children": [
                {
                  "id": "saas_paas",
                  "label": "SaaS/PaaS",
                  "notes": [
                    "同比 +30%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (33%)"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": "许可证与支持",
              "notes": [
                "同比 (3%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (18%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 +1%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +2%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 27%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 3%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他",
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sap-q4-fy22",
    "company": "SAP",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sap-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.4,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 3.4,
          "notes": [
            "+30% Y/Y"
          ],
          "children": [
            {
              "id": "saas",
              "label": "Saas",
              "value": 2.7,
              "notes": [
                "+31% Y/Y",
                "73% gross margin"
              ]
            },
            {
              "id": "paas",
              "label": "Paas",
              "value": 0.5,
              "notes": [
                "+51% Y/Y",
                "80% gross margin"
              ]
            },
            {
              "id": "iaas",
              "label": "Iaas",
              "value": 0.2,
              "notes": [
                "(16%) Y/Y",
                "28% gross margin"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 3.9,
          "notes": [
            "(11%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.9,
              "notes": [
                "(38%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 3,
              "notes": [
                "+3% Y/Y",
                "87% gross margin"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "+15% Y/Y",
            "24% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.4
      },
      "operatingExpenses": {
        "total": 4.5,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.4
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.6
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.027
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4
      }
    },
    "operatingOtherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.2
        }
      ]
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1,
      "items": [
        {
          "id": "financial",
          "label": "Financial",
          "value": 0.9
        },
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.1,
        "notes": [
          "72% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "20% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "3% margin",
          "(14pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +30%"
              ],
              "children": [
                {
                  "id": "saas",
                  "label": "SaaS",
                  "notes": [
                    "同比 +31%",
                    "毛利率 73%"
                  ]
                },
                {
                  "id": "paas",
                  "label": "PaaS",
                  "notes": [
                    "同比 +51%",
                    "毛利率 80%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (16%)",
                    "毛利率 28%"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": "许可证与支持",
              "notes": [
                "同比 (11%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (38%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 +3%",
                    "毛利率 87%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +15%",
                "毛利率 24%"
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
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "管理费用"
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
        "operatingOtherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "financial",
              "label": "财务费用"
            },
            {
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 (14 个百分点)"
            ]
          }
        },
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月"
      }
    }
  },
  {
    "key": "sap-q3-fy23",
    "company": "SAP",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sap-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.7,
      "notes": [
        "+4% Y/Y",
        "Source rounded revenue components sum to €7.8B versus €7.7B total. Figures retained as printed."
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 3.5,
          "notes": [
            "+16% Y/Y"
          ],
          "children": [
            {
              "id": "saas",
              "label": "Saas",
              "value": 2.7,
              "notes": [
                "+23% Y/Y",
                "74% gross margin"
              ]
            },
            {
              "id": "paas",
              "label": "Paas",
              "value": 0.6,
              "notes": [
                "+46% Y/Y",
                "85% gross margin"
              ]
            },
            {
              "id": "iaas",
              "label": "Iaas",
              "value": 0.2,
              "notes": [
                "(16%) Y/Y",
                "38% gross margin"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 3.2,
          "notes": [
            "(6%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.3,
              "notes": [
                "(17%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.9,
              "notes": [
                "(5%) Y/Y",
                "90% gross margin"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "+0% Y/Y",
            "21% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.1,
        "notes": []
      },
      "operatingExpenses": {
        "total": 3.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.1,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.5,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5,
        "notes": []
      }
    },
    "operatingOtherIncome": {
      "total": 0.036,
      "items": [
        {
          "id": "restructuring",
          "label": "Restructuring",
          "value": 0.036,
          "notes": []
        }
      ]
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "financial",
          "label": "Financial",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.6,
        "notes": [
          "73% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "22% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "notes": [
          "16% margin",
          "+9pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "items": [
            {
              "id": "cloud",
              "children": [
                {
                  "id": "saas",
                  "label": "SaaS"
                },
                {
                  "id": "paas",
                  "label": "PaaS"
                }
              ]
            }
          ]
        }
      }
    }
  },
  {
    "key": "sap-q4-fy23",
    "company": "SAP",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sap-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.5,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 3.7,
          "notes": [
            "+20% Y/Y"
          ],
          "children": [
            {
              "id": "saas",
              "label": "SaaS",
              "value": 2.9,
              "notes": [
                "+19% Y/Y",
                "73% gross margin"
              ]
            },
            {
              "id": "paas",
              "label": "PaaS",
              "value": 0.6,
              "notes": [
                "+42% Y/Y",
                "86% gross margin"
              ]
            },
            {
              "id": "iaas",
              "label": "IaaS",
              "value": 0.2,
              "notes": [
                "(10%) Y/Y",
                "28% gross margin"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": [
            "Licenses",
            "& Support"
          ],
          "value": 3.7,
          "notes": [
            "(5%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.8,
              "notes": [
                "(7%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.8,
              "notes": [
                "(5%) Y/Y",
                "90% gross margin"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "(0%) Y/Y",
            "22% gross margin"
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
        "total": 4.3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.3
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.7
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4
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
      "total": 0.133,
      "items": [
        {
          "id": "financial",
          "label": "Financial",
          "value": 0.1
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.033
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.2,
        "notes": [
          "73% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.9,
        "notes": [
          "22% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.2,
        "notes": [
          "14% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +20%"
              ],
              "children": [
                {
                  "id": "saas",
                  "label": "软件即服务",
                  "notes": [
                    "同比 +19%",
                    "毛利率 73%"
                  ]
                },
                {
                  "id": "paas",
                  "label": "平台即服务",
                  "notes": [
                    "同比 +42%",
                    "毛利率 86%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (10%)",
                    "毛利率 28%"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": [
                "许可证",
                "与支持"
              ],
              "notes": [
                "同比 (5%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (7%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 (5%)",
                    "毛利率 90%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 (0%)",
                "毛利率 22%"
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
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
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
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "financial",
              "label": "财务费用"
            },
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
              "利润率 73%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 +6 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sap-q1-fy25",
    "company": "SAP",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sap-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 5,
          "notes": [
            "+27% Y/Y"
          ],
          "children": [
            {
              "id": "saas_paas",
              "label": "SaaS/PaaS",
              "value": 4.9,
              "notes": [
                "+30% Y/Y"
              ]
            },
            {
              "id": "iaas",
              "label": "IaaS",
              "value": 0.1,
              "notes": [
                "(37%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 2.9,
          "notes": [
            "(3%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.1,
              "notes": [
                "(10%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.8,
              "notes": [
                "(2%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "(1%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.3,
        "notes": [],
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.2,
            "notes": [
              "25% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.7,
            "notes": [
              "19% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.7,
        "notes": []
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
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.6,
        "notes": [
          "73% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.3,
        "notes": [
          "26% margin",
          "+36pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.8,
        "notes": [
          "20% margin",
          "+32pp Y/Y",
          "Displayed operating profit plus Other minus tax differs from net profit by €0.1B due to source chart rounding."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月"
      }
    }
  },
  {
    "key": "sap-q2-fy24",
    "company": "SAP",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sap-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.3,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 4.2,
          "notes": [
            "+25% Y/Y",
            "Displayed cloud components sum to €4.1B; the €0.1B difference reflects source-chart rounding."
          ],
          "children": [
            {
              "id": "saas_paas",
              "label": "Saas/PaaS",
              "value": 4,
              "notes": [
                "+28% Y/Y"
              ]
            },
            {
              "id": "iaas",
              "label": "Iaas",
              "value": 0.1,
              "notes": [
                "(27%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 3,
          "notes": [
            "(5%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.2,
              "notes": [
                "(28%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.8,
              "notes": [
                "(3%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "+6% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.3,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.8,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.2,
            "notes": [
              "27% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.6,
            "notes": [
              "19% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.6,
            "notes": [
              "8% of revenue",
              "+8pp Y/Y"
            ]
          }
        ],
        "notes": [
          "Displayed operating-expense components sum to €4.7B; the €0.1B difference reflects source-chart rounding."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "financial",
          "label": "Financial",
          "value": 0.2,
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
        "value": 6,
        "notes": [
          "73% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "15% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "11% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +25%"
              ],
              "children": [
                {
                  "id": "saas_paas",
                  "label": "SaaS/PaaS",
                  "notes": [
                    "同比 +28%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (27%)"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": "许可证与支持",
              "notes": [
                "同比 (5%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (28%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 (3%)"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +6%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 27%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 8%",
                  "同比 +8 个百分点"
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
              "id": "financial",
              "label": "财务收益",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 73%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
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
    "key": "sap-q3-fy24",
    "company": "SAP",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sap-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.5,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 4.4,
          "notes": [
            "+25% Y/Y"
          ],
          "children": [
            {
              "id": "saas_paas",
              "label": "Saas/PaaS",
              "value": 4.2,
              "notes": [
                "+29% Y/Y"
              ]
            },
            {
              "id": "iaas",
              "label": "Iaas",
              "value": 0.1,
              "notes": [
                "(35%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 3.1,
          "notes": [
            "(4%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.3,
              "notes": [
                "(15%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.8,
              "notes": [
                "(3%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1,
          "notes": [
            "(2%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.3
      },
      "operatingExpenses": {
        "total": 4,
        "notes": [
          "Source rounded components sum to €4.1B versus displayed €4.0B total."
        ],
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.1,
            "notes": [
              "25% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.6,
            "notes": [
              "19% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "4% of revenue",
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
        "value": 6.2,
        "notes": [
          "73% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.2,
        "notes": [
          "26% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.4,
        "notes": [
          "17% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "",
        "revenue": {
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +25%"
              ],
              "children": [
                {
                  "id": "saas_paas",
                  "label": "SaaS/PaaS",
                  "notes": [
                    "同比 +29%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (35%)"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": "许可证与支持",
              "notes": [
                "同比 (4%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (15%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 (3%)"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 (2%)"
              ]
            }
          ],
          "notes": [
            "同比 +9%"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 25%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 +0 个百分点"
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
              "利润率 73%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 26%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sap-q3-fy25",
    "company": "SAP",
    "period": "Q3 FY25",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sap-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.1,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 5.3,
          "notes": [
            "+22% Y/Y"
          ],
          "children": [
            {
              "id": "saas_paas",
              "label": "SaaS/PaaS",
              "value": 5.2,
              "notes": [
                "+23% Y/Y"
              ]
            },
            {
              "id": "iaas",
              "label": "IaaS",
              "value": 0.1,
              "notes": [
                "(33%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 2.7,
          "notes": [
            "(11%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.2,
              "notes": [
                "(44%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.6,
              "notes": [
                "(8%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "+2% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.4
      },
      "operatingExpenses": {
        "total": 4.2,
        "notes": [
          "Source rounded operating-expense components sum to €4.3B versus the displayed €4.2B total."
        ],
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.2,
            "notes": [
              "24% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.7,
            "notes": [
              "18% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
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
      "total": 0.3,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.3
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
        "value": 6.7,
        "notes": [
          "74% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.5,
        "notes": [
          "27% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.1,
        "notes": [
          "23% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +22%"
              ],
              "children": [
                {
                  "id": "saas_paas",
                  "label": "SaaS/PaaS",
                  "notes": [
                    "同比 +23%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (33%)"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": [
                "许可证",
                "与支持"
              ],
              "notes": [
                "同比 (11%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": [
                    "软件",
                    "许可证"
                  ],
                  "notes": [
                    "同比 (44%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": [
                    "软件",
                    "支持"
                  ],
                  "notes": [
                    "同比 (8%)"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 24%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (0 个百分点)"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 27%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 23%",
              "同比 +6 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sap-q1-fy24",
    "company": "SAP",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sap-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 3.9,
          "notes": [
            "+24% Y/Y"
          ],
          "children": [
            {
              "id": "saas_paas",
              "label": "Saas/Paas",
              "value": 3.8,
              "notes": [
                "+26% Y/Y"
              ]
            },
            {
              "id": "iaas",
              "label": "Iaas",
              "value": 0.2,
              "notes": [
                "(17%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 3,
          "notes": [
            "(5%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.2,
              "notes": [
                "(26%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.8,
              "notes": [
                "(3%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "(0%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.3,
        "notes": []
      },
      "operatingExpenses": {
        "total": 6.5,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.3,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.7,
            "notes": []
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 2.2,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": []
          }
        ]
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
          "72% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.8,
        "notes": []
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
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +24%"
              ],
              "children": [
                {
                  "id": "saas_paas",
                  "label": "SaaS/PaaS",
                  "notes": [
                    "同比 +26%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (17%)"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": "许可证与支持",
              "notes": [
                "同比 (5%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (26%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 (3%)"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 (0%)"
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
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "restructuring",
                "label": "重组费用"
              },
              {
                "id": "ga",
                "label": "管理费用"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 72%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损"
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sap-q2-fy25",
    "company": "SAP",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sap-q2-fy25.png",
    "roundingTolerance": 0.21,
    "revenue": {
      "total": 9,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 5.1,
          "notes": [
            "+24% Y/Y"
          ],
          "children": [
            {
              "id": "saas_paas",
              "label": "Saas/Paas",
              "value": 5,
              "notes": [
                "+26% Y/Y"
              ]
            },
            {
              "id": "iaas",
              "label": "Iaas",
              "value": 0.1,
              "notes": [
                "(37%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "licenses_support",
          "label": "Licenses & Support",
          "value": 2.8,
          "notes": [
            "(6%) Y/Y"
          ],
          "children": [
            {
              "id": "software_licenses",
              "label": "Software Licenses",
              "value": 0.2,
              "notes": [
                "(15%) Y/Y"
              ]
            },
            {
              "id": "software_support",
              "label": "Software Support",
              "value": 2.6,
              "notes": [
                "(5%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 1.1,
          "notes": [
            "(4%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.4
      },
      "operatingExpenses": {
        "total": 4.3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.2,
            "notes": [
              "24% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.6,
            "notes": [
              "18% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.029,
            "notes": [
              "0% of revenue",
              "(8pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source displays gross profit €6.6B, operating expenses €4.3B and operating profit €2.5B; a €0.2B difference is retained without changing Source values."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.8
      }
    },
    "otherIncome": {
      "total": 0.046,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.046
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
        "value": 6.6,
        "notes": [
          "73% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.5,
        "notes": [
          "27% margin",
          "+12pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.7,
        "notes": [
          "19% margin",
          "+8pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +24%"
              ],
              "children": [
                {
                  "id": "saas_paas",
                  "label": "SaaS/PaaS",
                  "notes": [
                    "同比 +26%"
                  ]
                },
                {
                  "id": "iaas",
                  "label": "IaaS",
                  "notes": [
                    "同比 (37%)"
                  ]
                }
              ]
            },
            {
              "id": "licenses_support",
              "label": "许可证与支持",
              "notes": [
                "同比 (6%)"
              ],
              "children": [
                {
                  "id": "software_licenses",
                  "label": "软件许可证",
                  "notes": [
                    "同比 (15%)"
                  ]
                },
                {
                  "id": "software_support",
                  "label": "软件支持",
                  "notes": [
                    "同比 (5%)"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 (4%)"
              ]
            }
          ],
          "notes": [
            "同比 +9%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 24%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 0%",
                  "同比 (8 个百分点)"
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
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 73%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 27%",
              "同比 +12 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 19%",
              "同比 +8 个百分点"
            ]
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
        }
      }
    }
  }
]);
})(window);
