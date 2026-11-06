(function(global){const t=global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};t.records.push(...[
  {
    "key": "wells-fargo-q2-fy26",
    "company": "Wells Fargo",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q2-fy26.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 22.6,
      "notes": [
        "+9% Y/Y",
        "Business-segment revenue totals $22.7B before the $0.1B Other adjustment; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.3,
          "notes": [
            "+6% Y/Y",
            "22% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.1,
          "notes": [
            "+6% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 5.4,
          "notes": [
            "+16% Y/Y",
            "43% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.9,
          "notes": [
            "+13% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": -0.1,
          "notes": [
            "Source chart displays the rounded magnitude without a sign."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.7,
        "notes": [
          "Expense detail totals $13.8B because the source chart rounds each item."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.9
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.1
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.4
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.1
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.9,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart\u2019s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 0.9
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.4
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
        "label": "Income after noninterest expenses",
        "value": 8.9,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 6.6,
        "notes": [
          "+20% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 \u8d22\u5e74\u7b2c\u4e8c\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2026 \u5e74 6 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 +9%",
            "\u4e1a\u52a1\u5206\u90e8\u6536\u5165\u5408\u8ba1 $22.7B\uff0c\u56fe\u4e2d\u53e6\u5217 $0.1B \u7684\u5176\u4ed6\u8c03\u6574\uff1b\u56fe\u4e2d\u6570\u5b57\u7ecf\u56db\u820d\u4e94\u5165\u3002"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +6%",
                "\u51c0\u5229\u7387 22%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +6%",
                "\u51c0\u5229\u7387 38%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +16%",
                "\u51c0\u5229\u7387 43%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 +13%",
                "\u51c0\u5229\u7387 14%"
              ]
            },
            {
              "id": "other",
              "label": "\u5176\u4ed6",
              "notes": [
                "\u6765\u6e90\u56fe\u4ee5\u4e0d\u5e26\u7b26\u53f7\u7684\u65b9\u5f0f\u663e\u793a\u53d6\u6574\u540e\u7684\u91d1\u989d\u3002"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "notes": [
              "\u8d39\u7528\u660e\u7ec6\u5408\u8ba1\u4e3a $13.8B\uff1b\u56fe\u4e2d\u6570\u5b57\u7ecf\u56db\u820d\u4e94\u5165\u3002"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "\u6620\u5c04\u5230\u901a\u7528 schema \u7684\u8425\u4e1a\u8d39\u7528\u69fd\u4f4d\uff0c\u5bf9\u5e94\u6765\u6e90\u56fe\u7684\u4fe1\u7528\u635f\u5931\u62e8\u5907\u3002"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165",
            "notes": [
              "Schema \u9002\u914d\u5c0f\u8ba1\uff1b\u6765\u6e90\u56fe\u672a\u663e\u793a\u72ec\u7acb\u7684\u6bdb\u5229\u6da6\u8282\u70b9\u3002"
            ]
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 +20%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "wells-fargo-q1-fy26",
    "company": "Wells Fargo",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q1-fy26.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 21.4,
      "notes": [
        "+6% Y/Y",
        "Business-segment revenue totals $22.3B before the $0.8B Other adjustment; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10,
          "notes": [
            "+7% Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.1,
          "notes": [
            "+7% Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 5.3,
          "notes": [
            "+4% Y/Y",
            "34% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.9,
          "notes": [
            "+14% Y/Y",
            "12% net margin"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": -0.8,
          "notes": [
            "Source chart displays the rounded magnitude without a sign."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 14.3,
        "notes": [
          "Expense detail totals $14.4B because the source chart rounds each item."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9.6
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.4
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.1
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.4
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.1
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.1,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart\u2019s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.1
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
        "label": "Income after noninterest expenses",
        "value": 7.1,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.3,
        "notes": [
          "+7% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 \u8d22\u5e74\u7b2c\u4e00\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2026 \u5e74 3 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 +6%",
            "\u4e1a\u52a1\u5206\u90e8\u6536\u5165\u5408\u8ba1 $22.3B\uff0c\u56fe\u4e2d\u53e6\u5217 $0.8B \u7684\u5176\u4ed6\u8c03\u6574\uff1b\u56fe\u4e2d\u6570\u5b57\u7ecf\u56db\u820d\u4e94\u5165\u3002"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +7%",
                "\u51c0\u5229\u7387 19%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +7%",
                "\u51c0\u5229\u7387 33%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +4%",
                "\u51c0\u5229\u7387 34%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 +14%",
                "\u51c0\u5229\u7387 12%"
              ]
            },
            {
              "id": "other",
              "label": "\u5176\u4ed6",
              "notes": [
                "\u6765\u6e90\u56fe\u4ee5\u4e0d\u5e26\u7b26\u53f7\u7684\u65b9\u5f0f\u663e\u793a\u53d6\u6574\u540e\u7684\u91d1\u989d\u3002"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "notes": [
              "\u8d39\u7528\u660e\u7ec6\u5408\u8ba1\u4e3a $14.4B\uff1b\u56fe\u4e2d\u6570\u5b57\u7ecf\u56db\u820d\u4e94\u5165\u3002"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "\u6620\u5c04\u5230\u901a\u7528 schema \u7684\u8425\u4e1a\u8d39\u7528\u69fd\u4f4d\uff0c\u5bf9\u5e94\u6765\u6e90\u56fe\u7684\u4fe1\u7528\u635f\u5931\u62e8\u5907\u3002"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165",
            "notes": [
              "Schema \u9002\u914d\u5c0f\u8ba1\uff1b\u6765\u6e90\u56fe\u672a\u663e\u793a\u72ec\u7acb\u7684\u6bdb\u5229\u6da6\u8282\u70b9\u3002"
            ]
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 +7%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "wells-fargo-q4-fy25",
    "company": "Wells Fargo",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q4-fy25.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 21.3,
      "notes": [
        "+4% Y/Y",
        "Business-segment revenue totals $21.7B before the $0.3B Other adjustment; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.6,
          "notes": [
            "+7% Y/Y",
            "22% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.1,
          "notes": [
            "(3%) Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.6,
          "notes": [
            "+0% Y/Y",
            "36% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 4.4,
          "notes": [
            "+10% Y/Y",
            "15% net margin"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": -0.3,
          "notes": [
            "Source chart displays the rounded magnitude without a sign."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.7,
        "notes": [
          "Expense detail totals $13.7B; displayed figures are rounded."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9.1
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.4
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.4
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart\u2019s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 7.6,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.5
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.4,
        "notes": [
          "+6% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 \u8d22\u5e74\u7b2c\u56db\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2025 \u5e74 12 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 +4%",
            "\u4e1a\u52a1\u5206\u90e8\u6536\u5165\u5408\u8ba1 $21.7B\uff0c\u56fe\u4e2d\u53e6\u5217 $0.3B \u7684\u5176\u4ed6\u8c03\u6574\uff1b\u56fe\u4e2d\u6570\u5b57\u7ecf\u56db\u820d\u4e94\u5165\u3002"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +7%",
                "\u51c0\u5229\u7387 22%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (3%)",
                "\u51c0\u5229\u7387 37%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +0%",
                "\u51c0\u5229\u7387 36%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 +10%",
                "\u51c0\u5229\u7387 15%"
              ]
            },
            {
              "id": "other",
              "label": "\u5176\u4ed6",
              "notes": [
                "\u6765\u6e90\u56fe\u4ee5\u4e0d\u5e26\u7b26\u53f7\u7684\u65b9\u5f0f\u663e\u793a\u53d6\u6574\u540e\u7684\u91d1\u989d\u3002"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "notes": [
              "\u8d39\u7528\u660e\u7ec6\u5408\u8ba1\u4e3a $13.7B\uff1b\u56fe\u4e2d\u6570\u5b57\u7ecf\u56db\u820d\u4e94\u5165\u3002"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "\u6620\u5c04\u5230\u901a\u7528 schema \u7684\u8425\u4e1a\u8d39\u7528\u69fd\u4f4d\uff0c\u5bf9\u5e94\u6765\u6e90\u56fe\u7684\u4fe1\u7528\u635f\u5931\u62e8\u5907\u3002"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165",
            "notes": [
              "Schema \u9002\u914d\u5c0f\u8ba1\uff1b\u6765\u6e90\u56fe\u672a\u663e\u793a\u72ec\u7acb\u7684\u6bdb\u5229\u6da6\u8282\u70b9\u3002"
            ]
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 +6%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "wells-fargo-q2-fy23",
    "company": "Wells Fargo",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q2-fy23.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.5,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.5,
          "notes": [
            "+11% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.4,
          "notes": [
            "+35% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.6,
          "notes": [
            "+30% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.6,
          "notes": [
            "(2%) Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.6
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13,
        "notes": [
          "Source expense components total $12.9B; the $13.0B total is within rounding intervals."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.6
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.9
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.2
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.7,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart\u2019s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
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
        "label": "Income after noninterest expenses",
        "value": 7.5,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.9,
        "notes": [
          "+57% Y/Y",
          "$1.25 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 \u8d22\u5e74\u7b2c\u4e8c\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2023 \u5e74 6 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 +20%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +11%",
                "\u51c0\u5229\u7387 20%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +35%",
                "\u51c0\u5229\u7387 38%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +30%",
                "\u51c0\u5229\u7387 26%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 (2%)",
                "\u51c0\u5229\u7387 13%"
              ]
            },
            {
              "id": "other",
              "label": "\u6240\u6709\u5176\u4ed6\uff08\u975e\u5229\u606f\u4e8f\u635f\uff09"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "notes": [
              "\u539f\u56fe\u8d39\u7528\u5206\u9879\u5408\u8ba1 $12.9B\uff1b\u603b\u989d $13.0B \u7684\u5dee\u5f02\u5728\u820d\u5165\u533a\u95f4\u5185\u3002"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "operating_losses",
                "label": "\u7ecf\u8425\u635f\u5931"
              },
              {
                "id": "leases",
                "label": "\u79df\u8d41"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "\u6620\u5c04\u5230\u901a\u7528 schema \u7684\u8425\u4e1a\u8d39\u7528\u69fd\u4f4d\uff0c\u5bf9\u5e94\u6765\u6e90\u56fe\u7684\u4fe1\u7528\u635f\u5931\u62e8\u5907\u3002"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165",
            "notes": [
              "Schema \u9002\u914d\u5c0f\u8ba1\uff1b\u6765\u6e90\u56fe\u672a\u663e\u793a\u72ec\u7acb\u7684\u6bdb\u5229\u6da6\u8282\u70b9\u3002"
            ]
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 +57%",
              "\u6bcf\u80a1\u6536\u76ca $1.25"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 +0.3 \u4e2a\u767e\u5206\u70b9"
            ]
          },
          {
            "id": "deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4 (6%)"
            ]
          },
          {
            "id": "loans",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4 +2%"
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
        "basis": "unspecified",
        "notes": [
          "+0.3pp Y/Y"
        ],
        "quote": "CET1 ratio\n10.7%\n+0.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            242,
            148
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.3T",
        "basis": "unspecified",
        "notes": [
          "(6%) Y/Y"
        ],
        "quote": "Average deposits\n$1.3T\n(6%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            372,
            148
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            430,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "wells-fargo-q2-fy25",
    "company": "Wells Fargo",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.8,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.2,
          "notes": [
            "+2% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 2.9,
          "notes": [
            "(6%) Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.7,
          "notes": [
            "(3%) Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.9,
          "notes": [
            "+1% Y/Y",
            "12% net margin"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.4,
        "notes": [
          "Source expense components sum to $13.5B; difference from $13.4B is within rounding intervals."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.7
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.3
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.1
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.3
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 7.4
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.5,
        "notes": [
          "+12% Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.3T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "Average deposits\n$1.3T\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            23,
            1221,
            372,
            148
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "literal": "$0.9T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            404,
            1221,
            430,
            148
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.1",
        "unit": "%",
        "currency": null,
        "literal": "11.1%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+0.1pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.1%\n+0.1pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            842,
            1221,
            241,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 \u8d22\u5e74\u7b2c\u4e8c\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2025 \u5e74 6 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 +1%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +2%",
                "\u51c0\u5229\u7387 20%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (6%)",
                "\u51c0\u5229\u7387 37%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (3%)",
                "\u51c0\u5229\u7387 37%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 +1%",
                "\u51c0\u5229\u7387 12%"
              ]
            },
            {
              "id": "other",
              "label": "\u5176\u4ed6"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "notes": [
              "\u539f\u56fe\u8d39\u7528\u5206\u9879\u5408\u8ba1 $13.5B\uff0c\u4e0e\u603b\u989d $13.4B \u7684\u5dee\u5f02\u5728\u820d\u5165\u8303\u56f4\u5185\u3002"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "operating_losses",
                "label": "\u7ecf\u8425\u635f\u5931"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "leases",
                "label": "\u79df\u8d41"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u5229\u6da6"
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 +12%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4 (1%)"
            ]
          },
          {
            "id": "average_loans",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4\u6301\u5e73"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 +0.1 \u4e2a\u767e\u5206\u70b9"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "wells-fargo-q4-fy22",
    "company": "Wells Fargo",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 19.7,
      "notes": [
        "(6%) Y/Y",
        "Rounded segment values total $20.4B before the $0.8B All Other loss; a $0.1B rounding difference remains."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": "Consumer Banking",
          "value": 9.5
        },
        {
          "id": "commercial_banking",
          "label": "Commercial Banking",
          "value": 3.1
        },
        {
          "id": "corporate_investment_banking",
          "label": "Corporate & Investment Banking",
          "value": 4.1
        },
        {
          "id": "wealth_investment_management",
          "label": "Wealth & Investment Management",
          "value": 3.7
        },
        {
          "id": "other",
          "label": "All Other (noninterest loss)",
          "value": -0.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 16.2,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.4
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 0.9
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 3.5
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.4
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.9
          }
        ]
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "tax",
          "label": "Tax benefit",
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
        "label": "Income after noninterest expenses",
        "value": 3.5
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 2.5
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.6,
        "notes": [
          "(59%) Y/Y",
          "$0.67 EPS"
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
        "basis": "unspecified",
        "notes": [
          "(0.8pp) Y/Y"
        ],
        "quote": "CET1 ratio\n10.6%\n(0.8pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1192,
            241,
            148
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.4",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.4T",
        "basis": "unspecified",
        "notes": [
          "(6%) Y/Y"
        ],
        "quote": "Average deposits\n$1.4T\n(6%) Y/Y",
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
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            655,
            1192,
            431,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 \u8d22\u5e74\u7b2c\u56db\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2022 \u5e74 12 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 (6%)"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c"
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c"
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c"
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406"
            },
            {
              "id": "other",
              "label": "\u5176\u4ed6\uff08\u975e\u5229\u606f\u4e8f\u635f\uff09"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "information_processing",
                "label": "\u4fe1\u606f\u5904\u7406"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "operating_losses",
                "label": "\u7ecf\u8425\u635f\u5931"
              },
              {
                "id": "leases",
                "label": "\u79df\u8d41"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165"
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 (59%)",
              "\u6bcf\u80a1\u6536\u76ca $0.67"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 (0.8 \u4e2a\u767e\u5206\u70b9)"
            ]
          },
          {
            "id": "deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4 (6%)"
            ]
          },
          {
            "id": "loans",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4 +8%"
            ]
          }
        ],
        "otherIncome": {
          "items": [
            {
              "id": "tax",
              "label": "\u7a0e\u6536\u6536\u76ca"
            }
          ]
        }
      }
    }
  },
  {
    "key": "wells-fargo-q1-fy25",
    "company": "Wells Fargo",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q1-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 20.1,
      "notes": [
        "(3%) Y/Y",
        "Rounded segment figures less All Other total $20.2B, versus displayed revenue $20.1B."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": "Consumer Banking",
          "value": 8.9,
          "notes": [
            "(2%) Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": "Commercial Banking",
          "value": 2.9,
          "notes": [
            "(7%) Y/Y",
            "27% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": "Corporate & Investment Banking",
          "value": 5.1,
          "notes": [
            "+2% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": "Wealth & Investment Management",
          "value": 3.9,
          "notes": [
            "+4% Y/Y",
            "10% net margin"
          ]
        },
        {
          "id": "other",
          "label": "All Other",
          "value": -0.6
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.9,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9.5
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.2
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.1
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.9
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 0.9
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 6.2,
        "notes": [
          "Schema subtotal; Source does not paint a separate node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.3
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.8,
        "notes": [
          "+4% Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.3T",
        "basis": "unspecified",
        "notes": [
          "(0%) Y/Y"
        ],
        "quote": "Average deposits\n$1.3T\n(0%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            23,
            1198,
            372,
            149
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "basis": "unspecified",
        "notes": [
          "(3%) Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n(3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            404,
            1198,
            429,
            149
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.1%",
        "basis": "unspecified",
        "notes": [
          "(0.1pp) Y/Y"
        ],
        "quote": "CET1 ratio\n11.1%\n(0.1pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            843,
            1198,
            240,
            149
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 \u8d22\u5e74\u7b2c\u4e00\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2025 \u5e74 3 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 (3%)",
            "\u56fe\u4e2d\u5206\u90e8\u91d1\u989d\u51cf\u53bb\u5176\u4ed6\u4e1a\u52a1\u4e3a $20.2B\uff0c\u4e0e\u603b\u6536\u5165 $20.1B \u5b58\u5728\u9010\u9879\u820d\u5165\u5dee\u5f02\u3002"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (2%)",
                "\u51c0\u5229\u7387 19%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (7%)",
                "\u51c0\u5229\u7387 27%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +2%",
                "\u51c0\u5229\u7387 38%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 +4%",
                "\u51c0\u5229\u7387 10%"
              ]
            },
            {
              "id": "other",
              "label": "\u5176\u4ed6\u4e1a\u52a1"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "operating_losses",
                "label": "\u7ecf\u8425\u635f\u5931"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "leases",
                "label": "\u79df\u8d41"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u5229\u6da6",
            "notes": [
              "\u7528\u4e8e\u8868\u683c\u7684\u4e2d\u95f4\u5408\u8ba1\uff1b\u539f\u56fe\u672a\u7ed8\u5236\u72ec\u7acb\u8282\u70b9\u3002"
            ]
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 +4%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4 (0%)"
            ]
          },
          {
            "id": "average_loans",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4 (3%)"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 (0.1 \u4e2a\u767e\u5206\u70b9)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "wells-fargo-q2-fy24",
    "company": "Wells Fargo",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.7,
      "notes": [
        "+1% Y/Y",
        "Rounded segment amounts total $20.8B; All Other is ($0.1B)."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": "Consumer Banking",
          "value": 9,
          "notes": [
            "(5%) Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": "Commercial Banking",
          "value": 3.1,
          "notes": [
            "(7%) Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": "Corporate & Investment Banking",
          "value": 4.8,
          "notes": [
            "+4% Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": "Wealth & Investment Management",
          "value": 3.9,
          "notes": [
            "+6% Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "other",
          "label": "All Other",
          "value": -0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.3,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.6
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.5
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.1
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.2
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 7.4,
        "notes": [
          "Schema subtotal; no separate Source node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.2
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.9,
        "notes": [
          "+0% Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.0%",
        "basis": "unspecified",
        "notes": [
          "+0.3pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.0%\n+0.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            241,
            149
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.4",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.4T",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Average deposits\n$1.4T\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            373,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "basis": "unspecified",
        "notes": [
          "(3%) Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n(3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            657,
            1191,
            429,
            149
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 \u8d22\u5e74\u7b2c\u4e8c\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2024 \u5e74 6 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 +1%",
            "\u5206\u90e8\u53d6\u6574\u6536\u5165\u5408\u8ba1 $20.8B\uff0c\u6240\u6709\u5176\u4ed6\u4e3a ($0.1B)\u3002"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (5%)",
                "\u51c0\u5229\u7387 20%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (7%)",
                "\u51c0\u5229\u7387 38%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +4%",
                "\u51c0\u5229\u7387 37%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 +6%",
                "\u51c0\u5229\u7387 13%"
              ]
            },
            {
              "id": "other",
              "label": "\u6240\u6709\u5176\u4ed6"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "operating_losses",
                "label": "\u7ecf\u8425\u635f\u5931"
              },
              {
                "id": "leases",
                "label": "\u79df\u8d41"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165",
            "notes": [
              "Schema \u9002\u914d\u5c0f\u8ba1\uff1b\u6765\u6e90\u56fe\u672a\u663e\u793a\u72ec\u7acb\u8282\u70b9\u3002"
            ]
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 +0%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 +0.3 \u4e2a\u767e\u5206\u70b9"
            ]
          },
          {
            "id": "deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4\u6301\u5e73"
            ]
          },
          {
            "id": "loans",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4 (3%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "wells-fargo-q3-fy25",
    "company": "Wells Fargo",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q3-fy25.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 21.4,
      "notes": [
        "+5% Y/Y",
        "Business-segment revenue totals $21.8B before the $0.3B Other adjustment; source figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.7,
          "notes": [
            "+6% Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3,
          "notes": [
            "(9%) Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.9,
          "notes": [
            "(1%) Y/Y",
            "40% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 4.2,
          "notes": [
            "+8% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": -0.3,
          "notes": [
            "Source chart displays the rounded magnitude without a sign."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.8,
        "notes": [
          "Expense details total $13.7B versus the $13.8B displayed total; source figures are rounded."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.3
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.3
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.1
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.7,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart\u2019s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 0.7
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 7.6,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.9
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.6,
        "notes": [
          "+9% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 \u8d22\u5e74\u7b2c\u4e09\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2025 \u5e74 9 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 +5%",
            "\u4e1a\u52a1\u5206\u90e8\u6536\u5165\u5408\u8ba1 $21.8B\uff0c\u53e6\u5217 $0.3B \u5176\u4ed6\u8c03\u6574\uff1b\u6765\u6e90\u6570\u5b57\u7ecf\u56db\u820d\u4e94\u5165\u3002"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +6%",
                "\u51c0\u5229\u7387 23%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (9%)",
                "\u51c0\u5229\u7387 38%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (1%)",
                "\u51c0\u5229\u7387 40%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 +8%",
                "\u51c0\u5229\u7387 14%"
              ]
            },
            {
              "id": "other",
              "label": "\u5176\u4ed6",
              "notes": [
                "\u6765\u6e90\u56fe\u4ee5\u4e0d\u5e26\u7b26\u53f7\u7684\u65b9\u5f0f\u663e\u793a\u53d6\u6574\u540e\u7684\u91d1\u989d\u3002"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "notes": [
              "\u8d39\u7528\u660e\u7ec6\u5408\u8ba1 $13.7B\uff0c\u56fe\u793a\u603b\u989d $13.8B\uff1b\u6765\u6e90\u6570\u5b57\u7ecf\u56db\u820d\u4e94\u5165\u3002"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              },
              {
                "id": "operating_losses",
                "label": "\u7ecf\u8425\u635f\u5931"
              },
              {
                "id": "leases",
                "label": "\u79df\u8d41"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "\u6620\u5c04\u5230\u901a\u7528 schema \u7684\u8425\u4e1a\u8d39\u7528\u69fd\u4f4d\uff0c\u5bf9\u5e94\u6765\u6e90\u56fe\u7684\u4fe1\u7528\u635f\u5931\u62e8\u5907\u3002"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165",
            "notes": [
              "Schema \u9002\u914d\u5c0f\u8ba1\uff1b\u6765\u6e90\u56fe\u672a\u663e\u793a\u72ec\u7acb\u7684\u6bdb\u5229\u6da6\u8282\u70b9\u3002"
            ]
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 +9%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4\u6301\u5e73"
            ]
          },
          {
            "id": "average_loans_leases",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4\u6301\u5e73"
            ]
          },
          {
            "id": "cet1_ratio",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 (0.3 \u4e2a\u767e\u5206\u70b9)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.3T",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Average deposits\n$1.3T\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            22,
            1197,
            372,
            150
          ]
        }
      },
      {
        "id": "average_loans_leases",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            404,
            1197,
            430,
            150
          ]
        }
      },
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "11.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.0%",
        "basis": "unspecified",
        "notes": [
          "(0.3pp) Y/Y"
        ],
        "quote": "CET1 ratio\n11.0%\n(0.3pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            843,
            1197,
            241,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "wells-fargo-q3-fy24",
    "company": "Wells Fargo",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q3-fy24.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.4,
      "notes": [
        "(2%) Y/Y",
        "Displayed segment sum less All Other is $20.3B; source total is $20.4B due to rounding."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": "Consumer Banking",
          "value": 9.1,
          "notes": [
            "(5%) Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": "Commercial Banking",
          "value": 3.3,
          "notes": [
            "(2%) Y/Y",
            "40% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": "Corporate & Investment Banking",
          "value": 4.9,
          "notes": [
            "(0%) Y/Y",
            "41% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": "Wealth & Investment Management",
          "value": 3.9,
          "notes": [
            "+5% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "other",
          "label": "All Other",
          "value": -0.9
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.1,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.6
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.1
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.1
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 7.3
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.2
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.2,
        "notes": [
          "(10%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 \u8d22\u5e74\u7b2c\u4e09\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2024 \u5e74 9 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 (2%)"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (5%)",
                "\u51c0\u5229\u7387 21%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (2%)",
                "\u51c0\u5229\u7387 40%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (0%)",
                "\u51c0\u5229\u7387 41%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 +5%",
                "\u51c0\u5229\u7387 14%"
              ]
            },
            {
              "id": "other",
              "label": "\u6240\u6709\u5176\u4ed6"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "operating_losses",
                "label": "\u7ecf\u8425\u635f\u5931"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "leases",
                "label": "\u79df\u8d41"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165"
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 (10%)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4\u6301\u5e73"
            ]
          },
          {
            "id": "loans",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4 (3%)"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 +0.3 \u4e2a\u767e\u5206\u70b9"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.3T",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Average deposits\n$1.3T\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            23,
            1199,
            371,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "basis": "unspecified",
        "notes": [
          "(3%) Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n(3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            404,
            1199,
            429,
            149
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.3%",
        "basis": "unspecified",
        "notes": [
          "+0.3pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.3%\n+0.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            842,
            1199,
            241,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "wells-fargo-q1-fy23",
    "company": "Wells Fargo",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.7,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.4,
          "notes": [
            "+9% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.3,
          "notes": [
            "+42% Y/Y",
            "36% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.9,
          "notes": [
            "+41% Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.7,
          "notes": [
            "(2%) Y/Y",
            "12% net margin"
          ]
        },
        {
          "id": "other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.5
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.7,
        "items": [
          {
            "id": "personnel",
            "label": [
              "Personnel"
            ],
            "value": 9.4
          },
          {
            "id": "technology",
            "label": [
              "Technology"
            ],
            "value": 0.9
          },
          {
            "id": "occupancy",
            "label": [
              "Occupancy"
            ],
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": [
              "Operating losses"
            ],
            "value": 0.3
          },
          {
            "id": "leases",
            "label": [
              "Leases"
            ],
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": [
              "Advertising"
            ],
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": [
              "Professional fees"
            ],
            "value": 1.2
          },
          {
            "id": "other_expenses",
            "label": [
              "Other"
            ],
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": [
              "Provision for",
              "credit losses"
            ],
            "value": 1.2
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
        "label": "Income after noninterest expenses",
        "value": 7
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.9,
        "notes": [
          "(59%) Y/Y",
          "$1.23 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 \u8d22\u5e74\u7b2c\u4e00\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2023 \u5e74 3 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 +17%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": [
                "\u6d88\u8d39\u8005",
                "\u94f6\u884c"
              ],
              "notes": [
                "\u540c\u6bd4 +9%",
                "\u51c0\u5229\u7387 20%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": [
                "\u5546\u4e1a",
                "\u94f6\u884c"
              ],
              "notes": [
                "\u540c\u6bd4 +42%",
                "\u51c0\u5229\u7387 36%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": [
                "\u4f01\u4e1a\u4e0e",
                "\u6295\u8d44",
                "\u94f6\u884c"
              ],
              "notes": [
                "\u540c\u6bd4 +41%",
                "\u51c0\u5229\u7387 37%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": [
                "\u8d22\u5bcc\u4e0e",
                "\u6295\u8d44",
                "\u7ba1\u7406"
              ],
              "notes": [
                "\u540c\u6bd4 (2%)",
                "\u51c0\u5229\u7387 12%"
              ]
            },
            {
              "id": "other",
              "label": [
                "\u5176\u4ed6",
                "\uff08\u975e\u5229\u606f\u4e8f\u635f\uff09"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "items": [
              {
                "id": "personnel",
                "label": [
                  "\u4eba\u5458\u8d39\u7528"
                ]
              },
              {
                "id": "technology",
                "label": [
                  "\u6280\u672f"
                ]
              },
              {
                "id": "occupancy",
                "label": [
                  "\u573a\u5730\u5360\u7528"
                ]
              },
              {
                "id": "operating_losses",
                "label": [
                  "\u7ecf\u8425\u635f\u5931"
                ]
              },
              {
                "id": "leases",
                "label": [
                  "\u79df\u8d41"
                ]
              },
              {
                "id": "advertising",
                "label": [
                  "\u5e7f\u544a"
                ]
              },
              {
                "id": "professional_fees",
                "label": [
                  "\u4e13\u4e1a\u670d\u52a1\u8d39"
                ]
              },
              {
                "id": "other_expenses",
                "label": [
                  "\u5176\u4ed6"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating_expenses",
                "label": [
                  "\u4fe1\u7528\u635f\u5931",
                  "\u62e8\u5907"
                ]
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165"
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 (59%)",
              "\u6bcf\u80a1\u6536\u76ca $1.23"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 +0.3 \u4e2a\u767e\u5206\u70b9"
            ]
          },
          {
            "id": "deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4 (7%)"
            ]
          },
          {
            "id": "loans",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4 +6%"
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
        "literal": "10.8%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+0.3pp Y/Y"
        ],
        "quote": "CET1 ratio\n10.8%\n+0.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            242,
            150
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.4",
        "unit": "T",
        "literal": "$1.4T",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(7%) Y/Y"
        ],
        "quote": "Average deposits\n$1.4T\n(7%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            372,
            150
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "literal": "$0.9T",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            655,
            1191,
            431,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "wells-fargo-q1-fy24",
    "company": "Wells Fargo",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q1-fy24.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.9,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.1,
          "notes": [
            "(3%) Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.2,
          "notes": [
            "(5%) Y/Y",
            "31% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 5,
          "notes": [
            "+2% Y/Y",
            "40% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.7,
          "notes": [
            "+2% Y/Y",
            "10% net margin"
          ]
        },
        {
          "id": "other",
          "label": "All Other",
          "value": -0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 14.3,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9.5
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.6
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.1
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "operating_expenses",
            "label": [
              "Provision for",
              "credit losses"
            ],
            "value": 0.9
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
        "label": "Income after noninterest expenses",
        "value": 6.6
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.6
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.6,
        "notes": [
          "(5%) Y/Y",
          "$1.20 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 \u8d22\u5e74\u7b2c\u4e00\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2024 \u5e74 3 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 +1%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (3%)",
                "\u51c0\u5229\u7387 19%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 (5%)",
                "\u51c0\u5229\u7387 31%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +2%",
                "\u51c0\u5229\u7387 40%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 +2%",
                "\u51c0\u5229\u7387 10%"
              ]
            },
            {
              "id": "other",
              "label": "\u5176\u4ed6\u4e1a\u52a1"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "operating_losses",
                "label": "\u7ecf\u8425\u635f\u5931"
              },
              {
                "id": "leases",
                "label": "\u79df\u8d41"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165"
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 (5%)",
              "\u6bcf\u80a1\u6536\u76ca $1.20"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 +0.4 \u4e2a\u767e\u5206\u70b9"
            ]
          },
          {
            "id": "deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4 +2%"
            ]
          },
          {
            "id": "loans",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4 (3%)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "literal": "11.2%",
        "value": "11.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "quote": "CET1 ratio\n11.2%\n+0.4pp Y/Y",
        "notes": [
          "+0.4pp Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            240,
            149
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "literal": "$1.4T",
        "value": "1.4",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "quote": "Average deposits\n$1.4T\n+2% Y/Y",
        "notes": [
          "+2% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            372,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "literal": "$0.9T",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "quote": "Average loans and leases\n$0.9T\n(3%) Y/Y",
        "notes": [
          "(3%) Y/Y"
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
    ]
  },
  {
    "key": "wells-fargo-q4-fy24",
    "company": "Wells Fargo",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q4-fy24.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.4,
      "notes": [
        "(0%) Y/Y",
        "Displayed segment amounts less All Other total $20.5B versus $20.4B consolidated revenue; source rounding."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9,
          "notes": [
            "(6%) Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.2,
          "notes": [
            "(6%) Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.6,
          "notes": [
            "(3%) Y/Y",
            "34% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 4,
          "notes": [
            "+8% Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "other",
          "label": "All Other",
          "value": -0.3,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.9,
        "notes": [
          "Displayed expense items sum to $13.9B."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9.1
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.3
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.2
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.1,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart\u2019s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.1
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 6.5,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.3,
        "notes": [
          "+50% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 \u8d22\u5e74\u7b2c\u56db\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2024 \u5e74 12 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 (0%)",
            "\u5206\u90e8\u91d1\u989d\u6263\u9664\u5176\u4ed6\u4e1a\u52a1\u540e\u4e3a $20.5B\uff0c\u56fe\u793a\u603b\u6536\u5165\u4e3a $20.4B\uff1b\u5dee\u5f02\u5728\u5206\u9879\u820d\u5165\u8303\u56f4\u5185\u3002"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c"
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c"
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c"
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406"
            },
            {
              "id": "other",
              "label": "\u6240\u6709\u5176\u4ed6\u4e1a\u52a1"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "notes": [
              "\u56fe\u793a\u8d39\u7528\u660e\u7ec6\u5408\u8ba1 $13.9B\u3002"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "operating_losses",
                "label": "\u7ecf\u8425\u635f\u5931"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "leases",
                "label": "\u79df\u8d41"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165"
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 +50%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4 +1%"
            ]
          },
          {
            "id": "average_loans",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4 (3%)"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 (0.3 \u4e2a\u767e\u5206\u70b9)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "literal": "$1.4T",
        "value": "1.4",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "quote": "Average deposits\n$1.4T\n+1% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            23,
            1198,
            372,
            149
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans and leases",
        "literal": "$0.9T",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "quote": "Average loans and leases\n$0.9T\n(3%) Y/Y",
        "basis": "unspecified",
        "notes": [
          "(3%) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            404,
            1198,
            429,
            149
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "literal": "11.1%",
        "value": "11.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "quote": "CET1 ratio\n11.1%\n(0.3pp) Y/Y",
        "basis": "unspecified",
        "notes": [
          "(0.3pp) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            842,
            1198,
            241,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "wells-fargo-q3-fy23",
    "company": "Wells Fargo",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q3-fy23.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.9,
      "notes": [
        "+7% Y/Y",
        "Displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.6,
          "notes": [
            "+3% Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.4,
          "notes": [
            "+15% Y/Y",
            "40% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.9,
          "notes": [
            "+21% Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.7,
          "notes": [
            "+32% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "other",
          "label": [
            "All Other"
          ],
          "value": -0.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.1,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.6
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.3
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.2
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
        "label": "Income after noninterest expenses",
        "value": 7.8
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.5
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.8,
        "notes": [
          "+61% Y/Y",
          "$1.48 EPS"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.0%",
        "notes": [
          "+0.7pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.0%\n+0.7pp Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1192,
            241,
            147
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.3T",
        "notes": [
          "(5%) Y/Y"
        ],
        "quote": "Average deposits\n$1.3T\n(5%) Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1192,
            372,
            147
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "notes": [
          "(0.2%) Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n(0.2%) Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            657,
            1192,
            428,
            147
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 \u8d22\u5e74\u7b2c\u4e09\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2023 \u5e74 9 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 +7%",
            "\u56fe\u4e2d\u6570\u5b57\u7ecf\u56db\u820d\u4e94\u5165\u3002"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +3%",
                "\u51c0\u5229\u7387 23%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +15%",
                "\u51c0\u5229\u7387 40%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +21%",
                "\u51c0\u5229\u7387 37%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 +32%",
                "\u51c0\u5229\u7387 14%"
              ]
            },
            {
              "id": "other",
              "label": "\u6240\u6709\u5176\u4ed6"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "operating_losses",
                "label": "\u7ecf\u8425\u635f\u5931"
              },
              {
                "id": "leases",
                "label": "\u79df\u8d41"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u5229\u6da6"
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 +61%",
              "\u6bcf\u80a1\u6536\u76ca $1.48"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 +0.7 \u4e2a\u767e\u5206\u70b9"
            ]
          },
          {
            "id": "deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4 (5%)"
            ]
          },
          {
            "id": "loans",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4 (0.2%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "wells-fargo-q4-fy23",
    "company": "Wells Fargo",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q4-fy23.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.5,
      "notes": [
        "+2% Y/Y",
        "Rounded segment revenue less All Other equals revenue."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.5,
          "notes": [
            "+1% Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.4,
          "notes": [
            "+7% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.7,
          "notes": [
            "+14% Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.7,
          "notes": [
            "(1%) Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "other",
          "label": "All Other",
          "value": -0.8,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 15.8,
        "notes": [
          "Source expense details total $15.9B; displayed figures are rounded."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9.2
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.4
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.2
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 2.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.3,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart\u2019s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.3
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
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
        "label": "Income after noninterest expenses",
        "value": 4.7,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.5,
        "notes": [
          "+20% Y/Y",
          "$0.86 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 \u8d22\u5e74\u7b2c\u56db\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2023 \u5e74 12 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 +2%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +1%",
                "\u51c0\u5229\u7387 21%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +7%",
                "\u51c0\u5229\u7387 38%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +14%",
                "\u51c0\u5229\u7387 33%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 (1%)",
                "\u51c0\u5229\u7387 13%"
              ]
            },
            {
              "id": "other",
              "label": "\u5176\u4ed6\u8c03\u6574",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "operating_losses",
                "label": "\u7ecf\u8425\u635f\u5931"
              },
              {
                "id": "leases",
                "label": "\u79df\u8d41"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ],
            "notes": [
              "\u6765\u6e90\u56fe\u7684\u8d39\u7528\u5206\u9879\u5408\u8ba1\u4e3a $15.9B\uff1b\u663e\u793a\u91d1\u989d\u7ecf\u8fc7\u56db\u820d\u4e94\u5165\u3002"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "tax_benefit",
              "label": "\u7a0e\u6536\u6536\u76ca"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165"
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 +20%",
              "\u6bcf\u80a1\u6536\u76ca $0.86"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 +0.8 \u4e2a\u767e\u5206\u70b9"
            ]
          },
          {
            "id": "deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4 (3%)"
            ]
          },
          {
            "id": "loans",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4 (1%)"
            ]
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
        "literal": "11.4%",
        "comparison": "eq",
        "notes": [
          "+0.8pp Y/Y"
        ],
        "basis": "unspecified",
        "quote": "CET1 ratio\n11.4%\n+0.8pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            242,
            149
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.3T",
        "comparison": "eq",
        "notes": [
          "(3%) Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Average deposits\n$1.3T\n(3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            372,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "literal": "$0.9T",
        "comparison": "eq",
        "notes": [
          "(1%) Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Average loans and leases\n$0.9T\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            430,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "wells-fargo-q3-fy26",
    "company": "Wells Fargo",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q3-fy26.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 21.9,
      "notes": [
        "+2% Y/Y",
        "Source components are rounded; segment inputs total $23.0B, less $1.1B Other."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.7,
          "notes": [
            "+5% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.2,
          "notes": [
            "+6% Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 5,
          "notes": [
            "+3% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 4.1,
          "notes": [
            "+12% Y/Y",
            "15% net margin"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": -1.1,
          "notes": [
            "Source displays magnitude of the negative Other revenue adjustment."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.7,
        "notes": [
          "Source expense details total $13.7B."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.7
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.2
          }
        ]
      },
      "operatingExpenses": {
        "total": 1,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart\u2019s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 8.2,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.9,
        "notes": [
          "+6% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 \u8d22\u5e74\u7b2c\u4e09\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2026 \u5e74 9 \u6708",
        "revenue": {
          "notes": [
            "\u540c\u6bd4 +2%",
            "\u5206\u90e8\u6536\u5165\u5408\u8ba1 $23.0B\uff0c\u6263\u9664\u5176\u4ed6\u8c03\u6574 $1.1B\u3002\u56fe\u4e2d\u6570\u5b57\u7ecf\u56db\u820d\u4e94\u5165\u3002"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "\u6d88\u8d39\u8005\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +5%",
                "\u51c0\u5229\u7387 26%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "\u5546\u4e1a\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +6%",
                "\u51c0\u5229\u7387 37%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "\u4f01\u4e1a\u4e0e\u6295\u8d44\u94f6\u884c",
              "notes": [
                "\u540c\u6bd4 +3%",
                "\u51c0\u5229\u7387 38%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "\u8d22\u5bcc\u4e0e\u6295\u8d44\u7ba1\u7406",
              "notes": [
                "\u540c\u6bd4 +12%",
                "\u51c0\u5229\u7387 15%"
              ]
            },
            {
              "id": "other",
              "label": "\u5176\u4ed6",
              "notes": [
                "\u6765\u6e90\u56fe\u663e\u793a\u8d1f\u5411\u5176\u4ed6\u6536\u5165\u8c03\u6574\u7684\u7edd\u5bf9\u503c\u3002"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "\u975e\u5229\u606f\u8d39\u7528",
            "notes": [
              "\u56fe\u4e2d\u8d39\u7528\u660e\u7ec6\u5408\u8ba1 $13.7B\u3002"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "\u4eba\u5458\u8d39\u7528"
              },
              {
                "id": "technology",
                "label": "\u6280\u672f"
              },
              {
                "id": "occupancy",
                "label": "\u573a\u5730\u5360\u7528"
              },
              {
                "id": "professional_fees",
                "label": "\u4e13\u4e1a\u670d\u52a1\u8d39"
              },
              {
                "id": "advertising",
                "label": "\u5e7f\u544a"
              },
              {
                "id": "other_expenses",
                "label": "\u5176\u4ed6"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "\u6620\u5c04\u5230\u901a\u7528 schema \u7684\u8425\u4e1a\u8d39\u7528\u69fd\u4f4d\uff0c\u5bf9\u5e94\u6765\u6e90\u56fe\u7684\u4fe1\u7528\u635f\u5931\u62e8\u5907\u3002"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "\u4fe1\u7528\u635f\u5931\u62e8\u5907"
              }
            ]
          },
          "tax": {
            "label": "\u7a0e\u8d39"
          }
        },
        "profit": {
          "gross": {
            "label": "\u6263\u9664\u975e\u5229\u606f\u8d39\u7528\u540e\u7684\u6536\u5165",
            "notes": [
              "Schema \u9002\u914d\u5c0f\u8ba1\uff1b\u6765\u6e90\u56fe\u672a\u663e\u793a\u72ec\u7acb\u7684\u6bdb\u5229\u6da6\u8282\u70b9\u3002"
            ]
          },
          "operating": {
            "label": "\u7a0e\u524d\u5229\u6da6"
          },
          "net": {
            "label": "\u51c0\u5229\u6da6",
            "notes": [
              "\u540c\u6bd4 +6%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "\u5e73\u5747\u5b58\u6b3e",
            "notes": [
              "\u540c\u6bd4 +11%"
            ]
          },
          {
            "id": "average_loans_leases",
            "label": "\u5e73\u5747\u8d37\u6b3e\u4e0e\u79df\u8d41",
            "notes": [
              "\u540c\u6bd4 +11%"
            ]
          },
          {
            "id": "cet1_ratio",
            "label": "CET1 \u6bd4\u7387",
            "notes": [
              "\u540c\u6bd4 (1 \u4e2a\u767e\u5206\u70b9)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.48",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.48T",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Average deposits\n$1.48T\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            23,
            1220,
            371,
            135
          ]
        }
      },
      {
        "id": "average_loans_leases",
        "label": "Average loans and leases",
        "value": "1.03",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.03T",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Average loans and leases\n$1.03T\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            404,
            1220,
            431,
            135
          ]
        }
      },
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "10.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "10.0%",
        "basis": "unspecified",
        "notes": [
          "(1pp) Y/Y"
        ],
        "quote": "CET1 ratio\n10.0%\n(1pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            843,
            1220,
            241,
            135
          ]
        }
      }
    ]
  }
]);})(window);