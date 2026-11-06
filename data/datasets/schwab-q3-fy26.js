window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "schwab-q3-fy26",
  "name": "Schwab · Q3 FY26",
  "company": "Schwab",
  "meta": {
    "company": "Schwab",
    "title": "Schwab Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/schwab-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2210,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#00a0df",
        "label": "#00a0df"
      },
      "hub": {
        "node": "#00a0df",
        "label": "#00a0df"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#85cde9",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "<g><rect x=\"54\" y=\"1210\" width=\"466\" height=\"148\" rx=\"29\" fill=\"#00a0df\"/><text x=\"287\" y=\"1261\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Active brokerage accounts</text><text data-operating-metric=\"brokerage_accounts\" x=\"287\" y=\"1301\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">40.3M</text><text x=\"287\" y=\"1333\" text-anchor=\"middle\" font-size=\"24\" fill=\"#fff\">+6% Y/Y</text></g><g><rect x=\"532\" y=\"1210\" width=\"369\" height=\"148\" rx=\"29\" fill=\"#00a0df\"/><text x=\"716.5\" y=\"1261\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Banking accounts</text><text data-operating-metric=\"banking_accounts\" x=\"716.5\" y=\"1301\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">2.4M</text><text x=\"716.5\" y=\"1333\" text-anchor=\"middle\" font-size=\"24\" fill=\"#fff\">+13% Y/Y</text></g>",
  "nodes": [
    {
      "id": "net_interest",
      "label": "Net interest",
      "value": 3.5,
      "notes": [
        "+14% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "asset_management",
      "label": [
        "Asset",
        "management"
      ],
      "value": 1.9,
      "notes": [
        "+14% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "trading",
      "label": "Trading",
      "value": 1.2,
      "notes": [
        "+16% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 2
    },
    {
      "id": "bank_deposit_account_fees",
      "label": [
        "Bank deposit",
        "account fees"
      ],
      "value": 0.3,
      "notes": [
        "+40% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 3
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 0.3,
      "notes": [
        "+101% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 4
    },
    {
      "id": "revenue",
      "label": "Net revenue",
      "value": 7.2,
      "notes": [
        "+17% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 0
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 3.8,
      "type": "profit",
      "col": 2,
      "order": 0
    },
    {
      "id": "operating_expenses",
      "label": [
        "Non interest",
        "expenses"
      ],
      "value": 3.4,
      "type": "cost",
      "col": 2,
      "order": 1
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 2.9,
      "notes": [
        "+23% Y/Y"
      ],
      "type": "profit",
      "col": 3,
      "order": 0
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.9,
      "type": "cost",
      "col": 3,
      "order": 1
    },
    {
      "id": "compensation_benefits",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 1.8,
      "type": "cost",
      "col": 3,
      "order": 2
    },
    {
      "id": "professional_services",
      "label": "Professional services",
      "value": 0.3,
      "type": "cost",
      "col": 3,
      "order": 3
    },
    {
      "id": "occupancy",
      "label": "Occupancy",
      "value": 0.3,
      "type": "cost",
      "col": 3,
      "order": 4
    },
    {
      "id": "advertising",
      "label": "Advertising",
      "value": 0.1,
      "type": "cost",
      "col": 3,
      "order": 5
    },
    {
      "id": "comm",
      "label": "Comm.",
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 6
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 7
    },
    {
      "id": "acquired_intangible_assets",
      "label": [
        "Acquired intangible",
        "assets"
      ],
      "value": 0.1,
      "type": "cost",
      "col": 3,
      "order": 8
    },
    {
      "id": "regulatory_fee",
      "label": "Regulatory fee",
      "value": 0.1,
      "type": "cost",
      "col": 3,
      "order": 9
    },
    {
      "id": "other_expenses",
      "label": "Other",
      "value": 0.3,
      "type": "cost",
      "col": 3,
      "order": 10
    }
  ],
  "links": [
    {
      "source": "net_interest",
      "target": "revenue",
      "value": 3.5,
      "sourceWidth": 147,
      "targetWidth": 147,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "asset_management",
      "target": "revenue",
      "value": 1.9,
      "sourceWidth": 80,
      "targetWidth": 80,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "trading",
      "target": "revenue",
      "value": 1.2,
      "sourceWidth": 49,
      "targetWidth": 49,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "bank_deposit_account_fees",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 14,
      "targetWidth": 14,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 11,
      "targetWidth": 13,
      "sourceOrder": 0,
      "targetOrder": 4
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 3.8,
      "sourceWidth": 160,
      "targetWidth": 160,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 3.4,
      "sourceWidth": 143,
      "targetWidth": 143,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.9,
      "sourceWidth": 123,
      "targetWidth": 123,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.9,
      "sourceWidth": 37,
      "targetWidth": 37,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 1.8,
      "sourceWidth": 88,
      "targetWidth": 74,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_services",
      "value": 0.3,
      "sourceWidth": 10,
      "targetWidth": 14,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.3,
      "sourceWidth": 8,
      "targetWidth": 14,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "advertising",
      "value": 0.1,
      "sourceWidth": 4,
      "targetWidth": 6,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "comm",
      "value": 0.2,
      "sourceWidth": 8,
      "targetWidth": 8,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.2,
      "sourceWidth": 6,
      "targetWidth": 8,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "acquired_intangible_assets",
      "value": 0.1,
      "sourceWidth": 4,
      "targetWidth": 4,
      "sourceOrder": 6,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "regulatory_fee",
      "value": 0.1,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 7,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_expenses",
      "value": 0.3,
      "sourceWidth": 13,
      "targetWidth": 12,
      "sourceOrder": 8,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 50,
    "nodes": {
      "net_interest": {
        "x": 370,
        "y": 398,
        "width": 71,
        "height": 147
      },
      "asset_management": {
        "x": 370,
        "y": 678,
        "width": 71,
        "height": 80
      },
      "trading": {
        "x": 370,
        "y": 871,
        "width": 71,
        "height": 49
      },
      "bank_deposit_account_fees": {
        "x": 370,
        "y": 1043,
        "width": 71,
        "height": 14
      },
      "other_revenue": {
        "x": 370,
        "y": 1168,
        "width": 71,
        "height": 11
      },
      "revenue": {
        "x": 977,
        "y": 678,
        "width": 72,
        "height": 303
      },
      "pretax_income": {
        "x": 1615,
        "y": 539,
        "width": 72,
        "height": 160
      },
      "operating_expenses": {
        "x": 1615,
        "y": 1032,
        "width": 72,
        "height": 143
      },
      "net_income": {
        "x": 2238,
        "y": 291,
        "width": 71,
        "height": 123
      },
      "tax": {
        "x": 2238,
        "y": 468,
        "width": 71,
        "height": 37
      },
      "compensation_benefits": {
        "x": 2238,
        "y": 556,
        "width": 71,
        "height": 74
      },
      "professional_services": {
        "x": 2238,
        "y": 705,
        "width": 71,
        "height": 14
      },
      "occupancy": {
        "x": 2238,
        "y": 809,
        "width": 71,
        "height": 14
      },
      "comm": {
        "x": 2238,
        "y": 907,
        "width": 71,
        "height": 8
      },
      "da": {
        "x": 2238,
        "y": 1015,
        "width": 71,
        "height": 8
      },
      "advertising": {
        "x": 2238,
        "y": 1111,
        "width": 71,
        "height": 6
      },
      "acquired_intangible_assets": {
        "x": 2238,
        "y": 1209,
        "width": 71,
        "height": 4
      },
      "regulatory_fee": {
        "x": 2238,
        "y": 1295,
        "width": 71,
        "height": 2
      },
      "other_expenses": {
        "x": 2238,
        "y": 1366,
        "width": 71,
        "height": 12
      }
    },
    "labels": {
      "net_interest": {
        "blocks": [
          {
            "x": 305,
            "top": 447,
            "lines": [
              {
                "text": "Net interest",
                "size": 40,
                "weight": 800,
                "color": "#00a0df"
              }
            ],
            "anchor": "end",
            "lineGap": 9
          },
          {
            "x": 405,
            "top": 306,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a0df"
              },
              {
                "text": "+14% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "asset_management": {
        "blocks": [
          {
            "x": 314,
            "top": 669,
            "lines": [
              {
                "text": "Asset",
                "size": 40,
                "weight": 800,
                "color": "#00a0df"
              },
              {
                "text": "management",
                "size": 40,
                "weight": 800,
                "color": "#00a0df"
              }
            ],
            "anchor": "end",
            "lineGap": 9
          },
          {
            "x": 405,
            "top": 584,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a0df"
              },
              {
                "text": "+14% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "trading": {
        "blocks": [
          {
            "x": 305,
            "top": 875,
            "lines": [
              {
                "text": "Trading",
                "size": 40,
                "weight": 800,
                "color": "#00a0df"
              }
            ],
            "anchor": "end",
            "lineGap": 9
          },
          {
            "x": 405,
            "top": 780,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a0df"
              },
              {
                "text": "+16% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "bank_deposit_account_fees": {
        "blocks": [
          {
            "x": 305,
            "top": 998,
            "lines": [
              {
                "text": "Bank deposit",
                "size": 40,
                "weight": 800,
                "color": "#00a0df"
              },
              {
                "text": "account fees",
                "size": 40,
                "weight": 800,
                "color": "#00a0df"
              }
            ],
            "anchor": "end",
            "lineGap": 9
          },
          {
            "x": 405,
            "top": 951,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a0df"
              },
              {
                "text": "+40% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 305,
            "top": 1151,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800,
                "color": "#00a0df"
              }
            ],
            "anchor": "end",
            "lineGap": 9
          },
          {
            "x": 405,
            "top": 1076,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a0df"
              },
              {
                "text": "+101% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1014,
            "top": 530,
            "lines": [
              {
                "text": "Net revenue",
                "size": 40,
                "weight": 800,
                "color": "#00a0df"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a0df"
              },
              {
                "text": "+17% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1650,
            "top": 427,
            "lines": [
              {
                "text": "Pretax income",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1650,
            "top": 1192,
            "lines": [
              {
                "text": "Non interest",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2474,
            "top": 286,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "+23% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2485,
            "top": 474,
            "lines": [
              {
                "text": "Tax ($0.9B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2485,
            "top": 540,
            "lines": [
              {
                "text": "Compensation",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& benefits",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 2485,
            "top": 680,
            "lines": [
              {
                "text": "Professional services",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2485,
            "top": 803,
            "lines": [
              {
                "text": "Occupancy ($0.3B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 2485,
            "top": 1103,
            "lines": [
              {
                "text": "Advertising ($0.1B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "comm": {
        "blocks": [
          {
            "x": 2485,
            "top": 901,
            "lines": [
              {
                "text": "Comm. ($0.2B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2485,
            "top": 1006,
            "lines": [
              {
                "text": "D&A ($0.2B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "acquired_intangible_assets": {
        "blocks": [
          {
            "x": 2485,
            "top": 1179,
            "lines": [
              {
                "text": "Acquired intangible",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "assets",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "regulatory_fee": {
        "blocks": [
          {
            "x": 2485,
            "top": 1284,
            "lines": [
              {
                "text": "Regulatory fee ($0.1B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "other_expenses": {
        "blocks": [
          {
            "x": 2485,
            "top": 1361,
            "lines": [
              {
                "text": "Other ($0.3B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "嘉信理财 · 2026 财年第三季度",
      "meta": {
        "title": "嘉信理财 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月",
        "titleTextLength": 1850
      },
      "annotationsSvg": "<g><rect x=\"54\" y=\"1210\" width=\"466\" height=\"148\" rx=\"29\" fill=\"#00a0df\"/><text x=\"287\" y=\"1261\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">活跃经纪账户</text><text data-operating-metric=\"brokerage_accounts\" x=\"287\" y=\"1301\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">40.3M</text><text x=\"287\" y=\"1333\" text-anchor=\"middle\" font-size=\"24\" fill=\"#fff\">同比 +6%</text></g><g><rect x=\"532\" y=\"1210\" width=\"369\" height=\"148\" rx=\"29\" fill=\"#00a0df\"/><text x=\"716.5\" y=\"1261\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">银行账户</text><text data-operating-metric=\"banking_accounts\" x=\"716.5\" y=\"1301\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">2.4M</text><text x=\"716.5\" y=\"1333\" text-anchor=\"middle\" font-size=\"24\" fill=\"#fff\">同比 +13%</text></g>",
      "nodes": {
        "net_interest": {
          "label": "净利息收入",
          "notes": [
            "同比 +14%"
          ]
        },
        "asset_management": {
          "label": "资产管理",
          "notes": [
            "同比 +14%"
          ]
        },
        "trading": {
          "label": "交易",
          "notes": [
            "同比 +16%"
          ]
        },
        "bank_deposit_account_fees": {
          "label": "银行存款账户费用",
          "notes": [
            "同比 +40%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +101%"
          ]
        },
        "revenue": {
          "label": "净收入",
          "notes": [
            "同比 +17%"
          ]
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "operating_expenses": {
          "label": "非利息费用"
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 +23%"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "compensation_benefits": {
          "label": "薪酬与福利"
        },
        "professional_services": {
          "label": "专业服务"
        },
        "occupancy": {
          "label": "场地占用"
        },
        "advertising": {
          "label": "广告"
        },
        "comm": {
          "label": "通信费用"
        },
        "da": {
          "label": "折旧与摊销"
        },
        "acquired_intangible_assets": {
          "label": "收购无形资产"
        },
        "regulatory_fee": {
          "label": "监管费用"
        },
        "other_expenses": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "net_interest": {
            "blocks": [
              {
                "x": 305,
                "top": 447,
                "lines": [
                  {
                    "text": "净利息收入",
                    "size": 36,
                    "weight": 800,
                    "color": "#00a0df"
                  }
                ],
                "anchor": "end",
                "lineGap": 9
              },
              {
                "x": 405,
                "top": 306,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a0df"
                  },
                  {
                    "text": "同比 +14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "asset_management": {
            "blocks": [
              {
                "x": 314,
                "top": 695,
                "lines": [
                  {
                    "text": "资产管理",
                    "size": 36,
                    "weight": 800,
                    "color": "#00a0df"
                  }
                ],
                "anchor": "end",
                "lineGap": 9
              },
              {
                "x": 405,
                "top": 584,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a0df"
                  },
                  {
                    "text": "同比 +14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "trading": {
            "blocks": [
              {
                "x": 305,
                "top": 875,
                "lines": [
                  {
                    "text": "交易",
                    "size": 36,
                    "weight": 800,
                    "color": "#00a0df"
                  }
                ],
                "anchor": "end",
                "lineGap": 9
              },
              {
                "x": 405,
                "top": 780,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a0df"
                  },
                  {
                    "text": "同比 +16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "bank_deposit_account_fees": {
            "blocks": [
              {
                "x": 305,
                "top": 1027.5,
                "lines": [
                  {
                    "text": "银行存款账户费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#00a0df"
                  }
                ],
                "anchor": "end",
                "lineGap": 9
              },
              {
                "x": 405,
                "top": 951,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a0df"
                  },
                  {
                    "text": "同比 +40%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 305,
                "top": 1151,
                "lines": [
                  {
                    "text": "其他",
                    "size": 36,
                    "weight": 800,
                    "color": "#00a0df"
                  }
                ],
                "anchor": "end",
                "lineGap": 9
              },
              {
                "x": 405,
                "top": 1076,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a0df"
                  },
                  {
                    "text": "同比 +101%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1014,
                "top": 530,
                "lines": [
                  {
                    "text": "净收入",
                    "size": 36,
                    "weight": 800,
                    "color": "#00a0df"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a0df"
                  },
                  {
                    "text": "同比 +17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1650,
                "top": 427,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 36,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1650,
                "top": 1192,
                "lines": [
                  {
                    "text": "非利息费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2474,
                "top": 286,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "同比 +23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2485,
                "top": 474,
                "lines": [
                  {
                    "text": "税费 （$0.9B）",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2485,
                "top": 540,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 2485,
                "top": 680,
                "lines": [
                  {
                    "text": "专业服务",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2485,
                "top": 803,
                "lines": [
                  {
                    "text": "场地占用 （$0.3B）",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 2485,
                "top": 1103,
                "lines": [
                  {
                    "text": "广告 （$0.1B）",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "comm": {
            "blocks": [
              {
                "x": 2485,
                "top": 901,
                "lines": [
                  {
                    "text": "通信费用 （$0.2B）",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2485,
                "top": 1006,
                "lines": [
                  {
                    "text": "折旧与摊销 （$0.2B）",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "acquired_intangible_assets": {
            "blocks": [
              {
                "x": 2485,
                "top": 1179,
                "lines": [
                  {
                    "text": "收购无形资产",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "regulatory_fee": {
            "blocks": [
              {
                "x": 2485,
                "top": 1284,
                "lines": [
                  {
                    "text": "监管费用 （$0.1B）",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "other_expenses": {
            "blocks": [
              {
                "x": 2485,
                "top": 1361,
                "lines": [
                  {
                    "text": "其他 （$0.3B）",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          }
        }
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "schwab-logo",
      "href": "data/assets/raster-annotations/schwab/logo-q3-fy26.png",
      "x": 899,
      "y": 257,
      "width": 232,
      "height": 232,
      "clearance": true
    }
  ],
  "operatingMetrics": [
    {
      "id": "brokerage_accounts",
      "value": "40300000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "40.3M"
    },
    {
      "id": "banking_accounts",
      "value": "2400000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "2.4M"
    }
  ]
});
