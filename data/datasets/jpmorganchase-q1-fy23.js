window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "jpmorganchase-q1-fy23",
  "name": "JPMorganChase · Q1 FY23",
  "company": "JPMorganChase",
  "meta": {
    "company": "JPMorganChase",
    "title": "JP Morgan Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/jpmorganchase-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.333,
    "titleY": 186.219,
    "titleSize": 115.885,
    "titleWeight": 800
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155477",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
      },
      "profit": {
        "node": "#279f28",
        "label": "#009858"
      },
      "cost": {
        "node": "#ce0000",
        "label": "#a51b00"
      }
    },
    "linkTint": {
      "source": "#888888",
      "hub": "#888888",
      "profit": "#99cd99",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 36.458,
      "value": 37.76,
      "note": 26.042,
      "lineGap": 10.417
    }
  },
  "nodes": [
    {
      "id": "consumer_community_banking",
      "label": [
        "Consumer &",
        "Community",
        "Banking"
      ],
      "value": 16.5,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+35% Y/Y",
        "32% net margin"
      ]
    },
    {
      "id": "corporate_investment_bank",
      "label": [
        "Corporate &",
        "Investment Bank"
      ],
      "value": 13.6,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "Flat Y/Y",
        "33% net margin"
      ]
    },
    {
      "id": "commercial_banking",
      "label": [
        "Commercial",
        "Banking"
      ],
      "value": 3.5,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+46% Y/Y",
        "38% net margin"
      ]
    },
    {
      "id": "asset_wealth_management",
      "label": [
        "Asset & Wealth",
        "Management"
      ],
      "value": 4.8,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+11% Y/Y",
        "29% net margin"
      ]
    },
    {
      "id": "corporate",
      "label": [
        "Corporate"
      ],
      "value": 1,
      "type": "source",
      "col": 0,
      "order": 4
    },
    {
      "id": "revenue",
      "label": [
        "Net revenue"
      ],
      "value": 38.3,
      "type": "hub",
      "col": 2,
      "order": 5,
      "notes": [
        "+25% Y/Y"
      ]
    },
    {
      "id": "adjustments",
      "label": [
        "Adjustments"
      ],
      "value": 1,
      "type": "cost",
      "col": 2,
      "order": 6
    },
    {
      "id": "pretax_income",
      "label": [
        "Pretax income"
      ],
      "value": 16,
      "type": "profit",
      "col": 3,
      "order": 7
    },
    {
      "id": "noninterest_expenses",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 20.1,
      "type": "cost",
      "col": 3,
      "order": 8
    },
    {
      "id": "operating_expenses",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 2.3,
      "type": "cost",
      "col": 3,
      "order": 9
    },
    {
      "id": "net_income",
      "label": [
        "Net income"
      ],
      "value": 12.6,
      "type": "profit",
      "col": 4,
      "order": 10,
      "notes": [
        "+52% Y/Y",
        "$4.10 EPS"
      ]
    },
    {
      "id": "tax",
      "label": [
        "Tax"
      ],
      "value": 3.3,
      "type": "cost",
      "col": 4,
      "order": 11
    },
    {
      "id": "compensation_benefits",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 11.7,
      "type": "cost",
      "col": 4,
      "order": 12
    },
    {
      "id": "occupancy",
      "label": [
        "Occupancy"
      ],
      "value": 1.1,
      "type": "cost",
      "col": 4,
      "order": 13
    },
    {
      "id": "technology_communications",
      "label": [
        "Technology,",
        "communications"
      ],
      "value": 2.2,
      "type": "cost",
      "col": 4,
      "order": 14
    },
    {
      "id": "professional_services",
      "label": [
        "Professional",
        "services"
      ],
      "value": 2.4,
      "type": "cost",
      "col": 4,
      "order": 15
    },
    {
      "id": "marketing",
      "label": [
        "Marketing"
      ],
      "value": 1,
      "type": "cost",
      "col": 4,
      "order": 16
    },
    {
      "id": "other_expenses",
      "label": [
        "Other"
      ],
      "value": 1.6,
      "type": "cost",
      "col": 4,
      "order": 17
    },
    {
      "id": "segment_revenue",
      "label": "Segment revenue",
      "value": 39.4,
      "type": "hub",
      "col": 1,
      "order": 5
    }
  ],
  "links": [
    {
      "source": "consumer_community_banking",
      "target": "segment_revenue",
      "value": 16.5,
      "sourceWidth": 141.927,
      "targetWidth": 141.927,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#888888"
    },
    {
      "source": "corporate_investment_bank",
      "target": "segment_revenue",
      "value": 13.6,
      "sourceWidth": 117.188,
      "targetWidth": 117.188,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#888888"
    },
    {
      "source": "commercial_banking",
      "target": "segment_revenue",
      "value": 3.5,
      "sourceWidth": 29.948,
      "targetWidth": 29.948,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#888888"
    },
    {
      "source": "asset_wealth_management",
      "target": "segment_revenue",
      "value": 4.8,
      "sourceWidth": 41.667,
      "targetWidth": 41.667,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#888888"
    },
    {
      "source": "corporate",
      "target": "segment_revenue",
      "value": 1,
      "sourceWidth": 7.812,
      "targetWidth": 9.114,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#888888"
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 38.3,
      "sourceWidth": 330.729,
      "targetWidth": 330.729,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#888888"
    },
    {
      "source": "segment_revenue",
      "target": "adjustments",
      "value": 1,
      "sourceWidth": 9.115,
      "targetWidth": 9.115,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 16,
      "sourceWidth": 138.021,
      "targetWidth": 138.021,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "noninterest_expenses",
      "value": 20.1,
      "sourceWidth": 173.177,
      "targetWidth": 173.177,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 2.3,
      "sourceWidth": 19.531,
      "targetWidth": 19.531,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 12.6,
      "sourceWidth": 109.375,
      "targetWidth": 109.375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 3.3,
      "sourceWidth": 28.646,
      "targetWidth": 28.646,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "noninterest_expenses",
      "target": "compensation_benefits",
      "value": 11.7,
      "sourceWidth": 100.26,
      "targetWidth": 100.26,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "noninterest_expenses",
      "target": "occupancy",
      "value": 1.1,
      "sourceWidth": 10.417,
      "targetWidth": 10.417,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "noninterest_expenses",
      "target": "technology_communications",
      "value": 2.2,
      "sourceWidth": 19.531,
      "targetWidth": 19.531,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "noninterest_expenses",
      "target": "professional_services",
      "value": 2.4,
      "sourceWidth": 20.833,
      "targetWidth": 20.833,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "noninterest_expenses",
      "target": "marketing",
      "value": 1,
      "sourceWidth": 9.115,
      "targetWidth": 9.115,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "noninterest_expenses",
      "target": "other_expenses",
      "value": 1.6,
      "sourceWidth": 13.021,
      "targetWidth": 13.021,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "gross_profit",
      "representation": "data-only"
    }
  ],
  "operatingMetrics": [
    {
      "id": "cet1_ratio",
      "value": "13.8",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "13.8%"
    },
    {
      "id": "average_deposits",
      "value": "2.3",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$2.3T"
    },
    {
      "id": "average_loans",
      "value": "1.1",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.1T"
    }
  ],
  "layout": {
    "scale": 8.594,
    "nodes": {
      "segment_revenue": {
        "x": 895.833,
        "y": 519.531,
        "width": 72.917,
        "height": 339.844
      },
      "consumer_community_banking": {
        "x": 429.688,
        "y": 376.302,
        "width": 72.917,
        "height": 141.927
      },
      "corporate_investment_bank": {
        "x": 429.688,
        "y": 627.604,
        "width": 72.917,
        "height": 117.188
      },
      "commercial_banking": {
        "x": 429.688,
        "y": 852.865,
        "width": 72.917,
        "height": 29.948
      },
      "asset_wealth_management": {
        "x": 429.688,
        "y": 997.396,
        "width": 72.917,
        "height": 41.667
      },
      "corporate": {
        "x": 430.99,
        "y": 1162.76,
        "width": 72.917,
        "height": 7.812
      },
      "revenue": {
        "x": 1363.281,
        "y": 554.688,
        "width": 71.615,
        "height": 330.729
      },
      "adjustments": {
        "x": 1363.281,
        "y": 1044.271,
        "width": 71.615,
        "height": 9.115
      },
      "pretax_income": {
        "x": 1837.24,
        "y": 433.594,
        "width": 72.917,
        "height": 138.021
      },
      "noninterest_expenses": {
        "x": 1830.729,
        "y": 779.948,
        "width": 72.917,
        "height": 173.177
      },
      "operating_expenses": {
        "x": 1834.635,
        "y": 1171.875,
        "width": 72.917,
        "height": 19.531
      },
      "net_income": {
        "x": 2296.875,
        "y": 312.5,
        "width": 72.917,
        "height": 109.375
      },
      "tax": {
        "x": 2296.875,
        "y": 479.167,
        "width": 72.917,
        "height": 28.646
      },
      "compensation_benefits": {
        "x": 2296.875,
        "y": 618.49,
        "width": 72.917,
        "height": 100.26
      },
      "occupancy": {
        "x": 2296.875,
        "y": 830.729,
        "width": 72.917,
        "height": 10.417
      },
      "technology_communications": {
        "x": 2296.875,
        "y": 945.312,
        "width": 72.917,
        "height": 19.531
      },
      "professional_services": {
        "x": 2296.875,
        "y": 1070.312,
        "width": 72.917,
        "height": 20.833
      },
      "marketing": {
        "x": 2296.875,
        "y": 1210.938,
        "width": 72.917,
        "height": 9.115
      },
      "other_expenses": {
        "x": 2296.875,
        "y": 1335.938,
        "width": 72.917,
        "height": 13.021
      }
    },
    "labels": {
      "segment_revenue": {
        "blocks": []
      },
      "consumer_community_banking": {
        "blocks": [
          {
            "x": 371.094,
            "top": 378.906,
            "anchor": "end",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Consumer &",
                "size": 36.458,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "Community",
                "size": 36.458,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "Banking",
                "size": 36.458,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "32% net margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 466.146,
            "top": 281.25,
            "anchor": "middle",
            "lineGap": 10.417,
            "lines": [
              {
                "text": "$16.5B",
                "size": 37.76,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+35% Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "corporate_investment_bank": {
        "blocks": [
          {
            "x": 371.094,
            "top": 640.625,
            "anchor": "end",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Corporate &",
                "size": 36.458,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "Investment Bank",
                "size": 36.458,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "33% net margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 466.146,
            "top": 532.552,
            "anchor": "middle",
            "lineGap": 10.417,
            "lines": [
              {
                "text": "$13.6B",
                "size": 37.76,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "Flat Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "commercial_banking": {
        "blocks": [
          {
            "x": 371.094,
            "top": 852.865,
            "anchor": "end",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Commercial",
                "size": 36.458,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "Banking",
                "size": 36.458,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "38% net margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 466.146,
            "top": 757.812,
            "anchor": "middle",
            "lineGap": 10.417,
            "lines": [
              {
                "text": "$3.5B",
                "size": 37.76,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+46% Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "asset_wealth_management": {
        "blocks": [
          {
            "x": 371.094,
            "top": 997.396,
            "anchor": "end",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Asset & Wealth",
                "size": 36.458,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "Management",
                "size": 36.458,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "29% net margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 466.146,
            "top": 902.344,
            "anchor": "middle",
            "lineGap": 10.417,
            "lines": [
              {
                "text": "$4.8B",
                "size": 37.76,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+11% Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "corporate": {
        "blocks": [
          {
            "x": 371.094,
            "top": 1140.625,
            "anchor": "end",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Corporate",
                "size": 36.458,
                "weight": 800,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 467.448,
            "top": 1098.958,
            "anchor": "middle",
            "lineGap": 10.417,
            "lines": [
              {
                "text": "$1.0B",
                "size": 37.76,
                "weight": 400,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1399.089,
            "top": 397.135,
            "anchor": "middle",
            "lineGap": 10.417,
            "lines": [
              {
                "text": "Net revenue",
                "size": 36.458,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$38.3B",
                "size": 37.76,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+25% Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "adjustments": {
        "blocks": [
          {
            "x": 1399.089,
            "top": 1071.615,
            "anchor": "middle",
            "lineGap": 10.417,
            "lines": [
              {
                "text": "Adjustments",
                "size": 35.156,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "($1.0B)",
                "size": 35.156,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1873.698,
            "top": 319.01,
            "anchor": "middle",
            "lineGap": 10.417,
            "lines": [
              {
                "text": "Pretax income",
                "size": 36.458,
                "weight": 800,
                "color": "#009858"
              },
              {
                "text": "$16.0B",
                "size": 37.76,
                "weight": 400,
                "color": "#009858"
              }
            ]
          }
        ]
      },
      "noninterest_expenses": {
        "blocks": [
          {
            "x": 1867.188,
            "top": 971.354,
            "anchor": "middle",
            "lineGap": 10.417,
            "lines": [
              {
                "text": "Noninterest",
                "size": 35.156,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "expenses",
                "size": 35.156,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "($20.1B)",
                "size": 35.156,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1871.094,
            "top": 1209.635,
            "anchor": "middle",
            "lineGap": 10.417,
            "lines": [
              {
                "text": "Provision for",
                "size": 35.156,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "credit losses",
                "size": 35.156,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "($2.3B)",
                "size": 35.156,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2513.021,
            "top": 270.833,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Net income",
                "size": 36.458,
                "weight": 800,
                "color": "#009858"
              },
              {
                "text": "$12.6B",
                "size": 37.76,
                "weight": 400,
                "color": "#009858"
              },
              {
                "text": "+52% Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "$4.10 EPS",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2513.021,
            "top": 463.542,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Tax",
                "size": 32.552,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "($3.3B)",
                "size": 32.552,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2513.021,
            "top": 610.677,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Compensation",
                "size": 32.552,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "& benefits",
                "size": 32.552,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "($11.7B)",
                "size": 32.552,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2513.021,
            "top": 785.156,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Occupancy",
                "size": 32.552,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "($1.1B)",
                "size": 32.552,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "technology_communications": {
        "blocks": [
          {
            "x": 2513.021,
            "top": 889.323,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Technology,",
                "size": 32.552,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "communications",
                "size": 32.552,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "($2.2B)",
                "size": 32.552,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 2513.021,
            "top": 1028.646,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Professional",
                "size": 32.552,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "services",
                "size": 32.552,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "($2.4B)",
                "size": 32.552,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2513.021,
            "top": 1178.385,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Marketing",
                "size": 32.552,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "($1.0B)",
                "size": 32.552,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "other_expenses": {
        "blocks": [
          {
            "x": 2513.021,
            "top": 1312.5,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Other",
                "size": 32.552,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "($1.6B)",
                "size": 32.552,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"143.229\" y=\"265.625\" font-size=\"37.76\" font-weight=\"750\" fill=\"#155477\">By Business Segment</text></g><g data-typography-role=\"brand\" fill=\"#000\" font-family=\"Georgia,serif\" font-size=\"61.198\"><text x=\"751.302\" y=\"372.396\">JPMorgan</text><text x=\"742.188\" y=\"440.104\">Chase &amp; Co.</text></g><g><rect x=\"24.74\" y=\"1191.406\" width=\"242.188\" height=\"148.438\" rx=\"31.25\" fill=\"#000\"/><g text-anchor=\"middle\" fill=\"#ddd\" font-size=\"26.042\"><text x=\"145.833\" y=\"1243.49\" font-weight=\"750\">CET1 ratio</text><text data-operating-metric=\"cet1_ratio\" x=\"145.833\" y=\"1283.854\">13.8%</text><text x=\"145.833\" y=\"1315.104\" font-size=\"20.833\">+1.9pp Y/Y</text></g></g><g><rect x=\"274.74\" y=\"1191.406\" width=\"372.396\" height=\"148.438\" rx=\"31.25\" fill=\"#000\"/><g text-anchor=\"middle\" fill=\"#ddd\" font-size=\"26.042\"><text x=\"460.938\" y=\"1243.49\" font-weight=\"750\">Average deposits</text><text data-operating-metric=\"average_deposits\" x=\"460.938\" y=\"1283.854\">$2.3T</text><text x=\"460.938\" y=\"1315.104\" font-size=\"20.833\">(8%) Y/Y &amp; (3%) Q/Q</text></g></g><g><rect x=\"656.25\" y=\"1191.406\" width=\"309.896\" height=\"148.438\" rx=\"31.25\" fill=\"#000\"/><g text-anchor=\"middle\" fill=\"#ddd\" font-size=\"26.042\"><text x=\"811.198\" y=\"1243.49\" font-weight=\"750\">Average loans</text><text data-operating-metric=\"average_loans\" x=\"811.198\" y=\"1283.854\">$1.1T</text><text x=\"811.198\" y=\"1315.104\" font-size=\"20.833\">+6% Y/Y</text></g></g><text x=\"239.583\" y=\"1389.323\" font-family=\"Noto Sans\" font-size=\"26.042\" fill=\"#777\">CET1 = Common Equity Tier 1</text>",
  "i18n": {
    "zh": {
      "name": "摩根大通 · 2023 财年第一季度",
      "meta": {
        "title": "摩根大通 2023 财年第一季度利润表",
        "titleSize": 101.562,
        "period": "2023 财年第一季度"
      },
      "nodes": {
        "consumer_community_banking": {
          "label": [
            "消费者与",
            "社区银行"
          ]
        },
        "corporate_investment_bank": {
          "label": [
            "公司与",
            "投资银行"
          ]
        },
        "commercial_banking": {
          "label": [
            "商业银行"
          ]
        },
        "asset_wealth_management": {
          "label": [
            "资产与",
            "财富管理"
          ]
        },
        "corporate": {
          "label": [
            "公司业务"
          ]
        },
        "revenue": {
          "label": [
            "净收入"
          ]
        },
        "adjustments": {
          "label": [
            "调整项"
          ]
        },
        "pretax_income": {
          "label": [
            "税前利润"
          ]
        },
        "noninterest_expenses": {
          "label": [
            "非利息",
            "费用"
          ]
        },
        "operating_expenses": {
          "label": [
            "信用损失",
            "拨备"
          ]
        },
        "net_income": {
          "label": [
            "净利润"
          ],
          "notes": [
            "同比 +52%",
            "每股收益 $4.10"
          ]
        },
        "tax": {
          "label": [
            "税费"
          ]
        },
        "compensation_benefits": {
          "label": [
            "薪酬与福利"
          ]
        },
        "occupancy": {
          "label": [
            "场地费用"
          ]
        },
        "technology_communications": {
          "label": [
            "技术与通信"
          ]
        },
        "professional_services": {
          "label": [
            "专业服务"
          ]
        },
        "marketing": {
          "label": [
            "营销"
          ]
        },
        "other_expenses": {
          "label": [
            "其他"
          ]
        }
      },
      "layout": {
        "labels": {
          "consumer_community_banking": {
            "blocks": [
              {
                "x": 371.094,
                "top": 378.906,
                "anchor": "end",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "消费者与",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "社区",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "银行",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "净利率 32%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 466.146,
                "top": 281.25,
                "anchor": "middle",
                "lineGap": 10.417,
                "lines": [
                  {
                    "text": "$16.5B",
                    "size": 37.76,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +35%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "corporate_investment_bank": {
            "blocks": [
              {
                "x": 371.094,
                "top": 640.625,
                "anchor": "end",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "公司与",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "投资银行",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "净利率 33%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 466.146,
                "top": 532.552,
                "anchor": "middle",
                "lineGap": 10.417,
                "lines": [
                  {
                    "text": "$13.6B",
                    "size": 37.76,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比持平",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "commercial_banking": {
            "blocks": [
              {
                "x": 371.094,
                "top": 852.865,
                "anchor": "end",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "商业",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "银行",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "净利率 38%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 466.146,
                "top": 757.812,
                "anchor": "middle",
                "lineGap": 10.417,
                "lines": [
                  {
                    "text": "$3.5B",
                    "size": 37.76,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +46%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "asset_wealth_management": {
            "blocks": [
              {
                "x": 371.094,
                "top": 997.396,
                "anchor": "end",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "资产与",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "财富管理",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "净利率 29%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 466.146,
                "top": 902.344,
                "anchor": "middle",
                "lineGap": 10.417,
                "lines": [
                  {
                    "text": "$4.8B",
                    "size": 37.76,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +11%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "corporate": {
            "blocks": [
              {
                "x": 371.094,
                "top": 1140.625,
                "anchor": "end",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "公司业务",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 467.448,
                "top": 1098.958,
                "anchor": "middle",
                "lineGap": 10.417,
                "lines": [
                  {
                    "text": "$1.0B",
                    "size": 37.76,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1399.089,
                "top": 397.135,
                "anchor": "middle",
                "lineGap": 10.417,
                "lines": [
                  {
                    "text": "净收入",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$38.3B",
                    "size": 37.76,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +25%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "adjustments": {
            "blocks": [
              {
                "x": 1399.089,
                "top": 1071.615,
                "anchor": "middle",
                "lineGap": 10.417,
                "lines": [
                  {
                    "text": "调整项",
                    "size": 35.156,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "($1.0B)",
                    "size": 35.156,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1873.698,
                "top": 319.01,
                "anchor": "middle",
                "lineGap": 10.417,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#009858"
                  },
                  {
                    "text": "$16.0B",
                    "size": 37.76,
                    "weight": 400,
                    "color": "#009858"
                  }
                ]
              }
            ]
          },
          "noninterest_expenses": {
            "blocks": [
              {
                "x": 1867.188,
                "top": 971.354,
                "anchor": "middle",
                "lineGap": 10.417,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 35.156,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "费用",
                    "size": 35.156,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "($20.1B)",
                    "size": 35.156,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1871.094,
                "top": 1209.635,
                "anchor": "middle",
                "lineGap": 10.417,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 35.156,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "拨备",
                    "size": 35.156,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "($2.3B)",
                    "size": 35.156,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2513.021,
                "top": 270.833,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#009858"
                  },
                  {
                    "text": "$12.6B",
                    "size": 37.76,
                    "weight": 400,
                    "color": "#009858"
                  },
                  {
                    "text": "同比 +52%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "$4.10 每股收益",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2513.021,
                "top": 463.542,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32.552,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "($3.3B)",
                    "size": 32.552,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2513.021,
                "top": 610.677,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "薪酬",
                    "size": 32.552,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "与福利",
                    "size": 32.552,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "($11.7B)",
                    "size": 32.552,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2513.021,
                "top": 785.156,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "场地费用",
                    "size": 32.552,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "($1.1B)",
                    "size": 32.552,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "technology_communications": {
            "blocks": [
              {
                "x": 2513.021,
                "top": 889.323,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "技术",
                    "size": 32.552,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "与通信",
                    "size": 32.552,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "($2.2B)",
                    "size": 32.552,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 2513.021,
                "top": 1028.646,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "专业",
                    "size": 32.552,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "服务",
                    "size": 32.552,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "($2.4B)",
                    "size": 32.552,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2513.021,
                "top": 1178.385,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "营销",
                    "size": 32.552,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "($1.0B)",
                    "size": 32.552,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "other_expenses": {
            "blocks": [
              {
                "x": 2513.021,
                "top": 1312.5,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.552,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "($1.6B)",
                    "size": 32.552,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"143.229\" y=\"265.625\" font-size=\"37.76\" font-weight=\"750\" fill=\"#155477\">按业务分部</text></g><g data-typography-role=\"brand\" fill=\"#000\" font-family=\"Georgia,serif\" font-size=\"61.198\"><text x=\"751.302\" y=\"372.396\">JPMorgan</text><text x=\"742.188\" y=\"440.104\">Chase &amp; Co.</text></g><g><rect x=\"24.74\" y=\"1191.406\" width=\"242.188\" height=\"148.438\" rx=\"31.25\" fill=\"#000\"/><g text-anchor=\"middle\" fill=\"#ddd\" font-size=\"26.042\"><text x=\"145.833\" y=\"1243.49\" font-weight=\"750\">CET1 比率</text><text data-operating-metric=\"cet1_ratio\" x=\"145.833\" y=\"1283.854\">13.8%</text><text x=\"145.833\" y=\"1315.104\" font-size=\"20.833\">同比 +1.9 个百分点</text></g></g><g><rect x=\"274.74\" y=\"1191.406\" width=\"372.396\" height=\"148.438\" rx=\"31.25\" fill=\"#000\"/><g text-anchor=\"middle\" fill=\"#ddd\" font-size=\"26.042\"><text x=\"460.938\" y=\"1243.49\" font-weight=\"750\">平均存款</text><text data-operating-metric=\"average_deposits\" x=\"460.938\" y=\"1283.854\">$2.3T</text><text x=\"460.938\" y=\"1315.104\" font-size=\"20.833\">同比 (8%)，环比 (3%)</text></g></g><g><rect x=\"656.25\" y=\"1191.406\" width=\"309.896\" height=\"148.438\" rx=\"31.25\" fill=\"#000\"/><g text-anchor=\"middle\" fill=\"#ddd\" font-size=\"26.042\"><text x=\"811.198\" y=\"1243.49\" font-weight=\"750\">平均贷款</text><text data-operating-metric=\"average_loans\" x=\"811.198\" y=\"1283.854\">$1.1T</text><text x=\"811.198\" y=\"1315.104\" font-size=\"20.833\">同比 +6%</text></g></g><text x=\"239.583\" y=\"1389.323\" font-family=\"Noto Sans\" font-size=\"26.042\" fill=\"#777\">CET1 = 普通股一级资本</text>"
    },
    "preservedAnnotationText": [
      "JPMorgan",
      "Chase & Co.",
      "$2.3T",
      "$1.1T"
    ]
  }
});
